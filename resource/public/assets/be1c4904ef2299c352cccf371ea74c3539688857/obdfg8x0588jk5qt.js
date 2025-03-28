import{r as u,j as c,a5 as w,a7 as U,e as ie}from"./fs6h2trisr1juto6.js";import{C as ce}from"./czux62el9j9eyk4d.js";import{en as R,eo as b,j5 as le,h9 as ue,fK as de}from"./df9u9imhvwerk6zv.js";import{F,s as fe}from"./lodl3s7jfiypzk1n.js";import{d as y,c7 as he,B as q,aF as H,H as G,g as W,L as Z,P as z,a as S,g0 as me,z as pe}from"./cyi7nanrg0vdotzd.js";import{u as ge}from"./o77dlyy0lhhjntje.js";import"./f3zzw463zuggq6da.js";import"./kg9pnjn9ianmg7dc.js";import"./htu9pml8lfjcb6ls.js";import"./g67zyzc7bfbl1vkm.js";import"./jteom3gltchw516e.js";import"./e0sfrrlvs75vveq5.js";import"./hi1g9go8t53qsjy9.js";import"./fdc267gtmse8t1gq.js";import"./dp0ii8vuue4rnykh.js";import"./b7o9536h4wpvjcqi.js";import"./k76xevje6k7b3vo6.js";import"./cvvlp6bftojvu0f7.js";import"./jo3x2yf4dp19h25k.js";import"./f25rpzpqicaw21n1.js";import"./gvz98l77ingvo2jj.js";import"./m1fsshfoerllttos.js";const N=24,Ce=16,xe=8,O=12,_e=5e3,Te="_markdown_1frq2_10",ke="_fade_1frq2_1",K={markdown:Te,fade:ke},ve=({children:e,onMeasure:n})=>{const[{height:t},a]=ue();return he(()=>{t&&n?.(t)},[t]),c.jsx("div",{className:"flex",ref:a,children:e})};var X=(e=>(e.STATIC="static",e.ENTER="enter",e.STAGE="stage",e))(X||{});const Me=({isAnimationComplete:e=!1,isExpanded:n=!1,isLast:t=!1,index:a,content:s,onClick:d,onMeasure:r,onAnimationComplete:x,showBullet:i=!1})=>{const m=t||n;let p="static",g="static";t&&!e?(p="enter",g="stage"):g="static";const _=u.useRef(null);_.current=()=>{x?.(a,"enter")},u.useEffect(()=>{if(p!=="enter")return;const l=setTimeout(()=>{R.count(b.COT_SUMMARIZER,"cot_chunk_timeout"),_.current?.()},_e);return()=>clearTimeout(l)},[p]);const f=p==="static";return c.jsx(w.div,{role:n?void 0:"button",variants:{static:{opacity:1,scale:1,position:"static",translateY:0},enter:{position:"static",translateY:0,scale:1,opacity:1},stage:{position:"absolute",translateY:-N,scale:.95,opacity:0}},initial:g,animate:p,exit:n?void 0:{opacity:0,pointerEvents:"none",position:"absolute",translateY:N,filter:"blur(8px)"},style:{zIndex:a},transition:e||p==="static"?{duration:0}:{type:"spring",bounce:.05},className:y("top-0 origin-left text-token-text-secondary",!m&&"pointer-events-none"),onAnimationComplete:l=>l!=="enter"&&x(a,l),onClick:d,children:c.jsx(ve,{onMeasure:l=>{r(a,l*(g==="stage"?1/.95:1))},children:c.jsx(le,{onComplete:_.current,isDisabled:f,defaultDelayPerSegmentMs:20,children:i?c.jsxs("div",{className:"flex items-start gap-2",children:[c.jsxs("div",{className:"flex h-full w-4 flex-col items-center gap-2 overflow-hidden pt-[7px]",children:[c.jsx("div",{className:"h-[6px] w-[6px] shrink-0 rounded-full bg-token-icon-secondary"}),!t&&c.jsx(w.div,{initial:{translateY:-N,opacity:0},animate:{translateY:0,opacity:1},className:"h-full w-[1px] rounded-full bg-token-border-medium"})]}),c.jsx(F,{className:y(K.markdown,"text-sm text-token-text-secondary"),children:s})]}):c.jsx(F,{className:y(K.markdown,"text-token-text-secondary"),children:s})})})})},ye=u.memo(Me),Ee=(e,n)=>{if(n<=1)return e.formatMessage({id:"ZxhUq1",defaultMessage:"a second"});if(n<3)return e.formatMessage({id:"4GD7tD",defaultMessage:"a couple of seconds"});if(n<4)return e.formatMessage({id:"jx5V1u",defaultMessage:"a few seconds"});if(n>=60){const t=Math.floor(n/60),a=n%60;return`${t}m ${a}s`}return e.formatMessage({id:"p4/pTg",defaultMessage:"{seconds} seconds"},{seconds:n})},Re=e=>{let n=0;for(const t of e)n+=t.metadata?.finished_duration_sec??0;return n},be=(e,n,t)=>n.length>1?e.formatMessage({id:"sdDgmZ",defaultMessage:"Thought for {timing}"},{timing:Ee(e,t)}):q(n)?.metadata?.finished_text??"";var E=(e=>(e.HEADLINE="headline",e.COT="CoT",e))(E||{});const v=e=>({key:e,type:"CoT",content:"",isComplete:!0}),Se=(e,n=!1)=>{const t=[],a=e.split(/( {2}\n)|(\n\n)/).filter(r=>r!=null&&r.trim());if(!n&&a.length<2)return t;let s=v(t.length),d=!1;for(let r=0;r<a.length;r++){const i=a[r].trim();if(i.toLowerCase()==="none"){R.count(b.COT_SUMMARIZER,"num_none_chunks");continue}const m=i.match(/^\*\*(.*)\*\*$/);if(m)s.content.trim()&&(s.isComplete=!0,t.push(s),s=v(t.length)),t.push({key:t.length,type:"headline",content:m[1]??"",isComplete:!0}),s=v(t.length);else if(i){if(i.startsWith("```"))if(!d)s.isComplete=!0,t.push(s),s=v(t.length),d=!0;else{s.content+=s.content?`
${i}`:i,s.isComplete=!0,t.push(s),s=v(t.length),d=!1;continue}s.content.trim()&&!i.startsWith("\\[")&&!i.startsWith("\\(")&&!d&&(s.isComplete=!0,t.push(s),s=v(t.length)),s.content+=s.content?`
${i}`:i,s.isComplete=!1}}return s.content.trim()&&(s.isComplete=n,t.push(s)),t},Ne=(e,n)=>{const t=!n,a=u.useMemo(()=>Se(e,t),[e,t]);return u.useEffect(()=>{t&&R.hist(b.COT_SUMMARIZER,"num_cot_chunks",void 0,a.length)},[t]),{chunks:a,isComplete:t}},$=({type:e,isComplete:n})=>e===E.HEADLINE&&n,we={duration:.3,ease:"easeInOut"},Ae=({isStreaming:e=!1,expandByDefault:n=!1,finishedText:t,summaryText:a,onAnimationComplete:s})=>{const{chunks:d,isComplete:r}=Ne(a,e),[x,i]=u.useState(()=>new Map),{value:m}=H("1099124727"),p=G(d,({type:o})=>o===E.COT)?.key??null,[g,_]=u.useState(()=>e?null:p),f=r&&g===p,[l,D]=u.useState(()=>{const o=W.getItem(Z.ExpandSummarizedCoT);return e?o!=null?!!o:n:!1}),A=u.useCallback((o,h)=>{D(o),e&&W.setItem(Z.ExpandSummarizedCoT,o),R.count(b.COT_SUMMARIZER,o?"expand":"collapse",[{key:"is_streaming",value:String(e)},{key:"source",value:h}]),z.logEventWithStatsig(o?S.chatgptCoTExpanded:S.chatgptCoTCollapsed,o?"chatgpt_cot_expanded":"chatgpt_cot_collapsed",{is_streaming:String(e),source:h})},[e]),T=u.useMemo(()=>{const o=[];for(let h=0;h<d.length;h++){const C=d[h];C.type===E.COT&&C.content&&C.isComplete&&o.push(h)}return o.find((h,C)=>g==null||h>g||C===o.length-1)??-1},[d,g]),J=u.useCallback((o,h)=>{i(C=>{const Y=new Map(C);return Y.set(o,h),Y})},[]),Q=u.useCallback(()=>{A(!0,"chunk")},[A]),I=Array.from(x.values()),M=d.slice(0,T+1),ee=(G(M,$)??d.find($))?.content;let k=M.filter(o=>o.type===E.COT);l||(k=k.slice(-1));const j=u.useRef(null);ge(T);const L=()=>{if(j.current!=null){const o=performance.now()-j.current;R.hist(b.COT_SUMMARIZER,"cot_chunk_display_time",void 0,o)}};u.useEffect(()=>{if(f)return L();T!==-1&&(L(),j.current=performance.now())},[T]),u.useEffect(()=>{f||T<0||z.logEventWithStatsig(l?S.chatgptStreamedCoTChunkViewed:S.chatgptStreamedCoTChunkIgnored,l?"chatgpt_streamed_cot_chunk_viewed":"chatgpt_streamed_cot_chunk_ignored")},[T,f,l,e]);const te=u.useCallback((o,h)=>{h===X.ENTER&&(_(C=>C!=null?Math.max(C,o):o),r&&o===p&&s?.())},[r,p,s]);u.useEffect(()=>{if(r&&!f){D(!1),_(p),s?.();return}!r||!f||k.length||s?.()},[r,f,k]);const ne=M.length>0&&(!f||l),P=m?xe:Ce,se=fe(I)+(I.length-1)*P+2*O,oe=f?"auto":l?se:(q(I)??0)+2*O,ae=M.length===0||!r&&M.length<2,re=m&&e?{initial:{opacity:0,scale:.5,originX:0,originY:0},animate:{opacity:1,scale:1},transition:{ease:"easeInOut",duration:.2}}:{};return c.jsxs(w.div,{className:y("my-1 flex flex-col overflow-hidden",m&&"bg-token-background-primary mb-5 rounded-[20px] border border-token-border-light px-5 py-4",m&&e&&!l&&"shadow-lg shadow-token-sidebar-surface-secondary"),...re,children:[c.jsx(ce,{activeHeadline:ee,finishedText:t,onToggleExpanded:()=>A(!l,"header"),isExpanded:l,isExpandDisabled:ae,isComplete:f}),c.jsx(U,{children:ne&&c.jsxs(w.div,{className:y("relative z-0 whitespace-pre-wrap",!m&&"pl-4 md:pl-7"),initial:f?{opacity:0,height:0,overflowY:"hidden"}:!1,animate:{opacity:1,height:oe},exit:{height:0,opacity:0,pointerEvents:"none",overflowY:"hidden",filter:f?"blur(8px)":void 0,translateY:-N},transition:we,children:[!m&&c.jsx("div",{className:"absolute bottom-4 left-0 top-4 w-1 rounded-full bg-token-border-light"}),c.jsx("div",{className:"relative flex h-full flex-col",style:{gap:P,margin:`${O}px 0`},children:c.jsx(U,{children:k.map(({content:o,key:h},C)=>c.jsx(ye,{index:h,content:o,isLast:k.length-1===C,onClick:Q,onAnimationComplete:te,onMeasure:J,isAnimationComplete:f,isExpanded:l,showBullet:m&&l},h))})})]})})]})},Ie=8,st=({messages:e,isStreaming:n,clientThreadId:t,turnIndex:a})=>{const s=ie(),{value:d}=H("1214379119"),{value:r}=H("2968810397"),x=Re(e),{summaryText:i,contentReferences:m}=je(e),p=m.length,{processedText:g,displayedContentReferences:_}=u.useMemo(()=>r?me(i,m,void 0,!1,n):{processedText:i,displayedContentReferences:[]},[i,p,n,r]);if(d&&!n&&!g&&x<Ie)return null;const f={turnIndex:a,clientThreadId:t,messageId:e[0].id};return c.jsx(de.Provider,{value:{analyticsMetadata:f,clientThreadId:t,message:e[0],contentReferences:_,onShowSearchResults:()=>{},isActivelyStreaming:n,useSafeUrls:!0},children:c.jsx(Ae,{expandByDefault:!1,finishedText:be(s,e,x),summaryText:g,isStreaming:n})})},B=`

`,V="sonic_browser_tool",je=e=>{let n="";const t=[];let a=0;return e.forEach((s,d)=>{if(s.metadata?.cot_tool===V&&e[d+1]?.metadata?.cot_tool===V)return;const r=pe(s);n+=n?B+r:r;const x=s.metadata?.content_references?.map(i=>({...i,start_idx:a+i.start_idx,end_idx:a+i.end_idx}))??[];a+=r.length+B.length,t.push(...x)}),{summaryText:n,contentReferences:t}};export{Ae as CoT,st as CoTMessage};
//# sourceMappingURL=obdfg8x0588jk5qt.js.map
