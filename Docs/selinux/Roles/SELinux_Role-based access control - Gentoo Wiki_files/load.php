var mediaWikiLoadStart=(new Date()).getTime(),mwPerformance=(window.performance&&performance.mark)?performance:{mark:function(){}};mwPerformance.mark('mwLoadStart');function isCompatible(ua){if(ua===undefined){ua=navigator.userAgent;}return!((ua.indexOf('MSIE')!==-1&&parseFloat(ua.split('MSIE')[1])<8)||(ua.indexOf('Firefox/')!==-1&&parseFloat(ua.split('Firefox/')[1])<3)||(ua.indexOf('Opera/')!==-1&&(ua.indexOf('Version/')===-1?parseFloat(ua.split('Opera/')[1])<10:parseFloat(ua.split('Version/')[1])<12))||(ua.indexOf('Opera ')!==-1&&parseFloat(ua.split(' Opera ')[1])<10)||ua.match(/BlackBerry[^\/]*\/[1-5]\./)||ua.match(/webOS\/1\.[0-4]/)||ua.match(/PlayStation/i)||ua.match(/SymbianOS|Series60/)||ua.match(/NetFront/)||ua.match(/Opera Mini/)||ua.match(/S40OviBrowser/)||ua.match(/MeeGo/)||(ua.match(/Glass/)&&ua.match(/Android/)));}(function(){if(!isCompatible()){document.documentElement.className=document.documentElement.className.replace(/(^|\s)client-js(\s|$)/,'$1client-nojs$2');return;}
function startUp(){mw.config=new mw.Map(true);mw.loader.addSource({"local":"/load.php"});mw.loader.register([["site","VI3wqiGi"],["noscript","VT6Rk5D1",[],"noscript"],["filepage","zoDjALOw"],["user.groups","BzGUX/nZ",[],"user"],["user","3p0ExkL2",[],"user"],["user.cssprefs","64Nx0RWw",[],"private"],["user.defaults","5PVQB88t"],["user.options","+JoudQIu",[6],"private"],["user.tokens","X5w4rrws",[],"private"],["mediawiki.language.data","pJtq8AIz",[168]],["mediawiki.skinning.elements","R+fEPKuz"],["mediawiki.skinning.content","N8WWQ4zg"],["mediawiki.skinning.interface","Q0bX3hqV"],["mediawiki.skinning.content.parsoid","KYLyaRTd"],["mediawiki.skinning.content.externallinks","illzOraJ"],["jquery.accessKeyLabel","i2h8CB/g",[25,129]],["jquery.appear","xEe1PXQv"],["jquery.arrowSteps","KDuSLYpD"],["jquery.async","/H/ZGA6v"],["jquery.autoEllipsis","k94EO7/F",[37]],["jquery.badge","/QYPIW3T",[165]],["jquery.byteLength","IQwpO/Nj"],["jquery.byteLimit","Vf6tkRBv",[21]],["jquery.checkboxShiftClick",
"6pIpy6bq"],["jquery.chosen","95UlVvUl"],["jquery.client","bAxx9wO/"],["jquery.color","uGDJbTGr",[27]],["jquery.colorUtil","PuaX9BYP"],["jquery.confirmable","fbwEYhg/",[169]],["jquery.cookie","xyumVnbz"],["jquery.expandableField","CJMYyDR6"],["jquery.farbtastic","WWji5U3e",[27]],["jquery.footHovzer","MPFSlhhB"],["jquery.form","8C9FDY8I"],["jquery.fullscreen","8H5pW3jI"],["jquery.getAttrs","zOoOQOoC"],["jquery.hidpi","kTB5aBg9"],["jquery.highlightText","slcrgkRL",[227,129]],["jquery.hoverIntent","gGVlw2sT"],["jquery.i18n","J4wEyMmO",[167]],["jquery.localize","D8Xe0dsU"],["jquery.makeCollapsible","TnM0eEgW"],["jquery.mockjax","ajTLLBrt"],["jquery.mw-jump","BeU0Rezn"],["jquery.mwExtension","scCpX3NB"],["jquery.placeholder","5j7pIes3"],["jquery.qunit","DgNGyU3B"],["jquery.qunit.completenessTest","Zqb2Pdx2",[46]],["jquery.spinner","lrJXJp8C"],["jquery.jStorage","7+svNJa8",[93]],["jquery.suggestions","a8TrOuTf",[37]],["jquery.tabIndex","4pMQTV27"],["jquery.tablesorter","yPR4aJjz",[227,129,
170]],["jquery.textSelection","TJze6UUc",[25]],["jquery.throttle-debounce","0mi0Ux+F"],["jquery.validate","fQXGta4s"],["jquery.xmldom","oGuB5Wbs"],["jquery.tipsy","RQEns8BU"],["jquery.ui.core","f6SWYHwR",[59],"jquery.ui"],["jquery.ui.core.styles","T0yGKP82",[],"jquery.ui"],["jquery.ui.accordion","eK/PSiZ5",[58,78],"jquery.ui"],["jquery.ui.autocomplete","whjyMooN",[67],"jquery.ui"],["jquery.ui.button","mbxSaCvy",[58,78],"jquery.ui"],["jquery.ui.datepicker","K4sTHcUr",[58],"jquery.ui"],["jquery.ui.dialog","S+gu9zLa",[62,65,69,71],"jquery.ui"],["jquery.ui.draggable","1JuLktwP",[58,68],"jquery.ui"],["jquery.ui.droppable","nCyvPLrn",[65],"jquery.ui"],["jquery.ui.menu","1WEvGW/F",[58,69,78],"jquery.ui"],["jquery.ui.mouse","vox1aaJx",[78],"jquery.ui"],["jquery.ui.position","4wqwSQTs",[],"jquery.ui"],["jquery.ui.progressbar","Qcg/QlPc",[58,78],"jquery.ui"],["jquery.ui.resizable","iqAmbCLv",[58,68],"jquery.ui"],["jquery.ui.selectable","jMn8Bwna",[58,68],"jquery.ui"],["jquery.ui.slider",
"T/Ilswze",[58,68],"jquery.ui"],["jquery.ui.sortable","cS+tpcKy",[58,68],"jquery.ui"],["jquery.ui.spinner","j6hVvh39",[62],"jquery.ui"],["jquery.ui.tabs","L/e7FMzp",[58,78],"jquery.ui"],["jquery.ui.tooltip","GN+UupTf",[58,69,78],"jquery.ui"],["jquery.ui.widget","cvps17GT",[],"jquery.ui"],["jquery.effects.core","ObVnXQFP",[],"jquery.ui"],["jquery.effects.blind","PLWtyJCq",[79],"jquery.ui"],["jquery.effects.bounce","2ETcIojO",[79],"jquery.ui"],["jquery.effects.clip","oOMLw/KU",[79],"jquery.ui"],["jquery.effects.drop","aHSMCccV",[79],"jquery.ui"],["jquery.effects.explode","szjUqrUe",[79],"jquery.ui"],["jquery.effects.fade","iyUQE+6z",[79],"jquery.ui"],["jquery.effects.fold","fmN5ufXG",[79],"jquery.ui"],["jquery.effects.highlight","TB3BLKI7",[79],"jquery.ui"],["jquery.effects.pulsate","6EzBix3a",[79],"jquery.ui"],["jquery.effects.scale","7dQQMBZq",[79],"jquery.ui"],["jquery.effects.shake","yODHZ4rf",[79],"jquery.ui"],["jquery.effects.slide","qo4idDFw",[79],"jquery.ui"],[
"jquery.effects.transfer","HjbxLnVH",[79],"jquery.ui"],["json","dPV3BISq",[],null,null,"return!!(window.JSON\u0026\u0026JSON.stringify\u0026\u0026JSON.parse);"],["moment","wKAevI47"],["mediawiki.apihelp","Kuve1N6p",[119]],["mediawiki.template","xXSqCvWD"],["mediawiki.template.mustache","LcdEssQM",[96]],["mediawiki.template.regexp","j6blbrXW",[96]],["mediawiki.apipretty","897TzZsM"],["mediawiki.api","my/fyn1V",[145,8]],["mediawiki.api.category","bWYiz/Bb",[134,100]],["mediawiki.api.edit","zY6hkXyk",[134,100]],["mediawiki.api.login","EkRoSECv",[100]],["mediawiki.api.options","b9l6fWAi",[100]],["mediawiki.api.parse","BRXFY2nq",[100]],["mediawiki.api.upload","YQU7zHPZ",[227,93,102]],["mediawiki.api.watch","yrxD2h4z",[100]],["mediawiki.content.json","CWU6wBCT"],["mediawiki.confirmCloseWindow","G27GQKxX"],["mediawiki.debug","5wPF1Gwi",[32,57]],["mediawiki.debug.init","pPxXTBBh",[110]],["mediawiki.feedback","ej4X4R1S",[134,125,229]],["mediawiki.feedlink","3TB7aGTQ"],["mediawiki.filewarning",
"ze2b8F4E",[229]],["mediawiki.ForeignApi","rG+r1Sbx",[116]],["mediawiki.ForeignApi.core","WnCKyprJ",[100,228]],["mediawiki.helplink","dC0Ev4wC"],["mediawiki.hidpi","d6r+wS5s",[36],null,null,"return'srcset'in new Image();"],["mediawiki.hlist","ND3pbW/B",[25]],["mediawiki.htmlform","ORusqUJU",[22,129]],["mediawiki.htmlform.styles","CLBxEfhs"],["mediawiki.htmlform.ooui.styles","VJK2tHJB"],["mediawiki.icon","IsQtaAc5"],["mediawiki.inspect","PQSbtciO",[21,93,129]],["mediawiki.messagePoster","XJbrye9e",[100,228]],["mediawiki.messagePoster.wikitext","Od1W59V7",[102,125]],["mediawiki.notification","PGr7B/pK",[177]],["mediawiki.notify","oUSyyubi"],["mediawiki.RegExp","d9E27xSr"],["mediawiki.pager.tablePager","ClivMdYj"],["mediawiki.searchSuggest","DMFgQibk",[35,45,50,100]],["mediawiki.sectionAnchor","I7IuzNj0"],["mediawiki.storage","Svmw8gdc"],["mediawiki.Title","7iGLSiUP",[21,145]],["mediawiki.Upload","kSVhsOSA",[106]],["mediawiki.ForeignUpload","5h849kN/",[115,135]],[
"mediawiki.ForeignStructuredUpload","ryb0p/X6",[136]],["mediawiki.Upload.Dialog","dauP1bDD",[139]],["mediawiki.Upload.BookletLayout","QzRuu59/",[135,169,229]],["mediawiki.ForeignStructuredUpload.BookletLayout","P7y6ESLt",[137,139,224,223]],["mediawiki.toc","A66Pzivk",[146]],["mediawiki.Uri","d68Y72dN",[145,98]],["mediawiki.user","3kIO/pz3",[100,146,7]],["mediawiki.userSuggest","kkfNuvVF",[50,100]],["mediawiki.util","d4CzzGfz",[15,128]],["mediawiki.cookie","0Opnm1tu",[29]],["mediawiki.toolbar","5RsVMdEi"],["mediawiki.experiments","I15MZ4WG"],["mediawiki.action.edit","9ZxGSEOw",[22,53,150]],["mediawiki.action.edit.styles","LPPg+0jT"],["mediawiki.action.edit.collapsibleFooter","eeFR0GsR",[41,146,123]],["mediawiki.action.edit.preview","dfiqDqyt",[33,48,53,155,100,169]],["mediawiki.action.edit.stash","iNHRy4CW",[35,100]],["mediawiki.action.history","+woVxjtA"],["mediawiki.action.history.diff","2eE6RAqr"],["mediawiki.action.view.dblClickEdit","F0t9UC9z",[177,7]],[
"mediawiki.action.view.metadata","tnsrX5aD"],["mediawiki.action.view.categoryPage.styles","Sw9Ba5XY"],["mediawiki.action.view.postEdit","Oo/uwsr0",[146,169,96]],["mediawiki.action.view.redirect","Gb/RI8+R",[25]],["mediawiki.action.view.redirectPage","j2782y9B"],["mediawiki.action.view.rightClickEdit","ERT1RinG"],["mediawiki.action.edit.editWarning","keWWlcNC",[53,109,169]],["mediawiki.action.view.filepage","VgPmoQrr"],["mediawiki.language","PeKPrDWD",[166,9]],["mediawiki.cldr","M7QTCGae",[167]],["mediawiki.libs.pluralruleparser","BOyOQ8gE"],["mediawiki.language.init","XzMNTuTm"],["mediawiki.jqueryMsg","EjtXgyaf",[227,165,145,7]],["mediawiki.language.months","VrVHFA0D",[165]],["mediawiki.language.names","23h2Y/Ds",[168]],["mediawiki.language.specialCharacters","lfy9K43n",[165]],["mediawiki.libs.jpegmeta","ldVhQc/T"],["mediawiki.page.gallery","zWm55DUr",[54,175]],["mediawiki.page.gallery.styles","AOtQ7JTY"],["mediawiki.page.ready","ym/3uErY",[15,23,41,43,45]],["mediawiki.page.startup",
"J7KLto7W",[145]],["mediawiki.page.patrol.ajax","HfSIPIJl",[48,134,100,177]],["mediawiki.page.watch.ajax","nDv8hoDu",[107,177]],["mediawiki.page.image.pagination","SoxEVbrE",[48,142]],["mediawiki.special","cC5G4v0O"],["mediawiki.special.block","v3BCl86C",[145]],["mediawiki.special.changeemail","Ji2rcYdq",[145]],["mediawiki.special.changeslist","rzeg++xt"],["mediawiki.special.changeslist.legend","FKXuKbZh"],["mediawiki.special.changeslist.legend.js","F+dbJOE9",[41,146]],["mediawiki.special.changeslist.enhanced","xr8EFX63"],["mediawiki.special.edittags","g0xuaB5p",[24]],["mediawiki.special.edittags.styles","yTsdusow"],["mediawiki.special.import","oRK39rsb"],["mediawiki.special.movePage","2M9bL81+",[221]],["mediawiki.special.movePage.styles","mFAIiTBR"],["mediawiki.special.pageLanguage","A30XiFd+"],["mediawiki.special.pagesWithProp","KdEyor04"],["mediawiki.special.preferences","QgN3+7o+",[109,165,127]],["mediawiki.special.recentchanges","Wosu7xLK",[181]],["mediawiki.special.search",
"VlGwx74I"],["mediawiki.special.undelete","er09JpCW"],["mediawiki.special.upload","WFxotcmG",[48,134,100,109,169,173,96]],["mediawiki.special.userlogin.common.styles","0g+yJoGO"],["mediawiki.special.userlogin.signup.styles","9zdERQL3"],["mediawiki.special.userlogin.login.styles","961Y2VOb"],["mediawiki.special.userlogin.signup.js","67PZkJ5v",[54,100,169]],["mediawiki.special.unwatchedPages","qhFy3LFQ",[134,107]],["mediawiki.special.javaScriptTest","JGngGQnr",[142]],["mediawiki.special.version","n9ZlFtWm"],["mediawiki.legacy.config","x4eUVTqT"],["mediawiki.legacy.commonPrint","Q1B965IU"],["mediawiki.legacy.protect","LN2Wpzgs",[22]],["mediawiki.legacy.shared","pP5XGlD0"],["mediawiki.legacy.oldshared","a3/Bd2WW"],["mediawiki.legacy.wikibits","izNt5RtD",[145]],["mediawiki.ui","MHaE3oHj"],["mediawiki.ui.checkbox","jupM0A6Y"],["mediawiki.ui.radio","zTsvl09L"],["mediawiki.ui.anchor","mBk8YOWx"],["mediawiki.ui.button","gR4kArKr"],["mediawiki.ui.input","UPWlB71i"],["mediawiki.ui.icon",
"s6ziT6kY"],["mediawiki.ui.text","J2WzK6aQ"],["mediawiki.widgets","mqGXVojK",[19,22,115,134,224,222]],["mediawiki.widgets.styles","5HzpUWve"],["mediawiki.widgets.DateInputWidget","Tf6G1qRo",[94,229]],["mediawiki.widgets.CategorySelector","IUgM0i3e",[100,229]],["mediawiki.widgets.UserInputWidget","yqDcOECf",[229]],["es5-shim","F2VZh7/W",[],null,null,"return(function(){'use strict';return!this\u0026\u0026!!Function.prototype.bind;}());"],["dom-level2-shim","CBgIM21T",[],null,null,"return!!window.Node;"],["oojs","9a86+Gie",[226,93]],["oojs-ui","CPBsgend",[228,230,231,232,233]],["oojs-ui.styles","CkzzMH2X"],["oojs-ui.styles.icons","oNMWf9ul"],["oojs-ui.styles.indicators","cwNKIb1W"],["oojs-ui.styles.textures","QpdxX7aq"],["oojs-ui.styles.icons-accessibility","vwThlVPa"],["oojs-ui.styles.icons-alerts","AOv7CCgJ"],["oojs-ui.styles.icons-content","/Nx4eDSX"],["oojs-ui.styles.icons-editing-advanced","VeuVRhe0"],["oojs-ui.styles.icons-editing-core","sN/Ec5L0"],[
"oojs-ui.styles.icons-editing-list","xQ5/bvN5"],["oojs-ui.styles.icons-editing-styling","dvk/bAX5"],["oojs-ui.styles.icons-interactions","vlD5vIXS"],["oojs-ui.styles.icons-layout","MXffB4O8"],["oojs-ui.styles.icons-location","alnUAHPS"],["oojs-ui.styles.icons-media","g51TOQ8E"],["oojs-ui.styles.icons-moderation","tF+Fw2s3"],["oojs-ui.styles.icons-movement","RejZ2kWQ"],["oojs-ui.styles.icons-user","TpOLUqU1"],["oojs-ui.styles.icons-wikimedia","yMDbwGqU"],["jquery.wikiEditor","2G5GALh2",[53,165],"ext.wikiEditor"],["jquery.wikiEditor.dialogs","Mk/elUkf",[51,64,254],"ext.wikiEditor"],["jquery.wikiEditor.dialogs.config","4Sy8kuLS",[50,250,134,100,169,96],"ext.wikiEditor"],["jquery.wikiEditor.preview","FHHYmXVh",[249,100],"ext.wikiEditor"],["jquery.wikiEditor.publish","j683PTbm",[250],"ext.wikiEditor"],["jquery.wikiEditor.toolbar","VNhnqw1Z",[18,29,249,256],"ext.wikiEditor"],["jquery.wikiEditor.toolbar.config","QVI2xZ78",[254,172],"ext.wikiEditor"],["jquery.wikiEditor.toolbar.i18n",
"HDt2M84V",[],"ext.wikiEditor"],["ext.wikiEditor","FaTqKQLK",[249,143],"ext.wikiEditor"],["ext.wikiEditor.dialogs","+/yE31r7",[261,251],"ext.wikiEditor"],["ext.wikiEditor.preview","zvn6hMZs",[257,252],"ext.wikiEditor"],["ext.wikiEditor.publish","avHUbrio",[257,253],"ext.wikiEditor"],["ext.wikiEditor.toolbar","kwu6vLol",[257,255],"ext.wikiEditor"],["ext.wikiEditor.toolbar.styles","iWf+n66S",[],"ext.wikiEditor"],["ext.uls.languagenames","XRvKAHVQ"],["ext.uls.messages","vMhUBYnQ",[272]],["ext.uls.buttons","Ta/BcHmT"],["ext.uls.displaysettings","eamwoKQl",[275,282,278,105]],["ext.uls.geoclient","uBSWEbVm"],["ext.uls.ime","IItD7j+c",[282,276,281]],["ext.uls.nojs","UozVBG4Q"],["ext.uls.init","QyWp7B3R",[29,142]],["ext.uls.eventlogger","rQ6UJr/U",[143,"schema.UniversalLanguageSelector"]],["ext.uls.i18n","/4rjDl13",[39,145]],["ext.uls.inputsettings","q9deB1Vh",[268,275]],["ext.uls.interface","N7uENCNC",[278,57,169]],["ext.uls.languagesettings","EBrOYj7F",[265,264,276,286]],[
"ext.uls.preferences","Xm01qant",[143]],["ext.uls.compactlinks","/8bUFmdA",[282,284,165,217]],["ext.uls.webfonts","Pj0u6c/0",[270,276]],["ext.uls.webfonts.fonts","Sqh5tb8q",[280,285,287]],["ext.uls.webfonts.repository","UR55VSgX"],["jquery.ime","S0rh7fIq"],["ext.uls.mediawiki","y69Ohwat",[270,263,264,283]],["jquery.uls","jTBUYv21",[39,285,286]],["jquery.uls.compact","9XWFWIln",[283]],["jquery.uls.data","OF4rSQgw"],["jquery.uls.grid","Kix+wfid"],["jquery.webfonts","cP4bHXjC"],["ext.uls.pt","ER6w/2hA"],["ext.uls.interlanguage","8DoAYMl8"],["rangy.core","XaCDNrPn"],["ext.pygments","Zs23ft79"],["ext.geshi.visualEditor","oZSb+9N5",["ext.visualEditor.mwcore"]],["ext.nuke","crDO9JRU"],["ext.cite.styles","sC77Dbrt"],["ext.cite.a11y","63ke9oEG"],["ext.cite.style","SjHs7CAj"],["mediawiki.api.titleblacklist","ws7vhbw+",[100]],["ext.inputBox.styles","7t6Jom/q"],["ext.inputBox","Jxvoyxb4",[54]],["ext.gentooPackages","/9SdDV89"],["ext.jquery.easing","Lskib89q"],["ext.jquery.fancybox","B4/50BMc",[301
,308]],["ext.jquery.multiselect","ldUPch3L",[58,78]],["ext.jquery.multiselect.filter","sGZp9DxW",[303]],["ext.jquery.blockUI","6g4wuD9z"],["ext.jquery.jqgrid","J2jhYKwB",[308,58]],["ext.jquery.flot","G3sKwczq"],["ext.jquery.migration.browser","OU86giwB"],["ext.srf","AHdAw1YX",[504],"ext.srf"],["ext.srf.api","uU4FWm5e",[309],"ext.srf"],["ext.srf.util","PQOztDZe",[305,309],"ext.srf"],["ext.srf.widgets","1FX1tpwU",[303,309,62,73],"ext.srf"],["ext.srf.util.grid","3rxe7HpK",[306,311,76],"ext.srf"],["ext.jquery.sparkline","nyJns8rx",[308]],["ext.srf.sparkline","UUe/dYn6",[314,311],"ext.srf"],["ext.dygraphs.combined","Icav4lgj"],["ext.srf.dygraphs","47lTH0GP",[316,508,311,18]],["ext.jquery.listnav","TOl9T2Cm"],["ext.jquery.listmenu","bhQ/xy53"],["ext.jquery.pajinate","2tU5ORdm"],["ext.srf.listwidget","vxk/k1Ig",[311]],["ext.srf.listwidget.alphabet","Sqh5tb8q",[318,321]],["ext.srf.listwidget.menu","Sqh5tb8q",[319,321]],["ext.srf.listwidget.pagination","Sqh5tb8q",[320,321]],[
"ext.jquery.dynamiccarousel","qiDRjEYz",[308]],["ext.srf.pagewidget.carousel","lrwCt23E",[325,311]],["ext.jquery.jqplot.core","wg7QHg93",[308]],["ext.jquery.jqplot.excanvas","Q5iRAdvY"],["ext.jquery.jqplot.json","DhDFkyRb"],["ext.jquery.jqplot.cursor","nvp23++e"],["ext.jquery.jqplot.logaxisrenderer","7+SkYZ2W"],["ext.jquery.jqplot.mekko","7GZdvcvF"],["ext.jquery.jqplot.bar","Fr8VEqhF",[327]],["ext.jquery.jqplot.pie","dBsBZnc/",[327]],["ext.jquery.jqplot.bubble","/i+qpQGw",[327]],["ext.jquery.jqplot.donut","Y4Lm57ta",[334]],["ext.jquery.jqplot.pointlabels","lxDYpJeh",[327]],["ext.jquery.jqplot.highlighter","itb9PNfX",[327]],["ext.jquery.jqplot.enhancedlegend","xzc5bYjI",[327]],["ext.jquery.jqplot.trendline","y6yB15xm"],["ext.srf.jqplot.themes","2bvci75F",[25]],["ext.srf.jqplot.cursor","Sqh5tb8q",[330,348]],["ext.srf.jqplot.enhancedlegend","Sqh5tb8q",[339,348]],["ext.srf.jqplot.pointlabels","Sqh5tb8q",[337,348]],["ext.srf.jqplot.highlighter","Sqh5tb8q",[338,348]],[
"ext.srf.jqplot.trendline","Sqh5tb8q",[340,348]],["ext.srf.jqplot.chart","w9cq4ydM",[327,341,311,18]],["ext.srf.jqplot.bar","nvmXd/jA",[333,347]],["ext.srf.jqplot.pie","Xh5hPZ1v",[334,347]],["ext.srf.jqplot.bubble","EYGVXoav",[335,347]],["ext.srf.jqplot.donut","Xh5hPZ1v",[336,347]],["ext.smile.timeline","grExW+V5"],["ext.srf.timeline","bx/KxD21",[352,212]],["ext.d3.core","ugXsuCbQ"],["ext.srf.d3.common","AU1s1JYT",[311]],["ext.d3.wordcloud","wX/S6sN+",[354,355]],["ext.srf.d3.chart.treemap","EqqmvU6e",[354,355]],["ext.srf.d3.chart.bubble","BVNFrIcR",[354,355]],["ext.srf.jquery.progressbar","b2IXZnMW"],["ext.srf.jit","Xik+1+nB"],["ext.srf.jitgraph","kBHam2wH",[360,359,212]],["ext.jquery.jcarousel","I0qnO7iA",[308]],["ext.jquery.responsiveslides","or6KsFOJ"],["ext.srf.formats.gallery","IRxBPj5H",[311]],["ext.srf.gallery.carousel","jQ6hI2cr",[362,364]],["ext.srf.gallery.slideshow","AoiORuo8",[363,364]],["ext.srf.gallery.overlay","MnZBj3rL",[302,364]],["ext.srf.gallery.redirect","onFEYojd",
[364]],["ext.jquery.fullcalendar","BUflyfUP"],["ext.jquery.gcal","uAulI6wH"],["ext.srf.widgets.eventcalendar","RrzMaFGJ",[508,310,311,63,73]],["ext.srf.hooks.eventcalendar","mpn/zMsF",[309]],["ext.srf.eventcalendar","ozgf4R7X",[369,372,371]],["ext.srf.filtered","Z6b8gxES"],["ext.srf.filtered.list-view","A+6QodrU",[374]],["ext.srf.filtered.table-view","pYBAgNRV",[374]],["ext.srf.filtered.calendar-view","BYo1enAV",[369,374]],["ext.srf.filtered.value-filter","ls80dE4T",[374]],["ext.srf.filtered.distance-filter","RaXnMynF",[374,73]],["ext.srf.slideshow","MdLk9dMQ",["mediawiki.legacy.ajax"]],["ext.jquery.tagcanvas","dR1i1Pmb"],["ext.srf.formats.tagcloud","106FNkBG",[311]],["ext.srf.flot.core","dXDFxo85"],["ext.srf.timeseries.flot","ZeyTb/gJ",[307,383,311,18]],["ext.jquery.jplayer","k5EVkyFp"],["ext.jquery.jplayer.skin.blue.monday","pXLOp6re"],["ext.jquery.jplayer.skin.morning.light","NpI+kIBZ"],["ext.jquery.jplayer.playlist","DO1Sc0jq",[385]],["ext.jquery.jplayer.inspector","StMYizsq",[385]
],["ext.srf.template.jplayer","btYKv6I5",[309]],["ext.srf.formats.media","/13napkW",[388,390],"ext.srf"],["jquery.dataTables","EN2d58gL"],["jquery.dataTables.extras","NXHD5BaQ"],["ext.srf.datatables","UNHolCUT",[310,311,312,392,393]],["ext.srf.datatables.bootstrap","/s+Hg5sO",[394]],["ext.srf.datatables.basic","Edyg3XuB",[394]],["ext.semanticforms.main","YBCyOaF9",[401,399,408,61,62,74]],["ext.semanticforms.browser","Pt47Uhr4"],["ext.semanticforms.fancybox","5ZGbdBml",[398]],["ext.semanticforms.dynatree","ANthnzYU",[78]],["ext.semanticforms.autogrow","07diW5DT"],["ext.semanticforms.popupformedit","9+NXq64/",[398]],["ext.semanticforms.autoedit","/062dBkc"],["ext.semanticforms.submit","aorsB8rD"],["ext.semanticforms.collapsible","5+kDKPbH"],["ext.semanticforms.imagepreview","MjaSI2QD"],["ext.semanticforms.checkboxes","xyVITi7S"],["ext.semanticforms.select2","uUU/h7Bj",[410,169]],["ext.semanticforms.maps","p2ZxHMm7"],["ext.semanticforms","AXCA678O"],["skins.tyrian.styles","LgVCMXBw"],[
"ext.translate","blrjgq8j"],["ext.translate.base","DiuXTlBm",[418,100]],["ext.translate.dropdownmenu","Mmr+Uud7"],["ext.translate.editor","zz2hyFG6",[413,414,442,265,447,41,53,448,57,286,142,105,169,143]],["ext.translate.groupselector","lDJu7hSv",[413,419,441,449,286,169]],["ext.translate.helplink","WuaSs5Xj"],["ext.translate.hooks","YSWFmkv/"],["ext.translate.loader","PhzeLkWn"],["ext.translate.messagetable","eEJCc96r",[413,419,425,265,16,448,142,169]],["ext.translate.messagewebimporter","McSlHDhZ"],["ext.translate.multiselectautocomplete","vvampE7I",[61]],["ext.translate.navitoggle","pwanIY5h"],["ext.translate.pagetranslation.uls","WfwqcFLB",[282]],["ext.translate.parsers","0oPQwLrf",[145]],["ext.translate.quickedit","XDNQF2dI",[447,33,64,145]],["ext.translate.selecttoinput","ieIzlfWB"],["ext.translate.special.aggregategroups","CKaNN4sn",[61,100]],["ext.translate.special.importtranslations","LzBb3uUP",[61]],["ext.translate.special.languagestats","EYAxSVPS",[52]],[
"ext.translate.special.managegroups","ZrBfRxhU"],["ext.translate.special.managetranslatorsandbox","LwL3yXVy",[419,444,265,282,64,169]],["ext.translate.special.pagemigration","FdrJjLq/",[446,100,217]],["ext.translate.special.pagepreparation","cwV1LzYg",[44,134,155,100,169,213]],["ext.translate.special.pagetranslation","qyBKNBqV",[422,217]],["ext.translate.special.searchtranslations","v4vV/WTH",[415,416,267,282]],["ext.translate.special.supportedlanguages","6ZDRsUmo"],["ext.translate.special.translate","JRW65j6R",[416,420,423,445,282,105]],["ext.translate.special.translationstash","8Op/+0CA",[415,420,444,282]],["ext.translate.special.translationstats","WrWr0TIZ",[63]],["ext.translate.statsbar","kx6LZzCG"],["ext.translate.storage","gjdECKBV"],["ext.translate.tabgroup","SOc2BtQN"],["ext.translate.translationstashstorage","VzkaakgN",[100]],["ext.translate.workflowselector","Q2OApdyi",[414,100]],["jquery.ajaxdispatcher","vcmon9qI"],["jquery.autosize","+JIj3TqF"],["jquery.textchange",
"wbfsmShT"],["jquery.ui.position.custom","Nxia2VHa"],["ext.cleanchanges","YJRjVB0P"],["ext.cleanchanges.uls","hi/spE0q"],["ext.abuseFilter","foDxAxhE"],["ext.abuseFilter.edit","kHiIPmfX",[48,53,100]],["ext.abuseFilter.tools","e+89smiV",[48,100]],["ext.abuseFilter.examine","btEedaCs",[48,100]],["ext.checkUser","HfrzMHbK",[145]],["ext.echo.ui","v9rXqSzo",[458,515,461,462,100,169,229]],["ext.echo.dm","7f5QWZaF",[228]],["ext.echo.base","Sqh5tb8q",[515]],["ext.echo.init","cA+Qu09v"],["ext.echo.styles.badge","a0g8ppDt"],["ext.echo.styles.notifications","ksIi89iS"],["ext.echo.styles.alert","752oV8SS"],["ext.echo.styles.special","LbpUDzbs"],["ext.echo.special","11bT4tB/",[457,217]],["ext.echo.badgeicons","k4GT+9j0"],["ext.thanks","uKF//Ra7"],["ext.thanks.revthank","rVYip+Eq",[467,28,100]],["ext.thanks.mobilediff","+5tM604Y",[100,"mobile.special.mobilediff.scripts","mobile.toast"]],["ext.thanks.flowthank","d7d5Jp04",[467,100,169]],["ext.flow.contributions","llAhFtsB"],[
"ext.flow.contributions.styles","7vfH+65U"],["ext.flow.templating","WWikOQ+I",[481,94]],["ext.flow.mediawiki.ui.modal","k92fC83b"],["ext.flow.mediawiki.ui.text","8JYP+wzj"],["ext.flow.mediawiki.ui.form","oeSIaUNM"],["ext.flow.mediawiki.ui.tooltips","DePvgWqO"],["ext.flow.styles.base","LFAxUod7"],["ext.flow.board.styles","2XKz4n6I"],["ext.flow.board.topic.styles","3cfqyzSx"],["mediawiki.template.handlebars","GgKzBTtO",[96]],["ext.flow.components","cJmY7CAi",[494,473,486,134,142,143,228]],["ext.flow.dm","72zrr75l",[228]],["ext.flow.ui","um0j3prt",[483,229,237]],["ext.flow","mN3CA9yg",[482,488,493,484,54,104,169]],["ext.flow.vendor.storer","3MInqa+G"],["ext.flow.undo","jkEyNERP",[485]],["ext.flow.editor","+KclrK/S",[143,228]],["ext.flow.editors.none","3akY7VkE",[229]],["ext.flow.visualEditor","91Vtg0wB",[489,"ext.visualEditor.core","ext.visualEditor.core.desktop","ext.visualEditor.data","ext.visualEditor.icons","ext.visualEditor.mediawiki","ext.visualEditor.mwimage",
"ext.visualEditor.mwlink","ext.visualEditor.mwtransclusion","ext.visualEditor.standalone",100,237,0,4]],["ext.flow.editors.visualeditor","TQQ7V12t"],["mediawiki.messagePoster.flow-board","FXrIr1Q4",[125]],["ext.flow.jquery.conditionalScroll","zYEda5qJ"],["ext.flow.jquery.findWithParent","lORALmzR"],["ext.smw","pG7tUg4J",[497],"ext.smw"],["ext.smw.style","6/6WLKQu",[507],"ext.smw"],["ext.jquery.async","mDqE0DaL",[],"ext.smw"],["ext.jquery.jStorage","4IsOKc7Q",[93],"ext.smw"],["ext.jquery.md5","BZMibYfY",[],"ext.smw"],["ext.smw.dataItem","C6XIcHN1",[495,134,142],"ext.smw"],["ext.smw.dataValue","6NiYTfOh",[500],"ext.smw"],["ext.smw.data","GyCF3ndL",[501],"ext.smw"],["ext.smw.query","VL7sV6p6",[495,145],"ext.smw"],["ext.smw.api","T3uhjFVw",[498,499,502,503],"ext.smw"],["ext.jquery.qtip.styles","6XQGwgv8",[],"ext.smw"],["ext.jquery.qtip","co5k7nKY",[505],"ext.smw"],["ext.smw.tooltip.styles","XJMaRQTc",[505],"ext.smw"],["ext.smw.tooltip","oLn4TqdQ",[506,495,507],"ext.smw"],[
"ext.smw.tooltips","Sqh5tb8q",[496,508],"ext.smw"],["ext.smw.autocomplete","1AxpDI83",[61],"ext.smw"],["ext.smw.ask","etTXk9VQ",[510,496,508],"ext.smw"],["ext.smw.browse","cOx4Tcb1",[510,496],"ext.smw"],["ext.smw.property","p2vp1IGC",[510],"ext.smw"],["ext.semanticforms.wikieditor","2Qc0B6Ru",[397,249]],["ext.echo.logger","ui9/FMuY",[228]]]);;mw.config.set({"wgLoadScript":"/load.php","debug":!1,"skin":"tyrian","stylepath":"/skins","wgUrlProtocols":"bitcoin\\:|ftp\\:\\/\\/|ftps\\:\\/\\/|geo\\:|git\\:\\/\\/|gopher\\:\\/\\/|http\\:\\/\\/|https\\:\\/\\/|irc\\:\\/\\/|ircs\\:\\/\\/|magnet\\:|mailto\\:|mms\\:\\/\\/|news\\:|nntp\\:\\/\\/|redis\\:\\/\\/|sftp\\:\\/\\/|sip\\:|sips\\:|sms\\:|ssh\\:\\/\\/|svn\\:\\/\\/|tel\\:|telnet\\:\\/\\/|urn\\:|worldwind\\:\\/\\/|xmpp\\:|\\/\\/","wgArticlePath":"/wiki/$1","wgScriptPath":"","wgScriptExtension":".php","wgScript":"/index.php","wgSearchType":null,"wgVariantArticlePath":!1,"wgActionPaths":{},"wgServer":"//wiki.gentoo.org","wgServerName":
"wiki.gentoo.org","wgUserLanguage":"en","wgContentLanguage":"en","wgTranslateNumerals":!0,"wgVersion":"1.26.2-gentoo","wgEnableAPI":!0,"wgEnableWriteAPI":!0,"wgMainPageTitle":"Main Page","wgFormattedNamespaces":{"-2":"Media","-1":"Special","0":"","1":"Talk","2":"User","3":"User talk","4":"Gentoo Wiki","5":"Gentoo Wiki talk","6":"File","7":"File talk","8":"MediaWiki","9":"MediaWiki talk","10":"Template","11":"Template talk","12":"Help","13":"Help talk","14":"Category","15":"Category talk","274":"Widget","275":"Widget talk","500":"Knowledge Base","501":"Knowledge Base Talk","510":"Project","511":"Project Talk","520":"Overlay","521":"Overlay Talk","530":"Herd","531":"Herd Talk","540":"Foundation","541":"Foundation Talk","550":"GLEP","551":"GLEP Talk","560":"Handbook","561":"Handbook Talk","602":"Property","603":"Property talk","604":"Type","605":"Type talk","606":"Form","607":"Form talk","608":"Concept","609":"Concept talk","1198":"Translations","1199":"Translations talk","2300":
"Gadget","2301":"Gadget talk","2302":"Gadget definition","2303":"Gadget definition talk","2600":"Topic"},"wgNamespaceIds":{"media":-2,"special":-1,"":0,"talk":1,"user":2,"user_talk":3,"gentoo_wiki":4,"gentoo_wiki_talk":5,"file":6,"file_talk":7,"mediawiki":8,"mediawiki_talk":9,"template":10,"template_talk":11,"help":12,"help_talk":13,"category":14,"category_talk":15,"widget":274,"widget_talk":275,"knowledge_base":500,"knowledge_base_talk":501,"project":510,"project_talk":511,"overlay":520,"overlay_talk":521,"herd":530,"herd_talk":531,"foundation":540,"foundation_talk":541,"glep":550,"glep_talk":551,"handbook":560,"handbook_talk":561,"property":602,"property_talk":603,"type":604,"type_talk":605,"form":606,"form_talk":607,"concept":608,"concept_talk":609,"translations":1198,"translations_talk":1199,"gadget":2300,"gadget_talk":2301,"gadget_definition":2302,"gadget_definition_talk":2303,"topic":2600,"image":6,"image_talk":7},"wgContentNamespaces":[0,500,510,520,540,550,560],"wgSiteName":
"Gentoo Wiki","wgDBname":"gentoo-wiki","wgExtraSignatureNamespaces":[],"wgAvailableSkins":{"tyrian":"Tyrian","fallback":"Fallback","apioutput":"ApiOutput"},"wgExtensionAssetsPath":"/extensions","wgCookiePrefix":"gentoo-wiki","wgCookieDomain":"","wgCookiePath":"/","wgCookieExpiration":15552000,"wgResourceLoaderMaxQueryLength":1024,"wgCaseSensitiveNamespaces":[2302,2303],"wgLegalTitleChars":" %!\"$&'()*,\\-./0-9:;=?@A-Z\\\\\\^_`a-z~+\\u0080-\\uFFFF","wgResourceLoaderStorageVersion":1,"wgResourceLoaderStorageEnabled":!1,"wgResourceLoaderLegacyModules":["mediawiki.legacy.wikibits"],"wgForeignUploadTargets":[],"wgEnableUploads":!0,"srf-config":{"version":"2.3","settings":{"wgThumbLimits":[120,150,180,200,250,300],"srfgScriptPath":"/extensions/SemanticResultFormats"}},"wgFlowEditorList":["visualeditor","wikitext"],"wgFlowMaxTopicLength":260,"wgFlowMentionTemplate":"FlowMention","wgFlowAjaxTimeout":30,"wgWikiEditorMagicWords":{"redirect":"#REDIRECT","img_right":"right","img_left":"left",
"img_none":"none","img_center":"center","img_thumbnail":"thumbnail","img_framed":"framed","img_frameless":"frameless"},"wgULSIMEEnabled":!0,"wgULSWebfontsEnabled":!0,"wgULSPosition":"personal","wgULSAnonCanChangeLanguage":!1,"wgULSEventLogging":!1,"wgULSImeSelectors":["input:not([type])","input[type=text]","input[type=search]","textarea","[contenteditable]"],"wgULSNoImeSelectors":["#wpCaptchaWord",".ve-ce-surface *"],"wgULSNoWebfontsSelectors":["#p-lang li.interlanguage-link > a"],"wgULSFontRepositoryBasePath":"/extensions/UniversalLanguageSelector/data/fontrepo/fonts/","smw-config":{"version":"2.3","settings":{"smwgQMaxLimit":10000,"smwgQMaxInlineLimit":500,"namespace":{"Property":602,"Property_talk":603,"Type":604,"Type_talk":605,"Concept":608,"Concept_talk":609,"":0,"Talk":1,"User":2,"User_talk":3,"Gentoo_Wiki":4,"Gentoo_Wiki_talk":5,"File":6,"File_talk":7,"MediaWiki":8,"MediaWiki_talk":9,"Template":10,"Template_talk":11,"Help":12,"Help_talk":13,"Category":14,
"Category_talk":15,"Project":510,"Herd":530,"Foundation":540,"GLEP":550,"Handbook":560}},"formats":{"table":"Table","list":"List","ol":"Enumeration","ul":"Itemization","category":"Category","embedded":"Embed page contents","template":"Template","feed":"RSS and Atom feed","csv":"CSV export","dsv":"DSV export","json":"JSON export","rdf":"RDF export","icalendar":"iCalendar export","vcard":"vCard export","bibtex":"BibTeX export","calendar":"Monthly calendar","eventcalendar":"Event calendar","eventline":"Eventline","timeline":"Timeline","outline":"Outline","gallery":"Gallery","jqplotchart":"jqPlot chart","jqplotseries":"jqPlot series","sum":"Sum of numbers","average":"Average of numbers","min":"Minimum number","max":"Maximum number","median":"Median of numbers","product":"Product of numbers","tagcloud":"Tag cloud","valuerank":"Value rank","array":"Array","tree":"Tree","ultree":"Ultree","oltree":"Oltree","d3chart":"D3 chart","latest":"Latest time","earliest":"Earliest time","filtered":
"Filtered","slideshow":"SlideShow","timeseries":"Timeseries chart","sparkline":"Sparkline chart","listwidget":"Listwidget","pagewidget":"Pagewidget","dygraphs":"Dygraphs chart","media":"Media player","datatables":"DataTables"}}});window.RLQ=window.RLQ||[];while(RLQ.length){RLQ.shift()();}window.RLQ={push:function(fn){fn();}};}var script=document.createElement('script');script.src="/load.php?debug=false&lang=en&modules=jquery%2Cmediawiki&only=scripts&skin=tyrian&version=i%2FjixaBo";script.onload=script.onreadystatechange=function(){if(!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;script=null;startUp();}};document.getElementsByTagName('head')[0].appendChild(script);}());