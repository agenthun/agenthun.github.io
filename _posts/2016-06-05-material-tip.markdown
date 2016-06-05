---
layout: post
title: material-tip
date: 2016-06-05 18:31:49 
category: Android开源代码   
description: 一个material提示框
img: effect.gif
tags: [Android]
---
[原文](https://github.com/fcannizzaro/material-tip)

一个material提示框。

效果如下所示

<img src="/img/material-tip/effect.gif" title="effect" width="240" height="auto">

使用说明
* Step 1. 在root build.gradle中添加：  

allprojects {
    repositories {
      ...
      maven { url "https://jitpack.io" }
    }
  }
* Step 2. 添加 dependency

dependencies {
    compile 'com.github.fcannizzaro:material-tip:1.0.5'
}

自定义View + TipBehavior

<android.support.design.widget.CoordinatorLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

        <android.support.design.widget.FloatingActionButton
            ...
            app:layout_behavior="com.github.fcannizzaro.materialtip.TipBehavior"/>

        ...

        <com.github.fcannizzaro.materialtip.MaterialTip
            android:id="@+id/tip"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_gravity="bottom"
            ...
            app:tip_background="color"
            app:tip_color="color"
            app:tip_text_color="color"
            app:tip_title_color="color"
            app:tip_icon="drawable"
            app:tip_negative="string"
            app:tip_positive="string"
            app:tip_text="string"
            app:tip_title="string"/>

</android.support.design.widget.CoordinatorLayout>

Builder 方法
withButtonListener(ButtonListener)

* 设置button listener

new ButtonListener() {

    @Override
    public void onPositive(MaterialTip tip) {
        System.out.println("positive");
    }

    @Override
    public void onNegative(MaterialTip tip) {
        System.out.println("negative");
    }

}

