---
layout: post
title: MagicaSakura
date: 2016-07-03 06:44:47
category: Android开源代码
description: Bilibili的主题框架
img: effect.gif
tags: [Android]
---

[原文](https://github.com/Bilibili/MagicaSakura)

MagicaSakura 是 Android 多主题框架。

效果如下所示

<img src="/img/MagicaSakura/effect.gif" title="effect" width="240" height="auto">

使用说明：

依赖

> compile com.bilibili:magicasakura:0.1.1@aar'

* 支持白天彩色主题和夜间主题
* 切换主题不需要重建activity
* 提供TintXXX控件适配不同的主题，更方便更快捷
* 只需写一个drawable.xml 或者 layout.xml 就能自动适配到不同主题样式
* 兼容4.0.3以上
* 易于集成到你的app