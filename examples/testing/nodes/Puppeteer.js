const _ = require('lodash');
const path = require('path');

module.exports.Puppeteer = {
  category: 'I/O',

  description: `Runs a Puppeteer script and takes a screenshot of the result.`,

  in: {
    args: {
      description: `Arguments passed to the Puppeteer script.`,
    },
    context: {
      description: `Context variables for the Puppeteer session.`,
    },
    path: {
      description: `Path to the Puppeteer script.`,
      required: true,
    },
  },

  out: {
    context: {
      description: `Context variables for the Puppeteer session.`,
    },
    src: {
      description: `Screenshot image source.`,
    },
  },

  async *process(context) {
    const {
      args,
      context: maybePuppeteerContext,
      path: scriptPath,
    } = context.ports.read();

    // Search Puppeteer scripts in the `puppeteer` directory
    const resolvedPath = path.resolve(__dirname, '../puppeteer', scriptPath);

    // Delete the Node.js require cache, which causes the script be be imported
    // every time the now is run. This allows us to adjust the scripts on the go
    // without re-running the entire test.
    delete require.cache[resolvedPath];
    const puppeteerScript = require(resolvedPath);

    // Inject the node debugging function into the Puppeteer context, so we can
    // print to the console within the scripts
    const puppeteerContext = maybePuppeteerContext || {};
    puppeteerContext.debug = context.debug;

    // Our Puppeteer scripts are generators, so we can easily print intermittent
    // status messages. We're using a context object (similar to contexts in
    // Cocoon) as a way to pass on a state from node to node. Be aware that this
    // state is not serialisable and gets modified by downstream nodes, so we
    // intentionally break some of the isomorphic properties that we usually
    // have. This has some consequences:
    // - Re-running nodes may produce different results (or break)
    // - Inspecting ports will not work (since we can't serialise the context)
    // - Persisting a node will not work for the same reason
    for await (const progress of puppeteerScript(puppeteerContext, args)) {
      yield progress;
    }

    // Take a screenshot
    const src = path.resolve(__dirname, '../puppeteer-screenshot.png');
    try {
      await puppeteerContext.page.screenshot({
        path: src,
      });
    } catch {
      // Ignore silently
    }

    // Output the context and screenshot path.
    context.ports.write({
      context: puppeteerContext,
      src,
    });
  },
};
