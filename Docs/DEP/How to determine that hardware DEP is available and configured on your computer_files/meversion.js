!function n(e,t,o){function r(a,u){if(!t[a]){if(!e[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var f=new Error("Cannot find module '"+a+"'");throw f.code="MODULE_NOT_FOUND",f}var c=t[a]={exports:{}};e[a][0].call(c.exports,function(n){var t=e[a][1][n];return r(t||n)},c,c.exports,n,e,t,o)}return t[a].exports}for(var i="function"==typeof require&&require,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(n,e,t){!function(){var n=window;n.MSA={};var e=n.MSA.MeControl={};e.AuthState={SignedIn:1,SignedInIdp:2,NotSignedIn:3},e.IDP={MSA:"msa",AAD:"aad",MSA_FED:"msaFed",ORG_ID:"orgId"}}()},{}],2:[function(n,e,t){!function(){function n(){function n(n,e,t,o,r){var i={url:t,timeout:r},a=t+(r?"(timeout)":"");c&&c.logQos(n+"Load",!o,e,a,i)}function i(){if(!d){d=!0;var n=a.getJsUrl("meBoot");a.loadScript(n,"meBoot",function(){},function(){u?a.showHeaderNoJs():l=!0})}}var a=this,u=null,s=null,f={},c=t.Log,l=!1,d=!1;a.startTime=0,a.load=function(n){return!!n&&(c.setLogEvent(n.events&&n.events.onEventLog),n.userData&&n.rpData&&n.rpData.preferredIdp&&n.rpData.aadInfo&&n.rpData.msaInfo?(t.Config=t.Config||{},n.signInStr=n.signInStr||"Sign in",n.signOutStr=n.signOutStr||"Sign out",n.market=n.market||t.Config.mkt,n.urlBase=n.urlBase||t.Config.gfx,n.debug=n.debug||t.Config.dbg,n.isINT=n.isINT||t.Config.int,t.Version=t.Version||n.version||t.Config.ver,s=e.MejQuery=n.jQuery||e.jQuery||(e.$&&e.$.fn?e.$:null),e.MejQuery?e.MejQuery.fn.on?(u=n,a.startTime=Date.now(),l?(a.showHeaderNoJs(),!1):(t.MeController&&(e.MSA.$MeControl=new t.MeController(u)),setTimeout(i,0),!0)):(c.logQos("InlineLoad",!1,0,"JQueryVersion"),!1):(c.logQos("InlineLoad",!1,0,"JQueryMissing"),!1)):(c.logQos("InlineLoad",!1,0,"InvalidOptions"),!1))},a.getOptions=function(){return u},a.loadScript=function(e,t,r,i){function u(n){c&&(a.scriptLoaded(t,n),c.onload=c.onreadystatechange=c.onerror=null,c=null)}var s=document.head||document.getElementsByTagName("head")[0],c=document.createElement("script");c.async=!0,c.charset="UTF-8",c.src=e;var l=setTimeout(function(){i&&i(),n(t,o,e,!1,!0)},o);f[t]={timeoutId:l,callback:r,start:Date.now(),url:e},c.onload=function(){f[t]&&r&&r(),u()},c.onerror=function(){i&&i(),u(!0)},s.insertBefore(c,s.firstChild)},a.scriptLoaded=function(e,t){f[e]&&(clearTimeout(f[e].timeoutId),n(e,Date.now()-f[e].start,f[e].url,t),!t&&f[e].callback&&f[e].callback(),delete f[e])},a.getJsUrl=function(n){return t.Config.gfx+"/MeControl/"+t.Config.ver+"/"+t.Config.mkt+"/"+n+(t.Config.dbg?"":".min")+".js"},a.showHeaderNoJs=function(){var n,e,o=u.rpData.preferredIdp===t.IDP.MSA?u.rpData.msaInfo:u.rpData.aadInfo;u.userData.authenticatedState==t.AuthState.SignedIn?(n=u.signOutStr,e=o.signOutUrl):(n=u.signInStr,e=o.signInUrl);var i=s(r);s(".msame_Header a",i).attr("href",e).text(n),s("#"+u.containerId).html(i)};var g=e.require;g&&g.specified&&g.specified("jqReady!")&&g(["jqReady!"],function(n){e.MejQuery=n,i()})}var e=window,t=e.MSA.MeControl,o=3e3,r='<div><div class="msame_Header"><a style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden; max-width: 160px; display: inline-block; line-height: 48px; font-family: \'Segoe UI\'; font-size: 12.4px; color: rgb(80,80,80); padding: 0 10px;"></a></div></div>';e.MejQuery=e.jQuery,t.Loader=new n;var i=e.onMeControlReadyToLoad;setTimeout(function(){return i&&i()},0)}()},{}],3:[function(n,e,t){!function(){function n(){function n(){function n(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return(n()+n()+"-"+n()+"-4"+n().substr(0,3)+"-"+n()+"-"+n()+n()+n()).toLowerCase()}var e,t,a=this;if(o){e=o.getItem(r)||n();try{o.setItem(r,e)}catch(n){}}else e=n();Date.now||(Date.now=function(){return(new Date).getTime()}),a.setLogEvent=function(n){t=n},a.id=e,a.logQos=function(n,e,t,o,r){void 0===o&&(o=""),void 0===r&&(r={}),r[i]="qos",r.success=e?"1":"0",r.duration=t||0,r.errorCode=o,a.logEvent(n,r)},a.logEvent=function(n,o){void 0===o&&(o={}),o[i]||(o[i]="bici"),o.ts=Date.now(),o.uaid=e,t&&t(n,o)}}var e=window,t=e.MSA.MeControl,o=e.sessionStorage,r="msameid",i="type";t.Log=new n}()},{}],4:[function(n,e,t){!function(){function n(){function n(n){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var a={name:n,params:t};o?e(a):r.push(a)}function e(n){var e=n.name;o&&o.hasOwnProperty(e)&&setTimeout(function(){o[e].apply(o,n.params)},0)}var t=this,o=null,r=[];t.setController=function(n){o=n;var t=r;r=[];for(var i=0;i<t.length;i++)e(t[i])},t.setActiveUser=function(e){n("setActiveUser",e)},t.setExtensibleLinks=function(e){n("setExtensibleLinks",e)},t.refreshUserPicture=function(){n("refreshUserPicture")},t.setUserPicture=function(e){n("setUserPicture",e)},t.setMobileState=function(e){n("setMobileState",e)},t.openCloseDropdown=function(e){n("openCloseDropdown",e)}}window.MSA.MeControl.API=new n}()},{}],5:[function(n,e,t){},{}],6:[function(n,e,t){arguments[4][5][0].apply(t,arguments)},{dup:5}],7:[function(n,e,t){arguments[4][5][0].apply(t,arguments)},{dup:5}],8:[function(n,e,t){arguments[4][5][0].apply(t,arguments)},{dup:5}],9:[function(n,e,t){arguments[4][5][0].apply(t,arguments)},{dup:5}]},{},[9,5,6,7,8,1,4,3,2]);;window.MSA.MeControl.Config={"ver":"9.1.17163.1","mkt":"en-US","ptn":"smc","gfx":"https://mem.gfx.ms/me","dbg":false,"aad":false,"int":false,"pxy":false,"msTxt":false,"rwd":true};