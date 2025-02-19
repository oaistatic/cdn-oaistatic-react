import{g as se,r as M,j as e,M as d,au as te,c as w,a as D,u as re,b as ae}from"./l6lryjpkt8rv0lpy.js";import{lq as A,lr as ne,ls as oe,lt as U,lu as ie,lv as le,lw as de,lx as ce,fg as x,ly as P,fi as me,k5 as ue,aI as fe}from"./dvllb5fed1b4y7k1.js";import{g$ as ge,c$ as xe,d0 as Me,bK as he,h0 as ye,h1 as je,g as ve,gF as be,eM as pe,d as b,c2 as $,C as q,bT as H,P as p,a as C,b7 as Q,b9 as B,O as _,bR as v,bh as Ce}from"./mnkup87aq6tfilq5.js";import{G as we}from"./hli3paxjs6c9ftyy.js";var Se=ge,Re=xe,Ne="[object RegExp]";function Ee(s){return Re(s)&&Se(s)==Ne}var ke=Ee,_e=ke,Te=he,G=Me,I=G&&G.isRegExp,Oe=I?Te(I):_e,Ue=Oe,Be=ye,Ge=Be("length"),Ie=Ge,W="\\ud800-\\udfff",ze="\\u0300-\\u036f",Le="\\ufe20-\\ufe2f",Fe="\\u20d0-\\u20ff",De=ze+Le+Fe,Ae="\\ufe0e\\ufe0f",Pe="["+W+"]",N="["+De+"]",E="\\ud83c[\\udffb-\\udfff]",$e="(?:"+N+"|"+E+")",K="[^"+W+"]",Y="(?:\\ud83c[\\udde6-\\uddff]){2}",V="[\\ud800-\\udbff][\\udc00-\\udfff]",qe="\\u200d",Z=$e+"?",J="["+Ae+"]?",He="(?:"+qe+"(?:"+[K,Y,V].join("|")+")"+J+Z+")*",Qe=J+Z+He,We="(?:"+[K+N+"?",N,Y,V,Pe].join("|")+")",z=RegExp(E+"(?="+E+")|"+We+Qe,"g");function Ke(s){for(var t=z.lastIndex=0;z.test(s);)++t;return t}var Ye=Ke,Ve=Ie,Ze=A,Je=Ye;function Xe(s){return Ze(s)?Je(s):Ve(s)}var es=Xe,L=je,ss=ne,ts=A,rs=ve,as=Ue,ns=es,os=oe,is=be,F=pe,ls=30,ds="...",cs=/\w*$/;function ms(s,t){var o=ls,r=ds;if(rs(t)){var a="separator"in t?t.separator:a;o="length"in t?is(t.length):o,r="omission"in t?L(t.omission):r}s=F(s);var n=s.length;if(ts(s)){var c=os(s);n=c.length}if(o>=n)return s;var l=o-ns(r);if(l<1)return r;var i=c?ss(c,0,l).join(""):s.slice(0,l);if(a===void 0)return i+r;if(c&&(l+=i.length-l),as(a)){if(s.slice(l).search(a)){var u,f=i;for(a.global||(a=RegExp(a.source,F(cs.exec(a))+"g")),a.lastIndex=0;u=a.exec(f);)var h=u.index;i=i.slice(0,h===void 0?l:h)}}else if(s.indexOf(L(a),l)!=l){var g=i.lastIndexOf(a);g>-1&&(i=i.slice(0,g))}return i+r}var us=ms;const fs=se(us),gs=s=>M.createElement("svg",{width:24,height:24,viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},M.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1ZM6.75 3.75C6.75 4.16421 6.41421 4.5 6 4.5C5.58579 4.5 5.25 4.16421 5.25 3.75C5.25 3.33579 5.58579 3 6 3C6.41421 3 6.75 3.33579 6.75 3.75ZM6.75 6C6.75 5.58579 6.41421 5.25 6 5.25C5.58579 5.25 5.25 5.58579 5.25 6V8C5.25 8.41421 5.58579 8.75 6 8.75C6.41421 8.75 6.75 8.41421 6.75 8V6Z",fill:"currentColor"})),xs=91,T=100;function k(s){return s<T?"bg-[#fcf6e0] text-yellow-500 dark:bg-yellow-600 dark:text-yellow-100":"bg-orange-100 text-[#f48c15] dark:bg-orange-800 dark:text-orange-100"}function O(s){return ie()&&s!=null&&s>=xs}function Ms({memoryFullPct:s,className:t,children:o}){return O(s)?e.jsx("div",{className:b("rounded-lg border border-token-border-light p-1 text-sm",t),children:e.jsxs(te.div,{className:b("flex items-center overflow-hidden whitespace-nowrap rounded px-2 py-1.5",k(s)),initial:{width:0},animate:{width:`${s}%`},transition:{duration:.5},children:[e.jsx(d,{id:"6D2etG",defaultMessage:"{memoryFullPct}% full",values:{memoryFullPct:s}}),o]})}):null}function Ns({memoryFullPct:s}){return O(s)?e.jsxs("div",{className:"flex items-center justify-center",children:[e.jsx("div",{className:b("relative -mr-1 h-2 w-2 rotate-45 transform border-white/10",k(s))}),e.jsxs("div",{className:b("flex items-center rounded-lg px-3 py-1.5",k(s)),children:[e.jsx(d,{id:"x7M6HK",defaultMessage:"{memoryFullPct}%",values:{memoryFullPct:s}}),e.jsx($,{label:s<T?e.jsx(d,{id:"VXohcH",defaultMessage:"Memory is almost full. Once memory is full, new memories won’t be created. You can forget existing memories to make space."}):e.jsx(d,{id:"pQ9dnt",defaultMessage:"Memory is full. New memories won’t be created. You can forget existing memories to make space."}),children:e.jsx(gs,{className:"icon-sm ml-1 text-token-text-secondary"})})]})]}):null}function hs({memoryFullPct:s,className:t}){return O(s)?e.jsxs("div",{className:b("flex flex-col gap-2",t),children:[e.jsx(Ms,{memoryFullPct:s}),e.jsx("div",{className:"pl-3 text-sm text-token-text-secondary",children:s<T?e.jsx(d,{id:"z3LYM2",defaultMessage:"<strong>Memory almost full</strong>. Once memory is full, new memories won’t be created. You can forget existing memories to make space. <a>Learn more</a>.",values:{strong:r=>e.jsx("strong",{children:r}),a:r=>e.jsx("a",{href:U,target:"_blank",rel:"noopener noreferrer",className:"underline",children:r})}}):e.jsx(d,{id:"6rc4Jv",defaultMessage:"<strong>Memory is full</strong>. New memories won’t be created. You can forget existing memories to make space. <a>Learn more</a>.",values:{strong:r=>e.jsx("strong",{children:r}),a:r=>e.jsx("a",{href:U,target:"_blank",rel:"noopener noreferrer",className:"underline",children:r})}})})]}):null}function ys({description:s,onClose:t,onConfirm:o}){const r=w();return e.jsx(Q,{isOpen:!0,onClose:t,type:"success",title:r.formatMessage({id:"MemoriesModal.resetModalTitle",defaultMessage:"Are you sure?"}),description:s,primaryButton:e.jsx(B.Button,{title:r.formatMessage({id:"MemoriesModal.resetModalConfirm",defaultMessage:"Clear memory"}),color:"danger",onClick:o,"data-testid":"confirm-reset-memories-button"}),secondaryButton:e.jsx(B.Button,{title:r.formatMessage({id:"MemoriesModal.resetModalCancel",defaultMessage:"Cancel"}),color:"secondary",onClick:t})})}function js({onReset:s,gizmoId:t,memoryName:o}){const[r,a]=M.useState(!1),n=w(),c=q(),l=async()=>{p.logEvent(C.memorySettingsResetButtonConfirmed);try{await _.clearUserMemory(t),c.success(n.formatMessage({id:"ResetMemoriesButton.resetSuccess",defaultMessage:"Memory cleared."})),s?.(),a(!1)}catch{c.danger(n.formatMessage({id:"ResetMemoriesButton.resetFailed",defaultMessage:"Failed to clear memory."}))}};return e.jsxs(e.Fragment,{children:[e.jsx(H,{color:"danger-outline",onClick:()=>{p.logEvent(C.memorySettingsResetButtonClicked),a(!0)},"data-testid":"reset-memories-button",children:t?e.jsx(d,{id:"ResetMemoriesButton.resetGizmo",defaultMessage:"Clear this GPT's memory"}):e.jsx(d,{id:"ResetMemoriesButton.resetChatGPT",defaultMessage:"Clear memories"})}),r&&e.jsx(ys,{description:n.formatMessage({id:"MemoriesModal.resetGizmoModalDescription",defaultMessage:"{name} will forget everything it has remembered from your chats. This cannot be undone."},{name:o}),onClose:()=>a(!1),onConfirm:l})]})}function vs({gizmo:s,memory:t}){const o=w(),r=q(),a=D(),{mutate:n,isPending:c}=ae({mutationFn:f=>_.deleteMemory(f,s?.id),onSettled:()=>{a.invalidateQueries({queryKey:P(s?.id)})},onError:()=>{r.danger(o.formatMessage({id:"MemoriesModal.deleteFailed",defaultMessage:"Failed to forget memory"}),{id:"memoryDeleteFailed"})}}),[l,i]=M.useState(!1),u=o.formatMessage({id:"z2CNgB",defaultMessage:"Forget"});return e.jsxs(e.Fragment,{children:[e.jsxs(x.Row,{disabled:c,children:[e.jsx(x.Cell,{children:e.jsx("div",{className:"whitespace-pre-wrap py-2",children:t.content})}),e.jsx(x.Cell,{textAlign:"right",children:e.jsx(x.Actions,{children:e.jsx("button",{onClick:()=>{p.logEvent(C.memoryModalMemoryDeleteClicked),i(!0)},"aria-label":u,className:"text-token-text-tertiary hover:text-token-text-secondary",children:e.jsx($,{className:"leading-none",label:u,sideOffset:4,side:"top",children:e.jsx(me,{className:"icon-sm"})})})})})]}),l&&e.jsx(ue,{isOpen:!0,primaryButtonColor:"danger",title:u,confirmText:o.formatMessage({id:"fCn0ar",defaultMessage:"Forget"}),onConfirm:()=>{p.logEvent(C.memoryModalMemoryDeleteConfirmed),n(t.id),i(!1)},onClose:()=>{i(!1)},children:e.jsx(d,{id:"pZ/TCe",defaultMessage:'{name} will forget "{title}". This cannot be undone. <link>Learn more</link>',values:{name:s?.name??"ChatGPT",title:e.jsx("strong",{children:fs(t.content,{length:130,omission:"..."})}),link:f=>e.jsx("a",{href:"https://help.openai.com/en/articles/8590148-memory-faq#h_41527f643d",target:"_blank",className:"underline",rel:"noreferrer",children:f})}})})]})}function bs({selectedGizmoId:s,onSelect:t,items:o}){const r=o.find(n=>n.id===s);function a(n){return e.jsx(we,{isFirstParty:n.id===void 0,src:n.iconUrl??null,className:"icon-md"})}return e.jsx("div",{className:"mb-2 inline-flex rounded-md border border-token-border-medium",children:e.jsxs(v.Root,{children:[e.jsx(v.Trigger,{children:e.jsxs("div",{className:"flex items-center gap-2",children:[r?e.jsxs(e.Fragment,{children:[a(r),e.jsx("span",{className:"text-token-text-primary",children:r?.name})]}):e.jsx(d,{id:"MemoriesModal.unknownGizmo",defaultMessage:"Unknown GPT"}),e.jsx(fe,{className:"icon-sm text-token-text-tertiary"})]})}),e.jsx(v.Portal,{children:e.jsx(v.Content,{children:o.map(n=>e.jsxs(v.Item,{className:"flex items-center gap-3",onClick:()=>{t(n.id)},children:[a(n),n.name]},n.id))})})]})})}const R=Ce.div`flex h-full items-center justify-center pb-8 text-sm text-token-text-tertiary rounded-lg border border-token-border-light`;function ps({onClose:s,initialGizmoId:t}){const o=w(),r=D(),a=le(),[n,c]=M.useState(t),l=de();M.useEffect(()=>{p.logEvent(C.memoryModalShown)},[]);const{data:i,isLoading:u,isError:f,refetch:h}=ce(n,!0,a),g=i?.memories,{data:X,refetch:ee}=re({queryKey:["memory_gizmos"],queryFn:()=>_.getGizmosWithMemory(),refetchOnMount:"always"}),S=[{id:void 0,name:"ChatGPT",iconUrl:null},...X?.items?.map(({gizmo:m})=>({id:m.id,name:m.display.name,iconUrl:m.display.profile_picture_url}))??[]],y=S.find(m=>m.id===n);let j;return u?j=e.jsx(R,{children:e.jsx(d,{id:"MemoriesModal.loading",defaultMessage:"Loading..."})}):f?j=e.jsx(R,{children:e.jsxs("div",{className:"max-w-sm text-center",children:[e.jsx("div",{className:"mb-4 text-red-500",children:e.jsx(d,{id:"MemoriesModal.somethingWentWrong",defaultMessage:"Something went wrong..."})}),e.jsx("div",{children:e.jsx(H,{color:"secondary",onClick:()=>{h()},children:e.jsx(d,{id:"MemoriesModal.retry",defaultMessage:"Retry"})})})]})}):!g||g.length===0?j=e.jsx(R,{children:e.jsx("div",{className:"max-w-sm text-center",children:a?e.jsx(d,{id:"MemoriesModal.noMemories.1",defaultMessage:"As you chat with {name}, the details and preferences it remembers will be shown here.",values:{name:y?.name??"ChatGPT"}}):e.jsx(d,{id:"MemoriesModal.noMemoriesAndDisabled",defaultMessage:"Memory is disabled. ChatGPT won't use or create memories."})})}):j=e.jsx(x.Root,{className:"h-full",size:"compact",bordered:!0,children:e.jsx(x.Body,{children:g.map(m=>e.jsx(vs,{gizmo:y?{id:y.id,name:y.name}:void 0,memory:m},m.id))})}),e.jsxs(Q,{isOpen:!0,onClose:s,size:"custom",className:"max-w-5xl",type:"success",title:o.formatMessage({id:"MemoriesModal.title",defaultMessage:"Memory"}),showCloseButton:!0,children:[l&&S.length>1&&e.jsx("div",{className:"mb-4",children:e.jsx(bs,{selectedGizmoId:n,items:S,onSelect:m=>{r.invalidateQueries({queryKey:P(m)}),c(m)}})}),e.jsx(hs,{memoryFullPct:i?.memoryFullPct,className:"mb-5"}),e.jsx("div",{className:"h-[24rem]",children:j}),e.jsx("div",{className:"mt-5 flex justify-end",children:e.jsx(js,{onReset:()=>{h(),ee(),n&&c(void 0)},gizmoId:n,memoryName:y?.name??"ChatGPT"})}),null]})}const Es=Object.freeze(Object.defineProperty({__proto__:null,default:ps},Symbol.toStringTag,{value:"Module"}));export{Ns as M,js as R,ps as a,Es as b};
//# sourceMappingURL=b64pelfetvxzbp8z.js.map
