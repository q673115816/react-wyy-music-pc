import{r as t}from"./react.0a2f695e.js";import{b as f,L as h,R as x,c as v}from"./react-router-dom.8e5277d6.js";import{L as g,Q as y}from"./index.3575e920.js";import{u as N}from"./useInfinite.22451543.js";import{a as s,j as e}from"./qrcode.react.84002e4a.js";import"./lodash.f41ef0b4.js";import"./react-dom.d348259d.js";import"./react-redux.53cbeeec.js";import"./immer.9a3c9cc9.js";import"./axios.556b107a.js";import"./@tabler/icons.cf3d4071.js";import"./react-slick.d01d63b2.js";import"./rxjs.10173dca.js";import"./react-use.4cc61ccc.js";import"./react-transition-group.7648cfe3.js";const n=40,R=()=>{const{type:d,rid:o}=f(),[m,c]=t.exports.useState([]),i=t.exports.useRef(null),l=t.exports.useRef(null),a=t.exports.useRef(0),p=async()=>{try{const{djRadios:r}=await y({cateId:o,limit:n,offset:a.current});a.current+=n,c(u=>[...u,...r])}catch(r){console.log(r)}};return t.exports.useEffect(()=>{c([]),a.current=0},[o]),N(p,i,l),s("div",{className:"overflow-auto h-full",ref:i,children:[e("div",{className:"ui_header h1",children:d}),e("div",{className:"grid grid-cols-2 gap-5 px-8",children:m.map(r=>s(h,{to:`/playlist/dj/${r.id}`,className:"flex",children:[e("div",{className:"w-32 rounded overflow-hidden border",children:e("img",{loading:"lazy",className:"aspect-square",src:`${r.picUrl}?param=200y200`,alt:""})}),s("div",{className:"flex-auto w-0 px-2 pt-8",children:[e("div",{className:"ui_text_black_hover text-sm",children:r.name}),e("div",{className:"text-gray-400 mt-4",children:r.rcmdtext}),s("div",{className:"text-gray-400 mt-2",children:["\u8282\u76EE\uFF1A",e("span",{children:r.programCount}),"\uFF0C\u8BA2\u9605\uFF1A",e("span",{children:r.subCount})]})]})]},r.id))}),e("div",{ref:l,className:"flex-center",children:e(g,{})})]})},j=t.exports.memo(R),D=()=>e(x,{children:e(v,{path:":type/:rid",element:e(j,{})})}),B=D;export{B as default};
