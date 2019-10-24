---
date: 2019-10-24T11:12:57Z
title: yarn 安裝到舊的 GitHub 的 module
tags: ["yarn", "GitHub", "Node.js"]
---

開發專案中有時候會需要載入沒有發布到 npm 的 module 到專案中使用，這個時候就會直接指定 GitHub 的網址為版本號，譬如說

```json
{
  "dependencies": {
    "react-text-truncate": "https://github.com/ShinyChang/React-Text-Truncate"
  }
}
```

這樣子就會直接抓 GitHub 上 default branch 的 source code 來當作 module 使用，理論上不會有什麼問題，但是當 source 有更新的時候，就不知道為什麼 yarn 沒辦法抓到更新後的資訊，即便已經用了 `yarn cache clean` 把 cache 都清除掉了也還是沒有辦法解決這問題。

最先找到的方式是直接把 commit sha 放在 link 上，如下：

```json
{
  "dependencies": {
    "react-text-truncate": "https://github.com/ShinyChang/React-Text-Truncate#90d7b798c097b42f2c1d6a1479e985882e87b4e9"
  }
}
```

這樣確實解決了，但是有點麻煩的是，未來要更新的時候都需要手動更新，強者我同事就說了另一個方式：`yarn link`

首先呢要先把該 repo clone 下來到本機資料夾，接著進去資料夾裡面輸入 `yarn link`，然後就會看到一串新的指令類似下面這樣：

```
yarn link react-text-truncate
```

接著進去要使用該 repo 的專案，輸入上面這串指令，就會連結完成，未來有更新就可以直接更新本機資料夾就可以了，這個方法也可以用來 debug 第三方的套件。

最後如果都測試完畢了，記得要把 link 移除掉，只要輸入以下類似的指令就可以了：

```
yarn unlink react-text-truncate
```
