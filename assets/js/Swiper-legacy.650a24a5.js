System.register(["./react-legacy.b3bc90c5.js","./react-slick-legacy.d6ab9305.js","./@tabler/icons-legacy.42c83e77.js","./qrcode.react-legacy.685a2ddb.js"],(function(e,r){"use strict";var t,i,o,l,c,a,s,n=document.createElement("style");return n.innerHTML=".ui_swiper{--swiper-pagination-color:var(--theme-color)}.ui_swiper .cover .typeTitle{border-top-left-radius:6px;bottom:0;color:#fff;position:absolute;right:0}.slick-dots li{height:auto;width:auto}.slick-dots li .customPaging{background-color:rgba(0,0,0,.1);border-radius:50%;height:6px;width:6px}.slick-dots li.slick-active .customPaging{background-color:var(--theme-color)}\n",document.head.appendChild(n),{setters:[e=>{t=e.r},e=>{i=e.c,o=e.S},e=>{l=e.L,c=e.C},e=>{a=e.j,s=e.a}],execute:function(){const r=t.exports.memo((({onClick:e,children:r,className:t})=>a("button",{type:"button",onClick:e,className:i("absolute inset-y-0 opacity-0 text-white bg-black bg-opacity-30 group-hover:opacity-100 z-10 w-8 h-8 flex-center rounded-full m-auto",t),children:r}))),n=t.exports.memo((({banner:e,children:r})=>s("a",{...e.url?{href:e.url}:{onClick:e=>e.preventDefault(),href:"#"},className:"block",children:[a("img",{loading:"lazy",className:"",style:{width:540,height:200},src:e.imageUrl,alt:"banner"}),a("div",{className:i("typeTitle px-3 py-2","blue"===e.titleColor?"bg-blue-500":"bg-red-600"),children:e.typeTitle})]}))),d=({onClick:e})=>a(r,{onClick:e,className:"left-1",children:a(l,{size:16})}),u=({onClick:e})=>a(r,{onClick:e,className:"right-1",children:a(c,{size:16})});e("S",t.exports.memo((({banners:e=[]})=>{const r=t.exports.useRef(null);return a("div",{className:"ui_swiper group",children:a(o,{className:"center",dots:!0,infinite:!0,centerMode:!0,adaptiveHeight:!0,draggable:!1,variableWidth:!0,speed:500,slidesToShow:1,slidesToScroll:1,pauseOnHover:!0,prevArrow:a(d,{}),nextArrow:a(u,{}),customPaging:e=>a("div",{className:"customPaging",onMouseEnter:()=>r.current.slickGoTo(e)}),ref:r,children:e.map(((e,r)=>a("div",{className:"cover overflow-hidden rounded-lg transition relative",children:a(n,{banner:e})},e.imageUrl)))})})})))}}}));
