System.register(["./react-legacy.b3bc90c5.js","./classnames-legacy.82f93ed6.js","./dayjs-legacy.7dd3aa6c.js","./HeaderBarSearch-legacy.232428f1.js","./index-legacy.4991b0df.js","./Rank-legacy.2b1e91fd.js","./Download-legacy.d6d317ad.js","./index-legacy.1a569294.js","./Album-legacy.ab0960a8.js","./@tabler/icons-legacy.70165014.js","./qrcode.react-legacy.685a2ddb.js","./react-router-legacy.33ca2ceb.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.c7a29beb.js","./immer-legacy.c24b5c0e.js","./react-router-dom-legacy.dc65b224.js","./redux-persist-legacy.af414400.js","./axios-legacy.6d9fa2e4.js","./rxjs-legacy.4711c62e.js","./react-use-legacy.597098f4.js","./react-transition-group-legacy.16b3096a.js","./color-legacy.6099eccf.js"],(function(e,a){"use strict";var l,c,s,t,i,r,d,n,o,m,u,h,p,g,y,b,f,x,N;return{setters:[e=>{l=e.r},e=>{c=e.a},e=>{s=e.d},e=>{t=e.S},e=>{i=e.l,r=e.M,d=e.A},e=>{n=e.R},e=>{o=e.D},e=>{m=e.G},e=>{u=e.A},e=>{h=e.ak,p=e.al,g=e.R,y=e.W},e=>{b=e.a,f=e.j},e=>{x=e.g,N=e.h},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const a=(e,a,l)=>String(e[l.code]).localeCompare(String(a[l.code]),"zh-CN")*l.type,v=[["音乐标题","songName",a],["歌手","artist",a],["专辑","album",a],["格式","",a],["大小","fileSize",(e,a,l)=>(Number.parseFloat(e[l.code])-Number.parseFloat(a[l.code]))*l.type],["上传时间","addTime",(e,a,l)=>(e[l.code]-a[l.code])*l.type]],j=(e,a)=>a.name!==e?f(p,{size:14,color:"#f00",stroke:1}):-1===a.type?f(g,{size:20,stroke:0,fill:"#000"}):1===a.type?f(y,{size:12,stroke:0,fill:"#000"}):0===a.type?f(p,{size:14,color:"#f00",stroke:1}):void 0,S=l.exports.memo((()=>{const[e,a]=l.exports.useState(!1),[p,g]=l.exports.useState(""),[y,x]=l.exports.useState({name:"上传时间",type:-1,code:"addTime",callback:(e,a,l)=>(e[l.code]-a[l.code])*l.type}),{data:N={},isLoading:S}=i({limit:100}),{data:_=[],count:k=0,maxSize:z="",size:w=""}=N;return S?null:b("div",{className:"domManage overflow-auto h-full",children:[f("div",{className:"domManage_header ui_header",children:f("span",{className:"domManage_header_title h1",children:"我的音乐云盘"})}),b("div",{className:"domCloud_info py-2.5 px-8",children:[f("span",{children:"云盘容量"})," ",f("div",{className:"w-28 h-2.5 inline-block bg-gray-200 rounded-full overflow-hidden",children:f("div",{className:"h-full bg-blue-600",style:{width:w/z*100||0}})})," ",b("span",{className:"num",children:[(w/1024/1024/1024).toFixed(2),"G/",z/1024/1024/1024,"G"]})," ",f("span",{className:"ml-8",children:"歌曲永久保存，随时随地多端畅听"})," ",f("a",{href:"https://music.163.com/#/store/product/detail?id=34001",className:"ui_link",children:"扩容"})]}),b("div",{className:"ui_headerBar border-b",children:[b("div",{className:"left space-x-2",children:[f(m,{}),b("button",{type:"button",className:"flex-center ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full",children:[f(h,{size:20}),"  上传音乐"]})]}),f("div",{className:"right",children:f(t,{search:p,setSearch:g,placeholder:"搜索我的音乐云盘"})})]}),f("div",{className:"overflow-auto max-h-full flex-auto pl-8 pr-5",children:b("div",{className:"domManage_table",style:{"--ui_grid_template":"36px / 30px 30px 8fr 3fr 3fr 2fr 2fr 4fr"},children:[f("div",{className:"thead",children:b("div",{className:"tr grid ui_grid_template items-center",children:[f("div",{}),f("div",{}),v.map((([e,a,l])=>b("div",{className:c("cell px-1","th",{on:e===y.name}),onClick:()=>(e=>{if(y.name!==e.name)return x({...e,type:1});switch(y.type){case-1:return x({name:"",code:"",callback:(e,a)=>0,type:0});case 1:return x({...e,type:-1});default:return x({...e,type:1})}})({item:e,code:a,callback:l}),children:[e,f("span",{className:"sort",children:j(e,y)})]},e)))]})}),f("div",{className:"tbody",children:_.map(((e,a)=>f(r,{type:"song",item:e,schema:[["播放","下一首播放"],["收藏到歌单","分享","下载"],["删除"]],children:b("div",{className:c("tr grid ui_grid_template items-center hover:bg-gray-100 focus:outline-none focus:bg-gray-200",a%2==0&&"bg-gray-50"),tabIndex:2,children:[f("div",{className:"cell px-1 index text-gray-400",children:f(n,{index:a,id:e.songId})}),f("div",{className:"cell px-1 download",children:f(o,{})}),b("div",{className:"cell px-1 name truncate",title:e.songName+e.simpleSong?.tns?.length>0?`（${e.simpleSong?.tns}）`:"",children:[e.songName,e.simpleSong?.tns?.length>0&&f("span",{className:"text-gray-500",children:`（${e.simpleSong.tns}）`})]}),f(d,{className:"px-1",artists:e.simpleSong.ar}),f(u,{className:"px-1",name:e.album,id:e.simpleSong?.al?.id}),f("div",{className:"cell px-1 truncate uppercase",children:/(?<=\.)(\w*)$/.exec(e.fileName)[0]}),b("div",{className:"cell px-1 truncate",children:[(e.fileSize/1024/1024).toFixed(1),"MB"]}),f("div",{className:"cell px-1 truncate text-gray-400",children:s(e.addTime).format("YYYY-MM-DD")})]})},e.songId)))})]})}),b("div",{className:"domManage_dialog",style:{display:e?"":"none"},children:[f("button",{type:"button",className:"close",onClick:()=>{a(!e)},children:"×"}),f("div",{className:"title",children:"选择本地音乐文件夹"}),f("div",{className:"tips",children:"将自动扫描您勾选的目录，文件增删实时同步。"}),f("ul",{children:b("li",{children:[b("span",{className:"checkbox",children:[f("input",{type:"text"}),f("i",{className:"material-icons",children:"checkbox"})]}),"暂时没法做"]})}),b("div",{className:"actions",children:[f("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full red",children:"确认"}),f("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full",children:"添加文件"})]})]})]})}));e("default",(()=>f(x,{children:f(N,{index:!0,element:f(S,{})})})))}}}));
