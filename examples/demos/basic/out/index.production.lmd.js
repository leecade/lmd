(function e(t,n,r,i,s){var o={},u=function(e){return t.Function("return "+e)()},a=function(){},f=t.document,l,c=function(e,n){var s={exports:{}};o[e]=1,r[e]=s.exports;if(!n)n=n||t[e];else if(typeof n=="function"){var u=v;i[e]&&i[e].sandbox&&typeof u=="function"&&(u=l),n=n(u,s.exports,s)||s.exports}return n=n,r[e]=n},h={},p=function(e,t,n,r){var i=h[e],s;if(i)for(var o=0,u=i.length;o<u;o++)s=i[o](t,n,r)||s,s&&(t=s[0]||t,n=s[1]||n,r=s[2]||r);return s||[t,n,r]},d=function(e,t){h[e]||(h[e]=[]),h[e].push(t)},v=function(e){var t=r[e];if(o[e]&&t)return t;var n=[e,t];return n&&(e=n[0],t=n[1]),typeof t=="string"&&t.indexOf("(function(")===0&&(t=u(t)),c(e,t)},m={exports:{}};for(var g in r)o[g]=0;(function(){var e={css:!0,image:!0};d(7,function(t,n,i){var s=v;n=n||a;if(typeof t!="string"){n=[t,n,v[i]][1];if(!n)return[[s,t,u,!0],n,i]}var u=r[t],l=[t,u];return l&&(t=l[0],u=l[1]),u||e[i]&&!f?(n(o[t]?u:v(t)),[[s,t,u,!0],n,i]):(n=n,n?[[s,t,u,!1],n,i]:[[s,t,u,!0],n,i])})})(),function(){v.async=function(e,n){var r=p(7,e,n,"async"),i=r[0][0];if(r[0][3])return i;var s=r[0][2],o=t.XMLHttpRequest||t.ActiveXObject;n=r[1],e=r[0][1];if(!o)return i;var a=new o("Microsoft.XMLHTTP");return a.onreadystatechange=function(){if(a.readyState==4)if(a.status<201){var t=a.getResponseHeader("content-type");s=a.responseText,/script$|json$/.test(t)&&(s=s,/json$/.test(t)||(s=s),s=u(s)),n(c(e,s))}else n()},a.open("get",e),a.send(),i}}(),function(){t.localStorage&&s.version&&function(){try{t.localStorage.lmd=t.JSON.stringify({modules:r,main:"("+n+")",lmd:"("+e+")",modules_options:i,options:s})}catch(o){}}()}(),function(){v.js=function(e,n){var r=p(7,e,n,"js"),i=r[0][0];if(r[0][3])return i;var s=r[0][2],o="readyState",u=1,a;n=r[1],e=r[0][1];if(!f)return s=s,n(s),i;var h=f.createElement("script");return t.setTimeout(h.onreadystatechange=h.onload=function(r){r=r||t.event,u&&(!r||!h[o]||h[o]=="loaded"||h[o]=="complete")&&(u=0,!r,n(r?c(e,h):a.removeChild(h)&&l))},3e3,0),h.src=e,a=f.getElementsByTagName("head")[0],a.insertBefore(h,a.firstChild),i}}(),function(){v.css=function(e,n){var r=p(7,e,n,"css"),i=r[0][0];if(r[0][3])return i;var s=r[0][2],o=1,u;n=r[1],e=r[0][1];var a=f.createElement("link"),h=+(new t.Date),d=function(t){o&&(o=0,a.removeAttribute("id"),!t,n(t?c(e,a):u.removeChild(a)&&l))};return a.href=e,a.rel="stylesheet",a.id=h,t.setTimeout(d,3e3,0),u=f.getElementsByTagName("head")[0],u.insertBefore(a,u.firstChild),function v(){if(o)try{var e=f.styleSheets;for(var n=0,r=e.length;n<r;n++)if((e[n].ownerNode||e[n].owningElement).id==h&&(e[n].cssRules||e[n].rules).length)return d(1);throw 1}catch(i){t.setTimeout(v,90)}}(),i}}(),function(){function e(e){var n=[];for(var r in e)e.hasOwnProperty(r)&&n.push(i(r)+":"+t(e[r]));return"{"+n.join(",")+"}"}function t(n){if(typeof n=="string")return i(n);if(typeof n=="boolean")return""+n;if(n.join){if(n.length==0)return"[]";var r=[];for(var s=0,o=n.length;s<o;s+=1)r.push(t(n[s]));return"["+r.join(",")+"]"}return typeof n=="number"?n:e(n)}function n(e){return"0000".substr(e.length)+e}function r(e){switch(e){case"\b":return"\\b";case"\f":return"\\f";case"\n":return"\\n";case"\r":return"\\r";case"	":return"\\t";case'"':return'\\"';case"\\":return"\\\\";default:return"\\u"+n(e.charCodeAt(0).toString(16))}}function i(e){return'"'+e.replace(/[\u0000-\u001f"\\\u007f-\uffff]/g,r)+'"'}function s(e){for(var t=this.length;t-->0;)if(this[t]===e)return t;return-1}}(),n(v,m.exports,m)})(this,function(t){var n=t("i18n"),r=n.hello+", lmd",i,s,o,u,a,f,l;typeof window!="undefined"?(s=t("depA"),l=t("depB"),o=t("Worker"),a=t("config"),f=t("template"),i=t("$"),i(function(){t.async("./modules/templates/async_template.html",function(e){i("#log").html(typeof e!="undefined"?e.replace("${content}",f.replace("${content}",l(r))):f.replace("${content}",l(r)))}),t.js("./vendors/jquery.someplugin.js",function(e){typeof e!="undefined"?s(i.somePlugin()):s("fail to load: ./vendors/jquery.someplugin.js")}),t.css("./css/b-template.css",function(e){typeof e!="undefined"?s("CSS - OK!"):s("fail to load: ./css/b-template.css")})}),o&&(u=new o(a.worker),u.addEventListener("message",function(e){s("Received some data from worker: "+e.data)},!1))):s=t("workerDepA"),s(r)},{depA:'(function(e){var t=e("depB"),n=e("console");return function(e){n.log(t(e))}})',template:'<i class="b-template">${content}</i>',depB:'(function(e,t,n){n.exports=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}})',workerDepA:'(function(e){var t=e("depB"),n=e("postMessage");return function(e){n(t(e))}})',i18n:{hello:"Привет"},config:{worker:"./out/index.production.lmd.js"}},{depB:{sandbox:1}},{version:"1.6.3-1"})