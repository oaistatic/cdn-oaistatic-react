import{j as t,r as j,a7 as M,a5 as A,M as R,n as D}from"./fs6h2trisr1juto6.js";import{cL as E,fH as P,B as S}from"./cyi7nanrg0vdotzd.js";import{u as I,g as L,f as N,C as h,A as k,a as V,b}from"./juhoq7zcvi40kvvr.js";import{a as z,T as H,b as F}from"./mi5k2suvbiot8uwb.js";import{cS as O,c as W,cT as $,cU as q,cV as v,cW as U,cX as _}from"./df9u9imhvwerk6zv.js";const Z=({size:i="large",position:r="bottom"})=>{const o=E(),a=i==="large"?"4em":"50px",s=`${o?"rgba(0,0,0,0)":"rgba(255,255,255,0)"}, ${o?"#2f2f2f":"#ffffff"}`;return r==="bottom"?t.jsx("div",{className:"absolute bottom-0 z-20 h-24 w-full transition-colors",style:{height:a,background:`linear-gradient(${s})`}}):t.jsx("div",{className:"absolute bottom-0 right-0 top-0 z-20 transition-colors",style:{width:a,background:`linear-gradient(to right, ${s})`}})},G=()=>t.jsxs(A.div,{role:"button",className:"absolute bottom-3 left-0 right-0 z-50 mx-auto flex w-fit items-baseline gap-1 rounded-full border border-token-border-light bg-token-main-surface-primary px-3 py-1",initial:!1,animate:{opacity:1},exit:{opacity:0,scale:.9},children:[t.jsx("span",{className:"loading-shimmer-pure-text",children:t.jsx(R,{...D({id:"qmLYih",defaultMessage:"Typing"})})}),t.jsx(H,{gap:1,padding:0})]}),Y=({onScroll:i,textdocId:r,disableScroll:o=!1})=>{const a=O(),s=W(r),{windowWidth:C}=P(y=>y,{windowWidth:0,windowHeight:0}),c=I();if(!s)return null;const{versions:n}=s,e=S(n);if(!e)return null;const m=n.length>1?n[n.length-2]:null,d=$(e),u=q(e),w=v(e),g=F({isReadonlyFromQueryParam:!0}),{content:x,currentlyStreamingLineIndex:T}=L(e,m),f=c?N(e.comments):[],p=c?h.ALL_HIDDEN:h.COMMENTS_READONLY;let l=null;switch(e?.type){case _.DOCUMENT:l=t.jsx(V,{value:x,previousValue:m?.content,comments:f,isRequestActive:d,isRewriting:u,isPreview:!0,isDisabled:!0,hideAccelerators:!0,commentsMode:p,readonlyReason:g,hideToolbar:!0,hideEditOverlay:!0,width:C,modelCursor:w||d&&!u?e?.modelCursor:void 0,metadata:s.metadata});break;default:e&&U(e.type)&&(l=t.jsx(k,{id:"codemirror",currentlyStreamingLineIndex:T,language:z(e.type),value:x,commentsMode:p,hideToolbar:!0,hideAccelerators:!0,isPreview:!0,readonlyReason:g,comments:f,isRequestActive:d}))}return t.jsxs(b,{children:[t.jsx(b.Content,{disableScroll:o||!a,onScroll:i,children:l}),t.jsx(M,{children:v(e)&&!c&&t.jsx(G,{})})]})},ee=j.memo(Y);export{Z as C,ee as T};
//# sourceMappingURL=ea9kyg94i6ia0yd7.js.map
