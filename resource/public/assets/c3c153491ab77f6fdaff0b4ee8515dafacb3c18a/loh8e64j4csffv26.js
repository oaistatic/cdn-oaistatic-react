import{as as l,Z as c,b as u,D as o,ch as f}from"./njq6ygky3ttysgdk.js";import{bB as d}from"./d7a6rc8fexfzu7dt.js";class h{async fetch(e,t){const{enabled:r,...a}=this.makeQueryOptions(t,e);return await e.fetchQuery(a)}makeQueryOptions(e,t){const r=d(e.asset.asset_pointer),a={...e,id:r},s=["getFileDownloadLink",r,e.gizmoId,e.conversationId];return e.force&&t?.invalidateQueries({queryKey:s}),{queryKey:s,queryFn:async()=>r.startsWith(l)?{...e.asset,url:r}:await w(a),enabled:e.getServerUrl??!0}}}const g=new h;async function w({asset:n,gizmoId:e,id:t,isUnauthenticated:r,conversationId:a}){const s=await c.getFileDownloadLink(t,e,r,a).catch(i=>{throw i instanceof u||o.addError(new Error(`Could not fetch file with ID ${t} from file service`,{cause:i})),i});if(s.status!==f.Success)throw o.addError(`Could not fetch file with ID ${t} from file service`,s),new Error(`Could not fetch file with ID ${t} from file service`);return{...n,url:s.download_url}}export{g as A};
//# sourceMappingURL=loh8e64j4csffv26.js.map
