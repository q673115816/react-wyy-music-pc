"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[725],{30:(r,t,e)=>{e.d(t,{Z:()=>u});var n=e(7363),a=function(){},i="undefined"!=typeof window;const u=function(r,t,e){if(!i)return[t,a,a];if(!r)throw new Error("useLocalStorage key may not be falsy");var u=e?e.raw?function(r){return r}:e.deserializer:JSON.parse,o=(0,n.useRef)((function(r){try{var n=e?e.raw?String:e.serializer:JSON.stringify,a=localStorage.getItem(r);return null!==a?u(a):(t&&localStorage.setItem(r,n(t)),t)}catch(r){return t}})),c=(0,n.useState)((function(){return o.current(r)})),s=c[0],f=c[1];(0,n.useLayoutEffect)((function(){return f(o.current(r))}),[r]);var l=(0,n.useCallback)((function(t){try{var n="function"==typeof t?t(s):t;if(void 0===n)return;var a;a=e?e.raw?"string"==typeof n?n:JSON.stringify(n):e.serializer?e.serializer(n):JSON.stringify(n):JSON.stringify(n),localStorage.setItem(r,a),f(u(a))}catch(r){}}),[r,f]),y=(0,n.useCallback)((function(){try{localStorage.removeItem(r),f(void 0)}catch(r){}}),[r,f]);return[s,l,y]}}}]);
//# sourceMappingURL=react-use.js.map?version=53572c95