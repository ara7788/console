var gDomain="m.webtrends.com",gDcsId="dcsour5e80000008ybade4ttg_1i1l",gTrackEvents=1,gFpc="WT_FPC";document.cookie.indexOf(gFpc+"=")==-1&&document.write("<script type='text/javascript' src='https://m.webtrends.com/dcsour5e80000008ybade4ttg_1i1l/wtid.js'><\\/script>");var gTagVer="MSDN 06-11-07",gService=true,gTimeZone=-8,gFpcDom=".microsoft.com";function dcsCookie(){if(typeof dcsOther=="function")dcsOther();else if(typeof dcsPlugin=="function")dcsPlugin();else typeof dcsFPC=="function"&&dcsFPC(gTimeZone)}function dcsGetCookie(c){var d=document.cookie.indexOf(c+"=");if(d!=-1){var b=d+c.length+1,a=document.cookie.indexOf(";",b);if(a==-1)a=document.cookie.length;return unescape(document.cookie.substring(b,a))}return null}function dcsGetCrumb(e,d){for(var b=dcsGetCookie(e).split(":"),a=0;a<b.length;a++){var c=b[a].split("=");if(d==c[0])return c[1]}return null}function dcsGetIdCrumb(e,d){for(var b=dcsGetCookie(e),f=b.substring(0,b.indexOf(":lv=")),a=f.split("="),c=0;c<a.length;c++)if(d==a[0])return a[1];return null}function dcsFPC(g){if(typeof g=="undefined")return;if(document.cookie.indexOf("WTLOPTOUT=")!=-1)return;var c=gFpc,a=new Date,e=a.getTimezoneOffset()*6e4+g*3.6e6;a.setTime(a.getTime()+e);var m=new Date(a.getTime()+3.1536e11),b=new Date(a.getTime());if(document.cookie.indexOf(c+"=")==-1){if(typeof gWtId!="undefined"&&gWtId!="")WT.co_f=gWtId;else if(typeof gTempWtId!="undefined"&&gTempWtId!=""){WT.co_f=gTempWtId;WT.vt_f="1"}else{WT.co_f="2";for(var h=a.getTime().toString(),k=2;k<=32-h.length;k++)WT.co_f+=Math.floor(Math.random()*16).toString(16);WT.co_f+=h;WT.vt_f="1"}if(typeof gWtAccountRollup=="undefined")WT.vt_f_a="1";WT.vt_f_s="1";WT.vt_f_d="1";WT.vt_f_tlh=WT.vt_f_tlv="0"}else{var f=dcsGetIdCrumb(c,"id"),i=parseInt(dcsGetCrumb(c,"lv")),j=parseInt(dcsGetCrumb(c,"ss"));if(f==null||f=="null"||isNaN(i)||isNaN(j))return;WT.co_f=f;var d=new Date(i);WT.vt_f_tlh=Math.floor((d.getTime()-e)/1e3);b.setTime(j);if(a.getTime()>d.getTime()+1.8e6||a.getTime()>b.getTime()+2.88e7){WT.vt_f_tlv=Math.floor((b.getTime()-e)/1e3);b.setTime(a.getTime());WT.vt_f_s="1"}if(a.getDay()!=d.getDay()||a.getMonth()!=d.getMonth()||a.getYear()!=d.getYear())WT.vt_f_d="1"}WT.co_f=escape(WT.co_f);WT.vt_sid=WT.co_f+"."+(b.getTime()-e);var l="; expires="+m.toGMTString();document.cookie=c+"=id="+WT.co_f+":lv="+a.getTime().toString()+":ss="+b.getTime().toString()+l+"; path=/"+(typeof gFpcDom!="undefined"&&gFpcDom!=""?"; domain="+gFpcDom:"");if(document.cookie.indexOf(c+"=")==-1){WT.co_f=WT.vt_sid=WT.vt_f_s=WT.vt_f_d=WT.vt_f_tlh=WT.vt_f_tlv="";WT.vt_f=WT.vt_f_a="2"}}function dcsEvt(b,c){var a=b.target||b.srcElement;while(a.tagName&&a.tagName!=c)a=a.parentElement||a.parentNode;return a}function dcsBind(b,a){if(typeof window[a]=="function"&&document.body)if(document.body.addEventListener)document.body.addEventListener(b,window[a],true);else document.body.attachEvent&&document.body.attachEvent("on"+b,window[a])}function dcsET(){var a=navigator.appVersion.indexOf("MSIE")!=-1?"click":"mousedown";dcsBind(a,"dcsDownload");dcsBind(a,"dcsFormButton");dcsBind("keypress","dcsFormButton");dcsBind(a,"dcsImageMap")}function dcsMultiTrack(){if(arguments.length%2==0){for(var a=0;a<arguments.length;a+=2)if(arguments[a].indexOf("WT.")==0)WT[arguments[a].substring(3)]=arguments[a+1];else if(arguments[a].indexOf("DCS.")==0)DCS[arguments[a].substring(4)]=arguments[a+1];else if(arguments[a].indexOf("DCSext.")==0)DCSext[arguments[a].substring(7)]=arguments[a+1];var b=new Date;DCS.dcsdat=b.getTime();dcsFunc("dcsCookie");dcsTag()}}function dcsSetVar(){if(arguments.length%2==0&&navigator.appVersion.indexOf("MSIE")!=-1)for(var a=0;a<arguments.length;a+=2)if(arguments[a].indexOf("WT.")==0)WT[arguments[a].substring(3)]=arguments[a+1];else if(arguments[a].indexOf("DCS.")==0)DCS[arguments[a].substring(4)]=arguments[a+1];else if(arguments[a].indexOf("DCSext.")==0)DCSext[arguments[a].substring(7)]=arguments[a+1]}function dcsSetVarCap(f){var c=f.onclick.toString(),d=c.substring(c.indexOf("dcsSetVar(")+10,c.length),e=d.substring(0,d.indexOf(");")).replace(/\s"/gi,"").replace(/"/gi,""),a=e.split(",");if(a.length!=-1)for(var b=0;b<a.length;b+=2)if(a[b].indexOf("WT.")==0)WT[a[b].substring(3)]=a[b+1];else if(a[b].indexOf("DCS.")==0)DCS[a[b].substring(4)]=a[b+1];else if(a[b].indexOf("DCSext.")==0)DCSext[a[b].substring(7)]=a[b+1]}function dcsDownload(b){b=b||(window.event||"");if(b){var a=dcsEvt(b,"A"),e=dcsEvt(b,"IMG");if(a)if(a.hostname&&a.href&&a.protocol&&a.protocol.indexOf("http")!=-1){dcsNavigation(a);navigator.appVersion.indexOf("MSIE")==-1&&a.onclick&&dcsSetVarCap(a);var d=a.pathname?a.pathname.indexOf("/")!=0?"/"+a.pathname:a.pathname:"/";if(e.alt)var c=e.alt;else if(document.all)var c=a.innerText||a.innerHTML||"";else c=a.text||a.innerHTML||"";dcsMultiTrack("DCS.dcssip",a.hostname,"DCS.dcsuri",d,"DCS.dcsqry",a.search||"","WT.ti","Link:"+c,"WT.dl","1","WT.ad","","WT.mc_id","","WT.sp","");DCS.dcssip=DCS.dcsuri=DCS.dcsqry=WT.ti=WT.dl=c=d=""}}}function dcsNavigation(a){try{var b=0;while(b!=1){if(a.parentNode.tagName!="DIV")a=a.parentNode;if(a.parentNode.tagName=="DIV")if(a.parentNode.getAttribute("id")||a.parentNode.className){DCSext.wtNavigation=a.parentNode.getAttribute("id")||a.parentNode.className;b=1}else a=a.parentNode}}catch(c){}}function dcsImageMap(b){b=b||(window.event||"");if(b){var a=dcsEvt(b,"AREA");if(a)if(a.hostname&&a.href&&a.protocol&&a.protocol.indexOf("http")!=-1){dcsNavigation(a);navigator.appVersion.indexOf("MSIE")==-1&&a.onclick&&dcsSetVarCap(a);var c=a.pathname?a.pathname.indexOf("/")!=0?"/"+a.pathname:a.pathname:"/";dcsMultiTrack("DCS.dcssip",a.hostname,"DCS.dcsuri",c,"DCS.dcsqry",a.search||"","WT.ti","Link:Image Map","WT.dl","1","WT.ad","","WT.mc_id","","WT.sp","");DCS.dcssip=DCS.dcsuri=DCS.dcsqry=WT.ti=c=WT.dl=""}}}function dcsFormButton(b){b=b||(window.event||"");if(b){var a=dcsEvt(b,"INPUT"),c=a.type||"";if(c&&(c=="submit"||c=="image"||c=="button"||c=="reset")||c=="text"&&(b.which||b.keyCode)==13){navigator.appVersion.indexOf("MSIE")==-1&&a.onclick&&dcsSetVarCap(a);var d=gTitle=gMethod=qry="";if(a.form){for(var f=a.form.elements,e=0;e<f.length;e++){var g=f[e].type;if(g=="text")qry+=(qry==""?"":"&")+escape(f[e].name)+"="+escape(f[e].value)}d=a.form.action||window.location.pathname;gTitle=a.form.id||a.form.className||a.form.name||"Unknown";gMethod=a.form.method||"Unknown"}else{d=window.location.pathname;gTitle=a.name||a.id||"Unknown";gMethod="Input"}d!=""&&gTitle!=""&&gMethod!=""&&b.keyCode!=9&&dcsMultiTrack("DCS.dcsuri",d,"DCS.dcsqry",qry,"WT.ti","FormButton:"+gTitle,"WT.dl","2","WT.fm",gMethod,"WT.ad","","WT.mc_id","","WT.sp","");DCS.dcsuri=DCS.dcsqry=qry=WT.ti=WT.dl=WT.fm=d=gTitle=gMethod=""}}}function dcsAdSearch(){if(document.links)for(var b=0;b<document.links.length;b++)if(document.links.href){var a=document.links[b].href+"",f=a.toUpperCase().indexOf("WT.AC=");if(f!=-1){var c=f+6,e=a.indexOf("&",c),d=a.substring(c,e!=-1?e:a.length);WT.ad=WT.ad?WT.ad+";"+d:d}}}function dcsContentRatings(a){a=a||(window.event||"");if(a){var c=dcsEvt(a,"A");if(c)if(c.hostname){if(document.all)var b=DCSext.wt_ratd2=c.innerText||c.innerHTML||"";else var b=DCSext.wt_ratd2=c.text||c.innerHTML||"";DCSext.wt_ratd1="Upper Ratings Options";dcsMultiTrack("DCS.dcssip",frmRatings.window.location.hostname,"DCS.dcsuri",frmRatings.window.location.pathname,"DCS.dcsqry","","WT.ti","Link:"+b,"WT.dl","9","WT.ad","","WT.mc_id","","WT.sp","");DCS.dcssip=DCS.dcsuri=DCS.dcsqry=WT.ti=WT.dl=b=DCSext.wt_ratd1=DCSext.wt_ratd2=""}var g=dcsEvt(a,"INPUT");if(g){var f=g.type||"";if(f&&(f=="submit"||f=="button"&&(a.which||a.keyCode)==13)){var d=b="";d=g.form.action||frmRatings.window.location.pathname;b="Content Ratings";var i=frmRatings.document.getElementById("txtFeedback");if(i.value!="")DCSext.wt_ratd2="Comment Submitted";else DCSext.wt_ratd2="No Comment Submitted";try{var e=1;while(frmRatings.document.getElementById("Rate"+e)!="undefined"){var h=frmRatings.document.getElementById("Rate"+e);if(h.checked)DCSext.wt_ratings=h.value.replace(/rate/gi,"");e++}}catch(j){}DCSext.wt_ratd1="Comment Fields";d!=""&&a.keyCode!=9&&dcsMultiTrack("DCS.dcsuri",d,"DCS.dcsqry","","WT.ti","FormButton:"+b,"WT.dl","cr","WT.ad","","WT.mc_id","","WT.sp","");DCS.dcsuri=DCS.dcsqry=qry=WT.ti=WT.dl=WT.fm=DCSext.wt_ratings=DCSext.wt_ratd1=DCSext.wt_ratd2=b=d=""}}}}function dcsAdv(){if(typeof gTrackEvents!="undefined"&&gTrackEvents){WT.wtsv=1;if(typeof WT.sp!="undefined")WT.sv_sp=WT.sp;dcsFunc("dcsET")}dcsFunc("dcsCookie");dcsFunc("dcsAdSearch");DCSext.wtEvtSrc=DCS.dcssip+DCS.dcsuri;if(document.getElementById("frmRatings")){var a=document.getElementById("frmRatings").src;if(a.indexOf("ratings.aspx")!=-1)if(frmRatings.document.body.addEventListener){frmRatings.document.body.addEventListener("click",dcsContentRatings,true);frmRatings.document.body.addEventListener("keypress",dcsContentRatings,true)}else if(frmRatings.document.body.attachEvent){frmRatings.document.body.attachEvent("onclick",dcsContentRatings);frmRatings.document.body.attachEvent("keypress",dcsContentRatings)}}}var gImages=[],gIndex=0,DCS={},WT={},DCSext={},gQP=[],gI18n=false;if(window.RegExp)var RE={"%09":/\t/g,"%20":/ /g,"%23":/\#/g,"%26":/\&/g,"%2B":/\+/g,"%3F":/\?/g,"%5C":/\\/g},I18NRE={"%25":/\%/g};function dcsVar(){var c=new Date;WT.tz=c.getTimezoneOffset()/60*-1;if(WT.tz==0)WT.tz="0";WT.bh=c.getHours();WT.ul=navigator.appName=="Netscape"?navigator.language:navigator.userLanguage;if(typeof screen=="object"){WT.cd=navigator.appName=="Netscape"?screen.pixelDepth:screen.colorDepth;WT.sr=screen.width+"x"+screen.height}if(typeof navigator.javaEnabled()=="boolean")WT.jo=navigator.javaEnabled()?"Yes":"No";if(document.title)WT.ti=gI18n?dcsEscape(dcsEncode(document.title),I18NRE):document.title;WT.js="Yes";WT.jv=dcsJV();if(document.body&&document.body.addBehavior){document.body.addBehavior("#default#clientCaps");if(document.body.connectionType)WT.ct=document.body.connectionType;document.body.addBehavior("#default#homePage");WT.hp=document.body.isHomePage(location.href)?"1":"0"}if(parseInt(navigator.appVersion)>3)if(navigator.appName=="Microsoft Internet Explorer"&&document.body)WT.bs=document.body.offsetWidth+"x"+document.body.offsetHeight;else if(navigator.appName=="Netscape")WT.bs=window.innerWidth+"x"+window.innerHeight;WT.fi="No";if(window.ActiveXObject)for(var a=10;a>0;a--)try{var j=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+a);WT.fi="Yes";WT.fv=a+".0";break}catch(k){}else if(navigator.plugins&&navigator.plugins.length)for(var a=0;a<navigator.plugins.length;a++)if(navigator.plugins[a].name.indexOf("Shockwave Flash")!=-1){WT.fi="Yes";WT.fv=navigator.plugins[a].description.split(" ")[2];break}if(gI18n){WT.em=typeof encodeURIComponent=="function"?"uri":"esc";if(typeof document.defaultCharset=="string")WT.le=document.defaultCharset;else if(typeof document.characterSet=="string")WT.le=document.characterSet}if(typeof wtsp!="undefined")WT.sp=wtsp;WT.dl="0";WT.dcsvid=dcsGetCookie("MC1");DCS.dcsdat=WT.dcsdat=c.getTime();DCS.dcssip=window.location.hostname;DCS.dcsuri=window.location.pathname;var g=5,b=window.location.pathname.substring(window.location.pathname.indexOf("/")+1,window.location.pathname.lastIndexOf("/")+1).toLowerCase();if(b=="")b="/";else{var d=b.split("/");b="";for(var a=1;a<d.length&&a<=g;a++){b+="/";for(var f=0;f<a;f++)b+=d[f]+"/";if(a!=g&&a!=d.length-1)b+=";"}}DCSext.wtDrillDir=b;if(window.location.search){DCS.dcsqry=window.location.search;if(gQP.length>0)for(var a=0;a<gQP.length;a++){var e=DCS.dcsqry.indexOf(gQP[a]);if(e!=-1){var h=DCS.dcsqry.substring(0,e),i=DCS.dcsqry.substring(e+gQP[a].length,DCS.dcsqry.length);DCS.dcsqry=h+i}}}if(window.document.referrer!=""&&window.document.referrer!="-")if(!(navigator.appName=="Microsoft Internet Explorer"&&parseInt(navigator.appVersion)<4))DCS.dcsref=gI18n?dcsEscape(window.document.referrer,I18NRE):window.document.referrer}function dcsA(a,b){return"&"+a+"="+dcsEscape(b,RE)}function dcsEscape(c,b){if(typeof b!="undefined"){var a=new String(c);for(R in b)a=a.replace(b[R],R);return a}else return escape(c)}function dcsEncode(a){return typeof encodeURIComponent=="function"?encodeURIComponent(a):escape(a)}function dcsCreateImage(a){if(document.images){gImages[gIndex]=new Image;gImages[gIndex].src=a;gIndex++}else document.write('<IMG ALT="" BORDER="0" NAME="DCSIMG" WIDTH="1" HEIGHT="1" SRC="'+a+'">')}function dcsMeta(){var b;if(document.all)b=document.all.tags("meta");else if(document.documentElement)b=document.getElementsByTagName("meta");if(typeof b!="undefined")for(var c=1;c<=b.length;c++){var a=b.item(c-1);if(a.name)if(a.name.indexOf("WT.")==0)WT[a.name.substring(3)]=gI18n&&a.name.indexOf("WT.ti")==0?dcsEscape(dcsEncode(a.content),I18NRE):a.content;else if(a.name.indexOf("DCSext.")==0)DCSext[a.name.substring(7)]=a.content;else if(a.name.indexOf("DCS.")==0)DCS[a.name.substring(4)]=gI18n&&a.name.indexOf("DCS.dcsref")==0?dcsEscape(a.content,I18NRE):a.content}}function dcsTag(){if(document.cookie.indexOf("WTLOPTOUT=")!=-1)return;var a="http"+(window.location.protocol.indexOf("https:")==0?"s":"")+"://"+gDomain+(gDcsId==""?"":"/"+gDcsId)+"/dcs.gif?";for(N in DCS)if(DCS[N])a+=dcsA(N,DCS[N]);for(N in WT)if(WT[N])a+=dcsA("WT."+N,WT[N]);for(N in DCSext)if(DCSext[N])a+=dcsA(N,DCSext[N]);if(a.length>2048&&navigator.userAgent.indexOf("MSIE")>=0)a=a.substring(0,2040)+"&WT.tu=1";dcsCreateImage(a)}function dcsJV(){var a=navigator.userAgent.toLowerCase(),c=parseInt(navigator.appVersion),l=a.indexOf("mac")!=-1,i=a.indexOf("mozilla")!=-1&&a.indexOf("compatible")==-1,m=i&&c==4,j=i&&c>=5,h=a.indexOf("msie")!=-1&&a.indexOf("opera")==-1,e=h&&c==4&&a.indexOf("msie 4")!=-1,d=h&&!e,n=a.indexOf("opera")!=-1,f=a.indexOf("opera 5")!=-1||a.indexOf("opera/5")!=-1,g=a.indexOf("opera 6")!=-1||a.indexOf("opera/6")!=-1,k=n&&!f&&!g,b="1.1";if(j||k)b="1.5";else if(l&&d||g)b="1.4";else if(d||m||f)b="1.3";else if(e)b="1.2";return b}function dcsFunc(a){typeof window[a]=="function"&&window[a]()}function dcsDebug(){var a="\nTag Version = "+gTagVer+"\nDomain = "+gDomain+"\nDCSId = "+gDcsId;for(N in DCS)a+="\nDCS."+N+" = "+DCS[N];for(N in WT)a+="\nWT."+N+" = "+WT[N];for(N in DCSext)a+="\nDCSext."+N+" = "+DCSext[N];window.alert(a)}dcsVar();dcsMeta();dcsFunc("dcsAdv");dcsTag();