import{c as E,r as d,j as e}from"./l6lryjpkt8rv0lpy.js";import{aq as C,cC as T,ay as j,ax as N,aI as S}from"./dvllb5fed1b4y7k1.js";import{GizmoConversationOptionsDropdown as b}from"./gmef5oj8cqxmaxml.js";import{u as M}from"./gjttiufxol9zbtcw.js";import{U as k,fy as I,F as L,N as H,ag as O,d as i,P as z,a as D,s as G}from"./mnkup87aq6tfilq5.js";import{G as P}from"./pc32gvx0zuzynmfl.js";import"./o0ruvxo2l2807vcb.js";import"./gmo2p487z675vgyc.js";import"./f651cyqvxf3m7zo6.js";import"./ll5ad5t40w01fypo.js";import"./oftd8yvle59zqu13.js";import"./hli3paxjs6c9ftyy.js";import"./mc77hi6aghwo7h20.js";import"./1e3kywkhcjn5spyo.js";import"./hjvhqy8z9mtcdx24.js";import"./cbms2jcglp4b707f.js";import"./dssqb33wed4i78fb.js";import"./m1wuuk5evqjakuq1.js";import"./4wfwbvmzqu7tbfmg.js";import"./jnjzqafy9dn7o7ce.js";import"./gffbkcdjbbbnp8kb.js";import"./d5w25xgxcglldc4u.js";import"./ipgaseve9xp2bi1a.js";import"./nxg0mr2frwehg6na.js";function ce({clientThreadId:t}){const n=E(),[u,f,x]=k(t,s=>[s?.isLoading,s?.title??null,G.getThreadTitleSource(s)]),{showEmptyState:g}=M(t),a=n.formatMessage({id:"Dzyamg",defaultMessage:"New chat"}),{resolvedTitle:r,isTypingEffect:h}=C(t,f,!0),{conversations:m,isLoading:v}=T({}),[c,l]=d.useState(!1);d.useEffect(()=>I(P,{editTitleInMainScreen:({serverThreadId:s})=>{s===t&&l(!0)}}),[t]);const w=L(t),o=m&&m.find(s=>s.id===w);if(g)return null;const y=r==null&&(H(t)||x===O.NewChat),p=u||v?e.jsx(A,{width:"w-28 xs:w-40 sm:w-52"}):e.jsxs("button",{className:i("group flex max-w-28 cursor-pointer items-center gap-1 overflow-hidden whitespace-nowrap rounded-lg px-1 py-1.5 text-lg font-semibold text-token-text-secondary radix-state-open:bg-token-main-surface-secondary can-hover:hover:bg-token-main-surface-secondary screen-arch:px-3 screen-arch:[font-size:17px] screen-arch:[line-height:26px] xs:max-w-40 sm:max-w-60 md:max-w-none",y&&"loading-shimmer"),children:[e.jsx("div",{className:"truncate","aria-label":r??a,children:o&&c?e.jsx(j,{conversation:o,onClose:()=>{l(!1)}}):h?e.jsx(N,{text:r??""}):r??a}),o&&e.jsx(S,{className:"icon-md text-token-text-tertiary"})]});return e.jsxs("div",{className:"flex items-center gap-0 overflow-hidden whitespace-nowrap px-2 py-1.5",children:[o&&e.jsx(b,{conversation:o,inMainScreen:!0,onOpenChange:s=>{s&&z.logEvent(D.conversationHeaderMenuItemsOpen)},contentAlign:"start",contentClassName:"max-h-[50dvh] overflow-y-scroll",sideOffset:8,...c&&{open:!1},children:p}),!o&&p]})}function A({index:t,width:n}){return e.jsx("div",{className:i("flex flex-col justify-center pl-1 screen-arch:pl-3"),children:e.jsx("div",{className:i("loading-results-shimmer h-5 rounded-full bg-token-main-surface-secondary",n)})},t)}export{ce as ConversationHeaderMenuItems};
//# sourceMappingURL=o8noabc2ok2qmjvd.js.map
