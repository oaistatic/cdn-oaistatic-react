import{E as D,cj as A,d as f,bX as H,ce as a,ar as J,e_ as M,f4 as G,dl as B,e3 as U,dx as N}from"./hggowi1ggrzb09yc.js";import{r as c,j as e,c as b,M as x,f as z,d as y}from"./izh0i1dfnf8ev7x1.js";import{eM as T,fK as W,f6 as q,dm as K,ab as X,lh as Y,c1 as Q,c2 as Z,c0 as w,az as V,cJ as h,an as $,hR as ee,li as te,b$ as k,h5 as se,fM as ae,lj as C,eB as ne,dy as _,dz as P,lk as E,bm as re,fn as oe,kH as R,cV as ie,cX as ce,fq as le,ll as de,cZ as me}from"./fc2hzad6rtrm7s5f.js";import{C as ue}from"./et4ywzsmc47u3i7v.js";import{C as xe,a as fe}from"./ojcgwgwujkn9jneg.js";import{c as he}from"./ntdjjw6s1dl31tgb.js";import{d as ge,g as pe,a as ye}from"./in3ze5ugryldzaj2.js";import{S as je}from"./dzs9jsp7hkzpbuhr.js";import{c as g,S as ve,d as we,J as be,a as Se}from"./elgrylk95u65jz3s.js";import{S as Me,A as Ne,a as ke}from"./olku5xlevbjddjj8.js";import{P as Ce}from"./8nxoaz0vb9p890un.js";import"./hjbk0a4n40hheieo.js";import"./ddzilicy6qtleo90.js";import"./m7r17aksjqnnuufi.js";import"./ecq5q109ux6uwiin.js";import"./kh1pguo5uwldp8r4.js";import"./paq1bye12yp7s2hg.js";import"./j7xrr4x8o3ssozmz.js";import"./modzmagtrlhmunl0.js";import"./lb1py1igp6jzrtce.js";import"./c0dr65ykcqmn5jn4.js";import"./jr1b41w4nuv00isi.js";import"./h28ootcilxet47c8.js";import"./ab6tyx2xygyb56l3.js";import"./bluopupp3hty4d7q.js";import"./ca7lq2gyndiywe6g.js";import"./c9avu4yfkjav9bdb.js";const _e=t=>c.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",...t},c.createElement("path",{fill:"currentColor",d:"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm6.25-2.75v5.5c0 .802.448 1 1 1H10c.552 0 1-.198 1-1v-5.5a1 1 0 0 0-1-1h-.75a1 1 0 0 0-1 1Zm5.75-1a1 1 0 0 0-1 1v5.5c0 .802.448 1 1 1h.75c.552 0 1-.198 1-1v-5.5a1 1 0 0 0-1-1H14Z"}));function I({label:t,icon:s,disabled:n=!1,onClick:r}){return e.jsxs("button",{className:"flex w-full items-center gap-2 rounded p-2 hover:bg-token-main-surface-secondary",disabled:n,onClick:r,children:[e.jsx("div",{className:"flex h-7 w-7 items-center justify-center",children:s}),e.jsx("div",{className:"text-sm",children:t})]})}function Pe({automation:t,updateForceShowActions:s,onClickEdit:n,onClickDelete:r}){return t.next_run_times.length===0?e.jsx(Ee,{onClickDelete:r}):e.jsx(Ie,{automation:t,updateForceShowActions:s,onClickEdit:n,onClickDelete:r})}function Ee({onClickDelete:t}){return e.jsx("div",{children:e.jsx(L,{onClick:t,children:e.jsx(T,{className:"icon-md"})})})}function Ie({automation:t,updateForceShowActions:s,onClickEdit:n,onClickDelete:r}){const o=b(),i=D(),[l,d]=c.useState(t.is_enabled);c.useEffect(()=>d(t.is_enabled),[t.is_enabled]);const{mutate:m}=W({automation_id:t.id,onError:u=>{i.danger(o.formatMessage(u?g.messages.enableFailure:g.messages.pauseFailure)),d(!u)}}),[j,p]=c.useState(!1);return e.jsxs("div",{className:"flex",children:[e.jsx(L,{onClick:n,children:e.jsx(q,{className:"icon-sidebar"})}),e.jsx(K,{alignAgainstAnchor:"start",sideOffset:4,triggerButton:e.jsx("button",{className:"rounded-md p-2 hover:bg-token-main-surface-secondary",children:e.jsx(X,{className:"icon-sidebar"})}),open:j,onOpenChange:u=>{s(u),p(u)},children:e.jsxs("div",{children:[e.jsx(I,{label:l?e.jsx(x,{...g.messages.pause}):e.jsx(x,{...g.messages.resume}),icon:l?e.jsx(ve,{className:"icon-md"}):e.jsx(Me,{className:"icon-md"}),onClick:()=>{d(!l),m({is_enabled:!l}),p(!1)}}),e.jsx(I,{label:e.jsx(x,{...g.messages.delete}),icon:e.jsx(T,{className:"icon-md"}),onClick:r})]})})]})}function L({children:t,...s}){return e.jsx("button",{className:"rounded-md p-2 hover:bg-token-main-surface-secondary",...s,children:t})}function Ae({automation:t}){return t.next_run_times.length===0?t.last_run_time?e.jsx("div",{className:"text-sm text-token-text-secondary",children:e.jsx(Ne,{dateString:t.last_run_time})}):null:t.schedule_components?e.jsx(Je,{automation:t}):null}function Je({automation:t}){return e.jsxs("div",{className:"flex items-center gap-1 text-sm text-token-text-secondary",children:[Te(t)&&e.jsx(Y,{className:"icon-sm"}),e.jsx(ke,{item:t,useShortForm:!0})]})}function Te(t){return t.schedule_components?.frequency!=="once"}function Re({filter:t}){const{isLoading:s,isFetchingNextPage:n,hasNextPage:r,fetchNextPage:o}=z({queryKey:["automations",t],queryFn:async({pageParam:i})=>{const l=await Q.getAutomations(i,t);return Z.initJawbonesFromServerData(l.items,l.cursor,t),l},initialPageParam:w.getCursor(t),getNextPageParam:i=>i.cursor??void 0});return s||n?e.jsx(A,{}):r?e.jsxs("button",{className:"flex cursor-pointer items-center gap-1",onClick:()=>{o()},children:[e.jsx(V,{className:"icon-sidebar text-token-text-secondary"}),e.jsx("div",{className:"text-sm text-token-text-secondary",children:e.jsx(x,{...h.seeMore})})]}):null}function Le({icon:t,title:s,onClickTitle:n,details:r,actions:o,showActions:i}){return e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"text-token-text-tertiary",children:t}),e.jsx("div",{className:f("flex-1 py-4 text-sm",n&&"cursor-pointer"),onClick:n,children:s}),e.jsx("div",{children:i?o:r})]})}function Fe({label:t,activeIndex:s}){return e.jsx("div",{className:f("mx-4 border-b border-token-border-light pb-4 text-base font-medium",s===0&&"border-transparent"),children:t})}function Oe({automation:t}){return t.is_enabled?t.target_time_utc?e.jsx(ee,{className:"icon-sidebar text-token-text-secondary"}):e.jsx(H,{className:"icon-sidebar text-token-text-tertiary"}):e.jsx(_e,{className:"icon-sidebar text-token-text-tertiary"})}function De({automation:t,filter:s,index:n,activeIndex:r}){const o=y(),[i,l]=c.useState(!1),d=c.useCallback(O=>{l(O)},[]),m=n===r,j=n+1===r,[p,u]=c.useState(!1),[F,v]=c.useState(!1);return e.jsxs("div",{className:f("rounded-2xl",m&&"bg-[#f4f4f4] dark:bg-token-main-surface-secondary"),children:[e.jsx("div",{className:f("mx-4 border-b border-token-border-light",m&&"border-transparent",j&&"border-transparent"),children:e.jsx(Le,{icon:e.jsx(Oe,{automation:t}),title:e.jsx("span",{className:f(s==="scheduled"?"text-token-text-primary":"text-token-text-secondary"),children:t.title}),onClickTitle:()=>{t.conversation_id&&o($(t.conversation_id))},details:e.jsx(Ae,{automation:t}),actions:e.jsx(Pe,{automation:t,updateForceShowActions:d,onClickEdit:()=>u(!0),onClickDelete:()=>v(!0)}),showActions:m||i})}),F&&e.jsx(we,{item:t,onClose:()=>v(!1),onConfirm:()=>v(!1)}),p&&e.jsx(be,{initialScheduleComponents:t.schedule_components,nextRunTimes:t.next_run_times,children:e.jsx(Se,{item:t,source:"tasks",onClose:()=>u(!1)})})]})}function He({label:t,filter:s,automations:n,isActiveSection:r}){const[o,i]=c.useState(void 0);c.useEffect(()=>{r||i(void 0)},[r]);const l=c.useMemo(()=>s==="scheduled"?Ge(n):n,[n,s]);return e.jsxs("div",{children:[e.jsx(Fe,{label:t,activeIndex:o}),e.jsxs("div",{className:"flex flex-col",children:[l.map((d,m)=>e.jsx("div",{onMouseEnter:()=>i(m),onMouseLeave:()=>i(void 0),children:e.jsx(De,{automation:d,filter:s,activeIndex:r?o:void 0,index:m})},d.id)),e.jsx("div",{className:"p-4",children:e.jsx(Re,{filter:s})})]})]})}function Ge(t){return[...t].sort((s,n)=>{const r=s.next_run_times&&s.next_run_times.length?new Date(s.next_run_times[0]).getTime():NaN,o=n.next_run_times&&n.next_run_times.length?new Date(n.next_run_times[0]).getTime():NaN;return!isNaN(r)&&!isNaN(o)?r-o:isNaN(r)?1:-1})}const Be=[{title:a({id:"px0KEi",defaultMessage:"Summarize AI news every week"}),prompt:a({id:"YTP/VT",defaultMessage:"On Fridays at 2 PM, send me a summary of the latest news in AI. Keep it brief, and keep an eye out for especially-surprising stories."}),category:"news"},{title:a({id:"qnUdUt",defaultMessage:"Practice French with me daily"}),prompt:a({id:"zNE69X",defaultMessage:"Let’s do a daily French lesson — remind me each day, in the afternoon, and then help me practice."}),category:"teach-or-explain"},{title:a({id:"eiy5Ij",defaultMessage:"Remind me about mom’s birthday"}),prompt:a({id:"aZA3OR",defaultMessage:"I don’t want to forget Mom’s birthday. It’s on..."}),category:"misc"},{title:a({id:"GC/Co1",defaultMessage:"Each evening, check the next day’s weather"}),prompt:a({id:"aSUv3a",defaultMessage:"Every evening, sometime after 8 PM, check the next day’s weather and let me know if it’s going to rain."}),category:"weather"},{title:a({id:"meGwc1",defaultMessage:"Send me a daily horoscope"}),prompt:a({id:"6VmLLW",defaultMessage:"Send me a daily horoscope, sometime before breakfast — just a quick summary. My sign is..."}),category:"misc"},{title:a({id:"HL4R0g",defaultMessage:"Make sure I relax this weekend"}),prompt:a({id:"ju8rN+",defaultMessage:"On Friday night, send me a short list of ways to relax — based on everything you know about my interests."}),category:"idea"},{title:a({id:"Q1bJy8",defaultMessage:"Check for cheap flights to Tokyo"}),prompt:a({id:"QohXcp",defaultMessage:"Once a week, check for cheap (below ~$400) flights from SFO to Tokyo — and let me know if you find any."}),category:"travel"},{title:a({id:"+kI94E",defaultMessage:"Don’t let me forget to stretch every day"}),prompt:a({id:"NW0Zk3",defaultMessage:"Don’t let me forget to stretch — send me a reminder every weekday afternoon."}),category:"misc"},{title:a({id:"rHJEnj",defaultMessage:"Suggest a morning mindfulness exercise"}),prompt:a({id:"ah43oC",defaultMessage:"Early each weekday morning, suggest a 5-minute mindfulness exercise for me. It could be guided breathing, a short body scan, or whatever."}),category:"idea"},{title:a({id:"IbEosX",defaultMessage:"Find a fresh, healthy recipe each Monday"}),prompt:a({id:"GRTGDW",defaultMessage:"Every Monday afternoon, suggest one new, simple, and wholesome recipe I can try that week. Include ingredients, instructions, and a little note on why this particular recipe is special."}),category:"teach-or-explain"},{title:a({id:"J/AIWp",defaultMessage:"Give me a tip for using ChatGPT every Tuesday"}),prompt:a({id:"5KLHO8",defaultMessage:"Every Tuesday afternoon, send me a tip about how to get the most out of ChatGPT. Call them ”Tuesday Tips,” because I’ve always been a fan of alliteration."}),category:"genius"},{title:a({id:"Y/bfH8",defaultMessage:"Keep an eye out for CRJ tour dates"}),prompt:a({id:"HwHQzy",defaultMessage:"Check for Carly Rae Jepsen tour dates around me — let me know when she announces any!"}),category:"local"},{title:a({id:"VfFpl5",defaultMessage:"Send me a daily workout plan"}),prompt:a({id:"ystKC5",defaultMessage:"Every day, send me a workout plan — and take into account what we did the previous day."}),category:"work"},{title:a({id:"fSkvJe",defaultMessage:"Ask how my New Year’s resolutions are going"}),prompt:a({id:"9b5IwU",defaultMessage:"Every month, ask about my New Year’s resolutions — make sure I’m staying on top of them!"}),category:"misc"},{title:a({id:"mYtv9W",defaultMessage:"Remind me to journal every night"}),prompt:a({id:"7SI5Sz",defaultMessage:"Remind me to write in my journal, every night after 7 PM."}),category:"teach-or-explain"},{title:a({id:"f8jyRA",defaultMessage:"Once a month, check for cool local events"}),prompt:a({id:"03RCfs",defaultMessage:"Once a month, check for cool local events — like art show openings, music performances, and the like — and summarize them for me."}),category:"local"},{title:a({id:"a7JMfM",defaultMessage:"Pull together a few date ideas, every Thursday"}),prompt:a({id:"bIMHpo",defaultMessage:"Pull together a few date ideas for me, and send them every Thursday. (What can I say, I’m a romantic!)"}),category:"local"},{title:a({id:"YXkXqR",defaultMessage:"Tell me an ongoing bedtime story"}),prompt:a({id:"h6sw9I",defaultMessage:"Every night, before 9 PM, I want you to write the next (brief) chapter in an ongoing sci-fi story for me."}),category:"write"}];function Ue(){const{isLoadingScheduled:t,isLoadingPaused:s,isLoadingFinished:n}=te(),r=k(w.getAllJawbonesGrouped),o=k(w.getHasJawbones);return!o&&(t||s||n)?e.jsx(ze,{}):o?e.jsx(We,{groupedAutomations:r}):e.jsx(qe,{})}function S(){return null}function ze(){return e.jsx("div",{className:"my-16 h-full",children:e.jsxs("div",{className:"mx-auto h-full max-w-screen-md",children:[e.jsx(S,{}),e.jsx("div",{className:"flex w-full justify-center",children:e.jsx(A,{})})]})})}function We({groupedAutomations:t}){const s=b(),[n,r]=c.useState(void 0);return e.jsx("div",{className:"my-16 h-full",children:e.jsxs("div",{className:"mx-auto h-full max-w-screen-md",children:[e.jsx(S,{}),e.jsx("div",{className:"flex flex-col gap-10",children:Object.entries(t).map(([o,{label:i,filter:l,automations:d}],m)=>d.length>0&&e.jsx("div",{onMouseEnter:()=>r(m),onMouseLeave:()=>r(void 0),children:e.jsx(He,{filter:l,label:s.formatMessage(i),automations:d,isActiveSection:n===m})},o))})]})})}function qe(){const t=b(),s=se(!0),n=y(),r=c.useMemo(()=>[...Be].sort(()=>.5-Math.random()).slice(0,3),[]),{value:o}=J("1902899872");return o?e.jsxs("div",{className:"mx-auto flex h-full max-w-2xl flex-col items-center justify-center gap-8",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center gap-2",children:[e.jsx(S,{}),e.jsx(ae,{className:"icon-2xl"}),e.jsxs("div",{className:"flex flex-col items-center justify-center gap-1",children:[e.jsx("div",{className:"text-base font-medium",children:e.jsx(x,{...h.emptyStateTitle})}),e.jsx("div",{className:"text-sm text-token-text-secondary",children:e.jsx(x,{...h.emptyStateDescription})})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-2",children:[r.map((i,l)=>e.jsx(C,{label:t.formatMessage(i.title),icon:e.jsx(ne,{category:i.category,useV2Colors:!0}),onClick:()=>{_.count(P.JAWBONE,"jawbone_null_state.click_prompt"),n({pathname:"/",search:`?prompt=${encodeURIComponent(t.formatMessage(i.prompt))}&model=${E}`})}},l)),e.jsx(C,{label:t.formatMessage(h.emptyStateTryYourOwn),rightIcon:e.jsx(je,{className:"icon-md text-token-text-secondary"}),onClick:()=>{_.count(P.JAWBONE,"jawbone_null_state.click_empty_prompt"),s({location:"tasks-page",modelId:E})}})]})]}):null}function Ke({children:t}){const{isLoggedInUser:s}=c.useContext(ge);return e.jsx(re,{leading:!0,type:"primary",className:M.header,children:e.jsxs("div",{className:M.headerLeading,children:[s&&e.jsx(oe,{}),t]})})}const bt=G(function(){const{isLoading:s}=J("2304807207"),n=R(),r=y();return c.useEffect(()=>{!s&&!n&&r("/")},[s,n,r]),s||!n?null:e.jsx(Xe,{})});function Xe(){const[t,s]=c.useState(()=>B()),n=R(),r=y();c.useEffect(()=>{n||r("/")},[n,r]);const o=U(),i=e.jsx(ie,{children:e.jsx(ce,{anchor:"vertical",className:N.screen,leading:o?e.jsx(Ke,{children:e.jsx("div",{className:"px-3 text-xl font-medium",children:e.jsx(x,{...h.pageTitle})})}):e.jsxs(le,{children:[e.jsxs("div",{className:"flex items-center overflow-hidden",children:[e.jsx(pe,{clientThreadId:t}),e.jsx("div",{className:"px-3 text-xl font-medium text-token-text-secondary",children:e.jsx(x,{...h.pageTitle})}),e.jsx(de,{})]}),e.jsx(he,{clientThreadId:t})]}),children:e.jsx(Ue,{})})});return e.jsx(me,{children:e.jsx(Ce,{clientThreadId:t,children:e.jsx(ye,{clientThreadId:t,setClientThreadId:s,children:o?e.jsx(xe,{className:f(N.application),sidebar:e.jsx(fe,{}),thread:i}):e.jsx(ue,{clientThreadId:t,setClientThreadId:s,threadContent:i})})})})}export{bt as default};
//# sourceMappingURL=b5fmv5rnw5ukzbcs.js.map
