!function(){var e=Handlebars.template,t=Handlebars.templates=Handlebars.templates||{};t.search=e({1:function(e){var t,a="function",n=this.escapeExpression;return n((t=e&&e.pagemap,t=null==t||t===!1?t:t.techarticle,t=null==t||t===!1?t:t["0"],t=null==t||t===!1?t:t.headline,typeof t===a?t.apply(e):t))},3:function(e,t,a,n){var r,s="function",i=this.escapeExpression;return i((r=t.title||e&&e.title,typeof r===s?r.call(e,{name:"title",hash:{},data:n}):r))},5:function(e){var t,a="function",n=this.escapeExpression;return"\n      "+n((t=e&&e.pagemap,t=null==t||t===!1?t:t.metatags,t=null==t||t===!1?t:t["0"],t=null==t||t===!1?t:t["og:description"],typeof t===a?t.apply(e):t))+"\n      "},7:function(e,t,a,n){var r,s="function",i=this.escapeExpression;return"\n        "+i((r=t.snippet||e&&e.snippet,typeof r===s?r.call(e,{name:"snippet",hash:{},data:n}):r))+"\n    "},compiler:[5,">= 2.0.0"],main:function(e,t,a,n){var r,s,i="function",o=this.escapeExpression,l='<div class="library-search-result">\n  <h6 class="library-search-result-title">\n    <a href="'+o((s=t.link||e&&e.link,typeof s===i?s.call(e,{name:"link",hash:{},data:n}):s))+'">';return r=t["if"].call(e,(r=e&&e.pagemap,r=null==r||r===!1?r:r.techarticle,r=null==r||r===!1?r:r["0"],null==r||r===!1?r:r.headline),{name:"if",hash:{},fn:this.program(1,n),inverse:this.program(3,n),data:n}),(r||0===r)&&(l+=r),l+='</a>\n  </h6>\n\n  <p class="library-search-result-desc">\n    ',r=t["if"].call(e,(r=e&&e.pagemap,r=null==r||r===!1?r:r.metatags,r=null==r||r===!1?r:r["0"],null==r||r===!1?r:r["og:description"]),{name:"if",hash:{},fn:this.program(5,n),inverse:this.program(7,n),data:n}),(r||0===r)&&(l+=r),l+"\n  </p>\n</div>\n"},useData:!0})}();