System.register(["./react-legacy.b3bc90c5.js","./@tabler/icons-legacy.6ebba052.js","./index-legacy.c812e935.js","./qrcode.react-legacy.685a2ddb.js","./rxjs-legacy.0ab30007.js","./react-use-legacy.08b23a23.js","./react-router-legacy.983234a4.js","./lodash-legacy.4434829e.js","./react-dom-legacy.c211300b.js","./react-redux-legacy.c7a29beb.js","./immer-legacy.c24b5c0e.js","./redux-persist-legacy.aac0393a.js","./axios-legacy.c50ae73b.js","./classnames-legacy.82f93ed6.js","./react-router-dom-legacy.02c0d312.js","./react-transition-group-legacy.04c7c2c7.js","./color-legacy.6099eccf.js","./dayjs-legacy.7dd3aa6c.js","./history-legacy.13b73ead.js"],(function(e,t){"use strict";var a,o,l,n,s,r,c,i,d,u,h,m,p,b,g=document.createElement("style");return g.textContent='#ai_work:after{-webkit-animation:wave 2s linear 1.25s infinite;animation:wave 2s linear 1.25s infinite}#ai_work:after,#ai_work:before{background-image:radial-gradient(transparent,#ef4444);border-radius:50%;bottom:0;content:"";left:0;opacity:0;position:absolute;right:0;top:0}#ai_work:before{-webkit-animation:wave 2s linear 0s infinite;animation:wave 2s linear 0s infinite}@-webkit-keyframes wave{0%{opacity:0}to{bottom:33.3333333333%;left:33.3333333333%;opacity:1;right:33.3333333333%;top:33.3333333333%}}@keyframes wave{0%{opacity:0}to{bottom:33.3333333333%;left:33.3333333333%;opacity:1;right:33.3333333333%;top:33.3333333333%}}\n',document.head.appendChild(g),{setters:[e=>{a=e.r},e=>{o=e.F,l=e.i,n=e.ah},e=>{s=e.u,r=e.a},e=>{c=e.a,i=e.j},e=>{d=e.i,u=e.b,h=e.d,m=e.e},e=>{p=e.r},e=>{b=e.h},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const t=a.exports.memo((()=>{s();const e=r(),[t,l]=a.exports.useState(""),n=a.exports.useRef(!1),[d,u]=a.exports.useState(!1),{current:h}=a.exports.useRef((()=>{const e=new webkitSpeechRecognition,t=new webkitSpeechGrammarList;return t.addFromString("#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;",1),e.grammars=t,e.continuous=!0,e.interimResults=!0,e.lang="cmn-Hans-CN",e.maxAlternatives=1,e.onresult=function(e){console.log("result"),console.log(e);let t="";for(const[{transcript:a}]of e.results)t+=a;l(t)},e.onstart=e=>{console.log(e,"start")},e.onend=e=>{console.log(e,"end"),n.current=!1,u(!1)},e.onspeechstart=e=>{console.log(e,"speechstart")},e.onspeechend=e=>{console.log(e,"speechend")},e.onsoundstart=e=>{console.log(e,"soundstart")},e.onsoundend=e=>{console.log(e,"soundend")},e.onaudiostart=e=>{console.log(e,"audiostart")},e.onaudioend=e=>{console.log(e,"audioend")},e})()),m="在最新浏览器下使用",p=a.exports.useCallback((()=>{if("speechSynthesis"in globalThis)return n.current?(console.log("toggleEnd"),n.current=!1,u(!1),void h.abort()):(n.current=!0,u(!0),console.log("start"),h.start(),void console.log("Ready to receive a color command."));e(m)}),[]);return c("div",{className:"absolute bottom-0 left-0",children:[d&&i("textarea",{value:t,readOnly:!0}),i("div",{children:d&&"(真人讲话的效果较好，但是放歌给电脑听电脑听清，所以可以选择自己唱歌给电脑听，中途关闭会小卡)"}),c("button",{type:"button",title:m,onClick:p,className:"border px-2 flex-center hover:bg-black hover:text-white",children:[i(o,{}),d?"正在收集声音":"隐藏功能"]})]})})),g=d(1e3).pipe(u(15),h((e=>e-1)),m((e=>e>0))),f=a.exports.memo((({handleCallback:e})=>{const[t,o]=a.exports.useState(15);return a.exports.useEffect((()=>{const t=g.subscribe({next:o,complete:e});return()=>t.unsubscribe()}),[]),c("div",{className:"flex flex-col items-center",children:[i("div",{id:"ai_work",className:"p-32 relative",children:i("div",{className:"flex-center rounded-full text-white bg-red-500 w-32 h-32",children:i(l,{size:64})})}),c("div",{children:[t%2==0||t%3==0||t%5==0?"外部声源无法识别":"正在识别电脑中正在播放的音乐",`(${t}s)`]}),i("button",{type:"button",className:"mt-4 text-base hover:bg-gray-100 rounded border h-10 w-28",onClick:e,children:"停止识别"})]})})),v=a.exports.memo((function(){return c("svg",{viewBox:"0 0 1024 1024",width:"256",height:"256",className:"mb-4",children:[i("path",{d:"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z",fill:"#FD8469"}),i("path",{d:"M110.462992 829.68189C203.993701 948.207874 349.127559 1024 512 1024s307.2-75.792126 401.537008-194.31811H110.462992z",fill:"#F1543F"}),i("path",{d:"M586.179528 817.587402l14.513385-89.499213h-177.385826l14.513385 89.499213z",fill:"#FFFFFF","p-id":"17925"}),i("path",{d:"M595.855118 759.533858l4.837795-31.445669h-177.385826l4.837795 31.445669z",fill:"#E6E9EE"}),i("path",{d:"M815.974803 740.182677H208.025197c-12.900787 0-23.382677-10.48189-23.382677-23.382677V278.979528c0-12.900787 10.48189-23.382677 23.382677-23.382678h608.755905c12.900787 0 23.382677 10.48189 23.382678 23.382678v437.014173c0 12.900787-10.48189 24.188976-24.188977 24.188976z",fill:"#FFFFFF"}),i("path",{d:"M227.376378 298.330709h569.247244v351.546456H227.376378z",fill:"#84DBFF"}),i("path",{d:"M227.376378 298.330709h569.247244v8.062992H227.376378z",fill:"#54C0EB"}),i("path",{d:"M635.36378 829.68189H388.63622v-12.094488c0-12.900787 10.48189-22.576378 22.576378-22.576378h200.768504c12.900787 0 22.576378 10.48189 22.576378 22.576378v12.094488h0.8063z",fill:"#E6E9EE"}),i("path",{d:"M512 690.998425m-25.801575 0a25.801575 25.801575 0 1 0 51.60315 0 25.801575 25.801575 0 1 0-51.60315 0Z",fill:"#E6E9EE"}),i("path",{d:"M681.322835 553.927559H362.834646c-6.450394 0-12.094488-5.644094-12.094489-12.094488v-166.097638c0-6.450394 5.644094-12.094488 12.094489-12.094488h318.488189c6.450394 0 12.094488 5.644094 12.094488 12.094488v166.097638c0 6.450394-5.644094 12.094488-12.094488 12.094488z",fill:"#E6E9EE"}),i("path",{d:"M375.735433 385.411024h292.686614v13.707086H375.735433zM375.735433 418.469291h292.686614v13.707087H375.735433zM375.735433 452.333858h292.686614v13.707087H375.735433zM375.735433 485.392126h292.686614v13.707087H375.735433zM375.735433 518.450394h166.097638v13.707086h-166.097638z",fill:"#CED5E0","p-id":"17933"}),i("path",{d:"M683.741732 610.368504l24.995276-24.995276-50.796851-51.603149 41.12126-24.188977-108.044094-17.738582 17.738583 108.044094 24.188976-41.12126z",fill:"#324A5E"})]})})),x=a.exports.memo((({handleCallback:e})=>{const t=r();return c("div",{className:"flex flex-col items-center",children:[i(v,{}),i("div",{className:"text-base",children:"未识别出音乐，仅支持当前电脑正在播放的音乐"}),i("button",{type:"button",className:"text-sm ui_theme_bg_color text-white py-2 px-6 rounded mt-4",onClick:e,children:"重新识别"}),i("button",{type:"button",className:"mt-3 text-blue-400 text-sm",onClick:()=>t("反馈成功，感谢您的反馈"),children:"提交反馈"})]})})),y=a.exports.memo((function(){const e=r(),[a,o]=p(!0);return c("div",{className:"py-5 px-8 flex flex-col h-full relative",children:[i(t,{}),c("div",{className:"domAi_header flex items-baseline",children:[i("div",{className:"h1",children:"听歌识曲"}),c("button",{type:"button",className:"ml-auto flex items-center",onClick:()=>e("创建【听歌识曲】图标至桌面成功"),children:[i(n,{size:16,stroke:1}),"创建桌面快捷方式"]})]}),i("div",{className:"flex-auto flex-center",children:i(a?f:x,{handleCallback:o})})]})}));e("default",(()=>b([{path:"",element:i(y,{})}])))}}}));