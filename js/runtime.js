(()=>{"use strict";var e,t,r,a,o,n={},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=n,s.amdO={},e=[],s.O=(t,r,a,o)=>{if(!r){var n=1/0;for(c=0;c<e.length;c++){for(var[r,a,o]=e[c],i=!0,l=0;l<r.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((e=>s.O[e](r[l])))?r.splice(l--,1):(i=!1,o<n&&(n=o));if(i){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>"js/"+{9:"Artist",113:"Look",131:"Artist-TopList",136:"DJ-Category",144:"Friend",192:"AI",238:"Playlist",265:"Settings",288:"Search",323:"User",366:"Share",378:"History",413:"Cloud",456:"Comment",507:"MV-All",721:"Daily-Song",811:"Discover",868:"FM",923:"Exclusive",934:"MV-TopList",945:"Video",951:"Sublist",971:"DJ",997:"Message"}[e]+".js?version="+{9:"4bd38950",113:"7cb3158c",131:"1421c1e0",136:"428ca450",144:"f74b625b",192:"ab9f4a09",238:"985bf565",265:"1f888d70",288:"1071f813",323:"42aaa151",366:"5a1a42a5",378:"c27c709e",413:"ab13d2a4",456:"cc48946a",507:"5ca8685f",721:"df7bb519",811:"87ebc121",868:"e47ea11c",923:"6654fe52",934:"0a09d85e",945:"76ba8f9d",951:"533a8da6",971:"5b7b87b5",997:"d86d5ea5"}[e],s.miniCssF=e=>"css/"+{9:"Artist",131:"Artist-TopList",192:"AI",265:"Settings",288:"Search",323:"User",811:"Discover",945:"Video"}[e]+".css?version="+{9:"d3555ed8",131:"daa2f04e",192:"121669f3",265:"afaa80c6",288:"2636465c",323:"fd888b30",811:"6fd05787",945:"fc892176"}[e],s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="wyy:",s.l=(e,a,o,n)=>{if(t[e])t[e].push(a);else{var i,l;if(void 0!==o)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+o){i=u;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",r+o),i.src=e),t[e]=[a];var f=(r,a)=>{i.onerror=i.onload=null,clearTimeout(b);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(a))),r)return r(a)},b=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),l&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),s.p="/",a=e=>new Promise(((t,r)=>{var a=s.miniCssF(e),o=s.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=(i=r[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){var i;if((o=(i=n[a]).getAttribute("data-href"))===e||o===t)return i}})(a,o))return t();((e,t,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),a(l)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),o={666:0},s.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{9:1,131:1,192:1,265:1,288:1,323:1,811:1,945:1}[e]&&t.push(o[e]=a(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={666:0};s.f.j=(t,r)=>{var a=s.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(666!=t){var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=s.p+s.u(t),i=new Error;s.l(n,(r=>{if(s.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}}),"chunk-"+t,t)}else e[t]=0},s.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[n,i,l]=r,d=0;if(n.some((t=>0!==e[t]))){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(l)var c=l(s)}for(t&&t(r);d<n.length;d++)o=n[d],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(c)},r=this.webpackChunkwyy=this.webpackChunkwyy||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();
//# sourceMappingURL=runtime.js.map?version=ceac33db