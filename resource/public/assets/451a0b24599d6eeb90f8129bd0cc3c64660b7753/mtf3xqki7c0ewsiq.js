import{j as e,r as d,c as L,M as $}from"./cg166fqqcxkeiosv.js";import{d as r,Q as V,o as q,n as Q,bC as U,bU as G,ao as W,C as Y,P as z,a as A,bT as J,E as X}from"./mwlpozqwnbys03vp.js";import{dm as Z,dn as ee,c2 as D,dp as se,dq as te,dr as ae}from"./d5k5wa3zyqlgc9bk.js";import{g as ne}from"./i169bq7i6w0d3vgf.js";import{T as f}from"./lyxz8i5c4a3y7iew.js";import{T as k}from"./f9ed4qokx92gm8gq.js";import{S as re}from"./g2uqo8nmpy7dru8c.js";import{B as le}from"./h9b0sydnyfwx9msy.js";import"./lreb9dbp4o4sdhlz.js";import"./mptd6395vqovl9h2.js";import"./oxip50nz1ohggehf.js";import"./bcgu844kz5rwd68s.js";import"./gjup1pnw4u9rwx39.js";import"./kb4dwh5v3nuso8nd.js";function F({title:t,content:a,buttons:n,time:s,icon:i,size:l="default",progressBar:g,disabled:m=!1,onClick:u}){const j="border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.1)]",h=l==="small"?`w-full sm:w-[380px] pr-[15px] pl-[20px] pt-[13px] pb-[10px] ${m?"":"gap-4"}`:"w-full gap-4 px-[22px] pb-[22px] pt-[18px]",b=u?"cursor-pointer":"",o=l==="small"?"text-[15px]":"";return e.jsxs("div",{className:r("inline-flex flex-col items-start justify-start rounded-2xl border",j,"bg-token-main-surface-primary dark:bg-token-main-surface-secondary",h,b,o),onClick:u,style:l==="small"&&!m?{boxShadow:"rgba(0, 0, 0, 0.06) 0px 2px 6px 0px"}:void 0,children:[e.jsxs("div",{className:r("flex flex-col items-start justify-start self-stretch",l!=="small"&&"gap-1.5"),children:[e.jsxs("div",{className:r("inline-flex items-start justify-start self-stretch",l!=="small"&&"gap-2"),children:[e.jsx("div",{className:r("shrink grow basis-0 font-medium leading-normal",m?"text-token-text-secondary":"text-token-text-primary"),children:t}),e.jsx("div",{className:"relative h-6 w-6"}),!m&&(i||e.jsx(re,{className:"relative h-6 w-6"}))]}),e.jsx("div",{className:r("flex w-full flex-col items-start justify-start",l==="small"&&"mt-[-2px]"),children:e.jsx("div",{className:r("inline-flex w-full items-start justify-start self-stretch rounded",l==="small"?"gap-1":"gap-2.5 py-1"),children:e.jsx("div",{className:r("w-full font-normal leading-relaxed",m?"text-token-text-tertiary":"text-token-text-secondary"),children:a})})})]}),g?e.jsxs("div",{className:r("mb-2 inline-flex items-center justify-between self-stretch",n?.length&&"mt-[-10px]"),children:[g,n]}):e.jsxs("div",{className:"inline-flex items-center justify-end self-stretch",children:[s&&e.jsx("div",{className:"shrink grow basis-0 text-[15px] font-normal leading-normal text-token-text-tertiary",children:s}),e.jsx("div",{className:"flex gap-2",children:n})]})]})}const ie=/\*\*(.*?)(?:\*\*|\n|$)/g,O=t=>{let a=null,n;for(;(n=ie.exec(t))!=null;)a=n[1].trim();return a},_={strong:t=>{const{node:a,children:n,...s}=t;return e.jsx("strong",{...s,className:r(s.className,"font-semibold text-token-text-primary"),children:n})},p:t=>{const{node:a,children:n,...s}=t;return e.jsx("p",{...s,className:r(s.className,"text-base","has-[strong]:mb-1 [&:not(:first-child)]:has-[strong]:mt-3 [&:not(:has(strong))]:mb-3"),children:n})}};function oe({message:t,isExpandable:a}){const s=t?.create_time?new Date(t.create_time*1e3):Date.now(),i=te(+s,48e4);return e.jsx(ae,{percentage:i,className:r("mr-4",a?"!w-3/4":"!w-full"),backgroundClassName:"bg-token-sidebar-surface-secondary rounded-full",barClassName:"bg-token-text-primary rounded-full",transitionDuration:`${(100-i)/100*.2}s`,transitionTimingFunction:"cubic-bezier(0.55, 0, 1, 1)",height:8})}function me({isExpandable:t,handleOpenSidebarSummarizer:a,summarizationHeadline:n,latestTitle:s,message:i}){return e.jsx("div",{className:"pb-2",children:e.jsx(F,{buttons:[e.jsx(J,{onClick:a,color:"secondary",className:"!h-[38px] text-[15px] font-normal text-token-text-secondary",children:e.jsx("div",{className:"px-1",children:e.jsx($,{id:"wQcuK8",defaultMessage:"Details"})})},"Details")],title:n,time:null,icon:e.jsx("div",{className:""}),content:`${s}...`,size:"small",progressBar:e.jsx(oe,{message:i,isExpandable:t})})})}function ce({handleOpenSidebarSummarizer:t,summarizationHeadline:a,message:n}){return e.jsx("div",{className:"pb-2",children:e.jsx(F,{buttons:[],title:a,time:null,content:n?.metadata?.finished_text??"",size:"small",disabled:!0,onClick:t})})}function ke({messages:t,isStreaming:a,isLastMessage:n,clientThreadId:s,currentGroupedMessageIndex:i,turnIndex:l}){const[g,m]=d.useState(""),[u,j]=d.useState(!1),h=V(s,p=>p?.async_status===X.STREAMING),b=L(),o=q(t)?.message,x=h||a||o?.status==="in_progress",M=o?.id,w=ne(b,t),v=o?.metadata?.initial_text,T=o?.metadata?.summarization_headline,c=t.map(({message:p})=>Q(p)).join(`

`),{toggleThreadSidebar:E}=U(),B=Z(),{layer:P}=G("3711177917"),I=P.get("is_summarizer_default_expanded",!1),H=P.get("is_inline_summarizer_enabled",!1),{value:K}=W("1330965306"),N=d.useCallback(()=>{E({type:"summarizer",clientThreadId:s,currentGroupedMessageIndex:i,turnIndex:l})},[E,s,i,l]);d.useEffect(()=>{const p=O(c);p?m(p):v!=null&&m(v)},[c,v]),d.useEffect(()=>{c.length>0&&j(!0)},[c]);const R=Y(s),y=d.useMemo(()=>({client_thread_id:s,message_id:M,conversationId:R}),[s,M,R]);d.useEffect(()=>{u&&z.logEvent(A.receivedA8KM123Message,y)},[u]);const S=d.useCallback(()=>{z.logEvent(A.openedA8KM123Message,{...y,isStreaming:a})},[y,a]);if(o?.metadata?.model_slug==="o1-pro")return h&&n||a?e.jsx(me,{isExpandable:u,handleOpenSidebarSummarizer:N,summarizationHeadline:T??null,latestTitle:g,message:o}):e.jsx(ce,{handleOpenSidebarSummarizer:N,summarizationHeadline:T??null,message:o});const C=x?g:O(w)??w;return B?e.jsx(ee,{alignAgainstAnchor:"start",sideOffset:4,className:"!p-0",triggerButton:e.jsx(k,{status:x?f.Running:f.Finished,highlightedCommand:C,onOpenAnalytics:S}),children:c?e.jsx(le,{mode:x?"bottom":"top",followButtonClassName:"hidden",scrollViewClassName:"max-h-96",children:e.jsx(D,{componentOverrides:_,className:"not-prose px-4 py-2 leading-6",children:c})}):e.jsx("div",{className:"py-10",children:e.jsx(se,{isCompletionRequestInProgress:x})})}):H?e.jsx(k,{status:x?f.Running:f.Finished,highlightedCommand:C,onOpenAnalytics:S,defaultExpanded:I,children:c?e.jsx("div",{className:"mb-4 border-l-2 pl-4 dark:border-token-text-secondary",children:e.jsx(D,{componentOverrides:K?{..._,strong:()=>null}:_,className:"not-prose leading-6",children:c})}):null}):e.jsx(k,{status:x?f.Running:f.Finished,highlightedCommand:C,onOpenAnalytics:S,onClick:N})}export{_ as SUMMARY_MARKDOWN_COMPONENT_OVERRIDES,ke as default};
//# sourceMappingURL=mtf3xqki7c0ewsiq.js.map
