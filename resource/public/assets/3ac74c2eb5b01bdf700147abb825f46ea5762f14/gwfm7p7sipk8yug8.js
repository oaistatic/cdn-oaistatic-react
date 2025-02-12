import{c as D,r as x,j as e,M as k}from"./cg166fqqcxkeiosv.js";import{h as P,er as q,m as S,M as A,C as H,N as Q,b as V}from"./dze2l9y9kn6nwat0.js";import{cD as z,cC as K,gG as F,gH as W,gI as U,gJ as X,gK as J,K as O,gL as Z,gM as $,cB as Y,cb as ee,cm as se}from"./j4xe1fdohr6xk09p.js";import{T as te,I as ae}from"./mjyf4htuopss3vc7.js";import{a as T}from"./cfvh96gbcjdpth1v.js";const ne=["Not relevant","Inaccurate","Incomplete","Missing sources","I don't like it","Shouldn't have searched Google Drive","Prompt was misunderstood","Didn't like the response style","Other"],re=["Good sources","Answered my question","I like it","Other"],oe=["Not relevant","Out of date","Content is wrong"],le=["Relevant","Up to date","Accurate"];function ie(n){switch(n){case"Not relevant":return m.tagNotRelevant;case"Inaccurate":return m.tagInaccurate;case"Incomplete":return m.tagIncomplete;case"Missing sources":return m.tagMissingSources;case"I don't like it":return m.tagDontLikeIt;case"Shouldn't have searched Google Drive":return m.tagShouldntHaveSearched;case"Prompt was misunderstood":return m.tagPromptMisunderstood;case"Didn't like the response style":return m.tagDidntLikeResponseStyle;case"Other":return m.tagOther;case"Good sources":return m.tagGoodSources;case"Answered my question":return m.tagAnsweredMyQuestion;case"I like it":return m.tagLike;case"Out of date":return m.tagOutOfDate;case"Content is wrong":return m.tagContentWrong;case"Relevant":return m.tagRelevant;case"Up to date":return m.tagUpToDate;case"Accurate":return m.tagAccurate}}function R(n,u){let r;try{r=ie(n)}catch{}return r?u.formatMessage(r):n}function E(n,u){return n.map(r=>({label:R(r,u),value:r}))}const m=P({tagNotRelevant:{id:"T24lap",defaultMessage:"Not relevant"},tagInaccurate:{id:"USOv/g",defaultMessage:"Inaccurate"},tagIncomplete:{id:"Lk26Q8",defaultMessage:"Incomplete"},tagMissingSources:{id:"Fng4pl",defaultMessage:"Missing sources"},tagDontLikeIt:{id:"6eAB3A",defaultMessage:"I don't like it"},tagShouldntHaveSearched:{id:"Y22bKM",defaultMessage:"Shouldn't have searched Google Drive"},tagPromptMisunderstood:{id:"NjmgTt",defaultMessage:"Prompt was misunderstood"},tagDidntLikeResponseStyle:{id:"np+P/8",defaultMessage:"Didn't like the response style"},tagOther:{id:"BK4DWm",defaultMessage:"Other"},tagGoodSources:{id:"SpXc0X",defaultMessage:"Good sources"},tagAnsweredMyQuestion:{id:"jbur49",defaultMessage:"Answered my question"},tagLike:{id:"w9iwLl",defaultMessage:"I like it"},tagOutOfDate:{id:"qzHvzr",defaultMessage:"Out of date"},tagContentWrong:{id:"gGDbwI",defaultMessage:"Content is wrong"},tagRelevant:{id:"G4D31U",defaultMessage:"Relevant"},tagUpToDate:{id:"CsRBPs",defaultMessage:"Up to date"},tagAccurate:{id:"ohD9UA",defaultMessage:"Accurate"}});function ce({citationMetadata:n,noBottomBorder:u=!1,sourceFeedback:r,setSourceFeedback:M}){const p=D(),[c,b]=x.useMemo(()=>{if(n.type!=="file")return["",""];const a=n.name.split(".");return a.length>1?[a.slice(0,-1).join("."),a[a.length-1]]:[n.name,""]},[n]),s=x.useMemo(()=>{if(n.type!=="file")return()=>null;const a=n.cloud_doc_url??n.extra?.cloud_doc_url;return a?K(a)?.Icon??(()=>null):z},[n]),d=x.useMemo(()=>{if(n.type==="file"&&n.extra?.cloud_doc_url)try{return new URL(n.extra.cloud_doc_url).hostname}catch{return}},[n]),f=x.useCallback(a=>{M({rating:a,tags:[]})},[M]);return n.type!=="file"?null:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-row items-center justify-between py-2",children:[e.jsxs("div",{className:"max-width-full mr-2 flex grow flex-row items-center overflow-hidden",children:[e.jsx(s,{className:"icon-md mr-2 flex-shrink-0 flex-grow-0"}),e.jsx("a",{href:n.extra?.cloud_doc_url,className:"text-token-primary flex-grow-1 flex-shrink-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm",target:"_blank",rel:"noreferrer",children:c}),d&&e.jsx("div",{className:"ml-2 text-sm text-token-text-secondary",children:d})]}),e.jsxs("div",{className:"flex shrink-0 flex-row items-center",children:[e.jsx("button",{className:"rounded-md p-1 hover:bg-token-main-surface-secondary",children:r?.rating==="thumbsUp"?e.jsx(F,{className:"icon-md-heavy text-token-text-primary",onClick:()=>f(void 0)}):e.jsx(W,{className:"icon-md-heavy text-token-text-secondary",onClick:()=>f("thumbsUp")})}),e.jsx("button",{className:"rounded-md p-1 hover:bg-token-main-surface-secondary",children:r?.rating==="thumbsDown"?e.jsx(U,{className:"icon-md-heavy text-token-text-primary",onClick:()=>f(void 0)}):e.jsx(X,{className:"icon-md-heavy text-token-text-secondary",onClick:()=>f("thumbsDown")})})]})]}),r?.rating&&e.jsx("div",{className:"mb-4 flex flex-row",children:(r.rating==="thumbsDown"?oe:le).map(a=>e.jsx(te,{className:"mr-2",$selected:r.tags.includes(a),onClick:()=>M({...r,tags:r.tags.includes(a)?r.tags.filter(g=>g!==a):[...r.tags,a]}),children:R(a,p)},a))}),!u&&e.jsx("div",{className:"w-full border-[0.5px] border-token-border-light"})]})}function de({documentId:n,title:u,externalUrl:r,noBottomBorder:M=!1,shouldHaveBeenIncluded:p,setShouldHaveBeenIncluded:c}){const[b,s]=x.useMemo(()=>{const a=u.split(".");return a.length>1?[a.slice(0,-1).join("."),a[a.length-1]]:[u,""]},[u]),d=x.useMemo(()=>J(q.GDRIVE,s),[s]),f=x.useMemo(()=>{if(r)try{return new URL(r).hostname}catch{return}},[r]);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-row items-center justify-between py-2",children:[e.jsxs("div",{className:"max-width-full mr-2 flex grow flex-row items-center overflow-hidden",children:[e.jsx(d,{className:"mr-2 flex-shrink-0 flex-grow-0"}),e.jsx("a",{href:r,className:"text-token-primary flex-grow-1 flex-shrink-1 overflow-hidden text-ellipsis whitespace-nowrap text-sm",target:"_blank",rel:"noreferrer",children:b}),f&&e.jsx("div",{className:"ml-2 text-sm text-token-text-secondary",children:f})]}),e.jsx("div",{className:"flex shrink-0 flex-row items-center px-2",children:e.jsx(O,{checked:p,onChange:a=>c?.(a.currentTarget.checked),id:`should-have-been-included-${n}`})})]}),!M&&e.jsx("div",{className:"w-full border-[0.5px] border-token-border-light"})]})}function ue(n,u){const{entireConversation:r,messageId:M}=u;if(!r)throw new Error("The extraction function only supports exporting the entire conversation for now.");let p=M;const c=[];for(;p;){const b=n.getNodeByIdOrMessageId(p);if(!b){p=null;break}const s=b.message;if(!s)continue;const d=Z(s)??"",f=Array.isArray(s.metadata?.citations)?s.metadata.citations:[],a=Array.isArray(s.metadata?.attachments)?s.metadata.attachments:[],g={id:String(s.id),author:s.author.role,recipient:s.recipient??"",createTime:s.create_time,updateTime:s.update_time};switch(s.author.role){case S.System:c.push({...g,type:"system",content:s.content,citations:f,attachments:a});break;case S.Assistant:if(s.recipient&&["user","all"].includes(s.recipient)&&d)c.push({...g,type:"visible_text",text:d,citations:f,attachments:a});else if(s.recipient&&s.recipient.includes("file_search")){const h=s.metadata?.command??"";let _=[];try{const y=JSON.parse(d);typeof y=="object"&&y!=null&&Array.isArray(y.queries)&&(_=y.queries.map(j=>String(j)))}catch{}_?c.push({...g,type:"query",command:h,content:s.content,queries:_}):c.push({...g,type:"generic_file_search_tool",command:h,content:s.content})}break;case S.User:(d||a.length>0)&&c.push({...g,type:"visible_text",text:d,citations:f,attachments:a});break;case S.Tool:if(s.author.name?.includes("file_search")&&s.recipient==="all"){const h=s.metadata?.command??"";if(h==="msearch"&&s.content.content_type===A.TetherBrowsingDisplay){const _=s.content.result;if(_){let y=null;const j=s.metadata?.raw_response;if(typeof j=="object"&&j!=null)try{y=$(j)}catch{}c.push({...g,type:"result",command:h,content:s.content,result:Y(_),searchResponse:y})}}else h==="context_stuff"&&s.content.content_type===A.TetherQuote?c.push({...g,type:"fetch",command:h,content:s.content}):c.push({...g,type:"generic_file_search_tool",command:h,content:s.content})}break}p=b.parentId||null}return u.orderRootToLeaf&&c.reverse(),{messages:c}}const me="considered-source-should-have-been-used";function ye({citations:n,rating:u,onSubmit:r,onCancel:M,messageId:p,conversationId:c,nodeId:b,conversationTree:s}){const d=D(),f=H(),[a,g]=x.useState(""),[h,_]=x.useState(()=>{const t={};for(const i of n)i.metadata?.type==="file"&&(t[i.metadata.id]={rating:void 0,tags:[],url:i.metadata.extra?.cloud_doc_url});return t}),y=s?.getMessage(p),j=x.useMemo(()=>{const t=new Set,i=[];for(const l of y?.metadata?.citations??[])!l.metadata||l.metadata.type!=="file"||t.has(l.metadata.id)||(i.push(l.metadata),t.add(l.metadata.id));for(const l of y?.metadata?.content_references??[])if(l.type==="file_navlist")for(const o of l.items)t.has(o.id)||(i.push({type:"file",id:o.id,name:o.name,source:"my_files",text:o.description,cloud_doc_url:o.cloud_doc_url,extra:{cloud_doc_url:o.cloud_doc_url}}),t.add(o.id));return i},[y]),[C,B]=x.useState(!0),w=x.useMemo(()=>{const t={hasQuery:!1,lastAssistantMessage:null,lastUserMessage:null,referencedSyncedFiles:[]};if(!s||!b||!s.containsNodeOrMessageId(b))return t;const i=ue(s,{messageId:b,entireConversation:!0});for(const l of i.messages)switch(l.type){case"fetch":case"generic_file_search_tool":case"system":continue;case"result":{l.result.chunks.forEach(o=>{o.documentId&&o.documentId.startsWith("S")&&!t.referencedSyncedFiles.some(v=>v.fileId===o.documentId)&&!j.some(v=>v.type==="file"&&v.id===o.documentId)&&t.referencedSyncedFiles.push({fileId:o.documentId,title:o.title})});continue}case"query":{t.hasQuery=!0;continue}case"visible_text":{if(l.author===S.User){if(!t.lastUserMessage){const o=s.getConversationTurns(l.id,!1),v=o[o.length-1].messages,N=v[v.length-1];t.lastUserMessage=N}}else if(l.author===S.Assistant&&!t.lastAssistantMessage){const o=s.getConversationTurns(l.id,!1),v=o[o.length-1].messages,N=v[v.length-1];t.lastAssistantMessage=N,t.lastUserMessage=null}continue}}return t},[s,j,b]),G=x.useCallback(async t=>{const i={...t,additionalSources:a,sourcesFeedback:h,consentedToShareConvoLink:C};try{await Q.submitCaMessageFeedback({feedback_format:ee.ALPHA,message_id:p,conversation_id:c,text:i.textFeedback,rating:u,tags:i.tags,tag_choices:i.tagChoices,additional_sources:i.additionalSources,sources_feedback:i.sourcesFeedback,consented_to_share_convo_link:i.consentedToShareConvoLink}),f.success(d.formatMessage({id:"ZzqQBa",defaultMessage:"Thanks for providing feedback!"})),r?.(i)}catch(l){l instanceof V&&f.danger(d.formatMessage({id:"4d5bOS",defaultMessage:"There was an error submitting your feedback. Please try again later."}))}},[a,h,C,p,c,u,f,d,r]);return e.jsxs(ae,{multiple:!0,allowEmptySubmit:!0,onSubmit:G,onCancel:M,tagOptions:E(u==="thumbsDown"?ne:re,d),modalOnly:!0,modalTitle:e.jsxs("div",{className:"flex items-center gap-2",children:[u==="thumbsDown"?e.jsx(U,{className:"mb-[-6px]"}):e.jsx(F,{className:"mb-[-6px]"}),e.jsx(k,{id:"h5nasL",defaultMessage:"Provide feedback"})]}),children:[j.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mt-6 text-base font-semibold",children:e.jsx(k,{id:"G6+7UX",defaultMessage:"Sources"})}),e.jsx("div",{children:j.map((t,i)=>t?.type!=="file"?null:e.jsx(ce,{citationMetadata:t,noBottomBorder:i===j.length-1,sourceFeedback:h[t.id],setSourceFeedback:l=>_(o=>({...o,[t.id]:{...l,url:t.extra?.cloud_doc_url}}))},t.id))})]}),w.referencedSyncedFiles.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-6 flex items-baseline justify-between",children:[e.jsxs("div",{className:"flex-start flex",children:[e.jsx("h3",{className:"text-base font-semibold",children:e.jsx(k,{id:"xvBe/T",defaultMessage:"Considered Sources"})}),e.jsx("p",{className:"ml-2 text-token-text-secondary",children:e.jsx(k,{id:"nX81fN",defaultMessage:"({numSources} sources)",values:{numSources:w.referencedSyncedFiles.length}})})]}),e.jsx("p",{className:"text-sm text-token-text-tertiary",children:e.jsx(k,{id:"0+Uivl",defaultMessage:"Good Source?"})})]}),e.jsx("div",{className:"mt-2 max-h-[200px] overflow-auto",children:w.referencedSyncedFiles.map((t,i)=>{const l=t.fileId.split("--")[1];if(!l)return null;const o=`https://drive.google.com/file/d/${l}`;return e.jsx(de,{title:t.title,documentId:t.fileId,externalUrl:o,noBottomBorder:i===w.referencedSyncedFiles.length-1,shouldHaveBeenIncluded:!!h[t.fileId],setShouldHaveBeenIncluded:v=>_(N=>{const I={...Object.fromEntries(Object.entries(N).filter(([L])=>L!==t.fileId))};return v&&(I[t.fileId]={tags:[me],rating:"thumbsUp",url:o}),I})},t.fileId)})})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("p",{className:"text-sm text-token-text-primary",children:e.jsx(k,{id:"1ApJVo",defaultMessage:"Add any additional sources"})}),e.jsx(se,{name:"feedback",className:"mt-2",placeholder:d.formatMessage({id:"CAFeedbackModal.additionalSourcePlaceholder",defaultMessage:"(Optional) Additional sources"}),value:a,onChange:t=>g(t.target.value)})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h3",{className:"mb-2 text-base font-semibold",children:e.jsx(k,{id:"9NcQBu",defaultMessage:"Latest Exchange"})}),e.jsx("div",{className:"p-2",children:e.jsxs("div",{className:"mb-4",children:[w.lastUserMessage&&e.jsxs("div",{className:"mb-4",children:[e.jsx("p",{className:"mb-1 pl-4 text-xs text-token-text-secondary",children:e.jsx(k,{id:"QTWrtR",defaultMessage:"Your message"})}),e.jsx("div",{className:"flex justify-start",children:e.jsx("p",{className:"relative max-w-[var(--user-chat-width,70%)] rounded-3xl bg-[#f4f4f4] px-5 py-2.5 dark:bg-token-main-surface-secondary",children:w.lastUserMessage?e.jsx(T,{message:w.lastUserMessage,isCompletionInProgress:!1,clientThreadId:c,isUserTurn:!1,turnIndex:0,isFeedbackEnabled:!1,showEditButton:!1,onEnterEdit:()=>null}):null})})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx("p",{className:"mb-1 pl-4 text-xs text-token-text-secondary",children:e.jsx(k,{id:"ZCTm4h",defaultMessage:"ChatGPT's response"})}),e.jsx("div",{className:"relative rounded-lg bg-token-main-surface-secondary p-4 text-sm",children:w.lastAssistantMessage?e.jsx(T,{message:w.lastAssistantMessage,isCompletionInProgress:!1,clientThreadId:c,isUserTurn:!1,turnIndex:1,isFeedbackEnabled:!1,showEditButton:!1,onEnterEdit:()=>null}):null})]})]})}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h3",{className:"mt-6 text-base font-semibold",children:e.jsx(k,{id:"c95uEW",defaultMessage:"Full conversation"})}),e.jsx("p",{className:"mb-2 mt-1 text-sm text-token-text-secondary",children:e.jsx(k,{id:"3E3ZSm",defaultMessage:"If previous portions of this conversation are important to understand your feedback, we encourage you to include it."})}),e.jsx(O,{id:"consented-to-share-entire-convo",label:d.formatMessage({id:"5CC8r8",defaultMessage:"Share Entire Conversation"}),checked:C,onChange:t=>{B(t.currentTarget.checked)}})]})]})]})}export{ye as C,me as a,R as g};
//# sourceMappingURL=gwfm7p7sipk8yug8.js.map
