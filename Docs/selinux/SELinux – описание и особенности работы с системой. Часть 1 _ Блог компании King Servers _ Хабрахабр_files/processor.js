window.adcm.ext({knownIds:[1,1041,1067,1079,2025,2039,2210,6015,6016],encode:function(a){return encodeURIComponent(a)},equal:function(a,b){if(!a||!b)return!1;if(a.length!=b.length)return!1;for(var c=0,d=a.length;d>c;c++)if(a[c]instanceof Array&&b[c]instanceof Array){if(!this.equal(a[c],b[c]))return!1}else if(a[c]!=b[c])return!1;return!0},blank:function(a){return a||""},aggregate:function(a){var b=document.referrer,c=window.location.hash,d=[],e="i="+this.session+"."+Math.round(1e15*Math.random());if(a.profileId&&a.platformId){var f=this.encode(a.platformId),g=this.encode(a.profileId);e+="&a="+f+"&e="+g,d.push("ss:"+f),d.push("up:"+g),d.push("sync:up")}a&&a.event&&d.push("et:"+this.encode(a.event)),a&&a.price&&d.push("ip:"+this.encode(a.price)),a&&a.elapsed_seconds&&d.push("es:"+this.encode(a.elapsed_seconds)),this.params||(this.params={referrer:b?/\/\/([^#]*)/gi.exec(b)[1]:/\/\/([^#]*)/gi.exec(window.location.href)[1],hash:null,tags:null});var h=function(a){return a=a.replace(/[^a-z0-9\.]+/g,"_"),a=a.replace(/[\_\_]+/g,"_"),a.replace(/[\.]+/g,"__")},i=window.location.hostname;"www."===i.substring(0,4)&&(i=i.substring(4,i.length));var j=h(i.substring(i.lastIndexOf(".",i.lastIndexOf(".")-1)+1));i=h(i),i!==j?(d.push("dn:"+this.encode(i)),d.push("dn:"+this.encode(j))):d.push("dn:"+this.encode(j)),a.tags&&d.push("tg:"+this.encode(a.tags.join(" ")));var k=/\/\/([^#]*)/gi.exec(window.location.href)[1];return k!==this.params.referrer&&(d.push("cr:"+this.encode(b)),this.params.referrer=k),this.blank(c)!==this.blank(this.params.hash)&&(d.push("rh:"+this.encode(c.substr(1))),this.params.hash=c),d.length>0&&(e+="&c="+d.join(".")),e},relocate:function(a){this.knownIds.indexOf(this.config.id)>=0?this.load(a,window.location.protocol+"//tag.digitaltarget.ru/extensions/extension_"+this.config.id+".js?i="+Math.round(1e15*Math.random())):"function"==typeof a()&&a()},array_unique:function(a){var b=[];return a.forEach(function(a){a=a.trim(),-1===b.indexOf(a)&&b.push(a)}),b},call:function(a){var b=this;a?a.tags?(a.tags=a.tags.concat(b.config.tags),a.tags=b.array_unique(a.tags)):a.tags=b.config.tags:a={tags:b.config.tags},(a.profileId||this.config.profileId)&&(a.profileId=a.profileId||this.config.profileId,a.platformId=a.platformId||this.config.platformId||this.config.id);var c=function(){var c=new Image;"function"==typeof b.config.triggers.push_to_server.success&&(c.onload=b.config.triggers.push_to_server.success),"function"==typeof b.config.triggers.push_to_server.error&&(c.onerror=b.config.triggers.push_to_server.error),c.src=window.location.protocol+"//dmg.digitaltarget.ru/1/"+b.config.id+"/i/i?"+b.aggregate(a)};if(this.loaded)c();else var d=setInterval(function(){b.loaded&&(c(),clearInterval(d))},1e3)},callpixel:function(a){var b=this,c="i="+this.session+"."+Math.round(1e15*Math.random()),d=function(){var b=new Image;b.src=window.location.protocol+"//dmg.digitaltarget.ru/1/"+a+"/i/i?"+c};if(this.loaded)d();else var e=setInterval(function(){b.loaded&&(d(),clearInterval(e))},1e3)},triggers:{page_down_scroll:function(){var a=window.adcm,b=a.config.triggers.page_down_scroll,c=b.param_call,d=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),e=d-b.margin_bottom,f=function(){var d=document.documentElement,g=document.body,h=(d.scrollTop||g&&g.scrollTop||0)-d.clientTop+d.clientHeight;h>e&&(window.removeEventListener("scroll",f,!1),c.event="pds",a.call(c),"function"==typeof b.callback()&&b.callback())};window.addEventListener("scroll",f,!1),window.scrollTo(window.scrollX,window.scrollY-1)},elapsed_seconds:function(){var a=window.adcm,b=a.config.triggers.elapsed_seconds,c=b.param_call;return b.timeouts&&"object"==typeof b.timeouts&&0!==b.timeouts.length?void b.timeouts.forEach(function(d){setTimeout(function(){c.elapsed_seconds=d,a.call(c),"function"==typeof b.callback()&&b.callback()},1e3*d)}):!1},init_call:function(){var a=window.adcm,b=a.config.triggers.init_call,c=b.param_call;a.call(c),"function"==typeof b.callback()&&b.callback()},config:function(){var a=window.adcm,b=a.config.triggers.config,c=function(b){if(0===b.length)return!1;if(b.tags){var c=b.tags.split(" ");a.config.tags=a.config.tags.concat(c),a.config.tags=Array.from(new Set(a.config.tags)),a.config.tags=a.array_unique(a.config.tags)}for(var d in b)"tags"!==d&&"undefined"!=typeof a.config[d]&&(a.config[d]=b[d])};if(b.el_id&&"string"==typeof b.el_id){var d=document.getElementById(b.el_id);if(!d)return!1;c(d.dataset)}else if(b.el_class_name&&"string"==typeof b.el_class_name){var e=document.getElementsByClassName(b.el_class_name);for(inner_i=0;inner_i<e.length;inner_i++){var d=e[inner_i];d&&c(d.dataset)}}"function"==typeof b.callback()&&b.callback()},scroll_to:function(){var a=window.adcm,b=a.config.triggers.scroll_to,c=b.param_call,d=document.documentElement,e=document.body,f=e.getBoundingClientRect();(d.scrollTop||e&&e.scrollTop||0)-d.clientTop+d.clientHeight;!function(){var g={},h=[];for(var i in b.markers){var j=b.markers[i];if(j.el_id&&"string"==typeof j.el_id){var k=document.getElementById(j.el_id);if(!k)continue;var l=k.getBoundingClientRect();b.markers[i]._checkpoint_heigh=l.top-f.top,h.push(b.markers[i]._checkpoint_heigh),g[b.markers[i]._checkpoint_heigh]=b.markers[i]}else if(j.el_class_name&&"string"==typeof j.el_class_name){var m=document.getElementsByClassName(j.el_class_name);for(inner_i=0;inner_i<m.length;inner_i++){var k=m[inner_i];if(k){var l=k.getBoundingClientRect();b.markers[i]._checkpoint_heigh=l.top-f.top,h.push(b.markers[i]._checkpoint_heigh),g[b.markers[i]._checkpoint_heigh]=b.markers[i]}}}}var n=function(){if(0===g.length||0===h.length)return window.removeEventListener("scroll",n,!1),!1;var f=window.innerHeight,i=(d.scrollTop||e&&e.scrollTop||0)-d.clientTop+d.clientHeight,j=i-f/100*(100-b.window_checkpoint_percent),k=Math.min.apply(Math,h);if(k>j)return!1;var l=g[k];return"undefined"==typeof l?(window.removeEventListener("scroll",n,!1),!1):(c.event=l.event,a.call(c),"function"==typeof b.callback()&&b.callback(),"function"==typeof l.callback()&&l.callback(),delete g[k],void h.splice(h.indexOf(k),1))};window.addEventListener("scroll",n,!1),n()}()}}});