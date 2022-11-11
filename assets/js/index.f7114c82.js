import{r as l}from"./react.0a2f695e.js";import{a as g}from"./classnames.9558900f.js";import{a as F,aG as B,aH as v,t as E,M as A,H as w,W as P,A as $,aI as k,aJ as S,E as z,y as _,z as G,B as I,L as b,D as L,aK as j,P as M,aL as R,aM as H,aN as T}from"./index.04e628fd.js";import{W as O,R as Q,Y,w as U,Q as J,a1 as W}from"./@tabler/icons.03a18234.js";import{L as p}from"./react-router-dom.4c2558a9.js";import{d as D}from"./dayjs.6fdda85a.js";import{a,j as e}from"./qrcode.react.84002e4a.js";import{f as h,g as Z,h as y}from"./react-router.ac7babc5.js";import{R as K}from"./Rank.5502751a.js";import{D as q}from"./Download.f2013972.js";import{A as V}from"./Album.152f99ad.js";import{G as X}from"./Gender.aca5fa5b.js";import{G as ee}from"./index.497cc907.js";import"./lodash.f41ef0b4.js";import"./react-dom.d348259d.js";import"./react-redux.49573eed.js";import"./immer.76e704b2.js";import"./redux-persist.a688a4f3.js";import"./axios.556b107a.js";import"./rxjs.b1f49213.js";import"./react-use.a66bca5d.js";import"./react-transition-group.5a807b1e.js";import"./color.a5f8aeb5.js";const se=({tags:t=[]})=>t.length===0?null:a("div",{className:"tags",children:[e("span",{children:"\u6807\u7B7E\uFF1A"}),t.map((s,r)=>a("span",{children:[r>0&&" / ",e(p,{to:`/home/playlist/${s}`,className:"tag ui_link",children:s})]},s))]}),te=l.exports.memo(se),ae=({description:t=""})=>{if(!t)return null;const[s,r]=l.exports.useState(!1),i=t.match(/^.*$/gm);return e("div",{className:"relative pr-5",children:a("div",{className:"whitespace-pre-line leading-6",children:["\u7B80\u4ECB\uFF1A",e("span",{className:g("text-gray-500 select-text",!s&&"truncate inline-block max-w-xs align-bottom"),children:s?t:i==null?void 0:i[0]}),e("button",{type:"button",onClick:()=>r(!s),className:"absolute top-0 right-0 text-gray-500",children:s?e(O,{size:16,className:"fill-current"}):e(Q,{size:16,className:"fill-current"})})]})})},re=l.exports.memo(ae),le=({data:t={},children:s})=>{var m,d,c,u;const r=F(),{id:i=""}=h(),[o]=B(),n=async N=>{try{const{code:x}=await o({t:N?2:1,id:i});x===200&&r(N?"\u53D6\u6D88\u6536\u85CF\u6210\u529F\uFF01":"\u6536\u85CF\u6210\u529F\uFF01")}catch(x){console.log(x)}};return a("div",{className:"p-8 flex items-start",children:[e("div",{className:"border rounded overflow-hidden flex-none w-92 h-92",children:e("img",{loading:"lazy",className:"w-full h-full",src:`${t.playlist.coverImgUrl}?param=200y200`,alt:""})}),a("div",{className:"info flex-auto w-0 ml-5",children:[a("div",{className:"name leading-tight",children:[e("span",{className:"whitespace-nowrap text-red-500 border border-current p-0.5 rounded mr-2 align-bottom inline-block",children:"\u6B4C\u5355"}),e("span",{className:"h1 select-text",children:t.playlist.name||"\u6211\u559C\u6B22\u7684\u97F3\u4E50"})]}),a("div",{className:"creator flex items-center mt-2",children:[e(p,{to:`/user/${(m=t.playlist.creator)==null?void 0:m.userId}`,className:"w-6 h-6 rounded-full overflow-hidden mr-2",children:e("img",{className:"",src:`${(d=t.playlist.creator)==null?void 0:d.avatarUrl}?param=50y50`,alt:""})}),e(p,{to:`/user/${(c=t.playlist.creator)==null?void 0:c.userId}`,className:"nickname ui_link mr-2",children:(u=t.playlist.creator)==null?void 0:u.nickname}),a("span",{className:"text-gray-500",children:[D(t.playlist.createTime||Date.now()).format("YYYY-MM-DD"),"\u521B\u5EFA"]})]}),a("div",{className:"actions flex space-x-2 mt-2",children:[s,a("button",{onClick:()=>n(t.playlist.subscribed),type:"button",className:"flex-center text-sm border px-3 h-8 rounded-full hover:bg-gray-50",children:[t.playlist.subscribed?e(Y,{size:20,stroke:1}):e(U,{size:20,stroke:1}),"\xA0",t.playlist.subscribed?"\u5DF2\u6536\u85CF":"\u6536\u85CF",`(${v(t.playlist.subscribedCount)})`]}),a("button",{type:"button",className:"flex-center text-sm border px-3 h-8 rounded-full hover:bg-gray-50",children:[e(J,{size:20,stroke:1}),"\xA0 \u5206\u4EAB",`(${v(t.playlist.shareCount)})`]}),a("button",{type:"button",className:"flex-center text-sm border px-3 h-8 rounded-full hover:bg-gray-50",children:[e(W,{size:20,stroke:1}),"\xA0 \u4E0B\u8F7D\u5168\u90E8"]})]}),a("div",{className:"flex flex-col gap-y-1 mt-3",children:[e(te,{tags:t.playlist.tags}),a("div",{children:[a("span",{className:"mr-3",children:["\u6B4C\u66F2\uFF1A",e("span",{className:"text-gray-500",children:t.playlist.trackCount})]}),a("span",{children:["\u64AD\u653E\uFF1A",e("span",{className:"text-gray-500",children:E(t.playlist.playCount)})]})]}),e(re,{description:t.playlist.description})]})]})]})},ie=l.exports.memo(le),ne=({songs:t=[]})=>t.length?a("div",{style:{"--ui_grid_template":"36px / 30px 30px 30px 36% 4fr 6fr 2fr"},className:"mt-4",children:[a("div",{className:"grid ui_grid_template pl-8",children:[e("div",{}),e("div",{}),e("div",{}),e("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"\u97F3\u4E50\u6807\u9898"}),e("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"\u6B4C\u624B"}),e("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"\u4E13\u8F91"}),e("div",{className:"px-1 flex items-center hover:bg-gray-200 text-gray-500",children:"\u65F6\u957F"})]}),t.map((s,r)=>e(A,{schema:[["\u8BC4\u8BBA","\u64AD\u653E","\u4E0B\u4E00\u9996\u64AD\u653E"],["\u6536\u85CF\u5230\u6B4C\u5355","\u5206\u4EAB","\u590D\u5236\u94FE\u63A5","\u4E0D\u611F\u5174\u8DA3","\u4E0B\u8F7D"]],type:"song",item:s,children:a("div",{tabIndex:2,className:g("grid items-center focus:outline-none focus:bg-gray-200 hover:bg-gray-100 ui_grid_template pl-8",r%2===0&&"bg-gray-50"),children:[e("div",{className:"px-1",children:e(K,{index:r,id:s.id})}),e("div",{className:"px-1",children:e(w,{id:s.id})}),e("div",{className:"px-1",children:e(q,{})}),e(P,{className:"px-1",item:s}),e($,{className:"px-1",artists:s.ar}),e(V,{className:"px-1",name:s.al.name,id:s.al.id}),e("div",{className:"text-gray-500 px-1",children:D(s.dt).format("mm:ss")})]})},s.id))]}):e("div",{className:"pt-16 text-center text-sm text-gray-400",children:"\u6682\u65E0\u97F3\u4E50"}),ce=l.exports.memo(ne),oe=()=>{const t=F(),s=l.exports.useRef(null),{id:r=0}=h(),{data:i,isLoading:o}=k({id:r}),[n,{isLoading:m}]=S(),d=l.exports.useCallback(async()=>{if(!!s.current){s.current.value||t("\u5199\u4E9B\u4E1C\u897F\u5427\uFF0C\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A\u54E6!");try{const c=await n({id:r,t:1,type:2,content:s.current.value})}catch(c){console.log(c)}}},[]);return a("div",{className:"px-8",children:[a("div",{className:"pt-10 pb-10",children:[e(z,{ref:s,max:140,placeholder:""}),a("div",{className:"flex mt-2",children:[a("div",{className:"flex gap-2",children:[e(_,{element:s}),e(G,{element:s}),e(I,{element:s})]}),e("button",{onClick:d,type:"button",className:"ml-auto flex-center text-sm border px-4 h-8 rounded-full hover:bg-gray-50",children:"\u8BC4\u8BBA"})]})]}),o?e(b,{}):e(L,{comments:i,type:0,more:r})]})},ue=l.exports.memo(oe),f=60,me=()=>{const{id:t=""}=h(),[s,r]=l.exports.useState(1),{data:i,isLoading:o}=j({id:t,limit:f,offset:(s-1)*f});return o?e("div",{className:"flex-center pt-32",children:e(b,{})}):a("div",{className:"px-8",children:[e("div",{className:"domPlaylistDetail_subscribers flex justify-between flex-wrap",children:i==null?void 0:i.subscribers.map(n=>a("div",{className:"item flex mt-6 w-80 ",children:[e(p,{to:`/user/${n.userId}`,className:"avatar w-24 h-24 border rounded-full overflow-hidden",children:e("img",{loading:"lazy",src:`${n.avatarUrl}?param=100y100`,alt:""})}),a("div",{className:"ml-2 flex-auto w-0 flex flex-col justify-center",children:[a("div",{className:"text-sm flex items-center",children:[e(p,{to:`/user/${n.userId}`,children:n.nickname}),"\xA0",e(X,{gender:n.gender,size:16})]}),e("div",{className:"mt-2 truncate",children:n.signature})]})]},n.userId))}),e(M,{total:Math.ceil((i==null?void 0:i.total)/f),page:s,func:r})]})},de=l.exports.memo(me),C=[["\u6B4C\u66F2\u5217\u8868","Playlist"],["\u8BC4\u8BBA","Comments"],["\u6536\u85CF\u8005","Subscribers"]],pe={Playlist:ce,Comments:ue,Subscribers:de},he=()=>{const{id:t=""}=h(),[s,r]=l.exports.useState(C[0][1]),[i,{data:o}]=R(),[n,{data:m,isSuccess:d}]=H();return l.exports.useEffect(()=>{(async()=>{const{data:c}=await i({id:t});await n({ids:c.playlist.trackIds.map(({id:u})=>u).join(",")})})()},[t]),d?a("div",{className:"overflow-auto h-full",children:[e(ie,{data:o,children:e(ee,{playlist:m.songs})}),a("div",{className:"mt-4",children:[e("div",{className:"space-x-4 flex items-baseline px-8",children:C.map(([c,u])=>a("button",{type:"button",className:g("text-sm",s===u&&"font-bold text-lg ui_underline"),onClick:()=>r(u),children:[c,c==="\u8BC4\u8BBA"&&`(${o.playlist.commentCount})`]},c))}),e("div",{children:l.exports.createElement(pe[s],{songs:m.songs})})]})]}):e("div",{className:"w-full h-full flex-center",children:e(b,{})})},xe=l.exports.memo(he),ye=l.exports.memo(({id:t})=>{const s=async()=>{try{const{}=await T({rid:t})}catch(r){console.log(r)}};return l.exports.useEffect(()=>{s()},[]),a("div",{className:"domPlaylistDetail",children:[e("div",{className:"domPlaylistDetail_header"}),e("div",{className:"domPlaylistDetail_main",children:"TODO"})]})}),fe=()=>(l.exports.useState(0),e("div",{children:"TOTO"})),ge=()=>a(Z,{children:[e(y,{path:"music/:id",element:e(xe,{})}),e(y,{path:"dj/:id",element:e(ye,{})}),e(y,{path:"album/:id",element:e(fe,{})})]}),Te=l.exports.memo(ge);export{Te as default};
