import{L as v,z as B,M as K,N as D,O as w,P as L,Q as P,R as E,U as k,H as C}from"./j4xe1fdohr6xk09p.js";import{t as T}from"./gzm2pyuieq14d2cd.js";import{fr as z,P as R,a as x,D as O,C as F,ai as I,dT as U,b8 as Z,r as G,q as N,m as V,n as _,s as H,fs as q,ft as Q,fu as W,cL as $,h as j}from"./dze2l9y9kn6nwat0.js";import{r as J}from"./cg166fqqcxkeiosv.js";const X=/```.*?\n([\s\S]+?)\n?```[^`]*$/gms;function f(){return/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)}const e={Mod:"mod",Comma:",",Space:"Space"," ":"Space"," ":"Space",...v.Key},Y={[e.Mod]:f()?"⌘":"Ctrl",[e.Meta]:f()?"⌘":"Win",[e.Comma]:",",[e.Enter]:"⏎",[e.Escape]:"Esc",[e.ArrowUp]:"↑",[e.ArrowDown]:"↓",[e.ArrowLeft]:"←",[e.ArrowRight]:"→",[e.Backspace]:"⌫",[e.Delete]:"⌦",[e.Tab]:"⇥",[e.Control]:"Ctrl",[e.Shift]:"Shift"},ce=t=>t.map(o=>Y[o]??o),a=j({newChat:{id:"keyboardActions.newChat",defaultMessage:"Open new chat"},focusPromptTextarea:{id:"keyboardActions.focusPromptTextarea",defaultMessage:"Focus chat input"},copyLastCodeBlock:{id:"keyboardActions.copyLastCodeBlock",defaultMessage:"Copy last code block"},copyLastResponse:{id:"keyboardActions.copyLastResponse",defaultMessage:"Copy last response"},toggleCustomInstructions:{id:"keyboardActions.toggleCustomInstructions",defaultMessage:"Set custom instructions"},navigationToggle:{id:"keyboardActions.navigationToggle",defaultMessage:"Toggle sidebar"},deleteChat:{id:"keyboardActions.deleteChat",defaultMessage:"Delete chat"},archiveChat:{id:"keyboardActions.archiveChat",defaultMessage:"Archive chat"},zoomIn:{id:"keyboardActions.zoomIn",defaultMessage:"Zoom in"},zoomOut:{id:"keyboardActions.zoomOut",defaultMessage:"Zoom out"},resetZoom:{id:"keyboardActions.resetZoom",defaultMessage:"Reset zoom"},toggleKeyboardActions:{id:"keyboardActions.toggleKeyboardActions",defaultMessage:"Show shortcuts"}}),ee=new z,oe=({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n,toaster:s,isFannyPackEnabled:d,isZoomEnabled:i,isElectronClient:c,isScreenArch:l,sidebarActions:u})=>{const g=c?[[e.Mod,"n"]]:[];return[{key:"newChat",action:t||Z,actionMessageDescriptor:a.newChat,group:"Core",keyboardBinding:[e.Mod,e.Shift,"o"],altKeyboardBindings:d?[...g]:[...g,[e.Mod,"k"]]},{key:"focusPromptTextarea",action:n??T,actionMessageDescriptor:a.focusPromptTextarea,group:"Chat",keyboardBinding:[e.Shift,e.Escape]},{key:"copyLastCodeBlock",action:r=>{if(o!=null){const y=G.getConversationTurns(N(o));for(let b=y.length-1;b>=0;b--){const{messages:S}=y[b],m=[...S.reduce((h,p)=>p.err==null&&p.message.author.role===V.Assistant&&p.message.recipient==="all"?h+(h?`

`:"")+_(p.message):h,"").matchAll(X)],M=m.length?m[m.length-1][1]:null;if(M!=null){P(M,s,r).then(()=>{s.success("Copied code block to clipboard")});break}}}},actionMessageDescriptor:a.copyLastCodeBlock,group:"Chat",keyboardBinding:[e.Mod,e.Shift,";"],altKeyboardBindings:[[e.Mod,e.Shift,":"]]},{key:"copyLastResponse",action:r=>{o!=null&&E(o,s,r,"keyboard").then(()=>{s.success("Last response copied to clipboard")})},actionMessageDescriptor:a.copyLastResponse,group:"Chat",keyboardBinding:[e.Mod,e.Shift,"c"]},{key:"toggleCustomInstructions",action:()=>k.toggleModal(C.UserContext),actionMessageDescriptor:a.toggleCustomInstructions,group:"Settings",keyboardBinding:[e.Mod,e.Shift,"i"]},{key:"navigationToggle",action:()=>{l?u.toggleSidebar():k.toggleNavSidebar()},actionMessageDescriptor:a.navigationToggle,group:"Core",keyboardBinding:[e.Mod,e.Shift,"s"]},{key:"deleteChat",action:()=>{if(o){const r=H(o);r&&ee.publish({kind:"deleteChat",serverThreadId:r})}},actionMessageDescriptor:a.deleteChat,group:"Chat",keyboardBinding:[e.Mod,e.Shift,e.Backspace],altKeyboardBindings:[[e.Mod,e.Shift,e.Delete]]},{key:"zoomIn",enabled:i,action:()=>q(),actionMessageDescriptor:a.zoomIn,group:"Chat",keyboardBinding:[e.Mod,"+"],altKeyboardBindings:[[e.Mod,"="]]},{key:"zoomOut",enabled:i,action:()=>Q(),actionMessageDescriptor:a.zoomOut,group:"Chat",keyboardBinding:[e.Mod,"-"]},{key:"resetZoom",enabled:i,action:()=>W(),actionMessageDescriptor:a.resetZoom,group:"Chat",keyboardBinding:[e.Mod,"0"]},{key:"toggleKeyboardActions",action:()=>k.toggleModal(C.KeyboardActions),actionMessageDescriptor:a.toggleKeyboardActions,group:"Settings",keyboardBinding:[e.Mod,"/"]}]},A=t=>K(t,o=>{R.logEvent(x.keyboardShortcut,{keyboardActionKey:o.key}),O.addAction("chatgpt_keyboard_shortcut",{keyboardActionKey:o.key})},{enabled:!0}),te=({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n}={})=>{const s=F(),{isFannyPackEnabled:d}=D(),{value:i}=I("842034403"),c=w(),l=U(),u=$&&i,{actions:g}=L();return J.useMemo(()=>oe({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n,toaster:s,isElectronClient:c,isFannyPackEnabled:d,isZoomEnabled:u,isScreenArch:l,sidebarActions:g}).filter(({enabled:y=!0})=>y),[t,o,n,s,c,d,u,l,g])},de=({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n})=>{const s=te({resetThreadAction:t,clientThreadId:o,focusPromptTextareaAction:n}),i=B(c=>c.isVoiceActive)?[]:s;A(i)},ge=({setSelectedVoiceIndex:t,prevVoiceIndex:o,nextVoiceIndex:n})=>{const s=[{key:"selectPrevVoice",action:()=>{t(o)},actionMessageDescriptor:{defaultMessage:"Select previous voice"},group:"Chat",keyboardBinding:[e.ArrowLeft]},{key:"selectNextVoice",action:()=>{t(n)},actionMessageDescriptor:{defaultMessage:"Select next voice"},group:"Chat",keyboardBinding:[e.ArrowRight]}];A(s)};export{ee as G,e as K,te as a,ge as b,ce as g,f as i,de as u};
//# sourceMappingURL=m5tfr0dtbetugou5.js.map
