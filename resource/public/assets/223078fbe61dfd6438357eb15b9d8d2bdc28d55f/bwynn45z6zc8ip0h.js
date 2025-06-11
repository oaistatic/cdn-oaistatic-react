import{j as e,i as E,r as u,e as Z,M as a,l as G}from"./b8ijctzpgh0s7wpx.js";import{gR as c,ab as $,B as I,aq as ee,ar as te,c7 as _,ca as ae,c as se}from"./citrwydz0bgriwlc.js";import{A as re}from"./gwv677ulwq7fl4zg.js";import{l8 as w,f8 as J,lB as b,lb as N,la as L,d as oe,dr as ie,bY as ne,l9 as le,lC as ce,cX as de,bJ as ue}from"./krbmwir12ubt4od1.js";import{Y as B}from"./mzkxlhrlmxhntkvn.js";import{R as O}from"./l3rtpckh3mar95pc.js";import{G as me,a as pe}from"./d6kj34tvva4p9z7f.js";import"./l2tp0nqi0x7r5660.js";import"./dcml6fn13vfm1zv2.js";import"./cfe0bfy5asp94vp2.js";import"./ku4zsoy6w4wkp690.js";import"./k1h56nx2kjoqc52m.js";import"./exvo283q5zxd2q6r.js";import"./jekpe1ukp5thtucq.js";import"./bzpm2hv3f3hhm416.js";import"./nvghija6qp2cunds.js";import"./djd85tifm57yisqi.js";import"./b4v20hsjdnh8a64d.js";import"./h3krx8dg2s8o2yh5.js";import"./jkznwfhp8ahnvlot.js";import"./megablgldkh4lap1.js";import"./hbpbckirom363mgh.js";import"./izdon3syh095bs23.js";import"./dweroubxngal4vlb.js";import"./i7jya7stlyvnzya0.js";import"./cb2t82g498wwhuc2.js";import"./ndwtlsjk3xm27wkq.js";import"./o0ebhsapkoy5qkg1.js";import"./k7nub2yuxq70se07.js";import"./k6ccgr4wxcppeg93.js";import"./dbalwdodzoo02ru2.js";import"./c2d9eukr2hh7n3q0.js";import"./oyzab3j7hun2568h.js";import"./dera5bljhpg5ja89.js";import"./hs2fsda156wfk7fz.js";import"./pfex3j43xcablmav.js";import"./pc9qsszhmtx9pu7o.js";import"./m4qet7ipn6ha09it.js";import"./h3axfhhn58bmthc9.js";import"./eg629yaevviy8e7x.js";import"./be0n9593bbjhdouz.js";import"./gbxx25eoj7wtyna0.js";import"./bzsolvz1ulyrc61b.js";import"./pc2givv05uuq8g6l.js";import"./nhujhl3wh6ze4xx0.js";import"./dm5mep2m6tn7mvrw.js";import"./c23qlyb7rng4ydyc.js";import"./f1me09ge0a4pvkug.js";import"./mw39pbo6szk09iqp.js";import"./ga473l12pn4idd7t.js";import"./otl51en3t0ec5n7s.js";import"./eigi8l95ddhoqirr.js";import"./etmxhiuvgu79utu0.js";import"./ct6yhczwft8t5t9k.js";function he({content:r,button:d,onClick:i}){return e.jsxs("div",{className:"border-token-border-medium flex rounded-lg border text-sm hover:cursor-pointer",onClick:i,children:[e.jsx("div",{className:"h-9 grow px-3 py-2",children:r}),e.jsx("div",{className:"bg-token-border-medium w-px"}),d]})}function xe({onSelectExample:r}){const d=E(),i=u.useRef(null);return e.jsxs("select",{onChange:l=>{if(l.target.value==="label")return;const t=parseInt(l.target.value);r(q[t].spec),i.current.value="label"},className:"border-token-border-medium h-8 rounded-lg border bg-transparent px-2 py-0 text-sm",ref:i,children:[e.jsx("option",{value:"label",className:"bg-token-main-surface-primary text-token-text-primary",children:d.formatMessage(S.examples)}),q.map((l,t)=>e.jsx("option",{value:t,className:"bg-token-main-surface-primary text-token-text-primary",children:d.formatMessage(l.displayName)},t))]})}const fe={openapi:"3.1.0",info:{title:"Get weather data",description:"Retrieves current weather data for a location.",version:"v1.0.0"},servers:[{url:"https://weather.example.com"}],paths:{"/location":{get:{description:"Get temperature for a specific location",operationId:"GetCurrentWeather",parameters:[{name:"location",in:"query",description:"The city and state to retrieve the weather for",required:!0,schema:{type:"string"}}],deprecated:!1}}},components:{schemas:{}}},ge=`openapi: 3.1.0
info:
  title: Swagger Petstore
  description: This example uses the Swagger Petstore API.
  license:
    name: Apache 2.0
    url: http://www.apache.org/licenses/LICENSE-2.0.html
  version: 1.0.7
servers:
  - url: https://petstore.swagger.io/v2
paths:
  /store/inventory:
    get:
      tags:
        - store
      summary: Returns pet inventories by status
      operationId: getInventory
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                type: object
                additionalProperties:
                  type: integer
                  format: int32
                properties:
                  available:
                    type: integer
                    format: int32
                  pending:
                    type: integer
                    format: int32
                  sold:
                    type: integer
                    format: int32
  /pet/findByStatus:
    get:
      tags:
        - pet
      summary: Finds Pets by status
      operationId: findPetsByStatusPending
      parameters:
        - name: status
          in: query
          required: true
          schema:
            type: string
            enum:
              - pending
            default: pending
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: "#/components/schemas/Pet"
  /pet/{petId}:
    get:
      tags:
        - pet
      summary: Find pet by ID
      operationId: getPetById
      parameters:
        - name: petId
          in: path
          required: true
          schema:
            type: integer
            format: int64
            default: 1
      responses:
        "200":
          description: successful operation
          content:
            application/json:
              schema:
                $ref: "#/components/schemas/Pet"
components:
  schemas:
    Pet:
      type: object
      required:
        - name
        - photoUrls
      properties:
        id:
          type: integer
          format: int64
        category:
          $ref: "#/components/schemas/Category"
        name:
          type: string
          example: doggie
        photoUrls:
          type: array
          items:
            type: string
        tags:
          type: array
          items:
            $ref: "#/components/schemas/Tag"
        status:
          type: string
          enum:
            - pending
            - available
            - sold
    Category:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string
    Tag:
      type: object
      properties:
        id:
          type: integer
          format: int64
        name:
          type: string`,ye={openapi:"3.1.0",info:{title:"Untitled",description:"Your OpenAPI specification",version:"v1.0.0"},servers:[{url:""}],paths:{},components:{schemas:{}}},S=Z({examples:{id:"gizmo.actions.examples",defaultMessage:"Examples"},weatherExampleTitle:{id:"gizmo.actions.weatherExampleTitle",defaultMessage:"Weather (JSON)"},petStoreExampleTitle:{id:"gizmo.actions.petStoreExampleTitle",defaultMessage:"Pet Store (YAML)"},blankExampleTitle:{id:"gizmo.actions.blankExampleTitle",defaultMessage:"Blank Template"}}),q=[{displayName:S.weatherExampleTitle,spec:JSON.stringify(fe,null,2)},{displayName:S.petStoreExampleTitle,spec:ge},{displayName:S.blankExampleTitle,spec:JSON.stringify(ye,null,2)}];function je({onImport:r,onClose:d}){const[i,l]=u.useState(""),[t,m]=u.useState(!1);async function p(){let g;try{g=new URL(i)}catch{return}if(g?.hostname){m(!0);try{const o=await J.fetchOpenAPISpec(i);r(o.content),d()}finally{m(!1)}}}return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{name:"url",value:i,onChange:g=>{l(g.target.value)},placeholder:"https://...",className:"border-token-border-default h-8 rounded-sm border px-2 text-sm",autoFocus:!0,dir:"ltr"}),e.jsx(w,{color:"primary",size:"small",loading:t,onClick:p,children:e.jsx(a,{id:"7sLuEB",defaultMessage:"Import"})}),e.jsx(w,{color:"secondary",size:"small",onClick:d,children:e.jsx(a,{id:"xHBR5t",defaultMessage:"Cancel"})})]})}function y({children:r}){return e.jsx("label",{className:"mb-1 block text-sm font-semibold",children:r})}function ve({jitPluginTool:r,onUpdateTool:d,onClose:i}){const l=E(),[t,m]=u.useState({apiKeyValue:"",oauthClientIdValue:"",oauthClientSecretValue:"",oauthAuthUrlValue:r?.metadata?.auth?.client_url??"",oauthTokenUrlValue:r?.metadata?.auth?.authorization_url??"",oauthScopeValue:r?.metadata?.auth?.scope??"",authTypeValue:r?.metadata?.auth?.type??c.None,httpAuthTypeValue:r?.metadata?.auth?.authorization_type??"basic",customHeaderValue:r?.metadata?.auth?.custom_auth_header??"",tokenExchangeMethodValue:r?.metadata?.auth?.token_exchange_method??"default_post"});function p(o){m(A=>({...A,...o}))}function g(){d(t.authTypeValue===c.None?{type:c.None}:t.authTypeValue===c.OAuth?{type:c.OAuth,client_url:t.oauthAuthUrlValue,authorization_url:t.oauthTokenUrlValue,authorization_content_type:"application/x-www-form-urlencoded",scope:t.oauthScopeValue,token_exchange_method:t.tokenExchangeMethodValue,oauth_client_id:t.oauthClientIdValue,oauth_client_secret:t.oauthClientSecretValue}:{type:c.ServiceHTTP,authorization_type:t.httpAuthTypeValue,custom_auth_header:t.customHeaderValue,api_key:t.apiKeyValue}),i()}return e.jsxs($,{testId:"modal-tool-auth-editor",type:"success",isOpen:!0,title:l.formatMessage({id:"kZ040s",defaultMessage:"Authentication"}),primaryButton:e.jsx(I,{color:"primary",onClick:()=>{g()},children:e.jsx(a,{id:"dchvRM",defaultMessage:"Save"})}),secondaryButton:e.jsx(I,{color:"secondary",onClick:i,children:e.jsx(a,{id:"xHBR5t",defaultMessage:"Cancel"})}),onClose:i,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(a,{id:"la7zPT",defaultMessage:"Authentication Type"}),e.jsxs(O.Root,{onValueChange:o=>{p({authTypeValue:o})},value:t.authTypeValue,className:"mt-2 flex gap-4",children:[e.jsx(b,{label:l.formatMessage({id:"Ml5rNZ",defaultMessage:"None"}),value:c.None}),e.jsx(b,{label:l.formatMessage({id:"rN0uCi",defaultMessage:"API Key"}),value:c.ServiceHTTP}),e.jsx(b,{label:l.formatMessage({id:"qG7Z4O",defaultMessage:"OAuth"}),value:c.OAuth})]})]}),t.authTypeValue==="service_http"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(a,{id:"hSd+5k",defaultMessage:"API Key"})}),e.jsx(N,{placeholder:l.formatMessage({id:"9W9lGr",defaultMessage:"[HIDDEN]"}),type:"password",value:t.apiKeyValue,onChange:o=>{p({apiKeyValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"PSnRGf",defaultMessage:"Auth Type"})}),e.jsxs(O.Root,{className:"mb-2 flex gap-6 overflow-hidden rounded-lg",value:t.httpAuthTypeValue,required:!0,onValueChange:o=>{p({httpAuthTypeValue:o})},children:[e.jsx(b,{value:"basic",label:"Basic"}),e.jsx(b,{value:"bearer",label:"Bearer"}),e.jsx(b,{value:"custom",label:l.formatMessage({id:"6kqx38",defaultMessage:"Custom"})})]}),t.httpAuthTypeValue==="custom"&&e.jsxs("div",{className:"mt-2",children:[e.jsx(y,{children:e.jsx(a,{id:"XqdT/P",defaultMessage:"Custom Header Name"})}),e.jsx(N,{value:t.customHeaderValue,onChange:o=>{p({customHeaderValue:o.target.value})},className:"mb-2",placeholder:"X-Api-Key",dir:"ltr"})]})]}):t.authTypeValue==="oauth"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(a,{id:"lS4nvz",defaultMessage:"Client ID"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientIdValue,onChange:o=>{p({oauthClientIdValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"OvwGR3",defaultMessage:"Client Secret"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientSecretValue,onChange:o=>{p({oauthClientSecretValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"I27qZU",defaultMessage:"Authorization URL"})}),e.jsx(N,{value:t.oauthAuthUrlValue,onChange:o=>{p({oauthAuthUrlValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"QywIpF",defaultMessage:"Token URL"})}),e.jsx(N,{value:t.oauthTokenUrlValue,onChange:o=>{p({oauthTokenUrlValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"1VAJqN",defaultMessage:"Scope"})}),e.jsx(N,{value:t.oauthScopeValue,onChange:o=>{p({oauthScopeValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"9MvwPc",defaultMessage:"Token Exchange Method"})}),e.jsxs(O.Root,{value:t.tokenExchangeMethodValue,required:!0,onValueChange:o=>{p({tokenExchangeMethodValue:o})},children:[e.jsx(b,{value:"default_post",label:l.formatMessage({id:"vXIzoE",defaultMessage:"Default (POST request)"})}),e.jsx(b,{value:"basic_auth_header",label:l.formatMessage({id:"38o+yX",defaultMessage:"Basic authorization header"})})]}),e.jsx(a,{id:"x19klG",defaultMessage:"Warning: OAuth may fail if you don't allow our redirect URLs. Visit <link>this documentation</link> to learn more.",values:{link:o=>e.jsx("a",{href:"https://platform.openai.com/docs/actions/authentication",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline",children:o})}})]}):null]})}function be({rootDomain:r,operations:d}){return d==null||d.length===0?e.jsx("div",{className:"text-token-text-tertiary text-sm",children:e.jsx(a,{id:"L69u6d",defaultMessage:"Operations in your schema will show here"})}):e.jsx("table",{className:"w-full text-sm",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-token-border-default text-token-text-tertiary border-b text-start text-xs",children:[e.jsx("th",{className:"py-1 font-normal",children:e.jsx(a,{id:"JizDcr",defaultMessage:"Name"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(a,{id:"zN16fd",defaultMessage:"Method"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(a,{id:"y2WJvt",defaultMessage:"Path"})}),e.jsx("th",{className:"py-1 font-normal"})]}),d.map(i=>e.jsxs("tr",{className:"border-token-border-default border-b",children:[e.jsx("td",{className:"py-2",children:i.operationName}),e.jsx("td",{className:"py-2 uppercase",children:i.method}),e.jsx("td",{className:"py-2",dir:"ltr",style:{textAlign:"match-parent"},children:i.path}),e.jsx("td",{className:"py-2",children:e.jsx(w,{color:"secondary",onClick:()=>{r&&me.publish({kind:pe.TestGizmoAction,rootDomain:r,operationName:i.operationName})},children:e.jsx(a,{id:"Ag71GQ",defaultMessage:"Test"})})})]},i.operationName))]})})}function Ne({validationResponse:r}){const d=E();return e.jsxs("div",{children:[e.jsx(L,{label:d.formatMessage({id:"hKfo5R",defaultMessage:"Available actions"})}),e.jsx(be,{rootDomain:r.success?r.spec.root_domain:void 0,operations:r.success?r.spec.operations:void 0})]})}const Me=window.location.origin+"/g/g-TYEliDU6A-actionsgpt";function ke(r){switch(r){case c.None:return G({id:"G9qfIC",defaultMessage:"None"});case c.OAuth:return G({id:"t8MwwT",defaultMessage:"OAuth"});case c.ServiceHTTP:return G({id:"rN0uCi",defaultMessage:"API Key"})}}function _t({currentlyEditingActionDomain:r,gizmoEditorData:d,updateGizmo:i,onClose:l}){const t=E(),[m,p]=u.useState(r),g=u.useRef(m),o=ee(),{data:A}=te(o?.getWorkspaceId());u.useEffect(()=>{g.current=m},[m]);const x=d?.tools?.find(s=>s.type===_.JIT_PLUGIN&&s.metadata.domain===m),[H]=u.useState(()=>x==null),M=x?.metadata?.raw_spec??"",[W,R]=u.useState(!1),[F,z]=u.useState(!1),[C,K]=u.useState(!1),f=u.useCallback(s=>{i(h=>({...h,tools:x?h.tools.map(n=>n.type===_.JIT_PLUGIN&&n.metadata.domain===m?{...n,metadata:{...n.metadata,...s,json_schema:void 0}}:n):[...h.tools,{type:_.JIT_PLUGIN,metadata:{raw_spec:"",domain:m??"Unknown domain",action_id:"",...s,json_schema:void 0}}]}))},[m,x,i]),[k,P]=u.useState(),X=d,[V]=u.useState(()=>oe(async function(h){const n=await J.validateOpenAPISpec(h);P(n);const j=n.success?n.spec.root_domain:void 0;if(j){if(j!==g.current&&X?.tools?.find(v=>v.type===_.JIT_PLUGIN&&v.metadata.domain===j)){P({success:!1,errors:[t.formatMessage({id:"nwBcmJ",defaultMessage:"Action sets cannot have duplicate domains - {domain} already exists on another action"},{domain:j})]});return}i(T=>({...T,tools:T.tools.map(v=>v.type===_.JIT_PLUGIN&&v.metadata.domain===g.current?{...v,metadata:{...v.metadata,domain:j}}:v)})),p(j)}if(n.success&&n.known_auth&&n.known_privacy_policy&&x){const T={type:c.OAuth,...n.known_auth};ae(x.metadata.auth,T)||f({auth:{type:c.OAuth,...n.known_auth}}),x.metadata.privacy_policy_url!==n.known_privacy_policy&&f({privacy_policy_url:n.known_privacy_policy})}},1e3)),U=k!=null?k.success?k.warnings:k.errors:void 0;u.useEffect(()=>{M===""?(P(void 0),V.cancel()):V(M)},[V,M]);const D=s=>{try{f({raw_spec:JSON.stringify(JSON.parse(s),null,2)})}catch{try{f({raw_spec:B.stringify(B.parse(s),{lineWidth:120,indent:2})})}catch{}}},Y=u.useCallback(s=>{switch(s.type){case c.None:{f({auth:{type:c.None}});break}case c.OAuth:{const{oauth_client_id:h,oauth_client_secret:n,...j}=s;f({auth:j,oauth_client_id:h,oauth_client_secret:n});break}case c.ServiceHTTP:{const{api_key:h,...n}=s;f({auth:n,api_key:h});break}}},[f]),Q=u.useCallback(()=>{window.confirm("Are you sure you want to delete this action?")&&(i(s=>({...s,tools:s.tools.filter(h=>!(h.type===_.JIT_PLUGIN&&h.metadata.domain===m))})),l())},[m,l,i]);return e.jsxs("div",{className:"h-full overflow-auto px-4 pb-12 text-sm",children:[e.jsxs("div",{className:"relative flex flex-col items-center px-16 py-6 text-center",children:[e.jsx("div",{className:"absolute start-0 top-6",children:e.jsx(I,{color:"secondary",onClick:l,icon:ie})}),x!=null&&e.jsx("div",{className:"absolute end-0 top-6",children:e.jsx(I,{color:"secondary",onClick:Q,className:"text-red-500",children:e.jsx(ne,{className:"icon-md"})})}),e.jsx("div",{className:"text-xl font-semibold",children:H?e.jsx(a,{id:"LEn2vt",defaultMessage:"Add actions"}):e.jsx(a,{id:"WtVYgh",defaultMessage:"Edit actions"})}),e.jsx("div",{className:"text-token-text-tertiary text-sm",children:e.jsx(a,{id:"f0WG0Q",defaultMessage:"Let your GPT retrieve information or take actions outside of ChatGPT."})}),e.jsx("div",{className:"text-token-text-tertiary text-sm",children:e.jsx("a",{href:"https://help.openai.com/en/articles/8554397-creating-a-gpt",target:"_blank",rel:"noreferrer",className:"font-semibold",children:e.jsx(a,{id:"44M7/B",defaultMessage:"Learn more."})})})]}),e.jsxs(le,{className:"relative",children:[e.jsx(L,{label:t.formatMessage({id:"kZ040s",defaultMessage:"Authentication"})}),e.jsx(he,{onClick:()=>{R(!0)},content:t.formatMessage(ke(x?.metadata?.auth?.type??c.None)),button:e.jsx("button",{color:"secondary",className:"flex items-center gap-2 px-3",children:e.jsx(ce,{className:"icon-sm"})})}),W&&e.jsx(ve,{jitPluginTool:x,onUpdateTool:Y,onClose:()=>R(!1)})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex h-8 items-center justify-between",children:[e.jsx("label",{className:"text-token-text-primary font-semibold",children:e.jsx(a,{id:"+xKwQg",defaultMessage:"Schema"})}),e.jsx("div",{className:"flex items-center",children:F?e.jsx(je,{onImport:s=>D(s),onClose:()=>z(!1)}):e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(w,{color:"secondary",size:"small",onClick:()=>z(!0),children:e.jsx(a,{id:"kTR+Ef",defaultMessage:"Import from URL"})}),e.jsx(xe,{onSelectExample:s=>{f({raw_spec:s})}})]})})]}),e.jsxs("div",{className:"border-token-border-default mb-8 overflow-hidden rounded-lg border",children:[e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{value:M,onChange:s=>{f({raw_spec:s.target.value})},spellCheck:!1,placeholder:t.formatMessage({id:"zBM3o0",defaultMessage:"Enter your OpenAPI schema here"}),className:"text-token-text-primary block h-96 w-full border-none bg-transparent p-2 font-mono text-xs",dir:"ltr"}),e.jsx("div",{className:"absolute end-2 bottom-2 flex gap-2",children:M!==""?e.jsx(w,{onClick:()=>{D(M)},children:e.jsx(a,{id:"vJWnIM",defaultMessage:"Format"})}):e.jsxs(w,{as:"a",to:Me,openNewTab:!0,size:"small",children:[e.jsx(a,{id:"gizmo.actions.actionsGptHelp",defaultMessage:"Get help from ActionsGPT"}),e.jsx(de,{className:"icon-md"})]})})]}),U!=null&&U?.length>0&&e.jsx("div",{className:"border-token-border-default border-t p-2 text-red-500",children:U.map((s,h)=>e.jsx("div",{children:s},h))})]})]}),k!=null&&e.jsx(Ne,{validationResponse:k}),A?.allowed_custom_actions_domains!=null&&(A?.allowed_custom_actions_domains?.length>0?e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"mb-1 cursor-pointer font-semibold",onClick:()=>K(!C),children:[e.jsx(a,{id:"Gcxir6",defaultMessage:"Domains allowed by your workspace"}),e.jsx(re,{className:"inline",checked:C})]}),e.jsx("ul",{className:se("list-disc ps-4",!C&&"hidden"),children:A?.allowed_custom_actions_domains.map(s=>e.jsx("li",{children:s},s))})]}):e.jsx("p",{className:"text-sm italic",children:e.jsx(a,{id:"wWCl0j",defaultMessage:"No domains are allowed by your workspace's settings."})})),e.jsxs("div",{className:"mt-4",children:[e.jsx(L,{htmlFor:"privacyPolicyUrl",label:t.formatMessage({id:"Pbk0Gp",defaultMessage:"Privacy policy"}),description:"Privacy policy is required for all public GPTs."}),e.jsx(ue,{ariaLabel:!1,name:"privacyPolicyUrl",value:x?.metadata?.privacy_policy_url??"",placeholder:"https://app.example.com/privacy",onChange:s=>{f({privacy_policy_url:s.target.value})}})]})]})}export{_t as GizmoActionsEditor};
//# sourceMappingURL=bwynn45z6zc8ip0h.js.map
