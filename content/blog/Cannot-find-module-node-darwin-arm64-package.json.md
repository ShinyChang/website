---
path: 解決-M1-Cannot-find-module-node-darwin-arm64-package.json
date: 2022-06-30T22:11:19Z
title: 解決 M1 Cannot find module 'node-darwin-arm64/package.json'
description: 
tags: ["node.js"]
---

今天在安裝新東西的時候遇到 `Cannot find module 'node-darwin-arm64/package.json'` 這個錯誤訊息，查了一下沒有太多的資訊，解決辦法也是蠻妙的，把架構改成 x86 就可以解決這問題，來源可以參考最後面的 References，不過因為我不是用 `nvm`，而是用 `n`，所以範例就會用 `n` 的指令來替代，沒用過 `n` 的可以先用下面指令安裝

```
yarn global add n
```

接著就可以開始解決這問題

```
arch -x86_64 zsh # 指令架構為 x86_64，細節我也不懂 :/
n 16 # 就會開始安裝最新版的 Node.js v16
```

最後在 `yarn` 就可以成功安裝了


#### References

https://stackoverflow.com/questions/68896696/having-trouble-installing-npm-on-mac-m1
