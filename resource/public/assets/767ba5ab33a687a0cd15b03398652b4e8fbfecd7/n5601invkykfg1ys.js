import{N as h,dN as x}from"./jn7p98x7qxquz26a.js";import{K as m,J as i,W as T,V as d,v as C}from"./j5zd9vs1l0bwsjqa.js";import{m as v}from"./b0v1yruiy44zd1p9.js";function y(e,{unprocessed:o=!1}={}){let t=[],n=[];for(const r of e.messages)if(b(r)){const l=r.metadata?.content_references,c=m(r);if(o)t.push(c);else{const a=v(c,l);a["text/plain"]&&t.push(a["text/plain"]),a["text/html"]&&n.push(a["text/html"])}}const s={};return t.length>0&&(s["text/plain"]=t.join(`

`)),n.length>0&&(s["text/html"]=n.join(`

`)),s}function b(e){return!e.clientMetadata?.err&&(e.author.role===i.Assistant||e.author.role===i.User)&&(e.author.role===i.User||e.recipient==="all")}const M=async(e,o,t,n,s,r="mouse")=>{const c=T.getConversationTurns(d(o))[t];if(!c)return Promise.reject();const{messages:a}=c,u=s,g=u.metaKey||u.altKey,f=y(c,{unprocessed:g});await h(f,n,s);const p=C(o);p&&x(e,{messageId:a[0].id,type:"copy",serverThreadId:p,selectedText:m(a[0]),source:r,location:"message"})},K=(e,o,t,n,s="mouse")=>{const r=T.getConversationTurns(d(o));return M(e,o,r.length-1,t,n,s)};export{M as a,K as c};
//# sourceMappingURL=n5601invkykfg1ys.js.map
