jQuery(document).ready(function(e){if(typeof ezTOC!="undefined"){var b=e(".ez-toc-widget-container.ez-toc-affix");if(0!==b.length){e(ezTOC.affixSelector).stick_in_parent({inner_scrolling:false,offset_top:30});
}e.fn.shrinkTOCWidth=function(){e(this).css({width:"auto",display:"table"});if(/MSIE 7\./.test(navigator.userAgent)){e(this).css("width","");}};if(ezTOC.smooth_scroll==1){var f=hostname=pathname=qs=hash=null;
e("body a").click(function(k){hostname=e(this).prop("hostname");pathname=e(this).prop("pathname");qs=e(this).prop("search");hash=e(this).prop("hash");if(pathname.length>0){if(pathname.charAt(0)!="/"){pathname="/"+pathname;
}}if((window.location.hostname==hostname)&&(window.location.pathname==pathname)&&(window.location.search==qs)&&(hash!=="")){var j=hash.replace(/([ !"$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g,"\\$1");
if(e(j).length>0){f=hash;}else{anchor=hash;anchor=anchor.replace("#","");f='a[name="'+anchor+'"]';if(e(f).length==0){f="";}}if(typeof ezTOC.scroll_offset!="undefined"){var l=-1*ezTOC.scroll_offset;
}else{var i=e("#wpadminbar");if(i.length>0){if(i.is(":visible")){l=-30;}else{l=0;}}else{l=0;}}if(f){e.smoothScroll({scrollTarget:f,offset:l});}}});}if(typeof ezTOC.visibility_hide_by_default!="undefined"){var a=e("a.ez-toc-toggle");
var g=ezTOC.visibility_hide_by_default;if(Cookies){Cookies.get("ezTOC_hidetoc")==1?a.data("visible",false):a.data("visible",true);}else{a.data("visible",true);
}if(g){a.data("visible",false);}if(!a.data("visible")){e("ul.ez-toc-list").hide();}a.click(function(i){i.preventDefault();if(e(this).data("visible")){e(this).data("visible",false);
if(Cookies){if(g){Cookies.set("ezTOC_hidetoc",null,{path:"/"});}else{Cookies.set("ezTOC_hidetoc","1",{expires:30,path:"/"});}}e("ul.ez-toc-list").hide("fast");
}else{e(this).data("visible",true);if(Cookies){if(g){Cookies.set("ezTOC_hidetoc","1",{expires:30,path:"/"});}else{Cookies.set("ezTOC_hidetoc",null,{path:"/"});
}}e("ul.ez-toc-list").show("fast");}});}function h(i){return e('.ez-toc-widget-container .ez-toc-list a[href="#'+e(i).attr("id")+'"]');}function d(j){var i=(typeof ezTOC.scroll_offset!="undefined")?parseInt(ezTOC.scroll_offset):30;
var l=e(j).height()+i;var k=e("#wpadminbar");if(0===k.length){l=l-30;}return parseInt(l);}e("span.ez-toc-section").waypoint(function(j){var i=h(this.element).toggleClass("active",j==="down");
i.toggleClass("active",j==="down").parent().toggleClass("active",j==="down");},{offset:"90%"});e("span.ez-toc-section").waypoint(function(j){var i=h(this.element).toggleClass("active",j==="up");
i.toggleClass("active",j==="up").parent().toggleClass("active",j==="up");},{offset:d(this.element)});var c=e(".ez-toc-widget-container ul.ez-toc-list li").css("line-height");
e("<style>.ez-toc-widget-container ul.ez-toc-list li::before{line-height:"+c+";height:"+c+"}</style>").appendTo("head");}});