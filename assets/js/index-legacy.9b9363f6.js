System.register(["./react-legacy.b3bc90c5.js","./react-router-dom-legacy.ff1dcab2.js","./react-slick-legacy.d6ab9305.js","./useInfinite-legacy.b5d5e5d0.js","./Resize-legacy.5339cc2f.js","./index-legacy.cddbfdb9.js","./@tabler/icons-legacy.4bc7b915.js","./qrcode.react-legacy.364768f0.js","./Item-legacy.16fabc13.js","./Swiper-legacy.026194b9.js","./PlaylistAsyncReplace-legacy.1aefc13c.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.ec913dab.js","./immer-legacy.c38810dc.js","./axios-legacy.36e845a7.js","./rxjs-legacy.4f91953b.js","./react-use-legacy.79acac46.js","./store-legacy.0145af8a.js","./react-transition-group-legacy.3b11e6a0.js"],(function(e,a){"use strict";var t,l,i,s,r,c,o,n,d,m,p,h,u,x,g,v,f,N,y,b,w,_,k,$,j,C,z,U,I,M,R,H,L,A,S,q,D,O,P,V,E,T,Y,B,F,Z,G,J,K,Q,W,X,ee,ae,te,le,ie,se,re,ce,oe=document.createElement("style");return oe.innerHTML='._item_1c86c_1:not(:last-of-type):after{background-color:#ddd;content:"";height:12px;margin-left:auto;position:absolute;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:1px}.domHome_playlist_banner{height:170px;padding:15px}.domHome_playlist_banner .tag{color:#e7aa5a;height:30px;width:100px}.domHome_playlist_popup_nav{width:744px}.domHome_playlist_popup_nav .category{width:100px}#dialogHomeOrder{width:470px}\n',document.head.appendChild(oe),{setters:[e=>{t=e.r},e=>{l=e.L,i=e.N,s=e.O,r=e.b,c=e.e,o=e.d,n=e.u},e=>{d=e.c},e=>{m=e.u},e=>{p=e.R},e=>{h=e.i,u=e.a0,x=e.L,g=e.a1,v=e.T,f=e.A,N=e.d,y=e.a2,b=e.a3,w=e.a4,_=e.a5,k=e.a6,$=e.a7,j=e.P,C=e.a8,z=e.u,U=e.n,I=e.a9,M=e.aa,R=e.ab,H=e.ac,L=e.ad,A=e.ae,S=e._,q=e.t,D=e.M,O=e.af,P=e.ag,V=e.ah,E=e.ai,T=e.aj,Y=e.ak,B=e.al,F=e.am,Z=e.an,G=e.ao},e=>{J=e.G,K=e.p,Q=e.Z,W=e.an,X=e.C,ee=e.ao,ae=e.ap},e=>{te=e.a,le=e.j,ie=e.F},e=>{se=e.I},e=>{re=e.S},e=>{ce=e.P},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a="_item_1c86c_1",oe=t.exports.memo((({item:e={}})=>te("div",{className:"item",children:[le("div",{className:"cover boarder relative rounded overflow-hidden border",children:le(l,{to:`/artist/${e.id}`,className:"",children:le("img",{loading:"lazy",className:"aspect-square w-full h-full",src:`${e.img1v1Url}?param=200y200`,alt:e.name})})}),te("div",{className:"info flex items-center justify-between mt-2 text-sm text-gray-600 hover:text-black",children:[le(l,{to:`/artist/${e.id}`,children:e.name}),e.accountId&&le(l,{to:`/user/${e.accountId}`,className:"bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5",children:le(J,{size:12})})]})]}))),ne=[{type:"语种",code:"area",sub:[[-1,"全部",1],[7,"华语",1],[96,"欧美",2],[8,"日本",4],[16,"韩国",3],[0,"其他",1]]},{type:"分类",code:"type",sub:[[-1,"全部"],[1,"男歌手"],[2,"女歌手"],[3,"乐队"]]},{type:"筛选",code:"initial",sub:[[-1,"热门"],["A","A"],["B","B"],["C","C"],["D","D"],["E","E"],["F","F"],["G","G"],["H","H"],["I","I"],["J","J"],["K","K"],["L","L"],["M","M"],["N","N"],["O","O"],["P","P"],["Q","Q"],["R","R"],["S","S"],["T","T"],["U","U"],["V","V"],["W","W"],["X","X"],["Y","Y"],["Z","Z"],["#","#"]]}],de={type:-1,area:-1,initial:-1},me=t.exports.memo((function(){const[e,l]=h((()=>de)),i=t.exports.useRef(e),s=t.exports.useRef(0),r=t.exports.useRef(null),c=t.exports.useRef(null),[o,n]=h([]),[g,{}]=u();return t.exports.useEffect((()=>{i.current=e}),[e]),m((async()=>{try{const{type:e,area:a,initial:t}=i.current,l=await g({type:e,area:a,initial:t,limit:30,offset:s.current});s.current+=30,n((e=>{e.push(...l.data.artists)}))}catch(e){console.log(e)}}),r,c),te("div",{className:"px-8 pb-8 overflow-auto h-full flex-auto",ref:r,children:[te("div",{className:"ui_w1100",children:[le("div",{className:"space-y-1",children:ne.map((({type:t,code:i,sub:r})=>te("div",{className:"flex items-baseline whitespace-nowrap",children:[le("div",{className:"w-10 flex-none",children:t}),le("div",{className:"flex flex-wrap",children:r.map((([t,r])=>le("div",{className:d(a,"item flex-center relative w-20 my-0.5"),children:le("button",{type:"button",onClick:()=>{return e={[i]:t},l((a=>({...a,...e}))),s.current=0,void n([]);var e},className:d("px-2 rounded-full",t===e[i]&&"ui_themeColor ui_bg_opacity"),children:r})},t)))})]},t)))}),le(p,{className:"mt-2.5 grid gap-4",small:"grid-cols-5",big:"grid-cols-6",children:o.map((e=>le(oe,{item:e},e.id)))})]}),le("div",{className:"flex-center",ref:c,children:le(x,{})})]})})),pe=["新歌速递","新碟上架"],he=t.exports.memo((()=>te("div",{className:"overflow-auto max-h-full flex-auto",children:[le("div",{className:"flex border rounded-full mx-auto w-min",children:pe.map((e=>le(i,{className:({isActive:e})=>d("w-28 rounded-full flex-center h-7",!e&&"hover:bg-gray-100",e&&"text-white bg-gray-400"),to:encodeURIComponent(e),children:e},e)))}),le(s,{})]}))),ue=["全部","华语","欧美","韩国","日本"],xe={"全部":0,"华语":7,"欧美":96,"韩国":16,"日本":8},ge={"全部":"ALL","华语":"ZH","欧美":"EA","韩国":"KR","日本":"JP"},ve=["全部","华语","欧美","韩国","日本"],fe={"全部":"new","推荐":"hot"},Ne=["推荐","全部"],ye=t.exports.memo((()=>te(ie,{children:[te("div",{className:"flex px-8 py-2",children:[le("div",{className:"flex gap-x-4 text-sm",children:ue.map((e=>le(i,{className:({isActive:e})=>d(e&&"font-bold"),to:encodeURI(e),children:e},e)))}),te("div",{className:"ml-auto flex space-x-2 text-sm",children:[te("button",{type:"button",className:"flex-center ui_theme_bg_color text-white rounded-full px-2 py-0.5",children:[le(K,{size:16,stroke:1,className:"fill-current"}),"播放全部"]}),te("button",{type:"button",className:"flex-center rounded-full border px-2 py-0.5",children:[le(Q,{size:16,stroke:1}),"收藏全部"]})]})]}),le(s,{})]}))),be=t.exports.memo((()=>{const{type:e=""}=r(),{data:a,isLoading:t,isFetching:i}=g({type:xe[e]});return t?le(x,{}):le("div",{className:"",children:a?.data?.map(((e,a)=>te("div",{className:d("h-20 py-2.5 flex items-center px-8 text-sm",{"bg-gray-50":a%2==0}),children:[le("span",{className:"text-gray-300 w-8",children:String(a+1).padStart(2,"0")}),te("button",{type:"button",className:"w-16 relative rounded overflow-hidden border",children:[le("img",{loading:"lazy",className:"aspect-square w-full h-full",src:`${e.album.blurPicUrl}?param=100y100`,alt:""}),le("i",{className:"absolute w-6 h-6 m-auto flex-center inset-0 ui_themeColor bg-white bg-opacity-90 rounded-full",children:le(K,{size:14,className:"fill-current"})})]}),te("span",{className:"px-2.5 w-0 flex items-center flex-auto",children:[le("div",{className:"truncate",children:e.name}),le(v,{item:e,mv:e.mvid})]}),le("span",{className:"truncate w-1/5 px-1",children:le(f,{artists:e.artists})}),le("span",{className:"truncate w-1/5 px-1",children:le(l,{to:`${e.album.id}`,className:"ui_text_gray_hover",children:e.album.name})}),le("span",{className:"text-gray-400 text-right",children:N(e.duration).format("mm:ss")})]},e.id)))})})),we=t.exports.memo((()=>c([{index:!0,element:le(o,{to:"全部",replace:!0})},{path:"/",element:le(ye,{}),children:[{path:":type",element:le(be,{})}]}]))),_e=t.exports.memo((()=>te(ie,{children:[le("div",{className:"flex px-8 py-2",children:le("div",{className:"flex space-x-4 text-sm",children:ve.map((e=>le(i,{to:encodeURI(e),className:({isActive:e})=>d(e&&"font-bold"),children:e},e)))})}),le(s,{})]}))),ke=t.exports.memo((({item:e})=>te("div",{className:"item",children:[le("div",{className:"shadow rounded overflow-hidden",children:le(l,{to:`/playlist/album/${e.id}`,children:le("img",{loading:"lazy",className:" aspect-square w-full h-full object-fit",src:`${e.blurPicUrl}?param=170y170`,alt:""})})}),le("div",{className:"name text-sm ui_ellipse mt-2",children:te(l,{to:`/playlist/album/${e.id}`,children:[le("span",{className:"ui_text_black_hover",children:e.name})," ",e.alias.length>0&&te("span",{className:"text-gray-400",children:["(",e.alias,")"]}),e.transNames&&le("span",{children:e.transNames})]})}),le("div",{className:"artist mt-2",children:le(l,{to:`/artist/${e.artist.id}`,className:"ui_text_gray_hover",children:e.artist.name},e.artist.id)})]}))),$e=t.exports.memo((()=>{const{area:e="",type:a=""}=r(),{data:t,isLoading:l}=y({area:ge[e],type:fe[a],limit:b,offset:0}),i=t?.weekData||[],s=t?.monthData||[];return l?le(x,{}):te("div",{className:"px-8",children:[i.length>0&&te("div",{className:"domHome_newest_album_sublist relative pl-12 mb-12",children:[te("div",{className:"sign w-10 h-10 absolute top-0 left-0 text-lg",children:["本周",le("br",{}),"新碟"]}),le("div",{className:"list grid grid-cols-4 gap-5",children:i.map((e=>le(ke,{item:e},e.id)))})]}),s.length>0&&te("div",{className:"domHome_newest_album_sublist relative pl-12 mb-12",children:[te("div",{className:"sign w-10 h-10 absolute top-0 left-0 text-lg",children:["本月",le("br",{}),"新碟"]}),le("div",{className:"list grid grid-cols-4 gap-5",children:s.map((e=>le(ke,{item:e},e.id)))})]})]})})),je=t.exports.memo((()=>te(ie,{children:[le("div",{className:"flex -mt-7 mb-8 px-8",children:le("div",{className:"flex ml-auto gap-4",children:Ne.map((e=>le(i,{to:encodeURIComponent(e),className:({isActive:e})=>d(e&&"font-bold"),children:e},e)))})}),le(s,{})]}))),Ce=t.exports.memo((()=>c([{path:"/*",element:le(_e,{}),children:[{index:!0,element:le(o,{to:"全部",replace:!0})},{path:":area",element:le(je,{}),children:[{index:!0,element:le(o,{to:"推荐",replace:!0})},{path:":type",element:le($e,{})}]}]}]))),ze=t.exports.memo((()=>c([{path:"/",element:le(he,{}),children:[{index:!0,element:le(o,{to:"新歌速递",replace:!0})},{path:encodeURIComponent("新歌速递")+"/*",element:le(we,{})},{path:encodeURIComponent("新碟上架")+"/*",element:le(Ce,{})}]}]))),Ue=t.exports.memo((({item:e})=>{const{cat:a=""}=r();return e?te(l,{to:`/HighQuality/${a}`,className:"domHome_playlist_banner flex items-center relative rounded-lg overflow-hidden z-10",children:[le("div",{className:"absolute inset-0 bg-center",style:{backgroundImage:`url(${e.coverImgUrl})`,filter:"blur(20px) grayscale(80%)",zIndex:"-1"}}),le("div",{className:"cover w-36 h-36 rounded-lg overflow-hidden",children:le("img",{src:e.coverImgUrl,alt:""})}),te("div",{className:"contennt ml-2.5",children:[te("div",{className:"tag border border-current flex-center text-sm rounded-full",children:[le(W,{size:16}),"  精品歌单"]}),le("div",{className:"text-white text-base mt-4",children:e.name}),le("div",{className:"text-gray-300 mt-2",children:e.copywriter})]})]}):null})),Ie=t.exports.memo((()=>le("svg",{className:"absolute left-full top-1/4 fill-current",viewBox:"0 0 12 12",width:"12",height:"6",children:le("text",{dominantBaseline:"middle",textAnchor:"middle",x:"0.5em",y:"0.5em",className:"fill-current ui_themeColor font-bold",children:"hot"})}))),Me=t.exports.memo((({sub:e=[],category:a=null,cat:t=""})=>le("div",{className:"flex-auto grid grid-cols-6 gap-y-4",children:e.filter((e=>e.category===Number(a))).map((e=>le(i,{className:({isActive:e})=>d("text-gray-600 hover:ui_themeColor",e&&"on ui_themeColor"),to:`../${encodeURIComponent(e.name)}`,children:le("span",{className:d("inline-flex inner px-4 py-1 rounded-full overflow-hidden",{ui_bg_opacity:e.name===t}),children:te("span",{className:"relative",children:[e.name,e.hot&&le(Ie,{})]})})},e.name)))}))),Re=t.exports.memo((()=>{const{cat:e=""}=r(),[a,l]=t.exports.useState(!1),{data:s,isLoading:c}=w(),{data:o={},isLoading:n}=_();if(c&&n)return null;const m=s?.tags||[],p=o?.categories&&Object.entries(o.categories)||[],h=o?.sub||[];return te("div",{className:"domHome_playlist_nav pt-4 pb-4 flex items-center",children:[te("div",{className:"relative",children:[te("button",{type:"button",className:"border flex items-center justify-center h-8 w-24 rounded-full hover:bg-gray-100 focus:outline-none text-sm",onClick:()=>l(!a),children:[decodeURIComponent(e),le(X,{size:20,stroke:1})]}),te("div",{className:"domHome_playlist_popup_nav absolute z-20 bg-white shadow text-sm divide-y top-full mt-1 pb-20",style:{display:a?null:"none"},children:[le("div",{className:"pl-8 py-4",children:le(i,{onClick:()=>l(!1),className:({isActive:e})=>d("text-gray-600 hover:ui_themeColor",e&&"on ui_themeColor"),to:"../全部歌单",children:le("span",{className:d("inline-flex inner px-4 py-1 rounded-full overflow-hidden",{ui_bg_opacity:"全部歌单"===e}),children:"全部歌单"})})}),le("div",{className:"p-5 space-y-4",children:p.map((([a,t])=>te("div",{className:"flex",children:[le("div",{className:"category text-gray-300",children:t}),le(Me,{sub:h,category:a,cat:e})]},a)))})]})]}),le("div",{className:"ml-auto flex",children:m?.map((e=>le(i,{className:({isActive:e})=>d("text-gray-500 hover:text-gray-700 px-2 rounded-full text-center",e&&"ui_themeColor ui_bg_opacity"),to:`../${encodeURIComponent(e.name)}`,children:e.name},e.name)))})]})})),He=t.exports.memo((()=>{const{cat:e=""}=r(),[a,l]=t.exports.useState({}),[i,{isLoading:c}]=k();return t.exports.useEffect((()=>{(async()=>{const a=await i({cat:e,limit:1});l(a.data)})()}),[e]),le("div",c?{className:"flex-center w-full h-full",children:le(x,{})}:{className:"px-8 overflow-auto max-h-full flex-auto",children:te("div",{className:"ui_w1100",children:[le(Ue,{item:a?.playlists?.[0]}),le(Re,{}),le(s,{})]})})})),Le=t.exports.memo((()=>{const{cat:e="",page:a=1}=r(),t=n(),{data:l,isLoading:i}=$({order:"hot",cat:e,limit:100,offset:100*(Number(a)-1)});return i?le("div",{className:"flex-center",children:le(x,{})}):te(ie,{children:[le(p,{className:"domHome_playlist_list grid gap-5",small:"grid-cols-4",big:"grid-cols-5",children:l?.playlists.map((e=>le(se,{item:e},e.id)))}),le(j,{total:Math.ceil(l.total/100),page:a,func:e=>t(`../${e}`)})]})})),Ae=t.exports.memo((()=>c([{index:!0,element:le(o,{to:"全部歌单",replace:!0})},{path:":cat",element:le(He,{}),children:[{index:!0,element:le(o,{to:"1",replace:!0})},{path:":page",element:le(Le,{})}]}]))),Se=t.exports.memo((({order:e})=>{const{currentOrder:a,onMouseMove:l,onMouseUp:i,onMouseDown:s,active:r,top:c}=(({order:e})=>{const[a,l]=h(e),[i,s]=t.exports.useState(""),[r,c]=t.exports.useState(0),[o,n]=t.exports.useState(0);return t.exports.useRef(-1/0),t.exports.useRef(r),t.exports.useRef(o),{currentOrder:a,onMouseMove:e=>{},onMouseUp:()=>{},onMouseDown:(e,a)=>e=>{},active:i,top:r}})({order:e});return le("div",{className:"flex flex-col relative",children:a.map(((e,a)=>le("div",{className:"h-12 text-base text-gray-500 bg-white",children:te(C,{onMouseMove:l,onMouseUp:i,onMouseDown:s(e,a),className:d("w-full border-b hover:bg-gray-200 px-10 h-12 flex items-center",r===e&&"absolute shadow z-10"),style:{transform:`translateY(${r===e?c:0}px)`},children:[e,le(ee,{className:"ml-auto cursor-move"})]})},e)))})})),qe=t.exports.memo((()=>{const e=z(),{dialogHomeOrderVisibility:a}=U((({mask:e})=>e)),{order:l}=U(I),[i,s]=t.exports.useState(l);return a?le(M,{id:"dialogHomeOrder",title:"调整栏目顺序",children:te("div",{className:"content",children:[te("div",{className:"tips mx-10 text-gray-400 mb-6 flex items-center",children:[le(ae,{size:14}),le("span",{className:"ml-1",children:"想调整首页栏目的顺序?按住右边的按钮拖动即可"})]}),le(Se,{order:i}),le("div",{className:"flex-center py-4",children:le("button",{onClick:()=>{s(H)},type:"button",className:"underline text-gray-400 block",children:"恢复默认排序"})}),te("div",{className:"flex-center pt-4 pb-8 space-x-2",children:[le("button",{onClick:()=>{e(R()),e(L(i))},type:"button",className:"rounded-full ui_theme_bg_color text-white h-8 w-20",children:"完成"}),le("button",{type:"button",className:"border rounded-full h-8 w-20",onClick:()=>e(R()),children:"取消"})]})]})}):null})),De=t.exports.memo((({playlist:e=[]})=>{const{isLogin:a}=U(A);return a?te("div",{className:"grid gap-5 grid-cols-5 mt-4",children:[te("div",{className:"item",children:[te("div",{className:"cover border relative group rounded-lg overflow-hidden",children:[le(l,{to:"/daily-song",className:"aspect-square",children:le("div",{className:"inner",style:{color:"var(--theme-color)"},children:le(S,{})})}),le("button",{type:"button",className:"opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute m-2 right-0 bottom-0 rounded-full flex-center w-7 h-7 bg-white bg-opacity-90 ui_themeColor",children:le(K,{size:16,className:"fill-current"})})]}),le("div",{className:"footer break-all text-sm mt-2",children:le(l,{to:"/daily-song",children:"每日歌曲推荐"})})]}),e.slice(0,9).map((e=>te("div",{className:"item",children:[te("div",{className:"cover relative group rounded-lg overflow-hidden border",children:[te(l,{to:`/playlist/music/${e.id}`,className:"",children:[le("img",{loading:"lazy",className:"ui_containimg aspect-square",src:`${e.picUrl}?param=200y200`,alt:""}),le("div",{className:"absolute top-0 right-0 my-0.5 mx-2",children:te("span",{className:"text-white flex-center",children:[le(K,{size:12}),q(e.playcount)]})})]}),le(ce,{id:e.id,className:"opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute m-2 right-0 bottom-0 rounded-full flex-center w-7 h-7 bg-white bg-opacity-90 ui_themeColor",children:le(K,{size:16,className:"fill-current"})})]}),le("div",{className:"footer break-all text-sm mt-2",children:le(l,{to:`/playlist/music/${e.id}`,className:"name ui_ellipse",children:e.name})})]},e.id)))]}):le("div",{children:"需要登录"})})),Oe=t.exports.memo((({privatecontent:e=[]})=>le("div",{className:"grid grid-cols-3 gap-4 mt-4",children:e.map((e=>te("div",{className:"item",children:[le(D,{item:e,type:"mv",schema:[["播放MV"]],children:le("div",{className:"cover relative rounded overflow-hidden",children:te(l,{to:`/player/mv/${e.id}`,className:"",children:[le("span",{className:"ico absolute top-2 left-2 rounded-full text-white w-6 h-6 bg-black bg-opacity-40 flex-center border border-gray-200",children:le(K,{size:14,className:"fill-current"})}),le("img",{loading:"lazy",className:"w-full h-full ui_containimg aspect-video",src:e.sPicUrl,alt:""})]})})}),le("div",{className:"name text-sm loading-4 mt-2",children:le(l,{to:`/player/mv/${e.id}`,children:e.name})})]},e.id)))}))),Pe=t.exports.memo((({newsong:e=[]})=>le("div",{className:"grid gap-x-2 gap-y-4 mt-4 grid-cols-3 grid-rows-4 grid-flow-col",children:e.map((e=>te("div",{className:"item flex hover:bg-gray-100 rounded overflow-hidden",children:[te(O,{id:e.id,className:"cover flex-none relative rounded overflow-hidden",children:[le("span",{className:"ico absolute text-red-500 bg-white rounded-full bg-opacity-90 inset-0 m-auto flex-center w-6 h-6",children:le(K,{size:16,className:"fill-current"})}),le("img",{loading:"lazy",className:"w-full h-full aspect-square",src:`${e.picUrl}?param=50y50`,alt:""})]}),te("div",{className:"content flex-auto flex flex-col w-0 px-2 py-1",children:[le("div",{className:"name text-sm truncate",children:e.name}),te("div",{className:"artist mt-1 flex",children:[le(v,{item:e,sq:999e3===e.song.privilege.maxbr,mv:e.song.mvid}),le("div",{className:"truncate",children:e.song.artists.map(((e,a)=>te("span",{className:"text-gray-400",children:[a>0&&" / ",le(l,{to:`/artist/${e.id}`,className:"ui_text_gray_hover",children:e.name})]},e.id)))})]})]})]},e.id)))}))),Ve=t.exports.memo((({djprogram:e=[]})=>le("div",{className:"grid grid-cols-5 gap-5 mt-4",children:e.slice(0,5).map((e=>te("div",{className:"",children:[te(l,{to:`/playlist/dj/${e.program?.radio?.id}`,className:"block border relative rounded overflow-hidden",children:[le("img",{loading:"lazy",className:"w-full aspect-square",src:`${e.program.radio.picUrl}?param=200y200`,alt:""}),le("div",{className:"mask absolute left-0 right-0 bottom-0 h-1/4 ui_linear_mask_bottom"}),le("div",{className:"absolute left-0 right-0 bottom-0 p-2",children:le("div",{className:"text-white truncate",children:e.program.radio.name})})]}),le("div",{className:"name leading-5 text-sm mt-2",children:le(l,{to:`/playlist/dj/${e.program.radio.id}`,className:"text-gray-600 hover:text-black",children:e.program.radio.rcmdText})})]},e.id)))}))),Ee=t.exports.memo((({mv:e=[]})=>le("div",{className:"grid gap-x-5 grid-cols-3 mt-4",children:e.slice(0,3).map((e=>te("div",{className:"item",children:[le(D,{type:"mv",item:e,schema:[["评论","播放MV"],["收藏MV","分享","下载","复制链接"],["不感兴趣"]],children:te("div",{className:"cover border relative overflow-hidden rounded text-white",children:[le("div",{className:"absolute top-0 w-full px-2 py-3 ui_linear_mask_top pointer-events-none",children:e.copywriter}),le("div",{className:"absolute top-1 right-2 pointer-events-none",children:te("div",{className:"flex-center",children:[le(K,{size:12}),e.playCount]})}),le(l,{to:`/player/mv/${e.id}`,className:"block ",children:le("img",{loading:"lazy",className:"h-full object-cover w-full aspect-video",src:e.picUrl,alt:""})})]})}),le("div",{className:"name truncate text-sm mt-2",children:le(l,{className:"ui_text_black_hover",to:`/player/mv/${e.id}`,children:e.name})}),le("div",{className:"artist truncate mt-1",children:e.artists.map(((e,a)=>te("span",{className:"text-gray-400",children:[a>0&&" / ",le(l,{to:"/artist/:id",className:"ui_text_gray_hover",children:e.name})]},e.id)))})]},e.id)))}))),Te={"推荐歌单":"/discover/playlist","独家放送":"/exclusive","最新音乐":"/home/playlist","推荐MV":"/video/mv","主播电台":"/discover/dj"},Ye={"推荐歌单":De,"独家放送":Oe,"最新音乐":Pe,"推荐MV":Ee,"主播电台":Ve},Be=t.exports.memo((()=>{const{data:e,isLoading:a}=P(),{data:i}=V(),{data:s}=E(),{data:r}=T({limit:12}),{data:c}=Y(),{data:o}=B(),n=e?.banners||[],d=i?.recommend||[],m=s?.result||[],p=r?.result||[],h=c?.result||[],u=o?.result||[],{order:g}=U(I),v=z();return le("div",a?{className:"flex-center w-full h-full",children:le(x,{})}:{className:"px-8 overflow-auto max-h-full flex-auto",children:te("div",{className:"ui_w1100",children:[le(re,{banners:n}),g.map((e=>te("div",{className:"mt-8",children:[te(l,{className:"h1 inline-flex items-center",to:Te[e],children:[e,le(X,{size:24})]}),t.exports.createElement(Ye[e],{playlist:d,privatecontent:m,newsong:p,mv:h,djprogram:u})]},e))),te("div",{className:"mt-4 text-center pb-10",children:[le("div",{className:"text-gray-500 mb-4",children:"现在可以根据个人喜好，自由调整首页栏目顺序啦~"}),le("button",{type:"button",className:"ui_themeColor border rounded border-current w-32 h-8",onClick:()=>v(F()),children:"调整栏目顺序"})]}),le(qe,{})]})})})),Fe=t.exports.memo((({tracks:e=[]})=>le("div",{className:"official_rank_list flex-1 flex flex-col h-full",children:e.map(((e,a)=>te("div",{tabIndex:2,className:d("item flex flex-1 px-2.5 items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none",{"bg-gray-50":a%2==0}),children:[le("span",{className:d("index text-sm w-4",a<3?"ui_themeColor":"text-gray-300"),children:a+1}),le("span",{className:"status w-4 flex-center",children:" 口 "}),te("span",{className:"truncate flex-auto w-0",title:e.name+e.alia,children:[e.name,e.alia.length>0&&te("span",{className:"text-gray-400",children:["(",e.alia.map((e=>e)),")"]})]}),le("span",{className:"ml-auto text-gray-500",title:e.ar.map((e=>e.name)).join("/"),children:e.ar.map(((e,a)=>te("span",{children:[a>0&&" / ",le(l,{to:`/artist/${e.id}`,className:"artist text-gray-400 hover:text-gray-500",children:e.name})]},e.id)))})]},e.name)))}))),Ze=t.exports.memo((({id:e})=>{const{data:a,isLoading:t}=Z({id:e}),i=a?.playlist||{};return t?le(x,{}):te("div",{className:"official_rank flex",children:[te(l,{to:`/playlist/music/${i.id}`,className:"official_rank_cover mr-9 w-44 h-44 flex-none rounded-lg overflow-hidden relative group",children:[le("img",{className:"ui_containimg",src:`${i.coverImgUrl}?param=176y176`,alt:""}),le("div",{className:"absolute inset-0 m-auto flex-center text-white",children:te("span",{className:"pt-16",children:[N(i.updateTime).format("MM月DD日"),"更新"]})}),le("button",{type:"button",className:"opacity-0 group-hover:opacity-100 absolute inset-0 m-auto flex-center rounded-full w-10 h-10 text-red-500 bg-white bg-opacity-50",children:le(K,{size:22,className:"fill-current"})})]}),te("div",{className:"official_rank_content flex-auto relative",children:[le(Fe,{tracks:i.tracks.slice(0,5)}),le(l,{to:`/playlist/music/${i.id}`,className:"text-gray-400 hover:text-gray-500 absolute mt-2",children:"查看全部 >"})]})]})})),Ge=t.exports.memo((({item:e})=>te("div",{className:"flex flex-col",children:[te(l,{to:`/playlist/music/${e.id}`,className:"group rounded overflow-hidden relative",children:[te("span",{className:"flex-center absolute top-0 right-0 py-0.5 px-2 text-white",children:[le(K,{size:12}),q(e.playCount)]}),le("img",{loading:"lazy",className:"w-full h-full object-fit ",src:`${e.coverImgUrl}?param=200y200`,alt:""}),le("button",{type:"button",className:"opacity-0 group-hover:opacity-100 absolute inset-0 m-auto bg-white text-red-500 w-10 h-10 rounded-full flex-center bg-opacity-95",children:le(K,{size:20,className:"fill-current"})})]}),le(l,{to:`/playlist/music/${e.id}`,className:"mt-1 text-sm text-gray-600 hover:text-black",children:e.name})]}))),Je=t.exports.memo((()=>{const{data:e,isLoading:a}=G(),t=e?.list||[];return le("div",a?{className:"flex-center w-full h-full",children:le(x,{})}:{className:"px-8 overflow-auto max-h-full flex-auto",children:te("div",{className:"ui_w1100",children:[le("div",{className:"h1 mb-4",children:"官方榜"}),le("div",{className:"space-y-12",children:t.slice(0,4).map((({id:e})=>le(Ze,{id:e},e)))}),le("div",{className:"h1 mt-7 mb-4",children:"全球榜"}),le("div",{className:"grid grid-cols-5 gap-5",children:t.slice(4).map((e=>le(Ge,{item:e},e.id)))})]})})})),Ke=["个性推荐","歌单","排行榜","歌手","最新音乐"],Qe=[Be,Ae,Je,me,ze],We=Ke.map(((e,a)=>[encodeURIComponent(e),Qe[a]])),Xe=t.exports.memo((()=>te("div",{className:"flex flex-col h-full",children:[le("div",{className:"ui_header text-base gap-x-5",children:Ke.map((e=>le(i,{className:({isActive:e})=>d(e&&"text-xl font-bold ui_underline"),to:encodeURI(e),children:e},e)))}),le(s,{})]})));e("default",t.exports.memo((()=>c([{path:"/*",element:le(Xe,{}),children:We.map((([e,a])=>({path:`${e}/*`,element:le(a,{})})))},{index:!0,element:le(o,{to:We[0][0],replace:!0})}]))))}}}));
