import{e as u,j as e,M as o}from"./fs6h2trisr1juto6.js";import{V as c,bw as m,by as n}from"./cyi7nanrg0vdotzd.js";import{ai as M}from"./df9u9imhvwerk6zv.js";function x({gizmoId:i,onSuccess:r,onClose:s}){const t=u(),l=c(),a=M(),d=async()=>{try{await a.mutateAsync({gizmoId:i}),r()}catch{l.danger(t.formatMessage({id:"QmcISs",defaultMessage:"Failed to delete GPT. Please try again."}))}};return e.jsx(m,{isOpen:!0,onClose:s,type:"danger",title:e.jsx(o,{id:"shLmv5",defaultMessage:"Delete GPT"}),primaryButton:e.jsx(n.Button,{title:t.formatMessage({id:"nlWRPu",defaultMessage:"Delete GPT"}),color:"danger",loading:a.isPending,onClick:()=>{d()}}),secondaryButton:e.jsx(n.Button,{title:t.formatMessage({id:"D4IuIb",defaultMessage:"Cancel"}),color:"secondary",onClick:s}),children:e.jsx("div",{className:"text-sm",children:e.jsx(o,{id:"zIR+cK",defaultMessage:"Are you sure you want to delete this GPT? This cannot be undone."})})})}export{x as G};
//# sourceMappingURL=e4r3qaiq4hir6yrn.js.map
