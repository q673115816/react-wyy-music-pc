"use strict";(this.webpackChunkwyy=this.webpackChunkwyy||[]).push([[7051],{77130:(e,t,r)=>{r.r(t);var u=r(29604);Object.defineProperty(t,"__esModule",{value:!0}),r(41539),r(39714);var n=r(87363),a=(0,u.Z)(n),c=r(21624),o=r(94184),l=(0,u.Z)(o),i=r(16719),s=r(93011);r(77759),exports.default=(0,n.memo)((function(){var e=(0,c.useSelector)((function(e){return e.mask})).toastTitle,t=(0,n.useRef)(1500),r=(0,n.useRef)(),u=(0,n.useRef)(),o=(0,c.useDispatch)(),f=function e(){t.current<=0||(t.current-=Date.now()-u.current,u.current=Date.now(),requestAnimationFrame(e))};return(0,n.useEffect)((function(){if(null==e||!e.toString())return!1;t.current=1500,f(),clearTimeout(r.current),r.current=setTimeout((function(){o((0,s.setToast)(""))}),1500)}),[e]),null!=e&&e.toString()?a.default.createElement("div",{id:"toast",className:(0,l.default)("absolute z-50 whitespace-nowrap px-4 inset-0 m-auto flex-center rounded-lg bg-black bg-opacity-80 text-gray-200 text-lg")},a.default.createElement(i.IconCircleCheck,{size:24})," ",null==e?void 0:e.toString()):null}))},81732:(e,t,r)=>{r.r(t);var u=r(29604);Object.defineProperty(t,"__esModule",{value:!0});var n=r(77130);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return(0,u.Z)(n).default}})},77759:(e,t,r)=>{r.r(t)}}]);