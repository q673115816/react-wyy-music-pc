import{r as a}from"./react.0a2f695e.js";import{a as B,L as d,R as V,c as w}from"./react-router-dom.8e5277d6.js";import{c as M}from"./react-slick.d01d63b2.js";import{G as _}from"./Home.fe4fe654.js";import{u as g}from"./useInfinite.22451543.js";import{i as L,aH as S}from"./index.3575e920.js";import{a as o,j as r}from"./qrcode.react.84002e4a.js";import"./lodash.f41ef0b4.js";import"./@tabler/icons.cf3d4071.js";import"./react-dom.d348259d.js";import"./react-redux.53cbeeec.js";import"./immer.9a3c9cc9.js";import"./axios.556b107a.js";import"./rxjs.10173dca.js";import"./react-use.4cc61ccc.js";import"./react-transition-group.7648cfe3.js";const b=[["area","\u5730\u533A",["\u5168\u90E8","\u5185\u5730","\u6E2F\u53F0","\u6B27\u7F8E","\u97E9\u56FD","\u65E5\u672C"]],["type","\u7C7B\u578B",["\u5168\u90E8","\u5B98\u65B9\u7248","\u539F\u58F0","\u73B0\u573A\u7248","\u7F51\u6613\u51FA\u54C1"]],["order","\u6392\u5E8F",["\u4E0A\u5347\u6700\u5FEB","\u6700\u70ED","\u6700\u65B0"]]],s={area:"\u5168\u90E8",type:"\u5168\u90E8",order:"\u4E0A\u5347\u6700\u5FEB"},j=()=>{const{search:u}=B(),i=30,l=a.exports.useRef(0),p=new URLSearchParams(u),c=a.exports.useRef(null),n=a.exports.useRef(null);for(const[e,t]of p)s[e]=t;const[f,m]=L([]);return g(async()=>{try{const{data:e,code:t}=await S({...s,limit:i,offset:l.current});if(l.current+=i,t!==200)return;m(h=>{h.push(...e==null?void 0:e.map(({id:x,name:v,cover:E,playCount:N,duration:A,artists:F})=>({type:0,playCount:N,id:x,cover:E,duration:A,title:v,creator:F.map(({id:R,name:y})=>({userId:R,userName:y}))})))})}catch(e){console.log(e)}},c,n,[u]),a.exports.useEffect(()=>{m([]),l.current=0},[u]),o("div",{className:"domAllMV overflow-auto h-full",ref:c,children:[r("div",{className:"domAllMV_header ui_header",children:r(d,{to:"./",className:"h1 title",children:"\u5168\u90E8MV"})}),o("div",{className:"domAllMV_main px-8 flex-auto",children:[r("div",{className:"ui_filter",children:b.map(e=>o("div",{className:"row flex my-2.5",children:[o("div",{className:"name flex-none",children:[e[1],":"]}),r("div",{className:"list divide-x",children:e[2].map(t=>r("div",{className:"item flex-center",children:r(d,{to:`/mv-all?${new URLSearchParams({...s,[e[0]]:t})}`,className:M("btn rounded-full leading-5 px-3 whitespace-nowrap",t===s[e[0]]?"bg-red-50 text-red-500":"ui_text_gray_hover"),children:t})},t))})]},e[1]))}),r("div",{className:"py-1",children:r(_,{list:f})}),r("div",{ref:n})]})]})},C=a.exports.memo(j),D=()=>r(V,{children:r(w,{index:!0,element:r(C,{})})}),Z=D;export{Z as default};
