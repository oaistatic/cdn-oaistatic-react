import{r as w,j as n}from"./n1tvutderx19k1zs.js";import{C as G}from"./efy7hlvnkjpma8yn.js";import{D as F,a as q}from"./k9xm49otsb4eors5.js";import{T as J,a as K,A as k,u as Q,i as X,C as Y,g as Z}from"./kr7mc7a2lzdkfhek.js";import{C as $,a as z,b as tt}from"./kifwyvxkhdk7syb7.js";import{C as V}from"./ks79pfkjilmvsi5m.js";import{u as et,b as ot,c as rt,d as P}from"./b197edpr4dhgtcvc.js";import{g as nt,gB as it,gC as M}from"./c87uv1mutc86tiqk.js";import{aq as st,h as lt}from"./efuue3ezs0mj4ucx.js";import"./jjr3f7937xh0x5xl.js";import"./fzrn137102spawew.js";import"./ishe91rr928a0b40.js";import"./c4bztafthokyfj19.js";import"./bh0nczk7jf5nipy7.js";import"./d995zjnlydagrugw.js";import"./m3i9t52w2bjqxoks.js";import"./fmtdc70w9bxe7ngz.js";import"./ir7h5xb5yr2dttye.js";import"./pevkepdko1ob7sgk.js";import"./ecs2ptmt646v6gvn.js";import"./gb5z15gr4uo6e2ww.js";import"./jy24clh9s5sbm6a3.js";import"./n2mw1xqoowews9pe.js";import"./gy64pge8qevmvg7e.js";import"./gohrg29ji6orhvga.js";import"./lvedelvd2wa5y0ah.js";import"./oy248fbbcvutqmly.js";import"./bk8slwxjkdlmxjxm.js";import"./gr8do7n6orkpzwtb.js";import"./gffup1245353c03l.js";import"./bxe8lsbbwu66fmec.js";import"./cyghe4iwyyd3wk8r.js";import"./c1vsiyure2yziq8u.js";import"./o97za21c5v9glw28.js";function ct(t,e){const l=t.doc.lineAt(e.from);return e.from===l.from&&e.to-1===l.to}function at(t){const e=t.dom.querySelector(".cm-gutters");return e?e.offsetWidth:0}const mt=({onAddComment:t,isSendDisabled:e=!1,isWaitingForCommentResponse:l=!1})=>{const o=et(),u=ot(),c=rt(),L=w.useCallback(i=>{const{height:a,width:m}=i,r=o();if(!u||!r)return null;const d=u.selection.asSingle();if(d.ranges.length===0)return null;const s=d.ranges[0],{empty:D,to:O}=s;let{head:p}=s;const{platform:H}=nt();p=H==="web"?p:O;const g=p===O;let h=p;if(g&&ct(u,s)&&(h-=1),D)return null;const{left:v,top:x,bottom:R}=r.contentDOM.getBoundingClientRect(),{left:A,top:I,bottom:C}=st(r.coordsAtPos(h,g?-1:1)),E=at(r);function N(){if(g)return Math.max(A-v+E-m,E);let f=A-v+E;return f+m>c&&(f=-(m-c)),f}function W(f){const T=a*2,_=f.contentHeight-(C-R)>T&&window.innerHeight-C>T,y=C-x+8,B=I-x-a-8;return g&&_||B<0?{top:y,aboveOrBelow:k.BELOW}:{top:B,aboveOrBelow:k.ABOVE}}const b=W(r);return{left:N(),top:b.top,aboveOrBelow:b.aboveOrBelow,toolbarSize:i}},[u,o,c]),j=w.useCallback(()=>o()?.dom??null,[o]);return n.jsx(J,{onAddComment:t,isWaitingForCommentResponse:l,isSendDisabled:e,toolbarType:K.CODE,getToolbarPosition:L,getEditorDom:j,getSelectionRange:()=>{const i=o();if(!i)return null;const{state:a}=i,m=a.selection.asSingle();if(m.ranges.length===0)return null;const r=m.ranges[0],{from:d,to:s}=r;return d==null||s==null?null:{from:d,to:s,sourceFrom:d,sourceTo:s}}})};function dt({diff:t}){return Q(t?.edits??[]),null}function ut(t,e,l){const o=l?Z():0;return t<=1e3-o?t-(e?z:0):t-(e?tt:0)}const Kt=({comments:t,currentlyStreamingLineIndex:e,isPreview:l=!1,isWaitingForCommentResponse:o=!1,isSendDisabled:u=!1,readonlyReason:c,isRequestActive:L=!1,language:j,value:i,textdocDiff:a,onAcceleratorsExpandedChange:m,onAddComment:r,onAcceptComment:d,onDismissComment:s,onBlur:D,onSave:O,onChange:p,onCancelRequest:H,getStableCommentId:g=lt,commentsMode:h=V.ENABLED,hideToolbar:v,hideAccelerators:x=!1,onSubmitAccelerator:R,modelCursor:A,codemirrorRef:I})=>{const C=w.useRef(null),[{width:E},N]=it(),W=w.useRef(null),b=t.length>0,f=W.current,T=ut(E,b,X(f)??!1),_=P(({commentingOn:S})=>S),y=P(({hoveredCommentId:S})=>S),B=P(({focusedCommentId:S})=>S);w.useEffect(()=>{C.current?.UNSAFE_setValue(i||"")},[i]);const U=E-T;return n.jsx("div",{className:$.code,ref:M(N,W),children:n.jsxs(G,{id:"codemirror",comments:h===V.ALL_HIDDEN?void 0:t,commentingOn:_,currentlyStreamingLineIndex:e,hoveredCommentId:y,focusedCommentId:B,language:j,readonlyReason:c,onChange:p,value:i,textdocDiff:a,editorRef:M(C,I),width:T,modelCursor:A,isPreview:l,onBlur:D,onSave:O,children:[n.jsxs(G.EditorChildren,{children:[!v&&n.jsx(mt,{onAddComment:r,isSendDisabled:u,isWaitingForCommentResponse:o}),h!==V.ALL_HIDDEN&&n.jsx("div",{className:b?"mr-4":"",children:n.jsx(Y,{getStableCommentId:g,availableWidth:U,comments:t,commentsMode:h,onAddComment:r,onAcceptComment:d,onDismissComment:s,isWaitingForCommentResponse:o,isRequestActive:L,disableBlockComments:!0})})]}),n.jsxs(G.ContextChildren,{children:[a&&n.jsx(dt,{diff:a}),!x&&n.jsx(F,{isRequestActive:L,isVisuallyHidden:u||!!c?.isStreamingFromNative||c?.isReadonly&&!c.isStreaming,onSubmit:R,onCancel:H,actions:q,onExpandedChange:m})]})]})})};export{Kt as CodeComposer};
//# sourceMappingURL=gz4tc69kss8on5vm.js.map
