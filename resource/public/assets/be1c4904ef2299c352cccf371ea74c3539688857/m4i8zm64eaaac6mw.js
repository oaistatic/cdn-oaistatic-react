import{r as g,e as gt,j as a,a5 as k,a7 as H,aj as Wt}from"./fs6h2trisr1juto6.js";import{ha as $t,pt as Zt,h9 as $,gR as N,cE as Et,gS as R,m9 as at,cS as Jt,hF as qt,hG as Qt,hH as te,hI as ee,d as oe,jm as ne}from"./df9u9imhvwerk6zv.js";import{a7 as D,a6 as P,f as se,d as j,h as xt,a9 as re,aa as bt,ab as ie,ac as vt,ad as ae,ae as ce}from"./znhlm4mi38lqonum.js";import{C as ct}from"./juhoq7zcvi40kvvr.js";import{Z as Y,T as yt}from"./l4ce2zdnnawhaijx.js";import{u as V,i as Z,d as le}from"./ceo3ton9qf40yhfo.js";import{n as z,fH as ue,d as M,c as de,c7 as Tt,B as et,bf as J,fO as fe,d0 as St,cS as me,d1 as pe,d2 as Ot,bg as he,bH as At}from"./cyi7nanrg0vdotzd.js";import{X as Lt,Y as Nt,u as Ce,v as ge,H as Ee}from"./dntkfnmsnl7t00b4.js";import{E as Q,h as xe,G as w,c as lt}from"./mi5k2suvbiot8uwb.js";import{c as wt,R as be,I as ve}from"./cunrbs89hxzgq11d.js";import{T as ye}from"./069jlavvvdusqrfm.js";import{i as Te}from"./yfqt5utzd9fqyqo1.js";var _=(t=>(t[t.up=-1]="up",t[t.down=1]="down",t))(_||{}),W=(t=>(t.COMMENT="comment",t.COMPOSER="composer",t))(W||{}),O=(t=>(t.COLLAPSED="collapsed",t.EXPANDED="expanded",t))(O||{});const Pt=([t,e],[o,s])=>{const n=t+e,r=o+s;return t<r&&o<n},ot=([t,e])=>t+e,I=t=>{if(t.type===O.COLLAPSED)return[t.offsetY??0,0];const{offsetY:e,shiftY:o=0,height:s=0}=t,n=e+o;return o<0?[n,s+Math.abs(o)]:[n,s]},Se=(t,e,o)=>{if(!Pt(t,e))return null;const[s,n]=t,r=s+n,[i,c]=e,l=i+c,u=i-r,d=l-s;return o===_.up?u:d};var Mt=(t=>(t.ABOVE="above",t.BELOW="below",t))(Mt||{});function G(t,e){return z(t.coordsAtPos(e))}const ut=360,Oe=250,kt=44,dt=.5,ft=[.5,.9,1],Ae=[1,.75,.2],Le=({onClose:t,onSubmit:e,opensOverDocument:o=!1,opensFromGutter:s=!1,gutterHasComments:n=!1},r)=>{const i=gt(),c=g.useRef(null),l=g.useRef(!1),[u,d]=g.useState(""),[f,m]=g.useState(!0),p=()=>{d(""),t?.(l.current)},h=(b,v=u)=>{l.current=!0,e?.(b,v),d("")},E=ue(({windowWidth:b})=>o?b<ut+100?Oe:ut:Q,0),C={};s&&(C.top=-12),o&&s?C.right=0:C.left=0;let x="";s&&!o?x="8px 50%":s&&o?x="calc(100% + 8px) 50%":o&&(x="center left");let T=0;s&&!o&&n&&(T=xe);const S=b=>{const{metaKey:v,shiftKey:A,key:K}=b;K==="Enter"&&!b.nativeEvent.isComposing&&u&&!(A||v)?(h(b),b.preventDefault()):K==="Escape"&&(d(""),t?.(!1))},y=i.formatMessage({id:"VvfbvY",defaultMessage:"Edit or explain..."});return a.jsx(k.div,{ref:$t(c,r),className:M("absolute flex items-center",Y.commentComposer),style:{...C,minHeight:kt},transition:{type:"spring",bounce:.18,duration:.48},initial:{translateX:0},animate:{translateX:T},exit:{translateX:0},children:a.jsx(k.div,{className:M("no-scrollbar relative z-10 flex items-center overflow-x-hidden border border-token-border-light",yt,{"rounded-full":f,"rounded-2xl":!f}),initial:{width:o?Q:24,scaleX:o?dt:void 0,scale:o?void 0:dt},animate:{width:E,scaleX:o?ft:void 0,scale:o?void 0:ft},exit:{filter:"blur(16px)",scale:o?void 0:Ae,width:o?Q:24,opacity:o?0:[1,1,0]},transition:{type:"spring",bounce:o?.14:0,duration:.28,scale:{type:"tween",duration:.2},opacity:{type:"tween",time:[0,.95,1]}},style:{transformOrigin:x},children:a.jsxs(k.div,{className:"relative z-0 flex w-full items-center bg-token-main-surface-primary px-4 py-2.5",children:[a.jsx(k.div,{className:"backdrop-saturate-25 absolute inset-0 z-[-1] bg-gray-50/75 backdrop-blur-3xl dark:bg-gray-700/75",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",duration:.2}}),a.jsx(Te,{"aria-placeholder":y,value:u,className:"w-full resize-none border-0 bg-transparent px-1 py-0 pr-2 text-token-text-primary outline-0 placeholder:text-token-text-secondary focus:ring-0 focus-visible:ring-0",autoFocus:!0,maxRows:4,onBlur:p,onHeightChange:(b,{rowHeight:v})=>{m(Math.floor(b/v)<=1)},onChange:({target:{value:b}})=>d(b),onKeyDown:S}),!u&&a.jsx("span",{"aria-hidden":!0,className:"absolute inline-block text-nowrap pl-1 text-token-text-secondary",children:y}),a.jsx(k.button,{className:M("-mr-1.5 h-6 w-6 rounded-full bg-black text-center dark:bg-white",{"self-end":!f}),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",duration:.1},onMouseDown:b=>h(b),children:a.jsx(Zt,{className:"h-6 w-6 text-white dark:text-black"})})]})})})},jt=g.forwardRef(Le),Ne=(t,e)=>{if(e?.type!==D.SELECTION)return null;try{const{from:o,to:s}=e,{top:n}=t.dom.getBoundingClientRect(),{bottom:r,top:i}=G(t,o),{bottom:c}=G(t,s),l=Z(t)?-30:-24;let u=r-n+l;const d=i-n;return u=c-n+8,{composerTop:u,loadingTop:d}}catch(o){return N.logError("Invalid position in SelectionCommentComposer",o),null}},we=({toolbarPosition:t,composerRect:e,view:o})=>{let{width:s,height:n}=e;if(n||=kt,o==null||t==null)return null;const{right:r,left:i}=o.dom.getBoundingClientRect(),{left:c,top:l,aboveOrBelow:u,toolbarSize:d}=t,f=l-(u===Mt.ABOVE&&n!==0?n-d.height:0),m=le(o)?12:0;return{left:Math.min(c,r-i-s-m),composerTop:f,aboveOrBelow:u}},Pe=({toolbarPosition:t,commentingOn:e,isWaitingForCommentResponse:o=!1,onAddComment:s})=>{const n=V()(),[r,i]=$(),c=we({view:n,toolbarPosition:t,composerRect:r});if(n==null||c==null)return null;const{left:l,composerTop:u}=c,d=(f,m)=>{if(e?.type!==D.SELECTION)return;const{action:p,sourceRange:h}=e;s?.(f,m,p,h,e.type)};return a.jsx(H,{children:e?.type===D.SELECTION&&!o&&a.jsx("div",{className:M("absolute",Y.commentComposer),style:{left:l,top:u},children:a.jsx(jt,{opensOverDocument:!0,onClose:f=>{f||(P.cancelCommentingOn(),n&&Z(n)&&!n.state.selection.empty&&n.dispatch(n.state.tr.setSelection(new ye(n.state.selection.$from))),document.getSelection()?.removeAllRanges())},onSubmit:d,ref:i})},"composer")})};function Me(t,e,o){const s=t+e;for(const n of o.values()){const r=n.start,i=n.end;if(t<i&&r<s)return!0}return!1}const ke=50,je=200,_e=[ge.proseMirrorNodeName(),Ee.proseMirrorNodeName()],De=t=>t?t.isBlock:!1,Be=t=>{if(!t)return!1;const{isBlock:e,type:{name:o}}=t;return e&&_e.includes(o)},Re=(t,e,o,s)=>{const n=t.posAtCoords({left:e,top:o});if(n==null)return;const{pos:r,inside:i}=n;if(i===-1)return;const{state:c}=t;let l=r,u=c.doc.nodeAt(l);for(;!De(u)&&l>=0;)l--,u=c.doc.nodeAt(l);if(!u||!Be(u))return;const d=s!=null&&Me(l,u.nodeSize,s);return{node:u,nodeHasComment:d,pos:l}};function Ie(t,e,o){const s=Re(t,e.x,e.y,o);if(s==null)return null;const{node:n,pos:r,nodeHasComment:i}=s,{top:c}=t.coordsAtPos(0);function l(){const p=r+1;return Ce(t.state.doc,p)&&t.state.doc.nodeAt(p)?.isText?t.coordsAtPos(p).top:t.coordsAtPos(r).top}const u=l(),d=u-c;return{height:t.coordsAtPos(r+n.nodeSize-1).bottom-u,nodeHasComment:i,mouseEnteredAt:Date.now(),yOffset:d,pos:r}}function He(t){const e=g.useRef(!1),o=g.useRef(!1),[s,n]=g.useState(null),r=se(),i=r()?.dom,c=g.useRef(!1),l=j(({visibleBlockCommentLauncher_DEBUG_ONLY:f})=>f),u=g.useCallback(Et(f=>{e.current=!0;const{commentingOn:m}=j.getState();if(o.current||m!=null)return;const p=r();if(p==null||!e.current)return n(null);const{dom:h,state:E}=p,C=Lt(Nt,E)?.positions;if(C==null)return n(null);const x=Ie(p,f,C);if(x==null||x.nodeHasComment&&t===w.COLLAPSED){n(null);return}if(c.current&&x.yOffset!==s?.yOffset){n(null);return}const T=p.coordsAtPos(0),S=h.getBoundingClientRect().width,b=(f.x-T.left)/S>=ke/100;n(b?x:null)},je),[r,c,s]);g.useEffect(()=>{if(i!=null)return de(i,{mouseenter:()=>{e.current=!0,o.current=!1},mouseleave:({relatedTarget:f})=>{if(u.cancel(),f instanceof HTMLElement&&f.closest("[data-block-comment-launcher]")){o.current=!0;return}o.current=!1,e.current=!1,j.getState().commentingOn==null&&n(null)},mousemove:u})},[r,i,t,u]);const d=g.useCallback(({relatedTarget:f})=>{const{commentingOn:m}=j.getState();m==null&&f!==i&&(o.current=!1,n(null))},[i]);return{visibleBlockComment:l??s,handleMouseLeave:d,onComposerVisibleChange:f=>{c.current=f}}}const Ye=({isWaitingForCommentResponse:t=!1,opensOverDocument:e=!1,hasComments:o=!1,activeBlockComment:s,composerRef:n,onLaunchComposer:r,onMouseLeave:i,onSubmit:c})=>{const[l,u]=g.useState(!1),{yOffset:d,height:f,pos:m}=s,p=()=>{u(!0),r?.(),N.logButtonClick(R.BLOCK_COMMENT_LAUNCHER),P.startCommentingOn({type:D.BLOCK,pos:m})},h=x=>{x||(u(!1),P.cancelCommentingOn())},E=(x,T)=>{u(!1),c?.(x,T)};g.useEffect(()=>()=>{P.mouseLeaveBlock()},[]);const C=o&&l?e?-88:88:0;return a.jsx(k.div,{className:M("pointer-events-auto absolute flex h-6 w-5 origin-[14px_50%] items-start after:absolute after:-inset-4 after:content-['']",Y.commentComposer),initial:!1,animate:{opacity:1},exit:{opacity:0},transition:{type:"spring",duration:.2,bounce:.1},style:{top:0,height:f,translateY:d},onMouseLeave:i,"data-block-comment-launcher":!0,children:a.jsxs(H,{children:[l?a.jsx(jt,{ref:n,opensFromGutter:!0,onClose:h,onSubmit:E,gutterHasComments:o,opensOverDocument:e},"composer"):null,a.jsx(k.button,{initial:{opacity:0},animate:{opacity:l?0:1,translateX:C},transition:{duration:.15,translateX:{type:"spring",bounce:.18,duration:.48}},className:"group absolute z-10 flex h-6 gap-1 bg-transparent after:absolute after:-inset-y-4 after:-left-1 after:-right-4 after:content-['']",onClick:p,onMouseEnter:()=>P.mouseEnterBlock(m),onMouseLeave:()=>P.mouseLeaveBlock(),disabled:l||t,children:a.jsx(re,{isLoading:t})},"launcer")]})})},Ge=({isWaitingForCommentResponse:t=!1,isRequestActive:e=!1,hasComments:o=!1,composerRef:s,gutterMode:n,onAddComment:r})=>{const i=xt(),{visibleBlockComment:c,handleMouseLeave:l,onComposerVisibleChange:u}=He(n),d=(f,m)=>{if(!c||!i)return;const{doc:p}=i,{pos:h}=c,E=p.nodeAt(h);if(!E)return;const{attrs:{start:C,end:x}}=E;r?.(f,m,bt.ASK,{start:C,end:x},D.BLOCK)};return a.jsx(H,{onExitComplete:()=>u(!1),children:c&&i&&(t||!e)&&a.jsx(Ye,{composerRef:s,isWaitingForCommentResponse:t,opensOverDocument:n===w.COLLAPSED,activeBlockComment:c,hasComments:o,onSubmit:d,onMouseLeave:l,onLaunchComposer:()=>u(!0)},"launcher")})},Ve=({onAcceptComment:t,onDismissComment:e,disableActions:o=!1,entry:s,isGutterCollapsed:n=!1,isHovered:r=!1,isFocused:i=!1,isSomeCommentFocused:c=!1})=>{const{offsetY:l,type:u}=s,[d,f]=Wt();let m=null;if(u===O.COLLAPSED)m=!i&&a.jsx(ie,{offsetY:l,count:s.count,onClick:()=>{N.logButtonClick(R.COLLAPSED_COMMENT),P.focusComment(s.children[0])}},"collapsed");else{const{comment:p}=s;if(p==null||p.content===""||p.status===at.DISMISSED)m=null;else if(p.status===at.ACCEPT_INITIATED)m=a.jsx("div",{className:"absolute",style:{top:l},children:a.jsx(vt,{})},"loading");else{const{id:h}=p;m=a.jsx(ae,{isSomeCommentFocused:c,isHovered:r,isFocused:i,offsetY:l,disableActions:o,onClick:()=>{N.logButtonClick(R.EXPANDED_COMMENT),P.focusComment(h)},onMouseEnter:()=>P.mouseEnterComment(h),onMouseLeave:()=>P.mouseLeaveComment(),comment:p,onAccept:E=>{N.logButtonClick(R.COMMENT_ACCEPT,{commentId:h}),t?.(E,h)},onDismiss:()=>{N.logButtonClick(R.COMMENT_DISMISS,{commentId:h}),e?.(h)},opensOverDocument:n},"expanded")}}return a.jsx(H,{onExitComplete:()=>f?.(),children:d&&m})},mt=({onMeasureHeight:t,comment:e,isFocused:o=!1})=>{const[{height:s},n]=$();return Tt(()=>{t?.(s)},[s]),a.jsx(ce,{ref:n,comment:e,isFocused:o,disableAnimations:!0})},Xe=({comments:t,onMeasure:e,getStableCommentId:o})=>{const s=g.useRef(new Map),n=g.useRef(new Map),r=g.useRef(null),i=(c,l,u=!1)=>{l&&(u?n.current.set(o(c),l):s.current.set(o(c),l),r.current&&cancelAnimationFrame(r.current),r.current=requestAnimationFrame(()=>{e?.({focusedHeights:new Map(n.current),heights:new Map(s.current)}),r.current=null}))};return t?.length?a.jsxs("div",{className:"pointer-events-none invisible fixed left-0 top-0 overflow-clip","aria-hidden":"true",children:[t.map(c=>a.jsx(mt,{comment:c,onMeasureHeight:l=>i(c.id,l)},o(c.id))),t.map(c=>a.jsx(mt,{isFocused:!0,comment:c,onMeasureHeight:l=>i(c.id,l,!0)},`${o(c.id)}-focused`))]}):null},pt=(t,e,o)=>{let s=o+e;for(;e===_.down?s<t.length:s>-1;){const n=t[s],r=t[s-e],i=Se(I(n),I(r),e);if(i!=null&&n.type!==O.COLLAPSED)n.shiftY+=i;else break;s+=e}},ht=(t,e)=>{for(const o of e){const{index:s,amount:n}=o,r=t[s];r.type===O.EXPANDED&&(r.shiftY+=n),pt(t,_.down,s),pt(t,_.up,s);for(const i of t)i.type!==O.COLLAPSED&&(i.offsetY+=i.shiftY,i.shiftY=0)}},Ke=(t,e)=>{const o=[],[s,n]=e,r=s+n;for(let i=0;i<t.length;i++){const c=t[i],[l]=I(c),u=[l,c.type===O.EXPANDED?c.height:0],[d,f]=u;if(Pt(u,e)){const m=d+f,p=s-m,h=r-d,C=(Math.abs(p)<Math.abs(h)?_.up:_.down)===_.up?p:h;o.push({index:i,amount:C})}}return o},Ue=({gutterMode:t,focusedCommentId:e,gutterPositions:o,getCommentKey:s,getComment:n})=>{if(!o?.size)return[];const r=new Map,i=[];let c=null,l=-1;for(const d of o.values()){if(d.type===W.COMPOSER){c=[d.offsetY,d.height];continue}const{commentId:f,height:m,collapsedOffsetY:p,offsetY:h}=d;if(t===w.EXPANDED){const x=et(i),T=x?ot(I(x)):0;let S=h;x&&S<=T&&(S=T),r.set(f,{originalOffsetY:h,offsetY:S}),e===f&&(l=i.length),i.push({key:s(f),comment:n(f),type:O.EXPANDED,height:m,offsetY:S,shiftY:0});continue}let E=i.findIndex(({offsetY:x,type:T})=>T===O.COLLAPSED&&x===p),C=i[E]??null;if(!C)C={key:i.length,type:O.COLLAPSED,offsetY:h,count:1,children:[f]},E=i.length,i.push(C);else{if(C.type!==O.COLLAPSED)throw new Error("Collapsed parent type expected to be collapsed");C.count+=1,C.children.push(f),C.offsetY=p}e===f&&(l=E)}const u=i[l];if(t===w.COLLAPSED&&u?.type===O.COLLAPSED){const d=[];for(let f=0;f<u.children.length;f++){const m=u.children[f];m===e&&(l+=f+1);const p=et(d),h=p?ot(I(p)):0,E=o.get(m)?.offsetY??0,C=Math.max(h,E);r.set(m,{originalOffsetY:E,offsetY:C}),d.push({type:O.EXPANDED,key:s(m),comment:n(m),offsetY:C,height:o.get(m)?.height??0,shiftY:0})}i.splice(l,0,...d)}if(e){const d=r.get(e);if(!d)return i;const{offsetY:f,originalOffsetY:m}=d,p=m-f,h=[{amount:p,index:l}];let E=l+1;for(;E<i.length;){const C=i[E],{type:x}=C;let T=p;if(x===O.EXPANDED&&C.comment?.id){const{offsetY:S,originalOffsetY:y}=z(r.get(C.comment.id));if(S===y)break;T=Math.max(y-S,p)}else break;h.push({amount:T,index:E}),E++}h.length&&ht(i,h)}else if(t!==w.COLLAPSED&&c){const d=Ke(i,c);ht(i,d)}return i},Fe=t=>{try{return Ue(t)}catch(e){return N.logError("Generating comment gutter entries",e),[]}},ze=t=>"length"in t?t.length===0:t.nodeSize===0,tt=12,We=({composerHeight:t,getCommentHeight:e,getCollapsedStartPos:o,commentingOn:s,commentPositions:n,view:r})=>{if(!n||!r||ze(r.state.doc))return null;const{top:i}=r.dom.getBoundingClientRect(),c=Array.from(n.entries()).sort(([u,d],[f,m])=>d.start-m.start),l=new Map;for(const[u,{start:d}]of c)try{const f=o?.(d)??d,{top:m}=G(r,f),{top:p}=G(r,d),h=p-i,E=m-i,C=(e(u)??0)+tt;l.set(u,{commentId:u,height:C,collapsedOffsetY:E,offsetY:h,type:W.COMMENT})}catch{continue}if(s?.type===D.BLOCK){const{pos:u}=s;try{const{top:d}=G(r,u),m=d-i-tt;l.set("block-composer",{type:W.COMPOSER,height:(t??0)+tt,offsetY:m})}catch{}}return l},_t=(t,e)=>e.nodeAt(t)?.isBlock?t+1:_t(t-1,e);function $e(t){const e=xt(),s=V()?.();if(!s)return null;if(Z(s)){if(!e)return null;const n=Lt(Nt,e);return n?n.positions:null}return new Map(t.map(n=>[n.id,n.at]))}const Ze=({gutterMode:t,focusedCommentId:e,commentingOn:o,comments:s,getStableId:n})=>{const[{height:r},i]=$(),c=V(),[l,u]=g.useState(()=>new Map),[d,f]=g.useState(()=>new Map),m=g.useCallback(({focusedHeights:y,heights:b})=>{u(y),f(b)},[]),p=y=>{const b=n(y);return y===e?l.get(b)??0:d.get(b)??0},h=c(),E=h!=null&&Z(h)?y=>_t(y,h.state.doc):void 0,C=new Map(s?.map(y=>[n(y.id),y])),x=$e(s),T=We({composerHeight:r,commentingOn:o,getCommentHeight:p,getCollapsedStartPos:E,commentPositions:x,view:h}),S=Fe({gutterMode:t,gutterPositions:T,focusedCommentId:e,getComment:y=>C.get(n(y))??null,getCommentKey:n});return{blockComposerRef:i,onMeasureComments:m,gutterEntries:S}};function Je(){const e=V()(),o=j(({commentingOn:r})=>r),n=e==null?null:Ne(e,o);return n==null?null:a.jsx(k.div,{className:"absolute",style:{top:n.loadingTop},initial:!1,animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},transition:{delay:.2},children:a.jsx(vt,{})},"selection-loading")}const qe=t=>a.jsx("div",{className:"absolute",style:{top:ot(I(t))},children:a.jsx("div",{className:"h-[max(3rem,18vh)] w-1"})}),jo=({availableWidth:t,comments:e,commentsMode:o,disableBlockComments:s=!1,isRequestActive:n=!1,isWaitingForCommentResponse:r=!1,onAddComment:i,onAcceptComment:c,onDismissComment:l,getStableCommentId:u})=>{const d=j(({focusedCommentId:L})=>L),f=j(({hoveredCommentId:L})=>L),m=j(({commentingOn:L})=>L),p=Jt(),h=t<lt?w.COLLAPSED:w.EXPANDED,{onMeasureComments:E,blockComposerRef:C,gutterEntries:x}=Ze({comments:e,getStableId:u,gutterMode:h,focusedCommentId:d,commentingOn:m}),T=x.length>0,S=m!=null&&!r&&m.type!=="selection"||T,b=(()=>{if(!S)return 0;switch(h){case w.COLLAPSED:return 0;case w.EXPANDED:return lt}})(),v=m?.type==="selection",A=et(x),K=o===ct.ENABLED&&p&&!v&&!s;return a.jsxs(k.div,{className:M("pointer-events-none relative flex h-full flex-shrink-0",Y.commentGutter,h===w.COLLAPSED&&b?"basis-[32px]":"basis-0"),initial:{width:0,opacity:0},animate:{width:b,opacity:1},exit:{width:0,opacity:0},children:[a.jsx(Xe,{getStableCommentId:u,comments:e,onMeasure:E}),a.jsxs("div",{className:M("pointer-events-auto absolute bottom-0 left-0 top-0 w-0 overflow-visible",{"pl-2":S||!s}),children:[a.jsx(H,{children:x.map(L=>{const{key:Ut,type:it}=L,Ft=!!d&&it===O.EXPANDED&&L.comment?.id===d,zt=!!d&&L.type===O.COLLAPSED&&L.children.includes(d);return a.jsx(Ve,{isGutterCollapsed:h===w.COLLAPSED,isSomeCommentFocused:!!m||!!d,isHovered:it===O.EXPANDED&&L.comment?.id===f,isFocused:Ft||zt,entry:L,disableActions:n||r||o===ct.COMMENTS_READONLY,onAcceptComment:(U,B)=>{try{c?.(U,z(e?.find(q=>q.id===B)))}catch(q){N.logError(`Comment ${B} not found`,q)}},onDismissComment:U=>{try{l?.(z(e?.find(B=>B.id===U)))}catch(B){N.logError(`Comment ${U} not found`,B)}}},Ut)})}),T&&A&&a.jsx(qe,{...A}),K&&a.jsx(Ge,{composerRef:C,gutterMode:h,onAddComment:i,isWaitingForCommentResponse:r,isRequestActive:n,hasComments:T}),r&&v&&a.jsx(Je,{})]})]})};var Qe="Separator",Ct="horizontal",to=["horizontal","vertical"],Dt=g.forwardRef((t,e)=>{const{decorative:o,orientation:s=Ct,...n}=t,r=eo(s)?s:Ct,c=o?{role:"none"}:{"aria-orientation":r==="vertical"?r:void 0,role:"separator"};return a.jsx(J.div,{"data-orientation":r,...c,...n,ref:e})});Dt.displayName=Qe;function eo(t){return to.includes(t)}var oo=Dt,nt="Toolbar",[no,_o]=fe(nt,[St,wt]),st=St(),Bt=wt(),[so,Rt]=no(nt),It=g.forwardRef((t,e)=>{const{__scopeToolbar:o,orientation:s="horizontal",dir:n,loop:r=!0,...i}=t,c=st(o),l=me(n);return a.jsx(so,{scope:o,orientation:s,dir:l,children:a.jsx(pe,{asChild:!0,...c,orientation:s,dir:l,loop:r,children:a.jsx(J.div,{role:"toolbar","aria-orientation":s,dir:l,...i,ref:e})})})});It.displayName=nt;var Ht="ToolbarSeparator",Yt=g.forwardRef((t,e)=>{const{__scopeToolbar:o,...s}=t,n=Rt(Ht,o);return a.jsx(oo,{orientation:n.orientation==="horizontal"?"vertical":"horizontal",...s,ref:e})});Yt.displayName=Ht;var ro="ToolbarButton",rt=g.forwardRef((t,e)=>{const{__scopeToolbar:o,...s}=t,n=st(o);return a.jsx(Ot,{asChild:!0,...n,focusable:!t.disabled,children:a.jsx(J.button,{type:"button",...s,ref:e})})});rt.displayName=ro;var io="ToolbarLink",ao=g.forwardRef((t,e)=>{const{__scopeToolbar:o,...s}=t,n=st(o);return a.jsx(Ot,{asChild:!0,...n,focusable:!0,children:a.jsx(J.a,{...s,ref:e,onKeyDown:he(t.onKeyDown,r=>{r.key===" "&&r.currentTarget.click()})})})});ao.displayName=io;var Gt="ToolbarToggleGroup",co=g.forwardRef((t,e)=>{const{__scopeToolbar:o,...s}=t,n=Rt(Gt,o),r=Bt(o);return a.jsx(be,{"data-orientation":n.orientation,dir:n.dir,...r,...s,ref:e,rovingFocus:!1})});co.displayName=Gt;var lo="ToolbarToggleItem",uo=g.forwardRef((t,e)=>{const{__scopeToolbar:o,...s}=t,n=Bt(o),r={__scopeToolbar:t.__scopeToolbar};return a.jsx(rt,{asChild:!0,...r,children:a.jsx(ve,{...n,...s,ref:e})})});uo.displayName=lo;var fo=It,mo=Yt,po=(t=>(t.CODE="code",t.WRITING="writing",t))(po||{});const X=({children:t,toolbarType:e})=>a.jsx(fo,{className:M("m-0 flex h-10 w-fit min-w-0 flex-shrink items-center overflow-hidden rounded-xl border border-token-border-light bg-token-main-surface-primary",yt,e==="code"?"p-0":"p-1"),children:t}),Vt=({icon:t,hideLabel:e,label:o})=>a.jsxs(a.Fragment,{children:[a.jsx(t,{className:M("icon-sm",{"mr-0.5 text-token-text-tertiary":!e,"text-token-text-primary":e})}),!e&&a.jsx("span",{className:"truncate text-sm text-token-text-primary",children:o})]}),Xt=At(rt)`flex h-full items-center gap-1 rounded-lg px-2.5 hover:bg-[#f5f5f5] disabled:opacity-50 disabled:cursor-not-allowed dark:hover:bg-token-main-surface-secondary disabled:hover:bg-transparent`,ho=({label:t,icon:e,isDisabled:o=!1,hideLabel:s=!1,onClick:n,onMouseDown:r})=>a.jsx(Xt,{onClick:n,"aria-label":s?t:void 0,onMouseDown:r,disabled:o,children:a.jsx(Vt,{icon:e,hideLabel:s,label:t})}),Co=({icon:t,hideLabel:e,label:o,children:s,align:n="end"})=>a.jsxs(qt,{children:[a.jsx(Qt,{asChild:!0,children:a.jsx(Xt,{"aria-label":e?o:void 0,children:a.jsx(Vt,{icon:t,hideLabel:e,label:o})})}),a.jsx(te,{children:a.jsx(ee,{align:n,className:M(Y.toolbar,"popover"),sideOffset:8,children:s})})]});X.Separator=At(mo)`mx-1 p-0 list-none h-full w-[1px] bg-token-border-light`;X.Action=ho;X.Popover=Co;const go=t=>g.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},g.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4.5C7.5271 4.5 4 7.91095 4 12C4 13.6958 4.5996 15.263 5.62036 16.5254C5.80473 16.7534 5.87973 17.0509 5.82551 17.339C5.72928 17.8505 5.60336 18.3503 5.45668 18.8401C6.08722 18.743 6.69878 18.6098 7.2983 18.4395C7.54758 18.3687 7.81461 18.3975 8.04312 18.5197C9.20727 19.1423 10.5566 19.5 12 19.5C16.4729 19.5 20 16.0891 20 12C20 7.91095 16.4729 4.5 12 4.5ZM2 12C2 6.70021 6.53177 2.5 12 2.5C17.4682 2.5 22 6.70021 22 12C22 17.2998 17.4682 21.5 12 21.5C10.3694 21.5 8.82593 21.1286 7.46141 20.4675C6.36717 20.7507 5.2423 20.9253 4.06155 20.9981C3.72191 21.019 3.39493 20.8658 3.19366 20.5915C2.9924 20.3171 2.94448 19.9592 3.06647 19.6415C3.35663 18.8859 3.6004 18.1448 3.77047 17.399C2.65693 15.8695 2 14.0088 2 12ZM12 8C12.5523 8 13 8.44772 13 9V11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H13V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H11V9C11 8.44772 11.4477 8 12 8Z",fill:"currentColor"}));function Kt(t){const e=t();if(e==null)return;const{from:o,to:s,sourceFrom:n,sourceTo:r}=e;if(o==null||s==null||n==null||r==null){N.logError("Missing selection range on targeted edit",e);return}const i=bt.ASK;N.logButtonClick(R.TOOLBAR_ASK_CHATGPT,{action:i,sourceFrom:n,sourceTo:r}),P.startCommentingOn({type:D.SELECTION,from:o,to:s,sourceRange:{start:n,end:r},action:i})}function Eo(t,e,o){g.useEffect(()=>{if(o)return;const s=n=>{(n.metaKey||n.ctrlKey)&&n.key.toLowerCase()==="k"&&(n.preventDefault(),Kt(e))};return t?.addEventListener("keydown",s),()=>t?.removeEventListener("keydown",s)},[t,e,o])}const xo=({isSendDisabled:t=!1,getSelectionRange:e})=>{const o=gt(),s=()=>{Kt(e)};return a.jsx(X.Action,{isDisabled:t,label:o.formatMessage({id:"wOaJUU",defaultMessage:"Ask ChatGPT"}),onClick:s,icon:go})},Do=({getEditorDom:t,getToolbarPosition:e,getSelectionRange:o,toolbarType:s,children:n,onAddComment:r,isWaitingForCommentResponse:i=!1,isSendDisabled:c=!1})=>{const[{height:l,width:u},d]=$(),[f,m]=g.useState(!0),[p,h]=g.useState(!1),E=t(),C=j(({commentingOn:v})=>v),[x,T]=g.useState(null);Eo(E,o,c);const S=g.useCallback(()=>{const v=t(),A=document.getSelection();return!A||A.type!=="Range"||A.isCollapsed||!v?.contains(A.anchorNode)},[t]);g.useEffect(()=>{const v=oe(()=>{h(!0)},200,{leading:!0}),A=()=>{v.cancel(),h(!1)};return E?.addEventListener("pointerdown",v,{passive:!0}),document.addEventListener("pointerup",A,{passive:!0}),()=>{E?.removeEventListener("pointerdown",v),document.removeEventListener("pointerup",A)}},[E]),g.useEffect(()=>{const v=()=>{m(S())};return document.addEventListener("selectionchange",v,{passive:!0}),()=>{document.removeEventListener("selectionchange",v)}},[S]),Tt(()=>{if(f||S())return m(!0);try{const v=e({width:u,height:l});v!=null&&T(v)}catch(v){N.logError("Invalid position in getToolbarPosition",v)}},[l,u,f,S,e]);const y=a.jsxs(X,{toolbarType:s,children:[a.jsx(xo,{isSendDisabled:c,getSelectionRange:o}),n]}),b=!f&&!C&&x!=null;return a.jsxs(a.Fragment,{children:[a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none invisible fixed left-0 top-0 h-0 overflow-clip",children:a.jsx("div",{ref:d,children:y})}),a.jsx(H,{children:b&&a.jsx(k.div,{initial:{opacity:0,scale:.95},animate:{opacity:p?0:1,scale:p?.95:1},style:{top:x.top,left:x.left},exit:{opacity:0,scale:.95},transition:{type:"spring",bounce:.1,duration:.1,delay:p?0:.1},className:M("absolute",Y.toolbar,p?"pointer-events-none":"pointer-events-auto"),children:y})}),a.jsx(Pe,{toolbarPosition:x,commentingOn:C,isWaitingForCommentResponse:i,onAddComment:r})]})};function bo(t){let e=t;for(;e;){const s=window.getComputedStyle(e).overflowY;if(s==="auto"||s==="scroll")return e;e=e.parentElement}return null}function Bo(t,e){const o=V(),s=ne(),n=o();g.useEffect(()=>{const r=n?.dom;if(!r||t.length===0)return;const i=bo(r),c=e?Et(e,100):null;return i&&c&&i.addEventListener("scroll",c,{passive:!0}),()=>{c&&(i&&i.removeEventListener("scroll",c),c.cancel())}},[n,s,t,e])}let F=null;function Ro(){if(F!=null)return F;if(typeof window>"u")return 0;const t=document.createElement("div");t.style.width="100px",t.style.height="100px",t.style.overflow="scroll",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);try{F=t.offsetWidth-t.clientWidth}finally{document.body.removeChild(t)}return F}function Io(t){return t==null?null:t.scrollHeight>t.clientHeight}export{Mt as A,jo as C,Do as T,po as a,ze as b,X as c,Ro as g,Io as i,Bo as u};
//# sourceMappingURL=m4i8zm64eaaac6mw.js.map
