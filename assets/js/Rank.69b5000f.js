import{r as n}from"./react.4dc00a72.js";import{aa as i,a9 as m}from"./@tabler/icons.b920f21e.js";import{q as c}from"./index.7721f9f4.js";import{j as r}from"./qrcode.react.9db161e8.js";const l=({id:e,index:a})=>{const{currentSong:s,running:t}=c(({audio:o})=>o);return s.id===e?r("div",{className:"ui_themeColor flex justify-end",children:t?r(i,{className:"fill-current",size:20}):r(m,{className:"fill-current",size:20})}):r("div",{className:"text-gray-300",children:String(a+1).padStart(2,"0")})},x=n.exports.memo(l);export{x as R};
