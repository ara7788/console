!function(e){e.fn.menuAim=function(t){var n=e(this),o=null,u=[],i=null,r=null,c=e.extend({rowSelector:"> li",submenuSelector:"*",tolerance:100,enter:e.noop,exit:e.noop,activate:e.noop,deactivate:e.noop},t),l=3,f=100,a=function(e){u.push({x:e.pageX,y:e.pageY}),u.length>l&&u.shift()},s=function(){r&&clearTimeout(r)},m=function(){r&&clearTimeout(r),c.enter(this),v(this)},x=function(){c.exit(this)},h=function(e){e!=o&&(o&&c.deactivate(o),c.activate(e),o=e)},v=function(e){var t=y();t?r=setTimeout(function(){v(e)},t):h(e)},y=function(){function t(e,t){return(t.y-e.y)/(t.x-e.x)}if(!o||!e(o).is(c.submenuSelector))return 0;var r=n.offset(),l={x:r.left+n.outerWidth(),y:r.top-c.tolerance},a={x:r.left+n.outerWidth(),y:r.top+n.outerHeight()+c.tolerance},s=u[u.length-1],m=u[0];if(!s)return 0;if(m||(m=s),m.x<r.left||m.x>a.x||m.y<r.top||m.y>a.y)return 0;if(i&&s.x==i.x&&s.y==i.y)return 0;var x=t(s,l),h=t(s,a),v=t(m,l),y=t(m,a);return x<v&&h>y?(i=s,f):(i=null,0)},p=function(){n.mouseleave(s).find(c.rowSelector).mouseenter(m).mouseleave(x),e(document).mousemove(a)};return p(),this}}(jQuery);