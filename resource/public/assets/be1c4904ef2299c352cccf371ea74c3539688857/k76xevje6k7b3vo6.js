import{e as M,r as f,j as e,M as o,d as y}from"./fs6h2trisr1juto6.js";import{bH as j,bS as b,ej as h,d6 as B}from"./cyi7nanrg0vdotzd.js";import{v as S}from"./df9u9imhvwerk6zv.js";const m=y({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied"}});function F({buttonText:a,shouldChangeText:C=!0,iconClassName:i="icon-sm",onCopy:d,className:l,iconOnly:p=!1}){const r=M(),[t,n]=f.useState(!1),c=S(),x=f.useCallback(u=>{u.stopPropagation(),d(u),n(!0),setTimeout(()=>{c()&&n(!1)},2e3)},[c,d]);let s=a;return C&&t?s=e.jsx(o,{...m.copied}):a===!0&&(s=e.jsx(o,{...m.copy})),e.jsxs(e.Fragment,{children:[!t&&e.jsx(b,{label:e.jsx(o,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:e.jsxs(g,{onClick:x,className:l,"aria-label":r.formatMessage({id:"ywKsIl",defaultMessage:"Copy"}),children:[e.jsx(h,{className:i}),!p&&s]})}),t&&e.jsxs(g,{className:l,"aria-label":r.formatMessage({id:"I3L53c",defaultMessage:"Copied"}),children:[e.jsx(B,{className:i}),!p&&s]})]})}const g=j.button`flex gap-1 items-center select-none`;export{F as C};
//# sourceMappingURL=k76xevje6k7b3vo6.js.map
