!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(){return n(10)}var o=n(1),i=n(2).initLongExperiment,a=n(4)["default"],c=n(5).isPercent;!function(e,t,n){function d(t){var r=e[t];return e[t]=n,r}function u(e,t){return d("yandex_"+(t?t+"_":"")+e)}function s(e,t,n){for(var r=0;r<t.length;r++)e[t[r]]=u(t[r],n)}var l=r(),f=e.Ya=e.Ya||{};if(f.codeVer===n){f.loaderVer=l.loader;var _=new a(l.code),p=o.pcode,x=/^(([a-z0-9-]+\.)?)+devmail\.ru$/i;if(x.test(t.location.hostname)&&(p=_.getDefaultId()),p)f.codeVer=p,f.matchVer=_.getDefaultExtra().match||f.codeVer,f.confirmUrl=_.getDefaultExtra().confirm;else{f.codeVer=_.getId();f.matchVer=_.getExtra().match||f.codeVer,f.confirmUrl=_.getExtra().confirm}f._exp=_}f.Context||(f.Context={_callbacks:[],_asyncIdCounter:0,_asyncModeOn:!1,initTime:Number(new Date),longExp:{getId:function(){return""}},LOG_DIRECT:c(1)},i(),f.Direct={insertInto:function(e,t,n,r){f.Context._asyncModeOn||(f.Context._asyncModeOn=!0),f.Context.AdvManager?f.Context.AdvManager.renderDirect(e,t,n,r):f.Context._callbacks.push(function(){f.Context.AdvManager.renderDirect(e,t,n,r)})}});for(var h=["yandex_context_callbacks","yandexContextAsyncCallbacks"],E=0;E<h.length;E++){var m=d(h[E]);if(m){f.Context._asyncModeOn||(f.Context._asyncModeOn=!0);for(var D=0;D<m.length;D++)f.Context._callbacks.push(m[D])}}if(e.yandexContextSyncCallbacks)for(var I=d("yandexContextSyncCallbacks"),g=0;g<I.length;g++)f.Context._callbacks.push(I[g]);var O=["ad_format","site_bg_color","font_size","font_family","stat_id","no_sitelinks","search_text","search_page_number","lang"],B=["type","border_type","bg_color","border_radius","border_color","header_bg_color","title_color","text_color","url_color","hover_color","sitelinks_color","links_underline","limit","place","favicon","title_font_size","grab","c11n","geo_lat","geo_long","width","height"];if(e.yandex_ad_format){var T={};s(T,O),s(T,B,T.ad_format);var v=T.place;v&&t.getElementById(v)||(v="Ya_sync_"+f.Context._asyncIdCounter++,t.write('<div id="'+v+'"></div>'));var C=u("partner_id");f.Context._callbacks.push(function(){f.Context.AdvManager.renderDirect(C,v,T)})}var L,b,L,b,y=f.codeVer>=1700?"//an.yandex.ru/resource/context_static_r_<%= CODE_VER %>.js":"//an.yandex.ru/resource/context_static_r<%= CODE_VER %>.js",L=y.replace("<%= CODE_VER %>",f.codeVer),b="https:"+L;if(t.getElementById(L)&&f.Context._init)return void f.Context._init();if(f.Context._asyncModeOn){var A=t.createElement("script"),N=t.getElementsByTagName("script")[0];A.id=L,A.src=b,N.parentNode.insertBefore(A,N)}else t.write('<script type="text/javascript" src="'+b+'" id="'+L+'"></script>')}(window,window.document)},function(e,t){"use strict";function n(e){for(var t=e.split("&"),n={},r=0;r<t.length;r++)0===t[r].indexOf(o+"=")&&(n.pcode=t[r].substr((o+"=").length)),0===t[r].indexOf(i+"=")&&(n.media=t[r].substr((i+"=").length));return n}function r(e){return parseInt(e,10)||void 0}var o="pcodever",i="mcodever",a=n(window.location.hash.replace(/^\#/,"")),c=n(window.location.search.replace(/^\?/,"")),d={pcode:r(a.pcode||c.pcode),media:r(a.media||c.media)};e.exports=d},function(e,t,n){"use strict";function r(){var e=new i["default"](p);c.setGlobalVariable(u,e)}function o(e){if(_)return!1;var t=c.getGlobalVariable(u);return!!t&&t.isCurrentVersion(e)}var i=n(3),a=n(6),c=n(7),d=n(8),u="__longExperiment",s=n(9),l=document.location.host,f=function(e){return e.test(l)},_=s(d["default"],f).length>0,p=[[{id:a["default"].stub.STUB_DOMAIN,percent:25},{id:a["default"].stub.STUB_WITH_SCALE,percent:25},{id:a["default"].stub.STUB_WITHOUT_SCALE,percent:25},{id:a["default"].stub.STUB_CONTROL,percent:25}],[{id:a["default"].emoji.EMOJI,percent:33},{id:a["default"].emoji.EMOJI_TITLE,percent:33},{id:a["default"].emoji.EMOJI_CONTROL,percent:33}],[{id:a["default"].rtbInDirect.ENABLED,percent:10},{id:a["default"].rtbInDirect.DISABLED,percent:90}],[{id:a["default"].rtbInDirectOld.ENABLED,percent:10},{id:a["default"].rtbInDirectOld.DISABLED,percent:90}],[{id:a["default"].phoneButton.ENABLED,percent:50},{id:a["default"].phoneButton.DISABLED,percent:50}],[{id:a["default"].storeButton.ENABLED,percent:50},{id:a["default"].storeButton.DISABLED,percent:50}]];t.initLongExperiment=r,t.isLongExperiment=o},function(e,t,n){"use strict";var r=n(4),o=function(){function e(e){this.experiments=[];for(var t=0;t<e.length;t++)this.experiments.push(new r["default"](e[t]))}return e.prototype.isCurrentVersion=function(e){for(var t=0;t<this.experiments.length;t++)if(this.experiments[t].getId()===e)return!0;return!1},e}();t.__esModule=!0,t["default"]=o},function(e,t,n){"use strict";var r=n(5),o=function(){function e(e){this.coin=Math.random(),this.versions=r.prepare(e),this.defaultVersion=r.findDefault(e)}return e.prototype.getId=function(){return this.get("id")},e.prototype.getExtra=function(){return this.get("extra")},e.prototype.getDefaultExtra=function(){return this.defaultVersion&&this.defaultVersion.extra?this.defaultVersion.extra:null},e.prototype.getDefaultId=function(){return this.defaultVersion&&this.defaultVersion.id?this.defaultVersion.id:null},e.prototype.get=function(e){var t=this.choose();return t&&t.hasOwnProperty(e)?t[e]:null},e.prototype.choose=function(){for(var e=null,t=0;t<this.versions.length;t++)if(this.coin<this.versions[t].threshold){e=this.versions[t];break}return e},e}();t.__esModule=!0,t["default"]=o},function(e,t){"use strict";function n(e){for(var t,n=[],i=0,a=0;a<e.length;a++)t=o(r(e[a].percent)+i),i=t,n.push({id:e[a].id,extra:e[a].extra,threshold:t});return n}function r(e){return o(e/100)}function o(e){return Number(e.toFixed(c))}function i(e){for(var t=null,n=0;n<e.length;n++)(!t||t.percent<e[n].percent)&&(t=e[n]);return t}function a(e){return Math.random()<r(e)}var c=2;t.prepare=n,t.toFraction=r,t.fixPrecision=o,t.findDefault=i,t.isPercent=a},function(e,t){"use strict";var n={rmp:{RMP_CONTROL:"RMP_CONTROL",RMP_ABILITIES:"RMP_ABILITIES"},stub:{STUB_CONTROL:"STUB_CONTROL",STUB_DOMAIN:"STUB_DOMAIN",STUB_WITH_SCALE:"STUB_WITH_SCALE",STUB_WITHOUT_SCALE:"STUB_WITHOUT_SCALE"},emoji:{EMOJI:"EMOJI",EMOJI_TITLE:"EMOJI_TITLE",EMOJI_CONTROL:"EMOJI_CONTROL"},rtbInDirect:{ENABLED:"RTB_IN_NEW_ENABLED",DISABLED:"RTB_IN_NEW_DISABLED"},rtbInDirectOld:{ENABLED:"RTB_IN_OLD_ENABLED",DISABLED:"RTB_IN_OLD_DISABLED"},phoneButton:{ENABLED:"PHONE_BUTTON_ENABLED",DISABLED:"PHONE_BUTTON_DISABLED"},storeButton:{ENABLED:"STORE_BUTTON_ENABLED",DISABLED:"STORE_BUTTON_DISABLED"}};t.__esModule=!0,t["default"]=n},function(e,t){"use strict";function n(e,t){window.Ya=window.Ya||{},window.Ya.Context=window.Ya.Context||{},window.Ya.Context[e]=t}function r(e){return window.Ya=window.Ya||{},window.Ya.Context=window.Ya.Context||{},window.Ya.Context[e]}t.setGlobalVariable=n,t.getGlobalVariable=r},function(e,t){"use strict";t.__esModule=!0,t["default"]=[/mail\.ru/i,/devmail\.ru/i]},function(e,t){e.exports=function(e,t,n){for(var r=[],o=0,i=e.length;o<i;o++){var a=e[o];t.call(n,a,o,e)&&r.push(a)}return r}},function(e,t){e.exports={loader:1502276885795,code:[{id:2528,percent:5,extra:{match:2528,confirm:"//st.yandexadexchange.net/confirm_r_2528.html"}},{id:2526,percent:5,extra:{match:2526,confirm:"//st.yandexadexchange.net/confirm_r_2526.html"}},{id:2522,percent:5,extra:{match:2522,confirm:"//st.yandexadexchange.net/confirm_r_2522.html"}},{id:2519,percent:5,extra:{match:2519,confirm:"//st.yandexadexchange.net/confirm_r_2519.html"}},{id:2520,percent:5,extra:{match:2520,confirm:"//st.yandexadexchange.net/confirm_r_2520.html"}},{id:2521,percent:75,extra:{match:2521,confirm:"//st.yandexadexchange.net/confirm_r_2521.html"}}]}}]);