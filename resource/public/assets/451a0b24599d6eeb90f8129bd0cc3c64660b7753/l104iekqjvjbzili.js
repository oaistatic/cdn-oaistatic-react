const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/g77v60f34fkkq7dq.js","assets/cg166fqqcxkeiosv.js","assets/mwlpozqwnbys03vp.js","assets/root-0muf4psh.css"])))=>i.map(i=>d[i]);
import{g7 as D,bm as E,bn as F,b8 as P,bi as H,bT as A,c6 as L,d as y,B as $}from"./mwlpozqwnbys03vp.js";import{j as e,r as h}from"./cg166fqqcxkeiosv.js";import{C as I}from"./bk3oz68r6jpv53p0.js";import{dE as U,dF as B,dG as _,dH as J,dI as w,Q as G,dJ as Q}from"./d5k5wa3zyqlgc9bk.js";import{D as X}from"./csmo9yrlgz6y3xq0.js";import{a as q,U as K,b as V}from"./k9og1wkg25ezi82z.js";import{a as W}from"./j9b8gzuf9snp08h8.js";import"./gg3htlw4oy097iqi.js";import"./g2uqo8nmpy7dru8c.js";import"./ol4eh1ajqp1ok8ch.js";import"./ifsrmh2wagx96n9r.js";import"./i8wt1ptmzikt53pm.js";function C(s){return D({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"}}]})(s)}function k(s){return D({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"}},{tag:"path",attr:{d:"M7 12V7H6v5h1z"}},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"}}]})(s)}const Y=E(()=>F(()=>import("./g77v60f34fkkq7dq.js"),__vite__mapDeps([0,1,2,3])));function ue({threadId:s,threadUserId:a}){return q(K.isDebugModalOpen)&&e.jsx(P,{isOpen:!0,onClose:()=>V.toggleDebugModalOpen(),type:"success",size:"fullscreen",noPadding:!0,rootClassName:"z-50",children:e.jsx(te,{threadId:s,threadUserId:a??void 0,onClose:()=>V.toggleDebugModalOpen()})})}const Z=(s,a)=>{const l=JSON.stringify(a,null,2),o=new Blob([l],{type:"application/json"}),r=window.URL.createObjectURL(o),i=document.createElement("a");i.href=r,i.download=s,i.click(),window.URL.revokeObjectURL(r)},z="<|im_start|>",T="<|im_sep|>",O="<|im_end|>",ee="<|fim_suffix|>";function se({prompt:s}){const[a,l]=h.useState({}),o=[],r=[];let i=0;for(;;){const n=s.indexOf(z,i);if(n===-1)break;const c=s.indexOf(T,n);if(c===-1)break;let t=s.indexOf(O,c);const x=s.indexOf(ee,c);if(x!==-1&&(t===-1||x<t)&&(t=x),t===-1)break;const p=s.substring(n+z.length,c),v=s.substring(c+T.length,t);r.push(n);const j=a[n];o.push(e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{onClick:()=>l(u=>({...u,[n]:!u[n]})),children:j?e.jsx(k,{size:14}):e.jsx(C,{size:14})}),e.jsxs("span",{className:"font-semibold",children:["[",p,"]"]})]}),e.jsx("div",{className:y("whitespace-pre-wrap",j&&"line-clamp-2 truncate"),children:v})]},n)),i=t+O.length}function f(n){const c={};for(const t of r)c[t]=n;l(c)}return e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"absolute right-0 top-0 flex items-center gap-2 text-xs font-semibold",children:[e.jsxs("button",{className:"flex items-center gap-1 underline",onClick:()=>f(!0),children:[e.jsx(C,{size:14})," Collapse All"]}),"/",e.jsxs("button",{className:"flex items-center gap-1 underline",onClick:()=>f(!1),children:[e.jsx(k,{size:14})," Expand All"]})]}),e.jsx("div",{className:"flex flex-col gap-3",children:o})]})}const g=H.div`mb-[-5px] pb-0.5 font-semibold uppercase border-b-2 ${({$isSelected:s})=>s?"border-black dark:border-white":"border-transparent"}`;function te({threadId:s,threadUserId:a,message:l,onClose:o}){const[r,i]=h.useState(l?"message":"json"),{data:f,isLoading:n,refetch:c}=W({threadId:s,threadUserId:a,refetchOnMount:"always"}),t=f?.thread;if(h.useEffect(()=>{i(l?"message":t?.turns.length?`turn${t?.turns.length-1}`:"thread")},[t?.turns.length,l]),!n&&!t&&!l)return e.jsxs(X,{onClickRetry:()=>c(),children:["Failed to load."," "]});if(n)return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:"Loading..."});const x=t?.turns,p=t?.turns[t.turns.length-1],v=p?.artifacts__?.model_snapshots?.default_id,j=p?.artifacts__?.settings?.model_response?.completion_model?.model,u=v??j,b=p?.artifacts__?.eval_preset,M=a&&s?Q(a,s):null;return e.jsx("div",{className:"flex flex-col gap-2 break-words font-mono text-xs",children:e.jsxs(U,{orientation:"vertical",value:r,onValueChange:m=>i(m),children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsxs(B,{className:"flex items-center justify-start gap-3 p-2",children:[l&&e.jsx(_,{value:"message",children:e.jsx(g,{$isSelected:r==="message",children:"Message"})},"message"),t&&e.jsx(_,{value:"thread",children:e.jsx(g,{$isSelected:r==="thread",children:"Thread"})},"thread"),x?.map((m,d)=>e.jsxs(h.Fragment,{children:[e.jsx(_,{value:`turn${d}`,children:e.jsxs(g,{$isSelected:r===`turn${d}`,children:["Turn[",d,"]"]})},d),m.artifacts__?.debug_ddtrace_urls?.map(S=>e.jsx(g,{$isSelected:!1,children:e.jsxs("a",{target:"_blank",href:S,className:"text-nowrap",rel:"noreferrer",children:["Trace[",d,"] ↗"]})},S))]},d))]}),e.jsxs("div",{className:"flex items-center justify-end",children:[t&&e.jsxs(A,{size:"xs",color:"secondary",onClick:()=>Z("thread.json",t),children:[e.jsx(J,{className:"icon-sm"})," thread.json"]}),e.jsx(L,{onClick:o})]})]}),e.jsxs("div",{className:"flex items-center gap-2 px-2",children:[u&&e.jsxs(e.Fragment,{children:[e.jsx(N,{name:"Model",id:u,className:"flex-shrink-0"})," ",e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),b&&b!=="production"&&e.jsxs(e.Fragment,{children:[e.jsx(N,{name:"Eval Preset",id:b,className:"flex-shrink-0"}),e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),M&&e.jsx(e.Fragment,{children:e.jsx(N,{name:"Permalink",id:M,className:"flex-shrink-1"})})]}),x?.map((m,d)=>e.jsxs(w,{value:`turn${d}`,className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth",children:[e.jsxs("div",{className:y("flex flex-col gap-2 p-2",(m.index??0)%2===0&&"bg-token-main-surface-secondary"),children:[e.jsx(se,{prompt:m.artifacts__?.debug_info?.main_model_response?.prompt_string??""}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",children:"[assistant]"}),e.jsx("div",{"data-testid":"assistant-response",className:"whitespace-pre-wrap",children:m.model_response?.text})]})]})," "]},d)),t&&e.jsx(w,{value:"thread",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-2",children:e.jsx(R,{data:t,collapsed:4})}),l&&e.jsx(w,{value:"message",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-2",children:e.jsx(R,{data:l,collapsed:4})})]},t?.turns.length??"message")})}function R({data:s,collapsed:a}){const[l,o]=h.useState(a??!0);return e.jsxs("div",{className:"flex flex-col items-start gap-1",children:[e.jsx("button",{onClick:()=>o(!l),className:"flex items-center gap-1",children:l?e.jsxs(e.Fragment,{children:[e.jsx(k,{size:14})," Expand all"]}):e.jsxs(e.Fragment,{children:[e.jsx(C,{size:14})," Collapse all"]})}),e.jsx("div",{className:"w-full",children:e.jsx(Y,{json:s,jsonViewProps:{collapsed:l,shortenTextAfterLength:0}},String(l))})]})}function N({name:s,id:a,className:l}){const o=$(),r=h.useCallback(i=>{G(a,o,i)},[a,o]);return e.jsxs("div",{className:y("flex items-center gap-2 truncate",l),children:[e.jsxs("span",{className:"text-nowrap font-semibold",children:[s,":"]}),e.jsx("span",{title:a,className:"truncate text-gray-500 dark:text-white",children:a}),e.jsx(I,{onCopy:r})]})}export{R as DebugJsonViewer,ue as DebugModal,te as DebugModalContents};
//# sourceMappingURL=l104iekqjvjbzili.js.map
