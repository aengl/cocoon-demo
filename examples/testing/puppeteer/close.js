module.exports = async function*(context, args) {
  context.debug('close', args);
  context.browser.close();
  delete context.browser;
  yield 'Browser closed';
};
