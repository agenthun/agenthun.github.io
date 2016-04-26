---
layout: post
title: SwipeDismissBehavior用法及实现原理
date: 2015-11-08 01:50:29
category : Android开源代码
description: design兼容库中SwipeDismissBehavior类，用来实现滑动删除
img: effect.gif
tagline: "Supporting tagline"
tags : [Android, Blog]
---
[原文](http://www.jcodecraeer.com/a/anzhuokaifa/androidkaifa/2015/1103/3650.html)

# 引文

无意间发现design兼容库中有一个叫做SwipeDismissBehavior的类，顾名思义它就是用来实现滑动删除的了。莫非现在滑动删除又有更简单的解决办法了？鉴于之前RecyclerView中已经有ItemTouchHelper，而且也非常简单，所以很好奇到底有何不同，于是决定研究研究，看看它的实现原理以及应用场景：真的能替代其他的（不管是第三方还是RecyclerView自带的ItemTouchHelper）滑动删除吗？。

很不幸SwipeDismissBehavior现在的文档还很少，只有stackoverfolw上有点价值的讨论。

先来直接从API的角度使用SwipeDismissBehavior，然后再讲解SwipeDismissBehavior的原理。从而说明为什么SwipeDismissBehavior只能和CoordinatorLayout一起使用？为什么SwipeDismissBehavior对CoordinatorLayout中RecyclerView的item不起作用。

# SwipeDismissBehavior的用法

SwipeDismissBehavior的用法非常简单。

## 第一步：引入design库
	compile 'com.android.support:appcompat-v7:23.1.0'
	compile 'com.android.support:design:23+'

## 第二步：把要滑动删除的View放在CoordinatorLayout中

xml代码：
<?xml version="1.0" encoding="utf-8"?>

    <android.support.design.widget.CoordinatorLayout xmlns:android="http://schemas.android.com/apk/res/android"
        xmlns:app="http://schemas.android.com/apk/res-auto"
        xmlns:tools="http://schemas.android.com/tools"
        android:id="@+id/coordinatorLayout"
        android:layout_width="match_parent"
        android:layout_height="match_parent">
 
        <TextView
            android:id="@+id/swip"
            android:layout_width="match_parent"
            android:layout_height="200dip"
            android:background="#32CD32"
            android:text="别删我"
            android:textSize="20dip"
            android:gravity="center"
        />
 
    </android.support.design.widget.CoordinatorLayout>
	

## 第三步：在MainActivity中为View设置一个SwipeDismissBehavior对象
    package com.jcodecraeer.swipedismissbehaviordemo;
 
    import android.os.Bundle;
    import android.support.design.widget.CoordinatorLayout;
    import android.support.design.widget.SwipeDismissBehavior;
    import android.support.v7.app.AppCompatActivity;
    import android.view.View;
    import android.widget.TextView;
     
    public class MainActivity extends AppCompatActivity {
     
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);
            TextView swipeView = (TextView)findViewById(R.id.swip);
            final SwipeDismissBehavior<View> swipe
                    = new SwipeDismissBehavior();
     
            swipe.setSwipeDirection(
                    SwipeDismissBehavior.SWIPE_DIRECTION_ANY);
     
            swipe.setListener(
                    new SwipeDismissBehavior.OnDismissListener() {
                        @Override public void onDismiss(View view) {
     
                        }
     
                        @Override
                        public void onDragStateChanged(int state) {}
                    });
     
            CoordinatorLayout.LayoutParams coordinatorParams =
                    (CoordinatorLayout.LayoutParams) swipeView.getLayoutParams();
     
            coordinatorParams.setBehavior(swipe);
        }
         
    }

# 效果如下所示

<img src="/img/SwipeDismissBehavior用法及实现原理/effect.gif" title="effect" width="240" height="auto">