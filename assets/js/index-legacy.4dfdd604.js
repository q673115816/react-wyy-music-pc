System.register(["./react-legacy.b3bc90c5.js","./react-router-dom-legacy.9719a788.js","./qrcode.react-legacy.364768f0.js","./react-slick-legacy.d6ab9305.js","./useInfinite-legacy.b5d5e5d0.js","./Home-legacy.246860cf.js","./index-legacy.15c0c982.js","./@tabler/icons-legacy.c07ea112.js","./GridMVToplist-legacy.4a7cc0c0.js","./react-use-legacy.4afe0951.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.2ad0ab31.js","./immer-legacy.c38810dc.js","./axios-legacy.df2213c5.js","./rxjs-legacy.2bb8d16b.js","./store-legacy.0145af8a.js","./react-transition-group-legacy.1f46aa9f.js"],(function(e,t){"use strict";var r,a,l,c,i,s,o,d,n,m,u,x,p,h,b,g,f,v,y,N,_,j,C,k,L,w,M,V=document.createElement("style");return V.innerHTML=".group_select_box{height:490px;width:640px}.group_select_button{height:30px;width:100px}\n",document.head.appendChild(V),{setters:[e=>{r=e.r},e=>{a=e.N,l=e.O,c=e.L,i=e.e,s=e.d},e=>{o=e.a,d=e.j},e=>{n=e.c},e=>{m=e.u},e=>{u=e.G},e=>{x=e.u,p=e.n,h=e.bq,b=e.br,g=e.bs,f=e.bt,v=e.bu,y=e.L,N=e.bv,_=e.bw,j=e.bx,C=e.by,k=e.bz},e=>{L=e.C},e=>{w=e.G},e=>{M=e.v},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const t=["视频","MV"],V=r.exports.memo((()=>o("div",{className:"flex flex-col h-full",children:[d("div",{className:"ui_header text-base space-x-4",children:t.map((e=>d(a,{className:({isActive:e})=>e?"text-xl ui_underline font-bold":"",to:encodeURIComponent(e),children:e},e)))}),d(l,{})]}))),R=r.exports.memo((({id:e})=>{const t=x(),{groupList:r}=p(h);return o("div",{className:"group_select_box absolute top-100 p-5 bg-white overflow-auto shadow",children:[d("div",{className:"border-b pb-2",children:d("button",{type:"button",className:n("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",0===e?"text-red-500 bg-red-50":""),onClick:()=>t(b({id:0})),children:"全部视频"})}),d("div",{className:"group_select_list grid grid-cols-6 gap-y-5 p-4",children:r.map((r=>d("button",{type:"button",className:n("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",r.id===e?"text-red-500 bg-red-50":""),onClick:()=>t(b({id:r.id})),children:r.name},r.id)))})]})})),I=r.exports.memo((()=>{const e=x(),{id:t,initStatus:a,groupList:l,categoryList:c,videoList:i}=p(h),[s,N]=r.exports.useState(!1),_=r.exports.useMemo((()=>l.find((e=>e.id===Number(t)))?.name||"全部视频"),[t]),j=r.exports.useRef(null),C=r.exports.useRef(null);return m((()=>e(g(t))),j,C),r.exports.useEffect((()=>(e(f()),()=>{e(v())})),[]),r.exports.useEffect((()=>{e(v())}),[t]),o("div",{className:"px-8 overflow-auto flex-auto",ref:j,children:[o("div",{className:"flex items-center justify-between",children:[o("div",{className:"relative z-10",children:[o("button",{type:"button",className:"group_select_button border rounded-full hover:bg-gray-100 text-sm",onClick:()=>N(!s),children:[_,">"]}),s&&d(R,{id:t})]}),d("div",{className:"divide-x flex",children:c.map((r=>d("div",{children:d("button",{type:"button",className:n("rounded-full px-2 mx-1",t===r.id?"bg-red-50 text-red-500":"ui_text_black_hover"),onClick:()=>e(b({id:r.id})),children:r.name})},r.id)))})]}),o("div",{className:"my-4",children:[d(u,{list:i}),d("div",{ref:C,className:"flex-center",children:d(y,{})})]})]})})),z=r.exports.memo((({children:e,url:t,title:r,Category:a})=>o("div",{className:"",children:[o("div",{className:"mt-8 mb-5 flex justify-between items-center",children:[o(c,{to:t,className:"font-bold text-base flex items-center",children:[r,d(L,{size:20})]}),a]}),e]}))),A=r.exports.memo((()=>{const{data:e,isLoading:t}=N({limit:6});return t?d(y,{}):d(u,{list:_(e.data)})})),E=r.exports.memo((()=>{const{data:e,isLoading:t}=j({order:"最热",limit:6});return t?d(y,{}):d(u,{list:_(e.data)})})),G=r.exports.memo((({area:e})=>{const{data:t,isLoading:r}=C({area:e,limit:6});return r?d(y,{}):d(u,{list:_(t.data)})})),S=r.exports.memo((({area:e})=>{const{data:t,isLoading:r}=k({area:e,limit:6});return r?d(y,{}):d(w,{list:t.data,schema:[["评论","播放"],["收藏","分享","下载MV","复制链接"]]})})),U=["内地","港台","欧美","日本","韩国"],q=r.exports.memo((({onClick:e,area:t})=>d("div",{className:"flex divide-x gap-x-1",children:U.map((r=>d("div",{className:"item",children:d("button",{onClick:()=>e(r),type:"button",className:n("link rounded-full px-2.5",t===r?"text-red-500 bg-red-50":"ui_text_black_hover"),children:r})},r)))}))),H=r.exports.memo((()=>{const[e,t]=M("firstArea",U[0]),[r,a]=M("topArea",U[0]);return o("div",{className:"px-8 overflow-auto max-h-full flex-auto",children:[d(z,{title:"最新MV",url:`/mv-all?order=最新&area=${e}`,Category:d(q,{onClick:t,area:e}),children:d(G,{area:e})}),d(z,{title:"热播MV",url:"/mv-all?order=最热",children:d(E,{})}),d(z,{title:"网易出品",url:"/mv-all?type=网易出品&order=最新",children:d(A,{})}),d(z,{title:"MV排行榜",url:"/toplist-mv",Category:d(q,{onClick:a,area:r}),children:d(S,{area:r})})]})}));e("default",r.exports.memo((()=>i([{path:"/*",element:d(V,{}),children:[{path:encodeURIComponent("视频"),element:d(I,{})},{path:"MV",element:d(H,{})}]},{index:!0,element:d(s,{to:encodeURIComponent("视频"),replace:!0})}]))))}}}));
