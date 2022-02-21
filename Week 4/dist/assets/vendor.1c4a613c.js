function vd(r){var e=this.constructor;return this.then(function(t){return e.resolve(r()).then(function(){return t})},function(t){return e.resolve(r()).then(function(){return e.reject(t)})})}function md(r){var e=this;return new e(function(t,i){if(!(r&&typeof r.length!="undefined"))return i(new TypeError(typeof r+" "+r+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var n=Array.prototype.slice.call(r);if(n.length===0)return t([]);var o=n.length;function a(u,l){if(l&&(typeof l=="object"||typeof l=="function")){var h=l.then;if(typeof h=="function"){h.call(l,function(f){a(u,f)},function(f){n[u]={status:"rejected",reason:f},--o==0&&t(n)});return}}n[u]={status:"fulfilled",value:l},--o==0&&t(n)}for(var s=0;s<n.length;s++)a(s,n[s])})}var gd=setTimeout,au=typeof setImmediate!="undefined"?setImmediate:null;function su(r){return Boolean(r&&typeof r.length!="undefined")}function yd(){}function xd(r,e){return function(){r.apply(e,arguments)}}function _t(r){if(!(this instanceof _t))throw new TypeError("Promises must be constructed via new");if(typeof r!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],lu(r,this)}function uu(r,e){for(;r._state===3;)r=r._value;if(r._state===0){r._deferreds.push(e);return}r._handled=!0,_t._immediateFn(function(){var t=r._state===1?e.onFulfilled:e.onRejected;if(t===null){(r._state===1?eo:ri)(e.promise,r._value);return}var i;try{i=t(r._value)}catch(n){ri(e.promise,n);return}eo(e.promise,i)})}function eo(r,e){try{if(e===r)throw new TypeError("A promise cannot be resolved with itself.");if(e&&(typeof e=="object"||typeof e=="function")){var t=e.then;if(e instanceof _t){r._state=3,r._value=e,ro(r);return}else if(typeof t=="function"){lu(xd(t,e),r);return}}r._state=1,r._value=e,ro(r)}catch(i){ri(r,i)}}function ri(r,e){r._state=2,r._value=e,ro(r)}function ro(r){r._state===2&&r._deferreds.length===0&&_t._immediateFn(function(){r._handled||_t._unhandledRejectionFn(r._value)});for(var e=0,t=r._deferreds.length;e<t;e++)uu(r,r._deferreds[e]);r._deferreds=null}function bd(r,e,t){this.onFulfilled=typeof r=="function"?r:null,this.onRejected=typeof e=="function"?e:null,this.promise=t}function lu(r,e){var t=!1;try{r(function(i){t||(t=!0,eo(e,i))},function(i){t||(t=!0,ri(e,i))})}catch(i){if(t)return;t=!0,ri(e,i)}}_t.prototype.catch=function(r){return this.then(null,r)};_t.prototype.then=function(r,e){var t=new this.constructor(yd);return uu(this,new bd(r,e,t)),t};_t.prototype.finally=vd;_t.all=function(r){return new _t(function(e,t){if(!su(r))return t(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(r);if(i.length===0)return e([]);var n=i.length;function o(s,u){try{if(u&&(typeof u=="object"||typeof u=="function")){var l=u.then;if(typeof l=="function"){l.call(u,function(h){o(s,h)},t);return}}i[s]=u,--n==0&&e(i)}catch(h){t(h)}}for(var a=0;a<i.length;a++)o(a,i[a])})};_t.allSettled=md;_t.resolve=function(r){return r&&typeof r=="object"&&r.constructor===_t?r:new _t(function(e){e(r)})};_t.reject=function(r){return new _t(function(e,t){t(r)})};_t.race=function(r){return new _t(function(e,t){if(!su(r))return t(new TypeError("Promise.race accepts an array"));for(var i=0,n=r.length;i<n;i++)_t.resolve(r[i]).then(e,t)})};_t._immediateFn=typeof au=="function"&&function(r){au(r)}||function(r){gd(r,0)};_t._unhandledRejectionFn=function(e){typeof console!="undefined"&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var io=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var hu=Object.getOwnPropertySymbols,Td=Object.prototype.hasOwnProperty,Cd=Object.prototype.propertyIsEnumerable;function wd(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function Ed(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var i=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(i.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(o){n[o]=o}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Pd=Ed()?Object.assign:function(r,e){for(var t,i=wd(r),n,o=1;o<arguments.length;o++){t=Object(arguments[o]);for(var a in t)Td.call(t,a)&&(i[a]=t[a]);if(hu){n=hu(t);for(var s=0;s<n.length;s++)Cd.call(t,n[s])&&(i[n[s]]=t[n[s]])}}return i};/*!
 * @pixi/polyfill - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/polyfill is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */self.Promise||(self.Promise=_t);Object.assign||(Object.assign=Pd);var Id=16;Date.now&&Date.prototype.getTime||(Date.now=function(){return new Date().getTime()});if(!(self.performance&&self.performance.now)){var Ad=Date.now();self.performance||(self.performance={}),self.performance.now=function(){return Date.now()-Ad}}var no=Date.now(),fu=["ms","moz","webkit","o"];for(var oo=0;oo<fu.length&&!self.requestAnimationFrame;++oo){var ao=fu[oo];self.requestAnimationFrame=self[ao+"RequestAnimationFrame"],self.cancelAnimationFrame=self[ao+"CancelAnimationFrame"]||self[ao+"CancelRequestAnimationFrame"]}self.requestAnimationFrame||(self.requestAnimationFrame=function(r){if(typeof r!="function")throw new TypeError(r+"is not a function");var e=Date.now(),t=Id+no-e;return t<0&&(t=0),no=e,self.setTimeout(function(){no=Date.now(),r(performance.now())},t)});self.cancelAnimationFrame||(self.cancelAnimationFrame=function(r){return clearTimeout(r)});Math.sign||(Math.sign=function(e){return e=Number(e),e===0||isNaN(e)?e:e>0?1:-1});Number.isInteger||(Number.isInteger=function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e});self.ArrayBuffer||(self.ArrayBuffer=Array);self.Float32Array||(self.Float32Array=Array);self.Uint32Array||(self.Uint32Array=Array);self.Uint16Array||(self.Uint16Array=Array);self.Uint8Array||(self.Uint8Array=Array);self.Int32Array||(self.Int32Array=Array);var so=/iPhone/i,cu=/iPod/i,du=/iPad/i,pu=/\biOS-universal(?:.+)Mac\b/i,uo=/\bAndroid(?:.+)Mobile\b/i,_u=/Android/i,Ir=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,Yi=/Silk/i,Te=/Windows Phone/i,vu=/\bWindows(?:.+)ARM\b/i,mu=/BlackBerry/i,gu=/BB10/i,yu=/Opera Mini/i,xu=/\b(CriOS|Chrome)(?:.+)Mobile/i,bu=/Mobile(?:.+)Firefox\b/i,Tu=function(r){return typeof r!="undefined"&&r.platform==="MacIntel"&&typeof r.maxTouchPoints=="number"&&r.maxTouchPoints>1&&typeof MSStream=="undefined"};function Rd(r){return function(e){return e.test(r)}}function Sd(r){var e={userAgent:"",platform:"",maxTouchPoints:0};!r&&typeof navigator!="undefined"?e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof r=="string"?e.userAgent=r:r&&r.userAgent&&(e={userAgent:r.userAgent,platform:r.platform,maxTouchPoints:r.maxTouchPoints||0});var t=e.userAgent,i=t.split("[FBAN");typeof i[1]!="undefined"&&(t=i[0]),i=t.split("Twitter"),typeof i[1]!="undefined"&&(t=i[0]);var n=Rd(t),o={apple:{phone:n(so)&&!n(Te),ipod:n(cu),tablet:!n(so)&&(n(du)||Tu(e))&&!n(Te),universal:n(pu),device:(n(so)||n(cu)||n(du)||n(pu)||Tu(e))&&!n(Te)},amazon:{phone:n(Ir),tablet:!n(Ir)&&n(Yi),device:n(Ir)||n(Yi)},android:{phone:!n(Te)&&n(Ir)||!n(Te)&&n(uo),tablet:!n(Te)&&!n(Ir)&&!n(uo)&&(n(Yi)||n(_u)),device:!n(Te)&&(n(Ir)||n(Yi)||n(uo)||n(_u))||n(/\bokhttp\b/i)},windows:{phone:n(Te),tablet:n(vu),device:n(Te)||n(vu)},other:{blackberry:n(mu),blackberry10:n(gu),opera:n(yu),firefox:n(bu),chrome:n(xu),device:n(mu)||n(gu)||n(yu)||n(bu)||n(xu)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}/*!
 * @pixi/settings - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/settings is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var he=Sd(self.navigator);function Od(r){var e=!0;if(he.tablet||he.phone){if(he.apple.device){var t=navigator.userAgent.match(/OS (\d+)_(\d+)?/);if(t){var i=parseInt(t[1],10);i<11&&(e=!1)}}if(he.android.device){var t=navigator.userAgent.match(/Android\s([0-9.]*)/);if(t){var i=parseInt(t[1],10);i<7&&(e=!1)}}}return e?r:4}function Nd(){return!he.apple.device}/*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Cu;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(Cu||(Cu={}));var wu;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(wu||(wu={}));var Eu;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(Eu||(Eu={}));var Pu;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(Pu||(Pu={}));var Iu;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Iu||(Iu={}));var Au;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(Au||(Au={}));var Ru;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Ru||(Ru={}));var Su;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(Su||(Su={}));var Ou;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(Ou||(Ou={}));var lo;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(lo||(lo={}));var ho;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(ho||(ho={}));var fo;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(fo||(fo={}));var Nu;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Nu||(Nu={}));var Fu;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(Fu||(Fu={}));var co;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(co||(co={}));var ii;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(ii||(ii={}));var Uu;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(Uu||(Uu={}));var po;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(po||(po={}));var Lu;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Lu||(Lu={}));var M={MIPMAP_TEXTURES:fo.POW2,ANISOTROPIC_LEVEL:0,RESOLUTION:1,FILTER_RESOLUTION:1,FILTER_MULTISAMPLE:po.NONE,SPRITE_MAX_TEXTURES:Od(32),SPRITE_BATCH_SIZE:4096,RENDER_OPTIONS:{view:null,antialias:!1,autoDensity:!1,backgroundColor:0,backgroundAlpha:1,useContextAlpha:!0,clearBeforeRender:!0,preserveDrawingBuffer:!1,width:800,height:600,legacy:!1},GC_MODE:co.AUTO,GC_MAX_IDLE:60*60,GC_MAX_CHECK_COUNT:60*10,WRAP_MODE:ho.CLAMP,SCALE_MODE:lo.LINEAR,PRECISION_VERTEX:ii.HIGH,PRECISION_FRAGMENT:he.apple.device?ii.HIGH:ii.MEDIUM,CAN_UPLOAD_SAME_BUFFER:Nd(),CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1},Mu={exports:{}};(function(r){var e=Object.prototype.hasOwnProperty,t="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(t=!1));function n(u,l,h){this.fn=u,this.context=l,this.once=h||!1}function o(u,l,h,f,c){if(typeof h!="function")throw new TypeError("The listener must be a function");var d=new n(h,f||u,c),_=t?t+l:l;return u._events[_]?u._events[_].fn?u._events[_]=[u._events[_],d]:u._events[_].push(d):(u._events[_]=d,u._eventsCount++),u}function a(u,l){--u._eventsCount==0?u._events=new i:delete u._events[l]}function s(){this._events=new i,this._eventsCount=0}s.prototype.eventNames=function(){var l=[],h,f;if(this._eventsCount===0)return l;for(f in h=this._events)e.call(h,f)&&l.push(t?f.slice(1):f);return Object.getOwnPropertySymbols?l.concat(Object.getOwnPropertySymbols(h)):l},s.prototype.listeners=function(l){var h=t?t+l:l,f=this._events[h];if(!f)return[];if(f.fn)return[f.fn];for(var c=0,d=f.length,_=new Array(d);c<d;c++)_[c]=f[c].fn;return _},s.prototype.listenerCount=function(l){var h=t?t+l:l,f=this._events[h];return f?f.fn?1:f.length:0},s.prototype.emit=function(l,h,f,c,d,_){var p=t?t+l:l;if(!this._events[p])return!1;var v=this._events[p],m=arguments.length,x,b;if(v.fn){switch(v.once&&this.removeListener(l,v.fn,void 0,!0),m){case 1:return v.fn.call(v.context),!0;case 2:return v.fn.call(v.context,h),!0;case 3:return v.fn.call(v.context,h,f),!0;case 4:return v.fn.call(v.context,h,f,c),!0;case 5:return v.fn.call(v.context,h,f,c,d),!0;case 6:return v.fn.call(v.context,h,f,c,d,_),!0}for(b=1,x=new Array(m-1);b<m;b++)x[b-1]=arguments[b];v.fn.apply(v.context,x)}else{var C=v.length,y;for(b=0;b<C;b++)switch(v[b].once&&this.removeListener(l,v[b].fn,void 0,!0),m){case 1:v[b].fn.call(v[b].context);break;case 2:v[b].fn.call(v[b].context,h);break;case 3:v[b].fn.call(v[b].context,h,f);break;case 4:v[b].fn.call(v[b].context,h,f,c);break;default:if(!x)for(y=1,x=new Array(m-1);y<m;y++)x[y-1]=arguments[y];v[b].fn.apply(v[b].context,x)}}return!0},s.prototype.on=function(l,h,f){return o(this,l,h,f,!1)},s.prototype.once=function(l,h,f){return o(this,l,h,f,!0)},s.prototype.removeListener=function(l,h,f,c){var d=t?t+l:l;if(!this._events[d])return this;if(!h)return a(this,d),this;var _=this._events[d];if(_.fn)_.fn===h&&(!c||_.once)&&(!f||_.context===f)&&a(this,d);else{for(var p=0,v=[],m=_.length;p<m;p++)(_[p].fn!==h||c&&!_[p].once||f&&_[p].context!==f)&&v.push(_[p]);v.length?this._events[d]=v.length===1?v[0]:v:a(this,d)}return this},s.prototype.removeAllListeners=function(l){var h;return l?(h=t?t+l:l,this._events[h]&&a(this,h)):(this._events=new i,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=t,s.EventEmitter=s,r.exports=s})(Mu);var ni=Mu.exports,_o={exports:{}};_o.exports=qi;_o.exports.default=qi;function qi(r,e,t){t=t||2;var i=e&&e.length,n=i?e[0]*t:r.length,o=Bu(r,0,n,t,!0),a=[];if(!o||o.next===o.prev)return a;var s,u,l,h,f,c,d;if(i&&(o=Bd(r,e,o,t)),r.length>80*t){s=l=r[0],u=h=r[1];for(var _=t;_<n;_+=t)f=r[_],c=r[_+1],f<s&&(s=f),c<u&&(u=c),f>l&&(l=f),c>h&&(h=c);d=Math.max(l-s,h-u),d=d!==0?1/d:0}return oi(o,a,t,s,u,d),a}function Bu(r,e,t,i,n){var o,a;if(n===go(r,e,t,i)>0)for(o=e;o<t;o+=i)a=ku(o,r[o],r[o+1],a);else for(o=t-i;o>=e;o-=i)a=ku(o,r[o],r[o+1],a);return a&&Ki(a,a.next)&&(si(a),a=a.next),a}function Ue(r,e){if(!r)return r;e||(e=r);var t=r,i;do if(i=!1,!t.steiner&&(Ki(t,t.next)||ht(t.prev,t,t.next)===0)){if(si(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function oi(r,e,t,i,n,o,a){if(!!r){!a&&o&&Hd(r,i,n,o);for(var s=r,u,l;r.prev!==r.next;){if(u=r.prev,l=r.next,o?Ud(r,i,n,o):Fd(r)){e.push(u.i/t),e.push(r.i/t),e.push(l.i/t),si(r),r=l.next,s=l.next;continue}if(r=l,r===s){a?a===1?(r=Ld(Ue(r),e,t),oi(r,e,t,i,n,o,2)):a===2&&Md(r,e,t,i,n,o):oi(Ue(r),e,t,i,n,o,1);break}}}}function Fd(r){var e=r.prev,t=r,i=r.next;if(ht(e,t,i)>=0)return!1;for(var n=r.next.next;n!==r.prev;){if(Ar(e.x,e.y,t.x,t.y,i.x,i.y,n.x,n.y)&&ht(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function Ud(r,e,t,i){var n=r.prev,o=r,a=r.next;if(ht(n,o,a)>=0)return!1;for(var s=n.x<o.x?n.x<a.x?n.x:a.x:o.x<a.x?o.x:a.x,u=n.y<o.y?n.y<a.y?n.y:a.y:o.y<a.y?o.y:a.y,l=n.x>o.x?n.x>a.x?n.x:a.x:o.x>a.x?o.x:a.x,h=n.y>o.y?n.y>a.y?n.y:a.y:o.y>a.y?o.y:a.y,f=vo(s,u,e,t,i),c=vo(l,h,e,t,i),d=r.prevZ,_=r.nextZ;d&&d.z>=f&&_&&_.z<=c;){if(d!==r.prev&&d!==r.next&&Ar(n.x,n.y,o.x,o.y,a.x,a.y,d.x,d.y)&&ht(d.prev,d,d.next)>=0||(d=d.prevZ,_!==r.prev&&_!==r.next&&Ar(n.x,n.y,o.x,o.y,a.x,a.y,_.x,_.y)&&ht(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;d&&d.z>=f;){if(d!==r.prev&&d!==r.next&&Ar(n.x,n.y,o.x,o.y,a.x,a.y,d.x,d.y)&&ht(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;_&&_.z<=c;){if(_!==r.prev&&_!==r.next&&Ar(n.x,n.y,o.x,o.y,a.x,a.y,_.x,_.y)&&ht(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ld(r,e,t){var i=r;do{var n=i.prev,o=i.next.next;!Ki(n,o)&&Gu(n,i,i.next,o)&&ai(n,o)&&ai(o,n)&&(e.push(n.i/t),e.push(i.i/t),e.push(o.i/t),si(i),si(i.next),i=r=o),i=i.next}while(i!==r);return Ue(i)}function Md(r,e,t,i,n,o){var a=r;do{for(var s=a.next.next;s!==a.prev;){if(a.i!==s.i&&Vd(a,s)){var u=Du(a,s);a=Ue(a,a.next),u=Ue(u,u.next),oi(a,e,t,i,n,o),oi(u,e,t,i,n,o);return}s=s.next}a=a.next}while(a!==r)}function Bd(r,e,t,i){var n=[],o,a,s,u,l;for(o=0,a=e.length;o<a;o++)s=e[o]*i,u=o<a-1?e[o+1]*i:r.length,l=Bu(r,s,u,i,!1),l===l.next&&(l.steiner=!0),n.push(zd(l));for(n.sort(Gd),o=0;o<n.length;o++)t=Dd(n[o],t),t=Ue(t,t.next);return t}function Gd(r,e){return r.x-e.x}function Dd(r,e){var t=kd(r,e);if(!t)return e;var i=Du(t,r),n=Ue(t,t.next);return Ue(i,i.next),e===t?n:e}function kd(r,e){var t=e,i=r.x,n=r.y,o=-1/0,a;do{if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){var s=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(s<=i&&s>o){if(o=s,s===i){if(n===t.y)return t;if(n===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(i===o)return a;var u=a,l=a.x,h=a.y,f=1/0,c;t=a;do i>=t.x&&t.x>=l&&i!==t.x&&Ar(n<h?i:o,n,l,h,n<h?o:i,n,t.x,t.y)&&(c=Math.abs(n-t.y)/(i-t.x),ai(t,r)&&(c<f||c===f&&(t.x>a.x||t.x===a.x&&Xd(a,t)))&&(a=t,f=c)),t=t.next;while(t!==u);return a}function Xd(r,e){return ht(r.prev,r,e.prev)<0&&ht(e.next,r,r.next)<0}function Hd(r,e,t,i){var n=r;do n.z===null&&(n.z=vo(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,jd(n)}function jd(r){var e,t,i,n,o,a,s,u,l=1;do{for(t=r,r=null,o=null,a=0;t;){for(a++,i=t,s=0,e=0;e<l&&(s++,i=i.nextZ,!!i);e++);for(u=l;s>0||u>0&&i;)s!==0&&(u===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,s--):(n=i,i=i.nextZ,u--),o?o.nextZ=n:r=n,n.prevZ=o,o=n;t=i}o.nextZ=null,l*=2}while(a>1);return r}function vo(r,e,t,i,n){return r=32767*(r-t)*n,e=32767*(e-i)*n,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function zd(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Ar(r,e,t,i,n,o,a,s){return(n-a)*(e-s)-(r-a)*(o-s)>=0&&(r-a)*(i-s)-(t-a)*(e-s)>=0&&(t-a)*(o-s)-(n-a)*(i-s)>=0}function Vd(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!$d(r,e)&&(ai(r,e)&&ai(e,r)&&Wd(r,e)&&(ht(r.prev,r,e.prev)||ht(r,e.prev,e))||Ki(r,e)&&ht(r.prev,r,r.next)>0&&ht(e.prev,e,e.next)>0)}function ht(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ki(r,e){return r.x===e.x&&r.y===e.y}function Gu(r,e,t,i){var n=Ji(ht(r,e,t)),o=Ji(ht(r,e,i)),a=Ji(ht(t,i,r)),s=Ji(ht(t,i,e));return!!(n!==o&&a!==s||n===0&&Zi(r,t,e)||o===0&&Zi(r,i,e)||a===0&&Zi(t,r,i)||s===0&&Zi(t,e,i))}function Zi(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Ji(r){return r>0?1:r<0?-1:0}function $d(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Gu(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ai(r,e){return ht(r.prev,r,r.next)<0?ht(r,e,r.next)>=0&&ht(r,r.prev,e)>=0:ht(r,e,r.prev)<0||ht(r,r.next,e)<0}function Wd(r,e){var t=r,i=!1,n=(r.x+e.x)/2,o=(r.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&n<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function Du(r,e){var t=new mo(r.i,r.x,r.y),i=new mo(e.i,e.x,e.y),n=r.next,o=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function ku(r,e,t,i){var n=new mo(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function si(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function mo(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}qi.deviation=function(r,e,t,i){var n=e&&e.length,o=n?e[0]*t:r.length,a=Math.abs(go(r,0,o,t));if(n)for(var s=0,u=e.length;s<u;s++){var l=e[s]*t,h=s<u-1?e[s+1]*t:r.length;a-=Math.abs(go(r,l,h,t))}var f=0;for(s=0;s<i.length;s+=3){var c=i[s]*t,d=i[s+1]*t,_=i[s+2]*t;f+=Math.abs((r[c]-r[_])*(r[d+1]-r[c+1])-(r[c]-r[d])*(r[_+1]-r[c+1]))}return a===0&&f===0?0:Math.abs((f-a)/a)};function go(r,e,t,i){for(var n=0,o=e,a=t-i;o<t;o+=i)n+=(r[a]-r[o])*(r[o+1]+r[a+1]),a=o;return n}qi.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},i=0,n=0;n<r.length;n++){for(var o=0;o<r[n].length;o++)for(var a=0;a<e;a++)t.vertices.push(r[n][o][a]);n>0&&(i+=r[n-1].length,t.holes.push(i))}return t};var Xu=_o.exports,yo={exports:{}};/*! https://mths.be/punycode v1.3.2 by @mathias */(function(r,e){(function(t){var i=e&&!e.nodeType&&e,n=r&&!r.nodeType&&r,o=typeof io=="object"&&io;(o.global===o||o.window===o||o.self===o)&&(t=o);var a,s=2147483647,u=36,l=1,h=26,f=38,c=700,d=72,_=128,p="-",v=/^xn--/,m=/[^\x20-\x7E]/,x=/[\x2E\u3002\uFF0E\uFF61]/g,b={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},C=u-l,y=Math.floor,g=String.fromCharCode,E;function P(R){throw RangeError(b[R])}function T(R,B){for(var j=R.length,z=[];j--;)z[j]=B(R[j]);return z}function I(R,B){var j=R.split("@"),z="";j.length>1&&(z=j[0]+"@",R=j[1]),R=R.replace(x,".");var Y=R.split("."),dt=T(Y,B).join(".");return z+dt}function N(R){for(var B=[],j=0,z=R.length,Y,dt;j<z;)Y=R.charCodeAt(j++),Y>=55296&&Y<=56319&&j<z?(dt=R.charCodeAt(j++),(dt&64512)==56320?B.push(((Y&1023)<<10)+(dt&1023)+65536):(B.push(Y),j--)):B.push(Y);return B}function F(R){return T(R,function(B){var j="";return B>65535&&(B-=65536,j+=g(B>>>10&1023|55296),B=56320|B&1023),j+=g(B),j}).join("")}function L(R){return R-48<10?R-22:R-65<26?R-65:R-97<26?R-97:u}function H(R,B){return R+22+75*(R<26)-((B!=0)<<5)}function O(R,B,j){var z=0;for(R=j?y(R/c):R>>1,R+=y(R/B);R>C*h>>1;z+=u)R=y(R/C);return y(z+(C+1)*R/(R+f))}function S(R){var B=[],j=R.length,z,Y=0,dt=_,et=d,bt,Et,pt,mt,tt,ut,W,Ut,Pt;for(bt=R.lastIndexOf(p),bt<0&&(bt=0),Et=0;Et<bt;++Et)R.charCodeAt(Et)>=128&&P("not-basic"),B.push(R.charCodeAt(Et));for(pt=bt>0?bt+1:0;pt<j;){for(mt=Y,tt=1,ut=u;pt>=j&&P("invalid-input"),W=L(R.charCodeAt(pt++)),(W>=u||W>y((s-Y)/tt))&&P("overflow"),Y+=W*tt,Ut=ut<=et?l:ut>=et+h?h:ut-et,!(W<Ut);ut+=u)Pt=u-Ut,tt>y(s/Pt)&&P("overflow"),tt*=Pt;z=B.length+1,et=O(Y-mt,z,mt==0),y(Y/z)>s-dt&&P("overflow"),dt+=y(Y/z),Y%=z,B.splice(Y++,0,dt)}return F(B)}function G(R){var B,j,z,Y,dt,et,bt,Et,pt,mt,tt,ut=[],W,Ut,Pt,K;for(R=N(R),W=R.length,B=_,j=0,dt=d,et=0;et<W;++et)tt=R[et],tt<128&&ut.push(g(tt));for(z=Y=ut.length,Y&&ut.push(p);z<W;){for(bt=s,et=0;et<W;++et)tt=R[et],tt>=B&&tt<bt&&(bt=tt);for(Ut=z+1,bt-B>y((s-j)/Ut)&&P("overflow"),j+=(bt-B)*Ut,B=bt,et=0;et<W;++et)if(tt=R[et],tt<B&&++j>s&&P("overflow"),tt==B){for(Et=j,pt=u;mt=pt<=dt?l:pt>=dt+h?h:pt-dt,!(Et<mt);pt+=u)K=Et-mt,Pt=u-mt,ut.push(g(H(mt+K%Pt,0))),Et=y(K/Pt);ut.push(g(H(Et,0))),dt=O(j,Ut,z==Y),j=0,++z}++j,++B}return ut.join("")}function ot(R){return I(R,function(B){return v.test(B)?S(B.slice(4).toLowerCase()):B})}function lt(R){return I(R,function(B){return m.test(B)?"xn--"+G(B):B})}if(a={version:"1.3.2",ucs2:{decode:N,encode:F},decode:S,encode:G,toASCII:lt,toUnicode:ot},i&&n)if(r.exports==i)n.exports=a;else for(E in a)a.hasOwnProperty(E)&&(i[E]=a[E]);else t.punycode=a})(io)})(yo,yo.exports);var Yd={isString:function(r){return typeof r=="string"},isObject:function(r){return typeof r=="object"&&r!==null},isNull:function(r){return r===null},isNullOrUndefined:function(r){return r==null}},ui={};function qd(r,e){return Object.prototype.hasOwnProperty.call(r,e)}var Kd=function(r,e,t,i){e=e||"&",t=t||"=";var n={};if(typeof r!="string"||r.length===0)return n;var o=/\+/g;r=r.split(e);var a=1e3;i&&typeof i.maxKeys=="number"&&(a=i.maxKeys);var s=r.length;a>0&&s>a&&(s=a);for(var u=0;u<s;++u){var l=r[u].replace(o,"%20"),h=l.indexOf(t),f,c,d,_;h>=0?(f=l.substr(0,h),c=l.substr(h+1)):(f=l,c=""),d=decodeURIComponent(f),_=decodeURIComponent(c),qd(n,d)?Array.isArray(n[d])?n[d].push(_):n[d]=[n[d],_]:n[d]=_}return n},li=function(r){switch(typeof r){case"string":return r;case"boolean":return r?"true":"false";case"number":return isFinite(r)?r:"";default:return""}},Zd=function(r,e,t,i){return e=e||"&",t=t||"=",r===null&&(r=void 0),typeof r=="object"?Object.keys(r).map(function(n){var o=encodeURIComponent(li(n))+t;return Array.isArray(r[n])?r[n].map(function(a){return o+encodeURIComponent(li(a))}).join(e):o+encodeURIComponent(li(r[n]))}).join(e):i?encodeURIComponent(li(i))+t+encodeURIComponent(li(r)):""};ui.decode=ui.parse=Kd;ui.encode=ui.stringify=Zd;var Jd=yo.exports,fe=Yd,Qd=Qi,tp=fp,ep=hp;function ee(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var rp=/^([a-z0-9.+-]+:)/i,ip=/:[0-9]*$/,np=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,op=["<",">",'"',"`"," ","\r",`
`,"	"],ap=["{","}","|","\\","^","`"].concat(op),xo=["'"].concat(ap),Hu=["%","/","?",";","#"].concat(xo),ju=["/","?","#"],sp=255,zu=/^[+a-z0-9A-Z_-]{0,63}$/,up=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,lp={javascript:!0,"javascript:":!0},bo={javascript:!0,"javascript:":!0},Rr={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},To=ui;function Qi(r,e,t){if(r&&fe.isObject(r)&&r instanceof ee)return r;var i=new ee;return i.parse(r,e,t),i}ee.prototype.parse=function(r,e,t){if(!fe.isString(r))throw new TypeError("Parameter 'url' must be a string, not "+typeof r);var i=r.indexOf("?"),n=i!==-1&&i<r.indexOf("#")?"?":"#",o=r.split(n),a=/\\/g;o[0]=o[0].replace(a,"/"),r=o.join(n);var s=r;if(s=s.trim(),!t&&r.split("#").length===1){var u=np.exec(s);if(u)return this.path=s,this.href=s,this.pathname=u[1],u[2]?(this.search=u[2],e?this.query=To.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var l=rp.exec(s);if(l){l=l[0];var h=l.toLowerCase();this.protocol=h,s=s.substr(l.length)}if(t||l||s.match(/^\/\/[^@\/]+@[^@\/]+/)){var f=s.substr(0,2)==="//";f&&!(l&&bo[l])&&(s=s.substr(2),this.slashes=!0)}if(!bo[l]&&(f||l&&!Rr[l])){for(var c=-1,d=0;d<ju.length;d++){var _=s.indexOf(ju[d]);_!==-1&&(c===-1||_<c)&&(c=_)}var p,v;c===-1?v=s.lastIndexOf("@"):v=s.lastIndexOf("@",c),v!==-1&&(p=s.slice(0,v),s=s.slice(v+1),this.auth=decodeURIComponent(p)),c=-1;for(var d=0;d<Hu.length;d++){var _=s.indexOf(Hu[d]);_!==-1&&(c===-1||_<c)&&(c=_)}c===-1&&(c=s.length),this.host=s.slice(0,c),s=s.slice(c),this.parseHost(),this.hostname=this.hostname||"";var m=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!m)for(var x=this.hostname.split(/\./),d=0,b=x.length;d<b;d++){var C=x[d];if(!!C&&!C.match(zu)){for(var y="",g=0,E=C.length;g<E;g++)C.charCodeAt(g)>127?y+="x":y+=C[g];if(!y.match(zu)){var P=x.slice(0,d),T=x.slice(d+1),I=C.match(up);I&&(P.push(I[1]),T.unshift(I[2])),T.length&&(s="/"+T.join(".")+s),this.hostname=P.join(".");break}}}this.hostname.length>sp?this.hostname="":this.hostname=this.hostname.toLowerCase(),m||(this.hostname=Jd.toASCII(this.hostname));var N=this.port?":"+this.port:"",F=this.hostname||"";this.host=F+N,this.href+=this.host,m&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),s[0]!=="/"&&(s="/"+s))}if(!lp[h])for(var d=0,b=xo.length;d<b;d++){var L=xo[d];if(s.indexOf(L)!==-1){var H=encodeURIComponent(L);H===L&&(H=escape(L)),s=s.split(L).join(H)}}var O=s.indexOf("#");O!==-1&&(this.hash=s.substr(O),s=s.slice(0,O));var S=s.indexOf("?");if(S!==-1?(this.search=s.substr(S),this.query=s.substr(S+1),e&&(this.query=To.parse(this.query)),s=s.slice(0,S)):e&&(this.search="",this.query={}),s&&(this.pathname=s),Rr[h]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var N=this.pathname||"",G=this.search||"";this.path=N+G}return this.href=this.format(),this};function hp(r){return fe.isString(r)&&(r=Qi(r)),r instanceof ee?r.format():ee.prototype.format.call(r)}ee.prototype.format=function(){var r=this.auth||"";r&&(r=encodeURIComponent(r),r=r.replace(/%3A/i,":"),r+="@");var e=this.protocol||"",t=this.pathname||"",i=this.hash||"",n=!1,o="";this.host?n=r+this.host:this.hostname&&(n=r+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(n+=":"+this.port)),this.query&&fe.isObject(this.query)&&Object.keys(this.query).length&&(o=To.stringify(this.query));var a=this.search||o&&"?"+o||"";return e&&e.substr(-1)!==":"&&(e+=":"),this.slashes||(!e||Rr[e])&&n!==!1?(n="//"+(n||""),t&&t.charAt(0)!=="/"&&(t="/"+t)):n||(n=""),i&&i.charAt(0)!=="#"&&(i="#"+i),a&&a.charAt(0)!=="?"&&(a="?"+a),t=t.replace(/[?#]/g,function(s){return encodeURIComponent(s)}),a=a.replace("#","%23"),e+n+t+a+i};function fp(r,e){return Qi(r,!1,!0).resolve(e)}ee.prototype.resolve=function(r){return this.resolveObject(Qi(r,!1,!0)).format()};ee.prototype.resolveObject=function(r){if(fe.isString(r)){var e=new ee;e.parse(r,!1,!0),r=e}for(var t=new ee,i=Object.keys(this),n=0;n<i.length;n++){var o=i[n];t[o]=this[o]}if(t.hash=r.hash,r.href==="")return t.href=t.format(),t;if(r.slashes&&!r.protocol){for(var a=Object.keys(r),s=0;s<a.length;s++){var u=a[s];u!=="protocol"&&(t[u]=r[u])}return Rr[t.protocol]&&t.hostname&&!t.pathname&&(t.path=t.pathname="/"),t.href=t.format(),t}if(r.protocol&&r.protocol!==t.protocol){if(!Rr[r.protocol]){for(var l=Object.keys(r),h=0;h<l.length;h++){var f=l[h];t[f]=r[f]}return t.href=t.format(),t}if(t.protocol=r.protocol,!r.host&&!bo[r.protocol]){for(var b=(r.pathname||"").split("/");b.length&&!(r.host=b.shift()););r.host||(r.host=""),r.hostname||(r.hostname=""),b[0]!==""&&b.unshift(""),b.length<2&&b.unshift(""),t.pathname=b.join("/")}else t.pathname=r.pathname;if(t.search=r.search,t.query=r.query,t.host=r.host||"",t.auth=r.auth,t.hostname=r.hostname||r.host,t.port=r.port,t.pathname||t.search){var c=t.pathname||"",d=t.search||"";t.path=c+d}return t.slashes=t.slashes||r.slashes,t.href=t.format(),t}var _=t.pathname&&t.pathname.charAt(0)==="/",p=r.host||r.pathname&&r.pathname.charAt(0)==="/",v=p||_||t.host&&r.pathname,m=v,x=t.pathname&&t.pathname.split("/")||[],b=r.pathname&&r.pathname.split("/")||[],C=t.protocol&&!Rr[t.protocol];if(C&&(t.hostname="",t.port=null,t.host&&(x[0]===""?x[0]=t.host:x.unshift(t.host)),t.host="",r.protocol&&(r.hostname=null,r.port=null,r.host&&(b[0]===""?b[0]=r.host:b.unshift(r.host)),r.host=null),v=v&&(b[0]===""||x[0]==="")),p)t.host=r.host||r.host===""?r.host:t.host,t.hostname=r.hostname||r.hostname===""?r.hostname:t.hostname,t.search=r.search,t.query=r.query,x=b;else if(b.length)x||(x=[]),x.pop(),x=x.concat(b),t.search=r.search,t.query=r.query;else if(!fe.isNullOrUndefined(r.search)){if(C){t.hostname=t.host=x.shift();var y=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;y&&(t.auth=y.shift(),t.host=t.hostname=y.shift())}return t.search=r.search,t.query=r.query,(!fe.isNull(t.pathname)||!fe.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!x.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var g=x.slice(-1)[0],E=(t.host||r.host||x.length>1)&&(g==="."||g==="..")||g==="",P=0,T=x.length;T>=0;T--)g=x[T],g==="."?x.splice(T,1):g===".."?(x.splice(T,1),P++):P&&(x.splice(T,1),P--);if(!v&&!m)for(;P--;P)x.unshift("..");v&&x[0]!==""&&(!x[0]||x[0].charAt(0)!=="/")&&x.unshift(""),E&&x.join("/").substr(-1)!=="/"&&x.push("");var I=x[0]===""||x[0]&&x[0].charAt(0)==="/";if(C){t.hostname=t.host=I?"":x.length?x.shift():"";var y=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;y&&(t.auth=y.shift(),t.host=t.hostname=y.shift())}return v=v||t.host&&x.length,v&&!I&&x.unshift(""),x.length?t.pathname=x.join("/"):(t.pathname=null,t.path=null),(!fe.isNull(t.pathname)||!fe.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=r.auth||t.auth,t.slashes=t.slashes||r.slashes,t.href=t.format(),t};ee.prototype.parseHost=function(){var r=this.host,e=ip.exec(r);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),r=r.substr(0,r.length-e.length)),r&&(this.hostname=r)};/*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ce;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(Ce||(Ce={}));var hi;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(hi||(hi={}));var tn;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(tn||(tn={}));var D;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(D||(D={}));var re;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(re||(re={}));var U;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(U||(U={}));var Qe;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Qe||(Qe={}));var X;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(X||(X={}));var en;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(en||(en={}));var Wt;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(Wt||(Wt={}));var we;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(we||(we={}));var ce;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(ce||(ce={}));var de;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(de||(de={}));var Le;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(Le||(Le={}));var Co;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(Co||(Co={}));var pe;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(pe||(pe={}));var Lt;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(Lt||(Lt={}));var Tt;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(Tt||(Tt={}));var _e;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(_e||(_e={}));/*!
 * @pixi/utils - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/utils is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Sr={parse:Qd,format:ep,resolve:tp};M.RETINA_PREFIX=/@([0-9\.]+)x/;M.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var Vu=!1,$u="6.2.2";function cp(r){var e;if(!Vu){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var t=[`
 %c %c %c PixiJS `+$u+" - \u2730 "+r+` \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 

`,"background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];(e=self.console).log.apply(e,t)}else self.console&&self.console.log("PixiJS "+$u+" - "+r+" - http://www.pixijs.com/");Vu=!0}}var wo;function dp(){return typeof wo=="undefined"&&(wo=function(){var e={stencil:!0,failIfMajorPerformanceCaveat:M.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!self.WebGLRenderingContext)return!1;var t=document.createElement("canvas"),i=t.getContext("webgl",e)||t.getContext("experimental-webgl",e),n=!!(i&&i.getContextAttributes().stencil);if(i){var o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,n}catch{return!1}}()),wo}var pp="#f0f8ff",_p="#faebd7",vp="#00ffff",mp="#7fffd4",gp="#f0ffff",yp="#f5f5dc",xp="#ffe4c4",bp="#000000",Tp="#ffebcd",Cp="#0000ff",wp="#8a2be2",Ep="#a52a2a",Pp="#deb887",Ip="#5f9ea0",Ap="#7fff00",Rp="#d2691e",Sp="#ff7f50",Op="#6495ed",Np="#fff8dc",Fp="#dc143c",Up="#00ffff",Lp="#00008b",Mp="#008b8b",Bp="#b8860b",Gp="#a9a9a9",Dp="#006400",kp="#a9a9a9",Xp="#bdb76b",Hp="#8b008b",jp="#556b2f",zp="#ff8c00",Vp="#9932cc",$p="#8b0000",Wp="#e9967a",Yp="#8fbc8f",qp="#483d8b",Kp="#2f4f4f",Zp="#2f4f4f",Jp="#00ced1",Qp="#9400d3",t_="#ff1493",e_="#00bfff",r_="#696969",i_="#696969",n_="#1e90ff",o_="#b22222",a_="#fffaf0",s_="#228b22",u_="#ff00ff",l_="#dcdcdc",h_="#f8f8ff",f_="#daa520",c_="#ffd700",d_="#808080",p_="#008000",__="#adff2f",v_="#808080",m_="#f0fff0",g_="#ff69b4",y_="#cd5c5c",x_="#4b0082",b_="#fffff0",T_="#f0e68c",C_="#fff0f5",w_="#e6e6fa",E_="#7cfc00",P_="#fffacd",I_="#add8e6",A_="#f08080",R_="#e0ffff",S_="#fafad2",O_="#d3d3d3",N_="#90ee90",F_="#d3d3d3",U_="#ffb6c1",L_="#ffa07a",M_="#20b2aa",B_="#87cefa",G_="#778899",D_="#778899",k_="#b0c4de",X_="#ffffe0",H_="#00ff00",j_="#32cd32",z_="#faf0e6",V_="#ff00ff",$_="#800000",W_="#66cdaa",Y_="#0000cd",q_="#ba55d3",K_="#9370db",Z_="#3cb371",J_="#7b68ee",Q_="#00fa9a",tv="#48d1cc",ev="#c71585",rv="#191970",iv="#f5fffa",nv="#ffe4e1",ov="#ffe4b5",av="#ffdead",sv="#000080",uv="#fdf5e6",lv="#808000",hv="#6b8e23",fv="#ffa500",cv="#ff4500",dv="#da70d6",pv="#eee8aa",_v="#98fb98",vv="#afeeee",mv="#db7093",gv="#ffefd5",yv="#ffdab9",xv="#cd853f",bv="#ffc0cb",Tv="#dda0dd",Cv="#b0e0e6",wv="#800080",Ev="#663399",Pv="#ff0000",Iv="#bc8f8f",Av="#4169e1",Rv="#8b4513",Sv="#fa8072",Ov="#f4a460",Nv="#2e8b57",Fv="#fff5ee",Uv="#a0522d",Lv="#c0c0c0",Mv="#87ceeb",Bv="#6a5acd",Gv="#708090",Dv="#708090",kv="#fffafa",Xv="#00ff7f",Hv="#4682b4",jv="#d2b48c",zv="#008080",Vv="#d8bfd8",$v="#ff6347",Wv="#40e0d0",Yv="#ee82ee",qv="#f5deb3",Kv="#ffffff",Zv="#f5f5f5",Jv="#ffff00",Qv="#9acd32",tm={aliceblue:pp,antiquewhite:_p,aqua:vp,aquamarine:mp,azure:gp,beige:yp,bisque:xp,black:bp,blanchedalmond:Tp,blue:Cp,blueviolet:wp,brown:Ep,burlywood:Pp,cadetblue:Ip,chartreuse:Ap,chocolate:Rp,coral:Sp,cornflowerblue:Op,cornsilk:Np,crimson:Fp,cyan:Up,darkblue:Lp,darkcyan:Mp,darkgoldenrod:Bp,darkgray:Gp,darkgreen:Dp,darkgrey:kp,darkkhaki:Xp,darkmagenta:Hp,darkolivegreen:jp,darkorange:zp,darkorchid:Vp,darkred:$p,darksalmon:Wp,darkseagreen:Yp,darkslateblue:qp,darkslategray:Kp,darkslategrey:Zp,darkturquoise:Jp,darkviolet:Qp,deeppink:t_,deepskyblue:e_,dimgray:r_,dimgrey:i_,dodgerblue:n_,firebrick:o_,floralwhite:a_,forestgreen:s_,fuchsia:u_,gainsboro:l_,ghostwhite:h_,goldenrod:f_,gold:c_,gray:d_,green:p_,greenyellow:__,grey:v_,honeydew:m_,hotpink:g_,indianred:y_,indigo:x_,ivory:b_,khaki:T_,lavenderblush:C_,lavender:w_,lawngreen:E_,lemonchiffon:P_,lightblue:I_,lightcoral:A_,lightcyan:R_,lightgoldenrodyellow:S_,lightgray:O_,lightgreen:N_,lightgrey:F_,lightpink:U_,lightsalmon:L_,lightseagreen:M_,lightskyblue:B_,lightslategray:G_,lightslategrey:D_,lightsteelblue:k_,lightyellow:X_,lime:H_,limegreen:j_,linen:z_,magenta:V_,maroon:$_,mediumaquamarine:W_,mediumblue:Y_,mediumorchid:q_,mediumpurple:K_,mediumseagreen:Z_,mediumslateblue:J_,mediumspringgreen:Q_,mediumturquoise:tv,mediumvioletred:ev,midnightblue:rv,mintcream:iv,mistyrose:nv,moccasin:ov,navajowhite:av,navy:sv,oldlace:uv,olive:lv,olivedrab:hv,orange:fv,orangered:cv,orchid:dv,palegoldenrod:pv,palegreen:_v,paleturquoise:vv,palevioletred:mv,papayawhip:gv,peachpuff:yv,peru:xv,pink:bv,plum:Tv,powderblue:Cv,purple:wv,rebeccapurple:Ev,red:Pv,rosybrown:Iv,royalblue:Av,saddlebrown:Rv,salmon:Sv,sandybrown:Ov,seagreen:Nv,seashell:Fv,sienna:Uv,silver:Lv,skyblue:Mv,slateblue:Bv,slategray:Gv,slategrey:Dv,snow:kv,springgreen:Xv,steelblue:Hv,tan:jv,teal:zv,thistle:Vv,tomato:$v,turquoise:Wv,violet:Yv,wheat:qv,white:Kv,whitesmoke:Zv,yellow:Jv,yellowgreen:Qv};function Ot(r,e){return e===void 0&&(e=[]),e[0]=(r>>16&255)/255,e[1]=(r>>8&255)/255,e[2]=(r&255)/255,e}function Wu(r){var e=r.toString(16);return e="000000".substr(0,6-e.length)+e,"#"+e}function Yu(r){return typeof r=="string"&&(r=tm[r.toLowerCase()]||r,r[0]==="#"&&(r=r.substr(1))),parseInt(r,16)}function ie(r){return(r[0]*255<<16)+(r[1]*255<<8)+(r[2]*255|0)}function em(){for(var r=[],e=[],t=0;t<32;t++)r[t]=t,e[t]=t;r[D.NORMAL_NPM]=D.NORMAL,r[D.ADD_NPM]=D.ADD,r[D.SCREEN_NPM]=D.SCREEN,e[D.NORMAL]=D.NORMAL_NPM,e[D.ADD]=D.ADD_NPM,e[D.SCREEN]=D.SCREEN_NPM;var i=[];return i.push(e),i.push(r),i}var qu=em();function Ku(r,e){return qu[e?1:0][r]}function rm(r,e,t,i){return t=t||new Float32Array(4),i||i===void 0?(t[0]=r[0]*e,t[1]=r[1]*e,t[2]=r[2]*e):(t[0]=r[0],t[1]=r[1],t[2]=r[2]),t[3]=e,t}function Eo(r,e){if(e===1)return(e*255<<24)+r;if(e===0)return 0;var t=r>>16&255,i=r>>8&255,n=r&255;return t=t*e+.5|0,i=i*e+.5|0,n=n*e+.5|0,(e*255<<24)+(t<<16)+(i<<8)+n}function Zu(r,e,t,i){return t=t||new Float32Array(4),t[0]=(r>>16&255)/255,t[1]=(r>>8&255)/255,t[2]=(r&255)/255,(i||i===void 0)&&(t[0]*=e,t[1]*=e,t[2]*=e),t[3]=e,t}function im(r,e){e===void 0&&(e=null);var t=r*6;if(e=e||new Uint16Array(t),e.length!==t)throw new Error("Out buffer length is incorrect, got "+e.length+" and expected "+t);for(var i=0,n=0;i<t;i+=6,n+=4)e[i+0]=n+0,e[i+1]=n+1,e[i+2]=n+2,e[i+3]=n+0,e[i+4]=n+2,e[i+5]=n+3;return e}function Ju(r){if(r.BYTES_PER_ELEMENT===4)return r instanceof Float32Array?"Float32Array":r instanceof Uint32Array?"Uint32Array":"Int32Array";if(r.BYTES_PER_ELEMENT===2){if(r instanceof Uint16Array)return"Uint16Array"}else if(r.BYTES_PER_ELEMENT===1&&r instanceof Uint8Array)return"Uint8Array";return null}function rn(r){return r+=r===0?1:0,--r,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r+1}function Qu(r){return!(r&r-1)&&!!r}function tl(r){var e=(r>65535?1:0)<<4;r>>>=e;var t=(r>255?1:0)<<3;return r>>>=t,e|=t,t=(r>15?1:0)<<2,r>>>=t,e|=t,t=(r>3?1:0)<<1,r>>>=t,e|=t,e|r>>1}function Or(r,e,t){var i=r.length,n;if(!(e>=i||t===0)){t=e+t>i?i-e:t;var o=i-t;for(n=e;n<o;++n)r[n]=r[n+t];r.length=o}}function Nr(r){return r===0?0:r<0?-1:1}var nm=0;function tr(){return++nm}var el={};function er(r,e,t){if(t===void 0&&(t=3),!el[e]){var i=new Error().stack;typeof i=="undefined"?console.warn("PixiJS Deprecation Warning: ",e+`
Deprecated since v`+r):(i=i.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",e+`
Deprecated since v`+r),console.warn(i),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",e+`
Deprecated since v`+r),console.warn(i))),el[e]=!0}}var rl={},Ee=Object.create(null),rr=Object.create(null),il=function(){function r(e,t,i){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.resolution=i||M.RESOLUTION,this.resize(e,t)}return r.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},r.prototype.resize=function(e,t){this.canvas.width=Math.round(e*this.resolution),this.canvas.height=Math.round(t*this.resolution)},r.prototype.destroy=function(){this.context=null,this.canvas=null},Object.defineProperty(r.prototype,"width",{get:function(){return this.canvas.width},set:function(e){this.canvas.width=Math.round(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.canvas.height},set:function(e){this.canvas.height=Math.round(e)},enumerable:!1,configurable:!0}),r}();function om(r){var e=r.width,t=r.height,i=r.getContext("2d"),n=i.getImageData(0,0,e,t),o=n.data,a=o.length,s={top:null,left:null,right:null,bottom:null},u=null,l,h,f;for(l=0;l<a;l+=4)o[l+3]!==0&&(h=l/4%e,f=~~(l/4/e),s.top===null&&(s.top=f),(s.left===null||h<s.left)&&(s.left=h),(s.right===null||s.right<h)&&(s.right=h+1),(s.bottom===null||s.bottom<f)&&(s.bottom=f));return s.top!==null&&(e=s.right-s.left,t=s.bottom-s.top+1,u=i.getImageData(s.left,s.top,e,t)),{height:t,width:e,data:u}}var nn;function am(r,e){if(e===void 0&&(e=self.location),r.indexOf("data:")===0)return"";e=e||self.location,nn||(nn=document.createElement("a")),nn.href=r;var t=Sr.parse(nn.href),i=!t.port&&e.port===""||t.port===e.port;return t.hostname!==e.hostname||!i||t.protocol!==e.protocol?"anonymous":""}function on(r,e){var t=M.RETINA_PREFIX.exec(r);return t?parseFloat(t[1]):e!==void 0?e:1}/*!
 * @pixi/math - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var an=Math.PI*2,sm=180/Math.PI,ir=Math.PI/180,gt;(function(r){r[r.POLY=0]="POLY",r[r.RECT=1]="RECT",r[r.CIRC=2]="CIRC",r[r.ELIP=3]="ELIP",r[r.RREC=4]="RREC"})(gt||(gt={}));var Z=function(){function r(e,t,i,n){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=0),this.x=Number(e),this.y=Number(t),this.width=Number(i),this.height=Number(n),this.type=gt.RECT}return Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(r,"EMPTY",{get:function(){return new r(0,0,0,0)},enumerable:!1,configurable:!0}),r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height)},r.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this},r.prototype.copyTo=function(e){return e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e},r.prototype.contains=function(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height},r.prototype.pad=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),this.x-=e,this.y-=t,this.width+=e*2,this.height+=t*2,this},r.prototype.fit=function(e){var t=Math.max(this.x,e.x),i=Math.min(this.x+this.width,e.x+e.width),n=Math.max(this.y,e.y),o=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(i-t,0),this.y=n,this.height=Math.max(o-n,0),this},r.prototype.ceil=function(e,t){e===void 0&&(e=1),t===void 0&&(t=.001);var i=Math.ceil((this.x+this.width-t)*e)/e,n=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=i-this.x,this.height=n-this.y,this},r.prototype.enlarge=function(e){var t=Math.min(this.x,e.x),i=Math.max(this.x+this.width,e.x+e.width),n=Math.min(this.y,e.y),o=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=i-t,this.y=n,this.height=o-n,this},r.prototype.toString=function(){return"[@pixi/math:Rectangle x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},r}(),um=function(){function r(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.radius=i,this.type=gt.CIRC}return r.prototype.clone=function(){return new r(this.x,this.y,this.radius)},r.prototype.contains=function(e,t){if(this.radius<=0)return!1;var i=this.radius*this.radius,n=this.x-e,o=this.y-t;return n*=n,o*=o,n+o<=i},r.prototype.getBounds=function(){return new Z(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)},r.prototype.toString=function(){return"[@pixi/math:Circle x="+this.x+" y="+this.y+" radius="+this.radius+"]"},r}(),lm=function(){function r(e,t,i,n){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=0),this.x=e,this.y=t,this.width=i,this.height=n,this.type=gt.ELIP}return r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height)},r.prototype.contains=function(e,t){if(this.width<=0||this.height<=0)return!1;var i=(e-this.x)/this.width,n=(t-this.y)/this.height;return i*=i,n*=n,i+n<=1},r.prototype.getBounds=function(){return new Z(this.x-this.width,this.y-this.height,this.width,this.height)},r.prototype.toString=function(){return"[@pixi/math:Ellipse x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},r}(),sn=function(){function r(){for(var e=arguments,t=[],i=0;i<arguments.length;i++)t[i]=e[i];var n=Array.isArray(t[0])?t[0]:t;if(typeof n[0]!="number"){for(var o=[],a=0,s=n.length;a<s;a++)o.push(n[a].x,n[a].y);n=o}this.points=n,this.type=gt.POLY,this.closeStroke=!0}return r.prototype.clone=function(){var e=this.points.slice(),t=new r(e);return t.closeStroke=this.closeStroke,t},r.prototype.contains=function(e,t){for(var i=!1,n=this.points.length/2,o=0,a=n-1;o<n;a=o++){var s=this.points[o*2],u=this.points[o*2+1],l=this.points[a*2],h=this.points[a*2+1],f=u>t!=h>t&&e<(l-s)*((t-u)/(h-u))+s;f&&(i=!i)}return i},r.prototype.toString=function(){return"[@pixi/math:Polygon"+("closeStroke="+this.closeStroke)+("points="+this.points.reduce(function(e,t){return e+", "+t},"")+"]")},r}(),hm=function(){function r(e,t,i,n,o){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=0),o===void 0&&(o=20),this.x=e,this.y=t,this.width=i,this.height=n,this.radius=o,this.type=gt.RREC}return r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height,this.radius)},r.prototype.contains=function(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){var i=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+i&&t<=this.y+this.height-i||e>=this.x+i&&e<=this.x+this.width-i)return!0;var n=e-(this.x+i),o=t-(this.y+i),a=i*i;if(n*n+o*o<=a||(n=e-(this.x+this.width-i),n*n+o*o<=a)||(o=t-(this.y+this.height-i),n*n+o*o<=a)||(n=e-(this.x+i),n*n+o*o<=a))return!0}return!1},r.prototype.toString=function(){return"[@pixi/math:RoundedRectangle x="+this.x+" y="+this.y+("width="+this.width+" height="+this.height+" radius="+this.radius+"]")},r}(),J=function(){function r(e,t){e===void 0&&(e=0),t===void 0&&(t=0),this.x=0,this.y=0,this.x=e,this.y=t}return r.prototype.clone=function(){return new r(this.x,this.y)},r.prototype.copyFrom=function(e){return this.set(e.x,e.y),this},r.prototype.copyTo=function(e){return e.set(this.x,this.y),e},r.prototype.equals=function(e){return e.x===this.x&&e.y===this.y},r.prototype.set=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),this.x=e,this.y=t,this},r.prototype.toString=function(){return"[@pixi/math:Point x="+this.x+" y="+this.y+"]"},r}(),nr=function(){function r(e,t,i,n){i===void 0&&(i=0),n===void 0&&(n=0),this._x=i,this._y=n,this.cb=e,this.scope=t}return r.prototype.clone=function(e,t){return e===void 0&&(e=this.cb),t===void 0&&(t=this.scope),new r(e,t,this._x,this._y)},r.prototype.set=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),(this._x!==e||this._y!==t)&&(this._x=e,this._y=t,this.cb.call(this.scope)),this},r.prototype.copyFrom=function(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this.cb.call(this.scope)),this},r.prototype.copyTo=function(e){return e.set(this._x,this._y),e},r.prototype.equals=function(e){return e.x===this._x&&e.y===this._y},r.prototype.toString=function(){return"[@pixi/math:ObservablePoint x="+0+" y="+0+" scope="+this.scope+"]"},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},set:function(e){this._x!==e&&(this._x=e,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},set:function(e){this._y!==e&&(this._y=e,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),r}(),yt=function(){function r(e,t,i,n,o,a){e===void 0&&(e=1),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=1),o===void 0&&(o=0),a===void 0&&(a=0),this.array=null,this.a=e,this.b=t,this.c=i,this.d=n,this.tx=o,this.ty=a}return r.prototype.fromArray=function(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]},r.prototype.set=function(e,t,i,n,o,a){return this.a=e,this.b=t,this.c=i,this.d=n,this.tx=o,this.ty=a,this},r.prototype.toArray=function(e,t){this.array||(this.array=new Float32Array(9));var i=t||this.array;return e?(i[0]=this.a,i[1]=this.b,i[2]=0,i[3]=this.c,i[4]=this.d,i[5]=0,i[6]=this.tx,i[7]=this.ty,i[8]=1):(i[0]=this.a,i[1]=this.c,i[2]=this.tx,i[3]=this.b,i[4]=this.d,i[5]=this.ty,i[6]=0,i[7]=0,i[8]=1),i},r.prototype.apply=function(e,t){t=t||new J;var i=e.x,n=e.y;return t.x=this.a*i+this.c*n+this.tx,t.y=this.b*i+this.d*n+this.ty,t},r.prototype.applyInverse=function(e,t){t=t||new J;var i=1/(this.a*this.d+this.c*-this.b),n=e.x,o=e.y;return t.x=this.d*i*n+-this.c*i*o+(this.ty*this.c-this.tx*this.d)*i,t.y=this.a*i*o+-this.b*i*n+(-this.ty*this.a+this.tx*this.b)*i,t},r.prototype.translate=function(e,t){return this.tx+=e,this.ty+=t,this},r.prototype.scale=function(e,t){return this.a*=e,this.d*=t,this.c*=e,this.b*=t,this.tx*=e,this.ty*=t,this},r.prototype.rotate=function(e){var t=Math.cos(e),i=Math.sin(e),n=this.a,o=this.c,a=this.tx;return this.a=n*t-this.b*i,this.b=n*i+this.b*t,this.c=o*t-this.d*i,this.d=o*i+this.d*t,this.tx=a*t-this.ty*i,this.ty=a*i+this.ty*t,this},r.prototype.append=function(e){var t=this.a,i=this.b,n=this.c,o=this.d;return this.a=e.a*t+e.b*n,this.b=e.a*i+e.b*o,this.c=e.c*t+e.d*n,this.d=e.c*i+e.d*o,this.tx=e.tx*t+e.ty*n+this.tx,this.ty=e.tx*i+e.ty*o+this.ty,this},r.prototype.setTransform=function(e,t,i,n,o,a,s,u,l){return this.a=Math.cos(s+l)*o,this.b=Math.sin(s+l)*o,this.c=-Math.sin(s-u)*a,this.d=Math.cos(s-u)*a,this.tx=e-(i*this.a+n*this.c),this.ty=t-(i*this.b+n*this.d),this},r.prototype.prepend=function(e){var t=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){var i=this.a,n=this.c;this.a=i*e.a+this.b*e.c,this.b=i*e.b+this.b*e.d,this.c=n*e.a+this.d*e.c,this.d=n*e.b+this.d*e.d}return this.tx=t*e.a+this.ty*e.c+e.tx,this.ty=t*e.b+this.ty*e.d+e.ty,this},r.prototype.decompose=function(e){var t=this.a,i=this.b,n=this.c,o=this.d,a=e.pivot,s=-Math.atan2(-n,o),u=Math.atan2(i,t),l=Math.abs(s+u);return l<1e-5||Math.abs(an-l)<1e-5?(e.rotation=u,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=s,e.skew.y=u),e.scale.x=Math.sqrt(t*t+i*i),e.scale.y=Math.sqrt(n*n+o*o),e.position.x=this.tx+(a.x*t+a.y*n),e.position.y=this.ty+(a.x*i+a.y*o),e},r.prototype.invert=function(){var e=this.a,t=this.b,i=this.c,n=this.d,o=this.tx,a=e*n-t*i;return this.a=n/a,this.b=-t/a,this.c=-i/a,this.d=e/a,this.tx=(i*this.ty-n*o)/a,this.ty=-(e*this.ty-t*o)/a,this},r.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},r.prototype.clone=function(){var e=new r;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},r.prototype.copyTo=function(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},r.prototype.copyFrom=function(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this},r.prototype.toString=function(){return"[@pixi/math:Matrix a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+"]"},Object.defineProperty(r,"IDENTITY",{get:function(){return new r},enumerable:!1,configurable:!0}),Object.defineProperty(r,"TEMP_MATRIX",{get:function(){return new r},enumerable:!1,configurable:!0}),r}(),or=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],ar=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],sr=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],ur=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],Po=[],nl=[],un=Math.sign;function fm(){for(var r=0;r<16;r++){var e=[];Po.push(e);for(var t=0;t<16;t++)for(var i=un(or[r]*or[t]+sr[r]*ar[t]),n=un(ar[r]*or[t]+ur[r]*ar[t]),o=un(or[r]*sr[t]+sr[r]*ur[t]),a=un(ar[r]*sr[t]+ur[r]*ur[t]),s=0;s<16;s++)if(or[s]===i&&ar[s]===n&&sr[s]===o&&ur[s]===a){e.push(s);break}}for(var r=0;r<16;r++){var u=new yt;u.set(or[r],ar[r],sr[r],ur[r],0,0),nl.push(u)}}fm();var ft={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:function(r){return or[r]},uY:function(r){return ar[r]},vX:function(r){return sr[r]},vY:function(r){return ur[r]},inv:function(r){return r&8?r&15:-r&7},add:function(r,e){return Po[r][e]},sub:function(r,e){return Po[r][ft.inv(e)]},rotate180:function(r){return r^4},isVertical:function(r){return(r&3)==2},byDirection:function(r,e){return Math.abs(r)*2<=Math.abs(e)?e>=0?ft.S:ft.N:Math.abs(e)*2<=Math.abs(r)?r>0?ft.E:ft.W:e>0?r>0?ft.SE:ft.SW:r>0?ft.NE:ft.NW},matrixAppendRotationInv:function(r,e,t,i){t===void 0&&(t=0),i===void 0&&(i=0);var n=nl[ft.inv(e)];n.tx=t,n.ty=i,r.append(n)}},ol=function(){function r(){this.worldTransform=new yt,this.localTransform=new yt,this.position=new nr(this.onChange,this,0,0),this.scale=new nr(this.onChange,this,1,1),this.pivot=new nr(this.onChange,this,0,0),this.skew=new nr(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}return r.prototype.onChange=function(){this._localID++},r.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++},r.prototype.toString=function(){return"[@pixi/math:Transform "+("position=("+this.position.x+", "+this.position.y+") ")+("rotation="+this.rotation+" ")+("scale=("+this.scale.x+", "+this.scale.y+") ")+("skew=("+this.skew.x+", "+this.skew.y+") ")+"]"},r.prototype.updateLocalTransform=function(){var e=this.localTransform;this._localID!==this._currentLocalID&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this._currentLocalID=this._localID,this._parentID=-1)},r.prototype.updateTransform=function(e){var t=this.localTransform;if(this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==e._worldID){var i=e.worldTransform,n=this.worldTransform;n.a=t.a*i.a+t.b*i.c,n.b=t.a*i.b+t.b*i.d,n.c=t.c*i.a+t.d*i.c,n.d=t.c*i.b+t.d*i.d,n.tx=t.tx*i.a+t.ty*i.c+i.tx,n.ty=t.tx*i.b+t.ty*i.d+i.ty,this._parentID=e._worldID,this._worldID++}},r.prototype.setFromMatrix=function(e){e.decompose(this),this._localID++},Object.defineProperty(r.prototype,"rotation",{get:function(){return this._rotation},set:function(e){this._rotation!==e&&(this._rotation=e,this.updateSkew())},enumerable:!1,configurable:!0}),r.IDENTITY=new r,r}();/*!
 * @pixi/display - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */M.SORTABLE_CHILDREN=!1;var fi=function(){function r(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}return r.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},r.prototype.clear=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},r.prototype.getRectangle=function(e){return this.minX>this.maxX||this.minY>this.maxY?Z.EMPTY:(e=e||new Z(0,0,1,1),e.x=this.minX,e.y=this.minY,e.width=this.maxX-this.minX,e.height=this.maxY-this.minY,e)},r.prototype.addPoint=function(e){this.minX=Math.min(this.minX,e.x),this.maxX=Math.max(this.maxX,e.x),this.minY=Math.min(this.minY,e.y),this.maxY=Math.max(this.maxY,e.y)},r.prototype.addPointMatrix=function(e,t){var i=e.a,n=e.b,o=e.c,a=e.d,s=e.tx,u=e.ty,l=i*t.x+o*t.y+s,h=n*t.x+a*t.y+u;this.minX=Math.min(this.minX,l),this.maxX=Math.max(this.maxX,l),this.minY=Math.min(this.minY,h),this.maxY=Math.max(this.maxY,h)},r.prototype.addQuad=function(e){var t=this.minX,i=this.minY,n=this.maxX,o=this.maxY,a=e[0],s=e[1];t=a<t?a:t,i=s<i?s:i,n=a>n?a:n,o=s>o?s:o,a=e[2],s=e[3],t=a<t?a:t,i=s<i?s:i,n=a>n?a:n,o=s>o?s:o,a=e[4],s=e[5],t=a<t?a:t,i=s<i?s:i,n=a>n?a:n,o=s>o?s:o,a=e[6],s=e[7],t=a<t?a:t,i=s<i?s:i,n=a>n?a:n,o=s>o?s:o,this.minX=t,this.minY=i,this.maxX=n,this.maxY=o},r.prototype.addFrame=function(e,t,i,n,o){this.addFrameMatrix(e.worldTransform,t,i,n,o)},r.prototype.addFrameMatrix=function(e,t,i,n,o){var a=e.a,s=e.b,u=e.c,l=e.d,h=e.tx,f=e.ty,c=this.minX,d=this.minY,_=this.maxX,p=this.maxY,v=a*t+u*i+h,m=s*t+l*i+f;c=v<c?v:c,d=m<d?m:d,_=v>_?v:_,p=m>p?m:p,v=a*n+u*i+h,m=s*n+l*i+f,c=v<c?v:c,d=m<d?m:d,_=v>_?v:_,p=m>p?m:p,v=a*t+u*o+h,m=s*t+l*o+f,c=v<c?v:c,d=m<d?m:d,_=v>_?v:_,p=m>p?m:p,v=a*n+u*o+h,m=s*n+l*o+f,c=v<c?v:c,d=m<d?m:d,_=v>_?v:_,p=m>p?m:p,this.minX=c,this.minY=d,this.maxX=_,this.maxY=p},r.prototype.addVertexData=function(e,t,i){for(var n=this.minX,o=this.minY,a=this.maxX,s=this.maxY,u=t;u<i;u+=2){var l=e[u],h=e[u+1];n=l<n?l:n,o=h<o?h:o,a=l>a?l:a,s=h>s?h:s}this.minX=n,this.minY=o,this.maxX=a,this.maxY=s},r.prototype.addVertices=function(e,t,i,n){this.addVerticesMatrix(e.worldTransform,t,i,n)},r.prototype.addVerticesMatrix=function(e,t,i,n,o,a){o===void 0&&(o=0),a===void 0&&(a=o);for(var s=e.a,u=e.b,l=e.c,h=e.d,f=e.tx,c=e.ty,d=this.minX,_=this.minY,p=this.maxX,v=this.maxY,m=i;m<n;m+=2){var x=t[m],b=t[m+1],C=s*x+l*b+f,y=h*b+u*x+c;d=Math.min(d,C-o),p=Math.max(p,C+o),_=Math.min(_,y-a),v=Math.max(v,y+a)}this.minX=d,this.minY=_,this.maxX=p,this.maxY=v},r.prototype.addBounds=function(e){var t=this.minX,i=this.minY,n=this.maxX,o=this.maxY;this.minX=e.minX<t?e.minX:t,this.minY=e.minY<i?e.minY:i,this.maxX=e.maxX>n?e.maxX:n,this.maxY=e.maxY>o?e.maxY:o},r.prototype.addBoundsMask=function(e,t){var i=e.minX>t.minX?e.minX:t.minX,n=e.minY>t.minY?e.minY:t.minY,o=e.maxX<t.maxX?e.maxX:t.maxX,a=e.maxY<t.maxY?e.maxY:t.maxY;if(i<=o&&n<=a){var s=this.minX,u=this.minY,l=this.maxX,h=this.maxY;this.minX=i<s?i:s,this.minY=n<u?n:u,this.maxX=o>l?o:l,this.maxY=a>h?a:h}},r.prototype.addBoundsMatrix=function(e,t){this.addFrameMatrix(t,e.minX,e.minY,e.maxX,e.maxY)},r.prototype.addBoundsArea=function(e,t){var i=e.minX>t.x?e.minX:t.x,n=e.minY>t.y?e.minY:t.y,o=e.maxX<t.x+t.width?e.maxX:t.x+t.width,a=e.maxY<t.y+t.height?e.maxY:t.y+t.height;if(i<=o&&n<=a){var s=this.minX,u=this.minY,l=this.maxX,h=this.maxY;this.minX=i<s?i:s,this.minY=n<u?n:u,this.maxX=o>l?o:l,this.maxY=a>h?a:h}},r.prototype.pad=function(e,t){e===void 0&&(e=0),t===void 0&&(t=e),this.isEmpty()||(this.minX-=e,this.maxX+=e,this.minY-=t,this.maxY+=t)},r.prototype.addFramePad=function(e,t,i,n,o,a){e-=o,t-=a,i+=o,n+=a,this.minX=this.minX<e?this.minX:e,this.maxX=this.maxX>i?this.maxX:i,this.minY=this.minY<t?this.minY:t,this.maxY=this.maxY>n?this.maxY:n},r}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Io=function(r,e){return Io=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Io(r,e)};function Ao(r,e){Io(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var xt=function(r){Ao(e,r);function e(){var t=r.call(this)||this;return t.tempDisplayObjectParent=null,t.transform=new ol,t.alpha=1,t.visible=!0,t.renderable=!0,t.parent=null,t.worldAlpha=1,t._lastSortedIndex=0,t._zIndex=0,t.filterArea=null,t.filters=null,t._enabledFilters=null,t._bounds=new fi,t._localBounds=null,t._boundsID=0,t._boundsRect=null,t._localBoundsRect=null,t._mask=null,t._maskRefCount=0,t._destroyed=!1,t.isSprite=!1,t.isMask=!1,t}return e.mixin=function(t){for(var i=Object.keys(t),n=0;n<i.length;++n){var o=i[n];Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t,o))}},Object.defineProperty(e.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!1,configurable:!0}),e.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},e.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha},e.prototype.getBounds=function(t,i){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),i||(this._boundsRect||(this._boundsRect=new Z),i=this._boundsRect),this._bounds.getRectangle(i)},e.prototype.getLocalBounds=function(t){t||(this._localBoundsRect||(this._localBoundsRect=new Z),t=this._localBoundsRect),this._localBounds||(this._localBounds=new fi);var i=this.transform,n=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;var o=this._bounds,a=this._boundsID;this._bounds=this._localBounds;var s=this.getBounds(!1,t);return this.parent=n,this.transform=i,this._bounds=o,this._bounds.updateID+=this._boundsID-a,s},e.prototype.toGlobal=function(t,i,n){return n===void 0&&(n=!1),n||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,i)},e.prototype.toLocal=function(t,i,n,o){return i&&(t=i.toGlobal(t,n,o)),o||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,n)},e.prototype.setParent=function(t){if(!t||!t.addChild)throw new Error("setParent: Argument must be a Container");return t.addChild(this),t},e.prototype.setTransform=function(t,i,n,o,a,s,u,l,h){return t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=1),o===void 0&&(o=1),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),l===void 0&&(l=0),h===void 0&&(h=0),this.position.x=t,this.position.y=i,this.scale.x=n||1,this.scale.y=o||1,this.rotation=a,this.skew.x=s,this.skew.y=u,this.pivot.x=l,this.pivot.y=h,this},e.prototype.destroy=function(t){this.parent&&this.parent.removeChild(this),this.emit("destroyed"),this.removeAllListeners(),this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.interactive=!1,this.interactiveChildren=!1,this._destroyed=!0},Object.defineProperty(e.prototype,"_tempDisplayObjectParent",{get:function(){return this.tempDisplayObjectParent===null&&(this.tempDisplayObjectParent=new al),this.tempDisplayObjectParent},enumerable:!1,configurable:!0}),e.prototype.enableTempParent=function(){var t=this.parent;return this.parent=this._tempDisplayObjectParent,t},e.prototype.disableTempParent=function(t){this.parent=t},Object.defineProperty(e.prototype,"x",{get:function(){return this.position.x},set:function(t){this.transform.position.x=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.position.y},set:function(t){this.transform.position.y=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldTransform",{get:function(){return this.transform.worldTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"localTransform",{get:function(){return this.transform.localTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"position",{get:function(){return this.transform.position},set:function(t){this.transform.position.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this.transform.scale},set:function(t){this.transform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pivot",{get:function(){return this.transform.pivot},set:function(t){this.transform.pivot.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"skew",{get:function(){return this.transform.skew},set:function(t){this.transform.skew.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.transform.rotation},set:function(t){this.transform.rotation=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.transform.rotation*sm},set:function(t){this.transform.rotation=t*ir},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"zIndex",{get:function(){return this._zIndex},set:function(t){this._zIndex=t,this.parent&&(this.parent.sortDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldVisible",{get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mask",{get:function(){return this._mask},set:function(t){if(this._mask!==t){if(this._mask){var i=this._mask.maskObject||this._mask;i._maskRefCount--,i._maskRefCount===0&&(i.renderable=!0,i.isMask=!1)}if(this._mask=t,this._mask){var i=this._mask.maskObject||this._mask;i._maskRefCount===0&&(i.renderable=!1,i.isMask=!0),i._maskRefCount++}}},enumerable:!1,configurable:!0}),e}(ni),al=function(r){Ao(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.sortDirty=null,t}return e}(xt);xt.prototype.displayObjectUpdateTransform=xt.prototype.updateTransform;/*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var sl;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(sl||(sl={}));var ul;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(ul||(ul={}));var ll;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(ll||(ll={}));var hl;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(hl||(hl={}));var fl;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(fl||(fl={}));var cl;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(cl||(cl={}));var dl;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(dl||(dl={}));var pl;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(pl||(pl={}));var _l;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(_l||(_l={}));var vl;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(vl||(vl={}));var ml;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(ml||(ml={}));var gl;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(gl||(gl={}));var yl;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(yl||(yl={}));var xl;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(xl||(xl={}));var bl;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(bl||(bl={}));var Tl;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(Tl||(Tl={}));var Ro;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(Ro||(Ro={}));var Cl;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(Cl||(Cl={}));var wl;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(wl||(wl={}));function cm(r,e){return r.zIndex===e.zIndex?r._lastSortedIndex-e._lastSortedIndex:r.zIndex-e.zIndex}var ve=function(r){Ao(e,r);function e(){var t=r.call(this)||this;return t.children=[],t.sortableChildren=M.SORTABLE_CHILDREN,t.sortDirty=!1,t}return e.prototype.onChildrenChange=function(t){},e.prototype.addChild=function(){for(var t=arguments,i=[],n=0;n<arguments.length;n++)i[n]=t[n];if(i.length>1)for(var o=0;o<i.length;o++)this.addChild(i[o]);else{var a=i[0];a.parent&&a.parent.removeChild(a),a.parent=this,this.sortDirty=!0,a.transform._parentID=-1,this.children.push(a),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",a,this,this.children.length-1),a.emit("added",this)}return i[0]},e.prototype.addChildAt=function(t,i){if(i<0||i>this.children.length)throw new Error(t+"addChildAt: The index "+i+" supplied is out of bounds "+this.children.length);return t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,this.children.splice(i,0,t),this._boundsID++,this.onChildrenChange(i),t.emit("added",this),this.emit("childAdded",t,this,i),t},e.prototype.swapChildren=function(t,i){if(t!==i){var n=this.getChildIndex(t),o=this.getChildIndex(i);this.children[n]=i,this.children[o]=t,this.onChildrenChange(n<o?n:o)}},e.prototype.getChildIndex=function(t){var i=this.children.indexOf(t);if(i===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return i},e.prototype.setChildIndex=function(t,i){if(i<0||i>=this.children.length)throw new Error("The index "+i+" supplied is out of bounds "+this.children.length);var n=this.getChildIndex(t);Or(this.children,n,1),this.children.splice(i,0,t),this.onChildrenChange(i)},e.prototype.getChildAt=function(t){if(t<0||t>=this.children.length)throw new Error("getChildAt: Index ("+t+") does not exist.");return this.children[t]},e.prototype.removeChild=function(){for(var t=arguments,i=[],n=0;n<arguments.length;n++)i[n]=t[n];if(i.length>1)for(var o=0;o<i.length;o++)this.removeChild(i[o]);else{var a=i[0],s=this.children.indexOf(a);if(s===-1)return null;a.parent=null,a.transform._parentID=-1,Or(this.children,s,1),this._boundsID++,this.onChildrenChange(s),a.emit("removed",this),this.emit("childRemoved",a,this,s)}return i[0]},e.prototype.removeChildAt=function(t){var i=this.getChildAt(t);return i.parent=null,i.transform._parentID=-1,Or(this.children,t,1),this._boundsID++,this.onChildrenChange(t),i.emit("removed",this),this.emit("childRemoved",i,this,t),i},e.prototype.removeChildren=function(t,i){t===void 0&&(t=0),i===void 0&&(i=this.children.length);var n=t,o=i,a=o-n,s;if(a>0&&a<=o){s=this.children.splice(n,a);for(var u=0;u<s.length;++u)s[u].parent=null,s[u].transform&&(s[u].transform._parentID=-1);this._boundsID++,this.onChildrenChange(t);for(var u=0;u<s.length;++u)s[u].emit("removed",this),this.emit("childRemoved",s[u],this,u);return s}else if(a===0&&this.children.length===0)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},e.prototype.sortChildren=function(){for(var t=!1,i=0,n=this.children.length;i<n;++i){var o=this.children[i];o._lastSortedIndex=i,!t&&o.zIndex!==0&&(t=!0)}t&&this.children.length>1&&this.children.sort(cm),this.sortDirty=!1},e.prototype.updateTransform=function(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var t=0,i=this.children.length;t<i;++t){var n=this.children[t];n.visible&&n.updateTransform()}},e.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var t=0;t<this.children.length;t++){var i=this.children[t];if(!(!i.visible||!i.renderable))if(i.calculateBounds(),i._mask){var n=i._mask.maskObject||i._mask;n.calculateBounds(),this._bounds.addBoundsMask(i._bounds,n._bounds)}else i.filterArea?this._bounds.addBoundsArea(i._bounds,i.filterArea):this._bounds.addBounds(i._bounds)}this._bounds.updateID=this._boundsID},e.prototype.getLocalBounds=function(t,i){i===void 0&&(i=!1);var n=r.prototype.getLocalBounds.call(this,t);if(!i)for(var o=0,a=this.children.length;o<a;++o){var s=this.children[o];s.visible&&s.updateTransform()}return n},e.prototype._calculateBounds=function(){},e.prototype.render=function(t){if(!(!this.visible||this.worldAlpha<=0||!this.renderable))if(this._mask||this.filters&&this.filters.length)this.renderAdvanced(t);else{this._render(t);for(var i=0,n=this.children.length;i<n;++i)this.children[i].render(t)}},e.prototype.renderAdvanced=function(t){var i=this.filters,n=this._mask;if(i){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var o=0;o<i.length;o++)i[o].enabled&&this._enabledFilters.push(i[o])}var a=i&&this._enabledFilters&&this._enabledFilters.length||n&&(!n.isMaskData||n.enabled&&(n.autoDetect||n.type!==Ro.NONE));a&&t.batch.flush(),i&&this._enabledFilters&&this._enabledFilters.length&&t.filter.push(this,this._enabledFilters),n&&t.mask.push(this,this._mask),this._render(t);for(var o=0,s=this.children.length;o<s;o++)this.children[o].render(t);a&&t.batch.flush(),n&&t.mask.pop(this),i&&this._enabledFilters&&this._enabledFilters.length&&t.filter.pop()},e.prototype._render=function(t){},e.prototype.destroy=function(t){r.prototype.destroy.call(this),this.sortDirty=!1;var i=typeof t=="boolean"?t:t&&t.children,n=this.removeChildren(0,this.children.length);if(i)for(var o=0;o<n.length;++o)n[o].destroy(t)},Object.defineProperty(e.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var i=this.getLocalBounds().width;i!==0?this.scale.x=t/i:this.scale.x=1,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var i=this.getLocalBounds().height;i!==0?this.scale.y=t/i:this.scale.y=1,this._height=t},enumerable:!1,configurable:!0}),e}(xt);ve.prototype.containerUpdateTransform=ve.prototype.updateTransform;/*!
 * @pixi/accessibility - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/accessibility is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var dm={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,renderId:-1};xt.mixin(dm);var pm=9,ln=100,_m=0,vm=0,El=2,Pl=1,mm=-1e3,gm=-1e3,ym=2,xm=function(){function r(e){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=[],this.renderId=0,this.children=[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,(he.tablet||he.phone)&&this.createTouchHook();var t=document.createElement("div");t.style.width=ln+"px",t.style.height=ln+"px",t.style.position="absolute",t.style.top=_m+"px",t.style.left=vm+"px",t.style.zIndex=El.toString(),this.div=t,this.renderer=e,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),self.addEventListener("keydown",this._onKeyDown,!1)}return Object.defineProperty(r.prototype,"isActive",{get:function(){return this._isActive},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isMobileAccessibility",{get:function(){return this._isMobileAccessibility},enumerable:!1,configurable:!0}),r.prototype.createTouchHook=function(){var e=this,t=document.createElement("button");t.style.width=Pl+"px",t.style.height=Pl+"px",t.style.position="absolute",t.style.top=mm+"px",t.style.left=gm+"px",t.style.zIndex=ym.toString(),t.style.backgroundColor="#FF0000",t.title="select to enable accessibility for this content",t.addEventListener("focus",function(){e._isMobileAccessibility=!0,e.activate(),e.destroyTouchHook()}),document.body.appendChild(t),this._hookDiv=t},r.prototype.destroyTouchHook=function(){!this._hookDiv||(document.body.removeChild(this._hookDiv),this._hookDiv=null)},r.prototype.activate=function(){var e;this._isActive||(this._isActive=!0,self.document.addEventListener("mousemove",this._onMouseMove,!0),self.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),(e=this.renderer.view.parentNode)===null||e===void 0||e.appendChild(this.div))},r.prototype.deactivate=function(){var e;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,self.document.removeEventListener("mousemove",this._onMouseMove,!0),self.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),(e=this.div.parentNode)===null||e===void 0||e.removeChild(this.div))},r.prototype.updateAccessibleObjects=function(e){if(!(!e.visible||!e.accessibleChildren)){e.accessible&&e.interactive&&(e._accessibleActive||this.addChild(e),e.renderId=this.renderId);var t=e.children;if(t)for(var i=0;i<t.length;i++)this.updateAccessibleObjects(t[i])}},r.prototype.update=function(){var e=performance.now();if(!(he.android.device&&e<this.androidUpdateCount)&&(this.androidUpdateCount=e+this.androidUpdateFrequency,!!this.renderer.renderingToScreen)){this.renderer._lastObjectRendered&&this.updateAccessibleObjects(this.renderer._lastObjectRendered);var t=this.renderer.view.getBoundingClientRect(),i=t.left,n=t.top,o=t.width,a=t.height,s=this.renderer,u=s.width,l=s.height,h=s.resolution,f=o/u*h,c=a/l*h,d=this.div;d.style.left=i+"px",d.style.top=n+"px",d.style.width=u+"px",d.style.height=l+"px";for(var _=0;_<this.children.length;_++){var p=this.children[_];if(p.renderId!==this.renderId)p._accessibleActive=!1,Or(this.children,_,1),this.div.removeChild(p._accessibleDiv),this.pool.push(p._accessibleDiv),p._accessibleDiv=null,_--;else{d=p._accessibleDiv;var v=p.hitArea,m=p.worldTransform;p.hitArea?(d.style.left=(m.tx+v.x*m.a)*f+"px",d.style.top=(m.ty+v.y*m.d)*c+"px",d.style.width=v.width*m.a*f+"px",d.style.height=v.height*m.d*c+"px"):(v=p.getBounds(),this.capHitArea(v),d.style.left=v.x*f+"px",d.style.top=v.y*c+"px",d.style.width=v.width*f+"px",d.style.height=v.height*c+"px",d.title!==p.accessibleTitle&&p.accessibleTitle!==null&&(d.title=p.accessibleTitle),d.getAttribute("aria-label")!==p.accessibleHint&&p.accessibleHint!==null&&d.setAttribute("aria-label",p.accessibleHint)),(p.accessibleTitle!==d.title||p.tabIndex!==d.tabIndex)&&(d.title=p.accessibleTitle,d.tabIndex=p.tabIndex,this.debug&&this.updateDebugHTML(d))}}this.renderId++}},r.prototype.updateDebugHTML=function(e){e.innerHTML="type: "+e.type+"</br> title : "+e.title+"</br> tabIndex: "+e.tabIndex},r.prototype.capHitArea=function(e){e.x<0&&(e.width+=e.x,e.x=0),e.y<0&&(e.height+=e.y,e.y=0);var t=this.renderer,i=t.width,n=t.height;e.x+e.width>i&&(e.width=i-e.x),e.y+e.height>n&&(e.height=n-e.y)},r.prototype.addChild=function(e){var t=this.pool.pop();t||(t=document.createElement("button"),t.style.width=ln+"px",t.style.height=ln+"px",t.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",t.style.position="absolute",t.style.zIndex=El.toString(),t.style.borderStyle="none",navigator.userAgent.toLowerCase().indexOf("chrome")>-1?t.setAttribute("aria-live","off"):t.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?t.setAttribute("aria-relevant","additions"):t.setAttribute("aria-relevant","text"),t.addEventListener("click",this._onClick.bind(this)),t.addEventListener("focus",this._onFocus.bind(this)),t.addEventListener("focusout",this._onFocusOut.bind(this))),t.style.pointerEvents=e.accessiblePointerEvents,t.type=e.accessibleType,e.accessibleTitle&&e.accessibleTitle!==null?t.title=e.accessibleTitle:(!e.accessibleHint||e.accessibleHint===null)&&(t.title="displayObject "+e.tabIndex),e.accessibleHint&&e.accessibleHint!==null&&t.setAttribute("aria-label",e.accessibleHint),this.debug&&this.updateDebugHTML(t),e._accessibleActive=!0,e._accessibleDiv=t,t.displayObject=e,this.children.push(e),this.div.appendChild(e._accessibleDiv),e._accessibleDiv.tabIndex=e.tabIndex},r.prototype._onClick=function(e){var t=this.renderer.plugins.interaction,i=e.target.displayObject,n=t.eventData;t.dispatchEvent(i,"click",n),t.dispatchEvent(i,"pointertap",n),t.dispatchEvent(i,"tap",n)},r.prototype._onFocus=function(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","assertive");var t=this.renderer.plugins.interaction,i=e.target.displayObject,n=t.eventData;t.dispatchEvent(i,"mouseover",n)},r.prototype._onFocusOut=function(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","polite");var t=this.renderer.plugins.interaction,i=e.target.displayObject,n=t.eventData;t.dispatchEvent(i,"mouseout",n)},r.prototype._onKeyDown=function(e){e.keyCode===pm&&this.activate()},r.prototype._onMouseMove=function(e){e.movementX===0&&e.movementY===0||this.deactivate()},r.prototype.destroy=function(){this.destroyTouchHook(),this.div=null,self.document.removeEventListener("mousemove",this._onMouseMove,!0),self.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},r}();/*!
 * @pixi/ticker - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/ticker is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */M.TARGET_FPMS=.06;var Pe;(function(r){r[r.INTERACTION=50]="INTERACTION",r[r.HIGH=25]="HIGH",r[r.NORMAL=0]="NORMAL",r[r.LOW=-25]="LOW",r[r.UTILITY=-50]="UTILITY"})(Pe||(Pe={}));var So=function(){function r(e,t,i,n){t===void 0&&(t=null),i===void 0&&(i=0),n===void 0&&(n=!1),this.next=null,this.previous=null,this._destroyed=!1,this.fn=e,this.context=t,this.priority=i,this.once=n}return r.prototype.match=function(e,t){return t===void 0&&(t=null),this.fn===e&&this.context===t},r.prototype.emit=function(e){this.fn&&(this.context?this.fn.call(this.context,e):this.fn(e));var t=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),t},r.prototype.connect=function(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this},r.prototype.destroy=function(e){e===void 0&&(e=!1),this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);var t=this.next;return this.next=e?null:t,this.previous=null,t},r}(),Nt=function(){function r(){var e=this;this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new So(null,null,1/0),this.deltaMS=1/M.TARGET_FPMS,this.elapsedMS=1/M.TARGET_FPMS,this._tick=function(t){e._requestId=null,e.started&&(e.update(t),e.started&&e._requestId===null&&e._head.next&&(e._requestId=requestAnimationFrame(e._tick)))}}return r.prototype._requestIfNeeded=function(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))},r.prototype._cancelIfNeeded=function(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)},r.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},r.prototype.add=function(e,t,i){return i===void 0&&(i=Pe.NORMAL),this._addListener(new So(e,t,i))},r.prototype.addOnce=function(e,t,i){return i===void 0&&(i=Pe.NORMAL),this._addListener(new So(e,t,i,!0))},r.prototype._addListener=function(e){var t=this._head.next,i=this._head;if(!t)e.connect(i);else{for(;t;){if(e.priority>t.priority){e.connect(i);break}i=t,t=t.next}e.previous||e.connect(i)}return this._startIfPossible(),this},r.prototype.remove=function(e,t){for(var i=this._head.next;i;)i.match(e,t)?i=i.destroy():i=i.next;return this._head.next||this._cancelIfNeeded(),this},Object.defineProperty(r.prototype,"count",{get:function(){if(!this._head)return 0;for(var e=0,t=this._head;t=t.next;)e++;return e},enumerable:!1,configurable:!0}),r.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},r.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},r.prototype.destroy=function(){if(!this._protected){this.stop();for(var e=this._head.next;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}},r.prototype.update=function(e){e===void 0&&(e=performance.now());var t;if(e>this.lastTime){if(t=this.elapsedMS=e-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){var i=e-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=e-i%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*M.TARGET_FPMS;for(var n=this._head,o=n.next;o;)o=o.emit(this.deltaTime);n.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e},Object.defineProperty(r.prototype,"FPS",{get:function(){return 1e3/this.elapsedMS},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"minFPS",{get:function(){return 1e3/this._maxElapsedMS},set:function(e){var t=Math.min(this.maxFPS,e),i=Math.min(Math.max(0,t)/1e3,M.TARGET_FPMS);this._maxElapsedMS=1/i},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"maxFPS",{get:function(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0},set:function(e){if(e===0)this._minElapsedMS=0;else{var t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"shared",{get:function(){if(!r._shared){var e=r._shared=new r;e.autoStart=!0,e._protected=!0}return r._shared},enumerable:!1,configurable:!0}),Object.defineProperty(r,"system",{get:function(){if(!r._system){var e=r._system=new r;e.autoStart=!0,e._protected=!0}return r._system},enumerable:!1,configurable:!0}),r}(),bm=function(){function r(){}return r.init=function(e){var t=this;e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{set:function(i){this._ticker&&this._ticker.remove(this.render,this),this._ticker=i,i&&i.add(this.render,this,Pe.LOW)},get:function(){return this._ticker}}),this.stop=function(){t._ticker.stop()},this.start=function(){t._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?Nt.shared:new Nt,e.autoStart&&this.start()},r.destroy=function(){if(this._ticker){var e=this._ticker;this.ticker=null,e.destroy()}},r}();/*!
 * @pixi/interaction - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/interaction is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Il=function(){function r(){this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0,this.global=new J,this.target=null,this.originalEvent=null,this.identifier=null,this.isPrimary=!1,this.button=0,this.buttons=0,this.width=0,this.height=0,this.tiltX=0,this.tiltY=0,this.pointerType=null,this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0}return Object.defineProperty(r.prototype,"pointerId",{get:function(){return this.identifier},enumerable:!1,configurable:!0}),r.prototype.getLocalPosition=function(e,t,i){return e.worldTransform.applyInverse(i||this.global,t)},r.prototype.copyEvent=function(e){"isPrimary"in e&&e.isPrimary&&(this.isPrimary=!0),this.button="button"in e&&e.button;var t="buttons"in e&&e.buttons;this.buttons=Number.isInteger(t)?t:"which"in e&&e.which,this.width="width"in e&&e.width,this.height="height"in e&&e.height,this.tiltX="tiltX"in e&&e.tiltX,this.tiltY="tiltY"in e&&e.tiltY,this.pointerType="pointerType"in e&&e.pointerType,this.pressure="pressure"in e&&e.pressure,this.rotationAngle="rotationAngle"in e&&e.rotationAngle,this.twist="twist"in e&&e.twist||0,this.tangentialPressure="tangentialPressure"in e&&e.tangentialPressure||0},r.prototype.reset=function(){this.isPrimary=!1},r}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Oo=function(r,e){return Oo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Oo(r,e)};function Tm(r,e){Oo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Cm=function(){function r(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return r.prototype.stopPropagation=function(){this.stopped=!0,this.stopPropagationHint=!0,this.stopsPropagatingAt=this.currentTarget},r.prototype.reset=function(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.currentTarget=null,this.target=null},r}(),No=function(){function r(e){this._pointerId=e,this._flags=r.FLAGS.NONE}return r.prototype._doSet=function(e,t){t?this._flags=this._flags|e:this._flags=this._flags&~e},Object.defineProperty(r.prototype,"pointerId",{get:function(){return this._pointerId},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"flags",{get:function(){return this._flags},set:function(e){this._flags=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"none",{get:function(){return this._flags===r.FLAGS.NONE},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"over",{get:function(){return(this._flags&r.FLAGS.OVER)!=0},set:function(e){this._doSet(r.FLAGS.OVER,e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rightDown",{get:function(){return(this._flags&r.FLAGS.RIGHT_DOWN)!=0},set:function(e){this._doSet(r.FLAGS.RIGHT_DOWN,e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"leftDown",{get:function(){return(this._flags&r.FLAGS.LEFT_DOWN)!=0},set:function(e){this._doSet(r.FLAGS.LEFT_DOWN,e)},enumerable:!1,configurable:!0}),r.FLAGS=Object.freeze({NONE:0,OVER:1<<0,LEFT_DOWN:1<<1,RIGHT_DOWN:1<<2}),r}(),wm=function(){function r(){this._tempPoint=new J}return r.prototype.recursiveFindHit=function(e,t,i,n,o){if(!t||!t.visible)return!1;var a=e.data.global;o=t.interactive||o;var s=!1,u=o,l=!0;if(t.hitArea?(n&&(t.worldTransform.applyInverse(a,this._tempPoint),t.hitArea.contains(this._tempPoint.x,this._tempPoint.y)?s=!0:(n=!1,l=!1)),u=!1):t._mask&&n&&(t._mask.containsPoint&&t._mask.containsPoint(a)||(n=!1)),l&&t.interactiveChildren&&t.children)for(var h=t.children,f=h.length-1;f>=0;f--){var c=h[f],d=this.recursiveFindHit(e,c,i,n,u);if(d){if(!c.parent)continue;u=!1,d&&(e.target&&(n=!1),s=!0)}}return o&&(n&&!e.target&&!t.hitArea&&t.containsPoint&&t.containsPoint(a)&&(s=!0),t.interactive&&(s&&!e.target&&(e.target=t),i&&i(e,t,!!s))),s},r.prototype.findHit=function(e,t,i,n){this.recursiveFindHit(e,t,i,n,!1)},r}(),Em={interactive:!1,interactiveChildren:!0,hitArea:null,get buttonMode(){return this.cursor==="pointer"},set buttonMode(r){r?this.cursor="pointer":this.cursor==="pointer"&&(this.cursor=null)},cursor:null,get trackedPointers(){return this._trackedPointers===void 0&&(this._trackedPointers={}),this._trackedPointers},_trackedPointers:void 0};xt.mixin(Em);var hn=1,fn={target:null,data:{global:null}},Pm=function(r){Tm(e,r);function e(t,i){var n=r.call(this)||this;return i=i||{},n.renderer=t,n.autoPreventDefault=i.autoPreventDefault!==void 0?i.autoPreventDefault:!0,n.interactionFrequency=i.interactionFrequency||10,n.mouse=new Il,n.mouse.identifier=hn,n.mouse.global.set(-999999),n.activeInteractionData={},n.activeInteractionData[hn]=n.mouse,n.interactionDataPool=[],n.eventData=new Cm,n.interactionDOMElement=null,n.moveWhenInside=!1,n.eventsAdded=!1,n.tickerAdded=!1,n.mouseOverRenderer=!("PointerEvent"in self),n.supportsTouchEvents="ontouchstart"in self,n.supportsPointerEvents=!!self.PointerEvent,n.onPointerUp=n.onPointerUp.bind(n),n.processPointerUp=n.processPointerUp.bind(n),n.onPointerCancel=n.onPointerCancel.bind(n),n.processPointerCancel=n.processPointerCancel.bind(n),n.onPointerDown=n.onPointerDown.bind(n),n.processPointerDown=n.processPointerDown.bind(n),n.onPointerMove=n.onPointerMove.bind(n),n.processPointerMove=n.processPointerMove.bind(n),n.onPointerOut=n.onPointerOut.bind(n),n.processPointerOverOut=n.processPointerOverOut.bind(n),n.onPointerOver=n.onPointerOver.bind(n),n.cursorStyles={default:"inherit",pointer:"pointer"},n.currentCursorMode=null,n.cursor=null,n.resolution=1,n.delayedEvents=[],n.search=new wm,n._tempDisplayObject=new al,n._eventListenerOptions={capture:!0,passive:!1},n._useSystemTicker=i.useSystemTicker!==void 0?i.useSystemTicker:!0,n.setTargetElement(n.renderer.view,n.renderer.resolution),n}return Object.defineProperty(e.prototype,"useSystemTicker",{get:function(){return this._useSystemTicker},set:function(t){this._useSystemTicker=t,t?this.addTickerListener():this.removeTickerListener()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastObjectRendered",{get:function(){return this.renderer._lastObjectRendered||this._tempDisplayObject},enumerable:!1,configurable:!0}),e.prototype.hitTest=function(t,i){return fn.target=null,fn.data.global=t,i||(i=this.lastObjectRendered),this.processInteractive(fn,i,null,!0),fn.target},e.prototype.setTargetElement=function(t,i){i===void 0&&(i=1),this.removeTickerListener(),this.removeEvents(),this.interactionDOMElement=t,this.resolution=i,this.addEvents(),this.addTickerListener()},e.prototype.addTickerListener=function(){this.tickerAdded||!this.interactionDOMElement||!this._useSystemTicker||(Nt.system.add(this.tickerUpdate,this,Pe.INTERACTION),this.tickerAdded=!0)},e.prototype.removeTickerListener=function(){!this.tickerAdded||(Nt.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)},e.prototype.addEvents=function(){if(!(this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;self.navigator.msPointerEnabled?(t.msContentZooming="none",t.msTouchAction="none"):this.supportsPointerEvents&&(t.touchAction="none"),this.supportsPointerEvents?(self.document.addEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),self.addEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),self.addEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(self.document.addEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),self.addEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.eventsAdded=!0}},e.prototype.removeEvents=function(){if(!(!this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;self.navigator.msPointerEnabled?(t.msContentZooming="",t.msTouchAction=""):this.supportsPointerEvents&&(t.touchAction=""),this.supportsPointerEvents?(self.document.removeEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),self.removeEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),self.removeEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(self.document.removeEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),self.removeEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.interactionDOMElement=null,this.eventsAdded=!1}},e.prototype.tickerUpdate=function(t){this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.update())},e.prototype.update=function(){if(!!this.interactionDOMElement){if(this._didMove){this._didMove=!1;return}this.cursor=null;for(var t in this.activeInteractionData)if(this.activeInteractionData.hasOwnProperty(t)){var i=this.activeInteractionData[t];if(i.originalEvent&&i.pointerType!=="touch"){var n=this.configureInteractionEventForDOMEvent(this.eventData,i.originalEvent,i);this.processInteractive(n,this.lastObjectRendered,this.processPointerOverOut,!0)}}this.setCursorMode(this.cursor)}},e.prototype.setCursorMode=function(t){t=t||"default";var i=!0;if(self.OffscreenCanvas&&this.interactionDOMElement instanceof OffscreenCanvas&&(i=!1),this.currentCursorMode!==t){this.currentCursorMode=t;var n=this.cursorStyles[t];if(n)switch(typeof n){case"string":i&&(this.interactionDOMElement.style.cursor=n);break;case"function":n(t);break;case"object":i&&Object.assign(this.interactionDOMElement.style,n);break}else i&&typeof t=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&(this.interactionDOMElement.style.cursor=t)}},e.prototype.dispatchEvent=function(t,i,n){(!n.stopPropagationHint||t===n.stopsPropagatingAt)&&(n.currentTarget=t,n.type=i,t.emit(i,n),t[i]&&t[i](n))},e.prototype.delayDispatchEvent=function(t,i,n){this.delayedEvents.push({displayObject:t,eventString:i,eventData:n})},e.prototype.mapPositionToPoint=function(t,i,n){var o;this.interactionDOMElement.parentElement?o=this.interactionDOMElement.getBoundingClientRect():o={x:0,y:0,width:this.interactionDOMElement.width,height:this.interactionDOMElement.height,left:0,top:0};var a=1/this.resolution;t.x=(i-o.left)*(this.interactionDOMElement.width/o.width)*a,t.y=(n-o.top)*(this.interactionDOMElement.height/o.height)*a},e.prototype.processInteractive=function(t,i,n,o){var a=this.search.findHit(t,i,n,o),s=this.delayedEvents;if(!s.length)return a;t.stopPropagationHint=!1;var u=s.length;this.delayedEvents=[];for(var l=0;l<u;l++){var h=s[l],f=h.displayObject,c=h.eventString,d=h.eventData;d.stopsPropagatingAt===f&&(d.stopPropagationHint=!0),this.dispatchEvent(f,c,d)}return a},e.prototype.onPointerDown=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var i=this.normalizeToPointerData(t);if(this.autoPreventDefault&&i[0].isNormalized){var n=t.cancelable||!("cancelable"in t);n&&t.preventDefault()}for(var o=i.length,a=0;a<o;a++){var s=i[a],u=this.getInteractionDataForPointerId(s),l=this.configureInteractionEventForDOMEvent(this.eventData,s,u);if(l.data.originalEvent=t,this.processInteractive(l,this.lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",l),s.pointerType==="touch")this.emit("touchstart",l);else if(s.pointerType==="mouse"||s.pointerType==="pen"){var h=s.button===2;this.emit(h?"rightdown":"mousedown",this.eventData)}}}},e.prototype.processPointerDown=function(t,i,n){var o=t.data,a=t.data.identifier;if(n){if(i.trackedPointers[a]||(i.trackedPointers[a]=new No(a)),this.dispatchEvent(i,"pointerdown",t),o.pointerType==="touch")this.dispatchEvent(i,"touchstart",t);else if(o.pointerType==="mouse"||o.pointerType==="pen"){var s=o.button===2;s?i.trackedPointers[a].rightDown=!0:i.trackedPointers[a].leftDown=!0,this.dispatchEvent(i,s?"rightdown":"mousedown",t)}}},e.prototype.onPointerComplete=function(t,i,n){for(var o=this.normalizeToPointerData(t),a=o.length,s=t.target!==this.interactionDOMElement?"outside":"",u=0;u<a;u++){var l=o[u],h=this.getInteractionDataForPointerId(l),f=this.configureInteractionEventForDOMEvent(this.eventData,l,h);if(f.data.originalEvent=t,this.processInteractive(f,this.lastObjectRendered,n,i||!s),this.emit(i?"pointercancel":"pointerup"+s,f),l.pointerType==="mouse"||l.pointerType==="pen"){var c=l.button===2;this.emit(c?"rightup"+s:"mouseup"+s,f)}else l.pointerType==="touch"&&(this.emit(i?"touchcancel":"touchend"+s,f),this.releaseInteractionDataForPointerId(l.pointerId))}},e.prototype.onPointerCancel=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!0,this.processPointerCancel)},e.prototype.processPointerCancel=function(t,i){var n=t.data,o=t.data.identifier;i.trackedPointers[o]!==void 0&&(delete i.trackedPointers[o],this.dispatchEvent(i,"pointercancel",t),n.pointerType==="touch"&&this.dispatchEvent(i,"touchcancel",t))},e.prototype.onPointerUp=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!1,this.processPointerUp)},e.prototype.processPointerUp=function(t,i,n){var o=t.data,a=t.data.identifier,s=i.trackedPointers[a],u=o.pointerType==="touch",l=o.pointerType==="mouse"||o.pointerType==="pen",h=!1;if(l){var f=o.button===2,c=No.FLAGS,d=f?c.RIGHT_DOWN:c.LEFT_DOWN,_=s!==void 0&&s.flags&d;n?(this.dispatchEvent(i,f?"rightup":"mouseup",t),_&&(this.dispatchEvent(i,f?"rightclick":"click",t),h=!0)):_&&this.dispatchEvent(i,f?"rightupoutside":"mouseupoutside",t),s&&(f?s.rightDown=!1:s.leftDown=!1)}n?(this.dispatchEvent(i,"pointerup",t),u&&this.dispatchEvent(i,"touchend",t),s&&((!l||h)&&this.dispatchEvent(i,"pointertap",t),u&&(this.dispatchEvent(i,"tap",t),s.over=!1))):s&&(this.dispatchEvent(i,"pointerupoutside",t),u&&this.dispatchEvent(i,"touchendoutside",t)),s&&s.none&&delete i.trackedPointers[a]},e.prototype.onPointerMove=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var i=this.normalizeToPointerData(t);(i[0].pointerType==="mouse"||i[0].pointerType==="pen")&&(this._didMove=!0,this.cursor=null);for(var n=i.length,o=0;o<n;o++){var a=i[o],s=this.getInteractionDataForPointerId(a),u=this.configureInteractionEventForDOMEvent(this.eventData,a,s);u.data.originalEvent=t,this.processInteractive(u,this.lastObjectRendered,this.processPointerMove,!0),this.emit("pointermove",u),a.pointerType==="touch"&&this.emit("touchmove",u),(a.pointerType==="mouse"||a.pointerType==="pen")&&this.emit("mousemove",u)}i[0].pointerType==="mouse"&&this.setCursorMode(this.cursor)}},e.prototype.processPointerMove=function(t,i,n){var o=t.data,a=o.pointerType==="touch",s=o.pointerType==="mouse"||o.pointerType==="pen";s&&this.processPointerOverOut(t,i,n),(!this.moveWhenInside||n)&&(this.dispatchEvent(i,"pointermove",t),a&&this.dispatchEvent(i,"touchmove",t),s&&this.dispatchEvent(i,"mousemove",t))},e.prototype.onPointerOut=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var i=this.normalizeToPointerData(t),n=i[0];n.pointerType==="mouse"&&(this.mouseOverRenderer=!1,this.setCursorMode(null));var o=this.getInteractionDataForPointerId(n),a=this.configureInteractionEventForDOMEvent(this.eventData,n,o);a.data.originalEvent=n,this.processInteractive(a,this.lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",a),n.pointerType==="mouse"||n.pointerType==="pen"?this.emit("mouseout",a):this.releaseInteractionDataForPointerId(o.identifier)}},e.prototype.processPointerOverOut=function(t,i,n){var o=t.data,a=t.data.identifier,s=o.pointerType==="mouse"||o.pointerType==="pen",u=i.trackedPointers[a];n&&!u&&(u=i.trackedPointers[a]=new No(a)),u!==void 0&&(n&&this.mouseOverRenderer?(u.over||(u.over=!0,this.delayDispatchEvent(i,"pointerover",t),s&&this.delayDispatchEvent(i,"mouseover",t)),s&&this.cursor===null&&(this.cursor=i.cursor)):u.over&&(u.over=!1,this.dispatchEvent(i,"pointerout",this.eventData),s&&this.dispatchEvent(i,"mouseout",t),u.none&&delete i.trackedPointers[a]))},e.prototype.onPointerOver=function(t){var i=this.normalizeToPointerData(t),n=i[0],o=this.getInteractionDataForPointerId(n),a=this.configureInteractionEventForDOMEvent(this.eventData,n,o);a.data.originalEvent=n,n.pointerType==="mouse"&&(this.mouseOverRenderer=!0),this.emit("pointerover",a),(n.pointerType==="mouse"||n.pointerType==="pen")&&this.emit("mouseover",a)},e.prototype.getInteractionDataForPointerId=function(t){var i=t.pointerId,n;return i===hn||t.pointerType==="mouse"?n=this.mouse:this.activeInteractionData[i]?n=this.activeInteractionData[i]:(n=this.interactionDataPool.pop()||new Il,n.identifier=i,this.activeInteractionData[i]=n),n.copyEvent(t),n},e.prototype.releaseInteractionDataForPointerId=function(t){var i=this.activeInteractionData[t];i&&(delete this.activeInteractionData[t],i.reset(),this.interactionDataPool.push(i))},e.prototype.configureInteractionEventForDOMEvent=function(t,i,n){return t.data=n,this.mapPositionToPoint(n.global,i.clientX,i.clientY),i.pointerType==="touch"&&(i.globalX=n.global.x,i.globalY=n.global.y),n.originalEvent=i,t.reset(),t},e.prototype.normalizeToPointerData=function(t){var i=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(var n=0,o=t.changedTouches.length;n<o;n++){var a=t.changedTouches[n];typeof a.button=="undefined"&&(a.button=t.touches.length?1:0),typeof a.buttons=="undefined"&&(a.buttons=t.touches.length?1:0),typeof a.isPrimary=="undefined"&&(a.isPrimary=t.touches.length===1&&t.type==="touchstart"),typeof a.width=="undefined"&&(a.width=a.radiusX||1),typeof a.height=="undefined"&&(a.height=a.radiusY||1),typeof a.tiltX=="undefined"&&(a.tiltX=0),typeof a.tiltY=="undefined"&&(a.tiltY=0),typeof a.pointerType=="undefined"&&(a.pointerType="touch"),typeof a.pointerId=="undefined"&&(a.pointerId=a.identifier||0),typeof a.pressure=="undefined"&&(a.pressure=a.force||.5),typeof a.twist=="undefined"&&(a.twist=0),typeof a.tangentialPressure=="undefined"&&(a.tangentialPressure=0),typeof a.layerX=="undefined"&&(a.layerX=a.offsetX=a.clientX),typeof a.layerY=="undefined"&&(a.layerY=a.offsetY=a.clientY),a.isNormalized=!0,i.push(a)}else if(!self.MouseEvent||t instanceof MouseEvent&&(!this.supportsPointerEvents||!(t instanceof self.PointerEvent))){var s=t;typeof s.isPrimary=="undefined"&&(s.isPrimary=!0),typeof s.width=="undefined"&&(s.width=1),typeof s.height=="undefined"&&(s.height=1),typeof s.tiltX=="undefined"&&(s.tiltX=0),typeof s.tiltY=="undefined"&&(s.tiltY=0),typeof s.pointerType=="undefined"&&(s.pointerType="mouse"),typeof s.pointerId=="undefined"&&(s.pointerId=hn),typeof s.pressure=="undefined"&&(s.pressure=.5),typeof s.twist=="undefined"&&(s.twist=0),typeof s.tangentialPressure=="undefined"&&(s.tangentialPressure=0),s.isNormalized=!0,i.push(s)}else i.push(t);return i},e.prototype.destroy=function(){this.removeEvents(),this.removeTickerListener(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactionDOMElement=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerCancel=null,this.processPointerCancel=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.search=null},e}(ni);/*!
 * @pixi/runner - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/runner is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Mt=function(){function r(e){this.items=[],this._name=e,this._aliasCount=0}return r.prototype.emit=function(e,t,i,n,o,a,s,u){if(arguments.length>8)throw new Error("max arguments reached");var l=this,h=l.name,f=l.items;this._aliasCount++;for(var c=0,d=f.length;c<d;c++)f[c][h](e,t,i,n,o,a,s,u);return f===this.items&&this._aliasCount--,this},r.prototype.ensureNonAliasedItems=function(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))},r.prototype.add=function(e){return e[this._name]&&(this.ensureNonAliasedItems(),this.remove(e),this.items.push(e)),this},r.prototype.remove=function(e){var t=this.items.indexOf(e);return t!==-1&&(this.ensureNonAliasedItems(),this.items.splice(t,1)),this},r.prototype.contains=function(e){return this.items.indexOf(e)!==-1},r.prototype.removeAll=function(){return this.ensureNonAliasedItems(),this.items.length=0,this},r.prototype.destroy=function(){this.removeAll(),this.items=null,this._name=null},Object.defineProperty(r.prototype,"empty",{get:function(){return this.items.length===0},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),r}();Object.defineProperties(Mt.prototype,{dispatch:{value:Mt.prototype.emit},run:{value:Mt.prototype.emit}});/*!
 * @pixi/core - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */M.PREFER_ENV=he.any?Ce.WEBGL:Ce.WEBGL2;M.STRICT_TEXTURE_CACHE=!1;var cn=[];function Fo(r,e){if(!r)return null;var t="";if(typeof r=="string"){var i=/\.(\w{3,4})(?:$|\?|#)/i.exec(r);i&&(t=i[1].toLowerCase())}for(var n=cn.length-1;n>=0;--n){var o=cn[n];if(o.test&&o.test(r,t))return new o(r,e)}throw new Error("Unrecognized source type to auto-detect Resource")}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Uo=function(r,e){return Uo=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Uo(r,e)};function at(r,e){Uo(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Lo=function(){return Lo=Object.assign||function(e){for(var t=arguments,i,n=1,o=arguments.length;n<o;n++){i=t[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},Lo.apply(this,arguments)};function Im(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,i=Object.getOwnPropertySymbols(r);n<i.length;n++)e.indexOf(i[n])<0&&(t[i[n]]=r[i[n]]);return t}var Fr=function(){function r(e,t){e===void 0&&(e=0),t===void 0&&(t=0),this._width=e,this._height=t,this.destroyed=!1,this.internal=!1,this.onResize=new Mt("setRealSize"),this.onUpdate=new Mt("update"),this.onError=new Mt("onError")}return r.prototype.bind=function(e){this.onResize.add(e),this.onUpdate.add(e),this.onError.add(e),(this._width||this._height)&&this.onResize.emit(this._width,this._height)},r.prototype.unbind=function(e){this.onResize.remove(e),this.onUpdate.remove(e),this.onError.remove(e)},r.prototype.resize=function(e,t){(e!==this._width||t!==this._height)&&(this._width=e,this._height=t,this.onResize.emit(e,t))},Object.defineProperty(r.prototype,"valid",{get:function(){return!!this._width&&!!this._height},enumerable:!1,configurable:!0}),r.prototype.update=function(){this.destroyed||this.onUpdate.emit()},r.prototype.load=function(){return Promise.resolve(this)},Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),r.prototype.style=function(e,t,i){return!1},r.prototype.dispose=function(){},r.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)},r.test=function(e,t){return!1},r}(),ci=function(r){at(e,r);function e(t,i){var n=this,o=i||{},a=o.width,s=o.height;if(!a||!s)throw new Error("BufferResource width or height invalid");return n=r.call(this,a,s)||this,n.data=t,n}return e.prototype.upload=function(t,i,n){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.alphaMode===de.UNPACK);var a=i.realWidth,s=i.realHeight;return n.width===a&&n.height===s?o.texSubImage2D(i.target,0,0,0,a,s,i.format,n.type,this.data):(n.width=a,n.height=s,o.texImage2D(i.target,0,n.internalFormat,a,s,0,i.format,n.type,this.data)),!0},e.prototype.dispose=function(){this.data=null},e.test=function(t){return t instanceof Float32Array||t instanceof Uint8Array||t instanceof Uint32Array},e}(Fr),Am={scaleMode:Wt.NEAREST,format:U.RGBA,alphaMode:de.NPM},Q=function(r){at(e,r);function e(t,i){t===void 0&&(t=null),i===void 0&&(i=null);var n=r.call(this)||this;i=i||{};var o=i.alphaMode,a=i.mipmap,s=i.anisotropicLevel,u=i.scaleMode,l=i.width,h=i.height,f=i.wrapMode,c=i.format,d=i.type,_=i.target,p=i.resolution,v=i.resourceOptions;return t&&!(t instanceof Fr)&&(t=Fo(t,v),t.internal=!0),n.resolution=p||M.RESOLUTION,n.width=Math.round((l||0)*n.resolution)/n.resolution,n.height=Math.round((h||0)*n.resolution)/n.resolution,n._mipmap=a!==void 0?a:M.MIPMAP_TEXTURES,n.anisotropicLevel=s!==void 0?s:M.ANISOTROPIC_LEVEL,n._wrapMode=f||M.WRAP_MODE,n._scaleMode=u!==void 0?u:M.SCALE_MODE,n.format=c||U.RGBA,n.type=d||X.UNSIGNED_BYTE,n.target=_||Qe.TEXTURE_2D,n.alphaMode=o!==void 0?o:de.UNPACK,n.uid=tr(),n.touched=0,n.isPowerOfTwo=!1,n._refreshPOT(),n._glTextures={},n.dirtyId=0,n.dirtyStyleId=0,n.cacheId=null,n.valid=l>0&&h>0,n.textureCacheIds=[],n.destroyed=!1,n.resource=null,n._batchEnabled=0,n._batchLocation=0,n.parentTextureArray=null,n.setResource(t),n}return Object.defineProperty(e.prototype,"realWidth",{get:function(){return Math.round(this.width*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"realHeight",{get:function(){return Math.round(this.height*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mipmap",{get:function(){return this._mipmap},set:function(t){this._mipmap!==t&&(this._mipmap=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scaleMode",{get:function(){return this._scaleMode},set:function(t){this._scaleMode!==t&&(this._scaleMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapMode",{get:function(){return this._wrapMode},set:function(t){this._wrapMode!==t&&(this._wrapMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),e.prototype.setStyle=function(t,i){var n;return t!==void 0&&t!==this.scaleMode&&(this.scaleMode=t,n=!0),i!==void 0&&i!==this.mipmap&&(this.mipmap=i,n=!0),n&&this.dirtyStyleId++,this},e.prototype.setSize=function(t,i,n){return n=n||this.resolution,this.setRealSize(t*n,i*n,n)},e.prototype.setRealSize=function(t,i,n){return this.resolution=n||this.resolution,this.width=Math.round(t)/this.resolution,this.height=Math.round(i)/this.resolution,this._refreshPOT(),this.update(),this},e.prototype._refreshPOT=function(){this.isPowerOfTwo=Qu(this.realWidth)&&Qu(this.realHeight)},e.prototype.setResolution=function(t){var i=this.resolution;return i===t?this:(this.resolution=t,this.valid&&(this.width=Math.round(this.width*i)/t,this.height=Math.round(this.height*i)/t,this.emit("update",this)),this._refreshPOT(),this)},e.prototype.setResource=function(t){if(this.resource===t)return this;if(this.resource)throw new Error("Resource can be set only once");return t.bind(this),this.resource=t,this},e.prototype.update=function(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))},e.prototype.onError=function(t){this.emit("error",this,t)},e.prototype.destroy=function(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete rr[this.cacheId],delete Ee[this.cacheId],this.cacheId=null),this.dispose(),e.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0},e.prototype.dispose=function(){this.emit("dispose",this)},e.prototype.castToBaseTexture=function(){return this},e.from=function(t,i,n){n===void 0&&(n=M.STRICT_TEXTURE_CACHE);var o=typeof t=="string",a=null;if(o)a=t;else{if(!t._pixiId){var s=i&&i.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+tr()}a=t._pixiId}var u=rr[a];if(o&&n&&!u)throw new Error('The cacheId "'+a+'" does not exist in BaseTextureCache.');return u||(u=new e(t,i),u.cacheId=a,e.addToCache(u,a)),u},e.fromBuffer=function(t,i,n,o){t=t||new Float32Array(i*n*4);var a=new ci(t,{width:i,height:n}),s=t instanceof Float32Array?X.FLOAT:X.UNSIGNED_BYTE;return new e(a,Object.assign(Am,o||{width:i,height:n,type:s}))},e.addToCache=function(t,i){i&&(t.textureCacheIds.indexOf(i)===-1&&t.textureCacheIds.push(i),rr[i]&&console.warn("BaseTexture added to the cache with an id ["+i+"] that already had an entry"),rr[i]=t)},e.removeFromCache=function(t){if(typeof t=="string"){var i=rr[t];if(i){var n=i.textureCacheIds.indexOf(t);return n>-1&&i.textureCacheIds.splice(n,1),delete rr[t],i}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)delete rr[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},e._globalBatch=0,e}(ni),Mo=function(r){at(e,r);function e(t,i){var n=this,o=i||{},a=o.width,s=o.height;n=r.call(this,a,s)||this,n.items=[],n.itemDirtyIds=[];for(var u=0;u<t;u++){var l=new Q;n.items.push(l),n.itemDirtyIds.push(-2)}return n.length=t,n._load=null,n.baseTexture=null,n}return e.prototype.initFromArray=function(t,i){for(var n=0;n<this.length;n++)!t[n]||(t[n].castToBaseTexture?this.addBaseTextureAt(t[n].castToBaseTexture(),n):t[n]instanceof Fr?this.addResourceAt(t[n],n):this.addResourceAt(Fo(t[n],i),n))},e.prototype.dispose=function(){for(var t=0,i=this.length;t<i;t++)this.items[t].destroy();this.items=null,this.itemDirtyIds=null,this._load=null},e.prototype.addResourceAt=function(t,i){if(!this.items[i])throw new Error("Index "+i+" is out of bounds");return t.valid&&!this.valid&&this.resize(t.width,t.height),this.items[i].setResource(t),this},e.prototype.bind=function(t){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");r.prototype.bind.call(this,t);for(var i=0;i<this.length;i++)this.items[i].parentTextureArray=t,this.items[i].on("update",t.update,t)},e.prototype.unbind=function(t){r.prototype.unbind.call(this,t);for(var i=0;i<this.length;i++)this.items[i].parentTextureArray=null,this.items[i].off("update",t.update,t)},e.prototype.load=function(){var t=this;if(this._load)return this._load;var i=this.items.map(function(o){return o.resource}).filter(function(o){return o}),n=i.map(function(o){return o.load()});return this._load=Promise.all(n).then(function(){var o=t.items[0],a=o.realWidth,s=o.realHeight;return t.resize(a,s),Promise.resolve(t)}),this._load},e}(Fr),Al=function(r){at(e,r);function e(t,i){var n=this,o=i||{},a=o.width,s=o.height,u,l;return Array.isArray(t)?(u=t,l=t.length):l=t,n=r.call(this,l,{width:a,height:s})||this,u&&n.initFromArray(u,i),n}return e.prototype.addBaseTextureAt=function(t,i){if(t.resource)this.addResourceAt(t.resource,i);else throw new Error("ArrayResource does not support RenderTexture");return this},e.prototype.bind=function(t){r.prototype.bind.call(this,t),t.target=Qe.TEXTURE_2D_ARRAY},e.prototype.upload=function(t,i,n){var o=this,a=o.length,s=o.itemDirtyIds,u=o.items,l=t.gl;n.dirtyId<0&&l.texImage3D(l.TEXTURE_2D_ARRAY,0,n.internalFormat,this._width,this._height,a,0,i.format,n.type,null);for(var h=0;h<a;h++){var f=u[h];s[h]<f.dirtyId&&(s[h]=f.dirtyId,f.valid&&l.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,h,f.resource.width,f.resource.height,1,i.format,n.type,f.resource.source))}return!0},e}(Mo),Ie=function(r){at(e,r);function e(t){var i=this,n=t,o=n.naturalWidth||n.videoWidth||n.width,a=n.naturalHeight||n.videoHeight||n.height;return i=r.call(this,o,a)||this,i.source=t,i.noSubImage=!1,i}return e.crossOrigin=function(t,i,n){n===void 0&&i.indexOf("data:")!==0?t.crossOrigin=am(i):n!==!1&&(t.crossOrigin=typeof n=="string"?n:"anonymous")},e.prototype.upload=function(t,i,n,o){var a=t.gl,s=i.realWidth,u=i.realHeight;return o=o||this.source,a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.alphaMode===de.UNPACK),!this.noSubImage&&i.target===a.TEXTURE_2D&&n.width===s&&n.height===u?a.texSubImage2D(a.TEXTURE_2D,0,0,0,i.format,n.type,o):(n.width=s,n.height=u,a.texImage2D(i.target,0,n.internalFormat,i.format,n.type,o)),!0},e.prototype.update=function(){if(!this.destroyed){var t=this.source,i=t.naturalWidth||t.videoWidth||t.width,n=t.naturalHeight||t.videoHeight||t.height;this.resize(i,n),r.prototype.update.call(this)}},e.prototype.dispose=function(){this.source=null},e}(Fr),Bo=function(r){at(e,r);function e(t){return r.call(this,t)||this}return e.test=function(t){var i=self.OffscreenCanvas;return i&&t instanceof i?!0:self.HTMLCanvasElement&&t instanceof HTMLCanvasElement},e}(Ie),Rl=function(r){at(e,r);function e(t,i){var n=this,o=i||{},a=o.width,s=o.height,u=o.autoLoad,l=o.linkBaseTexture;if(t&&t.length!==e.SIDES)throw new Error("Invalid length. Got "+t.length+", expected 6");n=r.call(this,6,{width:a,height:s})||this;for(var h=0;h<e.SIDES;h++)n.items[h].target=Qe.TEXTURE_CUBE_MAP_POSITIVE_X+h;return n.linkBaseTexture=l!==!1,t&&n.initFromArray(t,i),u!==!1&&n.load(),n}return e.prototype.bind=function(t){r.prototype.bind.call(this,t),t.target=Qe.TEXTURE_CUBE_MAP},e.prototype.addBaseTextureAt=function(t,i,n){if(!this.items[i])throw new Error("Index "+i+" is out of bounds");if(!this.linkBaseTexture||t.parentTextureArray||Object.keys(t._glTextures).length>0)if(t.resource)this.addResourceAt(t.resource,i);else throw new Error("CubeResource does not support copying of renderTexture.");else t.target=Qe.TEXTURE_CUBE_MAP_POSITIVE_X+i,t.parentTextureArray=this.baseTexture,this.items[i]=t;return t.valid&&!this.valid&&this.resize(t.realWidth,t.realHeight),this.items[i]=t,this},e.prototype.upload=function(t,i,n){for(var o=this.itemDirtyIds,a=0;a<e.SIDES;a++){var s=this.items[a];o[a]<s.dirtyId&&(s.valid&&s.resource?(s.resource.upload(t,s,n),o[a]=s.dirtyId):o[a]<-1&&(t.gl.texImage2D(s.target,0,n.internalFormat,i.realWidth,i.realHeight,0,i.format,n.type,null),o[a]=-1))}return!0},e.test=function(t){return Array.isArray(t)&&t.length===e.SIDES},e.SIDES=6,e}(Mo),Go=function(r){at(e,r);function e(t,i){var n=this;if(i=i||{},!(t instanceof HTMLImageElement)){var o=new Image;Ie.crossOrigin(o,t,i.crossorigin),o.src=t,t=o}return n=r.call(this,t)||this,!t.complete&&!!n._width&&!!n._height&&(n._width=0,n._height=0),n.url=t.src,n._process=null,n.preserveBitmap=!1,n.createBitmap=(i.createBitmap!==void 0?i.createBitmap:M.CREATE_IMAGE_BITMAP)&&!!self.createImageBitmap,n.alphaMode=typeof i.alphaMode=="number"?i.alphaMode:null,n.bitmap=null,n._load=null,i.autoLoad!==!1&&n.load(),n}return e.prototype.load=function(t){var i=this;return this._load?this._load:(t!==void 0&&(this.createBitmap=t),this._load=new Promise(function(n,o){var a=i.source;i.url=a.src;var s=function(){i.destroyed||(a.onload=null,a.onerror=null,i.resize(a.width,a.height),i._load=null,i.createBitmap?n(i.process()):n(i))};a.complete&&a.src?s():(a.onload=s,a.onerror=function(u){o(u),i.onError.emit(u)})}),this._load)},e.prototype.process=function(){var t=this,i=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!self.createImageBitmap)return Promise.resolve(this);var n=self.createImageBitmap,o=!i.crossOrigin||i.crossOrigin==="anonymous";return this._process=fetch(i.src,{mode:o?"cors":"no-cors"}).then(function(a){return a.blob()}).then(function(a){return n(a,0,0,i.width,i.height,{premultiplyAlpha:t.alphaMode===de.UNPACK?"premultiply":"none"})}).then(function(a){return t.destroyed?Promise.reject():(t.bitmap=a,t.update(),t._process=null,Promise.resolve(t))}),this._process},e.prototype.upload=function(t,i,n){if(typeof this.alphaMode=="number"&&(i.alphaMode=this.alphaMode),!this.createBitmap)return r.prototype.upload.call(this,t,i,n);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(r.prototype.upload.call(this,t,i,n,this.bitmap),!this.preserveBitmap){var o=!0,a=i._glTextures;for(var s in a){var u=a[s];if(u!==n&&u.dirtyId!==i.dirtyId){o=!1;break}}o&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0},e.prototype.dispose=function(){this.source.onload=null,this.source.onerror=null,r.prototype.dispose.call(this),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null},e.test=function(t){return typeof t=="string"||t instanceof HTMLImageElement},e}(Ie),Sl=function(r){at(e,r);function e(t,i){var n=this;return i=i||{},n=r.call(this,document.createElement("canvas"))||this,n._width=0,n._height=0,n.svg=t,n.scale=i.scale||1,n._overrideWidth=i.width,n._overrideHeight=i.height,n._resolve=null,n._crossorigin=i.crossorigin,n._load=null,i.autoLoad!==!1&&n.load(),n}return e.prototype.load=function(){var t=this;return this._load?this._load:(this._load=new Promise(function(i){if(t._resolve=function(){t.resize(t.source.width,t.source.height),i(t)},e.SVG_XML.test(t.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");t.svg="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t.svg)))}t._loadSvg()}),this._load)},e.prototype._loadSvg=function(){var t=this,i=new Image;Ie.crossOrigin(i,this.svg,this._crossorigin),i.src=this.svg,i.onerror=function(n){!t._resolve||(i.onerror=null,t.onError.emit(n))},i.onload=function(){if(!!t._resolve){var n=i.width,o=i.height;if(!n||!o)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");var a=n*t.scale,s=o*t.scale;(t._overrideWidth||t._overrideHeight)&&(a=t._overrideWidth||t._overrideHeight/o*n,s=t._overrideHeight||t._overrideWidth/n*o),a=Math.round(a),s=Math.round(s);var u=t.source;u.width=a,u.height=s,u._pixiId="canvas_"+tr(),u.getContext("2d").drawImage(i,0,0,n,o,0,0,a,s),t._resolve(),t._resolve=null}}},e.getSize=function(t){var i=e.SVG_SIZE.exec(t),n={};return i&&(n[i[1]]=Math.round(parseFloat(i[3])),n[i[5]]=Math.round(parseFloat(i[7]))),n},e.prototype.dispose=function(){r.prototype.dispose.call(this),this._resolve=null,this._crossorigin=null},e.test=function(t,i){return i==="svg"||typeof t=="string"&&/^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(t)||typeof t=="string"&&e.SVG_XML.test(t)},e.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,e.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,e}(Ie),Ol=function(r){at(e,r);function e(t,i){var n=this;if(i=i||{},!(t instanceof HTMLVideoElement)){var o=document.createElement("video");o.setAttribute("preload","auto"),o.setAttribute("webkit-playsinline",""),o.setAttribute("playsinline",""),typeof t=="string"&&(t=[t]);var a=t[0].src||t[0];Ie.crossOrigin(o,a,i.crossorigin);for(var s=0;s<t.length;++s){var u=document.createElement("source"),l=t[s],h=l.src,f=l.mime;h=h||t[s];var c=h.split("?").shift().toLowerCase(),d=c.substr(c.lastIndexOf(".")+1);f=f||e.MIME_TYPES[d]||"video/"+d,u.src=h,u.type=f,o.appendChild(u)}t=o}return n=r.call(this,t)||this,n.noSubImage=!0,n._autoUpdate=!0,n._isConnectedToTicker=!1,n._updateFPS=i.updateFPS||0,n._msToNextUpdate=0,n.autoPlay=i.autoPlay!==!1,n._load=null,n._resolve=null,n._onCanPlay=n._onCanPlay.bind(n),n._onError=n._onError.bind(n),i.autoLoad!==!1&&n.load(),n}return e.prototype.update=function(t){if(!this.destroyed){var i=Nt.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-i),(!this._updateFPS||this._msToNextUpdate<=0)&&(r.prototype.update.call(this),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}},e.prototype.load=function(){var t=this;if(this._load)return this._load;var i=this.source;return(i.readyState===i.HAVE_ENOUGH_DATA||i.readyState===i.HAVE_FUTURE_DATA)&&i.width&&i.height&&(i.complete=!0),i.addEventListener("play",this._onPlayStart.bind(this)),i.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(i.addEventListener("canplay",this._onCanPlay),i.addEventListener("canplaythrough",this._onCanPlay),i.addEventListener("error",this._onError,!0)),this._load=new Promise(function(n){t.valid?n(t):(t._resolve=n,i.load())}),this._load},e.prototype._onError=function(t){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(t)},e.prototype._isSourcePlaying=function(){var t=this.source;return t.currentTime>0&&t.paused===!1&&t.ended===!1&&t.readyState>2},e.prototype._isSourceReady=function(){var t=this.source;return t.readyState===3||t.readyState===4},e.prototype._onPlayStart=function(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(Nt.shared.add(this.update,this),this._isConnectedToTicker=!0)},e.prototype._onPlayStop=function(){this._isConnectedToTicker&&(Nt.shared.remove(this.update,this),this._isConnectedToTicker=!1)},e.prototype._onCanPlay=function(){var t=this.source;t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlay);var i=this.valid;this.resize(t.videoWidth,t.videoHeight),!i&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&t.play()},e.prototype.dispose=function(){this._isConnectedToTicker&&(Nt.shared.remove(this.update,this),this._isConnectedToTicker=!1);var t=this.source;t&&(t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),r.prototype.dispose.call(this)},Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(Nt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(Nt.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"updateFPS",{get:function(){return this._updateFPS},set:function(t){t!==this._updateFPS&&(this._updateFPS=t)},enumerable:!1,configurable:!0}),e.test=function(t,i){return self.HTMLVideoElement&&t instanceof HTMLVideoElement||e.TYPES.indexOf(i)>-1},e.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],e.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"},e}(Ie),Nl=function(r){at(e,r);function e(t){return r.call(this,t)||this}return e.test=function(t){return!!self.createImageBitmap&&t instanceof ImageBitmap},e}(Ie);cn.push(Go,Nl,Bo,Ol,Sl,ci,Rl,Al);var Fl={__proto__:null,Resource:Fr,BaseImageResource:Ie,INSTALLED:cn,autoDetectResource:Fo,AbstractMultiResource:Mo,ArrayResource:Al,BufferResource:ci,CanvasResource:Bo,CubeResource:Rl,ImageResource:Go,SVGResource:Sl,VideoResource:Ol,ImageBitmapResource:Nl},Rm=function(r){at(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.upload=function(t,i,n){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.alphaMode===de.UNPACK);var a=i.realWidth,s=i.realHeight;return n.width===a&&n.height===s?o.texSubImage2D(i.target,0,0,0,a,s,i.format,n.type,this.data):(n.width=a,n.height=s,o.texImage2D(i.target,0,n.internalFormat,a,s,0,i.format,n.type,this.data)),!0},e}(ci),Do=function(){function r(e,t){this.width=Math.round(e||100),this.height=Math.round(t||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new Mt("disposeFramebuffer"),this.multisample=Tt.NONE}return Object.defineProperty(r.prototype,"colorTexture",{get:function(){return this.colorTextures[0]},enumerable:!1,configurable:!0}),r.prototype.addColorTexture=function(e,t){return e===void 0&&(e=0),this.colorTextures[e]=t||new Q(null,{scaleMode:Wt.NEAREST,resolution:1,mipmap:ce.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this},r.prototype.addDepthTexture=function(e){return this.depthTexture=e||new Q(new Rm(null,{width:this.width,height:this.height}),{scaleMode:Wt.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:ce.OFF,format:U.DEPTH_COMPONENT,type:X.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this},r.prototype.enableDepth=function(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this},r.prototype.enableStencil=function(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this},r.prototype.resize=function(e,t){if(e=Math.round(e),t=Math.round(t),!(e===this.width&&t===this.height)){this.width=e,this.height=t,this.dirtyId++,this.dirtySize++;for(var i=0;i<this.colorTextures.length;i++){var n=this.colorTextures[i],o=n.resolution;n.setSize(e/o,t/o)}if(this.depthTexture){var o=this.depthTexture.resolution;this.depthTexture.setSize(e/o,t/o)}}},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroyDepthTexture=function(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)},r}(),Ul=function(r){at(e,r);function e(t){var i=this;if(typeof t=="number"){var n=arguments[0],o=arguments[1],a=arguments[2],s=arguments[3];t={width:n,height:o,scaleMode:a,resolution:s}}return t.width=t.width||100,t.height=t.height||100,t.multisample=t.multisample!==void 0?t.multisample:Tt.NONE,i=r.call(this,null,t)||this,i.mipmap=ce.OFF,i.valid=!0,i.clearColor=[0,0,0,0],i.framebuffer=new Do(i.realWidth,i.realHeight).addColorTexture(0,i),i.framebuffer.multisample=t.multisample,i.maskStack=[],i.filterStack=[{}],i}return e.prototype.resize=function(t,i){this.framebuffer.resize(t*this.resolution,i*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)},e.prototype.dispose=function(){this.framebuffer.dispose(),r.prototype.dispose.call(this)},e.prototype.destroy=function(){r.prototype.destroy.call(this),this.framebuffer.destroyDepthTexture(),this.framebuffer=null},e}(Q),Ll=function(){function r(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}return r.prototype.set=function(e,t,i){var n=t.width,o=t.height;if(i){var a=e.width/2/n,s=e.height/2/o,u=e.x/n+a,l=e.y/o+s;i=ft.add(i,ft.NW),this.x0=u+a*ft.uX(i),this.y0=l+s*ft.uY(i),i=ft.add(i,2),this.x1=u+a*ft.uX(i),this.y1=l+s*ft.uY(i),i=ft.add(i,2),this.x2=u+a*ft.uX(i),this.y2=l+s*ft.uY(i),i=ft.add(i,2),this.x3=u+a*ft.uX(i),this.y3=l+s*ft.uY(i)}else this.x0=e.x/n,this.y0=e.y/o,this.x1=(e.x+e.width)/n,this.y1=e.y/o,this.x2=(e.x+e.width)/n,this.y2=(e.y+e.height)/o,this.x3=e.x/n,this.y3=(e.y+e.height)/o;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3},r.prototype.toString=function(){return"[@pixi/core:TextureUvs "+("x0="+this.x0+" y0="+this.y0+" ")+("x1="+this.x1+" y1="+this.y1+" x2="+this.x2+" ")+("y2="+this.y2+" x3="+this.x3+" y3="+this.y3)+"]"},r}(),Ml=new Ll,k=function(r){at(e,r);function e(t,i,n,o,a,s){var u=r.call(this)||this;if(u.noFrame=!1,i||(u.noFrame=!0,i=new Z(0,0,1,1)),t instanceof e&&(t=t.baseTexture),u.baseTexture=t,u._frame=i,u.trim=o,u.valid=!1,u._uvs=Ml,u.uvMatrix=null,u.orig=n||i,u._rotate=Number(a||0),a===!0)u._rotate=2;else if(u._rotate%2!=0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return u.defaultAnchor=s?new J(s.x,s.y):new J(0,0),u._updateID=0,u.textureCacheIds=[],t.valid?u.noFrame?t.valid&&u.onBaseTextureUpdated(t):u.frame=i:t.once("loaded",u.onBaseTextureUpdated,u),u.noFrame&&t.on("update",u.onBaseTextureUpdated,u),u}return e.prototype.update=function(){this.baseTexture.resource&&this.baseTexture.resource.update()},e.prototype.onBaseTextureUpdated=function(t){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=t.width,this._frame.height=t.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)},e.prototype.destroy=function(t){if(this.baseTexture){if(t){var i=this.baseTexture.resource;i&&i.url&&Ee[i.url]&&e.removeFromCache(i.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,e.removeFromCache(this),this.textureCacheIds=null},e.prototype.clone=function(){var t=this._frame.clone(),i=this._frame===this.orig?t:this.orig.clone(),n=new e(this.baseTexture,!this.noFrame&&t,i,this.trim&&this.trim.clone(),this.rotate,this.defaultAnchor);return this.noFrame&&(n._frame=t),n},e.prototype.updateUvs=function(){this._uvs===Ml&&(this._uvs=new Ll),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},e.from=function(t,i,n){i===void 0&&(i={}),n===void 0&&(n=M.STRICT_TEXTURE_CACHE);var o=typeof t=="string",a=null;if(o)a=t;else if(t instanceof Q){if(!t.cacheId){var s=i&&i.pixiIdPrefix||"pixiid";t.cacheId=s+"-"+tr(),Q.addToCache(t,t.cacheId)}a=t.cacheId}else{if(!t._pixiId){var s=i&&i.pixiIdPrefix||"pixiid";t._pixiId=s+"_"+tr()}a=t._pixiId}var u=Ee[a];if(o&&n&&!u)throw new Error('The cacheId "'+a+'" does not exist in TextureCache.');return!u&&!(t instanceof Q)?(i.resolution||(i.resolution=on(t)),u=new e(new Q(t,i)),u.baseTexture.cacheId=a,Q.addToCache(u.baseTexture,a),e.addToCache(u,a)):!u&&t instanceof Q&&(u=new e(t),e.addToCache(u,a)),u},e.fromURL=function(t,i){var n=Object.assign({autoLoad:!1},i==null?void 0:i.resourceOptions),o=e.from(t,Object.assign({resourceOptions:n},i),!1),a=o.baseTexture.resource;return o.baseTexture.valid?Promise.resolve(o):a.load().then(function(){return Promise.resolve(o)})},e.fromBuffer=function(t,i,n,o){return new e(Q.fromBuffer(t,i,n,o))},e.fromLoader=function(t,i,n,o){var a=new Q(t,Object.assign({scaleMode:M.SCALE_MODE,resolution:on(i)},o)),s=a.resource;s instanceof Go&&(s.url=i);var u=new e(a);return n||(n=i),Q.addToCache(u.baseTexture,n),e.addToCache(u,n),n!==i&&(Q.addToCache(u.baseTexture,i),e.addToCache(u,i)),u.baseTexture.valid?Promise.resolve(u):new Promise(function(l){u.baseTexture.once("loaded",function(){return l(u)})})},e.addToCache=function(t,i){i&&(t.textureCacheIds.indexOf(i)===-1&&t.textureCacheIds.push(i),Ee[i]&&console.warn("Texture added to the cache with an id ["+i+"] that already had an entry"),Ee[i]=t)},e.removeFromCache=function(t){if(typeof t=="string"){var i=Ee[t];if(i){var n=i.textureCacheIds.indexOf(t);return n>-1&&i.textureCacheIds.splice(n,1),delete Ee[t],i}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)Ee[t.textureCacheIds[o]]===t&&delete Ee[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},Object.defineProperty(e.prototype,"resolution",{get:function(){return this.baseTexture.resolution},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"frame",{get:function(){return this._frame},set:function(t){this._frame=t,this.noFrame=!1;var i=t.x,n=t.y,o=t.width,a=t.height,s=i+o>this.baseTexture.width,u=n+a>this.baseTexture.height;if(s||u){var l=s&&u?"and":"or",h="X: "+i+" + "+o+" = "+(i+o)+" > "+this.baseTexture.width,f="Y: "+n+" + "+a+" = "+(n+a)+" > "+this.baseTexture.height;throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: "+(h+" "+l+" "+f))}this.valid=o&&a&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=t),this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotate",{get:function(){return this._rotate},set:function(t){this._rotate=t,this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this.orig.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.orig.height},enumerable:!1,configurable:!0}),e.prototype.castToBaseTexture=function(){return this.baseTexture},e}(ni);function Sm(){var r=document.createElement("canvas");r.width=16,r.height=16;var e=r.getContext("2d");return e.fillStyle="white",e.fillRect(0,0,16,16),new k(new Q(new Bo(r)))}function dn(r){r.destroy=function(){},r.on=function(){},r.once=function(){},r.emit=function(){}}k.EMPTY=new k(new Q);dn(k.EMPTY);dn(k.EMPTY.baseTexture);k.WHITE=Sm();dn(k.WHITE);dn(k.WHITE.baseTexture);var lr=function(r){at(e,r);function e(t,i){var n=r.call(this,t,i)||this;return n.valid=!0,n.filterFrame=null,n.filterPoolKey=null,n.updateUvs(),n}return Object.defineProperty(e.prototype,"framebuffer",{get:function(){return this.baseTexture.framebuffer},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"multisample",{get:function(){return this.framebuffer.multisample},set:function(t){this.framebuffer.multisample=t},enumerable:!1,configurable:!0}),e.prototype.resize=function(t,i,n){n===void 0&&(n=!0);var o=this.baseTexture.resolution,a=Math.round(t*o)/o,s=Math.round(i*o)/o;this.valid=a>0&&s>0,this._frame.width=this.orig.width=a,this._frame.height=this.orig.height=s,n&&this.baseTexture.resize(a,s),this.updateUvs()},e.prototype.setResolution=function(t){var i=this.baseTexture;i.resolution!==t&&(i.setResolution(t),this.resize(i.width,i.height,!1))},e.create=function(t){for(var i=arguments,n=[],o=1;o<arguments.length;o++)n[o-1]=i[o];return typeof t=="number"&&(er("6.0.0","Arguments (width, height, scaleMode, resolution) have been deprecated."),t={width:t,height:n[0],scaleMode:n[1],resolution:n[2]}),new e(new Ul(t))},e}(k),Om=function(){function r(e){this.texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}return r.prototype.createTexture=function(e,t,i){i===void 0&&(i=Tt.NONE);var n=new Ul(Object.assign({width:e,height:t,resolution:1,multisample:i},this.textureOptions));return new lr(n)},r.prototype.getOptimalTexture=function(e,t,i,n){i===void 0&&(i=1),n===void 0&&(n=Tt.NONE);var o;e=Math.ceil(e*i),t=Math.ceil(t*i),!this.enableFullScreen||e!==this._pixelsWidth||t!==this._pixelsHeight?(e=rn(e),t=rn(t),o=((e&65535)<<16|t&65535)>>>0,n>1&&(o+=n*4294967296)):o=n>1?-n:-1,this.texturePool[o]||(this.texturePool[o]=[]);var a=this.texturePool[o].pop();return a||(a=this.createTexture(e,t,n)),a.filterPoolKey=o,a.setResolution(i),a},r.prototype.getFilterTexture=function(e,t,i){var n=this.getOptimalTexture(e.width,e.height,t||e.resolution,i||Tt.NONE);return n.filterFrame=e.filterFrame,n},r.prototype.returnTexture=function(e){var t=e.filterPoolKey;e.filterFrame=null,this.texturePool[t].push(e)},r.prototype.returnFilterTexture=function(e){this.returnTexture(e)},r.prototype.clear=function(e){if(e=e!==!1,e)for(var t in this.texturePool){var i=this.texturePool[t];if(i)for(var n=0;n<i.length;n++)i[n].destroy(!0)}this.texturePool={}},r.prototype.setScreenSize=function(e){if(!(e.width===this._pixelsWidth&&e.height===this._pixelsHeight)){this.enableFullScreen=e.width>0&&e.height>0;for(var t in this.texturePool)if(Number(t)<0){var i=this.texturePool[t];if(i)for(var n=0;n<i.length;n++)i[n].destroy(!0);this.texturePool[t]=[]}this._pixelsWidth=e.width,this._pixelsHeight=e.height}},r.SCREEN_KEY=-1,r}(),Bl=function(){function r(e,t,i,n,o,a,s){t===void 0&&(t=0),i===void 0&&(i=!1),n===void 0&&(n=X.FLOAT),this.buffer=e,this.size=t,this.normalized=i,this.type=n,this.stride=o,this.start=a,this.instance=s}return r.prototype.destroy=function(){this.buffer=null},r.from=function(e,t,i,n,o){return new r(e,t,i,n,o)},r}(),Nm=0,wt=function(){function r(e,t,i){t===void 0&&(t=!0),i===void 0&&(i=!1),this.data=e||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=i,this.static=t,this.id=Nm++,this.disposeRunner=new Mt("disposeBuffer")}return r.prototype.update=function(e){e instanceof Array&&(e=new Float32Array(e)),this.data=e||this.data,this._updateID++},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroy=function(){this.dispose(),this.data=null},Object.defineProperty(r.prototype,"index",{get:function(){return this.type===_e.ELEMENT_ARRAY_BUFFER},set:function(e){this.type=e?_e.ELEMENT_ARRAY_BUFFER:_e.ARRAY_BUFFER},enumerable:!1,configurable:!0}),r.from=function(e){return e instanceof Array&&(e=new Float32Array(e)),new r(e)},r}(),Fm={Float32Array,Uint32Array,Int32Array,Uint8Array};function Um(r,e){for(var t=0,i=0,n={},o=0;o<r.length;o++)i+=e[o],t+=r[o].length;for(var a=new ArrayBuffer(t*4),s=null,u=0,o=0;o<r.length;o++){var l=e[o],h=r[o],f=Ju(h);n[f]||(n[f]=new Fm[f](a)),s=n[f];for(var c=0;c<h.length;c++){var d=(c/l|0)*i+u,_=c%l;s[d+_]=h[c]}u+=l}return new Float32Array(a)}var Gl={5126:4,5123:2,5121:1},Lm=0,Mm={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array},di=function(){function r(e,t){e===void 0&&(e=[]),t===void 0&&(t={}),this.buffers=e,this.indexBuffer=null,this.attributes=t,this.glVertexArrayObjects={},this.id=Lm++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new Mt("disposeGeometry"),this.refCount=0}return r.prototype.addAttribute=function(e,t,i,n,o,a,s,u){if(i===void 0&&(i=0),n===void 0&&(n=!1),u===void 0&&(u=!1),!t)throw new Error("You must pass a buffer when creating an attribute");t instanceof wt||(t instanceof Array&&(t=new Float32Array(t)),t=new wt(t));var l=e.split("|");if(l.length>1){for(var h=0;h<l.length;h++)this.addAttribute(l[h],t,i,n,o);return this}var f=this.buffers.indexOf(t);return f===-1&&(this.buffers.push(t),f=this.buffers.length-1),this.attributes[e]=new Bl(f,i,n,o,a,s,u),this.instanced=this.instanced||u,this},r.prototype.getAttribute=function(e){return this.attributes[e]},r.prototype.getBuffer=function(e){return this.buffers[this.getAttribute(e).buffer]},r.prototype.addIndex=function(e){return e instanceof wt||(e instanceof Array&&(e=new Uint16Array(e)),e=new wt(e)),e.type=_e.ELEMENT_ARRAY_BUFFER,this.indexBuffer=e,this.buffers.indexOf(e)===-1&&this.buffers.push(e),this},r.prototype.getIndex=function(){return this.indexBuffer},r.prototype.interleave=function(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;var e=[],t=[],i=new wt,n;for(n in this.attributes){var o=this.attributes[n],a=this.buffers[o.buffer];e.push(a.data),t.push(o.size*Gl[o.type]/4),o.buffer=0}for(i.data=Um(e,t),n=0;n<this.buffers.length;n++)this.buffers[n]!==this.indexBuffer&&this.buffers[n].destroy();return this.buffers=[i],this.indexBuffer&&this.buffers.push(this.indexBuffer),this},r.prototype.getSize=function(){for(var e in this.attributes){var t=this.attributes[e],i=this.buffers[t.buffer];return i.data.length/(t.stride/4||t.size)}return 0},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroy=function(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null},r.prototype.clone=function(){for(var e=new r,t=0;t<this.buffers.length;t++)e.buffers[t]=new wt(this.buffers[t].data.slice(0));for(var t in this.attributes){var i=this.attributes[t];e.attributes[t]=new Bl(i.buffer,i.size,i.normalized,i.type,i.stride,i.start,i.instance)}return this.indexBuffer&&(e.indexBuffer=e.buffers[this.buffers.indexOf(this.indexBuffer)],e.indexBuffer.type=_e.ELEMENT_ARRAY_BUFFER),e},r.merge=function(e){for(var t=new r,i=[],n=[],o=[],a,s=0;s<e.length;s++){a=e[s];for(var u=0;u<a.buffers.length;u++)n[u]=n[u]||0,n[u]+=a.buffers[u].data.length,o[u]=0}for(var s=0;s<a.buffers.length;s++)i[s]=new Mm[Ju(a.buffers[s].data)](n[s]),t.buffers[s]=new wt(i[s]);for(var s=0;s<e.length;s++){a=e[s];for(var u=0;u<a.buffers.length;u++)i[u].set(a.buffers[u].data,o[u]),o[u]+=a.buffers[u].data.length}if(t.attributes=a.attributes,a.indexBuffer){t.indexBuffer=t.buffers[a.buffers.indexOf(a.indexBuffer)],t.indexBuffer.type=_e.ELEMENT_ARRAY_BUFFER;for(var l=0,h=0,f=0,c=0,s=0;s<a.buffers.length;s++)if(a.buffers[s]!==a.indexBuffer){c=s;break}for(var s in a.attributes){var d=a.attributes[s];(d.buffer|0)===c&&(h+=d.size*Gl[d.type]/4)}for(var s=0;s<e.length;s++){for(var _=e[s].indexBuffer.data,u=0;u<_.length;u++)t.indexBuffer.data[u+f]+=l;l+=e[s].buffers[c].data.length/h,f+=_.length}}return t},r}(),Bm=function(r){at(e,r);function e(){var t=r.call(this)||this;return t.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2]),t}return e}(di),Dl=function(r){at(e,r);function e(){var t=r.call(this)||this;return t.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),t.uvs=new Float32Array([0,0,1,0,1,1,0,1]),t.vertexBuffer=new wt(t.vertices),t.uvBuffer=new wt(t.uvs),t.addAttribute("aVertexPosition",t.vertexBuffer).addAttribute("aTextureCoord",t.uvBuffer).addIndex([0,1,2,0,2,3]),t}return e.prototype.map=function(t,i){var n=0,o=0;return this.uvs[0]=n,this.uvs[1]=o,this.uvs[2]=n+i.width/t.width,this.uvs[3]=o,this.uvs[4]=n+i.width/t.width,this.uvs[5]=o+i.height/t.height,this.uvs[6]=n,this.uvs[7]=o+i.height/t.height,n=i.x,o=i.y,this.vertices[0]=n,this.vertices[1]=o,this.vertices[2]=n+i.width,this.vertices[3]=o,this.vertices[4]=n+i.width,this.vertices[5]=o+i.height,this.vertices[6]=n,this.vertices[7]=o+i.height,this.invalidate(),this},e.prototype.invalidate=function(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this},e}(di),Gm=0,hr=function(){function r(e,t,i){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=Gm++,this.static=!!t,this.ubo=!!i,e instanceof wt?(this.buffer=e,this.buffer.type=_e.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=e,this.ubo&&(this.buffer=new wt(new Float32Array(1)),this.buffer.type=_e.UNIFORM_BUFFER,this.autoManage=!0))}return r.prototype.update=function(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()},r.prototype.add=function(e,t,i){if(!this.ubo)this.uniforms[e]=new r(t,i);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")},r.from=function(e,t,i){return new r(e,t,i)},r.uboFrom=function(e,t){return new r(e,t!=null?t:!0,!0)},r}(),Dm=function(){function r(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=Tt.NONE,this.sourceFrame=new Z,this.destinationFrame=new Z,this.bindingSourceFrame=new Z,this.bindingDestinationFrame=new Z,this.filters=[],this.transform=null}return r.prototype.clear=function(){this.target=null,this.filters=null,this.renderTexture=null},r}(),pn=[new J,new J,new J,new J],ko=new yt,kl=function(){function r(e){this.renderer=e,this.defaultFilterStack=[{}],this.texturePool=new Om,this.texturePool.setScreenSize(e.view),this.statePool=[],this.quad=new Bm,this.quadUv=new Dl,this.tempRect=new Z,this.activeState={},this.globalUniforms=new hr({outputFrame:new Z,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}return r.prototype.push=function(e,t){for(var i,n,o=this.renderer,a=this.defaultFilterStack,s=this.statePool.pop()||new Dm,u=this.renderer.renderTexture,l=t[0].resolution,h=t[0].multisample,f=t[0].padding,c=t[0].autoFit,d=(i=t[0].legacy)!==null&&i!==void 0?i:!0,_=1;_<t.length;_++){var p=t[_];l=Math.min(l,p.resolution),h=Math.min(h,p.multisample),f=this.useMaxPadding?Math.max(f,p.padding):f+p.padding,c=c&&p.autoFit,d=d||((n=p.legacy)!==null&&n!==void 0?n:!0)}if(a.length===1&&(this.defaultFilterStack[0].renderTexture=u.current),a.push(s),s.resolution=l,s.multisample=h,s.legacy=d,s.target=e,s.sourceFrame.copyFrom(e.filterArea||e.getBounds(!0)),s.sourceFrame.pad(f),c){var v=this.tempRect.copyFrom(u.sourceFrame);o.projection.transform&&this.transformAABB(ko.copyFrom(o.projection.transform).invert(),v),s.sourceFrame.fit(v)}this.roundFrame(s.sourceFrame,u.current?u.current.resolution:o.resolution,u.sourceFrame,u.destinationFrame,o.projection.transform),s.renderTexture=this.getOptimalFilterTexture(s.sourceFrame.width,s.sourceFrame.height,l,h),s.filters=t,s.destinationFrame.width=s.renderTexture.width,s.destinationFrame.height=s.renderTexture.height;var m=this.tempRect;m.x=0,m.y=0,m.width=s.sourceFrame.width,m.height=s.sourceFrame.height,s.renderTexture.filterFrame=s.sourceFrame,s.bindingSourceFrame.copyFrom(u.sourceFrame),s.bindingDestinationFrame.copyFrom(u.destinationFrame),s.transform=o.projection.transform,o.projection.transform=null,u.bind(s.renderTexture,s.sourceFrame,m),o.framebuffer.clear(0,0,0,0)},r.prototype.pop=function(){var e=this.defaultFilterStack,t=e.pop(),i=t.filters;this.activeState=t;var n=this.globalUniforms.uniforms;n.outputFrame=t.sourceFrame,n.resolution=t.resolution;var o=n.inputSize,a=n.inputPixel,s=n.inputClamp;if(o[0]=t.destinationFrame.width,o[1]=t.destinationFrame.height,o[2]=1/o[0],o[3]=1/o[1],a[0]=Math.round(o[0]*t.resolution),a[1]=Math.round(o[1]*t.resolution),a[2]=1/a[0],a[3]=1/a[1],s[0]=.5*a[2],s[1]=.5*a[3],s[2]=t.sourceFrame.width*o[2]-.5*a[2],s[3]=t.sourceFrame.height*o[3]-.5*a[3],t.legacy){var u=n.filterArea;u[0]=t.destinationFrame.width,u[1]=t.destinationFrame.height,u[2]=t.sourceFrame.x,u[3]=t.sourceFrame.y,n.filterClamp=n.inputClamp}this.globalUniforms.update();var l=e[e.length-1];if(this.renderer.framebuffer.blit(),i.length===1)i[0].apply(this,t.renderTexture,l.renderTexture,Le.BLEND,t),this.returnFilterTexture(t.renderTexture);else{var h=t.renderTexture,f=this.getOptimalFilterTexture(h.width,h.height,t.resolution);f.filterFrame=h.filterFrame;var c=0;for(c=0;c<i.length-1;++c){c===1&&t.multisample>1&&(f=this.getOptimalFilterTexture(h.width,h.height,t.resolution),f.filterFrame=h.filterFrame),i[c].apply(this,h,f,Le.CLEAR,t);var d=h;h=f,f=d}i[c].apply(this,h,l.renderTexture,Le.BLEND,t),c>1&&t.multisample>1&&this.returnFilterTexture(t.renderTexture),this.returnFilterTexture(h),this.returnFilterTexture(f)}t.clear(),this.statePool.push(t)},r.prototype.bindAndClear=function(e,t){t===void 0&&(t=Le.CLEAR);var i=this.renderer,n=i.renderTexture,o=i.state;if(e===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,e&&e.filterFrame){var a=this.tempRect;a.x=0,a.y=0,a.width=e.filterFrame.width,a.height=e.filterFrame.height,n.bind(e,e.filterFrame,a)}else e!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?n.bind(e):this.renderer.renderTexture.bind(e,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);var s=o.stateId&1||this.forceClear;(t===Le.CLEAR||t===Le.BLIT&&s)&&this.renderer.framebuffer.clear(0,0,0,0)},r.prototype.applyFilter=function(e,t,i,n){var o=this.renderer;o.state.set(e.state),this.bindAndClear(i,n),e.uniforms.uSampler=t,e.uniforms.filterGlobals=this.globalUniforms,o.shader.bind(e),e.legacy=!!e.program.attributeData.aTextureCoord,e.legacy?(this.quadUv.map(t._frame,t.filterFrame),o.geometry.bind(this.quadUv),o.geometry.draw(re.TRIANGLES)):(o.geometry.bind(this.quad),o.geometry.draw(re.TRIANGLE_STRIP))},r.prototype.calculateSpriteMatrix=function(e,t){var i=this.activeState,n=i.sourceFrame,o=i.destinationFrame,a=t._texture.orig,s=e.set(o.width,0,0,o.height,n.x,n.y),u=t.worldTransform.copyTo(yt.TEMP_MATRIX);return u.invert(),s.prepend(u),s.scale(1/a.width,1/a.height),s.translate(t.anchor.x,t.anchor.y),s},r.prototype.destroy=function(){this.renderer=null,this.texturePool.clear(!1)},r.prototype.getOptimalFilterTexture=function(e,t,i,n){return i===void 0&&(i=1),n===void 0&&(n=Tt.NONE),this.texturePool.getOptimalTexture(e,t,i,n)},r.prototype.getFilterTexture=function(e,t,i){if(typeof e=="number"){var n=e;e=t,t=n}e=e||this.activeState.renderTexture;var o=this.texturePool.getOptimalTexture(e.width,e.height,t||e.resolution,i||Tt.NONE);return o.filterFrame=e.filterFrame,o},r.prototype.returnFilterTexture=function(e){this.texturePool.returnTexture(e)},r.prototype.emptyPool=function(){this.texturePool.clear(!0)},r.prototype.resize=function(){this.texturePool.setScreenSize(this.renderer.view)},r.prototype.transformAABB=function(e,t){var i=pn[0],n=pn[1],o=pn[2],a=pn[3];i.set(t.left,t.top),n.set(t.left,t.bottom),o.set(t.right,t.top),a.set(t.right,t.bottom),e.apply(i,i),e.apply(n,n),e.apply(o,o),e.apply(a,a);var s=Math.min(i.x,n.x,o.x,a.x),u=Math.min(i.y,n.y,o.y,a.y),l=Math.max(i.x,n.x,o.x,a.x),h=Math.max(i.y,n.y,o.y,a.y);t.x=s,t.y=u,t.width=l-s,t.height=h-u},r.prototype.roundFrame=function(e,t,i,n,o){if(!(e.width<=0||e.height<=0||i.width<=0||i.height<=0)){if(o){var a=o.a,s=o.b,u=o.c,l=o.d;if((Math.abs(s)>1e-4||Math.abs(u)>1e-4)&&(Math.abs(a)>1e-4||Math.abs(l)>1e-4))return}o=o?ko.copyFrom(o):ko.identity(),o.translate(-i.x,-i.y).scale(n.width/i.width,n.height/i.height).translate(n.x,n.y),this.transformAABB(o,e),e.ceil(t),this.transformAABB(o.invert(),e)}},r}(),_n=function(){function r(e){this.renderer=e}return r.prototype.flush=function(){},r.prototype.destroy=function(){this.renderer=null},r.prototype.start=function(){},r.prototype.stop=function(){this.flush()},r.prototype.render=function(e){},r}(),Xl=function(){function r(e){this.renderer=e,this.emptyRenderer=new _n(e),this.currentRenderer=this.emptyRenderer}return r.prototype.setObjectRenderer=function(e){this.currentRenderer!==e&&(this.currentRenderer.stop(),this.currentRenderer=e,this.currentRenderer.start())},r.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},r.prototype.reset=function(){this.setObjectRenderer(this.emptyRenderer)},r.prototype.copyBoundTextures=function(e,t){for(var i=this.renderer.texture.boundTextures,n=t-1;n>=0;--n)e[n]=i[n]||null,e[n]&&(e[n]._batchLocation=n)},r.prototype.boundArray=function(e,t,i,n){for(var o=e.elements,a=e.ids,s=e.count,u=0,l=0;l<s;l++){var h=o[l],f=h._batchLocation;if(f>=0&&f<n&&t[f]===h){a[l]=f;continue}for(;u<n;){var c=t[u];if(c&&c._batchEnabled===i&&c._batchLocation===u){u++;continue}a[l]=u,h._batchLocation=u,t[u]=h;break}}},r.prototype.destroy=function(){this.renderer=null},r}(),Hl=0,jl=function(){function r(e){this.renderer=e,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),e.view.addEventListener("webglcontextlost",this.handleContextLost,!1),e.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}return Object.defineProperty(r.prototype,"isLost",{get:function(){return!this.gl||this.gl.isContextLost()},enumerable:!1,configurable:!0}),r.prototype.contextChange=function(e){this.gl=e,this.renderer.gl=e,this.renderer.CONTEXT_UID=Hl++,e.isContextLost()&&e.getExtension("WEBGL_lose_context")&&e.getExtension("WEBGL_lose_context").restoreContext()},r.prototype.initFromContext=function(e){this.gl=e,this.validateContext(e),this.renderer.gl=e,this.renderer.CONTEXT_UID=Hl++,this.renderer.runners.contextChange.emit(e)},r.prototype.initFromOptions=function(e){var t=this.createContext(this.renderer.view,e);this.initFromContext(t)},r.prototype.createContext=function(e,t){var i;if(M.PREFER_ENV>=Ce.WEBGL2&&(i=e.getContext("webgl2",t)),i)this.webGLVersion=2;else if(this.webGLVersion=1,i=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!i)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=i,this.getExtensions(),this.gl},r.prototype.getExtensions=function(){var e=this.gl,t={anisotropicFiltering:e.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc")};this.webGLVersion===1?Object.assign(this.extensions,t,{drawBuffers:e.getExtension("WEBGL_draw_buffers"),depthTexture:e.getExtension("WEBGL_depth_texture"),loseContext:e.getExtension("WEBGL_lose_context"),vertexArrayObject:e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:e.getExtension("OES_element_index_uint"),floatTexture:e.getExtension("OES_texture_float"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),textureHalfFloat:e.getExtension("OES_texture_half_float"),textureHalfFloatLinear:e.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,t,{colorBufferFloat:e.getExtension("EXT_color_buffer_float")})},r.prototype.handleContextLost=function(e){e.preventDefault()},r.prototype.handleContextRestored=function(){this.renderer.runners.contextChange.emit(this.gl)},r.prototype.destroy=function(){var e=this.renderer.view;this.renderer=null,e.removeEventListener("webglcontextlost",this.handleContextLost),e.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()},r.prototype.postrender=function(){this.renderer.renderingToScreen&&this.gl.flush()},r.prototype.validateContext=function(e){var t=e.getContextAttributes(),i="WebGL2RenderingContext"in self&&e instanceof self.WebGL2RenderingContext;i&&(this.webGLVersion=2),t.stencil||console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");var n=i||!!e.getExtension("OES_element_index_uint");this.supports.uint32Indices=n,n||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")},r}(),km=function(){function r(e){this.framebuffer=e,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=Tt.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}return r}(),Xm=new Z,zl=function(){function r(e){this.renderer=e,this.managedFramebuffers=[],this.unknownFramebuffer=new Do(10,10),this.msaaSamples=null}return r.prototype.contextChange=function(){var e=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new Z,this.hasMRT=!0,this.writeDepthTexture=!0,this.disposeAll(!0),this.renderer.context.webGLVersion===1){var t=this.renderer.context.extensions.drawBuffers,i=this.renderer.context.extensions.depthTexture;M.PREFER_ENV===Ce.WEBGL_LEGACY&&(t=null,i=null),t?e.drawBuffers=function(n){return t.drawBuffersWEBGL(n)}:(this.hasMRT=!1,e.drawBuffers=function(){}),i||(this.writeDepthTexture=!1)}else this.msaaSamples=e.getInternalformatParameter(e.RENDERBUFFER,e.RGBA8,e.SAMPLES)},r.prototype.bind=function(e,t,i){i===void 0&&(i=0);var n=this.gl;if(e){var o=e.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(e);this.current!==e&&(this.current=e,n.bindFramebuffer(n.FRAMEBUFFER,o.framebuffer)),o.mipLevel!==i&&(e.dirtyId++,e.dirtyFormat++,o.mipLevel=i),o.dirtyId!==e.dirtyId&&(o.dirtyId=e.dirtyId,o.dirtyFormat!==e.dirtyFormat?(o.dirtyFormat=e.dirtyFormat,o.dirtySize=e.dirtySize,this.updateFramebuffer(e,i)):o.dirtySize!==e.dirtySize&&(o.dirtySize=e.dirtySize,this.resizeFramebuffer(e)));for(var a=0;a<e.colorTextures.length;a++){var s=e.colorTextures[a];this.renderer.texture.unbind(s.parentTextureArray||s)}if(e.depthTexture&&this.renderer.texture.unbind(e.depthTexture),t){var u=t.width>>i,l=t.height>>i,h=u/t.width;this.setViewport(t.x*h,t.y*h,u,l)}else{var u=e.width>>i,l=e.height>>i;this.setViewport(0,0,u,l)}}else this.current&&(this.current=null,n.bindFramebuffer(n.FRAMEBUFFER,null)),t?this.setViewport(t.x,t.y,t.width,t.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)},r.prototype.setViewport=function(e,t,i,n){var o=this.viewport;e=Math.round(e),t=Math.round(t),i=Math.round(i),n=Math.round(n),(o.width!==i||o.height!==n||o.x!==e||o.y!==t)&&(o.x=e,o.y=t,o.width=i,o.height=n,this.gl.viewport(e,t,i,n))},Object.defineProperty(r.prototype,"size",{get:function(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}},enumerable:!1,configurable:!0}),r.prototype.clear=function(e,t,i,n,o){o===void 0&&(o=tn.COLOR|tn.DEPTH);var a=this.gl;a.clearColor(e,t,i,n),a.clear(o)},r.prototype.initFramebuffer=function(e){var t=this.gl,i=new km(t.createFramebuffer());return i.multisample=this.detectSamples(e.multisample),e.glFramebuffers[this.CONTEXT_UID]=i,this.managedFramebuffers.push(e),e.disposeRunner.add(this),i},r.prototype.resizeFramebuffer=function(e){var t=this.gl,i=e.glFramebuffers[this.CONTEXT_UID];i.msaaBuffer&&(t.bindRenderbuffer(t.RENDERBUFFER,i.msaaBuffer),t.renderbufferStorageMultisample(t.RENDERBUFFER,i.multisample,t.RGBA8,e.width,e.height)),i.stencil&&(t.bindRenderbuffer(t.RENDERBUFFER,i.stencil),i.msaaBuffer?t.renderbufferStorageMultisample(t.RENDERBUFFER,i.multisample,t.DEPTH24_STENCIL8,e.width,e.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,e.width,e.height));var n=e.colorTextures,o=n.length;t.drawBuffers||(o=Math.min(o,1));for(var a=0;a<o;a++){var s=n[a],u=s.parentTextureArray||s;this.renderer.texture.bind(u,0)}e.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(e.depthTexture,0)},r.prototype.updateFramebuffer=function(e,t){var i=this.gl,n=e.glFramebuffers[this.CONTEXT_UID],o=e.colorTextures,a=o.length;i.drawBuffers||(a=Math.min(a,1)),n.multisample>1&&this.canMultisampleFramebuffer(e)?(n.msaaBuffer=n.msaaBuffer||i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,n.msaaBuffer),i.renderbufferStorageMultisample(i.RENDERBUFFER,n.multisample,i.RGBA8,e.width,e.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,n.msaaBuffer)):n.msaaBuffer&&(i.deleteRenderbuffer(n.msaaBuffer),n.msaaBuffer=null,n.blitFramebuffer&&(n.blitFramebuffer.dispose(),n.blitFramebuffer=null));for(var s=[],u=0;u<a;u++){var l=o[u],h=l.parentTextureArray||l;this.renderer.texture.bind(h,0),!(u===0&&n.msaaBuffer)&&(i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+u,l.target,h._glTextures[this.CONTEXT_UID].texture,t),s.push(i.COLOR_ATTACHMENT0+u))}if(s.length>1&&i.drawBuffers(s),e.depthTexture){var f=this.writeDepthTexture;if(f){var c=e.depthTexture;this.renderer.texture.bind(c,0),i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,c._glTextures[this.CONTEXT_UID].texture,t)}}(e.stencil||e.depth)&&!(e.depthTexture&&this.writeDepthTexture)?(n.stencil=n.stencil||i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,n.stencil),n.msaaBuffer?i.renderbufferStorageMultisample(i.RENDERBUFFER,n.multisample,i.DEPTH24_STENCIL8,e.width,e.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,e.width,e.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,n.stencil)):n.stencil&&(i.deleteRenderbuffer(n.stencil),n.stencil=null)},r.prototype.canMultisampleFramebuffer=function(e){return this.renderer.context.webGLVersion!==1&&e.colorTextures.length<=1&&!e.depthTexture},r.prototype.detectSamples=function(e){var t=this.msaaSamples,i=Tt.NONE;if(e<=1||t===null)return i;for(var n=0;n<t.length;n++)if(t[n]<=e){i=t[n];break}return i===1&&(i=Tt.NONE),i},r.prototype.blit=function(e,t,i){var n=this,o=n.current,a=n.renderer,s=n.gl,u=n.CONTEXT_UID;if(a.context.webGLVersion===2&&!!o){var l=o.glFramebuffers[u];if(!!l){if(!e){if(!l.msaaBuffer)return;var h=o.colorTextures[0];if(!h)return;l.blitFramebuffer||(l.blitFramebuffer=new Do(o.width,o.height),l.blitFramebuffer.addColorTexture(0,h)),e=l.blitFramebuffer,e.colorTextures[0]!==h&&(e.colorTextures[0]=h,e.dirtyId++,e.dirtyFormat++),(e.width!==o.width||e.height!==o.height)&&(e.width=o.width,e.height=o.height,e.dirtyId++,e.dirtySize++)}t||(t=Xm,t.width=o.width,t.height=o.height),i||(i=t);var f=t.width===i.width&&t.height===i.height;this.bind(e),s.bindFramebuffer(s.READ_FRAMEBUFFER,l.framebuffer),s.blitFramebuffer(t.x,t.y,t.width,t.height,i.x,i.y,i.width,i.height,s.COLOR_BUFFER_BIT,f?s.NEAREST:s.LINEAR)}}},r.prototype.disposeFramebuffer=function(e,t){var i=e.glFramebuffers[this.CONTEXT_UID],n=this.gl;if(!!i){delete e.glFramebuffers[this.CONTEXT_UID];var o=this.managedFramebuffers.indexOf(e);o>=0&&this.managedFramebuffers.splice(o,1),e.disposeRunner.remove(this),t||(n.deleteFramebuffer(i.framebuffer),i.msaaBuffer&&n.deleteRenderbuffer(i.msaaBuffer),i.stencil&&n.deleteRenderbuffer(i.stencil)),i.blitFramebuffer&&i.blitFramebuffer.dispose()}},r.prototype.disposeAll=function(e){var t=this.managedFramebuffers;this.managedFramebuffers=[];for(var i=0;i<t.length;i++)this.disposeFramebuffer(t[i],e)},r.prototype.forceStencil=function(){var e=this.current;if(!!e){var t=e.glFramebuffers[this.CONTEXT_UID];if(!(!t||t.stencil)){e.stencil=!0;var i=e.width,n=e.height,o=this.gl,a=o.createRenderbuffer();o.bindRenderbuffer(o.RENDERBUFFER,a),t.msaaBuffer?o.renderbufferStorageMultisample(o.RENDERBUFFER,t.multisample,o.DEPTH24_STENCIL8,i,n):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,i,n),t.stencil=a,o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,a)}}},r.prototype.reset=function(){this.current=this.unknownFramebuffer,this.viewport=new Z},r.prototype.destroy=function(){this.renderer=null},r}(),Xo={5126:4,5123:2,5121:1},Vl=function(){function r(e){this.renderer=e,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}return r.prototype.contextChange=function(){this.disposeAll(!0);var e=this.gl=this.renderer.gl,t=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,t.webGLVersion!==2){var i=this.renderer.context.extensions.vertexArrayObject;M.PREFER_ENV===Ce.WEBGL_LEGACY&&(i=null),i?(e.createVertexArray=function(){return i.createVertexArrayOES()},e.bindVertexArray=function(o){return i.bindVertexArrayOES(o)},e.deleteVertexArray=function(o){return i.deleteVertexArrayOES(o)}):(this.hasVao=!1,e.createVertexArray=function(){return null},e.bindVertexArray=function(){return null},e.deleteVertexArray=function(){return null})}if(t.webGLVersion!==2){var n=e.getExtension("ANGLE_instanced_arrays");n?(e.vertexAttribDivisor=function(o,a){return n.vertexAttribDivisorANGLE(o,a)},e.drawElementsInstanced=function(o,a,s,u,l){return n.drawElementsInstancedANGLE(o,a,s,u,l)},e.drawArraysInstanced=function(o,a,s,u){return n.drawArraysInstancedANGLE(o,a,s,u)}):this.hasInstance=!1}this.canUseUInt32ElementIndex=t.webGLVersion===2||!!t.extensions.uint32ElementIndex},r.prototype.bind=function(e,t){t=t||this.renderer.shader.shader;var i=this.gl,n=e.glVertexArrayObjects[this.CONTEXT_UID],o=!1;n||(this.managedGeometries[e.id]=e,e.disposeRunner.add(this),e.glVertexArrayObjects[this.CONTEXT_UID]=n={},o=!0);var a=n[t.program.id]||this.initGeometryVao(e,t,o);this._activeGeometry=e,this._activeVao!==a&&(this._activeVao=a,this.hasVao?i.bindVertexArray(a):this.activateVao(e,t.program)),this.updateBuffers()},r.prototype.reset=function(){this.unbind()},r.prototype.updateBuffers=function(){for(var e=this._activeGeometry,t=this.renderer.buffer,i=0;i<e.buffers.length;i++){var n=e.buffers[i];t.update(n)}},r.prototype.checkCompatibility=function(e,t){var i=e.attributes,n=t.attributeData;for(var o in n)if(!i[o])throw new Error('shader and geometry incompatible, geometry missing the "'+o+'" attribute')},r.prototype.getSignature=function(e,t){var i=e.attributes,n=t.attributeData,o=["g",e.id];for(var a in i)n[a]&&o.push(a,n[a].location);return o.join("-")},r.prototype.initGeometryVao=function(e,t,i){i===void 0&&(i=!0);var n=this.gl,o=this.CONTEXT_UID,a=this.renderer.buffer,s=t.program;s.glPrograms[o]||this.renderer.shader.generateProgram(t),this.checkCompatibility(e,s);var u=this.getSignature(e,s),l=e.glVertexArrayObjects[this.CONTEXT_UID],h=l[u];if(h)return l[s.id]=h,h;var f=e.buffers,c=e.attributes,d={},_={};for(var p in f)d[p]=0,_[p]=0;for(var p in c)!c[p].size&&s.attributeData[p]?c[p].size=s.attributeData[p].size:c[p].size||console.warn("PIXI Geometry attribute '"+p+"' size cannot be determined (likely the bound shader does not have the attribute)"),d[c[p].buffer]+=c[p].size*Xo[c[p].type];for(var p in c){var v=c[p],m=v.size;v.stride===void 0&&(d[v.buffer]===m*Xo[v.type]?v.stride=0:v.stride=d[v.buffer]),v.start===void 0&&(v.start=_[v.buffer],_[v.buffer]+=m*Xo[v.type])}h=n.createVertexArray(),n.bindVertexArray(h);for(var x=0;x<f.length;x++){var b=f[x];a.bind(b),i&&b._glBuffers[o].refCount++}return this.activateVao(e,s),this._activeVao=h,l[s.id]=h,l[u]=h,h},r.prototype.disposeGeometry=function(e,t){var i;if(!!this.managedGeometries[e.id]){delete this.managedGeometries[e.id];var n=e.glVertexArrayObjects[this.CONTEXT_UID],o=this.gl,a=e.buffers,s=(i=this.renderer)===null||i===void 0?void 0:i.buffer;if(e.disposeRunner.remove(this),!!n){if(s)for(var u=0;u<a.length;u++){var l=a[u]._glBuffers[this.CONTEXT_UID];l&&(l.refCount--,l.refCount===0&&!t&&s.dispose(a[u],t))}if(!t){for(var h in n)if(h[0]==="g"){var f=n[h];this._activeVao===f&&this.unbind(),o.deleteVertexArray(f)}}delete e.glVertexArrayObjects[this.CONTEXT_UID]}}},r.prototype.disposeAll=function(e){for(var t=Object.keys(this.managedGeometries),i=0;i<t.length;i++)this.disposeGeometry(this.managedGeometries[t[i]],e)},r.prototype.activateVao=function(e,t){var i=this.gl,n=this.CONTEXT_UID,o=this.renderer.buffer,a=e.buffers,s=e.attributes;e.indexBuffer&&o.bind(e.indexBuffer);var u=null;for(var l in s){var h=s[l],f=a[h.buffer],c=f._glBuffers[n];if(t.attributeData[l]){u!==c&&(o.bind(f),u=c);var d=t.attributeData[l].location;if(i.enableVertexAttribArray(d),i.vertexAttribPointer(d,h.size,h.type||i.FLOAT,h.normalized,h.stride,h.start),h.instance)if(this.hasInstance)i.vertexAttribDivisor(d,1);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}},r.prototype.draw=function(e,t,i,n){var o=this.gl,a=this._activeGeometry;if(a.indexBuffer){var s=a.indexBuffer.data.BYTES_PER_ELEMENT,u=s===2?o.UNSIGNED_SHORT:o.UNSIGNED_INT;s===2||s===4&&this.canUseUInt32ElementIndex?a.instanced?o.drawElementsInstanced(e,t||a.indexBuffer.data.length,u,(i||0)*s,n||1):o.drawElements(e,t||a.indexBuffer.data.length,u,(i||0)*s):console.warn("unsupported index buffer type: uint32")}else a.instanced?o.drawArraysInstanced(e,i,t||a.getSize(),n||1):o.drawArrays(e,i,t||a.getSize());return this},r.prototype.unbind=function(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null},r.prototype.destroy=function(){this.renderer=null},r}(),Hm=function(){function r(e){e===void 0&&(e=null),this.type=Lt.NONE,this.autoDetect=!0,this.maskObject=e||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=M.FILTER_MULTISAMPLE,this.enabled=!0,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._target=null}return Object.defineProperty(r.prototype,"filter",{get:function(){return this._filters?this._filters[0]:null},set:function(e){e?this._filters?this._filters[0]=e:this._filters=[e]:this._filters=null},enumerable:!1,configurable:!0}),r.prototype.reset=function(){this.pooled&&(this.maskObject=null,this.type=Lt.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null},r.prototype.copyCountersOrReset=function(e){e?(this._stencilCounter=e._stencilCounter,this._scissorCounter=e._scissorCounter,this._scissorRect=e._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)},r}();function $l(r,e,t){var i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}function Wl(r,e){var t=r.getShaderSource(e).split(`
`).map(function(l,h){return h+": "+l}),i=r.getShaderInfoLog(e),n=i.split(`
`),o={},a=n.map(function(l){return parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))}).filter(function(l){return l&&!o[l]?(o[l]=!0,!0):!1}),s=[""];a.forEach(function(l){t[l-1]="%c"+t[l-1]+"%c",s.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});var u=t.join(`
`);s[0]=u,console.error(i),console.groupCollapsed("click to view full shader code"),console.warn.apply(console,s),console.groupEnd()}function jm(r,e,t,i){r.getProgramParameter(e,r.LINK_STATUS)||(r.getShaderParameter(t,r.COMPILE_STATUS)||Wl(r,t),r.getShaderParameter(i,r.COMPILE_STATUS)||Wl(r,i),console.error("PixiJS Error: Could not initialize shader."),r.getProgramInfoLog(e)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",r.getProgramInfoLog(e)))}function Ho(r){for(var e=new Array(r),t=0;t<e.length;t++)e[t]=!1;return e}function Yl(r,e){switch(r){case"float":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"uvec2":return new Uint32Array(2*e);case"uvec3":return new Uint32Array(3*e);case"uvec4":return new Uint32Array(4*e);case"bool":return!1;case"bvec2":return Ho(2*e);case"bvec3":return Ho(3*e);case"bvec4":return Ho(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var ql={},pi=ql;function zm(){if(pi===ql||pi&&pi.isContextLost()){var r=document.createElement("canvas"),e=void 0;M.PREFER_ENV>=Ce.WEBGL2&&(e=r.getContext("webgl2",{})),e||(e=r.getContext("webgl",{})||r.getContext("experimental-webgl",{}),e?e.getExtension("WEBGL_draw_buffers"):e=null),pi=e}return pi}var vn;function Vm(){if(!vn){vn=pe.MEDIUM;var r=zm();if(r&&r.getShaderPrecisionFormat){var e=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT);vn=e.precision?pe.HIGH:pe.MEDIUM}}return vn}function Kl(r,e,t){if(r.substring(0,9)!=="precision"){var i=e;return e===pe.HIGH&&t!==pe.HIGH&&(i=pe.MEDIUM),"precision "+i+` float;
`+r}else if(t!==pe.HIGH&&r.substring(0,15)==="precision highp")return r.replace("precision highp","precision mediump");return r}var $m={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function Zl(r){return $m[r]}var mn=null,Jl={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function Ql(r,e){if(!mn){var t=Object.keys(Jl);mn={};for(var i=0;i<t.length;++i){var n=t[i];mn[r[n]]=Jl[n]}}return mn[e]}var Ur=[{test:function(r){return r.type==="float"&&r.size===1},code:function(r){return`
            if(uv["`+r+'"] !== ud["'+r+`"].value)
            {
                ud["`+r+'"].value = uv["'+r+`"]
                gl.uniform1f(ud["`+r+'"].location, uv["'+r+`"])
            }
            `}},{test:function(r){return(r.type==="sampler2D"||r.type==="samplerCube"||r.type==="sampler2DArray")&&r.size===1&&!r.isArray},code:function(r){return`t = syncData.textureCount++;

            renderer.texture.bind(uv["`+r+`"], t);

            if(ud["`+r+`"].value !== t)
            {
                ud["`+r+`"].value = t;
                gl.uniform1i(ud["`+r+`"].location, t);
; // eslint-disable-line max-len
            }`}},{test:function(r,e){return r.type==="mat3"&&r.size===1&&e.a!==void 0},code:function(r){return`
            gl.uniformMatrix3fv(ud["`+r+'"].location, false, uv["'+r+`"].toArray(true));
            `},codeUbo:function(r){return`
                var `+r+"_matrix = uv."+r+`.toArray(true);

                data[offset] = `+r+`_matrix[0];
                data[offset+1] = `+r+`_matrix[1];
                data[offset+2] = `+r+`_matrix[2];
        
                data[offset + 4] = `+r+`_matrix[3];
                data[offset + 5] = `+r+`_matrix[4];
                data[offset + 6] = `+r+`_matrix[5];
        
                data[offset + 8] = `+r+`_matrix[6];
                data[offset + 9] = `+r+`_matrix[7];
                data[offset + 10] = `+r+`_matrix[8];
            `}},{test:function(r,e){return r.type==="vec2"&&r.size===1&&e.x!==void 0},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["`+r+`"].location, v.x, v.y);
                }`},codeUbo:function(r){return`
                v = uv.`+r+`;

                data[offset] = v.x;
                data[offset+1] = v.y;
            `}},{test:function(r){return r.type==="vec2"&&r.size===1},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["`+r+`"].location, v[0], v[1]);
                }
            `}},{test:function(r,e){return r.type==="vec4"&&r.size===1&&e.width!==void 0},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["`+r+`"].location, v.x, v.y, v.width, v.height)
                }`},codeUbo:function(r){return`
                    v = uv.`+r+`;

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `}},{test:function(r){return r.type==="vec4"&&r.size===1},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["`+r+`"].location, v[0], v[1], v[2], v[3])
                }`}}],Wm={float:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,vec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,int:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,ivec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,ivec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,ivec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,uint:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,uvec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,uvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,uvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,bool:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,bvec2:`
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,bvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,bvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:"gl.uniform1i(location, v)",samplerCube:"gl.uniform1i(location, v)",sampler2DArray:"gl.uniform1i(location, v)"},Ym={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function qm(r,e){var t,i=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(var n in r.uniforms){var o=e[n];if(!o){((t=r.uniforms[n])===null||t===void 0?void 0:t.group)&&(r.uniforms[n].ubo?i.push(`
                        renderer.shader.syncUniformBufferGroup(uv.`+n+", '"+n+`');
                    `):i.push(`
                        renderer.shader.syncUniformGroup(uv.`+n+`, syncData);
                    `));continue}for(var a=r.uniforms[n],s=!1,u=0;u<Ur.length;u++)if(Ur[u].test(o,a)){i.push(Ur[u].code(n,a)),s=!0;break}if(!s){var l=o.size===1?Wm:Ym,h=l[o.type].replace("location",'ud["'+n+'"].location');i.push(`
            cu = ud["`+n+`"];
            cv = cu.value;
            v = uv["`+n+`"];
            `+h+";")}}return new Function("ud","uv","renderer","syncData",i.join(`
`))}var Km=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function Zm(r){for(var e="",t=0;t<r;++t)t>0&&(e+=`
else `),t<r-1&&(e+="if(test == "+t+".0){}");return e}function Jm(r,e){if(r===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");for(var t=e.createShader(e.FRAGMENT_SHADER);;){var i=Km.replace(/%forloop%/gi,Zm(r));if(e.shaderSource(t,i),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))r=r/2|0;else break}return r}var _i;function Qm(){if(typeof _i=="boolean")return _i;try{var r=new Function("param1","param2","param3","return param1[param2] === param3;");_i=r({a:"b"},"a","b")===!0}catch{_i=!1}return _i}var tg=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,eg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`,rg=0,gn={},vi=function(){function r(e,t,i){i===void 0&&(i="pixi-shader"),this.id=rg++,this.vertexSrc=e||r.defaultVertexSrc,this.fragmentSrc=t||r.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.vertexSrc.substring(0,8)!=="#version"&&(i=i.replace(/\s+/g,"-"),gn[i]?(gn[i]++,i+="-"+gn[i]):gn[i]=1,this.vertexSrc="#define SHADER_NAME "+i+`
`+this.vertexSrc,this.fragmentSrc="#define SHADER_NAME "+i+`
`+this.fragmentSrc,this.vertexSrc=Kl(this.vertexSrc,M.PRECISION_VERTEX,pe.HIGH),this.fragmentSrc=Kl(this.fragmentSrc,M.PRECISION_FRAGMENT,Vm())),this.glPrograms={},this.syncUniforms=null}return Object.defineProperty(r,"defaultVertexSrc",{get:function(){return eg},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultFragmentSrc",{get:function(){return tg},enumerable:!1,configurable:!0}),r.from=function(e,t,i){var n=e+t,o=rl[n];return o||(rl[n]=o=new r(e,t,i)),o},r}(),Me=function(){function r(e,t){this.uniformBindCount=0,this.program=e,t?t instanceof hr?this.uniformGroup=t:this.uniformGroup=new hr(t):this.uniformGroup=new hr({})}return r.prototype.checkUniformExists=function(e,t){if(t.uniforms[e])return!0;for(var i in t.uniforms){var n=t.uniforms[i];if(n.group&&this.checkUniformExists(e,n))return!0}return!1},r.prototype.destroy=function(){this.uniformGroup=null},Object.defineProperty(r.prototype,"uniforms",{get:function(){return this.uniformGroup.uniforms},enumerable:!1,configurable:!0}),r.from=function(e,t,i){var n=vi.from(e,t);return new r(n,i)},r}(),jo=0,zo=1,Vo=2,$o=3,Wo=4,Yo=5,fr=function(){function r(){this.data=0,this.blendMode=D.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}return Object.defineProperty(r.prototype,"blend",{get:function(){return!!(this.data&1<<jo)},set:function(e){!!(this.data&1<<jo)!==e&&(this.data^=1<<jo)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"offsets",{get:function(){return!!(this.data&1<<zo)},set:function(e){!!(this.data&1<<zo)!==e&&(this.data^=1<<zo)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"culling",{get:function(){return!!(this.data&1<<Vo)},set:function(e){!!(this.data&1<<Vo)!==e&&(this.data^=1<<Vo)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"depthTest",{get:function(){return!!(this.data&1<<$o)},set:function(e){!!(this.data&1<<$o)!==e&&(this.data^=1<<$o)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"depthMask",{get:function(){return!!(this.data&1<<Yo)},set:function(e){!!(this.data&1<<Yo)!==e&&(this.data^=1<<Yo)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"clockwiseFrontFace",{get:function(){return!!(this.data&1<<Wo)},set:function(e){!!(this.data&1<<Wo)!==e&&(this.data^=1<<Wo)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blendMode",{get:function(){return this._blendMode},set:function(e){this.blend=e!==D.NONE,this._blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"polygonOffset",{get:function(){return this._polygonOffset},set:function(e){this.offsets=!!e,this._polygonOffset=e},enumerable:!1,configurable:!0}),r.prototype.toString=function(){return"[@pixi/core:State "+("blendMode="+this.blendMode+" ")+("clockwiseFrontFace="+this.clockwiseFrontFace+" ")+("culling="+this.culling+" ")+("depthMask="+this.depthMask+" ")+("polygonOffset="+this.polygonOffset)+"]"},r.for2d=function(){var e=new r;return e.depthTest=!1,e.blend=!0,e},r}(),ig=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,ng=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,V=function(r){at(e,r);function e(t,i,n){var o=this,a=vi.from(t||e.defaultVertexSrc,i||e.defaultFragmentSrc);return o=r.call(this,a,n)||this,o.padding=0,o.resolution=M.FILTER_RESOLUTION,o.multisample=M.FILTER_MULTISAMPLE,o.enabled=!0,o.autoFit=!0,o.state=new fr,o}return e.prototype.apply=function(t,i,n,o,a){t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultVertexSrc",{get:function(){return ig},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultFragmentSrc",{get:function(){return ng},enumerable:!1,configurable:!0}),e}(Me),og=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`,ag=`varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,th=new yt,qo=function(){function r(e,t){this._texture=e,this.mapCoord=new yt,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof t=="undefined"?.5:t,this.isSimple=!1}return Object.defineProperty(r.prototype,"texture",{get:function(){return this._texture},set:function(e){this._texture=e,this._textureID=-1},enumerable:!1,configurable:!0}),r.prototype.multiplyUvs=function(e,t){t===void 0&&(t=e);for(var i=this.mapCoord,n=0;n<e.length;n+=2){var o=e[n],a=e[n+1];t[n]=o*i.a+a*i.c+i.tx,t[n+1]=o*i.b+a*i.d+i.ty}return t},r.prototype.update=function(e){var t=this._texture;if(!t||!t.valid||!e&&this._textureID===t._updateID)return!1;this._textureID=t._updateID,this._updateID++;var i=t._uvs;this.mapCoord.set(i.x1-i.x0,i.y1-i.y0,i.x3-i.x0,i.y3-i.y0,i.x0,i.y0);var n=t.orig,o=t.trim;o&&(th.set(n.width/o.width,0,0,n.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(th));var a=t.baseTexture,s=this.uClampFrame,u=this.clampMargin/a.resolution,l=this.clampOffset;return s[0]=(t._frame.x+u+l)/a.width,s[1]=(t._frame.y+u+l)/a.height,s[2]=(t._frame.x+t._frame.width-u+l)/a.width,s[3]=(t._frame.y+t._frame.height-u+l)/a.height,this.uClampOffset[0]=l/a.realWidth,this.uClampOffset[1]=l/a.realHeight,this.isSimple=t._frame.width===a.width&&t._frame.height===a.height&&t.rotate===0,!0},r}(),sg=function(r){at(e,r);function e(t,i,n){var o=this,a=null;return typeof t!="string"&&i===void 0&&n===void 0&&(a=t,t=void 0,i=void 0,n=void 0),o=r.call(this,t||og,i||ag,n)||this,o.maskSprite=a,o.maskMatrix=new yt,o}return Object.defineProperty(e.prototype,"maskSprite",{get:function(){return this._maskSprite},set:function(t){this._maskSprite=t,this._maskSprite&&(this._maskSprite.renderable=!1)},enumerable:!1,configurable:!0}),e.prototype.apply=function(t,i,n,o){var a=this._maskSprite,s=a._texture;!s.valid||(s.uvMatrix||(s.uvMatrix=new qo(s,0)),s.uvMatrix.update(),this.uniforms.npmAlpha=s.baseTexture.alphaMode?0:1,this.uniforms.mask=s,this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,a).prepend(s.uvMatrix.mapCoord),this.uniforms.alpha=a.worldAlpha,this.uniforms.maskClamp=s.uvMatrix.uClampFrame,t.applyFilter(this,i,n,o))},e}(V),eh=function(){function r(e){this.renderer=e,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}return r.prototype.setMaskStack=function(e){this.maskStack=e,this.renderer.scissor.setMaskStack(e),this.renderer.stencil.setMaskStack(e)},r.prototype.push=function(e,t){var i=t;if(!i.isMaskData){var n=this.maskDataPool.pop()||new Hm;n.pooled=!0,n.maskObject=t,i=n}var o=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null;if(i.copyCountersOrReset(o),i.autoDetect&&this.detect(i),i._target=e,i.type!==Lt.SPRITE&&this.maskStack.push(i),i.enabled)switch(i.type){case Lt.SCISSOR:this.renderer.scissor.push(i);break;case Lt.STENCIL:this.renderer.stencil.push(i);break;case Lt.SPRITE:i.copyCountersOrReset(null),this.pushSpriteMask(i);break}i.type===Lt.SPRITE&&this.maskStack.push(i)},r.prototype.pop=function(e){var t=this.maskStack.pop();if(!(!t||t._target!==e)){if(t.enabled)switch(t.type){case Lt.SCISSOR:this.renderer.scissor.pop();break;case Lt.STENCIL:this.renderer.stencil.pop(t.maskObject);break;case Lt.SPRITE:this.popSpriteMask(t);break}if(t.reset(),t.pooled&&this.maskDataPool.push(t),this.maskStack.length!==0){var i=this.maskStack[this.maskStack.length-1];i.type===Lt.SPRITE&&i._filters&&(i._filters[0].maskSprite=i.maskObject)}}},r.prototype.detect=function(e){var t=e.maskObject;t.isSprite?e.type=Lt.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(e)?e.type=Lt.SCISSOR:e.type=Lt.STENCIL},r.prototype.pushSpriteMask=function(e){var t,i,n=e.maskObject,o=e._target,a=e._filters;a||(a=this.alphaMaskPool[this.alphaMaskIndex],a||(a=this.alphaMaskPool[this.alphaMaskIndex]=[new sg]));var s=this.renderer,u=s.renderTexture,l,h;if(u.current){var f=u.current;l=e.resolution||f.resolution,h=(t=e.multisample)!==null&&t!==void 0?t:f.multisample}else l=e.resolution||s.resolution,h=(i=e.multisample)!==null&&i!==void 0?i:s.multisample;a[0].resolution=l,a[0].multisample=h,a[0].maskSprite=n;var c=o.filterArea;o.filterArea=n.getBounds(!0),s.filter.push(o,a),o.filterArea=c,e._filters||this.alphaMaskIndex++},r.prototype.popSpriteMask=function(e){this.renderer.filter.pop(),e._filters?e._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)},r.prototype.destroy=function(){this.renderer=null},r}(),rh=function(){function r(e){this.renderer=e,this.maskStack=[],this.glConst=0}return r.prototype.getStackLength=function(){return this.maskStack.length},r.prototype.setMaskStack=function(e){var t=this.renderer.gl,i=this.getStackLength();this.maskStack=e;var n=this.getStackLength();n!==i&&(n===0?t.disable(this.glConst):(t.enable(this.glConst),this._useCurrent()))},r.prototype._useCurrent=function(){},r.prototype.destroy=function(){this.renderer=null,this.maskStack=null},r}(),ih=new yt,nh=function(r){at(e,r);function e(t){var i=r.call(this,t)||this;return i.glConst=WebGLRenderingContext.SCISSOR_TEST,i}return e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._scissorCounter:0},e.prototype.calcScissorRect=function(t){if(!t._scissorRectLocal){var i=t._scissorRect,n=t.maskObject,o=this.renderer,a=o.renderTexture;n.renderable=!0;var s=n.getBounds();this.roundFrameToPixels(s,a.current?a.current.resolution:o.resolution,a.sourceFrame,a.destinationFrame,o.projection.transform),n.renderable=!1,i&&s.fit(i),t._scissorRectLocal=s}},e.isMatrixRotated=function(t){if(!t)return!1;var i=t.a,n=t.b,o=t.c,a=t.d;return(Math.abs(n)>1e-4||Math.abs(o)>1e-4)&&(Math.abs(i)>1e-4||Math.abs(a)>1e-4)},e.prototype.testScissor=function(t){var i=t.maskObject;if(!i.isFastRect||!i.isFastRect()||e.isMatrixRotated(i.worldTransform)||e.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(t);var n=t._scissorRectLocal;return n.width>0&&n.height>0},e.prototype.roundFrameToPixels=function(t,i,n,o,a){e.isMatrixRotated(a)||(a=a?ih.copyFrom(a):ih.identity(),a.translate(-n.x,-n.y).scale(o.width/n.width,o.height/n.height).translate(o.x,o.y),this.renderer.filter.transformAABB(a,t),t.fit(o),t.x=Math.round(t.x*i),t.y=Math.round(t.y*i),t.width=Math.round(t.width*i),t.height=Math.round(t.height*i))},e.prototype.push=function(t){t._scissorRectLocal||this.calcScissorRect(t);var i=this.renderer.gl;t._scissorRect||i.enable(i.SCISSOR_TEST),t._scissorCounter++,t._scissorRect=t._scissorRectLocal,this._useCurrent()},e.prototype.pop=function(){var t=this.renderer.gl;this.getStackLength()>0?this._useCurrent():t.disable(t.SCISSOR_TEST)},e.prototype._useCurrent=function(){var t=this.maskStack[this.maskStack.length-1]._scissorRect,i;this.renderer.renderTexture.current?i=t.y:i=this.renderer.height-t.height-t.y,this.renderer.gl.scissor(t.x,i,t.width,t.height)},e}(rh),oh=function(r){at(e,r);function e(t){var i=r.call(this,t)||this;return i.glConst=WebGLRenderingContext.STENCIL_TEST,i}return e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._stencilCounter:0},e.prototype.push=function(t){var i=t.maskObject,n=this.renderer.gl,o=t._stencilCounter;o===0&&(this.renderer.framebuffer.forceStencil(),n.clearStencil(0),n.clear(n.STENCIL_BUFFER_BIT),n.enable(n.STENCIL_TEST)),t._stencilCounter++,n.colorMask(!1,!1,!1,!1),n.stencilFunc(n.EQUAL,o,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.INCR),i.renderable=!0,i.render(this.renderer),this.renderer.batch.flush(),i.renderable=!1,this._useCurrent()},e.prototype.pop=function(t){var i=this.renderer.gl;this.getStackLength()===0?i.disable(i.STENCIL_TEST):(i.colorMask(!1,!1,!1,!1),i.stencilOp(i.KEEP,i.KEEP,i.DECR),t.renderable=!0,t.render(this.renderer),this.renderer.batch.flush(),t.renderable=!1,this._useCurrent())},e.prototype._useCurrent=function(){var t=this.renderer.gl;t.colorMask(!0,!0,!0,!0),t.stencilFunc(t.EQUAL,this.getStackLength(),4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)},e}(rh),ah=function(){function r(e){this.renderer=e,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new yt,this.transform=null}return r.prototype.update=function(e,t,i,n){this.destinationFrame=e||this.destinationFrame||this.defaultFrame,this.sourceFrame=t||this.sourceFrame||e,this.calculateProjection(this.destinationFrame,this.sourceFrame,i,n),this.transform&&this.projectionMatrix.append(this.transform);var o=this.renderer;o.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,o.globalUniforms.update(),o.shader.shader&&o.shader.syncUniformGroup(o.shader.shader.uniforms.globals)},r.prototype.calculateProjection=function(e,t,i,n){var o=this.projectionMatrix,a=n?-1:1;o.identity(),o.a=1/t.width*2,o.d=a*(1/t.height*2),o.tx=-1-t.x*o.a,o.ty=-a-t.y*o.d},r.prototype.setTransform=function(e){},r.prototype.destroy=function(){this.renderer=null},r}(),cr=new Z,mi=new Z,sh=function(){function r(e){this.renderer=e,this.clearColor=e._backgroundColorRgba,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new Z,this.destinationFrame=new Z,this.viewportFrame=new Z}return r.prototype.bind=function(e,t,i){e===void 0&&(e=null);var n=this.renderer;this.current=e;var o,a,s;e?(o=e.baseTexture,s=o.resolution,t||(cr.width=e.frame.width,cr.height=e.frame.height,t=cr),i||(mi.x=e.frame.x,mi.y=e.frame.y,mi.width=t.width,mi.height=t.height,i=mi),a=o.framebuffer):(s=n.resolution,t||(cr.width=n.screen.width,cr.height=n.screen.height,t=cr),i||(i=cr,i.width=t.width,i.height=t.height));var u=this.viewportFrame;u.x=i.x*s,u.y=i.y*s,u.width=i.width*s,u.height=i.height*s,e||(u.y=n.view.height-(u.y+u.height)),u.ceil(),this.renderer.framebuffer.bind(a,u),this.renderer.projection.update(i,t,s,!a),e?this.renderer.mask.setMaskStack(o.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(t),this.destinationFrame.copyFrom(i)},r.prototype.clear=function(e,t){this.current?e=e||this.current.baseTexture.clearColor:e=e||this.clearColor;var i=this.destinationFrame,n=this.current?this.current.baseTexture:this.renderer.screen,o=i.width!==n.width||i.height!==n.height;if(o){var a=this.viewportFrame,s=a.x,u=a.y,l=a.width,h=a.height;s=Math.round(s),u=Math.round(u),l=Math.round(l),h=Math.round(h),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(s,u,l,h)}this.renderer.framebuffer.clear(e[0],e[1],e[2],e[3],t),o&&this.renderer.scissor.pop()},r.prototype.resize=function(){this.bind(null)},r.prototype.reset=function(){this.bind(null)},r.prototype.destroy=function(){this.renderer=null},r}();function ug(r,e,t,i,n){t.buffer.update(n)}var lg={float:`
        data[offset] = v;
    `,vec2:`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,vec3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,vec4:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,mat2:`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,mat3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,mat4:`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `},uh={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function hg(r){for(var e=r.map(function(u){return{data:u,offset:0,dataLen:0,dirty:0}}),t=0,i=0,n=0,o=0;o<e.length;o++){var a=e[o];if(t=uh[a.data.type],a.data.size>1&&(t=Math.max(t,16)*a.data.size),a.dataLen=t,i%t!=0&&i<16){var s=i%t%16;i+=s,n+=s}i+t>16?(n=Math.ceil(n/16)*16,a.offset=n,n+=t,i=t):(a.offset=n,i+=t,n+=t)}return n=Math.ceil(n/16)*16,{uboElements:e,size:n}}function fg(r,e){var t=[];for(var i in r)e[i]&&t.push(e[i]);return t.sort(function(n,o){return n.index-o.index}),t}function cg(r,e){if(!r.autoManage)return{size:0,syncFunc:ug};for(var t=fg(r.uniforms,e),i=hg(t),n=i.uboElements,o=i.size,a=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `],s=0;s<n.length;s++){for(var u=n[s],l=r.uniforms[u.data.name],h=u.data.name,f=!1,c=0;c<Ur.length;c++){var d=Ur[c];if(d.codeUbo&&d.test(u.data,l)){a.push("offset = "+u.offset/4+";",Ur[c].codeUbo(u.data.name,l)),f=!0;break}}if(!f)if(u.data.size>1){var _=Zl(u.data.type),p=Math.max(uh[u.data.type]/16,1),v=_/p,m=(4-v%4)%4;a.push(`
                cv = ud.`+h+`.value;
                v = uv.`+h+`;
                offset = `+u.offset/4+`;

                t = 0;

                for(var i=0; i < `+u.data.size*p+`; i++)
                {
                    for(var j = 0; j < `+v+`; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += `+m+`;
                }

                `)}else{var x=lg[u.data.type];a.push(`
                cv = ud.`+h+`.value;
                v = uv.`+h+`;
                offset = `+u.offset/4+`;
                `+x+`;
                `)}}return a.push(`
       renderer.buffer.update(buffer);
    `),{size:o,syncFunc:new Function("ud","uv","renderer","syncData","buffer",a.join(`
`))}}var dg=function(){function r(e,t){this.program=e,this.uniformData=t,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}return r.prototype.destroy=function(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null},r}();function pg(r,e){for(var t={},i=e.getProgramParameter(r,e.ACTIVE_ATTRIBUTES),n=0;n<i;n++){var o=e.getActiveAttrib(r,n);if(o.name.indexOf("gl_")!==0){var a=Ql(e,o.type),s={type:a,name:o.name,size:Zl(a),location:e.getAttribLocation(r,o.name)};t[o.name]=s}}return t}function _g(r,e){for(var t={},i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS),n=0;n<i;n++){var o=e.getActiveUniform(r,n),a=o.name.replace(/\[.*?\]$/,""),s=!!o.name.match(/\[.*?\]$/),u=Ql(e,o.type);t[a]={name:a,index:n,type:u,size:o.size,isArray:s,value:Yl(u,o.size)}}return t}function vg(r,e){var t=$l(r,r.VERTEX_SHADER,e.vertexSrc),i=$l(r,r.FRAGMENT_SHADER,e.fragmentSrc),n=r.createProgram();if(r.attachShader(n,t),r.attachShader(n,i),r.linkProgram(n),r.getProgramParameter(n,r.LINK_STATUS)||jm(r,n,t,i),e.attributeData=pg(n,r),e.uniformData=_g(n,r),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)){var o=Object.keys(e.attributeData);o.sort(function(h,f){return h>f?1:-1});for(var a=0;a<o.length;a++)e.attributeData[o[a]].location=a,r.bindAttribLocation(n,a,o[a]);r.linkProgram(n)}r.deleteShader(t),r.deleteShader(i);var s={};for(var a in e.uniformData){var u=e.uniformData[a];s[a]={location:r.getUniformLocation(n,a),value:Yl(u.type,u.size)}}var l=new dg(n,s);return l}var mg=0,yn={textureCount:0,uboCount:0},lh=function(){function r(e){this.destroyed=!1,this.renderer=e,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=mg++}return r.prototype.systemCheck=function(){if(!Qm())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")},r.prototype.contextChange=function(e){this.gl=e,this.reset()},r.prototype.bind=function(e,t){e.uniforms.globals=this.renderer.globalUniforms;var i=e.program,n=i.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(e);return this.shader=e,this.program!==i&&(this.program=i,this.gl.useProgram(n.program)),t||(yn.textureCount=0,yn.uboCount=0,this.syncUniformGroup(e.uniformGroup,yn)),n},r.prototype.setUniforms=function(e){var t=this.shader.program,i=t.glPrograms[this.renderer.CONTEXT_UID];t.syncUniforms(i.uniformData,e,this.renderer)},r.prototype.syncUniformGroup=function(e,t){var i=this.getGlProgram();(!e.static||e.dirtyId!==i.uniformDirtyGroups[e.id])&&(i.uniformDirtyGroups[e.id]=e.dirtyId,this.syncUniforms(e,i,t))},r.prototype.syncUniforms=function(e,t,i){var n=e.syncUniforms[this.shader.program.id]||this.createSyncGroups(e);n(t.uniformData,e.uniforms,this.renderer,i)},r.prototype.createSyncGroups=function(e){var t=this.getSignature(e,this.shader.program.uniformData,"u");return this.cache[t]||(this.cache[t]=qm(e,this.shader.program.uniformData)),e.syncUniforms[this.shader.program.id]=this.cache[t],e.syncUniforms[this.shader.program.id]},r.prototype.syncUniformBufferGroup=function(e,t){var i=this.getGlProgram();if(!e.static||e.dirtyId!==0||!i.uniformGroups[e.id]){e.dirtyId=0;var n=i.uniformGroups[e.id]||this.createSyncBufferGroup(e,i,t);e.buffer.update(),n(i.uniformData,e.uniforms,this.renderer,yn,e.buffer)}this.renderer.buffer.bindBufferBase(e.buffer,i.uniformBufferBindings[t])},r.prototype.createSyncBufferGroup=function(e,t,i){var n=this.renderer.gl;this.renderer.buffer.bind(e.buffer);var o=this.gl.getUniformBlockIndex(t.program,i);t.uniformBufferBindings[i]=this.shader.uniformBindCount,n.uniformBlockBinding(t.program,o,this.shader.uniformBindCount),this.shader.uniformBindCount++;var a=this.getSignature(e,this.shader.program.uniformData,"ubo"),s=this._uboCache[a];if(s||(s=this._uboCache[a]=cg(e,this.shader.program.uniformData)),e.autoManage){var u=new Float32Array(s.size/4);e.buffer.update(u)}return t.uniformGroups[e.id]=s.syncFunc,t.uniformGroups[e.id]},r.prototype.getSignature=function(e,t,i){var n=e.uniforms,o=[i+"-"];for(var a in n)o.push(a),t[a]&&o.push(t[a].type);return o.join("-")},r.prototype.getGlProgram=function(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null},r.prototype.generateProgram=function(e){var t=this.gl,i=e.program,n=vg(t,i);return i.glPrograms[this.renderer.CONTEXT_UID]=n,n},r.prototype.reset=function(){this.program=null,this.shader=null},r.prototype.destroy=function(){this.renderer=null,this.destroyed=!0},r}();function gg(r,e){return e===void 0&&(e=[]),e[D.NORMAL]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.ADD]=[r.ONE,r.ONE],e[D.MULTIPLY]=[r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.SCREEN]=[r.ONE,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.OVERLAY]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.DARKEN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.LIGHTEN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.COLOR_DODGE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.COLOR_BURN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.HARD_LIGHT]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.SOFT_LIGHT]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.DIFFERENCE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.EXCLUSION]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.HUE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.SATURATION]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.COLOR]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.LUMINOSITY]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.NONE]=[0,0],e[D.NORMAL_NPM]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.ADD_NPM]=[r.SRC_ALPHA,r.ONE,r.ONE,r.ONE],e[D.SCREEN_NPM]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[D.SRC_IN]=[r.DST_ALPHA,r.ZERO],e[D.SRC_OUT]=[r.ONE_MINUS_DST_ALPHA,r.ZERO],e[D.SRC_ATOP]=[r.DST_ALPHA,r.ONE_MINUS_SRC_ALPHA],e[D.DST_OVER]=[r.ONE_MINUS_DST_ALPHA,r.ONE],e[D.DST_IN]=[r.ZERO,r.SRC_ALPHA],e[D.DST_OUT]=[r.ZERO,r.ONE_MINUS_SRC_ALPHA],e[D.DST_ATOP]=[r.ONE_MINUS_DST_ALPHA,r.SRC_ALPHA],e[D.XOR]=[r.ONE_MINUS_DST_ALPHA,r.ONE_MINUS_SRC_ALPHA],e[D.SUBTRACT]=[r.ONE,r.ONE,r.ONE,r.ONE,r.FUNC_REVERSE_SUBTRACT,r.FUNC_ADD],e}var yg=0,xg=1,bg=2,Tg=3,Cg=4,wg=5,hh=function(){function r(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=D.NONE,this._blendEq=!1,this.map=[],this.map[yg]=this.setBlend,this.map[xg]=this.setOffset,this.map[bg]=this.setCullFace,this.map[Tg]=this.setDepthTest,this.map[Cg]=this.setFrontFace,this.map[wg]=this.setDepthMask,this.checks=[],this.defaultState=new fr,this.defaultState.blend=!0}return r.prototype.contextChange=function(e){this.gl=e,this.blendModes=gg(e),this.set(this.defaultState),this.reset()},r.prototype.set=function(e){if(e=e||this.defaultState,this.stateId!==e.data){for(var t=this.stateId^e.data,i=0;t;)t&1&&this.map[i].call(this,!!(e.data&1<<i)),t=t>>1,i++;this.stateId=e.data}for(var i=0;i<this.checks.length;i++)this.checks[i](this,e)},r.prototype.forceState=function(e){e=e||this.defaultState;for(var t=0;t<this.map.length;t++)this.map[t].call(this,!!(e.data&1<<t));for(var t=0;t<this.checks.length;t++)this.checks[t](this,e);this.stateId=e.data},r.prototype.setBlend=function(e){this.updateCheck(r.checkBlendMode,e),this.gl[e?"enable":"disable"](this.gl.BLEND)},r.prototype.setOffset=function(e){this.updateCheck(r.checkPolygonOffset,e),this.gl[e?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)},r.prototype.setDepthTest=function(e){this.gl[e?"enable":"disable"](this.gl.DEPTH_TEST)},r.prototype.setDepthMask=function(e){this.gl.depthMask(e)},r.prototype.setCullFace=function(e){this.gl[e?"enable":"disable"](this.gl.CULL_FACE)},r.prototype.setFrontFace=function(e){this.gl.frontFace(this.gl[e?"CW":"CCW"])},r.prototype.setBlendMode=function(e){if(e!==this.blendMode){this.blendMode=e;var t=this.blendModes[e],i=this.gl;t.length===2?i.blendFunc(t[0],t[1]):i.blendFuncSeparate(t[0],t[1],t[2],t[3]),t.length===6?(this._blendEq=!0,i.blendEquationSeparate(t[4],t[5])):this._blendEq&&(this._blendEq=!1,i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD))}},r.prototype.setPolygonOffset=function(e,t){this.gl.polygonOffset(e,t)},r.prototype.reset=function(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)},r.prototype.updateCheck=function(e,t){var i=this.checks.indexOf(e);t&&i===-1?this.checks.push(e):!t&&i!==-1&&this.checks.splice(i,1)},r.checkBlendMode=function(e,t){e.setBlendMode(t.blendMode)},r.checkPolygonOffset=function(e,t){e.setPolygonOffset(1,t.polygonOffset)},r.prototype.destroy=function(){this.gl=null},r}(),fh=function(){function r(e){this.renderer=e,this.count=0,this.checkCount=0,this.maxIdle=M.GC_MAX_IDLE,this.checkCountMax=M.GC_MAX_CHECK_COUNT,this.mode=M.GC_MODE}return r.prototype.postrender=function(){!this.renderer.renderingToScreen||(this.count++,this.mode!==Co.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))},r.prototype.run=function(){for(var e=this.renderer.texture,t=e.managedTextures,i=!1,n=0;n<t.length;n++){var o=t[n];!o.framebuffer&&this.count-o.touched>this.maxIdle&&(e.destroyTexture(o,!0),t[n]=null,i=!0)}if(i){for(var a=0,n=0;n<t.length;n++)t[n]!==null&&(t[a++]=t[n]);t.length=a}},r.prototype.unload=function(e){var t=this.renderer.texture,i=e._texture;i&&!i.framebuffer&&t.destroyTexture(i);for(var n=e.children.length-1;n>=0;n--)this.unload(e.children[n])},r.prototype.destroy=function(){this.renderer=null},r}();function Eg(r){var e,t,i,n,o,a,s,u,l,h,f,c,d,_,p,v,m,x,b,C,y,g,E;return"WebGL2RenderingContext"in self&&r instanceof self.WebGL2RenderingContext?E=(e={},e[X.UNSIGNED_BYTE]=(t={},t[U.RGBA]=r.RGBA8,t[U.RGB]=r.RGB8,t[U.RG]=r.RG8,t[U.RED]=r.R8,t[U.RGBA_INTEGER]=r.RGBA8UI,t[U.RGB_INTEGER]=r.RGB8UI,t[U.RG_INTEGER]=r.RG8UI,t[U.RED_INTEGER]=r.R8UI,t[U.ALPHA]=r.ALPHA,t[U.LUMINANCE]=r.LUMINANCE,t[U.LUMINANCE_ALPHA]=r.LUMINANCE_ALPHA,t),e[X.BYTE]=(i={},i[U.RGBA]=r.RGBA8_SNORM,i[U.RGB]=r.RGB8_SNORM,i[U.RG]=r.RG8_SNORM,i[U.RED]=r.R8_SNORM,i[U.RGBA_INTEGER]=r.RGBA8I,i[U.RGB_INTEGER]=r.RGB8I,i[U.RG_INTEGER]=r.RG8I,i[U.RED_INTEGER]=r.R8I,i),e[X.UNSIGNED_SHORT]=(n={},n[U.RGBA_INTEGER]=r.RGBA16UI,n[U.RGB_INTEGER]=r.RGB16UI,n[U.RG_INTEGER]=r.RG16UI,n[U.RED_INTEGER]=r.R16UI,n[U.DEPTH_COMPONENT]=r.DEPTH_COMPONENT16,n),e[X.SHORT]=(o={},o[U.RGBA_INTEGER]=r.RGBA16I,o[U.RGB_INTEGER]=r.RGB16I,o[U.RG_INTEGER]=r.RG16I,o[U.RED_INTEGER]=r.R16I,o),e[X.UNSIGNED_INT]=(a={},a[U.RGBA_INTEGER]=r.RGBA32UI,a[U.RGB_INTEGER]=r.RGB32UI,a[U.RG_INTEGER]=r.RG32UI,a[U.RED_INTEGER]=r.R32UI,a[U.DEPTH_COMPONENT]=r.DEPTH_COMPONENT24,a),e[X.INT]=(s={},s[U.RGBA_INTEGER]=r.RGBA32I,s[U.RGB_INTEGER]=r.RGB32I,s[U.RG_INTEGER]=r.RG32I,s[U.RED_INTEGER]=r.R32I,s),e[X.FLOAT]=(u={},u[U.RGBA]=r.RGBA32F,u[U.RGB]=r.RGB32F,u[U.RG]=r.RG32F,u[U.RED]=r.R32F,u[U.DEPTH_COMPONENT]=r.DEPTH_COMPONENT32F,u),e[X.HALF_FLOAT]=(l={},l[U.RGBA]=r.RGBA16F,l[U.RGB]=r.RGB16F,l[U.RG]=r.RG16F,l[U.RED]=r.R16F,l),e[X.UNSIGNED_SHORT_5_6_5]=(h={},h[U.RGB]=r.RGB565,h),e[X.UNSIGNED_SHORT_4_4_4_4]=(f={},f[U.RGBA]=r.RGBA4,f),e[X.UNSIGNED_SHORT_5_5_5_1]=(c={},c[U.RGBA]=r.RGB5_A1,c),e[X.UNSIGNED_INT_2_10_10_10_REV]=(d={},d[U.RGBA]=r.RGB10_A2,d[U.RGBA_INTEGER]=r.RGB10_A2UI,d),e[X.UNSIGNED_INT_10F_11F_11F_REV]=(_={},_[U.RGB]=r.R11F_G11F_B10F,_),e[X.UNSIGNED_INT_5_9_9_9_REV]=(p={},p[U.RGB]=r.RGB9_E5,p),e[X.UNSIGNED_INT_24_8]=(v={},v[U.DEPTH_STENCIL]=r.DEPTH24_STENCIL8,v),e[X.FLOAT_32_UNSIGNED_INT_24_8_REV]=(m={},m[U.DEPTH_STENCIL]=r.DEPTH32F_STENCIL8,m),e):E=(x={},x[X.UNSIGNED_BYTE]=(b={},b[U.RGBA]=r.RGBA,b[U.RGB]=r.RGB,b[U.ALPHA]=r.ALPHA,b[U.LUMINANCE]=r.LUMINANCE,b[U.LUMINANCE_ALPHA]=r.LUMINANCE_ALPHA,b),x[X.UNSIGNED_SHORT_5_6_5]=(C={},C[U.RGB]=r.RGB,C),x[X.UNSIGNED_SHORT_4_4_4_4]=(y={},y[U.RGBA]=r.RGBA,y),x[X.UNSIGNED_SHORT_5_5_5_1]=(g={},g[U.RGBA]=r.RGBA,g),x),E}var Ko=function(){function r(e){this.texture=e,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=X.UNSIGNED_BYTE,this.internalFormat=U.RGBA,this.samplerType=0}return r}(),ch=function(){function r(e){this.renderer=e,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new Q,this.hasIntegerTextures=!1}return r.prototype.contextChange=function(){var e=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=Eg(e);var t=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=t;for(var i=0;i<t;i++)this.boundTextures[i]=null;this.emptyTextures={};var n=new Ko(e.createTexture());e.bindTexture(e.TEXTURE_2D,n.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[e.TEXTURE_2D]=n,this.emptyTextures[e.TEXTURE_CUBE_MAP]=new Ko(e.createTexture()),e.bindTexture(e.TEXTURE_CUBE_MAP,this.emptyTextures[e.TEXTURE_CUBE_MAP].texture);for(var i=0;i<6;i++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null);e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MIN_FILTER,e.LINEAR);for(var i=0;i<this.boundTextures.length;i++)this.bind(null,i)},r.prototype.bind=function(e,t){t===void 0&&(t=0);var i=this.gl;if(e=e==null?void 0:e.castToBaseTexture(),e&&e.valid&&!e.parentTextureArray){e.touched=this.renderer.textureGC.count;var n=e._glTextures[this.CONTEXT_UID]||this.initTexture(e);this.boundTextures[t]!==e&&(this.currentLocation!==t&&(this.currentLocation=t,i.activeTexture(i.TEXTURE0+t)),i.bindTexture(e.target,n.texture)),n.dirtyId!==e.dirtyId&&(this.currentLocation!==t&&(this.currentLocation=t,i.activeTexture(i.TEXTURE0+t)),this.updateTexture(e)),this.boundTextures[t]=e}else this.currentLocation!==t&&(this.currentLocation=t,i.activeTexture(i.TEXTURE0+t)),i.bindTexture(i.TEXTURE_2D,this.emptyTextures[i.TEXTURE_2D].texture),this.boundTextures[t]=null},r.prototype.reset=function(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(var e=0;e<this.boundTextures.length;e++)this.boundTextures[e]=this.unknownTexture},r.prototype.unbind=function(e){var t=this,i=t.gl,n=t.boundTextures;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(var o=0;o<n.length;o++)n[o]===this.unknownTexture&&this.bind(null,o)}for(var o=0;o<n.length;o++)n[o]===e&&(this.currentLocation!==o&&(i.activeTexture(i.TEXTURE0+o),this.currentLocation=o),i.bindTexture(e.target,this.emptyTextures[e.target].texture),n[o]=null)},r.prototype.ensureSamplerType=function(e){var t=this,i=t.boundTextures,n=t.hasIntegerTextures,o=t.CONTEXT_UID;if(!!n)for(var a=e-1;a>=0;--a){var s=i[a];if(s){var u=s._glTextures[o];u.samplerType!==en.FLOAT&&this.renderer.texture.unbind(s)}}},r.prototype.initTexture=function(e){var t=new Ko(this.gl.createTexture());return t.dirtyId=-1,e._glTextures[this.CONTEXT_UID]=t,this.managedTextures.push(e),e.on("dispose",this.destroyTexture,this),t},r.prototype.initTextureType=function(e,t){var i,n;t.internalFormat=(n=(i=this.internalFormats[e.type])===null||i===void 0?void 0:i[e.format])!==null&&n!==void 0?n:e.format,this.webGLVersion===2&&e.type===X.HALF_FLOAT?t.type=this.gl.HALF_FLOAT:t.type=e.type},r.prototype.updateTexture=function(e){var t=e._glTextures[this.CONTEXT_UID];if(!!t){var i=this.renderer;if(this.initTextureType(e,t),e.resource&&e.resource.upload(i,e,t))t.samplerType!==en.FLOAT&&(this.hasIntegerTextures=!0);else{var n=e.realWidth,o=e.realHeight,a=i.gl;(t.width!==n||t.height!==o||t.dirtyId<0)&&(t.width=n,t.height=o,a.texImage2D(e.target,0,t.internalFormat,n,o,0,e.format,t.type,null))}e.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(e),t.dirtyId=e.dirtyId}},r.prototype.destroyTexture=function(e,t){var i=this.gl;if(e=e.castToBaseTexture(),e._glTextures[this.CONTEXT_UID]&&(this.unbind(e),i.deleteTexture(e._glTextures[this.CONTEXT_UID].texture),e.off("dispose",this.destroyTexture,this),delete e._glTextures[this.CONTEXT_UID],!t)){var n=this.managedTextures.indexOf(e);n!==-1&&Or(this.managedTextures,n,1)}},r.prototype.updateTextureStyle=function(e){var t=e._glTextures[this.CONTEXT_UID];!t||((e.mipmap===ce.POW2||this.webGLVersion!==2)&&!e.isPowerOfTwo?t.mipmap=!1:t.mipmap=e.mipmap>=1,this.webGLVersion!==2&&!e.isPowerOfTwo?t.wrapMode=we.CLAMP:t.wrapMode=e.wrapMode,e.resource&&e.resource.style(this.renderer,e,t)||this.setStyle(e,t),t.dirtyStyleId=e.dirtyStyleId)},r.prototype.setStyle=function(e,t){var i=this.gl;if(t.mipmap&&e.mipmap!==ce.ON_MANUAL&&i.generateMipmap(e.target),i.texParameteri(e.target,i.TEXTURE_WRAP_S,t.wrapMode),i.texParameteri(e.target,i.TEXTURE_WRAP_T,t.wrapMode),t.mipmap){i.texParameteri(e.target,i.TEXTURE_MIN_FILTER,e.scaleMode===Wt.LINEAR?i.LINEAR_MIPMAP_LINEAR:i.NEAREST_MIPMAP_NEAREST);var n=this.renderer.context.extensions.anisotropicFiltering;if(n&&e.anisotropicLevel>0&&e.scaleMode===Wt.LINEAR){var o=Math.min(e.anisotropicLevel,i.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT));i.texParameterf(e.target,n.TEXTURE_MAX_ANISOTROPY_EXT,o)}}else i.texParameteri(e.target,i.TEXTURE_MIN_FILTER,e.scaleMode===Wt.LINEAR?i.LINEAR:i.NEAREST);i.texParameteri(e.target,i.TEXTURE_MAG_FILTER,e.scaleMode===Wt.LINEAR?i.LINEAR:i.NEAREST)},r.prototype.destroy=function(){this.renderer=null},r}(),dh={__proto__:null,FilterSystem:kl,BatchSystem:Xl,ContextSystem:jl,FramebufferSystem:zl,GeometrySystem:Vl,MaskSystem:eh,ScissorSystem:nh,StencilSystem:oh,ProjectionSystem:ah,RenderTextureSystem:sh,ShaderSystem:lh,StateSystem:hh,TextureGCSystem:fh,TextureSystem:ch},Zo=new yt,Pg=function(r){at(e,r);function e(t,i){t===void 0&&(t=hi.UNKNOWN);var n=r.call(this)||this;return i=Object.assign({},M.RENDER_OPTIONS,i),n.options=i,n.type=t,n.screen=new Z(0,0,i.width,i.height),n.view=i.view||document.createElement("canvas"),n.resolution=i.resolution||M.RESOLUTION,n.useContextAlpha=i.useContextAlpha,n.autoDensity=!!i.autoDensity,n.preserveDrawingBuffer=i.preserveDrawingBuffer,n.clearBeforeRender=i.clearBeforeRender,n._backgroundColor=0,n._backgroundColorRgba=[0,0,0,1],n._backgroundColorString="#000000",n.backgroundColor=i.backgroundColor||n._backgroundColor,n.backgroundAlpha=i.backgroundAlpha,i.transparent!==void 0&&(er("6.0.0","Option transparent is deprecated, please use backgroundAlpha instead."),n.useContextAlpha=i.transparent,n.backgroundAlpha=i.transparent?0:1),n._lastObjectRendered=null,n.plugins={},n}return e.prototype.initPlugins=function(t){for(var i in t)this.plugins[i]=new t[i](this)},Object.defineProperty(e.prototype,"width",{get:function(){return this.view.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.view.height},enumerable:!1,configurable:!0}),e.prototype.resize=function(t,i){this.view.width=Math.round(t*this.resolution),this.view.height=Math.round(i*this.resolution);var n=this.view.width/this.resolution,o=this.view.height/this.resolution;this.screen.width=n,this.screen.height=o,this.autoDensity&&(this.view.style.width=n+"px",this.view.style.height=o+"px"),this.emit("resize",n,o)},e.prototype.generateTexture=function(t,i,n,o){i===void 0&&(i={}),typeof i=="number"&&(er("6.1.0","generateTexture options (scaleMode, resolution, region) are now object options."),i={scaleMode:i,resolution:n,region:o});var a=i.region,s=Im(i,["region"]);o=a||t.getLocalBounds(null,!0),o.width===0&&(o.width=1),o.height===0&&(o.height=1);var u=lr.create(Lo({width:o.width,height:o.height},s));return Zo.tx=-o.x,Zo.ty=-o.y,this.render(t,{renderTexture:u,clear:!1,transform:Zo,skipUpdateTransform:!!t.parent}),u},e.prototype.destroy=function(t){for(var i in this.plugins)this.plugins[i].destroy(),this.plugins[i]=null;t&&this.view.parentNode&&this.view.parentNode.removeChild(this.view);var n=this;n.plugins=null,n.type=hi.UNKNOWN,n.view=null,n.screen=null,n._tempDisplayObjectParent=null,n.options=null,this._backgroundColorRgba=null,this._backgroundColorString=null,this._lastObjectRendered=null},Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=Wu(t),Ot(t,this._backgroundColorRgba)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"backgroundAlpha",{get:function(){return this._backgroundColorRgba[3]},set:function(t){this._backgroundColorRgba[3]=t},enumerable:!1,configurable:!0}),e}(ni),Ig=function(){function r(e){this.buffer=e||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}return r}(),Ag=function(){function r(e){this.renderer=e,this.managedBuffers={},this.boundBufferBases={}}return r.prototype.destroy=function(){this.renderer=null},r.prototype.contextChange=function(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID},r.prototype.bind=function(e){var t=this,i=t.gl,n=t.CONTEXT_UID,o=e._glBuffers[n]||this.createGLBuffer(e);i.bindBuffer(e.type,o.buffer)},r.prototype.bindBufferBase=function(e,t){var i=this,n=i.gl,o=i.CONTEXT_UID;if(this.boundBufferBases[t]!==e){var a=e._glBuffers[o]||this.createGLBuffer(e);this.boundBufferBases[t]=e,n.bindBufferBase(n.UNIFORM_BUFFER,t,a.buffer)}},r.prototype.bindBufferRange=function(e,t,i){var n=this,o=n.gl,a=n.CONTEXT_UID;i=i||0;var s=e._glBuffers[a]||this.createGLBuffer(e);o.bindBufferRange(o.UNIFORM_BUFFER,t||0,s.buffer,i*256,256)},r.prototype.update=function(e){var t=this,i=t.gl,n=t.CONTEXT_UID,o=e._glBuffers[n];if(e._updateID!==o.updateID)if(o.updateID=e._updateID,i.bindBuffer(e.type,o.buffer),o.byteLength>=e.data.byteLength)i.bufferSubData(e.type,0,e.data);else{var a=e.static?i.STATIC_DRAW:i.DYNAMIC_DRAW;o.byteLength=e.data.byteLength,i.bufferData(e.type,e.data,a)}},r.prototype.dispose=function(e,t){if(!!this.managedBuffers[e.id]){delete this.managedBuffers[e.id];var i=e._glBuffers[this.CONTEXT_UID],n=this.gl;e.disposeRunner.remove(this),!!i&&(t||n.deleteBuffer(i.buffer),delete e._glBuffers[this.CONTEXT_UID])}},r.prototype.disposeAll=function(e){for(var t=Object.keys(this.managedBuffers),i=0;i<t.length;i++)this.dispose(this.managedBuffers[t[i]],e)},r.prototype.createGLBuffer=function(e){var t=this,i=t.CONTEXT_UID,n=t.gl;return e._glBuffers[i]=new Ig(n.createBuffer()),this.managedBuffers[e.id]=e,e.disposeRunner.add(this),e._glBuffers[i]},r}(),Be=function(r){at(e,r);function e(t){var i=r.call(this,hi.WEBGL,t)||this;return t=i.options,i.gl=null,i.CONTEXT_UID=0,i.runners={destroy:new Mt("destroy"),contextChange:new Mt("contextChange"),reset:new Mt("reset"),update:new Mt("update"),postrender:new Mt("postrender"),prerender:new Mt("prerender"),resize:new Mt("resize")},i.runners.contextChange.add(i),i.globalUniforms=new hr({projectionMatrix:new yt},!0),i.addSystem(eh,"mask").addSystem(jl,"context").addSystem(hh,"state").addSystem(lh,"shader").addSystem(ch,"texture").addSystem(Ag,"buffer").addSystem(Vl,"geometry").addSystem(zl,"framebuffer").addSystem(nh,"scissor").addSystem(oh,"stencil").addSystem(ah,"projection").addSystem(fh,"textureGC").addSystem(kl,"filter").addSystem(sh,"renderTexture").addSystem(Xl,"batch"),i.initPlugins(e.__plugins),i.multisample=void 0,t.context?i.context.initFromContext(t.context):i.context.initFromOptions({alpha:!!i.useContextAlpha,antialias:t.antialias,premultipliedAlpha:i.useContextAlpha&&i.useContextAlpha!=="notMultiplied",stencil:!0,preserveDrawingBuffer:t.preserveDrawingBuffer,powerPreference:i.options.powerPreference}),i.renderingToScreen=!0,cp(i.context.webGLVersion===2?"WebGL 2":"WebGL 1"),i.resize(i.options.width,i.options.height),i}return e.create=function(t){if(dp())return new e(t);throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')},e.prototype.contextChange=function(){var t=this.gl,i;if(this.context.webGLVersion===1){var n=t.getParameter(t.FRAMEBUFFER_BINDING);t.bindFramebuffer(t.FRAMEBUFFER,null),i=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.FRAMEBUFFER,n)}else{var n=t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),i=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,n)}i>=Tt.HIGH?this.multisample=Tt.HIGH:i>=Tt.MEDIUM?this.multisample=Tt.MEDIUM:i>=Tt.LOW?this.multisample=Tt.LOW:this.multisample=Tt.NONE},e.prototype.addSystem=function(t,i){var n=new t(this);if(this[i])throw new Error('Whoops! The name "'+i+'" is already in use');this[i]=n;for(var o in this.runners)this.runners[o].add(n);return this},e.prototype.render=function(t,i){var n,o,a,s;if(i&&(i instanceof lr?(er("6.0.0","Renderer#render arguments changed, use options instead."),n=i,o=arguments[2],a=arguments[3],s=arguments[4]):(n=i.renderTexture,o=i.clear,a=i.transform,s=i.skipUpdateTransform)),this.renderingToScreen=!n,this.runners.prerender.emit(),this.emit("prerender"),this.projection.transform=a,!this.context.isLost){if(n||(this._lastObjectRendered=t),!s){var u=t.enableTempParent();t.updateTransform(),t.disableTempParent(u)}this.renderTexture.bind(n),this.batch.currentRenderer.start(),(o!==void 0?o:this.clearBeforeRender)&&this.renderTexture.clear(),t.render(this),this.batch.currentRenderer.flush(),n&&n.baseTexture.update(),this.runners.postrender.emit(),this.projection.transform=null,this.emit("postrender")}},e.prototype.generateTexture=function(t,i,n,o){i===void 0&&(i={});var a=r.prototype.generateTexture.call(this,t,i,n,o);return this.framebuffer.blit(),a},e.prototype.resize=function(t,i){r.prototype.resize.call(this,t,i),this.runners.resize.emit(this.screen.height,this.screen.width)},e.prototype.reset=function(){return this.runners.reset.emit(),this},e.prototype.clear=function(){this.renderTexture.bind(),this.renderTexture.clear()},e.prototype.destroy=function(t){this.runners.destroy.emit();for(var i in this.runners)this.runners[i].destroy();r.prototype.destroy.call(this,t),this.gl=null},Object.defineProperty(e.prototype,"extract",{get:function(){return er("6.0.0","Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),this.plugins.extract},enumerable:!1,configurable:!0}),e.registerPlugin=function(t,i){e.__plugins=e.__plugins||{},e.__plugins[t]=i},e}(Pg);function Rg(r){return Be.create(r)}var Sg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Og=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,Ng=Sg,ph=Og,Jo=function(){function r(){this.texArray=null,this.blend=0,this.type=re.TRIANGLES,this.start=0,this.size=0,this.data=null}return r}(),Qo=function(){function r(){this.elements=[],this.ids=[],this.count=0}return r.prototype.clear=function(){for(var e=0;e<this.count;e++)this.elements[e]=null;this.count=0},r}(),ta=function(){function r(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}return Object.defineProperty(r.prototype,"int8View",{get:function(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"uint8View",{get:function(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"int16View",{get:function(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"uint16View",{get:function(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"int32View",{get:function(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View},enumerable:!1,configurable:!0}),r.prototype.view=function(e){return this[e+"View"]},r.prototype.destroy=function(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null},r.sizeOf=function(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(e+" isn't a valid view type")}},r}(),Fg=function(r){at(e,r);function e(t){var i=r.call(this,t)||this;return i.shaderGenerator=null,i.geometryClass=null,i.vertexSize=null,i.state=fr.for2d(),i.size=M.SPRITE_BATCH_SIZE*4,i._vertexCount=0,i._indexCount=0,i._bufferedElements=[],i._bufferedTextures=[],i._bufferSize=0,i._shader=null,i._packedGeometries=[],i._packedGeometryPoolSize=2,i._flushId=0,i._aBuffers={},i._iBuffers={},i.MAX_TEXTURES=1,i.renderer.on("prerender",i.onPrerender,i),t.runners.contextChange.add(i),i._dcIndex=0,i._aIndex=0,i._iIndex=0,i._attributeBuffer=null,i._indexBuffer=null,i._tempBoundTextures=[],i}return e.prototype.contextChange=function(){var t=this.renderer.gl;M.PREFER_ENV===Ce.WEBGL_LEGACY?this.MAX_TEXTURES=1:(this.MAX_TEXTURES=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),M.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=Jm(this.MAX_TEXTURES,t)),this._shader=this.shaderGenerator.generateShader(this.MAX_TEXTURES);for(var i=0;i<this._packedGeometryPoolSize;i++)this._packedGeometries[i]=new this.geometryClass;this.initFlushBuffers()},e.prototype.initFlushBuffers=function(){for(var t=e._drawCallPool,i=e._textureArrayPool,n=this.size/4,o=Math.floor(n/this.MAX_TEXTURES)+1;t.length<n;)t.push(new Jo);for(;i.length<o;)i.push(new Qo);for(var a=0;a<this.MAX_TEXTURES;a++)this._tempBoundTextures[a]=null},e.prototype.onPrerender=function(){this._flushId=0},e.prototype.render=function(t){!t._texture.valid||(this._vertexCount+t.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=t.vertexData.length/2,this._indexCount+=t.indices.length,this._bufferedTextures[this._bufferSize]=t._texture.baseTexture,this._bufferedElements[this._bufferSize++]=t)},e.prototype.buildTexturesAndDrawCalls=function(){var t=this,i=t._bufferedTextures,n=t.MAX_TEXTURES,o=e._textureArrayPool,a=this.renderer.batch,s=this._tempBoundTextures,u=this.renderer.textureGC.count,l=++Q._globalBatch,h=0,f=o[0],c=0;a.copyBoundTextures(s,n);for(var d=0;d<this._bufferSize;++d){var _=i[d];i[d]=null,_._batchEnabled!==l&&(f.count>=n&&(a.boundArray(f,s,l,n),this.buildDrawCalls(f,c,d),c=d,f=o[++h],++l),_._batchEnabled=l,_.touched=u,f.elements[f.count++]=_)}f.count>0&&(a.boundArray(f,s,l,n),this.buildDrawCalls(f,c,this._bufferSize),++h,++l);for(var d=0;d<s.length;d++)s[d]=null;Q._globalBatch=l},e.prototype.buildDrawCalls=function(t,i,n){var o=this,a=o._bufferedElements,s=o._attributeBuffer,u=o._indexBuffer,l=o.vertexSize,h=e._drawCallPool,f=this._dcIndex,c=this._aIndex,d=this._iIndex,_=h[f];_.start=this._iIndex,_.texArray=t;for(var p=i;p<n;++p){var v=a[p],m=v._texture.baseTexture,x=qu[m.alphaMode?1:0][v.blendMode];a[p]=null,i<p&&_.blend!==x&&(_.size=d-_.start,i=p,_=h[++f],_.texArray=t,_.start=d),this.packInterleavedGeometry(v,s,u,c,d),c+=v.vertexData.length/2*l,d+=v.indices.length,_.blend=x}i<n&&(_.size=d-_.start,++f),this._dcIndex=f,this._aIndex=c,this._iIndex=d},e.prototype.bindAndClearTexArray=function(t){for(var i=this.renderer.texture,n=0;n<t.count;n++)i.bind(t.elements[n],t.ids[n]),t.elements[n]=null;t.count=0},e.prototype.updateGeometry=function(){var t=this,i=t._packedGeometries,n=t._attributeBuffer,o=t._indexBuffer;M.CAN_UPLOAD_SAME_BUFFER?(i[this._flushId]._buffer.update(n.rawBinaryData),i[this._flushId]._indexBuffer.update(o),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,i[this._flushId]=new this.geometryClass),i[this._flushId]._buffer.update(n.rawBinaryData),i[this._flushId]._indexBuffer.update(o),this.renderer.geometry.bind(i[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)},e.prototype.drawBatches=function(){for(var t=this._dcIndex,i=this.renderer,n=i.gl,o=i.state,a=e._drawCallPool,s=null,u=0;u<t;u++){var l=a[u],h=l.texArray,f=l.type,c=l.size,d=l.start,_=l.blend;s!==h&&(s=h,this.bindAndClearTexArray(h)),this.state.blendMode=_,o.set(this.state),n.drawElements(f,c,n.UNSIGNED_SHORT,d*2)}},e.prototype.flush=function(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)},e.prototype.start=function(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),this.renderer.shader.bind(this._shader),M.CAN_UPLOAD_SAME_BUFFER&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])},e.prototype.stop=function(){this.flush()},e.prototype.destroy=function(){for(var t=0;t<this._packedGeometryPoolSize;t++)this._packedGeometries[t]&&this._packedGeometries[t].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),r.prototype.destroy.call(this)},e.prototype.getAttributeBuffer=function(t){var i=rn(Math.ceil(t/8)),n=tl(i),o=i*8;this._aBuffers.length<=n&&(this._iBuffers.length=n+1);var a=this._aBuffers[o];return a||(this._aBuffers[o]=a=new ta(o*this.vertexSize*4)),a},e.prototype.getIndexBuffer=function(t){var i=rn(Math.ceil(t/12)),n=tl(i),o=i*12;this._iBuffers.length<=n&&(this._iBuffers.length=n+1);var a=this._iBuffers[n];return a||(this._iBuffers[n]=a=new Uint16Array(o)),a},e.prototype.packInterleavedGeometry=function(t,i,n,o,a){for(var s=i.uint32View,u=i.float32View,l=o/this.vertexSize,h=t.uvs,f=t.indices,c=t.vertexData,d=t._texture.baseTexture._batchLocation,_=Math.min(t.worldAlpha,1),p=_<1&&t._texture.baseTexture.alphaMode?Eo(t._tintRGB,_):t._tintRGB+(_*255<<24),v=0;v<c.length;v+=2)u[o++]=c[v],u[o++]=c[v+1],u[o++]=h[v],u[o++]=h[v+1],s[o++]=p,u[o++]=d;for(var v=0;v<f.length;v++)n[a++]=l+f[v]},e._drawCallPool=[],e._textureArrayPool=[],e}(_n),Ug=function(){function r(e,t){if(this.vertexSrc=e,this.fragTemplate=t,this.programCache={},this.defaultGroupCache={},t.indexOf("%count%")<0)throw new Error('Fragment template must contain "%count%".');if(t.indexOf("%forloop%")<0)throw new Error('Fragment template must contain "%forloop%".')}return r.prototype.generateShader=function(e){if(!this.programCache[e]){for(var t=new Int32Array(e),i=0;i<e;i++)t[i]=i;this.defaultGroupCache[e]=hr.from({uSamplers:t},!0);var n=this.fragTemplate;n=n.replace(/%count%/gi,""+e),n=n.replace(/%forloop%/gi,this.generateSampleSrc(e)),this.programCache[e]=new vi(this.vertexSrc,n)}var o={tint:new Float32Array([1,1,1,1]),translationMatrix:new yt,default:this.defaultGroupCache[e]};return new Me(this.programCache[e],o)},r.prototype.generateSampleSrc=function(e){var t="";t+=`
`,t+=`
`;for(var i=0;i<e;i++)i>0&&(t+=`
else `),i<e-1&&(t+="if(vTextureId < "+i+".5)"),t+=`
{`,t+=`
	color = texture2D(uSamplers[`+i+"], vTextureCoord);",t+=`
}`;return t+=`
`,t+=`
`,t},r}(),_h=function(r){at(e,r);function e(t){t===void 0&&(t=!1);var i=r.call(this)||this;return i._buffer=new wt(null,t,!1),i._indexBuffer=new wt(null,t,!0),i.addAttribute("aVertexPosition",i._buffer,2,!1,X.FLOAT).addAttribute("aTextureCoord",i._buffer,2,!1,X.FLOAT).addAttribute("aColor",i._buffer,4,!0,X.UNSIGNED_BYTE).addAttribute("aTextureId",i._buffer,1,!0,X.FLOAT).addIndex(i._indexBuffer),i}return e}(di),vh=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`,mh=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,Lg=function(){function r(){}return r.create=function(e){var t=Object.assign({vertex:vh,fragment:mh,geometryClass:_h,vertexSize:6},e),i=t.vertex,n=t.fragment,o=t.vertexSize,a=t.geometryClass;return function(s){at(u,s);function u(l){var h=s.call(this,l)||this;return h.shaderGenerator=new Ug(i,n),h.geometryClass=a,h.vertexSize=o,h}return u}(Fg)},Object.defineProperty(r,"defaultVertexSrc",{get:function(){return vh},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultFragmentTemplate",{get:function(){return mh},enumerable:!1,configurable:!0}),r}(),Mg=Lg.create(),Bg={},Gg=function(r){Object.defineProperty(Bg,r,{get:function(){return er("6.0.0","PIXI.systems."+r+" has moved to PIXI."+r),Fl[r]}})};for(var ea in Fl)Gg(ea);var Dg={},kg=function(r){Object.defineProperty(Dg,r,{get:function(){return er("6.0.0","PIXI.resources."+r+" has moved to PIXI."+r),dh[r]}})};for(var ea in dh)kg(ea);/*!
 * @pixi/app - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/app is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var ra=function(){function r(e){var t=this;this.stage=new ve,e=Object.assign({forceCanvas:!1},e),this.renderer=Rg(e),r._plugins.forEach(function(i){i.init.call(t,e)})}return r.registerPlugin=function(e){r._plugins.push(e)},r.prototype.render=function(){this.renderer.render(this.stage)},Object.defineProperty(r.prototype,"view",{get:function(){return this.renderer.view},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"screen",{get:function(){return this.renderer.screen},enumerable:!1,configurable:!0}),r.prototype.destroy=function(e,t){var i=this,n=r._plugins.slice(0);n.reverse(),n.forEach(function(o){o.destroy.call(i)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(e),this.renderer=null},r._plugins=[],r}(),Xg=function(){function r(){}return r.init=function(e){var t=this;Object.defineProperty(this,"resizeTo",{set:function(i){self.removeEventListener("resize",this.queueResize),this._resizeTo=i,i&&(self.addEventListener("resize",this.queueResize),this.resize())},get:function(){return this._resizeTo}}),this.queueResize=function(){!t._resizeTo||(t.cancelResize(),t._resizeId=requestAnimationFrame(function(){return t.resize()}))},this.cancelResize=function(){t._resizeId&&(cancelAnimationFrame(t._resizeId),t._resizeId=null)},this.resize=function(){if(!!t._resizeTo){t.cancelResize();var i,n;if(t._resizeTo===self)i=self.innerWidth,n=self.innerHeight;else{var o=t._resizeTo,a=o.clientWidth,s=o.clientHeight;i=a,n=s}t.renderer.resize(i,n)}},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null},r.destroy=function(){self.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null},r}();ra.registerPlugin(Xg);/*!
 * @pixi/extract - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/extract is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var gh=new Z,yh=4,Hg=function(){function r(e){this.renderer=e}return r.prototype.image=function(e,t,i){var n=new Image;return n.src=this.base64(e,t,i),n},r.prototype.base64=function(e,t,i){return this.canvas(e).toDataURL(t,i)},r.prototype.canvas=function(e){var t=this.renderer,i,n,o=!1,a,s=!1;e&&(e instanceof lr?a=e:(a=this.renderer.generateTexture(e),s=!0)),a?(i=a.baseTexture.resolution,n=a.frame,o=!1,t.renderTexture.bind(a)):(i=this.renderer.resolution,o=!0,n=gh,n.width=this.renderer.width,n.height=this.renderer.height,t.renderTexture.bind(null));var u=Math.floor(n.width*i+1e-4),l=Math.floor(n.height*i+1e-4),h=new il(u,l,1),f=new Uint8Array(yh*u*l),c=t.gl;c.readPixels(n.x*i,n.y*i,u,l,c.RGBA,c.UNSIGNED_BYTE,f);var d=h.context.getImageData(0,0,u,l);if(r.arrayPostDivide(f,d.data),h.context.putImageData(d,0,0),o){var _=new il(h.width,h.height,1);_.context.scale(1,-1),_.context.drawImage(h.canvas,0,-l),h.destroy(),h=_}return s&&a.destroy(!0),h.canvas},r.prototype.pixels=function(e){var t=this.renderer,i,n,o,a=!1;e&&(e instanceof lr?o=e:(o=this.renderer.generateTexture(e),a=!0)),o?(i=o.baseTexture.resolution,n=o.frame,t.renderTexture.bind(o)):(i=t.resolution,n=gh,n.width=t.width,n.height=t.height,t.renderTexture.bind(null));var s=n.width*i,u=n.height*i,l=new Uint8Array(yh*s*u),h=t.gl;return h.readPixels(n.x*i,n.y*i,s,u,h.RGBA,h.UNSIGNED_BYTE,l),a&&o.destroy(!0),r.arrayPostDivide(l,l),l},r.prototype.destroy=function(){this.renderer=null},r.arrayPostDivide=function(e,t){for(var i=0;i<e.length;i+=4){var n=t[i+3]=e[i+3];n!==0?(t[i]=Math.round(Math.min(e[i]*255/n,255)),t[i+1]=Math.round(Math.min(e[i+1]*255/n,255)),t[i+2]=Math.round(Math.min(e[i+2]*255/n,255))):(t[i]=e[i],t[i+1]=e[i+1],t[i+2]=e[i+2])}},r}();/*!
 * @pixi/loaders - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/loaders is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var xn=function(){function r(e,t,i){t===void 0&&(t=!1),this._fn=e,this._once=t,this._thisArg=i,this._next=this._prev=this._owner=null}return r.prototype.detach=function(){return this._owner===null?!1:(this._owner.detach(this),!0)},r}();function xh(r,e){return r._head?(r._tail._next=e,e._prev=r._tail,r._tail=e):(r._head=e,r._tail=e),e._owner=r,e}var Ae=function(){function r(){this._head=this._tail=void 0}return r.prototype.handlers=function(e){e===void 0&&(e=!1);var t=this._head;if(e)return!!t;for(var i=[];t;)i.push(t),t=t._next;return i},r.prototype.has=function(e){if(!(e instanceof xn))throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");return e._owner===this},r.prototype.dispatch=function(){for(var e=arguments,t=[],i=0;i<arguments.length;i++)t[i]=e[i];var n=this._head;if(!n)return!1;for(;n;)n._once&&this.detach(n),n._fn.apply(n._thisArg,t),n=n._next;return!0},r.prototype.add=function(e,t){if(t===void 0&&(t=null),typeof e!="function")throw new Error("MiniSignal#add(): First arg must be a Function.");return xh(this,new xn(e,!1,t))},r.prototype.once=function(e,t){if(t===void 0&&(t=null),typeof e!="function")throw new Error("MiniSignal#once(): First arg must be a Function.");return xh(this,new xn(e,!0,t))},r.prototype.detach=function(e){if(!(e instanceof xn))throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");return e._owner!==this?this:(e._prev&&(e._prev._next=e._next),e._next&&(e._next._prev=e._prev),e===this._head?(this._head=e._next,e._next===null&&(this._tail=null)):e===this._tail&&(this._tail=e._prev,this._tail._next=null),e._owner=null,this)},r.prototype.detachAll=function(){var e=this._head;if(!e)return this;for(this._head=this._tail=null;e;)e._owner=null,e=e._next;return this},r}();function bh(r,e){e=e||{};for(var t={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},i=t.parser[e.strictMode?"strict":"loose"].exec(r),n={},o=14;o--;)n[t.key[o]]=i[o]||"";return n[t.q.name]={},n[t.key[12]].replace(t.q.parser,function(a,s,u){s&&(n[t.q.name][s]=u)}),n}var jg=!!(self.XDomainRequest&&!("withCredentials"in new XMLHttpRequest)),bn=null,zg=0,Th=200,Vg=204,$g=1223,Wg=2;function Ch(){}function wh(r,e,t){e&&e.indexOf(".")===0&&(e=e.substring(1)),!!e&&(r[e]=t)}function ia(r){return r.toString().replace("object ","")}var vt=function(){function r(e,t,i){if(this._dequeue=Ch,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=null,this._boundOnError=null,this._boundOnProgress=null,this._boundOnTimeout=null,this._boundXhrOnError=null,this._boundXhrOnTimeout=null,this._boundXhrOnAbort=null,this._boundXhrOnLoad=null,typeof e!="string"||typeof t!="string")throw new Error("Both name and url are required for constructing a resource.");i=i||{},this._flags=0,this._setFlag(r.STATUS_FLAGS.DATA_URL,t.indexOf("data:")===0),this.name=e,this.url=t,this.extension=this._getExtension(),this.data=null,this.crossOrigin=i.crossOrigin===!0?"anonymous":i.crossOrigin,this.timeout=i.timeout||0,this.loadType=i.loadType||this._determineLoadType(),this.xhrType=i.xhrType,this.metadata=i.metadata||{},this.error=null,this.xhr=null,this.children=[],this.type=r.TYPE.UNKNOWN,this.progressChunk=0,this._dequeue=Ch,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundOnTimeout=this._onTimeout.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnTimeout=this._xhrOnTimeout.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this.onStart=new Ae,this.onProgress=new Ae,this.onComplete=new Ae,this.onAfterMiddleware=new Ae}return r.setExtensionLoadType=function(e,t){wh(r._loadTypeMap,e,t)},r.setExtensionXhrType=function(e,t){wh(r._xhrTypeMap,e,t)},Object.defineProperty(r.prototype,"isDataUrl",{get:function(){return this._hasFlag(r.STATUS_FLAGS.DATA_URL)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isComplete",{get:function(){return this._hasFlag(r.STATUS_FLAGS.COMPLETE)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isLoading",{get:function(){return this._hasFlag(r.STATUS_FLAGS.LOADING)},enumerable:!1,configurable:!0}),r.prototype.complete=function(){this._clearEvents(),this._finish()},r.prototype.abort=function(e){if(!this.error){if(this.error=new Error(e),this._clearEvents(),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data)if(this.data.src)this.data.src=r.EMPTY_GIF;else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this._finish()}},r.prototype.load=function(e){var t=this;if(!this.isLoading){if(this.isComplete){e&&setTimeout(function(){return e(t)},1);return}else e&&this.onComplete.once(e);switch(this._setFlag(r.STATUS_FLAGS.LOADING,!0),this.onStart.dispatch(this),(this.crossOrigin===!1||typeof this.crossOrigin!="string")&&(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case r.LOAD_TYPE.IMAGE:this.type=r.TYPE.IMAGE,this._loadElement("image");break;case r.LOAD_TYPE.AUDIO:this.type=r.TYPE.AUDIO,this._loadSourceElement("audio");break;case r.LOAD_TYPE.VIDEO:this.type=r.TYPE.VIDEO,this._loadSourceElement("video");break;case r.LOAD_TYPE.XHR:default:jg&&this.crossOrigin?this._loadXdr():this._loadXhr();break}}},r.prototype._hasFlag=function(e){return(this._flags&e)!=0},r.prototype._setFlag=function(e,t){this._flags=t?this._flags|e:this._flags&~e},r.prototype._clearEvents=function(){clearTimeout(this._elementTimer),this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventListener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEventListener("timeout",this._boundXhrOnTimeout,!1),this.xhr.removeEventListener("abort",this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgress,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null))},r.prototype._finish=function(){if(this.isComplete)throw new Error("Complete called again for an already completed resource.");this._setFlag(r.STATUS_FLAGS.COMPLETE,!0),this._setFlag(r.STATUS_FLAGS.LOADING,!1),this.onComplete.dispatch(this)},r.prototype._loadElement=function(e){this.metadata.loadElement?this.data=this.metadata.loadElement:e==="image"&&typeof self.Image!="undefined"?this.data=new Image:this.data=document.createElement(e),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url),this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},r.prototype._loadSourceElement=function(e){if(this.metadata.loadElement?this.data=this.metadata.loadElement:e==="audio"&&typeof self.Audio!="undefined"?this.data=new Audio:this.data=document.createElement(e),this.data===null){this.abort("Unsupported element: "+e);return}if(this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),!this.metadata.skipSource)if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var t=this.metadata.mimeType,i=0;i<this.url.length;++i)this.data.appendChild(this._createSource(e,this.url[i],Array.isArray(t)?t[i]:t));else{var t=this.metadata.mimeType;this.data.appendChild(this._createSource(e,this.url,Array.isArray(t)?t[0]:t))}this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load(),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},r.prototype._loadXhr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var e=this.xhr=new XMLHttpRequest;e.open("GET",this.url,!0),e.timeout=this.timeout,this.xhrType===r.XHR_RESPONSE_TYPE.JSON||this.xhrType===r.XHR_RESPONSE_TYPE.DOCUMENT?e.responseType=r.XHR_RESPONSE_TYPE.TEXT:e.responseType=this.xhrType,e.addEventListener("error",this._boundXhrOnError,!1),e.addEventListener("timeout",this._boundXhrOnTimeout,!1),e.addEventListener("abort",this._boundXhrOnAbort,!1),e.addEventListener("progress",this._boundOnProgress,!1),e.addEventListener("load",this._boundXhrOnLoad,!1),e.send()},r.prototype._loadXdr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var e=this.xhr=new self.XDomainRequest;e.timeout=this.timeout||5e3,e.onerror=this._boundXhrOnError,e.ontimeout=this._boundXhrOnTimeout,e.onprogress=this._boundOnProgress,e.onload=this._boundXhrOnLoad,e.open("GET",this.url,!0),setTimeout(function(){return e.send()},1)},r.prototype._createSource=function(e,t,i){i||(i=e+"/"+this._getExtension(t));var n=document.createElement("source");return n.src=t,n.type=i,n},r.prototype._onError=function(e){this.abort("Failed to load element using: "+e.target.nodeName)},r.prototype._onProgress=function(e){e&&e.lengthComputable&&this.onProgress.dispatch(this,e.loaded/e.total)},r.prototype._onTimeout=function(){this.abort("Load timed out.")},r.prototype._xhrOnError=function(){var e=this.xhr;this.abort(ia(e)+" Request failed. Status: "+e.status+', text: "'+e.statusText+'"')},r.prototype._xhrOnTimeout=function(){var e=this.xhr;this.abort(ia(e)+" Request timed out.")},r.prototype._xhrOnAbort=function(){var e=this.xhr;this.abort(ia(e)+" Request was aborted by the user.")},r.prototype._xhrOnLoad=function(){var e=this.xhr,t="",i=typeof e.status=="undefined"?Th:e.status;(e.responseType===""||e.responseType==="text"||typeof e.responseType=="undefined")&&(t=e.responseText),i===zg&&(t.length>0||e.responseType===r.XHR_RESPONSE_TYPE.BUFFER)?i=Th:i===$g&&(i=Vg);var n=i/100|0;if(n===Wg)if(this.xhrType===r.XHR_RESPONSE_TYPE.TEXT)this.data=t,this.type=r.TYPE.TEXT;else if(this.xhrType===r.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(t),this.type=r.TYPE.JSON}catch(s){this.abort("Error trying to parse loaded json: "+s);return}else if(this.xhrType===r.XHR_RESPONSE_TYPE.DOCUMENT)try{if(self.DOMParser){var o=new DOMParser;this.data=o.parseFromString(t,"text/xml")}else{var a=document.createElement("div");a.innerHTML=t,this.data=a}this.type=r.TYPE.XML}catch(s){this.abort("Error trying to parse loaded xml: "+s);return}else this.data=e.response||t;else{this.abort("["+e.status+"] "+e.statusText+": "+e.responseURL);return}this.complete()},r.prototype._determineCrossOrigin=function(e,t){if(e.indexOf("data:")===0)return"";if(self.origin!==self.location.origin)return"anonymous";t=t||self.location,bn||(bn=document.createElement("a")),bn.href=e;var i=bh(bn.href,{strictMode:!0}),n=!i.port&&t.port===""||i.port===t.port,o=i.protocol?i.protocol+":":"";return i.host!==t.hostname||!n||o!==t.protocol?"anonymous":""},r.prototype._determineXhrType=function(){return r._xhrTypeMap[this.extension]||r.XHR_RESPONSE_TYPE.TEXT},r.prototype._determineLoadType=function(){return r._loadTypeMap[this.extension]||r.LOAD_TYPE.XHR},r.prototype._getExtension=function(e){e===void 0&&(e=this.url);var t="";if(this.isDataUrl){var i=e.indexOf("/");t=e.substring(i+1,e.indexOf(";",i))}else{var n=e.indexOf("?"),o=e.indexOf("#"),a=Math.min(n>-1?n:e.length,o>-1?o:e.length);e=e.substring(0,a),t=e.substring(e.lastIndexOf(".")+1)}return t.toLowerCase()},r.prototype._getMimeFromXhrType=function(e){switch(e){case r.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case r.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case r.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case r.XHR_RESPONSE_TYPE.JSON:return"application/json";case r.XHR_RESPONSE_TYPE.DEFAULT:case r.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},r}();(function(r){(function(e){e[e.NONE=0]="NONE",e[e.DATA_URL=1]="DATA_URL",e[e.COMPLETE=2]="COMPLETE",e[e.LOADING=4]="LOADING"})(r.STATUS_FLAGS||(r.STATUS_FLAGS={})),function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.JSON=1]="JSON",e[e.XML=2]="XML",e[e.IMAGE=3]="IMAGE",e[e.AUDIO=4]="AUDIO",e[e.VIDEO=5]="VIDEO",e[e.TEXT=6]="TEXT"}(r.TYPE||(r.TYPE={})),function(e){e[e.XHR=1]="XHR",e[e.IMAGE=2]="IMAGE",e[e.AUDIO=3]="AUDIO",e[e.VIDEO=4]="VIDEO"}(r.LOAD_TYPE||(r.LOAD_TYPE={})),function(e){e.DEFAULT="text",e.BUFFER="arraybuffer",e.BLOB="blob",e.DOCUMENT="document",e.JSON="json",e.TEXT="text"}(r.XHR_RESPONSE_TYPE||(r.XHR_RESPONSE_TYPE={})),r._loadTypeMap={gif:r.LOAD_TYPE.IMAGE,png:r.LOAD_TYPE.IMAGE,bmp:r.LOAD_TYPE.IMAGE,jpg:r.LOAD_TYPE.IMAGE,jpeg:r.LOAD_TYPE.IMAGE,tif:r.LOAD_TYPE.IMAGE,tiff:r.LOAD_TYPE.IMAGE,webp:r.LOAD_TYPE.IMAGE,tga:r.LOAD_TYPE.IMAGE,svg:r.LOAD_TYPE.IMAGE,"svg+xml":r.LOAD_TYPE.IMAGE,mp3:r.LOAD_TYPE.AUDIO,ogg:r.LOAD_TYPE.AUDIO,wav:r.LOAD_TYPE.AUDIO,mp4:r.LOAD_TYPE.VIDEO,webm:r.LOAD_TYPE.VIDEO},r._xhrTypeMap={xhtml:r.XHR_RESPONSE_TYPE.DOCUMENT,html:r.XHR_RESPONSE_TYPE.DOCUMENT,htm:r.XHR_RESPONSE_TYPE.DOCUMENT,xml:r.XHR_RESPONSE_TYPE.DOCUMENT,tmx:r.XHR_RESPONSE_TYPE.DOCUMENT,svg:r.XHR_RESPONSE_TYPE.DOCUMENT,tsx:r.XHR_RESPONSE_TYPE.DOCUMENT,gif:r.XHR_RESPONSE_TYPE.BLOB,png:r.XHR_RESPONSE_TYPE.BLOB,bmp:r.XHR_RESPONSE_TYPE.BLOB,jpg:r.XHR_RESPONSE_TYPE.BLOB,jpeg:r.XHR_RESPONSE_TYPE.BLOB,tif:r.XHR_RESPONSE_TYPE.BLOB,tiff:r.XHR_RESPONSE_TYPE.BLOB,webp:r.XHR_RESPONSE_TYPE.BLOB,tga:r.XHR_RESPONSE_TYPE.BLOB,json:r.XHR_RESPONSE_TYPE.JSON,text:r.XHR_RESPONSE_TYPE.TEXT,txt:r.XHR_RESPONSE_TYPE.TEXT,ttf:r.XHR_RESPONSE_TYPE.BUFFER,otf:r.XHR_RESPONSE_TYPE.BUFFER},r.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})(vt||(vt={}));function dr(){}function Yg(r){return function(){for(var t=arguments,i=[],n=0;n<arguments.length;n++)i[n]=t[n];if(r===null)throw new Error("Callback was already called.");var o=r;r=null,o.apply(this,i)}}var qg=function(){function r(e,t){this.data=e,this.callback=t}return r}(),na=function(){function r(e,t){var i=this;if(t===void 0&&(t=1),this.workers=0,this.saturated=dr,this.unsaturated=dr,this.empty=dr,this.drain=dr,this.error=dr,this.started=!1,this.paused=!1,this._tasks=[],this._insert=function(n,o,a){if(a&&typeof a!="function")throw new Error("task callback must be a function");if(i.started=!0,n==null&&i.idle()){setTimeout(function(){return i.drain()},1);return}var s=new qg(n,typeof a=="function"?a:dr);o?i._tasks.unshift(s):i._tasks.push(s),setTimeout(i.process,1)},this.process=function(){for(;!i.paused&&i.workers<i.concurrency&&i._tasks.length;){var n=i._tasks.shift();i._tasks.length===0&&i.empty(),i.workers+=1,i.workers===i.concurrency&&i.saturated(),i._worker(n.data,Yg(i._next(n)))}},this._worker=e,t===0)throw new Error("Concurrency must not be zero");this.concurrency=t,this.buffer=t/4}return r.prototype._next=function(e){var t=this;return function(){for(var i=arguments,n=[],o=0;o<arguments.length;o++)n[o]=i[o];t.workers-=1,e.callback.apply(e,n),n[0]!=null&&t.error(n[0],e.data),t.workers<=t.concurrency-t.buffer&&t.unsaturated(),t.idle()&&t.drain(),t.process()}},r.prototype.push=function(e,t){this._insert(e,!1,t)},r.prototype.kill=function(){this.workers=0,this.drain=dr,this.started=!1,this._tasks=[]},r.prototype.unshift=function(e,t){this._insert(e,!0,t)},r.prototype.length=function(){return this._tasks.length},r.prototype.running=function(){return this.workers},r.prototype.idle=function(){return this._tasks.length+this.workers===0},r.prototype.pause=function(){this.paused!==!0&&(this.paused=!0)},r.prototype.resume=function(){if(this.paused!==!1){this.paused=!1;for(var e=1;e<=this.concurrency;e++)this.process()}},r.eachSeries=function(e,t,i,n){var o=0,a=e.length;function s(u){if(u||o===a){i&&i(u);return}n?setTimeout(function(){t(e[o++],s)},1):t(e[o++],s)}s()},r.queue=function(e,t){return new r(e,t)},r}(),oa=100,Kg=/(#[\w-]+)?$/,me=function(){function r(e,t){var i=this;e===void 0&&(e=""),t===void 0&&(t=10),this.progress=0,this.loading=!1,this.defaultQueryString="",this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,l){return i._loadResource(u,l)},this.resources={},this.baseUrl=e,this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,l){return i._loadResource(u,l)},this._queue=na.queue(this._boundLoadResource,t),this._queue.pause(),this.resources={},this.onProgress=new Ae,this.onError=new Ae,this.onLoad=new Ae,this.onStart=new Ae,this.onComplete=new Ae;for(var n=0;n<r._plugins.length;++n){var o=r._plugins[n],a=o.pre,s=o.use;a&&this.pre(a),s&&this.use(s)}this._protected=!1}return r.prototype._add=function(e,t,i,n){if(this.loading&&(!i||!i.parentResource))throw new Error("Cannot add resources while the loader is running.");if(this.resources[e])throw new Error('Resource named "'+e+'" already exists.');if(t=this._prepareUrl(t),this.resources[e]=new vt(e,t,i),typeof n=="function"&&this.resources[e].onAfterMiddleware.once(n),this.loading){for(var o=i.parentResource,a=[],s=0;s<o.children.length;++s)o.children[s].isComplete||a.push(o.children[s]);var u=o.progressChunk*(a.length+1),l=u/(a.length+2);o.children.push(this.resources[e]),o.progressChunk=l;for(var s=0;s<a.length;++s)a[s].progressChunk=l;this.resources[e].progressChunk=l}return this._queue.push(this.resources[e]),this},r.prototype.pre=function(e){return this._beforeMiddleware.push(e),this},r.prototype.use=function(e){return this._afterMiddleware.push(e),this},r.prototype.reset=function(){this.progress=0,this.loading=!1,this._queue.kill(),this._queue.pause();for(var e in this.resources){var t=this.resources[e];t._onLoadBinding&&t._onLoadBinding.detach(),t.isLoading&&t.abort("loader reset")}return this.resources={},this},r.prototype.load=function(e){if(typeof e=="function"&&this.onComplete.once(e),this.loading)return this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var t=this._queue._tasks.length,i=oa/t,n=0;n<this._queue._tasks.length;++n)this._queue._tasks[n].data.progressChunk=i;this._onStart(),this._queue.resume()}return this},Object.defineProperty(r.prototype,"concurrency",{get:function(){return this._queue.concurrency},set:function(e){this._queue.concurrency=e},enumerable:!1,configurable:!0}),r.prototype._prepareUrl=function(e){var t=bh(e,{strictMode:!0}),i;if(t.protocol||!t.path||e.indexOf("//")===0?i=e:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&e.charAt(0)!=="/"?i=this.baseUrl+"/"+e:i=this.baseUrl+e,this.defaultQueryString){var n=Kg.exec(i)[0];i=i.substr(0,i.length-n.length),i.indexOf("?")!==-1?i+="&"+this.defaultQueryString:i+="?"+this.defaultQueryString,i+=n}return i},r.prototype._loadResource=function(e,t){var i=this;e._dequeue=t,na.eachSeries(this._beforeMiddleware,function(n,o){n.call(i,e,function(){o(e.isComplete?{}:null)})},function(){e.isComplete?i._onLoad(e):(e._onLoadBinding=e.onComplete.once(i._onLoad,i),e.load())},!0)},r.prototype._onStart=function(){this.progress=0,this.loading=!0,this.onStart.dispatch(this)},r.prototype._onComplete=function(){this.progress=oa,this.loading=!1,this.onComplete.dispatch(this,this.resources)},r.prototype._onLoad=function(e){var t=this;e._onLoadBinding=null,this._resourcesParsing.push(e),e._dequeue(),na.eachSeries(this._afterMiddleware,function(i,n){i.call(t,e,n)},function(){e.onAfterMiddleware.dispatch(e),t.progress=Math.min(oa,t.progress+e.progressChunk),t.onProgress.dispatch(t,e),e.error?t.onError.dispatch(e.error,t,e):t.onLoad.dispatch(t,e),t._resourcesParsing.splice(t._resourcesParsing.indexOf(e),1),t._queue.idle()&&t._resourcesParsing.length===0&&t._onComplete()},!0)},r.prototype.destroy=function(){this._protected||this.reset()},Object.defineProperty(r,"shared",{get:function(){var e=r._shared;return e||(e=new r,e._protected=!0,r._shared=e),e},enumerable:!1,configurable:!0}),r.registerPlugin=function(e){return r._plugins.push(e),e.add&&e.add(),r},r._plugins=[],r}();me.prototype.add=function(e,t,i,n){if(Array.isArray(e)){for(var o=0;o<e.length;++o)this.add(e[o]);return this}if(typeof e=="object"&&(i=e,n=t||i.callback||i.onComplete,t=i.url,e=i.name||i.key||i.url),typeof t!="string"&&(n=i,i=t,t=e),typeof t!="string")throw new Error("No url passed to add resource to loader.");return typeof i=="function"&&(n=i,i=null),this._add(e,t,i,n)};var Zg=function(){function r(){}return r.init=function(e){e=Object.assign({sharedLoader:!1},e),this.loader=e.sharedLoader?me.shared:new me},r.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},r}(),Jg=function(){function r(){}return r.add=function(){vt.setExtensionLoadType("svg",vt.LOAD_TYPE.XHR),vt.setExtensionXhrType("svg",vt.XHR_RESPONSE_TYPE.TEXT)},r.use=function(e,t){if(e.data&&(e.type===vt.TYPE.IMAGE||e.extension==="svg")){var i=e.data,n=e.url,o=e.name,a=e.metadata;k.fromLoader(i,n,o,a).then(function(s){e.texture=s,t()}).catch(t)}else t()},r}(),Qg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function t0(r){for(var e="",t=0;t<r.length;){for(var i=[0,0,0],n=[0,0,0,0],o=0;o<i.length;++o)t<r.length?i[o]=r.charCodeAt(t++)&255:i[o]=0;n[0]=i[0]>>2,n[1]=(i[0]&3)<<4|i[1]>>4,n[2]=(i[1]&15)<<2|i[2]>>6,n[3]=i[2]&63;var a=t-(r.length-1);switch(a){case 2:n[3]=64,n[2]=64;break;case 1:n[3]=64;break}for(var o=0;o<n.length;++o)e+=Qg.charAt(n[o])}return e}var Eh=self.URL||self.webkitURL;function e0(r,e){if(!r.data){e();return}if(r.xhr&&r.xhrType===vt.XHR_RESPONSE_TYPE.BLOB){if(!self.Blob||typeof r.data=="string"){var t=r.xhr.getResponseHeader("content-type");if(t&&t.indexOf("image")===0){r.data=new Image,r.data.src="data:"+t+";base64,"+t0(r.xhr.responseText),r.type=vt.TYPE.IMAGE,r.data.onload=function(){r.data.onload=null,e()};return}}else if(r.data.type.indexOf("image")===0){var i=Eh.createObjectURL(r.data);r.blob=r.data,r.data=new Image,r.data.src=i,r.type=vt.TYPE.IMAGE,r.data.onload=function(){Eh.revokeObjectURL(i),r.data.onload=null,e()};return}}e()}me.registerPlugin({use:e0});me.registerPlugin(Jg);/*!
 * @pixi/compressed-textures - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/compressed-textures is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var rt,$;(function(r){r[r.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",r[r.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",r[r.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",r[r.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",r[r.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",r[r.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",r[r.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",r[r.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",r[r.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",r[r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",r[r.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",r[r.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",r[r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",r[r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",r[r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",r[r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",r[r.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",r[r.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",r[r.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",r[r.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"})($||($={}));var Tn=(rt={},rt[$.COMPRESSED_RGB_S3TC_DXT1_EXT]=.5,rt[$.COMPRESSED_RGBA_S3TC_DXT1_EXT]=.5,rt[$.COMPRESSED_RGBA_S3TC_DXT3_EXT]=1,rt[$.COMPRESSED_RGBA_S3TC_DXT5_EXT]=1,rt[$.COMPRESSED_SRGB_S3TC_DXT1_EXT]=.5,rt[$.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]=.5,rt[$.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]=1,rt[$.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]=1,rt[$.COMPRESSED_R11_EAC]=.5,rt[$.COMPRESSED_SIGNED_R11_EAC]=.5,rt[$.COMPRESSED_RG11_EAC]=1,rt[$.COMPRESSED_SIGNED_RG11_EAC]=1,rt[$.COMPRESSED_RGB8_ETC2]=.5,rt[$.COMPRESSED_RGBA8_ETC2_EAC]=1,rt[$.COMPRESSED_SRGB8_ETC2]=.5,rt[$.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]=1,rt[$.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,rt[$.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,rt[$.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]=.5,rt[$.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]=.5,rt[$.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]=.25,rt[$.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]=.25,rt[$.COMPRESSED_RGB_ETC1_WEBGL]=.5,rt[$.COMPRESSED_RGB_ATC_WEBGL]=.5,rt[$.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL]=1,rt[$.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL]=1,rt);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var aa=function(r,e){return aa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},aa(r,e)};function Ph(r,e){aa(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function r0(r,e,t,i){return new(t||(t=Promise))(function(n,o){function a(l){try{u(i.next(l))}catch(h){o(h)}}function s(l){try{u(i.throw(l))}catch(h){o(h)}}function u(l){l.done?n(l.value):new t(function(h){h(l.value)}).then(a,s)}u((i=i.apply(r,e||[])).next())})}function i0(r,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,n,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(h){return u([l,h])}}function u(l){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,n&&(o=l[0]&2?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[l[0]&2,o.value]),l[0]){case 0:case 1:o=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,n=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){t.label=l[1];break}if(l[0]===6&&t.label<o[1]){t.label=o[1],o=l;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(l);break}o[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(r,t)}catch(h){l=[6,h],n=0}finally{i=o=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}var n0=function(r){Ph(e,r);function e(t,i){i===void 0&&(i={width:1,height:1,autoLoad:!0});var n=this,o,a;return typeof t=="string"?(o=t,a=new Uint8Array):(o=null,a=t),n=r.call(this,a,i)||this,n.origin=o,n.buffer=a?new ta(a):null,n.origin&&i.autoLoad!==!1&&n.load(),a&&a.length&&(n.loaded=!0,n.onBlobLoaded(n.buffer.rawBinaryData)),n}return e.prototype.onBlobLoaded=function(t){},e.prototype.load=function(){return r0(this,void 0,Promise,function(){var t,i,n;return i0(this,function(o){switch(o.label){case 0:return[4,fetch(this.origin)];case 1:return t=o.sent(),[4,t.blob()];case 2:return i=o.sent(),[4,i.arrayBuffer()];case 3:return n=o.sent(),this.data=new Uint32Array(n),this.buffer=new ta(n),this.loaded=!0,this.onBlobLoaded(n),this.update(),[2,this]}})})},e}(ci),sa=function(r){Ph(e,r);function e(t,i){var n=r.call(this,t,i)||this;return n.format=i.format,n.levels=i.levels||1,n._width=i.width,n._height=i.height,n._extension=e._formatToExtension(n.format),(i.levelBuffers||n.buffer)&&(n._levelBuffers=i.levelBuffers||e._createLevelBuffers(t instanceof Uint8Array?t:n.buffer.uint8View,n.format,n.levels,4,4,n.width,n.height)),n}return e.prototype.upload=function(t,i,n){var o=t.gl,a=t.context.extensions[this._extension];if(!a)throw new Error(this._extension+" textures are not supported on the current machine");if(!this._levelBuffers)return!1;for(var s=0,u=this.levels;s<u;s++){var l=this._levelBuffers[s],h=l.levelID,f=l.levelWidth,c=l.levelHeight,d=l.levelBuffer;o.compressedTexImage2D(o.TEXTURE_2D,h,this.format,f,c,0,d)}return!0},e.prototype.onBlobLoaded=function(){this._levelBuffers=e._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)},e._formatToExtension=function(t){if(t>=33776&&t<=33779)return"s3tc";if(t>=37488&&t<=37497)return"etc";if(t>=35840&&t<=35843)return"pvrtc";if(t>=36196)return"etc1";if(t>=35986&&t<=34798)return"atc";throw new Error("Invalid (compressed) texture format given!")},e._createLevelBuffers=function(t,i,n,o,a,s,u){for(var l=new Array(n),h=t.byteOffset,f=s,c=u,d=f+o-1&~(o-1),_=c+a-1&~(a-1),p=d*_*Tn[i],v=0;v<n;v++)l[v]={levelID:v,levelWidth:n>1?f:d,levelHeight:n>1?c:_,levelBuffer:new Uint8Array(t.buffer,h,p)},h+=p,f=f>>1||1,c=c>>1||1,d=f+o-1&~(o-1),_=c+a-1&~(a-1),p=d*_*Tn[i];return l},e}(n0),o0=function(){function r(){}return r.use=function(e,t){var i=e.data,n=this;if(e.type===vt.TYPE.JSON&&i&&i.cacheID&&i.textures){for(var o=i.textures,a=void 0,s=void 0,u=0,l=o.length;u<l;u++){var h=o[u],f=h.src,c=h.format;if(c||(s=f),r.textureFormats[c]){a=f;break}}if(a=a||s,!a){t(new Error("Cannot load compressed-textures in "+e.url+", make sure you provide a fallback"));return}if(a===e.url){t(new Error("URL of compressed texture cannot be the same as the manifest's URL"));return}var d={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},_=Sr.resolve(e.url.replace(n.baseUrl,""),a),p=i.cacheID;n.add(p,_,d,function(v){if(v.error){t(v.error);return}var m=v.texture,x=m===void 0?null:m,b=v.textures,C=b===void 0?{}:b;Object.assign(e,{texture:x,textures:C}),t()})}else t()},r.add=function(){var e=document.createElement("canvas"),t=e.getContext("webgl");if(!t){console.warn("WebGL not available for compressed textures. Silently failing.");return}var i={s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:t.getExtension("WEBGL_compressed_texture_etc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:t.getExtension("WEBGL_compressed_texture_atc"),astc:t.getExtension("WEBGL_compressed_texture_astc")};r.textureExtensions=i,r.textureFormats={};for(var n in i){var o=i[n];!o||Object.assign(r.textureFormats,Object.getPrototypeOf(o))}},r}();function Ih(r,e,t){var i={textures:{},texture:null};if(!e)return i;var n=e.map(function(o){return new k(new Q(o,Object.assign({mipmap:ce.OFF,alphaMode:de.NO_PREMULTIPLIED_ALPHA},t)))});return n.forEach(function(o,a){var s=o.baseTexture,u=r+"-"+(a+1);Q.addToCache(s,u),k.addToCache(o,u),a===0&&(Q.addToCache(s,r),k.addToCache(o,r),i.texture=o),i.textures[u]=o}),i}var gi,ne;vt.setExtensionXhrType("dds",vt.XHR_RESPONSE_TYPE.BUFFER);var ua=4,Cn=124,a0=32,Ah=20,s0=542327876,wn={SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19},u0={SIZE:0,FLAGS:1,FOURCC:2,RGB_BITCOUNT:3,R_BIT_MASK:4,G_BIT_MASK:5,B_BIT_MASK:6,A_BIT_MASK:7},En={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4},oe;(function(r){r[r.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",r[r.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",r[r.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",r[r.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",r[r.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",r[r.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",r[r.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",r[r.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",r[r.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",r[r.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",r[r.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",r[r.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",r[r.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",r[r.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",r[r.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",r[r.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",r[r.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",r[r.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",r[r.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",r[r.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",r[r.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",r[r.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",r[r.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",r[r.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",r[r.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",r[r.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",r[r.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",r[r.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",r[r.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",r[r.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",r[r.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",r[r.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",r[r.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",r[r.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",r[r.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",r[r.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",r[r.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",r[r.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",r[r.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",r[r.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",r[r.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",r[r.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",r[r.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",r[r.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",r[r.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",r[r.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",r[r.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",r[r.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",r[r.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",r[r.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",r[r.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",r[r.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",r[r.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",r[r.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",r[r.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",r[r.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",r[r.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",r[r.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",r[r.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",r[r.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",r[r.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",r[r.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",r[r.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",r[r.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",r[r.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",r[r.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",r[r.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",r[r.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",r[r.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",r[r.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",r[r.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",r[r.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",r[r.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",r[r.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",r[r.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",r[r.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",r[r.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",r[r.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",r[r.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",r[r.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",r[r.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",r[r.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",r[r.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",r[r.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",r[r.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",r[r.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",r[r.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",r[r.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",r[r.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",r[r.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",r[r.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",r[r.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",r[r.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",r[r.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",r[r.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",r[r.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",r[r.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",r[r.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",r[r.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",r[r.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",r[r.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",r[r.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",r[r.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",r[r.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",r[r.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",r[r.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",r[r.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",r[r.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",r[r.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",r[r.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",r[r.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",r[r.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",r[r.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",r[r.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",r[r.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",r[r.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",r[r.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",r[r.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",r[r.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",r[r.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",r[r.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",r[r.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT"})(oe||(oe={}));var la;(function(r){r[r.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",r[r.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",r[r.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D"})(la||(la={}));var l0=1,h0=2,f0=4,c0=64,d0=512,p0=131072,_0=827611204,v0=861165636,m0=894720068,g0=808540228,y0=4,x0=(gi={},gi[_0]=$.COMPRESSED_RGBA_S3TC_DXT1_EXT,gi[v0]=$.COMPRESSED_RGBA_S3TC_DXT3_EXT,gi[m0]=$.COMPRESSED_RGBA_S3TC_DXT5_EXT,gi),b0=(ne={},ne[oe.DXGI_FORMAT_BC1_TYPELESS]=$.COMPRESSED_RGBA_S3TC_DXT1_EXT,ne[oe.DXGI_FORMAT_BC1_UNORM]=$.COMPRESSED_RGBA_S3TC_DXT1_EXT,ne[oe.DXGI_FORMAT_BC2_TYPELESS]=$.COMPRESSED_RGBA_S3TC_DXT3_EXT,ne[oe.DXGI_FORMAT_BC2_UNORM]=$.COMPRESSED_RGBA_S3TC_DXT3_EXT,ne[oe.DXGI_FORMAT_BC3_TYPELESS]=$.COMPRESSED_RGBA_S3TC_DXT5_EXT,ne[oe.DXGI_FORMAT_BC3_UNORM]=$.COMPRESSED_RGBA_S3TC_DXT5_EXT,ne[oe.DXGI_FORMAT_BC1_UNORM_SRGB]=$.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,ne[oe.DXGI_FORMAT_BC2_UNORM_SRGB]=$.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,ne[oe.DXGI_FORMAT_BC3_UNORM_SRGB]=$.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,ne),T0=function(){function r(){}return r.use=function(e,t){if(e.extension==="dds"&&e.data)try{Object.assign(e,Ih(e.name||e.url,r.parse(e.data),e.metadata))}catch(i){t(i);return}t()},r.parse=function(e){var t=new Uint32Array(e),i=t[0];if(i!==s0)throw new Error("Invalid DDS file magic word");var n=new Uint32Array(e,0,Cn/Uint32Array.BYTES_PER_ELEMENT),o=n[wn.HEIGHT],a=n[wn.WIDTH],s=n[wn.MIPMAP_COUNT],u=new Uint32Array(e,wn.PIXEL_FORMAT*Uint32Array.BYTES_PER_ELEMENT,a0/Uint32Array.BYTES_PER_ELEMENT),l=u[l0];if(l&f0){var h=u[u0.FOURCC];if(h!==g0){var f=x0[h],c=ua+Cn,d=new Uint8Array(e,c),_=new sa(d,{format:f,width:a,height:o,levels:s});return[_]}var p=ua+Cn,v=new Uint32Array(t.buffer,p,Ah/Uint32Array.BYTES_PER_ELEMENT),m=v[En.DXGI_FORMAT],x=v[En.RESOURCE_DIMENSION],b=v[En.MISC_FLAG],C=v[En.ARRAY_SIZE],y=b0[m];if(y===void 0)throw new Error("DDSLoader cannot parse texture data with DXGI format "+m);if(b===y0)throw new Error("DDSLoader does not support cubemap textures");if(x===la.DDS_DIMENSION_TEXTURE3D)throw new Error("DDSLoader does not supported 3D texture data");var g=new Array,E=ua+Cn+Ah;if(C===1)g.push(new Uint8Array(e,E));else{for(var P=Tn[y],T=0,I=a,N=o,F=0;F<s;F++){var L=Math.max(1,I+3&~3),H=Math.max(1,N+3&~3),O=L*H*P;T+=O,I=I>>>1,N=N>>>1}for(var S=E,F=0;F<C;F++)g.push(new Uint8Array(e,S,T)),S+=T}return g.map(function(G){return new sa(G,{format:y,width:a,height:o,levels:s})})}throw l&c0?new Error("DDSLoader does not support uncompressed texture data."):l&d0?new Error("DDSLoader does not supported YUV uncompressed texture data."):l&p0?new Error("DDSLoader does not support single-channel (lumninance) texture data!"):l&h0?new Error("DDSLoader does not support single-channel (alpha) texture data!"):new Error("DDSLoader failed to load a texture file due to an unknown reason!")},r}(),Lr,pr,yi;vt.setExtensionXhrType("ktx",vt.XHR_RESPONSE_TYPE.BUFFER);var Rh=[171,75,84,88,32,49,49,187,13,10,26,10],C0=67305985,ae={FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},w0=64,Sh=(Lr={},Lr[X.UNSIGNED_BYTE]=1,Lr[X.UNSIGNED_SHORT]=2,Lr[X.FLOAT]=4,Lr[X.HALF_FLOAT]=8,Lr),E0=(pr={},pr[U.RGBA]=4,pr[U.RGB]=3,pr[U.LUMINANCE]=1,pr[U.LUMINANCE_ALPHA]=2,pr[U.ALPHA]=1,pr),P0=(yi={},yi[X.UNSIGNED_SHORT_4_4_4_4]=2,yi[X.UNSIGNED_SHORT_5_5_5_1]=2,yi[X.UNSIGNED_SHORT_5_6_5]=2,yi),I0=function(){function r(){}return r.use=function(e,t){if(e.extension==="ktx"&&e.data)try{var i=e.name||e.url;Object.assign(e,Ih(i,r.parse(i,e.data),e.metadata))}catch(n){t(n);return}t()},r.parse=function(e,t){var i=new DataView(t);if(!r.validate(e,i))return null;var n=i.getUint32(ae.ENDIANNESS,!0)===C0,o=i.getUint32(ae.GL_TYPE,n),a=i.getUint32(ae.GL_FORMAT,n),s=i.getUint32(ae.GL_INTERNAL_FORMAT,n),u=i.getUint32(ae.PIXEL_WIDTH,n),l=i.getUint32(ae.PIXEL_HEIGHT,n)||1,h=i.getUint32(ae.PIXEL_DEPTH,n)||1,f=i.getUint32(ae.NUMBER_OF_ARRAY_ELEMENTS,n)||1,c=i.getUint32(ae.NUMBER_OF_FACES,n),d=i.getUint32(ae.NUMBER_OF_MIPMAP_LEVELS,n),_=i.getUint32(ae.BYTES_OF_KEY_VALUE_DATA,n);if(l===0||h!==1)throw new Error("Only 2D textures are supported");if(c!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(f!==1)throw new Error("WebGL does not support array textures");var p=4,v=4,m=u+3&~3,x=l+3&~3,b=new Array(f),C=u*l;o===0&&(C=m*x);var y;if(o!==0?Sh[o]?y=Sh[o]*E0[a]:y=P0[o]:y=Tn[s],y===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");for(var g=C*y,E=g,P=u,T=l,I=m,N=x,F=w0+_,L=0;L<d;L++){for(var H=i.getUint32(F,n),O=F+4,S=0;S<f;S++){var G=b[S];G||(G=b[S]=new Array(d)),G[L]={levelID:L,levelWidth:d>1?P:I,levelHeight:d>1?T:N,levelBuffer:new Uint8Array(t,O,E)},O+=E}F+=H+4,F=F%4!=0?F+4-F%4:F,P=P>>1||1,T=T>>1||1,I=P+p-1&~(p-1),N=T+v-1&~(v-1),E=I*N*y}if(o!==0)throw new Error("TODO: Uncompressed");return b.map(function(ot){return new sa(null,{format:s,width:u,height:l,levels:d,levelBuffers:ot})})},r.validate=function(e,t){for(var i=0;i<Rh.length;i++)if(t.getUint8(i)!==Rh[i])return console.error(e+" is not a valid *.ktx file!"),!1;return!0},r}();/*!
 * @pixi/particle-container - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/particle-container is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var ha=function(r,e){return ha=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},ha(r,e)};function Oh(r,e){ha(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(r){Oh(e,r);function e(t,i,n,o){t===void 0&&(t=1500),n===void 0&&(n=16384),o===void 0&&(o=!1);var a=r.call(this)||this,s=16384;return n>s&&(n=s),a._properties=[!1,!0,!1,!1,!1],a._maxSize=t,a._batchSize=n,a._buffers=null,a._bufferUpdateIDs=[],a._updateID=0,a.interactiveChildren=!1,a.blendMode=D.NORMAL,a.autoResize=o,a.roundPixels=!0,a.baseTexture=null,a.setProperties(i),a._tint=0,a.tintRgb=new Float32Array(4),a.tint=16777215,a}return e.prototype.setProperties=function(t){t&&(this._properties[0]="vertices"in t||"scale"in t?!!t.vertices||!!t.scale:this._properties[0],this._properties[1]="position"in t?!!t.position:this._properties[1],this._properties[2]="rotation"in t?!!t.rotation:this._properties[2],this._properties[3]="uvs"in t?!!t.uvs:this._properties[3],this._properties[4]="tint"in t||"alpha"in t?!!t.tint||!!t.alpha:this._properties[4])},e.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,Ot(t,this.tintRgb)},enumerable:!1,configurable:!0}),e.prototype.render=function(t){var i=this;!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable||(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.valid||this.baseTexture.once("update",function(){return i.onChildrenChange(0)})),t.batch.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))},e.prototype.onChildrenChange=function(t){for(var i=Math.floor(t/this._batchSize);this._bufferUpdateIDs.length<i;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[i]=++this._updateID},e.prototype.dispose=function(){if(this._buffers){for(var t=0;t<this._buffers.length;++t)this._buffers[t].destroy();this._buffers=null}},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this.dispose(),this._properties=null,this._buffers=null,this._bufferUpdateIDs=null},e})(ve);var Nh=function(){function r(e,t,i){this.geometry=new di,this.indexBuffer=null,this.size=i,this.dynamicProperties=[],this.staticProperties=[];for(var n=0;n<e.length;++n){var o=e[n];o={attributeName:o.attributeName,size:o.size,uploadFunction:o.uploadFunction,type:o.type||X.FLOAT,offset:o.offset},t[n]?this.dynamicProperties.push(o):this.staticProperties.push(o)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}return r.prototype.initBuffers=function(){var e=this.geometry,t=0;this.indexBuffer=new wt(im(this.size),!0,!0),e.addIndex(this.indexBuffer),this.dynamicStride=0;for(var i=0;i<this.dynamicProperties.length;++i){var n=this.dynamicProperties[i];n.offset=t,t+=n.size,this.dynamicStride+=n.size}var o=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(o),this.dynamicDataUint32=new Uint32Array(o),this.dynamicBuffer=new wt(this.dynamicData,!1,!1);var a=0;this.staticStride=0;for(var i=0;i<this.staticProperties.length;++i){var n=this.staticProperties[i];n.offset=a,a+=n.size,this.staticStride+=n.size}var s=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(s),this.staticDataUint32=new Uint32Array(s),this.staticBuffer=new wt(this.staticData,!0,!1);for(var i=0;i<this.dynamicProperties.length;++i){var n=this.dynamicProperties[i];e.addAttribute(n.attributeName,this.dynamicBuffer,0,n.type===X.UNSIGNED_BYTE,n.type,this.dynamicStride*4,n.offset*4)}for(var i=0;i<this.staticProperties.length;++i){var n=this.staticProperties[i];e.addAttribute(n.attributeName,this.staticBuffer,0,n.type===X.UNSIGNED_BYTE,n.type,this.staticStride*4,n.offset*4)}},r.prototype.uploadDynamic=function(e,t,i){for(var n=0;n<this.dynamicProperties.length;n++){var o=this.dynamicProperties[n];o.uploadFunction(e,t,i,o.type===X.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,o.offset)}this.dynamicBuffer._updateID++},r.prototype.uploadStatic=function(e,t,i){for(var n=0;n<this.staticProperties.length;n++){var o=this.staticProperties[n];o.uploadFunction(e,t,i,o.type===X.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,o.offset)}this.staticBuffer._updateID++},r.prototype.destroy=function(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()},r}(),A0=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,R0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`,S0=function(r){Oh(e,r);function e(t){var i=r.call(this,t)||this;return i.shader=null,i.properties=null,i.tempMatrix=new yt,i.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:i.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:i.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:i.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:i.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:X.UNSIGNED_BYTE,uploadFunction:i.uploadTint,offset:0}],i.shader=Me.from(R0,A0,{}),i.state=fr.for2d(),i}return e.prototype.render=function(t){var i=t.children,n=t._maxSize,o=t._batchSize,a=this.renderer,s=i.length;if(s!==0){s>n&&!t.autoResize&&(s=n);var u=t._buffers;u||(u=t._buffers=this.generateBuffers(t));var l=i[0]._texture.baseTexture;this.state.blendMode=Ku(t.blendMode,l.alphaMode),a.state.set(this.state);var h=a.gl,f=t.worldTransform.copyTo(this.tempMatrix);f.prepend(a.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=f.toArray(!0),this.shader.uniforms.uColor=rm(t.tintRgb,t.worldAlpha,this.shader.uniforms.uColor,l.alphaMode),this.shader.uniforms.uSampler=l,this.renderer.shader.bind(this.shader);for(var c=!1,d=0,_=0;d<s;d+=o,_+=1){var p=s-d;p>o&&(p=o),_>=u.length&&u.push(this._generateOneMoreBuffer(t));var v=u[_];v.uploadDynamic(i,d,p);var m=t._bufferUpdateIDs[_]||0;c=c||v._updateID<m,c&&(v._updateID=t._updateID,v.uploadStatic(i,d,p)),a.geometry.bind(v.geometry),h.drawElements(h.TRIANGLES,p*6,h.UNSIGNED_SHORT,0)}}},e.prototype.generateBuffers=function(t){for(var i=[],n=t._maxSize,o=t._batchSize,a=t._properties,s=0;s<n;s+=o)i.push(new Nh(this.properties,a,o));return i},e.prototype._generateOneMoreBuffer=function(t){var i=t._batchSize,n=t._properties;return new Nh(this.properties,n,i)},e.prototype.uploadVertices=function(t,i,n,o,a,s){for(var u=0,l=0,h=0,f=0,c=0;c<n;++c){var d=t[i+c],_=d._texture,p=d.scale.x,v=d.scale.y,m=_.trim,x=_.orig;m?(l=m.x-d.anchor.x*x.width,u=l+m.width,f=m.y-d.anchor.y*x.height,h=f+m.height):(u=x.width*(1-d.anchor.x),l=x.width*-d.anchor.x,h=x.height*(1-d.anchor.y),f=x.height*-d.anchor.y),o[s]=l*p,o[s+1]=f*v,o[s+a]=u*p,o[s+a+1]=f*v,o[s+a*2]=u*p,o[s+a*2+1]=h*v,o[s+a*3]=l*p,o[s+a*3+1]=h*v,s+=a*4}},e.prototype.uploadPosition=function(t,i,n,o,a,s){for(var u=0;u<n;u++){var l=t[i+u].position;o[s]=l.x,o[s+1]=l.y,o[s+a]=l.x,o[s+a+1]=l.y,o[s+a*2]=l.x,o[s+a*2+1]=l.y,o[s+a*3]=l.x,o[s+a*3+1]=l.y,s+=a*4}},e.prototype.uploadRotation=function(t,i,n,o,a,s){for(var u=0;u<n;u++){var l=t[i+u].rotation;o[s]=l,o[s+a]=l,o[s+a*2]=l,o[s+a*3]=l,s+=a*4}},e.prototype.uploadUvs=function(t,i,n,o,a,s){for(var u=0;u<n;++u){var l=t[i+u]._texture._uvs;l?(o[s]=l.x0,o[s+1]=l.y0,o[s+a]=l.x1,o[s+a+1]=l.y1,o[s+a*2]=l.x2,o[s+a*2+1]=l.y2,o[s+a*3]=l.x3,o[s+a*3+1]=l.y3,s+=a*4):(o[s]=0,o[s+1]=0,o[s+a]=0,o[s+a+1]=0,o[s+a*2]=0,o[s+a*2+1]=0,o[s+a*3]=0,o[s+a*3+1]=0,s+=a*4)}},e.prototype.uploadTint=function(t,i,n,o,a,s){for(var u=0;u<n;++u){var l=t[i+u],h=l._texture.baseTexture.alphaMode>0,f=l.alpha,c=f<1&&h?Eo(l._tintRGB,f):l._tintRGB+(f*255<<24);o[s]=c,o[s+a]=c,o[s+a*2]=c,o[s+a*3]=c,s+=a*4}},e.prototype.destroy=function(){r.prototype.destroy.call(this),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null},e}(_n);/*!
 * @pixi/graphics - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/graphics is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Ge;(function(r){r.MITER="miter",r.BEVEL="bevel",r.ROUND="round"})(Ge||(Ge={}));var De;(function(r){r.BUTT="butt",r.ROUND="round",r.SQUARE="square"})(De||(De={}));var xi={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount:function(r,e){if(e===void 0&&(e=20),!this.adaptive||!r||isNaN(r))return e;var t=Math.ceil(r/this.maxLength);return t<this.minSegments?t=this.minSegments:t>this.maxSegments&&(t=this.maxSegments),t}},Fh=function(){function r(){this.color=16777215,this.alpha=1,this.texture=k.WHITE,this.matrix=null,this.visible=!1,this.reset()}return r.prototype.clone=function(){var e=new r;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e},r.prototype.reset=function(){this.color=16777215,this.alpha=1,this.texture=k.WHITE,this.matrix=null,this.visible=!1},r.prototype.destroy=function(){this.texture=null,this.matrix=null},r}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var fa=function(r,e){return fa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},fa(r,e)};function ca(r,e){fa(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Uh={build:function(r){r.points=r.shape.points.slice()},triangulate:function(r,e){var t=r.points,i=r.holes,n=e.points,o=e.indices;if(t.length>=6){for(var a=[],s=0;s<i.length;s++){var u=i[s];a.push(t.length/2),t=t.concat(u.points)}var l=Xu(t,a,2);if(!l)return;for(var h=n.length/2,s=0;s<l.length;s+=3)o.push(l[s]+h),o.push(l[s+1]+h),o.push(l[s+2]+h);for(var s=0;s<t.length;s++)n.push(t[s])}}},Lh={build:function(r){var e=r.shape,t=r.points,i=e.x,n=e.y,o,a;if(t.length=0,r.type===gt.CIRC)o=e.radius,a=e.radius;else{var s=r.shape;o=s.width,a=s.height}if(!(o===0||a===0)){var u=Math.floor(30*Math.sqrt(e.radius))||Math.floor(15*Math.sqrt(o+a));u/=2.3;for(var l=Math.PI*2/u,h=0;h<u-.5;h++)t.push(i+Math.sin(-l*h)*o,n+Math.cos(-l*h)*a);t.push(t[0],t[1])}},triangulate:function(r,e){var t=r.points,i=e.points,n=e.indices,o=i.length/2,a=o,s=r.shape,u=r.matrix,l=s.x,h=s.y;i.push(r.matrix?u.a*l+u.c*h+u.tx:l,r.matrix?u.b*l+u.d*h+u.ty:h);for(var f=0;f<t.length;f+=2)i.push(t[f],t[f+1]),n.push(o++,a,o)}},O0={build:function(r){var e=r.shape,t=e.x,i=e.y,n=e.width,o=e.height,a=r.points;a.length=0,a.push(t,i,t+n,i,t+n,i+o,t,i+o)},triangulate:function(r,e){var t=r.points,i=e.points,n=i.length/2;i.push(t[0],t[1],t[2],t[3],t[6],t[7],t[4],t[5]),e.indices.push(n,n+1,n+2,n+1,n+2,n+3)}};function Mr(r,e,t){var i=e-r;return r+i*t}function Pn(r,e,t,i,n,o,a){a===void 0&&(a=[]);for(var s=20,u=a,l=0,h=0,f=0,c=0,d=0,_=0,p=0,v=0;p<=s;++p)v=p/s,l=Mr(r,t,v),h=Mr(e,i,v),f=Mr(t,n,v),c=Mr(i,o,v),d=Mr(l,f,v),_=Mr(h,c,v),!(p===0&&u[u.length-2]===d&&u[u.length-1]===_)&&u.push(d,_);return u}var N0={build:function(r){var e=r.shape,t=r.points,i=e.x,n=e.y,o=e.width,a=e.height,s=Math.max(0,Math.min(e.radius,Math.min(o,a)/2));t.length=0,s?(Pn(i,n+s,i,n,i+s,n,t),Pn(i+o-s,n,i+o,n,i+o,n+s,t),Pn(i+o,n+a-s,i+o,n+a,i+o-s,n+a,t),Pn(i+s,n+a,i,n+a,i,n+a-s,t)):t.push(i,n,i+o,n,i+o,n+a,i,n+a)},triangulate:function(r,e){for(var t=r.points,i=e.points,n=e.indices,o=i.length/2,a=Xu(t,null,2),s=0,u=a.length;s<u;s+=3)n.push(a[s]+o),n.push(a[s+1]+o),n.push(a[s+2]+o);for(var s=0,u=t.length;s<u;s++)i.push(t[s],t[++s])}};function Mh(r,e,t,i,n,o,a,s){var u=r-t*n,l=e-i*n,h=r+t*o,f=e+i*o,c,d;a?(c=i,d=-t):(c=-i,d=t);var _=u+c,p=l+d,v=h+c,m=f+d;return s.push(_,p),s.push(v,m),2}function Br(r,e,t,i,n,o,a,s){var u=t-r,l=i-e,h=Math.atan2(u,l),f=Math.atan2(n-r,o-e);s&&h<f?h+=Math.PI*2:!s&&h>f&&(f+=Math.PI*2);var c=h,d=f-h,_=Math.abs(d),p=Math.sqrt(u*u+l*l),v=(15*_*Math.sqrt(p)/Math.PI>>0)+1,m=d/v;if(c+=m,s){a.push(r,e),a.push(t,i);for(var x=1,b=c;x<v;x++,b+=m)a.push(r,e),a.push(r+Math.sin(b)*p,e+Math.cos(b)*p);a.push(r,e),a.push(n,o)}else{a.push(t,i),a.push(r,e);for(var x=1,b=c;x<v;x++,b+=m)a.push(r+Math.sin(b)*p,e+Math.cos(b)*p),a.push(r,e);a.push(n,o),a.push(r,e)}return v*2}function F0(r,e){var t=r.shape,i=r.points||t.points.slice(),n=e.closePointEps;if(i.length!==0){var o=r.lineStyle,a=new J(i[0],i[1]),s=new J(i[i.length-2],i[i.length-1]),u=t.type!==gt.POLY||t.closeStroke,l=Math.abs(a.x-s.x)<n&&Math.abs(a.y-s.y)<n;if(u){i=i.slice(),l&&(i.pop(),i.pop(),s.set(i[i.length-2],i[i.length-1]));var h=(a.x+s.x)*.5,f=(s.y+a.y)*.5;i.unshift(h,f),i.push(h,f)}var c=e.points,d=i.length/2,_=i.length,p=c.length/2,v=o.width/2,m=v*v,x=o.miterLimit*o.miterLimit,b=i[0],C=i[1],y=i[2],g=i[3],E=0,P=0,T=-(C-g),I=b-y,N=0,F=0,L=Math.sqrt(T*T+I*I);T/=L,I/=L,T*=v,I*=v;var H=o.alignment,O=(1-H)*2,S=H*2;u||(o.cap===De.ROUND?_+=Br(b-T*(O-S)*.5,C-I*(O-S)*.5,b-T*O,C-I*O,b+T*S,C+I*S,c,!0)+2:o.cap===De.SQUARE&&(_+=Mh(b,C,T,I,O,S,!0,c))),c.push(b-T*O,C-I*O),c.push(b+T*S,C+I*S);for(var G=1;G<d-1;++G){b=i[(G-1)*2],C=i[(G-1)*2+1],y=i[G*2],g=i[G*2+1],E=i[(G+1)*2],P=i[(G+1)*2+1],T=-(C-g),I=b-y,L=Math.sqrt(T*T+I*I),T/=L,I/=L,T*=v,I*=v,N=-(g-P),F=y-E,L=Math.sqrt(N*N+F*F),N/=L,F/=L,N*=v,F*=v;var ot=y-b,lt=C-g,R=y-E,B=P-g,j=lt*R-B*ot,z=j<0;if(Math.abs(j)<.1){c.push(y-T*O,g-I*O),c.push(y+T*S,g+I*S);continue}var Y=(-T+b)*(-I+g)-(-T+y)*(-I+C),dt=(-N+E)*(-F+g)-(-N+y)*(-F+P),et=(ot*dt-R*Y)/j,bt=(B*Y-lt*dt)/j,Et=(et-y)*(et-y)+(bt-g)*(bt-g),pt=y+(et-y)*O,mt=g+(bt-g)*O,tt=y-(et-y)*S,ut=g-(bt-g)*S,W=Math.min(ot*ot+lt*lt,R*R+B*B),Ut=z?O:S,Pt=W+Ut*Ut*m,K=Et<=Pt;K?o.join===Ge.BEVEL||Et/m>x?(z?(c.push(pt,mt),c.push(y+T*S,g+I*S),c.push(pt,mt),c.push(y+N*S,g+F*S)):(c.push(y-T*O,g-I*O),c.push(tt,ut),c.push(y-N*O,g-F*O),c.push(tt,ut)),_+=2):o.join===Ge.ROUND?z?(c.push(pt,mt),c.push(y+T*S,g+I*S),_+=Br(y,g,y+T*S,g+I*S,y+N*S,g+F*S,c,!0)+4,c.push(pt,mt),c.push(y+N*S,g+F*S)):(c.push(y-T*O,g-I*O),c.push(tt,ut),_+=Br(y,g,y-T*O,g-I*O,y-N*O,g-F*O,c,!1)+4,c.push(y-N*O,g-F*O),c.push(tt,ut)):(c.push(pt,mt),c.push(tt,ut)):(c.push(y-T*O,g-I*O),c.push(y+T*S,g+I*S),o.join===Ge.BEVEL||Et/m>x||(o.join===Ge.ROUND?z?_+=Br(y,g,y+T*S,g+I*S,y+N*S,g+F*S,c,!0)+2:_+=Br(y,g,y-T*O,g-I*O,y-N*O,g-F*O,c,!1)+2:(z?(c.push(tt,ut),c.push(tt,ut)):(c.push(pt,mt),c.push(pt,mt)),_+=2)),c.push(y-N*O,g-F*O),c.push(y+N*S,g+F*S),_+=2)}b=i[(d-2)*2],C=i[(d-2)*2+1],y=i[(d-1)*2],g=i[(d-1)*2+1],T=-(C-g),I=b-y,L=Math.sqrt(T*T+I*I),T/=L,I/=L,T*=v,I*=v,c.push(y-T*O,g-I*O),c.push(y+T*S,g+I*S),u||(o.cap===De.ROUND?_+=Br(y-T*(O-S)*.5,g-I*(O-S)*.5,y-T*O,g-I*O,y+T*S,g+I*S,c,!1)+2:o.cap===De.SQUARE&&(_+=Mh(y,g,T,I,O,S,!1,c)));for(var le=e.indices,Pr=xi.epsilon*xi.epsilon,G=p;G<_+p-2;++G)b=c[G*2],C=c[G*2+1],y=c[(G+1)*2],g=c[(G+1)*2+1],E=c[(G+2)*2],P=c[(G+2)*2+1],!(Math.abs(b*(g-P)+y*(P-C)+E*(C-g))<Pr)&&le.push(G,G+1,G+2)}}function U0(r,e){var t=0,i=r.shape,n=r.points||i.points,o=i.type!==gt.POLY||i.closeStroke;if(n.length!==0){var a=e.points,s=e.indices,u=n.length/2,l=a.length/2,h=l;for(a.push(n[0],n[1]),t=1;t<u;t++)a.push(n[t*2],n[t*2+1]),s.push(h,h+1),h++;o&&s.push(h,l)}}function Bh(r,e){r.lineStyle.native?U0(r,e):F0(r,e)}var Gh=function(){function r(){}return r.curveTo=function(e,t,i,n,o,a){var s=a[a.length-2],u=a[a.length-1],l=u-t,h=s-e,f=n-t,c=i-e,d=Math.abs(l*c-h*f);if(d<1e-8||o===0)return(a[a.length-2]!==e||a[a.length-1]!==t)&&a.push(e,t),null;var _=l*l+h*h,p=f*f+c*c,v=l*f+h*c,m=o*Math.sqrt(_)/d,x=o*Math.sqrt(p)/d,b=m*v/_,C=x*v/p,y=m*c+x*h,g=m*f+x*l,E=h*(x+b),P=l*(x+b),T=c*(m+C),I=f*(m+C),N=Math.atan2(P-g,E-y),F=Math.atan2(I-g,T-y);return{cx:y+e,cy:g+t,radius:o,startAngle:N,endAngle:F,anticlockwise:h*f>c*l}},r.arc=function(e,t,i,n,o,a,s,u,l){for(var h=s-a,f=xi._segmentsCount(Math.abs(h)*o,Math.ceil(Math.abs(h)/an)*40),c=h/(f*2),d=c*2,_=Math.cos(c),p=Math.sin(c),v=f-1,m=v%1/v,x=0;x<=v;++x){var b=x+m*x,C=c+a+d*b,y=Math.cos(C),g=-Math.sin(C);l.push((_*y+p*g)*o+i,(_*-g+p*y)*o+n)}},r}(),L0=function(){function r(){}return r.curveLength=function(e,t,i,n,o,a,s,u){for(var l=10,h=0,f=0,c=0,d=0,_=0,p=0,v=0,m=0,x=0,b=0,C=0,y=e,g=t,E=1;E<=l;++E)f=E/l,c=f*f,d=c*f,_=1-f,p=_*_,v=p*_,m=v*e+3*p*f*i+3*_*c*o+d*s,x=v*t+3*p*f*n+3*_*c*a+d*u,b=y-m,C=g-x,y=m,g=x,h+=Math.sqrt(b*b+C*C);return h},r.curveTo=function(e,t,i,n,o,a,s){var u=s[s.length-2],l=s[s.length-1];s.length-=2;var h=xi._segmentsCount(r.curveLength(u,l,e,t,i,n,o,a)),f=0,c=0,d=0,_=0,p=0;s.push(u,l);for(var v=1,m=0;v<=h;++v)m=v/h,f=1-m,c=f*f,d=c*f,_=m*m,p=_*m,s.push(d*u+3*c*m*e+3*f*_*i+p*o,d*l+3*c*m*t+3*f*_*n+p*a)},r}(),M0=function(){function r(){}return r.curveLength=function(e,t,i,n,o,a){var s=e-2*i+o,u=t-2*n+a,l=2*i-2*e,h=2*n-2*t,f=4*(s*s+u*u),c=4*(s*l+u*h),d=l*l+h*h,_=2*Math.sqrt(f+c+d),p=Math.sqrt(f),v=2*f*p,m=2*Math.sqrt(d),x=c/p;return(v*_+p*c*(_-m)+(4*d*f-c*c)*Math.log((2*p+x+_)/(x+m)))/(4*v)},r.curveTo=function(e,t,i,n,o){for(var a=o[o.length-2],s=o[o.length-1],u=xi._segmentsCount(r.curveLength(a,s,e,t,i,n)),l=0,h=0,f=1;f<=u;++f){var c=f/u;l=a+(e-a)*c,h=s+(t-s)*c,o.push(l+(e+(i-e)*c-l)*c,h+(t+(n-t)*c-h)*c)}},r}(),B0=function(){function r(){this.reset()}return r.prototype.begin=function(e,t,i){this.reset(),this.style=e,this.start=t,this.attribStart=i},r.prototype.end=function(e,t){this.attribSize=t-this.attribStart,this.size=e-this.start},r.prototype.reset=function(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0},r}(),_r,da=(_r={},_r[gt.POLY]=Uh,_r[gt.CIRC]=Lh,_r[gt.ELIP]=Lh,_r[gt.RECT]=O0,_r[gt.RREC]=N0,_r),Dh=[],In=[];function G0(r){for(var e=r.points,t=0,i=0;i<e.length-2;i+=2)t+=(e[i+2]-e[i])*(e[i+3]+e[i+1]);return t>0}var kh=function(){function r(e,t,i,n){t===void 0&&(t=null),i===void 0&&(i=null),n===void 0&&(n=null),this.points=[],this.holes=[],this.shape=e,this.lineStyle=i,this.fillStyle=t,this.matrix=n,this.type=e.type}return r.prototype.clone=function(){return new r(this.shape,this.fillStyle,this.lineStyle,this.matrix)},r.prototype.destroy=function(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null},r}(),Gr=new J,D0=new fi,k0=function(r){ca(e,r);function e(){var t=r.call(this)||this;return t.closePointEps=1e-4,t.boundsPadding=0,t.uvsFloat32=null,t.indicesUint16=null,t.batchable=!1,t.points=[],t.colors=[],t.uvs=[],t.indices=[],t.textureIds=[],t.graphicsData=[],t.drawCalls=[],t.batchDirty=-1,t.batches=[],t.dirty=0,t.cacheDirty=-1,t.clearDirty=0,t.shapeIndex=0,t._bounds=new fi,t.boundsDirty=-1,t}return Object.defineProperty(e.prototype,"bounds",{get:function(){return this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds},enumerable:!1,configurable:!0}),e.prototype.invalidate=function(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(var t=0;t<this.drawCalls.length;t++)this.drawCalls[t].texArray.clear(),In.push(this.drawCalls[t]);this.drawCalls.length=0;for(var t=0;t<this.batches.length;t++){var i=this.batches[t];i.reset(),Dh.push(i)}this.batches.length=0},e.prototype.clear=function(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this},e.prototype.drawShape=function(t,i,n,o){i===void 0&&(i=null),n===void 0&&(n=null),o===void 0&&(o=null);var a=new kh(t,i,n,o);return this.graphicsData.push(a),this.dirty++,this},e.prototype.drawHole=function(t,i){if(i===void 0&&(i=null),!this.graphicsData.length)return null;var n=new kh(t,null,null,i),o=this.graphicsData[this.graphicsData.length-1];return n.lineStyle=o.lineStyle,o.holes.push(n),this.dirty++,this},e.prototype.destroy=function(){r.prototype.destroy.call(this);for(var t=0;t<this.graphicsData.length;++t)this.graphicsData[t].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null},e.prototype.containsPoint=function(t){for(var i=this.graphicsData,n=0;n<i.length;++n){var o=i[n];if(!!o.fillStyle.visible&&o.shape&&(o.matrix?o.matrix.applyInverse(t,Gr):Gr.copyFrom(t),o.shape.contains(Gr.x,Gr.y))){var a=!1;if(o.holes)for(var s=0;s<o.holes.length;s++){var u=o.holes[s];if(u.shape.contains(Gr.x,Gr.y)){a=!0;break}}if(!a)return!0}}return!1},e.prototype.updateBatches=function(t){if(!this.graphicsData.length){this.batchable=!0;return}if(!!this.validateBatching()){this.cacheDirty=this.dirty;var i=this.uvs,n=this.graphicsData,o=null,a=null;this.batches.length>0&&(o=this.batches[this.batches.length-1],a=o.style);for(var s=this.shapeIndex;s<n.length;s++){this.shapeIndex++;var u=n[s],l=u.fillStyle,h=u.lineStyle,f=da[u.type];f.build(u),u.matrix&&this.transformPoints(u.points,u.matrix);for(var c=0;c<2;c++){var d=c===0?l:h;if(!!d.visible){var _=d.texture.baseTexture,p=this.indices.length,v=this.points.length/2;_.wrapMode=we.REPEAT,c===0?this.processFill(u):this.processLine(u);var m=this.points.length/2-v;m!==0&&(o&&!this._compareStyles(a,d)&&(o.end(p,v),o=null),o||(o=Dh.pop()||new B0,o.begin(d,p,v),this.batches.push(o),a=d),this.addUvs(this.points,i,d.texture,v,m,d.matrix))}}}var x=this.indices.length,b=this.points.length/2;if(o&&o.end(x,b),this.batches.length===0){this.batchable=!0;return}if(this.indicesUint16&&this.indices.length===this.indicesUint16.length)this.indicesUint16.set(this.indices);else{var C=b>65535&&t;this.indicesUint16=C?new Uint32Array(this.indices):new Uint16Array(this.indices)}this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}},e.prototype._compareStyles=function(t,i){return!(!t||!i||t.texture.baseTexture!==i.texture.baseTexture||t.color+t.alpha!==i.color+i.alpha||!!t.native!=!!i.native)},e.prototype.validateBatching=function(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(var t=0,i=this.graphicsData.length;t<i;t++){var n=this.graphicsData[t],o=n.fillStyle,a=n.lineStyle;if(o&&!o.texture.baseTexture.valid||a&&!a.texture.baseTexture.valid)return!1}return!0},e.prototype.packBatches=function(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);for(var t=this.batches,i=0,n=t.length;i<n;i++)for(var o=t[i],a=0;a<o.size;a++){var s=o.start+a;this.indicesUint16[s]=this.indicesUint16[s]-o.attribStart}},e.prototype.isBatchable=function(){if(this.points.length>65535*2)return!1;for(var t=this.batches,i=0;i<t.length;i++)if(t[i].style.native)return!1;return this.points.length<e.BATCHABLE_SIZE*2},e.prototype.buildDrawCalls=function(){for(var t=++Q._globalBatch,i=0;i<this.drawCalls.length;i++)this.drawCalls[i].texArray.clear(),In.push(this.drawCalls[i]);this.drawCalls.length=0;var n=this.colors,o=this.textureIds,a=In.pop();a||(a=new Jo,a.texArray=new Qo),a.texArray.count=0,a.start=0,a.size=0,a.type=re.TRIANGLES;var s=0,u=null,l=0,h=!1,f=re.TRIANGLES,c=0;this.drawCalls.push(a);for(var i=0;i<this.batches.length;i++){var d=this.batches[i],_=8,p=d.style,v=p.texture.baseTexture;h!==!!p.native&&(h=!!p.native,f=h?re.LINES:re.TRIANGLES,u=null,s=_,t++),u!==v&&(u=v,v._batchEnabled!==t&&(s===_&&(t++,s=0,a.size>0&&(a=In.pop(),a||(a=new Jo,a.texArray=new Qo),this.drawCalls.push(a)),a.start=c,a.size=0,a.texArray.count=0,a.type=f),v.touched=1,v._batchEnabled=t,v._batchLocation=s,v.wrapMode=we.REPEAT,a.texArray.elements[a.texArray.count++]=v,s++)),a.size+=d.size,c+=d.size,l=v._batchLocation,this.addColors(n,p.color,p.alpha,d.attribSize,d.attribStart),this.addTextureIds(o,l,d.attribSize,d.attribStart)}Q._globalBatch=t,this.packAttributes()},e.prototype.packAttributes=function(){for(var t=this.points,i=this.uvs,n=this.colors,o=this.textureIds,a=new ArrayBuffer(t.length*3*4),s=new Float32Array(a),u=new Uint32Array(a),l=0,h=0;h<t.length/2;h++)s[l++]=t[h*2],s[l++]=t[h*2+1],s[l++]=i[h*2],s[l++]=i[h*2+1],u[l++]=n[h],s[l++]=o[h];this._buffer.update(a),this._indexBuffer.update(this.indicesUint16)},e.prototype.processFill=function(t){if(t.holes.length)this.processHoles(t.holes),Uh.triangulate(t,this);else{var i=da[t.type];i.triangulate(t,this)}},e.prototype.processLine=function(t){Bh(t,this);for(var i=0;i<t.holes.length;i++)Bh(t.holes[i],this)},e.prototype.processHoles=function(t){for(var i=0;i<t.length;i++){var n=t[i],o=da[n.type];o.build(n),n.matrix&&this.transformPoints(n.points,n.matrix)}},e.prototype.calculateBounds=function(){var t=this._bounds,i=D0,n=yt.IDENTITY;this._bounds.clear(),i.clear();for(var o=0;o<this.graphicsData.length;o++){var a=this.graphicsData[o],s=a.shape,u=a.type,l=a.lineStyle,h=a.matrix||yt.IDENTITY,f=0;if(l&&l.visible){var c=l.alignment;f=l.width,u===gt.POLY?G0(s)?f=f*(1-c):f=f*c:f=f*Math.max(0,c)}if(n!==h&&(i.isEmpty()||(t.addBoundsMatrix(i,n),i.clear()),n=h),u===gt.RECT||u===gt.RREC){var d=s;i.addFramePad(d.x,d.y,d.x+d.width,d.y+d.height,f,f)}else if(u===gt.CIRC){var _=s;i.addFramePad(_.x,_.y,_.x,_.y,_.radius+f,_.radius+f)}else if(u===gt.ELIP){var p=s;i.addFramePad(p.x,p.y,p.x,p.y,p.width+f,p.height+f)}else{var v=s;t.addVerticesMatrix(n,v.points,0,v.points.length,f,f)}}i.isEmpty()||t.addBoundsMatrix(i,n),t.pad(this.boundsPadding,this.boundsPadding)},e.prototype.transformPoints=function(t,i){for(var n=0;n<t.length/2;n++){var o=t[n*2],a=t[n*2+1];t[n*2]=i.a*o+i.c*a+i.tx,t[n*2+1]=i.b*o+i.d*a+i.ty}},e.prototype.addColors=function(t,i,n,o,a){a===void 0&&(a=0);var s=(i>>16)+(i&65280)+((i&255)<<16),u=Eo(s,n);t.length=Math.max(t.length,a+o);for(var l=0;l<o;l++)t[a+l]=u},e.prototype.addTextureIds=function(t,i,n,o){o===void 0&&(o=0),t.length=Math.max(t.length,o+n);for(var a=0;a<n;a++)t[o+a]=i},e.prototype.addUvs=function(t,i,n,o,a,s){s===void 0&&(s=null);for(var u=0,l=i.length,h=n.frame;u<a;){var f=t[(o+u)*2],c=t[(o+u)*2+1];if(s){var d=s.a*f+s.c*c+s.tx;c=s.b*f+s.d*c+s.ty,f=d}u++,i.push(f/h.width,c/h.height)}var _=n.baseTexture;(h.width<_.width||h.height<_.height)&&this.adjustUvs(i,n,l,a)},e.prototype.adjustUvs=function(t,i,n,o){for(var a=i.baseTexture,s=1e-6,u=n+o*2,l=i.frame,h=l.width/a.width,f=l.height/a.height,c=l.x/l.width,d=l.y/l.height,_=Math.floor(t[n]+s),p=Math.floor(t[n+1]+s),v=n+2;v<u;v+=2)_=Math.min(_,Math.floor(t[v]+s)),p=Math.min(p,Math.floor(t[v+1]+s));c-=_,d-=p;for(var v=n;v<u;v+=2)t[v]=(t[v]+c)*h,t[v+1]=(t[v+1]+d)*f},e.BATCHABLE_SIZE=100,e}(_h),X0=function(r){ca(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.width=0,t.alignment=.5,t.native=!1,t.cap=De.BUTT,t.join=Ge.MITER,t.miterLimit=10,t}return e.prototype.clone=function(){var t=new e;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t.width=this.width,t.alignment=this.alignment,t.native=this.native,t.cap=this.cap,t.join=this.join,t.miterLimit=this.miterLimit,t},e.prototype.reset=function(){r.prototype.reset.call(this),this.color=0,this.alignment=.5,this.width=0,this.native=!1},e}(Fh),H0=new Float32Array(3),pa={},Xh=function(r){ca(e,r);function e(t){t===void 0&&(t=null);var i=r.call(this)||this;return i.shader=null,i.pluginName="batch",i.currentPath=null,i.batches=[],i.batchTint=-1,i.batchDirty=-1,i.vertexData=null,i._fillStyle=new Fh,i._lineStyle=new X0,i._matrix=null,i._holeMode=!1,i.state=fr.for2d(),i._geometry=t||new k0,i._geometry.refCount++,i._transformID=-1,i.tint=16777215,i.blendMode=D.NORMAL,i}return Object.defineProperty(e.prototype,"geometry",{get:function(){return this._geometry},enumerable:!1,configurable:!0}),e.prototype.clone=function(){return this.finishPoly(),new e(this._geometry)},Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fill",{get:function(){return this._fillStyle},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"line",{get:function(){return this._lineStyle},enumerable:!1,configurable:!0}),e.prototype.lineStyle=function(t,i,n,o,a){return t===void 0&&(t=null),i===void 0&&(i=0),n===void 0&&(n=1),o===void 0&&(o=.5),a===void 0&&(a=!1),typeof t=="number"&&(t={width:t,color:i,alpha:n,alignment:o,native:a}),this.lineTextureStyle(t)},e.prototype.lineTextureStyle=function(t){t=Object.assign({width:0,texture:k.WHITE,color:t&&t.texture?16777215:0,alpha:1,matrix:null,alignment:.5,native:!1,cap:De.BUTT,join:Ge.MITER,miterLimit:10},t),this.currentPath&&this.startPoly();var i=t.width>0&&t.alpha>0;return i?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._lineStyle,{visible:i},t)):this._lineStyle.reset(),this},e.prototype.startPoly=function(){if(this.currentPath){var t=this.currentPath.points,i=this.currentPath.points.length;i>2&&(this.drawShape(this.currentPath),this.currentPath=new sn,this.currentPath.closeStroke=!1,this.currentPath.points.push(t[i-2],t[i-1]))}else this.currentPath=new sn,this.currentPath.closeStroke=!1},e.prototype.finishPoly=function(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)},e.prototype.moveTo=function(t,i){return this.startPoly(),this.currentPath.points[0]=t,this.currentPath.points[1]=i,this},e.prototype.lineTo=function(t,i){this.currentPath||this.moveTo(0,0);var n=this.currentPath.points,o=n[n.length-2],a=n[n.length-1];return(o!==t||a!==i)&&n.push(t,i),this},e.prototype._initCurve=function(t,i){t===void 0&&(t=0),i===void 0&&(i=0),this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[t,i]):this.moveTo(t,i)},e.prototype.quadraticCurveTo=function(t,i,n,o){this._initCurve();var a=this.currentPath.points;return a.length===0&&this.moveTo(0,0),M0.curveTo(t,i,n,o,a),this},e.prototype.bezierCurveTo=function(t,i,n,o,a,s){return this._initCurve(),L0.curveTo(t,i,n,o,a,s,this.currentPath.points),this},e.prototype.arcTo=function(t,i,n,o,a){this._initCurve(t,i);var s=this.currentPath.points,u=Gh.curveTo(t,i,n,o,a,s);if(u){var l=u.cx,h=u.cy,f=u.radius,c=u.startAngle,d=u.endAngle,_=u.anticlockwise;this.arc(l,h,f,c,d,_)}return this},e.prototype.arc=function(t,i,n,o,a,s){if(s===void 0&&(s=!1),o===a)return this;!s&&a<=o?a+=an:s&&o<=a&&(o+=an);var u=a-o;if(u===0)return this;var l=t+Math.cos(o)*n,h=i+Math.sin(o)*n,f=this._geometry.closePointEps,c=this.currentPath?this.currentPath.points:null;if(c){var d=Math.abs(c[c.length-2]-l),_=Math.abs(c[c.length-1]-h);d<f&&_<f||c.push(l,h)}else this.moveTo(l,h),c=this.currentPath.points;return Gh.arc(l,h,t,i,n,o,a,s,c),this},e.prototype.beginFill=function(t,i){return t===void 0&&(t=0),i===void 0&&(i=1),this.beginTextureFill({texture:k.WHITE,color:t,alpha:i})},e.prototype.beginTextureFill=function(t){t=Object.assign({texture:k.WHITE,color:16777215,alpha:1,matrix:null},t),this.currentPath&&this.startPoly();var i=t.alpha>0;return i?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._fillStyle,{visible:i},t)):this._fillStyle.reset(),this},e.prototype.endFill=function(){return this.finishPoly(),this._fillStyle.reset(),this},e.prototype.drawRect=function(t,i,n,o){return this.drawShape(new Z(t,i,n,o))},e.prototype.drawRoundedRect=function(t,i,n,o,a){return this.drawShape(new hm(t,i,n,o,a))},e.prototype.drawCircle=function(t,i,n){return this.drawShape(new um(t,i,n))},e.prototype.drawEllipse=function(t,i,n,o){return this.drawShape(new lm(t,i,n,o))},e.prototype.drawPolygon=function(){for(var t=arguments,i=[],n=0;n<arguments.length;n++)i[n]=t[n];var o,a=!0,s=i[0];s.points?(a=s.closeStroke,o=s.points):Array.isArray(i[0])?o=i[0]:o=i;var u=new sn(o);return u.closeStroke=a,this.drawShape(u),this},e.prototype.drawShape=function(t){return this._holeMode?this._geometry.drawHole(t,this._matrix):this._geometry.drawShape(t,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this},e.prototype.clear=function(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this},e.prototype.isFastRect=function(){var t=this._geometry.graphicsData;return t.length===1&&t[0].shape.type===gt.RECT&&!t[0].matrix&&!t[0].holes.length&&!(t[0].lineStyle.visible&&t[0].lineStyle.width)},e.prototype._render=function(t){this.finishPoly();var i=this._geometry,n=t.context.supports.uint32Indices;i.updateBatches(n),i.batchable?(this.batchDirty!==i.batchDirty&&this._populateBatches(),this._renderBatched(t)):(t.batch.flush(),this._renderDirect(t))},e.prototype._populateBatches=function(){var t=this._geometry,i=this.blendMode,n=t.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=t.batchDirty,this.batches.length=n,this.vertexData=new Float32Array(t.points);for(var o=0;o<n;o++){var a=t.batches[o],s=a.style.color,u=new Float32Array(this.vertexData.buffer,a.attribStart*4*2,a.attribSize*2),l=new Float32Array(t.uvsFloat32.buffer,a.attribStart*4*2,a.attribSize*2),h=new Uint16Array(t.indicesUint16.buffer,a.start*2,a.size),f={vertexData:u,blendMode:i,indices:h,uvs:l,_batchRGB:Ot(s),_tintRGB:s,_texture:a.style.texture,alpha:a.style.alpha,worldAlpha:1};this.batches[o]=f}},e.prototype._renderBatched=function(t){if(!!this.batches.length){t.batch.setObjectRenderer(t.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(var i=0,n=this.batches.length;i<n;i++){var o=this.batches[i];o.worldAlpha=this.worldAlpha*o.alpha,t.plugins[this.pluginName].render(o)}}},e.prototype._renderDirect=function(t){var i=this._resolveDirectShader(t),n=this._geometry,o=this.tint,a=this.worldAlpha,s=i.uniforms,u=n.drawCalls;s.translationMatrix=this.transform.worldTransform,s.tint[0]=(o>>16&255)/255*a,s.tint[1]=(o>>8&255)/255*a,s.tint[2]=(o&255)/255*a,s.tint[3]=a,t.shader.bind(i),t.geometry.bind(n,i),t.state.set(this.state);for(var l=0,h=u.length;l<h;l++)this._renderDrawCallDirect(t,n.drawCalls[l])},e.prototype._renderDrawCallDirect=function(t,i){for(var n=i.texArray,o=i.type,a=i.size,s=i.start,u=n.count,l=0;l<u;l++)t.texture.bind(n.elements[l],l);t.geometry.draw(o,a,s)},e.prototype._resolveDirectShader=function(t){var i=this.shader,n=this.pluginName;if(!i){if(!pa[n]){for(var o=t.plugins.batch.MAX_TEXTURES,a=new Int32Array(o),s=0;s<o;s++)a[s]=s;var u={tint:new Float32Array([1,1,1,1]),translationMatrix:new yt,default:hr.from({uSamplers:a},!0)},l=t.plugins[n]._shader.program;pa[n]=new Me(l,u)}i=pa[n]}return i},e.prototype._calculateBounds=function(){this.finishPoly();var t=this._geometry;if(!!t.graphicsData.length){var i=t.bounds,n=i.minX,o=i.minY,a=i.maxX,s=i.maxY;this._bounds.addFrame(this.transform,n,o,a,s)}},e.prototype.containsPoint=function(t){return this.worldTransform.applyInverse(t,e._TEMP_POINT),this._geometry.containsPoint(e._TEMP_POINT)},e.prototype.calculateTints=function(){if(this.batchTint!==this.tint){this.batchTint=this.tint;for(var t=Ot(this.tint,H0),i=0;i<this.batches.length;i++){var n=this.batches[i],o=n._batchRGB,a=t[0]*o[0]*255,s=t[1]*o[1]*255,u=t[2]*o[2]*255,l=(a<<16)+(s<<8)+(u|0);n._tintRGB=(l>>16)+(l&65280)+((l&255)<<16)}}},e.prototype.calculateVertices=function(){var t=this.transform._worldID;if(this._transformID!==t){this._transformID=t;for(var i=this.transform.worldTransform,n=i.a,o=i.b,a=i.c,s=i.d,u=i.tx,l=i.ty,h=this._geometry.points,f=this.vertexData,c=0,d=0;d<h.length;d+=2){var _=h[d],p=h[d+1];f[c++]=n*_+a*p+u,f[c++]=s*p+o*_+l}}},e.prototype.closePath=function(){var t=this.currentPath;return t&&(t.closeStroke=!0,this.finishPoly()),this},e.prototype.setMatrix=function(t){return this._matrix=t,this},e.prototype.beginHole=function(){return this.finishPoly(),this._holeMode=!0,this},e.prototype.endHole=function(){return this.finishPoly(),this._holeMode=!1,this},e.prototype.destroy=function(t){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,r.prototype.destroy.call(this,t)},e._TEMP_POINT=new J,e}(ve);/*!
 * @pixi/sprite - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/sprite is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var _a=function(r,e){return _a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},_a(r,e)};function j0(r,e){_a(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var bi=new J,z0=new Uint16Array([0,1,2,0,2,3]),Ti=function(r){j0(e,r);function e(t){var i=r.call(this)||this;return i._anchor=new nr(i._onAnchorUpdate,i,t?t.defaultAnchor.x:0,t?t.defaultAnchor.y:0),i._texture=null,i._width=0,i._height=0,i._tint=null,i._tintRGB=null,i.tint=16777215,i.blendMode=D.NORMAL,i._cachedTint=16777215,i.uvs=null,i.texture=t||k.EMPTY,i.vertexData=new Float32Array(8),i.vertexTrimmedData=null,i._transformID=-1,i._textureID=-1,i._transformTrimmedID=-1,i._textureTrimmedID=-1,i.indices=z0,i.pluginName="batch",i.isSprite=!0,i._roundPixels=M.ROUND_PIXELS,i}return e.prototype._onTextureUpdate=function(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=Nr(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=Nr(this.scale.y)*this._height/this._texture.orig.height)},e.prototype._onAnchorUpdate=function(){this._transformID=-1,this._transformTrimmedID=-1},e.prototype.calculateVertices=function(){var t=this._texture;if(!(this._transformID===this.transform._worldID&&this._textureID===t._updateID)){this._textureID!==t._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=t._updateID;var i=this.transform.worldTransform,n=i.a,o=i.b,a=i.c,s=i.d,u=i.tx,l=i.ty,h=this.vertexData,f=t.trim,c=t.orig,d=this._anchor,_=0,p=0,v=0,m=0;if(f?(p=f.x-d._x*c.width,_=p+f.width,m=f.y-d._y*c.height,v=m+f.height):(p=-d._x*c.width,_=p+c.width,m=-d._y*c.height,v=m+c.height),h[0]=n*p+a*m+u,h[1]=s*m+o*p+l,h[2]=n*_+a*m+u,h[3]=s*m+o*_+l,h[4]=n*_+a*v+u,h[5]=s*v+o*_+l,h[6]=n*p+a*v+u,h[7]=s*v+o*p+l,this._roundPixels)for(var x=M.RESOLUTION,b=0;b<h.length;++b)h[b]=Math.round((h[b]*x|0)/x)}},e.prototype.calculateTrimmedVertices=function(){if(!this.vertexTrimmedData)this.vertexTrimmedData=new Float32Array(8);else if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return;this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;var t=this._texture,i=this.vertexTrimmedData,n=t.orig,o=this._anchor,a=this.transform.worldTransform,s=a.a,u=a.b,l=a.c,h=a.d,f=a.tx,c=a.ty,d=-o._x*n.width,_=d+n.width,p=-o._y*n.height,v=p+n.height;i[0]=s*d+l*p+f,i[1]=h*p+u*d+c,i[2]=s*_+l*p+f,i[3]=h*p+u*_+c,i[4]=s*_+l*v+f,i[5]=h*v+u*_+c,i[6]=s*d+l*v+f,i[7]=h*v+u*d+c},e.prototype._render=function(t){this.calculateVertices(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this)},e.prototype._calculateBounds=function(){var t=this._texture.trim,i=this._texture.orig;!t||t.width===i.width&&t.height===i.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},e.prototype.getLocalBounds=function(t){return this.children.length===0?(this._localBounds||(this._localBounds=new fi),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new Z),t=this._localBoundsRect),this._localBounds.getRectangle(t)):r.prototype.getLocalBounds.call(this,t)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,bi);var i=this._texture.orig.width,n=this._texture.orig.height,o=-i*this.anchor.x,a=0;return!!(bi.x>=o&&bi.x<o+i&&(a=-n*this.anchor.y,bi.y>=a&&bi.y<a+n))},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null;var i=typeof t=="boolean"?t:t&&t.texture;if(i){var n=typeof t=="boolean"?t:t&&t.baseTexture;this._texture.destroy(!!n)}this._texture=null},e.from=function(t,i){var n=t instanceof k?t:k.from(t,i);return new e(n)},Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){var i=Nr(this.scale.x)||1;this.scale.x=i*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){var i=Nr(this.scale.y)||1;this.scale.y=i*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=t||k.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,t&&(t.baseTexture.valid?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))},enumerable:!1,configurable:!0}),e}(ve);/*!
 * @pixi/text - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/text is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var va=function(r,e){return va=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},va(r,e)};function V0(r,e){va(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ci;(function(r){r[r.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",r[r.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL"})(Ci||(Ci={}));var ma={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:Ci.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100,leading:0},$0=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],Dr=function(){function r(e){this.styleID=0,this.reset(),ya(this,e,e)}return r.prototype.clone=function(){var e={};return ya(e,this,ma),new r(e)},r.prototype.reset=function(){ya(this,ma,ma)},Object.defineProperty(r.prototype,"align",{get:function(){return this._align},set:function(e){this._align!==e&&(this._align=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"breakWords",{get:function(){return this._breakWords},set:function(e){this._breakWords!==e&&(this._breakWords=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadow",{get:function(){return this._dropShadow},set:function(e){this._dropShadow!==e&&(this._dropShadow=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowAlpha",{get:function(){return this._dropShadowAlpha},set:function(e){this._dropShadowAlpha!==e&&(this._dropShadowAlpha=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowAngle",{get:function(){return this._dropShadowAngle},set:function(e){this._dropShadowAngle!==e&&(this._dropShadowAngle=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowBlur",{get:function(){return this._dropShadowBlur},set:function(e){this._dropShadowBlur!==e&&(this._dropShadowBlur=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowColor",{get:function(){return this._dropShadowColor},set:function(e){var t=ga(e);this._dropShadowColor!==t&&(this._dropShadowColor=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowDistance",{get:function(){return this._dropShadowDistance},set:function(e){this._dropShadowDistance!==e&&(this._dropShadowDistance=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fill",{get:function(){return this._fill},set:function(e){var t=ga(e);this._fill!==t&&(this._fill=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fillGradientType",{get:function(){return this._fillGradientType},set:function(e){this._fillGradientType!==e&&(this._fillGradientType=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fillGradientStops",{get:function(){return this._fillGradientStops},set:function(e){W0(this._fillGradientStops,e)||(this._fillGradientStops=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(e){this.fontFamily!==e&&(this._fontFamily=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontSize",{get:function(){return this._fontSize},set:function(e){this._fontSize!==e&&(this._fontSize=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(e){this._fontStyle!==e&&(this._fontStyle=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontVariant",{get:function(){return this._fontVariant},set:function(e){this._fontVariant!==e&&(this._fontVariant=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(e){this._fontWeight!==e&&(this._fontWeight=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(e){this._letterSpacing!==e&&(this._letterSpacing=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineHeight",{get:function(){return this._lineHeight},set:function(e){this._lineHeight!==e&&(this._lineHeight=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"leading",{get:function(){return this._leading},set:function(e){this._leading!==e&&(this._leading=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineJoin",{get:function(){return this._lineJoin},set:function(e){this._lineJoin!==e&&(this._lineJoin=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"miterLimit",{get:function(){return this._miterLimit},set:function(e){this._miterLimit!==e&&(this._miterLimit=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"padding",{get:function(){return this._padding},set:function(e){this._padding!==e&&(this._padding=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"stroke",{get:function(){return this._stroke},set:function(e){var t=ga(e);this._stroke!==t&&(this._stroke=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"strokeThickness",{get:function(){return this._strokeThickness},set:function(e){this._strokeThickness!==e&&(this._strokeThickness=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"textBaseline",{get:function(){return this._textBaseline},set:function(e){this._textBaseline!==e&&(this._textBaseline=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"trim",{get:function(){return this._trim},set:function(e){this._trim!==e&&(this._trim=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"whiteSpace",{get:function(){return this._whiteSpace},set:function(e){this._whiteSpace!==e&&(this._whiteSpace=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wordWrap",{get:function(){return this._wordWrap},set:function(e){this._wordWrap!==e&&(this._wordWrap=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wordWrapWidth",{get:function(){return this._wordWrapWidth},set:function(e){this._wordWrapWidth!==e&&(this._wordWrapWidth=e,this.styleID++)},enumerable:!1,configurable:!0}),r.prototype.toFontString=function(){var e=typeof this.fontSize=="number"?this.fontSize+"px":this.fontSize,t=this.fontFamily;Array.isArray(this.fontFamily)||(t=this.fontFamily.split(","));for(var i=t.length-1;i>=0;i--){var n=t[i].trim();!/([\"\'])[^\'\"]+\1/.test(n)&&$0.indexOf(n)<0&&(n='"'+n+'"'),t[i]=n}return this.fontStyle+" "+this.fontVariant+" "+this.fontWeight+" "+e+" "+t.join(",")},r}();function Hh(r){return typeof r=="number"?Wu(r):(typeof r=="string"&&r.indexOf("0x")===0&&(r=r.replace("0x","#")),r)}function ga(r){if(Array.isArray(r)){for(var e=0;e<r.length;++e)r[e]=Hh(r[e]);return r}else return Hh(r)}function W0(r,e){if(!Array.isArray(r)||!Array.isArray(e)||r.length!==e.length)return!1;for(var t=0;t<r.length;++t)if(r[t]!==e[t])return!1;return!0}function ya(r,e,t){for(var i in t)Array.isArray(e[i])?r[i]=e[i].slice():r[i]=e[i]}var Yt=function(){function r(e,t,i,n,o,a,s,u,l){this.text=e,this.style=t,this.width=i,this.height=n,this.lines=o,this.lineWidths=a,this.lineHeight=s,this.maxLineWidth=u,this.fontProperties=l}return r.measureText=function(e,t,i,n){n===void 0&&(n=r._canvas),i=i==null?t.wordWrap:i;var o=t.toFontString(),a=r.measureFont(o);a.fontSize===0&&(a.fontSize=t.fontSize,a.ascent=t.fontSize);var s=n.getContext("2d");s.font=o;for(var u=i?r.wordWrap(e,t,n):e,l=u.split(/(?:\r\n|\r|\n)/),h=new Array(l.length),f=0,c=0;c<l.length;c++){var d=s.measureText(l[c]).width+(l[c].length-1)*t.letterSpacing;h[c]=d,f=Math.max(f,d)}var _=f+t.strokeThickness;t.dropShadow&&(_+=t.dropShadowDistance);var p=t.lineHeight||a.fontSize+t.strokeThickness,v=Math.max(p,a.fontSize+t.strokeThickness)+(l.length-1)*(p+t.leading);return t.dropShadow&&(v+=t.dropShadowDistance),new r(e,t,_,v,l,h,p+t.leading,f,a)},r.wordWrap=function(e,t,i){i===void 0&&(i=r._canvas);for(var n=i.getContext("2d"),o=0,a="",s="",u=Object.create(null),l=t.letterSpacing,h=t.whiteSpace,f=r.collapseSpaces(h),c=r.collapseNewlines(h),d=!f,_=t.wordWrapWidth+l,p=r.tokenize(e),v=0;v<p.length;v++){var m=p[v];if(r.isNewline(m)){if(!c){s+=r.addLine(a),d=!f,a="",o=0;continue}m=" "}if(f){var x=r.isBreakingSpace(m),b=r.isBreakingSpace(a[a.length-1]);if(x&&b)continue}var C=r.getFromCache(m,l,u,n);if(C>_)if(a!==""&&(s+=r.addLine(a),a="",o=0),r.canBreakWords(m,t.breakWords))for(var y=r.wordWrapSplit(m),g=0;g<y.length;g++){for(var E=y[g],P=1;y[g+P];){var T=y[g+P],I=E[E.length-1];if(!r.canBreakChars(I,T,m,g,t.breakWords))E+=T;else break;P++}g+=E.length-1;var N=r.getFromCache(E,l,u,n);N+o>_&&(s+=r.addLine(a),d=!1,a="",o=0),a+=E,o+=N}else{a.length>0&&(s+=r.addLine(a),a="",o=0);var F=v===p.length-1;s+=r.addLine(m,!F),d=!1,a="",o=0}else C+o>_&&(d=!1,s+=r.addLine(a),a="",o=0),(a.length>0||!r.isBreakingSpace(m)||d)&&(a+=m,o+=C)}return s+=r.addLine(a,!1),s},r.addLine=function(e,t){return t===void 0&&(t=!0),e=r.trimRight(e),e=t?e+`
`:e,e},r.getFromCache=function(e,t,i,n){var o=i[e];if(typeof o!="number"){var a=e.length*t;o=n.measureText(e).width+a,i[e]=o}return o},r.collapseSpaces=function(e){return e==="normal"||e==="pre-line"},r.collapseNewlines=function(e){return e==="normal"},r.trimRight=function(e){if(typeof e!="string")return"";for(var t=e.length-1;t>=0;t--){var i=e[t];if(!r.isBreakingSpace(i))break;e=e.slice(0,-1)}return e},r.isNewline=function(e){return typeof e!="string"?!1:r._newlines.indexOf(e.charCodeAt(0))>=0},r.isBreakingSpace=function(e,t){return typeof e!="string"?!1:r._breakingSpaces.indexOf(e.charCodeAt(0))>=0},r.tokenize=function(e){var t=[],i="";if(typeof e!="string")return t;for(var n=0;n<e.length;n++){var o=e[n],a=e[n+1];if(r.isBreakingSpace(o,a)||r.isNewline(o)){i!==""&&(t.push(i),i=""),t.push(o);continue}i+=o}return i!==""&&t.push(i),t},r.canBreakWords=function(e,t){return t},r.canBreakChars=function(e,t,i,n,o){return!0},r.wordWrapSplit=function(e){return e.split("")},r.measureFont=function(e){if(r._fonts[e])return r._fonts[e];var t={ascent:0,descent:0,fontSize:0},i=r._canvas,n=r._context;n.font=e;var o=r.METRICS_STRING+r.BASELINE_SYMBOL,a=Math.ceil(n.measureText(o).width),s=Math.ceil(n.measureText(r.BASELINE_SYMBOL).width),u=Math.ceil(r.HEIGHT_MULTIPLIER*s);s=s*r.BASELINE_MULTIPLIER|0,i.width=a,i.height=u,n.fillStyle="#f00",n.fillRect(0,0,a,u),n.font=e,n.textBaseline="alphabetic",n.fillStyle="#000",n.fillText(o,0,s);var l=n.getImageData(0,0,a,u).data,h=l.length,f=a*4,c=0,d=0,_=!1;for(c=0;c<s;++c){for(var p=0;p<f;p+=4)if(l[d+p]!==255){_=!0;break}if(!_)d+=f;else break}for(t.ascent=s-c,d=h-f,_=!1,c=u;c>s;--c){for(var p=0;p<f;p+=4)if(l[d+p]!==255){_=!0;break}if(!_)d-=f;else break}return t.descent=c-s,t.fontSize=t.ascent+t.descent,r._fonts[e]=t,t},r.clearMetrics=function(e){e===void 0&&(e=""),e?delete r._fonts[e]:r._fonts={}},r}(),An=function(){try{var r=new OffscreenCanvas(0,0),e=r.getContext("2d");return e&&e.measureText?r:document.createElement("canvas")}catch{return document.createElement("canvas")}}();An.width=An.height=10;Yt._canvas=An;Yt._context=An.getContext("2d");Yt._fonts={};Yt.METRICS_STRING="|\xC9q\xC5";Yt.BASELINE_SYMBOL="M";Yt.BASELINE_MULTIPLIER=1.4;Yt.HEIGHT_MULTIPLIER=2;Yt._newlines=[10,13];Yt._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];var Y0={texture:!0,children:!1,baseTexture:!0},jh=function(r){V0(e,r);function e(t,i,n){var o=this,a=!1;n||(n=document.createElement("canvas"),a=!0),n.width=3,n.height=3;var s=k.from(n);return s.orig=new Z,s.trim=new Z,o=r.call(this,s)||this,o._ownCanvas=a,o.canvas=n,o.context=o.canvas.getContext("2d"),o._resolution=M.RESOLUTION,o._autoResolution=!0,o._text=null,o._style=null,o._styleListener=null,o._font="",o.text=t,o.style=i,o.localStyleID=-1,o}return e.prototype.updateText=function(t){var i=this._style;if(this.localStyleID!==i.styleID&&(this.dirty=!0,this.localStyleID=i.styleID),!(!this.dirty&&t)){this._font=this._style.toFontString();var n=this.context,o=Yt.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),a=o.width,s=o.height,u=o.lines,l=o.lineHeight,h=o.lineWidths,f=o.maxLineWidth,c=o.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,a)+i.padding*2)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,s)+i.padding*2)*this._resolution),n.scale(this._resolution,this._resolution),n.clearRect(0,0,this.canvas.width,this.canvas.height),n.font=this._font,n.lineWidth=i.strokeThickness,n.textBaseline=i.textBaseline,n.lineJoin=i.lineJoin,n.miterLimit=i.miterLimit;for(var d,_,p=i.dropShadow?2:1,v=0;v<p;++v){var m=i.dropShadow&&v===0,x=m?Math.ceil(Math.max(1,s)+i.padding*2):0,b=x*this._resolution;if(m){n.fillStyle="black",n.strokeStyle="black";var C=i.dropShadowColor,y=Ot(typeof C=="number"?C:Yu(C)),g=i.dropShadowBlur*this._resolution,E=i.dropShadowDistance*this._resolution;n.shadowColor="rgba("+y[0]*255+","+y[1]*255+","+y[2]*255+","+i.dropShadowAlpha+")",n.shadowBlur=g,n.shadowOffsetX=Math.cos(i.dropShadowAngle)*E,n.shadowOffsetY=Math.sin(i.dropShadowAngle)*E+b}else n.fillStyle=this._generateFillStyle(i,u,o),n.strokeStyle=i.stroke,n.shadowColor="black",n.shadowBlur=0,n.shadowOffsetX=0,n.shadowOffsetY=0;var P=(l-c.fontSize)/2;(!e.nextLineHeightBehavior||l-c.fontSize<0)&&(P=0);for(var T=0;T<u.length;T++)d=i.strokeThickness/2,_=i.strokeThickness/2+T*l+c.ascent+P,i.align==="right"?d+=f-h[T]:i.align==="center"&&(d+=(f-h[T])/2),i.stroke&&i.strokeThickness&&this.drawLetterSpacing(u[T],d+i.padding,_+i.padding-x,!0),i.fill&&this.drawLetterSpacing(u[T],d+i.padding,_+i.padding-x)}this.updateTexture()}},e.prototype.drawLetterSpacing=function(t,i,n,o){o===void 0&&(o=!1);var a=this._style,s=a.letterSpacing,u="letterSpacing"in CanvasRenderingContext2D.prototype||"textLetterSpacing"in CanvasRenderingContext2D.prototype;if(s===0||u){u&&(this.context.letterSpacing=s,this.context.textLetterSpacing=s),o?this.context.strokeText(t,i,n):this.context.fillText(t,i,n);return}for(var l=i,h=Array.from?Array.from(t):t.split(""),f=this.context.measureText(t).width,c=0,d=0;d<h.length;++d){var _=h[d];o?this.context.strokeText(_,l,n):this.context.fillText(_,l,n);for(var p="",v=d+1;v<h.length;++v)p+=h[v];c=this.context.measureText(p).width,l+=f-c+s,f=c}},e.prototype.updateTexture=function(){var t=this.canvas;if(this._style.trim){var i=om(t);i.data&&(t.width=i.width,t.height=i.height,this.context.putImageData(i.data,0,0))}var n=this._texture,o=this._style,a=o.trim?0:o.padding,s=n.baseTexture;n.trim.width=n._frame.width=t.width/this._resolution,n.trim.height=n._frame.height=t.height/this._resolution,n.trim.x=-a,n.trim.y=-a,n.orig.width=n._frame.width-a*2,n.orig.height=n._frame.height-a*2,this._onTextureUpdate(),s.setRealSize(t.width,t.height,this._resolution),n.updateUvs(),this._recursivePostUpdateTransform(),this.dirty=!1},e.prototype._render=function(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0),this.updateText(!0),r.prototype._render.call(this,t)},e.prototype.getLocalBounds=function(t){return this.updateText(!0),r.prototype.getLocalBounds.call(this,t)},e.prototype._calculateBounds=function(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)},e.prototype._generateFillStyle=function(t,i,n){var o=t.fill;if(Array.isArray(o)){if(o.length===1)return o[0]}else return o;var a,s=t.dropShadow?t.dropShadowDistance:0,u=t.padding||0,l=this.canvas.width/this._resolution-s-u*2,h=this.canvas.height/this._resolution-s-u*2,f=o.slice(),c=t.fillGradientStops.slice();if(!c.length)for(var d=f.length+1,_=1;_<d;++_)c.push(_/d);if(f.unshift(o[0]),c.unshift(0),f.push(o[o.length-1]),c.push(1),t.fillGradientType===Ci.LINEAR_VERTICAL){a=this.context.createLinearGradient(l/2,u,l/2,h+u);for(var p=n.fontProperties.fontSize+t.strokeThickness,_=0;_<i.length;_++){var v=n.lineHeight*(_-1)+p,m=n.lineHeight*_,x=m;_>0&&v>m&&(x=(m+v)/2);var b=m+p,C=n.lineHeight*(_+1),y=b;_+1<i.length&&C<b&&(y=(b+C)/2);for(var g=(y-x)/h,E=0;E<f.length;E++){var P=0;typeof c[E]=="number"?P=c[E]:P=E/f.length;var T=Math.min(1,Math.max(0,x/h+P*g));T=Number(T.toFixed(5)),a.addColorStop(T,f[E])}}}else{a=this.context.createLinearGradient(u,h/2,l+u,h/2);for(var I=f.length+1,N=1,_=0;_<f.length;_++){var F=void 0;typeof c[_]=="number"?F=c[_]:F=N/I,a.addColorStop(F,f[_]),N++}}return a},e.prototype.destroy=function(t){typeof t=="boolean"&&(t={children:t}),t=Object.assign({},Y0,t),r.prototype.destroy.call(this,t),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null},Object.defineProperty(e.prototype,"width",{get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){this.updateText(!0);var i=Nr(this.scale.x)||1;this.scale.x=i*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){this.updateText(!0);var i=Nr(this.scale.y)||1;this.scale.y=i*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"style",{get:function(){return this._style},set:function(t){t=t||{},t instanceof Dr?this._style=t:this._style=new Dr(t),this.localStyleID=-1,this.dirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t==null?"":t),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)},enumerable:!1,configurable:!0}),e.nextLineHeightBehavior=!1,e}(Ti);/*!
 * @pixi/prepare - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/prepare is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */M.UPLOADS_PER_FRAME=4;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var xa=function(r,e){return xa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},xa(r,e)};function q0(r,e){xa(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var K0=function(){function r(e){this.maxItemsPerFrame=e,this.itemsLeft=0}return r.prototype.beginFrame=function(){this.itemsLeft=this.maxItemsPerFrame},r.prototype.allowedToUpload=function(){return this.itemsLeft-- >0},r}();function Z0(r,e){var t=!1;if(r&&r._textures&&r._textures.length){for(var i=0;i<r._textures.length;i++)if(r._textures[i]instanceof k){var n=r._textures[i].baseTexture;e.indexOf(n)===-1&&(e.push(n),t=!0)}}return t}function J0(r,e){if(r.baseTexture instanceof Q){var t=r.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function Q0(r,e){if(r._texture&&r._texture instanceof k){var t=r._texture.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function ty(r,e){return e instanceof jh?(e.updateText(!0),!0):!1}function ey(r,e){if(e instanceof Dr){var t=e.toFontString();return Yt.measureFont(t),!0}return!1}function ry(r,e){if(r instanceof jh){e.indexOf(r.style)===-1&&e.push(r.style),e.indexOf(r)===-1&&e.push(r);var t=r._texture.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function iy(r,e){return r instanceof Dr?(e.indexOf(r)===-1&&e.push(r),!0):!1}var ny=function(){function r(e){var t=this;this.limiter=new K0(M.UPLOADS_PER_FRAME),this.renderer=e,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=function(){!t.queue||t.prepareItems()},this.registerFindHook(ry),this.registerFindHook(iy),this.registerFindHook(Z0),this.registerFindHook(J0),this.registerFindHook(Q0),this.registerUploadHook(ty),this.registerUploadHook(ey)}return r.prototype.upload=function(e,t){typeof e=="function"&&(t=e,e=null),e&&this.add(e),this.queue.length?(t&&this.completes.push(t),this.ticking||(this.ticking=!0,Nt.system.addOnce(this.tick,this,Pe.UTILITY))):t&&t()},r.prototype.tick=function(){setTimeout(this.delayedTick,0)},r.prototype.prepareItems=function(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){var e=this.queue[0],t=!1;if(e&&!e._destroyed){for(var i=0,n=this.uploadHooks.length;i<n;i++)if(this.uploadHooks[i](this.uploadHookHelper,e)){this.queue.shift(),t=!0;break}}t||this.queue.shift()}if(this.queue.length)Nt.system.addOnce(this.tick,this,Pe.UTILITY);else{this.ticking=!1;var o=this.completes.slice(0);this.completes.length=0;for(var i=0,n=o.length;i<n;i++)o[i]()}},r.prototype.registerFindHook=function(e){return e&&this.addHooks.push(e),this},r.prototype.registerUploadHook=function(e){return e&&this.uploadHooks.push(e),this},r.prototype.add=function(e){for(var t=0,i=this.addHooks.length;t<i&&!this.addHooks[t](e,this.queue);t++);if(e instanceof ve)for(var t=e.children.length-1;t>=0;t--)this.add(e.children[t]);return this},r.prototype.destroy=function(){this.ticking&&Nt.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null},r}();function zh(r,e){return e instanceof Q?(e._glTextures[r.CONTEXT_UID]||r.texture.bind(e),!0):!1}function oy(r,e){if(!(e instanceof Xh))return!1;var t=e.geometry;e.finishPoly(),t.updateBatches();for(var i=t.batches,n=0;n<i.length;n++){var o=i[n].style.texture;o&&zh(r,o.baseTexture)}return t.batchable||r.geometry.bind(t,e._resolveDirectShader(r)),!0}function ay(r,e){return r instanceof Xh?(e.push(r),!0):!1}var sy=function(r){q0(e,r);function e(t){var i=r.call(this,t)||this;return i.uploadHookHelper=i.renderer,i.registerFindHook(ay),i.registerUploadHook(zh),i.registerUploadHook(oy),i}return e}(ny);/*!
 * @pixi/spritesheet - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/spritesheet is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var uy=function(){function r(e,t,i){i===void 0&&(i=null),this._texture=e instanceof k?e:null,this.baseTexture=e instanceof Q?e:this._texture.baseTexture,this.textures={},this.animations={},this.data=t;var n=this.baseTexture.resource;this.resolution=this._updateResolution(i||(n?n.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}return r.prototype._updateResolution=function(e){e===void 0&&(e=null);var t=this.data.meta.scale,i=on(e,null);return i===null&&(i=t!==void 0?parseFloat(t):1),i!==1&&this.baseTexture.setResolution(i),i},r.prototype.parse=function(e){this._batchIndex=0,this._callback=e,this._frameKeys.length<=r.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()},r.prototype._processFrames=function(e){for(var t=e,i=r.BATCH_SIZE;t-e<i&&t<this._frameKeys.length;){var n=this._frameKeys[t],o=this._frames[n],a=o.frame;if(a){var s=null,u=null,l=o.trimmed!==!1&&o.sourceSize?o.sourceSize:o.frame,h=new Z(0,0,Math.floor(l.w)/this.resolution,Math.floor(l.h)/this.resolution);o.rotated?s=new Z(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):s=new Z(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),o.trimmed!==!1&&o.spriteSourceSize&&(u=new Z(Math.floor(o.spriteSourceSize.x)/this.resolution,Math.floor(o.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[n]=new k(this.baseTexture,s,h,u,o.rotated?2:0,o.anchor),k.addToCache(this.textures[n],n)}t++}},r.prototype._processAnimations=function(){var e=this.data.animations||{};for(var t in e){this.animations[t]=[];for(var i=0;i<e[t].length;i++){var n=e[t][i];this.animations[t].push(this.textures[n])}}},r.prototype._parseComplete=function(){var e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)},r.prototype._nextBatch=function(){var e=this;this._processFrames(this._batchIndex*r.BATCH_SIZE),this._batchIndex++,setTimeout(function(){e._batchIndex*r.BATCH_SIZE<e._frameKeys.length?e._nextBatch():(e._processAnimations(),e._parseComplete())},0)},r.prototype.destroy=function(e){var t;e===void 0&&(e=!1);for(var i in this.textures)this.textures[i].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((t=this._texture)===null||t===void 0||t.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null},r.BATCH_SIZE=1e3,r}(),ly=function(){function r(){}return r.use=function(e,t){var i,n,o=this,a=e.name+"_image";if(!e.data||e.type!==vt.TYPE.JSON||!e.data.frames||o.resources[a]){t();return}var s=(n=(i=e.data)===null||i===void 0?void 0:i.meta)===null||n===void 0?void 0:n.related_multi_packs;if(Array.isArray(s))for(var u=function(_){if(typeof _!="string")return"continue";var p=_.replace(".json",""),v=Sr.resolve(e.url.replace(o.baseUrl,""),_);if(o.resources[p]||Object.values(o.resources).some(function(x){return Sr.format(Sr.parse(x.url))===v}))return"continue";var m={crossOrigin:e.crossOrigin,loadType:vt.LOAD_TYPE.XHR,xhrType:vt.XHR_RESPONSE_TYPE.JSON,parentResource:e,metadata:e.metadata};o.add(p,v,m)},l=0,h=s;l<h.length;l++){var f=h[l];u(f)}var c={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},d=r.getResourcePath(e,o.baseUrl);o.add(a,d,c,function(p){if(p.error){t(p.error);return}var v=new uy(p.texture,e.data,e.url);v.parse(function(){e.spritesheet=v,e.textures=v.textures,t()})})},r.getResourcePath=function(e,t){return e.isDataUrl?e.data.meta.image:Sr.resolve(e.url.replace(t,""),e.data.meta.image)},r}();/*!
 * @pixi/sprite-tiling - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/sprite-tiling is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var ba=function(r,e){return ba=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},ba(r,e)};function Vh(r,e){ba(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var wi=new J;(function(r){Vh(e,r);function e(t,i,n){i===void 0&&(i=100),n===void 0&&(n=100);var o=r.call(this,t)||this;return o.tileTransform=new ol,o._width=i,o._height=n,o.uvMatrix=o.texture.uvMatrix||new qo(t),o.pluginName="tilingSprite",o.uvRespectAnchor=!1,o}return Object.defineProperty(e.prototype,"clampMargin",{get:function(){return this.uvMatrix.clampMargin},set:function(t){this.uvMatrix.clampMargin=t,this.uvMatrix.update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tileScale",{get:function(){return this.tileTransform.scale},set:function(t){this.tileTransform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tilePosition",{get:function(){return this.tileTransform.position},set:function(t){this.tileTransform.position.copyFrom(t)},enumerable:!1,configurable:!0}),e.prototype._onTextureUpdate=function(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215},e.prototype._render=function(t){var i=this._texture;!i||!i.valid||(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this))},e.prototype._calculateBounds=function(){var t=this._width*-this._anchor._x,i=this._height*-this._anchor._y,n=this._width*(1-this._anchor._x),o=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,i,n,o)},e.prototype.getLocalBounds=function(t){return this.children.length===0?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new Z),t=this._localBoundsRect),this._bounds.getRectangle(t)):r.prototype.getLocalBounds.call(this,t)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,wi);var i=this._width,n=this._height,o=-i*this.anchor._x;if(wi.x>=o&&wi.x<o+i){var a=-n*this.anchor._y;if(wi.y>=a&&wi.y<a+n)return!0}return!1},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this.tileTransform=null,this.uvMatrix=null},e.from=function(t,i){var n=t instanceof k?t:k.from(t,i);return new e(n,i.width,i.height)},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t},enumerable:!1,configurable:!0}),e})(Ti);var hy=`#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`,$h=`#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,fy=`#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,cy=`#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,dy=`#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,Rn=new yt,py=function(r){Vh(e,r);function e(t){var i=r.call(this,t)||this;return t.runners.contextChange.add(i),i.quad=new Dl,i.state=fr.for2d(),i}return e.prototype.contextChange=function(){var t=this.renderer,i={globals:t.globalUniforms};this.simpleShader=Me.from($h,hy,i),this.shader=t.context.webGLVersion>1?Me.from(cy,dy,i):Me.from($h,fy,i)},e.prototype.render=function(t){var i=this.renderer,n=this.quad,o=n.vertices;o[0]=o[6]=t._width*-t.anchor.x,o[1]=o[3]=t._height*-t.anchor.y,o[2]=o[4]=t._width*(1-t.anchor.x),o[5]=o[7]=t._height*(1-t.anchor.y);var a=t.uvRespectAnchor?t.anchor.x:0,s=t.uvRespectAnchor?t.anchor.y:0;o=n.uvs,o[0]=o[6]=-a,o[1]=o[3]=-s,o[2]=o[4]=1-a,o[5]=o[7]=1-s,n.invalidate();var u=t._texture,l=u.baseTexture,h=t.tileTransform.localTransform,f=t.uvMatrix,c=l.isPowerOfTwo&&u.frame.width===l.width&&u.frame.height===l.height;c&&(l._glTextures[i.CONTEXT_UID]?c=l.wrapMode!==we.CLAMP:l.wrapMode===we.CLAMP&&(l.wrapMode=we.REPEAT));var d=c?this.simpleShader:this.shader,_=u.width,p=u.height,v=t._width,m=t._height;Rn.set(h.a*_/v,h.b*_/m,h.c*p/v,h.d*p/m,h.tx/v,h.ty/m),Rn.invert(),c?Rn.prepend(f.mapCoord):(d.uniforms.uMapCoord=f.mapCoord.toArray(!0),d.uniforms.uClampFrame=f.uClampFrame,d.uniforms.uClampOffset=f.uClampOffset),d.uniforms.uTransform=Rn.toArray(!0),d.uniforms.uColor=Zu(t.tint,t.worldAlpha,d.uniforms.uColor,l.alphaMode),d.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),d.uniforms.uSampler=u,i.shader.bind(d),i.geometry.bind(n),this.state.blendMode=Ku(t.blendMode,l.alphaMode),i.state.set(this.state),i.geometry.draw(this.renderer.gl.TRIANGLES,6,0)},e}(_n);/*!
 * @pixi/mesh - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mesh is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ta=function(r,e){return Ta=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Ta(r,e)};function Ca(r,e){Ta(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var _y=function(){function r(e,t){this.uvBuffer=e,this.uvMatrix=t,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}return r.prototype.update=function(e){if(!(!e&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)){this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;var t=this.uvBuffer.data;(!this.data||this.data.length!==t.length)&&(this.data=new Float32Array(t.length)),this.uvMatrix.multiplyUvs(t,this.data),this._updateID++}},r}(),wa=new J,Wh=new sn,Ei=function(r){Ca(e,r);function e(t,i,n,o){o===void 0&&(o=re.TRIANGLES);var a=r.call(this)||this;return a.geometry=t,a.shader=i,a.state=n||fr.for2d(),a.drawMode=o,a.start=0,a.size=0,a.uvs=null,a.indices=null,a.vertexData=new Float32Array(1),a.vertexDirty=-1,a._transformID=-1,a._roundPixels=M.ROUND_PIXELS,a.batchUvs=null,a}return Object.defineProperty(e.prototype,"geometry",{get:function(){return this._geometry},set:function(t){this._geometry!==t&&(this._geometry&&(this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose()),this._geometry=t,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uvBuffer",{get:function(){return this.geometry.buffers[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"verticesBuffer",{get:function(){return this.geometry.buffers[0]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"material",{get:function(){return this.shader},set:function(t){this.shader=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return"tint"in this.shader?this.shader.tint:null},set:function(t){this.shader.tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{get:function(){return"texture"in this.shader?this.shader.texture:null},set:function(t){this.shader.texture=t},enumerable:!1,configurable:!0}),e.prototype._render=function(t){var i=this.geometry.buffers[0].data,n=this.shader;n.batchable&&this.drawMode===re.TRIANGLES&&i.length<e.BATCHABLE_SIZE*2?this._renderToBatch(t):this._renderDefault(t)},e.prototype._renderDefault=function(t){var i=this.shader;i.alpha=this.worldAlpha,i.update&&i.update(),t.batch.flush(),i.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),t.shader.bind(i),t.state.set(this.state),t.geometry.bind(this.geometry,i),t.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)},e.prototype._renderToBatch=function(t){var i=this.geometry,n=this.shader;n.uvMatrix&&(n.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=i.indexBuffer.data,this._tintRGB=n._tintRGB,this._texture=n.texture;var o=this.material.pluginName;t.batch.setObjectRenderer(t.plugins[o]),t.plugins[o].render(this)},e.prototype.calculateVertices=function(){var t=this.geometry,i=t.buffers[0],n=i.data,o=i._updateID;if(!(o===this.vertexDirty&&this._transformID===this.transform._worldID)){this._transformID=this.transform._worldID,this.vertexData.length!==n.length&&(this.vertexData=new Float32Array(n.length));for(var a=this.transform.worldTransform,s=a.a,u=a.b,l=a.c,h=a.d,f=a.tx,c=a.ty,d=this.vertexData,_=0;_<d.length/2;_++){var p=n[_*2],v=n[_*2+1];d[_*2]=s*p+l*v+f,d[_*2+1]=u*p+h*v+c}if(this._roundPixels)for(var m=M.RESOLUTION,_=0;_<d.length;++_)d[_]=Math.round((d[_]*m|0)/m);this.vertexDirty=o}},e.prototype.calculateUvs=function(){var t=this.geometry.buffers[1],i=this.shader;i.uvMatrix.isSimple?this.uvs=t.data:(this.batchUvs||(this.batchUvs=new _y(t,i.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)},e.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)},e.prototype.containsPoint=function(t){if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,wa);for(var i=this.geometry.getBuffer("aVertexPosition").data,n=Wh.points,o=this.geometry.getIndex().data,a=o.length,s=this.drawMode===4?3:1,u=0;u+2<a;u+=s){var l=o[u]*2,h=o[u+1]*2,f=o[u+2]*2;if(n[0]=i[l],n[1]=i[l+1],n[2]=i[h],n[3]=i[h+1],n[4]=i[f],n[5]=i[f+1],Wh.contains(wa.x,wa.y))return!0}return!1},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null},e.BATCHABLE_SIZE=100,e}(ve),vy=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,my=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`,Pi=function(r){Ca(e,r);function e(t,i){var n=this,o={uSampler:t,alpha:1,uTextureMatrix:yt.IDENTITY,uColor:new Float32Array([1,1,1,1])};return i=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},i),i.uniforms&&Object.assign(o,i.uniforms),n=r.call(this,i.program||vi.from(my,vy),o)||this,n._colorDirty=!1,n.uvMatrix=new qo(t),n.batchable=i.program===void 0,n.pluginName=i.pluginName,n.tint=i.tint,n.alpha=i.alpha,n}return Object.defineProperty(e.prototype,"texture",{get:function(){return this.uniforms.uSampler},set:function(t){this.uniforms.uSampler!==t&&(this.uniforms.uSampler=t,this.uvMatrix.texture=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){t!==this._alpha&&(this._alpha=t,this._colorDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){t!==this._tint&&(this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16),this._colorDirty=!0)},enumerable:!1,configurable:!0}),e.prototype.update=function(){if(this._colorDirty){this._colorDirty=!1;var t=this.texture.baseTexture;Zu(this._tint,this._alpha,this.uniforms.uColor,t.alphaMode)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)},e}(Me),Sn=function(r){Ca(e,r);function e(t,i,n){var o=r.call(this)||this,a=new wt(t),s=new wt(i,!0),u=new wt(n,!0,!0);return o.addAttribute("aVertexPosition",a,2,!1,X.FLOAT).addAttribute("aTextureCoord",s,2,!1,X.FLOAT).addIndex(u),o._updateId=-1,o}return Object.defineProperty(e.prototype,"vertexDirtyId",{get:function(){return this.buffers[0]._updateID},enumerable:!1,configurable:!0}),e}(di);/*!
 * @pixi/text-bitmap - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/text-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ea=function(r,e){return Ea=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Ea(r,e)};function gy(r,e){Ea(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var On=function(){function r(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]}return r}(),yy=function(){function r(){}return r.test=function(e){return typeof e=="string"&&e.indexOf("info face=")===0},r.parse=function(e){var t=e.match(/^[a-z]+\s+.+$/gm),i={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(var n in t){var o=t[n].match(/^[a-z]+/gm)[0],a=t[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),s={};for(var u in a){var l=a[u].split("="),h=l[0],f=l[1].replace(/"/gm,""),c=parseFloat(f),d=isNaN(c)?f:c;s[h]=d}i[o].push(s)}var _=new On;return i.info.forEach(function(p){return _.info.push({face:p.face,size:parseInt(p.size,10)})}),i.common.forEach(function(p){return _.common.push({lineHeight:parseInt(p.lineHeight,10)})}),i.page.forEach(function(p){return _.page.push({id:parseInt(p.id,10),file:p.file})}),i.char.forEach(function(p){return _.char.push({id:parseInt(p.id,10),page:parseInt(p.page,10),x:parseInt(p.x,10),y:parseInt(p.y,10),width:parseInt(p.width,10),height:parseInt(p.height,10),xoffset:parseInt(p.xoffset,10),yoffset:parseInt(p.yoffset,10),xadvance:parseInt(p.xadvance,10)})}),i.kerning.forEach(function(p){return _.kerning.push({first:parseInt(p.first,10),second:parseInt(p.second,10),amount:parseInt(p.amount,10)})}),i.distanceField.forEach(function(p){return _.distanceField.push({distanceRange:parseInt(p.distanceRange,10),fieldType:p.fieldType})}),_},r}(),Pa=function(){function r(){}return r.test=function(e){return e instanceof XMLDocument&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},r.parse=function(e){for(var t=new On,i=e.getElementsByTagName("info"),n=e.getElementsByTagName("common"),o=e.getElementsByTagName("page"),a=e.getElementsByTagName("char"),s=e.getElementsByTagName("kerning"),u=e.getElementsByTagName("distanceField"),l=0;l<i.length;l++)t.info.push({face:i[l].getAttribute("face"),size:parseInt(i[l].getAttribute("size"),10)});for(var l=0;l<n.length;l++)t.common.push({lineHeight:parseInt(n[l].getAttribute("lineHeight"),10)});for(var l=0;l<o.length;l++)t.page.push({id:parseInt(o[l].getAttribute("id"),10)||0,file:o[l].getAttribute("file")});for(var l=0;l<a.length;l++){var h=a[l];t.char.push({id:parseInt(h.getAttribute("id"),10),page:parseInt(h.getAttribute("page"),10)||0,x:parseInt(h.getAttribute("x"),10),y:parseInt(h.getAttribute("y"),10),width:parseInt(h.getAttribute("width"),10),height:parseInt(h.getAttribute("height"),10),xoffset:parseInt(h.getAttribute("xoffset"),10),yoffset:parseInt(h.getAttribute("yoffset"),10),xadvance:parseInt(h.getAttribute("xadvance"),10)})}for(var l=0;l<s.length;l++)t.kerning.push({first:parseInt(s[l].getAttribute("first"),10),second:parseInt(s[l].getAttribute("second"),10),amount:parseInt(s[l].getAttribute("amount"),10)});for(var l=0;l<u.length;l++)t.distanceField.push({fieldType:u[l].getAttribute("fieldType"),distanceRange:parseInt(u[l].getAttribute("distanceRange"),10)});return t},r}(),xy=function(){function r(){}return r.test=function(e){if(typeof e=="string"&&e.indexOf("<font>")>-1){var t=new self.DOMParser().parseFromString(e,"text/xml");return Pa.test(t)}return!1},r.parse=function(e){var t=new self.DOMParser().parseFromString(e,"text/xml");return Pa.parse(t)},r}(),Ia=[yy,Pa,xy];function Yh(r){for(var e=0;e<Ia.length;e++)if(Ia[e].test(r))return Ia[e];return null}function by(r,e,t,i,n,o){var a=t.fill;if(Array.isArray(a)){if(a.length===1)return a[0]}else return a;var s,u=t.dropShadow?t.dropShadowDistance:0,l=t.padding||0,h=r.width/i-u-l*2,f=r.height/i-u-l*2,c=a.slice(),d=t.fillGradientStops.slice();if(!d.length)for(var _=c.length+1,p=1;p<_;++p)d.push(p/_);if(c.unshift(a[0]),d.unshift(0),c.push(a[a.length-1]),d.push(1),t.fillGradientType===Ci.LINEAR_VERTICAL){s=e.createLinearGradient(h/2,l,h/2,f+l);for(var v=0,m=o.fontProperties.fontSize+t.strokeThickness,x=m/f,p=0;p<n.length;p++)for(var b=o.lineHeight*p,C=0;C<c.length;C++){var y=0;typeof d[C]=="number"?y=d[C]:y=C/c.length;var g=b/f+y*x,E=Math.max(v,g);E=Math.min(E,1),s.addColorStop(E,c[C]),v=E}}else{s=e.createLinearGradient(l,f/2,h+l,f/2);for(var P=c.length+1,T=1,p=0;p<c.length;p++){var I=void 0;typeof d[p]=="number"?I=d[p]:I=T/P,s.addColorStop(I,c[p]),T++}}return s}function Ty(r,e,t,i,n,o,a){var s=t.text,u=t.fontProperties;e.translate(i,n),e.scale(o,o);var l=a.strokeThickness/2,h=-(a.strokeThickness/2);if(e.font=a.toFontString(),e.lineWidth=a.strokeThickness,e.textBaseline=a.textBaseline,e.lineJoin=a.lineJoin,e.miterLimit=a.miterLimit,e.fillStyle=by(r,e,a,o,[s],t),e.strokeStyle=a.stroke,a.dropShadow){var f=a.dropShadowColor,c=Ot(typeof f=="number"?f:Yu(f)),d=a.dropShadowBlur*o,_=a.dropShadowDistance*o;e.shadowColor="rgba("+c[0]*255+","+c[1]*255+","+c[2]*255+","+a.dropShadowAlpha+")",e.shadowBlur=d,e.shadowOffsetX=Math.cos(a.dropShadowAngle)*_,e.shadowOffsetY=Math.sin(a.dropShadowAngle)*_}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0;a.stroke&&a.strokeThickness&&e.strokeText(s,l,h+t.lineHeight-u.descent),a.fill&&e.fillText(s,l,h+t.lineHeight-u.descent),e.setTransform(1,0,0,1,0,0),e.fillStyle="rgba(0, 0, 0, 0)"}function qh(r){return Array.from?Array.from(r):r.split("")}function Cy(r){typeof r=="string"&&(r=[r]);for(var e=[],t=0,i=r.length;t<i;t++){var n=r[t];if(Array.isArray(n)){if(n.length!==2)throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got "+n.length+".");var o=n[0].charCodeAt(0),a=n[1].charCodeAt(0);if(a<o)throw new Error("[BitmapFont]: Invalid character range.");for(var s=o,u=a;s<=u;s++)e.push(String.fromCharCode(s))}else e.push.apply(e,qh(n))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}function Nn(r){return r.codePointAt?r.codePointAt(0):r.charCodeAt(0)}var kr=function(){function r(e,t,i){var n,o,a=e.info[0],s=e.common[0],u=e.page[0],l=e.distanceField[0],h=on(u.file),f={};this._ownsTextures=i,this.font=a.face,this.size=a.size,this.lineHeight=s.lineHeight/h,this.chars={},this.pageTextures=f;for(var c=0;c<e.page.length;c++){var d=e.page[c],_=d.id,p=d.file;f[_]=t instanceof Array?t[c]:t[p],(l==null?void 0:l.fieldType)&&l.fieldType!=="none"&&(f[_].baseTexture.alphaMode=de.NO_PREMULTIPLIED_ALPHA)}for(var c=0;c<e.char.length;c++){var v=e.char[c],_=v.id,m=v.page,x=e.char[c],b=x.x,C=x.y,y=x.width,g=x.height,E=x.xoffset,P=x.yoffset,T=x.xadvance;b/=h,C/=h,y/=h,g/=h,E/=h,P/=h,T/=h;var I=new Z(b+f[m].frame.x/h,C+f[m].frame.y/h,y,g);this.chars[_]={xOffset:E,yOffset:P,xAdvance:T,kerning:{},texture:new k(f[m].baseTexture,I),page:m}}for(var c=0;c<e.kerning.length;c++){var N=e.kerning[c],F=N.first,L=N.second,H=N.amount;F/=h,L/=h,H/=h,this.chars[L]&&(this.chars[L].kerning[F]=H)}this.distanceFieldRange=l==null?void 0:l.distanceRange,this.distanceFieldType=(o=(n=l==null?void 0:l.fieldType)===null||n===void 0?void 0:n.toLowerCase())!==null&&o!==void 0?o:"none"}return r.prototype.destroy=function(){for(var e in this.chars)this.chars[e].texture.destroy(),this.chars[e].texture=null;for(var e in this.pageTextures)this._ownsTextures&&this.pageTextures[e].destroy(!0),this.pageTextures[e]=null;this.chars=null,this.pageTextures=null},r.install=function(e,t,i){var n;if(e instanceof On)n=e;else{var o=Yh(e);if(!o)throw new Error("Unrecognized data format for font.");n=o.parse(e)}t instanceof k&&(t=[t]);var a=new r(n,t,i);return r.available[a.font]=a,a},r.uninstall=function(e){var t=r.available[e];if(!t)throw new Error("No font found named '"+e+"'");t.destroy(),delete r.available[e]},r.from=function(e,t,i){if(!e)throw new Error("[BitmapFont] Property `name` is required.");var n=Object.assign({},r.defaultOptions,i),o=n.chars,a=n.padding,s=n.resolution,u=n.textureWidth,l=n.textureHeight,h=Cy(o),f=t instanceof Dr?t:new Dr(t),c=u,d=new On;d.info[0]={face:f.fontFamily,size:f.fontSize},d.common[0]={lineHeight:f.fontSize};for(var _=0,p=0,v,m,x,b=0,C=[],y=0;y<h.length;y++){v||(v=document.createElement("canvas"),v.width=u,v.height=l,m=v.getContext("2d"),x=new Q(v,{resolution:s}),C.push(new k(x)),d.page.push({id:C.length-1,file:""}));var g=Yt.measureText(h[y],f,!1,v),E=g.width,P=Math.ceil(g.height),T=Math.ceil((f.fontStyle==="italic"?2:1)*E);if(p>=l-P*s){if(p===0)throw new Error("[BitmapFont] textureHeight "+l+"px is "+("too small for "+f.fontSize+"px fonts"));--y,v=null,m=null,x=null,p=0,_=0,b=0;continue}if(b=Math.max(P+g.fontProperties.descent,b),T*s+_>=c){--y,p+=b*s,p=Math.ceil(p),_=0,b=0;continue}Ty(v,m,g,_,p,s,f);var I=Nn(g.text);d.char.push({id:I,page:C.length-1,x:_/s,y:p/s,width:T,height:P,xoffset:0,yoffset:0,xadvance:Math.ceil(E-(f.dropShadow?f.dropShadowDistance:0)-(f.stroke?f.strokeThickness:0))}),_+=(T+2*a)*s,_=Math.ceil(_)}for(var y=0,N=h.length;y<N;y++)for(var F=h[y],L=0;L<N;L++){var H=h[L],O=m.measureText(F).width,S=m.measureText(H).width,G=m.measureText(F+H).width,ot=G-(O+S);ot&&d.kerning.push({first:Nn(F),second:Nn(H),amount:ot})}var lt=new r(d,C,!0);return r.available[e]!==void 0&&r.uninstall(e),r.available[e]=lt,lt},r.ALPHA=[["a","z"],["A","Z"]," "],r.NUMERIC=[["0","9"]],r.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],r.ASCII=[[" ","~"]],r.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:r.ALPHANUMERIC},r.available={},r}(),wy=`// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r
\r
}\r
`,Ey=`// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`,Py=[],Iy=[],Kh=[];(function(r){gy(e,r);function e(t,i){i===void 0&&(i={});var n=r.call(this)||this;n._tint=16777215;var o=Object.assign({},e.styleDefaults,i),a=o.align,s=o.tint,u=o.maxWidth,l=o.letterSpacing,h=o.fontName,f=o.fontSize;if(!kr.available[h])throw new Error('Missing BitmapFont "'+h+'"');return n._activePagesMeshData=[],n._textWidth=0,n._textHeight=0,n._align=a,n._tint=s,n._fontName=h,n._fontSize=f||kr.available[h].size,n._text=t,n._maxWidth=u,n._maxLineHeight=0,n._letterSpacing=l,n._anchor=new nr(function(){n.dirty=!0},n,0,0),n._roundPixels=M.ROUND_PIXELS,n.dirty=!0,n._textureCache={},n}return e.prototype.updateText=function(){for(var t,i=kr.available[this._fontName],n=this._fontSize/i.size,o=new J,a=[],s=[],u=[],l=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",h=qh(l),f=this._maxWidth*i.size/this._fontSize,c=i.distanceFieldType==="none"?Py:Iy,d=null,_=0,p=0,v=0,m=-1,x=0,b=0,C=0,y=0,g=0;g<h.length;g++){var E=h[g],P=Nn(E);if(/(?:\s)/.test(E)&&(m=g,x=_,y++),E==="\r"||E===`
`){s.push(_),u.push(-1),p=Math.max(p,_),++v,++b,o.x=0,o.y+=i.lineHeight,d=null,y=0;continue}var T=i.chars[P];if(!!T){d&&T.kerning[d]&&(o.x+=T.kerning[d]);var I=Kh.pop()||{texture:k.EMPTY,line:0,charCode:0,prevSpaces:0,position:new J};I.texture=T.texture,I.line=v,I.charCode=P,I.position.x=o.x+T.xOffset+this._letterSpacing/2,I.position.y=o.y+T.yOffset,I.prevSpaces=y,a.push(I),_=I.position.x+T.texture.orig.width,o.x+=T.xAdvance+this._letterSpacing,C=Math.max(C,T.yOffset+T.texture.height),d=P,m!==-1&&f>0&&o.x>f&&(++b,Or(a,1+m-b,1+g-m),g=m,m=-1,s.push(x),u.push(a.length>0?a[a.length-1].prevSpaces:0),p=Math.max(p,x),v++,o.x=0,o.y+=i.lineHeight,d=null,y=0)}}var N=h[h.length-1];N!=="\r"&&N!==`
`&&(/(?:\s)/.test(N)&&(_=x),s.push(_),p=Math.max(p,_),u.push(-1));for(var F=[],g=0;g<=v;g++){var L=0;this._align==="right"?L=p-s[g]:this._align==="center"?L=(p-s[g])/2:this._align==="justify"&&(L=u[g]<0?0:(p-s[g])/u[g]),F.push(L)}for(var H=a.length,O={},S=[],G=this._activePagesMeshData,g=0;g<G.length;g++)c.push(G[g]);for(var g=0;g<H;g++){var ot=a[g].texture,lt=ot.baseTexture.uid;if(!O[lt]){var R=c.pop();if(!R){var B=new Sn,j=void 0,z=void 0;i.distanceFieldType==="none"?(j=new Pi(k.EMPTY),z=D.NORMAL):(j=new Pi(k.EMPTY,{program:vi.from(Ey,wy),uniforms:{uFWidth:0}}),z=D.NORMAL_NPM);var Y=new Ei(B,j);Y.blendMode=z,R={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:Y,vertices:null,uvs:null,indices:null}}R.index=0,R.indexCount=0,R.vertexCount=0,R.uvsCount=0,R.total=0;var dt=this._textureCache;dt[lt]=dt[lt]||new k(ot.baseTexture),R.mesh.texture=dt[lt],R.mesh.tint=this._tint,S.push(R),O[lt]=R}O[lt].total++}for(var g=0;g<G.length;g++)S.indexOf(G[g])===-1&&this.removeChild(G[g].mesh);for(var g=0;g<S.length;g++)S[g].mesh.parent!==this&&this.addChild(S[g].mesh);this._activePagesMeshData=S;for(var g in O){var R=O[g],et=R.total;if(!(((t=R.indices)===null||t===void 0?void 0:t.length)>6*et)||R.vertices.length<Ei.BATCHABLE_SIZE*2)R.vertices=new Float32Array(4*2*et),R.uvs=new Float32Array(4*2*et),R.indices=new Uint16Array(6*et);else for(var bt=R.total,Et=R.vertices,pt=bt*4*2;pt<Et.length;pt++)Et[pt]=0;R.mesh.size=6*et}for(var g=0;g<H;g++){var E=a[g],mt=E.position.x+F[E.line]*(this._align==="justify"?E.prevSpaces:1);this._roundPixels&&(mt=Math.round(mt));var tt=mt*n,ut=E.position.y*n,ot=E.texture,W=O[ot.baseTexture.uid],Ut=ot.frame,Pt=ot._uvs,K=W.index++;W.indices[K*6+0]=0+K*4,W.indices[K*6+1]=1+K*4,W.indices[K*6+2]=2+K*4,W.indices[K*6+3]=0+K*4,W.indices[K*6+4]=2+K*4,W.indices[K*6+5]=3+K*4,W.vertices[K*8+0]=tt,W.vertices[K*8+1]=ut,W.vertices[K*8+2]=tt+Ut.width*n,W.vertices[K*8+3]=ut,W.vertices[K*8+4]=tt+Ut.width*n,W.vertices[K*8+5]=ut+Ut.height*n,W.vertices[K*8+6]=tt,W.vertices[K*8+7]=ut+Ut.height*n,W.uvs[K*8+0]=Pt.x0,W.uvs[K*8+1]=Pt.y0,W.uvs[K*8+2]=Pt.x1,W.uvs[K*8+3]=Pt.y1,W.uvs[K*8+4]=Pt.x2,W.uvs[K*8+5]=Pt.y2,W.uvs[K*8+6]=Pt.x3,W.uvs[K*8+7]=Pt.y3}this._textWidth=p*n,this._textHeight=(o.y+i.lineHeight)*n;for(var g in O){var R=O[g];if(this.anchor.x!==0||this.anchor.y!==0)for(var le=0,Pr=this._textWidth*this.anchor.x,Wi=this._textHeight*this.anchor.y,ru=0;ru<R.total;ru++)R.vertices[le++]-=Pr,R.vertices[le++]-=Wi,R.vertices[le++]-=Pr,R.vertices[le++]-=Wi,R.vertices[le++]-=Pr,R.vertices[le++]-=Wi,R.vertices[le++]-=Pr,R.vertices[le++]-=Wi;this._maxLineHeight=C*n;var iu=R.mesh.geometry.getBuffer("aVertexPosition"),nu=R.mesh.geometry.getBuffer("aTextureCoord"),ou=R.mesh.geometry.getIndex();iu.data=R.vertices,nu.data=R.uvs,ou.data=R.indices,iu.update(),nu.update(),ou.update()}for(var g=0;g<a.length;g++)Kh.push(a[g])},e.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},e.prototype._render=function(t){var i=kr.available[this._fontName],n=i.distanceFieldRange,o=i.distanceFieldType,a=i.size;if(o!=="none")for(var s=this.worldTransform,u=s.a,l=s.b,h=s.c,f=s.d,c=Math.sqrt(u*u+l*l),d=Math.sqrt(h*h+f*f),_=(Math.abs(c)+Math.abs(d))/2,p=this._fontSize/a,v=0,m=this._activePagesMeshData;v<m.length;v++){var x=m[v];x.mesh.shader.uniforms.uFWidth=_*n*p*t.resolution}r.prototype._render.call(this,t)},e.prototype.getLocalBounds=function(){return this.validate(),r.prototype.getLocalBounds.call(this)},e.prototype.validate=function(){this.dirty&&(this.updateText(),this.dirty=!1)},Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){if(this._tint!==t){this._tint=t;for(var i=0;i<this._activePagesMeshData.length;i++)this._activePagesMeshData[i].mesh.tint=t}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"align",{get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontName",{get:function(){return this._fontName},set:function(t){if(!kr.available[t])throw new Error('Missing BitmapFont "'+t+'"');this._fontName!==t&&(this._fontName=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontSize",{get:function(){return this._fontSize},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t==null?"":t),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxWidth",{get:function(){return this._maxWidth},set:function(t){this._maxWidth!==t&&(this._maxWidth=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLineHeight",{get:function(){return this.validate(),this._maxLineHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textWidth",{get:function(){return this.validate(),this._textWidth},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){t!==this._roundPixels&&(this._roundPixels=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textHeight",{get:function(){return this.validate(),this._textHeight},enumerable:!1,configurable:!0}),e.prototype.destroy=function(t){var i=this._textureCache;for(var n in i){var o=i[n];o.destroy(),delete i[n]}this._textureCache=null,r.prototype.destroy.call(this,t)},e.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0},e})(ve);var Ay=function(){function r(){}return r.add=function(){vt.setExtensionXhrType("fnt",vt.XHR_RESPONSE_TYPE.TEXT)},r.use=function(e,t){var i=Yh(e.data);if(!i){t();return}for(var n=r.getBaseUrl(this,e),o=i.parse(e.data),a={},s=function(p){a[p.metadata.pageFile]=p.texture,Object.keys(a).length===o.page.length&&(e.bitmapFont=kr.install(o,a,!0),t())},u=0;u<o.page.length;++u){var l=o.page[u].file,h=n+l,f=!1;for(var c in this.resources){var d=this.resources[c];if(d.url===h){d.metadata.pageFile=l,d.texture?s(d):d.onAfterMiddleware.add(s),f=!0;break}}if(!f){var _={crossOrigin:e.crossOrigin,loadType:vt.LOAD_TYPE.IMAGE,metadata:Object.assign({pageFile:l},e.metadata.imageMetadata),parentResource:e};this.add(h,_,s)}}},r.getBaseUrl=function(e,t){var i=t.isDataUrl?"":r.dirname(t.url);return t.isDataUrl&&(i==="."&&(i=""),e.baseUrl&&i&&e.baseUrl.charAt(e.baseUrl.length-1)==="/"&&(i+="/")),i=i.replace(e.baseUrl,""),i&&i.charAt(i.length-1)!=="/"&&(i+="/"),i},r.dirname=function(e){var t=e.replace(/\\/g,"/").replace(/\/$/,"").replace(/\/[^\/]*$/,"");return t===e?".":t===""?"/":t},r}();/*!
 * @pixi/filter-alpha - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-alpha is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Aa=function(r,e){return Aa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Aa(r,e)};function Ry(r,e){Aa(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Sy=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`,Oy=function(r){Ry(e,r);function e(t){t===void 0&&(t=1);var i=r.call(this,Ng,Sy,{uAlpha:1})||this;return i.alpha=t,i}return Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),e}(V);/*!
 * @pixi/filter-blur - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ra=function(r,e){return Ra=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Ra(r,e)};function Zh(r,e){Ra(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ny=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function Fy(r,e){var t=Math.ceil(r/2),i=Ny,n="",o;e?o="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":o="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var a=0;a<r;a++){var s=o.replace("%index%",a.toString());s=s.replace("%sampleIndex%",a-(t-1)+".0"),n+=s,n+=`
`}return i=i.replace("%blur%",n),i=i.replace("%size%",r.toString()),i}var Uy={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},Ly=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function My(r){for(var e=Uy[r],t=e.length,i=Ly,n="",o="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",a,s=0;s<r;s++){var u=o.replace("%index%",s.toString());a=s,s>=t&&(a=r-s-1),u=u.replace("%value%",e[a].toString()),n+=u,n+=`
`}return i=i.replace("%blur%",n),i=i.replace("%size%",r.toString()),i}/*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Jh;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(Jh||(Jh={}));var Qh;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(Qh||(Qh={}));var tf;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(tf||(tf={}));var ef;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(ef||(ef={}));var rf;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(rf||(rf={}));var nf;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(nf||(nf={}));var of;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(of||(of={}));var af;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(af||(af={}));var sf;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(sf||(sf={}));var uf;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(uf||(uf={}));var lf;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(lf||(lf={}));var hf;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(hf||(hf={}));var ff;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(ff||(ff={}));var Ii;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(Ii||(Ii={}));var cf;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(cf||(cf={}));var df;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(df||(df={}));var pf;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(pf||(pf={}));var _f;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(_f||(_f={}));var vf;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(vf||(vf={}));var Fn=function(r){Zh(e,r);function e(t,i,n,o,a){i===void 0&&(i=8),n===void 0&&(n=4),o===void 0&&(o=M.FILTER_RESOLUTION),a===void 0&&(a=5);var s=this,u=Fy(a,t),l=My(a);return s=r.call(this,u,l)||this,s.horizontal=t,s.resolution=o,s._quality=0,s.quality=n,s.blur=i,s}return e.prototype.apply=function(t,i,n,o){if(n?this.horizontal?this.uniforms.strength=1/n.width*(n.width/i.width):this.uniforms.strength=1/n.height*(n.height/i.height):this.horizontal?this.uniforms.strength=1/t.renderer.width*(t.renderer.width/i.width):this.uniforms.strength=1/t.renderer.height*(t.renderer.height/i.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)t.applyFilter(this,i,n,o);else{var a=t.getFilterTexture(),s=t.renderer,u=i,l=a;this.state.blend=!1,t.applyFilter(this,u,l,Ii.CLEAR);for(var h=1;h<this.passes-1;h++){t.bindAndClear(u,Ii.BLIT),this.uniforms.uSampler=l;var f=l;l=u,u=f,s.shader.bind(this),s.geometry.draw(5)}this.state.blend=!0,t.applyFilter(this,l,n,o),t.returnFilterTexture(a)}},Object.defineProperty(e.prototype,"blur",{get:function(){return this.strength},set:function(t){this.padding=1+Math.abs(t)*2,this.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t},enumerable:!1,configurable:!0}),e}(V);(function(r){Zh(e,r);function e(t,i,n,o){t===void 0&&(t=8),i===void 0&&(i=4),n===void 0&&(n=M.FILTER_RESOLUTION),o===void 0&&(o=5);var a=r.call(this)||this;return a.blurXFilter=new Fn(!0,t,i,n,o),a.blurYFilter=new Fn(!1,t,i,n,o),a.resolution=n,a.quality=i,a.blur=t,a.repeatEdgePixels=!1,a}return e.prototype.apply=function(t,i,n,o){var a=Math.abs(this.blurXFilter.strength),s=Math.abs(this.blurYFilter.strength);if(a&&s){var u=t.getFilterTexture();this.blurXFilter.apply(t,i,u,Ii.CLEAR),this.blurYFilter.apply(t,u,n,o),t.returnFilterTexture(u)}else s?this.blurYFilter.apply(t,i,n,o):this.blurXFilter.apply(t,i,n,o)},e.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(e.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(t){this.blurXFilter.quality=this.blurYFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(t){this.blurYFilter.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(t){this._repeatEdgePixels=t,this.updatePadding()},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-color-matrix - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-color-matrix is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Sa=function(r,e){return Sa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Sa(r,e)};function By(r,e){Sa(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Gy=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`,mf=function(r){By(e,r);function e(){var t=this,i={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};return t=r.call(this,ph,Gy,i)||this,t.alpha=1,t}return e.prototype._loadMatrix=function(t,i){i===void 0&&(i=!1);var n=t;i&&(this._multiply(n,this.uniforms.m,t),n=this._colorMatrix(n)),this.uniforms.m=n},e.prototype._multiply=function(t,i,n){return t[0]=i[0]*n[0]+i[1]*n[5]+i[2]*n[10]+i[3]*n[15],t[1]=i[0]*n[1]+i[1]*n[6]+i[2]*n[11]+i[3]*n[16],t[2]=i[0]*n[2]+i[1]*n[7]+i[2]*n[12]+i[3]*n[17],t[3]=i[0]*n[3]+i[1]*n[8]+i[2]*n[13]+i[3]*n[18],t[4]=i[0]*n[4]+i[1]*n[9]+i[2]*n[14]+i[3]*n[19]+i[4],t[5]=i[5]*n[0]+i[6]*n[5]+i[7]*n[10]+i[8]*n[15],t[6]=i[5]*n[1]+i[6]*n[6]+i[7]*n[11]+i[8]*n[16],t[7]=i[5]*n[2]+i[6]*n[7]+i[7]*n[12]+i[8]*n[17],t[8]=i[5]*n[3]+i[6]*n[8]+i[7]*n[13]+i[8]*n[18],t[9]=i[5]*n[4]+i[6]*n[9]+i[7]*n[14]+i[8]*n[19]+i[9],t[10]=i[10]*n[0]+i[11]*n[5]+i[12]*n[10]+i[13]*n[15],t[11]=i[10]*n[1]+i[11]*n[6]+i[12]*n[11]+i[13]*n[16],t[12]=i[10]*n[2]+i[11]*n[7]+i[12]*n[12]+i[13]*n[17],t[13]=i[10]*n[3]+i[11]*n[8]+i[12]*n[13]+i[13]*n[18],t[14]=i[10]*n[4]+i[11]*n[9]+i[12]*n[14]+i[13]*n[19]+i[14],t[15]=i[15]*n[0]+i[16]*n[5]+i[17]*n[10]+i[18]*n[15],t[16]=i[15]*n[1]+i[16]*n[6]+i[17]*n[11]+i[18]*n[16],t[17]=i[15]*n[2]+i[16]*n[7]+i[17]*n[12]+i[18]*n[17],t[18]=i[15]*n[3]+i[16]*n[8]+i[17]*n[13]+i[18]*n[18],t[19]=i[15]*n[4]+i[16]*n[9]+i[17]*n[14]+i[18]*n[19]+i[19],t},e.prototype._colorMatrix=function(t){var i=new Float32Array(t);return i[4]/=255,i[9]/=255,i[14]/=255,i[19]/=255,i},e.prototype.brightness=function(t,i){var n=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(n,i)},e.prototype.tint=function(t,i){var n=t>>16&255,o=t>>8&255,a=t&255,s=[n/255,0,0,0,0,0,o/255,0,0,0,0,0,a/255,0,0,0,0,0,1,0];this._loadMatrix(s,i)},e.prototype.greyscale=function(t,i){var n=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(n,i)},e.prototype.blackAndWhite=function(t){var i=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.hue=function(t,i){t=(t||0)/180*Math.PI;var n=Math.cos(t),o=Math.sin(t),a=Math.sqrt,s=1/3,u=a(s),l=n+(1-n)*s,h=s*(1-n)-u*o,f=s*(1-n)+u*o,c=s*(1-n)+u*o,d=n+s*(1-n),_=s*(1-n)-u*o,p=s*(1-n)-u*o,v=s*(1-n)+u*o,m=n+s*(1-n),x=[l,h,f,0,0,c,d,_,0,0,p,v,m,0,0,0,0,0,1,0];this._loadMatrix(x,i)},e.prototype.contrast=function(t,i){var n=(t||0)+1,o=-.5*(n-1),a=[n,0,0,0,o,0,n,0,0,o,0,0,n,0,o,0,0,0,1,0];this._loadMatrix(a,i)},e.prototype.saturate=function(t,i){t===void 0&&(t=0);var n=t*2/3+1,o=(n-1)*-.5,a=[n,o,o,0,0,o,n,o,0,0,o,o,n,0,0,0,0,0,1,0];this._loadMatrix(a,i)},e.prototype.desaturate=function(){this.saturate(-1)},e.prototype.negative=function(t){var i=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.sepia=function(t){var i=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.technicolor=function(t){var i=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.polaroid=function(t){var i=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.toBGR=function(t){var i=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.kodachrome=function(t){var i=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.browni=function(t){var i=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.vintage=function(t){var i=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.colorTone=function(t,i,n,o,a){t=t||.2,i=i||.15,n=n||16770432,o=o||3375104;var s=(n>>16&255)/255,u=(n>>8&255)/255,l=(n&255)/255,h=(o>>16&255)/255,f=(o>>8&255)/255,c=(o&255)/255,d=[.3,.59,.11,0,0,s,u,l,t,0,h,f,c,i,0,s-h,u-f,l-c,0,0];this._loadMatrix(d,a)},e.prototype.night=function(t,i){t=t||.1;var n=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(n,i)},e.prototype.predator=function(t,i){var n=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(n,i)},e.prototype.lsd=function(t){var i=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.reset=function(){var t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)},Object.defineProperty(e.prototype,"matrix",{get:function(){return this.uniforms.m},set:function(t){this.uniforms.m=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),e}(V);mf.prototype.grayscale=mf.prototype.greyscale;/*!
 * @pixi/filter-displacement - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-displacement is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Oa=function(r,e){return Oa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Oa(r,e)};function Dy(r,e){Oa(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ky=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,Xy=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;(function(r){Dy(e,r);function e(t,i){var n=this,o=new yt;return t.renderable=!1,n=r.call(this,Xy,ky,{mapSampler:t._texture,filterMatrix:o,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])})||this,n.maskSprite=t,n.maskMatrix=o,i==null&&(i=20),n.scale=new J(i,i),n}return e.prototype.apply=function(t,i,n,o){this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;var a=this.maskSprite.worldTransform,s=Math.sqrt(a.a*a.a+a.b*a.b),u=Math.sqrt(a.c*a.c+a.d*a.d);s!==0&&u!==0&&(this.uniforms.rotation[0]=a.a/s,this.uniforms.rotation[1]=a.b/s,this.uniforms.rotation[2]=a.c/u,this.uniforms.rotation[3]=a.d/u),t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"map",{get:function(){return this.uniforms.mapSampler},set:function(t){this.uniforms.mapSampler=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-fxaa - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-fxaa is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Na=function(r,e){return Na=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Na(r,e)};function Hy(r,e){Na(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var jy=`
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`,zy=`varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`;(function(r){Hy(e,r);function e(){return r.call(this,jy,zy)||this}return e})(V);/*!
 * @pixi/filter-noise - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/filter-noise is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Fa=function(r,e){return Fa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Fa(r,e)};function Vy(r,e){Fa(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var $y=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;(function(r){Vy(e,r);function e(t,i){t===void 0&&(t=.5),i===void 0&&(i=Math.random());var n=r.call(this,ph,$y,{uNoise:0,uSeed:0})||this;return n.noise=t,n.seed=i,n}return Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.uNoise},set:function(t){this.uniforms.uNoise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"seed",{get:function(){return this.uniforms.uSeed},set:function(t){this.uniforms.uSeed=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/mixin-cache-as-bitmap - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mixin-cache-as-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*!
 * @pixi/constants - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var gf;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(gf||(gf={}));var yf;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(yf||(yf={}));var xf;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(xf||(xf={}));var bf;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(bf||(bf={}));var Tf;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Tf||(Tf={}));var Cf;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(Cf||(Cf={}));var wf;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(wf||(wf={}));var Ef;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(Ef||(Ef={}));var Pf;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(Pf||(Pf={}));var If;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(If||(If={}));var Af;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Af||(Af={}));var Rf;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(Rf||(Rf={}));var Sf;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Sf||(Sf={}));var Of;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(Of||(Of={}));var Nf;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(Nf||(Nf={}));var Ff;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(Ff||(Ff={}));var Uf;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(Uf||(Uf={}));var Ua;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(Ua||(Ua={}));var Lf;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Lf||(Lf={}));var Mf=new yt;xt.prototype._cacheAsBitmap=!1;xt.prototype._cacheData=null;xt.prototype._cacheAsBitmapResolution=null;xt.prototype._cacheAsBitmapMultisample=Ua.NONE;var Wy=function(){function r(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}return r}();Object.defineProperties(xt.prototype,{cacheAsBitmapResolution:{get:function(){return this._cacheAsBitmapResolution},set:function(r){r!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=r,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmapMultisample:{get:function(){return this._cacheAsBitmapMultisample},set:function(r){r!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=r,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(r){if(this._cacheAsBitmap!==r){this._cacheAsBitmap=r;var e;r?(this._cacheData||(this._cacheData=new Wy),e=this._cacheData,e.originalRender=this.render,e.originalRenderCanvas=this.renderCanvas,e.originalUpdateTransform=this.updateTransform,e.originalCalculateBounds=this.calculateBounds,e.originalGetLocalBounds=this.getLocalBounds,e.originalDestroy=this.destroy,e.originalContainsPoint=this.containsPoint,e.originalMask=this._mask,e.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(e=this._cacheData,e.sprite&&this._destroyCachedDisplayObject(),this.render=e.originalRender,this.renderCanvas=e.originalRenderCanvas,this.calculateBounds=e.originalCalculateBounds,this.getLocalBounds=e.originalGetLocalBounds,this.destroy=e.originalDestroy,this.updateTransform=e.originalUpdateTransform,this.containsPoint=e.originalContainsPoint,this._mask=e.originalMask,this.filterArea=e.originalFilterArea)}}}});xt.prototype._renderCached=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(e),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(e))};xt.prototype._initCachedDisplayObject=function(e){var t;if(!(this._cacheData&&this._cacheData.sprite)){var i=this.alpha;this.alpha=1,e.batch.flush();var n=this.getLocalBounds(null,!0).clone();if(this.filters&&this.filters.length){var o=this.filters[0].padding;n.pad(o)}n.ceil(M.RESOLUTION);var a=e.renderTexture.current,s=e.renderTexture.sourceFrame.clone(),u=e.renderTexture.destinationFrame.clone(),l=e.projection.transform,h=lr.create({width:n.width,height:n.height,resolution:this.cacheAsBitmapResolution||e.resolution,multisample:(t=this.cacheAsBitmapMultisample)!==null&&t!==void 0?t:e.multisample}),f="cacheAsBitmap_"+tr();this._cacheData.textureCacheId=f,Q.addToCache(h.baseTexture,f),k.addToCache(h,f);var c=this.transform.localTransform.copyTo(Mf).invert().translate(-n.x,-n.y);this.render=this._cacheData.originalRender,e.render(this,{renderTexture:h,clear:!0,transform:c,skipUpdateTransform:!1}),e.framebuffer.blit(),e.projection.transform=l,e.renderTexture.bind(a,s,u),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=i;var d=new Ti(h);d.transform.worldTransform=this.transform.worldTransform,d.anchor.x=-(n.x/n.width),d.anchor.y=-(n.y/n.height),d.alpha=i,d._bounds=this._bounds,this._cacheData.sprite=d,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=d.containsPoint.bind(d)}};xt.prototype._renderCachedCanvas=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(e),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(e))};xt.prototype._initCachedDisplayObjectCanvas=function(e){if(!(this._cacheData&&this._cacheData.sprite)){var t=this.getLocalBounds(null,!0),i=this.alpha;this.alpha=1;var n=e.context,o=e._projTransform;t.ceil(M.RESOLUTION);var a=lr.create({width:t.width,height:t.height}),s="cacheAsBitmap_"+tr();this._cacheData.textureCacheId=s,Q.addToCache(a.baseTexture,s),k.addToCache(a,s);var u=Mf;this.transform.localTransform.copyTo(u),u.invert(),u.tx-=t.x,u.ty-=t.y,this.renderCanvas=this._cacheData.originalRenderCanvas,e.render(this,{renderTexture:a,clear:!0,transform:u,skipUpdateTransform:!1}),e.context=n,e._projTransform=o,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=i;var l=new Ti(a);l.transform.worldTransform=this.transform.worldTransform,l.anchor.x=-(t.x/t.width),l.anchor.y=-(t.y/t.height),l.alpha=i,l._bounds=this._bounds,this._cacheData.sprite=l,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=e._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=l.containsPoint.bind(l)}};xt.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID};xt.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)};xt.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,Q.removeFromCache(this._cacheData.textureCacheId),k.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null};xt.prototype._cacheAsBitmapDestroy=function(e){this.cacheAsBitmap=!1,this.destroy(e)};/*!
 * @pixi/mixin-get-child-by-name - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mixin-get-child-by-name is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */xt.prototype.name=null;ve.prototype.getChildByName=function(e,t){for(var i=0,n=this.children.length;i<n;i++)if(this.children[i].name===e)return this.children[i];if(t)for(var i=0,n=this.children.length;i<n;i++){var o=this.children[i];if(!!o.getChildByName){var a=this.children[i].getChildByName(e,!0);if(a)return a}}return null};/*!
 * @pixi/mixin-get-global-position - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mixin-get-global-position is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */xt.prototype.getGlobalPosition=function(e,t){return e===void 0&&(e=new J),t===void 0&&(t=!1),this.parent?this.parent.toGlobal(this.position,e,t):(e.x=this.position.x,e.y=this.position.y),e};/*!
 * @pixi/mesh-extras - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/mesh-extras is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var La=function(r,e){return La=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},La(r,e)};function Xr(r,e){La(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Yy=function(r){Xr(e,r);function e(t,i,n,o){t===void 0&&(t=100),i===void 0&&(i=100),n===void 0&&(n=10),o===void 0&&(o=10);var a=r.call(this)||this;return a.segWidth=n,a.segHeight=o,a.width=t,a.height=i,a.build(),a}return e.prototype.build=function(){for(var t=this.segWidth*this.segHeight,i=[],n=[],o=[],a=this.segWidth-1,s=this.segHeight-1,u=this.width/a,l=this.height/s,h=0;h<t;h++){var f=h%this.segWidth,c=h/this.segWidth|0;i.push(f*u,c*l),n.push(f/a,c/s)}for(var d=a*s,h=0;h<d;h++){var _=h%a,p=h/a|0,v=p*this.segWidth+_,m=p*this.segWidth+_+1,x=(p+1)*this.segWidth+_,b=(p+1)*this.segWidth+_+1;o.push(v,m,x,m,b,x)}this.buffers[0].data=new Float32Array(i),this.buffers[1].data=new Float32Array(n),this.indexBuffer.data=new Uint16Array(o),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()},e}(Sn),qy=function(r){Xr(e,r);function e(t,i,n){t===void 0&&(t=200),n===void 0&&(n=0);var o=r.call(this,new Float32Array(i.length*4),new Float32Array(i.length*4),new Uint16Array((i.length-1)*6))||this;return o.points=i,o._width=t,o.textureScale=n,o.build(),o}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),e.prototype.build=function(){var t=this.points;if(!!t){var i=this.getBuffer("aVertexPosition"),n=this.getBuffer("aTextureCoord"),o=this.getIndex();if(!(t.length<1)){i.data.length/4!==t.length&&(i.data=new Float32Array(t.length*4),n.data=new Float32Array(t.length*4),o.data=new Uint16Array((t.length-1)*6));var a=n.data,s=o.data;a[0]=0,a[1]=0,a[2]=0,a[3]=1;for(var u=0,l=t[0],h=this._width*this.textureScale,f=t.length,c=0;c<f;c++){var d=c*4;if(this.textureScale>0){var _=l.x-t[c].x,p=l.y-t[c].y,v=Math.sqrt(_*_+p*p);l=t[c],u+=v/h}else u=c/(f-1);a[d]=u,a[d+1]=0,a[d+2]=u,a[d+3]=1}for(var m=0,c=0;c<f-1;c++){var d=c*2;s[m++]=d,s[m++]=d+1,s[m++]=d+2,s[m++]=d+2,s[m++]=d+1,s[m++]=d+3}n.update(),o.update(),this.updateVertices()}}},e.prototype.updateVertices=function(){var t=this.points;if(!(t.length<1)){for(var i=t[0],n,o=0,a=0,s=this.buffers[0].data,u=t.length,l=0;l<u;l++){var h=t[l],f=l*4;l<t.length-1?n=t[l+1]:n=h,a=-(n.x-i.x),o=n.y-i.y;var c=Math.sqrt(o*o+a*a),d=this.textureScale>0?this.textureScale*this._width/2:this._width/2;o/=c,a/=c,o*=d,a*=d,s[f]=h.x+o,s[f+1]=h.y+a,s[f+2]=h.x-o,s[f+3]=h.y-a,i=h}this.buffers[0].update()}},e.prototype.update=function(){this.textureScale>0?this.build():this.updateVertices()},e}(Sn);(function(r){Xr(e,r);function e(t,i,n){n===void 0&&(n=0);var o=this,a=new qy(t.height,i,n),s=new Pi(t);return n>0&&(t.baseTexture.wrapMode=we.REPEAT),o=r.call(this,a,s)||this,o.autoUpdate=!0,o}return e.prototype._render=function(t){var i=this.geometry;(this.autoUpdate||i._width!==this.shader.texture.height)&&(i._width=this.shader.texture.height,i.update()),r.prototype._render.call(this,t)},e})(Ei);var Ky=function(r){Xr(e,r);function e(t,i,n){var o=this,a=new Yy(t.width,t.height,i,n),s=new Pi(k.WHITE);return o=r.call(this,a,s)||this,o.texture=t,o.autoResize=!0,o}return e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID;var t=this.geometry,i=this.shader.texture,n=i.width,o=i.height;this.autoResize&&(t.width!==n||t.height!==o)&&(t.width=this.shader.texture.width,t.height=this.shader.texture.height,t.build())},Object.defineProperty(e.prototype,"texture",{get:function(){return this.shader.texture},set:function(t){this.shader.texture!==t&&(this.shader.texture=t,this._textureID=-1,t.baseTexture.valid?this.textureUpdated():t.once("update",this.textureUpdated,this))},enumerable:!1,configurable:!0}),e.prototype._render=function(t){this._textureID!==this.shader.texture._updateID&&this.textureUpdated(),r.prototype._render.call(this,t)},e.prototype.destroy=function(t){this.shader.texture.off("update",this.textureUpdated,this),r.prototype.destroy.call(this,t)},e}(Ei);(function(r){Xr(e,r);function e(t,i,n,o,a){t===void 0&&(t=k.EMPTY);var s=this,u=new Sn(i,n,o);u.getBuffer("aVertexPosition").static=!1;var l=new Pi(t);return s=r.call(this,u,l,null,a)||this,s.autoUpdate=!0,s}return Object.defineProperty(e.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),e.prototype._render=function(t){this.autoUpdate&&this.geometry.getBuffer("aVertexPosition").update(),r.prototype._render.call(this,t)},e})(Ei);var Un=10;(function(r){Xr(e,r);function e(t,i,n,o,a){i===void 0&&(i=Un),n===void 0&&(n=Un),o===void 0&&(o=Un),a===void 0&&(a=Un);var s=r.call(this,k.WHITE,4,4)||this;return s._origWidth=t.orig.width,s._origHeight=t.orig.height,s._width=s._origWidth,s._height=s._origHeight,s._leftWidth=i,s._rightWidth=o,s._topHeight=n,s._bottomHeight=a,s.texture=t,s}return e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID,this._refresh()},Object.defineProperty(e.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),e.prototype.updateHorizontalVertices=function(){var t=this.vertices,i=this._getMinScale();t[9]=t[11]=t[13]=t[15]=this._topHeight*i,t[17]=t[19]=t[21]=t[23]=this._height-this._bottomHeight*i,t[25]=t[27]=t[29]=t[31]=this._height},e.prototype.updateVerticalVertices=function(){var t=this.vertices,i=this._getMinScale();t[2]=t[10]=t[18]=t[26]=this._leftWidth*i,t[4]=t[12]=t[20]=t[28]=this._width-this._rightWidth*i,t[6]=t[14]=t[22]=t[30]=this._width},e.prototype._getMinScale=function(){var t=this._leftWidth+this._rightWidth,i=this._width>t?1:this._width/t,n=this._topHeight+this._bottomHeight,o=this._height>n?1:this._height/n,a=Math.min(i,o);return a},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leftWidth",{get:function(){return this._leftWidth},set:function(t){this._leftWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rightWidth",{get:function(){return this._rightWidth},set:function(t){this._rightWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"topHeight",{get:function(){return this._topHeight},set:function(t){this._topHeight=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bottomHeight",{get:function(){return this._bottomHeight},set:function(t){this._bottomHeight=t,this._refresh()},enumerable:!1,configurable:!0}),e.prototype._refresh=function(){var t=this.texture,i=this.geometry.buffers[1].data;this._origWidth=t.orig.width,this._origHeight=t.orig.height;var n=1/this._origWidth,o=1/this._origHeight;i[0]=i[8]=i[16]=i[24]=0,i[1]=i[3]=i[5]=i[7]=0,i[6]=i[14]=i[22]=i[30]=1,i[25]=i[27]=i[29]=i[31]=1,i[2]=i[10]=i[18]=i[26]=n*this._leftWidth,i[4]=i[12]=i[20]=i[28]=1-n*this._rightWidth,i[9]=i[11]=i[13]=i[15]=o*this._topHeight,i[17]=i[19]=i[21]=i[23]=1-o*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),this.geometry.buffers[0].update(),this.geometry.buffers[1].update()},e})(Ky);/*!
 * @pixi/sprite-animated - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * @pixi/sprite-animated is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ma=function(r,e){return Ma=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Ma(r,e)};function Zy(r,e){Ma(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(r){Zy(e,r);function e(t,i){i===void 0&&(i=!0);var n=r.call(this,t[0]instanceof k?t[0]:t[0].texture)||this;return n._textures=null,n._durations=null,n._autoUpdate=i,n._isConnectedToTicker=!1,n.animationSpeed=1,n.loop=!0,n.updateAnchor=!1,n.onComplete=null,n.onFrameChange=null,n.onLoop=null,n._currentTime=0,n._playing=!1,n._previousFrame=null,n.textures=t,n}return e.prototype.stop=function(){!this._playing||(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(Nt.shared.remove(this.update,this),this._isConnectedToTicker=!1))},e.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(Nt.shared.add(this.update,this,Pe.HIGH),this._isConnectedToTicker=!0))},e.prototype.gotoAndStop=function(t){this.stop();var i=this.currentFrame;this._currentTime=t,i!==this.currentFrame&&this.updateTexture()},e.prototype.gotoAndPlay=function(t){var i=this.currentFrame;this._currentTime=t,i!==this.currentFrame&&this.updateTexture(),this.play()},e.prototype.update=function(t){if(!!this._playing){var i=this.animationSpeed*t,n=this.currentFrame;if(this._durations!==null){var o=this._currentTime%1*this._durations[this.currentFrame];for(o+=i/60*1e3;o<0;)this._currentTime--,o+=this._durations[this.currentFrame];var a=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);o>=this._durations[this.currentFrame];)o-=this._durations[this.currentFrame]*a,this._currentTime+=a;this._currentTime+=o/this._durations[this.currentFrame]}else this._currentTime+=i;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):n!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<n?this.onLoop():this.animationSpeed<0&&this.currentFrame>n&&this.onLoop()),this.updateTexture())}},e.prototype.updateTexture=function(){var t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this._texture=this._textures[t],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},e.prototype.destroy=function(t){this.stop(),r.prototype.destroy.call(this,t),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},e.fromFrames=function(t){for(var i=[],n=0;n<t.length;++n)i.push(k.from(t[n]));return new e(i)},e.fromImages=function(t){for(var i=[],n=0;n<t.length;++n)i.push(k.from(t[n]));return new e(i)},Object.defineProperty(e.prototype,"totalFrames",{get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textures",{get:function(){return this._textures},set:function(t){if(t[0]instanceof k)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var i=0;i<t.length;i++)this._textures.push(t[i].texture),this._durations.push(t[i].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentFrame",{get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(Nt.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(Nt.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),e})(Ti);/*!
 * pixi.js - v6.2.2
 * Compiled Wed, 26 Jan 2022 16:23:27 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */Be.registerPlugin("accessibility",xm);Be.registerPlugin("extract",Hg);Be.registerPlugin("interaction",Pm);Be.registerPlugin("particle",S0);Be.registerPlugin("prepare",sy);Be.registerPlugin("batch",Mg);Be.registerPlugin("tilingSprite",py);me.registerPlugin(Ay);me.registerPlugin(o0);me.registerPlugin(T0);me.registerPlugin(I0);me.registerPlugin(ly);ra.registerPlugin(bm);ra.registerPlugin(Zg);function Re(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Bf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Hr={duration:.5,overwrite:!1,delay:0},Ba,qt=1e8,it=1/qt,Ga=Math.PI*2,Jy=Ga/4,Qy=0,Gf=Math.sqrt,tx=Math.cos,ex=Math.sin,It=function(e){return typeof e=="string"},At=function(e){return typeof e=="function"},Se=function(e){return typeof e=="number"},Da=function(e){return typeof e=="undefined"},Oe=function(e){return typeof e=="object"},Dt=function(e){return e!==!1},Df=function(){return typeof window!="undefined"},Ln=function(e){return At(e)||It(e)},kf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Bt=Array.isArray,ka=/(?:-?\.?\d|\.)+/gi,Xf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,jr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Hf=/[+-]=-?[.\d]+/,jf=/[^,'"\[\]\s]+/gi,rx=/[\d.+\-=]+(?:e[-+]\d*)*/i,ct,ge,Ha,ja,Vt={},Mn={},zf,Vf=function(e){return(Mn=zr(e,Vt))&&xe},za=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Bn=function(e,t){return!t&&console.warn(e)},$f=function(e,t){return e&&(Vt[e]=t)&&Mn&&(Mn[e]=t)||Vt},Ai=function(){return 0},Va={},ke=[],$a={},Wf,$t={},Wa={},Yf=30,Gn=[],Ya="",qa=function(e){var t=e[0],i,n;if(Oe(t)||At(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Gn.length;n--&&!Gn[n].targetTest(t););i=Gn[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new bc(e[n],i)))||e.splice(n,1);return e},vr=function(e){return e._gsap||qa(Jt(e))[0]._gsap},qf=function(e,t,i){return(i=e[t])&&At(i)?e[t]():Da(i)&&e.getAttribute&&e.getAttribute(t)||i},kt=function(e,t){return(e=e.split(",")).forEach(t)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},ix=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Dn=function(){var e=ke.length,t=ke.slice(0),i,n;for($a={},ke.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Kf=function(e,t,i,n){ke.length&&Dn(),e.render(t,i,n),ke.length&&Dn()},Zf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jf).length<2?t:It(e)?e.trim():e},Jf=function(e){return e},Kt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},nx=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},zr=function(e,t){for(var i in t)e[i]=t[i];return e},Qf=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Oe(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},kn=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},Ri=function(e){var t=e.parent||ct,i=e.keyframes?nx(Bt(e.keyframes)):Kt;if(Dt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},ox=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},ax=function(e,t,i,n,o){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],s;if(o)for(s=t[o];a&&a[o]>s;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},Xn=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t._prev,a=t._next;o?o._next=a:e[i]===t&&(e[i]=a),a?a._prev=o:e[n]===t&&(e[n]=o),t._next=t._prev=t.parent=null},Ne=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},mr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},sx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ux=function r(e){return!e||e._ts&&r(e.parent)},tc=function(e){return e._repeat?Vr(e._tTime,e=e.duration()+e._rDelay)*e:0},Vr=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Hn=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},jn=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||it)||0))},ec=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Gt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),jn(e),i._dirty||mr(i,e)),e},rc=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=Hn(e.rawTime(),t),(!t._dur||Oi(0,t.totalDuration(),i)-t._tTime>it)&&t.render(i,!0)),mr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-it}},ye=function(e,t,i,n){return t.parent&&Ne(t),t._start=Gt((Se(i)?i:i||e!==ct?Zt(e,i,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ax(e,t,"_first","_last",e._sort?"_start":0),Ka(t)||(e._recent=t),n||rc(e,t),e},ic=function(e,t){return(Vt.ScrollTrigger||za("scrollTrigger",t))&&Vt.ScrollTrigger.create(t,e)},nc=function(e,t,i,n){if(Ox(e,t),!e._initted)return 1;if(!i&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Wf!==te.frame)return ke.push(e),e._lazy=[t,n],1},lx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ka=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hx=function(e,t,i,n){var o=e.ratio,a=t<0||!t&&(!e._start&&lx(e)&&!(!e._initted&&Ka(e))||(e._ts<0||e._dp._ts<0)&&!Ka(e))?0:1,s=e._rDelay,u=0,l,h,f;if(s&&e._repeat&&(u=Oi(0,e._tDur,t),h=Vr(u,s),e._yoyo&&h&1&&(a=1-a),h!==Vr(e._tTime,s)&&(o=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==o||n||e._zTime===it||!t&&e._zTime){if(!e._initted&&nc(e,t,n,i))return;for(f=e._zTime,e._zTime=t||(i?it:0),i||(i=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=u,l=e._pt;l;)l.r(a,l.d),l=l._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!i&&Qt(e,"onUpdate"),u&&e._repeat&&!i&&e.parent&&Qt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ne(e,1),i||(Qt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},fx=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},$r=function(e,t,i,n){var o=e._repeat,a=Gt(t)||0,s=e._tTime/e._tDur;return s&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=o?o<0?1e10:Gt(a*(o+1)+e._rDelay*o):a,s>0&&!n?ec(e,e._tTime=e._tDur*s):e.parent&&jn(e),i||mr(e.parent,e),e},oc=function(e){return e instanceof Ht?mr(e):$r(e,e._dur)},cx={_start:0,endTime:Ai,totalDuration:Ai},Zt=function r(e,t,i){var n=e.labels,o=e._recent||cx,a=e.duration()>=qt?o.endTime(!1):e._dur,s,u,l;return It(t)&&(isNaN(t)||t in n)?(u=t.charAt(0),l=t.substr(-1)==="%",s=t.indexOf("="),u==="<"||u===">"?(s>=0&&(t=t.replace(/=/,"")),(u==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(s<0?o:i).totalDuration()/100:1)):s<0?(t in n||(n[t]=a),n[t]):(u=parseFloat(t.charAt(s-1)+t.substr(s+1)),l&&i&&(u=u/100*(Bt(i)?i[0]:i).totalDuration()),s>1?r(e,t.substr(0,s-1),i)+u:a+u)):t==null?a:+t},Si=function(e,t,i){var n=Se(t[1]),o=(n?2:1)+(e<2?0:1),a=t[o],s,u;if(n&&(a.duration=t[1]),a.parent=i,e){for(s=a,u=i;u&&!("immediateRender"in s);)s=u.vars.defaults||{},u=Dt(u.vars.inherit)&&u.parent;a.immediateRender=Dt(s.immediateRender),e<2?a.runBackwards=1:a.startAt=t[o-1]}return new Rt(t[0],a,t[o+1])},Xe=function(e,t){return e||e===0?t(e):t},Oi=function(e,t,i){return i<e?e:i>t?t:i},Xt=function(e,t){return!It(e)||!(t=rx.exec(e))?"":e.substr(t.index+t[0].length)},dx=function(e,t,i){return Xe(i,function(n){return Oi(e,t,n)})},Za=[].slice,ac=function(e,t){return e&&Oe(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Oe(e[0]))&&!e.nodeType&&e!==ge},px=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var o;return It(n)&&!t||ac(n,1)?(o=i).push.apply(o,Jt(n)):i.push(n)})||i},Jt=function(e,t,i){return It(e)&&!i&&(Ha||!Yr())?Za.call((t||ja).querySelectorAll(e),0):Bt(e)?px(e,i):ac(e)?Za.call(e,0):e?[e]:[]},_x=function(e){return e=Jt(e)[0]||Bn("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Jt(t,i.querySelectorAll?i:i===e?Bn("Invalid scope")||ja.createElement("div"):e)}},sc=function(e){return e.sort(function(){return .5-Math.random()})},uc=function(e){if(At(e))return e;var t=Oe(e)?e:{each:e},i=gr(t.ease),n=t.from||0,o=parseFloat(t.base)||0,a={},s=n>0&&n<1,u=isNaN(n)||s,l=t.axis,h=n,f=n;return It(n)?h=f={center:.5,edges:.5,end:1}[n]||0:!s&&u&&(h=n[0],f=n[1]),function(c,d,_){var p=(_||t).length,v=a[p],m,x,b,C,y,g,E,P,T;if(!v){if(T=t.grid==="auto"?0:(t.grid||[1,qt])[1],!T){for(E=-qt;E<(E=_[T++].getBoundingClientRect().left)&&T<p;);T--}for(v=a[p]=[],m=u?Math.min(T,p)*h-.5:n%T,x=T===qt?0:u?p*f/T-.5:n/T|0,E=0,P=qt,g=0;g<p;g++)b=g%T-m,C=x-(g/T|0),v[g]=y=l?Math.abs(l==="y"?C:b):Gf(b*b+C*C),y>E&&(E=y),y<P&&(P=y);n==="random"&&sc(v),v.max=E-P,v.min=P,v.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(T>p?p-1:l?l==="y"?p/T:T:Math.max(T,p/T))||0)*(n==="edges"?-1:1),v.b=p<0?o-p:o,v.u=Xt(t.amount||t.each)||0,i=i&&p<0?gc(i):i}return p=(v[c]-v.min)/v.max||0,Gt(v.b+(i?i(p):p)*v.v)+v.u}},Ja=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Math.round(parseFloat(i)/e)*e*t;return(n-n%1)/t+(Se(i)?0:Xt(i))}},lc=function(e,t){var i=Bt(e),n,o;return!i&&Oe(e)&&(n=i=e.radius||qt,e.values?(e=Jt(e.values),(o=!Se(e[0]))&&(n*=n)):e=Ja(e.increment)),Xe(t,i?At(e)?function(a){return o=e(a),Math.abs(o-a)<=n?o:a}:function(a){for(var s=parseFloat(o?a.x:a),u=parseFloat(o?a.y:0),l=qt,h=0,f=e.length,c,d;f--;)o?(c=e[f].x-s,d=e[f].y-u,c=c*c+d*d):c=Math.abs(e[f]-s),c<l&&(l=c,h=f);return h=!n||l<=n?e[h]:a,o||h===a||Se(a)?h:h+Xt(a)}:Ja(e))},hc=function(e,t,i,n){return Xe(Bt(e)?!t:i===!0?!!(i=0):!n,function(){return Bt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},vx=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(o,a){return a(o)},n)}},mx=function(e,t){return function(i){return e(parseFloat(i))+(t||Xt(i))}},gx=function(e,t,i){return cc(e,t,0,1,i)},fc=function(e,t,i){return Xe(i,function(n){return e[~~t(n)]})},yx=function r(e,t,i){var n=t-e;return Bt(e)?fc(e,r(0,e.length),t):Xe(i,function(o){return(n+(o-e)%n)%n+e})},xx=function r(e,t,i){var n=t-e,o=n*2;return Bt(e)?fc(e,r(0,e.length-1),t):Xe(i,function(a){return a=(o+(a-e)%o)%o||0,e+(a>n?o-a:a)})},Ni=function(e){for(var t=0,i="",n,o,a,s;~(n=e.indexOf("random(",t));)a=e.indexOf(")",n),s=e.charAt(n+7)==="[",o=e.substr(n+7,a-n-7).match(s?jf:ka),i+=e.substr(t,n-t)+hc(s?o:+o[0],s?0:+o[1],+o[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},cc=function(e,t,i,n,o){var a=t-e,s=n-i;return Xe(o,function(u){return i+((u-e)/a*s||0)})},bx=function r(e,t,i,n){var o=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!o){var a=It(e),s={},u,l,h,f,c;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(Bt(e)&&!Bt(t)){for(h=[],f=e.length,c=f-2,l=1;l<f;l++)h.push(r(e[l-1],e[l]));f--,o=function(_){_*=f;var p=Math.min(c,~~_);return h[p](_-p)},i=t}else n||(e=zr(Bt(e)?[]:{},e));if(!h){for(u in t)rs.call(s,e,u,"get",t[u]);o=function(_){return os(_,s)||(a?e.p:e)}}}return Xe(i,o)},dc=function(e,t,i){var n=e.labels,o=qt,a,s,u;for(a in n)s=n[a]-t,s<0==!!i&&s&&o>(s=Math.abs(s))&&(u=a,o=s);return u},Qt=function(e,t,i){var n=e.vars,o=n[t],a,s;if(!!o)return a=n[t+"Params"],s=n.callbackScope||e,i&&ke.length&&Dn(),a?o.apply(s,a):o.call(s)},Fi=function(e){return Ne(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&Qt(e,"onInterrupt"),e},Wr,Tx=function(e){e=!e.name&&e.default||e;var t=e.name,i=At(e),n=t&&!i&&e.init?function(){this._props=[]}:e,o={init:Ai,render:os,add:rs,kill:Gx,modifier:Bx,rawVars:0},a={targetTest:0,get:0,getSetter:ns,aliases:{},register:0};if(Yr(),e!==n){if($t[t])return;Kt(n,Kt(kn(e,o),a)),zr(n.prototype,zr(o,kn(e,a))),$t[n.prop=t]=n,e.targetTest&&(Gn.push(n),Va[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}$f(t,n),e.register&&e.register(xe,n,jt)},nt=255,Ui={aqua:[0,nt,nt],lime:[0,nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nt],navy:[0,0,128],white:[nt,nt,nt],olive:[128,128,0],yellow:[nt,nt,0],orange:[nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nt,0,0],pink:[nt,192,203],cyan:[0,nt,nt],transparent:[nt,nt,nt,0]},Qa=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*nt+.5|0},pc=function(e,t,i){var n=e?Se(e)?[e>>16,e>>8&nt,e&nt]:0:Ui.black,o,a,s,u,l,h,f,c,d,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ui[e])n=Ui[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),a=e.charAt(2),s=e.charAt(3),e="#"+o+o+a+a+s+s+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&nt,n&nt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&nt,e&nt]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(ka),!t)u=+n[0]%360/360,l=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(l+1):h+l-h*l,o=h*2-a,n.length>3&&(n[3]*=1),n[0]=Qa(u+1/3,o,a),n[1]=Qa(u,o,a),n[2]=Qa(u-1/3,o,a);else if(~e.indexOf("="))return n=e.match(Xf),i&&n.length<4&&(n[3]=1),n}else n=e.match(ka)||Ui.transparent;n=n.map(Number)}return t&&!_&&(o=n[0]/nt,a=n[1]/nt,s=n[2]/nt,f=Math.max(o,a,s),c=Math.min(o,a,s),h=(f+c)/2,f===c?u=l=0:(d=f-c,l=h>.5?d/(2-f-c):d/(f+c),u=f===o?(a-s)/d+(a<s?6:0):f===a?(s-o)/d+2:(o-a)/d+4,u*=60),n[0]=~~(u+.5),n[1]=~~(l*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},_c=function(e){var t=[],i=[],n=-1;return e.split(He).forEach(function(o){var a=o.match(jr)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},vc=function(e,t,i){var n="",o=(e+n).match(He),a=t?"hsla(":"rgba(",s=0,u,l,h,f;if(!o)return e;if(o=o.map(function(c){return(c=pc(c,t,1))&&a+(t?c[0]+","+c[1]+"%,"+c[2]+"%,"+c[3]:c.join(","))+")"}),i&&(h=_c(e),u=i.c,u.join(n)!==h.c.join(n)))for(l=e.replace(He,"1").split(jr),f=l.length-1;s<f;s++)n+=l[s]+(~u.indexOf(s)?o.shift()||a+"0,0,0,0)":(h.length?h:o.length?o:i).shift());if(!l)for(l=e.split(He),f=l.length-1;s<f;s++)n+=l[s]+o[s];return n+l[f]},He=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ui)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Cx=/hsl[a]?\(/,mc=function(e){var t=e.join(" "),i;if(He.lastIndex=0,He.test(t))return i=Cx.test(t),e[1]=vc(e[1],i),e[0]=vc(e[0],i,_c(e[1])),!0},zn,te=function(){var r=Date.now,e=500,t=33,i=r(),n=i,o=1e3/240,a=o,s=[],u,l,h,f,c,d,_=function p(v){var m=r()-n,x=v===!0,b,C,y,g;if(m>e&&(i+=m-t),n+=m,y=n-i,b=y-a,(b>0||x)&&(g=++f.frame,c=y-f.time*1e3,f.time=y=y/1e3,a+=b+(b>=o?4:o-b),C=1),x||(u=l(p)),C)for(d=0;d<s.length;d++)s[d](y,c,g,v)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(v){return c/(1e3/(v||60))},wake:function(){zf&&(!Ha&&Df()&&(ge=Ha=window,ja=ge.document||{},Vt.gsap=xe,(ge.gsapVersions||(ge.gsapVersions=[])).push(xe.version),Vf(Mn||ge.GreenSockGlobals||!ge.gsap&&ge||{}),h=ge.requestAnimationFrame),u&&f.sleep(),l=h||function(v){return setTimeout(v,a-f.time*1e3+1|0)},zn=1,_(2))},sleep:function(){(h?ge.cancelAnimationFrame:clearTimeout)(u),zn=0,l=Ai},lagSmoothing:function(v,m){e=v||1/it,t=Math.min(m,e,0)},fps:function(v){o=1e3/(v||240),a=f.time*1e3+o},add:function(v){s.indexOf(v)<0&&s.push(v),Yr()},remove:function(v,m){~(m=s.indexOf(v))&&s.splice(m,1)&&d>=m&&d--},_listeners:s},f}(),Yr=function(){return!zn&&te.wake()},q={},wx=/^[\d.\-M][\d.\-,\s]/,Ex=/["']/g,Px=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],o=1,a=i.length,s,u,l;o<a;o++)u=i[o],s=o!==a-1?u.lastIndexOf(","):u.length,l=u.substr(0,s),t[n]=isNaN(l)?l.replace(Ex,"").trim():+l,n=u.substr(s+1).trim();return t},Ix=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},Ax=function(e){var t=(e+"").split("("),i=q[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Px(t[1])]:Ix(e).split(",").map(Zf)):q._CE&&wx.test(e)?q._CE("",e):i},gc=function(e){return function(t){return 1-e(1-t)}},yc=function r(e,t){for(var i=e._first,n;i;)i instanceof Ht?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},gr=function(e,t){return e&&(At(e)?e:q[e]||Ax(e))||t},yr=function(e,t,i,n){i===void 0&&(i=function(u){return 1-t(1-u)}),n===void 0&&(n=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var o={easeIn:t,easeOut:i,easeInOut:n},a;return kt(e,function(s){q[s]=Vt[s]=o,q[a=s.toLowerCase()]=i;for(var u in o)q[a+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=q[s+"."+u]=o[u]}),o},xc=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ts=function r(e,t,i){var n=t>=1?t:1,o=(i||(e?.3:.45))/(t<1?t:1),a=o/Ga*(Math.asin(1/n)||0),s=function(h){return h===1?1:n*Math.pow(2,-10*h)*ex((h-a)*o)+1},u=e==="out"?s:e==="in"?function(l){return 1-s(1-l)}:xc(s);return o=Ga/o,u.config=function(l,h){return r(e,l,h)},u},es=function r(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(o){return 1-i(1-o)}:xc(i);return n.config=function(o){return r(e,o)},n};kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;yr(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});q.Linear.easeNone=q.none=q.Linear.easeIn;yr("Elastic",ts("in"),ts("out"),ts());(function(r,e){var t=1/e,i=2*t,n=2.5*t,o=function(s){return s<t?r*s*s:s<i?r*Math.pow(s-1.5/e,2)+.75:s<n?r*(s-=2.25/e)*s+.9375:r*Math.pow(s-2.625/e,2)+.984375};yr("Bounce",function(a){return 1-o(1-a)},o)})(7.5625,2.75);yr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});yr("Circ",function(r){return-(Gf(1-r*r)-1)});yr("Sine",function(r){return r===1?1:-tx(r*Jy)+1});yr("Back",es("in"),es("out"),es());q.SteppedEase=q.steps=Vt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),o=t?1:0,a=1-it;return function(s){return((n*Oi(0,a,s)|0)+o)*i}}};Hr.ease=q["quad.out"];kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ya+=r+","+r+"Params,"});var bc=function(e,t){this.id=Qy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:qf,this.set=t?t.getSetter:ns},Li=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$r(this,+t.duration,1,1),this.data=t.data,zn||te.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,$r(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Yr(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(ec(this,i),!o._dp||o.parent||rc(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ye(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===it||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Kf(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+tc(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+tc(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,n){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*o,n):this._repeat?Vr(this._tTime,o)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-it?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?Hn(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-it?0:this._rts,sx(this.totalTime(Oi(-this._delay,this._tDur,n),!0)),jn(this),this},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Yr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==it&&(this._tTime-=it)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ye(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Dt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Hn(n.rawTime(i),this):this._tTime:this._tTime},e.globalTime=function(i){for(var n=this,o=arguments.length?i:n.rawTime();n;)o=n._start+o/(n._ts||1),n=n._dp;return o},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,oc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,oc(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Zt(this,i),Dt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Dt(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-it:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-it,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,o;return!!(!i||this._ts&&this._initted&&i.isActive()&&(o=i.rawTime(!0))>=n&&o<this.endTime(!0)-it)},e.eventCallback=function(i,n,o){var a=this.vars;return arguments.length>1?(n?(a[i]=n,o&&(a[i+"Params"]=o),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this;return new Promise(function(o){var a=At(i)?i:Jf,s=function(){var l=n.then;n.then=null,At(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=l),o(a),n.then=l};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?s():n._prom=s})},e.kill=function(){Fi(this)},r}();Kt(Li.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-it,_prom:0,_ps:!1,_rts:1});var Ht=function(r){Bf(e,r);function e(i,n){var o;return i===void 0&&(i={}),o=r.call(this,i)||this,o.labels={},o.smoothChildTiming=!!i.smoothChildTiming,o.autoRemoveChildren=!!i.autoRemoveChildren,o._sort=Dt(i.sortChildren),ct&&ye(i.parent||ct,Re(o),n),i.reversed&&o.reverse(),i.paused&&o.paused(!0),i.scrollTrigger&&ic(Re(o),i.scrollTrigger),o}var t=e.prototype;return t.to=function(n,o,a){return Si(0,arguments,this),this},t.from=function(n,o,a){return Si(1,arguments,this),this},t.fromTo=function(n,o,a,s){return Si(2,arguments,this),this},t.set=function(n,o,a){return o.duration=0,o.parent=this,Ri(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new Rt(n,o,Zt(this,a),1),this},t.call=function(n,o,a){return ye(this,Rt.delayedCall(0,n,o),a)},t.staggerTo=function(n,o,a,s,u,l,h){return a.duration=o,a.stagger=a.stagger||s,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new Rt(n,a,Zt(this,u)),this},t.staggerFrom=function(n,o,a,s,u,l,h){return a.runBackwards=1,Ri(a).immediateRender=Dt(a.immediateRender),this.staggerTo(n,o,a,s,u,l,h)},t.staggerFromTo=function(n,o,a,s,u,l,h,f){return s.startAt=a,Ri(s).immediateRender=Dt(s.immediateRender),this.staggerTo(n,o,s,u,l,h,f)},t.render=function(n,o,a){var s=this._time,u=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=n<=0?0:Gt(n),f=this._zTime<0!=n<0&&(this._initted||!l),c,d,_,p,v,m,x,b,C,y,g,E;if(this!==ct&&h>u&&n>=0&&(h=u),h!==this._tTime||a||f){if(s!==this._time&&l&&(h+=this._time-s,n+=this._time-s),c=h,C=this._start,b=this._ts,m=!b,f&&(l||(s=this._zTime),(n||!o)&&(this._zTime=n)),this._repeat){if(g=this._yoyo,v=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(v*100+n,o,a);if(c=Gt(h%v),h===u?(p=this._repeat,c=l):(p=~~(h/v),p&&p===h/v&&(c=l,p--),c>l&&(c=l)),y=Vr(this._tTime,v),!s&&this._tTime&&y!==p&&(y=p),g&&p&1&&(c=l-c,E=1),p!==y&&!this._lock){var P=g&&y&1,T=P===(g&&p&1);if(p<y&&(P=!P),s=P?0:l,this._lock=1,this.render(s||(E?0:Gt(p*v)),o,!l)._lock=0,this._tTime=h,!o&&this.parent&&Qt(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),s&&s!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,u=this._tDur,T&&(this._lock=2,s=P?l:-1e-4,this.render(s,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;yc(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=fx(this,Gt(s),Gt(c)),x&&(h-=c-(c=x._start))),this._tTime=h,this._time=c,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,s=0),!s&&c&&!o&&(Qt(this,"onStart"),this._tTime!==h))return this;if(c>=s&&n>=0)for(d=this._first;d;){if(_=d._next,(d._act||c>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(n,o,a);if(d.render(d._ts>0?(c-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(c-d._start)*d._ts,o,a),c!==this._time||!this._ts&&!m){x=0,_&&(h+=this._zTime=-it);break}}d=_}else{d=this._last;for(var I=n<0?n:c;d;){if(_=d._prev,(d._act||I<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(n,o,a);if(d.render(d._ts>0?(I-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(I-d._start)*d._ts,o,a),c!==this._time||!this._ts&&!m){x=0,_&&(h+=this._zTime=I?-it:it);break}}d=_}}if(x&&!o&&(this.pause(),x.render(c>=s?0:-it)._zTime=c>=s?1:-1,this._ts))return this._start=C,jn(this),this.render(n,o,a);this._onUpdate&&!o&&Qt(this,"onUpdate",!0),(h===u&&u>=this.totalDuration()||!h&&s)&&(C===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((n||!l)&&(h===u&&this._ts>0||!h&&this._ts<0)&&Ne(this,1),!o&&!(n<0&&!s)&&(h||s||!u)&&(Qt(this,h===u&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,o){var a=this;if(Se(o)||(o=Zt(this,o,n)),!(n instanceof Li)){if(Bt(n))return n.forEach(function(s){return a.add(s,o)}),this;if(It(n))return this.addLabel(n,o);if(At(n))n=Rt.delayedCall(0,n);else return this}return this!==n?ye(this,n,o):this},t.getChildren=function(n,o,a,s){n===void 0&&(n=!0),o===void 0&&(o=!0),a===void 0&&(a=!0),s===void 0&&(s=-qt);for(var u=[],l=this._first;l;)l._start>=s&&(l instanceof Rt?o&&u.push(l):(a&&u.push(l),n&&u.push.apply(u,l.getChildren(!0,o,a)))),l=l._next;return u},t.getById=function(n){for(var o=this.getChildren(1,1,1),a=o.length;a--;)if(o[a].vars.id===n)return o[a]},t.remove=function(n){return It(n)?this.removeLabel(n):At(n)?this.killTweensOf(n):(Xn(this,n),n===this._recent&&(this._recent=this._last),mr(this))},t.totalTime=function(n,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(te.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,o),this._forcing=0,this):this._tTime},t.addLabel=function(n,o){return this.labels[n]=Zt(this,o),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,o,a){var s=Rt.delayedCall(0,o||Ai,a);return s.data="isPause",this._hasPause=1,ye(this,s,Zt(this,n))},t.removePause=function(n){var o=this._first;for(n=Zt(this,n);o;)o._start===n&&o.data==="isPause"&&Ne(o),o=o._next},t.killTweensOf=function(n,o,a){for(var s=this.getTweensOf(n,a),u=s.length;u--;)je!==s[u]&&s[u].kill(n,o);return this},t.getTweensOf=function(n,o){for(var a=[],s=Jt(n),u=this._first,l=Se(o),h;u;)u instanceof Rt?ix(u._targets,s)&&(l?(!je||u._initted&&u._ts)&&u.globalTime(0)<=o&&u.globalTime(u.totalDuration())>o:!o||u.isActive())&&a.push(u):(h=u.getTweensOf(s,o)).length&&a.push.apply(a,h),u=u._next;return a},t.tweenTo=function(n,o){o=o||{};var a=this,s=Zt(a,n),u=o,l=u.startAt,h=u.onStart,f=u.onStartParams,c=u.immediateRender,d,_=Rt.to(a,Kt({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:s,overwrite:"auto",duration:o.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale())||it,onStart:function(){if(a.pause(),!d){var v=o.duration||Math.abs((s-(l&&"time"in l?l.time:a._time))/a.timeScale());_._dur!==v&&$r(_,v,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,f||[])}},o));return c?_.render(0):_},t.tweenFromTo=function(n,o,a){return this.tweenTo(o,Kt({startAt:{time:Zt(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),dc(this,Zt(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),dc(this,Zt(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+it)},t.shiftChildren=function(n,o,a){a===void 0&&(a=0);for(var s=this._first,u=this.labels,l;s;)s._start>=a&&(s._start+=n,s._end+=n),s=s._next;if(o)for(l in u)u[l]>=a&&(u[l]+=n);return mr(this)},t.invalidate=function(){var n=this._first;for(this._lock=0;n;)n.invalidate(),n=n._next;return r.prototype.invalidate.call(this)},t.clear=function(n){n===void 0&&(n=!0);for(var o=this._first,a;o;)a=o._next,this.remove(o),o=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),mr(this)},t.totalDuration=function(n){var o=0,a=this,s=a._last,u=qt,l,h,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(f=a.parent;s;)l=s._prev,s._dirty&&s.totalDuration(),h=s._start,h>u&&a._sort&&s._ts&&!a._lock?(a._lock=1,ye(a,s,h-s._delay,1)._lock=0):u=h,h<0&&s._ts&&(o-=h,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),u=0),s._end>o&&s._ts&&(o=s._end),s=l;$r(a,a===ct&&a._time>o?a._time:o,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(ct._ts&&(Kf(ct,Hn(n,ct)),Wf=te.frame),te.frame>=Yf){Yf+=zt.autoSleep||120;var o=ct._first;if((!o||!o._ts)&&zt.autoSleep&&te._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||te.sleep()}}},e}(Li);Kt(Ht.prototype,{_lock:0,_hasPause:0,_forcing:0});var Rx=function(e,t,i,n,o,a,s){var u=new jt(this._pt,e,t,0,1,Ic,null,o),l=0,h=0,f,c,d,_,p,v,m,x;for(u.b=i,u.e=n,i+="",n+="",(m=~n.indexOf("random("))&&(n=Ni(n)),a&&(x=[i,n],a(x,e,t),i=x[0],n=x[1]),c=i.match(Xa)||[];f=Xa.exec(n);)_=f[0],p=n.substring(l,f.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),_!==c[h++]&&(v=parseFloat(c[h-1])||0,u._pt={_next:u._pt,p:p||h===1?p:",",s:v,c:_.charAt(1)==="="?parseFloat(_.substr(2))*(_.charAt(0)==="-"?-1:1):parseFloat(_)-v,m:d&&d<4?Math.round:0},l=Xa.lastIndex);return u.c=l<n.length?n.substring(l,n.length):"",u.fp=s,(Hf.test(n)||m)&&(u.e=0),this._pt=u,u},rs=function(e,t,i,n,o,a,s,u,l){At(n)&&(n=n(o||0,e,a));var h=e[t],f=i!=="get"?i:At(h)?l?e[t.indexOf("set")||!At(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,c=At(h)?l?Ux:Ec:is,d;if(It(n)&&(~n.indexOf("random(")&&(n=Ni(n)),n.charAt(1)==="="&&(d=parseFloat(f)+parseFloat(n.substr(2))*(n.charAt(0)==="-"?-1:1)+(Xt(f)||0),(d||d===0)&&(n=d))),f!==n)return!isNaN(f*n)&&n!==""?(d=new jt(this._pt,e,t,+f||0,n-(f||0),typeof h=="boolean"?Mx:Pc,0,c),l&&(d.fp=l),s&&d.modifier(s,this,e),this._pt=d):(!h&&!(t in e)&&za(t,n),Rx.call(this,e,t,f,n,c,u||zt.stringFilter,l))},Sx=function(e,t,i,n,o){if(At(e)&&(e=Mi(e,o,t,i,n)),!Oe(e)||e.style&&e.nodeType||Bt(e)||kf(e))return It(e)?Mi(e,o,t,i,n):e;var a={},s;for(s in e)a[s]=Mi(e[s],o,t,i,n);return a},Tc=function(e,t,i,n,o,a){var s,u,l,h;if($t[e]&&(s=new $t[e]).init(o,s.rawVars?t[e]:Sx(t[e],n,o,a,i),i,n,a)!==!1&&(i._pt=u=new jt(i._pt,o,e,0,1,s.render,s,0,s.priority),i!==Wr))for(l=i._ptLookup[i._targets.indexOf(o)],h=s._props.length;h--;)l[s._props[h]]=u;return s},je,Ox=function r(e,t){var i=e.vars,n=i.ease,o=i.startAt,a=i.immediateRender,s=i.lazy,u=i.onUpdate,l=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,c=i.yoyoEase,d=i.keyframes,_=i.autoRevert,p=e._dur,v=e._startAt,m=e._targets,x=e.parent,b=x&&x.data==="nested"?x.parent._targets:m,C=e._overwrite==="auto"&&!Ba,y=e.timeline,g,E,P,T,I,N,F,L,H,O,S,G,ot;if(y&&(!d||!n)&&(n="none"),e._ease=gr(n,Hr.ease),e._yEase=c?gc(gr(c===!0?n:c,Hr.ease)):0,c&&e._yoyo&&!e._repeat&&(c=e._yEase,e._yEase=e._ease,e._ease=c),e._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(L=m[0]?vr(m[0]).harness:0,G=L&&i[L.prop],g=kn(i,Va),v&&Ne(v.render(-1,!0)),o)if(Ne(e._startAt=Rt.set(m,Kt({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:Dt(s),startAt:null,delay:0,onUpdate:u,onUpdateParams:l,callbackScope:h,stagger:0},o))),t<0&&!a&&!_&&e._startAt.render(-1,!0),a){if(t>0&&!_&&(e._startAt=0),p&&t<=0){t&&(e._zTime=t);return}}else _===!1&&(e._startAt=0);else if(f&&p){if(v)!_&&(e._startAt=0);else if(t&&(a=!1),P=Kt({overwrite:!1,data:"isFromStart",lazy:a&&Dt(s),immediateRender:a,stagger:0,parent:x},g),G&&(P[L.prop]=G),Ne(e._startAt=Rt.set(m,P)),t<0&&e._startAt.render(-1,!0),e._zTime=t,!a)r(e._startAt,it);else if(!t)return}for(e._pt=0,s=p&&Dt(s)||s&&!p,E=0;E<m.length;E++){if(I=m[E],F=I._gsap||qa(m)[E]._gsap,e._ptLookup[E]=O={},$a[F.id]&&ke.length&&Dn(),S=b===m?E:b.indexOf(I),L&&(H=new L).init(I,G||g,e,S,b)!==!1&&(e._pt=T=new jt(e._pt,I,H.name,0,1,H.render,H,0,H.priority),H._props.forEach(function(lt){O[lt]=T}),H.priority&&(N=1)),!L||G)for(P in g)$t[P]&&(H=Tc(P,g,e,S,I,b))?H.priority&&(N=1):O[P]=T=rs.call(e,I,P,"get",g[P],S,b,0,i.stringFilter);e._op&&e._op[E]&&e.kill(I,e._op[E]),C&&e._pt&&(je=e,ct.killTweensOf(I,O,e.globalTime(t)),ot=!e.parent,je=0),e._pt&&s&&($a[F.id]=1)}N&&Ac(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!ot,d&&t<=0&&y.render(qt,!0,!0)},Nx=function(e,t){var i=e[0]?vr(e[0]).harness:0,n=i&&i.aliases,o,a,s,u;if(!n)return t;o=zr({},t);for(a in n)if(a in o)for(u=n[a].split(","),s=u.length;s--;)o[u[s]]=o[a];return o},Fx=function(e,t,i,n){var o=t.ease||n||"power1.inOut",a,s;if(Bt(t))s=i[e]||(i[e]=[]),t.forEach(function(u,l){return s.push({t:l/(t.length-1)*100,v:u,e:o})});else for(a in t)s=i[a]||(i[a]=[]),a==="ease"||s.push({t:parseFloat(e),v:t[a],e:o})},Mi=function(e,t,i,n,o){return At(e)?e.call(t,i,n,o):It(e)&&~e.indexOf("random(")?Ni(e):e},Cc=Ya+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",wc={};kt(Cc+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return wc[r]=1});var Rt=function(r){Bf(e,r);function e(i,n,o,a){var s;typeof n=="number"&&(o.duration=n,n=o,o=null),s=r.call(this,a?n:Ri(n))||this;var u=s.vars,l=u.duration,h=u.delay,f=u.immediateRender,c=u.stagger,d=u.overwrite,_=u.keyframes,p=u.defaults,v=u.scrollTrigger,m=u.yoyoEase,x=n.parent||ct,b=(Bt(i)||kf(i)?Se(i[0]):"length"in n)?[i]:Jt(i),C,y,g,E,P,T,I,N;if(s._targets=b.length?qa(b):Bn("GSAP target "+i+" not found. https://greensock.com",!zt.nullTargetWarn)||[],s._ptLookup=[],s._overwrite=d,_||c||Ln(l)||Ln(h)){if(n=s.vars,C=s.timeline=new Ht({data:"nested",defaults:p||{}}),C.kill(),C.parent=C._dp=Re(s),C._start=0,c||Ln(l)||Ln(h)){if(E=b.length,I=c&&uc(c),Oe(c))for(P in c)~Cc.indexOf(P)&&(N||(N={}),N[P]=c[P]);for(y=0;y<E;y++)g=kn(n,wc),g.stagger=0,m&&(g.yoyoEase=m),N&&zr(g,N),T=b[y],g.duration=+Mi(l,Re(s),y,T,b),g.delay=(+Mi(h,Re(s),y,T,b)||0)-s._delay,!c&&E===1&&g.delay&&(s._delay=h=g.delay,s._start+=h,g.delay=0),C.to(T,g,I?I(y,T,b):0),C._ease=q.none;C.duration()?l=h=0:s.timeline=0}else if(_){Ri(Kt(C.vars.defaults,{ease:"none"})),C._ease=gr(_.ease||n.ease||"none");var F=0,L,H,O;if(Bt(_))_.forEach(function(S){return C.to(b,S,">")});else{g={};for(P in _)P==="ease"||P==="easeEach"||Fx(P,_[P],g,_.easeEach);for(P in g)for(L=g[P].sort(function(S,G){return S.t-G.t}),F=0,y=0;y<L.length;y++)H=L[y],O={ease:H.e,duration:(H.t-(y?L[y-1].t:0))/100*l},O[P]=H.v,C.to(b,O,F),F+=O.duration;C.duration()<l&&C.to({},{duration:l-C.duration()})}}l||s.duration(l=C.duration())}else s.timeline=0;return d===!0&&!Ba&&(je=Re(s),ct.killTweensOf(b),je=0),ye(x,Re(s),o),n.reversed&&s.reverse(),n.paused&&s.paused(!0),(f||!l&&!_&&s._start===Gt(x._time)&&Dt(f)&&ux(Re(s))&&x.data!=="nested")&&(s._tTime=-it,s.render(Math.max(0,-h))),v&&ic(Re(s),v),s}var t=e.prototype;return t.render=function(n,o,a){var s=this._time,u=this._tDur,l=this._dur,h=n>u-it&&n>=0?u:n<it?0:n,f,c,d,_,p,v,m,x,b;if(!l)hx(this,n,o,a);else if(h!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=n<0){if(f=h,x=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(_*100+n,o,a);if(f=Gt(h%_),h===u?(d=this._repeat,f=l):(d=~~(h/_),d&&d===h/_&&(f=l,d--),f>l&&(f=l)),v=this._yoyo&&d&1,v&&(b=this._yEase,f=l-f),p=Vr(this._tTime,_),f===s&&!a&&this._initted)return this;d!==p&&(x&&this._yEase&&yc(x,v),this.vars.repeatRefresh&&!v&&!this._lock&&(this._lock=a=1,this.render(Gt(_*d),!0).invalidate()._lock=0))}if(!this._initted){if(nc(this,n<0?n:f,a,o))return this._tTime=0,this;if(l!==this._dur)return this.render(n,o,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(b||this._ease)(f/l),this._from&&(this.ratio=m=1-m),f&&!s&&!o&&(Qt(this,"onStart"),this._tTime!==h))return this;for(c=this._pt;c;)c.r(m,c.d),c=c._next;x&&x.render(n<0?n:!f&&v?-it:x._dur*x._ease(f/this._dur),o,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!o&&(n<0&&this._startAt&&this._startAt.render(n,!0,a),Qt(this,"onUpdate")),this._repeat&&d!==p&&this.vars.onRepeat&&!o&&this.parent&&Qt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(n<0&&this._startAt&&!this._onUpdate&&this._startAt.render(n,!0,!0),(n||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ne(this,1),!o&&!(n<0&&!s)&&(h||s)&&(Qt(this,h===u?"onComplete":"onReverseComplete",!0),this._prom&&!(h<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),r.prototype.invalidate.call(this)},t.kill=function(n,o){if(o===void 0&&(o="all"),!n&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?Fi(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,o,je&&je.vars.overwrite!==!0)._first||Fi(this),this.parent&&a!==this.timeline.totalDuration()&&$r(this,this._dur*this.timeline._tDur/a,0,1),this}var s=this._targets,u=n?Jt(n):s,l=this._ptLookup,h=this._pt,f,c,d,_,p,v,m;if((!o||o==="all")&&ox(s,u))return o==="all"&&(this._pt=0),Fi(this);for(f=this._op=this._op||[],o!=="all"&&(It(o)&&(p={},kt(o,function(x){return p[x]=1}),o=p),o=Nx(s,o)),m=s.length;m--;)if(~u.indexOf(s[m])){c=l[m],o==="all"?(f[m]=o,_=c,d={}):(d=f[m]=f[m]||{},_=o);for(p in _)v=c&&c[p],v&&((!("kill"in v.d)||v.d.kill(p)===!0)&&Xn(this,v,"_pt"),delete c[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&h&&Fi(this),this},e.to=function(n,o){return new e(n,o,arguments[2])},e.from=function(n,o){return Si(1,arguments)},e.delayedCall=function(n,o,a,s){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:o,onReverseComplete:o,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:s})},e.fromTo=function(n,o,a){return Si(2,arguments)},e.set=function(n,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(n,o)},e.killTweensOf=function(n,o,a){return ct.killTweensOf(n,o,a)},e}(Li);Kt(Rt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});kt("staggerTo,staggerFrom,staggerFromTo",function(r){Rt[r]=function(){var e=new Ht,t=Za.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var is=function(e,t,i){return e[t]=i},Ec=function(e,t,i){return e[t](i)},Ux=function(e,t,i,n){return e[t](n.fp,i)},Lx=function(e,t,i){return e.setAttribute(t,i)},ns=function(e,t){return At(e[t])?Ec:Da(e[t])&&e.setAttribute?Lx:is},Pc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Mx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ic=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},os=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Bx=function(e,t,i,n){for(var o=this._pt,a;o;)a=o._next,o.p===n&&o.modifier(e,t,i),o=a},Gx=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Xn(this,t,"_pt"):t.dep||(i=1),t=n;return!i},Dx=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Ac=function(e){for(var t=e._pt,i,n,o,a;t;){for(i=t._next,n=o;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:o=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=o},jt=function(){function r(t,i,n,o,a,s,u,l,h){this.t=i,this.s=o,this.c=a,this.p=n,this.r=s||Pc,this.d=u||this,this.set=l||is,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,o){this.mSet=this.mSet||this.set,this.set=Dx,this.m=i,this.mt=o,this.tween=n},r}();kt(Ya+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Va[r]=1});Vt.TweenMax=Vt.TweenLite=Rt;Vt.TimelineLite=Vt.TimelineMax=Ht;ct=new Ht({sortChildren:!1,defaults:Hr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zt.stringFilter=mc;var Vn={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Tx(n)})},timeline:function(e){return new Ht(e)},getTweensOf:function(e,t){return ct.getTweensOf(e,t)},getProperty:function(e,t,i,n){It(e)&&(e=Jt(e)[0]);var o=vr(e||{}).get,a=i?Jf:Zf;return i==="native"&&(i=""),e&&(t?a(($t[t]&&$t[t].get||o)(e,t,i,n)):function(s,u,l){return a(($t[s]&&$t[s].get||o)(e,s,u,l))})},quickSetter:function(e,t,i){if(e=Jt(e),e.length>1){var n=e.map(function(h){return xe.quickSetter(h,t,i)}),o=n.length;return function(h){for(var f=o;f--;)n[f](h)}}e=e[0]||{};var a=$t[t],s=vr(e),u=s.harness&&(s.harness.aliases||{})[t]||t,l=a?function(h){var f=new a;Wr._pt=0,f.init(e,i?h+i:h,Wr,0,[e]),f.render(1,f),Wr._pt&&os(1,Wr)}:s.set(e,u);return a?l:function(h){return l(e,u,i?h+i:h,s,1)}},isTweening:function(e){return ct.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=gr(e.ease,Hr.ease)),Qf(Hr,e||{})},config:function(e){return Qf(zt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,o=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(s){return s&&!$t[s]&&!Vt[s]&&Bn(t+" effect requires "+s+" plugin.")}),Wa[t]=function(s,u,l){return i(Jt(s),Kt(u||{},o),l)},a&&(Ht.prototype[t]=function(s,u,l){return this.add(Wa[t](s,Oe(u)?u:(l=u)&&{},this),l)})},registerEase:function(e,t){q[e]=gr(t)},parseEase:function(e,t){return arguments.length?gr(e,t):q},getById:function(e){return ct.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Ht(e),n,o;for(i.smoothChildTiming=Dt(e.smoothChildTiming),ct.remove(i),i._dp=0,i._time=i._tTime=ct._time,n=ct._first;n;)o=n._next,(t||!(!n._dur&&n instanceof Rt&&n.vars.onComplete===n._targets[0]))&&ye(i,n,n._start-n._delay),n=o;return ye(ct,i,0),i},utils:{wrap:yx,wrapYoyo:xx,distribute:uc,random:hc,snap:lc,normalize:gx,getUnit:Xt,clamp:dx,splitColor:pc,toArray:Jt,selector:_x,mapRange:cc,pipe:vx,unitize:mx,interpolate:bx,shuffle:sc},install:Vf,effects:Wa,ticker:te,updateRoot:Ht.updateRoot,plugins:$t,globalTimeline:ct,core:{PropTween:jt,globals:$f,Tween:Rt,Timeline:Ht,Animation:Li,getCache:vr,_removeLinkedListItem:Xn,suppressOverwrites:function(e){return Ba=e}}};kt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Vn[r]=Rt[r]});te.add(Ht.updateRoot);Wr=Vn.to({},{duration:0});var kx=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Xx=function(e,t){var i=e._targets,n,o,a;for(n in t)for(o=i.length;o--;)a=e._ptLookup[o][n],a&&(a=a.d)&&(a._pt&&(a=kx(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[o],n))},as=function(e,t){return{name:e,rawVars:1,init:function(n,o,a){a._onInit=function(s){var u,l;if(It(o)&&(u={},kt(o,function(h){return u[h]=1}),o=u),t){u={};for(l in o)u[l]=t(o[l]);o=u}Xx(s,o)}}}},xe=Vn.registerPlugin({name:"attr",init:function(e,t,i,n,o){var a,s;for(a in t)s=this.add(e,"setAttribute",(e.getAttribute(a)||0)+"",t[a],n,o,0,0,a),s&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i])}},as("roundProps",Ja),as("modifiers"),as("snap",lc))||Vn;Rt.version=Ht.version=xe.version="3.9.1";zf=1;Df()&&Yr();q.Power0;q.Power1;q.Power2;q.Power3;q.Power4;q.Linear;q.Quad;q.Cubic;q.Quart;q.Quint;q.Strong;q.Elastic;q.Back;q.SteppedEase;q.Bounce;q.Sine;q.Expo;q.Circ;/*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rc,ze,qr,ss,xr,Sc,Hx=function(){return typeof window!="undefined"},Ve={},br=180/Math.PI,Kr=Math.PI/180,Zr=Math.atan2,Oc=1e8,Nc=/([A-Z])/g,jx=/(?:left|right|width|margin|padding|x)/i,zx=/[\s,\(]\S/,$e={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Vx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$x=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Wx=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Uc=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Lc=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Yx=function(e,t,i){return e.style[t]=i},qx=function(e,t,i){return e.style.setProperty(t,i)},Kx=function(e,t,i){return e._gsap[t]=i},Zx=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Jx=function(e,t,i,n,o){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(o,a)},Qx=function(e,t,i,n,o){var a=e._gsap;a[t]=i,a.renderTransform(o,a)},Ft="transform",We=Ft+"Origin",Mc,us=function(e,t){var i=ze.createElementNS?ze.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ze.createElement(e);return i.style?i:ze.createElement(e)},Fe=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Nc,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,Jr(t)||t,1)||""},Bc="O,Moz,ms,Ms,Webkit".split(","),Jr=function(e,t,i){var n=t||xr,o=n.style,a=5;if(e in o&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Bc[a]+e in o););return a<0?null:(a===3?"ms":a>=0?Bc[a]:"")+e},ls=function(){Hx()&&window.document&&(Rc=window,ze=Rc.document,qr=ze.documentElement,xr=us("div")||{style:{}},us("div"),Ft=Jr(Ft),We=Ft+"Origin",xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Mc=!!Jr("perspective"),ss=1)},hs=function r(e){var t=us("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,o=this.style.cssText,a;if(qr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),qr.removeChild(t),this.style.cssText=o,a},Gc=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Dc=function(e){var t;try{t=e.getBBox()}catch{t=hs.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===hs||(t=hs.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Gc(e,["x","cx","x1"])||0,y:+Gc(e,["y","cy","y1"])||0,width:0,height:0}:t},kc=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dc(e))},Bi=function(e,t){if(t){var i=e.style;t in Ve&&t!==We&&(t=Ft),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(Nc,"-$1").toLowerCase())):i.removeAttribute(t)}},Ye=function(e,t,i,n,o,a){var s=new jt(e._pt,t,i,0,1,a?Lc:Uc);return e._pt=s,s.b=n,s.e=o,e._props.push(i),s},Xc={deg:1,rad:1,turn:1},qe=function r(e,t,i,n){var o=parseFloat(i)||0,a=(i+"").trim().substr((o+"").length)||"px",s=xr.style,u=jx.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(u?"Width":"Height"),f=100,c=n==="px",d=n==="%",_,p,v,m;return n===a||!o||Xc[n]||Xc[a]?o:(a!=="px"&&!c&&(o=r(e,t,i,"px")),m=e.getCTM&&kc(e),(d||a==="%")&&(Ve[t]||~t.indexOf("adius"))?(_=m?e.getBBox()[u?"width":"height"]:e[h],Ct(d?o/_*f:o/100*_)):(s[u?"width":"height"]=f+(c?a:n),p=~t.indexOf("adius")||n==="em"&&e.appendChild&&!l?e:e.parentNode,m&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===ze||!p.appendChild)&&(p=ze.body),v=p._gsap,v&&d&&v.width&&u&&v.time===te.time?Ct(o/v.width*f):((d||a==="%")&&(s.position=Fe(e,"position")),p===e&&(s.position="static"),p.appendChild(xr),_=xr[h],p.removeChild(xr),s.position="absolute",u&&d&&(v=vr(p),v.time=te.time,v.width=p[h]),Ct(c?_*o/f:_&&o?f/_*o:0))))},Tr=function(e,t,i,n){var o;return ss||ls(),t in $e&&t!=="transform"&&(t=$e[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ve[t]&&t!=="transform"?(o=Di(e,n),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:Wn(Fe(e,We))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||n||~(o+"").indexOf("calc("))&&(o=$n[t]&&$n[t](e,t,i)||Fe(e,t)||qf(e,t)||(t==="opacity"?1:0))),i&&!~(o+"").trim().indexOf(" ")?qe(e,t,o,i)+i:o},tb=function(e,t,i,n){if(!i||i==="none"){var o=Jr(t,e,1),a=o&&Fe(e,o,1);a&&a!==i?(t=o,i=a):t==="borderColor"&&(i=Fe(e,"borderTopColor"))}var s=new jt(this._pt,e.style,t,0,1,Ic),u=0,l=0,h,f,c,d,_,p,v,m,x,b,C,y,g;if(s.b=i,s.e=n,i+="",n+="",n==="auto"&&(e.style[t]=n,n=Fe(e,t)||n,e.style[t]=i),h=[i,n],mc(h),i=h[0],n=h[1],c=i.match(jr)||[],g=n.match(jr)||[],g.length){for(;f=jr.exec(n);)v=f[0],x=n.substring(u,f.index),_?_=(_+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(_=1),v!==(p=c[l++]||"")&&(d=parseFloat(p)||0,C=p.substr((d+"").length),y=v.charAt(1)==="="?+(v.charAt(0)+"1"):0,y&&(v=v.substr(2)),m=parseFloat(v),b=v.substr((m+"").length),u=jr.lastIndex-b.length,b||(b=b||zt.units[t]||C,u===n.length&&(n+=b,s.e+=b)),C!==b&&(d=qe(e,t,p,b)||0),s._pt={_next:s._pt,p:x||l===1?x:",",s:d,c:y?y*m:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});s.c=u<n.length?n.substring(u,n.length):""}else s.r=t==="display"&&n==="none"?Lc:Uc;return Hf.test(n)&&(s.e=0),this._pt=s,s},Hc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},eb=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Hc[i]||i,t[1]=Hc[n]||n,t.join(" ")},rb=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,o=t.u,a=i._gsap,s,u,l;if(o==="all"||o===!0)n.cssText="",u=1;else for(o=o.split(","),l=o.length;--l>-1;)s=o[l],Ve[s]&&(u=1,s=s==="transformOrigin"?We:Ft),Bi(i,s);u&&(Bi(i,Ft),a&&(a.svg&&i.removeAttribute("transform"),Di(i,1),a.uncache=1))}},$n={clearProps:function(e,t,i,n,o){if(o.data!=="isFromStart"){var a=e._pt=new jt(e._pt,t,i,0,0,rb);return a.u=n,a.pr=-10,a.tween=o,e._props.push(i),1}}},Gi=[1,0,0,1,0,0],jc={},zc=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Vc=function(e){var t=Fe(e,Ft);return zc(t)?Gi:t.substr(7).match(Xf).map(Ct)},fs=function(e,t){var i=e._gsap||vr(e),n=e.style,o=Vc(e),a,s,u,l;return i.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,o=[u.a,u.b,u.c,u.d,u.e,u.f],o.join(",")==="1,0,0,1,0,0"?Gi:o):(o===Gi&&!e.offsetParent&&e!==qr&&!i.svg&&(u=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(l=1,s=e.nextSibling,qr.appendChild(e)),o=Vc(e),u?n.display=u:Bi(e,"display"),l&&(s?a.insertBefore(e,s):a?a.appendChild(e):qr.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},cs=function(e,t,i,n,o,a){var s=e._gsap,u=o||fs(e,!0),l=s.xOrigin||0,h=s.yOrigin||0,f=s.xOffset||0,c=s.yOffset||0,d=u[0],_=u[1],p=u[2],v=u[3],m=u[4],x=u[5],b=t.split(" "),C=parseFloat(b[0])||0,y=parseFloat(b[1])||0,g,E,P,T;i?u!==Gi&&(E=d*v-_*p)&&(P=C*(v/E)+y*(-p/E)+(p*x-v*m)/E,T=C*(-_/E)+y*(d/E)-(d*x-_*m)/E,C=P,y=T):(g=Dc(e),C=g.x+(~b[0].indexOf("%")?C/100*g.width:C),y=g.y+(~(b[1]||b[0]).indexOf("%")?y/100*g.height:y)),n||n!==!1&&s.smooth?(m=C-l,x=y-h,s.xOffset=f+(m*d+x*p)-m,s.yOffset=c+(m*_+x*v)-x):s.xOffset=s.yOffset=0,s.xOrigin=C,s.yOrigin=y,s.smooth=!!n,s.origin=t,s.originIsAbsolute=!!i,e.style[We]="0px 0px",a&&(Ye(a,s,"xOrigin",l,C),Ye(a,s,"yOrigin",h,y),Ye(a,s,"xOffset",f,s.xOffset),Ye(a,s,"yOffset",c,s.yOffset)),e.setAttribute("data-svg-origin",C+" "+y)},Di=function(e,t){var i=e._gsap||new bc(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,o=i.scaleX<0,a="px",s="deg",u=Fe(e,We)||"0",l,h,f,c,d,_,p,v,m,x,b,C,y,g,E,P,T,I,N,F,L,H,O,S,G,ot,lt,R,B,j,z,Y;return l=h=f=_=p=v=m=x=b=0,c=d=1,i.svg=!!(e.getCTM&&kc(e)),g=fs(e,i.svg),i.svg&&(S=(!i.uncache||u==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),cs(e,S||u,!!S||i.originIsAbsolute,i.smooth!==!1,g)),C=i.xOrigin||0,y=i.yOrigin||0,g!==Gi&&(I=g[0],N=g[1],F=g[2],L=g[3],l=H=g[4],h=O=g[5],g.length===6?(c=Math.sqrt(I*I+N*N),d=Math.sqrt(L*L+F*F),_=I||N?Zr(N,I)*br:0,m=F||L?Zr(F,L)*br+_:0,m&&(d*=Math.abs(Math.cos(m*Kr))),i.svg&&(l-=C-(C*I+y*F),h-=y-(C*N+y*L))):(Y=g[6],j=g[7],lt=g[8],R=g[9],B=g[10],z=g[11],l=g[12],h=g[13],f=g[14],E=Zr(Y,B),p=E*br,E&&(P=Math.cos(-E),T=Math.sin(-E),S=H*P+lt*T,G=O*P+R*T,ot=Y*P+B*T,lt=H*-T+lt*P,R=O*-T+R*P,B=Y*-T+B*P,z=j*-T+z*P,H=S,O=G,Y=ot),E=Zr(-F,B),v=E*br,E&&(P=Math.cos(-E),T=Math.sin(-E),S=I*P-lt*T,G=N*P-R*T,ot=F*P-B*T,z=L*T+z*P,I=S,N=G,F=ot),E=Zr(N,I),_=E*br,E&&(P=Math.cos(E),T=Math.sin(E),S=I*P+N*T,G=H*P+O*T,N=N*P-I*T,O=O*P-H*T,I=S,H=G),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,v=180-v),c=Ct(Math.sqrt(I*I+N*N+F*F)),d=Ct(Math.sqrt(O*O+Y*Y)),E=Zr(H,O),m=Math.abs(E)>2e-4?E*br:0,b=z?1/(z<0?-z:z):0),i.svg&&(S=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!zc(Fe(e,Ft)),S&&e.setAttribute("transform",S))),Math.abs(m)>90&&Math.abs(m)<270&&(o?(c*=-1,m+=_<=0?180:-180,_+=_<=0?180:-180):(d*=-1,m+=m<=0?180:-180)),i.x=l-((i.xPercent=l&&(i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Ct(c),i.scaleY=Ct(d),i.rotation=Ct(_)+s,i.rotationX=Ct(p)+s,i.rotationY=Ct(v)+s,i.skewX=m+s,i.skewY=x+s,i.transformPerspective=b+a,(i.zOrigin=parseFloat(u.split(" ")[2])||0)&&(n[We]=Wn(u)),i.xOffset=i.yOffset=0,i.force3D=zt.force3D,i.renderTransform=i.svg?nb:Mc?$c:ib,i.uncache=0,i},Wn=function(e){return(e=e.split(" "))[0]+" "+e[1]},ds=function(e,t,i){var n=Xt(t);return Ct(parseFloat(t)+parseFloat(qe(e,"x",i+"px",n)))+n},ib=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$c(e,t)},Cr="0deg",ki="0px",wr=") ",$c=function(e,t){var i=t||this,n=i.xPercent,o=i.yPercent,a=i.x,s=i.y,u=i.z,l=i.rotation,h=i.rotationY,f=i.rotationX,c=i.skewX,d=i.skewY,_=i.scaleX,p=i.scaleY,v=i.transformPerspective,m=i.force3D,x=i.target,b=i.zOrigin,C="",y=m==="auto"&&e&&e!==1||m===!0;if(b&&(f!==Cr||h!==Cr)){var g=parseFloat(h)*Kr,E=Math.sin(g),P=Math.cos(g),T;g=parseFloat(f)*Kr,T=Math.cos(g),a=ds(x,a,E*T*-b),s=ds(x,s,-Math.sin(g)*-b),u=ds(x,u,P*T*-b+b)}v!==ki&&(C+="perspective("+v+wr),(n||o)&&(C+="translate("+n+"%, "+o+"%) "),(y||a!==ki||s!==ki||u!==ki)&&(C+=u!==ki||y?"translate3d("+a+", "+s+", "+u+") ":"translate("+a+", "+s+wr),l!==Cr&&(C+="rotate("+l+wr),h!==Cr&&(C+="rotateY("+h+wr),f!==Cr&&(C+="rotateX("+f+wr),(c!==Cr||d!==Cr)&&(C+="skew("+c+", "+d+wr),(_!==1||p!==1)&&(C+="scale("+_+", "+p+wr),x.style[Ft]=C||"translate(0, 0)"},nb=function(e,t){var i=t||this,n=i.xPercent,o=i.yPercent,a=i.x,s=i.y,u=i.rotation,l=i.skewX,h=i.skewY,f=i.scaleX,c=i.scaleY,d=i.target,_=i.xOrigin,p=i.yOrigin,v=i.xOffset,m=i.yOffset,x=i.forceCSS,b=parseFloat(a),C=parseFloat(s),y,g,E,P,T;u=parseFloat(u),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,u+=h),u||l?(u*=Kr,l*=Kr,y=Math.cos(u)*f,g=Math.sin(u)*f,E=Math.sin(u-l)*-c,P=Math.cos(u-l)*c,l&&(h*=Kr,T=Math.tan(l-h),T=Math.sqrt(1+T*T),E*=T,P*=T,h&&(T=Math.tan(h),T=Math.sqrt(1+T*T),y*=T,g*=T)),y=Ct(y),g=Ct(g),E=Ct(E),P=Ct(P)):(y=f,P=c,g=E=0),(b&&!~(a+"").indexOf("px")||C&&!~(s+"").indexOf("px"))&&(b=qe(d,"x",a,"px"),C=qe(d,"y",s,"px")),(_||p||v||m)&&(b=Ct(b+_-(_*y+p*E)+v),C=Ct(C+p-(_*g+p*P)+m)),(n||o)&&(T=d.getBBox(),b=Ct(b+n/100*T.width),C=Ct(C+o/100*T.height)),T="matrix("+y+","+g+","+E+","+P+","+b+","+C+")",d.setAttribute("transform",T),x&&(d.style[Ft]=T)},ob=function(e,t,i,n,o,a){var s=360,u=It(o),l=parseFloat(o)*(u&&~o.indexOf("rad")?br:1),h=a?l*a:l-n,f=n+h+"deg",c,d;return u&&(c=o.split("_")[1],c==="short"&&(h%=s,h!==h%(s/2)&&(h+=h<0?s:-s)),c==="cw"&&h<0?h=(h+s*Oc)%s-~~(h/s)*s:c==="ccw"&&h>0&&(h=(h-s*Oc)%s-~~(h/s)*s)),e._pt=d=new jt(e._pt,t,i,n,h,Vx),d.e=f,d.u="deg",e._props.push(i),d},Wc=function(e,t){for(var i in t)e[i]=t[i];return e},ab=function(e,t,i){var n=Wc({},i._gsap),o="perspective,force3D,transformOrigin,svgOrigin",a=i.style,s,u,l,h,f,c,d,_;n.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),a[Ft]=t,s=Di(i,1),Bi(i,Ft),i.setAttribute("transform",l)):(l=getComputedStyle(i)[Ft],a[Ft]=t,s=Di(i,1),a[Ft]=l);for(u in Ve)l=n[u],h=s[u],l!==h&&o.indexOf(u)<0&&(d=Xt(l),_=Xt(h),f=d!==_?qe(i,u,l,_):parseFloat(l),c=parseFloat(h),e._pt=new jt(e._pt,s,u,f,c-f,Fc),e._pt.u=_||0,e._props.push(u));Wc(s,n)};kt("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",o="Left",a=(e<3?[t,i,n,o]:[t+o,t+i,n+i,n+o]).map(function(s){return e<2?r+s:"border"+s+r});$n[e>1?"border"+r:r]=function(s,u,l,h,f){var c,d;if(arguments.length<4)return c=a.map(function(_){return Tr(s,_,l)}),d=c.join(" "),d.split(c[0]).length===5?c[0]:d;c=(h+"").split(" "),d={},a.forEach(function(_,p){return d[_]=c[p]=c[p]||c[(p-1)/2|0]}),s.init(u,d,f)}});var Yc={name:"css",register:ls,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,o){var a=this._props,s=e.style,u=i.vars.startAt,l,h,f,c,d,_,p,v,m,x,b,C,y,g,E;ss||ls();for(p in t)if(p!=="autoRound"&&(h=t[p],!($t[p]&&Tc(p,t,i,n,e,o)))){if(d=typeof h,_=$n[p],d==="function"&&(h=h.call(i,n,e,o),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ni(h)),_)_(this,e,p,h,i)&&(E=1);else if(p.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(p)+"").trim(),h+="",He.lastIndex=0,He.test(l)||(v=Xt(l),m=Xt(h)),m?v!==m&&(l=qe(e,p,l,m)+m):v&&(h+=v),this.add(s,"setProperty",l,h,n,o,0,0,p),a.push(p);else if(d!=="undefined"){if(u&&p in u?(l=typeof u[p]=="function"?u[p].call(i,n,e,o):u[p],It(l)&&~l.indexOf("random(")&&(l=Ni(l)),Xt(l+"")||(l+=zt.units[p]||Xt(Tr(e,p))||""),(l+"").charAt(1)==="="&&(l=Tr(e,p))):l=Tr(e,p),c=parseFloat(l),x=d==="string"&&h.charAt(1)==="="?+(h.charAt(0)+"1"):0,x&&(h=h.substr(2)),f=parseFloat(h),p in $e&&(p==="autoAlpha"&&(c===1&&Tr(e,"visibility")==="hidden"&&f&&(c=0),Ye(this,s,"visibility",c?"inherit":"hidden",f?"inherit":"hidden",!f)),p!=="scale"&&p!=="transform"&&(p=$e[p],~p.indexOf(",")&&(p=p.split(",")[0]))),b=p in Ve,b){if(C||(y=e._gsap,y.renderTransform&&!t.parseTransform||Di(e,t.parseTransform),g=t.smoothOrigin!==!1&&y.smooth,C=this._pt=new jt(this._pt,s,Ft,0,1,y.renderTransform,y,0,-1),C.dep=1),p==="scale")this._pt=new jt(this._pt,y,"scaleY",y.scaleY,(x?x*f:f-y.scaleY)||0),a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){h=eb(h),y.svg?cs(e,h,0,g,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==y.zOrigin&&Ye(this,y,"zOrigin",y.zOrigin,m),Ye(this,s,p,Wn(l),Wn(h)));continue}else if(p==="svgOrigin"){cs(e,h,1,g,0,this);continue}else if(p in jc){ob(this,y,p,c,h,x);continue}else if(p==="smoothOrigin"){Ye(this,y,"smooth",y.smooth,h);continue}else if(p==="force3D"){y[p]=h;continue}else if(p==="transform"){ab(this,h,e);continue}}else p in s||(p=Jr(p)||p);if(b||(f||f===0)&&(c||c===0)&&!zx.test(h)&&p in s)v=(l+"").substr((c+"").length),f||(f=0),m=Xt(h)||(p in zt.units?zt.units[p]:v),v!==m&&(c=qe(e,p,l,m)),this._pt=new jt(this._pt,b?y:s,p,c,x?x*f:f-c,!b&&(m==="px"||p==="zIndex")&&t.autoRound!==!1?Wx:Fc),this._pt.u=m||0,v!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=$x);else if(p in s)tb.call(this,e,p,l,h);else if(p in e)this.add(e,p,l||e[p],h,n,o);else{za(p,h);continue}a.push(p)}}E&&Ac(this)},get:Tr,aliases:$e,getSetter:function(e,t,i){var n=$e[t];return n&&n.indexOf(",")<0&&(t=n),t in Ve&&t!==We&&(e._gsap.x||Tr(e,"x"))?i&&Sc===i?t==="scale"?Zx:Kx:(Sc=i||{})&&(t==="scale"?Jx:Qx):e.style&&!Da(e.style[t])?Yx:~t.indexOf("-")?qx:ns(e,t)},core:{_removeProperty:Bi,_getMatrix:fs}};xe.utils.checkPrefix=Jr;(function(r,e,t,i){var n=kt(r+","+e+","+t,function(o){Ve[o]=1});kt(e,function(o){zt.units[o]="deg",jc[o]=1}),$e[n[13]]=r+","+e,kt(i,function(o){var a=o.split(":");$e[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){zt.units[r]="px"});xe.registerPlugin(Yc);var sb=xe.registerPlugin(Yc)||xe;sb.core.Tween;/*!
 * @pixi/filter-adjustment - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-adjustment is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ps=function(r,e){return ps=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ps(r,e)};function ub(r,e){ps(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var lb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,hb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float gamma;
uniform float contrast;
uniform float saturation;
uniform float brightness;
uniform float red;
uniform float green;
uniform float blue;
uniform float alpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / gamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);
        rgb.r *= red;
        rgb.g *= green;
        rgb.b *= blue;
        c.rgb = rgb * brightness;

        c.rgb *= c.a;
    }

    gl_FragColor = c * alpha;
}
`,yT=function(r){ub(e,r);function e(t){var i=r.call(this,lb,hb)||this;return i.gamma=1,i.saturation=1,i.contrast=1,i.brightness=1,i.red=1,i.green=1,i.blue=1,i.alpha=1,Object.assign(i,t),i}return e.prototype.apply=function(t,i,n,o){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,t.applyFilter(this,i,n,o)},e}(V);/*!
 * @pixi/filter-kawase-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-kawase-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var _s=function(r,e){return _s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},_s(r,e)};function fb(r,e){_s(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var cb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,db=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,pb=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`,Yn=function(r){fb(e,r);function e(t,i,n){t===void 0&&(t=4),i===void 0&&(i=3),n===void 0&&(n=!1);var o=r.call(this,cb,n?pb:db)||this;return o._kernels=[],o._blur=4,o._quality=3,o.uniforms.uOffset=new Float32Array(2),o._pixelSize=new J,o.pixelSize=1,o._clamp=n,Array.isArray(t)?o.kernels=t:(o._blur=t,o.quality=i),o}return e.prototype.apply=function(t,i,n,o){var a=this._pixelSize.x/i._frame.width,s=this._pixelSize.y/i._frame.height,u;if(this._quality===1||this._blur===0)u=this._kernels[0]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,i,n,o);else{for(var l=t.getFilterTexture(),h=i,f=l,c=void 0,d=this._quality-1,_=0;_<d;_++)u=this._kernels[_]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,h,f,1),c=h,h=f,f=c;u=this._kernels[d]+.5,this.uniforms.uOffset[0]=u*a,this.uniforms.uOffset[1]=u*s,t.applyFilter(this,h,n,o),t.returnFilterTexture(l)}},e.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce(function(t,i){return t+i+.5},0))},e.prototype._generateKernels=function(){var t=this._blur,i=this._quality,n=[t];if(t>0)for(var o=t,a=t/i,s=1;s<i;s++)o-=a,n.push(o);this._kernels=n,this._updatePadding()},Object.defineProperty(e.prototype,"kernels",{get:function(){return this._kernels},set:function(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max.apply(Math,t)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(t){typeof t=="number"?(this._pixelSize.x=t,this._pixelSize.y=t):Array.isArray(t)?(this._pixelSize.x=t[0],this._pixelSize.y=t[1]):t instanceof J?(this._pixelSize.x=t.x,this._pixelSize.y=t.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blur},set:function(t){this._blur=t,this._generateKernels()},enumerable:!1,configurable:!0}),e}(V);/*!
 * @pixi/filter-advanced-bloom - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-advanced-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var vs=function(r,e){return vs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},vs(r,e)};function qc(r,e){vs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Kc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,_b=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,vb=function(r){qc(e,r);function e(t){t===void 0&&(t=.5);var i=r.call(this,Kc,_b)||this;return i.threshold=t,i}return Object.defineProperty(e.prototype,"threshold",{get:function(){return this.uniforms.threshold},set:function(t){this.uniforms.threshold=t},enumerable:!1,configurable:!0}),e}(V),mb=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`;(function(r){qc(e,r);function e(t){var i=r.call(this,Kc,mb)||this;i.bloomScale=1,i.brightness=1,i._resolution=M.FILTER_RESOLUTION,typeof t=="number"&&(t={threshold:t});var n=Object.assign(e.defaults,t);i.bloomScale=n.bloomScale,i.brightness=n.brightness;var o=n.kernels,a=n.blur,s=n.quality,u=n.pixelSize,l=n.resolution;return i._extractFilter=new vb(n.threshold),i._extractFilter.resolution=l,i._blurFilter=o?new Yn(o):new Yn(a,s),i.pixelSize=u,i.resolution=l,i}return e.prototype.apply=function(t,i,n,o,a){var s=t.getFilterTexture();this._extractFilter.apply(t,i,s,1,a);var u=t.getFilterTexture();this._blurFilter.apply(t,s,u,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=u,t.applyFilter(this,i,n,o),t.returnFilterTexture(u),t.returnFilterTexture(s)},Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._extractFilter&&(this._extractFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"threshold",{get:function(){return this._extractFilter.threshold},set:function(t){this._extractFilter.threshold=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),e.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:M.FILTER_RESOLUTION},e})(V);/*!
 * @pixi/filter-ascii - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-ascii is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ms=function(r,e){return ms=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ms(r,e)};function gb(r,e){ms(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var yb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,xb=`varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform float pixelSize;
uniform sampler2D uSampler;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor( coord / size ) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod( coord , size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, -4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the rounded color..
    vec2 pixCoord = pixelate(coord, vec2(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    vec4 color = texture2D(uSampler, pixCoord);

    // determine the character to use
    float gray = (color.r + color.g + color.b) / 3.0;

    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(pixelSize));

    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);

}
`;(function(r){gb(e,r);function e(t){t===void 0&&(t=8);var i=r.call(this,yb,xb)||this;return i.size=t,i}return Object.defineProperty(e.prototype,"size",{get:function(){return this.uniforms.pixelSize},set:function(t){this.uniforms.pixelSize=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-bevel - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bevel is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var gs=function(r,e){return gs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},gs(r,e)};function bb(r,e){gs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Tb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Cb=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float transformX;
uniform float transformY;
uniform vec3 lightColor;
uniform float lightAlpha;
uniform vec3 shadowColor;
uniform float shadowAlpha;

void main(void) {
    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);
    vec4 color = texture2D(uSampler, vTextureCoord);
    float light = texture2D(uSampler, vTextureCoord - transform).a;
    float shadow = texture2D(uSampler, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));
    gl_FragColor = vec4(color.rgb * color.a, color.a);
}
`;(function(r){bb(e,r);function e(t){var i=r.call(this,Tb,Cb)||this;return i._thickness=2,i._angle=0,i.uniforms.lightColor=new Float32Array(3),i.uniforms.shadowColor=new Float32Array(3),Object.assign(i,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),i.padding=1,i}return e.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},Object.defineProperty(e.prototype,"rotation",{get:function(){return this._angle/ir},set:function(t){this._angle=t*ir,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lightColor",{get:function(){return ie(this.uniforms.lightColor)},set:function(t){Ot(t,this.uniforms.lightColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lightAlpha",{get:function(){return this.uniforms.lightAlpha},set:function(t){this.uniforms.lightAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowColor",{get:function(){return ie(this.uniforms.shadowColor)},set:function(t){Ot(t,this.uniforms.shadowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowAlpha",{get:function(){return this.uniforms.shadowAlpha},set:function(t){this.uniforms.shadowAlpha=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-bloom - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ys=function(r,e){return ys=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ys(r,e)};function wb(r,e){ys(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(r){wb(e,r);function e(t,i,n,o){t===void 0&&(t=2),i===void 0&&(i=4),n===void 0&&(n=M.FILTER_RESOLUTION),o===void 0&&(o=5);var a=r.call(this)||this,s,u;return typeof t=="number"?(s=t,u=t):t instanceof J?(s=t.x,u=t.y):Array.isArray(t)&&(s=t[0],u=t[1]),a.blurXFilter=new Fn(!0,s,i,n,o),a.blurYFilter=new Fn(!1,u,i,n,o),a.blurYFilter.blendMode=D.SCREEN,a.defaultFilter=new Oy,a}return e.prototype.apply=function(t,i,n,o){var a=t.getFilterTexture();this.defaultFilter.apply(t,i,n,o),this.blurXFilter.apply(t,i,a,1),this.blurYFilter.apply(t,a,n,0),t.returnFilterTexture(a)},Object.defineProperty(e.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-bulge-pinch - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bulge-pinch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var xs=function(r,e){return xs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},xs(r,e)};function Eb(r,e){xs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Pb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ib=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;(function(r){Eb(e,r);function e(t){var i=r.call(this,Pb,Ib)||this;return i.uniforms.dimensions=new Float32Array(2),Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,i,n,o){var a=i.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),e.defaults={center:[.5,.5],radius:100,strength:1},e})(V);/*!
 * @pixi/filter-color-map - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-map is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var bs=function(r,e){return bs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},bs(r,e)};function Ab(r,e){bs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Rb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Sb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D colorMap;
uniform float _mix;
uniform float _size;
uniform float _sliceSize;
uniform float _slicePixelSize;
uniform float _sliceInnerSize;
void main() {
    vec4 color = texture2D(uSampler, vTextureCoord.xy);

    vec4 adjusted;
    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = _size - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;
        float s0 = xOffset + (zSlice0 * _sliceSize);
        float s1 = xOffset + (zSlice1 * _sliceSize);
        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);
        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));
        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }
    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);

}`;(function(r){Ab(e,r);function e(t,i,n){i===void 0&&(i=!1),n===void 0&&(n=1);var o=r.call(this,Rb,Sb)||this;return o.mix=1,o._size=0,o._sliceSize=0,o._slicePixelSize=0,o._sliceInnerSize=0,o._nearest=!1,o._scaleMode=null,o._colorMap=null,o._scaleMode=null,o.nearest=i,o.mix=n,o.colorMap=t,o}return e.prototype.apply=function(t,i,n,o){this.uniforms._mix=this.mix,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"colorSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorMap",{get:function(){return this._colorMap},set:function(t){var i;!t||(t instanceof k||(t=k.from(t)),((i=t)===null||i===void 0?void 0:i.baseTexture)&&(t.baseTexture.scaleMode=this._scaleMode,t.baseTexture.mipmap=ce.OFF,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=t),this._colorMap=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nearest",{get:function(){return this._nearest},set:function(t){this._nearest=t,this._scaleMode=t?Wt.NEAREST:Wt.LINEAR;var i=this._colorMap;i&&i.baseTexture&&(i.baseTexture._glTextures={},i.baseTexture.scaleMode=this._scaleMode,i.baseTexture.mipmap=ce.OFF,i._updateID++,i.baseTexture.emit("update",i.baseTexture))},enumerable:!1,configurable:!0}),e.prototype.updateColorMap=function(){var t=this._colorMap;t&&t.baseTexture&&(t._updateID++,t.baseTexture.emit("update",t.baseTexture),this.colorMap=t)},e.prototype.destroy=function(t){t===void 0&&(t=!1),this._colorMap&&this._colorMap.destroy(t),r.prototype.destroy.call(this)},e})(V);/*!
 * @pixi/filter-color-overlay - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-overlay is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ts=function(r,e){return Ts=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Ts(r,e)};function Ob(r,e){Ts(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Nb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Fb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 color;
uniform float alpha;

void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);
}
`;(function(r){Ob(e,r);function e(t,i){t===void 0&&(t=0),i===void 0&&(i=1);var n=r.call(this,Nb,Fb)||this;return n._color=0,n._alpha=1,n.uniforms.color=new Float32Array(3),n.color=t,n.alpha=i,n}return Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var i=this.uniforms.color;typeof t=="number"?(Ot(t,i),this._color=t):(i[0]=t[0],i[1]=t[1],i[2]=t[2],this._color=ie(i))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){this.uniforms.alpha=t,this._alpha=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-color-replace - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Cs=function(r,e){return Cs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Cs(r,e)};function Ub(r,e){Cs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Lb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Mb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 originalColor;
uniform vec3 newColor;
uniform float epsilon;
void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, epsilon);
    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);
}
`;(function(r){Ub(e,r);function e(t,i,n){t===void 0&&(t=16711680),i===void 0&&(i=0),n===void 0&&(n=.4);var o=r.call(this,Lb,Mb)||this;return o._originalColor=16711680,o._newColor=0,o.uniforms.originalColor=new Float32Array(3),o.uniforms.newColor=new Float32Array(3),o.originalColor=t,o.newColor=i,o.epsilon=n,o}return Object.defineProperty(e.prototype,"originalColor",{get:function(){return this._originalColor},set:function(t){var i=this.uniforms.originalColor;typeof t=="number"?(Ot(t,i),this._originalColor=t):(i[0]=t[0],i[1]=t[1],i[2]=t[2],this._originalColor=ie(i))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newColor",{get:function(){return this._newColor},set:function(t){var i=this.uniforms.newColor;typeof t=="number"?(Ot(t,i),this._newColor=t):(i[0]=t[0],i[1]=t[1],i[2]=t[2],this._newColor=ie(i))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-convolution - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-convolution is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ws=function(r,e){return ws=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ws(r,e)};function Bb(r,e){ws(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Gb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Db=`precision mediump float;

varying mediump vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec2 texelSize;
uniform float matrix[9];

void main(void)
{
   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left
   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center
   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right

   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left
   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center
   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right

   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left
   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center
   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right

   gl_FragColor =
       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +
       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +
       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];

   gl_FragColor.a = c22.a;
}
`;(function(r){Bb(e,r);function e(t,i,n){i===void 0&&(i=200),n===void 0&&(n=200);var o=r.call(this,Gb,Db)||this;return o.uniforms.texelSize=new Float32Array(2),o.uniforms.matrix=new Float32Array(9),t!==void 0&&(o.matrix=t),o.width=i,o.height=n,o}return Object.defineProperty(e.prototype,"matrix",{get:function(){return this.uniforms.matrix},set:function(t){var i=this;t.forEach(function(n,o){i.uniforms.matrix[o]=n})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return 1/this.uniforms.texelSize[0]},set:function(t){this.uniforms.texelSize[0]=1/t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return 1/this.uniforms.texelSize[1]},set:function(t){this.uniforms.texelSize[1]=1/t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-cross-hatch - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-cross-hatch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Es=function(r,e){return Es=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Es(r,e)};function kb(r,e){Es(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Xb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Hb=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void)
{
    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);

    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

    if (lum < 1.00)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.75)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.50)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.3)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
}
`;(function(r){kb(e,r);function e(){return r.call(this,Xb,Hb)||this}return e})(V);/*!
 * @pixi/filter-crt - v4.1.6
 * Compiled Thu, 03 Feb 2022 14:30:04 UTC
 *
 * @pixi/filter-crt is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ps=function(r,e){return Ps=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Ps(r,e)};function jb(r,e){Ps(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var zb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Vb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));
    
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;(function(r){jb(e,r);function e(t){var i=r.call(this,zb,Vb)||this;return i.time=0,i.seed=0,i.uniforms.dimensions=new Float32Array(2),Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,i,n,o){var a=i.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.seed=this.seed,this.uniforms.time=this.time,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"curvature",{get:function(){return this.uniforms.curvature},set:function(t){this.uniforms.curvature=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineWidth",{get:function(){return this.uniforms.lineWidth},set:function(t){this.uniforms.lineWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineContrast",{get:function(){return this.uniforms.lineContrast},set:function(t){this.uniforms.lineContrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"verticalLine",{get:function(){return this.uniforms.verticalLine},set:function(t){this.uniforms.verticalLine=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),e.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},e})(V);/*!
 * @pixi/filter-dot - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-dot is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Is=function(r,e){return Is=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Is(r,e)};function $b(r,e){Is(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Wb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Yb=`precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec4 filterArea;
uniform sampler2D uSampler;

uniform float angle;
uniform float scale;

float pattern()
{
   float s = sin(angle), c = cos(angle);
   vec2 tex = vTextureCoord * filterArea.xy;
   vec2 point = vec2(
       c * tex.x - s * tex.y,
       s * tex.x + c * tex.y
   ) * scale;
   return (sin(point.x) * sin(point.y)) * 4.0;
}

void main()
{
   vec4 color = texture2D(uSampler, vTextureCoord);
   float average = (color.r + color.g + color.b) / 3.0;
   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);
}
`;(function(r){$b(e,r);function e(t,i){t===void 0&&(t=1),i===void 0&&(i=5);var n=r.call(this,Wb,Yb)||this;return n.scale=t,n.angle=i,n}return Object.defineProperty(e.prototype,"scale",{get:function(){return this.uniforms.scale},set:function(t){this.uniforms.scale=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-drop-shadow - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-drop-shadow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var As=function(r,e){return As=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},As(r,e)};function qb(r,e){As(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var qn=function(){return qn=Object.assign||function(e){for(var t=arguments,i,n=1,o=arguments.length;n<o;n++){i=t[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},qn.apply(this,arguments)},Kb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Zb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`;(function(r){qb(e,r);function e(t){var i=r.call(this)||this;i.angle=45,i._distance=5,i._resolution=M.FILTER_RESOLUTION;var n=t?qn(qn({},e.defaults),t):e.defaults,o=n.kernels,a=n.blur,s=n.quality,u=n.pixelSize,l=n.resolution;i._tintFilter=new V(Kb,Zb),i._tintFilter.uniforms.color=new Float32Array(4),i._tintFilter.uniforms.shift=new J,i._tintFilter.resolution=l,i._blurFilter=o?new Yn(o):new Yn(a,s),i.pixelSize=u,i.resolution=l;var h=n.shadowOnly,f=n.rotation,c=n.distance,d=n.alpha,_=n.color;return i.shadowOnly=h,i.rotation=f,i.distance=c,i.alpha=d,i.color=_,i._updatePadding(),i}return e.prototype.apply=function(t,i,n,o){var a=t.getFilterTexture();this._tintFilter.apply(t,i,a,1),this._blurFilter.apply(t,a,n,o),this.shadowOnly!==!0&&t.applyFilter(this,i,n,0),t.returnFilterTexture(a)},e.prototype._updatePadding=function(){this.padding=this.distance+this.blur*2},e.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._tintFilter&&(this._tintFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"distance",{get:function(){return this._distance},set:function(t){this._distance=t,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.angle/ir},set:function(t){this.angle=t*ir,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(t){this._tintFilter.uniforms.alpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return ie(this._tintFilter.uniforms.color)},set:function(t){Ot(t,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),e.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:M.FILTER_RESOLUTION},e})(V);/*!
 * @pixi/filter-emboss - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-emboss is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Rs=function(r,e){return Rs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Rs(r,e)};function Jb(r,e){Rs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Qb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,t1=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float strength;
uniform vec4 filterArea;


void main(void)
{
	vec2 onePixel = vec2(1.0 / filterArea);

	vec4 color;

	color.rgb = vec3(0.5);

	color -= texture2D(uSampler, vTextureCoord - onePixel) * strength;
	color += texture2D(uSampler, vTextureCoord + onePixel) * strength;

	color.rgb = vec3((color.r + color.g + color.b) / 3.0);

	float alpha = texture2D(uSampler, vTextureCoord).a;

	gl_FragColor = vec4(color.rgb * alpha, alpha);
}
`;(function(r){Jb(e,r);function e(t){t===void 0&&(t=5);var i=r.call(this,Qb,t1)||this;return i.strength=t,i}return Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-glitch - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-glitch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ss=function(r,e){return Ss=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Ss(r,e)};function e1(r,e){Ss(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var r1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,i1=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;(function(r){e1(e,r);function e(t){var i=r.call(this,r1,i1)||this;return i.offset=100,i.fillMode=e.TRANSPARENT,i.average=!1,i.seed=0,i.minSize=8,i.sampleSize=512,i._slices=0,i._offsets=new Float32Array(1),i._sizes=new Float32Array(1),i._direction=-1,i.uniforms.dimensions=new Float32Array(2),i._canvas=document.createElement("canvas"),i._canvas.width=4,i._canvas.height=i.sampleSize,i.texture=k.from(i._canvas,{scaleMode:Wt.NEAREST}),Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,i,n,o){var a=i.filterFrame,s=a.width,u=a.height;this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/s,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,t.applyFilter(this,i,n,o)},e.prototype._randomizeSizes=function(){var t=this._sizes,i=this._slices-1,n=this.sampleSize,o=Math.min(this.minSize/n,.9/this._slices);if(this.average){for(var a=this._slices,s=1,u=0;u<i;u++){var l=s/(a-u),h=Math.max(l*(1-Math.random()*.6),o);t[u]=h,s-=h}t[i]=s}else{for(var s=1,f=Math.sqrt(1/this._slices),u=0;u<i;u++){var h=Math.max(f*s*Math.random(),o);t[u]=h,s-=h}t[i]=s}this.shuffle()},e.prototype.shuffle=function(){for(var t=this._sizes,i=this._slices-1,n=i;n>0;n--){var o=Math.random()*n>>0,a=t[n];t[n]=t[o],t[o]=a}},e.prototype._randomizeOffsets=function(){for(var t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)},e.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},e.prototype.redraw=function(){var t=this.sampleSize,i=this.texture,n=this._canvas.getContext("2d");n.clearRect(0,0,8,t);for(var o,a=0,s=0;s<this._slices;s++){o=Math.floor(this._offsets[s]*256);var u=this._sizes[s]*t,l=o>0?o:0,h=o<0?-o:0;n.fillStyle="rgba("+l+", "+h+", 0, 1)",n.fillRect(0,a>>0,t,u+1>>0),a+=u}i.baseTexture.update(),this.uniforms.displacementMap=i},Object.defineProperty(e.prototype,"sizes",{get:function(){return this._sizes},set:function(t){for(var i=Math.min(this._slices,t.length),n=0;n<i;n++)this._sizes[n]=t[n]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"offsets",{get:function(){return this._offsets},set:function(t){for(var i=Math.min(this._slices,t.length),n=0;n<i;n++)this._offsets[n]=t[n]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"slices",{get:function(){return this._slices},set:function(t){this._slices!==t&&(this._slices=t,this.uniforms.slices=t,this._sizes=this.uniforms.slicesWidth=new Float32Array(t),this._offsets=this.uniforms.slicesOffset=new Float32Array(t),this.refresh())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"direction",{get:function(){return this._direction},set:function(t){if(this._direction!==t){this._direction=t;var i=t*ir;this.uniforms.sinDir=Math.sin(i),this.uniforms.cosDir=Math.cos(i)}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){var t;(t=this.texture)===null||t===void 0||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null},e.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},e.TRANSPARENT=0,e.ORIGINAL=1,e.LOOP=2,e.CLAMP=3,e.MIRROR=4,e})(V);/*!
 * @pixi/filter-glow - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-glow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Os=function(r,e){return Os=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Os(r,e)};function n1(r,e){Os(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var o1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,a1=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;
    
    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`;(function(r){n1(e,r);function e(t){var i=this,n=Object.assign({},e.defaults,t),o=n.outerStrength,a=n.innerStrength,s=n.color,u=n.knockout,l=n.quality,h=Math.round(n.distance);return i=r.call(this,o1,a1.replace(/__ANGLE_STEP_SIZE__/gi,""+(1/l/h).toFixed(7)).replace(/__DIST__/gi,h.toFixed(0)+".0"))||this,i.uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(i,{color:s,outerStrength:o,innerStrength:a,padding:h,knockout:u}),i}return Object.defineProperty(e.prototype,"color",{get:function(){return ie(this.uniforms.glowColor)},set:function(t){Ot(t,this.uniforms.glowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"outerStrength",{get:function(){return this.uniforms.outerStrength},set:function(t){this.uniforms.outerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"innerStrength",{get:function(){return this.uniforms.innerStrength},set:function(t){this.uniforms.innerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"knockout",{get:function(){return this.uniforms.knockout},set:function(t){this.uniforms.knockout=t},enumerable:!1,configurable:!0}),e.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1},e})(V);/*!
 * @pixi/filter-godray - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-godray is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ns=function(r,e){return Ns=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Ns(r,e)};function s1(r,e){Ns(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var u1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,l1=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,h1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;(function(r){s1(e,r);function e(t){var i=r.call(this,u1,h1.replace("${perlin}",l1))||this;i.parallel=!0,i.time=0,i._angle=0,i.uniforms.dimensions=new Float32Array(2);var n=Object.assign(e.defaults,t);return i._angleLight=new J,i.angle=n.angle,i.gain=n.gain,i.lacunarity=n.lacunarity,i.alpha=n.alpha,i.parallel=n.parallel,i.center=n.center,i.time=n.time,i}return e.prototype.apply=function(t,i,n,o){var a=i.filterFrame,s=a.width,u=a.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=s,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/s,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t;var i=t*ir;this._angleLight.x=Math.cos(i),this._angleLight.y=Math.sin(i)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gain",{get:function(){return this.uniforms.gain},set:function(t){this.uniforms.gain=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lacunarity",{get:function(){return this.uniforms.lacunarity},set:function(t){this.uniforms.lacunarity=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha=t},enumerable:!1,configurable:!0}),e.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1},e})(V);/*!
 * @pixi/filter-motion-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-motion-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Fs=function(r,e){return Fs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Fs(r,e)};function f1(r,e){Fs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var c1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,d1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    vec2 velocity = uVelocity / filterArea.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture2D(uSampler, vTextureCoord + bias);
    }
    gl_FragColor = color / float(uKernelSize);
}
`;(function(r){f1(e,r);function e(t,i,n){t===void 0&&(t=[0,0]),i===void 0&&(i=5),n===void 0&&(n=0);var o=r.call(this,c1,d1)||this;return o.kernelSize=5,o.uniforms.uVelocity=new Float32Array(2),o._velocity=new nr(o.velocityChanged,o),o.setVelocity(t),o.kernelSize=i,o.offset=n,o}return e.prototype.apply=function(t,i,n,o){var a=this.velocity,s=a.x,u=a.y;this.uniforms.uKernelSize=s!==0||u!==0?this.kernelSize:0,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"velocity",{get:function(){return this._velocity},set:function(t){this.setVelocity(t)},enumerable:!1,configurable:!0}),e.prototype.setVelocity=function(t){if(Array.isArray(t)){var i=t[0],n=t[1];this._velocity.set(i,n)}else this._velocity.copyFrom(t)},e.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)+1},Object.defineProperty(e.prototype,"offset",{get:function(){return this.uniforms.uOffset},set:function(t){this.uniforms.uOffset=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-multi-color-replace - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-multi-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Us=function(r,e){return Us=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Us(r,e)};function p1(r,e){Us(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var _1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,v1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float epsilon;

const int MAX_COLORS = %maxColors%;

uniform vec3 originalColors[MAX_COLORS];
uniform vec3 targetColors[MAX_COLORS];

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);

    float alpha = gl_FragColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = gl_FragColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = originalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < epsilon)
      {
        vec3 targetColor = targetColors[i];
        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`;(function(r){p1(e,r);function e(t,i,n){i===void 0&&(i=.05),n===void 0&&(n=t.length);var o=r.call(this,_1,v1.replace(/%maxColors%/g,n.toFixed(0)))||this;return o._replacements=[],o._maxColors=0,o.epsilon=i,o._maxColors=n,o.uniforms.originalColors=new Float32Array(n*3),o.uniforms.targetColors=new Float32Array(n*3),o.replacements=t,o}return Object.defineProperty(e.prototype,"replacements",{get:function(){return this._replacements},set:function(t){var i=this.uniforms.originalColors,n=this.uniforms.targetColors,o=t.length;if(o>this._maxColors)throw new Error("Length of replacements ("+o+") exceeds the maximum colors length ("+this._maxColors+")");i[o*3]=-1;for(var a=0;a<o;a++){var s=t[a],u=s[0];typeof u=="number"?u=Ot(u):s[0]=ie(u),i[a*3]=u[0],i[a*3+1]=u[1],i[a*3+2]=u[2];var l=s[1];typeof l=="number"?l=Ot(l):s[1]=ie(l),n[a*3]=l[0],n[a*3+1]=l[1],n[a*3+2]=l[2]}this._replacements=t},enumerable:!1,configurable:!0}),e.prototype.refresh=function(){this.replacements=this._replacements},Object.defineProperty(e.prototype,"maxColors",{get:function(){return this._maxColors},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-old-film - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-old-film is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ls=function(r,e){return Ls=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Ls(r,e)};function m1(r,e){Ls(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var g1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,y1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`;(function(r){m1(e,r);function e(t,i){i===void 0&&(i=0);var n=r.call(this,g1,y1)||this;return n.seed=0,n.uniforms.dimensions=new Float32Array(2),typeof t=="number"?(n.seed=t,t=void 0):n.seed=i,Object.assign(n,e.defaults,t),n}return e.prototype.apply=function(t,i,n,o){var a,s;this.uniforms.dimensions[0]=(a=i.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=i.filterFrame)===null||s===void 0?void 0:s.height,this.uniforms.seed=this.seed,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"sepia",{get:function(){return this.uniforms.sepia},set:function(t){this.uniforms.sepia=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratch",{get:function(){return this.uniforms.scratch},set:function(t){this.uniforms.scratch=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratchDensity",{get:function(){return this.uniforms.scratchDensity},set:function(t){this.uniforms.scratchDensity=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratchWidth",{get:function(){return this.uniforms.scratchWidth},set:function(t){this.uniforms.scratchWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),e.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},e})(V);/*!
 * @pixi/filter-outline - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-outline is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ms=function(r,e){return Ms=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Ms(r,e)};function x1(r,e){Ms(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var b1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,T1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 thickness;
uniform vec4 outlineColor;
uniform vec4 filterClamp;

const float DOUBLE_PI = 3.14159265358979323846264 * 2.;

void main(void) {
    vec4 ownColor = texture2D(uSampler, vTextureCoord);
    vec4 curColor;
    float maxAlpha = 0.;
    vec2 displaced;
    for (float angle = 0.; angle <= DOUBLE_PI; angle += \${angleStep}) {
        displaced.x = vTextureCoord.x + thickness.x * cos(angle);
        displaced.y = vTextureCoord.y + thickness.y * sin(angle);
        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, curColor.a);
    }
    float resultAlpha = max(maxAlpha, ownColor.a);
    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);
}
`;(function(r){x1(e,r);function e(t,i,n){t===void 0&&(t=1),i===void 0&&(i=0),n===void 0&&(n=.1);var o=r.call(this,b1,T1.replace(/\$\{angleStep\}/,e.getAngleStep(n)))||this;return o._thickness=1,o.uniforms.thickness=new Float32Array([0,0]),o.uniforms.outlineColor=new Float32Array([0,0,0,1]),Object.assign(o,{thickness:t,color:i,quality:n}),o}return e.getAngleStep=function(t){var i=Math.max(t*e.MAX_SAMPLES,e.MIN_SAMPLES);return(Math.PI*2/i).toFixed(7)},e.prototype.apply=function(t,i,n,o){this.uniforms.thickness[0]=this._thickness/i._frame.width,this.uniforms.thickness[1]=this._thickness/i._frame.height,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"color",{get:function(){return ie(this.uniforms.outlineColor)},set:function(t){Ot(t,this.uniforms.outlineColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this.padding=t},enumerable:!1,configurable:!0}),e.MIN_SAMPLES=1,e.MAX_SAMPLES=100,e})(V);/*!
 * @pixi/filter-pixelate - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-pixelate is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Bs=function(r,e){return Bs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Bs(r,e)};function C1(r,e){Bs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var w1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,E1=`precision mediump float;

varying vec2 vTextureCoord;

uniform vec2 size;
uniform sampler2D uSampler;

uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
	return floor( coord / size ) * size;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);

    coord = pixelate(coord, size);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord);
}
`;(function(r){C1(e,r);function e(t){t===void 0&&(t=10);var i=r.call(this,w1,E1)||this;return i.size=t,i}return Object.defineProperty(e.prototype,"size",{get:function(){return this.uniforms.size},set:function(t){typeof t=="number"&&(t=[t,t]),this.uniforms.size=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-radial-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-radial-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Gs=function(r,e){return Gs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Gs(r,e)};function P1(r,e){Gs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var I1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,A1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    float aspect = filterArea.y / filterArea.x;
    vec2 center = uCenter.xy / filterArea.xy;
    float gradient = uRadius / filterArea.x * 0.3;
    float radius = uRadius / filterArea.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            gl_FragColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture2D(uSampler, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    gl_FragColor = color / float(uKernelSize);
}
`;(function(r){P1(e,r);function e(t,i,n,o){t===void 0&&(t=0),i===void 0&&(i=[0,0]),n===void 0&&(n=5),o===void 0&&(o=-1);var a=r.call(this,I1,A1)||this;return a._angle=0,a.angle=t,a.center=i,a.kernelSize=n,a.radius=o,a}return e.prototype.apply=function(t,i,n,o){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-reflection - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-reflection is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ds=function(r,e){return Ds=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Ds(r,e)};function R1(r,e){Ds(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var S1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,O1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;(function(r){R1(e,r);function e(t){var i=r.call(this,S1,O1)||this;return i.time=0,i.uniforms.amplitude=new Float32Array(2),i.uniforms.waveLength=new Float32Array(2),i.uniforms.alpha=new Float32Array(2),i.uniforms.dimensions=new Float32Array(2),Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,i,n,o){var a,s;this.uniforms.dimensions[0]=(a=i.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=i.filterFrame)===null||s===void 0?void 0:s.height,this.uniforms.time=this.time,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"mirror",{get:function(){return this.uniforms.mirror},set:function(t){this.uniforms.mirror=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"boundary",{get:function(){return this.uniforms.boundary},set:function(t){this.uniforms.boundary=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude[0]=t[0],this.uniforms.amplitude[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"waveLength",{get:function(){return this.uniforms.waveLength},set:function(t){this.uniforms.waveLength[0]=t[0],this.uniforms.waveLength[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha[0]=t[0],this.uniforms.alpha[1]=t[1]},enumerable:!1,configurable:!0}),e.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},e})(V);/*!
 * @pixi/filter-rgb-split - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-rgb-split is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ks=function(r,e){return ks=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ks(r,e)};function N1(r,e){ks(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var F1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,U1=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

void main(void)
{
   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;
   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;
   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;
   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;
}
`;(function(r){N1(e,r);function e(t,i,n){t===void 0&&(t=[-10,0]),i===void 0&&(i=[0,10]),n===void 0&&(n=[0,0]);var o=r.call(this,F1,U1)||this;return o.red=t,o.green=i,o.blue=n,o}return Object.defineProperty(e.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-shockwave - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-shockwave is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Xs=function(r,e){return Xs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Xs(r,e)};function L1(r,e){Xs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var M1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,B1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;(function(r){L1(e,r);function e(t,i,n){t===void 0&&(t=[0,0]),n===void 0&&(n=0);var o=r.call(this,M1,B1)||this;return o.center=t,Object.assign(o,e.defaults,i),o.time=n,o}return e.prototype.apply=function(t,i,n,o){this.uniforms.time=this.time,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wavelength",{get:function(){return this.uniforms.wavelength},set:function(t){this.uniforms.wavelength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"brightness",{get:function(){return this.uniforms.brightness},set:function(t){this.uniforms.brightness=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"speed",{get:function(){return this.uniforms.speed},set:function(t){this.uniforms.speed=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),e.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},e})(V);/*!
 * @pixi/filter-simple-lightmap - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-simple-lightmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Hs=function(r,e){return Hs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Hs(r,e)};function G1(r,e){Hs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var D1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,k1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uLightmap;
uniform vec4 filterArea;
uniform vec2 dimensions;
uniform vec4 ambientColor;
void main() {
    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;
    vec4 light = texture2D(uLightmap, lightCoord);
    vec3 ambient = ambientColor.rgb * ambientColor.a;
    vec3 intensity = ambient + light.rgb;
    vec3 finalColor = diffuseColor.rgb * intensity;
    gl_FragColor = vec4(finalColor, diffuseColor.a);
}
`;(function(r){G1(e,r);function e(t,i,n){i===void 0&&(i=0),n===void 0&&(n=1);var o=r.call(this,D1,k1)||this;return o._color=0,o.uniforms.dimensions=new Float32Array(2),o.uniforms.ambientColor=new Float32Array([0,0,0,n]),o.texture=t,o.color=i,o}return e.prototype.apply=function(t,i,n,o){var a,s;this.uniforms.dimensions[0]=(a=i.filterFrame)===null||a===void 0?void 0:a.width,this.uniforms.dimensions[1]=(s=i.filterFrame)===null||s===void 0?void 0:s.height,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"texture",{get:function(){return this.uniforms.uLightmap},set:function(t){this.uniforms.uLightmap=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var i=this.uniforms.ambientColor;typeof t=="number"?(Ot(t,i),this._color=t):(i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],this._color=ie(i))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.ambientColor[3]},set:function(t){this.uniforms.ambientColor[3]=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-tilt-shift - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-tilt-shift is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var js=function(r,e){return js=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},js(r,e)};function Kn(r,e){js(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var X1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,H1=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,Zc=function(r){Kn(e,r);function e(t,i,n,o){t===void 0&&(t=100),i===void 0&&(i=600);var a=r.call(this,X1,H1)||this;return a.uniforms.blur=t,a.uniforms.gradientBlur=i,a.uniforms.start=n||new J(0,window.innerHeight/2),a.uniforms.end=o||new J(600,window.innerHeight/2),a.uniforms.delta=new J(30,30),a.uniforms.texSize=new J(window.innerWidth,window.innerHeight),a.updateDelta(),a}return e.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},Object.defineProperty(e.prototype,"blur",{get:function(){return this.uniforms.blur},set:function(t){this.uniforms.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gradientBlur",{get:function(){return this.uniforms.gradientBlur},set:function(t){this.uniforms.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this.uniforms.start},set:function(t){this.uniforms.start=t,this.updateDelta()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this.uniforms.end},set:function(t){this.uniforms.end=t,this.updateDelta()},enumerable:!1,configurable:!0}),e}(V),j1=function(r){Kn(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,i=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(t*t+i*i);this.uniforms.delta.x=t/n,this.uniforms.delta.y=i/n},e}(Zc),z1=function(r){Kn(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,i=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(t*t+i*i);this.uniforms.delta.x=-i/n,this.uniforms.delta.y=t/n},e}(Zc);(function(r){Kn(e,r);function e(t,i,n,o){t===void 0&&(t=100),i===void 0&&(i=600);var a=r.call(this)||this;return a.tiltShiftXFilter=new j1(t,i,n,o),a.tiltShiftYFilter=new z1(t,i,n,o),a}return e.prototype.apply=function(t,i,n,o){var a=t.getFilterTexture();this.tiltShiftXFilter.apply(t,i,a,1),this.tiltShiftYFilter.apply(t,a,n,o),t.returnFilterTexture(a)},Object.defineProperty(e.prototype,"blur",{get:function(){return this.tiltShiftXFilter.blur},set:function(t){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gradientBlur",{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(t){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this.tiltShiftXFilter.start},set:function(t){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this.tiltShiftXFilter.end},set:function(t){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=t},enumerable:!1,configurable:!0}),e})(V);/*!
 * @pixi/filter-twist - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-twist is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var zs=function(r,e){return zs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},zs(r,e)};function V1(r,e){zs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var $1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,W1=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;(function(r){V1(e,r);function e(t){var i=r.call(this,$1,W1)||this;return Object.assign(i,e.defaults,t),i}return Object.defineProperty(e.prototype,"offset",{get:function(){return this.uniforms.offset},set:function(t){this.uniforms.offset=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),e.defaults={radius:200,angle:4,padding:20,offset:new J},e})(V);/*!
 * @pixi/filter-zoom-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-zoom-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Vs=function(r,e){return Vs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Vs(r,e)};function Y1(r,e){Vs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function q1(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,i=Object.getOwnPropertySymbols(r);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(r,i[n])&&(t[i[n]]=r[i[n]]);return t}var K1=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Z1=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;(function(r){Y1(e,r);function e(t){var i=this,n=Object.assign(e.defaults,t),o=n.maxKernelSize,a=q1(n,["maxKernelSize"]);return i=r.call(this,K1,Z1.replace("${maxKernelSize}",o.toFixed(1)))||this,Object.assign(i,a),i}return Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.uStrength},set:function(t){this.uniforms.uStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"innerRadius",{get:function(){return this.uniforms.uInnerRadius},set:function(t){this.uniforms.uInnerRadius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),e.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},e})(V);function J1(r){if(!!r&&typeof window!="undefined"){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=r,document.head.appendChild(e),r}}function Qr(r,e){var t=r.__state.conversionName.toString(),i=Math.round(r.r),n=Math.round(r.g),o=Math.round(r.b),a=r.a,s=Math.round(r.h),u=r.s.toFixed(1),l=r.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var h=r.hex.toString(16);h.length<6;)h="0"+h;return"#"+h}else{if(t==="CSS_RGB")return"rgb("+i+","+n+","+o+")";if(t==="CSS_RGBA")return"rgba("+i+","+n+","+o+","+a+")";if(t==="HEX")return"0x"+r.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+n+","+o+"]";if(t==="RGBA_ARRAY")return"["+i+","+n+","+o+","+a+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+n+",b:"+o+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+n+",b:"+o+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+s+",s:"+u+",v:"+l+"}";if(t==="HSVA_OBJ")return"{h:"+s+",s:"+u+",v:"+l+",a:"+a+"}"}return"unknown format"}var Jc=Array.prototype.forEach,Xi=Array.prototype.slice,A={BREAK:{},extend:function(e){return this.each(Xi.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(n){this.isUndefined(t[n])||(e[n]=t[n])}.bind(this))},this),e},defaults:function(e){return this.each(Xi.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach(function(n){this.isUndefined(e[n])&&(e[n]=t[n])}.bind(this))},this),e},compose:function(){var e=Xi.call(arguments);return function(){for(var t=Xi.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(!!e){if(Jc&&e.forEach&&e.forEach===Jc)e.forEach(t,i);else if(e.length===e.length+0){var n=void 0,o=void 0;for(n=0,o=e.length;n<o;n++)if(n in e&&t.call(i,e[n],n)===this.BREAK)return}else for(var a in e)if(t.call(i,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var n=void 0;return function(){var o=this,a=arguments;function s(){n=null,i||e.apply(o,a)}var u=i||!n;clearTimeout(n),n=setTimeout(s,t),u&&e.apply(o,a)}},toArray:function(e){return e.toArray?e.toArray():Xi.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(r){function e(t){return r.apply(this,arguments)}return e.toString=function(){return r.toString()},e}(function(r){return isNaN(r)}),isArray:Array.isArray||function(r){return r.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},Q1=[{litmus:A.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Qr},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Qr},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Qr},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Qr}}},{litmus:A.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:A.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:A.isObject,conversions:{RGBA_OBJ:{read:function(e){return A.isNumber(e.r)&&A.isNumber(e.g)&&A.isNumber(e.b)&&A.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return A.isNumber(e.r)&&A.isNumber(e.g)&&A.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return A.isNumber(e.h)&&A.isNumber(e.s)&&A.isNumber(e.v)&&A.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return A.isNumber(e.h)&&A.isNumber(e.s)&&A.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Hi=void 0,Zn=void 0,$s=function(){Zn=!1;var e=arguments.length>1?A.toArray(arguments):arguments[0];return A.each(Q1,function(t){if(t.litmus(e))return A.each(t.conversions,function(i,n){if(Hi=i.read(e),Zn===!1&&Hi!==!1)return Zn=Hi,Hi.conversionName=n,Hi.conversion=i,A.BREAK}),A.BREAK}),Zn},Qc=void 0,Jn={hsv_to_rgb:function(e,t,i){var n=Math.floor(e/60)%6,o=e/60-Math.floor(e/60),a=i*(1-t),s=i*(1-o*t),u=i*(1-(1-o)*t),l=[[i,u,a],[s,i,a],[a,i,u],[a,s,i],[u,a,i],[i,a,s]][n];return{r:l[0]*255,g:l[1]*255,b:l[2]*255}},rgb_to_hsv:function(e,t,i){var n=Math.min(e,t,i),o=Math.max(e,t,i),a=o-n,s=void 0,u=void 0;if(o!==0)u=a/o;else return{h:NaN,s:0,v:0};return e===o?s=(t-i)/a:t===o?s=2+(i-e)/a:s=4+(e-t)/a,s/=6,s<0&&(s+=1),{h:s*360,s:u,v:o/255}},rgb_to_hex:function(e,t,i){var n=this.hex_with_component(0,2,e);return n=this.hex_with_component(n,1,t),n=this.hex_with_component(n,0,i),n},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(Qc=t*8)|e&~(255<<Qc)}},tT=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},se=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")},ue=function(){function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}}(),Ke=function r(e,t,i){e===null&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(n===void 0){var o=Object.getPrototypeOf(e);return o===null?void 0:r(o,t,i)}else{if("value"in n)return n.value;var a=n.get;return a===void 0?void 0:a.call(i)}},Ze=function(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):r.__proto__=e)},Je=function(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:r},St=function(){function r(){if(se(this,r),this.__state=$s.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return ue(r,[{key:"toString",value:function(){return Qr(this)}},{key:"toHexString",value:function(){return Qr(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),r}();function Ws(r,e,t){Object.defineProperty(r,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(St.recalculateRGB(this,e,t),this.__state[e])},set:function(n){this.__state.space!=="RGB"&&(St.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=n}})}function Ys(r,e){Object.defineProperty(r,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(St.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(St.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}St.recalculateRGB=function(r,e,t){if(r.__state.space==="HEX")r.__state[e]=Jn.component_from_hex(r.__state.hex,t);else if(r.__state.space==="HSV")A.extend(r.__state,Jn.hsv_to_rgb(r.__state.h,r.__state.s,r.__state.v));else throw new Error("Corrupted color state")};St.recalculateHSV=function(r){var e=Jn.rgb_to_hsv(r.r,r.g,r.b);A.extend(r.__state,{s:e.s,v:e.v}),A.isNaN(e.h)?A.isUndefined(r.__state.h)&&(r.__state.h=0):r.__state.h=e.h};St.COMPONENTS=["r","g","b","h","s","v","hex","a"];Ws(St.prototype,"r",2);Ws(St.prototype,"g",1);Ws(St.prototype,"b",0);Ys(St.prototype,"h");Ys(St.prototype,"s");Ys(St.prototype,"v");Object.defineProperty(St.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(St.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Jn.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var Er=function(){function r(e,t){se(this,r),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return ue(r,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),r}(),eT={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},td={};A.each(eT,function(r,e){A.each(r,function(t){td[t]=e})});var rT=/(\d+(\.\d+)?)px/;function be(r){if(r==="0"||A.isUndefined(r))return 0;var e=r.match(rT);return A.isNull(e)?0:parseFloat(e[1])}var w={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var n=i,o=t;A.isUndefined(o)&&(o=!0),A.isUndefined(n)&&(n=!0),e.style.position="absolute",o&&(e.style.left=0,e.style.right=0),n&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,n){var o=i||{},a=td[t];if(!a)throw new Error("Event type "+t+" not supported.");var s=document.createEvent(a);switch(a){case"MouseEvents":{var u=o.x||o.clientX||0,l=o.y||o.clientY||0;s.initMouseEvent(t,o.bubbles||!1,o.cancelable||!0,window,o.clickCount||1,0,0,u,l,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var h=s.initKeyboardEvent||s.initKeyEvent;A.defaults(o,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),h(t,o.bubbles||!1,o.cancelable,window,o.ctrlKey,o.altKey,o.shiftKey,o.metaKey,o.keyCode,o.charCode);break}default:{s.initEvent(t,o.bubbles||!1,o.cancelable||!0);break}}A.defaults(s,n),e.dispatchEvent(s)},bind:function(e,t,i,n){var o=n||!1;return e.addEventListener?e.addEventListener(t,i,o):e.attachEvent&&e.attachEvent("on"+t,i),w},unbind:function(e,t,i,n){var o=n||!1;return e.removeEventListener?e.removeEventListener(t,i,o):e.detachEvent&&e.detachEvent("on"+t,i),w},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return w},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),n=i.indexOf(t);n!==-1&&(i.splice(n,1),e.className=i.join(" "))}else e.className=void 0;return w},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return be(t["border-left-width"])+be(t["border-right-width"])+be(t["padding-left"])+be(t["padding-right"])+be(t.width)},getHeight:function(e){var t=getComputedStyle(e);return be(t["border-top-width"])+be(t["border-bottom-width"])+be(t["padding-top"])+be(t["padding-bottom"])+be(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},ed=function(r){Ze(e,r);function e(t,i){se(this,e);var n=Je(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=n;n.__prev=n.getValue(),n.__checkbox=document.createElement("input"),n.__checkbox.setAttribute("type","checkbox");function a(){o.setValue(!o.__prev)}return w.bind(n.__checkbox,"change",a,!1),n.domElement.appendChild(n.__checkbox),n.updateDisplay(),n}return ue(e,[{key:"setValue",value:function(i){var n=Ke(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),n}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Ke(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Er),iT=function(r){Ze(e,r);function e(t,i,n){se(this,e);var o=Je(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=n,s=o;if(o.__select=document.createElement("select"),A.isArray(a)){var u={};A.each(a,function(l){u[l]=l}),a=u}return A.each(a,function(l,h){var f=document.createElement("option");f.innerHTML=h,f.setAttribute("value",l),s.__select.appendChild(f)}),o.updateDisplay(),w.bind(o.__select,"change",function(){var l=this.options[this.selectedIndex].value;s.setValue(l)}),o.domElement.appendChild(o.__select),o}return ue(e,[{key:"setValue",value:function(i){var n=Ke(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),n}},{key:"updateDisplay",value:function(){return w.isActive(this.__select)?this:(this.__select.value=this.getValue(),Ke(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(Er),nT=function(r){Ze(e,r);function e(t,i){se(this,e);var n=Je(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),o=n;function a(){o.setValue(o.__input.value)}function s(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}return n.__input=document.createElement("input"),n.__input.setAttribute("type","text"),w.bind(n.__input,"keyup",a),w.bind(n.__input,"change",a),w.bind(n.__input,"blur",s),w.bind(n.__input,"keydown",function(u){u.keyCode===13&&this.blur()}),n.updateDisplay(),n.domElement.appendChild(n.__input),n}return ue(e,[{key:"updateDisplay",value:function(){return w.isActive(this.__input)||(this.__input.value=this.getValue()),Ke(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Er);function rd(r){var e=r.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var id=function(r){Ze(e,r);function e(t,i,n){se(this,e);var o=Je(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=n||{};return o.__min=a.min,o.__max=a.max,o.__step=a.step,A.isUndefined(o.__step)?o.initialValue===0?o.__impliedStep=1:o.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(o.initialValue))/Math.LN10))/10:o.__impliedStep=o.__step,o.__precision=rd(o.__impliedStep),o}return ue(e,[{key:"setValue",value:function(i){var n=i;return this.__min!==void 0&&n<this.__min?n=this.__min:this.__max!==void 0&&n>this.__max&&(n=this.__max),this.__step!==void 0&&n%this.__step!=0&&(n=Math.round(n/this.__step)*this.__step),Ke(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=rd(i),this}}]),e}(Er);function oT(r,e){var t=Math.pow(10,e);return Math.round(r*t)/t}var Qn=function(r){Ze(e,r);function e(t,i,n){se(this,e);var o=Je(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,n));o.__truncationSuspended=!1;var a=o,s=void 0;function u(){var _=parseFloat(a.__input.value);A.isNaN(_)||a.setValue(_)}function l(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function h(){l()}function f(_){var p=s-_.clientY;a.setValue(a.getValue()+p*a.__impliedStep),s=_.clientY}function c(){w.unbind(window,"mousemove",f),w.unbind(window,"mouseup",c),l()}function d(_){w.bind(window,"mousemove",f),w.bind(window,"mouseup",c),s=_.clientY}return o.__input=document.createElement("input"),o.__input.setAttribute("type","text"),w.bind(o.__input,"change",u),w.bind(o.__input,"blur",h),w.bind(o.__input,"mousedown",d),w.bind(o.__input,"keydown",function(_){_.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,l())}),o.updateDisplay(),o.domElement.appendChild(o.__input),o}return ue(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():oT(this.getValue(),this.__precision),Ke(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(id);function nd(r,e,t,i,n){return i+(n-i)*((r-e)/(t-e))}var qs=function(r){Ze(e,r);function e(t,i,n,o,a){se(this,e);var s=Je(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:n,max:o,step:a})),u=s;s.__background=document.createElement("div"),s.__foreground=document.createElement("div"),w.bind(s.__background,"mousedown",l),w.bind(s.__background,"touchstart",c),w.addClass(s.__background,"slider"),w.addClass(s.__foreground,"slider-fg");function l(p){document.activeElement.blur(),w.bind(window,"mousemove",h),w.bind(window,"mouseup",f),h(p)}function h(p){p.preventDefault();var v=u.__background.getBoundingClientRect();return u.setValue(nd(p.clientX,v.left,v.right,u.__min,u.__max)),!1}function f(){w.unbind(window,"mousemove",h),w.unbind(window,"mouseup",f),u.__onFinishChange&&u.__onFinishChange.call(u,u.getValue())}function c(p){p.touches.length===1&&(w.bind(window,"touchmove",d),w.bind(window,"touchend",_),d(p))}function d(p){var v=p.touches[0].clientX,m=u.__background.getBoundingClientRect();u.setValue(nd(v,m.left,m.right,u.__min,u.__max))}function _(){w.unbind(window,"touchmove",d),w.unbind(window,"touchend",_),u.__onFinishChange&&u.__onFinishChange.call(u,u.getValue())}return s.updateDisplay(),s.__background.appendChild(s.__foreground),s.domElement.appendChild(s.__background),s}return ue(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",Ke(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(id),od=function(r){Ze(e,r);function e(t,i,n){se(this,e);var o=Je(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=o;return o.__button=document.createElement("div"),o.__button.innerHTML=n===void 0?"Fire":n,w.bind(o.__button,"click",function(s){return s.preventDefault(),a.fire(),!1}),w.addClass(o.__button,"button"),o.domElement.appendChild(o.__button),o}return ue(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(Er),Ks=function(r){Ze(e,r);function e(t,i){se(this,e);var n=Je(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));n.__color=new St(n.getValue()),n.__temp=new St(0);var o=n;n.domElement=document.createElement("div"),w.makeSelectable(n.domElement,!1),n.__selector=document.createElement("div"),n.__selector.className="selector",n.__saturation_field=document.createElement("div"),n.__saturation_field.className="saturation-field",n.__field_knob=document.createElement("div"),n.__field_knob.className="field-knob",n.__field_knob_border="2px solid ",n.__hue_knob=document.createElement("div"),n.__hue_knob.className="hue-knob",n.__hue_field=document.createElement("div"),n.__hue_field.className="hue-field",n.__input=document.createElement("input"),n.__input.type="text",n.__input_textShadow="0 1px 1px ",w.bind(n.__input,"keydown",function(p){p.keyCode===13&&f.call(this)}),w.bind(n.__input,"blur",f),w.bind(n.__selector,"mousedown",function(){w.addClass(this,"drag").bind(window,"mouseup",function(){w.removeClass(o.__selector,"drag")})}),w.bind(n.__selector,"touchstart",function(){w.addClass(this,"drag").bind(window,"touchend",function(){w.removeClass(o.__selector,"drag")})});var a=document.createElement("div");A.extend(n.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),A.extend(n.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:n.__field_knob_border+(n.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),A.extend(n.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),A.extend(n.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),A.extend(a.style,{width:"100%",height:"100%",background:"none"}),ad(a,"top","rgba(0,0,0,0)","#000"),A.extend(n.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),sT(n.__hue_field),A.extend(n.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:n.__input_textShadow+"rgba(0,0,0,0.7)"}),w.bind(n.__saturation_field,"mousedown",s),w.bind(n.__saturation_field,"touchstart",s),w.bind(n.__field_knob,"mousedown",s),w.bind(n.__field_knob,"touchstart",s),w.bind(n.__hue_field,"mousedown",u),w.bind(n.__hue_field,"touchstart",u);function s(p){d(p),w.bind(window,"mousemove",d),w.bind(window,"touchmove",d),w.bind(window,"mouseup",l),w.bind(window,"touchend",l)}function u(p){_(p),w.bind(window,"mousemove",_),w.bind(window,"touchmove",_),w.bind(window,"mouseup",h),w.bind(window,"touchend",h)}function l(){w.unbind(window,"mousemove",d),w.unbind(window,"touchmove",d),w.unbind(window,"mouseup",l),w.unbind(window,"touchend",l),c()}function h(){w.unbind(window,"mousemove",_),w.unbind(window,"touchmove",_),w.unbind(window,"mouseup",h),w.unbind(window,"touchend",h),c()}function f(){var p=$s(this.value);p!==!1?(o.__color.__state=p,o.setValue(o.__color.toOriginal())):this.value=o.__color.toString()}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.__color.toOriginal())}n.__saturation_field.appendChild(a),n.__selector.appendChild(n.__field_knob),n.__selector.appendChild(n.__saturation_field),n.__selector.appendChild(n.__hue_field),n.__hue_field.appendChild(n.__hue_knob),n.domElement.appendChild(n.__input),n.domElement.appendChild(n.__selector),n.updateDisplay();function d(p){p.type.indexOf("touch")===-1&&p.preventDefault();var v=o.__saturation_field.getBoundingClientRect(),m=p.touches&&p.touches[0]||p,x=m.clientX,b=m.clientY,C=(x-v.left)/(v.right-v.left),y=1-(b-v.top)/(v.bottom-v.top);return y>1?y=1:y<0&&(y=0),C>1?C=1:C<0&&(C=0),o.__color.v=y,o.__color.s=C,o.setValue(o.__color.toOriginal()),!1}function _(p){p.type.indexOf("touch")===-1&&p.preventDefault();var v=o.__hue_field.getBoundingClientRect(),m=p.touches&&p.touches[0]||p,x=m.clientY,b=1-(x-v.top)/(v.bottom-v.top);return b>1?b=1:b<0&&(b=0),o.__color.h=b*360,o.setValue(o.__color.toOriginal()),!1}return n}return ue(e,[{key:"updateDisplay",value:function(){var i=$s(this.getValue());if(i!==!1){var n=!1;A.each(St.COMPONENTS,function(s){if(!A.isUndefined(i[s])&&!A.isUndefined(this.__color.__state[s])&&i[s]!==this.__color.__state[s])return n=!0,{}},this),n&&A.extend(this.__color.__state,i)}A.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var o=this.__color.v<.5||this.__color.s>.5?255:0,a=255-o;A.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+o+","+o+","+o+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,ad(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),A.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+o+","+o+","+o+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(Er),aT=["-moz-","-o-","-webkit-","-ms-",""];function ad(r,e,t,i){r.style.background="",A.each(aT,function(n){r.style.cssText+="background: "+n+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function sT(r){r.style.background="",r.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",r.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",r.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var uT={load:function(e,t){var i=t||document,n=i.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,i.getElementsByTagName("head")[0].appendChild(n)},inject:function(e,t){var i=t||document,n=document.createElement("style");n.type="text/css",n.innerHTML=e;var o=i.getElementsByTagName("head")[0];try{o.appendChild(n)}catch{}}},lT=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,hT=function(e,t){var i=e[t];return A.isArray(arguments[2])||A.isObject(arguments[2])?new iT(e,t,arguments[2]):A.isNumber(i)?A.isNumber(arguments[2])&&A.isNumber(arguments[3])?A.isNumber(arguments[4])?new qs(e,t,arguments[2],arguments[3],arguments[4]):new qs(e,t,arguments[2],arguments[3]):A.isNumber(arguments[4])?new Qn(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Qn(e,t,{min:arguments[2],max:arguments[3]}):A.isString(i)?new nT(e,t):A.isFunction(i)?new od(e,t,""):A.isBoolean(i)?new ed(e,t):null};function fT(r){setTimeout(r,1e3/60)}var cT=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||fT,dT=function(){function r(){se(this,r),this.backgroundElement=document.createElement("div"),A.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),w.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),A.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;w.bind(this.backgroundElement,"click",function(){e.hide()})}return ue(r,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),A.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function n(){t.domElement.style.display="none",t.backgroundElement.style.display="none",w.unbind(t.domElement,"webkitTransitionEnd",n),w.unbind(t.domElement,"transitionend",n),w.unbind(t.domElement,"oTransitionEnd",n)};w.bind(this.domElement,"webkitTransitionEnd",i),w.bind(this.domElement,"transitionend",i),w.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-w.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-w.getHeight(this.domElement)/2+"px"}}]),r}(),pT=J1(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);uT.inject(pT);var sd="dg",ud=72,ld=20,ji="Default",zi=function(){try{return!!window.localStorage}catch{return!1}}(),Vi=void 0,hd=!0,ti=void 0,Zs=!1,fd=[],st=function r(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),w.addClass(this.domElement,sd),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=A.defaults(i,{closeOnTop:!1,autoPlace:!0,width:r.DEFAULT_WIDTH}),i=A.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),A.isUndefined(i.load)?i.load={preset:ji}:i.preset&&(i.load.preset=i.preset),A.isUndefined(i.parent)&&i.hideable&&fd.push(this),i.resizable=A.isUndefined(i.parent)&&i.resizable,i.autoPlace&&A.isUndefined(i.scrollable)&&(i.scrollable=!0);var n=zi&&localStorage.getItem(ei(this,"isLocal"))==="true",o=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(c){t.parent?t.getRoot().preset=c:i.load.preset=c,gT(this),t.revert()}},width:{get:function(){return i.width},set:function(c){i.width=c,eu(t,c)}},name:{get:function(){return i.name},set:function(c){i.name=c,a&&(a.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(c){i.closed=c,i.closed?w.addClass(t.__ul,r.CLASS_CLOSED):w.removeClass(t.__ul,r.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=c?r.TEXT_OPEN:r.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return n},set:function(c){zi&&(n=c,c?w.bind(window,"unload",o):w.unbind(window,"unload",o),localStorage.setItem(ei(t,"isLocal"),c))}}}),A.isUndefined(i.parent)){if(this.closed=i.closed||!1,w.addClass(this.domElement,r.CLASS_MAIN),w.makeSelectable(this.domElement,!1),zi&&n){t.useLocalStorage=!0;var s=localStorage.getItem(ei(this,"gui"));s&&(i.load=JSON.parse(s))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=r.TEXT_CLOSED,w.addClass(this.__closeButton,r.CLASS_CLOSE_BUTTON),i.closeOnTop?(w.addClass(this.__closeButton,r.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(w.addClass(this.__closeButton,r.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),w.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var u=document.createTextNode(i.name);w.addClass(u,"controller-name"),a=Js(t,u);var l=function(c){return c.preventDefault(),t.closed=!t.closed,!1};w.addClass(this.__ul,r.CLASS_CLOSED),w.addClass(a,"title"),w.bind(a,"click",l),i.closed||(this.closed=!1)}i.autoPlace&&(A.isUndefined(i.parent)&&(hd&&(ti=document.createElement("div"),w.addClass(ti,sd),w.addClass(ti,r.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(ti),hd=!1),ti.appendChild(this.domElement),w.addClass(this.domElement,r.CLASS_AUTO_PLACE)),this.parent||eu(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},w.bind(window,"resize",this.__resizeHandler),w.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),w.bind(this.__ul,"transitionend",this.__resizeHandler),w.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&mT(this),o=function(){zi&&localStorage.getItem(ei(t,"isLocal"))==="true"&&localStorage.setItem(ei(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=o;function h(){var f=t.getRoot();f.width+=1,A.defer(function(){f.width-=1})}i.parent||h()};st.toggleHide=function(){Zs=!Zs,A.each(fd,function(r){r.domElement.style.display=Zs?"none":""})};st.CLASS_AUTO_PLACE="a";st.CLASS_AUTO_PLACE_CONTAINER="ac";st.CLASS_MAIN="main";st.CLASS_CONTROLLER_ROW="cr";st.CLASS_TOO_TALL="taller-than-window";st.CLASS_CLOSED="closed";st.CLASS_CLOSE_BUTTON="close-button";st.CLASS_CLOSE_TOP="close-top";st.CLASS_CLOSE_BOTTOM="close-bottom";st.CLASS_DRAG="drag";st.DEFAULT_WIDTH=245;st.TEXT_CLOSED="Close Controls";st.TEXT_OPEN="Open Controls";st._keydownHandler=function(r){document.activeElement.type!=="text"&&(r.which===ud||r.keyCode===ud)&&st.toggleHide()};w.bind(window,"keydown",st._keydownHandler,!1);A.extend(st.prototype,{add:function(e,t){return $i(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return $i(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;A.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&ti.removeChild(this.domElement);var e=this;A.each(this.__folders,function(t){e.removeFolder(t)}),w.unbind(window,"keydown",st._keydownHandler,!1),cd(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new st(t);this.__folders[e]=i;var n=Js(this,i.domElement);return w.addClass(n,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],cd(e);var t=this;A.each(e.__folders,function(i){e.removeFolder(i)}),A.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=w.getOffset(e.__ul).top,i=0;A.each(e.__ul.childNodes,function(n){e.autoPlace&&n===e.__save_row||(i+=w.getHeight(n))}),window.innerHeight-t-ld<i?(w.addClass(e.domElement,st.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-ld+"px"):(w.removeClass(e.domElement,st.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&A.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:A.debounce(function(){this.onResize()},50),remember:function(){if(A.isUndefined(Vi)&&(Vi=new dT,Vi.domElement.innerHTML=lT),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;A.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&vT(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&eu(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=to(this)),e.folders={},A.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=to(this),Qs(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[ji]=to(this,!0)),this.load.remembered[e]=to(this),this.preset=e,tu(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){A.each(this.__controllers,function(t){this.getRoot().load.remembered?dd(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),A.each(this.__folders,function(t){t.revert(t)}),e||Qs(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&_d(this.__listening)},updateDisplay:function(){A.each(this.__controllers,function(e){e.updateDisplay()}),A.each(this.__folders,function(e){e.updateDisplay()})}});function Js(r,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?r.__ul.insertBefore(i,t):r.__ul.appendChild(i),r.onResize(),i}function cd(r){w.unbind(window,"resize",r.__resizeHandler),r.saveToLocalStorageIfPossible&&w.unbind(window,"unload",r.saveToLocalStorageIfPossible)}function Qs(r,e){var t=r.__preset_select[r.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function _T(r,e,t){if(t.__li=e,t.__gui=r,A.extend(t,{options:function(a){if(arguments.length>1){var s=t.__li.nextElementSibling;return t.remove(),$i(r,t.object,t.property,{before:s,factoryArgs:[A.toArray(arguments)]})}if(A.isArray(a)||A.isObject(a)){var u=t.__li.nextElementSibling;return t.remove(),$i(r,t.object,t.property,{before:u,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof qs){var i=new Qn(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});A.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(o){var a=t[o],s=i[o];t[o]=i[o]=function(){var u=Array.prototype.slice.call(arguments);return s.apply(i,u),a.apply(t,u)}}),w.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof Qn){var n=function(a){if(A.isNumber(t.__min)&&A.isNumber(t.__max)){var s=t.__li.firstElementChild.firstElementChild.innerHTML,u=t.__gui.__listening.indexOf(t)>-1;t.remove();var l=$i(r,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return l.name(s),u&&l.listen(),l}return a};t.min=A.compose(n,t.min),t.max=A.compose(n,t.max)}else t instanceof ed?(w.bind(e,"click",function(){w.fakeEvent(t.__checkbox,"click")}),w.bind(t.__checkbox,"click",function(o){o.stopPropagation()})):t instanceof od?(w.bind(e,"click",function(){w.fakeEvent(t.__button,"click")}),w.bind(e,"mouseover",function(){w.addClass(t.__button,"hover")}),w.bind(e,"mouseout",function(){w.removeClass(t.__button,"hover")})):t instanceof Ks&&(w.addClass(e,"color"),t.updateDisplay=A.compose(function(o){return e.style.borderLeftColor=t.__color.toString(),o},t.updateDisplay),t.updateDisplay());t.setValue=A.compose(function(o){return r.getRoot().__preset_select&&t.isModified()&&Qs(r.getRoot(),!0),o},t.setValue)}function dd(r,e){var t=r.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var n=t.__rememberedObjectIndecesToControllers[i];if(n===void 0&&(n={},t.__rememberedObjectIndecesToControllers[i]=n),n[e.property]=e,t.load&&t.load.remembered){var o=t.load.remembered,a=void 0;if(o[r.preset])a=o[r.preset];else if(o[ji])a=o[ji];else return;if(a[i]&&a[i][e.property]!==void 0){var s=a[i][e.property];e.initialValue=s,e.setValue(s)}}}}function $i(r,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var n=void 0;if(i.color)n=new Ks(e,t);else{var o=[e,t].concat(i.factoryArgs);n=hT.apply(r,o)}i.before instanceof Er&&(i.before=i.before.__li),dd(r,n),w.addClass(n.domElement,"c");var a=document.createElement("span");w.addClass(a,"property-name"),a.innerHTML=n.property;var s=document.createElement("div");s.appendChild(a),s.appendChild(n.domElement);var u=Js(r,s,i.before);return w.addClass(u,st.CLASS_CONTROLLER_ROW),n instanceof Ks?w.addClass(u,"color"):w.addClass(u,tT(n.getValue())),_T(r,u,n),r.__controllers.push(n),n}function ei(r,e){return document.location.href+"."+e}function tu(r,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,r.__preset_select.appendChild(i),t&&(r.__preset_select.selectedIndex=r.__preset_select.length-1)}function pd(r,e){e.style.display=r.useLocalStorage?"block":"none"}function vT(r){var e=r.__save_row=document.createElement("li");w.addClass(r.domElement,"has-save"),r.__ul.insertBefore(e,r.__ul.firstChild),w.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",w.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",w.addClass(i,"button"),w.addClass(i,"save");var n=document.createElement("span");n.innerHTML="New",w.addClass(n,"button"),w.addClass(n,"save-as");var o=document.createElement("span");o.innerHTML="Revert",w.addClass(o,"button"),w.addClass(o,"revert");var a=r.__preset_select=document.createElement("select");if(r.load&&r.load.remembered?A.each(r.load.remembered,function(f,c){tu(r,c,c===r.preset)}):tu(r,ji,!1),w.bind(a,"change",function(){for(var f=0;f<r.__preset_select.length;f++)r.__preset_select[f].innerHTML=r.__preset_select[f].value;r.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(i),e.appendChild(n),e.appendChild(o),zi){var s=document.getElementById("dg-local-explain"),u=document.getElementById("dg-local-storage"),l=document.getElementById("dg-save-locally");l.style.display="block",localStorage.getItem(ei(r,"isLocal"))==="true"&&u.setAttribute("checked","checked"),pd(r,s),w.bind(u,"change",function(){r.useLocalStorage=!r.useLocalStorage,pd(r,s)})}var h=document.getElementById("dg-new-constructor");w.bind(h,"keydown",function(f){f.metaKey&&(f.which===67||f.keyCode===67)&&Vi.hide()}),w.bind(t,"click",function(){h.innerHTML=JSON.stringify(r.getSaveObject(),void 0,2),Vi.show(),h.focus(),h.select()}),w.bind(i,"click",function(){r.save()}),w.bind(n,"click",function(){var f=prompt("Enter a new preset name.");f&&r.saveAs(f)}),w.bind(o,"click",function(){r.revert()})}function mT(r){var e=void 0;r.__resize_handle=document.createElement("div"),A.extend(r.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(o){return o.preventDefault(),r.width+=e-o.clientX,r.onResize(),e=o.clientX,!1}function i(){w.removeClass(r.__closeButton,st.CLASS_DRAG),w.unbind(window,"mousemove",t),w.unbind(window,"mouseup",i)}function n(o){return o.preventDefault(),e=o.clientX,w.addClass(r.__closeButton,st.CLASS_DRAG),w.bind(window,"mousemove",t),w.bind(window,"mouseup",i),!1}w.bind(r.__resize_handle,"mousedown",n),w.bind(r.__closeButton,"mousedown",n),r.domElement.insertBefore(r.__resize_handle,r.domElement.firstElementChild)}function eu(r,e){r.domElement.style.width=e+"px",r.__save_row&&r.autoPlace&&(r.__save_row.style.width=e+"px"),r.__closeButton&&(r.__closeButton.style.width=e+"px")}function to(r,e){var t={};return A.each(r.__rememberedObjects,function(i,n){var o={},a=r.__rememberedObjectIndecesToControllers[n];A.each(a,function(s,u){o[u]=e?s.initialValue:s.getValue()}),t[n]=o}),t}function gT(r){for(var e=0;e<r.__preset_select.length;e++)r.__preset_select[e].value===r.preset&&(r.__preset_select.selectedIndex=e)}function _d(r){r.length!==0&&cT.call(window,function(){_d(r)}),A.each(r,function(e){e.updateDisplay()})}var xT=st;export{ra as A,ve as C,Xh as G,J as P,Ti as S,jh as T,xT as a,yT as b,sn as c,sb as g};
