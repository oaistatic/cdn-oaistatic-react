import{c as r,a as n,j as d}from"./n1tvutderx19k1zs.js";import{bW as m,gd as u}from"./efuue3ezs0mj4ucx.js";import{ao as p,dh as f,dE as c,dF as b}from"./c87uv1mutc86tiqk.js";function g(i){const{data:{gizmos:s}={}}=p();return s?s.some(e=>e.resource.gizmo.id===i):!1}function G({gizmoResource:i,location:s}){const e=g(i.gizmo.id),o=r(),a=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),t=n();return d.jsx(m.Item,{onClick:()=>{f.updateGizmoSidebar(t,c,i.gizmo.id,e?"hide":"keep",s)},icon:e?u:b,children:a})}export{G as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=lzjxt8202jwcvecr.js.map
