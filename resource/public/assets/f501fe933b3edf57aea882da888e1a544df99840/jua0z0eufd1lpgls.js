import{eX as m,D as e,fM as D}from"./n26mv7rx7nquqst2.js";import{A as x,j as E,r as h,i as p}from"./n1tvutderx19k1zs.js";import{N as f}from"./pceg3mlzf8dzw9ob.js";const l=async a=>{await p.signOut({callbackUrl:a}),D()},i=(a,o)=>{l(a).then(()=>e.addTiming("chatgpt.web.logout.shouldClearIndexedDB")).catch(t=>{e.addError(new Error("Failed to logout",{cause:t}))})};function B({federatedLogoutUri:a}){const{isFannyPackInitializerEnabled:o}=f();return h.useEffect(()=>{const t=a??window.location.origin;window&&window.indexedDB&&o&&typeof window.indexedDB.databases=="function"?(e.addAction("chatgpt.web.logout.clearIndexedDB"),(async()=>{const u=(await window.indexedDB.databases()).map(n=>new Promise((r,w)=>{if(n.name){const d=window.indexedDB.deleteDatabase(n.name);d.onsuccess=()=>r(),d.onerror=g=>{e.addError(new Error(`Delete IndexedDB failed for database ${n.name}, ${g}`)),w()},d.onblocked=()=>{e.addError(new Error(`Delete IndexedDB blocked for database ${n.name}`)),r()}}else e.addError(new Error(`Invalid database name ${n.name}`)),r()}));await Promise.all(u)})().then(()=>{e.addTiming("chatgpt.web.logout.clearedIndexedDB"),i(t)}).catch(c=>{e.addError(new Error("Failed to clear IndexedDB",{cause:c})),i(t)})):l(a??window.location.origin).catch(s=>e.addError(new Error("Failed to logout",{cause:s})))},[o,a]),null}const k=m(function(){const o=x();return E.jsx(B,{...o})});export{k as default};
//# sourceMappingURL=jua0z0eufd1lpgls.js.map
