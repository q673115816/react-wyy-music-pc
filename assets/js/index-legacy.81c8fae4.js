System.register(["./react-legacy.b3bc90c5.js","./react-router-dom-legacy.02c0d312.js","./index-legacy.c812e935.js","./useInfinite-legacy.b5d5e5d0.js","./qrcode.react-legacy.685a2ddb.js","./react-router-legacy.983234a4.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.c7a29beb.js","./immer-legacy.c24b5c0e.js","./redux-persist-legacy.aac0393a.js","./axios-legacy.c50ae73b.js","./@tabler/icons-legacy.6ebba052.js","./classnames-legacy.82f93ed6.js","./rxjs-legacy.0ab30007.js","./react-use-legacy.08b23a23.js","./react-transition-group-legacy.04c7c2c7.js","./color-legacy.6099eccf.js","./dayjs-legacy.7dd3aa6c.js","./history-legacy.13b73ead.js"],(function(e,a){"use strict";var c,s,r,t,l,d,i,n,o,u;return{setters:[e=>{c=e.r},e=>{s=e.L},e=>{r=e.L,t=e.O},e=>{l=e.u},e=>{d=e.a,i=e.j},e=>{n=e.e,o=e.R,u=e.f},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a=c.exports.memo((()=>{const{type:e,rid:a}=n(),[o,u]=c.exports.useState([]),y=c.exports.useRef(null),g=c.exports.useRef(null),m=c.exports.useRef(0);return c.exports.useEffect((()=>{u([]),m.current=0}),[a]),l((async()=>{try{const{djRadios:e}=await t({cateId:a,limit:40,offset:m.current});m.current+=40,u((a=>[...a,...e]))}catch(e){console.log(e)}}),y,g),d("div",{className:"overflow-auto h-full",ref:y,children:[i("div",{className:"ui_header h1",children:e}),i("div",{className:"grid grid-cols-2 gap-5 px-8",children:o.map((e=>d(s,{to:`/playlist/dj/${e.id}`,className:"flex",children:[i("div",{className:"w-32 rounded overflow-hidden border",children:i("img",{loading:"lazy",className:"aspect-square",src:`${e.picUrl}?param=200y200`,alt:""})}),d("div",{className:"flex-auto w-0 px-2 pt-8",children:[i("div",{className:"ui_text_black_hover text-sm",children:e.name}),i("div",{className:"text-gray-400 mt-4",children:e.rcmdtext}),d("div",{className:"text-gray-400 mt-2",children:["节目：",i("span",{children:e.programCount}),"，订阅：",i("span",{children:e.subCount})]})]})]},e.id)))}),i("div",{ref:g,className:"flex-center",children:i(r,{})})]})}));e("default",(()=>i(o,{children:i(u,{path:":type/:rid",element:i(a,{})})})))}}}));