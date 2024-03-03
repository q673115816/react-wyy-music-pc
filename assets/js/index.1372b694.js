import{r as o}from"./react.0a2f695e.js";import{N as b,L as u}from"./react-router-dom.256d9b78.js";import{a as m}from"./classnames.9558900f.js";import{a as s,j as e,F as D}from"./qrcode.react.84002e4a.js";import{O as C,e as B,h as F,N as $,R as S,f as g,c as J}from"./react-router.d1bb31aa.js";import{u as W}from"./useInfinite.22451543.js";import{R as T}from"./Resize.29b1bee1.js";import{i as z,_ as Z,L as w,$ as Y,T as H,A as X,a0 as ee,a1 as te,a2 as ae,a3 as se,a4 as le,a5 as re,P as oe,u as G,m as A,a6 as ne,a7 as U,a8 as ie,a9 as R,aa as ce,ab as ue,ac as de,Y as me,t as O,M,ad as pe,ae as he,af as ge,ag as xe,ah as fe,ai as ve,aj as Ne,ak as ye,al as be,am as we}from"./index.ba361b16.js";import{t as Ee,w as f,o as _e,an as $e,L,z as Ce,ao as Be,ap as Ae}from"./@tabler/icons.d755a6ec.js";import{d as j}from"./dayjs.6fdda85a.js";import{I as De}from"./Item.931891fc.js";import{S as Fe}from"./react-slick.c8f9ea60.js";import{u as Se,C as Le,a as ze,b as I,D as Re,c as Ie,r as ke,d as Pe,S as Te,v as He,e as Ge,s as Ue,K as Oe,P as Me,f as je}from"./@dnd-kit.5b7bb4e8.js";import{P as Qe}from"./PlaylistAsyncReplace.cee0f092.js";import"./lodash.f41ef0b4.js";import"./react-dom.d348259d.js";import"./react-redux.49573eed.js";import"./immer.76e704b2.js";import"./redux-persist.b0b12bc5.js";import"./axios.8a0dc616.js";import"./rxjs.22301260.js";import"./react-use.fd5829ae.js";import"./react-transition-group.2770fa82.js";import"./color.a5f8aeb5.js";import"./history.9736f6f1.js";const Ve=[["\u4E2A\u6027\u63A8\u8350","Recommend"],["\u6B4C\u5355","Playlist"],["\u6392\u884C\u699C","TopList"],["\u6B4C\u624B","Artist"],["\u6700\u65B0\u97F3\u4E50","Newest"]],qe=()=>s("div",{className:"flex flex-col h-full",children:[e("div",{className:"ui_header text-base gap-x-5",children:Ve.map(([t,a])=>e(b,{className:({isActive:l})=>m(l&&"text-xl font-bold ui_underline"),to:a,children:t},a))}),e(C,{})]}),Ke=o.exports.memo(qe),Je="_item_1c86c_1",We={item:Je},Ze=({item:t={}})=>s("div",{className:"item",children:[e("div",{className:"cover boarder relative rounded overflow-hidden border",children:e(u,{to:`/artist/${t.id}`,className:"",children:e("img",{loading:"lazy",className:"aspect-square w-full h-full",src:`${t.img1v1Url}?param=200y200`,alt:t.name})})}),s("div",{className:"info flex items-center justify-between mt-2 text-sm text-gray-600 hover:text-black",children:[e(u,{to:`/artist/${t.id}`,children:t.name}),t.accountId&&e(u,{to:`/user/${t.accountId}`,className:"bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5",children:e(Ee,{size:12})})]})]}),Ye=o.exports.memo(Ze),Xe=[{type:"\u8BED\u79CD",code:"area",sub:[[-1,"\u5168\u90E8",1],[7,"\u534E\u8BED",1],[96,"\u6B27\u7F8E",2],[8,"\u65E5\u672C",4],[16,"\u97E9\u56FD",3],[0,"\u5176\u4ED6",1]]},{type:"\u5206\u7C7B",code:"type",sub:[[-1,"\u5168\u90E8"],[1,"\u7537\u6B4C\u624B"],[2,"\u5973\u6B4C\u624B"],[3,"\u4E50\u961F"]]},{type:"\u7B5B\u9009",code:"initial",sub:[[-1,"\u70ED\u95E8"],["A","A"],["B","B"],["C","C"],["D","D"],["E","E"],["F","F"],["G","G"],["H","H"],["I","I"],["J","J"],["K","K"],["L","L"],["M","M"],["N","N"],["O","O"],["P","P"],["Q","Q"],["R","R"],["S","S"],["T","T"],["U","U"],["V","V"],["W","W"],["X","X"],["Y","Y"],["Z","Z"],["#","#"]]}],et={type:-1,area:-1,initial:-1},k=30,tt=()=>{const[t,a]=z(()=>et),l=o.exports.useRef(t),r=o.exports.useRef(0),i=o.exports.useRef(null),n=o.exports.useRef(null),[c,v]=z([]),[E,{}]=Z(),_=d=>{a(p=>({...p,...d})),r.current=0,v([])},h=async()=>{try{const{type:d,area:p,initial:N}=l.current,y=await E({type:d,area:p,initial:N,limit:k,offset:r.current});r.current+=k,v(x=>{x.push(...y.data.artists)})}catch(d){console.log(d)}};return o.exports.useEffect(()=>{l.current=t},[t]),W(h,i,n),s("div",{className:"px-8 pb-8 overflow-auto h-full flex-auto",ref:i,children:[s("div",{className:"ui_w1100",children:[e("div",{className:"space-y-1",children:Xe.map(({type:d,code:p,sub:N})=>s("div",{className:"flex items-baseline whitespace-nowrap",children:[e("div",{className:"w-10 flex-none",children:d}),e("div",{className:"flex flex-wrap",children:N.map(([y,x])=>e("div",{className:m(We.item,"item flex-center relative w-20 my-0.5"),children:e("button",{type:"button",onClick:()=>_({[p]:y}),className:m("px-2 rounded-full",y===t[p]&&"ui_themeColor ui_bg_opacity"),children:x})},y))})]},d))}),e(T,{className:"mt-2.5 grid gap-4",small:"grid-cols-5",big:"grid-cols-6",children:c.map(d=>e(Ye,{item:d},d.id))})]}),e("div",{className:"flex-center",ref:n,children:e(w,{})})]})},at=o.exports.memo(tt),st=[["\u65B0\u6B4C\u901F\u9012","song"],["\u65B0\u789F\u4E0A\u67B6","album"]],lt=()=>s("div",{className:"overflow-auto max-h-full flex-auto",children:[e("div",{className:"flex border rounded-full mx-auto w-min",children:st.map(([t,a])=>e(b,{className:({isActive:l})=>m("w-28 rounded-full flex-center h-7",!l&&"hover:bg-gray-100",l&&"text-white bg-gray-400"),to:a,children:t},a))}),e(C,{})]}),rt=o.exports.memo(lt),ot=["\u5168\u90E8","\u534E\u8BED","\u6B27\u7F8E","\u97E9\u56FD","\u65E5\u672C"],nt={\u5168\u90E8:0,\u534E\u8BED:7,\u6B27\u7F8E:96,\u97E9\u56FD:16,\u65E5\u672C:8},it={\u5168\u90E8:"ALL",\u534E\u8BED:"ZH",\u6B27\u7F8E:"EA",\u97E9\u56FD:"KR",\u65E5\u672C:"JP"},ct=["\u5168\u90E8","\u534E\u8BED","\u6B27\u7F8E","\u97E9\u56FD","\u65E5\u672C"],ut={\u5168\u90E8:"new",\u63A8\u8350:"hot"},dt=["\u63A8\u8350","\u5168\u90E8"],mt=()=>s(D,{children:[s("div",{className:"flex px-8 py-2",children:[e("div",{className:"flex gap-x-4 text-sm",children:ot.map(t=>e(b,{className:({isActive:a})=>m(a&&"font-bold"),to:encodeURI(t),children:t},t))}),s("div",{className:"ml-auto flex space-x-2 text-sm",children:[s("button",{type:"button",className:"flex-center ui_theme_bg_color text-white rounded-full px-2 py-0.5",children:[e(f,{size:16,stroke:1,className:"fill-current"}),"\u64AD\u653E\u5168\u90E8"]}),s("button",{type:"button",className:"flex-center rounded-full border px-2 py-0.5",children:[e(_e,{size:16,stroke:1}),"\u6536\u85CF\u5168\u90E8"]})]})]}),e(C,{})]}),pt=o.exports.memo(mt),ht=()=>{var i;const{type:t=""}=B(),{data:a,isLoading:l,isFetching:r}=Y({type:nt[t]});return l?e(w,{}):e("div",{className:"",children:(i=a==null?void 0:a.data)==null?void 0:i.map((n,c)=>s("div",{className:m("h-20 py-2.5 flex items-center px-8 text-sm",{"bg-gray-50":c%2===0}),children:[e("span",{className:"text-gray-300 w-8",children:String(c+1).padStart(2,"0")}),s("button",{type:"button",className:"w-16 relative rounded overflow-hidden border",children:[e("img",{loading:"lazy",className:"aspect-square w-full h-full",src:`${n.album.blurPicUrl}?param=100y100`,alt:""}),e("i",{className:"absolute w-6 h-6 m-auto flex-center inset-0 ui_themeColor bg-white bg-opacity-90 rounded-full",children:e(f,{size:14,className:"fill-current"})})]}),s("span",{className:"px-2.5 w-0 flex items-center flex-auto",children:[e("div",{className:"truncate",children:n.name}),e(H,{item:n,mv:n.mvid})]}),e("span",{className:"truncate w-1/5 px-1",children:e(X,{artists:n.artists})}),e("span",{className:"truncate w-1/5 px-1",children:e(u,{to:`${n.album.id}`,className:"ui_text_gray_hover",children:n.album.name})}),e("span",{className:"text-gray-400 text-right",children:j(n.duration).format("mm:ss")})]},n.id))})},gt=o.exports.memo(ht),xt=()=>F([{index:!0,element:e($,{to:"\u5168\u90E8",replace:!0})},{path:"/",element:e(pt,{}),children:[{path:":type",element:e(gt,{})}]}]),ft=o.exports.memo(xt),vt=()=>s(D,{children:[e("div",{className:"flex px-8 py-2",children:e("div",{className:"flex space-x-4 text-sm",children:ct.map(t=>e(b,{to:encodeURI(t),className:({isActive:a})=>m(a&&"font-bold"),children:t},t))})}),e(C,{})]}),Nt=o.exports.memo(vt),yt=({item:t})=>s("div",{className:"item",children:[e("div",{className:"shadow rounded overflow-hidden",children:e(u,{to:`/playlist/album/${t.id}`,children:e("img",{loading:"lazy",className:" aspect-square w-full h-full object-fit",src:`${t.blurPicUrl}?param=170y170`,alt:""})})}),e("div",{className:"name text-sm ui_ellipse mt-2",children:s(u,{to:`/playlist/album/${t.id}`,children:[e("span",{className:"ui_text_black_hover",children:t.name}),"\xA0",t.alias.length>0&&s("span",{className:"text-gray-400",children:["(",t.alias,")"]}),t.transNames&&e("span",{children:t.transNames})]})}),e("div",{className:"artist mt-2",children:e(u,{to:`/artist/${t.artist.id}`,className:"ui_text_gray_hover",children:t.artist.name},t.artist.id)})]}),P=o.exports.memo(yt),bt=()=>{const{area:t="",type:a=""}=B(),{data:l,isLoading:r}=ee({area:it[t],type:ut[a],limit:te,offset:0}),i=(l==null?void 0:l.weekData)||[],n=(l==null?void 0:l.monthData)||[];return r?e(w,{}):s("div",{className:"px-8",children:[i.length>0&&s("div",{className:"domHome_newest_album_sublist relative pl-12 mb-12",children:[s("div",{className:"sign w-10 h-10 absolute top-0 left-0 text-lg",children:["\u672C\u5468",e("br",{}),"\u65B0\u789F"]}),e("div",{className:"list grid grid-cols-4 gap-5",children:i.map(c=>e(P,{item:c},c.id))})]}),n.length>0&&s("div",{className:"domHome_newest_album_sublist relative pl-12 mb-12",children:[s("div",{className:"sign w-10 h-10 absolute top-0 left-0 text-lg",children:["\u672C\u6708",e("br",{}),"\u65B0\u789F"]}),e("div",{className:"list grid grid-cols-4 gap-5",children:n.map(c=>e(P,{item:c},c.id))})]})]})},wt=o.exports.memo(bt),Et=()=>s(D,{children:[e("div",{className:"flex -mt-7 mb-8 px-8",children:e("div",{className:"flex ml-auto gap-4",children:dt.map(t=>e(b,{to:encodeURIComponent(t),className:({isActive:a})=>m(a&&"font-bold"),children:t},t))})}),e(C,{})]}),_t=o.exports.memo(Et),$t=()=>F([{path:"/*",element:e(Nt,{}),children:[{index:!0,element:e($,{to:"\u5168\u90E8",replace:!0})},{path:":area",element:e(_t,{}),children:[{index:!0,element:e($,{to:"\u63A8\u8350",replace:!0})},{path:":type",element:e(wt,{})}]}]}]),Ct=o.exports.memo($t),Bt=()=>e(S,{children:s(g,{path:"/*",element:e(rt,{}),children:[e(g,{index:!0,element:e($,{to:"Song",replace:!0})}),e(g,{path:"Song/*",element:e(ft,{})}),e(g,{path:"Album/*",element:e(Ct,{})})]})}),At=o.exports.memo(Bt);const Dt=({item:t})=>{const{cat:a=""}=B();return t?s(u,{to:`/HighQuality/${a}`,className:"domHome_playlist_banner flex items-center relative rounded-lg overflow-hidden z-10",children:[e("div",{className:"absolute inset-0 bg-center",style:{backgroundImage:`url(${t.coverImgUrl})`,filter:"blur(20px) grayscale(80%)",zIndex:"-1"}}),e("div",{className:"cover w-36 h-36 rounded-lg overflow-hidden",children:e("img",{src:t.coverImgUrl,alt:""})}),s("div",{className:"contennt ml-2.5",children:[s("div",{className:"tag border border-current flex-center text-sm rounded-full",children:[e($e,{size:16}),"\xA0 \u7CBE\u54C1\u6B4C\u5355"]}),e("div",{className:"text-white text-base mt-4",children:t.name}),e("div",{className:"text-gray-300 mt-2",children:t.copywriter})]})]}):null},Ft=o.exports.memo(Dt),St=()=>e("svg",{className:"absolute left-full top-1/4 fill-current",viewBox:"0 0 12 12",width:"12",height:"6",children:e("text",{dominantBaseline:"middle",textAnchor:"middle",x:"0.5em",y:"0.5em",className:"fill-current ui_themeColor font-bold",children:"hot"})}),Lt=o.exports.memo(St),zt=({sub:t=[],category:a=null,cat:l=""})=>e("div",{className:"flex-auto grid grid-cols-6 gap-y-4",children:t.filter(r=>r.category===Number(a)).map(r=>e(b,{className:({isActive:i})=>m("text-gray-600 hover:ui_themeColor",i&&"on ui_themeColor"),to:`../${encodeURIComponent(r.name)}`,children:e("span",{className:m("inline-flex inner px-4 py-1 rounded-full overflow-hidden",{ui_bg_opacity:r.name===l}),children:s("span",{className:"relative",children:[r.name,r.hot&&e(Lt,{})]})})},r.name))}),Rt=o.exports.memo(zt),It=()=>{const{cat:t=""}=B(),[a,l]=o.exports.useState(!1),{data:r,isLoading:i}=ae(),{data:n={},isLoading:c}=se();if(i&&c)return null;const v=(r==null?void 0:r.tags)||[],E=(n==null?void 0:n.categories)&&Object.entries(n.categories)||[],_=(n==null?void 0:n.sub)||[];return s("div",{className:"domHome_playlist_nav pt-4 pb-4 flex items-center",children:[s("div",{className:"relative",children:[s("button",{type:"button",className:"border flex items-center justify-center h-8 w-24 rounded-full hover:bg-gray-100 focus:outline-none text-sm",onClick:()=>l(!a),children:[decodeURIComponent(t),e(L,{size:20,stroke:1})]}),s("div",{className:"domHome_playlist_popup_nav absolute z-20 bg-white shadow text-sm divide-y top-full mt-1 pb-20",style:{display:a?null:"none"},children:[e("div",{className:"pl-8 py-4",children:e(b,{onClick:()=>l(!1),className:({isActive:h})=>m("text-gray-600 hover:ui_themeColor",h&&"on ui_themeColor"),to:"../\u5168\u90E8\u6B4C\u5355",children:e("span",{className:m("inline-flex inner px-4 py-1 rounded-full overflow-hidden",{ui_bg_opacity:t==="\u5168\u90E8\u6B4C\u5355"}),children:"\u5168\u90E8\u6B4C\u5355"})})}),e("div",{className:"p-5 space-y-4",children:E.map(([h,d])=>s("div",{className:"flex",children:[e("div",{className:"category text-gray-300",children:d}),e(Rt,{sub:_,category:h,cat:t})]},h))})]})]}),e("div",{className:"ml-auto flex",children:v==null?void 0:v.map(h=>e(b,{className:({isActive:d})=>m("text-gray-500 hover:text-gray-700 px-2 rounded-full text-center",d&&"ui_themeColor ui_bg_opacity"),to:`../${encodeURIComponent(h.name)}`,children:h.name},h.name))})]})},kt=o.exports.memo(It),Pt=()=>{var n;const{cat:t=""}=B(),[a,l]=o.exports.useState({}),[r,{isLoading:i}]=le();return o.exports.useEffect(()=>{(async()=>{const c=await r({cat:t,limit:1});l(c.data)})()},[t]),i?e("div",{className:"flex-center w-full h-full",children:e(w,{})}):e("div",{className:"px-8 overflow-auto max-h-full flex-auto",children:s("div",{className:"ui_w1100",children:[e(Ft,{item:(n=a==null?void 0:a.playlists)==null?void 0:n[0]}),e(kt,{}),e(C,{})]})})},Tt=o.exports.memo(Pt),Ht=()=>{const{cat:t="",page:a=1}=B(),l=J(),r=100,{data:i,isLoading:n}=re({order:"hot",cat:t,limit:r,offset:(Number(a)-1)*r});return n?e("div",{className:"flex-center",children:e(w,{})}):s(D,{children:[e(T,{className:"domHome_playlist_list grid gap-5",small:"grid-cols-4",big:"grid-cols-5",children:i==null?void 0:i.playlists.map(c=>e(De,{item:c},c.id))}),e(oe,{total:Math.ceil(i.total/100),page:a,func:c=>l(`../${c}`)})]})},Gt=o.exports.memo(Ht),Ut=()=>F([{index:!0,element:e($,{to:"\u5168\u90E8\u6B4C\u5355",replace:!0})},{path:":cat",element:e(Tt,{}),children:[{index:!0,element:e($,{to:"1",replace:!0})},{path:":page",element:e(Gt,{})}]}]),Ot=o.exports.memo(Ut);const Mt=({onClick:t,children:a,className:l})=>e("button",{type:"button",onClick:t,className:m("absolute inset-y-0 opacity-0 text-white bg-black bg-opacity-30 group-hover:opacity-100 z-10 w-8 h-8 flex-center rounded-full m-auto",l),children:a}),Q=o.exports.memo(Mt),jt=({banner:t,children:a})=>s("a",{...t.url?{href:t.url}:{onClick:l=>l.preventDefault(),href:"#"},className:"block",children:[e("img",{loading:"lazy",className:"",style:{width:1080*.5,height:400*.5},src:t.imageUrl,alt:"banner"}),e("div",{className:m("typeTitle px-3 py-2",t.titleColor==="blue"?"bg-blue-500":"bg-red-600"),children:t.typeTitle})]}),Qt=o.exports.memo(jt);const Vt=({onClick:t})=>e(Q,{onClick:t,className:"left-1",children:e(Ce,{size:16})}),qt=({onClick:t})=>e(Q,{onClick:t,className:"right-1",children:e(L,{size:16})}),Kt=({banners:t=[]})=>{const a=o.exports.useRef(null);return e("div",{className:"ui_swiper group",children:e(Fe,{...{className:"center",dots:!0,infinite:!0,centerMode:!0,adaptiveHeight:!0,draggable:!1,variableWidth:!0,speed:500,slidesToShow:1,slidesToScroll:1,pauseOnHover:!0,prevArrow:e(Vt,{}),nextArrow:e(qt,{}),customPaging:r=>e("div",{className:"customPaging",onMouseEnter:()=>a.current.slickGoTo(r)})},ref:a,children:t.map((r,i)=>e("div",{className:"cover overflow-hidden rounded-lg transition relative",children:e(Qt,{banner:r})},r.imageUrl))})})},Jt=o.exports.memo(Kt),Wt=({order:t,...a},l)=>e("div",{...a,ref:l,children:e("div",{className:"h-12 w-full text-base text-gray-500 bg-white hover:bg-gray-200 px-10",children:s("div",{className:"h-full flex items-center border-b",children:[t,e(Be,{className:"ml-auto cursor-move"})]})})}),V=o.exports.forwardRef(Wt),Zt=({order:t})=>{const{attributes:a,listeners:l,setNodeRef:r,transform:i,transition:n}=Se({id:t}),c={transform:Le.Transform.toString(i),transition:n};return e(V,{ref:r,style:c,...a,...l,order:t})},Yt=o.exports.memo(Zt),Xt=()=>{const t=G(),{dialogHomeOrderVisibility:a}=A(ne),{order:l}=A(U),[r,i]=o.exports.useState(l),[n,c]=o.exports.useState(null),v=()=>{i(ce)},E=()=>{t(R()),t(ue(r))},_=ze(I(Me),I(Oe,{coordinateGetter:Ue})),h=p=>{const{active:N}=p;c(N.id)},d=p=>{const{active:N,over:y}=p;N.id!==y.id&&i(x=>{const q=x.indexOf(N.id),K=x.indexOf(y.id);return je(x,q,K)}),c(null)};return a?e(ie,{title:"\u8C03\u6574\u680F\u76EE\u987A\u5E8F",width:388,children:s("div",{className:"content",children:[s("div",{className:"tips mx-10 text-gray-400 mb-6 flex items-center",children:[e(Ae,{size:14}),e("span",{className:"ml-1",children:"\u60F3\u8C03\u6574\u9996\u9875\u680F\u76EE\u7684\u987A\u5E8F?\u6309\u4F4F\u53F3\u8FB9\u7684\u6309\u94AE\u62D6\u52A8\u5373\u53EF"})]}),s(Re,{sensors:_,collisionDetection:Ie,onDragStart:h,onDragEnd:d,modifiers:[ke,Pe],children:[e(Te,{items:r,strategy:He,children:r.map(p=>e(Yt,{order:p},p))}),e(Ge,{children:n?e(V,{order:n}):null})]}),e("div",{className:"flex-center py-4",children:e("button",{onClick:v,type:"button",className:"underline text-gray-400 block",children:"\u6062\u590D\u9ED8\u8BA4\u6392\u5E8F"})}),s("div",{className:"flex-center pt-4 pb-8 space-x-2",children:[e("button",{onClick:E,type:"button",className:"rounded-full ui_theme_bg_color text-white h-8 w-20",children:"\u5B8C\u6210"}),e("button",{type:"button",className:"border rounded-full h-8 w-20",onClick:()=>t(R()),children:"\u53D6\u6D88"})]})]})}):null},ea=o.exports.memo(Xt),ta=({playlist:t=[]})=>{const{isLogin:a}=A(de);return a?s("div",{className:"grid gap-5 grid-cols-5 mt-4",children:[s("div",{className:"item",children:[s("div",{className:"cover border relative group rounded-lg overflow-hidden",children:[e(u,{to:"/daily-song",className:"aspect-square",children:e("div",{className:"inner",style:{color:"var(--theme-color)"},children:e(me,{})})}),e("button",{type:"button",className:"opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute m-2 right-0 bottom-0 rounded-full flex-center w-7 h-7 bg-white bg-opacity-90 ui_themeColor",children:e(f,{size:16,className:"fill-current"})})]}),e("div",{className:"footer break-all text-sm mt-2",children:e(u,{to:"/daily-song",children:"\u6BCF\u65E5\u6B4C\u66F2\u63A8\u8350"})})]}),t.slice(0,9).map(l=>s("div",{className:"item",children:[s("div",{className:"cover relative group rounded-lg overflow-hidden border",children:[s(u,{to:`/playlist/music/${l.id}`,className:"",children:[e("img",{loading:"lazy",className:"ui_containimg aspect-square",src:`${l.picUrl}?param=200y200`,alt:""}),e("div",{className:"absolute top-0 right-0 my-0.5 mx-2",children:s("span",{className:"text-white flex-center",children:[e(f,{size:12}),O(l.playcount)]})})]}),e(Qe,{id:l.id,className:"opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute m-2 right-0 bottom-0 rounded-full flex-center w-7 h-7 bg-white bg-opacity-90 ui_themeColor",children:e(f,{size:16,className:"fill-current"})})]}),e("div",{className:"footer break-all text-sm mt-2",children:e(u,{to:`/playlist/music/${l.id}`,className:"name ui_ellipse",children:l.name})})]},l.id))]}):e("div",{children:"\u9700\u8981\u767B\u5F55"})},aa=o.exports.memo(ta),sa=({privatecontent:t=[]})=>e("div",{className:"grid grid-cols-3 gap-4 mt-4",children:t.map(a=>s("div",{className:"item",children:[e(M,{item:a,type:"mv",schema:[["\u64AD\u653EMV"]],children:e("div",{className:"cover relative rounded overflow-hidden",children:s(u,{to:`/player/mv/${a.id}`,className:"",children:[e("span",{className:"ico absolute top-2 left-2 rounded-full text-white w-6 h-6 bg-black bg-opacity-40 flex-center border border-gray-200",children:e(f,{size:14,className:"fill-current"})}),e("img",{loading:"lazy",className:"w-full h-full ui_containimg aspect-video",src:a.sPicUrl,alt:""})]})})}),e("div",{className:"name text-sm loading-4 mt-2",children:e(u,{to:`/player/mv/${a.id}`,children:a.name})})]},a.id))}),la=o.exports.memo(sa),ra=({newsong:t=[]})=>e("div",{className:"grid gap-x-2 gap-y-4 mt-4 grid-cols-3 grid-rows-4 grid-flow-col",children:t.map(a=>s("div",{className:"item flex hover:bg-gray-100 rounded overflow-hidden",children:[s(pe,{id:a.id,className:"cover flex-none relative rounded overflow-hidden",children:[e("span",{className:"ico absolute text-red-500 bg-white rounded-full bg-opacity-90 inset-0 m-auto flex-center w-6 h-6",children:e(f,{size:16,className:"fill-current"})}),e("img",{loading:"lazy",className:"w-full h-full aspect-square",src:`${a.picUrl}?param=50y50`,alt:""})]}),s("div",{className:"content flex-auto flex flex-col w-0 px-2 py-1",children:[e("div",{className:"name text-sm truncate",children:a.name}),s("div",{className:"artist mt-1 flex",children:[e(H,{item:a,sq:a.song.privilege.maxbr===999e3,mv:a.song.mvid}),e("div",{className:"truncate",children:a.song.artists.map((l,r)=>s("span",{className:"text-gray-400",children:[r>0&&" / ",e(u,{to:`/artist/${l.id}`,className:"ui_text_gray_hover",children:l.name})]},l.id))})]})]})]},a.id))}),oa=o.exports.memo(ra),na=({djprogram:t=[]})=>e("div",{className:"grid grid-cols-5 gap-5 mt-4",children:t.slice(0,5).map(a=>{var l,r;return s("div",{className:"",children:[s(u,{to:`/playlist/dj/${(r=(l=a.program)==null?void 0:l.radio)==null?void 0:r.id}`,className:"block border relative rounded overflow-hidden",children:[e("img",{loading:"lazy",className:"w-full aspect-square",src:`${a.program.radio.picUrl}?param=200y200`,alt:""}),e("div",{className:"mask absolute left-0 right-0 bottom-0 h-1/4 ui_linear_mask_bottom"}),e("div",{className:"absolute left-0 right-0 bottom-0 p-2",children:e("div",{className:"text-white truncate",children:a.program.radio.name})})]}),e("div",{className:"name leading-5 text-sm mt-2",children:e(u,{to:`/playlist/dj/${a.program.radio.id}`,className:"text-gray-600 hover:text-black",children:a.program.radio.rcmdText})})]},a.id)})}),ia=o.exports.memo(na),ca=({mv:t=[]})=>e("div",{className:"grid gap-x-5 grid-cols-3 mt-4",children:t.slice(0,3).map(a=>s("div",{className:"item",children:[e(M,{type:"mv",item:a,schema:[["\u8BC4\u8BBA","\u64AD\u653EMV"],["\u6536\u85CFMV","\u5206\u4EAB","\u4E0B\u8F7D","\u590D\u5236\u94FE\u63A5"],["\u4E0D\u611F\u5174\u8DA3"]],children:s("div",{className:"cover border relative overflow-hidden rounded text-white",children:[e("div",{className:"absolute top-0 w-full px-2 py-3 ui_linear_mask_top pointer-events-none",children:a.copywriter}),e("div",{className:"absolute top-1 right-2 pointer-events-none",children:s("div",{className:"flex-center",children:[e(f,{size:12}),a.playCount]})}),e(u,{to:`/player/mv/${a.id}`,className:"block ",children:e("img",{loading:"lazy",className:"h-full object-cover w-full aspect-video",src:a.picUrl,alt:""})})]})}),e("div",{className:"name truncate text-sm mt-2",children:e(u,{className:"ui_text_black_hover",to:`/player/mv/${a.id}`,children:a.name})}),e("div",{className:"artist truncate mt-1",children:a.artists.map((l,r)=>s("span",{className:"text-gray-400",children:[r>0&&" / ",e(u,{to:"/artist/:id",className:"ui_text_gray_hover",children:l.name})]},l.id))})]},a.id))}),ua=o.exports.memo(ca),da={\u63A8\u8350\u6B4C\u5355:"/discover/playlist",\u72EC\u5BB6\u653E\u9001:"/exclusive",\u6700\u65B0\u97F3\u4E50:"/home/playlist",\u63A8\u8350MV:"/video/mv",\u4E3B\u64AD\u7535\u53F0:"/discover/dj"},ma={\u63A8\u8350\u6B4C\u5355:aa,\u72EC\u5BB6\u653E\u9001:la,\u6700\u65B0\u97F3\u4E50:oa,\u63A8\u8350MV:ua,\u4E3B\u64AD\u7535\u53F0:ia},pa=()=>{const{data:t,isLoading:a}=he(),{data:l}=ge(),{data:r}=xe(),{data:i}=fe({limit:12}),{data:n}=ve(),{data:c}=Ne(),v=(t==null?void 0:t.banners)||[],E=(l==null?void 0:l.recommend)||[],_=(r==null?void 0:r.result)||[],h=(i==null?void 0:i.result)||[],d=(n==null?void 0:n.result)||[],p=(c==null?void 0:c.result)||[],{order:N}=A(U),y=G();return a?e("div",{className:"flex-center w-full h-full",children:e(w,{})}):e("div",{className:"px-8 overflow-auto max-h-full flex-auto",children:s("div",{className:"ui_w1100",children:[e(Jt,{banners:v}),N.map(x=>s("div",{className:"mt-8",children:[s(u,{className:"h1 inline-flex items-center",to:da[x],children:[x,e(L,{size:24})]}),o.exports.createElement(ma[x],{playlist:E,privatecontent:_,newsong:h,mv:d,djprogram:p})]},x)),s("div",{className:"mt-4 text-center pb-10",children:[e("div",{className:"text-gray-500 mb-4",children:"\u73B0\u5728\u53EF\u4EE5\u6839\u636E\u4E2A\u4EBA\u559C\u597D\uFF0C\u81EA\u7531\u8C03\u6574\u9996\u9875\u680F\u76EE\u987A\u5E8F\u5566~"}),e("button",{type:"button",className:"ui_themeColor border rounded border-current w-32 h-8",onClick:()=>y(ye()),children:"\u8C03\u6574\u680F\u76EE\u987A\u5E8F"})]}),e(ea,{})]})})},ha=o.exports.memo(pa),ga=()=>e(S,{children:e(g,{path:"/*",children:e(g,{index:!0,element:e(ha,{})})})}),xa=({tracks:t=[]})=>e("div",{className:"official_rank_list flex-1 flex flex-col h-full",children:t.map((a,l)=>s("div",{tabIndex:2,className:m("item flex flex-1 px-2.5 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none",{"bg-gray-50":l%2===0}),children:[e("span",{className:m("index text-sm w-4",l<3?"ui_themeColor":"text-gray-300"),children:l+1}),e("span",{className:"status w-4 flex-center",children:"\xA0\u53E3\xA0"}),s("span",{className:"truncate flex-auto w-0",title:a.name+a.alia,children:[a.name,a.alia.length>0&&s("span",{className:"text-gray-400",children:["(",a.alia.map(r=>r),")"]})]}),e("span",{className:"ml-auto text-gray-500",title:a.ar.map(r=>r.name).join("/"),children:a.ar.map((r,i)=>s("span",{children:[i>0&&" / ",e(u,{to:`/artist/${r.id}`,className:"artist text-gray-400 hover:text-gray-500",children:r.name})]},r.id))})]},a.name))}),fa=o.exports.memo(xa),va=({id:t})=>{const{data:a,isLoading:l}=be({id:t}),r=(a==null?void 0:a.playlist)||{};return l?e(w,{}):s("div",{className:"official_rank flex",children:[s(u,{to:`/playlist/music/${r.id}`,className:"official_rank_cover mr-9 w-44 h-44 flex-none rounded-lg overflow-hidden relative group",children:[e("img",{className:"ui_containimg",src:`${r.coverImgUrl}?param=176y176`,alt:""}),e("div",{className:"absolute inset-0 m-auto flex-center text-white",children:s("span",{className:"pt-16",children:[j(r.updateTime).format("MM\u6708DD\u65E5"),"\u66F4\u65B0"]})}),e("button",{type:"button",className:"opacity-0 group-hover:opacity-100 absolute inset-0 m-auto flex-center rounded-full w-10 h-10 text-red-500 bg-white bg-opacity-50",children:e(f,{size:22,className:"fill-current"})})]}),s("div",{className:"official_rank_content flex-auto relative",children:[e(fa,{tracks:r.tracks.slice(0,5)}),e(u,{to:`/playlist/music/${r.id}`,className:"text-gray-400 hover:text-gray-500 absolute mt-2",children:"\u67E5\u770B\u5168\u90E8 >"})]})]})},Na=o.exports.memo(va),ya=({item:t})=>s("div",{className:"flex flex-col",children:[s(u,{to:`/playlist/music/${t.id}`,className:"group rounded overflow-hidden relative",children:[s("span",{className:"flex-center absolute top-0 right-0 py-0.5 px-2 text-white",children:[e(f,{size:12}),O(t.playCount)]}),e("img",{loading:"lazy",className:"w-full h-full object-fit ",src:`${t.coverImgUrl}?param=200y200`,alt:""}),e("button",{type:"button",className:"opacity-0 group-hover:opacity-100 absolute inset-0 m-auto bg-white text-red-500 w-10 h-10 rounded-full flex-center bg-opacity-95",children:e(f,{size:20,className:"fill-current"})})]}),e(u,{to:`/playlist/music/${t.id}`,className:"mt-1 text-sm text-gray-600 hover:text-black",children:t.name})]}),ba=o.exports.memo(ya),wa=()=>{const{data:t,isLoading:a}=we(),l=(t==null?void 0:t.list)||[];return a?e("div",{className:"flex-center w-full h-full",children:e(w,{})}):e("div",{className:"px-8 overflow-auto max-h-full flex-auto",children:s("div",{className:"ui_w1100",children:[e("div",{className:"h1 mb-4",children:"\u5B98\u65B9\u699C"}),e("div",{className:"space-y-12",children:l.slice(0,4).map(({id:r})=>e(Na,{id:r},r))}),e("div",{className:"h1 mt-7 mb-4",children:"\u5168\u7403\u699C"}),e("div",{className:"grid grid-cols-5 gap-5",children:l.slice(4).map(r=>e(ba,{item:r},r.id))})]})})},Ea=o.exports.memo(wa),_a=()=>s(S,{children:[e(g,{index:!0,element:e($,{to:"Recommend",replace:!0})}),s(g,{path:"/*",element:e(Ke,{}),children:[e(g,{path:"Recommend/*",element:e(ga,{})}),e(g,{path:"Playlist/*",element:e(Ot,{})}),e(g,{path:"TopList",element:e(Ea,{})}),e(g,{path:"Artist",element:e(at,{})}),e(g,{path:"Newest/*",element:e(At,{})})]})]}),Wa=o.exports.memo(_a);export{Wa as default};