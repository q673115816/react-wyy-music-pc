System.register(["./react-legacy.132817e3.js","./index-legacy.56888ea8.js","./react-router-dom-legacy.d30db004.js","./@tabler/icons-legacy.18d20b1f.js","./qrcode.react-legacy.4058aa06.js"],(function(e){"use strict";var t,a,i,r,c,o,s,l,n,d,m;return{setters:[function(e){t=e.r},function(e){a=e.p,i=e.t,r=e.d,c=e.k,o=e.M},function(e){s=e.L},function(e){l=e.E},function(e){n=e.a,d=e.j,m=e.F}],execute:function(){var u=t.exports.memo((function(e){var t=e.item,o=void 0===t?{}:t,u=e.item.type,h=void 0===u?1:u;return n("div",{className:"item content-visibility-auto",children:[n("div",{className:"cover relative border rounded overflow-hidden",children:[n(s,{to:"/player/".concat(a[h],"/").concat(o.id),className:"",children:[d("img",{loading:"lazy",className:"h-full object-cover w-full aspect-video",src:o.cover,alt:""}),o.playCount&&n(m,{children:[d("div",{className:"absolute top-0 left-0 right-0 h-1/4 ui_linear_mask_top"}),n("div",{className:"absolute top-0 right-0 my-0.5 mx-2 text-white flex-center",children:[d(l,{size:12}),i(o.playCount)]})]}),o.duration>0&&n(m,{children:[d("div",{className:"mask absolute left-0 right-0 bottom-0 h-1/4 ui_linear_mask_bottom"}),d("div",{className:"absolute bottom-0 right-0 my-0.5 mx-2 text-white",children:r(o.duration).format("mm:ss")})]})]}),o.briefDesc&&d("div",{className:"absolute left-0 bottom-0 mx-1 my-1.5 text-white ",children:o.briefDesc})]}),n(s,{to:"/player/".concat(a[h],"/").concat(o.id),className:"ui_text_black_hover mt-2 flex items-center",title:o.title,children:[0===o.type&&d(c,{})," ",d("span",{className:"text-sm flex-auto w-px truncate",children:o.title})]}),o.creator&&n("div",{className:"mt-1 truncate text-gray-300",children:[1===o.type&&d(m,{children:"by "}),o.creator.map((function(e,t){return n("span",{children:[t>0&&" / ",d(s,{to:"/artist/".concat(e.userId),className:"ui_text_gray_hover",children:e.userName})]},e.userId)}))]})]})}));e("G",t.exports.memo((function(e){var t=e.list,a=void 0===t?[]:t,i=e.schema,r=void 0===i?[]:i;return d("div",{className:"grid grid-cols-3 gap-5",children:a.map((function(e){return d(o,{type:0===e.type?"mv":"video",schema:r,children:d(u,{item:e})},e.id)}))})})))}}}));
