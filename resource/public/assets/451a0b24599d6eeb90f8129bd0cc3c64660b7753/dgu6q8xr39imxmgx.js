import{c as q,j as i,aw as O,au as N,r as c,g as re}from"./cg166fqqcxkeiosv.js";import{D as L,W as le,M as ce,S as F,F as ue,C as z,a as w}from"./go0af9xp65ob64bp.js";import{d as j,c3 as de,bb as me,i as fe,$ as U,a0 as P,P as K,a as I,cd as pe,o as he,n as ge}from"./mwlpozqwnbys03vp.js";import{dz as R,dA as S,gN as Ce,k3 as xe,dK as G,k4 as _e}from"./d5k5wa3zyqlgc9bk.js";import{g as ke}from"./i169bq7i6w0d3vgf.js";import{u as ye}from"./dwgbagtcbp3llpgj.js";import"./pfn4k437nge2m1vb.js";import"./lyxz8i5c4a3y7iew.js";import"./lreb9dbp4o4sdhlz.js";import"./mptd6395vqovl9h2.js";import"./nbo9a5e09uaxkp2z.js";import"./nf72ucyf2v4hrd52.js";import"./gg3htlw4oy097iqi.js";import"./nsmo1fil03yxtd3r.js";import"./bk3oz68r6jpv53p0.js";import"./3qaegw5tahuvxmqt.js";import"./k9og1wkg25ezi82z.js";import"./i7xkmczefffl02lb.js";import"./mvt4km0zlpksanl9.js";import"./bcgu844kz5rwd68s.js";import"./b2w5qfsxz967tcnb.js";import"./fkhtghkh1er8efwl.js";const Te=({isExpanded:e=!1,isExpandDisabled:s=!1,isComplete:n=!1,activeHeadline:a,finishedText:t,onToggleExpanded:r})=>{const o=q(),f=o.formatMessage({id:"/4+t6i",defaultMessage:"Reasoned"});t||=f;const u=n?t:!e&&a?a:o.formatMessage({id:"Guu3mD",defaultMessage:"Reasoning"});return i.jsxs("button",{disabled:s,onClick:r,className:"relative inline w-full text-start",children:[i.jsx(O,{mode:"popLayout",children:i.jsx(N.span,{className:j("align-middle",n?"text-token-text-primary":"loading-shimmer"),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,overflow:"hidden",whiteSpace:"nowrap"},transition:{duration:.3},children:u},u)}),!s&&i.jsx(de,{className:j("icon-sm inline align-middle text-token-text-secondary transition-transform",e&&"rotate-90")})]})},Ee="_fadeIn_eiknz_10",Me="_fade_eiknz_10",H={fadeIn:Ee,fade:Me},X=e=>Array.from(e.match(/\s*\S+(?:\s+|$)/g)??[]),$=e=>({"--duration":`${le}ms`,"--delay":`${e}ms`}),Z=({children:e,delay:s,onComplete:n})=>{const a=X(e);return i.jsx(i.Fragment,{children:a.map((t,r)=>i.jsx("span",{className:j(H.fadeIn,"whitespace-prewrap"),style:$(s+r*L),onAnimationEnd:r===a.length-1?n:void 0,children:t},r))})},B=({tag:e,isDisabled:s=!1,onComplete:n,children:a})=>{if(s)return i.jsx(e,{children:a});let t=0;return i.jsx(e,{children:typeof a=="string"?i.jsx(Z,{delay:t,onComplete:n,children:a}):Array.isArray(a)?a.map((r,o)=>{const f=t;return typeof r=="string"?t+=X(r).length*L:t+=L,typeof r=="string"?i.jsx(Z,{delay:f,onComplete:o===a.length-1?n:void 0,children:r},o):i.jsx("span",{className:H.fadeIn,style:$(t),onAnimationEnd:n,children:r},o)}):i.jsx("span",{className:H.fadeIn,style:$(t),onAnimationEnd:n,children:a})})},ve="_markdown_1frq2_10",je="_fade_1frq2_1",Ae={markdown:ve,fade:je},Ie=({children:e,onMeasure:s})=>{const[{height:n},a]=Ce();return me(()=>{n&&s?.(n)},[n]),i.jsx("div",{className:"flex",ref:a,children:e})};var J=(e=>(e.STATIC="static",e.ENTER="enter",e.STAGE="stage",e))(J||{});const Ne=({showStreamPreviewWhenCollapsed:e=!1,isAnimationComplete:s=!1,isExpanded:n=!1,isLast:a=!1,index:t,content:r,onClick:o,onMeasure:f,onAnimationComplete:u})=>{const _=a||n;let g="static",x="static";a&&!s?(g="enter",x="stage"):x="static";const k=c.useRef(null);k.current=()=>{u?.(t,"enter")},c.useEffect(()=>{if(g!=="enter")return;const h=setTimeout(()=>{R.count(S.COT_SUMMARIZER,"cot_chunk_timeout"),k.current?.()},ce);return()=>clearTimeout(h)},[g]);const m=c.useCallback(()=>{k.current?.()},[]),p=g==="static",A=c.useMemo(()=>({li:({children:h})=>i.jsx(B,{tag:"li",isDisabled:p,onComplete:m,children:h}),p:({children:h})=>i.jsx(B,{tag:"p",isDisabled:p,onComplete:m,children:h})}),[p,m]);return i.jsx(N.div,{role:e&&!n?"button":void 0,variants:{static:{opacity:1,scale:1,position:"static",translateY:0},enter:{position:"static",translateY:0,scale:1,opacity:1},stage:{position:"absolute",translateY:-F,scale:.95,opacity:0}},initial:x,animate:g,exit:e&&!n?{opacity:0,pointerEvents:"none",position:"absolute",translateY:F,filter:"blur(8px)"}:void 0,style:{zIndex:t},transition:s||g==="static"?{duration:0}:{type:"spring",bounce:.05},className:j("top-0 origin-left text-token-text-secondary",!_&&"pointer-events-none"),onAnimationComplete:h=>h!=="enter"&&u(t,h),onClick:o,children:i.jsx(Ie,{onMeasure:h=>{f(t,h*(x==="stage"?1/.95:1))},children:i.jsx(ue,{className:j(Ae.markdown,"text-token-text-secondary"),componentOverrides:A,children:r})})})},Re=c.memo(Ne);var v=(e=>(e.HEADLINE="headline",e.COT="CoT",e))(v||{});const E=e=>({key:e,type:"CoT",content:"",isComplete:!0}),Se=(e,s=!1)=>{const n=[],a=e.split(/( {2}\n)|(\n\n)/).filter(o=>o!=null&&o.trim());if(!s&&a.length<2)return n;let t=E(n.length),r=!1;for(let o=0;o<a.length;o++){const u=a[o].trim();if(u.toLowerCase()==="none")continue;const _=u.match(/^\*\*(.*)\*\*$/);if(_)t.content.trim()&&(t.isComplete=!0,n.push(t),t=E(n.length)),n.push({key:n.length,type:"headline",content:_[1]??"",isComplete:!0}),t=E(n.length);else if(u){if(u.startsWith("```"))if(!r)t.isComplete=!0,n.push(t),t=E(n.length),r=!0;else{t.content+=t.content?`
${u}`:u,t.isComplete=!0,n.push(t),t=E(n.length),r=!1;continue}t.content.trim()&&!u.startsWith("\\[")&&!u.startsWith("\\(")&&!r&&(t.isComplete=!0,n.push(t),t=E(n.length)),t.content+=t.content?`
${u}`:u,t.isComplete=!1}}return t.content.trim()&&(t.isComplete=s,n.push(t)),n},be=(e,s)=>{const n=!s,a=c.useMemo(()=>Se(e,n),[e,n]);return c.useEffect(()=>{n&&R.hist(S.COT_SUMMARIZER,"num_cot_chunks",void 0,a.length)},[n]),{chunks:a,isComplete:n}};var De=xe,we=fe;function Oe(e){return e&&e.length?De(e,we):0}var Le=Oe;const Fe=re(Le),V=({type:e,isComplete:s})=>e===v.HEADLINE&&s,He={duration:.3,ease:"easeInOut"},$e=({isStreaming:e=!1,showStreamPreviewWhenCollapsed:s=!1,expandByDefault:n=!1,finishedText:a,summaryText:t,onAnimationComplete:r})=>{const{chunks:o,isComplete:f}=be(t,e),[u,_]=c.useState(()=>new Map),g=o.findLast(({type:l})=>l===v.COT)?.key??null,[x,k]=c.useState(()=>e?null:g),m=f&&x===g,[p,A]=c.useState(()=>{const l=U.getItem(P.ExpandSummarizedCoT);return e?l!=null?!!l:n:!1}),h=c.useCallback((l,d)=>{A(l),e&&U.setItem(P.ExpandSummarizedCoT,l),R.count(S.COT_SUMMARIZER,l?"expand":"collapse",[{key:"is_streaming",value:String(e)},{key:"source",value:d}]),K.logEventWithStatsig(l?I.chatgptCoTExpanded:I.chatgptCoTCollapsed,l?"chatgpt_cot_expanded":"chatgpt_cot_collapsed",{is_streaming:String(e),source:d})},[e]),y=c.useMemo(()=>{const l=[];for(let d=0;d<o.length;d++){const C=o[d];C.type===v.COT&&C.content&&C.isComplete&&l.push(d)}return l.find((d,C)=>x==null||d>x||C===l.length-1)??-1},[o,x]),Q=c.useCallback((l,d)=>{_(C=>{const Y=new Map(C);return Y.set(l,d),Y})},[]),ee=c.useCallback(()=>{h(!0,"chunk")},[h]),b=Array.from(u.values()),M=o.slice(0,y+1),te=(pe(M,V)??o.find(V))?.content;let T=M.filter(l=>l.type===v.COT);s&&!p&&(T=T.slice(-1));const D=c.useRef(null);ye(y);const W=()=>{if(D.current!=null){const l=performance.now()-D.current;R.hist(S.COT_SUMMARIZER,"cot_chunk_display_time",void 0,l)}};c.useEffect(()=>{if(m)return W();y!==-1&&(W(),D.current=performance.now())},[y]),c.useEffect(()=>{m||y<0||K.logEventWithStatsig(p?I.chatgptStreamedCoTChunkViewed:I.chatgptStreamedCoTChunkIgnored,p?"chatgpt_streamed_cot_chunk_viewed":"chatgpt_streamed_cot_chunk_ignored")},[y,m,p,e]);const ne=c.useCallback((l,d)=>{d===J.ENTER&&(k(C=>C!=null?Math.max(C,l):l),f&&l===g&&r?.())},[f,g,r]);c.useEffect(()=>{if(f&&!m){A(!1),k(g),r?.();return}!f||!m||(!T.length||!p&&!s)&&r?.()},[f,m,T]);const se=M.length>0&&(!m&&s||p),ae=Fe(b)+(b.length-1)*z+2*w,oe=m?"auto":p?ae:s?(he(b)??0)+2*w:0,ie=M.length===0||!f&&s&&M.length<2;return i.jsxs(N.div,{className:"my-1 flex flex-col",children:[i.jsx(Te,{activeHeadline:te,finishedText:a,onToggleExpanded:()=>h(!p,"header"),isExpanded:p,isExpandDisabled:ie,isComplete:m}),i.jsx(O,{children:se&&i.jsxs(N.div,{className:"relative z-0 whitespace-pre-wrap pl-4 md:pl-7",initial:m?{opacity:0,height:0,overflowY:"hidden"}:!1,animate:{opacity:1,height:oe},exit:{height:0,opacity:0,pointerEvents:"none",overflowY:"hidden",translateY:-F},transition:He,children:[i.jsx("div",{className:"absolute bottom-4 left-0 top-4 w-1 rounded-full bg-token-border-light"}),i.jsx("div",{className:"relative flex h-full flex-col",style:{gap:z,margin:`${w}px 0`},children:i.jsx(O,{children:T.map(({content:l,key:d},C)=>i.jsx(Re,{index:d,content:l,isLast:T.length-1===C,onClick:ee,onAnimationComplete:ne,onMeasure:Q,isAnimationComplete:m,isExpanded:p,showStreamPreviewWhenCollapsed:s},d))})})]})})]})},ct=({messages:e,isStreaming:s})=>{const n=q(),a=e.map(({message:o})=>ge(o)).join(`

`);c.useEffect(()=>{if(s)for(const{message:o}of e)G.addDelayedRenderingMessage(o.id)},[s,e]);const t=()=>{for(const{message:o}of e)G.removeDelayedRenderingMessage(o.id)},r=_e();return i.jsx($e,{showStreamPreviewWhenCollapsed:r?.showPreviewWhenCollapsed,expandByDefault:r?.expandByDefault,finishedText:ke(n,e),summaryText:a,isStreaming:s,onAnimationComplete:t})};export{$e as CoT,ct as CoTMessage};
//# sourceMappingURL=dgu6q8xr39imxmgx.js.map
