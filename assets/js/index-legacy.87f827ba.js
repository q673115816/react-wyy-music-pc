System.register(["./react-legacy.b3bc90c5.js","./react-router-dom-legacy.2933718f.js","./@tabler/icons-legacy.c07ea112.js","./useInfinite-legacy.b5d5e5d0.js","./index-legacy.860d7a31.js","./Resize-legacy.b5a4183f.js","./qrcode.react-legacy.685a2ddb.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.b70b910a.js","./immer-legacy.c38810dc.js","./axios-legacy.df2213c5.js","./react-slick-legacy.d6ab9305.js","./rxjs-legacy.3ac0136f.js","./react-use-legacy.dc7b42a0.js","./store-legacy.0145af8a.js","./react-transition-group-legacy.b5e58023.js"],(function(e,a){"use strict";var c,l,r,s,t,i,d,o,n,u,g,f;return{setters:[e=>{c=e.r},e=>{l=e.L,r=e.R,s=e.c},e=>{t=e.p},e=>{i=e.u},e=>{d=e.u,o=e.n,n=e.aq},e=>{u=e.R},e=>{g=e.j,f=e.a},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a=c.exports.memo((function(){const e=d(),{result:a,scrollTop:r}=o((({exclusive:e})=>e)),s=c.exports.useRef(0),m=c.exports.useRef(null),y=c.exports.useRef(null);return i((()=>{e(n({limit:60,offset:s.current})),s.current+=60}),m,y),g("div",{className:"overflow-auto p-8 h-full",ref:m,children:f("div",{className:"ui_w1100",children:[g("div",{className:"h1 pb-4",children:"独家放送"}),f(u,{className:"grid gap-5",small:"grid-cols-2",big:"grid-cols-3",children:[a.map((e=>f("div",{children:[f(l,{to:e.videoId?`/player/video/${e.videoId}`:`/player/mv/${e.id}`,className:"flex relative rounded border overflow-hidden",children:[g("img",{loading:"lazy",src:e.picUrl,className:"w-full h-full object-cover ui_aspect-ratio-24/9",alt:""}),g("span",{className:"ico absolute top-2 left-2 rounded-full text-white w-6 h-6 bg-black bg-opacity-40 flex-center border border-gray-200",children:g(t,{size:14,className:"fill-current"})})]}),g("div",{className:"mt-2",children:g(l,{to:`/player/mv/${e.id}`,className:"text-sm ui_text_black_hover",children:e.name})})]},e.picUrl))),g("div",{ref:y})]})]})})}));e("default",(()=>g(r,{children:g(s,{index:!0,element:g(a,{})})})))}}}));
