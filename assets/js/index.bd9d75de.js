import{r as o}from"./react.0a2f695e.js";import{N as F,L as M}from"./react-router-dom.e3e78f4f.js";import{a as i,j as e}from"./qrcode.react.84002e4a.js";import{O as R,j as $,N as B}from"./react-router.8807b3c5.js";import{a as c}from"./classnames.9558900f.js";import{u as D}from"./useInfinite.22451543.js";import{G as d}from"./Home.c8b19818.js";import{u as C,m as y,bl as L,bm as m,bn as G,bo as I,bp as v,L as l,bq as S,br as f,bs as w,bt as j,bu as O}from"./index.a14e8238.js";import{U}from"./@tabler/icons.cc549a81.js";import{G as Q}from"./GridMVToplist.2e5ae829.js";import{w as g}from"./react-use.cc42aba6.js";import"./lodash.f41ef0b4.js";import"./dayjs.6fdda85a.js";import"./react-dom.d348259d.js";import"./react-redux.7ec13431.js";import"./immer.76e704b2.js";import"./redux-persist.c3a378af.js";import"./axios.556b107a.js";import"./rxjs.6644997a.js";import"./react-transition-group.5a807b1e.js";import"./color.a5f8aeb5.js";const T=["\u89C6\u9891","MV"],z=()=>i("div",{className:"flex flex-col h-full",children:[e("div",{className:"ui_header text-base space-x-4",children:T.map(t=>e(F,{className:({isActive:r})=>r?"text-xl ui_underline font-bold":"",to:encodeURIComponent(t),children:t},t))}),e(R,{})]}),H=o.exports.memo(z);const q=({id:t})=>{const r=C(),{groupList:s}=y(L);return i("div",{className:"group_select_box absolute top-100 p-5 bg-white overflow-auto shadow",children:[e("div",{className:"border-b pb-2",children:e("button",{type:"button",className:c("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",t===0?"text-red-500 bg-red-50":""),onClick:()=>r(m({id:0})),children:"\u5168\u90E8\u89C6\u9891"})}),e("div",{className:"group_select_list grid grid-cols-6 gap-y-5 p-4",children:s.map(a=>e("button",{type:"button",className:c("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",a.id===t?"text-red-500 bg-red-50":""),onClick:()=>r(m({id:a.id})),children:a.name},a.id))})]})},P=o.exports.memo(q),J=()=>{const t=C(),{id:r,initStatus:s,groupList:a,categoryList:V,videoList:_}=y(L),[x,A]=o.exports.useState(!1),k=o.exports.useMemo(()=>{var u;return((u=a.find(E=>E.id===Number(r)))==null?void 0:u.name)||"\u5168\u90E8\u89C6\u9891"},[r]),h=o.exports.useRef(null),b=o.exports.useRef(null);return D(()=>t(G(r)),h,b),o.exports.useEffect(()=>(t(I()),()=>{t(v())}),[]),o.exports.useEffect(()=>{t(v())},[r]),i("div",{className:"px-8 overflow-auto flex-auto",ref:h,children:[i("div",{className:"flex items-center justify-between",children:[i("div",{className:"relative z-10",children:[i("button",{type:"button",className:"group_select_button border rounded-full hover:bg-gray-100 text-sm",onClick:()=>A(!x),children:[k,">"]}),x&&e(P,{id:r})]}),e("div",{className:"divide-x flex",children:V.map(u=>e("div",{children:e("button",{type:"button",className:c("rounded-full px-2 mx-1",r===u.id?"bg-red-50 text-red-500":"ui_text_black_hover"),onClick:()=>t(m({id:u.id})),children:u.name})},u.id))})]}),i("div",{className:"my-4",children:[e(d,{list:_}),e("div",{ref:b,className:"flex-center",children:e(l,{})})]})]})},K=o.exports.memo(J),W=({children:t,url:r,title:s,Category:a})=>i("div",{className:"",children:[i("div",{className:"mt-8 mb-5 flex justify-between items-center",children:[i(M,{to:r,className:"font-bold text-base flex items-center",children:[s,e(U,{size:20})]}),a]}),t]}),n=o.exports.memo(W),X=()=>{const{data:t,isLoading:r}=S({limit:6});return r?e(l,{}):e(d,{list:f(t.data)})},Y=o.exports.memo(X),Z=()=>{const{data:t,isLoading:r}=w({order:"\u6700\u70ED",limit:6});return r?e(l,{}):e(d,{list:f(t.data)})},ee=o.exports.memo(Z),te=({area:t})=>{const{data:r,isLoading:s}=j({area:t,limit:6});return s?e(l,{}):e(d,{list:f(r.data)})},re=o.exports.memo(te),oe=({area:t})=>{const{data:r,isLoading:s}=O({area:t,limit:6});return s?e(l,{}):e(Q,{list:r.data,schema:[["\u8BC4\u8BBA","\u64AD\u653E"],["\u6536\u85CF","\u5206\u4EAB","\u4E0B\u8F7DMV","\u590D\u5236\u94FE\u63A5"]]})},se=o.exports.memo(oe),p=["\u5185\u5730","\u6E2F\u53F0","\u6B27\u7F8E","\u65E5\u672C","\u97E9\u56FD"],ie=({onClick:t,area:r})=>e("div",{className:"flex divide-x gap-x-1",children:p.map(s=>e("div",{className:"item",children:e("button",{onClick:()=>t(s),type:"button",className:c("link rounded-full px-2.5",r===s?"text-red-500 bg-red-50":"ui_text_black_hover"),children:s})},s))}),N=o.exports.memo(ie),ae=()=>{const[t,r]=g("firstArea",p[0]),[s,a]=g("topArea",p[0]);return i("div",{className:"px-8 overflow-auto max-h-full flex-auto",children:[e(n,{title:"\u6700\u65B0MV",url:`/mv-all?order=\u6700\u65B0&area=${t}`,Category:e(N,{onClick:r,area:t}),children:e(re,{area:t})}),e(n,{title:"\u70ED\u64ADMV",url:"/mv-all?order=\u6700\u70ED",children:e(ee,{})}),e(n,{title:"\u7F51\u6613\u51FA\u54C1",url:"/mv-all?type=\u7F51\u6613\u51FA\u54C1&order=\u6700\u65B0",children:e(Y,{})}),e(n,{title:"MV\u6392\u884C\u699C",url:"/toplist-mv",Category:e(N,{onClick:a,area:s}),children:e(se,{area:s})})]})},ue=o.exports.memo(ae),le=()=>$([{path:"/*",element:e(H,{}),children:[{path:encodeURIComponent("\u89C6\u9891"),element:e(K,{})},{path:"MV",element:e(ue,{})}]},{index:!0,element:e(B,{to:encodeURIComponent("\u89C6\u9891"),replace:!0})}]),Me=o.exports.memo(le);export{Me as default};