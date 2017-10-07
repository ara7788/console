var Cackle=Cackle||{};
Cackle.protocol=("https:"==window.location.protocol)?"https:":"http:";
Cackle.host=Cackle.host||"cackle.me";
Cackle.origin=Cackle.protocol+"//"+Cackle.host;
Cackle.cluster=["e."+Cackle.host,"h."+Cackle.host,"i."+Cackle.host];
Cackle.env="prod";
Cackle.ver="?v=0c75ee2f7f45+";
Cackle.initHosts=function(){var b=Cackle.getHost();
for(var a=0;
a<cackle_widget.length;
a++){var c=cackle_widget[a].widget;
if(c.indexOf("Chat")>-1){b=Cackle.host
}if(!cackle_widget[a].host||cackle_widget[a].host.indexOf("http")<0){cackle_widget[a].host=Cackle.protocol+"//"+(cackle_widget[a].host||b)
}}};
Cackle.getParam=function(a){if(location.search&&location.search.indexOf(a)>-1){if(!Cackle.params){Cackle.params={};
location.search.substr(1).split("&").forEach(function(b){var c=b.split("=");
Cackle.params[c[0]]=c[1]
})
}return Cackle.params[a]
}};
Cackle.getHost=function(){if(Cackle.env=="prod"){var b=Cackle.getParam("cackle_host");
if(b){return b
}function a(d,c){return Math.floor(Math.random()*(c-d+1))+d
}return Cackle.cluster[a(0,Cackle.cluster.length-1)]
}else{return Cackle.host
}};
Cackle.getSearchPath=function(c){var b=document.createElement("a");
b.href=c;
var d=b.pathname+b.search;
return d.indexOf("/")!=0?"/"+d:d
};
Cackle.getChan=function(b){var c;
if(b.channel){return b.channel
}else{if(b.chanParam){return Cackle.getParam(b.chanParam)
}else{if(b.url){c=Cackle.getSearchPath(b.url)
}else{var a=window.location;
c=a.pathname+a.search
}}}if(b.chanWithoutParams&&c.indexOf("?")>-1){return c.substring(0,c.indexOf("?")||c.length)
}return c
};
Cackle.getUrl=function(b){var a=window.location.href;
return decodeURIComponent(b.url||a.substring(0,a.indexOf("#")>0?a.indexOf("#"):a.length))
};
Cackle.getCookie=function(a){return(a=(document.cookie.match("(^|; )"+a+"=([^;]*)")||0)[2])&&decodeURIComponent(a)
};
Cackle.getBrowserLang=function(){var a=navigator;
return(a.language||a.systemLanguage||a.userLanguage||"en").substr(0,2).toLowerCase()
};
Cackle.Lib=Cackle.Lib||{load:function(d,c,a){var b=d+"/widget/";
this.loadJss(b+"js/",c[0],0,a);
if(c[1]){this.loadCsss(b+"css/",c[1])
}},loadJss:function(b,e,c,a){var d=this;
if(e.length>c){Cackle.Lib.loadJs(b+e[c]+Cackle.ver,function(){d.loadJss(b,e,c+1,a)
})
}else{if(a){a()
}}},loadJson:function(c,d){var b="cackle_"+(c.widget+c.id+(c.container||"")).replace(/[-:.]/g,"");
window[b]=function(e){var f=(c.data=(function(g){for(var h in g){return g[h]
}})(e));
if(f){c.lang=c.lang||f.lang||Cackle.getBrowserLang();
d[f.expired?"expired":"boot"](c)
}};
var a=d.url(c);
a+=(a.indexOf("?")>-1?"&":"?")+"callback="+b;
return this.loadJs(a)
},loadJs:function(b,c){var a=document.createElement("script");
a.type="text/javascript";
a.src=b;
a.async=true;
if(c){if(typeof a.onload!="undefined"){a.onload=c
}else{if(typeof a.onreadystatechange!="undefined"){a.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){c()
}}
}else{a.onreadystatechange=a.onload=function(){var d=a.readyState;
if(!d||/loaded|complete/.test(d)){c()
}}
}}}this.appendToRoot(a)
},loadCsss:function(a,c){for(var b=0;
b<c.length;
b++){Cackle.Lib.loadCss(a+c[b]+Cackle.ver)
}},loadCss:function(a){var b=document.createElement("link");
b.rel="stylesheet";
b.type="text/css";
b.href=a;
this.appendToRoot(b)
},appendToRoot:function(a){(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)
}};
Cackle.Widget=Cackle.Widget||{Login:{cb:[],prod:[["login.js"],["login-min.css"]],dev:[["fastjs.js","utils.js","json2.js","easyXDM.min.js","cookie.js","storage.js","login.js"],["login.css"]],url:function(a){return a.host+"/login/"+a.id+"/bootstrap"
},boot:function(a){this.cb.push(function(){Cackle[a.widget].main(a)
});
if(!this.isLoaded){var c=this,b=this[Cackle.env]||this.dev;
this.isLoaded=true;
Cackle.Lib.load(a.host,b,function(){while(c.cb.length){c.cb.shift()()
}})
}else{if(Cackle[a.widget]){Cackle[a.widget].main(a)
}}},expired:function(a){return
}},Comment:{cb:[],prod:[[],[]],dev:[["fastjs.js","base.js","json2.js","easyXDM.min.js","cookie.js","storage.js","login2.js","media.js","time.js","social.js","pushstream.js","stream.js","modal2.js","doT.min.js","autosize.js","md5.min.js","lang/comment.js","lang/comment_ru.js","lang/comment_be.js","lang/comment_de.js","lang/comment_el.js","lang/comment_es.js","lang/comment_fr.js","lang/comment_hy.js","lang/comment_it.js","lang/comment_ka.js","lang/comment_kk.js","lang/comment_lv.js","lang/comment_nl.js","lang/comment_pl.js","lang/comment_ro.js","lang/comment_uk.js","lang/comment_lt.js","lang/comment_bg.js","lang/comment_hi.js","lang/comment_id.js","lang/comment_pt.js"],["cleanslate.css","font.css","common.css","spin2.css","alert.css","media.css","modal2.css","social.css","login2.css","btn2.css"]],url:function(c){var b=c.host+"/widget/"+c.id+"/bootstrap?chan="+encodeURIComponent(Cackle.getChan(c))+"&url="+encodeURIComponent(Cackle.getUrl(c));
var a=Cackle.getCookie("mc-comment-order")||c.sort;
if(a){b+="&order="+a
}if(c.size){b+="&size="+c.size
}return b
},boot:function(a){this.cb.push(function(){Cackle[a.widget].main(a)
});
if(!this.isLoaded){var e=this,f=a.data,g="comment"+(f.ver>1?f.ver:"");
var b=this[Cackle.env]||this.dev;
b[0].push(g+(Cackle.env=="prod"&&f.ver>1?a.lang:"")+".js");
b[1].push(g+".css");
this.isLoaded=true;
Cackle.Lib.load(a.host,b,function(){while(e.cb.length){e.cb.shift()()
}})
}else{if(Cackle[a.widget]){Cackle[a.widget].main(a)
}}},expired:function(a){var b=document.getElementById(a.container||"mc-container");
b.innerHTML=(a.lang=="ru"?"Комментарии отключены":"Comments are disabled")
}},CommentRecent:{prod:[["comment-recent.js"],["comment-recent.css"]],dev:[["utils.js","base.js","time.js","doT.min.js","comment-recent.js"],["cleanslate.css","social.css","comment-recent.css"]]},CommentCount:{prod:[["comment-count.js"]],dev:[["utils.js","easyXDM.min.js","doT.min.js","svg-icon.js","comment-count.js"]]},CommentAdmin:{prod:[["comment-adm.js"],["admin.css"]],dev:[["fastjs.js","utils.js","json2.js","easyXDM.min.js","cookie.js","storage.js","time.js","media.js","notify.js","jquery.js","ua-parser.min.js","doT.min.js","pushstream.js","stream.js","autosize.js","login.js","admin.js","comment-adm.js"],["cleanslate.css","font.css","common.css","spin.css","button.css","button-group.css","media.css","admin.css"]]},Review:{cb:[],prod:[[],["review.css"]],dev:[["fastjs.js","base.js","json2.js","easyXDM.min.js","cookie.js","storage.js","login2.js","time.js","social.js","doT.min.js","autosize.js","media.js","modal2.js","md5.min.js","lang/review.js","lang/review_ru.js","lang/review_pl.js","lang/review_uk.js","lang/review_de.js","review.js"],["cleanslate.css","font.css","common.css","spin.css","alert.css","media.css","modal2.css","form.css","social.css","login2.css","btn2.css","review.css"]],url:function(c){var e=encodeURIComponent(Cackle.getChan(c)),b=encodeURIComponent(Cackle.getUrl(c)),d=Cackle.getCookie("cr-sort"),a=Cackle.getCookie("cr-order");
if(d){b+="&prop="+d
}if(a){b+="&order="+a
}if(c.size){b+="&size="+c.size
}if(c.replies){b+="&replies="+c.replies
}return c.host+"/review/"+c.id+"/bootstrap?chan="+e+"&url="+b
},boot:function(a){this.cb.push(function(){Cackle[a.widget].main(a)
});
if(!this.isLoaded){var c=this;
var b=this[Cackle.env]||this.dev;
b[0].push("review"+(Cackle.env=="prod"?a.lang:"")+".js");
this.isLoaded=true;
Cackle.Lib.load(a.host,b,function(){while(c.cb.length){c.cb.shift()()
}})
}else{if(Cackle[a.widget]){Cackle[a.widget].main(a)
}}},expired:function(a){var b=document.getElementById(a.container||"mc-review");
b.innerHTML=(a.lang=="ru"?"Отзывы отключены":"Reviews are disabled")
}},ReviewRecent:{prod:[["review-recent.js"],["review-recent.css"]],dev:[["utils.js","base.js","time.js","doT.min.js","review-recent.js"],["cleanslate.css","font.css","social.css","review-recent.css"]]},ReviewRating:{prod:[["review-rating.js"],["review-rating.css"]],dev:[["fastjs.js","utils.js","doT.min.js","easyXDM.min.js","cookie.js","review-rating.js"],["font.css","review-rating.css"]]},ReviewAdmin:{prod:[["review-adm.js"],["review-adm.css"]],dev:[["fastjs.js","utils.js","json2.js","easyXDM.min.js","cookie.js","storage.js","time.js","media.js","notify.js","jquery.js","ua-parser.min.js","doT.min.js","pushstream.js","stream.js","autosize.js","login.js","admin.js","review-adm.js"],["cleanslate.css","font.css","common.css","spin.css","button.css","button-group.css","media.css","admin.css","review-adm.css"]]},Chat:{prod:[["chat.js"],["chat.css"]],dev:[["fastjs.js","utils.js","json2.js","easyXDM.min.js","cookie.js","storage.js","login.js","time.js","jquery.js","baron.js","pushstream.js","stream.js","chat.js"],["login.css","chat.css"]]},Poll:{prod:[["poll.js"],["poll.css"]],dev:[["fastjs.js","utils.js","json2.js","easyXDM.min.js","cookie.js","storage.js","login.js","doT.min.js","media.js","lang/poll.js","lang/poll_ru.js","poll.js"],["login.css","poll.css"]]}};
(Cackle.bootstrap=function(b){Cackle.initHosts();
for(var a=0;
a<cackle_widget.length;
a++){(function(c){var d=Cackle.Widget[c.widget];
if(d&&!b){if(d.url&&!c.isLoaded){c.isLoaded=true;
Cackle.Lib.loadJson(c,d)
}else{if(!d.url&&!d.isLoaded){d.isLoaded=true;
Cackle.Lib.load(c.host,d[Cackle.env]||d.dev)
}}}else{if(b){if(Cackle.mcXHR){Cackle.mcXHR.abort()
}if(d.url){Cackle.Lib.loadJson(c,d)
}else{Cackle.Utils.bootstrapWidget(b)
}}}})(cackle_widget[a])
}})();