try{
var R=[
  // I
  [{
    id: 1,
    idS: '10',
    s: function(cb){
      function base64(str) {
        var b64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg'+'hijklmnopqrstuvwxyz0123456789+/=';
        var b64encoded = '';
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        for (var i=0; i<str.length;) {
          chr1 = str.charCodeAt(i++);
          chr2 = str.charCodeAt(i++);
          chr3 = str.charCodeAt(i++);
          enc1 = chr1 >> 2;
          enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
          enc3 = isNaN(chr2) ? 64:(((chr2 & 15) << 2) | (chr3 >> 6));
          enc4 = isNaN(chr3) ? 64:(chr3 & 63);
          b64encoded += b64chars.charAt(enc1) + b64chars.charAt(enc2) + b64chars.charAt(enc3) + b64chars.charAt(enc4);
        }
        return encodeURIComponent(b64encoded);
      };
      ld('https://cm.g.doubleclick.net/pixel?google_nid=ADR&google_hm='+base64(cid), cb)
    },
    t: 24*3,
    bl: 1
  },{
    id: 2,
    idS: '19',
    s: function(cb){ ld('//an.yandex.ru/setud/adriver/' + cidsep + '?sign=' + hash, cb);},
    t: 24*3,
    bl: 1
  }],
  // II
  [{
    id: 36,
    idS: '19_1',
    s: function(cb){ ld('//an.yandex.ru/mapuid/dmpadriver/' + cidsep + '?sign=' + hash, cb);},
    t: 24*3,
    bl: 1
  },{
    id: 3,
    idS: '1000',
    c: http && cid && cookiestate == 0,
    s: function(cb){ld('//ad.mail.ru/cm.gif?p=23&id='+encodeURIComponent(cid), cb)}
  },{
    id: 4,
    idS: '3',
    c: http && cid && cookiestate == 0,
    s: function(cb){ld('//match.ads.betweendigital.com/match?bidder_id=3&external_user_id='+encodeURIComponent(cid)+'&c=0', cb)}
  },{
    id: 5,
    idS: '100',
    s: function(cb){ld('//st.targetix.net/match?id=20', cb)}
  },{
    id: 6,
    idS: '20316',
    s: function(cb){ld('//advombat.ru/0.gif?pid=ADRIVER&id='+encodeURIComponent(cid), cb)},
    t: 24
  },{
    id: 7,
    idS: '117',
    s: function(cb){ld('//dmg.digitaltarget.ru/1/123/i/i?a=123&e='+encodeURIComponent(cid)+'&i='+rnd, cb)}
  },{
    id: 8,
    idS: '12',
    s: function(cb){ld('//rtb.am15.net/aux/sync?advm_nid=62499&uid='+encodeURIComponent(cid), cb)}
  },{
    id: 9,
    idS: '117_1',
    s: function(cb){ld('//cm.g.doubleclick.net/pixel?google_nid=crossmedia_ddp&google_cm&c=rs:123&i='+rnd, cb)}
  },{
    id: 10,
    idS: '137',
    s: function(cb){ld('//t.insigit.com/mark_forward/fd1e81207946c410778a32b4aa439178/ea376fb139b2d7a65a172e99a86a2bfa', cb)}
  },{
    id: 11,
    idS: '5',
    s: function(cb){ld('//profile.ssp.rambler.ru/sync2.302?pid=89', cb)}
  },{
    id: 12,
    idS: '117_2',
    c: http && cid && cookiestate == 0,
    s: function(cb){ld('//cm.p.altergeo.ru/pixel?url=%2F%2Fdmg.digitaltarget.ru%2F1%2F2016%2Fi%2Fi%3Fa%3D16%26e%3D%24%7BUSER_ID%7D%26c%3Dds%3A16.up%3A%24%7BUSER_ID%7D.pc%3A%24%7BCATS_ID%7D%26i%3D%24%7BRANDOM%7D', cb)}
  },{
    id: 13,
    idS: '122',
    s: function(cb){ld('//sync.audtd.com/match/adriver?uid='+encodeURIComponent(cid), cb)}
  },{
    id: 14,
    idS: '5_1',
    c: http && cid && cookiestate == 0,
    s: function(cb){ld('//profile.ssp.rambler.ru/sync3.302?pid=89', cb)}
  },{
    id: 15,
    idS: '16',
    s: function(cb){ld('//sync.republer.com/match?dsp=soloway&id='+encodeURIComponent(cid), cb)}
  },{
    id: 16,
    idS: '20',
    s: function(cb){ld('//adriver-sync.rutarget.ru/sync', cb)}
  },{
    id: 17,
    idS: '112',
    s: function(cb){ld('//px.adhigh.net/p/cm/adriver?u='+encodeURIComponent(cid), cb)}
  },{
    id: 18,
    idS: '135',
    s: function(cb){ld('https://sync.1dmp.io/pixel.gif?cid=7287fde7-f83f-4ff9-ace2-07c8fef0a289&pid=w&uid='+encodeURIComponent(cid), cb)},
    t: 24
  },{
    id: 19,
    idS: '135_1',
	c: http && cid && cookiestate == 0,
    s: function(cb){ld('//dmp.mindshare.1dmp.io?cid=170e8600-7dac-4112-8ca9-a5cb6d23d301&pid=tm.cview&ru=%2F%2Fssp.adriver.ru%2Fcgi-bin%2Fsync.cgi%3fdsp_id%3D135%26external_id%3D%5BUID%5D', cb)},
    t: 24
  },{
    id: 20,
    idS: '7_1',
    s: function(cb){ld('//ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=608223&bt=21&pid=2527627&bid=4950956&bn=4950956&rnd='+rnd, cb)},
    t: 24
  },{
    id: 21,
    idS: '10007',
    s: function(cb){ld('//tt.ttarget.ru/rtb/adriver/sync', cb)},
    t: 24*3
  }],
  // III
  [{
    id: 22,
    idS: '21',
    s: function(cb){ld('//sync.bumlam.com/?src=adr1&uid='+encodeURIComponent(cid), cb)}
  },{
    id: 23,
    idS: '106',
    s: function(cb){ld('//sync-eu.exe.bid/image?source=adriver&id='+encodeURIComponent(cid)+'&return_url='+("https:" == document.location.protocol ? "https" : "http")+'%3A%2F%2Fssp.adriver.ru%2Fcgi-bin%2Fsync.cgi%3Fdsp_id%3D106%26external_id%3D%7BUID%7D', cb)}
  },{
    id: 24,
    idS: '35',
    s: function(cb){ld('//front.sspicy.ru/collect?sync_redirect=sspicy_adriver', cb)}
  },{
    id: 25,
    idS: '39',
    s: function(cb){ld('//tracker.rareru.ru/match?bidder_id=adriver', cb)}
  },{
    id: 26,
    idS: '43',
    s: function(cb){ld('//www.acint.net/match/?dp=45&euid='+encodeURIComponent(cid), cb)}
  },{
    id: 27,
    idS: '7_2',
    c: true,
    s: function(cb){ld('//ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=606624&bt=21&bn=606624&rnd='+rnd, cb)},
    t: 24
  },{
    id: 28,
    idS: '7_3',
    c: true,
    s: function(cb){ld('//ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=614439&bt=21&bn=614439&rnd='+rnd, cb)},
    t: 24
  },{
    id: 29,
    idS: '7_4',
    c: true,
    s: function(cb){ld('//ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=614465&bt=21&bn=614465&rnd='+rnd, cb)},
    t: 24
  },{
    id: 30,
    idS: '7_5',
    c: true,
    s: function(cb){ld('//ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=614466&bt=21&bn=614466&rnd='+rnd, cb)},
    t: 24
  },{
    id: 31,
    idS: '7_6',
    c: true,
    s: function(cb){ld('//ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=614467&bt=21&bn=614467&rnd='+rnd, cb)},
    t: 24
  },{
    id: 32,
    idS: '131',
    s: function(cb){ld('//rtb.com.ru/adriver-sync?uid='+encodeURIComponent(cid), cb)}
  },{
    id: 34,
    idS: '10009',
    s: function(cb){ld('//videoseed.ru/adsync', cb)}
  },{
    id: 37,
    idS: '141',
    s: function(cb){ld('//sync.upravel.com/adriver/sync', cb)}
  },{
    id: 35,
    idS: '7_8',
    c: true,
    s: function(cb){
      (function(L){if(typeof(ar_cn)=="undefined")ar_cn=1;
        var S='setTimeout(function(e){if(!self.CgiHref){document.close();e=parent.document.getElementById("ar_container_"+ar_bnum);e.parentNode.removeChild(e);}},3000);',
          j=' type="text/javascript"',t=0,D=document,n=ar_cn;L='' + ('https:' == document.location.protocol ? 'https:' : 'http:') + ''+L+escape(D.referrer||'unknown')+'&rnd='+Math.round(Math.random()*999999999);
        function _(){if(t++<100){var F=D.getElementById('ar_container_'+n);
          if(F){try{var d=F.contentDocument||(window.ActiveXObject&&window.frames['ar_container_'+n].document);
          if(d){d.write('<sc'+'ript'+j+'>var ar_bnum='+n+';'+S+'<\/sc'+'ript><sc'+'ript'+j+' src="'+L+'"><\/sc'+'ript>');t=0}
          else setTimeout(_,100);}catch(e){try{F.src="javascript:{document.write('<sc'+'ript"+j+">var ar_bnum="+n+"; document.domain=\""
          +D.domain+"\";"+S+"<\/sc'+'ript>');document.write('<sc'+'ript"+j+" src=\""+L+"\"><\/sc'+'ript>');}";return}catch(E){}}}else setTimeout(_,100);}}
          var _c = D.createElement('div');_c.innerHTML = '<iframe id="ar_container_'+ar_cn+'" width=1 height=1 marginwidth=0 marginheight=0 scrolling=no frameborder=0><\/iframe><div id="ad_ph_'+ar_cn+'" style="display:none;"></div>';
          D.body.appendChild(_c);
        _();ar_cn++;
      })('//ad.adriver.ru/cgi-bin/erle.cgi?sid=1&ad=605736&bt=43&bn=605736&tail256=');
      cb();
    },
    t: 24
  }]
];

if(uid == 27384237356 || uid == 20050884996 || uid == 19175897844){sC('cid', 0, 1000*60);}

/* for yandex*/
var makeCRCTable = function () {
    var c;
    var crcTable = [];
    for (var n = 0; n < 256; n++) {
      c = n;
      for (var k = 0; k < 8; k++) {
        c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
      }
      crcTable[n] = c;
    }
    return crcTable;
};
var crc32 = function (str) {
    var crcTable = window.crcTable || (window.crcTable = makeCRCTable());
    var crc = 0 ^ (-1);
    for (var i = 0; i < str.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xFF];
    }
    return (crc ^ (-1)) >>> 0;
};
if ((/MSIE (\d+\.\d+);/.test(navigator.userAgent)) || (document.body.style.msTextCombineHorizontal !== undefined)) {
    var usAge = window.navigator.userAgent;
    usAge = usAge.split(" ");
    for (var i = 0; i < usAge.length; i++) {
      if (usAge[i].indexOf('Trident') !== -1) {
        var strt = i
       }
       if (usAge[i].indexOf('rv:') !== -1) {
        var strend = i
      }
    }
    var usAg = [];
    if (strt) {
      for (var i = 0; i <= strt; i++) {
        usAg.push(usAge[i]);
      }
    }
    if (strend) {
      for (var i = strend; i < usAge.length; i++) {
        usAg.push(usAge[i]);
      }
    }
    usAg = usAg.join(' ');
    if (strt && !strend) {
      usAg = usAg.slice(0, -1) + ')';
    }
} else {
    var usAg = window.navigator.userAgent;
}

var sep = '.', _ip = ip.split(sep), cidsep = cid.slice(1).replace('==', '');
_ip = _ip[0] + '.' + _ip[1] + '.' + _ip[2];
var hash = crc32(_ip + window.location.href + usAg + '' + cidsep + '6456cb2ae565cb18dceaa12d1898837c');
/* for yandex end*/

function ld(a,b){function c(a){d||(d=!0,a(),this.onload=this.onerror=this.onreadystatechange=null)}var d=!1,e=document.createElement("img");e.onload=e.onerror=function(){c.call(this,b)},e.onreadystatechange=function(){/loaded|complete/.test(this.readyState)&&c.call(this,b)},e.src=a,document.body.appendChild(e)}function log(a){try{}catch(a){}}function validate(a){for(var b,c=[],d=0,e=a.length;d<e;d++){b=a[d];for(var f=0,g=b.length;f<g;f++){var h=[],i=b[f];i.hasOwnProperty("id")?"number"!=typeof i.id&&h.push('The "id" attribute must be number.'):h.push('Set up the "id" attribute.'),i.hasOwnProperty("s")?"function"!=typeof i.s&&h.push('The "s" attribute must be function.'):h.push('Set up the "s" attribute.'),i.hasOwnProperty("idS")||h.push('Set up the "idS" attribute in '+i.id+"."),i.hasOwnProperty("t")&&"number"!=typeof i.t&&h.push('The "t" attribute must be number.'),h.length&&c.push(h.join(" "))}}return c.length&&log(c.join("\n")),c.length}var Rt=function(a){function b(a,b){return Math.floor(Math.random()*(b-a))+a}function c(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c].id===b)return!0;return!1}function d(){return Math.floor(1*new Date/1e3/60/60)}function e(a,b,c){b=b||"*",c=c||"~";var d=[];for(var e in a)a.hasOwnProperty(e)&&d.push(e+c+a[e]);return d.join(b)}function f(a,b,c){b=b||"*",c=c||"~";var d={},e=a.split(b);for(var f in e)if(e.hasOwnProperty(f)){var g=e[f].split(c);2===g.length&&(d[g[0]]=g[1])}return d}function g(a,b){function c(a){var b=-1;for(var c in a)a.hasOwnProperty(c)&&parseInt(c)>b&&(b=c);return parseInt(b)}b=b||".";var d=c(a),e=new Array(d);for(var f in a)if(a.hasOwnProperty(f)){var g=parseInt(f)||-1;e[g-1]=a[f]}return e=e.join(b)}function h(a,b){b=b||".";var c={};if(!a.length)return c;for(var d=a.split(b),e=0,f=d.length;e<f;e++)d[e]&&(c[e+1]=d[e]);return c}function i(){function a(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=parseInt(a[c]));return b}var b,c=gC(t)||e({o:"",b:0});return b=f(c),b.b=parseInt(b.b),isNaN(b.b)&&(b.b=0),b.o=a(h(b.o)),b}function j(){var a=i();for(var b in a.o)a.o.hasOwnProperty(b)&&(a.o[b]=a.o[b]+a.b);return a.o}function k(a,b,e,f){for(var g,h=[],i=0,j=a.length;i<j;i++){g=a[i],h[i]||(h[i]=[]);for(var k=0,l=g.length;k<l;k++){var m=g[k],n=b[m.id],o=!n||d()-n>=m.t,p=e?m.bl:!m.bl;m.c&&p&&o&&!c(f,m.id)&&h[i].push(m)}}return h}function l(a,c){function d(a,b){for(var c=0,d=0,e=a.length;d<e;d++){var f=a[d].id,g=b[f];g||(c+=1)}return c}function e(a,b,c){return a.length<b&&c.length}function f(a,c){var d=b(0,a.length);c.push(a[d]),a.splice(d,1)}function g(a,b){b.push(a[0]),a.splice(0,1)}function h(a,b){return c[a.id]>c[b.id]?1:c[a.id]<c[b.id]?-1:0}for(var i=[],j=u,k=0,l=a.length;k<l;k++){var m=a[k],n=!m.length;if(j-=i.length,!n){if(!j)break;var o=d(m,c);if(o>=j)for(;e(i,u,m);)f(m,i);else for(m.sort(h);e(i,u,m);)g(m,i)}}return i}function m(a){for(var b=0,c=a.length;b<c;b++){var e=a[b],f=e.s,g=e.id;f(function(a){return function(){var b=d();o(a,b);var c=p();c?sC(w,1,1e3*c*60*60):sC(w,0,-1e3)}}(g))}}function n(a){function b(a){var b=-1;for(var c in a)a.hasOwnProperty(c)&&(b===-1||a[c]<b)&&(b=a[c]);return b}function c(a,b){for(var c in a)a.hasOwnProperty(c)&&(a[c]=a[c]-b);return a}var d=b(a),f=c(a,d),h=g(f),i=e({o:h,b:d});sC(t,i,31536e7)}function o(a,b){var c=j();c[a]=b,n(c)}function p(){for(var a,b,c=j(),e=0,f=R.length;e<f;e++){b=R[e];for(var g=0,h=b.length;g<h;g++){var i=b[g],k=c[i.id];if(!k||d()-k>=i.t)return!1;var l=k+i.t-d();a?a>l&&(a=l):a=l}}return a>v?v:a}function q(a,b){for(var c,d=0,e=a.length;d<e;d++){c=a[d];for(var f=0,g=c.length;f<g;f++){var h=c[f];h.hasOwnProperty("t")||(h.t=b.t),h.hasOwnProperty("c")||(h.c=b.c)}}}function r(a){a=a||{},u=a.mS||u;var b=a.bl||0,c=a.R||R,d=a.wo||[];q(c,{t:168,c:cid&&0==cookiestate});var e=j(),f=k(c,e,b,d),g=l(f,e);if(m(g,e),!g.length){var h=p();h?sC(w,1,1e3*h*60*60):sC(w,0,-1e3)}return g}function s(a){function b(a){var b=[],c=j();for(var e in a)a.hasOwnProperty(e)&&(!c.hasOwnProperty(a[e].id)||d()-c[a[e].id]>=a[e].t)&&b.push(a[e]);return b}function c(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(a[c].idS);return b}function e(a,b){return a>b?1:a<b?-1:0}function f(){document.all?document.execCommand("Stop"):window.stop()}function g(){var a=document.getElementsByTagName("img");for(var b in a)a.hasOwnProperty(b)&&(a[b].onload=a[b].onerror=a[b].onreadystatechange=null)}var h=a.called||[],i=a.tl||5,k=a.freqLog||100,l=a.url||"";setTimeout(function(){var a=b(h);a.length&&(g(),f(),tr(k)&&ld(l+"&custom="+encodeURIComponent("1="+c(a).sort(e).join(","))+"&rnd="+rnd,function(){}))},1e3*i)}var t=a.cN||"sc",u=a.mS||5,v=a.mNS||288e5,w=a.compN;return{st:r,addTL:s}}({cN:"sn",mS:50,mNS:4,compN:window.compN});if(sC("sc",0,-1e3),sC("scCo",0,-1e3),sC("scCom",0,-1e3),!validate(R)){var calledI=Rt.st({bl:1}),calledOneII=Rt.st({mS:1,R:[R[1]],wo:calledI});if(1*_all){var cAll=function(){var a=calledI.concat(calledOneII),b=Rt.st({mS:50,wo:a});Rt.addTL({called:a.concat(b),tl:5,freqLog:1,url:"//ad.adriver.ru/cgi-bin/rle.cgi?sid=1&ad=340241&bt=21&pid=2429011&bid=5071447&bn=5071447"})};pL?cAll():window.addEventListener("message",function(a){isPL(a)&&cAll()})}}}catch(a){}
