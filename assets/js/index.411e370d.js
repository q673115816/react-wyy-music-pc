import{r as o}from"./react.0a2f695e.js";import{aI as u}from"./index.3575e920.js";import{G as c}from"./GridMVToplist.d3e8ad77.js";import{a as r,j as t}from"./qrcode.react.84002e4a.js";import{R as n,c as l}from"./react-router-dom.8e5277d6.js";import"./lodash.f41ef0b4.js";import"./react-dom.d348259d.js";import"./react-redux.53cbeeec.js";import"./immer.9a3c9cc9.js";import"./axios.556b107a.js";import"./@tabler/icons.cf3d4071.js";import"./react-slick.d01d63b2.js";import"./rxjs.10173dca.js";import"./react-use.4cc61ccc.js";import"./react-transition-group.7648cfe3.js";const m=["\u5185\u5730","\u6E2F\u53F0","\u6B27\u7F8E","\u65E5\u672C","\u97E9\u56FD"],p=()=>{const[s,a]=o.exports.useState();o.exports.useState();const i=async()=>{try{const{data:e}=await u({limit:50});a(e)}catch(e){console.log(e)}};return o.exports.useEffect(()=>{i()},[]),r("div",{className:"h-full overflow-auto px-8 py-5",children:[r("div",{className:"header",children:[t("span",{className:"ui_text_black_hover cursor-pointer h1",children:"MV\u6392\u884C\u699C"}),r("div",{className:"flex py-4 items-center",children:[r("span",{className:"text-gray-400 flex items-center",children:["\u6700\u8FD1\u66F4\u65B0\uFF1A",t("span",{className:"border rounded-full w-4 h-4 flex-center",children:"?"})]}),t("div",{className:"ml-auto",children:m.map(e=>t("button",{type:"button",className:"ui_text_gray_hover",children:e},e))})]})]}),t(c,{list:s})]})},d=o.exports.memo(p),h=()=>t(n,{children:t(l,{index:!0,element:t(d,{})})}),w=h;export{w as default};
