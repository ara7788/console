!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(){return n(10)}var o=n(1),i=n(2).initLongExperiment,a=n(4)["default"],c=n(5).isPercent;!function(t,e,n){function d(e){var r=t[e];return t[e]=n,r}function u(t,e){return d("yandex_"+(e?e+"_":"")+t)}function s(t,e,n){for(var r=0;r<e.length;r++)t[e[r]]=u(e[r],n)}var l=r(),f=t.Ya=t.Ya||{};if(f.codeVer===n){f.loaderVer=l.loader;var _=new a(l.code),p=o.pcode,E=/^(([a-z0-9-]+\.)?)+devmail\.ru$/i;if(E.test(e.location.hostname)&&(p=_.getDefaultId()),p)f.codeVer=p,f.matchVer=_.getDefaultExtra().match||f.codeVer,f.confirmUrl=_.getDefaultExtra().confirm;else{f.codeVer=_.getId();f.matchVer=_.getExtra().match||f.codeVer,f.confirmUrl=_.getExtra().confirm}f._exp=_}f.Context||(f.Context={_callbacks:[],_asyncIdCounter:0,_asyncModeOn:!1,initTime:Number(new Date),longExp:{getId:function(){return""}},LOG_DIRECT:c(1)},i(),f.Direct={insertInto:function(t,e,n,r){f.Context._asyncModeOn||(f.Context._asyncModeOn=!0),f.Context.AdvManager?f.Context.AdvManager.renderDirect(t,e,n,r):f.Context._callbacks.push(function(){f.Context.AdvManager.renderDirect(t,e,n,r)})}});for(var x=["yandex_context_callbacks","yandexContextAsyncCallbacks"],h=0;h<x.length;h++){var D=d(x[h]);if(D){f.Context._asyncModeOn||(f.Context._asyncModeOn=!0);for(var I=0;I<D.length;I++)f.Context._callbacks.push(D[I])}}if(t.yandexContextSyncCallbacks)for(var m=d("yandexContextSyncCallbacks"),g=0;g<m.length;g++)f.Context._callbacks.push(m[g]);var O=["ad_format","site_bg_color","font_size","font_family","stat_id","no_sitelinks","search_text","search_page_number","lang"],B=["type","border_type","bg_color","border_radius","border_color","header_bg_color","title_color","text_color","url_color","hover_color","sitelinks_color","links_underline","limit","place","favicon","title_font_size","grab","c11n","geo_lat","geo_long","width","height"];if(t.yandex_ad_format){var T={};s(T,O),s(T,B,T.ad_format);var v=T.place;v&&e.getElementById(v)||(v="Ya_sync_"+f.Context._asyncIdCounter++,e.write('<div id="'+v+'"></div>'));var C=u("partner_id");f.Context._callbacks.push(function(){f.Context.AdvManager.renderDirect(C,v,T)})}var L,b,L,b,A=f.codeVer>=1700?"//an.yandex.ru/resource/context_static_r_<%= CODE_VER %>.js":"//an.yandex.ru/resource/context_static_r<%= CODE_VER %>.js",L=A.replace("<%= CODE_VER %>",f.codeVer),b="https:"+L;if(e.getElementById(L)&&f.Context._init)return void f.Context._init();if(f.Context._asyncModeOn){var N=e.createElement("script"),y=e.getElementsByTagName("script")[0];N.id=L,N.src=b,y.parentNode.insertBefore(N,y)}else e.write('<script type="text/javascript" src="'+b+'" id="'+L+'"></script>')}(window,window.document)},function(t,e){"use strict";function n(t){for(var e=t.split("&"),n={},r=0;r<e.length;r++)0===e[r].indexOf(o+"=")&&(n.pcode=e[r].substr((o+"=").length)),0===e[r].indexOf(i+"=")&&(n.media=e[r].substr((i+"=").length));return n}function r(t){return parseInt(t,10)||void 0}var o="pcodever",i="mcodever",a=n(window.location.hash.replace(/^\#/,"")),c=n(window.location.search.replace(/^\?/,"")),d={pcode:r(a.pcode||c.pcode),media:r(a.media||c.media)};t.exports=d},function(t,e,n){"use strict";function r(){var t=new i["default"](p);c.setGlobalVariable(u,t)}function o(t){if(_)return!1;var e=c.getGlobalVariable(u);return!!e&&e.isCurrentVersion(t)}var i=n(3),a=n(6),c=n(7),d=n(8),u="__longExperiment",s=n(9),l=document.location.host,f=function(t){return t.test(l)},_=s(d["default"],f).length>0,p=[[{id:a["default"].stub.STUB_DOMAIN,percent:25},{id:a["default"].stub.STUB_WITH_SCALE,percent:25},{id:a["default"].stub.STUB_WITHOUT_SCALE,percent:25},{id:a["default"].stub.STUB_CONTROL,percent:25}],[{id:a["default"].emoji.EMOJI,percent:33},{id:a["default"].emoji.EMOJI_TITLE,percent:33},{id:a["default"].emoji.EMOJI_CONTROL,percent:33}],[{id:a["default"].rtbInDirect.ENABLED,percent:10},{id:a["default"].rtbInDirect.DISABLED,percent:90}],[{id:a["default"].rtbInDirectOld.ENABLED,percent:10},{id:a["default"].rtbInDirectOld.DISABLED,percent:90}],[{id:a["default"].phoneButton.ENABLED,percent:50},{id:a["default"].phoneButton.DISABLED,percent:50}],[{id:a["default"].storeButton.ENABLED,percent:50},{id:a["default"].storeButton.DISABLED,percent:50}]];e.initLongExperiment=r,e.isLongExperiment=o},function(t,e,n){"use strict";var r=n(4),o=function(){function t(t){this.experiments=[];for(var e=0;e<t.length;e++)this.experiments.push(new r["default"](t[e]))}return t.prototype.isCurrentVersion=function(t){for(var e=0;e<this.experiments.length;e++)if(this.experiments[e].getId()===t)return!0;return!1},t}();e.__esModule=!0,e["default"]=o},function(t,e,n){"use strict";var r=n(5),o=function(){function t(t){this.coin=Math.random(),this.versions=r.prepare(t),this.defaultVersion=r.findDefault(t)}return t.prototype.getId=function(){return this.get("id")},t.prototype.getExtra=function(){return this.get("extra")},t.prototype.getDefaultExtra=function(){return this.defaultVersion&&this.defaultVersion.extra?this.defaultVersion.extra:null},t.prototype.getDefaultId=function(){return this.defaultVersion&&this.defaultVersion.id?this.defaultVersion.id:null},t.prototype.get=function(t){var e=this.choose();return e&&e.hasOwnProperty(t)?e[t]:null},t.prototype.choose=function(){for(var t=null,e=0;e<this.versions.length;e++)if(this.coin<this.versions[e].threshold){t=this.versions[e];break}return t},t}();e.__esModule=!0,e["default"]=o},function(t,e){"use strict";function n(t){for(var e,n=[],i=0,a=0;a<t.length;a++)e=o(r(t[a].percent)+i),i=e,n.push({id:t[a].id,extra:t[a].extra,threshold:e});return n}function r(t){return o(t/100)}function o(t){return Number(t.toFixed(c))}function i(t){for(var e=null,n=0;n<t.length;n++)(!e||e.percent<t[n].percent)&&(e=t[n]);return e}function a(t){return Math.random()<r(t)}var c=2;e.prepare=n,e.toFraction=r,e.fixPrecision=o,e.findDefault=i,e.isPercent=a},function(t,e){"use strict";var n={rmp:{RMP_CONTROL:"RMP_CONTROL",RMP_ABILITIES:"RMP_ABILITIES"},stub:{STUB_CONTROL:"STUB_CONTROL",STUB_DOMAIN:"STUB_DOMAIN",STUB_WITH_SCALE:"STUB_WITH_SCALE",STUB_WITHOUT_SCALE:"STUB_WITHOUT_SCALE"},emoji:{EMOJI:"EMOJI",EMOJI_TITLE:"EMOJI_TITLE",EMOJI_CONTROL:"EMOJI_CONTROL"},rtbInDirect:{ENABLED:"RTB_IN_NEW_ENABLED",DISABLED:"RTB_IN_NEW_DISABLED"},rtbInDirectOld:{ENABLED:"RTB_IN_OLD_ENABLED",DISABLED:"RTB_IN_OLD_DISABLED"},phoneButton:{ENABLED:"PHONE_BUTTON_ENABLED",DISABLED:"PHONE_BUTTON_DISABLED"},storeButton:{ENABLED:"STORE_BUTTON_ENABLED",DISABLED:"STORE_BUTTON_DISABLED"}};e.__esModule=!0,e["default"]=n},function(t,e){"use strict";function n(t,e){window.Ya=window.Ya||{},window.Ya.Context=window.Ya.Context||{},window.Ya.Context[t]=e}function r(t){return window.Ya=window.Ya||{},window.Ya.Context=window.Ya.Context||{},window.Ya.Context[t]}e.setGlobalVariable=n,e.getGlobalVariable=r},function(t,e){"use strict";e.__esModule=!0,e["default"]=[/mail\.ru/i,/devmail\.ru/i]},function(t,e){t.exports=function(t,e,n){for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];e.call(n,a,o,t)&&r.push(a)}return r}},function(t,e){t.exports={loader:1502640339236,code:[{id:2560,percent:1,extra:{match:2560,confirm:"//st.yandexadexchange.net/confirm_r_2560.html"}},{id:2561,percent:1,extra:{match:2561,confirm:"//st.yandexadexchange.net/confirm_r_2561.html"}},{id:2553,percent:98,extra:{match:2553,confirm:"//st.yandexadexchange.net/confirm_r_2553.html"}}]}}]);