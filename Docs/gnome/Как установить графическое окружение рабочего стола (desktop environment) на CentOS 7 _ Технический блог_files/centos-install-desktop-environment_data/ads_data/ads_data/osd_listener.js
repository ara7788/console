(function(){var aa=function(a,b){function c(){}c.prototype=b.prototype;a.bb=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if("prototype"!=d)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]},ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},m="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,da=function(){da=function(){};m.Symbol||(m.Symbol=ea)},ea=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}(),ha=function(){da();var a=m.Symbol.iterator;a||(a=m.Symbol.iterator=m.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});ha=function(){}},fa=function(a){var b=0;return ia(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})},ia=function(a){ha();a={next:a};a[m.Symbol.iterator]=function(){return this};return a},ja=function(a){ha();var b=a[Symbol.iterator];return b?b.call(a):fa(a)},n=function(a){if(!(a instanceof Array)){a=ja(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a},q=this,r=function(a){return"string"==typeof a},ka=function(){},la=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ma=function(a,b,c){return a.call.apply(a.bind,arguments)},na=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},oa=function(a,b,c){oa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ma:na;return oa.apply(null,arguments)},pa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},u=Date.now||function(){return+new Date},v=function(a,b){a=a.split(".");var c=q;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c=c[d]&&c[d]!==Object.prototype[d]?c[d]:c[d]={}:c[d]=b};var qa=function(a,b,c,d,e){if(e)c=a+("&"+b+"="+c);else{var f="&"+b+"=",g=a.indexOf(f);0>g?c=a+f+c:(g+=f.length,f=a.indexOf("&",g),c=0<=f?a.substring(0,g)+c+a.substring(f):a.substring(0,g)+c)}return 2E3<c.length?void 0!==d?qa(a,b,d,void 0,e):a:c};var w=document,x=window;var ra=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ta=function(a,b){var c=0;a=ra(String(a)).split(".");b=ra(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=sa(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||sa(0==f[2].length,0==g[2].length)||sa(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c},sa=function(a,b){return a<b?-1:a>b?1:0};var ua=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},va=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},wa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,l=0;l<d;l++)if(l in g){var k=g[l];b.call(c,k,l,a)&&(e[f++]=k)}return e},xa=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=r(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},ya=Array.prototype.reduce?function(a,b,c,d){d&&(b=oa(b,d));return Array.prototype.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;va(a,function(c,g){e=b.call(d,e,c,g,a)});return e},za=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1},Aa=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var y;a:{var Ca=q.navigator;if(Ca){var Da=Ca.userAgent;if(Da){y=Da;break a}}y=""}var z=function(a){return-1!=y.indexOf(a)},Ea=function(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};var Fa=function(a,b){for(var c in a)b.call(void 0,a[c],c,a)},Ga=function(a,b){return null!==a&&b in a};var Ha=function(){return z("Trident")||z("MSIE")},A=function(){return(z("Chrome")||z("CriOS"))&&!z("Edge")},Ja=function(){function a(a){a:{var b=d;for(var e=a.length,l=r(a)?a.split(""):a,k=0;k<e;k++)if(k in l&&b.call(void 0,l[k],k,a)){b=k;break a}b=-1}return c[0>b?null:r(a)?a.charAt(b):a[b]]||""}var b=y;if(Ha())return Ia(b);b=Ea(b);var c={};va(b,function(a){c[a[0]]=a[1]});var d=pa(Ga,c);return z("Opera")?a(["Version","Opera"]):z("Edge")?a(["Edge"]):A()?a(["Chrome","CriOS"]):(b=b[2])&&b[1]||""},Ia=function(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};var B=function(){return z("iPhone")&&!z("iPod")&&!z("iPad")};var Ka=function(a){Ka[" "](a);return a};Ka[" "]=ka;var Ma=function(a,b){var c=La;Object.prototype.hasOwnProperty.call(c,a)||(c[a]=b(a))};var Na=z("Opera"),C=Ha(),Oa=z("Edge"),Pa=z("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),Qa=-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge"),Ra=z("Macintosh"),Sa=z("Windows"),Ta=z("Android"),Ua=B(),Va=z("iPad"),Wa=z("iPod"),Xa=function(){var a=q.document;return a?a.documentMode:void 0},Ya;a:{var Za="",$a=function(){var a=y;if(Pa)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Oa)return/Edge\/([\d\.]+)/.exec(a);if(C)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Qa)return/WebKit\/(\S+)/.exec(a);if(Na)return/(?:Version)[ \/]?(\S+)/.exec(a)}();$a&&(Za=$a?$a[1]:"");if(C){var ab=Xa();if(null!=ab&&ab>parseFloat(Za)){Ya=String(ab);break a}}Ya=Za}var bb=Ya,La={},cb=function(a){Ma(a,function(){return 0<=ta(bb,a)})},db;var eb=q.document;db=eb&&C?Xa()||("CSS1Compat"==eb.compatMode?parseInt(bb,10):5):void 0;var fb;if(!(fb=!Pa&&!C)){var gb;if(gb=C)gb=9<=Number(db);fb=gb}fb||Pa&&cb("1.9.1");C&&cb("9");var D=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ka(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},hb=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},jb=function(){var a=ib;if(!a)return"";var b=/.*[&#?]google_debug(=[^&]*)?(&.*)?$/;try{var c=b.exec(decodeURIComponent(a));if(c)return c[1]&&1<c[1].length?c[1].substring(1):"true"}catch(d){}return""};var kb={ya:"ud=1",xa:"ts=0",Wa:"sc=1",Ya:"efp=1",Ua:"dcl=1",Va:"mlc=1",Sa:"rafv=1",Ra:"rafx=1",wa:"opp=1",Za:"mcvt=1",Ta:"lom=1",Xa:"ifp=1",Qa:"adf=1"};var E=function(){this.ja={};this.L=!0};E.prototype.disable=function(){this.L=!1};E.prototype.enable=function(){this.L=!0};E.prototype.isEnabled=function(){return this.L};E.prototype.reset=function(){this.ja={};this.L=!0};var lb=function(){var a=!1;try{var b=Object.defineProperty({},"passive",{get:function(){a=!0}});q.addEventListener("test",null,b)}catch(c){}return a}(),F=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,lb?d:d?d.capture||!1:!1):a.attachEvent&&a.attachEvent("on"+b,c)},mb=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,lb?void 0:!1):a.detachEvent&&a.detachEvent("on"+b,c)};var G=!1,H=function(a){if(a=a.match(/[\d]+/g))a.length=3};(function(){if(navigator.plugins&&navigator.plugins.length){var a=navigator.plugins["Shockwave Flash"];if(a&&(G=!0,a.description)){H(a.description);return}if(navigator.plugins["Shockwave Flash 2.0"]){G=!0;return}}if(navigator.mimeTypes&&navigator.mimeTypes.length&&(a=navigator.mimeTypes["application/x-shockwave-flash"],G=!(!a||!a.enabledPlugin))){H(a.enabledPlugin.description);return}try{var b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");G=!0;H(b.GetVariable("$version"));return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");G=!0;return}catch(c){}try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),G=!0,H(b.GetVariable("$version"))}catch(c){}})();(function(){if(Sa){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(y))?a[1]:"0"}return Ra?(a=/10[_.][0-9_.]+/,(a=a.exec(y))?a[0].replace(/_/g,"."):"10"):Ta?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(y))?a[1]:""):Ua||Va||Wa?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(y))?a[1].replace(/_/g,"."):""):""})();var nb=z("Firefox"),ob=B()||z("iPod"),pb=z("iPad"),qb=z("Android")&&!(A()||z("Firefox")||z("Opera")||z("Silk")),rb=A(),sb=z("Safari")&&!(A()||z("Coast")||z("Opera")||z("Edge")||z("Silk")||z("Android"))&&!(B()||z("iPad")||z("iPod"));var J=function(a){return(a=a.exec(y))?a[1]:""};(function(){if(nb)return J(/Firefox\/([0-9.]+)/);if(C||Oa||Na)return bb;if(rb)return B()||z("iPad")||z("iPod")?J(/CriOS\/([0-9.]+)/):J(/Chrome\/([0-9.]+)/);if(sb&&!(B()||z("iPad")||z("iPod")))return J(/Version\/([0-9.]+)/);if(ob||pb){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(y);if(a)return a[1]+"."+a[2]}else if(qb)return(a=J(/Android\s+([0-9.]+)/))?a:J(/Version\/([0-9.]+)/);return""})();var tb=function(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");if(c){var e=function(a){c(a);mb(d,"load",e);mb(d,"error",e)};F(d,"load",e);F(d,"error",e)}d.src=b;a.google_image_requests.push(d)};var K=null,L=function(a,b){tb(a,b,void 0)},ub=function(){if(!w.body)return!1;if(!K){var a=w.createElement("iframe");a.style.display="none";a.id="anonIframe";K=a;w.body.appendChild(a)}return!0},vb=!!window.google_async_iframe_id,M=vb&&window.parent||window;var wb=function(a,b,c){c=void 0===c?{}:c;this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var xb=function(a,b,c){if("array"==la(b))for(var d=0;d<b.length;d++)xb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))},yb=function(a,b){var c=[];for(b=b||0;b<a.length;b+=2)xb(a[b],a[b+1],c);return c.join("&")},zb=function(a,b){var c=2==arguments.length?yb(arguments[1],0):yb(arguments,1);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c};var Ab=function(a,b){this.sa=a;this.ta=b},Bb=function(a,b){this.url=a;this.ka=!!b;this.depth=null};var Cb=function(a,b,c,d,e){this.ma=c||4E3;this.G=a||"&";this.za=b||",$";this.R=void 0!==d?d:"trn";this.Pa=e||null;this.fa=!1;this.v={};this.Ka=0;this.l=[]},Db=function(a,b){var c={};c[a]=b;return[c]},Fb=function(a,b,c,d,e){var f=[];hb(a,function(a,l){(a=Eb(a,b,c,d,e))&&f.push(l+"="+a)});return f.join(b)},Eb=function(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(Eb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Fb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))},N=function(a,b,c,d){a.l.push(b);a.v[b]=Db(c,d)},Hb=function(a,b,c,d){b=b+"//"+c+d;var e=Gb(a)-d.length-0;if(0>e)return"";a.l.sort(function(a,b){return a-b});d=null;c="";for(var f=0;f<a.l.length;f++)for(var g=a.l[f],l=a.v[g],k=0;k<l.length;k++){if(!e){d=null==d?g:d;break}var p=Fb(l[k],a.G,a.za);if(p){p=c+p;if(e>=p.length){e-=p.length;b+=p;c=a.G;break}else a.fa&&(c=e,p[c-1]==a.G&&--c,b+=p.substr(0,c),c=a.G,e=0);d=null==d?g:d}}f="";a.R&&null!=d&&(f=c+a.R+"="+(a.Pa||d));return b+f+""},Gb=function(a){if(!a.R)return a.ma;var b=1,c;for(c in a.v)b=c.length>b?c.length:b;return a.ma-a.R.length-b-a.G.length-1};var Ib=function(a,b,c,d,e){if((d?a.Oa:Math.random())<(e||a.Da))try{if(c instanceof Cb)var f=c;else f=new Cb,hb(c,function(a,b){var c=f,d=c.Ka++;a=Db(b,a);c.l.push(d);c.v[d]=a});var g=Hb(f,a.Ma,a.Ea,a.La+b+"&");g&&tb(q,g)}catch(l){}};var Jb=null;var Lb=function(a,b){var c=Kb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=void 0};var O=function(a,b){this.C=[];this.F=b||q;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.C=b.google_js_reporting_queue,c=b.google_measure_js_timing);if(null===Jb){Jb="";try{var d=q.top.location.hash;if(d){var e=d.match(/\bdeid=([\d,]+)/);Jb=e?e[1]:""}}catch(f){}}b=Jb;b=b.indexOf&&0<=b.indexOf("1337");this.i=(this.i=null!=c?c:Math.random()<a)||b;a=this.F.performance;this.P=!!(a&&a.mark&&a.clearMarks&&b)};O.prototype.disable=function(){this.C!=this.F.google_js_reporting_queue&&(this.C.length=0,this.P&&va(this.C,this.ha,this));this.i=!1};O.prototype.ha=function(a){if(a&&this.P){var b=this.F.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};O.prototype.start=function(a,b){if(!this.i)return null;a=new Lb(a,b);this.P&&this.F.performance.mark("goog_"+a.uniqueId+"_start");return a};O.prototype.end=function(a){this.i&&"number"==typeof a.value&&(a.duration=Kb()-a.value,this.P&&this.F.performance.mark("goog_"+a.uniqueId+"_end"),this.i&&this.C.push(a))};var Kb=function(){var a=q.performance;return a&&a.now?a.now():u()};var Mb=function(a,b,c,d){this.oa=a;this.Ga=b;this.aa=c;this.da=null;this.Fa=this.V;this.u=void 0===d?null:d;this.va=!1},Ob=function(a,b,c){try{if(a.u&&a.u.i){var d=a.u.start(b.toString(),3);var e=c();a.u.end(d)}else e=c()}catch(g){c=a.aa;try{a.u&&d&&a.u.ha(d);var f=Nb(g);c=a.Fa.call(a,b,f,void 0,void 0)}catch(l){a.V(217,l)}if(!c)throw g;}return e},Q=function(a,b){var c=Pb;return function(d){for(var e=[],f=0;f<arguments.length;++f)e[f-0]=arguments[f];return Ob(c,a,function(){return b.apply(void 0,e)})}};Mb.prototype.V=function(a,b,c,d,e){e=e||this.Ga;try{var f=new Cb;f.fa=!0;N(f,1,"context",a);b.error&&b.meta&&b.id||(b=Nb(b));b.msg&&N(f,2,"msg",b.msg.substring(0,512));b.file&&N(f,3,"file",b.file);0<b.line&&N(f,4,"line",b.line);var g=b.meta||{};if(this.da)try{this.da(g)}catch(ca){}if(d)try{d(g)}catch(ca){}b=[g];f.l.push(5);f.v[5]=b;d=q;b=[];g=null;do{var l=d;if(D(l)){var k=l.location.href;g=l.document&&l.document.referrer||null}else k=g,g=null;b.push(new Bb(k||""));try{d=l.parent}catch(ca){d=null}}while(d&&l!=d);k=0;for(var p=b.length-1;k<=p;++k)b[k].depth=p-k;l=q;if(l.location&&l.location.ancestorOrigins&&l.location.ancestorOrigins.length==b.length-1)for(k=1;k<b.length;++k){var h=b[k];h.url||(h.url=l.location.ancestorOrigins[k-1]||"",h.ka=!0)}var t=new Bb(q.location.href,!1),Ba=b.length-1;for(l=Ba;0<=l;--l){var I=b[l];if(I.url&&!I.ka){t=I;break}}I=null;var kc=b.length&&b[Ba].url;0!=t.depth&&kc&&(I=b[Ba]);var P=new Ab(t,I);P.ta&&N(f,6,"top",P.ta.url||"");N(f,7,"url",P.sa.url||"");Ib(this.oa,e,f,this.va,c)}catch(ca){try{Ib(this.oa,e,{context:"ecmserr",rctx:a,msg:Qb(ca),url:P.sa.url},this.va,c)}catch(xc){}}return this.aa};var Nb=function(a){return new Rb(Qb(a),a.fileName,a.lineNumber)},Qb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(e){b=c}}return b},Rb=function(a,b,c){wb.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};aa(Rb,wb);var Pb;if(vb&&!D(M)){var Sb="."+w.domain;try{for(;2<Sb.split(".").length&&!D(M);)w.domain=Sb=Sb.substr(Sb.indexOf(".")+1),M=window.parent}catch(a){}D(M)||(M=window)}var R=M,Tb=new O(1,R);Pb=new Mb(new function(){var a=void 0===a?x:a;this.Ma="http:"===a.location.protocol?"http:":"https:";this.Ea="pagead2.googlesyndication.com";this.La="/pagead/gen_204?id=";this.Da=.01;this.Oa=Math.random()},"jserror",!0,Tb);"complete"==R.document.readyState?R.google_measure_js_timing||Tb.disable():Tb.i&&F(R,"load",function(){R.google_measure_js_timing||Tb.disable()});var S=function(a,b){return Q(a,b)};if(w&&w.URL){var ib=w.URL,Ub=!(ib&&0<jb().length);Pb.aa=Ub}var T=function(a,b,c,d){F(a,b,Q(d,c),{capture:!1})},Vb=function(a){var b=["IMG","FRAME","IFRAME"];return za(b,function(b){return a.nodeName==String(b)})?[a]:ya(b,function(b,d){return b.concat(Aa((a||document).getElementsByTagName(String(d))))},[])},Wb=function(a,b){if(a){var c=0,d=null;a=Vb(a);for(var e=0;e<a.length;e++){var f=!1;d=a[e];switch(d.nodeName){case "IMG":if(d.complete||d.naturalWidth)f=!0;break;case "FRAME":case "IFRAME":"complete"==d.readyState&&(f=!0)}f||(c++,T(d,"load",function(){c--;c||b(null)},116))}a=d=null;c||b(null)}},Xb=function(a,b){var c=0,d=function(){a();c++;10>c&&x.setTimeout(Q(b,d),100)};d()};var Yb=function(a,b){this.g=a||0;this.f=b||""},Zb=function(a){return!!a.g||!!a.f},U=function(a,b){a.g&&(b[4]=a.g);a.f&&(b[12]=a.f)};Yb.prototype.match=function(a){return Zb(this)&&Zb(a)?this.f||a.f?this.f==a.f:this.g||a.g?this.g==a.g:!1:!1};Yb.prototype.toString=function(){var a=""+this.g;this.f&&(a+="-"+this.f);return a};var $b=function(a){var b=[];a.g&&b.push("adk="+a.g);a.f&&b.push("exk="+a.f);return b},ac=function(a){var b=[];Fa(a,function(a,d){d=encodeURIComponent(d);r(a)&&(a=encodeURIComponent(a));b.push(d+"="+a)});b.push("24="+(new Date).getTime());return b.join("\n")},V=0,bc=0,cc=function(a){var b=0,c=x;try{if(c&&c.Goog_AdSense_getAdAdapterInstance)return c}catch(d){}for(;c&&5>b;){try{if(c.google_osd_static_frame)return c}catch(d){}try{if(c.aswift_0&&(!a||c.aswift_0.google_osd_static_frame))return c.aswift_0}catch(d){}b++;c=c!=c.parent?c.parent:null}return null},dc=function(a,b,c,d,e,f,g,l){g=g||ka;if(10<bc)x.clearInterval(V),g();else if(++bc,x.postMessage&&Zb(b)){if(g=cc(!0)){var k={};U(b,k);k[0]="goog_request_monitoring";k[6]=a;c&&(k[27]=c);k[16]=!!d;e&&e.length&&(k[17]=e.join(","));f&&(k[19]=f);l&&(k[28]=l);try{var p=ac(k);g.postMessage(p,"*")}catch(h){}}}else x.clearInterval(V),g()};var ec=function(){this.b=null;this.N=this.ea=this.B=0},fc=function(a){return wa(a,function(a){return 15<a.clientHeight&&15<a.clientWidth})},gc=function(a){if(!a.length)return null;var b=fc(a);return 0<b.length?b[0]:a[0]},ic=function(a){var b=null,c=(x.document||document).getElementsByTagName("SCRIPT");0<c.length&&(c=c[c.length-1])&&c.parentElement&&(b=c.parentElement);b||(b=x.document.body);c=new ec;if(b){a=String(a);var d=b||document;if(d.querySelectorAll&&d.querySelector)d=d.querySelectorAll(".GoogleActiveViewClass");else{var e;d=document;var f,g;d=b||d;if(d.querySelectorAll&&d.querySelector)d=d.querySelectorAll(".GoogleActiveViewClass");else if(d.getElementsByClassName)d=g=d.getElementsByClassName("GoogleActiveViewClass");else{g=d.getElementsByTagName("*");var l={};for(e=f=0;d=g[e];e++){var k=d.className,p;if(p="function"==typeof k.split)p=0<=ua(k.split(/\s+/),"GoogleActiveViewClass");p&&(l[f++]=d)}l.length=f;d=l}}d=Aa(d);e=hc("googleAvAdk");f=[];l=[];g=ja(d);for(k=g.next();!k.done;k=g.next())k=k.value,k.hasAttribute(e)?k.getAttribute(e)==a&&f.push(k):l.push(k);c.B=d.length;c.ea=f.length;c.N=f.length+l.length;c.b=gc(f);c.b||(c.b=gc(l));!c.b&&b.children&&(a=fc(Aa(b.children)),c.B=b.children.length,c.N=a.length,1==c.B?c.b=b.children[0]:1==c.N?c.b=a[0]:1<c.B&&(c.b=b))}return c},hc=function(a){return"data-"+String(a).replace(/([A-Z])/g,"-$1").toLowerCase()};var jc=function(){var a=/[&\?#]exk=([^& ]+)/.exec(x.location.href);return a&&2==a.length?a[1]:null};var W=function(){this.s=0;this.w="";this.A=[];this.H=this.h=this.j=!1;this.pa=!0;this.la=this.ba=!1;this.Ha=new E;this.M=this.ca=this.Y=!1;this.ra=this.qa=0;this.K=[];this.a=null;this.U="";this.S=[];this.ga=null;this.W=[];this.J=!1;this.I=this.O="";this.Na=(new Date).getTime();this.D=null;this.ia=!1;this.ua=this.c=this.m=0;this.X="";this.$=!1},X=function(a){return(a=a.D)?a.b:null},lc=function(a){return X(a)?(a=X(a))?a.hasAttribute(hc("googleAvDm"))?1:2:0:0};W.prototype.Ja=function(a){var b=/^(http[s]?:)?\/\//.test(a)?a:mc(a);if(this.M&&0<=ua(this.A,b))return!0;(a=!a)||(a=!(null!==x&&x!=x.top));if(a||this.J||this.ca&&!this.Y)return!1;this.M=!0;if(this.Y){a=nc(this,b,this.U,!0);var c=u()-this.ra;a=zb(a,"tsvp",c);L(x,a)}this.A.push(b);this.qa=u();return!0};W.prototype.Z=function(a,b,c){this.j&&(this.pa||3!=(void 0===c?3:c)||this.la)&&Y(this,a,b,!0);if(this.H||this.h&&this.ba)Y(this,a,b),this.h=this.H=!1};var oc=function(a){return(a=a.ga)?2!=a():!0},Y=function(a,b,c,d){c=void 0===c?a.U:c;d=void 0===d?!1:d;if(c&&!a.J&&(2==a.c||d)&&oc(a)){for(var e=0;e<a.A.length;++e){var f=nc(a,a.A[e],c,d);L(b,f)}a.ca=!0;d?a.j=!1:a.J=!0}},mc=function(a,b){var c=[];a&&c.push("avi="+a);b&&c.push("cid="+b);return c.length?"//pagead2.googlesyndication.com/activeview?"+c.join("&"):"//pagead2.googlesyndication.com/activeview"},nc=function(a,b,c,d){d=(void 0===d?0:d)?"osdim":a.H?"osd2":"osdtos";b=[b,-1<b.indexOf("?")?"&id=":"?id=",d];"osd2"==d&&a.h&&a.ba&&b.push("&ts=1");b.push("&ti=1");b.push("&",c);b.push("&uc="+a.ua);X(a)?b.push("&tgt="+(X(a)?a.D.b.tagName:"")):b.push("&tgt=nf");b.push("&cl="+(a.ia?1:0));a.M&&(b.push("&lop=1"),c=u()-a.qa,b.push("&tslp="+c));if(c=a.D)b.push("&cec="+c.B),b.push("&clc="+c.N),b.push("&cac="+c.ea),c.b?b.push("&cd="+c.b.clientWidth+"x"+c.b.clientHeight):b.push("&cd=nf");c=b.join("");for(b=0;b<a.S.length;b++){d="";try{d=a.S[b]()}catch(f){}var e="max_length";2<=d.length&&(3==d.length&&(e=d[2]),c=qa(c,encodeURIComponent(d[0]),encodeURIComponent(d[1]),e))}2E3<c.length&&(c=c.substring(0,2E3));return c},Z=function(a,b){if(a.O){try{var c=qa(a.O,"vi",b);ub()&&L(K.contentWindow,c)}catch(d){}0<=ua(pc,b)&&(a.O="")}};W.prototype.Aa=function(a){this.S.push(a)};W.prototype.Ca=function(a){this.W.push(a)};W.prototype.Ba=function(a){this.ga=a};var qc=function(a,b){if(a.a&&Zb(a.a)){var c=document.domain;a.m=1;V=x.setInterval(Q(197,pa(dc,a.c,a.a,c,a.h,a.K,a.X,void 0,void 0===b?!1:b)),500)}},rc=function(a,b){var c=ac(a);try{Xb(function(){var a=cc(!1),b=!a;!a&&x&&(a=x.parent);if(a&&a.postMessage)try{a.postMessage(c,"*"),b&&x.postMessage(c,"*")}catch(f){}},b)}catch(d){}},sc=function(a,b){switch(b){case 1:a[26]=!0;break;case 2:a[26]=!1}},tc=function(a){if(1==lc(a)){var b=X(a);if(q.MutationObserver&&b){var c={attributes:!0};c.attributeFilter=[hc("googleAvDm")];(new q.MutationObserver(Q(283,a.na))).observe(b,c)}else b&&b.addEventListener?b.addEventListener("DOMAttrModified",Q(283,a.na)):Pb.V(286,Error(),void 0,void 0)}b={};a.a&&U(a.a,b);b[0]="goog_dom_content_loaded";a=lc(a);sc(b,a);rc(b,114)};W.prototype.na=function(){var a=lc(this);if(0!=a){var b={};this.a&&U(this.a,b);b[0]="goog_av_measurement_hold_update";sc(b,a);rc(b,282)}};var uc=function(a,b){if(r(b)){var c=a.Ha;b=b.split("&");for(var d=b.length-1;0<=d;d--){var e=b[d].split("="),f=e[1];(e=c.ja[e[0]])&&e.ab(parseInt(f,10))&&e.$a()&&b.splice(d,1)}c=b.join("&").split("&");for(b=c.length-1;0<=b;b--)d=c[b],f=kb,d==f.ya?(a.pa=!1,c.splice(b,1)):d==f.xa?(a.h=!1,c.splice(b,1)):d==f.wa&&(a.$=!0,c.splice(b,1));a.X=c.join("&")}},vc=function(a,b){X(a)||(a.D=ic(b),X(a)&&Wb(a.D.b,function(){var b={};a.a&&U(a.a,b);b[0]="goog_creative_loaded";var d=lc(a);sc(b,d);rc(b,115);a.ia=!0}))};W.prototype.Ia=function(a,b,c,d,e,f,g,l,k,p){var h=this;this.s=a;this.O=b;this.I=d;this.j=f;g&&uc(this,g);this.h=f;1==l?this.K.push(947190538):2==l?this.K.push(947190541):3==l&&this.K.push(947190542);this.a=new Yb(e,jc());T(x,"load",function(){Z(h,"-1")},117);T(x,"message",function(a){if(a&&a.data&&r(a.data)){var b=a.data;if(r(b)){var c={};b=b.split("\n");for(var d=0;d<b.length;d++){var e=b[d].indexOf("=");if(!(0>=e)){var f=Number(b[d].substr(0,e));e=b[d].substr(e+1);switch(f){case 5:case 8:case 11:case 15:case 16:case 18:case 26:e="true"==e;break;case 4:case 7:case 6:case 14:case 20:case 21:case 22:case 23:case 24:case 25:e=Number(e);break;case 3:case 19:if("function"==la(decodeURIComponent))try{e=decodeURIComponent(e)}catch(wc){throw Error("Error: URI malformed: "+e);}break;case 17:e=xa(decodeURIComponent(e).split(","),Number)}c[f]=e}}c=c[0]?c:null}else c=null;if(c&&(b=new Yb(c[4],c[12]),h.a&&h.a.match(b))){for(b=0;b<h.W.length;b++)h.W[b](c);c&&(b=100*c[25],"number"==typeof b&&!isNaN(b)&&(window.document["4CGeArbVQ"]=b|0));void 0!=c[18]&&(h.la=c[18]);h.$&&void 0!=c[7]&&0<c[7]&&(b="//pagead2.googlesyndication.com/pagead/gen_204?id=ac_opp&vsblt="+c[7],h.w&&(b+="&avi="+h.w),L(x,b),h.$=!1);b=c[0];if("goog_acknowledge_monitoring"==b)x.clearInterval(V),h.m=2;else if("goog_get_mode"==b){h.m=1;d={};h.a&&U(h.a,d);d[0]="goog_provide_mode";d[6]=h.c;d[19]=h.X;d[16]=h.h;try{var g=ac(d);a.source.postMessage(g,a.origin)}catch(wc){}x.clearInterval(V);h.m=2}else"goog_update_data"==b?c&&(h.U=c[3],++h.ua):"goog_image_request"==b&&(h.Z(x,c[3]),c[5]||c[11]||Z(h,"0"));if("goog_update_data"==b||"goog_image_request"==b)(1==h.c||2==h.c||h.j)&&c[5]&&(a=1==c[15]&&"goog_update_data"==b,h.ba=!0,Z(h,"1"),h.I&&oc(h)&&(g=h.I,ub()&&L(K.contentWindow,g),h.I=""),h.j&&!a&&(Y(h,x,void 0,!0),h.Y=!0,h.ra=u()),h.j||1!=h.c||(h.J=!0)),(1==h.c||2==h.c||h.j)&&c[11]&&(h.h=!1,Z(h,"3"),h.j&&Y(h,x,void 0,!0))}}},118);this.w=c||"";this.A=[p||mc(c,k)];T(x,"unload",function(){h.Z(x);Z(h,"0");if(2>h.m&&!h.h){var a=void 0===a?x:a;if(2==h.c){var b="hs="+h.m,c=[];h.w&&c.push("avi="+h.w);c.push("id=osd2");c.push("ovr_value="+h.s);h.M&&c.push("lop=1");h.a&&(c=c.concat($b(h.a)));c.push("tt="+((new Date).getTime()-h.Na));c.push(b);a.document&&a.document.referrer&&c.push("ref="+encodeURIComponent(a.document.referrer));try{L(a,"//pagead2.googlesyndication.com/pagead/gen_204?"+c.join("&"))}catch(P){}}}},119);var t=x.document;0==({visible:1,hidden:2,prerender:3,preview:4}[t.webkitVisibilityState||t.mozVisibilityState||t.visibilityState||""]||0)?(Y(this,x,"r=pv",!0),qc(this,!0)):(!t.readyState||"complete"!=t.readyState&&"loaded"!=t.readyState?!Ha()||0<=ta(Ja(),11)?T(t,"DOMContentLoaded",function(){tc(h)},121):T(t,"readystatechange",function(){"complete"!=t.readyState&&"loaded"!=t.readyState||tc(h)},120):tc(this),-1==this.s?this.c=f?3:1:-2==this.s?this.c=3:0<this.s&&(this.c=2,this.H=!0),this.h&&!this.H&&-1==this.s&&(this.c=2),qc(this),Xb(function(a){vc(h,a)},122))};W.T=void 0;W.o=function(){return W.T?W.T:W.T=new W};var pc=["1","0","3"];v("osdlfm",S(123,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=W.o()).Ia.apply(d,[].concat(n(b)))}));v("osdlac",S(124,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=W.o()).Aa.apply(d,[].concat(n(b)))}));v("osdlamrc",S(125,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=W.o()).Ca.apply(d,[].concat(n(b)))}));v("osdsir",S(126,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=W.o()).Z.apply(d,[].concat(n(b)))}));v("osdacrc",S(127,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=W.o()).Ba.apply(d,[].concat(n(b)))}));v("osdpcls",S(128,function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];var d;return(d=W.o()).Ja.apply(d,[].concat(n(b)))}));}).call(this);
