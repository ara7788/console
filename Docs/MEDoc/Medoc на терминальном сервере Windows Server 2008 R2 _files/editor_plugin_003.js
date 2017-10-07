(function(){var DOM=tinymce.DOM;tinymce.PluginManager.requireLangPack('ddcode');tinymce.create('tinymce.plugins.DDCodePlugin',{init:function(ed,url){var SFcodeEl=null;ed.onInit.add(function(){ed.dom.loadCSS(url+"/css/content.css")});ed.addCommand('mceDDCode',function(ui,v){IsSFcode=checkSFcode(ed.selection.getNode());e=ed.selection.getNode();if(e&&IsSFcode){var SFcodeElparent=SFcodeEl.parentNode;childcount=SFcodeEl.childNodes.length;for(j=0;j<childcount;j++){SFcodeElparent.insertBefore(SFcodeEl.childNodes[0],SFcodeEl)}var removed=SFcodeElparent.removeChild(SFcodeEl);ed.execCommand('mceRepaint')}else if(e){selText=ed.selection.getContent();if(selText.match(/<.+\/?>/))html='<div class="sfcode">'+selText+'</div>';else html='<span class="sfcode">'+selText+'</span>';ed.execCommand("mceInsertContent",false,html);ed.execCommand('mceRepaint')}});ed.onNodeChange.add(function(ed,cm,n,co){if(co)selText='';else selText=ed.selection.getContent();IsSFcode=checkSFcode(n);cm.setDisabled('ddcode',(selText=='')&&!IsSFcode);cm.setActive('ddcode',IsSFcode)});ed.addButton('ddcode',{title:'ddcode.desc',cmd:'mceDDCode',image:url+'/img/ddcode.gif'});ed.addShortcut('ctrl+p',ed.getLang('ddcode.desc'),'mceddCodePlugin');ed.onSaveContent.add(function(ed,o){o.content=o.content.replace(/'/g,'&#39;')});function checkSFcode(i){SFcodeEl=null;if(i){while(i&&i.nodeName!='BODY'){if(ed.dom.hasClass(i,'sfcode')){SFcodeEl=i;return true}else i=i.parentNode}}return false}},getInfo:function(){return{longname:'DDCode plugin',author:'Oliver Seidel',authorurl:'http://www.deliciousdays.com',infourl:'http://www.deliciousdays.com',version:"3.0"}}});tinymce.PluginManager.add('ddcode',tinymce.plugins.DDCodePlugin)})();
