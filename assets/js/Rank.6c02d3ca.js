import{r as n}from"./react.4f2eb426.js";import{a8 as i,a7 as m}from"./@tabler/icons.1bddd3c4.js";import{n as c}from"./index.42239416.js";import{j as r}from"./qrcode.react.d8dda151.js";const l=({id:e,index:s})=>{const{currentSong:t,running:a}=c(({audio:o})=>o);return t.id===e?r("div",{className:"ui_themeColor flex justify-end",children:a?r(i,{className:"fill-current",size:20}):r(m,{className:"fill-current",size:20})}):r("div",{className:"text-gray-300",children:String(s+1).padStart(2,"0")})},x=n.exports.memo(l);export{x as R};