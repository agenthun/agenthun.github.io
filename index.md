---
layout: page
title: 踏雪无痕d博客
tagline: 清明时节雨纷纷，路上行人欲断魂
---
{% include JB/setup %}

<!--Hero-->
<div class="section no-pad-bot" id="index-banner">
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <img class="circle img-responsive" src="img/hun.jpg" alt="">
        <div class="intro-text">
          <span class="name center white-text">
            {{ site.author.name }}
          </span>
          <span class="skills center white-text">
            Android Developer - Student - UI designer
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="section scrollspy" id="work">
  <div class="container">
    <h2 class="header text_b">近期博文 </h2>
<div class="row">
	{% for post in site.posts %}

  <div class="col s12 m4 l4">
    <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="img/{{ post.title }}/{{ post.img }}">
          </div>
          <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">{{ post.title }} <i class="mdi-navigation-more-vert right"></i></span>
              <p><a href="{{ BASE_PATH }}{{ post.url }}">查看全文&hellip;</a></p>
          </div>
          <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">{{ post.title }} <i class="mdi-navigation-close right"></i></span>
              <p>{{ post.description }}</p>
          </div>
      </div>
  </div>
{% endfor %}

</div>


</div>
</div>