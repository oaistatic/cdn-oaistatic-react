import{r as C,c as gt,j as a,au as _,aw as Y,b1 as Kt}from"./n1tvutderx19k1zs.js";import{gA as zt,nj as Wt,gz as $,dw as L,db as Ct,dx as I,nk as it,gL as $t,gM as Zt,gN as qt,gO as Jt,d as Qt,i2 as te}from"./pceg3mlzf8dzw9ob.js";import{a7 as R,a6 as P,e as ee,d as j,h as Et,a9 as oe,aa as xt,ab as ne,ac as bt,ad as se,ae as re}from"./xoi80qjaxo01l8ev.js";import{C as at}from"./m63dc3fsvxbbdk5v.js";import{E as J,Z as G,c as vt,f as ie,G as w,b as ct}from"./cbo9u87sapdr5cy5.js";import{u as U,i as Z,e as ae}from"./fsxj38wqj2utmatn.js";import{H as z,g3 as ce,d as M,c as le,d_ as yt,q as tt,f2 as ue,aW as q,g9 as de,cM as Tt,cv as fe,cN as me,cO as St,aX as pe,bo as Ot}from"./n26mv7rx7nquqst2.js";import{X as At,Y as Nt,u as he,v as ge,H as Ce}from"./neblectozdsjxjkm.js";import{c as Lt,R as Ee,I as xe}from"./jwxg4nug580e3rsw.js";import{u as be}from"./bxe8lsbbwu66fmec.js";import{T as ve}from"./ecp3vwsjvu9v61q0.js";import{i as ye}from"./g7id7a4lbm55wuqm.js";var D=(t=>(t[t.up=-1]="up",t[t.down=1]="down",t))(D||{}),W=(t=>(t.COMMENT="comment",t.COMPOSER="composer",t))(W||{}),O=(t=>(t.COLLAPSED="collapsed",t.EXPANDED="expanded",t))(O||{});const wt=([t,e],[o,s])=>{const n=t+e,r=o+s;return t<r&&o<n},et=([t,e])=>t+e,H=t=>{if(t.type===O.COLLAPSED)return[t.offsetY??0,0];const{offsetY:e,shiftY:o=0,height:s=0}=t,n=e+o;return o<0?[n,s+Math.abs(o)]:[n,s]},Te=(t,e,o)=>{if(!wt(t,e))return null;const[s,n]=t,r=s+n,[i,c]=e,l=i+c,u=i-r,d=l-s;return o===D.up?u:d};var Pt=(t=>(t.ABOVE="above",t.BELOW="below",t))(Pt||{});function X(t,e){return z(t.coordsAtPos(e))}const lt=360,Se=250,Mt=44,ut=.5,dt=[.5,.9,1],Oe=[1,.75,.2],Ae=({onClose:t,onSubmit:e,opensOverDocument:o=!1,opensFromGutter:s=!1,gutterHasComments:n=!1},r)=>{const i=gt(),c=C.useRef(null),l=C.useRef(!1),[u,d]=C.useState(""),[f,m]=C.useState(!0),p=()=>{d(""),t?.(l.current)},h=(b=u)=>{l.current=!0,e?.(b),d("")},E=ce(({windowWidth:b})=>o?b<lt+100?Se:lt:J,0),g={};s&&(g.top=-12),o&&s?g.right=0:g.left=0;let x="";s&&!o?x="8px 50%":s&&o?x="calc(100% + 8px) 50%":o&&(x="center left");let T=0;s&&!o&&n&&(T=ie);const y=b=>{const{metaKey:k,shiftKey:S,key:A}=b;A==="Enter"&&u&&!(S||k)?(h(),b.preventDefault()):A==="Escape"&&(d(""),t?.(!1))},v=i.formatMessage({id:"VvfbvY",defaultMessage:"Edit or explain..."});return a.jsx(_.div,{ref:zt(c,r),className:M("absolute flex items-center",G.commentComposer),style:{...g,minHeight:Mt},transition:{type:"spring",bounce:.18,duration:.48},initial:{translateX:0},animate:{translateX:T},exit:{translateX:0},children:a.jsx(_.div,{className:M("no-scrollbar relative z-10 flex items-center overflow-x-hidden border border-token-border-light",vt,{"rounded-full":f,"rounded-2xl":!f}),initial:{width:o?J:24,scaleX:o?ut:void 0,scale:o?void 0:ut},animate:{width:E,scaleX:o?dt:void 0,scale:o?void 0:dt},exit:{filter:"blur(16px)",scale:o?void 0:Oe,width:o?J:24,opacity:o?0:[1,1,0]},transition:{type:"spring",bounce:o?.14:0,duration:.28,scale:{type:"tween",duration:.2},opacity:{type:"tween",time:[0,.95,1]}},style:{transformOrigin:x},children:a.jsxs(_.div,{className:"relative z-0 flex w-full items-center bg-token-main-surface-primary px-4 py-2.5",children:[a.jsx(_.div,{className:"backdrop-saturate-25 absolute inset-0 z-[-1] bg-gray-50/75 backdrop-blur-3xl dark:bg-gray-700/75",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",duration:.2}}),a.jsx(ye,{"aria-placeholder":v,value:u,className:"w-full resize-none border-0 bg-transparent px-1 py-0 pr-2 text-token-text-primary outline-0 placeholder:text-token-text-secondary focus:ring-0 focus-visible:ring-0",autoFocus:!0,maxRows:4,onBlur:p,onHeightChange:(b,{rowHeight:k})=>{m(Math.floor(b/k)<=1)},onChange:({target:{value:b}})=>d(b),onKeyDown:y}),!u&&a.jsx("span",{"aria-hidden":!0,className:"absolute inline-block text-nowrap pl-1 text-token-text-secondary",children:v}),a.jsx(_.button,{className:M("-mr-1.5 h-6 w-6 rounded-full bg-black text-center dark:bg-white",{"self-end":!f}),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",duration:.1},onMouseDown:()=>h(),children:a.jsx(Wt,{className:"h-6 w-6 text-white dark:text-black"})})]})})})},kt=C.forwardRef(Ae),Ne=(t,e)=>{if(e?.type!==R.SELECTION)return null;try{const{from:o,to:s}=e,{top:n}=t.dom.getBoundingClientRect(),{bottom:r,top:i}=X(t,o),{bottom:c}=X(t,s),l=Z(t)?-30:-24;let u=r-n+l;const d=i-n;return u=c-n+8,{composerTop:u,loadingTop:d}}catch(o){return L.logError("Invalid position in SelectionCommentComposer",o),null}},Le=({toolbarPosition:t,composerRect:e,view:o})=>{let{width:s,height:n}=e;if(n||=Mt,o==null||t==null)return null;const{right:r,left:i}=o.dom.getBoundingClientRect(),{left:c,top:l,aboveOrBelow:u,toolbarSize:d}=t,f=l-(u===Pt.ABOVE&&n!==0?n-d.height:0),m=ae(o)?12:0;return{left:Math.min(c,r-i-s-m),composerTop:f,aboveOrBelow:u}},we=({toolbarPosition:t,commentingOn:e,isWaitingForCommentResponse:o=!1,onAddComment:s})=>{const n=U()(),[r,i]=$(),c=Le({view:n,toolbarPosition:t,composerRect:r});if(n==null||c==null)return null;const{left:l,composerTop:u}=c,d=f=>{if(e?.type!==R.SELECTION)return;const{action:m,sourceRange:p}=e;s?.(f,m,p,e.type)};return a.jsx(Y,{children:e?.type===R.SELECTION&&!o&&a.jsx("div",{className:M("absolute",G.commentComposer),style:{left:l,top:u},children:a.jsx(kt,{opensOverDocument:!0,onClose:f=>{f||(P.cancelCommentingOn(),n&&Z(n)&&!n.state.selection.empty&&n.dispatch(n.state.tr.setSelection(new ve(n.state.selection.$from))),document.getSelection()?.removeAllRanges())},onSubmit:d,ref:i})},"composer")})};function Pe(t,e,o){const s=t+e;for(const n of o.values()){const r=n.start,i=n.end;if(t<i&&r<s)return!0}return!1}const Me=50,ke=200,_e=[ge.proseMirrorNodeName(),Ce.proseMirrorNodeName()],je=t=>t?t.isBlock:!1,De=t=>{if(!t)return!1;const{isBlock:e,type:{name:o}}=t;return e&&_e.includes(o)},Be=(t,e,o,s)=>{const n=t.posAtCoords({left:e,top:o});if(n==null)return;const{pos:r,inside:i}=n;if(i===-1)return;const{state:c}=t;let l=r,u=c.doc.nodeAt(l);for(;!je(u)&&l>=0;)l--,u=c.doc.nodeAt(l);if(!u||!De(u))return;const d=s!=null&&Pe(l,u.nodeSize,s);return{node:u,nodeHasComment:d,pos:l}};function Re(t,e,o){const s=Be(t,e.x,e.y,o);if(s==null)return null;const{node:n,pos:r,nodeHasComment:i}=s,{top:c}=t.coordsAtPos(0);function l(){const p=r+1;return he(t.state.doc,p)&&t.state.doc.nodeAt(p)?.isText?t.coordsAtPos(p).top:t.coordsAtPos(r).top}const u=l(),d=u-c;return{height:t.coordsAtPos(r+n.nodeSize-1).bottom-u,nodeHasComment:i,mouseEnteredAt:Date.now(),yOffset:d,pos:r}}function Ie(t){const e=C.useRef(!1),o=C.useRef(!1),[s,n]=C.useState(null),r=ee(),i=r()?.dom,c=C.useRef(!1),l=j(({visibleBlockCommentLauncher_DEBUG_ONLY:f})=>f),u=C.useCallback(Ct(f=>{e.current=!0;const{commentingOn:m}=j.getState();if(o.current||m!=null)return;const p=r();if(p==null||!e.current)return n(null);const{dom:h,state:E}=p,g=At(Nt,E)?.positions;if(g==null)return n(null);const x=Re(p,f,g);if(x==null||x.nodeHasComment&&t===w.COLLAPSED){n(null);return}if(c.current&&x.yOffset!==s?.yOffset){n(null);return}const T=p.coordsAtPos(0),y=h.getBoundingClientRect().width,b=(f.x-T.left)/y>=Me/100;n(b?x:null)},ke),[r,c,s]);C.useEffect(()=>{if(i!=null)return le(i,{mouseenter:()=>{e.current=!0,o.current=!1},mouseleave:({relatedTarget:f})=>{if(u.cancel(),f instanceof HTMLElement&&f.closest("[data-block-comment-launcher]")){o.current=!0;return}o.current=!1,e.current=!1,j.getState().commentingOn==null&&n(null)},mousemove:u})},[r,i,t,u]);const d=C.useCallback(({relatedTarget:f})=>{const{commentingOn:m}=j.getState();m==null&&f!==i&&(o.current=!1,n(null))},[i]);return{visibleBlockComment:l??s,handleMouseLeave:d,onComposerVisibleChange:f=>{c.current=f}}}const He=({isWaitingForCommentResponse:t=!1,opensOverDocument:e=!1,hasComments:o=!1,activeBlockComment:s,composerRef:n,onLaunchComposer:r,onMouseLeave:i,onSubmit:c})=>{const[l,u]=C.useState(!1),{yOffset:d,height:f,pos:m}=s,p=()=>{u(!0),r?.(),L.logButtonClick(I.BLOCK_COMMENT_LAUNCHER),P.startCommentingOn({type:R.BLOCK,pos:m})},h=x=>{x||(u(!1),P.cancelCommentingOn())},E=x=>{u(!1),c?.(x)};C.useEffect(()=>()=>{P.mouseLeaveBlock()},[]);const g=o&&l?e?-88:88:0;return a.jsx(_.div,{className:M("pointer-events-auto absolute flex h-6 w-5 origin-[14px_50%] items-start after:absolute after:-inset-4 after:content-['']",G.commentComposer),initial:!1,animate:{opacity:1},exit:{opacity:0},transition:{type:"spring",duration:.2,bounce:.1},style:{top:0,height:f,translateY:d},onMouseLeave:i,"data-block-comment-launcher":!0,children:a.jsxs(Y,{children:[l?a.jsx(kt,{ref:n,opensFromGutter:!0,onClose:h,onSubmit:E,gutterHasComments:o,opensOverDocument:e},"composer"):null,a.jsx(_.button,{initial:{opacity:0},animate:{opacity:l?0:1,translateX:g},transition:{duration:.15,translateX:{type:"spring",bounce:.18,duration:.48}},className:"group absolute z-10 flex h-6 gap-1 bg-transparent after:absolute after:-inset-y-4 after:-left-1 after:-right-4 after:content-['']",onClick:p,onMouseEnter:()=>P.mouseEnterBlock(m),onMouseLeave:()=>P.mouseLeaveBlock(),disabled:l||t,children:a.jsx(oe,{isLoading:t})},"launcer")]})})},Ye=({isWaitingForCommentResponse:t=!1,isRequestActive:e=!1,hasComments:o=!1,composerRef:s,gutterMode:n,onAddComment:r})=>{const i=Et(),{visibleBlockComment:c,handleMouseLeave:l,onComposerVisibleChange:u}=Ie(n),d=f=>{if(!c||!i)return;const{doc:m}=i,{pos:p}=c,h=m.nodeAt(p);if(!h)return;const{attrs:{start:E,end:g}}=h;r?.(f,xt.ASK,{start:E,end:g},R.BLOCK)};return a.jsx(Y,{onExitComplete:()=>u(!1),children:c&&i&&(t||!e)&&a.jsx(He,{composerRef:s,isWaitingForCommentResponse:t,opensOverDocument:n===w.COLLAPSED,activeBlockComment:c,hasComments:o,onSubmit:d,onMouseLeave:l,onLaunchComposer:()=>u(!0)},"launcher")})},Ge=({onAcceptComment:t,onDismissComment:e,disableActions:o=!1,entry:s,isGutterCollapsed:n=!1,isHovered:r=!1,isFocused:i=!1,isSomeCommentFocused:c=!1})=>{const{offsetY:l,type:u}=s,[d,f]=Kt();let m=null;if(u===O.COLLAPSED)m=!i&&a.jsx(ne,{offsetY:l,count:s.count,onClick:()=>{L.logButtonClick(I.COLLAPSED_COMMENT),P.focusComment(s.children[0])}},"collapsed");else{const{comment:p}=s;if(p==null||p.content===""||p.status===it.DISMISSED)m=null;else if(p.status===it.ACCEPT_INITIATED)m=a.jsx("div",{className:"absolute",style:{top:l},children:a.jsx(bt,{})},"loading");else{const{id:h}=p;m=a.jsx(se,{isSomeCommentFocused:c,isHovered:r,isFocused:i,offsetY:l,disableActions:o,onClick:()=>{L.logButtonClick(I.EXPANDED_COMMENT),P.focusComment(h)},onMouseEnter:()=>P.mouseEnterComment(h),onMouseLeave:()=>P.mouseLeaveComment(),comment:p,onAccept:()=>{L.logButtonClick(I.COMMENT_ACCEPT,{commentId:h}),t?.(h)},onDismiss:()=>{L.logButtonClick(I.COMMENT_DISMISS,{commentId:h}),e?.(h)},opensOverDocument:n},"expanded")}}return a.jsx(Y,{onExitComplete:()=>f?.(),children:d&&m})},ft=({onMeasureHeight:t,comment:e,isFocused:o=!1})=>{const[{height:s},n]=$();return yt(()=>{t?.(s)},[s]),a.jsx(re,{ref:n,comment:e,isFocused:o,disableAnimations:!0})},Ve=({comments:t,onMeasure:e,getStableCommentId:o})=>{const s=C.useRef(new Map),n=C.useRef(new Map),r=C.useRef(null),i=(c,l,u=!1)=>{l&&(u?n.current.set(o(c),l):s.current.set(o(c),l),r.current&&cancelAnimationFrame(r.current),r.current=requestAnimationFrame(()=>{e?.({focusedHeights:new Map(n.current),heights:new Map(s.current)}),r.current=null}))};return t?.length?a.jsxs("div",{className:"pointer-events-none invisible fixed left-0 top-0 overflow-clip","aria-hidden":"true",children:[t.map(c=>a.jsx(ft,{comment:c,onMeasureHeight:l=>i(c.id,l)},o(c.id))),t.map(c=>a.jsx(ft,{isFocused:!0,comment:c,onMeasureHeight:l=>i(c.id,l,!0)},`${o(c.id)}-focused`))]}):null},mt=(t,e,o)=>{let s=o+e;for(;e===D.down?s<t.length:s>-1;){const n=t[s],r=t[s-e],i=Te(H(n),H(r),e);if(i!=null&&n.type!==O.COLLAPSED)n.shiftY+=i;else break;s+=e}},pt=(t,e)=>{for(const o of e){const{index:s,amount:n}=o,r=t[s];r.type===O.EXPANDED&&(r.shiftY+=n),mt(t,D.down,s),mt(t,D.up,s);for(const i of t)i.type!==O.COLLAPSED&&(i.offsetY+=i.shiftY,i.shiftY=0)}},Xe=(t,e)=>{const o=[],[s,n]=e,r=s+n;for(let i=0;i<t.length;i++){const c=t[i],[l]=H(c),u=[l,c.type===O.EXPANDED?c.height:0],[d,f]=u;if(wt(u,e)){const m=d+f,p=s-m,h=r-d,g=(Math.abs(p)<Math.abs(h)?D.up:D.down)===D.up?p:h;o.push({index:i,amount:g})}}return o},Ue=({gutterMode:t,focusedCommentId:e,gutterPositions:o,getCommentKey:s,getComment:n})=>{if(!o?.size)return[];const r=new Map,i=[];let c=null,l=-1;for(const d of o.values()){if(d.type===W.COMPOSER){c=[d.offsetY,d.height];continue}const{commentId:f,height:m,collapsedOffsetY:p,offsetY:h}=d;if(t===w.EXPANDED){const x=tt(i),T=x?et(H(x)):0;let y=h;x&&y<=T&&(y=T),r.set(f,{originalOffsetY:h,offsetY:y}),e===f&&(l=i.length),i.push({key:s(f),comment:n(f),type:O.EXPANDED,height:m,offsetY:y,shiftY:0});continue}let E=i.findIndex(({offsetY:x,type:T})=>T===O.COLLAPSED&&x===p),g=i[E]??null;if(!g)g={key:i.length,type:O.COLLAPSED,offsetY:h,count:1,children:[f]},E=i.length,i.push(g);else{if(g.type!==O.COLLAPSED)throw new Error("Collapsed parent type expected to be collapsed");g.count+=1,g.children.push(f),g.offsetY=p}e===f&&(l=E)}const u=i[l];if(t===w.COLLAPSED&&u?.type===O.COLLAPSED){const d=[];for(let f=0;f<u.children.length;f++){const m=u.children[f];m===e&&(l+=f+1);const p=tt(d),h=p?et(H(p)):0,E=o.get(m)?.offsetY??0,g=Math.max(h,E);r.set(m,{originalOffsetY:E,offsetY:g}),d.push({type:O.EXPANDED,key:s(m),comment:n(m),offsetY:g,height:o.get(m)?.height??0,shiftY:0})}i.splice(l,0,...d)}if(e){const d=r.get(e);if(!d)return i;const{offsetY:f,originalOffsetY:m}=d,p=m-f,h=[{amount:p,index:l}];let E=l+1;for(;E<i.length;){const g=i[E],{type:x}=g;let T=p;if(x===O.EXPANDED&&g.comment?.id){const{offsetY:y,originalOffsetY:v}=z(r.get(g.comment.id));if(y===v)break;T=Math.max(v-y,p)}else break;h.push({amount:T,index:E}),E++}h.length&&pt(i,h)}else if(t!==w.COLLAPSED&&c){const d=Xe(i,c);pt(i,d)}return i},Fe=t=>{try{return Ue(t)}catch(e){return L.logError("Generating comment gutter entries",e),[]}},Ke=t=>"length"in t?t.length===0:t.nodeSize===0,Q=12,ze=({composerHeight:t,getCommentHeight:e,getCollapsedStartPos:o,commentingOn:s,commentPositions:n,view:r})=>{if(!n||!r||Ke(r.state.doc))return null;const{top:i}=r.dom.getBoundingClientRect(),c=Array.from(n.entries()).sort(([u,d],[f,m])=>d.start-m.start),l=new Map;for(const[u,{start:d}]of c)try{const f=o?.(d)??d,{top:m}=X(r,f),{top:p}=X(r,d),h=p-i,E=m-i,g=(e(u)??0)+Q;l.set(u,{commentId:u,height:g,collapsedOffsetY:E,offsetY:h,type:W.COMMENT})}catch{continue}if(s?.type===R.BLOCK){const{pos:u}=s;try{const{top:d}=X(r,u),m=d-i-Q;l.set("block-composer",{type:W.COMPOSER,height:(t??0)+Q,offsetY:m})}catch{}}return l},_t=(t,e)=>e.nodeAt(t)?.isBlock?t+1:_t(t-1,e);function We(t){const e=Et(),s=U()?.();if(!s)return null;if(Z(s)){if(!e)return null;const n=At(Nt,e);return n?n.positions:null}return new Map(t.map(n=>[n.id,n.at]))}const $e=({gutterMode:t,focusedCommentId:e,commentingOn:o,comments:s,getStableId:n})=>{const[{height:r},i]=$(),c=U(),[l,u]=C.useState(()=>new Map),[d,f]=C.useState(()=>new Map),m=C.useCallback(({focusedHeights:v,heights:b})=>{u(v),f(b)},[]),p=v=>{const b=n(v);return v===e?l.get(b)??0:d.get(b)??0},h=c(),E=h!=null&&Z(h)?v=>_t(v,h.state.doc):void 0,g=new Map(s?.map(v=>[n(v.id),v])),x=We(s),T=ze({composerHeight:r,commentingOn:o,getCommentHeight:p,getCollapsedStartPos:E,commentPositions:x,view:h}),y=Fe({gutterMode:t,gutterPositions:T,focusedCommentId:e,getComment:v=>g.get(n(v))??null,getCommentKey:n});return{blockComposerRef:i,onMeasureComments:m,gutterEntries:y}};function Ze(){const e=U()(),o=j(({commentingOn:r})=>r),n=e==null?null:Ne(e,o);return n==null?null:a.jsx(_.div,{className:"absolute",style:{top:n.loadingTop},initial:!1,animate:{opacity:1,scale:1},exit:{opacity:0,scale:0},transition:{delay:.2},children:a.jsx(bt,{})},"selection-loading")}const qe=t=>a.jsx("div",{className:"absolute",style:{top:et(H(t))},children:a.jsx("div",{className:"h-[max(3rem,18vh)] w-1"})}),Mo=({availableWidth:t,comments:e,commentsMode:o,disableBlockComments:s=!1,isRequestActive:n=!1,isWaitingForCommentResponse:r=!1,onAddComment:i,onAcceptComment:c,onDismissComment:l,getStableCommentId:u})=>{const d=j(({focusedCommentId:N})=>N),f=j(({hoveredCommentId:N})=>N),m=j(({commentingOn:N})=>N),p=ue(),h=t<ct?w.COLLAPSED:w.EXPANDED,{onMeasureComments:E,blockComposerRef:g,gutterEntries:x}=$e({comments:e,getStableId:u,gutterMode:h,focusedCommentId:d,commentingOn:m}),T=x.length>0,y=m!=null&&!r&&m.type!=="selection"||T,b=(()=>{if(!y)return 0;switch(h){case w.COLLAPSED:return 0;case w.EXPANDED:return ct}})(),k=m?.type==="selection",S=tt(x),A=o===at.ENABLED&&p&&!k&&!s;return a.jsxs(_.div,{className:M("pointer-events-none relative flex h-full flex-shrink-0",G.commentGutter,h===w.COLLAPSED&&b?"basis-[32px]":"basis-0"),initial:{width:0,opacity:0},animate:{width:b,opacity:1},exit:{width:0,opacity:0},children:[a.jsx(Ve,{getStableCommentId:u,comments:e,onMeasure:E}),a.jsxs("div",{className:M("pointer-events-auto absolute bottom-0 left-0 top-0 w-0 overflow-visible",{"pl-2":y||!s}),children:[a.jsx(Y,{children:x.map(N=>{const{key:Xt,type:rt}=N,Ut=!!d&&rt===O.EXPANDED&&N.comment?.id===d,Ft=!!d&&N.type===O.COLLAPSED&&N.children.includes(d);return a.jsx(Ge,{isGutterCollapsed:h===w.COLLAPSED,isSomeCommentFocused:!!m||!!d,isHovered:rt===O.EXPANDED&&N.comment?.id===f,isFocused:Ut||Ft,entry:N,disableActions:n||r||o===at.COMMENTS_READONLY,onAcceptComment:V=>{try{c?.(z(e?.find(B=>B.id===V)))}catch(B){L.logError(`Comment ${V} not found`,B)}},onDismissComment:V=>{try{l?.(z(e?.find(B=>B.id===V)))}catch(B){L.logError(`Comment ${V} not found`,B)}}},Xt)})}),T&&S&&a.jsx(qe,{...S}),A&&a.jsx(Ye,{composerRef:g,gutterMode:h,onAddComment:i,isWaitingForCommentResponse:r,isRequestActive:n,hasComments:T}),r&&k&&a.jsx(Ze,{})]})]})};var Je="Separator",ht="horizontal",Qe=["horizontal","vertical"],jt=C.forwardRef((t,e)=>{const{decorative:o,orientation:s=ht,...n}=t,r=to(s)?s:ht,c=o?{role:"none"}:{"aria-orientation":r==="vertical"?r:void 0,role:"separator"};return a.jsx(q.div,{"data-orientation":r,...c,...n,ref:e})});jt.displayName=Je;function to(t){return Qe.includes(t)}var eo=jt,ot="Toolbar",[oo,ko]=de(ot,[Tt,Lt]),nt=Tt(),Dt=Lt(),[no,Bt]=oo(ot),Rt=C.forwardRef((t,e)=>{const{__scopeToolbar:o,orientation:s="horizontal",dir:n,loop:r=!0,...i}=t,c=nt(o),l=fe(n);return a.jsx(no,{scope:o,orientation:s,dir:l,children:a.jsx(me,{asChild:!0,...c,orientation:s,dir:l,loop:r,children:a.jsx(q.div,{role:"toolbar","aria-orientation":s,dir:l,...i,ref:e})})})});Rt.displayName=ot;var It="ToolbarSeparator",Ht=C.forwardRef((t,e)=>{const{__scopeToolbar:o,...s}=t,n=Bt(It,o);return a.jsx(eo,{orientation:n.orientation==="horizontal"?"vertical":"horizontal",...s,ref:e})});Ht.displayName=It;var so="ToolbarButton",st=C.forwardRef((t,e)=>{const{__scopeToolbar:o,...s}=t,n=nt(o);return a.jsx(St,{asChild:!0,...n,focusable:!t.disabled,children:a.jsx(q.button,{type:"button",...s,ref:e})})});st.displayName=so;var ro="ToolbarLink",io=C.forwardRef((t,e)=>{const{__scopeToolbar:o,...s}=t,n=nt(o);return a.jsx(St,{asChild:!0,...n,focusable:!0,children:a.jsx(q.a,{...s,ref:e,onKeyDown:pe(t.onKeyDown,r=>{r.key===" "&&r.currentTarget.click()})})})});io.displayName=ro;var Yt="ToolbarToggleGroup",ao=C.forwardRef((t,e)=>{const{__scopeToolbar:o,...s}=t,n=Bt(Yt,o),r=Dt(o);return a.jsx(Ee,{"data-orientation":n.orientation,dir:n.dir,...r,...s,ref:e,rovingFocus:!1})});ao.displayName=Yt;var co="ToolbarToggleItem",lo=C.forwardRef((t,e)=>{const{__scopeToolbar:o,...s}=t,n=Dt(o),r={__scopeToolbar:t.__scopeToolbar};return a.jsx(st,{asChild:!0,...r,children:a.jsx(xe,{...n,...s,ref:e})})});lo.displayName=co;var uo=Rt,fo=Ht,mo=(t=>(t.CODE="code",t.WRITING="writing",t))(mo||{});const F=({children:t,toolbarType:e})=>a.jsx(uo,{className:M("m-0 flex h-10 w-fit min-w-0 flex-shrink items-center overflow-hidden rounded-xl border border-token-border-light bg-token-main-surface-primary",vt,e==="code"?"p-0":"p-1"),children:t}),Gt=({icon:t,hideLabel:e,label:o})=>a.jsxs(a.Fragment,{children:[a.jsx(t,{className:M("icon-sm",{"mr-0.5 text-token-text-tertiary":!e,"text-token-text-primary":e})}),!e&&a.jsx("span",{className:"truncate text-sm text-token-text-primary",children:o})]}),Vt=Ot(st)`flex h-full items-center gap-1 rounded-lg px-2.5 hover:bg-[#f5f5f5] disabled:opacity-50 disabled:cursor-not-allowed dark:hover:bg-token-main-surface-secondary disabled:hover:bg-transparent`,po=({label:t,icon:e,isDisabled:o=!1,hideLabel:s=!1,onClick:n,onMouseDown:r})=>a.jsx(Vt,{onClick:n,"aria-label":s?t:void 0,onMouseDown:r,disabled:o,children:a.jsx(Gt,{icon:e,hideLabel:s,label:t})}),ho=({icon:t,hideLabel:e,label:o,children:s,align:n="end"})=>a.jsxs($t,{children:[a.jsx(Zt,{asChild:!0,children:a.jsx(Vt,{"aria-label":e?o:void 0,children:a.jsx(Gt,{icon:t,hideLabel:e,label:o})})}),a.jsx(qt,{children:a.jsx(Jt,{align:n,className:M(G.toolbar,"popover"),sideOffset:8,children:s})})]});F.Separator=Ot(fo)`mx-1 p-0 list-none h-full w-[1px] bg-token-border-light`;F.Action=po;F.Popover=ho;const go=t=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t},C.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4.5C7.5271 4.5 4 7.91095 4 12C4 13.6958 4.5996 15.263 5.62036 16.5254C5.80473 16.7534 5.87973 17.0509 5.82551 17.339C5.72928 17.8505 5.60336 18.3503 5.45668 18.8401C6.08722 18.743 6.69878 18.6098 7.2983 18.4395C7.54758 18.3687 7.81461 18.3975 8.04312 18.5197C9.20727 19.1423 10.5566 19.5 12 19.5C16.4729 19.5 20 16.0891 20 12C20 7.91095 16.4729 4.5 12 4.5ZM2 12C2 6.70021 6.53177 2.5 12 2.5C17.4682 2.5 22 6.70021 22 12C22 17.2998 17.4682 21.5 12 21.5C10.3694 21.5 8.82593 21.1286 7.46141 20.4675C6.36717 20.7507 5.2423 20.9253 4.06155 20.9981C3.72191 21.019 3.39493 20.8658 3.19366 20.5915C2.9924 20.3171 2.94448 19.9592 3.06647 19.6415C3.35663 18.8859 3.6004 18.1448 3.77047 17.399C2.65693 15.8695 2 14.0088 2 12ZM12 8C12.5523 8 13 8.44772 13 9V11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H13V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V13H9C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H11V9C11 8.44772 11.4477 8 12 8Z",fill:"currentColor"})),Co=({isSendDisabled:t=!1,getSelectionRange:e})=>{const o=gt(),s=()=>{const n=e();if(n==null)return;const{from:r,to:i,sourceFrom:c,sourceTo:l}=n;if(r==null||i==null||c==null||l==null){L.logError("Missing selection range on targeted edit",n);return}const u=xt.ASK;L.logButtonClick(I.TOOLBAR_ASK_CHATGPT,{action:u,sourceFrom:c,sourceTo:l}),P.startCommentingOn({type:R.SELECTION,from:r,to:i,sourceRange:{start:c,end:l},action:u})};return a.jsx(F.Action,{isDisabled:t,label:o.formatMessage({id:"wOaJUU",defaultMessage:"Ask ChatGPT"}),onClick:s,icon:go})},_o=({getEditorDom:t,getToolbarPosition:e,getSelectionRange:o,toolbarType:s,children:n,onAddComment:r,isWaitingForCommentResponse:i=!1,isSendDisabled:c=!1})=>{const[{height:l,width:u},d]=$(),[f,m]=C.useState(!0),[p,h]=C.useState(!1),E=t(),g=j(({commentingOn:S})=>S),[x,T]=C.useState(null),y=C.useCallback(()=>{const S=t(),A=document.getSelection();return!A||A.type!=="Range"||A.isCollapsed||!S?.contains(A.anchorNode)},[t]);C.useEffect(()=>{const S=Qt(()=>{h(!0)},200,{leading:!0}),A=()=>{S.cancel(),h(!1)};return E?.addEventListener("pointerdown",S,{passive:!0}),document.addEventListener("pointerup",A,{passive:!0}),()=>{E?.removeEventListener("pointerdown",S),document.removeEventListener("pointerup",A)}},[E]),C.useEffect(()=>{const S=()=>{m(y())};return document.addEventListener("selectionchange",S,{passive:!0}),()=>{document.removeEventListener("selectionchange",S)}},[y]),yt(()=>{if(f||y())return m(!0);try{const S=e({width:u,height:l});S!=null&&T(S)}catch(S){L.logError("Invalid position in getToolbarPosition",S)}},[l,u,f,y,e]);const v=a.jsxs(F,{toolbarType:s,children:[a.jsx(Co,{isSendDisabled:c,getSelectionRange:o}),n]}),b=!f&&!g&&x!=null,k=be(b);return C.useEffect(()=>{!b&&k&&!g&&E?.focus()},[E,k,b,g]),a.jsxs(a.Fragment,{children:[a.jsx("div",{"aria-hidden":"true",className:"pointer-events-none invisible fixed left-0 top-0 h-0 overflow-clip",children:a.jsx("div",{ref:d,children:v})}),a.jsx(Y,{children:b&&a.jsx(_.div,{initial:{opacity:0,scale:.95},animate:{opacity:p?0:1,scale:p?.95:1},style:{top:x.top,left:x.left},exit:{opacity:0,scale:.95},transition:{type:"spring",bounce:.1,duration:.1,delay:p?0:.1},className:M("absolute",G.toolbar,p?"pointer-events-none":"pointer-events-auto"),children:v})}),a.jsx(we,{toolbarPosition:x,commentingOn:g,isWaitingForCommentResponse:i,onAddComment:r})]})};function Eo(t){let e=t;for(;e;){const s=window.getComputedStyle(e).overflowY;if(s==="auto"||s==="scroll")return e;e=e.parentElement}return null}function jo(t,e){const o=U(),s=te(),n=o();C.useEffect(()=>{const r=n?.dom;if(!r||t.length===0)return;const i=Eo(r),c=e?Ct(e,100):null;return i&&c&&i.addEventListener("scroll",c,{passive:!0}),()=>{c&&(i&&i.removeEventListener("scroll",c),c.cancel())}},[n,s,t,e])}let K=null;function Do(){if(K!=null)return K;if(typeof window>"u")return 0;const t=document.createElement("div");t.style.width="100px",t.style.height="100px",t.style.overflow="scroll",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);try{K=t.offsetWidth-t.clientWidth}finally{document.body.removeChild(t)}return K}function Bo(t){return t==null?null:t.scrollHeight>t.clientHeight}export{Pt as A,Mo as C,_o as T,mo as a,Ke as b,F as c,Do as g,Bo as i,jo as u};
//# sourceMappingURL=pdyeyi03xur7s9eo.js.map
