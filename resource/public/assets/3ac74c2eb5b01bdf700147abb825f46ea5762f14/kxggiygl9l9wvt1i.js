const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/e9ff009uqusfgjsr.js","assets/cg166fqqcxkeiosv.js","assets/a18jwh9lzr2ddmbd.js","assets/dze2l9y9kn6nwat0.js","assets/root-fk1yg8gm.css","assets/kb3phtht4s5rhb60.js","assets/j4xe1fdohr6xk09p.js","assets/conversation-small-ga20ijz2.css","assets/jky4nhpbj4n3xuh7.js","assets/h83rc28v2vsm5nda.js","assets/gzm2pyuieq14d2cd.js","assets/budme7ga2r3x8egd.js","assets/b2q3ld9zhvi0hlak.js","assets/h3kyyu1vfc54fgwo.js","assets/cfvh96gbcjdpth1v.js","assets/hdljn2guc8a6do38.js","assets/hfcprtei6ztxm9h9.js","assets/3qaegw5tahuvxmqt.js","assets/o3ts9y7n7vziy25l.js","assets/fhrx16jd9reambyh.js","assets/m5vf38e63o5zwpil.js","assets/m4iicmyh3x1nme4j.js","assets/b6ddr1xo1x0u3g1f.js","assets/mwzhm72p5w3hiavh.js","assets/l9ye8cwfkgr8kxz3.js","assets/x3ju7asrz72fp0r5.js","assets/4g9n823lx8x6dj2d.js","assets/gyok5zb0k7brgm5q.js","assets/ow5emz9q3huyyjf9.js","assets/g2uqo8nmpy7dru8c.js","assets/f55klt1ppf2qkvcm.js","assets/bpzcjl16o6x41c7o.js","assets/dd3yfk3qb5zypzqq.js","assets/dwbmbwvdewldvcp1.js","assets/hdilgwj6ud6odlt8.js","assets/dxwj7d3qxjns67z0.js","assets/l1c6eu3d34hr9ksj.js","assets/i7nvm66tepgqj19n.js","assets/bsl07ehiis3tpn40.js","assets/ksd54b7o5090d70i.js","assets/7ckqochw7zdn18vj.js","assets/mvt4km0zlpksanl9.js","assets/b2w5qfsxz967tcnb.js","assets/nq2b8stb8xnboof9.js","assets/dwgbagtcbp3llpgj.js","assets/cot-message-bxmx4p0i.css","assets/o1002m9jysh69ij9.js","assets/g549sgbpr5cp6cvm.js","assets/lbcsmtcjngeb0zlu.js","assets/jhtry11ljwp90don.js","assets/n0v4yzxrm6ry3e9y.js"])))=>i.map(i=>d[i]);
import{c2 as ye,Q as G,r as U,aj as Te,d1 as Me,fp as ve,V as je,T as de,q as le,a as K,s as Ce,aE as be,c1 as ke,d as L,bO as me,gX as Ie,E as Ne,bB as q,eY as Ae,m as ue,O as we,bT as Y,fN as Le,ab as z,P as Re,c3 as De,bh as ge,gY as Q,ep as Fe,eq as Oe,bN as Pe,e5 as Ve,em as He,e4 as Be,ao as fe,D as Ue,gu as ze,bl as C,bm as k,bb as qe,eG as We}from"./dze2l9y9kn6nwat0.js";import{j as s,M as b,a as xe,c as W,r as x,aw as X,au as H}from"./cg166fqqcxkeiosv.js";import{k7 as Je,iq as Ye,dt as he,k8 as Ke,k9 as Qe,ig as Xe,ih as $e,ia as Ge,ka as Ze,dm as es,kb as ss,kc as ts,kd as as,ke as ns,kf as os,kg as is,iB as rs,ij as S,id as pe,ii as P,kh as ee,ki as B,i8 as se,kj as cs,kk as ds,kl as ls,km as ms,kn as us,dq as gs,dr as fs,c2 as xs,ko as hs,kp as ps,kq as O,ed as Ss,kr as $,ks as _s,kt as Es,ku as ys,kv as Ts,kw as Ms,kx as te,ky as vs,kz as js,kA as Cs,aG as bs,aF as ks,ag as Is,F as Ns,eb as As,hh as ws,kB as Ls,kC as Rs,cz as i,kD as Ds,jf as Fs,kE as Os,kF as Ps,kG as Vs,eT as Hs,kH as Bs,fP as Us}from"./j4xe1fdohr6xk09p.js";import{c as zs,T as V}from"./jky4nhpbj4n3xuh7.js";import{u as qs,a as Ws}from"./cfvh96gbcjdpth1v.js";import{b as Js,a as Ys}from"./gzm2pyuieq14d2cd.js";import{u as Ks}from"./h83rc28v2vsm5nda.js";import{N as Qs}from"./m5vf38e63o5zwpil.js";import{g as Xs}from"./m4iicmyh3x1nme4j.js";const $s=e=>{for(const a of e.concat().reverse()){if("messages"in a)return a.messages[a.messages.length-1].nodeId;if("message"in a)return a.message.nodeId}},Gs=(e,a)=>{const[t,n,r]=G(e,_=>[U.getRequestId(_),Te(_?.mode),U.getLastMessageSystemHints(_).includes(Me.CANVAS)]),c=qs({clientThreadId:e,conversationMode:n}),m=Je(e),u=xe(),o=ve(),g=je(t),l=$s(a),f=a.some(_=>"messages"in _&&_.messages.some(y=>y.message.metadata?.canvas?.canvas_opt_in));return{isVisible:!r&&!m&&!f&&!!l,onClick:async _=>{if(!l)return;_.stopPropagation(),Ye();const y=[de.CANMORE];g&&await zs({clientThreadId:e,currentRequestId:t,queryClient:u,isHistoryAndTrainingDisabled:o}),requestAnimationFrame(()=>c({id:l,systemMessage:"The user has requested the canvas tool be disabled for this conversation. You should not call the tool again.",systemMessageMetadata:{disable_tool_ids:y}}));const v=U.getTree(le(e)),I=v.getConversationTurns(l,!1).length,N=v.getParentPromptNode(l).message.id;he.logEventWithStatsig(K.canvasOptOutClicked,"chatgpt_canvas_opt_out_clicked",{num_turns:String(I),conversation_id:Ce(e),message_id:N}),be(e,M=>{M.disabledToolIds=y})}}},Zs=({clientThreadId:e,groupedMessages:a})=>{const{isVisible:t,onClick:n}=Gs(e,a);return t?s.jsx("button",{onClick:n,className:"mb-2 w-full text-token-text-secondary hover:text-token-text-primary",children:s.jsxs("div",{className:"flex items-center rounded-xl",children:[s.jsx(b,{id:"aa5Dyk",defaultMessage:"Answer in chat instead"}),s.jsx(ye,{className:"icon-md text-token-text-secondary"})]})}):null},et=(e,a)=>e?.textdocId?e.textdocId:e?.function===P.CreateTextdoc?ds(e.messageId):a??void 0,st=({messages:e,isRequestActive:a,isFinalTurn:t,allGroupedMessages:n,clientThreadId:r})=>{const c=W(),m=Ke(e),u=Qe(e),o=x.useMemo(()=>{if(Xe(m?.message))return $e(a,m.message,u?.message??null)},[a,m,u]),g=Ge(),l=et(o,g),f=Ze(l),p=es(),_=ss(l),y=ts(),v=as(),I=ns(),N=os(),M=is({textdocId:l,assistantMessage:m}),R=rs(()=>{const j=le(r)?.modelId;he.logError("Textdoc missing from conversation",null,{clientThreadId:r,modelId:j,textdocId:l,latestTextdocId:g,toolCallTextdocId:o?.textdocId,toolCallStatus:o?.status,toolCallFunction:o?.function})});x.useEffect(()=>{!a&&o?.status===S.COMPLETE&&!N&&!f&&R()},[o,f,a,N,R]);const T=pe("canvas");if(!o)return null;const D=o.status===S.REDACTED||!N&&!f&&o.status!==S.STREAMING&&o.status!==S.WAITING;let F,d;if(o.status!==S.REDACTED&&o.status!==S.FAILED&&!D&&l){const j=o.function===P.UpdateTextdoc&&o.status===S.COMPLETE;F=()=>{T(),j&&o.versionInt?ls(l,o.versionInt,y):se(l)},d=()=>{j&&o.versionInt&&I(l,o.versionInt)}}const h=tt(o,f);if(o.function===P.CreateTextdoc){if(o.status===S.STREAMING||o.status===S.WAITING||o.status===S.COMPLETE){const J=N===!0&&(o.status===S.STREAMING||o.status===S.WAITING);return s.jsxs(s.Fragment,{children:[s.jsx(ee,{textdocId:l,name:h,tag:o.type,icon:B(o.type,!1),iconSelected:B(o.type,!0),isCanvasOpen:p,isInlinePreview:M,isFetching:J,isFocused:_,isStreaming:o.status===S.STREAMING,onClick:F}),t&&s.jsx(Zs,{clientThreadId:r,groupedMessages:n})]})}let j;switch(o.status){case S.FAILED:j=c.formatMessage({id:"SNarKX",defaultMessage:"Failed to generate"});break;case S.CANCELED:j=c.formatMessage({id:"1A6W36",defaultMessage:"Stopped generating"});break;case S.REDACTED:j=s.jsx(ke,{align:"start",label:c.formatMessage({id:"F6q1k7",defaultMessage:"Removed from shared conversation"}),children:c.formatMessage({id:"BqyYDu",defaultMessage:"Created document"})});break}return s.jsx(ae,{children:j})}const A=D||o.status===S.REDACTED,E=v&&!A?h:null,w=s.jsx(ae,{onClick:F,onMouseOver:d,isStreaming:o.status===S.STREAMING,children:o.function===P.CommentTextdoc?nt(c,o,E):at(c,o,E)});return M&&!p&&!D&&l?s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx(ee,{textdocId:l,name:h,tag:f?.type,icon:B(f?.type,!1),iconSelected:B(f?.type,!0),isCanvasOpen:p,isFetching:!1,isFocused:_,isInlinePreview:!0,isStreaming:o.status===S.STREAMING,onClick:l!=null?()=>{T(),se(l)}:void 0}),w]}):w};function tt(e,a){return a?.title?a.title:e.function===P.CreateTextdoc&&e.title?cs(e.title):null}const ae=({isStreaming:e=!1,onClick:a,onMouseOver:t,children:n})=>s.jsx("button",{disabled:!a,className:L(e&&"loading-shimmer","flex min-h-5 w-fit select-none pt-[3px] text-start text-token-text-secondary",a&&"hover:text-token-text-primary"),onClick:a,onMouseOver:t,children:n}),Se=9;function at(e,a,t){if(a.status===S.STREAMING)return t?e.formatMessage({id:"W2xN1Z",defaultMessage:"Editing {documentTitle}"},{documentTitle:t}):e.formatMessage({id:"8taq8v",defaultMessage:"Editing"});if(a.status===S.FAILED)return t?e.formatMessage({id:"UjJKYZ",defaultMessage:"Failed to edit {documentTitle}"},{documentTitle:t}):e.formatMessage({id:"kWUVkg",defaultMessage:"Failed to edit"});if(a.status===S.CANCELED)return t?e.formatMessage({id:"TmSrCd",defaultMessage:"Stopped editing {documentTitle}"},{documentTitle:t}):e.formatMessage({id:"bYV7xA",defaultMessage:"Stopped editing"});const n=a.updates?.length;return a.status===S.REDACTED||!n||n>Se?t?e.formatMessage({id:"n+G/ct",defaultMessage:"Edited {documentTitle}"},{documentTitle:t}):e.formatMessage({id:"aegqpL",defaultMessage:"Edited"}):t?e.formatMessage({id:"osYMSb",defaultMessage:"{numEdits, plural, one {Edited {documentTitle}} other {Made {numEdits} edits to {documentTitle}}}"},{numEdits:n,documentTitle:t}):e.formatMessage({id:"xJD3WR",defaultMessage:"{numEdits, plural, one {Edited} other {Made {numEdits} edits}}"},{numEdits:n})}function nt(e,a,t){if(a.status===S.STREAMING)return t?e.formatMessage({id:"8xQH/P",defaultMessage:"Commenting on {documentTitle}"},{documentTitle:t}):e.formatMessage({id:"5yqLeN",defaultMessage:"Commenting"});if(a.status===S.FAILED)return t?e.formatMessage({id:"Rl821S",defaultMessage:"Failed to comment on {documentTitle}"},{documentTitle:t}):e.formatMessage({id:"W007jt",defaultMessage:"Failed to comment"});if(a.status===S.CANCELED)return t?e.formatMessage({id:"bozPdq",defaultMessage:"Stopped commenting on {documentTitle}"},{documentTitle:t}):e.formatMessage({id:"hyBGa7",defaultMessage:"Stopped commenting"});const n=a.comments?.length;return a.status===S.REDACTED||!n||n>Se?t?e.formatMessage({id:"LXEzK7",defaultMessage:"Commented on {documentTitle}"},{documentTitle:t}):e.formatMessage({id:"KeMYhy",defaultMessage:"Commented"}):t?e.formatMessage({id:"Ql5lPq",defaultMessage:"{numComments, plural, one {Commented on {documentTitle}} other {Added {numComments} comments on {documentTitle}}}"},{numComments:n,documentTitle:t}):e.formatMessage({id:"FHtyJQ",defaultMessage:"{numComments, plural, one {Commented} other {Added {numComments} comments}}"},{numComments:n})}const ot={div:e=>{const{node:a,children:t,...n}=e;return s.jsx("div",{...n,className:"text-red-500",children:t})},p:e=>{const{node:a,children:t,...n}=e;return s.jsx("p",{...n,className:"text-start leading-6 text-token-text-primary",children:t})},a:e=>{const{node:a,children:t,...n}=e;return s.jsx("a",{...n,className:"font-sm leading-6 !text-token-text-primary",children:t})}},it=1e3*60*2,rt=15;function _e({onClick:e,statusMessage:a,showSources:t,includeMargin:n,sources:r,progressBar:c}){const m=me();return s.jsx("button",{onClick:()=>m&&e(),className:L("mt-4 flex w-4/5 max-w-[416px] items-start justify-start gap-[18px] rounded-2xl border border-black/10 bg-token-main-surface-primary px-5 py-4 shadow dark:border-white/10",m?"cursor-pointer hover:bg-token-main-surface-secondary":"cursor-auto"),children:s.jsxs("div",{className:"flex w-full flex-col gap-3",children:[s.jsxs("div",{className:L("flex flex-col items-start justify-start self-stretch md:h-7 md:flex-row md:items-center md:justify-between",t?"h-12":"h-6"),children:[s.jsx("div",{className:L("font-sm w-full flex-1 truncate text-start leading-7 text-token-text-primary md:w-0",n&&"mr-[30px]"),children:a}),t&&r]}),s.jsx("div",{className:"flex w-full items-center justify-start gap-4 self-stretch pb-2",children:c})]})})}function Z({toggleSidebar:e,openSidebar:a,startTime:t}){const n=W(),[r,c]=x.useState(!1),m=ms();return x.useEffect(()=>{if(!t)return;const u=Date.now()-t,o=it-u;if(o>0){const g=setTimeout(()=>{c(!0),a()},o);return()=>clearTimeout(g)}else c(!0),a()},[t,a]),s.jsx(_e,{onClick:e,statusMessage:r?n.formatMessage({id:"T2SbxC",defaultMessage:"Waiting…"}):s.jsx("div",{className:"text-pretty text-sm font-medium text-token-text-primary",children:m.startingMessage}),progressBar:s.jsx(us,{className:"h-2 w-full"}),showSources:!1})}function ct(e,a,t){const n=e.formatMessage({id:"Bs+OcV",defaultMessage:"Thinking…"});if(a.length<2)return t?.initial??n;const r=a[a.length-2];if(r.type==="summary")return r.title;if(r.type==="search")return r.query;if(r?.type==="websiteOpen")return s.jsx(xs,{componentOverrides:ot,children:r.active_row_text})}function dt({task:e,clientThreadId:a,caterpillarRows:t,messageWithTaskMetadata:n,totalSources:r,handleToggleCaterpillarSidebar:c}){const m=W(),u=me(),o=ct(m,t,n.metadata?.async_task_status_messages),g=(e?.expectedDurationMinutes??rt)*60*1e3,l=gs(t[1]?.created_at?t[1].created_at*1e3:Date.now(),g),f=t[1]&&t[1].created_at?l:0;x.useEffect(()=>{Ie(a,Ne.STREAMING)},[a]);const{openThreadSidebar:p}=q();x.useEffect(()=>{t.length===2&&u&&p({type:"caterpillar",caterpillarId:e.taskId,initialTab:"activity",clientThreadId:a})},[t.length,p,e.taskId,a,u]);const _=x.useCallback(()=>{p({type:"caterpillar",caterpillarId:e.taskId,initialTab:"activity",clientThreadId:a})},[p,e.taskId,a]);return t.length<=1?s.jsx(Z,{toggleSidebar:()=>c("activity"),openSidebar:_,startTime:new Date(e.createdAt).getTime()}):s.jsx(_e,{onClick:()=>c("activity"),statusMessage:o,showSources:!0,includeMargin:r>0,sources:r===0?s.jsx("div",{className:"text-pretty text-sm text-token-text-tertiary",children:s.jsx(b,{id:"zfwUjs",defaultMessage:"Looking for sources…"})}):s.jsxs("button",{onClick:y=>{y.stopPropagation(),c("sources")},className:L("flex shrink-0 gap-1 text-[13px] leading-[18px] text-[#0285ff]",u?"cursor-pointer hover:text-[#0285ff]/80":"cursor-auto"),children:[s.jsx("div",{className:"relative",children:s.jsx(X,{initial:!1,children:s.jsx(H.span,{initial:{opacity:0,rotateX:-90,translateY:20},animate:{opacity:1,rotateX:0,translateY:0},exit:{opacity:0,rotateX:90,translateY:-20},transition:{duration:.35},className:"absolute left-0 md:right-0",children:r},r)})}),s.jsx("div",{className:L("md:pr-0",r>0&&"pl-2",r>9&&"pl-[14px]",r>99&&"pl-[22px]"),children:r>1?s.jsx(b,{id:"zN+MuO",defaultMessage:" sources"}):s.jsx(b,{id:"dMowmJ",defaultMessage:" source"})})]}),progressBar:s.jsx("div",{className:"flex h-2 shrink grow basis-0 items-start justify-start gap-2.5 overflow-hidden rounded-[10px] bg-token-main-surface-tertiary",children:s.jsx(fs,{percentage:f,barClassName:"bg-token-text-primary",backgroundClassName:"bg-token-main-surface-tertiary"})})})}function ne({task:e,clientThreadId:a,messageWithTaskMetadata:t,totalSources:n,handleToggleCaterpillarSidebar:r}){const c=hs(e),m=!1,u=ps(a,e?.taskId),{clearSystemHintModeTrigger:o}=Js();return x.useEffect(()=>{e?.status===O.COMPLETED&&!u&&!m&&(c(),o(Ss.Research))},[e?.status,m,u,c,o]),s.jsx($,{message:s.jsxs(s.Fragment,{children:[t.metadata?.async_task_status_messages?.completed_with_time??t.metadata?.async_task_status_messages?.completed_no_time??s.jsx(b,{id:"4d0xZc",defaultMessage:"Completed"}),n===0?s.jsx(b,{id:"VggF2B",defaultMessage:" · 0 sources"}):n===1?s.jsx(b,{id:"zkkdKV",defaultMessage:" · 1 source"}):s.jsx(b,{id:"qcKt3q",defaultMessage:" · {sourcesCount} sources",values:{sourcesCount:n}})]}),handleToggleCaterpillarSidebar:()=>r("activity")})}function lt({messages:e,clientThreadId:a}){const t=e.find(g=>g.message.metadata?.b1de6e2_s&&g.message.metadata?.async_task_id)?.message,n=t?.metadata?.async_task_id,r=e.find(g=>g.message.recipient===de.START_RESEARCH_TASK),c=_s(a,r?.message.id),m=Ae({clientThreadId:a}),[u,o]=x.useState(m);return x.useEffect(()=>{const g=setTimeout(()=>{o(c&&m)},3e3);return()=>clearTimeout(g)},[m,c]),!t||!n?u?s.jsx(Z,{toggleSidebar:()=>{},openSidebar:()=>{},startTime:new Date().getTime()}):null:s.jsx(mt,{clientThreadId:a,payloadTaskId:n,messageWithTaskMetadata:t})}function mt({payloadTaskId:e,messageWithTaskMetadata:a,clientThreadId:t}){Es(e,a,t);const n=ys(f=>e?f.tasks[e]:null),r=W(),c=n?.status,m=x.useMemo(()=>n?.rows?n.rows:[],[n?.rows]),{toggleThreadSidebar:u}=q(),{totalSources:o}=x.useMemo(()=>{if(!m)return{uniqueSources:[],totalSources:0};const f=Ts(m),p=f.reduce((_,y)=>_+y.count,0);return{uniqueSources:f,totalSources:p}},[m]),g=pe("caterpillar"),l=x.useCallback(f=>{e&&u({type:"caterpillar",caterpillarId:e,initialTab:f,clientThreadId:t},g)},[u,e,g,t]);return Ms(e),a.metadata?.async_task_status_messages?.completed_with_time?s.jsx(ne,{task:n,clientThreadId:t,messageWithTaskMetadata:a,totalSources:o,handleToggleCaterpillarSidebar:l}):!n||!c||c===O.UNDETERMINED?s.jsx(Z,{toggleSidebar:()=>{},openSidebar:()=>{},startTime:new Date().getTime()}):n.status===O.COMPLETED?s.jsx(ne,{task:n,clientThreadId:t,messageWithTaskMetadata:a,totalSources:o,handleToggleCaterpillarSidebar:l}):n.status===O.FAILED?s.jsx($,{message:a.metadata?.async_task_status_messages?.error??r.formatMessage({id:"at6zk8",defaultMessage:"Failed to think"}),handleToggleCaterpillarSidebar:()=>l("activity")}):n.status===O.CANCELLED?s.jsx($,{message:a.metadata?.async_task_status_messages?.cancelled??r.formatMessage({id:"u1rIr5",defaultMessage:"Task Cancelled"}),handleToggleCaterpillarSidebar:()=>l("activity")}):s.jsx(dt,{task:n,clientThreadId:t,caterpillarRows:m,messageWithTaskMetadata:a,totalSources:o,handleToggleCaterpillarSidebar:l})}function ut(e,a,t){const n=a.elements.length;if(n===0)return;const r=Object.entries(e).reduce((c,[m,u])=>Array.isArray(u)?u.length>0?c+1:c:u!==""?c+1:c,0);Re.logEventWithStatsig("dynamic-form-submission","chatgpt_dyanmic_form_submission",{...De({clientThreadId:t}),totalItems:n.toString(),completedItems:r.toString(),ratio:(r/n).toString()})}function gt(e,a){let t="";return a.elements.forEach(n=>{const r=n.scope.split("/").pop(),c=r&&e[r],m=c?Array.isArray(c)?c.join(", "):c:"Any",u=n.label??r;t+=`${u}: ${m}
`}),t}function ft({messages:e,clientThreadId:a,isLastMessage:t}){const n=e.find(T=>T.message.author.role===ue.Assistant),r=e.find(T=>T.message.metadata?.json_form),c=r?.message.metadata?.json_form,[m,u]=x.useState({}),[o,g]=x.useState(),[l,f]=x.useState(),p=Ys(),_=Ks({clientThreadId:a});x.useEffect(()=>{c&&(g(c.json_form_ui),f(c.json_form_data))},[c]);const y=x.useCallback(()=>{if(u({}),o){const T={...o,elements:o.elements.filter(D=>D.scope!=="#/properties/AdditionalInfo")};g(T)}l&&(delete l.properties.AdditionalInfo,f(l))},[u,g,f,o,l]),v=x.useCallback(()=>{if(o){const T={...o,elements:[...o.elements,{type:"Control",scope:"#/properties/AdditionalInfo",label:"Additional Info",placeholder:"Any other details..."}]};g(T)}if(l){const T={...l.properties,AdditionalInfo:{type:"string"}};f({...l,properties:T})}},[g,f,o,l]),I=o?.elements.some(T=>T.scope.endsWith("#/properties/AdditionalInfo")),N=we.getThreadCurrentLeafId(a),M=r?.nodeId!==N;if(!r||!l||!o)return n?.message.status==="in_progress"&&t?s.jsxs("div",{className:"flex flex-col gap-2",children:[s.jsx(te,{className:"h-[26px] w-full"}),s.jsx(te,{className:"h-[26px] w-3/4"}),s.jsx(vs,{})]}):null;if(M)return null;const R=async()=>{const T=gt(m,o);ut(m,o,a),_({promptMessage:Le(T),completionMetadata:{systemHints:[...p],conversationMode:{kind:z.PrimaryAssistant}}})};return s.jsxs(js,{children:[s.jsx(xt,{formData:m,dataSchema:l,uiSchema:o,setData:u,readOnly:M}),s.jsxs("div",{className:"flex w-full justify-between",children:[I?s.jsx("div",{}):s.jsx(Y,{disabled:M,onClick:v,color:"secondary",className:"text-token-text-secondary",children:s.jsx(b,{id:"Sen69P",defaultMessage:"Add a detail"})}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(Y,{disabled:M,onClick:y,color:"secondary",className:"text-token-text-secondary",children:s.jsx(b,{id:"Uqo7UD",defaultMessage:"Reset"})}),s.jsx(Y,{disabled:M,onClick:R,children:s.jsx(b,{id:"FVou++",defaultMessage:"Start"})})]})]})]})}function xt({dataSchema:e,uiSchema:a,setData:t,readOnly:n,formData:r}){return s.jsx("div",{children:s.jsx(Cs,{formData:r,readOnly:n,schema:e,uiSchema:a,onChange:c=>t(c)})})}const oe=ge.div`group left-0 top-0 mr-1.5 overflow-hidden mt-1 text-start`,ht=({highlightedCommand:e,status:a,children:t,showWorkUserSetting:n=!1,hideOnlyIfNotInteractedWith:r=!1,defaultExpanded:c=!1,onOpenAnalytics:m,onClick:u,...o},g)=>{const l=t!=null||u!=null,[f]=x.useState(n),[p,_]=x.useState(n||c),[y,v]=x.useState(!1),I=a===V.Finished||a===V.Error,N=r?f?!1:!y:!1,M=a===V.Running&&"loading-shimmer";return I&&N?null:l?s.jsxs(s.Fragment,{children:[s.jsx(ie,{ref:g,$canShowWork:!0,...o,children:s.jsx(X,{children:s.jsx(oe,{children:s.jsx(H.button,{onClick:R=>{p||m?.(),_(T=>!T),v(!0),u?.(R)},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:L(M),children:s.jsxs("div",{className:"flex items-center justify-start gap-1",children:[s.jsx("span",{className:"text-start",children:e}),!u&&(p?s.jsx(bs,{className:"icon-md"}):s.jsx(ks,{className:"icon-md"}))]})},e?.toString())})})}),s.jsx(X,{children:p&&t&&s.jsx(H.div,{initial:"collapsed",animate:"reveal",exit:"collapsed",variants:{collapsed:{translateY:-20,opacity:0,height:0},reveal:{translateY:0,opacity:1,height:"auto"}},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden",children:t})})]}):s.jsx(ie,{ref:g,$canShowWork:!1,...o,children:s.jsx(oe,{className:L(M),children:e})})},ie=ge.span`block first:mt-0 relative
${({$canShowWork:e})=>e?"text-token-text-secondary hover:text-token-text-primary my-1.5":"text-token-text-secondary"}`,pt=x.forwardRef(ht),St=3,_t=.1,re=[0,.26,.4];function Et({nextMessage:e,isLastMessage:a,isRequestActive:t,isLastTurnInConversation:n,clientThreadId:r,turnIndex:c}){let m=a||!e||e&&!Q(e.message);const u=x.useRef(!1),o=xe(),g=G(r,U.getGizmoId);x.useEffect(()=>{e&&Q(e.message)&&!u.current&&(u.current=!0,Is(o,g))},[e,o,g]);const l=Fe(e?.message),f=Oe(e?.message);e?.message.id&&Xs(e?.message.id);const p=[];if(f?.[0]?.type==="navigation"&&e&&p.push(s.jsx(yt,{clientThreadId:r,turnIndex:c,nextMessage:e,isRequestActive:t,isLastTurnInConversation:n,navigationCitation:f[0]},"fast-nav")),m){const _=Pe(l.slice(0,St).map(v=>v.entries[0].url)),y=t?s.jsxs("div",{className:"flex items-center gap-1",children:[_.map((v,I)=>s.jsx(H.div,{className:L("-ml-1.5 first:ml-0 last:mr-1.5","relative"),initial:{width:I===0?0:6,opacity:0},animate:{width:20,opacity:1},transition:{duration:_t,delay:re[Math.min(I,re.length-1)]},children:s.jsx("div",{className:L("flex h-[22px] w-[22px] items-center overflow-hidden rounded-full","border-2 border-token-main-surface-primary bg-token-main-surface-primary"),children:s.jsx(Ns,{url:v,size:32,minSize:16,className:"icon-md rounded-full"})})},v)),s.jsx(b,{id:"jjx8Qg",defaultMessage:"Searching the web"})]}):s.jsx(b,{id:"fssXGM",defaultMessage:"Error while searching"});p.push(s.jsx(pt,{highlightedCommand:y,status:t?V.Running:V.Error},"search-gpt-query"))}return p.length?s.jsx(s.Fragment,{children:p}):null}const yt=({clientThreadId:e,turnIndex:a,nextMessage:t,isRequestActive:n,isLastTurnInConversation:r,navigationCitation:c})=>{const{scrollToHeader:m}=Ve("searchSources")??{},u=He(),o=Be()&&u?.type==="searchSources",{openThreadSidebar:g}=q(),{value:l}=fe("756982148");return x.useEffect(()=>{Ue.addFirstTiming("render.fastNavigation")},[]),x.useEffect(()=>{o&&g({type:"searchSources",scrollToHeader:m,clientThreadId:e,turnIndex:a,messageId:t?.message.id??""})},[]),x.useEffect(()=>{const f=t.message,p=f.metadata?.search_source,_=c.domains.map(y=>y.url);As.logEvent(K.searchToolRequestTimeToFastNav,e,f.id,{search_source:p,urls:_},()=>{p===ze.InstantQuery&&ws.logEvent(K.searchToolPageLoadTimeToFastNav,{message_id:f.id,urls:_,search_source:p})})},[e,t,c]),n&&r&&l?s.jsx(H.div,{initial:{opacity:n?0:1,height:n?0:"auto"},animate:{opacity:1,height:"auto"},children:s.jsx(ce,{clientThreadId:e,turnIndex:a,nextMessage:t,navigationCitation:c})}):s.jsx(ce,{clientThreadId:e,turnIndex:a,nextMessage:t,navigationCitation:c})},ce=({clientThreadId:e,turnIndex:a,nextMessage:t,navigationCitation:n})=>{const{toggleThreadSidebar:r}=q(),{value:c}=fe("756982148"),m=x.useMemo(()=>({clientThreadId:e,turnIndex:a,messageId:t?.message.id}),[e,a,t?.message.id]),u=x.useCallback((g,l)=>{r({type:"searchSources",scrollToHeader:l,clientThreadId:e,turnIndex:a,messageId:t?.message.id??""})},[r,e,a,t?.message.id]),o=Ls(m);return c?s.jsx(Qs,{navigation:n,onShowSearchResults:u,trackContentReferenceEvent:o}):s.jsx(Rs,{tldr:{type:"tldr",display_title:n.domains[0].title,url:n.domains[0].url,matched_text:"",start_idx:0,end_idx:0,page_title:"",breadcrumbs:[n.domains[0].domain],refs:[]},trackContentReferenceEvent:o})},Tt=C(()=>k(()=>import("./e9ff009uqusfgjsr.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]))),Mt=C(()=>k(()=>import("./budme7ga2r3x8egd.js"),__vite__mapDeps([11,1,3,4,12]))),vt=C(()=>k(()=>import("./h3kyyu1vfc54fgwo.js"),__vite__mapDeps([13,1,3,4,14,6,7,10]))),jt=C(()=>k(()=>import("./hdljn2guc8a6do38.js"),__vite__mapDeps([15,1,3,4,8,6,7,9,10])).then(e=>e.TextMessageEditor)),Ct=C(()=>k(()=>import("./hfcprtei6ztxm9h9.js"),__vite__mapDeps([16,1,3,4,17,6,7,18,2,5,8,9,10]))),bt=C(async()=>()=>null),kt=C(async()=>()=>null),It=C(()=>k(()=>import("./fhrx16jd9reambyh.js"),__vite__mapDeps([19,1,3,4,8,6,7,9,10,14,20,21,22]))),Nt=C(()=>k(()=>import("./mwzhm72p5w3hiavh.js"),__vite__mapDeps([23,1,3,4,6,7,8,9,10,14,20,21,22])).then(e=>e.BrowsingMessage)),At=C(()=>k(()=>import("./l9ye8cwfkgr8kxz3.js"),__vite__mapDeps([24,1,3,4,6,7])).then(e=>e.SearchResultMessage)),wt=C(()=>k(()=>import("./x3ju7asrz72fp0r5.js"),__vite__mapDeps([25,1,3,4,6,7,8,9,10,14,20,21,22])).then(e=>e.JITPluginMessage)),Lt=C(()=>k(()=>import("./4g9n823lx8x6dj2d.js"),__vite__mapDeps([26,3,1,4,6,7,8,9,10,14,20,21,22])).then(e=>e.DataAnalysisMessage)),Rt=C(()=>k(()=>import("./gyok5zb0k7brgm5q.js"),__vite__mapDeps([27,1,3,4,6,7,28,8,9,10,29,30,14,20,21,22]))),Dt=C(()=>k(()=>import("./bpzcjl16o6x41c7o.js"),__vite__mapDeps([31,1,3,4,32,33,8,6,7,9,10,34,35,36,37,38,17,39,40,41,20,42,43,28,44,45])).then(e=>e.CoTMessage)),Ft=C(()=>k(()=>import("./o1002m9jysh69ij9.js"),__vite__mapDeps([46,1,6,3,4,7,47,48,49,50])).then(e=>e.JawboneMessage));function Qt(e){switch(e.type){case i.Text:case i.Debug:return[e.message];case i.MultiText:case i.Browsing:case i.CodeInterpreter:case i.JITPlugin:case i.RetrievalBrowsing:case i.ParallelBrowsing:case i.Dalle:case i.t2uay3k:case i.GizmoEditor:case i.SearchResult:case i.a8km123:case i.f959b8c:case i.b1de6e2_c:case i.b1de6e2_s:case i.b1de6e2_d:case i.is_loading_message:case i.Canmore:case i.SonicCanvas:case i.de1d73e:case i.SearchGPTQuery:case i.l1p9k3u:case i.oiw209h:case i.c12k321:return e.messages;default:throw new Error("Bad")}}function Xt({groupedMessagesToRender:e,allMessages:a,allGroupedMessages:t,clientThreadId:n,isEditing:r,isUserTurn:c,isCompletionRequestInProgress:m,isFeedbackEnabled:u,isFinalTurn:o,turnIndex:g,hasActiveRequest:l,showEditButton:f=!1,handleEnterEdit:p,handleExitEdit:_,onRequestCompletion:y,shouldGrowContainer:v=!0}){const I=Ds(),{showDebugConversationTurns:N}=Fs(),[M]=G(n,d=>[d?.mode]),R=qe(n),T=Os(),D=t.some(d=>Ps.includes(d.type)),F=e.map((d,h)=>{const A=h===t.length-1;switch(d.type){case i.Text:case i.MultiText:{const E=e[h-1],w=E?.type,j=E&&"messages"in E?E.messages:void 0;if(d.type===i.Text){const J=d?.message&&!Q(d.message.message),Ee=r?s.jsx(jt,{message:d.message,clientThreadId:n,onRequestCompletion:y,onExitEdit:_,disabled:l}):D&&J?null:s.jsx(Ws,{className:"min-h-8",message:d.message,isFeedbackEnabled:u,isCompletionInProgress:A&&m,turnIndex:g,clientThreadId:n,showEditButton:f,onEnterEdit:p,isUserTurn:c,prevGroupedMessageType:w,prevGroupedMessages:j});return s.jsxs(x.Fragment,{children:[Ee,s.jsx(Bs,{isUserTurn:c,message:d.message.message})]},"group-"+d.message.nodeId)}else return d.type===i.MultiText?s.jsx(vt,{clientThreadId:n,messages:d.messages,isCompletionInProgress:A&&m,isFeedbackEnabled:u,prevGroupedMessageType:w,prevGroupedMessages:j},"multitext-"+(d.messages[0]?.nodeId??h)):d.type}case i.Browsing:case i.RetrievalBrowsing:{const E=M!=null&&[z.GizmoInteraction,z.GizmoMagicCreate,z.GizmoTest].includes(M.kind),w=R?Hs(R):!1;return s.jsx(Nt,{messages:d.messages,isRequestActive:l,isLastMessageInTurn:A,isUsingGizmo:E,isUsingSnorlax:w,isRetrieval:d.type===i.RetrievalBrowsing},"browsing-"+(d.messages[0]?.nodeId??h))}case i.SearchGPTQuery:{const E=t.slice(h+1).find(({type:j})=>j===i.Text||j===i.SonicCanvas),w=E?.type===i.Text?E.message:E?.type===i.SonicCanvas?E.messages[0]:void 0;return s.jsx(Et,{clientThreadId:n,turnIndex:g,isRequestActive:l,isLastMessage:A,isLastTurnInConversation:o,nextMessage:w},"searchquery-"+(d.messages[0]?.nodeId??h))}case i.a8km123:if(I?.isEnabled&&d.messages.find(({message:E})=>E.metadata?.model_slug?.includes("o3-mini"))){const E=a.findLastIndex(({message:w})=>w.author.role===ue.Assistant&&w.recipient==="all");return s.jsx(Dt,{isStreaming:(A||E<h)&&m,messages:d.messages},"sum-"+(d.messages[0]?.nodeId??h))}return s.jsx(Rt,{messages:d.messages,isStreaming:A&&m,isLastMessage:A,clientThreadId:n,currentGroupedMessageIndex:h,turnIndex:g},"sum-"+(d.messages[0]?.nodeId??h));case i.f959b8c:return null;case i.is_loading_message:return A&&m?s.jsx(Vs,{},"loading-message-"+h):null;case i.c12k321:return null;case i.l1p9k3u:return null;case i.b1de6e2_c:return s.jsx(ft,{messages:d.messages,clientThreadId:n,isLastMessage:A},"b1de6e2-"+(d.messages[0]?.nodeId??h));case i.b1de6e2_s:return s.jsx(lt,{messages:d.messages,clientThreadId:n},"b1de6e2_s-"+(d.messages[0]?.nodeId??h));case i.b1de6e2_d:return null;case i.de1d73e:if(T){const E=h+1<t.length?t[h+1]:void 0;return s.jsx(Ft,{clientThreadId:n,currentGroupedMessage:d,nextMessage:E&&E.type===i.Text?E.message:void 0,isLastMessage:A,isRequestActive:l},"jawbone-"+(d.messages[0]?.nodeId??h))}else return null;case i.ParallelBrowsing:return s.jsx(It,{messages:d.messages},"parallel-"+(d.messages[0]?.nodeId??h));case i.CodeInterpreter:return s.jsx(Lt,{messages:d.messages,isRequestActive:l,clientThreadId:n},"ada-"+(d.messages[0]?.nodeId??h));case i.JITPlugin:return s.jsx(wt,{messages:d.messages,clientThreadId:n,isLastTurnInConversation:o,onRequestCompletion:y},"jit-"+(d.messages[0]?.nodeId??h));case i.t2uay3k:return s.jsx(kt,{messages:d.messages,clientThreadId:n},"t2uay3k-"+(d.messages[0]?.nodeId??h));case i.Dalle:return s.jsx(Ct,{messages:d.messages,clientThreadId:n},"dalle-"+(d.messages[0]?.nodeId??h));case i.GizmoEditor:return s.jsx(Tt,{messages:d.messages},"gizmo-editor-"+(d.messages[0]?.nodeId??h));case i.oiw209h:return s.jsx(bt,{messages:d.messages,clientThreadId:n},"oiw209h-"+(d.messages[0]?.nodeId??h));case i.Canmore:return s.jsx(st,{messages:d.messages,allGroupedMessages:e,isFinalTurn:o,isRequestActive:l,clientThreadId:n},"canmore-"+(d.messages[0]?.nodeId??h));case i.SonicCanvas:return d.messages[0],!1;case i.Debug:return N?s.jsx(Mt,{message:d.message},"debug-"+d.message.nodeId):null;case i.SearchResult:return s.jsx(At,{messages:d.messages},"search-result-"+(d.messages[0]?.nodeId??h))}});return s.jsx(Pt,{shouldGrowContainer:v,children:F})}function Ot(){return s.jsx(Us,{type:"danger",children:s.jsx(b,{id:"5eGo3w",defaultMessage:"Unable to display this message due to an error."})})}function Pt({children:e,shouldGrowContainer:a}){return s.jsx("div",{className:L({"flex max-w-full flex-col":!0,"flex-grow":a}),children:s.jsx(We,{name:"GroupedMessages",fallback:Ot,children:e})})}export{Xt as C,pt as T,Qt as g};
//# sourceMappingURL=kxggiygl9l9wvt1i.js.map
