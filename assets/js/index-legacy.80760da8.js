System.register(["./react-legacy.b3bc90c5.js","./react-router-dom-legacy.2933718f.js","./react-slick-legacy.d6ab9305.js","./index-legacy.6f83a227.js","./Home-legacy.a2c9831c.js","./qrcode.react-legacy.685a2ddb.js","./react-use-legacy.7a8b73b2.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.b70b910a.js","./immer-legacy.c38810dc.js","./axios-legacy.6d9fa2e4.js","./@tabler/icons-legacy.945631e8.js","./rxjs-legacy.3f182ee1.js","./react-transition-group-legacy.b5e58023.js"],(function(e,a){"use strict";var r,s,t,c,l,i,d,o,n,m,u,p,y;return{setters:[e=>{r=e.r},e=>{s=e.L,t=e.R,c=e.c},e=>{l=e.c},e=>{i=e.aH,d=e.L,o=e.i},e=>{n=e.G},e=>{m=e.j,u=e.a},e=>{p=e.s,y=e.v},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a=[["area","地区",["全部","内地","港台","欧美","韩国","日本"]],["type","类型",["全部","官方版","原声","现场版","网易出品"]],["order","排序",["上升最快","最热","最新"]]],x="全部",f="全部",h="上升最快",g=r.exports.memo((({area:e,type:a,order:s,index:t,setHasMore:c})=>{const l=r.exports.useRef(null),o=p(l,{root:null,rootMargin:"0px",threshold:1}),[u,{isUninitialized:y,isLoading:x,data:f}]=i();return r.exports.useEffect((()=>{y&&o&&o.intersectionRatio>0&&u({area:e,type:a,order:s,limit:24,offset:24*t})}),[o]),r.exports.useEffect((()=>{f?.hasMore&&c()}),[f]),m("div",{ref:l,children:x?m("div",{className:"flex-center py-4",children:m(d,{})}):m(n,{list:f?.data.map((({id:e,name:a,cover:r,playCount:s,duration:t,artists:c})=>({type:0,playCount:s,id:e,cover:r,duration:t,title:a,creator:c.map((({id:e,name:a})=>({userId:e,userName:a})))})))})})})),v=r.exports.memo((()=>{const e=y("area"),t=y("type"),c=y("order"),i={area:e,type:t,order:c};i.area??=x,i.type??=f,i.order??=h;const[d,n]=o([]),p=r.exports.useCallback((()=>{n((e=>(e.push(0),e)))}),[e,t,c]);return u("div",{className:"overflow-auto h-full",children:[m("div",{className:"ui_header",children:m("span",{className:"h1 cursor-pointer",children:"全部MV"})}),u("div",{className:"px-8 flex-auto",children:[a.map((e=>u("div",{className:"flex my-2.5",children:[u("div",{className:"flex-none",children:[e[1],":"]}),m("div",{className:"flex divide-x",children:e[2].map((a=>m("div",{className:"w-20 flex-center",children:m(s,{to:`/mv-all?${new URLSearchParams(i)}`,className:l("rounded-full leading-5 px-3 whitespace-nowrap",a===i[e[0]]?"bg-red-50 text-red-500":"ui_text_gray_hover"),children:a})},a)))})]},e[1]))),m("div",{className:"py-1",children:d.map(((a,r)=>m(g,{index:r,order:c,area:e,type:t,setHasMore:p},r)))})]})]})}));e("default",(()=>m(t,{children:m(c,{index:!0,element:m(v,{})})})))}}}));
