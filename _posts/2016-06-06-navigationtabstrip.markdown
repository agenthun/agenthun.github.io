---
layout: post
title: NavigationTabStrip
date: 2016-06-06 07:42:30
category: Android开源代码
description: 一个比较生动的Tab效果。
img: effect.gif
tags: [Android]
---
[原文](https://github.com/DevLight-Mobile-Agency/NavigationTabStrip)

一个比较生动的Tab效果。

效果如下所示

<img src="/img/NavigationTabStrip/effect.gif" title="effect" width="240" height="auto">

使用说明

可以从GitHub的 releases page下载 .aar

或者使用Gradle jCenter:

dependencies {
    repositories {
        mavenCentral()
        maven {
            url  'http://dl.bintray.com/gigamole/maven/'
        }
    }
    compile 'com.github.devlight.navigationtabstrip:library:+'
}
或者Gradle Maven Central:

compile 'com.github.devlight.navigationtabstrip:library:1.0.1'
或者Maven：

<dependency>
    <groupId>com.github.devlight.navigationtabstrip</groupId>
    <artifactId>library</artifactId>
    <version>1.0.1</version>
    <type>aar</type>
</dependency>