module.exports = async function*(context, args) {
  const { page } = context;
  context.debug('click', args);
  await page.waitForSelector(args.selector);
  await page.click(args.selector);
  yield `Clicked ${args.selector}`;
};
