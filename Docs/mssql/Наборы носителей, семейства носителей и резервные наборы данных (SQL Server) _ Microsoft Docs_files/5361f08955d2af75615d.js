!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r=window.webpackJsonp;window.webpackJsonp=function(n,i){for(var c,s,a=0,l=[];a<n.length;a++)s=n[a],o[s]&&l.push.apply(l,o[s]),o[s]=0;for(c in i)e[c]=i[c];for(r&&r(n,i);l.length;)l.shift().call(null,t)};var n={},o={1:0};return t.e=function(e,r){if(0===o[e])return r.call(null,t);if(void 0!==o[e])o[e].push(r);else{o[e]=[r];var n=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=t.p+""+e+".5361f08955d2af75615d."+({}[e]||e)+".js",n.appendChild(i)}},t.m=e,t.c=n,t.p="",t(0)}([function(e,t,r){e.exports=r(7)},,function(e,t,r){!function(){"use strict";if(!window.insight){var e={},t={traceError:function(){}};e.getMetaTagContent=function(e){try{var r=$("meta[name='"+e+"']");return r=r&&r.length>0?r[r.length-1].content:null}catch(e){return t.traceError("getMetaTagContent failed.",e),null}},e.setMetaTagContent=function(r,n){if(!n)return void t.traceError("FALSE inMTContent found.");if(null===e.getMetaTagContent(r)){var o=document.createElement("meta");o.name=r,o.content=n,document.getElementsByTagName("head")[0].appendChild(o)}else $("meta[name='"+r+"']").attr("content",n)},e.processWEDCSCustomEventFromArray=function(e){if("function"==typeof window.MscomCustomEvent)return e&&0!==e.length?void window.MscomCustomEvent.apply(this,e):void window.MscomCustomEvent()},e.generateGuid=function(){var e=(new Date).getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var r=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?r:3&r|8).toString(16)});return t.toUpperCase()};var n=function(t){var r=t.target.getAttribute("data-value"),n="annotation"===r?"sitenote":r,o=[];o.push("ms.wgtet","click"),o.push("ms.wgtsvc",n),e.processWEDCSCustomEventFromArray(o)},o=function(t){t.on("commentPosted",function(t){if(t&&t.id){var r=[];r.push("ms.commentid",encodeURI(t.id)),r.push("ms.commentdt",(new Date).getTime()),r.push("ms.commentet","commentPosted"),e.processWEDCSCustomEventFromArray(r)}})},i=function(r){t.traceError("comment loading failure",r);var n=[];n.push("ms.commenter",encodeURI(JSON.stringify(r))),n.push("ms.commentet","commentLoad"),e.processWEDCSCustomEventFromArray(n)},c=function(t){t.on("sidenotes.commentPosted",function(t){if(t&&t.id){var r=[];r.push("ms.commentid",encodeURI(null===t.id?null:t.id.replace("@","#"))),r.push("ms.commentdt",(new Date).getTime()),r.push("ms.commentet","sidenotePosted"),e.processWEDCSCustomEventFromArray(r)}})},s=function(r){t.traceError("sidenote loading failure",r);var n=[];n.push("ms.commenter",encodeURI(JSON.stringify(r))),n.push("ms.commentet","sidenoteLoad"),e.processWEDCSCustomEventFromArray(n)};e.setupLiveFyreTracking=function(){$("body").on("click",".lf-add-annotation, .lf-share-twitter, .lf-share-facebook",n);var e=r(3),a=e.getPromise("comment-init");a?a.then(o,i):t.traceError("Failed to get comment promise from commenting-callback");var l=e.getPromise("sidenote-init");l?l.then(c,s):t.traceError("Failed to get sidenote promise from commenting-callback")},e.scrollArea=function(e){try{this.name=e,this.scrollNA=!1,this.scrollBot=!1,this.scrollThreeQuarter=!1,this.scrollHalf=!1,this.scrollQuarter=!1}catch(e){t.traceError("Error in the scrollArea function. Error: "+e)}},e.currScrollArea=null,e.scrollAreaList=[],e.setCurrScrollArea=function(r){try{if("number"!=typeof r)return;if(e.scrollAreaList.length<=r)return;e.currScrollArea=e.scrollAreaList[r]}catch(e){t.traceError("Error in the setCurrScrollArea function. Error: "+e)}},e.scrollBottomElement=null,e.scrollPageHeight=-1,e.viewportBottom=-1,e.refreshScrollPageDimVars=function(){try{var r=0;e.scrollBottomElement&&(r=e.scrollBottomElement.getBoundingClientRect().top+window.pageYOffset),r<=0&&(r=document.body.getBoundingClientRect().height),e.scrollPageHeight=r,e.viewportBottom=window.pageYOffset+window.innerHeight}catch(e){t.traceError("Error in the refreshScrollPageDimVars function. Error: "+e)}},e.suppressMobileEvents=!1,e.fireScrollEvent=function(t){e.fireScrollEventSync(t,"scroll")},e.fireScrollStopEvent=function(t){e.fireScrollEventSync(t,"scroll-stop")},e.fireScrollEventSync=function(t,r){var n=[];n.push("ms.pgarea","body"),n.push("ms.scnum","scroll-"+t),n.push("ms.interactiontype","4"),n.push("ms.scn",r),e.processWEDCSCustomEventFromArray(n)},e.checkForNAScroll=function(){try{if(e.refreshScrollPageDimVars(),e.scrollPageHeight<=0)return;if(e.suppressMobileEvents&&window.innerWidth<=510)return;window.innerHeight>.9*e.scrollPageHeight?(e.currScrollArea.scrollNA=!0,e.fireScrollEvent("na")):e.fireScrollEvent("0%")}catch(e){t.traceError("Error in the checkForNAScroll function. Error: "+e)}};var a;e.checkTrueFalse=function(r,n){try{return!!n&&(e.scrollAreaList[0][r]=!1,!0)}catch(e){t.traceError("Error in the checkTrueFalse function. Error: "+e)}},$(window).on("scrollDirectionStatus",function(r,n){try{$.each(e.scrollAreaList[0],function(t,r){e.scrollAreaList[0].hasOwnProperty(t)&&t.match(/scroll/i)&&!t.match(/NA/)&&(a=e.checkTrueFalse(t,r))})}catch(e){t.traceError("Error in the scrollDirectionStatus listener function. Error: "+e)}}),e.quarterCheckFire=function(){try{e.currScrollArea.scrollQuarter||(e.currScrollArea.scrollQuarter=!0,e.fireScrollEvent("25%"))}catch(e){t.traceError("Error in the quarterCheckFire function. Error: "+e)}},e.halfCheckFire=function(){try{e.currScrollArea.scrollHalf||(e.currScrollArea.scrollHalf=!0,e.fireScrollEvent("50%"))}catch(e){t.traceError("Error in the halfCheckFire function. Error: "+e)}},e.threeQuarterCheckFire=function(){try{e.currScrollArea.scrollThreeQuarter||(e.currScrollArea.scrollThreeQuarter=!0,e.fireScrollEvent("75%"))}catch(e){t.traceError("Error in the threeQuarterCheckFire function. Error: "+e)}};var l,u=0,m=0,d="down",f="down",p=!1,h=!1;e.processScroll=function(r){try{if(r||(window.clearTimeout(u),u=window.setTimeout(function(){e.processScroll(!0)},1e4),window.clearTimeout(e.scrollResizeTimer)),null===e.currScrollArea)return;if(e.refreshScrollPageDimVars(),e.scrollPageHeight<=0)return;if(e.suppressMobileEvents&&window.innerWidth<=510)return;if(l=e.viewportBottom/e.scrollPageHeight,r===!0)return l>.99&&(l=1),void e.fireScrollStopEvent(Math.round(100*l)+"%");if(window.innerHeight>.9*e.scrollPageHeight)return void(e.currScrollArea.scrollNA||(e.currScrollArea.scrollNA=!0,e.fireScrollEvent("na")));window.innerHeight/e.scrollPageHeight>.5?p=!0:window.innerHeight/e.scrollPageHeight>.75&&(h=!0),d=m<=l?"down":"up",m=l;try{f!==d&&$(window).trigger("scrollDirectionStatus",["changed"]),l>.99?e.currScrollArea.scrollBot||(e.currScrollArea.scrollBot=!0,e.fireScrollEvent("100%")):l>.75?h?"down"===d?(e.quarterCheckFire(),e.halfCheckFire(),e.threeQuarterCheckFire()):(e.threeQuarterCheckFire(),e.halfCheckFire(),e.quarterCheckFire()):e.threeQuarterCheckFire():l>.5?p?"down"===d?(e.quarterCheckFire(),e.halfCheckFire()):(e.halfCheckFire(),e.quarterCheckFire()):e.halfCheckFire():l>.25&&e.quarterCheckFire()}catch(e){t.traceError("Error in the scroll benchmark conditionals. Raw error: "+e)}f=d}catch(e){t.traceError("Error in the processScroll function. Error: "+e)}},e.scrollResizeTimer=0,e.setupScrollTracking=function(){try{e.scrollBottomElement=document.querySelector("footer"),e.scrollAreaList.push(new e.scrollArea("body")),e.setCurrScrollArea(0),window.addEventListener("scroll",function(){e.processScroll()}),u=window.setTimeout(function(){e.processScroll(!0)},1e4),$(window).resize(function(){window.clearTimeout(e.scrollResizeTimer),e.scrollResizeTimer=window.setTimeout(function(){e.processScroll()},500)}),e.checkForNAScroll()}catch(e){t.traceError("Error in the setupScrollTracking function. Error: "+e)}},e.getPerfTiming=function(){if(!window.performance||!window.performance.timing)return null;var e=window.performance.timing.navigationStart;if("number"!=typeof e)return null;for(var t=["redirectStart","redirectEnd","fetchStart","connectStart","connectEnd","requestStart","responseStart","responseEnd","domLoading","domInteractive","domContentLoadedEventStart","domContentLoadedEventEnd","domComplete","loadEventStart","loadEventEnd"],r=[],n=0;n<t.length;n++){var o=t[n];if("number"!=typeof window.performance.timing[o])r.push("");else{var i=0!==window.performance.timing[o]?window.performance.timing[o]-e:"";r.push(i)}}return r.join()};var g={document_id:"ms.documentid",locale:"ms.contentlang",updated_at:"ms.publishtime",experiment_id:"ms.experimentid",experimental:"ms.experimental",assigned_experiments:"ms.assigned_experiments",original_content_git_url:"ms.giturl",original_ref_skeleton_git_url:"ms.gitsourceurl",site_name:"ms.sitename",gitcommit:"ms.gitcommit",ref_skeleton_gitcommit:"ms.gitsourcecommit",depot_name:"ms.depotname",pagetype:"ms.opspagetype",translationtype:"ms.translationtype"};e.setupBiTags=function(){for(var t in g){var r=e.getMetaTagContent(t);null!==r&&e.setMetaTagContent(g[t],r)}var n=msDocs.data.userLocale;if(e.setMetaTagContent("ms.locale",encodeURI(n)),n){var o=n.split("-");null===e.getMetaTagContent("ms.lang")&&e.setMetaTagContent("ms.lang",encodeURI(o[0])),null===e.getMetaTagContent("ms.loc")&&e.setMetaTagContent("ms.loc",o.length>1?encodeURI(o[1]):"")}!msDocs.data.currentTheme||"light"!==msDocs.data.currentTheme&&"dark"!==msDocs.data.currentTheme||null===e.getMetaTagContent("ms.theme")&&e.setMetaTagContent("ms.theme",msDocs.data.currentTheme),null!==e.getMetaTagContent("depot_name")&&null===e.getMetaTagContent("ms.contentsource")&&e.setMetaTagContent("ms.contentsource","OP"),null===e.getMetaTagContent("ms.pvid")&&e.setMetaTagContent("ms.pvid",e.generateGuid())},e.setupCampaignId=function(){var t,r,n=msDocs.functions.parseQueryString();(t=n.utm_campaign)?r=n.subscriptionId:(t=n["WT.mc_id"])?r=null:(t=msDocs.functions.cookies.get("cpnid"),r=msDocs.functions.cookies.get("subid")),t&&(msDocs.functions.cookies.set("cpnid",t,{expires:.5/24,domain:".microsoft.com"}),e.setMetaTagContent("ms.cpnid",t)),r?(msDocs.functions.cookies.set("subid",r,{expires:.5/24,domain:".microsoft.com"}),e.setMetaTagContent("ms.subid",r)):msDocs.functions.cookies.set("subid",r,{expires:-1,domain:".microsoft.com"})},e.enableWEDCS=function(){window.varClickTracking=1,window.varCustomerTracking=0,window.varAutoFirePV=1,window.route="",window.ctrl="",!function(){var t=[r(4)];(function(t){msDocs.functions.loadLibrary(t.paths.wedcs).then(function(){e.setupScrollTracking(),e.setupLiveFyreTracking()})}).apply(null,t)}()},$(document).ready(function(){e.setupBiTags(),e.setupCampaignId();var t=e.getPerfTiming();t&&$("head").append("<meta name='ms.perf.timing' content='"+t+"' />"),e.enableWEDCS(),function(e,t,r,n,o,i,c){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,i=t.createElement(r),c=t.getElementsByTagName(r)[0],i.async=1,i.src=n,c.parentNode.insertBefore(i,c)}(window,document,"script","https://www.google-analytics.com/analytics.js","ga"),ga("create","UA-62780441-21","auto"),ga("send","pageview")}),window.insight=e}}()},function(e,t,r){var n;n=function(){"use strict";var t={"comment-init":$.Deferred(),"sidenote-init":$.Deferred()};e.exports.attach=function(e,r,n){var o=t[e];o&&o.promise().then(r,n)},e.exports.getPromise=function(e){var r=t[e];return r?r.promise():null},e.exports.resolve=function(e,r){var n=t[e];n&&n.resolve(r)},e.exports.reject=function(e,r){var n=t[e];n&&n.reject(r)}}.call(t,r,t,e),!(void 0!==n&&(e.exports=n))},function(e,t,r){var n,o;n=[],o=function(){"use strict";return{paths:{livefyre:"//cdn.livefyre.com/Livefyre.js",openfeedback:"/_chrome/rating/open-rating.entry.min.js",opencomment:"/_chrome/commenting/open-commenting.entry.min.js",wedcs:"//i.s-microsoft.com/wedcs/ms.js"},localeList:["ar-ae","ar-bh","ar-dz","ar-eg","ar-iq","ar-jo","ar-kw","ar-lb","ar-ly","ar-ma","ar-om","ar-qa","ar-sa","ar-sy","ar-tn","ar-ye","bg-bg","bs-cyrl-ba","bs-latn-ba","ca-es","cs-cz","da-dk","de-at","de-ch","de-de","de-li","de-lu","el-gr","en-au","en-bz","en-ca","en-gb","en-hk","en-id","en-ie","en-in","en-jm","en-my","en-nz","en-ph","en-sg","en-tt","en-us","en-za","en-zw","es-ar","es-bo","es-cl","es-co","es-cr","es-do","es-ec","es-es","es-gt","es-hn","es-mx","es-ni","es-pa","es-pe","es-pr","es-py","es-sy","es-us","es-uy","es-ve","es-xl","et-ee","eu-es","fa-ir","fi-fi","fil-ph","fr-be","fr-ca","fr-ch","fr-fr","fr-lu","fr-mc","gl-es","gu-in","ha-latn-ng","he-il","hi-in","hr-ba","hr-hr","hu-hu","id-id","is-is","it-ch","it-it","iu-latn-ca","ja-jp","kk-kz","kn-in","kok-in","ko-kr","lt-lt","lv-lv","ml-in","mr-in","ms-bn","ms-my","nb-no","nl-be","nl-nl","nn-no","nso-za","pl-pl","pt-br","pt-pt","qut-gt","quz-pe","ro-ro","ru-ru","sk-sk","sl-si","sr-cyrl-cs","sr-cyrl-rs","sr-latn-cs","sr-latn-rs","sv-fi","sv-se","ta-in","te-in","th-th","tr-tr","uk-ua","ur-pk","uz-latn-uz","vi-vn","zh-cn","zh-hk","zh-mo","zh-sg","zh-tw"],europeLocaleList:["bg-bg","cs-cz","da-dk","de-de","de-ch","de-at","el-gr","es-es","et-ee","fi-fi","fr-fr","hr-hr","hu-hu","it-it","lt-lt","lv-lv","nb-bo","nl-be","nl-nl","pl-pl","pt-pt","ro-ro","sk-sk","sl-si","sv-se"],rtlLocaleList:["ar-sa","he-il"],impressumLinks:{"de-de":"//www.microsoft.com/de-de/corporate/rechtliche-hinweise/impressum.aspx","de-ch":"//www.microsoft.com/switzerland/microsoft-schweiz/de/unternehmen/impressum.mspx","de-at":"//www.microsoft.com/de-at/unternehmen/rechtliches/impressum-corp.aspx"},localeKeyInCookie:"MarketplaceSelectedLocale"}}.apply(t,n),!(void 0!==o&&(e.exports=o))},function(e,t,r){var n,o;n=[],o=function(){"use strict";var e=function(){return"//privacy.microsoft.com/"+msDocs.data.userLocale+"/"},t=function(){var e=msDocs.functions.getParam("redirectedfrom"),t=String(e);return t=t.toLowerCase()},n=function(){var e="hideRedirectMSDN",r="#msdn-redirection-notification",n="a#redirect-notification-close",o=t();"msdn"===o&&($(r).css("display",msDocs.functions.cookies.get(e)?"none":"inline-block"),$(n).click(function(){msDocs.functions.cookies.set(e,1),$(r).css("display","none")}))};$("#cookie-notification-close").attr("title",msDocs.loc.close),$("#redirect-notification-close").attr("title",msDocs.loc.close),$("#privacystatement-link").text(msDocs.loc.learnmore).attr("title",msDocs.loc.privacystatement),$("#cookie\\.consent\\.europe").text(msDocs.loc["cookie.consent.europe"]);var o=r(6);$("#langDisclaimer").find("span.disclaimertext").text(msDocs.loc["disclaimer.text"]),$(".doc-outline").find("h3").text(msDocs.loc["in.this.article"]),$("form.tocFilter").find("input").attr("placeholder",msDocs.loc["filter.text"]),$("div.emptyFilterMessage").text(msDocs.loc["no.results"]),$("#footer-privacy-link").attr("href",e()),o.updateFooter(),jQuery(function(e){n()})}.apply(t,n),!(void 0!==o&&(e.exports=o))},function(e,t,r){var n;n=function(){"use strict";function e(){var e=r(4).europeLocaleList,t=r(4).impressumLinks,n=function(e){return"/"+msDocs.functions.escape(e)+"/legal/termsofuse"},o=function(e){return"//privacy.microsoft.com/"+msDocs.functions.escape(e)+"/privacystatement/"},i=function(t){return t&&e.indexOf(t.toLowerCase())>-1},c=msDocs.data.userLocale;c&&(c=c.toLowerCase(),$("#footer-term-of-use").attr("href",n(c)),t[c]&&($("#impressum-link").attr("href",t[c]),$("#impressum-section").show(),$("#impressum-section").css("display","inline")),i(c)&&($("#privacystatement-link").attr("href",o(c)),$("#lca-cookie-notification").css("display",msDocs.functions.cookies.get("hideconsent")?"none":"inline-block"),$("a#cookie-notification-close").click(function(){msDocs.functions.cookies.set("hideconsent",1),$("#lca-cookie-notification").css("display","none")})))}return{updateFooter:e}}.call(t,r,t,e),!(void 0!==n&&(e.exports=n))},function(e,t,r){function n(){var e=document.getElementsByTagName("script"),t=e[e.length-1],r=t.src;return r.substr(0,r.lastIndexOf("/")+1)}r.p=n(),$(function(){"use strict";r(5);var e=r(8),t=r(10);r(2),msDocs.data.userLocale&&0===msDocs.data.userLocale.toLowerCase().indexOf("en-")||$("#comments-link").hide(),$(function(){r.e(2,function(e){var t=[e(12),e(18),e(19),e(20),e(22)];(function(t,r){t.renderAzureSelectors(),r.renderBranchSelectorAsync(),!function(){var t=[e(4)];(function(e){msDocs.functions.loadLibrary(e.paths.openfeedback)}).apply(null,t)}()}).apply(null,t)})}),e.renderInTopicToc(),t.hookPlatformSetting(),$(".TIP, .NOTE, .IMPORTANT, .WARNING, .CAUTION").addClass("alert"),$(window).on("load",function(){setTimeout(function(){$("ul.contributors img").each(function(){if(!this.complete||this.fileSize<1||0==this.naturalWidth){var e=$(this);e.parent().parent().attr("hidden",!0)}})})}),$(".globalParamsHolder>a").click(function(){var e=$(this).parent();return"true"===e.attr("aria-expanded")?e.attr("aria-expanded","false"):e.attr("aria-expanded","true"),!1}),msDocs.data.useApiBrowserVersionPicker&&r(11).createPicker(),msDocs.functions.makeCodeBlocks()})},function(e,t,r){var n,o;n=[r(9)],o=function(e){"use strict";function t(e){var t=!1,r=$("<ol></ol>"),n=$(".doc-outline"),o=$("#main h2");return void 0!==e&&o.length<e?void n.hide():(o.each(function(){t=!0;var e=$(this).attr("id");void 0===e&&(e=$(this).text().toLowerCase().replace(/\s+/g,"_"),$(this).attr("id",e));var n,o=$("<li></li>"),i=$(this).find('span[class*="lang-"]');n=i.length>1?$("<a href='#"+e+"'>"+$(i[0]).text().replace(/</gi,"&lt;").replace(/>/gi,"&gt;")+"</a>"):$("<a href='#"+e+"'>"+$(this).text().replace(/</gi,"&lt;").replace(/>/gi,"&gt;")+"</a>"),o.append(n),r.append(o)}),void(t?(n.find("h3").show(),n.append(r)):n.hide()))}return{renderInTopicToc:t}}.apply(t,n),!(void 0!==o&&(e.exports=o))},function(e,t,r){var n,o;n=[],o=function(){"use strict";function e(){return $("#page-actions-content > .action-list")}function t(){return $(".op_single_selector")}function r(){return $(".op_multi_selector")}function n(e){return e.find("li > a")}function o(t){e().append(t)}function i(e,t,r,n,o){e.empty(),n||e.append($('<option value="">'+o+"</option>"));for(var i in t){var c=r(i,t[i]);c&&2===c.length&&e.append($('<option value="'+c[1]+'">'+c[0]+"</option>"))}}function c(){return $('<div class="'+l.azureSelectorContainer+'"></div>')}function s(e,t){var r=$("<div></div>"),n=$("<select></select>");return t&&r.append($("<label>"+t+"</label>")),r.append(n),e.append(r),n}function a(e){var t=$('<select id="branch-selector"></select>');return t.append($('<option value="">-- Select Branch --</option>')),e&&e.length&&e.forEach(function(e){t.append($('<option value="'+e+'">'+e+"</option>"))}),t}var l={linkNoHref:"nohref",tocNodeContainer:"toc-content",tocNodeLevelPrefix:"toc-level-",tocNodeExpander:"toc-expander",tocNodeCollapsed:"toc-collapsed",azureSelectorContainer:"azureselector"};return{cssClassNames:l,getSingleAzureSelectors:t,getDoubleAzureSelectors:r,getAzureSelectorAnchors:n,appendToActionList:o,populateDropdownOptions:i,createAzureSelectorsContainer:c,createAzureSelectorDropdown:s,createBranchSelectorDropdown:a}}.apply(t,n),!(void 0!==o&&(e.exports=o))},function(e,t,r){var n;n=function(){"use strict";function e(e){e.val($(e.find("option")[0]).val())}function t(t,r,n,o,i){if(t.length){t.change(function(){var e=t.val();n(e);try{localStorage.setItem(r,e)}catch(e){}});try{var c=localStorage.getItem(r)}catch(e){var c=null}c?(t.val(c),t.val()||(i?i(t):e(t))):i&&i(t),o&&o(t.val())}}function r(e){$('[class*="platform-"]').attr("hidden",!0),e&&$("."+e).attr("hidden",!1)}function n(){var e=$("#platform-selector");t(e,"platform",function(e){r(e)},function(e){e&&r(e)})}return{hookPlatformSetting:n}}.call(t,r,t,e),!(void 0!==n&&(e.exports=n))},function(e,t){t.createPicker=function(){var e=msDocs.functions.getParam("apiPlatform","meta"),t=document.querySelector("nav.toc"),r=document.querySelector(".filterHolder");$(r).empty();var n=document.createElement("div");t.appendChild(n),msDocs.functions.createApiBrowser({platform:e,theme:"reference",searchFieldContainer:r,resultsContainer:n,standalone:!1,searchDelay:300,onResultContent:function(e){var r=t.querySelector("ul[aria-treegrid]");null!==r&&(r.style.display=e?"none":"")}});var o=document.querySelector("#menu-nav");n=document.createElement("div"),o.insertBefore(n,o.firstChild.nextSibling),msDocs.functions.createApiBrowser({platform:e,theme:"reference",searchFieldContainer:o,resultsContainer:n,standalone:!1,searchDelay:300,onResultContent:function(e){e?document.documentElement.classList.add("mobile-api-browser-has-results"):document.documentElement.classList.remove("mobile-api-browser-has-results")}})}}])});
//# sourceMappingURL=5361f08955d2af75615d.conceptual.js.map