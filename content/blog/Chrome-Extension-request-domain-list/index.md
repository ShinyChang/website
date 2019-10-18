---
date: 2019-10-18T10:20:49Z
title: "Chrome Extension: Request domain list"
tags: ["Chrome Extension"]
---

I received a request asking me to get all the domain names of the browser connection after the user interaction. It sounds not pretty hard to me. So, I open a new tab and open the DevTool to record the `Network` requests. Looks like everything works fine to me unless duplication of domain names and how to record the domain names from normal user.

Easy to use is the first priority, so I choose `Chrome Extension` to development. User can use GUI without any extra step
to complete you want they to do. The problem become how I can get the request list from chrome extension API.

After some survey of chrome extension, I found the API [chrome.webRequest](https://developer.chrome.com/extensions/webRequest) is the most suitable of this case. The API allow the extension modify the HTTP request header before sending or block it which just like ADBlocker did.

Before looking into code you can read the video of the final result.

<iframe width="560" height="315" src="https://www.youtube.com/embed/unN-NpNT4-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Then, create `background.js` and write some code like below to record the domain name of each request and store it into `Set` to get unique domain name.

```js
chrome.webRequest.onSendHeaders.addListener(
  details => {
    const { tabId, url } = details
    if (!tabs[tabId]) {
      tabs[tabId] = new Set()
    }
    try {
      tabs[tabId].add(new URL(url).host)
    } catch (e) {}
  },
  { urls: ["<all_urls>"] }
)
```

Once it be done, the next problem is how user can see the data from GUI? The easiest way is display the badge on the extension icon. The sample is like below:

```js
chrome.browserAction.setBadgeText({ text, tabId })
```

The final step is asking people install the [Chrome Extension](https://chrome.google.com/webstore/detail/request-domain-list/ofmgnfdeckolcidggipnjjanncpghbdi) and do below steps:

1. Open new tab
2. Do some interaction
3. Click the extension icon which on the right top of browser toolbar
4. Copy all of the text which in the popup html
5. Send domain names list to you

Source code hosted on [GitHub](https://github.com/ShinyChang/request-domain-list)
