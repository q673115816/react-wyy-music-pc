System.register(["./react-legacy.b3bc90c5.js","./react-router-dom-legacy.2933718f.js","./react-slick-legacy.d6ab9305.js","./index-legacy.1089c68a.js","./Rank-legacy.df487ab8.js","./Download-legacy.c09fd937.js","./Album-legacy.76ad48f4.js","./qrcode.react-legacy.685a2ddb.js","./@tabler/icons-legacy.42c83e77.js","./Home-legacy.6c300539.js","./Gender-legacy.c0c828f4.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.b70b910a.js","./immer-legacy.c38810dc.js","./axios-legacy.6d9fa2e4.js","./rxjs-legacy.7d2f3ae5.js","./react-use-legacy.78116f18.js","./react-transition-group-legacy.b5e58023.js"],(function(e,a){"use strict";var t,s,l,i,r,c,d,n,m,o,h,u,p,g,x,y,N,v,f,b,_,w,j,k,$,C,S,I,U,z,E,R,L,A,H,M=document.createElement("style");return M.innerHTML="._lrc_1aibo_1{grid-column:4/9}._content_1aibo_5{white-space:pre-line;word-break:break-all}._content_1aibo_5:first-line{font-size:larger;margin-bottom:.2em}._content_1aibo_5 b{color:var(--linkColor);font-weight:400}.domSearch_multimatch .item{width:366px}.domSearch ._list .item{grid-template-columns:var(--grid-template-columns);padding:10px 30px}.domSearch ._list .item .cover{border:1px solid #ccc;border-radius:4px;height:60px;overflow:hidden;width:60px}\n",document.head.appendChild(M),{setters:[e=>{t=e.r},e=>{s=e.L,l=e.b,i=e.N,r=e.O,c=e.R,d=e.c,n=e.d},e=>{m=e.c},e=>{o=e.M,h=e.H,u=e.Y,p=e.A,g=e.d,x=e.aS,y=e.L,N=e.aK,v=e.u,f=e.n,b=e.aT,_=e.aU,w=e.aV,j=e.aW,k=e.aX,$=e.ab,C=e.P},e=>{S=e.R},e=>{I=e.D},e=>{U=e.A},e=>{z=e.j,E=e.a,R=e.F},e=>{L=e.c},e=>{A=e.G},e=>{H=e.G},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a=t.exports.memo((({pop:e=0})=>z("div",{className:"range w-20 h-1.5 rounded bg-gray-200",children:z("div",{className:"h-full bg-gray-300 rounded",style:{width:`${e}%`}})}))),M=t.exports.memo((({songs:e=[]})=>E("div",{className:"songs_list",children:[z("div",{className:"thead",children:E("div",{className:"item grid items-center text-gray-400 ui_grid_template_song",children:[z("div",{className:"index"}),z("div",{className:"heart"}),z("div",{className:"download"}),z("div",{className:"name flex-auto px-2",children:"音乐标题"}),z("div",{className:"artist flex-none px-2",children:"歌手"}),z("div",{className:"album flex-none px-2",children:"专辑"}),z("div",{className:"duration flex-none px-2",children:"时长"}),z("div",{className:"flex-none px-2",children:"热度"})]})}),z("div",{className:"tbody",children:e.map(((e,t)=>z(o,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","下载"]],item:e,type:"song",children:E("div",{tabIndex:2,className:m("item grid items-center hover:bg-gray-100 focus:bg-gray-200 focus:outline-none ui_grid_template_song",{"bg-gray-50":t%2==0}),children:[z("div",{className:"index px-2",children:z(S,{index:t,id:e.id})}),z("div",{className:"heart text-center",children:z(h,{id:e.id})}),z("div",{className:"download text-center",children:z(I,{})}),z("div",{className:"name px-2",children:z(u,{item:e})}),z("div",{className:"artist flex-none px-2 truncate text-gray-400",children:z(p,{artists:e.ar})}),z("div",{className:"album truncate flex-none px-2",children:z(U,{name:e.al.name,id:e.al.name})}),z("div",{className:"duration text-gray-400 truncate flex-none px-2",children:g(e.dt).format("mm:ss")}),z("div",{className:"",children:z(a,{pop:e.pop})})]})},e.id)))})]}))),T={"--grid-template-columns":"60px 6fr min-content"},G={"--grid-template-columns":"60px 1fr 1fr"},D=t.exports.memo((({albums:e=[]})=>z("div",{className:"albums_list _list",style:G,children:e.map(((e,a)=>E("div",{tabIndex:2,className:m("item grid items-center relative hover:bg-gray-100",{"bg-gray-50":a%2==1}),children:[z(s,{className:"absolute inset-0 z-0",to:`/playlist/album/${e.id}`}),z("div",{className:"cover",children:z("img",{src:`${e.picUrl}?param=60y60`,alt:""})}),E("div",{className:"name px-5 text-sm",children:[e.name,e.alias.length>0&&z("span",{className:"text-gray-400",children:`（${e.alias}）`})]}),z("div",{className:"artist truncate",children:E(s,{to:`/artist/${e.artist.id}`,className:"ui_text_gray_hover relative z-10",children:[e.artist.name,e.artist.alias.length>0&&z("span",{className:"text-gray-400",children:`（${e.artist.alias}）`})]})})]},e.id)))}))),P=t.exports.memo((({videos:e=[]})=>{const a=e.map((({type:e,title:a,coverUrl:t,playTime:s,creator:l,vid:i,durationms:r})=>({id:i,type:e,title:a,creator:l,playCount:s,duration:r,cover:t})));return z("div",{className:"videos_list py-5 px-10",children:z(A,{list:a})})})),q={"--grid-template-columns":"60px 6fr 2fr 5fr"},F="_lrc_1aibo_1",K="_content_1aibo_5",O=t.exports.memo((({lyrics:e=[]})=>{const a=t.exports.useRef(),[s,l]=t.exports.useState(!1);t.exports.useEffect((()=>{a.current=e.join("\n").replace(/<b>|<\/b>/gm,"")}),[e]);const i=()=>{const e=document.createElement("textarea");e.setAttribute("readonly","readonly"),e.textContent=a.current,document.body.appendChild(e),e.select(),document.execCommand("copy")&&(document.execCommand("copy"),console.log("复制成功")),document.body.removeChild(e)};return E("div",{className:m(F,"flex pb-2"),children:[z("div",{className:m(K,"w-2/3 px-2 text-gray-500"),children:e.slice(0,s?1/0:4).map(((e,a)=>z("div",{dangerouslySetInnerHTML:{__html:e}},e+a)))}),E("div",{className:"actions w-1/3 flex flex-col justify-between",children:[E("div",{className:"flex space-x-2.5",children:[E("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full",onClick:()=>l(!s),children:[s?"收起":"展开","歌词"]}),z("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip",onClick:i,children:"复制歌词"})]}),s&&E("div",{className:"flex space-x-2.5",children:[z("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full",onClick:()=>l(!1),children:"收起歌词"}),z("button",{type:"button",className:"flex-center border border-gray-400 px-3 h-6 hover:bg-gray-300 rounded-full clip",onClick:i,children:"复制歌词"})]})]})]})})),V=t.exports.memo((({songs:e=[]})=>E("div",{className:"lyrics_list",children:[z("div",{className:"thead",children:E("div",{className:"item grid items-center text-gray-400 ui_grid_template_song",children:[z("div",{className:"index"}),z("div",{className:"heart"}),z("div",{className:"download"}),z("div",{className:"name",children:"音乐标题"}),z("div",{className:"artist",children:"歌手"}),z("div",{className:"album",children:"专辑"}),z("div",{className:"duration",children:"时长"}),z("div",{className:"text-gray-400",children:"热度"})]})}),z("div",{className:"tbody",children:e.map(((e,t)=>z(o,{schema:[["评论","播放","下一首播放"],["收藏到歌单","分享","复制链接","下载"]],item:e,type:"song",children:E("div",{tabIndex:2,className:m("item grid items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200 ui_grid_template_song",{"bg-gray-50":t%2==0}),children:[z("div",{className:"index pr-2",children:z(S,{index:t,id:e.id})}),z("div",{className:"heart",children:z(h,{id:e.id})}),z("div",{className:"download",children:z(I,{})}),z("div",{className:"name flex",children:z(u,{item:e})}),z("div",{className:"artist truncate",children:z(p,{artists:e.ar})}),z("div",{className:"album truncate",children:z(U,{name:e.al.name,id:e.al.id})}),z("div",{className:"duration text-gray-400 truncate",children:g(e.dt).format("mm:ss")}),z("div",{children:z(a,{pop:e.pop})}),z(O,{lyrics:e.lyrics})]})},e.id)))})]}))),W={"--grid-template-columns":"60px 5fr 2fr"},X=t.exports.memo((({djRadios:e=[]})=>z("div",{className:"djRadios_list _list",style:W,children:e.map(((e,a)=>E("div",{className:m("item grid items-center hover:bg-gray-100",{"bg-gray-50":a%2==0}),children:[z(s,{to:`/playlist/dj/${e.id}`,className:"cover",children:z("img",{className:"",src:`${e.picUrl}?param=60y60`,alt:""})}),z("div",{className:"px-5",children:z(s,{to:`/playlist/dj/${e.id}`,className:"name",children:e.name})}),E("div",{className:"dj text-gray-300",children:["by  ",z(s,{to:`/user/${e.dj.userId}`,className:"ui_text_gray_hover",children:e.dj.nickname})]})]},e.id)))}))),Y={"--grid-template-columns":"60px auto 1fr"},B=t.exports.memo((({userprofiles:e=[]})=>z("div",{className:"userprofiles_list _list",style:Y,children:e.map(((e,a)=>E(s,{to:`/user/${e.userId}`,className:m("item grid items-center hover:bg-gray-100",{"bg-gray-50":a%2==1}),children:[z("div",{className:"rounded-full overflow-hidden",children:z("img",{src:`${e.avatarUrl}?param=60y60`,alt:""})}),E("div",{className:"name px-5",children:[e.nickname," ",z(H,{size:16,gender:e.gender})]}),z("div",{className:"flex",children:z("div",{className:"truncate text-gray-400 flex-1 w-0",children:e.signature})})]},e.userId)))}))),J=["单曲","歌手","专辑","视频","歌单","歌词","主播电台","用户"],Q={"单曲":{code:1,unit:"首",limit:100,Node:M,countName:"songCount"},"歌手":{code:100,unit:"位",limit:20,Node:({artists:e=[]})=>z("div",{className:"artists_list _list",style:T,children:e.map(((e,a)=>E("div",{className:m("item relative grid items-center hover:bg-gray-100",{"bg-gray-50":a%2==1}),children:[z(s,{to:`/artist/${e.id}`,className:"absolute inset-0"}),z("div",{className:"cover",children:z("img",{className:"",src:`${e.img1v1Url}?param=60y60`,alt:""})}),E("div",{className:"name px-2.5 text-sm",children:[e.name,e.alia&&E("span",{className:"text-gray-400",children:["(",e?.alias[0],")"]})]}),e.accountId&&z("span",{className:"account bg-red-500 w-4 h-4 rounded-full text-white flex-center",children:z(L,{size:12,stroke:3})})]},e.id)))}),countName:"artistCount"},"专辑":{code:10,unit:"张",limit:20,Node:D,countName:"albumCount"},"视频":{code:1014,unit:"个",limit:24,Node:P,countName:"videoCount"},"歌单":{code:1e3,unit:"个",limit:20,Node:({playlists:e=[]})=>z("div",{className:"playlists_list _list",style:q,children:e.map(((e,a)=>E("div",{className:m("item grid items-center relative hover:bg-gray-100",{"bg-gray-50":a%2==1}),children:[z(s,{className:"absolute inset-0 z-0",to:`/playlist/music/${e.id}`}),z("div",{className:"cover",children:z("img",{className:"",src:`${e.coverImgUrl}?param=60y60`,alt:""})}),z("div",{className:"name px-3",children:e.name}),E("div",{className:"trackCount text-gray-400",children:[e.trackCount,"首"]}),E("div",{className:"creator text-gray-300",children:["by  ",z(s,{to:`/user/${e.creator.userId}`,className:"ui_text_black_hover relative z-10",children:e.creator.nickname})]})]},e.id)))}),countName:"playlistCount"},"歌词":{code:1006,unit:"首",limit:20,Node:V,countName:"songCount"},"主播电台":{code:1009,unit:"个",limit:100,Node:X,countName:"djRadiosCount"},"用户":{code:1002,unit:"位",limit:20,Node:B,countName:"userprofileCount"}},Z={artist:({item:e})=>E(s,{to:`/artist/${e.id}`,className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",children:[z("img",{className:"h-10 object-fit rounded-full",src:`${e.picUrl}?param=60y60`,alt:""}),E("div",{className:"px-2 flex-1 w-0",children:[E("div",{className:"truncate text-sm",children:["歌手：",e.name,e.alias?.length>0&&z("span",{className:"text-gray-400",children:`(${e.alias})`})]}),E("div",{className:"text-gray-400",children:["粉丝数:",N(e.fansSize),",歌曲:",e.musicSize]})]})]}),album:({item:e})=>E(s,{to:`/playlist/album/${e.id}`,className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",children:[z("img",{className:"h-10",src:`${e.blurPicUrl}?param=60y60`,alt:""}),E("div",{className:"px-2 flex-1 w-0",children:[E("div",{className:"text-sm truncate",children:["专辑：",e.name,e.alias?.length>0&&z("span",{className:"text-gray-400",children:`(${e.alias})`})]}),z("div",{className:"text-gray-400",children:e.artist.name})]})]}),orpheus:({item:e})=>null,new_mlog:({item:e})=>null,playlist:({item:e})=>E(s,{to:`/playlist/music/${e.id}`,className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",title:e.name,children:[z("img",{className:"h-10",src:`${e.coverImgUrl}?param=60y60`,alt:""}),E("div",{className:"px-2 flex-1 w-0",children:[E("div",{className:"text-sm truncate",children:["歌单：",e.name]}),z("div",{className:"text-gray-400",children:e.creator.name})]})]}),concert:({item:e})=>E("a",{target:"_blank",href:e.url,className:"h-16 w-1/3 flex items-center bg-gray-100 rounded overflow-hidden px-2",title:e.title,children:[z("img",{className:"h-10",src:`${e.cover}?param=60y60`,alt:""}),E("div",{className:"px-2 flex-1 w-0",children:[E("div",{className:"text-sm truncate",children:["演唱会：",e.title]}),z("div",{className:"text-gray-400 truncate",children:e.artists})]})]})},ee=t.exports.memo((({keywords:e})=>{const{data:a,isLoading:s}=x({keywords:e}),l=a?.result||{};return 0===l?.orders?.length?null:s?z(y,{}):E("div",{className:"py-4",children:[z("div",{className:"text-gray-500",children:"你可能感兴趣"}),z("div",{className:"mt-2 flex gap-3",children:l.orders.map((e=>t.exports.createElement(Z[e],{item:l[e][0],key:e})))})]})})),ae=t.exports.memo((()=>{const{keywords:e="",type:a=""}=l(),s=v(),{count:c=0}=f(b);t.exports.useEffect((()=>{s(_({keywords:e}))}),[e]);const d=Q[a]?.unit||"";return E("div",{className:"domSearch overflow-auto max-h-full flex-auto",children:[E("div",{className:"px-8 py-5",children:[E("div",{className:"h1",children:["搜索 ",e]}),z(ee,{keywords:e}),E("div",{className:"mt-5 flex items-center",children:[z("div",{className:"flex gap-4",children:J.map((e=>z(i,{to:encodeURIComponent(e),className:({isActive:e})=>m("text-sm",e&&"font-bold ui_underline"),children:e},e)))}),E("div",{className:"ml-auto text-gray-400",children:["找到 ",c,d," ",a]})]})]}),z(r,{})]})})),te=t.exports.memo((()=>{console.log("entry search");const{keywords:e="",type:a=""}=l(),s=v(),[i,r]=t.exports.useState(1),[c,d]=t.exports.useState({}),[n,m]=t.exports.useState(0),{code:o,limit:h,Node:u,countName:p}=Q[a],{keywords:g}=f(b),[x,{isLoading:N}]=w();t.exports.useEffect((()=>{s(j({count:n}))}),[n]),t.exports.useEffect((()=>{g||s(k({keywords:e}))}),[e]);const _=a=>{r(a),(async a=>{const t=(await x({keywords:e,limit:h,type:o,offset:(a-1)*h}))?.data?.result||{};d(t),m(t[p])})(a)};return t.exports.useEffect((()=>{s($()),_(1)}),[e,a]),N?z("div",{className:"pt-48 flex-center",children:z(y,{})}):E(R,{children:[t.exports.createElement(u,c),z(C,{total:Math.ceil(n/h),page:i,func:_})]})}));e("default",t.exports.memo((()=>z(c,{children:E(d,{path:":keywords",element:z(ae,{}),children:[z(d,{path:":type",element:z(te,{})}),z(d,{index:!0,element:z(n,{to:"单曲",replace:!0})})]})}))))}}}));
