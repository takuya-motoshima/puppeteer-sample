import moment from 'moment';

/**
 * screenshot.
 */
export default class {

  constructor({ page, dir}) {
    this.page = page;
    this.dir = dir;
    this.filename = moment().format('YYYYMMDDHHmmss');
    this.no = 0;
  }

  /**
   * Write screenshot.
   */
  async write() {
    const path = `${this.dir}/screenshot/${this.filename}_${++this.no}.png`;
    console.log(`Write ${path}`);
    await this.page.screenshot({ path });
  }
}