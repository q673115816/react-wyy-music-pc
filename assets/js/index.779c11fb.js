import{r as t}from"./react.23cc8478.js";import{b as f,L as h,R as x,c as v}from"./react-router-dom.1e37ceed.js";import{L as g,a0 as y}from"./index.89c01ead.js";import{u as N}from"./useInfinite.10280005.js";import{a,j as r}from"./qrcode.react.5dc2fa92.js";import"./react-transition-group.2d7b5c33.js";import"./react-dom.c88e72d8.js";import"./react-redux.9d317390.js";import"./immer.36a28300.js";import"./axios.96312ac8.js";import"./lodash.d03d4659.js";import"./store.57d764e6.js";import"./@tabler/icons.b7add604.js";import"./react-slick.9a6761a2.js";import"./react-use.a9b69494.js";const n=40,R=()=>{const{type:d,rid:o}=f(),[m,i]=t.exports.useState([]),c=t.exports.useRef(null),l=t.exports.useRef(null),s=t.exports.useRef(0),p=async()=>{try{const{djRadios:e}=await y({cateId:o,limit:n,offset:s.current});s.current+=n,i(u=>[...u,...e])}catch(e){console.log(e)}};return t.exports.useEffect(()=>{i([]),s.current=0},[o]),N(p,c,l),a("div",{className:"overflow-auto h-full",ref:c,children:[r("div",{className:"ui_header h1",children:d}),r("div",{className:"grid grid-cols-2 gap-5 px-8",children:m.map(e=>a(h,{to:`/playlist/dj/${e.id}`,className:"flex",children:[r("div",{className:"w-32 rounded overflow-hidden border",children:r("img",{loading:"lazy",className:"aspect-square",src:`${e.picUrl}?param=200y200`,alt:""})}),a("div",{className:"flex-auto w-0 px-2 pt-8",children:[r("div",{className:"ui_text_black_hover text-sm",children:e.name}),r("div",{className:"text-gray-400 mt-4",children:e.rcmdtext}),a("div",{className:"text-gray-400 mt-2",children:["\u8282\u76EE\uFF1A",r("span",{children:e.programCount}),"\uFF0C\u8BA2\u9605\uFF1A",r("span",{children:e.subCount})]})]})]},e.id))}),r("div",{ref:l,className:"flex-center",children:r(g,{})})]})};var j=t.exports.memo(R);const D=()=>r(x,{children:r(v,{path:":type/:rid",element:r(j,{})})});var B=D;export{B as default};
