import{f4 as P,fq as M,bY as d,h as S}from"./hggowi1ggrzb09yc.js";import{d as A,r as a,h as L,j as e,M as n}from"./izh0i1dfnf8ev7x1.js";import{A as w,a as p,b as m}from"./exzl0m5vamd4uvma.js";import{e as v,f as D,h as E}from"./fc2hzad6rtrm7s5f.js";const r=S({primaryButton:{id:"OpenInDesktopApp.launchButton",defaultMessage:"Launch ChatGPT desktop app"},secondaryButton:{id:"OpenInDesktopApp.secondaryButton",defaultMessage:"Not launching? Click here instead."},oops:{id:"AuthError.oops",defaultMessage:"Oops!"},goBack:{id:"AuthError.goBack",defaultMessage:"Go back"}}),I=P(function(){const g=A(),[t,x]=a.useState(),[f,k]=a.useState(!1),[j,C]=a.useState(!1),[s]=L(),c=a.useCallback(()=>{t!==void 0&&(window.location.href=t)},[t]);a.useEffect(()=>{let o=s.get("path");const u=s.get("code"),h=s.get("state"),b=M();let i=s.get("scheme");if(i||(i=b?D:E),!o||!u||!h)return;o.startsWith("/")||(o="/"+o);const l=new URL(`${i}://${v}${o}`);l.searchParams.set("code",u),l.searchParams.set("state",h);const y=l.toString();x(y),k(!0),c(),setTimeout(()=>{C(!0)},3e3)},[c,s]);const B=()=>{t&&navigator.clipboard.writeText(t)};return e.jsx(e.Fragment,{children:f?e.jsx(w,{isStorageComplianceEnabled:!1,children:t?e.jsxs(p,{children:[e.jsx(m,{}),e.jsx(d,{as:"button",color:"secondary",onClick:c,children:e.jsx(n,{...r.primaryButton})}),e.jsx("div",{className:"mt-2 h-4 text-center text-xs text-token-text-tertiary",children:j&&e.jsx(d,{as:"button",color:"ghost",onClick:B,children:e.jsx(n,{...r.secondaryButton})})})]}):e.jsxs(p,{children:[e.jsx(m,{}),e.jsx("div",{className:"mb-2 text-center text-lg",children:e.jsx(n,{...r.oops})}),e.jsx(d,{as:"button",color:"secondary",onClick:()=>g("/auth/login",{replace:!0}),children:e.jsx(n,{...r.goBack})})]})}):null})});export{I as default};
//# sourceMappingURL=mmhm70d1ap6sdj7i.js.map
