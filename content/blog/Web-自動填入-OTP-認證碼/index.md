---
path: Web-自動填入-OTP-認證碼
date: 2020-04-09T12:14:25Z
title: Web 自動填入 OTP 認證碼
description: 首先，開啟瀏覽器，並且輸入網址：https://www.sublimetext.com/ ，到 Sublime Text的官方網站
tags: ["HTML", "UX"]
---

首先需要把原本輸入 OTP 的 Input 加上屬性 `autocomplete` 並且設定值為 `one-time-code` 詳細如下：

```xml
<input type="number" autocomplete="one-time-code" required />
```

接著在收到簡訊以後後，鍵盤上面就會出現 OTP 驗證碼的內容可以直接填上，就可以省去看查看通知清單或點進去訊息內容並且記住密碼，然後返回輸入畫面並且慢慢輸入 OTP 的驗證碼，來來回回應該可以省下 3\~5 秒鐘以上，另外如果是 Chrome 81 以上的，也可以用 browser API 來自動填入訊息

```js
const otpField = document.querySelector("input")
if ("sms" in navigator) {
  const sms = await navigator.sms.receive()
  const code = sms.content.match(/^[\s\S]*otp=([0-9]{6})[\s\S]*$/m)[1]
  if (code) {
    otpField.value = code
  }
}
```

References:

1. https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
2. https://developer.apple.com/documentation/security/password_autofill/enabling_password_autofill_on_an_html_input_element
3. https://web.dev/web-otp/
