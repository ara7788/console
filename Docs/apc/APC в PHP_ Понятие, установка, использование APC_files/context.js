!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(){return n(8)}var i=n(1),o=n(2).initLongExperiment,a=n(4)["default"],c=n(5).isPercent;!function(e,t,n){function d(t){var r=e[t];return e[t]=n,r}function s(e,t){return d("yandex_"+(t?t+"_":"")+e)}function l(e,t,n){for(var r=0;r<t.length;r++)e[t[r]]=s(t[r],n)}var u=r(),f=e.Ya=e.Ya||{};if(f.codeVer===n){f.loaderVer=u.loader;var _=new a(u.code),x=i.pcode,p=/^(([a-z0-9-]+\.)?)+devmail\.ru$/i;if(p.test(t.location.hostname)&&(x=_.getDefaultId()),x)f.codeVer=x,f.matchVer=_.getDefaultExtra().match||f.codeVer,f.confirmUrl=_.getDefaultExtra().confirm;else{f.codeVer=_.getId();f.matchVer=_.getExtra().match||f.codeVer,f.confirmUrl=_.getExtra().confirm}f._exp=_}f.Context||(f.Context={_callbacks:[],_asyncIdCounter:0,_asyncModeOn:!1,initTime:Number(new Date),longExp:{getId:function(){return""}},LOG_DIRECT:c(1)},o(),f.Direct={insertInto:function(e,t,n,r){f.Context._asyncModeOn||(f.Context._asyncModeOn=!0),f.Context.AdvManager?f.Context.AdvManager.renderDirect(e,t,n,r):f.Context._callbacks.push(function(){f.Context.AdvManager.renderDirect(e,t,n,r)})}});for(var h=["yandex_context_callbacks","yandexContextAsyncCallbacks"],m=0;m<h.length;m++){var E=d(h[m]);if(E){f.Context._asyncModeOn||(f.Context._asyncModeOn=!0);for(var g=0;g<E.length;g++)f.Context._callbacks.push(E[g])}}if(e.yandexContextSyncCallbacks)for(var D=d("yandexContextSyncCallbacks"),I=0;I<D.length;I++)f.Context._callbacks.push(D[I]);var v=["ad_format","site_bg_color","font_size","font_family","stat_id","no_sitelinks","search_text","search_page_number","lang"],y=["type","border_type","bg_color","border_radius","border_color","header_bg_color","title_color","text_color","url_color","hover_color","sitelinks_color","links_underline","limit","place","favicon","title_font_size","grab","c11n","geo_lat","geo_long","width","height"];if(e.yandex_ad_format){var L={};l(L,v),l(L,y,L.ad_format);var C=L.place;C&&t.getElementById(C)||(C="Ya_sync_"+f.Context._asyncIdCounter++,t.write('<div id="'+C+'"></div>'));var b=s("partner_id");f.Context._callbacks.push(function(){f.Context.AdvManager.renderDirect(b,C,L)})}var B,O,B,O,w=f.codeVer>=1700?"//an.yandex.ru/resource/context_static_r_<%= CODE_VER %>.js":"//an.yandex.ru/resource/context_static_r<%= CODE_VER %>.js",B=w.replace("<%= CODE_VER %>",f.codeVer),O="https:"+B;if(t.getElementById(B)&&f.Context._init)return void f.Context._init();if(f.Context._asyncModeOn){var A=t.createElement("script"),N=t.getElementsByTagName("script")[0];A.id=B,A.src=O,N.parentNode.insertBefore(A,N)}else t.write('<script type="text/javascript" src="'+O+'" id="'+B+'"></script>')}(window,window.document)},function(e,t){"use strict";function n(e){for(var t=e.split("&"),n={},r=0;r<t.length;r++)0===t[r].indexOf(i+"=")&&(n.pcode=t[r].substr((i+"=").length)),0===t[r].indexOf(o+"=")&&(n.media=t[r].substr((o+"=").length));return n}function r(e){return parseInt(e,10)||void 0}var i="pcodever",o="mcodever",a=n(window.location.hash.replace(/^\#/,"")),c=n(window.location.search.replace(/^\?/,"")),d={pcode:r(a.pcode||c.pcode),media:r(a.media||c.media)};e.exports=d},function(e,t,n){"use strict";function r(){var e=new o["default"](s);c.setGlobalVariable(d,e)}function i(e){var t=c.getGlobalVariable(d);return!!t&&t.isCurrentVersion(e)}var o=n(3),a=n(6),c=n(7),d="__longExperiment",s=[[{id:a["default"].emoji.EMOJI,percent:33},{id:a["default"].emoji.EMOJI_TITLE,percent:33},{id:a["default"].emoji.EMOJI_CONTROL,percent:33}],[{id:a["default"].rtbInDirect.ENABLED,percent:10},{id:a["default"].rtbInDirect.DISABLED,percent:90}],[{id:a["default"].rtbInDirectOld.ENABLED,percent:5},{id:a["default"].rtbInDirectOld.DISABLED,percent:95}],[{id:a["default"].phoneButton.ENABLED,percent:50},{id:a["default"].phoneButton.DISABLED,percent:50}],[{id:a["default"].mobileAppRatingLimit.ENABLED,percent:50},{id:a["default"].mobileAppRatingLimit.DISABLED,percent:50}]];t.initLongExperiment=r,t.isLongExperiment=i},function(e,t,n){"use strict";var r=n(4),i=function(){function e(e){this.experiments=[];for(var t=0;t<e.length;t++)this.experiments.push(new r["default"](e[t]))}return e.prototype.isCurrentVersion=function(e){for(var t=0;t<this.experiments.length;t++)if(this.experiments[t].getId()===e)return!0;return!1},e}();t.__esModule=!0,t["default"]=i},function(e,t,n){"use strict";var r=n(5),i=function(){function e(e){this.coin=Math.random(),this.versions=r.prepare(e),this.defaultVersion=r.findDefault(e)}return e.prototype.getId=function(){return this.get("id")},e.prototype.getExtra=function(){return this.get("extra")},e.prototype.getDefaultExtra=function(){return this.defaultVersion&&this.defaultVersion.extra?this.defaultVersion.extra:null},e.prototype.getDefaultId=function(){return this.defaultVersion&&this.defaultVersion.id?this.defaultVersion.id:null},e.prototype.get=function(e){var t=this.choose();return t&&t.hasOwnProperty(e)?t[e]:null},e.prototype.choose=function(){for(var e=null,t=0;t<this.versions.length;t++)if(this.coin<this.versions[t].threshold){e=this.versions[t];break}return e},e}();t.__esModule=!0,t["default"]=i},function(e,t){"use strict";function n(e){for(var t,n=[],o=0,a=0;a<e.length;a++)t=i(r(e[a].percent)+o),o=t,n.push({id:e[a].id,extra:e[a].extra,threshold:t});return n}function r(e){return i(e/100)}function i(e){return Number(e.toFixed(c))}function o(e){for(var t=null,n=0;n<e.length;n++)(!t||t.percent<e[n].percent)&&(t=e[n]);return t}function a(e){return Math.random()<r(e)}var c=2;t.prepare=n,t.toFraction=r,t.fixPrecision=i,t.findDefault=o,t.isPercent=a},function(e,t){"use strict";var n={emoji:{EMOJI:"EMOJI",EMOJI_TITLE:"EMOJI_TITLE",EMOJI_CONTROL:"EMOJI_CONTROL"},rtbInDirect:{ENABLED:"RTB_IN_NEW_ENABLED",DISABLED:"RTB_IN_NEW_DISABLED"},rtbInDirectOld:{ENABLED:"RTB_IN_OLD_ENABLED",DISABLED:"RTB_IN_OLD_DISABLED"},phoneButton:{ENABLED:"PHONE_BUTTON_ENABLED",DISABLED:"PHONE_BUTTON_DISABLED"},mobileAppRatingLimit:{ENABLED:"MOBILE_APP_RATING_LIMIT_ENABLED",DISABLED:"MOBILE_APP_RATING_LIMIT_DISABLED"}};t.__esModule=!0,t["default"]=n},function(e,t){"use strict";function n(e,t){window.Ya=window.Ya||{},window.Ya.Context=window.Ya.Context||{},window.Ya.Context[e]=t}function r(e){return window.Ya=window.Ya||{},window.Ya.Context=window.Ya.Context||{},window.Ya.Context[e]}t.setGlobalVariable=n,t.getGlobalVariable=r},function(e,t){e.exports={loader:1499835017011,code:[{id:2301,percent:5,extra:{match:2301,confirm:"//st.yandexadexchange.net/confirm_r_2301.html"}},{id:2304,percent:5,extra:{match:2304,confirm:"//st.yandexadexchange.net/confirm_r_2304.html"}},{id:2299,percent:5,extra:{match:2299,confirm:"//st.yandexadexchange.net/confirm_r_2299.html"}},{id:2294,percent:5,extra:{match:2294,confirm:"//st.yandexadexchange.net/confirm_r_2294.html"}},{id:2284,percent:10,extra:{match:2284,confirm:"//st.yandexadexchange.net/confirm_r_2284.html"}},{id:2283,percent:10,extra:{match:2283,confirm:"//st.yandexadexchange.net/confirm_r_2283.html"}},{id:2285,percent:5,extra:{match:2285,confirm:"//st.yandexadexchange.net/confirm_r_2285.html"}},{id:2282,percent:5,extra:{match:2282,confirm:"//st.yandexadexchange.net/confirm_r_2282.html"}},{id:2281,percent:5,extra:{match:2281,confirm:"//st.yandexadexchange.net/confirm_r_2281.html"}},{id:2280,percent:5,extra:{match:2280,confirm:"//st.yandexadexchange.net/confirm_r_2280.html"}},{id:2279,percent:5,extra:{match:2279,confirm:"//st.yandexadexchange.net/confirm_r_2279.html"}},{id:2306,percent:35,extra:{match:2306,confirm:"//st.yandexadexchange.net/confirm_r_2306.html"}}]}}]);