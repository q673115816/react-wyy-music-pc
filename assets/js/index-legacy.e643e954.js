System.register(["./react-legacy.b3bc90c5.js","./react-router-dom-legacy.dc65b224.js","./classnames-legacy.82f93ed6.js","./qrcode.react-legacy.685a2ddb.js","./react-router-legacy.33ca2ceb.js","./lodash-legacy.4434829e.js"],(function(e,l){"use strict";var t,a,c,s,n,o,d,i,r,m;return{setters:[e=>{t=e.r},e=>{a=e.N},e=>{c=e.a},e=>{s=e.a,n=e.j},e=>{o=e.O,d=e.i,i=e.N,r=e.g,m=e.h},()=>{}],execute:function(){const l=[["下载管理","Download"],["本地音乐","Local"]],x=t.exports.memo((()=>s("div",{className:"flex flex-col h-full",children:[n("div",{className:"px-8 py-5 space-x-4 text-base",children:l.map((([e,l])=>n(a,{to:l,className:({isActive:e})=>c(e&&"text-xl font-black ui_underline"),children:e},l)))}),n(o,{})]}))),p=["已下载单曲","已下载电台节目","已下载MV","正在下载"],h=t.exports.memo((()=>s("div",{className:"domManage flex-1 h-0",children:[n("div",{className:"text-sm flex gap-4 px-8",children:p.map((e=>n(a,{to:encodeURIComponent(e),className:({isActive:e})=>c(e&&"ui_underline font-bold"),children:e},e)))}),n("div",{className:"flex-1 px-8 overflow-auto",children:n(o,{})})]}))),u=()=>d([{path:"/*",element:n(h,{}),children:p.map((e=>({path:`${encodeURIComponent(e)}/*`,element:n("div",{children:e})})))},{index:!0,element:n(i,{to:p[0],replace:!0})}]),f=t.exports.memo((()=>{const[e,l]=t.exports.useState(!1),a=t.exports.useCallback((()=>{l(!e)}),[e]);return s("div",{className:"domManage",children:[s("div",{className:"px-8 flex",children:[n("span",{className:"text-sm",children:"本地共有0首歌曲"}),n("button",{type:"button",className:"ml-auto ui_link",onClick:a,children:"选择目录"})]}),n("div",{className:"px-8",children:s("div",{className:"flex flex-col pt-32 items-center",children:[n("div",{className:"text-xl font-bold",children:"请添加本地音乐"}),n("div",{className:"text-base mt-2",children:"升级本地音乐为高品质音乐并和好友分享！"}),n("button",{type:"button",className:"mt-4 px-4 py-2 text-white rounded-full text-sm ui_theme_bg_color",onClick:a,children:"选择本地音乐文件夹"})]})})]})}));e("default",t.exports.memo((()=>s(r,{children:[n(m,{index:!0,element:n(i,{to:"Download",replace:!0})}),s(m,{path:"/*",element:n(x,{}),children:[n(m,{path:"Download/*",element:n(u,{})}),n(m,{path:"Local/*",element:n(f,{})})]})]}))))}}}));
