import{r as o,b as S,j as u,e as b,d as h}from"./fs6h2trisr1juto6.js";import{fJ as A,fK as R,fM as V,fN as k,fL as M,I as x,c5 as E,al as L,P as m,a as P,cp as B}from"./cyi7nanrg0vdotzd.js";import{S as I}from"./c1p22j8o7hm9vv5x.js";import{S as _}from"./il50daha0kb70ufn.js";import{cx as T,h3 as j}from"./df9u9imhvwerk6zv.js";import{A as w}from"./pcjkp37t4ugnklc3.js";import{u as O}from"./h7ui9r0100fo3zi2.js";import"./gy64pge8qevmvg7e.js";const H=s=>o.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11 4.9099C11 4.47485 10.4828 4.24734 10.1621 4.54132L6.67572 7.7372C6.49129 7.90626 6.25019 8.00005 6 8.00005H4C3.44772 8.00005 3 8.44776 3 9.00005V15C3 15.5523 3.44772 16 4 16H6C6.25019 16 6.49129 16.0938 6.67572 16.2629L10.1621 19.4588C10.4828 19.7527 11 19.5252 11 19.0902V4.9099ZM8.81069 3.06701C10.4142 1.59714 13 2.73463 13 4.9099V19.0902C13 21.2655 10.4142 22.403 8.81069 20.9331L5.61102 18H4C2.34315 18 1 16.6569 1 15V9.00005C1 7.34319 2.34315 6.00005 4 6.00005H5.61102L8.81069 3.06701ZM20.3166 6.35665C20.8019 6.09313 21.409 6.27296 21.6725 6.75833C22.5191 8.3176 22.9996 10.1042 22.9996 12.0001C22.9996 13.8507 22.5418 15.5974 21.7323 17.1302C21.4744 17.6185 20.8695 17.8054 20.3811 17.5475C19.8927 17.2896 19.7059 16.6846 19.9638 16.1962C20.6249 14.9444 20.9996 13.5175 20.9996 12.0001C20.9996 10.4458 20.6064 8.98627 19.9149 7.71262C19.6514 7.22726 19.8312 6.62017 20.3166 6.35665ZM15.7994 7.90049C16.241 7.5688 16.8679 7.65789 17.1995 8.09947C18.0156 9.18593 18.4996 10.5379 18.4996 12.0001C18.4996 13.3127 18.1094 14.5372 17.4385 15.5604C17.1357 16.0222 16.5158 16.1511 16.0539 15.8483C15.5921 15.5455 15.4632 14.9255 15.766 14.4637C16.2298 13.7564 16.4996 12.9113 16.4996 12.0001C16.4996 10.9859 16.1653 10.0526 15.6004 9.30063C15.2687 8.85905 15.3578 8.23218 15.7994 7.90049Z",fill:"currentColor"}));function U({audioAssetPointer:s,conversationId:t}){const a=S(),[n,l]=o.useState(!1),e=o.useRef(!0),[r,y]=o.useState(void 0),d=o.useRef(null),c=A(),p=R(i=>i.isPlaying&&i.sourceUrl===r),g=o.useCallback(()=>{const i=V();if(i)d.current?d.current.then(()=>{i.stop(),d.current=null}):i.stop();else return},[]);o.useEffect(()=>(e.current=!0,()=>{e.current=!1}),[]),o.useEffect(()=>()=>{k().isPlaying&&g()},[g]);const C=o.useCallback(async()=>{if(!c||!e.current)return;l(!0);const{url:i}=await w.fetch(a,{asset:s,conversationId:t});l(!1),y(i),c.changeSource(i),d.current=c.play()},[s,t,c,a]);return{togglePlayback:o.useCallback(()=>{if(c)p?g():(M.messagePlayback.click(),C());else return},[p,C,c,g]),isPlaying:p,isLoading:n}}const X=o.memo(function(t){const a=L("1923022511")?.value,n=x(t.conversationId),l=T(t.message);if(!a||!n||l)return null;const e=E.getAudioAssetPointers(t.message)[0];return e?u.jsx(Z,{audioAssetPointer:e,conversationId:n}):u.jsx(N,{...t,conversationId:n})});function Z({audioAssetPointer:s,conversationId:t}){const{isLoading:a,isPlaying:n,togglePlayback:l}=U({audioAssetPointer:s,conversationId:t}),e=()=>{m.logEventWithStatsig(P.chatgptTurnActionVoiceReplayClicked,"chatgpt_turn_action_voice_replay"),l()};return u.jsx(v,{onClick:e,isPlaying:n,isLoading:a,playText:f.replay,playIcon:_})}function N({conversationId:s,message:t}){const{isLoading:a,isPlaying:n,togglePlayback:l}=O({conversationId:s,messageId:t.id}),e=()=>{m.logEventWithStatsig(P.chatgptTurnActionVoiceReadAloudClicked,"chatgpt_turn_action_voice_read_aloud"),l()};return u.jsx(v,{onClick:e,isPlaying:n,isLoading:a,playText:f.play,playIcon:H})}function v({onClick:s,isPlaying:t,isLoading:a,playText:n,playIcon:l}){let e,r;const y=b();return a?(e=B,r=f.loading):t?(e=I,r=f.stop):(e=l,r=n),u.jsx(j,{icon:e,label:r?y.formatMessage(r):void 0,disabled:a,onClick:s,style:t||a?{visibility:"visible"}:void 0,testId:"voice-play-turn-action-button"})}const f=h({replay:{id:"VoiceReadOutLoudButton.replay",defaultMessage:"Replay"},play:{id:"VoiceReadOutLoudButton.play",defaultMessage:"Read aloud"},stop:{id:"VoiceReadOutLoudButton.stop",defaultMessage:"Stop"},loading:{id:"VoiceReadOutLoudButton.loading",defaultMessage:"Loading"}});export{v as PlayButton,Z as VoiceMessagePlaybackButton,X as VoicePlayButton,N as VoiceReadAloudButton};
//# sourceMappingURL=exogbkqhbs3sd47e.js.map
