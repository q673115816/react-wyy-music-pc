import{a as m}from"./classnames.9558900f.js";import{r as e}from"./react.0a2f695e.js";import{j as R}from"./qrcode.react.84002e4a.js";const p=({children:r,className:o="",small:c="",big:n=""})=>{const t=e.exports.useRef(null),s=e.exports.useRef(null),[a,i]=e.exports.useState(0);return e.exports.useEffect(()=>(s.current=new ResizeObserver(u=>{u.forEach(({contentRect:{width:f}})=>{i(f)})}),s.current.observe(t.current),()=>{s.current.disconnect()}),[]),R("div",{className:m(o,a>=810?n:c),ref:t,children:r})},h=e.exports.memo(p);export{h as R};