import{aF as f,aG as v,aY as _,x as p}from"./l6lryjpkt8rv0lpy.js";import{l as I,g as k,u as M,r as w,c as P,C as N,d as j,e as y,i as C,m as L,b as S,f as R,h as B,P as Q,j as W,k as G,n as T,o as U}from"./ip05ze86pf0rgyfu.js";import{i as V}from"./okkj3my0355ooax9.js";import"./mnkup87aq6tfilq5.js";function D(e){return e.toLowerCase().replace(".","").replace(/\s+/g,"-")}function E(e,t){return t===void 0&&(t=!1),t?btoa(e).replace(/=/g,""):void 0}function Y(e){return("Integration"in e?e.Integration:e).prototype.name}function H(e,t,n){var i,a;try{var r=((a=(i=window?.performance)===null||i===void 0?void 0:i.getEntriesByName(e,"resource"))!==null&&a!==void 0?a:[])[0];r&&t.stats.gauge("legacy_destination_time",Math.round(r.duration),_([n],r.duration<100?["cached"]:[],!0))}catch{}}function J(e,t,n){var i;if("Integration"in e){var a={user:function(){return n.user()},addIntegration:function(){}};e(a),i=e.Integration}else i=e;var r=new i(t);return r.analytics=n,r}function K(e,t,n,i){return f(this,void 0,void 0,function(){var a,r,s,u,o,d;return v(this,function(c){switch(c.label){case 0:a=D(t),r=E(a,i),s=k(),u="".concat(s,"/integrations/").concat(r??a,"/").concat(n,"/").concat(r??a,".dynamic.js.gz"),c.label=1;case 1:return c.trys.push([1,3,,4]),[4,I(u)];case 2:return c.sent(),H(u,e,t),[3,4];case 3:throw o=c.sent(),e.stats.gauge("legacy_destination_time",-1,["plugin:".concat(t),"failed"]),o;case 4:return d=window["".concat(a,"Deps")],[4,Promise.all(d.map(function(g){return I(s+g+".gz")}))];case 5:return c.sent(),window["".concat(a,"Loader")](),[2,window["".concat(a,"Integration")]]}})})}function X(e,t,n){return f(this,void 0,void 0,function(){var i,a,r,s;return v(this,function(u){return i=k(),a=D(e),r=E(e,n),s="".concat(i,"/integrations/").concat(r??a,"/").concat(t,"/").concat(r??a,".dynamic.js.gz"),[2,M(s)]})})}function Z(e){var t,n,i,a;return(a=(n=(t=e?.versionSettings)===null||t===void 0?void 0:t.override)!==null&&n!==void 0?n:(i=e?.versionSettings)===null||i===void 0?void 0:i.version)!==null&&a!==void 0?a:"latest"}var $=function(e,t){var n,i=t.type,a=t.bundlingStatus,r=t.versionSettings,s=a!=="unbundled"&&(i==="browser"||((n=r?.componentTypes)===null||n===void 0?void 0:n.includes("browser")));return!e.startsWith("Segment")&&e!=="Iterable"&&s},q=function(e,t){var n=t.All===!1&&t[e]===void 0;return t[e]===!1||n};function x(e,t){return f(this,void 0,void 0,function(){var n,i=this;return v(this,function(a){switch(a.label){case 0:return n=[],P()?[2,t]:[4,R(function(){return t.length>0&&T()},function(){return f(i,void 0,void 0,function(){var r,s,u;return v(this,function(o){switch(o.label){case 0:return r=t.pop(),r?[4,G(r,e)]:[2];case 1:return s=o.sent(),u=s instanceof U,u||n.push(r),[2]}})})})];case 1:return a.sent(),n.map(function(r){return t.pushWithBackoff(r)}),[2,t]}})})}var tt=function(){function e(t,n,i,a,r,s){a===void 0&&(a={});var u=this;this.options={},this.type="destination",this.middleware=[],this.initializePromise=B(),this.flushing=!1,this.name=t,this.version=n,this.settings=p({},a),this.disableAutoISOConversion=r.disableAutoISOConversion||!1,this.integrationSource=s,this.settings.type&&this.settings.type==="browser"&&delete this.settings.type,this.initializePromise.promise.then(function(o){return u._initialized=o},function(){}),this.options=r,this.buffer=r.disableClientPersistence?new Q(4,[]):new W(4,"".concat(i,":dest-").concat(t)),this.scheduleFlush()}return e.prototype.isLoaded=function(){return!!this._ready},e.prototype.ready=function(){var t=this;return this.initializePromise.promise.then(function(){var n;return(n=t.onReady)!==null&&n!==void 0?n:Promise.resolve()})},e.prototype.load=function(t,n){var i;return f(this,void 0,void 0,function(){var a,r,s=this;return v(this,function(u){switch(u.label){case 0:return this._ready||this.onReady!==void 0?[2]:(i=this.integrationSource)!==null&&i!==void 0?(r=i,[3,3]):[3,1];case 1:return[4,K(t,this.name,this.version,this.options.obfuscate)];case 2:r=u.sent(),u.label=3;case 3:a=r,this.integration=J(a,this.settings,n),this.onReady=new Promise(function(o){var d=function(){s._ready=!0,o(!0)};s.integration.once("ready",d)}),this.integration.on("initialize",function(){s.initializePromise.resolve(!0)});try{w(t,{integrationName:this.name,methodName:"initialize",type:"classic"}),this.integration.initialize()}catch(o){throw w(t,{integrationName:this.name,methodName:"initialize",type:"classic",didError:!0}),this.initializePromise.resolve(!1),o}return[2]}})})},e.prototype.unload=function(t,n){return X(this.name,this.version,this.options.obfuscate)},e.prototype.addMiddleware=function(){for(var t,n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];this.middleware=(t=this.middleware).concat.apply(t,n)},e.prototype.shouldBuffer=function(t){return t.event.type!=="page"&&(P()||this._ready!==!0||this._initialized!==!0)},e.prototype.send=function(t,n,i){var a,r;return f(this,void 0,void 0,function(){var s,u,o,d,c,g;return v(this,function(h){switch(h.label){case 0:return this.shouldBuffer(t)?(this.buffer.push(t),this.scheduleFlush(),[2,t]):(s=(r=(a=this.options)===null||a===void 0?void 0:a.plan)===null||r===void 0?void 0:r.track,u=t.event.event,s&&u&&this.name!=="Segment.io"&&(o=s[u],V(s,o)?t.updateEvent("integrations",p(p({},t.event.integrations),o?.integrations)):(t.updateEvent("integrations",p(p({},t.event.integrations),{All:!1,"Segment.io":!0})),t.cancel(new N({retry:!1,reason:"Event ".concat(u," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"}))),o?.enabled&&o?.integrations[this.name]===!1&&t.cancel(new N({retry:!1,reason:"Event ".concat(u," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"}))),[4,j(this.name,t.event,this.middleware)]);case 1:if(d=h.sent(),d===null)return[2,t];c=new n(d,{traverse:!this.disableAutoISOConversion}),w(t,{integrationName:this.name,methodName:i,type:"classic"}),h.label=2;case 2:return h.trys.push([2,5,,6]),this.integration?[4,this.integration.invoke.call(this.integration,i,c)]:[3,4];case 3:h.sent(),h.label=4;case 4:return[3,6];case 5:throw g=h.sent(),w(t,{integrationName:this.name,methodName:i,type:"classic",didError:!0}),g;case 6:return[2,t]}})})},e.prototype.track=function(t){return f(this,void 0,void 0,function(){return v(this,function(n){return[2,this.send(t,y.Track,"track")]})})},e.prototype.page=function(t){var n;return f(this,void 0,void 0,function(){return v(this,function(i){switch(i.label){case 0:return!((n=this.integration)===null||n===void 0)&&n._assumesPageview&&!this._initialized&&this.integration.initialize(),[4,this.initializePromise.promise];case 1:return i.sent(),[2,this.send(t,y.Page,"page")]}})})},e.prototype.identify=function(t){return f(this,void 0,void 0,function(){return v(this,function(n){return[2,this.send(t,y.Identify,"identify")]})})},e.prototype.alias=function(t){return f(this,void 0,void 0,function(){return v(this,function(n){return[2,this.send(t,y.Alias,"alias")]})})},e.prototype.group=function(t){return f(this,void 0,void 0,function(){return v(this,function(n){return[2,this.send(t,y.Group,"group")]})})},e.prototype.scheduleFlush=function(){var t=this;this.flushing||setTimeout(function(){return f(t,void 0,void 0,function(){var n;return v(this,function(i){switch(i.label){case 0:return P()||this._ready!==!0||this._initialized!==!0?(this.scheduleFlush(),[2]):(this.flushing=!0,n=this,[4,x(this,this.buffer)]);case 1:return n.buffer=i.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}})})},Math.random()*5e3)},e}();function at(e,t,n,i,a,r){var s,u;if(n===void 0&&(n={}),i===void 0&&(i={}),C())return[];t.plan&&(i=i??{},i.plan=t.plan);var o=(u=(s=t.middlewareSettings)===null||s===void 0?void 0:s.routingRules)!==null&&u!==void 0?u:[],d=t.integrations,c=i.integrations,g=L(t,i??{}),h=r?.reduce(function(l,b){var m;return p(p({},l),(m={},m[Y(b)]=b,m))},{}),O=new Set(_(_([],Object.keys(d).filter(function(l){return $(l,d[l])}),!0),Object.keys(h||{}).filter(function(l){return S(d[l])||S(c?.[l])}),!0));return Array.from(O).filter(function(l){return!q(l,n)}).map(function(l){var b=d[l],m=Z(b),z=new tt(l,m,e,g[l],i,h?.[l]),A=o.filter(function(F){return F.destinationName===l});return A.length>0&&a&&z.addMiddleware(a),z})}export{tt as LegacyDestination,at as ajsDestinations};
//# sourceMappingURL=gond5vzyhgv0nc50.js.map
