!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,a,c=[],l=!0,o=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(c.push(r.value),!t||c.length!==t);l=!0);}catch(i){o=!0,a=i}finally{try{l||null==n.return||n.return()}finally{if(o)throw a}}return c}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./react-legacy.672c49ac.js","./react-router-dom-legacy.c19309a0.js","./react-slick-legacy.ee08380d.js","./qrcode.react-legacy.bb7ea4de.js","./lodash-legacy.4434829e.js","./react-transition-group-legacy.215f9ff9.js","./react-dom-legacy.038bc2ab.js"],(function(t,n){"use strict";var r,a,c,l,o,i,u,s;return{setters:[function(e){r=e.r},function(e){a=e.N,c=e.O,l=e.e,o=e.d},function(e){i=e.c},function(e){u=e.a,s=e.j},function(){},function(){},function(){}],execute:function(){var n=["已下载单曲","已下载电台节目","已下载MV","正在下载"],m=r.exports.memo((function(){return u("div",{className:"domManage flex-1 h-0",children:[s("div",{className:"text-sm flex gap-4 px-8",children:n.map((function(e){return s(a,{to:encodeURIComponent(e),className:function(e){var t=e.isActive;return i(t&&"ui_underline font-bold")},children:e},e)}))}),s("div",{className:"flex-1 px-8 overflow-auto",children:s(c,{})})]})})),d=[{path:"下载管理",Element:function(){return l([{path:"/*",element:s(m,{}),children:n.map((function(e){return{path:"".concat(encodeURIComponent(e),"/*"),element:s("div",{children:e})}}))},{index:!0,element:s(o,{to:n[0],replace:!0})}])}},{path:"本地音乐",Element:r.exports.memo((function(){var t=e(r.exports.useState(!1),2),n=t[0],a=t[1],c=r.exports.useCallback((function(){a(!n)}),[n]);return u("div",{className:"domManage",children:[u("div",{className:"px-8 flex",children:[s("span",{className:"text-sm",children:"本地共有0首歌曲"}),s("button",{type:"button",className:"ml-auto ui_link",onClick:c,children:"选择目录"})]}),s("div",{className:"px-8",children:u("div",{className:"flex flex-col pt-32 items-center",children:[s("div",{className:"text-xl font-bold",children:"请添加本地音乐"}),s("div",{className:"text-base mt-2",children:"升级本地音乐为高品质音乐并和好友分享！"}),s("button",{type:"button",className:"mt-4 px-4 py-2 text-white rounded-full text-sm ui_theme_bg_color",onClick:c,children:"选择本地音乐文件夹"})]})})]})}))}],f=r.exports.memo((function(){return u("div",{className:"flex flex-col h-full",children:[s("div",{className:"px-8 py-5 space-x-4 text-base",children:d.map((function(e){var t=e.path;return s(a,{to:encodeURIComponent(t),className:function(e){var t=e.isActive;return i(t&&"text-xl font-black ui_underline")},children:t},t)}))}),s(c,{})]})}));t("default",r.exports.memo((function(){return l([{path:"/*",element:s(f,{}),children:d.map((function(e){var t=e.path,n=e.Element;return{path:"".concat(encodeURIComponent(t),"/*"),element:s(n,{})}}))},{index:!0,element:s(o,{to:d[0].path,replace:!0})}])})))}}}))}();
