import{r as i}from"./react.0a2f695e.js";import{c as l,S as c}from"./react-slick.d01d63b2.js";import{R as n,U as m}from"./@tabler/icons.c94e1be8.js";import{j as e,a as d}from"./qrcode.react.84002e4a.js";const p=({onClick:s,children:t,className:r})=>e("button",{type:"button",onClick:s,className:l("absolute inset-y-0 opacity-0 text-white bg-black bg-opacity-30 group-hover:opacity-100 z-10 w-8 h-8 flex-center rounded-full m-auto",r),children:t}),a=i.exports.memo(p),u=({banner:s,children:t})=>d("a",{...s.url?{href:s.url}:{onClick:r=>r.preventDefault(),href:"#"},className:"block",children:[e("img",{loading:"lazy",className:"",style:{width:1080*.5,height:400*.5},src:s.imageUrl,alt:"banner"}),e("div",{className:l("typeTitle px-3 py-2",s.titleColor==="blue"?"bg-blue-500":"bg-red-600"),children:s.typeTitle})]}),g=i.exports.memo(u);const h=({onClick:s})=>e(a,{onClick:s,className:"left-1",children:e(n,{size:16})}),f=({onClick:s})=>e(a,{onClick:s,className:"right-1",children:e(m,{size:16})}),v=({banners:s=[]})=>{const t=i.exports.useRef(null);return e("div",{className:"ui_swiper group",children:e(c,{...{className:"center",dots:!0,infinite:!0,centerMode:!0,adaptiveHeight:!0,draggable:!1,variableWidth:!0,speed:500,slidesToShow:1,slidesToScroll:1,pauseOnHover:!0,prevArrow:e(h,{}),nextArrow:e(f,{}),customPaging:o=>e("div",{className:"customPaging",onMouseEnter:()=>t.current.slickGoTo(o)})},ref:t,children:s.map((o,w)=>e("div",{className:"cover overflow-hidden rounded-lg transition relative",children:e(g,{banner:o})},o.imageUrl))})})},S=i.exports.memo(v);export{S};
