"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[265],{9333:(e,t,l)=>{l.r(t),l.d(t,{default:()=>D});var n=l(7363),a=l.n(n),c=l(6711),m=l(885),s=(l(1249),l(9638)),i=l(4184),r=l.n(i),o=l(5510),d=(l(7941),l(3290),l(1624)),u=l(8176),E=l(2434);l(8309);const b=function(e){var t=e.list,l=void 0===t?[]:t,n=e.checked,c=void 0===n?"":n,m=e.name,s=void 0===m?"":m,i=e.handle,o=void 0===i?function(){}:i,d=e.row,u=void 0!==d&&d;return a().createElement("div",{className:r()("domSetting_subBlock_content",{flex:u})},l.map((function(e){return a().createElement("div",{className:r()("item leading-loose",{"mr-6":u}),key:e},a().createElement("label",{className:"domSetting_radio flex items-center",htmlFor:e},a().createElement("input",{id:e,name:s,type:"radio",checked:c===e,onChange:function(){return o(e)}}),a().createElement("i",{className:"ico flex items-center justify-center mr-2"}),a().createElement("span",null,e)))})))};var v=l(9922);const _=function(e){var t=e.list,l=void 0===t?[]:t,n=(e.name,e.handle,(0,d.useDispatch)());return a().createElement("div",{className:"domSetting_subBlock_content"},l.map((function(e){var t=(0,m.Z)(e,3),l=t[0],c=(t[1],t[2]);return a().createElement("div",{className:"item leading-loose",key:l},a().createElement("label",{className:"domSetting_check flex items-center",htmlFor:l},a().createElement(u.Z,{name:l,onChange:function(){return n((0,v.setToast)("设置已更新"))}})," ",a().createElement("span",null,l),c&&a().createElement("span",{className:"text-gray-400"},"（".concat(c,"）"))))})))};var N=[["inherit","默认"],["仿宋","仿宋"],["宋体","宋体"],["微软雅黑","微软雅黑"],["微软雅黑 Light","微软雅黑 Light"],["新宋体","新宋体"],["方正兰亭超细黑简体","方正兰亭超细黑简体"],["方正粗黑宋简体","方正粗黑宋简体"],["楷体","楷体"],["等线","等线"],["等线 Light","等线 Light"],["黑体","黑体"]];const g=function(){var e=(0,d.useDispatch)(),t=(0,d.useSelector)((function(e){return e.setting})).font,l=(0,n.useState)("最小化到系统托盘"),c=(0,m.Z)(l,2),s=c[0],i=c[1];return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"常规"),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"字体选择：",a().createElement("span",{className:"text-gray-400"},"如果字体显示不清晰，请在控制面板——字体设置中启用系统Clear Type设置")),a().createElement("div",{className:"domSetting_subBlock_content"},a().createElement("select",{className:"domSetting_select",onChange:function(t){e((0,E.setFont)(t.target.value)),e((0,v.setToast)("设置已更新"))},value:t},N.map((function(e){var t=(0,m.Z)(e,2),l=t[0],n=t[1];return a().createElement("option",{key:l,value:l,title:n,style:{fontFamily:l}},n)}))))),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"启动："),a().createElement(_,{name:"启动",list:[["开机自动启动",!1]]})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"关联："),a().createElement(_,{name:"关联",list:[["将网易云音乐设为默认播放器",!1]]})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"动画："),a().createElement(_,{name:"动画",list:[["禁用动画效果",!1,"减少部分资源占用"]]})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"GPU加速："),a().createElement(_,{name:"GPU加速",list:[["禁用GPU加速",!1,"关闭图形加速，如果单曲播放页或MV播放黑屏请勾选"]]})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"关闭主面板："),a().createElement(b,{name:"关闭主面板",list:["最小化到系统托盘","退出云音乐"],checked:s,handle:i})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"定时关机："),a().createElement("div",{className:"domSetting_subBlock_content"},a().createElement("div",{className:"item"},a().createElement("label",{className:"domSetting_check flex items-center"},a().createElement(u.Z,null)," ",a().createElement("span",null,"开启定时关机"))),a().createElement("div",{className:"item"},"剩余关机时间",a().createElement("select",{className:"domSetting_select"},Object.keys(Array(24).fill(0)).map((function(e){return a().createElement("option",{value:e,key:e},e)}))),"时",a().createElement("select",{className:"domSetting_select"},Object.keys(Array(60).fill(0)).map((function(e){return a().createElement("option",{value:e,key:e},e)}))),"分"))),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"高清屏适配：",a().createElement("span",{className:"text-gray-400"},"禁用后建议重启软件")),a().createElement(_,{name:"高清屏适配",list:[["禁用系统缩放比例",!1,"减少部分资源占用"]]})))},f=function(){var e=(0,n.useState)("directSound主声音驱动程序"),t=(0,m.Z)(e,2),l=t[0],c=t[1];return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"播放"),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"播放列表：",a().createElement("span",{className:"ui_gary text-gray-400"},"单曲、节目")),a().createElement(b,{list:["双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）","双击播放单曲时，仅把当前单曲添加到播放列表（节目同理）"],name:"播放列表",checked:"双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"自动播放："),a().createElement(_,{name:"自动播放",list:[["程序启动是自动播放",!1]]})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"播放进度："),a().createElement(_,{name:"播放进度",list:[["将程序启动时记住上一次播放进度",!1]]})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"效果："),a().createElement(_,{name:"效果",list:[["开启音乐淡入淡出",!1,"仅支持输出设备DirectSound"]]})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"输出设备：",a().createElement("span",{className:"text-gray-400"},"播放下一首歌时生效")),a().createElement("div",{className:"domSetting_subBlock_content"},a().createElement("select",{className:"domSetting_select",value:l,onChange:function(e){return c(e.target.value)}},["directSound主声音驱动程序","directSound扬声器(VIA HD Audio(Win 10))","directSoundSPDIF Interface (TX0)(VIA HD Audio(Win 10))","WaveOut:Microsoft 声音映射器","WaveOut:扬声器(VIA HD Audio(Win 10))","WaveOut:SPDIF Interface (TX0)(VIA HD A","Wasapi:扬声器(VIA HD Audio(Win 10))","Wasapi:SPDIF Interface (TX0)(VIA HD Audio(Win 10))"].map((function(e){return a().createElement("option",{value:e,key:e},e)}))))))},k=function(){return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"消息与隐私"),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"私信：",a().createElement("span",{className:"text-gray-400"},"接收私信提醒")),a().createElement(b,{list:["所有人","我所关注的人"],name:"私信",checked:"所有人"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"通知："),a().createElement(_,{name:"通知",list:[["歌单被收藏",!1],["收到赞",!1],["新粉丝",!1]]})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"我的听歌排行："),a().createElement(b,{list:["所有人可见","被关注的人可见","仅自己可见"],name:"我的听歌排行",checked:"所有人可见"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"黑名单设置："),a().createElement("div",{className:"domSetting_subBlock_content"},a().createElement("div",{className:"item"},"我的黑名单",a().createElement("button",null)))))},p=function(){return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"快捷键"))},S=function(){return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"下载设置"),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"音质选择："),a().createElement("div",{className:"flex items-center"},a().createElement("span",{className:"mr-6"},"试听"),a().createElement(b,{row:!0,list:["标准","较高","极高","无损音质"],checked:"较高",name:"试听"})),a().createElement("div",{className:"flex items-center"},a().createElement("span",{className:"mr-6"},"下载"),a().createElement(b,{row:!0,list:["标准","较高","极高","无损音质"],checked:"较高",name:"下载"}))),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"音乐命名格式："),a().createElement(b,{list:["歌曲名","歌手 - 歌曲名","歌曲名 - 歌手"],name:"音乐命名格式",checked:"歌手 - 歌曲名"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"文件智能分类："),a().createElement(b,{list:["不分文件夹","按歌手分文件夹","按歌手\\专辑分文件夹"],name:"文件智能分类",checked:"不分文件夹"})))},h=function(){return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"歌词"),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"类型："),a().createElement(b,{name:"类型",list:["桌面歌词","软件内词栏"],checked:"桌面歌词"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"启用："),a().createElement(_,{list:[["启用歌词",!1],["外文歌词显示翻译",!0]],name:"启用"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"总在最前："),a().createElement(_,{list:[["启用总在最前",!1]],name:"总在最前"})))},B=function(){return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"工具"),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"Http代理："),a().createElement(b,{name:"Http代理",list:["不使用代理","使用IE代理设置","自定义代理"],checked:"不使用代理"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"音乐云盘设置："),a().createElement(_,{list:[["本地音乐添加到歌单后，讲文件上传至云盘，可多端同步歌单，播放下载",!1]],name:"音乐云盘设置"})))};var y=l(6719);const x=function(){return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"关于网易云音乐"),a().createElement("br",null),a().createElement("div",null,"当前版本……"," ",a().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"检测更新")),a().createElement("div",{className:"domSetting_subBlock"},a().createElement(b,{name:"更新",list:["自动更新","有新版本时提醒我"],checked:"自动更新"})),a().createElement("br",null),a().createElement("div",{className:"flex items-center"},a().createElement("span",{className:"mr-4"},"下载移动客户端"),a().createElement("a",{href:"https://itunes.apple.com/cn/app/wang-yi-yun-yin-le/id590338362?l=ch",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4"},a().createElement(y.IconBrandApple,{size:16,className:"fill-current"}),"iPhone版"),a().createElement("a",{href:"https://itunes.apple.com/cn/app/wang-yi-yun-yin-lehd/id871041757?l=ch",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4"},a().createElement(y.IconBrandApple,{size:16,className:"fill-current"}),"iPad版"),a().createElement("a",{href:"https://music.163.com/#/download",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4"},a().createElement(y.IconBrandApple,{size:16,className:"fill-current"}),"iPhone版"),a().createElement("a",{href:"http://www.windowsphone.com/s?appid=db9dbdaa-464e-4370-a078-800fc7983d39",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4"},a().createElement(y.IconBrandApple,{size:16,className:"fill-current"}),"iPhone版")),a().createElement("div",{className:"pt-8 pb-7"},a().createElement("a",{href:"https://music.163.com",className:"mr-2 underline text-gray-600 hover:text-black"},"《网易云音乐官网》"),a().createElement("a",{href:"https://music.163.com",className:"mr-2 underline text-gray-600 hover:text-black"},"《网易云音乐社区管理细则》"),a().createElement("a",{href:"https://music.163.com",className:"mr-2 underline text-gray-600 hover:text-black"},"《服务条款》"),a().createElement("a",{href:"https://music.163.com",className:"mr-2 underline text-gray-600 hover:text-black"},"《隐私政策》"),a().createElement("a",{href:"https://music.163.com",className:"mr-2 underline text-gray-600 hover:text-black"},"《儿童隐私政策》")))};var A=["账号","常规","播放","消息与隐私","快捷键","下载设置","歌词","工具","关于网易云音乐"],I=function(){var e=(0,s.C)((function(e){return e.account})),t=e.profile,l=e.bindings;return a().createElement(a().Fragment,null,a().createElement("div",{className:""},l.map((function(e){}))),a().createElement("div",null,a().createElement(c.Link,{to:"/user/".concat(t.userId,"/edit"),className:"inline-block rounded-full px-3 py-1 border mr-2 hover:bg-gray-100"},"修改个人信息"),a().createElement(c.Link,{to:"/friend/invite",className:"inline-block rounded-full px-3 py-1 border hover:bg-gray-100"},"寻找并邀请好友")))},F=function(){var e=(0,s.T)();return a().createElement(a().Fragment,null,a().createElement("div",{className:"text-gray-400 mb-3"},"登录网易云音乐，手机电脑多端同步，320K高音质无限下载"),a().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full",onClick:function(){return e((0,o.setLoginVisibilty)())}},"立即登录"))},w=function(){var e=(0,s.C)((function(e){return e.common})).isLogin,t=(0,n.useState)(),l=(0,m.Z)(t,2),c=l[0],i=(l[1],(0,n.useRef)());return a().createElement("div",{className:"domSetting flex flex-col h-full"},a().createElement("div",{className:"domSetting_header"},a().createElement("div",{className:"domSetting_title h1"},"设置"),a().createElement("div",{className:"domSetting_nav"},A.map((function(e,t){return a().createElement("a",{href:"#".concat(e),key:e,className:r()("domSetting_nav_link",c===e&&"ui_underline font-bold")},e)})))),a().createElement("div",{className:"domSetting_main overflow-auto max-h-full flex-auto",ref:i},a().createElement("div",{id:"账号",className:"pb-8 mb-8 border-b"},e?a().createElement(I,null):a().createElement(F,null)),a().createElement("div",{id:"常规",className:"pb-8 mb-8 border-b"},a().createElement(g,null)),a().createElement("div",{id:"播放",className:"pb-8 mb-8 border-b"},a().createElement(f,null)),a().createElement("div",{id:"消息与隐私",className:"pb-8 mb-8 border-b"},a().createElement(k,null)),a().createElement("div",{id:"快捷键",className:"pb-8 mb-8 border-b"},a().createElement(p,null)),a().createElement("div",{id:"下载设置",className:"pb-8 mb-8 border-b"},a().createElement(S,null)),a().createElement("div",{id:"歌词",className:"pb-8 mb-8 border-b"},a().createElement(h,null)),a().createElement("div",{id:"工具",className:"pb-8 mb-8 border-b"},a().createElement(B,null)),a().createElement("div",{id:"关于网易云音乐"},a().createElement(x,null))))};const j=(0,n.memo)(w),D=function(){return a().createElement(c.Routes,null,a().createElement(c.Route,{index:!0,element:a().createElement(j,null)}))}}}]);
//# sourceMappingURL=Settings.2b7f230b.js.map