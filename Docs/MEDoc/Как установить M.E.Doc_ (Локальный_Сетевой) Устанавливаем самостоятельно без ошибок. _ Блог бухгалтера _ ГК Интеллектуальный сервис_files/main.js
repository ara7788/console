jQuery(document).ready(function($){$('.cd-testimonials-wrapper').flexslider({selector:".cd-testimonials > li",animation:"slide",controlNav:false,slideshow:false,smoothHeight:true,start:function(){$('.cd-testimonials').children('li').css({'opacity':1,'position':'relative'});}});$('.cd-see-all').on('click',function(){$('.cd-testimonials-all').addClass('is-visible');});$('.cd-testimonials-all .close-btn').on('click',function(){$('.cd-testimonials-all').removeClass('is-visible');});$(document).keyup(function(event){if(event.which=='27'){$('.cd-testimonials-all').removeClass('is-visible');}});$('.cd-testimonials-all-wrapper').children('ul').masonry({itemSelector:'.cd-testimonials-item'});});