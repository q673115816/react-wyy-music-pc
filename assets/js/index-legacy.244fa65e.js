System.register(["./react-legacy.b3bc90c5.js","./index-legacy.d6ac6f98.js","./GridMVToplist-legacy.cefab6ae.js","./qrcode.react-legacy.685a2ddb.js","./react-router-legacy.33ca2ceb.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.c7a29beb.js","./immer-legacy.c24b5c0e.js","./react-router-dom-legacy.dc65b224.js","./redux-persist-legacy.af414400.js","./axios-legacy.6d9fa2e4.js","./@tabler/icons-legacy.70165014.js","./classnames-legacy.82f93ed6.js","./rxjs-legacy.4711c62e.js","./react-use-legacy.597098f4.js","./react-transition-group-legacy.16b3096a.js","./color-legacy.6099eccf.js","./dayjs-legacy.7dd3aa6c.js"],(function(e,a){"use strict";var c,s,t,r,l,o,d;return{setters:[e=>{c=e.r},e=>{s=e.aF},e=>{t=e.G},e=>{r=e.a,l=e.j},e=>{o=e.g,d=e.h},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a=["内地","港台","欧美","日本","韩国"],n=c.exports.memo((()=>{const[e,o]=c.exports.useState();return c.exports.useState(),c.exports.useEffect((()=>{(async()=>{try{const{data:e}=await s({limit:50});o(e)}catch(e){console.log(e)}})()}),[]),r("div",{className:"h-full overflow-auto px-8 py-5",children:[r("div",{className:"header",children:[l("span",{className:"ui_text_black_hover cursor-pointer h1",children:"MV排行榜"}),r("div",{className:"flex py-4 items-center",children:[r("span",{className:"text-gray-400 flex items-center",children:["最近更新：",l("span",{className:"border rounded-full w-4 h-4 flex-center",children:"?"})]}),l("div",{className:"ml-auto",children:a.map((e=>l("button",{type:"button",className:"ui_text_gray_hover",children:e},e)))})]})]}),l(t,{list:e})]})}));e("default",(()=>l(o,{children:l(d,{index:!0,element:l(n,{})})})))}}}));
