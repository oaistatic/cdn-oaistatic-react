import{j as e,r as o,c as q,d as U,aw as V,a as z,M as K}from"./cg166fqqcxkeiosv.js";import{dz as Y,dA as G,gc as X,gd as Z,ab as $,cM as S,fc as ee,ge as se,gf as te,dn as ae,c6 as ne,c7 as J,cL as A,bJ as oe,gg as ie,gh as I}from"./d5k5wa3zyqlgc9bk.js";import{J as _,a as re,S as ce,c as w,d as ue}from"./mbyycxtvfh128296.js";import{J as le,S as me}from"./g74664jdkhe4jnwl.js";import{d as E,B,g3 as L,T as H,b as de,n as fe,D as ge}from"./mwlpozqwnbys03vp.js";import{u as he}from"./ksh6u1fgnod0ruxn.js";import{g as xe,a as pe}from"./dkp00zb3hwwe24vq.js";function je({icon:s,children:t,isOpen:a,setIsOpen:n}){return e.jsx(ae,{className:"p-0",alignAgainstAnchor:"start",triggerButton:e.jsx("button",{className:E("flex h-[34px] w-[34px] items-center justify-center rounded-lg hover:bg-token-main-surface-secondary",a&&"bg-token-main-surface-secondary"),children:s}),open:a,onOpenChange:n,children:t})}function M({label:s,icon:t,disabled:a=!1,onClick:n}){return e.jsxs("button",{className:"flex w-full items-center gap-2 rounded p-2 hover:bg-token-main-surface-secondary",disabled:a,onClick:n,children:[e.jsx("div",{className:"flex h-7 w-7 items-center justify-center",children:t}),e.jsx("div",{className:"text-sm",children:s})]})}function be(){return e.jsx(W,{children:e.jsx(Q,{children:e.jsxs("div",{className:"my-2 flex flex-col justify-center",children:[e.jsx("div",{className:"loading-results-shimmer h-2 w-1/2 rounded-full bg-token-main-surface-secondary"}),e.jsx("div",{className:"loading-results-shimmer mt-3 h-2 w-2/5 rounded-full bg-token-main-surface-secondary"})]})})})}function W({children:s}){return e.jsx("div",{className:E("relative inline-block min-w-[320px] max-w-[360px] overflow-hidden rounded-2xl border border-token-border-light shadow-[0_2px_16px_0_rgba(0,0,0,0.04)]"),children:s})}function Q({children:s}){return e.jsx("div",{className:"h-full w-full py-4 pl-5 pr-3",children:s})}function Ne({automation:s}){return s?e.jsx(we,{item:s}):null}function we({item:s}){const t=B();o.useEffect(()=>{Y.count(G.JAWBONE,"jawbone_message_attachment.open")},[]);const{id:a,is_enabled:n,title:g}=s,[m,i]=o.useState(!1),c=o.useRef(null);o.useEffect(()=>{if(c.current){const l=c.current.clientHeight,p=parseFloat(getComputedStyle(c.current).lineHeight);i(l>p)}},[g]);const u=s.next_run_times.length===0,[d,f]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(W,{children:[e.jsx("button",{className:"h-full w-full hover:bg-token-main-surface-secondary",onClick:()=>f(!0),children:e.jsx(Q,{children:e.jsx("div",{className:E("flex cursor-pointer justify-between",m?"items-start":"items-center"),children:e.jsxs("div",{className:"flex flex-col gap-[2px] pr-12 text-sm",children:[e.jsx("div",{ref:c,className:"line-clamp-2 text-left font-medium",children:g}),e.jsx("div",{className:"text-left text-token-text-secondary",children:e.jsx(_,{initialScheduleComponents:s.schedule_components,nextRunTimes:s.next_run_times,children:e.jsx(le,{item:s})})})]})})})}),e.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 transform",children:e.jsx("div",{className:"ml-4 flex",children:e.jsx(ve,{automation_id:a,is_enabled:n,item:s,isFinished:u,onEditModalOpen:()=>f(!0)})})})]}),d&&e.jsx(_,{initialScheduleComponents:s.schedule_components,nextRunTimes:s.next_run_times,children:e.jsx(re,{item:s,source:"chat",onClose:l=>{l&&t.success(l,{hasCloseButton:!0}),f(!1)}})})]})}function ve({automation_id:s,is_enabled:t,item:a,isFinished:n,onEditModalOpen:g}){const m=q(),i=U(),c=B(),[u,d]=o.useState(t);o.useEffect(()=>d(t),[t]);const{mutate:f,isPending:l}=X({automation_id:s,onError:r=>{c.danger(m.formatMessage(r?w.messages.enableFailure:w.messages.pauseFailure),{hasCloseButton:!0}),d(!r)}}),[p,h]=o.useState(!1),[b,v]=o.useState(!1);return e.jsxs(je,{icon:e.jsx(Z,{className:"icon-md"}),isOpen:b,setIsOpen:v,children:[e.jsxs("div",{className:"m-2",children:[!n&&e.jsxs(e.Fragment,{children:[e.jsx(M,{icon:e.jsx($,{className:"icon-md"}),label:m.formatMessage(S.attachmentEdit),onClick:g}),e.jsx(M,{icon:u?e.jsx(ce,{className:"icon-md"}):e.jsx(me,{className:"icon-md"}),label:m.formatMessage(u?w.messages.pause:w.messages.resume),onClick:()=>{const r=!u;d(r),f({is_enabled:r}),v(!1)},disabled:l})]}),n&&e.jsx(M,{icon:e.jsx(ee,{className:"icon-md"}),label:m.formatMessage(w.messages.delete),onClick:()=>{h(!0)}})]}),e.jsx("hr",{className:"w-full border-token-border-light"}),e.jsx("div",{className:"m-2",children:e.jsx(M,{icon:e.jsx(se,{className:"icon-md"}),label:m.formatMessage(S.attachmentViewAll),onClick:()=>{i(te())}})}),p&&e.jsx(ue,{item:a,onClose:()=>h(!1),onConfirm:()=>h(!1)})]})}function Me({highlightedText:s,shouldShimmer:t,className:a}){return e.jsx(V,{children:e.jsx("div",{className:E(t&&"loading-shimmer-pure-text","absolute left-0 top-0 flex h-8 gap-1 overflow-hidden",a),children:e.jsx("span",{children:s})})})}const O="Too many active automations";function Ie({clientThreadId:s,currentGroupedMessage:t,nextMessage:a,isLastMessage:n,isRequestActive:g}){const m=n||a,i=g&&!a,c=o.useRef(i);o.useEffect(()=>{i&&(c.current=i)},[i]);const u=t,d=o.useMemo(()=>{for(const x of u?.messages||[]){const j=L(x.message.author.name);if(j?.namespace===H.DE1D73E)return j}},[u]),f=Se(u,i),l=f?.automationId??"",p=f?.updatedAt??"0",h=f?.error,[b,v]=o.useState(!0),{automation:r,error:N}=he(l);o.useEffect(()=>{N&&N instanceof de&&(N.status===404||N.status===410)&&v(!1)},[N]);const C=z();o.useEffect(()=>{if(!b)return;const x=new Date(p),j=new Date(r?.updated_at);!isNaN(x.getTime())&&!isNaN(j.getTime())&&j<x&&C.invalidateQueries({queryKey:ne.getAutomationQueryKey(l)})},[r,l,p,b,C]);const y=u.messages,T=y[y.length-1]?.message?.metadata?.permissions,P=o.useMemo(()=>T?.some(x=>x.type==="notification"&&x.status==="requested"),[T]);o.useEffect(()=>(h===O&&c.current&&J.setMaxBannerClientThreadId(s),()=>{J.clearMaxBannerClientThreadId()}),[h,s]),o.useEffect(()=>{A.initIfNeeded()},[]);const R=y[0].message.create_time,k=o.useRef(!1),D=Ae();if(o.useEffect(()=>{(async()=>{if(!D){A.clearNotificationRequest();return}if(k.current)return;await ye(r,P,R)&&(k.current=!0,A.setRequestingClientThreadId(s))})()},[r,R,s,P,D]),!i&&h&&h!==O)return e.jsx(Ee,{errorUserMessage:f?.errorUserMessage});if(b&&m){if(l)return e.jsx("div",{className:"mb-3",children:r?e.jsx(Ne,{automation:r}):c.current?e.jsx(F,{functionName:d?.functionName}):e.jsx(be,{})});if(i&&d)return e.jsx(F,{functionName:d.functionName})}return null}function F({functionName:s}){const t=q();return e.jsx("div",{className:"relative h-8 text-token-text-secondary first:mt-0",children:e.jsx(Me,{highlightedText:t.formatMessage(s==="update"?S.updatingAutomation:S.makingAutomation),className:"mr-1.5 mt-1 items-center justify-start",shouldShimmer:!0})})}function Se(s,t){return o.useMemo(()=>{if(t)return;const a=s?.messages?.find(n=>L(n.message.author.name)?.namespace===H.DE1D73E);if(a)try{const n=JSON.parse(fe(a.message));return n.status==="ERROR"?{error:n.message,errorUserMessage:n.user_message}:{automationId:n.jawbone.id,updatedAt:n.jawbone.updated_at}}catch(n){ge.addError("Jawbone: Failed to parse automation message",{cause:n});return}},[s,t])}function Ee({errorUserMessage:s}){return e.jsxs("div",{className:"flex items-center gap-2 pb-1 text-token-text-error",children:[e.jsx(oe,{className:"icon-sidebar"}),e.jsx("div",{children:s??e.jsx(K,{id:"oOQhkY",defaultMessage:"Task scheduling wasn’t completed — please ask again."})})]})}async function ye(s,t,a){if(!s||!t||!a)return!1;const n=new Date(a*1e3);if(!(Math.abs(new Date().getTime()-n.getTime())<=5*60*1e3))return!1;const i=I.getLastRequestTime();return!(i&&Date.now()-new Date(i).getTime()<24*60*60*1e3||I.getPermission()==="denied"||!await xe()||await pe())}function Ae(){const{data:s}=ie({alwaysRefetchOnMount:!1});return s?.some(t=>t.category==="tasks"&&t.options.some(a=>a.channel==="push"&&a.enabled))}export{Ie as JawboneMessage};
//# sourceMappingURL=dh5jjgtrppl9or91.js.map
