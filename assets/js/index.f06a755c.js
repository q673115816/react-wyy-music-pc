import{r as o}from"./react.0a2f695e.js";import{au as b,an as C,w as f}from"./@tabler/icons.d755a6ec.js";import{aA as _,i as k,a4 as P,t as $,k as I,L}from"./index.ba361b16.js";import{N as y,L as d}from"./react-router-dom.256d9b78.js";import{a as m}from"./classnames.9558900f.js";import{a,j as e}from"./qrcode.react.84002e4a.js";import{e as p,O as R,h as B,N as g}from"./react-router.d1bb31aa.js";import{P as E}from"./PlaylistAsyncReplace.cee0f092.js";import{u as z}from"./useInfinite.22451543.js";import"./lodash.f41ef0b4.js";import"./react-dom.d348259d.js";import"./react-redux.49573eed.js";import"./immer.76e704b2.js";import"./redux-persist.b0b12bc5.js";import"./axios.8a0dc616.js";import"./rxjs.22301260.js";import"./react-use.fd5829ae.js";import"./react-transition-group.2770fa82.js";import"./color.a5f8aeb5.js";import"./dayjs.6fdda85a.js";import"./history.9736f6f1.js";const A=({tags:n,handleHidden:l})=>{const{cat:i}=p();return a("div",{className:"absolute divide-y bg-white top-8 right-0 z-10 shadow rounded-lg",style:{width:510},children:[e("div",{className:"py-4 px-6",children:e(y,{className:({isActive:s})=>m("item hover:ui_themeColor text-sm",s&&"ui_themeColor"),onClick:l,to:"\u5168\u90E8\u6B4C\u5355",children:e("span",{className:m("inline-flex inner px-3 py-1 rounded-full overflow-hidden",{ui_bg_opacity:i==="\u5168\u90E8\u6B4C\u5355"}),children:"\u5168\u90E8\u6B4C\u5355"})})}),e("div",{className:"p-6 grid grid-cols-5 gap-y-4",children:n.map(s=>e(y,{onClick:l,to:encodeURIComponent(s.name),className:({isActive:c})=>m("item hover:ui_themeColor text-sm whitespace-nowrap",c&&"ui_themeColor"),children:e("span",{className:m("inline-flex inner px-3 py-1 rounded-full overflow-hidden",{ui_bg_opacity:s.name===i}),children:s.name})},s.id))})]})},j=o.exports.memo(A),H=()=>{const{cat:n}=p(),[l,i]=o.exports.useState(!1),{data:s}=_(),c=(s==null?void 0:s.tags)||[],h=o.exports.useCallback(()=>i(!1),[]);return a("div",{className:"px-8 max-h-full overflow-auto flex-auto",children:[a("div",{className:"py-3 flex items-center justify-between",children:[a("div",{className:"flex items-center",children:[e("span",{className:"font-bold text-xl",children:"\u7CBE\u54C1\u6B4C\u5355"}),"\xA0",e("a",{href:"https://music.163.com/#/topic?id=202001",className:"flex-center w-4 h-4 border rounded-full text-gray-400 hover:text-gray-500 border-current",children:"?"})]}),a("div",{className:"relative",children:[a("button",{onClick:()=>i(!l),type:"button",className:"flex items-center border hover:bg-gray-100 rounded-full px-2 py-1",children:[e(b,{size:16,stroke:1}),n]}),l&&e(j,{tags:c,handleHidden:h})]})]}),e(R,{})]})},Q=o.exports.memo(H),U=()=>{const{cat:n=""}=p(),l=o.exports.useRef(0),[i,s]=k([]),[c,{isLoading:h}]=P(),x=o.exports.useRef(null);return o.exports.useRef(null),z(async()=>{var t,u;try{const r=await c({cat:n,limit:20,before:l.current}),N=((t=r==null?void 0:r.data)==null?void 0:t.playlists)||[],v=(u=r==null?void 0:r.data)==null?void 0:u.lasttime;l.current=v,s(w=>{w.push(...N)})}catch(r){console.log(r)}},null,x),o.exports.useEffect(()=>{s([])},[n]),a("div",{className:"grid gap-6 grid-cols-2",children:[i.map(t=>{var u,r;return a("div",{className:"item flex",children:[a("div",{className:"cover w-32 h-32 rounded-lg group overflow-hidden flex-none relative",children:[a(d,{to:`/playlist/music/${t.id}`,className:"",children:[e("span",{className:"absolute top-0 left-0 p-0.5 w-8 h-8 bg-yellow-500 text-white ui_angle_top_left",children:e(C,{size:14,className:"transform -rotate-45"})}),e("img",{loading:"lazy",src:`${t.coverImgUrl}?param=200y200`,className:"aspect-square",alt:""}),a("div",{className:"absolute text-white top-0 right-0 py-1 px-2 flex-center",children:[e(f,{size:12}),$(t.playCount)]})]}),e(E,{id:t.id,className:"playArrow opacity-0 group-hover:opacity-100 ui_themeColor absolute right-0 bottom-0 m-2 p-2 bg-white bg-opacity-90 rounded-full",children:e(f,{size:16,className:"fill-current"})})]}),a("div",{className:"ml-2 flex-auto w-0 pt-5",children:[e("div",{className:"text-sm truncate ui_text_black_hover",children:e(d,{to:`/playlist/music/${t.id}`,className:"",children:t.name})}),a("div",{className:"mt-3 flex items-center ui_text_gray_hover",children:["by\xA0",e(d,{to:`/user/${t.userId}`,className:"",children:t.creator.nickname}),"\xA0",((r=(u=t==null?void 0:t.creator)==null?void 0:u.avatarDetail)==null?void 0:r.identityIconUrl)&&e("img",{className:"w-3 h-3",src:t.creator.avatarDetail.identityIconUrl,alt:""})]}),a("div",{className:"mt-4 text-gray-300 flex items-center",children:[e(I,{text:t.tag,className:"flex-none mr-1"}),e("span",{className:"flex-auto truncate",children:t.copywriter})]})]})]},t.id)}),e("div",{ref:x,children:e(L,{})})]})},q=o.exports.memo(U),D=()=>B([{index:!0,element:e(g,{to:"\u5168\u90E8\u6B4C\u5355",replace:!0})},{path:":cat",element:e(Q,{}),children:[{index:!0,element:e(g,{to:"1",replace:!0})},{path:":page",element:e(q,{})}]}]),ce=o.exports.memo(D);export{ce as default};