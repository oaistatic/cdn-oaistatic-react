import{a as k,b as O}from"./odcju6j6g3ms287w.js";import"./mwlpozqwnbys03vp.js";import"./cg166fqqcxkeiosv.js";function p(a,t){return Object.keys(t).reduce(function(e,i){if(i.startsWith(a)){var r=i.substr(a.length);e[r]=t[i]}return e},{})}function C(a,t){var e=document.createElement("a");e.href=t;var i=e.search.slice(1),r=i.split("&").reduce(function(v,P){var j=P.split("="),b=j[0],S=j[1];return v[b]=k(S),v},{}),s=[],f=r.ajs_uid,m=r.ajs_event,c=r.ajs_aid,n=O(a.options.useQueryString)?a.options.useQueryString:{},u=n.aid,l=u===void 0?/.+/:u,_=n.uid,A=_===void 0?/.+/:_;if(c){var d=Array.isArray(r.ajs_aid)?r.ajs_aid[0]:r.ajs_aid;l.test(d)&&a.setAnonymousId(d)}if(f){var o=Array.isArray(r.ajs_uid)?r.ajs_uid[0]:r.ajs_uid;if(A.test(o)){var h=p("ajs_trait_",r);s.push(a.identify(o,h))}}if(m){var y=Array.isArray(r.ajs_event)?r.ajs_event[0]:r.ajs_event,g=p("ajs_prop_",r);s.push(a.track(y,g))}return Promise.all(s)}export{C as queryString};
//# sourceMappingURL=oh3rq8336m77f48u.js.map
