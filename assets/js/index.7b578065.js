import{r as l}from"./react.4f2eb426.js";import{L as i,b,N as V,O as J,R as O,c as g,d as K}from"./react-router-dom.b907a3a9.js";import{c as u}from"./react-slick.a7487162.js";import{H as C,D as F,d as B,ah as Q,L as D,ad as T,u as E,v as _,ai as $,aj as q,ak as W,al as X,am as Y,R as Z,P as ee}from"./index.3e068c77.js";import{M as A}from"./MenuCreate.83f3ecea.js";import{R as w}from"./Rank.e2f4fea7.js";import{D as k}from"./Download.d57a8323.js";import{N as S}from"./Name.ff2ced44.js";import{D as I}from"./Album.f0d276b4.js";import{j as e,a as t,F as ae}from"./qrcode.react.d8dda151.js";import{i as se}from"./@tabler/icons.85b9b193.js";import{G as te}from"./Home.82f28085.js";import{G as re}from"./Gender.8a87bf6f.js";import"./lodash.7c73e2e6.js";import"./react-transition-group.99d8e67f.js";import"./react-dom.fe9fde37.js";import"./react-redux.64459660.js";import"./immer.98e49ab6.js";import"./axios.1ece621b.js";import"./store.e6a9b03b.js";import"./react-use.9c5a79ae.js";import"./index.83d121c7.js";const le=({pop:s=0})=>e("div",{className:"range w-20 h-1.5 rounded bg-gray-200",children:e("div",{className:"h-full bg-gray-300 rounded",style:{width:`${s}%`}})}),R=l.exports.memo(le),ce=({songs:s=[]})=>t("div",{className:"songs_list",style:{"--ui_grid_template":"36px / 54px 24px 24px 37% 4fr 5fr 2fr 3fr"},children:[e("div",{className:"thead",children:t("div",{className:"item grid items-center text-gray-400 ui_grid_template",children:[e("div",{className:"index"}),e("div",{className:"heart"}),e("div",{className:"download"}),e("div",{className:"name flex-auto px-2",children:"\u97F3\u4E50\u6807\u9898"}),e("div",{className:"artist flex-none px-2",children:"\u6B4C\u624B"}),e("div",{className:"album flex-none px-2",children:"\u4E13\u8F91"}),e("div",{className:"duration flex-none px-2",children:"\u65F6\u957F"}),e("div",{className:"pop flex-none px-2",children:"\u70ED\u5EA6"})]})}),e("div",{className:"tbody",children:s.map((a,r)=>e(A,{schema:[["\u8BC4\u8BBA","\u64AD\u653E","\u4E0B\u4E00\u9996\u64AD\u653E"],["\u6536\u85CF\u5230\u6B4C\u5355","\u5206\u4EAB","\u590D\u5236\u94FE\u63A5","\u4E0B\u8F7D"]],item:a,type:"song",children:t("div",{tabIndex:2,className:u("item grid items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template",{"bg-gray-50":r%2===0}),children:[e("div",{className:"index px-2",children:e(w,{index:r,id:a.id})}),e("div",{className:"heart text-center",children:e(C,{id:a.id})}),e("div",{className:"download text-center",children:e(k,{})}),e("div",{className:"name px-2",children:e(S,{item:a})}),e("div",{className:"artist flex-none px-2 truncate text-gray-400",children:e(F,{artists:a.ar})}),e("div",{className:"album truncate flex-none px-2",children:e(I,{name:a.al.name,id:a.al.name})}),e("div",{className:"duration text-gray-400 truncate flex-none px-2",children:B(a.dt).format("mm:ss")}),e("div",{className:"pop",children:e(R,{pop:a.pop})})]})},a.id))})]}),ne=l.exports.memo(ce),ie={"--grid-template-columns":"60px 6fr min-content"},de=({artists:s=[]})=>e("div",{className:"artists_list _list",style:ie,children:s.map((a,r)=>t("div",{className:u("item relative grid items-center hover:bg-gray-100",{"bg-gray-50":r%2===1}),children:[e(i,{to:`/artist/${a.id}`,className:"absolute inset-0"}),e("div",{className:"cover",children:e("img",{className:"",src:`${a.img1v1Url}?param=60y60`,alt:""})}),t("div",{className:"name px-2.5 text-sm",children:[a.name,a.alia&&t("span",{className:"text-gray-400",children:["(",a==null?void 0:a.alias[0],")"]})]}),a.accountId&&e("span",{className:"account bg-red-500 w-4 h-4 rounded-full text-white flex-center",children:e(se,{size:12,stroke:3})})]},a.id))}),oe={"--grid-template-columns":"60px 1fr 1fr"},ue=({albums:s=[]})=>e("div",{className:"albums_list _list",style:oe,children:s.map((a,r)=>t("div",{tabIndex:2,className:u("item grid items-center relative hover:bg-gray-100",{"bg-gray-50":r%2===1}),children:[e(i,{className:"absolute inset-0 z-0",to:`/playlist/album/${a.id}`}),e("div",{className:"cover",children:e("img",{src:`${a.picUrl}?param=60y60`,alt:""})}),t("div",{className:"name px-5 text-sm",children:[a.name,a.alias.length>0&&e("span",{className:"text-gray-400",children:`\uFF08${a.alias}\uFF09`})]}),e("div",{className:"artist truncate",children:t(i,{to:`/artist/${a.artist.id}`,className:"ui_text_gray_hover relative z-10",children:[a.artist.name,a.artist.alias.length>0&&e("span",{className:"text-gray-400",children:`\uFF08${a.artist.alias}\uFF09`})]})})]},a.id))}),me=l.exports.memo(ue),pe=({videos:s=[]})=>{const a=s.map(({type:r,title:n,coverUrl:d,playTime:c,creator:o,vid:m,durationms:h})=>({id:m,type:r,title:n,creator:o,playCount:c,duration:h,cover:d}));return e("div",{className:"videos_list py-5 px-10",children:e(te,{list:a})})},he=l.exports.memo(pe),xe={"--grid-template-columns":"60px 6fr 2fr 5fr"},Ne=({playlists:s=[]})=>e("div",{className:"playlists_list _list",style:xe,children:s.map((a,r)=>t("div",{className:u("item grid items-center relative hover:bg-gray-100",{"bg-gray-50":r%2===1}),children:[e(i,{className:"absolute inset-0 z-0",to:`/playlist/music/${a.id}`}),e("div",{className:"cover",children:e("img",{className:"",src:`${a.coverImgUrl}?param=60y60`,alt:""})}),e("div",{className:"name px-3",children:a.name}),t("div",{className:"trackCount text-gray-400",children:[a.trackCount,"\u9996"]}),t("div",{className:"creator text-gray-300",children:["by \xA0",e(i,{to:`/user/${a.creator.userId}`,className:"ui_text_black_hover relative z-10",children:a.creator.nickname})]})]},a.id))}),ge=({lyrics:s=[]})=>{const a=l.exports.useRef(),[r,n]=l.exports.useState(!1);l.exports.useEffect(()=>{a.current=s.join(`
`).replace(/<b>|<\/b>/gm,"")},[s]);const d=()=>{const c=document.createElement("textarea");c.setAttribute("readonly","readonly"),c.textContent=a.current,document.body.appendChild(c),c.select(),document.execCommand("copy")&&(document.execCommand("copy"),console.log("\u590D\u5236\u6210\u529F")),document.body.removeChild(c)};return t("div",{className:"lrc flex pb-2",children:[e("div",{className:"content w-2/3 px-2 text-gray-500",children:s.slice(0,r?1/0:4).map((c,o)=>e("div",{dangerouslySetInnerHTML:{__html:c}},c+o))}),t("div",{className:"actions w-1/3 flex flex-col justify-between",children:[t("div",{className:"flex space-x-2.5",children:[t("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full",onClick:()=>n(!r),children:[r?"\u6536\u8D77":"\u5C55\u5F00","\u6B4C\u8BCD"]}),e("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip",onClick:d,children:"\u590D\u5236\u6B4C\u8BCD"})]}),r&&t("div",{className:"flex space-x-2.5",children:[e("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full",onClick:()=>n(!1),children:"\u6536\u8D77\u6B4C\u8BCD"}),e("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip",onClick:d,children:"\u590D\u5236\u6B4C\u8BCD"})]})]})]})},ve=({songs:s=[]})=>t("div",{className:"lyrics_list",style:{"--ui_grid_template":"36px / 54px 24px 24px 37% 4fr 5fr 2fr 3fr"},children:[e("div",{className:"thead",children:t("div",{className:"item grid items-center text-gray-400 ui_grid_template",children:[e("div",{className:"index"}),e("div",{className:"heart"}),e("div",{className:"download"}),e("div",{className:"name",children:"\u97F3\u4E50\u6807\u9898"}),e("div",{className:"artist",children:"\u6B4C\u624B"}),e("div",{className:"album",children:"\u4E13\u8F91"}),e("div",{className:"duration",children:"\u65F6\u957F"}),e("div",{className:"text-gray-400",children:"\u70ED\u5EA6"})]})}),e("div",{className:"tbody",children:s.map((a,r)=>e(A,{schema:[["\u8BC4\u8BBA","\u64AD\u653E","\u4E0B\u4E00\u9996\u64AD\u653E"],["\u6536\u85CF\u5230\u6B4C\u5355","\u5206\u4EAB","\u590D\u5236\u94FE\u63A5","\u4E0B\u8F7D"]],item:a,type:"song",children:t("div",{tabIndex:"2",className:u("item grid items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200 ui_grid_template",{"bg-gray-50":r%2===0}),children:[e("div",{className:"index pr-2",children:e(w,{index:r,id:a.id})}),e("div",{className:"heart",children:e(C,{id:a.id})}),e("div",{className:"download",children:e(k,{})}),e("div",{className:"name flex",children:e(S,{item:a})}),e("div",{className:"artist truncate",children:e(F,{artists:a.ar})}),e("div",{className:"album truncate",children:e(I,{name:a.al.name,id:a.al.id})}),e("div",{className:"duration text-gray-400 truncate",children:B(a.dt).format("mm:ss")}),e("div",{className:"pop",children:e(R,{pop:a.pop})}),e(ge,{lyrics:a.lyrics})]})},a.id))})]}),ye={"--grid-template-columns":"60px 5fr 2fr"},fe=({djRadios:s=[]})=>e("div",{className:"djRadios_list _list",style:ye,children:s.map((a,r)=>t("div",{className:u("item grid items-center hover:bg-gray-100",{"bg-gray-50":r%2===0}),children:[e(i,{to:`/playlist/dj/${a.id}`,className:"cover",children:e("img",{className:"",src:`${a.picUrl}?param=60y60`,alt:""})}),e("div",{className:"px-5",children:e(i,{to:`/playlist/dj/${a.id}`,className:"name",children:a.name})}),t("div",{className:"dj text-gray-300",children:["by \xA0",e(i,{to:`/user/${a.dj.userId}`,className:"ui_text_gray_hover",children:a.dj.nickname})]})]},a.id))}),be=l.exports.memo(fe),Ce={"--grid-template-columns":"60px 5fr 2fr"},Fe=({userprofiles:s=[]})=>e("div",{className:"userprofiles_list _list",style:Ce,children:s.map((a,r)=>t(i,{to:`/user/${a.userId}`,className:u("item grid items-center hover:bg-gray-100",{"bg-gray-50":r%2===1}),children:[e("div",{className:"rounded-full overflow-hidden",children:e("img",{src:`${a.avatarUrl}?param=60y60`,alt:""})}),t("div",{className:"name px-5",children:[a.nickname,"\xA0",e(re,{size:16,gender:a.gender})]}),e("div",{className:"signature text-gray-400 ml-auto",children:a.signature})]},a.userId))}),Be=l.exports.memo(Fe),De=["\u5355\u66F2","\u6B4C\u624B","\u4E13\u8F91","\u89C6\u9891","\u6B4C\u5355","\u6B4C\u8BCD","\u4E3B\u64AD\u7535\u53F0","\u7528\u6237"],j={\u5355\u66F2:{code:1,unit:"\u9996",limit:100,Node:ne,countName:"songCount"},\u6B4C\u624B:{code:100,unit:"\u4F4D",limit:20,Node:de,countName:"artistCount"},\u4E13\u8F91:{code:10,unit:"\u5F20",limit:20,Node:me,countName:"albumCount"},\u89C6\u9891:{code:1014,unit:"\u4E2A",limit:24,Node:he,countName:"videoCount"},\u6B4C\u5355:{code:1e3,unit:"\u4E2A",limit:20,Node:Ne,countName:"playlistCount"},\u6B4C\u8BCD:{code:1006,unit:"\u9996",limit:20,Node:ve,countName:"songCount"},\u4E3B\u64AD\u7535\u53F0:{code:1009,unit:"\u4E2A",limit:100,Node:be,countName:"djRadiosCount"},\u7528\u6237:{code:1002,unit:"\u4F4D",limit:20,Node:Be,countName:"userprofileCount"}},Ee={artist:({item:s})=>{var a;return t(i,{to:`/artist/${s.id}`,className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",children:[e("img",{className:"h-10 object-fit rounded-full",src:`${s.picUrl}?param=60y60`,alt:""}),t("div",{className:"px-2 flex-1 w-0",children:[t("div",{className:"truncate text-sm",children:["\u6B4C\u624B\uFF1A",s.name,((a=s.alias)==null?void 0:a.length)>0&&e("span",{className:"text-gray-400",children:`(${s.alias})`})]}),t("div",{className:"text-gray-400",children:["\u7C89\u4E1D\u6570:",T(s.fansSize),",\u6B4C\u66F2:",s.musicSize]})]})]})},album:({item:s})=>{var a;return t(i,{to:`/playlist/album/${s.id}`,className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",children:[e("img",{className:"h-10",src:`${s.blurPicUrl}?param=60y60`,alt:""}),t("div",{className:"px-2 flex-1 w-0",children:[t("div",{className:"text-sm truncate",children:["\u4E13\u8F91\uFF1A",s.name,((a=s.alias)==null?void 0:a.length)>0&&e("span",{className:"text-gray-400",children:`(${s.alias})`})]}),e("div",{className:"text-gray-400",children:s.artist.name})]})]})},orpheus:({item:s})=>null,new_mlog:({item:s})=>null,playlist:({item:s})=>t(i,{to:`/playlist/music/${s.id}`,className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",title:s.name,children:[e("img",{className:"h-10",src:`${s.coverImgUrl}?param=60y60`,alt:""}),t("div",{className:"px-2 flex-1 w-0",children:[t("div",{className:"text-sm truncate",children:["\u6B4C\u5355\uFF1A",s.name]}),e("div",{className:"text-gray-400",children:s.creator.name})]})]}),concert:({item:s})=>t("a",{target:"_blank",href:s.url,className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",title:s.title,children:[e("img",{className:"h-10",src:`${s.cover}?param=60y60`,alt:""}),t("div",{className:"px-2 flex-1 w-0",children:[t("div",{className:"text-sm truncate",children:["\u6F14\u5531\u4F1A\uFF1A",s.title]}),e("div",{className:"text-gray-400 truncate",children:s.artists})]})]})},_e=({keywords:s})=>{var d;const{data:a,isLoading:r}=Q({keywords:s}),n=(a==null?void 0:a.result)||{};return((d=n==null?void 0:n.orders)==null?void 0:d.length)===0?null:r?e(D,{}):t("div",{className:"py-4",children:[e("div",{className:"text-gray-500",children:"\u4F60\u53EF\u80FD\u611F\u5174\u8DA3"}),e("div",{className:"mt-2 flex gap-3",children:n.orders.map(c=>l.exports.createElement(Ee[c],{item:n[c][0],key:c}))})]})},$e=l.exports.memo(_e),Ae=()=>{var c;const{keywords:s="",type:a=""}=b(),r=E(),{count:n=0}=_($);l.exports.useEffect(()=>{r(q({keywords:s}))},[s]);const d=((c=j[a])==null?void 0:c.unit)||"";return t("div",{className:"domSearch overflow-auto max-h-full flex-auto",children:[t("div",{className:"px-8 py-5",children:[t("div",{className:"h1",children:["\u641C\u7D22 ",s]}),e($e,{keywords:s}),t("div",{className:"mt-5 flex items-center",children:[e("div",{className:"flex gap-4",children:De.map(o=>e(V,{to:encodeURIComponent(o),className:({isActive:m})=>u("text-sm",m&&"font-bold ui_underline"),children:o},o))}),t("div",{className:"ml-auto text-gray-400",children:["\u627E\u5230 ",n,d," ",a]})]})]}),e(J,{})]})},we=l.exports.memo(Ae);const ke=()=>{console.log("entry search");const{keywords:s="",type:a=""}=b(),r=E(),[n,d]=l.exports.useState(1),[c,o]=l.exports.useState({}),[m,h]=l.exports.useState(0),{code:L,limit:x,Node:U,countName:P}=j[a],{keywords:z}=_($),[M,{isLoading:G}]=W();l.exports.useEffect(()=>{r(X({count:m}))},[m]),l.exports.useEffect(()=>{z||r(Y({keywords:s}))},[s]);const H=async p=>{var f;const N=await M({keywords:s,limit:x,type:L,offset:(p-1)*x}),y=((f=N==null?void 0:N.data)==null?void 0:f.result)||{};o(y),h(y[P])},v=p=>{d(p),H(p)};return l.exports.useEffect(()=>{r(Z()),v(1)},[s,a]),G?e("div",{className:"pt-48 flex-center",children:e(D,{})}):t(ae,{children:[l.exports.createElement(U,c),e(ee,{total:Math.ceil(m/x),page:n,func:v})]})},Se=l.exports.memo(ke),Ie=()=>e(O,{children:t(g,{path:":keywords",element:e(we,{}),children:[e(g,{path:":type",element:e(Se,{})}),e(g,{index:!0,element:e(K,{to:"\u5355\u66F2",replace:!0})})]})}),sa=l.exports.memo(Ie);export{sa as default};
