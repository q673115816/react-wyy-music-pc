/*! For license information please see qrcode.js.LICENSE.txt */
"use strict";(this.webpackChunk_wyy_web=this.webpackChunk_wyy_web||[]).push([[487],{5446:(t,e,n)=>{n.d(e,{ZP:()=>N});var o,r=n(7363),i=n.n(r),s=Object.defineProperty,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?s(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))a.call(e,n)&&u(t,n,e[n]);if(l)for(var n of l(e))h.call(e,n)&&u(t,n,e[n]);return t},d=(t,e)=>{var n={};for(var o in t)a.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&l)for(var o of l(t))e.indexOf(o)<0&&h.call(t,o)&&(n[o]=t[o]);return n};(t=>{const e=class{constructor(t,n,o,r){if(this.version=t,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],t<e.MIN_VERSION||t>e.MAX_VERSION)throw"Version value out of range";if(r<-1||r>7)throw"Mask value out of range";this.size=4*t+17;let s=[];for(let t=0;t<this.size;t++)s.push(!1);for(let t=0;t<this.size;t++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();const l=this.addEccAndInterleave(o);if(this.drawCodewords(l),-1==r){let t=1e9;for(let e=0;e<8;e++){this.applyMask(e),this.drawFormatBits(e);const n=this.getPenaltyScore();n<t&&(r=e,t=n),this.applyMask(e)}}i(0<=r&&r<=7),this.mask=r,this.applyMask(r),this.drawFormatBits(r),this.isFunction=[]}static encodeText(n,o){const r=t.QrSegment.makeSegments(n);return e.encodeSegments(r,o)}static encodeBinary(n,o){const r=t.QrSegment.makeBytes(n);return e.encodeSegments([r],o)}static encodeSegments(t,n,r=1,s=40,a=-1,h=!0){if(!(e.MIN_VERSION<=r&&r<=s&&s<=e.MAX_VERSION)||a<-1||a>7)throw"Invalid value";let u,c;for(u=r;;u++){const o=8*e.getNumDataCodewords(u,n),r=l.getTotalBits(t,u);if(r<=o){c=r;break}if(u>=s)throw"Data too long"}for(const t of[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH])h&&c<=8*e.getNumDataCodewords(u,t)&&(n=t);let d=[];for(const e of t){o(e.mode.modeBits,4,d),o(e.numChars,e.mode.numCharCountBits(u),d);for(const t of e.getData())d.push(t)}i(d.length==c);const f=8*e.getNumDataCodewords(u,n);i(d.length<=f),o(0,Math.min(4,f-d.length),d),o(0,(8-d.length%8)%8,d),i(d.length%8==0);for(let t=236;d.length<f;t^=253)o(t,8,d);let m=[];for(;8*m.length<d.length;)m.push(0);return d.forEach(((t,e)=>m[e>>>3]|=t<<7-(7&e))),new e(u,n,m,a)}getModule(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]}getModules(){return this.modules}drawFunctionPatterns(){for(let t=0;t<this.size;t++)this.setFunctionModule(6,t,t%2==0),this.setFunctionModule(t,6,t%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);const t=this.getAlignmentPatternPositions(),e=t.length;for(let n=0;n<e;n++)for(let o=0;o<e;o++)0==n&&0==o||0==n&&o==e-1||n==e-1&&0==o||this.drawAlignmentPattern(t[n],t[o]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(t){const e=this.errorCorrectionLevel.formatBits<<3|t;let n=e;for(let t=0;t<10;t++)n=n<<1^1335*(n>>>9);const o=21522^(e<<10|n);i(o>>>15==0);for(let t=0;t<=5;t++)this.setFunctionModule(8,t,r(o,t));this.setFunctionModule(8,7,r(o,6)),this.setFunctionModule(8,8,r(o,7)),this.setFunctionModule(7,8,r(o,8));for(let t=9;t<15;t++)this.setFunctionModule(14-t,8,r(o,t));for(let t=0;t<8;t++)this.setFunctionModule(this.size-1-t,8,r(o,t));for(let t=8;t<15;t++)this.setFunctionModule(8,this.size-15+t,r(o,t));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let t=this.version;for(let e=0;e<12;e++)t=t<<1^7973*(t>>>11);const e=this.version<<12|t;i(e>>>18==0);for(let t=0;t<18;t++){const n=r(e,t),o=this.size-11+t%3,i=Math.floor(t/3);this.setFunctionModule(o,i,n),this.setFunctionModule(i,o,n)}}drawFinderPattern(t,e){for(let n=-4;n<=4;n++)for(let o=-4;o<=4;o++){const r=Math.max(Math.abs(o),Math.abs(n)),i=t+o,s=e+n;0<=i&&i<this.size&&0<=s&&s<this.size&&this.setFunctionModule(i,s,2!=r&&4!=r)}}drawAlignmentPattern(t,e){for(let n=-2;n<=2;n++)for(let o=-2;o<=2;o++)this.setFunctionModule(t+o,e+n,1!=Math.max(Math.abs(o),Math.abs(n)))}setFunctionModule(t,e,n){this.modules[e][t]=n,this.isFunction[e][t]=!0}addEccAndInterleave(t){const n=this.version,o=this.errorCorrectionLevel;if(t.length!=e.getNumDataCodewords(n,o))throw"Invalid argument";const r=e.NUM_ERROR_CORRECTION_BLOCKS[o.ordinal][n],s=e.ECC_CODEWORDS_PER_BLOCK[o.ordinal][n],l=Math.floor(e.getNumRawDataModules(n)/8),a=r-l%r,h=Math.floor(l/r);let u=[];const c=e.reedSolomonComputeDivisor(s);for(let n=0,o=0;n<r;n++){let r=t.slice(o,o+h-s+(n<a?0:1));o+=r.length;const i=e.reedSolomonComputeRemainder(r,c);n<a&&r.push(0),u.push(r.concat(i))}let d=[];for(let t=0;t<u[0].length;t++)u.forEach(((e,n)=>{(t!=h-s||n>=a)&&d.push(e[t])}));return i(d.length==l),d}drawCodewords(t){if(t.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw"Invalid argument";let n=0;for(let e=this.size-1;e>=1;e-=2){6==e&&(e=5);for(let o=0;o<this.size;o++)for(let i=0;i<2;i++){const s=e-i,l=0==(e+1&2)?this.size-1-o:o;!this.isFunction[l][s]&&n<8*t.length&&(this.modules[l][s]=r(t[n>>>3],7-(7&n)),n++)}}i(n==8*t.length)}applyMask(t){if(t<0||t>7)throw"Mask value out of range";for(let e=0;e<this.size;e++)for(let n=0;n<this.size;n++){let o;switch(t){case 0:o=(n+e)%2==0;break;case 1:o=e%2==0;break;case 2:o=n%3==0;break;case 3:o=(n+e)%3==0;break;case 4:o=(Math.floor(n/3)+Math.floor(e/2))%2==0;break;case 5:o=n*e%2+n*e%3==0;break;case 6:o=(n*e%2+n*e%3)%2==0;break;case 7:o=((n+e)%2+n*e%3)%2==0;break;default:throw"Unreachable"}!this.isFunction[e][n]&&o&&(this.modules[e][n]=!this.modules[e][n])}}getPenaltyScore(){let t=0;for(let n=0;n<this.size;n++){let o=!1,r=0,i=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[n][s]==o?(r++,5==r?t+=e.PENALTY_N1:r>5&&t++):(this.finderPenaltyAddHistory(r,i),o||(t+=this.finderPenaltyCountPatterns(i)*e.PENALTY_N3),o=this.modules[n][s],r=1);t+=this.finderPenaltyTerminateAndCount(o,r,i)*e.PENALTY_N3}for(let n=0;n<this.size;n++){let o=!1,r=0,i=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[s][n]==o?(r++,5==r?t+=e.PENALTY_N1:r>5&&t++):(this.finderPenaltyAddHistory(r,i),o||(t+=this.finderPenaltyCountPatterns(i)*e.PENALTY_N3),o=this.modules[s][n],r=1);t+=this.finderPenaltyTerminateAndCount(o,r,i)*e.PENALTY_N3}for(let n=0;n<this.size-1;n++)for(let o=0;o<this.size-1;o++){const r=this.modules[n][o];r==this.modules[n][o+1]&&r==this.modules[n+1][o]&&r==this.modules[n+1][o+1]&&(t+=e.PENALTY_N2)}let n=0;for(const t of this.modules)n=t.reduce(((t,e)=>t+(e?1:0)),n);const o=this.size*this.size,r=Math.ceil(Math.abs(20*n-10*o)/o)-1;return i(0<=r&&r<=9),t+=r*e.PENALTY_N4,i(0<=t&&t<=2568888),t}getAlignmentPatternPositions(){if(1==this.version)return[];{const t=Math.floor(this.version/7)+2,e=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*t-2));let n=[6];for(let o=this.size-7;n.length<t;o-=e)n.splice(1,0,o);return n}}static getNumRawDataModules(t){if(t<e.MIN_VERSION||t>e.MAX_VERSION)throw"Version number out of range";let n=(16*t+128)*t+64;if(t>=2){const e=Math.floor(t/7)+2;n-=(25*e-10)*e-55,t>=7&&(n-=36)}return i(208<=n&&n<=29648),n}static getNumDataCodewords(t,n){return Math.floor(e.getNumRawDataModules(t)/8)-e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t]*e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]}static reedSolomonComputeDivisor(t){if(t<1||t>255)throw"Degree out of range";let n=[];for(let e=0;e<t-1;e++)n.push(0);n.push(1);let o=1;for(let r=0;r<t;r++){for(let t=0;t<n.length;t++)n[t]=e.reedSolomonMultiply(n[t],o),t+1<n.length&&(n[t]^=n[t+1]);o=e.reedSolomonMultiply(o,2)}return n}static reedSolomonComputeRemainder(t,n){let o=n.map((t=>0));for(const r of t){const t=r^o.shift();o.push(0),n.forEach(((n,r)=>o[r]^=e.reedSolomonMultiply(n,t)))}return o}static reedSolomonMultiply(t,e){if(t>>>8!=0||e>>>8!=0)throw"Byte out of range";let n=0;for(let o=7;o>=0;o--)n=n<<1^285*(n>>>7),n^=(e>>>o&1)*t;return i(n>>>8==0),n}finderPenaltyCountPatterns(t){const e=t[1];i(e<=3*this.size);const n=e>0&&t[2]==e&&t[3]==3*e&&t[4]==e&&t[5]==e;return(n&&t[0]>=4*e&&t[6]>=e?1:0)+(n&&t[6]>=4*e&&t[0]>=e?1:0)}finderPenaltyTerminateAndCount(t,e,n){return t&&(this.finderPenaltyAddHistory(e,n),e=0),e+=this.size,this.finderPenaltyAddHistory(e,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(t,e){0==e[0]&&(t+=this.size),e.pop(),e.unshift(t)}};let n=e;function o(t,e,n){if(e<0||e>31||t>>>e!=0)throw"Value out of range";for(let o=e-1;o>=0;o--)n.push(t>>>o&1)}function r(t,e){return 0!=(t>>>e&1)}function i(t){if(!t)throw"Assertion error"}n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],t.QrCode=n;const s=class{constructor(t,e,n){if(this.mode=t,this.numChars=e,this.bitData=n,e<0)throw"Invalid argument";this.bitData=n.slice()}static makeBytes(t){let e=[];for(const n of t)o(n,8,e);return new s(s.Mode.BYTE,t.length,e)}static makeNumeric(t){if(!s.isNumeric(t))throw"String contains non-numeric characters";let e=[];for(let n=0;n<t.length;){const r=Math.min(t.length-n,3);o(parseInt(t.substr(n,r),10),3*r+1,e),n+=r}return new s(s.Mode.NUMERIC,t.length,e)}static makeAlphanumeric(t){if(!s.isAlphanumeric(t))throw"String contains unencodable characters in alphanumeric mode";let e,n=[];for(e=0;e+2<=t.length;e+=2){let r=45*s.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e));r+=s.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e+1)),o(r,11,n)}return e<t.length&&o(s.ALPHANUMERIC_CHARSET.indexOf(t.charAt(e)),6,n),new s(s.Mode.ALPHANUMERIC,t.length,n)}static makeSegments(t){return""==t?[]:s.isNumeric(t)?[s.makeNumeric(t)]:s.isAlphanumeric(t)?[s.makeAlphanumeric(t)]:[s.makeBytes(s.toUtf8ByteArray(t))]}static makeEci(t){let e=[];if(t<0)throw"ECI assignment value out of range";if(t<128)o(t,8,e);else if(t<16384)o(2,2,e),o(t,14,e);else{if(!(t<1e6))throw"ECI assignment value out of range";o(6,3,e),o(t,21,e)}return new s(s.Mode.ECI,0,e)}static isNumeric(t){return s.NUMERIC_REGEX.test(t)}static isAlphanumeric(t){return s.ALPHANUMERIC_REGEX.test(t)}getData(){return this.bitData.slice()}static getTotalBits(t,e){let n=0;for(const o of t){const t=o.mode.numCharCountBits(e);if(o.numChars>=1<<t)return 1/0;n+=4+t+o.bitData.length}return n}static toUtf8ByteArray(t){t=encodeURI(t);let e=[];for(let n=0;n<t.length;n++)"%"!=t.charAt(n)?e.push(t.charCodeAt(n)):(e.push(parseInt(t.substr(n+1,2),16)),n+=2);return e}};let l=s;l.NUMERIC_REGEX=/^[0-9]*$/,l.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,l.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t.QrSegment=l})(o||(o={})),(t=>{let e;(t=>{const e=class{constructor(t,e){this.ordinal=t,this.formatBits=e}};let n=e;n.LOW=new e(0,1),n.MEDIUM=new e(1,0),n.QUARTILE=new e(2,3),n.HIGH=new e(3,2),t.Ecc=n})(e=t.QrCode||(t.QrCode={}))})(o||(o={})),(t=>{let e;(t=>{const e=class{constructor(t,e){this.modeBits=t,this.numBitsCharCount=e}numCharCountBits(t){return this.numBitsCharCount[Math.floor((t+7)/17)]}};let n=e;n.NUMERIC=new e(1,[10,12,14]),n.ALPHANUMERIC=new e(2,[9,11,13]),n.BYTE=new e(4,[8,16,16]),n.KANJI=new e(8,[8,10,12]),n.ECI=new e(7,[0,0,0]),t.Mode=n})(e=t.QrSegment||(t.QrSegment={}))})(o||(o={}));var f=o,m={L:f.QrCode.Ecc.LOW,M:f.QrCode.Ecc.MEDIUM,Q:f.QrCode.Ecc.QUARTILE,H:f.QrCode.Ecc.HIGH},g={size:128,level:"L",bgColor:"#FFFFFF",fgColor:"#000000",includeMargin:!1};function M(t,e=0){const n=[];return t.forEach((function(t,o){let r=null;t.forEach((function(i,s){if(!i&&null!==r)return n.push(`M${r+e} ${o+e}h${s-r}v1H${r+e}z`),void(r=null);if(s!==t.length-1)i&&null===r&&(r=s);else{if(!i)return;null===r?n.push(`M${s+e},${o+e} h1v1H${s+e}z`):n.push(`M${r+e},${o+e} h${s+1-r}v1H${r+e}z`)}}))})),n.join("")}function C(t,e){return t.slice().map(((t,n)=>n<e.y||n>=e.y+e.h?t:t.map(((t,n)=>(n<e.x||n>=e.x+e.w)&&t))))}function E(t,e){const{imageSettings:n,size:o,includeMargin:r}=t;if(null==n)return null;const i=r?4:0,s=e.length+2*i,l=Math.floor(.1*o),a=s/o,h=(n.width||l)*a,u=(n.height||l)*a,c=null==n.x?e.length/2-h/2:n.x*a,d=null==n.y?e.length/2-u/2:n.y*a;let f=null;if(n.excavate){let t=Math.floor(c),e=Math.floor(d);f={x:t,y:e,w:Math.ceil(h+c-t),h:Math.ceil(u+d-e)}}return{x:c,y:d,h:u,w:h,excavation:f}}var w=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return!1}return!0}();function A(t){const e=(0,r.useRef)(null),n=(0,r.useRef)(null);function o(){const{value:o,size:r,level:i,bgColor:s,fgColor:l,includeMargin:a}=t;if(null!=e.current){const h=e.current,u=h.getContext("2d");if(!u)return;let c=f.QrCode.encodeText(o,m[i]).getModules();const d=a?4:0,g=c.length+2*d,A=E(t,c),p=n.current,N=null!=A&&null!==p&&p.complete&&0!==p.naturalHeight&&0!==p.naturalWidth;N&&null!=A.excavation&&(c=C(c,A.excavation));const v=window.devicePixelRatio||1;h.height=h.width=r*v;const R=r/g*v;u.scale(R,R),u.fillStyle=s,u.fillRect(0,0,g,g),u.fillStyle=l,w?u.fill(new Path2D(M(c,d))):c.forEach((function(t,e){t.forEach((function(t,n){t&&u.fillRect(n+d,e+d,1,1)}))})),N&&u.drawImage(p,A.x+d,A.y+d,A.w,A.h)}}(0,r.useEffect)((()=>{o()}));const s=t,{value:l,size:a,level:h,bgColor:u,fgColor:g,style:A,includeMargin:p,imageSettings:N}=s,v=d(s,["value","size","level","bgColor","fgColor","style","includeMargin","imageSettings"]),R=c({height:a,width:a},A);let P=null,y=null==N?void 0:N.src;return null!=y&&(P=i().createElement("img",{src:y,key:y,style:{display:"none"},onLoad:()=>{o()},ref:n})),i().createElement(i().Fragment,null,i().createElement("canvas",c({style:R,height:a,width:a,ref:e},v)),P)}function p(t){const e=t,{value:n,size:o,level:r,bgColor:s,fgColor:l,includeMargin:a,imageSettings:h}=e,u=d(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]);let g=f.QrCode.encodeText(n,m[r]).getModules();const w=a?4:0,A=g.length+2*w,p=E(t,g);let N=null;null!=h&&null!=p&&(null!=p.excavation&&(g=C(g,p.excavation)),N=i().createElement("image",{xlinkHref:h.src,height:p.h,width:p.w,x:p.x+w,y:p.y+w,preserveAspectRatio:"none"}));const v=M(g,w);return i().createElement("svg",c({shapeRendering:"crispEdges",height:o,width:o,viewBox:`0 0 ${A} ${A}`},u),i().createElement("path",{fill:s,d:`M0,0 h${A}v${A}H0z`}),i().createElement("path",{fill:l,d:v}),N)}A.defaultProps=g,p.defaultProps=g;var N=t=>{const e=t,{renderAs:n}=e,o=d(e,["renderAs"]),r="svg"===n?p:A;return i().createElement(r,c({},o))};N.defaultProps=c({renderAs:"canvas"},g)}}]);
//# sourceMappingURL=qrcode.js.map?version=07a0046a