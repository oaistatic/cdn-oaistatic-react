import{r as c,c as we,g as Be,j as u,M as k,au as Oe}from"./n1tvutderx19k1zs.js";import{B as Ve,dB as je,cV as qe,hs as We,au as Ge,al as He,f6 as R,go as Xe,ai as fe,dp as Ke,x as $e,d5 as Ye,ht as Ze,bO as Je,h1 as Qe,gF as en,d_ as se,cf as _e,d as U,bY as q,dm as me,b9 as nn,s as ve,r as ge,co as tn,P as on,de as an,D as sn,bG as rn}from"./n26mv7rx7nquqst2.js";import{ml as cn,da as Te,A as ln,nl as un,nm as De,nn as dn,d as fn,no as mn,o as vn,fV as gn,hJ as Z,n as pn,iL as hn}from"./pceg3mlzf8dzw9ob.js";import{u as bn}from"./e913oi7v3l3vpl2n.js";import{a as Me,u as Re,c as xn,d as Sn,e as An,s as J,f as Q,g as yn,h as Cn,i as ke,X as wn}from"./goa2v2lruxu0r7wh.js";import{b as _n}from"./egjj718ybwa4lzxd.js";const Tn=()=>{const t=Ve(),e=Me(),n=c.useCallback(()=>e.getState().isVoiceModeActive,[e]);return c.useMemo(()=>new Proxy(t,{get(a,o){const r=a[o];return n()||o==="closeAll"?r:()=>{}}}),[n,t])},Dn=()=>{const t=je()&&qe,e=Ge("1359128927")?.value;return async()=>{if(t&&e)return await We();try{const n=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1}),a=await navigator.mediaDevices.enumerateDevices();return n.getTracks().forEach(r=>r.stop()),a.some(r=>r.kind==="audioinput"&&r.label!=="")}catch(n){if(!cn(n))throw n;return!1}}};function Nt(t){return{conversation_id:t.serverThreadId,parent_message_id:t.parentMessageId,voice_mode:t.isAdvancedMode?"advanced":"standard",eventSource:t.eventSource,clientThreadId:t.clientThreadId,gizmo_id:t.gizmoId,voice:t.voice}}function Mn({requestMicPermissions:t}={requestMicPermissions:!1}){const e=we(),n=Me(),a=Tn(),{voiceName:o,voiceMainLanguage:r,voiceTrainingAllowed:i,videoTrainingAllowed:l}=Te(),g=Re(d=>d.isVoiceModeActive),p=xn(),{room:h}=Sn(),v=An(),m=Dn(),s=He(),b=e.formatMessage({id:"useVoiceModeButtonAction.error",defaultMessage:"Failed to start voice mode"}),A=c.useCallback(async()=>{p&&(await h?.disconnect(),J(null,n),n.setState(d=>{d.server.remoteState=Q.Halted}))},[p,h,n]);return{startVoiceMode:c.useCallback(async d=>{p&&(await h?.disconnect(),J(null,n)),t&&await m();const x=await yn("audioinput");n.setState(y=>{y.audioInputDevice=x,y.isVoiceModeActive=!0,y.voiceMode=d.voice_mode,y.server.remoteState=Q.Connecting});const S=performance.now(),C=[8,4,4,4,12].map(y=>Math.floor(Math.random()*Math.pow(10,y)).toString(16).padStart(y,"0").toUpperCase()).join("-");try{R.livekit.connectCalled();const y=await v({conversation_id:d.conversation_id??null,requested_voice_mode:d.voice_mode??null,gizmo_id:d.gizmo_id??null,voice:d.voice},d.eventSource),{default_voice_mode:T,modes:D,chatreq:F}=y;performance.mark("livekit.start"),performance.mark("voice_mode.start");const{eventSource:H,voice:B,clientThreadId:X,voice_mode:E,gizmo_id:K,...O}=d,P=D.find(j=>j.mode===T);if(!P)throw new Error("No voice status mode found for default mode "+T);const V=P.default_model_slug,I=T==="advanced"?V:void 0,$=F?await Xe.getEnforcementToken(F):null,Y=d.gizmo_id?{kind:fe.GizmoInteraction,gizmo_id:d.gizmo_id}:{kind:fe.PrimaryAssistant},M=await Cn.getVoiceToken({...O,voice:B??o,language_code:r,voice_session_id:C,timezone_offset_min:new Date().getTimezoneOffset(),voice_mode:T,model_slug:V,model_slug_advanced:I,chatreq_token:F?.token,history_and_training_disabled:s,conversation_mode:Y,voice_training_allowed:i,video_training_allowed:l},d.eventSource,$);M&&M.token&&M.url&&M.e2ee_key&&(ln.setState({lastVoiceSessionStartTime:new Date}),J({conversationId:d.conversation_id??d.clientThreadId,voiceSessionId:C,voiceMode:M.voice_mode_decision.voice_mode,credentials:{...M,e2eeKey:M.e2ee_key}},n)),performance.mark("livekit.end"),R.livekit.success({durationMs:performance.measure("livekit","livekit.start","livekit.end").duration.toFixed(0),voice_session_id:C}),R.connectionLatency.success({durationMs:performance.now()-S})}catch(y){const T=un(n.getState());throw R.livekit.failure(y,{...T,voice_session_id:C,eventSource:d.eventSource,voice:d.voice??"(undefined)",requested_voice_mode:d.voice_mode??"(undefined)",gizmo_id:d.gizmo_id??"(undefined)"}),ke.debug("failed to get voice token",y),n.setState(D=>{D.server.remoteState=Q.Halted}),R.connectionLatency.failure({durationMs:performance.now()-S}),a.danger(b),y}},[m,b,v,p,s,t,h,a,l,r,o,n,i]),stopVoiceMode:A,isConnected:p,isVoiceModeActive:g}}const Rn=2,kn=({viewport:t,canvasSize:e,shouldMeasurePerf:n,source:a})=>{const o=c.useRef({}),r=c.useCallback(i=>{const l=i.getExtension("WEBGL_debug_renderer_info");l&&(o.current.vendor=i.getParameter(l.UNMASKED_VENDOR_WEBGL),o.current.renderer=i.getParameter(l.UNMASKED_RENDERER_WEBGL))},[]);return c.useEffect(()=>{const i={vendor:o.current.vendor??"(unavailable)",renderer:o.current.renderer??"(unavailable)",width:t[0],height:t[1],canvasWidth:e[0],canvasHeight:e[1],dpr:window.devicePixelRatio,source:a};!Ke(i,o.current)&&n&&(o.current=i,De(Rn).then(g=>{R.bloop.performance({...i,fps:g})}))},[e,n,t,a]),r},Fn=.25,En=3,pe=28,ee=55,ne=200,he=1.1,Pn=({viewport:t,initialScale:e,shouldCalibrate:n})=>{const[a,o]=c.useState(e),r=c.useRef(void 0),i=c.useRef(void 0),l=c.useRef(void 0),g=c.useRef("down"),p=c.useCallback(()=>{const h=g.current==="up"?En:Fn;De(h).then(v=>{if(v<pe){g.current="down";const m=Math.max(v,1),s=Math.sqrt(m/pe);o(b=>b*s),i.current=window.setTimeout(p,ne)}else if(l.current){const m=v>=ee,s=v>=l.current*he;if(m||s)g.current="up",o(b=>b*he),i.current=window.setTimeout(p,ne);else if(v<ee){g.current="down";const b=Math.sqrt(v/ee);o(A=>A*b)}}l.current=v})},[]);return c.useEffect(()=>{const[h,v]=t,[m,s]=r.current??[];return n&&(m!==h||s!==v)&&(r.current=t,clearTimeout(i.current),o(e),i.current=window.setTimeout(p,ne)),()=>{clearTimeout(i.current)}},[n,p,e,t]),a},In=60,G=Math.floor(1e3/In);var zn=$e,Ln=Ye;function Nn(t){return Ln(t)&&zn(t)}var Un=Nn,Bn=Ze,On=Je,Vn=Qe,jn=en,qn=Un,Wn=Math.max;function Gn(t){if(!(t&&t.length))return[];var e=0;return t=Bn(t,function(n){if(qn(n))return e=Wn(n.length,e),!0}),jn(e,function(n){return On(t,Vn(n))})}var Hn=Gn,Xn=dn,Kn=Hn,$n=Xn(Kn),Yn=$n;const te=Be(Yn),ie=240,Fe=2048,Ee=new Array(ie).fill(0),Zn=t=>{const e=wn(t,{bands:ie,updateInterval:G,loPass:0,hiPass:400,analyserOptions:{fftSize:Fe}});return e.length===0?Ee:e},re=t=>{const{magnitudes:e,binCount:n,gainMultiplier:a}=t;if(e.length===0)return new Array(n).fill(0);const o=Math.ceil(e.length/n),r=[];for(let i=0;i<e.length;i+=o){const l=Math.min(i+o,e.length),g=e.slice(i,l).sort((m,s)=>m-s),p=Math.floor(g.length/2);let h;g.length%2===0?h=(g[p-1]+g[p])/2:h=g[p],h=Math.abs(h),h*=a;const v=h/(h+1);r.push(v)}return r},Pe=(t,e)=>{const n=e.sampleRate,a=t.length,o=e.bandCount,r=e.binCount,i=e.gainMultipliers;if(i.length!==o)throw new Error("gainMultipliers must have length equal to bandCount");const l=a*2,g=n/l,p=t.map((b,A)=>A*g),h=20,v=n/2,m=new Array(o+1).fill(0).map((b,A)=>h*Math.pow(v/h,A/o)),s=new Array(o).fill(null).map(()=>[]);for(let b=0;b<p.length;b+=1)for(let A=0;A<o;A+=1)if(p[b]>=m[A]&&p[b]<m[A+1]){s[A].push(t[b]);break}for(let b=0;b<o;b+=1){const A=s[b],f=i[b];s[b]=re({magnitudes:A,binCount:r,gainMultiplier:f})}return s},be=60,Ie=48e3,Jn=1,Qn=2,et=40,nt=2;function xe({time:t,timeConstant:e}){return 1-Math.exp(-t/e)}function Se(t,e){const n=e[1]-e[0];return e[0]+t*n}const oe=t=>{if(!Array.isArray(t)||t.length!==2||typeof t[0]!="number"||typeof t[1]!="number")throw new Error("zip failed - received a value that is not a [number, number] tuple")},tt=t=>{const{prevAudioData:e,prevCumulativeAudioData:n,deltaTimeS:a,audioDataRaw:o}=t,r=o.map(m=>m*a*be*Jn),i=xe({time:a,timeConstant:Qn}),l=te(e,r).map(m=>(oe(m),Se(i,m))),g=o.map(m=>m*a*be*et),p=te(n,g).map(m=>(oe(m),m[0]+m[1])),h=xe({time:a,timeConstant:nt}),v=te(n,p).map(m=>(oe(m),Se(h,m)));return{audioData:l,cumulativeAudioData:v}},Ut=(t,e)=>{const n=Zn(t),a=Pe(n,{sampleRate:Ie,binCount:e.bins,bandCount:e.bands,gainMultipliers:e.gainMultipliers}),o=re({magnitudes:n,binCount:1,gainMultiplier:1});return{bandMagnitudes:a,cumulativeMagnitude:o}};function ot(t){const e=c.useRef(t);e.current=t;const[n,a]=c.useState(null),o=c.useCallback(r=>{a(r)},[]);return se(()=>{const r=new ResizeObserver(i=>{for(const l of i)e.current(l)});return n&&r.observe(n),()=>{r.disconnect()}},[n]),o}const L=ke.createChild("GLCanvas");function at({className:t,vert:e,frag:n,Behaviors:a,onViewportUpdate:o,onRenderComplete:r,onGlAvailable:i,onCanvasSizeUpdate:l,scale:g}){const p=c.useRef(null),h=c.useRef(null),[v,m]=c.useState(null),[s,b]=c.useState(),A=c.useRef(fn(x=>{const{width:S,height:C}=x.contentRect,y=Math.floor(Math.min(S??0,C??0));m(y),o?.({width:y,height:y})},100)),f=ot(A.current);if(se(()=>{const x=p.current,{width:S,height:C}=x??{};if(x&&v!=null&&S&&C){const y=x.getContext("webgl2",{premultipliedAlpha:!0});y?b(y):L.error("webgl2 context not supported")}},[v]),se(()=>{if(!s)return;const x=s.createProgram(),S=s.createShader(s.VERTEX_SHADER),C=s.createShader(s.FRAGMENT_SHADER);if(!x){L.debug("failed to create program");return}if(!S||!C){L.debug("failed to create shaders",S,C);return}let y="";if(s.shaderSource(S,e),s.compileShader(S),y+=`vertShader:
${s.getShaderInfoLog(S)}
`,s.attachShader(x,S),s.shaderSource(C,n),s.compileShader(C),y+=`fragShader:
${s.getShaderInfoLog(C)}
`,s.attachShader(x,C),s.linkProgram(x),s.useProgram(x),y+=s.getProgramInfoLog(x),!s.getProgramParameter(x,s.LINK_STATUS))throw`Could not compile WebGL program. 

${y}`;h.current=x,L.debug("program created"),i?.(s,x);const T=s.fenceSync(s.SYNC_GPU_COMMANDS_COMPLETE,0);return T&&(s.waitSync(T,0,s.TIMEOUT_IGNORED),r?.()),()=>{L.debug("cleaning up"),h.current=null,s.detachShader(x,S),s.detachShader(x,C),s.deleteShader(S),s.deleteShader(C),s.deleteProgram(x)}},[s,n,e]),v!=null&&s&&p.current){const x=p.current,S=v*window.devicePixelRatio*(g??1);x.width=S,x.height=S,s.viewport(0,0,S,S),l?.({width:S,height:S})}const d=h.current;return u.jsxs("div",{className:t,ref:f,children:[u.jsx("canvas",{ref:p,style:{width:v??void 0,height:v??void 0}},v),s&&d&&a&&u.jsx(a,{ctx:s,program:d})]})}function st({GLUniformsSetter:t,textureImage:e,textureName:n,variablesRef:a,className:o,vert:r,frag:i,onViewportUpdate:l,onRenderComplete:g,onGlAvailable:p,onCanvasSizeUpdate:h,scale:v}){const m=c.useRef(void 0),s=c.useCallback(async(f,d)=>{if(m.current=new t(f,d),e&&n){const x=f.createTexture();f.bindTexture(f.TEXTURE_2D,x),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_S,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_WRAP_T,f.CLAMP_TO_EDGE),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MIN_FILTER,f.LINEAR),f.texParameteri(f.TEXTURE_2D,f.TEXTURE_MAG_FILTER,f.LINEAR),f.texImage2D(f.TEXTURE_2D,0,f.RGBA,f.RGBA,f.UNSIGNED_BYTE,e);const S=f.getUniformLocation(d,n);f.activeTexture(f.TEXTURE0),f.bindTexture(f.TEXTURE_2D,x),f.uniform1i(S,0)}p?.(f,d)},[t,e,n,p]),b=c.useRef(void 0),A=c.useCallback(()=>{m.current&&a.current&&m.current.setVariablesAndRender(a.current),b.current=requestAnimationFrame(A)},[a]);return c.useEffect(()=>(A(),()=>{b.current&&cancelAnimationFrame(b.current)}),[A]),u.jsx(at,{className:o,vert:r,frag:i,onViewportUpdate:l,onRenderComplete:g,onGlAvailable:s,onCanvasSizeUpdate:h,scale:v,Behaviors:()=>null})}const it="webp",rt=512,ct=512,lt="srgb",ut=3,dt="uchar",ft=72,mt=!1,vt=8,gt=!1,pt=!1,ht="{{.assetPrefix}}/assets/noise-watercolor-m3j88gni.webp",bt={format:it,width:rt,height:ct,space:lt,channels:ut,depth:dt,density:ft,isProgressive:mt,paletteBitDepth:vt,hasProfile:gt,hasAlpha:pt,src:ht};let ze;const W=new window.Image;W.crossOrigin="anonymous";W.src=bt.src;W.onload=()=>{ze=W};var xt=`#version 300 es
#define E (2.71828182846)
#define pi (3.14159265358979323844)
#define NUM_OCTAVES (4)

precision highp float;

struct ColoredSDF {
  float distance;
  vec4 color;
};

struct SDFArgs {
  vec2 st;
  float amount;
  float duration;
  float time;
  float mainRadius;
};

float triangle(float t, float p) {
  return 2.0 * abs(t / p - floor(t / p + 0.5));
}

float spring(float t, float d) {
  return 1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t);
}

float silkySmooth(float t, float k) {
  return atan(k * sin((t - 0.5) * pi)) / atan(k) * 0.5 + 0.5;
}

float scaled(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), float(0), float(1));
}

float fixedSpring(float t, float d) {
  float s = mix(
    1.0 - exp(-E * 2.0 * t) * cos((1.0 - d) * 115.0 * t),
    1.0,
    scaled(0.0, 1.0, t)
  );
  return s * (1.0 - t) + t;
}

float bounce(float t, float d) {
  return -sin(pi * (1.0 - d) * t) *
  (1.0 - t) *
  exp(-2.71828182846 * 2.0 * t) *
  t *
  10.0;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float random(ivec2 st) {
  return random(vec2(st));
}

float random(float p) {
  return random(vec2(p));
}

float opSmoothUnion(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 + 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) - k * h * (1.0 - h);
}

float opSmoothSubtraction(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 + d1) / k, 0.0, 1.0);
  return mix(d2, -d1, h) + k * h * (1.0 - h);
}

float opSmoothIntersection(float d1, float d2, float k) {
  if (k <= 0.0) {
    k = 0.000001;
  }
  float h = clamp(0.5 - 0.5 * (d2 - d1) / k, 0.0, 1.0);
  return mix(d2, d1, h) + k * h * (1.0 - h);
}

float sdRoundedBox(vec2 p, vec2 b, vec4 r) {
  r.xy = p.x > 0.0 ? r.xy : r.zw;
  r.x = p.y > 0.0 ? r.x : r.y;
  vec2 q = abs(p) - b + r.x;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r.x;
}

float sdSegment(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a;
  vec2 ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float sdArc(vec2 p, vec2 sca, vec2 scb, float ra, float rb) {
  p *= mat2(sca.x, sca.y, -sca.y, sca.x);
  p.x = abs(p.x);
  return scb.y * p.x > scb.x * p.y
    ? length(p - ra * scb) - rb
    : abs(length(p) - ra) - rb;
}

float arc(vec2 st, float startAngle, float length, float radius, float width) {
  return sdArc(
    st,
    vec2(sin(startAngle), cos(startAngle)),
    vec2(sin(length), cos(length)),
    radius,
    width
  );
}

vec2 rotate(vec2 v, float a) {
  float s = sin(a);
  float c = cos(a);
  mat2 m = mat2(c, s, -s, c);
  return m * v;
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend) {
  
  return max(base + blend - vec3(1.0), vec3(0.0));
}

vec3 blendLinearBurn_13_5(vec3 base, vec3 blend, float opacity) {
  return blendLinearBurn_13_5(base, blend) * opacity + base * (1.0 - opacity);
}

vec4 permute(vec4 x) {
  return mod((x * 34.0 + 1.0) * x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
  return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}

float cnoise(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = vec4(Pi0.z);
  vec4 iz1 = vec4(Pi1.z);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(vec4(0.0), gx0) - 0.5);
  gy0 -= sz0 * (step(vec4(0.0), gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(vec4(0.0), gx1) - 0.5);
  gy1 -= sz1 * (step(vec4(0.0), gy1) - 0.5);

  vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
  vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
  vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
  vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
  vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
  vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
  vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
  vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);

  vec4 norm0 = taylorInvSqrt(
    vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110))
  );
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(
    vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111))
  );
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(
    vec4(n000, n100, n010, n110),
    vec4(n001, n101, n011, n111),
    fade_xyz.z
  );
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float rand(vec2 n) {
  return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 ip = floor(p);
  vec2 u = fract(p);
  u = u * u * (3.0 - 2.0 * u);

  float res = mix(
    mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
    mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
    u.y
  );
  return res * res;
}

float fbm(vec2 x) {
  float v = 0.0;
  float a = 0.5;
  vec2 shift = vec2(100.0);
  
  mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
  for (int i = 0; i < NUM_OCTAVES; ++i) {
    v += a * noise(x);
    x = rot * x * 2.0 + shift;
    a *= 0.5;
  }
  return v;
}

/**
 * End new code for colored orb
 */

ColoredSDF applyIdleState(
  ColoredSDF sdf,
  SDFArgs args,
  bool isDarkMode /**
 * new bool
 */
) {
  float midRadius = 0.12; 
  float maxRadius = 0.3; 
  float t1 = 1.0; 
  float gamma = 3.0; 
  float omega = pi / 2.0; 

  
  float k = exp(-gamma) * omega;

  float radius;
  if (args.time <= t1) {
    
    float t_prime = args.time / t1;
    
    float springValue = 1.0 - exp(-gamma * t_prime) * cos(omega * t_prime);
    radius = midRadius * springValue;
  } else {
    
    float adjustedTime = args.time - t1;
    
    radius =
      midRadius + (maxRadius - midRadius) * (1.0 - exp(-k * adjustedTime));
  }

  
  float distance = length(args.st) - radius;

  
  sdf.distance = mix(sdf.distance, distance, args.amount);

  
  
  float alpha = sin(pi / 0.7 * args.time) * 0.3 + 0.7;
  vec4 color = vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha);

  
  sdf.color = mix(sdf.color, color, args.amount);

  return sdf;
}

ColoredSDF applyIdleStateLegacy(ColoredSDF sdf, SDFArgs args, bool isDarkMode) {
  float connectedLinearAnimation = scaled(0.0, 2.0, args.duration);
  float connectedAnimation = fixedSpring(connectedLinearAnimation, 0.96);
  float circleSize =
    mix(
      pow(scaled(0.0, 3.0, args.time), 2.0) * 0.75 + 0.1,
      1.0,
      connectedAnimation
    ) *
    0.33;
  vec2 rotatedCoords = rotate(
    args.st,
    -args.time * pi -
      connectedAnimation * pi * 2.0 -
      pi * 2.0 * 5.0 * silkySmooth(scaled(0.0, 5.0, args.time), 2.0)
  );

  float strokeWidth = mix(circleSize / 2.0, circleSize, connectedAnimation);
  float connecting = abs(length(args.st) - circleSize) - strokeWidth;

  float connected = length(args.st) - circleSize;
  float idleDist = mix(connecting, connected, connectedAnimation);

  float d = min(sdf.distance, idleDist);
  sdf.distance = mix(sdf.distance, d, args.amount);
  float angle = atan(rotatedCoords.y, rotatedCoords.x);
  float alpha = mix(
    min(1.0, scaled(-pi, pi, angle)),
    1.0,
    connectedLinearAnimation
  );

  float spinningCircleDist =
    length(
      rotatedCoords -
        vec2(-mix(circleSize, strokeWidth, connectedAnimation), 0.0)
    ) -
    strokeWidth;

  alpha = min(
    1.0,
    max(
      alpha,
      smoothstep(0.005, 0.0, spinningCircleDist) + connectedAnimation * 4.0
    )
  );

  sdf.color = mix(
    sdf.color,
    vec4(isDarkMode ? vec3(1.0) : vec3(0.0), alpha),
    args.amount
  );
  return sdf;
}

ColoredSDF applyListenState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  float listenTimestamp, /* new */
  float touchDownTimestamp, /* new */
  float touchUpTimestamp, /* new */
  bool fadeBloopWhileListening /* new */
) {
  float breathingSequence = sin(args.time) * 0.5 + 0.5;
  float entryAnimation = fixedSpring(scaled(0.0, 3.0, args.duration), 0.9);

  float touch =
    fixedSpring(scaled(0.0, 1.0, args.time - touchDownTimestamp), 0.99) -
    fixedSpring(scaled(0.0, 0.8, args.time - touchUpTimestamp), 1.0);

  float listenAnimation = clamp(
    spring(scaled(0.0, 0.9, args.duration), 1.0),
    0.0,
    1.0
  );
  float radius = 0.0;
  float smoothlevel = micLevel;
  float l1 = smoothlevel;
  radius = 0.38 + l1 * 0.05 + breathingSequence * 0.03;
  radius *= 1.0 - (1.0 - entryAnimation) * 0.25;

  float ring = 10000.0;

  
  if (touch > 0.0) {
    touch = min(touch, listenAnimation); 
    float arcWidth = radius * 0.1;

    
    radius -= touch * arcWidth * 2.3;
    
    radius = min(
      radius,
      mix(radius, args.mainRadius - arcWidth * 2.3 - l1 * 0.01, touch)
    );

    float startAngle = 0.0;
    float arcLengthTouch =
      smoothstep(0.04, 1.0, touch) * pi * (1.0 - arcWidth / 3.0 / radius);

    float arcLength = 0.0;
    float radiusTouch =
      radius * fixedSpring(scaled(0.0, 1.0, args.duration), 1.0) * args.amount +
      l1 * 0.01;

    radiusTouch +=
      arcWidth * 1.3 * mix(-1.0, 1.0, smoothstep(0.0, 0.12, touch));

    float ringRadius = 0.0;
    arcLength = arcLengthTouch;
    ringRadius = radiusTouch;
    startAngle = pi / 2.0 - (args.time - touchDownTimestamp) / 2.0;

    ring = arc(args.st, startAngle, arcLength, ringRadius, arcWidth); 
  }

  float d = length(args.st) - radius;

  d = min(d, ring);

  sdf.distance = mix(sdf.distance, d, args.amount);

  if (fadeBloopWhileListening) {
    
    sdf.color.a = mix(
      sdf.color.a,
      mix(1.0, 1.0 - l1 * 0.6, listenAnimation),
      args.amount
    );
  } else {
    sdf.color.a = 1.0;
  }

  return sdf;
}

ColoredSDF applyThinkState(ColoredSDF sdf, SDFArgs args) {
  float d = 1000.0; 
  int count = 5; 
  float entryAnimation = spring(scaled(0.0, 1.0, args.duration), 1.0);

  float thinkingDotEntryAnimation = spring(
    scaled(0.1, 1.1, args.duration),
    1.0
  );
  float thinkingDotRadius =
    mix(0.2, 0.06, thinkingDotEntryAnimation) * args.amount;

  
  args.st.x -= thinkingDotRadius * 0.5 * thinkingDotEntryAnimation;

  for (int i = 0; i < count; i++) {
    float f = float(float(i) + 0.5) / float(count); 
    float a =
      -f * pi * 2.0 +
      args.time / 3.0 +
      spring(scaled(0.0, 10.0, args.duration), 1.0) * pi / 2.0;
    float ringRadi = args.mainRadius * 0.45 * entryAnimation;

    
    ringRadi -=
      (sin(
        entryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 3.0 -
          silkySmooth(args.time / 4.0, 2.0) * pi * 1.0
      ) *
        0.5 +
        0.5) *
      args.mainRadius *
      0.1;

    vec2 pos = vec2(cos(a), sin(a)) * ringRadi;
    float dd = length(args.st - pos) - args.mainRadius * 0.5;

    
    d = opSmoothUnion(
      d,
      dd,
      0.03 * scaled(0.0, 10.0, args.duration) + 0.8 * (1.0 - entryAnimation)
    );

    
    float dotAngle = f * pi * 2.0;
    float dotRingRadius =
      (sin(
        thinkingDotEntryAnimation * pi * 4.0 +
          a * pi * 2.0 +
          args.time * 0.1 * pi * 4.0
      ) *
        0.5 +
        0.5) *
      thinkingDotRadius *
      0.3;
    vec2 dotPos =
      vec2(-args.mainRadius, args.mainRadius) * 0.8 * thinkingDotEntryAnimation;
    vec2 dotOffset =
      vec2(cos(dotAngle + args.time), sin(dotAngle + args.time)) *
      dotRingRadius;
    float dotD = length(args.st - dotPos - dotOffset) - thinkingDotRadius * 0.8;
    d = opSmoothUnion(
      d,
      dotD,
      (1.0 - min(thinkingDotEntryAnimation, args.amount)) * thinkingDotRadius
    );
  }
  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applySpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float silenceAmount,
  float silenceDuration
) {
  float d = 1000.0;
  int barCount = 4;
  for (int i = 0; i < barCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.44;
    float h = w;

    
    float wave = sin(f * pi * 0.8 + args.time) * 0.5 + 0.5;
    float entryAnimation = spring(
      scaled(0.1 + wave * 0.4, 1.0 + wave * 0.4, args.duration),
      0.98
    );
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.y = 0.25 * (1.0 - entryAnimation);

    
    if (silenceAmount > 0.0) {
      float bounceStagger = f / 5.0;
      float bounceDelay = 0.6;
      float bounceTimer = scaled(
        bounceDelay,
        bounceDelay + 1.0,
        fract((silenceDuration + bounceStagger) / 2.0) * 2.0
      );
      pos.y +=
        bounce(bounceTimer, 6.0) *
        w *
        0.25 *
        silenceAmount *
        pow(entryAnimation, 4.0) *
        pow(args.amount, 4.0); 
    }

    
    h += avgMag[i] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1);

    float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
    d = opSmoothUnion(d, dd, 0.2 * (1.0 - args.amount));

  }

  sdf.distance = mix(sdf.distance, d, args.amount);
  sdf.color.a = 1.0;
  return sdf;
}

ColoredSDF applyListenAndSpeakState(
  ColoredSDF sdf,
  SDFArgs args,
  float micLevel,
  vec4 avgMag,
  vec4 cumulativeAudio,
  int binCount,
  vec3 bloopColorMain,
  vec3 bloopColorLow,
  vec3 bloopColorMid,
  vec3 bloopColorHigh,
  sampler2D uTextureNoise,
  bool listening,
  bool isAdvancedBloop
) {
  float entryAnimation = fixedSpring(scaled(0.0, 2.0, args.duration), 0.92);

  
  
  float radius =
    (listening ? 0.37 : 0.43) * (1.0 - (1.0 - entryAnimation) * 0.25) +
    micLevel * 0.065;

  
  
  
  float maxDisplacement = 0.01;

  
  float oscillationPeriod = 4.0;
  
  float displacementOffset =
    maxDisplacement * sin(2.0 * pi / oscillationPeriod * args.time);
  
  vec2 adjusted_st = args.st - vec2(0.0, displacementOffset);

  
  if (!isAdvancedBloop) {
    sdf.color = mix(sdf.color, vec4(bloopColorMain, 1.0), args.amount);
    sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);
    return sdf;
  }

  
  
  vec4 uAudioAverage = avgMag;
  vec4 uCumulativeAudio = cumulativeAudio;

  
  float scaleFactor = 1.0 / (2.0 * radius);
  vec2 uv = adjusted_st * scaleFactor + 0.5;
  uv.y = 1.0 - uv.y;

  
  float noiseScale = 1.25; 
  float windSpeed = 0.075; 
  float warpPower = 0.19; 
  float waterColorNoiseScale = 18.0; 
  float waterColorNoiseStrength = 0.01; 
  float textureNoiseScale = 1.0; 
  float textureNoiseStrength = 0.08; 
  float verticalOffset = 0.09; 
  float waveSpread = 1.0; 
  float layer1Amplitude = 1.0; 
  float layer1Frequency = 1.0; 
  float layer2Amplitude = 1.0; 
  float layer2Frequency = 1.0; 
  float layer3Amplitude = 1.0; 
  float layer3Frequency = 1.0; 
  float fbmStrength = 1.0; 
  float fbmPowerDamping = 0.55; 
  float overallSoundScale = 1.0; 
  float blurRadius = 1.0;
  float timescale = 1.0;

  
  float time = args.time * timescale * 0.85;

  vec3 sinOffsets = vec3(
    uCumulativeAudio.x * 0.15 * overallSoundScale,
    -uCumulativeAudio.y * 0.5 * overallSoundScale,
    uCumulativeAudio.z * 1.5 * overallSoundScale
  );
  verticalOffset += 1.0 - waveSpread;

  
  float noiseX = cnoise(
    vec3(
      uv * 1.0 + vec2(0.0, 74.8572),
      (time + uCumulativeAudio.x * 0.05 * overallSoundScale) * 0.3
    )
  );
  float noiseY = cnoise(
    vec3(
      uv * 1.0 + vec2(203.91282, 10.0),
      (time + uCumulativeAudio.z * 0.05 * overallSoundScale) * 0.3
    )
  );

  uv += vec2(noiseX * 2.0, noiseY) * warpPower;

  
  float noiseA =
    cnoise(vec3(uv * waterColorNoiseScale + vec2(344.91282, 0.0), time * 0.3)) +
    cnoise(
      vec3(uv * waterColorNoiseScale * 2.2 + vec2(723.937, 0.0), time * 0.4)
    ) *
      0.5;
  uv += noiseA * waterColorNoiseStrength;
  uv.y -= verticalOffset;

  
  vec2 textureUv = uv * textureNoiseScale;
  float textureSampleR0 = texture(uTextureNoise, textureUv).r;
  float textureSampleG0 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp0 =
    mix(
      textureSampleR0 - 0.5,
      textureSampleG0 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(63.861 + uCumulativeAudio.x * 0.05, 368.937);
  float textureSampleR1 = texture(uTextureNoise, textureUv).r;
  float textureSampleG1 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp1 =
    mix(
      textureSampleR1 - 0.5,
      textureSampleG1 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  textureUv += vec2(272.861, 829.937 + uCumulativeAudio.y * 0.1);
  textureUv += vec2(180.302 - uCumulativeAudio.z * 0.1, 819.871);
  float textureSampleR3 = texture(uTextureNoise, textureUv).r;
  float textureSampleG3 = texture(
    uTextureNoise,
    vec2(textureUv.x, 1.0 - textureUv.y)
  ).g;
  float textureNoiseDisp3 =
    mix(
      textureSampleR3 - 0.5,
      textureSampleG3 - 0.5,
      (sin(time + uCumulativeAudio.a * 2.0) + 1.0) * 0.5
    ) *
    textureNoiseStrength;
  uv += textureNoiseDisp0;

  
  vec2 st = uv * noiseScale;

  vec2 q = vec2(0.0);
  q.x = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.a * 0.175 * overallSoundScale)
  );
  q.y = fbm(
    st * 0.5 +
      windSpeed * (time + uCumulativeAudio.x * 0.136 * overallSoundScale)
  );

  vec2 r = vec2(0.0);
  r.x = fbm(
    st +
      1.0 * q +
      vec2(0.3, 9.2) +
      0.15 * (time + uCumulativeAudio.y * 0.234 * overallSoundScale)
  );
  r.y = fbm(
    st +
      1.0 * q +
      vec2(8.3, 0.8) +
      0.126 * (time + uCumulativeAudio.z * 0.165 * overallSoundScale)
  );

  float f = fbm(st + r - q);
  float fullFbm = (f + 0.6 * f * f + 0.7 * f + 0.5) * 0.5;
  fullFbm = pow(fullFbm, fbmPowerDamping);
  fullFbm *= fbmStrength;

  
  blurRadius = blurRadius * 1.5;
  vec2 snUv =
    (uv + vec2((fullFbm - 0.5) * 1.2) + vec2(0.0, 0.025) + textureNoiseDisp0) *
    vec2(layer1Frequency, 1.0);
  float sn =
    noise(
      snUv * 2.0 + vec2(sin(sinOffsets.x * 0.25), time * 0.5 + sinOffsets.x)
    ) *
    2.0 *
    layer1Amplitude;
  float sn2 = smoothstep(
    sn - 1.2 * blurRadius,
    sn + 1.2 * blurRadius,
    (snUv.y - 0.5 * waveSpread) *
      (5.0 - uAudioAverage.x * 0.1 * overallSoundScale * 0.5) +
      0.5
  );

  vec2 snUvBis =
    (uv + vec2((fullFbm - 0.5) * 0.85) + vec2(0.0, 0.025) + textureNoiseDisp1) *
    vec2(layer2Frequency, 1.0);
  float snBis =
    noise(
      snUvBis * 4.0 +
        vec2(
          sin(sinOffsets.y * 0.15) * 2.4 + 293.0,
          time * 1.0 + sinOffsets.y * 0.5
        )
    ) *
    2.0 *
    layer2Amplitude;
  float sn2Bis = smoothstep(
    snBis - (0.9 + uAudioAverage.y * 0.4 * overallSoundScale) * blurRadius,
    snBis + (0.9 + uAudioAverage.y * 0.8 * overallSoundScale) * blurRadius,
    (snUvBis.y - 0.6 * waveSpread) * (5.0 - uAudioAverage.y * 0.75) + 0.5
  );

  vec2 snUvThird =
    (uv + vec2((fullFbm - 0.5) * 1.1) + textureNoiseDisp3) *
    vec2(layer3Frequency, 1.0);
  float snThird =
    noise(
      snUvThird * 6.0 +
        vec2(
          sin(sinOffsets.z * 0.1) * 2.4 + 153.0,
          time * 1.2 + sinOffsets.z * 0.8
        )
    ) *
    2.0 *
    layer3Amplitude;
  float sn2Third = smoothstep(
    snThird - 0.7 * blurRadius,
    snThird + 0.7 * blurRadius,
    (snUvThird.y - 0.9 * waveSpread) * 6.0 + 0.5
  );

  sn2 = pow(sn2, 0.8);
  sn2Bis = pow(sn2Bis, 0.9);

  
  vec3 sinColor;
  sinColor = blendLinearBurn_13_5(bloopColorMain, bloopColorLow, 1.0 - sn2);
  sinColor = blendLinearBurn_13_5(
    sinColor,
    mix(bloopColorMain, bloopColorMid, 1.0 - sn2Bis),
    sn2
  );
  sinColor = mix(
    sinColor,
    mix(bloopColorMain, bloopColorHigh, 1.0 - sn2Third),
    sn2 * sn2Bis
  );

  
  sdf.color = mix(sdf.color, vec4(sinColor, 1), args.amount);

  
  sdf.distance = mix(sdf.distance, length(adjusted_st) - radius, args.amount);

  return sdf;
}

float micSdf(vec2 st, float muted) {
  float d = 100.0;
  float strokeWidth = 0.03;
  vec2 elementSize = vec2(0.12, 0.26);
  vec2 elementPos = vec2(0.0, elementSize.y * 0.585);
  float element = sdRoundedBox(
    st - elementPos,
    elementSize,
    vec4(min(elementSize.x, elementSize.y))
  );
  element = element - strokeWidth;
  d = min(d, element);

  vec2 standSize = elementSize * 2.2;
  vec2 standPos = vec2(elementPos.x, elementPos.y - 0.05);
  st.y += 0.08;
  float ta = -pi / 2.0; 
  float tb = pi / 2.0; 
  float w = 0.0;
  float stand = sdArc(
    st - standPos,
    vec2(sin(ta), cos(ta)),
    vec2(sin(tb), cos(tb)),
    standSize.x,
    w
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(standSize.x, 0.06), vec2(standSize.x, 0.0))
  );
  stand = min(
    stand,
    sdSegment(st - standPos, vec2(-standSize.x, 0.06), vec2(-standSize.x, 0.0))
  );

  float foot = sdSegment(
    st - standPos,
    vec2(0.0, -standSize.x),
    vec2(0.0, -standSize.x * 1.66)
  );
  foot = min(
    foot,
    sdSegment(
      st - standPos,
      vec2(-standSize.x * 0.68, -standSize.x * 1.66),
      vec2(standSize.x * 0.68, -standSize.x * 1.66)
    )
  );
  stand = min(stand, foot);

  d = min(d, abs(stand) - strokeWidth);

  return d;
}

ColoredSDF applyBottomAlignedBarsAndMicState(
  ColoredSDF sdf,
  SDFArgs args,
  vec4 avgMag,
  float micLevel,
  bool isDarkMode
) {
  float d = 1000.0;
  int barCount = 5;
  int loopCount = barCount;
  if (args.amount == 0.0) {
    loopCount = 1; 
  }
  for (int i = 0; i < loopCount; i++) {
    float f = float(float(i) + 0.5) / float(barCount); 

    
    float w = 1.0 / float(barCount) * 0.42;
    float h = w;

    
    float entryDuration = 1.8;
    float entryAnimation =
      fixedSpring(scaled(0.0, entryDuration, args.duration), 0.94) *
      args.amount;
    vec2 pos = vec2(f - 0.5, 0.0) * args.mainRadius * 1.9;
    pos.x *= entryAnimation;

    if (i == 0) {
      float micScale = mix(6.0 - micLevel * 2.0, 6.0, args.amount);
      float yOffset = w * 2.0;
      d =
        micSdf(
          (args.st - pos + vec2(-w * 0.15 * args.amount, yOffset)) * micScale,
          1.0 - args.amount
        ) /
        micScale;
    } else {
      
      h += avgMag[i - 1] * (0.1 + (1.0 - abs(f - 0.5) * 2.0) * 0.1) * 0.7;
      h = mix(w, h, smoothstep(0.8, 1.0, entryAnimation));

      float bubbleInDur = 0.5;
      float bubbleOutDur = 0.4;

      
      float bubbleEffect =
        fixedSpring(
          scaled(
            f / 4.0,
            f / 4.0 + bubbleInDur,
            args.duration - entryDuration / 8.0
          ),
          1.0
        ) *
        pow(
          1.0 -
            scaled(
              f / 8.0 + bubbleInDur / 8.0,
              f / 4.0 + bubbleInDur / 8.0 + bubbleOutDur,
              args.duration - entryDuration / 8.0
            ),
          2.0
        );

      h += bubbleEffect * min(h, w);

      
      w *= args.amount;
      h *= args.amount;

      h = min(h, 0.23); 

      pos.y -= 0.25;
      pos.y += h;
      pos.y += bubbleEffect * w * 0.5;

      float dd = sdRoundedBox(args.st - pos, vec2(w, h), vec4(w));
      d = min(d, dd);
    }
  }

  sdf.distance = d; 
  sdf.color = mix(
    sdf.color,
    isDarkMode
      ? vec4(1.0)
      : vec4(0.0, 0.0, 0.0, 1.0),
    args.amount
  );
  return sdf;
}

ColoredSDF applyHaltState(ColoredSDF sdf, SDFArgs args) {
  
  float radius = mix(
    0.4,
    mix(0.4, 0.45, args.amount),
    sin(args.time * 0.25) * 0.5 + 0.5
  );
  float strokeWidth = mix(radius / 2.0, 0.02, args.amount);

  
  radius -= strokeWidth;

  radius *= mix(0.7, 1.0, args.amount);
  float circle = abs(length(args.st) - radius) - strokeWidth;

  sdf.distance = mix(sdf.distance, circle, args.amount);
  sdf.color.a = mix(sdf.color.a, pow(0.8, 2.2), scaled(0.5, 1.0, args.amount));
  return sdf;
}

vec3 blendNormal(vec3 base, vec3 blend) {
  return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
  return blendNormal(base, blend) * opacity + base * (1.0 - opacity);
}

in vec2 out_uv;
out vec4 fragColor;

layout(std140) uniform BlorbUniformsObject {
  float time;
  float micLevel;
  float touchDownTimestamp;
  float touchUpTimestamp;
  float stateListen;
  float listenTimestamp;
  float stateThink;
  float thinkTimestamp;
  float stateSpeak;
  float speakTimestamp;
  float readyTimestamp;
  float stateHalt;
  float haltTimestamp;
  float stateFailedToConnect;
  float failedToConnectTimestamp;
  vec4 avgMag;
  vec4 cumulativeAudio;
  vec2 viewport;
  float screenScaleFactor;
  float silenceAmount;
  float silenceTimestamp;
  bool isDarkMode;
  bool fadeBloopWhileListening;
  bool isNewBloop;
  bool isAdvancedBloop;
  vec3 bloopColorMain;
  vec3 bloopColorLow;
  vec3 bloopColorMid;
  vec3 bloopColorHigh;
} ubo; 

uniform sampler2D uTextureNoise; 

void main() {
  vec2 st = out_uv - 0.5;
  float viewRatio = ubo.viewport.y / ubo.viewport.x;
  st.y *= viewRatio;

  ColoredSDF sdf;
  sdf.distance = 1000.0;
  sdf.color = vec4(1.0);

  SDFArgs args;
  args.st = st;
  args.time = ubo.time;
  args.mainRadius = 0.49;

  SDFArgs idleArgs = args;
  SDFArgs listenArgs = args;
  SDFArgs thinkArgs = args;
  SDFArgs speakArgs = args;
  SDFArgs haltArgs = args;
  SDFArgs failedToConnectArgs = args;

  idleArgs.amount = 1.0;
  listenArgs.amount = ubo.stateListen;
  thinkArgs.amount = ubo.stateThink;
  speakArgs.amount = ubo.stateSpeak;
  haltArgs.amount = ubo.stateHalt;
  failedToConnectArgs.amount = ubo.stateFailedToConnect;

  idleArgs.duration = ubo.time - ubo.readyTimestamp;
  listenArgs.duration = ubo.time - ubo.listenTimestamp;
  thinkArgs.duration = ubo.time - ubo.thinkTimestamp;
  speakArgs.duration = ubo.time - ubo.speakTimestamp;
  haltArgs.duration = ubo.time - ubo.haltTimestamp;
  failedToConnectArgs.duration = ubo.time - ubo.failedToConnectTimestamp;

  if (ubo.isNewBloop) {
    sdf = applyIdleState(sdf, idleArgs, ubo.isDarkMode);
  } else {
    sdf = applyIdleStateLegacy(sdf, idleArgs, ubo.isDarkMode);
  }

  if (failedToConnectArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, failedToConnectArgs);
  }

  if (listenArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      if (speakArgs.amount > 0.0) {
        listenArgs.amount = 1.0;
      }

      
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        true,
        ubo.isAdvancedBloop
      );
    } else {
      sdf = applyListenState(
        sdf,
        listenArgs,
        ubo.micLevel,
        ubo.listenTimestamp,
        ubo.touchDownTimestamp,
        ubo.touchUpTimestamp,
        ubo.fadeBloopWhileListening
      );
    }
  }

  if (thinkArgs.amount > 0.0) {
    sdf = applyThinkState(sdf, thinkArgs);
  }

  if (speakArgs.amount > 0.0) {
    if (ubo.isAdvancedBloop) {
      int binCount = 1;
      sdf = applyListenAndSpeakState(
        sdf,
        speakArgs,
        ubo.micLevel,
        ubo.avgMag,
        ubo.cumulativeAudio,
        binCount,
        ubo.bloopColorMain,
        ubo.bloopColorLow,
        ubo.bloopColorMid,
        ubo.bloopColorHigh,
        uTextureNoise,
        false,
        ubo.isAdvancedBloop
      );
    } else {
      float silenceDuration = ubo.time - ubo.silenceTimestamp;
      sdf = applySpeakState(
        sdf,
        speakArgs,
        ubo.avgMag,
        ubo.silenceAmount,
        silenceDuration
      );
    }
  }

  if (haltArgs.amount > 0.0) {
    sdf = applyHaltState(sdf, haltArgs);
  }

  float clampingTolerance = 0.0075 / ubo.screenScaleFactor;
  float clampedShape = smoothstep(clampingTolerance, 0.0, sdf.distance);
  float alpha = sdf.color.a * clampedShape;
  if (!ubo.isNewBloop) {
    alpha *= scaled(0.0, 1.0, ubo.time);
  }
  fragColor = vec4(sdf.color.rgb * alpha, alpha);
}`,St=`#version 300 es

out vec4 out_position;
out vec2 out_uv;

const vec4 blitFullscreenTrianglePositions[6] = vec4[](
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0),
  vec4(-1.0, -1.0, 0.0, 1.0),
  vec4(3.0, -1.0, 0.0, 1.0),
  vec4(-1.0, 3.0, 0.0, 1.0)
);

void main() {
  out_position = blitFullscreenTrianglePositions[gl_VertexID];
  out_uv = out_position.xy * 0.5 + 0.5;
  out_uv.y = 1.0 - out_uv.y;
  gl_Position = out_position;
}`;class ce{#o;#i;#e;#a=[];#s={};#n;#t;static#r="BlorbUniformsObject";constructor(e,n){this.#e=e;const a=e.getUniformBlockIndex(n,ce.#r),o=e.getActiveUniformBlockParameter(n,a,e.UNIFORM_BLOCK_DATA_SIZE);this.#n=e.createBuffer(),e.bindBuffer(e.UNIFORM_BUFFER,this.#n),e.bufferData(e.UNIFORM_BUFFER,o,e.DYNAMIC_DRAW);const r=0;e.bindBufferBase(e.UNIFORM_BUFFER,r,this.#n),e.uniformBlockBinding(n,a,r);const i=e.getActiveUniformBlockParameter(n,a,e.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES);this.#a=[],this.#s={};for(let l=0;l<i.length;l++){const g=i[l],p=e.getActiveUniform(n,g);if(!p)throw new Error("No uniformInfo for index "+g);let h=p.name;h=h.replace(/\[0\]$/,"");const v=e.getActiveUniforms(n,[g],e.UNIFORM_OFFSET)[0];this.#a.push(h),this.#s[h]=v}this.#t=new ArrayBuffer(o),this.#o=new Float32Array(this.#t),this.#i=new Int32Array(this.#t)}setVariablesAndRender(e){for(const n of this.#a){const[,a]=n.split("."),r=this.#s[n]/4,i=e[a];typeof i=="number"?this.#o[r]=i:typeof i=="boolean"?this.#i[r]=i?1:0:Array.isArray(i)&&this.#o.set(i,r)}this.#e.bindBuffer(this.#e.UNIFORM_BUFFER,this.#n),this.#e.bufferSubData(this.#e.UNIFORM_BUFFER,0,this.#t),this.#e.drawArrays(this.#e.TRIANGLE_STRIP,0,6)}}function w(t){const e=t.replace("#",""),n=parseInt(e.substring(0,2),16)/255,a=parseInt(e.substring(2,4),16)/255,o=parseInt(e.substring(4,6),16)/255;return new Float32Array([n,a,o])}const ae={BLUE:{bloopColorMain:w("#DCF7FF"),bloopColorLow:w("#0181FE"),bloopColorMid:w("#A4EFFF"),bloopColorHigh:w("#FFFDEF")},DARK_BLUE:{bloopColorMain:w("#DAF5FF"),bloopColorLow:w("#0066CC"),bloopColorMid:w("#2EC6F5"),bloopColorHigh:w("#72EAF5")},GREYSCALE:{bloopColorMain:w("#D7D7D7"),bloopColorLow:w("#303030"),bloopColorMid:w("#989898"),bloopColorHigh:w("#FFFFFF")},WHITE:{bloopColorMain:w("#FFFFFF"),bloopColorLow:w("#FFFFFF"),bloopColorMid:w("#FFFFFF"),bloopColorHigh:w("#FFFFFF")},BLACK:{bloopColorMain:w("#000000"),bloopColorLow:w("#000000"),bloopColorMid:w("#000000"),bloopColorHigh:w("#000000")}},At=t=>{const e=_e();return t?ae.BLUE:e?ae.WHITE:ae.BLACK},Ae=[300,300],yt={bands:4,loPass:0,hiPass:400},Ct=t=>{const e=n=>{let r=1-Math.max(-100,Math.min(-10,n))*-1/100;return r=Math.sqrt(r),r};return t.map(n=>n===-1/0?0:e(n))};function Le(t,e){const[n,a]=c.useState([]),o=c.useRef(void 0);return c.useEffect(()=>{if(!t)return;if(!o.current){const v=new AudioContext,m=v.createMediaElementSource(t),s=v.createAnalyser();m.connect(s),s.connect(v.destination),o.current={audioContext:v,mediaElementAudioSourceNode:m,analyserNode:s}}const{analyserNode:r,audioContext:i}=o.current,l=r?.frequencyBinCount??0,g=new Float32Array(l),h=setInterval(()=>{if(!r)return;r.getFloatFrequencyData(g);let v=g.slice(e.loPass,e.hiPass);const m=Ct(v),s=Math.ceil(m.length/e.bands),b=[];for(let A=0;A<e.bands;A++){const f=m.slice(A*s,(A+1)*s).reduce((d,x)=>d+x,0);b.push(f/s)}a(b)},e.updateInterval);return()=>{clearInterval(h),i&&i.close()}},[t,e.bands,e.hiPass,e.loPass,e.updateInterval]),n}const wt=t=>{const e=Le(t,{bands:ie,updateInterval:G,loPass:0,hiPass:400,analyserOptions:{fftSize:Fe}});return e.length===0?Ee:e},_t=(t,e)=>{const n=wt(t),a=Pe(n,{sampleRate:Ie,binCount:e.bins,bandCount:e.bands,gainMultipliers:e.gainMultipliers}),o=re({magnitudes:n,binCount:1,gainMultiplier:1});return{bandMagnitudes:a,cumulativeMagnitude:o}},Tt=t=>{const[e,n]=c.useState({audioData:[0,0,0,0],cumulativeAudioData:[0,0,0,0]}),a=c.useRef([0,0,0,0]),o=c.useRef(void 0),r=c.useRef(performance.now()),{bandMagnitudes:i,cumulativeMagnitude:l}=_t(t,{bands:3,bins:1,gainMultipliers:[10,1,1]});a.current=[...i,l].flat();const g=c.useCallback(()=>{const p=performance.now(),h=(p-r.current)/1e3;r.current=p;const v=a.current,{audioData:m,cumulativeAudioData:s}=e,b=tt({deltaTimeS:h,audioDataRaw:v,prevAudioData:m,prevCumulativeAudioData:s});n(b)},[e]);return c.useEffect(()=>(o.current||(o.current=window.setInterval(g,G)),()=>{clearInterval(o.current),o.current=void 0}),[g]),e},ye=Promise.resolve();function Ne({url:t,readyToPlay:e}){const n=c.useRef(void 0),a=c.useRef(ye);return c.useEffect(()=>(n.current||(n.current=document.createElement("audio")),()=>{a.current.then(()=>{n.current&&(n.current.pause(),n.current.removeAttribute("src"),n.current.remove(),a.current=ye)})}),[]),c.useEffect(()=>{t&&n.current&&n.current.src!==t&&e&&a.current.then(()=>{n.current&&(n.current.crossOrigin="anonymous",n.current.src=t,a.current=n.current.play())})},[e,t]),n.current}function Dt({className:t,url:e}){const[n,a]=c.useState(!1),o=Ne({url:e,readyToPlay:n}),r=Le(o,yt),i=c.useMemo(()=>[0,0,0,0],[]);return u.jsx(Ue,{className:t,isAdvanced:!1,avgMag:r,cumulativeAudioData:i,onRenderComplete:()=>a(!0)})}function Mt({className:t,url:e}){const[n,a]=c.useState(!1),o=Ne({url:e,readyToPlay:n}),r=Tt(o),{audioData:i,cumulativeAudioData:l}=r;return u.jsx(Ue,{className:t,isAdvanced:!0,avgMag:i,cumulativeAudioData:l,onRenderComplete:()=>a(!0)})}const Ue=({className:t,avgMag:e,cumulativeAudioData:n,isAdvanced:a,onRenderComplete:o})=>{const r=_e(),i=c.useMemo(()=>performance.now()/1e3,[]),l=c.useMemo(()=>performance.now()/1e3,[]),g=c.useRef(void 0),[p,h]=c.useState(Ae),{canvasSizeRef:v,handleCanvasSizeUpdate:m}=mn(Ae),s=c.useCallback(S=>{h([S.width,S.height])},[]),[b,A]=c.useState(performance.now()/1e3);c.useEffect(()=>{const S=setInterval(()=>{A(performance.now()/1e3)},G);return()=>clearInterval(S)},[]);const f=At(a),d=kn({viewport:p,canvasSize:v.current,shouldMeasurePerf:!0,source:"VoicePicker"}),x=Pn({shouldCalibrate:!0,viewport:p,initialScale:1});return g.current={time:b,micLevel:0,stateListen:0,listenTimestamp:0,stateThink:0,thinkTimestamp:0,stateSpeak:1,speakTimestamp:l,readyTimestamp:i,stateHalt:0,haltTimestamp:0,touchDownTimestamp:0,touchUpTimestamp:0,stateFailedToConnect:0,failedToConnectTimestamp:0,avgMag:e,cumulativeAudio:n,isNewBloop:!0,isAdvancedBloop:a,bloopColorMain:Array.from(f.bloopColorMain),bloopColorLow:Array.from(f.bloopColorLow),bloopColorMid:Array.from(f.bloopColorMid),bloopColorHigh:Array.from(f.bloopColorHigh),isDarkMode:r,screenScaleFactor:window.devicePixelRatio,viewport:p,silenceAmount:0,silenceTimestamp:0,fadeBloopWhileListening:!1},u.jsx(st,{className:U("flex items-center justify-center",t),variablesRef:g,onViewportUpdate:s,onRenderComplete:o,textureImage:ze,textureName:"uTextureNoise",onGlAvailable:d,onCanvasSizeUpdate:m,scale:x,GLUniformsSetter:ce,vert:St,frag:xt})};function Rt({isUnauthenticated:t,loading:e,handleLoginClick:n,handleCancelClick:a,handleConfirmClick:o,selectedVoice:r,currentVoiceName:i,cameFromNux:l}){const g="w-52 whitespace-nowrap rounded-full px-20 py-3 font-semibold";return t?u.jsxs(u.Fragment,{children:[u.jsx(q,{className:U(g,"text-white"),onClick:n,children:e?u.jsx(me,{}):u.jsx(k,{id:"IRALWH",defaultMessage:"Log in"})}),u.jsx(q,{className:U(g,"text-black dark:text-white"),color:"ghost",onClick:a,children:u.jsx(k,{id:"8fumUc",defaultMessage:"Back to chat"})})]}):u.jsxs(u.Fragment,{children:[u.jsx(q,{className:U(g,"text-white"),onClick:o,children:e?u.jsx(me,{}):r?.voice===i&&!l?u.jsx(k,{id:"MyKAgb",defaultMessage:"Done"}):u.jsx(k,{id:"7+3LaJ",defaultMessage:"Start new chat"})}),u.jsx(q,{className:U(g,"text-black dark:text-white"),color:"ghost",onClick:a,children:u.jsx(k,{id:"dUn4Wd",defaultMessage:"Cancel"})})]})}const kt={offscreenLeft:{x:"-24rem",opacity:0},left:{x:"-12rem",opacity:.5},center:{x:"0",opacity:1},right:{x:"12rem",opacity:.5},offscreenRight:{x:"24rem",opacity:0}};function Bt({conversationId:t,onClose:e,cameFromNux:n=!1,initialVoiceName:a}){const{isUnauthenticated:o}=nn(),r=vn(),{voiceName:i}=Te(),l=gn(),[g,p]=c.useState(!1),h=ve.getGizmoId(ge(t)),[v,m]=c.useState(!1),[s,b]=c.useState(!1);c.useEffect(()=>{requestAnimationFrame(()=>m(!0))},[]);const[A,f]=c.useState(!1),[d,x]=c.useState(null);c.useEffect(()=>{if(l.length>0){const _=l.findIndex(z=>z.voice===(a||i));_>=0?x(_):x(2),f(!0)}},[l,i,a]);const S=d!=null?(d-2+l.length)%l.length:0,C=d!=null?(d-1+l.length)%l.length:1,y=d!=null?(d+1)%l.length:3,T=d!=null?(d+2)%l.length:4,D=l[d??0],F=l[S],H=l[C],B=l[y],X=l[T],E=_=>{x(_)},{stopVoiceMode:K,startVoiceMode:O}=Mn({requestMicPermissions:n}),{setValue:P}=bn(tn.VoiceName),V=Re(_=>_.voiceMode),I=n&&!h?"advanced":V,$=c.useCallback(()=>{b(!n),setTimeout(()=>{const _=d!=null?l[d]?.voice:l[0]?.voice;sessionStorage.setItem("selectedVoiceName",_),r({authType:"login",callback:z=>{on.logLogInButtonClicked({provider:z,location:"Voice Picker Page"})}})},Z)},[n,r,d,l]),Y=c.useCallback(async()=>{b(!n),setTimeout(async()=>{p(!0);const _=d!=null?l[d]?.voice:l[0]?.voice;if(n||_!==i){n||R.voiceSelected.click({action:"changed",voice:_}),P(_),await K(),pn("/");try{await O({conversation_id:void 0,eventSource:"voice_picker",voice_mode:I,voice:_,clientThreadId:an(),gizmo_id:ve.getGizmoId(ge(t))})}catch(z){sn.addError(`Failed to start voice mode after voice picker: ${z}`)}}else R.voiceSelected.click({action:"kept",voice:i});p(!1),e()},Z)},[n,t,i,e,d,P,O,K,I,l]),M=()=>{b(!0),setTimeout(e,Z)};_n({setSelectedVoiceIndex:x,prevVoiceIndex:C,nextVoiceIndex:y});const[j,le]=c.useState(!1),ue=_=>{_==="prev"?E(C):_==="next"&&E(y),le(!0),setTimeout(()=>{le(!1)},175)},de=c.useMemo(()=>({className:"h-max min-h-bloop w-max min-w-bloop",url:D?.preview_url}),[D?.preview_url]);return!A||d==null?u.jsx("div",{className:"fixed left-0 top-0 z-50 flex h-full w-full bg-token-main-surface-primary"}):u.jsxs("div",{className:`fixed left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-white transition-opacity duration-300 dark:bg-gray-800 ${v&&!s?"opacity-100":"opacity-0"}`,children:[u.jsx("h1",{className:"mb-8 mt-36 text-3xl font-semibold",children:o?u.jsx(k,{id:"P4GR/e",defaultMessage:"Try voice mode for free"}):u.jsx(k,{id:"2whyE9",defaultMessage:"Choose a voice"})}),u.jsx("div",{className:"flex h-full w-full items-center justify-center",children:D?n&&!h||I==="advanced"?u.jsx(Mt,{...de}):u.jsx(Dt,{...de}):null}),u.jsx("div",{className:"mb-8 flex items-center justify-between text-center",children:u.jsxs("div",{className:"relative flex h-24 w-48",children:[u.jsx(N,{voice:F,variant:"offscreenLeft"},F?.name),u.jsx(N,{voice:H,variant:"left",onClick:()=>E(C)},H?.name),u.jsx(Ce,{direction:"prev",onClick:()=>ue("prev"),isFading:j}),u.jsx(N,{voice:D,variant:"center"},D?.name),u.jsx(Ce,{direction:"next",onClick:()=>ue("next"),isFading:j}),u.jsx(N,{voice:B,variant:"right",onClick:()=>E(y)},B?.name),u.jsx(N,{voice:X,variant:"offscreenRight"},X?.name),u.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-52 transform bg-gradient-to-r from-[var(--main-surface-background)] to-transparent"}),u.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-52 transform bg-gradient-to-l from-[var(--main-surface-background)] to-transparent"}),u.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-96 transform bg-white dark:bg-gray-800"}),u.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-96 transform bg-white dark:bg-gray-800"})]})}),u.jsx("div",{className:"mb-36 flex flex-col space-y-3",children:u.jsx(Rt,{isUnauthenticated:o,loading:g,handleLoginClick:$,handleCancelClick:M,handleConfirmClick:Y,selectedVoice:D,currentVoiceName:i,cameFromNux:n})})]})}function N({voice:t,variant:e,onClick:n}){return u.jsxs(Oe.button,{onClick:n,className:"absolute flex w-48 select-none flex-col items-center justify-center",variants:kt,animate:e,initial:e,transition:{duration:.25,ease:"easeInOut"},children:[u.jsx("p",{className:`text-lg ${e==="center"?"font-semibold":""}`,children:t?.name}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-[var(--text-secondary)]",children:t?.description})]})}function Ce({direction:t,onClick:e,isFading:n}){const a=t==="prev"?hn:rn,o=we(),r=t==="prev"?o.formatMessage({id:"ajuz05",defaultMessage:"Previous voice"}):o.formatMessage({id:"Dr8wrw",defaultMessage:"Next voice"});return u.jsx("button",{className:`duration-175 absolute ${t==="prev"?"-left-4":"-right-4"} top-2 z-50 transition-opacity ${n?"opacity-20":"opacity-100"}`,onClick:e,"aria-label":r,children:u.jsx(a,{className:"h-6 w-6 text-token-text-quaternary hover:text-token-text-secondary"})})}export{G as B,st as G,Bt as V,Tn as a,Dn as b,Ut as c,At as d,kn as e,Pn as f,Nt as g,ce as h,xt as i,ze as n,tt as s,Mn as u,St as v};
//# sourceMappingURL=eawd0edgdj0m2r9l.js.map
