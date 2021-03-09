import launchBrowser from './shared/launchBrowser.js';
import openPage from './shared/openPage.js';
import screenshot from './shared/screenshot.js';

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

    // Click the button.
    await page.evaluate(async () => {
      const btn = document.querySelector('#btn');
      if (!btn) return console.log('Button not found')
      btn.click();
    });

    // screenshot.
    await screenshot(page);
  } finally {
    await browser.close();
  }
})();
