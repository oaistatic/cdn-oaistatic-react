import{r,c as j,j as e,au as k,aw as z,u as ie,M as S}from"./n1tvutderx19k1zs.js";import{U as B,dv as G,S as y,P as b,a as _,bd as re,bY as v,fW as le,B as ce,fa as de,a0 as ue,Q as pe,au as ge,a1 as me,a4 as fe,s as Y,r as R,a6 as he,H as xe,j as ye,ag as K,a2 as be,a3 as _e,dt as we}from"./n26mv7rx7nquqst2.js";import{ce as Se,cf as $,w as V,cg as J,ch as Me,a7 as ve,ci as ke,cj as je,ck as X,cl as Ee,cm as Ce,K as Ne,bE as Te,cn as Pe,co as De,a6 as Ue,cp as Ie,cq as Le,cr as Fe}from"./pceg3mlzf8dzw9ob.js";import{a as qe,c as Ae}from"./kodyf94rms2l778g.js";import{C as Oe}from"./pepzsrzd9jjfvnrs.js";import{u as He}from"./hexva2s1lo90zidg.js";import"./nraolmtygmvq3wcf.js";import"./ecp3vwsjvu9v61q0.js";import"./ism5ltuyfnnx8n4w.js";import"./nxz31zqr36vgy6hm.js";import"./jfxozbrcnsxchwcx.js";import"./da0lloekhn03bypm.js";import"./hg2pcqdl92ment5e.js";import"./gbcm5ghq9ddzv4er.js";import"./h62hagcisi6jaqob.js";function Re(t,o){const{data:a,isLoading:l,isSuccess:u,isError:h}=ie({queryKey:["onboardingSteps",t,o],queryFn:()=>K.createOnboardingSteps(void 0,t,o)});return{steps:a?.steps??[],isLoading:l,isSuccess:u,isError:h}}function E({children:t,className:o}){return e.jsx(k.div,{className:o,initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.25},exit:{opacity:0,y:-10},children:t})}function We({isFirstStep:t,userName:o}){return e.jsx(E,{children:e.jsx("h1",{className:"mb-2 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(S,{...t?i.preparingOnboardingExperience:i.allSetLetMeShowYouAroundWithoutName,values:{name:o,nextLine:a=>e.jsx("span",{className:"block",children:a})}})})})}function Qe({setIsInWelcomePage:t}){const o=$();return r.useEffect(()=>{o&&setTimeout(()=>{t(!1)},2500)},[o,t]),o?e.jsx(E,{children:e.jsx("h1",{className:"mb-2 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(S,{...i.imChaggptNiceToMeetYou})})}):null}function ze(t){const o=J(),a=j(),l=ce(),u=Me(t);let h=ve(t);const m=ke(u,h),s=je(u,h);return r.useCallback(async c=>{const n="text/plain",p=new Blob([c],{type:n}),x=new File([p],"My_File.txt",{type:n});return X.uploadFile(o,Ee(x),x,Ce.Retrieval,s,a,l,void 0,m?.attachments)},[o,a,l,s,m?.attachments])}function dt({clientThreadId:t,setClientThreadId:o}){const[a,l]=r.useState(!0),{isOpen:u,setIsOpen:h,markAsViewed:m}=Se(),[s,c]=r.useState(0),[n,p]=r.useState(new Set(["usage_question"])),[x,M]=r.useState([]),[C,T]=r.useState(),[N,I]=r.useState(!1),{steps:f,isLoading:P,isError:D}=Re(N?x:[],N?C:void 0),Z=$(),L=Ke({clientThreadId:t,setClientThreadId:o}),F=ze(t),{createNewThread:q}=V({clientThreadId:t,setClientThreadId:o}),A=B(t,Y.hasUserMessage),{layer:ee}=G("109457"),te=ee.get("keep_onboarding_after_dismiss",!1),O=j();r.useEffect(()=>{u&&(y.logEvent("chatgpt_onboarding_flow_shown"),b.logEvent(_.onboardingShown))},[u]),r.useEffect(()=>{D&&(m(),y.logEvent("chatgpt_onboarding_flow_error"),b.logEvent(_.onboardingError))},[D,m]),r.useEffect(()=>{if(!(P||!f[s])&&!n.has(f[s].step_type)){p(w=>new Set([...w,f[s].step_type]));const g=f[s].step_prompt;g&&(L({stepPrompt:g}),f[s].step_type==="file_upload"&&f[s].additional_info&&F(f[s].additional_info))}},[s,P,n,L,f,F]);const d=f[s];if(r.useEffect(()=>{const g=d?.step_type;(g==="usage_question"||g==="self_description")&&A&&(q(),p(w=>new Set(Array.from(w).filter(H=>H==="usage_question"||H==="self_description"))))},[d?.step_type,q,A]),r.useEffect(()=>{d?.step_type&&(y.logEvent("chatgpt_onboarding_step_shown",null,{step_type:d?.step_type,step_index:s.toString()}),b.logEvent(_.onboardingStepShown,{step_type:d?.step_type,step_index:s.toString()}))},[s,d?.step_type]),D)return null;const U=g=>{h(!1),s===f.length-1?(y.logEvent("chatgpt_onboarding_flow_finished"),b.logEvent(_.onboardingFinished)):(y.logEvent("chatgpt_onboarding_flow_dismissed",null,{step_type:d?.step_type,step_index:s.toString()}),b.logEvent(_.onboardingDismissed,{step_type:d?.step_type,step_index:s.toString()})),g&&!te&&m()},se=g=>{M(g),f.find(w=>w.step_type==="self_description")||I(!0),c(w=>w+1),y.logEvent("chatgpt_onboarding_usage_question_selected",null,{main_usages:g.join(", ")}),b.logEvent(_.onboardingUsageQuestionSelected,{main_usages:g.join(", ")})},ne=g=>{T(g),I(!0),c(w=>w+1),y.logEvent("chatgpt_onboarding_self_description_entered",null,{main_usages:x.join(", ")}),b.logEvent(_.onboardingSelfDescriptionEntered,{main_usages:x.join(", ")})},ae=()=>{y.logEvent("chatgpt_onboarding_usage_question_skipped",null,{step_type:d?.step_type,step_index:s.toString()}),b.logEvent(_.onboardingUsageQuestionSkipped,{step_type:d?.step_type,step_index:s.toString()}),c(g=>g+1)},oe=()=>{y.logEvent("chatgpt_onboarding_go_back",null,{step_type:d?.step_type,step_index:s.toString()}),b.logEvent(_.onboardingGoBack,{step_type:d?.step_type,step_index:s.toString()}),c(g=>g-1)};return e.jsx(re,{isOpen:u,onClose:()=>U(!1),type:"success",size:"fullscreen",noPadding:!0,className:"w-full",children:e.jsx(qe,{clientThreadId:t,children:e.jsxs("div",{className:"flex h-full max-h-full flex-col bg-token-main-surface-primary",children:[e.jsxs("div",{className:"absolute left-0 top-0 z-10 flex w-full items-center justify-between bg-none px-4",style:{minHeight:"var(--screen-thread-header-min-height,60px)"},children:[f&&f.length>0&&e.jsx("div",{className:"absolute left-0 top-0 h-2 w-full",children:e.jsx(k.div,{className:"h-1.5 bg-token-main-surface-primary-inverse",initial:{width:"0%",opacity:0},animate:{width:`${(s+1)/f.length*100}%`,opacity:1},transition:{duration:.3}})}),s>0?e.jsx(v,{onClick:oe,color:"ghost",className:"border-none",icon:le}):e.jsx("div",{}),d?.step_type==="usage_question"||d?.step_type==="self_description"?e.jsx(v,{onClick:ae,color:"ghost",className:"border-none",children:O.formatMessage(i.skip)}):e.jsx(v,{onClick:()=>U(!0),color:"ghost",className:"border-none",children:O.formatMessage(i.close)})]}),e.jsx("div",{className:"flex flex-1 flex-col items-center justify-center overflow-hidden",children:e.jsx(z,{mode:"wait",children:a?e.jsx(Qe,{setIsInWelcomePage:l},"welcome"):P?e.jsx(We,{isFirstStep:s<1,userName:Z?.name},"loading"):d?.step_type==="usage_question"?e.jsx(Be,{mainUsagesProp:x,onSelectMainUsages:se},"usage-question"):d?.step_type==="self_description"?e.jsx(Ge,{mainUsages:x,selfDescriptionProp:C,onEnterSelfDescription:ne},"self-description"):["dalle","file_upload","canvas","voice","ask_any_question"].includes(d?.step_type)?e.jsx(Ye,{step:d,gotoStep:c,stepIndex:s,totalSteps:f.length,endOnboarding:U,clientThreadId:t},"tools-onboarding"):null})})]})})})}function Be({mainUsagesProp:t,onSelectMainUsages:o}){const[a,l]=r.useState(new Set(t)),[u,h]=r.useState(void 0),m=j(),s=()=>{const n=new Set(a);n.has("other")&&u&&(n.add(u),n.delete("other")),o(Array.from(n))},c=["school","work","personalTasks","funAndEntertainment","other"];return e.jsxs(E,{children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mb-2 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(S,{...i.tellMeWhyHere})}),e.jsx("p",{className:"mb-6 text-base text-token-text-secondary",children:e.jsx(S,{...i.suggestUsefulIdeas})})]}),e.jsxs("div",{className:"flex flex-col items-start justify-start gap-7 pl-2.5",children:[c.map(n=>e.jsx(Ne,{id:`main-usage-${n}`,checked:a.has(n),onChange:p=>l(x=>{const M=new Set(x);return p.target.checked?M.add(n):M.delete(n),M}),label:e.jsx("span",{className:"cursor-pointer",children:m.formatMessage(i[n])}),className:"!rounded-full"},n)),a.has("other")&&e.jsx(Te,{ariaLabel:m.formatMessage(i.tellMeWhyHere),name:"other",placeholder:m.formatMessage(i.tellMeWhyHere),onChange:n=>h(n.target.value),maxLength:100,className:"ml-6 min-w-64 bg-token-main-surface-primary"})]}),e.jsx(v,{size:"medium",color:"primary",onClick:s,className:"mt-10",disabled:a.size===0,children:e.jsx(S,{...i.next})})]})}function Ge({mainUsages:t,selfDescriptionProp:o,onEnterSelfDescription:a}){const[l,u]=r.useState(o),h=j(),m=r.useMemo(()=>t.includes("school")?i.exampleSchoolSelfDescription:t.includes("work")?i.exampleWorkSelfDescription:t.includes("funAndEntertainment")?i.exampleFunAndEntertainmentSelfDescription:i.examplePersonalTasksSelfDescription,[t]),{layer:s}=G("109457"),c=s.get("write_custom_instructions_in_onboarding",!1),n=async()=>{a(l),c&&l&&K.createOrUpdateUserSystemMessage({aboutUserMessage:l,aboutModelMessage:"",disabledTools:[],enabled:!0}).catch(()=>{})};return e.jsxs(E,{className:"flex w-[640px] flex-col items-start",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mb-4 text-3xl font-medium leading-9 text-token-text-primary",children:e.jsx(S,{...i.anythingElseYouWantMeToKnow})}),e.jsx("p",{className:"text-base text-token-text-secondary",children:e.jsx(S,{...c?i.selfDescriptionReasonSaveToCustomInstructions:i.selfDescriptionReason,values:{customInstructions:p=>e.jsx("a",{href:Pe,className:"underline",target:"_blank",rel:"noreferrer",children:p})}})})]}),e.jsx(De,{className:"!dark:bg-white/5 mt-10 rounded border border-token-border-light !bg-black/5 p-5 !text-base placeholder-token-text-tertiary",placeholder:h.formatMessage(m),rows:4,value:l,onChange:p=>u(p.target.value),autoFocus:!0}),e.jsx(v,{size:"medium",color:"primary",onClick:n,className:"mt-10",children:e.jsx(S,{...i.next})})]})}function Ye({step:t,gotoStep:o,stepIndex:a,totalSteps:l,endOnboarding:u,clientThreadId:h}){const m=de({clientThreadId:h}),s=J(),c=j(),n=r.useRef(null),p=a===l-1,x=()=>{a<l-1?(y.logEvent("chatgpt_onboarding_flow_next_clicked",null,{source_step_type:t?.step_type,source_step_index:a.toString()}),b.logEvent(_.onboardingNextClicked,{source_step_type:t?.step_type,source_step_index:a.toString()}),t?.step_type==="file_upload"&&X.reset(s),o(a+1)):u(!0),n.current&&n.current.scrollTo({top:n.current.scrollHeight,behavior:"smooth"})};return e.jsxs(E,{className:"flex h-full w-full flex-row px-8 md:px-12 lg:px-16 xl:px-24",children:[e.jsx("div",{className:"flex flex-1 flex-col items-center justify-center",children:e.jsxs(k.div,{className:"flex w-[90%] flex-1 flex-col items-start justify-center gap-2 md:w-[85%] lg:w-[80%]",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},children:[e.jsxs(z,{mode:"wait",children:[e.jsx(k.h1,{className:"mb-2 text-3xl font-medium text-token-text-primary",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},exit:{opacity:0,y:-10},children:t.title?t.title:W[t.step_type]?c.formatMessage(W[t.step_type]):null},`title-${a}`),e.jsx(k.p,{className:"mb-6 text-base text-token-text-secondary",initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.5},exit:{opacity:0,y:-10},children:t.subtitle?t.subtitle:Q[t.step_type]?c.formatMessage(Q[t.step_type]):null},`subtitle-${a}`)]}),e.jsx(v,{size:"large",color:"primary",onClick:x,disabled:m&&!p,children:e.jsx(S,{...p?i.tryChatGPT:i.next})})]})}),e.jsx("div",{className:"relative flex h-full min-w-[360px] flex-1 flex-col pb-16 pt-16",children:e.jsx("div",{className:"h-full w-full overflow-auto rounded-[30px] bg-token-main-surface-primary shadow-[0_0_50px] shadow-token-border-light",children:e.jsx(Oe,{hideHeader:!0,hideTools:!0,embedded:!0,ref:n})})})]})}const Ke=({clientThreadId:t,setClientThreadId:o})=>{const{data:a}=ue(),{data:l}=pe(),u=B(t,p=>p?.modelId??Fe),h=Ue(a,l),{onThreadCreated:m}=V({clientThreadId:t,setClientThreadId:o}),{onRequestCompletion:s}=Ae({clientThreadId:t,currentModelId:u,defaultModelId:h.id,onThreadCreated:m}),{value:c}=ge("1988730211"),n=He();return r.useCallback(({stepPrompt:p})=>{const x=new Ie;me(t,N=>{be.appendMessage(N,_e(p,void 0,{real_author:we.Onboarding}))});const M=Array.from(n),{systemHints:C,extraStreamParams:T}=c?Le(M):{systemHints:M,extraStreamParams:{}};s({type:fe.Next,promptId:Y.getCurrentLeafId(R(t)),eventMetadata:{eventSource:"mouse"},extraStreamParams:T,cancelActiveRequests:!0,completionMetadata:{conversationMode:he(xe(R(t)?.mode)),isOnboardingConversation:!0,systemHints:C},turnTracker:x})},[t,n,c,s])},i=ye({skip:{defaultMessage:"Skip",id:"chatgpt.new-onboarding.skip"},close:{defaultMessage:"Close",id:"chatgpt.new-onboarding.close"},submit:{defaultMessage:"Submit",id:"chatgpt.new-onboarding.submit"},next:{defaultMessage:"Next",id:"chatgpt.new-onboarding.next"},finish:{defaultMessage:"Finish",id:"chatgpt.new-onboarding.finish"},tellMeWhyHere:{defaultMessage:"Tell me about why you’re here.",id:"chatgpt.new-onboarding.tell-me-why-here"},suggestUsefulIdeas:{defaultMessage:"I’ll use this information to suggest ideas you might find useful.",id:"chatgpt.new-onboarding.suggest-useful-ideas"},school:{defaultMessage:"School",id:"chatgpt.new-onboarding.school"},work:{defaultMessage:"Work",id:"chatgpt.new-onboarding.work"},personalTasks:{defaultMessage:"Personal tasks",id:"chatgpt.new-onboarding.personal-tasks"},funAndEntertainment:{defaultMessage:"Fun and entertainment",id:"chatgpt.new-onboarding.fun-and-entertainment"},other:{defaultMessage:"Other",id:"chatgpt.new-onboarding.other"},imChaggptNiceToMeetYou:{defaultMessage:"👋 Hi, I’m ChatGPT. It’s nice to meet you!",id:"chatgpt.new-onboarding.im-chatgpt-nice-to-meet-you"},preparingOnboardingExperience:{defaultMessage:"Preparing your onboarding experience...",id:"chatgpt.new-onboarding.preparing-onboarding-experience"},oneLastQuestion:{defaultMessage:"One last question:",id:"chatgpt.new-onboarding.one-last-question-2"},anythingElseYouWantMeToKnow:{defaultMessage:"Is there anything else you’d like me to know?",id:"chatgpt.new-onboarding.anything-else-you-want-me-to-know-2"},oneQuestionAnythingElse:{defaultMessage:"One last question: Is there anything else you’d like me to know?",id:"chatgpt.new-onboarding.one-more-question"},selfDescriptionReason:{defaultMessage:"Details like your job, hobbies, or interests make my responses more relevant.",id:"chatgpt.new-onboarding.self-description-reason"},allSetLetMeShowYouAroundWithoutName:{defaultMessage:"All set!<nextLine></nextLine>Now, let me show you around...",id:"chatgpt.new-onboarding.all-set-let-me-show-you-around-without-name"},selfDescriptionReasonSaveToCustomInstructions:{defaultMessage:"Details like your job, hobbies, or interests make my responses more relevant. I’ll save this information as <customInstructions>Custom Instructions</customInstructions>, which you can update any time.",id:"chatgpt.new-onboarding.self-description-reason-save-to-custom-instructions"},exampleSchoolSelfDescription:{defaultMessage:"I'm a college student studying computer science, and I love to play the guitar.",id:"chatgpt.new-onboarding.example-school-self-description"},exampleWorkSelfDescription:{defaultMessage:"I'm a graphic designer based in Berlin, and I enjoy painting and attending art exhibitions.",id:"chatgpt.new-onboarding.example-work-self-description"},examplePersonalTasksSelfDescription:{defaultMessage:"I live in Sydney and love cooking new recipes and planning travel itineraries.",id:"chatgpt.new-onboarding.example-personal-tasks-self-description"},exampleFunAndEntertainmentSelfDescription:{defaultMessage:"I'm a music enthusiast based in Nashville, and I can talk for hours about guitar techniques and songwriting.",id:"chatgpt.new-onboarding.example-fun-and-entertainment-self-description"},tryChatGPT:{defaultMessage:"Try ChatGPT",id:"chatgpt.new-onboarding.try-chatgpt"}}),W={usage_question:i.tellMeWhyHere},Q={usage_question:i.suggestUsefulIdeas};export{We as LoadingState,dt as default};
//# sourceMappingURL=ne74mbjr2ieed7ar.js.map
