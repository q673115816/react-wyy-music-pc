!function(){function r(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==e)return;var n,o,c=[],u=!0,i=!1;try{for(e=e.call(r);!(u=(n=e.next()).done)&&(c.push(n.value),!t||c.length!==t);u=!0);}catch(a){i=!0,o=a}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return c}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return t(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}System.register(["./react-slick-legacy.19a80dc6.js","./react-legacy.672c49ac.js","./qrcode.react-legacy.bb7ea4de.js"],(function(t,e){"use strict";var n,o,c;return{setters:[function(r){n=r.c},function(r){o=r.r},function(r){c=r.j}],execute:function(){t("R",o.exports.memo((function(t){var e=t.children,u=t.className,i=void 0===u?"":u,a=t.small,l=void 0===a?"":a,s=t.big,f=void 0===s?"":s,y=o.exports.useRef(null),d=o.exports.useRef(null),m=r(o.exports.useState(0),2),v=m[0],b=m[1];return o.exports.useEffect((function(){return d.current=new ResizeObserver((function(r){r.forEach((function(r){var t=r.contentRect.width;b(t)}))})),d.current.observe(y.current),function(){d.current.disconnect()}}),[]),c("div",{className:n(i,v>=810?f:l),ref:y,children:e})})))}}}))}();
