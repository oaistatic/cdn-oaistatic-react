const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/nnkfcv1h16s1nvow.js","assets/izh0i1dfnf8ev7x1.js","assets/hggowi1ggrzb09yc.js","assets/root-ko7rpr3h.css","assets/f48p2r4f7qwsem8u.js","assets/ls0o4sypeo1je86t.js","assets/fc2hzad6rtrm7s5f.js","assets/conversation-small-lgvqkxxm.css","assets/blsx6wjjcayih0as.js","assets/do4quzmvohudvw8e.js","assets/otmd3g07vng13akr.js","assets/ddzilicy6qtleo90.js","assets/8nxoaz0vb9p890un.js","assets/in3ze5ugryldzaj2.js","assets/lb1py1igp6jzrtce.js","assets/ab6tyx2xygyb56l3.js","assets/j7xrr4x8o3ssozmz.js","assets/kh1pguo5uwldp8r4.js","assets/paq1bye12yp7s2hg.js","assets/hjbk0a4n40hheieo.js","assets/modzmagtrlhmunl0.js"])))=>i.map(i=>d[i]);
import{j as e,L as J,M,c as T,r as u,av as B,ax as Oe,a as Ee,d as Le}from"./izh0i1dfnf8ev7x1.js";import{fA as Y,bv as ee,bw as se,u as te,ae as _,ck as Me,cc as F,h as ne,dw as Te,d as C,bu as ze,e3 as ae,cj as re,ar as Ae,aH as Fe,dk as Re,a8 as _e,ds as ie,eg as we,aK as De,J as Ge,el as Pe,v as oe,h7 as N,aA as Be,aB as He,fT as Ue,cl as ce}from"./hggowi1ggrzb09yc.js";import{mi as D,o as le,bL as R,gD as We,mj as V,X as Ve,ej as de,ek as ue,jm as Ke,V as Xe,je as qe,gh as Qe,mk as P,ml as me,mm as A,f8 as Ze,mn as $e,mo as Je,lh as Ye,a7 as es,mp as fe,mq as xe,et as y,ab as he,gE as ss,gC as ts,mr as K,en as j,ms as ns,mt as X,mu as as,mv as rs,mw as is,mx as os,my as cs,lT as ls,v as Se,mz as ds,fl as us,U as ge,lS as ms,f9 as fs,mA as xs,aA as hs,az as Ss,mB as gs,mC as G,P as q,u as ps,dl as vs,mD as pe,mE as bs,ai as js,bn as ve,a5 as Is,mF as ys,cy as be,eo as Cs,mG as Ns,dB as ks,hH as Os,bm as je,lR as Es,mH as Ls,N as Ms,mI as Ts,mJ as zs,es as As,mK as Fs,eu as Rs,cX as _s}from"./fc2hzad6rtrm7s5f.js";import{u as H,i as ws}from"./in3ze5ugryldzaj2.js";import{G as Ie}from"./j7xrr4x8o3ssozmz.js";import{H as ye}from"./kh1pguo5uwldp8r4.js";import{U as Ds,P as Gs}from"./hjbk0a4n40hheieo.js";import{i as Ps}from"./ddzilicy6qtleo90.js";import{C as Bs}from"./modzmagtrlhmunl0.js";function Hs({gizmoResource:s,serverThreadId:n,isOnProjectPage:t,conversations:r,hasNextPage:a=!1}){const i=r??[],d=i.findIndex(c=>c.id===n),l=i.slice(0,D);d!=null&&d>=D&&(l[D-1]=i[d]);const m=a||i.length>D,o=Y().activeServerThreadIds;return e.jsxs("div",{className:"flex flex-col screen-arch:gap-0.5",children:[l.map(c=>e.jsx(ye,{className:"ml-7 pl-1",item:c,isActiveInMainWindow:c.id===n,isActive:o.has(c.id)},c.id)),m&&!t&&e.jsx(J,{to:le(s),className:"group ml-7 flex h-9 items-center gap-2.5 rounded-lg pl-3 pr-2 text-sm tracking-condensed text-token-text-primary hover:bg-token-sidebar-surface-secondary",children:e.jsx("span",{className:"text-left",children:e.jsx(M,{...R.seeAllChats})})})]})}const Us=ee(()=>se(()=>import("./nnkfcv1h16s1nvow.js"),__vite__mapDeps([0,1,2,3,4])).then(s=>s.SnorlaxFolderAnimation),{loading:({color:s})=>e.jsx(Ce,{color:s})}),Ws={open:{opacity:1,y:0,transition:{duration:.15,ease:"easeOut"}},closed:{opacity:0,y:-5,transition:{duration:.15,ease:"easeIn"}}};function Vs({color:s,folderState:n,gizmoId:t,sidebarSnorlaxFolderStore:r}){const a=T(),[i,d]=u.useState(!1);return e.jsx(F,{side:"top",sideOffset:4,delayDuration:600,label:n==="open"?a.formatMessage(R.hideChatsForProjectTooltip):a.formatMessage(R.showChatsForProjectTooltip),children:e.jsx("button",{onClick:l=>{l.preventDefault(),n==="open"?r.collapseProject(t):r.expandProject(t)},className:"-m-0.5 flex rounded-xl p-0.5 text-token-text-secondary hover:bg-token-sidebar-surface-tertiary",onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},children:e.jsx("div",{className:"h-6 w-6",children:e.jsx("div",{className:"relative flex h-full items-center justify-center text-token-text-primary",children:e.jsx(Us,{isOpen:n==="open",isHovered:i,color:s})})})})})}function Ce({color:s}){return e.jsx("div",{className:"flex h-6 w-6 shrink-0 items-center justify-center text-token-text-primary",children:e.jsx(We,{className:"h-3/4 w-3/4",style:{color:s}})})}function U({gizmo:s,historyDisabled:n,section:t,onClick:r,isActive:a,hideOverflowMenu:i=!1,elementRef:d}){const{clientThreadId:l}=H(),m=te(l),o=T(),[c,S]=u.useState(!1),[f,h]=u.useState(!1),g=s.gizmo.id,I=V.useStore(),x=V.useState(k=>V.selectFolderState(k,g)),p=_(),b=!!s.gizmo.tags?.includes(Ve.FirstParty),v=de(),E=ue(),{items:z=[],hasNextPage:L}=Ke(s.gizmo.id),O=Xe(g),Q=qe(s),ke=Me();let W=!1;a&&O&&!(x==="open"&&m)&&(W=!0),u.useEffect(()=>{x!=="open"&&a&&m&&I.expandProject(g)},[a,m,I,g]);let w;if(s!=null)w=s.gizmo.display.name||Qe;else{if(p==null)return null;n?w=o.formatMessage(P.clearChat):w=fe}const Z=v!=null&&v.kind==="conversation"&&(v.gizmoId==null||v.gizmoId!=g);return e.jsxs(e.Fragment,{children:[e.jsx(B.div,{onMouseEnter:ke?()=>{h(!0)}:void 0,onMouseLeave:()=>{h(!1)},onDrop:k=>{k.preventDefault(),Z&&(E({newGizmoId:g,conversation:v.conversation,previousGizmoId:v.gizmoId??null}),h(!1))},onDragOver:k=>{k.preventDefault(),Z&&h(!0)},onDragLeave:()=>{h(!1)},children:e.jsx(me,{loggingGizmoId:s?.gizmo.id??"primary",href:le(s),onClick:r,showActiveIndicator:W,isHovered:f,icon:O&&z.length>0?e.jsx(Vs,{color:Q,folderState:x,gizmoId:g,sidebarSnorlaxFolderStore:I}):O?e.jsx(Ce,{color:Q}):e.jsx(Ie,{isFirstParty:b,src:s?.gizmo.display.profile_picture_url,className:"h-6 w-6 shrink-0"}),isMenuOpen:c,label:w,rightIcon:t===A.Workspace&&e.jsx(F,{side:"right",label:o.formatMessage($.workspaceRecommended,{workspace_name:p?.name??"Your Workspace"}),children:e.jsx(Ze,{className:"icon-md text-token-text-secondary",alt:o.formatMessage($.workspaceRecommended,{workspace_name:p?.name??"Your Workspace"})})}),hoverRightIcon:e.jsxs("div",{className:"flex gap-2",children:[(f||c)&&!i&&(O?e.jsx("div",{className:"text-token-text-tertiary",onClick:k=>{k.preventDefault()},children:e.jsx($e,{gizmo:s,isOpen:c,setIsOpen:S})}):e.jsx("div",{className:"text-token-text-tertiary",onClick:k=>{k.preventDefault()},children:e.jsx(Je,{gizmo:s,isOpen:c,setIsOpen:S,section:t})})),!O&&!i&&e.jsx(F,{side:"right",label:o.formatMessage(n?P.clearChat:P.newChat),className:"flex items-center",children:e.jsx("button",{className:c?"text-token-text-tertiary":"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:n?e.jsx(Ye,{className:"icon-md"}):e.jsx(es,{className:"icon-md"})})})]}),elementRef:d})}),e.jsx(Oe,{initial:!1,children:O&&x==="open"&&z.length>0&&e.jsx(B.div,{initial:"closed",animate:"open",exit:"closed",variants:Ws,className:"overflow-hidden",children:e.jsx(Hs,{gizmoResource:s,serverThreadId:m,isOnProjectPage:W,conversations:z,hasNextPage:L})},"nested-conversations")})]})}const $=ne({workspaceRecommended:{id:"gizmo.workspaceRecommended",defaultMessage:"Recommended at {workspace_name}"}});function Ks({currentGizmoId:s,onClick:n}){const{isSidebarFlyoutOpen:t,onSidebarFlyoutOpenChange:r}=xe(),a=t(y.Snorlax);return e.jsx("div",{className:"group flex w-full items-center justify-start",children:e.jsx(Te,{onOpenChange:i=>r(y.Snorlax,i),side:"right",sideOffset:4,open:a,contentAlign:"end",triggerButton:e.jsxs("button",{className:C("flex flex-1 select-none items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm tracking-condensed text-token-text-secondary ease-[var(--spring-bounce)] hover:bg-token-sidebar-surface-secondary focus:ring-0 screen-arch:py-[7px] screen-arch:text-body screen-arch:can-hover:hover:bg-token-main-surface-secondary motion-safe:active:scale-[98%] motion-safe:active:transition-transform",a&&"bg-token-main-surface-secondary"),onClick:n,children:[e.jsx("div",{className:"h-6 w-6",children:e.jsx("div",{className:"relative flex h-full items-center justify-center text-token-text-primary",children:e.jsx(he,{className:"icon-md font-semibold text-token-sidebar-icon"})})}),e.jsx("span",{className:"text-left",children:e.jsx(M,{...R.seeMoreProjectItems})})]}),size:"auto",children:e.jsx("div",{className:"max-h-[50dvh] w-80 overflow-x-auto px-2 [scrollbar-gutter:stable]",children:e.jsx(ze,{children:e.jsx(ss,{currentGizmoId:s,inSidebarFlyout:!0,customListItem:U})})})})})}function Xs({snorlaxes:s,currentGizmoId:n}){return e.jsx(e.Fragment,{children:s.map(t=>e.jsx(U,{gizmo:t.gizmo,isActive:t.gizmo.gizmo.id===n},t.gizmo.gizmo.id))})}function Ne({currentGizmoId:s,includeRevisedSidebarIa:n}){const t=T(),{snorlaxes:r,data:a,isLoading:i,isError:d,refetch:l,hasNextPage:m}=ts(),o=r.slice(0,K),c=u.useRef(!1),[S,f]=u.useState(!0),h=u.useCallback(function(O){O&&f(!1),l()},[l,f]),g=(r??[]).length===0,I=d||a===void 0&&!i&&c.current,p=ae()&&!I&&(a===void 0||i);j.markStart("SnorlaxSidebarList",j.NS_SIDEBAR),p||j.markRendered("SnorlaxSidebarList",j.NS_SIDEBAR),a===void 0&&!i&&!c.current&&(c.current=!0,h(!1));const v=r?.find(L=>L.gizmo.gizmo.id===s),E=o.some(L=>L.gizmo.gizmo.id===s),z=r&&(r?.length>(!s||E?K:K+1)||m);return e.jsxs(e.Fragment,{children:[I&&e.jsx(ns,{showRetry:S,refetch:h}),!I&&e.jsx(X,{id:"snorlax-heading",condensed:n,footer:p&&e.jsx(re,{className:"ml-2 self-center"}),header:e.jsxs(e.Fragment,{children:[t.formatMessage(R.projectsHeading),!g&&e.jsx(as,{})]}),isLastInGroup:!0,ulClassName:"screen-arch:mb-3",children:!i&&e.jsxs(e.Fragment,{children:[e.jsx(Xs,{snorlaxes:o,currentGizmoId:s}),v&&!E&&e.jsx(U,{gizmo:v.gizmo,isActive:!0}),z&&e.jsx(Ks,{currentGizmoId:s}),!i&&g&&e.jsx(rs,{})]})})]})}const It=Object.freeze(Object.defineProperty({__proto__:null,SnorlaxSidebarList:Ne},Symbol.toStringTag,{value:"Module"}));function qs({isNewConversation:s}){const n=is(),{value:t,isLoading:r}=Ae("2113934735");return j.markStart("OperatorSidebarListItem",j.NS_SIDEBAR),!r&&!t?j.cancelRender("OperatorSidebarListItem",j.NS_SIDEBAR):t&&j.markRendered("OperatorSidebarListItem",j.NS_SIDEBAR),e.jsxs(e.Fragment,{children:[e.jsx(Qs,{isNewConversation:s}),t?e.jsx(os,{}):null,n?e.jsx(cs,{}):null]})}const Qs=({isNewConversation:s})=>{const[n,t]=u.useState(!1),r=ae(),a=Ee(),i=Le(),d=T(),l=_();let m;return l==null?null:(m=fe,e.jsx("div",{className:C(r?"":"bg-token-sidebar-surface-primary","pt-0"),children:e.jsx(F,{side:"right",label:d.formatMessage(P.newChat),className:"flex w-full items-center",children:e.jsx(B.div,{className:"flex-1",whileTap:{scale:.98},onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:e.jsx(me,{loggingGizmoId:"primary",href:"/",isHovered:n,onClick:o=>{!Fe(Re(a))&&!s&&(o.preventDefault(),ls(i))},icon:e.jsx(Ie,{isFirstParty:!0,className:"h-6 w-6"}),isMenuOpen:!1,label:m,hoverRightIcon:null})})})}))};function Zs(){const s=T(),n=Se(),t=s.formatMessage({id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"});return e.jsx(ds,{children:e.jsx(B.div,{whileTap:{scale:.98},children:e.jsx(J,{to:us(),onClick:()=>{n.activeSidebar==="popover-nav"&&ge.setActiveSidebar(!1)},children:e.jsx(ms,{icon:fs,"data-testid":"explore-gpts-button",children:t})},"explore")})})}const $s=2;function Js({gizmos:s,maxToShowOnLoad:n=4,showAllSidebarItems:t}){const r=gs(s,f=>f.flair.kind),a=[...(r[G.Workspace]?.map(({resource:f})=>({gizmo:f,section:A.Workspace}))??[]).slice(0,3),...r[G.FirstParty]?.map(({resource:f})=>({gizmo:f,section:A.Keep}))??[],...r[G.SidebarKeep]?.map(({resource:f})=>({gizmo:f,section:A.Keep}))??[]],i=r[G.Recent]??[],l=(t?i:i.slice(0,$s)).map(({resource:f})=>({gizmo:f,section:A.Recents})),m=a.length;let o=[];o=[...a,...l],t||(o.length>n&&m>n?o=o.slice(0,m):o.length>n&&(o=o.slice(0,n)));const S=s.length>o.length;return{listItems:o,itemsLeft:s.length-o.length,needsToCollapseItems:S,total:s.length}}function Ys({gizmo:s,currentGizmoId:n,maxToShowOnLoad:t,hideOverflowMenu:r=!1}){const a=Se(o=>!xs.isGptListCollapsed(o)),{listItems:i,needsToCollapseItems:d,itemsLeft:l}=Js({gizmos:s,maxToShowOnLoad:t,showAllSidebarItems:a});function m(o,c){return e.jsx(U,{gizmo:o,isActive:o.gizmo.id===n,section:c,hideOverflowMenu:r},o.gizmo.id)}return e.jsxs("div",{children:[i.map(({gizmo:o,section:c},S)=>e.jsxs(u.Fragment,{children:[S>1&&c!==i[S-1].section&&e.jsx("div",{className:"my-2 ml-2 h-px w-7 bg-token-border-light"}),m(o,c)]},S)),d?e.jsxs("button",{onClick:ge.toggleGptListCollapsed,className:"flex h-10 w-full items-center gap-2 rounded-lg px-2 text-sm text-token-text-primary hover:bg-token-sidebar-surface-secondary",children:[e.jsx("div",{className:"flex h-6 w-6 flex-shrink-0 items-center justify-center",children:e.jsx(he,{className:"icon-md text-token-text-primary"})}),e.jsx("div",{className:"flex grow items-center gap-1",children:a?e.jsxs(e.Fragment,{children:[e.jsx(M,{id:"GizmoSidebarList.showLess",defaultMessage:"See less"}),e.jsx(hs,{className:"icon-xs"})]}):e.jsxs(e.Fragment,{children:[e.jsx(M,{id:"GizmoSidebarList.showMoreItems",defaultMessage:"{numMore} more",values:{numMore:l}}),e.jsx(Ss,{className:"icon-xs"})]})})]}):null,e.jsx(Zs,{})]})}function yt(s){const{className:n}=s,{useStore:t,actions:r}=q(),{focusedObject:a}=H(),d=!ps()&&!!a,l=t(h=>h.isSidebarOpen)&&!d,m=t(h=>h.mode),o=_e(),c=ie(),S=we(),f=vs();return u.useEffect(()=>{c?r.closeSidebar():r.setSidebarMode(pe.Pinned)},[c,r]),e.jsx(bs,{...s,isSidebarOpen:l,isExtendedInfoOpen:S,isCanvasOpen:f,sidebarMode:m,className:C(n,o?"screen-loaded":"")})}function et(s){const{clientThreadId:n}=H(),t=u.useRef(s);t.current=s;const r=u.useRef(null);u.useEffect(()=>{const a=r.current;return r.current=n,()=>{n!==a&&t.current?.(n,a)}},[n])}function st({currentGizmoId:s}){const{data:{gizmos:n}={}}=js();let t=n;return ve()&&(t=n?.filter(a=>!Is(a.resource))),e.jsx(e.Fragment,{children:e.jsxs(X,{id:"gizmos-heading",header:e.jsx("div",{className:"sticky top-[--sidebar-sticky-threshold] z-20",children:e.jsx(M,{id:"ZT2HVu",defaultMessage:"GPTs"})}),hideHeader:!0,isLastInGroup:!1,children:[e.jsx(qs,{isNewConversation:!0}),e.jsx(Ys,{gizmo:t??[],currentGizmoId:s,maxToShowOnLoad:ys})]})})}const tt=5;function nt({clientThreadId:s}){const n=ue(),t=de(),[r,a]=u.useState(!1),i=u.useRef(!1),{conversations:d,data:l,isLoading:m,isError:o,refetch:c}=be({recentConversationLimit:tt}),[S,f]=u.useState(!0),h=u.useCallback(function(v){v===void 0&&f(!1),c({cancelRefetch:!0})},[c,f]),g=o||l===void 0&&!m&&i.current;l===void 0&&!m&&!i.current&&(i.current=!0,h(!0)),u.useMemo(()=>{De.publish({kind:"refreshHistory",conversations:d})},[d]);const x=t!=null&&t.kind==="conversation"&&t.gizmoId!=null&&Cs(t.gizmoId),p=u.useRef(0);return e.jsxs("div",{onDragOver:b=>{b.preventDefault(),x&&a(!0)},onDrop:b=>{b.preventDefault(),x&&(p.current=0,a(!1),n({newGizmoId:null,conversation:t.conversation,previousGizmoId:t.gizmoId??null}))},onDragEnter:b=>{b.preventDefault(),x&&(p.current+=1)},onDragLeave:b=>{b.preventDefault(),x&&(p.current-=1,p.current===0&&a(!1))},className:C(r&&"opacity-50"),children:[g&&e.jsx(Ns,{showRetry:S,refetch:h}),e.jsx(at,{clientThreadId:s})]})}function at({clientThreadId:s}){const n=_(),{conversations:t,buckets:r,isLoading:a,hasNextPage:i,fetchNextPage:d,isFetchingNextPage:l}=be({buckets:!0,recentConversationLimit:1}),m=a||l,o=t.length===0,c=Ge(),S=te(s),f=Y().activeServerThreadIds,h=c?void 0:S,g=u.useRef(null),I=u.useCallback(p=>{a||p==null||(g.current?.disconnect(),g.current=new IntersectionObserver(b=>{b[0].isIntersecting&&i&&d()},{rootMargin:"0px 0px 350px 0px",threshold:.1}),g.current.observe(p))},[a,i,d]);u.useEffect(()=>()=>{g.current?.disconnect()},[]);const x=e.jsx(re,{className:"mt-2 self-center justify-self-center will-change-transform"});return j.markStart("ChatHistory"),m||j.markRendered("ChatHistory"),o?n==null?null:e.jsx("div",{className:"flex justify-center",children:x}):e.jsxs(e.Fragment,{children:[r.map((p,b)=>e.jsx(X,{id:`section-${p.key}`,footer:m&&b===r.length-1&&x,header:p.label,condensed:!0,children:p.items.map((v,E)=>e.jsx(ye,{item:v,isActiveInMainWindow:v.id===h,isActive:f.has(v.id),testId:`history-item-${E}`},v.id))},p.key)),!o&&i&&!l&&e.jsx("div",{className:"h-1","data-testid":"infinite-scroll-trigger",ref:I})]})}function rt({clientThreadId:s}){_();const n=Pe(s),{isUnauthenticated:t}=oe(),r=ve(),a=!1;if(t)return null;const i=r&&e.jsx(Ne,{includeRevisedSidebarIa:!0,currentGizmoId:n}),d=a,l=e.jsx(nt,{clientThreadId:s}),m=e.jsx(st,{currentGizmoId:n});return e.jsxs("div",{className:C(N.screenContent,"group/sidebar"),children:[m,i,d,null,l]})}function it(){const s=_(),n=s?.data==null,{isUnauthenticated:t}=oe(),{openSettings:r}=ks(),[a]=u.useState(()=>{const l=Be.getCookie(He.Workspace);return typeof l=="string"&&l!==Ue}),[i,d]=u.useState(!0);return u.useEffect(()=>{d(!1)},[]),!s&&i||a&&n?null:t?e.jsx(Ds,{}):e.jsx(ws,{onClickSettings:()=>r()})}function ot(){return e.jsx(Os,{className:C(N.screenTrailingBarContainer),children:e.jsxs(je,{name:"sidebar-footer-bar",className:"relative z-10 mb-[0.5px] grid-cols-[minmax(0,_1fr)] px-sidebar-inline pb-1.5 pt-2.5",type:"secondary",disableSizeTracking:!0,trailing:!0,style:{"--bar-gap":"6px"},children:[e.jsx(Es,{}),e.jsx(Gs,{}),e.jsx(it,{})]})})}function ct(){return(Ps()?"⌘":"Ctrl")+" K"}function lt({children:s,sideOffset:n,className:t}){return j.markStart("FannyPackSearchTooltip",j.NS_SIDEBAR),j.markRendered("FannyPackSearchTooltip",j.NS_SIDEBAR),e.jsx(F,{sideOffset:n,className:t,label:e.jsxs("div",{children:[e.jsx(M,{id:"jmd8WH",defaultMessage:"Search chats"}),e.jsx("div",{className:"text-sm font-normal text-token-text-secondary",children:ct()})]}),children:s})}const dt=ee(()=>se(()=>import("./ls0o4sypeo1je86t.js"),__vite__mapDeps([5,1,6,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19,20])).then(s=>s.FannyPackIconButton));function ut({onNewThread:s}){const n=T(),t=u.useRef(null),r=ie(),{useStore:a,actions:i}=q(),d=a(I=>I.isSidebarOpen),{isSidebarFlyoutOpen:l}=xe(),m=l(y.Conversation),o=l(y.Gizmo),c=l(y.Snorlax),S=d&&!m&&!o&&!c,f=ce();function h(){f&&i.closeSidebar()}Ls({checkElement:I=>I?.tagName==="NAV",enabled:S,onLightDismiss:h});const{isFannyPackEnabled:g}=Ms();return e.jsxs(e.Fragment,{children:[e.jsx(je,{type:"primary",className:C(N.screenHeader),name:"sidebar-header",children:e.jsxs("div",{className:"flex min-h-[var(--screen-thread-header-min-height,60px)] w-full flex-1 items-center justify-between px-[var(--sidebar-inline-padding)]",ref:t,children:[e.jsx("div",{className:"grid items-center gap-1",children:e.jsx(Ts,{className:C(N.closeSidebarAction),style:{viewTransitionName:"var(--vt_toggle_sidebar_opened)"},onClick:()=>{i.closeSidebar()},onEnterPress:()=>{i.closeSidebar()},icon:e.jsxs(e.Fragment,{children:[e.jsx(zs,{className:C(N.sidebarIcon,"hidden @lg/screen-composer:inline-flex")}),e.jsx(As,{className:C(N.sidebarIcon,"@xs/screen-composer:inline-flex @lg/screen-composer:hidden")})]}),label:n.formatMessage(mt.closeSidebar),tooltipSideOffset:4})}),e.jsxs("div",{className:"flex items-center",children:[g&&e.jsx(lt,{children:e.jsx(dt,{className:N.searchAction,icon:e.jsx(Fs,{className:N.sidebarIcon}),style:{viewTransitionName:"var(--vt_search_sidebar)"}})}),!r&&e.jsx(Bs,{location:"sidebar",onNewThread:s})]})]})}),e.jsx("div",{className:C(N.leadingBar,N.leadingBarScrollAnimation,"pointer-events-none absolute inset-0 h-full"),children:" "})]})}const mt=ne({closeSidebar:{id:"fM0vj3",defaultMessage:"Close Sidebar"}});function Ct(){const{clientThreadId:s,onNewThread:n}=H(),[t,r]=u.useState(!1),[a,i]=u.useState(!1),[d,l]=u.useState(!1),{actions:m,useStore:o}=q(),c=o(x=>x.isSidebarOpen),S=o(x=>x.mode),f=u.useCallback(x=>x===y.Conversation?t:x===y.Gizmo?a:x===y.Snorlax?d:!1,[t,a,d]),h=u.useCallback((x,p)=>{const b=v=>{x===y.Conversation?r(v):x===y.Gizmo?i(v):x===y.Snorlax&&l(v)};p?b(!0):setTimeout(()=>{b(!1)},100)},[]),g=u.useRef(null),I=ce();return et(()=>{h(y.Conversation,!1),h(y.Gizmo,!1),h(y.Snorlax,!1),c&&(S===pe.Floating||I)&&setTimeout(()=>{m.closeSidebar()},100)}),c&&j.trackNamespace(j.NS_SIDEBAR),e.jsx(Rs,{value:{isSidebarFlyoutOpen:f,onSidebarFlyoutOpenChange:h},children:e.jsx(_s,{anchor:"vertical",className:C(N.screen,"popover sidebar flex-1 border-r border-r-token-border-xlight"),name:"sidebar",leading:e.jsx(ut,{onNewThread:n}),ref:g,trackLeading:!0,trailing:e.jsx(ot,{}),children:e.jsx(rt,{clientThreadId:s})})})}export{yt as C,qs as D,lt as F,Ys as G,Ne as S,Ct as a,It as b,ct as g};
//# sourceMappingURL=ojcgwgwujkn9jneg.js.map
