'use strict';(function(a){a(document).ready(function(){var b=samProOptions,c='1'===b.doStats,d=1===parseInt(b.jsStats,10),e='1'===b.load,f=b.ajaxUrl,g=b.samProNonce,h=b.clauses,j=[],i=[];if(e){c&&(a('div.'+b.place+', span.'+b.place).each(function(b,c){var d=c.id.split('_'),e=d[1],h=d[2];j.push({aid:e,pid:h}),a(c).find('a').on('click',function(){a.post(f,{action:'sam_click',aid:e,pid:h,sam_pro_nonce:g})}),a(c).find('iframe').iframeTracker({blurCallback:function blurCallback(){a.post(f,{action:'sam_click',aid:e,pid:h,sam_pro_nonce:g})}})}),d&&!!j&&a.post(f,{action:'sam_hits',hits:j,sam_pro_nonce:g}));var k=[];a('div.'+b.ad+', span.'+b.ad).each(function(b,c){var d=a(c).data('spc');'undefined'==typeof d&&(d=0);var e=c.id.split('_'),f=e[1],g=e[2];k.push({pid:g,aid:f,codes:d,eid:c.id})}),0<k.length&&a.post(f,{action:'sam_load_ads',ads:k,data:h,sam_pro_nonce:g}).done(function(b){b.success&&a.each(b.data,function(b,d){if(a('#'+d.eid).replaceWith(d.ad),c){var e=a('#'+d.cid);e.find('a').on('click',function(){a.post(f,{action:'sam_click',aid:d.aid,pid:d.pid,sam_pro_nonce:g})}),e.find('iframe').iframeTracker({blurCallback:function blurCallback(){a.post(f,{action:'sam_click',aid:d.aid,pid:d.pid,sam_pro_nonce:g})}}),i.push({pid:d.pid,aid:d.aid})}}),c&&d&&!!i&&a.post(f,{action:'sam_hits',hits:i,sam_pro_nonce:g})})}else c&&(a('div.'+b.container+', span.'+b.container).each(function(b,c){var d=c.id.split('_'),e=d[1],h=d[2];j.push({aid:e,pid:h}),a(c).find('a').on('click',function(){a.post(f,{action:'sam_click',aid:e,pid:h,sam_pro_nonce:g})}),a(c).find('iframe').iframeTracker({blurCallback:function blurCallback(){a.post(f,{action:'sam_click',aid:e,pid:h,sam_pro_nonce:g})}})}),d&&!!j&&a.post(f,{action:'sam_hits',hits:j,sam_pro_nonce:g}))})})(jQuery);

//# sourceMappingURL=sam.pro.layout.min.js.map