---
path: 判斷是-trackpad-還是-mouse
date: 2022-02-16T23:12:43Z
title: 判斷是 trackpad 還是 mouse
description:
tags: ["JavaScript"]
---

在 JavaScript 的 event 裡面只能得到最後的結果，不能直接判斷輸入的來源，你可以用滑鼠滾輪來捲動頁面，也可以用觸控板來捲動頁面，在 JavaScript 裡面都會觸發 WheelEvent，但是實務上又必須要根據不同的滑鼠手勢或是不同的組合鍵來達到不同的效果，譬如說：

- 滑鼠
  - Wheel: 垂直捲動
  - Shift + Wheel: 水平捲動
  - Ctrl/Cmd + Wheel: 縮放
- 觸控板
  - Pinch: 縮放
  - 兩指滑動: 水平/垂直捲動

以上這些只能用 WheelEvent 裡面所提供的少數資訊來判斷，要判斷滑鼠的事件很簡單，只需要判斷 deltaX 或是 deltaY 就可以知道是水平還是垂直捲動了，另外需要在判斷 Ctrl/Cmd 有沒有按下，有的話就是縮放

而觸控板的部分，兩指滑動會同時改變 deltaX 和 deltaY，取決於你滑的夠不夠直，至於 Pinch，就需要額外的判斷，因為 WheelEvent 裡面只會改變 deltaY，所以無法判斷到底是在 Pinch 還是在垂直捲動，因為你無法從 WheelEvent 裡面得到到底幾跟手指在滑動，所幸瀏覽器會在你在 Pinch 的時候把 ctrlKey 設定為 true，所以這時候就會跟滑鼠的 Ctrl/Cmd + Wheel 的行為一樣了

所以程式碼就可以寫成以下這樣

```js
window.addEventListener("wheel", (e) => {
  if (e.ctrlKey || e.metaKey) {
    console.log("縮放")
  } else if (e.shiftKey) {
    console.log("水平捲動")
  } else {
    console.log("垂直捲動")
  }
})
```

以上用滑鼠都會完全正確，但是用觸控板的時候，水平或是垂直捲動判斷就不正確了，所以沒辦法直接透過 ctrlKey / metaKey/ shiftKey 直接的判斷該如何捲動，所以要滿足觸控板的判斷需要是下面

```js
window.addEventListener("wheel", (e) => {
  if (e.ctrlKey || e.metaKey) {
    console.log("縮放")
  } else if (e.shiftKey) {
    console.log("水平捲動")
  } else {
    if (e.deltaX && e.deltaY) {
      console.log("雙向捲動")
    } else if (e.deltaX) {
      console.log("水平捲動")
    } else {
      console.log("垂直捲動")
    }
  }
})
```

至於要如何更精確的判斷是滑鼠還是觸控板的話，可以參考以下規則

- 滑鼠滾動的 deltaY 不會是整數，deltaX 會是整數（shiftKey: true）
- 兩指滑動的 deltaX / deltaY 會是整數
- Pinch 的 deltaY 不會是整數

備註：

1. 以上判斷都是基於 macOS，在 Windows 上 Pinch 的 deltaY 會是整數
2. 在 Linux 上，Pinch 的時候 ctrlKey 不會是 true
3. 所有測試皆基於 Chrome
