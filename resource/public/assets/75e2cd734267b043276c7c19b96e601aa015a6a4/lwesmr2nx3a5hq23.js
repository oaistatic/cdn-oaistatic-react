import{en as Q,a6 as z,C as L,R as G,aj as Z,ap as f,ae as J,c0 as E,gn as $,go as A,eo as i,em as o,h as ee,c2 as se,c3 as te,d as ae,b7 as ne,bT as R,e_ as ie}from"./mnkup87aq6tfilq5.js";import{r as y,c as C,j as e,a as q,b as B,M as r}from"./l6lryjpkt8rv0lpy.js";import{B as c}from"./f72oi2o5t19pjunq.js";import{c_ as oe,bL as re,cY as le,f$ as P,g0 as ce,g1 as I,bN as de,g2 as pe,g3 as ge,g4 as W,g5 as ue,fh as h}from"./dvllb5fed1b4y7k1.js";import{a as he,b as me}from"./glr3hsgqk2atsgja.js";import{a as fe,b as be,c as m,A as T,d as Se,e as xe,f as Ce}from"./egl69jgfgzdafo9i.js";import{u as we,b as Me}from"./ev481f9ncaaw0s6x.js";import"./d0ynpcmhn5mxx54e.js";import"./lpa0sb8hkyi7pmml.js";import"./4wfwbvmzqu7tbfmg.js";import"./1e3kywkhcjn5spyo.js";import"./cbms2jcglp4b707f.js";import"./jnjzqafy9dn7o7ce.js";import"./lurgjwdeumqr5obb.js";import"./iwy57t47eybf2a2a.js";import"./bec9qm8zi6ffweg0.js";import"./il55y7bc33l80dn8.js";const Te=a=>y.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},y.createElement("path",{d:"M20.0909 7.2368C19.3969 7.66168 18.8221 8.25568 18.4202 8.96321C18.0183 9.67075 17.8025 10.4687 17.7929 11.2823C17.7957 12.1981 18.067 13.0929 18.5733 13.856C19.0796 14.6191 19.7986 15.2169 20.6413 15.5754C20.309 16.6474 19.8173 17.6632 19.1827 18.5888C18.2746 19.8961 17.325 21.2032 15.8803 21.2032C14.4355 21.2032 14.064 20.3638 12.399 20.3638C10.7753 20.3638 10.1974 21.2308 8.87637 21.2308C7.5554 21.2308 6.63358 20.0198 5.574 18.5338C4.17437 16.452 3.40515 14.0106 3.35864 11.5024C3.35864 7.37443 6.0419 5.18665 8.68372 5.18665C10.0873 5.18665 11.2569 6.10847 12.1376 6.10847C12.9769 6.10847 14.2842 5.1315 15.8803 5.1315C16.7009 5.11032 17.5142 5.29127 18.2485 5.6584C18.9827 6.02553 19.6154 6.56757 20.0909 7.2368ZM15.1235 3.38405C15.8271 2.55637 16.2254 1.51233 16.2519 0.426336C16.2531 0.28317 16.2392 0.140275 16.2106 0C15.002 0.11806 13.8844 0.694096 13.087 1.60995C12.3766 2.40465 11.9633 3.42081 11.9174 4.48573C11.9179 4.61524 11.9317 4.74435 11.9587 4.87103C12.0539 4.88904 12.1507 4.89827 12.2476 4.89861C12.8046 4.85429 13.3468 4.69717 13.8412 4.4368C14.3356 4.17644 14.7719 3.81826 15.1235 3.38405Z",fill:"black"})),v=60*60*24,ke=v*90,_e=v*365;function je({conversationTTL:a}){const t=C();let n;return a==null?n=t.formatMessage(s.retentionInfinite):a===ke?n=t.formatMessage(s.retentionNinetyDays):a===_e?n=t.formatMessage(s.retentionOneYear):n=t.formatMessage(s.retentionCustomDays,{num:Math.floor(a/v)}),e.jsxs(T,{children:[e.jsx("p",{className:"inline-flex items-center text-base",children:e.jsx(r,{...s.conversationRetention})}),e.jsx(se,{label:t.formatMessage(s.retentionSettingTooltip),children:n})]})}function g({title:a,description:t,children:n,upsellEnterprise:l=!1,descriptionValues:u={}}){return e.jsx(te,{label:e.jsx(r,{...s.enterpriseRequiredMessage}),side:"top",sideOffset:4,disabled:!l,className:"max-w-xl",children:e.jsxs(Se,{className:ae(l&&"text-token-text-tertiary"),children:[e.jsxs(xe,{className:"flex items-center gap-3",children:[e.jsx(r,{...a}),l&&e.jsx("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:e.jsx(r,{...s.enterpriseUpsellPill})})]}),t&&e.jsx(Ce,{className:"py-2 text-token-text-secondary",children:ye(t)?e.jsx(r,{...t,values:u}):t}),n]})})}function ye(a){return!!a&&typeof a=="object"&&"id"in a}function ve({workspaceId:a,label:t,setting:n,defaultValue:l,values:u,disabled:b=!1}){const w=C(),k=L(),S=q(),{variables:_,mutate:j}=B({mutationFn:({setting:p,value:x})=>G.safePost("/accounts/{account_id}/settings/share_settings",{parameters:{path:{account_id:a}},requestBody:{setting:p,value:x}}),onSettled:()=>{S.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{k.danger(w.formatMessage(s.featureSettingsUpdateFailed))}});return e.jsxs(T,{children:[e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(r,{...t})}),e.jsxs(h.Root,{defaultValue:_?.value??l,onValueChange:p=>{j({setting:n,value:p})},disabled:b,children:[e.jsxs(h.Trigger,{className:"text-md focus-visible:border-none",children:[e.jsx(h.Value,{}),e.jsx(h.Icon,{})]}),e.jsx(h.Portal,{children:e.jsx(h.Content,{children:u.map((p,x)=>e.jsx(h.Item,{className:"text-md",value:p.value,children:e.jsx(r,{...p.display})},x))})})]})]})}function Oe({onConfirm:a,onClose:t}){const n=C();return e.jsx(ne,{type:"warning",isOpen:!0,onClose:t,title:n.formatMessage(s.deleteWorkspaceMemoryModalTitle),showCloseButton:!0,primaryButton:e.jsx(R,{color:"danger",onClick:a,children:e.jsx(r,{...s.deleteWorkspaceMemoryModalConfirm})}),secondaryButton:e.jsx(R,{onClick:t,color:"secondary",children:e.jsx(r,{...s.deleteWorkspaceMemoryModalCancel})}),children:e.jsx("div",{className:"mb-2 text-sm text-token-text-primary",children:e.jsx(r,{...s.deleteWorkspaceMemoryModalInfo,values:{b:l=>e.jsx("b",{children:l})}})})})}function Ne({workspaceId:a,data:t}){const n=re(le.isTeamPlan),l=z(),u=C(),b=L(),{showWorkspaceSettings:w}=P(),[k,S]=y.useState(!1),_=q(),{variables:j,mutate:p}=B({mutationFn:({feature:d,enabled:K})=>G.safePost("/accounts/{account_id}/beta_features",{parameters:{path:{account_id:a}},requestBody:{feature:d,value:K}}),onSettled:()=>{_.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{b.danger(u.formatMessage(s.featureSettingsUpdateFailed))}}),x=Z("3940160259").value,F=f("2833534668").value,V=f("3910241726").value,O=f("3180974288").value&&l?.residencyRegion==="no_constraint",H=f("614413305").value&&l?.residencyRegion==="no_constraint",U=f("2445152477").value,Y=f("3940529303").value,M=P();M.confluenceLinkStatus,M.jiraLinkStatus,M.notionLinkStatus,M.slackLinkStatus;const X=ce(),N=J(),D=N?.includes(E.SearchTool)&&!N?.includes(E.SearchToolHoldout);return e.jsxs(fe,{children:[n&&e.jsx(be,{}),e.jsxs(g,{title:s.workspaceDetails,children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(r,{id:"SgdcRQ",defaultMessage:"Organization ID"}),e.jsx(I,{value:l?.data.organizationId??"",onCopied:()=>b.success(u.formatMessage({id:"Ctw3o0",defaultMessage:"Copied organization ID"}))})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(r,{id:"yFldxx",defaultMessage:"Workspace ID"}),e.jsx(I,{value:a,onCopied:()=>b.success(u.formatMessage({id:"CqDpiM",defaultMessage:"Copied workspace ID"}))})]})]}),e.jsx(g,{title:s.sharingSettingsTitle,upsellEnterprise:n,children:e.jsx(m,{children:e.jsx(ve,{workspaceId:a,label:V?s.chatCanvasSharingTitle:s.chatSharingTitle,setting:$.CHAT_SHARE_SETTINGS,disabled:n,defaultValue:t.share_settings.chat_share_setting,values:[{display:s.workspaceMembersOnlySelect,value:A.WORKSPACE_ONLY},{display:s.noOneSelect,value:A.NO_ONE}]})})}),e.jsx(g,{title:s.memoryFeatureSettingsTitle,description:s.workspaceMemoryDescription,descriptionValues:{link:d=>e.jsx("a",{href:"https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq",target:"_blank",className:"underline",rel:"noreferrer",children:d})},upsellEnterprise:n,children:e.jsxs(m,{children:[e.jsxs(T,{className:"justify-start py-6",children:[e.jsx(de,{label:"",disabled:n,enabled:j?.enabled??t.beta_settings.sunshine,onChange:d=>{d?p({feature:i.MEMORY,enabled:d}):S(!0)}}),e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(r,{...s.memoryOptionTitle})})]}),X&&e.jsx(c,{disabled:!t.beta_settings.sunshine,label:o({id:"Z9AZ9N",defaultMessage:"Allow members to use memory in search"}),feature:i.MEMORY_IN_SEARCH,value:t.beta_settings.memory_in_search_2,workspaceId:a})]})}),k&&e.jsx(Oe,{onConfirm:()=>{p({feature:i.MEMORY,enabled:!1}),S(!1)},onClose:()=>{S(!1)}}),F&&t.beta_settings.canvas&&e.jsx(g,{title:o({id:"SyabKs",defaultMessage:"Canvas"}),description:o({id:"pPFCur",defaultMessage:"Control how users in this workspace can use the ChatGPT canvas feature."}),upsellEnterprise:n,children:e.jsxs(m,{children:[e.jsx(c,{disabled:n,label:o({id:"wlG5ZH",defaultMessage:"Canvas code execution"}),feature:i.CANVAS_CODE_EXECUTION,tooltip:o({id:"qMiLv3",defaultMessage:"Support for running canvas code within the browser."}),value:t.beta_settings.canvas_code_execution,workspaceId:a}),e.jsx(c,{disabled:n,label:o({id:"XwHFHi",defaultMessage:"Allow canvas code to access the network"}),feature:i.CANVAS_CODE_NETWORK_ACCESS,tooltip:o({id:"ujHQEU",defaultMessage:"Learn more about network requests in canvas"}),onClickInfo:()=>window.open("https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it#h_cd52fdbc16"),value:t.beta_settings.canvas_code_network_access,workspaceId:a})]})}),e.jsx(g,{title:s.searchTitle,description:s.searchDescription,upsellEnterprise:n,children:e.jsxs(m,{children:[e.jsx(c,{label:D?s.searchOptionTitle:s.browseOptionTitle,feature:i.BROWSING,value:t.beta_settings.browsing,workspaceId:a,tooltip:D?s.searchTooltip:s.browseTooltip,disabled:n}),x===!0&&e.jsx(c,{label:s.deepResearchTitle,feature:i.DEEP_RESEARCH,overrideDisplayValue:t.beta_settings.browsing?void 0:!1,messageAfterTooltip:t.beta_settings.browsing?void 0:s.deepResearchTooltipDisabledWarning,value:t.beta_settings.deep_research,workspaceId:a,tooltip:t.beta_settings.browsing?s.deepResearchTooltip:s.deepResearchTooltipDisabled,disabled:n||!t.beta_settings.browsing,onClickInfo:()=>window.open("https://help.openai.com/en/articles/10500283-deep-research-faq")})]})}),Y&&e.jsx(g,{title:o({id:"/1YXN0",defaultMessage:"Voice"}),description:o({id:"3jvok6",defaultMessage:"Manage whether members can share their screen or video while having a voice conversation. <link>Learn more</link>"}),descriptionValues:{link:d=>e.jsx("a",{href:"https://help.openai.com/en/articles/8400625-voice-mode-faq",target:"_blank",className:"underline",rel:"noreferrer",children:d})},upsellEnterprise:n,children:e.jsx(m,{children:e.jsx(c,{disabled:n,label:o({id:"9usJzG",defaultMessage:"Allow members to share their screen or video while using voice mode"}),feature:i.VIDEO_SCREEN_SHARING,value:t.beta_settings.video_screen_sharing,workspaceId:a})})}),U&&e.jsx(g,{title:o({id:"wgrfi/",defaultMessage:"Work with Apps"}),description:s.workspaceAppPairingDescription,descriptionValues:{link:d=>e.jsx("a",{href:"https://help.openai.com/en/articles/10119604",target:"_blank",className:"underline",rel:"noreferrer",children:d})},upsellEnterprise:n,children:e.jsx(m,{children:e.jsx(c,{disabled:n,label:o({id:"j8pJeQ",defaultMessage:"Work with Apps"}),feature:i.APP_PAIRING,value:t.beta_settings.app_pairing,workspaceId:a})})}),e.jsx(g,{title:s.retentionPolicyTitle,description:s.retentionChange,upsellEnterprise:n,children:e.jsx(je,{conversationTTL:t.conversation_ttl??null})}),w||O?e.jsx(g,{title:s.connectionsTitle,upsellEnterprise:n,description:e.jsx(r,{...s.contextConnectorsSubtitle,values:{helpCenterLink:e.jsx("a",{className:"text-token-link",href:"https://help.openai.com/en/articles/9309188-connected-apps-on-chatgpt",target:"_blank",rel:"noreferrer",children:e.jsx(r,{...s.contextConnectorsHelpCenterLink})})}}),children:e.jsxs(m,{children:[w&&e.jsxs(e.Fragment,{children:[!1,!1,e.jsx(c,{disabled:n,label:s.contextConnectorsGoogleDrive,Icon:pe,feature:i.CONTEXT_CONNECTOR_GDRIVE,value:t.beta_settings[i.CONTEXT_CONNECTOR_GDRIVE],workspaceId:a}),e.jsx(c,{disabled:n,label:ge,Icon:W,tooltip:s.contextConnectorsO365BusinessTooltip,feature:i.CONTEXT_CONNECTOR_O365_BUSINESS,value:t.beta_settings[i.CONTEXT_CONNECTOR_O365_BUSINESS],workspaceId:a}),e.jsx(c,{disabled:n,label:ue,Icon:W,tooltip:s.contextConnectorsO365PersonalTooltip,feature:i.CONTEXT_CONNECTOR_O365_PERSONAL,value:t.beta_settings[i.CONTEXT_CONNECTOR_O365_PERSONAL],workspaceId:a}),!1,!1]}),O&&e.jsxs(T,{className:"flex-col",children:[e.jsx(c,{hasPadding:!1,disabled:!1,label:o({id:"mcLjLe",defaultMessage:"Beta: Apple Intelligence"}),Icon:Te,feature:i.CLIENT_APPLICATION_APPLE,value:t.beta_settings.client_application_apple,workspaceId:a,tooltip:o({id:"mp2Kmk",defaultMessage:"Beta: Enable linking with Apple Intelligence"})}),H&&e.jsx(c,{className:"ml-6",hasPadding:!1,disabled:!t.beta_settings.client_application_apple,label:o({id:"64jjqZ",defaultMessage:"Enable on managed devices only"}),feature:i.CLIENT_APPLICATION_APPLE_MDM_REQUIRED,value:t.beta_settings.client_application_apple_mdm_required,workspaceId:a,tooltip:o({id:"7Afc2K",defaultMessage:"Only allow linking this workspace with Apple Intelligence on MDM managed devices"})})]})]})}):null]})}function De({currentWorkspaceId:a}){const{data:t,isLoading:n}=Q(a),l=C();return e.jsxs(e.Fragment,{children:[e.jsx(oe,{children:e.jsx("title",{children:l.formatMessage(s.title)})}),e.jsx(he,{title:l.formatMessage(s.title)}),e.jsx(me,{showSpinner:n,children:t===void 0?null:e.jsx(Ne,{workspaceId:a,data:t})})]})}const s=ee({title:{id:"workspaceSettings.title",defaultMessage:"Settings"},retentionPolicyTitle:{id:"workspaceSettings.retentionPolicyTitle",defaultMessage:"Retention policy"},sharingSettingsTitle:{id:"workspaceSettings.sharingSettingsTitle",defaultMessage:"Sharing"},memoryFeatureSettingsTitle:{id:"workspaceSettings.memoryFeatureSettingsTitle",defaultMessage:"Memory"},memoryOptionTitle:{id:"workspaceSettings.memoryOptionTitle",defaultMessage:"Allow members to use memory"},deepResearchTitle:{id:"workspaceSettings.deepResearchTitle",defaultMessage:"Deep Research"},workspaceMemoryDescription:{id:"workspaceSettings.workspaceMemoryDescription",defaultMessage:"Manage whether members can enable memory. This allows ChatGPT to become more helpful by remembering details and preferences across chats. <link>Learn more</link>"},workspaceAppPairingDescription:{id:"workspaceSettings.workspaceAppPairingDescription",defaultMessage:"Control whether users in this workspace can enable ChatGPT to work with apps. This allows ChatGPT to read the content of specific apps on their desktop to provide better responses. <link>Learn more</link>"},deleteWorkspaceMemoryModalTitle:{id:"workspaceSettings.deleteWorkspaceMemoryModalTitle",defaultMessage:"Are you sure?"},deleteWorkspaceMemoryModalConfirm:{id:"workspaceSettings.deleteWorkspaceMemoryModalConfirm",defaultMessage:"Disable and delete memories"},deleteWorkspaceMemoryModalCancel:{id:"workspaceSettings.deleteWorkspaceMemoryModalCancel",defaultMessage:"Cancel"},deleteWorkspaceMemoryModalInfo:{id:"workspaceSettings.groups.deleteWorkspaceMemoryModalInfo",defaultMessage:"If you disable memory for your workspace, <b>members' existing memories will be forgotten</b>. This can't be undone."},chatSharingTitle:{id:"workspaceSettings.chatSharingTitle",defaultMessage:"Chats can be shared with..."},chatCanvasSharingTitle:{id:"workspaceSettings.chatCanvasSharingTitle",defaultMessage:"Allow members to share a chat or canvas with..."},workspaceDetails:{id:"workspaceSettings.workspaceDetails",defaultMessage:"Workspace details"},workspaceMembersOnlySelect:{id:"workspaceSettings.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},noOneSelect:{id:"workspaceSettings.noOneSelect",defaultMessage:"No one"},featureSettingsUpdateFailed:{id:"workspaceSettings.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettings.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettings.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettings.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettings.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettings.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettings.retentionChange",defaultMessage:"Contact your account manager to change this setting."},enterpriseUpsellPill:{id:"workspaceSettings.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettings.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettings.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},connectionsTitle:{id:"workspaceSettings.connectionsTitle",defaultMessage:"Connections"},contextConnectorsSubtitle:{id:"workspaceSettings.contextConnectorsSubtitle",defaultMessage:"Manage which apps users in this workspace can connect to directly from ChatGPT. For more information, refer to the {helpCenterLink}."},contextConnectorsHelpCenterLink:{id:"workspaceSettings.contextConnectorsHelpCenterLink",defaultMessage:"Help Center"},contextConnectorsGoogleDrive:{id:"workspaceSettings.contextConnectorsGoogleDrive",defaultMessage:"Google Drive"},contextConnectorsO365PersonalTooltip:{id:"workspaceSettings.contextConnectorsO365PersonalTooltip",defaultMessage:"This includes personal OneDrive accounts but not OneDrive for Business or SharePoint accounts."},contextConnectorsO365BusinessTooltip:{id:"workspaceSettings.contextConnectorsO365BusinessTooltip",defaultMessage:"This includes OneDrive for Business and SharePoint accounts but not personal accounts."},searchTitle:{id:"workspaceSettings.searchTitle",defaultMessage:"Web Search"},searchDescription:{id:"workspaceSettings.workspaceGPTsDescription",defaultMessage:"Manage whether ChatGPT and GPTs created in this workspace can browse the internet. When enabled, it may send search queries and general location information to Bing, but this data is not linked to or associated with user accounts. This does not apply to third-party GPTs."},deepResearchDescription:{id:"workspaceSettings.workspaceDeepResearchDescription",defaultMessage:"Deep Research utilizes web search & reasoning to respond to research queries. <link>Learn more</link>"},searchTooltip:{id:"workspaceSettings.searchTooltip",defaultMessage:"Web search allows ChatGPT and GPTs to answer questions on recent topics."},searchOptionTitle:{id:"workspaceSettings.searchOptionTitle",defaultMessage:"Web Search"},browseOptionTitle:{id:"workspaceSettings.browseOptionTitle",defaultMessage:"Browsing with Bing"},browseTooltip:{id:"workspaceSettings.browseTooltip",defaultMessage:"Allow ChatGPT and GPTs to browse the internet to answer questions about recent topics and events."},deepResearchTooltip:{id:"workspaceSettings.deepResearchTooltip",defaultMessage:"Deep research uses web search and reasoning to handle complex research requests."},deepResearchTooltipDisabled:{id:"workspaceSettings.deepResearchTooltipDisabled",defaultMessage:"Deep research uses web search and reasoning to handle complex research requests. Turn web search on to allow deep research."},deepResearchTooltipDisabledWarning:{id:"workspaceSettings.deepResearchTooltipDisabledWarning",defaultMessage:"Requires web search"}}),Qe=ie(function(){const t=we();return Me(),e.jsx(De,{...t})});export{Qe as default};
//# sourceMappingURL=lwesmr2nx3a5hq23.js.map
