# How to Slack API

## Create an app
Add new apps from [Slack API](https://api.slack.com/apps?new_app=1) to Slack API.  

Enter the app name, select the workspace, and click Create App.  

![how-to-slack-api-1.png](https://raw.githubusercontent.com/takuya-motoshima/puppeteer-sample/main/screencap/how-to-slack-api-1.png)

## Set scope for your app

Click OAuth & Permission.  

![how-to-slack-api-2.png](https://raw.githubusercontent.com/takuya-motoshima/puppeteer-sample/main/screencap/how-to-slack-api-2.png)

In the Scopes section, under "Bot Token Scopes" and "User Token Scopes", click "Add an OAuth Scope" to add a "chat: write" scope.  

![how-to-slack-api-3.png](https://raw.githubusercontent.com/takuya-motoshima/puppeteer-sample/main/screencap/how-to-slack-api-3.png)

## Install the app in your workspace

After setting the scope, the "Install App to Workspace" button is enabled at the top of the same page, so click it.  

![how-to-slack-api-4.png](https://raw.githubusercontent.com/takuya-motoshima/puppeteer-sample/main/screencap/how-to-slack-api-4.png)

You will be asked for permission, so allow it.  

![how-to-slack-api-5.png](https://raw.githubusercontent.com/takuya-motoshima/puppeteer-sample/main/screencap/how-to-slack-api-5.png)

If you successfully install the app, two tokens will be generated, so save them.  

![how-to-slack-api-6.png](https://raw.githubusercontent.com/takuya-motoshima/puppeteer-sample/main/screencap/how-to-slack-api-6.png)

## Add app to channel

NOTE: Required to run the API as a bot. Not required when running the API as a user.  

Add the app to the channel you want to post a message on.  
Click Channel Details-> Others-> Add App  
Add the app created this time.  

![how-to-slack-api-7.png](https://raw.githubusercontent.com/takuya-motoshima/puppeteer-sample/main/screencap/how-to-slack-api-7.png)

## Post a message

You can post a message by sending a POST request to "https://slack.com/api/chat.postMessage".  
The required parameters are as follows.  

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>token</td>
      <td>OAuth Token</td>
    </tr>
    <tr>
      <td>channel</td>
      <td>Where to post the message. #Channel name or @username.</td>
    </tr>
    <tr>
      <td>text</td>
      <td>The body of the message. Markdown can be used.</td>
    </tr>
  </tbody>
</table>

Sample using curl command.  

Try using a token for the bot.  

```sh
curl -X POST 'https://slack.com/api/chat.postMessage' \
  -d 'token=xoxb-xxxxxxxxxxxx-xxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxx' \
  -d 'channel=#slack_test' \
  -d 'text=*Hello, World!*'
```

I was able to post a message as a bot (app).  

![how-to-slack-api-8.png](https://raw.githubusercontent.com/takuya-motoshima/puppeteer-sample/main/screencap/how-to-slack-api-8.png)

Try using a token for the user.  

```sh
curl -X POST 'https://slack.com/api/chat.postMessage' \
  -d 'token=xoxp-xxxxxxxxxxxx-xxxxxxxxxxxx-xxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
  -d 'channel=#slack_test' \
  -d 'text=*Hello, World!*'
```

I was able to post a message as a user.  

![how-to-slack-api-9.png](https://raw.githubusercontent.com/takuya-motoshima/puppeteer-sample/main/screencap/how-to-slack-api-9.png)