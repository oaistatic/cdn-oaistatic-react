import{c as u,j as e,M as o}from"./n1tvutderx19k1zs.js";import{B as c,bd as m,bf as n}from"./n26mv7rx7nquqst2.js";import{aE as g}from"./pceg3mlzf8dzw9ob.js";function y({gizmoId:i,onSuccess:r,onClose:t}){const s=u(),l=c(),a=g(),d=async()=>{try{await a.mutateAsync({gizmoId:i}),r()}catch{l.danger("Failed to delete gizmo. Please try again.")}};return e.jsx(m,{isOpen:!0,onClose:t,type:"danger",title:e.jsx(o,{id:"shLmv5",defaultMessage:"Delete GPT"}),primaryButton:e.jsx(n.Button,{title:s.formatMessage({id:"nlWRPu",defaultMessage:"Delete GPT"}),color:"danger",loading:a.isPending,onClick:()=>{d()}}),secondaryButton:e.jsx(n.Button,{title:s.formatMessage({id:"D4IuIb",defaultMessage:"Cancel"}),color:"secondary",onClick:t}),children:e.jsx("div",{className:"text-sm",children:e.jsx(o,{id:"zIR+cK",defaultMessage:"Are you sure you want to delete this GPT? This cannot be undone."})})})}export{y as G};
//# sourceMappingURL=gxnchqsr4k5w4z36.js.map
