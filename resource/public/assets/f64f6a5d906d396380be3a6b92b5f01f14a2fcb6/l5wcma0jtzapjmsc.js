import{j as e,b as I,r as u,e as $,M as a,n as L}from"./gg0tb34p9fzo1omt.js";import{fa as H,ns as c,be as ee,bg as S,d as te,G as ae,jq as se,dy as _,fj as re,dW as oe,bU as ne,jl as ie}from"./g670b8vtkhx0yc6d.js";import{A as le}from"./fm40irtbnn4s9a6h.js";import{hT as w,j0 as O,j1 as b,hX as N,hW as R,d as ce,dX as de,N as ue,hV as me,d2 as pe}from"./forbprkns1cohsbl.js";import{Y as B}from"./mzkxlhrlmxhntkvn.js";import{G as he,a as xe}from"./l0megibcinj0wzxk.js";import"./kthx8p8v40tfg708.js";import"./m1ohh9p1gptum5w5.js";import"./cs320738df36xnc1.js";import"./f51c6zie1stj9anw.js";import"./jpdmr6hprcjyd5ie.js";import"./me58wahxzwibdrxp.js";import"./pnx8yl9r7yj5moem.js";import"./felxwdrg3fgsr1mu.js";import"./l4lldnfjv1apahqp.js";import"./kapf1vasjh1lo9ik.js";import"./k5ngqk6bkqja3f09.js";import"./fz8lyjvdpywhlf94.js";import"./ovfgk5oky70gv1q0.js";import"./isn1igquqvc1qe44.js";import"./jp0d5synnc6qwyap.js";import"./fzx0pfnkyz7dzd8w.js";import"./dwweugcujrtabsgm.js";import"./8b6w2kx5me0iugen.js";import"./dkpt9rl3nmxrd3k2.js";function fe({content:r,button:d,onClick:n}){return e.jsxs("div",{className:"border-token-border-medium flex rounded-lg border text-sm hover:cursor-pointer",onClick:n,children:[e.jsx("div",{className:"h-9 grow px-3 py-2",children:r}),e.jsx("div",{className:"bg-token-border-medium w-px"}),d]})}function ge({onSelectExample:r}){const d=I(),n=u.useRef(null);return e.jsxs("select",{onChange:l=>{if(l.target.value==="label")return;const t=parseInt(l.target.value);r(W[t].spec),n.current.value="label"},className:"border-token-border-medium h-8 rounded-lg border bg-transparent px-2 py-0 text-sm",ref:n,children:[e.jsx("option",{value:"label",className:"bg-token-main-surface-primary text-token-text-primary",children:d.formatMessage(T.examples)}),W.map((l,t)=>e.jsx("option",{value:t,className:"bg-token-main-surface-primary text-token-text-primary",children:d.formatMessage(l.displayName)},t))]})}const ye={openapi:"3.1.0",info:{title:"Get weather data",description:"Retrieves current weather data for a location.",version:"v1.0.0"},servers:[{url:"https://weather.example.com"}],paths:{"/location":{get:{description:"Get temperature for a specific location",operationId:"GetCurrentWeather",parameters:[{name:"location",in:"query",description:"The city and state to retrieve the weather for",required:!0,schema:{type:"string"}}],deprecated:!1}}},components:{schemas:{}}},je=`openapi: 3.1.0
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
          type: string`,ve={openapi:"3.1.0",info:{title:"Untitled",description:"Your OpenAPI specification",version:"v1.0.0"},servers:[{url:""}],paths:{},components:{schemas:{}}},T=$({examples:{id:"gizmo.actions.examples",defaultMessage:"Examples"},weatherExampleTitle:{id:"gizmo.actions.weatherExampleTitle",defaultMessage:"Weather (JSON)"},petStoreExampleTitle:{id:"gizmo.actions.petStoreExampleTitle",defaultMessage:"Pet Store (YAML)"},blankExampleTitle:{id:"gizmo.actions.blankExampleTitle",defaultMessage:"Blank Template"}}),W=[{displayName:T.weatherExampleTitle,spec:JSON.stringify(ye,null,2)},{displayName:T.petStoreExampleTitle,spec:je},{displayName:T.blankExampleTitle,spec:JSON.stringify(ve,null,2)}];function be({onImport:r,onClose:d}){const[n,l]=u.useState(""),[t,m]=u.useState(!1);async function p(){let g;try{g=new URL(n)}catch{return}if(g?.hostname){m(!0);try{const o=await H.fetchOpenAPISpec(n);r(o.content),d()}finally{m(!1)}}}return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("input",{name:"url",value:n,onChange:g=>{l(g.target.value)},placeholder:"https://...",className:"border-token-border-default h-8 rounded-sm border px-2 text-sm",autoFocus:!0,dir:"ltr"}),e.jsx(w,{color:"primary",size:"small",loading:t,onClick:p,children:e.jsx(a,{id:"7sLuEB",defaultMessage:"Import"})}),e.jsx(w,{color:"secondary",size:"small",onClick:d,children:e.jsx(a,{id:"xHBR5t",defaultMessage:"Cancel"})})]})}function y({children:r}){return e.jsx("label",{className:"mb-1 block text-sm font-semibold",children:r})}function Ne({jitPluginTool:r,onUpdateTool:d,onClose:n}){const l=I(),[t,m]=u.useState({apiKeyValue:"",oauthClientIdValue:"",oauthClientSecretValue:"",oauthAuthUrlValue:r?.metadata?.auth?.client_url??"",oauthTokenUrlValue:r?.metadata?.auth?.authorization_url??"",oauthScopeValue:r?.metadata?.auth?.scope??"",authTypeValue:r?.metadata?.auth?.type??c.None,httpAuthTypeValue:r?.metadata?.auth?.authorization_type??"basic",customHeaderValue:r?.metadata?.auth?.custom_auth_header??"",tokenExchangeMethodValue:r?.metadata?.auth?.token_exchange_method??"default_post"});function p(o){m(E=>({...E,...o}))}function g(){d(t.authTypeValue===c.None?{type:c.None}:t.authTypeValue===c.OAuth?{type:c.OAuth,client_url:t.oauthAuthUrlValue,authorization_url:t.oauthTokenUrlValue,authorization_content_type:"application/x-www-form-urlencoded",scope:t.oauthScopeValue,token_exchange_method:t.tokenExchangeMethodValue,oauth_client_id:t.oauthClientIdValue,oauth_client_secret:t.oauthClientSecretValue}:{type:c.ServiceHTTP,authorization_type:t.httpAuthTypeValue,custom_auth_header:t.customHeaderValue,api_key:t.apiKeyValue}),n()}return e.jsxs(ee,{testId:"modal-tool-auth-editor",type:"success",isOpen:!0,title:l.formatMessage({id:"kZ040s",defaultMessage:"Authentication"}),primaryButton:e.jsx(S,{color:"primary",onClick:()=>{g()},children:e.jsx(a,{id:"dchvRM",defaultMessage:"Save"})}),secondaryButton:e.jsx(S,{color:"secondary",onClick:n,children:e.jsx(a,{id:"xHBR5t",defaultMessage:"Cancel"})}),onClose:n,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(a,{id:"la7zPT",defaultMessage:"Authentication Type"}),e.jsxs(O.Root,{onValueChange:o=>{p({authTypeValue:o})},value:t.authTypeValue,className:"mt-2 flex gap-4",children:[e.jsx(b,{label:l.formatMessage({id:"Ml5rNZ",defaultMessage:"None"}),value:c.None}),e.jsx(b,{label:l.formatMessage({id:"rN0uCi",defaultMessage:"API Key"}),value:c.ServiceHTTP}),e.jsx(b,{label:l.formatMessage({id:"qG7Z4O",defaultMessage:"OAuth"}),value:c.OAuth})]})]}),t.authTypeValue==="service_http"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(a,{id:"hSd+5k",defaultMessage:"API Key"})}),e.jsx(N,{placeholder:l.formatMessage({id:"9W9lGr",defaultMessage:"[HIDDEN]"}),type:"password",value:t.apiKeyValue,onChange:o=>{p({apiKeyValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"PSnRGf",defaultMessage:"Auth Type"})}),e.jsxs(O.Root,{className:"mb-2 flex gap-6 overflow-hidden rounded-lg",value:t.httpAuthTypeValue,required:!0,onValueChange:o=>{p({httpAuthTypeValue:o})},children:[e.jsx(b,{value:"basic",label:"Basic"}),e.jsx(b,{value:"bearer",label:"Bearer"}),e.jsx(b,{value:"custom",label:l.formatMessage({id:"6kqx38",defaultMessage:"Custom"})})]}),t.httpAuthTypeValue==="custom"&&e.jsxs("div",{className:"mt-2",children:[e.jsx(y,{children:e.jsx(a,{id:"XqdT/P",defaultMessage:"Custom Header Name"})}),e.jsx(N,{value:t.customHeaderValue,onChange:o=>{p({customHeaderValue:o.target.value})},className:"mb-2",placeholder:"X-Api-Key",dir:"ltr"})]})]}):t.authTypeValue==="oauth"?e.jsxs(e.Fragment,{children:[e.jsx(y,{children:e.jsx(a,{id:"lS4nvz",defaultMessage:"Client ID"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientIdValue,onChange:o=>{p({oauthClientIdValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"OvwGR3",defaultMessage:"Client Secret"})}),e.jsx(N,{placeholder:"<HIDDEN>",type:"password",value:t.oauthClientSecretValue,onChange:o=>{p({oauthClientSecretValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"I27qZU",defaultMessage:"Authorization URL"})}),e.jsx(N,{value:t.oauthAuthUrlValue,onChange:o=>{p({oauthAuthUrlValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"QywIpF",defaultMessage:"Token URL"})}),e.jsx(N,{value:t.oauthTokenUrlValue,onChange:o=>{p({oauthTokenUrlValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"1VAJqN",defaultMessage:"Scope"})}),e.jsx(N,{value:t.oauthScopeValue,onChange:o=>{p({oauthScopeValue:o.target.value})},className:"mb-2",dir:"ltr"}),e.jsx(y,{children:e.jsx(a,{id:"9MvwPc",defaultMessage:"Token Exchange Method"})}),e.jsxs(O.Root,{value:t.tokenExchangeMethodValue,required:!0,onValueChange:o=>{p({tokenExchangeMethodValue:o})},children:[e.jsx(b,{value:"default_post",label:l.formatMessage({id:"vXIzoE",defaultMessage:"Default (POST request)"})}),e.jsx(b,{value:"basic_auth_header",label:l.formatMessage({id:"38o+yX",defaultMessage:"Basic authorization header"})})]}),e.jsx(a,{id:"x19klG",defaultMessage:"Warning: OAuth may fail if you don't allow our redirect URLs. Visit <link>this documentation</link> to learn more.",values:{link:o=>e.jsx("a",{href:"https://platform.openai.com/docs/actions/authentication",target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 underline",children:o})}})]}):null]})}function Me({rootDomain:r,operations:d}){return d==null||d.length===0?e.jsx("div",{className:"text-token-text-tertiary text-sm",children:e.jsx(a,{id:"L69u6d",defaultMessage:"Operations in your schema will show here"})}):e.jsx("table",{className:"w-full text-sm",children:e.jsxs("tbody",{children:[e.jsxs("tr",{className:"border-token-border-default text-token-text-tertiary border-b text-start text-xs",children:[e.jsx("th",{className:"py-1 font-normal",children:e.jsx(a,{id:"JizDcr",defaultMessage:"Name"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(a,{id:"zN16fd",defaultMessage:"Method"})}),e.jsx("th",{className:"py-1 font-normal",children:e.jsx(a,{id:"y2WJvt",defaultMessage:"Path"})}),e.jsx("th",{className:"py-1 font-normal"})]}),d.map(n=>e.jsxs("tr",{className:"border-token-border-default border-b",children:[e.jsx("td",{className:"py-2",children:n.operationName}),e.jsx("td",{className:"py-2 uppercase",children:n.method}),e.jsx("td",{className:"py-2",dir:"ltr",style:{textAlign:"match-parent"},children:n.path}),e.jsx("td",{className:"py-2",children:e.jsx(w,{color:"secondary",onClick:()=>{r&&he.publish({kind:xe.TestGizmoAction,rootDomain:r,operationName:n.operationName})},children:e.jsx(a,{id:"Ag71GQ",defaultMessage:"Test"})})})]},n.operationName))]})})}function ke({validationResponse:r}){const d=I();return e.jsxs("div",{children:[e.jsx(R,{label:d.formatMessage({id:"hKfo5R",defaultMessage:"Available actions"})}),e.jsx(Me,{rootDomain:r.success?r.spec.root_domain:void 0,operations:r.success?r.spec.operations:void 0})]})}const _e=window.location.origin+"/g/g-TYEliDU6A-actionsgpt";function we(r){switch(r){case c.None:return L({id:"G9qfIC",defaultMessage:"None"});case c.OAuth:return L({id:"t8MwwT",defaultMessage:"OAuth"});case c.ServiceHTTP:return L({id:"rN0uCi",defaultMessage:"API Key"})}}function Ze({currentlyEditingActionDomain:r,gizmoEditorData:d,updateGizmo:n,onClose:l}){const t=I(),[m,p]=u.useState(r),g=u.useRef(m),o=te(),E=ae(o),{data:C}=se(E?.getWorkspaceId());u.useEffect(()=>{g.current=m},[m]);const x=d?.tools?.find(s=>s.type===_.JIT_PLUGIN&&s.metadata.domain===m),[J]=u.useState(()=>x==null),M=x?.metadata?.raw_spec??"",[F,z]=u.useState(!1),[K,D]=u.useState(!1),[P,X]=u.useState(!1),f=u.useCallback(s=>{n(h=>({...h,tools:x?h.tools.map(i=>i.type===_.JIT_PLUGIN&&i.metadata.domain===m?{...i,metadata:{...i.metadata,...s,json_schema:void 0}}:i):[...h.tools,{type:_.JIT_PLUGIN,metadata:{raw_spec:"",domain:m??"Unknown domain",action_id:"",...s,json_schema:void 0}}]}))},[m,x,n]),[k,V]=u.useState(),Y=d,[U]=u.useState(()=>ce(async function(h){const i=await H.validateOpenAPISpec(h);V(i);const j=i.success?i.spec.root_domain:void 0;if(j){if(j!==g.current&&Y?.tools?.find(v=>v.type===_.JIT_PLUGIN&&v.metadata.domain===j)){V({success:!1,errors:[t.formatMessage({id:"nwBcmJ",defaultMessage:"Action sets cannot have duplicate domains - {domain} already exists on another action"},{domain:j})]});return}n(A=>({...A,tools:A.tools.map(v=>v.type===_.JIT_PLUGIN&&v.metadata.domain===g.current?{...v,metadata:{...v.metadata,domain:j}}:v)})),p(j)}if(i.success&&i.known_auth&&i.known_privacy_policy&&x){const A={type:c.OAuth,...i.known_auth};re(x.metadata.auth,A)||f({auth:{type:c.OAuth,...i.known_auth}}),x.metadata.privacy_policy_url!==i.known_privacy_policy&&f({privacy_policy_url:i.known_privacy_policy})}},1e3)),G=k!=null?k.success?k.warnings:k.errors:void 0;u.useEffect(()=>{M===""?(V(void 0),U.cancel()):U(M)},[U,M]);const q=s=>{try{f({raw_spec:JSON.stringify(JSON.parse(s),null,2)})}catch{try{f({raw_spec:B.stringify(B.parse(s),{lineWidth:120,indent:2})})}catch{}}},Q=u.useCallback(s=>{switch(s.type){case c.None:{f({auth:{type:c.None}});break}case c.OAuth:{const{oauth_client_id:h,oauth_client_secret:i,...j}=s;f({auth:j,oauth_client_id:h,oauth_client_secret:i});break}case c.ServiceHTTP:{const{api_key:h,...i}=s;f({auth:i,api_key:h});break}}},[f]),Z=u.useCallback(()=>{window.confirm("Are you sure you want to delete this action?")&&(n(s=>({...s,tools:s.tools.filter(h=>!(h.type===_.JIT_PLUGIN&&h.metadata.domain===m))})),l())},[m,l,n]);return e.jsxs("div",{className:"h-full overflow-auto px-4 pb-12 text-sm",children:[e.jsxs("div",{className:"relative flex flex-col items-center px-16 py-6 text-center",children:[e.jsx("div",{className:"absolute start-0 top-6",children:e.jsx(S,{color:"secondary",onClick:l,icon:de})}),x!=null&&e.jsx("div",{className:"absolute end-0 top-6",children:e.jsx(S,{color:"secondary",onClick:Z,className:"text-red-500",children:e.jsx(ue,{className:"icon"})})}),e.jsx("div",{className:"text-xl font-semibold",children:J?e.jsx(a,{id:"LEn2vt",defaultMessage:"Add actions"}):e.jsx(a,{id:"WtVYgh",defaultMessage:"Edit actions"})}),e.jsx("div",{className:"text-token-text-tertiary text-sm",children:e.jsx(a,{id:"f0WG0Q",defaultMessage:"Let your GPT retrieve information or take actions outside of ChatGPT."})}),e.jsx("div",{className:"text-token-text-tertiary text-sm",children:e.jsx("a",{href:"https://help.openai.com/en/articles/8554397-creating-a-gpt",target:"_blank",rel:"noreferrer",className:"font-semibold",children:e.jsx(a,{id:"44M7/B",defaultMessage:"Learn more."})})})]}),e.jsxs(me,{className:"relative",children:[e.jsx(R,{label:t.formatMessage({id:"kZ040s",defaultMessage:"Authentication"})}),e.jsx(fe,{onClick:()=>{z(!0)},content:t.formatMessage(we(x?.metadata?.auth?.type??c.None)),button:e.jsx("button",{color:"secondary",className:"flex items-center gap-2 px-3",children:e.jsx(oe,{className:"icon-sm"})})}),F&&e.jsx(Ne,{jitPluginTool:x,onUpdateTool:Q,onClose:()=>z(!1)})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-1 flex h-8 items-center justify-between",children:[e.jsx("label",{className:"text-token-text-primary font-semibold",children:e.jsx(a,{id:"+xKwQg",defaultMessage:"Schema"})}),e.jsx("div",{className:"flex items-center",children:K?e.jsx(be,{onImport:s=>q(s),onClose:()=>D(!1)}):e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(w,{color:"secondary",size:"small",onClick:()=>D(!0),children:e.jsx(a,{id:"kTR+Ef",defaultMessage:"Import from URL"})}),e.jsx(ge,{onSelectExample:s=>{f({raw_spec:s})}})]})})]}),e.jsxs("div",{className:"border-token-border-default mb-8 overflow-hidden rounded-lg border",children:[e.jsxs("div",{className:"relative",children:[e.jsx("textarea",{value:M,onChange:s=>{f({raw_spec:s.target.value})},spellCheck:!1,placeholder:t.formatMessage({id:"zBM3o0",defaultMessage:"Enter your OpenAPI schema here"}),className:"text-token-text-primary block h-96 w-full border-none bg-transparent p-2 font-mono text-xs",dir:"ltr"}),e.jsx("div",{className:"absolute end-2 bottom-2 flex gap-2",children:M!==""?e.jsx(w,{onClick:()=>{q(M)},children:e.jsx(a,{id:"vJWnIM",defaultMessage:"Format"})}):e.jsxs(w,{as:"a",to:_e,openNewTab:!0,size:"small",children:[e.jsx(a,{id:"gizmo.actions.actionsGptHelp",defaultMessage:"Get help from ActionsGPT"}),e.jsx(pe,{className:"icon"})]})})]}),G!=null&&G?.length>0&&e.jsx("div",{className:"border-token-border-default border-t p-2 text-red-500",children:G.map((s,h)=>e.jsx("div",{children:s},h))})]})]}),k!=null&&e.jsx(ke,{validationResponse:k}),C?.allowed_custom_actions_domains!=null&&(C?.allowed_custom_actions_domains?.length>0?e.jsxs("div",{className:"mt-4",children:[e.jsxs("p",{className:"mb-1 cursor-pointer font-semibold",onClick:()=>X(!P),children:[e.jsx(a,{id:"Gcxir6",defaultMessage:"Domains allowed by your workspace"}),e.jsx(le,{className:"inline",checked:P})]}),e.jsx("ul",{className:ne("list-disc ps-4",!P&&"hidden"),children:C?.allowed_custom_actions_domains.map(s=>e.jsx("li",{children:s},s))})]}):e.jsx("p",{className:"text-sm italic",children:e.jsx(a,{id:"wWCl0j",defaultMessage:"No domains are allowed by your workspace's settings."})})),e.jsxs("div",{className:"mt-4",children:[e.jsx(R,{htmlFor:"privacyPolicyUrl",label:t.formatMessage({id:"Pbk0Gp",defaultMessage:"Privacy policy"}),description:"Privacy policy is required for all public GPTs."}),e.jsx(ie,{ariaLabel:!1,name:"privacyPolicyUrl",value:x?.metadata?.privacy_policy_url??"",placeholder:"https://app.example.com/privacy",onChange:s=>{f({privacy_policy_url:s.target.value})}})]})]})}export{Ze as GizmoActionsEditor};
//# sourceMappingURL=l5wcma0jtzapjmsc.js.map
