import dotenv from 'dotenv';
import { WebClient } from '@slack/web-api';

// Get the channel name from the command argument.
const channel = process.argv.length > 2 ? process.argv[2] : undefined;

// Returns an error if there is no channel.
if (!channel) throw new Error('Channel is required.');

(async () => {
  // Get Slack API tokens from ".env".
  dotenv.config();
  console.log(process.env.SLACK_API_token);

  const client = new WebClient(process.env.SLACK_API_token);
  const response = await client.chat.postMessage({channel, text: 'Hello, World!'});
  console.log(response);
})();
