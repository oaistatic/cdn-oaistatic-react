import{r as d,f as yt,b as wn,e as xn,g as St,j as C,M as X,a8 as wt}from"./ls1hkjm4csy89kc5.js";import{V as Cn,ab as An,I as xt,af as Qe,aH as Le,F as Ne,E as Ue,en as L,ag as Ct,bQ as At,L as Tt,g as Ze,dC as _t,ho as kt,g$ as Mt,ct as Dt,gY as Et,dH as en,bL as Tn,a as Z,cH as he,cX as nn,l as It,dn as Pt,P as Rt,dU as Ft,D as Lt,cm as Nt}from"./jfjoua4700kji9z3.js";import{h8 as G,mK as Ut,rl as Ot,gN as Ve,qd as zt,qe as Vt,h7 as ee,f as Bt,qg as N,rm as jt,kA as _n,e$ as ye,mM as Q,i6 as qt,qb as Ht,y as kn,rn as j,d8 as Mn,ro as Wt,rp as Gt,rq as ke,rr as $t,rs as Yt,ep as Dn,rt as Kt,ru as Xt,d as Jt,gQ as Qt,o as Zt,rv as eo,hJ as no}from"./hj6jep7mk4776vwc.js";import{u as to}from"./d5p4hcq0p8tkk0hi.js";import{i as En,a as T,P as k,b as q,j as oo,R as ro,g as ae,u as io,e as ao,m as In,h as so,T as Me}from"./bjo64t20o3wf7ixl.js";const co=()=>{const e=Cn(),n=G(),t=d.useCallback(()=>n.getState().isVoiceModeActive,[n]);return d.useMemo(()=>new Proxy(e,{get(o,r){const i=o[r];return t()||r==="closeAll"?i:()=>{}}}),[t,e])};function Pn(){const e=Ut();if(!e)return{video:!1,screenshare:!1};const n=Ot(e);return{video:n?.features?.video??!1,screenshare:n?.features?.screen_sharing??!1}}var uo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lo(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Rn={exports:{}};(function(e){(function(n,t){e.exports?e.exports=t():n.log=t()})(uo,function(){var n=function(){},t="undefined",o=typeof window!==t&&typeof window.navigator!==t&&/Trident\/|MSIE /.test(window.navigator.userAgent),r=["trace","debug","info","warn","error"],i={},a=null;function c(p,g){var v=p[g];if(typeof v.bind=="function")return v.bind(p);try{return Function.prototype.bind.call(v,p)}catch{return function(){return Function.prototype.apply.apply(v,[p,arguments])}}}function s(){console.log&&(console.log.apply?console.log.apply(console,arguments):Function.prototype.apply.apply(console.log,[console,arguments])),console.trace&&console.trace()}function u(p){return p==="debug"&&(p="log"),typeof console===t?!1:p==="trace"&&o?s:console[p]!==void 0?c(console,p):console.log!==void 0?c(console,"log"):n}function f(){for(var p=this.getLevel(),g=0;g<r.length;g++){var v=r[g];this[v]=g<p?n:this.methodFactory(v,p,this.name)}if(this.log=this.debug,typeof console===t&&p<this.levels.SILENT)return"No console available for logging"}function h(p){return function(){typeof console!==t&&(f.call(this),this[p].apply(this,arguments))}}function b(p,g,v){return u(p)||h.apply(this,arguments)}function l(p,g){var v=this,S,x,M,y="loglevel";typeof p=="string"?y+=":"+p:typeof p=="symbol"&&(y=void 0);function _(A){var E=(r[A]||"silent").toUpperCase();if(!(typeof window===t||!y)){try{window.localStorage[y]=E;return}catch{}try{window.document.cookie=encodeURIComponent(y)+"="+E+";"}catch{}}}function w(){var A;if(!(typeof window===t||!y)){try{A=window.localStorage[y]}catch{}if(typeof A===t)try{var E=window.document.cookie,V=encodeURIComponent(y),H=E.indexOf(V+"=");H!==-1&&(A=/^([^;]+)/.exec(E.slice(H+V.length+1))[1])}catch{}return v.levels[A]===void 0&&(A=void 0),A}}function D(){if(!(typeof window===t||!y)){try{window.localStorage.removeItem(y)}catch{}try{window.document.cookie=encodeURIComponent(y)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch{}}}function U(A){var E=A;if(typeof E=="string"&&v.levels[E.toUpperCase()]!==void 0&&(E=v.levels[E.toUpperCase()]),typeof E=="number"&&E>=0&&E<=v.levels.SILENT)return E;throw new TypeError("log.setLevel() called with invalid level: "+A)}v.name=p,v.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},v.methodFactory=g||b,v.getLevel=function(){return M??x??S},v.setLevel=function(A,E){return M=U(A),E!==!1&&_(M),f.call(v)},v.setDefaultLevel=function(A){x=U(A),w()||v.setLevel(A,!1)},v.resetLevel=function(){M=null,D(),f.call(v)},v.enableAll=function(A){v.setLevel(v.levels.TRACE,A)},v.disableAll=function(A){v.setLevel(v.levels.SILENT,A)},v.rebuild=function(){if(a!==v&&(S=U(a.getLevel())),f.call(v),a===v)for(var A in i)i[A].rebuild()},S=U(a?a.getLevel():"WARN");var P=w();P!=null&&(M=U(P)),f.call(v)}a=new l,a.getLogger=function(p){if(typeof p!="symbol"&&typeof p!="string"||p==="")throw new TypeError("You must supply a name when creating a logger.");var g=i[p];return g||(g=i[p]=new l(p,a.methodFactory)),g};var m=typeof window!==t?window.log:void 0;return a.noConflict=function(){return typeof window!==t&&window.log===a&&(window.log=m),a},a.getLoggers=function(){return i},a.default=a,a})})(Rn);var fo=Rn.exports;const po=lo(fo);var Oe=function(e,n){return Oe=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])},Oe(e,n)};function $(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");Oe(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}function vo(e,n,t,o){function r(i){return i instanceof t?i:new t(function(a){a(i)})}return new(t||(t=Promise))(function(i,a){function c(f){try{u(o.next(f))}catch(h){a(h)}}function s(f){try{u(o.throw(f))}catch(h){a(h)}}function u(f){f.done?i(f.value):r(f.value).then(c,s)}u((o=o.apply(e,[])).next())})}function Fn(e,n){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,r,i,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=c(0),a.throw=c(1),a.return=c(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function c(u){return function(f){return s([u,f])}}function s(u){if(o)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(t=0)),t;)try{if(o=1,r&&(i=u[0]&2?r.return:u[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,u[1])).done)return i;switch(r=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,r=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){t.label=u[1];break}if(u[0]===6&&t.label<i[1]){t.label=i[1],i=u;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(u);break}i[2]&&t.ops.pop(),t.trys.pop();continue}u=n.call(e,t)}catch(f){u=[6,f],r=0}finally{o=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function te(e){var n=typeof Symbol=="function"&&Symbol.iterator,t=n&&e[n],o=0;if(t)return t.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Se(e,n){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var o=t.call(e),r,i=[],a;try{for(;(n===void 0||n-- >0)&&!(r=o.next()).done;)i.push(r.value)}catch(c){a={error:c}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return i}function we(e,n,t){if(arguments.length===2)for(var o=0,r=n.length,i;o<r;o++)(i||!(o in n))&&(i||(i=Array.prototype.slice.call(n,0,o)),i[o]=n[o]);return e.concat(i||Array.prototype.slice.call(n))}function ne(e){return this instanceof ne?(this.v=e,this):new ne(e)}function mo(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=t.apply(e,n||[]),r,i=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),c("next"),c("throw"),c("return",a),r[Symbol.asyncIterator]=function(){return this},r;function a(l){return function(m){return Promise.resolve(m).then(l,h)}}function c(l,m){o[l]&&(r[l]=function(p){return new Promise(function(g,v){i.push([l,p,g,v])>1||s(l,p)})},m&&(r[l]=m(r[l])))}function s(l,m){try{u(o[l](m))}catch(p){b(i[0][3],p)}}function u(l){l.value instanceof ne?Promise.resolve(l.value.v).then(f,h):b(i[0][2],l)}function f(l){s("next",l)}function h(l){s("throw",l)}function b(l,m){l(m),i.shift(),i.length&&s(i[0][0],i[0][1])}}function ho(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=e[Symbol.asyncIterator],t;return n?n.call(e):(e=typeof te=="function"?te(e):e[Symbol.iterator](),t={},o("next"),o("throw"),o("return"),t[Symbol.asyncIterator]=function(){return this},t);function o(i){t[i]=e[i]&&function(a){return new Promise(function(c,s){a=e[i](a),r(c,s,a.done,a.value)})}}function r(i,a,c,s){Promise.resolve(s).then(function(u){i({value:u,done:c})},a)}}function F(e){return typeof e=="function"}function Be(e){var n=function(o){Error.call(o),o.stack=new Error().stack},t=e(n);return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var De=Be(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(t,o){return o+1+") "+t.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function xe(e,n){if(e){var t=e.indexOf(n);0<=t&&e.splice(t,1)}}var se=function(){function e(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var n,t,o,r,i;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var c=te(a),s=c.next();!s.done;s=c.next()){var u=s.value;u.remove(this)}}catch(p){n={error:p}}finally{try{s&&!s.done&&(t=c.return)&&t.call(c)}finally{if(n)throw n.error}}else a.remove(this);var f=this.initialTeardown;if(F(f))try{f()}catch(p){i=p instanceof De?p.errors:[p]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var b=te(h),l=b.next();!l.done;l=b.next()){var m=l.value;try{tn(m)}catch(p){i=i??[],p instanceof De?i=we(we([],Se(i)),Se(p.errors)):i.push(p)}}}catch(p){o={error:p}}finally{try{l&&!l.done&&(r=b.return)&&r.call(b)}finally{if(o)throw o.error}}}if(i)throw new De(i)}},e.prototype.add=function(n){var t;if(n&&n!==this)if(this.closed)tn(n);else{if(n instanceof e){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(n)}},e.prototype._hasParent=function(n){var t=this._parentage;return t===n||Array.isArray(t)&&t.includes(n)},e.prototype._addParent=function(n){var t=this._parentage;this._parentage=Array.isArray(t)?(t.push(n),t):t?[t,n]:n},e.prototype._removeParent=function(n){var t=this._parentage;t===n?this._parentage=null:Array.isArray(t)&&xe(t,n)},e.prototype.remove=function(n){var t=this._finalizers;t&&xe(t,n),n instanceof e&&n._removeParent(this)},e.EMPTY=function(){var n=new e;return n.closed=!0,n}(),e}(),Ln=se.EMPTY;function Nn(e){return e instanceof se||e&&"closed"in e&&F(e.remove)&&F(e.add)&&F(e.unsubscribe)}function tn(e){F(e)?e():e.unsubscribe()}var Un={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},go={setTimeout:function(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];return setTimeout.apply(void 0,we([e,n],Se(t)))},clearTimeout:function(e){return clearTimeout(e)},delegate:void 0};function On(e){go.setTimeout(function(){throw e})}function on(){}function be(e){e()}var je=function(e){$(n,e);function n(t){var o=e.call(this)||this;return o.isStopped=!1,t?(o.destination=t,Nn(t)&&t.add(o)):o.destination=wo,o}return n.create=function(t,o,r){return new ze(t,o,r)},n.prototype.next=function(t){this.isStopped||this._next(t)},n.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},n.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},n.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},n.prototype._next=function(t){this.destination.next(t)},n.prototype._error=function(t){try{this.destination.error(t)}finally{this.unsubscribe()}},n.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},n}(se),bo=Function.prototype.bind;function Ee(e,n){return bo.call(e,n)}var yo=function(){function e(n){this.partialObserver=n}return e.prototype.next=function(n){var t=this.partialObserver;if(t.next)try{t.next(n)}catch(o){ge(o)}},e.prototype.error=function(n){var t=this.partialObserver;if(t.error)try{t.error(n)}catch(o){ge(o)}else ge(n)},e.prototype.complete=function(){var n=this.partialObserver;if(n.complete)try{n.complete()}catch(t){ge(t)}},e}(),ze=function(e){$(n,e);function n(t,o,r){var i=e.call(this)||this,a;if(F(t)||!t)a={next:t??void 0,error:o??void 0,complete:r??void 0};else{var c;i&&Un.useDeprecatedNextContext?(c=Object.create(t),c.unsubscribe=function(){return i.unsubscribe()},a={next:t.next&&Ee(t.next,c),error:t.error&&Ee(t.error,c),complete:t.complete&&Ee(t.complete,c)}):a=t}return i.destination=new yo(a),i}return n}(je);function ge(e){On(e)}function So(e){throw e}var wo={closed:!0,next:on,error:So,complete:on},qe=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function zn(e){return e}function xo(e){return e.length===0?zn:e.length===1?e[0]:function(n){return e.reduce(function(t,o){return o(t)},n)}}var z=function(){function e(n){n&&(this._subscribe=n)}return e.prototype.lift=function(n){var t=new e;return t.source=this,t.operator=n,t},e.prototype.subscribe=function(n,t,o){var r=this,i=Ao(n)?n:new ze(n,t,o);return be(function(){var a=r,c=a.operator,s=a.source;i.add(c?c.call(i,s):s?r._subscribe(i):r._trySubscribe(i))}),i},e.prototype._trySubscribe=function(n){try{return this._subscribe(n)}catch(t){n.error(t)}},e.prototype.forEach=function(n,t){var o=this;return t=rn(t),new t(function(r,i){var a=new ze({next:function(c){try{n(c)}catch(s){i(s),a.unsubscribe()}},error:i,complete:r});o.subscribe(a)})},e.prototype._subscribe=function(n){var t;return(t=this.source)===null||t===void 0?void 0:t.subscribe(n)},e.prototype[qe]=function(){return this},e.prototype.pipe=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return xo(n)(this)},e.prototype.toPromise=function(n){var t=this;return n=rn(n),new n(function(o,r){var i;t.subscribe(function(a){return i=a},function(a){return r(a)},function(){return o(i)})})},e.create=function(n){return new e(n)},e}();function rn(e){var n;return(n=e??Un.Promise)!==null&&n!==void 0?n:Promise}function Co(e){return e&&F(e.next)&&F(e.error)&&F(e.complete)}function Ao(e){return e&&e instanceof je||Co(e)&&Nn(e)}function To(e){return F(e?.lift)}function ce(e){return function(n){if(To(n))return n.lift(function(t){try{return e(t,this)}catch(o){this.error(o)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ce(e,n,t,o,r){return new _o(e,n,t,o,r)}var _o=function(e){$(n,e);function n(t,o,r,i,a,c){var s=e.call(this,t)||this;return s.onFinalize=a,s.shouldUnsubscribe=c,s._next=o?function(u){try{o(u)}catch(f){t.error(f)}}:e.prototype._next,s._error=i?function(u){try{i(u)}catch(f){t.error(f)}finally{this.unsubscribe()}}:e.prototype._error,s._complete=r?function(){try{r()}catch(u){t.error(u)}finally{this.unsubscribe()}}:e.prototype._complete,s}return n.prototype.unsubscribe=function(){var t;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var o=this.closed;e.prototype.unsubscribe.call(this),!o&&((t=this.onFinalize)===null||t===void 0||t.call(this))}},n}(je),ko=Be(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),Vn=function(e){$(n,e);function n(){var t=e.call(this)||this;return t.closed=!1,t.currentObservers=null,t.observers=[],t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return n.prototype.lift=function(t){var o=new an(this,this);return o.operator=t,o},n.prototype._throwIfClosed=function(){if(this.closed)throw new ko},n.prototype.next=function(t){var o=this;be(function(){var r,i;if(o._throwIfClosed(),!o.isStopped){o.currentObservers||(o.currentObservers=Array.from(o.observers));try{for(var a=te(o.currentObservers),c=a.next();!c.done;c=a.next()){var s=c.value;s.next(t)}}catch(u){r={error:u}}finally{try{c&&!c.done&&(i=a.return)&&i.call(a)}finally{if(r)throw r.error}}}})},n.prototype.error=function(t){var o=this;be(function(){if(o._throwIfClosed(),!o.isStopped){o.hasError=o.isStopped=!0,o.thrownError=t;for(var r=o.observers;r.length;)r.shift().error(t)}})},n.prototype.complete=function(){var t=this;be(function(){if(t._throwIfClosed(),!t.isStopped){t.isStopped=!0;for(var o=t.observers;o.length;)o.shift().complete()}})},n.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(n.prototype,"observed",{get:function(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0},enumerable:!1,configurable:!0}),n.prototype._trySubscribe=function(t){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,t)},n.prototype._subscribe=function(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)},n.prototype._innerSubscribe=function(t){var o=this,r=this,i=r.hasError,a=r.isStopped,c=r.observers;return i||a?Ln:(this.currentObservers=null,c.push(t),new se(function(){o.currentObservers=null,xe(c,t)}))},n.prototype._checkFinalizedStatuses=function(t){var o=this,r=o.hasError,i=o.thrownError,a=o.isStopped;r?t.error(i):a&&t.complete()},n.prototype.asObservable=function(){var t=new z;return t.source=this,t},n.create=function(t,o){return new an(t,o)},n}(z),an=function(e){$(n,e);function n(t,o){var r=e.call(this)||this;return r.destination=t,r.source=o,r}return n.prototype.next=function(t){var o,r;(r=(o=this.destination)===null||o===void 0?void 0:o.next)===null||r===void 0||r.call(o,t)},n.prototype.error=function(t){var o,r;(r=(o=this.destination)===null||o===void 0?void 0:o.error)===null||r===void 0||r.call(o,t)},n.prototype.complete=function(){var t,o;(o=(t=this.destination)===null||t===void 0?void 0:t.complete)===null||o===void 0||o.call(t)},n.prototype._subscribe=function(t){var o,r;return(r=(o=this.source)===null||o===void 0?void 0:o.subscribe(t))!==null&&r!==void 0?r:Ln},n}(Vn);(function(e){$(n,e);function n(t){var o=e.call(this)||this;return o._value=t,o}return Object.defineProperty(n.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),n.prototype._subscribe=function(t){var o=e.prototype._subscribe.call(this,t);return!o.closed&&t.next(this._value),o},n.prototype.getValue=function(){var t=this,o=t.hasError,r=t.thrownError,i=t._value;if(o)throw r;return this._throwIfClosed(),i},n.prototype.next=function(t){e.prototype.next.call(this,this._value=t)},n})(Vn);var Mo={now:function(){return Date.now()},delegate:void 0},Do=function(e){$(n,e);function n(t,o){return e.call(this)||this}return n.prototype.schedule=function(t,o){return this},n}(se),sn={setInterval:function(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];return setInterval.apply(void 0,we([e,n],Se(t)))},clearInterval:function(e){return clearInterval(e)},delegate:void 0},Eo=function(e){$(n,e);function n(t,o){var r=e.call(this,t,o)||this;return r.scheduler=t,r.work=o,r.pending=!1,r}return n.prototype.schedule=function(t,o){var r;if(o===void 0&&(o=0),this.closed)return this;this.state=t;var i=this.id,a=this.scheduler;return i!=null&&(this.id=this.recycleAsyncId(a,i,o)),this.pending=!0,this.delay=o,this.id=(r=this.id)!==null&&r!==void 0?r:this.requestAsyncId(a,this.id,o),this},n.prototype.requestAsyncId=function(t,o,r){return r===void 0&&(r=0),sn.setInterval(t.flush.bind(t,this),r)},n.prototype.recycleAsyncId=function(t,o,r){if(r===void 0&&(r=0),r!=null&&this.delay===r&&this.pending===!1)return o;o!=null&&sn.clearInterval(o)},n.prototype.execute=function(t,o){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var r=this._execute(t,o);if(r)return r;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},n.prototype._execute=function(t,o){var r=!1,i;try{this.work(t)}catch(a){r=!0,i=a||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i},n.prototype.unsubscribe=function(){if(!this.closed){var t=this,o=t.id,r=t.scheduler,i=r.actions;this.work=this.state=this.scheduler=null,this.pending=!1,xe(i,this),o!=null&&(this.id=this.recycleAsyncId(r,o,null)),this.delay=null,e.prototype.unsubscribe.call(this)}},n}(Do),cn=function(){function e(n,t){t===void 0&&(t=e.now),this.schedulerActionCtor=n,this.now=t}return e.prototype.schedule=function(n,t,o){return t===void 0&&(t=0),new this.schedulerActionCtor(this,n).schedule(o,t)},e.now=Mo.now,e}(),Io=function(e){$(n,e);function n(t,o){o===void 0&&(o=cn.now);var r=e.call(this,t,o)||this;return r.actions=[],r._active=!1,r}return n.prototype.flush=function(t){var o=this.actions;if(this._active){o.push(t);return}var r;this._active=!0;do if(r=t.execute(t.state,t.delay))break;while(t=o.shift());if(this._active=!1,r){for(;t=o.shift();)t.unsubscribe();throw r}},n}(cn);new Io(Eo);function Po(e){return e&&F(e.schedule)}function Ro(e){return e[e.length-1]}function Bn(e){return Po(Ro(e))?e.pop():void 0}var jn=function(e){return e&&typeof e.length=="number"&&typeof e!="function"};function qn(e){return F(e?.then)}function Hn(e){return F(e[qe])}function Wn(e){return Symbol.asyncIterator&&F(e?.[Symbol.asyncIterator])}function Gn(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Fo(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var $n=Fo();function Yn(e){return F(e?.[$n])}function Kn(e){return mo(this,arguments,function(){var n,t,o,r;return Fn(this,function(i){switch(i.label){case 0:n=e.getReader(),i.label=1;case 1:i.trys.push([1,,9,10]),i.label=2;case 2:return[4,ne(n.read())];case 3:return t=i.sent(),o=t.value,r=t.done,r?[4,ne(void 0)]:[3,5];case 4:return[2,i.sent()];case 5:return[4,ne(o)];case 6:return[4,i.sent()];case 7:return i.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function Xn(e){return F(e?.getReader)}function ue(e){if(e instanceof z)return e;if(e!=null){if(Hn(e))return Lo(e);if(jn(e))return No(e);if(qn(e))return Uo(e);if(Wn(e))return Jn(e);if(Yn(e))return Oo(e);if(Xn(e))return zo(e)}throw Gn(e)}function Lo(e){return new z(function(n){var t=e[qe]();if(F(t.subscribe))return t.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function No(e){return new z(function(n){for(var t=0;t<e.length&&!n.closed;t++)n.next(e[t]);n.complete()})}function Uo(e){return new z(function(n){e.then(function(t){n.closed||(n.next(t),n.complete())},function(t){return n.error(t)}).then(null,On)})}function Oo(e){return new z(function(n){var t,o;try{for(var r=te(e),i=r.next();!i.done;i=r.next()){var a=i.value;if(n.next(a),n.closed)return}}catch(c){t={error:c}}finally{try{i&&!i.done&&(o=r.return)&&o.call(r)}finally{if(t)throw t.error}}n.complete()})}function Jn(e){return new z(function(n){Vo(e,n).catch(function(t){return n.error(t)})})}function zo(e){return Jn(Kn(e))}function Vo(e,n){var t,o,r,i;return vo(this,void 0,void 0,function(){var a,c;return Fn(this,function(s){switch(s.label){case 0:s.trys.push([0,5,6,11]),t=ho(e),s.label=1;case 1:return[4,t.next()];case 2:if(o=s.sent(),!!o.done)return[3,4];if(a=o.value,n.next(a),n.closed)return[2];s.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=s.sent(),r={error:c},[3,11];case 6:return s.trys.push([6,,9,10]),o&&!o.done&&(i=t.return)?[4,i.call(t)]:[3,8];case 7:s.sent(),s.label=8;case 8:return[3,10];case 9:if(r)throw r.error;return[7];case 10:return[7];case 11:return n.complete(),[2]}})})}function J(e,n,t,o,r){o===void 0&&(o=0),r===void 0&&(r=!1);var i=n.schedule(function(){t(),r?e.add(this.schedule(null,o)):this.unsubscribe()},o);if(e.add(i),!r)return i}function Qn(e,n){return n===void 0&&(n=0),ce(function(t,o){t.subscribe(Ce(o,function(r){return J(o,e,function(){return o.next(r)},n)},function(){return J(o,e,function(){return o.complete()},n)},function(r){return J(o,e,function(){return o.error(r)},n)}))})}function Zn(e,n){return n===void 0&&(n=0),ce(function(t,o){o.add(e.schedule(function(){return t.subscribe(o)},n))})}function Bo(e,n){return ue(e).pipe(Zn(n),Qn(n))}function jo(e,n){return ue(e).pipe(Zn(n),Qn(n))}function qo(e,n){return new z(function(t){var o=0;return n.schedule(function(){o===e.length?t.complete():(t.next(e[o++]),t.closed||this.schedule())})})}function Ho(e,n){return new z(function(t){var o;return J(t,n,function(){o=e[$n](),J(t,n,function(){var r,i,a;try{r=o.next(),i=r.value,a=r.done}catch(c){t.error(c);return}a?t.complete():t.next(i)},0,!0)}),function(){return F(o?.return)&&o.return()}})}function et(e,n){if(!e)throw new Error("Iterable cannot be null");return new z(function(t){J(t,n,function(){var o=e[Symbol.asyncIterator]();J(t,n,function(){o.next().then(function(r){r.done?t.complete():t.next(r.value)})},0,!0)})})}function Wo(e,n){return et(Kn(e),n)}function Go(e,n){if(e!=null){if(Hn(e))return Bo(e,n);if(jn(e))return qo(e,n);if(qn(e))return jo(e,n);if(Wn(e))return et(e,n);if(Yn(e))return Ho(e,n);if(Xn(e))return Wo(e,n)}throw Gn(e)}function $o(e,n){return n?Go(e,n):ue(e)}Be(function(e){return function(n){n===void 0&&(n=null),e(this),this.message="Timeout has occurred",this.name="TimeoutError",this.info=n}});function le(e,n){return ce(function(t,o){var r=0;t.subscribe(Ce(o,function(i){o.next(e.call(n,i,r++))}))})}function Yo(e,n,t,o,r,i,a,c){var s=[],u=0,f=0,h=!1,b=function(){h&&!s.length&&!u&&n.complete()},l=function(p){return u<o?m(p):s.push(p)},m=function(p){u++;var g=!1;ue(t(p,f++)).subscribe(Ce(n,function(v){n.next(v)},function(){g=!0},void 0,function(){if(g)try{u--;for(var v=function(){var S=s.shift();a||m(S)};s.length&&u<o;)v();b()}catch(S){n.error(S)}}))};return e.subscribe(Ce(n,l,function(){h=!0,b()})),function(){}}function nt(e,n,t){return t===void 0&&(t=1/0),F(n)?nt(function(o,r){return le(function(i,a){return n(o,i,r,a)})(ue(e(o,r)))},t):(typeof n=="number"&&(t=n),ce(function(o,r){return Yo(o,r,e,t)}))}function Ko(e){return nt(zn,e)}function Xo(){return Ko(1)}function un(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Xo()($o(e,Bn(e)))}function de(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=Bn(e);return ce(function(o,r){(t?un(e,o,t):un(e,o)).subscribe(r)})}var Jo="lk";function tt(e){return typeof e>"u"?!1:Qo(e)||Zo(e)}function Qo(e){var n;return e?e.hasOwnProperty("participant")&&e.hasOwnProperty("source")&&e.hasOwnProperty("track")&&typeof((n=e.publication)==null?void 0:n.track)<"u":!1}function Zo(e){return e?e.hasOwnProperty("participant")&&e.hasOwnProperty("source")&&e.hasOwnProperty("publication")&&typeof e.publication<"u":!1}function er(e){return e?e.hasOwnProperty("participant")&&e.hasOwnProperty("source")&&typeof e.publication>"u":!1}function Bi(e){if(typeof e=="string"||typeof e=="number")return`${e}`;if(er(e))return`${e.participant.identity}_${e.source}_placeholder`;if(tt(e))return`${e.participant.identity}_${e.publication.source}_${e.publication.trackSid}`;throw new Error(`Can't generate a id for the given track reference: ${e}`)}function ji(e){return e instanceof En}var nr=[T.ConnectionStateChanged,T.RoomMetadataChanged,T.ActiveSpeakersChanged,T.ConnectionQualityChanged,T.ParticipantConnected,T.ParticipantDisconnected,T.ParticipantPermissionsChanged,T.ParticipantMetadataChanged,T.ParticipantNameChanged,T.ParticipantAttributesChanged,T.TrackMuted,T.TrackUnmuted,T.TrackPublished,T.TrackUnpublished,T.TrackStreamStateChanged,T.TrackSubscriptionFailed,T.TrackSubscriptionPermissionChanged,T.TrackSubscriptionStatusChanged],tr=[...nr,T.LocalTrackPublished,T.LocalTrackUnpublished];k.TrackPublished,k.TrackUnpublished,k.TrackMuted,k.TrackUnmuted,k.TrackStreamStateChanged,k.TrackSubscribed,k.TrackUnsubscribed,k.TrackSubscriptionPermissionChanged,k.TrackSubscriptionFailed,k.LocalTrackPublished,k.LocalTrackUnpublished;var or=[k.ConnectionQualityChanged,k.IsSpeakingChanged,k.ParticipantMetadataChanged,k.ParticipantPermissionsChanged,k.TrackMuted,k.TrackUnmuted,k.TrackPublished,k.TrackUnpublished,k.TrackStreamStateChanged,k.TrackSubscriptionFailed,k.TrackSubscriptionPermissionChanged,k.TrackSubscriptionStatusChanged];[...or,k.LocalTrackPublished,k.LocalTrackUnpublished];var Ae=po.getLogger("lk-components-js");Ae.setDefaultLevel("WARN");function ot(e){return typeof e=="object"}function rt(e){return Array.isArray(e)&&e.filter(ot).length>0}function rr(e){return`${Jo}-${e}`}function qi(e){const n=ln(e),t=it(e.participant).pipe(le(()=>ln(e)),de(n));return{className:rr(e.source===q.Source.Camera||e.source===q.Source.ScreenShare?"participant-media-video":"participant-media-audio"),trackObserver:t}}function ln(e){if(tt(e))return e.publication;{const{source:n,name:t,participant:o}=e;if(n&&t)return o.getTrackPublications().find(r=>r.source===n&&r.trackName===t);if(t)return o.getTrackPublicationByName(t);if(n)return o.getTrackPublication(n);throw new Error("At least one of source and name needs to be defined")}}function ir(e,...n){return new z(t=>{const o=()=>{t.next(e)};return n.forEach(r=>{e.on(r,o)}),()=>{n.forEach(r=>{e.off(r,o)})}}).pipe(de(e))}function ar(e,n){return new z(t=>{const o=(...r)=>{t.next(r)};return e.on(n,o),()=>{e.off(n,o)}})}function sr(e){return ar(e,T.ConnectionStateChanged).pipe(le(([n])=>n),de(e.state))}function cr(e,...n){return new z(t=>{const o=()=>{t.next(e)};return n.forEach(r=>{e.on(r,o)}),()=>{n.forEach(r=>{e.off(r,o)})}}).pipe(de(e))}function it(e){return cr(e,k.TrackMuted,k.TrackUnmuted,k.ParticipantPermissionsChanged,k.TrackPublished,k.TrackUnpublished,k.LocalTrackPublished,k.LocalTrackUnpublished,k.MediaDevicesError,k.TrackSubscriptionStatusChanged).pipe(le(n=>{const{isMicrophoneEnabled:t,isCameraEnabled:o,isScreenShareEnabled:r}=n,i=n.getTrackPublication(q.Source.Microphone),a=n.getTrackPublication(q.Source.Camera);return{isCameraEnabled:o,isMicrophoneEnabled:t,isScreenShareEnabled:r,cameraTrack:a,microphoneTrack:i,participant:n}}))}new TextEncoder;new TextDecoder;function Hi(){return{className:"lk-room-container"}}function dn(e,n,t=!0){const o=[e.localParticipant,...Array.from(e.remoteParticipants.values())],r=[];return o.forEach(i=>{n.forEach(a=>{const c=Array.from(i.trackPublications.values()).filter(s=>s.source===a&&(!t||s.track)).map(s=>({participant:i,publication:s,source:s.source}));r.push(...c)})}),{trackReferences:r,participants:o}}function ur(e,n,t){var o,r;const i=(o=t.additionalRoomEvents)!=null?o:tr,a=(r=t.onlySubscribed)!=null?r:!0,c=Array.from(new Set([T.ParticipantConnected,T.ParticipantDisconnected,T.ConnectionStateChanged,T.LocalTrackPublished,T.LocalTrackUnpublished,T.TrackPublished,T.TrackUnpublished,T.TrackSubscriptionStatusChanged,...i]).values());return ir(e,...c).pipe(le(s=>{const u=dn(s,n,a);return Ae.debug(`TrackReference[] was updated. (length ${u.trackReferences.length})`,u),u}),de(dn(e,n,a)))}d.createContext(void 0);const lr=d.createContext(void 0);function dr(){return d.useContext(lr)}function Wi(e){const n=dr(),t=e??n;if(!t)throw new Error("No TrackRef, make sure you are inside a TrackRefContext or pass the TrackRef explicitly");return t}d.createContext(void 0);const fr=d.createContext(void 0);function at(){return d.useContext(fr)}function He(e){const n=at(),t=e??n;if(!t)throw new Error("No room provided, make sure you are inside a Room context or pass the room explicitly");return t}const Gi=d.createContext(void 0);function pr(e,n,t=!0){const[o,r]=d.useState(n);return d.useEffect(()=>{if(t&&r(n),typeof window>"u"||!e)return;const i=e.subscribe(r);return()=>i.unsubscribe()},[e,t]),o}function vr(e){const n=He(e),t=d.useMemo(()=>sr(n),[n]);return pr(t,n.state)}function $i(e={}){const n=He(e.room),[t,o]=d.useState(n.localParticipant),[r,i]=d.useState(t.isMicrophoneEnabled),[a,c]=d.useState(t.isMicrophoneEnabled),[s,u]=d.useState(t.lastMicrophoneError),[f,h]=d.useState(t.lastCameraError),[b,l]=d.useState(t.isMicrophoneEnabled),[m,p]=d.useState(void 0),[g,v]=d.useState(void 0),S=x=>{c(x.isCameraEnabled),i(x.isMicrophoneEnabled),l(x.isScreenShareEnabled),v(x.cameraTrack),p(x.microphoneTrack),u(x.participant.lastMicrophoneError),h(x.participant.lastCameraError),o(x.participant)};return d.useEffect(()=>{const x=it(n.localParticipant).subscribe(S);return()=>x.unsubscribe()},[n]),{isMicrophoneEnabled:r,isScreenShareEnabled:b,isCameraEnabled:a,microphoneTrack:m,cameraTrack:g,lastMicrophoneError:s,lastCameraError:f,localParticipant:t}}function Yi(e=[q.Source.Camera,q.Source.Microphone,q.Source.ScreenShare,q.Source.ScreenShareAudio,q.Source.Unknown],n={}){const t=He(n.room),[o,r]=d.useState([]),[i,a]=d.useState([]),c=d.useMemo(()=>e.map(s=>ot(s)?s.source:s),[JSON.stringify(e)]);return d.useEffect(()=>{const s=ur(t,c,{additionalRoomEvents:n.updateOnlyOn,onlySubscribed:n.onlySubscribed}).subscribe(({trackReferences:u,participants:f})=>{Ae.debug("setting track bundles",u,f),r(u),a(f)});return()=>s.unsubscribe()},[t,JSON.stringify(n.onlySubscribed),JSON.stringify(n.updateOnlyOn),JSON.stringify(e)]),d.useMemo(()=>{if(rt(e)){const s=hr(e,i),u=Array.from(o);return i.forEach(f=>{s.has(f.identity)&&(s.get(f.identity)??[]).forEach(h=>{if(o.find(({participant:l,publication:m})=>f.identity===l.identity&&m.source===h))return;Ae.debug(`Add ${h} placeholder for participant ${f.identity}.`);const b={participant:f,source:h};u.push(b)})}),u}else return o},[o,i,e])}function mr(e,n){const t=new Set(e);for(const o of n)t.delete(o);return t}function hr(e,n){const t=new Map;if(rt(e)){const o=e.filter(r=>r.withPlaceholder).map(r=>r.source);n.forEach(r=>{const i=r.getTrackPublications().map(c=>{var s;return(s=c.track)==null?void 0:s.source}).filter(c=>c!==void 0),a=Array.from(mr(new Set(o),new Set(i)));a.length>0&&t.set(r.identity,a)})}return t}const gr=e=>{const n=t=>{let o=1-Math.max(-100,Math.min(-10,t))*-1/100;return o=Math.sqrt(o),o};return e.map(t=>t===-1/0?0:n(t))},br={bands:5,loPass:100,hiPass:600,updateInterval:32,analyserOptions:{fftSize:2048}};function yr(e,n={}){var t;const o=e instanceof q?e:(t=e?.publication)==null?void 0:t.track,r={...br,...n},[i,a]=d.useState(new Array(r.bands).fill(0));return d.useEffect(()=>{if(!o||!(o!=null&&o.mediaStream))return;const{analyser:c,cleanup:s}=oo(o,r.analyserOptions),u=c.frequencyBinCount,f=new Float32Array(u),h=setInterval(()=>{c.getFloatFrequencyData(f);let b=new Float32Array(f.length);for(let g=0;g<f.length;g++)b[g]=f[g];b=b.slice(n.loPass,n.hiPass);const l=gr(b),m=Math.ceil(l.length/r.bands),p=[];for(let g=0;g<r.bands;g++){const v=l.slice(g*m,(g+1)*m).reduce((S,x)=>S+=x,0);p.push(v/m)}a(p)},r.updateInterval);return()=>{s(),clearInterval(h)}},[o,o?.mediaStream,JSON.stringify(n)]),i}function B(){const e=at(),n=d.useRef({debug:(...t)=>Ve.debug(`[${e?.name??"no room"}]`,...t),encoder:new TextEncoder,decoder:new TextDecoder}).current;return{room:e,...n}}function Sr(){xr(),Cr(),Ar(),wr()}function wr(){const{room:e,debug:n}=B(),o=Pn().video,r=d.useMemo(()=>{const i=["audioinput","audiooutput"];return o&&i.push("videoinput"),i},[o]);d.useEffect(()=>{async function i(){Promise.all(r.map(async a=>{const c=await ro.getLocalDevices(a),s=e?.getActiveDevice(a);if(!c.find(f=>f.deviceId===s)){const f=await ae(a);let h=null;f?h=f.deviceId:c[0]&&(h=c[0].deviceId),n(`switching ${a} to ${h}`),h&&await e?.switchActiveDevice(a,h)}}))}if(navigator)return navigator.mediaDevices.addEventListener("devicechange",i),()=>{navigator.mediaDevices.removeEventListener("devicechange",i)}},[e,n,r])}function xr(){const{room:e,debug:n}=B(),t=e?.getActiveDevice("audioinput"),o=e?.getActiveDevice("audiooutput");d.useEffect(()=>{async function r(){const i=(await ae("audioinput"))?.deviceId,a=(await ae("audiooutput"))?.deviceId,c=async()=>{i&&t!==i&&(n("switching audio input to default"),await e?.switchActiveDevice("audioinput",i))},s=async()=>{if(a&&o!==a){n("switching audio output to default");try{await e?.switchActiveDevice("audiooutput",a)}catch(u){n("failed to switch audio output",u)}}};await Promise.all([c(),s()])}r()},[t,o,n,e])}function Cr(){const{isVideoEnabled:e,endStartingVideo:n}=zt(),{room:t,debug:o}=B(),i=Pn().video,a=i?t?.getActiveDevice("videoinput"):void 0;d.useEffect(()=>{async function c(){if(e)try{await t?.localParticipant.setCameraEnabled(!0),n(!0)}catch{n(!1)}else await t?.localParticipant.setCameraEnabled(!1)}t&&c()},[e,n,t]),d.useEffect(()=>{async function c(){const s=(await ae("videoinput"))?.deviceId;await(async()=>{s&&a!==s&&(o("switching video input to default"),await t?.switchActiveDevice("videoinput",s))})()}i&&c()},[a,o,t,i])}function Ar(){const{room:e}=B(),{isScreenshareEnabled:n,endStartingScreenshare:t}=Vt();d.useEffect(()=>{async function o(){if(n)try{await e?.localParticipant.setScreenShareEnabled(!0,{video:{displaySurface:"monitor"}}),t(!0)}catch{t(!1)}else await e?.localParticipant.setScreenShareEnabled(!1)}e&&o()},[e,n,t])}function st(){const{debug:e}=B(),n=ee(o=>o.conversationId),t=Cn();return d.useCallback(async o=>{const r=o,i=n&&!An(n)?n:void 0,a=r??i;if(a){e(`refetch conversationId ${a}`);try{await Bt(a,!0)}catch(c){const s="Failed to update conversation";e(s,c),t.danger(s)}}},[n,e,t])}const Tr=5e3,_r=2e3,kr=e=>{const n=G(),{room:t}=B(),o=ee(m=>m.disconnectPending),r=ee(m=>m.server.remoteState===N.Speaking),i=ee(m=>m.conversationId)??void 0,a=xt(i),c=d.useRef(!1),s=st(),u=yt(),f=wn();c.current=r||c.current;const h=d.useCallback(async m=>{clearTimeout(o),n.setState(g=>{g.disconnectPending=void 0}),t?.disconnect(),await s(a),n.setState(jt);const p=a??m;p&&_n(u,f,p),e?.refetchLater&&window.setTimeout(()=>{s(a)},_r)},[o,t,s,a,e?.refetchLater,u,f,n]),b=c.current&&!a,l=d.useCallback(()=>{n.setState(m=>{m.disconnectPending=window.setTimeout(h,Tr)})},[h,n]);return{disconnectPending:o!==void 0,shouldDelayDisconnect:b,delayDisconnect:l,immediateDisconnect:h}};function Mr(){const e=wn(),n=G(),{room:t,debug:o,decoder:r}=B(),{disconnectPending:i,shouldDelayDisconnect:a,delayDisconnect:c,immediateDisconnect:s}=kr(),u=st(),f=d.useRef(!1),h=d.useRef(!1),b=d.useRef(!1),l=d.useRef(!1),m=ye(p=>p.lastVoiceSessionStartTime);d.useEffect(()=>{const p=async _=>{const{new_state:w}=_;if(n.setState(D=>{(D.voiceMode!=="advanced"||w!==N.Thinking)&&(D.server.remoteState=w)}),w===N.Listening&&!h.current&&m instanceof Date){const U=new Date().getTime()-m.getTime();L.firstListeningLatency.success({durationMs:U}),h.current=!0}if(w===N.ListeningIntently)L.voiceSessionListeningIntently.stateChange();else if(w===N.Listening){if(n.setState(D=>{D.metrics.numListening+=1}),!b.current){const D=n.getState().voiceSessionId;L.voiceSessionFirstListening.stateChange({voice_session_id:D??"unknown"}),b.current=!0}b.current=!0,L.voiceSessionListening.stateChange()}else if(w===N.Thinking)n.setState(D=>{D.metrics.numThinking+=1}),L.voiceSessionThinking.stateChange();else if(w===N.Speaking){if(n.setState(D=>{D.metrics.numSpeaking+=1}),!l.current){const D=n.getState().voiceSessionId;L.voiceSessionFirstSpeaking.stateChange({voice_session_id:D??"unknown"}),l.current=!0}L.voiceSessionSpeaking.stateChange()}else w===N.Halted&&L.voiceSessionHalted.stateChange()},g=async _=>{n.setState(w=>{w.server.usage=_})},v=async _=>{n.setState(w=>{w.server.toolUpdate={..._}}),_.update_type==="hangup"&&(a?c():s())},S=async _=>{let w;try{w=JSON.parse(r.decode(_)),o("data recevied",w)}catch(D){o("error parsing data",D);return}switch(n.setState(D=>(D.server.messages.push({...w,timestamp:new Date,source:"remote"}),D)),w.type){case Q.StateUpdate:o("state update",w.payload);const{new_state:D,delay_s:U}=w.payload;if([N.Thinking,N.Speaking].includes(D)&&n.getState().server.turnContext.clear(),D===N.Listening&&!f.current){f.current=!0,performance.mark("voice_mode.end");const P=performance.measure("voice_mode","voice_mode.start","voice_mode.end").duration.toFixed(0);L.voiceMode.connect({durationMs:P}),n.setState(A=>{A.metrics.livekitConnectSuccessTime=new Date,A.metrics.sessionConnectedTime=new Date})}D===N.Thinking&&U&&(o(`${t?.name} delay thinking state by ${U} seconds`),p({new_state:N.ListeningIntently,delay_s:U}),await new Promise(P=>setTimeout(P,U*1e3))),p(w.payload);break;case Q.ConversationUpdate:{o("conversation update",w.payload);const P=n.getState().conversationId,{conversation_id:A}=w.payload;if(P&&An(P)){Qe.initThread(P,{kind:Le.PrimaryAssistant}),w.payload.response?.error&&!n.getState().metrics.conversationStartSuccessTime&&n.setState(V=>{V.metrics.conversationStartFailTime=new Date}),Qe.setServerIdForNewThread(P,A),n.setState(V=>{V.conversationId=A,V.metrics.conversationStartSuccessTime||(V.metrics.conversationStartSuccessTime=new Date)}),_n(kn,e,A);const E=Ne.getGizmoId(Ue(P));qt(e,E)}await u(A),i&&s(A);break}case Q.UsageUpdate:g(w.payload);break;case Q.ToolUpdate:v(w.payload);break;case Q.Performance:{const P=w.payload.metrics;n.setState(A=>{P.forEach(E=>{E.name==="total_latency_ms"?A.metrics.totalLatencyMs.push(E.ms):E.name==="current_rtt_ms"&&A.metrics.currentRttMs.push(E.ms)})});break}}},x=(_,w)=>{o("track published",_,w)},M=()=>{o("disconnected"),n.setState(_=>{_.metrics.sessionEndTime=new Date}),Ht(n),L.voiceSessionDisconnected.stateChange()},y=(_,w)=>{w instanceof En&&(o(`Connection quality changed for participant ${w.identity}: ${_}`),n.setState(D=>{D.server.voiceConnectionQuality=_}))};return t?.on(T.DataReceived,S),t?.on(T.TrackPublished,x),t?.on(T.ConnectionQualityChanged,y),t?.on(T.Disconnected,M),()=>{t?.off(T.DataReceived,S),t?.off(T.TrackPublished,x),t?.off(T.ConnectionQualityChanged,y),t?.off(T.Disconnected,M)}},[o,r,c,i,s,m,e,u,t,a,n])}function Dr(){Er(),Ir(),Pr(),Rr(),Fr()}function Er(){const{room:e}=B(),n=G();d.useEffect(()=>{n.setState(t=>{t.dev.room=e})},[e,n])}function Ir(){const{room:e}=B(),n=vr(e),t=G();d.useEffect(()=>{t.setState(o=>{o.server.connectionState=n})},[n,t])}function Pr(){const{room:e,debug:n,encoder:t}=B(),o=G();d.useEffect(()=>{const r=!!o.getState().server.actions;if(e&&!r){const i=async a=>{n("publishing action",a);const c={type:Q.ActionRequest,payload:{action:a}};await e.localParticipant.publishData(t.encode(JSON.stringify(c)),{reliable:!0}),o.setState(s=>{s.server.messages.push({...c,timestamp:new Date,source:"local"})})};o.setState(a=>{a.server.actions={[j.StartListeningIntently]:()=>i(j.StartListeningIntently),[j.StopListeningIntently]:()=>i(j.StopListeningIntently),[j.HaltAllActivity]:()=>i(j.HaltAllActivity),[j.ResumeListening]:()=>i(j.ResumeListening),[j.RelayMessage]:()=>i(j.RelayMessage)}})}},[e,n,t,o])}function Rr(){const n=G()(t=>t.isVoiceModeActive);d.useEffect(()=>(ye.setState({isVoiceActive:n}),()=>{ye.setState({isVoiceActive:!1})}),[n])}function Fr(){const e=G(),{room:n,encoder:t}=B(),o=d.useCallback(async r=>{await n?.localParticipant.publishData(t.encode(JSON.stringify(r)),{reliable:!0}),e.setState(i=>{i.server.messages.push({...r,timestamp:new Date,source:"local"})})},[n,t,e]);d.useEffect(()=>{e.setState(r=>{r.server.turnContext.setPublisher(o)})},[o,e])}const Ki=d.memo(function(){return Mr(),Dr(),Sr(),null});function Xi(e){return{conversation_id:e.serverThreadId,parent_message_id:e.parentMessageId,voice_mode:e.isAdvancedMode?"advanced":"standard",eventSource:e.eventSource,clientThreadId:e.clientThreadId,gizmo_id:e.gizmoId,voice:e.voice}}function Lr({requestMicPermissions:e}={requestMicPermissions:!1}){const n=xn(),t=G(),o=co(),{voiceName:r,voiceMainLanguage:i,voiceTrainingAllowed:a,videoTrainingAllowed:c}=Mn(),s=ee(v=>v.isVoiceModeActive),u=Wt(),{room:f}=B(),h=Gt(),b=io(),l=Ct(),m=n.formatMessage({id:"useVoiceModeButtonAction.error",defaultMessage:"Failed to start voice mode"}),p=d.useCallback(async()=>{u&&(await f?.disconnect(),ke(null,t),t.setState(v=>{v.server.remoteState=N.Halted}))},[u,f,t]);return{startVoiceMode:d.useCallback(async v=>{u&&(await f?.disconnect(),ke(null,t)),e&&await b();const S=await ae("audioinput");t.setState(y=>{y.audioInputDevice=S,y.isVoiceModeActive=!0,y.voiceMode=v.voice_mode,y.server.remoteState=N.Connecting,y.metrics.sessionCreateTime=new Date,y.metrics.totalLatencyMs=[],y.metrics.currentRttMs=[],y.metrics.numSpeaking=0,y.metrics.numThinking=0,y.metrics.numListening=0,y.metrics.getStatusSentTime=void 0,y.metrics.getStatusSuccessTime=void 0,y.metrics.getStatusFailedTime=void 0,y.metrics.getTokenSentTime=void 0,y.metrics.getTokenSuccessTime=void 0,y.metrics.getTokenFailedTime=void 0,y.metrics.livekitConnectTime=void 0,y.metrics.livekitConnectSuccessTime=void 0,y.metrics.livekitConnectFailTime=void 0,y.metrics.conversationStartSuccessTime=void 0,y.metrics.conversationStartFailTime=void 0,y.metrics.sessionConnectedTime=void 0});const x=performance.now(),M=[8,4,4,4,12].map(y=>Math.floor(Math.random()*Math.pow(10,y)).toString(16).padStart(y,"0").toUpperCase()).join("-");try{L.livekit.connectCalled(),t.setState(O=>{O.metrics.getStatusSentTime=new Date});const y=await h({conversation_id:v.conversation_id??null,requested_voice_mode:v.voice_mode??null,gizmo_id:v.gizmo_id??null,voice:v.voice,requested_default_model:v.requested_default_model??null},v.eventSource);t.setState(O=>{O.metrics.getStatusSuccessTime=new Date});const{default_voice_mode:_,modes:w,chatreq:D}=y;performance.mark("livekit.start"),performance.mark("voice_mode.start");const{eventSource:U,voice:P,clientThreadId:A,voice_mode:E,gizmo_id:V,...H}=v,fe=w.find(O=>O.mode===_);if(!fe)throw new Error("No voice status mode found for default mode "+_);const Y=fe.default_model_slug,pe=_==="advanced"?Y:void 0,ve=D?await At.getEnforcementToken(D):null,me=v.gizmo_id?{kind:Le.GizmoInteraction,gizmo_id:v.gizmo_id}:{kind:Le.PrimaryAssistant};t.setState(O=>{O.metrics.getTokenSentTime=new Date}),$t(H);const W=await Yt.getVoiceToken({...H,voice:P??r,language_code:i,voice_session_id:M,timezone_offset_min:new Date().getTimezoneOffset(),voice_mode:_,model_slug:Y,model_slug_advanced:pe,chatreq_token:D?.token,history_and_training_disabled:l,conversation_mode:me,voice_training_allowed:a,video_training_allowed:c},v.eventSource,ve);t.setState(O=>{O.metrics.getTokenSuccessTime=new Date,O.metrics.livekitConnectTime=new Date}),W&&W.token&&W.url&&W.e2ee_key&&(ye.setState({lastVoiceSessionStartTime:new Date}),t.setState(O=>{O.server.remoteState=N.Listening}),ke({conversationId:v.conversation_id??v.clientThreadId,voiceSessionId:M,voiceMode:W.voice_mode_decision.voice_mode,credentials:{...W,e2eeKey:W.e2ee_key}},t)),performance.mark("livekit.end"),L.livekit.success({durationMs:performance.measure("livekit","livekit.start","livekit.end").duration.toFixed(0),voice_session_id:M}),L.connectionLatency.success({durationMs:performance.now()-x})}catch(y){t.setState(w=>{w.metrics.getStatusSuccessTime||(w.metrics.getStatusFailedTime=new Date),w.metrics.getTokenSuccessTime||(w.metrics.getTokenFailedTime=new Date)});const _=ao(t.getState());throw L.livekit.failure(y,{..._,voice_session_id:M,eventSource:v.eventSource,voice:v.voice??"(undefined)",requested_voice_mode:v.voice_mode??"(undefined)",gizmo_id:v.gizmo_id??"(undefined)"}),Ve.debug("failed to get voice token",y),t.setState(w=>{w.server.remoteState=N.Halted}),L.connectionLatency.failure({durationMs:performance.now()-x}),o.danger(m),y}},[b,m,h,u,l,e,f,o,c,i,r,t,a]),stopVoiceMode:p,isConnected:u,isVoiceModeActive:s}}const Nr=()=>Dn().some(n=>n.voice==="shade"),fn=Tt.JumpToShade,Ur=()=>{const e=Ze.getItem(fn)==="true",n=d.useCallback(()=>{Ze.setItem(fn,"true")},[]);return{alreadyTriggered:e,setAlreadyTriggered:n}},Or=2,zr=({viewport:e,canvasSize:n,shouldMeasurePerf:t,source:o})=>{const r=d.useRef({}),i=d.useCallback(a=>{const c=a.getExtension("WEBGL_debug_renderer_info");c&&(r.current.vendor=a.getParameter(c.UNMASKED_VENDOR_WEBGL),r.current.renderer=a.getParameter(c.UNMASKED_RENDERER_WEBGL))},[]);return d.useEffect(()=>{const a={vendor:r.current.vendor??"(unavailable)",renderer:r.current.renderer??"(unavailable)",width:e[0],height:e[1],canvasWidth:n[0],canvasHeight:n[1],dpr:window.devicePixelRatio,source:o};!_t(a,r.current)&&t&&(r.current=a,In(Or).then(s=>{L.bloop.performance({...a,fps:s})}))},[n,t,e,o]),i},Vr=.25,Br=3,pn=28,Ie=55,Pe=200,vn=1.1,jr=({viewport:e,initialScale:n,shouldCalibrate:t})=>{const[o,r]=d.useState(n),i=d.useRef(void 0),a=d.useRef(void 0),c=d.useRef(void 0),s=d.useRef("down"),u=d.useCallback(()=>{const f=s.current==="up"?Br:Vr;In(f).then(h=>{if(h<pn){s.current="down";const b=Math.max(h,1),l=Math.sqrt(b/pn);r(m=>m*l),a.current=window.setTimeout(u,Pe)}else if(c.current){const b=h>=Ie,l=h>=c.current*vn;if(b||l)s.current="up",r(m=>m*vn),a.current=window.setTimeout(u,Pe);else if(h<Ie){s.current="down";const m=Math.sqrt(h/Ie);r(p=>p*m)}}c.current=h})},[]);return d.useEffect(()=>{const[f,h]=e,[b,l]=i.current??[];return t&&(b!==f||l!==h)&&(i.current=e,clearTimeout(a.current),r(n),a.current=window.setTimeout(u,Pe)),()=>{clearTimeout(a.current)}},[t,u,n,e]),o};var qr=kt,Hr=Dt,Wr=Et,Gr=Mt,$r=Kt,Yr=Math.max;function Kr(e){if(!(e&&e.length))return[];var n=0;return e=qr(e,function(t){if($r(t))return n=Yr(t.length,n),!0}),Gr(n,function(t){return Hr(e,Wr(t))})}var Xr=Kr,Jr=Xt,Qr=Xr,Zr=Jr(Qr),ei=Zr;const Re=St(ei),ni=60,_e=Math.floor(1e3/ni),We=240,ct=2048,ut=new Array(We).fill(0),ti=e=>{const n=yr(e,{bands:We,updateInterval:_e,loPass:0,hiPass:400,analyserOptions:{fftSize:ct}});return n.length===0?ut:n},Ge=e=>{const{magnitudes:n,binCount:t,gainMultiplier:o}=e;if(n.length===0)return new Array(t).fill(0);const r=Math.ceil(n.length/t),i=[];for(let a=0;a<n.length;a+=r){const c=Math.min(a+r,n.length),s=n.slice(a,c).sort((b,l)=>b-l),u=Math.floor(s.length/2);let f;s.length%2===0?f=(s[u-1]+s[u])/2:f=s[u],f=Math.abs(f),f*=o;const h=f/(f+1);i.push(h)}return i},lt=(e,n)=>{const t=n.sampleRate,o=e.length,r=n.bandCount,i=n.binCount,a=n.gainMultipliers;if(a.length!==r)throw new Error("gainMultipliers must have length equal to bandCount");const c=o*2,s=t/c,u=e.map((m,p)=>p*s),f=20,h=t/2,b=new Array(r+1).fill(0).map((m,p)=>f*Math.pow(h/f,p/r)),l=new Array(r).fill(null).map(()=>[]);for(let m=0;m<u.length;m+=1)for(let p=0;p<r;p+=1)if(u[m]>=b[p]&&u[m]<b[p+1]){l[p].push(e[m]);break}for(let m=0;m<r;m+=1){const p=l[m],g=a[m];l[m]=Ge({magnitudes:p,binCount:i,gainMultiplier:g})}return l},mn=60,dt=48e3,oi=1,ri=2,ii=40,ai=2;function hn({time:e,timeConstant:n}){return 1-Math.exp(-e/n)}function gn(e,n){const t=n[1]-n[0];return n[0]+e*t}const Fe=e=>{if(!Array.isArray(e)||e.length!==2||typeof e[0]!="number"||typeof e[1]!="number")throw new Error("zip failed - received a value that is not a [number, number] tuple")},si=e=>{const{prevAudioData:n,prevCumulativeAudioData:t,deltaTimeS:o,audioDataRaw:r}=e,i=r.map(b=>b*o*mn*oi),a=hn({time:o,timeConstant:ri}),c=Re(n,i).map(b=>(Fe(b),gn(a,b))),s=r.map(b=>b*o*mn*ii),u=Re(t,s).map(b=>(Fe(b),b[0]+b[1])),f=hn({time:o,timeConstant:ai}),h=Re(t,u).map(b=>(Fe(b),gn(f,b)));return{audioData:c,cumulativeAudioData:h}},Ji=(e,n)=>{const t=ti(e),o=lt(t,{sampleRate:dt,binCount:n.bins,bandCount:n.bands,gainMultipliers:n.gainMultipliers}),r=Ge({magnitudes:t,binCount:1,gainMultiplier:1});return{bandMagnitudes:o,cumulativeMagnitude:r}};function ci(){let e=null,n,t=0;const o=350;let r;const i=(c,s,u)=>c+(s-c)*u,a=(c,s)=>{if(c.length!==s.length)return!1;for(let u=0;u<c.length;u++)if(c[u]!==s[u])return!1;return!0};return function(s){const u=performance.now();if(!e)return n={bloopColorMain:new Float32Array(s.bloopColorMain),bloopColorLow:new Float32Array(s.bloopColorLow),bloopColorMid:new Float32Array(s.bloopColorMid),bloopColorHigh:new Float32Array(s.bloopColorHigh)},e={bloopColorMain:new Float32Array(s.bloopColorMain),bloopColorLow:new Float32Array(s.bloopColorLow),bloopColorMid:new Float32Array(s.bloopColorMid),bloopColorHigh:new Float32Array(s.bloopColorHigh)},t=u,r=n,r;let f=!1;const h=["bloopColorMain","bloopColorLow","bloopColorMid","bloopColorHigh"];for(const m of h)if(!a(s[m],e[m])){f=!0;break}f&&(n={bloopColorMain:new Float32Array(r.bloopColorMain),bloopColorLow:new Float32Array(r.bloopColorLow),bloopColorMid:new Float32Array(r.bloopColorMid),bloopColorHigh:new Float32Array(r.bloopColorHigh)},t=u,e={bloopColorMain:new Float32Array(s.bloopColorMain),bloopColorLow:new Float32Array(s.bloopColorLow),bloopColorMid:new Float32Array(s.bloopColorMid),bloopColorHigh:new Float32Array(s.bloopColorHigh)});let b=(u-t)/o;b>1&&(b=1);const l={bloopColorMain:new Float32Array(n.bloopColorMain.length),bloopColorLow:new Float32Array(n.bloopColorLow.length),bloopColorMid:new Float32Array(n.bloopColorMid.length),bloopColorHigh:new Float32Array(n.bloopColorHigh.length)};for(const m of h){const p=n[m].length;for(let g=0;g<p;g++){const v=n[m][g],S=s[m][g];l[m][g]=i(v,S,b)}}return r=l,l}}const oe=Ve.createChild("GLCanvas");function ui({className:e,vert:n,frag:t,Behaviors:o,onViewportUpdate:r,onRenderComplete:i,onGlAvailable:a,onCanvasSizeUpdate:c,scale:s}){const u=d.useRef(null),f=d.useRef(null),[h,b]=d.useState(null),[l,m]=d.useState(),p=d.useRef(Jt(S=>{const{width:x,height:M}=S.contentRect,y=Math.floor(Math.min(x??0,M??0));b(y),r?.({width:y,height:y})},100)),g=Qt(p.current);if(en(()=>{const S=u.current,{width:x,height:M}=S??{};if(S&&h!=null&&x&&M){const y=S.getContext("webgl2",{premultipliedAlpha:!0});y?m(y):oe.error("webgl2 context not supported")}},[h]),en(()=>{if(!l)return;const S=l.createProgram(),x=l.createShader(l.VERTEX_SHADER),M=l.createShader(l.FRAGMENT_SHADER);if(!S){oe.debug("failed to create program");return}if(!x||!M){oe.debug("failed to create shaders",x,M);return}let y="";if(l.shaderSource(x,n),l.compileShader(x),y+=`vertShader:
${l.getShaderInfoLog(x)}
`,l.attachShader(S,x),l.shaderSource(M,t),l.compileShader(M),y+=`fragShader:
${l.getShaderInfoLog(M)}
`,l.attachShader(S,M),l.linkProgram(S),l.useProgram(S),y+=l.getProgramInfoLog(S),!l.getProgramParameter(S,l.LINK_STATUS))throw`Could not compile WebGL program. 

${y}`;f.current=S,oe.debug("program created"),a?.(l,S);const _=l.fenceSync(l.SYNC_GPU_COMMANDS_COMPLETE,0);return _&&(l.waitSync(_,0,l.TIMEOUT_IGNORED),i?.()),()=>{oe.debug("cleaning up"),f.current=null,l.detachShader(S,x),l.detachShader(S,M),l.deleteShader(x),l.deleteShader(M),l.deleteProgram(S)}},[l,t,n]),h!=null&&l&&u.current){const S=u.current,x=h*window.devicePixelRatio*(s??1);S.width=x,S.height=x,l.viewport(0,0,x,x),c?.({width:x,height:x})}const v=f.current;return C.jsxs("div",{className:e,ref:g,children:[C.jsx("canvas",{ref:u,style:{width:h??void 0,height:h??void 0}},h),l&&v&&o&&C.jsx(o,{ctx:l,program:v})]})}function li({GLUniformsSetter:e,textureImage:n,textureName:t,variablesRef:o,className:r,vert:i,frag:a,onViewportUpdate:c,onRenderComplete:s,onGlAvailable:u,onCanvasSizeUpdate:f,scale:h}){const b=d.useRef(void 0),l=d.useCallback(async(g,v)=>{if(b.current=new e(g,v),n&&t){const S=g.createTexture();g.bindTexture(g.TEXTURE_2D,S),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_S,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_WRAP_T,g.CLAMP_TO_EDGE),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MIN_FILTER,g.LINEAR),g.texParameteri(g.TEXTURE_2D,g.TEXTURE_MAG_FILTER,g.LINEAR),g.texImage2D(g.TEXTURE_2D,0,g.RGBA,g.RGBA,g.UNSIGNED_BYTE,n);const x=g.getUniformLocation(v,t);g.activeTexture(g.TEXTURE0),g.bindTexture(g.TEXTURE_2D,S),g.uniform1i(x,0)}u?.(g,v)},[e,n,t,u]),m=d.useRef(void 0),p=d.useCallback(()=>{b.current&&o.current&&b.current.setVariablesAndRender(o.current),m.current=requestAnimationFrame(p)},[o]);return d.useEffect(()=>(p(),()=>{m.current&&cancelAnimationFrame(m.current)}),[p]),C.jsx(ui,{className:r,vert:i,frag:a,onViewportUpdate:c,onRenderComplete:s,onGlAvailable:l,onCanvasSizeUpdate:f,scale:h,Behaviors:()=>null})}const di="webp",fi=512,pi=512,vi="srgb",mi=3,hi="uchar",gi=72,bi=!1,yi=8,Si=!1,wi=!1,xi="{{.assetPrefix}}/assets/noise-watercolor-m3j88gni.webp",Ci={format:di,width:fi,height:pi,space:vi,channels:mi,depth:hi,density:gi,isProgressive:bi,paletteBitDepth:yi,hasProfile:Si,hasAlpha:wi,src:xi};let ft;const Te=new window.Image;Te.crossOrigin="anonymous";Te.src=Ci.src;Te.onload=()=>{ft=Te};var Ai=`#version 300 es
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
}`,Ti=`#version 300 es

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
}`;class $e{#o;#a;#e;#r=[];#i={};#n;#t;static#s="BlorbUniformsObject";constructor(n,t){this.#e=n;const o=n.getUniformBlockIndex(t,$e.#s),r=n.getActiveUniformBlockParameter(t,o,n.UNIFORM_BLOCK_DATA_SIZE);this.#n=n.createBuffer(),n.bindBuffer(n.UNIFORM_BUFFER,this.#n),n.bufferData(n.UNIFORM_BUFFER,r,n.DYNAMIC_DRAW);const i=0;n.bindBufferBase(n.UNIFORM_BUFFER,i,this.#n),n.uniformBlockBinding(t,o,i);const a=n.getActiveUniformBlockParameter(t,o,n.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES);this.#r=[],this.#i={};for(let c=0;c<a.length;c++){const s=a[c],u=n.getActiveUniform(t,s);if(!u)throw new Error("No uniformInfo for index "+s);let f=u.name;f=f.replace(/\[0\]$/,"");const h=n.getActiveUniforms(t,[s],n.UNIFORM_OFFSET)[0];this.#r.push(f),this.#i[f]=h}this.#t=new ArrayBuffer(r),this.#o=new Float32Array(this.#t),this.#a=new Int32Array(this.#t)}setVariablesAndRender(n){for(const t of this.#r){const[,o]=t.split("."),i=this.#i[t]/4,a=n[o];typeof a=="number"?this.#o[i]=a:typeof a=="boolean"?this.#a[i]=a?1:0:Array.isArray(a)&&this.#o.set(a,i)}this.#e.bindBuffer(this.#e.UNIFORM_BUFFER,this.#n),this.#e.bufferSubData(this.#e.UNIFORM_BUFFER,0,this.#t),this.#e.drawArrays(this.#e.TRIANGLE_STRIP,0,6)}}function I(e){const n=e.replace("#",""),t=parseInt(n.substring(0,2),16)/255,o=parseInt(n.substring(2,4),16)/255,r=parseInt(n.substring(4,6),16)/255;return new Float32Array([t,o,r])}const re={BLUE:{bloopColorMain:I("#DCF7FF"),bloopColorLow:I("#0181FE"),bloopColorMid:I("#A4EFFF"),bloopColorHigh:I("#FFFDEF")},DARK_BLUE:{bloopColorMain:I("#DAF5FF"),bloopColorLow:I("#0066CC"),bloopColorMid:I("#2EC6F5"),bloopColorHigh:I("#72EAF5")},GREYSCALE:{bloopColorMain:I("#D7D7D7"),bloopColorLow:I("#303030"),bloopColorMid:I("#989898"),bloopColorHigh:I("#FFFFFF")},WHITE:{bloopColorMain:I("#FFFFFF"),bloopColorLow:I("#FFFFFF"),bloopColorMid:I("#FFFFFF"),bloopColorHigh:I("#FFFFFF")},BLACK:{bloopColorMain:I("#000000"),bloopColorLow:I("#000000"),bloopColorMid:I("#000000"),bloopColorHigh:I("#000000")},ANGSTY_BLACK:{bloopColorMain:I("#494949"),bloopColorLow:I("#000000"),bloopColorMid:I("#7F7F7F"),bloopColorHigh:I("#696969")}},_i=({isAdvanced:e,overrideColor:n})=>{const t=Tn();return n&&re[n]?re[n]:e?re.BLUE:t?re.WHITE:re.BLACK},bn=[300,300],ki={bands:4,loPass:0,hiPass:400},Mi=e=>{const n=t=>{let i=1-Math.max(-100,Math.min(-10,t))*-1/100;return i=Math.sqrt(i),i};return e.map(t=>t===-1/0?0:n(t))};function pt(e,n){const[t,o]=d.useState([]),r=d.useRef(void 0);return d.useEffect(()=>{if(!e)return;if(!r.current){const h=new AudioContext,b=h.createMediaElementSource(e),l=h.createAnalyser();b.connect(l),l.connect(h.destination),r.current={audioContext:h,mediaElementAudioSourceNode:b,analyserNode:l}}const{analyserNode:i,audioContext:a}=r.current,c=i?.frequencyBinCount??0,s=new Float32Array(c),f=setInterval(()=>{if(!i)return;i.getFloatFrequencyData(s);let h=s.slice(n.loPass,n.hiPass);const b=Mi(h),l=Math.ceil(b.length/n.bands),m=[];for(let p=0;p<n.bands;p++){const g=b.slice(p*l,(p+1)*l).reduce((v,S)=>v+S,0);m.push(g/l)}o(m)},n.updateInterval);return()=>{clearInterval(f),a&&a.close()}},[e,n.bands,n.hiPass,n.loPass,n.updateInterval]),t}const Di=e=>{const n=pt(e,{bands:We,updateInterval:_e,loPass:0,hiPass:400,analyserOptions:{fftSize:ct}});return n.length===0?ut:n},Ei=(e,n)=>{const t=Di(e),o=lt(t,{sampleRate:dt,binCount:n.bins,bandCount:n.bands,gainMultipliers:n.gainMultipliers}),r=Ge({magnitudes:t,binCount:1,gainMultiplier:1});return{bandMagnitudes:o,cumulativeMagnitude:r}},Ii=e=>{const[n,t]=d.useState({audioData:[0,0,0,0],cumulativeAudioData:[0,0,0,0]}),o=d.useRef([0,0,0,0]),r=d.useRef(void 0),i=d.useRef(performance.now()),{bandMagnitudes:a,cumulativeMagnitude:c}=Ei(e,{bands:3,bins:1,gainMultipliers:[10,1,1]});o.current=[...a,c].flat();const s=d.useCallback(()=>{const u=performance.now(),f=(u-i.current)/1e3;i.current=u;const h=o.current,{audioData:b,cumulativeAudioData:l}=n,m=si({deltaTimeS:f,audioDataRaw:h,prevAudioData:b,prevCumulativeAudioData:l});t(m)},[n]);return d.useEffect(()=>(r.current||(r.current=window.setInterval(s,_e)),()=>{clearInterval(r.current),r.current=void 0}),[s]),n},yn=Promise.resolve();function vt({url:e,readyToPlay:n}){const t=d.useRef(void 0),o=d.useRef(yn);return d.useEffect(()=>(t.current||(t.current=document.createElement("audio")),()=>{o.current.then(()=>{t.current&&(t.current.pause(),t.current.removeAttribute("src"),t.current.remove(),o.current=yn)})}),[]),d.useEffect(()=>{e&&t.current&&t.current.src!==e&&n&&o.current.then(()=>{t.current&&(t.current.crossOrigin="anonymous",t.current.src=e,o.current=t.current.play())})},[n,e]),t.current}function Pi({className:e,url:n}){const[t,o]=d.useState(!1),r=vt({url:n,readyToPlay:t}),i=pt(r,ki),a=d.useMemo(()=>[0,0,0,0],[]);return C.jsx(mt,{className:e,isAdvanced:!1,avgMag:i,cumulativeAudioData:a,onRenderComplete:()=>o(!0)})}function Ri({className:e,url:n,overrideColor:t}){const[o,r]=d.useState(!1),i=vt({url:n,readyToPlay:o}),a=Ii(i),{audioData:c,cumulativeAudioData:s}=a;return C.jsx(mt,{className:e,isAdvanced:!0,overrideColor:t,avgMag:c,cumulativeAudioData:s,onRenderComplete:()=>r(!0)})}const mt=({className:e,avgMag:n,cumulativeAudioData:t,isAdvanced:o,overrideColor:r,onRenderComplete:i})=>{const a=Tn(),c=d.useMemo(()=>performance.now()/1e3,[]),s=d.useMemo(()=>performance.now()/1e3,[]),u=d.useRef(void 0),f=d.useRef(ci()),[h,b]=d.useState(bn),{canvasSizeRef:l,handleCanvasSizeUpdate:m}=so(bn),p=d.useCallback(_=>{b([_.width,_.height])},[]),[g,v]=d.useState(performance.now()/1e3);d.useEffect(()=>{const _=setInterval(()=>{v(performance.now()/1e3)},_e);return()=>clearInterval(_)},[]);const S=_i({isAdvanced:o,overrideColor:r}),x=f.current(S),M=zr({viewport:h,canvasSize:l.current,shouldMeasurePerf:!0,source:"VoicePicker"}),y=jr({shouldCalibrate:!0,viewport:h,initialScale:1});return u.current={time:g,micLevel:0,stateListen:0,listenTimestamp:0,stateThink:0,thinkTimestamp:0,stateSpeak:1,speakTimestamp:s,readyTimestamp:c,stateHalt:0,haltTimestamp:0,touchDownTimestamp:0,touchUpTimestamp:0,stateFailedToConnect:0,failedToConnectTimestamp:0,avgMag:n,cumulativeAudio:t,isNewBloop:!0,isAdvancedBloop:o,bloopColorMain:Array.from(x.bloopColorMain),bloopColorLow:Array.from(x.bloopColorLow),bloopColorMid:Array.from(x.bloopColorMid),bloopColorHigh:Array.from(x.bloopColorHigh),isDarkMode:a,screenScaleFactor:window.devicePixelRatio,viewport:h,silenceAmount:0,silenceTimestamp:0,fadeBloopWhileListening:!1},C.jsx(li,{className:Z("flex items-center justify-center",e),variablesRef:u,onViewportUpdate:p,onRenderComplete:i,textureImage:ft,textureName:"uTextureNoise",onGlAvailable:M,onCanvasSizeUpdate:m,scale:y,GLUniformsSetter:$e,vert:Ti,frag:Ai})};function Fi({isUnauthenticated:e,loading:n,handleLoginClick:t,handleCancelClick:o,handleConfirmClick:r,selectedVoice:i,currentVoiceName:a,cameFromNux:c}){const s="w-52 whitespace-nowrap rounded-full px-20 py-3 font-semibold";return e?C.jsxs(C.Fragment,{children:[C.jsx(he,{className:Z(s,"text-white"),onClick:t,children:n?C.jsx(nn,{}):C.jsx(X,{id:"IRALWH",defaultMessage:"Log in"})}),C.jsx(he,{className:Z(s,"text-black dark:text-white"),color:"ghost",onClick:o,children:C.jsx(X,{id:"8fumUc",defaultMessage:"Back to chat"})})]}):C.jsxs(C.Fragment,{children:[C.jsx(he,{className:Z(s,"text-white"),onClick:r,children:n?C.jsx(nn,{}):i?.voice===a&&!c?C.jsx(X,{id:"MyKAgb",defaultMessage:"Done"}):C.jsx(X,{id:"7+3LaJ",defaultMessage:"Start new chat"})}),C.jsx(he,{className:Z(s,"text-black dark:text-white"),color:"ghost",onClick:o,children:C.jsx(X,{id:"dUn4Wd",defaultMessage:"Cancel"})})]})}const Li={offscreenLeft:{x:"-24rem",opacity:0},left:{x:"-12rem",opacity:.5},center:{x:"0",opacity:1},right:{x:"12rem",opacity:.5},offscreenRight:{x:"24rem",opacity:0}};function Qi({conversationId:e,onClose:n,cameFromNux:t=!1,initialVoiceName:o}){const{isUnauthenticated:r}=It(),i=Zt(),{voiceName:a}=Mn(),c=Dn(),[s,u]=d.useState(!1),f=Ne.getGizmoId(Ue(e)),[h,b]=d.useState(!1),[l,m]=d.useState(!1);d.useEffect(()=>{requestAnimationFrame(()=>b(!0))},[]);const[p,g]=d.useState(!1),[v,S]=d.useState(null);d.useEffect(()=>{if(c.length>0){const R=c.findIndex(K=>K.voice===(o||a));R>=0?S(R):S(2),g(!0)}},[c,a,o]);const x=v!=null?(v-2+c.length)%c.length:0,M=v!=null?(v-1+c.length)%c.length:1,y=v!=null?(v+1)%c.length:3,_=v!=null?(v+2)%c.length:4,w=c[v??0],D=c[x],U=c[M],P=c[y],A=c[_],E=Nr(),{alreadyTriggered:V,setAlreadyTriggered:H}=Ur();d.useEffect(()=>{if(E&&!V){const R=c.findIndex(K=>K.voice==="shade");R!==-1&&(S(R),H())}return()=>{E&&H()}},[E,V,c,S,H]);const fe=d.useMemo(()=>{if(E&&w?.voice==="shade")return"ANGSTY_BLACK"},[w?.voice,E]),Y=R=>{S(R)},{stopVoiceMode:pe,startVoiceMode:ve}=Lr({requestMicPermissions:t}),{setValue:me}=to(Pt.VoiceName),W=ee(R=>R.voiceMode),O=t&&!f?"advanced":W,ht=d.useCallback(()=>{m(!t),setTimeout(()=>{const R=v!=null?c[v]?.voice:c[0]?.voice;sessionStorage.setItem("selectedVoiceName",R),i({authType:"login",callback:K=>{Rt.logLogInButtonClicked({provider:K,location:"Voice Picker Page"})}})},Me)},[t,i,v,c]),gt=d.useCallback(async()=>{m(!t),setTimeout(async()=>{u(!0);const R=v!=null?c[v]?.voice:c[0]?.voice;if(t||R!==a){t||L.voiceSelected.click({action:"changed",voice:R}),me(R),await pe(),kn("/");try{await ve({conversation_id:void 0,eventSource:"voice_picker",voice_mode:O,voice:R,clientThreadId:Ft(),gizmo_id:Ne.getGizmoId(Ue(e))})}catch(K){Lt.addError(`Failed to start voice mode after voice picker: ${K}`)}}else L.voiceSelected.click({action:"kept",voice:a});u(!1),n()},Me)},[t,e,a,n,v,me,ve,pe,O,c]),bt=()=>{m(!0),setTimeout(n,Me)};eo({setSelectedVoiceIndex:S,prevVoiceIndex:M,nextVoiceIndex:y});const[Ye,Ke]=d.useState(!1),Xe=R=>{R==="prev"?Y(M):R==="next"&&Y(y),Ke(!0),setTimeout(()=>{Ke(!1)},175)},Je=d.useMemo(()=>({className:"h-max min-h-bloop w-max min-w-bloop",url:w?.preview_url}),[w?.preview_url]);return!p||v==null?C.jsx("div",{className:"bg-token-main-surface-primary fixed start-0 top-0 z-50 flex h-full w-full"}):C.jsxs("div",{className:`fixed start-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-white transition-opacity duration-300 dark:bg-gray-800 ${h&&!l?"opacity-100":"opacity-0"}`,children:[C.jsx("h1",{className:"mt-36 mb-8 text-3xl font-semibold",children:r?C.jsx(X,{id:"P4GR/e",defaultMessage:"Try voice mode for free"}):C.jsx(X,{id:"2whyE9",defaultMessage:"Choose a voice"})}),C.jsx("div",{className:"flex h-full w-full items-center justify-center",children:w?t&&!f||O==="advanced"?C.jsx(Ri,{...Je,overrideColor:fe}):C.jsx(Pi,{...Je}):null}),C.jsx("div",{className:"mb-8 flex items-center justify-between text-center",children:C.jsxs("div",{className:"relative flex h-24 w-48",children:[C.jsx(ie,{voice:D,variant:"offscreenLeft"},D?.name),C.jsx(ie,{voice:U,variant:"left",onClick:()=>Y(M)},U?.name),C.jsx(Sn,{direction:"prev",onClick:()=>Xe("prev"),isFading:Ye}),C.jsx(ie,{voice:w,variant:"center"},w?.name),C.jsx(Sn,{direction:"next",onClick:()=>Xe("next"),isFading:Ye}),C.jsx(ie,{voice:P,variant:"right",onClick:()=>Y(y)},P?.name),C.jsx(ie,{voice:A,variant:"offscreenRight"},A?.name),C.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-52 transform bg-linear-to-r from-[var(--main-surface-background)] to-transparent"}),C.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-52 transform bg-linear-to-l from-[var(--main-surface-background)] to-transparent"}),C.jsx("div",{className:"pointer-events-none absolute h-full w-full -translate-x-96 transform bg-white dark:bg-gray-800"}),C.jsx("div",{className:"pointer-events-none absolute h-full w-full translate-x-96 transform bg-white dark:bg-gray-800"})]})}),C.jsx("div",{className:"mb-36 flex flex-col space-y-3",children:C.jsx(Fi,{isUnauthenticated:r,loading:s,handleLoginClick:ht,handleCancelClick:bt,handleConfirmClick:gt,selectedVoice:w,currentVoiceName:a,cameFromNux:t})})]})}function ie({voice:e,variant:n,onClick:t}){return C.jsxs(wt.button,{onClick:t,className:"absolute flex w-48 flex-col items-center justify-center select-none",variants:Li,animate:n,initial:n,transition:{duration:.25,ease:"easeInOut"},children:[C.jsx("p",{className:`text-lg ${n==="center"?"font-semibold":""}`,children:e?.name}),C.jsx("p",{className:"text-sm text-gray-600 dark:text-[var(--text-secondary)]",children:e?.description})]})}function Sn({direction:e,onClick:n,isFading:t}){const o=e==="prev"?no:Nt,r=xn(),i=e==="prev"?r.formatMessage({id:"ajuz05",defaultMessage:"Previous voice"}):r.formatMessage({id:"Dr8wrw",defaultMessage:"Next voice"});return C.jsx("button",{className:Z("absolute top-2 z-50 transition-opacity duration-175",e==="prev"?"-start-4":"-end-4",t?"opacity-20":"opacity-100"),onClick:n,"aria-label":i,children:C.jsx(o,{className:"text-token-text-quaternary hover:text-token-text-secondary h-6 w-6"})})}export{fr as $,_e as B,Gi as C,tt as F,li as G,Wi as I,Bi as N,ji as O,ln as R,uo as S,Qi as V,Yi as W,yr as X,qi as Y,Ae as _,co as a,kr as b,Pn as c,Ji as d,_i as e,zr as f,Xi as g,jr as h,$e as i,Ai as j,Nr as k,Ur as l,$i as m,ft as n,Ki as o,si as s,Lr as u,Ti as v,lo as x,Hi as y};
//# sourceMappingURL=ku2v3k21go7flov6.js.map
