import{j as e,M,r as l,a7 as U}from"./fs6h2trisr1juto6.js";import{c as D}from"./exwx6mc6hw49alht.js";import{ee as F,ef as S,eg as L,eh as R,ei as W,ej as B}from"./df9u9imhvwerk6zv.js";import{u as G}from"./j52f6094ws633vn3.js";import{d as v,c6 as O,cA as P}from"./cyi7nanrg0vdotzd.js";import{S as K}from"./crv164w6r8tn71zi.js";import"./kg9pnjn9ianmg7dc.js";import"./f3zzw463zuggq6da.js";import"./069jlavvvdusqrfm.js";import"./b22a1k4ozfgjkxq7.js";import"./juans7zh9ytz81kz.js";import"./e2l59f6c7bsm78ye.js";import"./b7o9536h4wpvjcqi.js";import"./k154o6a9h89usuus.js";import"./nlkl42j3n1q6imdw.js";import"./jo3x2yf4dp19h25k.js";const V=({pressed:a,onClick:t})=>{const o=e.jsx("div",{className:"whitespace-nowrap pl-1 pr-1 [display:--force-hide-label]",children:e.jsx(M,{id:"0MS4cd",defaultMessage:"Selection"})});return e.jsxs("div",{className:v("inline-flex max-h-9 min-h-9 rounded-full border text-[13px] font-medium radix-state-open:bg-black/10",{"text-token-text-secondary":!a,"border-transparent bg-[#DAEEFF] text-blue-1000 can-hover:hover:bg-[#BDDCF4] dark:bg-[#2A4A6D] dark:text-[#48AAFF] dark:can-hover:hover:bg-[#1A416A]":a,"border-token-border-light focus-visible:outline-black can-hover:hover:bg-token-main-surface-secondary dark:focus-visible:outline-white dark:can-hover:hover:bg-gray-700":!a}),children:[e.jsxs("div",{className:"flex h-full min-w-8 cursor-default select-none flex-row items-center justify-center p-2","aria-pressed":a,children:[e.jsx(K,{className:"h-5 w-5 pr-1"}),o]}),e.jsx("button",{className:"flex h-full min-w-8 flex-row items-center justify-center border-l border-blue-1000/10 p-2","aria-pressed":a,onClick:t,children:e.jsx(O,{className:"h-4 w-4"})})]})},X=.0025,ce=l.forwardRef(function({type:t,placeholder:o,state:r,renderFiles:w,leftSideActions:j,onSubmit:c,inputState:d,composerController:s,clientThreadId:x,gizmoId:m,disableReason:f},k){const{isInpainting:i,onCancelInpaint:N}=F(),p=S();let u=null;const{isLoading:n}=p;n||(u=p.modelId),l.useEffect(()=>{n||L()||s.focus()},[u,s,n]);const _=C=>{z({target:C.target,rootId:"composer-background",additonalInteractiveIds:["reply-regions"]})||s.focus()},I=l.useCallback(()=>e.jsx(R,{inputState:d,state:r,onSubmit:c,composerController:s,clientThreadId:x,gizmoId:m,disableReason:f}),[d,r,c,s,x,m,f]),{whisperControls:y,waveContainerRef:A}=G({composerController:s,renderInComposer:I,composerType:"imagegen"}),{controlsDisabled:h,waveformData:g,waveWidth:E}=P(s.store),b=e.jsx(D,{composerController:s,placeholder:o},"userInput"),T=i||h;return e.jsx(W,{id:"composer-background",ref:k,className:v("flex w-full cursor-text flex-col rounded-3xl border-l border-r border-t border-token-border-xlight duration-150 ease-in-out contain-inline-size motion-safe:transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow,bottom] dark:border-none dark:shadow-none",t!=="temporary"&&"shadow-[0_9px_9px_0px_rgba(0,0,0,0.01),_0_2px_5px_0px_rgba(0,0,0,0.06)] has-[:focus]:shadow-[0_2px_12px_0px_rgba(0,0,0,0.04),_0_9px_9px_0px_rgba(0,0,0,0.01),_0_2px_5px_0px_rgba(0,0,0,0.06)]",t!=="temporary"&&"bg-token-main-surface-primary dark:bg-[#303030]",t==="temporary"&&"dark bg-[#303030]"),onClick:_,style:{viewTransitionName:"var(--vt-composer)"},children:e.jsx("div",{className:"px-1 py-1",children:e.jsxs(e.Fragment,{children:[w,e.jsx(U,{initial:!1,children:e.jsxs("div",{className:"flex flex-col justify-start",children:[T&&e.jsx("div",{className:"mx-1 flex flex-row pt-1",children:h?g&&e.jsx(B,{waveform:g,containerWidth:E,scaleFactor:10,initialValue:X}):e.jsx("div",{className:"mx-2 max-h-12 flex-grow overflow-x-auto",children:b})}),e.jsx("div",{className:"flex min-h-[44px] items-center pl-1",ref:A,children:e.jsx("div",{className:"min-w-0 max-w-full flex-1",children:e.jsxs("div",{className:"flex flex-row items-center justify-between gap-x-1.5",children:[e.jsxs("div",{className:"mr-3 flex flex-shrink gap-x-1.5 text-token-text-primary",children:[j,i&&e.jsx(V,{pressed:!0,onClick:()=>N()})]}),!i&&e.jsx("div",{className:"mx-2 max-h-16 flex-grow overflow-x-auto",children:b}),e.jsx("div",{className:"flex flex-shrink gap-x-1.5 justify-self-end pr-2",children:y})]})})})]})})]})})})});function z({target:a,rootId:t,additonalInteractiveIds:o}){let r=a;for(;r&&r!=null;){if(r.tagName==="BUTTON"||r.tagName==="INPUT"||r.tagName==="TEXTAREA"||r.isContentEditable||o.includes(r.id))return!0;if(r.id===t)return!1;r=r.parentElement}return!1}export{ce as ImageGenComposer};
//# sourceMappingURL=c0kkz5yw203koqyt.js.map
