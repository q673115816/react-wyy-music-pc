"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[9],{6085:(e,t,n)=>{n.r(t),n.d(t,{default:()=>X});var r=n(7363),a=n.n(r),l=n(6711),o=n(3849),i=n.n(o),c=n(6319),s=n.n(c),u=n(6719),m=n(6653),d=n(2462),f=n(6467),v=n(5759);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t,n,r,a,l,o){try{var i=e[l](o),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function b(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){p(l,r,a,o,i,"next",e)}function i(e){p(l,r,a,o,i,"throw",e)}o(void 0)}))}}var h=function(){var e,t,n,r,o,i,c,p,h,E,x,g=(0,l.useParams)().id,N=void 0===g?"":g,w=(0,v.p)(),A=(0,d.T)(),k=(E=(0,f.UN)(),x=2,function(e){if(Array.isArray(e))return e}(E)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(E,x)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(E,x)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),S=k[0],I=(k[1].isLoading,(0,f.UD)({id:N}).data),_=(null==I?void 0:I.data)||{},j=(null==_||null===(e=_.user)||void 0===e?void 0:e.followed)||!1,C=(h=b(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S({id:N,t:1});case 3:w("收藏成功！"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])}))),function(){return h.apply(this,arguments)}),L=function(){var e=b(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!j){e.next=4;break}A((0,m.setDialogUnSubscriptionShow)({artistId:N})),e.next=6;break;case 4:return e.next=6,C();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a().createElement("div",{className:"domArtist_header flex p-8"},a().createElement("div",{className:"w-44 h-44 border overflow-hidden rounded"},a().createElement("img",{src:"".concat(null===(t=_.artist)||void 0===t?void 0:t.cover,"?param=200y200"),alt:""})),a().createElement("div",{className:"content flex-auto px-5"},a().createElement("div",{className:"name h1 select-text"},null===(n=_.artist)||void 0===n?void 0:n.name),a().createElement("div",{className:"enname my-3 select-text"},null===(r=_.alias)||void 0===r?void 0:r.map((function(e){return e}))),a().createElement("div",{className:"actions mt-3 flex space-x-2"},a().createElement("button",{onClick:L,type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex items-center text-sm"},j?a().createElement(a().Fragment,null,a().createElement(u.IconCheckbox,{size:20,stroke:1}),"已收藏"):a().createElement(a().Fragment,null,a().createElement(u.IconFolderPlus,{size:20,stroke:1}),"收藏")),_.user&&a().createElement(l.Link,{to:"/user/".concat(null===(o=_.user)||void 0===o?void 0:o.userId),className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full flex items-center text-sm"},"个人主页")),a().createElement("div",{className:"info mt-5 space-x-5"},a().createElement("span",{className:"size"},"单曲数:",null==_||null===(i=_.artist)||void 0===i?void 0:i.musicSize),a().createElement("span",{className:"size"},"专辑数:",null===(c=_.artist)||void 0===c?void 0:c.albumSize),a().createElement("span",{className:"size"},"MV数:",null===(p=_.artist)||void 0===p?void 0:p.mvSize))))};const E=(0,r.memo)(h);var x=n(743),g=n.n(x),N=function(e){var t=e.hotAlbums,n=void 0===t?[]:t;return a().createElement("div",{className:"grid grid-cols-4 p-8 gap-x-20 gap-y-5"},n.map((function(e){return a().createElement("div",{className:"item",key:e.id},a().createElement("div",{className:"cover rounded overflow-hidden relative group"},a().createElement(l.Link,{to:"/playlist/album/".concat(e.id)},a().createElement("img",{className:"",src:"".concat(e.picUrl,"?param=200y200"),alt:""})),a().createElement("button",{type:"button",className:"absolute inset-0 ui_themeColor flex-center m-auto w-10 h-10 rounded-full bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500"},a().createElement(u.IconPlayerPlay,{size:20,className:"fill-current"}))),a().createElement("div",{className:"name text-sm mt-2"},a().createElement(l.Link,{to:"/playlist/album/".concat(e.id),className:"ui_ellipse"},a().createElement("span",{className:"ui_text_black_hover"},e.name),e.alias.map((function(e){return a().createElement("span",{className:"text-gray-500",key:e},"（".concat(e,"）"))})))),a().createElement("div",{className:"text-gray-400 mt-2"},g()(e.publishTime).format("YYYY-MM-DD")))})))};const w=(0,r.memo)(N);var A=function(e){var t=e.hotAlbums,n=void 0===t?[]:t;return a().createElement("div",{className:"list pt-4"},n.map((function(e,t){var n;return a().createElement("div",{className:i()("list_item pl-5 flex items-center h-20 hover:bg-gray-100",{"bg-gray-50":t%2==0}),key:e.id},a().createElement(l.Link,{className:"cover border rounded flex-none w-14 h-14",to:"/playlist/album/".concat(e.id)},a().createElement("img",{className:"ui_containimg",src:"".concat(e.picUrl,"?param=100y100"),alt:""})),a().createElement(l.Link,{className:"name truncate px-2.5",to:"/playlist/album/".concat(e.id)},e.name," ",(null===(n=e.alias)||void 0===n?void 0:n.length)>0&&a().createElement("span",{className:"text-gray-400"},"(",e.alias.map((function(e){return e})),")")),a().createElement("span",{className:"size text-gray-400"},e.size,"首"),a().createElement("span",{className:"publishTime text-gray-400"},"发行时间：",g()(e.publishTime).format("YYYY-MM-DD")))})))};const k=(0,r.memo)(A);var S=n(2090),I=n(7407);function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j=function(){var e=(0,l.useParams)().id,t=void 0===e?"":e;console.log("artist_column");var n,o,c=(n=(0,r.useState)(10),o=2,function(e){if(Array.isArray(e))return e}(n)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(n,o)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=c[0],m=c[1],d=(0,f.rW)({id:t}).data,v=(null==d?void 0:d.songs)||[];return a().createElement("div",{className:"column p-8"},a().createElement("div",{className:"column_item"},a().createElement("div",{className:"cover"},a().createElement("div",{className:"Top50 flex-none bg-black bg-opacity-50 flex-center flex-col font-bold rounded w-full h-full text-white"},a().createElement("div",{className:"text-4xl"},"TOP"),a().createElement("div",{className:"text-6xl"},"50"))),a().createElement("div",{className:"aside flex-auto ml-20 w-0"},a().createElement("div",{className:"flex"},a().createElement("span",{className:"font-bold text-base"},"热门50首"),a().createElement("div",{className:"flex items-center"},a().createElement("button",{type:"button",className:"flex-none border rounded-full flex-center mx-3 p-1"},a().createElement(u.IconPlayerPlay,{size:10,className:"fill-current"})),a().createElement("span",{className:"text-gray-300"},"|"),a().createElement("button",{type:"button",className:"mx-3"},a().createElement(u.IconFolderPlus,{size:20,stroke:1})))),a().createElement("div",{className:"list mt-2"},v.slice(0,s).map((function(e,t){return a().createElement("div",{className:i()("item hover:bg-gray-100 focus:outline-none focus:bg-gray-200",{"bg-gray-50":t%2==0}),tabIndex:2,key:e.id},a().createElement("div",{className:"index flex-none text-right text-gray-400"},String(t+1).padStart(2,"0")),a().createElement("div",{className:"heart flex-none text-center"},a().createElement(I.Z,{id:e.id})),a().createElement("div",{className:"download flex-none text-center"},a().createElement("button",{type:"button",className:"text-gray-500 hover:text-black"},a().createElement(u.IconDownload,{size:16,stroke:1}))),a().createElement("div",{className:"name flex-auto flex flex-auto min-w-0 px-2.5"},a().createElement("span",{className:"truncate",title:"".concat(e.name,"(").concat(e.alia.map((function(e){return e})),")")},e.name," ",a().createElement("span",{className:"text-gray-400"},e.alia.map((function(e){return e})))),a().createElement(S.Z,{item:e,className:"flex-none"})),a().createElement("div",{className:"duration text-gray-400 flex-none"},g()(e.dt).format("mm:ss")))})),10===s&&v.length>10&&a().createElement("button",{type:"button",className:"seeMore",onClick:function(){return m(50)}},"查看全部",v.length,"首 >")))))};const C=(0,r.memo)(j);var L=n(2182),P=n(7418);function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var T=[["Grid",u.IconLayoutGrid],["List",u.IconList],["Column",u.IconLayout]],U={Grid:w,List:k,Column:C};const O=(0,r.memo)((function(){var e=(0,l.useParams)().id,t=void 0===e?"":e,n=M((0,L.Z)("layout",T[0][0]),3),o=n[0],c=void 0===o?"Grid":o,s=n[1],u=(n[2],(0,f.U6)({id:t})),m=u.data,d=u.isLoading,v=(null==m?void 0:m.hotAlbums)||[];return null==m||m.more,d?a().createElement(P.Z,null):a().createElement("div",{className:"domArtist_section relative"},a().createElement("div",{className:"absolute right-8 bottom-full actions ml-auto space-x-0.5 flex rounded-sm overflow-hidden"},T.map((function(e){var t=M(e,2),n=t[0],r=t[1];return a().createElement("button",{key:n,type:"button",className:i()("px-1.5 py-0.5 bg-gray-200","handle",n===c&&"bg-gray-400 text-white"),onClick:function(){return s(n)}},a().createElement(r,{size:14,stroke:1}))}))),a().createElement("div",{className:"domArtist_section_layout"},(0,r.createElement)(U[c],{hotAlbums:v,id:t})))}));var D=function(){var e,t=(0,l.useParams)().id,n=void 0===t?"":t,r=(0,f.iZ)({id:n}),o=r.data;return r.isLoading?a().createElement(P.Z,null):a().createElement("div",{className:"domArtist_section p-8 leading-8 text-sm select-text"},a().createElement("div",{className:"domArtist_subtitle font-bold"},"简介"),a().createElement("div",{className:"domArtist_article text-gray-500 indent-8"},null==o?void 0:o.briefDesc),a().createElement("br",null),a().createElement("br",null),null==o||null===(e=o.introduction)||void 0===e?void 0:e.map((function(e){return a().createElement("div",{key:e.ti,className:"select-text"},a().createElement("div",{className:"domArtist_subtitle font-bold"},e.ti),a().createElement("div",{className:"domArtist_article text-gray-500 whitespace-pre-line"},e.txt))})))};const Z=(0,r.memo)(D);var Y=n(4714),R=n(2280),$=n(2342);function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G(e,t,n,r,a,l,o){try{var i=e[l](o),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||q(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}var H=function(){var e=(0,l.useParams)().id,t=void 0===e?"":e,n=(0,f.Qe)({id:t}),r=n.data,o=n.isLoading,i=(null==r?void 0:r.artists)||[];return o?a().createElement(P.Z,null):0===i.length?a().createElement("div",{className:"text-center text-gray-400 text-sm pt-16"},"没有相似歌手"):a().createElement("div",{className:"p-8"},a().createElement("div",{className:"grid grid-cols-5 gap-5"},i.map((function(e){return a().createElement("div",{className:"space-y-2",key:e.id},a().createElement(l.Link,{to:"/artist/".concat(e.id),className:"block rounded overflow-hidden border"},a().createElement("img",{loading:"lazy",className:"aspect-square object-fit w-full h-full",src:"".concat(e.picUrl,"?param=200y200"),alt:""})),a().createElement("div",null,a().createElement(l.Link,{to:"/artist/".concat(e.id),className:"text-sm"},e.name)))}))))},K=[["专辑","Album"],["MV","MV"],["歌手详情","Desc"],["相似歌手","Similarity"]],Q={Album:O,MV:(0,r.memo)((function(){var e,t,n=(0,l.useParams)().id,o=void 0===n?"":n,i=V((0,$.x)([]),2),c=i[0],u=i[1],m=V((0,f.HK)(),2),d=m[0],v=m[1].isLoading,y=(0,r.useRef)(!0),p=(0,r.useRef)(0),b=(0,r.useRef)(null),h=(0,r.useRef)(null),E=(e=s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y.current){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,d({id:o,limit:24,offset:p.current});case 5:t=e.sent.data,p.current+=24,n=(null==t?void 0:t.mvs)||[],r=(null==t?void 0:t.hasMore)||!1,y.current=r,u((function(e){var t,r;(t=e).push.apply(t,(r=n.map((function(e){var t=e.id,n=e.imgurl,r=e.duration,a=e.name;return{id:t,duration:r,playCount:e.playCount,cover:n,title:a,type:"0"}})),function(e){if(Array.isArray(e))return F(e)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||q(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})),t=function(){var t=this,n=arguments;return new Promise((function(r,a){var l=e.apply(t,n);function o(e){G(l,r,a,o,i,"next",e)}function i(e){G(l,r,a,o,i,"throw",e)}o(void 0)}))},function(){return t.apply(this,arguments)});return(0,Y.Z)(E,b,h),a().createElement("div",{className:"domArtist_section p-8"},a().createElement(R.Z,{list:c}),a().createElement("div",{ref:h,className:"flex-center"},v&&a().createElement(P.Z,null)))})),Desc:Z,Similarity:(0,r.memo)(H)};function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function B(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,i=!1;try{for(n=n.call(e);!(o=(r=n.next()).done)&&(l.push(r.value),!t||l.length!==t);o=!0);}catch(e){i=!0,a=e}finally{try{o||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}const J=(0,r.memo)((function(){var e=B((0,r.useState)(K[0][1]),2),t=e[0],n=e[1];return a().createElement("div",{className:"domArtist overflow-auto max-h-full flex-auto"},a().createElement(E,null),a().createElement("div",null,a().createElement("div",{className:"flex mx-8"},a().createElement("div",{className:"flex gap-4 text-sm"},K.map((function(e){var r=B(e,2),l=r[0],o=r[1];return a().createElement("button",{key:o,onClick:function(){return n(o)},type:"button",className:i()(t===o&&"font-bold ui_underline")},l)}))),a().createElement("div",{className:"relative ml-auto"})),(0,r.createElement)(Q[t])))})),X=function(){return a().createElement(l.Routes,null,a().createElement(l.Route,{path:":id",element:a().createElement(J,null)}))}}}]);
//# sourceMappingURL=Artist.js.map?version=e7ecaf92