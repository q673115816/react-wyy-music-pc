import{r}from"./react.4f2eb426.js";import{N as E,O as w,L as p,R as A,c as h,d as F}from"./react-router-dom.b907a3a9.js";import{a as t,j as e}from"./qrcode.react.d8dda151.js";import{c}from"./react-slick.a7487162.js";import{u as B}from"./useInfinite.cea0ff5d.js";import{G as b}from"./Home.82f28085.js";import{u as L,v as V,b3 as y,b4 as N,b5 as D,b6 as j,b7 as g,L as C,b8 as R,b9 as S,ba as I,bb as z}from"./index.3e068c77.js";import{b as f}from"./@tabler/icons.85b9b193.js";import{G}from"./index.ee974b45.js";import"./lodash.7c73e2e6.js";import"./react-transition-group.99d8e67f.js";import"./react-dom.fe9fde37.js";import"./MenuCreate.83f3ecea.js";import"./react-redux.64459660.js";import"./immer.98e49ab6.js";import"./axios.1ece621b.js";import"./store.e6a9b03b.js";import"./react-use.9c5a79ae.js";const $=[["\u89C6\u9891","/video/videolist"],["MV","/video/mvlist"]],O=r.exports.memo(()=>t("div",{className:"domVideoList flex flex-col h-full",children:[e("div",{className:"domVideoList_header ui_header text-base space-x-4",children:$.map(([i,s])=>e(E,{className:({isActive:a})=>a?"text-xl ui_underline font-bold":"",to:s,children:i},i))}),e(w,{})]}));const T=({id:i})=>{const s=L(),{groupList:a}=V(y);return t("div",{className:"group_select_box absolute top-100 p-5 bg-white overflow-auto shadow",children:[e("div",{className:"border-b pb-2",children:e("button",{type:"button",className:c("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",i===0?"text-red-500 bg-red-50":""),onClick:()=>s(N({id:0})),children:"\u5168\u90E8\u89C6\u9891"})}),e("div",{className:"group_select_list grid grid-cols-6 gap-y-5 p-4",children:a.map(l=>e("button",{type:"button",className:c("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",l.id===i?"text-red-500 bg-red-50":""),onClick:()=>s(N({id:l.id})),children:l.name},l.id))})]})},P=r.exports.memo(T),q=()=>{const i=L(),{id:s,initStatus:a,groupList:l,categoryList:x,videoList:v}=V(y),[u,_]=r.exports.useState(!1),m=r.exports.useMemo(()=>{var d;return((d=l.find(k=>k.id===Number(s)))==null?void 0:d.name)||"\u5168\u90E8\u89C6\u9891"},[s]),n=r.exports.useRef(null),o=r.exports.useRef(null);return B(()=>i(D(s)),n,o),r.exports.useEffect(()=>(i(j()),()=>{i(g())}),[]),r.exports.useEffect(()=>{i(g())},[s]),t("div",{className:"domVideoList_content px-8 overflow-auto flex-auto",ref:n,children:[t("div",{className:"video_sort_filter_bar flex items-center justify-between",children:[t("div",{className:"group_select_wrap relative z-10",children:[t("button",{type:"button",className:"group_select_button border rounded-full hover:bg-gray-100 text-sm",onClick:()=>_(!u),children:[m,">"]}),u&&e(P,{id:s})]}),e("div",{className:"recommend_nav divide-x flex",children:x.map(d=>e("div",{children:e("button",{type:"button",className:c("recommend_nav_link rounded-full px-2 mx-1",s===d.id?"bg-red-50 text-red-500":"ui_text_black_hover"),onClick:()=>i(N({id:d.id})),children:d.name})},d.id))})]}),t("div",{className:"my-4",children:[e(b,{list:v}),e("div",{ref:o,className:"flex-center",children:e(C,{})})]})]})},H=r.exports.memo(q),M=["\u5185\u5730","\u6E2F\u53F0","\u6B27\u7F8E","\u65E5\u672C","\u97E9\u56FD"],J=r.exports.memo(function(){const s=L(),{firstArea:a,topArea:l,first:x,hot:v,wy:u,top:_,timestamp:m}=V(R),n=r.exports.useMemo(()=>Date.now()-m>36e5,[m]);return r.exports.useEffect(()=>{n&&s(S({firstArea:a,topArea:l}))},[n]),n?e("div",{className:"w-full h-full flex-center",children:e(C,{})}):t("div",{className:"domVideoList_content px-8 overflow-auto max-h-full flex-auto",children:[t("div",{className:"domMVList_sublist",children:[t("div",{className:"domMVList_header mb-5 flex justify-between items-center",children:[t(p,{to:`/mv-all?order=\u6700\u65B0&area=${a}`,className:"domMVList_subLink font-bold text-base flex items-center",children:["\u6700\u65B0MV",e(f,{size:20})]}),e("div",{className:"recommend_nav flex divide-x space-x-1",children:M.map(o=>e("div",{className:"item",children:e("button",{onClick:()=>s(I(o)),type:"button",className:c("link rounded-full px-2.5",a===o?"text-red-500 bg-red-50":"ui_text_black_hover"),children:o})},o))})]}),e(b,{list:x})]}),t("div",{className:"domMVList_sublist",children:[e("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center",children:t(p,{to:"/mv-all?order=\u6700\u70ED",className:"domMVList_subLink font-bold text-base flex items-center",children:["\u70ED\u64ADMV",e(f,{size:20})]})}),e(b,{list:v})]}),t("div",{className:"domMVList_sublist",children:[e("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center",children:t(p,{to:"/mv-all?type=\u7F51\u6613\u51FA\u54C1&order=\u6700\u65B0",className:"domMVList_subLink font-bold text-base flex items-center",children:["\u7F51\u6613\u51FA\u54C1",e(f,{size:20})]})}),e(b,{list:u})]}),t("div",{className:"domMVList_header mt-8 mb-5 flex justify-between items-center",children:[t(p,{to:"/toplist-mv/",className:"domMVList_subLink font-bold text-base flex items-center",children:["MV\u6392\u884C\u699C",e(f,{size:20})]}),e("div",{className:"recommend_nav flex divide-x space-x-1",children:M.map(o=>e("div",{className:"item",children:e("button",{onClick:()=>s(z(o)),type:"button",className:c("link rounded-full px-2.5",l===o?"text-red-500 bg-red-50":"ui_text_black_hover"),children:o})},o))})]}),e(G,{list:_,schema:[["\u8BC4\u8BBA","\u64AD\u653E"],["\u6536\u85CF","\u5206\u4EAB","\u4E0B\u8F7DMV","\u590D\u5236\u94FE\u63A5"]]})]})}),K=()=>e(A,{children:t(h,{element:e(O,{}),children:[e(h,{path:"videolist",element:e(H,{})}),e(h,{path:"mvlist",element:e(J,{})}),e(h,{path:"*",element:e(F,{to:"videolist",replace:!0})})]})}),me=K;export{me as default};
