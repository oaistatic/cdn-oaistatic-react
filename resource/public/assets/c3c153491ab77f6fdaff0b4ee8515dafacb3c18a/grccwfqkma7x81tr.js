import{r as h,j as Oe,m as S,a as Pe,g as Le}from"./fs6h2trisr1juto6.js";import{e as be,g as he,L as ye,bx as fe}from"./njq6ygky3ttysgdk.js";function Ae(e,t,r){try{const n=JSON.parse(window.localStorage.getItem(e)??"");return r(n)?n:t}catch{return t}}function ke(e,t){window.localStorage.setItem(e,JSON.stringify(t))}const ve=be(e=>({data:{},setItem:(t,r)=>e(n=>({data:{...n.data,[t]:r}}))}));function Ue(e,t,r){const[n,a]=h.useState(!1),o=ve(u=>u.data[e]),s=ve(u=>u.setItem);return h.useEffect(()=>{if(!n){const u=Ae(e,t,r);s(e,u),a(!0)}},[n,e,t,r,s]),h.useEffect(()=>{n&&ke(e,o)},[e,o,n]),[o??t,u=>{s(e,u)}]}const We="SONIC_SETTINGS_1717364375";function De(e){return typeof e.version=="number"&&e.version>=H.version}function je(e){return!(typeof e!="object"||typeof e.suggestions!="boolean")}const H={version:0,useLocation:!1,temperatureUnit:void 0};function de(e){try{const t=he.getItem(ye.SearchSettings,{userId:e});return De(t)?t:H}catch{return H}}const Te=h.createContext({settings:H,setSettings:()=>{}}),Pt=({userId:e,children:t})=>{const[r,n]=h.useState(()=>de(e));return h.useEffect(()=>n(de(e)),[e]),h.useEffect(()=>{he.setItem(ye.SearchSettings,r,{userId:e})},[r,e]),Oe.jsx(Te.Provider,{value:{settings:r,setSettings:n},children:t})},Ne={suggestions:!0,showInlineFollowups:!1},me=h.createContext({settings:Ne,setSettings:()=>{}}),Lt=({userId:e,children:t})=>{const[r,n]=Ue(`_INTERNAL_${e}_${We}`,Ne,je);return Oe.jsx(me.Provider,{value:{settings:r,setSettings:n},children:t})};function At(){const{settings:e,setSettings:t}=h.useContext(Te);return[e,t]}function kt(){const{settings:e,setSettings:t}=h.useContext(me);return[e,t]}const Re={isInternalSettingsModalOpen:!1,isSettingsModalOpen:!1,isDebugModalOpen:!1,isUsageNuxModalOpen:!1,isWelcomePageOpen:!1},C=be()(()=>({...Re})),R={isInternalSettingsModalOpen:e=>e.isInternalSettingsModalOpen,isSettingsModalOpen:e=>e.isSettingsModalOpen,isDebugModalOpen:e=>e.isDebugModalOpen,isUsageNuxModalOpen:e=>e.isUsageNuxModalOpen,isWelcomePageOpen:e=>e.isWelcomePageOpen,isModalOpen:e=>R.isInternalSettingsModalOpen(e)||R.isSettingsModalOpen(e)||R.isDebugModalOpen(e)||R.isUsageNuxModalOpen(e)||R.isWelcomePageOpen(e)},Ut={toggleInternalSettingsModalOpen(){C.setState(e=>({isInternalSettingsModalOpen:!e.isInternalSettingsModalOpen}))},setInternalSettingsModalOpen(e){C.setState({isInternalSettingsModalOpen:e})},toggleSettingsModalOpen(){C.setState(e=>({isSettingsModalOpen:!e.isSettingsModalOpen}))},setSettingsModalOpen(e){C.setState({isSettingsModalOpen:e})},toggleDebugModalOpen(){C.setState(e=>({isDebugModalOpen:!e.isDebugModalOpen}))},setDebugModalOpen(e){C.setState({isDebugModalOpen:e})},setUsageNuxModalOpen(e){C.setState({isUsageNuxModalOpen:e})},setWelcomePageOpen(e){C.setState({isWelcomePageOpen:e})}};var ue={},D={},m={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.isEventSourceSupported=e.isReactNative=e.ReadyState=e.DEFAULT_HEARTBEAT=e.UNPARSABLE_JSON_OBJECT=e.DEFAULT_RECONNECT_INTERVAL_MS=e.DEFAULT_RECONNECT_LIMIT=e.SOCKET_IO_PING_CODE=e.SOCKET_IO_PATH=e.SOCKET_IO_PING_INTERVAL=e.DEFAULT_EVENT_SOURCE_OPTIONS=e.EMPTY_EVENT_HANDLERS=e.DEFAULT_OPTIONS=void 0;var t=1,r=1e3*t;e.DEFAULT_OPTIONS={},e.EMPTY_EVENT_HANDLERS={},e.DEFAULT_EVENT_SOURCE_OPTIONS={withCredentials:!1,events:e.EMPTY_EVENT_HANDLERS},e.SOCKET_IO_PING_INTERVAL=25*r,e.SOCKET_IO_PATH="/socket.io/?EIO=3&transport=websocket",e.SOCKET_IO_PING_CODE="2",e.DEFAULT_RECONNECT_LIMIT=20,e.DEFAULT_RECONNECT_INTERVAL_MS=5e3,e.UNPARSABLE_JSON_OBJECT={},e.DEFAULT_HEARTBEAT={message:"ping",timeout:6e4,interval:25e3},function(a){a[a.UNINSTANTIATED=-1]="UNINSTANTIATED",a[a.CONNECTING=0]="CONNECTING",a[a.OPEN=1]="OPEN",a[a.CLOSING=2]="CLOSING",a[a.CLOSED=3]="CLOSED"}(e.ReadyState||(e.ReadyState={}));var n=function(){try{return"EventSource"in globalThis}catch{return!1}};e.isReactNative=typeof navigator<"u"&&navigator.product==="ReactNative",e.isEventSourceSupported=!e.isReactNative&&n()})(m);var q={},z={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetWebSockets=e.sharedWebSockets=void 0,e.sharedWebSockets={};var t=function(r){if(r&&e.sharedWebSockets.hasOwnProperty(r))delete e.sharedWebSockets[r];else for(var n in e.sharedWebSockets)e.sharedWebSockets.hasOwnProperty(n)&&delete e.sharedWebSockets[n]};e.resetWebSockets=t})(z);var X={},p={};Object.defineProperty(p,"__esModule",{value:!0});p.setUpSocketIOPing=p.appendQueryParams=p.parseSocketIOUrl=void 0;var V=m,Fe=function(e){if(e){var t=/^https|wss/.test(e),r=e.replace(/^(https?|wss?)(:\/\/)?/,""),n=r.replace(/\/$/,""),a=t?"wss":"ws";return"".concat(a,"://").concat(n).concat(V.SOCKET_IO_PATH)}else if(e===""){var t=/^https/.test(window.location.protocol),a=t?"wss":"ws",o=window.location.port?":".concat(window.location.port):"";return"".concat(a,"://").concat(window.location.hostname).concat(o).concat(V.SOCKET_IO_PATH)}return e};p.parseSocketIOUrl=Fe;var $e=function(e,t){t===void 0&&(t={});var r=/\?([\w]+=[\w]+)/,n=r.test(e),a="".concat(Object.entries(t).reduce(function(o,s){var i=s[0],u=s[1];return o+"".concat(i,"=").concat(u,"&")},"").slice(0,-1));return"".concat(e).concat(n?"&":"?").concat(a)};p.appendQueryParams=$e;var Ge=function(e,t){t===void 0&&(t=V.SOCKET_IO_PING_INTERVAL);var r=function(){return e(V.SOCKET_IO_PING_CODE)};return window.setInterval(r,t)};p.setUpSocketIOPing=Ge;var G={};Object.defineProperty(G,"__esModule",{value:!0});G.heartbeat=void 0;var ne=m;function Je(e,t){var r=t||{},n=r.interval,a=n===void 0?ne.DEFAULT_HEARTBEAT.interval:n,o=r.timeout,s=o===void 0?ne.DEFAULT_HEARTBEAT.timeout:o,i=r.message,u=i===void 0?ne.DEFAULT_HEARTBEAT.message:i,c=!1,l=setInterval(function(){try{typeof u=="function"?e.send(u()):e.send(u)}catch{}},a),d=setInterval(function(){c?c=!1:e.close()},s);return e.addEventListener("close",function(){clearInterval(l),clearInterval(d)}),function(){c=!0}}G.heartbeat=Je;var L={},Z={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetSubscribers=e.removeSubscriber=e.addSubscriber=e.hasSubscribers=e.getSubscribers=void 0;var t={},r=[],n=function(u){return(0,e.hasSubscribers)(u)?Array.from(t[u]):r};e.getSubscribers=n;var a=function(u){var c;return((c=t[u])===null||c===void 0?void 0:c.size)>0};e.hasSubscribers=a;var o=function(u,c){t[u]=t[u]||new Set,t[u].add(c)};e.addSubscriber=o;var s=function(u,c){t[u].delete(c)};e.removeSubscriber=s;var i=function(u){if(u&&t.hasOwnProperty(u))delete t[u];else for(var c in t)t.hasOwnProperty(c)&&delete t[c]};e.resetSubscribers=i})(Z);Object.defineProperty(L,"__esModule",{value:!0});L.resetGlobalState=L.assertIsWebSocket=void 0;var He=z,Ve=Z;function Be(e,t){if(!t&&!(e instanceof WebSocket))throw new Error("")}L.assertIsWebSocket=Be;function Ke(e){(0,Ve.resetSubscribers)(e),(0,He.resetWebSockets)(e)}L.resetGlobalState=Ke;var B=S&&S.__assign||function(){return B=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},B.apply(this,arguments)};Object.defineProperty(X,"__esModule",{value:!0});X.attachListeners=void 0;var Qe=p,Ye=G,M=m,qe=L,ze=function(e,t,r){var n;if(t.current.heartbeat&&e instanceof WebSocket){var a=typeof t.current.heartbeat=="boolean"?void 0:t.current.heartbeat;n=(0,Ye.heartbeat)(e,a)}e.onmessage=function(o){var s;n?.(),t.current.onMessage&&t.current.onMessage(o),!(typeof t.current.filter=="function"&&t.current.filter(o)!==!0)&&(t.current.heartbeat&&typeof t.current.heartbeat!="boolean"&&((s=t.current.heartbeat)===null||s===void 0?void 0:s.returnMessage)===o.data||r(o))}},Xe=function(e,t,r,n){e.onopen=function(a){t.current.onOpen&&t.current.onOpen(a),n.current=0,r(M.ReadyState.OPEN)}},Ze=function(e,t,r,n,a){if(M.isEventSourceSupported&&e instanceof EventSource)return function(){};(0,qe.assertIsWebSocket)(e,t.current.skipAssert);var o;return e.onclose=function(s){var i;if(t.current.onClose&&t.current.onClose(s),r(M.ReadyState.CLOSED),t.current.shouldReconnect&&t.current.shouldReconnect(s)){var u=(i=t.current.reconnectAttempts)!==null&&i!==void 0?i:M.DEFAULT_RECONNECT_LIMIT;if(a.current<u){var c=typeof t.current.reconnectInterval=="function"?t.current.reconnectInterval(a.current):t.current.reconnectInterval;o=window.setTimeout(function(){a.current++,n()},c??M.DEFAULT_RECONNECT_INTERVAL_MS)}else t.current.onReconnectStop&&t.current.onReconnectStop(u),console.warn("Max reconnect attempts of ".concat(u," exceeded"))}},function(){return o&&window.clearTimeout(o)}},xe=function(e,t,r,n,a){var o;return e.onerror=function(s){var i;if(t.current.onError&&t.current.onError(s),M.isEventSourceSupported&&e instanceof EventSource&&(t.current.onClose&&t.current.onClose(B(B({},s),{code:1006,reason:"An error occurred with the EventSource: ".concat(s),wasClean:!1})),r(M.ReadyState.CLOSED),e.close()),t.current.retryOnError)if(a.current<((i=t.current.reconnectAttempts)!==null&&i!==void 0?i:M.DEFAULT_RECONNECT_LIMIT)){var u=typeof t.current.reconnectInterval=="function"?t.current.reconnectInterval(a.current):t.current.reconnectInterval;o=window.setTimeout(function(){a.current++,n()},u??M.DEFAULT_RECONNECT_INTERVAL_MS)}else t.current.onReconnectStop&&t.current.onReconnectStop(t.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(t.current.reconnectAttempts," exceeded"))},function(){return o&&window.clearTimeout(o)}},et=function(e,t,r,n,a,o){var s=t.setLastMessage,i=t.setReadyState,u,c,l;return r.current.fromSocketIO&&(u=(0,Qe.setUpSocketIOPing)(o)),ze(e,r,s),Xe(e,r,i,a),c=Ze(e,r,i,n,a),l=xe(e,r,i,n,a),function(){i(M.ReadyState.CLOSING),c(),l(),e.close(),u&&clearInterval(u)}};X.attachListeners=et;var x={},K=S&&S.__assign||function(){return K=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},K.apply(this,arguments)};Object.defineProperty(x,"__esModule",{value:!0});x.attachSharedListeners=void 0;var tt=z,A=m,$=Z,rt=p,nt=G,at=function(e,t,r){var n;r&&e instanceof WebSocket&&(n=(0,nt.heartbeat)(e,typeof r=="boolean"?void 0:r)),e.onmessage=function(a){n?.(),(0,$.getSubscribers)(t).forEach(function(o){o.optionsRef.current.onMessage&&o.optionsRef.current.onMessage(a),!(typeof o.optionsRef.current.filter=="function"&&o.optionsRef.current.filter(a)!==!0)&&(r&&typeof r!="boolean"&&r?.returnMessage===a.data||o.setLastMessage(a))})}},ct=function(e,t){e.onopen=function(r){(0,$.getSubscribers)(t).forEach(function(n){n.reconnectCount.current=0,n.optionsRef.current.onOpen&&n.optionsRef.current.onOpen(r),n.setReadyState(A.ReadyState.OPEN)})}},ot=function(e,t){e instanceof WebSocket&&(e.onclose=function(r){(0,$.getSubscribers)(t).forEach(function(n){n.optionsRef.current.onClose&&n.optionsRef.current.onClose(r),n.setReadyState(A.ReadyState.CLOSED)}),delete tt.sharedWebSockets[t],(0,$.getSubscribers)(t).forEach(function(n){var a;if(n.optionsRef.current.shouldReconnect&&n.optionsRef.current.shouldReconnect(r)){var o=(a=n.optionsRef.current.reconnectAttempts)!==null&&a!==void 0?a:A.DEFAULT_RECONNECT_LIMIT;if(n.reconnectCount.current<o){var s=typeof n.optionsRef.current.reconnectInterval=="function"?n.optionsRef.current.reconnectInterval(n.reconnectCount.current):n.optionsRef.current.reconnectInterval;setTimeout(function(){n.reconnectCount.current++,n.reconnect.current()},s??A.DEFAULT_RECONNECT_INTERVAL_MS)}else n.optionsRef.current.onReconnectStop&&n.optionsRef.current.onReconnectStop(n.optionsRef.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(o," exceeded"))}})})},ut=function(e,t){e.onerror=function(r){(0,$.getSubscribers)(t).forEach(function(n){n.optionsRef.current.onError&&n.optionsRef.current.onError(r),A.isEventSourceSupported&&e instanceof EventSource&&(n.optionsRef.current.onClose&&n.optionsRef.current.onClose(K(K({},r),{code:1006,reason:"An error occurred with the EventSource: ".concat(r),wasClean:!1})),n.setReadyState(A.ReadyState.CLOSED))}),A.isEventSourceSupported&&e instanceof EventSource&&e.close()}},st=function(e,t,r,n){var a;return r.current.fromSocketIO&&(a=(0,rt.setUpSocketIOPing)(n)),at(e,t,r.current.heartbeat),ot(e,t),ct(e,t),ut(e,t),function(){a&&clearInterval(a)}};x.attachSharedListeners=st;Object.defineProperty(q,"__esModule",{value:!0});q.createOrJoinSocket=void 0;var w=z,F=m,it=X,lt=x,oe=Z,ft=function(e,t,r,n,a){return function(){if((0,oe.removeSubscriber)(e,t),!(0,oe.hasSubscribers)(e)){try{var o=w.sharedWebSockets[e];o instanceof WebSocket&&(o.onclose=function(s){r.current.onClose&&r.current.onClose(s),n(F.ReadyState.CLOSED)}),o.close()}catch{}a&&a(),delete w.sharedWebSockets[e]}}},vt=function(e,t,r,n,a,o,s,i){if(!F.isEventSourceSupported&&n.current.eventSourceOptions)throw F.isReactNative?new Error("EventSource is not supported in ReactNative"):new Error("EventSource is not supported");if(n.current.share){var u=null;w.sharedWebSockets[t]===void 0?(w.sharedWebSockets[t]=n.current.eventSourceOptions?new EventSource(t,n.current.eventSourceOptions):new WebSocket(t,n.current.protocols),e.current=w.sharedWebSockets[t],r(F.ReadyState.CONNECTING),u=(0,lt.attachSharedListeners)(w.sharedWebSockets[t],t,n,i)):(e.current=w.sharedWebSockets[t],r(w.sharedWebSockets[t].readyState));var c={setLastMessage:a,setReadyState:r,optionsRef:n,reconnectCount:s,reconnect:o};return(0,oe.addSubscriber)(t,c),ft(t,c,n,r,u)}else{if(e.current=n.current.eventSourceOptions?new EventSource(t,n.current.eventSourceOptions):new WebSocket(t,n.current.protocols),r(F.ReadyState.CONNECTING),!e.current)throw new Error("WebSocket failed to be created");return(0,it.attachListeners)(e.current,{setLastMessage:a,setReadyState:r},n,o.current,s,i)}};q.createOrJoinSocket=vt;var Ie={};(function(e){var t=S&&S.__awaiter||function(i,u,c,l){function d(f){return f instanceof c?f:new c(function(g){g(f)})}return new(c||(c=Promise))(function(f,g){function y(_){try{v(l.next(_))}catch(T){g(T)}}function E(_){try{v(l.throw(_))}catch(T){g(T)}}function v(_){_.done?f(_.value):d(_.value).then(y,E)}v((l=l.apply(i,u||[])).next())})},r=S&&S.__generator||function(i,u){var c={label:0,sent:function(){if(f[0]&1)throw f[1];return f[1]},trys:[],ops:[]},l,d,f,g;return g={next:y(0),throw:y(1),return:y(2)},typeof Symbol=="function"&&(g[Symbol.iterator]=function(){return this}),g;function y(v){return function(_){return E([v,_])}}function E(v){if(l)throw new TypeError("Generator is already executing.");for(;c;)try{if(l=1,d&&(f=v[0]&2?d.return:v[0]?d.throw||((f=d.return)&&f.call(d),0):d.next)&&!(f=f.call(d,v[1])).done)return f;switch(d=0,f&&(v=[v[0]&2,f.value]),v[0]){case 0:case 1:f=v;break;case 4:return c.label++,{value:v[1],done:!1};case 5:c.label++,d=v[1],v=[0];continue;case 7:v=c.ops.pop(),c.trys.pop();continue;default:if(f=c.trys,!(f=f.length>0&&f[f.length-1])&&(v[0]===6||v[0]===2)){c=0;continue}if(v[0]===3&&(!f||v[1]>f[0]&&v[1]<f[3])){c.label=v[1];break}if(v[0]===6&&c.label<f[1]){c.label=f[1],f=v;break}if(f&&c.label<f[2]){c.label=f[2],c.ops.push(v);break}f[2]&&c.ops.pop(),c.trys.pop();continue}v=u.call(i,c)}catch(_){v=[6,_],d=0}finally{l=f=0}if(v[0]&5)throw v[1];return{value:v[0]?v[1]:void 0,done:!0}}};Object.defineProperty(e,"__esModule",{value:!0}),e.getUrl=void 0;var n=p,a=m,o=function(i){return new Promise(function(u){return window.setTimeout(u,i)})},s=function(i,u,c){return c===void 0&&(c=0),t(void 0,void 0,void 0,function(){var l,d,f,g,y,E,v,_;return r(this,function(T){switch(T.label){case 0:if(typeof i!="function")return[3,10];T.label=1;case 1:return T.trys.push([1,3,,9]),[4,i()];case 2:return l=T.sent(),[3,9];case 3:return T.sent(),u.current.retryOnError?(d=(E=u.current.reconnectAttempts)!==null&&E!==void 0?E:a.DEFAULT_RECONNECT_LIMIT,c<d?(f=typeof u.current.reconnectInterval=="function"?u.current.reconnectInterval(c):u.current.reconnectInterval,[4,o(f??a.DEFAULT_RECONNECT_INTERVAL_MS)]):[3,5]):[3,7];case 4:return T.sent(),[2,(0,e.getUrl)(i,u,c+1)];case 5:return(_=(v=u.current).onReconnectStop)===null||_===void 0||_.call(v,c),[2,null];case 6:return[3,8];case 7:return[2,null];case 8:return[3,9];case 9:return[3,11];case 10:l=i,T.label=11;case 11:return g=u.current.fromSocketIO?(0,n.parseSocketIOUrl)(l):l,y=u.current.queryParams?(0,n.appendQueryParams)(g,u.current.queryParams):g,[2,y]}})})};e.getUrl=s})(Ie);var Me={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.websocketWrapper=void 0;var t=function(r,n){return new Proxy(r,{get:function(a,o){var s=a[o];return o==="reconnect"?n:typeof s=="function"?(console.error("Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket."),function(){}):s},set:function(a,o,s){return/^on/.test(o)?(console.warn("The websocket's event handlers should be defined through the options object passed into useWebSocket."),!1):(a[o]=s,!0)}})};e.websocketWrapper=t,e.default=e.websocketWrapper})(Me);var P=S&&S.__assign||function(){return P=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},P.apply(this,arguments)},dt=S&&S.__awaiter||function(e,t,r,n){function a(o){return o instanceof r?o:new r(function(s){s(o)})}return new(r||(r=Promise))(function(o,s){function i(l){try{c(n.next(l))}catch(d){s(d)}}function u(l){try{c(n.throw(l))}catch(d){s(d)}}function c(l){l.done?o(l.value):a(l.value).then(i,u)}c((n=n.apply(e,t||[])).next())})},St=S&&S.__generator||function(e,t){var r={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},n,a,o,s;return s={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function i(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(o=c[0]&2?a.return:c[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,c[1])).done)return o;switch(a=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,a=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(o=r.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){r=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){r.label=c[1];break}if(c[0]===6&&r.label<o[1]){r.label=o[1],o=c;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(c);break}o[2]&&r.ops.pop(),r.trys.pop();continue}c=t.call(e,r)}catch(l){c=[6,l],a=0}finally{n=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}},_t=S&&S.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(D,"__esModule",{value:!0});D.useWebSocket=void 0;var b=h,ae=Pe,I=m,gt=q,Et=Ie,Ot=_t(Me),Se=L,bt=function(e,t,r){t===void 0&&(t=I.DEFAULT_OPTIONS),r===void 0&&(r=!0);var n=(0,b.useState)(null),a=n[0],o=n[1],s=(0,b.useState)({}),i=s[0],u=s[1],c=(0,b.useMemo)(function(){if(a)try{return JSON.parse(a.data)}catch{return I.UNPARSABLE_JSON_OBJECT}return null},[a]),l=(0,b.useRef)(null),d=(0,b.useRef)(null),f=(0,b.useRef)(function(){}),g=(0,b.useRef)(0),y=(0,b.useRef)([]),E=(0,b.useRef)(null),v=(0,b.useRef)(t);v.current=t;var _=l.current&&i[l.current]!==void 0?i[l.current]:e!==null&&r===!0?I.ReadyState.CONNECTING:I.ReadyState.UNINSTANTIATED,T=t.queryParams?JSON.stringify(t.queryParams):null,k=(0,b.useCallback)(function(O,N){var U;if(N===void 0&&(N=!0),I.isEventSourceSupported&&d.current instanceof EventSource){console.warn("Unable to send a message from an eventSource");return}((U=d.current)===null||U===void 0?void 0:U.readyState)===I.ReadyState.OPEN?((0,Se.assertIsWebSocket)(d.current,v.current.skipAssert),d.current.send(O)):N&&y.current.push(O)},[]),pe=(0,b.useCallback)(function(O,N){N===void 0&&(N=!0),k(JSON.stringify(O),N)},[k]),Ce=(0,b.useCallback)(function(){return v.current.share!==!0||I.isEventSourceSupported&&d.current instanceof EventSource?d.current:(E.current===null&&d.current&&((0,Se.assertIsWebSocket)(d.current,v.current.skipAssert),E.current=(0,Ot.default)(d.current,f)),E.current)},[]);return(0,b.useEffect)(function(){if(e!==null&&r===!0){var O,N=!1,U=!0,se=function(){return dt(void 0,void 0,void 0,function(){var J,W,ie;return St(this,function(le){switch(le.label){case 0:return J=l,[4,(0,Et.getUrl)(e,v)];case 1:return J.current=le.sent(),l.current===null?(console.error("Failed to get a valid URL. WebSocket connection aborted."),l.current="ABORTED",(0,ae.flushSync)(function(){return u(function(j){return P(P({},j),{ABORTED:I.ReadyState.CLOSED})})}),[2]):(W=function(j){N||(0,ae.flushSync)(function(){return o(j)})},ie=function(j){N||(0,ae.flushSync)(function(){return u(function(we){var re;return P(P({},we),l.current&&(re={},re[l.current]=j,re))})})},U&&(O=(0,gt.createOrJoinSocket)(d,l.current,ie,v,W,f,g,k)),[2])}})})};return f.current=function(){N||(E.current&&(E.current=null),O?.(),se())},se(),function(){N=!0,U=!1,E.current&&(E.current=null),O?.(),o(null)}}else(e===null||r===!1)&&(g.current=0,u(function(J){var W;return P(P({},J),l.current&&(W={},W[l.current]=I.ReadyState.CLOSED,W))}))},[e,r,T,k]),(0,b.useEffect)(function(){_===I.ReadyState.OPEN&&y.current.splice(0).forEach(function(O){k(O)})},[_]),{sendMessage:k,sendJsonMessage:pe,lastMessage:a,lastJsonMessage:c,readyState:_,getWebSocket:Ce}};D.useWebSocket=bt;var ee={},Q=S&&S.__assign||function(){return Q=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Q.apply(this,arguments)};Object.defineProperty(ee,"__esModule",{value:!0});ee.useSocketIO=void 0;var _e=h,ht=D,yt=m,ce={type:"empty",payload:null},Tt=function(e){if(!e||!e.data)return ce;var t=e.data.match(/\[.*]/);if(!t)return ce;var r=JSON.parse(t);return!Array.isArray(r)||!r[1]?ce:{type:r[0],payload:r[1]}},Nt=function(e,t,r){t===void 0&&(t=yt.DEFAULT_OPTIONS),r===void 0&&(r=!0);var n=(0,_e.useMemo)(function(){return Q(Q({},t),{fromSocketIO:!0})},[]),a=(0,ht.useWebSocket)(e,n,r),o=a.sendMessage,s=a.sendJsonMessage,i=a.lastMessage,u=a.readyState,c=a.getWebSocket,l=(0,_e.useMemo)(function(){return Tt(i)},[i]);return{sendMessage:o,sendJsonMessage:s,lastMessage:l,lastJsonMessage:l,readyState:u,getWebSocket:c}};ee.useSocketIO=Nt;var te={},Y=S&&S.__assign||function(){return Y=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},Y.apply(this,arguments)},mt=S&&S.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};Object.defineProperty(te,"__esModule",{value:!0});te.useEventSource=void 0;var ge=h,It=D,Ee=m,Mt=function(e,t,r){t===void 0&&(t=Ee.DEFAULT_EVENT_SOURCE_OPTIONS);var n=t.withCredentials,a=t.events,o=mt(t,["withCredentials","events"]);r===void 0&&(r=!0);var s=Y(Y({},o),{eventSourceOptions:{withCredentials:n}}),i=(0,ge.useRef)(Ee.EMPTY_EVENT_HANDLERS);a&&(i.current=a);var u=(0,It.useWebSocket)(e,s,r),c=u.lastMessage,l=u.readyState,d=u.getWebSocket;return(0,ge.useEffect)(function(){c?.type&&Object.entries(i.current).forEach(function(f){var g=f[0],y=f[1];g===c.type&&y(c)})},[c]),{lastEvent:c,readyState:l,getEventSource:d}};te.useEventSource=Mt;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.resetGlobalState=e.useEventSource=e.ReadyState=e.useSocketIO=e.default=void 0;var t=D;Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.useWebSocket}});var r=ee;Object.defineProperty(e,"useSocketIO",{enumerable:!0,get:function(){return r.useSocketIO}});var n=m;Object.defineProperty(e,"ReadyState",{enumerable:!0,get:function(){return n.ReadyState}});var a=te;Object.defineProperty(e,"useEventSource",{enumerable:!0,get:function(){return a.useEventSource}});var o=L;Object.defineProperty(e,"resetGlobalState",{enumerable:!0,get:function(){return o.resetGlobalState}})})(ue);const Wt=Le(ue),pt=h.createContext({waitingForNewTurn:!1,sessionUser:null,userMetadata:{cf_connecting_ip:null,ip_city:null,time_zone:null,user_country:null,user_locale:null,user_region:null,user_region_code:null,latitude:null,longitude:null,locationAccuracy:null},submitFollowup:()=>Promise.resolve(),submitSearch:()=>Promise.resolve(),retrySearch:()=>Promise.resolve(),resetSearch:fe,prefetch:fe,readyState:ue.ReadyState.UNINSTANTIATED}),Dt=()=>h.useContext(pt);export{Ne as I,Pt as S,R as U,C as a,Ut as b,kt as c,ue as d,Dt as e,Wt as f,Lt as g,pt as h,Ue as i,At as u};
//# sourceMappingURL=grccwfqkma7x81tr.js.map
