import{G as h,dN as x}from"./idf4u2jy0wx0pvap.js";import{bY as p,bW as i,ax as d,bQ as T,am as b}from"./i3bl95k8z8nuf4dv.js";import{m as C}from"./gc51ish3otzvnj1w.js";function y(e,{unprocessed:o=!1}={}){const t=[],n=[];for(const r of e.messages)if(v(r)){const l=r.metadata?.content_references,c=p(r);if(o)t.push(c);else{const a=C(c,l);a["text/plain"]&&t.push(a["text/plain"]),a["text/html"]&&n.push(a["text/html"])}}const s={};return t.length>0&&(s["text/plain"]=t.join(`

`)),n.length>0&&(s["text/html"]=n.join(`

`)),s}function v(e){return!e.clientMetadata?.err&&(e.author.role===i.Assistant||e.author.role===i.User)&&(e.author.role===i.User||e.recipient==="all")&&!e.metadata?.reasoning_status}const M=async(e,o,t,n,s,r="mouse")=>{const c=d.getConversationTurns(T(o))[t];if(!c)return Promise.reject();const{messages:a}=c,u=s,g=u.metaKey||u.altKey,f=y(c,{unprocessed:g});await h(f,n,s);const m=b(o);m&&x(e,{messageId:a[0].id,type:"copy",serverThreadId:m,selectedText:p(a[0]),source:r,location:"message"})},K=(e,o,t,n,s="mouse")=>{const r=d.getConversationTurns(T(o));return M(e,o,r.length-1,t,n,s)};export{M as a,K as c};
//# sourceMappingURL=np9w83f07wa6edf5.js.map
