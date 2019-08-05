module.exports = async function*(context, args) {
  context.debug('title', args);
  const { page } = context;
  context.title = await page.title();
  yield context.title;
};
