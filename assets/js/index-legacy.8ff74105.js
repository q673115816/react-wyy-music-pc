System.register(["./react-legacy.b3bc90c5.js","./react-router-dom-legacy.2933718f.js","./react-slick-legacy.d6ab9305.js","./@tabler/icons-legacy.42c83e77.js","./Swiper-legacy.650a24a5.js","./index-legacy.1089c68a.js","./qrcode.react-legacy.685a2ddb.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.b70b910a.js","./immer-legacy.c38810dc.js","./axios-legacy.6d9fa2e4.js","./rxjs-legacy.7d2f3ae5.js","./react-use-legacy.78116f18.js","./react-transition-group-legacy.b5e58023.js"],(function(e,a){"use strict";var t,l,c,i,d,s,r,o,n,m,h,g,u,f,x,b,v,y=document.createElement("style");return y.innerHTML="._banner_8jbla_1{width:calc(var(--rightwidth) - var(--contentpadding)*2)}\n",document.head.appendChild(y),{setters:[e=>{t=e.r},e=>{l=e.L,c=e.R,i=e.c},e=>{d=e.S},e=>{s=e.am,r=e.L,o=e.C},e=>{n=e.S},e=>{m=e.S,h=e.U,g=e.V,u=e.W,f=e.X,x=e.L},e=>{b=e.a,v=e.j},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a="_banner_8jbla_1",y=t.exports.memo((({item:e={}})=>b("div",{className:"item",children:[v("div",{className:"cover relative rounded border overflow-hidden",children:b(l,{to:`/playlist/dj/${e.id}`,children:[v("img",{loading:"lazy",className:"w-full h-full aspect-square object-fit",src:e.picUrl,alt:""}),v("div",{className:"absolute bottom-0 left-0 right-0 h-1/4 ui_linear_mask_bottom"}),v("div",{className:"absolute left-0 bottom-0 max-w-full px-2 py-1 text-white truncate",children:e.name})]})}),v("div",{className:"footer mt-2 text-sm",children:v(l,{to:`/playlist/dj/${e.id}`,className:"text-gray-600 hover:text-black",children:e.rcmdtext})})]}))),p=({onClick:e})=>v("button",{type:"button",onClick:e,className:"absolute right-full inset-y-0 z-10 w-8 h-8 flex-center text-gray-500 m-auto",children:v(r,{size:30,stroke:1})}),j=({onClick:e})=>v("button",{type:"button",onClick:e,className:"absolute left-full inset-y-0 z-10 w-8 h-8 flex-center text-gray-500 m-auto",children:v(o,{size:30,stroke:1})}),N=({catelist:e=[]})=>v("div",{className:"px-10 mt-9",children:b(d,{speed:500,infinite:!1,slidesToShow:8,slidesToScroll:8,draggable:!1,prevArrow:v(p,{}),nextArrow:v(j,{}),children:[v(l,{to:"/TopList",children:b("div",{className:"flex flex-col items-center",children:[v("div",{className:"rounded-full w-12 h-12 flex-center bg-red-50 hover:bg-red-100 ui_themeColor",children:v(s,{stroke:1})}),v("div",{className:"text-gray-500 mt-2",children:"排行榜"})]})}),e.map((e=>v(l,{to:`/dj-category/${e.name}/${e.id}`,children:b("div",{className:"flex flex-col items-center",children:[v("div",{className:"rounded-full w-12 h-12 flex-center bg-red-50 hover:bg-red-100 ui_themeColor",children:v("img",{className:"w-8 h-8",src:e.pic56x56Url,alt:""})}),v("div",{className:"text-gray-500 mt-2",children:e.name})]})},e.id)))]})}),w=["创作翻唱","声之剧场","音乐故事","情感调频","声音恋人"],_=t.exports.memo((()=>{const{data:e,isLoading:t}=m();h();const{data:c}=g(),{data:i}=u(),{data:d}=f({cateId:2001,limit:6}),{data:s}=f({cateId:10001,limit:6}),{data:r}=f({cateId:2,limit:6}),{data:o}=f({cateId:3,limit:6}),{data:p}=f({cateId:3001,limit:6}),j=e?.data||[],_=c?.categories||[],k=i?.data||[],C={"创作翻唱":d?.djRadios||[],"声之剧场":s?.djRadios||[],"音乐故事":r?.djRadios||[],"情感调频":o?.djRadios||[],"声音恋人":p?.djRadios||[]};return v("div",t?{className:"flex-center w-full h-full",children:v(x,{})}:{className:"px-8 overflow-auto max-h-full flex-auto",children:b("div",{className:"pb-16 ui_w1100",children:[v("div",{className:a,children:j.length>0&&v(n,{list:j,coverSrc:"pic"})}),v(N,{catelist:_}),b("div",{className:"space-y-8 mt-8",children:[b("div",{children:[v("div",{className:"h1",children:"电台个性推荐"}),v("div",{className:"mt-4 grid grid-cols-5 gap-5",children:k.slice(0,5).map((e=>v(y,{item:e},e.id)))})]}),w.map((e=>b("div",{children:[b(l,{className:"h1",to:`/dj-category/${e}`,children:[e,">"]}),v("div",{className:"mt-4 grid grid-cols-5 gap-5",children:C?.[e].slice(0,5).map((e=>v(y,{item:e},e.id)))})]},e)))]})]})})}));e("default",t.exports.memo((()=>v(c,{children:v(i,{index:!0,element:v(_,{})})}))))}}}));
