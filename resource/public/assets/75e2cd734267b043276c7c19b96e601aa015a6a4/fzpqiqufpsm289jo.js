import{R as j,j as e,c as l}from"./l6lryjpkt8rv0lpy.js";import{u as z,I as D}from"./cal7wpbc1bdlnwfh.js";import{a as n,T as r}from"./dssqb33wed4i78fb.js";import{di as d,dj as u}from"./dvllb5fed1b4y7k1.js";import{bV as T,h as _}from"./mnkup87aq6tfilq5.js";import"./bj9d14lm2vt5tl41.js";import"./cbms2jcglp4b707f.js";import"./1e3kywkhcjn5spyo.js";const f=13e3;function v({messages:s}){const t=l(),o=s.flatMap(i=>T.getImageAssetPointers(i.message)),a=z(o);return e.jsx("div",{children:a.map((i,g)=>{const{isLoading:p,data:c,error:M}=i;if(p)return e.jsx(n,{conversationMessages:s,icon:d,status:r.Finished,estimatedToolDurationMs:f,animationLoopDurationMs:4e3},g);if(M!=null||c?.url==null)return e.jsx(n,{conversationMessages:s,icon:u,status:r.Error,text:t.formatMessage(m.failedProfilePic),estimatedToolDurationMs:0,animationLoopDurationMs:3500},g);const{url:h,width:P,height:x}=c;return e.jsx("div",{className:"flex items-center justify-center p-4",children:e.jsx(D,{className:"gizmo-shadow-stroke h-48 w-48 rounded-full border-2 dark:border-gray-500",alt:"Profile Picture",src:h,width:P,height:x})},g)})})}function G({messages:s}){const t=l();return s.length===0?null:e.jsx(n,{conversationMessages:s,icon:d,status:r.Running,text:t.formatMessage(m.generatingProfilePic),estimatedToolDurationMs:f,animationLoopDurationMs:4e3})}function E({messages:s}){const t=l();return s.some(a=>a.message.status==="in_progress")?e.jsx(n,{conversationMessages:s,icon:u,status:r.Running,text:t.formatMessage(m.updating),estimatedToolDurationMs:1e4,animationLoopDurationMs:3500}):e.jsx(n,{conversationMessages:s,icon:u,status:r.Finished,estimatedToolDurationMs:1e4,animationLoopDurationMs:3500})}function I({messages:s}){const t=[],o=[],a=[];for(const i of s)i.message.recipient==="gizmo_editor.generate_profile_pic"?t.push(i):i.message.author.name==="gizmo_editor.generate_profile_pic"?o.push(i):i.message.recipient==="gizmo_editor.update_behavior"&&a.push(i);return e.jsxs(e.Fragment,{children:[t.length>0&&o.length===0&&e.jsx(G,{messages:t}),o.length>0&&e.jsx(v,{messages:o}),a.length>0&&e.jsx(E,{messages:a})]})}const O=j.memo(I),m=_({updating:{id:"message.gizmo.updating",defaultMessage:"Updating GPT..."},generatingProfilePic:{id:"message.gizmo.generatingProfilePic",defaultMessage:"Generating profile picture..."},failedProfilePic:{id:"message.gizmo.failed",defaultMessage:"Failed to generate profile picture."}});export{O as default};
//# sourceMappingURL=fzpqiqufpsm289jo.js.map
