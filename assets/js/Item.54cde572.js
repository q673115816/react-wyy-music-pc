import{r as i}from"./react.23cc8478.js";import{L as l}from"./react-router-dom.1e37ceed.js";import{E as o,z as p}from"./@tabler/icons.b7add604.js";import{u,$ as h,x as y,o as b,t as f}from"./index.89c01ead.js";import{j as a,a as s}from"./qrcode.react.5dc2fa92.js";const g=({children:t,id:r,className:c=""})=>{const n=u();return a("button",{type:"button",onClick:async()=>{const e=await h({id:r});if(e.playlist.trackCount===0)return!1;const{songs:m}=await y({ids:e.playlist.trackIds.map(({id:d})=>d).join(",")});return n(b({playlist:m}))},className:c,children:t})};var v=i.exports.memo(g);const N=({item:t={}})=>s("div",{className:"item",children:[s("div",{className:"cover relative rounded overflow-hidden group",children:[s(l,{to:`/playlist/music/${t.id}`,className:"",children:[a("img",{loading:"lazy",className:"w-full h-full aspect-square",src:`${t.coverImgUrl}?param=200y200`,alt:""}),a("div",{className:"absolute top-0 left-0 right-0 h-1/4 ui_linear_mask_top"}),a("div",{className:"absolute bottom-0 left-0 right-0 h-1/4 ui_linear_mask_bottom"}),a("div",{className:"absolute top-0 right-0 text-white mx-2 my-1",children:s("div",{className:"playCount flex-center",children:[a(o,{size:12}),f(t.playCount)]})})]}),a(l,{to:`/user/${t.userId}/detail`,className:"absolute left-0 bottom-0 text-white mx-2 my-1",children:t.creator.nickname}),t.privacy===10&&a("div",{className:"absolute right-0 bottom-0",children:a("div",{className:"text-white bg-black w-12 h-12",style:{clipPath:"polygon(100% 0, 0% 100%, 100% 100%)"},children:a(p,{size:20,className:"absolute right-1 bottom-1"})})}),a(v,{id:t.id,className:"playArrow ui_themeColor absolute right-0 bottom-0 m-2 p-2 bg-white bg-opacity-90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500",children:a(o,{size:22,className:"fill-current"})})]}),a("div",{className:"footer text-sm mt-2 ui_ellipse",children:a(l,{className:"name",to:`/playlist/music/${t.id}`,children:t.name})})]});var A=i.exports.memo(N);export{A as I,v as P};
