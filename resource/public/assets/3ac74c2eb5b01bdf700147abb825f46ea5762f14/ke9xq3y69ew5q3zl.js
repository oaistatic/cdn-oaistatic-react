import{b3 as U,d as B,c1 as V,P as N,a as b,bT as I,bj as v,h as P,R as k,b7 as G,f2 as Y}from"./dze2l9y9kn6nwat0.js";import{c as L,j as e,r as c,b as F,A as W}from"./cg166fqqcxkeiosv.js";import{i as D,e as X,T as q,C as K,f as $}from"./ezm91fvy6t8yntsc.js";import{C as z}from"./e1nsgaxosmw1pnte.js";import{P as Z}from"./kk35dslb26knm0wf.js";import{g as Q,a as J}from"./g6yzyuzg2o1kdt74.js";import{i as ee,dz as R,dA as y,iz as te,iA as se,d3 as j,iB as oe,d4 as ie}from"./j4xe1fdohr6xk09p.js";import{L as le}from"./nmptz6kply9diefi.js";import{c as w}from"./nq2b8stb8xnboof9.js";import"./gy64pge8qevmvg7e.js";import"./bsl07ehiis3tpn40.js";import"./e1a7vwuqoah2oayi.js";import"./eunaift7csjngssc.js";import"./fzrn137102spawew.js";import"./b6ddr1xo1x0u3g1f.js";import"./g9q8qzopl6tslq0e.js";import"./dwbmbwvdewldvcp1.js";import"./jky4nhpbj4n3xuh7.js";import"./h83rc28v2vsm5nda.js";import"./gzm2pyuieq14d2cd.js";import"./hdilgwj6ud6odlt8.js";import"./dxwj7d3qxjns67z0.js";import"./l1c6eu3d34hr9ksj.js";import"./i7nvm66tepgqj19n.js";import"./3qaegw5tahuvxmqt.js";const ae="webp",ne=1200,re=675,ce="srgb",de=3,ue="uchar",me=!1,pe=!0,fe=!1,Ee="{{.assetPrefix}}/assets/made-with-chatgpt-og-g73iyayd.webp",T={format:ae,width:ne,height:re,space:ce,channels:de,depth:ue,isProgressive:me,hasProfile:pe,hasAlpha:fe,src:Ee},he="https://openai.com/form/report-content/";function ge(t){return`/?model=gpt-4o&sharedCanvas=${t.sharedTextdocId}`}const S=({areButtonsFullWidth:t,sharedTextdoc:s,onClickCodePreview:d,isCodeRunning:a,showRunCodeButton:g,setIsReportModalOpen:x})=>{const{isUnauthenticated:u}=U(),f=ee(),n=D(s.type,s.content),m=g&&(n||X(s.type)),i=L(),r=ge(s),p=()=>{R.count(y.CANVAS,"shared.click_edit_button",[{key:"type",value:s.type},{key:"authed",value:u?"false":"true"}]),N.logEvent(b.canvasSharedEditButtonClicked,{textdocId:s.sharedTextdocId,textdocType:s.type})};return e.jsx("div",{className:"flex w-full justify-center border-b-[0.5px] border-token-border-light px-6",children:e.jsxs("div",{className:B("flex w-full items-center justify-between gap-4 py-4",!t&&"max-w-[1200px]"),children:[e.jsxs("div",{children:[e.jsx("h1",{className:"line-clamp-1 text-base font-semibold text-token-text-primary",children:s.title}),e.jsxs("div",{className:"flex flex-col gap-1.5 text-xs text-token-text-secondary xs:flex-col sm:flex-row",children:[e.jsx("div",{className:"cursor-default",children:e.jsx(V,{withArrow:!1,align:"start",size:"xsmall",theme:"primary",labelTextAlign:"left",wide:!0,contentClassName:"![&>*]:font-normal [&>*]:font-normal",customPrimaryLabelColorStyle:"primary",label:i.formatMessage({id:"RkWIbL",defaultMessage:"The content you’re seeing was made by a ChatGPT user. It may be unverified or contain potentially unsafe content that doesn’t reflect the views of OpenAI."}),children:i.formatMessage(E.madeWithCanvas)})}),e.jsx("div",{children:u?e.jsx("a",{className:"underline",href:he,target:"_blank",rel:"noreferrer",onClick:()=>{R.count(y.CANVAS,"shared.click_report_button",[{key:"type",value:s.type},{key:"authed",value:"false"}]),N.logEvent(b.canvasSharedUnauthedReportButtonClicked,{textdocId:s.sharedTextdocId,textdocType:s.type})},children:i.formatMessage(E.report)}):e.jsx("button",{className:"underline",onClick:()=>{R.count(y.CANVAS,"shared.click_report_button",[{key:"type",value:s.type},{key:"authed",value:"true"}]),N.logEvent(b.canvasSharedAuthedReportButtonClicked,{textdocId:s.sharedTextdocId,textdocType:s.type}),x(!0)},children:i.formatMessage(E.report)})})]})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[m&&e.jsx(q,{textdocType:s.type,isCodePreviewable:n,onClick:()=>{R.count(y.CANVAS,"shared.click_run_button",[{key:"type",value:s.type},{key:"authed",value:u?"false":"true"}]),N.logEvent(b.canvasSharedRunButtonClicked,{textdocId:s.sharedTextdocId,textdocType:s.type}),d()},isCodeRunning:a}),u?e.jsxs(I,{onClick:()=>{f({authType:"login",callbackUrl:r}),p()},icon:v,children:[e.jsx("span",{className:"hidden sm:inline",children:i.formatMessage(E.editWithChatGPT)}),e.jsx("span",{className:"inline sm:hidden",children:i.formatMessage(E.edit)})]}):e.jsxs(I,{as:"link",to:r,openNewTab:!0,icon:v,onClick:p,children:[e.jsx("span",{className:"hidden sm:inline",children:i.formatMessage(E.editWithChatGPT)}),e.jsx("span",{className:"inline sm:hidden",children:i.formatMessage(E.edit)})]})]})]})})},E=P({report:{id:"DHsq+d",defaultMessage:"Report"},editWithChatGPT:{id:"DrcR8S",defaultMessage:"Edit with ChatGPT"},edit:{id:"PpEliN",defaultMessage:"Edit"},madeWithCanvas:{id:"h8SGou",defaultMessage:"You’re viewing user-generated content that may be unverified or unsafe."}});var o=(t=>(t.NUDITY_SEXUAL_ADULT="nudity_sexual/adult",t.NUDITY_SEXUAL_ABUSE="nudity_sexual/abuse",t.NUDITY_SEXUAL_NCII="nudity_sexual/ncii",t.CHILD_EXPLOITATION="child_exploitation",t.VIOLENCE_SELF_HARM="violence/self_harm",t.VIOLENCE_EATING="violence/eating_disorder",t.VIOLENCE_TERRORISM="violence/terrorism",t.VIOLENCE_THREATS="violence/threats",t.VIOLENCE_GENDER="violence/gender",t.VIOLENCE_WEAPONS="violence/weapons",t.DECEPTIVE_IMPERSONATION="deceptive/impersonation",t.DECEPTIVE_SCAM="deceptive/scam",t.DECEPTIVE_MISINFO="deceptive/misinfo",t.HATE_SPEECH="hate/speech",t.HATE_BULLYING="hate/bullying",t.HATE_UNWANTED="hate/unwanted",t.HATE_PRIVACY="hate/privacy",t.HATE_SPAM="hate/spam",t.OTHER_ILLEGAL="other/illegal",t.OTHER_UNSAFE="other/unsafe",t.OTHER_ANIMAL="other/animal",t.OTHER_HEALTH="other/health",t.OTHER_POLITICAL="other/political",t.OTHER_DONT_LIKE="other/dont_like",t.IP_COPYRIGHT="ip/copyright",t.IP_TRADEMARK="ip/trademark",t.MODERATION_INCORRECT="moderation/incorrect",t))(o||{});const xe=w("Circle12Filled","12",["M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1Z"]),_e=w("Circle12Regular","12",["M6 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6Z"]),Ie=[{id:"NUDITY_SEXUAL",label:"Nudity & Sexual Content"},{id:"CHILD_EXPLOITATION",label:"Child Exploitation"},{id:"VIOLENCE_SELF_HARM",label:"Violence & Self-Harm"},{id:"DECEPTIVE_SCAM",label:"Deceptive Behavior & Scams"},{id:"HATE_SPAM",label:"Hate, Harrassment & Spam"},{id:"OTHER_ILLEGAL",label:"Other inappropriate or illegal content"},{id:"IP",label:"Intellectual Property"}],Ce={NUDITY_SEXUAL:[{id:o.NUDITY_SEXUAL_ADULT,label:"Adult nudity & sexual content"},{id:o.NUDITY_SEXUAL_ABUSE,label:"Sexual exploitation & abuse"},{id:o.NUDITY_SEXUAL_NCII,label:"Non-consensual or deepfake intimate imagery"}],CHILD_EXPLOITATION:[{id:o.CHILD_EXPLOITATION,label:"Child exploitation"}],VIOLENCE_SELF_HARM:[{id:o.VIOLENCE_SELF_HARM,label:"Suicide & self-harm"},{id:o.VIOLENCE_EATING,label:"Eating disorders"},{id:o.VIOLENCE_TERRORISM,label:"Terrorism"},{id:o.VIOLENCE_THREATS,label:"Threats or incitement to violence"},{id:o.VIOLENCE_GENDER,label:"Gender-based violence"},{id:o.VIOLENCE_WEAPONS,label:"Weapons creation & procurement"}],DECEPTIVE_SCAM:[{id:o.DECEPTIVE_IMPERSONATION,label:"Impersonation"},{id:o.DECEPTIVE_SCAM,label:"Fraud or scam"},{id:o.DECEPTIVE_MISINFO,label:"Misleading information"}],HATE_SPAM:[{id:o.HATE_SPEECH,label:"Hate speech or symbols"},{id:o.HATE_BULLYING,label:"Bullying & harassment"},{id:o.HATE_UNWANTED,label:"Unwanted depiction of real person"},{id:o.HATE_PRIVACY,label:"Privacy violating activities"},{id:o.HATE_SPAM,label:"Spam"}],OTHER_ILLEGAL:[{id:o.OTHER_UNSAFE,label:"Unsafe or prohibited products or activities"},{id:o.OTHER_ANIMAL,label:"Animal harm or welfare issues"},{id:o.OTHER_HEALTH,label:"Risks to public health and safety"},{id:o.OTHER_POLITICAL,label:"Deceptive content of political candidate or election equipment"},{id:o.OTHER_ILLEGAL,label:"Other inappropriate or illegal content"},{id:o.OTHER_DONT_LIKE,label:"I just don’t like it"}],IP:[{id:o.IP_COPYRIGHT,label:"Copyright",url:"https://openai.com/form/copyright-disputes"},{id:o.IP_TRADEMARK,label:"Trademark",url:"https://openai.com/form/trademark-disputes"}]},O={[o.IP_COPYRIGHT]:"https://openai.com/form/copyright-disputes",[o.IP_TRADEMARK]:"https://openai.com/form/trademark-disputes"},h=P({dialogTitle:{id:"reportModal.dialogTitle",defaultMessage:"Why are you reporting this content?"},cancelButton:{id:"reportModal.cancelButton",defaultMessage:"Cancel"},reportButton:{id:"reportModal.reportButton",defaultMessage:"Report"},submittingButton:{id:"reportModal.submittingButton",defaultMessage:"Submitting..."},submitSuccessMessage:{id:"reportModal.submitSuccessMessage",defaultMessage:"Your report has been submitted."},errorMessage:{id:"reportModal.errorMessage",defaultMessage:"An error occurred while submitting your report."},formRedirectMessage:{id:"reportModal.formRedirectMessage",defaultMessage:"Please use this form to report unlawful use of your work:"}}),H=({sharedTextdoc:t,isOpen:s,dismissModal:d})=>{const a=L(),[g,x]=c.useState(null),[u,f]=c.useState(null),[n,m]=c.useState(null),[i,r]=c.useState("toplevel"),p=()=>{f(null),m(null),r("toplevel"),x(null),d()},{mutate:M,isPending:C}=F({mutationFn:async l=>{if(n)return k.safePost("/textdoc/shared/{shared_textdoc_id}/report",{parameters:{path:{shared_textdoc_id:l.sharedTextdocId}},requestBody:{takedown_type:n}})},onSuccess:()=>{r("success")},onError:()=>{x(a.formatMessage(h.errorMessage))}}),_=n&&O[n];return e.jsxs(G,{isOpen:s,showCloseButton:!0,onClose:p,title:a.formatMessage(h.dialogTitle),type:"success",primaryButton:i==="takedown"&&!_&&e.jsx(I,{onClick:()=>M(t),disabled:!n,loading:C,children:C?a.formatMessage(h.submittingButton):a.formatMessage(h.reportButton)}),secondaryButton:i==="takedown"&&!_&&e.jsx(I,{onClick:p,color:"secondary",children:a.formatMessage(h.cancelButton)}),children:[i==="success"&&e.jsx("div",{children:a.formatMessage(h.submitSuccessMessage)}),i==="toplevel"&&e.jsx("div",{className:"flex flex-col gap-4",children:Ie.map(l=>e.jsx("div",{className:"flex items-start gap-2",children:e.jsx(I,{className:"text-sm",color:"secondary",onClick:()=>{f(l.id),r("takedown")},children:l.label})},l.id))}),i==="takedown"&&u&&e.jsxs(e.Fragment,{children:[e.jsx(te,{className:"flex flex-grow flex-col gap-4",children:Ce[u].map(l=>{const A=l.id===n;return e.jsx(se,{className:"flex flex-grow items-center justify-start gap-2",value:l.id,children:e.jsx(le,{htmlFor:l.id,className:"items-center text-left text-sm",onClick:()=>{m(l.id)},children:e.jsxs("div",{className:"flex items-center gap-2 text-token-text-primary",children:[A&&e.jsx(xe,{className:"icon-md"}),!A&&e.jsx(_e,{className:"icon-md text-token-text-tertiary"}),l.label]})},l.id)},l.id)})}),_&&e.jsxs("div",{className:"justify-between p-4 text-sm",children:[e.jsx("p",{children:a.formatMessage(h.formRedirectMessage)}),e.jsx("a",{href:O[n],target:"_blank",rel:"noreferrer",className:"text-primary underline",children:O[n]})]}),g&&e.jsx("div",{className:"p-4",children:e.jsx("p",{className:"text-xs text-red-500",children:g})})]})]})};function Ae({sharedTextdoc:t}){const s=j(t.type)&&D(t.type,t.content),[d,a]=c.useState(s),[g,x]=c.useState(!1),u=L(),f=c.useRef(null),n=c.useRef(null),m=c.useRef(null),[i,r]=c.useState(!1),p=s&&d,M=()=>{d?(m.current?.stopCode(),a(!1)):(a(!0),m.current?.runCode(t.type,t.content).finally(()=>a(!1)))},{type:C,content:_}=t,l=oe(()=>{s&&(a(!0),m.current?.runCode(C,_))});return c.useEffect(()=>{l()},[l]),t.type===ie.DOCUMENT?e.jsxs("div",{className:"flex h-full w-full flex-col items-center overflow-y-auto",children:[e.jsx("div",{className:"flex w-full flex-grow justify-center bg-token-main-surface-secondary",children:e.jsxs("div",{className:"w-full max-w-[1000px] bg-token-main-surface-primary",style:{boxShadow:"0px 4px 32px 0px rgba(0, 0, 0, 0.08)"},children:[e.jsx(S,{areButtonsFullWidth:!1,sharedTextdoc:t,onClickCodePreview:()=>{},isCodeRunning:d,showRunCodeButton:!1,setIsReportModalOpen:r}),e.jsx("div",{className:"px-12 pt-12",children:e.jsx(Z,{value:t.content,onChange:()=>{},isDisabled:!0,showChanges:!1,comments:[],diff:null,safeUrls:[],contentRefereces:[],wrapperClassName:"pb-12"})})]})}),e.jsx(H,{sharedTextdoc:t,isOpen:i,dismissModal:()=>r(!1)})]}):j(t.type)?e.jsxs("div",{className:"justify-top flex h-full w-full flex-col justify-between overflow-auto",children:[e.jsxs("div",{className:"flex flex-grow flex-col justify-start overflow-auto",children:[e.jsx(S,{areButtonsFullWidth:!0,sharedTextdoc:t,onClickCodePreview:M,isCodeRunning:d,showRunCodeButton:!s,setIsReportModalOpen:r}),e.jsx("div",{className:p?"flex-grow":void 0,children:e.jsx(K,{ref:n,enableTransition:s,visuallyHidden:!p,title:t.title})}),!p&&e.jsx("div",{children:e.jsx(z,{id:"published-codemirror",value:t.content,hoveredCommentId:null,focusedCommentId:null,language:Q(t.type),readonlyReason:J({isReadonly:!0,isRequestActive:!1,isTextdocStreaming:!1,isHistoricalVersion:!1,isShowingChanges:!1,isReadonlyFromQueryParam:!1}),editorRef:f,isPreview:!0})})]}),e.jsx("div",{className:!d&&s?"hidden":"",children:e.jsx($,{ref:m,isOpen:g,onOpenChange:x,sandboxRef:n,textdocId:"publishedCanvasTextdoc",textdocContent:t.content,textdocTitle:t.title,isTextdocAttachedPending:!1,highlightLine:A=>f.current?.highlightLine(A),isRequestActive:!1,createTextdocTurn:async()=>{}})}),e.jsx(H,{sharedTextdoc:t,isOpen:i,dismissModal:()=>r(!1)})]}):e.jsx("p",{children:u.formatMessage(Ne.unsupportedTextdocType)})}const Ne=P({unsupportedTextdocType:{id:"4hdXQX",defaultMessage:"Content type is not supported"}}),$e=Y(function(){const s=W();return e.jsx(Ae,{sharedTextdoc:s})}),ze=({data:t})=>{const s=t;return s?[{title:"ChatGPT - "+s.title},{property:"og:site_name",content:"ChatGPT"},{property:"og:title",content:s.title},{property:"og:image",content:T.src},{property:"twitter:card",content:"summary_large_image"}]:[{title:"ChatGPT"},{name:"robots",content:"noindex,nofollow"},{property:"og:image",content:T.src},{property:"og:site_name",content:"ChatGPT"}]};export{$e as default,ze as meta};
//# sourceMappingURL=ke9xq3y69ew5q3zl.js.map
