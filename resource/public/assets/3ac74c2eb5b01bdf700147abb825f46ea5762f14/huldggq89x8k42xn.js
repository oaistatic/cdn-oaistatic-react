const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/5vwg54fbmeb68vws.js","assets/cg166fqqcxkeiosv.js","assets/j4xe1fdohr6xk09p.js","assets/dze2l9y9kn6nwat0.js","assets/root-fk1yg8gm.css","assets/conversation-small-ga20ijz2.css","assets/bv9w7xogvc55y3c3.js","assets/d3y72ugnrmac5z1v.js","assets/fm63ou1k4lfiij20.js","assets/fzrn137102spawew.js","assets/e9lafxuzyeh4418f.js","assets/jy3dt8r0gwwixm3r.js"])))=>i.map(i=>d[i]);
import{c as N,u as re,r as i,j as e,au as O,M as d,d as ie,aw as V}from"./cg166fqqcxkeiosv.js";import{bh as G,N as $,S as I,P as k,a as F,d as C,gZ as le,bW as oe,h as R,bl as ce,bm as ue,C as de,ad as me,cM as fe,a4 as ge,dT as pe,dt as xe,ap as K,dd as he,H as ye,b3 as z,g_ as je,bk as ve,as as be,at as Me,fT as ke,a5 as Se,bT as L,bj as Q,b_ as we,bS as Te,bB as Ce}from"./dze2l9y9kn6nwat0.js";import{kI as P,kJ as Ne,kK as _e,kL as D,U as Y,H as Pe,kM as Ie,kN as Fe,bB as Ae,gs as Ue,kO as Ee,gp as Le,i as Oe,br as Re,kP as T,bV as X,kQ as Be,kR as B,kS as We,kT as De,kU as qe,kV as q,kW as He,kX as Ve,kY as Ge,B as Z,bD as $e,kZ as Ke,ku as ze,k_ as Qe,km as Ye,kv as Xe,k$ as Ze,l0 as Je,l1 as es}from"./j4xe1fdohr6xk09p.js";import{U as J,h as ss}from"./m4iicmyh3x1nme4j.js";function ts({showFreeTrialLoadingPayment:s,handleGetPaymentLink:t}){const r=N(),a=()=>{s||(P(!0),t())},o=x=>{x.stopPropagation(),Ne(!0),_e(!0)},{data:n,isLoading:f,isSuccess:c}=re({queryKey:["claimedReferralInvite"],queryFn:()=>$.getClaimedReferralInvite(),refetchOnMount:!1,refetchOnWindowFocus:!1,refetchInterval:!1,refetchOnReconnect:!1}),u=n?.invite_code,[g,m]=i.useState(!1);if(i.useEffect(()=>{u&&!g&&c&&(m(!0),I.logEvent("chatgpt_referral_show_claimed_sidebar_menu_promo"),k.logEvent(F.chatgptReferralShowClaimedSidebartMenuPromo))},[u,m,g,c]),!u||f||!c)return null;const l=u.invite_metadata.invite_data,p=l?.referral_trial_duration_months?l?.referral_trial_duration_months>1?r.formatMessage(A.monthsOfBenefit,{referralTrialDurationMonths:l?.referral_trial_duration_months}):r.formatMessage(A.daysOfBenefit,{referralTrialDurationDays:l?.referral_trial_duration_days}):null;return e.jsx(O.div,{className:C("relative",{"cursor-progress opacity-50":s}),layout:"position",initial:{y:-10,opacity:1},animate:{y:0,opacity:1,transition:{duration:.1,ease:"easeIn"}},children:e.jsxs(as,{className:C(s&&"opacity-75"),onClick:a,children:[e.jsxs("div",{className:"flex w-full flex-row items-center justify-start gap-3",children:[e.jsx(le,{className:"icon-sm shrink-0"}),e.jsx(d,{...A.freeTrialCta,values:{duration:p}})]}),!s&&e.jsx(oe,{onClick:o,className:"icon-md shrink-0 rounded-full p-0.5 text-token-text-tertiary opacity-50 transition-colors duration-200 hover:bg-[#0077FF] hover:text-red-500 group-hover:opacity-100"}),e.jsx("span",{className:"absolute top-11 h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0077FF] transition-colors duration-200 group-hover:border-t-[#0077FF]"})]})})}const as=G.a`group relative mb-1 rounded-md hover:[#0077FF] bg-[#0077FF] flex px-3 min-h-[44px] py-1 items-center gap-3 transition-colors duration-200 dark:text-white cursor-pointer text-sm`,A=R({freeTrialCta:{id:"PaymentMenuItems.freeTrialCta",defaultMessage:"Get {duration}!"},monthsOfBenefit:{id:"FreeTrialMenuItem.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {one month free} other {# months free}}"},daysOfBenefit:{id:"FreeTrialMenuItem.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {one day free} other {# days free}}"}}),ns=ce(()=>ue(()=>import("./5vwg54fbmeb68vws.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11])));function rs(){const s=N(),t=de(),r=me(),{isLoading:a,data:o}=fe(),n=ge(o),f=n?.hasPaidSubscription()??!1,c=n?.hasClaimedFreeTrial()??!1,u=i.useMemo(()=>n?.subscriptionAnalyticsParams,[n]),g=pe(),m=async()=>{P(!0),k.logEvent(F.accountPayPaymentCheckoutClicked,u);try{const b=await $.getCheckoutLink(r,"PaymentMenuItems");window.location.href=b.url}catch{t.warning(s.formatMessage(y.paymentErrorWarning),{hasCloseButton:!0}),P(!1)}finally{}},l=()=>{x||(P(!0),m())},p=D(b=>b.didCloseFreeTrial),x=D(b=>b.showFreeTrialLoadingPayment),j=!p&&c,S=n?.wasPaidCustomer()??!1;let h=n?.isWorkspaceAccount()??!1;const v=n?.hasPaidSubscription()??!1,w=n?.isPlus()??!1,_=o&&xe(o),{layer:ee}=K("2670443078");let W=w;!h&&!w&&_&&ee.get("is_gating_fix_enabled",!1)&&(W=_,h=!0);const se=!a&&!h,te=ie(),ae=()=>{k.logEvent(F.accountPayClickSidebarAccountPay,u),Ae(te,"Sidebar account payment menu item")};var ne=n?.isTeam()??!1;return e.jsxs(e.Fragment,{children:[!f&&j&&e.jsx(ts,{showFreeTrialLoadingPayment:x,handleGetPaymentLink:m}),ne?e.jsx(is,{currentWorkspace:n}):null,se&&e.jsx(J,{onClick:j?l:ae,className:C("rounded-lg",g?"":"m-0 px-2"),children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx(ls,{wasPaidCustomer:S,showFreeTrialLoadingPayment:x,hasPlusSubscription:W,hasPaidSubscription:v})})})})]})}const is=({currentWorkspace:s})=>e.jsxs(e.Fragment,{children:[e.jsx(J,{onClick:()=>{Y.openModal(Pe.InviteUsersToWorkspace),k.logEvent(F.accountMemberInviteButton,{location:"payment-menu-click"}),I.logEvent("chatgpt_invite_users_to_workspace",0,{action:"OpenAdminInviteModal",location:"payment-menu-click",text:"AddTeammatesWithInfo",step:"OpenModal"})},className:"m-0 rounded-lg px-2",children:e.jsx("span",{className:"flex w-full flex-row flex-wrap-reverse justify-between",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(Ie,{className:"icon-sm shrink-0"})}),e.jsx("div",{className:"flex flex-col",children:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:e.jsx(d,{...y.addTeammates})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:e.jsx(d,{...y.addTeammatesUpsell})})]})})]})})})}),s!=null?e.jsx(ns,{workspace:s}):null]}),ls=({wasPaidCustomer:s,showFreeTrialLoadingPayment:t,hasPlusSubscription:r,hasPaidSubscription:a})=>t?e.jsx(he,{className:"icon-sm shrink-0"}):a&&!r?null:e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-token-border-light",children:e.jsx(Fe,{className:"icon-sm"})}),e.jsx("div",{className:"flex flex-col",children:s?e.jsx(d,{...y.renewPlus}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:r?e.jsx(d,{...y.viewPlans}):!a&&e.jsx(d,{...y.upgradePlan})}),e.jsx("span",{className:"line-clamp-1 text-xs text-token-text-tertiary",children:r?e.jsx(d,{...y.upgradeToProOrTeamUpsell}):!a&&e.jsx(d,{...y.upgradeToPlusUpsell})})]})})]}),y=R({upgradePlan:{id:"PaymentMenuItems.upgradePlan",defaultMessage:"Upgrade plan"},createATeamWorkspace:{id:"PaymentMenuItems.createATeamWorkspace",defaultMessage:"Add Team workspace"},viewPlans:{id:"PaymentMenuItems.viewPlans",defaultMessage:"View plans"},upgradeToTeamUpsell:{id:"PaymentMenuItems.upgradeToTeamUpsell",defaultMessage:"Collaborate on a Team plan"},upgradeToProOrTeamUpsell:{id:"PaymentMenuItems.upgradeToProOrTeamUpsell",defaultMessage:"Unlimited access, team features, and more"},upgradeToPlusUpsell:{id:"PaymentMenuItems.upgradeToPlusUpsell.0",defaultMessage:"More access to the best models"},renewPlus:{id:"PaymentMenuItems.renewPlus",defaultMessage:"Renew Plus"},inviteReferral:{id:"PaymentMenuItems.inviteReferral",defaultMessage:"Refer a friend"},addTeammates:{id:"PaymentMenuItems.addTeammates.0",defaultMessage:"Add teammates"},addTeammatesUpsell:{id:"PaymentMenuItems.addTeammatesUpsell.0",defaultMessage:"Invite coworkers to ChatGPT"},inviteMembers:{id:"PaymentMenuItems.inviteMembers.0",defaultMessage:"Invite members"},paymentErrorWarning:{id:"PaymentMenuItems.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."}});function Ns({navHeader:s,children:t,className:r}){const a=N(),o=i.useRef(null),n=ye(),{isUnauthenticated:f}=z(),{layer:c}=K("1578749296"),u=c.get("is_sticky_toggle_off",!1);return i.useEffect(()=>{u&&Y.toggleDesktopNavCollapsed()},[u]),e.jsx(e.Fragment,{children:e.jsxs("div",{className:"draggable relative h-full w-full flex-1 items-start border-white/20",children:[e.jsx(je,{asChild:!0,children:e.jsx("h2",{children:e.jsx(d,{...M.chatHistoryLabel})})}),e.jsxs("nav",{className:C("flex h-full w-full flex-col px-3",r),"aria-label":a.formatMessage(M.chatHistoryLabel),children:[s,e.jsx(us,{ref:o,$disableScroll:n&&!f,children:t}),e.jsx(ve,{children:e.jsx(os,{})})]})]})})}function os(){const[s]=i.useState(()=>{const n=be.getCookie(Me.Workspace);return typeof n=="string"&&n!==ke}),t=Se(),r=t?.data==null,{isUnauthenticated:a}=z(),{openSettings:o}=Ue();return s&&r||!t?null:a?e.jsx(cs,{}):e.jsxs("div",{className:C("flex flex-col py-2 empty:hidden dark:border-white/20"),children:[e.jsx(Ee,{}),e.jsx(rs,{}),e.jsx("div",{className:"flex w-full items-center md:hidden",children:e.jsx("div",{className:"max-w-[100%] grow",children:e.jsx(ss,{onClickSettings:()=>o()})})})]})}const cs=()=>{const s=Le(),t=Oe(),r=Re(M.unauthSignupCta),a=()=>{t({authType:"login",callback:c=>{k.logLogInButtonClicked({location:"Sidebar bottom unit",provider:c}),I.logEvent("chatgpt_sidebar_login_button_clicked")}})},o=()=>{t({authType:"signup",callback:c=>{k.logSignUpButtonClicked({location:"Sidebar bottom unit",provider:c}),I.logEvent("chatgpt_sidebar_signup_button_clicked")}})},n=e.jsx(L,{as:"button",size:"medium",color:s?"secondary":"primary","data-testid":"signup-button",onClick:o,children:e.jsx(d,{...r})},"signup-button"),f=e.jsx(L,{as:"button",size:"medium",color:s?"primary":"secondary","data-testid":"login-button",onClick:a,children:e.jsx(d,{...M.unauthLoginCta})},"login-button");return e.jsxs("div",{className:"p-2",children:[e.jsxs("div",{className:"mb-4 mt-2",children:[e.jsx("p",{className:"mb-1 text-sm font-semibold text-token-text-primary",children:e.jsx(d,{...s?M.logInOrSignUp:M.signUpOrLogIn})}),e.jsx("p",{className:"text-sm text-token-text-secondary",children:e.jsx(d,{id:"4qlPtW",defaultMessage:"Get smarter responses, upload files and images, and more."})})]}),e.jsx("div",{className:"flex flex-row items-start gap-2",children:s?[f,n]:[n,f]})]})},us=G.div`flex-col flex-1 transition-opacity duration-500 relative -mr-2 pr-2
  ${({$disableScroll:s})=>s?"overflow-y-hidden opacity-20 pointer-events-none":"overflow-y-auto"}`,M=R({chatHistoryLabel:{id:"NavigationContent.chatHistoryLabel",defaultMessage:"Chat history"},closeSidebar:{id:"NavigationContent.closeSidebar",defaultMessage:"Close sidebar"},signInToChat:{id:"NavigationContent.signInToChat",defaultMessage:"Sign in to ChatGPT"},signUpOrLogIn:{id:"NavigationContent.signUpOrLogIn",defaultMessage:"Sign up or log in"},logInOrSignUp:{id:"NavigationContent.logInOrSignUp",defaultMessage:"Log in or sign up"},unauthSignupCta:{id:"NavigationContent.unauthSignupCta",defaultMessage:"Sign up"},unauthLoginCta:{id:"NavigationContent.unauthLoginCta",defaultMessage:"Log in"}});function ds({children:s}){return e.jsx("div",{className:"h-full w-full bg-token-main-surface-primary px-[22px] py-4",children:s})}function ms(){return e.jsxs("div",{className:"flex w-full gap-2",children:[e.jsx("div",{className:"h-6 w-6",children:e.jsx(T,{className:"h-full w-full !rounded-full"})}),e.jsxs("div",{className:"flex w-full flex-col gap-2",children:[e.jsx(T,{}),e.jsx(T,{}),e.jsx(T,{}),e.jsx(T,{})]})]})}function U({icon:s,message:t,iconClassName:r}){return e.jsx("div",{className:"loading-shimmer-pure-text flex h-8 gap-1 overflow-hidden",children:e.jsx(B,{fillIcon:!1,icon:s,className:r,children:e.jsx("div",{className:"mt-[.5px] flex h-10",children:t})})})}const fs=({finalRow:s})=>{const t=N();return e.jsx(V,{children:e.jsx(O.div,{layout:!0,transition:{type:"spring",stiffness:300,damping:30},className:"flex flex-col items-start justify-start gap-4",children:s.type==="search"?e.jsx(U,{icon:e.jsx(X,{className:"relative h-5 w-5 text-token-text-primary opacity-50"}),message:t.formatMessage({id:"f9wsyE",defaultMessage:"Searching…"})}):s.type==="summary"?e.jsx(U,{icon:e.jsx(Q,{className:"inline-flex h-5 w-5 items-center justify-center opacity-50"}),message:t.formatMessage({id:"bSPYmC",defaultMessage:"Thinking…"})}):e.jsx(U,{icon:e.jsx(Be,{className:"inline-flex h-5 w-5 items-center justify-center opacity-50"}),message:t.formatMessage({id:"8L6BBp",defaultMessage:"Reading…"})})})})},gs=({children:s,showIcon:t})=>e.jsxs("div",{className:"flex items-start gap-2 text-wrap text-start",children:[e.jsx("div",{className:"mt-[1px] inline-flex h-5 w-5 shrink-0 items-center justify-end gap-2.5 pt-[3px]",children:t&&e.jsx(X,{className:"relative h-5 w-5 text-token-text-primary"})}),s]}),ps=({row:s,showIcon:t})=>{const r=s.query;return r?e.jsx(gs,{showIcon:t,children:e.jsx("div",{className:"flex text-base text-token-text-primary",children:r})}):null};function E({children:s}){return e.jsx(O.div,{className:"w-full",initial:{opacity:0},animate:{opacity:1},transition:{duration:1},children:s})}const xs=({previousRow:s,currentRow:t})=>e.jsx("div",{className:"flex flex-col items-start justify-start gap-4",children:t.type==="search"?e.jsx(E,{children:e.jsx(ps,{row:t,showIcon:!s||s.type!=="search"})},`search_${t.id}`):t.type==="summary"?e.jsx(E,{children:e.jsx(We,{row:t,showIcon:!s||s.type!=="summary"})},`summary_${t.id}`):t.type==="websiteOpen"?e.jsx(E,{children:e.jsx(De,{website:t})},`website_${t.id}`):null}),hs=120,ys=1e3*60*2;function H(s){s?.scrollIntoView({block:"center",behavior:"smooth"})}function js({caterpillarStatusMessageTexts:s}){return e.jsx("div",{className:"p-4",children:e.jsx(Z,{type:"error",title:s.failureMessage,content:s.failureBannerContentMessage})})}function vs({caterpillarStatusMessageTexts:s}){return e.jsx("div",{className:"p-4",children:e.jsx(Z,{title:s.cancelledMessage,content:""})})}function bs({interruptPrompt:s,setInterruptPrompt:t,handleInterruptCaterpillar:r}){const a=N();return e.jsxs("div",{className:"flex w-full flex-col justify-center gap-4 p-4",children:[e.jsx($e,{ariaLabel:a.formatMessage({id:"aYWRtV",defaultMessage:"Press enter to interrupt task"}),name:"interrupt-caterpillar-prompt",value:s,onChange:o=>t(o.target.value),color:"search",onPressEnter:r}),e.jsx(L,{onClick:r,children:e.jsx(d,{id:"h73FdF",defaultMessage:"Interrupt task"})})]})}function Ms({sourcesCount:s,taskInfo:t}){const a=Ke(t.originalConversationId).find(n=>n.message.metadata?.b1de6e2_s&&n.message.metadata?.async_task_id===t.taskId)?.message,o=i.useMemo(()=>a?.metadata?.async_task_status_messages?.completed_no_time?e.jsxs(e.Fragment,{children:[a.metadata?.async_task_status_messages?.completed_with_time??a?.metadata?.async_task_status_messages?.completed_no_time,e.jsx(d,{id:"zxfmo/",defaultMessage:" · {sourcesCount} sources",values:{sourcesCount:s}})]}):e.jsx(d,{id:"YG7a0T",defaultMessage:"Completed · {sourcesCount} sources",values:{sourcesCount:s}}),[s,a]);return!t.updatedAt&&!a?.metadata?.async_task_status_messages?.completed?null:e.jsx(B,{icon:e.jsx(Te,{className:"text-token-text-secondary"}),fillIcon:!1,children:e.jsx("div",{className:"text-token-text-tertiary",children:o})})}function ks({taskInfo:s,caterpillarStatusMessageTexts:t,sourcesCount:r,caterpillarHeaderRef:a}){const[o,n]=i.useState(""),[f,c]=i.useState(!1),u=we("caterpillar-interrupts"),g=i.useRef(!1),m=i.useRef(null),l=i.useMemo(()=>(g.current=!!m.current&&qe(m.current,hs),s.rows??[]),[s.rows]);i.useEffect(()=>{if(l.length===0){const h=new Date(s.createdAt).getTime(),v=Date.now()-h,w=ys-v;if(w>0){const _=setTimeout(()=>{c(!0)},w);return()=>clearTimeout(_)}else c(!0)}else c(!1)},[l,s.createdAt]),i.useEffect(()=>{g.current&&H(m.current)},[l]),i.useEffect(()=>{q(s)||setTimeout(()=>{m.current&&H(m.current)},100)},[]);const p=He({taskId:s.taskId,prompt:o}),x=q(s)||Ve(s),j=i.useCallback(async()=>{await p.mutateAsync(),n("")},[p,n]),S=i.useMemo(()=>l.length?x?l:l.slice(0,l.length-1):l,[l,x]);return e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{ref:a},"task-header"),e.jsxs("div",{className:"flex w-full flex-col gap-4",children:[e.jsx("div",{className:"text-base font-medium",children:s.title}),l.length?e.jsxs(V,{initial:!1,children:[S.map((h,v)=>e.jsx(xs,{previousRow:v>0?l[v-1]:null,currentRow:h},h.id)),!x&&e.jsx(fs,{finalRow:l[l.length-1]})]}):f?e.jsx(B,{fillIcon:!1,icon:e.jsx(Q,{className:"inline-flex h-5 w-5 items-center justify-center text-token-text-primary"}),children:t.waitingInQueueMessage}):e.jsx(ms,{}),Ge(s)&&u&&e.jsx(bs,{interruptPrompt:o,setInterruptPrompt:n,handleInterruptCaterpillar:j}),s.status==="failed"?e.jsx(js,{caterpillarStatusMessageTexts:t}):s.status==="cancelled"?e.jsx(vs,{caterpillarStatusMessageTexts:t}):s.status==="completed"?e.jsx(Ms,{caterpillarStatusMessageTexts:t,taskInfo:s,sourcesCount:r}):null]}),e.jsx("div",{ref:m},"task-footer")]})}function _s({taskId:s,setWidth:t=void 0,initialTab:r}){const a=ze(p=>Qe.getTask(s,p)),{closeThreadSidebar:o}=Ce(),[n,f]=i.useState(r),c=Ye(),u=i.useRef(null),g=!1;i.useEffect(()=>{f(r)},[r]),i.useEffect(()=>{},[a?.taskId,a?.status,g]),i.useEffect(()=>{},[a?.taskId,a?.status,n]),i.useEffect(()=>{},[t,a,g]);const{uniqueSources:m,totalSources:l}=i.useMemo(()=>{if(!a?.rows)return{uniqueSources:[],totalSources:0};const p=Xe(a.rows),x=p.reduce((j,S)=>j+S.count,0);return{uniqueSources:p,totalSources:x}},[a?.rows]);return e.jsx(Ze,{handleClose:()=>o({}),leading:e.jsx("div",{className:"flex w-full justify-center",children:e.jsx(Je,{activeTab:n,setActiveTab:f,showAuxTab:g,sourcesCount:l,caterpillarHeaderRef:u})}),children:a&&e.jsxs(ds,{children:[!1,n==="activity"&&e.jsx(ks,{taskInfo:a,caterpillarStatusMessageTexts:c,sourcesCount:l,caterpillarHeaderRef:u}),n==="sources"&&e.jsx(es,{taskInfo:a,sources:m,caterpillarHeaderRef:u})]})})}export{_s as C,Ns as N,rs as P,cs as U};
//# sourceMappingURL=huldggq89x8k42xn.js.map
