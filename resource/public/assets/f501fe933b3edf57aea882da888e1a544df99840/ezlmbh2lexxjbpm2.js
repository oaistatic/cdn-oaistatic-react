import{c as R,r as h,j as e,M as c}from"./n1tvutderx19k1zs.js";import{er as f,bd as g,et as p,au as m}from"./n26mv7rx7nquqst2.js";import{bt as x,bu as v,bv as j,bw as M,l as z,bx as b,by as G,bz as y}from"./pceg3mlzf8dzw9ob.js";function T({gizmoId:s,onClose:a}){const{data:o}=z(s),{data:t}=b(p.Gizmo),n=R(),i=G(n,s,p.Gizmo);if(t==null)return null;const r=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(y,{reasons:t.reasons,submitReport:i,title:r,onClose:a,header:t.header,subHeader:t.header_explanation})}function k({gizmoId:s,clientThreadId:a,onClose:o}){const t=R(),n=m("1855896025")?.value,i=m("3376455464")?.value,r=f(a),[u,d]=h.useState();return!n||!i||u==="gpt"||r==null?e.jsx(T,{gizmoId:s,onClose:o}):u==="conversation"?e.jsx(x,{serverThreadId:r,onClose:o}):e.jsxs(g,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(v,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(j,{children:[e.jsx(M,{onClick:l=>{l.preventDefault(),d("conversation")},children:e.jsx(c,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(M,{onClick:l=>{l.preventDefault(),d("gpt")},children:e.jsx(c,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{T as G,k as a};
//# sourceMappingURL=ezlmbh2lexxjbpm2.js.map
