import{eX as A,B as T,ac as m,m as i,G as u,eE as E,R as N,j as U}from"./efuue3ezs0mj4ucx.js";import{r as s,z as b,c as y,e as I,j as D}from"./n1tvutderx19k1zs.js";import{G as k}from"./c87uv1mutc86tiqk.js";const v="oauthRedirectUri",j=A(function(){const p=s.useRef(!1),[g,S]=s.useState(""),{code:a,error:l,error_description:f,state:r,[v]:R}=Object.fromEntries(new URLSearchParams(g.substring(1)).entries()),t=b().pluginId,n=y(),_=T(),c=I();return s.useEffect(()=>{S(window.location.hash)},[]),s.useEffect(()=>{if(p.current)return;t&&a&&r&&(p.current=!0);async function M(){const O=R??window.location.origin+`/ca/${t}/oauth/callback`;if(!t||!a||!r){c("/");return}const e=await m.connectorOauthCallback(t,a,O,r);if(!e.success){c(i(u.CUSTOM_ERROR,e.redirect_path,e.error??e.message));return}let o=E.SLACK_SYNC_CONNECTOR;t===k&&(o=E.GDRIVE_SYNC_CONNECTOR);try{const h=await N.safePost("/connectors/{connector_name}/connect_account",{parameters:{path:{connector_name:o}},requestBody:{}});if(!h.success){await m.deleteUserConnectedApp(o);let C=d.connectedDriveErrorDesc;h.status_code===405&&(C=d.emailNotMatchDesc),c(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(C)));return}}catch{await m.deleteUserConnectedApp(o),c(i(u.CUSTOM_ERROR,e.redirect_path,n.formatMessage(d.connectedDriveErrorDesc)));return}c(i(u.CUSTOM_MSG,e.redirect_path,n.formatMessage(d.connectedDriveSyncDesc)))}M()},[t,a,r,n,c,R]),s.useEffect(()=>{l&&_.danger(`${l}${f?`: ${f}`:""}`)},[l,f,_]),D.jsx(D.Fragment,{})}),d=U({connectedDriveSyncDesc:{id:"CACallback.connectedDriveSyncDesc.1",defaultMessage:"Your account has been connected."},connectedDriveErrorDesc:{id:"CACallback.connectedDriveErrorDesc.1",defaultMessage:"We encountered an issue. Please retry and contact your admin if this issue persists."},emailNotMatchDesc:{id:"CACallback.emailNotMatchDesc.1",defaultMessage:"The account you're trying to connect to doesn't match your ChatGPT account"}});export{j as default};
//# sourceMappingURL=bfdqozrorqdp2m6u.js.map
