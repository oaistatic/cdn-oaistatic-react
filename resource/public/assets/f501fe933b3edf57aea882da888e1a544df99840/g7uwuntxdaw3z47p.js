import{r as w,j as n}from"./n1tvutderx19k1zs.js";import{C as G}from"./rkb92gmk6xjcvr6i.js";import{D as F,a as q}from"./fsxj38wqj2utmatn.js";import{T as z,a as J,A as k,u as K,i as Q,C as X,g as Y}from"./pdyeyi03xur7s9eo.js";import{C as Z,a as $,b as tt}from"./cbo9u87sapdr5cy5.js";import{C as V}from"./m63dc3fsvxbbdk5v.js";import{u as et,b as ot,c as rt,d as P}from"./xoi80qjaxo01l8ev.js";import{g as nt,gz as it,gA as M}from"./pceg3mlzf8dzw9ob.js";import{H as st,h as lt}from"./n26mv7rx7nquqst2.js";import"./neblectozdsjxjkm.js";import"./fzrn137102spawew.js";import"./ecp3vwsjvu9v61q0.js";import"./c4bztafthokyfj19.js";import"./nraolmtygmvq3wcf.js";import"./hexva2s1lo90zidg.js";import"./m3i9t52w2bjqxoks.js";import"./fmtdc70w9bxe7ngz.js";import"./g7id7a4lbm55wuqm.js";import"./pevkepdko1ob7sgk.js";import"./da0lloekhn03bypm.js";import"./hg2pcqdl92ment5e.js";import"./kodyf94rms2l778g.js";import"./dafzn6sg4vj6hamn.js";import"./gy64pge8qevmvg7e.js";import"./gohrg29ji6orhvga.js";import"./lvedelvd2wa5y0ah.js";import"./oy248fbbcvutqmly.js";import"./bk8slwxjkdlmxjxm.js";import"./m87kbgi8rvuhalc0.js";import"./gqlojvp2l4yo87we.js";import"./bxe8lsbbwu66fmec.js";import"./jwxg4nug580e3rsw.js";import"./jfxozbrcnsxchwcx.js";import"./cg9cr7bhamctxzet.js";function ct(t,e){const l=t.doc.lineAt(e.from);return e.from===l.from&&e.to-1===l.to}function at(t){const e=t.dom.querySelector(".cm-gutters");return e?e.offsetWidth:0}const mt=({onAddComment:t,isSendDisabled:e=!1,isWaitingForCommentResponse:l=!1})=>{const o=et(),u=ot(),c=rt(),L=w.useCallback(i=>{const{height:a,width:m}=i,r=o();if(!u||!r)return null;const d=u.selection.asSingle();if(d.ranges.length===0)return null;const s=d.ranges[0],{empty:D,to:O}=s;let{head:p}=s;const{platform:H}=nt();p=H==="web"?p:O;const g=p===O;let h=p;if(g&&ct(u,s)&&(h-=1),D)return null;const{left:v,top:x,bottom:R}=r.contentDOM.getBoundingClientRect(),{left:A,top:I,bottom:C}=st(r.coordsAtPos(h,g?-1:1)),E=at(r);function N(){if(g)return Math.max(A-v+E-m,E);let f=A-v+E;return f+m>c&&(f=-(m-c)),f}function W(f){const T=a*2,_=f.contentHeight-(C-R)>T&&window.innerHeight-C>T,y=C-x+8,j=I-x-a-8;return g&&_||j<0?{top:y,aboveOrBelow:k.BELOW}:{top:j,aboveOrBelow:k.ABOVE}}const b=W(r);return{left:N(),top:b.top,aboveOrBelow:b.aboveOrBelow,toolbarSize:i}},[u,o,c]),B=w.useCallback(()=>o()?.dom??null,[o]);return n.jsx(z,{onAddComment:t,isWaitingForCommentResponse:l,isSendDisabled:e,toolbarType:J.CODE,getToolbarPosition:L,getEditorDom:B,getSelectionRange:()=>{const i=o();if(!i)return null;const{state:a}=i,m=a.selection.asSingle();if(m.ranges.length===0)return null;const r=m.ranges[0],{from:d,to:s}=r;return d==null||s==null?null:{from:d,to:s,sourceFrom:d,sourceTo:s}}})};function dt({diff:t}){return K(t?.edits??[]),null}function ut(t,e,l){const o=l?Y():0;return t<=1e3-o?t-(e?$:0):t-(e?tt:0)}const Jt=({comments:t,currentlyStreamingLineIndex:e,isPreview:l=!1,isWaitingForCommentResponse:o=!1,isSendDisabled:u=!1,readonlyReason:c,isRequestActive:L=!1,language:B,value:i,textdocDiff:a,onAcceleratorsExpandedChange:m,onAddComment:r,onAcceptComment:d,onDismissComment:s,onBlur:D,onSave:O,onChange:p,onCancelRequest:H,getStableCommentId:g=lt,commentsMode:h=V.ENABLED,hideToolbar:v,hideAccelerators:x=!1,onSubmitAccelerator:R,modelCursor:A,codemirrorRef:I})=>{const C=w.useRef(null),[{width:E},N]=it(),W=w.useRef(null),b=t.length>0,f=W.current,T=ut(E,b,Q(f)??!1),_=P(({commentingOn:S})=>S),y=P(({hoveredCommentId:S})=>S),j=P(({focusedCommentId:S})=>S);w.useEffect(()=>{C.current?.UNSAFE_setValue(i||"")},[i]);const U=E-T;return n.jsx("div",{className:Z.code,ref:M(N,W),children:n.jsxs(G,{id:"codemirror",comments:h===V.ALL_HIDDEN?void 0:t,commentingOn:_,currentlyStreamingLineIndex:e,hoveredCommentId:y,focusedCommentId:j,language:B,readonlyReason:c,onChange:p,value:i,textdocDiff:a,editorRef:M(C,I),width:T,modelCursor:A,isPreview:l,onBlur:D,onSave:O,children:[n.jsxs(G.EditorChildren,{children:[!v&&n.jsx(mt,{onAddComment:r,isSendDisabled:u,isWaitingForCommentResponse:o}),h!==V.ALL_HIDDEN&&n.jsx("div",{className:b?"mr-4":"",children:n.jsx(X,{getStableCommentId:g,availableWidth:U,comments:t,commentsMode:h,onAddComment:r,onAcceptComment:d,onDismissComment:s,isWaitingForCommentResponse:o,isRequestActive:L,disableBlockComments:!0})})]}),n.jsxs(G.ContextChildren,{children:[a&&n.jsx(dt,{diff:a}),!x&&n.jsx(F,{isRequestActive:L,isVisuallyHidden:u||!!c?.isStreamingFromNative||c?.isReadonly&&!c.isStreaming,onSubmit:R,onCancel:H,actions:q,onExpandedChange:m})]})]})})};export{Jt as CodeComposer};
//# sourceMappingURL=g7uwuntxdaw3z47p.js.map
