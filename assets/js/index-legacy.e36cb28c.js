!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r=document.createElement("style");r.innerHTML='#ai_work:after{-webkit-animation:wave 2s linear 1.25s infinite;animation:wave 2s linear 1.25s infinite}#ai_work:after,#ai_work:before{background-image:radial-gradient(transparent,#ef4444);border-radius:50%;bottom:0;content:"";left:0;opacity:0;position:absolute;right:0;top:0}#ai_work:before{-webkit-animation:wave 2s linear 0s infinite;animation:wave 2s linear 0s infinite}@-webkit-keyframes wave{0%{opacity:0}to{bottom:33.3333333333%;left:33.3333333333%;opacity:1;right:33.3333333333%;top:33.3333333333%}}@keyframes wave{0%{opacity:0}to{bottom:33.3333333333%;left:33.3333333333%;opacity:1;right:33.3333333333%;top:33.3333333333%}}\n',document.head.appendChild(r),System.register(["./react-legacy.132817e3.js","./@tabler/icons-legacy.18d20b1f.js","./index-legacy.56888ea8.js","./qrcode.react-legacy.4058aa06.js","./rxjs-legacy.2dda1172.js","./react-use-legacy.0040e9dc.js","./react-router-dom-legacy.d30db004.js","./react-dom-legacy.7fe488f9.js","./react-redux-legacy.801f9a56.js","./immer-legacy.67f89522.js","./axios-legacy.e15c8cdf.js","./lodash-legacy.f584c299.js","./store-legacy.4efcd8f3.js","./react-slick-legacy.ee54945a.js","./react-transition-group-legacy.73cef0bd.js"],(function(n){"use strict";var r,o,a,i,l,c,s,u,d,f,h,m,p,b,v;return{setters:[function(e){r=e.r},function(e){o=e.C,a=e.v,i=e.ah},function(e){l=e.u,c=e.a},function(e){s=e.a,u=e.j},function(e){d=e.i,f=e.s,h=e.a,m=e.t},function(e){p=e.k},function(e){b=e.R,v=e.c},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var y=r.exports.memo((function(){l();var n,a,i=c(),d=e(r.exports.useState(""),2),f=d[0],h=d[1],m=r.exports.useRef(!1),p=e(r.exports.useState(!1),2),b=p[0],v=p[1],y=r.exports.useRef((n=new webkitSpeechRecognition,(a=new webkitSpeechGrammarList).addFromString("#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;",1),n.grammars=a,n.continuous=!0,n.interimResults=!0,n.lang="cmn-Hans-CN",n.maxAlternatives=1,n.onresult=function(n){console.log("result"),console.log(n);var r,o="",a=function(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw i}}}}(n.results);try{for(a.s();!(r=a.n()).done;)o+=e(r.value,1)[0].transcript}catch(i){a.e(i)}finally{a.f()}h(o)},n.onstart=function(e){console.log(e,"start")},n.onend=function(e){console.log(e,"end"),m.current=!1,v(!1)},n.onspeechstart=function(e){console.log(e,"speechstart")},n.onspeechend=function(e){console.log(e,"speechend")},n.onsoundstart=function(e){console.log(e,"soundstart")},n.onsoundend=function(e){console.log(e,"soundend")},n.onaudiostart=function(e){console.log(e,"audiostart")},n.onaudioend=function(e){console.log(e,"audioend")},n)).current,g="在最新浏览器下使用",x=r.exports.useCallback((function(){if("speechSynthesis"in globalThis)return m.current?(console.log("toggleEnd"),m.current=!1,v(!1),void y.abort()):(m.current=!0,v(!0),console.log("start"),y.start(),void console.log("Ready to receive a color command."));i(g)}),[]);return s("div",{className:"absolute bottom-0 left-0",children:[b&&u("textarea",{value:f,readOnly:!0}),u("div",{children:b&&"(真人讲话的效果较好，但是放歌给电脑听电脑听清，所以可以选择自己唱歌给电脑听，中途关闭会小卡)"}),s("button",{type:"button",title:g,onClick:x,className:"border px-2 flex-center hover:bg-black hover:text-white",children:[u(o,{}),b?"正在收集声音":"隐藏功能"]})]})})),g=d(1e3).pipe(f(15),h((function(e){return e-1})),m((function(e){return e>0}))),x=r.exports.memo((function(t){var n=t.handleCallback,o=e(r.exports.useState(15),2),i=o[0],l=o[1];return r.exports.useEffect((function(){var e=g.subscribe({next:l,complete:n});return function(){return e.unsubscribe()}}),[]),s("div",{className:"flex flex-col items-center",children:[u("div",{id:"ai_work",className:"p-32 relative",children:u("div",{className:"flex-center rounded-full text-white bg-red-500 w-32 h-32",children:u(a,{size:64})})}),s("div",{children:[i%2==0||i%3==0||i%5==0?"外部声源无法识别":"正在识别电脑中正在播放的音乐","(".concat(i,"s)")]}),u("button",{type:"button",className:"mt-4 text-base hover:bg-gray-100 rounded border h-10 w-28",onClick:n,children:"停止识别"})]})})),w=r.exports.memo((function(){return s("svg",{viewBox:"0 0 1024 1024",width:"256",height:"256",className:"mb-4",children:[u("path",{d:"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z",fill:"#FD8469"}),u("path",{d:"M110.462992 829.68189C203.993701 948.207874 349.127559 1024 512 1024s307.2-75.792126 401.537008-194.31811H110.462992z",fill:"#F1543F"}),u("path",{d:"M586.179528 817.587402l14.513385-89.499213h-177.385826l14.513385 89.499213z",fill:"#FFFFFF","p-id":"17925"}),u("path",{d:"M595.855118 759.533858l4.837795-31.445669h-177.385826l4.837795 31.445669z",fill:"#E6E9EE"}),u("path",{d:"M815.974803 740.182677H208.025197c-12.900787 0-23.382677-10.48189-23.382677-23.382677V278.979528c0-12.900787 10.48189-23.382677 23.382677-23.382678h608.755905c12.900787 0 23.382677 10.48189 23.382678 23.382678v437.014173c0 12.900787-10.48189 24.188976-24.188977 24.188976z",fill:"#FFFFFF"}),u("path",{d:"M227.376378 298.330709h569.247244v351.546456H227.376378z",fill:"#84DBFF"}),u("path",{d:"M227.376378 298.330709h569.247244v8.062992H227.376378z",fill:"#54C0EB"}),u("path",{d:"M635.36378 829.68189H388.63622v-12.094488c0-12.900787 10.48189-22.576378 22.576378-22.576378h200.768504c12.900787 0 22.576378 10.48189 22.576378 22.576378v12.094488h0.8063z",fill:"#E6E9EE"}),u("path",{d:"M512 690.998425m-25.801575 0a25.801575 25.801575 0 1 0 51.60315 0 25.801575 25.801575 0 1 0-51.60315 0Z",fill:"#E6E9EE"}),u("path",{d:"M681.322835 553.927559H362.834646c-6.450394 0-12.094488-5.644094-12.094489-12.094488v-166.097638c0-6.450394 5.644094-12.094488 12.094489-12.094488h318.488189c6.450394 0 12.094488 5.644094 12.094488 12.094488v166.097638c0 6.450394-5.644094 12.094488-12.094488 12.094488z",fill:"#E6E9EE"}),u("path",{d:"M375.735433 385.411024h292.686614v13.707086H375.735433zM375.735433 418.469291h292.686614v13.707087H375.735433zM375.735433 452.333858h292.686614v13.707087H375.735433zM375.735433 485.392126h292.686614v13.707087H375.735433zM375.735433 518.450394h166.097638v13.707086h-166.097638z",fill:"#CED5E0","p-id":"17933"}),u("path",{d:"M683.741732 610.368504l24.995276-24.995276-50.796851-51.603149 41.12126-24.188977-108.044094-17.738582 17.738583 108.044094 24.188976-41.12126z",fill:"#324A5E"})]})})),k=r.exports.memo((function(e){var t=e.handleCallback,n=c();return s("div",{className:"flex flex-col items-center",children:[u(w,{}),u("div",{className:"text-base",children:"未识别出音乐，仅支持当前电脑正在播放的音乐"}),u("button",{type:"button",className:"text-sm ui_theme_bg_color text-white py-2 px-6 rounded mt-4",onClick:t,children:"重新识别"}),u("button",{type:"button",className:"mt-3 text-blue-400 text-sm",onClick:function(){return n("反馈成功，感谢您的反馈")},children:"提交反馈"})]})})),E=r.exports.memo((function(){var t=c(),n=e(p(!0),2),r=n[0],o=n[1];return s("div",{className:"py-5 px-8 flex flex-col h-full relative",children:[u(y,{}),s("div",{className:"domAi_header flex items-baseline",children:[u("div",{className:"h1",children:"听歌识曲"}),s("button",{type:"button",className:"ml-auto flex items-center",onClick:function(){return t("创建【听歌识曲】图标至桌面成功")},children:[u(i,{size:16,stroke:1}),"创建桌面快捷方式"]})]}),u("div",{className:"flex-auto flex-center",children:u(r?x:k,{handleCallback:o})})]})}));n("default",(function(){return u(b,{children:u(v,{index:!0,element:u(E,{})})})}))}}}))}();
