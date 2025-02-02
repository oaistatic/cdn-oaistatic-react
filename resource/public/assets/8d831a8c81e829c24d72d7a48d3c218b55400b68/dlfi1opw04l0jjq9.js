import{r as o,c as b,j as e,M as d}from"./n1tvutderx19k1zs.js";import{g5 as D,g6 as L,B as A,f6 as j,bY as I,cn as N,dz as T,av as F,aE as k,c5 as R,co as y,cp as p,j as U,au as w}from"./efuue3ezs0mj4ucx.js";import{S as Y}from"./h1cvdr02rrgnl0ia.js";import{fT as Z,fU as V,fV as _,fW as x,fX as z,fY as B,fZ as G,f3 as a,f_ as W,bL as H}from"./c87uv1mutc86tiqk.js";import{S as J}from"./gohrg29ji6orhvga.js";const O=s=>o.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z",fill:"currentcolor"}),o.createElement("path",{d:"M9.5 14.6683V9.33167C9.5 8.5405 10.3752 8.06266 11.0408 8.49049L15.1915 11.1588C15.8038 11.5525 15.8038 12.4475 15.1915 12.8412L11.0408 15.5095C10.3752 15.9373 9.5 15.4595 9.5 14.6683Z",fill:"currentcolor"}));function X({voice:s}){const[l,r]=o.useState(!1),n=b(),t=D(),g=s.voice,u=s.preview_url,i=o.useRef({playPromise:null}).current,c=L(f=>f.isPlaying&&f.sourceUrl===u),S=A(),m=o.useCallback(async()=>{if(!t)return;const f={voice:g,source:u};j.previews.click(f);try{r(!0),t.changeSource(u),i.playPromise=t.play(),r(!1)}catch(E){j.previews.error(E,f),S.danger(n.formatMessage({id:"DeIYxH",defaultMessage:"Something went wrong playing preview"}))}},[n,t,u,g,i,S]),h=o.useCallback(()=>{t&&(i.playPromise?i.playPromise.then(()=>{t.stop(),i.playPromise=null}):t.stop())},[t,i]),P=o.useCallback(()=>{c?h():l||m()},[h,m,l,c]);return o.useEffect(()=>()=>{c&&h()},[s,c,h]),e.jsx(I,{onClick:P,color:"secondary",className:"flex flex-row flex-nowrap items-center gap-1 border-none font-normal",loading:l,icon:c?J:O,children:c?e.jsx(d,{id:"yGpEMJ",defaultMessage:"Stop"}):e.jsx(d,{id:"JwYDVp",defaultMessage:"Play"})})}const le={Trigger:q,Content:K};function M(){return w("174366048")?.value}function q(){return M()?e.jsx(Z,{value:V.Speech,icon:e.jsx(Y,{className:"icon-sm"}),label:e.jsx(d,{id:"speechSettings.trigger",defaultMessage:"Speech"})}):null}function K(){const s=M(),l=w("1426009137")?.value,r=F("3940529303").value,n=k();if(!s)return null;const t=r&&n?.length&&!n?.includes(R.VideoScreenSharing);return e.jsxs(_,{value:V.Speech,children:[e.jsx(x,{children:e.jsx(Q,{})}),l?e.jsx(x,{children:e.jsx($,{})}):null,t?e.jsx(x,{children:e.jsx(ee,{})}):null]})}function C(s){const{data:l,isLoading:r}=N(s)||{},n=T();return{isLoading:r,value:l,setValue:t=>{n.mutate({setting:s,value:t})}}}function Q(){const{isLoading:s,value:l,setValue:r}=C(y.VoiceName),n=z(),t=B(),g=s?"":G(l,t),u=n.find(({voice:i})=>i===g);return e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col flex-nowrap gap-2",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(d,{id:"speechSettings.content.voice",defaultMessage:"Voice"})}),e.jsxs("div",{className:"flex flex-row flex-nowrap items-center gap-1",children:[u?e.jsxs(e.Fragment,{children:[e.jsx(X,{voice:u}),e.jsx("div",{className:"h-4 border-l"})]}):null,e.jsxs(a.Root,{value:g,onValueChange:i=>r(i),disabled:s,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsx(a.Content,{children:n.map(({voice:i,name:c})=>e.jsx(a.Item,{value:i,children:c},i))})})]})]})]})})})}function $(){const{isLoading:s,value:l,setValue:r}=C(y.VoiceMainLanguage);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("div",{children:e.jsx(d,{id:"speechSettings.content.language",defaultMessage:"Main Language"})}),e.jsxs(a.Root,{value:s?"":l??p.Auto,onValueChange:n=>r(n),disabled:s,children:[e.jsxs(a.Trigger,{children:[e.jsx(a.Value,{}),e.jsx(a.Icon,{})]}),e.jsx(a.Portal,{children:e.jsxs(a.Content,{position:"popper",style:{maxHeight:"calc(var(--radix-select-content-available-height) - 5rem)"},children:[e.jsx(a.Item,{value:p.Auto,children:e.jsx(d,{id:"speechSettings.content.autoDetect",defaultMessage:"Auto-Detect"})}),Object.entries(p).filter(([n,t])=>t!==p.Auto).map(([n,t])=>e.jsx(a.Item,{value:t,className:"capitalize",children:n},t))]})})]})]}),e.jsx(W,{children:e.jsx(d,{id:"speechSettings.content.autoDetectDescription",defaultMessage:"For best results, select the language you mainly speak. If it's not listed, it may still be supported via auto-detection."})})]})}function ee(){const s=b();return e.jsx(H,{label:s.formatMessage(v.voiceAndScreenSharing),enabled:!1,onChange:()=>{},disabled:!0,description:s.formatMessage(v.voiceAndScreenSharingDescription)})}const v=U({voiceAndScreenSharing:{id:"9dnywk",defaultMessage:"Voice and screen sharing"},voiceAndScreenSharingDescription:{id:"wjwSas",defaultMessage:"Sharing your screen and video while in voice mode has been disabled by your workspace administrator."}});export{le as S,C as u};
//# sourceMappingURL=dlfi1opw04l0jjq9.js.map
