const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/pestv79usb6vx2vy.js","assets/n1tvutderx19k1zs.js","assets/efuue3ezs0mj4ucx.js","assets/root-gmm606mb.css","assets/d8cqjdhhlnkatlq6.js","assets/c87uv1mutc86tiqk.js","assets/conversation-small-nranh1cg.css","assets/hdy4xngph9x40no3.js","assets/d3y72ugnrmac5z1v.js","assets/miws4tkw2vsomlr4.js","assets/fzrn137102spawew.js","assets/e9lafxuzyeh4418f.js","assets/pevkepdko1ob7sgk.js"])))=>i.map(i=>d[i]);
import{ac as R,B as D,j as _,bs as V,bt as $,f as de,bd as me,bf as X,au as Z,d as ee,ab as C,bW as x,bJ as se,dm as ue,bY as N,bo as ge,a7 as xe,S as fe,dq as Me,eX as je}from"./efuue3ezs0mj4ucx.js";import{u as ae,c as p,a as T,b as A,r as v,j as e,M as c,e as ve,f as he}from"./n1tvutderx19k1zs.js";import{cf as pe,i7 as K,i8 as L,fm as be,i9 as Y,f2 as i,U as Q,H as te,f6 as ne,ia as G,ib as ye,ic as W,id as Re,ah as P,cP as Ce,ie as Ue,d as ke,bO as Ie,cX as Ne,bX as Pe}from"./c87uv1mutc86tiqk.js";import{c as Se}from"./iej0cupg2dqkmejt.js";import{a as De,b as _e}from"./lh89qzxxlysgorkz.js";import{m as re}from"./oodmi8snhcfjy54p.js";import{u as Ae}from"./chu2aivt0fxgmd6m.js";import"./oqdx4hpmwxvfh9gy.js";import"./oq09nie6yqvskddc.js";import"./jy24clh9s5sbm6a3.js";import"./d995zjnlydagrugw.js";import"./bh0nczk7jf5nipy7.js";import"./ishe91rr928a0b40.js";import"./k081xtl7qxstenxt.js";import"./ngn9hyh36iu8kqm0.js";import"./oy248fbbcvutqmly.js";import"./hau51huxh66v0dxz.js";const k=25;function we(s,a,t){return ae({queryKey:["workspace",s,"invites",a,t],queryFn:async()=>await R.getWorkspaceInvites(s,a,k,t)})}function qe(s,a,t){return ae({queryKey:["workspace",s,"invites","requests",a,t],queryFn:async()=>await R.getWorkspaceInviteRequests(s,a,k,t)})}function ie(s){const a=p(),t=D(),n=T();return A({mutationFn:({inviteId:r,role:o,acceptRequest:l})=>R.patchWorkspaceInvite(s,r,{role:o,acceptRequest:l}).catch(d=>{t.danger(a.formatMessage(q.updateInviteError,{error:d.message}))}),onSuccess:()=>{n.invalidateQueries({queryKey:["workspace",s,"invites"]}),n.invalidateQueries({queryKey:["workspace",s,"invites","requests"]}),n.invalidateQueries({queryKey:["workspace",s]})}})}function oe(s){const a=p(),t=D(),n=T();return A({mutationFn:({email:r})=>R.deleteWorkspaceInvite(s,r).catch(o=>{t.danger(a.formatMessage(q.deleteInviteError,{email:r,error:o.message}))}),onSuccess:()=>{n.invalidateQueries({queryKey:["workspace",s,"invites"]}),n.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}function Ee(s){const a=p(),t=D(),n=T();return A({mutationFn:({role:r,email:o})=>R.addWorkspaceUsers(s,[o],r,!0).then(({account_invites:l,errored_emails:d})=>{if(d.length>0)throw new Error(d[0].error);l.length>0&&t.success(a.formatMessage(q.resendInviteSuccess,{email:o}))}).catch(l=>{t.danger(a.formatMessage(q.resendInviteError,{email:o,error:l.message}))}),onSuccess:()=>{n.invalidateQueries({queryKey:["workspace",s,"invites"]}),n.invalidateQueries({queryKey:["workspace",s,"invites","requests"]})}})}const q=_({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}}),Te=V(()=>$(()=>import("./pestv79usb6vx2vy.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication)),S=de(()=>({confirmModalUserData:null})),E={openModalForUser:s=>{S.setState({confirmModalUserData:s})},closeModal:()=>{S.setState({confirmModalUserData:null})}};function We({workspaceId:s,filterInputValue:a}){const[t,n]=v.useState(0),o=pe()?.id,l=K(s),d=L(s),m=l||d,u=He(),f=Qe(s),{data:b}=be(s,t*Y,a),B=v.useCallback(g=>{E.openModalForUser(g)},[]),w=v.useCallback(()=>{const g=S.getState().confirmModalUserData?.id;g!==void 0&&f.mutate({userId:g}),E.closeModal()},[f]),O=v.useCallback((g,H)=>{u.mutate({userId:g,value:H,workspaceId:s})},[u,s]);if(b===void 0)return e.jsx(J,{});const F=b.items,y=Math.ceil((b.total??0)/Y);return t>=y&&y!==0&&n(Math.max(y-1,0)),e.jsxs(e.Fragment,{children:[e.jsxs(i.Root,{fixed:!0,size:"normal",children:[e.jsxs(i.Header,{children:[e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...M.name})}),e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...M.email})}),e.jsx(i.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:l?"pl-3":"",children:e.jsx(c,{...M.role})})}),m&&e.jsx(i.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(i.Body,{children:[F.map(g=>e.jsx(Oe,{isCurrentUser:o!==void 0&&g.id===o,user:g,currentUserHasAdminRights:m,isCurrentUserOwner:l,onRemoveUserClick:()=>B({id:g.id,name:g.name??"",email:g.email??"",created_time:g.created_time}),onUpdateUserRole:O},g.id)),F.length===0&&e.jsx(i.Row,{children:e.jsx(i.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...M.noResults})})})})]})]}),e.jsxs("div",{className:"relative mb-8 mt-4 min-h-[20px]",children:[l&&e.jsxs("button",{onClick:()=>Q.openModal(te.InviteUsersToWorkspace),className:"flex items-center gap-2 text-token-text-secondary hover:text-token-text-primary",children:[e.jsx(ne,{className:"icon-sm"}),e.jsx(c,{...M.inviteMemberButton})]}),y>1&&e.jsx("div",{className:"absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center",children:e.jsx(G,{currentPage:t,onChangeIndex:n,length:y})})]}),e.jsx(Be,{onDeleteConfirm:w})]})}function Be({onDeleteConfirm:s}){const a=p(),t=S(r=>r.confirmModalUserData!==null),n=S(r=>r.confirmModalUserData===null?{}:{userId:r.confirmModalUserData.id,email:r.confirmModalUserData.email,name:r.confirmModalUserData.name,dateAdded:ye(r.confirmModalUserData.created_time)});return e.jsx(me,{isOpen:t,title:a.formatMessage(M.removeMemberModalTitle),onClose:()=>E.closeModal(),type:"success",primaryButton:e.jsx(X.Button,{title:a.formatMessage(M.removeMemberModalConfirm),color:"danger",onClick:s}),secondaryButton:e.jsx(X.Button,{title:a.formatMessage(M.removeMemberModalCancel),color:"secondary",onClick:()=>E.closeModal()}),children:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[n.name??n.email,e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...M.dateJoined,values:{dateAdded:a.formatDate(n.dateAdded,{year:"numeric",month:"long",day:"numeric"})}})})]})})}function Oe({user:s,currentUserHasAdminRights:a,isCurrentUserOwner:t,isCurrentUser:n,onRemoveUserClick:r,onUpdateUserRole:o}){const d=W()[s.role],m=s.name==null||s.name==="",{value:u}=Z("3999712942");return e.jsxs(i.Row,{children:[e.jsx(i.Cell,{children:e.jsxs("span",{className:ee("flex flex-grow items-center justify-between gap-2",m&&"text-token-text-tertiary"),children:[e.jsx("span",{children:s.name??e.jsx(c,{...M.missingName})}),n&&e.jsx("span",{children:e.jsx(c,{...M.youSpecifier})}),u&&s.is_scim_managed&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex-grow"}),e.jsx(Te,{})]})]})}),e.jsx(i.Cell,{children:s.email}),e.jsx(i.Cell,{children:t?e.jsx(z,{currentRole:s.role,onUpdateUserRole:f=>{o(s.id,f)},disabled:n}):d}),a&&e.jsx(i.Cell,{children:e.jsx(Fe,{userId:s.id,onRemoveUserClick:r,disabled:n,isScimManaged:s.is_scim_managed})})]})}function z({currentRole:s,onUpdateUserRole:a,disabled:t=!1}){const n=W();return e.jsx(Re,{disabled:t,defaultValue:s,onValueChange:r=>{a(r)},options:[{label:n[C.STANDARD],value:C.STANDARD},{label:n[C.ADMIN],value:C.ADMIN},{label:n[C.OWNER],value:C.OWNER}]})}function Fe({disabled:s,onRemoveUserClick:a,userId:t,isScimManaged:n}){const r=p();return s?null:n?e.jsx(x.Root,{children:e.jsx(x.Trigger,{disabled:!0,children:e.jsx(se,{sideOffset:0,label:r.formatMessage(re.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(P,{className:"icon-sm"})})})}):e.jsxs(x.Root,{children:[e.jsx(x.Trigger,{className:"-my-2",children:e.jsx(P,{className:"icon-sm"})}),e.jsx(x.Portal,{children:e.jsx(x.Content,{children:e.jsx(x.Item,{onClick:()=>{a(t)},children:e.jsx(c,{...M.removeMemberModalTitle})})})})]})}function He(){const s=D();return A({mutationFn:({userId:a,workspaceId:t,value:n})=>R.updateWorkspaceUserRole(t,a,n).catch(r=>{s.danger(`Unable to update user (${a}) role: ${r.message}`)})})}function Qe(s){const a=T(),t=D();return A({mutationFn:({userId:n})=>R.removeWorkspaceUser(s,n).catch(r=>{t.danger(`Unable to remove user (${n}) from workspace: ${r.message}`)}),onSuccess:()=>{a.invalidateQueries({queryKey:["workspace",s]})}})}function J(){return e.jsx("div",{className:"flex w-full items-center justify-center",children:e.jsx(ue,{})})}const M=_({name:{id:"UserManager.name",defaultMessage:"Name"},email:{id:"UserManager.email",defaultMessage:"Email"},role:{id:"UserManager.role",defaultMessage:"Role"},missingName:{id:"UserManager.missingName",defaultMessage:"No name provided"},youSpecifier:{id:"UserManager.youSpecifier",defaultMessage:"(You)"},removeUser:{id:"UserManager.removeUser",defaultMessage:"Remove user from workspace"},removeMemberModalTitle:{id:"UserManager.removeMemberModalTitle",defaultMessage:"Remove member"},removeMemberModalConfirm:{id:"UserManager.removeMemberModalConfirm",defaultMessage:"Delete"},removeMemberModalCancel:{id:"UserManager.removeMemberModalCancel",defaultMessage:"Cancel"},dateJoined:{id:"UserManager.dateJoined",defaultMessage:"Joined workspace on {dateAdded}"},inviteMemberButton:{id:"UserManager.inviteMemberButton",defaultMessage:"Invite member"},noResults:{id:"UserManager.noResults",defaultMessage:"No results"}}),Ve=V(()=>$(()=>import("./pestv79usb6vx2vy.js"),__vite__mapDeps([0,1,2,3])).then(s=>s.DirectorySyncResourceManagedIndication));function $e({workspaceId:s,filterInputValue:a}){const[t,n]=v.useState(0),r=K(s),o=L(s),l=r||o,{data:d}=we(s,t*k,a);if(d===void 0)return e.jsx(J,{});const m=d.items,u=Math.ceil((d.total??0)/k);return t>=u&&u!==0&&n(Math.max(u-1,0)),e.jsxs("div",{children:[e.jsxs(i.Root,{fixed:!0,size:"normal",children:[e.jsxs(i.Header,{children:[e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...I.email})}),e.jsx(i.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:l?"pl-3":"",children:e.jsx(c,{...I.role})})}),l&&e.jsx(i.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),e.jsxs(i.Body,{children:[m.map(f=>e.jsx(Ke,{workspaceId:s,invite:f,isCurrentUserOwner:r,currentUserHasAdminRights:l},f.id)),m.length===0&&e.jsx(i.Row,{children:e.jsx(i.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...I.noResults})})})})]})]}),u>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(G,{currentPage:t,onChangeIndex:n,length:u})})]})}function Ke({workspaceId:s,invite:a,isCurrentUserOwner:t,currentUserHasAdminRights:n}){const r=W(),o=ie(s),l=oe(s),d=Ee(s),{value:m}=Z("3999712942");return e.jsxs(i.Row,{disabled:o.isPending||l.isPending||l.isSuccess||d.isPending,children:[e.jsx(i.Cell,{children:e.jsxs("span",{className:"flex flex-grow justify-between",children:[e.jsx("span",{children:a.email_address}),m&&a.is_scim_managed&&e.jsx(Ve,{})]})}),e.jsx(i.Cell,{children:t?e.jsx(z,{currentRole:a.role,onUpdateUserRole:u=>{o.mutate({inviteId:a.id,role:u})}}):r[a.role]}),n&&e.jsx(e.Fragment,{children:e.jsx(i.Cell,{children:e.jsx(Le,{onDeleteUser:()=>{l.mutate({email:a.email_address??""})},onResendInvite:()=>{d.mutate({email:a.email_address??"",role:a.role??""})},disabled:a.is_scim_managed})})})]})}function Le({onDeleteUser:s,onResendInvite:a,disabled:t}){const n=p();return e.jsx(e.Fragment,{children:t?e.jsx(x.Root,{children:e.jsx(x.Trigger,{disabled:!0,children:e.jsx(se,{sideOffset:0,label:n.formatMessage(re.managedViaSCIMTooltip),className:"flex",side:"right",children:e.jsx(P,{className:"icon-sm"})})})}):e.jsxs(x.Root,{children:[e.jsx(x.Trigger,{children:e.jsx(P,{className:"icon-sm"})}),e.jsx(x.Portal,{children:e.jsxs(x.Content,{children:[e.jsx(x.Item,{onClick:a,children:e.jsx(c,{...I.resendInvite})}),e.jsx(x.Item,{onClick:s,children:e.jsx(c,{...I.revokeInvite})})]})})]})})}const I=_({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function Ge({workspaceId:s,filterInputValue:a}){const[t,n]=v.useState(0),{data:r}=qe(s,t*k,a),o=K(s),l=L(s),d=p(),m=o||l;if(r===void 0)return e.jsx(J,{});const u=r.items,f=Math.ceil(r.total/k);return t>=f&&f!==0&&n(Math.max(f-1,0)),e.jsxs("div",{children:[e.jsxs(i.Root,{fixed:!0,size:"normal",children:[e.jsxs(i.Header,{children:[e.jsx(i.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(c,{...U.email})}),e.jsx(i.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:e.jsx("span",{className:m?"pl-3":"",children:e.jsx(c,{...U.role})})}),m&&e.jsx(i.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:d.formatMessage(U.actions)})]}),e.jsxs(i.Body,{children:[u.map(b=>e.jsx(ze,{workspaceId:s,invite:b,isCurrentUserOwner:o,currentUserHasAdminRights:m},b.id)),u.length===0&&e.jsx(i.Row,{children:e.jsx(i.Cell,{children:e.jsx("div",{className:"text-token-text-tertiary",children:e.jsx(c,{...U.noResults})})})})]})]}),f>1&&e.jsx("div",{className:"mt-2 flex justify-center",children:e.jsx(G,{currentPage:t,onChangeIndex:n,length:f})})]})}function ze({workspaceId:s,invite:a,isCurrentUserOwner:t,currentUserHasAdminRights:n}){const r=W(),o=ie(s),l=oe(s),d=p();return e.jsxs(i.Row,{disabled:o.isPending||l.isPending||l.isPending,children:[e.jsx(i.Cell,{children:a.email_address}),e.jsx(i.Cell,{children:t?e.jsx(z,{currentRole:a.role,onUpdateUserRole:m=>{o.mutate({inviteId:a.id,role:m})}}):r[a.role]}),n&&e.jsx(e.Fragment,{children:e.jsx(i.Cell,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(N,{onClick:()=>o.mutate({inviteId:a.id,acceptRequest:!0}),children:d.formatMessage(U.accept)}),e.jsx(N,{color:"secondary",onClick:()=>l.mutate({email:a.email_address}),children:d.formatMessage(U.reject)})]})})})]})}const U=_({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}}),Je=V(()=>$(()=>import("./d8cqjdhhlnkatlq6.js"),__vite__mapDeps([4,1,5,2,3,6,7,8,9,10,11,12])));var le=(s=>(s.Members="members",s.Invites="invites",s.Requests="requests",s))(le||{});function Xe({tab:s}){switch(s){case"members":return e.jsx(c,{...h.allMembers});case"invites":return e.jsx(c,{...h.pendingInvites});case"requests":return e.jsx(c,{...h.pendingRequests})}}function Ye({tab:s,filterInputValue:a,workspaceId:t}){switch(s){case"members":return e.jsx(We,{workspaceId:t,filterInputValue:a});case"invites":return e.jsx($e,{workspaceId:t,filterInputValue:a});case"requests":return e.jsx(Ge,{workspaceId:t,filterInputValue:a})}}const Ze=Se(le);function es({currentWorkspaceId:s}){const a=p(),t=xe(),n=Ce(s)??"?",r=Ue(t),o=t?.isTeam(),l=ve(),[d]=he(),m=d.get("tab"),u=m&&Ze(m)?m:"members",[f,b]=v.useState(""),[B,w]=v.useState("");v.useEffect(()=>{w("")},[u]);const O=v.useCallback(ke(j=>{w(j)},250),[]),y=!!Ie()?.length;if(!t)return null;const g=t.isAdminOfAccount(),H=t.isOwnerOfAccount(),ce=o||!y?["members","invites"]:["members","invites","requests"];return e.jsxs(e.Fragment,{children:[e.jsx(Ne,{children:e.jsx("title",{children:a.formatMessage(h.adminBrowserPageTitle)})}),e.jsx(De,{title:a.formatMessage(h.adminPageTitle),subtitle:e.jsx(c,{values:{totalMembers:n,planName:r},...h.totalMembers})}),e.jsxs(_e,{children:[e.jsxs(as,{children:[e.jsx("div",{className:"mb-6 flex gap-2",children:ce.map(j=>e.jsx(ss,{onClick:()=>{l(j!=null?`/admin?tab=${j}`:"/admin")},isSelected:u===j,children:e.jsx(Xe,{tab:j})},j))}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("div",{className:"relative",children:[e.jsx(Pe,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),e.jsx("input",{type:"text",value:f,onChange:j=>{b(j.target.value),O(j.target.value)},placeholder:a.formatMessage(h.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),(g||H||o)&&e.jsx(N,{onClick:()=>{Q.openModal(te.InviteUsersToWorkspace),fe.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"workspace-admin-click",text:"InviteMember",step:"OpenModal"})},icon:ne,children:e.jsx(c,{...h.inviteMemberButton})}),o?e.jsx(Me,{triggerButton:e.jsx(N,{color:"secondary",icon:P}),children:e.jsx(x.Item,{onClick:()=>{t&&Q.setLeaveWorkspaceData(t)},children:e.jsx(c,{...h.leaveWorkspace})})}):null]})]}),e.jsx(Ye,{workspaceId:s,tab:u,filterInputValue:B})]}),t!=null?e.jsx(Je,{workspace:t}):null]})}function ss({children:s,isSelected:a,onClick:t}){return e.jsx(N,{color:"ghost",className:ee(a?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:t,children:s})}const as=ge.div`mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between`,h=_({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} · {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}}),ps=je(function(){const a=Ae();return e.jsx(es,{...a})});export{ps as default};
//# sourceMappingURL=dmdtzvjn30x436vr.js.map
