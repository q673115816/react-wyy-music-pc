import{r as e}from"./react.0a2f695e.js";import{u as p,ao as r,G as c,o as y}from"./index.eae1ea80.js";import{j as m}from"./qrcode.react.84002e4a.js";const u=({children:t,id:s,className:l=""})=>{const o=p();return m("button",{type:"button",onClick:async()=>{const a=await r({id:s});if(a.playlist.trackCount===0)return!1;const{songs:i}=await c({ids:a.playlist.trackIds.map(({id:n})=>n).join(",")});return o(y({playlist:i}))},className:l,children:t})},h=e.exports.memo(u);export{h as P};
