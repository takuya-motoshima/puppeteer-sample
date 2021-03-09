import puppeteer from 'puppeteer';

/**
 * Launch a headless browser.
 */
export default async function() {
  // Launch the browser.
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-gpu',

      // Skip the webcam permission prompt.
      '--use-fake-ui-for-media-stream'
    ],
    // Ignore HTTP errors such as ssl certificates.
    ignoreHTTPSErrors: false,
    // Run in headless mode.
    headless: true,
    // The speed of operation. By setting slowMo to about 1000, it is possible to realize operations that are closer to human movements.
    slowMo: 1000
  });

  // Returns browser.
  return browser;
}