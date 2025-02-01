import{au as v,gf as j,dq as M,bW as G,fW as k,bH as z,gg as C,bd as S,bY as h,be as V,eX as R,fw as L,ab as _,g1 as F}from"./n26mv7rx7nquqst2.js";import{r as f,j as e,e as p,M as l,u as w,z as T}from"./n1tvutderx19k1zs.js";import{ah as A,dP as B,di as N,l as O,dQ as E,dR as b,dS as D,dk as P,dT as $,dU as H}from"./pceg3mlzf8dzw9ob.js";import{G as W}from"./ecwz29dm2crjfw9f.js";import{F as u,a as x,b as y,c as q,G as U}from"./mwshpzkua1oor5ak.js";const I=({gizmoId:t,limit:o,cursor:s})=>w({queryFn:async()=>N.listVersions({gizmoId:t}),queryKey:["gizmo","versions",{gizmoId:t,limit:o,cursor:s}]}),K=f.memo(function({gizmoId:o,onSelectVersion:s}){const{value:r}=v("3645668434");return!o||!r?null:e.jsx(Q,{gizmoId:o,onSelectVersion:s})});function Q({gizmoId:t,onSelectVersion:o}){const s=p(),{data:r}=I({gizmoId:t}),n=r?r.items.reduce((a,d)=>{const c=new Date(d.updated_at),g=`${c.getFullYear()}-${c.getMonth()+1}-${c.getDate()}`;return a[g]||(a[g]=[]),a[g].push(d),a},{}):null,i=a=>{s(`/g/${t}/view?version=${a}`)};return n?e.jsx("div",{className:"relative h-full w-screen max-w-2xs",children:e.jsx("div",{className:"flex h-full max-w-2xs flex-col overflow-y-scroll bg-token-sidebar-surface-primary py-6 shadow-xl",children:e.jsx("div",{className:"relative flex-1 px-4 sm:px-6",children:Object.keys(n).map((a,d)=>{const c=n[a];return e.jsx(Y,{date:a,entries:c,onSelectVersion:o,onRestoreVersion:i},d)})})})}):null}function Y({date:t,entries:o,onSelectVersion:s,onRestoreVersion:r}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-b border-token-border-medium py-2 font-semibold uppercase text-token-text-secondary",children:e.jsx(j,{value:t,dateStyle:"medium"})}),e.jsx("div",{className:"flex flex-col space-y-2",children:o.map((n,i)=>e.jsxs("div",{className:"flex flex-row items-center justify-between border-b border-token-border-medium",onClick:()=>s(n.version),children:[e.jsx("span",{className:"grow p-2 hover:cursor-pointer hover:bg-token-sidebar-surface-tertiary",children:e.jsx(j,{value:n.updated_at,timeStyle:"short"})}),e.jsx(J,{onRestoreVersion:()=>{r(n.version)}})]},i))})]})}function J({onRestoreVersion:t}){return e.jsx(e.Fragment,{children:e.jsx(M,{sideOffset:8,triggerButton:e.jsx("button",{color:"secondary",className:"rounded-lg px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-token-sidebar-surface-tertiary active:scale-[0.9]",children:e.jsx(A,{className:"icon-md"})}),children:e.jsxs(G.Item,{className:"items-center",disabled:!1,onClick:t,children:[e.jsx(B,{className:"icon-md"}),e.jsx(l,{id:"gizmoVersionHistory.restoreVersionLabel",defaultMessage:"Restore this version"})]})})})}const X=({gizmoId:t,version:o})=>w({queryFn:async()=>N.getVersion({gizmoId:t,version:o}),queryKey:["gizmo","version",{gizmoId:t,version:o}]}),Z=(t,o)=>`/gpts/editor/${t}?version=${o}`;function ee({gizmoId:t}){const[o,s]=f.useState(null),r=p(),{data:n}=O(t),i=n?.gizmo.current_user_permission?.can_write,a=E(),[d,c]=f.useState(!1),g=()=>{r(o?Z(t,o):$(t))};return e.jsxs("div",{className:"flex h-screen w-full flex-col items-center",children:[e.jsx("div",{className:"relative flex h-16 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",children:n&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex cursor-pointer items-center gap-2",onClick:()=>r(-1),children:[e.jsx(k,{className:"icon-lg"}),e.jsx("div",{className:"font-semibold",children:i?e.jsx(l,{id:"gizmoReadOnly.versionHistoryTitle",defaultMessage:"Version History"}):e.jsx(l,{id:"gizmoReadOnly.configurationTitle",defaultMessage:"Configuration"})})]}),e.jsx("div",{className:"mr-4 flex items-center gap-2",children:i?e.jsx(b,{color:"secondary",onClick:()=>{o&&o!==n.gizmo.live_version&&n.tools.find(m=>m.type===z.JIT_PLUGIN&&m.metadata.auth?.type!==C.None)?c(!0):g()},children:e.jsx(l,{id:"gizmo.readonly.restoreVersion",defaultMessage:"Restore this version"})}):e.jsx(b,{color:"secondary",loading:a.isPending,onClick:async()=>{const m=await a.mutateAsync({gizmoId:t});m.gizmo.id&&r(`/gpts/editor/${m.gizmo.id}`)},children:e.jsx(l,{id:"gizmo.readonly.duplicate",defaultMessage:"Duplicate"})})})]})}),e.jsxs("div",{className:"flex h-full w-full items-center",children:[i&&e.jsx(K,{gizmoId:t,onSelectVersion:m=>{s(m)}}),e.jsx(te,{gizmoId:t,version:o})]}),d&&e.jsx(se,{onClose:()=>{c(!1)},onContinue:g})]})}function se({onClose:t,onContinue:o}){const[s,r]=f.useState(!1);return e.jsx(S,{isOpen:!0,onClose:t,type:"warning",showCloseButton:!0,title:e.jsx(l,{id:"gizmoReadOnly.authModalWarningTitle",defaultMessage:"Reset Authentication for Custom Actions"}),primaryButton:e.jsx(h,{onClick:()=>{r(!0),o()},loading:s,color:"secondary",children:e.jsx(l,{id:"gizmoReadOnly.authModalContinueButton",defaultMessage:"Continue"})}),secondaryButton:e.jsx(h,{onClick:t,color:"secondary",children:e.jsx(l,{id:"gizmoReadOnly.authModalCancelButton",defaultMessage:"Cancel"})}),size:"normal",children:e.jsx(l,{id:"gizmoReadOnly.authModalWarningBody",defaultMessage:"Restoring this version will reset authentication of your custom actions. You may need to reconfigure each custom action afterwards."})})}function te({gizmoId:t,version:o}){const{data:s}=X({gizmoId:t,version:o}),[r,n]=f.useState(null);if(!s)return null;const i=s.tools.filter(a=>a.type===z.JIT_PLUGIN);return e.jsx("div",{className:"flex max-h-[80vh] flex-grow justify-center overflow-y-auto",children:e.jsxs("div",{className:"flex w-full max-w-2xl flex-col text-sm",children:[e.jsx(u,{className:"self-center",children:e.jsx(D,{src:s.gizmo.display.profile_picture_url,isFirstParty:!1,className:"h-12 w-12"})}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(l,{id:"gizmo.readonly.nameLabel",defaultMessage:"Name"})}),e.jsx(y,{type:"text",value:s.gizmo.display.name??"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(l,{id:"gizmo.readonly.descriptionLabel",defaultMessage:"Description"})}),e.jsx(y,{type:"text",value:s.gizmo.display.description??"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(l,{id:"gizmo.readonly.instructionsLabel",defaultMessage:"Instructions"})}),e.jsx(q,{className:"resize-none bg-token-main-surface-secondary",rows:8,value:s.gizmo.instructions??"",disabled:!0})]}),s.gizmo.display.prompt_starters&&s.gizmo.display.prompt_starters.length>0&&e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(l,{id:"gizmo.readonly.conversationStartersLabel",defaultMessage:"Conversation starters"})}),s.gizmo.display.prompt_starters.map((a,d)=>e.jsx(y,{type:"text",value:a,disabled:!0,className:"resize-none bg-token-main-surface-secondary"},d))]}),s.files&&s.files.length>0&&e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(l,{id:"gizmo.readonly.knowledgeLabel",defaultMessage:"Knowledge"})}),s.files.map((a,d)=>e.jsx(P,{file:a.name,fileId:a.id},d))]}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(l,{id:"gizmo.readonly.capabilitiesLabel",defaultMessage:"Capabilities"})}),e.jsx(W,{enabledTools:s.tools,onEnabledToolsChange:V})]}),i&&i.length>0&&e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(l,{id:"gizmo.readonly.actionsLabel",defaultMessage:"Actions"})}),i.map((a,d)=>{const c=a;return e.jsx(U,{isDisabled:!1,actionTool:c,onShowActionsEditor:()=>{r?.metadata.action_id===c.metadata.action_id?n(null):n(c)}},d)}),r&&e.jsx("textarea",{readOnly:!0,value:r.metadata.raw_spec??"",className:"mb-16 block h-96 w-full border-t-0 border-token-main-surface-tertiary bg-transparent p-2 font-mono text-xs text-token-text-primary"})]})]})})}const le=()=>(L(),null),de=R(function(){const o=_(),s=p(),n=T().gizmoId??"",i=F(n),{value:a}=v("3645668434");return f.useEffect(()=>{o!=null&&o.isFree()&&s("/")},[o,s]),f.useEffect(()=>{i&&H(i)&&s(`/g/${n}/project`)},[i,s,n]),a?e.jsx(ee,{gizmoId:i}):null});export{le as clientLoader,de as default};
//# sourceMappingURL=kpirwqfd7cf7pm53.js.map
