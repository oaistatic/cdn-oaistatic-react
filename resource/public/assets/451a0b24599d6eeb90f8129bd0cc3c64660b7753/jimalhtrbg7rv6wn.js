import{j as e,r as w,aw as v,au as C,M as T}from"./cg166fqqcxkeiosv.js";import{bx as y,eQ as M,fW as j,o as A,eu as R}from"./mwlpozqwnbys03vp.js";import{g as N,A as P,C as g,a as S,b as x}from"./euxxc9e4zh86bdsx.js";import{g as D,T as E,a as k}from"./j8x3nt0b4atg14yj.js";import{c as L,d1 as O,d2 as z,d3 as V,d4 as F,d5 as I}from"./d5k5wa3zyqlgc9bk.js";const Q=({size:i="large",position:n="bottom"})=>{const o=y(),a=i==="large"?"4em":"50px",s=`${o?"rgba(0,0,0,0)":"rgba(255,255,255,0)"}, ${o?"#2f2f2f":"#ffffff"}`;return n==="bottom"?e.jsx("div",{className:"absolute bottom-0 z-20 h-24 w-full transition-colors",style:{height:a,background:`linear-gradient(${s})`}}):e.jsx("div",{className:"absolute bottom-0 right-0 top-0 z-20 transition-colors",style:{width:a,background:`linear-gradient(to right, ${s})`}})},W=()=>e.jsxs(C.div,{role:"button",className:"absolute bottom-3 left-0 right-0 z-50 mx-auto flex w-fit items-baseline gap-1 rounded-full border border-token-border-light bg-token-main-surface-primary px-3 py-1",initial:!1,animate:{opacity:1},exit:{opacity:0,scale:.9},children:[e.jsx("span",{className:"loading-shimmer-pure-text",children:e.jsx(T,{...R({id:"qmLYih",defaultMessage:"Typing"})})}),e.jsx(E,{gap:1,padding:0})]}),$=({onScroll:i,textdocId:n,disableScroll:o=!1})=>{const a=M(),s=L(n),{windowWidth:p}=j(b=>b,{windowWidth:0,windowHeight:0});if(!s)return null;const{versions:r}=s,t=A(r);if(!t)return null;const c=r.length>1?r[r.length-2]:null,l=O(t),h=z(t),m=k({isReadonlyFromQueryParam:!0}),{content:u,currentlyStreamingLineIndex:f}=N(t,c);let d=null;switch(t?.type){case F.DOCUMENT:d=e.jsx(S,{value:u,previousValue:c?.content,comments:[],isRequestActive:l,isRewriting:h,isPreview:!0,isDisabled:!0,hideAccelerators:!0,commentsMode:g.COMMENTS_READONLY,readonlyReason:m,hideToolbar:!0,hideEditOverlay:!0,width:p,modelCursor:t.modelCursor,metadata:s.metadata});break;default:t&&V(t.type)&&(d=e.jsx(P,{id:"codemirror",currentlyStreamingLineIndex:f,language:D(t.type),value:u,commentsMode:g.COMMENTS_READONLY,hideToolbar:!0,hideAccelerators:!0,isPreview:!0,readonlyReason:m,comments:[],isRequestActive:l}))}return e.jsxs(x,{children:[e.jsx(x.Content,{disableScroll:o||!a,onScroll:i,children:d}),e.jsx(v,{children:I(t)&&e.jsx(W,{})})]})},U=w.memo($);export{Q as C,U as T};
//# sourceMappingURL=jimalhtrbg7rv6wn.js.map
