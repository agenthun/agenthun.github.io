function weixinShareTimeline(title,desc,link,imgUrl){ 
    WeixinJSBridge.invoke('shareTimeline',{ 
        "img_url":imgUrl, 
        //"img_width":"640", 
        //"img_height":"640", 
        "link":link, 
        "desc": desc, 
        "title":title 
    });  
} 