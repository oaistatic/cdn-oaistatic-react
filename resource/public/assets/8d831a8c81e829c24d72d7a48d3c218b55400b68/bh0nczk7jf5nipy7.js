import{dc as Te,aI as ve,R as te,gi as ye,b as S,gj as oe,gk as ne,gl as Se,gm as Ce,D as Y,n as G,aC as Ee,gn as we,P as se,a as ie,ap as re,cf as Re,eF as Ie,bE as ke,go as Me,gp as Oe,aL as Ae,s as be,r as ae,al as P,Y as de,a0 as ce,t as Ne,ak as qe,ag as xe,af as De,aR as Pe,be as He,gq as Fe,gr as Ue}from"./efuue3ezs0mj4ucx.js";import{dU as fe,dV as Le,dW as We,dX as le,dY as ue,dZ as ge,d_ as ze,d$ as Be,o as Ve,a7 as $e,e0 as je,e1 as me,e2 as Ge,e3 as Je,e4 as Ke,e5 as Qe,e6 as Ye,ay as Xe,e7 as Ze,e8 as et,e9 as tt}from"./c87uv1mutc86tiqk.js";import{v as ot,a as nt,r as st}from"./n1tvutderx19k1zs.js";import{T as it}from"./d995zjnlydagrugw.js";const rt="OAI-Echo-Logs",M={FOCUS_IN:0,FOCUS_OUT:1,COPY:2,PASTE:3,TOUCH_START:4,TOUCH_END:5},pe=[];function O(n){return()=>{pe.push({type:n,ts:Math.round(performance.now())})}}const at={focusin:O(M.FOCUS_IN),focusout:O(M.FOCUS_OUT),copy:O(M.COPY),paste:O(M.PASTE),touchstart:O(M.TOUCH_START),touchend:O(M.TOUCH_END)};function pt(n){const t=n??document.getElementById(it);for(const[s,c]of Object.entries(at))t?.removeEventListener(s,c),t?.addEventListener(s,c)}function dt(){return{[rt]:pe.slice(0,10).map(n=>`${n.type},${n.ts}`).join(",")}}const ct=1e3*30,H=fe.getTracer("completion");class _e extends Error{}function lt(n,t,s,c,C){const g=new AbortController,w=C?Le([C,g.signal]):g.signal,A="threadId"in t?t.threadId:void 0,b="continueFromSharedConversationId"in t?t.continueFromSharedConversationId:void 0,F=ot(),U=t.model,L={action:t.completionType,messages:t.messages.length>0?t.messages:void 0,conversation_id:A,continue_from_shared_conversation_id:A!=null?void 0:b,parent_message_id:t.parentMessageId,model:t.model,timezone_offset_min:new Date().getTimezoneOffset(),timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,variant_purpose:t.completionMetadata?.variantPurpose,suggestions:t.completionMetadata?.suggestions?t.completionMetadata.suggestions.map(o=>We(o)):void 0,chosen_suggestion:t.completionMetadata?.suggestion?{type:t.completionMetadata.suggestion.type,index:t.completionMetadata.suggestionIndex,source:t.completionMetadata?.suggestion.type===le.Autocomplete?t.completionMetadata.suggestion.source:void 0,user_input:t.completionMetadata?.suggestion.type===le.Autocomplete?t.completionMetadata.suggestion.userInput:void 0}:void 0,history_and_training_disabled:t.historyDisabled,juice:t.completionMetadata?.juice,conversation_mode:t.completionMetadata?.conversationMode,force_paragen:t.forceParagen,force_paragen_model_slug:t.forceParagenModel,force_indepth_feedback:t.forceIndepthFeedback,force_rate_limit:t.forceRateLimit,reset_rate_limits:t.resetRateLimits,disable_system_content_toggling:t.disableSystemContentToggling,websocket_request_id:F,source:t.completionMetadata?.source,system_hints:t.completionMetadata?.systemHints,prefetch_ids:t.completionMetadata?.prefetchIds,supports_buffering:!0,supported_encodings:[ue.V1],conversation_origin:t.conversationOrigin,force_use_search:t.forceUseSearch,client_reported_search_source:t.completionMetadata?.searchSource,client_contextual_info:t.contextualInfo,paragen_stream_type_override:t.paragenStreamType==="none"?null:t.paragenStreamType,paragen_cot_summary_display_override:t.paragenCotSummaryDisplay==="none"?null:t.paragenCotSummaryDisplay,is_onboarding_conversation:t.isOnboardingConversation},N=U.startsWith("o1")&&U.endsWith("o");let f,m;const W=Te(n);ve(W)?(m=window.location.origin+"/backend-anon",f=te.getUnauthHeaders().additionalHeaders):(N?m=window.location.origin+"/backend-alt":m=window.location.origin+"/backend-api",f=te.getAuthedHeadersWithAccessToken(W?.accessToken));const r=`${m}/conversation`,z=ye(t.chatReq,t.turnstileToken,t.proofToken,null),q={...f,...dt(),...z};let R=!1,p=!1,B=!1,E=!1,V,$,j,h,I;H.startActiveSpan("completion.response",o=>{V=H.startSpan("completion.first_response"),$=H.startSpan("completion.first_token_including_tool_calls"),j=H.startSpan("completion.first_token_including_visible_content"),h=H.startSpan("completion.first_token"),I=o});const T=fe.setSpan(ge.active(),I);let k=null,a=!1;function J(){a||(a=!0,s({type:"done"}))}function X(o){if(t.turnTracker.onBytesReceived(o.data),o.data==="[DONE]")g.abort(),I.end(),J();else if(o.event!=="ping")try{let e=JSON.parse(o.data);if(o.event==="delta_encoding")if(e===ue.V1)t.turnTracker.stream_encoding=e,k=new Be;else{Y.addError(`[completion-delta] unknown delta encoding: ${e}`);return}else if(o.event==="delta"){if(!k){Y.addError("[completion-delta] delta event before delta_encoding");return}e=k.applyDelta(e)}if(e.error){const l=S.createWithErrorMessage(r,"server",e.error);throw s({type:"error",error:l}),l}else"type"in e?e.type==="gizmo_inline_review"?s({type:"gizmo_inline_review",gizmoId:e.gizmo_id}):e.type==="title_generation"?s({type:"title_generation",title:e.title,conversation_id:e.conversation_id}):e.type==="moderation"?s({type:"moderation",conversationId:e.conversation_id,messageId:e.message_id,isCompletion:e.is_completion,flagged:e.moderation_response.flagged,blocked:e.moderation_response.blocked,disclaimers:e.moderation_response.disclaimers,metadata:e.moderation_response.metadata}):e.type==="url_moderation"?s({type:"url_moderation",conversationId:e.conversation_id,messageId:e.message_id,url:e.url_moderation_result.full_url,isSafe:e.url_moderation_result.is_safe}):e.type==="num_variants_in_stream"?s({type:"num_variants_in_stream",num_variants_in_stream:e.num_variants_in_stream,display_treatment:e.display_treatment}):e.type==="conversation_detail_metadata"?s(e):e.type==="message_stream_complete"&&J():(s({type:"message",message:e.message,conversationId:e.conversation_id}),R||(R=!0,V.end()),!p&&e.message.author.role===G.Assistant&&(p=!0,$.end()),!B&&e.message.author.role===G.Assistant&&Ee(e.message)&&(B=!0,j.end()),!E&&e.message.author.role===G.Assistant&&we(e.message)&&(E=!0,h.end()))}catch(e){if(e instanceof S)throw e}}let v=null,y=setTimeout(()=>{v===!0?(se.logEvent(ie.asyncResponseWaitTooLong,{}),t.turnTracker.logCompletion({type:re.Error,error:{reason:"timeout",message:"Async Response Took Too Long to Come Back"}})):v===!1&&(se.logEvent(ie.sseResponseWaitTooLong,{}),t.turnTracker.logCompletion({type:re.Error,error:{reason:"timeout",message:"SSE Response Took Too Long to Come Back"}}))},ct);ge.with(T,()=>(t.profiler?.logTiming("fetch_event_source"),ze(r,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",...q},body:JSON.stringify(L),signal:w,openWhenHidden:!0,async onopen(o){const e=o.headers.get("content-type")??"",l=o.headers.get("Cf-Ray")??null;if(o.ok&&e.includes("text/event-stream")){v=!1,c(l,t.model);return}else if(e.includes("application/json")){const x=await o.json(),u=new S(r,o.status,x);if(u.isServerError())throw u;if((u?.code==="expired_session_key"||u?.code==="invalid_api_key"||u?.code==="token_expired")&&typeof window<"u"&&window._oaiHandleSessionExpired?.("stream",JSON.stringify(u)),u?.code==="deactivated_workspace"){window.location.href.includes("/workspace/deactivated")||(window.location.href="/workspace/deactivated");return}throw u}else{const x=await o.text();throw new S(r,o.status,{detail:{message:oe,code:"unexpected_content_type",contentType:e,text:x?.substring(0,1e3)}})}},onmessage:o=>{if(v)throw S.createWithErrorMessage(r,"server",oe);y&&(clearTimeout(y),y=null),X(o)},onerror(o){let e=o instanceof Error?o:new Error(JSON.stringify(o));throw e instanceof _e||v||(e.message==="Failed to fetch"&&(e=S.createWithErrorMessage(r,"server",`An error occurred. Either the engine you requested does not exist or there was another issue processing your request. ${ne}`)),e.message==="network error"&&(e=S.createWithErrorMessage(r,"client",`A network error occurred. Please check your connection and try again. ${ne}`)),Se("fetch-error:conversation:new-message",{url:r,message:e?.message}),s({type:"error",error:e})),e}}))).catch(async o=>{o instanceof _e||(o instanceof S?Ce(o):Y.addError(o),t.turnTracker.handleRawError(o.message??"Something went wrong",o.status))})}function ht({clientThreadId:n,onCreate:t=He}){const s=nt(),c=Re(),C=Ie(),g=ke(),w=Ve(),A=null,b=$e(n),F=b&&"gizmo"in b?b.gizmo?.gizmo.id:void 0,U=je(F),L=F?U?me.PROJECT:me.GPT:void 0;return st.useCallback(async function({model:N,completionType:f,parentNodeId:m,metadata:W,completionMetadata:r,extraStreamParams:z,prependMessages:q,appendMessages:R,profiler:p}){const B=performance.now();p?.logTiming("start_chat_requirements");const E=await Me();p?.logTiming("fetched_chat_requirements"),E.force_login&&w({authType:"login"});const[V,$]=await Promise.all([Ge.getEnforcementToken(E).then(i=>(p?.logTiming("fetched_turnstile_token"),i),i=>null),Oe.getEnforcementToken(E).then(i=>(p?.logTiming("fetched_p_token"),i),i=>null)]),j=performance.now()-B;Ae.publish({kind:"requestCompletion"});const h=be.getTree(ae(n));P.retainThread(n);const I=Ue(),T=`${Fe}${n}-${I}`,k=`${n}-${I}`,a=h.getNodeByIdOrMessageId(m);h.getConversationTurns(m,A!=null).length>2&&de(n,i=>{i.scrollToMessageId=a.message.id});const v={gizmo_id:a.message.metadata?.gizmo_id};r?.juice!=null&&(v.snorkle_status=1),P.updateTree(n,i=>{i.addNode(T,"",m,G.Assistant,void 0,v)}),P.setThreadCurrentLeafId(n,T);let y,_=[],o=h.getNodeByIdOrMessageId(a.parentId);for(;o!=null&&(o.metadata?.isPlaceholderTemplateAssistantWelcomeMessage===!0||o.metadata?.isClientCreatedSystemMessage===!0);){const i=o.message;_.unshift(i);const d=h.getNodeByIdOrMessageId(o.parentId);y=d.message?.id??d.id,o=d}if(f===ce.Next||f===ce.Variant){const i=h.getNodeByIdOrMessageId(a.parentId);if(y??=i.message?.id??i.id,q){let d=a.parentId,K=a.id;P.updateTree(n,D=>{for(const Q of q)D.insertNodeBefore(K,{id:Q.id,message:Q,parentId:d,children:[]}),d=Q.id}),_.push(...q)}if(_.push(a.message),R){let d=m;P.updateTree(n,K=>{for(const D of R)K.insertNodeBefore(T,{id:D.id,message:D,parentId:d,children:[]}),d=D.id}),_.push(...R)}_=ut(_,z)}else y??=a.message.id;const e=Ne(n);e===void 0&&qe(n)&&de(n,i=>{i.initialThreadData.lastModelUsed=N});const l=new Je({gizmoType:L});l.updateAttachmentCount(_),Ke()&&await Qe();const x=new Ye(s,n,T,f,N,W.eventSource,t,C,k,l,g),u=(i,d)=>{i&&l.onReceivedRequestId(i),et(k,d,i,j)},he={is_dark_mode:c,time_since_loaded:Math.floor(performance.now()/1e3),page_height:window?.innerHeight,page_width:window?.innerWidth,pixel_ratio:window?.devicePixelRatio,screen_height:window?.screen?.height,screen_width:window?.screen?.width},Z=ae(n),ee=new AbortController;lt(s,{conversationOrigin:Z?.conversationOrigin??null,model:N,completionType:f,threadId:e,continueFromSharedConversationId:Z?.continuingFromSharedConversationId,historyDisabled:g,parentMessageId:y,messages:_,chatReq:E,turnstileToken:V,proofToken:$,completionMetadata:r,...z,turnTracker:l,profiler:p,contextualInfo:he,isOnboardingConversation:r?.isOnboardingConversation},x.handleResponse,u,ee.signal),Xe(n,{source:xe.CLIENT,value:De.STREAMING}),Pe.addRequest(T,ee,l),Ze.onCompletionRequestStarted(T)},[n,s,t,C,g,c,A,w,L])}const ut=(n,t)=>{let s=n;return t?.forceUseSearch===!1&&n.length>0&&(s=n.map(c=>{const{system_hints:C,...g}=c.metadata||{};return{...c,metadata:{...g,system_hints:C?.filter(w=>w!==tt.Search)}}})),s};export{pt as t,ht as u};
//# sourceMappingURL=bh0nczk7jf5nipy7.js.map
