---
path: CSS-中的-0.5px-border
date: 2020-12-21T11:54:06Z
title: CSS 中的 0.5px Border
description:
tags: ["CSS"]
---

```
designer: 我的 border 是 0.5px 耶
engineer: 我是設定 0.5px 呀，可是 Chrome 自動把他變成 1px 了
engineer: 不是差 0.5px 而已嗎，看來差不多
designer: 0.5px 和 1px 差很多好嗎，看起來變得很重
engineer: 螢幕最小單位就是 1px 啊，要怎麼顯示 0.5px 拉
engineer: 我幫你把 border 變淡了，讓他看起來很像
designer: 好吧，就這樣吧，你都說沒辦法了
```

透過刷淡 border 的顏色可以在畫面上呈現差不多的結果，但是其實眼睛貼到螢幕上看，或是放大來看，是真的有差異的，只是~~一般人~~工程師真的不太會注意到，下面兩圖片分別是，設計稿(Figma)，1px 寬的 border 刷淡

|                               |
| ----------------------------- |
| ![](./images/Rectangle-1.png) |
| ![](./images/1px-border.png)  |

是不是真的有差啊？！所以說 0.5px 還是很重要的！！

要實現 0.5px 其實是有方法的，只要先準備好**兩倍大**的容器設定好 1px 的 border 然後在縮回去，就變成 0.5px 了，講是這樣講，那實際上要怎麼用 CSS 做出來呢？

```css
.wrapper {
  position: relative;
}
.wrapper:before {
  content: "";
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  border: 1px solid;
  transform: scale(0.5);
}
```

只要透過偽元素往四個方向擴大 50% 就會變成原來的兩倍大小了，設定好 border 以後在套用 `transform: scale(0.5)` 就可以回復原來的大小

<iframe src="https://codesandbox.io/embed/05px-border-h94hf?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="0.5px border"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
