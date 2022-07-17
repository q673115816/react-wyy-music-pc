import{r as c}from"./react.4f2eb426.js";import{v as B,u as C,a3 as f,a as p,an as N,O as b,ao as _}from"./index.3e068c77.js";import{L as A,R as v,c as k}from"./react-router-dom.b907a3a9.js";import{j as u,a as e,F as d}from"./qrcode.react.d8dda151.js";import{c as D}from"./react-slick.a7487162.js";import{u as x}from"./react-redux.64459660.js";import{az as E}from"./@tabler/icons.85b9b193.js";import"./lodash.7c73e2e6.js";import"./react-dom.fe9fde37.js";import"./axios.1ece621b.js";import"./immer.98e49ab6.js";import"./store.e6a9b03b.js";import"./react-transition-group.99d8e67f.js";import"./react-use.9c5a79ae.js";const S=t=>{},y=()=>{const{profile:t,bindings:l}=B(({account:s})=>s);return e(d,{children:[u("div",{className:"",children:l.map(s=>S())}),e("div",{children:[u(A,{to:`/user/${t.userId}/edit`,className:"inline-block rounded-full px-3 py-1 border mr-2 hover:bg-gray-100",children:"\u4FEE\u6539\u4E2A\u4EBA\u4FE1\u606F"}),u(A,{to:"/friend/invite",className:"inline-block rounded-full px-3 py-1 border hover:bg-gray-100",children:"\u5BFB\u627E\u5E76\u9080\u8BF7\u597D\u53CB"})]})]})},j=()=>{const t=C();return e(d,{children:[u("div",{className:"text-gray-400 mb-3",children:"\u767B\u5F55\u7F51\u6613\u4E91\u97F3\u4E50\uFF0C\u624B\u673A\u7535\u8111\u591A\u7AEF\u540C\u6B65\uFF0C320K\u9AD8\u97F3\u8D28\u65E0\u9650\u4E0B\u8F7D"}),u("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full",onClick:()=>t(f()),children:"\u7ACB\u5373\u767B\u5F55"})]})},I=()=>{const{isLogin:t}=B(({common:l})=>l);return t?u(y,{}):u(j,{})},w=c.exports.memo(I),$=({list:t=[],checked:l="",name:s="",handle:m=()=>{},row:F=!1})=>u("div",{className:D("domSetting_subBlock_content",{flex:F}),children:t.map(r=>u("div",{className:D("item leading-loose",{"mr-6":F}),children:e("label",{className:"domSetting_radio flex items-center",htmlFor:r,children:[u("input",{id:r,name:s,type:"radio",checked:l===r,onChange:()=>m(r)}),u("i",{className:"ico flex items-center justify-center mr-2"}),u("span",{children:r})]})},r))}),a=c.exports.memo($),L=({list:t=[],name:l="",handle:s=()=>{}})=>{x();const m=p();return u("div",{className:"domSetting_subBlock_content",children:t.map(([F,r,i])=>u("div",{className:"item leading-loose",children:e("label",{className:"domSetting_check flex items-center",htmlFor:F,children:[u(N,{name:F,onChange:()=>m("\u8BBE\u7F6E\u5DF2\u66F4\u65B0")}),"\xA0",u("span",{children:F}),i&&u("span",{className:"text-gray-400",children:`\uFF08${i}\uFF09`})]})},F))})},n=c.exports.memo(L),P=({children:t,title:l="\u672A\u77E5\u9879",tips:s})=>e("div",{className:"mt-6",children:[e("div",{className:"mb-2.5",children:[e("span",{children:[l,"\uFF1A"]}),u("span",{className:"text-gray-400",children:s})]}),u("div",{children:t})]}),o=c.exports.memo(P),W=()=>{const t=C(),l=p(),{font:s}=B(b),m=i=>{t(_(i.target.value)),l("\u8BBE\u7F6E\u5DF2\u66F4\u65B0")},[F,r]=c.exports.useState("\u6700\u5C0F\u5316\u5230\u7CFB\u7EDF\u6258\u76D8");return e(d,{children:[u("div",{className:"domSetting_block_title",children:"\u5E38\u89C4"}),u(o,{title:"\u5B57\u4F53\u9009\u62E9",tips:"\u5982\u679C\u5B57\u4F53\u663E\u793A\u4E0D\u6E05\u6670\uFF0C\u8BF7\u5728\u63A7\u5236\u9762\u677F\u2014\u2014\u5B57\u4F53\u8BBE\u7F6E\u4E2D\u542F\u7528\u7CFB\u7EDFClear Type\u8BBE\u7F6E",children:u("select",{className:"domSetting_select",onChange:m,value:s,children:uu.map(([i,h])=>u("option",{value:i,title:h,style:{fontFamily:i},children:h},i))})}),u(o,{title:"\u542F\u52A8",children:u(n,{name:"\u542F\u52A8",list:[["\u5F00\u673A\u81EA\u52A8\u542F\u52A8",!1]]})}),u(o,{title:"\u5173\u8054",children:u(n,{name:"\u5173\u8054",list:[["\u5C06\u7F51\u6613\u4E91\u97F3\u4E50\u8BBE\u4E3A\u9ED8\u8BA4\u64AD\u653E\u5668",!1]]})}),u(o,{title:"\u52A8\u753B",children:u(n,{name:"\u52A8\u753B",list:[["\u7981\u7528\u52A8\u753B\u6548\u679C",!1,"\u51CF\u5C11\u90E8\u5206\u8D44\u6E90\u5360\u7528"]]})}),u(o,{title:"GPU\u52A0\u901F",children:u(n,{name:"GPU\u52A0\u901F",list:[["\u7981\u7528GPU\u52A0\u901F",!1,"\u5173\u95ED\u56FE\u5F62\u52A0\u901F\uFF0C\u5982\u679C\u5355\u66F2\u64AD\u653E\u9875\u6216MV\u64AD\u653E\u9ED1\u5C4F\u8BF7\u52FE\u9009"]]})}),u(o,{title:"\u5173\u95ED\u4E3B\u9762\u677F",children:u(a,{name:"\u5173\u95ED\u4E3B\u9762\u677F",list:["\u6700\u5C0F\u5316\u5230\u7CFB\u7EDF\u6258\u76D8","\u9000\u51FA\u4E91\u97F3\u4E50"],checked:F,handle:r})}),u(o,{title:"\u5B9A\u65F6\u5173\u673A",children:e("div",{className:"domSetting_subBlock_content",children:[u("div",{className:"item",children:e("label",{className:"domSetting_check flex items-center",children:[u(N,{}),"\xA0",u("span",{children:"\u5F00\u542F\u5B9A\u65F6\u5173\u673A"})]})}),e("div",{className:"item",children:["\u5269\u4F59\u5173\u673A\u65F6\u95F4",u("select",{className:"domSetting_select",children:Object.keys(Array(24).fill(0)).map(i=>u("option",{value:i,children:i},i))}),"\u65F6",u("select",{className:"domSetting_select",children:Object.keys(Array(60).fill(0)).map(i=>u("option",{value:i,children:i},i))}),"\u5206"]})]})}),u(o,{title:"\u9AD8\u6E05\u5C4F\u9002\u914D",tips:"\u7981\u7528\u540E\u5EFA\u8BAE\u91CD\u542F\u8F6F\u4EF6",children:u(n,{name:"\u9AD8\u6E05\u5C4F\u9002\u914D",list:[["\u7981\u7528\u7CFB\u7EDF\u7F29\u653E\u6BD4\u4F8B",!1,"\u51CF\u5C11\u90E8\u5206\u8D44\u6E90\u5360\u7528"]]})})]})},R=c.exports.memo(W),H=()=>{const[t,l]=c.exports.useState("directSound\u4E3B\u58F0\u97F3\u9A71\u52A8\u7A0B\u5E8F");return e(d,{children:[u("div",{className:"domSetting_block_title",children:"\u64AD\u653E"}),e("div",{className:"domSetting_subBlock",children:[e("div",{className:"domSetting_subBlock_title",children:["\u64AD\u653E\u5217\u8868\uFF1A",u("span",{className:"ui_gary text-gray-400",children:"\u5355\u66F2\u3001\u8282\u76EE"})]}),u(a,{list:["\u53CC\u51FB\u64AD\u653E\u5355\u66F2\u65F6\uFF0C\u7528\u5F53\u524D\u5355\u66F2\u6240\u5728\u7684\u6B4C\u66F2\u5217\u8868\u66FF\u6362\u64AD\u653E\u5217\u8868\uFF08\u8282\u76EE\u540C\u7406\uFF09","\u53CC\u51FB\u64AD\u653E\u5355\u66F2\u65F6\uFF0C\u4EC5\u628A\u5F53\u524D\u5355\u66F2\u6DFB\u52A0\u5230\u64AD\u653E\u5217\u8868\uFF08\u8282\u76EE\u540C\u7406\uFF09"],name:"\u64AD\u653E\u5217\u8868",checked:"\u53CC\u51FB\u64AD\u653E\u5355\u66F2\u65F6\uFF0C\u7528\u5F53\u524D\u5355\u66F2\u6240\u5728\u7684\u6B4C\u66F2\u5217\u8868\u66FF\u6362\u64AD\u653E\u5217\u8868\uFF08\u8282\u76EE\u540C\u7406\uFF09"})]}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"\u81EA\u52A8\u64AD\u653E\uFF1A"}),u(n,{name:"\u81EA\u52A8\u64AD\u653E",list:[["\u7A0B\u5E8F\u542F\u52A8\u662F\u81EA\u52A8\u64AD\u653E",!1]]})]}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"\u64AD\u653E\u8FDB\u5EA6\uFF1A"}),u(n,{name:"\u64AD\u653E\u8FDB\u5EA6",list:[["\u5C06\u7A0B\u5E8F\u542F\u52A8\u65F6\u8BB0\u4F4F\u4E0A\u4E00\u6B21\u64AD\u653E\u8FDB\u5EA6",!1]]})]}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"\u6548\u679C\uFF1A"}),u(n,{name:"\u6548\u679C",list:[["\u5F00\u542F\u97F3\u4E50\u6DE1\u5165\u6DE1\u51FA",!1,"\u4EC5\u652F\u6301\u8F93\u51FA\u8BBE\u5907DirectSound"]]})]}),e("div",{className:"domSetting_subBlock",children:[e("div",{className:"domSetting_subBlock_title",children:["\u8F93\u51FA\u8BBE\u5907\uFF1A",u("span",{className:"text-gray-400",children:"\u64AD\u653E\u4E0B\u4E00\u9996\u6B4C\u65F6\u751F\u6548"})]}),u("div",{className:"domSetting_subBlock_content",children:u("select",{className:"domSetting_select",value:t,onChange:s=>l(s.target.value),children:["directSound\u4E3B\u58F0\u97F3\u9A71\u52A8\u7A0B\u5E8F","directSound\u626C\u58F0\u5668(VIA HD Audio(Win 10))","directSoundSPDIF Interface (TX0)(VIA HD Audio(Win 10))","WaveOut:Microsoft \u58F0\u97F3\u6620\u5C04\u5668","WaveOut:\u626C\u58F0\u5668(VIA HD Audio(Win 10))","WaveOut:SPDIF Interface (TX0)(VIA HD A","Wasapi:\u626C\u58F0\u5668(VIA HD Audio(Win 10))","Wasapi:SPDIF Interface (TX0)(VIA HD Audio(Win 10))"].map(s=>u("option",{value:s,children:s},s))})})]})]})},V=c.exports.memo(H),T=()=>e(d,{children:[u("div",{className:"domSetting_block_title",children:"\u6D88\u606F\u4E0E\u9690\u79C1"}),e("div",{className:"domSetting_subBlock",children:[e("div",{className:"domSetting_subBlock_title",children:["\u79C1\u4FE1\uFF1A",u("span",{className:"text-gray-400",children:"\u63A5\u6536\u79C1\u4FE1\u63D0\u9192"})]}),u(a,{list:["\u6240\u6709\u4EBA","\u6211\u6240\u5173\u6CE8\u7684\u4EBA"],name:"\u79C1\u4FE1",checked:"\u6240\u6709\u4EBA"})]}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"\u901A\u77E5\uFF1A"}),u(n,{name:"\u901A\u77E5",list:[["\u6B4C\u5355\u88AB\u6536\u85CF",!1],["\u6536\u5230\u8D5E",!1],["\u65B0\u7C89\u4E1D",!1]]})]}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"\u6211\u7684\u542C\u6B4C\u6392\u884C\uFF1A"}),u(a,{list:["\u6240\u6709\u4EBA\u53EF\u89C1","\u88AB\u5173\u6CE8\u7684\u4EBA\u53EF\u89C1","\u4EC5\u81EA\u5DF1\u53EF\u89C1"],name:"\u6211\u7684\u542C\u6B4C\u6392\u884C",checked:"\u6240\u6709\u4EBA\u53EF\u89C1"})]}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"\u9ED1\u540D\u5355\u8BBE\u7F6E\uFF1A"}),u("div",{className:"domSetting_subBlock_content",children:e("div",{className:"item",children:["\u6211\u7684\u9ED1\u540D\u5355",u("button",{})]})})]})]}),O=c.exports.memo(T),z=()=>u(d,{children:u("div",{className:"domSetting_block_title",children:"\u5FEB\u6377\u952E"})}),M=()=>e(d,{children:[u("div",{className:"domSetting_block_title",children:"\u4E0B\u8F7D\u8BBE\u7F6E"}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"\u97F3\u8D28\u9009\u62E9\uFF1A"}),e("div",{className:"flex items-center",children:[u("span",{className:"mr-6",children:"\u8BD5\u542C"}),u(a,{row:!0,list:["\u6807\u51C6","\u8F83\u9AD8","\u6781\u9AD8","\u65E0\u635F\u97F3\u8D28"],checked:"\u8F83\u9AD8",name:"\u8BD5\u542C"})]}),e("div",{className:"flex items-center",children:[u("span",{className:"mr-6",children:"\u4E0B\u8F7D"}),u(a,{row:!0,list:["\u6807\u51C6","\u8F83\u9AD8","\u6781\u9AD8","\u65E0\u635F\u97F3\u8D28"],checked:"\u8F83\u9AD8",name:"\u4E0B\u8F7D"})]})]}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"\u97F3\u4E50\u547D\u540D\u683C\u5F0F\uFF1A"}),u(a,{list:["\u6B4C\u66F2\u540D","\u6B4C\u624B - \u6B4C\u66F2\u540D","\u6B4C\u66F2\u540D - \u6B4C\u624B"],name:"\u97F3\u4E50\u547D\u540D\u683C\u5F0F",checked:"\u6B4C\u624B - \u6B4C\u66F2\u540D"})]}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"\u6587\u4EF6\u667A\u80FD\u5206\u7C7B\uFF1A"}),u(a,{list:["\u4E0D\u5206\u6587\u4EF6\u5939","\u6309\u6B4C\u624B\u5206\u6587\u4EF6\u5939","\u6309\u6B4C\u624B\\\u4E13\u8F91\u5206\u6587\u4EF6\u5939"],name:"\u6587\u4EF6\u667A\u80FD\u5206\u7C7B",checked:"\u4E0D\u5206\u6587\u4EF6\u5939"})]})]}),U=c.exports.memo(M),G=()=>e(d,{children:[u("div",{className:"domSetting_block_title",children:"\u6B4C\u8BCD"}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"\u7C7B\u578B\uFF1A"}),u(a,{name:"\u7C7B\u578B",list:["\u684C\u9762\u6B4C\u8BCD","\u8F6F\u4EF6\u5185\u8BCD\u680F"],checked:"\u684C\u9762\u6B4C\u8BCD"})]}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"\u542F\u7528\uFF1A"}),u(n,{list:[["\u542F\u7528\u6B4C\u8BCD",!1],["\u5916\u6587\u6B4C\u8BCD\u663E\u793A\u7FFB\u8BD1",!0],["\u5916\u6587\u6B4C\u8BCD\u663E\u793A\u97F3\u8BD1",!0]],name:"\u542F\u7528"})]}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"\u603B\u5728\u6700\u524D\uFF1A"}),u(n,{list:[["\u542F\u7528\u603B\u5728\u6700\u524D",!1]],name:"\u603B\u5728\u6700\u524D"})]}),u("div",{className:"domSetting_subBlock",children:u("div",{className:"domSetting_subBlock_title",children:"\u9884\u89C8\uFF1A"})})]}),X=c.exports.memo(G),K=()=>e(d,{children:[u("div",{className:"domSetting_block_title",children:"\u5DE5\u5177"}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"Http\u4EE3\u7406\uFF1A"}),u(a,{name:"Http\u4EE3\u7406",list:["\u4E0D\u4F7F\u7528\u4EE3\u7406","\u4F7F\u7528IE\u4EE3\u7406\u8BBE\u7F6E","\u81EA\u5B9A\u4E49\u4EE3\u7406"],checked:"\u4E0D\u4F7F\u7528\u4EE3\u7406"})]}),e("div",{className:"domSetting_subBlock",children:[u("div",{className:"domSetting_subBlock_title",children:"\u97F3\u4E50\u4E91\u76D8\u8BBE\u7F6E\uFF1A"}),u(n,{list:[["\u672C\u5730\u97F3\u4E50\u6DFB\u52A0\u5230\u6B4C\u5355\u540E\uFF0C\u8BB2\u6587\u4EF6\u4E0A\u4F20\u81F3\u4E91\u76D8\uFF0C\u53EF\u591A\u7AEF\u540C\u6B65\u6B4C\u5355\uFF0C\u64AD\u653E\u4E0B\u8F7D",!1]],name:"\u97F3\u4E50\u4E91\u76D8\u8BBE\u7F6E"})]})]}),q=c.exports.memo(K),J=()=>e(d,{children:[u("div",{className:"domSetting_block_title",children:"\u5173\u4E8E\u7F51\u6613\u4E91\u97F3\u4E50"}),u("br",{}),e("div",{children:["\u5F53\u524D\u7248\u672C\u2026\u2026"," ",u("button",{type:"button",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full",children:"\u68C0\u6D4B\u66F4\u65B0"})]}),u("div",{className:"domSetting_subBlock",children:u(a,{name:"\u66F4\u65B0",list:["\u81EA\u52A8\u66F4\u65B0","\u6709\u65B0\u7248\u672C\u65F6\u63D0\u9192\u6211"],checked:"\u81EA\u52A8\u66F4\u65B0"})}),u("br",{}),e("div",{className:"flex items-center",children:[u("span",{className:"mr-4",children:"\u4E0B\u8F7D\u79FB\u52A8\u5BA2\u6237\u7AEF"}),e("a",{href:"https://itunes.apple.com/cn/app/wang-yi-yun-yin-le/id590338362?l=ch",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4",children:[u(E,{size:16,className:"fill-current"}),"iPhone\u7248"]}),e("a",{href:"https://itunes.apple.com/cn/app/wang-yi-yun-yin-lehd/id871041757?l=ch",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4",children:[u(E,{size:16,className:"fill-current"}),"iPad\u7248"]}),e("a",{href:"https://music.163.com/#/download",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4",children:[u(E,{size:16,className:"fill-current"}),"iPhone\u7248"]}),e("a",{href:"http://www.windowsphone.com/s?appid=db9dbdaa-464e-4370-a078-800fc7983d39",className:"ui_btn inline-flex items-center justify-center border px-3 h-8 rounded-full_small inline-flex items-center justify-center h-6 px-3 rounded-full mr-4",children:[u(E,{size:16,className:"fill-current"}),"iPhone\u7248"]})]}),e("div",{className:"pt-8 pb-7 flex gap-2",children:[u("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black",children:"\u300A\u7F51\u6613\u4E91\u97F3\u4E50\u5B98\u7F51\u300B"}),u("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black",children:"\u300A\u7F51\u6613\u4E91\u97F3\u4E50\u793E\u533A\u7BA1\u7406\u7EC6\u5219\u300B"}),u("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black",children:"\u300A\u670D\u52A1\u6761\u6B3E\u300B"}),u("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black",children:"\u300A\u9690\u79C1\u653F\u7B56\u300B"}),u("a",{href:"https://music.163.com",className:"underline text-gray-600 hover:text-black",children:"\u300A\u513F\u7AE5\u9690\u79C1\u653F\u7B56\u300B"})]})]}),Q=c.exports.memo(J),g=["\u8D26\u53F7","\u5E38\u89C4","\u64AD\u653E","\u6D88\u606F\u4E0E\u9690\u79C1","\u5FEB\u6377\u952E","\u4E0B\u8F7D\u8BBE\u7F6E","\u6B4C\u8BCD","\u5DE5\u5177","\u5173\u4E8E\u7F51\u6613\u4E91\u97F3\u4E50"],Y=[w,R,V,O,z,U,X,q,Q],Z=g.map((t,l)=>[t,Y[l]]),uu=[["inherit","\u9ED8\u8BA4"],["\u4EFF\u5B8B","\u4EFF\u5B8B"],["\u5B8B\u4F53","\u5B8B\u4F53"],["\u5FAE\u8F6F\u96C5\u9ED1","\u5FAE\u8F6F\u96C5\u9ED1"],["\u5FAE\u8F6F\u96C5\u9ED1 Light","\u5FAE\u8F6F\u96C5\u9ED1 Light"],["\u65B0\u5B8B\u4F53","\u65B0\u5B8B\u4F53"],["\u65B9\u6B63\u5170\u4EAD\u8D85\u7EC6\u9ED1\u7B80\u4F53","\u65B9\u6B63\u5170\u4EAD\u8D85\u7EC6\u9ED1\u7B80\u4F53"],["\u65B9\u6B63\u7C97\u9ED1\u5B8B\u7B80\u4F53","\u65B9\u6B63\u7C97\u9ED1\u5B8B\u7B80\u4F53"],["\u6977\u4F53","\u6977\u4F53"],["\u7B49\u7EBF","\u7B49\u7EBF"],["\u7B49\u7EBF Light","\u7B49\u7EBF Light"],["\u9ED1\u4F53","\u9ED1\u4F53"]],eu=()=>e("div",{className:"domSetting flex flex-col h-full",children:[e("div",{className:"px-8 py-5",children:[u("div",{className:"h1",children:"\u8BBE\u7F6E"}),u("div",{className:"mt-8 flex gap-4",children:g.map(t=>u("a",{href:`#${t}`,children:t},t))})]}),u("div",{className:"px-8 overflow-auto max-h-full flex-auto",children:Z.map(([t,l])=>u("div",{id:t,className:"pb-8 mb-8 border-b",children:u(l,{})},t))})]}),tu=c.exports.memo(eu),lu=()=>u(v,{children:u(k,{index:!0,element:u(tu,{})})}),Du=lu;export{Du as default};
