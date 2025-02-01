import{j as e,M as g,d as V,r as b,au as R,e as Y,R as x,aw as q}from"./n1tvutderx19k1zs.js";import{b9 as N,P as S,bg as Z,U as J,s as K,gx as Q,bY as U,db as $,dl as ee,d as p,cJ as ae,cK as te,cC as se,cE as ne,j as ie,dq as re,bW as C,au as oe,ec as l,eb as le,br as y}from"./n26mv7rx7nquqst2.js";import{gb as ce,gc as de,gd as ue,o as T,br as ge,A as w,U as f,eM as m,eO as he,ge as be,gf as B,ab as fe,gg as xe,gh as me,aH as Se,gi as pe,H as ve,gj as je,V as A,Y as Ce,Z as ye,_ as Ne,fD as we,W as ke,X as Me}from"./pceg3mlzf8dzw9ob.js";import{U as Be,C as Re}from"./fws03tm73d9qjm3m.js";import{N as z,e as Ue}from"./kodyf94rms2l778g.js";function Ye({onClick:t,className:s,...a}){return e.jsx(Ue,{onClick:t,className:p(s,"flex-grow overflow-hidden"),...a})}function qe({onNewChatButtonClick:t}){const{isUnauthenticated:s,isLoading:a}=N();return a||!s?null:e.jsx(z,{className:"mr-3",onClick:()=>{S.logNewChatButtonClicked({location:"Mobile header"}),t()}})}function Ze({onNewChatButtonClick:t,clientThreadId:s}){const{isUnauthenticated:a,isLoading:n}=N(),i=ce(),r=Z(s),o=de(r),c=J(s,K.getIsNewConversation),h=Q(),d=c&&h&&o;if(n)return null;if(a)return i?e.jsx(Ae,{}):e.jsx(Te,{});const v=e.jsx(z,{onClick:()=>{S.logNewChatButtonClicked({location:"Mobile header"}),t()}});return d?e.jsx(ue,{layout:"compact",clientThreadId:s}):v}function Te(){const t=T(),s=ge(E.signUpButtonText);return e.jsx(U,{as:"button",size:"small",color:"primary",onClick:()=>{t({authType:"signup",callback:a=>{S.logSignUpButtonClicked({location:"Mobile Chat Stage Header",provider:a})}})},children:e.jsx(g,{...s})})}function Ae(){const t=T();return e.jsx(U,{as:"button",size:"small",color:"primary",onClick:()=>{t({authType:"login",callback:s=>{S.logLogInButtonClicked({location:"Mobile Chat Stage Header",provider:s})}})},"data-testid":"mobile-login-button",children:e.jsx(g,{...$.logInButtonText})})}function ze({onClick:t}){return e.jsxs("button",{type:"button",className:"inline-flex rounded-md hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",onClick:t,"data-testid":"open-sidebar-button",children:[e.jsx("span",{className:"sr-only",children:e.jsx(g,{...E.openSidebar})}),e.jsx(he,{className:"icon-lg mx-2 text-token-text-secondary"})]})}const Ee=({onClickOpenSidebar:t,children:s,showNavSidebar:a,leftContent:n,rightContent:i,bottomContent:r})=>{const o=w(d=>d.activeSidebar),c=V(),h=c.pathname+c.search+c.hash;return b.useEffect(()=>{o==="popover-nav"&&f.setActiveSidebar(!1)},[h]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"draggable sticky top-0 z-10 flex min-h-[60px] items-center justify-center border-transparent bg-token-main-surface-primary pl-0 md:hidden",children:[(a||n)&&e.jsxs("div",{className:"no-draggable absolute bottom-0 left-0 top-0 ml-3 inline-flex items-center justify-center",children:[a&&e.jsx(ze,{onClick:t}),n]}),e.jsx("div",{className:"no-draggable",children:s}),i&&e.jsx("div",{className:"no-draggable absolute bottom-0 right-0 top-0 mr-3 inline-flex items-center justify-center",children:i})]}),r&&e.jsx("div",{className:"no-draggable flex w-full items-center justify-center bg-token-main-surface-primary md:hidden",children:r})]})};function Ie({isPopoverOnDesktop:t=!1,isExpanded:s=!1,children:a}){const n=ee();return m.markStart("StageNavigationSidebar"),m.markRendered("StageNavigationSidebar"),e.jsxs(e.Fragment,{children:[!n||t?e.jsx(Pe,{children:a}):null,e.jsx(Le,{isExpanded:!t&&s,children:a})]})}function Le({isExpanded:t,children:s}){const a=b.useRef(null);return b.useEffect(()=>{t&&m.trackNamespace(m.NS_SIDEBAR)},[t]),e.jsx(R.div,{className:p("z-[21] flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0"),ref:a,initial:!1,animate:{width:t?"260px":0,transition:{type:"spring",bounce:.12,duration:.64}},onAnimationStart:()=>{a.current&&(a.current.style.visibility="visible")},onAnimationComplete:()=>{a.current&&(t||(a.current.style.visibility="hidden"))},children:e.jsx("div",{className:"h-full w-[260px]",children:e.jsx("div",{className:"flex h-full min-h-0 flex-col",children:s})})})}function Pe({children:t}){const s=w(a=>a.activeSidebar);return e.jsx(ae,{open:s==="popover-nav",onOpenChange:a=>{a||f.setActiveSidebar(!1)},children:e.jsxs(te,{children:[e.jsx(se,{className:"fixed inset-0 z-10 bg-gray-50/50 radix-state-open:animate-show dark:bg-black/50"}),e.jsx(ne,{className:"fixed left-0 top-0 z-50 h-full max-w-xs border-r border-gray-200 bg-token-sidebar-surface-primary shadow-[0_0_64px_0_rgba(0,0,0,0.07)] focus:outline-none radix-state-closed:animate-sidebarHide radix-state-open:animate-sidebarShow top-banner-visible:bottom-0 top-banner-visible:top-[--top-banner-height,0px] top-banner-visible:h-auto dark:border-gray-800",children:t})]})})}const E=ie({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar"},signUpButtonText:{id:"navigation.signUpButtonText",defaultMessage:"Sign up"}}),Fe=()=>{const{openSettings:t}=be(),s=oe("3376455464")?.value,a=Y();return e.jsxs("div",{className:"flex h-full flex-col gap-2 p-3",children:[e.jsx(B,{icon:fe,onClick:()=>{xe(a),f.closeActiveSidebar()},children:e.jsx(g,{id:"0FupYP",defaultMessage:"New chat"})}),e.jsx("div",{className:"flex grow items-center justify-center",children:e.jsx(Be,{})}),e.jsxs(re,{contentClassName:"w-[298px]",triggerButton:e.jsx(B,{icon:me,children:e.jsx(g,{id:"y4Lkp7",defaultMessage:"Settings and more"})}),children:[e.jsx(C.Item,{onClick:()=>t(),icon:Se,children:e.jsx(g,{id:"HrRLkZ",defaultMessage:"Settings"})}),s&&e.jsx(C.Item,{icon:pe,onClick:()=>{f.openModal(ve.ReportConversation)},children:e.jsx(g,{id:"thread.report.0",defaultMessage:"Report illegal content"})}),e.jsx(C.Separator,{}),e.jsx(je,{})]})]})};function He({isExpanded:t,children:s}){const a=b.useRef(null),[n,i]=b.useState("400px"),r=x.isValidElement(s)?x.cloneElement(s,{setWidth:i}):s;return e.jsx(q,{children:e.jsx(R.div,{className:"z-[1] flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary max-md:!w-0",ref:a,initial:!1,animate:{width:t?n:0,transition:{type:"spring",bounce:.12,duration:.3}},onAnimationStart:()=>{a.current&&(a.current.style.visibility="visible")},onAnimationComplete:()=>{a.current&&(t||(a.current.style.visibility="hidden"))},children:e.jsx("div",{className:p("absolute h-full",!t&&"pointer-events-none"),style:{width:n},children:e.jsx("div",{className:"flex h-full flex-col",children:r})})})})}const Je=({setWidth:t,clientThreadId:s})=>{const a=l("caterpillar"),n=l("searchSources"),i=l("summarizer"),r=l("retrievalResults"),o=A();return e.jsxs(e.Fragment,{children:[n&&e.jsx(Ce,{clientThreadId:s}),r&&e.jsx(ye,{clientThreadId:s}),o&&i&&e.jsx(Ne,{clientThreadId:s}),a&&e.jsx(Re,{taskId:a.caterpillarId,initialTab:a.initialTab,setWidth:t})]})};function I({children:t,hideNavigation:s=!1,mobileHeaderContent:a,mobileHeaderLeftContent:n,mobileHeaderRightContent:i,mobileHeaderBottomContent:r,sidebar:o,threadFlyout:c,forceOpenDesktopSidebar:h=!1}){const{isUnauthenticated:d}=N(),[v,L]=w(u=>[u.activeStageSidebar,u.activeSidebar]),P=le(),F=l("searchSources"),H=l("summarizer"),O=l("retrievalResults"),D=l("caterpillar"),_=we(),k=[];let M=null;x.Children.forEach(t,u=>{x.isValidElement(u)&&(u.type===I.Sidebars?M=u:k.push(u))});const j=!d&&!s&&o!=null,X=!s&&(j||d),G=A()&&!!H,W=P&&(!!F||G||!!O||!!D);return e.jsxs("div",{className:"flex h-full w-full flex-col",children:[e.jsx(y,{children:e.jsx(ke,{})}),e.jsxs("div",{className:p("relative flex h-full w-full flex-1 overflow-hidden transition-colors",L!=="popover-nav"&&"z-0"),children:[e.jsxs("div",{className:"relative flex h-full w-full flex-row overflow-hidden",children:[j&&e.jsx(Ie,{isExpanded:h||!_,isPopoverOnDesktop:v,children:d?e.jsx(Fe,{}):o}),e.jsxs("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[X&&e.jsxs(y,{children:[e.jsx(Me,{}),e.jsx(Ee,{onClickOpenSidebar:()=>f.togglePopoverNavSidebar(),showNavSidebar:j,leftContent:n,rightContent:i,bottomContent:r,children:a})]}),e.jsx("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:k})]})]}),e.jsx(y,{children:e.jsx(He,{isExpanded:W,children:c})}),M]})]})}function Oe({children:t}){return e.jsx(e.Fragment,{children:t})}I.Sidebars=Oe;export{Je as F,I as S,qe as a,Ze as b,Ye as c};
//# sourceMappingURL=n0d8tgahmhdeo0ie.js.map
