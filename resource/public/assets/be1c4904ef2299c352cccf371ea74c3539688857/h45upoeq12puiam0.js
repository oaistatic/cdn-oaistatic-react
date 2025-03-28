import{j as n,r as l,a9 as D,a7 as C,a5 as P}from"./fs6h2trisr1juto6.js";import{cn as w,co as I,bJ as E,cp as R,cq as O,bK as q,cr as W,cs as G}from"./df9u9imhvwerk6zv.js";import{bH as H,dA as Q,cH as S,P as p,a as f,c as U,by as N,co as B,c6 as J,E as K,F,c0 as X}from"./cyi7nanrg0vdotzd.js";import{S as $}from"./jteom3gltchw516e.js";import{u as V,a as Y,g as Z,b as T}from"./e0sfrrlvs75vveq5.js";function ee(e,t){const s=F.getTurnContentReferences(e,t);return G(s)}function te(e,t){const s=K(e),r=ee(s,t),a=ne(s,t);return W(r.concat(a),"content_url")}function ne(e,t){const s=F.getConversationTurnAtIndex(e,t).messages;return s?X(s.flatMap(r=>r.metadata?.image_results??[])).map(r=>({...r,thumbnail_url:r.thumbnail_url.replace(/^http:\/\//,"https://"),content_url:r.content_url.replace(/^http:\/\//,"https://")})):[]}function de({clientThreadId:e}){const t=w.useCurrentImage();if(!t)return null;const{image:s,source:r,analyticsMetadata:a}=t;if(r==null||e==null||a?.turnIndex==null)return n.jsx(h,{image:s,analyticsMetadata:{}});const u=te(e,a.turnIndex);return n.jsx(h,{image:s,group:u,analyticsMetadata:a,groupSource:r})}function xe(){const e=w.useCurrentImage();if(!e)return null;const{image:t,source:s}=e;if(s==null)return n.jsx(h,{image:t,analyticsMetadata:{}});switch(s){case I.ImagesTab:return n.jsx(se,{image:t});case I.Turn:return n.jsx(re,{image:t})}}function se({image:e}){const{imageResults:t}=V();return n.jsx(h,{image:e,group:t,groupSource:I.ImagesTab,analyticsMetadata:{}})}function re({image:e}){const{imageResults:t}=Y();return n.jsx(h,{image:e,group:t,groupSource:I.Turn,analyticsMetadata:{}})}const L=H.div`grow flex items-start p-8`,oe={enter:e=>({x:e>0?1e3:-1e3,opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:e=>({zIndex:0,x:e<0?1e3:-1e3,opacity:0})},M=1e4,ae=(e,t)=>Math.abs(e)*t;function h({image:e,group:t,groupSource:s,analyticsMetadata:r}){const a=l.useRef(null),u=e.attribution??E(e.url),b=w.useCurrentImage(),c=w.useStore(),j=b?.mountDirection;l.useEffect(()=>{window?.history?.state?.imageModalOpen||window.history.pushState({imageModalOpen:!0},"",window.location.href);const o=()=>{window?.history?.state?.imageModalOpen||c.setCurrentImage(void 0)};return window.addEventListener("popstate",o),()=>window.removeEventListener("popstate",o)},[c]);const _=e.content_url.replace(/^http:\/\//,"https://"),i=t?.findIndex(o=>Q(e,o))??0,m=t?.length??1,g=i!=null&&m>1,v={...S(r),url:e.url,link_type:"text",section:"image",section_location:"response",section_index:(i+1).toString()};l.useEffect(()=>{a.current!==e.url&&(a.current=e.url,p.logEventWithStatsig(f.searchContentReferenceShown,"search_content_reference_shown",{...S(r),type:"full_screen_image",url:e.url,image_url:_}),p.logEventWithStatsig(f.linkAction,"link_action",{...v,action:"show"}))},[_]);const y=()=>{window.history.go(-1),c.setCurrentImage(void 0)},d=l.useCallback(()=>{!g||t==null||c.setCurrentImage({image:t[(i+1)%t.length],source:s,mountDirection:R.FromRight,analyticsMetadata:r})},[g,t,c,i,s,r]);D({queries:(t??[]).map(o=>Z(o.thumbnail_url))});const x=l.useCallback(()=>{!g||t==null||c.setCurrentImage({image:t[(i-1+t.length)%t.length],source:s,mountDirection:R.FromLeft,analyticsMetadata:r})},[g,t,c,i,s,r]);return l.useEffect(()=>U(document,{keydown:o=>{o.key==="ArrowRight"?d():o.key==="ArrowLeft"&&x()}}),[d,x]),n.jsx(C,{children:e&&n.jsx(N.Root,{isOpen:!0,onClose:y,children:n.jsx(N.Overlay,{children:n.jsxs(B,{className:"flex h-full w-full flex-col bg-black/95",children:[n.jsxs("div",{className:"relative flex w-full grow justify-center overflow-hidden",children:[n.jsxs("div",{className:"absolute right-4 top-4 flex items-center sm:right-6 sm:top-6",children:[g&&n.jsxs("div",{className:"shrink-0 px-4 py-2 text-token-text-tertiary",children:[i+1," / ",m]}),n.jsx("button",{onClick:o=>{o.stopPropagation(),y()},className:"flex h-9 w-9 items-center justify-center outline-none hover:opacity-70",children:n.jsx(J,{className:"h-6 w-6 text-gray-400"})})]}),m>1&&n.jsx(L,{className:"cursor-w-resize",onClick:o=>{o.stopPropagation(),x()}}),n.jsx(C,{initial:!1,custom:j,children:n.jsx(P.div,{variants:oe,custom:j??0,className:"absolute bottom-4 top-24",initial:"enter",animate:"center",exit:"exit",transition:{x:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},drag:m>1?"x":!1,dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(o,{offset:z,velocity:A})=>{const k=ae(z.x,A.x);k<-M?d():k>M&&x()},children:n.jsx(ie,{image:e,analyticsMetadata:r})},i)}),m>1&&n.jsx(L,{className:"cursor-e-resize",onClick:o=>{o.stopPropagation(),d()}})]}),n.jsx(O,{onClick:()=>{p.logEventWithStatsig(f.linkAction,"link_action",{...v,action:"click"})},onMouseEnter:()=>{p.logEventWithStatsig(f.linkAction,"link_action",{...v,action:"hover"})},href:e.is_proxied_image?e.content_url:e.url,className:"flex min-h-20 w-full shrink-0 items-center gap-8 px-6 pb-3 pt-8 text-sm hover:opacity-70 sm:px-8 sm:pb-8",children:n.jsxs("div",{className:"flex grow flex-col gap-0.5 overflow-hidden pr-2",children:[n.jsxs("div",{className:"flex items-center gap-2 truncate text-token-text-tertiary",children:[n.jsx(q,{url:e.content_url,className:"rounded",size:16}),u??E(e.url)]}),n.jsx("div",{className:"truncate font-semibold text-white",children:e.title})]})})]})})})})}function ie({image:e}){const t=e.content_url.replace(/^http:\/\//,"https://"),s=e.thumbnail_url.replace(/^http:\/\//,"https://"),r=e.content_size.width/e.content_size.height,{isError:a}=T(t),{isError:u}=T(s),b=e.is_proxied_image?e.url:a?s:t;return!u||!a||e.is_proxied_image?n.jsx(P.img,{src:b,alt:e.title,style:{backgroundImage:s?`url(${s})`:void 0,backgroundSize:"contain",aspectRatio:r,backgroundPosition:"center",backgroundRepeat:"no-repeat"},initial:{opacity:0},animate:{opacity:1},className:"h-full max-w-[100vw] object-contain sm:max-w-[calc(100vw-10rem)]"}):n.jsx("div",{className:"flex h-full grow items-center justify-center",children:n.jsx("div",{className:"flex h-96 w-96 items-center justify-center bg-white/10",children:n.jsx($,{className:"h-12 w-12 text-token-text-tertiary"})})})}export{de as ImageLightbox,xe as ImageLightboxSearchGPT,h as ImageResultModal};
//# sourceMappingURL=h45upoeq12puiam0.js.map
