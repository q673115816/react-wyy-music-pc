import{r as e}from"./react.4dc00a72.js";import{u as r,aj as p,z as c,r as y}from"./index.1fcb7d31.js";import{j as m}from"./qrcode.react.9db161e8.js";const u=({children:t,id:s,className:l=""})=>{const i=r();return m("button",{type:"button",onClick:async()=>{const a=await p({id:s});if(a.playlist.trackCount===0)return!1;const{songs:o}=await c({ids:a.playlist.trackIds.map(({id:n})=>n).join(",")});return i(y({playlist:o}))},className:l,children:t})},h=e.exports.memo(u);export{h as P};
