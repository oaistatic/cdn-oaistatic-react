import{r as d,j as h,a9 as f,u as I}from"./fs6h2trisr1juto6.js";import{d as p,j as u,D as l}from"./njq6ygky3ttysgdk.js";import{bA as m,bB as g}from"./d7a6rc8fexfzu7dt.js";import{A as c}from"./loh8e64j4csffv26.js";function T({className:s,onLoad:t,fadeIn:r=!0,...a}){const[o,e]=d.useState(!1);function n(i){e(!0),t?.(i)}return h.jsx("img",{...a,alt:a.alt,onLoad:i=>n(i),className:p(s,"w-fit",r&&"transition-opacity duration-300",o?"opacity-100":"opacity-0")})}function v(s,t,r){const a=d.useContext(m),{isUnauthenticated:o}=u(),e=a?.serverSharedThreadId;return f({queries:s.map(n=>c.makeQueryOptions({asset:n,sharedThreadId:e,gizmoId:t,isUnauthenticated:o,conversationId:r}))})}function w({asset:s,gizmoId:t,conversationId:r,getServerUrl:a}){const o=d.useContext(m),{isUnauthenticated:e}=u(),n=o?.serverSharedThreadId;return I(c.makeQueryOptions({asset:s,sharedThreadId:n,gizmoId:t,isUnauthenticated:e,conversationId:r,getServerUrl:a}))}async function L(s,t,r,a,o){return await Promise.all(t.map(e=>c.fetch(s,{asset:e,sharedThreadId:r,gizmoId:a,conversationId:o}))).catch(e=>{const n=t.map(i=>g(i.asset_pointer));throw l.addError(new Error(`Could not fetch files with IDs ${n} from file service`,{cause:e})),e})}export{T as I,w as a,L as f,v as u};
//# sourceMappingURL=o3d0pfqxdj7nivvr.js.map
