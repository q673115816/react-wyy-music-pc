"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[2942],{64255:(e,t,a)=>{a.r(t);var l=a(29604);Object.defineProperty(t,"__esModule",{value:!0});var n=a(63038),u=(0,l.Z)(n);a(21249);var c=a(87363),s=(0,l.Z)(c),d=a(94184),m=(0,l.Z)(d),r=["已下载单曲","已下载电台节目","已下载MV","正在下载"];exports.default=(0,c.memo)((function(){console.log("download");var e=(0,c.useState)(!1),t=(0,u.default)(e,2),a=t[0],l=t[1],n=(0,c.useState)("已下载单曲"),d=(0,u.default)(n,2),o=d[0],i=d[1],f=(0,c.useCallback)((function(){l(!a)}),[]);return s.default.createElement("div",{className:"domManage"},s.default.createElement("div",{className:"domManage_main"},s.default.createElement("div",{className:"domManage_nav"},r.map((function(e){return s.default.createElement("button",{onClick:function(){return i(e)},key:e,className:(0,m.default)("domManage_nav_link",{on:e===o}),type:"button"},e)}))),s.default.createElement("div",{className:"domManage_list overflow-auto max-h-full flex-auto"}),a&&s.default.createElement("div",{className:"domManage_dialog"},s.default.createElement("button",{type:"button",className:"close",onClick:f},"×"),s.default.createElement("div",{className:"title"},"选择本地音乐文件夹"),s.default.createElement("div",{className:"tips"},"将自动扫描您勾选的目录，文件增删实时同步。"),s.default.createElement("ul",null,s.default.createElement("li",null,s.default.createElement("span",{className:"checkbox"},s.default.createElement("input",{type:"text"}),s.default.createElement("i",{className:"material-icons"},"checkbox")),"暂时没法做")),s.default.createElement("div",{className:"actions"},s.default.createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red"},"确认"),s.default.createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"添加文件")))))}))}}]);