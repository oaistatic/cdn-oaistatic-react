import{e as y,r as x,b as j,j as e,M as i,d as T}from"./fs6h2trisr1juto6.js";import{dv as m,bw as b,bx as N,c5 as u,R as M}from"./njq6ygky3ttysgdk.js";import{g as G}from"./jva3s9kefqoq05e1.js";import{ac as P}from"./d7a6rc8fexfzu7dt.js";import{G as C}from"./lzozr48eypicocb2.js";function L({isOpen:g,onClose:d,account:n,gpt:f}){const h=y(),[p,c]=x.useState(!1),[s,o]=x.useState(f),l=s?.tools.filter(a=>a.type!==m.JIT_PLUGIN),r=s?.tools.filter(a=>a.type===m.JIT_PLUGIN),v=j();return e.jsxs(b,{size:"custom",className:"max-w-lg text-sm",isOpen:g,onClose:N,type:"success",title:h.formatMessage(t.approveGPTTitle),children:[s==null?e.jsx("div",{className:"h-96",children:e.jsx(C,{className:"max-w-3xl flex-grow",inputClassName:"h-10 text-sm pl-9",iconClassName:"left-4",resultsSizeOffset:-90,onSelect:a=>{o(a)}})}):e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex gap-4 border-b border-token-border-light pb-6",children:[s.gizmo.display.profile_picture_url!=null?e.jsx("img",{src:s.gizmo.display.profile_picture_url,className:"h-24 w-24 rounded-full",width:96,height:96}):e.jsx(P,{className:"h-96 w-96 text-gray-400"}),e.jsxs("div",{className:"flex flex-col gap-1 text-token-text-primary",children:[e.jsx("p",{className:"text-lg font-semibold",children:s.gizmo.display.name}),e.jsx("p",{children:s.gizmo.display.description}),e.jsx("p",{className:"text-token-text-secondary",children:e.jsx(i,{...t.gptByLine,values:{authorName:s.gizmo.author.display_name}})})]})]}),e.jsx("div",{className:"flex border-b border-token-border-light py-6",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx("p",{className:"w-24 font-semibold",children:e.jsx(i,{...t.capabilitiesTitle})}),e.jsx("div",{className:"flex flex-col gap-1 text-token-text-primary",children:l&&l.length>0?l.map(a=>e.jsx("p",{children:G(n,a.type)},a.id)):e.jsx("p",{className:"text-token-text-secondary",children:e.jsx(i,{...t.noCapabilitiesEnabled})})})]})}),e.jsx("div",{className:"flex py-6",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx("p",{className:"w-24 font-semibold",children:e.jsx(i,{...t.actionsTitle})}),e.jsx("div",{className:"flex flex-col gap-1 text-token-text-primary",children:r&&r.length>0?r.map(a=>e.jsx("p",{children:a.metadata.domain??""},a.id)):e.jsx("p",{className:"text-token-text-secondary",children:e.jsx(i,{...t.noCustomActions})})})]})})]}),e.jsxs("div",{className:"mt-4 flex justify-end gap-2",children:[e.jsx(u,{color:"secondary",onClick:()=>{o(void 0),d(!1)},loading:p,children:e.jsx(i,{...t.cancelButtonText})}),e.jsx(u,{color:"primary",loading:p,disabled:s==null,onClick:()=>{s!=null&&(c(!0),M.safePost("/accounts/{account_id}/gpts/{third_party_gizmo_id}/approve",{parameters:{path:{account_id:n.id,third_party_gizmo_id:s.gizmo.id}}}).finally(()=>{v.invalidateQueries({queryKey:["gizmo"]}),d(!0),o(void 0),c(!1)}))},children:e.jsx(i,{...t.approveButtonText})})]})]})}const t=T({approveGPTTitle:{id:"approveGPTModal.approveGPTTitle",defaultMessage:"Approve a third-party GPT"},cancelButtonText:{id:"approveGPTModal.cancelButtonText",defaultMessage:"Cancel"},approveButtonText:{id:"approveGPTModal.approveButtonText",defaultMessage:"Approve"},gptByLine:{id:"approveGPTModal.gptByLine",defaultMessage:"By {authorName}"},capabilitiesTitle:{id:"approveGPTModal.capabilitiesTitle",defaultMessage:"Capabilities"},actionsTitle:{id:"approveGPTModal.actionsTitle",defaultMessage:"Actions"},noCapabilitiesEnabled:{id:"approveGPTModal.noCapabilitiesEnabled",defaultMessage:"No capabilities enabled"},noCustomActions:{id:"approveGPTModal.noCustomActions",defaultMessage:"No custom actions"}});export{L as A};
//# sourceMappingURL=mj9703lmt9qipzgc.js.map
