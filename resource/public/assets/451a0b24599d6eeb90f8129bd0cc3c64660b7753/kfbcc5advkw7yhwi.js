import{r as L,c as v,j as m}from"./cg166fqqcxkeiosv.js";import{d as p,df as y,g4 as A,h as R}from"./mwlpozqwnbys03vp.js";import{dw as b,dx as N,dy as S}from"./d5k5wa3zyqlgc9bk.js";import{a as E,I as T}from"./mxrazhsns80qum0b.js";import"./fhbt0hb4dr6nwu5g.js";function z({asset:s,contextConnectorSourceUrl:f,isSingle:n,className:d}){const[g,o]=L.useState(!1),{gizmoEditorData:a}=b(),u=N(),r=v(),{data:e,isLoading:c,error:w}=E(s,a?.id),{url:x,width:i,height:l}=e??{},I=c||!g,h=i&&l?{Landscape:i>l,Portrait:i<l,Square:i===l}:void 0,t=["overflow-hidden rounded-lg"];n&&(t.push("w-full h-full"),h?.Landscape?t.push("max-w-96 max-h-64"):h?.Portrait?t.push("max-h-96 max-w-64"):t.push("max-w-64 max-h-64")),d&&t.unshift(d);let M;return x!=null&&(M=m.jsx(T,{alt:r.formatMessage(j.imageAltText),className:p("max-w-full",!n&&"aspect-square","object-cover object-center",t),src:x,width:i,height:l,onLoad:()=>o(!0)}),u||(M=m.jsx(S,{src:x,alt:r.formatMessage(j.imageAltText),contextConnectorSourceUrl:f,className:p(t),children:M}))),m.jsx("div",{className:p(t),children:m.jsx("div",{className:p("relative flex h-auto w-full max-w-lg items-center justify-center overflow-hidden bg-token-main-surface-secondary text-token-text-tertiary",!n&&"aspect-square"),children:x!=null?M:m.jsx("div",{className:"flex items-center justify-center",style:{aspectRatio:`${i} / ${l}`,width:i},title:I?r.formatMessage(j.loadingImage):r.formatMessage(j.errorLoadingImage),children:I?m.jsx(y,{}):w?m.jsx(A,{className:"icon-sm"}):null})})})}const j=R({loadingImage:{id:"textMessage.loadingImage",defaultMessage:"Loading..."},errorLoadingImage:{id:"textMessage.errorLoadingImage",defaultMessage:"Could not load image"},imageAltText:{id:"textMessage.imageAltText",defaultMessage:"Uploaded image"},targetedReply:{id:"textMessage.targetedReply",defaultMessage:"Replying to:"}});function C({assets:s,attachments:f}){const n=s.length===1,{containerClassname:d,imageClassnames:g}=C.computeClassnames(s.length);return m.jsx("div",{className:p("flex w-[var(--user-chat-width,70%)] flex-row items-center justify-end gap-1",d),children:s.map((o,a)=>{const u=f?.find(r=>r.id&&o.asset_pointer.includes(r.id));return m.jsx(z,{asset:o,isSingle:n,contextConnectorSourceUrl:u?.context_connector_info?.source_url,className:g[a]},a)})})}C.computeClassnames=s=>{if(s<2)return{containerClassname:null,imageClassnames:[]};let f=s>=4?"flex-wrap":"";const n=Array(s),d=e=>{n.fill(e)},g=e=>{f+=` ${e}`},o=(e,c)=>{n[e]=p(n[e],c)},a=s<=4&&s%2===0?2:3,u=Math.ceil(s/a),r=s%a!==0;a===2?(d("h-32 w-32"),g("max-w-72")):u<=2?(d("h-24 w-24 sm:h-32 sm:w-32"),g("max-w-80 sm:max-w-100")):(d("h-16 w-16"),g("max-w-52"));for(let e=0;e<s;e++){const c=Math.floor(e/a),w=e%a,x=Math.min(s-c*a,a),i=c===0,l=c===u-1,I=c===u-2,h=w===0,t=w===x-1;i&&h&&o(e,"rounded-tl-2xl"),i&&t&&o(e,"rounded-tr-2xl"),l&&h&&o(e,"rounded-bl-2xl"),l&&t&&o(e,"rounded-br-sm"),r&&h&&I&&o(e,"rounded-bl-2xl")}return{containerClassname:f,imageClassnames:n}};export{C as TextMessageImageGroup};
//# sourceMappingURL=kfbcc5advkw7yhwi.js.map
