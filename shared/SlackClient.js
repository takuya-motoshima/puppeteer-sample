import dotenv from 'dotenv';
import { WebClient } from '@slack/web-api';
import fs from 'fs';
import path from 'path';

export default class {
  
  constructor(token) {
    this.client = new WebClient(token);
  }

  /**
   * Upload images to Slack.
   * If you want to send images to Slack, add a "files: write" scope to your Slack API.
   * See: https://api.slack.com/methods/chat.postMessage
   */
  async uploadImage(channel, filepath) {
    const filename = path.basename(filepath);
    const response = await this.client.files.upload({channels: channel, file: fs.createReadStream(filepath), filename});
    return response;
  }
}