import{r as f,j as t,aw as I,M as h}from"./n1tvutderx19k1zs.js";import{U as S,n as E,M as R,d$ as F,d as M,fX as T,P as D,a as w,s as N}from"./n26mv7rx7nquqst2.js";import{cG as k,cH as U,cI as A,cJ as L,cK as P,cr as $}from"./pceg3mlzf8dzw9ob.js";import{AnimatedContainer as j}from"./ndjyteyrmfixrsrp.js";function O(e,o){e.documentId?.includes("ackCh")&&(o.text=void 0,o.name=`#${o.name}`)}function H({turnIndex:e,clientThreadId:o}){const[d,g,u]=S(o,a=>[N.getTurnContentReferences(a,e),a?.conversationTurns[e]?.messages??[],a?.modelId??$]),m=f.useMemo(()=>({turnIndex:e,clientThreadId:o}),[o,e]),p=f.useMemo(()=>{const a=[],r=new Set;return d.forEach(s=>{s.type==="file"&&!r.has(s.id)?(a.push({id:s.id,name:s.name,cloud_doc_url:s.cloud_doc_url??s.extra?.cloud_doc_url,text:s.text}),r.add(s.id)):s.type==="file_navlist"&&s.items.forEach(i=>{r.has(i.id)||(a.push({name:i.name,cloud_doc_url:i.cloud_doc_url,text:i.description,id:i.id,lastModifiedTime:i.last_modified_time}),r.add(i.id))})}),a},[d]),n=k(u),c=f.useMemo(()=>{if(!n)return[];const a=[],r=new Set;for(const s of g)if(s.message.author.role===E.Tool&&s.message.author.name==="file_search"&&s.message.content.content_type===R.TetherBrowsingDisplay){const i=U(s.message.content.result),_=s.message.metadata?.cloud_doc_urls??[];i.chunks.forEach((l,b)=>{if(!l.documentId||r.has(l.documentId))return;r.add(l.documentId);let x;l.metadata.cloud_doc_url?x=l.metadata.cloud_doc_url.toString():b<_.length?x=_[b]:l.documentId.endsWith("--google")&&(x=`https://drive.google.com/file/d/${l.documentId.split("--")[1]}`);const v=l.metadata["File last modified at"]??l.metadata["File created at"],y={id:l.documentId,name:l.title,cloud_doc_url:x,text:l.contents,lastModifiedTime:v?v.toString():void 0};O(l,y),a.push(y)})}return a},[n,g]);return t.jsx(I,{children:t.jsxs("div",{className:"mt-[calc(var(--threadFlyOut-leading-height,57px)*-1)] flex w-full flex-col bg-token-main-surface-primary",children:[t.jsx(C,{title:t.jsx(h,{id:"dlVlo6",defaultMessage:"Citations"}),items:p,clientThreadId:o,sectionId:"citations",analyticsMetadata:m}),t.jsx(C,{title:t.jsx(h,{id:"njZblE",defaultMessage:"Search Results"}),items:c,clientThreadId:o,sectionId:"search-results",analyticsMetadata:m})]})})}function C({title:e,items:o,scrollToHeader:d,shouldAnimateScroll:g,clientThreadId:u,analyticsMetadata:m,sectionId:p}){const n=f.useRef(null),c=F(),a=f.useMemo(()=>m?{...m,isScreenArch:c,sectionId:p,numResultsInSection:o.length}:void 0,[m,c,o.length,p]);return f.useEffect(()=>{n.current&&d&&(c?n.current.scrollIntoView({behavior:g?"smooth":"instant"}):setTimeout(()=>{n.current&&n.current.scrollIntoView({behavior:g?"smooth":"instant"})},300))},[d,g,c]),!o||o.length===0?null:t.jsxs("div",{ref:n,children:[t.jsx(j,{className:M("sticky top-0 z-[1] flex h-[calc(var(--screen-thread-header-min-height,60px)+1px)] items-center border-b border-token-border-sharp bg-token-main-surface-primary px-6 pt-4 font-medium text-token-text-primary",c?"pb-3.5 text-panel-title":"pb-4 text-sm"),children:e}),t.jsx("div",{className:"flex flex-col px-3 py-2",children:o.map((r,s)=>t.jsx(j,{index:s,children:t.jsx(V,{positionInSection:s,item:r,analyticsMetadata:a,clientThreadId:u},s)},`${e}-${s}`))})]})}function V({item:e,analyticsMetadata:o,positionInSection:d,clientThreadId:g}){const u=A(e.cloud_doc_url??""),m=u?.type??t.jsx(h,{id:"bqY3sN",defaultMessage:"File"}),p=u?.Icon??L;f.useState(!1),T("1054486462").config.get("sidebar_enabled",!1);const c=f.useCallback(()=>{o&&D.logEventWithStatsig(w.fileSourcesSidebarItemClicked,"file_sources_sidebar_link_clicked",{...o,positionInSection:d,sourceType:u?.type,hasUrl:!!e.cloud_doc_url})},[o,e.cloud_doc_url,u?.type,d]);return t.jsx(t.Fragment,{children:t.jsxs("a",{href:e.cloud_doc_url,target:"_blank",rel:"noreferrer",onClick:c,className:M("group relative flex flex-col gap-0.5 rounded-xl px-3 py-2.5","hover:bg-token-main-surface-secondary",!1),children:[t.jsxs("div",{className:"line-clamp-1 flex h-6 items-center gap-2 text-xs",children:[p&&t.jsx(p,{className:"icon-sm rounded-full bg-token-main-surface-primary object-cover"}),m]}),t.jsx("div",{className:"line-clamp-2 text-sm font-semibold",children:e.name}),(e.text??e.lastModifiedTime)&&t.jsxs("div",{className:"line-clamp-2 text-sm font-normal leading-snug text-token-text-secondary",children:[e.lastModifiedTime&&t.jsxs("span",{children:[t.jsx(P,{date:new Date(e.lastModifiedTime)}),e.text&&" — "]}),e.text]}),!1]})})}export{H as ChatScreenRetrievalResultsFlyoutContent,C as SourcesListGroup};
//# sourceMappingURL=abqgsxrlvn830xt6.js.map
