import{eX as a,ac as n,m as r,G as s}from"./efuue3ezs0mj4ucx.js";import{u as i}from"./n1tvutderx19k1zs.js";const c=async()=>{try{const t=await n.requestMfaToken();if(!t||!t.state_token)throw new Error("Failed to fetch MFA token");return t.state_token}catch{window.location.href=r(s.ENABLE_MFA_ERROR,"/#settings/Security")}},h=a(function(){const{data:e}=i({queryKey:["mfaToken"],queryFn:c});if(e){const o=new URLSearchParams(window.location.search).get("app")??"ChatGPT";window.location.href=`https://auth.openai.com/totp_enroll?origin_app_name=${o}&mfa_token=${e}`}return null});export{h as default};
//# sourceMappingURL=dnxr51oa4w2n197u.js.map
