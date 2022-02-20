(()=>{"use strict";var e,t,r,a,o,n={},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=n,s.amdO={},e=[],s.O=(t,r,a,o)=>{if(!r){var n=1/0;for(u=0;u<e.length;u++){for(var[r,a,o]=e[u],i=!0,d=0;d<r.length;d++)(!1&o||n>=o)&&Object.keys(s.O).every((e=>s.O[e](r[d])))?r.splice(d--,1):(i=!1,o<n&&(n=o));if(i){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>"js/"+{9:"Artist",113:"Look",131:"Artist-TopList",136:"DJ-Category",144:"Friend",192:"AI",238:"Playlist",265:"Settings",288:"Search",323:"User",366:"Share",378:"History",413:"Cloud",456:"Comment",507:"MV-All",721:"Daily-Song",811:"Discover",868:"FM",923:"Exclusive",934:"MV-TopList",945:"Video",951:"Sublist",971:"DJ",997:"Message"}[e]+".js?version="+{9:"233ebd71",113:"bacf5fb4",131:"2a4d608a",136:"c15a5acf",144:"6ae45e74",192:"91a67c5f",238:"1fa0dcd4",265:"036bff2c",288:"5be435e2",323:"c48b6ba6",366:"d9393433",378:"090c0d94",413:"1454a9fc",456:"75a9a818",507:"5e051fad",721:"2376b431",811:"b9be7306",868:"5ba54fe7",923:"090e3644",934:"2eaa810d",945:"94b5a3bc",951:"9fb7d64a",971:"b78d5b40",997:"a086247b"}[e],s.miniCssF=e=>"css/"+{9:"Artist",131:"Artist-TopList",192:"AI",265:"Settings",288:"Search",323:"User",811:"Discover",945:"Video"}[e]+".css?version="+{9:"d3555ed8",131:"daa2f04e",192:"121669f3",265:"afaa80c6",288:"2636465c",323:"805f2f8a",811:"6fd05787",945:"fc892176"}[e],s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="wyy:",s.l=(e,a,o,n)=>{if(t[e])t[e].push(a);else{var i,d;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var c=l[u];if(c.getAttribute("src")==e||c.getAttribute("data-webpack")==r+o){i=c;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",r+o),i.src=e),t[e]=[a];var f=(r,a)=>{i.onerror=i.onload=null,clearTimeout(b);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(a))),r)return r(a)},b=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),d&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),s.p="/",a=e=>new Promise(((t,r)=>{var a=s.miniCssF(e),o=s.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=(i=r[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){var i;if((o=(i=n[a]).getAttribute("data-href"))===e||o===t)return i}})(a,o))return t();((e,t,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=s,o.parentNode.removeChild(o),a(d)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),o={666:0},s.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{9:1,131:1,192:1,265:1,288:1,323:1,811:1,945:1}[e]&&t.push(o[e]=a(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={666:0};s.f.j=(t,r)=>{var a=s.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(666!=t){var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=s.p+s.u(t),i=new Error;s.l(n,(r=>{if(s.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}}),"chunk-"+t,t)}else e[t]=0},s.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[n,i,d]=r,l=0;if(n.some((t=>0!==e[t]))){for(a in i)s.o(i,a)&&(s.m[a]=i[a]);if(d)var u=d(s)}for(t&&t(r);l<n.length;l++)o=n[l],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(u)},r=this.webpackChunkwyy=this.webpackChunkwyy||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();
//# sourceMappingURL=runtime.js.map?version=06f5e05c