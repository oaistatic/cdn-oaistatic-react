import{c as r,a as n,j as d}from"./cg166fqqcxkeiosv.js";import{bR as m,g6 as u}from"./mwlpozqwnbys03vp.js";import{ao as p,dg as f,dC as c,dD as g}from"./d5k5wa3zyqlgc9bk.js";function b(i){const{data:{gizmos:s}={}}=p();return s?s.some(e=>e.resource.gizmo.id===i):!1}function G({gizmoResource:i,location:s}){const e=b(i.gizmo.id),o=r(),a=e?o.formatMessage({id:"GizmoInformation.pin.sidebar.hide",defaultMessage:"Hide from sidebar"}):o.formatMessage({id:"GizmoInformation.pin.sidebar.keep",defaultMessage:"Keep in sidebar"}),t=n();return d.jsx(m.Item,{onClick:()=>{f.updateGizmoSidebar(t,c,i.gizmo.id,e?"hide":"keep",s)},icon:e?u:g,children:a})}export{G as GizmoKeepInSidebarMenuItem};
//# sourceMappingURL=fmpezyh40kyue9pf.js.map
