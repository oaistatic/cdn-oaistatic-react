import{c as b,j as e,M as l,r as u,u as h,a as j,b as E}from"./n1tvutderx19k1zs.js";import{gH as H,k3 as K,bW as Q,f0 as m,dt as F}from"./pceg3mlzf8dzw9ob.js";import{L as O}from"./jtmo1srlrz7373y1.js";import{bY as v,R as y,a8 as w,B as z,bd as $,au as D,dm as Y}from"./n26mv7rx7nquqst2.js";import{m as n}from"./otxywz0plaeujh3l.js";import{g as I,f as q,d as J,e as V}from"./l5b75d2h8s66e7sn.js";function X({setEnabled:t,isLoading:r,isEnabled:s}){const c=b();return e.jsxs("div",{className:"flex flex-row content-center items-center justify-items-center",children:[e.jsx(H,{disabled:r,enabled:s,onChange:t,label:c.formatMessage(n.sendInviteEmailsLabel)}),e.jsx(O,{className:"ml-2",children:e.jsx(l,{...n.sendInviteEmailsLabel})})]})}function Z({setEnabled:t,isLoading:r,isEnabled:s}){const c=b(),[o,a]=u.useState(!1),d=()=>{a(!0)},i=f=>{a(!1),f&&t(!1)};return e.jsx("div",{className:"pt-1.5",children:s?e.jsxs(e.Fragment,{children:[e.jsx(v,{disabled:r,color:"danger",onClick:()=>{r||d()},children:e.jsx(l,{...n.deleteDirectorySyncConnectionButton})}),e.jsx(K,{title:c.formatMessage(n.deleteDirectorySyncConnectionModalHeader),description:c.formatMessage(n.deleteDirectorySyncConnectionModalExplanation),confirmText:c.formatMessage(n.deleteDirectorySyncConnectionModalConfirmButton),cancelText:c.formatMessage(n.deleteDirectorySyncConnectionModalCancelButton),isOpen:o,primaryButtonColor:"danger",onClose:()=>i(!1),onConfirm:()=>i(!0)})]}):e.jsx(e.Fragment,{children:e.jsx(v,{disabled:r,color:"primary",onClick:()=>{r||t(!0)},children:e.jsx(l,{...n.enableDirectorySyncButton})})})})}class S{static async getWorkspaceDirectorySyncSettings(r){return y.safeGet("/accounts/{account_id}/scim",{parameters:{path:{account_id:r}}})}static async setWorkspaceDirectorySyncEnabled(r,s){return y.safePost("/accounts/{account_id}/scim/set_enabled",{parameters:{path:{account_id:r}},requestBody:{enabled:s}})}static async setWorkspaceDirectorySyncEmailInvitesEnabled(r,s){return y.safePost("/accounts/{account_id}/scim/set_email_invites_enabled",{parameters:{path:{account_id:r}},requestBody:{enabled:s}})}static async getWorkspaceDirectorySyncPortalUrl(r){return y.safeGet("/accounts/{account_id}/scim/portal_link",{parameters:{path:{account_id:r}}})}static async getWorkspaceDirectorySyncFailedEvents(r){return y.safeGet("/accounts/{account_id}/scim/failed_events",{parameters:{path:{account_id:r}}})}static async retryWorkspaceDirectorySyncFailedEvent(r,s){return y.safePost("/accounts/{account_id}/scim/failed_events/{event_id}/retry",{parameters:{path:{account_id:r,event_id:s}},requestBody:{}})}static async retryAllWorkspaceDirectorySyncFailedEvents(r){return y.safePost("/accounts/{account_id}/scim/failed_events/retry_all",{parameters:{path:{account_id:r}},requestBody:{}})}static async discardWorkspaceDirectorySyncFailedEvent(r,s){return y.delete(`${w}/accounts/${r}/scim/failed_events/${s}`)}static async getWorkspaceDirectorySyncProgressUsers(r){return y.safeGet("/accounts/{account_id}/scim/sync_progress_users",{parameters:{path:{account_id:r}}})}static async getWorkspaceDirectorySyncProgressGroups(r){return y.safeGet("/accounts/{account_id}/scim/sync_progress_groups",{parameters:{path:{account_id:r}}})}}function ee({isLoading:t,workspaceId:r,isDirectoryConnectionConfigured:s}){const[c,o]=u.useState(!1),a=z(),d=async()=>{try{o(!0);const i=await S.getWorkspaceDirectorySyncPortalUrl(r);o(!1),i?.portal_link?window.open(i.portal_link,"_blank"):a.danger("Portal link not found.")}catch(i){i instanceof Error?a.danger(i.message):a.danger("An unexpected error occurred.")}};return e.jsxs(v,{disabled:t||c,color:"secondary",className:"mt-3",onClick:d,children:[s?e.jsx(l,{...n.launchDirectorySyncManagementPortalText}):e.jsx(l,{...n.launchDirectorySyncSetupPortalText}),e.jsx(Q,{className:"icon-sm ml-1"})]})}function T(t){switch(t){case"dsync.user.created":return n.directorySyncEventTypeUserCreated;case"dsync.user.updated":return n.directorySyncEventTypeUserUpdated;case"dsync.user.deleted":return n.directorySyncEventTypeUserDeleted;case"dsync.group.created":return n.directorySyncEventTypeGroupCreated;case"dsync.group.updated":return n.directorySyncEventTypeGroupUpdated;case"dsync.group.deleted":return n.directorySyncEventTypeGroupDeleted;case"dsync.group.user_added":return n.directorySyncEventTypeGroupUserAdded;case"dsync.group.user_removed":return n.directorySyncEventTypeGroupUserRemoved;case"dsync.activated":return n.directorySyncEventTypeActivated;case"dsync.deleted":return n.directorySyncEventTypeDeleted;case"dsync.deactivated":return n.directorySyncEventTypeDeleted}}function te({isLoading:t,failedEvents:r,retryEventWithId:s,retryAllFailedEvents:c,discardFailedEventWithId:o}){const[a,d]=u.useState(!1),[i,f]=u.useState(),x=b();return e.jsxs(e.Fragment,{children:[i&&e.jsx($,{isOpen:a,onClose:d,title:x.formatMessage(T(i.event.event)),description:i.failure_reason,type:"success",showCloseButton:!0,isScrollable:!0,children:e.jsx("pre",{children:JSON.stringify(i.event,null,2)})}),r.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs(I,{className:"flex items-center space-x-4",children:[e.jsx(l,{...n.failedDirectorySyncEventsTableHeader}),e.jsx(v,{disabled:t,color:"secondary",size:"small",className:"ml-auto",onClick:()=>{c()},children:e.jsx(l,{...n.retryAllFailedDirectorySyncEventsButton})})]}),e.jsxs(m.Root,{className:"w-full table-auto",children:[e.jsxs(m.Header,{children:[e.jsx(m.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(l,{...n.directorySyncEventsTableFailureEventTypeColumnHeader})}),e.jsx(m.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(l,{...n.directorySyncEventsTableFailureReasonColumnHeader})}),e.jsx(m.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(l,{...n.directorySyncEventsTableActionsColumnHeader})})]}),e.jsx(m.Body,{children:r.map((p,k)=>e.jsxs("tr",{children:[e.jsx(m.Cell,{children:e.jsx(l,{...T(p.event.event)})}),e.jsx(m.Cell,{children:p.failure_reason}),e.jsxs(m.Cell,{children:[e.jsx("div",{children:e.jsx(v,{disabled:t,color:"secondary",size:"small",onClick:()=>{f(p),d(!0)},children:e.jsx(l,{...n.showEventDirectorySyncEventButton})})}),e.jsx("div",{className:"ml-2",children:e.jsx(v,{disabled:t,color:"secondary",size:"small",onClick:()=>{s(p.event.id)},children:e.jsx(l,{...n.retryDirectorySyncEventButton})})}),e.jsx("div",{className:"ml-2",children:o&&e.jsx(v,{disabled:t,color:"secondary",size:"small",onClick:()=>{o(p.event.id)},children:e.jsx(l,{...n.discardDirectorySyncEventButton})})})]})]},p.event.id))})]})]})]})}function re({isLoading:t,numUsersSynced:r,numUsersInDirectory:s,numGroupsSynced:c,numGroupsInDirectory:o,failedEvents:a,retryEventWithId:d,retryAllFailedEvents:i,discardFailedEventWithId:f}){const{value:x}=D("2091463435");return e.jsxs(e.Fragment,{children:[e.jsxs(q,{className:"my-2",children:[e.jsxs("div",{children:[e.jsx(l,{...n.directorySyncUserSyncStatus,values:{numUsersSynced:r,numUsersInDirectory:s}}),e.jsx(F,{percentage:r/(s||1)*100})]}),e.jsx("div",{className:"mt-4",children:x&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center space-x-4",children:e.jsx(l,{...n.directorySyncGroupSyncStatus,values:{numGroupsSynced:c,numGroupsInDirectory:o}})}),e.jsx(F,{percentage:c/(o||1)*100})]})})]}),e.jsx("div",{className:"mt-4",children:e.jsx(te,{isLoading:t,failedEvents:a,retryEventWithId:d,retryAllFailedEvents:i,discardFailedEventWithId:f})})]})}const _=2e3;function C(t,r){const[s,c]=u.useState(!1),{data:o,...a}=h({queryKey:["workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await S.getWorkspaceDirectorySyncSettings(t)},enabled:!!t,refetchInterval:r&&s?_:!1});return u.useEffect(()=>{o?.enabled&&o?.directory_connection==null?c(!0):c(!1)},[o]),{data:o,...a}}function W(t,r){const[s,c]=u.useState(!1),{data:o}=C(t,r),{data:a,...d}=h({queryKey:["workspace/directorySyncStatus/progressUsers","workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await S.getWorkspaceDirectorySyncProgressUsers(t)},enabled:!!t&&!!o?.directory_connection,refetchInterval:s?_:!1});return u.useEffect(()=>{a?.synced_scim_users===0||a?.synced_scim_users!==a?.total_scim_users?c(!0):c(!1)},[a,o?.directory_connection]),{isLoadingUsers:s,data:a,...d}}function se(t,r){const[s,c]=u.useState(!1),{data:o}=C(t,r),{data:a,...d}=h({queryKey:["workspace/directorySyncStatus/progressGroups","workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await S.getWorkspaceDirectorySyncProgressGroups(t)},enabled:!!t&&!!o?.directory_connection,refetchInterval:r&&s?_:!1});return u.useEffect(()=>{a?.synced_scim_groups===0||a?.synced_scim_groups!==a?.total_scim_groups?c(!0):c(!1)},[a,o?.directory_connection]),{isLoadingGroups:s,data:a,...d}}function ne(t,r){const{isLoadingUsers:s}=W(t,r);return h({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySync",t],queryFn:async()=>{if(t!==void 0)return await S.getWorkspaceDirectorySyncFailedEvents(t)},enabled:!!t,refetchInterval:s?_:!1})}function ce(t){const r=j();return E({mutationFn:s=>S.retryWorkspaceDirectorySyncFailedEvent(t,s),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySyncStatus/progressUsers","workspace/directorySyncStatus/progressGroups"]})}})}function ae(t){const r=j();return E({mutationFn:()=>S.retryAllWorkspaceDirectorySyncFailedEvents(t),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySyncStatus/progressUsers","workspace/directorySyncStatus/progressGroups"]})}})}function oe(t){const r=j();return E({mutationFn:s=>S.discardWorkspaceDirectorySyncFailedEvent(t,s),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents"]})}})}function ie(t){const r=j();return E({mutationFn:s=>S.setWorkspaceDirectorySyncEnabled(t,s),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySync",t]})}})}function le(t){const r=j();return E({mutationFn:s=>S.setWorkspaceDirectorySyncEmailInvitesEnabled(t,s),onSuccess:()=>{r.refetchQueries({queryKey:["workspace/directorySync",t]})}})}function fe({workspaceId:t}){const{value:r}=D("2091463435"),{value:s}=D("2494375100"),{data:c,isLoading:o}=C(t,!0),{data:a,isLoading:d}=W(t,!0),{data:i,isLoading:f}=se(t,r),{data:x,isLoading:p}=ne(t,!0),{mutateAsync:k,status:G}=ie(t),{mutateAsync:N,status:A}=ce(t),{mutateAsync:M,status:U}=ae(t),{mutateAsync:P,status:B}=oe(t),{mutateAsync:L,status:R}=le(t),g=G==="pending"||A==="pending"||U==="pending"||B==="pending"||R=="pending"||o||d||f||p;return e.jsxs(J,{className:`${g?"text-token-text-secondary":""}`,children:[e.jsx(V,{children:e.jsxs("div",{className:"flex flex-row",children:[e.jsx("div",{children:e.jsx(l,{...n.directorySyncTitle})}),e.jsx("div",{className:"ml-2 mt-1",children:g&&e.jsx(Y,{})})]})}),e.jsx(q,{children:e.jsx(l,{...n.directorySyncInfoText})}),c?.directory_connection&&e.jsx("div",{children:e.jsx(re,{isLoading:g,numUsersSynced:a?.synced_scim_users??0,numUsersInDirectory:a?.total_scim_users??0,numGroupsSynced:i?.synced_scim_groups??0,numGroupsInDirectory:i?.total_scim_groups??0,failedEvents:x??[],retryEventWithId:N,retryAllFailedEvents:M,discardFailedEventWithId:P})}),s&&c?.enabled&&e.jsx("div",{children:e.jsx(X,{setEnabled:L,isLoading:g,isEnabled:c?.send_user_invite_emails??!1})}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(Z,{setEnabled:k,isLoading:g,isEnabled:c?.enabled??!0}),c?.enabled&&e.jsx(e.Fragment,{children:e.jsx(ee,{isLoading:g,workspaceId:t,isDirectoryConnectionConfigured:!!c?.directory_connection})})]})]})}export{fe as DirectorySyncSection};
//# sourceMappingURL=mprsh7hso0j8rz1c.js.map
