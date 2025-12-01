const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/f4o6bjqe90k350te.js","assets/mw35uwhq4g8r9eam.js"])))=>i.map(i=>d[i]);
import{r as l,R as D,_ as P}from"./mw35uwhq4g8r9eam.js";var S={exports:{}},_={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h;function M(){if(h)return _;h=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function s(u,r,t){var a=null;if(t!==void 0&&(a=""+t),r.key!==void 0&&(a=""+r.key),"key"in r){t={};for(var o in r)o!=="key"&&(t[o]=r[o])}else t=r;return r=t.ref,{$$typeof:n,type:u,key:a,ref:r!==void 0?r:null,props:t}}return _.Fragment=e,_.jsx=s,_.jsxs=s,_}var N;function U(){return N||(N=1,S.exports=M()),S.exports}var H=U(),k={exports:{}},A={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O;function Y(){if(O)return A;O=1;var n=D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return A.c=function(e){return n.H.useMemoCache(e)},A}var j;function $(){return j||(j=1,k.exports=Y()),k.exports}var z=$();let b=null;const L=()=>(b!=null||(b=P(()=>import("./f4o6bjqe90k350te.js"),__vite__mapDeps([0,1])).then(n=>n.r).then(n=>{n.registerTag()})),b);function B(n){const e=z.c(15),{widget:s,theme:u,mapboxAccessToken:r,streaming:t,className:a,onAction:o,onError:f}=n,c=l.useRef(null);let d;e[0]===Symbol.for("react.memo_cache_sentinel")?(d=[],e[0]=d):d=e[0],l.useEffect(F,d);let m,v;e[1]!==o?(m=()=>{if(!c.current||!o)return;const i=new AbortController;return c.current.addEventListener("dil.action",y=>{const{detail:T}=y,{action:C,resolve:w,reject:I}=T;o(C).then(w,I)},{signal:i.signal}),()=>{i.abort()}},v=[o],e[1]=o,e[2]=m,e[3]=v):(m=e[2],v=e[3]),l.useEffect(m,v);let p,x;e[4]!==f?(p=()=>{if(!c.current||!f)return;const i=new AbortController;return c.current.addEventListener("dil.error",y=>{const{error:T}=y;f(T)},{signal:i.signal}),()=>{i.abort()}},x=[f],e[4]=f,e[5]=p,e[6]=x):(p=e[5],x=e[6]),l.useEffect(p,x);let E,g;e[7]!==r||e[8]!==t||e[9]!==u||e[10]!==s?(E=()=>{if(!c.current)return;const i=c.current;L().then(()=>{i.setState({widget:s,theme:u,streaming:t,mapboxAccessToken:r})})},g=[s,u,t,r],e[7]=r,e[8]=t,e[9]=u,e[10]=s,e[11]=E,e[12]=g):(E=e[11],g=e[12]),l.useEffect(E,g);let R;return e[13]!==a?(R=H.jsx("dil-renderer",{ref:c,className:a}),e[13]=a,e[14]=R):R=e[14],R}function F(){L()}const K=Object.freeze(Object.defineProperty({__proto__:null,DILRenderer:B},Symbol.toStringTag,{value:"Module"}));export{H as d,K as i,z as v};
//# sourceMappingURL=lzud3zwhg0rbdcj0.js.map
