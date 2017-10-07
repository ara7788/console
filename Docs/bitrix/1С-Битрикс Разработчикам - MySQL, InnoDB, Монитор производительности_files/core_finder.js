(function(e){if(BX.Finder)return;BX.Finder=function(n,t,i,d,r){if(typeof r=="undefined"){r=e}BX.Finder.container=n;BX.Finder.context=t.toLowerCase();BX.Finder.panels=i;BX.Finder.lang=d;BX.Finder.elements=[];BX.Finder.mapElements=[];BX.Finder.searchBox=[];BX.Finder.searchTab=[];BX.Finder.searchPanel=[];BX.Finder.selectedProvider={};BX.Finder.selectedElement={};BX.Finder.selectedElements=[];BX.Finder.selectedType={};BX.Finder.disabledId=[];BX.Finder.disabledElement=[];BX.Finder.searchTimeout=null;BX.Finder.loadPlace={};if(BX.Finder.context=="access"){BX.Finder.elements=BX.findChildren(n,{className:"bx-finder-element"},true);for(var a=0;a<BX.Finder.elements.length;a++){BX.Finder.mapElements[a]=BX.Finder.elements[a].getAttribute("rel");BX.Finder.onDisableItem(a)}BX.addCustomEvent(BX.Access,"onSelectProvider",BX.Finder.onSelectProvider);BX.addCustomEvent(BX.Access,"onDeleteItem",BX.Finder.onDeleteItem);BX.addCustomEvent(BX.Access,"onAfterPopupShow",BX.Finder.onAfterPopupShow)}BX.Finder.dBScheme={stores:[{name:"users",keyPath:"id",autoIncrement:true,indexes:[{name:"id",keyPath:"id",unique:true},{name:"checksum",keyPath:"checksum",unique:true}]},{name:"sonetgroups",keyPath:"id",autoIncrement:true,indexes:[{name:"id",keyPath:"id",unique:true},{name:"checksum",keyPath:"checksum",unique:true}]},{name:"menuitems",keyPath:"id",autoIncrement:true,indexes:[{name:"id",keyPath:"id",unique:false},{name:"checksum",keyPath:"checksum",unique:true}]}],version:"2"};BX.Finder.dBVersion=7;if(BX.util.in_array(BX.Finder.context,["destination","searchtitle"])){BX.addCustomEvent(r,"initFinderDb",function(e,n,t,i,d){setTimeout(function(){BX.Finder.checkInitFinderDb(e,n,BX.Finder.dBVersion,i,d)},600)})}};BX.Finder.onAddItem=function(e,n,t){elementId=BX(t).getAttribute("rel");if(BX.Finder.selectedElement[elementId]){if(BX.Finder.context=="access"){for(var i=0;i<BX.Finder.selectedElement[elementId].length;i++){BX.removeClass(BX.Finder.selectedElement[elementId][i],"bx-finder-box-item-selected")}BX.Access.RemoveSelection(e,elementId)}else BX.Finder.onDeleteItem({provider:e,id:elementId});return false}if(!BX.Finder.selectedElement[elementId])BX.Finder.selectedElement[elementId]=[];BX.Finder.selectedElement[elementId].push(t);BX.addClass(t,"bx-finder-box-item-selected");if(n==1){elementTextBox=BX.findChild(t,{className:"bx-finder-box-item-text"},true)}else if(n==2){elementTextBox=BX.findChild(t,{className:"bx-finder-box-item-t2-text"},true)}else if(n==3){elementTextBox=BX.findChild(t,{className:"bx-finder-box-item-t3-name"},true)}else if(n==4){elementTextBox=BX.findChild(t,{className:"bx-finder-box-item-t3-name"},true)}else if(n==5){elementTextBox=BX.findChild(t,{className:"bx-finder-box-item-t5-name"},true)}else if(n=="structure"){elementTextBox=BX.findChild(t,{className:"bx-finder-company-department-employee-name"},true)}else if(n=="structure-checkbox"){elementTextBox=BX.findChild(t,{className:"bx-finder-company-department-check-text"},true)}if(n=="structure-checkbox")elementText=elementTextBox.getAttribute("rel");else elementText=elementTextBox.innerHTML;if(BX.Finder.context=="access")BX.Access.AddSelection({provider:e,id:elementId,name:elementText});return false};BX.Finder.onDeleteItem=function(e){if(BX.Finder.selectedElement[e["id"]]){for(var n=0;n<BX.Finder.selectedElement[e["id"]].length;n++){BX.removeClass(BX.Finder.selectedElement[e["id"]][n],"bx-finder-box-item-selected")}}delete BX.Finder.selectedElement[e["id"]];return false};BX.Finder.onAfterPopupShow=function(){if(BX.Finder.context=="access"){for(var e=0;e<BX.Finder.mapElements.length;e++)BX.Finder.onDisableItem(e);BX.Finder.onUnDisableItem();BX.addCustomEvent(BX.Access,"onDeleteItem",BX.Finder.onDeleteItem)}};BX.Finder.onSelectProvider=function(e){if(!BX.Finder.searchBox[e["provider"]])BX.Finder.searchBox[e["provider"]]=BX.findChild(BX("access_provider_"+e["provider"]),{tagName:"input",className:"bx-finder-box-search-textbox"},true);BX.focus(BX.Finder.searchBox[e["provider"]])};BX.Finder.onDisableItem=function(e){element=BX.Finder.elements[e];elementId=BX.Finder.mapElements[e];if(BX.Finder.context=="access"&&BX.Access.obAlreadySelected[elementId]){if(BX.Access.showSelected){BX.addClass(element,"bx-finder-box-item-selected");if(!BX.Finder.selectedElement[elementId])BX.Finder.selectedElement[elementId]=[];BX.Finder.selectedElement[elementId].push(element)}else if(BX.util.array_search(element,BX.Finder.disabledElement)==-1){BX.addClass(element,"bx-finder-element-disabled");if(element.getAttribute("onclick")!=""){element.setAttribute("proxy_onclick",element.getAttribute("onclick"));element.setAttribute("onclick","")}BX.Finder.disabledId.push(elementId);BX.Finder.disabledElement.push(element)}}};BX.Finder.onUnDisableItem=function(){for(var e=0;e<BX.Finder.disabledId.length;e++){if(typeof BX.Finder.disabledId[e]=="undefined")continue;if(BX.Finder.context=="access"&&!BX.Access.showSelected&&BX.Access.obAlreadySelected[BX.Finder.disabledId[e]])continue;BX.removeClass(BX.Finder.disabledElement[e],"bx-finder-element-disabled");BX.Finder.disabledElement[e].setAttribute("onclick",BX.Finder.disabledElement[e].getAttribute("proxy_onclick"));BX.Finder.disabledElement[e].setAttribute("proxy_onclick","");delete BX.Finder.disabledId[e];delete BX.Finder.disabledElement[e]}};BX.Finder.SwitchTab=function(e,n){var t=BX.findChildren(BX.findChild(e.parentNode.parentNode,{tagName:"td",className:"bx-finder-box-tabs-content-cell"},true),{tagName:"div"});if(!t){return false}if(n!==false)n=true;var i=0;var d=BX.findChildren(e.parentNode,{tagName:"a"});for(var r=0;r<d.length;r++){if(d[r]===e){BX.addClass(d[r],"bx-finder-box-tab-selected");i=r;if(n&&BX.hasClass(d[r],"bx-finder-box-tab-search"))BX.focus(BX.findChild(d[r].parentNode.parentNode,{tagName:"input",className:"bx-finder-box-search-textbox"},true))}else BX.removeClass(d[r],"bx-finder-box-tab-selected")}for(r=0;r<t.length;r++){if(i===r)BX.addClass(t[r],"bx-finder-box-tab-content-selected");else BX.removeClass(t[r],"bx-finder-box-tab-content-selected")}return false};BX.Finder.OpenCompanyDepartment=function(e,n,t){BX.toggleClass(t,"bx-finder-company-department-opened");var i=BX.findNextSibling(t,{tagName:"div"});if(BX.hasClass(i,"bx-finder-company-department-children"))BX.toggleClass(i,"bx-finder-company-department-children-opened");if(!BX.Finder.loadPlace[n]){BX.Finder.loadPlace[n]=BX.findChild(i,{className:"bx-finder-company-department-employees"});var d=null;if(BX.Finder.context=="access"){d="/bitrix/tools/access_dialog.php"}else{d=location.href.split("#");d=d[0]}BX.ajax({url:d,method:"POST",dataType:"html",processData:true,data:{mode:"ajax",action:"structure-item",provider:e,item:n,sessid:BX.bitrix_sessid(),site_id:BX.message("SITE_ID")||""},onsuccess:function(e){BX.Finder.loadPlace[n].innerHTML=e;newElements=BX.findChildren(BX.Finder.loadPlace[n],{className:"bx-finder-element"},true);for(var t=0;t<newElements.length;t++){BX.Finder.elements.push(newElements[t]);BX.Finder.mapElements.push(newElements[t].getAttribute("rel"));BX.Finder.onDisableItem(BX.Finder.mapElements.length-1)}},onfailure:function(e){}})}return false};BX.Finder.OpenItemFolder=function(e){BX.toggleClass(e,"bx-finder-company-department-opened");var n=BX.findNextSibling(e,{tagName:"div"});if(BX.hasClass(n,"bx-finder-company-department-children"))BX.toggleClass(n,"bx-finder-company-department-children-opened");return false};BX.Finder.Search=function(e,n){if(!BX.Finder.searchTab[n])BX.Finder.searchTab[n]=BX.findChild(e.parentNode.parentNode,{className:"bx-finder-box-tab-search"},true);BX.Finder.SwitchTab(BX.Finder.searchTab[n],false);if(!BX.Finder.searchPanel[n])BX.Finder.searchPanel[n]=BX.findChild(e.parentNode.parentNode,{className:"bx-finder-box-tab-content-selected"},true);var t=null;if(BX.Finder.context=="access"){t="/bitrix/tools/access_dialog.php"}else{t=location.href.split("#");t=t[0]}clearTimeout(BX.Finder.searchTimeout);if(e.value!=""){BX.Finder.searchTimeout=setTimeout(function(){BX.Finder.searchTimeout=setTimeout(function(){if(BX.Finder.searchPanel[n].innerHTML==""){BX.Finder.searchPanel[n].appendChild(BX.create("div",{props:{className:"bx-finder-search-wait",innerHTML:BX.Finder.lang["text-search-wait"]}}))}},3e3);BX.ajax({url:t,method:"POST",dataType:"html",processData:true,data:{mode:"ajax",action:"search",provider:n,search:e.value,sessid:BX.bitrix_sessid(),site_id:BX.message("SITE_ID")||""},onsuccess:function(e){if(e==""){BX.Finder.searchPanel[n].innerHTML="";BX.Finder.searchPanel[n].appendChild(BX.create("div",{props:{className:"bx-finder-item-text",innerHTML:BX.Finder.lang["text-search-no-result"]}}))}else{BX.Finder.searchPanel[n].innerHTML=e;newElements=BX.findChildren(BX.Finder.searchPanel[n],{className:"bx-finder-element"},true);for(var t=0;t<newElements.length;t++){BX.Finder.elements.push(newElements[t]);BX.Finder.mapElements.push(newElements[t].getAttribute("rel"));BX.Finder.onDisableItem(BX.Finder.mapElements.length-1)}}clearTimeout(BX.Finder.searchTimeout)},onfailure:function(e){}})},500)}};BX.Finder.checkInitFinderDb=function(n,t,i,d,r){if(typeof i=="undefined"||parseInt(i)<=0){i=6}if(typeof d=="undefined"){d=["users"]}if(typeof r=="undefined"){r=e}BX.indexedDB({name:"BX.Finder"+i+"."+BX.message("USER_ID"),oScheme:BX.Finder.dBScheme.stores,version:BX.Finder.dBScheme.version,callback:BX.delegate(function(e){if(typeof e=="object"){n.obClientDb=e;BX.addCustomEvent("onFinderAjaxLoadAll",BX.Finder.onFinderAjaxLoadAll);var d=null;var a=[];for(var s=0;s<this.entities.length;s++){d=this.entities[s];BX.indexedDB.count(e,d,{callback:BX.delegate(function(e){if(parseInt(e)>0){a.push(this.entity)}else{BX.Finder.loadAll({ob:n,name:t,entity:this.entity,callback:BX.delegate(function(){BX.Finder.initFinderDb(n,[this.entity],r,i);if(i>1){for(var e=1;e<i;e++){BX.indexedDB.deleteDatabase("BX.Finder"+e+"."+BX.message("USER_ID"))}}},{entity:this.entity})})}},{entity:d})})}setTimeout(function(){BX.Finder.initFinderDb(n,a,r,i)},1e3)}},{entities:d})})};BX.Finder.initFinderDb=function(n,t,i,d){if(typeof t=="undefined"){t=["users"]}if(typeof i=="undefined"){i=e}BX.indexedDB({name:"BX.Finder"+d+"."+BX.message("USER_ID"),oScheme:BX.Finder.dBScheme.stores,version:BX.Finder.dBScheme.version,callback:BX.delegate(function(e){if(typeof e=="object"){for(var d=0;d<t.length;d++){entity=t[d];BX.indexedDB.openCursor(e,entity,{},{callback:BX.proxy(function(e){if(typeof n.obClientDbData[this.entity]=="undefined"){n.obClientDbData[this.entity]={};BX.addCustomEvent("findEntityByName",BX.Finder.findEntityByName);BX.addCustomEvent("syncClientDb",BX.Finder.syncClientDb);BX.addCustomEvent("removeClientDbObject",BX.Finder.removeClientDbObject)}n.obClientDbData[this.entity][e.id]=e;BX.Finder.addSearchIndex(n,e)},{entity:entity})})}BX.addCustomEvent(i,"onFinderAjaxSuccess",BX.Finder.onFinderAjaxSuccess)}},{entities:t})})};BX.Finder.addSearchIndex=function(e,n){var t=n.name.toLowerCase().split(" ");for(var i in t){if(typeof e.obClientDbDataSearchIndex[t[i]]=="undefined"){e.obClientDbDataSearchIndex[t[i]]=[]}if(!BX.util.in_array(n.id,e.obClientDbDataSearchIndex[t[i]])){e.obClientDbDataSearchIndex[t[i]].push(n.id)}}};BX.Finder.findEntityByName=function(e,n,t,i){var d=Object.keys(e.obClientDbDataSearchIndex).filter(function(e){return e.indexOf(n.searchString.toLowerCase())===0});if(d.length<=0&&BX.message("LANGUAGE_ID")=="ru"&&BX.correctText){n.searchString=BX.correctText(n.searchString);d=Object.keys(e.obClientDbDataSearchIndex).filter(function(e){return e.indexOf(n.searchString.toLowerCase())===0})}var r=[];for(var a in d){if(d.hasOwnProperty(a)){BX.util.array_merge(r,e.obClientDbDataSearchIndex[d[a]])}}i[n.searchString.toLowerCase()]=BX.util.array_unique(r)};BX.Finder.onFinderAjaxSuccess=function(e,n,t){if(typeof t=="undefined"){t="users"}if(typeof e!="undefined"){for(var i in e){if(e.hasOwnProperty(i)){oEntity=e[i];if(typeof n.obClientDbData[t]=="undefined"||typeof n.obClientDbData[t][oEntity.id]=="undefined"||n.obClientDbData[t][oEntity.id].checksum!=oEntity.checksum){if(typeof n.obClientDbData[t]=="undefined"){n.obClientDbData[t]=[]}BX.indexedDB.updateValue(n.obClientDb,t,oEntity,i,{error:function(e,i){if(typeof e!="undefined"&&typeof e.srcElement!="undefined"&&typeof e.srcElement.error!="undefined"&&typeof e.srcElement.error.name!="undefined"&&e.srcElement.error.name=="ConstraintError"){BX.indexedDB.deleteValueByIndex(n.obClientDb,t,"id",i,{})}}});n.obClientDbData[t][oEntity.id]=oEntity;BX.Finder.addSearchIndex(n,oEntity)}}}}};BX.Finder.onFinderAjaxLoadAll=function(e,n,t){if(typeof BX.Finder.onFinderAjaxLoadAll.loadedEntities=="undefined"){BX.Finder.onFinderAjaxLoadAll.loadedEntities=[]}if(BX.util.in_array(t,BX.Finder.onFinderAjaxLoadAll.loadedEntities)){return}BX.Finder.onFinderAjaxLoadAll.loadedEntities.push(t);if(typeof t=="undefined"){t="users"}if(typeof e!="undefined"){for(var i in e){if(e.hasOwnProperty(i)){oEntity=e[i];BX.indexedDB.updateValue(n.obClientDb,t,oEntity)}}}};BX.Finder.syncClientDb=function(e,n,t,i){if(typeof t!="undefined"&&typeof i!="undefined"){for(var d in t){if(t.hasOwnProperty(d)&&!BX.util.in_array(t[d],i)){BX.indexedDB.deleteValueByIndex(e.obClientDb,"users","id",t[d],{});delete e.obItems[n].users[t[d]];e.deleteItem(t[d],"users",n)}}}};BX.Finder.removeClientDbObject=function(e,n,t){if(typeof t!="undefined"&&t=="users"){BX.indexedDB.deleteValueByIndex(e.obClientDb,"users","id",n,{})}};BX.Finder.clearEntityDb=function(e,n){BX.indexedDB.clearObjectStore(e,n)};BX.Finder.loadAll=function(e){BX.onCustomEvent("loadAllFinderDb",[e])}})(window);
//# sourceMappingURL=core_finder.map.js