import{r as h,q as m,u as g,j as p,au as f}from"./cg166fqqcxkeiosv.js";import{d7 as _,cv as w}from"./d5k5wa3zyqlgc9bk.js";import{dh as I,bO as P}from"./mwlpozqwnbys03vp.js";import{p as T,u as y,a as u,b as c,d as q,c as R}from"./gg3htlw4oy097iqi.js";class x{queue=[];attempted=new Set;isProcessing=!1;enqueue(e){this.queue.push(e),this._processQueue()}async _processQueue(){if(!this.isProcessing){for(this.isProcessing=!0;this.queue.length>0;)try{const e=this.queue.shift();if(!e)continue;await this._preload(e)}catch{}this.isProcessing=!1}}_preload(e){return new Promise(r=>{this.attempted.has(e)&&r();const s=new Image;s.onload=()=>{this.attempted.add(e),r()},s.onerror=()=>{this.attempted.add(e),r()},s.src=e})}}const E=new x;function M(t){const e=h.useRef(t);return I(e.current,t)||(e.current=t),e.current}function b(t,{enabled:e=!0}={}){const r=M(t);h.useEffect(()=>{if(!e||"connection"in navigator&&navigator.connection.type==="cellular")return;const i=setTimeout(()=>{r.forEach(n=>{n&&E.enqueue(n)})},1e3);return()=>{clearTimeout(i)}},[e,r])}function Q(){const{imageResults:t}=C();b([...t.map(e=>l(e))])}const S=_((...t)=>T(...t),5e3);function C(t=!1){const e=y(["image_results","image_try_hard_status","execution_status"]),r=u(c.threadId),s=P(e.toReversed().flatMap(a=>a.image_results?.entries)).map(a=>({...a,thumbnail_url:a.thumbnail_url.replace(/^http:\/\//,"https://"),content_url:a.content_url.replace(/^http:\/\//,"https://")})),i=u(c.hasModelResponseText),n=e.some(a=>q(a));let o=s.length===0&&!i;return r!=null&&t&&!o&&s.length===0&&e[0]?.image_try_hard_status==="not_attempted"&&(S(r,0),o=!0),t&&e[0]?.image_try_hard_status==="in_progress"&&(o=!0),{imageResults:s,isLoading:o,isErrored:s.length===0&&n}}function j(){const t=R(),e=u(c.hasTurnError),r=u(c.hasModelResponseText),s=w(t);return{imageResults:s,isLoading:s.length===0&&!r,isErrored:s.length===0&&e}}function O(t){return m({queryKey:["downloadImage",{imageUrl:t}],queryFn:()=>new Promise((e,r)=>{const s=new Image;s.onload=()=>{e({width:s.width,height:s.height})},s.onerror=()=>{r()},s.src=t}),enabled:t!=null})}function U(t){return g(O(t))}const d={width:474,square:!0};function l(t,e=d){if(t==null||t.is_proxied_image)return;const r=new URL(t.thumbnail_url);if(r.hostname.indexOf(".bing.")===-1)return t.thumbnail_url;const s=Math.min(e.width,t.content_size.width),i=e.height??Math.floor(s*t.content_size.height/t.content_size.width);if(r.searchParams.delete("pid"),e.square){const n=Math.min(s,i);r.searchParams.set("w",n.toString()),r.searchParams.set("h",n.toString())}else r.searchParams.set("w",s.toString()),r.searchParams.set("h",i.toString());return r.searchParams.set("c","7"),r.toString()}function A(t,e=d){return h.useMemo(()=>l(t,e),[t,e])}const v={type:"spring",stiffness:700,damping:82};function F({children:t,className:e}){return p.jsx(f.div,{animate:{opacity:1},initial:{width:"100%",height:"100%",translateX:0,translateY:0,opacity:0},whileHover:{width:"103%",height:"103%",translateX:"-1.5%",translateY:"-1.5%"},transition:v,className:e,children:t})}export{F as I,j as a,U as b,Q as c,A as d,O as g,v as i,C as u};
//# sourceMappingURL=nsmo1fil03yxtd3r.js.map
