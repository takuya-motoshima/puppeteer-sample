# puppeteer-sample

This is a sample that runs puppeteer's headless browser on Linux OS.  

The following is the result of capturing "test-page/index.html" in this package with Puppeteer.  

![result.png](https://raw.githubusercontent.com/takuya-motoshima/puppeteer-sample/main/screencap/result.png)

# Getting Started

Install chrome.  
Add the Google Chrome browser repository to "/etc/yum.repos.d/google.chrome.repo".  

```sh
[google-chrome]
name=google-chrome
baseurl=http://dl.google.com/linux/chrome/rpm/stable/$basearch
enabled=1
gpgcheck=1
gpgkey=https://dl-ssl.google.com/linux/linux_signing_key.pub
```

Install Chrome.  

```sh
sudo yum -y install google-chrome-stable;
```

Install the font so that it will not be garbled when you take a screenshot with puppeteer.  

```sh
sudo yum -y install ipa-gothic-fonts;
```

Install a third party for this package.  

```sh
npm install;
```

Run the sample program.  

This is a sample that simply takes a screenshot.  
You can check the browser information.  
After execution, the screenshot will be added to "screenshot/".  

```sh
node --experimental-modules run-basic.js https://<Your hostYour host name>/test-page/basic.htmll;
```

This is a sample of clicking a button on the test page.  

```sh
node --experimental-modules run-click.js https://<Your hostYour host name>/test-page/click.html;
```