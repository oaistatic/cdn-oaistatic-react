import{c as M,r as f,j as e,M as o}from"./n1tvutderx19k1zs.js";import{bo as y,bJ as j,ep as b,cS as h,j as B}from"./n26mv7rx7nquqst2.js";import{q as S}from"./pceg3mlzf8dzw9ob.js";const m=B({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied"}});function T({buttonText:a,shouldChangeText:C=!0,iconClassName:i="icon-sm",onCopy:l,className:p,iconOnly:d=!1}){const r=M(),[t,c]=f.useState(!1),n=S(),x=f.useCallback(u=>{u.stopPropagation(),l(u),c(!0),setTimeout(()=>{n()&&c(!1)},2e3)},[n,l]);let s=a;return C&&t?s=e.jsx(o,{...m.copied}):a===!0&&(s=e.jsx(o,{...m.copy})),e.jsxs(e.Fragment,{children:[!t&&e.jsx(j,{label:e.jsx(o,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:e.jsxs(g,{onClick:x,className:p,"aria-label":r.formatMessage({id:"ywKsIl",defaultMessage:"Copy"}),children:[e.jsx(b,{className:i}),!d&&s]})}),t&&e.jsxs(g,{className:p,"aria-label":r.formatMessage({id:"I3L53c",defaultMessage:"Copied"}),children:[e.jsx(h,{className:i}),!d&&s]})]})}const g=y.button`flex gap-1 items-center select-none`;export{T as C};
//# sourceMappingURL=cg9cr7bhamctxzet.js.map
