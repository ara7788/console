"use strict";!function(){function t(t){if(T===T.top&&(H=$(document),P=$("#pluso-widget"),t=t||T.plusoWidgetButtons.config)){if(t.onlyMobile&&!B)return void P.remove();U=k(t),E=t.hash||"",o(t),U.hit(),O||(O=!0,i(),T.plusoWidgetButtons.onReady&&T.plusoWidgetButtons.onReady())}}function e(){P.show()}function n(){P.hide()}function o(t){function e(e){return t.service.indexOf(e)>-1}var n=0,o=A.buildHtml("img",{host:M}),i="";v(),e("share")&&t.share.length&&t.share.forEach(function(t){var e=S[t];n+=50,i+=A.buildHtml("button-share",{key:t,mobile:e.mobile?"on-mobile":"",title:e.title,delay:n,pix:o})}),e("news")&&t.news&&(n+=50,i+=A.buildHtml("button-action",{delay:n,pix:o,action:"news"}),i+=A.buildHtml("modal-news",{host:M})),e("comments")&&t.comments&&(n+=50,i+=A.buildHtml("button-action",{delay:n,pix:o,action:"comments"}),i+=A.buildHtml("modal-comments",{auth:A.buildHtml("auth-panel",{text:"Войдите, чтобы оставлять комментарии"})})),e("notifications")&&(n+=50,i+=A.buildHtml("button-action",{delay:n,pix:o,action:"notifications"}),i+=A.buildHtml("modal-notifications",{host:M,auth:A.buildHtml("auth-panel",{text:"Войдите, чтобы увидеть уведомления"})})),i+=A.buildHtml("button-action",{delay:n,pix:o,action:"pluso"}),P.html(i),setTimeout(function(){P.find(".js-icon").each(s)},300),e("news")&&t.news&&(_=P.find(".js-news-box"),d(t.news)),e("comments")&&t.comments&&(D=P.find(".js-comments-box"),f(t.comments)),e("notifications")&&(W=P.find(".js-notifications-box"),h(t.notifications))}function s(t,e){var n=$(e);n.css("transition","transform .3s "+n.data("delay")+"ms")}function i(){function t(t){P.toggleClass("active",t.pageX/H.width()>.8)}function e(){var t=$(this).data("action");U.click(t),f[t]?f[t]():s(t)}function n(){var t=$(this);t.addClass("active"),setTimeout(function(){t.removeClass("active")},800)}function o(){d&&clearTimeout(d),P.hasClass("hide-buttons")?P.removeClass("none-buttons"):d=setTimeout(function(){P.addClass("none-buttons")},350),setTimeout(function(){P.toggleClass("hide-buttons")})}function s(t){!S[t];var e=i(B&&S[t].urlMobile?S[t].urlMobile:S[t].url);T.open(e,+A.uniqueId("sharer"),"toolbar=0,status=0,resizable=1,width=626,height=436")||(T.location.href=e)}function i(t){var e={url:location.href,title:document.title};return t.replace("%url%",encodeURIComponent(e.url)).replace("%title%",encodeURIComponent(e.title))}var d,f={news:a,comments:u,notifications:c,pluso:o};B?(p(),P.addClass("mobile active hide-buttons")):H.on("mousemove.pluso",t),P.on("click.pluso",".js-icon",e).on("mousedown.pluso",".js-icon",n).on("click.pluso",".js-news-close",l).on("click.pluso",".js-comments-close",r).on("click.pluso",".js-notifications-close",m)}function a(){function t(t){var e=$(t.target);_.is(e)||e.closest(_).length||l()}function e(t){var e=t.keyCode||t.which;27==e&&l()}_.addClass("active"),H.on({"touchstart.pluso-news":t,"mousedown.pluso-news":t,"keydown.pluso-news":e})}function l(){_.removeClass("active"),H.off("pluso-news")}function u(){function t(t){var e=$(t.target);D.is(e)||e.closest(D).length||r()}function e(t){var e=t.keyCode||t.which;27==e&&r()}D.addClass("active"),H.on({"touchstart.pluso-comments":t,"mousedown.pluso-comments":t,"keydown.pluso-comments":e})}function r(){D.removeClass("active"),H.off("pluso-comments")}function c(){function t(t){var e=$(t.target);W.is(e)||e.closest(W).length||m()}function e(t){var e=t.keyCode||t.which;27==e&&m()}W.addClass("active"),H.on({"touchstart.pluso-notifications":t,"mousedown.pluso-notifications":t,"keydown.pluso-notifications":e}),W.trigger("show")}function m(){W.removeClass("active"),H.off("pluso-notifications")}function p(){function t(){setTimeout(e,200)}function e(){var t=T.innerWidth/(90==Math.abs(T.orientation)?screen.height:screen.width);P.css({fontSize:10*t+"px"})}e(),$(T).on({gestureend:t,orientationchange:t,touchend:t})}function d(t){function e(t){var e="";t.forEach(function(t){t.date=A.formatDate(t.date),e+=A.buildHtml("news-item",t)}),o.html(e)}function n(){U.click("news_link")}var o=P.find(".js-news-list");o.on("click","a",n),$.ajax({url:M+"/proxy?url=http://panel.kupol.co/data/top"+t.count+".json",dataType:"jsonp"}).done(e)}function f(t){function e(){D.find(".js-comments-tabs div").removeClass("active");var t=$(this);t.addClass("active"),x.setOrder(t.data("type"))}function n(){return s($(this).data("post-id")),!1}function o(){s()}function s(t){D.toggleClass("pluso-comments-mode",!!t),t?(b=p(t),j=t,x.getComments(t),_.focus()):(b="",j=null,x.getPosts())}function i(t){x.setUser(t),t&&C.html(A.buildHtml("comments-user-panel",t))}function a(){T.html(W)}function l(t){var e="";t.forEach(function(t){e+=A.buildHtml("comments-post-item",u(t))}),w=t,t.length||(e=E),T.html(e)}function u(t){return t.date=A.formatDate2(t.created_at),t.name=t.user.name,t.avatar=t.user.avatar,t.comments=d(t.comments_count,{0:"Ответить",1:"{} Комментарий",2:"{} Комментария",5:"{} Комментриев"}),t}function r(){H.html(b+W)}function c(t){var e=b||"";t.forEach(function(t){e+=A.buildHtml("comments-comment-item",m(t))}),H.html(e)}function m(t){return t.date=A.formatDate2(t.created_at),t.name=t.user.name,t.avatar=t.user.avatar,t}function p(t){var e={};return w.some(function(n){if(n.id==t)return e=n,!0}),A.buildHtml("comments-post-item-single",e)}function d(t,e){return 0==t?e[0].replace("{}",t):t%10==1&&(t<10||t>20)?e[1].replace("{}",t):t%10>1&&t%10<5&&(t<10||t>20)?e[2].replace("{}",t):e[5].replace("{}",t)}function f(){g(),x.setOrder("time")}function h(){g(),x.getComments(j)}function v(){function t(){P.toggleClass("show",!!_.val())}function e(t){t.preventDefault(),k||(k=!0,j?x.addComment(j,{text:_.val()}):x.addPost({text:_.val()}))}_.on("input keyup change",t),P.on("submit",e)}function g(){k=!1,_.val("")}var w,b,j,k,x=y(),C=D.find(".js-user-panel"),T=D.find(".js-posts-list"),H=D.find(".js-comments-list"),P=D.find(".js-comments-form"),_=P.find(".js-comments-input"),W=A.buildHtml("loader"),E=A.buildHtml("comments-empty-posts");v(),D.on("click",".js-comments-tabs div",e).on("click",".js-comments-link",n).on("click",".js-comments-back",o),q.on({setUser:i}),x.setConfig({isCommon:"common"===t.type}).on({beforeGetPosts:a,getPosts:l,beforeGetComments:r,getComments:c,addPost:f,addComment:h}).getPosts()}function h(t){function e(t){U.click("notifications_link"),this.href==location.href&&(t.preventDefault(),m(),u())}function n(t){i.setUser(t),i.get().done(o)}function o(t){var e="";t.forEach(function(t){t.date=A.formatDate2(t.created_at),e+=A.buildHtml("notifications-item",t)}),a.html(e)}function s(){i.readAll()}var i=j(t),a=P.find(".js-notifications-list");a.on("click","a",e),W.on("show",s),q.on({setUser:n})}function v(){function t(){q.login($(this).data("type"))}function e(){q.logout()}return q?void q.reset():(q=!0,q=x(),setTimeout(q.fetch,100),void P.on("click",".js-login",t).on("click",".js-logout",e))}function g(t){var e=T.onload;"function"!=typeof e?T.onload=t:T.onload=function(){e(),setTimeout(t)}}function w(){var t=$("head"),e=$("body"),n=$('<link rel="stylesheet" href="'+M+'/css/widget.css">'),o=$('<div class="pluso-widget-box" id="pluso-widget" style="display:none;"></div>');t.append(n),setTimeout(function(){e.append(o),T.plusoWidgetButtons.start()},100)}function b(t){var e=document.createElement("script");e.type="text/javascript",e.src=t,document.getElementsByTagName("head")[0].appendChild(e)}function y(){function t(){this.user=null,this.events={},this.order="time",this.def={}}return t.prototype.setConfig=function(t){return this.config=t,this.def={page:t.isCommon?"":location.href},this},t.prototype.on=function(t,e){return A.isObject(t)?this.events=t:this.events[t]=e,this},t.prototype.get=function(t,e){return $.ajax({url:M+"/comments/"+t,data:$.extend({hash:E},e)})},t.prototype.post=function(t,e){return $.ajax({type:"POST",url:M+"/comments/"+t,data:$.extend({hash:E,api_token:this.user&&this.user.api_token||""},e)})},t.prototype["delete"]=function(t){return $.ajax({type:"DELETE",url:M+"/comments/"+t})},t.prototype.addPost=function(t){return this.post("posts",$.extend({page:location.href},t)).done(this.events.addPost),this},t.prototype.addComment=function(t,e){return this.post("posts/"+t+"/comments",e).done(this.events.addComment),this},t.prototype.getPosts=function(){return this.events.beforeGetPosts(),this.get("posts",$.extend({},this.def,{order:this.order})).done(this.events.getPosts),this},t.prototype.getComments=function(t){return this.events.beforeGetComments(),this.get("posts/"+t+"/comments").done(this.events.getComments),this},t.prototype.setUser=function(t){this.user=t},t.prototype.setOrder=function(t){this.order=t,this.getPosts()},t.prototype.removePost=function(t){return this["delete"]("posts/"+t)},new t}function j(){function t(){this.user=null}function e(){return $.ajax({url:M+"/comments/notifications",data:{hash:E,api_token:this.user&&this.user.api_token||""}})}function n(){return $.ajax({type:"POST",url:M+"/comments/notifications/readAll",data:{hash:E,api_token:this.user&&this.user.api_token||""}})}function o(t){this.user=t}return t.prototype.get=e,t.prototype.readAll=n,t.prototype.setUser=o,new t}function k(t){function e(){}function n(){$(this).remove()}var o="https://stats.pluso.io/api/",s=t.noStats||!1;return e.prototype.request=function(t,e){if(!s){var i=A.uniqueId("request");e=$.extend(e||{},{url:location.href}),P.append(A.buildHtml("frame",{url:o+t+"?"+$.param(e),id:i})),$("#"+i).on("load",n)}},e.prototype.hit=function(){return this.request("hit")},e.prototype.click=function(t){return this.request("click",{action:t})},new e}function x(){function t(){function t(t){clearInterval(u.interval);var e=t.origin||t.originalEvent.origin;e===M&&(u.frame&&(u.frame.remove(),u.frame=null),u.setUser(JSON.parse(t.data)))}u=this,u.events={},u.user=null,u.interval=null,u.frame=null,T.addEventListener("message",t,!1)}function e(){P.append(A.buildHtml("frame",{url:M+"/comments/user",id:"frame-user"})),u.frame=$("#frame-user")}function n(t){var e=T.open(M+"/comments/login/"+t,A.uniqueId("auth"),"toolbar=0,status=0,resizable=1,width=626,height=436");this.interval=setInterval(function(){e.postMessage("Auth","*")},200)}function o(){P.append(A.buildHtml("frame",{url:M+"/comments/logout",id:"frame-logout"})),u.frame=$("#frame-logout")}function s(t){this.user=t,u.call("setUser",this.user),P.toggleClass("auth",!!this.user)}function i(t){$.each(t,function(t,e){u.events[t]||(u.events[t]=[]),u.events[t].push(e)})}function a(t){if(u.events[t]){var e=[].splice.call(arguments,1);u.events[t].forEach(function(t){t.apply(this,e)})}}function l(){u.events={}}var u;return t.prototype.fetch=e,t.prototype.login=n,t.prototype.logout=o,t.prototype.setUser=s,t.prototype.on=i,t.prototype.call=a,t.prototype.reset=l,new t}function C(){function t(){}function e(t){return"object"==typeof t}function n(t){return(t||"")+(new Date).valueOf()}function o(t,e){return t=T.plusoTemplates&&T.plusoTemplates[t+".html"],t?t.replace(/\[\[\s?(.*?)\s?\]\]/g,function(t,n){return e&&e[n]||""}):""}function s(t){return t=new Date(1e3*t),t.getDate()+" "+I[t.getMonth()]+", "+("0"+t.getHours()).substr(-2)+":"+("0"+t.getMinutes()).substr(-2)}function i(t){return t=new Date(t.replace(/\s+/g,"T")+"+03:00"),("0"+t.getDate()).substr(-2)+".0"+(t.getMonth()+1)+", "+("0"+t.getHours()).substr(-2)+":"+("0"+t.getMinutes()).substr(-2)}return t.prototype.isObject=e,t.prototype.uniqueId=n,t.prototype.buildHtml=o,t.prototype.formatDate=s,t.prototype.formatDate2=i,new t}var T=window;T.plusoWidgetButtons||(T.plusoWidgetButtons={}),T.plusoWidgetButtons.start=t,T.plusoWidgetButtons.update=t,T.plusoWidgetButtons.show=e,T.plusoWidgetButtons.hide=n;var H,P,_,D,W,E,q,U,B="undefined"!=typeof T.orientation,O=!1,M="https://data.pluso.io",I=["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],S={vk:{title:"VK",url:"http://vk.com/share.php?url=%url%&title=%title%"},fb:{title:"Facebook",url:"http://www.facebook.com/sharer.php?src=pluso&u=%url%&t=%title%"},tw:{title:"Twitter",url:"https://twitter.com/intent/tweet?url=%url%&text=%title%"},wa:{title:"WhatsApp",url:"whatsapp://send?text=%title% %url%",mobile:!0},tg:{title:"Telegram",url:"https://telegram.me/share/url?url=%url%&text=%title%",urlMobile:"tg://msg?text=%title% %url%"},ok:{title:"Одноклассники",url:"https://connect.ok.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st.shareUrl=%url%&st.client_id=-1"},gp:{title:"Google Plus"},pinterest:{title:"Pinterest",url:"https://pinterest.com/pin/create/button/?url=%url%&description=%title%"},pocket:{title:"Pocket",url:"https://readitlaterlist.com/save?url=%url%&title=%url%"},reddit:{title:"Reddit",url:"http://reddit.com/submit?url=%url%&title=%url%"}},A=C();T.jQuery||b("https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"),g(w),window.plusoTemplates=Object.create(null),window.plusoTemplates["auth-panel.html"]='<div class="pluso-auth-panel"> \n    <p>[[ text ]]</p>\n    <div>\n        <i class="js-login pluso-fb" data-type="facebook"></i>\n        <i class="js-login pluso-vk" data-type="vkontakte"></i>\n        <i class="js-login pluso-tw" data-type="twitter"></i>\n    </div>    \n</div>',window.plusoTemplates["button-action.html"]='<i class="pluso-[[ action ]] js-icon" data-delay="[[ delay ]]" data-action="[[ action ]]">[[ pix ]]</i>',window.plusoTemplates["button-share.html"]='<i class="pluso-[[ key ]] [[ mobile ]] js-icon" title="[[ title ]]" data-delay="[[ delay ]]" data-action="[[ key ]]">[[ pix ]]</i>',window.plusoTemplates["comments-comment-item.html"]='<div class="pluso-item pluso-comment">\n    <span>[[ date ]]</span>\n    <img src="[[ avatar ]]">\n    <div>\n        <strong>[[ name ]]</strong>\n        [[ text ]]    \n    </div>\n</div>\n',window.plusoTemplates["comments-empty-posts.html"]='<div class="pluso-empty">Оставьте первый комментарий</div>',window.plusoTemplates["comments-post-item-single.html"]='<div class="pluso-item">\n    <span>[[ date ]]</span>\n    <img src="[[ avatar ]]">\n    <div>\n        <strong>[[ name ]]</strong>\n        [[ text ]]    \n    </div>\n</div>\n',window.plusoTemplates["comments-post-item.html"]='<div class="pluso-item">\n    <span>[[ date ]]</span>\n    <img src="[[ avatar ]]">\n    <div>\n        <strong>[[ name ]]</strong>\n        [[ text ]]    \n    </div>\n    <a href="#" data-post-id="[[ id ]]" class="js-comments-link">[[ comments ]]</a>    \n</div>\n',window.plusoTemplates["comments-user-panel.html"]='<img src="[[ avatar ]]">\n<span>[[ name ]]</span>\n<div class="pluso-logout js-logout"></div>',window.plusoTemplates["frame.html"]='<iframe src="[[ url ]]" id="[[ id ]]" frameborder="0"></iframe>',window.plusoTemplates["img.html"]='<img src="[[ host ]]/images/widget/pix.png">',window.plusoTemplates["loader.html"]='<div class="pluso-loader"></div>',window.plusoTemplates["modal-comments.html"]='<div class="pluso-modal-box pluso-comments-box js-comments-box">\n    <div class="pluso-mode-box pluso-posts-mode-box">\n        <div class="pluso-title">Комментарии</div>\n        <div class="pluso-close js-comments-close"></div>\n        <div class="pluso-user-panel js-user-panel"></div>\n        <div class="pluso-tabs js-comments-tabs">\n            <div class="active" data-type="time"><span>ПО ВРЕМЕНИ</span></div>\n            <div data-type="popular"><span>ПОПУЛЯРНЫЕ</span></div>\n        </div>\n        <div class="pluso-list js-posts-list"></div>\n    </div>\n    <div class="pluso-mode-box pluso-comments-mode-box">\n        <div class="pluso-title">\n            <span class="pluso-back js-comments-back"></span>\n            Вернуться\n        </div>\n        <div class="pluso-list js-comments-list"></div>        \n    </div>\n    [[ auth ]]\n    <form class="pluso-form js-comments-form">\n        <p class="pluso-answer js-comments-answer"></p>\n        <button class="js-comments-button">ОТПР.</button>\n        <div>\n            <textarea placeholder="Написать…" class="js-comments-input" required="required"></textarea>\n        </div>\n    </form>\n</div>',window.plusoTemplates["modal-news.html"]='<div class="pluso-modal-box pluso-news-box js-news-box">\n    <div class="pluso-title">Новости</div>\n    <div class="pluso-close js-news-close"></div>\n    <div class="pluso-list js-news-list"></div>\n    <div class="pluso-powered"><span>Powered by</span><a href="http://pluso.com" target="_blank"><img src="[[ host ]]/images/widget/logo.svg" alt=""></a></div>\n</div>',window.plusoTemplates["modal-notifications.html"]='<div class="pluso-modal-box pluso-notifications-box js-notifications-box">\n    <div class="pluso-title">Уведомления</div>\n    <div class="pluso-close js-notifications-close"></div>\n    [[ auth ]]\n    <div class="pluso-text">\n        В уведомлениях отображается активность других людей, участвующих в обсуждениях, где вы оставили свой комментарий.\n    </div>\n    <div class="pluso-list js-notifications-list"></div>\n    <div class="pluso-powered"><span>Powered by</span><a href="http://pluso.com" target="_blank"><img src="[[ host ]]/images/widget/logo.svg" alt=""></a></div>\n</div>',window.plusoTemplates["news-item.html"]='<a href="[[ link ]]" target="_blank">\n    <img src="http://image.kupol.co/?type=small&url=[[ link ]]">\n    <span>\n        <strong>[[ title ]]</strong>\n        <em>[[ date ]]</em>\n    </span>\n</a>',window.plusoTemplates["notifications-item.html"]='<a href="[[ link ]]" target="_blank">\n    <strong>[[ title ]]</strong>\n    <span>[[ body ]]</span>\n    <em>[[ date ]]</em>\n</a>'}();