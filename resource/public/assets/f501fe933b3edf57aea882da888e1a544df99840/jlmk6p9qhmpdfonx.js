import{r as m,j as a}from"./n1tvutderx19k1zs.js";import{dC as p,dD as h,dE as x}from"./pceg3mlzf8dzw9ob.js";import{J as f,a as _}from"./l499zjc9lgyu7lf2.js";import{n as g,s as S,r as j}from"./n26mv7rx7nquqst2.js";import{u as E}from"./n43edvoxt2r1qpaw.js";function T(s,n){const e=n.find(l=>l.message.author.role===g.Assistant),t=S.getTree(j(s)),o=(e?t.getParentPromptNode(e.nodeId):null)?.message.metadata,u=o?.real_author_type==="automation"?o?.real_author_id:null,c=o?.real_author_title,{automation:d}=E(u??"");return{automationId:u,automation:d,automationTitle:c}}function y({clientThreadId:s,messages:n}){const{automationId:e,automation:t,automationTitle:i}=T(s,n),[o,r]=m.useState(!1);return m.useEffect(()=>{e&&p.count(h.JAWBONE,"jawbone_automation_source_header.open")},[e]),e?a.jsxs("div",{className:"mb-1 flex items-center gap-1.5 text-sm text-token-text-secondary hover:text-token-text-primary",children:[a.jsx(x,{className:"icon-sm"}),a.jsx("button",{onClick:()=>{r(!0)},children:t?.title??i}),o&&t&&a.jsx(f,{initialScheduleComponents:t.schedule_components,nextRunTimes:t.next_run_times,children:a.jsx(_,{item:t,source:"chat",onClose:()=>{r(!1)}})})]}):null}export{y as AutomationSourceHeader};
//# sourceMappingURL=jlmk6p9qhmpdfonx.js.map
