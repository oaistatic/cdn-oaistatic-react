import{r,l as j}from"./cg166fqqcxkeiosv.js";import{s as q,i as D,a as B,b as L,T as $,C as z,m as J}from"./mv58b0a4k5cffpgy.js";import"./dze2l9y9kn6nwat0.js";import"./j4xe1fdohr6xk09p.js";import"./o7y8vv0pyx5ynse6.js";import"./mvt4km0zlpksanl9.js";import"./nm04jgpfyxi6pn12.js";const Q=()=>t=>t.targetY,U=()=>t=>t.targetX-1,Z=()=>t=>t.targetY-1,ee=()=>t=>t.targetWidth+2,te=()=>t=>t.targetHeight+2,re=()=>t=>t.targetY+10,ie=()=>t=>Math.max(0,(t.targetHeight-28)/2),ne=q("div")({name:"DataGridOverlayEditorStyle",class:"gdg-d19meir1",propsAsIs:!1,vars:{"d19meir1-0":[Q(),"px"],"d19meir1-1":[U(),"px"],"d19meir1-2":[Z(),"px"],"d19meir1-3":[ee(),"px"],"d19meir1-4":[te(),"px"],"d19meir1-5":[re(),"px"],"d19meir1-6":[ie(),"px"]}});function se(){const[t,s]=r.useState();return[t??void 0,s]}function ae(){const[t,s]=se(),[i,p]=r.useState(0),[f,C]=r.useState(!0);r.useLayoutEffect(()=>{if(t===void 0||!("IntersectionObserver"in window))return;const a=new IntersectionObserver(o=>{o.length!==0&&C(o[0].isIntersecting)},{threshold:1});return a.observe(t),()=>a.disconnect()},[t]),r.useEffect(()=>{if(f||t===void 0)return;let a;const o=()=>{const{right:b}=t.getBoundingClientRect();p(g=>Math.min(g+window.innerWidth-b-10,0)),a=requestAnimationFrame(o)};return a=requestAnimationFrame(o),()=>{a!==void 0&&cancelAnimationFrame(a)}},[t,f]);const x=r.useMemo(()=>({transform:`translateX(${i}px)`}),[i]);return{ref:s,style:x}}const me=t=>{const{target:s,content:i,onFinishEditing:p,forceEditMode:f,initialValue:C,imageEditorOverride:x,markdownDivCreateNode:a,highlight:o,className:b,theme:g,id:N,cell:v,validateCell:m,getCellRenderer:I,provideEditor:w,isOutsideClick:T}=t,[d,V]=r.useState(f?i:void 0),O=r.useRef(d??i);O.current=d??i;const[y,S]=r.useState(()=>m===void 0?!0:!(D(i)&&m?.(v,i,O.current)===!1)),u=r.useCallback((e,n)=>{p(y?e:void 0,n)},[y,p]),G=r.useCallback(e=>{if(m!==void 0&&e!==void 0&&D(e)){const n=m(v,e,O.current);n===!1?S(!1):(typeof n=="object"&&(e=n),S(!0))}V(e)},[v,m]),h=r.useRef(!1),c=r.useRef(void 0),H=r.useCallback(()=>{u(d,[0,0]),h.current=!0},[d,u]),A=r.useCallback((e,n)=>{u(e,n??c.current??[0,0]),h.current=!0},[u]),K=r.useCallback(async e=>{let n=!1;e.key==="Escape"?(e.stopPropagation(),e.preventDefault(),c.current=[0,0]):e.key==="Enter"&&!e.shiftKey?(e.stopPropagation(),e.preventDefault(),c.current=[0,1],n=!0):e.key==="Tab"&&(e.stopPropagation(),e.preventDefault(),c.current=[e.shiftKey?-1:1,0],n=!0),window.setTimeout(()=>{!h.current&&c.current!==void 0&&(u(n?d:void 0,c.current),h.current=!0)},0)},[u,d]),k=d??i,[l,W]=r.useMemo(()=>{if(B(i))return[];const e=w?.(i);return e!==void 0?[e,!1]:[I(i)?.provideEditor?.(i),!1]},[i,I,w]),{ref:X,style:Y}=ae();let F=!0,P,_=!0,E;if(l!==void 0){F=l.disablePadding!==!0,_=l.disableStyling!==!0;const e=L(l);e&&(E=l.styleOverride);const n=e?l.editor:l;P=r.createElement(n,{isHighlighted:o,onChange:G,value:k,initialValue:C,onFinishedEditing:A,validatedSelection:D(k)?k.selectionRange:void 0,forceEditMode:f,target:s,imageEditorOverride:x,markdownDivCreateNode:a,isValid:y,theme:g})}E={...E,...Y};const M=document.getElementById("portal");if(M===null)return console.error('Cannot open Data Grid overlay editor, because portal not found.  Please add `<div id="portal" />` as the last child of your `<body>`.'),null;let R=_?"gdg-style":"gdg-unstyle";return y||(R+=" gdg-invalid"),F&&(R+=" gdg-pad"),j.createPortal(r.createElement($.Provider,{value:g},r.createElement(z,{style:J(g),className:b,onClickOutside:H,isOutsideClick:T},r.createElement(ne,{ref:X,id:N,className:R,style:E,as:W===!0?"label":void 0,targetX:s.x,targetY:s.y,targetWidth:s.width,targetHeight:s.height},r.createElement("div",{className:"gdg-clip-region",onKeyDown:K},P)))),M)};export{me as default};
//# sourceMappingURL=nvghqjniqcr3e3h3.js.map
