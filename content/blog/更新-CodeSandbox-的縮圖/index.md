---
path: 更新-CodeSandbox-的縮圖
date: 2020-06-02T10:43:23Z
title: 更新 CodeSandbox 的縮圖
description:
tags: ["CodeSandbox"]
---

有時候 CodeSandbox 會產生出過時的縮圖，但是重新整理都無法更新成你想要的圖片，這個時候就需要呼叫 API 來更新

舉例來說，如果你的 Sandbox 網址是這樣

```
https://codesandbox.io/s/recoil-color-picker-nh1gw
```

呈現的內容如下

<iframe
     src="https://codesandbox.io/embed/recoil-color-picker-nh1gw?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="recoil-color-picker"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

其中 `recoil-color-picker-nh1gw` 就會是 `sandboxId`，接著開啟新分頁並前往以下網址

```
https://codesandbox.io/api/v1/sandboxes/$sandboxId/screenshot.png
```

就可以更新縮圖了
