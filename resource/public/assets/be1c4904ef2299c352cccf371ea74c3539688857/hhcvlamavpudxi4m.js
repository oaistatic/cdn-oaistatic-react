import"./fs6h2trisr1juto6.js";import{ah as n}from"./df9u9imhvwerk6zv.js";function i(e){return e==n.User||e==n.Group?n.Private:e==n.WorkspaceLink?n.Workspace:e}function f(e,o){return e=i(e),o===void 0?!1:o.some(r=>r.recipient===e&&r.allowed)}function d(e,o){return o===void 0?[]:(e=i(e),o.find(t=>t.recipient===e)?.moderated_fields)}function u(e,o){const r=d(e,o);return r&&r.length>0}export{d as g,u as h,f as i};
//# sourceMappingURL=hhcvlamavpudxi4m.js.map
