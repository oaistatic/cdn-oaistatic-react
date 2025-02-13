import{c as b,j as r,aw as _,au as Q}from"./cg166fqqcxkeiosv.js";import{M as w,fK as s,m as S,d as k,fL as E,N as F,bi as T}from"./mwlpozqwnbys03vp.js";import{bQ as v,bR as L,bP as B,bS as N,bT as q,F as U,bU as D,bV as O}from"./d5k5wa3zyqlgc9bk.js";import{T as h}from"./lyxz8i5c4a3y7iew.js";import{T as K}from"./f9ed4qokx92gm8gq.js";import"./lreb9dbp4o4sdhlz.js";import"./mptd6395vqovl9h2.js";import"./oxip50nz1ohggehf.js";import"./bcgu844kz5rwd68s.js";import"./gjup1pnw4u9rwx39.js";import"./kb4dwh5v3nuso8nd.js";function ue({messages:e,isRequestActive:t,isLastMessageInTurn:n,isRetrieval:o,isUsingGizmo:i,isUsingSnorlax:m}){const c=e.map(u=>u.message),d=P(c),l=d.filter(u=>J(u,!1)&&!X(u)),f=l[l.length-1]??void 0,a=b();if(Y(c).some(({content:u})=>u.content_type===w.SystemError))return null;let g=h.Running;const j=l.filter(u=>u.type===s.Search).length,M={count:l.length-j,domain:f?v(y(f)??""):void 0,query:f?C(f):void 0};let p=o?i?m?a.formatMessage(L.searchingProjectFiles):a.formatMessage({id:"browsingMessage.searchingKnowledge",defaultMessage:"Searching my knowledge"}):a.formatMessage({id:"browsingMessage.startingRetrieval",defaultMessage:"Reading documents"}):a.formatMessage({id:"message.tools.browse.running",defaultMessage:"Searching the web"});return c.some(B)?(g=h.Stopped,p=o?i?a.formatMessage({id:"browsingMessage.searchingKnowledgeStopped",defaultMessage:"Stopped searching knowledge"}):a.formatMessage({id:"browsingMessage.retrievalStopped",defaultMessage:"Stopped reading documents"}):a.formatMessage({id:"message.tools.browse.stopped",defaultMessage:"Search stopped"})):!n||!t?d.length>0&&d.every(u=>u.didError)?(g=h.Error,p=o?i?a.formatMessage({id:"browsingMessage.searchingKnowledgeFailed",defaultMessage:"Error searching knowledge"}):a.formatMessage({id:"browsingMessage.retrievalFailed",defaultMessage:"Error reading documents"}):a.formatMessage({id:"message.tools.browse.failed",defaultMessage:"Search failed"})):(g=h.Finished,p=o?null:M.count===0?a.formatMessage({id:"message.tools.browse.started",defaultMessage:"Searching the web..."}):a.formatMessage({id:"message.tools.browse.finished",defaultMessage:"Searched {count, plural, =0 {0 sites} one {# site} other {# sites}}"},M)):l.length>0&&(p=H(a,M,o,i,l[l.length-1])),(l.length>0||o&&n)&&g!==h.Error?r.jsx(K,{highlightedCommand:p,showWorkUserSetting:!1,status:g,children:l.length===0?null:r.jsx(W,{commands:l})}):r.jsx(Z,{$isError:g===h.Error,children:p})}function x(e){return e.metadata?.command==="quote"||e.metadata?.command==="quote_full"||e.metadata?.command==="quote_lines"}function P(e){return e.map((t,n)=>{if(t.author.role!==S.Tool||n>0&&x(t)&&x(e[n-1]))return null;const o=t.metadata;if(!o)return null;const{command:i,status:m}=o;return i?{type:i,status:m,didError:t.content.content_type===w.SystemError,message:t}:null}).filter(N)}function W({commands:e}){const t=b();return r.jsx("div",{className:"mb-4 divide-y divide-token-border-light rounded-xl border border-token-border-light text-sm",children:r.jsx(_,{initial:!1,children:e.map((n,o)=>{const i=V(n);if(i==null)return null;const{icon:m,url:c,title:d,externalLink:l}=i,f=c?v(c):void 0,a=d?typeof d=="string"?d:t.formatMessage(d):null,g=c&&q(c);return r.jsx(Q.div,{initial:"collapsed",animate:"open",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},children:r.jsxs(R,{url:l??c,className:k("flex items-start gap-3 px-4 py-3",d?"text-token-text-secondary":"text-token-text-primary",o===0&&"rounded-t-xl",o===e.length-1&&"rounded-b-xl"),children:[m?r.jsx(m,{className:"icon-sm mt-0.5 flex-shrink-0 text-token-text-secondary"}):c?r.jsx(U,{url:c,className:"mt-1"}):null,r.jsxs("div",{children:[a&&r.jsxs("div",{className:"line-clamp-1 text-token-text-primary",children:[g&&`${g} — `,a]}),r.jsx("div",{children:f})]})]})},o)})})})}function R({url:e,children:t,className:n}){return e?r.jsxs("a",{href:e,target:"_blank",className:k(n,"group relative hover:bg-token-main-surface-secondary"),rel:"noreferrer",children:[t,r.jsx("div",{className:"invisible absolute right-3 bg-gradient-to-l from-token-main-surface-secondary to-transparent pl-4 group-hover:visible",children:r.jsx(D,{className:"icon-md text-token-text-secondary"})})]}):r.jsx("div",{className:n,children:t})}function $(e){const t=e.message.metadata?._cite_metadata?.metadata_list[0];return t!=null&&t.type!=="file"?t.title:null}function C(e){return e.message.metadata?.args?.[0]}function V(e){switch(e.type){case s.Search:{const t=e.message.metadata?.search_engine;if(t&&t!==E.Bing)return null;const n=C(e);return{icon:O,url:e.message.metadata?.message_source==="apple"?null:"bing.com",externalLink:A(e),title:n?`“${n}”`:{id:"message.tools.browse.querying",defaultMessage:"Querying",description:"Status message when issuing a query"}}}case s.Click:case s.MultiClick:case s.Lookup:case s.OpenUrl:case s.Open:case s.Quote:case s.QuoteFull:case s.QuoteLines:case s.Scroll:return{url:y(e),title:$(e)??void 0};case s.Back:return null}}function A(e){const t=e.message.metadata?.args?.[0];return t===void 0?null:F.getBingLink({query:t})}function H(e,t,n,o,i){switch(i?.type){case s.Click:case s.MultiClick:case s.Lookup:case s.OpenUrl:case s.Quote:case s.QuoteFull:case s.QuoteLines:case s.Scroll:case s.Open:case s.Back:return e.formatMessage({id:"message.tools.browse.reading",defaultMessage:"Browsing {domain}"},t);case s.Search:case void 0:return n?o?e.formatMessage({id:"browsingMessage.searchingKnowledge",defaultMessage:"Searching my knowledge"}):e.formatMessage({id:"browsingMessage.startingRetrieval",defaultMessage:"Reading documents"}):e.formatMessage({id:"message.tools.browse.searching",defaultMessage:'Searching "{query}"'},t)}}function I(e){const t=e.message.metadata?._cite_metadata?.metadata_list[0];return t!=null&&t.type==="file"?t.name:null}function J(e,t){switch(e.type){case s.Search:return!0;case s.Click:case s.Lookup:case s.MultiClick:case s.OpenUrl:case s.Quote:case s.QuoteFull:case s.QuoteLines:return t?I(e)!=null:y(e)!=null;case s.Open:case s.Back:case s.Scroll:return!1}}function X(e){return e.message.metadata?.message_source==="apple"}function y(e){const t=e.message.metadata?._cite_metadata?.metadata_list[0];return t!=null&&t.type!=="file"?t.url:null}function Y(e){return e.filter(t=>t.author.role===S.Tool)}const Z=T.p`first:mt-0 my-1.5 h-8 flex items-center ltr:mr-auto rtl:ml-auto empty:hidden
${({$isError:e})=>e?"text-token-text-error":"text-token-text-secondary"}`;export{ue as BrowsingMessage,y as getVisitedUrl};
//# sourceMappingURL=mslu3tm7fwlx185a.js.map
