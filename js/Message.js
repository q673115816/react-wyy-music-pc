"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[997],{9058:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var a=n(7363),r=n.n(a),l=n(6711),o=n(4184),c=n.n(o);function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=["已下载单曲","已下载电台节目","已下载MV","正在下载"];const s=(0,a.memo)((function(){console.log("download");var e=m((0,a.useState)(!1),2),t=e[0],n=e[1],l=m((0,a.useState)("已下载单曲"),2),o=l[0],u=l[1],s=(0,a.useCallback)((function(){n(!t)}),[]);return r().createElement("div",{className:"domManage"},r().createElement("div",{className:"domManage_main"},r().createElement("div",{className:"domManage_nav"},i.map((function(e){return r().createElement("button",{onClick:function(){return u(e)},key:e,className:c()("domManage_nav_link",{on:e===o}),type:"button"},e)}))),r().createElement("div",{className:"domManage_list overflow-auto max-h-full flex-auto"}),t&&r().createElement("div",{className:"domManage_dialog"},r().createElement("button",{type:"button",className:"close",onClick:s},"×"),r().createElement("div",{className:"title"},"选择本地音乐文件夹"),r().createElement("div",{className:"tips"},"将自动扫描您勾选的目录，文件增删实时同步。"),r().createElement("ul",null,r().createElement("li",null,r().createElement("span",{className:"checkbox"},r().createElement("input",{type:"text"}),r().createElement("i",{className:"material-icons"},"checkbox")),"暂时没法做")),r().createElement("div",{className:"actions"},r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red"},"确认"),r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"添加文件")))))}));var d=n(4837),f=n(4691);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var p=["歌曲","歌手","专辑","文件夹"],b=function(){var e,t,n=(0,d.T)(),l=(e=(0,a.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(e){c=!0,r=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=l[0],u=l[1],m=(0,d.C)((function(e){return e.local})).current,i=(0,a.useCallback)((function(){u(!o)}),[o]);return r().createElement("div",{className:"domManage"},r().createElement("div",{className:"domManage_header ui_header"},r().createElement("span",{className:"domManage_header_title h1"},"本地音乐"),r().createElement("span",{className:"domManage_header_total"},"共0首"),r().createElement("button",{type:"button",className:"domManage_header_selectFolder",onClick:i},"选择目录")),r().createElement("div",{className:"domManage_main"},r().createElement("div",{className:"domManage_nav"},p.map((function(e){return r().createElement("button",{onClick:function(){return n((0,f.setLocalCurrent)({current:e}))},key:e,className:c()("domManage_nav_link focus:outline-none",e===m&&"ui_underline font-bold"),type:"button"},e)}))),r().createElement("div",{className:"domManage_noFolder"},r().createElement("div",{className:"domManage_noFolder_title"},"请添加本地文件夹"),r().createElement("div",{className:"domManage_noFolder_tips"},"升级本地音乐为高品质音乐并和好友分享！"),r().createElement("button",{type:"button",className:"domManage_noFolder_button",onClick:i},"选择本地音乐文件夹")),r().createElement("div",{className:"domManage_dialog",style:{display:o?"":"none"}},r().createElement("button",{type:"button",className:"close",onClick:i},"×"),r().createElement("div",{className:"title"},"选择本地音乐文件夹"),r().createElement("div",{className:"tips"},"将自动扫描您勾选的目录，文件增删实时同步。"),r().createElement("ul",null,r().createElement("li",null,r().createElement("span",{className:"checkbox"},r().createElement("input",{type:"text"}),r().createElement("i",{className:"material-icons"},"checkbox")),"暂时没法做")),r().createElement("div",{className:"actions"},r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red"},"确认"),r().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"添加文件")))))},E=[{name:"下载管理",path:"download",Element:s},{name:"本地音乐",path:"local",Element:(0,a.memo)(b)}],v=function(){return r().createElement("div",null,r().createElement("div",{className:"px-8 py-5 space-x-4 text-base"},E.map((function(e){var t=e.path,n=e.name;return r().createElement(l.NavLink,{key:t,to:t,className:function(e){var t=e.isActive;return c()(t&&"text-xl font-black ui_underline")}},n)}))),r().createElement(l.Outlet,null))};const h=(0,a.memo)(v),N=function(){return r().createElement(l.Routes,null,r().createElement(l.Route,{element:r().createElement(h,null)},E.map((function(e){var t=e.path,n=e.Element;return r().createElement(l.Route,{path:t,key:t,element:r().createElement(n,null)})})),r().createElement(l.Route,{path:"*",element:r().createElement(l.Navigate,{to:"download"})})))}}}]);
//# sourceMappingURL=Message.js.map?version=57da8ce8