import{r as k}from"./react.0a2f695e.js";import{u as K,a as x,b as R,D as U,c as W,d as L}from"./react-router.d1bb31aa.js";import{j as N}from"./qrcode.react.84002e4a.js";/**
 * React Router DOM v6.4.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function b(e,t){if(e==null)return{};var o={},r=Object.keys(e),n,a;for(a=0;a<r.length;a++)n=r[a],!(t.indexOf(n)>=0)&&(o[n]=e[n]);return o}function D(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function F(e,t){return e.button===0&&(!t||t==="_self")&&!D(e)}const A=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],O=["aria-current","caseSensitive","className","end","style","to","children"],I=k.exports.forwardRef(function(t,o){let{onClick:r,relative:n,reloadDocument:a,replace:c,state:u,target:f,to:i,preventScrollReset:p}=t,m=b(t,A),y=K(i,{relative:n}),d=B(i,{replace:c,state:u,target:f,preventScrollReset:p,relative:n});function l(s){r&&r(s),s.defaultPrevented||d(s)}return N("a",{...m,href:y,onClick:a?r:l,ref:o,target:f})}),_=k.exports.forwardRef(function(t,o){let{"aria-current":r="page",caseSensitive:n=!1,className:a="",end:c=!1,style:u,to:f,children:i}=t,p=b(t,O),m=x(f,{relative:p.relative}),y=R(),d=k.exports.useContext(U),l=m.pathname,s=y.pathname,h=d&&d.navigation&&d.navigation.location?d.navigation.location.pathname:null;n||(s=s.toLowerCase(),h=h?h.toLowerCase():null,l=l.toLowerCase());let v=s===l||!c&&s.startsWith(l)&&s.charAt(l.length)==="/",g=h!=null&&(h===l||!c&&h.startsWith(l)&&h.charAt(l.length)==="/"),j=v?r:void 0,C;typeof a=="function"?C=a({isActive:v,isPending:g}):C=[a,v?"active":null,g?"pending":null].filter(Boolean).join(" ");let w=typeof u=="function"?u({isActive:v,isPending:g}):u;return N(I,{...p,"aria-current":j,className:C,ref:o,style:w,to:f,children:typeof i=="function"?i({isActive:v,isPending:g}):i})});var P;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(P||(P={}));var S;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(S||(S={}));function B(e,t){let{target:o,replace:r,state:n,preventScrollReset:a,relative:c}=t===void 0?{}:t,u=W(),f=R(),i=x(e,{relative:c});return k.exports.useCallback(p=>{if(F(p,o)){p.preventDefault();let m=r!==void 0?r:L(f)===L(i);u(e,{replace:m,state:n,preventScrollReset:a,relative:c})}},[f,u,i,r,n,o,e,a,c])}export{I as L,_ as N};
