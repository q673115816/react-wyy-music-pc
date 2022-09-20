import{r as v}from"./react.0a2f695e.js";import"./qrcode.react.f1612489.js";var M=function(e,t){return M=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,n){r.__proto__=n}||function(r,n){for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(r[u]=n[u])},M(e,t)};function Pe(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");M(e,t);function r(){this.constructor=e}e.prototype=t===null?Object.create(t):(r.prototype=t.prototype,new r)}var E=function(){return E=Object.assign||function(t){for(var r,n=1,u=arguments.length;n<u;n++){r=arguments[n];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t},E.apply(this,arguments)};function Te(e,t,r,n){function u(a){return a instanceof r?a:new r(function(o){o(a)})}return new(r||(r=Promise))(function(a,o){function i(c){try{f(n.next(c))}catch(d){o(d)}}function s(c){try{f(n.throw(c))}catch(d){o(d)}}function f(c){c.done?a(c.value):u(c.value).then(i,s)}f((n=n.apply(e,t||[])).next())})}function Oe(e,t){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,u,a,o;return o={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function i(f){return function(c){return s([f,c])}}function s(f){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,u&&(a=f[0]&2?u.return:f[0]?u.throw||((a=u.return)&&a.call(u),0):u.next)&&!(a=a.call(u,f[1])).done)return a;switch(u=0,a&&(f=[f[0]&2,a.value]),f[0]){case 0:case 1:a=f;break;case 4:return r.label++,{value:f[1],done:!1};case 5:r.label++,u=f[1],f=[0];continue;case 7:f=r.ops.pop(),r.trys.pop();continue;default:if(a=r.trys,!(a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){r=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){r.label=f[1];break}if(f[0]===6&&r.label<a[1]){r.label=a[1],a=f;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(f);break}a[2]&&r.ops.pop(),r.trys.pop();continue}f=t.call(e,r)}catch(c){f=[6,c],u=0}finally{n=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:!0}}}function L(e){var t=typeof Symbol=="function"&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Me(e,t){var r=typeof Symbol=="function"&&e[Symbol.iterator];if(!r)return e;var n=r.call(e),u,a=[],o;try{for(;(t===void 0||t-- >0)&&!(u=n.next()).done;)a.push(u.value)}catch(i){o={error:i}}finally{try{u&&!u.done&&(r=n.return)&&r.call(n)}finally{if(o)throw o.error}}return a}function Ae(e,t,r){if(r||arguments.length===2)for(var n=0,u=t.length,a;n<u;n++)(a||!(n in t))&&(a||(a=Array.prototype.slice.call(t,0,n)),a[n]=t[n]);return e.concat(a||Array.prototype.slice.call(t))}function A(e){return this instanceof A?(this.v=e,this):new A(e)}function De(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=r.apply(e,t||[]),u,a=[];return u={},o("next"),o("throw"),o("return"),u[Symbol.asyncIterator]=function(){return this},u;function o(p){n[p]&&(u[p]=function(m){return new Promise(function(h,S){a.push([p,m,h,S])>1||i(p,m)})})}function i(p,m){try{s(n[p](m))}catch(h){d(a[0][3],h)}}function s(p){p.value instanceof A?Promise.resolve(p.value.v).then(f,c):d(a[0][2],p)}function f(p){i("next",p)}function c(p){i("throw",p)}function d(p,m){p(m),a.shift(),a.length&&i(a[0][0],a[0][1])}}function Ue(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],r;return t?t.call(e):(e=typeof L=="function"?L(e):e[Symbol.iterator](),r={},n("next"),n("throw"),n("return"),r[Symbol.asyncIterator]=function(){return this},r);function n(a){r[a]=e[a]&&function(o){return new Promise(function(i,s){o=e[a](o),u(i,s,o.done,o.value)})}}function u(a,o,i,s){Promise.resolve(s).then(function(f){a({value:f,done:i})},o)}}function F(){var e=v.exports.useRef(!0);return e.current?(e.current=!1,!0):e.current}var W=function(e,t){var r=F();v.exports.useEffect(function(){if(!r)return e()},t)};const $e=W;function J(){var e=v.exports.useRef(!1),t=v.exports.useCallback(function(){return e.current},[]);return v.exports.useEffect(function(){return e.current=!0,function(){e.current=!1}},[]),t}var B=function(e){e===void 0&&(e={});var t=v.exports.useState(e),r=t[0],n=t[1],u=v.exports.useCallback(function(a){n(function(o){return Object.assign({},o,a instanceof Function?a(o):a)})},[]);return[r,u]};const U=B;function N(e){for(var t=[],r=0;r<e.length;r++)t.push({start:e.start(r),end:e.end(r)});return t}function H(e){return function(t){var r,n;v.exports.isValidElement(t)?(r=t,n=r.props):n=t;var u=U({buffered:[],time:0,duration:0,paused:!0,muted:!1,volume:1,playing:!1}),a=u[0],o=u[1],i=v.exports.useRef(null),s=function(l,y){return function(g){try{y&&y(g)}finally{l&&l(g)}}},f=function(){return o({paused:!1})},c=function(){return o({playing:!0})},d=function(){return o({playing:!1})},p=function(){return o({paused:!0,playing:!1})},m=function(){var l=i.current;!l||o({muted:l.muted,volume:l.volume})},h=function(){var l=i.current;if(!!l){var y=l.duration,g=l.buffered;o({duration:y,buffered:N(g)})}},S=function(){var l=i.current;!l||o({time:l.currentTime})},R=function(){var l=i.current;!l||o({buffered:N(l.buffered)})};r?r=v.exports.cloneElement(r,E(E({controls:!1},n),{ref:i,onPlay:s(n.onPlay,f),onPlaying:s(n.onPlaying,c),onWaiting:s(n.onWaiting,d),onPause:s(n.onPause,p),onVolumeChange:s(n.onVolumeChange,m),onDurationChange:s(n.onDurationChange,h),onTimeUpdate:s(n.onTimeUpdate,S),onProgress:s(n.onProgress,R)})):r=v.exports.createElement(e,E(E({controls:!1},n),{ref:i,onPlay:s(n.onPlay,f),onPlaying:s(n.onPlaying,c),onWaiting:s(n.onWaiting,d),onPause:s(n.onPause,p),onVolumeChange:s(n.onVolumeChange,m),onDurationChange:s(n.onDurationChange,h),onTimeUpdate:s(n.onTimeUpdate,S),onProgress:s(n.onProgress,R)}));var I=!1,T={play:function(){var l=i.current;if(!!l&&!I){var y=l.play(),g=typeof y=="object";if(g){I=!0;var O=function(){I=!1};y.then(O,O)}return y}},pause:function(){var l=i.current;if(l&&!I)return l.pause()},seek:function(l){var y=i.current;!y||a.duration===void 0||(l=Math.min(a.duration,Math.max(0,l)),y.currentTime=l)},volume:function(l){var y=i.current;!y||(l=Math.min(1,Math.max(0,l)),y.volume=l,o({volume:l}))},mute:function(){var l=i.current;!l||(l.muted=!0)},unmute:function(){var l=i.current;!l||(l.muted=!1)}};return v.exports.useEffect(function(){var l=i.current;!l||(o({volume:l.volume,muted:l.muted,paused:l.paused}),n.autoPlay&&l.paused&&T.play())},[n.src]),[r,a,T,i]}}var X=H("audio");const ke=X;var _=function(){};function x(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.addEventListener&&e.addEventListener.apply(e,t)}function w(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];e&&e.removeEventListener&&e.removeEventListener.apply(e,t)}var P=typeof window<"u",q=function(e,t){return typeof t=="boolean"?t:!e},K=function(e){return v.exports.useReducer(q,e)};const Le=K;var Y=["mousedown","touchstart"],Z=function(e,t,r){r===void 0&&(r=Y);var n=v.exports.useRef(t);v.exports.useEffect(function(){n.current=t},[t]),v.exports.useEffect(function(){for(var u=function(s){var f=e.current;f&&!f.contains(s.target)&&n.current(s)},a=0,o=r;a<o.length;a++){var i=o[a];x(document,i,u)}return function(){for(var s=0,f=r;s<f.length;s++){var c=f[s];w(document,c,u)}}},[r,e])};const Ne=Z;var Q=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||r.forEach(function(u){e.addRange(u)}),t&&t.focus()}},V=Q,j={"text/plain":"Text","text/html":"Url",default:"Text"},ee="Copy to clipboard: #{key}, Enter";function te(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function re(e,t){var r,n,u,a,o,i,s=!1;t||(t={}),r=t.debug||!1;try{u=V(),a=document.createRange(),o=document.getSelection(),i=document.createElement("span"),i.textContent=e,i.ariaHidden="true",i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",function(c){if(c.stopPropagation(),t.format)if(c.preventDefault(),typeof c.clipboardData>"u"){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var d=j[t.format]||j.default;window.clipboardData.setData(d,e)}else c.clipboardData.clearData(),c.clipboardData.setData(t.format,e);t.onCopy&&(c.preventDefault(),t.onCopy(c.clipboardData))}),document.body.appendChild(i),a.selectNodeContents(i),o.addRange(a);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");s=!0}catch(c){r&&console.error("unable to copy using execCommand: ",c),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(d){r&&console.error("unable to copy using clipboardData: ",d),r&&console.error("falling back to prompt"),n=te("message"in t?t.message:ee),window.prompt(n,e)}}finally{o&&(typeof o.removeRange=="function"?o.removeRange(a):o.removeAllRanges()),i&&document.body.removeChild(i),u()}return s}var ne=re,ae=function(){var e=J(),t=U({value:void 0,error:void 0,noUserInteraction:!0}),r=t[0],n=t[1],u=v.exports.useCallback(function(a){if(!!e()){var o,i;try{if(typeof a!="string"&&typeof a!="number"){var s=new Error("Cannot copy typeof "+typeof a+" to clipboard, must be a string");n({value:a,error:s,noUserInteraction:!0});return}else if(a===""){var s=new Error("Cannot copy empty string to clipboard.");n({value:a,error:s,noUserInteraction:!0});return}i=a.toString(),o=ne(i),n({value:i,error:void 0,noUserInteraction:o})}catch(f){n({value:i,error:f,noUserInteraction:o})}}},[]);return[r,u]};const je=ae;var oe=function(e){return(e+1)%1e6};function z(){var e=v.exports.useReducer(oe,0),t=e[1];return t}function C(e,t){return typeof e=="function"?e.length?e(t):e():e}function ue(e){var t=v.exports.useRef(C(e)),r=z();return v.exports.useMemo(function(){return[function(){return t.current},function(n){t.current=C(n,t.current),r()}]},[])}function Je(e,t,r){e===void 0&&(e=0),t===void 0&&(t=null),r===void 0&&(r=null);var n=C(e);typeof n!="number"&&console.error("initialValue has to be a number, got "+typeof e),typeof r=="number"?n=Math.max(n,r):r!==null&&console.error("min has to be a number, got "+typeof r),typeof t=="number"?n=Math.min(n,t):t!==null&&console.error("max has to be a number, got "+typeof t);var u=ue(n),a=u[0],o=u[1];return[a(),v.exports.useMemo(function(){var i=function(s){var f=a(),c=C(s,f);f!==c&&(typeof r=="number"&&(c=Math.max(c,r)),typeof t=="number"&&(c=Math.min(c,t)),f!==c&&o(c))};return{get:a,set:i,inc:function(s){s===void 0&&(s=1);var f=C(s,a());typeof f!="number"&&console.error("delta has to be a number or function returning a number, got "+typeof f),i(function(c){return c+f})},dec:function(s){s===void 0&&(s=1);var f=C(s,a());typeof f!="number"&&console.error("delta has to be a number or function returning a number, got "+typeof f),i(function(c){return c-f})},reset:function(s){s===void 0&&(s=n);var f=C(s,a());typeof f!="number"&&console.error("value has to be a number or function returning a number, got "+typeof f),n=f,i(f)}}},[n,r,t])]}var ie=/[A-Z]/g,fe=function(e){for(var t=5381,r=e.length;r;)t=t*33^e.charCodeAt(--r);return"_"+(t>>>0).toString(36)},se=function(e){e=e||{};var t=e.assign||Object.assign,r=typeof window=="object",n=t({raw:"",pfx:"_",client:r,assign:t,stringify:JSON.stringify,kebab:function(u){return u.replace(ie,"-$&").toLowerCase()},decl:function(u,a){return u=n.kebab(u),u+":"+a+";"},hash:function(u){return fe(n.stringify(u))},selector:function(u,a){return u+(a[0]===":"?"":" ")+a},putRaw:function(u){n.raw+=u}},e);return n.client&&(n.sh||document.head.appendChild(n.sh=document.createElement("style")),n.putRaw=function(u){{var a=n.sh.sheet;try{a.insertRule(u,a.cssRules.length)}catch(o){}}}),n.put=function(u,a,o){var i="",s,f,c=[];for(s in a)f=a[s],f instanceof Object&&!(f instanceof Array)?c.push(s):i+=n.decl(s,f,u,o);i&&(i=u+"{"+i+"}",n.putRaw(o?o+"{"+i+"}":i));for(var d=0;d<c.length;d++)s=c[d],s[0]==="@"&&s!=="@font-face"?n.putAt(u,a[s],s):n.put(n.selector(u,s),a[s],o)},n.putAt=n.put,n},ce=function(e){!e.client||(document.head.appendChild(e.msh=document.createElement("style")),e.createRule=function(t,r){var n=t+"{}";r&&(n=r+"{"+n+"}");var u=r?e.msh.sheet:e.sh.sheet,a=u.insertRule(n,u.cssRules.length),o=(u.cssRules||u.rules)[a];if(o.index=a,r){var i=(o.cssRules||o.rules)[0];o.style=i.style,o.styleMap=i.styleMap}return o})},G={};function le(e){var t=e.index,r=e.parentStyleSheet,n=r.cssRules||r.rules;for(t=Math.max(t,n.length-1);t>=0;){if(n[t]===e){r.deleteRule(t);break}t--}}G.removeRule=le;var ve=G.removeRule,de=function(e){if(!e.client)return;var t=e.kebab;function r(u,a){this.rule=e.createRule(u,a),this.decl={}}r.prototype.diff=function(u){var a=this.decl,o=this.rule.style,i;for(i in a)u[i]===void 0&&o.removeProperty(i);for(i in u)u[i]!==a[i]&&o.setProperty(t(i),u[i]);this.decl=u},r.prototype.del=function(){ve(this.rule)};function n(){this.tree={}}n.prototype.diff=function(u){var a=this.tree;for(var o in a)if(u[o]===void 0){var i=a[o];for(var s in i)i[s].del()}for(var o in u)if(a[o]===void 0)for(var s in u[o]){var f=new r(s,o);f.diff(u[o][s]),u[o][s]=f}else{var c=a[o],d=u[o];for(var s in c)d[s]||c[s].del();for(var s in d){var f=c[s];f?(f.diff(d[s]),d[s]=f):(f=new r(s,o),f.diff(d[s]),d[s]=f)}}this.tree=u},e.VRule=r,e.VSheet=n};function D(e,t,r,n){var u={},a=!1,o,i;for(o in t)i=t[o],typeof i!="object"&&(a=!0,u[o]=i);a&&(e[n]||(e[n]={}),e[n][r]=u);for(o in t)if(i=t[o],typeof i=="object")if(o[0]==="@")D(e,i,r,o);else{var s=o.indexOf("&")>-1,f=r.split(",");if(s)for(var c=0;c<f.length;c++)f[c]=o.replace(/&/g,f[c]);else for(var c=0;c<f.length;c++)f[c]=f[c]+" "+o;D(e,i,f.join(","),n)}}var pe=D,ye=P?v.exports.useLayoutEffect:v.exports.useEffect;const me=ye;var $=se();ce($);de($);var ge=0,he=function(e){var t=v.exports.useMemo(function(){return"react-use-css-"+(ge++).toString(36)},[]),r=v.exports.useMemo(function(){return new $.VSheet},[]);return me(function(){var n={};return pe(n,e,"."+t,""),r.diff(n),function(){r.diff({})}}),t};const ze=he;var be=function(e){e===void 0&&(e={});var t=z(),r=v.exports.useRef(E({},e)),n=v.exports.useCallback(function(){return r.current},[]),u=v.exports.useCallback(function(a){!a||(Object.assign(r.current,a),t())},[]);return[n,u]};const Ge=be;var Se=function(e,t){var r=v.exports.useState(null),n=r[0],u=r[1];return v.exports.useEffect(function(){if(e.current&&typeof IntersectionObserver=="function"){var a=function(i){u(i[0])},o=new IntersectionObserver(a,t);return o.observe(e.current),function(){u(null),o.disconnect()}}return function(){}},[e.current,t.threshold,t.root,t.rootMargin]),n};const Fe=Se;var xe=function(e,t,r){if(!P)return[t,_,_];if(!e)throw new Error("useLocalStorage key may not be falsy");var n=r?r.raw?function(c){return c}:r.deserializer:JSON.parse,u=v.exports.useRef(function(c){try{var d=r?r.raw?String:r.serializer:JSON.stringify,p=localStorage.getItem(c);return p!==null?n(p):(t&&localStorage.setItem(c,d(t)),t)}catch(m){return t}}),a=v.exports.useState(function(){return u.current(e)}),o=a[0],i=a[1];v.exports.useLayoutEffect(function(){return i(u.current(e))},[e]);var s=v.exports.useCallback(function(c){try{var d=typeof c=="function"?c(o):c;if(typeof d>"u")return;var p=void 0;r?r.raw?typeof d=="string"?p=d:p=JSON.stringify(d):r.serializer?p=r.serializer(d):p=JSON.stringify(d):p=JSON.stringify(d),localStorage.setItem(e,p),i(n(p))}catch(m){}},[e,i]),f=v.exports.useCallback(function(){try{localStorage.removeItem(e),i(void 0)}catch(c){}},[e,i]);return[o,s,f]};const We=xe;var we=function(e,t){return t!==void 0?t:P?window.matchMedia(e).matches:!1},Ce=function(e,t){var r=v.exports.useState(we(e,t)),n=r[0],u=r[1];return v.exports.useEffect(function(){var a=!0,o=window.matchMedia(e),i=function(){!a||u(!!o.matches)};return o.addListener(i),u(o.matches),function(){a=!1,o.removeListener(i)}},[e]),n};const Be=Ce;var Ee=function(e,t,r){if(!P)return[t,function(){}];var n=v.exports.useState(function(){try{var o=sessionStorage.getItem(e);return typeof o!="string"?(sessionStorage.setItem(e,r?String(t):JSON.stringify(t)),t):r?o:JSON.parse(o||"null")}catch(i){return t}}),u=n[0],a=n[1];return v.exports.useEffect(function(){try{var o=r?String(u):JSON.stringify(u);sessionStorage.setItem(e,o)}catch(i){}}),[u,a]};const He=Ee;var Re=function(e,t){t===void 0&&(t={});var r=J(),n=v.exports.useRef(!1),u=v.exports.useRef(0),a=v.exports.useRef(0),o=U({isSliding:!1,value:0}),i=o[0],s=o[1];return u.current=i.value,v.exports.useEffect(function(){if(P){var f=t.styles===void 0?!0:t.styles,c=t.reverse===void 0?!1:t.reverse;e.current&&f&&(e.current.style.userSelect="none");var d=function(){!n.current&&r()&&((t.onScrubStart||_)(),n.current=!0,s({isSliding:!0}),I())},p=function(){n.current&&r()&&((t.onScrubStop||_)(u.current),n.current=!1,s({isSliding:!1}),T())},m=function(y){d(),h(y)},h=t.vertical?function(y){return l(y.clientY)}:function(y){return l(y.clientX)},S=function(y){d(),R(y)},R=t.vertical?function(y){return l(y.changedTouches[0].clientY)}:function(y){return l(y.changedTouches[0].clientX)},I=function(){x(document,"mousemove",h),x(document,"mouseup",p),x(document,"touchmove",R),x(document,"touchend",p)},T=function(){w(document,"mousemove",h),w(document,"mouseup",p),w(document,"touchmove",R),w(document,"touchend",p)},l=function(y){cancelAnimationFrame(a.current),a.current=requestAnimationFrame(function(){if(r()&&e.current){var g=e.current.getBoundingClientRect(),O=t.vertical?g.top:g.left,k=t.vertical?g.height:g.width;if(!k)return;var b=(y-O)/k;b>1?b=1:b<0&&(b=0),c&&(b=1-b),s({value:b}),(t.onScrub||_)(b)}})};return x(e.current,"mousedown",m),x(e.current,"touchstart",S),function(){w(e.current,"mousedown",m),w(e.current,"touchstart",S)}}else return},[e,t.vertical]),i};const Xe=Re;export{L as _,Ae as a,Me as b,Pe as c,De as d,Oe as e,A as f,Te as g,Ue as h,Xe as i,$e as j,Ne as k,ze as l,je as m,Le as n,ke as o,We as p,Fe as q,Je as r,Ge as s,He as t,Be as u};
