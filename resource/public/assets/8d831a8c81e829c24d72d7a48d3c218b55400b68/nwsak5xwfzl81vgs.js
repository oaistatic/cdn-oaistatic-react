import{eB as Q,a7 as K,B as G,ac as B,av as x,aE as Z,c5 as D,gw as z,gx as P,eC as i,eA as o,j as J,bJ as $,ef as ee,d as te,bd as se,bY as R,eX as ne}from"./efuue3ezs0mj4ucx.js";import{r as _,c as M,j as e,a as F,b as V,M as r}from"./n1tvutderx19k1zs.js";import{B as c}from"./byazu4h9nw0ky1r9.js";import{cX as ae,bJ as ie,cV as oe,fL as I,fM as re,fN as W,bL as le,fO as ce,fP as de,fQ as L,fR as pe,f3 as m}from"./c87uv1mutc86tiqk.js";import{a as ge,b as ue}from"./lh89qzxxlysgorkz.js";import{a as me,b as he,c as h,A as k,d as fe,e as xe,f as Ce}from"./k6d8vr3idy9ttpgs.js";import{u as Se,c as Me}from"./chu2aivt0fxgmd6m.js";import"./oqdx4hpmwxvfh9gy.js";import"./oq09nie6yqvskddc.js";import"./jy24clh9s5sbm6a3.js";import"./d995zjnlydagrugw.js";import"./bh0nczk7jf5nipy7.js";import"./ishe91rr928a0b40.js";import"./k081xtl7qxstenxt.js";import"./ngn9hyh36iu8kqm0.js";import"./oy248fbbcvutqmly.js";import"./hau51huxh66v0dxz.js";const be=n=>_.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},_.createElement("path",{d:"M20.0909 7.2368C19.3969 7.66168 18.8221 8.25568 18.4202 8.96321C18.0183 9.67075 17.8025 10.4687 17.7929 11.2823C17.7957 12.1981 18.067 13.0929 18.5733 13.856C19.0796 14.6191 19.7986 15.2169 20.6413 15.5754C20.309 16.6474 19.8173 17.6632 19.1827 18.5888C18.2746 19.8961 17.325 21.2032 15.8803 21.2032C14.4355 21.2032 14.064 20.3638 12.399 20.3638C10.7753 20.3638 10.1974 21.2308 8.87637 21.2308C7.5554 21.2308 6.63358 20.0198 5.574 18.5338C4.17437 16.452 3.40515 14.0106 3.35864 11.5024C3.35864 7.37443 6.0419 5.18665 8.68372 5.18665C10.0873 5.18665 11.2569 6.10847 12.1376 6.10847C12.9769 6.10847 14.2842 5.1315 15.8803 5.1315C16.7009 5.11032 17.5142 5.29127 18.2485 5.6584C18.9827 6.02553 19.6154 6.56757 20.0909 7.2368ZM15.1235 3.38405C15.8271 2.55637 16.2254 1.51233 16.2519 0.426336C16.2531 0.28317 16.2392 0.140275 16.2106 0C15.002 0.11806 13.8844 0.694096 13.087 1.60995C12.3766 2.40465 11.9633 3.42081 11.9174 4.48573C11.9179 4.61524 11.9317 4.74435 11.9587 4.87103C12.0539 4.88904 12.1507 4.89827 12.2476 4.89861C12.8046 4.85429 13.3468 4.69717 13.8412 4.4368C14.3356 4.17644 14.7719 3.81826 15.1235 3.38405Z",fill:"black"})),v=60*60*24,we=v*90,ke=v*365;function Te({conversationTTL:n}){const s=M();let a;return n==null?a=s.formatMessage(t.retentionInfinite):n===we?a=s.formatMessage(t.retentionNinetyDays):n===ke?a=s.formatMessage(t.retentionOneYear):a=s.formatMessage(t.retentionCustomDays,{num:Math.floor(n/v)}),e.jsxs(k,{children:[e.jsx("p",{className:"inline-flex items-center text-base",children:e.jsx(r,{...t.conversationRetention})}),e.jsx($,{label:s.formatMessage(t.retentionSettingTooltip),children:a})]})}function g({title:n,description:s,children:a,upsellEnterprise:l=!1,descriptionValues:u={}}){return e.jsx(ee,{label:e.jsx(r,{...t.enterpriseRequiredMessage}),side:"top",sideOffset:4,disabled:!l,className:"max-w-xl",children:e.jsxs(fe,{className:te(l&&"text-token-text-tertiary"),children:[e.jsxs(xe,{className:"flex items-center gap-3",children:[e.jsx(r,{...n}),l&&e.jsx("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:e.jsx(r,{...t.enterpriseUpsellPill})})]}),s&&e.jsx(Ce,{className:"py-2 text-token-text-secondary",children:je(s)?e.jsx(r,{...s,values:u}):s}),a]})})}function je(n){return!!n&&typeof n=="object"&&"id"in n}function ye({workspaceId:n,label:s,setting:a,defaultValue:l,values:u,disabled:C=!1}){const b=M(),T=G(),S=F(),{variables:j,mutate:y}=V({mutationFn:({setting:p,value:f})=>B.setWorkspaceShareSetting(n,p,f),onSettled:()=>{S.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{T.danger(b.formatMessage(t.featureSettingsUpdateFailed))}});return e.jsxs(k,{children:[e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(r,{...s})}),e.jsxs(m.Root,{defaultValue:j?.value??l,onValueChange:p=>{y({setting:a,value:p})},disabled:C,children:[e.jsxs(m.Trigger,{className:"text-md focus-visible:border-none",children:[e.jsx(m.Value,{}),e.jsx(m.Icon,{})]}),e.jsx(m.Portal,{children:e.jsx(m.Content,{children:u.map((p,f)=>e.jsx(m.Item,{className:"text-md",value:p.value,children:e.jsx(r,{...p.display})},f))})})]})]})}function _e({onConfirm:n,onClose:s}){const a=M();return e.jsx(se,{type:"warning",isOpen:!0,onClose:s,title:a.formatMessage(t.deleteWorkspaceMemoryModalTitle),showCloseButton:!0,primaryButton:e.jsx(R,{color:"danger",onClick:n,children:e.jsx(r,{...t.deleteWorkspaceMemoryModalConfirm})}),secondaryButton:e.jsx(R,{onClick:s,color:"secondary",children:e.jsx(r,{...t.deleteWorkspaceMemoryModalCancel})}),children:e.jsx("div",{className:"mb-2 text-sm text-token-text-primary",children:e.jsx(r,{...t.deleteWorkspaceMemoryModalInfo,values:{b:l=>e.jsx("b",{children:l})}})})})}function ve({workspaceId:n,data:s}){const a=ie(oe.isTeamPlan),l=K(),u=M(),C=G(),{showWorkspaceSettings:b}=I(),[T,S]=_.useState(!1),j=F(),{variables:y,mutate:p}=V({mutationFn:({feature:d,enabled:X})=>B.setWorkspaceBetaFeature(n,d,X),onSettled:()=>{j.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{C.danger(u.formatMessage(t.featureSettingsUpdateFailed))}}),f=x("193142637").value,O=x("2833534668").value,N=x("3180974288").value&&l?.residencyRegion==="no_constraint",q=x("614413305").value&&l?.residencyRegion==="no_constraint",H=x("2445152477").value,Y=x("3940529303").value,w=I();w.confluenceLinkStatus,w.jiraLinkStatus,w.notionLinkStatus,w.slackLinkStatus;const U=re(),E=Z(),A=E?.includes(D.SearchTool)&&!E?.includes(D.SearchToolHoldout);return e.jsxs(me,{children:[a&&e.jsx(he,{}),e.jsxs(g,{title:t.workspaceDetails,children:[e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(r,{id:"SgdcRQ",defaultMessage:"Organization ID"}),e.jsx(W,{value:l?.data.organizationId??"",onCopied:()=>C.success(u.formatMessage({id:"Ctw3o0",defaultMessage:"Copied organization ID"}))})]}),e.jsxs("div",{className:"flex flex-row items-center justify-between",children:[e.jsx(r,{id:"yFldxx",defaultMessage:"Workspace ID"}),e.jsx(W,{value:n,onCopied:()=>C.success(u.formatMessage({id:"CqDpiM",defaultMessage:"Copied workspace ID"}))})]})]}),e.jsx(g,{title:t.sharingSettingsTitle,upsellEnterprise:a,children:e.jsx(h,{children:e.jsx(ye,{workspaceId:n,label:t.chatSharingTitle,setting:z.CHAT_SHARE_SETTINGS,disabled:a,defaultValue:s.share_settings.chat_share_setting,values:[{display:t.workspaceMembersOnlySelect,value:P.WORKSPACE_ONLY},{display:t.noOneSelect,value:P.NO_ONE}]})})}),e.jsx(g,{title:t.memoryFeatureSettingsTitle,description:t.workspaceMemoryDescription,descriptionValues:{link:d=>e.jsx("a",{href:"https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq",target:"_blank",className:"underline",rel:"noreferrer",children:d})},upsellEnterprise:a,children:e.jsxs(h,{children:[e.jsxs(k,{className:"justify-start py-6",children:[e.jsx(le,{label:"",disabled:a,enabled:y?.enabled??s.beta_settings.sunshine,onChange:d=>{d?p({feature:i.MEMORY,enabled:d}):S(!0)}}),e.jsx("p",{className:"text-md inline-flex items-center",children:e.jsx(r,{...t.memoryOptionTitle})})]}),U&&e.jsx(c,{disabled:!s.beta_settings.sunshine,label:o({id:"Z9AZ9N",defaultMessage:"Allow members to use memory in search"}),feature:i.MEMORY_IN_SEARCH,value:s.beta_settings.memory_in_search_2,workspaceId:n})]})}),T&&e.jsx(_e,{onConfirm:()=>{p({feature:i.MEMORY,enabled:!1}),S(!1)},onClose:()=>{S(!1)}}),(f||O)&&e.jsx(g,{title:o({id:"SyabKs",defaultMessage:"Canvas"}),description:o({id:"pPFCur",defaultMessage:"Control how users in this workspace can use the ChatGPT canvas feature."}),upsellEnterprise:a,children:e.jsxs(h,{children:[f&&e.jsx(c,{disabled:a,label:o({id:"i8v3nI",defaultMessage:"Canvas"}),feature:i.CANVAS,value:s.beta_settings.canvas,workspaceId:n}),O&&s.beta_settings.canvas&&e.jsx(c,{disabled:a,label:o({id:"wlG5ZH",defaultMessage:"Canvas code execution"}),feature:i.CANVAS_CODE_EXECUTION,tooltip:o({id:"1Y6g28",defaultMessage:"Support for running canvas code within the browser with network access."}),value:s.beta_settings.canvas_code_execution,workspaceId:n})]})}),e.jsx(g,{title:t.searchTitle,description:t.searchDescription,upsellEnterprise:a,children:e.jsx(h,{children:e.jsx(c,{label:A?t.searchOptionTitle:t.browseOptionTitle,feature:i.BROWSING,value:s.beta_settings.browsing,workspaceId:n,tooltip:A?t.searchTooltip:t.browseTooltip,disabled:a})})}),Y&&e.jsx(g,{title:o({id:"/1YXN0",defaultMessage:"Voice"}),description:o({id:"3jvok6",defaultMessage:"Manage whether members can share their screen or video while having a voice conversation. <link>Learn more</link>"}),descriptionValues:{link:d=>e.jsx("a",{href:"https://help.openai.com/en/articles/8400625-voice-mode-faq",target:"_blank",className:"underline",rel:"noreferrer",children:d})},upsellEnterprise:a,children:e.jsx(h,{children:e.jsx(c,{disabled:a,label:o({id:"9usJzG",defaultMessage:"Allow members to share their screen or video while using voice mode"}),feature:i.VIDEO_SCREEN_SHARING,value:s.beta_settings.video_screen_sharing,workspaceId:n})})}),H&&e.jsx(g,{title:o({id:"wgrfi/",defaultMessage:"Work with Apps"}),description:t.workspaceAppPairingDescription,descriptionValues:{link:d=>e.jsx("a",{href:"https://help.openai.com/en/articles/10119604",target:"_blank",className:"underline",rel:"noreferrer",children:d})},upsellEnterprise:a,children:e.jsx(h,{children:e.jsx(c,{disabled:a,label:o({id:"j8pJeQ",defaultMessage:"Work with Apps"}),feature:i.APP_PAIRING,value:s.beta_settings.app_pairing,workspaceId:n})})}),e.jsx(g,{title:t.retentionPolicyTitle,description:t.retentionChange,upsellEnterprise:a,children:e.jsx(Te,{conversationTTL:s.conversation_ttl})}),b||N?e.jsx(g,{title:t.connectionsTitle,upsellEnterprise:a,description:e.jsx(r,{...t.contextConnectorsSubtitle,values:{helpCenterLink:e.jsx("a",{className:"text-token-link",href:"https://help.openai.com/en/articles/9309188-connected-apps-on-chatgpt",target:"_blank",rel:"noreferrer",children:e.jsx(r,{...t.contextConnectorsHelpCenterLink})})}}),children:e.jsxs(h,{children:[b&&e.jsxs(e.Fragment,{children:[!1,!1,e.jsx(c,{disabled:a,label:t.contextConnectorsGoogleDrive,Icon:ce,feature:i.CONTEXT_CONNECTOR_GDRIVE,value:s.beta_settings[i.CONTEXT_CONNECTOR_GDRIVE],workspaceId:n}),e.jsx(c,{disabled:a,label:de,Icon:L,tooltip:t.contextConnectorsO365BusinessTooltip,feature:i.CONTEXT_CONNECTOR_O365_BUSINESS,value:s.beta_settings[i.CONTEXT_CONNECTOR_O365_BUSINESS],workspaceId:n}),e.jsx(c,{disabled:a,label:pe,Icon:L,tooltip:t.contextConnectorsO365PersonalTooltip,feature:i.CONTEXT_CONNECTOR_O365_PERSONAL,value:s.beta_settings[i.CONTEXT_CONNECTOR_O365_PERSONAL],workspaceId:n}),!1,!1]}),N&&e.jsxs(k,{className:"flex-col",children:[e.jsx(c,{hasPadding:!1,disabled:!1,label:o({id:"mcLjLe",defaultMessage:"Beta: Apple Intelligence"}),Icon:be,feature:i.CLIENT_APPLICATION_APPLE,value:s.beta_settings.client_application_apple,workspaceId:n,tooltip:o({id:"mp2Kmk",defaultMessage:"Beta: Enable linking with Apple Intelligence"})}),q&&e.jsx(c,{className:"ml-6",hasPadding:!1,disabled:!s.beta_settings.client_application_apple,label:o({id:"64jjqZ",defaultMessage:"Enable on managed devices only"}),feature:i.CLIENT_APPLICATION_APPLE_MDM_REQUIRED,value:s.beta_settings.client_application_apple_mdm_required,workspaceId:n,tooltip:o({id:"7Afc2K",defaultMessage:"Only allow linking this workspace with Apple Intelligence on MDM managed devices"})})]})]})}):null]})}function Oe({currentWorkspaceId:n}){const{data:s,isLoading:a}=Q(n),l=M();return e.jsxs(e.Fragment,{children:[e.jsx(ae,{children:e.jsx("title",{children:l.formatMessage(t.title)})}),e.jsx(ge,{title:l.formatMessage(t.title)}),e.jsx(ue,{showSpinner:a,children:s===void 0?null:e.jsx(ve,{workspaceId:n,data:s})})]})}const t=J({title:{id:"workspaceSettings.title",defaultMessage:"Settings"},retentionPolicyTitle:{id:"workspaceSettings.retentionPolicyTitle",defaultMessage:"Retention policy"},sharingSettingsTitle:{id:"workspaceSettings.sharingSettingsTitle",defaultMessage:"Sharing"},memoryFeatureSettingsTitle:{id:"workspaceSettings.memoryFeatureSettingsTitle",defaultMessage:"Memory"},memoryOptionTitle:{id:"workspaceSettings.memoryOptionTitle",defaultMessage:"Allow members to use memory"},workspaceMemoryDescription:{id:"workspaceSettings.workspaceMemoryDescription",defaultMessage:"Manage whether members can enable memory. This allows ChatGPT to become more helpful by remembering details and preferences across chats. <link>Learn more</link>"},workspaceAppPairingDescription:{id:"workspaceSettings.workspaceAppPairingDescription",defaultMessage:"Control whether users in this workspace can enable ChatGPT to work with apps. This allows ChatGPT to read the content of specific apps on their desktop to provide better responses. <link>Learn more</link>"},deleteWorkspaceMemoryModalTitle:{id:"workspaceSettings.deleteWorkspaceMemoryModalTitle",defaultMessage:"Are you sure?"},deleteWorkspaceMemoryModalConfirm:{id:"workspaceSettings.deleteWorkspaceMemoryModalConfirm",defaultMessage:"Disable and delete memories"},deleteWorkspaceMemoryModalCancel:{id:"workspaceSettings.deleteWorkspaceMemoryModalCancel",defaultMessage:"Cancel"},deleteWorkspaceMemoryModalInfo:{id:"workspaceSettings.groups.deleteWorkspaceMemoryModalInfo",defaultMessage:"If you disable memory for your workspace, <b>members' existing memories will be forgotten</b>. This can't be undone."},chatSharingTitle:{id:"workspaceSettings.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceDetails:{id:"workspaceSettings.workspaceDetails",defaultMessage:"Workspace details"},workspaceMembersOnlySelect:{id:"workspaceSettings.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},noOneSelect:{id:"workspaceSettings.noOneSelect",defaultMessage:"No one"},featureSettingsUpdateFailed:{id:"workspaceSettings.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettings.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettings.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettings.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettings.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettings.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettings.retentionChange",defaultMessage:"Contact your account manager to change this setting."},enterpriseUpsellPill:{id:"workspaceSettings.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettings.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettings.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},connectionsTitle:{id:"workspaceSettings.connectionsTitle",defaultMessage:"Connections"},contextConnectorsSubtitle:{id:"workspaceSettings.contextConnectorsSubtitle",defaultMessage:"Manage which apps users in this workspace can connect to directly from ChatGPT. For more information, refer to the {helpCenterLink}."},contextConnectorsHelpCenterLink:{id:"workspaceSettings.contextConnectorsHelpCenterLink",defaultMessage:"Help Center"},contextConnectorsGoogleDrive:{id:"workspaceSettings.contextConnectorsGoogleDrive",defaultMessage:"Google Drive"},contextConnectorsO365PersonalTooltip:{id:"workspaceSettings.contextConnectorsO365PersonalTooltip",defaultMessage:"This includes personal OneDrive accounts but not OneDrive for Business or SharePoint accounts."},contextConnectorsO365BusinessTooltip:{id:"workspaceSettings.contextConnectorsO365BusinessTooltip",defaultMessage:"This includes OneDrive for Business and SharePoint accounts but not personal accounts."},searchTitle:{id:"workspaceSettings.searchTitle",defaultMessage:"Web Search"},searchDescription:{id:"workspaceSettings.workspaceGPTsDescription",defaultMessage:"Manage whether ChatGPT and GPTs created in this workspace can browse the internet. When enabled, it may send search queries and general location information to Bing, but this data is not linked to or associated with user accounts. This does not apply to third-party GPTs."},searchTooltip:{id:"workspaceSettings.searchTooltip",defaultMessage:"Web search allows ChatGPT and GPTs to answer questions on recent topics."},searchOptionTitle:{id:"workspaceSettings.searchOptionTitle",defaultMessage:"Web Search"},browseOptionTitle:{id:"workspaceSettings.browseOptionTitle",defaultMessage:"Browsing with Bing"},browseTooltip:{id:"workspaceSettings.browseTooltip",defaultMessage:"Allow ChatGPT and GPTs to browse the internet to answer questions about recent topics and events."}}),Xe=ne(function(){const s=Se();return Me(),e.jsx(Oe,{...s})});export{Xe as default};
//# sourceMappingURL=nwsak5xwfzl81vgs.js.map
