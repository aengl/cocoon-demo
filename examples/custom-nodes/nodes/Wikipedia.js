/**
 * Another custom node. Make sure to have a look at the documentation in
 * `ExampleNode.js` first, so that you're familiar with the basics.
 */

const _ = require('lodash');
const got = require('got');
const processTemporaryNode = require('@cocoon/util/processTemporaryNode')
  .default;

module.exports.Wikipedia = {
  category: 'I/O',
  description: `A custom Cocoon node that retrieves information via the Wikipedia API.`,

  in: {
    data: {
      description: `An array of Ghibli movie data.`,
    },
  },

  out: {
    data: {
      description: `The input data, annotated with Wikipedia information.`,
    },
  },

  async *process(context) {
    const { data } = context.ports.read();

    /**
     * For performance reasons, the data in Cocoon is passed via reference
     * instead of making deep copies between every node. But we want to avoid
     * changing data in a way that would change it in the cache of previous
     * nodes as well, which could cause subtle issues in your processing
     * pipeline.
     *
     * There's various ways to create deep copies in Cocoon, the easiest of
     * which is annotating the input port with `clone: true`.
     *
     * But in this case it's sufficient to just shallow-copy the data since we
     * will write new objects to it.
     */
    const shallowDataCopy = [...data];

    for (let i = 0; i < data.length; i++) {
      /**
       * Remember that Cocoon processors are generator functions. That means we
       * can yield a progress report at any time, so that we can see it in the
       * editor.
       *
       * But it has another benefit: since Cocoon processing runs on a single
       * thread, to avoid expensive data serialisation, long processing tasks
       * can make the Cocoon process unresponsive. Breaking processing up into
       * smaller chunks also makes the processing interruptible.
       *
       * So yield often! The performance overhead is small, since UI updates are
       * throttled.
       */
      yield `Querying info for ${data[i].title}`;

      // Example query:
      // https://en.wikipedia.org/w/api.php?action=query&titles=My+Neighbor+Totoro&prop=images
      const pageInfo = await queryWikipedia(
        context,
        `titles=${encodeURIComponent(data[i].title)}&prop=images`
      );

      /**
       * It's not trivial to select the poster image. Wikipedia lists the images
       * in order, but the infobox image could be at any position. Our best
       * approach is to pick an image that contains the title.
       *
       * Fortunately for us, Cocoon has a node that can calculate a variety of
       * distance metrics, and even combine them to form complex
       * multi-dimensional distances.
       *
       * Cocoon nodes can use temporary nodes as part of its processing (since
       * nodes are really just functions). That way you can avoid building and
       * repeating and overly complex graphs in the Cocoon editor itself.
       */
      const distanceResults = {};
      for await (const progress of processTemporaryNode(
        context,
        'Distance',
        {
          affluent: pageInfo.images.map(x => ({ title: x.title })),
          attribute: 'related',
          data: [{ title: data[i].title }],
          metrics: {
            title: { type: 'String' },
          },
        },
        distanceResults
      )) {
        yield;
      }
      const bestImage = distanceResults.data[0].related[0].title;
      context.debug(
        `calculated title distances, best match is: ${bestImage}`,
        distanceResults
      );

      // Example query:
      // https://en.wikipedia.org/w/api.php?action=query&titles=File:My%20Neighbor%20Totoro%20-%20Tonari%20no%20Totoro%20(Movie%20Poster).jpg&prop=imageinfo&iiprop=url
      const imageInfo = await queryWikipedia(
        context,
        `titles=${encodeURIComponent(bestImage)}&prop=imageinfo&iiprop=url`
      );

      /**
       * It's usually good practice to construct a new object using the
       * spread-syntax, unless you're dealing with memory constraints or need to
       * optimise for performance. It's the least error prone way of annotating
       * the original data objects. Don't optimise prematurely!
       */
      shallowDataCopy[i] = {
        ...data[i],
        wikipedia: {
          ...pageInfo,
          ...imageInfo,
        },
      };
    }

    context.ports.write({ data: shallowDataCopy });
  },
};

async function queryWikipedia(context, query) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&${query}&format=json`;
  context.debug(`querying ${url}`);
  const results = await got(url, { json: true });
  context.debug(`got results:`, results.body);
  const pages = results.body.query.pages;
  return pages ? pages[Object.keys(pages)[0]] : null;
}
