if (self.CavalryLogger) { CavalryLogger.start_js(["yVjUB"]); }

__d('ChannelConstants',[],(function a(b,c,d,e,f,g){var h='channel/',i={CHANNEL_MANUAL_RECONNECT_DEFER_MSEC:2000,MUTE_WARNING_TIME_MSEC:25000,WARNING_COUNTDOWN_THRESHOLD_MSEC:15000,ON_SHUTDOWN:h+'shutdown',ON_INVALID_HISTORY:h+'invalid_history',ON_CONFIG:h+'config',ON_ENTER_STATE:h+'enter_state',ON_EXIT_STATE:h+'exit_state',ATTEMPT_RECONNECT:h+'attempt_reconnect',RTI_SESSION:h+'new_rti_address',GET_RTI_SESSION_REQUEST:h+'rti_session_request',SKYWALKER:h+'skywalker',CHANNEL_ESTABLISHED:h+'established',OK:'ok',ERROR:'error',ERROR_MAX:'error_max',ERROR_MISSING:'error_missing',ERROR_MSG_TYPE:'error_msg_type',ERROR_SHUTDOWN:'error_shutdown',ERROR_STALE:'error_stale',SYS_OWNER:'sys_owner',SYS_NONOWNER:'sys_nonowner',SYS_ONLINE:'sys_online',SYS_OFFLINE:'sys_offline',SYS_TIMETRAVEL:'sys_timetravel',HINT_AUTH:'shutdown auth',HINT_CONN:'shutdown conn',HINT_DISABLED:'shutdown disabled',HINT_INVALID_STATE:'shutdown invalid state',HINT_MAINT:'shutdown maint',HINT_UNSUPPORTED:'shutdown unsupported',reason_Unknown:0,reason_AsyncError:1,reason_TooLong:2,reason_Refresh:3,reason_RefreshDelay:4,reason_UIRestart:5,reason_NeedSeq:6,reason_PrevFailed:7,reason_IFrameLoadGiveUp:8,reason_IFrameLoadRetry:9,reason_IFrameLoadRetryWorked:10,reason_PageTransitionRetry:11,reason_IFrameLoadMaxSubdomain:12,reason_NoChannelInfo:13,reason_NoChannelHost:14,CAPABILITY_VOIP_INTEROP:8,FANTAIL_SERVICE:'WebchatClient',SUBSCRIBE:'subscribe',UNSUBSCRIBE:'unsubscribe',FAKE_DFF:'fake_dff',THROTTLED:h+'throttled',JUMPSTART:h+'jumpstart',ENTITY_PRESENCE_ACTIVE_PING:'entity_presence/active_ping',getArbiterType:function j(k){return h+'message:'+k},getSkywalkerArbiterType:function j(k){return h+'skywalker:'+k}};f.exports=i}),18);
__d('CurrentLocale',['LocaleInitialData'],(function a(b,c,d,e,f,g){var h={};h.get=function(){return c('LocaleInitialData').locale};f.exports=h}),null);
__d('SystemEvents',['ArbiterMixin','ErrorUtils','SystemEventsInitialData','UserAgent_DEPRECATED','TimeSlice','mixin','setIntervalAcrossTransitions'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=1000;h=babelHelpers.inherits(k,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function k(){i.constructor.call(this);this.USER='SystemEvents/USER';this.ONLINE='SystemEvents/ONLINE';this.TIME_TRAVEL='SystemEvents/TIME_TRAVEL';this.$SystemEvents1=c('SystemEventsInitialData').ORIGINAL_USER_ID;this.$SystemEvents2=this.$SystemEvents1;this.$SystemEvents3=navigator.onLine;this.$SystemEvents4=Date.now();this.$SystemEvents5()}k.prototype.isPageOwner=function(l){return (l||this.$SystemEvents6())==this.$SystemEvents1};k.prototype.isOnline=function(){return !!(c('UserAgent_DEPRECATED').chrome()||this.$SystemEvents3)};k.prototype.checkTimeTravel=function(){var l=Date.now(),m=l-this.$SystemEvents4;this.$SystemEvents4=l;if(m<0||m>10000)this.inform(this.TIME_TRAVEL,m);};k.prototype.$SystemEvents5=function(){this.$SystemEvents7();this.$SystemEvents8();this.$SystemEvents9();this.$SystemEvents10()};k.prototype.$SystemEvents7=function(){var l=c('TimeSlice').guard(function(){if(!this.$SystemEvents3){this.$SystemEvents3=true;this.inform(this.ONLINE,this.$SystemEvents3)}}.bind(this),'SystemEvents onOnline'),m=c('TimeSlice').guard(function(){if(this.$SystemEvents3){this.$SystemEvents3=false;this.inform(this.ONLINE,this.$SystemEvents3)}}.bind(this),'SystemEvents onOffline');if(c('UserAgent_DEPRECATED').ie()){if(c('UserAgent_DEPRECATED').ie()>=11){window.addEventListener('online',l,false);window.addEventListener('offline',m,false)}else if(c('UserAgent_DEPRECATED').ie()>=8){window.attachEvent('onload',function(){document.body.ononline=l;document.body.onoffline=m})}else c('setIntervalAcrossTransitions')(function(){(navigator.onLine?l:m)()},j);}else if(window.addEventListener){window.addEventListener('online',l,false);window.addEventListener('offline',m,false)}};k.prototype.$SystemEvents8=function(){c('setIntervalAcrossTransitions')(function(){var l=this.$SystemEvents6();if(this.$SystemEvents2!=l){this.$SystemEvents2=l;this.inform(this.USER,l)}}.bind(this),j)};k.prototype.$SystemEvents9=function(){c('setIntervalAcrossTransitions')(this.checkTimeTravel.bind(this),j)};k.prototype.$SystemEvents10=function(){c('setIntervalAcrossTransitions')(function(){if(window.onerror!=c('ErrorUtils').onerror)window.onerror=c('ErrorUtils').onerror;},j)};k.prototype.$SystemEvents6=function(){return /c_user=(\d+)/.test(document.cookie)&&RegExp.$1||'0'};f.exports=new k()}),19);
__d('UserActivity',['Arbiter','Event'],(function a(b,c,d,e,f,g){var h=5000,i=500,j=-5,k=Date.now(),l=k,m=false,n=Date.now(),o=document.hasFocus?document.hasFocus():true,p=0,q=Date.now(),r=-1,s=-1,t={EVENT_INTERVAL_MS:i,subscribeOnce:function x(y){var z=t.subscribe(function(aa,ba){t.unsubscribe(z);y(ba)});return z},subscribe:function x(y){return c('Arbiter').subscribe('useractivity/activity',y)},unsubscribe:function x(y){y.unsubscribe()},isActive:function x(y){return new Date()-k<(y||h)},isOnTab:function x(){return o},hasBeenInactive:function x(){return m},resetActiveStatus:function x(){o=true;m=false},getLastInActiveEnds:function x(){return n},getLastActive:function x(){return k},setIdleTime:function x(y){p=y},getLastLeaveTime:function x(){return q},getLastInformTime:function x(){return l},reset:function x(){k=Date.now();l=k;m=false;n=Date.now();o=document.hasFocus?document.hasFocus():true;p=0;q=Date.now();r=-1;s=-1}};function u(event){var x=b.MouseEvent;if(x&&event instanceof x){if(event.pageX==r&&event.pageY==s&&event.type!='click')return;r=event.pageX;s=event.pageY}k=Date.now();var y=k-l;if(y>i){l=k;if(!o)q=k;if(y>=(p||h)){m=true;n=k}c('Arbiter').inform('useractivity/activity',{event:event,idleness:y,last_inform:l})}else if(y<j)l=k;}function v(event){o=true;n=Date.now();u(event)}function w(event){o=false;m=true;q=Date.now()}c('Event').listen(window,'scroll',u);c('Event').listen(window,'focus',v);c('Event').listen(window,'blur',w);c('Event').listen(document.documentElement,{DOMMouseScroll:u,mousewheel:u,keydown:u,mouseover:u,mousemove:u,click:u},undefined,undefined,{passive:true});c('Arbiter').subscribe('Event/stop',function(x,y){u(y.event)});f.exports=t}),null);
__d('RTISubscriptionManager',['invariant','ChannelConstants','CurrentLocale','SystemEvents','setTimeoutAcrossTransitions','Arbiter','ErrorUtils','Run','RTISubscriptionManagerConfig','UserActivity','CurrentUser','RTIFriendFanoutConfig'],(function a(b,c,d,e,f,g,h){'use strict';var i={SUBSCRIBE:'s',UNSUBSCRIBE:'u'},j=300,k=20;function l(){this.$RTISubscriptionManager1={};this.$RTISubscriptionManager2=[];this.$RTISubscriptionManager3={};this.$RTISubscriptionManager4=null;this.$RTISubscriptionManager5;this.$RTISubscriptionManager6=false;this.$RTISubscriptionManager7=false;this.$RTISubscriptionManager8=false;this.$RTISubscriptionManager9=true;this.$RTISubscriptionManager10=document.readyState==='complete';c('Run').onAfterLoad(function(){this.$RTISubscriptionManager10=true;this.flush()}.bind(this));this.$RTISubscriptionManager11=null;c('Arbiter').subscribe(c('ChannelConstants').ON_ENTER_STATE,function(o,p){if(!this.$RTISubscriptionManager11)return;var q=/pull/.test(p.state);if(!this.$RTISubscriptionManager4&&q){this.$RTISubscriptionManager5=true;if(!this.$RTISubscriptionManager6){this.$RTISubscriptionManager6=true;c('setTimeoutAcrossTransitions')(function(){this.$RTISubscriptionManager4=this.$RTISubscriptionManager5;this.$RTISubscriptionManager6=false;if(this.$RTISubscriptionManager4)this.flush();}.bind(this),l.PULL_HINT_DELAY_MILLIS)}}else if(!q){this.$RTISubscriptionManager5=false;this.$RTISubscriptionManager4=false}else if(q){this.$RTISubscriptionManager4=true;this.flush()}}.bind(this));c('SystemEvents').subscribe(c('SystemEvents').ONLINE,function(o,p){if(!p){this.$RTISubscriptionManager4=false;this.$RTISubscriptionManager5=false}}.bind(this));c('SystemEvents').subscribe(c('SystemEvents').USER,function(o,p){this.$RTISubscriptionManager4=false;this.$RTISubscriptionManager5=false;this.$RTISubscriptionManager1={};this.$RTISubscriptionManager2=[];this.$RTISubscriptionManager3={}}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').RTI_SESSION,function(o,p){if(!this.$RTISubscriptionManager11&&p)this.deleteSubscriptions(function(q){return q.getState()===i.UNSUBSCRIBE});this.$RTISubscriptionManager11=p;if(this.$RTISubscriptionManager11){this.$RTISubscriptionManager4=true;this.flush()}}.bind(this));c('Arbiter').subscribe(c('ChannelConstants').ON_INVALID_HISTORY,function(){this.$RTISubscriptionManager4=true;this.forEachSubscription(function(o,p){p.setDirty(true)});this.getCurrentSession()}.bind(this));this.getCurrentSession();c('Arbiter').subscribe(c('ChannelConstants').SKYWALKER,function(o,p){var q=p.obj.topic,r={};if(p.obj.payloads===undefined){r.obj=[p.obj.payload]}else r.obj=p.obj.payloads;c('Arbiter').inform(c('ChannelConstants').getSkywalkerArbiterType(q),r)})}l.prototype.subscribe=function(o,p,q,r,s){var t=this.subscribeInternal(o,p,q,r,s),u=o.substr(0,o.lastIndexOf('/'));if(!c('RTIFriendFanoutConfig').passFriendFanoutSubscribeGK||c('RTIFriendFanoutConfig').topicPrefixes.indexOf(u)<0)return t;var v=o+'_user_id_'+c('CurrentUser').getID();this.subscribeInternal(v,p,q);return t};l.prototype.subscribeInternal=function(o,p,q,r,s){o||h(0);p||h(0);var t=this.getMaxSubscriptions(),u=Object.keys(this.$RTISubscriptionManager1).length-Object.keys(this.$RTISubscriptionManager3).length;if(u>=t){var v=this.getEvictionBatchSize();if(v===0)return null;this.$RTISubscriptionManager2=this.$RTISubscriptionManager2.filter(function(da){return this.isSubscribed(da)&&this.$RTISubscriptionManager1[da].getState()===i.SUBSCRIBE}.bind(this));while(u>=t){if(this.$RTISubscriptionManager2.length==0)return null;for(var w=0;w<v;w++){if(w>=this.$RTISubscriptionManager2.length)break;this.unsubscribe(this.$RTISubscriptionManager2[w]);u--}this.$RTISubscriptionManager2=this.$RTISubscriptionManager2.slice(v)}}q=q||{};q.locale=c('CurrentLocale').get();if(c('RTISubscriptionManagerConfig').assimilator){q.tierType=c('RTISubscriptionManagerConfig').assimilator.tierType;q.sandboxIP=c('RTISubscriptionManagerConfig').assimilator.sandboxIP;q.sandboxPort=c('RTISubscriptionManagerConfig').assimilator.sandboxPort;q.sandboxHostname=c('RTISubscriptionManagerConfig').assimilator.sandboxHostname}var x=new n(o,p,q,r,s);if(this.isSubscribed(o)){var y=this.$RTISubscriptionManager1[o],z=JSON.stringify(x.getContext())===JSON.stringify(y.getContext());if(o in this.$RTISubscriptionManager3){if(z){x.setDirty(false);x.setSent(true);delete this.$RTISubscriptionManager3[o]}else this.flush();}else{if(y&&y.getArbiterToken()){c('Arbiter').unsubscribe(y.getArbiterToken());y.setArbiterToken(null)}x.setDirty(y.isDirty());x.setSent(y.isSent());o.startsWith('gqls/')}}var aa=new m(x);this.$RTISubscriptionManager1[o]=x;this.$RTISubscriptionManager2.push(o);var ba=c('ChannelConstants').getSkywalkerArbiterType(o),ca=c('Arbiter').subscribe(ba,function(da,event){var ea=event.obj.length;for(var fa=0;fa<ea;fa++){var ga={topic:o,payload:event.obj[fa]};c('ErrorUtils').applyWithGuard(p,this,[ga])}this.$RTISubscriptionManager12()}.bind(this));x.setArbiterToken(ca);this.flush();return aa};l.prototype.unsubscribe=function(o){o||h(0);if(o in this.$RTISubscriptionManager1){var p=this.$RTISubscriptionManager1[o];p.prepareUnsubscribe();if(p.getArbiterToken()){c('Arbiter').unsubscribe(p.getArbiterToken());p.setArbiterToken(null)}this.$RTISubscriptionManager3[o]=true}};l.prototype.unsubscribeAll=function(){if(this.isReady()){var o={reset:'t'};this.$RTISubscriptionManager11.issueRequest('/sub',o,{},function(p){})}};l.prototype.activePing=function(){if(this.isReady()){var o={state:'active'};this.$RTISubscriptionManager11.issueRequest('/active_ping',o,{},function(p){})}};l.prototype.flush=function(){var o,p=this;if(this.isReady()&&!this.$RTISubscriptionManager7){var q;(function(){p.$RTISubscriptionManager7=true;p.$RTISubscriptionManager8=false;var r=[],s={},t=false;p.forEachSubscription(function(x,y){if(y.isDirty()){var z='subscriptions',aa=s[z];if(!aa){aa=[];s[z]=aa}r.push(y);y.setDirty(false);y.setSent(false);var ba={topic:y.getTopic(),state:y.getState(),context:y.getContext()};aa.push(ba)}else t=true;});if(!t&&s.subscriptions&&s.subscriptions.length>0){var u=[];for(q=0;q<s.subscriptions.length;q++)if(s.subscriptions[q].state!==i.UNSUBSCRIBE)u.push(s.subscriptions[q]);s.subscriptions=u;p.$RTISubscriptionManager9=true}var v=function(x){var y=x.data!=null;if(this.$RTISubscriptionManager9&&y)this.$RTISubscriptionManager9=false;for(var z=0;z<r.length;z++){var aa=r[z];aa.setSent(y);aa.setDirty(!y);if(aa.getState()===i.SUBSCRIBE){var ba=aa.getSubscribeCallback();if(ba!==null)c('ErrorUtils').applyWithGuard(ba,this,[x]);}else if(y)delete this.$RTISubscriptionManager3[aa.getTopic()];}this.deleteSubscriptions(function(ca){return ca.getState()===i.UNSUBSCRIBE&&ca.isSent()});this.$RTISubscriptionManager7=false;if(this.$RTISubscriptionManager8){this.$RTISubscriptionManager8=false;this.flush()}}.bind(p);if(Object.keys(s).length>0){var w={};if(p.$RTISubscriptionManager9)w.reset='t';p.$RTISubscriptionManager11.issueRequest('/sub',w,s,v)}else p.$RTISubscriptionManager7=false;})()}else{this.$RTISubscriptionManager8=true;if(this.$RTISubscriptionManager11===null)this.getCurrentSession();}};l.prototype.deleteSubscriptions=function(o){o||h(0);var p=[];this.forEachSubscription(function(r,s){if(o.apply(this,[s]))p.push(r);});for(var q=0;q<p.length;q++)delete this.$RTISubscriptionManager1[p[q]];};l.prototype.forEachSubscription=function(o){o||h(0);for(var p in this.$RTISubscriptionManager1)if(Object.prototype.hasOwnProperty.call(this.$RTISubscriptionManager1,p))o.apply(this,[p,this.$RTISubscriptionManager1[p]]);};l.prototype.getSubscriptions=function(){var o=[];this.forEachSubscription(function(p,q){o.push(q)});return o};l.prototype.isUnflushedUnsubscribe=function(o){o||h(0);return o in this.$RTISubscriptionManager3};l.prototype.isSubscribed=function(o){o||h(0);return o in this.$RTISubscriptionManager1};l.prototype.isReady=function(){if(this.$RTISubscriptionManager11&&this.$RTISubscriptionManager4!==null&&this.$RTISubscriptionManager4&&this.$RTISubscriptionManager10)return true;return false};l.prototype.getCurrentSession=function(){c('Arbiter').inform(c('ChannelConstants').GET_RTI_SESSION_REQUEST)};l.prototype.getEvictionBatchSize=function(){if(c('RTISubscriptionManagerConfig').config&&Object.prototype.hasOwnProperty.call(c('RTISubscriptionManagerConfig').config,'eviction_batch_size')){return c('RTISubscriptionManagerConfig').config.eviction_batch_size}else return k;};l.prototype.getMaxSubscriptions=function(){if(c('RTISubscriptionManagerConfig').config&&Object.prototype.hasOwnProperty.call(c('RTISubscriptionManagerConfig').config,'max_subscriptions')){return c('RTISubscriptionManagerConfig').config.max_subscriptions}else return j;};l.prototype.$RTISubscriptionManager12=function(){var o=null,p=null;if(c('RTISubscriptionManagerConfig').config){o=c('RTISubscriptionManagerConfig').config.www_idle_unsubscribe_min_time_ms;p=c('RTISubscriptionManagerConfig').config.www_idle_unsubscribe_times_ms}if(!o||!p)return;if(c('UserActivity').isActive(o))return;this.forEachSubscription(function(q,r){var s=r.getTopic(),t=false;if(s.startsWith('gqls/')){var u=s.split('/',2)[1];if(p!==null&&typeof p==='object'&&p[u]!==undefined){t=!c('UserActivity').isActive(p[u])}else t=false;}if(t)this.unsubscribe(s);}.bind(this))};function m(o){this.$SubscriptionToken1=o}m.prototype.getContext=function(){return this.$SubscriptionToken1.getContext()};m.prototype.unsubscribe=function(){var o=this.$SubscriptionToken1.getUnsubscribeHook();if(o)o();var p=this.$SubscriptionToken1.getTopic();l.unsubscribe(p);var q=p.substr(0,p.lastIndexOf('/'));if(!c('RTIFriendFanoutConfig').passFriendFanoutSubscribeGK||c('RTIFriendFanoutConfig').topicPrefixes.indexOf(q)<0)return;l.unsubscribe(p+'_user_id_'+c('CurrentUser').getID())};m.prototype.fastUnsubscribe=function(){this.unsubscribe();l.flush()};function n(o,p,q,r,s){this.$SubscriptionData1=o;this.$SubscriptionData2=p;this.$SubscriptionData3=true;this.$SubscriptionData4=false;this.$SubscriptionData5=i.SUBSCRIBE;this.$SubscriptionData6=null;this.$SubscriptionData7=Date.now();if(q){this.$SubscriptionData8=q}else this.$SubscriptionData8={};this.$SubscriptionData9=r?r:null;this.$SubscriptionData10=s?s:null}n.prototype.getCreatedTime=function(){return this.$SubscriptionData7};n.prototype.getTopic=function(){return this.$SubscriptionData1};n.prototype.getListener=function(){return this.$SubscriptionData2};n.prototype.getSubscribeCallback=function(){return this.$SubscriptionData9};n.prototype.getUnsubscribeHook=function(){return this.$SubscriptionData10};n.prototype.getArbiterToken=function(){return this.$SubscriptionData6};n.prototype.setArbiterToken=function(o){this.$SubscriptionData6=o};n.prototype.isDirty=function(){return this.$SubscriptionData3};n.prototype.setDirty=function(o){this.$SubscriptionData3=o};n.prototype.getState=function(){return this.$SubscriptionData5};n.prototype.setState=function(o){this.$SubscriptionData5=o};n.prototype.getContext=function(){return this.$SubscriptionData8};n.prototype.isSent=function(){return this.$SubscriptionData4};n.prototype.setSent=function(o){this.$SubscriptionData4=o};n.prototype.prepareUnsubscribe=function(){this.setState(i.UNSUBSCRIBE);this.setDirty(true);this.setSent(false);if(c('RTISubscriptionManagerConfig').unsubscribe_release)this.$SubscriptionData2=null;};c('Run').onUnload(function(){l.unsubscribeAll()});l.PULL_HINT_DELAY_MILLIS=10000;Object.keys(l.prototype).forEach(function(o){l[o]=function(){var p=l;return l.prototype[o].apply(p,arguments)}});l.call(l);f.exports=l}),null);