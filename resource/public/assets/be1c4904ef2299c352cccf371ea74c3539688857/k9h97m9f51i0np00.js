const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/fy08uxo0c7sgy94m.js","assets/cyi7nanrg0vdotzd.js","assets/fs6h2trisr1juto6.js","assets/root-drzjahv8.css","assets/f3zzw463zuggq6da.js","assets/df9u9imhvwerk6zv.js","assets/conversation-small-kx6wglz1.css","assets/kg9pnjn9ianmg7dc.js","assets/exwx6mc6hw49alht.js","assets/069jlavvvdusqrfm.js","assets/m4ktbua61s1ziqoo.js","assets/pcjkp37t4ugnklc3.js","assets/j52f6094ws633vn3.js","assets/b22a1k4ozfgjkxq7.js","assets/juans7zh9ytz81kz.js","assets/e2l59f6c7bsm78ye.js","assets/b7o9536h4wpvjcqi.js","assets/k154o6a9h89usuus.js","assets/nlkl42j3n1q6imdw.js","assets/jo3x2yf4dp19h25k.js","assets/crv164w6r8tn71zi.js","assets/ky5638d0aqy7l511.js","assets/ezuow9crnw1u1146.js","assets/czux62el9j9eyk4d.js","assets/muk733l8kcs92zol.js","assets/dtx9fzvfshnw2efc.js"])))=>i.map(i=>d[i]);
import{d as N,gI as Pe,Z as Ee,D as le,aF as fe,bS as q,S as A,a as b,P,bH as Ne,cL as Se,j as De,M as z,c5 as Te,y as Oe,T as se,bP as Le,bQ as He,I as Fe,gJ as Ze,bw as Be}from"./cyi7nanrg0vdotzd.js";import{j as a,a5 as Y,e as Z,r as i,d as ze,b as Ue}from"./fs6h2trisr1juto6.js";import{e8 as We,gG as Ve,cm as Ke,mb as Xe,et as Ie,gH as pe,gI as he,bE as ge}from"./df9u9imhvwerk6zv.js";import{D as Ye,I as ie,a as xe,u as $e}from"./ezuow9crnw1u1146.js";import{C as Qe}from"./czux62el9j9eyk4d.js";import{a as j,I as U}from"./muk733l8kcs92zol.js";import{A as Je}from"./pcjkp37t4ugnklc3.js";import{E as qe}from"./ky5638d0aqy7l511.js";import{I as et}from"./dtx9fzvfshnw2efc.js";const be=({children:e,isDimensionsUnknown:t})=>a.jsxs(Y.div,{className:N(["relative max-w-[480px] rounded-2xl",t&&"aspect-square overflow-hidden"]),children:[a.jsx("div",{className:"pointer-events-none absolute inset-0 bg-token-main-surface-secondary"}),a.jsx("div",{className:"relative h-full",children:e})]}),tt=({cotMessages:e,visualPercentComplete:t,isInterrupted:n,state:s})=>{const d=Z().formatMessage({id:"imagegen.thinkingHeader.interrupted",defaultMessage:"Stopped creating image"}),o=s===j.Complete||t===1,r=i.useMemo(()=>{if(n)return d;if(!e)return;if(o)return e.complete;if(t){const g=Object.keys(e.generating);for(let u=0;u<g.length;u+=1){const l=parseFloat(g[u]);if(t<l)return e.generating[g[u]]}}else return e.thinking;return e.complete},[e,d,n,o,t]);return r&&a.jsx(Qe,{activeHeadline:r,finishedText:r,isComplete:o||n,isExpandDisabled:!0})};function at({size:e=60,strokeWidth:t=2,arcPercentage:n=.25,ariaMessage:s,children:c}){const d=(e-t)/2,o=2*Math.PI*d,r=o*n,g=`${r} ${o-r}`;return a.jsxs("div",{className:"relative flex items-center justify-center",role:"progressbar","aria-live":"assertive","aria-valuetext":s,children:[a.jsxs(Y.svg,{width:e,height:e,viewBox:`0 0 ${e} ${e}`,animate:{rotate:360},transition:{repeat:1/0,duration:1.2,ease:"linear"},children:[a.jsx("circle",{className:"text-[var(--sidebar-surface-secondary)]",stroke:"currentColor",fill:"transparent",strokeWidth:t,cx:e/2,cy:e/2,r:d}),a.jsx("circle",{className:"text-[var(--main-surface-primary-inverse)]",stroke:"currentColor",fill:"transparent",strokeWidth:t,strokeDasharray:g,strokeDashoffset:"0",strokeLinecap:"butt",cx:e/2,cy:e/2,r:d})]}),c&&a.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:c})]})}function Me({withLottie:e}){const n=Z().formatMessage({id:"imagegen.progressIndicator.ariaLabel",defaultMessage:"Generating image..."});return a.jsx("div",{className:"absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full","aria-label":n,children:a.jsx(at,{size:40,arcPercentage:.2,children:a.jsx(Ye,{animate:e,matchTextColor:!0,className:"h-6 w-6"})})})}async function ve({url:e,fileName:t}){const s=await(await fetch(e)).blob(),c=document.createElement("a");c.href=URL.createObjectURL(s),c.download=t,c.click(),c.remove()}function nt({messageId:e,serverThreadId:t,rating:n,onClose:s}){const c=Z(),d=Object.entries(Pe).map(([r,g])=>({label:c.formatMessage(g),value:r})),o=async r=>{const g=d.map(u=>u.value);try{await Ee.submitMessageFeedback({message_id:e,conversation_id:t,rating:"thumbsDown",text:r.textFeedback??void 0,tags:r.tags,tag_choices:g})}catch(u){le.addError(`Failed to submit ${n} image generation feedback: ${u}`)}s()};return a.jsx("div",{onClick:r=>r.stopPropagation(),children:a.jsx(et,{tagOptions:d,modalOnly:!0,multiple:!0,onSubmit:o})})}const st="ChatGPT Image",it=300,ce=1e3;function oe({rightAlign:e=!1,bottomAlign:t=!1,fullWidth:n=!1,justifyBetween:s=!1,children:c}){return a.jsxs("div",{className:N("absolute z-[2] opacity-0 transition-opacity duration-300 focus-within:opacity-100 group-hover/imagegen-image:opacity-100 group-focus/imagegen-image:opacity-100",e?"right-0":"left-0",t?"bottom-0":"top-0",n&&"w-full"),children:[a.jsx("div",{className:N(t?"bg-gradient-to-b":"bg-gradient-to-t","from-transparent to-black/30","h-20 w-full")}),a.jsx("div",{className:N("absolute inset-0 flex",t?"items-end pb-1 pt-3":"items-start pb-3 pt-1",e?"justify-end pr-1":"justify-start pl-1",s&&"justify-between"),children:c})]})}function X({icon:e,selected:t,onClick:n,ariaLabel:s}){return a.jsx("button",{className:N("z-[11] flex h-10 w-10 items-center justify-center rounded-xl hover:bg-token-icon-surface/10 focus:bg-token-icon-surface/10"),onClick:n,disabled:t,"aria-label":s,children:a.jsx(e,{style:{filter:"drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.20))"},className:N("icon-lg",t?"fill-current text-white":"fill-transparent text-white")})})}function ee(e){return t=>{t.stopPropagation(),e()}}const ot=({image:e,imageUrl:t,onEditorClick:n,isEditorAvailable:s,messageId:c,serverThreadId:d})=>{const{value:o}=fe("706943082"),r=Z(),[g,u]=i.useState(!1),[l,m]=i.useState(null),[I,h]=i.useState(!0),[O,C]=i.useState(!1),_=l===null,x=p=>{_&&(A.logEvent(b.dalleImageRating,p?"like":"dislike",{liked:p?"true":"false",imageUrl:t??"",model:"gpt-4o"}),P.logEvent(b.dalleImageRating,{liked:p,imageUrl:t,model:"gpt-4o"}),A.logEvent("chatgpt_image_rating",p?"like":"dislike",{liked:p?"true":"false",imageUrl:t??"",model:"gpt-4o"}),P.logEvent(b.chatgptImageRating,{liked:p,imageUrl:t,model:"gpt-4o"}),m(p),h(!1),setTimeout(()=>{C(!0)},ce))},S=i.useCallback(()=>{const p=new Date,E=r.formatDate(p,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});return`${st} ${E}.png`},[r]),y=We(),G=Ve(),D=G?.type===Ke.Image&&G.image.asset_pointer===e?.asset_pointer;return a.jsxs(a.Fragment,{children:[y?!D&&a.jsx(oe,{rightAlign:!0,fullWidth:!0,children:a.jsx(X,{icon:qe,ariaLabel:r.formatMessage(F.expand)})}):a.jsxs(a.Fragment,{children:[a.jsx(oe,{rightAlign:!0,fullWidth:!0,children:a.jsxs("div",{className:"flex flex-row",children:[s&&!o&&a.jsx(q,{sideOffset:4,label:r.formatMessage({id:"UH0Ly0",defaultMessage:"Edit image"}),side:"top",children:a.jsx(X,{icon:Xe,ariaLabel:r.formatMessage(F.inpaint),onClick:ee(()=>{n?.(),A.logEvent(b.dalleImageClickInpaint,"click",{imageUrl:t??"",model:"gpt-4o"}),P.logEvent(b.dalleImageClickInpaint,{imageUrl:t,model:"gpt-4o"}),A.logEvent("chatgpt_image_inpaint_click",void 0,{imageUrl:t??"",model:"gpt-4o"}),P.logEvent(b.chatgptImageInpaintClick,{imageUrl:t,model:"gpt-4o"})})})}),t&&a.jsx(q,{sideOffset:4,label:r.formatMessage({id:"0EYire",defaultMessage:"Download"}),side:"top",children:a.jsx(X,{icon:Ie,ariaLabel:r.formatMessage(F.download),onClick:ee(()=>{ve({url:t,fileName:S()}),A.logEvent(b.dalleImageDownload,"click",{imageUrl:t??"",model:"gpt-4o"}),P.logEvent(b.dalleImageDownload,{imageUrl:t,model:"gpt-4o"}),A.logEvent("chatgpt_image_download",void 0,{imageUrl:t,model:"gpt-4o"}),P.logEvent(b.chatgptImageDownload,{imageUrl:t,model:"gpt-4o"})})})}),!1]})}),a.jsx(oe,{bottomAlign:!0,rightAlign:!0,fullWidth:!0,justifyBetween:_,children:a.jsxs("div",{className:N("flex w-full items-center justify-between transition-opacity ease-in-out",I?"opacity-100":"opacity-0"),style:{transitionDuration:`${ce}ms`},children:[a.jsx("div",{className:"flex items-center pl-4 font-semibold text-white",style:{textShadow:"0px 2px 4px rgba(0, 0, 0, 0.20)"},children:r.formatMessage(l===!0?F.feedbackMessage:F.rateThisImage)}),!O&&a.jsxs("div",{className:N("flex flex-row transition-opacity ease-in-out",l===!0?"opacity-0":"opacity-100"),style:{transitionDuration:`${it}ms`},children:[a.jsx(q,{sideOffset:4,label:r.formatMessage({id:"U99PVw",defaultMessage:"Like"}),side:"top",children:a.jsx(X,{icon:pe,onClick:ee(()=>x(!0)),ariaLabel:r.formatMessage(F.thumbsUp)})}),a.jsx(q,{sideOffset:4,label:r.formatMessage({id:"ncGqTt",defaultMessage:"Dislike"}),side:"top",children:a.jsx(X,{icon:he,onClick:ee(()=>{x(!1),u(!0)}),ariaLabel:r.formatMessage(F.thumbsDown)})})]})]})})]}),g&&a.jsx(nt,{messageId:c??"",serverThreadId:d??"",rating:l,onClose:()=>u(!1)})]})},F=ze({rateThisImage:{id:"imageGenActionOverlay.rateThisImage",defaultMessage:"Rate this image"},thumbsUp:{id:"imageGenActionOverlay.thumbsUp",defaultMessage:"Like this image"},thumbsDown:{id:"imageGenActionOverlay.thumbsDown",defaultMessage:"Dislike this image"},inpaint:{id:"imageGenActionOverlay.inpaint",defaultMessage:"Enter inpainting mode"},download:{id:"imageGenActionOverlay.download",defaultMessage:"Download this image"},expand:{id:"imageGenActionOverlay.expand",defaultMessage:"Expand this image"},feedbackMessage:{id:"imageGenActionOverlay.feedbackMessage",defaultMessage:"Thanks for your feedback"}}),rt=({metadata:e,assetPointer:t,messageId:n,serverThreadId:s})=>({conversationId:s,messageId:n,generationId:e?.generation?.gen_id,parentGenerationId:e?.generation?.parent_gen_id,fileId:t&&ge(t)}),de=({liked:e,commonEventMetadata:t})=>{const n=e?"like":"dislike";A.logEvent("chatgpt_imagegen_image_paragen_rating",void 0,{liked:n,hasParent:t.parentGenerationId?"true":"false"}),P.logEvent(b.chatgptImageGenImageParagenRating,{liked:e,...t})},lt=({commonEventMetadata:e})=>{A.logEvent("chatgpt_imagegen_image_paragen_download",void 0,{hasParent:e.parentGenerationId?"true":"false"}),P.logEvent(b.chatgptImageGenImageParagenDownload,{...e})},gt=({commonEventMetadata:e})=>{A.logEvent("chatgpt_imagegen_image_paragen_complete",void 0,{hasParent:e.parentGenerationId?"true":"false"}),P.logEvent(b.chatgptImageGenImageParagenComplete,{...e})},ue=Ne.div`invisible absolute top-3 flex gap-1 group-hover/paragen-image:visible z-[2]
  ${({$rightAlign:e})=>e?"right-3":"left-3"}`,ct=({imageUrl:e,commonEventMetadata:t})=>{const[n,s]=i.useState(void 0),c=Z(),d=i.useCallback(()=>{const o=new Date;return`${c.formatDate(o,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})}.png`},[c]);return a.jsxs("div",{className:"group/paragen-image absolute inset-0 z-[3]",children:[a.jsxs(ue,{children:[n!==!1&&a.jsx(ie,{icon:pe,selected:n===!0,onClick:o=>{o.stopPropagation(),de({liked:!0,commonEventMetadata:t}),s(!0)}}),n!==!0&&a.jsx(ie,{icon:he,selected:n===!1,onClick:o=>{o.stopPropagation(),de({liked:!1,commonEventMetadata:t}),s(!1)}})]}),a.jsx(ue,{$rightAlign:!0,children:a.jsx(ie,{icon:Ie,onClick:o=>{o.stopPropagation(),lt({commonEventMetadata:t}),ve({url:e,fileName:d()})}})})]})},dt="data:image/svg+xml;base64,PHN2ZwogIHdpZHRoPSIzNiIKICBoZWlnaHQ9IjM2IgogIHZpZXdCb3g9IjAgMCAzNiAzNiIKICBmaWxsPSJub25lIgogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKPgogIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80NjY1XzIzMzApIj4KICAgIDxyZWN0IHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0id2hpdGUiIC8+CiAgICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGZpbGw9IiMxRTFFMUUiIC8+CiAgICA8cmVjdCB4PSIxOCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJibGFjayIgLz4KICAgIDxyZWN0IHg9IjE4IiB5PSIxOCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSIjMUUxRTFFIiAvPgogICAgPHJlY3QgeT0iMTgiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgZmlsbD0iYmxhY2siIC8+CiAgPC9nPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwMF80NjY1XzIzMzAiPgogICAgICA8cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+Cjwvc3ZnPgo=",ut="data:image/svg+xml;base64,PHN2ZwogIHdpZHRoPSIzNiIKICBoZWlnaHQ9IjM2IgogIHZpZXdCb3g9IjAgMCAzNiAzNiIKICBmaWxsPSJub25lIgogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKPgogIDxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF80NjY1XzIzMTkpIj4KICAgIDxyZWN0IHdpZHRoPSIzNiIgaGVpZ2h0PSIzNiIgZmlsbD0id2hpdGUiIC8+CiAgICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIGZpbGw9IiNFRkVGRjAiIC8+CiAgICA8cmVjdCB4PSIxOCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIgLz4KICAgIDxyZWN0IHg9IjE4IiB5PSIxOCIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSIjRUZFRkYwIiAvPgogICAgPHJlY3QgeT0iMTgiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgZmlsbD0id2hpdGUiIC8+CiAgPC9nPgogIDxkZWZzPgogICAgPGNsaXBQYXRoIGlkPSJjbGlwMF80NjY1XzIzMTkiPgogICAgICA8cmVjdCB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIGZpbGw9IndoaXRlIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+Cjwvc3ZnPgo=",Ce=300,mt=1.3,ft=.05,It=/blur\(([\d.]+)px\)/,pt={duration:Ce/1e3,ease:"linear"};function re(e,t,n){e.sort((o,r)=>o.lastSrcReceivedTime-r.lastSrcReceivedTime);const s=new Array(e.length).fill(0);for(let o=0;o<=e.length;o+=1){const r=o-1,g=o,u=e[r]?.availablePercentComplete??0,l=e[g]?.availablePercentComplete??1;if(t>=u&&t<=l&&u!==l){const m=(t-u)/(l-u);s[r]=1-m,s[g]=m}}const c=s[s.length-1],d=s[s.length-2];return c===1&&d===0&&(s[s.length-2]=.01),n&&t<=e[0]?.availablePercentComplete&&(s[0]=1),s}const ht=({alt:e,src:t,availablePercentComplete:n,onAnimationUpdate:s,isInterrupted:c,commonEventMetadata:d,onEditorClick:o,isEditorAvailable:r,ignoreFirstChunk:g=!1,isMultiGen:u=!1,messageId:l,serverThreadId:m,isTransparent:I=!1,dimensions:h,onError:O})=>{const C=Se(),_=i.useMemo(()=>`url(${C?dt:ut})`,[C]),[x,S]=i.useState(!1),[y,G]=i.useState(1e3),[D,p]=i.useState(n??0),[E,L]=i.useState(0),M=i.useRef(performance.now()),W=i.useRef(0),te=i.useContext(xe),w=i.useRef([]),[f,k]=i.useState([0]),[H,ae]=i.useState(!1),V=i.useRef(!1),$=i.useRef(null),Q=D===1,T=n===1&&H,B=h?h.width/h.height:1;i.useEffect(()=>{!x&&n&&(S(!0),W.current=performance.now())},[x,n]),i.useEffect(()=>{const v=w.current[w.current.length-1]?.src;if(t&&t!==v){const R=w.current.findIndex(K=>K.availablePercentComplete===n);R!==-1?w.current[R]={src:t,availablePercentComplete:n??0,lastSrcReceivedTime:performance.now()}:w.current.push({src:t,availablePercentComplete:n??0,lastSrcReceivedTime:performance.now()}),k(re(w.current,D,g))}},[t,D,g,n]);const je=i.useCallback(()=>{$.current&&n&&(G(T?Ce:(performance.now()-M.current)*mt),(!g||V.current||n>=ft)&&n!==1&&L(n),V.current=!0,M.current=performance.now())},[n,T,g]),Ge=i.useCallback(v=>{const R=parseFloat(v.height)/100;s?.(R),p(R),k(re(w.current,parseFloat(v.height)/100,g))},[s,g]),we=i.useCallback(v=>{const R=v.filter.toString().match(It)?.[1]??"0",J=(16-parseFloat(R))/16,Ae=1-E,ne=E+Ae*J;s?.(ne),p(ne),k(re(w.current,ne,g))},[g,E,s]);if(!x)return c?null:a.jsx(be,{isDimensionsUnknown:!0,children:a.jsx(Me,{withLottie:!0})});const ye={duration:y/1e3,ease:"linear"},ke=u?"rounded-lg":"rounded-2xl",Re=n!==1||!I;return a.jsxs("div",{tabIndex:0,role:"button",className:N("group/imagegen-image relative z-[0] w-full cursor-pointer overflow-hidden",B<1?"max-w-[400px]":"max-w-[480px]",ke,!Q&&"pointer-events-none",!V.current&&"bg-token-main-surface-secondary"),"aria-label":e,onClick:r?o:void 0,style:{aspectRatio:B},children:[a.jsxs(Y.div,{className:"absolute left-0 right-0 top-0 z-[2] w-full overflow-hidden transition-[mask] ease-linear",initial:T?!1:{height:"0%"},animate:Q?{height:"100%"}:{height:`${E*100}%`},onUpdate:T?void 0:Ge,transition:T?{duration:0,ease:"linear"}:ye,style:Q?void 0:{mask:"linear-gradient(rgb(0,0,0) 0%, rgb(0,0,0) calc(100% - 24px), rgba(0,0,0,0) 100%)"},children:[t&&a.jsx("img",{ref:$,src:t,onLoad:je,onError:O,alt:e,className:"absolute top-0 z-[1] w-full",style:{aspectRatio:B}}),I&&a.jsx("div",{className:"absolute inset-0 z-[0] w-full overflow-hidden opacity-0 transition-opacity duration-300 group-hover/imagegen-image:opacity-100 group-focus/imagegen-image:opacity-100",children:a.jsx("div",{className:"absolute inset-0 bg-repeat",style:{backgroundImage:_,backgroundSize:"auto"}})})]}),a.jsx(Y.div,{className:"relative z-[1] w-full overflow-hidden",initial:{filter:"blur(16px)"},animate:T?{filter:"blur(0px)"}:void 0,transition:T?pt:void 0,onUpdate:T?we:void 0,style:{aspectRatio:B},children:w.current.map((v,R)=>{const K=f[R],J=v.availablePercentComplete===1;return K!==0||J?a.jsx("img",{src:v.src,alt:e,style:{opacity:K,willChange:"opacity",aspectRatio:B},className:"absolute top-0 w-full",onLoad:J?()=>ae(!0):void 0},v.src):null})}),a.jsx(Y.div,{className:"absolute inset-0 z-[0] scale-110 overflow-hidden blur-2xl",style:{aspectRatio:B},children:Re&&w.current.filter((v,R)=>f[R]!==0).map(v=>a.jsx("img",{src:v.src,alt:e,className:"absolute top-0 w-full"},v.src))}),Q&&(te?a.jsx(ct,{commonEventMetadata:d,imageUrl:t??""}):a.jsx(ot,{image:t?{asset_pointer:t,alt:e,fileId:d.fileId}:void 0,imageUrl:t,onEditorClick:o,isEditorAvailable:r,messageId:l,serverThreadId:m}))]})},me=2,xt=({pointer:e,altLabel:t,isInterrupted:n,isEditorAvailable:s,onPercentageRendered:c,messageId:d,serverThreadId:o,isMultiGen:r,onEditorClick:g})=>{const u=Ue(),[l,m]=i.useState(void 0),I=i.useRef(void 0),h=e.metadata?.generation?.gen_id,O=e?.metadata?.generation?.height??void 0,C=e?.height,_=(O??0)/C,x=i.useRef({}),{isUnauthenticated:S}=De(),y=i.useCallback((M=!1)=>{!M&&I.current===e.asset_pointer||(I.current=e.asset_pointer,Je.fetch(u,{asset:e,conversationId:o,force:M,isUnauthenticated:S}).then(W=>{m(W)}).finally(()=>{I.current=void 0}))},[e,u,o,S]);i.useEffect(()=>{const M=e.asset_pointer!==l?.asset_pointer;(!l||M)&&y()},[l,e.asset_pointer,y]);const G=i.useMemo(()=>rt({metadata:e.metadata,assetPointer:e.asset_pointer,messageId:d,serverThreadId:o}),[e.asset_pointer,e.metadata,d,o]),D=i.useRef(_);i.useEffect(()=>{_===1&&D.current<1&&gt({commonEventMetadata:G})},[_,G]);const p=i.useCallback(()=>{l&&g?.({image:l,messageId:d})},[l,d,g]),E=i.useMemo(()=>({width:e.width,height:e.height}),[e]),L=i.useCallback(()=>{const M=(x.current[e.asset_pointer]??0)+1;if(x.current[e.asset_pointer]=M,x.current[e.asset_pointer]>me)return le.addAction("image-gen-asset-error",{name:"retries-exhausted",conversation_id:o,asset_pointer:e.asset_pointer,max_retries:me});le.addAction("image-gen-asset-retry",{name:"retry-attempted",conversation_id:o,asset_pointer:e.asset_pointer,current_retry:M}),x.current[e.asset_pointer]=M,y(!0)},[e.asset_pointer,y,o]);return a.jsx("div",{children:a.jsx(ht,{alt:t,src:l?.url,availablePercentComplete:_,onAnimationUpdate:c,isInterrupted:n,commonEventMetadata:G,onEditorClick:p,isEditorAvailable:s,ignoreFirstChunk:!0,isMultiGen:r,isTransparent:e.metadata?.generation?.transparent_background,messageId:d,serverThreadId:o,dimensions:E,onError:L},h)},h)};function bt(e){const t=e.find(o=>o.author.role==="tool"&&o.author.name===U&&o.content.content_type==="text"),[n,...s]=t?.content.content_type==="text"?t.content.parts:[],c=s.pop(),d=s.length;return n&&c&&s.length>0?{thinking:n,complete:c,generating:s.reduce((o,r,g)=>{const u=(g+1)/d;return o[u.toFixed(2)]=r,o},{})}:void 0}function _e(e){const t=e.filter(s=>s.author.role==="tool"&&s.author.name===U&&s.content.content_type===z.MultimodalText),n=t.flatMap(s=>Te.getImageAssetPointers(s));return{imageGenRenderingMessages:t,imageAssetPointers:n}}const Mt=e=>{const t=e.find(l=>l.author.role===Oe.Tool&&[z.Error,z.SystemError].includes(l.content.content_type)),{imageAssetPointers:n}=_e(e),s=e.some(l=>{const m=l.author.name===U,I=l.content.content_type===z.MultimodalText,h=!!l.metadata?.is_visually_hidden_from_conversation;return m&&I&&h}),c=e.some(l=>{const m=l.author.name===se.IMAGE_GEN_HALLUCINATED||l.author.name===U,I=l.content.content_type===z.Text,h=!!l.metadata?.is_visually_hidden_from_conversation;return m&&I&&h}),o=!e.some(l=>[U,se.IMAGE_GEN_HALLUCINATED].includes(l.author.name??"")&&l.content.content_type===z.MultimodalText)&&e.some(l=>{const m=[U,se.IMAGE_GEN_HALLUCINATED].includes(l.author.name??""),I=l.recipient==="assistant";return m&&I});let r=0;for(const l of n){const m=l.height,I=l.metadata?.generation?.height??void 0;r+=m!==void 0&&I!==void 0?I/m:0}const g=n.length>0?r/n.length:0,u=t!==void 0;if(s||c||o)return j.Empty;if(u)return j.Errored;if(g){if(g<1)return j.Generating;if(g===1)return j.Complete}else return j.Thinking;return j.Unavailable},vt=e=>{const t=Z(),{size:n="image",count:s=1}=e||{};return s>1?{thinking:t.formatMessage({id:"cdnmKo",defaultMessage:"Getting started"}),generating:{"0.33":t.formatMessage({id:"aTbInH",defaultMessage:"Creating images. May take a moment."}),"0.67":t.formatMessage({id:"WRM3Yw",defaultMessage:"Creating images. May take a moment."}),"1.00":t.formatMessage({id:"8ZydRG",defaultMessage:"Creating images. May take a moment."})},complete:t.formatMessage({id:"XQ81dl",defaultMessage:"Images created"})}:n==="xlimage"?{thinking:t.formatMessage({id:"y7op2E",defaultMessage:"Getting started"}),generating:{"0.33":t.formatMessage({id:"cdrDJH",defaultMessage:"Creating image. May take a moment."}),"0.67":t.formatMessage({id:"RP4bRn",defaultMessage:"Adding details"}),"1.00":t.formatMessage({id:"o36MSQ",defaultMessage:"Finishing touches"})},complete:t.formatMessage({id:"QsnnBN",defaultMessage:"Image created"})}:{thinking:t.formatMessage({id:"6c7+kN",defaultMessage:"Getting started"}),generating:{"0.33":t.formatMessage({id:"DP6/8y",defaultMessage:"Creating image"}),"0.67":t.formatMessage({id:"k9y1TT",defaultMessage:"Creating image"}),"1.00":t.formatMessage({id:"GpR7v3",defaultMessage:"Creating image"})},complete:t.formatMessage({id:"l2Izz4",defaultMessage:"Image created"})}},Ct=Le(async()=>He(()=>import("./fy08uxo0c7sgy94m.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25])).then(e=>e.ImageGenNewEditor)),_t=({messages:e,clientThreadId:t,disableClickThru:n=!1})=>{const s=Fe(t),c=Z(),d=c.formatMessage({id:"imagegen.message.altLabel",defaultMessage:"Generated image"}),[o,r]=i.useState(!1),[g,u]=i.useState(null),{imageGenRenderingMessages:l,imageAssetPointers:m}=i.useMemo(()=>_e(e),[e]),I=m?.[0]?.metadata?.generation?.gen_size,h=vt({size:I??"image",count:m?.length??1}),O=i.useMemo(()=>bt(e)??h,[e,h]),C=i.useMemo(()=>Mt(e),[e]),_=e[e.length-1],x=i.useMemo(()=>_&&Ze(_),[_]),{value:S}=fe("3058498100"),y=i.useMemo(()=>S?m:m.slice(0,1),[S,m]),G=y.length>1,D=$e({clientThreadId:t}),[p,E]=i.useState(0),L=i.useRef({}),M=i.useCallback(f=>k=>{L.current[f]=k;const H=Object.keys(L.current).length,ae=Object.values(L.current).reduce((V,$)=>V+$,0);E(ae/H)},[]),[W,te]=i.useState(null),w=i.useCallback(({image:f,messageId:k})=>{u(f),te(k),r(!0),A.logEvent(b.dalleImageViewFull,null,{sourceOperation:f.metadata?.dalle?.edit_op??"none",hasParent:f.metadata?.dalle?.parent_gen_id?"true":"false",model:"gpt-4o"}),P.logEvent(b.dalleImageViewFull,{conversationId:s,messageId:k,generationId:f.metadata?.dalle?.gen_id,parentGenerationId:f.metadata?.dalle?.parent_gen_id,fileId:ge(f.asset_pointer??""),sourceOperation:f.metadata?.dalle?.edit_op,model:"gpt-4o"}),A.logEvent("chatgpt_image_view_full",null,{sourceOperation:f.metadata?.dalle?.edit_op??"none",hasParent:f.metadata?.dalle?.parent_gen_id?"true":"false",model:"gpt-4o"}),P.logEvent(b.chatgptImageViewFull,{conversationId:s,messageId:k,generationId:f.metadata?.dalle?.gen_id,parentGenerationId:f.metadata?.dalle?.parent_gen_id,fileId:ge(f.asset_pointer??""),sourceOperation:f.metadata?.dalle?.edit_op,model:"gpt-4o"})},[s]);return[j.Empty,j.Errored].includes(C)?null:a.jsxs(xe.Provider,{value:n,children:[a.jsxs("div",{className:"flex flex-col",children:[C!==j.Unavailable&&a.jsx("div",{className:"pb-3",children:a.jsx(tt,{cotMessages:O,visualPercentComplete:p,isInterrupted:x,state:C})}),C===j.Thinking&&!x&&a.jsx(be,{isDimensionsUnknown:!0,children:a.jsx(Me,{withLottie:!0})}),(C===j.Generating||C===j.Complete)&&a.jsx("div",{className:N("grid pb-2",{"grid-cols-2 gap-2":G,"grid-cols-1":!G}),children:y.map((f,k)=>{const H=f.metadata?.generation?.gen_id;return a.jsx(xt,{pointer:f,altLabel:d,isInterrupted:x,isEditorAvailable:D,onPercentageRendered:H?M(H):void 0,messageId:l[k]?.id,serverThreadId:s,isMultiGen:G,onEditorClick:w},H)})})]}),a.jsx(Be,{type:"success",size:"fullscreen",isOpen:o,onClose:()=>r(!1),title:c.formatMessage({id:"imagegen.message.contentModalTitle",defaultMessage:"Edit image"}),visuallyHiddenHeader:!0,className:"dark:bg-[--gray-800]",children:g&&a.jsx(Ct,{image:g,isLoadingNewImage:!1,clientThreadId:t,onClose:()=>r(!1),messageId:W??""})})]})},St=Object.freeze(Object.defineProperty({__proto__:null,ImageGenMessage:_t},Symbol.toStringTag,{value:"Module"}));export{nt as I,ve as d,St as i};
//# sourceMappingURL=k9h97m9f51i0np00.js.map
