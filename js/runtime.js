(()=>{"use strict";var e,t,r,a,o,n={},i={};function d(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,d),r.loaded=!0,r.exports}d.m=n,d.amdO={},e=[],d.O=(t,r,a,o)=>{if(!r){var n=1/0;for(c=0;c<e.length;c++){for(var[r,a,o]=e[c],i=!0,s=0;s<r.length;s++)(!1&o||n>=o)&&Object.keys(d.O).every((e=>d.O[e](r[s])))?r.splice(s--,1):(i=!1,o<n&&(n=o));if(i){e.splice(c--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,a,o]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,r)=>(d.f[r](e,t),t)),[])),d.u=e=>"js/"+{9:"Artist",113:"Look",131:"Artist-TopList",136:"DJ-Category",144:"Friend",192:"AI",238:"Playlist",265:"Settings",288:"Search",323:"User",366:"Share",378:"History",413:"Cloud",456:"Comment",507:"MV-All",721:"Daily-Song",725:"react-use",811:"Discover",868:"FM",923:"Exclusive",934:"MV-TopList",945:"Video",951:"Sublist",971:"DJ",997:"Message"}[e]+".js?version="+{9:"978a469d",113:"cc5dfd8e",131:"b13132f5",136:"875dafbc",144:"b9657f02",192:"44278da0",238:"f2685ae9",265:"5a441127",288:"249e1e70",323:"e3d6dedd",366:"2eb2b531",378:"0aed44ac",413:"dc27cf3c",456:"a7b1ed4b",507:"0a391c9d",721:"d938ba4b",725:"0db94919",811:"edf83a66",868:"4bd6d344",923:"1997dd49",934:"633c84bc",945:"efbb55e3",951:"19fa178d",971:"8548487b",997:"04beb8fd"}[e],d.miniCssF=e=>"css/"+{9:"Artist",131:"Artist-TopList",192:"AI",238:"Playlist",265:"Settings",288:"Search",323:"User",811:"Discover",945:"Video"}[e]+".css?version="+{9:"d3555ed8",131:"daa2f04e",192:"121669f3",238:"51e10fc2",265:"afaa80c6",288:"8f5c827d",323:"805f2f8a",811:"be6f0cf5",945:"fc892176"}[e],d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="wyy:",d.l=(e,a,o,n)=>{if(t[e])t[e].push(a);else{var i,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+o){i=u;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",r+o),i.src=e),t[e]=[a];var f=(r,a)=>{i.onerror=i.onload=null,clearTimeout(b);var o=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(a))),r)return r(a)},b=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),s&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),d.p="/react-wyy-music-pc/",a=e=>new Promise(((t,r)=>{var a=d.miniCssF(e),o=d.p+a;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var o=(i=r[a]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var n=document.getElementsByTagName("style");for(a=0;a<n.length;a++){var i;if((o=(i=n[a]).getAttribute("data-href"))===e||o===t)return i}})(a,o))return t();((e,t,r,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=n=>{if(o.onerror=o.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),d=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=d,o.parentNode.removeChild(o),a(s)}},o.href=t,document.head.appendChild(o)})(e,o,t,r)})),o={666:0},d.f.miniCss=(e,t)=>{o[e]?t.push(o[e]):0!==o[e]&&{9:1,131:1,192:1,238:1,265:1,288:1,323:1,811:1,945:1}[e]&&t.push(o[e]=a(e).then((()=>{o[e]=0}),(t=>{throw delete o[e],t})))},(()=>{var e={666:0};d.f.j=(t,r)=>{var a=d.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else if(666!=t){var o=new Promise(((r,o)=>a=e[t]=[r,o]));r.push(a[2]=o);var n=d.p+d.u(t),i=new Error;d.l(n,(r=>{if(d.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+n+")",i.name="ChunkLoadError",i.type=o,i.request=n,a[1](i)}}),"chunk-"+t,t)}else e[t]=0},d.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[n,i,s]=r,l=0;if(n.some((t=>0!==e[t]))){for(a in i)d.o(i,a)&&(d.m[a]=i[a]);if(s)var c=s(d)}for(t&&t(r);l<n.length;l++)o=n[l],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(c)},r=this.webpackChunkwyy=this.webpackChunkwyy||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();
//# sourceMappingURL=runtime.js.map?version=abd012e3