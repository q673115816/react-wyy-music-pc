System.register(["./react-legacy.b3bc90c5.js","./react-router-dom-legacy.b2b146ac.js","./classnames-legacy.82f93ed6.js","./qrcode.react-legacy.685a2ddb.js","./react-router-legacy.d596e264.js","./lodash-legacy.4434829e.js"],(function(e,t){"use strict";var l,a,c,n,s,o,m,d;return{setters:[e=>{l=e.r},e=>{a=e.N},e=>{c=e.a},e=>{n=e.a,s=e.j},e=>{o=e.O,m=e.j,d=e.N},()=>{}],execute:function(){const t=["已下载单曲","已下载电台节目","已下载MV","正在下载"],i=l.exports.memo((()=>n("div",{className:"domManage flex-1 h-0",children:[s("div",{className:"text-sm flex gap-4 px-8",children:t.map((e=>s(a,{to:encodeURIComponent(e),className:({isActive:e})=>c(e&&"ui_underline font-bold"),children:e},e)))}),s("div",{className:"flex-1 px-8 overflow-auto",children:s(o,{})})]}))),r=[{path:"下载管理",Element:()=>m([{path:"/*",element:s(i,{}),children:t.map((e=>({path:`${encodeURIComponent(e)}/*`,element:s("div",{children:e})})))},{index:!0,element:s(d,{to:t[0],replace:!0})}])},{path:"本地音乐",Element:l.exports.memo((()=>{const[e,t]=l.exports.useState(!1),a=l.exports.useCallback((()=>{t(!e)}),[e]);return n("div",{className:"domManage",children:[n("div",{className:"px-8 flex",children:[s("span",{className:"text-sm",children:"本地共有0首歌曲"}),s("button",{type:"button",className:"ml-auto ui_link",onClick:a,children:"选择目录"})]}),s("div",{className:"px-8",children:n("div",{className:"flex flex-col pt-32 items-center",children:[s("div",{className:"text-xl font-bold",children:"请添加本地音乐"}),s("div",{className:"text-base mt-2",children:"升级本地音乐为高品质音乐并和好友分享！"}),s("button",{type:"button",className:"mt-4 px-4 py-2 text-white rounded-full text-sm ui_theme_bg_color",onClick:a,children:"选择本地音乐文件夹"})]})})]})}))}],p=l.exports.memo((()=>n("div",{className:"flex flex-col h-full",children:[s("div",{className:"px-8 py-5 space-x-4 text-base",children:r.map((({path:e})=>s(a,{to:encodeURIComponent(e),className:({isActive:e})=>c(e&&"text-xl font-black ui_underline"),children:e},e)))}),s(o,{})]})));e("default",l.exports.memo((()=>m([{path:"/*",element:s(p,{}),children:r.map((({path:e,Element:t})=>({path:`${encodeURIComponent(e)}/*`,element:s(t,{})})))},{index:!0,element:s(d,{to:r[0].path,replace:!0})}]))))}}}));