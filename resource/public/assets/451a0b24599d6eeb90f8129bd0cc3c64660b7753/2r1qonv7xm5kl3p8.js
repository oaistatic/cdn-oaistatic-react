import{f2 as A,B as N,N as p,l as i,G as u,ey as E,R as T,h as y}from"./mwlpozqwnbys03vp.js";import{r as c,z as U,c as b,d as I,j as D}from"./cg166fqqcxkeiosv.js";import{G as k}from"./d5k5wa3zyqlgc9bk.js";const v="oauthRedirectUri",L=A(function(){const R=c.useRef(!1),[g,S]=c.useState(""),{code:a,error:l,error_description:f,state:r,[v]:_}=Object.fromEntries(new URLSearchParams(g.substring(1)).entries()),t=U().pluginId,n=b(),m=N(),s=I();return c.useEffect(()=>{S(window.location.hash)},[]),c.useEffect(()=>{if(R.current)return;t&&a&&r&&(R.current=!0);async function M(){const O=_??window.location.origin+`/ca/${t}/oauth/callback`;if(!t||!a||!r){s("/");return}{const e=await p.connectorOauthCallback(t,a,O,r);if(!e.success){s(i(u.CUSTOM_ERROR,e.redirect_path,e.error??e.message));return}let o=E.SLACK_SYNC_CONNECTOR;t===k&&(o=E.GDRIVE_SYNC_CONNECTOR);try{const h=await T.safePost("/connectors/{connector_name}/connect_account",{parameters:{path:{connector_name:o}},requestBody:{}});if(!h.success){await p.deleteUserConnectedApp(o);let C=d.connectedDriveErrorDesc;h.status_code===405&&(C=d.emailNotMatchDesc),s(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(C)));return}}catch{await p.deleteUserConnectedApp(o),s(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(d.connectedDriveErrorDesc)));return}s(i(u.CUSTOM_MSG,e.redirect_path,n.formatMessage(d.connectedDriveSyncDesc)))}}M()},[t,a,r,n,s,_]),c.useEffect(()=>{l&&m.danger(`${l}${f?`: ${f}`:""}`)},[l,f,m]),D.jsx(D.Fragment,{})}),d=y({connectedDriveSyncDesc:{id:"CACallback.connectedDriveSyncDesc.1",defaultMessage:"Your account has been connected."},connectedDriveErrorDesc:{id:"CACallback.connectedDriveErrorDesc.1",defaultMessage:"We encountered an issue. Please retry and contact your admin if this issue persists."},emailNotMatchDesc:{id:"CACallback.emailNotMatchDesc.1",defaultMessage:"The account you're trying to connect to doesn't match your ChatGPT account"}});export{L as default};
//# sourceMappingURL=2r1qonv7xm5kl3p8.js.map
