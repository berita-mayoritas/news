/**
 * @license
 * Aplus <https://aplus-sdk.alibaba-inc.com/>
 * build datetime: 2025-03-27 17:08:02
 * newCoreVersion: 1.13.14
 * oldCoreVersion: 8.15.24
 */
var loadAplusJsAFunc=function(){"use strict";var t,e,n,a,o,r,i={},s={},u={},c={};function l(){if(t)return c;t=1;var e=function(t){return"function"==typeof t};c.isFunction=e;c.addScript=function(t,n,a){var o=document,r=o.getElementsByTagName("script")[0],i=o.getElementsByTagName("head")[0],s=o.createElement("script");s.type="text/javascript",s.async=!0,s.src=t,s.onerror=function(){e(a)&&a()},r?r.parentNode.insertBefore(s,r):i&&i.appendChild(s),e(n)&&n.call(this,{from:"script"})},c.getCookie=function(t){var e=document.cookie.match(new RegExp("(?:^|;)\\s*"+t+"=([^;]+)"));return e?e[1]:""};var n=1e4,a=function(t,e,a){window.fetch?function(t,e,n){fetch(t).then((function(t){return/application\/json/.test(t.headers.get("content-type"))?t.json():t.text()})).then((function(t){e(t)})).catch((function(t){n(t)}))}(t,e,a):function(t,e,a){var o;window.XMLHttpRequest&&"withCredentials"in new XMLHttpRequest?(o=new XMLHttpRequest).open("GET",t,!0):(o=new XDomainRequest).open("GET",t),o.timeout=n,o.onload=function(){o.responseText?e(o.responseText):a()},o.onerror=a,o.ontimeout=a,o.send()}(t,e,a)};return c.request=a,c.requestJS=function(t,e,n,o){/blitz/i.test(e)?o():a(t,n,o)},c.hash=function(t){var e,n=1315423911;for(e=t.length-1;e>=0;e--)n^=(n<<5)+t.charCodeAt(e)+(n>>2);return(2147483647&n).toString(16)},c}function g(){if(n)return e;n=1;var t=l();function a(t,e){return t+Math.floor(Math.random()*(e-t+1))}function o(e){var n=!1;try{var o=e.bingo_chars||"0aAbBc1CdDeE2fFgGh3HiIjJ4kKlLm5MnNoO6pPqQr7RsStT8uUvVw9WxXyY+zZ",r=t.getCookie(e.bingo_cookiename||"cna")||"";if(r){var i=r.charAt(0);n=o.indexOf(i)/o.length<=e.ratio/e.base}else n=a(1,e.base)<=e.ratio}catch(t){n=a(1,e.base)<=e.ratio}return n}function r(t,e){var n;for(n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var i,s=function(t,e){try{return localStorage.setItem(t,e),!0}catch(t){return!1}},u=function(t){return localStorage.getItem(t)},c=function(){var t="grey_test_key";try{return localStorage.setItem(t,1),localStorage.removeItem(t),!0}catch(t){return!1}},g=function(t){localStorage.removeItem(t)},p={base:1e4},f={_config:p};function d(t,e){var n=document;if(e){var a=n.getElementsByTagName("script")[0],o=n.createElement("script");t&&t.nonce&&o.setAttribute("nonce",t.nonce),o.appendChild(n.createTextNode(e)),a.parentNode.insertBefore(o,a)}}function v(t,e){if(t&&t.length>0)for(var n=new RegExp("^"+e),a=0;a<t.length;a++){var o=t[a];n.test(o)&&g(o)}}function h(t,e,n){try{g(t);var a=u(e);if(a)v(JSON.parse(a)||[],n)}catch(t){}try{Object&&Object.keys&&v(Object.keys(localStorage),n)}catch(t){}}function m(t,e,n){try{if(!i){var a=function(a){a.key===t&&a.newValue&&h(t,e,n)};if(window.addEventListener)return window.addEventListener("storage",a,!1),!1;window.attachEvent("storage",a)}i=!0}catch(t){}}function _(e,n){t.addScript(n.url,e.callback,(function(){n.oldCode&&(d(e,n.oldCode),t.isFunction(e.callback)&&e.callback.call(this,{from:"oldCode"}))}))}function b(e,n,a){var o=window,r=o.XDomainRequest,i=o.XMLHttpRequest&&"withCredentials"in new o.XMLHttpRequest,l=n.after;if(!n.isDebug&&c()&&(i||r)){var g=function(t){var e;try{var n=u(t.LS_KEY_CLUSTER);if(n){var a=JSON.parse(n);e=u(a[0])}}catch(t){}return e}(n),p=n.LS_KEY+t.hash(e),f=u(p);f?(m(p,n.LS_KEY_CLUSTER,n.LS_PREFIX),d(n,f),t.isFunction(l)&&l.call(this,{from:"local"})):t.requestJS(e,navigator.userAgent,(function(o){!function(e,n){var a,o="cors",r=n.code,i=n.key,u=r?r.split("\n").length:0;u>=n.size&&(d(e,r),h(i,e.LS_KEY_CLUSTER,e.LS_PREFIX),s(e.LS_KEY_CLUSTER,JSON.stringify([i])),s(i,r),a=!0),u<n.size&&n.oldCode&&(o="oldCode",d(e,n.oldCode),a=!0),a||_(e,n),m(i,e.LS_KEY_CLUSTER,e.LS_PREFIX),t.isFunction(e.callback)&&e.callback.call(this,{from:o})}(n,{key:p,code:o,oldCode:g,size:a,url:e})}),(function(){_(n,{url:e,oldCode:g})}))}else t.addScript(e,l)}return f.load=function(e){var n;e=r({LS_KEY_CLUSTER:"",LS_KEY:"",isLoadDevVersion:"",dev:"",stable:"",grey:"",base:p.base,bingo:"",nonce:""},e);var a={},i=0,s="function"==typeof e.bingo?e.bingo:o;e.ratio>=e.base||s(e)?(n=e.grey,a.type="grey",i=e.greySize):(n=e.stable,a.type="stable",i=e.stableSize);try{t.isFunction(e.isLoadDevVersion)&&e.isLoadDevVersion()&&(n=e.dev,a.type="dev",i=e.devSize)}catch(t){}return a.url=n,t.isFunction(e.before)?e.before(a,(function(t){b(t,e,i)})):b(n,e,i),t.isFunction(e.after)&&(e.after=function(t,e){return function(n){return t(r(e,n||{}))}}(e.after,a)),this},f.config=function(t){return r(p,t||{}),this},e=f}function p(){return a||(a=1,u.grey=g(),u.util=l()),u}function f(){if(o)return s;var t,e;o=1;var n=p().util;function a(t){var e=window.location.search&&window.location.search.length>0?window.location.search.substring(1):"",n=e.length>0?e.split("&"):[],a={};return n.forEach((function(t){var e=t.split("=")[0],n=t.split("=")[1];a[e]=n})),t?a[t]:a}function r(t,e){return t&&t.getAttribute&&t.getAttribute(e)||""}function i(n){return t=t||document.getElementsByTagName("head")[0],e&&!n?e:t?e=t.getElementsByTagName("meta"):[]}function u(t,e){var n;if(document.querySelector)n=r(document.querySelector('meta[name="'+t+'"]'),e||"content");else for(var a=i(),o=a.length,s=0;s<o;s++){var u=a[s];r(u,"name")===t&&(n=r(u,e||"content"))}return n||""}s.getArgsQuery=a,s.addScript=function(t,e){var a=t,o=/^http(s)?:/;a=o.test(t)?a.replace(o,location.protocol):location.protocol+(/^\/\//.test(a)?"":"//")+a,n.addScript(a,(function(){"function"==typeof e&&e()}))},s.tryToGetAttribute=r,s.getMetaTags=i,s.getMetaCnt=u,s.indexof=function(t,e){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1};var c=function(t,e){return(t+="").length<e&&(t="0"+t),t};s.getDateMin=function(){var t=new Date,e="";return e+=t.getFullYear(),e+=c(t.getMonth()+1,2),e+=c(t.getDate(),2),e+=c(t.getHours(),2),e+=c(t.getMinutes(),2)},s.isMobile=function(t){var e=/AliApp|Yunos|cyclone/i.test(t),n=/iPhone|iPad|iPod/i.test(t),a=/Android/i.test(t),o=/Windows Phone/i.test(t)||/IEMobile/i.test(t)||/WPDesktop/i.test(t),r=/BlackBerry/i.test(t),i=/Opera Mini/i.test(t);return e||n||a||o||r||i};var l=function(){var t;try{t=document.getElementById("beacon-aplus")||document.getElementById("tb-beacon-aplus")}catch(t){}return t};s.getCurrentNode=l,s.loopAddScript=function(t,e){try{if(e&&e instanceof Array){var a=0,o=function(r){r&&n.addScript(t+"/"+r,(function(){o(e[++a])}))};o(e[a])}}catch(t){}};var g=function(t,e,n){var a=window,o=a.goldlog_queue||(a.goldlog_queue=[]),r=t;"object"==typeof e&&e.message&&(r=r+"_"+e.message),n&&n.msg&&(r+="_"+n.msg),o.push({action:"goldlog._aplus_cplugin_m.do_tracker_jserror",arguments:[{ratio:window.goldlog&&window.goldlog.aplusDebug?1:.01,message:r,error:JSON.stringify(e),filename:t}]})};return s.catchException=g,s.getCdnpath=function(){var t="//assets.alicdn.com/g",e="//u.alicdn.com",n="//laz-g-cdn.alicdn.com",a=l(),o="//g.alicdn.com",r=[t,"//s.alicdn.com/@g/","//g-assets.daily.taobao.net",e,n,"//g.lazcdn.com/g"],i=new RegExp(e);if(a)for(var s=0;s<r.length;s++){if(new RegExp(r[s]).test(a.src)){o=r[s],i.test(a.src)&&(o=t);break}}if(o===n){var u=window.navigator?window.navigator.language:"";g("getCdnpath",{lang:u},{msg:"laz_g_cdn"})}return o},s.aplusVersions={V_O:"aplus_o.js",V_2:"aplus_v2.js",V_W:"aplus_wap.js",V_S:"aplus_std.js",V_I:"aplus_int.js",V_U:"aplus_u.js"},s.isUseNewAplusJs=function(){var t=u("aplus-core")||a("aplusCore"),e=window.navigator.userAgent.toLocaleLowerCase(),n=/qq\//.test(e),o=/micromessenger/.test(e),r=/(taobao\.com)|(tmall\.com)/.test(location.hostname),i=["www.taobao.com/","www.dingtalk.com/"].indexOf(location.hostname+location.pathname)>-1,s=/aone\.alibaba-inc\.com/.test(location.hostname),c=["we.taobao.com","creator.guanghe.taobao.com","h5.m.goofish.com","account.yuekeyun.com","dengta.taopiaopiao.com","myseller.taobao.com","dms.alibaba-inc.com","qn.taobao.com"].indexOf(location.hostname)>-1,l=["aplus.js"].indexOf(t)>-1;return(n||o)&&r||i||c||s||l},s}function d(){if(r)return i;r=1;var t,e=f(),n=e.aplusVersions,a=[n.V_O,n.V_S,n.V_I,n.V_W,n.V_U];i.getNewCdnpathByMeta=function(){var n;t||(t=e.getMetaCnt("aplus-version"));var a=t;if(/^\d+$/.test(a))n="//d.alicdn.com/alilog/mlog/aplus/"+a+".js";else{var o=a.split("@");2===o.length&&(n="//d.alicdn.com/alilog/mlog/aplus.js?id="+o[1])}return n};var o=function(){var t="";try{var n=e.getCurrentNode();if(n&&(t=n.getAttribute("src")),t||(t=function(){try{for(var t=document.getElementsByTagName("script"),e=0;e<t.length;e++){var n=t[e].getAttribute("src");if(/alilog\/mlog\/aplus_\w+\.js/.test(n)||/alicdn\.com\/js\/aplus_\w+\.js/.test(n))return n}return""}catch(t){return""}}()),t){var a=t.match(/aplus_\w+\.js/);"object"==typeof a&&a.length>0&&(t=a[0])}}catch(e){t=""}finally{return t}};return i.getAplusBuVersion=function(){var r,i;try{r=n.V_S;var s=o();s&&(r=s);var u=function(){for(var t=[{version:n.V_O,domains:[/^https?:\/\/(.*\.)?youku\.com/i,/^https?:\/\/(.*\.)?tudou\.com/i,/^https?:\/\/(.*\.)?soku\.com/i,/^https?:\/\/(.*\.)?laifeng\.com/i],BU:"YT"}],e=0;e<t.length;e++)for(var a=t[e].domains,o=t[e].version,r=0;r<a.length;r++)if(location.href.match(a[r]))return{v:o,BU:t[e].BU};return{v:void 0,BU:void 0}}();u&&u.v&&(r=u.v),i=u.BU;var c=function(){t||(t=e.getMetaCnt("aplus-version"));var n=t;return n&&(n+=".js"),e.indexof(a,n)>-1?n:null}();c&&(r=c),r===n.V_2&&(r=n.V_S)}catch(t){r=r===n.V_O?n.V_W:n.V_S}finally{return{v:r,BU:i}}},i}var v,h,m={},_={};function b(){if(v)return _;v=1;var t=document,e=window,n=f(),a=n.aplusVersions,o=e.navigator.userAgent,r=/WindVane/i.test(o),i=/AliBaichuan/i.test(o);function s(t){return r&&!e.WindVane&&t.fn!==a.V_O}function u(t){return(i||r&&!e.WindVane)&&t.fn===a.V_O}var c=function(t){return t.fn!==a.V_O&&t.fn!==a.V_U},l=function(){try{var n=e.localStorage,a="aplus_track_debug_id",o=new RegExp("[?|&]"+a+"=(\\w*)"),r=location.href.match(o);if(r&&r.length>0)n.setItem(a,r[1]);else{var i=(t.referrer||"").match(o);if(i&&i.length>0)n.setItem(a,i[1]);else{var s=(e.name||"").match(o);s&&s.length>0&&n.setItem(a,s[1])}}var u=n.getItem(a)||"";return!!(u&&u.length>50)}catch(t){return!1}},g=function(){try{return!!/lazada/.test(location.host)}catch(t){return!1}},p=function(t){try{if("function"==typeof e.WebSocket){var r=/alibaba-inc|aliway|alibabacorp\.com/.test(location.hostname),i=n.getMetaCnt("aplus-channel"),s="GET"===i||"POST"===i,u=/tppnext\.alibaba-inc.com/.test(location.hostname);if(s&&u)return!1;var c=/aplus_ws=true/.test(location.search)||"WS"===i||"WS-ONLY"===i,l=location.host,g=/tmall|taobao\.com/g.test(l),p=/Qianniu\/\d/.test(o),f=r||c||g&&!n.isMobile(o)&&!p&&t.fn!==a.V_W;return f&&(goldlog.aplusChannel="WS"),f}return!1}catch(t){return!1}};function d(t,e){var n=(t.trackerCfg||{}).points||[];if(n.length>0)for(var a=new RegExp(e),o=0;o<n.length;o++)if(a.test(n[o].trackerType))return!0;return!1}function h(t){return d(t,"exposure")||!!n.getMetaCnt("aplus-auto-exp")}function m(t){return d(t,"click")||!!n.getMetaCnt("aplus-auto-clk")}return _.getFrontPlugins=function(t){var e,a=t.isUseNewAplusJs,r=(a?"aplus/":"s/")+t.version+"/plugin",i="s/"+t.version+"/plugin",c=goldlog.aplus_cplugin_ver,f=(t.isDebug,e="",/Umeng4Aplus|UT4Aplus/i.test(o)&&(e="aplus4native.js"),e);return[{enable:!a&&s(t),path:[r,a?"aplus_windvane3.js":"aplus_windvane2.js"].join("/")},{enable:u(t)&&!a,path:[i,"aplus_bcbridge.js"].join("/")},{enable:!a&&!!f,path:a?[r,"aplus4native.js"].join("/"):["aplus_cplugin",c,f].join("/")},{enable:!!n.getMetaCnt("aplus-vt-cfg")||!!n.getMetaCnt("aplus-vt-cfg-url"),path:[r,"aplus_webvt.js"].join("/")},{enable:!a,path:[r,"aplus_client.js"].join("/")},{enable:!a,path:["aplus_cplugin",c,"toolkit.js"].join("/")},{enable:!a,path:["aplus_cplugin",c,"monitor.js"].join("/")},{enable:!a&&l(),path:["aplus_cplugin",c,"track_deb.js"].join("/")},{enable:g(),path:["aplus_plugin_lazada","lazadalog.js"].join("/")},{enable:!a&&p(t),path:[r,"aplus_ws.js"].join("/")},{enable:h(t)&&!a,path:[r,"aplus_ae.js"].join("/")},{enable:m(t)&&!a,path:[r,"aplus_ac.js"].join("/")}]},_.getPlugins=function(t){var e=t.isUseNewAplusJs,a=(e?"aplus/":"s/")+t.version+"/plugin";return[{enable:e&&"on"===n.getMetaCnt("aplus-apm-track"),path:[a,"aplus_apm_trace.js"].join("/")},{enable:/_a_ig_v=@aplus/.test(location.search),path:"aplus_plugin_guide/index.js"},{enable:c(t),path:[a,"aplus_spmact.js"].join("/")}]},_}function y(){if(h)return m;h=1;var t=b(),e=f().getCurrentNode(),n=function(t){var n=[];try{if(e)n=e.getAttribute(t||n).split(",")}catch(t){n=[]}finally{return n}},a=function(t){var e=[];if(t)for(var n=0;n<t.length;n++){var a=t[n].enable,o=t[n].path;(!0===a||"function"==typeof a&&a())&&e.push(o)}return e};return m.getPlugins=function(e){var o=t.getPlugins(e);return[].concat(a(o),n("plugins"))},m.getFrontPlugins=function(e){var o=t.getFrontPlugins(e);return[].concat(a(o),n("frontPlugins"))},m.getTrackerCfg=t.getTrackerCfg,m}return function(t){try{for(var e,n=t,a=[{key:"202503271700",value:.1},{key:"202503281000",value:.5},{key:"202503281400",value:1}],o="g_aplus_grey_launched",r=document.getElementsByTagName("script"),i=0;i<r.length;i++)/mlog\/aplus\.js/.test(r[i].getAttribute("src"))&&(e=!0);if(e||n[o])return;n[o]=1;var s=d(),u=p().util,c=p().grey,l=f(),g=y(),v=l.isUseNewAplusJs(),h=function(){var t=n.goldlog||(n.goldlog={}),e=!0;try{var o=n.location.href.match(/aplusDebug=(true|false)/);o&&o.length>0&&n.localStorage.setItem("aplusDebug",o[1]),e="true"===n.localStorage.getItem("aplusDebug"),t.aplusDebug=e}catch(t){}var r=v?"APLUS_CORE":"APLUS_S_CORE",i=r+"_1.0.4_20250327170802_",u=n.location.protocol;0!==u.indexOf("http")&&(u="https:");var p=v?"//d.alicdn.com":l.getCdnpath();t.getCdnPath=l.getCdnpath;var f=u+p+"/alilog",d=s.getAplusBuVersion(),h=d.v,m=d.BU,_=l.getArgsQuery("aplusCoreVersion")||l.getMetaCnt("aplus-core-version"),b=_||"1.13.12",y=_||"1.13.14",w=y,S=_||"8.15.23",j=_||"8.15.24",C=j,E=v?undefined:1e4,A=a,L=function(t){var a,o=e?[]:g.getFrontPlugins({version:t,fn:h,BU:m,isDebug:e,isUseNewAplusJs:v}),r=v?[["aplus",t,l.isMobile(n.navigator.userAgent)?"aplus_wap.js":"aplus_pc.js"].join("/")]:[["s",t,h].join("/")],i=e?[]:g.getPlugins({version:t,fn:h,BU:m,isUseNewAplusJs:v}),s=0;try{var u=[].concat(o,r,i);a=f+"/??"+u.join(",")+"?v=20250327170802",s=u.length}catch(t){a=f+"/??"+r.join(","),s=r.length}return{size:s,url:a}},k=function(){var t="";if(A&&A.length>0)for(var e=l.getDateMin(),n=0;n<A.length;n++){e>=A[n].key+""&&(t=Math.floor(1e4*A[n].value))}return t}();k&&!E&&(E=k),t.aplus_cplugin_ver="0.7.12",t.record||(t.record=function(t,e,a,o){(n.goldlog_queue||(n.goldlog_queue=[])).push({action:"goldlog.record",arguments:[t,e,a,o]})});var V=v?b:S,U=v?y:j,M=v?w:C,B=L(M),N=L(V),T=L(U),P=l.getCurrentNode(),O=P?P.getAttribute("cspx"):"",R={LS_KEY_CLUSTER:"APLUS_LS_KEY",LS_KEY:i,LS_PREFIX:r,isDebug:e,isLoadDevVersion:!1,dev:B.url,devSize:B.size,stable:N.url,stableSize:N.size,grey:T.url,greySize:T.size,ratio:E,nonce:O,before:function(n,a){switch(n.type){case"grey":case"dev":t.lver=M;break;case"stable":t.lver=V}if(e){var o={version:t.lver,fn:h,BU:m,isDebug:e,isUseNewAplusJs:v};l.loopAddScript(f,g.getFrontPlugins(o))}"function"==typeof a&&a(L(t.lver).url)}};e&&(R.after=function(){var e=0,a=function(){if(!(e>=100)){e++;var o=t._$||{};n.setTimeout((function(){"complete"===o.status?l.loopAddScript(f,g.getPlugins({version:t.lver,fn:h,BU:m,isUseNewAplusJs:v})):a()}),100)}};a()}),c.load(R)},m=s.getNewCdnpathByMeta();m?u.addScript(m,(function(){}),(function(){h()})):h()}catch(e){t.console.log("------------ [APLUS LOG] aplus加载器异常 ------------"),t.console.log(e)}}(window),{}}();
