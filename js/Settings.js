"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[265],{4086:(e,t,n)=>{n.r(t),n.d(t,{default:()=>K});var l=n(7363),a=n.n(l),r=n(6711),c=n(1660),i=n(8104),m=function(){var e=(0,c.C)((function(e){return e.account})),t=e.profile,n=e.bindings;return a().createElement(a().Fragment,null,a().createElement("div",{className:""},n.map((function(e){}))),a().createElement("div",null,a().createElement(r.Link,{to:"/user/".concat(t.userId,"/edit"),className:"inline-block rounded-full px-3 py-1 border mr-2 hover:bg-gray-100"},"修改个人信息"),a().createElement(r.Link,{to:"/friend/invite",className:"inline-block rounded-full px-3 py-1 border hover:bg-gray-100"},"寻找并邀请好友")))},s=function(){var e=(0,c.T)();return a().createElement(a().Fragment,null,a().createElement("div",{className:"text-gray-400 mb-3"},"登录网易云音乐，手机电脑多端同步，320K高音质无限下载"),a().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full",onClick:function(){return e((0,i.setLoginVisibilty)())}},"立即登录"))},o=function(){return(0,c.C)((function(e){return e.common})).isLogin?a().createElement(m,null):a().createElement(s,null)};const u=(0,l.memo)(o);var d=n(4839),f=n(829),E=n(3849),v=n.n(E),b=function(e){var t=e.list,n=void 0===t?[]:t,l=e.checked,r=void 0===l?"":l,c=e.name,i=void 0===c?"":c,m=e.handle,s=void 0===m?function(){}:m,o=e.row,u=void 0!==o&&o;return a().createElement("div",{className:v()("domSetting_subBlock_content",{flex:u})},n.map((function(e){return a().createElement("div",{className:v()("item leading-loose",{"mr-6":u}),key:e},a().createElement("label",{className:"domSetting_radio flex items-center",htmlFor:e},a().createElement("input",{id:e,name:i,type:"radio",checked:r===e,onChange:function(){return s(e)}}),a().createElement("i",{className:"ico flex items-center justify-center mr-2"}),a().createElement("span",null,e)))})))};const p=(0,l.memo)(b);var g=n(2108),y=n(1624);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var _=function(e){var t=e.list,n=void 0===t?[]:t,l=(e.name,e.handle,(0,y.useDispatch)(),(0,g.p)());return a().createElement("div",{className:"domSetting_subBlock_content"},n.map((function(e){var t,n,r=(n=3,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(l=n.next()).done)&&(r.push(l.value),!t||r.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return r}}(t,n)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=r[0],i=(r[1],r[2]);return a().createElement("div",{className:"item leading-loose",key:c},a().createElement("label",{className:"domSetting_check flex items-center",htmlFor:c},a().createElement(d.Z,{name:c,onChange:function(){return l("设置已更新")}})," ",a().createElement("span",null,c),i&&a().createElement("span",{className:"text-gray-400"},"（".concat(i,"）"))))})))};const N=(0,l.memo)(_);var k=function(e){var t=e.children,n=e.title,l=void 0===n?"未知项":n,r=e.tips;return a().createElement("div",{className:"mt-6"},a().createElement("div",{className:"mb-2.5"},a().createElement("span",null,l,"："),a().createElement("span",{className:"text-gray-400"},r)),a().createElement("div",null,t))};const S=(0,l.memo)(k);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(l=n.next()).done)&&(r.push(l.value),!t||r.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var A=function(){var e=(0,c.T)(),t=(0,g.p)(),n=(0,c.C)(f.settingSelector).font,r=B((0,l.useState)("最小化到系统托盘"),2),i=r[0],m=r[1];return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"常规"),a().createElement(S,{title:"字体选择",tips:"如果字体显示不清晰，请在控制面板——字体设置中启用系统Clear Type设置"},a().createElement("select",{className:"domSetting_select",onChange:function(n){e((0,f.setFont)(n.target.value)),t("设置已更新")},value:n},G.map((function(e){var t=B(e,2),n=t[0],l=t[1];return a().createElement("option",{key:n,value:n,title:l,style:{fontFamily:n}},l)})))),a().createElement(S,{title:"启动"},a().createElement(N,{name:"启动",list:[["开机自动启动",!1]]})),a().createElement(S,{title:"关联"},a().createElement(N,{name:"关联",list:[["将网易云音乐设为默认播放器",!1]]})),a().createElement(S,{title:"动画"},a().createElement(N,{name:"动画",list:[["禁用动画效果",!1,"减少部分资源占用"]]})),a().createElement(S,{title:"GPU加速"},a().createElement(N,{name:"GPU加速",list:[["禁用GPU加速",!1,"关闭图形加速，如果单曲播放页或MV播放黑屏请勾选"]]})),a().createElement(S,{title:"关闭主面板"},a().createElement(p,{name:"关闭主面板",list:["最小化到系统托盘","退出云音乐"],checked:i,handle:m})),a().createElement(S,{title:"定时关机"},a().createElement("div",{className:"domSetting_subBlock_content"},a().createElement("div",{className:"item"},a().createElement("label",{className:"domSetting_check flex items-center"},a().createElement(d.Z,null)," ",a().createElement("span",null,"开启定时关机"))),a().createElement("div",{className:"item"},"剩余关机时间",a().createElement("select",{className:"domSetting_select"},Object.keys(Array(24).fill(0)).map((function(e){return a().createElement("option",{value:e,key:e},e)}))),"时",a().createElement("select",{className:"domSetting_select"},Object.keys(Array(60).fill(0)).map((function(e){return a().createElement("option",{value:e,key:e},e)}))),"分"))),a().createElement(S,{title:"高清屏适配",tips:"禁用后建议重启软件"},a().createElement(N,{name:"高清屏适配",list:[["禁用系统缩放比例",!1,"减少部分资源占用"]]})))};const w=(0,l.memo)(A);function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var j=function(){var e,t,n=(e=(0,l.useState)("directSound主声音驱动程序"),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(l=n.next()).done)&&(r.push(l.value),!t||r.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?I(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=n[0],c=n[1];return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"播放"),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"播放列表：",a().createElement("span",{className:"ui_gary text-gray-400"},"单曲、节目")),a().createElement(p,{list:["双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）","双击播放单曲时，仅把当前单曲添加到播放列表（节目同理）"],name:"播放列表",checked:"双击播放单曲时，用当前单曲所在的歌曲列表替换播放列表（节目同理）"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"自动播放："),a().createElement(N,{name:"自动播放",list:[["程序启动是自动播放",!1]]})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"播放进度："),a().createElement(N,{name:"播放进度",list:[["将程序启动时记住上一次播放进度",!1]]})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"效果："),a().createElement(N,{name:"效果",list:[["开启音乐淡入淡出",!1,"仅支持输出设备DirectSound"]]})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"输出设备：",a().createElement("span",{className:"text-gray-400"},"播放下一首歌时生效")),a().createElement("div",{className:"domSetting_subBlock_content"},a().createElement("select",{className:"domSetting_select",value:r,onChange:function(e){return c(e.target.value)}},["directSound主声音驱动程序","directSound扬声器(VIA HD Audio(Win 10))","directSoundSPDIF Interface (TX0)(VIA HD Audio(Win 10))","WaveOut:Microsoft 声音映射器","WaveOut:扬声器(VIA HD Audio(Win 10))","WaveOut:SPDIF Interface (TX0)(VIA HD A","Wasapi:扬声器(VIA HD Audio(Win 10))","Wasapi:SPDIF Interface (TX0)(VIA HD Audio(Win 10))"].map((function(e){return a().createElement("option",{value:e,key:e},e)}))))))};const F=(0,l.memo)(j);var C=function(){return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"消息与隐私"),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"私信：",a().createElement("span",{className:"text-gray-400"},"接收私信提醒")),a().createElement(p,{list:["所有人","我所关注的人"],name:"私信",checked:"所有人"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"通知："),a().createElement(N,{name:"通知",list:[["歌单被收藏",!1],["收到赞",!1],["新粉丝",!1]]})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"我的听歌排行："),a().createElement(p,{list:["所有人可见","被关注的人可见","仅自己可见"],name:"我的听歌排行",checked:"所有人可见"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"黑名单设置："),a().createElement("div",{className:"domSetting_subBlock_content"},a().createElement("div",{className:"item"},"我的黑名单",a().createElement("button",null)))))};const O=(0,l.memo)(C);var D=function(){return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"下载设置"),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"音质选择："),a().createElement("div",{className:"flex items-center"},a().createElement("span",{className:"mr-6"},"试听"),a().createElement(p,{row:!0,list:["标准","较高","极高","无损音质"],checked:"较高",name:"试听"})),a().createElement("div",{className:"flex items-center"},a().createElement("span",{className:"mr-6"},"下载"),a().createElement(p,{row:!0,list:["标准","较高","极高","无损音质"],checked:"较高",name:"下载"}))),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"音乐命名格式："),a().createElement(p,{list:["歌曲名","歌手 - 歌曲名","歌曲名 - 歌手"],name:"音乐命名格式",checked:"歌手 - 歌曲名"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"文件智能分类："),a().createElement(p,{list:["不分文件夹","按歌手分文件夹","按歌手\\专辑分文件夹"],name:"文件智能分类",checked:"不分文件夹"})))};const P=(0,l.memo)(D);var T=function(){return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"歌词"),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"类型："),a().createElement(p,{name:"类型",list:["桌面歌词","软件内词栏"],checked:"桌面歌词"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"启用："),a().createElement(N,{list:[["启用歌词",!1],["外文歌词显示翻译",!0],["外文歌词显示音译",!0]],name:"启用"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"总在最前："),a().createElement(N,{list:[["启用总在最前",!1]],name:"总在最前"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"预览：")))};const W=(0,l.memo)(T);var H=function(){return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"工具"),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"Http代理："),a().createElement(p,{name:"Http代理",list:["不使用代理","使用IE代理设置","自定义代理"],checked:"不使用代理"})),a().createElement("div",{className:"domSetting_subBlock"},a().createElement("div",{className:"domSetting_subBlock_title"},"音乐云盘设置："),a().createElement(N,{list:[["本地音乐添加到歌单后，讲文件上传至云盘，可多端同步歌单，播放下载",!1]],name:"音乐云盘设置"})))};const L=(0,l.memo)(H);var V=n(6719),U=function(){return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"关于网易云音乐"),a().createElement("br",null),a().createElement("div",null,"当前版本……"," ",a().createElement("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full"},"检测更新")),a().createElement("div",{className:"domSetting_subBlock"},a().createElement(p,{name:"更新",list:["自动更新","有新版本时提醒我"],checked:"自动更新"})),a().createElement("br",null),a().createElement("div",{className:"flex items-center"},a().createElement("span",{className:"mr-4"},"下载移动客户端"),a().createElement("a",{href:"https://itunes.apple.com/cn/app/wang-yi-yun-yin-le/id590338362?l=ch",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4"},a().createElement(V.IconBrandApple,{size:16,className:"fill-current"}),"iPhone版"),a().createElement("a",{href:"https://itunes.apple.com/cn/app/wang-yi-yun-yin-lehd/id871041757?l=ch",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4"},a().createElement(V.IconBrandApple,{size:16,className:"fill-current"}),"iPad版"),a().createElement("a",{href:"https://music.163.com/#/download",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4"},a().createElement(V.IconBrandApple,{size:16,className:"fill-current"}),"iPhone版"),a().createElement("a",{href:"http://www.windowsphone.com/s?appid=db9dbdaa-464e-4370-a078-800fc7983d39",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4"},a().createElement(V.IconBrandApple,{size:16,className:"fill-current"}),"iPhone版")),a().createElement("div",{className:"pt-8 pb-7 flex gap-2"},a().createElement("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black"},"《网易云音乐官网》"),a().createElement("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black"},"《网易云音乐社区管理细则》"),a().createElement("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black"},"《服务条款》"),a().createElement("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black"},"《隐私政策》"),a().createElement("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black"},"《儿童隐私政策》")))},M=["账号","常规","播放","消息与隐私","快捷键","下载设置","歌词","工具","关于网易云音乐"],z=[u,w,F,O,function(){return a().createElement(a().Fragment,null,a().createElement("div",{className:"domSetting_block_title"},"快捷键"))},P,W,L,(0,l.memo)(U)],$=M.map((function(e,t){return[e,z[t]]})),G=[["inherit","默认"],["仿宋","仿宋"],["宋体","宋体"],["微软雅黑","微软雅黑"],["微软雅黑 Light","微软雅黑 Light"],["新宋体","新宋体"],["方正兰亭超细黑简体","方正兰亭超细黑简体"],["方正粗黑宋简体","方正粗黑宋简体"],["楷体","楷体"],["等线","等线"],["等线 Light","等线 Light"],["黑体","黑体"]];function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var R=function(){return a().createElement("div",{className:"domSetting flex flex-col h-full"},a().createElement("div",{className:"px-8 py-5"},a().createElement("div",{className:"h1"},"设置"),a().createElement("div",{className:"mt-8 flex gap-4"},M.map((function(e){return a().createElement("a",{href:"#".concat(e),key:e},e)})))),a().createElement("div",{className:"px-8 overflow-auto max-h-full flex-auto"},$.map((function(e){var t,n,l=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(l=n.next()).done)&&(r.push(l.value),!t||r.length!==t);c=!0);}catch(e){i=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw a}}return r}}(t,n)||function(e,t){if(e){if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?X(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=l[0],c=l[1];return a().createElement("div",{id:r,key:r,className:"pb-8 mb-8 border-b"},a().createElement(c,null))}))))};const Z=(0,l.memo)(R),K=function(){return a().createElement(r.Routes,null,a().createElement(r.Route,{index:!0,element:a().createElement(Z,null)}))}}}]);
//# sourceMappingURL=Settings.js.map?version=4a378e4b