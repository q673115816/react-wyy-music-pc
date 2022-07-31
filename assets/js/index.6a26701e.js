import{r}from"./react.4f2eb426.js";import{d as w,ae as F,t as E,M as k,H as P,N as $,A as S,W as I,L as N,v as _,P as j,af as z,a as T,i as L,ag as R,$ as M,x as G,ah as O}from"./index.42239416.js";import{c as v}from"./react-slick.a7487162.js";import{D as H}from"./index.9cd3d8f7.js";import{$ as U,l as Y,a0 as W,G as J,V as Q,T as V}from"./@tabler/icons.1bddd3c4.js";import{L as p,b as C,R as q,c as b}from"./react-router-dom.32e50d5b.js";import{a,j as e}from"./qrcode.react.d8dda151.js";import{R as K}from"./Rank.6c02d3ca.js";import{D as X}from"./Download.2bd5a175.js";import{A as Z}from"./Album.40ff4549.js";import{a as ee}from"./api.ec4f81c3.js";import{G as se}from"./Gender.8a87bf6f.js";import"./lodash.7c73e2e6.js";import"./react-dom.fe9fde37.js";import"./react-redux.64459660.js";import"./immer.98e49ab6.js";import"./axios.1ece621b.js";import"./store.4dc8c578.js";import"./react-transition-group.5057cde1.js";import"./react-use.9c5a79ae.js";const te=({tags:t=[]})=>t.length===0?null:a("div",{className:"tags",children:[e("span",{children:"\u6807\u7B7E\uFF1A"}),t.map((s,l)=>a("span",{children:[l>0&&" / ",e(p,{to:`/home/playlist/${s}`,className:"tag ui_link",children:s})]},s))]}),ae=r.exports.memo(te),re=({description:t=""})=>{if(!t)return null;const[s,l]=r.exports.useState(!1),c=t.match(/^.*$/gm);return e("div",{className:"relative pr-5",children:a("div",{className:"whitespace-pre-line leading-6",children:["\u7B80\u4ECB\uFF1A",e("span",{className:v("text-gray-500 select-text",!s&&"truncate inline-block max-w-xs align-bottom"),children:s?t:c==null?void 0:c[0]}),e("button",{type:"button",onClick:()=>l(!s),className:"absolute top-0 right-0 text-gray-500",children:s?e(U,{size:16,className:"fill-current"}):e(Y,{size:16,className:"fill-current"})})]})})},le=r.exports.memo(re),ie=({data:t={},handleSub:s,songs:l})=>{var c,i,m,d;return a("div",{className:"p-8 flex items-start",children:[e("div",{className:"border rounded overflow-hidden flex-none w-92 h-92",children:e("img",{loading:"lazy",className:"w-full h-full",src:`${t.playlist.coverImgUrl}?param=200y200`,alt:""})}),a("div",{className:"info flex-auto w-0 ml-5",children:[a("div",{className:"name leading-tight",children:[e("span",{className:"whitespace-nowrap text-red-500 border border-current p-0.5 rounded mr-2 align-bottom inline-block",children:"\u6B4C\u5355"}),e("span",{className:"h1 select-text",children:t.playlist.name||"\u6211\u559C\u6B22\u7684\u97F3\u4E50"})]}),a("div",{className:"creator flex items-center mt-2",children:[e(p,{to:`/user/${(c=t.playlist.creator)==null?void 0:c.userId}`,className:"w-6 h-6 rounded-full overflow-hidden mr-2",children:e("img",{className:"",src:`${(i=t.playlist.creator)==null?void 0:i.avatarUrl}?param=50y50`,alt:""})}),e(p,{to:`/user/${(m=t.playlist.creator)==null?void 0:m.userId}`,className:"nickname ui_link mr-2",children:(d=t.playlist.creator)==null?void 0:d.nickname}),a("span",{className:"text-gray-500",children:[w(t.playlist.createTime||Date.now()).format("YYYY-MM-DD"),"\u521B\u5EFA"]})]}),a("div",{className:"actions flex space-x-2 mt-2",children:[e(H,{playlist:l}),a("button",{onClick:()=>s(t.playlist.subscribed),type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn",children:[t.playlist.subscribed?e(W,{size:20,stroke:1}):e(J,{size:20,stroke:1}),"\xA0",t.playlist.subscribed?"\u5DF2\u6536\u85CF":"\u6536\u85CF",`(${F(t.playlist.subscribedCount)})`]}),a("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn",children:[e(Q,{size:20,stroke:1}),"\xA0 \u5206\u4EAB",`(${F(t.playlist.shareCount)})`]}),a("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full btn",children:[e(V,{size:20,stroke:1}),"\xA0 \u4E0B\u8F7D\u5168\u90E8"]})]}),a("div",{className:"space-y-1 mt-2",children:[e(ae,{tags:t.playlist.tags}),a("div",{children:[a("span",{className:"mr-3",children:["\u6B4C\u66F2\uFF1A",e("span",{className:"text-gray-500",children:t.playlist.trackCount})]}),a("span",{children:["\u64AD\u653E\uFF1A",e("span",{className:"text-gray-500",children:E(t.playlist.playCount)})]})]}),e(le,{description:t.playlist.description})]})]})]})},ne=r.exports.memo(ie),ce=({songs:t=[]})=>t.length?a("div",{style:{"--ui_grid_template":"36px / 30px 30px 30px 36% 4fr 6fr 2fr"},className:"mt-4",children:[a("div",{className:"grid ui_grid_template pl-8",children:[e("div",{}),e("div",{}),e("div",{}),e("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"\u97F3\u4E50\u6807\u9898"}),e("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"\u6B4C\u624B"}),e("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"\u4E13\u8F91"}),e("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"\u65F6\u957F"})]}),t.map((s,l)=>e(k,{schema:[["\u8BC4\u8BBA","\u64AD\u653E","\u4E0B\u4E00\u9996\u64AD\u653E"],["\u6536\u85CF\u5230\u6B4C\u5355","\u5206\u4EAB","\u590D\u5236\u94FE\u63A5","\u4E0D\u611F\u5174\u8DA3","\u4E0B\u8F7D"]],type:"song",item:s,children:a("div",{tabIndex:2,className:v("grid items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100 ui_grid_template pl-8",l%2===0&&"bg-gray-50"),children:[e("div",{className:"px-1",children:e(K,{index:l,id:s.id})}),e("div",{className:"px-1",children:e(P,{id:s.id})}),e("div",{className:"px-1",children:e(X,{})}),e($,{className:"px-1",item:s}),e(S,{className:"px-1",artists:s.ar}),e(Z,{className:"px-1",name:s.al.name,id:s.al.id}),e("div",{className:"text-gray-500 px-1",children:w(s.dt).format("mm:ss")})]})},s.id))]}):e("div",{className:"pt-16 text-center text-sm text-gray-400",children:"\u6682\u65E0\u97F3\u4E50"}),oe=r.exports.memo(ce),ue=r.exports.memo(function(){const{id:s}=C(),{data:l,isLoading:c}=ee({id:s}),i=r.exports.useCallback(()=>{},[]);return a("div",{className:"px-8",children:[e("div",{className:"pt-10 pb-10",children:e(I,{max:140,placeholder:"",onChange:i})}),c?e(N,{}):e(_,{comments:l,type:0,more:s})]})}),g=60,me=r.exports.memo(function(){const{id:s}=C(),[l,c]=r.exports.useState(1),[i,m]=r.exports.useState({}),[d,h]=r.exports.useState(!0),x=async()=>{const{subscribers:o,total:f}=await z({id:s,limit:g,offset:(l-1)*g});m({subscribers:o,total:f}),h(!1)};return r.exports.useEffect(()=>{x()},[]),d?e("div",{className:"flex-center pt-32",children:e(N,{})}):a("div",{className:"px-8",children:[e("div",{className:"domPlaylistDetail_subscribers flex justify-between flex-wrap",children:i==null?void 0:i.subscribers.map(o=>a("div",{className:"item flex mt-6 w-80 ",children:[e(p,{to:`/user/${o.userId}`,className:"avatar w-24 h-24 border rounded-full overflow-hidden",children:e("img",{loading:"lazy",src:`${o.avatarUrl}?param=100y100`,alt:""})}),a("div",{className:"ml-2 flex-auto w-0 flex flex-col justify-center",children:[a("div",{className:"text-sm flex items-center",children:[e(p,{to:`/user/${o.userId}`,children:o.nickname}),"\xA0",e(se,{gender:o.gender,size:16})]}),e("div",{className:"mt-2 truncate",children:o.signature})]})]},o.userId))}),e(j,{total:Math.ceil((i==null?void 0:i.total)/g),page:l,func:c})]})}),D=[["\u6B4C\u66F2\u5217\u8868","Playlist"],["\u8BC4\u8BBA","Comments"],["\u6536\u85CF\u8005","Subscribers"]],de={Playlist:oe,Comments:ue,Subscribers:me},pe=r.exports.memo(function(){const{id:s}=C(),l=T(),[c,i]=r.exports.useState(!0),[m,d]=r.exports.useState([]),[h,x]=L({}),[o,f]=r.exports.useState(D[0][1]),B=async()=>{try{const n=await M({id:s});if(x(n),n.playlist.trackCount>0){const{songs:u}=await G({ids:n.playlist.trackIds.map(({id:y})=>y).join(",")});d(u)}i(!1)}catch(n){console.log(n)}},A=r.exports.useCallback(async n=>{try{const{code:u}=await R({t:n?2:1,id:s});u===200&&(l(n?"\u53D6\u6D88\u6536\u85CF\u6210\u529F\uFF01":"\u6536\u85CF\u6210\u529F\uFF01"),x(y=>{y.playlist.subscribed=!n}))}catch(u){console.log(u)}},[s]);return r.exports.useEffect(()=>{B()},[s]),c?e("div",{className:"w-full h-full flex-center",children:e(N,{})}):a("div",{className:"overflow-auto h-full",children:[e(ne,{data:h,handleSub:A,songs:m}),a("div",{className:"mt-4",children:[e("div",{className:"space-x-4 flex items-baseline px-8",children:D.map(([n,u])=>a("button",{type:"button",className:v("text-sm",o===u&&"font-bold ui_underline"),onClick:()=>f(u),children:[n,n==="\u8BC4\u8BBA"&&`(${h.playlist.commentCount})`]},n))}),e("div",{children:r.exports.createElement(de[o],{songs:m})})]})]})}),he=r.exports.memo(({id:t})=>{const s=async()=>{try{const{}=await O({rid:t})}catch(l){console.log(l)}};return r.exports.useEffect(()=>{s()},[]),a("div",{className:"domPlaylistDetail",children:[e("div",{className:"domPlaylistDetail_header"}),e("div",{className:"domPlaylistDetail_main",children:"TODO"})]})}),xe=()=>(r.exports.useState(0),e("div",{children:"TOTO"})),fe=()=>a(q,{children:[e(b,{path:"music/:id",element:e(pe,{})}),e(b,{path:"dj/:id",element:e(he,{})}),e(b,{path:"album/:id",element:e(xe,{})})]}),Te=fe;export{Te as default};
