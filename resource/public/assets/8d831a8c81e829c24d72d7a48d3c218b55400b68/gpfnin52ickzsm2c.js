const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/lmnh4n21agje5h68.js","assets/n1tvutderx19k1zs.js","assets/efuue3ezs0mj4ucx.js","assets/root-gmm606mb.css","assets/k3ypx8jv7ihbuh7q.js","assets/bbyd5rf1qtkbvnmn.js","assets/c87uv1mutc86tiqk.js","assets/conversation-small-nranh1cg.css","assets/l8ccescf6p1hqg9v.js","assets/buq87gfosbdjwr5p.js","assets/hxtdf4wzyaqocms2.js","assets/bzaypvhehxbw5ucz.js","assets/d995zjnlydagrugw.js","assets/jy24clh9s5sbm6a3.js","assets/bh0nczk7jf5nipy7.js","assets/ishe91rr928a0b40.js","assets/nvkogakwzn6oww8b.js","assets/ibswgel9g2v9wlet.js","assets/oq09nie6yqvskddc.js","assets/npeqg3baimzobwf1.js"])))=>i.map(i=>d[i]);
import{j as e,L as X,M,c as T,r as d,au as B,aw as Ee,a as Me,e as Te}from"./n1tvutderx19k1zs.js";import{fG as J,bs as ee,bt as se,er as te,a7 as A,bJ as R,j as ne,dq as _e,d as C,br as ze,d$ as ae,dm as re,au as Re,aI as Fe,dc as Ae,gy as we,dk as ie,eb as Pe,aL as Ge,av as De,ah as Be,bg as He,b9 as oe,ha as k,U as Ue,V as We,g0 as Ve,c6 as ce}from"./efuue3ezs0mj4ucx.js";import{lW as G,m as le,bT as F,hH as Ke,lX as K,cA as $e,eI as de,eJ as ue,jj as Qe,e0 as Ye,jb as Ze,go as qe,lY as z,lZ as me,dR as he,l_ as _,fr as Xe,l$ as Je,m0 as es,dO as ss,ab as fe,m1 as xe,m2 as ge,eR as y,ah as Se,hI as ts,hG as ns,m3 as $,eO as v,eM as pe,eN as be,m4 as as,m5 as Q,m6 as rs,m7 as is,m8 as os,m9 as cs,ma as ls,gi as ds,A as ve,mb as us,fE as ms,U as je,gh as hs,fs,mc as xs,aG as gs,aF as Ss,md as ps,me as D,P as Y,u as bs,dn as vs,mf as Ie,mg as js,ao as Is,c$ as ye,a9 as ys,mh as Cs,cB as Ce,dT as Ns,mi as ks,gg as Os,hd as Ls,bs as Ne,kh as Es,mj as Ms,N as Ts,mk as _s,ml as zs,eQ as Rs,mm as Fs,eS as As,cY as ws}from"./c87uv1mutc86tiqk.js";import{u as H,i as Ps}from"./jy24clh9s5sbm6a3.js";import{H as ke}from"./nvkogakwzn6oww8b.js";import{U as Gs,P as Ds}from"./oq09nie6yqvskddc.js";import{i as Bs}from"./bzaypvhehxbw5ucz.js";import{C as Hs}from"./npeqg3baimzobwf1.js";function Us({gizmoResource:s,serverThreadId:n,isOnProjectPage:t,conversations:r,hasNextPage:a=!1}){const i=r??[],o=i.findIndex(c=>c.id===n),u=i.slice(0,G);o!=null&&o>=G&&(u[G-1]=i[o]);const m=a||i.length>G,l=J().activeServerThreadIds;return e.jsxs("div",{className:"flex flex-col screen-arch:gap-0.5",children:[u.map(c=>e.jsx(ke,{className:"ml-7 pl-1",item:c,isActiveInMainWindow:c.id===n,isActive:l.has(c.id)},c.id)),m&&!t&&e.jsx(X,{to:le(s),className:"group ml-7 flex h-9 items-center gap-2.5 rounded-lg pl-3 pr-2 text-sm tracking-condensed text-token-text-primary hover:bg-token-sidebar-surface-secondary",children:e.jsx("span",{className:"text-left",children:e.jsx(M,{...F.seeAllChats})})})]})}const Ws=ee(()=>se(()=>import("./lmnh4n21agje5h68.js"),__vite__mapDeps([0,1,2,3,4])).then(s=>s.SnorlaxFolderAnimation),{loading:({color:s})=>e.jsx(Oe,{color:s})}),Vs={open:{opacity:1,y:0,transition:{duration:.15,ease:"easeOut"}},closed:{opacity:0,y:-5,transition:{duration:.15,ease:"easeIn"}}};function Ks({color:s,folderState:n,gizmoId:t,sidebarSnorlaxFolderStore:r}){const a=T(),[i,o]=d.useState(!1);return e.jsx(R,{side:"top",sideOffset:4,delayDuration:600,label:n==="open"?a.formatMessage(F.hideChatsForProjectTooltip):a.formatMessage(F.showChatsForProjectTooltip),children:e.jsx("button",{onClick:u=>{u.preventDefault(),n==="open"?r.collapseProject(t):r.expandProject(t)},className:"-m-0.5 flex rounded-xl p-0.5 text-token-text-secondary hover:bg-token-sidebar-surface-tertiary",onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{o(!1)},children:e.jsx("div",{className:"h-6 w-6",children:e.jsx("div",{className:"relative flex h-full items-center justify-center text-token-text-primary",children:e.jsx(Ws,{isOpen:n==="open",isHovered:i,color:s})})})})})}function Oe({color:s}){return e.jsx("div",{className:"flex h-6 w-6 shrink-0 items-center justify-center text-token-text-primary",children:e.jsx(Ke,{className:"h-3/4 w-3/4",style:{color:s}})})}function U({gizmo:s,historyDisabled:n,section:t,onClick:r,isActive:a,hideOverflowMenu:i=!1,elementRef:o}){const{clientThreadId:u}=H(),m=te(u),l=T(),[c,S]=d.useState(!1),[h,x]=d.useState(!1),p=s.gizmo.id,b=K.useStore(),f=K.useState(L=>K.selectFolderState(L,p)),I=A(),g=!!s.gizmo.tags?.includes($e.FirstParty),j=de(),O=ue(),{items:E=[],hasNextPage:W}=Qe(s.gizmo.id),N=Ye(p),w=Ze(s);let V=!1;a&&N&&!(f==="open"&&m)&&(V=!0),d.useEffect(()=>{f!=="open"&&a&&m&&b.expandProject(p)},[a,m,b,p]);let P;if(s!=null)P=s.gizmo.display.name||qe;else{if(I==null)return null;n?P=l.formatMessage(z.clearChat):P=xe}const Z=j!=null&&j.kind==="conversation"&&(j.gizmoId==null||j.gizmoId!=p);return e.jsxs(e.Fragment,{children:[e.jsx(B.div,{onMouseEnter:()=>{x(!0)},onMouseLeave:()=>{x(!1)},onDrop:L=>{L.preventDefault(),Z&&(O({newGizmoId:p,conversation:j.conversation,previousGizmoId:j.gizmoId??null}),x(!1))},onDragOver:L=>{L.preventDefault(),Z&&x(!0)},onDragLeave:()=>{x(!1)},children:e.jsx(me,{loggingGizmoId:s?.gizmo.id??"primary",href:le(s),onClick:r,showActiveIndicator:V,isHovered:h,icon:N&&E.length>0?e.jsx(Ks,{color:w,folderState:f,gizmoId:p,sidebarSnorlaxFolderStore:b}):N?e.jsx(Oe,{color:w}):e.jsx(he,{isFirstParty:g,src:s?.gizmo.display.profile_picture_url,className:"h-6 w-6 shrink-0"}),isMenuOpen:c,label:P,rightIcon:t===_.Workspace&&e.jsx(R,{side:"right",label:l.formatMessage(q.workspaceRecommended,{workspace_name:I?.name??"Your Workspace"}),children:e.jsx(Xe,{className:"icon-md text-token-text-secondary",alt:l.formatMessage(q.workspaceRecommended,{workspace_name:I?.name??"Your Workspace"})})}),hoverRightIcon:e.jsxs("div",{className:"flex gap-2",children:[(h||c)&&!i&&(N?e.jsx("div",{className:"text-token-text-tertiary",onClick:L=>{L.preventDefault()},children:e.jsx(Je,{gizmo:s,isOpen:c,setIsOpen:S})}):e.jsx("div",{className:"text-token-text-tertiary",onClick:L=>{L.preventDefault()},children:e.jsx(es,{gizmo:s,isOpen:c,setIsOpen:S,section:t})})),!N&&!i&&e.jsx(R,{side:"right",label:l.formatMessage(n?z.clearChat:z.newChat),className:"flex items-center",children:e.jsx("button",{className:c?"text-token-text-tertiary":"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:n?e.jsx(ss,{className:"icon-md"}):e.jsx(fe,{className:"icon-md"})})})]}),elementRef:o})}),e.jsx(Ee,{initial:!1,children:N&&f==="open"&&E.length>0&&e.jsx(B.div,{initial:"closed",animate:"open",exit:"closed",variants:Vs,className:"overflow-hidden",children:e.jsx(Us,{gizmoResource:s,serverThreadId:m,isOnProjectPage:V,conversations:E,hasNextPage:W})},"nested-conversations")})]})}const q=ne({workspaceRecommended:{id:"gizmo.workspaceRecommended",defaultMessage:"Recommended at {workspace_name}"}});function $s({currentGizmoId:s,onClick:n}){const{isSidebarFlyoutOpen:t,onSidebarFlyoutOpenChange:r}=ge(),a=t(y.Snorlax);return e.jsx("div",{className:"group flex w-full items-center justify-start",children:e.jsx(_e,{onOpenChange:i=>r(y.Snorlax,i),side:"right",sideOffset:4,open:a,contentAlign:"end",triggerButton:e.jsxs("button",{className:C("flex flex-1 select-none items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm tracking-condensed text-token-text-secondary ease-[var(--spring-bounce)] hover:bg-token-sidebar-surface-secondary focus:ring-0 screen-arch:py-[7px] screen-arch:text-body screen-arch:can-hover:hover:bg-token-main-surface-secondary motion-safe:active:scale-[98%] motion-safe:active:transition-transform",a&&"bg-token-main-surface-secondary"),onClick:n,children:[e.jsx("div",{className:"h-6 w-6",children:e.jsx("div",{className:"relative flex h-full items-center justify-center text-token-text-primary",children:e.jsx(Se,{className:"icon-md font-semibold text-token-sidebar-icon"})})}),e.jsx("span",{className:"text-left",children:e.jsx(M,{...F.seeMoreProjectItems})})]}),size:"auto",children:e.jsx("div",{className:"max-h-[50dvh] w-80 overflow-x-auto px-2 [scrollbar-gutter:stable]",children:e.jsx(ze,{children:e.jsx(ts,{currentGizmoId:s,inSidebarFlyout:!0,customListItem:U})})})})})}function Qs({snorlaxes:s,currentGizmoId:n}){return e.jsx(e.Fragment,{children:s.map(t=>e.jsx(U,{gizmo:t.gizmo,isActive:t.gizmo.gizmo.id===n},t.gizmo.gizmo.id))})}function Le({currentGizmoId:s,includeRevisedSidebarIa:n}){const t=T(),r=d.useRef(!1),{snorlaxes:a,data:i,isLoading:o,isError:u,refetch:m,hasNextPage:l}=ns(),c=a.slice(0,$),S=d.useRef(!1),[h,x]=d.useState(!0),p=d.useCallback(function(w){w&&x(!1),m()},[m,x]),b=(a??[]).length===0,f=u||i===void 0&&!o&&S.current,g=ae()&&!f&&(i===void 0||o);v.markStart("SnorlaxSidebarList",v.NS_SIDEBAR),g||v.markRendered("SnorlaxSidebarList",v.NS_SIDEBAR),i===void 0&&!o&&!S.current&&(S.current=!0,p(!1));const O=a?.find(N=>N.gizmo.gizmo.id===s),E=c.some(N=>N.gizmo.gizmo.id===s),W=a&&(a?.length>(!s||E?$:$+1)||l);return a?.length>0&&!r.current&&(pe({namespace:be.ChatPageLoad})?.logTiming("render_snorlax_sidebar"),r.current=!0),e.jsxs(e.Fragment,{children:[f&&e.jsx(as,{showRetry:h,refetch:p}),!f&&e.jsx(Q,{id:"snorlax-heading",condensed:n,footer:g&&e.jsx(re,{className:"ml-2 self-center"}),header:e.jsxs(e.Fragment,{children:[t.formatMessage(F.projectsHeading),!b&&e.jsx(rs,{})]}),isLastInGroup:!0,ulClassName:"screen-arch:mb-3",children:!o&&e.jsxs(e.Fragment,{children:[e.jsx(Qs,{snorlaxes:c,currentGizmoId:s}),O&&!E&&e.jsx(U,{gizmo:O.gizmo,isActive:!0}),W&&e.jsx($s,{currentGizmoId:s}),!o&&b&&e.jsx(is,{})]})})]})}const It=Object.freeze(Object.defineProperty({__proto__:null,SnorlaxSidebarList:Le},Symbol.toStringTag,{value:"Module"}));function Ys({isNewConversation:s}){const n=os(),{value:t,isLoading:r}=Re("2113934735");return v.markStart("OperatorSidebarListItem",v.NS_SIDEBAR),!r&&!t?v.cancelRender("OperatorSidebarListItem",v.NS_SIDEBAR):t&&v.markRendered("OperatorSidebarListItem",v.NS_SIDEBAR),e.jsxs(e.Fragment,{children:[e.jsx(Zs,{isNewConversation:s}),t?e.jsx(cs,{}):null,n?e.jsx(ls,{}):null]})}const Zs=({isNewConversation:s})=>{const[n,t]=d.useState(!1),r=ae(),a=Me(),i=Te(),o=T(),u=A();let m;if(u==null)return null;m=xe;const l=r?null:e.jsx("div",{className:"flex gap-2",children:e.jsx(R,{side:"right",label:o.formatMessage(z.newChat),className:"flex items-center",children:e.jsx("button",{className:"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible","aria-label":o.formatMessage(z.newChat),children:e.jsx(fe,{className:"icon-md"})})})});return e.jsx("div",{className:C(r?"":"bg-token-sidebar-surface-primary","pt-0"),children:e.jsx(e.Fragment,{children:e.jsx(B.div,{whileTap:{scale:.98},onMouseEnter:()=>{t(!0)},onMouseLeave:()=>{t(!1)},children:e.jsx(me,{loggingGizmoId:"primary",href:"/",isHovered:n,onClick:c=>{Fe(Ae(a))&&!s&&(c.preventDefault(),ds(i))},icon:e.jsx(he,{isFirstParty:!0,className:"h-6 w-6"}),isMenuOpen:!1,label:m,hoverRightIcon:l})})})})};function qs(){const s=T(),n=ve(),t=s.formatMessage({id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"});return e.jsx(us,{children:e.jsx(B.div,{whileTap:{scale:.98},children:e.jsx(X,{to:ms(),onClick:()=>{n.activeSidebar==="popover-nav"&&je.setActiveSidebar(!1)},children:e.jsx(hs,{icon:fs,"data-testid":"explore-gpts-button",children:t})},"explore")})})}const Xs=2;function Js({gizmos:s,maxToShowOnLoad:n=4,showAllSidebarItems:t}){const r=ps(s,h=>h.flair.kind),a=[...(r[D.Workspace]?.map(({resource:h})=>({gizmo:h,section:_.Workspace}))??[]).slice(0,3),...r[D.FirstParty]?.map(({resource:h})=>({gizmo:h,section:_.Keep}))??[],...r[D.SidebarKeep]?.map(({resource:h})=>({gizmo:h,section:_.Keep}))??[]],i=r[D.Recent]??[],u=(t?i:i.slice(0,Xs)).map(({resource:h})=>({gizmo:h,section:_.Recents})),m=a.length;let l=[];l=[...a,...u],t||(l.length>n&&m>n?l=l.slice(0,m):l.length>n&&(l=l.slice(0,n)));const S=s.length>l.length;return{listItems:l,itemsLeft:s.length-l.length,needsToCollapseItems:S,total:s.length}}function et({gizmo:s,currentGizmoId:n,maxToShowOnLoad:t,hideOverflowMenu:r=!1}){const a=d.useRef(!1),i=ve(c=>!xs.isGptListCollapsed(c)),{listItems:o,needsToCollapseItems:u,itemsLeft:m}=Js({gizmos:s,maxToShowOnLoad:t,showAllSidebarItems:i});d.useEffect(()=>{o.length>0&&!a.current&&(pe({namespace:be.ChatPageLoad})?.logTiming("render_gizmo_sidebar"),a.current=!0)},[o]);function l(c,S){return e.jsx(U,{gizmo:c,isActive:c.gizmo.id===n,section:S,hideOverflowMenu:r},c.gizmo.id)}return e.jsxs("div",{children:[o.map(({gizmo:c,section:S},h)=>e.jsxs(d.Fragment,{children:[h>1&&S!==o[h-1].section&&e.jsx("div",{className:"my-2 ml-2 h-px w-7 bg-token-border-light"}),l(c,S)]},h)),u?e.jsxs("button",{onClick:je.toggleGptListCollapsed,className:"flex h-10 w-full items-center gap-2 rounded-lg px-2 text-sm text-token-text-primary hover:bg-token-sidebar-surface-secondary",children:[e.jsx("div",{className:"flex h-6 w-6 flex-shrink-0 items-center justify-center",children:e.jsx(Se,{className:"icon-md text-token-text-primary"})}),e.jsx("div",{className:"flex grow items-center gap-1",children:i?e.jsxs(e.Fragment,{children:[e.jsx(M,{id:"GizmoSidebarList.showLess",defaultMessage:"See less"}),e.jsx(gs,{className:"icon-xs"})]}):e.jsxs(e.Fragment,{children:[e.jsx(M,{id:"GizmoSidebarList.showMoreItems",defaultMessage:"{numMore} more",values:{numMore:m}}),e.jsx(Ss,{className:"icon-xs"})]})})]}):null,e.jsx(qs,{})]})}function yt(s){const{className:n}=s,{useStore:t,actions:r}=Y(),{focusedObject:a}=H(),o=!bs()&&!!a,u=t(x=>x.isSidebarOpen)&&!o,m=t(x=>x.mode),l=we(),c=ie(),S=Pe(),h=vs();return d.useEffect(()=>{c?r.closeSidebar():r.setSidebarMode(Ie.Pinned)},[c,r]),e.jsx(js,{...s,isSidebarOpen:u,isExtendedInfoOpen:S,isCanvasOpen:h,sidebarMode:m,className:C(n,l?"screen-loaded":"")})}function st(s){const{clientThreadId:n}=H(),t=d.useRef(s);t.current=s;const r=d.useRef(null);d.useEffect(()=>{const a=r.current;return r.current=n,()=>{n!==a&&t.current?.(n,a)}},[n])}function tt({currentGizmoId:s}){const{data:{gizmos:n}={}}=Is();let t=n;return ye()&&(t=n?.filter(a=>!ys(a.resource))),e.jsx(e.Fragment,{children:e.jsxs(Q,{id:"gizmos-heading",header:e.jsx("div",{className:"sticky top-[--sidebar-sticky-threshold] z-20",children:e.jsx(M,{id:"ZT2HVu",defaultMessage:"GPTs"})}),hideHeader:!0,isLastInGroup:!1,children:[e.jsx(Ys,{isNewConversation:!0}),e.jsx(et,{gizmo:t??[],currentGizmoId:s,maxToShowOnLoad:Cs})]})})}const nt=5;function at({clientThreadId:s}){const n=ue(),t=de(),[r,a]=d.useState(!1),i=d.useRef(!1),{conversations:o,data:u,isLoading:m,isError:l,refetch:c}=Ce({recentConversationLimit:nt}),[S,h]=d.useState(!0),x=d.useCallback(function(j){j===void 0&&h(!1),c({cancelRefetch:!0})},[c,h]),p=l||u===void 0&&!m&&i.current;u===void 0&&!m&&!i.current&&(i.current=!0,x(!0)),d.useMemo(()=>{Ge.publish({kind:"refreshHistory",conversations:o})},[o]);const f=t!=null&&t.kind==="conversation"&&t.gizmoId!=null&&Ns(t.gizmoId),I=d.useRef(0);return e.jsxs("div",{onDragOver:g=>{g.preventDefault(),f&&a(!0)},onDrop:g=>{g.preventDefault(),f&&(I.current=0,a(!1),n({newGizmoId:null,conversation:t.conversation,previousGizmoId:t.gizmoId??null}))},onDragEnter:g=>{g.preventDefault(),f&&(I.current+=1)},onDragLeave:g=>{g.preventDefault(),f&&(I.current-=1,I.current===0&&a(!1))},className:C(r&&"opacity-50"),children:[p&&e.jsx(ks,{showRetry:S,refetch:x}),e.jsx(rt,{clientThreadId:s})]})}function rt({clientThreadId:s}){const n=A(),{value:t}=De("2723331629"),{conversations:r,buckets:a,isLoading:i,hasNextPage:o,fetchNextPage:u,isFetchingNextPage:m}=Ce({buckets:!0,recentConversationLimit:1}),l=i||m,c=r.length===0,S=Be(),h=te(s),x=J().activeServerThreadIds,p=S?void 0:h,b=d.useRef(null),f=d.useCallback(g=>{i||g==null||(b.current?.disconnect(),b.current=new IntersectionObserver(j=>{j[0].isIntersecting&&o&&u()},{rootMargin:"0px 0px 350px 0px",threshold:.1}),b.current.observe(g))},[i,o,u]);d.useEffect(()=>()=>{b.current?.disconnect()},[]);const I=e.jsx(re,{className:"mt-2 self-center justify-self-center will-change-transform"});return v.markStart("ChatHistory"),l||v.markRendered("ChatHistory"),c?n==null&&t?null:e.jsx("div",{className:"flex justify-center",children:I}):e.jsxs(e.Fragment,{children:[a.map((g,j)=>e.jsx(Q,{id:`section-${g.key}`,footer:l&&j===a.length-1&&I,header:g.label,condensed:!0,children:g.items.map((O,E)=>e.jsx(ke,{item:O,isActiveInMainWindow:O.id===p,isActive:x.has(O.id),testId:`history-item-${E}`},O.id))},g.key)),!c&&o&&!m&&e.jsx("div",{className:"h-1","data-testid":"infinite-scroll-trigger",ref:f})]})}function it({clientThreadId:s}){A();const n=He(s),{isUnauthenticated:t}=oe(),r=ye(),a=!1;if(t)return null;const i=r&&e.jsx(Le,{includeRevisedSidebarIa:!0,currentGizmoId:n}),o=a,u=e.jsx(at,{clientThreadId:s}),m=e.jsx(tt,{currentGizmoId:n});return e.jsxs("div",{className:C(k.screenContent,"group/sidebar"),children:[m,i,o,null,u]})}function ot(){const s=A(),n=s?.data==null,{isUnauthenticated:t}=oe(),{openSettings:r}=Os(),[a]=d.useState(()=>{const u=Ue.getCookie(We.Workspace);return typeof u=="string"&&u!==Ve}),[i,o]=d.useState(!0);return d.useEffect(()=>{o(!1)},[]),!s&&i||a&&n?null:t?e.jsx(Gs,{}):e.jsx(Ps,{onClickSettings:()=>r()})}function ct(){return e.jsx(Ls,{className:C(k.screenTrailingBarContainer),children:e.jsxs(Ne,{name:"sidebar-footer-bar",className:"relative z-10 mb-[0.5px] grid-cols-[minmax(0,_1fr)] px-sidebar-inline pb-1.5 pt-2.5",type:"secondary",disableSizeTracking:!0,trailing:!0,style:{"--bar-gap":"6px"},children:[e.jsx(Es,{}),e.jsx(Ds,{}),e.jsx(ot,{})]})})}function lt(){return(Bs()?"⌘":"Ctrl")+" K"}function dt({children:s,sideOffset:n,className:t}){return v.markStart("FannyPackSearchTooltip",v.NS_SIDEBAR),v.markRendered("FannyPackSearchTooltip",v.NS_SIDEBAR),e.jsx(R,{sideOffset:n,className:t,label:e.jsxs("div",{children:[e.jsx(M,{id:"jmd8WH",defaultMessage:"Search chats"}),e.jsx("div",{className:"text-sm font-normal text-token-text-secondary",children:lt()})]}),children:s})}const ut=ee(()=>se(()=>import("./bbyd5rf1qtkbvnmn.js"),__vite__mapDeps([5,1,6,2,3,7,8,9,10,11,12,13,14,15,16,17,18,19])).then(s=>s.FannyPackIconButton));function mt({onNewThread:s}){const n=T(),t=d.useRef(null),r=ie(),{useStore:a,actions:i}=Y(),o=a(b=>b.isSidebarOpen),{isSidebarFlyoutOpen:u}=ge(),m=u(y.Conversation),l=u(y.Gizmo),c=u(y.Snorlax),S=o&&!m&&!l&&!c,h=ce();function x(){h&&i.closeSidebar()}Ms({checkElement:b=>b?.tagName==="NAV",enabled:S,onLightDismiss:x});const{isFannyPackEnabled:p}=Ts();return e.jsxs(e.Fragment,{children:[e.jsx(Ne,{type:"primary",className:C(k.screenHeader),name:"sidebar-header",children:e.jsxs("div",{className:"flex min-h-[var(--screen-thread-header-min-height,60px)] w-full flex-1 items-center justify-between px-[var(--sidebar-inline-padding)]",ref:t,children:[e.jsx("div",{className:"grid items-center gap-1",children:e.jsx(_s,{className:C(k.closeSidebarAction),style:{viewTransitionName:"var(--vt_toggle_sidebar_opened)"},onClick:()=>{i.closeSidebar()},onEnterPress:()=>{i.closeSidebar()},icon:e.jsxs(e.Fragment,{children:[e.jsx(zs,{className:C(k.sidebarIcon,"hidden @lg/screen-composer:inline-flex")}),e.jsx(Rs,{className:C(k.sidebarIcon,"@xs/screen-composer:inline-flex @lg/screen-composer:hidden")})]}),label:n.formatMessage(ht.closeSidebar),tooltipSideOffset:4})}),e.jsxs("div",{className:"flex items-center",children:[p&&e.jsx(dt,{children:e.jsx(ut,{className:k.searchAction,icon:e.jsx(Fs,{className:k.sidebarIcon}),style:{viewTransitionName:"var(--vt_search_sidebar)"}})}),!r&&e.jsx(Hs,{location:"sidebar",onNewThread:s})]})]})}),e.jsx("div",{className:C(k.leadingBar,k.leadingBarScrollAnimation,"pointer-events-none absolute inset-0 h-full"),children:" "})]})}const ht=ne({closeSidebar:{id:"fM0vj3",defaultMessage:"Close Sidebar"}});function Ct(){const{clientThreadId:s,onNewThread:n}=H(),[t,r]=d.useState(!1),[a,i]=d.useState(!1),[o,u]=d.useState(!1),{actions:m,useStore:l}=Y(),c=l(f=>f.isSidebarOpen),S=l(f=>f.mode),h=d.useCallback(f=>f===y.Conversation?t:f===y.Gizmo?a:f===y.Snorlax?o:!1,[t,a,o]),x=d.useCallback((f,I)=>{const g=j=>{f===y.Conversation?r(j):f===y.Gizmo?i(j):f===y.Snorlax&&u(j)};I?g(!0):setTimeout(()=>{g(!1)},100)},[]),p=d.useRef(null),b=ce();return st(()=>{x(y.Conversation,!1),x(y.Gizmo,!1),x(y.Snorlax,!1),c&&(S===Ie.Floating||b)&&setTimeout(()=>{m.closeSidebar()},100)}),d.useEffect(()=>{c&&v.trackNamespace(v.NS_SIDEBAR)},[c]),e.jsx(As,{value:{isSidebarFlyoutOpen:h,onSidebarFlyoutOpenChange:x},children:e.jsx(ws,{anchor:"vertical",className:C(k.screen,"popover sidebar flex-1 border-r border-r-token-border-xlight"),name:"sidebar",leading:e.jsx(mt,{onNewThread:n}),ref:p,trackLeading:!0,trailing:e.jsx(ct,{}),children:e.jsx(it,{clientThreadId:s})})})}export{yt as C,Ys as D,dt as F,et as G,Le as S,Ct as a,It as b,lt as g};
//# sourceMappingURL=gpfnin52ickzsm2c.js.map
