import{r as l,c as X,j as e,M as u,a as be,b as Ce}from"./l6lryjpkt8rv0lpy.js";import{a6 as te,P as G,a as K,d as $,h as Ee,bW as Me,c2 as re,bT as D,g3 as Se,bh as we,C as de,aa as ee,bO as je,S as me,R as ke}from"./mnkup87aq6tfilq5.js";import{fg as T,bG as ye,fh as A,fi as Ie,M as Ne,bP as Ve,bO as Re,fj as Pe,fk as Te,fl as Ae}from"./dvllb5fed1b4y7k1.js";import{V as Y}from"./d3y72ugnrmac5z1v.js";import{S as Be,c as Le}from"./c9vn66xkba075dtq.js";const _e=a=>l.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...a},l.createElement("path",{d:"M11.3926 3.35837C11.0926 3.33385 10.7044 3.33333 10.1333 3.33333H7.66681C7.66676 3.38103 7.66157 3.42946 7.65079 3.47795L7.27863 5.15271C7.2724 5.18072 7.26626 5.20851 7.26018 5.23606C7.17253 5.63304 7.09547 5.98203 6.9117 6.27599C6.75078 6.53339 6.53339 6.75078 6.27599 6.9117C5.98203 7.09547 5.63304 7.17253 5.23606 7.26018C5.20851 7.26626 5.18072 7.2724 5.15271 7.27863L3.47795 7.65079C3.42946 7.66157 3.38103 7.66676 3.33333 7.66681V10.1333C3.33333 10.7044 3.33385 11.0926 3.35837 11.3926C3.38225 11.6849 3.42553 11.8344 3.47866 11.9387C3.60649 12.1895 3.81046 12.3935 4.06135 12.5213C4.16561 12.5745 4.31508 12.6178 4.60736 12.6416C4.90742 12.6661 5.29562 12.6667 5.86667 12.6667H6.62783C6.99602 12.6667 7.2945 12.9651 7.2945 13.3333C7.2945 13.7015 6.99602 14 6.62783 14H5.83912C5.30248 14 4.85958 14 4.49878 13.9705C4.12405 13.9399 3.77958 13.8742 3.45603 13.7094C2.95426 13.4537 2.54631 13.0457 2.29065 12.544C2.12579 12.2204 2.06008 11.8759 2.02946 11.5012C1.99998 11.1404 1.99999 10.6975 2 10.1609L2 7.33333C2 5.94985 2.68503 4.62216 3.6536 3.6536C4.62216 2.68503 5.94985 2 7.33333 2L10.1609 2C10.6975 1.99999 11.1404 1.99998 11.5012 2.02946C11.8759 2.06008 12.2204 2.12579 12.544 2.29065C13.0457 2.54631 13.4537 2.95426 13.7094 3.45603C13.8742 3.77958 13.9399 4.12405 13.9705 4.49878C14 4.85958 14 5.30248 14 5.83912V6.66667C14 7.03486 13.7015 7.33333 13.3333 7.33333C12.9651 7.33333 12.6667 7.03486 12.6667 6.66667V5.86667C12.6667 5.29561 12.6661 4.90742 12.6416 4.60736C12.6178 4.31508 12.5745 4.16561 12.5213 4.06135C12.3935 3.81046 12.1895 3.60649 11.9387 3.47866C11.8344 3.42553 11.6849 3.38225 11.3926 3.35837ZM3.52009 6.27557L4.86347 5.97704C5.39241 5.8595 5.49539 5.82726 5.56921 5.78111C5.65501 5.72747 5.72747 5.65501 5.78111 5.56921C5.82726 5.49539 5.8595 5.39241 5.97704 4.86347L6.27557 3.52009C5.67343 3.72859 5.09016 4.10265 4.59641 4.59641C4.10265 5.09016 3.72859 5.67343 3.52009 6.27557ZM12 9.33333C12.3682 9.33333 12.6667 9.63181 12.6667 10V11.3333H14C14.3682 11.3333 14.6667 11.6318 14.6667 12C14.6667 12.3682 14.3682 12.6667 14 12.6667H12.6667V14C12.6667 14.3682 12.3682 14.6667 12 14.6667C11.6318 14.6667 11.3333 14.3682 11.3333 14V12.6667H10C9.63181 12.6667 9.33333 12.3682 9.33333 12C9.33333 11.6318 9.63181 11.3333 10 11.3333H11.3333V10C11.3333 9.63181 11.6318 9.33333 12 9.33333Z",fill:"#676767"}));function se(a){return a.split(/[\s,]+/)}function ce({value:a,onChange:i,className:g}){const f=X(),[r,s]=l.useState(""),p=te(),m=l.useMemo(()=>p?.subscriptionAnalyticsParams,[p]),x=l.useCallback(o=>{if(r&&!o.nativeEvent.isComposing)switch(o.key){case"Enter":case",":case" ":{const n=se(r);i([...a,...n.map(ne)]),s(""),o.preventDefault();const v={numEmailsAdded:n.length,uploadType:"Manual"};G.logEvent(K.accountPayCollaboratorEmailsAdded,{...m,...v})}}},[r,i,a,m]),c=o=>{if(r){const n=se(r);i([...a,...n.map(ne)]),s(r),o.preventDefault()}},d=()=>{G.logEvent(K.accountPayCollaboratorEmailRemoved,m)};return e.jsx(Be,{className:$("react-select-container",g),isMulti:!0,onBlur:c,classNamePrefix:"react-select",components:Fe,inputValue:r,isClearable:!0,menuIsOpen:!1,onChange:(o,n)=>{switch(i(o),n.action){case"pop-value":case"remove-value":d();break}},onInputChange:s,onKeyDown:x,placeholder:f.formatMessage(ae.placeholder),value:a,"aria-labelledby":"add-emails-label",name:"add-member-emails"})}const ne=a=>({label:a,value:a,isValid:Y.test(a)}),De=a=>{const i=X(),g=e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{children:a.children}),e.jsx(Me,{className:"icon-sm"})]}),f=a.data.isValid?g:e.jsx(re,{label:i.formatMessage(ae.tooltipInvalidEmail,{email:a.data.value}),side:"top",children:g}),r=te(),s=l.useMemo(()=>r?.subscriptionAnalyticsParams,[r]),p=()=>{G.logEvent(K.accountPayCollaboratorEmailRemoved,s)};return e.jsx(Le.MultiValue,{...a,children:e.jsx("button",{className:$("m-1 cursor-pointer rounded-full border border-transparent py-1 pl-3 pr-2 text-sm text-token-text-primary",a.data.isValid?"bg-token-main-surface-secondary hover:border-token-border-medium hover:bg-token-main-surface-tertiary":"bg-red-200 text-red-500"),onClick:m=>{a.removeProps.onClick?.(m),p(),m.preventDefault()},"aria-label":i.formatMessage(ae.removeMember,{member:a.data.value}),children:f})})},Fe={DropdownIndicator:()=>null,IndicatorsContainer:()=>null,ClearIndicator:()=>null,MultiValueRemove:()=>null,MultiValue:De},ae=Ee({membersAdded:{id:"emailsTextarea.membersAdded",defaultMessage:"+{count} {count, plural, one {member} other {members}}"},removeMember:{id:"emailsTextarea.removeMember",defaultMessage:"Remove {member}"},tooltipInvalidEmail:{id:"emailsTextarea.tooltipInvalidEmail",defaultMessage:'"{email}" may not be a valid email'},clearAllEntries:{id:"emailsTextarea.clearAllEntries",defaultMessage:"Clear all"},placeholder:{id:"emailsTextarea.placeholder",defaultMessage:"Type an email and press enter..."}}),Oe=`email,role
user1@company.com,member
admin@company.com,admin
it@company.com,owner`,ue=25,le=[],pe=({workspace:a,onSuccess:i,setStep:g,isNewTeamsPurchaseUxEnabled:f,seatCount:r})=>{const s=te(),p=a.isOwnerOfAccount(),[m,x]=l.useState(!1),c=l.useRef(null),d=X(),o=de(),[n,v]=l.useState(!1),[E,V]=l.useState(!0),[F,B]=l.useState(!1),[b,k]=l.useState([]),[O,R]=l.useState([]),[H,W]=l.useState(r?Array(r).fill(""):[]),{mutateAsync:S}=ze(a.id,i),U=Ve(),M=Re()??!0,[w,L]=l.useState(le),j=l.useMemo(()=>s?.subscriptionAnalyticsParams,[s]);l.useEffect(()=>{if(!b?.length||!U?.length||M){L(le);return}const C=U.map(h=>"@"+h.hostname.toLowerCase()),I=b.map(({email:h})=>h.toLowerCase()).filter(h=>!C.some(N=>h.endsWith(N)));L(I)},[U,M,b]);const z=Ge(p),Z=l.useCallback(C=>{const I={numEmailsAdded:C,uploadType:"Bulk"};G.logEvent(K.accountPayCollaboratorEmailsAdded,{...j,...I})},[j]),y=l.useCallback(async C=>{v(!0);const I=C.target.files?.[0];if(I){const h=await qe(I,z,m);h.status==="success"?(k(h.newRows),f?R(h.newRows.map(N=>({label:N.email,value:N.email,isValid:Y.test(N.email)}))):g?.(1),x(h.hasWarning),Z(h.newRows.length),C.target.files=null):h.reason==="file_too_large"?o.danger(d.formatMessage(t.fileTooLargeWarning,{maxSize:`${ue}MB`}),{duration:5}):h.reason==="invalid_file_type"&&o.danger(d.formatMessage(t.fileIncorrectTypeWarning),{duration:5})}},[z,d,f,g,m,o,Z]),_=(C,I,h)=>{const N=[...b];N[C]={...N[C],[I]:h},k(N)},P=l.useCallback(C=>{G.logEvent(K.accountPayAddCollaboratorsModalClicked,{...j,...C})},[j]),q=l.useCallback(()=>{G.logEvent(K.accountPayAddCollaboratorsUploadClicked,j)},[j]),ge=l.useCallback(()=>{G.logEvent(K.accountPayCollaboratorEmailRemoved,j)},[j]),fe=C=>{const I=[...b.slice(0,C),...b.slice(C+1)];k(I),ge()},Q=l.useCallback(()=>{k([]),g?.(0),B(!1),R([])},[g]),xe=l.useCallback(async()=>{B(!0);try{b.length>5&&o.info(d.formatMessage(t.inviteMessageLoading,{numRows:b.length}),{hasCloseButton:!0});const C=[["admin",ee.ADMIN],["owner",ee.OWNER],["member",ee.STANDARD]],h=(await Promise.all(je(C.map(([N,ve])=>{const ie=b.filter(J=>J.role===N).map(J=>J.email);return ie.length>0&&S({emails:ie,role:ve,resendEmails:E})})))).flat().length;h>0&&o.success(d.formatMessage(t.inviteSuccessToast,{numRows:h,userStr:h===1?"user":"users",workspaceName:Pe(d,a)})),me.logEvent("chatgpt_invite_users_to_workspace",b.length,{action:"SubmitEmails",location:"modal-submit-button",text:"Submit",step:"AdminModal-CollectEmails-Submit"}),i?.(),Q()}finally{B(!1)}},[S,b,E,i,o,d,a,Q]),he=l.useCallback(()=>{c.current?.value&&(c.current.value=""),c.current?.click(),q()},[c,q]);return{INVITE_ROLES:z,clearState:Q,emailInputList:H,emailTableRows:b,emailTextAreaValue:O,emailsOutsideOfDomain:w,fileInputRef:c,handleClickImportCSV:he,handleDeleteRow:fe,handleInputChange:_,handleSubmit:xe,handleUploadCSV:y,hasUploadedCsv:n,isInviting:F,resendEmails:E,setEmailInputList:W,setEmailTableRows:k,setEmailTextAreaValue:R,setResendEmails:V,shouldShowWarning:m,trackNavigationClick:P,trackUploadClick:q}};function Qe({workspace:a,canResendInviteEmails:i,onCancel:g,cancelButtonText:f,onSuccess:r,fullWidthButtons:s=!1}){const[p,m]=l.useState(!1),x=X(),[c,d]=l.useState(0),{handleUploadCSV:o,handleInputChange:n,handleDeleteRow:v,clearState:E,handleSubmit:V,shouldShowWarning:F,emailTableRows:B,isInviting:b,resendEmails:k,setResendEmails:O,emailTextAreaValue:R,emailsOutsideOfDomain:H,trackNavigationClick:W,INVITE_ROLES:S,setEmailTableRows:U,setEmailTextAreaValue:M,fileInputRef:w,handleClickImportCSV:L}=pe({workspace:a,onSuccess:r,setStep:d}),j=()=>{const y=new Set,_=R.reduce((P,q)=>(y.has(q.value)||P.push(q.value),y.add(q.value),P),[]);U(_.map(P=>({email:P,role:S.member}))),d(1),me.logEvent("chatgpt_invite_users_to_workspace",0,{action:"CollectEmails",location:"modal-next-button",text:"Next",step:"AdminModal-CollectEmails-Next"})},z=e.jsx(D,{color:"primary",size:s?"large":"medium",disabled:b||B.length===0||H.length>0,onClick:()=>{V(),W({buttonType:"Send"})},children:b?x.formatMessage(t.inviteMemberInviteSubmitButtonLoading):x.formatMessage(t.inviteMemberInviteSubmitButton)}),Z=e.jsx(D,{color:"primary",size:s?"large":"medium",disabled:R.length===0,onClick:j,children:x.formatMessage(t.inviteMemberInviteNextButton)});return e.jsxs("div",{className:"flex flex-col gap-2",children:[c===0&&e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("label",{htmlFor:"upload-csv",id:"upload-csv-label",children:e.jsx(u,{...t.importCSVLabel})}),e.jsxs("span",{className:"text-sm text-token-text-tertiary",children:[e.jsx(u,{...p?t.helperCSVFormatHide:t.helperCSVFormatShow,values:{link:y=>e.jsx("button",{className:"underline",onClick:()=>{m(!p)},children:y})}}),p&&e.jsx("pre",{className:"mt-4",children:Oe})]})]}),e.jsx("input",{ref:w,type:"file",accept:".csv,text/csv",id:"upload-csv",className:"hidden",onChange:o}),e.jsx(D,{color:"secondary",onClick:L,children:e.jsx(u,{...t.importCSVButton})})]}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("label",{htmlFor:"add-member-emails",id:"add-emails-label",children:e.jsx(u,{...t.addEmailsFieldName})}),e.jsx(ce,{value:R,onChange:M})]})]}),c===1&&e.jsxs(e.Fragment,{children:[F&&e.jsxs("div",{className:"flex w-full items-center bg-yellow-100 p-4",children:[e.jsx(Se,{className:"icon-sm mr-2 text-yellow-700"}),e.jsx("div",{className:"flex-grow text-yellow-700",children:e.jsx(u,{...t.unspecifiedRoleDescription})})]}),H.length>0&&e.jsx("div",{className:"flex w-full items-center bg-red-100 p-4",children:e.jsxs("div",{className:"flex-grow text-red-700",children:[e.jsx(u,{...t.prohibitedExternalEmailDescription}),e.jsx("pre",{className:"my-1",children:H.join(", ")}),e.jsx(u,{...t.prohibitedExternalEmailResolution})]})}),e.jsxs(T.Root,{size:"normal",children:[e.jsxs(T.Header,{children:[e.jsx(T.HeaderCell,{children:e.jsx(u,{...t.inviteTableHeaderEmail})}),e.jsx(T.HeaderCell,{className:"pl-3 dark:bg-gray-900",children:e.jsx(u,{...t.inviteTableHeaderRole})}),e.jsx(T.HeaderCell,{})]}),e.jsx(T.Body,{children:B.map((y,_)=>e.jsxs(T.Row,{children:[e.jsx(T.Cell,{children:e.jsx(ye,{ariaLabel:x.formatMessage(t.inviteTableHeaderEmail),name:"email",type:"email",value:y.email,onChange:P=>n(_,"email",P.target.value),color:"neutral"})}),e.jsx(T.Cell,{children:e.jsxs(A.Root,{value:y.role,onValueChange:P=>n(_,"role",P),children:[e.jsxs(A.Trigger,{children:[e.jsx(A.Value,{}),e.jsx(A.Icon,{})]}),e.jsx(A.Portal,{children:e.jsxs(A.Content,{className:"border border-token-main-surface-secondary",children:[e.jsx(A.Item,{value:S.member,children:e.jsx(u,{...t.inviteRoleMember})}),S.admin&&e.jsx(A.Item,{value:S.admin,children:e.jsx(u,{...t.inviteRoleAdmin})}),S.owner&&e.jsx(A.Item,{value:S.owner,children:e.jsx(u,{...t.inviteRoleOwner})})]})})]})}),e.jsx(T.Cell,{textAlign:"right",children:e.jsx(Ie,{onClick:()=>v(_),className:"icon-sm mr-2 cursor-pointer text-token-text-secondary"})})]},_))})]})]}),i&&O&&e.jsx("div",{className:"mt-2 flex items-center text-left text-token-text-secondary",children:e.jsx(Ne,{id:"resend-emails",checked:k,onChange:y=>O(y.currentTarget.checked),label:x.formatMessage(t.resendEmailsFieldName)})}),e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(D,{color:"secondary",size:s?"large":"medium",onClick:()=>{c!==0?d(0):(E(),g(),W({buttonType:"Skip"}))},children:c===0?f:x.formatMessage(t.inviteMemberInviteBackButton)}),c===0?Z:z]})]})}const He=we.input`flex w-full rounded-lg bg-token-main-surface-primary pl-4 placeholder:text-token-text-tertiary focus:ring-2 border focus:ring-token-text-primary focus:border-token-border-medium border-token-border-medium focus:border-token-border-medium `,We=({email:a,index:i,emailInputList:g,setEmailInputList:f,setEmailTableRows:r})=>{const s=X(),[p,m]=l.useState(!1),x=!!a&&!p&&i>0&&g.indexOf(a)<i;return e.jsxs("div",{className:"flex w-full flex-col gap-1",children:[e.jsx(He,{className:$((p||x)&&"border-token-text-error"),type:"email",value:a,onBlur:()=>{m(!!a&&!Y.test(a))},placeholder:s.formatMessage(t.emailInputPlaceholder),onChange:c=>f(d=>{const o=[...d];return o[i]=c.target.value,r(o.filter(Boolean).map(n=>({email:n,role:"member"}))),o})},i),p&&e.jsx("div",{className:"ml-1 flex text-xs text-token-text-error",children:e.jsx(u,{...t.invalidEmailWarning})}),x&&e.jsx("div",{className:"ml-1 flex text-xs text-token-text-error",children:e.jsx(u,{...t.duplicateEmailWarning})})]})},oe=25,Ue=10;function Je({workspace:a,onCancel:i,cancelButtonText:g,onSuccess:f,fullWidthButtons:r=!1,seatCount:s}){const p=X(),[m,x]=l.useState(s>Ue),{clearState:c,emailInputList:d,emailTableRows:o,emailTextAreaValue:n,emailsOutsideOfDomain:v,fileInputRef:E,handleClickImportCSV:V,handleSubmit:F,handleUploadCSV:B,hasUploadedCsv:b,isInviting:k,setEmailInputList:O,setEmailTableRows:R,setEmailTextAreaValue:H,trackNavigationClick:W}=pe({workspace:a,onSuccess:f,seatCount:s,isNewTeamsPurchaseUxEnabled:!0}),S=e.jsx(re,{label:p.formatMessage(t.importCSVTooltip),contentClassName:"w-[280px]",side:"top",delayDuration:200,children:e.jsx(D,{className:"ml-auto",color:"secondary",icon:_e,onClick:V,children:e.jsx(u,{...b?t.reimportCSVButtonExperimental:t.importCSVButtonExperimental})})}),U=M=>{const w=M.filter((L,j,z)=>z.findIndex(Z=>Z.value===L.value)===j);H(w),R(w.map(L=>({email:L.value,role:"member"})))};return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("input",{ref:E,type:"file",accept:".csv,text/csv",id:"upload-csv",className:"hidden",onChange:M=>{B(M),x(!0)}}),v.length>0&&e.jsx("div",{className:"flex w-full items-center bg-red-100 p-4",children:e.jsxs("div",{className:"flex-grow text-red-700",children:[e.jsx(u,{...t.prohibitedExternalEmailDescription}),e.jsx("pre",{className:"my-1",children:v.join(", ")}),e.jsx(u,{...t.prohibitedExternalEmailResolution})]})}),m?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-8 flex w-full items-center gap-3",children:[s<=oe&&e.jsx("div",{className:"flex h-2 flex-grow overflow-hidden rounded-3xl bg-token-main-surface-secondary",children:Array(Ae(s,0,oe)).fill(0).map((M,w)=>e.jsx("div",{className:$("h-full flex-grow border-r-2 border-token-main-surface-primary last-of-type:border-0",w<n.length&&"bg-black dark:bg-white")},w))}),e.jsx("div",{className:"text-xs text-token-text-tertiary",children:e.jsx(u,{...t.seatsInvited,values:{seatCount:s,enteredCount:n.length}})})]}),e.jsxs("div",{className:"flex w-full items-center justify-between",children:[e.jsx("label",{htmlFor:"add-member-emails",id:"add-emails-label",className:"text-base font-medium",children:e.jsx(u,{...t.addEmailsFieldName})}),S]}),e.jsx(ce,{value:n,onChange:U})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mb-4 flex flex-col gap-4",children:[e.jsx("div",{className:"text-base font-medium",children:e.jsx(u,{...t.addEmailsFieldName})}),d.map((M,w)=>e.jsx(We,{email:M,index:w,emailInputList:d,setEmailInputList:O,setEmailTableRows:R},w))]}),e.jsxs("div",{className:"align-center flex justify-between",children:[e.jsx(D,{color:"secondary",onClick:()=>{O(M=>[...M,""])},icon:Te,children:e.jsx(u,{...t.addEmailButton})}),S]})]}),o.length-s>0&&e.jsx("div",{className:"text-xs text-token-text-tertiary",children:e.jsx(u,{...t.seatsExceeded,values:{exceeded:o.length-s}})})]}),e.jsxs("div",{className:"mt-8 flex w-full flex-col gap-2",children:[e.jsx(D,{color:"primary",size:r?"large":"medium",loading:k,disabled:k||o.length===0||v.length>0,onClick:()=>{F(),W({buttonType:"Send"})},children:p.formatMessage(k?t.inviteMemberInviteSubmitButtonLoading:t.inviteMemberInviteSubmitButton)}),e.jsx(D,{color:"ghost",size:r?"large":"medium",onClick:()=>{c(),i(),W({buttonType:"Skip"})},children:g})]})]})}function ze(a,i){const g=X(),f=de(),r=be();return Ce({mutationFn:async({emails:s,role:p,resendEmails:m})=>{const x=[],c=Math.max(5,Math.round(s.length/10));for(let n=0;n<s.length;n+=c)x.push(s.slice(n,n+c));const d=async n=>ke.safePost("/accounts/{account_id}/invites",{parameters:{path:{account_id:a}},requestBody:{email_addresses:n,role:p,resend_emails:m}}).then(v=>(v.errored_emails.length>0&&f.danger(g.formatMessage(t.inviteMessageFailure,{emailsStr:v.errored_emails.map(({email_address:E,error:V})=>`${E}: ${V}`).join(", ")})),v.account_invites)).catch(v=>{throw f.danger(v.message),v});return(await Promise.all(x.map(n=>d(n)))).flat()},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace","invites",a]}),i?.()}})}function qe(a,i,g){return new Promise(f=>{if(a.size/1048576>ue)f({status:"error",reason:"file_too_large"});else if(a.type!=="text/csv")f({status:"error",reason:"invalid_file_type"});else{const s=new FileReader;s.readAsText(a),s.onload=function(p){let m=g;const c=(p.target?.result).split(`
`),d=new Set,o=c.reduce((n,v)=>{const[E,V]=v.split(",").map(F=>F.trim());return Y.test(E)&&!d.has(E)&&(i[V]===void 0&&!m&&(m=!0),n.push({email:E,role:i[V]??i.member})),d.add(E),n},[]);f({status:"success",newRows:o,hasWarning:m})}}})}const Ge=a=>{const i={member:"member"};return a&&(i.admin="admin",i.owner="owner"),i},t={importCSVLabel:{id:"adminPage.importCSVLabel",defaultMessage:"Import from CSV",description:"Name of label for import from CSV button"},helperCSVFormatHide:{id:"adminPage.helperCSVFormat",defaultMessage:'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Hide Example</link>',description:"Instructions for formatting the import CSV, with a link to hide the example"},helperCSVFormatShow:{id:"adminPage.helperCSVFormat",defaultMessage:'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Show Example</link>',description:"Instructions for formatting the import CSV, with a link to show an example"},importCSVButton:{id:"adminPage.importCSVButton",defaultMessage:"Upload",description:"Name of upload from CSV button"},addEmailsFieldName:{id:"adminPage.addEmailsFieldName.0",defaultMessage:"Emails",description:"Name of input for adding emails to workspace"},unspecifiedRoleDescription:{id:"adminPage.unspecifiedRoleDescription",defaultMessage:"Roles that were unspecified have been changed to Member.",description:"Description text for defaulting invite roles to member"},prohibitedExternalEmailDescription:{id:"adminPage.prohibitedExternalEmailDescription",defaultMessage:"The following emails are not a part of your organization's verified domains:",description:"Description text for error message"},prohibitedExternalEmailResolution:{id:"adminPage.prohibitedExternalEmailResolution",defaultMessage:'Either remove these emails, enable "Allow External Domain Invites" from your workspace settings, or verify these email domains.',description:"Description text for error message"},inviteTableHeaderEmail:{id:"adminPage.inviteTableHeaderEmail",defaultMessage:"Email",description:"Label for email column of invite table header"},inviteTableHeaderRole:{id:"adminPage.inviteTableHeaderRole",defaultMessage:"Role",description:"Label for role column of invite table header"},inviteRoleMember:{id:"adminPage.inviteRoleMember",defaultMessage:"Member",description:"Member role for workspace invite"},inviteRoleAdmin:{id:"adminPage.inviteRoleAdmin",defaultMessage:"Admin",description:"Admin role for workspace invite"},inviteRoleOwner:{id:"adminPage.inviteRoleOwner",defaultMessage:"Owner",description:"Owner role for workspace invite"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}.",description:"Error when uploading a file that is too large"},fileIncorrectTypeWarning:{id:"adminPage",defaultMessage:"Please upload a CSV file.",description:"Error when uploading a file that is not a CSV"},resendEmailsFieldName:{id:"adminPage.resendEmailsFieldName",defaultMessage:"Resend emails for existing invites",description:"Name of checkbox input for resending emails to workspace"},teamInviteModalNote:{id:"adminPage.teamInviteModalNote",defaultMessage:"Users that accept invites will be included as additional seats on your next invoice.",description:"Note for team plan invites that additional seats will be charged"},teamInviteModalNoteBeforeLink:{id:"adminPage.teamInviteModalNoteBeforeLink",defaultMessage:"Learn more about ",description:"Note for team plan invites that additional seats will be charged"},teamInviteModalNoteBillingLink:{id:"adminPage.teamInviteModalNoteBillingLink",defaultMessage:"billing",description:"billing word that will be a link to the billing help page"},inviteMessageLoading:{id:"adminPage.inviteMessageLoading",defaultMessage:"Sending out {numRows} invites, this may take a minute...",description:"Loading message when invites are being sent"},inviteSuccessToast:{id:"adminPage.inviteSuccessToast",defaultMessage:"Invited {numRows} {userStr} to {workspaceName}",description:"Message on successfully sending out invites"},inviteMemberInviteNextButton:{id:"adminPage.inviteMemberInviteNextButton",defaultMessage:"Next",description:"The title of the invite member modal next button"},inviteMemberInviteSubmitButton:{id:"adminPage.inviteMemberInviteSubmitButton",defaultMessage:"Send invites",description:"The title of the invite member modal submit button"},inviteMemberInviteSubmitButtonLoading:{id:"adminPage.inviteMemberInviteSubmitButtonLoading",defaultMessage:"Sending invites...",description:"Button label while inviting members"},inviteMemberInviteBackButton:{id:"adminPage.inviteMemberInviteBackButton",defaultMessage:"Back",description:"The title of the invite member modal back button"},inviteMessageFailure:{id:"adminPage.inviteMessageFailure",defaultMessage:"Unable to invite {emailsStr}",description:"Message that shows which emails were unsuccessful at being invited"},importCSVButtonExperimental:{id:"adminPage.importCSVButtonExperimental",defaultMessage:"Upload CSV",description:"Name of upload from CSV button"},reimportCSVButtonExperimental:{id:"adminPage.reimportCSVButtonExperimental",defaultMessage:"Re-upload CSV",description:"Name of re-upload from CSV button"},importCSVTooltip:{id:"adminPage.importCSVTooltip",defaultMessage:"Upload a CSV file. Your file must include an email on each line.",description:"Tooltip for import from CSV button"},seatsInvited:{id:"adminPage.seatsInvited",defaultMessage:"{enteredCount} of {seatCount} users",description:"Label for number of users invited"},seatsExceeded:{id:"adminPage.seatsExceeded",defaultMessage:"Inviting these users will bill {exceeded} additional {exceeded, plural, one {user} other {users}} on your workspace.",description:"Label for exceeding number of users invited"},emailInputPlaceholder:{id:"adminPage.emailInputPlaceholder",defaultMessage:"Email",description:"Placeholder for email input"},addEmailButton:{id:"adminPage.addEmailButton",defaultMessage:"Add more",description:"Button to add another email input"},duplicateEmailWarning:{id:"adminPage.duplicateEmailWarning",defaultMessage:"This email is a duplicate.",description:"Warning for duplicate email"},invalidEmailWarning:{id:"adminPage.invalidEmailWarning",defaultMessage:"Please enter a valid email address.",description:"Warning for invalid email"}};export{Qe as A,Je as a};
//# sourceMappingURL=dah07sijdybxwm9o.js.map
