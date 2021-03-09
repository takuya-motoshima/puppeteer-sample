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
  page.on('console', msg => {
    // console.log.apply(null, msg.args());
    for (let i = 0; i < msg.args().length; ++i) console.log(`${i}: ${msg.args()[i]}`);
  });

  // Returns page.
  return page;
}