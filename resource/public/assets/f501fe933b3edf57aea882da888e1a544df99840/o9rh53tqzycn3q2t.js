import{a0 as y,O as A,B as D,D as P,S as O,bd as B,be as E,dE as f,ag as g,f$ as R,dJ as T,eS as U,g0 as I,j as _,eX as L,ab as Y}from"./n26mv7rx7nquqst2.js";import{r as m,c as z,j as e,M as t,e as H}from"./n1tvutderx19k1zs.js";import{cf as F,cQ as G,U as J,cR as K,cS as Q,cT as q,cU as V,cV as x,bJ as b,cW as j}from"./pceg3mlzf8dzw9ob.js";function X(){const r=F(),{data:n}=y(),a=A(n),u=a!=null||n!=null,[c,o]=m.useState(!1),d=n?.accountItems,k=G(a?.id??""),w=a?.id,l=d?.find(i=>i.id===w),M=a?.isOwnerOfAccount()&&a.isTeam()&&!a.hasPaidSubscription(),W=a?.isOwnerOfAccount()&&a.isTeam()&&a.hasPaidSubscription(),p=d?.filter(i=>!i.isDeactivated()),v=z(),S=D();let h=U;a?h=a.mustGetSubscriptionBillingCurrency("DeactivatedWorkspaceModal"):(P.addError(new Error("Current account is undefined in DeactivatedWorkspaceModal")),O.logEvent("chatgpt_undefined_current_account"));const N=m.useCallback(()=>{o(!0),J.setPurchaseWorkspaceData({minimumSeats:Math.max(k,K),billingDetails:{currency:h},existingAccount:l}),o(!1)},[k,l,h]),C=async()=>{o(!0);try{const i=await g.fetchCustomerPortalUrl();location.href=i.url,o(!1)}catch{o(!1),S.warning(v.formatMessage(s.unableToOpenStripeDashboard),{hasCloseButton:!0})}};return a==null||!l||!p?e.jsx(e.Fragment,{}):e.jsx(B,{type:"success",onClose:E,isOpen:u,title:e.jsx("span",{className:"text-lg",children:e.jsx(t,{...s.workspaceDeactivated})}),children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex w-full items-center gap-4",children:[e.jsx(Q,{src:l.data.profilePictureUrl,size:"large"}),e.jsx("div",{className:"font-semibold",children:l.data.name})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.workspaceDeactivated})}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{className:"mb-1",children:e.jsx(t,{...s.chatHistoryUnavailable})}),e.jsx("li",{children:e.jsx(t,{...s.otherWorkspacesAvailable})})]})]}),M&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.purchaseNewSubscription})}),e.jsx(f,{className:"m-auto mt-2 w-full",loading:c,onClick:N,children:e.jsx(t,{...s.purchaseNewSubscriptionButton})})]}),W&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.resolveOutstandingInvoice})}),e.jsx(f,{className:"m-auto mt-2 w-full",loading:c,onClick:C,children:e.jsx(t,{...s.manageSubscriptionButton})})]}),e.jsx(q,{}),e.jsx("div",{className:"w-full justify-center",children:p.length>0?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.selectWorkspace})}),e.jsx(V,{data:p})]}):e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-base font-bold",children:e.jsx(t,{...s.createPersonalWorkspace})}),e.jsx(t,{...s.deactivatedWorkspaceReason})]}),e.jsxs("div",{className:"flex w-full items-center gap-4",children:[r&&r.picture&&e.jsx("img",{alt:"Profile",src:r.picture,width:x.workspaceMedium,height:x.workspaceMedium,className:"flex items-center justify-center rounded-sm"}),e.jsx("span",{className:"font-semibold",children:r&&e.jsx("span",{children:r.name})})]}),e.jsx("div",{className:"ml-auto",children:e.jsx(f,{title:v.formatMessage(s.createPersonalWorkspaceButton),loading:c,onClick:async()=>{o(!0),await g.upsertPersonalWorkspace(),R(I),T()},color:"primary",className:"ml-4"})})]})})]})})}const s=_({workspaceDeactivated:{id:"deactivatedWorkspaceModal.workspaceDeactivated",defaultMessage:"Your workspace has been deactivated"},workspaceDeactivatedDesc:{id:"deactivatedWorkspaceModal.workspaceDeactivatedDesc",defaultMessage:"Your workspace has been deactivated."},chatHistoryUnavailable:{id:"deactivatedWorkspaceModal.chatHistoryUnavailable",defaultMessage:"Your chat history and settings will not be available."},otherWorkspacesAvailable:{id:"deactivatedWorkspaceModal.otherWorkspacesAvailable",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},selectWorkspace:{id:"deactivatedWorkspaceModal.selectWorkspace",defaultMessage:"Select a workspace to continue"},createPersonalWorkspace:{id:"deactivatedWorkspaceModal.createPersonalWorkspace",defaultMessage:"Create a personal workspace to continue"},deactivatedWorkspaceReason:{id:"deactivatedWorkspaceModal.deactivatedWorkspaceReason",defaultMessage:"Because your workspace has been deactivated, you need to create a personal workspace to continue using ChatGPT."},profileAlt:{id:"deactivatedWorkspaceModal.profileAlt",defaultMessage:"Profile"},createPersonalWorkspaceButton:{id:"deactivatedWorkspaceModal.createPersonalWorkspaceButton",defaultMessage:"Create a personal workspace"},unableToOpenStripeDashboard:{id:"deactivatedWorkspaceModal.unableToOpenStripeDashboard",defaultMessage:"Unable to open Stripe dashboard"},purchaseNewSubscription:{id:"deactivatedWorkspaceModal.purchaseNewSubscription",defaultMessage:"You can reactivate your workspace by purchasing a new subscription."},purchaseNewSubscriptionButton:{id:"deactivatedWorkspaceModal.purchaseNewSubscriptionButton",defaultMessage:"Purchase subscription"},resolveOutstandingInvoice:{id:"deactivatedWorkspaceModal.resolveOutstandingInvoice",defaultMessage:"You can reactivate your workspace by resolving an outstanding invoice on your subscription."},manageSubscriptionButton:{id:"deactivatedWorkspaceModal.manageSubscriptionButton",defaultMessage:"Manage subscription"}}),ae=L(function(){const n=b(j.workspaces),a=Y(),u=b(j.workspaceId),c=n.find(d=>d.id===u),o=H();return m.useEffect(()=>{a?.data&&(!c||!c.deactivated)&&o("/")},[a,c,o]),a?.data&&(!c||!c.deactivated)?e.jsx("div",{}):e.jsx(X,{})});export{ae as default};
//# sourceMappingURL=o9rh53tqzycn3q2t.js.map
