import{c as m}from"./react-slick.9a6761a2.js";import{r as e}from"./react.23cc8478.js";import{j as p}from"./qrcode.react.5dc2fa92.js";var v=({children:t,className:o="",small:c="",big:n=""})=>{const s=e.exports.useRef(),r=e.exports.useRef(),[a,i]=e.exports.useState(0);return e.exports.useEffect(()=>(r.current=new ResizeObserver(u=>{u.forEach(({contentRect:{width:f}})=>{i(f)})}),r.current.observe(s.current),()=>{r.current.disconnect()}),[]),p("div",{className:m(o,a>=810?n:c),ref:s,children:t})};export{v as R};
