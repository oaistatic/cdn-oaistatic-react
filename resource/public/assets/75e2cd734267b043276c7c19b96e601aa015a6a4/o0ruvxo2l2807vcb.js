import{c as u,r as x,a as T,j as e,M as t}from"./l6lryjpkt8rv0lpy.js";import{b7 as g,b8 as p,bT as l,R as M,h as f}from"./mnkup87aq6tfilq5.js";function P({isOpen:n,onClose:o,account:d,gpt:s}){const m=u(),[r,i]=x.useState(!1),c=T();return e.jsxs(g,{size:"custom",className:"max-w-lg text-sm",isOpen:n,onClose:p,type:"success",title:m.formatMessage(a.removeModalTitle),children:[e.jsx("p",{className:"mb-4 text-token-text-primary",children:e.jsx(t,{...a.removeModalPrompt,values:{gptName:s.gizmo.display.name}})}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(l,{color:"secondary",onClick:()=>{o(!1)},loading:r,children:e.jsx(t,{...a.cancelButtonText})}),e.jsx(l,{color:"danger",loading:r,onClick:()=>{i(!0),M.safeDelete("/accounts/{account_id}/gpts/{gizmo_id}",{parameters:{path:{account_id:d.id,gizmo_id:s.gizmo.id}}}).finally(()=>{c.invalidateQueries({queryKey:["gizmo"]}),o(!0),i(!1)})},children:e.jsx(t,{...a.removeButtonText})})]})]})}const a=f({removeModalTitle:{id:"removeThirdPartyGPTModal.accessModalTitle",defaultMessage:"Remove GPT from workspace"},removeModalPrompt:{id:"removeThirdPartyGPTModal.accessModalPrompt",defaultMessage:"Are you sure you want to revoke approval of {gptName} for your workspace? Members won't be able to chat with this GPT anymore."},cancelButtonText:{id:"removeThirdPartyGPTModal.cancelButtonText",defaultMessage:"Cancel"},removeButtonText:{id:"removeThirdPartyGPTModal.removeButtonText",defaultMessage:"Remove GPT"}});export{P as R};
//# sourceMappingURL=o0ruvxo2l2807vcb.js.map
