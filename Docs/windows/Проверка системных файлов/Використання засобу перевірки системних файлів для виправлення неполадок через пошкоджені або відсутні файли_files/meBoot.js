!function e(t,n,r){function i(o,s){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(a)return a(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[o]={exports:{}};t[o][0].call(u.exports,function(e){var n=t[o][1][e];return i(n||e)},u,u.exports,e,t,n,r)}return n[o].exports}for(var a="function"==typeof require&&require,o=0;o<r.length;o++)i(r[o]);return i}({1:[function(e,t,n){!function(){var e=window.MSA.MeControl,t=navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase(),n=/(msie) ([\w.]+)/;e.Browser={ie8:function(e,n,r){var i=e.exec(t);return i&&i[1]===n&&i[2]===r}(n,"msie","8.0")}}()},{}],2:[function(e,t,n){!function(e){function t(t){function S(){if(D=!0,y.hasActiveUser()){if(x.firstName=e.trim(x.firstName),x.lastName=e.trim(x.lastName),x.memberName=e.trim(x.memberName),D=!(!x.memberName||!x.idp),x.idp===s.MSA||x.idp===s.MSA_FED){var n=x;x.idp===s.MSA&&(D=!(!D||!n.cid)),n.cid=n.cid&&n.cid.toLowerCase()}y.isReady()&&P.setActiveUser(x)}x=e.extend({},d,x),D=!(!D||!T||!T.msaInfo&&!T.aadInfo),(T=e.extend(!0,{},f,T)).msaInfo.accountSettingsUrl=o.appendQueryParams(m,{lang:t.market,partnerId:r.Config.ptn,partnerDomain:encodeURIComponent(location.hostname)}),N=y.imageUrl("cross.png"),y.extensibleLinks(t.extensibleLinks),M(),r.$model=y}function M(){if(D&&!y.hasActiveUser()&&T.msaInfo&&t.autoSignIn&&T.msaInfo.signInUrl&&t.autoSignInReturnUrl&&U()){var n=e('<iframe class="msame_auto_frame">');n.attr("src",C()),e(document.body).append(n)}}function U(){return!o.getCookie(l)}function b(){var e=i.format("{0}=1; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT",l);document.cookie=e}function w(){var e=i.format("{0}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT",l);document.cookie=e}function C(){var e=s.MSA,n=T.msaInfo.signInUrl,r=encodeURIComponent(t.autoSignInReturnUrl);n=o.setQueryParam(n,p[e],r);var i={};return o.hasQueryParam(n,g[e])||(i[g[e]]="1"),o.appendContextParam(n,i)}function A(e){var t=!e||P&&P.isIdpEnabled(e.idp);e=e||x;return t?e.idp===s.MSA||e.idp===s.MSA_FED?y.pawnImgUrls.MsaEnabled:y.pawnImgUrls.AadEnabled:e.idp===s.MSA||e.idp===s.MSA_FED?y.pawnImgUrls.MsaDisabled:y.pawnImgUrls.AadDisabled}function I(e){var n=e.tileUrl;return n||(n=i.format(c,e.cid,t.isINT?"-int":"",o.getCookie("upck")||"1")),n}(t=t||{}).events=t.events||{},t.mobileBreakpoints=t.mobileBreakpoints||{};var N,y=this,_=!1,D=!0,x=t.userData,T=t.rpData,k=t.urlBase,H=null,E=r.MobileState.Auto,P=null,L=null;y.options=t||{},y.imageUrl=function(e){return i.format("{0}/MeControl/{1}/{2}",k,r.Version,e)},y.pawnImgUrls={MsaEnabled:y.imageUrl("msa_enabled.png"),MsaDisabled:y.imageUrl("msa_disabled.png"),AadEnabled:y.imageUrl("aad_enabled.png"),AadDisabled:y.imageUrl("aad_disabled.png")},y.isValid=function(){return D},y.isReady=function(){return!(!D||!P)},y.mobileState=function(e){var i=r.MobileState;if("number"==typeof e&&e>=i.Auto&&e<=i.Mobile&&(E=e),E!==i.Auto)return E;var a=t.mobileBreakpoints;return a.mobile&&a.mobile>=n.innerWidth?i.Mobile:a.shortHeader&&a.shortHeader>=n.innerWidth?i.ShortHeader:i.Full},y.hasActiveUser=function(){return x&&x.authenticatedState==r.AuthState.SignedIn},y.setActiveUser=function(e){e&&(x=e,S())},y.getProfilePictureUrl=function(e){var t="";switch((e=e||{}).idp){case s.MSA:t=I(e);break;case s.AAD:var n=e;t=n.largeTileUrl||n.smallTileUrl||n.tileUrl||A(e===x?null:e);break;case s.MSA_FED:if(e.cid)t=I(e);else{var r=e;t=r.largeTileUrl||r.smallTileUrl||r.tileUrl||A()}}return t},y.getDisplayName=function(e){var t=function(e,t){return i.format(r.Loc.lf?"{1} {0}":"{0} {1}",e,t)},n="";switch((e=e||{}).idp){case s.MSA:n=t(e.firstName,e.lastName);break;case s.AAD:case s.MSA_FED:n=e.displayName||t(e.firstName,e.lastName)}return n.trim&&(n=n.trim()),n},y.headerData=function(){var e,n=x.nickName||(r.Loc.lf?x.lastName||x.firstName:x.firstName||x.lastName);switch(x.idp){case s.MSA:e=n;break;case s.AAD:case s.MSA_FED:e=x.displayName||n}e=e||x.memberName;var i=t.headerHeight;return i="number"==typeof i?Math.max(h,Math.min(v,i)):0,{displayName:e,displayNameMobile:y.getDisplayName(x),nickName:x.nickName,tileUrl:y.getProfilePictureUrl(x),memberName:x.memberName||"",authenticatedState:x.authenticatedState,errorImgUrl:A(),chevronImgUrl:y.imageUrl("Chevronpng.png"),height:i,mobileState:y.mobileState(),chevHtml:t.custom&&t.custom.chevHtml}},y.activeAccountData=function(){return{idp:x.idp,firstName:x.firstName||"",lastName:x.lastName||"",nickName:x.nickName||"",displayName:y.getDisplayName(x),orgName:x.orgName||"",roleName:x.roleName||"",memberName:x.memberName||"",tileUrl:y.getProfilePictureUrl(x),isCustomTileUrl:!!x.tileUrl,errorImgUrl:A(),getEditPictureUrl:function(){return o.appendQueryParams(u,{lang:t.market,ru:encodeURIComponent(n.location.href),partnerId:r.Config.ptn,partnerDomain:encodeURIComponent(n.location.hostname)})}}},y.getAccountItemData=function(e){return{tileUrl:y.getProfilePictureUrl(e),displayName:y.getDisplayName(e),authenticatedState:e.authenticatedState,memberName:e.memberName,errorImgUrl:A(e),enabled:P&&P.isIdpEnabled(e.idp),onSwitchUser:function(){y.switchToUser(e)},onSignOutUser:function(t,n){y.signOutUser(e,t,n)},removeImgUrl:N}},y.userData=function(){return x},y.rpData=function(){return T},y.authStateModel=function(e){return!P&&e&&(P=e,y.hasActiveUser()&&P.setActiveUser(x),P.getUserState(function(e){})),P},y.rewardsStateModel=function(e){return e&&(L=e),L},y.extensibleLinks=function(e){if(e){for(var t=e instanceof Array,n=0;t&&n<e.length;n++)(e[n].string||e[n].label)&&(e[n].onClick||e[n].url)&&(!e[n].onClick||e[n].onClick instanceof Function)||(t=!1);t&&(H=e),a.logQos("SetExtensibleLinks",t,0)}return H},y.dispose=function(){_||(P&&P.dispose(),T=x=P=null,_=!0)},y.signOut=function(){P&&(a.logEvent("SignOutAll",{userCount:P.currentState().length,currentUser:y.hasActiveUser()?x.idp:"none"}),T.msaInfo&&t.autoSignIn&&b(),t.events.onBeforeSignOut&&t.events.onBeforeSignOut(x),n.location.href=P.getSignOutUrl(x))},y.signIn=function(){if(a.logEvent("SignIn",{userCount:P&&P.currentState().length}),t.events.onSignIn)t.events.onSignIn();else{T.msaInfo&&t.autoSignIn&&w();var e;(e=P?o.appendContextParam(P.getSignInUrl(null,y.mobileState()===r.MobileState.Mobile)):T.preferredIdp==s.MSA?T.msaInfo.signInUrl:T.aadInfo&&T.aadInfo.signInUrl)&&(n.location.href=e)}},y.switchToUser=function(e){a.logEvent("SwitchUser",{userCount:P.currentState().length,idp:e&&e.idp,currentUser:y.hasActiveUser()?x.idp:"none"}),n.location.href=P.getSwitchToUrl(e)},y.signOutUser=function(e,t,n){a.logEvent("RemoveUser",{userCount:P.currentState().length,idp:e&&e.idp,currentUser:y.hasActiveUser()?x.idp:"none"}),P.signOutUser(e,t,n)},S()}var n=window,r=n.MSA.MeControl,i=r.Strings,a=r.Log,o=r.Util,s=r.IDP;r.MobileState={Auto:-1,Full:0,ShortHeader:1,Mobile:2};var l="msame_asi",c="https://cid-{0}.users.storage.live{1}.com/users/0x{0}/myprofile/expressionprofile/profilephoto:Win8Static,UserTileMedium,UserTileStatic/MeControlXXLUserTile?ck={2}&ex=24",u="https://account.microsoft.com/profile/edit/picture?ref=MeControl",m="https://account.microsoft.com/?ref=MeControl",d={firstName:"",lastName:"",displayName:"",smallTileUrl:"",authenticatedState:""},f={msaInfo:{signInUrl:"",signOutUrl:"",meUrl:""},preferredIdp:s.MSA},p={},g={};p[s.MSA]="wreply",g[s.MSA]="checkda";var v=100,h=44;r.MeControlModel=t}(window.MejQuery)},{}],3:[function(e,t,n){!function(e){function t(t){function l(){A=new a.MeControlModel(C),M=A.mobileState(),A.isValid()?(i.on("resize",S),setTimeout(function(){a.API.setController(U),o.logEvent("$MeControlReady",{duration:Date.now()-w.startTime})},0),m(),f()):o.logQos("modelValidate",!1,0,"MissingData")}function c(){I&&(e(I).off(),I.dispose()),I=null}function u(){N&&(e(N).off(),N.dispose()),N=null}function m(){I||p(a.CssmeBoot,function(){I=new a.MeHeaderControl(A.headerData()),_.html(I.render()),I.activate(),e(I).on("click",v),o.logEvent("HeaderReady",{duration:Date.now()-w.startTime}),g()})}function d(){if(!a.MeDropdownControl)return U.dispose(),void w.showHeaderNoJs();b||N||p(a.CssmeCore,function(){g()})}function f(){var t=w.getJsUrl("meCore");if(a.MeDropdownControl)d();else{if(y)return;y=!0;var n=function(){w.loadScript(t,"meCore",function(){y=!1,d()},function(){})};"complete"===document.readyState?n():e(r).load(n)}}function p(e,t){function n(){var n=document,r=n.createTextNode(e),i=n.createElement("style");i.type="text/css",i.appendChild(r),n.getElementsByTagName("head")[0].appendChild(i),setTimeout(function(){t&&t()},0)}e&&(r.requestAnimationFrame?r.requestAnimationFrame(n):n())}function g(){a.MeDropdownControl&&I&&!N&&(a.IFrameControl.init(),A.authStateModel(new a.AuthStateModel(A.rpData(),a.Config.aad,a.Config.pxy,C.isINT)),A.rewardsStateModel(new a.RewardsStateModel(a.Config.ptn,a.Config.mkt,a.Config.rwd&&A.hasActiveUser()&&A.userData().idp===a.IDP.MSA)),N=new a.MeDropdownControl(A,I.elements()),e("body").append(N.render()),N.activate(),e(N).on("visible",h),o.logEvent("DropdownReady",{duration:Date.now()-w.startTime}))}function v(e,t){A.hasActiveUser()||A.isReady()&&0!==A.authStateModel().currentState().length?N&&N.toggle(t&&t.isKeyboard):A.signIn()}function h(e,t){_.toggleClass("msame_open",t||t.visible)}function S(){if(!b){var e=A.mobileState();M!==e&&(M=e,I&&I.setMobileState(M),N&&N.setMobileState(M))}}var M,U=this,b=!1,w=a.Loader,C=t,A=null,I=null,N=null,y=!1,_=e("#"+C.containerId);U.setActiveUser=function(e){!b&&A&&(A.setActiveUser(e),A.isValid()?(o.logQos("SetActiveUser",!0,0),c(),u(),m(),f()):o.logQos("SetActiveUser",!1,0,"MissingData"))},U.setExtensibleLinks=function(e){!b&&A&&(A.extensibleLinks(e),N&&N.updateExtensibleLinks())},U.refreshUserPicture=function(){if(!b&&A){var e=A.getProfilePictureUrl(A.userData());U.setUserPicture(e)}},U.setUserPicture=function(e){!b&&e&&(I&&I.setUserPicture(e),N&&N.setUserPicture(e))},U.setMobileState=function(e){!b&&A&&(A.mobileState(e),S())},U.openCloseDropdown=function(e){!b&&N&&(e?N.show():N.hide(!0))},U.reinit=function(e){U.dispose(),n(e,C)},U.dispose=function(){b||(c(),u(),A&&A.dispose(),A=null,a.IFrameControl&&a.IFrameControl.dispose(),i.off(s),r.MSA.$MeControl=null,b=!0)},setTimeout(l,0),i.on("unload"+s,U.dispose)}function n(n,i){a.Loader.startTime=Date.now(),n.events&&n.events.onEventLog&&o.setLogEvent(n.events.onEventLog),n.urlBase=i.urlBase,n=e.extend({},i,n),r.MSA.$MeControl=new t(n)}var r=window,i=e(r),a=r.MSA.MeControl,o=a.Log,s=".msame";a.MeController=t,a.Loader.getOptions()&&(r.MSA.$MeControl=new t(a.Loader.getOptions()))}(window.MejQuery)},{}],4:[function(e,t,n){!function(e){function t(t){function n(){if(C&&!A){var t=I.mobileState===i.MobileState.Mobile,n=I.mobileState===i.MobileState.ShortHeader;if(x.toggleClass("msame_Mobile",t),x.toggleClass("msame_Short",n),x.toggleClass("msame_3row",!!I.nickName),v(x),I.authenticatedState==i.AuthState.SignedIn){var r=e(".msame_Header_name",x);r.show(),n?r.hide():t?(r.remove(),r.html(a.format(s,a.encodeHtml(I.displayNameMobile),I.nickName?a.encodeHtml(I.nickName):"",a.encodeHtml(I.memberName))),r.insertAfter(T),g()):(r.remove(),r.text(I.displayName),r.insertBefore(T))}h()}}function g(){y||(I.chevHtml?H.append(I.chevHtml):H.append(a.format('<img src="{0}">',I.chevronImgUrl)),y=!0)}function v(n){var r="",a="",o="";if(!(I.mobileState===i.MobileState.Mobile)&&t.height>0){if(t.height>m)r=t.height-p+"px";else{var s=t.height<u?d:f;r=s+"px",o=(t.height-s)/2}a=t.height}e(".msame_Header_picframe, .msame_Header_picframe img",n).css({height:r,width:r}),e(".msame_Header_name",n).css("line-height",a?a+"px":""),e(".msame_Header_piccont",n).css({paddingTop:o,paddingBottom:o}),n.css("height",a)}function h(){if(A||x.is(":visible")){var e;I.mobileState===i.MobileState.Mobile&&(e=x.outerWidth()-T.outerWidth()-H.outerWidth()-5),k.css("max-width",e||"")}else N||(N=!0,setTimeout(function(){N=!1,h()},500))}function S(){x.css("outline-style","none")}function M(t,n){t.preventDefault(),t.stopPropagation(),e(w).trigger("click",{isKeyboard:n})}function U(e){!e||32!==e.which&&13!==e.which||M(e,!0)}function b(){x.css("outline-style","")}var w=this,C=!1,A=!1,I=t,N=!1,y=!1,_=I.authenticatedState==i.AuthState.SignedIn,D=null,x=null,T=null,k=null,H=null,E=null,P=null;w.elements=function(){return{anchor:x}},w.setMobileState=function(e){I.mobileState!==e&&(I.mobileState=e,n())},w.setUserPicture=function(e){D&&D.reset(e)},w.render=function(){var n="",r=a.getString("signin");if(_){var s=i.PictureLoaderCache.isCached(I.tileUrl)?I.tileUrl:"";n=a.format(l,s),r=I.displayName}var c=a.format(o,a.encodeHtml(r),n);if(t.height>0){var u=e("<div>").append(c);return v(e(".msame_Header",u)),u.html()}return c},w.activate=function(){C||A||(C=!0,x=e(".msame_Header"),T=e(".msame_Header_pic",x),k=e(".msame_Header_name",x),H=e(".msame_Header_chev",x),P=e(".msame_Header_pic img",x),E=e(".msame_Header_piccont",x),x.on("click",M),x.on("keydown",U),x.on("blur",b),x.on("mousedown",S),x.on("touchstart",S),x.toggleClass("msame_unauth",!_),r.on("resize"+c,h),i.Browser.ie8&&x.addClass("msaie8"),D||(D=new i.PictureLoader(P,I.tileUrl,I.errorImgUrl)),I.mobileState!==i.MobileState.Full&&n(),setTimeout(D.activate,0))},w.deactivate=function(){C&&!A&&(C=!1,r.off("resize"+c),x.off(),D&&D.deactivate())},w.dispose=function(){A||(w.deactivate(),D&&(D.dispose(),D=null),x.remove(),I=t=null,P=x=null,A=!0)}}var n=window,r=e(n);n.MSA=n.MSA||{};var i=n.MSA.MeControl=n.MSA.MeControl||{},a=i.Strings,o='<div class="msame_Header" role="link" tabIndex="0"><div class="msame_Header_name msame_TxtTrunc">{0}</div>{1}<div class="msame_Header_chev"></div></div>',s='<div class="msame_TxtTrunc msame_Header_fullName">{0}</div><div class="msame_TxtTrunc msame_Header_nickName">{1}</div><div class="msame_TxtTrunc msame_Header_email">{2}</div>',l='<div class="msame_Header_pic"><div class="msame_Header_piccont"><div class="msame_Header_picframe"><img role="presentation" src="{0}"></div></div></div>',c=".msameheader",u=48,m=70,d=34,f=36,p=28;i.MeHeaderControl=t}(window.MejQuery)},{}],5:[function(e,t,n){!function(){function e(e,t,o){function s(){var n=e.prop("src")||t;return i[n]||(i[n]={succeeded:!1,instances:[]}),i[n]}function l(){var e=s();if(!e.succeeded&&(e.succeeded=!0,e.instances.length>0)){r.logQos("TileLoad",!1,Date.now()-m,"ImageRestored: "+t,{url:t});for(var n=0;n<e.instances.length;n++)e.instances[n].reset()}r.logQos("TileLoad",!0,Date.now()-m,null,{url:t})}function c(){try{l();var t,n,i=0;n=e[0].naturalWidth,t=e[0].naturalHeight;var a=e.css("width"),o=e.css("height");if(1==n&&1==t||"1px"==a&&"1px"==o)return void u();var s=Math.round;if(n&&t&&n!=t)if(n>t){var c=parseInt(o),m=parseInt(a);i=-s((s(n*(c/t))-m)/2),e.css({width:"auto","max-width":"none","margin-left":i+"px"})}else e.css({height:"auto","max-height":"none"});e.css("visibility","")}catch(e){r.logEvent("TileLoadError",{message:e.message})}}function u(){var n;try{s().instances.push(d),n=e.parent(),e.remove();var i=o;e.attr("src")!=i&&(r.logQos("TileLoad",!0,Date.now()-m,"ImageFailed: "+t,{url:t,clientError:!0}),setTimeout(function(){e&&e.attr("src",i).css("visibility","")},0))}catch(e){r.logEvent("TileLoadError",{message:e.message})}finally{null!=n&&n.append(e)}}var m,d=this,f=!1,p=!1,g=!1;d.activate=function(){e&&!f&&(f=!0,p=!0,m=Date.now(),e.prop("src")===t?c():(e.on("load",c),e.on("error",u),t&&n.startsWith(t.toLowerCase(),a)?e.prop("src",t):e.prop("src",o)))},d.deactivate=function(){p&&!g&&(p=!1,e&&e.off())},d.reset=function(e){p&&!g&&(e&&(t=e),d.deactivate(),f=!1,d.activate())},d.dispose=function(){g||(d.deactivate(),e=null,g=!0)}}var t=window.MSA.MeControl,n=t.Strings,r=t.Log,i={},a="https://";t.PictureLoaderCache={isCached:function(e){return i[e]&&i[e].succeeded}},t.PictureLoader=e}()},{}],6:[function(e,t,n){!function(e){function t(){function t(e,t,n){var r=n.s===t;if(!r){t=t||0;var i,a,o=e.charCodeAt(t);n.s=-1,o<55296||o>57343?n.c=o:o<=56319?(i=o,a=e.charCodeAt(t+1),n.c=1024*(i-55296)+(a-56320)+65536,n.s=t+1):(n.c=-1,r=!0)}return!r}var a=this,o=!1,s={};a.addStrings=function(t){e.extend(s,t)},a.getString=function(e,t){var n=s[e]||a.format("ERROR: {0}",e);return t?a.encodeHtml(n):n},a.startsWith=function(e,t){return e.substr(0,t.length)===t},a.format=function(e){function t(e){var t=i[parseInt(e.replace(r,""))];return null==t&&(t=""),t}for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e.replace(n,t)},a.dispose=function(){o||(s=null,o=!0)},a.encodeHtml=function(e){if(!e)return"";var n={c:0,s:-1};return e.replace(i,function(e,r,i){return t(i,r,n)?["&#",n.c,";"].join(""):""})}}var n=/\{\d+\}/g,r=/[\{\}]/g,i=/[^\w .,-]/g;window.MSA.MeControl.Strings=new t}(window.MejQuery)},{}],7:[function(e,t,n){!function(){var e=window.MSA.MeControl,t=e.Strings;e.Util={appendQueryParams:function(e,t){if(!e)return"";var n=[];for(var r in t)this.hasQueryParam(e,r,t[r])?e=this.setQueryParam(e,r,t[r]):n.push(r+"="+(t[r]?t[r]:""));return 0===n.length?e:e+(-1===e.indexOf("?")?"?":"&")+n.join("&")},appendContextParam:function(e,t){return t=t||{},t.uictx="me",this.appendQueryParams(e,t)},hasQueryParam:function(e,n){var r=t.format("([&?]{0}=)[^&]*",n);return new RegExp(r,"i").test(e)},setQueryParam:function(e,n,r){var i=t.format("([&?]{0}=)[^&]*",n),a=new RegExp(i,"i");if(a.test(e))return e.replace(a,"$1"+r);var o={};return o[n]=r,this.appendQueryParams(e,o)},getCookie:function(e){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null}}}()},{}],8:[function(e,t,n){},{}],9:[function(e,t,n){arguments[4][8][0].apply(n,arguments)},{dup:8}],10:[function(e,t,n){arguments[4][8][0].apply(n,arguments)},{dup:8}],11:[function(e,t,n){arguments[4][8][0].apply(n,arguments)},{dup:8}],12:[function(e,t,n){arguments[4][8][0].apply(n,arguments)},{dup:8}]},{},[12,8,9,10,11,6,7,5,1,2,4,3]);;(function(){var ME=window.MSA.MeControl;ME.Loc={rtl:false,lf:false};ME.Strings.addStrings({
"signin":"\u0412\u0445\u0456\u0434",
"signout":"\u0412\u0438\u0445\u0456\u0434"});ME.CssmeBoot='.msame_TxtTrunc\x7bwhite-space\x3anowrap\x3btext-overflow\x3aellipsis\x3boverflow\x3ahidden\x3bword-break\x3abreak-all\x7d.msame_Header\x7bdisplay\x3ainline-block\x3bcursor\x3apointer\x3bfont-size\x3a14px\x3bborder-width\x3a1px\x3bborder-style\x3asolid\x3bborder-bottom-style\x3anone\x3bborder-color\x3atransparent\x3bwidth\x3a100\x25\x7d.msame_Header_name\x7bpadding-left\x3a12px\x3bmax-width\x3a160px\x3bdisplay\x3ainline-block\x3bline-height\x3a64px\x3bvertical-align\x3atop\x3bfont-family\x3a\x22Segoe UI\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI Symbol\x22,\x22Helvetica Neue\x22,\x22BBAlpha Sans\x22,\x22S60 Sans\x22,Arial,sans-serif\x3bfont-size\x3a86\x25\x3bcolor\x3a\x23505050\x7d.msame_unauth .msame_Header_name\x7bpadding-right\x3a12px\x7d.msame_unauth .msame_Header_name\x3ahover\x7bcolor\x3a\x230078d7\x7d.msame_Drop_AI_pic,.msame_Drop_active_pic,.msame_Header_pic\x7bdisplay\x3ainline-block\x7d.msame_Header_piccont\x7bpadding-top\x3a14px\x3bpadding-bottom\x3a14px\x3bpadding-right\x3a12px\x3bpadding-left\x3a8px\x7d.msame_Mobile .msame_Header_piccont\x7bpadding-top\x3a10px\x3bpadding-bottom\x3a10px\x7d.msame_Short .msame_Header_piccont\x7bpadding-left\x3a12px\x7d.msame_Header_picframe\x7bwidth\x3a36px\x3bheight\x3a36px\x3bborder-radius\x3a50\x25\x3boverflow\x3ahidden\x7d.msame_Mobile .msame_Header_picframe\x7bwidth\x3a48px\x3bheight\x3a48px\x7d.msame_open .msame_Header_picframe\x7bz-index\x3a3000001\x3bposition\x3arelative\x7d.msame_Header_chev\x7bdisplay\x3anone\x7d.msame_Mobile .msame_Header_piccont\x7bpadding-right\x3a8px\x3bpadding-left\x3a10px\x7d.msame_Mobile .msame_Header_name\x7bline-height\x3a3\x3bfont-size\x3a114\x25\x3bpadding-left\x3a10px\x3bpadding-right\x3a10px\x3bdisplay\x3ainline-block\x3bvertical-align\x3atop\x3bpadding-top\x3a14px\x7d.msame_Mobile.msame_3row .msame_Header_name\x7bpadding-top\x3a6px\x7d.msame_Mobile .msame_Header_chev\x7bdisplay\x3ainline-block\x3bline-height\x3a64px\x3bvertical-align\x3atop\x3bpadding-right\x3a16px\x3bpadding-left\x3a8px\x3bfloat\x3aright\x7d.msame_open .msame_Header_chev img\x7b-moz-transform\x3ascaleY\x28-1\x29\x3b-o-transform\x3ascaleY\x28-1\x29\x3b-webkit-transform\x3ascaleY\x28-1\x29\x3btransform\x3ascaleY\x28-1\x29\x3bfilter\x3aFlipV\x3b-ms-filter\x3aFlipV\x7d.msame_Drop_root .msame_Drop_AI\x3afocus,.msame_Drop_root .msame_Drop_AI_remove\x3afocus,.msame_Drop_root a\x3afocus,.msame_Header\x3afocus\x7boutline-style\x3adotted\x3boutline-color\x3a\x23000\x3boutline-width\x3a1px\x7d.msame_Header .msame_Header_piccont img\x7bwidth\x3a36px\x3bheight\x3a36px\x3bline-height\x3anormal\x3bvertical-align\x3abaseline\x7d.msame_Mobile .msame_Header_piccont img\x7bwidth\x3a48px\x3bheight\x3a48px\x7d.msame_Mobile .msame_Header_fullName\x7bfont-size\x3a100\x25\x3bcolor\x3a\x23000\x3bline-height\x3a1.333\x7d.msame_Drop_AI_email,.msame_Drop_AI_status,.msame_Mobile .msame_Header_email,.msame_Mobile .msame_Header_nickName\x7bfont-family\x3a\x22Segoe UI\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI Symbol\x22,\x22Helvetica Neue\x22,\x22BBAlpha Sans\x22,\x22S60 Sans\x22,Arial,sans-serif\x3bfont-size\x3a86\x25\x3bcolor\x3argba\x280,0,0,.54\x29\x3bline-height\x3a1.333333\x7d.msaie8 .msame_Drop_AI_pic,.msaie8 .msame_Drop_AI_right,.msaie8 .msame_Drop_active_pic,.msaie8 .msame_Drop_active_right,.msaie8 .msame_Header,.msaie8 .msame_Header_name,.msaie8 .msame_Header_pic\x7bzoom\x3a1\x7d';ME.Loader.scriptLoaded('meBoot');})();