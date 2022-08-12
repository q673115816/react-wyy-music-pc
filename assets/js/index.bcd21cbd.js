import{r as t}from"./react.4dc00a72.js";import{C as S,L as N,w as b,E as B,x as _,y as I,z as R,B as H,P as M,D as C,F,G as L,I as $,J as E,K as P,N as j}from"./index.7721f9f4.js";import{u as A}from"./useInfinite.e29f1b90.js";import{a,j as e}from"./qrcode.react.9db161e8.js";import{b as w,L as g,R as V,c as x}from"./react-router-dom.c9f41bfe.js";import{D as z}from"./@tabler/icons.b920f21e.js";import"./lodash.7c73e2e6.js";import"./react-dom.21c65b93.js";import"./react-redux.1c755cf9.js";import"./immer.98e49ab6.js";import"./axios.1ece621b.js";import"./store.4dc8c578.js";import"./react-slick.7d904bce.js";import"./react-transition-group.249745a6.js";import"./react-use.7eb84fdb.js";const k=t.exports.memo(function(){const{id:o}=w(),[i,c]=t.exports.useState([]),l=t.exports.useRef(!0),u=t.exports.useRef(0),d=t.exports.useRef(null),p=t.exports.useRef(null),m=20;return A(async()=>{if(!l.current)return!1;try{const{hotComments:r,hasMore:h}=await b({id:o,type:0,limit:m,offset:u.current});l.current=h,u.current+=m,c(f=>[...f,...r])}catch(r){console.log(r)}},p,d),a("div",{className:"domComment px-8 py-5 overflow-auto max-h-full flex-auto",ref:p,children:[e("div",{className:"h1",children:"\u7CBE\u5F69\u8BC4\u8BBA"}),a("div",{className:"domComment_list",children:[i.map(r=>e(S,{item:r},r.commentId)),l.current&&e("div",{className:"flex justify-center py-4",children:e(N,{})}),e("div",{ref:d})]})]})}),G=({detail:s})=>{var o;return a("div",{className:"flex",children:[a("div",{className:"cover h-20 rounded overflow-hidden relative",children:[e("img",{loading:"lazy",className:"h-full",src:s.al.picUrl,alt:""}),e("div",{className:"ico absolute inset-0 m-auto flex-center w-8 h-8 ui_themeColor rounded-full bg-white bg-opacity-90",children:e(z,{size:16,className:"fill-current"})})]}),a("div",{className:"content px-6 py-2",children:[a("div",{className:"title text-lg",children:[s.name,e("span",{className:"text-gray-500",children:s.alia.length>0&&`(${s.alia})`})]}),a("div",{className:"info text-gray-500 mt-2 space-x-5",children:[a("span",{children:["\u4E13\u8F91\uFF1A",e(g,{className:"ui_text_gray_hover",to:`/playlist/album/${s.al.id}`,children:(o=s.al)==null?void 0:o.name})]}),a("span",{children:["\u6B4C\u624B\uFF1A",s.ar.map((i,c)=>a("span",{children:[c>0&&" / ",e(g,{className:"ui_text_gray_hover",to:`/artist/${i.id}`,children:i.name})]},i.id))]})]})]})]})},J=t.exports.memo(G),v={song:{apiDetail:({id:s})=>F({ids:s}),apiComment:L,header:J},mv:{apiDetail:$,apiComment:E,header:()=>e("div",{})},video:{apiDetail:P,apiComment:j,header:()=>e("div",{})}},K=()=>{console.log("comment");const{id:s,type:o}=w(),[i,c]=t.exports.useState({}),[l,u]=t.exports.useState({});t.exports.useState("");const[d,p]=t.exports.useState(!0),[m,y]=t.exports.useState(1),r=async()=>{try{const{songs:n}=await v[o].apiDetail({id:s});c(n[0])}catch(n){console.log(n)}};t.exports.useCallback(n=>{},[]);const h=async()=>{try{const n=await v[o].apiComment({id:s,offset:(m-1)*20,limit:C});u(n)}catch(n){console.log(n)}},f=async()=>{await r(),await h(),p(!1)},D=t.exports.useMemo(()=>v[o].header,[o]);return t.exports.useEffect(()=>{d?f():h()},[m]),d?e("div",{className:"w-full h-full flex-center",children:e(N,{})}):a("div",{className:"domComment overflow-auto px-8 py-5 h-full",children:[e(D,{detail:i}),a("div",{className:"domComment_write mt-4",children:[e(B,{}),a("div",{className:"flex mt-2",children:[a("div",{className:"flex space-x-2",children:[e(_,{}),e(I,{}),e(R,{})]}),e("button",{type:"button",className:"flex-center border px-4 h-8 text-sm hover:bg-gray-100 rounded-full ml-auto",children:"\u8BC4\u8BBA"})]})]}),a("div",{className:"domComment_main mt-8",children:[e(H,{comments:l,more:s,type:o}),e(M,{total:Math.ceil(l.total/C),page:m,func:y})]})]})},O=t.exports.memo(K),U=()=>e(V,{children:a(x,{path:":type/:id",children:[e(x,{index:!0,element:e(O,{})}),e(x,{path:"hot",element:e(k,{})})]})}),le=U;export{le as default};
