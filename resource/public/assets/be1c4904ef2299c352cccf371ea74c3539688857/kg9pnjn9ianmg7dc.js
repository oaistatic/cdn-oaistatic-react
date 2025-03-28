import{V as He,dA as Qe,S as K,P,a as H,aF as Ze,aG as Xe,bw as te,cp as ue,by as U,c4 as Se,d as V,fR as $e,bS as me,aq as Ie,ci as Te,bG as se,aM as Je,al as es,T as v,Z as ss,R as ge,A as ts,gb as as,C as os,h as rs,j as ls,a3 as Ne,a0 as is,bO as ns,cH as le,bF as ds,F as cs,g as ie,L as ne}from"./cyi7nanrg0vdotzd.js";import{e as he,r as u,j as e,M as l,L as us,a7 as Ee,a5 as Ue,d as xe,b as ms,c as gs,u as fe,k as hs}from"./fs6h2trisr1juto6.js";import{hy as xs,U as fs,$ as ps,bn as Ms,hz as bs,hA as ys,hB as Cs,hC as je,hD as Ss,cc as Ts,hE as js,ft as vs,_ as ws,el as ks,hF as _s,hG as Ps,dL as Hs,hH as Is,hI as Ns,bl as Le,gs as ve,hJ as Es,hK as Us,dw as Ls,hL as As,cb as Bs,c4 as Ds,hM as Rs,hN as Os,g7 as C,hO as Fs,hP as zs,hQ as Ws,hR as Gs}from"./df9u9imhvwerk6zv.js";function qs({onSuccess:t,onError:s}){const o=ms();return gs({mutationFn:({userContext:a})=>ss.createOrUpdateUserSystemMessage(a),onSettled:(a,c)=>{const d=["userContext"];a!==null&&!c?o.setQueryData(d,a):o.invalidateQueries({queryKey:d})},onSuccess:t,onError:s})}function Ks(t){const s=he(),o=He();return fe({queryKey:["userContext"],queryFn:()=>ge.safeGet("/user_system_messages").catch(a=>{throw o.danger(s.formatMessage({id:"userContextModal.getCustomInstructionsError",defaultMessage:"Failed to get your settings"})),a}),enabled:t,select:a=>({aboutUserMessage:a.about_user_message??"",aboutModelMessage:a.about_model_message??"",nameUserMessage:a.name_user_message??"",roleUserMessage:a.role_user_message??"",traitsModelMessage:a.traits_model_message??"",otherUserMessage:a.other_user_message??"",disabledTools:a.disabled_tools??[],enabled:a.enabled??!0})})}function Vs(){return fe({queryKey:["userIsInSearchHoldoutWithWebDisabled"],queryFn:()=>ge.safeGet("/user_is_in_search_holdout_with_web_disabled",{authOption:ts.SendIfAvailable}),select:t=>({userIsInSearchHoldoutWithWebDisabled:t.user_is_in_search_holdout_with_web_disabled??!1})})}const we={aboutUserMessage:void 0,aboutModelMessage:void 0,nameUserMessage:void 0,roleUserMessage:void 0,traitsModelMessage:void 0,otherUserMessage:void 0,disabledTools:void 0,enabled:void 0};function ut({isModalOpen:t}){const s=he(),o=He(),a=xs(),[c,d]=u.useState(!1),{isLoading:n,data:x}=Ks(t),{aboutUserMessage:f="",aboutModelMessage:g="",nameUserMessage:m="",roleUserMessage:h="",traitsModelMessage:y="",otherUserMessage:T="",disabledTools:R=[],enabled:O}=x??{},[F,q]=u.useState(we),{aboutUserMessage:S,aboutModelMessage:j,nameUserMessage:L,roleUserMessage:N,traitsModelMessage:_,otherUserMessage:A,disabledTools:B,enabled:p}=F,w=p??!!O,[z,oe]=u.useState(null),k=r=>{const M=(b,Ve,Ye)=>b!==void 0?b:Ve??Ye;q(b=>({...b,...r,aboutUserMessage:M(r.aboutUserMessage,b.aboutUserMessage,f),aboutModelMessage:M(r.aboutModelMessage,b.aboutModelMessage,g),nameUserMessage:M(r.nameUserMessage,b.nameUserMessage,m),roleUserMessage:M(r.roleUserMessage,b.roleUserMessage,h),traitsModelMessage:M(r.traitsModelMessage,b.traitsModelMessage,y),otherUserMessage:M(r.otherUserMessage,b.otherUserMessage,T),enabled:M(r.enabled,b.enabled,w),disabledTools:M(r.disabledTools,b.disabledTools,R)}))},Y=u.useCallback(()=>{fs.closeModal(ps.UserContext),q(we),oe(null)},[]),De=Ms(),{isPending:Q,mutate:pe}=qs({onSuccess:r=>{const M=as(r,De);M&&os.setCookie(rs.GreetingName,M),Y()},onError:r=>(r.response?.reason==="content_policy"&&r.response?.field?oe(r.response?.field):o.danger(s.formatMessage({id:"userContextModal.saveError",defaultMessage:"Failed to update settings"})),r)}),[Me,be]=u.useState(!1),[Z,Re]=u.useState(!1),[re,Oe]=u.useState([]),X=[S,j,L,N,_,A].some(r=>ae(r??"")),$=[{local:j,server:g},{local:S,server:f},{local:L,server:m},{local:N,server:h},{local:_,server:y},{local:A,server:T}].some(({local:r,server:M})=>r!==void 0&&r!==M)||B!==void 0&&!Qe(B,R)||p!==void 0&&p!==O,J=u.useCallback(()=>{K.logEvent("chatgpt_user_context_cancel_clicked"),P.logEvent(H.userContextCancelClicked),$?be(!0):Y()},[Y,$]),ye=u.useCallback(async()=>{if(!Q){oe(null);const r={aboutUserMessage:S??"",aboutModelMessage:j??"",nameUserMessage:L??"",roleUserMessage:N??"",traitsModelMessage:_??"",otherUserMessage:A??"",disabledTools:B??[],enabled:!!p},M={name:m,role:h,traits:y,other:T},b={name:r.nameUserMessage,role:r.roleUserMessage,traits:r.traitsModelMessage,other:r.otherUserMessage,traitPillsSelected:re};P.logEvent(H.userContextSaveCustomizeChatGPT,{previousState:M,newState:b}),K.logEvent("chatgpt_user_context_save_custom_instructions",void 0,{previousState:JSON.stringify(M),newState:JSON.stringify(b)}),pe({userContext:r})}},[Q,j,S,L,N,_,A,B,p,re,m,h,y,T,pe]),E=u.useCallback(()=>{if(X){const r=ae(S??""),M=ae(j??"");r&&(K.logEvent("chatgpt_user_context_modal__message_past_limit",void 0,{type:"about_user_message",limit:D.toString(),character_length:S?.length.toString()??""}),P.logEvent(H.userContextModelMessagePastLimit,{type:"about_user_message",limit:D.toString(),character_length:S?.length.toString()??""})),M&&(K.logEvent("chatgpt_user_context_modal__message_past_limit",void 0,{type:"about_model_message",limit:D.toString(),character_length:j?.length.toString()??""}),P.logEvent(H.userContextModelMessagePastLimit,{type:"about_model_message",limit:D.toString(),character_length:j?.length.toString()??""})),o.danger(s.formatMessage(i.messageLimitError,{limit:D}),{duration:4,hasCloseButton:!0});return}ye()},[s,X,j,S,ye,o]),{value:Fe}=Ze("809056127"),{layer:ze}=Xe("3206655705"),We=Fe&&ze.get("enable_new_ux",!0),ee=u.useRef(null),[Ce,Ge]=u.useState(0),[qe,Ke]=u.useState(!0);if(u.useEffect(()=>{const r=setTimeout(()=>{Ke(!1)},1e3),M=setInterval(()=>{Ge(b=>(b+1)%ce.length)},5500);return()=>{clearInterval(M),clearTimeout(r)}},[]),u.useEffect(()=>{Z&&ee.current&&ee.current.scrollIntoView({behavior:"smooth",block:"start"})},[Z,ee]),t&&!Me&&We)return e.jsxs(te,{isOpen:t,onClose:J,type:"success",size:"custom",className:"max-w-xl",title:e.jsx(l,{...i.profileTitle}),description:e.jsxs("div",{className:"flex flex-row items-center text-token-text-secondary",children:[e.jsx("div",{className:"mr-1",children:e.jsx(l,{...i.profileSubtitle})}),e.jsx(de,{primaryLabel:e.jsx("div",{className:"text-muted mx-3 mb-2 mt-2 text-sm font-normal",children:e.jsx(l,{...i.profileSubtitleTooltip,values:{link:r=>e.jsx(us,{className:"underline",target:"_blank",rel:"noreferrer",to:i.profileSubtitleTooltip.link??"",children:r})}})}),icon:e.jsx(bs,{className:"h-4 w-4 text-token-text-tertiary"})})]}),children:[n?e.jsx("div",{className:"flex h-14 items-center justify-center",children:e.jsx(ue,{})}):e.jsxs("div",{className:"max-h-[60vh] overflow-y-auto md:max-h-[calc(100vh-300px)]",children:[e.jsx("p",{className:"text-muted py-2 text-sm font-medium",children:e.jsx(l,{...i.customizeName})}),e.jsx(W,{className:"mb-3",onSubmit:E,disabled:!w,hasModError:z==="name_user_message",value:L??m,placeholder:s.formatMessage(i.customizeNamePlaceholder),onChange:r=>k({nameUserMessage:r.target.value}),size:"sm",showCharacterCount:!1}),e.jsx("p",{className:"text-muted py-2 text-sm font-medium text-token-text-primary",children:e.jsx(l,{...i.customizeRole})}),e.jsxs("div",{className:"relative mb-3 overflow-hidden",children:[!(N??h)&&e.jsx(Ee,{mode:"wait",children:e.jsx(Ue.span,{variants:Js,initial:qe?!1:"initial",animate:"animate",exit:"exit",className:"pointer-events-none absolute left-[0.81rem] top-[0.55rem] text-sm text-gray-400",children:s.formatMessage($s[ce[Ce]])},ce[Ce])}),e.jsx(W,{onSubmit:E,disabled:!w,hasModError:z==="role_user_message",value:N??h,placeholder:"",onChange:r=>k({roleUserMessage:r.target.value}),size:"sm",showCharacterCount:!1})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"text-muted mr-1 py-2 text-sm font-medium text-token-text-primary",children:e.jsx(l,{...i.customizeTraits})}),e.jsx(de,{primaryLabel:e.jsx("div",{className:"text-muted mx-3 mb-[6px] mt-3 text-sm font-medium",children:e.jsx(l,{...i.traitsTooltipTitle})}),secondaryLabel:e.jsxs("ul",{className:"text-muted mx-2 mb-3 list-disc justify-start space-y-[6px] pl-5 text-sm text-token-text-primary",children:[e.jsx("li",{children:e.jsx(l,{...i.traitsTooltipBodyItem1})}),e.jsx("li",{children:e.jsx(l,{...i.traitsTooltipBodyItem2})}),e.jsx("li",{children:e.jsx(l,{...i.traitsTooltipBodyItem3})})]})})]}),e.jsx(W,{onSubmit:E,disabled:!w,hasModError:z==="traits_model_message",value:_??y,placeholder:s.formatMessage(i.customizeTraitsPlaceholder),onChange:r=>k({traitsModelMessage:r.target.value}),size:"md",showCharacterCount:!1,isNewCustomInstructionsUIEnabled:!0}),e.jsx("div",{className:"mb-4",children:e.jsx(Qs,{onSelect:r=>{k({traitsModelMessage:`${_??y} ${r}`.trim()})},selectedTraits:re,setSelectedTraits:Oe})}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"text-muted mr-1 py-2 text-sm font-medium text-token-text-primary",children:e.jsx(l,{...i.customizeOther})}),e.jsx(de,{primaryLabel:e.jsx("div",{className:"text-muted mx-3 mb-2 mt-3 text-sm font-medium",children:e.jsx(l,{...i.otherTooltipTitle})}),secondaryLabel:e.jsxs("ul",{className:"text-muted mx-2 mb-3 list-disc justify-start space-y-[6px] pl-5 text-sm text-token-text-primary",children:[e.jsx("li",{children:e.jsx(l,{...i.otherTooltipBodyItem1})}),e.jsx("li",{children:e.jsx(l,{...i.otherTooltipBodyItem2})}),e.jsx("li",{children:e.jsx(l,{...i.otherTooltipBodyItem3})})]})})]}),e.jsx(W,{onSubmit:E,disabled:!w,hasModError:z==="other_user_message",value:A??T,placeholder:s.formatMessage(i.customizeOtherPlaceholder),onChange:r=>k({otherUserMessage:r.target.value}),size:"md",showCharacterCount:!1,isNewCustomInstructionsUIEnabled:!0}),e.jsxs("div",{className:"mt-3 pb-8",ref:ee,children:[e.jsxs("button",{onClick:()=>Re(r=>!r),className:"text-muted flex items-center justify-between py-2 text-sm font-medium text-token-text-primary",children:[e.jsx(l,{...i.advanced}),Z?e.jsx(ys,{className:"ml-1 h-5 w-5"}):e.jsx(Cs,{className:"ml-1 h-5 w-5"})]}),Z&&e.jsx("div",{className:"mt-2",children:e.jsx(_e,{disabledTools:F.disabledTools??R??[],onDisabledToolsChanged:r=>k({disabledTools:r}),isNewCustomInstructionsUIEnabled:!0})})]})]}),e.jsx("div",{className:"-ml-6 -mr-6 border-t",children:e.jsxs("div",{className:"ml-6 mr-6 flex flex-grow flex-col items-stretch justify-between gap-0 pb-1 pt-2 sm:flex-row sm:items-center sm:gap-3",children:[e.jsxs("label",{className:"mt-5 flex cursor-pointer flex-row justify-between gap-2 sm:mt-4",children:[e.jsx(je,{enabled:w,onChange:r=>{k({enabled:r})},label:w?s.formatMessage(i.disableToggleLabel):s.formatMessage(i.enableToggleLabel)}),e.jsx("div",{className:"self-center text-sm text-token-text-primary",children:e.jsx(l,{...i.chatPreferencesEnable})})]}),e.jsx(U.Actions,{secondaryButton:e.jsx(U.Button,{onClick:J,children:e.jsx(l,{...i.cancel})}),primaryButton:e.jsx(U.Button,{loading:Q,onClick:E,color:"primary",visuallyDisabled:X,disabled:!$,children:e.jsx(l,{...i.save})})})]})})]},"user-context");if(t&&a&&!c)return e.jsx(Ss,{onClose:()=>{d(!0)}});if(t&&Me){const r=()=>{be(!1),K.logEvent("chatgpt_user_context_confirm_close_clicked"),P.logEvent(H.userContextConfirmCloseClicked)};return e.jsx(te,{isOpen:!0,onClose:r,type:"success",title:s.formatMessage(i.confirmCloseTitle),primaryButton:e.jsx(U.Button,{title:s.formatMessage(i.confirmCloseOk),color:"danger",onClick:()=>{Y(),r()}}),secondaryButton:e.jsx(U.Button,{title:s.formatMessage(i.confirmCloseCancel),color:"secondary",onClick:r}),children:e.jsx("div",{className:"text-sm",children:e.jsx(l,{...i.confirmCloseBody})})},"confirm-close")}return e.jsxs(te,{isOpen:t,onClose:J,type:"success",size:"custom",className:"max-w-lg xl:max-w-xl",title:e.jsx(l,{...i.profileTitle}),children:[n?e.jsx("div",{className:"flex h-14 items-center justify-center",children:e.jsx(ue,{})}):e.jsxs("div",{className:"max-h-[60vh] overflow-y-auto md:max-h-[calc(100vh-300px)]",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:"text-sm font-semibold",children:e.jsx(l,{...i.customInstructionsTitle})}),e.jsx(Ae,{label:e.jsx(l,{...i.customInstructionsTooltip,values:{article:r=>e.jsx("a",{href:Ts,target:"_blank",className:"underline",rel:"noreferrer",children:r})}})})]}),e.jsx("p",{className:"text-muted pb-3 pt-2 text-sm text-token-text-primary",children:e.jsx(l,{...i.aboutYouHelpText})}),e.jsx(W,{className:"mb-3",onSubmit:E,disabled:!w,tip:e.jsx(ke,{children:e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:e.jsx(l,{...i.aboutUserTip1})}),e.jsx("li",{children:e.jsx(l,{...i.aboutUserTip2})}),e.jsx("li",{children:e.jsx(l,{...i.aboutUserTip3})}),e.jsx("li",{children:e.jsx(l,{...i.aboutUserTip4})}),e.jsx("li",{children:e.jsx(l,{...i.aboutUserTip5})})]})}),hasModError:z==="about_user_message",value:S??f,onChange:r=>k({aboutUserMessage:r.target.value})}),e.jsx("p",{className:"text-muted py-3 text-sm text-token-text-primary",children:e.jsx(l,{...i.modelHelpText})}),e.jsx(W,{onSubmit:E,disabled:!w,tip:e.jsx(ke,{children:e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{children:e.jsx(l,{...i.modelTip1})}),e.jsx("li",{children:e.jsx(l,{...i.modelTip2})}),e.jsx("li",{children:e.jsx(l,{...i.modelTip3})}),e.jsx("li",{children:e.jsx(l,{...i.modelTip4})})]})}),hasModError:z==="about_model_message",value:j??g,onChange:r=>k({aboutModelMessage:r.target.value})}),e.jsx("div",{className:"my-6 h-px bg-token-border-light"}),e.jsx(_e,{disabledTools:F.disabledTools??R??[],onDisabledToolsChanged:r=>k({disabledTools:r})})]}),e.jsx("div",{className:"mt-4 md:mt-5",children:e.jsxs("div",{className:"flex flex-grow flex-col items-stretch justify-between gap-0 sm:flex-row sm:items-center sm:gap-3",children:[e.jsxs("label",{className:"mt-5 flex cursor-pointer flex-row justify-between gap-2 sm:mt-4",children:[e.jsx("div",{className:"self-center text-sm text-token-text-primary",children:e.jsx(l,{...i.chatPreferencesEnable})}),e.jsx(je,{enabled:w,onChange:r=>{k({enabled:r})},label:w?s.formatMessage(i.disableToggleLabel):s.formatMessage(i.enableToggleLabel)})]}),e.jsx(U.Actions,{secondaryButton:e.jsx(U.Button,{onClick:J,children:e.jsx(l,{...i.cancel})}),primaryButton:e.jsx(U.Button,{loading:Q,onClick:E,color:"primary",visuallyDisabled:X,disabled:!$,children:e.jsx(l,{...i.save})})})]})})]},"user-context")}function Ys(){return fe({queryKey:["traitPills"],queryFn:async()=>{try{const t=await ge.safeGet("/user_system_message_trait_pills");return t?Array.isArray(t)?t:[]:[]}catch{return[...Zs.map(s=>({key:s,label:s,description:Pe[s].defaultMessage||""})),...Xs.map(s=>({key:s,label:s,description:Pe[s].defaultMessage||""}))]}},select:t=>{const s=Math.ceil(t.length/2-1);return{firstSet:t.slice(0,s),secondSet:t.slice(s)}}})}const Qs=({onSelect:t,selectedTraits:s,setSelectedTraits:o})=>{const{data:a,isLoading:c}=Ys(),[d,n]=u.useState(!0);if(c)return e.jsx(ue,{});if(!a)return null;const x=d?a.firstSet:a.secondSet,f=m=>{s.includes(m.key)||(o(h=>[...h,m.key]),t(m.description))},g=()=>{o([]),n(m=>!m)};return e.jsx("div",{children:e.jsxs("div",{className:"mt-2 flex flex-wrap gap-x-1 gap-y-2",children:[x.map(m=>!s.includes(m.key)&&e.jsxs(Se,{size:"small",color:"secondary",className:"py-2 pl-2 pr-3 text-xs font-normal text-token-text-secondary",onClick:()=>f(m),children:[e.jsx(js,{className:"mr-[1px] h-4 w-4"}),m.label]},m.key)),e.jsx(Se,{size:"small",color:"secondary",className:"text-token-text-secondary",onClick:g,children:e.jsx(vs,{className:"-mx-1 h-4 w-4"})})]})})},ke=({children:t})=>e.jsx("div",{className:"whitespace-pre-line",children:t}),D=1500,ae=t=>t.length>D,W=({disabled:t,onChange:s,onSubmit:o,placeholder:a,value:c,tip:d,hasModError:n,className:x,size:f="md",showCharacterCount:g=!0,isNewCustomInstructionsUIEnabled:m=!1})=>{const h=he(),y=u.useRef(null),T=ws(),R=ks(),O=!T,[F,q]=u.useState(!1),[S,j]=u.useState(O),L=!O&&F&&!S,N=O&&!S,_=ae(c),A=p=>{p.nativeEvent.isComposing||!t&&p.key==="Enter"&&p.metaKey&&!p.shiftKey&&!p.nativeEvent.isComposing&&(p.preventDefault(),o())},B=u.useRef(null);return e.jsxs(e.Fragment,{children:[d&&e.jsx(te,{isOpen:N,type:"success",size:"custom",className:"max-w-lg",title:h.formatMessage(i.tipsHeader),showCloseButton:!0,onClose:()=>{j(!0)},children:d}),e.jsxs(_s,{open:L,children:[e.jsxs("div",{className:x,ref:B,children:[e.jsx(Ps,{asChild:!0,children:e.jsx("textarea",{ref:y,className:V("w-full resize-none bg-token-main-surface-primary",{"rounded p-4":f!=="sm"&&!m,"rounded-lg border text-sm":f==="sm"||m,"border-orange-400 focus:border-orange-400":n,"border-red-500 focus:border-red-500":_&&!n,"focus-token-border-heavy border-token-border-light":!_&&!n,"opacity-30":t,"placeholder:text-gray-400":f==="sm"||m,"placeholder:text-gray-300":!m}),disabled:t,placeholder:a,onKeyDown:A,rows:f==="sm"?1:T&&!R?6:5,value:c,onChange:s,onBlur:()=>{q(!1)},onFocus:()=>{q(!0)}})}),e.jsx("div",{className:V("flex items-center justify-between px-1 text-xs tabular-nums",_?"text-red-600":"text-token-text-tertiary"),children:n?e.jsx("div",{className:"visible mt-2 text-left text-xs text-orange-400",children:e.jsx(l,{...i.modApiVoilation,values:{policyLink:p=>e.jsx("a",{href:"https://platform.openai.com/docs/usage-policies/content-policy",className:"underline",target:"_blank",rel:"noreferrer",children:p}),feedbackLink:p=>e.jsx("a",{href:"https://forms.gle/3gyAMj5r5rTEcgbs5",className:"underline",target:"_blank",rel:"noreferrer",children:p})}})}):e.jsxs(e.Fragment,{children:[g&&e.jsx("div",{children:`${c.length}/${D}`}),d&&e.jsx("button",{className:"flex items-center gap-1",onClick:()=>{y.current?.focus(),j(!S)},tabIndex:-1,children:e.jsx(Ee,{initial:!1,children:F&&e.jsx(Ue.div,{className:"flex items-center gap-1",initial:{opacity:0},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:S?e.jsxs(e.Fragment,{children:[e.jsx(l,{...i.showTips}),e.jsx(Hs,{className:"icon-xs"})]}):e.jsxs(e.Fragment,{children:[e.jsx(l,{...i.hideTips}),e.jsx($e,{className:"icon-xs"})]})},"show-hide")})})]})})]}),d&&e.jsx(Is,{container:B.current?.ownerDocument.body,children:e.jsx(Ns,{side:"right",align:"start",sideOffset:12,className:"popover relative z-50 max-w-[220px] animate-slideLeftAndFade select-none rounded-xl border border-token-border-light bg-token-main-surface-primary p-4 text-sm text-token-text-primary shadow-[0px_4px_14px_rgba(0,0,0,0.06)] xl:max-w-xs",onOpenAutoFocus:p=>{p.preventDefault()},onCloseAutoFocus:p=>{p.preventDefault()},children:e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("strong",{children:e.jsx(l,{...i.tipsHeader})}),d]})})})]})]})};function de({primaryLabel:t,secondaryLabel:s,side:o="top",icon:a=e.jsx(Le,{className:"h-4 w-4 text-token-text-tertiary"})}){return e.jsx(me,{sideOffset:4,interactive:!0,label:e.jsx("div",{children:t}),secondaryLabel:e.jsx("div",{children:s}),side:o,delayDuration:0,theme:"primary",customPrimaryLabelColorStyle:"primary",customPaddingClassName:"p-2",customBorderClassName:"border border-token-border-light",labelTextAlign:"left",children:a})}function Ae({label:t,side:s="bottom"}){return e.jsx(me,{sideOffset:4,interactive:!0,label:e.jsx("div",{children:t}),side:s,children:e.jsx(Le,{className:"h-4 w-4 text-token-text-tertiary"})})}function _e({disabledTools:t,onDisabledToolsChanged:s,isNewCustomInstructionsUIEnabled:o=!1}){u.useEffect(()=>{P.logEvent(H.userContextGpt4CapabilitiesShown)},[]);const c=Ie()?.isEnterprisey()??!1,d=!Te(se.BrowsingAvailable)&&c,n=h=>{const y=t.includes(h)?t.filter(T=>T!==h):[...t,h];s(y)},x=Je(),{value:f}=es("2044826081"),g=!Te(se.Canvas)&&c;var m;return x?.includes(se.SearchTool)&&!x.includes(se.SearchToolHoldout)?m=e.jsx(G,{title:e.jsx(l,{id:"userContextModal.tools.web",defaultMessage:"Web Search"}),tooltipLabel:d?e.jsx(l,{id:"Osf0vy",defaultMessage:"Web Search is disabled by your organization"}):e.jsx(l,{id:"userContexModal.tools.webSearchTooltip",defaultMessage:"Automatically search the web to get answers"}),tool:v.BROWSER,onClick:n,Icon:ve,checked:!t.includes(v.BROWSER)&&!d,disabled:d,isNewCustomInstructionsUIEnabled:o}):m=e.jsx(G,{title:e.jsx(l,{id:"userContextModal.tools.browse",defaultMessage:"Browsing"}),tooltipLabel:d?e.jsx(l,{id:"5SuA2c",defaultMessage:"Browsing is disabled by your organization"}):e.jsx(l,{id:"userContexModal.tools.browserTooltip",defaultMessage:"Browse the internet to find answers"}),tool:v.BROWSER,onClick:n,Icon:ve,checked:!t.includes(v.BROWSER)&&!d,disabled:d,isNewCustomInstructionsUIEnabled:o}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("div",{className:V("text-sm",{"text-muted font-medium":o,"font-semibold":!o}),children:e.jsx(l,{id:"userContextModal.gpt4CapabilitiesTitle",defaultMessage:"ChatGPT capabilities"})}),e.jsx(Ae,{label:e.jsx(l,{id:"userContextModal.tools.capabilitiesInfo.1",defaultMessage:"Choose which tools can be used with GPT-4"}),side:"top"})]}),e.jsxs("div",{className:"mt-2 flex flex-col flex-wrap gap-3 md:flex-row",children:[m,e.jsx(G,{title:e.jsx(l,{id:"userContextModal.tools.dalle",defaultMessage:"DALL·E"}),tooltipLabel:e.jsx(l,{id:"userContextModal.tools.dalleTooltip",defaultMessage:"Generate images using DALL·E"}),tool:v.DALLE,onClick:n,Icon:Es,checked:!t.includes(v.DALLE),isNewCustomInstructionsUIEnabled:o}),e.jsx(G,{title:e.jsx(l,{id:"userContextModal.tools.codeInterpreter.1",defaultMessage:"Code"}),tooltipLabel:e.jsx(l,{id:"userContextModal.tools.codeInterpreterTooltip",defaultMessage:"Execute code using Code Interpreter"}),tool:v.PYTHON,onClick:n,Icon:Us,checked:!t.includes(v.PYTHON),isNewCustomInstructionsUIEnabled:o}),f&&!g&&e.jsx(G,{title:e.jsx(l,{id:"FW2C7Y",defaultMessage:"Canvas"}),tooltipLabel:e.jsx(l,{id:"dP6U4B",defaultMessage:"Collaborate with ChatGPT on text and code"}),tool:v.CANMORE,onClick:n,Icon:Ls,checked:!t.includes(v.CANMORE),isNewCustomInstructionsUIEnabled:o}),e.jsx(G,{title:e.jsx(l,{id:"yaclI7",defaultMessage:"Advanced Voice"}),tooltipLabel:e.jsx(l,{id:"Pd4tO1",defaultMessage:"More natural conversations in voice mode"}),tool:v.ADVANCED_VOICE,onClick:n,Icon:As,checked:!t.includes(v.ADVANCED_VOICE),isNewCustomInstructionsUIEnabled:o})]})]})}function G({tool:t,title:s,tooltipLabel:o,Icon:a,onClick:c,checked:d,disabled:n,isNewCustomInstructionsUIEnabled:x=!1}){return e.jsx(me,{className:"block",label:o,side:"top",sideOffset:4,children:e.jsxs("button",{className:V("flex w-full items-center justify-between gap-2 whitespace-nowrap rounded border border-token-border-medium p-2",{"cursor-not-allowed text-token-text-quaternary":n}),onClick:()=>c(t),disabled:n,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{className:"h-4 w-4 text-token-text-tertiary"}),e.jsx("div",{className:V("text-sm",x?"text-muted font-medium":"font-semibold"),children:s})]}),e.jsx(Bs,{id:t,checked:d&&!n,disabled:n})]})})}const i=xe({tipsHeader:{id:"userContextModal.tipsHeader",defaultMessage:"Thought starters"},aboutUserTip1:{id:"userContextModal.aboutUserTip1",defaultMessage:"Where are you based?"},aboutUserTip2:{id:"userContextModal.aboutUserTip2",defaultMessage:"What do you do for work?"},aboutUserTip3:{id:"userContextModal.aboutUserTip3",defaultMessage:"What are your hobbies and interests?"},aboutUserTip4:{id:"userContextModal.aboutUserTip4",defaultMessage:"What subjects can you talk about for hours?"},aboutUserTip5:{id:"userContextModal.aboutUserTip5",defaultMessage:"What are some goals you have?"},modelTip1:{id:"userContextModal.modelTip1",defaultMessage:"How formal or casual should ChatGPT be?"},modelTip2:{id:"userContextModal.modelTip2",defaultMessage:"How long or short should responses generally be?"},modelTip3:{id:"userContextModal.modelTip3",defaultMessage:"How do you want to be addressed?"},modelTip4:{id:"userContextModal.modelTip4",defaultMessage:"Should ChatGPT have opinions on topics or remain neutral?"},save:{id:"userContextModal.save",defaultMessage:"Save"},chatPreferencesEnable:{id:"userContextModal.chatPreferencesEnable",defaultMessage:"Enable for new chats"},enableToggleLabel:{id:"userContextModal.enableToggleLabel",defaultMessage:"Enable chat preferences"},disableToggleLabel:{id:"userContextModal.disableToggleLabel",defaultMessage:"Disable chat preferences"},cancel:{id:"userContextModal.cancel",defaultMessage:"Cancel"},aboutYouHelpText:{id:"userContextModal.aboutYouHelpText",defaultMessage:"What would you like ChatGPT to know about you to provide better responses?"},modelHelpText:{id:"userContextModal.modelHelpText",defaultMessage:"How would you like ChatGPT to respond?"},profileTitle:{id:"userContextModal.title.1",defaultMessage:"Customize ChatGPT"},profileSubtitle:{id:"userContextModal.profileSubtitle",defaultMessage:"Introduce yourself to get better, more personalized responses"},profileSubtitleTooltip:{id:"userContextModal.profileSubtitleTooltip",defaultMessage:"ChatGPT will use the information you provide to tailor its responses to you. <link>Learn more</link> about how we use your data.",link:"https://help.openai.com/en/articles/8096356-custom-instructions-for-chatgpt"},customizeName:{id:"userContextModal.customizeName",defaultMessage:"What should ChatGPT call you?"},customizeNamePlaceholder:{id:"userContextModal.customizeNamePlaceholder",defaultMessage:"Name"},customizeRole:{id:"userContextModal.customizeRole",defaultMessage:"What do you do?"},customizeRolePlaceholder:{id:"userContextModal.customizeRolePlaceholder",defaultMessage:"Engineer, student, etc."},customizeTraits:{id:"userContextModal.customizeTraits",defaultMessage:"What traits should ChatGPT have?"},customizeTraitsPlaceholder:{id:"userContextModal.customizeTraitsPlaceholder",defaultMessage:"Describe or select traits"},customizeOther:{id:"userContextModal.customizeOther",defaultMessage:"Anything else ChatGPT should know about you?"},customizeOtherPlaceholder:{id:"userContextModal.customizeOtherPlaceholder",defaultMessage:"Interests, values, or preferences to keep in mind"},customInstructionsTitle:{id:"userContextModal.customInstructionsTitle",defaultMessage:"Custom Instructions"},customInstructionsTooltip:{id:"userContextModal.customInstructionsTooltip",defaultMessage:"<article>Learn more</article> about Custom Instructions and how they're used to help ChatGPT provide better responses."},traitsTooltipTitle:{id:"userContextModal.traitsTooltipTitle",defaultMessage:"You can tell ChatGPT to do things like..."},traitsTooltipBodyItem1:{id:"userContextModal.traitsTooltipBodyItem1",defaultMessage:"Use a formal, professional tone."},traitsTooltipBodyItem2:{id:"userContextModal.traitsTooltipBodyItem2",defaultMessage:"Be casual and chatty."},traitsTooltipBodyItem3:{id:"userContextModal.traitsTooltipBodyItem3",defaultMessage:"Be opinionated. If a question could have multiple answers, try to give only the best one."},otherTooltipTitle:{id:"userContextModal.otherTooltipTitle",defaultMessage:"You can share things like..."},otherTooltipBodyItem1:{id:"userContextModal.otherTooltipBodyItem1",defaultMessage:"I love hiking and jazz."},otherTooltipBodyItem2:{id:"userContextModal.otherTooltipBodyItem2",defaultMessage:"I'm vegetarian."},otherTooltipBodyItem3:{id:"userContextModal.otherTooltipBodyItem3",defaultMessage:"I'm trying to learn French."},messageLimitError:{id:"userContextModal.messageLimitError",defaultMessage:"Please limit your responses to {limit} characters or less."},showTips:{id:"userContextModal.showTips",defaultMessage:"Show tips"},hideTips:{id:"userContextModal.hideTips",defaultMessage:"Hide tips"},confirmCloseTitle:{id:"userContextModal.confirmCloseTitle",defaultMessage:"You have unsaved changes."},confirmCloseBody:{id:"userContextModal.confirmCloseBody",defaultMessage:"Are you sure you want to exit? Any changes you made will be permanently lost."},confirmCloseCancel:{id:"userContextModal.confirmCloseCancel",defaultMessage:"Back"},confirmCloseOk:{id:"userContextModal.confirmCloseOk",defaultMessage:"Exit"},modApiVoilation:{id:"userContextModal.modApiVoilation",defaultMessage:"This content may violate our <policyLink>content policy</policyLink>. If you believe this to be in error, please <feedbackLink>submit your feedback</feedbackLink> — your input will aid our research in this area."},browser:{id:"userContexModal.tools.browserTooltip",defaultMessage:"Browse the internet to find answers"},dalle:{id:"userContexModal.tools.dalleTooltip",defaultMessage:"Generate images using DALL·E"},python:{id:"userContexModal.tools.codeInterpreterTooltip",defaultMessage:"Execute code using Code Interpreter"},advanced:{id:"userContextModal.advanced",defaultMessage:"Advanced"}}),Zs=["Chatty","Witty","Opinionated","StraightShooting","GenZ","Encouraging","Skeptical","ForwardThinking"],Xs=["Poetic","Respectful","Humble","Professional","Corporate","Direct","Silly","Pragmatic","Chill","OutsideTheBox"],Pe=xe({Chatty:{id:"userContextModal.chattySentence",defaultMessage:"Be talkative and conversational."},Witty:{id:"userContextModal.wittySentence",defaultMessage:"Use quick and clever humor when appropriate."},StraightShooting:{id:"userContextModal.straightShootingSentence",defaultMessage:"Tell it like it is; don't sugar-coat responses."},Encouraging:{id:"userContextModal.encouragingSentence",defaultMessage:"Use an encouraging tone."},GenZ:{id:"userContextModal.genZSentence",defaultMessage:"Talk like a member of Gen Z."},Skeptical:{id:"userContextModal.skepticalSentence",defaultMessage:"Adopt a skeptical, questioning approach."},ForwardThinking:{id:"userContextModal.forwardThinkingSentence",defaultMessage:"Take a forward-thinking view."},Poetic:{id:"userContextModal.poeticSentence",defaultMessage:"Use a poetic, lyrical tone."},Opinionated:{id:"userContextModal.opinionatedSentence",defaultMessage:"Readily share strong opinions."},Respectful:{id:"userContextModal.respectfulSentence",defaultMessage:"Always be respectful."},Humble:{id:"userContextModal.humbleSentence",defaultMessage:"Be humble when appropriate."},Professional:{id:"userContextModal.professionalSentence",defaultMessage:"Use a formal, professional tone."},Silly:{id:"userContextModal.sillySentence",defaultMessage:"Be playful and goofy."},Direct:{id:"userContextModal.directSentence",defaultMessage:"Get right to the point."},Pragmatic:{id:"userContextModal.pragmaticSentence",defaultMessage:"Be practical above all."},Corporate:{id:"userContextModal.corporateSentence",defaultMessage:"Respond with corporate jargon."},Chill:{id:"userContextModal.chillSentence",defaultMessage:"Keep it relaxed and easygoing."},OutsideTheBox:{id:"userContextModal.outsideTheBoxSentence",defaultMessage:"Be innovative and think outside the box."}}),$s=xe({engineeringStudent:{id:"userContextModal.rolePlaceholder.engineeringStudent",defaultMessage:"Engineering student at University of Waterloo"},gastroenterologist:{id:"userContextModal.rolePlaceholder.gastroenterologist",defaultMessage:"Gastroenterologist"},sourdoughBaker:{id:"userContextModal.rolePlaceholder.sourdoughBaker",defaultMessage:"Small-batch home sourdough baker"},interiorDesigner:{id:"userContextModal.rolePlaceholder.interiorDesigner",defaultMessage:"Interior designer"},daycareManager:{id:"userContextModal.rolePlaceholder.daycareManager",defaultMessage:"Home daycare manager"},familyLawAttorney:{id:"userContextModal.rolePlaceholder.familyLawAttorney",defaultMessage:"Family law attorney"},excelWizard:{id:"userContextModal.rolePlaceholder.excelWizard",defaultMessage:"Excel wizard"},level10Mage:{id:"userContextModal.rolePlaceholder.level10Mage",defaultMessage:"Level 10 mage"},pharmaSales:{id:"userContextModal.rolePlaceholder.pharmaSales",defaultMessage:"Pharma sales"},freelanceCopywriter:{id:"userContextModal.rolePlaceholder.freelanceCopywriter",defaultMessage:"Freelance copywriter"},weddingPhotographer:{id:"userContextModal.rolePlaceholder.weddingPhotographer",defaultMessage:"Wedding photographer"},catHerder:{id:"userContextModal.rolePlaceholder.catHerder",defaultMessage:"Professional cat herder"},cdlDriver:{id:"userContextModal.rolePlaceholder.cdlDriver",defaultMessage:"CDL driver"},thirdGradeTeacher:{id:"userContextModal.rolePlaceholder.thirdGradeTeacher",defaultMessage:"Third-grade teacher"}}),Js={initial:{opacity:0,y:8},animate:{opacity:1,y:0,transition:{duration:.2}},exit:{opacity:0,y:-8,transition:{duration:.2}}},ce=["engineeringStudent","gastroenterologist","sourdoughBaker","interiorDesigner","daycareManager","familyLawAttorney","excelWizard","level10Mage","pharmaSales","freelanceCopywriter","weddingPhotographer","catHerder","cdlDriver","thirdGradeTeacher"];function et(){const t=Ie(),{isUnauthenticated:s}=ls(),o=Vs();return s||t&&!t.isFree()?{userIsInSearchHoldoutWithWebDisabled:!1}:{userIsInSearchHoldoutWithWebDisabled:o.isLoading?!0:o.data?.userIsInSearchHoldoutWithWebDisabled}}function st(t){const s=Ds(t);let o=Ne(t,g=>g?.mode);const a=Rs(),c=u.useMemo(()=>(a.isSuccess&&a.data?a.data:void 0)??[],[a.data,a.isSuccess]),d=Os({clientThreadId:t}),{userIsInSearchHoldoutWithWebDisabled:n}=et(),x=is(),f=u.useMemo(()=>tt({modelConfig:s,userIsInSearchHoldoutWithWebDisabled:n,isTemporaryChatEnabled:x,conversationMode:o,systemHints:c,modelSwitcherDenials:d}),[c,s,d,o,n,x]);return{systemHints:c,activeSystemHints:f,isLoading:a.isLoading}}function tt({modelConfig:t,userIsInSearchHoldoutWithWebDisabled:s,isTemporaryChatEnabled:o,conversationMode:a,systemHints:c,modelSwitcherDenials:d}){return at({modelConfig:t,systemHints:c,isTemporaryChatEnabled:o}).filter(n=>!(n.systemHint===C.Search&&s||!(n.requiredModels.length===0||n.requiredModels.some(g=>!d[g]))||!(n.requiredConversationModes.length===0||n.requiredConversationModes.some(g=>g===a?.kind))))}function at({modelConfig:t,systemHints:s,isTemporaryChatEnabled:o}){const a=new Set(t?.enabledTools||[]);return s.filter(c=>t?.enabledTools===void 0||c.requiredFeatures.length===0||c.requiredFeatures.every(n=>a.has(n))?c.systemHint==="contextual_answers"&&t?c.requiredModels?.includes(t.id):!(!c.allowInTemporaryChat&&o):!1)}class I extends ns()(({initialHints:s,availableHints:o})=>({persistedSystemHints:new Set(s),persistedSystemHintTriggers:{},availableHints:o})){static getPersistedSystemHints=({persistedSystemHints:s})=>s;static getAvailableSystemHints=({availableHints:s})=>s;addPersistedSystemHint=(s,o,a)=>{s===C.Search&&P.logEventWithStatsig(H.searchModeEngaged,"search_mode_engaged",{...le(o),triggerSource:a}),this.setState(({persistedSystemHints:c,persistedSystemHintTriggers:d})=>({persistedSystemHints:new Set(c).add(s),persistedSystemHintTriggers:{...d,[s]:a}}))};removePersistedSystemHint=(s,o)=>{s===C.Search&&P.logEventWithStatsig(H.searchModeDisabled,"search_mode_disabled",le(o)),this.setState(({persistedSystemHints:a,persistedSystemHintTriggers:c})=>{const d=new Set(a);d.delete(s);const n={...c};return delete n[s],{persistedSystemHints:d,persistedSystemHintTriggers:n}})};getPersistedSystemHintTrigger=s=>{if(this.getState().persistedSystemHints.has(s))return this.getState().persistedSystemHintTriggers[s]};clearPersistedSystemHintTrigger=s=>{this.setState(({persistedSystemHints:o,persistedSystemHintTriggers:a})=>{const c={...a};delete c[s];const d=new Set(o);return d.delete(s),{persistedSystemHints:d,persistedSystemHintTriggers:c}})};clearAllPersistedSystemHintTriggers=()=>{this.setState(()=>({persistedSystemHints:new Set,persistedSystemHintTriggers:{}}))};updatePersistedSystemHint=(s,o,a)=>{s===C.Search&&P.logEventWithStatsig(H.searchModeEngaged,"search_mode_engaged",{...le(o),triggerSource:a}),this.setState(()=>({persistedSystemHints:new Set(s?[s]:[]),persistedSystemHintTriggers:s?{[s]:a}:{}}))}}const mt=()=>I.useState(I.getPersistedSystemHints);function ot(t){const s=[];return t&&s.push(C.Search),s}function gt({children:t,clientThreadId:s}){const[o]=hs(),a=o.get(Fs)===C.Search,{systemHints:c}=st(s),d=zs(),n=Ws(s),x=Gs(n,ds.Search),g=(Ne(s,cs.getLastMessageSystemHints).includes(C.Search)||a)&&x;let m=ot(g);const[h]=u.useState(()=>new I({initialHints:m,availableHints:Object.values(d)}));return u.useEffect(()=>{const y=h.getState().persistedSystemHints;g&&!y.has(C.Search)&&h?.addPersistedSystemHint(C.Search,{clientThreadId:s,turnIndex:0})},[g,h,s]),u.useEffect(()=>{const y=c.filter(T=>T.systemHint!==C.Think&&!T.composerBarButtonInfo?.upsell);h.setState({availableHints:rt(d,y)})},[c,h,d]),e.jsx(I.Provider,{store:h,children:t})}const rt=(t,s)=>{const o=s.filter(a=>!t[a.systemHint]&&a.systemHint!==C.Picture);return[...Object.keys(t).map(a=>s.find(d=>d.systemHint===a||d.systemHint===C.Picture&&a===C.PictureV2)??t[a]),...o]},lt="prompt-textarea",ht=["gpt-4o-jawbone"];function xt(){document.getElementById(lt)?.focus()}const ft={getAndReset:(t,s)=>{const o=ie.getItem(ne.RestoreMessageAfterOauthRedirect);return ie.removeItem(ne.RestoreMessageAfterOauthRedirect),!o||o.userId!==t||s!==o.serverThreadId||Date.now()>o.expiresAt?null:o},set:(t,s,o)=>{const a={userId:t,serverThreadId:s,inputText:o,expiresAt:Date.now()+6e4};ie.setItem(ne.RestoreMessageAfterOauthRedirect,a)}},Be=()=>I.useState(I.getPersistedSystemHints),pt=()=>Be().has(C.Search),Mt=()=>Be().has(C.Research),bt=t=>I.useState(I.getPersistedSystemHints).has(t),yt=()=>{const t=I.useStore(),s=u.useCallback(n=>t.getPersistedSystemHintTrigger(n),[t]),o=u.useCallback(n=>t.clearPersistedSystemHintTrigger(n),[t]),a=u.useCallback(()=>t.clearAllPersistedSystemHintTriggers(),[t]),c=u.useCallback((n,x,f,g)=>{(x?t.addPersistedSystemHint:t.removePersistedSystemHint)(n,f,g)},[t]),d=u.useCallback((n,x,f)=>{t.updatePersistedSystemHint(n,x,f)},[t]);return{getSystemHintModeTrigger:s,clearSystemHintModeTrigger:o,setThreadSystemHintMode:c,clearAllSystemHintModeTriggers:a,updateSystemHint:d}},Ct=(t,s,o,a,c)=>t?"file_upload_pending":a?"async_task_pending":s?o?"text_content_too_long":c?"no_source_selected_dr":void 0:"empty_text_content",it=t=>t.replace(/[\u{E0000}-\u{E007F}]+/gu,""),St=t=>{const s=it(t.getContentToSend().content);return Math.ceil(s.length/4)};function Tt(t,s){return t?s===void 0?!0:s.includes(t):!1}export{gt as P,lt as T,ut as U,yt as a,Be as b,pt as c,I as d,Ks as e,et as f,at as g,st as h,bt as i,St as j,ft as k,Tt as l,Mt as m,ht as n,Ct as o,it as s,xt as t,mt as u};
//# sourceMappingURL=kg9pnjn9ianmg7dc.js.map
