import launchBrowser from './shared/launchBrowser.js';
import openPage from './shared/openPage.js';
import screenshot from './shared/screenshot.js';
import joinImages from 'join-images';

// URL of the operation target page.
const url = process.argv.length > 2 ? process.argv[2] : undefined;

// Returns an error if there is no URL.
if (!url) throw new Error('URL is required.');

(async () => {
  let browser;

  try {
    // Launch the browser.
    browser = await launchBrowser();

    // Open page.
    const page = await openPage({browser, url});

    // screenshot.
    await screenshot(page);

    // Open Guidance.
    await page.evaluate(async () => {
      console.log('Open Guidance 1');
      const btnselector = `#picStart`;
      const btn = document.querySelector(btnselector);
      if (!btn) return console.log(`The button "${btnselector}" cannot be found`)
      btn.click();
    });
    await screenshot(page);

    // Open Guidance 2 and 3 and the pre-shooting page.
    for (let i=1; i<=3; i++) {
      await page.evaluate(i => {
        const root = document.querySelector('body>div:last-child').shadowRoot;
        if (!root) return console.log('Shadow root not found');
        let btnattr;
        if (i<3) {
          btnattr = 'on-slide-to';
          console.log(`Open Guidance ${i+1}`);
        } else {
          btnattr = 'on-open';
          console.log('Open the pre-shooting page');
        }
        const btnselector = `.slick-slide:nth-child(${i}) [${btnattr}]`;
        const btn = root.querySelector(btnselector);
        if (!btn) return console.log(`The button "${btnselector}" cannot be found`)
        btn.click();
      }, i);
      await screenshot(page);
    }

    // Open the shooting page.
    await page.evaluate(() => {
      console.log('Open the shooting page');
      const root = document.querySelector('body>div:last-child').shadowRoot;
      if (!root) return console.log('Shadow root not found');
      const main = root.querySelector('.container main:nth-of-type(3)');
      const btn = main.querySelector(`[on-continue]`);
      if (!btn) return console.log(`The button "[on-continue]" cannot be found`)
      btn.click();
    });
    await screenshot(page);

    // Take a picture and complete the identity verification.
    await page.evaluate(() => {
      console.log('Take a picture');
      const root = document.querySelector('body>div:last-child').shadowRoot;
      if (!root) return console.log('Shadow root not found');
      const main = root.querySelector('.container main:nth-of-type(2)');
      const btn = main.querySelector(`[on-take]`);
      if (!btn) return console.log(`The button "[on-take]" cannot be found`)
      btn.click();
    });
    await screenshot(page);

    // Confirm the photo you took.
    await page.evaluate(() => {
      console.log('Confirm the photo you took');
      const root = document.querySelector('body>div:last-child').shadowRoot;
      if (!root) return console.log('Shadow root not found');
      const main = root.querySelector('.container main:nth-of-type(2)');
      const btn = main.querySelector(`[on-accept]`);
      if (!btn) return console.log(`The button "[on-accept]" cannot be found`)
      btn.click();
    });
    await screenshot(page);
  } finally {
    await browser.close();
  }
})();