!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="//yastatic.net/partner-code-bundles/3116/",t(0)}([function(e,t,n){"use strict";function r(){return n(10)}function a(e){var t=new RegExp("^(([a-z0-9-]+.)?)+("+_.join("|")+").yandex.([a-z]{1,3})$","i");return Boolean(e.match(t))}var i=n(1),c=n(2).initLongExperiment,o=n(4)["default"],d=n(5).isPercent,_=["dev-partner","dev-partner2","partner-creator01e","partner-creator01f","partner2-test","partner2"];!function(e,t,n){function _(t){var r=e[t];return e[t]=n,r}function l(e,t){return _("yandex_"+(t?t+"_":"")+e)}function s(e,t,n){for(var r=0;r<t.length;r++)e[t[r]]=l(t[r],n)}var u=r(),f=e.Ya=e.Ya||{};if(f.codeVer===n){f.loaderVer=u.loader;var x=new o(u.code),E=i.pcode,h=t.location.hostname,m=/^(([a-z0-9-]+\.)?)+devmail\.ru$/i;if(m.test(h)&&(E=x.getDefaultId()),a(h)&&(E="3052"),E)f.codeVer=E,f.matchVer=x.getDefaultExtra().match||f.codeVer,f.confirmUrl=x.getDefaultExtra().confirm;else{f.codeVer=x.getId();f.matchVer=x.getExtra().match||f.codeVer,f.confirmUrl=x.getExtra().confirm}f._exp=x}f.Context||(f.Context={_callbacks:[],_asyncIdCounter:0,_asyncModeOn:!1,initTime:Number(new Date),longExp:{getId:function(){return""}},LOG_DIRECT:d(1)},c(),f.Direct={insertInto:function(e,t,n,r){f.Context._asyncModeOn||(f.Context._asyncModeOn=!0),f.Context.AdvManager?f.Context.AdvManager.renderDirect(e,t,n,r):f.Context._callbacks.push(function(){f.Context.AdvManager.renderDirect(e,t,n,r)})}});for(var p=["yandex_context_callbacks","yandexContextAsyncCallbacks"],D=0;D<p.length;D++){var I=_(p[D]);if(I){f.Context._asyncModeOn||(f.Context._asyncModeOn=!0);for(var L=0;L<I.length;L++)f.Context._callbacks.push(I[L])}}if(e.yandexContextSyncCallbacks)for(var O=_("yandexContextSyncCallbacks"),B=0;B<O.length;B++)f.Context._callbacks.push(O[B]);var g=["ad_format","site_bg_color","font_size","font_family","stat_id","no_sitelinks","search_text","search_page_number","lang"],A=["type","border_type","bg_color","border_radius","border_color","header_bg_color","title_color","text_color","url_color","hover_color","sitelinks_color","links_underline","limit","place","favicon","title_font_size","grab","c11n","geo_lat","geo_long","width","height"];if(e.yandex_ad_format){var T={};s(T,g),s(T,A,T.ad_format);var v=T.place;v&&t.getElementById(v)||(v="Ya_sync_"+f.Context._asyncIdCounter++,t.write('<div id="'+v+'"></div>'));var C=l("partner_id");f.Context._callbacks.push(function(){f.Context.AdvManager.renderDirect(C,v,T)})}var y,N,y,N,S=f.codeVer>=1700?"//an.yandex.ru/resource/context_static_r_<%= CODE_VER %>.js":"//an.yandex.ru/resource/context_static_r<%= CODE_VER %>.js",y=S.replace("<%= CODE_VER %>",f.codeVer),N="https:"+y;if(t.getElementById(y)&&f.Context._init)return void f.Context._init();if(f.Context._asyncModeOn){var R=t.createElement("script"),b=t.getElementsByTagName("script")[0];R.id=y,R.src=N,b.parentNode.insertBefore(R,b)}else t.write('<script type="text/javascript" src="'+N+'" id="'+y+'"></script>')}(window,window.document)},function(e,t){"use strict";function n(e){for(var t=e.split("&"),n={},r=0;r<t.length;r++)0===t[r].indexOf(a+"=")&&(n.pcode=t[r].substr((a+"=").length)),0===t[r].indexOf(i+"=")&&(n.media=t[r].substr((i+"=").length));return n}function r(e){return parseInt(e,10)||void 0}var a="pcodever",i="mcodever",c=n(window.location.hash.replace(/^\#/,"")),o=n(window.location.search.replace(/^\?/,"")),d={pcode:r(c.pcode||o.pcode),media:r(c.media||o.media)};e.exports=d},function(e,t,n){"use strict";function r(){var e=new i["default"](x);o.setGlobalVariable(_,e)}function a(e){if(f)return!1;var t=o.getGlobalVariable(_);return!!t&&t.isCurrentVersion(e)}var i=n(3),c=n(6),o=n(7),d=n(8),_="__longExperiment",l=n(9),s=document.location.host,u=function(e){return e.test(s)},f=l(d["default"],u).length>0,x=[[{id:c["default"].rmp.RMP_CONTROL,percent:50},{id:c["default"].rmp.RMP_ABILITIES,percent:50}],[{id:c["default"].rtbInDirect.ENABLED,percent:10},{id:c["default"].rtbInDirect.DISABLED,percent:90}],[{id:c["default"].rtbInDirectOld.ENABLED,percent:10},{id:c["default"].rtbInDirectOld.DISABLED,percent:90}],[{id:c["default"].rtbInDirectOld50.ENABLED,percent:50},{id:c["default"].rtbInDirectOld50.DISABLED,percent:50}],[{id:c["default"].rtbInDirectOld10.ENABLED,percent:10},{id:c["default"].rtbInDirectOld10.DISABLED,percent:90}],[{id:c["default"].rtbInDirectOldOthers.ENABLED,percent:10},{id:c["default"].rtbInDirectOldOthers.DISABLED,percent:90}],[{id:c["default"].storeButton.ENABLED,percent:50},{id:c["default"].storeButton.DISABLED,percent:50}],[{id:c["default"].vertical.VERTICAL_DESKTOP_ENABLED,percent:100},{id:c["default"].vertical.VERTICAL_DESKTOP_DISABLED,percent:0}]];t.initLongExperiment=r,t.isLongExperiment=a},function(e,t,n){"use strict";var r=n(4),a=function(){function e(e){this.experiments=[];for(var t=0;t<e.length;t++)this.experiments.push(new r["default"](e[t]))}return e.prototype.isCurrentVersion=function(e){for(var t=0;t<this.experiments.length;t++)if(this.experiments[t].getId()===e)return!0;return!1},e}();t.__esModule=!0,t["default"]=a},function(e,t,n){"use strict";var r=n(5),a=function(){function e(e){this.coin=Math.random(),this.versions=r.prepare(e),this.defaultVersion=r.findDefault(e)}return e.prototype.getId=function(){return this.get("id")},e.prototype.getExtra=function(){return this.get("extra")},e.prototype.getDefaultExtra=function(){return this.defaultVersion&&this.defaultVersion.extra?this.defaultVersion.extra:null},e.prototype.getDefaultId=function(){return this.defaultVersion&&this.defaultVersion.id?this.defaultVersion.id:null},e.prototype.get=function(e){var t=this.choose();return t&&t.hasOwnProperty(e)?t[e]:null},e.prototype.choose=function(){for(var e=null,t=0;t<this.versions.length;t++)if(this.coin<this.versions[t].threshold){e=this.versions[t];break}return e},e}();t.__esModule=!0,t["default"]=a},function(e,t){"use strict";function n(e){for(var t,n=[],i=0,c=0;c<e.length;c++)t=a(r(e[c].percent)+i),i=t,n.push({id:e[c].id,extra:e[c].extra,threshold:t});return n}function r(e){return a(e/100)}function a(e){return Number(e.toFixed(o))}function i(e){for(var t=null,n=0;n<e.length;n++)(!t||t.percent<e[n].percent)&&(t=e[n]);return t}function c(e){return Math.random()<r(e)}var o=2;t.prepare=n,t.toFraction=r,t.fixPrecision=a,t.findDefault=i,t.isPercent=c},function(e,t){"use strict";var n={vertical:{VERTICAL_DESKTOP_ENABLED:"VERTICAL_DESKTOP_ENABLED",VERTICAL_DESKTOP_DISABLED:"VERTICAL_DESKTOP_DISABLED",VERTICAL_MOBILE_ENABLED:"VERTICAL_MOBILE_ENABLED",VERTICAL_MOBILE_DISABLED:"VERTICAL_MOBILE_DISABLED"},rmp:{RMP_CONTROL:"RMP_CONTROL",RMP_ABILITIES:"RMP_ABILITIES"},stub:{STUB_CONTROL:"STUB_CONTROL",STUB_DOMAIN:"STUB_DOMAIN",STUB_WITH_SCALE:"STUB_WITH_SCALE",STUB_WITHOUT_SCALE:"STUB_WITHOUT_SCALE"},emoji:{EMOJI:"EMOJI",EMOJI_TITLE:"EMOJI_TITLE",EMOJI_CONTROL:"EMOJI_CONTROL"},rtbInDirect:{ENABLED:"RTB_IN_NEW_ENABLED",DISABLED:"RTB_IN_NEW_DISABLED"},rtbInDirectOld:{ENABLED:"RTB_IN_OLD_ENABLED",DISABLED:"RTB_IN_OLD_DISABLED"},rtbInDirectOld50:{ENABLED:"RTB_IN_OLD_ENABLED_FOR_50",DISABLED:"RTB_IN_OLD_DISABLED_FOR_50"},rtbInDirectOld10:{ENABLED:"RTB_IN_OLD_ENABLED_FOR_10",DISABLED:"RTB_IN_OLD_DISABLED_FOR_10"},rtbInDirectOldOthers:{ENABLED:"RTB_IN_OLD_ENABLED_FOR_OTHERS",DISABLED:"RTB_IN_OLD_DISABLED_FOR_OTHERS"},storeButton:{ENABLED:"STORE_BUTTON_ENABLED",DISABLED:"STORE_BUTTON_DISABLED"}};t.__esModule=!0,t["default"]=n},function(e,t){"use strict";function n(e,t){window.Ya=window.Ya||{},window.Ya.Context=window.Ya.Context||{},window.Ya.Context[e]=t}function r(e){return window.Ya=window.Ya||{},window.Ya.Context=window.Ya.Context||{},window.Ya.Context[e]}t.setGlobalVariable=n,t.getGlobalVariable=r},function(e,t){"use strict";t.__esModule=!0,t["default"]=[/mail\.ru/i,/devmail\.ru/i]},function(e,t){e.exports=function(e,t,n){for(var r=[],a=0,i=e.length;a<i;a++){var c=e[a];t.call(n,c,a,e)&&r.push(c)}return r}},function(e,t){e.exports={loader:1507052492380,code:[{id:3115,percent:5,extra:{match:3115,confirm:"//st.yandexadexchange.net/confirm_r_3115.html"}},{id:3113,percent:5,extra:{match:3113,confirm:"//st.yandexadexchange.net/confirm_r_3113.html"}},{id:3111,percent:5,extra:{match:3111,confirm:"//st.yandexadexchange.net/confirm_r_3111.html"}},{id:3110,percent:10,extra:{match:3110,confirm:"//st.yandexadexchange.net/confirm_r_3110.html"}},{id:3109,percent:10,extra:{match:3109,confirm:"//st.yandexadexchange.net/confirm_r_3109.html"}},{id:3112,percent:1,extra:{match:3112,confirm:"//st.yandexadexchange.net/confirm_r_3112.html"}},{id:3108,percent:1,extra:{match:3108,confirm:"//st.yandexadexchange.net/confirm_r_3108.html"}},{id:3062,percent:5,extra:{match:3062,confirm:"//st.yandexadexchange.net/confirm_r_3062.html"}},{id:3061,percent:5,extra:{match:3061,confirm:"//st.yandexadexchange.net/confirm_r_3061.html"}},{id:3089,percent:10,extra:{match:3089,confirm:"//st.yandexadexchange.net/confirm_r_3089.html"}},{id:3090,percent:10,extra:{match:3090,confirm:"//st.yandexadexchange.net/confirm_r_3090.html"}},{id:3091,percent:1,extra:{match:3091,confirm:"//st.yandexadexchange.net/confirm_r_3091.html"}},{id:3099,percent:1,extra:{match:3099,confirm:"//st.yandexadexchange.net/confirm_r_3099.html"}},{id:3098,percent:1,extra:{match:3098,confirm:"//st.yandexadexchange.net/confirm_r_3098.html"}},{id:3097,percent:1,extra:{match:3097,confirm:"//st.yandexadexchange.net/confirm_r_3097.html"}},{id:3096,percent:1,extra:{match:3096,confirm:"//st.yandexadexchange.net/confirm_r_3096.html"}},{id:3094,percent:1,extra:{match:3094,confirm:"//st.yandexadexchange.net/confirm_r_3094.html"}},{id:3093,percent:1,extra:{match:3093,confirm:"//st.yandexadexchange.net/confirm_r_3093.html"}},{id:3092,percent:1,extra:{match:3092,confirm:"//st.yandexadexchange.net/confirm_r_3092.html"}},{id:3053,percent:25,extra:{match:3053,confirm:"//st.yandexadexchange.net/confirm_r_3053.html"}}]}}]);