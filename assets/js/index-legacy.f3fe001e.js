System.register(["./react-legacy.b3bc90c5.js","./index-legacy.019103ab.js","./react-router-dom-legacy.2933718f.js","./qrcode.react-legacy.685a2ddb.js","./react-slick-legacy.d6ab9305.js","./@tabler/icons-legacy.c07ea112.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.b70b910a.js","./immer-legacy.c38810dc.js","./axios-legacy.6d9fa2e4.js","./rxjs-legacy.1bb14dba.js","./react-use-legacy.21ff61d7.js","./store-legacy.0145af8a.js","./react-transition-group-legacy.b5e58023.js"],(function(e,t){"use strict";var l,i,c,n,s,a,d,r,o,m,h,u,g,p,b,_,N,v=document.createElement("style");return v.innerHTML='.domSetting .nav_target{border-top:1px solid #ccc;margin-top:30px;padding-top:30px}.domSetting_select{border:1px solid #e0e0e0;height:24px}.domSetting_radio input{display:none}.domSetting_radio input:checked+.ico{border-color:currentColor;color:var(--theme-color)}.domSetting_radio .ico{border:1px solid #ccc;border-radius:8px;color:transparent;font-size:18px;height:16px;width:16px}.domSetting_radio .ico:before{background-color:currentColor;border-radius:5px;content:"";height:10px;width:10px}.domSetting_block_title{font-size:14px;font-weight:700}.domSetting_subBlock{margin-top:24px}.domSetting_subBlock_title{margin-bottom:10px}\n',document.head.appendChild(v),{setters:[e=>{l=e.r},e=>{i=e.n,c=e.aY,n=e.u,s=e.at,a=e.a,d=e.aZ,r=e.a9,o=e.a_},e=>{m=e.L,h=e.R,u=e.c},e=>{g=e.j,p=e.a,b=e.F},e=>{_=e.c},e=>{N=e.ay},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const t=()=>{const{profile:e,bindings:t}=i((({account:e})=>e));return p(b,{children:[g("div",{className:"",children:t.map((e=>{}))}),p("div",{children:[g(m,{to:`/user/${e.userId}/edit`,className:"inline-block rounded-full px-3 py-1 border mr-2 hover:bg-gray-100",children:"修改个人信息"}),g(m,{to:"/friend/invite",className:"inline-block rounded-full px-3 py-1 border hover:bg-gray-100",children:"寻找并邀请好友"})]})]})},v=()=>{const e=n();return p(b,{children:[g("div",{className:"text-gray-400 mb-3",children:"登录网易云音乐，手机电脑多端同步，320K高音质无限下载"}),g("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full",onClick:()=>e(s()),children:"立即登录"})]})},x=l.exports.memo((()=>{const{isLogin:e}=i(c);return g(e?t:v,{})})),f=l.exports.memo((({list:e=[],checked:t="",name:l="",handle:i=(()=>{}),row:c=!1})=>g("div",{className:_("domSetting_subBlock_content",{flex:c}),children:e.map((e=>g("div",{className:_("item leading-loose",{"mr-6":c}),children:p("label",{className:"domSetting_radio flex items-center",htmlFor:e,children:[g("input",{id:e,name:l,type:"radio",checked:t===e,onChange:()=>i(e)}),g("i",{className:"ico flex items-center justify-center mr-2"}),g("span",{children:e})]})},e)))}))),k=l.exports.memo((({list:e=[],name:t="",handle:l=(()=>{})})=>{const i=a();return g("div",{className:"domSetting_subBlock_content",children:e.map((([e,t,l])=>g("div",{className:"item leading-loose",children:p("label",{className:"domSetting_check flex items-center",htmlFor:e,children:[g(d,{name:e,onChange:()=>i("设置已更新")})," ",g("span",{children:e}),l&&g("span",{className:"text-gray-400",children:`（${l}）`})]})},e)))})})),S=l.exports.memo((({children:e,title:t="未知项",tips:l})=>p("div",{className:"mt-6",children:[p("div",{className:"mb-2.5",children:[p("span",{children:[t,"："]}),g("span",{className:"text-gray-400",children:l})]}),g("div",{children:e})]}))),y=l.exports.memo((()=>{const e=n(),t=a(),{font:c}=i(r),[s,m]=l.exports.useState("最小化到系统托盘");return p(b,{children:[g("div",{className:"domSetting_block_title",children:"常规"}),g(S,{title:"字体选择",tips:"如果字体显示不清晰，请在控制面板——字体设置中启用系统Clear Type设置",children:g("select",{className:"domSetting_select",onChange:l=>{e(o(l.target.value)),t("设置已更新")},value:c,children:H.map((([e,t])=>g("option",{value:e,title:t,style:{fontFamily:e},children:t},e)))})}),g(S,{title:"启动",children:g(k,{name:"启动",list:[["开机自动启动",!1]]})}),g(S,{title:"关联",children:g(k,{name:"关联",list:[["将网易云音乐设为默认播放器",!1]]})}),g(S,{title:"动画",children:g(k,{name:"动画",list:[["禁用动画效果",!1,"减少部分资源占用"]]})}),g(S,{title:"GPU加速",children:g(k,{name:"GPU加速",list:[["禁用GPU加速",!1,"关闭图形加速，如果单曲播放页或MV播放黑屏请勾选"]]})}),g(S,{title:"关闭主面板",children:g(f,{name:"关闭主面板",list:["最小化到系统托盘","退出云音乐"],checked:s,handle:m})}),g(S,{title:"定时关机",children:p("div",{className:"domSetting_subBlock_content",children:[g("div",{className:"item",children:p("label",{className:"domSetting_check flex items-center",children:[g(d,{})," ",g("span",{children:"开启定时关机"})]})}),p("div",{className:"item",children:["剩余关机时间",g("select",{className:"domSetting_select",children:Object.keys(Array(24).fill(0)).map((e=>g("option",{value:e,children:e},e)))}),"时",g("select",{className:"domSetting_select",children:Object.keys(Array(60).fill(0)).map((e=>g("option",{value:e,children:e},e)))}),"分"]})]})}),g(S,{title:"高清屏适配",tips:"禁用后建议重启软件",children:g(k,{name:"高清屏适配",list:[["禁用系统缩放比例",!1,"减少部分资源占用"]]})})]})})),B=l.exports.memo((()=>{const[e,t]=l.exports.useState("directSound主声音驱动程序");return p(b,{children:[g("div",{className:"domSetting_block_title",children:"播放"}),p("div",{className:"domSetting_subBlock",children:[p("div",{className:"domSetting_subBlock_title",children:["播放列表：",g("span",{className:"ui_gary text-gray-400",children:"单曲、节目"})]}),g(f,{list:["双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）","双击播放单曲时，仅把当前单曲添加到播放列表（节目同理）"],name:"播放列表",checked:"双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）"})]}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"自动播放："}),g(k,{name:"自动播放",list:[["程序启动是自动播放",!1]]})]}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"播放进度："}),g(k,{name:"播放进度",list:[["将程序启动时记住上一次播放进度",!1]]})]}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"效果："}),g(k,{name:"效果",list:[["开启音乐淡入淡出",!1,"仅支持输出设备DirectSound"]]})]}),p("div",{className:"domSetting_subBlock",children:[p("div",{className:"domSetting_subBlock_title",children:["输出设备：",g("span",{className:"text-gray-400",children:"播放下一首歌时生效"})]}),g("div",{className:"domSetting_subBlock_content",children:g("select",{className:"domSetting_select",value:e,onChange:e=>t(e.target.value),children:["directSound主声音驱动程序","directSound扬声器(VIA HD Audio(Win 10))","directSoundSPDIF Interface (TX0)(VIA HD Audio(Win 10))","WaveOut:Microsoft 声音映射器","WaveOut:扬声器(VIA HD Audio(Win 10))","WaveOut:SPDIF Interface (TX0)(VIA HD A","Wasapi:扬声器(VIA HD Audio(Win 10))","Wasapi:SPDIF Interface (TX0)(VIA HD Audio(Win 10))"].map((e=>g("option",{value:e,children:e},e)))})})]})]})})),j=l.exports.memo((()=>p(b,{children:[g("div",{className:"domSetting_block_title",children:"消息与隐私"}),p("div",{className:"domSetting_subBlock",children:[p("div",{className:"domSetting_subBlock_title",children:["私信：",g("span",{className:"text-gray-400",children:"接收私信提醒"})]}),g(f,{list:["所有人","我所关注的人"],name:"私信",checked:"所有人"})]}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"通知："}),g(k,{name:"通知",list:[["歌单被收藏",!1],["收到赞",!1],["新粉丝",!1]]})]}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"我的听歌排行："}),g(f,{list:["所有人可见","被关注的人可见","仅自己可见"],name:"我的听歌排行",checked:"所有人可见"})]}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"黑名单设置："}),g("div",{className:"domSetting_subBlock_content",children:p("div",{className:"item",children:["我的黑名单",g("button",{})]})})]})]}))),w=l.exports.memo((()=>p(b,{children:[g("div",{className:"domSetting_block_title",children:"下载设置"}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"音质选择："}),p("div",{className:"flex items-center",children:[g("span",{className:"mr-6",children:"试听"}),g(f,{row:!0,list:["标准","较高","极高","无损音质"],checked:"较高",name:"试听"})]}),p("div",{className:"flex items-center",children:[g("span",{className:"mr-6",children:"下载"}),g(f,{row:!0,list:["标准","较高","极高","无损音质"],checked:"较高",name:"下载"})]})]}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"音乐命名格式："}),g(f,{list:["歌曲名","歌手 - 歌曲名","歌曲名 - 歌手"],name:"音乐命名格式",checked:"歌手 - 歌曲名"})]}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"文件智能分类："}),g(f,{list:["不分文件夹","按歌手分文件夹","按歌手\\专辑分文件夹"],name:"文件智能分类",checked:"不分文件夹"})]})]}))),A=l.exports.memo((()=>p(b,{children:[g("div",{className:"domSetting_block_title",children:"歌词"}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"类型："}),g(f,{name:"类型",list:["桌面歌词","软件内词栏"],checked:"桌面歌词"})]}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"启用："}),g(k,{list:[["启用歌词",!1],["外文歌词显示翻译",!0],["外文歌词显示音译",!0]],name:"启用"})]}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"总在最前："}),g(k,{list:[["启用总在最前",!1]],name:"总在最前"})]}),g("div",{className:"domSetting_subBlock",children:g("div",{className:"domSetting_subBlock_title",children:"预览："})})]}))),I=l.exports.memo((()=>p(b,{children:[g("div",{className:"domSetting_block_title",children:"工具"}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"Http代理："}),g(f,{name:"Http代理",list:["不使用代理","使用IE代理设置","自定义代理"],checked:"不使用代理"})]}),p("div",{className:"domSetting_subBlock",children:[g("div",{className:"domSetting_subBlock_title",children:"音乐云盘设置："}),g(k,{list:[["本地音乐添加到歌单后，讲文件上传至云盘，可多端同步歌单，播放下载",!1]],name:"音乐云盘设置"})]})]}))),D=l.exports.memo((()=>p(b,{children:[g("div",{className:"domSetting_block_title",children:"关于网易云音乐"}),g("br",{}),p("div",{children:["当前版本……"," ",g("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full",children:"检测更新"})]}),g("div",{className:"domSetting_subBlock",children:g(f,{name:"更新",list:["自动更新","有新版本时提醒我"],checked:"自动更新"})}),g("br",{}),p("div",{className:"flex items-center",children:[g("span",{className:"mr-4",children:"下载移动客户端"}),p("a",{href:"https://itunes.apple.com/cn/app/wang-yi-yun-yin-le/id590338362?l=ch",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4",children:[g(N,{size:16,className:"fill-current"}),"iPhone版"]}),p("a",{href:"https://itunes.apple.com/cn/app/wang-yi-yun-yin-lehd/id871041757?l=ch",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4",children:[g(N,{size:16,className:"fill-current"}),"iPad版"]}),p("a",{href:"https://music.163.com/#/download",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4",children:[g(N,{size:16,className:"fill-current"}),"iPhone版"]}),p("a",{href:"http://www.windowsphone.com/s?appid=db9dbdaa-464e-4370-a078-800fc7983d39",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4",children:[g(N,{size:16,className:"fill-current"}),"iPhone版"]})]}),p("div",{className:"pt-8 pb-7 flex gap-2",children:[g("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black",children:"《网易云音乐官网》"}),g("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black",children:"《网易云音乐社区管理细则》"}),g("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black",children:"《服务条款》"}),g("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black",children:"《隐私政策》"}),g("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black",children:"《儿童隐私政策》"})]})]}))),P=["账号","常规","播放","消息与隐私","快捷键","下载设置","歌词","工具","关于网易云音乐"],W=[x,y,B,j,()=>g(b,{children:g("div",{className:"domSetting_block_title",children:"快捷键"})}),w,A,I,D],C=P.map(((e,t)=>[e,W[t]])),H=[["inherit","默认"],["仿宋","仿宋"],["宋体","宋体"],["微软雅黑","微软雅黑"],["微软雅黑 Light","微软雅黑 Light"],["新宋体","新宋体"],["方正兰亭超细黑简体","方正兰亭超细黑简体"],["方正粗黑宋简体","方正粗黑宋简体"],["楷体","楷体"],["等线","等线"],["等线 Light","等线 Light"],["黑体","黑体"]],F=l.exports.memo((()=>p("div",{className:"flex flex-col h-full",children:[p("div",{className:"px-8 py-5",children:[g("div",{className:"h1",children:"设置"}),g("div",{className:"mt-8 flex gap-4",children:P.map((e=>g("a",{href:`#${e}`,children:e},e)))})]}),g("div",{className:"px-8 overflow-auto max-h-full flex-auto",children:C.map((([e,t])=>g("div",{id:e,className:"pb-8 mb-8 border-b",children:g(t,{})},e)))})]})));e("default",(()=>g(h,{children:g(u,{index:!0,element:g(F,{})})})))}}}));
