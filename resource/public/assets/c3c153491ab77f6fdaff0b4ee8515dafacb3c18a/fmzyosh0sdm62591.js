const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/g84swpncksvfvwys.js","assets/fs6h2trisr1juto6.js","assets/njq6ygky3ttysgdk.js","assets/root-cl538jor.css","assets/d7a6rc8fexfzu7dt.js","assets/conversation-small-m9kq0y4e.css"])))=>i.map(i=>d[i]);
import{fT as D,bQ as F,bR as E,bw as P,bH as H,c5 as A,cJ as L,d as y,V as $}from"./njq6ygky3ttysgdk.js";import{j as e,r as x}from"./fs6h2trisr1juto6.js";import{C as U}from"./ora9zmv2zdoi2bvo.js";import{eo as I,ep as B,eq as _,er as J,es as w,a3 as K,et as q}from"./d7a6rc8fexfzu7dt.js";import{D as G}from"./lpyam22iponprayw.js";import{a as Q,U as X,b as S}from"./grccwfqkma7x81tr.js";import{a as W}from"./bv3kqivv4ik9nk26.js";import"./onz2j6p63wwkp7m6.js";import"./p32qvzx3ml1odktp.js";import"./o0kxre2a6am6klyc.js";import"./uer8rn1m59xnpdct.js";import"./e8xv89i2w2jwxlj7.js";function C(s){return D({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"},child:[]}]})(s)}function k(s){return D({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M9 9H4v1h5V9z"},child:[]},{tag:"path",attr:{d:"M7 12V7H6v5h1z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",clipRule:"evenodd",d:"M5 3l1-1h7l1 1v7l-1 1h-2v2l-1 1H3l-1-1V6l1-1h2V3zm1 2h4l1 1v4h2V3H6v2zm4 1H3v7h7V6z"},child:[]}]})(s)}const Y=F(()=>E(()=>import("./g84swpncksvfvwys.js"),__vite__mapDeps([0,1,2,3,4,5])).then(s=>s.JsonViewer));function ue({threadId:s,threadUserId:a}){return Q(X.isDebugModalOpen)&&e.jsx(P,{isOpen:!0,onClose:()=>S.toggleDebugModalOpen(),type:"success",size:"fullscreen",noPadding:!0,rootClassName:"z-50",children:e.jsx(te,{threadId:s,threadUserId:a??void 0,onClose:()=>S.toggleDebugModalOpen()})})}const Z=(s,a)=>{const l=JSON.stringify(a,null,2),n=new Blob([l],{type:"application/json"}),r=window.URL.createObjectURL(n),i=document.createElement("a");i.href=r,i.download=s,i.click(),window.URL.revokeObjectURL(r)},z="<|im_start|>",R="<|im_sep|>",T="<|im_end|>",ee="<|fim_suffix|>";function se({prompt:s}){const[a,l]=x.useState({}),n=[],r=[];let i=0;for(;;){const o=s.indexOf(z,i);if(o===-1)break;const c=s.indexOf(R,o);if(c===-1)break;let t=s.indexOf(T,c);const m=s.indexOf(ee,c);if(m!==-1&&(t===-1||m<t)&&(t=m),t===-1)break;const p=s.substring(o+z.length,c),v=s.substring(c+R.length,t);r.push(o);const j=a[o];n.push(e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("button",{onClick:()=>l(u=>({...u,[o]:!u[o]})),children:j?e.jsx(k,{size:14}):e.jsx(C,{size:14})}),e.jsxs("span",{className:"font-semibold",children:["[",p,"]"]})]}),e.jsx("div",{className:y("whitespace-pre-wrap",j&&"line-clamp-2 truncate"),children:v})]},o)),i=t+T.length}function f(o){const c={};for(const t of r)c[t]=o;l(c)}return e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"absolute right-0 top-0 flex items-center gap-2 text-xs font-semibold",children:[e.jsxs("button",{className:"flex items-center gap-1 underline",onClick:()=>f(!0),children:[e.jsx(C,{size:14})," Collapse All"]}),"/",e.jsxs("button",{className:"flex items-center gap-1 underline",onClick:()=>f(!1),children:[e.jsx(k,{size:14})," Expand All"]})]}),e.jsx("div",{className:"flex flex-col gap-3",children:n})]})}const g=H.div`mb-[-5px] pb-0.5 font-semibold uppercase border-b-2 ${({$isSelected:s})=>s?"border-black dark:border-white":"border-transparent"}`;function te({threadId:s,threadUserId:a,message:l,onClose:n}){const[r,i]=x.useState(l?"message":"json"),{data:f,isLoading:o,refetch:c}=W({threadId:s,threadUserId:a,refetchOnMount:"always"}),t=f?.thread;if(x.useEffect(()=>{i(l?"message":t?.turns.length?`turn${t?.turns.length-1}`:"thread")},[t?.turns.length,l]),!o&&!t&&!l)return e.jsxs(G,{onClickRetry:()=>c(),children:["Failed to load."," "]});if(o)return e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:"Loading..."});const m=t?.turns,p=t?.turns[t.turns.length-1],v=p?.artifacts__?.model_snapshots?.default_id,j=p?.artifacts__?.settings?.model_response?.completion_model?.model,u=v??j,b=p?.artifacts__?.eval_preset,M=a&&s?q(a,s):null;return e.jsx("div",{className:"flex flex-col gap-2 break-words font-mono text-xs",children:e.jsxs(I,{orientation:"vertical",value:r,onValueChange:h=>i(h),children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsxs(B,{className:"flex items-center justify-start gap-3 p-2",children:[l&&e.jsx(_,{value:"message",children:e.jsx(g,{$isSelected:r==="message",children:"Message"})},"message"),t&&e.jsx(_,{value:"thread",children:e.jsx(g,{$isSelected:r==="thread",children:"Thread"})},"thread"),m?.map((h,d)=>e.jsxs(x.Fragment,{children:[e.jsx(_,{value:`turn${d}`,children:e.jsxs(g,{$isSelected:r===`turn${d}`,children:["Turn[",d,"]"]})},d),h.artifacts__?.debug_ddtrace_urls?.map(V=>e.jsx(g,{$isSelected:!1,children:e.jsxs("a",{target:"_blank",href:V,className:"text-nowrap",rel:"noreferrer",children:["Trace[",d,"] ↗"]})},V))]},d))]}),e.jsxs("div",{className:"flex items-center justify-end",children:[t&&e.jsxs(A,{size:"xs",color:"secondary",onClick:()=>Z("thread.json",t),children:[e.jsx(J,{className:"icon-sm"})," thread.json"]}),e.jsx(L,{onClick:n})]})]}),e.jsxs("div",{className:"flex items-center gap-2 px-2",children:[u&&e.jsxs(e.Fragment,{children:[e.jsx(N,{name:"Model",id:u,className:"flex-shrink-0"})," ",e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),b&&b!=="production"&&e.jsxs(e.Fragment,{children:[e.jsx(N,{name:"Eval Preset",id:b,className:"flex-shrink-0"}),e.jsx("span",{className:"text-gray-500 dark:text-white",children:"|"})]}),M&&e.jsx(e.Fragment,{children:e.jsx(N,{name:"Permalink",id:M,className:"flex-shrink-1"})})]}),m?.map((h,d)=>e.jsxs(w,{value:`turn${d}`,className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth",children:[e.jsxs("div",{className:y("flex flex-col gap-2 p-2",(h.index??0)%2===0&&"bg-token-main-surface-secondary"),children:[e.jsx(se,{prompt:h.artifacts__?.debug_info?.main_model_response?.prompt_string??""}),e.jsxs("div",{children:[e.jsx("div",{className:"font-semibold",children:"[assistant]"}),e.jsx("div",{"data-testid":"assistant-response",className:"whitespace-pre-wrap",children:h.model_response?.text})]})]})," "]},d)),t&&e.jsx(w,{value:"thread",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-2",children:e.jsx(O,{data:t,collapsed:4,jsonFiltersKey:"thread"})}),l&&e.jsx(w,{value:"message",className:"max-h-[calc(100vh-46px)] w-full overflow-y-scroll scroll-smooth p-2",children:e.jsx(O,{data:l,collapsed:4,jsonFiltersKey:"message"})})]},t?.turns.length??"message")})}function O({data:s,collapsed:a,jsonFiltersKey:l}){const[n,r]=x.useState(a??!0);return e.jsxs("div",{className:"flex flex-col items-start gap-1",children:[e.jsx("button",{onClick:()=>r(!n),className:"flex items-center gap-1",children:n?e.jsxs(e.Fragment,{children:[e.jsx(k,{size:14})," Expand all"]}):e.jsxs(e.Fragment,{children:[e.jsx(C,{size:14})," Collapse all"]})}),e.jsx("div",{className:"w-full",children:e.jsx(Y,{jsonFiltersKey:l,json:s,jsonViewProps:{collapsed:n,shortenTextAfterLength:0}},String(n))})]})}function N({name:s,id:a,className:l}){const n=$(),r=x.useCallback(i=>{K(a,n,i)},[a,n]);return e.jsxs("div",{className:y("flex items-center gap-2 truncate",l),children:[e.jsxs("span",{className:"text-nowrap font-semibold",children:[s,":"]}),e.jsx("span",{title:a,className:"truncate text-gray-500 dark:text-white",children:a}),e.jsx(U,{onCopy:r})]})}export{O as DebugJsonViewer,ue as DebugModal,te as DebugModalContents};
//# sourceMappingURL=fmzyosh0sdm62591.js.map
