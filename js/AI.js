"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[192],{5186:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var r=n(7363),l=n.n(r),a=n(6711),o=n(6719),c=n(5583);const i=(0,r.memo)((function(){return l().createElement("svg",{viewBox:"0 0 1024 1024",width:"256",height:"256",className:"mb-4"},l().createElement("path",{d:"M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z",fill:"#FD8469"}),l().createElement("path",{d:"M110.462992 829.68189C203.993701 948.207874 349.127559 1024 512 1024s307.2-75.792126 401.537008-194.31811H110.462992z",fill:"#F1543F"}),l().createElement("path",{d:"M586.179528 817.587402l14.513385-89.499213h-177.385826l14.513385 89.499213z",fill:"#FFFFFF","p-id":"17925"}),l().createElement("path",{d:"M595.855118 759.533858l4.837795-31.445669h-177.385826l4.837795 31.445669z",fill:"#E6E9EE"}),l().createElement("path",{d:"M815.974803 740.182677H208.025197c-12.900787 0-23.382677-10.48189-23.382677-23.382677V278.979528c0-12.900787 10.48189-23.382677 23.382677-23.382678h608.755905c12.900787 0 23.382677 10.48189 23.382678 23.382678v437.014173c0 12.900787-10.48189 24.188976-24.188977 24.188976z",fill:"#FFFFFF"}),l().createElement("path",{d:"M227.376378 298.330709h569.247244v351.546456H227.376378z",fill:"#84DBFF"}),l().createElement("path",{d:"M227.376378 298.330709h569.247244v8.062992H227.376378z",fill:"#54C0EB"}),l().createElement("path",{d:"M635.36378 829.68189H388.63622v-12.094488c0-12.900787 10.48189-22.576378 22.576378-22.576378h200.768504c12.900787 0 22.576378 10.48189 22.576378 22.576378v12.094488h0.8063z",fill:"#E6E9EE"}),l().createElement("path",{d:"M512 690.998425m-25.801575 0a25.801575 25.801575 0 1 0 51.60315 0 25.801575 25.801575 0 1 0-51.60315 0Z",fill:"#E6E9EE"}),l().createElement("path",{d:"M681.322835 553.927559H362.834646c-6.450394 0-12.094488-5.644094-12.094489-12.094488v-166.097638c0-6.450394 5.644094-12.094488 12.094489-12.094488h318.488189c6.450394 0 12.094488 5.644094 12.094488 12.094488v166.097638c0 6.450394-5.644094 12.094488-12.094488 12.094488z",fill:"#E6E9EE"}),l().createElement("path",{d:"M375.735433 385.411024h292.686614v13.707086H375.735433zM375.735433 418.469291h292.686614v13.707087H375.735433zM375.735433 452.333858h292.686614v13.707087H375.735433zM375.735433 485.392126h292.686614v13.707087H375.735433zM375.735433 518.450394h166.097638v13.707086h-166.097638z",fill:"#CED5E0","p-id":"17933"}),l().createElement("path",{d:"M683.741732 610.368504l24.995276-24.995276-50.796851-51.603149 41.12126-24.188977-108.044094-17.738582 17.738583 108.044094 24.188976-41.12126z",fill:"#324A5E"}))}));var u=n(4837);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){c=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const d=(0,r.memo)((function(){var e,t,n=(0,u.T)(),a=m((0,r.useState)(""),2),i=a[0],s=a[1],d=(0,r.useRef)(!1),f=m((0,r.useState)(!1),2),h=f[0],v=f[1],E=(0,r.useRef)((e=new webkitSpeechRecognition,(t=new webkitSpeechGrammarList).addFromString("#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;",1),e.grammars=t,e.continuous=!0,e.interimResults=!0,e.lang="cmn-Hans-CN",e.maxAlternatives=1,e.onresult=function(e){console.log("result"),console.log(e);var t="",n=!0,r=!1,l=void 0;try{for(var a,o=e.results[Symbol.iterator]();!(n=(a=o.next()).done);n=!0)t+=m(a.value,1)[0].transcript}catch(e){r=!0,l=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}s(t)},e.onstart=function(e){console.log(e,"start")},e.onend=function(e){console.log(e,"end"),d.current=!1,v(!1)},e.onspeechstart=function(e){console.log(e,"speechstart")},e.onspeechend=function(e){console.log(e,"speechend")},e.onsoundstart=function(e){console.log(e,"soundstart")},e.onsoundend=function(e){console.log(e,"soundend")},e.onaudiostart=function(e){console.log(e,"audiostart")},e.onaudioend=function(e){console.log(e,"audioend")},e)).current,b="在最新浏览器下使用",p=(0,r.useCallback)((function(){return"speechSynthesis"in globalThis?d.current?(console.log("toggleEnd"),d.current=!1,v(!1),void E.abort()):(d.current=!0,v(!0),console.log("start"),E.start(),void console.log("Ready to receive a color command.")):n((0,c.setToast)(b))}),[]);return l().createElement("div",{className:"absolute bottom-0 left-0"},h&&l().createElement("textarea",{value:i,readOnly:!0}),l().createElement("div",null,h&&"(真人讲话的效果较好，但是放歌给电脑听电脑听清，所以可以选择自己唱歌给电脑听，中途关闭会小卡)"),l().createElement("button",{type:"button",title:b,onClick:p,className:"border px-2 flex-center hover:bg-black hover:text-white"},l().createElement(o.IconBrandGithub,null),h?"正在收集声音":"隐藏功能"))}));function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(e){c=!0,l=e}finally{try{o||null==n.return||n.return()}finally{if(c)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var v=(0,r.memo)((function(e){var t=e.handleCallback,n=h((0,r.useState)(15),2),a=n[0],c=n[1];return(0,r.useEffect)((function(){var e=setTimeout((function(){a>1?c(a-1):t()}),1e3);return function(){clearTimeout(e)}}),[a]),l().createElement("div",{className:"flex flex-col items-center"},l().createElement("div",{id:"ai_work",className:"p-32 relative"},l().createElement("div",{className:"flex-center rounded-full text-white bg-red-500 w-32 h-32"},l().createElement(o.IconMicrophone,{size:64}))),l().createElement("div",null,a%2==0||a%3==0||a%5==0?"外部声源无法识别":"正在识别电脑中正在播放的音乐","(".concat(a,"s)")),l().createElement("button",{type:"button",className:"mt-4 text-base hover:bg-gray-100 rounded border h-10 w-28",onClick:t},"停止识别"))})),E=(0,r.memo)((function(e){var t=e.handleCallback,n=(0,u.T)();return l().createElement("div",{className:"flex flex-col items-center"},l().createElement(i,null),l().createElement("div",{className:"text-base"},"未识别出音乐，仅支持当前电脑正在播放的音乐"),l().createElement("button",{type:"button",className:"text-sm ui_theme_bg_color text-white py-2 px-6 rounded mt-4",onClick:t},"重新识别"),l().createElement("button",{type:"button",className:"mt-3 text-blue-400 text-sm",onClick:function(){return n((0,c.setToast)("反馈成功，感谢您的反馈"))}},"提交反馈"))}));const b=(0,r.memo)((function(){var e=(0,u.T)(),t=h((0,r.useState)(!0),2),n=t[0],a=t[1],i=(0,r.useCallback)((function(){return a(!1)}),[]),s=(0,r.useCallback)((function(){return a(!0)}),[]);return l().createElement("div",{className:"py-5 px-8 flex flex-col h-full relative"},l().createElement(d,null),l().createElement("div",{className:"domAi_header flex items-baseline"},l().createElement("div",{className:"h1"},"听歌识曲"),l().createElement("button",{type:"button",className:"ml-auto flex items-center",onClick:function(){return e((0,c.setToast)("创建【听歌识曲】图标至桌面成功"))}},l().createElement(o.IconFileImport,{size:16,stroke:1}),"创建桌面快捷方式")),l().createElement("div",{className:"flex-auto flex-center"},n?l().createElement(v,{handleCallback:i}):l().createElement(E,{handleCallback:s})))})),p=function(){return l().createElement(a.Routes,null,l().createElement(a.Route,{index:!0,element:l().createElement(b,null)}))}}}]);
//# sourceMappingURL=AI.js.map?version=ab9f4a09