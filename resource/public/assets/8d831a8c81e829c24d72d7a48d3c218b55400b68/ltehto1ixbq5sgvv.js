import{eX as l,ay as c}from"./efuue3ezs0mj4ucx.js";import{o as h}from"./c87uv1mutc86tiqk.js";import{f,r as u}from"./n1tvutderx19k1zs.js";const w=l(function(){const[t]=f(),e=h(),i=u.useRef(!1);return u.useEffect(()=>{if(i.current)return;i.current=!0;let a;const o=t.get("login_hint"),n=t.get("connection"),r=t.get("callback_path"),s=t.get("auth_flow");s==="auth0"?a=c.Auth0:s==="authapi"&&(a=c.AuthApi),e({authType:"login",forceAuthFlow:a,...r?{callbackUrl:r}:void 0,...o||n?{additionalAuthParams:{...o?{login_hint:o}:{},...n?{connection:n}:{}}}:{}})},[e,t]),null});export{w as default};
//# sourceMappingURL=ltehto1ixbq5sgvv.js.map
