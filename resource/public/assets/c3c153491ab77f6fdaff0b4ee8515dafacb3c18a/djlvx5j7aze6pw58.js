import{R as H,r as B}from"./fs6h2trisr1juto6.js";import{s as Re}from"./hz7md1hverpbqmow.js";import"./d7a6rc8fexfzu7dt.js";import"./njq6ygky3ttysgdk.js";import"./f426ftnka0mj72hs.js";import"./hrv8rdfcz5e1nz3e.js";import"./gvhvfcdqhc5unmaw.js";import"./ora9zmv2zdoi2bvo.js";import"./f25rpzpqicaw21n1.js";import"./d8bsurfrp22riggk.js";import"./nm04jgpfyxi6pn12.js";import"./emjevy1zmzft3tmm.js";const Ae=Re("div")({name:"NumberOverlayEditorStyle",class:"gdg-n15fjm3e",propsAsIs:!1});function de(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]]);return a}var Y;(function(e){e.event="event",e.props="prop"})(Y||(Y={}));function $(){}function Oe(e){var t,a=void 0;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return t&&n.length===t.length&&n.every(function(i,l){return i===t[l]})||(t=n,a=e.apply(void 0,n)),a}}function ee(e){return!!(e||"").match(/\d/)}function q(e){return e==null}function Te(e){return typeof e=="number"&&isNaN(e)}function ge(e){return q(e)||Te(e)||typeof e=="number"&&!isFinite(e)}function me(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function Be(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function _e(e,t,a){var n=Be(a),r=e.search(/[1-9]/);return r=r===-1?e.length:r,e.substring(0,r)+e.substring(r,e.length).replace(n,"$1"+t)}function Fe(e){var t=B.useRef(e);t.current=e;var a=B.useRef(function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];return t.current.apply(t,n)});return a.current}function ue(e,t){t===void 0&&(t=!0);var a=e[0]==="-",n=a&&t;e=e.replace("-","");var r=e.split("."),i=r[0],l=r[1]||"";return{beforeDecimal:i,afterDecimal:l,hasNegation:a,addNegation:n}}function Le(e){if(!e)return e;var t=e[0]==="-";t&&(e=e.substring(1,e.length));var a=e.split("."),n=a[0].replace(/^0+/,"")||"0",r=a[1]||"";return(t?"-":"")+n+(r?"."+r:"")}function he(e,t,a){for(var n="",r=a?"0":"",i=0;i<=t-1;i++)n+=e[i]||r;return n}function fe(e,t){return Array(t+1).join(e)}function Se(e){var t=e+"",a=t[0]==="-"?"-":"";a&&(t=t.substring(1));var n=t.split(/[eE]/g),r=n[0],i=n[1];if(i=Number(i),!i)return a+r;r=r.replace(".","");var l=1+i,m=r.length;return l<0?r="0."+fe("0",Math.abs(l))+r:l>=m?r=r+fe("0",l-m):r=(r.substring(0,l)||"0")+"."+r.substring(l),a+r}function se(e,t,a){if(["","-"].indexOf(e)!==-1)return e;var n=(e.indexOf(".")!==-1||a)&&t,r=ue(e),i=r.beforeDecimal,l=r.afterDecimal,m=r.hasNegation,p=parseFloat("0."+(l||"0")),y=l.length<=t?"0."+l:p.toFixed(t),h=y.split("."),d=i.split("").reverse().reduce(function(N,w,g){return N.length>g?(Number(N[0])+Number(w)).toString()+N.substring(1,N.length):w+N},h[0]),S=he(h[1]||"",t,a),x=m?"-":"",c=n?".":"";return""+x+d+c+S}function Z(e,t){if(e.value=e.value,e!==null){if(e.createTextRange){var a=e.createTextRange();return a.move("character",t),a.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(t,t),!0):(e.focus(),!1)}}var pe=Oe(function(e,t){for(var a=0,n=0,r=e.length,i=t.length;e[a]===t[a]&&a<r;)a++;for(;e[r-1-n]===t[i-1-n]&&i-n>a&&r-n>a;)n++;return{from:{start:a,end:r-n},to:{start:a,end:i-n}}});function je(e,t,a){return Math.min(Math.max(e,t),a)}function oe(e){return Math.max(e.selectionStart,e.selectionEnd)}function Me(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function Pe(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function ke(e){var t=e.currentValue,a=e.formattedValue,n=e.currentValueIndex,r=e.formattedValueIndex;return t[n]===a[r]}function Ke(e,t,a,n,r,i,l){l===void 0&&(l=ke);var m=r.findIndex(function(k){return k}),p=e.slice(0,m);!t&&!a.startsWith(p)&&(t=p,a=p+a,n=n+p.length);for(var y=a.length,h=e.length,d={},S=new Array(y),x=0;x<y;x++){S[x]=-1;for(var c=0,N=h;c<N;c++){var w=l({currentValue:a,lastValue:t,formattedValue:e,currentValueIndex:x,formattedValueIndex:c});if(w&&d[c]!==!0){S[x]=c,d[c]=!0;break}}}for(var g=n;g<y&&(S[g]===-1||!i(a[g]));)g++;var _=g===y||S[g]===-1?h:S[g];for(g=n-1;g>0&&S[g]===-1;)g--;var L=g===-1||S[g]===-1?0:S[g]+1;return L>_?_:n-L<_-n?L:_}function ve(e,t,a,n){var r=e.length;if(t=je(t,0,r),n==="left"){for(;t>=0&&!a[t];)t--;t===-1&&(t=a.indexOf(!0))}else{for(;t<=r&&!a[t];)t++;t>r&&(t=a.lastIndexOf(!0))}return t===-1&&(t=r),t}function We(e){for(var t=Array.from({length:e.length+1}).map(function(){return!0}),a=0,n=t.length;a<n;a++)t[a]=!!(ee(e[a])||ee(e[a-1]));return t}function xe(e,t,a,n,r,i){i===void 0&&(i=$);var l=Fe(function(c,N){var w,g;return ge(c)?(g="",w=""):typeof c=="number"||N?(g=typeof c=="number"?Se(c):c,w=n(g)):(g=r(c,void 0),w=n(g)),{formattedValue:w,numAsString:g}}),m=B.useState(function(){return l(q(e)?t:e,a)}),p=m[0],y=m[1],h=function(c,N){c.formattedValue!==p.formattedValue&&y({formattedValue:c.formattedValue,numAsString:c.value}),i(c,N)},d=e,S=a;q(e)&&(d=p.numAsString,S=!0);var x=l(d,S);return B.useMemo(function(){y(x)},[x.formattedValue]),[p,h]}function Ue(e){return e.replace(/[^0-9]/g,"")}function $e(e){return e}function Ge(e){var t=e.type;t===void 0&&(t="text");var a=e.displayType;a===void 0&&(a="input");var n=e.customInput,r=e.renderText,i=e.getInputRef,l=e.format;l===void 0&&(l=$e);var m=e.removeFormatting;m===void 0&&(m=Ue);var p=e.defaultValue,y=e.valueIsNumericString,h=e.onValueChange,d=e.isAllowed,S=e.onChange;S===void 0&&(S=$);var x=e.onKeyDown;x===void 0&&(x=$);var c=e.onMouseUp;c===void 0&&(c=$);var N=e.onFocus;N===void 0&&(N=$);var w=e.onBlur;w===void 0&&(w=$);var g=e.value,_=e.getCaretBoundary;_===void 0&&(_=We);var L=e.isValidInputCharacter;L===void 0&&(L=ee);var k=e.isCharacterSame,j=de(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),G=xe(g,p,!!y,l,m,h),K=G[0],b=K.formattedValue,M=K.numAsString,W=G[1],P=B.useRef({formattedValue:b,numAsString:M}),z=function(o,u){P.current={formattedValue:o.formattedValue,numAsString:o.value},W(o,u)},U=B.useState(!1),J=U[0],Q=U[1],f=B.useRef(null),s=B.useRef({setCaretTimeout:null,focusTimeout:null});B.useEffect(function(){return Q(!0),function(){clearTimeout(s.current.setCaretTimeout),clearTimeout(s.current.focusTimeout)}},[]);var O=l,D=function(o,u){var v=parseFloat(u);return{formattedValue:o,value:u,floatValue:isNaN(v)?void 0:v}},I=function(o,u,v){o.selectionStart===0&&o.selectionEnd===o.value.length||(Z(o,u),s.current.setCaretTimeout=setTimeout(function(){o.value===v&&o.selectionStart!==o.selectionEnd&&Z(o,u)},0))},R=function(o,u,v){return ve(o,u,_(o),v)},F=function(o,u,v){var C=_(u),E=Ke(u,b,o,v,C,L,k);return E=ve(u,E,C),E},te=function(o){var u=o.formattedValue;u===void 0&&(u="");var v=o.input,C=o.setCaretPosition;C===void 0&&(C=!0);var E=o.source,V=o.event,A=o.numAsString,T=o.caretPos;if(v){if(T===void 0&&C){var X=o.inputValue||v.value,ie=oe(v);v.value=u,T=F(X,u,ie)}v.value=u,C&&T!==void 0&&I(v,T,u)}u!==b&&z(D(u,A),{event:V,source:E})};B.useEffect(function(){var o=P.current,u=o.formattedValue,v=o.numAsString;b!==u&&(b!==M||u!==v)&&z(D(b,M),{event:void 0,source:Y.props})},[b,M]);var ne=f.current?oe(f.current):void 0,ae=typeof window<"u"?B.useLayoutEffect:B.useEffect;ae(function(){var o=f.current;if(b!==P.current.formattedValue&&o){var u=F(P.current.formattedValue,b,ne);o.value=b,I(o,u,b)}},[b]);var be=function(o,u,v){var C=pe(b,o),E=Object.assign(Object.assign({},C),{lastValue:b}),V=m(o,E),A=O(V);if(V=m(A,void 0),d&&!d(D(A,V))){var T=u.target,X=oe(T),ie=F(o,b,X);return T.value=b,I(T,ie,b),!1}return te({formattedValue:A,numAsString:V,inputValue:o,event:u,source:v,setCaretPosition:!0,input:u.target}),!0},Ve=function(o){var u=o.target,v=u.value,C=be(v,o,Y.event);C&&S(o)},Ne=function(o){var u=o.target,v=o.key,C=u.selectionStart,E=u.selectionEnd,V=u.value;V===void 0&&(V="");var A;if(v==="ArrowLeft"||v==="Backspace"?A=Math.max(C-1,0):v==="ArrowRight"?A=Math.min(C+1,V.length):v==="Delete"&&(A=C),A===void 0||C!==E){x(o);return}var T=A;if(v==="ArrowLeft"||v==="ArrowRight"){var X=v==="ArrowLeft"?"left":"right";T=R(V,A,X),T!==A&&o.preventDefault()}else v==="Delete"&&!L(V[A])?T=R(V,A,"right"):v==="Backspace"&&!L(V[A])&&(T=R(V,A,"left"));T!==A&&I(u,T,V),o.isUnitTestRun&&I(u,T,V),x(o)},we=function(o){var u=o.target,v=u.selectionStart,C=u.selectionEnd,E=u.value;if(E===void 0&&(E=""),v===C){var V=R(E,v);V!==v&&I(u,V,E)}c(o)},De=function(o){o.persist&&o.persist();var u=o.target;f.current=u,s.current.focusTimeout=setTimeout(function(){var v=u.selectionStart,C=u.selectionEnd,E=u.value;E===void 0&&(E="");var V=R(E,v);V!==v&&!(v===0&&C===E.length)&&I(u,V,E),N(o)},0)},Ie=function(o){f.current=null,clearTimeout(s.current.focusTimeout),clearTimeout(s.current.setCaretTimeout),w(o)},Ce=J&&Me()?"numeric":void 0,le=Object.assign({inputMode:Ce},j,{type:t,value:b,onChange:Ve,onKeyDown:Ne,onMouseUp:we,onFocus:De,onBlur:Ie});if(a==="text")return r?H.createElement(H.Fragment,null,r(b,j)||null):H.createElement("span",Object.assign({},j,{ref:i}),b);if(n){var Ee=n;return H.createElement(Ee,Object.assign({},le,{ref:i}))}return H.createElement("input",Object.assign({},le,{ref:i}))}function ce(e,t){var a=t.decimalScale,n=t.fixedDecimalScale,r=t.prefix;r===void 0&&(r="");var i=t.suffix;i===void 0&&(i="");var l=t.allowNegative,m=t.thousandsGroupStyle;if(m===void 0&&(m="thousand"),e===""||e==="-")return e;var p=re(t),y=p.thousandSeparator,h=p.decimalSeparator,d=a!==0&&e.indexOf(".")!==-1||a&&n,S=ue(e,l),x=S.beforeDecimal,c=S.afterDecimal,N=S.addNegation;return a!==void 0&&(c=he(c,a,!!n)),y&&(x=_e(x,y,m)),r&&(x=r+x),i&&(c=c+i),N&&(x="-"+x),e=x+(d&&h||"")+c,e}function re(e){var t=e.decimalSeparator;t===void 0&&(t=".");var a=e.thousandSeparator,n=e.allowedDecimalSeparators;return a===!0&&(a=","),n||(n=[t,"."]),{decimalSeparator:t,thousandSeparator:a,allowedDecimalSeparators:n}}function Ze(e,t){e===void 0&&(e="");var a=new RegExp("(-)"),n=new RegExp("(-)(.)*(-)"),r=a.test(e),i=n.test(e);return e=e.replace(/-/g,""),r&&!i&&t&&(e="-"+e),e}function ze(e,t){return new RegExp("(^-)|[0-9]|"+me(e),"g")}function He(e,t,a){return e===""?!0:!t?.match(/\d/)&&!a?.match(/\d/)&&typeof e=="string"&&!isNaN(Number(e))}function qe(e,t,a){var n;t===void 0&&(t=Pe(e));var r=a.allowNegative,i=a.prefix;i===void 0&&(i="");var l=a.suffix;l===void 0&&(l="");var m=a.decimalScale,p=t.from,y=t.to,h=y.start,d=y.end,S=re(a),x=S.allowedDecimalSeparators,c=S.decimalSeparator,N=e[d]===c;if(ee(e)&&(e===i||e===l)&&t.lastValue==="")return e;if(d-h===1&&x.indexOf(e[h])!==-1){var w=m===0?"":c;e=e.substring(0,h)+w+e.substring(h+1,e.length)}var g=function(s,O,D){var I=!1,R=!1;i.startsWith("-")?I=!1:s.startsWith("--")?(I=!1,R=!0):l.startsWith("-")&&s.length===l.length?I=!1:s[0]==="-"&&(I=!0);var F=I?1:0;return R&&(F=2),F&&(s=s.substring(F),O-=F,D-=F),{value:s,start:O,end:D,hasNegation:I}},_=g(e,h,d),L=_.hasNegation;n=_,e=n.value,h=n.start,d=n.end;var k=g(t.lastValue,p.start,p.end),j=k.start,G=k.end,K=k.value,b=e.substring(h,d);e.length&&K.length&&(j>K.length-l.length||G<i.length)&&!(b&&l.startsWith(b))&&(e=K);var M=0;e.startsWith(i)?M+=i.length:h<i.length&&(M=h),e=e.substring(M),d-=M;var W=e.length,P=e.length-l.length;e.endsWith(l)?W=P:(d>P||d>e.length-l.length)&&(W=d),e=e.substring(0,W),e=Ze(L?"-"+e:e,r),e=(e.match(ze(c))||[]).join("");var z=e.indexOf(c);e=e.replace(new RegExp(me(c),"g"),function(s,O){return O===z?".":""});var U=ue(e,r),J=U.beforeDecimal,Q=U.afterDecimal,f=U.addNegation;return y.end-y.start<p.end-p.start&&J===""&&N&&!parseFloat(Q)&&(e=f?"-":""),e}function Je(e,t){var a=t.prefix;a===void 0&&(a="");var n=t.suffix;n===void 0&&(n="");var r=Array.from({length:e.length+1}).map(function(){return!0}),i=e[0]==="-";r.fill(!1,0,a.length+(i?1:0));var l=e.length;return r.fill(!1,l-n.length+1,l+1),r}function Qe(e){var t=re(e),a=t.thousandSeparator,n=t.decimalSeparator,r=e.prefix;r===void 0&&(r="");var i=e.allowNegative;if(i===void 0&&(i=!0),a===n)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+a+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+n+` (default value for decimalSeparator is .)
     `);return r.startsWith("-")&&i&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+r+`
      allowNegative: `+i+`
    `),i=!1),Object.assign(Object.assign({},e),{allowNegative:i})}function Xe(e){e=Qe(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var t=e.suffix,a=e.allowNegative,n=e.allowLeadingZeros,r=e.onKeyDown;r===void 0&&(r=$);var i=e.onBlur;i===void 0&&(i=$);var l=e.thousandSeparator,m=e.decimalScale,p=e.fixedDecimalScale,y=e.prefix;y===void 0&&(y="");var h=e.defaultValue,d=e.value,S=e.valueIsNumericString,x=e.onValueChange,c=de(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),N=re(e),w=N.decimalSeparator,g=N.allowedDecimalSeparators,_=function(f){return ce(f,e)},L=function(f,s){return qe(f,s,e)},k=q(d)?h:d,j=S??He(k,y,t);q(d)?q(h)||(j=j||typeof h=="number"):j=j||typeof d=="number";var G=function(f){return ge(f)?f:(typeof f=="number"&&(f=Se(f)),j&&typeof m=="number"?se(f,m,!!p):f)},K=xe(G(d),G(h),!!j,_,L,x),b=K[0],M=b.numAsString,W=b.formattedValue,P=K[1],z=function(f){var s=f.target,O=f.key,D=s.selectionStart,I=s.selectionEnd,R=s.value;if(R===void 0&&(R=""),D!==I){r(f);return}O==="Backspace"&&R[0]==="-"&&D===y.length+1&&a&&Z(s,1),m&&p&&(O==="Backspace"&&R[D-1]===w?(Z(s,D-1),f.preventDefault()):O==="Delete"&&R[D]===w&&f.preventDefault()),g?.includes(O)&&R[D]===w&&Z(s,D+1);var F=l===!0?",":l;O==="Backspace"&&R[D-1]===F&&Z(s,D-1),O==="Delete"&&R[D]===F&&Z(s,D+1),r(f)},U=function(f){var s=M;if(s.match(/\d/g)||(s=""),n||(s=Le(s)),p&&m&&(s=se(s,m,p)),s!==M){var O=ce(s,e);P({formattedValue:O,value:s,floatValue:parseFloat(s)},{event:f,source:Y.event})}i(f)},J=function(f){return f===w?!0:ee(f)},Q=function(f){var s=f.currentValue,O=f.lastValue,D=f.formattedValue,I=f.currentValueIndex,R=f.formattedValueIndex,F=s[I],te=D[R],ne=pe(O,s),ae=ne.to;return I>=ae.start&&I<ae.end&&g&&g.includes(F)&&te===w?!0:F===te};return Object.assign(Object.assign({},c),{value:W,valueIsNumericString:!1,isValidInputCharacter:J,isCharacterSame:Q,onValueChange:P,format:_,removeFormatting:L,getCaretBoundary:function(f){return Je(f,e)},onKeyDown:z,onBlur:U})}function Ye(e){var t=Xe(e);return H.createElement(Ge,Object.assign({},t))}function ye(){return Intl.NumberFormat()?.formatToParts(1.1)?.find(a=>a.type==="decimal")?.value??"."}function et(){return ye()==="."?",":"."}const dt=e=>{const{value:t,onChange:a,disabled:n,highlight:r,validatedSelection:i,fixedDecimals:l,allowNegative:m,thousandSeparator:p,decimalSeparator:y}=e,h=B.useRef();return B.useLayoutEffect(()=>{if(i!==void 0){const d=typeof i=="number"?[i,null]:i;h.current?.setSelectionRange(d[0],d[1])}},[i]),B.createElement(Ae,null,B.createElement(Ye,{autoFocus:!0,getInputRef:h,className:"gdg-input",onFocus:d=>d.target.setSelectionRange(r?0:d.target.value.length,d.target.value.length),disabled:n===!0,decimalScale:l,allowNegative:m,thousandSeparator:p??et(),decimalSeparator:y??ye(),value:Object.is(t,-0)?"-":t??"",onValueChange:a}))};export{dt as default};
//# sourceMappingURL=djlvx5j7aze6pw58.js.map
