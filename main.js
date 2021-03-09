const puppeteer = require('puppeteer');
const moment = require("moment");

// URL of the operation target page.
const url = process.argv.length > 2 ? process.argv[2] : undefined;

// Returns an error if there is no URL.
if (!url) throw new Error('URL is required.');

(async () => {

  // Launch the browser.
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-gpu'
    ],
    // Ignore HTTP errors such as ssl certificates.
    ignoreHTTPSErrors: false,
    // Run in headless mode.
    headless: true,
    // The speed of operation. By setting slowMo to about 1000, it is possible to realize operations that are closer to human movements.
    slowMo: 1000
  });

  const page = await browser.newPage();

  // Set the device.
  const device = puppeteer.devices['Pixel 2'];
  await page.emulate(device);

  // Set viewport.
  await page.setViewport({width: device.viewport.width, height: device.viewport.height});

  // Open page.
  await page.goto(url);

  // screenshot.
  await page.screenshot({ path: `screenshot/${moment().format('YYYYMMDDHHmmss')}.png` });
  await browser.close();
  console.log('Succeeded.');
})();
