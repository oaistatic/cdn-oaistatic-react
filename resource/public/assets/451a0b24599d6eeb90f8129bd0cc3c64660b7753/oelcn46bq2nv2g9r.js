import{bi as o,h as j,N as v,bx as w,f2 as M}from"./mwlpozqwnbys03vp.js";import{c,j as e,u as L,M as i,r as m}from"./cg166fqqcxkeiosv.js";import{cW as A}from"./d5k5wa3zyqlgc9bk.js";import{C,a as W,L as _,P,B as D,p as U,b as N,c as T,d as V}from"./mvt4km0zlpksanl9.js";import{a as S,b as q}from"./gfv7vithos37acy8.js";import{u as R,a as B}from"./izb9jgmbsr80yw3z.js";import"./d5t7ptl4pl8mo0z0.js";import"./kov0p7sh15118kx7.js";import"./gjup1pnw4u9rwx39.js";import"./mptd6395vqovl9h2.js";import"./lreb9dbp4o4sdhlz.js";import"./kb4dwh5v3nuso8nd.js";import"./jhs75a8aerxa4m06.js";import"./cnhrrwfqpuxhvaij.js";import"./mkaurxw37czmxs2e.js";import"./f3ajrzibyyk716uh.js";C.register(W,_,P,D,U,N,T);async function E({queryKey:[t,{workspaceId:s}]}){return v.getWorkspaceAnalytics(s)}function F(t){return L({queryKey:["workspace-analytics",{workspaceId:t}],queryFn:E})}function z(t){const s=getComputedStyle(document.body);return{animation:!1,scales:{y:{position:"right",beginAtZero:!0,ticks:{stepSize:3,color:s.getPropertyValue("--text-tertiary"),padding:12},grid:{tickLength:0,color:s.getPropertyValue("--border-medium")},border:{display:!1}},x:{grid:{display:!1},ticks:{color:s.getPropertyValue("--text-tertiary"),padding:20}}},plugins:{legend:!1,tooltip:{backgroundColor:s.getPropertyValue("--surface-primary"),titleColor:s.getPropertyValue("--text-primary"),bodyColor:s.getPropertyValue("--text-secondary"),displayColors:!1,padding:{top:8,left:8,right:8,bottom:8}}}}}function g({data:t,label:s,getWeekValue:r}){const l=c(),d=w(),k=m.useMemo(()=>z(),[d]),b=m.useMemo(()=>getComputedStyle(document.body).getPropertyValue("--text-secondary"),[d]),h={labels:t.weekly_data.map(u=>l.formatDate(u.week,{month:"numeric",day:"numeric"})),datasets:[{label:s,data:t.weekly_data.map(r),borderWidth:0,backgroundColor:b,barThickness:20}]};return e.jsx("div",{className:"flex h-full w-full items-center justify-center bg-token-main-surface-secondary p-4",children:e.jsx(V,{options:k,data:h,height:192})})}function n({label:t,value:s}){return e.jsxs("div",{className:"w-1/3 rounded bg-token-main-surface-secondary px-4 py-2",children:[e.jsx("label",{className:"text-sm text-token-text-secondary",children:t}),e.jsx("div",{className:"text-xl font-semibold text-token-text-primary",children:s})]})}function H({data:t}){const s=c(),r=t.weekly_data[t.weekly_data.length-2];return e.jsxs("div",{className:"mt-10",children:[e.jsx("div",{className:"mb-2 font-semibold text-token-text-primary",children:e.jsx(i,{...a.totals})}),e.jsxs("div",{className:"mb-16 flex gap-4",children:[e.jsx(n,{label:s.formatMessage(a.usersLabel),value:t.total_users}),e.jsx(n,{label:s.formatMessage(a.conversationsLabel),value:t.total_conversations}),e.jsx(n,{label:s.formatMessage(a.messagesLabel),value:t.total_messages})]}),e.jsxs(p,{children:[e.jsx("div",{className:"flex flex-col justify-between p-4",children:e.jsxs("div",{children:[e.jsx(y,{children:e.jsx(i,{...a.usageTitle})}),r!=null&&e.jsxs("div",{children:[e.jsx(x,{children:r.message_count}),e.jsx(f,{children:e.jsx(i,{...a.messagesLastWeek})})]})]})}),e.jsx("div",{children:e.jsx(g,{data:t,label:s.formatMessage(a.messagesChartLabel),getWeekValue:l=>l.message_count})})]}),e.jsxs(p,{children:[e.jsx("div",{children:e.jsx(g,{data:t,label:s.formatMessage(a.activeUsersChartLabel),getWeekValue:l=>l.active_users_count})}),e.jsx("div",{className:"flex grow flex-col justify-between p-4",children:e.jsxs("div",{children:[e.jsx(y,{children:e.jsx(i,{...a.weeklyUsersTitle})}),r!=null&&e.jsxs("div",{children:[e.jsx(x,{children:r.active_users_count}),e.jsx(f,{children:e.jsx(i,{...a.activeUsersLastWeek})})]})]})})]})]})}const p=o.div`mb-12 grid grid-cols-1 rounded-lg overflow-hidden border border-token-border-light sm:grid-cols-2`,y=o.div`font-semibold`,x=o.div`font-semibold text-3xl`,f=o.div`text-sm text-token-text-tertiary`;function I({currentWorkspaceId:t}){const s=c(),{data:r,isLoading:l}=F(t);return e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsx("title",{children:s.formatMessage(a.title)})}),e.jsx(S,{title:s.formatMessage(a.title),subtitle:s.formatMessage(a.pageDescription)}),e.jsx(q,{showSpinner:l,children:r!==void 0?e.jsx(H,{data:r}):null})]})}const a=j({title:{id:"workspaceAnalytics.title",defaultMessage:"Workspace Analytics"},pageDescription:{id:"workspaceAnalytics.understand",defaultMessage:"Understand how your workspace is using ChatGPT"},totals:{id:"workspaceAnalytics.totals",defaultMessage:"Totals over last 30 days"},usersLabel:{id:"workspaceAnalytics.usersLabel",defaultMessage:"Users"},conversationsLabel:{id:"workspaceAnalytics.conversationsLabel",defaultMessage:"Conversations"},messagesLabel:{id:"workspaceAnalytics.messagesLabel",defaultMessage:"Messages"},usageTitle:{id:"workspaceAnalytics.usageTitle",defaultMessage:"Usage"},messagesLastWeek:{id:"workspaceAnalytics.messagesLastWeek",defaultMessage:"Messages processed last week"},messagesLast30Days:{id:"workspaceAnalytics.messagesLast30Days",defaultMessage:"{count, plural, =0 {No messages} one {# message} other {# messages}} processed over last 30 days"},messagesChartLabel:{id:"workspaceAnalytics.messagesChartLabel",defaultMessage:"Messages"},weeklyUsersTitle:{id:"workspaceAnalytics.weeklyUsersTitle",defaultMessage:"Weekly users"},activeUsersChartLabel:{id:"workspaceAnalytics.activeUsersChartLabel",defaultMessage:"Active users"},activeUsersLastWeek:{id:"workspaceAnalytics.activeUsersLastWeek",defaultMessage:"Active users last week"},usersLast30Days:{id:"workspaceAnalytics.usersLast30Days",defaultMessage:"{count, plural, =0 {No active users} one {# active user} other {# active user}} over last 30 days"}});function K(t){return e.jsx(I,{...t})}const ne=M(function(){const s=R();return B(),e.jsx(K,{...s})});export{ne as default};
//# sourceMappingURL=oelcn46bq2nv2g9r.js.map
