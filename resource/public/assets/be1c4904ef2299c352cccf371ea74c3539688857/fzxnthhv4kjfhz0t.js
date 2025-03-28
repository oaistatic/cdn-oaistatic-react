import{r as p,v as T,e as N,j as s,d as I,a7 as A,M as y}from"./fs6h2trisr1juto6.js";import{fp as D,eS as R,y as F,M as w,c2 as h,c4 as P,a3 as U,P as z,a as B,d as j,F as S}from"./cyi7nanrg0vdotzd.js";import{c5 as $,ep as E,gU as G,c4 as O,gV as W,gW as L,gX as V,gY as q,cj as Y}from"./df9u9imhvwerk6zv.js";import{u as Z}from"./f3zzw463zuggq6da.js";import{AnimatedContainer as C}from"./i8o49in259xn5luc.js";import"./kg9pnjn9ianmg7dc.js";import"./wk7m84ups3f2nf3y.js";const H=(e,t,o,m)=>{const c=$(e),d=Z(e),f=D();return p.useCallback((i,g)=>{if(f)return;const a=`
        The user would like you to focus on a file from an earlier search result as you respond to their prompt: "${o.replaceAll('"',"")}". The file's ID is "${t.replaceAll('"',"")}".
        When you respond, try to acknowledge that you're focusing on the file if it's not clear from the context. For example, if you mclick the file, you could mention that you've looked at the file.
        `,r=X(a,{exclude_after_next_user_message:!0});d({sourceEvent:i,promptMessage:R(g,{retrieval_hint_file_data:{id:t,name:o,url:m}}),completionMetadata:c?{conversationMode:c}:void 0,appendMessages:[r]})},[f,o,t,d,c,m])};function X(e,t){return{id:T(),author:{role:F.System},content:{content_type:w.Text,parts:Array.isArray(e)?e:[e]},metadata:t}}function J({isFollowupMenuOpen:e,setIsFollowupMenuOpen:t,clientThreadId:o,fileId:m,fileName:c,fileCloudDocUrl:d,className:f}){const i=H(o,m,c,d),g=N(),[a,l]=p.useState(""),r=p.useCallback((n,x)=>{x.length&&(i(n,x),l(""),t(!1))},[i,t]);return s.jsxs(h.Root,{open:e,onOpenChange:t,children:[s.jsx(h.Trigger,{className:f,children:s.jsx(E,{className:"icon-md"})}),s.jsx(h.Portal,{children:s.jsxs(h.Content,{size:"medium",children:[Object.values(Q).map(n=>s.jsx(K,{sendReply:r,suggestedText:g.formatMessage(n)},n.defaultMessage)),s.jsx("div",{className:"mx-2 flex cursor-pointer flex-row items-center gap-2 p-2.5 px-3 py-2.5 text-sm",children:s.jsxs("form",{onSubmit:n=>{n.preventDefault(),r(n,a)},className:"flex items-center gap-2 rounded-full border border-solid border-token-border-light px-4 py-2",children:[s.jsx("input",{type:"text",onChange:n=>l(n.target.value),className:"w-full flex-1 border-none bg-transparent p-0 ring-0 focus:border-none focus:shadow-none focus:ring-0",placeholder:g.formatMessage({id:"NpZ9+f",defaultMessage:"Ask about this file…"}),value:a}),s.jsx(P,{className:"flex-0",icon:G,color:"primary",size:"small",type:"submit"})]})})]})})]})}function K({suggestedText:e,sendReply:t}){return s.jsx(h.Item,{icon:E,onSelect:o=>t(o,e),textValue:"",children:e})}const Q=I({fileFollowupSuggestionTellMeMore:{id:"skmNc0",defaultMessage:"Tell me more about this."},fileFollowupSuggestionSummarize:{id:"BiNEEG",defaultMessage:"Summarize this."}});function ee(e){const t=/<\s*sheet_summary\s*>([\s\S]*?)<\s*\/\s*sheet_summary\s*>/i,o=e.match(t);return o&&o[1]?o[1].trim():e}function te(e){if(e===void 0)return;const t="Content Snippet:",o=e.indexOf(t);return o===-1?e:e.substring(o+t.length).trim()}function se(e,t){t.text=te(e.contents),e.documentId?.includes("ks--slack")?(t.text=void 0,t.name=`#${t.name}`):t.cloud_doc_url?.startsWith("https://docs.google.com/spreadsheets/")&&t.text!==void 0&&(t.text=ee(t.text)),t.text&&(t.text=t.text.slice(0,250))}function me({turnIndex:e,clientThreadId:t}){const[o,m]=U(t,a=>[S.getTurnContentReferences(a,e),S.getConversationTurnAtIndex(a,e).messages]),c=O(t),d=p.useMemo(()=>({turnIndex:e,clientThreadId:t}),[t,e]),f=p.useMemo(()=>{const a=[],l=new Set;return o.forEach(r=>{r.type==="file"&&!l.has(r.id)?(a.push({id:r.id,name:r.name,cloud_doc_url:r.cloud_doc_url??r.extra?.cloud_doc_url,text:r.text}),l.add(r.id)):r.type==="file_navlist"&&r.items.forEach(n=>{l.has(n.id)||(a.push({name:n.name,cloud_doc_url:n.cloud_doc_url,text:n.description,id:n.id,lastModifiedTime:n.last_modified_time}),l.add(n.id))})}),a},[o]),i=W(c),g=p.useMemo(()=>{if(!i)return[];const a=[],l=new Set;for(const r of m)if(r.author.role===F.Tool&&r.author.name==="file_search"&&r.content.content_type===w.TetherBrowsingDisplay){const n=L(r.content.result),x=r.metadata?.cloud_doc_urls??[];n.chunks.forEach((u,v)=>{if(!u.documentId||l.has(u.documentId))return;l.add(u.documentId);let _;u.metadata.cloud_doc_url?_=u.metadata.cloud_doc_url.toString():v<x.length?_=x[v]:u.documentId.endsWith("--google")&&(_=`https://drive.google.com/file/d/${u.documentId.split("--")[1]}`);const b=u.metadata["File last modified at"]??u.metadata["File created at"],M={id:u.documentId,name:u.title,cloud_doc_url:_,text:u.contents,lastModifiedTime:b?b.toString():void 0};se(u,M),a.push(M)})}return a},[i,m]);return s.jsx(A,{children:s.jsxs("div",{className:"mt-[calc(var(--threadFlyOut-leading-height,57px)*-1)] flex w-full flex-col bg-token-main-surface-primary",children:[s.jsx(k,{title:s.jsx(y,{id:"dlVlo6",defaultMessage:"Citations"}),items:f,clientThreadId:t,sectionId:"citations",analyticsMetadata:d}),s.jsx(k,{title:s.jsx(y,{id:"njZblE",defaultMessage:"Search Results"}),items:g,clientThreadId:t,sectionId:"search-results",analyticsMetadata:d})]})})}function k({title:e,items:t,scrollToHeader:o,shouldAnimateScroll:m,clientThreadId:c,analyticsMetadata:d,sectionId:f}){const i=p.useRef(null),g=p.useMemo(()=>d?{...d,sectionId:f,numResultsInSection:t.length}:void 0,[d,t.length,f]);return p.useEffect(()=>{i.current&&o&&setTimeout(()=>{i.current&&i.current.scrollIntoView({behavior:m?"smooth":"instant"})},300)},[o,m]),!t||t.length===0?null:s.jsxs("div",{ref:i,children:[s.jsx(C,{className:"sticky top-0 z-[1] flex h-[calc(var(--screen-thread-header-min-height,60px)+1px)] items-center border-b border-token-border-sharp bg-token-main-surface-primary px-6 pb-4 pt-4 text-sm font-medium text-token-text-primary",children:e}),s.jsx("div",{className:"flex flex-col px-3 py-2",children:t.map((a,l)=>s.jsx(C,{index:l,children:s.jsx(oe,{positionInSection:l,item:a,analyticsMetadata:g,clientThreadId:c},l)},`${e}-${l}`))})]})}function oe({item:e,analyticsMetadata:t,positionInSection:o,clientThreadId:m}){const c=V(e.cloud_doc_url??""),d=c?.type??s.jsx(y,{id:"bqY3sN",defaultMessage:"File"}),f=c?.Icon??q,[i,g]=p.useState(!1),a=p.useCallback(()=>{t&&z.logEventWithStatsig(B.fileSourcesSidebarItemClicked,"file_sources_sidebar_link_clicked",{...t,positionInSection:o,sourceType:c?.type,hasUrl:!!e.cloud_doc_url})},[t,e.cloud_doc_url,c?.type,o]);return s.jsx(s.Fragment,{children:s.jsxs("a",{href:e.cloud_doc_url,target:"_blank",rel:"noreferrer",onClick:a,className:j("group relative flex flex-col gap-0.5 rounded-xl px-3 py-2.5","hover:bg-token-main-surface-secondary",i&&"bg-token-main-surface-secondary"),children:[s.jsxs("div",{className:"line-clamp-1 flex h-6 items-center gap-2 text-xs",children:[f&&s.jsx(f,{className:"icon-sm rounded-full bg-token-main-surface-primary object-cover"}),d]}),s.jsx("div",{className:"line-clamp-2 text-sm font-semibold",children:e.name}),(e.text??e.lastModifiedTime)&&s.jsxs("div",{className:"line-clamp-2 text-sm font-normal leading-snug text-token-text-secondary",children:[e.lastModifiedTime&&s.jsxs("span",{children:[s.jsx(Y,{date:new Date(e.lastModifiedTime)}),e.text&&" — "]}),e.text]}),s.jsx(J,{className:j("absolute right-2 top-2 flex items-center justify-center rounded p-1 transition","text-token-text-secondary group-hover:text-token-text-primary","invisible group-hover:visible","bg-token-main-surface-secondary hover:bg-token-main-surface-tertiary",i&&"visible bg-token-main-surface-tertiary text-token-text-primary"),clientThreadId:m,fileId:e.id,fileName:e.name,fileCloudDocUrl:e.cloud_doc_url,isFollowupMenuOpen:i,setIsFollowupMenuOpen:g})]})})}export{me as ChatScreenRetrievalResultsFlyoutContent,k as SourcesListGroup};
//# sourceMappingURL=fzxnthhv4kjfhz0t.js.map
