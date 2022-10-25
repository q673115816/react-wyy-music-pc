import{r as a}from"./react.0a2f695e.js";import{aq as g,J as N,ar as F,as as B}from"./@tabler/icons.cc549a81.js";import{aq as D,L as x,m as y,ac as b,u as k,ar as $,as as L,at as _,au as R}from"./index.a14e8238.js";import{L as o}from"./react-router-dom.e3e78f4f.js";import{G as T}from"./Gender.aca5fa5b.js";import{j as e,a as t,F as I}from"./qrcode.react.84002e4a.js";import{D as E}from"./index.c0d38b29.js";import{s as w}from"./react-use.cc42aba6.js";import{g as C,h as z,i as u,N as G}from"./react-router.8807b3c5.js";import{a as p}from"./classnames.9558900f.js";import"./lodash.f41ef0b4.js";import"./react-dom.d348259d.js";import"./react-redux.7ec13431.js";import"./immer.76e704b2.js";import"./redux-persist.c3a378af.js";import"./axios.556b107a.js";import"./rxjs.6644997a.js";import"./react-transition-group.5a807b1e.js";import"./color.a5f8aeb5.js";import"./dayjs.6fdda85a.js";const q=({limit:s})=>{const{data:i,isLoading:c}=D({limit:s}),r=(i==null?void 0:i.hot)||[];return c?e(x,{}):e("div",{className:"list",children:r.map(l=>t(o,{to:`/friend/${l.actId}`,className:"py-1 pl-5 flex hover:bg-gray-100",children:[e("div",{className:"cover w-8 h-8 flex-none",children:e("img",{className:"rounded",src:`${l.sharePicUrl}?param=50y50`,alt:""})}),t("div",{className:"content px-2 flex-auto w-0",children:[t("div",{className:"title flex items-center",children:["#",e("span",{className:"truncate",children:l.title}),"#"]}),e("div",{className:"participateCount text-gray-300",children:`${l.participateCount}\u4EBA\u53C2\u4E0E`})]})]},l.actId))})},v=a.exports.memo(q),S=()=>{const{profile:s}=y(b),i=k();return t("div",{className:"flex-none",style:{width:250},children:[e("div",{className:"",children:s.userId?t("div",{className:"py-8 bg-gray-100",children:[t("div",{className:"top flex gap-2 px-5 items-start",children:[e(o,{to:`/user/${s.userId}`,className:"avatar w-12 h-12 rounded-full overflow-hidden flex-none",children:e("img",{className:"",src:`${s.avatarUrl}?param=100y100`,alt:""})}),t("div",{className:"flex-1 w-0",children:[t("div",{className:"",children:[e(o,{to:`/user/${s.userId}`,children:s.nickname}),"\xA0",e(T,{gender:s.gender,size:14})]}),e("div",{className:"break-all text-gray-500",children:s.signature})]})]}),t("div",{className:"infos flex divide-x text-center mt-4",children:[t(o,{to:`/user/${s.userId}/dynamic`,className:"info flex-1 ui_text_black_hover",children:[e("div",{className:"num text-xl",children:s.eventCount}),e("div",{className:"string",children:"\u52A8\u6001"})]}),t(o,{to:`/user/${s.userId}/follow`,className:"info flex-1 ui_text_black_hover",children:[e("div",{className:"num text-xl",children:s.follows}),e("div",{className:"string",children:"\u5173\u6CE8"})]}),t(o,{to:`/user/${s.userId}/fans`,className:"info flex-1 ui_text_black_hover",children:[e("div",{className:"num text-xl",children:s.followeds}),e("div",{className:"string",children:"\u7C89\u4E1D"})]})]})]}):t("div",{className:"nologin px-5",children:[e("div",{style:{height:170}}),e("div",{className:"tips text-center text-gray-500",children:"\u767B\u5F55\u7F51\u6613\u4E91\u97F3\u4E50\uFF0C\u53EF\u4EE5\u4EAB\u53D7\u65E0\u9650\u6536\u85CF\u7684\u4E50\u8DA3\uFF0C\u5E76\u4E14\u65E0\u9650\u540C\u6B65\u5230\u624B\u673A"}),e("button",{type:"button",className:"ui_theme_bg_color text-white w-full h-10 mt-4 rounded-full",onClick:()=>i($()),children:"\u7ACB\u5373\u767B\u5F55"})]})}),t("div",{className:"mt-5",children:[t("div",{className:"flex px-5 mb-2.5",children:[e("span",{className:"font-bold",children:"\u70ED\u95E8\u8BDD\u9898"}),e(o,{className:"text-gray-400 ml-auto",to:"/friend/top",children:"\u66F4\u591A >"})]}),e(v,{limit:5})]}),e("div",{className:"mt-8",children:t("div",{className:"flex px-5 mb-2.5",children:[e("span",{className:"font-bold",children:"\u8BA4\u8BC6\u7684\u4EBA"}),e(o,{className:"text-gray-400 ml-auto",to:"/friend/acquaintance",children:"\u66F4\u591A >"})]})}),e("div",{className:"mt-8",children:e("div",{className:"flex px-5 mb-2.5",children:e("span",{className:"font-bold",children:"\u6DFB\u52A0\u5173\u6CE8"})})})]})},j=a.exports.memo(S),P=({lasttime:s,setLasttime:i})=>{var f;const c=a.exports.useRef(null),r=w(c,{root:null,rootMargin:"0px",threshold:1}),[l,{data:n,isSuccess:d,isFetching:m,isUninitialized:h,isLoading:A}]=L();return a.exports.useEffect(()=>{h&&r&&r.intersectionRatio>0&&l({lasttime:s})},[r]),e("div",{ref:c,children:A?e("div",{className:"flex-center py-4",children:e(x,{})}):((f=n==null?void 0:n.event)==null?void 0:f.length)>0&&e(E,{list:(n==null?void 0:n.event)||[]})})},Q=a.exports.memo(P),U=()=>{const[s,i]=a.exports.useState([0]),{isLogin:c}=y(b),r=a.exports.useCallback(l=>{i(n=>[...n,l])},[]);return e("div",{className:"h-full overflow-auto",children:t("div",{className:"flex divide-x min-h-full",children:[t("div",{className:"relative flex-1 w-0",children:[t("div",{className:"h-14 px-8 flex items-center sticky top-0 z-10 bg-white",children:[e("span",{className:"h1",children:"\u52A8\u6001"}),t("button",{type:"button",className:"flex-center ml-4 ui_theme_bg_color text-sm text-white h-8 px-4 rounded-full",children:[e(g,{size:20,stroke:1}),"\u53D1\u52A8\u6001"]})]}),e("div",{className:"domFriend_content",children:c?e("div",{className:"px-8",children:s.map(l=>e(Q,{lasttime:l,setLasttime:r},l))}):e("div",{className:"empty text-center text-gray-400 pt-48",children:"\u6682\u65E0\u52A8\u6001"})})]}),e(j,{})]})})},O=a.exports.memo(U),H=()=>{var d;const{id:s=""}=C(),i=a.exports.useRef(null),c=w(i,{root:void 0,rootMargin:"0px",threshold:1}),{data:r,isLoading:l}=_({actid:s}),n=(r==null?void 0:r.act)||{};return l?null:t(I,{children:[t("div",{style:{display:c&&c.intersectionRatio<1?void 0:"none"},className:"sticky top-0 border-b flex justify-end py-2 z-10 bg-white gap-3 inset-x-0 px-5",children:[t("button",{type:"button",className:"border rounded-full flex-center px-4 py-1 text-sm hover:bg-gray-50 text-red-500",children:[e(g,{}),"\u7ACB\u5373\u53C2\u4E0E"]}),t("button",{type:"button",className:"border rounded-full flex-center px-4 py-1 text-sm hover:bg-gray-50",children:[e(N,{}),"\u5206\u4EAB"]}),e("button",{type:"button",className:"border rounded-full flex-center px-4 py-1 text-sm hover:bg-gray-50",children:e(F,{})})]}),t("div",{className:"border-b px-8",ref:i,children:[t("div",{className:"rounded overflow-hidden border relative",children:[e("img",{src:n.coverPCUrl,loading:"lazy",className:"h-56 object-cover block",alt:""}),t("div",{className:"absolute inset-0 bg-black bg-opacity-20 flex-center flex-col",children:[t("div",{style:{minWidth:210},className:"relative max-w-sm min-w- border-t border-b border-white border-opacity-60 py-6 text-white text-xl flex-center text-center flex-col ",children:[t("div",{className:"flex",children:["#",e("span",{className:"truncate",children:n.title}),"#"]}),e("span",{className:"absolute inset-x-0 text-xs whitespace-nowrap top-full transform -translate-y-1/2",children:`${n.participateCount}\u4EBA\u53C2\u4E0E`})]}),t("button",{type:"button",className:"bg-white flex-center h-9 mt-4 w-52 rounded text-red-500 bg-opacity-90 hover:bg-opacity-100",children:[e(B,{size:16}),"\u7ACB\u5373\u53C2\u4E0E"]})]}),e("button",{type:"button",className:"absolute m-4 w-8 h-8 flex-center top-0 right-0 border text-white border-gray-500 rounded-full bg-black bg-opacity-50",children:e(N,{size:24,stroke:1})})]}),e("ul",{className:"pb-8 text-sm text-gray-500 leading-6",children:(d=n.text)==null?void 0:d.map((m,h)=>e("li",{children:m},h))})]})]})},M=a.exports.memo(H),J=({actid:s})=>{const{data:i,isLoading:c}=R({actid:s}),r=(i==null?void 0:i.events)||[];return c?e(x,{}):e(E,{list:r})},V=a.exports.memo(J),W=()=>{const{id:s=""}=C();return t("div",{className:"flex divide-x h-full overflow-auto",id:"\u52A8\u6001",children:[e("div",{className:"flex-auto w-0 relative",children:t("div",{className:"pt-4",children:[e(M,{}),t("div",{className:"px-8",children:[e("div",{className:"text-gray-500 mt-4 text-sm",children:"\u70ED\u95E8\u52A8\u6001"}),e(V,{actid:s})]})]})}),t("div",{className:"flex-none",style:{width:230},children:[e("div",{className:"p-4 text-sm text-gray-700",children:"\u63A8\u8350\u8BDD\u9898"}),e(v,{limit:10})]})]})},K=a.exports.memo(W),X=a.exports.memo(function(){const[i,c]=a.exports.useState("day"),[r,l]=a.exports.useState([]),n=async()=>{l([{title:"\u4F60\u7684\u604B\u7231\u4EBA\u683C\u662F\u4EC0\u4E48",count:916},{title:"\u4F60\u7684\u604B\u7231\u4EBA\u683C\u662F\u4EC0\u4E48",count:916}])};return a.exports.useEffect(()=>{n()},[i]),e("div",{className:" h-full overflow-auto",children:t("div",{className:"flex divide-x",children:[t("div",{className:"flex-auto w-0",children:[t("div",{className:"h-16 px-8 flex items-center",children:[e("span",{className:"text-lg font-bold",children:"\u8BDD\u9898\u98D9\u5347\u699C"}),t("div",{className:"ml-auto space-x-3 text-gray-300",children:[e("button",{type:"button",onClick:()=>c("day"),className:p("hover:text-gray-700",i==="day"&&"text-gray-700"),children:"24\u5C0F\u65F6"}),e("span",{children:"|"}),e("button",{type:"button",onClick:()=>c("week"),className:p("hover:text-gray-700",i==="week"&&"text-gray-700"),children:"7\u5929"})]})]}),e("div",{children:r.map((d,m)=>t("div",{className:p("flex items-center h-20 hover:bg-gray-100",m%2===1&&"bg-gray-50"),children:[e("div",{className:"w-16 flex-center text-sm ",children:m+1}),e("div",{className:"w-14 h-14",children:e("img",{src:"",alt:""})}),t("div",{children:[e("div",{className:"text-lg",children:d.title}),t("div",{className:"text-gray-300",children:[d.count,"\u4EBA\u53C2\u4E0E"]})]})]},m))})]}),t("div",{className:"domFriend_right flex-none",style:{width:230},children:[e("div",{className:"p-4 text-sm text-gray-700",children:"\u63A8\u8350\u8BDD\u9898"}),e(v,{limit:10})]})]})})}),Y=a.exports.memo(function(){return t("div",{className:"",children:[e("div",{className:"text-xl p-8 font-bold",children:"\u5BFB\u627E\u5E76\u9080\u8BF7\u597D\u53CB"}),t("div",{className:"px-8",children:[t("div",{className:"space-x-2 text-gray-500",children:[e("button",{type:"button",children:"\u5DF2\u67091\u4F4D\u597D\u53CB\u52A0\u5165"}),e("span",{children:"|"}),e("button",{type:"button",children:"\u9080\u8BF7\u53E6\u59163\u4F4D\u597D\u53CB\u52A0\u5165"})]}),e("div",{children:"TODO"})]})]})}),Z=()=>e("div",{}),ee=a.exports.memo(Z),te=()=>t(z,{children:[e(u,{index:!0,element:e(O,{})}),e(u,{path:"top",element:e(X,{})}),e(u,{path:"Acquaintance",element:e(Y,{})}),e(u,{path:":id",element:e(K,{})}),t(u,{path:"redirect",children:[e(u,{index:!0,element:e(G,{to:"..",replace:!0})}),e(u,{path:"keywords",element:e(ee,{})})]})]}),Ee=te;export{Ee as default};
