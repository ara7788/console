!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(){return n(8)}var o=n(1),i=n(2).initLongExperiment,a=n(4)["default"],c=n(5).isPercent;!function(e,t,n){function d(t){var r=e[t];return e[t]=n,r}function l(e,t){return d("yandex_"+(t?t+"_":"")+e)}function s(e,t,n){for(var r=0;r<t.length;r++)e[t[r]]=l(t[r],n)}var u=r(),f=e.Ya=e.Ya||{};if(f.codeVer===n){f.loaderVer=u.loader;var _=new a(u.code),p=o.pcode,E=/^(([a-z0-9-]+\.)?)+devmail\.ru$/i;if(E.test(t.location.hostname)&&(p=_.getDefaultId()),p)f.codeVer=p,f.matchVer=_.getDefaultExtra().match,f.confirmUrl=_.getDefaultExtra().confirm;else{f.codeVer=_.getId();f.matchVer=_.getExtra().match,f.confirmUrl=_.getExtra().confirm}f._exp=_}f.Context||(f.Context={_callbacks:[],_asyncIdCounter:0,_asyncModeOn:!1,initTime:Number(new Date),longExp:{getId:function(){return""}},LOG_DIRECT:c(1)},i(),f.Direct={insertInto:function(e,t,n,r){f.Context._asyncModeOn||(f.Context._asyncModeOn=!0),f.Context.AdvManager?f.Context.AdvManager.renderDirect(e,t,n,r):f.Context._callbacks.push(function(){f.Context.AdvManager.renderDirect(e,t,n,r)})}});for(var x=["yandex_context_callbacks","yandexContextAsyncCallbacks"],h=0;h<x.length;h++){var D=d(x[h]);if(D){f.Context._asyncModeOn||(f.Context._asyncModeOn=!0);for(var I=0;I<D.length;I++)f.Context._callbacks.push(D[I])}}if(e.yandexContextSyncCallbacks)for(var L=d("yandexContextSyncCallbacks"),g=0;g<L.length;g++)f.Context._callbacks.push(L[g]);var m=["ad_format","site_bg_color","font_size","font_family","stat_id","no_sitelinks","search_text","search_page_number","lang"],v=["type","border_type","bg_color","border_radius","border_color","header_bg_color","title_color","text_color","url_color","hover_color","sitelinks_color","links_underline","limit","place","favicon","title_font_size","grab","c11n","geo_lat","geo_long","width","height"];if(e.yandex_ad_format){var O={};s(O,m),s(O,v,O.ad_format);var T=O.place;T&&t.getElementById(T)||(T="Ya_sync_"+f.Context._asyncIdCounter++,t.write('<div id="'+T+'"></div>'));var C=l("partner_id");f.Context._callbacks.push(function(){f.Context.AdvManager.renderDirect(C,T,O)})}var b,B,b,B,w=f.codeVer>=1700?"//an.yandex.ru/resource/context_static_r_<%= CODE_VER %>.js":"//an.yandex.ru/resource/context_static_r<%= CODE_VER %>.js",b=w.replace("<%= CODE_VER %>",f.codeVer),B="https:"+b;if(t.getElementById(b)&&f.Context._init)return void f.Context._init();if(f.Context._asyncModeOn){var y=t.createElement("script"),A=t.getElementsByTagName("script")[0];y.id=b,y.src=B,A.parentNode.insertBefore(y,A)}else t.write('<script type="text/javascript" src="'+B+'" id="'+b+'"></script>')}(window,window.document)},function(e,t){"use strict";function n(e){for(var t=e.split("&"),n={},r=0;r<t.length;r++)0===t[r].indexOf(o+"=")&&(n.pcode=t[r].substr((o+"=").length)),0===t[r].indexOf(i+"=")&&(n.media=t[r].substr((i+"=").length));return n}function r(e){return parseInt(e,10)||void 0}var o="pcodever",i="mcodever",a=n(window.location.hash.replace(/^\#/,"")),c=n(window.location.search.replace(/^\?/,"")),d={pcode:r(a.pcode||c.pcode),media:r(a.media||c.media)};e.exports=d},function(e,t,n){"use strict";function r(){var e=new i["default"](l);c.setGlobalVariable(d,e)}function o(e){var t=c.getGlobalVariable(d);return!!t&&t.isCurrentVersion(e)}var i=n(3),a=n(6),c=n(7),d="__longExperiment",l=[[{id:a["default"].emoji.EMOJI,percent:50},{id:a["default"].emoji.EMOJI_CONTROL,percent:50}],[{id:a["default"].doubleTitle.DOUBLE_TITLE_FIRST,percent:33},{id:a["default"].doubleTitle.DOUBLE_TITLE_LAST,percent:33},{id:a["default"].doubleTitle.DOUBLE_TITLE_CONTROL,percent:33}],[{id:a["default"].rtbInDirect.ENABLED,percent:10},{id:a["default"].rtbInDirect.DISABLED,percent:90}],[{id:a["default"].rtbInDirectOld.ENABLED,percent:5},{id:a["default"].rtbInDirectOld.DISABLED,percent:95}],[{id:a["default"].mobileAppRatingLimit.ENABLED,percent:50},{id:a["default"].mobileAppRatingLimit.DISABLED,percent:50}]];t.initLongExperiment=r,t.isLongExperiment=o},function(e,t,n){"use strict";var r=n(4),o=function(){function e(e){this.experiments=[];for(var t=0;t<e.length;t++)this.experiments.push(new r["default"](e[t]))}return e.prototype.isCurrentVersion=function(e){for(var t=0;t<this.experiments.length;t++)if(this.experiments[t].getId()===e)return!0;return!1},e}();t.__esModule=!0,t["default"]=o},function(e,t,n){"use strict";var r=n(5),o=function(){function e(e){this.coin=Math.random(),this.versions=r.prepare(e),this.defaultVersion=r.findDefault(e)}return e.prototype.getId=function(){return this.get("id")},e.prototype.getExtra=function(){return this.get("extra")},e.prototype.getDefaultExtra=function(){return this.defaultVersion&&this.defaultVersion.extra?this.defaultVersion.extra:null},e.prototype.getDefaultId=function(){return this.defaultVersion&&this.defaultVersion.id?this.defaultVersion.id:null},e.prototype.get=function(e){var t=this.choose();return t&&t.hasOwnProperty(e)?t[e]:null},e.prototype.choose=function(){for(var e=null,t=0;t<this.versions.length;t++)if(this.coin<this.versions[t].threshold){e=this.versions[t];break}return e},e}();t.__esModule=!0,t["default"]=o},function(e,t){"use strict";function n(e){for(var t,n=[],i=0,a=0;a<e.length;a++)t=o(r(e[a].percent)+i),i=t,n.push({id:e[a].id,extra:e[a].extra,threshold:t});return n}function r(e){return o(e/100)}function o(e){return Number(e.toFixed(c))}function i(e){for(var t=null,n=0;n<e.length;n++)(!t||t.percent<e[n].percent)&&(t=e[n]);return t}function a(e){return Math.random()<r(e)}var c=2;t.prepare=n,t.toFraction=r,t.fixPrecision=o,t.findDefault=i,t.isPercent=a},function(e,t){"use strict";var n={doubleTitle:{DOUBLE_TITLE_FIRST:"DOUBLE_TITLE_FIRST",DOUBLE_TITLE_LAST:"DOUBLE_TITLE_LAST",DOUBLE_TITLE_CONTROL:"DOUBLE_TITLE_CONTROL"},emoji:{EMOJI:"EMOJI",EMOJI_CONTROL:"EMOJI_CONTROL"},rtbInDirect:{ENABLED:"RTB_IN_NEW_ENABLED",DISABLED:"RTB_IN_NEW_DISABLED"},rtbInDirectOld:{ENABLED:"RTB_IN_OLD_ENABLED",DISABLED:"RTB_IN_OLD_DISABLED"},mobileAppRatingLimit:{ENABLED:"MOBILE_APP_RATING_LIMIT_ENABLED",DISABLED:"MOBILE_APP_RATING_LIMIT_DISABLED"}};t.__esModule=!0,t["default"]=n},function(e,t){"use strict";function n(e,t){window.Ya=window.Ya||{},window.Ya.Context=window.Ya.Context||{},window.Ya.Context[e]=t}function r(e){return window.Ya=window.Ya||{},window.Ya.Context=window.Ya.Context||{},window.Ya.Context[e]}t.setGlobalVariable=n,t.getGlobalVariable=r},function(e,t){e.exports={loader:1498132349373,code:[{id:2116,percent:100,extra:{match:2116,confirm:"//st.yandexadexchange.net/confirm_r_2116.html"}}]}}]);