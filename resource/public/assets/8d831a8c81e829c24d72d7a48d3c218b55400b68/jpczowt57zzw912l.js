const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/lzjxt8202jwcvecr.js","assets/n1tvutderx19k1zs.js","assets/efuue3ezs0mj4ucx.js","assets/root-gmm606mb.css","assets/c87uv1mutc86tiqk.js","assets/conversation-small-nranh1cg.css"])))=>i.map(i=>d[i]);
import{B as re,bd as J,bY as Z,j as L,bo as Q,bH as z,dm as le,d as ce,ac as de,bs as me,bt as ue,dq as R,a7 as ge,aE as X,au as N,c5 as D,fZ as he,er as xe,b9 as Y,bW as i,P as Ce,ep as pe,b_ as fe,t as ve,fN as we,av as Se,fH as je}from"./efuue3ezs0mj4ucx.js";import{c as H,r as S,j as e,M as o,b as U,a as ee,e as ae}from"./n1tvutderx19k1zs.js";import{cf as be,I as V,H as p,co as ye,dh as M,U as C,hA as Ge,dG as Ie,dH as ze,dI as Me,bW as ke,hB as te,hC as Pe,gm as Te,hD as Ae,hE as Fe,hF as _e,bI as O,d2 as se,ac as ie,ab as Ee,bK as Ne,gr as De,aH as Le,gq as He,fq as Ue,gk as Ve,ho as ne,bq as We,e0 as Oe,c$ as Be,hG as qe,eJ as Ke,ap as $e,hH as B,bT as _,hI as q,fo as Je,f4 as Ze}from"./c87uv1mutc86tiqk.js";import{G as E}from"./bzaypvhehxbw5ucz.js";import{R as Qe}from"./bc1e5dba03ekpmbp.js";import{S as Re}from"./fudxsr1s5wqk63ki.js";import{S as Xe}from"./m3i9t52w2bjqxoks.js";import{S as Ye}from"./duvx3jmzsju7uw87.js";import{c as ea,d as aa}from"./iciw5hmv4qfc606n.js";import"./d995zjnlydagrugw.js";import"./dnxtg4alg3s338gf.js";import"./lvedelvd2wa5y0ah.js";function ta(a){return U({mutationFn:async({message:t,includeFrom:s})=>{await M.sendFeedbackEmail(a,t,s)}})}const sa=({gizmo:a})=>{const t=be(),s=V(p.GPTFeedbackEmail),n=()=>C.closeModal(p.GPTFeedbackEmail),r=H(),w=re(),[c,l]=S.useState(""),[f,d]=S.useState(!0),g=ta(a.gizmo.id),x=c.length===0;return e.jsx(J,{type:"success",title:r.formatMessage(I.title,{name:a.gizmo.display.name}),isOpen:s,onClose:n,size:"custom",showCloseButton:!0,className:"max-w-xl overflow-y-auto",hideSeparator:!0,children:e.jsx("div",{className:"flex flex-row",children:e.jsxs("div",{className:"-mt-4 flex flex-grow flex-col space-y-4",children:[e.jsx(ye,{className:"mb-1 w-full resize-none overflow-y-auto rounded-md bg-transparent focus:border-gray-200 focus:ring-gray-200 dark:focus:border-white dark:focus:ring-white",placeholder:`Write feedback about ${a.gizmo.display.name}...`,value:c,rows:4,onChange:m=>l(m.target.value)}),e.jsxs("div",{className:"flex flex-row items-center space-x-2 self-start",children:[e.jsx("input",{type:"checkbox",checked:f,onChange:m=>d(m.target.checked)}),t&&e.jsx("span",{className:"text-sm",children:e.jsx(o,{...I.includeFrom,values:{email:e.jsx("strong",{children:t.email})}})})]}),e.jsx(Z,{color:"primary",disabled:x,onClick:async()=>{await g.mutateAsync({message:c,includeFrom:f}),w.success(r.formatMessage(I.successToast),{duration:3}),n()},children:e.jsx(o,{...I.send,values:{name:a.gizmo.author.display_name}})})]})})})},I=L({title:{id:"GizmoFeedbackEmailModal.title",defaultMessage:"Feedback about {name}"},send:{id:"GizmoFeedbackEmailModal.sendTo",defaultMessage:"Send To {name}"},successToast:{id:"GizmoFeedbackEmailModal.successToast",defaultMessage:"Feedback sent"},includeFrom:{id:"GizmoFeedbackEmailModal.includeFrom",defaultMessage:"Include my email address {email}"}});function ia(a){const t=ee();return U({mutationFn:async({actionId:s,domain:n,settings:r})=>M.upsertUserActionSettings(s,n,r),onSuccess:()=>{t.invalidateQueries({queryKey:["gizmo","userActionSettings",{gizmoId:a}]})}})}function na(a){const t=ee();return U({mutationFn:async({pluginId:s})=>{await de.deletePluginUserSettings({pluginId:s})},onSuccess:()=>{t.invalidateQueries({queryKey:["gizmo","userActionSettings",{gizmoId:a}]})}})}const oa=({gizmo:a})=>{const{data:t,isLoading:s}=Ge(a.gizmo.id,!0),n=V(p.GPTPrivacySettings),r=()=>C.closeModal(p.GPTPrivacySettings),w=H(),[c,l]=S.useState("actions"),f=t!=null&&t.settings.some(d=>d.oauth_status!=null&&a.tools.some(g=>g.type===z.JIT_PLUGIN&&g.metadata?.action_id===d.action_id));return c==="connected_accounts"&&!f&&l("actions"),e.jsx(J,{title:w.formatMessage(v.title),isOpen:n,onClose:r,type:"success",size:"custom",className:"min-h-[50vh] max-w-3xl overflow-y-auto scroll-smooth",noPadding:!0,showCloseButton:!0,children:s?e.jsx(le,{}):e.jsxs(Ie,{className:"flex flex-row gap-6 p-4",orientation:"vertical",defaultValue:c,onValueChange:d=>{l(d)},children:[f&&e.jsxs(ze,{className:ce("flex min-w-[180px] max-w-[200px] flex-shrink-0 flex-col gap-2"),children:[e.jsx(K,{value:"actions",message:v.actions}),f&&e.jsx(K,{value:"connected_accounts",message:v.connectedAccounts})]}),e.jsxs("div",{className:"flex-1 text-sm",children:[c==="actions"&&e.jsxs($,{children:[e.jsx(o,{...v.allowedActionsDesc,values:{gizmoName:a.gizmo.display.name}}),t?.settings.map((d,g)=>{const x=a.tools?.find(m=>m.type===z.JIT_PLUGIN&&m.metadata?.action_id===d.action_id);return x&&e.jsx(ra,{gizmoId:a.gizmo.id,actionSettings:d,actionTool:x},g)})]}),c==="connected_accounts"&&e.jsxs($,{children:[e.jsx(o,{...v.connectedAccountsDesc,values:{gizmoName:a.gizmo.display.name}}),e.jsx("div",{children:t?.settings.map((d,g)=>{const x=a.tools?.find(m=>m.type===z.JIT_PLUGIN&&m.metadata?.action_id===d.action_id);return x&&d.oauth_status&&e.jsx(la,{gizmoId:a.gizmo.id,actionSettings:d,actionTool:x},g)})})]})]})]})})};function K({value:a,message:t}){return e.jsx(Me,{className:"flex rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-white dark:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:bg-token-main-surface-tertiary md:radix-state-active:text-token-text-primary",value:a,children:e.jsx("div",{className:"truncate",children:e.jsx(o,{...t})})})}function ra({gizmoId:a,actionSettings:t,actionTool:s}){const n=ia(a),r=t.action_settings?.all,w=c=>{s.metadata?.action_id&&s.metadata?.domain&&n.mutateAsync({actionId:s.metadata.action_id,domain:s.metadata.domain,settings:{all:c}})};return e.jsx("div",{children:e.jsxs(oe,{className:"border-b border-black/10 dark:border-white/10",children:[e.jsxs("div",{className:"flex flex-row space-x-4",children:[e.jsx("div",{className:"font-semibold",children:s.metadata?.domain}),e.jsxs("a",{href:s.metadata?.privacy_policy_url,target:"_blank",rel:"noreferrer",className:"flex items-center gap-1 text-token-text-tertiary hover:cursor-pointer hover:text-token-text-secondary",children:[e.jsx(o,{...v.privacyPolicyLink}),e.jsx(ke,{className:"icon-md"})]})]}),e.jsxs("select",{value:r?"always_allow":"unset",onChange:c=>w(c.target.value),className:"rounded border-none bg-token-main-surface-primary text-sm",children:[e.jsx("option",{value:"always_allow",children:e.jsx(o,{...v.alwaysAllowDropdown})}),e.jsx("option",{value:"unset",children:e.jsx(o,{...v.askDropdown})})]})]})})}function la({gizmoId:a,actionSettings:t,actionTool:s}){const n=na(a),r=t.oauth_status==="valid";return e.jsxs(oe,{children:[e.jsx("div",{className:"font-semibold",children:s?.metadata?.domain}),e.jsx(Z,{color:"secondary",size:"small",onClick:()=>{s.metadata?.action_id&&s.metadata?.domain&&(r?n.mutateAsync({pluginId:s.metadata?.action_id}):M.doOAuthRedirect(a,s.metadata?.action_id,s.metadata?.domain,window.location.href))},children:e.jsx(o,{...r?v.logout:v.login})})]})}const $=Q.div`flex flex-col gap-6`,oe=Q.div`flex flex-row justify-between py-3 items-center`,v=L({title:{defaultMessage:"GPT's privacy settings",id:"GizmoPrivacySettings.title"},actions:{defaultMessage:"Actions",id:"GizmoPrivacySettings.actions"},connectedAccounts:{defaultMessage:"Connected accounts",id:"GizmoPrivacySettings.connectedAccounts"},connectedAccountsDesc:{defaultMessage:"Manage which 3rd party accounts can be accessed by {gizmoName}.",id:"GizmoPrivacySettings.connectedAccountsDesc"},allowedActionsTitle:{defaultMessage:"GPT's privacy settings",id:"GizmoPrivacySettings.allowedActionsTitle"},allowedActionsDesc:{defaultMessage:"Select which 3rd party actions are allowed in conversations with {gizmoName}.",id:"GizmoPrivacySettings.allowedActionsDesc"},privacyPolicyLink:{defaultMessage:"Privacy policy",id:"GizmoPrivacySettings.privacyPolicyLink"},alwaysAllowDropdown:{defaultMessage:"Always allow",id:"GizmoPrivacySettings.alwaysAllowDropdown"},askDropdown:{defaultMessage:"Ask",id:"GizmoPrivacySettings.askDropdown"},login:{defaultMessage:"Log in",id:"GizmoPrivacySettings.login"},logout:{defaultMessage:"Log out",id:"GizmoPrivacySettings.logout"}}),ca=a=>S.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},S.createElement("path",{d:"M7.7587 4H14.2413C15.0463 3.99999 15.7106 3.99998 16.2518 4.04419C16.8139 4.09012 17.3306 4.18868 17.816 4.43597C18.5686 4.81947 19.1805 5.43139 19.564 6.18404C19.8113 6.66937 19.9099 7.18608 19.9558 7.74817C20 8.28936 20 8.95372 20 9.75868V10C20 10.5523 19.5523 11 19 11C18.4477 11 18 10.5523 18 10V9.8C18 8.94342 17.9992 8.36113 17.9624 7.91104C17.9266 7.47262 17.8617 7.24842 17.782 7.09202C17.5903 6.7157 17.2843 6.40973 16.908 6.21799C16.7516 6.1383 16.5274 6.07337 16.089 6.03755C15.6389 6.00078 15.0566 6 14.2 6H7.8C6.94342 6 6.36113 6.00078 5.91104 6.03755C5.47262 6.07337 5.24842 6.1383 5.09202 6.21799C4.7157 6.40973 4.40973 6.7157 4.21799 7.09202C4.1383 7.24842 4.07337 7.47262 4.03755 7.91104C4.00078 8.36113 4 8.94342 4 9.8V13.2C4 14.0566 4.00078 14.6389 4.03755 15.089C4.07337 15.5274 4.1383 15.7516 4.21799 15.908C4.40973 16.2843 4.7157 16.5903 5.09202 16.782C5.24842 16.8617 5.47262 16.9266 5.91104 16.9624C6.36113 16.9992 6.94342 17 7.8 17H9C9.55229 17 10 17.4477 10 18C10 18.5523 9.55229 19 9 19H7.75873C6.95374 19 6.28938 19 5.74817 18.9558C5.18608 18.9099 4.66937 18.8113 4.18404 18.564C3.43139 18.1805 2.81947 17.5686 2.43597 16.816C2.18868 16.3306 2.09012 15.8139 2.04419 15.2518C1.99998 14.7106 1.99999 14.0463 2 13.2413V9.7587C1.99999 8.95373 1.99998 8.28937 2.04419 7.74817C2.09012 7.18608 2.18868 6.66937 2.43597 6.18404C2.81947 5.43139 3.43139 4.81947 4.18404 4.43597C4.66937 4.18868 5.18608 4.09012 5.74817 4.04419C6.28937 3.99998 6.95373 3.99999 7.7587 4ZM15.968 13H18.032C18.4706 13 18.8491 13 19.1624 13.0214C19.4922 13.0439 19.8221 13.0934 20.1481 13.2284C20.8831 13.5328 21.4672 14.1169 21.7716 14.852C21.9066 15.1779 21.9561 15.5078 21.9787 15.8376C22 16.1509 22 16.5294 22 16.968V17.032C22 17.4706 22 17.8491 21.9787 18.1624C21.9561 18.4922 21.9066 18.8221 21.7716 19.1481C21.4672 19.8831 20.8831 20.4672 20.1481 20.7716C19.8221 20.9066 19.4922 20.9561 19.1624 20.9787C18.8491 21 18.4706 21 18.032 21H15.968C15.5294 21 15.1509 21 14.8376 20.9787C14.5078 20.9561 14.1779 20.9066 13.852 20.7716C13.1169 20.4672 12.5328 19.8831 12.2284 19.1481C12.0934 18.8221 12.0439 18.4922 12.0214 18.1624C12 17.8491 12 17.4706 12 17.032V16.968C12 16.5294 12 16.1509 12.0214 15.8376C12.0439 15.5078 12.0934 15.1779 12.2284 14.852C12.5328 14.1169 13.1169 13.5328 13.852 13.2284C14.1779 13.0934 14.5078 13.0439 14.8376 13.0214C15.1509 13 15.5294 13 15.968 13ZM14.9738 15.0167C14.7458 15.0323 14.6589 15.0589 14.6173 15.0761C14.3723 15.1776 14.1776 15.3723 14.0761 15.6173C14.0589 15.6589 14.0323 15.7458 14.0167 15.9738C14.0005 16.2107 14 16.5204 14 17C14 17.4796 14.0005 17.7893 14.0167 18.0262C14.0323 18.2542 14.0589 18.3411 14.0761 18.3827C14.1776 18.6277 14.3723 18.8224 14.6173 18.9239C14.6589 18.9411 14.7458 18.9677 14.9738 18.9833C15.2107 18.9995 15.5204 19 16 19H18C18.4796 19 18.7893 18.9995 19.0262 18.9833C19.2542 18.9677 19.3411 18.9411 19.3827 18.9239C19.6277 18.8224 19.8224 18.6277 19.9239 18.3827C19.9411 18.3411 19.9677 18.2542 19.9833 18.0262C19.9995 17.7893 20 17.4796 20 17C20 16.5204 19.9995 16.2107 19.9833 15.9738C19.9677 15.7458 19.9411 15.6589 19.9239 15.6173C19.8224 15.3723 19.6277 15.1776 19.3827 15.0761C19.3411 15.0589 19.2542 15.0323 19.0262 15.0167C18.7893 15.0005 18.4796 15 18 15H16C15.5204 15 15.2107 15.0005 14.9738 15.0167Z",fill:"currentColor"})),da=a=>S.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},S.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2929 2.29289C16.6834 1.90237 17.3166 1.90237 17.7071 2.29289L20.7071 5.29289C21.0976 5.68342 21.0976 6.31658 20.7071 6.70711L17.7071 9.70711C17.3166 10.0976 16.6834 10.0976 16.2929 9.70711C15.9024 9.31658 15.9024 8.68342 16.2929 8.29289L17.5858 7H10.5C7.46243 7 5 9.46243 5 12.5C5 15.5376 7.46243 18 10.5 18H15C15.5523 18 16 18.4477 16 19C16 19.5523 15.5523 20 15 20H10.5C6.35786 20 3 16.6421 3 12.5C3 8.35786 6.35786 5 10.5 5H17.5858L16.2929 3.70711C15.9024 3.31658 15.9024 2.68342 16.2929 2.29289Z",fill:"currentColor"})),ma=me(()=>ue(()=>import("./lzjxt8202jwcvecr.js"),__vite__mapDeps([0,1,2,3,4,5])).then(a=>a.GizmoKeepInSidebarMenuItem));function za({children:a,clientThreadId:t,gizmoResource:s,showReportModal:n,inMobileHeader:r}){return e.jsxs(e.Fragment,{children:[e.jsx(R,{contentAlign:r?"center":"start",size:"small",triggerButton:a,children:e.jsx(ga,{clientThreadId:t,gizmoResource:s,showReportModal:n})}),e.jsx(ua,{gizmoResource:s})]})}function ua({gizmoResource:a}){const t=V(p.GPTRemoveThirdParty),s=ge(),n=te(a);return e.jsxs(e.Fragment,{children:[e.jsx(ea,{gizmoId:a.gizmo.id,creatorId:a.gizmo.author.user_id}),e.jsx(oa,{gizmo:a}),n&&e.jsx(sa,{gizmo:a}),n&&e.jsx(Pe,{gizmo:a}),e.jsx(Qe,{gpt:a,isOpen:t,onClose:()=>C.closeModal(p.GPTRemoveThirdParty),account:s})]})}function ga({clientThreadId:a,gizmoResource:t,showReportModal:s}){const n=Te(t),r=Ae(t),w=Fe(t.gizmo.id),c=X(),l=_e(t),f=t.gizmo.share_recipient===O.Marketplace||t.gizmo.share_recipient===O.Link,d=!l&&f,g=N("1825130190").value,x=N("3645668434").value,m=g&&!l&&te(t),k=c?.includes(D.GizmoSupportEmails)&&!l&&t.gizmo.author.will_receive_support_emails&&m,y=he(),G=xe(a),P=se(D.WorkspaceShareLinks),{isUnauthenticated:T}=Y(),A=P&&G&&!T,h=ae();return e.jsxs(e.Fragment,{children:[e.jsx(i.Item,{onClick:()=>{Ce.logNewChatButtonClicked({location:"Gizmo information dropdown",gizmo_id:t.gizmo.id}),ie(h,`/g/${t.gizmo.short_url}`)},icon:Ee,children:e.jsx(o,{...u.newChat})}),e.jsx(i.Item,{onClick:()=>C.openModal(p.GPTDetails),icon:Ne,children:e.jsx(o,{...u.about})}),t.tools?.find(j=>j.type===z.JIT_PLUGIN)&&e.jsx(i.Item,{onClick:()=>C.openModal(p.GPTPrivacySettings),icon:De,children:e.jsx(o,{...u.privacySettings})}),n&&e.jsx(i.Item,{onClick:()=>{h(w)},icon:Le,children:e.jsx(o,{...u.customize})}),!n&&r&&x&&e.jsxs(e.Fragment,{children:[e.jsx(i.Item,{onClick:async()=>{h(`/g/${t.gizmo.id}/view`)},icon:He,children:e.jsx(o,{id:"GizmoInformation.viewGizmoLabel",defaultMessage:"View configuration"})}),e.jsx(i.Item,{onClick:async()=>{const j=await M.copyGizmo({gizmoId:t.gizmo.id});j.gizmo.id&&h(`/gpts/editor/${j.gizmo.id}`)},icon:pe,children:e.jsx(o,{id:"GizmoInformation.copyGizmoLabel",defaultMessage:"Duplicate GPT"})})]}),e.jsx(ma,{gizmoResource:t,location:"conversation_page"}),e.jsx(aa,{gizmoResource:t}),k&&e.jsx(i.Item,{onClick:()=>C.openModal(p.GPTFeedbackEmail),icon:Ue,children:e.jsx(o,{...u.feedbackEmail})}),m&&e.jsx(i.Item,{onClick:()=>C.openModal(p.GPTReview),icon:Xe,children:e.jsx(o,{...u.reviewGPT})}),d&&e.jsx(i.Item,{onClick:s,icon:Ve,children:e.jsx(o,{...u.report})}),A&&e.jsx(i.Item,{onClick:()=>C.openSharingModal(G),icon:ne,children:e.jsx(o,{...u.shareChat})}),y&&e.jsxs(e.Fragment,{children:[e.jsx(i.Separator,{}),e.jsx(i.Item,{color:"danger",onClick:()=>C.openModal(p.GPTRemoveThirdParty),icon:fe,children:e.jsx(o,{defaultMessage:"Remove GPT from workspace",id:"GizmoInformation.removeGPT"})})]}),c?.includes("debug")&&e.jsxs(e.Fragment,{children:[e.jsx(i.Separator,{}),e.jsx(i.Item,{onClick:()=>{h(We(t))},children:"(Internal) See share page"})]})]})}const ha=({conversation:a,inMainScreen:t=!1})=>{const s=a.id,n=a.gizmo_id,r=Oe(n),c=X()?.includes("debug"),l=ve(s),f=se(D.WorkspaceShareLinks),{isUnauthenticated:d}=Y(),g=f&&l&&!d&&!r,x=we.useStore(),{value:m}=N("3653083604"),{value:k}=Se("2851018874"),y=m||k&&window.documentPictureInPicture,G=je(s),P=ae(),T=Be(),A=H();let h=null;const{snorlaxes:j}=qe();h=j;let W=null;r&&h&&(W=h.find(({gizmo:b})=>b.gizmo.id===n)?.gizmo);const F=Ke();return e.jsxs(e.Fragment,{children:[g&&e.jsx(i.Item,{onClick:()=>C.openSharingModal(l,"History Item Menu"),icon:ne,"data-testid":"share-chat-menu-item",children:e.jsx(o,{...u.shareChat})}),y&&e.jsx(i.Item,{onClick:()=>{x.setThreadId(s,!0),G&&ie(P)},icon:ca,children:e.jsx(o,{...u.openInCompanionWindow})}),null,T&&h&&h?.length>0&&$e(n)&&l&&e.jsxs(e.Fragment,{children:[(g||y)&&e.jsx(i.Separator,{}),r&&e.jsxs(e.Fragment,{children:[h.length>1&&e.jsxs(i.Sub,{children:[e.jsx(i.SubMenuTrigger,{icon:B,children:e.jsx(o,{..._.moveConversationToSnorlax})}),e.jsx(i.Portal,{children:e.jsx(i.SubContent,{children:e.jsx(q,{inSidebarFlyout:!1,onUpdateConversationGizmo:b=>{F({newGizmoId:b,conversation:a,previousGizmoId:n})},currentGizmoId:n})})})]}),e.jsx(i.Item,{onClick:()=>{F({newGizmoId:null,conversation:a,previousGizmoId:n})},icon:da,children:e.jsx("div",{className:"overflow-hidden text-ellipsis whitespace-nowrap",children:e.jsx(o,{..._.removeConversationFromSnorlax,values:{projectName:W?.gizmo.display.name??"project"}})})})]}),!r&&e.jsxs(i.Sub,{children:[e.jsx(i.SubMenuTrigger,{icon:B,children:A.formatMessage(_.addConversationToSnorlax)}),e.jsx(i.Portal,{children:e.jsx(i.SubContent,{children:e.jsx(q,{inSidebarFlyout:!1,onUpdateConversationGizmo:b=>F({newGizmoId:b,conversation:a,previousGizmoId:n})})})})]}),e.jsx(i.Separator,{})]}),e.jsx(i.Item,{disabled:!l,onClick:()=>{setTimeout(()=>{l&&E.publish({kind:t?"editTitleInMainScreen":"editTitle",serverThreadId:l})},100)},icon:Je,children:e.jsx(o,{...u.renameChat})}),e.jsx(i.Item,{disabled:!l,onClick:()=>{l&&E.publish({kind:"archiveChat",serverThreadId:l})},icon:Re,children:e.jsx(o,{...u.archiveChat})}),e.jsx(i.Item,{color:"danger",disabled:!l,onClick:()=>{l&&E.publish({kind:"deleteChat",serverThreadId:l})},icon:Ze,"data-testid":"delete-chat-menu-item",children:e.jsx(o,{...u.deleteChat})}),c&&e.jsxs(e.Fragment,{children:[e.jsx(i.Separator,{}),e.jsx(i.Item,{onClick:()=>C.toggleActiveSidebar("debug"),icon:Ye,children:e.jsx(o,{...u.debugChat})})]})]})},Ma=({conversation:a,children:t,onOpenChange:s,inMainScreen:n=!1,...r})=>e.jsx(R,{...r,onOpenChange:s,side:"bottom",contentAlign:"start",triggerButton:t,size:"auto",children:e.jsx(ha,{conversation:a,inMainScreen:n})}),u=L({newChat:{defaultMessage:"New chat",id:"GizmoInformation.newChat"},about:{defaultMessage:"About",id:"GizmoInformation.about"},privacySettings:{defaultMessage:"Privacy settings",id:"GizmoInformation.privacySettings"},viewDetails:{defaultMessage:"View details",id:"GizmoInformation.viewDetails"},share:{defaultMessage:"Share",id:"GizmoInformation.share"},favorite:{defaultMessage:"Favorite",id:"GizmoInformation.favorite"},customize:{defaultMessage:"Edit GPT",id:"GizmoInformation.customize"},feedbackEmail:{defaultMessage:"Send feedback",id:"GizmoInformation.feedbackEmail"},reviewGPT:{defaultMessage:"Review GPT",id:"GizmoInformation.reviewGPT"},report:{defaultMessage:"Report",id:"GizmoInformation.report"},privacy:{defaultMessage:"Privacy",id:"GizmoInformation.privacy"},deleteChat:{defaultMessage:"Delete",id:"GizmoInformation.deleteChat.0"},debugChat:{defaultMessage:"(Internal) Debug",id:"GizmoInformation.debugChat"},renameChat:{defaultMessage:"Rename",id:"GizmoInformation.renameChat"},archiveChat:{defaultMessage:"Archive",id:"GizmoInformation.archiveChat.0"},shareChat:{defaultMessage:"Share",id:"GizmoInformation.shareChat"},openInCompanionWindow:{defaultMessage:"Open in companion window",id:"GizmoInformation.openInCompanionWindow1"},shareChatLong:{defaultMessage:"Share chat",id:"GizmoInformation.shareChatLong"}});export{Ma as GizmoConversationOptionsDropdown,za as GizmoInformationDropdown,ga as GizmoInformationDropdownItems};
//# sourceMappingURL=jpczowt57zzw912l.js.map
