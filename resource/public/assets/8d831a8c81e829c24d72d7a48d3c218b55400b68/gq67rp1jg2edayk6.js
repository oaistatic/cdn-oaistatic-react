const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/k3ypx8jv7ihbuh7q.js","assets/n1tvutderx19k1zs.js"])))=>i.map(i=>d[i]);
import{c as A,r as u,j as e,aw as o0,au as F,e as r0}from"./n1tvutderx19k1zs.js";import{dZ as l0,gD as d0,gE as G,cJ as c0,cB as m0,cK as x0,cC as g0,cE as u0,d as C,cI as f0,b_ as h0,bY as N,f_ as p0,j as X,bs as k0,bt as y0,bZ as B,er as Y,eF as I0,M as b0,fN as w0,aE as v0,au as j0,dl as M0,c5 as z,ai as C0,K as S0,ae as E0,bo as Z,S as W,a as P,P as $,B as _0,ep as N0}from"./efuue3ezs0mj4ucx.js";import{S as V0}from"./bei4zk14rknuqpj2.js";import{bK as D0,gR as F0,dr as A0,hu as T0,bR as P0,hv as O0,hw as D,ct as R,cs as R0,a7 as L0,hx as G0,ce as B0,bJ as z0,dz as W0,hy as $0,gu as e0,gw as a0,dJ as s0,hz as H0,bP as H,cV as U0,Q as K0}from"./c87uv1mutc86tiqk.js";import{E as J0}from"./jqzilhinf9ixym20.js";import{u as q0,I as Q0}from"./no551upyadws5ckb.js";import{T as V}from"./ecs2ptmt646v6gvn.js";import"./oszw1knsi7z008c4.js";import"./d995zjnlydagrugw.js";import"./bh0nczk7jf5nipy7.js";import"./gb5z15gr4uo6e2ww.js";import"./jy24clh9s5sbm6a3.js";import"./ishe91rr928a0b40.js";const X0={enter:a=>({zIndex:0,x:a===-1?"10%":"-10%",opacity:0}),center:{zIndex:1,x:0,opacity:1},exit:a=>({zIndex:0,x:a===1?"10%":"-10%",opacity:0})},Y0={enter:{opacity:0,y:"10%"},visible:{opacity:1,y:0},exit:{opacity:0,y:"10%"}},U=1e3,K=1e3,J=(a,s)=>Math.abs(a)*s;function Z0(a){const s=A(),i=l0(),o=d0(),f=[G.Small,G.Mobile].includes(o),[p,d]=u.useState({width:0,height:0}),[r,c]=u.useState(!1),[l,h]=u.useState(a.image),[y,w]=u.useState(!1),v=p.width>0&&p.height>0,g=u.useRef(null),[k,j]=u.useState(0);u.useEffect(()=>{if(!l.url)throw new Error("ExpandableImage requires a src");const t=new Image;t.onload=()=>{d({width:t.naturalWidth,height:t.naturalHeight})},t.onerror=()=>{},t.src=l.url},[l.url]),u.useEffect(()=>{const t=g.current;if(y)return t?.addEventListener("keydown",E),()=>{t?.removeEventListener("keydown",E)};h(a.image)},[y]);function x(){h(t=>{const m=(a.images.findIndex(I=>I.url===t.url)+1)%a.images.length;return a.images[m]}),j(-1)}function M(){h(t=>{const n=a.images.findIndex(I=>I.url===t.url),m=n>0?(n-1)%a.images.length:a.images.length-1;return a.images[m]}),j(1)}function S(t){w(t),t&&a.onOpen?.(l)}function E(t){t.key==="ArrowLeft"?M():t.key==="ArrowRight"&&x()}const T=a.images.findIndex(t=>t.url===l.url);return e.jsxs(c0,{onOpenChange:S,children:[e.jsx(m0,{disabled:!v,className:a.className,"aria-label":s.formatMessage(_.showImage),children:a.children}),e.jsx(x0,{container:i?.document.body,children:e.jsx(g0,{className:"fixed inset-0 z-20 flex items-center justify-center bg-black/90 backdrop-blur-xl radix-state-open:animate-show",children:e.jsxs(u0,{className:C("relative flex h-[100dvh] w-screen justify-stretch divide-x divide-white/10 focus:outline-none radix-state-open:animate-contentShow"),ref:g,children:[e.jsx("div",{className:C("flex flex-1 transition-[flex-basis]",!r&&"md:basis-[75vw]"),children:e.jsxs("div",{className:"flex flex-1 flex-col md:p-6",children:[e.jsxs("div",{className:"flex justify-between px-6 py-2 pt-6 text-white sm:mb-4 md:mt-2 md:px-0 md:py-2",children:[e.jsx(f0,{asChild:!0,children:e.jsx("button",{"aria-label":s.formatMessage(_.closeModal),children:e.jsx(h0,{})})}),e.jsx("div",{children:!f&&e.jsxs(e.Fragment,{children:[a.getActions?.(l)?.map((t,n)=>e.jsx(N,{color:"ghost",size:"small",onClick:t.onClick,"aria-label":t.ariaLabel,disabled:t.disabled,icon:t.icon},n)),e.jsx(N,{color:"ghost",size:"small",onClick:()=>c(t=>!t),"aria-label":s.formatMessage(_.toggleSidebar),className:"md:inline-flex",icon:D0})]})})]}),e.jsx("div",{className:"relative flex flex-1 flex-col items-center justify-center overflow-hidden",children:e.jsx(o0,{initial:!1,custom:k,children:e.jsxs(F.div,{className:"absolute grid h-full w-full grid-rows-2",custom:k,variants:X0,drag:"x",dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(t,{offset:n,velocity:m})=>{const I=J(n.x,m.x);I<-U?x():I>U&&M()},children:[e.jsx(F.img,{src:l.url,alt:l.alt,className:"row-span-4 mx-auto h-full object-scale-down",onPanEnd:(t,{offset:n,velocity:m})=>{const I=J(n.y,m.y);I<-K?c(!0):I>K&&c(!1)}},l.url),f&&r&&e.jsx(F.div,{className:"flex text-white",variants:Y0,initial:"enter",animate:"visible",exit:"exit",transition:{y:{type:"spring",stiffness:300,damping:30},opacity:{duration:.2}},children:a.metadataRenderer(l)})]},l.url)})}),a.images.length>1?e.jsxs("div",{className:"flex items-center justify-center gap-4 p-8 text-white",children:[e.jsx(N,{color:"ghost",size:"small",onClick:M,"aria-label":s.formatMessage(_.previousImage),icon:p0}),a.images.map((t,n)=>e.jsx("img",{src:t.url,alt:t.alt??"",className:C("h-12 w-12 cursor-pointer rounded object-cover transition duration-300 hover:opacity-100",t.url===l.url?"ring-2 ring-white ring-offset-4 ring-offset-black":"opacity-25"),onClick:()=>{h(t),j(n<T?1:-1)},"aria-label":s.formatMessage(_.showImage),role:"button"},t.url)),e.jsx(N,{color:"ghost",size:"small",onClick:x,"aria-label":s.formatMessage(_.nextImage),icon:V0})]}):null]})}),e.jsx("div",{className:C("hidden items-center justify-start overflow-hidden bg-gray-900 text-white transition-[flex-basis] duration-500 md:flex",r?"md:basis-[25vw]":"md:basis-0"),children:e.jsx("div",{className:"w-[25vw] min-w-[25vw]",children:a.metadataRenderer(l)})})]})})})]})}const _=X({showImage:{id:"imageViewer.showImage",defaultMessage:"Show Image"},closeModal:{id:"imageViewer.closeModal",defaultMessage:"Close Modal"},toggleSidebar:{id:"imageViewer.toggleSidebar",defaultMessage:"Toggle Sidebar"},nextImage:{id:"imageViewer.nextImage",defaultMessage:"Next Image"},previousImage:{id:"imageViewer.previousImage",defaultMessage:"Previous Image"}}),ee=k0(()=>y0(()=>import("./k3ypx8jv7ihbuh7q.js"),__vite__mapDeps([0,1])));function ae(a){const s=a.matchTextColor??!0,i=u.useRef(null),[o,f]=u.useState(null);u.useEffect(()=>{if(!i.current||!s)return;const d=()=>{i.current&&f(getComputedStyle(i.current).color)},r=new MutationObserver(()=>{d()});return r.observe(window.document.documentElement,{attributes:!0,attributeFilter:["class","style"]}),r.observe(i.current,{attributes:!0,attributeFilter:["class","style"]}),d(),()=>r.disconnect()},[s]);const p=u.useMemo(()=>{if(!s)return a.animationData;const d=o?.match(/\d+/g)?.map(Number).map(c=>c/255);if(!d)return null;d.push(1);const r=a.animationData;return"layers"in r&&Array.isArray(r.layers)&&r.layers.forEach(c=>{"ty"in c&&c.ty===4&&"shapes"in c&&Array.isArray(c.shapes)&&c.shapes.forEach(l=>{"it"in l&&Array.isArray(l.it)&&l.it.forEach(h=>{h.ty==="fl"&&(h.c.k=d)})})}),r},[a.animationData,o,s]);return e.jsx("div",{ref:i,className:a.className,children:e.jsx(ee,{animationData:p,loop:!0,autoplay:!0},o)})}const se="5.7.5",te=100,ie=0,ne=400,oe=20,re=20,le="Comp 1",de=0,ce=[],me=[{ddd:0,ind:1,ty:3,nm:"",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:1,k:[{t:50,s:[0],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:100,s:[90],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:150,s:[180],i:{x:[1],y:[1]},o:{x:[0],y:[0]}},{t:250,s:[180],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:300,s:[270],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:350,s:[360],i:{x:[1],y:[1]},o:{x:[0],y:[0]}}],ix:2},p:{a:0,k:[10,10],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,ip:0,op:400,st:0,bm:0,hd:!1},{ddd:0,ind:2,ty:4,nm:"moon",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,hd:!1,parent:1,shapes:[{ty:"gr",hd:!1,it:[{ty:"sh",hd:!1,d:1,ks:{a:0,k:{c:!1,v:[[2.66029,2.2502500000000003],[2.94257,2.2253300000000005],[3.16411,2.15946],[3.3642200000000004,2.1007100000000003],[3.4624800000000002,2.13988],[3.5,2.24491],[3.48749,2.3303700000000003],[3.45176,2.4336200000000003],[3.17483,2.87157],[2.79071,3.2080400000000004],[2.32261,3.42523],[1.8027100000000003,3.5],[1.08448,3.36648],[.5109700000000004,2.9926200000000005],[.13400000000000034,2.4229400000000005],[0,1.70727],[.13935999999999993,1.0129700000000001],[.5306300000000004,.4290440000000002],[1.1219999999999999,.03738600000000025],[1.2095500000000001,.00890100000000027],[1.2881600000000004,2220446049250313e-31],[1.4007100000000001,.042726000000000264],[1.4435900000000004,.14954200000000017],[1.4275099999999998,.23855500000000018],[1.3864200000000002,.33290900000000023],[1.3256800000000002,.49313300000000027],[1.2881600000000004,.6960800000000003],[1.2756499999999997,.9150600000000002],[1.3703399999999997,1.4722800000000003],[1.6472699999999998,1.8942000000000003],[2.0832100000000002,2.15946],[2.66029,2.2502500000000003],[2.66029,2.2502500000000003],[2.66029,2.2502500000000003]],i:[[0,0],[-.09170999999999996,.016619999999999635],[-.05597999999999992,.027300000000000324],[-.05837000000000003,0],[-.02382000000000062,-.02610999999999919],[0,-.04390999999999945],[.00833999999999957,-.03204999999999991],[.016680000000000028,-.03678999999999988],[.1131599999999997,-.13056],[.14412000000000003,-.09376000000000051],[.16795000000000027,-.04985000000000017],[.17985000000000007,0],[.21915999999999958,.08901000000000003],[.16317999999999966,.16141999999999967],[.08932999999999947,.2183799999999998],[0,.25873999999999997],[-.09290999999999983,.21957000000000004],[-.16794000000000064,.16853600000000002],[-.22510999999999992,.09138599999999997],[-.026209999999999845,.005934999999999913],[-.025020000000000486,0],[-.02739000000000047,-.028484000000000065],[0,-.04272599999999993],[.010720000000000063,-.030856999999999912],[.017869999999999386,-.03323100000000001],[.01666999999999952,-.06290200000000001],[.008329999999999949,-.07357999999999998],[0,-.07359000000000004],[-.06312999999999924,-.16497000000000006],[-.12029999999999941,-.11630999999999991],[-.17032999999999987,-.06170999999999971],[-.21321000000000012,0],[0,0],[0,0]],o:[[.09647000000000006,0],[.09172000000000047,-.016620000000000523],[.07504000000000044,-.03915999999999986],[.041679999999999495,0],[.025009999999999977,.026110000000000078],[0,.02493000000000034],[-.00714000000000059,.03204000000000029],[-.07146000000000008,.16141000000000005],[-.11195999999999984,.1305500000000004],[-.14412000000000003,.09493999999999936],[-.1667500000000004,.04985000000000017],[-.2596600000000002,0],[-.21916000000000047,-.0878300000000003],[-.16198000000000068,-.16141000000000005],[-.08933000000000035,-.21838000000000068],[0,-.24329999999999985],[.0929000000000002,-.22075],[.16913,-.16971899999999995],[.03216000000000019,-.013056000000000068],[.02738999999999958,-.005933999999999995],[.04763999999999946,0],[.02858999999999945,.028484999999999983],[0,.028484000000000065],[-.009520000000000195,.02967200000000003],[-.02382000000000062,.04391400000000001],[-.016680000000000028,.06171700000000002],[-.008340000000000458,.07240000000000002],[0,.20650999999999997],[.06432000000000038,.16496999999999984],[.1203000000000003,.11512999999999995],[.1715099999999996,.06052999999999997],[0,0],[0,0],[.09647000000000006,0]]}}},{ty:"fl",c:{a:0,k:[.6941176470588235,.3843137254901961,.9921568627450981],ix:2},o:{a:0,k:100,ix:2},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tm",s:{a:0,k:0,ix:2},e:{a:0,k:100,ix:2},o:{a:0,k:0,ix:2},m:1,hd:!1},{ty:"tr",hd:!1,p:{a:0,k:[3.75,5.5],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2},r:{a:0,k:-180,ix:2},o:{a:1,k:[{t:50,s:[0],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:100,s:[0],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:140,s:[100],i:{x:[1],y:[1]},o:{x:[0],y:[0]}},{t:250,s:[100],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:280,s:[0],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:350,s:[0],i:{x:[1],y:[1]},o:{x:[0],y:[0]}}],ix:2},sk:{a:0,k:0,ix:2},sa:{a:0,k:0,ix:2}}]}],ip:0,op:400,st:0,bm:0},{ddd:0,ind:3,ty:4,nm:"sun",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,hd:!1,parent:1,shapes:[{ty:"gr",hd:!1,it:[{ty:"el",hd:!1,d:1,s:{a:0,k:[3.00708,3.00704],ix:2},p:{a:0,k:[0,0],ix:2}},{ty:"fl",c:{a:0,k:[.6941176470588235,.3843137254901961,.9921568627450981],ix:2},o:{a:0,k:100,ix:2},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tm",s:{a:0,k:0,ix:2},e:{a:0,k:100,ix:2},o:{a:0,k:0,ix:2},m:1,hd:!1},{ty:"tr",hd:!1,p:{a:0,k:[-2.1999998092651376,-3.507655143737793],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2},r:{a:0,k:0,ix:2},o:{a:1,k:[{t:50,s:[100],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:80,s:[0],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:150,s:[0],i:{x:[1],y:[1]},o:{x:[0],y:[0]}},{t:250,s:[0],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:300,s:[0],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:340,s:[100],i:{x:[1],y:[1]},o:{x:[0],y:[0]}}],ix:2},sk:{a:0,k:0,ix:2},sa:{a:0,k:0,ix:2}}]}],ip:0,op:400,st:0,bm:0},{ddd:0,ind:4,ty:4,nm:"Shape Layer 1",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,hd:!1,parent:1,shapes:[{ty:"gr",hd:!1,it:[{ty:"rc",hd:!1,d:1,s:{a:0,k:[18,18],ix:2},p:{a:0,k:[0,0],ix:2},r:{a:0,k:0,ix:2}},{ty:"fl",c:{a:0,k:[1,.8392156862745098,.25098039215686274],ix:2},o:{a:0,k:0,ix:2},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tm",s:{a:0,k:0,ix:2},e:{a:0,k:100,ix:2},o:{a:0,k:0,ix:2},m:1,hd:!1},{ty:"tr",hd:!1,p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2},r:{a:0,k:0,ix:2},o:{a:0,k:100,ix:2},sk:{a:0,k:0,ix:2},sa:{a:0,k:0,ix:2}}]}],ip:0,op:400,st:0,bm:0},{ddd:0,ind:5,ty:3,nm:"",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:1,k:[{t:50,s:[9.999999284744263,10.17067003250122],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:100,s:[9.999999284744263,11.17067003250122],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:150,s:[9.999999284744263,10.17067003250122],i:{x:[1],y:[1]},o:{x:[0],y:[0]}},{t:250,s:[9.999999284744263,10.17067003250122],i:{x:[.2],y:[1]},o:{x:[.5],y:[-.5]}},{t:300,s:[9.999999284744263,11.17067003250122],i:{x:[.5],y:[1.5]},o:{x:[.8],y:[0]}},{t:350,s:[9.999999284744263,10.17067003250122],i:{x:[1],y:[1]},o:{x:[0],y:[0]}}],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,ip:0,op:400,st:0,bm:0,hd:!1},{ddd:0,ind:6,ty:4,nm:"line",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,hd:!1,parent:5,shapes:[{ty:"gr",hd:!1,it:[{ty:"sh",hd:!1,d:1,ks:{a:0,k:{c:!1,v:[[0,0],[4.18847,0],[4.18847,.3221899999999991],[0,.3221899999999991],[0,0],[0,0],[0,0]],i:[[0,0],[-1.396156666666667,0],[0,-.1073966666666664],[1.396156666666666,0],[0,.1073966666666664],[0,0],[0,0]],o:[[1.396156666666666,0],[0,.1073966666666664],[-1.396156666666666,0],[0,-.1073966666666664],[0,0],[0,0],[1.396156666666666,0]]}}},{ty:"fl",c:{a:0,k:[.6941176470588235,.3843137254901961,.9921568627450981],ix:2},o:{a:0,k:100,ix:2},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tm",s:{a:0,k:0,ix:2},e:{a:0,k:100,ix:2},o:{a:0,k:0,ix:2},m:1,hd:!1},{ty:"tr",hd:!1,p:{a:0,k:[-2.900433540344238,3.517374992370605],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2},r:{a:0,k:0,ix:2},o:{a:0,k:100,ix:2},sk:{a:0,k:0,ix:2},sa:{a:0,k:0,ix:2}}]}],ip:0,op:400,st:0,bm:0},{ddd:0,ind:7,ty:4,nm:"small",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,hd:!1,parent:5,shapes:[{ty:"gr",hd:!1,it:[{ty:"sh",hd:!1,d:1,ks:{a:0,k:{c:!1,v:[[3.215839629698487,.4155599999999988],[1.871029629698487,.4155599999999988],[.08033652969848645,3.996899999999999],[.7527406296984864,5.084849999999998],[4.334119629698487,5.084849999999998],[5.006529629698486,3.996899999999999],[3.215839629698487,.4155599999999988],[3.215839629698487,.4155599999999988],[3.215839629698487,.4155599999999988]],i:[[0,0],[.2770400000000002,-.5540800000000004],[.5968977000000001,-1.19378],[-.5588519999999999,0],[-1.193793,0],[.2499200000000004,.4998400000000003],[.5968966666666669,1.19378],[0,0],[0,0]],o:[[-.27705,-.5540800000000004],[-.5968977,1.1937799999999994],[-.2499269,.4998400000000003],[1.193793,0],[.5588600000000001,0],[-.5968966666666669,-1.19378],[0,0],[0,0],[-.27705,-.5540800000000004]]}}},{ty:"fl",c:{a:0,k:[.6941176470588235,.3843137254901961,.9921568627450981],ix:2},o:{a:0,k:100,ix:2},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tm",s:{a:0,k:0,ix:2},e:{a:0,k:100,ix:2},o:{a:0,k:0,ix:2},m:1,hd:!1},{ty:"tr",hd:!1,p:{a:0,k:[-6.000233173370361,-1.244344711303711],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2},r:{a:0,k:0,ix:2},o:{a:0,k:100,ix:2},sk:{a:0,k:0,ix:2},sa:{a:0,k:0,ix:2}}]}],ip:0,op:400,st:0,bm:0},{ddd:0,ind:8,ty:4,nm:"big",sr:1,ks:{o:{a:0,k:100,ix:2},r:{a:0,k:0,ix:2},p:{a:0,k:[0,0],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2}},ao:0,hd:!1,parent:5,shapes:[{ty:"gr",hd:!1,it:[{ty:"sh",hd:!1,d:1,ks:{a:0,k:{c:!1,v:[[4.719378057214302,.41556],[3.374568057214302,.41556],[.08033805721430198,7.00394],[.7527380572143016,8.0919],[7.341158057214302,8.0919],[8.0136580572143,7.00394],[4.719378057214302,.41556],[4.719378057214302,.41556],[4.719378057214302,.41556]],i:[[0,0],[.27705,-.55408],[1.098076666666667,-2.196126666666667],[-.5588499999999996,0],[-2.196140000000002,0],[.2499000000000002,.4998400000000007],[1.098093333333333,2.196126666666667],[0,0],[0,0]],o:[[-.2770500000000009,-.55408],[-1.098076666666667,2.196126666666666],[-.24993,.4998400000000007],[2.19614,0],[.5588999999999995,0],[-1.098093333333332,-2.196126666666666],[0,0],[0,0],[-.2770500000000009,-.55408]]}}},{ty:"fl",c:{a:0,k:[.6941176470588235,.3843137254901961,.9921568627450981],ix:2},o:{a:0,k:100,ix:2},r:1,bm:0,nm:"Fill 1",mn:"ADBE Vector Graphic - Fill",hd:!1},{ty:"tm",s:{a:0,k:0,ix:2},e:{a:0,k:100,ix:2},o:{a:0,k:0,ix:2},m:1,hd:!1},{ty:"tr",hd:!1,p:{a:0,k:[-2.093742370605469,-4.256064891815186],ix:2},a:{a:0,k:[0,0],ix:2},s:{a:0,k:[100,100],ix:2},r:{a:0,k:0,ix:2},o:{a:0,k:100,ix:2},sk:{a:0,k:0,ix:2},sa:{a:0,k:0,ix:2}}]}],ip:0,op:400,st:0,bm:0}],xe=[],ge={v:se,fr:te,ip:ie,op:ne,w:oe,h:re,nm:le,ddd:de,assets:ce,layers:me,markers:xe};function ue({withLottie:a}){return e.jsxs("div",{className:"absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-full",children:[a?e.jsx(ae,{className:"h-6 w-6",animationData:ge}):e.jsx(F0,{className:"h-6 w-6"}),e.jsx(fe,{})]})}function fe(){const[s,i]=u.useState(new Date);u.useEffect(()=>{i(new Date)},[]);const o=A0(+s,25e3);return e.jsx(T0,{percentage:o,thickness:1.25/23,className:"absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2",backgroundStrokeClassName:"stroke-token-main-surface-tertiary",transitionDuration:`${(100-o)/100*.2}s`,transitionTimingFunction:"cubic-bezier(0.55, 0, 1, 1)"})}function Ae({messages:a,clientThreadId:s}){const[i,o]=a,f=P0(i.message),p=O0(),d=a.some(l=>p.has(l.message.id));let r=null;o!=null&&B.isMultimodalTextMessage(o.message)&&(r=B.getImageAssetPointers(o.message));let c=V.Running;return r!=null?c=V.Finished:o!=null?c=V.Error:f&&(c=V.Stopped),e.jsx(e.Fragment,{children:!d&&e.jsx(he,{imageAssets:r??[],clientThreadId:s,toolStatus:c,toolMessage:o?.message,messageId:i.message.id})})}const he=({imageAssets:a,clientThreadId:s,toolMessage:i,toolStatus:o,messageId:f})=>{const p=A(),d=Y(s),r=q0(a,void 0,d),c=r0(),l=I0();if(i?.content.content_type===b0.SystemError)return null;const h=t0(a[0]),y=r.map(g=>g.data).filter(g=>g!=null),w=y.map(g=>({...g,alt:D(g)})),v=(g=0)=>`${f}-image-${g}`;return e.jsx(e.Fragment,{children:e.jsxs(Ie,{$numItems:r.length,className:"my-1 transition-opacity duration-300",children:[r.length===0&&o===V.Running&&e.jsx(q,{layoutId:"loading:placeholder",shape:h,isToolRunning:!0},"loading"),r.map((g,k)=>{const{isLoading:j,data:x,error:M}=g;if(j)return e.jsx(q,{shape:h,layoutId:v(k)},k);if(M!=null||x?.url==null)return e.jsx(L,{layoutId:v(k),className:"text-sm text-token-text-tertiary",shape:h,children:e.jsx("div",{className:"flex min-h-full flex-col items-center justify-center gap-3 px-4 pb-5",children:p.formatMessage(b.imageLoadError)})},k);if(i&&x){const S={...x,alt:D(x)};return e.jsx(pe,{image:S,allImages:w,clientThreadId:s,toolMessage:i,index:k,onOpenImageEditor:()=>{l?(c(`/c/${s}`,{state:{focusObject:{type:R.Image,image:S,allImages:y,messageId:i.id}}}),w0.focusMainWindow()):R0.setFocusedObject({type:R.Image,image:S,allImages:y,messageId:i.id})}},k)}})]})})};function pe({toolMessage:a,clientThreadId:s,allImages:i,image:o,index:f,onOpenImageEditor:p}){const d=A(),r=Y(s),c=v0(),{value:l}=j0("2189772492"),h=M0(),y=L0(s),w=t0(o),[v,g]=u.useState({}),k=y&&"gizmo"in y?y.gizmo:void 0,j=k?.gizmo.id===G0,x=h&&l&&!!c?.includes(z.D3Editor)&&(k==null||j||!!c?.includes(z.D3EditorAllGpts));async function M(n){H0(n,r,a.id)}function S(n){W.logEvent("chatgpt_dalle_image_view_full",null,{sourceOperation:n.metadata?.dalle?.edit_op??"none",hasParent:n.metadata?.dalle?.parent_gen_id?"true":"false"}),$.logEvent(P.dalleImageViewFull,{conversationId:r,messageId:a.id,generationId:n.metadata?.dalle?.gen_id,parentGenerationId:n.metadata?.dalle?.parent_gen_id,fileId:H(n.asset_pointer),sourceOperation:n.metadata?.dalle?.edit_op})}function E(n,m){g(I=>({...I,[n.asset_pointer]:m})),W.logEvent(P.dalleImageRating,m?"like":"dislike",{liked:m?"true":"false",sourceOperation:n.metadata?.dalle?.edit_op??"none",hasParent:n.metadata?.dalle?.parent_gen_id?"true":"false"}),$.logEvent(P.dalleImageRating,{liked:m,conversationId:r,messageId:a.id,generationId:n.metadata?.dalle?.gen_id,parentGenerationId:n.metadata?.dalle?.parent_gen_id,fileId:H(n.asset_pointer),sourceOperation:n.metadata?.dalle?.edit_op})}function T(n){const m=v[n.asset_pointer],I={label:d.formatMessage(b.likeImage),onClick:()=>E(n,!0),disabled:m===!0,ariaLabel:d.formatMessage(b.likeImage),icon:e0},i0={label:d.formatMessage(b.dislikeImage),onClick:()=>E(n,!1),disabled:m===!1,ariaLabel:d.formatMessage(b.dislikeImage),icon:a0},n0={label:d.formatMessage(b.downloadImage),onClick:()=>M(n),ariaLabel:d.formatMessage(b.downloadImage),icon:s0};return[m!==!1&&I,m!==!0&&i0,n0].filter(Boolean)}let t=e.jsx(ye,{image:o,shape:w,rating:v[o.asset_pointer],onDownload:()=>M(o),onRate:(n,m)=>E(n,m),clientThreadId:s,layoutId:void 0});return x?t=e.jsx("div",{role:"button",onClick:p,children:t}):t=e.jsx(Z0,{image:o,images:i,metadataRenderer:n=>e.jsx(ke,{image:n}),onOpen:S,getActions:T,children:t}),e.jsx("div",{className:"flex",children:t},f)}function q({shape:a,layoutId:s,isToolRunning:i=!1}){const{isOpen:o}=B0();return e.jsx(L,{shape:a,layoutId:o?void 0:s,children:e.jsx("div",{className:"flex min-h-full items-center justify-center",children:e.jsx(ue,{withLottie:i})})},"loading")}function ke({image:a}){const s=A(),[i,o]=u.useState(!1),f=_0();function p(d){const r=D(a);o(!0),K0(r,f,d),setTimeout(()=>{o(!1)},2e3)}return e.jsxs("div",{className:"flex flex-col items-start gap-3 p-6",children:[e.jsx("div",{className:"text-sm text-gray-300 sm:text-base",children:s.formatMessage(b.imageViewerMetadataTitle)}),e.jsx("div",{className:"max-h-32 overflow-y-auto text-sm md:max-h-[80vh] md:text-lg",children:D(a)}),e.jsx(N,{color:"primary",onClick:p,disabled:i,className:"hidden sm:block",icon:N0,children:i?s.formatMessage(b.imageViewerMetadataCopyButtonCopied):s.formatMessage(b.imageViewerMetadataCopyButton)})]})}function L({children:a,shape:s,className:i,layoutId:o}){return e.jsxs(F.div,{layoutId:o,className:C("relative",i,s==="1792x1024"&&"aspect-[7/4]",s==="1024x1024"&&"aspect-square max-w-[400px]",s==="1024x1792"&&"aspect-[4/7] max-w-xs","overflow-hidden rounded-2xl"),children:[e.jsx("div",{className:"pointer-events-none absolute inset-0 bg-token-main-surface-secondary"}),e.jsx("div",{className:"relative h-full",children:a})]})}function ye({image:a,shape:s,rating:i,onDownload:o,onRate:f,clientThreadId:p,layoutId:d}){const r=C0(),c=z0(U0.isBusinessWorkspace),l=S0(p,x=>x?.mode),h=W0(),y=$0(),w=y?.type===R.Image&&y.image.asset_pointer===a.asset_pointer,{url:v,width:g,height:k}=a,j=!r&&!c&&l?.kind!==E0.GizmoMagicCreate;return e.jsxs(L,{shape:s,className:"group/dalle-image",layoutId:w?void 0:d,children:[e.jsx(Q0,{alt:D(a),src:v,width:g,height:k}),e.jsx("div",{className:C("pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]",w?"bg-black/50 group-hover/dalle-image:bg-black/70":"group-hover/dalle-image:bg-transparent")}),h?!w&&e.jsx("div",{className:"pointer-events-none invisible absolute right-3 top-3 text-white group-hover/dalle-image:visible",children:e.jsx(J0,{})}):e.jsxs(e.Fragment,{children:[j&&e.jsxs(Q,{children:[i!==!1&&e.jsx(O,{icon:e0,selected:i===!0,onClick:x=>{x.stopPropagation(),f(a,!0)}}),i!==!0&&e.jsx(O,{icon:a0,selected:i===!1,onClick:x=>{x.stopPropagation(),f(a,!1)}})]}),e.jsx(Q,{$rightAlign:!0,children:e.jsx(O,{icon:s0,onClick:x=>{x.stopPropagation(),o()}})})]})]})}const Q=Z.div`invisible absolute top-3 flex gap-1 group-hover/dalle-image:visible
${({$rightAlign:a})=>a?"right-3":"left-3"}`;function O({icon:a,selected:s,onClick:i}){return e.jsx("button",{className:C("flex h-8 w-8 items-center justify-center rounded",s?"bg-gray-100":"bg-black/50 hover:opacity-70"),onClick:i,disabled:s,children:e.jsx(a,{className:C("icon-md",s?"text-gray-700":"text-white")})})}const Ie=Z.div`grid gap-2
${({$numItems:a})=>a<=1?"grid-cols-1":"grid-cols-2"}`;function t0(a){if(!a)return"1024x1024";const{width:s,height:i}=a;return s>i?"1792x1024":s<i?"1024x1792":"1024x1024"}const b=X({creatingImages:{id:"dalleMessage.creatingImagesV2",defaultMessage:"Creating image"},stopped:{id:"dalleMessage.stoppedV3",defaultMessage:"Stopped creating image"},errorCreating:{id:"dalleMessage.errorCreatingV2",defaultMessage:"Error creating image"},imageLoadError:{id:"dalleMessage.imageLoadError",defaultMessage:"Error loading image"},imageViewerMetadataTitle:{id:"dalleMessage.imageViewerMetadataTitle",defaultMessage:"Prompt"},imageViewerMetadataCopyButton:{id:"dalleMessage.imageViewerMetadataCopyButton",defaultMessage:"Copy"},imageViewerMetadataCopyButtonCopied:{id:"dalleMessage.imageViewerMetadataCopyButtonCopied",defaultMessage:"Copied!"},imageEditButton:{id:"dalleMessage.imageEditButton",defaultMessage:"Edit"},downloadImage:{id:"imageViewer.downloadImage",defaultMessage:"Download Image"},likeImage:{id:"imageViewer.likeImage",defaultMessage:"Like Image"},dislikeImage:{id:"imageViewer.dislikeImage",defaultMessage:"Dislike Image"}});export{Ae as default};
//# sourceMappingURL=gq67rp1jg2edayk6.js.map
