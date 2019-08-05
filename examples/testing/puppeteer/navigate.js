module.exports = async function*(context, args) {
  context.debug('navigate', args);
  const { page } = context;
  yield `Navigating to ${args.url}`;
  await page.goto(args.url);
};
