System.register(["./react-legacy.b3bc90c5.js","./react-router-dom-legacy.b2b146ac.js","./@tabler/icons-legacy.38e80a3f.js","./useInfinite-legacy.b5d5e5d0.js","./index-legacy.d8a4670e.js","./Resize-legacy.4f07c145.js","./qrcode.react-legacy.685a2ddb.js","./react-router-legacy.d596e264.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.4210a093.js","./immer-legacy.c24b5c0e.js","./redux-persist-legacy.76732867.js","./axios-legacy.6d9fa2e4.js","./classnames-legacy.82f93ed6.js","./rxjs-legacy.3f182ee1.js","./react-use-legacy.7a8b73b2.js","./react-transition-group-legacy.16b3096a.js","./color-legacy.6099eccf.js","./dayjs-legacy.7dd3aa6c.js"],(function(e,a){"use strict";var c,l,s,r,t,i,d,o,n,u,g,m;return{setters:[e=>{c=e.r},e=>{l=e.L},e=>{s=e.B},e=>{r=e.u},e=>{t=e.u,i=e.m,d=e.ao},e=>{o=e.R},e=>{n=e.j,u=e.a},e=>{g=e.h,m=e.i},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a=c.exports.memo((function(){const e=t(),{result:a,scrollTop:g}=i((({exclusive:e})=>e)),m=c.exports.useRef(0),f=c.exports.useRef(null),y=c.exports.useRef(null);return r((()=>{e(d({limit:60,offset:m.current})),m.current+=60}),f,y),n("div",{className:"overflow-auto p-8 h-full",ref:f,children:u("div",{className:"ui_w1100",children:[n("div",{className:"h1 pb-4",children:"独家放送"}),u(o,{className:"grid gap-5",small:"grid-cols-2",big:"grid-cols-3",children:[a.map((e=>u("div",{children:[u(l,{to:e.videoId?`/player/video/${e.videoId}`:`/player/mv/${e.id}`,className:"flex relative rounded border overflow-hidden",children:[n("img",{loading:"lazy",src:e.picUrl,className:"w-full h-full object-cover ui_aspect-ratio-24/9",alt:""}),n("span",{className:"ico absolute top-2 left-2 rounded-full text-white w-6 h-6 bg-black bg-opacity-40 flex-center border border-gray-200",children:n(s,{size:14,className:"fill-current"})})]}),n("div",{className:"mt-2",children:n(l,{to:`/player/mv/${e.id}`,className:"text-sm ui_text_black_hover",children:e.name})})]},e.picUrl))),n("div",{ref:y})]})]})})}));e("default",(()=>n(g,{children:n(m,{index:!0,element:n(a,{})})})))}}}));
