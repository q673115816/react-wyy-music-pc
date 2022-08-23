import{r as l}from"./react.b31a8c6f.js";import{av as w,ap as C,D as f}from"./@tabler/icons.addb6b49.js";import{aA as _,i as P,a6 as I,t as k,l as L,L as R}from"./index.d8af5014.js";import{b as p,N as y,O as $,L as m,e as B,d as g}from"./react-router-dom.a24b11ac.js";import{c as d}from"./react-slick.acd8094e.js";import{a,j as e}from"./qrcode.react.3591e685.js";import{P as z}from"./PlaylistAsyncReplace.ee51f331.js";import{u as A}from"./useInfinite.dbcbd6f2.js";import"./lodash.f41ef0b4.js";import"./react-dom.5b11e026.js";import"./react-redux.47a27303.js";import"./immer.9a3c9cc9.js";import"./axios.fa0829fd.js";import"./store.066dccc1.js";import"./rxjs.3527ed23.js";import"./react-use.a43874bd.js";import"./react-transition-group.9b01a212.js";const E=({tags:n,handleHidden:o})=>{const{cat:i}=p();return a("div",{className:"absolute divide-y bg-white top-8 right-0 z-10 shadow rounded-lg",style:{width:510},children:[e("div",{className:"py-4 px-6",children:e(y,{className:({isActive:s})=>d("item hover:ui_themeColor text-sm",s&&"ui_themeColor"),onClick:o,to:"\u5168\u90E8\u6B4C\u5355",children:e("span",{className:d("inline-flex inner px-3 py-1 rounded-full overflow-hidden",{ui_bg_opacity:i==="\u5168\u90E8\u6B4C\u5355"}),children:"\u5168\u90E8\u6B4C\u5355"})})}),e("div",{className:"p-6 grid grid-cols-5 gap-y-4",children:n.map(s=>e(y,{onClick:o,to:encodeURIComponent(s.name),className:({isActive:c})=>d("item hover:ui_themeColor text-sm whitespace-nowrap",c&&"ui_themeColor"),children:e("span",{className:d("inline-flex inner px-3 py-1 rounded-full overflow-hidden",{ui_bg_opacity:s.name===i}),children:s.name})},s.id))})]})},j=l.exports.memo(E),D=()=>{const{cat:n}=p(),[o,i]=l.exports.useState(!1),{data:s}=_(),c=(s==null?void 0:s.tags)||[],h=l.exports.useCallback(()=>i(!1),[]);return a("div",{className:"px-8 max-h-full overflow-auto flex-auto",children:[a("div",{className:"py-3 flex items-center justify-between",children:[a("div",{className:"flex items-center",children:[e("span",{className:"font-bold text-xl",children:"\u7CBE\u54C1\u6B4C\u5355"}),"\xA0",e("a",{href:"https://music.163.com/#/topic?id=202001",className:"flex-center w-4 h-4 border rounded-full text-gray-400 hover:text-gray-500 border-current",children:"?"})]}),a("div",{className:"relative",children:[a("button",{onClick:()=>i(!o),type:"button",className:"flex items-center border hover:bg-gray-100 rounded-full px-2 py-1",children:[e(w,{size:16,stroke:1}),n]}),o&&e(j,{tags:c,handleHidden:h})]})]}),e($,{})]})},H=l.exports.memo(D),Q=()=>{const{cat:n=""}=p(),o=l.exports.useRef(0),[i,s]=P([]),[c,{isLoading:h}]=I(),x=l.exports.useRef(null);return l.exports.useRef(null),A(async()=>{var t,u;try{const r=await c({cat:n,limit:20,before:o.current}),v=((t=r==null?void 0:r.data)==null?void 0:t.playlists)||[],N=(u=r==null?void 0:r.data)==null?void 0:u.lasttime;o.current=N,s(b=>{b.push(...v)})}catch(r){console.log(r)}},null,x),l.exports.useEffect(()=>{s([])},[n]),a("div",{className:"grid gap-6 grid-cols-2",children:[i.map(t=>{var u,r;return a("div",{className:"item flex",children:[a("div",{className:"cover w-32 h-32 rounded-lg group overflow-hidden flex-none relative",children:[a(m,{to:`/playlist/music/${t.id}`,className:"",children:[e("span",{className:"absolute top-0 left-0 p-0.5 w-8 h-8 bg-yellow-500 text-white ui_angle_top_left",children:e(C,{size:14,className:"transform -rotate-45"})}),e("img",{loading:"lazy",src:`${t.coverImgUrl}?param=200y200`,className:"aspect-square",alt:""}),a("div",{className:"absolute text-white top-0 right-0 py-1 px-2 flex-center",children:[e(f,{size:12}),k(t.playCount)]})]}),e(z,{id:t.id,className:"playArrow opacity-0 group-hover:opacity-100 ui_themeColor absolute right-0 bottom-0 m-2 p-2 bg-white bg-opacity-90 rounded-full",children:e(f,{size:16,className:"fill-current"})})]}),a("div",{className:"ml-2 flex-auto w-0 pt-5",children:[e("div",{className:"text-sm truncate ui_text_black_hover",children:e(m,{to:`/playlist/music/${t.id}`,className:"",children:t.name})}),a("div",{className:"mt-3 flex items-center ui_text_gray_hover",children:["by\xA0",e(m,{to:`/user/${t.userId}`,className:"",children:t.creator.nickname}),"\xA0",((r=(u=t==null?void 0:t.creator)==null?void 0:u.avatarDetail)==null?void 0:r.identityIconUrl)&&e("img",{className:"w-3 h-3",src:t.creator.avatarDetail.identityIconUrl,alt:""})]}),a("div",{className:"mt-4 text-gray-300 flex items-center",children:[e(L,{text:t.tag,className:"flex-none mr-1"}),e("span",{className:"flex-auto truncate",children:t.copywriter})]})]})]},t.id)}),e("div",{ref:x,children:e(R,{})})]})},U=l.exports.memo(Q),q=()=>B([{index:!0,element:e(g,{to:"\u5168\u90E8\u6B4C\u5355",replace:!0})},{path:":cat",element:e(H,{}),children:[{index:!0,element:e(g,{to:"1",replace:!0})},{path:":page",element:e(U,{})}]}]),le=l.exports.memo(q);export{le as default};
