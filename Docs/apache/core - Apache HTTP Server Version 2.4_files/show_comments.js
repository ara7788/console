var last = 6711;
var cached = false;
var threads = new Array();
threads[531] = {"age":41158,"approved":1,"deleted":0,"flag":"","gravatar":"","id":531,"name":"Rowan Collins","rating":0,"replyto":0,"text":"The new \"Define\" directive is a little light on documentation regarding uses outside of <IfDefine>.\r\n\r\nThe current text says \"The variable can be used in the configuration using the ${VAR} syntax.\" But there is no explanation of how this works, nor any examples of its use.\r\n\r\nSome points that need covering:\r\n- Can I write \"${DIRECTIVE} ${ARG1} ${ARG2}\"? (I'm guessing not, but the current explanation doesn't rule it out.)\r\n- Does the module defining the directive need to process the substitution, or does it happen before the directive is evaluated?\r\n- If for some reason I want to use the literal value \"${FOO}\" (or pass it to a specific module to be processed in a non-standard way), is there an escaping mechanism?\r\n- If I use the ${FOO} syntax without defining \"FOO\", how does this evaluate? What if I define it with no value (\"Define Foo\")?\r\n\r\nMaybe this is documented elsewhere; if so, a link should be added to this section, as this looks like a useful addition to 2.4.\r\n\r\nThanks,\r\nRowan","trusted":0}; 
threads[999] = {"age":38565,"approved":1,"deleted":0,"flag":"","gravatar":"","id":999,"name":"thumbs","rating":0,"replyto":0,"text":"It was recently brought to my attention in #httpd that SERVER_PORT could be spoofed with a Host: header containing another port.\r\n\r\nA default value of \"On\" for the UseCanonicalPhysicalPort directive would be a sensible default, instead of relying on the stock config files setting it up.\r\n\r\nPerhaps someone with more knowledge of the history of that directive could tell me why the current default value is \"Off\"?","trusted":1}; 
threads[1000] = {"age":38565,"approved":1,"deleted":0,"flag":"","gravatar":"","id":1000,"name":"webarto","rating":0,"replyto":999,"text":"To add:\r\n\r\nUseCanonicalName Off | DNS\r\n\r\n    Parsed port from Host: header\r\n    Physical port\r\n\r\nIf this directive if off (and it is by default), it will still favor Host header.","trusted":0}; 
threads[1426] = {"age":36087,"approved":1,"deleted":0,"flag":"","gravatar":"","id":1426,"name":"Jak Wings","rating":0,"replyto":0,"text":"When using hard coded string, there is no way to set the charset with .htaccess\r\n\r\nErrorDocument 403 \"&#22247; <- Can you see it?\"","trusted":0}; 
threads[1764] = {"age":33888,"approved":1,"deleted":0,"flag":"","gravatar":"","id":1764,"name":"Andreas Born","rating":0,"replyto":0,"text":"Like %r for LogFormat, ErrorLogFormat should accept a variable containing the http request line, because this may be an important error information. By now it seems that only named http headers can be logged, not the request uri.\n\nHowever, a workaround is to use SetEnvIf to store this information in an environment variable.\n\nSetEnvIf Request_URI \"(^.*$)\" RURI=$1\nErrorLogFormat request \"[%{uc}t] R:% L URI:'% {RURI}e'\"\n\n","trusted":0}; 
threads[2254] = {"age":30358,"approved":1,"deleted":0,"flag":"","gravatar":"","id":2254,"name":"legec","rating":0,"replyto":0,"text":"Apparently, the ErrorLogFormat directive also accepts \"%{c}t\" as a token to output the date/time, formatted  yyyy-mm-dd hh:ii:ss  (without the microseconds added by %{cu})\n(tested on my local apache server  Apache/2.4.6 (Ubuntu) )\n\nIs there a way to format the date according to RFC 3339, as in :\n2006-01-02T15:04:05-07:00   ?","trusted":0}; 
threads[3285] = {"age":23965,"approved":1,"deleted":0,"flag":"","gravatar":"","id":3285,"name":"BobSanDiego","rating":0,"replyto":0,"text":"It appears in Apache 2.4.7 the LogLevel for logging \"file not found\" to the error log has been reduced to \"info,\" and thus no longer reports in the default \"warn.\"  Perhaps this could be documented here, or better yet, shown in the table of LogLevel examples.","trusted":0}; 
threads[3542] = {"age":22270,"approved":1,"deleted":0,"flag":"","gravatar":"","id":3542,"name":"Dominique Dumont","rating":0,"replyto":0,"text":"May be you should mention that Define directive doesn't work as expected inside <If expr></If> directive: Define is evaluated even if \"expr\" is false.\n","trusted":0}; 
threads[3543] = {"age":22270,"approved":1,"deleted":0,"flag":"","gravatar":"","id":3543,"name":"covener","rating":0,"replyto":3542,"text":"Thanks for the comment. It seems that these directives should not be supported anywhere but globally.  I created a bugzilla issue here: https://issues.apache.org/bugzilla/show_bug.cgi?id=57515","trusted":1}; 
threads[3648] = {"age":21792,"approved":1,"deleted":0,"flag":"","gravatar":"","id":3648,"name":"Doug","rating":0,"replyto":0,"text":"I suggest that you explain how to use negative expressions.  For example, you say this:\n<Files \"cat.html\">\n    # Insert stuff that applies to cat.html here\n</Files>\n\nWhat then would be the syntax that applies to all files other than cat.html?","trusted":0}; 
threads[3954] = {"age":20126,"approved":1,"deleted":0,"flag":"","gravatar":"","id":3954,"name":"Nirgal","rating":0,"replyto":0,"text":"Some people complains that AddDefaultCharset doesn't work for javascript files. The documentation is explicit, it's not supposed to work.\n\nI think however to would be nice to add something like:\n\nFor javascript files that are not ascii7, the charset should be defined in the <script> tag of the calling page.\nhttp://www.w3.org/TR/html5/scripting-1.html#the-script-element\n\nIt's a bit out of scope, but I think it's a FAQ.","trusted":0}; 
threads[4626] = {"age":16031,"approved":1,"deleted":0,"flag":"","gravatar":"","id":4626,"name":"Elan Ruusam�e","rating":0,"replyto":0,"text":"imho the example in errorlogformat is incorrect:\n\nErrorLogFormat \"[%t] [%l] [pid %P] %F: %E: [client %a] %M\"\n\nthe space should be escaped to avoid weird \"cuts\" if client for example is not available:\n\nErrorLogFormat \"[%t] [%l] [pid\\ %P] %F: %E: [client\\ %a] %M\"\n\n","trusted":0}; 
threads[5113] = {"age":13014,"approved":1,"deleted":0,"flag":"","gravatar":"","id":5113,"name":"Kevin","rating":0,"replyto":0,"text":"PLEASE can we add a note on sethandler, indicating that it takes precedence over any addhandler directives regardless of order in the conf files?","trusted":0}; 
threads[5167] = {"age":12668,"approved":1,"deleted":0,"flag":"resolved","gravatar":"","id":5167,"name":"Jonas Stunkat","rating":0,"replyto":0,"text":"Just a minor thing, I just noticed this:\n\n<LocationMatch ^/app/(?<sub>[^/] )/>\n     SetHandler \"proxy:unix:/var/run/app_%{env:MATCH_sub}.sock|fcgi://localhost:8080\"\n</FilesMatch>\n\nI guess this should be:\n\n<LocationMatch ^/app/(?<sub>[^/] )/>\n     SetHandler \"proxy:unix:/var/run/app_%{env:MATCH_sub}.sock|fcgi://localhost:8080\"\n</LocationMatch>","trusted":0}; 
threads[5168] = {"age":12668,"approved":1,"deleted":0,"flag":"","gravatar":"","id":5168,"name":"covener","rating":0,"replyto":5167,"text":"Thanks, fix on the way.","trusted":1}; 
threads[5214] = {"age":12319,"approved":1,"deleted":0,"flag":"","gravatar":"","id":5214,"name":"aduzsardi","rating":0,"replyto":5168,"text":"Shouldn't that be %{env:MATCH_SUB} ?\nOr it is only the MATCH part that needs to be UCASE ? ","trusted":0}; 
threads[5417] = {"age":11200,"approved":1,"deleted":0,"flag":"","gravatar":"","id":5417,"name":"rick","rating":0,"replyto":0,"text":"\nIn porting from Apache 2.2 to 2.4,\nI found a change in behavior of <Location>\n2.4 Docs say\n...\" <Location> sections are processed in the order they appear in the configuration file, ...\"\n\nand indeed this is how it works in 2.2,\nbut in 2.4 it seems to be the opposite,  in 2.4\n  a url of  /x/ is handled by  \n  with a configuration like:\n\n  <location \"/x/\"> ... </location>\n  <location \"/xy/\"> ... </location>\n  <location \"/\"> ... </location>\n\na url of  /x/ is handled by the last section\n(in 2.2 it is handled by the first, which is what i would\nexpect from reading the doc).\n\n(This is in the context of a pure reverse proxy, all requests are proxied incl.  \"/\")\n\n","trusted":0}; 
threads[5418] = {"age":11200,"approved":1,"deleted":0,"flag":"","gravatar":"","id":5418,"name":"covener","rating":0,"replyto":5417,"text":"I suggest taking your issue to the users mailing list.  In both cases, the directives inside of the Location section should be merged in the order that matching sections appear.  ","trusted":1}; 
threads[5449] = {"age":10984,"approved":1,"deleted":0,"flag":"","gravatar":"","id":5449,"name":"rick","rating":0,"replyto":5418,"text":"Thank-you for the suggestion.\n\nThis documentation says the\n\"sections are processed in the order they appear in the configuration file\" (which I gather is what you were trying to emphasize) - this is a bit misleading as it would seem to imply a 'First Match' wins: but this is not the case.\n\nWhile the Location directives are processed in order, it is the last match that wins:\n\n<Location \"/foo\">\n</Location>\n<Location \"/foo/bar\">\n</Location>\n\n  /foo/bar  is processed by /foo/bar/  not /foo\n\nThis is most definitely not the same \n\"processed in order of appearance\" of v2.2.\n","trusted":0}; 
threads[5452] = {"age":10981,"approved":1,"deleted":0,"flag":"","gravatar":"","id":5452,"name":"covener","rating":0,"replyto":5449,"text":"When multiple matching sections match, the enclosed configs are merged together. Each module determines how its directives are merged.\n\nhttps://httpd.apache.org/docs/2.4/sections.html#merging\n\nThat's why it's not as simple as first or last match.  For some directives, later sections override previous. Others accumulate (like mod_headers or mod_env or mod_setenvif)","trusted":1}; 
threads[5608] = {"age":9810,"approved":1,"deleted":0,"flag":"","gravatar":"","id":5608,"name":"LarryG","rating":0,"replyto":0,"text":"From the <Location> section:\n\nThe enclosed directives will be applied to the request if the path component of the URL meets any of the following criteria:\n\nThe specified location matches exactly the path component of the URL.\nThe specified location, which ends in a forward slash, is a prefix of the path component of the URL (treated as a context root).\nThe specified location, with the addition of a trailing slash, is a prefix of the path component of the URL (also treated as a context root).\n\nWhat is the difference between ending in a forward slash, and the addition of a trailing slash? Are not items 2 and 3 the same?","trusted":0}; 
threads[5690] = {"age":8928,"approved":1,"deleted":0,"flag":"","gravatar":"","id":5690,"name":"Allan Wind","rating":0,"replyto":0,"text":"It's a good idea to document the default values (maybe at the top so it is more structured than in the inline text?).  Anyways, this comment:\n\nErrorLogFormat \"[%{u}t] [%-m:%l] [pid %P:tid %T] %7F: %E: [client\\ %a] %M% ,\\ referer\\ %{Referer}i\"\n\nis supposed to match the action in do_errorlog_default(), and I noticed these issues:\n\n1. \"[%{u}t] \" is left out conditionally if you log to syslog (rightly so).\n\n2. \"%7F: %E: \" is only used if you are logging with debug level.  This is problematic, btw, that a log event changes format based on level, as this means all your log parsing rules have to support that in case debugging is ever required.\n\n3. Missing colon after \"referer\", so it should should be \"referer:\".","trusted":0}; 
threads[6215] = {"age":4741,"approved":1,"deleted":0,"flag":"","gravatar":"","id":6215,"name":"mkormendy","rating":0,"replyto":0,"text":"For the ErrorLogFormat directive:\n\nIt's useful to note that this directive does not closely follow the same capabilities as the access LogFormat directive, where C-style control characters \"\\n\" and \"\\t\" do not represent new-lines and tabs in the output. In fact, they can block Apache from starting up depending on the sequence of format strings with the control characters.","trusted":0}; 
threads[6260] = {"age":4465,"approved":1,"deleted":0,"flag":"","gravatar":"","id":6260,"name":"Evgeny","rating":0,"replyto":0,"text":"Dear Sirs \nCould you please specify a bit more clear apache behaviour with Directory paths\ni.e. shell command ls /foo/*/ provide contents of all siblings of foo, while apache treat <Directory /foo/*/> equivalently to <Directory /foo/*>, so Unix shell style wildcards might be not the best comparison. \nThank you. \nServer version: Apache/2.4.7 (Ubuntu)\nServer built:   Jul 15 2016 15:34:04\n","trusted":0}; 
threads[6293] = {"age":4206,"approved":1,"deleted":0,"flag":"","gravatar":"","id":6293,"name":"Harri","rating":0,"replyto":0,"text":"It would be very helpful to consider a dual stack setup here, esp looking at the VirtualHost directive. Looking at \"IPv4-only\" is not contemporary, and \"IPv6-only\" is unlikely to have.\n","trusted":0}; 
threads[6577] = {"age":1806,"approved":1,"deleted":0,"flag":"","gravatar":"","id":6577,"name":"Peter","rating":0,"replyto":0,"text":"FileEtag says it's default is Inode MTime Size, however https://httpd.apache.org/docs/2.4/upgrading.html states from 2.4 onward Inode is no longer in the defaults.","trusted":0}; 
threads[6588] = {"age":1758,"approved":1,"deleted":0,"flag":"","gravatar":"","id":6588,"name":"jailletc36","rating":0,"replyto":6577,"text":"Not sure to follow you.\n\nAbove states that:\n   Default:\tFileETag MTime Size\n\nThis is consistent with upgrading.html.\n\nWhere have you seen that the default was \"Inode MTime Size\"?","trusted":1}; 
threads[6640] = {"age":1329,"approved":1,"deleted":0,"flag":"","gravatar":"","id":6640,"name":"Erwin","rating":0,"replyto":0,"text":"In German translation the option AllowEncodedSlashes is mission the value NoTranscode.","trusted":0}; 
threads[6647] = {"age":1304,"approved":1,"deleted":0,"flag":"","gravatar":"","id":6647,"name":"jailletc36","rating":0,"replyto":6640,"text":"I think that you are talking about NoDecode.\n\nAs stated at the top of the German version of this page, the German translation is out-dated (patches welcome :) )\nIf interested, you can start with:\n   httpd.apache.org/docs-project/\n   http://httpd.apache.org/docs-project/translations.html\n   http://httpd.apache.org/docs-project/goingfurther.html\n\nAny help in this area is always welcome.","trusted":1}; 
threads[6710] = {"age":840,"approved":1,"deleted":0,"flag":"resolved","gravatar":"","id":6710,"name":"bala","rating":0,"replyto":0,"text":"Please update description of AllowOverride-Direktive -> add \"None\" as a possible option.","trusted":0}; 
threads[6711] = {"age":835,"approved":1,"deleted":0,"flag":"","gravatar":"","id":6711,"name":"thumbs","rating":0,"replyto":6710,"text":"\"None\" is already listed as a possible option for that directive.","trusted":1}; 
var comments_disabled = false;
var comments_requirevaliduser = false;
var secQuestion = "What is eight minus seven?";
var comments_site = "httpd";
var comments_page = "http://httpd.apache.org/docs/2.4/mod/core.html";
var time_taken = 0.031773;
var comments_stylesheet = "basic";
var myName = unescape("");
var myEmail = "";
var rights = 0;
var protocol = "https://";
var siteURL = protocol + "comments.apache.org";
var uid = '9d17f88a42b31b027793cf62850d3ba880597148';
var old_school = 0;
var c_c = "";
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = siteURL + '/builder.js';
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);

    