import{c as m}from"./react-slick.a7487162.js";import{r as e}from"./react.4f2eb426.js";import{j as R}from"./qrcode.react.d8dda151.js";const p=({children:r,className:o="",small:c="",big:n=""})=>{const t=e.exports.useRef(null),s=e.exports.useRef(null),[i,u]=e.exports.useState(0);return e.exports.useEffect(()=>(s.current=new ResizeObserver(a=>{a.forEach(({contentRect:{width:f}})=>{u(f)})}),s.current.observe(t.current),()=>{s.current.disconnect()}),[]),R("div",{className:m(o,i>=810?n:c),ref:t,children:r})},h=e.exports.memo(p);export{h as R};