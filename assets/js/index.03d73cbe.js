import{r as o}from"./react.0a2f695e.js";import{aF as m}from"./index.a14e8238.js";import{G as u}from"./GridMVToplist.2e5ae829.js";import{a as r,j as t}from"./qrcode.react.84002e4a.js";import{h as p,i as c}from"./react-router.8807b3c5.js";import"./lodash.f41ef0b4.js";import"./react-dom.d348259d.js";import"./react-redux.7ec13431.js";import"./immer.76e704b2.js";import"./react-router-dom.e3e78f4f.js";import"./redux-persist.c3a378af.js";import"./axios.556b107a.js";import"./@tabler/icons.cc549a81.js";import"./classnames.9558900f.js";import"./rxjs.6644997a.js";import"./react-use.cc42aba6.js";import"./react-transition-group.5a807b1e.js";import"./color.a5f8aeb5.js";import"./dayjs.6fdda85a.js";const n=["\u5185\u5730","\u6E2F\u53F0","\u6B27\u7F8E","\u65E5\u672C","\u97E9\u56FD"],l=()=>{const[s,a]=o.exports.useState();o.exports.useState();const i=async()=>{try{const{data:e}=await m({limit:50});a(e)}catch(e){console.log(e)}};return o.exports.useEffect(()=>{i()},[]),r("div",{className:"h-full overflow-auto px-8 py-5",children:[r("div",{className:"header",children:[t("span",{className:"ui_text_black_hover cursor-pointer h1",children:"MV\u6392\u884C\u699C"}),r("div",{className:"flex py-4 items-center",children:[r("span",{className:"text-gray-400 flex items-center",children:["\u6700\u8FD1\u66F4\u65B0\uFF1A",t("span",{className:"border rounded-full w-4 h-4 flex-center",children:"?"})]}),t("div",{className:"ml-auto",children:n.map(e=>t("button",{type:"button",className:"ui_text_gray_hover",children:e},e))})]})]}),t(u,{list:s})]})},d=o.exports.memo(l),h=()=>t(p,{children:t(c,{index:!0,element:t(d,{})})}),G=h;export{G as default};
