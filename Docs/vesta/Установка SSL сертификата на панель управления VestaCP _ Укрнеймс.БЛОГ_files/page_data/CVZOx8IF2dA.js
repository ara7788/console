if (self.CavalryLogger) { CavalryLogger.start_js(["dAmQd"]); }

__d('ExternalTrackingTag',['AsyncSignal','Event','TrackingPixel'],(function a(b,c,d,e,f,g){var h={listenForElementClick:function i(j,k,l,m,n){c('Event').listen(j,'click',function(){h.sendRequest(k,l,m,n);});},sendRequest:function i(j,k,l,m){if(!j)return;new (c('AsyncSignal'))('/ads/external_tracking_tag/',{href:j,tracking_tag_id:k,adgroup_id:l,ad_id:m}).send();c('TrackingPixel').loadWithNoReferrer(j);}};f.exports=h;}),null);
__d('FBLynxWrapper',['URI','isFacebookURI','isLinkshimURI'],(function a(b,c,d,e,f,g){'use strict';var h={SUBDOMAIN:'l',SUBDOMAIN_M:'lm',PATH:'/',URL_PARAM:'u',ENC_PARAM:'e',isLynxLink:function i(j){if(j.getAttribute('data-lynx-async-dest'))return true;if(j.getAttribute('data-lynx-uri'))return true;if(c('isLinkshimURI')(new (c('URI'))(j.href)))return true;return false;}};f.exports=h;}),null);
__d('LitestandColumnManager',['Arbiter','BlueBar','Event','NavigationMessage','Run','SubscriptionsHandler','clamp','getScrollPosition'],(function a(b,c,d,e,f,g){'use strict';var h=0,i=null;function j(){if(i)return;i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,function(){m(0);k();}),c('Event').listen(window,'resize',function(){if(!c('BlueBar').hasFixedBlueBar()){m(0);k();}}),c('Event').listen(window,'scroll',function(){if(!l())k();}));c('Run').onLeave(function(){return i&&i.release();});}function k(){i&&i.release();i=null;}function l(){if(h<=0)return false;m(c('clamp')(c('getScrollPosition')(window).y,0,h));return h>0;}function m(o){h=o;}var n={adjustVerticalWindowPosition:function o(p,q){j();m(q);window.scrollTo(p.x,p.y+h);}};f.exports=n;}),null);
__d('LitestandStream',['csx','invariant','Arbiter','CSS','EventEmitter','LitestandColumnManager','Run','getScrollPosition','nullthrows'],(function a(b,c,d,e,f,g,h,i){var j=void 0,k=void 0,l=void 0,m=void 0,n=new (c('EventEmitter'))(),o={init:function p(q,r,s,t){j=s;l=q;k=t;if(!m)m=c('Arbiter').subscribe('ufi/didUpdate',function(u,v){if(v.offsetY)c('LitestandColumnManager').adjustVerticalWindowPosition(c('getScrollPosition')(window),v.offsetY);});c('Run').onLeave(function(){m&&m.unsubscribe();m=null;n.removeAllListeners('ready');l=null;});n.emit('ready');},getStoriesSelector:function p(){return "._5jmm";},getStreamRoot:function p(){return l;},getSectionID:function p(){return j;},getStoryID:function p(){return k;},isStory:function p(q){return c('CSS').matchesSelector(q,"._5jmm");},getFeedStreamID:function p(){return parseInt(c('nullthrows')(l).id.split('feed_stream_')[1],16)%1e+08;},isReady:function p(){return !!l;},addReadyListener:function p(q){o.isReady()||i(0);return n.once('ready',q);}};f.exports=o;}),null);
__d('FeedAdsClickLogger',['Arbiter','AsyncRequest','BanzaiODS','DataAttributeUtils','DOM','ExternalTrackingTag','FBLynxWrapper','LitestandMessages','LitestandStream','Parent','SLConfig','TrackingNodes','URI','collectDataAttributes','isFacebookURI','isLinkshimURI','ge'],(function a(b,c,d,e,f,g){var h='ssinfeed',i={},j=false,k=[],l,m=false;function n(){'use strict';}n.prototype.init=function(p){'use strict';l=c('SLConfig').gk.sl_replace_s;c('Arbiter').subscribe('ClickRefAction/new',this.onNewUserAction.bind(this));m=p.see_more_logging_enabled;if(p.append_tracking_data_to_links){this.appendTrackingDataToLinks();c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,this.appendTrackingDataToLinks.bind(this));c('Arbiter').subscribe('FeedAdsClickLogger/refreshTrackingData',this.appendTrackingDataToLinks.bind(this),c('Arbiter').SUBSCRIBE_NEW);}};n.prototype.getStories=function(){'use strict';var p=c('LitestandStream').getStreamRoot();if(p){return c('DOM').scry(p,c('LitestandStream').getStoriesSelector());}else{var q=c('ge')('home_stream');if(q)return c('DOM').scry(q,'.uiStreamStory');}return [];};n.prototype.appendTrackingDataToLinks=function(){'use strict';var p=this.getStories();for(var q=0;q<p.length;q++){var r=p[q];if(r in k)continue;var s=c('DataAttributeUtils').getDataFt(r);if(!s||s.indexOf('ei')===-1&&s.indexOf('mei')===-1)continue;var t=c('DOM').scry(r,'a');for(var u=0;u<t.length;u++){var v=t[u];if(v.getAttribute('ajaxify')!=null)continue;if(v.getAttribute('rel')!=null)continue;var w=v.getAttribute('href');if(!w||w.charAt(0)==='#')continue;var x=new (c('URI'))(v);if(c('isFacebookURI')(x)===false)continue;if(c('isLinkshimURI')(x)||c('FBLynxWrapper').isLynxLink(v))continue;if(x.isPossiblySignedURI()===true)continue;if(l&&(x.getPath()==='/ads/about'||x.getPath()==='/about/ads'))continue;v.setAttribute('href',o(v).toString());v.setAttribute('onmousedown',"this.href = this.href.replace('__md__=0', '__md__=1');");}k.push(r);}};n.prototype.getHref=function(p){'use strict';return p.getAttribute&&(p.getAttribute('ajaxify')||p.getAttribute('data-endpoint'))||p.action||p.href;};n.prototype.sendLogRequest=function(p,q){'use strict';var r=p.ei||p.ai;if(!r&&p.mei)r=p.mf_story_key;if(p!==null&&typeof r==='string'){var s=false;if(p.tn){var t=c('TrackingNodes').parseTrackingNodeString(p.tn);for(var u=0;u<t.length;u++){var v=t[u][0];switch(v){case c('TrackingNodes').types.LIKE_LINK:case c('TrackingNodes').types.UNLIKE_LINK:case c('TrackingNodes').types.COMMENT:case c('TrackingNodes').types.COMMENT_LINK:case c('TrackingNodes').types.ADD_COMMENT_BOX:case c('TrackingNodes').types.MULTI_ATTACHMENT_VIDEO:return;case c('TrackingNodes').types.XBUTTON:case c('TrackingNodes').types.HIDE_LINK:case c('TrackingNodes').types.REPORT_SPAM_LINK:case c('TrackingNodes').types.HIDE_ALL_LINK:case c('TrackingNodes').types.DROPDOWN_BUTTON:case c('TrackingNodes').types.UNHIDE_LINK:return;case c('TrackingNodes').types.RELATED_SHARE_ARTICLE:case c('TrackingNodes').types.RELATED_SHARE_VIDEO:return;case c('TrackingNodes').types.TRANSLATION:return;case c('TrackingNodes').types.ATTACHMENT:case c('TrackingNodes').types.USER_MESSAGE:s=true;break;}}}var w=Date.now(),x=500;p.duplicate_click=!!i[r]&&w-i[r]<x;i[r]=w;var y=new (c('AsyncRequest'))('/ajax/ssinfeed/end/').setData(p).setAllowCrossPageTransition(true).setMethod('POST');y.send();var z=p.href;if(c('isLinkshimURI')(new (c('URI'))(z))&&new (c('URI'))(z).getQueryData())z=new (c('URI'))(z).getQueryData().u;if(s&&!p.duplicate_click&&q!==null&&q.url&&z&&c('isFacebookURI')(new (c('URI'))(z))===false){c('ExternalTrackingTag').sendRequest(q.url,q.tag_id,q.adgroup_id);c('BanzaiODS').bumpEntityKey('external_tracking_tags','request_sent');}}};n.prototype.onNewUserAction=function(p,q){'use strict';if(!q.node)return;var r=this.getHref(q.node),s=c('Parent').byTag(q.node,'input')||c('Parent').byTag(q.node,'button');if(!r&&s&&s.type=='submit'&&s.getAttribute&&c('DataAttributeUtils').getDataFt(s))r='#';if(q.event&&q.node.tagName==='A'&&q.event.defaultPrevented&&m)r='#';var t,u;if(r&&q.event&&(q.event.type==='click'||q.event.type==='contextmenu')){t=c('collectDataAttributes')(q.node,['ft']);t.ft.href=r;t.ft.mouse_type=q.event.type;u=c('collectDataAttributes')(q.node,['external-tracking-tags']);this.sendLogRequest(t.ft,u['external-tracking-tags']);}};function o(p){var q=new (c('URI'))(p.href),r=c('collectDataAttributes')(p,['ft']).ft,s=q.getQueryData();s.ft=r;s.__md__=0;q.setQueryData(s);return q;}f.exports={init:function p(q){if(j===false){new n().init(q);j=true;}},buildURL:o};}),null);
__d('SLPerfTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:SLPerfLoggerConfig',this.$SLPerfTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:SLPerfLoggerConfig',this.$SLPerfTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$SLPerfTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$SLPerfTypedLogger1=babelHelpers['extends']({},this.$SLPerfTypedLogger1,j);return this;};h.prototype.setCount=function(j){this.$SLPerfTypedLogger1.count=j;return this;};h.prototype.setDurationMs=function(j){this.$SLPerfTypedLogger1.duration_ms=j;return this;};h.prototype.setEvent=function(j){this.$SLPerfTypedLogger1.event=j;return this;};var i={count:true,duration_ms:true,event:true};f.exports=h;}),null);
__d('SLUtils',['csx','cx','Arbiter','DOM','Event','FeedAdsClickLogger','LitestandMessages','LitestandStream','Map','SLConfig','SLPerfTypedLogger','URI','clearTimeout','curry','cxodecode','goURI','joinClasses','setIntervalAcrossTransitions','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=false;function k(ra,sa){var ta;if(j)return;j=true;if(!c('SLConfig').gk.s_link_utils)return;if(ka()){ma().setEvent('init').log();oa('init_timer');}l();if(c('SLConfig').gk.sl_replace_about_link)q(function(ua,va){return r(ua,va);});if(c('SLConfig').gk.sl_replace_s)(function(){da(ra);var ua=sa.map(function(va){return {nonce:c('cxodecode')(va.nonce),className:c('cxodecode')(va.className)};});q(function(va,wa){ua.forEach(function(xa){var ya=c('DOM').scry(va,xa.nonce);ya.forEach(function(za){while(za.firstChild)za.removeChild(za.firstChild);za.className=c('joinClasses')(za.className,xa.className);});});});})();if(c('SLConfig').gk.sl_replace_subtitle){ga();q(function(ua,va){y(ua,va);z(va);});c('setIntervalAcrossTransitions')(aa,c('SLConfig').sv.interval);}n();if(ka())ma().setEvent('init_duration').setDurationMs(pa('init_timer')).log();}function l(){c('Arbiter').subscribe(c('LitestandMessages').STORIES_INSERTED,n);c('Arbiter').subscribe('FeedAdsClickLogger/refreshTrackingData',n,c('Arbiter').SUBSCRIBE_NEW);}var m=null;function n(){if(ka())oa('hsa_timer');c('clearTimeout')(m);m=null;var ra=[],sa=u(),ta=ja(),ua=false;ta.forEach(function(va){if(!va.id)return;if(sa.has(va.id))return;if(!x(va,va.id)){ua=true;return;}sa.set(va.id,va);ra.push([va,va.id]);});if(ua){m=c('setTimeoutAcrossTransitions')(n,c('SLConfig').sv.sl_content_waiting_delay);if(ka())ma().setEvent('hsa_waiting_for_content').log();}if(ka())ma().setEvent('hsa_stories_added').setCount(ra.length).log();if(ra.length===0)return;ra.forEach(function(va){var wa=va[0],xa=va[1];return p().forEach(function(ya){return ya(wa,xa);});});if(ka())ma().setEvent('hsa_duration').setDurationMs(pa('hsa_timer')).log();}var o=[];function p(){return o;}function q(ra){o.push(ra);}function r(ra,sa){var ta=x(ra,sa);if(!ta){if(ka())ma().setEvent('usl_real_subtitle_missing').log();return;}var ua=c('DOM').scry(ta,'a'),va=ua.filter(function(wa){var xa=new (c('URI'))(wa.href).getPath();return xa==='/ads/about'||xa==='/about/ads';});if(ka())ma().setEvent('usl_links_updated').setCount(va.length).log();va.forEach(function(wa){var xa=c('FeedAdsClickLogger').buildURL(wa);c('Event').listen(wa,'click',c('curry')(s,xa));wa.href='#';});}function s(ra,sa){c('goURI')(ra.toString().replace('__md__=0','__md__=1'));c('Event').stop(sa);}var t=new (c('Map'))();function u(){return t;}var v=new (c('Map'))(),w=new (c('Map'))();function x(ra,sa){var ta=null;if(v.has(sa)){ta=v.get(sa);}else ta=ra;var ua=c('DOM').scry(ta,"._5pcp");if(ua.length===0){return null;}else return ua[0];}function y(ra,sa){if(v.has(sa)||w.has(sa))return;var ta=fa();if(!ta){if(ka())ma().setEvent('es_subtitle_container_missing').log();return;}var ua=c('DOM').scry(ra,"._5pcp");if(ka())ma().setEvent('es_subtitle_count').setCount(ua.length).log();if(ua.length===0)return;var va=ua[0],wa=va.parentNode;if(!va||!wa)return;var xa=ba();va.parentNode.replaceChild(xa,va);var ya=ca(va);ta.appendChild(ya);v.set(sa,ya);w.set(sa,xa);}function z(ra){if(la())oa('usp_timer');var sa=ia();if(!sa){if(ka())ma().setEvent('usp_feed_root_missing').log();return;}var ta=w.get(ra);if(!ta){if(ka())ma().setEvent('usp_fake_missing').log();return;}var ua=v.get(ra);if(!ua){if(ka())ma().setEvent('usp_real_missing').log();return;}var va=sa.getBoundingClientRect(),wa=ta.getBoundingClientRect(),xa=wa.top!==0&&wa.left!==0;ua.style.display=xa?'initial':'none';ua.style.top=wa.top-va.top+'px';ua.style.left=wa.left-va.left+'px';if(la())ma().setEvent('usp_duration').setDurationMs(pa('usp_timer')).log();}function aa(){if(la())oa('eausp_duration');ha();var ra=u();ra.forEach(function(sa,ta){y(sa,ta);z(ta);});if(la())ma().setEvent('eausp_duration').setDurationMs(pa('eausp_duration')).setCount(ra.size).log();}function ba(){return c('DOM').create('div',{'class':"_4kgx"});}function ca(ra){return c('DOM').create('div',{style:'position: absolute; z-index: 1;'},ra);}function da(ra){var sa=document.createElement('style');sa.type='text/css';sa.textContent=c('cxodecode')(ra);document.getElementsByTagName('head')[0].appendChild(sa);}var ea=null;function fa(){return ea;}function ga(){if(ea)return;var ra=ia();ea=c('DOM').create('div',{style:'position: relative;'});ra.insertBefore(ea,ra.firstChild);}function ha(){if(!ea)return;var ra=ia();if(ea.parentNode===ra)return;c('DOM').remove(ea);ra.insertBefore(ea,ra.firstChild);}function ia(){return c('LitestandStream').getStreamRoot()||document.body;}function ja(){return c('DOM').scry(ia(),"._5pat");}function ka(){return !!c('SLConfig').gk.sl_perf_logging;}function la(){return !!c('SLConfig').gk.sl_perf_logging_heavy;}function ma(){return new (c('SLPerfTypedLogger'))();}var na=new (c('Map'))();function oa(ra){na.set(ra,Date.now());}function pa(ra){var sa=na.get(ra);return sa==null?-1:Date.now()-sa;}var qa={init:k};f.exports=qa;}),null);