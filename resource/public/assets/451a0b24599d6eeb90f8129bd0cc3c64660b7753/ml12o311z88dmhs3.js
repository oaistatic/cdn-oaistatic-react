import{f2 as c,h,P as l,bT as g}from"./mwlpozqwnbys03vp.js";import{j as e,M as t,d as p,h as f,r as m}from"./cg166fqqcxkeiosv.js";import{A as y,a as E,b as v}from"./h0zvwq6ugm1u9yfy.js";import{bF as A,bG as x}from"./d5k5wa3zyqlgc9bk.js";const r=h({oops:{id:"AuthError.oops",defaultMessage:"Oops!"},goBack:{id:"AuthError.goBack",defaultMessage:"Go back"},systemBusyError:{id:"AuthError.systemBusyError",defaultMessage:"Our systems are a bit busy at the moment, please take a break and try again soon."},identityProviderMismatch:{id:"AuthError.identityProviderMismatch",defaultMessage:"You tried signing in with a different authentication method than the one you used during signup. Please try again using your original authentication method."},accountDeactivated:{id:"AuthError.accountDeactivated",defaultMessage:"You do not have an account because it has been deleted or deactivated. If you believe this was an error, please contact us through our help center at help.openai.com."},unsupportedCountry:{id:"AuthError.unsupportedCountry",defaultMessage:"OpenAI's services are not available in your country."},unsupportedRegion:{id:"AuthError.unsupportedRegion",defaultMessage:"OpenAI's services are not available in your region."},unknownCountry:{id:"AuthError.unknownCountry",defaultMessage:"We were unable to determine your country of origin to enforce geographical restrictions. Please use a different network, or contact us at help.openai.com if the issue persists."},ssoRequired:{id:"AuthError.ssoRequired",defaultMessage:"Please use your organization's SSO to access your account."},mfaBypass:{id:"AuthError.mfaBypass",defaultMessage:"Your account is protected with multi-factor authentication. Please log in again using the method you set that up with."},defaultError:{id:"AuthError.defaultError",defaultMessage:"We ran into an issue while signing you in, please take a break and try again soon."}}),i=e.jsx(t,{...r.systemBusyError}),M="mfa_bypass",n={RequestTimeout:i,AuthRateLimit:i,identity_provider_mismatch:e.jsx(t,{...r.identityProviderMismatch}),account_deactivated:e.jsx(t,{...r.accountDeactivated}),unsupported_country:e.jsx(t,{...r.unsupportedCountry}),unsupported_region:e.jsx(t,{...r.unsupportedRegion}),unknown_country:e.jsx(t,{...r.unknownCountry}),sso_required:e.jsx(t,{...r.ssoRequired}),default:e.jsx(t,{...r.defaultError})},w=c(function(){return e.jsx(j,{})});function b(o){const s=o.split("|");return s.length>1?s[1]:void 0}function P(o){if(o in n)return n[o];if(o.startsWith(M)){const s=b(o),a=(s===void 0?void 0:x[s])??"your other account you set that up with";return e.jsx(t,{id:"AuthError.mfaBypass2",defaultMessage:"Your account is protected with multi-factor authentication. Please log in with {providerLabel} to provide the verification code.",values:{providerLabel:a}})}else return n.default}function j(){const o=p(),[s]=f(),a=s.get("error")??"",u=P(a);return m.useEffect(()=>{if(a!==void 0){const d=sessionStorage.getItem(A)??"unknown";l.logAuthErrorResponse(a,d)}},[a]),e.jsx(y,{isStorageComplianceEnabled:!1,children:e.jsxs(E,{children:[e.jsx(v,{}),e.jsx("div",{className:"mb-2 text-center text-lg",children:e.jsx(t,{...r.oops})}),e.jsx("div",{className:"mb-5 text-center",children:u}),e.jsx(g,{as:"button",color:"secondary",onClick:()=>o("/auth/login",{replace:!0}),children:e.jsx(t,{...r.goBack})})]})})}export{w as default};
//# sourceMappingURL=ml12o311z88dmhs3.js.map
