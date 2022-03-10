"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[725],{5936:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(8951),o=r(7363),u=r(3295);function a(n){for(var e=[],r=0;r<n.length;r++)e.push({start:n.start(r),end:n.end(r)});return e}const i=("audio",function(n){var e,r;r=o.isValidElement(n)?(e=n).props:n;var i=(0,u.Z)({buffered:[],time:0,duration:0,paused:!0,muted:!1,volume:1,playing:!1}),c=i[0],f=i[1],s=(0,o.useRef)(null),l=function(n,e){return function(r){try{e&&e(r)}finally{n&&n(r)}}},m=function(){return f({paused:!1})},v=function(){return f({playing:!0})},d=function(){return f({playing:!1})},y=function(){return f({paused:!0,playing:!1})},p=function(){var n=s.current;n&&f({muted:n.muted,volume:n.volume})},g=function(){var n=s.current;if(n){var e=n.duration,r=n.buffered;f({duration:e,buffered:a(r)})}},b=function(){var n=s.current;n&&f({time:n.currentTime})},h=function(){var n=s.current;n&&f({buffered:a(n.buffered)})};e=e?o.cloneElement(e,(0,t.pi)((0,t.pi)({controls:!1},r),{ref:s,onPlay:l(r.onPlay,m),onPlaying:l(r.onPlaying,v),onWaiting:l(r.onWaiting,d),onPause:l(r.onPause,y),onVolumeChange:l(r.onVolumeChange,p),onDurationChange:l(r.onDurationChange,g),onTimeUpdate:l(r.onTimeUpdate,b),onProgress:l(r.onProgress,h)})):o.createElement("audio",(0,t.pi)((0,t.pi)({controls:!1},r),{ref:s,onPlay:l(r.onPlay,m),onPlaying:l(r.onPlaying,v),onWaiting:l(r.onWaiting,d),onPause:l(r.onPause,y),onVolumeChange:l(r.onVolumeChange,p),onDurationChange:l(r.onDurationChange,g),onTimeUpdate:l(r.onTimeUpdate,b),onProgress:l(r.onProgress,h)}));var C=!1,P={play:function(){var n=s.current;if(n&&!C){var e=n.play();if("object"==typeof e){C=!0;var r=function(){C=!1};e.then(r,r)}return e}},pause:function(){var n=s.current;if(n&&!C)return n.pause()},seek:function(n){var e=s.current;e&&void 0!==c.duration&&(n=Math.min(c.duration,Math.max(0,n)),e.currentTime=n)},volume:function(n){var e=s.current;e&&(n=Math.min(1,Math.max(0,n)),e.volume=n,f({volume:n}))},mute:function(){var n=s.current;n&&(n.muted=!0)},unmute:function(){var n=s.current;n&&(n.muted=!1)}};return(0,o.useEffect)((function(){var n=s.current;n&&(f({volume:n.volume,muted:n.muted,paused:n.paused}),r.autoPlay&&n.paused&&P.play())}),[r.src]),[e,c,P,s]})},1164:(n,e,r)=>{r.d(e,{Z:()=>t});const t=r(1178).Z},3826:(n,e,r)=>{r.d(e,{Z:()=>i});var t=r(5886),o=r.n(t),u=r(7363),a=r(3295);const i=function(){var n,e,r=(n=(0,u.useRef)(!1),e=(0,u.useCallback)((function(){return n.current}),[]),(0,u.useEffect)((function(){return n.current=!0,function(){n.current=!1}}),[]),e),t=(0,a.Z)({value:void 0,error:void 0,noUserInteraction:!0}),i=t[0],c=t[1];return[i,(0,u.useCallback)((function(n){var e,t;if(r())try{if("string"!=typeof n&&"number"!=typeof n){var u=new Error("Cannot copy typeof "+typeof n+" to clipboard, must be a string");return void c({value:n,error:u,noUserInteraction:!0})}if(""===n)return u=new Error("Cannot copy empty string to clipboard."),void c({value:n,error:u,noUserInteraction:!0});t=n.toString(),e=o()(t),c({value:t,error:void 0,noUserInteraction:e})}catch(u){c({value:t,error:u,noUserInteraction:e})}}),[])]}},5458:(n,e,r)=>{r.d(e,{Z:()=>a});var t=r(7363),o=function(n){return(n+1)%1e6};function u(n,e){return"function"==typeof n?n.length?n(e):n():n}function a(n,e,r){void 0===n&&(n=0),void 0===e&&(e=null),void 0===r&&(r=null);var a=u(n);"number"!=typeof a&&console.error("initialValue has to be a number, got "+typeof n),"number"==typeof r?a=Math.max(a,r):null!==r&&console.error("min has to be a number, got "+typeof r),"number"==typeof e?a=Math.min(a,e):null!==e&&console.error("max has to be a number, got "+typeof e);var i,c,f,s=(i=a,c=(0,t.useRef)(u(i)),f=(0,t.useReducer)(o,0)[1],(0,t.useMemo)((function(){return[function(){return c.current},function(n){c.current=u(n,c.current),f()}]}),[])),l=s[0],m=s[1];return[l(),(0,t.useMemo)((function(){var n=function(n){var t=l(),o=u(n,t);t!==o&&("number"==typeof r&&(o=Math.max(o,r)),"number"==typeof e&&(o=Math.min(o,e)),t!==o&&m(o))};return{get:l,set:n,inc:function(e){void 0===e&&(e=1);var r=u(e,l());"number"!=typeof r&&console.error("delta has to be a number or function returning a number, got "+typeof r),n((function(n){return n+r}))},dec:function(e){void 0===e&&(e=1);var r=u(e,l());"number"!=typeof r&&console.error("delta has to be a number or function returning a number, got "+typeof r),n((function(n){return n-r}))},reset:function(e){void 0===e&&(e=a);var r=u(e,l());"number"!=typeof r&&console.error("value has to be a number or function returning a number, got "+typeof r),a=r,n(r)}}}),[a,r,e])]}},9518:(n,e,r)=>{r.d(e,{Z:()=>a});var t=r(7363),o=function(){},u="undefined"!=typeof window;const a=function(n,e,r){if(!u)return[e,o,o];if(!n)throw new Error("useLocalStorage key may not be falsy");var a=r?r.raw?function(n){return n}:r.deserializer:JSON.parse,i=(0,t.useRef)((function(n){try{var t=r?r.raw?String:r.serializer:JSON.stringify,o=localStorage.getItem(n);return null!==o?a(o):(e&&localStorage.setItem(n,t(e)),e)}catch(n){return e}})),c=(0,t.useState)((function(){return i.current(n)})),f=c[0],s=c[1];(0,t.useLayoutEffect)((function(){return s(i.current(n))}),[n]);var l=(0,t.useCallback)((function(e){try{var t="function"==typeof e?e(f):e;if(void 0===t)return;var o;o=r?r.raw?"string"==typeof t?t:JSON.stringify(t):r.serializer?r.serializer(t):JSON.stringify(t):JSON.stringify(t),localStorage.setItem(n,o),s(a(o))}catch(n){}}),[n,s]),m=(0,t.useCallback)((function(){try{localStorage.removeItem(n),s(void 0)}catch(n){}}),[n,s]);return[f,l,m]}},3295:(n,e,r)=>{r.d(e,{Z:()=>o});var t=r(7363);const o=function(n){void 0===n&&(n={});var e=(0,t.useState)(n),r=e[0],o=e[1];return[r,(0,t.useCallback)((function(n){o((function(e){return Object.assign({},e,n instanceof Function?n(e):n)}))}),[])]}},1178:(n,e,r)=>{r.d(e,{Z:()=>u});var t=r(7363),o=function(n,e){return"boolean"==typeof e?e:!n};const u=function(n){return(0,t.useReducer)(o,n)}}}]);
//# sourceMappingURL=react-use.js.map?version=3ec23372