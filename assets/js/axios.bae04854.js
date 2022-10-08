function ce(e,t){return function(){return e.apply(t,arguments)}}const{toString:ue}=Object.prototype,{getPrototypeOf:$}=Object,W=(e=>t=>{const n=ue.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),O=e=>(e=e.toLowerCase(),t=>W(t)===e),j=e=>t=>typeof t===e,{isArray:g}=Array,z=j("undefined");function Ce(e){return e!==null&&!z(e)&&e.constructor!==null&&!z(e.constructor)&&P(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const le=O("ArrayBuffer");function De(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&le(e.buffer),t}const Fe=j("string"),P=j("function"),fe=j("number"),de=e=>e!==null&&typeof e=="object",Be=e=>e===!0||e===!1,U=e=>{if(W(e)!=="object")return!1;const t=$(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ge=O("Date"),_e=O("File"),Le=O("Blob"),Ue=O("FileList"),je=e=>de(e)&&P(e.pipe),ke=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||ue.call(e)===t||P(e.toString)&&e.toString()===t)},Me=O("URLSearchParams"),Ie=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),g(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let u;for(r=0;r<o;r++)u=i[r],t.call(null,e[u],u,e)}}function J(){const e={},t=(n,r)=>{U(e[r])&&U(n)?e[r]=J(e[r],n):U(n)?e[r]=J({},n):g(n)?e[r]=n.slice():e[r]=n};for(let n=0,r=arguments.length;n<r;n++)arguments[n]&&k(arguments[n],t);return e}const He=(e,t,n,{allOwnKeys:r}={})=>(k(t,(s,i)=>{n&&P(s)?e[i]=ce(s,n):e[i]=s},{allOwnKeys:r}),e),qe=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),ze=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Je=(e,t,n,r)=>{let s,i,o;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!u[o]&&(t[o]=e[o],u[o]=!0);e=n!==!1&&$(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ve=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},$e=e=>{if(!e)return null;if(g(e))return e;let t=e.length;if(!fe(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},We=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&$(Uint8Array)),Ke=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Xe=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Qe=O("HTMLFormElement"),Ye=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Y=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Ge=O("RegExp"),he=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},Ze=e=>{he(e,(t,n)=>{const r=e[n];if(!!P(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not read-only method '"+n+"'")})}})},ve=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return g(e)?r(e):r(String(e).split(t)),n},et=()=>{},tt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),a={isArray:g,isArrayBuffer:le,isBuffer:Ce,isFormData:ke,isArrayBufferView:De,isString:Fe,isNumber:fe,isBoolean:Be,isObject:de,isPlainObject:U,isUndefined:z,isDate:ge,isFile:_e,isBlob:Le,isRegExp:Ge,isFunction:P,isStream:je,isURLSearchParams:Me,isTypedArray:We,isFileList:Ue,forEach:k,merge:J,extend:He,trim:Ie,stripBOM:qe,inherits:ze,toFlatObject:Je,kindOf:W,kindOfTest:O,endsWith:Ve,toArray:$e,forEachEntry:Ke,matchAll:Xe,isHTMLForm:Qe,hasOwnProperty:Y,hasOwnProp:Y,reduceDescriptors:he,freezeMethods:Ze,toObjectSet:ve,toCamelCase:Ye,noop:et,toFiniteNumber:tt};function h(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(h,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const pe=h.prototype,me={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{me[e]={value:e}});Object.defineProperties(h,me);Object.defineProperty(pe,"isAxiosError",{value:!0});h.from=(e,t,n,r,s,i)=>{const o=Object.create(pe);return a.toFlatObject(e,o,function(l){return l!==Error.prototype},u=>u!=="isAxiosError"),h.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var nt=typeof self=="object"?self.FormData:window.FormData;function V(e){return a.isPlainObject(e)||a.isArray(e)}function Ee(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function G(e,t,n){return e?e.concat(t).map(function(s,i){return s=Ee(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function rt(e){return a.isArray(e)&&!e.some(V)}const st=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ot(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function M(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(nt||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(E,A){return!a.isUndefined(A[E])});const r=n.metaTokens,s=n.visitor||p,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&ot(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!l&&a.isBlob(f))throw new h("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?l&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function p(f,E,A){let R=f;if(f&&!A&&typeof f=="object"){if(a.endsWith(E,"{}"))E=r?E:E.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&rt(f)||a.isFileList(f)||a.endsWith(E,"[]")&&(R=a.toArray(f)))return E=Ee(E),R.forEach(function(I,Pe){!a.isUndefined(I)&&t.append(o===!0?G([E],Pe,i):o===null?E:E+"[]",c(I))}),!1}return V(f)?!0:(t.append(G(A,E,i),c(f)),!1)}const w=[],m=Object.assign(st,{defaultVisitor:p,convertValue:c,isVisitable:V});function d(f,E){if(!a.isUndefined(f)){if(w.indexOf(f)!==-1)throw Error("Circular reference detected in "+E.join("."));w.push(f),a.forEach(f,function(R,x){(!a.isUndefined(R)&&s.call(t,R,a.isString(x)?x.trim():x,E,m))===!0&&d(R,E?E.concat(x):[x])}),w.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return d(e),t}function Z(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function K(e,t){this._pairs=[],e&&M(e,this,t)}const we=K.prototype;we.append=function(t,n){this._pairs.push([t,n])};we.toString=function(t){const n=t?function(r){return t.call(this,r,Z)}:Z;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function it(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ye(e,t,n){if(!t)return e;const r=e.indexOf("#");r!==-1&&(e=e.slice(0,r));const s=n&&n.encode||it,i=a.isURLSearchParams(t)?t.toString():new K(t,n).toString(s);return i&&(e+=(e.indexOf("?")===-1?"?":"&")+i),e}class v{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const be={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},at=typeof URLSearchParams<"u"?URLSearchParams:K,ct=FormData,ut=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),S={isBrowser:!0,classes:{URLSearchParams:at,FormData:ct,Blob},isStandardBrowserEnv:ut,protocols:["http","https","file","blob","url","data"]};function lt(e,t){return M(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function ft(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function dt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Re(e){function t(n,r,s,i){let o=n[i++];const u=Number.isFinite(+o),l=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,l?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!u):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=dt(s[o])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(ft(r),s,n,0)}),n}return null}function ht(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new h("Request failed with status code "+n.status,[h.ERR_BAD_REQUEST,h.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const pt=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,u){const l=[];l.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&l.push("expires="+new Date(s).toGMTString()),a.isString(i)&&l.push("path="+i),a.isString(o)&&l.push("domain="+o),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function mt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Et(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Se(e,t){return e&&!mt(t)?Et(e,t):t}const wt=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const u=a.isString(o)?s(o):o;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function _(e,t,n){h.call(this,e==null?"canceled":e,h.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(_,h,{__CANCEL__:!0});function yt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}const bt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Rt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&bt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ee=Symbol("internals"),Oe=Symbol("defaults");function F(e){return e&&String(e).trim().toLowerCase()}function L(e){return e===!1||e==null?e:String(e)}function St(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function te(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Ot(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function At(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}function D(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}function b(e,t){e&&this.set(e),this[Oe]=t||null}Object.assign(b.prototype,{set:function(e,t,n){const r=this;function s(i,o,u){const l=F(o);if(!l)throw new Error("header name must be a non-empty string");const c=D(r,l);c&&u!==!0&&(r[c]===!1||u===!1)||(a.isArray(i)?i=i.map(L):i=L(i),r[c||o]=i)}return a.isPlainObject(e)?a.forEach(e,(i,o)=>{s(i,o,t)}):s(t,e,n),this},get:function(e,t){if(e=F(e),!e)return;const n=D(this,e);if(n){const r=this[n];if(!t)return r;if(t===!0)return St(r);if(a.isFunction(t))return t.call(this,r,n);if(a.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}},has:function(e,t){if(e=F(e),e){const n=D(this,e);return!!(n&&(!t||te(this,this[n],n,t)))}return!1},delete:function(e,t){const n=this;let r=!1;function s(i){if(i=F(i),i){const o=D(n,i);o&&(!t||te(n,n[o],o,t))&&(delete n[o],r=!0)}}return a.isArray(e)?e.forEach(s):s(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){const t=this,n={};return a.forEach(this,(r,s)=>{const i=D(n,s);if(i){t[i]=L(r),delete t[s];return}const o=e?Ot(s):String(s).trim();o!==s&&delete t[s],t[o]=L(r),n[o]=!0}),this},toJSON:function(){const e=Object.create(null);return a.forEach(Object.assign({},this[Oe]||null,this),(t,n)=>{t==null||t===!1||(e[n]=a.isArray(t)?t.join(", "):t)}),e}});Object.assign(b,{from:function(e){return a.isString(e)?new this(Rt(e)):e instanceof this?e:new this(e)},accessor:function(e){const n=(this[ee]=this[ee]={accessors:{}}).accessors,r=this.prototype;function s(i){const o=F(i);n[o]||(At(r,i),n[o]=!0)}return a.isArray(e)?e.forEach(s):s(e),this}});b.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(b.prototype);a.freezeMethods(b);function Tt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(l){const c=Date.now(),p=r[i];o||(o=c),n[s]=l,r[s]=c;let w=i,m=0;for(;w!==s;)m+=n[w++],w=w%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const d=p&&c-p;return d?Math.round(m*1e3/d):void 0}}function ne(e,t){let n=0;const r=Tt(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,u=i-n,l=r(u),c=i<=o;n=i;const p={loaded:i,total:o,progress:o?i/o:void 0,bytes:u,rate:l||void 0,estimated:l&&o&&c?(o-i)/l:void 0};p[t?"download":"upload"]=!0,e(p)}}function re(e){return new Promise(function(n,r){let s=e.data;const i=b.from(e.headers).normalize(),o=e.responseType;let u;function l(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&S.isStandardBrowserEnv&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const d=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(d+":"+f))}const p=Se(e.baseURL,e.url);c.open(e.method.toUpperCase(),ye(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function w(){if(!c)return;const d=b.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),E={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:d,config:e,request:c};ht(function(R){n(R),l()},function(R){r(R),l()},E),c=null}if("onloadend"in c?c.onloadend=w:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(w)},c.onabort=function(){!c||(r(new h("Request aborted",h.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new h("Network Error",h.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const E=e.transitional||be;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new h(f,E.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const d=(e.withCredentials||wt(p))&&e.xsrfCookieName&&pt.read(e.xsrfCookieName);d&&i.set(e.xsrfHeaderName,d)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(f,E){c.setRequestHeader(E,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ne(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ne(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=d=>{!c||(r(!d||d.type?new _(null,e,c):d),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const m=yt(p);if(m&&S.protocols.indexOf(m)===-1){r(new h("Unsupported protocol "+m+":",h.ERR_BAD_REQUEST,e));return}c.send(s||null)})}const se={http:re,xhr:re},oe={getAdapter:e=>{if(a.isString(e)){const t=se[e];if(!e)throw Error(a.hasOwnProp(e)?`Adapter '${e}' is not available in the build`:`Can not resolve adapter '${e}'`);return t}if(!a.isFunction(e))throw new TypeError("adapter is not a function");return e},adapters:se},xt={"Content-Type":"application/x-www-form-urlencoded"};function Nt(){let e;return typeof XMLHttpRequest<"u"?e=oe.getAdapter("xhr"):typeof process<"u"&&a.kindOf(process)==="process"&&(e=oe.getAdapter("http")),e}function Pt(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const C={transitional:be,adapter:Nt(),transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(Re(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return lt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return M(u?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),Pt(t)):t}],transformResponse:[function(t){const n=this.transitional||C.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(o)throw u.name==="SyntaxError"?h.from(u,h.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){C.headers[t]={}});a.forEach(["post","put","patch"],function(t){C.headers[t]=a.merge(xt)});function H(e,t){const n=this||C,r=t||n,s=b.from(r.headers);let i=r.data;return a.forEach(e,function(u){i=u.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Ae(e){return!!(e&&e.__CANCEL__)}function q(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _}function ie(e){return q(e),e.headers=b.from(e.headers),e.data=H.call(e,e.transformRequest),(e.adapter||C.adapter)(e).then(function(r){return q(e),r.data=H.call(e,e.transformResponse,r),r.headers=b.from(r.headers),r},function(r){return Ae(r)||(q(e),r&&r.response&&(r.response.data=H.call(e,e.transformResponse,r.response),r.response.headers=b.from(r.response.headers))),Promise.reject(r)})}function B(e,t){t=t||{};const n={};function r(c,p){return a.isPlainObject(c)&&a.isPlainObject(p)?a.merge(c,p):a.isPlainObject(p)?a.merge({},p):a.isArray(p)?p.slice():p}function s(c){if(a.isUndefined(t[c])){if(!a.isUndefined(e[c]))return r(void 0,e[c])}else return r(e[c],t[c])}function i(c){if(!a.isUndefined(t[c]))return r(void 0,t[c])}function o(c){if(a.isUndefined(t[c])){if(!a.isUndefined(e[c]))return r(void 0,e[c])}else return r(void 0,t[c])}function u(c){if(c in t)return r(e[c],t[c]);if(c in e)return r(void 0,e[c])}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(p){const w=l[p]||s,m=w(p);a.isUndefined(m)&&w!==u||(n[p]=m)}),n}const Te="1.1.2",X={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{X[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ae={};X.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Te+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,u)=>{if(t===!1)throw new h(s(o," has been removed"+(n?" in "+n:"")),h.ERR_DEPRECATED);return n&&!ae[o]&&(ae[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,u):!0}};function Ct(e,t,n){if(typeof e!="object")throw new h("options must be an object",h.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const u=e[i],l=u===void 0||o(u,i,e);if(l!==!0)throw new h("option "+i+" must be "+l,h.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new h("Unknown option "+i,h.ERR_BAD_OPTION)}}const xe={assertOptions:Ct,validators:X},N=xe.validators;class T{constructor(t){this.defaults=t,this.interceptors={request:new v,response:new v}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const r=n.transitional;r!==void 0&&xe.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),n.method=(n.method||this.defaults.method||"get").toLowerCase();const s=n.headers&&a.merge(n.headers.common,n.headers[n.method]);s&&a.forEach(["delete","get","head","post","put","patch","common"],function(d){delete n.headers[d]}),n.headers=new b(n.headers,s);const i=[];let o=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(n)===!1||(o=o&&d.synchronous,i.unshift(d.fulfilled,d.rejected))});const u=[];this.interceptors.response.forEach(function(d){u.push(d.fulfilled,d.rejected)});let l,c=0,p;if(!o){const m=[ie.bind(this),void 0];for(m.unshift.apply(m,i),m.push.apply(m,u),p=m.length,l=Promise.resolve(n);c<p;)l=l.then(m[c++],m[c++]);return l}p=i.length;let w=n;for(c=0;c<p;){const m=i[c++],d=i[c++];try{w=m(w)}catch(f){d.call(this,f);break}}try{l=ie.call(this,w)}catch(m){return Promise.reject(m)}for(c=0,p=u.length;c<p;)l=l.then(u[c++],u[c++]);return l}getUri(t){t=B(this.defaults,t);const n=Se(t.baseURL,t.url);return ye(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){T.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,u){return this.request(B(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}T.prototype[t]=n(),T.prototype[t+"Form"]=n(!0)});class Q{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(u=>{r.subscribe(u),i=u}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,u){r.reason||(r.reason=new _(i,o,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new Q(function(s){t=s}),cancel:t}}}function Dt(e){return function(n){return e.apply(null,n)}}function Ft(e){return a.isObject(e)&&e.isAxiosError===!0}function Ne(e){const t=new T(e),n=ce(T.prototype.request,t);return a.extend(n,T.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ne(B(e,s))},n}const y=Ne(C);y.Axios=T;y.CanceledError=_;y.CancelToken=Q;y.isCancel=Ae;y.VERSION=Te;y.toFormData=M;y.AxiosError=h;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=Dt;y.isAxiosError=Ft;y.formToJSON=e=>Re(a.isHTMLForm(e)?new FormData(e):e);export{y as a};
