!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.bc7354ca6ae32b9a98350e133ae534eb.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.74a48bc96c4f631a21173fa117c1b988.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.ddaf0fe2d47c32dcc898bdc4a22a975d.js","discovery/main":"https://c.disquscdn.com/next/embed/discovery.bundle.dd74556cf657ab1e8f3235a63e5b93a7.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed",paths:["lounge/main","discovery/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.9fcff11af667507b1757062f0192b821.js",a.body.appendChild(c)}();