!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(u){l=!0,i=u}finally{try{c||null==n.return||n.return()}finally{if(l)throw i}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n=document.createElement("style");n.innerHTML=".group_select_box{height:490px;width:640px}.group_select_button{height:30px;width:100px}\n",document.head.appendChild(n),System.register(["./react-legacy.44853401.js","./react-router-dom-legacy.72086173.js","./qrcode.react-legacy.406c3b0d.js","./react-slick-legacy.400e355e.js","./useInfinite-legacy.bca94327.js","./Home-legacy.d5196193.js","./index-legacy.7e8c6649.js","./lodash-legacy.ec9d3690.js","./react-transition-group-legacy.c8714733.js","./react-dom-legacy.486e296d.js","./@tabler/icons-legacy.5dfa177d.js","./react-redux-legacy.e82faa2a.js","./immer-legacy.91914d19.js","./axios-legacy.0865bd99.js","./store-legacy.6aaf7648.js","./react-use-legacy.454b4e92.js"],(function(t){"use strict";var n,r,i,o,c,l,u,a,s,d,f,m,p,h,b,g,v,y;return{setters:[function(e){n=e.r},function(e){r=e.N,i=e.O,o=e.e,c=e.d},function(e){l=e.a,u=e.j},function(e){a=e.c},function(e){s=e.u},function(e){d=e.G},function(e){f=e.u,m=e.n,p=e.bA,h=e.bB,b=e.bC,g=e.bD,v=e.bE,y=e.L},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var x=[["视频","videolist"],["MV","mvlist"]],_=n.exports.memo((function(){return l("div",{className:"flex flex-col h-full",children:[u("div",{className:"ui_header text-base space-x-4",children:x.map((function(t){var n=e(t,2),i=n[0],o=n[1];return u(r,{className:function(e){return e.isActive?"text-xl ui_underline font-bold":""},to:o,children:i},i)}))}),u(i,{})]})})),j=n.exports.memo((function(e){var t=e.id,n=f(),r=m(p).groupList;return l("div",{className:"group_select_box absolute top-100 p-5 bg-white overflow-auto shadow",children:[u("div",{className:"border-b pb-2",children:u("button",{type:"button",className:a("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",0===t?"text-red-500 bg-red-50":""),onClick:function(){return n(h({id:0}))},children:"全部视频"})}),u("div",{className:"group_select_list grid grid-cols-6 gap-y-5 p-4",children:r.map((function(e){return u("button",{type:"button",className:a("group_select_check text-center rounded-full h-8 flex-center hover:ui_themeColor",e.id===t?"text-red-500 bg-red-50":""),onClick:function(){return n(h({id:e.id}))},children:e.name},e.id)}))})]})})),N=n.exports.memo((function(){var t=f(),r=m(p),i=r.id,o=(r.initStatus,r.groupList),c=r.categoryList,x=r.videoList,_=e(n.exports.useState(!1),2),N=_[0],w=_[1],k=n.exports.useMemo((function(){var e;return(null===(e=o.find((function(e){return e.id===Number(i)})))||void 0===e?void 0:e.name)||"全部视频"}),[i]),C=n.exports.useRef(null),A=n.exports.useRef(null);return s((function(){return t(b(i))}),C,A),n.exports.useEffect((function(){return t(g()),function(){t(v())}}),[]),n.exports.useEffect((function(){t(v())}),[i]),l("div",{className:"domVideoList_content px-8 overflow-auto flex-auto",ref:C,children:[l("div",{className:"video_sort_filter_bar flex items-center justify-between",children:[l("div",{className:"group_select_wrap relative z-10",children:[l("button",{type:"button",className:"group_select_button border rounded-full hover:bg-gray-100 text-sm",onClick:function(){return w(!N)},children:[k,">"]}),N&&u(j,{id:i})]}),u("div",{className:"recommend_nav divide-x flex",children:c.map((function(e){return u("div",{children:u("button",{type:"button",className:a("recommend_nav_link rounded-full px-2 mx-1",i===e.id?"bg-red-50 text-red-500":"ui_text_black_hover"),onClick:function(){return t(h({id:e.id}))},children:e.name})},e.id)}))})]}),l("div",{className:"my-4",children:[u(d,{list:x}),u("div",{ref:A,className:"flex-center",children:u(y,{})})]})]})}));t("default",(function(){return o([{path:"",element:u(_,{}),children:[{path:"videolist",element:u(N,{})},{path:"MVList",element:u(N,{})},{path:"*",element:u(c,{to:"videolist",replace:!0})}]}])}))}}}))}();
