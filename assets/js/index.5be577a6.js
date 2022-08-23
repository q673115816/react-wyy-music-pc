import{r}from"./react.b31a8c6f.js";import{d as B,aH as F,t as A,M as k,H as P,S as $,A as I,a as E,aI as S,aJ as _,aK as j,L as N,F as L,P as z,aL as M,i as R,aM as T,ap as G,G as H,aN as O}from"./index.d8af5014.js";import{c as v}from"./react-slick.acd8094e.js";import{D as U}from"./index.bc200701.js";import{$ as Y,l as J,a0 as K,G as Q,V,a3 as q}from"./@tabler/icons.addb6b49.js";import{L as x,b as C,R as W,c as g}from"./react-router-dom.a24b11ac.js";import{a,j as e}from"./qrcode.react.3591e685.js";import{R as X}from"./Rank.b2775969.js";import{D as Z}from"./Download.72773cf9.js";import{A as ee}from"./Album.c8b5908d.js";import{G as se}from"./Gender.7c5c367d.js";import"./lodash.f41ef0b4.js";import"./react-dom.5b11e026.js";import"./react-redux.47a27303.js";import"./immer.9a3c9cc9.js";import"./axios.fa0829fd.js";import"./store.066dccc1.js";import"./rxjs.3527ed23.js";import"./react-use.a43874bd.js";import"./react-transition-group.9b01a212.js";const te=({tags:s=[]})=>s.length===0?null:a("div",{className:"tags",children:[e("span",{children:"\u6807\u7B7E\uFF1A"}),s.map((t,l)=>a("span",{children:[l>0&&" / ",e(x,{to:`/home/playlist/${t}`,className:"tag ui_link",children:t})]},t))]}),ae=r.exports.memo(te),re=({description:s=""})=>{if(!s)return null;const[t,l]=r.exports.useState(!1),c=s.match(/^.*$/gm);return e("div",{className:"relative pr-5",children:a("div",{className:"whitespace-pre-line leading-6",children:["\u7B80\u4ECB\uFF1A",e("span",{className:v("text-gray-500 select-text",!t&&"truncate inline-block max-w-xs align-bottom"),children:t?s:c==null?void 0:c[0]}),e("button",{type:"button",onClick:()=>l(!t),className:"absolute top-0 right-0 text-gray-500",children:t?e(Y,{size:16,className:"fill-current"}):e(J,{size:16,className:"fill-current"})})]})})},le=r.exports.memo(re),ne=({data:s={},handleSub:t,songs:l})=>{var c,n,u,m;return a("div",{className:"p-8 flex items-start",children:[e("div",{className:"border rounded overflow-hidden flex-none w-92 h-92",children:e("img",{loading:"lazy",className:"w-full h-full",src:`${s.playlist.coverImgUrl}?param=200y200`,alt:""})}),a("div",{className:"info flex-auto w-0 ml-5",children:[a("div",{className:"name leading-tight",children:[e("span",{className:"whitespace-nowrap text-red-500 border border-current p-0.5 rounded mr-2 align-bottom inline-block",children:"\u6B4C\u5355"}),e("span",{className:"h1 select-text",children:s.playlist.name||"\u6211\u559C\u6B22\u7684\u97F3\u4E50"})]}),a("div",{className:"creator flex items-center mt-2",children:[e(x,{to:`/user/${(c=s.playlist.creator)==null?void 0:c.userId}`,className:"w-6 h-6 rounded-full overflow-hidden mr-2",children:e("img",{className:"",src:`${(n=s.playlist.creator)==null?void 0:n.avatarUrl}?param=50y50`,alt:""})}),e(x,{to:`/user/${(u=s.playlist.creator)==null?void 0:u.userId}`,className:"nickname ui_link mr-2",children:(m=s.playlist.creator)==null?void 0:m.nickname}),a("span",{className:"text-gray-500",children:[B(s.playlist.createTime||Date.now()).format("YYYY-MM-DD"),"\u521B\u5EFA"]})]}),a("div",{className:"actions flex space-x-2 mt-2",children:[e(U,{playlist:l}),a("button",{onClick:()=>t(s.playlist.subscribed),type:"button",className:"flex-center text-sm border px-3 h-8 rounded-full hover:bg-gray-50",children:[s.playlist.subscribed?e(K,{size:20,stroke:1}):e(Q,{size:20,stroke:1}),"\xA0",s.playlist.subscribed?"\u5DF2\u6536\u85CF":"\u6536\u85CF",`(${F(s.playlist.subscribedCount)})`]}),a("button",{type:"button",className:"flex-center text-sm border px-3 h-8 rounded-full hover:bg-gray-50",children:[e(V,{size:20,stroke:1}),"\xA0 \u5206\u4EAB",`(${F(s.playlist.shareCount)})`]}),a("button",{type:"button",className:"flex-center text-sm border px-3 h-8 rounded-full hover:bg-gray-50",children:[e(q,{size:20,stroke:1}),"\xA0 \u4E0B\u8F7D\u5168\u90E8"]})]}),a("div",{className:"flex flex-col gap-y-1 mt-3",children:[e(ae,{tags:s.playlist.tags}),a("div",{children:[a("span",{className:"mr-3",children:["\u6B4C\u66F2\uFF1A",e("span",{className:"text-gray-500",children:s.playlist.trackCount})]}),a("span",{children:["\u64AD\u653E\uFF1A",e("span",{className:"text-gray-500",children:A(s.playlist.playCount)})]})]}),e(le,{description:s.playlist.description})]})]})]})},ie=r.exports.memo(ne),oe=({songs:s=[]})=>s.length?a("div",{style:{"--ui_grid_template":"36px / 30px 30px 30px 36% 4fr 6fr 2fr"},className:"mt-4",children:[a("div",{className:"grid ui_grid_template pl-8",children:[e("div",{}),e("div",{}),e("div",{}),e("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"\u97F3\u4E50\u6807\u9898"}),e("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"\u6B4C\u624B"}),e("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"\u4E13\u8F91"}),e("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"\u65F6\u957F"})]}),s.map((t,l)=>e(k,{schema:[["\u8BC4\u8BBA","\u64AD\u653E","\u4E0B\u4E00\u9996\u64AD\u653E"],["\u6536\u85CF\u5230\u6B4C\u5355","\u5206\u4EAB","\u590D\u5236\u94FE\u63A5","\u4E0D\u611F\u5174\u8DA3","\u4E0B\u8F7D"]],type:"song",item:t,children:a("div",{tabIndex:2,className:v("grid items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100 ui_grid_template pl-8",l%2===0&&"bg-gray-50"),children:[e("div",{className:"px-1",children:e(X,{index:l,id:t.id})}),e("div",{className:"px-1",children:e(P,{id:t.id})}),e("div",{className:"px-1",children:e(Z,{})}),e($,{className:"px-1",item:t}),e(I,{className:"px-1",artists:t.ar}),e(ee,{className:"px-1",name:t.al.name,id:t.al.id}),e("div",{className:"text-gray-500 px-1",children:B(t.dt).format("mm:ss")})]})},t.id))]}):e("div",{className:"pt-16 text-center text-sm text-gray-400",children:"\u6682\u65E0\u97F3\u4E50"}),ce=r.exports.memo(oe),ue=()=>{const s=E(),t=r.exports.useRef(null),{id:l=0}=C(),{data:c,isLoading:n}=S({id:l}),[u,{isLoading:m}]=_(),p=r.exports.useCallback(()=>{},[]),h=r.exports.useCallback(async()=>{if(!!t.current){t.current.value||s("\u5199\u4E9B\u4E1C\u897F\u5427\uFF0C\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\u54E6!");try{const i=await u({id:l,t:1,type:2,content:t.current.value})}catch(i){console.log(i)}}},[]);return a("div",{className:"px-8",children:[a("div",{className:"pt-10 pb-10",children:[e(j,{ref:t,max:140,placeholder:"",onChange:p}),e("div",{className:"flex justify-end mt-2",children:e("button",{onClick:h,type:"button",className:"flex-center text-sm border px-4 h-8 rounded-full hover:bg-gray-50",children:"\u8BC4\u8BBA"})})]}),n?e(N,{}):e(L,{comments:c,type:0,more:l})]})},me=r.exports.memo(ue),b=60,de=r.exports.memo(function(){const{id:t}=C(),[l,c]=r.exports.useState(1),[n,u]=r.exports.useState({}),[m,p]=r.exports.useState(!0),h=async()=>{const{subscribers:i,total:f}=await M({id:t,limit:b,offset:(l-1)*b});u({subscribers:i,total:f}),p(!1)};return r.exports.useEffect(()=>{h()},[]),m?e("div",{className:"flex-center pt-32",children:e(N,{})}):a("div",{className:"px-8",children:[e("div",{className:"domPlaylistDetail_subscribers flex justify-between flex-wrap",children:n==null?void 0:n.subscribers.map(i=>a("div",{className:"item flex mt-6 w-80 ",children:[e(x,{to:`/user/${i.userId}`,className:"avatar w-24 h-24 border rounded-full overflow-hidden",children:e("img",{loading:"lazy",src:`${i.avatarUrl}?param=100y100`,alt:""})}),a("div",{className:"ml-2 flex-auto w-0 flex flex-col justify-center",children:[a("div",{className:"text-sm flex items-center",children:[e(x,{to:`/user/${i.userId}`,children:i.nickname}),"\xA0",e(se,{gender:i.gender,size:16})]}),e("div",{className:"mt-2 truncate",children:i.signature})]})]},i.userId))}),e(z,{total:Math.ceil((n==null?void 0:n.total)/b),page:l,func:c})]})}),D=[["\u6B4C\u66F2\u5217\u8868","Playlist"],["\u8BC4\u8BBA","Comments"],["\u6536\u85CF\u8005","Subscribers"]],pe={Playlist:ce,Comments:me,Subscribers:de},he=()=>{const{id:s}=C(),t=E(),[l,c]=r.exports.useState(!0),[n,u]=r.exports.useState([]),[m,p]=R({}),[h,i]=r.exports.useState(D[0][1]),f=async()=>{try{const o=await G({id:s});if(p(o),o.playlist.trackCount>0){const{songs:d}=await H({ids:o.playlist.trackIds.map(({id:y})=>y).join(",")});u(d)}c(!1)}catch(o){console.log(o)}},w=r.exports.useCallback(async o=>{try{const{code:d}=await T({t:o?2:1,id:s});d===200&&(t(o?"\u53D6\u6D88\u6536\u85CF\u6210\u529F\uFF01":"\u6536\u85CF\u6210\u529F\uFF01"),p(y=>{y.playlist.subscribed=!o}))}catch(d){console.log(d)}},[s]);return r.exports.useEffect(()=>{f()},[s]),l?e("div",{className:"w-full h-full flex-center",children:e(N,{})}):a("div",{className:"overflow-auto h-full",children:[e(ie,{data:m,handleSub:w,songs:n}),a("div",{className:"mt-4",children:[e("div",{className:"space-x-4 flex items-baseline px-8",children:D.map(([o,d])=>a("button",{type:"button",className:v("text-sm",h===d&&"font-bold text-lg ui_underline"),onClick:()=>i(d),children:[o,o==="\u8BC4\u8BBA"&&`(${m.playlist.commentCount})`]},o))}),e("div",{children:r.exports.createElement(pe[h],{songs:n})})]})]})},xe=r.exports.memo(he),fe=r.exports.memo(({id:s})=>{const t=async()=>{try{const{}=await O({rid:s})}catch(l){console.log(l)}};return r.exports.useEffect(()=>{t()},[]),a("div",{className:"domPlaylistDetail",children:[e("div",{className:"domPlaylistDetail_header"}),e("div",{className:"domPlaylistDetail_main",children:"TODO"})]})}),ye=()=>(r.exports.useState(0),e("div",{children:"TOTO"})),ge=()=>a(W,{children:[e(g,{path:"music/:id",element:e(xe,{})}),e(g,{path:"dj/:id",element:e(fe,{})}),e(g,{path:"album/:id",element:e(ye,{})})]}),Re=r.exports.memo(ge);export{Re as default};
