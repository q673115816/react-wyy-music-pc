System.register(["./react-legacy.b3bc90c5.js","./react-router-dom-legacy.b2b146ac.js","./qrcode.react-legacy.685a2ddb.js","./react-router-legacy.d596e264.js","./classnames-legacy.82f93ed6.js","./useInfinite-legacy.b5d5e5d0.js","./Home-legacy.0bc49291.js","./index-legacy.d8a4670e.js","./@tabler/icons-legacy.38e80a3f.js","./GridMVToplist-legacy.ae9ec82d.js","./react-use-legacy.7a8b73b2.js","./lodash-legacy.4434829e.js","./dayjs-legacy.7dd3aa6c.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.4210a093.js","./immer-legacy.c24b5c0e.js","./redux-persist-legacy.76732867.js","./axios-legacy.6d9fa2e4.js","./rxjs-legacy.3f182ee1.js","./react-transition-group-legacy.16b3096a.js","./color-legacy.6099eccf.js"],(function(e,t){"use strict";var a,r,l,s,c,i,o,d,n,m,u,p,x,h,b,g,f,y,v,j,N,_,C,k,L,w,M,V=document.createElement("style");return V.innerHTML=".group_select_box{height:490px;width:640px}.group_select_button{height:30px;width:100px}\n",document.head.appendChild(V),{setters:[e=>{a=e.r},e=>{r=e.N,l=e.L},e=>{s=e.a,c=e.j},e=>{i=e.O,o=e.j,d=e.N},e=>{n=e.a},e=>{m=e.u},e=>{u=e.G},e=>{p=e.u,x=e.m,h=e.bl,b=e.bm,g=e.bn,f=e.bo,y=e.bp,v=e.L,j=e.bq,N=e.br,_=e.bs,C=e.bt,k=e.bu},e=>{L=e.U},e=>{w=e.G},e=>{M=e.w},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const t=["视频","MV"],V=a.exports.memo((()=>s("div",{className:"flex flex-col h-full",children:[c("div",{className:"ui_header text-base space-x-4",children:t.map((e=>c(r,{className:({isActive:e})=>e?"text-xl ui_underline font-bold":"",to:encodeURIComponent(e),children:e},e)))}),c(i,{})]}))),R=a.exports.memo((({id:e})=>{const t=p(),{groupList:a}=x(h);return s("div",{className:"group_select_box absolute top-100 p-5 bg-white overflow-auto shadow",children:[c("div",{className:"border-b pb-2",children:c("button",{type:"button",className:n("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",0===e?"text-red-500 bg-red-50":""),onClick:()=>t(b({id:0})),children:"全部视频"})}),c("div",{className:"group_select_list grid grid-cols-6 gap-y-5 p-4",children:a.map((a=>c("button",{type:"button",className:n("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",a.id===e?"text-red-500 bg-red-50":""),onClick:()=>t(b({id:a.id})),children:a.name},a.id)))})]})})),I=a.exports.memo((()=>{const e=p(),{id:t,initStatus:r,groupList:l,categoryList:i,videoList:o}=x(h),[d,j]=a.exports.useState(!1),N=a.exports.useMemo((()=>l.find((e=>e.id===Number(t)))?.name||"全部视频"),[t]),_=a.exports.useRef(null),C=a.exports.useRef(null);return m((()=>e(g(t))),_,C),a.exports.useEffect((()=>(e(f()),()=>{e(y())})),[]),a.exports.useEffect((()=>{e(y())}),[t]),s("div",{className:"px-8 overflow-auto flex-auto",ref:_,children:[s("div",{className:"flex items-center justify-between",children:[s("div",{className:"relative z-10",children:[s("button",{type:"button",className:"group_select_button border rounded-full hover:bg-gray-100 text-sm",onClick:()=>j(!d),children:[N,">"]}),d&&c(R,{id:t})]}),c("div",{className:"divide-x flex",children:i.map((a=>c("div",{children:c("button",{type:"button",className:n("rounded-full px-2 mx-1",t===a.id?"bg-red-50 text-red-500":"ui_text_black_hover"),onClick:()=>e(b({id:a.id})),children:a.name})},a.id)))})]}),s("div",{className:"my-4",children:[c(u,{list:o}),c("div",{ref:C,className:"flex-center",children:c(v,{})})]})]})})),U=a.exports.memo((({children:e,url:t,title:a,Category:r})=>s("div",{className:"",children:[s("div",{className:"mt-8 mb-5 flex justify-between items-center",children:[s(l,{to:t,className:"font-bold text-base flex items-center",children:[a,c(L,{size:20})]}),r]}),e]}))),A=a.exports.memo((()=>{const{data:e,isLoading:t}=j({limit:6});return t?c(v,{}):c(u,{list:N(e.data)})})),E=a.exports.memo((()=>{const{data:e,isLoading:t}=_({order:"最热",limit:6});return t?c(v,{}):c(u,{list:N(e.data)})})),G=a.exports.memo((({area:e})=>{const{data:t,isLoading:a}=C({area:e,limit:6});return a?c(v,{}):c(u,{list:N(t.data)})})),S=a.exports.memo((({area:e})=>{const{data:t,isLoading:a}=k({area:e,limit:6});return a?c(v,{}):c(w,{list:t.data,schema:[["评论","播放"],["收藏","分享","下载MV","复制链接"]]})})),q=["内地","港台","欧美","日本","韩国"],z=a.exports.memo((({onClick:e,area:t})=>c("div",{className:"flex divide-x gap-x-1",children:q.map((a=>c("div",{className:"item",children:c("button",{onClick:()=>e(a),type:"button",className:n("link rounded-full px-2.5",t===a?"text-red-500 bg-red-50":"ui_text_black_hover"),children:a})},a)))}))),H=a.exports.memo((()=>{const[e,t]=M("firstArea",q[0]),[a,r]=M("topArea",q[0]);return s("div",{className:"px-8 overflow-auto max-h-full flex-auto",children:[c(U,{title:"最新MV",url:`/mv-all?order=最新&area=${e}`,Category:c(z,{onClick:t,area:e}),children:c(G,{area:e})}),c(U,{title:"热播MV",url:"/mv-all?order=最热",children:c(E,{})}),c(U,{title:"网易出品",url:"/mv-all?type=网易出品&order=最新",children:c(A,{})}),c(U,{title:"MV排行榜",url:"/toplist-mv",Category:c(z,{onClick:r,area:a}),children:c(S,{area:a})})]})}));e("default",a.exports.memo((()=>o([{path:"/*",element:c(V,{}),children:[{path:encodeURIComponent("视频"),element:c(I,{})},{path:"MV",element:c(H,{})}]},{index:!0,element:c(d,{to:encodeURIComponent("视频"),replace:!0})}]))))}}}));