const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/cd64y44xlzacwu2f.js","assets/fs6h2trisr1juto6.js"])))=>i.map(i=>d[i]);
import{bU as u,a3 as f,Z as c,bR as p,as as l,F as S,j as b,E as w}from"./njq6ygky3ttysgdk.js";import{r as i,u as y}from"./fs6h2trisr1juto6.js";import{d as h}from"./d7a6rc8fexfzu7dt.js";async function m(e){const t=await p(()=>import("./cd64y44xlzacwu2f.js").then(n=>n.i),__vite__mapDeps([0,1]));if(l!=null&&e?.startsWith(l))return!0;try{return t.get(new URL(e??"").hostname)==="openai.com"}catch{return!1}}function D(e,t){const n=u(),{isUnauthenticated:s}=b();return y({queryKey:["safe-url",{serverThreadId:e,url:t,isHistoryAndTrainingDisabled:n}],queryFn:async()=>{if(e==null||t==null)throw new Error("Unexpected falsey useSafeUrlQuery");return await m(t)||S.isThreadUrlSafe(w(e),t)?{safe:!0}:s?{safe:!1}:c.getConversationSafeUrls(e,t,n)},enabled:e!=null&&t!=null})}function g(e,t,n=!0){const s=f(e,o=>t!=null&&S.isThreadUrlSafe(o,t)),{data:{safe:r}={}}=D(e,s?void 0:t);return s||r||!n?t:void 0}function R(e,t,n=!0){const s=_(t,500);return g(e,s,n)}function _(e,t){const[n,s]=i.useState(void 0),[r]=i.useState(()=>h(o=>{s(o)},t));return i.useEffect(()=>{r(e)},[r,e]),n===e?e:void 0}function V(e,t){const n=u(),s=f(e,o=>o?.safeUrls??[]),{data:r=[]}=y({queryKey:["safe-urls",e,t,n,s],queryFn:async()=>{const o=s.filter(a=>t.includes(a)),U=t.filter(a=>!o.includes(a)),d=(await Promise.allSettled(U.map(async a=>{if(await m(a))return a;if(e==null)return null;try{return(await c.getConversationSafeUrls(e,a,n)).safe?a:null}catch{return null}}))).map(a=>a.status==="fulfilled"?a.value:null).filter(a=>a!=null);return o.concat(d)},enabled:e!=null&&t.length>0});return r}export{R as a,V as u};
//# sourceMappingURL=no4qfibpbbv193yj.js.map
