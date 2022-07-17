import{r as N}from"./react.4f2eb426.js";var L={exports:{}},b={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rt=N.exports,nt=Symbol.for("react.element"),ot=Symbol.for("react.fragment"),st=Object.prototype.hasOwnProperty,it=rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lt={key:!0,ref:!0,__self:!0,__source:!0};function x(h,o,l){var i,m={},u=null,f=null;l!==void 0&&(u=""+l),o.key!==void 0&&(u=""+o.key),o.ref!==void 0&&(f=o.ref);for(i in o)st.call(o,i)&&!lt.hasOwnProperty(i)&&(m[i]=o[i]);if(h&&h.defaultProps)for(i in o=h.defaultProps,o)m[i]===void 0&&(m[i]=o[i]);return{$$typeof:nt,type:h,key:u,ref:f,props:m,_owner:it.current}}b.Fragment=ot;b.jsx=x;b.jsxs=x;(function(h){h.exports=b})(L);const at=L.exports.Fragment,A=L.exports.jsx,Q=L.exports.jsxs;var ct=Object.defineProperty,O=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,U=(h,o,l)=>o in h?ct(h,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):h[o]=l,S=(h,o)=>{for(var l in o||(o={}))k.call(o,l)&&U(h,l,o[l]);if(O)for(var l of O(o))H.call(o,l)&&U(h,l,o[l]);return h},F=(h,o)=>{var l={};for(var i in h)k.call(h,i)&&o.indexOf(i)<0&&(l[i]=h[i]);if(h!=null&&O)for(var i of O(h))o.indexOf(i)<0&&H.call(h,i)&&(l[i]=h[i]);return l},P;(h=>{const o=class{constructor(t,e,r,n){if(this.version=t,this.errorCorrectionLevel=e,this.modules=[],this.isFunction=[],t<o.MIN_VERSION||t>o.MAX_VERSION)throw new RangeError("Version value out of range");if(n<-1||n>7)throw new RangeError("Mask value out of range");this.size=t*4+17;let s=[];for(let a=0;a<this.size;a++)s.push(!1);for(let a=0;a<this.size;a++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();const c=this.addEccAndInterleave(r);if(this.drawCodewords(c),n==-1){let a=1e9;for(let g=0;g<8;g++){this.applyMask(g),this.drawFormatBits(g);const d=this.getPenaltyScore();d<a&&(n=g,a=d),this.applyMask(g)}}u(0<=n&&n<=7),this.mask=n,this.applyMask(n),this.drawFormatBits(n),this.isFunction=[]}static encodeText(t,e){const r=h.QrSegment.makeSegments(t);return o.encodeSegments(r,e)}static encodeBinary(t,e){const r=h.QrSegment.makeBytes(t);return o.encodeSegments([r],e)}static encodeSegments(t,e,r=1,n=40,s=-1,c=!0){if(!(o.MIN_VERSION<=r&&r<=n&&n<=o.MAX_VERSION)||s<-1||s>7)throw new RangeError("Invalid value");let a,g;for(a=r;;a++){const E=o.getNumDataCodewords(a,e)*8,w=C.getTotalBits(t,a);if(w<=E){g=w;break}if(a>=n)throw new RangeError("Data too long")}for(const E of[o.Ecc.MEDIUM,o.Ecc.QUARTILE,o.Ecc.HIGH])c&&g<=o.getNumDataCodewords(a,E)*8&&(e=E);let d=[];for(const E of t){i(E.mode.modeBits,4,d),i(E.numChars,E.mode.numCharCountBits(a),d);for(const w of E.getData())d.push(w)}u(d.length==g);const R=o.getNumDataCodewords(a,e)*8;u(d.length<=R),i(0,Math.min(4,R-d.length),d),i(0,(8-d.length%8)%8,d),u(d.length%8==0);for(let E=236;d.length<R;E^=253)i(E,8,d);let p=[];for(;p.length*8<d.length;)p.push(0);return d.forEach((E,w)=>p[w>>>3]|=E<<7-(w&7)),new o(a,e,p,s)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let r=0;r<this.size;r++)this.setFunctionModule(6,r,r%2==0),this.setFunctionModule(r,6,r%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let r=0;r<e;r++)for(let n=0;n<e;n++)r==0&&n==0||r==0&&n==e-1||r==e-1&&n==0||this.drawAlignmentPattern(t[r],t[n]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let r=e;for(let s=0;s<10;s++)r=r<<1^(r>>>9)*1335;const n=(e<<10|r)^21522;u(n>>>15==0);for(let s=0;s<=5;s++)this.setFunctionModule(8,s,m(n,s));this.setFunctionModule(8,7,m(n,6)),this.setFunctionModule(8,8,m(n,7)),this.setFunctionModule(7,8,m(n,8));for(let s=9;s<15;s++)this.setFunctionModule(14-s,8,m(n,s));for(let s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,m(n,s));for(let s=8;s<15;s++)this.setFunctionModule(8,this.size-15+s,m(n,s));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let r=0;r<12;r++)t=t<<1^(t>>>11)*7973;const e=this.version<<12|t;u(e>>>18==0);for(let r=0;r<18;r++){const n=m(e,r),s=this.size-11+r%3,c=Math.floor(r/3);this.setFunctionModule(s,c,n),this.setFunctionModule(c,s,n)}}drawFinderPattern(t,e){for(let r=-4;r<=4;r++)for(let n=-4;n<=4;n++){const s=Math.max(Math.abs(n),Math.abs(r)),c=t+n,a=e+r;0<=c&&c<this.size&&0<=a&&a<this.size&&this.setFunctionModule(c,a,s!=2&&s!=4)}}drawAlignmentPattern(t,e){for(let r=-2;r<=2;r++)for(let n=-2;n<=2;n++)this.setFunctionModule(t+n,e+r,Math.max(Math.abs(n),Math.abs(r))!=1)}setFunctionModule(t,e,r){this.modules[e][t]=r,this.isFunction[e][t]=!0}addEccAndInterleave(t){const e=this.version,r=this.errorCorrectionLevel;if(t.length!=o.getNumDataCodewords(e,r))throw new RangeError("Invalid argument");const n=o.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e],s=o.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e],c=Math.floor(o.getNumRawDataModules(e)/8),a=n-c%n,g=Math.floor(c/n);let d=[];const R=o.reedSolomonComputeDivisor(s);for(let E=0,w=0;E<n;E++){let M=t.slice(w,w+g-s+(E<a?0:1));w+=M.length;const I=o.reedSolomonComputeRemainder(M,R);E<a&&M.push(0),d.push(M.concat(I))}let p=[];for(let E=0;E<d[0].length;E++)d.forEach((w,M)=>{(E!=g-s||M>=a)&&p.push(w[E])});return u(p.length==c),p}drawCodewords(t){if(t.length!=Math.floor(o.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");let e=0;for(let r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(let n=0;n<this.size;n++)for(let s=0;s<2;s++){const c=r-s,g=(r+1&2)==0?this.size-1-n:n;!this.isFunction[g][c]&&e<t.length*8&&(this.modules[g][c]=m(t[e>>>3],7-(e&7)),e++)}}u(e==t.length*8)}applyMask(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(let e=0;e<this.size;e++)for(let r=0;r<this.size;r++){let n;switch(t){case 0:n=(r+e)%2==0;break;case 1:n=e%2==0;break;case 2:n=r%3==0;break;case 3:n=(r+e)%3==0;break;case 4:n=(Math.floor(r/3)+Math.floor(e/2))%2==0;break;case 5:n=r*e%2+r*e%3==0;break;case 6:n=(r*e%2+r*e%3)%2==0;break;case 7:n=((r+e)%2+r*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][r]&&n&&(this.modules[e][r]=!this.modules[e][r])}}getPenaltyScore(){let t=0;for(let s=0;s<this.size;s++){let c=!1,a=0,g=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[s][d]==c?(a++,a==5?t+=o.PENALTY_N1:a>5&&t++):(this.finderPenaltyAddHistory(a,g),c||(t+=this.finderPenaltyCountPatterns(g)*o.PENALTY_N3),c=this.modules[s][d],a=1);t+=this.finderPenaltyTerminateAndCount(c,a,g)*o.PENALTY_N3}for(let s=0;s<this.size;s++){let c=!1,a=0,g=[0,0,0,0,0,0,0];for(let d=0;d<this.size;d++)this.modules[d][s]==c?(a++,a==5?t+=o.PENALTY_N1:a>5&&t++):(this.finderPenaltyAddHistory(a,g),c||(t+=this.finderPenaltyCountPatterns(g)*o.PENALTY_N3),c=this.modules[d][s],a=1);t+=this.finderPenaltyTerminateAndCount(c,a,g)*o.PENALTY_N3}for(let s=0;s<this.size-1;s++)for(let c=0;c<this.size-1;c++){const a=this.modules[s][c];a==this.modules[s][c+1]&&a==this.modules[s+1][c]&&a==this.modules[s+1][c+1]&&(t+=o.PENALTY_N2)}let e=0;for(const s of this.modules)e=s.reduce((c,a)=>c+(a?1:0),e);const r=this.size*this.size,n=Math.ceil(Math.abs(e*20-r*10)/r)-1;return u(0<=n&&n<=9),t+=n*o.PENALTY_N4,u(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(this.version==1)return[];{const t=Math.floor(this.version/7)+2,e=this.version==32?26:Math.ceil((this.version*4+4)/(t*2-2))*2;let r=[6];for(let n=this.size-7;r.length<t;n-=e)r.splice(1,0,n);return r}}static getNumRawDataModules(t){if(t<o.MIN_VERSION||t>o.MAX_VERSION)throw new RangeError("Version number out of range");let e=(16*t+128)*t+64;if(t>=2){const r=Math.floor(t/7)+2;e-=(25*r-10)*r-55,t>=7&&(e-=36)}return u(208<=e&&e<=29648),e}static getNumDataCodewords(t,e){return Math.floor(o.getNumRawDataModules(t)/8)-o.ECC_CODEWORDS_PER_BLOCK[e.ordinal][t]*o.NUM_ERROR_CORRECTION_BLOCKS[e.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw new RangeError("Degree out of range");let e=[];for(let n=0;n<t-1;n++)e.push(0);e.push(1);let r=1;for(let n=0;n<t;n++){for(let s=0;s<e.length;s++)e[s]=o.reedSolomonMultiply(e[s],r),s+1<e.length&&(e[s]^=e[s+1]);r=o.reedSolomonMultiply(r,2)}return e}static reedSolomonComputeRemainder(t,e){let r=e.map(n=>0);for(const n of t){const s=n^r.shift();r.push(0),e.forEach((c,a)=>r[a]^=o.reedSolomonMultiply(c,s))}return r}static reedSolomonMultiply(t,e){if(t>>>8!=0||e>>>8!=0)throw new RangeError("Byte out of range");let r=0;for(let n=7;n>=0;n--)r=r<<1^(r>>>7)*285,r^=(e>>>n&1)*t;return u(r>>>8==0),r}finderPenaltyCountPatterns(t){const e=t[1];u(e<=this.size*3);const r=e>0&&t[2]==e&&t[3]==e*3&&t[4]==e&&t[5]==e;return(r&&t[0]>=e*4&&t[6]>=e?1:0)+(r&&t[6]>=e*4&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,r){return t&&(this.finderPenaltyAddHistory(e,r),e=0),e+=this.size,this.finderPenaltyAddHistory(e,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(t,e){e[0]==0&&(t+=this.size),e.pop(),e.unshift(t)}};let l=o;l.MIN_VERSION=1,l.MAX_VERSION=40,l.PENALTY_N1=3,l.PENALTY_N2=3,l.PENALTY_N3=40,l.PENALTY_N4=10,l.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],l.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],h.QrCode=l;function i(t,e,r){if(e<0||e>31||t>>>e!=0)throw new RangeError("Value out of range");for(let n=e-1;n>=0;n--)r.push(t>>>n&1)}function m(t,e){return(t>>>e&1)!=0}function u(t){if(!t)throw new Error("Assertion error")}const f=class{constructor(t,e,r){if(this.mode=t,this.numChars=e,this.bitData=r,e<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(t){let e=[];for(const r of t)i(r,8,e);return new f(f.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!f.isNumeric(t))throw new RangeError("String contains non-numeric characters");let e=[];for(let r=0;r<t.length;){const n=Math.min(t.length-r,3);i(parseInt(t.substr(r,n),10),n*3+1,e),r+=n}return new f(f.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!f.isAlphanumeric(t))throw new RangeError("String contains unencodable characters in alphanumeric mode");let e=[],r;for(r=0;r+2<=t.length;r+=2){let n=f.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r))*45;n+=f.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r+1)),i(n,11,e)}return r<t.length&&i(f.ALPHANUMERIC_CHARSET.indexOf(t.charAt(r)),6,e),new f(f.Mode.ALPHANUMERIC,t.length,e)}static makeSegments(t){return t==""?[]:f.isNumeric(t)?[f.makeNumeric(t)]:f.isAlphanumeric(t)?[f.makeAlphanumeric(t)]:[f.makeBytes(f.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw new RangeError("ECI assignment value out of range");if(t<1<<7)i(t,8,e);else if(t<1<<14)i(2,2,e),i(t,14,e);else if(t<1e6)i(6,3,e),i(t,21,e);else throw new RangeError("ECI assignment value out of range");return new f(f.Mode.ECI,0,e)}static isNumeric(t){return f.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return f.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let r=0;for(const n of t){const s=n.mode.numCharCountBits(e);if(n.numChars>=1<<s)return 1/0;r+=4+s+n.bitData.length}return r}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let r=0;r<t.length;r++)t.charAt(r)!="%"?e.push(t.charCodeAt(r)):(e.push(parseInt(t.substr(r+1,2),16)),r+=2);return e}};let C=f;C.NUMERIC_REGEX=/^[0-9]*$/,C.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,C.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",h.QrSegment=C})(P||(P={}));(h=>{(o=>{const l=class{constructor(m,u){this.ordinal=m,this.formatBits=u}};let i=l;i.LOW=new l(0,1),i.MEDIUM=new l(1,0),i.QUARTILE=new l(2,3),i.HIGH=new l(3,2),o.Ecc=i})(h.QrCode||(h.QrCode={}))})(P||(P={}));(h=>{(o=>{const l=class{constructor(m,u){this.modeBits=m,this.numBitsCharCount=u}numCharCountBits(m){return this.numBitsCharCount[Math.floor((m+7)/17)]}};let i=l;i.NUMERIC=new l(1,[10,12,14]),i.ALPHANUMERIC=new l(2,[9,11,13]),i.BYTE=new l(4,[8,16,16]),i.KANJI=new l(8,[8,10,12]),i.ECI=new l(7,[0,0,0]),o.Mode=i})(h.QrSegment||(h.QrSegment={}))})(P||(P={}));var v=P;/**
 * @license qrcode.react
 * Copyright (c) Paul O'Shannessy
 * SPDX-License-Identifier: ISC
 */var $={L:v.QrCode.Ecc.LOW,M:v.QrCode.Ecc.MEDIUM,Q:v.QrCode.Ecc.QUARTILE,H:v.QrCode.Ecc.HIGH},Y=128,j="L",G="#FFFFFF",X="#000000",W=!1,T=4,ht=.1;function K(h,o=0){const l=[];return h.forEach(function(i,m){let u=null;i.forEach(function(f,C){if(!f&&u!==null){l.push(`M${u+o} ${m+o}h${C-u}v1H${u+o}z`),u=null;return}if(C===i.length-1){if(!f)return;u===null?l.push(`M${C+o},${m+o} h1v1H${C+o}z`):l.push(`M${u+o},${m+o} h${C+1-u}v1H${u+o}z`);return}f&&u===null&&(u=C)})}),l.join("")}function V(h,o){return h.slice().map((l,i)=>i<o.y||i>=o.y+o.h?l:l.map((m,u)=>u<o.x||u>=o.x+o.w?m:!1))}function Z(h,o,l,i){if(i==null)return null;const m=l?T:0,u=h.length+m*2,f=Math.floor(o*ht),C=u/o,t=(i.width||f)*C,e=(i.height||f)*C,r=i.x==null?h.length/2-t/2:i.x*C,n=i.y==null?h.length/2-e/2:i.y*C;let s=null;if(i.excavate){let c=Math.floor(r),a=Math.floor(n),g=Math.ceil(t+r-c),d=Math.ceil(e+n-a);s={x:c,y:a,w:g,h:d}}return{x:r,y:n,h:e,w:t,excavation:s}}var ut=function(){try{new Path2D().addPath(new Path2D)}catch{return!1}return!0}();function ft(h){const o=h,{value:l,size:i=Y,level:m=j,bgColor:u=G,fgColor:f=X,includeMargin:C=W,style:t,imageSettings:e}=o,r=F(o,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),n=e==null?void 0:e.src,s=N.exports.useRef(null),c=N.exports.useRef(null),[a,g]=N.exports.useState(!1);N.exports.useEffect(()=>{if(s.current!=null){const p=s.current,E=p.getContext("2d");if(!E)return;let w=v.QrCode.encodeText(l,$[m]).getModules();const M=C?T:0,I=w.length+M*2,_=Z(w,i,C,e),y=c.current,B=_!=null&&y!==null&&y.complete&&y.naturalHeight!==0&&y.naturalWidth!==0;B&&_.excavation!=null&&(w=V(w,_.excavation));const D=window.devicePixelRatio||1;p.height=p.width=i*D;const z=i/I*D;E.scale(z,z),E.fillStyle=u,E.fillRect(0,0,I,I),E.fillStyle=f,ut?E.fill(new Path2D(K(w,M))):w.forEach(function(J,q){J.forEach(function(tt,et){tt&&E.fillRect(et+M,q+M,1,1)})}),B&&E.drawImage(y,_.x+M,_.y+M,_.w,_.h)}}),N.exports.useEffect(()=>{g(!1)},[n]);const d=S({height:i,width:i},t);let R=null;return n!=null&&(R=A("img",{src:n,style:{display:"none"},onLoad:()=>{g(!0)},ref:c},n)),Q(at,{children:[A("canvas",{...S({style:d,height:i,width:i,ref:s},r)}),R]})}function dt(h){const o=h,{value:l,size:i=Y,level:m=j,bgColor:u=G,fgColor:f=X,includeMargin:C=W,imageSettings:t}=o,e=F(o,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let r=v.QrCode.encodeText(l,$[m]).getModules();const n=C?T:0,s=r.length+n*2,c=Z(r,i,C,t);let a=null;t!=null&&c!=null&&(c.excavation!=null&&(r=V(r,c.excavation)),a=A("image",{xlinkHref:t.src,height:c.h,width:c.w,x:c.x+n,y:c.y+n,preserveAspectRatio:"none"}));const g=K(r,n);return Q("svg",{...S({height:i,width:i,viewBox:`0 0 ${s} ${s}`},e),children:[A("path",{fill:u,d:`M0,0 h${s}v${s}H0z`,shapeRendering:"crispEdges"}),A("path",{fill:f,d:g,shapeRendering:"crispEdges"}),a]})}var mt=h=>{const o=h,{renderAs:l}=o,i=F(o,["renderAs"]);return l==="svg"?A(dt,{...S({},i)}):A(ft,{...S({},i)})};export{at as F,mt as Q,Q as a,A as j};
