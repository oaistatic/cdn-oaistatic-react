import{R as k,P as E,a as M,e as W,v as $,aA as Q,V as K,bw as J,c4 as y,cp as X,d as p,j as Z,eJ as ee,fa as te,aF as se}from"./cyi7nanrg0vdotzd.js";import{e as O,c as A,f as ae,j as e,r as i,M as b,k as F}from"./fs6h2trisr1juto6.js";import{C as re}from"./gzqwkoorxppopd6k.js";import{en as S,eo as C,ly as ne,lz as oe,lA as G,l as ie,lB as ce,E as le,G as de,ag as D,cE as ue,cG as fe}from"./df9u9imhvwerk6zv.js";import{u as he}from"./e5dzfvnzjnvfzavu.js";class _{static async createVerification(){return k.safePost("/students/create_verification")}static async refreshEnrollmentStatus(){return k.safePost("/students/refresh_enrollment_status")}static async getVerification(s){return k.safeGet("/students/verification/{verification_id}",{parameters:{path:{verification_id:s}}})}static async applyDiscount(s){return k.safePost("/students/apply_discount",{requestBody:{account_id:s,updated_plan:"chatgptplusplan"}})}static async deleteStudentDiscount(){return k.safePost("/students/delete_student_discount")}}const v={logLandingPageImpression(){},logClickLoginButton(t){S.count(C.STUDENTS,"students.web.clickLoginButton",{key:"source",value:t}),E.logEvent(M.studentsClickLoginButton,{source:t})},logClickVerifyButton(t){S.count(C.STUDENTS,"students.web.clickVerifyButton",{key:"source",value:t}),E.logEvent(M.studentsClickVerifyButton,{source:t})},logClickCheckoutButton(t){S.count(C.STUDENTS,"students.web.clickCheckoutButton",{key:"source",value:t}),E.logEvent(M.studentsClickCheckoutButton,{source:t})},logShowNeedsVerificationModal(){S.count(C.STUDENTS,"students.web.showNeedsVerificationModal"),E.logEvent(M.studentsShowNeedsVerificationModal)},logShowVerifiedModal(){S.count(C.STUDENTS,"students.web.showVerifiedModal"),E.logEvent(M.studentsShowVerifiedModal)},logError(t){S.count(C.STUDENTS,"students.web.error",{key:"errorType",value:t})}},N=W($(()=>({isLoading:!1,isModalOpen:!1,modalErrorMessage:void 0}))),I=N.setState,u={setIsLoading:t=>{I({isLoading:t})},setModalErrorMessage:t=>{I({modalErrorMessage:t})},closeModal:()=>{I({isModalOpen:!1})},openModal:()=>{I({isModalOpen:!0})}};function H(t,s){const a=O(),r=A({mutationFn:()=>_.createVerification()});return async()=>{u.setIsLoading(!0),u.setModalErrorMessage(void 0);try{let n,o;if(t&&s)n=t,o=s;else{const{verification_id:d,account_verification_id:f}=await r.mutateAsync();n=d,o=f}const l=me(n,o);window.location.href=l}catch{v.logError("verification"),u.setIsLoading(!1),u.setModalErrorMessage(a.formatMessage({id:"/Ei+Q8",defaultMessage:"An error occurred during verification, please try again."}))}}}function q(t){const s=he(),a=Q(),r=O(),n=ae(),o=K(),l=a?.hasPaidSubscription()&&a?.isPlus(),d=A({mutationFn:()=>_.applyDiscount(a?.id??"")});return async()=>{u.setIsLoading(!0),u.setModalErrorMessage(void 0);const f=r.formatMessage({id:"WUisnk",defaultMessage:"An error occured claiming your offer, please try again."});if(l)try{await d.mutateAsync(),n(`/?${ne}=true`)}catch{u.setIsLoading(!1),u.setModalErrorMessage(f),v.logError("applyDiscount")}else try{oe(a?.features??[],r,o,s.billingDetails,s.plusAnalyticsParams,t)}catch{u.setIsLoading(!1),u.setModalErrorMessage(f),v.logError("checkout")}}}function me(t,s){const a="https://services.sheerid.com/verify/67d1f06da76e867f09f29e18/",r=new URL(a);return r.searchParams.set("verificationId",t),r.searchParams.set("accountVerificationId",s),r.toString()}function pe({enrollmentState:t}){switch(t.name){case"logged-out":case"loading":case"enrolled":return null;case"needs-verification":return e.jsx(B,{initialVerificationId:t.verificationId,initialAccountVerificationId:t.accountVerificationId});case"error":return e.jsx(B,{});case"verified":return e.jsx(ge,{accountVerificationId:t.accountVerificationId})}}function B({initialVerificationId:t=null,initialAccountVerificationId:s=null}){i.useEffect(()=>{v.logShowNeedsVerificationModal()},[]);const a=H(t,s);return e.jsx(z,{title:e.jsx(b,{id:"N/JaKU",defaultMessage:"Verify status"}),content:e.jsx(b,{id:"g7kE5b",defaultMessage:"Verify your student status via SheerID to get 2 months of free ChatGPT Plus."}),ctaText:"Verify student status",ctaOnClick:async()=>{v.logClickVerifyButton("modal"),await a()}})}function ge({accountVerificationId:t}){i.useEffect(()=>{v.logShowVerifiedModal()},[]);const s=q(t);return e.jsx(z,{title:e.jsx(b,{id:"kxcVUq",defaultMessage:"Status verified"}),content:e.jsx(b,{id:"866aTL",defaultMessage:"You've successfully validated your student status. You can claim your offer now."}),ctaText:"Checkout",ctaOnClick:async()=>{v.logClickCheckoutButton("modal"),await s()}})}function z({title:t,content:s,ctaText:a,ctaOnClick:r}){const{isLoading:n,isModalOpen:o,modalErrorMessage:l}=N();return e.jsxs(J,{type:"success",title:t,isOpen:o,showCloseButton:!0,onClose:u.closeModal,children:[e.jsx("div",{children:s}),l?e.jsx("div",{className:"mt-4 text-token-text-error",children:l}):null,e.jsx("div",{className:"mt-12",children:e.jsx(y,{loading:n,onClick:r,children:a})})]})}function U({initialVerificationId:t=null,initialAccountVerificationId:s=null,buttonSource:a}){const[r]=F(),n=r.get(G)==="true";i.useEffect(()=>{n&&u.openModal()},[n]);const o=H(t,s),{isLoading:l}=N();return e.jsx("div",{children:e.jsx(y,{loading:l,onClick:async()=>{v.logClickVerifyButton(a),await o()},children:e.jsx(b,{id:"/HobYZ",defaultMessage:"Claim offer"})})})}function xe({accountVerificationId:t,buttonSource:s}){const[a]=F(),r=a.get("redirectedFromSheerId")==="true";i.useEffect(()=>{r&&u.openModal()},[r]);const{isLoading:n}=N(),o=q(t);return e.jsx("div",{children:e.jsx(y,{loading:n,onClick:async()=>{v.logClickCheckoutButton(s),await o()},children:e.jsx(b,{id:"ZSbVh5",defaultMessage:"Checkout"})})})}function T({defaultLabel:t,enrollmentState:s,buttonSource:a}){const r=ie(),{isLoading:n}=N();switch(s.name){case"logged-out":return e.jsx(y,{loading:n,onClick:()=>{u.setIsLoading(!0),r({authType:"signup",callbackUrl:ce(G)})},children:t??e.jsx(b,{id:"TQxXgr",defaultMessage:"Claim offer"})});case"loading":return e.jsx(X,{});case"error":return e.jsx(U,{buttonSource:a});case"needs-verification":return e.jsx(U,{initialVerificationId:s.verificationId,initialAccountVerificationId:s.accountVerificationId,buttonSource:a});case"verified":return e.jsx(xe,{accountVerificationId:s.accountVerificationId,buttonSource:a});case"enrolled":return e.jsx(y,{disabled:!0,children:e.jsx(b,{id:"PHQSdT",defaultMessage:"Claimed"})})}}function be({title:t,promo:s,description:a,enrollmentState:r,ref:n}){return e.jsxs("section",{ref:n,className:"mx-auto flex h-[calc(100vh-325px)] max-h-[600px] min-h-fit max-w-screen-2xl flex-col justify-center gap-4 px-4 pb-32 pt-16 md:px-8 md:py-20",children:[e.jsxs("div",{className:"flex items-center gap-6 text-sm",children:[e.jsx("span",{className:"user-select-none rounded-full bg-[#CEDFFE] px-3 py-1.5 text-black",children:e.jsx(b,{id:"DzsyI+",defaultMessage:"Promo"})}),s]}),e.jsx("h1",{className:"max-w-[900px] text-4xl md:text-5xl",children:e.jsx("span",{className:"relative after:pointer-events-none after:absolute after:left-[calc(100%_+_90px)] after:top-[-75px] after:h-[92px] after:w-[276px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/splash-stars.png)] after:bg-contain after:bg-center after:bg-no-repeat after:opacity-0 after:content-[''] dark:after:invert md:after:opacity-100",children:t})}),a&&e.jsx("p",{className:"max-w-[800px]",children:a}),e.jsxs("div",{className:"relative mt-2 flex w-[fit-content] items-center gap-2 after:pointer-events-none after:absolute after:top-0 after:h-[200px] after:w-[calc(100%_+_30px)] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/splash-scribble.png)] after:bg-contain after:bg-center after:bg-no-repeat after:content-[''] dark:after:invert",children:[e.jsx(T,{enrollmentState:r,buttonSource:"splash"}),e.jsx(y,{color:"ghost",children:e.jsx(b,{id:"7S4VMM",defaultMessage:"Offer details"})})]})]})}function ve({question:t,answer:s,isOpen:a,onToggle:r}){return e.jsxs("div",{className:"border-b border-token-border-light",children:[e.jsxs("button",{onClick:r,className:"text-md flex w-full justify-between py-5 text-left text-[17px] font-semibold","aria-expanded":a,"aria-controls":`${t}-answer`,id:`${t}-question`,"aria-label":`${t} ${a?"close":"open"}`,children:[t,e.jsx("span",{className:"pl-4",children:a?"−":"+"})]}),e.jsx("div",{className:p("grid transition-all duration-200",{"grid-rows-[1fr]":a,"grid-rows-[0fr]":!a}),"aria-hidden":!a,id:`${t}-answer`,children:e.jsx("div",{className:"overflow-hidden",children:e.jsx("div",{className:"mb-5 text-[14px]",children:s})})})]})}const R="max-w-screen-2xl px-4 md:px-8",L="text-2xl md:text-3xl",Y="max-w-[800px]";function ye(){const{isUnauthenticated:t}=Z(),{eligible:s,markAsViewed:a}=le(de.hasSeenStudentsUpsellAnnouncement),r=i.useRef(!1);i.useEffect(()=>{r.current||(r.current=!0,!t&&s&&a())},[t,s,a]);const[n,o]=i.useState(null),[l,d]=i.useState(!1),f=i.useRef(!0),x=A({mutationFn:()=>_.refreshEnrollmentStatus(),onSuccess:g=>{g.metadata&&o(g.metadata),d(!0)}}),[m,c]=i.useState(t?{name:"logged-out"}:{name:"loading"});i.useEffect(()=>{!t&&f.current&&(f.current=!1,x.mutate())},[t,x]),i.useEffect(()=>{if(!t&&l){if(n){const g=n.enrollment_step;c(g==="verified"?{name:"verified",accountVerificationId:n.account_verification_id}:g==="enrolled"?{name:"enrolled"}:g==="error"?{name:"error"}:{name:"needs-verification",verificationId:n?.verification_id,accountVerificationId:n?.account_verification_id});return}c({name:"needs-verification"})}},[t,l,n]);const h=i.useRef(null),j=i.useRef(null),[V,w]=Ee([h,j],{threshold:.1}),P=!V&&!w||!1;return e.jsxs("div",{className:"overflow-hidden pb-8 pt-[71px] font-oai",children:[e.jsx(je,{enrollmentState:m}),e.jsx(be,{ref:h,title:"ChatGPT Plus is now free for college students through May",promo:"2 months free for students",enrollmentState:m}),e.jsx(Se,{title:e.jsxs(e.Fragment,{children:["ChatGPT Plus is here to help you through"," ",e.jsx("span",{className:"relative after:pointer-events-none after:absolute after:right-[-10%] after:top-[-10%] after:h-[120%] after:w-[120%] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/cards-circle.png)] after:bg-contain after:bg-center after:bg-no-repeat after:content-[''] dark:after:invert",children:"finals"})]}),description:"Get increased file uploads, expanded messaging limits, advanced voice mode, deep research, and more with Plus.",cardItems:[{subtitle:"Summarize docs",title:e.jsxs("span",{children:["Upload, ",e.jsx("br",{})," summarize, go"]}),description:"You can upload dozens of docs, PDFs, and images and ask ChatGPT for a content summary or a quiz.",imageUrl:"https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/card-upload.png"},{subtitle:"Research assistance",title:e.jsxs("span",{children:["Research ",e.jsx("br",{})," faster"]}),description:"Save hours of time by asking ChatGPT to do detailed online research and deliver a well-cited report.",imageUrl:"https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/card-research.png"},{subtitle:"Writing help",title:e.jsxs("span",{children:["Brainstorm ",e.jsx("br",{})," ideas"]}),description:"Get unstuck from writer's block and brainstorm ideas with ChatGPT – and get edits and writing tips, too.",imageUrl:"https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/card-brainstorm.png"},{subtitle:"Image creation",title:e.jsxs("span",{children:["Spark ",e.jsx("br",{})," creativity"]}),description:"Create images and videos for your presentations and reports, or for your own creative projects.",imageUrl:"https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/card-spark.png"}]}),e.jsx(Ce,{title:"FAQs",faqs:[{question:"Am I eligible for the student offer?",answer:e.jsxs("p",{children:["Full and part-time students at degree-granting schools in the United States and Canada are eligible for this offer. If you don’t see your school on the student verification list, please click this"," ",e.jsx(D,{href:"https://support.sheerid.com/en-US/67d1f06da76e867f09f29e18/asr",openNewTab:!0,className:"text-token-text-primary",children:"link"})," ","to receive further assistance from our partner. This will let you submit a request to add your school, find it by another name, or see if your school is not eligible for this offer."]})},{question:"How do you know I’m a student?",answer:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"We verify student status using SheerID’s secure verification system, which confirms your eligibility through multiple methods:"}),e.jsx("br",{}),e.jsxs("ul",{className:"list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Authoritative Sources:"})," SheerID first checks trusted databases, such as your university's Office of the Registrar, to instantly verify your student status."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Single Sign-On (SSO):"})," SheerIDIf necessary, you’ll be prompted to log in securely with your school's SSO credentials, confirming your affiliation directly through your institution."]})]}),e.jsx("br",{}),e.jsx("p",{children:"If instant verification isn't possible through these methods, you may be asked to upload additional documentation for manual review."})]})},{question:"How do I get the offer?",answer:e.jsx("p",{children:"You can access the offer by verifying your student status through SheerID here [INSERT LINK]. Once verified, you will be redirected back to ChatGPT to claim your offer."})},{question:"What’s included in the offer?",answer:e.jsx("p",{children:"Students can claim access to ChatGPT Plus for free from March 31, 2025 - May 31, 2025. The offer is valid for two months once you claim it."})},{question:"I already have a ChatGPT Plus subscription, how do I get this offer?",answer:e.jsx("p",{children:"Existing ChatGPT Plus users can access this offer by verifying your student status through SheerID. Once verified, you will be redirected to ChatGPT and your account will automatically be credited for the two free months."})}]}),e.jsx(ke,{ref:j,title:"Offer details",description:e.jsxs(e.Fragment,{children:["Get access to ChatGPT Plus for free from March 31, 2025 - May 31, 2025. Offer valid for two months once you claim it. See"," ",e.jsx(D,{href:"https://openai.com/terms/chatgpt-plus",openNewTab:!0,className:"text-token-text-primary",children:"terms"})," ","for more details."]}),enrollmentState:m}),e.jsx(pe,{enrollmentState:m}),e.jsx(we,{enrollmentState:m,showBottomNav:P})]})}function je({enrollmentState:t}){const[s,a]=i.useState(!1),[r,n]=i.useState(!1);return i.useEffect(()=>{const o=ue(()=>{a(window.scrollY>0),n(window.scrollY>400)},200);return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),e.jsx("nav",{className:p("absolute left-0 right-0 top-0 z-10 bg-token-main-surface-primary py-4 transition-all duration-300 md:fixed md:border-b",{"border-token-border-light":s,"border-transparent":!s}),children:e.jsxs("div",{className:p("mx-auto flex items-center justify-between",R),children:[e.jsx("a",{href:"/","aria-label":"ChatGPT Home",children:e.jsx(re,{})}),e.jsx("div",{className:p("opacity-0 transition-opacity",{"md:opacity-100":r}),inert:!r,children:e.jsx(T,{enrollmentState:t,buttonSource:"header"})})]})})}function we({enrollmentState:t,showBottomNav:s=!1}){return e.jsx("nav",{className:p("fixed bottom-0 left-0 right-0 z-10 border-t border-token-border-light bg-token-main-surface-primary py-4 text-center transition-[opacity_transform] duration-200 ease-in-out md:hidden",{"translate-y-0 opacity-100":s,"translate-y-[100%] opacity-0":!s}),children:e.jsx(T,{enrollmentState:t,buttonSource:"header"})})}function Se({title:t,description:s,cardItems:a}){const[r,n]=i.useState(!0),[o,l]=i.useState(!1),d=i.useRef(null),f=i.useRef(null),x=i.useRef(null),m=c=>{if(d.current){const j=c==="left"?d.current.scrollLeft-300:d.current.scrollLeft+300;d.current.scrollTo({left:j,behavior:"smooth"})}};return i.useEffect(()=>{const c=f.current,h=x.current,j={root:d.current,threshold:1},V=P=>{P.forEach(g=>{g.target===c&&n(g.isIntersecting),g.target===h&&l(g.isIntersecting)})},w=new IntersectionObserver(V,j);return c&&w.observe(c),h&&w.observe(h),()=>{c&&w.unobserve(c),h&&w.unobserve(h)}},[]),e.jsxs("section",{className:"pt-20",children:[e.jsxs("div",{className:p("mx-auto flex flex-col gap-8",R),children:[e.jsx("h2",{className:p(L,Y,"font-medium"),children:t}),e.jsxs("div",{className:"flex flex-col gap-2 md:flex-row md:items-end md:justify-between",children:[e.jsx("p",{className:"max-w-[600px] text-[17px]",children:s}),e.jsxs("div",{children:[e.jsx(y,{color:"ghost",icon:ee,onClick:()=>m("left"),disabled:r}),e.jsx(y,{color:"ghost",icon:fe,onClick:()=>m("right"),disabled:o,className:"relative after:pointer-events-none after:absolute after:right-[-15%] after:top-[-70%] after:h-[100%] after:w-[100%] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/cards-more.png)] after:bg-contain after:bg-center after:bg-no-repeat after:opacity-0 after:content-[''] dark:after:invert md:after:opacity-100"})]})]})]}),e.jsx("div",{ref:d,className:"no-scrollbar mx-auto mt-8 flex max-w-screen-2xl snap-x snap-mandatory scroll-pl-4 gap-6 overflow-x-auto pl-4 pr-6 md:scroll-pl-8 md:pl-8 md:pr-8",children:a.map((c,h)=>e.jsxs("div",{ref:h===0?f:h===a.length-1?x:null,className:"w-[290px] flex-shrink-0 snap-start overflow-hidden rounded-md text-black md:w-[370px] [&:nth-child(1)]:bg-[#F7DBE5] [&:nth-child(2)]:bg-[#CBE1FB] [&:nth-child(3)]:bg-[#DBECB1] [&:nth-child(4)]:bg-[#C4EBE5]",children:[e.jsxs("div",{className:"px-8 pt-8",children:[e.jsx("p",{className:"text-balance text-3xl font-medium leading-[1] md:text-[44px]",children:c.title}),e.jsx("p",{className:"mt-3 text-[17px]",children:c.description})]}),e.jsx("img",{src:c.imageUrl,alt:c.description,className:"mt-[-16px] h-auto w-full md:mt-0"})]},h))})]})}function Ce({title:t,faqs:s}){const[a,r]=i.useState(0),n=o=>{r(a===o?-1:o)};return e.jsxs("section",{className:p("mx-auto flex max-w-[596px] flex-col gap-8 px-4 py-20 md:gap-16 md:py-32"),children:[e.jsx("h2",{className:p(L,"sm:text-center"),children:e.jsx("span",{className:"relative after:pointer-events-none after:absolute after:bottom-[25%] after:left-[calc(100%_+_4px)] after:h-[40px] after:w-[60px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/faq-bubble-small.png)] after:bg-contain after:bg-center after:bg-no-repeat after:content-[''] dark:after:invert md:after:bottom-0 md:after:left-auto md:after:right-[calc(100%_+_10px)] md:after:h-[90px] md:after:w-[128px] md:after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/faq-bubble-big.png)]",children:t})}),e.jsx("div",{className:"",children:s.map((o,l)=>e.jsx(ve,{question:o.question,answer:o.answer,isOpen:a===l,onToggle:()=>n(l)},l))})]})}function ke({title:t,description:s,enrollmentState:a,ref:r}){return e.jsxs("section",{ref:r,className:p("mx-4 flex flex-col items-center rounded-md bg-token-composer-surface py-32 text-center md:mx-8",R,"relative after:pointer-events-none after:absolute after:bottom-0 after:h-[140px] after:w-[80%] after:max-w-[340px] after:bg-[url(https://cdn.openai.com/chatgpt/ctf-cdn/student-landing/offer-flowers.png)] after:bg-contain after:bg-bottom after:bg-no-repeat after:content-[''] dark:after:invert"),children:[e.jsx("h2",{className:p(L,Y),children:t}),e.jsx("p",{className:p("mb-8 mt-3 max-w-[600px] text-pretty text-[17px]"),children:s}),e.jsx(T,{enrollmentState:a,buttonSource:"footer"})]})}function Ee(t,s={}){const a=t.map(o=>o?.current),[r,n]=i.useState(()=>a.map(()=>!1));return i.useEffect(()=>{const o=d=>{d.forEach(f=>{const x=a.findIndex(m=>m===f.target);x!==-1&&n(m=>{const c=[...m];return c[x]=f.isIntersecting,c})})},l=new IntersectionObserver(o,s);return a.forEach(d=>{d&&l.observe(d)}),()=>{a.forEach(d=>{d&&l.unobserve(d)})}},[a,s]),r}function Me(){return e.jsx(ye,{})}const Ae=te(function(){const{value:s}=se("3148583717");return s&&s?e.jsx(Me,{}):null});export{Ae as default};
//# sourceMappingURL=ejycpxxxqbupyec6.js.map
