import{r as m}from"./react.0a2f695e.js";import{u as e,F as p,aW as n}from"./index.a14e8238.js";import{j as t}from"./qrcode.react.84002e4a.js";import{g as c,N as u,h as d,i as h}from"./react-router.8807b3c5.js";import"./lodash.f41ef0b4.js";import"./react-dom.d348259d.js";import"./react-redux.7ec13431.js";import"./immer.76e704b2.js";import"./react-router-dom.e3e78f4f.js";import"./redux-persist.c3a378af.js";import"./axios.556b107a.js";import"./@tabler/icons.cc549a81.js";import"./classnames.9558900f.js";import"./rxjs.6644997a.js";import"./react-use.cc42aba6.js";import"./react-transition-group.5a807b1e.js";import"./color.a5f8aeb5.js";import"./dayjs.6fdda85a.js";const f=m.exports.memo(function(){const{type:r,id:i}=c(),s=e(),a={music:async()=>{const{songs:[o]}=await p({ids:i});s(n({currentSong:o}))}};return(async o=>await a[o]())(r),t(u,{to:"/"})}),g=()=>t(d,{children:t(h,{path:":type/:id",element:t(f,{})})}),z=g;export{z as default};