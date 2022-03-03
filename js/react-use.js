"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[725],{8836:(n,r,e)=>{e.d(r,{Z:()=>i});var t=function(){return t=Object.assign||function(n){for(var r,e=1,t=arguments.length;e<t;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},t.apply(this,arguments)};Object.create,Object.create;var o=e(7363),u=e(3002);function a(n){for(var r=[],e=0;e<n.length;e++)r.push({start:n.start(e),end:n.end(e)});return r}const i=("audio",function(n){var r,e;e=o.isValidElement(n)?(r=n).props:n;var i=(0,u.Z)({buffered:[],time:0,duration:0,paused:!0,muted:!1,volume:1,playing:!1}),c=i[0],f=i[1],s=(0,o.useRef)(null),l=function(n,r){return function(e){try{r&&r(e)}finally{n&&n(e)}}},v=function(){return f({paused:!1})},d=function(){return f({playing:!0})},y=function(){return f({playing:!1})},m=function(){return f({paused:!0,playing:!1})},p=function(){var n=s.current;n&&f({muted:n.muted,volume:n.volume})},g=function(){var n=s.current;if(n){var r=n.duration,e=n.buffered;f({duration:r,buffered:a(e)})}},h=function(){var n=s.current;n&&f({time:n.currentTime})},b=function(){var n=s.current;n&&f({buffered:a(n.buffered)})};r=r?o.cloneElement(r,t(t({controls:!1},e),{ref:s,onPlay:l(e.onPlay,v),onPlaying:l(e.onPlaying,d),onWaiting:l(e.onWaiting,y),onPause:l(e.onPause,m),onVolumeChange:l(e.onVolumeChange,p),onDurationChange:l(e.onDurationChange,g),onTimeUpdate:l(e.onTimeUpdate,h),onProgress:l(e.onProgress,b)})):o.createElement("audio",t(t({controls:!1},e),{ref:s,onPlay:l(e.onPlay,v),onPlaying:l(e.onPlaying,d),onWaiting:l(e.onWaiting,y),onPause:l(e.onPause,m),onVolumeChange:l(e.onVolumeChange,p),onDurationChange:l(e.onDurationChange,g),onTimeUpdate:l(e.onTimeUpdate,h),onProgress:l(e.onProgress,b)}));var P=!1,C={play:function(){var n=s.current;if(n&&!P){var r=n.play();if("object"==typeof r){P=!0;var e=function(){P=!1};r.then(e,e)}return r}},pause:function(){var n=s.current;if(n&&!P)return n.pause()},seek:function(n){var r=s.current;r&&void 0!==c.duration&&(n=Math.min(c.duration,Math.max(0,n)),r.currentTime=n)},volume:function(n){var r=s.current;r&&(n=Math.min(1,Math.max(0,n)),r.volume=n,f({volume:n}))},mute:function(){var n=s.current;n&&(n.muted=!0)},unmute:function(){var n=s.current;n&&(n.muted=!1)}};return(0,o.useEffect)((function(){var n=s.current;n&&(f({volume:n.volume,muted:n.muted,paused:n.paused}),e.autoPlay&&n.paused&&C.play())}),[e.src]),[r,c,C,s]})},2082:(n,r,e)=>{e.d(r,{Z:()=>t});const t=e(9211).Z},263:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(640),o=e.n(t),u=e(7363),a=e(3002);const i=function(){var n,r,e=(n=(0,u.useRef)(!1),r=(0,u.useCallback)((function(){return n.current}),[]),(0,u.useEffect)((function(){return n.current=!0,function(){n.current=!1}}),[]),r),t=(0,a.Z)({value:void 0,error:void 0,noUserInteraction:!0}),i=t[0],c=t[1];return[i,(0,u.useCallback)((function(n){var r,t;if(e())try{if("string"!=typeof n&&"number"!=typeof n){var u=new Error("Cannot copy typeof "+typeof n+" to clipboard, must be a string");return void c({value:n,error:u,noUserInteraction:!0})}if(""===n)return u=new Error("Cannot copy empty string to clipboard."),void c({value:n,error:u,noUserInteraction:!0});t=n.toString(),r=o()(t),c({value:t,error:void 0,noUserInteraction:r})}catch(u){c({value:t,error:u,noUserInteraction:r})}}),[])]}},30:(n,r,e)=>{e.d(r,{Z:()=>a});var t=e(7363),o=function(){},u="undefined"!=typeof window;const a=function(n,r,e){if(!u)return[r,o,o];if(!n)throw new Error("useLocalStorage key may not be falsy");var a=e?e.raw?function(n){return n}:e.deserializer:JSON.parse,i=(0,t.useRef)((function(n){try{var t=e?e.raw?String:e.serializer:JSON.stringify,o=localStorage.getItem(n);return null!==o?a(o):(r&&localStorage.setItem(n,t(r)),r)}catch(n){return r}})),c=(0,t.useState)((function(){return i.current(n)})),f=c[0],s=c[1];(0,t.useLayoutEffect)((function(){return s(i.current(n))}),[n]);var l=(0,t.useCallback)((function(r){try{var t="function"==typeof r?r(f):r;if(void 0===t)return;var o;o=e?e.raw?"string"==typeof t?t:JSON.stringify(t):e.serializer?e.serializer(t):JSON.stringify(t):JSON.stringify(t),localStorage.setItem(n,o),s(a(o))}catch(n){}}),[n,s]),v=(0,t.useCallback)((function(){try{localStorage.removeItem(n),s(void 0)}catch(n){}}),[n,s]);return[f,l,v]}},3002:(n,r,e)=>{e.d(r,{Z:()=>o});var t=e(7363);const o=function(n){void 0===n&&(n={});var r=(0,t.useState)(n),e=r[0],o=r[1];return[e,(0,t.useCallback)((function(n){o((function(r){return Object.assign({},r,n instanceof Function?n(r):n)}))}),[])]}},9211:(n,r,e)=>{e.d(r,{Z:()=>u});var t=e(7363),o=function(n,r){return"boolean"==typeof r?r:!n};const u=function(n){return(0,t.useReducer)(o,n)}}}]);
//# sourceMappingURL=react-use.js.map?version=4e742bb0