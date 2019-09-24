export const savedNYArtBeat = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:og="http://ogp.me/ns#" xmlns:fb="http://www.facebook.com/2008/fbml" xml:lang="en" lang="en">
<head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8" /><script type="text/javascript">(window.NREUM||(NREUM={})).loader_config={xpid:"XAICUFVVGwYCUlVVDgk="};window.NREUM||(NREUM={}),__nr_require=function(t,n,e){function r(e){if(!n[e]){var o=n[e]={exports:{}};t[e][0].call(o.exports,function(n){var o=t[e][1][n];return r(o||n)},o,o.exports)}return n[e].exports}if("function"==typeof __nr_require)return __nr_require;for(var o=0;o<e.length;o++)r(e[o]);return r}({1:[function(t,n,e){function r(t){try{s.console&&console.log(t)}catch(n){}}var o,i=t("ee"),a=t(18),s={};try{o=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(s.console=!0,o.indexOf("dev")!==-1&&(s.dev=!0),o.indexOf("nr_dev")!==-1&&(s.nrDev=!0))}catch(c){}s.nrDev&&i.on("internal-error",function(t){r(t.stack)}),s.dev&&i.on("fn-err",function(t,n,e){r(e.stack)}),s.dev&&(r("NR AGENT IN DEVELOPMENT MODE"),r("flags: "+a(s,function(t,n){return t}).join(", ")))},{}],2:[function(t,n,e){function r(t,n,e,r,s){try{p?p-=1:o(s||new UncaughtException(t,n,e),!0)}catch(f){try{i("ierr",[f,c.now(),!0])}catch(d){}}return"function"==typeof u&&u.apply(this,a(arguments))}function UncaughtException(t,n,e){this.message=t||"Uncaught error with no additional information",this.sourceURL=n,this.line=e}function o(t,n){var e=n?null:c.now();i("err",[t,e])}var i=t("handle"),a=t(19),s=t("ee"),c=t("loader"),f=t("gos"),u=window.onerror,d=!1,l="nr@seenError",p=0;c.features.err=!0,t(1),window.onerror=r;try{throw new Error}catch(h){"stack"in h&&(t(8),t(7),"addEventListener"in window&&t(5),c.xhrWrappable&&t(9),d=!0)}s.on("fn-start",function(t,n,e){d&&(p+=1)}),s.on("fn-err",function(t,n,e){d&&!e[l]&&(f(e,l,function(){return!0}),this.thrown=!0,o(e))}),s.on("fn-end",function(){d&&!this.thrown&&p>0&&(p-=1)}),s.on("internal-error",function(t){i("ierr",[t,c.now(),!0])})},{}],3:[function(t,n,e){t("loader").features.ins=!0},{}],4:[function(t,n,e){function r(t){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var o=t("ee"),i=t("handle"),a=t(8),s=t(7),c="learResourceTimings",f="addEventListener",u="resourcetimingbufferfull",d="bstResource",l="resource",p="-start",h="-end",m="fn"+p,w="fn"+h,v="bstTimer",y="pushState",g=t("loader");g.features.stn=!0,t(6);var x=NREUM.o.EV;o.on(m,function(t,n){var e=t[0];e instanceof x&&(this.bstStart=g.now())}),o.on(w,function(t,n){var e=t[0];e instanceof x&&i("bst",[e,n,this.bstStart,g.now()])}),a.on(m,function(t,n,e){this.bstStart=g.now(),this.bstType=e}),a.on(w,function(t,n){i(v,[n,this.bstStart,g.now(),this.bstType])}),s.on(m,function(){this.bstStart=g.now()}),s.on(w,function(t,n){i(v,[n,this.bstStart,g.now(),"requestAnimationFrame"])}),o.on(y+p,function(t){this.time=g.now(),this.startPath=location.pathname+location.hash}),o.on(y+h,function(t){i("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),f in window.performance&&(window.performance["c"+c]?window.performance[f](u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["c"+c]()},!1):window.performance[f]("webkit"+u,function(t){i(d,[window.performance.getEntriesByType(l)]),window.performance["webkitC"+c]()},!1)),document[f]("scroll",r,{passive:!0}),document[f]("keypress",r,!1),document[f]("click",r,!1)}},{}],5:[function(t,n,e){function r(t){for(var n=t;n&&!n.hasOwnProperty(u);)n=Object.getPrototypeOf(n);n&&o(n)}function o(t){s.inPlace(t,[u,d],"-",i)}function i(t,n){return t[1]}var a=t("ee").get("events"),s=t(21)(a,!0),c=t("gos"),f=XMLHttpRequest,u="addEventListener",d="removeEventListener";n.exports=a,"getPrototypeOf"in Object?(r(document),r(window),r(f.prototype)):f.prototype.hasOwnProperty(u)&&(o(window),o(f.prototype)),a.on(u+"-start",function(t,n){var e=t[1],r=c(e,"nr@wrapped",function(){function t(){if("function"==typeof e.handleEvent)return e.handleEvent.apply(e,arguments)}var n={object:t,"function":e}[typeof e];return n?s(n,"fn-",null,n.name||"anonymous"):e});this.wrapped=t[1]=r}),a.on(d+"-start",function(t){t[1]=this.wrapped||t[1]})},{}],6:[function(t,n,e){var r=t("ee").get("history"),o=t(21)(r);n.exports=r;var i=window.history&&window.history.constructor&&window.history.constructor.prototype,a=window.history;i&&i.pushState&&i.replaceState&&(a=i),o.inPlace(a,["pushState","replaceState"],"-")},{}],7:[function(t,n,e){var r=t("ee").get("raf"),o=t(21)(r),i="equestAnimationFrame";n.exports=r,o.inPlace(window,["r"+i,"mozR"+i,"webkitR"+i,"msR"+i],"raf-"),r.on("raf-start",function(t){t[0]=o(t[0],"fn-")})},{}],8:[function(t,n,e){function r(t,n,e){t[0]=a(t[0],"fn-",null,e)}function o(t,n,e){this.method=e,this.timerDuration=isNaN(t[1])?0:+t[1],t[0]=a(t[0],"fn-",this,e)}var i=t("ee").get("timer"),a=t(21)(i),s="setTimeout",c="setInterval",f="clearTimeout",u="-start",d="-";n.exports=i,a.inPlace(window,[s,"setImmediate"],s+d),a.inPlace(window,[c],c+d),a.inPlace(window,[f,"clearImmediate"],f+d),i.on(c+u,r),i.on(s+u,o)},{}],9:[function(t,n,e){function r(t,n){d.inPlace(n,["onreadystatechange"],"fn-",s)}function o(){var t=this,n=u.context(t);t.readyState>3&&!n.resolved&&(n.resolved=!0,u.emit("xhr-resolved",[],t)),d.inPlace(t,y,"fn-",s)}function i(t){g.push(t),h&&(b?b.then(a):w?w(a):(E=-E,R.data=E))}function a(){for(var t=0;t<g.length;t++)r([],g[t]);g.length&&(g=[])}function s(t,n){return n}function c(t,n){for(var e in t)n[e]=t[e];return n}t(5);var f=t("ee"),u=f.get("xhr"),d=t(21)(u),l=NREUM.o,p=l.XHR,h=l.MO,m=l.PR,w=l.SI,v="readystatechange",y=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"],g=[];n.exports=u;var x=window.XMLHttpRequest=function(t){var n=new p(t);try{u.emit("new-xhr",[n],n),n.addEventListener(v,o,!1)}catch(e){try{u.emit("internal-error",[e])}catch(r){}}return n};if(c(p,x),x.prototype=p.prototype,d.inPlace(x.prototype,["open","send"],"-xhr-",s),u.on("send-xhr-start",function(t,n){r(t,n),i(n)}),u.on("open-xhr-start",r),h){var b=m&&m.resolve();if(!w&&!m){var E=1,R=document.createTextNode(E);new h(a).observe(R,{characterData:!0})}}else f.on("fn-end",function(t){t[0]&&t[0].type===v||a()})},{}],10:[function(t,n,e){function r(){var t=window.NREUM,n=t.info.accountID||null,e=t.info.agentID||null,r=t.info.trustKey||null,i="btoa"in window&&"function"==typeof window.btoa;if(!n||!e||!i)return null;var a={v:[0,1],d:{ty:"Browser",ac:n,ap:e,id:o.generateCatId(),tr:o.generateCatId(),ti:Date.now()}};return r&&n!==r&&(a.d.tk=r),btoa(JSON.stringify(a))}var o=t(16);n.exports={generateTraceHeader:r}},{}],11:[function(t,n,e){function r(t){var n=this.params,e=this.metrics;if(!this.ended){this.ended=!0;for(var r=0;r<p;r++)t.removeEventListener(l[r],this.listener,!1);n.aborted||(e.duration=s.now()-this.startTime,this.loadCaptureCalled||4!==t.readyState?null==n.status&&(n.status=0):a(this,t),e.cbTime=this.cbTime,d.emit("xhr-done",[t],t),c("xhr",[n,e,this.startTime]))}}function o(t,n){var e=t.responseType;if("json"===e&&null!==n)return n;var r="arraybuffer"===e||"blob"===e||"json"===e?t.response:t.responseText;return w(r)}function i(t,n){var e=f(n),r=t.params;r.host=e.hostname+":"+e.port,r.pathname=e.pathname,t.sameOrigin=e.sameOrigin}function a(t,n){t.params.status=n.status;var e=o(n,t.lastSize);if(e&&(t.metrics.rxSize=e),t.sameOrigin){var r=n.getResponseHeader("X-NewRelic-App-Data");r&&(t.params.cat=r.split(", ").pop())}t.loadCaptureCalled=!0}var s=t("loader");if(s.xhrWrappable){var c=t("handle"),f=t(12),u=t(10).generateTraceHeader,d=t("ee"),l=["load","error","abort","timeout"],p=l.length,h=t("id"),m=t(15),w=t(14),v=window.XMLHttpRequest;s.features.xhr=!0,t(9),d.on("new-xhr",function(t){var n=this;n.totalCbs=0,n.called=0,n.cbTime=0,n.end=r,n.ended=!1,n.xhrGuids={},n.lastSize=null,n.loadCaptureCalled=!1,t.addEventListener("load",function(e){a(n,t)},!1),m&&(m>34||m<10)||window.opera||t.addEventListener("progress",function(t){n.lastSize=t.loaded},!1)}),d.on("open-xhr-start",function(t){this.params={method:t[0]},i(this,t[1]),this.metrics={}}),d.on("open-xhr-end",function(t,n){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&n.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid);var e=!1;if("init"in NREUM&&"distributed_tracing"in NREUM.init&&(e=!!NREUM.init.distributed_tracing.enabled),e&&this.sameOrigin){var r=u();r&&n.setRequestHeader("newrelic",r)}}),d.on("send-xhr-start",function(t,n){var e=this.metrics,r=t[0],o=this;if(e&&r){var i=w(r);i&&(e.txSize=i)}this.startTime=s.now(),this.listener=function(t){try{"abort"!==t.type||o.loadCaptureCalled||(o.params.aborted=!0),("load"!==t.type||o.called===o.totalCbs&&(o.onloadCalled||"function"!=typeof n.onload))&&o.end(n)}catch(e){try{d.emit("internal-error",[e])}catch(r){}}};for(var a=0;a<p;a++)n.addEventListener(l[a],this.listener,!1)}),d.on("xhr-cb-time",function(t,n,e){this.cbTime+=t,n?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof e.onload||this.end(e)}),d.on("xhr-load-added",function(t,n){var e=""+h(t)+!!n;this.xhrGuids&&!this.xhrGuids[e]&&(this.xhrGuids[e]=!0,this.totalCbs+=1)}),d.on("xhr-load-removed",function(t,n){var e=""+h(t)+!!n;this.xhrGuids&&this.xhrGuids[e]&&(delete this.xhrGuids[e],this.totalCbs-=1)}),d.on("addEventListener-end",function(t,n){n instanceof v&&"load"===t[0]&&d.emit("xhr-load-added",[t[1],t[2]],n)}),d.on("removeEventListener-end",function(t,n){n instanceof v&&"load"===t[0]&&d.emit("xhr-load-removed",[t[1],t[2]],n)}),d.on("fn-start",function(t,n,e){n instanceof v&&("onload"===e&&(this.onload=!0),("load"===(t[0]&&t[0].type)||this.onload)&&(this.xhrCbStart=s.now()))}),d.on("fn-end",function(t,n){this.xhrCbStart&&d.emit("xhr-cb-time",[s.now()-this.xhrCbStart,this.onload,n],n)})}},{}],12:[function(t,n,e){n.exports=function(t){var n=document.createElement("a"),e=window.location,r={};n.href=t,r.port=n.port;var o=n.href.split("://");!r.port&&o[1]&&(r.port=o[1].split("/")[0].split("@").pop().split(":")[1]),r.port&&"0"!==r.port||(r.port="https"===o[0]?"443":"80"),r.hostname=n.hostname||e.hostname,r.pathname=n.pathname,r.protocol=o[0],"/"!==r.pathname.charAt(0)&&(r.pathname="/"+r.pathname);var i=!n.protocol||":"===n.protocol||n.protocol===e.protocol,a=n.hostname===document.domain&&n.port===e.port;return r.sameOrigin=i&&(!n.hostname||a),r}},{}],13:[function(t,n,e){function r(){}function o(t,n,e){return function(){return i(t,[f.now()].concat(s(arguments)),n?null:this,e),n?void 0:this}}var i=t("handle"),a=t(18),s=t(19),c=t("ee").get("tracer"),f=t("loader"),u=NREUM;"undefined"==typeof window.newrelic&&(newrelic=u);var d=["setPageViewName","setCustomAttribute","setErrorHandler","finished","addToTrace","inlineHit","addRelease"],l="api-",p=l+"ixn-";a(d,function(t,n){u[n]=o(l+n,!0,"api")}),u.addPageAction=o(l+"addPageAction",!0),u.setCurrentRouteName=o(l+"routeName",!0),n.exports=newrelic,u.interaction=function(){return(new r).get()};var h=r.prototype={createTracer:function(t,n){var e={},r=this,o="function"==typeof n;return i(p+"tracer",[f.now(),t,e],r),function(){if(c.emit((o?"":"no-")+"fn-start",[f.now(),r,o],e),o)try{return n.apply(this,arguments)}catch(t){throw c.emit("fn-err",[arguments,this,t],e),t}finally{c.emit("fn-end",[f.now()],e)}}}};a("actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(","),function(t,n){h[n]=o(p+n)}),newrelic.noticeError=function(t,n){"string"==typeof t&&(t=new Error(t)),i("err",[t,f.now(),!1,n])}},{}],14:[function(t,n,e){n.exports=function(t){if("string"==typeof t&&t.length)return t.length;if("object"==typeof t){if("undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer&&t.byteLength)return t.byteLength;if("undefined"!=typeof Blob&&t instanceof Blob&&t.size)return t.size;if(!("undefined"!=typeof FormData&&t instanceof FormData))try{return JSON.stringify(t).length}catch(n){return}}}},{}],15:[function(t,n,e){var r=0,o=navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);o&&(r=+o[1]),n.exports=r},{}],16:[function(t,n,e){function r(){function t(){return n?15&n[e++]:16*Math.random()|0}var n=null,e=0,r=window.crypto||window.msCrypto;r&&r.getRandomValues&&(n=r.getRandomValues(new Uint8Array(31)));for(var o,i="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx",a="",s=0;s<i.length;s++)o=i[s],"x"===o?a+=t().toString(16):"y"===o?(o=3&t()|8,a+=o.toString(16)):a+=o;return a}function o(){function t(){return n?15&n[e++]:16*Math.random()|0}var n=null,e=0,r=window.crypto||window.msCrypto;r&&r.getRandomValues&&Uint8Array&&(n=r.getRandomValues(new Uint8Array(31)));for(var o=[],i=0;i<16;i++)o.push(t().toString(16));return o.join("")}n.exports={generateUuid:r,generateCatId:o}},{}],17:[function(t,n,e){function r(t,n){if(!o)return!1;if(t!==o)return!1;if(!n)return!0;if(!i)return!1;for(var e=i.split("."),r=n.split("."),a=0;a<r.length;a++)if(r[a]!==e[a])return!1;return!0}var o=null,i=null,a=/Version\/(\S+)\s+Safari/;if(navigator.userAgent){var s=navigator.userAgent,c=s.match(a);c&&s.indexOf("Chrome")===-1&&s.indexOf("Chromium")===-1&&(o="Safari",i=c[1])}n.exports={agent:o,version:i,match:r}},{}],18:[function(t,n,e){function r(t,n){var e=[],r="",i=0;for(r in t)o.call(t,r)&&(e[i]=n(r,t[r]),i+=1);return e}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],19:[function(t,n,e){function r(t,n,e){n||(n=0),"undefined"==typeof e&&(e=t?t.length:0);for(var r=-1,o=e-n||0,i=Array(o<0?0:o);++r<o;)i[r]=t[n+r];return i}n.exports=r},{}],20:[function(t,n,e){n.exports={exists:"undefined"!=typeof window.performance&&window.performance.timing&&"undefined"!=typeof window.performance.timing.navigationStart}},{}],21:[function(t,n,e){function r(t){return!(t&&t instanceof Function&&t.apply&&!t[a])}var o=t("ee"),i=t(19),a="nr@original",s=Object.prototype.hasOwnProperty,c=!1;n.exports=function(t,n){function e(t,n,e,o){function nrWrapper(){var r,a,s,c;try{a=this,r=i(arguments),s="function"==typeof e?e(r,a):e||{}}catch(f){l([f,"",[r,a,o],s])}u(n+"start",[r,a,o],s);try{return c=t.apply(a,r)}catch(d){throw u(n+"err",[r,a,d],s),d}finally{u(n+"end",[r,a,c],s)}}return r(t)?t:(n||(n=""),nrWrapper[a]=t,d(t,nrWrapper),nrWrapper)}function f(t,n,o,i){o||(o="");var a,s,c,f="-"===o.charAt(0);for(c=0;c<n.length;c++)s=n[c],a=t[s],r(a)||(t[s]=e(a,f?s+o:o,i,s))}function u(e,r,o){if(!c||n){var i=c;c=!0;try{t.emit(e,r,o,n)}catch(a){l([a,e,r,o])}c=i}}function d(t,n){if(Object.defineProperty&&Object.keys)try{var e=Object.keys(t);return e.forEach(function(e){Object.defineProperty(n,e,{get:function(){return t[e]},set:function(n){return t[e]=n,n}})}),n}catch(r){l([r])}for(var o in t)s.call(t,o)&&(n[o]=t[o]);return n}function l(n){try{t.emit("internal-error",n)}catch(e){}}return t||(t=o),e.inPlace=f,e.flag=a,e}},{}],ee:[function(t,n,e){function r(){}function o(t){function n(t){return t&&t instanceof r?t:t?c(t,s,i):i()}function e(e,r,o,i){if(!l.aborted||i){t&&t(e,r,o);for(var a=n(o),s=m(e),c=s.length,f=0;f<c;f++)s[f].apply(a,r);var d=u[g[e]];return d&&d.push([x,e,r,a]),a}}function p(t,n){y[t]=m(t).concat(n)}function h(t,n){var e=y[t];if(e)for(var r=0;r<e.length;r++)e[r]===n&&e.splice(r,1)}function m(t){return y[t]||[]}function w(t){return d[t]=d[t]||o(e)}function v(t,n){f(t,function(t,e){n=n||"feature",g[e]=n,n in u||(u[n]=[])})}var y={},g={},x={on:p,addEventListener:p,removeEventListener:h,emit:e,get:w,listeners:m,context:n,buffer:v,abort:a,aborted:!1};return x}function i(){return new r}function a(){(u.api||u.feature)&&(l.aborted=!0,u=l.backlog={})}var s="nr@context",c=t("gos"),f=t(18),u={},d={},l=n.exports=o();l.backlog=u},{}],gos:[function(t,n,e){function r(t,n,e){if(o.call(t,n))return t[n];var r=e();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(t,n,{value:r,writable:!0,enumerable:!1}),r}catch(i){}return t[n]=r,r}var o=Object.prototype.hasOwnProperty;n.exports=r},{}],handle:[function(t,n,e){function r(t,n,e,r){o.buffer([t],r),o.emit(t,n,e)}var o=t("ee").get("handle");n.exports=r,r.ee=o},{}],id:[function(t,n,e){function r(t){var n=typeof t;return!t||"object"!==n&&"function"!==n?-1:t===window?0:a(t,i,function(){return o++})}var o=1,i="nr@id",a=t("gos");n.exports=r},{}],loader:[function(t,n,e){function r(){if(!E++){var t=b.info=NREUM.info,n=p.getElementsByTagName("script")[0];if(setTimeout(u.abort,3e4),!(t&&t.licenseKey&&t.applicationID&&n))return u.abort();f(g,function(n,e){t[n]||(t[n]=e)}),c("mark",["onload",a()+b.offset],null,"api");var e=p.createElement("script");e.src="https://"+t.agent,n.parentNode.insertBefore(e,n)}}function o(){"complete"===p.readyState&&i()}function i(){c("mark",["domContent",a()+b.offset],null,"api")}function a(){return R.exists&&performance.now?Math.round(performance.now()):(s=Math.max((new Date).getTime(),s))-b.offset}var s=(new Date).getTime(),c=t("handle"),f=t(18),u=t("ee"),d=t(17),l=window,p=l.document,h="addEventListener",m="attachEvent",w=l.XMLHttpRequest,v=w&&w.prototype;NREUM.o={ST:setTimeout,SI:l.setImmediate,CT:clearTimeout,XHR:w,REQ:l.Request,EV:l.Event,PR:l.Promise,MO:l.MutationObserver};var y=""+location,g={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-1130.min.js"},x=w&&v&&v[h]&&!/CriOS/.test(navigator.userAgent),b=n.exports={offset:s,now:a,origin:y,features:{},xhrWrappable:x,userAgent:d};t(13),p[h]?(p[h]("DOMContentLoaded",i,!1),l[h]("load",r,!1)):(p[m]("onreadystatechange",o),l[m]("onload",r)),c("mark",["firstbyte",s],null,"api");var E=0,R=t(20)},{}]},{},["loader",2,11,4,3]);</script>
<meta name="apple-itunes-app" content="app-id=354569809"/><title>NYAB Events - Opening Receptions</title>
<link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
<link rel="stylesheet" href="/resources/style/global.css?2016-07-07-1" type="text/css" media="screen, projection" />
<link rel="stylesheet" href="/resources/style/nyab.css?2016-07-07-1" type="text/css" media="screen, projection" />

<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
<script type="text/javascript" src="/resources/scripts/my_ajax.js"></script>
<script type="text/javascript" src="/resources/scripts/newsletter.js"></script>
<script type="text/javascript" src="/resources/scripts/readmore_tmp.js"></script>
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<link rel="stylesheet" href="/resources/style/events_print.css?2016-07-07-1" type="text/css" media="print" /> 
<script type="text/javascript" src="/resources/scripts/mytab_large_buttons.js?2016-07-07-1"></script> 
<script type="text/javascript" src="/resources/scripts/mytabicons.js?2016-07-07-1"></script> 
<link rel="alternate" type="application/rss+xml" title="RSS feed" href="http://www.nyartbeat.com/list/feed/event_opening.en.rdf" />
</head>

<body id="" class="en " >

<!--script type="text/javascript" src="//www.hellobar.com/hellobar.js"></script>
<script type="text/javascript">
    new HelloBar(50605,71247);
</script-->

<div id="header">
	<div id="firstrow">
        <p id="city-switcher">Also in <a href="http://www.tokyoartbeat.com">Tokyo</a> and <a href="http://www.kansaiartbeat.com">Kansai</a></p>
  	</div>

  	<div id="masthead">
    	<h1><a href="/">NYAB Events - Opening Receptions</a></h1>
        <div id="search">
        	
<label accesskey="s" for="q">Search this site:</label>
<form id="searchbox_000402883345883018606:1cevpo8jouk" action="/search">
	<div>
        <input type="hidden" name="cx" value="000402883345883018606:1cevpo8jouk" />
        <input type="hidden" name="cof" value="FORID:9" />
        <input id="q" name="q" type="text" size="16" />
        <input type="submit" id="sa" name="sa" value="Search" />
    </div>
</form>
        </div>
        <div id="jumpToMobileMenu">
          <a href="#mainNavMobile">Menu</a>
        </div>
        <div id="mainNav">
        	<ul id="tabs">
            	<li class="tab" id="home"><a href="/">Home</a></li>
            	<li class="tab_selected" id="events"><a href="/events/">Events</a></li>
            	<li class="tab" id="venues"><a href="/venues/">Venues</a></li>
            	<li class="tab" id="tablog"><a href="/nyablog/">NYABlog</a></li>
            	<li class="tab" id="apps"><a href="/apps/">Apps</a></li>
                <li class="tab" id="mytab"><a href="/mynyab/">MyNYAB</a></li>
            </ul>	

            <ul id="aboutContact">
            	<li id="about"><a href="/resources/doc/faq">About</a></li>
                <li id="advertise"><a href="/resources/doc/advertising"></a></li>
            </ul>

    	</div>
    </div>
</div>


<div id="site">
	<div id="content">

<div id="fb-root"></div>
<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=102848729770175";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>


<div id="leftpart">

<h2>Opening Receptions <a href='/resources/doc/feeds'><img class='badge' src='/resources/images/feed' alt='(rss)' title='This list is also available as an RSS feed' /></a></h2>
<p>Opening Receptions, Closing Receptions and other parties happening in the week to come.</p>
<h3 id="sorter_head">List sorted by</h3><div id="sorter_block"><ul id="smartlist-sortlinks"><li id="last"><strong>Schedule</strong></li></ul>

<ul id="smartlist-toc"><li><a href="#day_2019-09-24">Today</a>&nbsp;(5)</li><li><a href="#day_2019-09-26">Thu, 26 Sep 2019</a>&nbsp;(1)</li><li><a href="#day_2019-09-27">Fri, 27 Sep 2019</a>&nbsp;(1)</li><li><a href="#day_2019-09-28">Sat, 28 Sep 2019</a>&nbsp;(1)</li></ul></div><!-- sorter_block --><h3 class="smart_sublist" id="day_2019-09-24">Today</h3>      <ul class='longsmartlist'>
<li><div class="smartpic_m"><a href="http://www.nyartbeat.com/event/2019/1583"><img src="/media/event/2019/1583-80" alt="poster for Ramaya Tegegne “That you can’t fight City Hall is a rumor being spread by City Hall “" /></a></div>
<h4><a href='/event/2019/1583'>Ramaya Tegegne “That you can’t fight City Hall is a rumor being spread by City Hall “</a></h4>
<div class="smart_details">

<div class="mytabseen"><div><a href="/mynyab/redirect?id=2019/1583&amp;returnto=/list/event_opening" title="Login to MyNYAB to bookmark this event" ><img id="mytab-2019_1583" class="myicon" src="/resources/images/mytab/grey_EYE.gif" alt="Bookmark this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong>&nbsp;</div><div><a href="/mynyab/redirect?id=2019/1583&amp;returnto=/list/event_opening" title="Login to MyNYAB to recommend this event" ><img id="recommend-2019_1583" class="myicon" src="/resources/images/mytab/grey_HEART.gif" alt="Recommend this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong></div></div>

 
<ul>
<li>
at Ludlow 38 / The Goethe-Institut New York  </li>
<li>in the Lower East Side area</li> 
<li><span class="smartlist-addr">38 Ludlow St., New York, NY 10002</span></li> 
<li>Media:  Installation</li> 
<li>Opening Reception on 2019-09-24 from 18:00 to 21:00</li>
<li><span class="timeleft">Starts <strong>Today</strong>, Ends in 33 days</span></li>
</ul>
</div>

<div class="smart_desc">

<p>Goethe-Institut Curatorial Residencies Ludlow 38 is pleased to present That you can’t fight City Hall is a rumor being spread by City Hall, the first institutional solo exhibition of Geneva-based artist...<a href="/event/2019/1583">More »</a></p>
</div>
</li>


<li><div class="smartpic_m"><a href="http://www.nyartbeat.com/event/2019/E674"><img src="/media/event/2019/E674-80" alt="poster for Henry Taylor “Niece Cousin Kin Look How Long It’s Been”" /></a></div>
<h4><a href='/event/2019/E674'>Henry Taylor “Niece Cousin Kin Look How Long It’s Been”</a></h4>
<div class="smart_details">

<div class="mytabseen"><div><a href="/mynyab/redirect?id=2019/E674&amp;returnto=/list/event_opening" title="Login to MyNYAB to bookmark this event" ><img id="mytab-2019_E674" class="myicon" src="/resources/images/mytab/grey_EYE.gif" alt="Bookmark this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong>&nbsp;</div><div><a href="/mynyab/redirect?id=2019/E674&amp;returnto=/list/event_opening" title="Login to MyNYAB to recommend this event" ><img id="recommend-2019_E674" class="myicon" src="/resources/images/mytab/grey_HEART.gif" alt="Recommend this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong></div></div>

 
<ul>
<li>
at Blum &amp; Poe  </li>
<li>in the Upper East Side area</li> 
<li><span class="smartlist-addr">19 E 66th St., New York, NY 10065</span></li> 
<li>Media:  Painting</li> 
<li>Opening Reception on 2019-09-24 from 17:00 to 19:00</li>
<li><span class="timeleft">Starts <strong>Today</strong>, Ends in 39 days</span></li>
</ul>
</div>

<div class="smart_desc">

<p>Blum &amp; Poe presents Los Angeles-based artist Henry Taylor’s sixth solo exhibition with the gallery, NIECE COUSIN KIN LOOK HOW LONG IT’S BEEN.
 
Consistent with Taylor’s oeuvre, these new paintings...<a href="/event/2019/E674">More »</a></p>
</div>
</li>


<li><div class="smartpic_m"><a href="http://www.nyartbeat.com/event/2019/DF04"><img src="/media/event/2019/DF04-80" alt="poster for Öyvind Fahlström Exhibition" /></a></div>
<h4><a href='/event/2019/DF04'>Öyvind Fahlström Exhibition</a></h4>
<div class="smart_details">

<div class="mytabseen"><div><a href="/mynyab/redirect?id=2019/DF04&amp;returnto=/list/event_opening" title="Login to MyNYAB to bookmark this event" ><img id="mytab-2019_DF04" class="myicon" src="/resources/images/mytab/grey_EYE.gif" alt="Bookmark this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong>&nbsp;</div><div><a href="/mynyab/redirect?id=2019/DF04&amp;returnto=/list/event_opening" title="Login to MyNYAB to recommend this event" ><img id="recommend-2019_DF04" class="myicon" src="/resources/images/mytab/grey_HEART.gif" alt="Recommend this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong></div></div>

 
<ul>
<li>
at Venus over Manhattan  </li>
<li>in the Upper East Side area</li> 
<li><span class="smartlist-addr">980 Madison Ave., New York, NY 10075</span></li> 
<li>Media:  Painting -  Drawing -  Sculpture</li> 
<li>Opening Reception on 2019-09-24 from 18:00 to 20:00</li>
<li><span class="timeleft">Starts <strong>Today</strong>, Ends in 39 days</span></li>
</ul>
</div>

<div class="smart_desc">

<p>Venus Over Manhattan presents an exhibition of work by Öyvind Fahlström, organized in collaboration with Sharon Avery-Fahlström, The Öyvind Fahlström Foundation, and Aurel Scheibler. The exhibition marks...<a href="/event/2019/DF04">More »</a></p>
</div>
</li>


<li><div class="smartpic_m"><a href="http://www.nyartbeat.com/event/2019/C955"><img src="/media/event/2019/C955-80" alt="poster for Grant Levy-Lucero Exhibition" /></a></div>
<h4><a href='/event/2019/C955'>Grant Levy-Lucero Exhibition</a></h4>
<div class="smart_details">

<div class="mytabseen"><div><a href="/mynyab/redirect?id=2019/C955&amp;returnto=/list/event_opening" title="Login to MyNYAB to bookmark this event" ><img id="mytab-2019_C955" class="myicon" src="/resources/images/mytab/grey_EYE.gif" alt="Bookmark this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong>&nbsp;</div><div><a href="/mynyab/redirect?id=2019/C955&amp;returnto=/list/event_opening" title="Login to MyNYAB to recommend this event" ><img id="recommend-2019_C955" class="myicon" src="/resources/images/mytab/grey_HEART.gif" alt="Recommend this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong></div></div>

 
<ul>
<li>
at White Columns  </li>
<li>in the Villages area</li> 
<li><span class="smartlist-addr">91 Horatio St., New York, NY 10014 </span></li> 
<li>Media:  Sculpture</li> 
<li>Opening Reception on 2019-09-24 from 18:00 to 20:00</li>
<li><span class="timeleft">Starts <strong>Today</strong>, Ends in 39 days</span></li>
</ul>
</div>

<div class="smart_desc">

</div>
</li>


<li><div class="smartpic_m"><a href="http://www.nyartbeat.com/event/2019/A2F0"><img src="/media/event/2019/A2F0-80" alt="poster for Jill Mulleady “Fight-or-Flight”" /></a></div>
<h4><a href='/event/2019/A2F0'>Jill Mulleady “Fight-or-Flight”</a></h4>
<div class="smart_details">

<div class="mytabseen"><div><a href="/mynyab/redirect?id=2019/A2F0&amp;returnto=/list/event_opening" title="Login to MyNYAB to bookmark this event" ><img id="mytab-2019_A2F0" class="myicon" src="/resources/images/mytab/grey_EYE.gif" alt="Bookmark this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong>&nbsp;</div><div><a href="/mynyab/redirect?id=2019/A2F0&amp;returnto=/list/event_opening" title="Login to MyNYAB to recommend this event" ><img id="recommend-2019_A2F0" class="myicon" src="/resources/images/mytab/grey_HEART.gif" alt="Recommend this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong></div></div>

 
<ul>
<li>
at Swiss Institute Contemporary Art  </li>
<li>in the Villages area</li> 
<li><span class="smartlist-addr">38 St. Mark's Pl  New York, NY 10003</span></li> 
<li>Media:  Drawing</li> 
<li>Opening Reception on 2019-09-24 from 18:00 to 20:00</li>
<li><span class="timeleft">Starts tomorrow</span></li>
</ul>
</div>

<div class="smart_desc">

<p>Swiss Institute presents Fight-or-Flight, the first US institutional solo exhibition by Swiss-Uruguayan artist Jill Mulleady. Drawing on the history of SI’s location at 38 St Marks Pl, originally built...<a href="/event/2019/A2F0">More »</a></p>
</div>
</li>


                </ul>
 <p class='backtop'><a href='#header'>Top</a></p><h3 class="smart_sublist" id="day_2019-09-26">Thu, 26 Sep 2019</h3>      <ul class='longsmartlist'>
<li><div class="smartpic_m"><a href="http://www.nyartbeat.com/event/2019/E0A1"><img src="/media/event/2019/E0A1-80" alt="poster for “The Comedies Of The Status Quo” Exhibition" /></a></div>
<h4><a href='/event/2019/E0A1'>“The Comedies Of The Status Quo” Exhibition</a></h4>
<div class="smart_details">

<div class="mytabseen"><div><a href="/mynyab/redirect?id=2019/E0A1&amp;returnto=/list/event_opening" title="Login to MyNYAB to bookmark this event" ><img id="mytab-2019_E0A1" class="myicon" src="/resources/images/mytab/grey_EYE.gif" alt="Bookmark this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong>&nbsp;</div><div><a href="/mynyab/redirect?id=2019/E0A1&amp;returnto=/list/event_opening" title="Login to MyNYAB to recommend this event" ><img id="recommend-2019_E0A1" class="myicon" src="/resources/images/mytab/grey_HEART.gif" alt="Recommend this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong></div></div>

 
<ul>
<li>
at Kate Werble Gallery  </li>
<li>in the Soho area</li> 
<li><span class="smartlist-addr">83 Vandam St., New York, New York 10013</span></li> 
<li>Media:  Photography -  Installation</li> 
<li>Opening Reception on 2019-09-26 from 18:00 to 20:00</li>
<li><span class="timeleft">Ends in 25 days</span></li>
</ul>
</div>

<div class="smart_desc">

<p>The artworks in The Comedies of the Status Quo signal rather than direct. Working across textile, video, and photography, the artists in this exhibition share an investment in open address and generative...<a href="/event/2019/E0A1">More »</a></p>
</div>
</li>


                </ul>
 <p class='backtop'><a href='#header'>Top</a></p><h3 class="smart_sublist" id="day_2019-09-27">Fri, 27 Sep 2019</h3>      <ul class='longsmartlist'>
<li><div class="smartpic_m"><a href="http://www.nyartbeat.com/event/2019/946F"><img src="/media/event/2019/946F-80" alt="poster for Amir Badawi and Maria Lulu Varona “Works in Thread”" /></a></div>
<h4><a href='/event/2019/946F'>Amir Badawi and Maria Lulu Varona “Works in Thread”</a></h4>
<div class="smart_details">

<div class="mytabseen"><div><a href="/mynyab/redirect?id=2019/946F&amp;returnto=/list/event_opening" title="Login to MyNYAB to bookmark this event" ><img id="mytab-2019_946F" class="myicon" src="/resources/images/mytab/grey_EYE.gif" alt="Bookmark this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong>&nbsp;</div><div><a href="/mynyab/redirect?id=2019/946F&amp;returnto=/list/event_opening" title="Login to MyNYAB to recommend this event" ><img id="recommend-2019_946F" class="myicon" src="/resources/images/mytab/grey_HEART.gif" alt="Recommend this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong></div></div>

 
<ul>
<li>
at Flux Factory   </li>
<li>in the Queens area</li> 
<li><span class="smartlist-addr">39-31 29th Street, Queens, NY 11101</span></li> 
<li>Media:  Installation</li> 
<li>Opening Reception on 2019-09-27 from 19:00 to 22:00</li>
<li><span class="timeleft">Starts in 3 days</span></li>
</ul>
</div>

<div class="smart_desc">

<p>Flux Factory presents an exhibition of works by two current Artists-in-Residence, Amir Badawi and María Lulu Varona. Each uses colorful embroidery thread to arrive at radically different ends. A quiet...<a href="/event/2019/946F">More »</a></p>
</div>
</li>


                </ul>
 <p class='backtop'><a href='#header'>Top</a></p><h3 class="smart_sublist" id="day_2019-09-28">Sat, 28 Sep 2019</h3>      <ul class='longsmartlist'>
<li><div class="smartpic_m"><a href="http://www.nyartbeat.com/event/2019/4C9C"><img src="/media/event/2019/4C9C-80" alt="poster for Sarah Pettitt “Out to Sea” and Brandon Collwes Exhibition" /></a></div>
<h4><a href='/event/2019/4C9C'>Sarah Pettitt “Out to Sea” and Brandon Collwes Exhibition</a></h4>
<div class="smart_details">

<div class="mytabseen"><div><a href="/mynyab/redirect?id=2019/4C9C&amp;returnto=/list/event_opening" title="Login to MyNYAB to bookmark this event" ><img id="mytab-2019_4C9C" class="myicon" src="/resources/images/mytab/grey_EYE.gif" alt="Bookmark this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong>&nbsp;</div><div><a href="/mynyab/redirect?id=2019/4C9C&amp;returnto=/list/event_opening" title="Login to MyNYAB to recommend this event" ><img id="recommend-2019_4C9C" class="myicon" src="/resources/images/mytab/grey_HEART.gif" alt="Recommend this event" /></a><strong class='seentext' style='font-weight: normal;color: #8B8B8B;' title='[  ]'>[0]</strong></div></div>

 
<ul>
<li>
at Norte Maar  </li>
<li>in the Bushwick area</li> 
<li><span class="smartlist-addr">88 Pine St., Brooklyn, NY 11208</span></li> 
<li>Media:  Painting -  Sculpture -  Installation</li> 
<li>Opening Reception on 2019-09-28 from 18:00 to 21:00</li>
<li><span class="timeleft">Starts in 4 days</span></li>
</ul>
</div>

<div class="smart_desc">

<p>Sarah Pettitt is an artist based in Queens and London. Evolving from a place between painting and sculpture, installation and performance, her work interrogates painting’s history, materiality and presentation,...<a href="/event/2019/4C9C">More »</a></p>
</div>
</li>


                </ul>
 <p class='backtop'><a href='#header'>Top</a></p></div><!-- leftpart -->
<div id='menu' class='singlemenu'><div id="mytabblock">
<h2><a href="/mynyab/">MyNYAB</a></h2>
<div id="mytabactions"><a href="/mynyab/redirect?id=/&amp;returnto=" title="Login to MyNYAB">Login</a></div>

<a href="/mynyab/"><img class="badge" src="/resources/images/mytab_preview_en.gif" alt="MyNYAB" /></a>
<p>Bookmark, recommend &amp; review events or set up email reminders.</p>
<h3><a href="/mynyab/">&raquo; Learn More, Free Sign Up</a></h3>

</div>
<div id="browseby" class="rt_info_block"><h3>2D</h3>
<ul>
             <li><a href='/list/event_type_print_graphicdesign_bypopular'>Graphics</a>&nbsp;(4) </li>
             <li><a href='/list/event_type_print_illustration_bypopular'>Illustration</a>&nbsp;(2) </li>
             <li><a href='/list/event_type_print_painting_bypopular'>Painting</a>&nbsp;(205) </li>
             <li><a href='/list/event_type_print_drawing_bypopular'>Drawing</a>&nbsp;(84) </li>
             <li><a href='/list/event_type_print_calligraphy_bypopular'>Calligraphy</a>&nbsp;(0) </li>
             <li><a href='/list/event_type_print_photo_bypopular'>Photography</a>&nbsp;(73) </li>
             <li><a href='/list/event_type_print_prints_bypopular'>Prints</a>&nbsp;(20) </li>
             <li><a href='/list/event_type_print_other_bypopular'>Other</a>&nbsp;(3) </li>
</ul>
<h3>3D</h3>
<ul>
             <li><a href='/list/event_type_3D_architecture_bypopular'>Architecture</a>&nbsp;(6) </li>
             <li><a href='/list/event_type_3D_sculpture_bypopular'>Sculpture</a>&nbsp;(93) </li>
             <li><a href='/list/event_type_3D_installation_bypopular'>Installation</a>&nbsp;(147) </li>
             <li><a href='/list/event_type_3D_furniture_bypopular'>Furniture</a>&nbsp;(9) </li>
             <li><a href='/list/event_type_3D_fashion_bypopular'>Fashion</a>&nbsp;(3) </li>
             <li><a href='/list/event_type_3D_productdesign_bypopular'>Product</a>&nbsp;(9) </li>
             <li><a href='/list/event_type_3D_crafts_bypopular'>Crafts</a>&nbsp;(7) </li>
             <li><a href='/list/event_type_3D_ceramics_bypopular'>Ceramics</a>&nbsp;(11) </li>
             <li><a href='/list/event_type_3D_other_bypopular'>Other</a>&nbsp;(13) </li>
</ul>
<h3>Screen</h3>
<ul>
             <li><a href='/list/event_type_screen_film_bypopular'>Film</a>&nbsp;(8) </li>
             <li><a href='/list/event_type_screen_videoinstallation_bypopular'>Video installation</a>&nbsp;(18) </li>
             <li><a href='/list/event_type_screen_digital_bypopular'>Digital</a>&nbsp;(1) </li>
             <li><a href='/list/event_type_screen_other_bypopular'>Other</a>&nbsp;(2) </li>
</ul>
<h3>Misc.</h3>
<ul>
             <li><a href='/list/event_type_misc_media_bypopular'>Media Arts</a>&nbsp;(7) </li>
             <li><a href='/list/event_type_misc_party_bypopular'>Art Party</a>&nbsp;(0) </li>
             <li><a href='/list/event_type_misc_talk_bypopular'>Art Talk</a>&nbsp;(2) </li>
             <li><a href='/list/event_type_misc_performance_bypopular'>Performance Art</a>&nbsp;(7) </li>
             <li><a href='/list/event_type_misc_competition_bypopular'>Art Competition</a>&nbsp;(0) </li>
</ul>
 <h3 id="areatitle">Area:</h3>
<p id="browseinandaround">
<a href="/list/event_area_queens_bypopular">Queens</a>(13) &nbsp; <a href="/list/event_area_harlem_bronx_bypopular">Harlem, Bronx</a>(12) &nbsp; <a href="/list/event_area_williamsburg_bypopular">Bushwick</a>(22) &nbsp; <a href="/list/event_area_dumbo_brooklyn_bypopular">DUMBO, other Brooklyn</a>(43) &nbsp; <a href="/list/event_area_upper_east_side_bypopular">Upper East Side</a>(55) &nbsp; <a href="/list/event_area_midtown_bypopular">Midtown</a>(22) &nbsp; <a href="/list/event_area_flatiron_gramercy_bypopular">Flatiron, Gramercy</a>(6) &nbsp; <a href="/list/event_area_chelsea_east_bypopular">East Chelsea</a>(5) &nbsp; <a href="/list/event_area_chelsea_28_above_bypopular">Chelsea 28th - 33rd</a>(4) &nbsp; <a href="/list/event_area_chelsea_27_bypopular">Chelsea 27th</a>(10) &nbsp; <a href="/list/event_area_chelsea_26_bypopular">Chelsea 26th</a>(21) &nbsp; <a href="/list/event_area_chelsea_25_bypopular">Chelsea 25th</a>(25) &nbsp; <a href="/list/event_area_chelsea_24_bypopular">Chelsea 24th</a>(17) &nbsp; <a href="/list/event_area_chelsea_23_bypopular">Chelsea 23rd</a>(2) &nbsp; <a href="/list/event_area_chelsea_22_bypopular">Chelsea 22nd</a>(12) &nbsp; <a href="/list/event_area_chelsea_21_bypopular">Chelsea 21st</a>(13) &nbsp; <a href="/list/event_area_chelsea_20_bypopular">Chelsea 20th</a>(12) &nbsp; <a href="/list/event_area_chelsea_19_below_bypopular">Chelsea 14th - 19th</a>(7) &nbsp; <a href="/list/event_area_villages_bypopular">Villages</a>(20) &nbsp; <a href="/list/event_area_soho_bypopular">Soho</a>(16) &nbsp; <a href="/list/event_area_lower_east_side_bypopular">Lower East Side</a>(86) &nbsp; <a href="/list/event_area_lower_manhattan_bypopular">Lower Manhattan</a>(39) &nbsp;</p>
<h3 id="smartlisttitle">Smart lists:</h3>
<p id="browsesmartlists">
	<a href="/list/event_mostpopular">Most Popular</a> |
	<a href="/list/event_comingsoon">Starting Soon</a> |
	<a href="/list/event_opening">Opening Receptions</a> |
	<a href="/list/event_juststarted">Just Started</a> |
	<a href="/list/event_lastdays">Closing Soon</a> |
	<a href="/list/event_discount">MuPon Coupons</a> |
	<a href="/list/event_kids">For Kids Too</a> |
	<a href="/list/event_free">Free Entrance</a> |
	<a href="/list/event_openlate">Open Late</a> |
	<a href="/list/event_permanent">Permanent Events</a>
	</p>
<!--
<h3>Festivals:</h3>
<p id="browsefestivals">
<a href="/list/special/doitsu-nen_0506">German Year</a> |
<a href="/list/special/swiss0406">0406 Swiss Contemporary Arts In Japan</a> |
<a href="/list/special/grad_2006">2006 Graduation Shows</a>
</p>
-->
</div><!-- browseeventsby --><div id="searchMobile">
	
<label accesskey="s" for="q">Search this site:</label>
<form id="searchbox_000402883345883018606:1cevpo8jouk" action="/search">
	<div>
        <input type="hidden" name="cx" value="000402883345883018606:1cevpo8jouk" />
        <input type="hidden" name="cof" value="FORID:9" />
        <input id="q" name="q" type="text" size="16" />
        <input type="submit" id="sa" name="sa" value="Search" />
    </div>
</form>
</div>

<div id="mainNavMobile">
	<ul id="tabsMobile">
    	<li class="tab" id="home"><a href="/">Home</a></li>
    	<li class="tab_selected" id="events"><a href="/events/">Events</a></li>
    	<li class="tab" id="venues"><a href="/venues/">Venues</a></li>
    	<li class="tab" id="tablog"><a href="/nyablog/">NYABlog</a></li>
    	<li class="tab" id="apps"><a href="/apps/">Apps</a></li>
    	<li class="tab" id="mytab"><a href="/mytab/">MyNYAB</a></li>
    </ul>	
</div>


<!-- end #content -->
</div>

<!-- end #site -->
</div>

<div id="disclaimer">
	<p>
    	All content on this site is &copy; their respective owner(s).<br />
        <a href="/">New York Art Beat</a> (2008) - <a href="/resources/doc/faq">About</a> -
        <a href="/resources/doc/faq#contact_us">Contact</a> - 
	    <a href="/resources/doc/privacy">Privacy</a> -
	    <a href="/resources/doc/terms">Terms of Use</a>
	</p>
</div>


<script>
window.onload = function(){ 
		$("iframe#twitter-widget-0").contents().find("h1.summary").css('color','#5B5D60');

}
</script>



<script type="text/javascript">  var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-455796-6']); _gaq.push(['_trackPageview']);  (function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();  </script>



<script type="text/javascript">window.NREUM||(NREUM={});NREUM.info={"beacon":"bam.nr-data.net","licenseKey":"14770b9735","applicationID":"5264798","transactionName":"ZlBWYRRTDUNWVBBYXV8aYUcPHQ9ZRENLG0RUW0BqCUIGXl5ZAw==","queueTime":0,"applicationTime":19,"atts":"ShdVF1xJHk0=","errorBeacon":"bam.nr-data.net","agent":""}</script></body>
</html>

`;