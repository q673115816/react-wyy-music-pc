import{r}from"./react.4dc00a72.js";import{aF as u}from"./index.e019ec6f.js";import{G as c}from"./GridMVToplist.41ee86ae.js";import{a as o,j as t}from"./qrcode.react.9db161e8.js";import{R as n,c as l}from"./react-router-dom.c9f41bfe.js";import"./lodash.7c73e2e6.js";import"./react-dom.21c65b93.js";import"./react-redux.8c90b9d0.js";import"./immer.9a3c9cc9.js";import"./axios.1ece621b.js";import"./store.4dc8c578.js";import"./@tabler/icons.f4e7e1e5.js";import"./react-slick.7d904bce.js";import"./react-transition-group.249745a6.js";import"./react-use.b2910bcc.js";const m=["\u5185\u5730","\u6E2F\u53F0","\u6B27\u7F8E","\u65E5\u672C","\u97E9\u56FD"],p=r.exports.memo(function(){const[s,a]=r.exports.useState();r.exports.useState();const i=async()=>{try{const{data:e}=await u({limit:50});a(e)}catch(e){console.log(e)}};return r.exports.useEffect(()=>{i()},[]),o("div",{className:"h-full overflow-auto px-8 py-5",children:[o("div",{className:"header",children:[t("span",{className:"ui_text_black_hover cursor-pointer h1",children:"MV\u6392\u884C\u699C"}),o("div",{className:"flex py-4 items-center",children:[o("span",{className:"text-gray-400 flex items-center",children:["\u6700\u8FD1\u66F4\u65B0\uFF1A",t("span",{className:"border rounded-full w-4 h-4 flex-center",children:"?"})]}),t("div",{className:"ml-auto",children:m.map(e=>t("button",{type:"button",className:"ui_text_gray_hover",children:e},e))})]})]}),t(c,{list:s})]})}),d=()=>t(n,{children:t(l,{index:!0,element:t(p,{})})}),w=d;export{w as default};
