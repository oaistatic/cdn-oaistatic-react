import{e_ as A,ae as g,a6 as C,aj as E,dg as R,a0 as O,a1 as y,O as v,eD as w,P as L,a as M}from"./mnkup87aq6tfilq5.js";import{h as j,d as x,z as S,r as i,av as T,j as s}from"./l6lryjpkt8rv0lpy.js";import{A as b}from"./gabu6sfpo00gt98h.js";import{bE as D}from"./dvllb5fed1b4y7k1.js";import{C as o}from"./d5w9dlpau5b0ddrj.js";import"./gaz67n36d71l6yif.js";import"./il55y7bc33l80dn8.js";const P={pro:"chatgptpro",plus:"chatgptplusplan"},_=Object.keys(o),N={oiw216z:"sora_redirect",vza493q:"operator_redirect"};function z(r){r&&o[r]&&(window.location.href=o[r])}const G=A(function(){const[h]=j(),n=x(),u=g(),{plan:t}=S(),e=h.get("checkout_from"),l=i.useRef(!1),a=C(),p=i.useMemo(()=>a?.subscriptionAnalyticsParams,[a]),{value:c,isLoading:m}=E("1719651090");if(!t||!(t in P))throw T("/");return i.useEffect(()=>{if(!a||m||l.current)return;if(l.current=!0,e==="vza493q"){a.hasPaidSubscription()&&a.isPro()?window.location.href=o[e]:c||n("/");return}(async()=>{const d=e&&_.includes(e)?N[e]:"purchase_plan_redirect";try{e&&_.includes(e)&&O.setItem(y.CheckoutFrom,e);const f=await v.getCheckoutLink(u,"Sora",{plan_name:P[t],billing_details:{currency:w}});L.logEvent(M.accountPayPurchasePlanRedirect,{...p,plan:t,location:d}),window.location.href=f.url}catch{D(n,d)}})()},[n,u,t,e,p,m,c,a]),s.jsxs(s.Fragment,{children:[a&&e==="vza493q"&&c&&s.jsx(b,{currentAccount:a,variant:"operator",onClose:()=>z(e)}),s.jsx("div",{className:"flex h-full w-full items-center justify-center",children:s.jsx(R,{})})]})});export{G as default};
//# sourceMappingURL=m5esorrhoumn6cpd.js.map
