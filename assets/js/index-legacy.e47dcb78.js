System.register(["./react-legacy.b3bc90c5.js","./index-legacy.1089c68a.js","./qrcode.react-legacy.685a2ddb.js","./react-router-dom-legacy.2933718f.js","./react-use-legacy.78116f18.js","./@tabler/icons-legacy.42c83e77.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.b70b910a.js","./immer-legacy.c38810dc.js","./axios-legacy.6d9fa2e4.js","./react-slick-legacy.d6ab9305.js","./rxjs-legacy.7d2f3ae5.js","./react-transition-group-legacy.b5e58023.js"],(function(e,a){"use strict";var t,s,l,c,i,r,o,n,d,m,h,u,p,x,f,g,y,v,N,b,j,w,_,S,C,M,z,D;return{setters:[e=>{t=e.r},e=>{s=e.r,l=e.L,c=e.C,i=e.v,r=e.w,o=e.x,n=e.y,d=e.E,m=e.z,h=e.B,u=e.D,p=e.F,x=e.P,f=e.G,g=e.I,y=e.J,v=e.K,N=e.N,b=e.O},e=>{j=e.j,w=e.a},e=>{_=e.b,S=e.L,C=e.R,M=e.c},e=>{z=e.s},e=>{D=e.p},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a=t.exports.memo((({index:e,setHasMore:a})=>{const{id:i}=_(),r=t.exports.useRef(null),o=z(r,{root:null,rootMargin:"0px",threshold:1}),[n,{data:d,isSuccess:m,isFetching:h,isUninitialized:u}]=s();return t.exports.useEffect((()=>{u&&o&&o.intersectionRatio>0&&n({id:i,type:0,limit:20,offset:20*e})}),[o]),t.exports.useEffect((()=>{d?.hasMore&&a()}),[d]),j("div",{ref:r,children:m?d.hotComments.map((e=>j(c,{item:e},e.commentId))):j("div",{className:"flex-center py-4",children:j(l,{})})})})),E=t.exports.memo((()=>{const[e,s]=t.exports.useState([!1]),l=t.exports.useCallback((()=>{s((e=>[...e,!1]))}),[]);return w("div",{className:"px-8 py-5 overflow-auto max-h-full flex-auto",children:[j("div",{className:"h1",children:"精彩评论"}),j("div",{className:"",children:e.map(((e,t)=>j(a,{index:t,setHasMore:l},t)))})]})})),F={song:i,video:r,mv:o},L=t.exports.memo((()=>{const{id:e,type:a}=_(),{data:t,isFetching:s,isSuccess:c}=F[a]({ids:e});if(s)return j(l,{});const i=t.songs[0];return c?w("div",{className:"flex",children:[w("div",{className:"cover h-20 rounded overflow-hidden relative",children:[j("img",{loading:"lazy",className:"h-full",src:i.al.picUrl,alt:""}),j("div",{className:"ico absolute inset-0 m-auto flex-center w-8 h-8 ui_themeColor rounded-full bg-white bg-opacity-90",children:j(D,{size:16,className:"fill-current"})})]}),w("div",{className:"content px-6 py-2",children:[w("div",{className:"title text-lg",children:[i.name,j("span",{className:"text-gray-500",children:i.alia.length>0&&`(${i.alia})`})]}),w("div",{className:"info text-gray-500 mt-2 space-x-5",children:[w("span",{children:["专辑：",j(S,{className:"ui_text_gray_hover",to:`/playlist/album/${i.al.id}`,children:i.al?.name})]}),w("span",{children:["歌手：",i.ar.map(((e,a)=>w("span",{children:[a>0&&" / ",j(S,{className:"ui_text_gray_hover",to:`/artist/${e.id}`,children:e.name})]},e.id)))]})]})]})]}):void 0})),R={song:{apiDetail:({id:e})=>f({ids:e}),comment:g},mv:{apiDetail:y,comment:v,header:()=>j("div",{})},video:{apiDetail:N,comment:b}},$=t.exports.memo((()=>{console.log("comment");const{id:e,type:a}=_();t.exports.useState("");const[s,c]=t.exports.useState(1),{data:i,isLoading:r}=R[a].comment({id:e,offset:20*(s-1),limit:n});return r?j("div",{className:"w-full h-full flex-center",children:j(l,{})}):w("div",{className:"domComment overflow-auto px-8 py-5 h-full",children:[j(L,{}),w("div",{className:"mt-4",children:[j(d,{}),w("div",{className:"flex mt-2",children:[w("div",{className:"flex space-x-2",children:[j(m,{}),j(h,{}),j(u,{})]}),j("button",{type:"button",className:"flex-center border px-4 h-8 text-sm hover:bg-gray-100 rounded-full ml-auto",children:"评论"})]})]}),w("div",{className:"mt-8",children:[j(p,{comments:i,more:e,type:a}),j(x,{total:Math.ceil(i.total/n),page:s,func:c})]})]})}));e("default",(()=>j(C,{children:w(M,{path:":type/:id",children:[j(M,{index:!0,element:j($,{})}),j(M,{path:"hot",element:j(E,{})})]})})))}}}));
