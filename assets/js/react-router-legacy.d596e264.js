System.register(["./react-legacy.b3bc90c5.js","./qrcode.react-legacy.685a2ddb.js"],(function(e,t){"use strict";var r,n,a,o,s;return{setters:[e=>{r=e.R,n=e.r},e=>{a=e.j,o=e.a,s=e.F}],execute:function(){
/**
       * @remix-run/router v1.0.2
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}var i;e({N:function(e){let{to:t,replace:r,state:a,relative:o}=e;F()||C(!1);let s=n.exports.useContext(N),i=X();return n.exports.useEffect((()=>{s&&"idle"!==s.navigation.state||i(t,{replace:r,state:a,relative:o})})),null},O:function(e){return function(e){let t=n.exports.useContext(H).outlet;return t?a(Y.Provider,{value:e,children:t}):t}(e.context)},R:function(e){let{basename:t="/",children:r=null,location:o,navigationType:s=i.Pop,navigator:l,static:u=!1}=e;F()&&C(!1);let c=t.replace(/^\/*/,"/"),h=n.exports.useMemo((()=>({basename:c,navigator:l,static:u})),[c,l,u]);"string"==typeof o&&(o=p(o));let{pathname:d="/",search:f="",hash:m="",state:v=null,key:g="default"}=o,x=n.exports.useMemo((()=>{let e=w(d,c);return null==e?null:{pathname:e,search:f,hash:m,state:v,key:g}}),[c,d,f,m,v,g]);return null==x?null:a(T.Provider,{value:h,children:a(I.Provider,{children:r,value:{location:x,navigationType:s}})})},a:_,b:function(e){F()||C(!1);let{pathname:t}=V();return n.exports.useMemo((()=>b(e,t)),[t,e])},c:function(e){return void 0===e&&(e={}),function(e,t,r,n){void 0===n&&(n={});let{window:a=document.defaultView,v5Compat:o=!1}=n,s=a.history,h=i.Pop,p=null;function d(){h=i.Pop,p&&p({action:h,location:v.location})}function f(e,t){h=i.Push;let n=c(v.location,e,t);r&&r(n,e);let l=u(n),d=v.createHref(n);try{s.pushState(l,"",d)}catch(f){a.location.assign(d)}o&&p&&p({action:h,location:n})}function m(e,t){h=i.Replace;let n=c(v.location,e,t);r&&r(n,e);let a=u(n),l=v.createHref(n);s.replaceState(a,"",l),o&&p&&p({action:h,location:n})}let v={get action(){return h},get location(){return e(a,s)},listen(e){if(p)throw new Error("A history only accepts one active listener");return a.addEventListener(l,d),p=e,()=>{a.removeEventListener(l,d),p=null}},createHref:e=>t(a,e),push:f,replace:m,go:e=>s.go(e)};return v}((function(e,t){let{pathname:r,search:n,hash:a}=e.location;return c("",{pathname:r,search:n,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:h(t)}),null,e)},d:X,e:V,f:h,g:function(){let{matches:e}=n.exports.useContext(H),t=e[e.length-1];return t?t.params:{}},h:function(e){let{children:t,location:r}=e,a=n.exports.useContext(A);return z(a&&!t?a.router.routes:ne(t),r)},i:re,j:z,m:b,u:function(e,t){let{relative:r}=void 0===t?{}:t;F()||C(!1);let{basename:a,navigator:o}=n.exports.useContext(T),{hash:s,pathname:i,search:l}=_(e,{relative:r}),u=i;return"/"!==a&&(u="/"===i?a:S([a,i])),o.createHref({pathname:u,search:l,hash:s})}}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(i||(i={}));const l="popstate";function u(e){return{usr:e.state,key:e.key}}function c(e,r,n,a){return void 0===n&&(n=null),t({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof r?p(r):r,{state:n,key:r&&r.key||a||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function p(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}var d;function f(e,t,r){void 0===r&&(r="/");let n=w(("string"==typeof t?p(t):t).pathname||"/",r);if(null==n)return null;let a=m(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s)o=y(a[s],n);return o}function m(e,t,r,n){return void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n=""),e.forEach(((e,a)=>{let o={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};o.relativePath.startsWith("/")&&(C(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),o.relativePath=o.relativePath.slice(n.length));let s=S([n,o.relativePath]),i=r.concat(o);e.children&&e.children.length>0&&(C(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),m(e.children,t,i,s)),(null!=e.path||e.index)&&t.push({path:s,score:x(s,e.index),routesMeta:i})})),t}!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(d||(d={}));const v=/^:\w+$/,g=e=>"*"===e;function x(e,t){let r=e.split("/"),n=r.length;return r.some(g)&&(n+=-2),t&&(n+=2),r.filter((e=>!g(e))).reduce(((e,t)=>e+(v.test(t)?3:""===t?1:10)),n)}function y(e,t){let{routesMeta:r}=e,n={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],i=s===r.length-1,l="/"===a?t:t.slice(a.length)||"/",u=b({path:e.relativePath,caseSensitive:e.caseSensitive,end:i},l);if(!u)return null;Object.assign(n,u.params);let c=e.route;o.push({params:n,pathname:S([a,u.pathname]),pathnameBase:O(S([a,u.pathnameBase])),route:c}),"/"!==u.pathnameBase&&(a=S([a,u.pathnameBase]))}return o}function b(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!0),E("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(n.push(t),"([^\\/]+)")));return e.endsWith("*")?(n.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],s=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:n.reduce(((e,t,r)=>{if("*"===t){let e=i[r]||"";s=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(r){return E(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+r+")."),e}}(i[r]||"",t),e}),{}),pathname:o,pathnameBase:s,pattern:e}}function w(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function C(e,t){if(!1===e||null==e)throw new Error(t)}function E(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(r){}}}function P(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function R(e,r,n,a){let o;void 0===a&&(a=!1),"string"==typeof e?o=p(e):(o=t({},e),C(!o.pathname||!o.pathname.includes("?"),P("?","pathname","search",o)),C(!o.pathname||!o.pathname.includes("#"),P("#","pathname","hash",o)),C(!o.search||!o.search.includes("#"),P("#","search","hash",o)));let s,i=""===e||""===o.pathname,l=i?"/":o.pathname;if(a||null==l)s=n;else{let e=r.length-1;if(l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}s=e>=0?r[e]:"/"}let u=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:a=""}="string"==typeof e?p(e):e,o=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:o,search:j(n),hash:$(a)}}(o,s),c=l&&"/"!==l&&l.endsWith("/"),h=(i||"."===l)&&n.endsWith("/");return u.pathname.endsWith("/")||!c&&!h||(u.pathname+="/"),u}const S=e=>e.join("/").replace(/\/\/+/g,"/"),O=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),j=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",$=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class B{constructor(e,t,r){this.status=e,this.statusText=t||"",this.data=r}}
/**
       * React Router v6.4.2
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},U.apply(this,arguments)}"function"==typeof Object.is&&Object.is;const{useState:W,useEffect:k,useLayoutEffect:L,useDebugValue:M}=r;"undefined"==typeof window||void 0===window.document||window.document.createElement,"useSyncExternalStore"in r&&(e=>{e.useSyncExternalStore})(r);const D=n.exports.createContext(null),A=n.exports.createContext(null),N=e("D",n.exports.createContext(null)),T=n.exports.createContext(null),I=n.exports.createContext(null),H=n.exports.createContext({outlet:null,matches:[]}),J=n.exports.createContext(null);function F(){return null!=n.exports.useContext(I)}function V(){return F()||C(!1),n.exports.useContext(I).location}function q(e){return e.filter(((t,r)=>0===r||!t.route.index&&t.pathnameBase!==e[r-1].pathnameBase))}function X(){F()||C(!1);let{basename:e,navigator:t}=n.exports.useContext(T),{matches:r}=n.exports.useContext(H),{pathname:a}=V(),o=JSON.stringify(q(r).map((e=>e.pathnameBase))),s=n.exports.useRef(!1);return n.exports.useEffect((()=>{s.current=!0})),n.exports.useCallback((function(r,n){if(void 0===n&&(n={}),!s.current)return;if("number"==typeof r)return void t.go(r);let i=R(r,JSON.parse(o),a,"path"===n.relative);"/"!==e&&(i.pathname="/"===i.pathname?e:S([e,i.pathname])),(n.replace?t.replace:t.push)(i,n.state,n)}),[e,t,o,a])}const Y=n.exports.createContext(null);function _(e,t){let{relative:r}=void 0===t?{}:t,{matches:a}=n.exports.useContext(H),{pathname:o}=V(),s=JSON.stringify(q(a).map((e=>e.pathnameBase)));return n.exports.useMemo((()=>R(e,JSON.parse(s),o,"path"===r)),[e,s,o,r])}function z(e,t){F()||C(!1);let r=n.exports.useContext(N),{matches:o}=n.exports.useContext(H),s=o[o.length-1],l=s?s.params:{};!s||s.pathname;let u=s?s.pathnameBase:"/";s&&s.route;let c,h=V();if(t){var d;let e="string"==typeof t?p(t):t;"/"===u||(null==(d=e.pathname)?void 0:d.startsWith(u))||C(!1),c=e}else c=h;let m=c.pathname||"/",v=f(e,{pathname:"/"===u?m:m.slice(u.length)||"/"}),g=function(e,t,r){if(void 0===t&&(t=[]),null==e){if(null==r||!r.errors)return null;e=r.matches}let n=e,o=null==r?void 0:r.errors;if(null!=o){let e=n.findIndex((e=>e.route.id&&(null==o?void 0:o[e.route.id])));e>=0||C(!1),n=n.slice(0,Math.min(n.length,e+1))}return n.reduceRight(((e,s,i)=>{let l=s.route.id?null==o?void 0:o[s.route.id]:null,u=r?s.route.errorElement||a(G,{}):null,c=()=>a(Q,{match:s,routeContext:{outlet:e,matches:t.concat(n.slice(0,i+1))},children:l?u:void 0!==s.route.element?s.route.element:e});return r&&(s.route.errorElement||0===i)?a(K,{location:r.location,component:u,error:l,children:c()}):c()}),null)}(v&&v.map((e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:S([u,e.pathname]),pathnameBase:"/"===e.pathnameBase?u:S([u,e.pathnameBase])}))),o,r||void 0);return t?a(I.Provider,{value:{location:U({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:i.Pop},children:g}):g}function G(){let e=function(){var e;let t=n.exports.useContext(J),r=function(e){let t=n.exports.useContext(N);return t||C(!1),t}(ee.UseRouteError),a=n.exports.useContext(H),o=a.matches[a.matches.length-1];return t||(a||C(!1),!o.route.id&&C(!1),null==(e=r.errors)?void 0:e[o.route.id])}(),t=e instanceof B?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:i},u={padding:"2px 4px",backgroundColor:i};return o(s,{children:[a("h2",{children:"Unhandled Thrown Error!"}),a("h3",{style:{fontStyle:"italic"},children:t}),r?a("pre",{style:l,children:r}):null,a("p",{children:"💿 Hey developer 👋"}),o("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own ",a("code",{style:u,children:"errorElement"})," props on ",a("code",{style:u,children:"<Route>"})]})]})}class K extends n.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?a(J.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function Q(e){let{routeContext:t,match:r,children:o}=e,s=n.exports.useContext(D);return s&&r.route.errorElement&&(s._deepestRenderedBoundaryId=r.route.id),a(H.Provider,{value:t,children:o})}var Z,ee,te;function re(e){C(!1)}function ne(e,t){void 0===t&&(t=[]);let r=[];return n.exports.Children.forEach(e,((e,a)=>{if(!n.exports.isValidElement(e))return;if(e.type===n.exports.Fragment)return void r.push.apply(r,ne(e.props.children,t));e.type!==re&&C(!1),e.props.index&&e.props.children&&C(!1);let o=[...t,a],s={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,hasErrorBoundary:null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle};e.props.children&&(s.children=ne(e.props.children,o)),r.push(s)})),r}!function(e){e.UseRevalidator="useRevalidator"}(Z||(Z={})),function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"}(ee||(ee={})),function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(te||(te={})),new Promise((()=>{}))}}}));
