import{l as $,E as W,F as O,aU as re,aT as b,R as N,D as U,P as Se,a as he,y as q,a9 as Te,fT as Ce,aS as ke,fU as Ee,du as be,b$ as Re,cL as we,bT as Ae,bU as Me,aZ as Ie,Y as Oe,X as qe,a6 as Pe,a7 as te,fV as Fe,fW as oe,fX as Ne,fr as Ue,fY as Le,fZ as xe}from"./cyi7nanrg0vdotzd.js";import{ew as He,ex as ze,en as R,eo as w,ey as De,ez as Ve,eA as Be,eB as Ge,eC as Qe,eD as ne,eE as $e,l as We,c5 as Ye,a8 as Je,eF as se,eG as Ke,eH as Xe,eI as Ze,eJ as je,eK as et,eL as tt,eM as ot,eN as nt,eO as st,eP as ie,eQ as it,eR as rt,eS as at}from"./df9u9imhvwerk6zv.js";import{b as ct,f as dt,r as lt}from"./fs6h2trisr1juto6.js";import{T as ut}from"./kg9pnjn9ianmg7dc.js";const _t="OAI-Echo-Logs",k={FOCUS_IN:0,FOCUS_OUT:1,COPY:2,PASTE:3,TOUCH_START:4,TOUCH_END:5},ae=[];function E(e){return()=>{ae.push({type:e,ts:Math.round(performance.now())})}}const pt={focusin:E(k.FOCUS_IN),focusout:E(k.FOCUS_OUT),copy:E(k.COPY),paste:E(k.PASTE),touchstart:E(k.TOUCH_START),touchend:E(k.TOUCH_END)};function bt(e){const t=e??document.getElementById(ut);for(const[n,a]of Object.entries(pt))t?.removeEventListener(n,a),t?.addEventListener(n,a)}function gt(){return{[_t]:ae.slice(0,10).map(e=>`${e.type},${e.ts}`).join(",")}}function mt(e,t,n,a,o){const r=yt(e,t,n,o);return vt(n,a,r)}const ft=1e3*30,I=He.getTracer("completion");function Q(e,t){R.count(w.DEFAULT,e,[{key:"prepare_sent",value:t&&t!=="none"?"true":"false"},{key:"prepare_succeeded",value:t==="success"?"true":"false"},{key:"prepare_failed",value:t==="failure"?"true":"false"}])}async function*vt(e,t,n){let a=!1,o=!1,r=!1,l=!1,g,y,p,m,u;I.startActiveSpan("completion.response",s=>{g=I.startSpan("completion.first_response"),y=I.startSpan("completion.first_token_including_tool_calls"),p=I.startSpan("completion.first_token_including_visible_content"),m=I.startSpan("completion.first_token"),u=s});let c=setTimeout(()=>{Se.logEvent(he.sseResponseWaitTooLong,{}),e.logCompletion({type:De.Error,error:{reason:"timeout",message:"SSE Response Took Too Long to Come Back"}})},ft);try{t?.logTiming("prompt_submitted");for await(const s of n)yield s,s.type!=="connected"&&c&&(clearTimeout(c),c=null),s.type==="message"&&(e.onMessageUpdate(s.message),a||(a=!0,g?.end(),t?.logTiming("first_response")),!o&&s.message.author.role===q.Assistant&&(o=!0,y?.end(),t?.logTiming("first_assistant_token")),!r&&s.message.author.role===q.Assistant&&Te(s.message)&&(r=!0,p?.end(),t?.logTiming("first_visible_content_token")),!l&&s.message.author.role===q.Assistant&&Ce(s.message)&&(l=!0,m?.end(),t?.logTiming("first_message_token"))),s.type==="perf_stats"&&e.addServerPerfStats(s),s.type==="done"&&e.onStreamClose()}catch(s){throw c&&(clearTimeout(c),c=null),s}finally{u?.end()}}async function*yt(e,t,n,a){const{conduitToken:o,prepareState:r,model:l,f_completion:g,f_shadow_completion:y}=t,p=ke(e)?Ve(3010482349,`${l}-AAAA`)?window.location.origin+"/backend-alt":window.location.origin+"/backend-api":window.location.origin+"/backend-anon";let m=`${p}/conversation`;g&&(m=`${p}/f/conversation`),n.onSentUserMessage();const u="threadId"in t?t.threadId:void 0;y&&(N.postAnonAware("/s/f/conversation",{conversation_id:u},{additionalHeaders:{...o?{"x-conduit-token":o}:{}}}).then(i=>{R.count(w.DEFAULT,"conduit_s_conversation_api_success",[{key:"was_warmed",value:i.was_warmed?"true":"false"},{key:"token_present",value:o!=="no-token"&&o!=null&&o!==""?"true":"false"},{key:"matching_convo_id",value:i.conversation_id===u?"true":"false"},{key:"prepare_sent",value:r!=="none"?"true":"false"},{key:"prepare_succeeded",value:r==="success"?"true":"false"},{key:"prepare_failed",value:r==="failure"?"true":"false"}])}).catch(i=>{R.count(w.DEFAULT,"conduit_s_conversation_api_error"),U.addError(i)}),N.postAnonAware("/s/f/conversation/empty",{conversation_id:u},{additionalHeaders:{...o?{"x-conduit-token":o}:{}}}).catch(i=>{R.count(w.DEFAULT,"conduit_s_conversation_api_empty_error"),U.addError(i)}));const c=Be(m,{ctx:e,method:"POST",headers:{...gt(),...Ee(t.chatReq,t.turnstileToken,t.proofToken,null),...o?{"x-conduit-token":o}:{}},body:ce(t),intercomEventOnError:"fetch-error:conversation:new-message",signal:a,observer:{onEvent:i=>{n.onStreamEvent(i.byteLength,i.isDoneEvent)},onClose:(i,_)=>{i==="completed"?(n.onStreamClose(),t.f_completion&&Q("conduit_f_conversation_api.success",r)):i==="aborted"?(n.handleAbort(_),t.f_completion&&Q("conduit_f_conversation_api.aborted",r)):(n.handleRawError(_ instanceof Error||typeof _=="string"?_:JSON.stringify(_)),Q("conduit_f_conversation_api.error",r))}}}),s=Ge(c,i=>{n.stream_encoding=i});let T=!1;for await(const i of s)if("response"in i)yield{type:"connected",serverRequestId:i.response.headers.get("Cf-Ray")??null};else{const _=ht(i.data);_&&(_.type==="done"&&(T=!0),yield _)}T||(yield{type:"done"})}function ce(e){const t="threadId"in e?e.threadId:void 0;return{action:e.completionType,messages:e.messages.length>0?e.messages.map(St):void 0,conversation_id:t,continue_from_shared_conversation_id:"continueFromSharedConversationId"in e&&t==null?e.continueFromSharedConversationId:void 0,parent_message_id:e.parentMessageId,model:e.model,timezone_offset_min:new Date().getTimezoneOffset(),timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,variant_purpose:e.completionMetadata?.variantPurpose,suggestions:e.completionMetadata?.suggestions?e.completionMetadata.suggestions.map(n=>Qe(n)):void 0,chosen_suggestion:e.completionMetadata?.suggestion?{type:e.completionMetadata.suggestion.type,index:e.completionMetadata.suggestionIndex,source:e.completionMetadata.suggestion.type===ne.Autocomplete?e.completionMetadata.suggestion.source:void 0,user_input:e.completionMetadata.suggestion.type===ne.Autocomplete?e.completionMetadata.suggestion.userInput:void 0}:void 0,history_and_training_disabled:h(e.historyDisabled),conversation_mode:be(e.completionMetadata?.conversationMode),force_paragen:h(e.forceParagen),force_paragen_model_slug:e.forceParagenModel,force_indepth_feedback:h(e.forceIndepthFeedback),force_rate_limit:h(e.forceRateLimit),reset_rate_limits:h(e.resetRateLimits),record_rendering:h(e.recordRendering),disable_system_content_toggling:h(e.disableSystemContentToggling),enable_message_followups:e.enableMessageFollowups,source:e.completionMetadata?.source,system_hints:e.completionMetadata?.systemHints,prefetch_ids:e.completionMetadata?.prefetchIds,supports_buffering:!0,supported_encodings:[$e.V1],conversation_origin:F(e.conversationOrigin),force_use_search:F(e.forceUseSearch),client_reported_search_source:e.completionMetadata?.searchSource,client_contextual_info:e.contextualInfo,paragen_stream_type_override:F(e.paragenStreamType==="none"?null:e.paragenStreamType),paragen_cot_summary_display_override:F(e.paragenCotSummaryDisplay==="none"?null:e.paragenCotSummaryDisplay),is_onboarding_conversation:h(e.isOnboardingConversation)}}function St(e){let t=e;return e.clientMetadata&&(t={...e},delete t.clientMetadata),t}function h(e){if(e===!0)return e}function F(e){if(e!=null)return e}function ht(e){if("type"in e)switch(e.type){case"gizmo_inline_review":return{type:"gizmo_inline_review",gizmoId:e.gizmo_id};case"title_generation":return{type:"title_generation",title:e.title,conversation_id:e.conversation_id};case"moderation":return{type:"moderation",conversationId:e.conversation_id,messageId:e.message_id,isCompletion:e.is_completion,flagged:e.moderation_response.flagged,blocked:e.moderation_response.blocked,disclaimers:e.moderation_response.disclaimers,metadata:e.moderation_response.metadata};case"url_moderation":return{type:"url_moderation",conversationId:e.conversation_id,messageId:e.message_id,url:e.url_moderation_result.full_url,isSafe:e.url_moderation_result.is_safe};case"num_variants_in_stream":return{type:"num_variants_in_stream",num_variants_in_stream:e.num_variants_in_stream,display_treatment:e.display_treatment};case"perf_stats":case"conversation_detail_metadata":return e;case"message_stream_complete":return{type:"done"};default:return}if(e.message)return{type:"message",message:e.message,conversationId:e.conversation_id}}async function Rt(e,t){if(!ze())return;const n=$(e),a=W(e),o=a?.conversationOrigin??null,r=O.getCurrentNode(a),l=a?.conduitToken??null,g=a?.prepareState??"none",y={threadId:n,prepareState:g,conduitToken:l,conversationOrigin:o,model:t,completionType:re.Next,messages:[],parentMessageId:r.message.id},p=ce(y),m={"x-conduit-token":l??"no-token"};try{b(e,s=>{s.prepareState="sent"});const u=await N.safePost("/f/conversation/prepare",{requestBody:p,additionalHeaders:m,anonAware:!0}),{conduit_token:c}=u;b(e,s=>{s.conduitToken=c,s.prepareState="success"})}catch(u){R.count(w.DEFAULT,"conduit_f_conversation_prepare_api_error"),U.addError(u),b(e,c=>{c.conduitToken=null,c.prepareState="failure"})}}async function wt(e){const t=$(e),a={"x-conduit-token":W(e)?.conduitToken??"no-token"};try{b(e,l=>{l.prepareState="sent"});const o=await N.postAnonAware("/s/f/conversation/prepare",{conversation_id:t},{additionalHeaders:a}),{conduit_token:r}=o;b(e,l=>{l.conduitToken=r,l.prepareState="success"})}catch(o){R.count(w.DEFAULT,"conduit_s_conversation_prepare_api_error"),U.addError(o),b(e,r=>{r.conduitToken=null,r.prepareState="failure"})}}function At(e){const t=Re(),n=ct(),a=we(),o=Ae(),r=dt(),l=We(),g=Ye(e),y=g&&"gizmo"in g?g.gizmo?.gizmo.id:void 0,p=Je(y),m=y?p?se.PROJECT:se.GPT:void 0,u=Ke(e),c=Xe();return lt.useCallback(async function({requestedModelId:s,completionType:T=re.Next,sourceEvent:i,eventSource:_,completionMetadata:L,extraStreamParams:de,parentMessageId:x,promptMessage:H,existingMessages:z,prependMessages:Y,appendMessages:J,profiler:A}){const D=i?.timeStamp??performance.now(),le=_??(i?Ze(i):"mouse"),V=new AbortController,ue=xe(),_e=$(e),P=`request-${e}-${ue}`,f=W(e),{conduitToken:pe=null,prepareState:ge="none"}=f??{},B=s??f?.modelId??je(Me(n,o)).id,me=O.findNode(f,d=>d.message.author.role===q.Assistant||d.message.author.role===q.Tool)==null,fe=f?.continuingFromSharedConversationId!=null,K=x?O.getNode(f,x):z?.[0]?O.getParentNode(f,z[0].id):O.getCurrentNode(f),ve=K.message.id??K.id,X=[...z??[],...Y??[],...H?[H]:[],...J??[]],M=new et({clientRequestId:P,gizmoType:m,preflightTime:D});M.onUserMessages(X);const C=new tt(t,P,n,f,e,x,Y,H,J,T,B,le,o,D,r,p,me,fe,M);ot(e),Ie.publish({kind:"requestCompletion"}),nt(e,{source:Oe.CLIENT,value:qe.STREAMING}),Pe.addRequest(P,V,M),st.onCompletionRequestStarted(P),C.updateBeforeRequest(),A?.logTiming("start_chat_requirements");const G=te("2411734826")||c;let S=G?Fe():null,Z=G&&S?ie.getEnforcementTokenSync(S):null,j=G&&S?oe.getEnforcementTokenSync(S):null;S??=await Ne(),A?.logTiming("fetched_chat_requirements"),S.force_login&&l({authType:"login"}),Z??=await ie.getEnforcementToken(S).then(d=>(A?.logTiming("fetched_turnstile_token"),d),d=>null),j??=await oe.getEnforcementToken(S).then(d=>(A?.logTiming("fetched_p_token"),d),d=>null);const ee=Ue(o);n.getQueriesData(ee)==null&&await n.ensureQueryData(ee),it()&&await rt();const v=at();M.onCompletionStarted(T,B),C.preflightTime=performance.now()-D;const ye=mt(t,{conversationOrigin:f?.conversationOrigin??null,model:B,completionType:T,prepareState:ge,conduitToken:pe,threadId:_e,continueFromSharedConversationId:f?.continuingFromSharedConversationId,historyDisabled:o,parentMessageId:ve,messages:X,chatReq:S,turnstileToken:Z,proofToken:j,completionMetadata:L,contextualInfo:{is_dark_mode:a,time_since_loaded:Math.floor(performance.now()/1e3),page_height:window.innerHeight,page_width:window.innerWidth,pixel_ratio:window.devicePixelRatio,screen_height:window.screen.height,screen_width:window.screen.width},isOnboardingConversation:L?.isOnboardingConversation??u,forceParagen:v.forceParagen,forceParagenModel:v.forceParagen?v.forceParagenModel.value:void 0,forceRateLimit:v.forceRateLimit,resetRateLimits:v.resetRateLimits,recordRendering:v.recordRendering,disableSystemContentToggling:v.rebaseSystemMessageContent!=null,forceUseSearch:v.forceUseSearch??void 0,paragenStreamType:v.paragenStreamType,paragenCotSummaryDisplay:v.paragenCotSummaryDisplay,...c?{f_completion:!0}:{},...!c&&te("3257646228")?{f_shadow_completion:!0}:{},...de},M,A,V.signal);try{for await(const d of ye)d.type==="connected"?C.handleStreamConnected(d):d.type!=="perf_stats"&&C.handleResponse(d)}catch(d){Le(d)||V.signal.aborted?C.handleAbort(d):C.handleError(d)}},[t,e,n,o,a,r,l,m,p,c,u])}export{wt as a,Rt as m,bt as t,At as u};
//# sourceMappingURL=f3zzw463zuggq6da.js.map
