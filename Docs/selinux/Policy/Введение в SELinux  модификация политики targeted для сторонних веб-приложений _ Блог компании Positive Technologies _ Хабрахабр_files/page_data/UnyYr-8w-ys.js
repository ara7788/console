if (self.CavalryLogger) { CavalryLogger.start_js(["yFjjG"]); }

__d('getVendorPrefixedName',['invariant','ExecutionEnvironment','UserAgent','camelize'],(function a(b,c,d,e,f,g,h){var i={},j=['Webkit','ms','Moz','O'],k=new RegExp('^('+j.join('|')+')'),l=c('ExecutionEnvironment').canUseDOM?document.createElement('div').style:{};function m(p){for(var q=0;q<j.length;q++){var r=j[q]+p;if(r in l)return r;}return null}function n(p){switch(p){case 'lineClamp':if(c('UserAgent').isEngine('WebKit >= 315.14.2'))return 'WebkitLineClamp';return null;default:return null;}}function o(p){var q=c('camelize')(p);if(i[q]===undefined){var r=q.charAt(0).toUpperCase()+q.slice(1);if(k.test(r))h(0);if(c('ExecutionEnvironment').canUseDOM){i[q]=q in l?q:m(r)}else i[q]=n(q);}return i[q]}f.exports=o}),null);
__d('BrowserSupportCore',['getVendorPrefixedName'],(function a(b,c,d,e,f,g){var h={hasCSSAnimations:function i(){return !!c('getVendorPrefixedName')('animationName')},hasCSSTransforms:function i(){return !!c('getVendorPrefixedName')('transform')},hasCSS3DTransforms:function i(){return !!c('getVendorPrefixedName')('perspective')},hasCSSTransitions:function i(){return !!c('getVendorPrefixedName')('transition')}};f.exports=h}),18);
__d('BrowserSupport',['BrowserSupportCore','ExecutionEnvironment','UserAgent_DEPRECATED','memoize','getVendorPrefixedName'],(function a(b,c,d,e,f,g){var h=c('ExecutionEnvironment').canUseDOM?document.createElement('div'):null,i={hasCSSAnimations:c('BrowserSupportCore').hasCSSAnimations,hasCSSTransforms:c('BrowserSupportCore').hasCSSTransforms,hasCSS3DTransforms:c('BrowserSupportCore').hasCSS3DTransforms,hasCSSTransitions:c('BrowserSupportCore').hasCSSTransitions,hasPositionSticky:c('memoize')(function(){if(!c('ExecutionEnvironment').canUseDOM)return false;h.style.cssText='position:-moz-sticky;position:-webkit-sticky;'+'position:-o-sticky;position:-ms-sticky;position:sticky;';return /sticky/.test(h.style.position)}),hasPointerEvents:c('memoize')(function(){if(!c('ExecutionEnvironment').canUseDOM)return false;if(!('pointerEvents' in h.style))return false;h.style.cssText='pointer-events:auto';return h.style.pointerEvents==='auto'}),hasFileAPI:c('memoize')(function(){return !(c('UserAgent_DEPRECATED').webkit()&&!c('UserAgent_DEPRECATED').chrome()&&c('UserAgent_DEPRECATED').windows())&&'FileList' in window&&'FormData' in window}),hasBlobFactory:c('memoize')(function(){return !!b.blob}),getTransitionEndEvent:c('memoize')(function(){var j={transition:'transitionend',WebkitTransition:'webkitTransitionEnd',MozTransition:'mozTransitionEnd',OTransition:'oTransitionEnd'},k=c('getVendorPrefixedName')('transition');return j[k]||null}),hasCanvasRenderingContext2D:function j(){return !!window.CanvasRenderingContext2D}};f.exports=i}),18);
__d('LoadingMarker.react',['React'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;j.prototype.render=function(){return this.props.children};function j(){h.apply(this,arguments)}f.exports=j}),null);
__d('XUISpinner.react',['cx','fbt','BrowserSupport','LoadingMarker.react','React','UserAgent','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes,m=c('BrowserSupport').hasCSSAnimations()&&!(c('UserAgent').isEngine('Trident < 6')||c('UserAgent').isEngine('Gecko < 39')||c('UserAgent').isBrowser('Safari < 6'));j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;n.prototype.render=function(){'use strict';var o=this.props,p=o.showOnAsync,q=o.background,r=o.paused,s=babelHelpers.objectWithoutProperties(o,['showOnAsync','background','paused']),t="img"+(' '+"_55ym")+(this.props.size=='small'?' '+"_55yn":'')+(this.props.size=='large'?' '+"_55yq":'')+(q=='light'?' '+"_55yo":'')+(q=='dark'?' '+"_55yp":'')+(p?' '+"_5tqs":'')+(!m?' '+"_5d9-":'')+(m&&r?' '+"_2y32":'');return c('React').createElement(c('LoadingMarker.react'),null,c('React').createElement('span',babelHelpers['extends']({},s,{className:c('joinClasses')(this.props.className,t),role:'progressbar','aria-valuetext':i._("Loading..."),'aria-busy':'true','aria-valuemin':'0','aria-valuemax':'100'})))};function n(){'use strict';j.apply(this,arguments)}n.propTypes={paused:l.bool,showOnAsync:l.bool,size:l.oneOf(['small','large']),background:l.oneOf(['light','dark'])};n.defaultProps={showOnAsync:false,size:'small',background:'light'};f.exports=n}),null);
__d('unmountComponentOnTransition',['Arbiter','PageEvents','ReactDOM','ReactGK','Run','emptyFunction','requestIdleCallbackAcrossTransitions'],(function a(b,c,d,e,f,g){'use strict';var h=[],i=null;function j(m){h.unshift(m);k()}function k(){if(i!==null)return;i=c('requestIdleCallbackAcrossTransitions')(function(m){i=null;while(h.length>0&&m.timeRemaining()>0)c('ReactDOM').unmountComponentAtNode(h.pop());if(h.length>0)k();})}function l(m,n){var o;if(c('ReactGK').unmountOnBeforeClearCanvas){(function(){var p=c('Arbiter').subscribe(c('PageEvents').AJAXPIPE_ONBEFORECLEARCANVAS,function(q,r){var s=r.canvasID;if(s!=='content'&&s!=='content_container')return;if(m!=null&&Object.prototype.hasOwnProperty.call(m,'setState')){m.setState=c('emptyFunction');m.shouldComponentUpdate=c('emptyFunction').thatReturnsFalse}j(n);p.unsubscribe()})})()}else c('Run').onLeave(function(){c('ReactDOM').unmountComponentAtNode(n)});}f.exports=l}),null);
__d('LeftRight.react',['cx','invariant','React','joinClasses','keyMirror'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('keyMirror')({left:true,right:true,both:true});function m(p){p&&(p.length===1||p.length===2)||i(0)}function n(p){var q=[];c('React').Children.forEach(p,function(r){return q.push(r)});return q}j=babelHelpers.inherits(o,c('React').Component);k=j&&j.prototype;o.prototype.render=function(){var p=n(this.props.children);m(p);var q=this.props.direction||l.both,r=q===l.both,s=r||q===l.left?"_ohe lfloat":'',t=r||q===l.right?"_ohf rfloat":'',u=c('React').createElement('div',{key:'left',className:s},p[0]),v=p.length<2?null:c('React').createElement('div',{key:'right',className:t},p[1]),w=q===l.right&&v?[v,u]:[u,v];return c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,'clearfix')}),w)};function o(){j.apply(this,arguments)}o.DIRECTION=l;f.exports=o}),null);
__d('keyMirrorRecursive',['invariant'],(function a(b,c,d,e,f,g,h){'use strict';function i(l,m){return j(l,m)}function j(l,m){var n={};k(l)||h(0);for(var o in l){if(!Object.prototype.hasOwnProperty.call(l,o))continue;var p=l[o],q=m?m+'.'+o:o;if(k(p)){p=j(p,q)}else p=q;n[o]=p}return n}function k(l){return l instanceof Object&&!Array.isArray(l)}f.exports=i}),null);
__d('Dispatcher_DEPRECATED',['invariant','monitorCodeUse'],(function a(b,c,d,e,f,g,h){'use strict';var i='ID_';function j(){this.$Dispatcher_DEPRECATED1={};this.$Dispatcher_DEPRECATED2=false;this.$Dispatcher_DEPRECATED3={};this.$Dispatcher_DEPRECATED4={};this.$Dispatcher_DEPRECATED5=1}j.prototype.register=function(m,n){n=this.__genID(n);this.$Dispatcher_DEPRECATED1[n]=m;return n};j.prototype.unregister=function(m){this.$Dispatcher_DEPRECATED1[m]||h(0);delete this.$Dispatcher_DEPRECATED1[m]};j.prototype.waitFor=function(m){this.$Dispatcher_DEPRECATED2||h(0);for(var n=0;n<m.length;n++){var o=m[n];if(this.$Dispatcher_DEPRECATED4[o]){this.$Dispatcher_DEPRECATED3[o]||h(0);continue}this.$Dispatcher_DEPRECATED1[o]||h(0);this.$Dispatcher_DEPRECATED7(o)}};j.prototype.dispatch=function(m){l(this.$Dispatcher_DEPRECATED2,this.$Dispatcher_DEPRECATED6,m);this.$Dispatcher_DEPRECATED8(m);try{for(var n in this.$Dispatcher_DEPRECATED1){if(this.$Dispatcher_DEPRECATED4[n])continue;this.$Dispatcher_DEPRECATED7(n)}}finally{this.$Dispatcher_DEPRECATED9()}};j.prototype.isDispatching=function(){return this.$Dispatcher_DEPRECATED2};j.prototype.$Dispatcher_DEPRECATED7=function(m){this.$Dispatcher_DEPRECATED4[m]=true;this.__invokeCallback(m,this.$Dispatcher_DEPRECATED1[m],this.$Dispatcher_DEPRECATED6);this.$Dispatcher_DEPRECATED3[m]=true};j.prototype.__invokeCallback=function(m,n,o){n(o)};j.prototype.$Dispatcher_DEPRECATED8=function(m){for(var n in this.$Dispatcher_DEPRECATED1){this.$Dispatcher_DEPRECATED4[n]=false;this.$Dispatcher_DEPRECATED3[n]=false}this.$Dispatcher_DEPRECATED6=m;this.$Dispatcher_DEPRECATED2=true};j.prototype.$Dispatcher_DEPRECATED9=function(){delete this.$Dispatcher_DEPRECATED6;this.$Dispatcher_DEPRECATED2=false};j.prototype.__genID=function(m){var n=m?m+'_':i;m=m||n+this.$Dispatcher_DEPRECATED5++;while(this.$Dispatcher_DEPRECATED1[m])m=n+this.$Dispatcher_DEPRECATED5++;return m};function k(m){var n='<unknown>';if(!m)return n;if(typeof m.type==='string')return m.type;if(typeof m.actionType==='string')return m.actionType;if(!m.action)return n;if(typeof m.action.type==='string')return m.action.type;if(typeof m.action.actionType==='string')return m.action.actionType;return n}function l(m,n,o){!m||h(0)}f.exports=j}),18);
__d('FluxStore',['invariant','EventEmitter'],(function a(b,c,d,e,f,g,h){'use strict';function i(k){this.__className=this.constructor.name;this.__changed=false;this.__changeEvent='change';this.__dispatcher=k;this.__emitter=new (c('EventEmitter'))();this.$FluxStore2=false;this.$FluxStore1=k.register(function(l){this.__invokeOnDispatch(l)}.bind(this),this.__getIDForDispatcher(),this)}i.prototype.addListener=function(k){return this.__emitter.addListener(this.__changeEvent,k)};i.prototype.getDispatcher=function(){return this.__dispatcher};i.prototype.getDispatchToken=function(){return this.$FluxStore1};i.prototype.hasChanged=function(){this.__dispatcher.isDispatching()||h(0);return this.__changed||this.$FluxStore2};i.prototype.__emitChange=function(){this.__dispatcher.isDispatching()||h(0);this.__changed=true};i.prototype.__invokeOnDispatch=function(k){this.__changed=false;this.__onDispatch(k);this.__inform()};i.prototype.__inform=function(k){this.__changed=this.__changed||this.$FluxStore2;this.$FluxStore2=false;if(this.__dispatcher.shouldAllowInforms!=null&&!this.__dispatcher.shouldAllowInforms()&&this.__changed){this.__changed=false;this.$FluxStore2=true}if(this.__changed)this.__emitter.emit(k||this.__changeEvent);};i.prototype.__onDispatch=function(k){h(0)};i.prototype.__getIDForDispatcher=function(){return this.__className};var j=i;f.exports=i}),18);
__d('TypedFluxStore',['FluxStore'],(function a(b,c,d,e,f,g){'use strict';f.exports=c('FluxStore')}),18);
__d('abstractMethod',['invariant'],(function a(b,c,d,e,f,g,h){'use strict';function i(j,k){h(0)}f.exports=i}),null);
__d('FluxReduceStore',['invariant','TypedFluxStore','abstractMethod'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k,l;i=babelHelpers.inherits(m,c('TypedFluxStore'));j=i&&i.prototype;function m(p){j.constructor.call(this,p);this.$FluxReduceStore1=this.getInitialState()}m.prototype.getState=function(){return this.$FluxReduceStore1};m.prototype.getInitialState=function(){return c('abstractMethod')('FluxReduceStore','getInitialState')};m.prototype.reduce=function(p,q){return c('abstractMethod')('FluxReduceStore','reduce')};m.prototype.areEqual=function(p,q){return p===q};m.prototype.__invokeOnDispatch=function(p){this.__changed=false;var q=this.$FluxReduceStore1,r=this.reduce(q,p);r!==undefined||h(0);if(!this.areEqual(q,r)){this.$FluxReduceStore1=r;this.__emitChange()}this.__inform()};var n=m;k=babelHelpers.inherits(o,m);l=k&&k.prototype;function o(){k.apply(this,arguments)}f.exports=n}),18);
__d('intlList',['fbt','invariant','React','keyMirror'],(function a(b,c,d,e,f,g,h,i){'use strict';var j=c('keyMirror')({AND:null,NONE:null,OR:null}),k=c('keyMirror')({COMMA:null,SEMICOLON:null}),l=function n(o,p,q){p=p||j.AND;q=q||k.COMMA;var r=o.length;if(r===0){return ''}else if(r===1)return o[0];var s=o[r-1],t=o[0];for(var u=1;u<r-1;++u)switch(q){case k.SEMICOLON:t=h._("{previous items}; {following items}",[h.param('previous items',t),h.param('following items',o[u])]);break;default:t=h._("{previous items}, {following items}",[h.param('previous items',t),h.param('following items',o[u])]);}return m(t,s,p,q)};function m(n,o,p,q){switch(p){case j.AND:return h._("{list of items} and {last item}",[h.param('list of items',n),h.param('last item',o)]);case j.OR:return h._("{list of items} or {last item}",[h.param('list of items',n),h.param('last item',o)]);case j.NONE:switch(q){case k.SEMICOLON:return h._("{previous items}; {last item}",[h.param('previous items',n),h.param('last item',o)]);default:return h._("{list of items}, {last item}",[h.param('list of items',n),h.param('last item',o)]);}default:i(0);}}l.DELIMITERS=k;l.CONJUNCTIONS=j;f.exports=l}),null);
__d('ReactRenderer',['invariant','React','ReactDOM','$','nullthrows','unmountComponentOnTransition'],(function a(b,c,d,e,f,g,h){'use strict';var i=8;function j(p,q,r){var s=c('ReactDOM').render(p,q,r);c('unmountComponentOnTransition')(s,q);return s}function k(p,q,r,s){var t=c('React').createElement(p,q);return j(t,r,s)}function l(p,q,r,s){var t=c('React').createElement(p,q);return c('ReactDOM').render(t,r,s)}function m(p,q,r,s){return k(p,q,c('$')(r),s)}function n(p,q,r,s){return l(p,q,c('$')(r),s)}function o(p){var q=p.constructor,r=p.props,s=p.dummyElem,t=p.acrossTransitions;s.tagName==='NOSCRIPT'||h(0);var u=c('nullthrows')(s.parentNode,'Error: container doesn\'t have a parent'),v=s.previousSibling;if(v&&v.nodeType===i&&v.nodeValue===' end-react-placeholder '){do{u.removeChild(v);v=c('nullthrows')(s.previousSibling,'Error: malformed placeholder')}while(!(v.nodeType===i&&v.nodeValue===' begin-react-placeholder '));u.removeChild(v)}var w=document.createComment(' react-mount-point-unstable ');u.replaceChild(w,s);var x=t?l:k;return x(q,r,w)}f.exports={renderComponent:j,constructAndRenderComponent:k,constructAndRenderComponentByID:m,constructAndRenderComponentAcrossTransitions:l,constructAndRenderComponentByIDAcrossTransitions:n,constructAndRenderComponentIntoComment_DO_NOT_USE:o,constructAndRenderComponent_DEPRECATED:l,constructAndRenderComponentByID_DEPRECATED:n}}),18);