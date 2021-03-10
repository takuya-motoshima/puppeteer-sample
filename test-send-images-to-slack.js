import SlackClient from './shared/SlackClient.js';
import dotenv from 'dotenv';

// Get the channel name from the command argument.
const channel = process.argv.length > 2 ? process.argv[2] : undefined;

// Returns an error if there is no channel.
if (!channel) throw new Error('Channel is required.');

(async () => {
  // Get Slack API tokens from ".env".
  dotenv.config();

  // Upload images to Slack.
  const client = new SlackClient(process.env.SLACK_API_TOKEN);
  const response = await client.uploadImage(channel, './sample.jpg');

  // Check the response.
  console.log(response);
})();
