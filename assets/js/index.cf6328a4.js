import{r as a}from"./react.4dc00a72.js";import{w as y,L as p,C as N,x as C,y as D,z as L,B as x,E as b,D as B,F as S,G as $,I as F,P as R,J as G,K as M,N as Q,O as _,Q as w,R as E}from"./index.0cba2682.js";import{j as e,a as t}from"./qrcode.react.9db161e8.js";import{b as h,L as v,R as H,c as u}from"./react-router-dom.c9f41bfe.js";import{q as P}from"./react-use.b2910bcc.js";import{D as V}from"./@tabler/icons.6309fe16.js";import"./lodash.7c73e2e6.js";import"./react-dom.21c65b93.js";import"./react-redux.8c90b9d0.js";import"./immer.9a3c9cc9.js";import"./axios.1ece621b.js";import"./store.4dc8c578.js";import"./react-slick.7d904bce.js";import"./react-transition-group.249745a6.js";const z=({index:o,setHasMore:l})=>{const{id:c}=h(),r=20,i=a.exports.useRef(null),s=P(i,{root:null,rootMargin:"0px",threshold:1}),[m,{data:n,isSuccess:d,isFetching:W,isUninitialized:g}]=y();return a.exports.useEffect(()=>{g&&s&&s.intersectionRatio>0&&m({id:c,type:0,limit:r,offset:o*r})},[s]),a.exports.useEffect(()=>{n!=null&&n.hasMore&&l()},[n]),e("div",{ref:i,children:d?n.hotComments.map(f=>e(N,{item:f},f.commentId)):e("div",{className:"flex-center py-4",children:e(p,{})})})},A=a.exports.memo(z),j=()=>{const[o,l]=a.exports.useState([!1]),c=a.exports.useCallback(()=>{l(r=>[...r,!1])},[]);return t("div",{className:"px-8 py-5 overflow-auto max-h-full flex-auto",children:[e("div",{className:"h1",children:"\u7CBE\u5F69\u8BC4\u8BBA"}),e("div",{className:"",children:o.map((r,i)=>e(A,{index:i,setHasMore:c},i))})]})},I=a.exports.memo(j),k={song:C,video:D,mv:L},U=()=>{var m;const{id:o,type:l}=h(),{data:c,isFetching:r,isSuccess:i}=k[l]({ids:o});if(r)return e(p,{});const s=c.songs[0];if(i)return t("div",{className:"flex",children:[t("div",{className:"cover h-20 rounded overflow-hidden relative",children:[e("img",{loading:"lazy",className:"h-full",src:s.al.picUrl,alt:""}),e("div",{className:"ico absolute inset-0 m-auto flex-center w-8 h-8 ui_themeColor rounded-full bg-white bg-opacity-90",children:e(V,{size:16,className:"fill-current"})})]}),t("div",{className:"content px-6 py-2",children:[t("div",{className:"title text-lg",children:[s.name,e("span",{className:"text-gray-500",children:s.alia.length>0&&`(${s.alia})`})]}),t("div",{className:"info text-gray-500 mt-2 space-x-5",children:[t("span",{children:["\u4E13\u8F91\uFF1A",e(v,{className:"ui_text_gray_hover",to:`/playlist/album/${s.al.id}`,children:(m=s.al)==null?void 0:m.name})]}),t("span",{children:["\u6B4C\u624B\uFF1A",s.ar.map((n,d)=>t("span",{children:[d>0&&" / ",e(v,{className:"ui_text_gray_hover",to:`/artist/${n.id}`,children:n.name})]},n.id))]})]})]})]})},q=a.exports.memo(U),J={song:{apiDetail:({id:o})=>G({ids:o}),comment:M},mv:{apiDetail:Q,comment:_,header:()=>e("div",{})},video:{apiDetail:w,comment:E}},K=()=>{console.log("comment");const{id:o,type:l}=h();a.exports.useState("");const[c,r]=a.exports.useState(1),{data:i,isLoading:s}=J[l].comment({id:o,offset:(c-1)*20,limit:x});return s?e("div",{className:"w-full h-full flex-center",children:e(p,{})}):t("div",{className:"domComment overflow-auto px-8 py-5 h-full",children:[e(q,{}),t("div",{className:"mt-4",children:[e(b,{}),t("div",{className:"flex mt-2",children:[t("div",{className:"flex space-x-2",children:[e(B,{}),e(S,{}),e($,{})]}),e("button",{type:"button",className:"flex-center border px-4 h-8 text-sm hover:bg-gray-100 rounded-full ml-auto",children:"\u8BC4\u8BBA"})]})]}),t("div",{className:"mt-8",children:[e(F,{comments:i,more:o,type:l}),e(R,{total:Math.ceil(i.total/x),page:c,func:r})]})]})},O=a.exports.memo(K),T=()=>e(H,{children:t(u,{path:":type/:id",children:[e(u,{index:!0,element:e(O,{})}),e(u,{path:"hot",element:e(I,{})})]})}),de=T;export{de as default};
