import{g as _,r as u,j as o,au as N,c as w}from"./cg166fqqcxkeiosv.js";import{T as H}from"./g6yzyuzg2o1kdt74.js";import{ds as R,dt as $,du as G,dv as V}from"./j4xe1fdohr6xk09p.js";import{D}from"./b8ehjiqbpws5o9du.js";import{C as E,T as K}from"./gdjo2ai11w0vwlbz.js";import{S as Z}from"./o7y8vv0pyx5ynse6.js";import{g5 as q,d as h,c1 as J}from"./dze2l9y9kn6nwat0.js";import{P as T}from"./7ckqochw7zdn18vj.js";import{_ as Q}from"./isjdmfmhzv09v01t.js";import{g as X}from"./btagl6w1gub4aw61.js";import"./f55klt1ppf2qkvcm.js";var Y=Q,C=R,v=q,F=parseFloat,U=Math.min,z=Math.random;function P(e,t,n){if(n&&typeof n!="boolean"&&C(e,t,n)&&(t=n=void 0),n===void 0&&(typeof t=="boolean"?(n=t,t=void 0):typeof e=="boolean"&&(n=e,e=void 0)),e===void 0&&t===void 0?(e=0,t=1):(e=v(e),t===void 0?(t=e,e=0):t=v(t)),e>t){var m=e;e=t,t=m}if(n||e%1||t%1){var d=z();return U(e+d*(t-e+F("1e-"+((d+"").length-1))),t)}return Y(e,t)}var I=P;const O=_(I),tt=({isHovered:e=!1})=>{const t=w();return o.jsx(J,{label:t.formatMessage({id:"KMbgyZ",defaultMessage:"Open in canvas"}),children:o.jsx(N.div,{role:"button",animate:{opacity:e?1:.64},whileHover:{opacity:1},transition:{type:"tween",duration:.18},className:"text-token-text-secondary transition-colors",children:o.jsx(Z,{className:"icon-md"})})})},et=({isCanvasOpen:e,isFocused:t,isHovered:n,isInlinePreview:m,size:d})=>e?t?"0px 2px 6px 0px rgba(0, 0, 0, 0.06)":"0px 2px 6px 0px rgba(0, 0, 0, 0)":m?n||t?`0px ${d==="large"?12:4}px ${d==="large"?32:10}px 0px rgba(0, 0, 0, 0.064)`:`0px ${d==="large"?6:4}px ${d==="large"?14:4}px 0px rgba(0, 0, 0, 0.04)`:"0px 2px 6px 0px rgba(0, 0, 0, 0)",at=({textdocId:e,name:t,tag:n,icon:m,iconSelected:d,marginBottom:g,size:f="large",height:b=f==="large"?"22rem":"10rem",isCanvasOpen:a=!1,isDisabled:c=!1,isFocused:l=!1,isInferring:j=!1,isInlinePreview:r=!1,isStreaming:x=!1,isUserMessage:i=!1,onClick:p,children:y})=>{const k=u.useRef(null),[s,M]=u.useState(!1),[A]=u.useState(()=>O(100,180,!1)),S=l&&a?d??m:m,L=S?o.jsx("span",{className:h("flex-shrink-0 transition-[filter]",{grayscale:!l&&!s}),children:S}):o.jsx("div",{className:"flex h-5 w-[18px] flex-shrink-0 items-center overflow-hidden",children:o.jsx(T,{lines:1,size:"base",width:100,widthVariance:0})}),B=!t||j?o.jsx("div",{className:"flex h-6 flex-grow items-center overflow-hidden",style:{width:A},children:o.jsx(T,{lines:1,size:"base",width:100,widthVariance:0})}):o.jsx("span",{className:"min-w-0 truncate",children:t}),W=()=>{!k.current||c||($.logButtonClick(G.MESSAGE_ATTACHMENT,{type:n}),V(k.current),p?.())};return o.jsxs(N.div,{role:"button",id:X(e),initial:{opacity:x?0:1,scale:x?.9:1},animate:{opacity:1,scale:1},transition:{type:"spring",bounce:0,duration:.72},className:h("popover relative z-0 flex select-none flex-col overflow-hidden border bg-token-main-surface-primary transition-shadow duration-500",c?"cursor-default":"cursor-pointer",{"border-token-text-tertiary font-medium dark:border-gray-600":l&&a,"font-regular":!l,"border-token-border-light":!s&&!l,"border-token-border-medium":s&&!l,"flex min-w-0 flex-shrink flex-grow-0 items-center justify-between self-start rounded-xl":a||!r,"rounded-2xl":!a&&r,"max-w-full":!i&&(a||!r),"max-w-[var(--user-chat-width,70%)]":i&&(a||!r),"w-full":!i&&!a&&r,"w-[var(--user-chat-width,70%)]":i&&!a&&r}),onMouseEnter:()=>!c&&M(!0),onMouseLeave:()=>M(!1),onClick:W,ref:k,style:{marginBottom:g,height:r&&!a?b:void 0,width:f==="small"?"300px":void 0,boxShadow:et({isCanvasOpen:a,isFocused:l,isHovered:s,isInlinePreview:r,size:f})},children:[o.jsxs("div",{className:h("flex w-full min-w-0 items-center justify-between gap-2 self-start border-token-border-light px-4 transition-colors duration-700",{"border-token-border-light":!s&&!l,"border-token-border-medium":s&&!l,"text-sm font-medium text-token-text-primary":!a&&s&&r,"py-2":a||!r,"py-3":!a&&r,"text-sm font-medium text-token-text-secondary":!a&&!s&&r}),children:[o.jsxs("div",{className:h("flex min-w-0 items-center",{"gap-2":a||!r,"gap-3.5":!a&&r}),children:[L,B]}),a?o.jsx(N.span,{animate:x?"show":"initial",variants:{initial:{opacity:0,paddingLeft:0,width:"0"},show:{opacity:1,paddingLeft:2,width:"24px"}},transition:{type:"tween",duration:.18},children:x&&o.jsx(H,{gap:1,padding:0})}):r&&!c?o.jsx(tt,{isHovered:s}):null]}),o.jsxs("div",{className:"relative flex min-h-0 w-full flex-1 flex-col self-end",children:[!a&&y,r&&!a&&o.jsx(E,{size:f,position:"bottom"}),r&&f==="small"&&!a&&o.jsx(E,{size:f,position:"right"})]})]})},ht=({textdocId:e,name:t,tag:n,icon:m,iconSelected:d,isCanvasOpen:g=!1,isFetching:f=!1,isFocused:b=!1,isInlinePreview:a=!1,isStreaming:c=!1,isUserMessage:l=!1,onClick:j})=>{const[r,x]=u.useState(!1),i=y=>{x(y>0)},p=a&&!g?16:12;return o.jsx(at,{textdocId:e,name:t,tag:n,icon:m,iconSelected:d,marginBottom:p,isCanvasOpen:g,isFocused:b,isInlinePreview:a,isStreaming:c,isUserMessage:l,onClick:j,children:a&&o.jsx("div",{className:h("relative flex min-h-0 flex-auto flex-col overflow-hidden border-t transition-colors",{"border-token-border-light":r,"border-transparent":!r}),children:f?o.jsx(D,{}):!!e&&o.jsx(K,{onScroll:i,textdocId:e})})})};export{ht as CanvasMessageAttachment,at as CanvasMessageAttachmentWrapper};
//# sourceMappingURL=fnq62gwb4tlugsj1.js.map
