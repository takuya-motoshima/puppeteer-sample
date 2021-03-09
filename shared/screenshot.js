import moment from 'moment';

/**
 * screenshot.
 */
export default async function(page) {
  // Screenshot file name.
  if (!globalThis.screenshotfilename) globalThis.screenshotfilename = moment().format('YYYYMMDDHHmmss');
  if (!globalThis.screenshotfileno) globalThis.screenshotfileno = 0;

  // Output screenshot.
  await page.screenshot({ path: `screenshot/${globalThis.screenshotfilename}_${++globalThis.screenshotfileno}.png` });
}