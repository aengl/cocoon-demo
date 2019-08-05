const puppeteer = require('puppeteer');

module.exports = async function*(context, args) {
  context.debug('create', args);
  const browser = await puppeteer.launch(args);
  const page = await browser.newPage();
  context.browser = browser;
  context.page = page;
};
