---
path: DNS redirect on AWS Route53
date: 2019-07-31T00:00:00.000Z
title: DNS redirect on AWS Route53
description: First, you have to create an s3 bucket which name is your old domain (e.g. old.example.com)and enter bucket and choose “Properties” > “Static website hosting”
tags: ["AWS"]
---

First, you have to create an s3 bucket which name is your old domain (e.g. old.example.com)and enter bucket and choose “Properties” > “Static website hosting”

![](./images/1RyqUljX3KZe4SAzABx2Kcw.png)

Then, enter your old domain (e.g. old.example.com) and protocol correctly.

Enter the route53 service and modify old domain recordset and make sure your alias is yes and select the target to s3 which you just created as below image shows.

![](./images/1NDFSwU6QfiF5_G4KmMGBbQ.png)

Once it has done, please wait for a few minutes and test it.
