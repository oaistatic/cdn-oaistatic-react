import{eX as m,B as _,ag as R,m as p,G as h}from"./n26mv7rx7nquqst2.js";import{A as S,e as E,r as o,j as O}from"./n1tvutderx19k1zs.js";const f="chatgpt://oauth_complete",U=m(function(){const{pluginId:t,code:i,state:n,error:r,errorDesc:c}=S(),e=E(),u=o.useRef(!1);o.useEffect(()=>{if(u.current===!0)return;u.current=!0;async function g(){const d=`https://chat.openai.com/aip/${t}/oauth/callback`;try{const a=await R.pluginOauthCallback(t,i,d,n);if(a.success)if(a.redirect_path===f)window.location.href=f;else{const s=new URL(p(h.OAUTH_SUCCESS,a.redirect_path),location.origin);s.searchParams.set("oauth_success","true"),e(s.pathname+s.search+s.hash)}else e(p(h.CUSTOM_ERROR,a.redirect_path,a.error??a.message))}catch{e({pathname:"/",search:new URLSearchParams({model:"gpt-4-plugins",loginAip:t,loginSuccess:"false"}).toString()})}}g()},[t,i,n,e]);const l=_();return o.useEffect(()=>{r&&l.danger(`${r}${c?`: ${c}`:""}`,{duration:5})},[r,c,l]),O.jsx("div",{})});export{U as default};
//# sourceMappingURL=m98kg9pr0hj8i133.js.map
