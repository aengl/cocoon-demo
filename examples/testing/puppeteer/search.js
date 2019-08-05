module.exports = async function*(context, args) {
  context.debug('search', args);
  const { page } = context;
  await page.focus(args.selector);
  await page.keyboard.type(args.text);
  if (args.return) {
    await page.keyboard.press('Enter');
    await page.waitForNavigation();
  }
  yield `Typed "${args.text}"`;
};
