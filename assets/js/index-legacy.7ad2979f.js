System.register(["./react-legacy.b3bc90c5.js","./react-router-dom-legacy.2933718f.js","./index-legacy.1089c68a.js","./useInfinite-legacy.b5d5e5d0.js","./qrcode.react-legacy.685a2ddb.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.b70b910a.js","./immer-legacy.c38810dc.js","./axios-legacy.6d9fa2e4.js","./@tabler/icons-legacy.42c83e77.js","./react-slick-legacy.d6ab9305.js","./rxjs-legacy.7d2f3ae5.js","./react-use-legacy.78116f18.js","./react-transition-group-legacy.b5e58023.js"],(function(e,a){"use strict";var c,s,r,t,l,d,i,n,o,u;return{setters:[e=>{c=e.r},e=>{s=e.b,r=e.L,t=e.R,l=e.c},e=>{d=e.L,i=e.Q},e=>{n=e.u},e=>{o=e.a,u=e.j},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a=c.exports.memo((()=>{const{type:e,rid:a}=s(),[t,l]=c.exports.useState([]),m=c.exports.useRef(null),g=c.exports.useRef(null),y=c.exports.useRef(0);return c.exports.useEffect((()=>{l([]),y.current=0}),[a]),n((async()=>{try{const{djRadios:e}=await i({cateId:a,limit:40,offset:y.current});y.current+=40,l((a=>[...a,...e]))}catch(e){console.log(e)}}),m,g),o("div",{className:"overflow-auto h-full",ref:m,children:[u("div",{className:"ui_header h1",children:e}),u("div",{className:"grid grid-cols-2 gap-5 px-8",children:t.map((e=>o(r,{to:`/playlist/dj/${e.id}`,className:"flex",children:[u("div",{className:"w-32 rounded overflow-hidden border",children:u("img",{loading:"lazy",className:"aspect-square",src:`${e.picUrl}?param=200y200`,alt:""})}),o("div",{className:"flex-auto w-0 px-2 pt-8",children:[u("div",{className:"ui_text_black_hover text-sm",children:e.name}),u("div",{className:"text-gray-400 mt-4",children:e.rcmdtext}),o("div",{className:"text-gray-400 mt-2",children:["节目：",u("span",{children:e.programCount}),"，订阅：",u("span",{children:e.subCount})]})]})]},e.id)))}),u("div",{ref:g,className:"flex-center",children:u(d,{})})]})}));e("default",(()=>u(t,{children:u(l,{path:":type/:rid",element:u(a,{})})})))}}}));
