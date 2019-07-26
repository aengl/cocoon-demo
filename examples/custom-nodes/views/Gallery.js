/**
 * Custom views in Cocoon have a node and a browser component.
 *
 * The node part is responsible for serialising data for the browser component.
 * Since the browser component lives in a different process, data has to be
 * transported via IPC, and sending all data would often be wasteful and
 * inefficient.
 *
 * In this case we don't have a lot of data, so we can go the lazy route and
 * just forward all the data.
 */

module.exports.Gallery = {
  serialiseViewData: async (context, data, state) => data,
};
