import{r as n}from"./react.0a2f695e.js";import{a8 as o,a7 as m}from"./@tabler/icons.cc549a81.js";import{m as c}from"./index.a14e8238.js";import{j as r}from"./qrcode.react.84002e4a.js";const l=({id:e,index:s})=>{const{currentSong:t,running:a}=c(({audio:i})=>i);return t.id===e?r("div",{className:"ui_themeColor flex justify-end",children:a?r(o,{className:"fill-current",size:20}):r(m,{className:"fill-current",size:20})}):r("div",{className:"text-gray-300",children:String(s+1).padStart(2,"0")})},x=n.exports.memo(l);export{x as R};
