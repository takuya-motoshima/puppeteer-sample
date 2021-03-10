import puppeteer from 'puppeteer';

/**
 * Open page.
 */
export default async function(options) {
  // Initialize options.
  options = Object.assign({browser: undefined, url: undefined}, options);

  // New page operated from the browser.
  const page = await options.browser.newPage();

  // Set the device.
  const device = puppeteer.devices['Pixel 2'];
  await page.emulate(device);

  // Set viewport.
  await page.setViewport({
    width: device.viewport.width,
    height: device.viewport.height
  });

  // Page load event.
  page.on('load', () => console.log(`Page loaded ${page.url()}`));


  // Open page.
  await page.goto(options.url);

  // Track the emulator console log..
  page.on('console', async msg => {
    // // serialize my args the way I want
    // const args = await Promise.all(msg.args().map(arg => arg.executionContext().evaluate(arg => {
    //   // I'm in a page context now. If my arg is an error - get me its message.
    //   if (arg instanceof Error)
    //     return arg.message;
    //   // return arg right away. since we use `executionContext.evaluate`, it'll return JSON value of
    //   // the argument if possible, or `undefined` if it fails to stringify it.
    //   return arg;
    // }, arg)));
    // console.log(...args);
    for (let i = 0; i < msg.args().length; ++i) console.log(`${i}: ${msg.args()[i]}`);
  });

  // Returns page.
  return page;
}