(()=>{"use strict";var e,t,r,o,a,n={},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=n,s.amdO={},e=[],s.O=(t,r,o,a)=>{if(!r){var n=1/0;for(c=0;c<e.length;c++){for(var[r,o,a]=e[c],i=!0,d=0;d<r.length;d++)(!1&a||n>=a)&&Object.keys(s.O).every((e=>s.O[e](r[d])))?r.splice(d--,1):(i=!1,a<n&&(n=a));if(i){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>"js/"+{9:"Artist",113:"Look",131:"Artist-TopList",136:"DJ-Category",144:"Friend",192:"AI",238:"Playlist",265:"Settings",288:"Search",323:"User",366:"Share",378:"History",413:"Cloud",456:"Comment",507:"MV-All",721:"Daily-Song",811:"Discover",868:"FM",923:"Exclusive",934:"MV-TopList",945:"Video",951:"Sublist",971:"DJ",997:"Message"}[e]+".js?version="+{9:"b27cc63e",113:"7c298999",131:"dd842408",136:"e6dc9a26",144:"3f187a3e",192:"8d2be547",238:"41377d67",265:"1a8a070b",288:"46865b33",323:"f63ecfcb",366:"dd7211fd",378:"dac6d27e",413:"b4bffbe6",456:"e780935e",507:"59516953",721:"7162dfbd",811:"2f4483c3",868:"9b4202ce",923:"26be9bf3",934:"caaf5168",945:"2a8797a3",951:"1d7296cf",971:"d9e6f025",997:"09765925"}[e],s.miniCssF=e=>"css/"+{9:"Artist",131:"Artist-TopList",192:"AI",265:"Settings",288:"Search",323:"User",811:"Discover",945:"Video"}[e]+".css?version="+{9:"d3555ed8",131:"daa2f04e",192:"121669f3",265:"afaa80c6",288:"2636465c",323:"9f0f20c4",811:"6fd05787",945:"fc892176"}[e],s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="wyy:",s.l=(e,o,a,n)=>{if(t[e])t[e].push(o);else{var i,d;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+a){i=u;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",r+a),i.src=e),t[e]=[o];var f=(r,o)=>{i.onerror=i.onload=null,clearTimeout(h);var a=t[e];if(delete t[e],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(o))),r)return r(o)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),d&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),s.p="/",o=e=>new Promise(((t,r)=>{var o=s.miniCssF(e),a=s.p+o;if(((e,t)=>{for(var r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var a=(i=r[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var n=document.getElementsByTagName("style");for(o=0;o<n.length;o++){var i;if((a=(i=n[o]).getAttribute("data-href"))===e||a===t)return i}})(o,a))return t();((e,t,r,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=n=>{if(a.onerror=a.onload=null,"load"===n.type)r();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=s,a.parentNode.removeChild(a),o(d)}},a.href=t,document.head.appendChild(a)})(e,a,t,r)})),a={666:0},s.f.miniCss=(e,t)=>{a[e]?t.push(a[e]):0!==a[e]&&{9:1,131:1,192:1,265:1,288:1,323:1,811:1,945:1}[e]&&t.push(a[e]=o(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))},(()=>{var e={666:0};s.f.j=(t,r)=>{var o=s.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else if(666!=t){var a=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=a);var n=s.p+s.u(t),i=new Error;s.l(n,(r=>{if(s.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}}),"chunk-"+t,t)}else e[t]=0},s.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[n,i,d]=r,l=0;if(n.some((t=>0!==e[t]))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(d)var c=d(s)}for(t&&t(r);l<n.length;l++)a=n[l],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(c)},r=this.webpackChunkwyy=this.webpackChunkwyy||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})()})();
//# sourceMappingURL=runtime.js.map?version=cf23f8fd