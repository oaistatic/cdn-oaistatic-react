const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/kjmvfj4f5y8mxpxu.js","assets/n1tvutderx19k1zs.js","assets/n26mv7rx7nquqst2.js","assets/root-osq5e7fb.css","assets/pceg3mlzf8dzw9ob.js","assets/conversation-small-nranh1cg.css","assets/coj1pqvvjvheacvo.js","assets/n24ph5vohl8fszcu.js","assets/nm04jgpfyxi6pn12.js","assets/ADAVisualizationComponent-mi6em660.css"])))=>i.map(i=>d[i]);
import{bs as b,bt as j,M as C,bo as I,cn as S,co as A}from"./n26mv7rx7nquqst2.js";import{j as e,c as T}from"./n1tvutderx19k1zs.js";import{bR as _,b_ as w,b$ as F,c0 as z,$ as k,c1 as O,c2 as W,c3 as v,c4 as D,c5 as R}from"./pceg3mlzf8dzw9ob.js";import{T as c,a as U}from"./da0lloekhn03bypm.js";import"./hexva2s1lo90zidg.js";import"./nraolmtygmvq3wcf.js";import"./hg2pcqdl92ment5e.js";import"./kodyf94rms2l778g.js";import"./ecp3vwsjvu9v61q0.js";const M=b(()=>j(()=>import("./kjmvfj4f5y8mxpxu.js").then(t=>t.A),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(t=>t.default));function X({messages:t,isRequestActive:l,clientThreadId:u}){const[r,s]=t,n=_(r.message),a=s?.message.metadata?.aggregate_result,p=w(),g=F(),d=s?.message?z(s.message):[],o=s?.message.metadata?.aggregate_result?.messages.filter(k)??[],E=(d.filter(i=>i.type==="chart")??[]).length!==o.length,f=g&&!E;let m=c.Running;return a?.status==="success"?m=c.Finished:s!=null&&s.message.content.content_type!==C.ExecutionOutput||a!=null&&a.status!=="running"?m=c.Error:(n||!l)&&(m=c.Stopped),e.jsxs(e.Fragment,{children:[e.jsx(N,{messages:t,status:m,isRequestActive:l}),f&&d.map((i,x)=>{const{type:V}=i;return V==="chart"&&!p?(i.fallback_to_image=!0,e.jsx(y,{children:e.jsx(M,{clientThreadId:u,visualization:i})},x)):e.jsx(y,{children:e.jsx(M,{clientThreadId:u,visualization:i})},x)}),!f&&s!=null&&e.jsx(O,{message:s.message})]})}const y=I.div`mb-3 max-w-[80%]`;function N({messages:t,status:l,isRequestActive:u}){const[r,s]=t,n=T(),a=s?.message.metadata?.aggregate_result,p=_(r.message),{data:g,error:d}=S(A.ShowExpandedCodeView);let o=n.formatMessage({id:"message.tools.data-analysis.running",defaultMessage:"Analyzing"});if(a?.status==="success"?o=n.formatMessage({id:"message.tools.data-analysis.finished",defaultMessage:"Analyzed"}):s!=null&&s.message.content.content_type!==C.ExecutionOutput||a!=null&&a.status!=="running"?o=n.formatMessage({id:"message.tools.data-analysis.error",defaultMessage:"Analysis errored"}):(p||!u)&&(o=n.formatMessage({id:"message.tools.data-analysis.stopped",defaultMessage:"Analysis paused"})),g!==void 0||d){const h=W(r.message)!=null;return e.jsx(U,{status:l,highlightedCommand:o,showWorkUserSetting:g??!1,hideOnlyIfNotInteractedWith:!0,children:h?e.jsxs("div",{className:"mb-3 mt-0.5 overflow-hidden rounded-xl bg-black",children:[e.jsx(v,{message:r.message,FormattedText:D}),s!=null&&e.jsx(R,{message:s.message})]}):null})}return null}export{X as DataAnalysisMessage};
//# sourceMappingURL=lc7h8twjzp5pbqrh.js.map
