System.register(["./react-legacy.b3bc90c5.js","./qrcode.react-legacy.685a2ddb.js"],(function(e,t){"use strict";var r,n,a,o,s;return{setters:[e=>{r=e.R,n=e.r},e=>{a=e.j,o=e.a,s=e.F}],execute:function(){
/**
       * @remix-run/router v1.0.3
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}var i,l;function u(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function c(e,t,r){void 0===r&&(r="/");let n=x(("string"==typeof t?u(t):t).pathname||"/",r);if(null==n)return null;let a=h(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s)o=m(a[s],g(n));return o}function h(e,t,r,n){return void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n=""),e.forEach(((e,a)=>{let o={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};o.relativePath.startsWith("/")&&(y(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(n.length));let s=P([n,o.relativePath]),i=r.concat(o);e.children&&e.children.length>0&&(y(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),h(e.children,t,i,s)),(null!=e.path||e.index)&&t.push({path:s,score:f(s,e.index),routesMeta:i})})),t}e({N:function(e){let{to:t,replace:r,state:a,relative:o}=e;H()||y(!1);let s=n.exports.useContext(M),i=V();return n.exports.useEffect((()=>{s&&"idle"!==s.navigation.state||i(t,{replace:r,state:a,relative:o})})),null},O:function(e){return function(e){let t=n.exports.useContext(I).outlet;return t?a(q.Provider,{value:e,children:t}):t}(e.context)},R:function(e){let{children:t,location:r}=e,a=n.exports.useContext(A);return X(a&&!t?a.router.routes:te(t),r)},a:G,b:F,c:V,d:function(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t},e:function(){let{matches:e}=n.exports.useContext(I),t=e[e.length-1];return t?t.params:{}},f:ee,g:function(e){let{basename:t="/",children:r=null,location:o,navigationType:s=i.Pop,navigator:l,static:c=!1}=e;H()&&y(!1);let h=t.replace(/^\/*/,"/"),p=n.exports.useMemo((()=>({basename:h,navigator:l,static:c})),[h,l,c]);"string"==typeof o&&(o=u(o));let{pathname:d="/",search:f="",hash:m="",state:v=null,key:g="default"}=o,b=n.exports.useMemo((()=>{let e=x(d,h);return null==e?null:{pathname:e,search:f,hash:m,state:v,key:g}}),[h,d,f,m,v,g]);return null==b?null:a(N.Provider,{value:p,children:a(k.Provider,{children:r,value:{location:b,navigationType:s}})})},h:X,u:function(e,t){let{relative:r}=void 0===t?{}:t;H()||y(!1);let{basename:a,navigator:o}=n.exports.useContext(N),{hash:s,pathname:i,search:l}=G(e,{relative:r}),u=i;return"/"!==a&&(u="/"===i?a:P([a,i])),o.createHref({pathname:u,search:l,hash:s})}}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(i||(i={})),function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(l||(l={}));const p=/^:\w+$/,d=e=>"*"===e;function f(e,t){let r=e.split("/"),n=r.length;return r.some(d)&&(n+=-2),t&&(n+=2),r.filter((e=>!d(e))).reduce(((e,t)=>e+(p.test(t)?3:""===t?1:10)),n)}function m(e,t){let{routesMeta:r}=e,n={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],i=s===r.length-1,l="/"===a?t:t.slice(a.length)||"/",u=v({path:e.relativePath,caseSensitive:e.caseSensitive,end:i},l);if(!u)return null;Object.assign(n,u.params);let c=e.route;o.push({params:n,pathname:P([a,u.pathname]),pathnameBase:R(P([a,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(a=P([a,u.pathnameBase]))}return o}function v(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!0),b("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(n.push(t),"([^\\/]+)")));return e.endsWith("*")?(n.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],s=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:n.reduce(((e,t,r)=>{if("*"===t){let e=i[r]||"";s=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(r){return b(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+r+")."),e}}(i[r]||"",t),e}),{}),pathname:o,pathnameBase:s,pattern:e}}function g(e){try{return decodeURI(e)}catch(t){return b(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function x(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function y(e,t){if(!1===e||null==e)throw new Error(t)}function b(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(r){}}}function C(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function E(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function w(e,r,n,a){let o;void 0===a&&(a=!1),"string"==typeof e?o=u(e):(o=t({},e),y(!o.pathname||!o.pathname.includes("?"),C("?","pathname","search",o)),y(!o.pathname||!o.pathname.includes("#"),C("#","pathname","hash",o)),y(!o.search||!o.search.includes("#"),C("#","search","hash",o)));let s,i=""===e||""===o.pathname,l=i?"/":o.pathname;if(a||null==l)s=n;else{let e=r.length-1;if(l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}s=e>=0?r[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:a=""}="string"==typeof e?u(e):e,o=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:o,search:S(n),hash:O(a)}}(o,s),h=l&&"/"!==l&&l.endsWith("/"),p=(i||"."===l)&&n.endsWith("/");return c.pathname.endsWith("/")||!h&&!p||(c.pathname+="/"),c}const P=e=>e.join("/").replace(/\/\/+/g,"/"),R=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),S=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",O=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class U{constructor(e,t,r){this.status=e,this.statusText=t||"",this.data=r}}const j=new Set(["POST","PUT","PATCH","DELETE"]);
/**
       * React Router v6.4.3
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},T.apply(this,arguments)}new Set(["GET","HEAD",...j]);"function"==typeof Object.is&&Object.is;const{useState:$,useEffect:W,useLayoutEffect:L,useDebugValue:B}=r;"undefined"==typeof window||void 0===window.document||window.document.createElement,"useSyncExternalStore"in r&&(e=>{e.useSyncExternalStore})(r);const D=n.exports.createContext(null),A=n.exports.createContext(null),M=e("D",n.exports.createContext(null)),N=n.exports.createContext(null),k=n.exports.createContext(null),I=n.exports.createContext({outlet:null,matches:[]}),J=n.exports.createContext(null);function H(){return null!=n.exports.useContext(k)}function F(){return H()||y(!1),n.exports.useContext(k).location}function V(){H()||y(!1);let{basename:e,navigator:t}=n.exports.useContext(N),{matches:r}=n.exports.useContext(I),{pathname:a}=F(),o=JSON.stringify(E(r).map((e=>e.pathnameBase))),s=n.exports.useRef(!1);return n.exports.useEffect((()=>{s.current=!0})),n.exports.useCallback((function(r,n){if(void 0===n&&(n={}),!s.current)return;if("number"==typeof r)return void t.go(r);let i=w(r,JSON.parse(o),a,"path"===n.relative);"/"!==e&&(i.pathname="/"===i.pathname?e:P([e,i.pathname])),(n.replace?t.replace:t.push)(i,n.state,n)}),[e,t,o,a])}const q=n.exports.createContext(null);function G(e,t){let{relative:r}=void 0===t?{}:t,{matches:a}=n.exports.useContext(I),{pathname:o}=F(),s=JSON.stringify(E(a).map((e=>e.pathnameBase)));return n.exports.useMemo((()=>w(e,JSON.parse(s),o,"path"===r)),[e,s,o,r])}function X(e,t){H()||y(!1);let r=n.exports.useContext(M),{matches:o}=n.exports.useContext(I),s=o[o.length-1],l=s?s.params:{};!s||s.pathname;let h=s?s.pathnameBase:"/";s&&s.route;let p,d=F();if(t){var f;let e="string"==typeof t?u(t):t;"/"===h||(null==(f=e.pathname)?void 0:f.startsWith(h))||y(!1),p=e}else p=d;let m=p.pathname||"/",v=c(e,{pathname:"/"===h?m:m.slice(h.length)||"/"}),g=function(e,t,r){if(void 0===t&&(t=[]),null==e){if(null==r||!r.errors)return null;e=r.matches}let n=e,o=null==r?void 0:r.errors;if(null!=o){let e=n.findIndex((e=>e.route.id&&(null==o?void 0:o[e.route.id])));e>=0||y(!1),n=n.slice(0,Math.min(n.length,e+1))}return n.reduceRight(((e,s,i)=>{let l=s.route.id?null==o?void 0:o[s.route.id]:null,u=r?s.route.errorElement||a(Y,{}):null,c=()=>a(z,{match:s,routeContext:{outlet:e,matches:t.concat(n.slice(0,i+1))},children:l?u:void 0!==s.route.element?s.route.element:e});return r&&(s.route.errorElement||0===i)?a(_,{location:r.location,component:u,error:l,children:c()}):c()}),null)}(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:P([h,e.pathname]),pathnameBase:"/"===e.pathnameBase?h:P([h,e.pathnameBase])}))),o,r||void 0);return t&&g?a(k.Provider,{value:{location:T({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:i.Pop},children:g}):g}function Y(){let e=function(){var e;let t=n.exports.useContext(J),r=function(e){let t=n.exports.useContext(M);return t||y(!1),t}(Q.UseRouteError),a=n.exports.useContext(I),o=a.matches[a.matches.length-1];return t||(a||y(!1),!o.route.id&&y(!1),null==(e=r.errors)?void 0:e[o.route.id])}(),t=e instanceof U?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:i},u={padding:"2px 4px",backgroundColor:i};return o(s,{children:[a("h2",{children:"Unhandled Thrown Error!"}),a("h3",{style:{fontStyle:"italic"},children:t}),r?a("pre",{style:l,children:r}):null,a("p",{children:"💿 Hey developer 👋"}),o("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own ",a("code",{style:u,children:"errorElement"})," props on ",a("code",{style:u,children:"<Route>"})]})]})}class _ extends n.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?a(J.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function z(e){let{routeContext:t,match:r,children:o}=e,s=n.exports.useContext(D);return s&&r.route.errorElement&&(s._deepestRenderedBoundaryId=r.route.id),a(I.Provider,{value:t,children:o})}var K,Q,Z;function ee(e){y(!1)}function te(e,t){void 0===t&&(t=[]);let r=[];return n.exports.Children.forEach(e,((e,a)=>{if(!n.exports.isValidElement(e))return;if(e.type===n.exports.Fragment)return void r.push.apply(r,te(e.props.children,t));e.type!==ee&&y(!1),e.props.index&&e.props.children&&y(!1);let o=[...t,a],s={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,hasErrorBoundary:null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle};e.props.children&&(s.children=te(e.props.children,o)),r.push(s)})),r}!function(e){e.UseRevalidator="useRevalidator"}(K||(K={})),function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(Q||(Q={})),function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(Z||(Z={})),new Promise((()=>{}))}}}));
