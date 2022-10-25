System.register([],(function(t,r){"use strict";return{execute:function(){var r={exports:{}},e={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},n={exports:{}},o=function(t){return!(!t||"string"==typeof t)&&(t instanceof Array||Array.isArray(t)||t.length>=0&&(t.splice instanceof Function||Object.getOwnPropertyDescriptor(t,t.length-1)&&"String"!==t.constructor.name))},a=Array.prototype.concat,s=Array.prototype.slice,l=n.exports=function(t){for(var r=[],e=0,n=t.length;e<n;e++){var l=t[e];o(l)?r=a.call(r,s.call(l)):r.push(l)}return r};l.wrap=function(t){return function(){return t(l(arguments))}};var i=e,h=n.exports,c=Object.hasOwnProperty,u=Object.create(null);for(var g in i)c.call(i,g)&&(u[i[g]]=g);var b=r.exports={to:{},get:{}};function f(t,r,e){return Math.min(Math.max(r,t),e)}function d(t){var r=Math.round(t).toString(16).toUpperCase();return r.length<2?"0"+r:r}b.get=function(t){var r,e;switch(t.substring(0,3).toLowerCase()){case"hsl":r=b.get.hsl(t),e="hsl";break;case"hwb":r=b.get.hwb(t),e="hwb";break;default:r=b.get.rgb(t),e="rgb"}return r?{model:e,value:r}:null},b.get.rgb=function(t){if(!t)return null;var r,e,n,o=[0,0,0,1];if(r=t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(n=r[2],r=r[1],e=0;e<3;e++){var a=2*e;o[e]=parseInt(r.slice(a,a+2),16)}n&&(o[3]=parseInt(n,16)/255)}else if(r=t.match(/^#([a-f0-9]{3,4})$/i)){for(n=(r=r[1])[3],e=0;e<3;e++)o[e]=parseInt(r[e]+r[e],16);n&&(o[3]=parseInt(n+n,16)/255)}else if(r=t.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(e=0;e<3;e++)o[e]=parseInt(r[e+1],0);r[4]&&(r[5]?o[3]=.01*parseFloat(r[4]):o[3]=parseFloat(r[4]))}else{if(!(r=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(r=t.match(/^(\w+)$/))?"transparent"===r[1]?[0,0,0,0]:c.call(i,r[1])?((o=i[r[1]])[3]=1,o):null:null;for(e=0;e<3;e++)o[e]=Math.round(2.55*parseFloat(r[e+1]));r[4]&&(r[5]?o[3]=.01*parseFloat(r[4]):o[3]=parseFloat(r[4]))}for(e=0;e<3;e++)o[e]=f(o[e],0,255);return o[3]=f(o[3],0,1),o},b.get.hsl=function(t){if(!t)return null;var r=t.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(r){var e=parseFloat(r[4]);return[(parseFloat(r[1])%360+360)%360,f(parseFloat(r[2]),0,100),f(parseFloat(r[3]),0,100),f(isNaN(e)?1:e,0,1)]}return null},b.get.hwb=function(t){if(!t)return null;var r=t.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(r){var e=parseFloat(r[4]);return[(parseFloat(r[1])%360+360)%360,f(parseFloat(r[2]),0,100),f(parseFloat(r[3]),0,100),f(isNaN(e)?1:e,0,1)]}return null},b.to.hex=function(){var t=h(arguments);return"#"+d(t[0])+d(t[1])+d(t[2])+(t[3]<1?d(Math.round(255*t[3])):"")},b.to.rgb=function(){var t=h(arguments);return t.length<4||1===t[3]?"rgb("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+")":"rgba("+Math.round(t[0])+", "+Math.round(t[1])+", "+Math.round(t[2])+", "+t[3]+")"},b.to.rgb.percent=function(){var t=h(arguments),r=Math.round(t[0]/255*100),e=Math.round(t[1]/255*100),n=Math.round(t[2]/255*100);return t.length<4||1===t[3]?"rgb("+r+"%, "+e+"%, "+n+"%)":"rgba("+r+"%, "+e+"%, "+n+"%, "+t[3]+")"},b.to.hsl=function(){var t=h(arguments);return t.length<4||1===t[3]?"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)":"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+t[3]+")"},b.to.hwb=function(){var t=h(arguments),r="";return t.length>=4&&1!==t[3]&&(r=", "+t[3]),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+r+")"},b.to.keyword=function(t){return u[t.slice(0,3)]};const p=e,m={};for(const t of Object.keys(p))m[p[t]]=t;const y={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var v=y;for(const t of Object.keys(y)){if(!("channels"in y[t]))throw new Error("missing channels property: "+t);if(!("labels"in y[t]))throw new Error("missing channel labels property: "+t);if(y[t].labels.length!==y[t].channels)throw new Error("channel and label counts mismatch: "+t);const{channels:r,labels:e}=y[t];delete y[t].channels,delete y[t].labels,Object.defineProperty(y[t],"channels",{value:r}),Object.defineProperty(y[t],"labels",{value:e})}y.rgb.hsl=function(t){const r=t[0]/255,e=t[1]/255,n=t[2]/255,o=Math.min(r,e,n),a=Math.max(r,e,n),s=a-o;let l,i;a===o?l=0:r===a?l=(e-n)/s:e===a?l=2+(n-r)/s:n===a&&(l=4+(r-e)/s),l=Math.min(60*l,360),l<0&&(l+=360);const h=(o+a)/2;return i=a===o?0:h<=.5?s/(a+o):s/(2-a-o),[l,100*i,100*h]},y.rgb.hsv=function(t){let r,e,n,o,a;const s=t[0]/255,l=t[1]/255,i=t[2]/255,h=Math.max(s,l,i),c=h-Math.min(s,l,i),u=function(t){return(h-t)/6/c+.5};return 0===c?(o=0,a=0):(a=c/h,r=u(s),e=u(l),n=u(i),s===h?o=n-e:l===h?o=1/3+r-n:i===h&&(o=2/3+e-r),o<0?o+=1:o>1&&(o-=1)),[360*o,100*a,100*h]},y.rgb.hwb=function(t){const r=t[0],e=t[1];let n=t[2];const o=y.rgb.hsl(t)[0],a=1/255*Math.min(r,Math.min(e,n));return n=1-1/255*Math.max(r,Math.max(e,n)),[o,100*a,100*n]},y.rgb.cmyk=function(t){const r=t[0]/255,e=t[1]/255,n=t[2]/255,o=Math.min(1-r,1-e,1-n);return[100*((1-r-o)/(1-o)||0),100*((1-e-o)/(1-o)||0),100*((1-n-o)/(1-o)||0),100*o]},y.rgb.keyword=function(t){const r=m[t];if(r)return r;let e,n=1/0;for(const s of Object.keys(p)){const r=(a=p[s],((o=t)[0]-a[0])**2+(o[1]-a[1])**2+(o[2]-a[2])**2);r<n&&(n=r,e=s)}var o,a;return e},y.keyword.rgb=function(t){return p[t]},y.rgb.xyz=function(t){let r=t[0]/255,e=t[1]/255,n=t[2]/255;return r=r>.04045?((r+.055)/1.055)**2.4:r/12.92,e=e>.04045?((e+.055)/1.055)**2.4:e/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,[100*(.4124*r+.3576*e+.1805*n),100*(.2126*r+.7152*e+.0722*n),100*(.0193*r+.1192*e+.9505*n)]},y.rgb.lab=function(t){const r=y.rgb.xyz(t);let e=r[0],n=r[1],o=r[2];return e/=95.047,n/=100,o/=108.883,e=e>.008856?e**(1/3):7.787*e+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,o=o>.008856?o**(1/3):7.787*o+16/116,[116*n-16,500*(e-n),200*(n-o)]},y.hsl.rgb=function(t){const r=t[0]/360,e=t[1]/100,n=t[2]/100;let o,a,s;if(0===e)return s=255*n,[s,s,s];o=n<.5?n*(1+e):n+e-n*e;const l=2*n-o,i=[0,0,0];for(let h=0;h<3;h++)a=r+1/3*-(h-1),a<0&&a++,a>1&&a--,s=6*a<1?l+6*(o-l)*a:2*a<1?o:3*a<2?l+(o-l)*(2/3-a)*6:l,i[h]=255*s;return i},y.hsl.hsv=function(t){const r=t[0];let e=t[1]/100,n=t[2]/100,o=e;const a=Math.max(n,.01);return n*=2,e*=n<=1?n:2-n,o*=a<=1?a:2-a,[r,100*(0===n?2*o/(a+o):2*e/(n+e)),(n+e)/2*100]},y.hsv.rgb=function(t){const r=t[0]/60,e=t[1]/100;let n=t[2]/100;const o=Math.floor(r)%6,a=r-Math.floor(r),s=255*n*(1-e),l=255*n*(1-e*a),i=255*n*(1-e*(1-a));switch(n*=255,o){case 0:return[n,i,s];case 1:return[l,n,s];case 2:return[s,n,i];case 3:return[s,l,n];case 4:return[i,s,n];case 5:return[n,s,l]}},y.hsv.hsl=function(t){const r=t[0],e=t[1]/100,n=t[2]/100,o=Math.max(n,.01);let a,s;s=(2-e)*n;const l=(2-e)*o;return a=e*o,a/=l<=1?l:2-l,a=a||0,s/=2,[r,100*a,100*s]},y.hwb.rgb=function(t){const r=t[0]/360;let e=t[1]/100,n=t[2]/100;const o=e+n;let a;o>1&&(e/=o,n/=o);const s=Math.floor(6*r),l=1-n;a=6*r-s,0!=(1&s)&&(a=1-a);const i=e+a*(l-e);let h,c,u;switch(s){default:case 6:case 0:h=l,c=i,u=e;break;case 1:h=i,c=l,u=e;break;case 2:h=e,c=l,u=i;break;case 3:h=e,c=i,u=l;break;case 4:h=i,c=e,u=l;break;case 5:h=l,c=e,u=i}return[255*h,255*c,255*u]},y.cmyk.rgb=function(t){const r=t[0]/100,e=t[1]/100,n=t[2]/100,o=t[3]/100;return[255*(1-Math.min(1,r*(1-o)+o)),255*(1-Math.min(1,e*(1-o)+o)),255*(1-Math.min(1,n*(1-o)+o))]},y.xyz.rgb=function(t){const r=t[0]/100,e=t[1]/100,n=t[2]/100;let o,a,s;return o=3.2406*r+-1.5372*e+-.4986*n,a=-.9689*r+1.8758*e+.0415*n,s=.0557*r+-.204*e+1.057*n,o=o>.0031308?1.055*o**(1/2.4)-.055:12.92*o,a=a>.0031308?1.055*a**(1/2.4)-.055:12.92*a,s=s>.0031308?1.055*s**(1/2.4)-.055:12.92*s,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),s=Math.min(Math.max(0,s),1),[255*o,255*a,255*s]},y.xyz.lab=function(t){let r=t[0],e=t[1],n=t[2];return r/=95.047,e/=100,n/=108.883,r=r>.008856?r**(1/3):7.787*r+16/116,e=e>.008856?e**(1/3):7.787*e+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,[116*e-16,500*(r-e),200*(e-n)]},y.lab.xyz=function(t){let r,e,n;e=(t[0]+16)/116,r=t[1]/500+e,n=e-t[2]/200;const o=e**3,a=r**3,s=n**3;return e=o>.008856?o:(e-16/116)/7.787,r=a>.008856?a:(r-16/116)/7.787,n=s>.008856?s:(n-16/116)/7.787,r*=95.047,e*=100,n*=108.883,[r,e,n]},y.lab.lch=function(t){const r=t[0],e=t[1],n=t[2];let o;return o=360*Math.atan2(n,e)/2/Math.PI,o<0&&(o+=360),[r,Math.sqrt(e*e+n*n),o]},y.lch.lab=function(t){const r=t[0],e=t[1],n=t[2]/360*2*Math.PI;return[r,e*Math.cos(n),e*Math.sin(n)]},y.rgb.ansi16=function(t,r=null){const[e,n,o]=t;let a=null===r?y.rgb.hsv(t)[2]:r;if(a=Math.round(a/50),0===a)return 30;let s=30+(Math.round(o/255)<<2|Math.round(n/255)<<1|Math.round(e/255));return 2===a&&(s+=60),s},y.hsv.ansi16=function(t){return y.rgb.ansi16(y.hsv.rgb(t),t[2])},y.rgb.ansi256=function(t){const r=t[0],e=t[1],n=t[2];return r===e&&e===n?r<8?16:r>248?231:Math.round((r-8)/247*24)+232:16+36*Math.round(r/255*5)+6*Math.round(e/255*5)+Math.round(n/255*5)},y.ansi16.rgb=function(t){let r=t%10;if(0===r||7===r)return t>50&&(r+=3.5),r=r/10.5*255,[r,r,r];const e=.5*(1+~~(t>50));return[(1&r)*e*255,(r>>1&1)*e*255,(r>>2&1)*e*255]},y.ansi256.rgb=function(t){if(t>=232){const r=10*(t-232)+8;return[r,r,r]}let r;return t-=16,[Math.floor(t/36)/5*255,Math.floor((r=t%36)/6)/5*255,r%6/5*255]},y.rgb.hex=function(t){const r=(((255&Math.round(t[0]))<<16)+((255&Math.round(t[1]))<<8)+(255&Math.round(t[2]))).toString(16).toUpperCase();return"000000".substring(r.length)+r},y.hex.rgb=function(t){const r=t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!r)return[0,0,0];let e=r[0];3===r[0].length&&(e=e.split("").map((t=>t+t)).join(""));const n=parseInt(e,16);return[n>>16&255,n>>8&255,255&n]},y.rgb.hcg=function(t){const r=t[0]/255,e=t[1]/255,n=t[2]/255,o=Math.max(Math.max(r,e),n),a=Math.min(Math.min(r,e),n),s=o-a;let l,i;return l=s<1?a/(1-s):0,i=s<=0?0:o===r?(e-n)/s%6:o===e?2+(n-r)/s:4+(r-e)/s,i/=6,i%=1,[360*i,100*s,100*l]},y.hsl.hcg=function(t){const r=t[1]/100,e=t[2]/100,n=e<.5?2*r*e:2*r*(1-e);let o=0;return n<1&&(o=(e-.5*n)/(1-n)),[t[0],100*n,100*o]},y.hsv.hcg=function(t){const r=t[1]/100,e=t[2]/100,n=r*e;let o=0;return n<1&&(o=(e-n)/(1-n)),[t[0],100*n,100*o]},y.hcg.rgb=function(t){const r=t[0]/360,e=t[1]/100,n=t[2]/100;if(0===e)return[255*n,255*n,255*n];const o=[0,0,0],a=r%1*6,s=a%1,l=1-s;let i=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=s,o[2]=0;break;case 1:o[0]=l,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=s;break;case 3:o[0]=0,o[1]=l,o[2]=1;break;case 4:o[0]=s,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=l}return i=(1-e)*n,[255*(e*o[0]+i),255*(e*o[1]+i),255*(e*o[2]+i)]},y.hcg.hsv=function(t){const r=t[1]/100,e=r+t[2]/100*(1-r);let n=0;return e>0&&(n=r/e),[t[0],100*n,100*e]},y.hcg.hsl=function(t){const r=t[1]/100,e=t[2]/100*(1-r)+.5*r;let n=0;return e>0&&e<.5?n=r/(2*e):e>=.5&&e<1&&(n=r/(2*(1-e))),[t[0],100*n,100*e]},y.hcg.hwb=function(t){const r=t[1]/100,e=r+t[2]/100*(1-r);return[t[0],100*(e-r),100*(1-e)]},y.hwb.hcg=function(t){const r=t[1]/100,e=1-t[2]/100,n=e-r;let o=0;return n<1&&(o=(e-n)/(1-n)),[t[0],100*n,100*o]},y.apple.rgb=function(t){return[t[0]/65535*255,t[1]/65535*255,t[2]/65535*255]},y.rgb.apple=function(t){return[t[0]/255*65535,t[1]/255*65535,t[2]/255*65535]},y.gray.rgb=function(t){return[t[0]/100*255,t[0]/100*255,t[0]/100*255]},y.gray.hsl=function(t){return[0,0,t[0]]},y.gray.hsv=y.gray.hsl,y.gray.hwb=function(t){return[0,100,t[0]]},y.gray.cmyk=function(t){return[0,0,0,t[0]]},y.gray.lab=function(t){return[t[0],0,0]},y.gray.hex=function(t){const r=255&Math.round(t[0]/100*255),e=((r<<16)+(r<<8)+r).toString(16).toUpperCase();return"000000".substring(e.length)+e},y.rgb.gray=function(t){return[(t[0]+t[1]+t[2])/3/255*100]};const w=v;function k(t){const r=function(){const t={},r=Object.keys(w);for(let e=r.length,n=0;n<e;n++)t[r[n]]={distance:-1,parent:null};return t}(),e=[t];for(r[t].distance=0;e.length;){const t=e.pop(),n=Object.keys(w[t]);for(let o=n.length,a=0;a<o;a++){const o=n[a],s=r[o];-1===s.distance&&(s.distance=r[t].distance+1,s.parent=t,e.unshift(o))}}return r}function M(t,r){return function(e){return r(t(e))}}function x(t,r){const e=[r[t].parent,t];let n=w[r[t].parent][t],o=r[t].parent;for(;r[o].parent;)e.unshift(r[o].parent),n=M(w[r[o].parent][o],n),o=r[o].parent;return n.conversion=e,n}const j=v,O=function(t){const r=k(t),e={},n=Object.keys(r);for(let o=n.length,a=0;a<o;a++){const t=n[a];null!==r[t].parent&&(e[t]=x(t,r))}return e},A={};Object.keys(j).forEach((t=>{A[t]={},Object.defineProperty(A[t],"channels",{value:j[t].channels}),Object.defineProperty(A[t],"labels",{value:j[t].labels});const r=O(t);Object.keys(r).forEach((e=>{const n=r[e];A[t][e]=function(t){const r=function(...r){const e=r[0];if(null==e)return e;e.length>1&&(r=e);const n=t(r);if("object"==typeof n)for(let t=n.length,o=0;o<t;o++)n[o]=Math.round(n[o]);return n};return"conversion"in t&&(r.conversion=t.conversion),r}(n),A[t][e].raw=function(t){const r=function(...r){const e=r[0];return null==e?e:(e.length>1&&(r=e),t(r))};return"conversion"in t&&(r.conversion=t.conversion),r}(n)}))}));var F=A;const z=r.exports,q=F,E=["keyword","gray","hex"],S={};for(const t of Object.keys(q))S[[...q[t].labels].sort().join("")]=t;const I={};function N(t,r){if(!(this instanceof N))return new N(t,r);if(r&&r in E&&(r=null),r&&!(r in q))throw new Error("Unknown model: "+r);let e,n;if(null==t)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(t instanceof N)this.model=t.model,this.color=[...t.color],this.valpha=t.valpha;else if("string"==typeof t){const r=z.get(t);if(null===r)throw new Error("Unable to parse color from string: "+t);this.model=r.model,n=q[this.model].channels,this.color=r.value.slice(0,n),this.valpha="number"==typeof r.value[n]?r.value[n]:1}else if(t.length>0){this.model=r||"rgb",n=q[this.model].channels;const e=Array.prototype.slice.call(t,0,n);this.color=$(e,n),this.valpha="number"==typeof t[n]?t[n]:1}else if("number"==typeof t)this.model="rgb",this.color=[t>>16&255,t>>8&255,255&t],this.valpha=1;else{this.valpha=1;const r=Object.keys(t);"alpha"in t&&(r.splice(r.indexOf("alpha"),1),this.valpha="number"==typeof t.alpha?t.alpha:0);const n=r.sort().join("");if(!(n in S))throw new Error("Unable to parse color from object: "+JSON.stringify(t));this.model=S[n];const{labels:o}=q[this.model],a=[];for(e=0;e<o.length;e++)a.push(t[o[e]]);this.color=$(a)}if(I[this.model])for(n=q[this.model].channels,e=0;e<n;e++){const t=I[this.model][e];t&&(this.color[e]=t(this.color[e]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}N.prototype={toString(){return this.string()},toJSON(){return this[this.model]()},string(t){let r=this.model in z.to?this:this.rgb();r=r.round("number"==typeof t?t:1);const e=1===r.valpha?r.color:[...r.color,this.valpha];return z.to[r.model](e)},percentString(t){const r=this.rgb().round("number"==typeof t?t:1),e=1===r.valpha?r.color:[...r.color,this.valpha];return z.to.rgb.percent(e)},array(){return 1===this.valpha?[...this.color]:[...this.color,this.valpha]},object(){const t={},{channels:r}=q[this.model],{labels:e}=q[this.model];for(let n=0;n<r;n++)t[e[n]]=this.color[n];return 1!==this.valpha&&(t.alpha=this.valpha),t},unitArray(){const t=this.rgb().color;return t[0]/=255,t[1]/=255,t[2]/=255,1!==this.valpha&&t.push(this.valpha),t},unitObject(){const t=this.rgb().object();return t.r/=255,t.g/=255,t.b/=255,1!==this.valpha&&(t.alpha=this.valpha),t},round(t){return t=Math.max(t||0,0),new N([...this.color.map(P(t)),this.valpha],this.model)},alpha(t){return void 0!==t?new N([...this.color,Math.max(0,Math.min(1,t))],this.model):this.valpha},red:C("rgb",0,U(255)),green:C("rgb",1,U(255)),blue:C("rgb",2,U(255)),hue:C(["hsl","hsv","hsl","hwb","hcg"],0,(t=>(t%360+360)%360)),saturationl:C("hsl",1,U(100)),lightness:C("hsl",2,U(100)),saturationv:C("hsv",1,U(100)),value:C("hsv",2,U(100)),chroma:C("hcg",1,U(100)),gray:C("hcg",2,U(100)),white:C("hwb",1,U(100)),wblack:C("hwb",2,U(100)),cyan:C("cmyk",0,U(100)),magenta:C("cmyk",1,U(100)),yellow:C("cmyk",2,U(100)),black:C("cmyk",3,U(100)),x:C("xyz",0,U(95.047)),y:C("xyz",1,U(100)),z:C("xyz",2,U(108.833)),l:C("lab",0,U(100)),a:C("lab",1),b:C("lab",2),keyword(t){return void 0!==t?new N(t):q[this.model].keyword(this.color)},hex(t){return void 0!==t?new N(t):z.to.hex(this.rgb().round().color)},hexa(t){if(void 0!==t)return new N(t);const r=this.rgb().round().color;let e=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===e.length&&(e="0"+e),z.to.hex(r)+e},rgbNumber(){const t=this.rgb().color;return(255&t[0])<<16|(255&t[1])<<8|255&t[2]},luminosity(){const t=this.rgb().color,r=[];for(const[e,n]of t.entries()){const t=n/255;r[e]=t<=.04045?t/12.92:((t+.055)/1.055)**2.4}return.2126*r[0]+.7152*r[1]+.0722*r[2]},contrast(t){const r=this.luminosity(),e=t.luminosity();return r>e?(r+.05)/(e+.05):(e+.05)/(r+.05)},level(t){const r=this.contrast(t);return r>=7?"AAA":r>=4.5?"AA":""},isDark(){const t=this.rgb().color;return(2126*t[0]+7152*t[1]+722*t[2])/1e4<128},isLight(){return!this.isDark()},negate(){const t=this.rgb();for(let r=0;r<3;r++)t.color[r]=255-t.color[r];return t},lighten(t){const r=this.hsl();return r.color[2]+=r.color[2]*t,r},darken(t){const r=this.hsl();return r.color[2]-=r.color[2]*t,r},saturate(t){const r=this.hsl();return r.color[1]+=r.color[1]*t,r},desaturate(t){const r=this.hsl();return r.color[1]-=r.color[1]*t,r},whiten(t){const r=this.hwb();return r.color[1]+=r.color[1]*t,r},blacken(t){const r=this.hwb();return r.color[2]+=r.color[2]*t,r},grayscale(){const t=this.rgb().color,r=.3*t[0]+.59*t[1]+.11*t[2];return N.rgb(r,r,r)},fade(t){return this.alpha(this.valpha-this.valpha*t)},opaquer(t){return this.alpha(this.valpha+this.valpha*t)},rotate(t){const r=this.hsl();let e=r.color[0];return e=(e+t)%360,e=e<0?360+e:e,r.color[0]=e,r},mix(t,r){if(!t||!t.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof t);const e=t.rgb(),n=this.rgb(),o=void 0===r?.5:r,a=2*o-1,s=e.alpha()-n.alpha(),l=((a*s==-1?a:(a+s)/(1+a*s))+1)/2,i=1-l;return N.rgb(l*e.red()+i*n.red(),l*e.green()+i*n.green(),l*e.blue()+i*n.blue(),e.alpha()*o+n.alpha()*(1-o))}};for(const t of Object.keys(q)){if(E.includes(t))continue;const{channels:r}=q[t];N.prototype[t]=function(...r){return this.model===t?new N(this):r.length>0?new N(r,t):new N([...(e=q[this.model][t].raw(this.color),Array.isArray(e)?e:[e]),this.valpha],t);var e},N[t]=function(...e){let n=e[0];return"number"==typeof n&&(n=$(e,r)),new N(n,t)}}function P(t){return function(r){return function(t,r){return Number(t.toFixed(r))}(r,t)}}function C(t,r,e){t=Array.isArray(t)?t:[t];for(const n of t)(I[n]||(I[n]=[]))[r]=e;return t=t[0],function(n){let o;return void 0!==n?(e&&(n=e(n)),o=this[t](),o.color[r]=n,o):(o=this[t]().color[r],e&&(o=e(o)),o)}}function U(t){return function(r){return Math.max(0,Math.min(t,r))}}function $(t,r){for(let e=0;e<r;e++)"number"!=typeof t[e]&&(t[e]=0);return t}t("C",N)}}}));
