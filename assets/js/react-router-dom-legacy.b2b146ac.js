System.register(["./react-legacy.b3bc90c5.js","./react-router-legacy.d596e264.js","./qrcode.react-legacy.685a2ddb.js"],(function(e,t){"use strict";var n,r,a,o,l,i,c,s,u,f,p,v;return{setters:[e=>{n=e.r},e=>{r=e.c,a=e.R,o=e.u,l=e.a,i=e.b,c=e.D,s=e.m,u=e.d,f=e.e,p=e.f},e=>{v=e.j}],execute:function(){
/**
       * React Router DOM v6.4.2
       *
       * Copyright (c) Remix Software Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE.md file in the root directory of this source tree.
       *
       * @license MIT
       */
function t(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}e("B",(function(e){let{basename:t,children:o,window:l}=e,i=n.exports.useRef();null==i.current&&(i.current=r({window:l,v5Compat:!0}));let c=i.current,[s,u]=n.exports.useState({action:c.action,location:c.location});return n.exports.useLayoutEffect((()=>c.listen(u)),[c]),v(a,{basename:t,children:o,location:s.location,navigationType:s.action,navigator:c})}));const d=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],m=["aria-current","caseSensitive","className","end","style","to","children"],h=e("L",n.exports.forwardRef((function(e,r){let{onClick:a,relative:i,reloadDocument:c,replace:s,state:m,target:h,to:g,preventScrollReset:y}=e,S=t(e,d),R=o(g,{relative:i}),b=function(e,t){let{target:r,replace:a,state:o,preventScrollReset:i,relative:c}=void 0===t?{}:t,s=u(),v=f(),d=l(e,{relative:c});return n.exports.useCallback((t=>{if(function(e,t){return!(0!==e.button||t&&"_self"!==t||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e))}(t,r)){t.preventDefault();let n=void 0!==a?a:p(v)===p(d);s(e,{replace:n,state:o,preventScrollReset:i,relative:c})}}),[v,s,d,a,o,r,e,i,c])}(g,{replace:s,state:m,target:h,preventScrollReset:y,relative:i});return v("a",{...S,href:R,onClick:c?a:function(e){a&&a(e),e.defaultPrevented||b(e)},ref:r,target:h})})));var g,y;e("N",n.exports.forwardRef((function(e,r){let a,{"aria-current":o="page",caseSensitive:u=!1,className:f="",end:p=!1,style:d,to:g,children:y}=e,S=t(e,m),R=l(g),b=i({path:R.pathname,end:p,caseSensitive:u}),x=n.exports.useContext(c),j=null==x?void 0:x.navigation.location,w=l(j||""),C=null!=n.exports.useMemo((()=>j?s({path:R.pathname,end:p,caseSensitive:u},w.pathname):null),[j,R.pathname,u,p,w.pathname]),k=null!=b,U=k?o:void 0;a="function"==typeof f?f({isActive:k,isPending:C}):[f,k?"active":null,C?"pending":null].filter(Boolean).join(" ");let D="function"==typeof d?d({isActive:k,isPending:C}):d;return v(h,{...S,"aria-current":U,className:a,ref:r,style:D,to:g,children:"function"==typeof y?y({isActive:k,isPending:C}):y})}))),function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"}(g||(g={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(y||(y={}))}}}));
