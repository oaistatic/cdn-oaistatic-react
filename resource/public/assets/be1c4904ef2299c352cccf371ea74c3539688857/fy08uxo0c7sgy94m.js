const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/kwu397wq6xu9rzc1.js","assets/fs6h2trisr1juto6.js","assets/cyi7nanrg0vdotzd.js","assets/root-drzjahv8.css","assets/df9u9imhvwerk6zv.js","assets/conversation-small-kx6wglz1.css","assets/mnb7n0c0i2cau69f.js","assets/joa8jajuiu4xqpzn.js"])))=>i.map(i=>d[i]);
import{S as y,a as v,P as R,bH as W,aF as G,c6 as B,d as T,bS as V,V as q,bP as U,bQ as X,I as z,a3 as K,W as Y}from"./cyi7nanrg0vdotzd.js";import{r,e as O,j as t,a5 as L,M as P,n as $}from"./fs6h2trisr1juto6.js";import{u as J}from"./f3zzw463zuggq6da.js";import{g as Q,h as Z,i as ee}from"./exwx6mc6hw49alht.js";import{iK as H,h5 as te,gH as ne,h6 as ae,gI as se,et as oe,jb as ie,jC as re,jD as le,jT as ce,bE as de,gF as ue,jU as me,eJ as ge}from"./df9u9imhvwerk6zv.js";import{I as fe}from"./m4ktbua61s1ziqoo.js";import{P as he}from"./j52f6094ws633vn3.js";import{S as pe}from"./crv164w6r8tn71zi.js";import{U as xe,R as Ie}from"./ky5638d0aqy7l511.js";import{d as Ce,I as we}from"./k9h97m9f51i0np00.js";import"./kg9pnjn9ianmg7dc.js";import"./069jlavvvdusqrfm.js";import"./pcjkp37t4ugnklc3.js";import"./b22a1k4ozfgjkxq7.js";import"./juans7zh9ytz81kz.js";import"./e2l59f6c7bsm78ye.js";import"./b7o9536h4wpvjcqi.js";import"./k154o6a9h89usuus.js";import"./nlkl42j3n1q6imdw.js";import"./jo3x2yf4dp19h25k.js";import"./ezuow9crnw1u1146.js";import"./czux62el9j9eyk4d.js";import"./muk733l8kcs92zol.js";import"./dtx9fzvfshnw2efc.js";function je(){const[e,a]=r.useState({undoStack:[],currentIndex:-1});function s(n){a(i=>({undoStack:[...i.undoStack.slice(0,i.currentIndex+1),n],currentIndex:i.currentIndex+1}))}function o(){a(n=>({undoStack:n.undoStack,currentIndex:Math.max(n.currentIndex-1,-1)}))}function l(){a(n=>({undoStack:n.undoStack,currentIndex:Math.min(n.currentIndex+1,n.undoStack.length-1)}))}function d(){a({undoStack:[],currentIndex:-1})}return{currentDrawnShape:e.undoStack.length>0?e.undoStack[e.currentIndex]:null,onNewDrawnShape:s,canUndoDrawing:e.currentIndex>=0,undoDrawing:o,canRedoDrawing:e.currentIndex<e.undoStack.length-1,redoDrawing:l,clearAllDrawings:d}}var c=(e=>(e[e.Default=0]="Default",e[e.Selecting=1]="Selecting",e))(c||{});const ve=e=>{const[a,s]=r.useState(null),o=r.useCallback(n=>{a==null&&(s(n),y.logEvent(v.dalleImageRating,n?"like":"dislike",{liked:n?"true":"false",imageUrl:e??"",model:"gpt-4o"}),R.logEvent(v.dalleImageRating,{liked:n,imageUrl:e,model:"gpt-4o"}),y.logEvent("chatgpt_image_rating",n?"like":"dislike",{liked:n?"true":"false",imageUrl:e,model:"gpt-4o"}),R.logEvent(v.chatgptImageRating,{liked:n,imageUrl:e,model:"gpt-4o"}))},[e,a]),l=r.useCallback(()=>o(!0),[o]),d=r.useCallback(()=>o(!1),[o]);return{rating:a,onLike:l,onDislike:d}},ke="ChatGPT Image";function De({imageAsset:e,mode:a,setMode:s,inpaintingDrawingState:o,isLoadingNewImage:l,onClose:d,onInpaintClick:n,messageId:i,serverThreadId:u}){const{value:x}=G("706943082"),{canUndoDrawing:I,undoDrawing:C,canRedoDrawing:p,redoDrawing:k}=o,f=O(),{rating:g,onLike:D,onDislike:b}=ve(e.url),[w,j]=r.useState(!1),S=r.useCallback(()=>{const M=new Date,m=f.formatDate(M,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});return`${ke} ${m}.png`},[f]),E=()=>{b(),j(!0)};return t.jsxs(t.Fragment,{children:[t.jsxs(L.div,{className:"grid h-16 w-full grid-cols-3 px-4",...H,children:[t.jsx("div",{className:"flex items-center justify-self-start text-left",children:t.jsx(h,{tooltip:f.formatMessage({id:"imageEditorControls.closeButtonTooltip",defaultMessage:"Close"}),onClick:d,children:t.jsx(B,{className:"icon-lg"})})}),t.jsx("div",{className:"flex flex-col items-center justify-center justify-self-center p-2",children:(!x||a===c.Selecting)&&t.jsx(t.Fragment,{children:t.jsx("div",{className:"font-semibold text-token-text-primary",children:t.jsx(P,{id:"imageEditorControls.imageName",defaultMessage:"Edit Selection"})})})}),t.jsx("div",{className:"flex items-center justify-self-end text-right",children:a===c.Selecting?t.jsxs(t.Fragment,{children:[t.jsx(h,{disabled:!I||l,onClick:C,children:t.jsx(xe,{})}),t.jsx(h,{disabled:!p||l,onClick:k,children:t.jsx(Ie,{})}),t.jsx(be,{}),t.jsx(h,{onClick:()=>s(c.Default),disabled:l,children:t.jsx(P,{id:"imageEditorControls.cancelButtonLabel",defaultMessage:"Cancel"})})]}):t.jsxs(t.Fragment,{children:[g!==!1&&t.jsx(h,{tooltip:f.formatMessage({id:"imageEditorControls.likeButtonTooltip",defaultMessage:"Like"}),onClick:D,children:g===!0?t.jsx(te,{}):t.jsx(ne,{})}),g!==!0&&t.jsx(h,{tooltip:f.formatMessage({id:"imageEditorControls.dislikeButtonTooltip",defaultMessage:"Dislike"}),onClick:E,children:g===!1?t.jsx(ae,{}):t.jsx(se,{})}),x&&t.jsx(h,{tooltip:f.formatMessage({id:"imageEditorControls.inpaintButtonTooltip",defaultMessage:"Select"}),onClick:n,children:t.jsx(pe,{className:"h-7 w-7 pr-1",fill:"black"})}),t.jsx(h,{tooltip:f.formatMessage({id:"imageEditorControls.downloadButtonTooltip",defaultMessage:"Save"}),onClick:()=>{Ce({url:e.url,fileName:S()})},children:t.jsx(oe,{})})]})})]}),w&&t.jsx(we,{messageId:i??"",serverThreadId:u??"",rating:g,onClose:()=>j(!1)})]})}function h({children:e,tooltip:a,disabled:s,onClick:o}){const l=t.jsx("button",{className:T("rounded p-2 font-semibold hover:bg-token-main-surface-tertiary group-radix-state-open:bg-token-main-surface-tertiary",s?"text-token-text-quaternary":"text-token-text-secondary"),disabled:s,onClick:o,children:e});return a!=null?t.jsx(V,{label:a,sideOffset:4,children:l}):l}const be=W.div`mx-3 w-[1px] h-6 bg-token-border-light`,Se=0,Ee=48;function Me({imageAsset:e,children:a,containerDimensions:s,isLoadingNewImage:o}){return t.jsxs(L.div,{className:"absolute",style:Ne(e,s),...H,children:[a,t.jsx("div",{className:T("absolute inset-0 flex items-center justify-center bg-token-main-surface-primary transition-opacity duration-1000",o?"pointer-events-auto opacity-60":"pointer-events-none opacity-0")})]})}function Ne(e,a){const{width:s,height:o}=e,{width:l,height:d}=a,n=l-2*Se,i=d-2*Ee,u=s/o,x=n/i,I=u>x,C=I?n:i*u,p=I?n/u:i;return{top:"50%",left:"50%",width:C,height:p,transform:"translate(-50%, -50%)"}}const A=$({id:"imageGenEditor.transformationTextareaPlaceholder",defaultMessage:"Describe what you want to add, remove or replace…"}),_e=({image:e,currentDrawnShape:a,onCleared:s,getImageData:o})=>{const l=O(),{setTargetedContent:d}=ie(),n=q();r.useEffect(()=>(a==null?d({type:"object",placeholderTextOverride:A,shouldPersistAcrossMessages:!0,isFocusedViewContent:!1,createNewCompletionParams:i=>re(i,e)}):d({type:"object",placeholderTextOverride:A,isFocusedViewContent:!1,createNewCompletionParams:async i=>await le(i,e,o(),l,n),onCleared:s}),()=>{d(void 0)}),[a,o,e,l,s,d,n])},ye=({onEscape:e})=>{r.useEffect(()=>{function a(s){s.key==="Escape"&&e()}return document.addEventListener("keydown",a),()=>{document.removeEventListener("keydown",a)}},[e])},Re=U(()=>X(()=>import("./kwu397wq6xu9rzc1.js"),__vite__mapDeps([0,1,2,3,4,5,6,7])).then(e=>e.DynamicDrawingCanvas)),F=126,Te=136;function st({image:e,isLoadingNewImage:a,clientThreadId:s,onClose:o,messageId:l}){const{value:d}=G("706943082"),n=z(s),[i,u]=r.useState(c.Default),[x,I]=r.useState({width:window.innerWidth,height:window.innerHeight-F}),C=je(),{currentDrawnShape:p,onNewDrawnShape:k,clearAllDrawings:f}=C,g=r.useRef(null),D=r.useMemo(()=>new Q(Z()),[]),b=ce(m=>{const{width:N,height:_}=m.contentRect;I({width:N,height:_-F})});ye(r.useMemo(()=>({onEscape:()=>{i===c.Selecting?u(c.Default):o()}}),[i,o])),_e(r.useMemo(()=>({image:e,currentDrawnShape:p,onCleared:()=>u(c.Default),getImageData:()=>g.current?.getImageData()}),[e,p])),r.useEffect(()=>{i!==c.Selecting&&f()},[i]),r.useEffect(()=>{u(c.Default)},[e]);const w=J(s),j=r.useCallback(m=>{u(c.Default),w(m),o()},[w,o]),[S]=K(s,m=>[m?.modelId]),E=r.useCallback(m=>{const N=m.button===0;!d&&N&&i===c.Default&&(u(c.Selecting),requestAnimationFrame(()=>{if(g.current){const _=new MouseEvent(m.type,{bubbles:!0,cancelable:!0,clientX:m.clientX,clientY:m.clientY});g.current.sendEventToCanvas(_)}}))},[i,d]),M=r.useCallback(()=>{u(c.Selecting),y.logEvent("chatgpt_imagegen_inpaint_click",null,{hasParent:e.metadata?.generation?.parent_gen_id!=null?"true":"false"}),R.logEvent(v.chatgptImageGenInpaintClick,{conversationId:n,generationId:e.metadata?.generation?.gen_id,fileId:de(e.asset_pointer),parentGenerationId:e.metadata?.generation?.parent_gen_id})},[e.asset_pointer,e.metadata?.generation?.gen_id,e.metadata?.generation?.parent_gen_id,n]);return t.jsxs("div",{ref:b,className:"flex h-full w-full flex-col items-center justify-between",children:[t.jsx(De,{imageAsset:e,mode:i,setMode:u,inpaintingDrawingState:C,isLoadingNewImage:a,onClose:o,onInpaintClick:M,messageId:l,serverThreadId:n}),t.jsx("div",{className:"relative flex w-full flex-grow items-center justify-center",children:t.jsxs(Me,{imageAsset:e,containerDimensions:x,isLoadingNewImage:a,children:[t.jsx(fe,{className:"h-full w-full",alt:ue(e),src:e.url,width:e.width,height:e.height,fadeIn:!1,onMouseDown:E}),t.jsx("div",{className:T("absolute inset-0",i===c.Selecting?"":"hidden"),children:t.jsx(Re,{drawingCanvasRef:g,color:"rgba(0, 122, 255, 0.5)",dashedOutlineColor:"rgba(255, 255, 255, 0.65)",cursorWidth:Te,canvasWidth:e.width,canvasHeight:e.height,currentDrawnShape:p,onNewDrawnShape:k})})]})}),t.jsx("div",{className:"flex min-h-[132px] w-full flex-col items-center justify-end",children:t.jsx("div",{className:"mb-6 w-[90%] lg:w-[53%]",children:t.jsx(me,{value:{isImageGenEditor:!0,isInpainting:i===c.Selecting,onCancelInpaint:()=>u(c.Default)},children:t.jsx(ee.Provider,{value:D,children:t.jsx(he,{clientThreadId:s,isNewThread:Y(s),currentModelId:S??ge(void 0).id,onRequestCompletion:j,hideHeader:!0})})})})})]})}export{st as ImageGenNewEditor};
//# sourceMappingURL=fy08uxo0c7sgy94m.js.map
