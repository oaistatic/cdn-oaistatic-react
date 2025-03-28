const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/b018g8hw22mgl7o1.js","assets/fs6h2trisr1juto6.js","assets/df9u9imhvwerk6zv.js","assets/cyi7nanrg0vdotzd.js","assets/root-drzjahv8.css","assets/conversation-small-kx6wglz1.css","assets/lemb0bkyi7ypb3d9.js","assets/kn0pty5z0i9ki6f3.js","assets/f11hi51z7fga7n5g.js"])))=>i.map(i=>d[i]);
import{c4 as R,c2 as C,V as ie,bw as W,by as O,d as V,b as $,b$ as Z,ek as G,cp as le,bP as re,bQ as de,fa as ce}from"./cyi7nanrg0vdotzd.js";import{e as B,r as M,j as e,M as a,d as w}from"./fs6h2trisr1juto6.js";import{jZ as ue,gd as y,j_ as ge,dH as me,j$ as xe,dI as fe,gw as F,l as K,dM as Y,k0 as pe,k1 as Se,k2 as J,k3 as he,af as ye,hl as be,k4 as ee,hC as _,k5 as P,k6 as te,k7 as Me,bL as je,k8 as ve,k9 as Ie,ka as we,dQ as ke}from"./df9u9imhvwerk6zv.js";import{S as Ce}from"./eq34zwf9q18c17ro.js";import{a as Ae,b as De,u as Le,d as Te}from"./kn08nmd9i8fwvxgx.js";import{d as N,e as U,f as X,a as Oe}from"./f11hi51z7fga7n5g.js";import{S as se}from"./ll7abbx3or9l4k2y.js";import"./wywpfzigeej0marp.js";import"./exwx6mc6hw49alht.js";import"./kg9pnjn9ianmg7dc.js";import"./f3zzw463zuggq6da.js";import"./069jlavvvdusqrfm.js";import"./uopuzq7k880bjpaa.js";import"./k154o6a9h89usuus.js";import"./e2l59f6c7bsm78ye.js";import"./g3ei56x6mbzvb5yw.js";import"./olum39tx3ecm9sq0.js";import"./ngj3h1w6uuxrb6ri.js";function Ee({onRemoveDomainClick:t,onVerifyDomainClick:s}){return e.jsxs(C.Root,{children:[e.jsx(C.Trigger,{children:e.jsx(fe,{className:"icon-sm"})}),e.jsx(C.Portal,{children:e.jsxs(C.Content,{children:[e.jsx(C.Item,{onClick:t,children:e.jsx(a,{...E.ssoDropdownRemoveButtonText})}),e.jsx(C.Item,{onClick:s,children:e.jsx(a,{...E.ssoDropdownVerifyButtonText})})]})})]})}function Re({domains:t,workspaceId:s}){const o=B(),{mutateAsync:n}=ue(s),[i,l]=M.useState(!1),[c,g]=M.useState();return e.jsxs(e.Fragment,{children:[e.jsxs(y.Root,{className:"w-full table-auto",children:[e.jsxs(y.Header,{children:[e.jsx(y.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(a,{...E.domainTableHeader})}),e.jsx(y.HeaderCell,{className:"bg-token-main-surface-primary",children:e.jsx(a,{...E.statusTableHeader})}),e.jsx(y.HeaderCell,{className:"bg-token-main-surface-primary"})]}),e.jsx(y.Body,{children:t.map((u,f)=>e.jsxs("tr",{onClick:()=>g(u),className:"cursor-pointer",children:[e.jsx(y.Cell,{children:u.hostname}),e.jsx(y.Cell,{children:o.formatMessage(ge[u.status])}),e.jsx(y.Cell,{textAlign:"right",children:e.jsx("div",{onClick:r=>r.stopPropagation(),children:e.jsx(Ee,{onRemoveDomainClick:()=>{n({domainId:u.id})},onVerifyDomainClick:()=>{g(u)}})})})]},f))})]}),e.jsx(R,{color:"secondary",className:"mt-6",onClick:()=>{l(!0)},icon:me,children:e.jsx(a,{...E.addDomainButton})}),e.jsx(xe,{isOpen:i||c!==void 0,onClose:()=>{l(!1),g(void 0)},workspaceId:s,currentDomain:i?void 0:c,domains:t},c?.id)]})}const E=w({ssoDropdownRemoveButtonText:{id:"workspaceIdentity.ssoDropdownRemoveButtonText",defaultMessage:"Remove Domain"},ssoDropdownVerifyButtonText:{id:"workspaceIdentity.ssoDropdownVerifyButtonText",defaultMessage:"Verify"},domainTableHeader:{id:"workspaceIdentity.domainTableHeader",defaultMessage:"Domain"},statusTableHeader:{id:"workspaceIdentity.statusTableHeader",defaultMessage:"Status"},addDomainButton:{id:"workspaceIdentity.addDomainButton.0",defaultMessage:"Add domain"}}),H=({icon:t,title:s,body:o,toggle:n})=>e.jsxs(N,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(t,{className:"icon-sm"}),e.jsx(U,{children:s})]}),e.jsx("div",{children:n})]}),e.jsx(X,{children:o})]});function Be({acsId:t,hasSSO:s}){const o=`https://auth0.openai.com/login/callback?connection=${t}`,n=`urn:auth0:openai:${t}`,i=`${location.host}/auth/login?sso=true&connection=${t}`,l=B(),c=ie();return e.jsxs(e.Fragment,{children:[e.jsx(X,{children:e.jsx(a,{...T.setupSSOContent})}),e.jsxs("div",{className:"mb-6 flex flex-col space-y-4",children:[e.jsx(F,{label:"Assertion Consumer Service (ACS) URL",value:o,onCopied:()=>{c.success(l.formatMessage(T.copiedACSToClipboard),{duration:3})}}),e.jsx(F,{label:"Entity ID",value:n,onCopied:()=>{c.success(l.formatMessage(T.copiedEntityToClipboard),{duration:3})}}),s&&e.jsx(F,{label:l.formatMessage(T.idpSignInURL),value:i,onCopied:()=>{c.success(l.formatMessage(T.copiedIDPUrlToClipboard),{duration:3})}})]})]})}const T=w({setupSSOContent:{id:"workspaceIdentity.setupSSOContent",defaultMessage:"Anyone using email addresses with a verified domain can log in via SAML SSO."},idpSignInURL:{id:"workspaceIdentity.idpSignInURL",defaultMessage:"IDP Tile URL"},copiedACSToClipboard:{id:"workspaceIdentity.copiedACSToClipboard",defaultMessage:"Copied ACS URL to clipboard"},copiedEntityToClipboard:{id:"workspaceIdentity.copiedEntityToClipboard",defaultMessage:"Copied entity ID to clipboard"},copiedIDPUrlToClipboard:{id:"workspaceIdentity.copiedIDPUrlToClipboard",defaultMessage:"Copied IDP URL to clipboard"}});function ne({isOpen:t,onClose:s}){const o=K();return e.jsx(W,{isOpen:t,onClose:s,type:"warning",title:e.jsx(a,{...z.reauthRequiredTitle}),icon:Y,primaryButton:e.jsx(O.Button,{onClick:()=>{o({authType:"login",callbackUrl:"/admin/identity"})},color:"primary",children:e.jsx(a,{id:"qcl4gn",defaultMessage:"Login"})}),secondaryButton:e.jsx(O.Button,{onClick:s,children:e.jsx(a,{id:"E1vtdZ",defaultMessage:"Close"})}),children:e.jsx("label",{className:"mb-2 flex items-center text-sm",children:e.jsx(a,{...z.reauthRequiredExplanation})})})}const z=w({reauthRequiredTitle:{id:"workspaceIdentity.reauthRequiredTitle",defaultMessage:"Please login again"},reauthRequiredExplanation:{id:"workspaceIdentity.reauthRequiredExplanation",defaultMessage:"For security reasons, we need you to reauthenticate before making changes to SSO settings."}}),_e=async t=>new Promise((s,o)=>{const n=new FileReader;n.readAsText(t),n.onload=function(i){s(i.target?.result)},n.onerror=o});function Pe({workspaceId:t,data:s,isOpen:o,onClose:n}){const i=B(),l=K(),{mutateAsync:c}=pe(t),{mutateAsync:g}=Se(t),{mutateAsync:u}=J(t),f=M.useRef(null),r=s?.connection,[d,j]=M.useState(r?.sign_in_endpoint),[v,m]=M.useState(!1),[p,h]=M.useState(r?.cert),k=s===null?1:2,D=async(x,L)=>{let Q;try{Q=await c({signInEndpoint:x,cert:L})}catch(q){if(q instanceof $&&q.code==="reauth_required"){m(!0);return}throw q}await u({connectionId:Q.id,active:!0}),n()},ae=k===1?e.jsx(O.Button,{title:i.formatMessage(b.doneButton),color:"primary",disabled:d===void 0||p===void 0,onClick:async()=>{d===void 0||p===void 0||await D(d,p)}}):s&&e.jsx(O.Button,{title:i.formatMessage(b.doneButton),color:"primary",onClick:async()=>{await u({connectionId:s?.id,cert:p,signInEndpoint:d,active:!0}),n()}}),oe=s===null?e.jsx(O.Button,{title:i.formatMessage(b.cancelButton),color:"secondary",onClick:()=>n()}):e.jsx(R,{as:"link",color:"danger-outline",onClick:async()=>{await g({connectionId:s?.id}),n()},children:i.formatMessage(b.deleteButton)});return e.jsx(W,{isOpen:o,type:"success",title:i.formatMessage(k===1?b.createTitle:b.editTitle),primaryButton:ae,secondaryButton:oe,onClose:n,children:e.jsxs("form",{onSubmit:x=>x.preventDefault(),children:[e.jsx(he,{children:e.jsx(a,{...b.createInstructionsManual})}),e.jsx("label",{htmlFor:"sign-in-url",className:"mb-2 flex items-center text-sm",children:e.jsx(a,{...b.signInLabel})}),e.jsx("div",{className:"mb-4",children:e.jsx(ye,{ariaLabel:!1,className:"w-full appearance-none rounded border px-3 py-2",name:"sign-in-url",type:"text",placeholder:"https://your.idp.here/saml2?idpid=123456",value:d??"",onChange:x=>{j(x.target.value)}})}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[e.jsx("label",{className:"text-sm",children:e.jsx(a,{...b.certLabel})}),e.jsx("input",{ref:f,type:"file",accept:".csv,.cer,.pem,text/plain",className:"hidden",onChange:async x=>{if(x.target.files?.[0]){const L=await _e(x.target.files[0]);h(L)}}}),e.jsx(R,{color:"secondary",onClick:()=>f.current?.click(),icon:be})]}),e.jsx("textarea",{rows:10,className:V("w-full resize-none overflow-y-auto rounded border border-gray-300 px-3 py-2","outline-none focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600","text-token-text-primary placeholder-gray-500 dark:bg-gray-700"),placeholder:"-----BEGIN CERTIFICATE-----",value:p??"",onChange:x=>{h(x.target.value)}})]}),v&&e.jsx("label",{className:"text-token-text-error",children:e.jsx(a,{id:"ZfFabW",defaultMessage:"You need to re-authenticate to access this page. Please <login>log in</login> before continuing.",values:{login:x=>e.jsx("a",{href:"#",className:"text-token-text-primary underline",onClick:L=>{L.preventDefault(),l({authType:"login",callbackUrl:"/admin/identity"})},children:x})}})})]})})}const b=w({createInstructionsXML:{id:"ssoModal.createInstructionsXML",defaultMessage:"If your Identity Provider offers a metadata URL or an XML file, add it here for the quickest setup option."},createInstructionsManual:{id:"ssoModal.createInstructionsManual",defaultMessage:"Copy your Sign-in endpoint (SSO URL) and the public X.509 certificate from your Identity Provider."},createTitle:{id:"ssoModal.createTitle",defaultMessage:"Create SAML SSO Configuration"},editTitle:{id:"ssoModal.editTitle",defaultMessage:"Edit SAML SSO Configuration"},ssoMetadataLabel:{id:"ssoModal.ssoMetadataLabel",defaultMessage:"App Federation Metadata URL"},signInLabel:{id:"ssoModal.signInLabel",defaultMessage:"SSO URL"},certLabel:{id:"ssoModal.certLabel",defaultMessage:"X.509 Signing Certificate"},doneButton:{id:"ssoModal.doneButton",defaultMessage:"Done"},nextButton:{id:"ssoModal.nextButton",defaultMessage:"Next"},deleteButton:{id:"ssoModal.deleteButton",defaultMessage:"Delete configuration"},cancelButton:{id:"ssoModal.cancelButton",defaultMessage:"Cancel"},acsURLLabel:{id:"workspaceIdentity.acsURLLabel",defaultMessage:"Assertion Consumer Service (ACS) URL"},entityIDLabel:{id:"workspaceIdentity.entityIDLabel",defaultMessage:"Entity ID"},orDivider:{id:"workspaceIdentity.orDivider",defaultMessage:"or"},certExtractFailed:{id:"workspaceIdentity.certExtractFailed",defaultMessage:"Unable to find X.509 Certificate in provided XML"},ssoUrlExtractFailed:{id:"workspaceIdentity.ssoUrlExtractFailed",defaultMessage:"Unable to find Entity ID (sign-in endpoint) in provided XML"},ssoLearnMoreLink:{id:"workspaceIdentity.ssoLearnMoreLink",defaultMessage:"Learn more"}});function Ne({currentWorkspaceId:t}){const s=Z(),o=B(),{data:n}=ee(t),{mutateAsync:i}=J(t),l=n?.sso_connection!=null,g=!!n?.domains?.some(k=>k.status===G.VERIFIED),u=l?I.ssoEditButton:I.ssoAddButton,[f,r]=M.useState(!1),[d,j]=M.useState(!1),v=n?.sso_connection?.status==="ACTIVE",m=n?.sso_connection?.connection?.enabled_client_names?.includes("chat")??!1,p=v&&m,h=n?.sso_connection?.id;return n?e.jsxs("div",{children:[e.jsxs(N,{children:[e.jsxs("div",{className:"mb-4 flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(se,{className:V("icon-sm",p?"text-blue-600":"text-token-text-tertiary")}),e.jsx(U,{children:e.jsx(a,{...I.ssoTitle})})]}),l&&e.jsx("div",{children:e.jsx(_,{enabled:p,onChange:()=>{i({connectionId:h,active:!p})},label:o.formatMessage(I.ssoToggleActive)})})]}),g&&e.jsx(Be,{acsId:n.acs_id,hasSSO:l}),e.jsxs("div",{children:[e.jsx(R,{as:"button",color:"primary",disabled:!g,onClick:()=>{P(s)?j(!0):r(!0)},children:e.jsx(a,{...u})}),e.jsx(Pe,{workspaceId:t,data:n.sso_connection,isOpen:d,onClose:()=>{j(!1)}}),e.jsx(ne,{isOpen:f,onClose:()=>r(!1)})]})]}),n.sso_connection&&e.jsx(H,{icon:Y,title:e.jsx(a,{...I.enforceSSOTitle}),body:e.jsx(a,{...I.enforceSSOBody}),toggle:e.jsx(_,{disabled:!g,enabled:n.sso_connection.auth0_enforced_clients?.includes("chat"),onChange:k=>{!P(s)||!n.sso_connection?r(!0):i({connectionId:n.sso_connection.id,enforcedClients:k?["chat"]:[]}).catch(D=>{throw D instanceof $&&D.status===401&&r(!0),D})},label:o.formatMessage(I.enforceSSOLabel)})})]}):null}const I=w({ssoTitle:{id:"workspaceIdentity.ssoTitle",defaultMessage:"Single Sign On"},ssoToggleActive:{id:"WorkspaceIdentityPage.ssoToggleActive",defaultMessage:"Enable SSO for this workspace"},ssoAddButton:{id:"workspaceIdentity.ssoAddButton",defaultMessage:"Add SAML SSO"},ssoEditButton:{id:"workspaceIdentity.ssoEditButton",defaultMessage:"Edit SAML SSO"},enforceSSOTitle:{id:"workspaceIdentity.enforceSSOTitle",defaultMessage:"Enforce SSO log in"},enforceSSOBody:{id:"workspaceIdentity.enforceSSOBody",defaultMessage:"When SSO is active, users will no longer be able to use social logins and will be redirected to your SSO portal."},enforceSSOLabel:{id:"workspaceIdentity.enforceSSOLabel",defaultMessage:"Toggle to enable or disable SSO enforcement"}});function Ue({currentWorkspaceId:t}){const s=Z(),{connection:o,enabled:n,error:i,isLoading:l}=te(),{mutateAsync:c,status:g}=Me(t),[u,f]=M.useState(!1),r=o?.sso_connection_status==="ACTIVE",d=i?.code==="reauth_required"||!P(s),j=d?A.reauthRequiredExplanation:r?A.ssoStatusActive:A.ssoStatusInactive,v=d?A.reauthButtonLabel:A.manageSSOButton,m=l||g==="pending",p=async()=>{if(m)return;if(d||!P(s)){f(!0);return}if(o?.portal_link){window.open(o.portal_link,"_blank");return}const h=await c();if(h instanceof $&&h.code==="reauth_required"){f(!0);return}h.portal_link&&window.open(h.portal_link,"_blank")};return n?e.jsxs(N,{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(se,{className:V("icon-sm",r?"text-blue-600":"text-token-text-tertiary")}),e.jsx(U,{children:e.jsxs("div",{className:"flex flex-row",children:[e.jsx("div",{children:e.jsx(a,{...A.ssoTitle})}),e.jsx("div",{className:"ml-2 mt-1",children:m&&e.jsx(le,{})})]})})]}),!l&&e.jsx("div",{className:"text-sm",children:e.jsx(a,{...j})}),e.jsxs(R,{className:"self-start",onClick:p,loading:m,children:[!d&&e.jsx(je,{className:"icon-sm mr-2"}),e.jsx(a,{...v})]}),e.jsx(ne,{isOpen:u,onClose:()=>f(!1)})]}):null}const A=w({setupSSOContent:{id:"workspaceIdentity.setupSSOContent",defaultMessage:"Anyone using email addresses with a verified domain can log in via SAML SSO."},ssoTitle:{id:"workspaceIdentity.ssoTitle",defaultMessage:"Single Sign On"},ssoStatusActive:{id:"workspaceIdentity.ssoStatusActive",defaultMessage:"Single Sign On is enabled."},ssoStatusInactive:{id:"workspaceIdentity.ssoStatusInactive",defaultMessage:"Single Sign On is not configured."},manageSSOButton:{id:"workspaceIdentity.manageSSOButton",defaultMessage:"Manage Single Sign On"},reauthButtonLabel:{id:"workspaceIdentity.reauthButtonLabel",defaultMessage:"Reauthenticate"},reauthRequiredExplanation:{id:"workspaceIdentity.reauthRequiredExplanation",defaultMessage:"For security reasons, we need you to reauthenticate before making changes to SSO settings."}}),qe=re(()=>de(()=>import("./b018g8hw22mgl7o1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8])).then(t=>t.DirectorySyncSection)),Fe=({title:t,footer:s,children:o})=>e.jsxs(N,{children:[e.jsx(U,{children:e.jsx(a,{...t})}),e.jsx("div",{children:o}),e.jsx(X,{children:s})]});function He({currentWorkspaceId:t}){const s=B(),{data:o,isLoading:n}=ee(t),{enabled:i}=te(),{variables:l,mutateAsync:c}=ve(t),{variables:g,mutateAsync:u}=Ie(t),r=!!o?.domains?.some(m=>m.status===G.VERIFIED),d=g?.shouldAllowExternalDomainInvites??o?.allow_external_domain_invites??!0,j=r,v=o?e.jsxs(Oe,{children:[e.jsx(qe,{workspaceId:t}),e.jsx(Fe,{title:S.domainSubtitle,footer:e.jsx(a,{...S.verifyDomainInfoText}),children:e.jsx(Re,{domains:o.domains,workspaceId:t})}),e.jsx(H,{icon:we,title:e.jsx(a,{...S.autoProvisionTitle}),body:e.jsx(a,{...S.autoProvisionBody}),toggle:e.jsx(_,{disabled:!r,enabled:l?.shouldAutoProvision??o.should_auto_provision,onChange:m=>{c({shouldAutoProvision:m})},label:s.formatMessage(S.toggleAutoProvisionLabel)})}),j&&e.jsx(H,{icon:Ce,title:e.jsx(a,{...S.allowExternalDomainInvitesTitle}),body:e.jsx(a,{...S.allowExternalDomainInvitesBody}),toggle:e.jsx(_,{disabled:!r&&d,enabled:d,onChange:m=>{u({shouldAllowExternalDomainInvites:m})},label:s.formatMessage(S.toggleDisableExternalDomainInvitesLabel)})}),i?e.jsx(Ue,{currentWorkspaceId:t}):e.jsx(Ne,{currentWorkspaceId:t})]}):null;return e.jsxs(e.Fragment,{children:[e.jsx(ke,{children:e.jsx("title",{children:s.formatMessage(S.title)})}),e.jsx(Ae,{title:s.formatMessage(S.title)}),e.jsx(De,{showSpinner:n,children:v})]})}const S=w({title:{id:"workspaceIdentity.title",defaultMessage:"Identity & Provisioning"},domainSubtitle:{id:"workspaceIdentity.domainSubtitle",defaultMessage:"Domain management"},autoProvisionTitle:{id:"workspaceIdentity.autoProvisionSubtitle",defaultMessage:"Automatic account creation"},autoProvisionBody:{id:"workspaceIdentity.autoProvisionBody",defaultMessage:"Automatically create workspace accounts for new users who log in with a verified domain."},toggleAutoProvisionLabel:{id:"workspaceIdentity.toggleAutoProvisionLabel",defaultMessage:"Toggle to enable or disable auto provisioning"},allowExternalDomainInvitesTitle:{id:"RQGwuu",defaultMessage:"Allow External Domain Invites"},allowExternalDomainInvitesBody:{id:"7KRqHk",defaultMessage:"If not checked, future invitations to this workspace will be limited to users from this organization's verified domains"},toggleDisableExternalDomainInvitesLabel:{id:"bQy24Z",defaultMessage:"Toggle to enable or disable external domain invites"},verifyDomainInfoText:{id:"workspaceIdentity.verifyDomainInfoText",defaultMessage:"Verify ownership of an email domain to access advanced security features including single sign-on."},learnMoreLink:{id:"workspaceIdentity.learnMoreLink",defaultMessage:"Learn more"}}),lt=ce(function(){const s=Le();return Te(),e.jsx(He,{...s})});export{lt as default};
//# sourceMappingURL=fnwzcd59qej29s9e.js.map
