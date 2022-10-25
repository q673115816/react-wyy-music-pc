var N={exports:{}},C={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},P={exports:{}},L=function(n){return!n||typeof n=="string"?!1:n instanceof Array||Array.isArray(n)||n.length>=0&&(n.splice instanceof Function||Object.getOwnPropertyDescriptor(n,n.length-1)&&n.constructor.name!=="String")},T=L,j=Array.prototype.concat,B=Array.prototype.slice,E=P.exports=function(n){for(var e=[],r=0,s=n.length;r<s;r++){var a=n[r];T(a)?e=j.call(e,B.call(a)):e.push(a)}return e};E.wrap=function(t){return function(){return t(E(arguments))}};var k=C,M=P.exports,I=Object.hasOwnProperty,U=Object.create(null);for(var A in k)I.call(k,A)&&(U[k[A]]=A);var p=N.exports={to:{},get:{}};p.get=function(t){var n=t.substring(0,3).toLowerCase(),e,r;switch(n){case"hsl":e=p.get.hsl(t),r="hsl";break;case"hwb":e=p.get.hwb(t),r="hwb";break;default:e=p.get.rgb(t),r="rgb";break}return e?{model:r,value:e}:null};p.get.rgb=function(t){if(!t)return null;var n=/^#([a-f0-9]{3,4})$/i,e=/^#([a-f0-9]{6})([a-f0-9]{2})?$/i,r=/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,s=/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/,a=/^(\w+)$/,o=[0,0,0,1],l,c,h;if(l=t.match(e)){for(h=l[2],l=l[1],c=0;c<3;c++){var b=c*2;o[c]=parseInt(l.slice(b,b+2),16)}h&&(o[3]=parseInt(h,16)/255)}else if(l=t.match(n)){for(l=l[1],h=l[3],c=0;c<3;c++)o[c]=parseInt(l[c]+l[c],16);h&&(o[3]=parseInt(h+h,16)/255)}else if(l=t.match(r)){for(c=0;c<3;c++)o[c]=parseInt(l[c+1],0);l[4]&&(l[5]?o[3]=parseFloat(l[4])*.01:o[3]=parseFloat(l[4]))}else if(l=t.match(s)){for(c=0;c<3;c++)o[c]=Math.round(parseFloat(l[c+1])*2.55);l[4]&&(l[5]?o[3]=parseFloat(l[4])*.01:o[3]=parseFloat(l[4]))}else return(l=t.match(a))?l[1]==="transparent"?[0,0,0,0]:I.call(k,l[1])?(o=k[l[1]],o[3]=1,o):null:null;for(c=0;c<3;c++)o[c]=v(o[c],0,255);return o[3]=v(o[3],0,1),o};p.get.hsl=function(t){if(!t)return null;var n=/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,e=t.match(n);if(e){var r=parseFloat(e[4]),s=(parseFloat(e[1])%360+360)%360,a=v(parseFloat(e[2]),0,100),o=v(parseFloat(e[3]),0,100),l=v(isNaN(r)?1:r,0,1);return[s,a,o,l]}return null};p.get.hwb=function(t){if(!t)return null;var n=/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/,e=t.match(n);if(e){var r=parseFloat(e[4]),s=(parseFloat(e[1])%360+360)%360,a=v(parseFloat(e[2]),0,100),o=v(parseFloat(e[3]),0,100),l=v(isNaN(r)?1:r,0,1);return[s,a,o,l]}return null};p.to.hex=function(){var t=M(arguments);return"#"+F(t[0])+F(t[1])+F(t[2])+(t[3]<1?F(Math.round(t[3]*255)):"")};p.to.rgb=function(){var t=M(arguments);return t.length<4||t[3]===1?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"};p.to.rgb.percent=function(){var t=M(arguments),n=Math.round(t[0]/255*100),e=Math.round(t[1]/255*100),r=Math.round(t[2]/255*100);return t.length<4||t[3]===1?"rgb("+n+"%, "+e+"%, "+r+"%)":"rgba("+n+"%, "+e+"%, "+r+"%, "+t[3]+")"};p.to.hsl=function(){var t=M(arguments);return t.length<4||t[3]===1?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"};p.to.hwb=function(){var t=M(arguments),n="";return t.length>=4&&t[3]!==1&&(n=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+n+")"};p.to.keyword=function(t){return U[t.slice(0,3)]};function v(t,n,e){return Math.min(Math.max(n,t),e)}function F(t){var n=Math.round(t).toString(16).toUpperCase();return n.length<2?"0"+n:n}const x=C,D={};for(const t of Object.keys(x))D[x[t]]=t;const i={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var K=i;for(const t of Object.keys(i)){if(!("channels"in i[t]))throw new Error("missing channels property: "+t);if(!("labels"in i[t]))throw new Error("missing channel labels property: "+t);if(i[t].labels.length!==i[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:n,labels:e}=i[t];delete i[t].channels,delete i[t].labels,Object.defineProperty(i[t],"channels",{value:n}),Object.defineProperty(i[t],"labels",{value:e})}i.rgb.hsl=function(t){const n=t[0]/255,e=t[1]/255,r=t[2]/255,s=Math.min(n,e,r),a=Math.max(n,e,r),o=a-s;let l,c;a===s?l=0:n===a?l=(e-r)/o:e===a?l=2+(r-n)/o:r===a&&(l=4+(n-e)/o),l=Math.min(l*60,360),l<0&&(l+=360);const h=(s+a)/2;return a===s?c=0:h<=.5?c=o/(a+s):c=o/(2-a-s),[l,c*100,h*100]};i.rgb.hsv=function(t){let n,e,r,s,a;const o=t[0]/255,l=t[1]/255,c=t[2]/255,h=Math.max(o,l,c),b=h-Math.min(o,l,c),m=function(J){return(h-J)/6/b+1/2};return b===0?(s=0,a=0):(a=b/h,n=m(o),e=m(l),r=m(c),o===h?s=r-e:l===h?s=1/3+n-r:c===h&&(s=2/3+e-n),s<0?s+=1:s>1&&(s-=1)),[s*360,a*100,h*100]};i.rgb.hwb=function(t){const n=t[0],e=t[1];let r=t[2];const s=i.rgb.hsl(t)[0],a=1/255*Math.min(n,Math.min(e,r));return r=1-1/255*Math.max(n,Math.max(e,r)),[s,a*100,r*100]};i.rgb.cmyk=function(t){const n=t[0]/255,e=t[1]/255,r=t[2]/255,s=Math.min(1-n,1-e,1-r),a=(1-n-s)/(1-s)||0,o=(1-e-s)/(1-s)||0,l=(1-r-s)/(1-s)||0;return[a*100,o*100,l*100,s*100]};function G(t,n){return(t[0]-n[0])**2+(t[1]-n[1])**2+(t[2]-n[2])**2}i.rgb.keyword=function(t){const n=D[t];if(n)return n;let e=1/0,r;for(const s of Object.keys(x)){const a=x[s],o=G(t,a);o<e&&(e=o,r=s)}return r};i.keyword.rgb=function(t){return x[t]};i.rgb.xyz=function(t){let n=t[0]/255,e=t[1]/255,r=t[2]/255;n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const s=n*.4124+e*.3576+r*.1805,a=n*.2126+e*.7152+r*.0722,o=n*.0193+e*.1192+r*.9505;return[s*100,a*100,o*100]};i.rgb.lab=function(t){const n=i.rgb.xyz(t);let e=n[0],r=n[1],s=n[2];e/=95.047,r/=100,s/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,s=s>.008856?s**(1/3):7.787*s+16/116;const a=116*r-16,o=500*(e-r),l=200*(r-s);return[a,o,l]};i.hsl.rgb=function(t){const n=t[0]/360,e=t[1]/100,r=t[2]/100;let s,a,o;if(e===0)return o=r*255,[o,o,o];r<.5?s=r*(1+e):s=r+e-r*e;const l=2*r-s,c=[0,0,0];for(let h=0;h<3;h++)a=n+1/3*-(h-1),a<0&&a++,a>1&&a--,6*a<1?o=l+(s-l)*6*a:2*a<1?o=s:3*a<2?o=l+(s-l)*(2/3-a)*6:o=l,c[h]=o*255;return c};i.hsl.hsv=function(t){const n=t[0];let e=t[1]/100,r=t[2]/100,s=e;const a=Math.max(r,.01);r*=2,e*=r<=1?r:2-r,s*=a<=1?a:2-a;const o=(r+e)/2,l=r===0?2*s/(a+s):2*e/(r+e);return[n,l*100,o*100]};i.hsv.rgb=function(t){const n=t[0]/60,e=t[1]/100;let r=t[2]/100;const s=Math.floor(n)%6,a=n-Math.floor(n),o=255*r*(1-e),l=255*r*(1-e*a),c=255*r*(1-e*(1-a));switch(r*=255,s){case 0:return[r,c,o];case 1:return[l,r,o];case 2:return[o,r,c];case 3:return[o,l,r];case 4:return[c,o,r];case 5:return[r,o,l]}};i.hsv.hsl=function(t){const n=t[0],e=t[1]/100,r=t[2]/100,s=Math.max(r,.01);let a,o;o=(2-e)*r;const l=(2-e)*s;return a=e*s,a/=l<=1?l:2-l,a=a||0,o/=2,[n,a*100,o*100]};i.hwb.rgb=function(t){const n=t[0]/360;let e=t[1]/100,r=t[2]/100;const s=e+r;let a;s>1&&(e/=s,r/=s);const o=Math.floor(6*n),l=1-r;a=6*n-o,(o&1)!==0&&(a=1-a);const c=e+a*(l-e);let h,b,m;switch(o){default:case 6:case 0:h=l,b=c,m=e;break;case 1:h=c,b=l,m=e;break;case 2:h=e,b=l,m=c;break;case 3:h=e,b=c,m=l;break;case 4:h=c,b=e,m=l;break;case 5:h=l,b=e,m=c;break}return[h*255,b*255,m*255]};i.cmyk.rgb=function(t){const n=t[0]/100,e=t[1]/100,r=t[2]/100,s=t[3]/100,a=1-Math.min(1,n*(1-s)+s),o=1-Math.min(1,e*(1-s)+s),l=1-Math.min(1,r*(1-s)+s);return[a*255,o*255,l*255]};i.xyz.rgb=function(t){const n=t[0]/100,e=t[1]/100,r=t[2]/100;let s,a,o;return s=n*3.2406+e*-1.5372+r*-.4986,a=n*-.9689+e*1.8758+r*.0415,o=n*.0557+e*-.204+r*1.057,s=s>.0031308?1.055*s**(1/2.4)-.055:s*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,s=Math.min(Math.max(0,s),1),a=Math.min(Math.max(0,a),1),o=Math.min(Math.max(0,o),1),[s*255,a*255,o*255]};i.xyz.lab=function(t){let n=t[0],e=t[1],r=t[2];n/=95.047,e/=100,r/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,e=e>.008856?e**(1/3):7.787*e+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const s=116*e-16,a=500*(n-e),o=200*(e-r);return[s,a,o]};i.lab.xyz=function(t){const n=t[0],e=t[1],r=t[2];let s,a,o;a=(n+16)/116,s=e/500+a,o=a-r/200;const l=a**3,c=s**3,h=o**3;return a=l>.008856?l:(a-16/116)/7.787,s=c>.008856?c:(s-16/116)/7.787,o=h>.008856?h:(o-16/116)/7.787,s*=95.047,a*=100,o*=108.883,[s,a,o]};i.lab.lch=function(t){const n=t[0],e=t[1],r=t[2];let s;s=Math.atan2(r,e)*360/2/Math.PI,s<0&&(s+=360);const o=Math.sqrt(e*e+r*r);return[n,o,s]};i.lch.lab=function(t){const n=t[0],e=t[1],s=t[2]/360*2*Math.PI,a=e*Math.cos(s),o=e*Math.sin(s);return[n,a,o]};i.rgb.ansi16=function(t,n=null){const[e,r,s]=t;let a=n===null?i.rgb.hsv(t)[2]:n;if(a=Math.round(a/50),a===0)return 30;let o=30+(Math.round(s/255)<<2|Math.round(r/255)<<1|Math.round(e/255));return a===2&&(o+=60),o};i.hsv.ansi16=function(t){return i.rgb.ansi16(i.hsv.rgb(t),t[2])};i.rgb.ansi256=function(t){const n=t[0],e=t[1],r=t[2];return n===e&&e===r?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(e/255*5)+Math.round(r/255*5)};i.ansi16.rgb=function(t){let n=t%10;if(n===0||n===7)return t>50&&(n+=3.5),n=n/10.5*255,[n,n,n];const e=(~~(t>50)+1)*.5,r=(n&1)*e*255,s=(n>>1&1)*e*255,a=(n>>2&1)*e*255;return[r,s,a]};i.ansi256.rgb=function(t){if(t>=232){const a=(t-232)*10+8;return[a,a,a]}t-=16;let n;const e=Math.floor(t/36)/5*255,r=Math.floor((n=t%36)/6)/5*255,s=n%6/5*255;return[e,r,s]};i.rgb.hex=function(t){const e=(((Math.round(t[0])&255)<<16)+((Math.round(t[1])&255)<<8)+(Math.round(t[2])&255)).toString(16).toUpperCase();return"000000".substring(e.length)+e};i.hex.rgb=function(t){const n=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];let e=n[0];n[0].length===3&&(e=e.split("").map(l=>l+l).join(""));const r=parseInt(e,16),s=r>>16&255,a=r>>8&255,o=r&255;return[s,a,o]};i.rgb.hcg=function(t){const n=t[0]/255,e=t[1]/255,r=t[2]/255,s=Math.max(Math.max(n,e),r),a=Math.min(Math.min(n,e),r),o=s-a;let l,c;return o<1?l=a/(1-o):l=0,o<=0?c=0:s===n?c=(e-r)/o%6:s===e?c=2+(r-n)/o:c=4+(n-e)/o,c/=6,c%=1,[c*360,o*100,l*100]};i.hsl.hcg=function(t){const n=t[1]/100,e=t[2]/100,r=e<.5?2*n*e:2*n*(1-e);let s=0;return r<1&&(s=(e-.5*r)/(1-r)),[t[0],r*100,s*100]};i.hsv.hcg=function(t){const n=t[1]/100,e=t[2]/100,r=n*e;let s=0;return r<1&&(s=(e-r)/(1-r)),[t[0],r*100,s*100]};i.hcg.rgb=function(t){const n=t[0]/360,e=t[1]/100,r=t[2]/100;if(e===0)return[r*255,r*255,r*255];const s=[0,0,0],a=n%1*6,o=a%1,l=1-o;let c=0;switch(Math.floor(a)){case 0:s[0]=1,s[1]=o,s[2]=0;break;case 1:s[0]=l,s[1]=1,s[2]=0;break;case 2:s[0]=0,s[1]=1,s[2]=o;break;case 3:s[0]=0,s[1]=l,s[2]=1;break;case 4:s[0]=o,s[1]=0,s[2]=1;break;default:s[0]=1,s[1]=0,s[2]=l}return c=(1-e)*r,[(e*s[0]+c)*255,(e*s[1]+c)*255,(e*s[2]+c)*255]};i.hcg.hsv=function(t){const n=t[1]/100,e=t[2]/100,r=n+e*(1-n);let s=0;return r>0&&(s=n/r),[t[0],s*100,r*100]};i.hcg.hsl=function(t){const n=t[1]/100,r=t[2]/100*(1-n)+.5*n;let s=0;return r>0&&r<.5?s=n/(2*r):r>=.5&&r<1&&(s=n/(2*(1-r))),[t[0],s*100,r*100]};i.hcg.hwb=function(t){const n=t[1]/100,e=t[2]/100,r=n+e*(1-n);return[t[0],(r-n)*100,(1-r)*100]};i.hwb.hcg=function(t){const n=t[1]/100,r=1-t[2]/100,s=r-n;let a=0;return s<1&&(a=(r-s)/(1-s)),[t[0],s*100,a*100]};i.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]};i.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]};i.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]};i.gray.hsl=function(t){return[0,0,t[0]]};i.gray.hsv=i.gray.hsl;i.gray.hwb=function(t){return[0,100,t[0]]};i.gray.cmyk=function(t){return[0,0,0,t[0]]};i.gray.lab=function(t){return[t[0],0,0]};i.gray.hex=function(t){const n=Math.round(t[0]/100*255)&255,r=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(r.length)+r};i.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]};const O=K;function H(){const t={},n=Object.keys(O);for(let e=n.length,r=0;r<e;r++)t[n[r]]={distance:-1,parent:null};return t}function Q(t){const n=H(),e=[t];for(n[t].distance=0;e.length;){const r=e.pop(),s=Object.keys(O[r]);for(let a=s.length,o=0;o<a;o++){const l=s[o],c=n[l];c.distance===-1&&(c.distance=n[r].distance+1,c.parent=r,e.unshift(l))}}return n}function V(t,n){return function(e){return n(t(e))}}function W(t,n){const e=[n[t].parent,t];let r=O[n[t].parent][t],s=n[t].parent;for(;n[s].parent;)e.unshift(n[s].parent),r=V(O[n[s].parent][s],r),s=n[s].parent;return r.conversion=e,r}var X=function(t){const n=Q(t),e={},r=Object.keys(n);for(let s=r.length,a=0;a<s;a++){const o=r[a];n[o].parent!==null&&(e[o]=W(o,n))}return e};const $=K,Y=X,y={},Z=Object.keys($);function _(t){const n=function(...e){const r=e[0];return r==null?r:(r.length>1&&(e=r),t(e))};return"conversion"in t&&(n.conversion=t.conversion),n}function tt(t){const n=function(...e){const r=e[0];if(r==null)return r;r.length>1&&(e=r);const s=t(e);if(typeof s=="object")for(let a=s.length,o=0;o<a;o++)s[o]=Math.round(s[o]);return s};return"conversion"in t&&(n.conversion=t.conversion),n}Z.forEach(t=>{y[t]={},Object.defineProperty(y[t],"channels",{value:$[t].channels}),Object.defineProperty(y[t],"labels",{value:$[t].labels});const n=Y(t);Object.keys(n).forEach(r=>{const s=n[r];y[t][r]=tt(s),y[t][r].raw=_(s)})});var nt=y;const w=N.exports,d=nt,R=["keyword","gray","hex"],q={};for(const t of Object.keys(d))q[[...d[t].labels].sort().join("")]=t;const z={};function g(t,n){if(!(this instanceof g))return new g(t,n);if(n&&n in R&&(n=null),n&&!(n in d))throw new Error("Unknown model: "+n);let e,r;if(t==null)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof g)this.model=t.model,this.color=[...t.color],this.valpha=t.valpha;else if(typeof t=="string"){const s=w.get(t);if(s===null)throw new Error("Unable to parse color from string: "+t);this.model=s.model,r=d[this.model].channels,this.color=s.value.slice(0,r),this.valpha=typeof s.value[r]=="number"?s.value[r]:1}else if(t.length>0){this.model=n||"rgb",r=d[this.model].channels;const s=Array.prototype.slice.call(t,0,r);this.color=S(s,r),this.valpha=typeof t[r]=="number"?t[r]:1}else if(typeof t=="number")this.model="rgb",this.color=[t>>16&255,t>>8&255,t&255],this.valpha=1;else{this.valpha=1;const s=Object.keys(t);"alpha"in t&&(s.splice(s.indexOf("alpha"),1),this.valpha=typeof t.alpha=="number"?t.alpha:0);const a=s.sort().join("");if(!(a in q))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=q[a];const{labels:o}=d[this.model],l=[];for(e=0;e<o.length;e++)l.push(t[o[e]]);this.color=S(l)}if(z[this.model])for(r=d[this.model].channels,e=0;e<r;e++){const s=z[this.model][e];s&&(this.color[e]=s(this.color[e]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}g.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(t){let n=this.model in w.to?this:this.rgb();n=n.round(typeof t=="number"?t:1);const e=n.valpha===1?n.color:[...n.color,this.valpha];return w.to[n.model](e)},percentString(t){const n=this.rgb().round(typeof t=="number"?t:1),e=n.valpha===1?n.color:[...n.color,this.valpha];return w.to.rgb.percent(e)},array(){return this.valpha===1?[...this.color]:[...this.color,this.valpha]},object(){const t={},{channels:n}=d[this.model],{labels:e}=d[this.model];for(let r=0;r<n;r++)t[e[r]]=this.color[r];return this.valpha!==1&&(t.alpha=this.valpha),t},unitArray(){const t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,this.valpha!==1&&t.push(this.valpha),t},unitObject(){const t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,this.valpha!==1&&(t.alpha=this.valpha),t},round(t){return t=Math.max(t||0,0),new g([...this.color.map(rt(t)),this.valpha],this.model)},alpha(t){return t!==void 0?new g([...this.color,Math.max(0,Math.min(1,t))],this.model):this.valpha},red:u("rgb",0,f(255)),green:u("rgb",1,f(255)),blue:u("rgb",2,f(255)),hue:u(["hsl","hsv","hsl","hwb","hcg"],0,t=>(t%360+360)%360),saturationl:u("hsl",1,f(100)),lightness:u("hsl",2,f(100)),saturationv:u("hsv",1,f(100)),value:u("hsv",2,f(100)),chroma:u("hcg",1,f(100)),gray:u("hcg",2,f(100)),white:u("hwb",1,f(100)),wblack:u("hwb",2,f(100)),cyan:u("cmyk",0,f(100)),magenta:u("cmyk",1,f(100)),yellow:u("cmyk",2,f(100)),black:u("cmyk",3,f(100)),x:u("xyz",0,f(95.047)),y:u("xyz",1,f(100)),z:u("xyz",2,f(108.833)),l:u("lab",0,f(100)),a:u("lab",1),b:u("lab",2),keyword(t){return t!==void 0?new g(t):d[this.model].keyword(this.color)},hex(t){return t!==void 0?new g(t):w.to.hex(this.rgb().round().color)},hexa(t){if(t!==void 0)return new g(t);const n=this.rgb().round().color;let e=Math.round(this.valpha*255).toString(16).toUpperCase();return e.length===1&&(e="0"+e),w.to.hex(n)+e},rgbNumber(){const t=this.rgb().color;return(t[0]&255)<<16|(t[1]&255)<<8|t[2]&255},luminosity(){const t=this.rgb().color,n=[];for(const[e,r]of t.entries()){const s=r/255;n[e]=s<=.04045?s/12.92:((s+.055)/1.055)**2.4}return .2126*n[0]+.7152*n[1]+.0722*n[2]},contrast(t){const n=this.luminosity(),e=t.luminosity();return n>e?(n+.05)/(e+.05):(e+.05)/(n+.05)},level(t){const n=this.contrast(t);return n>=7?"AAA":n>=4.5?"AA":""},isDark(){const t=this.rgb().color;return(t[0]*2126+t[1]*7152+t[2]*722)/1e4<128},isLight(){return!this.isDark()},negate(){const t=this.rgb();for(let n=0;n<3;n++)t.color[n]=255-t.color[n];return t},lighten(t){const n=this.hsl();return n.color[2]+=n.color[2]*t,n},darken(t){const n=this.hsl();return n.color[2]-=n.color[2]*t,n},saturate(t){const n=this.hsl();return n.color[1]+=n.color[1]*t,n},desaturate(t){const n=this.hsl();return n.color[1]-=n.color[1]*t,n},whiten(t){const n=this.hwb();return n.color[1]+=n.color[1]*t,n},blacken(t){const n=this.hwb();return n.color[2]+=n.color[2]*t,n},grayscale(){const t=this.rgb().color,n=t[0]*.3+t[1]*.59+t[2]*.11;return g.rgb(n,n,n)},fade(t){return this.alpha(this.valpha-this.valpha*t)},opaquer(t){return this.alpha(this.valpha+this.valpha*t)},rotate(t){const n=this.hsl();let e=n.color[0];return e=(e+t)%360,e=e<0?360+e:e,n.color[0]=e,n},mix(t,n){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);const e=t.rgb(),r=this.rgb(),s=n===void 0?.5:n,a=2*s-1,o=e.alpha()-r.alpha(),l=((a*o===-1?a:(a+o)/(1+a*o))+1)/2,c=1-l;return g.rgb(l*e.red()+c*r.red(),l*e.green()+c*r.green(),l*e.blue()+c*r.blue(),e.alpha()*s+r.alpha()*(1-s))}};for(const t of Object.keys(d)){if(R.includes(t))continue;const{channels:n}=d[t];g.prototype[t]=function(...e){return this.model===t?new g(this):e.length>0?new g(e,t):new g([...st(d[this.model][t].raw(this.color)),this.valpha],t)},g[t]=function(...e){let r=e[0];return typeof r=="number"&&(r=S(e,n)),new g(r,t)}}function et(t,n){return Number(t.toFixed(n))}function rt(t){return function(n){return et(n,t)}}function u(t,n,e){t=Array.isArray(t)?t:[t];for(const r of t)(z[r]||(z[r]=[]))[n]=e;return t=t[0],function(r){let s;return r!==void 0?(e&&(r=e(r)),s=this[t](),s.color[n]=r,s):(s=this[t]().color[n],e&&(s=e(s)),s)}}function f(t){return function(n){return Math.max(0,Math.min(t,n))}}function st(t){return Array.isArray(t)?t:[t]}function S(t,n){for(let e=0;e<n;e++)typeof t[e]!="number"&&(t[e]=0);return t}var ot=g;const at=ot;export{at as C};