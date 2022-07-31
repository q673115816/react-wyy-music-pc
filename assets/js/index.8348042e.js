import{r as c}from"./react.4f2eb426.js";import{c as C}from"./react-slick.a7487162.js";import{a0 as k,G as z,D as G,Q as E,ai as I,ab as B,aj as T}from"./@tabler/icons.1bddd3c4.js";import{b as x,L as h,R as V,c as j}from"./react-router-dom.32e50d5b.js";import{a as R,u as Y,b as P,c as Q,s as U,d as w,e as H,H as O,T as q,f as J,L as $,g as K,i as W,h as X,j as Z}from"./index.42239416.js";import{a as t,j as e,F as _}from"./qrcode.react.d8dda151.js";import{p as ee}from"./react-use.9c5a79ae.js";import{u as se}from"./useInfinite.cea0ff5d.js";import{G as te}from"./Home.3e4a5447.js";import"./lodash.7c73e2e6.js";import"./react-transition-group.5057cde1.js";import"./react-dom.fe9fde37.js";import"./react-redux.64459660.js";import"./immer.98e49ab6.js";import"./axios.1ece621b.js";import"./store.4dc8c578.js";const ae=()=>{var m,b,N,v,g,y,A,F;const{id:o=""}=x(),s=R(),n=Y(),[r,{isLoading:a}]=P(),{data:i}=Q({id:o}),l=(i==null?void 0:i.data)||{},d=((m=l==null?void 0:l.user)==null?void 0:m.followed)||!1,u=()=>{n(U({artistId:o}))},p=async()=>{try{await r({id:o,t:1}),s("\u6536\u85CF\u6210\u529F\uFF01")}catch(f){console.log(f)}},S=async()=>{d?u():await p()};return t("div",{className:"domArtist_header flex p-8",children:[e("div",{className:"w-44 h-44 border overflow-hidden rounded",children:e("img",{src:`${(b=l.artist)==null?void 0:b.cover}?param=200y200`,alt:""})}),t("div",{className:"content flex-auto px-5",children:[e("div",{className:"name h1 select-text",children:(N=l.artist)==null?void 0:N.name}),e("div",{className:"enname my-3 select-text",children:(v=l.alias)==null?void 0:v.map(f=>f)}),t("div",{className:"actions mt-3 flex space-x-2",children:[e("button",{onClick:S,type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex items-center text-sm",children:d?t(_,{children:[e(k,{size:20,stroke:1}),"\u5DF2\u6536\u85CF"]}):t(_,{children:[e(z,{size:20,stroke:1}),"\u6536\u85CF"]})}),l.user&&e(h,{to:`/user/${(g=l.user)==null?void 0:g.userId}`,className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex items-center text-sm",children:"\u4E2A\u4EBA\u4E3B\u9875"})]}),t("div",{className:"info mt-5 space-x-5",children:[t("span",{className:"size",children:["\u5355\u66F2\u6570:",(y=l==null?void 0:l.artist)==null?void 0:y.musicSize]}),t("span",{className:"size",children:["\u4E13\u8F91\u6570:",(A=l.artist)==null?void 0:A.albumSize]}),t("span",{className:"size",children:["MV\u6570:",(F=l.artist)==null?void 0:F.mvSize]})]})]})]})},ie=c.exports.memo(ae),le=({hotAlbums:o=[]})=>e("div",{className:"grid grid-cols-4 p-8 gap-x-20 gap-y-5",children:o.map(s=>t("div",{className:"item",children:[t("div",{className:"cover rounded overflow-hidden relative group",children:[e(h,{to:`/playlist/album/${s.id}`,children:e("img",{className:"",src:`${s.picUrl}?param=200y200`,alt:""})}),e("button",{type:"button",className:"absolute inset-0 ui_themeColor flex-center m-auto w-10 h-10 rounded-full bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500",children:e(G,{size:20,className:"fill-current"})})]}),e("div",{className:"name text-sm mt-2",children:t(h,{to:`/playlist/album/${s.id}`,className:"ui_ellipse",children:[e("span",{className:"ui_text_black_hover",children:s.name}),s.alias.map(n=>e("span",{className:"text-gray-500",children:`\uFF08${n}\uFF09`},n))]})}),e("div",{className:"text-gray-400 mt-2",children:w(s.publishTime).format("YYYY-MM-DD")})]},s.id))}),re=c.exports.memo(le),ne=({hotAlbums:o=[]})=>e("div",{className:"list pt-4",children:o.map((s,n)=>{var r;return t("div",{className:C("list_item pl-5 flex items-center h-20 hover:bg-gray-100",{"bg-gray-50":n%2===0}),children:[e(h,{className:"cover border rounded flex-none w-14 h-14",to:`/playlist/album/${s.id}`,children:e("img",{className:"ui_containimg",src:`${s.picUrl}?param=100y100`,alt:""})}),t(h,{className:"name truncate px-2.5",to:`/playlist/album/${s.id}`,children:[s.name,"\xA0",((r=s.alias)==null?void 0:r.length)>0&&t("span",{className:"text-gray-400",children:["(",s.alias.map(a=>a),")"]})]}),t("span",{className:"size text-gray-400",children:[s.size,"\u9996"]}),t("span",{className:"publishTime text-gray-400",children:["\u53D1\u884C\u65F6\u95F4\uFF1A",w(s.publishTime).format("YYYY-MM-DD")]})]},s.id)})}),ce=c.exports.memo(ne),oe=()=>{const{id:o=""}=x();console.log("artist_column");const[s,n]=c.exports.useState(10),{data:r}=H({id:o}),a=(r==null?void 0:r.songs)||[];return e("div",{className:"column p-8",children:t("div",{className:"column_item",children:[e("div",{className:"cover",children:t("div",{className:"Top50 flex-none bg-black bg-opacity-50 flex-center flex-col font-bold rounded w-full h-full text-white",children:[e("div",{className:"text-4xl",children:"TOP"}),e("div",{className:"text-6xl",children:"50"})]})}),t("div",{className:"aside flex-auto ml-20 w-0",children:[t("div",{className:"flex",children:[e("span",{className:"font-bold text-base",children:"\u70ED\u95E850\u9996"}),t("div",{className:"flex items-center",children:[e("button",{type:"button",className:"flex-none border rounded-full flex-center mx-3 p-1",children:e(G,{size:10,className:"fill-current"})}),e("span",{className:"text-gray-300",children:"|"}),e("button",{type:"button",className:"mx-3",children:e(z,{size:20,stroke:1})})]})]}),t("div",{className:"list mt-2",children:[a.slice(0,s).map((i,l)=>t("div",{className:C("item hover:bg-gray-100 focus:outline-none focus:bg-gray-200",{"bg-gray-50":l%2===0}),tabIndex:2,children:[e("div",{className:"index flex-none text-right text-gray-400",children:String(l+1).padStart(2,"0")}),e("div",{className:"heart flex-none text-center",children:e(O,{id:i.id})}),e("div",{className:"download flex-none text-center",children:e("button",{type:"button",className:"text-gray-500 hover:text-black",children:e(E,{size:16,stroke:1})})}),t("div",{className:"name flex-auto flex flex-auto min-w-0 px-2.5",children:[t("span",{className:"truncate",title:`${i.name}(${i.alia.map(d=>d)})`,children:[i.name,"\xA0",e("span",{className:"text-gray-400",children:i.alia.map(d=>d)})]}),e(q,{item:i,className:"flex-none"})]}),e("div",{className:"duration text-gray-400 flex-none",children:w(i.dt).format("mm:ss")})]},i.id)),s===10&&a.length>10&&t("button",{type:"button",className:"seeMore",onClick:()=>n(50),children:["\u67E5\u770B\u5168\u90E8",a.length,"\u9996 >"]})]})]})]})})},de=c.exports.memo(oe),D=[["Grid",I],["List",B],["Column",T]],me={Grid:re,List:ce,Column:de},ue=c.exports.memo(function(){const{id:s=""}=x(),[n="Grid",r,a]=ee("layout",D[0][0]),{data:i,isLoading:l}=J({id:s}),d=(i==null?void 0:i.hotAlbums)||[];return i!=null&&i.more,l?e($,{}):t("div",{className:"domArtist_section relative",children:[e("div",{className:"absolute right-8 bottom-full actions ml-auto space-x-0.5 flex rounded-sm overflow-hidden",children:D.map(([u,p])=>e("button",{type:"button",className:C("px-1.5 py-0.5 bg-gray-200","handle",u===n&&"bg-gray-400 text-white"),onClick:()=>r(u),children:e(p,{size:14,stroke:1})},u))}),e("div",{className:"domArtist_section_layout",children:c.exports.createElement(me[n],{hotAlbums:d,id:s})})]})}),he=()=>{var r;const{id:o=""}=x(),{data:s,isLoading:n}=K({id:o});return n?e($,{}):t("div",{className:"domArtist_section p-8 leading-8 text-sm select-text",children:[e("div",{className:"domArtist_subtitle font-bold",children:"\u7B80\u4ECB"}),e("div",{className:"domArtist_article text-gray-500 indent-8",children:s==null?void 0:s.briefDesc}),e("br",{}),e("br",{}),(r=s==null?void 0:s.introduction)==null?void 0:r.map(a=>t("div",{className:"select-text",children:[e("div",{className:"domArtist_subtitle font-bold",children:a.ti}),e("div",{className:"domArtist_article text-gray-500 whitespace-pre-line",children:a.txt})]},a.ti))]})},pe=c.exports.memo(he),L=24,xe=c.exports.memo(function(){const{id:s=""}=x(),[n,r]=W([]),[a,{isLoading:i}]=X(),l=c.exports.useRef(!0),d=c.exports.useRef(0),u=c.exports.useRef(null),p=c.exports.useRef(null);return se(async()=>{if(!!l.current)try{const{data:m}=await a({id:s,limit:L,offset:d.current});d.current+=L;const b=(m==null?void 0:m.mvs)||[],N=(m==null?void 0:m.hasMore)||!1;l.current=N,r(v=>{v.push(...b.map(({id:g,imgurl:y,duration:A,name:F,playCount:f})=>({id:g,duration:A,playCount:f,cover:y,title:F,type:"0"})))})}catch(m){console.log(m)}},u,p),t("div",{className:"domArtist_section p-8",children:[e(te,{list:n}),e("div",{ref:p,className:"flex-center",children:i&&e($,{})})]})}),fe=()=>{const{id:o=""}=x(),{data:s,isLoading:n}=Z({id:o}),r=(s==null?void 0:s.artists)||[];return n?e($,{}):r.length===0?e("div",{className:"text-center text-gray-400 text-sm pt-16",children:"\u6CA1\u6709\u76F8\u4F3C\u6B4C\u624B"}):e("div",{className:"p-8",children:e("div",{className:"grid grid-cols-5 gap-5",children:r.map(a=>t("div",{className:"space-y-2",children:[e(h,{to:`/artist/${a.id}`,className:"block rounded overflow-hidden border",children:e("img",{loading:"lazy",className:"aspect-square object-fit w-full h-full",src:`${a.picUrl}?param=200y200`,alt:""})}),e("div",{children:e(h,{to:`/artist/${a.id}`,className:"text-sm",children:a.name})})]},a.id))})})},be=c.exports.memo(fe),M=[["\u4E13\u8F91","Album"],["MV","MV"],["\u6B4C\u624B\u8BE6\u60C5","Desc"],["\u76F8\u4F3C\u6B4C\u624B","Similarity"]],Ne={Album:ue,MV:xe,Desc:pe,Similarity:be},ve=c.exports.memo(function(){const[s,n]=c.exports.useState(M[0][1]);return t("div",{className:"domArtist overflow-auto max-h-full flex-auto",children:[e(ie,{}),t("div",{children:[t("div",{className:"flex mx-8",children:[e("div",{className:"flex gap-4 text-sm",children:M.map(([r,a])=>e("button",{onClick:()=>n(a),type:"button",className:C(s===a&&"font-bold ui_underline"),children:r},a))}),e("div",{className:"relative ml-auto"})]}),c.exports.createElement(Ne[s])]})]})}),ge=()=>e(V,{children:e(j,{path:":id",element:e(ve,{})})}),Be=ge;export{Be as default};