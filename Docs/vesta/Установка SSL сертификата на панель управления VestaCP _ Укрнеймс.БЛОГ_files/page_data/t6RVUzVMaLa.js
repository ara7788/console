if (self.CavalryLogger) { CavalryLogger.start_js(["Pl+Ed"]); }

__d('LinkshimAsyncLink',['$','AsyncSignal','DOM','UserAgent_DEPRECATED','LinkshimHandlerConfig'],(function a(b,c,d,e,f,g){var h={swap:function i(j,k){var l=c('UserAgent_DEPRECATED').ie()<=8;if(l){var m=c('DOM').create('wbr',{},null);c('DOM').appendContent(j,m);}j.href=k;if(l)c('DOM').remove(m);},referrer_log:function i(j,k,l){var m=c('$')('meta_referrer');m.content=c('LinkshimHandlerConfig').switched_meta_referrer_policy;h.swap(j,k);setTimeout(function(){m.content=c('LinkshimHandlerConfig').default_meta_referrer_policy;new (c('AsyncSignal'))(l,{}).send();},100);}};f.exports=h;}),null);
__d('legacy:dom-asynclinkshim',['LinkshimAsyncLink'],(function a(b,c,d,e,f,g){b.LinkshimAsyncLink=c('LinkshimAsyncLink');}),3);
__d('AttachmentRelatedShareConstants',[],(function a(b,c,d,e,f,g){var h={ARTICLE_CLICK:'article_click',VIDEO_CLICK:'video_click',FBVIDEO_CLICK:'fbvideo_click',FBVIDEO_VIEW:'fbvideo_view',GAME_CLICK:'game_click',EVENT_DELAY:1000,HIDE_DELAY:100,PHOTO_CLICK:'photo_click',EVENT_JOIN:'event_join',PRODUCT_CLICK:'product_click',MAP_CLICK:'map_click',ACTION_BUTTON_CLICK:'action_button_click'};f.exports=h;}),null);
__d("XPubcontentInlinePhotoPivotsEventsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/inline_photo_pivots_chaining\/events\/",{});}),null);
__d('tidyEvent',['Run'],(function a(b,c,d,e,f,g){var h=[];function i(){while(h.length){var l=h.shift();l&&l.remove?l.remove():l.unsubscribe();}}function j(l){var m;function n(){if(!m)return;m.apply(l,arguments);m=null;l=null;}if(l.remove){m=l.remove;l.remove=n;}else{m=l.unsubscribe;l.unsubscribe=n;}return l;}function k(l){if(!h.length)c('Run').onLeave(i);if(Array.isArray(l)){for(var m=0;m<l.length;m++)h.push(j(l[m]));}else h.push(j(l));return l;}f.exports=k;}),null);
__d('EntstreamAttachmentRelatedShare',['csx','cx','Arbiter','AsyncRequest','AttachmentRelatedShareConstants','CSS','DOM','Event','XPubcontentInlinePhotoPivotsEventsController','ge','getOrCreateDOMID','tidyEvent'],(function a(b,c,d,e,f,g,h,i){var j=2,k=3,l={loadRelatedAttachment:function m(n,o,p){var q=null;if(typeof n==='string'){q=c('ge')(n);}else q=n;if(!q)return;var r=c('Event').listen(q,'click',function(){r.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').ARTICLE_CLICK,{attachment:q,global_share_id:o,is_right_click:false,share_id:p});}),s=c('Event').listen(q,'mousedown',function(event){if(event.which===k||event.button===j){s.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').ARTICLE_CLICK,{attachment:q,global_share_id:o,is_right_click:true});}});},loadInlineStoryPivotAttachment:function m(n,o){var p=c('ge')(n);if(!p)return;var q=c('Event').listen(p,'click',function(){q.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').PHOTO_CLICK,{attachment:p,storyid:o});});},loadRelatedGameAttachment:function m(n,o){var p=null;if(typeof n==='string'){p=c('ge')(n);}else p=n;if(!p)return;c('tidyEvent')(c('Event').listen(p,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').GAME_CLICK,{attachment:p,global_share_id:o});}));c('tidyEvent')(c('Event').listen(p,'mousedown',function(event){if(event.which===k||event.button===j)c('Arbiter').inform(c('AttachmentRelatedShareConstants').GAME_CLICK,{attachment:p,global_share_id:o});}));},loadRelatedLSCVideoAttachment:function m(n,o){var p=null;if(typeof n==='string'){p=c('ge')(n);}else p=n;if(!p)return;var q=c('Event').listen(p,'click',function(){q.remove();c('Arbiter').inform(c('AttachmentRelatedShareConstants').VIDEO_CLICK,{attachment:p,global_share_id:o});});},loadRelatedLSCInlineVideoAttachment:function m(n,o){var p=null;if(typeof n==='string'){p=c('ge')(n);}else p=n;if(!p)return;c('Event').listen(p,'click',function(){var q="^div._4-u2",r="_1d8v",s=c('DOM').scry(p,q),t=s.length===1?s[0]:null,u=t.parentNode,v=u.previousSibling;while(!v){u=u.parentNode;v=u.previousSibling;}if(!c('CSS').hasClass(v,r)){var w=c('DOM').create('div',{className:r}),x=c('DOM').insertBefore(t.parentNode,w),y=x.length>=1?x[0]:null;}else y=v;var z=c('getOrCreateDOMID')(y);new (c('AsyncRequest'))().setURI('/ajax/flash/expand_inline.php').setData({share_id:o,target_div:z,max_width:470,max_height:264,replace_target_div:true}).setMethod('GET').setReadOnly(true).setRelativeTo(p.parentNode).send();});},loadRelatedEventsPivotAttachment:function m(n,o){var p=null;if(typeof n==='string'){p=c('ge')(n);}else p=n;if(!p)return;c('tidyEvent')(c('Event').listen(p,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').EVENT_JOIN,{attachment:p,event_id:o});}));},loadRelatedProductAttachment:function m(n,o){var p=null;if(typeof n==='string'){p=c('ge')(n);}else p=n;if(!p)return;c('tidyEvent')(c('Event').listen(p,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').PRODUCT_CLICK,{attachment:p,product_id:o});}));},loadMapAttachment:function m(n,o,p){var q=typeof n==='string'?c('ge')(n):n;if(!q)return;var r=typeof o==='string'?c('ge')(o):o;if(!r)return;c('tidyEvent')(c('Event').listen(q,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').MAP_CLICK,{attachment:r,story_id:p});}));},loadMapAttachmentActionButton:function m(n,o){var p=typeof n==='string'?c('ge')(n):n;if(!p)return;c('tidyEvent')(c('Event').listen(p,'click',function(){c('Arbiter').inform(c('AttachmentRelatedShareConstants').ACTION_BUTTON_CLICK,{button:p,story_id:o});}));},closeButton:function m(n,o){c('Event').listen(n,'click',function(){c('DOM').remove(o);});},closeButtonPhotoPivots:function m(n,o,p,q){c('Event').listen(n,'click',function(){var r=c('XPubcontentInlinePhotoPivotsEventsController').getURIBuilder(),s={story_id:p,search_query_type:q,event:'hide'};new (c('AsyncRequest'))().setMethod('POST').setURI(r.getURI()).setData(s).send();c('DOM').remove(o);});},seeAllLinkPhotoPivots:function m(n,o,p){c('Event').listen(n,'click',function(){var q=c('XPubcontentInlinePhotoPivotsEventsController').getURIBuilder(),r={story_id:o,search_query_type:p,event:'see_all'};new (c('AsyncRequest'))().setMethod('POST').setURI(q.getURI()).setData(r).send();});},removeOldSuggestions:function m(n){var o=c('ge')(n);if(!o)return;var p=c('DOM').scry(o.parentNode,"._5d73");for(var q=1;q<p.length;q++)c('DOM').remove(p[q]);setTimeout(function(){c('CSS').show(p[0]);},1000);},showHiddenSuggestions:function m(n){var o=c('Event').listen(n,'click',function(){o.remove();var p="^._1ui8",q=c('DOM').scry(n,p);if(!q)return;c('CSS').hide(q[0]);var r=q[0].previousSibling;while(r){c('CSS').show(r);r=r.previousSibling;}});}};f.exports=l;}),null);
__d('collectDataAttributes',['DataAttributeUtils','getContextualParent'],(function a(b,c,d,e,f,g){var h='normal';function i(j,k,l){var m={},n=[],o=k.length,p;for(p=0;p<o;++p){m[k[p]]={};n.push('data-'+k[p]);}if(l){m[h]={};for(p=0;p<(l||[]).length;++p)n.push(l[p]);}var q={tn:'',"tn-debug":','};while(j){if(j.getAttribute)for(p=0;p<n.length;++p){var r=n[p],s=c('DataAttributeUtils').getDataAttribute(j,r);if(s){if(p>=o){if(m[h][r]===undefined)m[h][r]=s;continue;}var t=JSON.parse(s);for(var u in t)if(q[u]!==undefined){if(m[k[p]][u]===undefined)m[k[p]][u]=[];m[k[p]][u].push(t[u]);}else if(m[k[p]][u]===undefined)m[k[p]][u]=t[u];}}j=c('getContextualParent')(j);}for(var v in m)for(var w in q)if(m[v][w]!==undefined)m[v][w]=m[v][w].join(q[w]);return m;}f.exports=i;}),null);
__d('FeedTrackingAsync',['Arbiter','Run','collectDataAttributes'],(function a(b,c,d,e,f,g){var h;f.exports.init=function(){if(h)return;h=c('Arbiter').subscribe('AsyncRequest/send',function(i,j){var k=j.request,l=k.getRelativeTo();if(l){var m=k.getData(),n=c('collectDataAttributes')(l,['ft']);if(n.ft&&Object.keys(n.ft).length)Object.assign(m,n);}});c('Run').onLeave(function(){h.unsubscribe();h=null;});};}),null);
__d('legacy:onload-action',['PageHooks'],(function a(b,c,d,e,f,g){b._domreadyHook=c('PageHooks')._domreadyHook;b._onloadHook=c('PageHooks')._onloadHook;b.runHook=c('PageHooks').runHook;b.runHooks=c('PageHooks').runHooks;b.keep_window_set_as_loaded=c('PageHooks').keepWindowSetAsLoaded;}),3);
__d('AsyncFormRequestUtils',['Arbiter'],(function a(b,c,d,e,f,g){var h={subscribe:function i(j,k,l){c('Arbiter').subscribe('AsyncRequest/'+k,function(m,n){var o=n.request.relativeTo;if(o&&o===j)l(n);});}};f.exports=h;}),null);
__d('PluginTabLoadMore',['CSS','Event'],(function a(b,c,d,e,f,g){'use strict';var h={noMoreContent:function i(){c('Event').fire(this.root,'noMoreContent');c('CSS').hide(this.spinner);},setCursor:function i(j){c('Event').fire(this.root,'setCursor',j);},init:function i(j,k){this.root=j;this.spinner=k;}};f.exports=h;}),null);
__d("EmbeddedPostPluginActionTypes",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({CLICK:"click"});}),null);
__d("EmbeddedPostPluginActions",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({EMBEDDED_POSTS_COMMENT:"embedded_post_comment",EMBEDDED_POSTS_LIKE:"embedded_post_like",EMBEDDED_POSTS_SHARE:"embedded_post_share",EMBEDDED_POSTS_UNLIKE:"embedded_post_unlike"});}),null);
__d("XPostPluginLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/platform\/plugin\/post\/logging\/",{});}),null);
__d('PluginFeedFooterActionLogger',['AsyncRequest','DOM','EmbeddedPostPluginActions','EmbeddedPostPluginActionTypes','Event','XPostPluginLoggingController'],(function a(b,c,d,e,f,g){var h={initializeClickLoggers:function i(j,k,l,m,n,o,p,q,r){var s=function t(u,v){try{var w=c('DOM').find(j,'.'+u);c('Event').listen(w,'click',function(x){new (c('AsyncRequest'))().setURI(c('XPostPluginLoggingController').getURIBuilder().getURI()).setData({action:v,action_type:c('EmbeddedPostPluginActionTypes').CLICK,source:o,story_token:p,referer_url:q,is_sdk:r}).send();});}catch(x){}};s(k,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_LIKE);s(l,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_UNLIKE);s(m,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_COMMENT);s(n,c('EmbeddedPostPluginActions').EMBEDDED_POSTS_SHARE);}};f.exports=h;}),null);
__d('randomInt',['invariant'],(function a(b,c,d,e,f,g,h){function i(j,k){var l=arguments.length;l>0&&l<=2||h(0);if(l===1){k=j;j=0;}k=k;k>j||h(0);var m=this.random||Math.random;return Math.floor(j+m()*(k-j));}f.exports=i;}),null);
__d('ClientIDs',['randomInt'],(function a(b,c,d,e,f,g){var h={},i={getNewClientID:function j(){var k=Date.now(),l=k+':'+(c('randomInt')(0,4294967295)+1);h[l]=true;return l;},isExistingClientID:function j(k){return !!h[k];}};f.exports=i;}),null);
__d("FBFeedLocations",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({NEWSFEED:1,GROUP:2,GROUP_PERMALINK:3,COMMUNITY:4,PERMALINK:5,SHARE_OVERLAY:6,PERMALINK_STREAM:7,GROUP_PINNED:8,FRIEND_LIST:9,TIMELINE:10,HASHTAG_FEED:11,TOPIC_FEED:12,PAGE:13,NOTIFICATION_FEED:14,GROUP_REPORTED:15,GROUP_PENDING:16,PAGES_FEED_IN_PAGES_MANAGER:17,TICKER_CLASSIC:18,PAGES_SUGGESTED_FEED_IN_PAGES_MANAGER:19,SEARCH:20,GROUP_SEARCH:21,NO_ATTACHMENT:22,EMBED:23,EMBED_FEED:24,ATTACHMENT_PREVIEW:25,STORIES_TO_SHARE:26,PROMPT_PERMALINK:27,TREND_HOVERCARD:28,OPEN_GRAPH_PREVIEW:30,HOTPOST_IN_PAGES_FEED:31,SCHEDULED_POSTS:32,TIMELINE_NOTES:33,PAGE_INSIGHTS:34,COMMENT_ATTACHMENT:35,PAGE_TIMELINE:36,GOODWILL_THROWBACK_PERMALINK:37,LIKE_CONFIRM:39,GOODWILL_THROWBACK_PROMOTION:40,BROWSE_CONSOLE:42,GROUP_FOR_SALE_COMPACT:43,ENTITY_FEED:44,GROUP_FOR_SALE_DISCUSSION:45,PAGES_CONTENT_TAB_PREVIEW:46,GOODWILL_THROWBACK_SHARE:47,TIMELINE_VIDEO_SHARES:48,EVENT:49,PAGE_PLUGIN:50,SRT:51,PAGES_CONTENT_TAB_INSIGHTS:52,ADS_PE_CONTENT_TAB_INSIGHTS:53,PAGE_ACTIVITY_FEED:54,VIDEO_CHANNEL:55,POST_TO_PAGE:56,GROUPS_GSYM_HOVERCARD:57,GROUP_POST_TOPIC_FEED:58,FEED_SURVEY:59,PAGES_MODERATION:60,SAVED_DASHBOARD:61,PULSE_SEARCH:62,GROUP_NUX:63,GROUP_NUX_POST_VIEW:64,EVENT_PERMALINK:65,FUNDRAISER_PAGE:66,EXPLORE_FEED:67,CRT:68,REVIEWS_FEED:69,VIDEO_HOME_CHANNEL:70,NEWS:71,TIMELINE_FRIENDSHIP:72,SAVED_REMINDERS:73,PSYM:74,ADMIN_FEED:75,CAMPFIRE_NOTE:76,PAGES_CONTEXT_CARD:77,ACTIVITY_LOG:78,WALL_POST_REPORT:79,TIMELINE_BREAKUP:80,POLITICIANS_FEED:81,PRODUCT_DETAILS:82,SPORTS_PLAY_FEED:83,GROUP_TOP_STORIES:84,PAGE_TIMELINE_PERMALINK:86,OFFERS_WALLET:87,INSTREAM_VIDEO_IN_LIVE:88,SPOTLIGHT:89,SEARCH_DERP:90,SOCIAL_BALLOT:91,GROUP_SUGGESTIONS_WITH_STORY:92,SOCIAL_BALLOT_PERMALINK:93,LOCAL_SERP:94,FUNDRAISER_SELF_DONATION_FEED:95,CONVERSATION_NUB:97,GROUP_TOP_SALE_STORIES:98,GROUP_LEARNING_COURSE_UNIT_FEED:99,SUPPORT_INBOX_READ_TIME_BLOCK:100,PAGE_POSTS_CARD:101,CRISIS_POST:102,SUPPORT_INBOX_GROUP_RESPONSIBLE:103,PAGE_POST_DIALOG:104,CRISIS_DIALOG_POST:105,PAGE_LIVE_VIDEOS_CARD:106,PAGE_POSTS_CARD_COMPACT:107,GROUP_MEMBER_BIO_FEED:108,LIVE_COMMENT_ATTACHMENT:109,GROUP_COMPOSER:110,GROUP_INBOX_GROUP:111,GROUP_INBOX_AGGREGATED:112,ENDORSEMENTS:113,EVENTS_DASHBOARD:114,CURATED_COLLECTIONS_PAGE:115,OYML:116,COLLEGE_HOMEPAGE:117,GROUP_LIVE_VIDEOS_CARD:118,COLLEGE_HIGHLIGHTS:119,VIDEO_PERMALINK:120,JOB_CAROUSEL_NETEGO:121,TOPIC_PAGE:122,USER_SCHEDULED_POSTS:123,GOODWILL_THROWBACK_ATTACHMENT_PREVIEW:124,INSTREAM_VIDEO_IN_WASLIVE:125,INSTREAM_VIDEO_IN_NONLIVE:126,SIGNAL_APP:127,ALBUM_FEED:128,TOP_MARKETPLACE_STORIES:129,CE_PII_STRIPPED_FEED:130,TAHOE:131,SAVE_COUNT_DIALOG:132,GROUP_POST_TAG_FEED:133,GOV_DIGEST:134,GROUP_SCHEDULED:135,GAMEROOM_FEED:136,WORKPLACE_HUB_PREVIEW:137,BRANDED_CONTENT_TRENDING_POSTS:138,GROUP_ANNOUNCEMENTS:139,GROUP_ANNOUNCEMENTS_FEED:140,EXTERN_CE_PII_STRIPPED_FEED:141,CRISIS_HUB_DESKTOP:142,GROUP_DRAFT_POSTS:143,TRENDING_ISSUES:144});}),null);
__d('PluginFeedLikeButton',['Arbiter','AsyncFormRequestUtils','ClientIDs','CSS','DOM','DOMEventListener','FBFeedLocations','FormSubmit','Keys','PluginOptin','URI'],(function a(b,c,d,e,f,g){window.resetConfirmStoryLike=function(i){c('CSS').show(c('DOM').find(document,'#likeStory_'+i));c('DOM').remove(c('DOM').find(document,'#confirmStory_'+i));};var h={addClientId:function i(j){j.setAttribute('value',c('ClientIDs').getNewClientID());},loggedOutLikeButton:function i(j,k,l){var m='';if(k===c('FBFeedLocations').EMBED){m='post';}else if(k===c('FBFeedLocations').PAGE_PLUGIN){m='page';}else throw new Error('Invalid FBFeedLocation type.');var n=new (c('PluginOptin'))(m).addReturnParams({act:'like_'+j});c('DOMEventListener').add(l,'click',n.start.bind(n));},init:function i(j,k,l,m,n){var o=function r(s){if(s.type==='keypress')if(s.keyCode===c('Keys').RETURN||s.keyCode===c('Keys').SPACE){c('FormSubmit').send(n);}else return;c('FormSubmit').send(n);};c('DOMEventListener').add(k,'click',o);c('DOMEventListener').add(l,'click',o);c('DOMEventListener').add(k,'keypress',o);c('DOMEventListener').add(l,'keypress',o);var p=m.getAttribute('value')==='1';c('AsyncFormRequestUtils').subscribe(n,'send',function(r){var s=m.getAttribute('value')==='1';c('CSS').conditionShow(l,s);c('CSS').conditionShow(k,!s);c('Arbiter').inform('embeddedUfiToggle',{isLike:s,storyToken:j});m.setAttribute('value',s?'':'1');});c('AsyncFormRequestUtils').subscribe(n,'response',function(r){var s=r.response.payload;if(s&&!s.success){var t=s.isLike;c('CSS').conditionShow(k,t);c('CSS').conditionShow(l,!t);c('Arbiter').inform('revertLike',{isLike:t,storyToken:j});m.setAttribute('value',t?'1':'');}});var q=new (c('URI'))(window.location.search).getQueryData();if(p&&q.act==='like_'+j)c('FormSubmit').send(n);}};f.exports=h;}),null);
__d("cancelAnimationFramePolyfill",[],(function a(b,c,d,e,f,g){var h=b.cancelAnimationFrame&&b.cancelAnimationFrame.nativeBackup||b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.oCancelAnimationFrame||b.msCancelAnimationFrame||b.clearTimeout;f.exports=h;}),null);
__d('cancelAnimationFrame',['TimerStorage','TimeSliceReferenceCounting','cancelAnimationFramePolyfill'],(function a(b,c,d,e,f,g){var h=c('TimerStorage').ANIMATION_FRAME;f.exports=function(){for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];c('TimerStorage').unset(h,j[0]);var l=h+j[0];if(j[0]!=null&&c('TimeSliceReferenceCounting').isValidCancellationToken(l))c('TimeSliceReferenceCounting').cancelTimeSlice(l);return Function.prototype.apply.call(c('cancelAnimationFramePolyfill'),b,j);};}),18);
__d('clearInterval',['TimerStorage','TimeSliceReferenceCounting'],(function a(b,c,d,e,f,g){var h=b.clearTimeout.nativeBackup||b.clearTimeout;f.exports=function(){for(var i=arguments.length,j=Array(i),k=0;k<i;k++)j[k]=arguments[k];var l=j[0];c('TimerStorage').unset(c('TimerStorage').INTERVAL,l);if(l!=null&&c('TimeSliceReferenceCounting').isValidCancellationToken(l))c('TimeSliceReferenceCounting').cancelTimeSlice(l);return Function.prototype.apply.call(h,b,j);};}),18);
__d('setInterval',['TimerStorage','setIntervalAcrossTransitions'],(function a(b,c,d,e,f,g){f.exports=function(){for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];var k=c('setIntervalAcrossTransitions').apply(b,i);c('TimerStorage').set(c('TimerStorage').INTERVAL,k);return k;};}),18);