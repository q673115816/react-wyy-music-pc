import{r as e}from"./react.4f2eb426.js";import{u as m,x as p,aR as n}from"./index.05393485.js";import{j as t}from"./qrcode.react.d8dda151.js";import{b as c,d as u,R as d,c as f}from"./react-router-dom.1ca7f9ae.js";import"./lodash.7c73e2e6.js";import"./react-dom.fe9fde37.js";import"./react-redux.bec53cdc.js";import"./immer.98e49ab6.js";import"./axios.1ece621b.js";import"./store.4dc8c578.js";import"./@tabler/icons.1bddd3c4.js";import"./react-slick.a7487162.js";import"./react-transition-group.b433e3be.js";import"./react-use.602fd606.js";const h=e.exports.memo(function(){const{type:r,id:s}=c(),a=m(),i={music:async()=>{const{songs:[o]}=await p({ids:s});a(n({currentSong:o}))}};return(async o=>await i[o]())(r),t(u,{to:"/"})}),R=()=>t(d,{children:t(f,{path:":type/:id",element:t(h,{})})}),k=R;export{k as default};
