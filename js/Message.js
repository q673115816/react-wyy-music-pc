"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[997],{7871:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(7363),a=n.n(r),l=n(6711),i=n(3849),o=n.n(i),c=n(3683);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=["已下载单曲","已下载电台节目","已下载MV","正在下载"],s=[{width:600,height:600,originUrl:"https://cdn.jsdelivr.net/gh/q673115816/cdn/image/奥特之父.jpg"},{width:600,height:600,originUrl:"https://cdn.jsdelivr.net/gh/q673115816/cdn/image/佐菲.jpg"},{width:600,height:600,originUrl:"https://cdn.jsdelivr.net/gh/q673115816/cdn/image/奥特之母.jpg"},{width:600,height:600,originUrl:"https://cdn.jsdelivr.net/gh/q673115816/cdn/image/奥特曼.jpg"},{width:640,height:640,originUrl:"https://cdn.jsdelivr.net/gh/q673115816/cdn/image/巴尔坦星人.jpg"},{width:600,height:600,originUrl:"https://cdn.jsdelivr.net/gh/q673115816/cdn/image/杰克奥特曼.jpg"},{width:600,height:600,originUrl:"https://cdn.jsdelivr.net/gh/q673115816/cdn/image/艾斯奥特曼.jpg"},{width:600,height:600,originUrl:"https://cdn.jsdelivr.net/gh/q673115816/cdn/image/泰罗奥特曼.jpg"},{width:600,height:600,originUrl:"https://cdn.jsdelivr.net/gh/q673115816/cdn/image/雷欧奥特曼.jpg"}];const d=(0,r.memo)((function(){console.log("download");var e,t,n=(e=(0,r.useState)("已下载单曲"),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=n[0],i=n[1];return a().createElement("div",{className:"domManage flex-1 h-0"},a().createElement("div",{className:"text-sm flex gap-4 px-8"},m.map((function(e){return a().createElement("button",{onClick:function(){return i(e)},key:e,className:o()(e===l&&"ui_underline font-bold"),type:"button"},e)}))),a().createElement("div",{className:"flex-1 px-8 overflow-auto"},a().createElement(c.Z,{srcList:s})))}));var h=n(8750),g=n(3762);function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=["歌曲","歌手","专辑","文件夹"],v=function(){var e,t,n=(0,h.T)(),l=(e=(0,r.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);i=!0);}catch(e){o=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=l[0],c=l[1],u=(0,h.C)((function(e){return e.local})).current,m=(0,r.useCallback)((function(){c(!i)}),[i]);return a().createElement("div",{className:"domManage"},a().createElement("div",{className:"ui_header"},a().createElement("span",{className:"h1"},"本地音乐"),a().createElement("span",{className:"text-gray-400 text-base ml-5"},"共0首"),a().createElement("button",{type:"button",className:"ml-auto ui_link",onClick:m},"选择目录")),a().createElement("div",{className:"px-8"},a().createElement("div",{className:"text-sm flex gap-4"},f.map((function(e){return a().createElement("button",{onClick:function(){return n((0,g.setLocalCurrent)({current:e}))},key:e,className:o()(e===u&&"ui_underline font-bold"),type:"button"},e)}))),a().createElement("div",{className:"flex flex-col pt-32 items-center"},a().createElement("div",{className:"text-2xl font-bold"},"请添加本地文件夹"),a().createElement("div",{className:"text-lg mt-4"},"升级本地音乐为高品质音乐并和好友分享！"),a().createElement("button",{type:"button",className:"mt-4 px-4 py-2 text-white rounded-full text-base ui_theme_bg_color",onClick:m},"选择本地音乐文件夹"))))},y=[{name:"下载管理",path:"download",Element:d},{name:"本地音乐",path:"local",Element:(0,r.memo)(v)}],b=function(){return a().createElement("div",{className:"flex flex-col h-full"},a().createElement("div",{className:"px-8 py-5 space-x-4 text-base"},y.map((function(e){var t=e.path,n=e.name;return a().createElement(l.NavLink,{key:t,to:t,className:function(e){var t=e.isActive;return o()(t&&"text-xl font-black ui_underline")}},n)}))),a().createElement(l.Outlet,null))};const E=(0,r.memo)(b),w=function(){return a().createElement(l.Routes,null,a().createElement(l.Route,{element:a().createElement(E,null)},y.map((function(e){var t=e.path,n=e.Element;return a().createElement(l.Route,{path:t,key:t,element:a().createElement(n,null)})})),a().createElement(l.Route,{path:"*",element:a().createElement(l.Navigate,{to:"download"})})))}}}]);
//# sourceMappingURL=Message.js.map?version=a6821dd1