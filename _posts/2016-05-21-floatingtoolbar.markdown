---
layout: post
title: FloatingToolbar
date: 2016-05-21 19:27:40
category: Android开源代码
description: 一个从FloatingActionButton演变的toolbar。
img: effect.gif
tags: [Android]
---
[原文](https://github.com/rubensousa/FloatingToolbar)

一个从FloatingActionButton演变的toolbar。

效果如下所示

<img src="/img/FloatingToolbar/effect.gif" title="effect" width="240" height="auto">

使用说明：
 添加下面的代码到build.gradle中:

repositories{
  maven { url "https://jitpack.io" }
}
 
dependencies {
  compile 'com.github.rubensousa:FloatingToolbar:0.2'
}
把FloatingToolbar作为CoordinatorLayout的直接子view添加进去，并放在FloatingActionButton之前：

<android.support.design.widget.CoordinatorLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:id="@+id/coordinatorLayout"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:fitsSystemWindows="true">
 
    <!-- Appbar -->
 
    <com.github.rubensousa.floatingtoolbar.FloatingToolbar
        android:id="@+id/floatingToolbar"
        android:layout_width="match_parent"
        android:layout_height="?attr/actionBarSize"
        android:layout_gravity="bottom"
        app:floatingMenu="@menu/main" />
 
    <android.support.design.widget.FloatingActionButton
        android:id="@+id/fab"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:layout_gravity="bottom|end"
        android:layout_margin="@dimen/fab_margin"
        android:src="@drawable/ic_share_black_24dp" />
 
 
</android.support.design.widget.CoordinatorLayout>

使用 app:floatingMenu 或者  app:floatingCustomView属性指定一个菜单资源或者自定义布局

把FAB和FloatingToolbar关联起来，以便点击事件发生的时候自动开始过渡动画：

mFloatingToolbar.attachFab(fab);
和RecyclerView关联起来，在滚动的时候隐藏FloatingToolbar：

mFloatingToolbar.attachRecyclerView(recyclerView);
(可选) 使用 show() 和 hide() 在任何时候触发 transition:

mFloatingToolbar.show();
mFLoatingToolbar.hide();
Attributes
app:floatingMenu -> Menu 资源
app:floatingItemBackground -> Drawable 资源
app:floatingCustomView -> Layout 资源