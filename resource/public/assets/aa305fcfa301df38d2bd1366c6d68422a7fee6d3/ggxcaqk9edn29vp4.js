const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/oj31usi4u8qrwlmd.js","assets/bubexfvksfr7893o.js"])))=>i.map(i=>d[i]);
import{r as l,R as I,_ as D}from"./bubexfvksfr7893o.js";var S={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T;function P(){if(T)return f;T=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(i,r,t){var o=null;if(t!==void 0&&(o=""+t),r.key!==void 0&&(o=""+r.key),"key"in r){t={};for(var s in r)s!=="key"&&(t[s]=r[s])}else t=r;return r=t.ref,{$$typeof:n,type:i,key:o,ref:r!==void 0?r:null,props:t}}return f.Fragment=e,f.jsx=a,f.jsxs=a,f}var A;function U(){return A||(A=1,S.exports=P()),S.exports}var F=U(),N={exports:{}},h={};/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O;function H(){if(O)return h;O=1;var n=I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;return h.c=function(e){return n.H.useMemoCache(e)},h}var j;function M(){return j||(j=1,N.exports=H()),N.exports}var Y=M();let y=null;const k=()=>(y!=null||(y=D(()=>import("./oj31usi4u8qrwlmd.js"),__vite__mapDeps([0,1])).then(n=>n.r).then(n=>{n.registerTag()})),y);function $(n){const e=Y.c(14),{widget:a,theme:i,streaming:r,className:t,onAction:o,onError:s}=n,c=l.useRef(null);let _;e[0]===Symbol.for("react.memo_cache_sentinel")?(_=[],e[0]=_):_=e[0],l.useEffect(z,_);let d,v;e[1]!==o?(d=()=>{if(!c.current||!o)return;const u=new AbortController;return c.current.addEventListener("dil.action",x=>{const{detail:b}=x,{action:C,resolve:L,reject:w}=b;o(C).then(L,w)},{signal:u.signal}),()=>{u.abort()}},v=[o],e[1]=o,e[2]=d,e[3]=v):(d=e[2],v=e[3]),l.useEffect(d,v);let m,p;e[4]!==s?(m=()=>{if(!c.current||!s)return;const u=new AbortController;return c.current.addEventListener("dil.error",x=>{const{error:b}=x;s(b)},{signal:u.signal}),()=>{u.abort()}},p=[s],e[4]=s,e[5]=m,e[6]=p):(m=e[5],p=e[6]),l.useEffect(m,p);let g,E;e[7]!==r||e[8]!==i||e[9]!==a?(g=()=>{if(!c.current)return;const u=c.current;k().then(()=>{u.setState({widget:a,theme:i,streaming:r})})},E=[a,i,r],e[7]=r,e[8]=i,e[9]=a,e[10]=g,e[11]=E):(g=e[10],E=e[11]),l.useEffect(g,E);let R;return e[12]!==t?(R=F.jsx("dil-renderer",{ref:c,className:t}),e[12]=t,e[13]=R):R=e[13],R}function z(){k()}const Q=Object.freeze(Object.defineProperty({__proto__:null,DILRenderer:$},Symbol.toStringTag,{value:"Module"}));export{F as d,Q as i,Y as v};
//# sourceMappingURL=ggxcaqk9edn29vp4.js.map
