import{c as x,r as C,j as I}from"./izh0i1dfnf8ev7x1.js";import{al as _,V as E,M,H as g,P as h,a as c,S as D,Q as P,ce as a,o as B,c5 as R,aJ as f,cA as N,n as O}from"./hggowi1ggrzb09yc.js";import{cz as o,cA as j}from"./fc2hzad6rtrm7s5f.js";import{I as z}from"./ozu9ysjrlcwoblzo.js";const m=(...e)=>t=>e.some(s=>s(t)),b=({allGroupedMessages:e})=>e.some(t=>[o.Browsing,o.RetrievalBrowsing,o.ParallelBrowsing].includes(t.type)),y=({allGroupedMessages:e})=>e.some(t=>t.type===o.SearchGPTQuery),A=({allGroupedMessages:e})=>e.some(t=>t.type===o.Text&&t.message.message?.metadata?.followup_prompts?.length),p=({allGroupedMessages:e})=>e.some(t=>t.type===o.CodeInterpreter);function G(e){return!e||!e.instructions?"":typeof e.instructions=="string"?e.instructions:e.instructions.filter(t=>typeof t=="string").join("")}const L=[{match:m(b,y),tag:"Shouldn't have searched the web",label:a({id:"kL047b",defaultMessage:"Shouldn't have searched the web"})},{match:A,tag:"Don't like the followups",label:a({id:"xAFgPE",defaultMessage:"Don’t like the suggested follow ups"})},{match:m(b,y),tag:"Don't like the source it cited",label:a({id:"OWjzGX",defaultMessage:"Don't like the sources it cited"})},{match:p,tag:"Shouldn't have run code",label:a({id:"53w4ay",defaultMessage:"Shouldn't have run code"})},{match:p,tag:"Couldn't handle my file",label:a({id:"EkFTQ5",defaultMessage:"Couldn't handle my file"})},{match:({allGroupedMessages:e})=>e.some(t=>t.type===o.Dalle),tag:"Shouldn't have created an image",label:a({id:"S8FRsr",defaultMessage:"Shouldn't have created an image"})},{match:({allGroupedMessages:e})=>e.some(t=>{if(t.type!==o.Text)return!1;const{message:s}=t.message,{content:l}=s;return l.content_type===M.Text&&B(s).match(/^```[\S]+\n/gm)}),tag:"Code was incorrect",label:a({id:"4EBdQk",defaultMessage:"Code was incorrect"})},{match:({systemContent:e})=>G(e).includes("Personality")??!1,tag:"Too chatty or casual",label:a({id:"ATzJKW",defaultMessage:"Too chatty or casual"})},{match:({features:e})=>e.includes(R.Sunshine),tag:"Shouldn't have used Memory",label:a({id:"yfUEiz",defaultMessage:"Shouldn't have used Memory"})},{tag:"Don't like the style",label:a({id:"nGxjdj",defaultMessage:"Don't like the style"})},{tag:"Not factually correct",label:a({id:"Ke7JtQ",defaultMessage:"Not factually correct"})},{tag:"Didn't fully follow instructions",label:a({id:"Rdlt9V",defaultMessage:"Didn't fully follow instructions"})},{tag:"Refused when it shouldn't have",label:a({id:"2yRS/Q",defaultMessage:"Refused when it shouldn't have"})},{tag:"Being lazy",label:a({id:"14MPmT",defaultMessage:"Being lazy"})},{tag:"Unsafe or problematic",label:a({id:"02pXBl",defaultMessage:"Unsafe or problematic"})},{tag:"Biased",label:a({id:"pK35DW",defaultMessage:"Biased"})},{tag:"Other",label:a({id:"WiIGE+",defaultMessage:"Other"})}],Q=[{tag:"I disagree with the policy",label:a({id:"oKyDLz",defaultMessage:"I disagree with the policy"})},{tag:"This didn't violate the policy",label:a({id:"7fUkVF",defaultMessage:"This didn't violate the policy"})},{tag:"I don't understand the policy",label:a({id:"4Cdp6N",defaultMessage:"I don't understand the policy"})},{tag:"This didn't take the full context",label:a({id:"vnZJDP",defaultMessage:"This didn't take the full context"})}];function U(e,t,s){return t.filter(l=>!l.match||l.match(s)).map(l=>({value:l.tag,label:e.formatMessage(l.label)}))}function V(e){const t=e[e.length-1];if(!t)return!1;const s="message"in t?t.message:null;if(s){const l=j(s);return l!=null&&(l.errCode===f.ContentPolicy||l.errCode===f.ContentOrTos)}else return!1}function q({clientThreadId:e,conversationMessage:t,currentModelId:s,allGroupedMessages:l}){const k=x(),S=_()??[],i=t.rating,r=E(e,n=>{const d=n?.tree.getBranchFromLeaf(t.message.id);return N(d,u=>u.message.author.role===O.System&&u.message.content.content_type==="system_content")}),T=r?.message.content.content_type===M.SystemContent?r?.message.content:null,F=C.useCallback(n=>{const d=g(e);d&&(n.tags.length===0&&!n.textFeedback||(h.logEvent(n.source==="inline"?c.messageFeedbackInlineSubmitted:c.messageFeedbackDialogSubmitted,{id:t.message.id,threadId:d,tags:n.tags,content:n.textFeedback,model:s,rating:i}),D.logEvent(n.source==="inline"?"chatgpt_feedback_inline_submitted":"chatgpt_feedback_dialog_submitted",n.tags?.[0]??null,{id:t.message.id,threadId:d,tag:n.tags?.[0]??"",content:n.textFeedback??"",model:s,rating:i??""}),i&&P.submitMessageFeedback({message_id:t.message.id,conversation_id:d,rating:i,text:n.textFeedback,tags:n.tags,tag_choices:n.tagChoices})))},[e,t.message,s,i]),w=()=>{h.logEvent(c.messageFeedbackMoreOptionsClicked,{id:t.message.id,threadId:g(e),model:s,rating:i})},v=U(k,V(l)?Q:L,{allGroupedMessages:l,features:S,currentModelId:s,systemContent:T});return i==="thumbsUp"?null:I.jsx(z,{tagOptions:v,onSubmit:F,onMoreClicked:w})}export{q as default};
//# sourceMappingURL=niehzmi6s4ycdcrr.js.map
