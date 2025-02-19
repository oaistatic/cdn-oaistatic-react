import{d7 as he,aC as Ee,R as le,g7 as Me,P as Re,a as Ie,Y as Oe,b as C,g8 as Ae,g9 as ge,ga as ke,gb as Ne,D as se,n as Y,az as be,gc as De,bw as Pe,ci as xe,fo as Ue,aG as ie,bA as qe,s as ue,r as $,gd as He,ge as Fe,fB as Le,aF as ze,Q as V,aM as ae,gf as Be,F as We,N as $e,H as Ve,E as Ge,aN as Qe,gg as je,gh as Je}from"./mnkup87aq6tfilq5.js";import{d_ as Te,d$ as Ke,e0 as Ye,e1 as fe,e2 as me,e3 as Xe,e4 as _e,e5 as Ze,e6 as et,i as tt,ac as ot,a2 as nt,e7 as pe,e8 as st,e9 as it,ea as at,ab as rt,eb as dt,ec as ct,ed as lt,ee as gt,ef as ut,aB as ft,eg as mt,eh as _t,ei as pt,ej as ht,ek as Tt}from"./dvllb5fed1b4y7k1.js";import{a as vt,d as yt,r as St}from"./l6lryjpkt8rv0lpy.js";import{T as Ct}from"./1e3kywkhcjn5spyo.js";const wt="OAI-Echo-Logs",N={FOCUS_IN:0,FOCUS_OUT:1,COPY:2,PASTE:3,TOUCH_START:4,TOUCH_END:5},ve=[];function b(o){return()=>{ve.push({type:o,ts:Math.round(performance.now())})}}const Et={focusin:b(N.FOCUS_IN),focusout:b(N.FOCUS_OUT),copy:b(N.COPY),paste:b(N.PASTE),touchstart:b(N.TOUCH_START),touchend:b(N.TOUCH_END)};function Pt(o){const e=o??document.getElementById(Ct);for(const[i,l]of Object.entries(Et))e?.removeEventListener(i,l),e?.addEventListener(i,l)}function Mt(){return{[wt]:ve.slice(0,10).map(o=>`${o.type},${o.ts}`).join(",")}}const Rt=1e3*30,G=Te.getTracer("completion"),h={};function xt(o){return h[o]?!1:(h[o]=[],!0)}function Ut(o){if(h[o]){for(;h[o]?.length>0;)h[o].shift()?.();return delete h[o],!0}return!1}function It(o,e,i,l,T){const c=new AbortController,E=T?Ke([T,c.signal]):c.signal,D="threadId"in e?e.threadId:void 0,Q="continueFromSharedConversationId"in e?e.continueFromSharedConversationId:void 0,P=e.model,x=e.messages[0]?.id,U={action:e.completionType,messages:e.messages.length>0?e.messages:void 0,conversation_id:D,continue_from_shared_conversation_id:D!=null?void 0:Q,parent_message_id:e.parentMessageId,model:e.model,timezone_offset_min:new Date().getTimezoneOffset(),timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,variant_purpose:e.completionMetadata?.variantPurpose,suggestions:e.completionMetadata?.suggestions?e.completionMetadata.suggestions.map(n=>Ye(n)):void 0,chosen_suggestion:e.completionMetadata?.suggestion?{type:e.completionMetadata.suggestion.type,index:e.completionMetadata.suggestionIndex,source:e.completionMetadata?.suggestion.type===fe.Autocomplete?e.completionMetadata.suggestion.source:void 0,user_input:e.completionMetadata?.suggestion.type===fe.Autocomplete?e.completionMetadata.suggestion.userInput:void 0}:void 0,history_and_training_disabled:w(e.historyDisabled),conversation_mode:e.completionMetadata?.conversationMode,force_paragen:w(e.forceParagen),force_paragen_model_slug:e.forceParagenModel,force_indepth_feedback:w(e.forceIndepthFeedback),force_rate_limit:w(e.forceRateLimit),reset_rate_limits:w(e.resetRateLimits),disable_system_content_toggling:w(e.disableSystemContentToggling),enable_message_followups:e.enableMessageFollowups,source:e.completionMetadata?.source,system_hints:e.completionMetadata?.systemHints,prefetch_ids:e.completionMetadata?.prefetchIds,supports_buffering:!0,supported_encodings:[me.V1],conversation_origin:K(e.conversationOrigin),force_use_search:K(e.forceUseSearch),client_reported_search_source:e.completionMetadata?.searchSource,client_contextual_info:e.contextualInfo,paragen_stream_type_override:K(e.paragenStreamType==="none"?null:e.paragenStreamType),paragen_cot_summary_display_override:K(e.paragenCotSummaryDisplay==="none"?null:e.paragenCotSummaryDisplay),is_onboarding_conversation:w(e.isOnboardingConversation)};let M,v;const j=he(o);Ee(j)?(v=window.location.origin+"/backend-anon",M=le.getUnauthHeaders().additionalHeaders):(Xe(3010482349,`${P}-AAAA`)?v=window.location.origin+"/backend-alt":v=window.location.origin+"/backend-api",M=le.getAuthedHeadersWithAccessToken(j?.accessToken));const d=`${v}/conversation`,X=Me(e.chatReq,e.turnstileToken,e.proofToken,null),Z={...M,...Mt(),...X};let q=!1,H=!1,R=!1,I=!1,m,J,y,S,F;G.startActiveSpan("completion.response",n=>{m=G.startSpan("completion.first_response"),J=G.startSpan("completion.first_token_including_tool_calls"),y=G.startSpan("completion.first_token_including_visible_content"),S=G.startSpan("completion.first_token"),F=n});const ee=Te.setSpan(_e.active(),F);let L=null,_=!1;function z(){_||(_=!0,i({type:"done"}))}function g(n){if(e.turnTracker.onBytesReceived(n.data),n.data==="[DONE]")c.abort(),F.end(),z();else if(n.event!=="ping")try{let t=JSON.parse(n.data);if(n.event==="delta_encoding")if(t===me.V1)e.turnTracker.stream_encoding=t,L=new et;else{se.addError(`[completion-delta] unknown delta encoding: ${t}`);return}else if(n.event==="delta"){if(!L){se.addError("[completion-delta] delta event before delta_encoding");return}t=L.applyDelta(t)}if(t.error){const A=C.createWithErrorMessage(d,"server",t.error);throw i({type:"error",error:A}),A}else"type"in t?t.type==="gizmo_inline_review"?i({type:"gizmo_inline_review",gizmoId:t.gizmo_id}):t.type==="title_generation"?i({type:"title_generation",title:t.title,conversation_id:t.conversation_id}):t.type==="moderation"?i({type:"moderation",conversationId:t.conversation_id,messageId:t.message_id,isCompletion:t.is_completion,flagged:t.moderation_response.flagged,blocked:t.moderation_response.blocked,disclaimers:t.moderation_response.disclaimers,metadata:t.moderation_response.metadata}):t.type==="url_moderation"?i({type:"url_moderation",conversationId:t.conversation_id,messageId:t.message_id,url:t.url_moderation_result.full_url,isSafe:t.url_moderation_result.is_safe}):t.type==="num_variants_in_stream"?i({type:"num_variants_in_stream",num_variants_in_stream:t.num_variants_in_stream,display_treatment:t.display_treatment}):t.type==="conversation_detail_metadata"?i(t):t.type==="message_stream_complete"&&z():(i({type:"message",message:t.message,conversationId:t.conversation_id}),q||(q=!0,m.end(),e.profiler?.logTiming("first_response")),!H&&t.message.author.role===Y.Assistant&&(H=!0,J.end(),e.profiler?.logTiming("first_assistant_token")),!R&&t.message.author.role===Y.Assistant&&be(t.message)&&(R=!0,y.end(),e.profiler?.logTiming("first_visible_content_token")),!I&&t.message.author.role===Y.Assistant&&De(t.message)&&(I=!0,S.end(),e.profiler?.logTiming("first_message_token")))}catch(t){if(t instanceof C)throw t}}let O=setTimeout(()=>{Re.logEvent(Ie.sseResponseWaitTooLong,{}),e.turnTracker.logCompletion({type:Oe.Error,error:{reason:"timeout",message:"SSE Response Took Too Long to Come Back"}})},Rt);_e.with(ee,()=>(e.profiler?.logTiming("fetch_event_source"),Ze(d,{method:"POST",credentials:"include",headers:{"Content-Type":"application/json",...Z},body:JSON.stringify(U),signal:E,openWhenHidden:!0,async onopen(n){const t=n.headers.get("content-type")??"",A=n.headers.get("Cf-Ray")??null;if(n.ok&&t.includes("text/event-stream")){l(A,e.model);return}else if(t.includes("application/json")){const p=await n.json(),a=new C(d,n.status,p);if(a.isServerError())throw a;if((a?.code==="expired_session_key"||a?.code==="invalid_api_key"||a?.code==="token_expired")&&typeof window<"u"&&window._oaiHandleSessionExpired?.("stream",JSON.stringify(a)),a?.code==="deactivated_workspace"){window.location.href.includes("/workspace/deactivated")||(window.location.href="/workspace/deactivated");return}throw a}else{const p=await n.text();throw new C(d,n.status,{detail:{message:Ae,code:"unexpected_content_type",contentType:t,text:p?.substring(0,1e3)}})}},onmessage:n=>{O&&(clearTimeout(O),O=null),h[x]?h[x].push(()=>g(n)):g(n)},onerror(n){let t=n instanceof Error?n:new Error(JSON.stringify(n));throw t.message==="Failed to fetch"&&(t=C.createWithErrorMessage(d,"server",`An error occurred. Either the engine you requested does not exist or there was another issue processing your request. ${ge}`)),t.message==="network error"&&(t=C.createWithErrorMessage(d,"client",`A network error occurred. Please check your connection and try again. ${ge}`)),ke("fetch-error:conversation:new-message",{url:d,message:t?.message}),i({type:"error",error:t}),t}}))).catch(async n=>{n instanceof C?Ne(n):se.addError(n),e.turnTracker.handleRawError(n.message??"Something went wrong",n.status)})}function w(o){if(o===!0)return o}function K(o){if(o!=null)return o}function qt({clientThreadId:o,preRequestCompletion:e}){const i=vt(),l=Pe(),T=xe(),c=Ue(),E=yt(),D=tt(),Q=null,P=ot(o),x=P&&"gizmo"in P?P.gizmo?.gizmo.id:void 0,U=nt(x),M=x?U?pe.PROJECT:pe.GPT:void 0,v=st(o);return St.useCallback(async function({requestedModelId:j,completionType:d=ae.Next,eventSource:X="mouse",completionMetadata:Z,extraStreamParams:q,promptMessage:H,prependMessages:R,appendMessages:I,profiler:m}={}){const J=performance.now();e?.(),it.reset(),H&&ie(o,s=>{qe.appendMessage(s,H)});const y=ue.getCurrentLeafId($(o));m?.logTiming("start_chat_requirements");const S=await He();m?.logTiming("fetched_chat_requirements"),S.force_login&&D({authType:"login"});const[F,ee]=await Promise.all([at.getEnforcementToken(S).then(s=>(m?.logTiming("fetched_turnstile_token"),s),s=>null),Fe.getEnforcementToken(S).then(s=>(m?.logTiming("fetched_p_token"),s),s=>null),i.ensureQueryData(Le(c))]),L=performance.now()-J;ze.publish({kind:"requestCompletion"});const _=ue.getTree($(o));V.retainThread(o);const z=Je(),g=`${je}${o}-${z}`,O=`${o}-${z}`,u=_.getNodeByIdOrMessageId(y);_.getConversationTurns(y,Q!=null).length>2&&ie(o,s=>{s.scrollToMessageId=u.message.id});const A={gizmo_id:u.message.metadata?.gizmo_id};V.updateTree(o,s=>{s.addNode(g,"",y,Y.Assistant,void 0,A)}),V.setThreadCurrentLeafId(o,g);let p,a=[],k=_.getNodeByIdOrMessageId(u.parentId);for(;k!=null&&(k.metadata?.isPlaceholderTemplateAssistantWelcomeMessage===!0||k.metadata?.isClientCreatedSystemMessage===!0);){const s=k.message;a.unshift(s);const r=_.getNodeByIdOrMessageId(k.parentId);p=r.message?.id??r.id,k=r}if(d===ae.Next||d===ae.Variant){const s=_.getNodeByIdOrMessageId(u.parentId);if(p??=s.message?.id??s.id,R){let r=u.parentId,oe=u.id;V.updateTree(o,W=>{for(const ne of R)W.insertNodeBefore(oe,{id:ne.id,message:ne,parentId:r,children:[]}),r=ne.id}),a.push(...R)}if(a.push(u.message),I){let r=y;V.updateTree(o,oe=>{for(const W of I)oe.insertNodeBefore(g,{id:W.id,message:W,parentId:r,children:[]}),r=W.id}),a.push(...I)}a=Ot(a,q)}else p??=u.message.id;const te=j??$(o)?.modelId??rt(Be(i,c)).id,re=We(o);re===void 0&&$e(o)&&ie(o,s=>{s.initialThreadData.lastModelUsed=te});const B=new dt({gizmoType:M,messages:a});ct()&&await lt();const ye=(s,r)=>{!$(s)?.disableConversationNavigation&&!r&&ht(E,i,s,U)},Se=new gt(i,o,g,d,te,X,ye,T,O,B,c),Ce=(s,r)=>{B.onStreamOpen(),s&&B.onReceivedRequestId(s),Tt(O,r,s,L)},we={is_dark_mode:l,time_since_loaded:Math.floor(performance.now()/1e3),page_height:window?.innerHeight,page_width:window?.innerWidth,pixel_ratio:window?.devicePixelRatio,screen_height:window?.screen?.height,screen_width:window?.screen?.width},de=$(o),f=ut(),ce=new AbortController;It(i,{conversationOrigin:de?.conversationOrigin??null,model:te,completionType:d,threadId:re,continueFromSharedConversationId:de?.continuingFromSharedConversationId,historyDisabled:c,parentMessageId:p,messages:a,chatReq:S,turnstileToken:F,proofToken:ee,completionMetadata:Z,turnTracker:B,profiler:m,contextualInfo:we,isOnboardingConversation:v,forceParagen:f.forceParagen,forceParagenModel:f.forceParagen?f.forceParagenModel.value:void 0,forceRateLimit:f.forceRateLimit,resetRateLimits:f.resetRateLimits,disableSystemContentToggling:f.rebaseSystemMessageContent!=null,forceUseSearch:f.forceUseSearch??void 0,paragenStreamType:f.paragenStreamType,paragenCotSummaryDisplay:f.paragenCotSummaryDisplay,...q},Se.handleResponse,Ce,ce.signal),ft(o,{source:Ve.CLIENT,value:Ge.STREAMING}),Qe.addRequest(g,ce,B),mt.onCompletionRequestStarted(g),he(i)?.user==null&&_t.incrementUserMessageCount()},[o,i,T,c,l,Q,E,D,M,U,e,v])}const Ot=(o,e)=>{let i=o;return e?.forceUseSearch===!1&&o.length>0&&(i=o.map(l=>{const{system_hints:T,...c}=l.metadata||{};return{...l,metadata:{...c,system_hints:T?.filter(E=>E!==pt.Search)}}})),i};export{xt as b,Ut as e,Pt as t,qt as u};
//# sourceMappingURL=cbms2jcglp4b707f.js.map
