import{r as a,l as f,j as i}from"./cg166fqqcxkeiosv.js";import{bZ as x,g1 as h,ab as v,dS as w,g2 as y,fD as C,dT as S}from"./dze2l9y9kn6nwat0.js";import{b as g,c$ as W,db as P,T as j,r as A,dc as L}from"./j4xe1fdohr6xk09p.js";import{C as M}from"./csxhtnukvyyy22x8.js";import{M as N}from"./nf2duydhbwllwb1z.js";import{u as T}from"./m5tfr0dtbetugou5.js";function m(e){return e instanceof HTMLLinkElement&&e.rel==="stylesheet"||e instanceof HTMLStyleElement}function b(e,t){e.head.querySelectorAll("link, style").forEach(o=>{m(o)&&t.head.appendChild(o.cloneNode(!0))});const s=new WeakMap,r=new MutationObserver(o=>{o.forEach(n=>{n.type==="childList"&&(n.addedNodes.forEach(c=>{if(m(c)){const u=t.head.appendChild(c.cloneNode(!0));if(s.set(c,u),c instanceof HTMLStyleElement&&c.dataset.emotion){const{sheet:d}=c,{sheet:l}=u;if(d&&l)for(const E of d.cssRules)l.insertRule(E.cssText)}}}),n.removedNodes.forEach(c=>{const u=s.get(c);u&&t.head.removeChild(u)}))})});return r.observe(e.head,{childList:!0}),()=>{r.disconnect()}}function p(e,t){for(const r of e.attributes)t.setAttribute(r.name,r.value);const s=new MutationObserver(r=>{r.forEach(o=>{if(o.type==="attributes"&&o.attributeName!=null){const n=e.getAttribute(o.attributeName);n==null?t.removeAttribute(o.attributeName):t.setAttribute(o.attributeName,n)}})});return s.observe(e,{attributes:!0}),()=>{s.disconnect()}}const k=e=>{const t=a.useRef(!1);a.useEffect(()=>{t.current||(e(),t.current=!0)},[e])};function q({children:e,target:t="_blank",features:s}){const[r,o]=a.useState(null);return a.useEffect(()=>{const n=window.open("about:blank",t,s);if(!n){x.error("Unable to create child window");return}b(document,n.document),p(document.documentElement,n.document.documentElement),o(n);function c(){n?.close()}return window.addEventListener("unload",c),()=>{window.removeEventListener("unload",c),n.close()}},[]),r&&f.createPortal(i.jsx(h,{win:r,children:e}),r.document.body)}function K({children:e}){const[t,s]=a.useState(null);return k(()=>{let r=!1,o=null;return async function(){const n=await window.documentPictureInPicture?.requestWindow({width:400,height:600});if(n){if(r){n.close();return}o=()=>n.close(),b(document,n.document),p(document.documentElement,n.document.documentElement),s(n)}}(),()=>{r=!0,o?.()}}),t&&f.createPortal(i.jsx(h,{win:t,children:e}),t.document.body)}function H({clientThreadId:e}){const t=C.useStore(),s=w();A({clientThreadId:e}),T({resetThreadAction:()=>t.newThread(!0),clientThreadId:e,focusPromptTextareaAction:()=>s.document.getElementById("prompt-textarea")?.focus()});const r=S();return i.jsxs(i.Fragment,{children:[r?i.jsx(M,{hideThreadHeader:!0,hideSidebar:!0}):i.jsx(N,{clientThreadId:e,hideHeader:!0,hideFooter:!0,renderEmptyState:!1},e),i.jsx(L,{clientThreadId:e})]})}function z({clientThreadId:e}){g(e,{kind:v.PrimaryAssistant});const t=w();return a.useEffect(()=>{const s=()=>{t.document.getElementById("prompt-textarea")?.focus()};return t.addEventListener("focus",s),()=>{t.removeEventListener("focus",s)}},[t]),i.jsx(y,{children:i.jsx(W,{children:i.jsx(P,{clientThreadId:e,children:i.jsx(j,{clientThreadId:e,children:i.jsx(H,{clientThreadId:e})})})})})}export{z as C,K as D,q as a};
//# sourceMappingURL=ib76jmcyfy5ecjui.js.map
