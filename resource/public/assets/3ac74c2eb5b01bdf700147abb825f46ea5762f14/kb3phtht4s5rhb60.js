import{N as l,b as u,D as n,bp as f}from"./dze2l9y9kn6nwat0.js";import{bO as c}from"./j4xe1fdohr6xk09p.js";class d{async fetch(e,t){return await e.fetchQuery(this.makeQueryOptions(t))}makeQueryOptions(e){const t=c(e.asset.asset_pointer),s={...e,id:t};return{queryKey:["getFileDownloadLink",c(e.asset.asset_pointer),e.gizmoId,e.conversationId],queryFn:async()=>await w(s)}}}const y=new d;async function w({asset:a,gizmoId:e,id:t,isUnauthenticated:s,conversationId:i}){const r=await l.getFileDownloadLink(t,e,s,i).catch(o=>{throw o instanceof u||n.addError(new Error(`Could not fetch file with ID ${t} from file service`,{cause:o})),o});if(r.status!==f.Success)throw n.addError(`Could not fetch file with ID ${t} from file service`,r),new Error(`Could not fetch file with ID ${t} from file service`);return{...a,url:r.download_url}}export{y as A};
//# sourceMappingURL=kb3phtht4s5rhb60.js.map
