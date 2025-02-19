import{r as o,a as P,j as c,c as b}from"./l6lryjpkt8rv0lpy.js";import{fX as v,fY as S,fZ as h,f_ as V,fN as R,u as A,bV as M,aj as x,dg as k}from"./mnkup87aq6tfilq5.js";import{S as B}from"./ele1ib7knnne85uk.js";import{S as L}from"./j2hm9a8aikgw6z16.js";import{cE as E,gm as I}from"./dvllb5fed1b4y7k1.js";import{A as j}from"./bj9d14lm2vt5tl41.js";import{u as T}from"./lrbwp2trsv9othld.js";import"./gy64pge8qevmvg7e.js";const w=s=>o.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.9099C11 4.47485 10.4828 4.24734 10.1621 4.54132L6.67572 7.7372C6.49129 7.90626 6.25019 8.00005 6 8.00005H4C3.44772 8.00005 3 8.44776 3 9.00005V15C3 15.5523 3.44772 16 4 16H6C6.25019 16 6.49129 16.0938 6.67572 16.2629L10.1621 19.4588C10.4828 19.7527 11 19.5252 11 19.0902V4.9099ZM8.81069 3.06701C10.4142 1.59714 13 2.73463 13 4.9099V19.0902C13 21.2655 10.4142 22.403 8.81069 20.9331L5.61102 18H4C2.34315 18 1 16.6569 1 15V9.00005C1 7.34319 2.34315 6.00005 4 6.00005H5.61102L8.81069 3.06701ZM20.3166 6.35665C20.8019 6.09313 21.409 6.27296 21.6725 6.75833C22.5191 8.3176 22.9996 10.1042 22.9996 12.0001C22.9996 13.8507 22.5418 15.5974 21.7323 17.1302C21.4744 17.6185 20.8695 17.8054 20.3811 17.5475C19.8927 17.2896 19.7059 16.6846 19.9638 16.1962C20.6249 14.9444 20.9996 13.5175 20.9996 12.0001C20.9996 10.4458 20.6064 8.98627 19.9149 7.71262C19.6514 7.22726 19.8312 6.62017 20.3166 6.35665ZM15.7994 7.90049C16.241 7.5688 16.8679 7.65789 17.1995 8.09947C18.0156 9.18593 18.4996 10.5379 18.4996 12.0001C18.4996 13.3127 18.1094 14.5372 17.4385 15.5604C17.1357 16.0222 16.5158 16.1511 16.0539 15.8483C15.5921 15.5455 15.4632 14.9255 15.766 14.4637C16.2298 13.7564 16.4996 12.9113 16.4996 12.0001C16.4996 10.9859 16.1653 10.0526 15.6004 9.30063C15.2687 8.85905 15.3578 8.23218 15.7994 7.90049Z",fill:"currentColor"}));function O({audioAssetPointer:s,conversationId:e}){const t=P(),[a,l]=o.useState(!1),n=o.useRef(!0),[r,p]=o.useState(void 0),d=o.useRef(null),u=v(),y=S(i=>i.isPlaying&&i.sourceUrl===r),g=o.useCallback(()=>{const i=h();if(i)d.current?d.current.then(()=>{i.stop(),d.current=null}):i.stop();else return},[]);o.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[]),o.useEffect(()=>()=>{V().isPlaying&&g()},[g]);const C=o.useCallback(async()=>{if(!u||!n.current)return;l(!0);const{url:i}=await j.fetch(t,{asset:s,conversationId:e});l(!1),p(i),u.changeSource(i),d.current=u.play()},[s,e,u,t]);return{togglePlayback:o.useCallback(()=>{if(u)y?g():(R.messagePlayback.click(),C());else return},[y,C,u,g]),isPlaying:y,isLoading:a}}const z=o.memo(function(e){const t=x("1923022511")?.value,a=A(e.conversationId),l=E(e.message);if(!t||!a||l)return null;const n=M.getAudioAssetPointers(e.message.message)[0];return n?c.jsx(Z,{audioAssetPointer:n,conversationId:a}):c.jsx(H,{...e,conversationId:a})});function Z({audioAssetPointer:s,conversationId:e}){const{isLoading:t,isPlaying:a,togglePlayback:l}=O({audioAssetPointer:s,conversationId:e});return c.jsx(m,{onClick:l,isPlaying:a,isLoading:t,playText:f.replay,playIcon:L})}function H({conversationId:s,message:e}){const{isLoading:t,isPlaying:a,togglePlayback:l}=T({conversationId:s,messageId:e.message.id});return c.jsx(m,{onClick:l,isPlaying:a,isLoading:t,playText:f.play,playIcon:w})}function m({onClick:s,isPlaying:e,isLoading:t,playText:a,playIcon:l}){let n,r;const p=b();return t?(n=k,r=f.loading):e?(n=B,r=f.stop):(n=l,r=a),c.jsx(I,{icon:n,label:r?p.formatMessage(r):void 0,disabled:t,onClick:s,style:e||t?{visibility:"visible"}:void 0,testId:"voice-play-turn-action-button"})}const f={replay:{id:"VoiceReadOutLoudButton.replay",defaultMessage:"Replay",description:"The tooltip for the replay button"},play:{id:"VoiceReadOutLoudButton.play",defaultMessage:"Read aloud",description:"The tooltip for the read aloud button"},stop:{id:"VoiceReadOutLoudButton.stop",defaultMessage:"Stop",description:"The tooltip for the stop button"},loading:{id:"VoiceReadOutLoudButton.loading",defaultMessage:"Loading",description:"The tooltip for the spinner"}};export{m as PlayButton,Z as VoiceMessagePlaybackButton,z as VoicePlayButton,H as VoiceReadAloudButton};
//# sourceMappingURL=owc9f1cvmrdg7wny.js.map
