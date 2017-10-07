;(function(window,document,$,undefined){"use strict";$.smTimeConverter=function(jsTimestamp){if($.isNumeric(jsTimestamp)){var ctTime=new Date(Number(jsTimestamp)),offset=ctTime.getTimezoneOffset(),ctYear=ctTime.getFullYear(),ctMonth=1+ctTime.getMonth(),ctDays=ctTime.getDate(),ctHours=ctTime.getHours(),ctMinutes=ctTime.getMinutes(),ctSeconds=ctTime.getSeconds(),tzHH=parseInt(Math.abs(offset/60)),tzMM=Math.abs(offset)-tzHH*60,tzStr=(offset<0?'+':'-')+tzHH+':'+tzMM;if(ctMonth<10){ctMonth='0'+ctMonth;};if(ctDays<10){ctDays='0'+ctDays;};if(ctHours<10){ctHours='0'+ctHours;};if(ctMinutes<10){ctMinutes='0'+ctMinutes;};if(ctSeconds<10){ctSeconds='0'+ctSeconds;};if(tzHH<10){tzHH='0'+tzHH;};if(tzMM<10){tzMM='0'+tzMM;};return ctDays+'-'+ctMonth+'-'+ctYear+' '+ctHours+':'+ctMinutes;}else{return false;};};$.smLoader=function(data){var insert,item,root=data.root||false,type=(data.type&&data.type==='link')?'link':'script',params={link:{rel:"stylesheet",type:"text/css",href:root},script:{type:"text/javascript",src:root,async:true}};if(root){item=document.createElement(type);for(var prop in params[type]){item[prop]=params[type][prop];};insert=document.getElementsByTagName(type)[0];insert.parentNode.insertBefore(item,insert);}else{console.log("smLoader - Incorrect URL:","\nData:",data);return false;};};$(document).ready(function(){$("time[data-timestamp]").each(function(){var $this=$(this),t=parseInt($this.data('timestamp'));t=$.smTimeConverter(t+'000');if(t){$this.html(t);};});$('body').prepend('<div class="scroll-top"><i class="fa fa-hand-o-up fa-2x fa-fw gray-font"></i></div>');var scrollButtonEl=$('.scroll-top');scrollButtonEl.hide();$(window).scroll(function(){if($(window).scrollTop()<20){$('.scroll-top').fadeOut();}else{$('.scroll-top').fadeIn();};});scrollButtonEl.click(function(){$("html, body").animate({scrollTop:0},300);return false;});$('#menuLink').click(function(){$(this).toggleClass('active');$('#menu, #layout').toggleClass('active');});if($("a.sm-lightbox, a.sm-fancybox").length>0){$.smLoader({root:"/js/fancybox/source/jquery.fancybox-2.1.5-sm.1.0.min.js"});};if($(".ydisk-onclick, .ydisk-onready").length>0){$.smLoader({root:"/js/ydisk/jquery.ydisk.min.js?v=1.0.2"});};$('#sm-sign-in-link').attr('href',function(){return this+window.atob('L2F1dGgvbG9naW4=');});$('#sm-signup-link').attr('href',function(){return this+window.atob('L2F1dGgvc2lnbnVw');});});}(window,document,jQuery));