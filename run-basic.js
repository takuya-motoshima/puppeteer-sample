import launchBrowser from './shared/launchBrowser.js';
import openPage from './shared/openPage.js';
import Screenshot from './shared/Screenshot.js';
import path from 'path';

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
    const screenshot = new Screenshot({ page, dir: path.dirname(process.argv[1])});

    // screenshot.
    await screenshot.write();
  } finally {
    await browser.close();
  }
})();
