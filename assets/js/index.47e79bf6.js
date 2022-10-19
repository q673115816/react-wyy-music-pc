import{r as p}from"./react.0a2f695e.js";import{L as l,R as b,c as B}from"./react-router-dom.8e5277d6.js";import{S as y}from"./react-slick.d01d63b2.js";import{am as C,L as w,C as j}from"./@tabler/icons.cf3d4071.js";import{S as E}from"./Swiper.3fc069d7.js";import{S as A,U as R,V as D,W as _,X as u,L as J}from"./index.3575e920.js";import{a,j as e}from"./qrcode.react.84002e4a.js";import"./lodash.f41ef0b4.js";import"./react-dom.d348259d.js";import"./react-redux.53cbeeec.js";import"./immer.9a3c9cc9.js";import"./axios.556b107a.js";import"./rxjs.10173dca.js";import"./react-use.4cc61ccc.js";import"./react-transition-group.7648cfe3.js";const L="_banner_8jbla_1",S={banner:L},$=({item:t={}})=>a("div",{className:"item",children:[e("div",{className:"cover relative rounded border overflow-hidden",children:a(l,{to:`/playlist/dj/${t.id}`,children:[e("img",{loading:"lazy",className:"w-full h-full aspect-square object-fit",src:t.picUrl,alt:""}),e("div",{className:"absolute bottom-0 left-0 right-0 h-1/4 ui_linear_mask_bottom"}),e("div",{className:"absolute left-0 bottom-0 max-w-full px-2 py-1 text-white truncate",children:t.name})]})}),e("div",{className:"footer mt-2 text-sm",children:e(l,{to:`/playlist/dj/${t.id}`,className:"text-gray-600 hover:text-black",children:t.rcmdtext})})]}),F=p.exports.memo($),I=({onClick:t})=>e("button",{type:"button",onClick:t,className:"absolute right-full inset-y-0 z-10 w-8 h-8 flex-center text-gray-500 m-auto",children:e(w,{size:30,stroke:1})}),k=({onClick:t})=>e("button",{type:"button",onClick:t,className:"absolute left-full inset-y-0 z-10 w-8 h-8 flex-center text-gray-500 m-auto",children:e(j,{size:30,stroke:1})}),z=({catelist:t=[]})=>e("div",{className:"px-10 mt-9",children:a(y,{...{speed:500,infinite:!1,slidesToShow:8,slidesToScroll:8,draggable:!1,prevArrow:e(I,{}),nextArrow:e(k,{})},children:[e(l,{to:"/TopList",children:a("div",{className:"flex flex-col items-center",children:[e("div",{className:"rounded-full w-12 h-12 flex-center bg-red-50 hover:bg-red-100 ui_themeColor",children:e(C,{stroke:1})}),e("div",{className:"text-gray-500 mt-2",children:"\u6392\u884C\u699C"})]})}),t.map(s=>e(l,{to:`/dj-category/${s.name}/${s.id}`,children:a("div",{className:"flex flex-col items-center",children:[e("div",{className:"rounded-full w-12 h-12 flex-center bg-red-50 hover:bg-red-100 ui_themeColor",children:e("img",{className:"w-8 h-8",src:s.pic56x56Url,alt:""})}),e("div",{className:"text-gray-500 mt-2",children:s.name})]})},s.id))]})}),G=["\u521B\u4F5C\u7FFB\u5531","\u58F0\u4E4B\u5267\u573A","\u97F3\u4E50\u6545\u4E8B","\u60C5\u611F\u8C03\u9891","\u58F0\u97F3\u604B\u4EBA"],Q=()=>{const{data:t,isLoading:f}=A();R();const{data:s}=D(),{data:o}=_(),{data:i}=u({cateId:2001,limit:6}),{data:c}=u({cateId:10001,limit:6}),{data:d}=u({cateId:2,limit:6}),{data:n}=u({cateId:3,limit:6}),{data:m}=u({cateId:3001,limit:6}),x=(t==null?void 0:t.data)||[],g=(s==null?void 0:s.categories)||[],N=(o==null?void 0:o.data)||[],h={\u521B\u4F5C\u7FFB\u5531:(i==null?void 0:i.djRadios)||[],\u58F0\u4E4B\u5267\u573A:(c==null?void 0:c.djRadios)||[],\u97F3\u4E50\u6545\u4E8B:(d==null?void 0:d.djRadios)||[],\u60C5\u611F\u8C03\u9891:(n==null?void 0:n.djRadios)||[],\u58F0\u97F3\u604B\u4EBA:(m==null?void 0:m.djRadios)||[]};return f?e("div",{className:"flex-center w-full h-full",children:e(J,{})}):e("div",{className:"px-8 overflow-auto max-h-full flex-auto",children:a("div",{className:"pb-16 ui_w1100",children:[e("div",{className:S.banner,children:x.length>0&&e(E,{list:x,coverSrc:"pic"})}),e(z,{catelist:g}),a("div",{className:"space-y-8 mt-8",children:[a("div",{children:[e("div",{className:"h1",children:"\u7535\u53F0\u4E2A\u6027\u63A8\u8350"}),e("div",{className:"mt-4 grid grid-cols-5 gap-5",children:N.slice(0,5).map(r=>e(F,{item:r},r.id))})]}),G.map(r=>a("div",{children:[a(l,{className:"h1",to:`/dj-category/${r}`,children:[r,">"]}),e("div",{className:"mt-4 grid grid-cols-5 gap-5",children:h==null?void 0:h[r].slice(0,5).map(v=>e(F,{item:v},v.id))})]},r))]})]})})},T=p.exports.memo(Q),U=()=>e(b,{children:e(B,{index:!0,element:e(T,{})})}),re=p.exports.memo(U);export{re as default};
