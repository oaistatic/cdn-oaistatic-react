import{r as d,j as h,aE as f,u as I}from"./cg166fqqcxkeiosv.js";import{d as p,fq as u,b3 as m,D as l}from"./dze2l9y9kn6nwat0.js";import{A as c}from"./kb3phtht4s5rhb60.js";import{bO as g}from"./j4xe1fdohr6xk09p.js";function A({className:s,onLoad:t,fadeIn:r=!0,...a}){const[o,e]=d.useState(!1);function n(i){e(!0),t?.(i)}return h.jsx("img",{...a,alt:a.alt,onLoad:i=>n(i),className:p(s,"w-fit",r&&"transition-opacity duration-300",o?"opacity-100":"opacity-0")})}function v(s,t,r){const a=d.useContext(u),{isUnauthenticated:o}=m(),e=a?.serverSharedThreadId;return f({queries:s.map(n=>c.makeQueryOptions({asset:n,sharedThreadId:e,gizmoId:t,isUnauthenticated:o,conversationId:r}))})}function w(s,t,r){const a=d.useContext(u),{isUnauthenticated:o}=m(),e=a?.serverSharedThreadId;return I(c.makeQueryOptions({asset:s,sharedThreadId:e,gizmoId:t,isUnauthenticated:o,conversationId:r}))}async function E(s,t,r,a,o){return await Promise.all(t.map(e=>c.fetch(s,{asset:e,sharedThreadId:r,gizmoId:a,conversationId:o}))).catch(e=>{const n=t.map(i=>g(i.asset_pointer));throw l.addError(new Error(`Could not fetch files with IDs ${n} from file service`,{cause:e})),e})}export{A as I,w as a,E as f,v as u};
//# sourceMappingURL=a18jwh9lzr2ddmbd.js.map
