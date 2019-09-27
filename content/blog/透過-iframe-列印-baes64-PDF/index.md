---
path: 用-JavaScript-透過-iframe-列印-baes64-的-PDF
date: 2019-09-26T11:15:00.000Z
title: 用 JavaScript 透過 iframe 列印 baes64 的 PDF
description: 在一開始很直覺得直接使用 Data URL 的方式把 base64 字串放到 iframe 裡面，很 OK 的呈現出來了然後在透過 iframe 裡面的 window 去 print PDF 但是遇到了一個不在預期內的問題...
tags: ["JavaScript"]
---

在一開始很直覺得直接使用 Data URL 的方式把 base64 字串放到 iframe 裡面，很 OK 的呈現出來了

```html
<iframe src="data:application/pdf;base64,{data}" />
```

然後在透過 iframe 裡面的 window 去 print PDF

```
iframe.contentWindow.print()
```

但是遇到了一個不在預期內的問題

```
Uncaught DOMException: Blocked a frame with origin "https://localhost" from accessing a cross-origin frame.
```

很明顯的是 CORS 的問題，沒有想過 Data URL 會有 CORS 的問題，所以只能換別的方式，所以 Google 了一下發現需要先轉成 Blob 物件在透過 URL 物件去 createObjectURL，這樣產生出來的 URL 就會是在同一個 domain 裡面的 URL，具體的程式碼如下：

```js
const data =
  "JVBERi0xLjMKJf////8KNiAwIG9iago8PAovVHlwZSAvUGFnZQovUGFyZW50IDEgMCBSCi9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9Db250ZW50cyA0IDAgUgovUmVzb3VyY2VzIDUgMCBSCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9Qcm9jU2V0IFsvUERGIC9UZXh0IC9JbWFnZUIgL0ltYWdlQyAvSW1hZ2VJXQovRm9udCA8PAovRjEgNyAwIFIKPj4KPj4KZW5kb2JqCjQgMCBvYmoKPDwKL0xlbmd0aCAxMDgKL0ZpbHRlciAvRmxhdGVEZWNvZGUKPj4Kc3RyZWFtCnicZYyxCsMwEEP3+wr9QFvrYvtSCB4CzZCtcFvpZPCWof+/9IZs4YEk3iAiBTdG2FPRD/kJL271UxKmMPI+zRl+yGMjqPAhnyXPtdQeDE0NOWEp1jBF12Ha4rDE7DUrG9IXvsvL5S1/qAkaqQplbmRzdHJlYW0KZW5kb2JqCjkgMCBvYmoKKAAAAAAAACkKZW5kb2JqCjEwIDAgb2JqCigAAAAAAAApCmVuZG9iagoxMSAwIG9iagooRDoyMDE5MDkyNjAzNDMxOFopCmVuZG9iago4IDAgb2JqCjw8Ci9Qcm9kdWNlciA5IDAgUgovQ3JlYXRvciAxMCAwIFIKL0NyZWF0aW9uRGF0ZSAxMSAwIFIKPj4KZW5kb2JqCjcgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL0Jhc2VGb250IC9IZWx2ZXRpY2EKL1N1YnR5cGUgL1R5cGUxCi9FbmNvZGluZyAvV2luQW5zaUVuY29kaW5nCj4+CmVuZG9iagozIDAgb2JqCjw8Cj4+CmVuZG9iagoyIDAgb2JqCjw8Ci9UeXBlIC9DYXRhbG9nCi9QYWdlcyAxIDAgUgo+PgplbmRvYmoKMSAwIG9iago8PAovVHlwZSAvUGFnZXMKL0NvdW50IDEKL0tpZHMgWzYgMCBSXQo+PgplbmRvYmoKeHJlZgowIDEyCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDcxNCAwMDAwMCBuIAowMDAwMDAwNjY1IDAwMDAwIG4gCjAwMDAwMDA2NDQgMDAwMDAgbiAKMDAwMDAwMDIwOCAwMDAwMCBuIAowMDAwMDAwMTE5IDAwMDAwIG4gCjAwMDAwMDAwMTUgMDAwMDAgbiAKMDAwMDAwMDU0NyAwMDAwMCBuIAowMDAwMDAwNDczIDAwMDAwIG4gCjAwMDAwMDAzODggMDAwMDAgbiAKMDAwMDAwMDQxMiAwMDAwMCBuIAowMDAwMDAwNDM3IDAwMDAwIG4gCnRyYWlsZXIKPDwKL1NpemUgMTIKL1Jvb3QgMiAwIFIKL0luZm8gOCAwIFIKL0lEIFs8MzU3YjZkMjUyNjlmN2RjNDA2YTQ4ZDllOWE4NWRjYzY+IDwzNTdiNmQyNTI2OWY3ZGM0MDZhNDhkOWU5YTg1ZGNjNj5dCj4+CnN0YXJ0eHJlZgo3NzEKJSVFT0YK"
const bytesArray = Uint8Array.from(atob(data), c => c.charCodeAt(0))
const pdfBlob = new window.Blob([bytesArray], { type: "application/pdf" })
iframe.src = window.URL.createObjectURL(pdfBlob)
iframe.contentWindow.print()
```

最後產出來的 URL 會像是：

```
blob:https://localhost/71907d8b-46f5-4847-9bfb-c52ac1a0473d
```

就可以解決 CORS 的問題，也就可以的透過 JavaScript 正常列印了
