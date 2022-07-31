import{r as t}from"./react.4f2eb426.js";import{Z as p,a5 as f,a6 as u,d as x,a7 as v,L as N}from"./index.42239416.js";import{L as i}from"./react-router-dom.32e50d5b.js";import{D as b,am as g,an as y,H as C,U as _,O as w,K as I,ax as $}from"./@tabler/icons.1bddd3c4.js";import{a,j as e,F as d}from"./qrcode.react.d8dda151.js";import{P as B}from"./PicsViewer.ecf4d0cb.js";const k=({item:s})=>s?a(p,{id:s.id,className:"bg-gray-100 hover:bg-gray-200 flex w-full mt-2 rounded p-2.5",children:[a("div",{className:"relative overflow-hidden rounded flex-none",children:[e("img",{className:"rounded w-10 h-10",src:`${s.album.blurPicUrl}?param=40y40`,alt:""}),e("div",{className:"ico flex-center absolute inset-0 m-auto bg-white rounded-full w-6 h-6 ui_themeColor",children:e(b,{size:14,className:"fill-current"})})]}),a("div",{className:"aside text-left px-3 w-0 flex-auto",children:[e("div",{className:"name",children:s.name}),e("div",{className:"artist truncate mt-1 text-gray-400",children:s.artists.map(({name:n})=>n).join(" / ")})]})]}):null,A=t.exports.memo(k),E=({item:s})=>s?a(i,{to:`/artist/${s.id}`,className:"mt-2 flex items-center p-2 h-14 rounded bg-gray-100 hover:bg-gray-200",children:[e("div",{className:"w-10 h-10 rounded",children:e("img",{src:s.img80x80,className:"rounded w-full h-full object-cover",alt:""})}),e("div",{className:"px-3",children:`\u6B4C\u624B\uFF1A${s.name}`})]}):null,F=t.exports.memo(E),D=({handleCheck:s})=>{const[n,o]=t.exports.useState(!1);return a("div",{className:"relative",children:[e("button",{onClick:()=>o(!n),type:"button",className:"block ui_text_black_hover",children:e(C,{size:20,stroke:1})}),n&&e("div",{className:"absolute mt-2 left-0",children:e(f,{handleHide:()=>o(!1),handleCheck:s})})]})},S=()=>{t.exports.useState("");const s=t.exports.useRef(window.getSelection()),n=t.exports.useRef(),o=t.exports.useRef(null),r=()=>{n.current=s.current.getRangeAt(0),console.log(n),n.current},l=c=>{document.execCommand("insertText",!1,c)};return t.exports.useEffect(()=>{},[]),a("div",{className:"write",children:[e("div",{ref:o,contentEditable:"true",className:"h-20 border bg-white rounded focus:outline-none px-3 py-1",onSelect:r}),a("div",{className:"help flex mt-2",children:[a("div",{className:"flex space-x-2 items-center",children:[e(D,{handleCheck:l}),e("button",{type:"button",className:"ui_text_black_hover",children:e(g,{size:20,stroke:1})}),e("button",{type:"button",className:"ui_text_black_hover",children:e(y,{size:20,stroke:1})})]}),e("button",{className:"ml-auto border border-gray-400 px-4 py-1 rounded-full hover:bg-gray-300",type:"button",children:"\u8BC4\u8BBA"})]})]})},R=t.exports.memo(S),j=({comment:s})=>a("div",{className:"flex py-4 px-3",children:[e(i,{to:`/user/${s.user.userId}`,className:"avatar w-10 h-10 rounded-full border flex-none",children:e("img",{className:"rounded-full w-full h-full",src:`${s.user.avatarUrl}?param=40y40`,alt:""})}),a("div",{className:"commentContent flex-1 pl-3 select-text",children:[a("div",{className:"",children:[e(i,{to:`/user/${s.user.userId}`,className:"ui_link",children:`${s.user.nickname}\uFF1A`}),u(s.content)]}),s.beReplied.length>0&&a("div",{className:"bg-white px-2 py-1 mt-2 rounded",children:[a(i,{to:`/user/${s.beReplied[0].user.userId}`,className:"ui_link",children:["@",s.beReplied[0].user.nickname,"\uFF1A"]}),e("span",{className:"text-gray-500",children:u(s.beReplied[0].content)})]}),e("div",{className:"mt-2",children:e("span",{className:"text-gray-300",children:x(s.time).format("YYYY\u5E74MM\u6708DD\u65E5 HH:mm:ss")})})]})]},s.commentId),h=t.exports.memo(j),T=({threadId:s})=>{const{data:n,isLoading:o}=v({threadId:s}),{comments:r=[],hotComments:l=[]}=n||{};return o?e(N,{}):a(d,{children:[l.length>0&&a(d,{children:[e("div",{className:"text-sm px-3 text-gray-500 font-bold",children:"\u7CBE\u5F69\u8BC4\u8BBA"}),e("div",{className:"divide-y",children:l.slice(0,10).map(c=>e(h,{comment:c},c.commentId))})]}),r.length>0?a(d,{children:[a("div",{className:"text-sm px-3 text-gray-500 font-bold",children:["\u6700\u65B0\u8BC4\u8BBA",`(${r.length})`]}),e("div",{className:"divide-y",children:r.slice(0,10).map(c=>e(h,{comment:c},c.commentId))})]}):e("div",{className:"flex-center py-10 text-gray-500",children:"\u8FD8\u6CA1\u6709\u8BC4\u8BBA\u54E6\uFF0C\u5FEB\u6765\u62A2\u6C99\u53D1~"})]})},z=t.exports.memo(T),P=({threadId:s})=>a("div",{className:"comment bg-gray-100 mt-3 rounded",children:[e("div",{className:"p-3",children:e(R,{})}),e(z,{threadId:s})]}),U=t.exports.memo(P),H={18:"\u5206\u4EAB\u5355\u66F2",36:"\u5206\u4EAB\u6B4C\u624B"},L=({item:s={},commentIsShow:n,handleToggleComment:o})=>{var l,c,m;const r=JSON.parse(s.json);return s.type===33?e("div",{className:"py-5 px-12",children:a("div",{className:"relative rounded-xl overflow-hidden",children:[e("img",{src:r.coverPCUrl,alt:""}),a("div",{className:"absolute border-b border-opacity-20 border-t border-white flex-center h-20 inset-0 m-auto text-center text-white w-min whitespace-nowrap",children:[e("div",{className:"text-xl",children:`#${r.title}#`}),e("div",{className:"-translate-y-1/2 absolute top-full transform",children:`${r.participateCount}\u53C2\u4E0E`})]})]})}):a("div",{className:"ui_event_item py-5 flex",children:[a(i,{to:`/user/${s.user.userId}`,className:"avatar flex-none w-10 h-10 relative border rounded-full",children:[e("img",{className:"rounded-full",src:`${s.user.avatarUrl}?param=40y40`,alt:""}),((c=(l=s==null?void 0:s.user)==null?void 0:l.avatarDetail)==null?void 0:c.identityIconUrl)&&e("img",{className:"absolute bottom-0 right-0 w-3.5 h-3.5",src:s.user.avatarDetail.identityIconUrl,alt:""})]}),a("div",{className:"content ml-2.5 flex-auto",children:[a("div",{className:"name",children:[e(i,{className:"ui_link",to:`/user/${s.user.userId}`,children:s.user.nickname}),"\xA0",e("span",{className:"text-gray-500",children:H[s.type]})]}),e("div",{className:"time mt-2",children:e(i,{to:`/comment/event/${s.id}`,className:"ui_text_gray_hover",children:x(s.showTime).format("MM\u6708DD\u65E5 HH:mm")})}),a("div",{className:"article",children:[e("div",{className:"text whitespace-pre-line text-sm mt-2.5",children:r.msg&&u(r.msg)}),e(F,{item:r.resource}),e(A,{item:r.song}),e(B,{className:"mt-2.5",el:"#inset",srcList:s.pics}),a("div",{className:"info flex mt-2.5",children:[e("div",{className:"left text-gray-400",children:((m=s==null?void 0:s.rcmdInfo)==null?void 0:m.reason)&&`--${s.rcmdInfo.reason}`}),a("div",{className:"right ml-auto divide-x flex",children:[e("div",{className:"px-3",children:a("button",{type:"button",className:"action ui_text_gray_hover flex-center",children:[e(_,{size:16}),s.info.likedCount>0&&`(${s.info.likedCount})`]})}),e("div",{className:"px-3",children:a("button",{type:"button",className:"action ui_text_gray_hover flex-center",children:[e(w,{size:16}),"\xA0",s.info.shareCount>0&&`(${s.info.shareCount})`]})}),e("div",{className:"px-3",children:a("button",{type:"button",className:"action ui_text_gray_hover flex-center",onClick:()=>o(s.info.threadId),children:[e(I,{size:16}),"\xA0",s.info.commentCount>0&&`(${s.info.commentCount})`]})}),e("div",{className:"px-3",children:e("button",{type:"button",className:"action ui_text_gray_hover flex-center",children:e($,{size:16})})})]})]}),n&&e(U,{threadId:s.info.threadId})]})]})]})},M=t.exports.memo(L),Y=({list:s=[]})=>{const[n,o]=t.exports.useState(""),r=t.exports.useCallback(l=>{o(c=>c===l?null:l)},[]);return e("div",{className:"divide-y",children:s.map(l=>e(M,{item:l,commentIsShow:n===l.info.threadId,handleToggleComment:r},l.id))})},Z=t.exports.memo(Y);export{Z as D};