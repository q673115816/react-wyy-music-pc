import{r as t}from"./react.23cc8478.js";import{a as B,L as d,R as V,c as w}from"./react-router-dom.1e37ceed.js";import{c as M}from"./react-slick.9a6761a2.js";import{G as _}from"./Home.034a7e3d.js";import{u as g}from"./useInfinite.10280005.js";import{i as L,ac as S}from"./index.89c01ead.js";import{a as u,j as r}from"./qrcode.react.5dc2fa92.js";import"./react-transition-group.2d7b5c33.js";import"./react-dom.c88e72d8.js";import"./lodash.d03d4659.js";import"./@tabler/icons.b7add604.js";import"./react-redux.9d317390.js";import"./immer.36a28300.js";import"./axios.96312ac8.js";import"./store.57d764e6.js";import"./react-use.a9b69494.js";const b=[["area","\u5730\u533A",["\u5168\u90E8","\u5185\u5730","\u6E2F\u53F0","\u6B27\u7F8E","\u97E9\u56FD","\u65E5\u672C"]],["type","\u7C7B\u578B",["\u5168\u90E8","\u5B98\u65B9\u7248","\u539F\u58F0","\u73B0\u573A\u7248","\u7F51\u6613\u51FA\u54C1"]],["order","\u6392\u5E8F",["\u4E0A\u5347\u6700\u5FEB","\u6700\u70ED","\u6700\u65B0"]]],o={area:"\u5168\u90E8",type:"\u5168\u90E8",order:"\u4E0A\u5347\u6700\u5FEB"},j=()=>{const{search:s}=B(),i=30,l=t.exports.useRef(0),p=new URLSearchParams(s),c=t.exports.useRef(null),n=t.exports.useRef(null);for(const[e,a]of p)o[e]=a;const[f,m]=L([]);return g(async()=>{try{const{data:e,code:a}=await S({...o,limit:i,offset:l.current});if(l.current+=i,a!==200)return;m(h=>{h.push(...e==null?void 0:e.map(({id:v,name:x,cover:E,playCount:N,duration:A,artists:F})=>({type:0,playCount:N,id:v,cover:E,duration:A,title:x,creator:F.map(({id:R,name:y})=>({userId:R,userName:y}))})))})}catch(e){console.log(e)}},c,n,[s]),t.exports.useEffect(()=>{m([]),l.current=0},[s]),u("div",{className:"domAllMV overflow-auto h-full",ref:c,children:[r("div",{className:"domAllMV_header ui_header",children:r(d,{to:"./",className:"h1 title",children:"\u5168\u90E8MV"})}),u("div",{className:"domAllMV_main px-8 flex-auto",children:[r("div",{className:"ui_filter",children:b.map(e=>u("div",{className:"row flex my-2.5",children:[u("div",{className:"name flex-none",children:[e[1],":"]}),r("div",{className:"list divide-x",children:e[2].map(a=>r("div",{className:"item flex-center",children:r(d,{to:`/mv-all?${new URLSearchParams({...o,[e[0]]:a})}`,className:M("btn rounded-full leading-5 px-3 whitespace-nowrap",a===o[e[0]]?"bg-red-50 text-red-500":"ui_text_gray_hover"),children:a})},a))})]},e[1]))}),r("div",{className:"py-1",children:r(_,{list:f})}),r("div",{ref:n})]})]})};var C=t.exports.memo(j);const D=()=>r(V,{children:r(w,{index:!0,element:r(C,{})})});var Z=D;export{Z as default};
