"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51524],{6238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(97458),i=n(16436),a=n(16107);const r={},o=void 0,c={id:"auto-generated/ix-expanding-search/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-expanding-search/events.md",sourceDirName:"auto-generated/ix-expanding-search",slug:"/auto-generated/ix-expanding-search/events",permalink:"/docs/auto-generated/ix-expanding-search/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-expanding-search/events.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function p(e){return(0,s.jsx)(a.Z,{attributes:[{name:"valueChange",description:"Value changed",definition:[{name:"Detail",value:"string"}],tags:[]}]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},83947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(97458),i=n(16436),a=n(16107);const r={},o=void 0,c={id:"auto-generated/ix-expanding-search/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-expanding-search/props.md",sourceDirName:"auto-generated/ix-expanding-search",slug:"/auto-generated/ix-expanding-search/props",permalink:"/docs/auto-generated/ix-expanding-search/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-expanding-search/props.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function p(e){return(0,s.jsx)(a.Z,{attributes:[{name:"fullWidth",description:"If true the search field will fill all available horizontal space of it's parent container when expanded.",definition:[{name:"Attribute",value:"full-width"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"1.6.0"}]},{name:"icon",description:"Search icon",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string"},{name:"Default",value:"'search'"}],tags:[]},{name:"placeholder",description:"Placeholder text",definition:[{name:"Attribute",value:"placeholder"},{name:"Type",value:"string"},{name:"Default",value:"'Enter text here'"}],tags:[]},{name:"value",description:"Default value",definition:[{name:"Attribute",value:"value"},{name:"Type",value:"string"},{name:"Default",value:"''"}],tags:[]}]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},81337:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var s=n(97458),i=n(16436),a=n(6238),r=n(83947),o=n(51964);const c={},l="Expanding search",d={id:"controls/expanding-search",title:"Expanding search",description:"Examples",source:"@site/docs/controls/expanding-search.md",sourceDirName:"controls",slug:"/controls/expanding-search",permalink:"/docs/controls/expanding-search",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/expanding-search.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Event list",permalink:"/docs/controls/event-list"},next:{title:"Flip",permalink:"/docs/controls/flip"}},p={},u=[{value:"Examples",id:"examples",level:2},{value:"Basic",id:"basic",level:3},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},...r.toc,{value:"Events",id:"events",level:3},...a.toc];function m(e){const t={h1:"h1",h2:"h2",h3:"h3",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"expanding-search",children:"Expanding search"}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"basic",children:"Basic"}),"\n",(0,s.jsx)(o.Z,{name:"expanding-search",height:"5rem"}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(r.default,{}),"\n",(0,s.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,s.jsx)(a.default,{})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},16107:(e,t,n)=>{n.d(t,{Z:()=>r});n(52983);var s=n(37745),i=n(97458);function a(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(s.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(s.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(a,{attribute:e},e.name)))]})}},37745:(e,t,n)=>{n.d(t,{Q:()=>i,h:()=>a});n(52983);var s=n(97458);function i(e){return(0,s.jsxs)("div",{className:"ApiTableTag",children:[(0,s.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,s.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function a(e){return(0,s.jsx)("div",{className:"ApiTableTag",children:(0,s.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},87948:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(37882),i=n(40073),a=n(12790),r=n(52983),o=n(76687),c=n(97458);function l(e){const t=(0,a.Z)(),[n]=(0,r.useState)(!1),l=(0,i.Z)("/"),[d,p]=(0,r.useState)(""),[u,m]=(0,r.useState)((0,o.V)(t)),{preferredVersion:h}=(0,s.J)();return(0,r.useEffect)((()=>{const t=h?.name;p(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,r.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},51964:(e,t,n)=>{n.d(t,{Z:()=>X});var s=n(40073),i=n(85615),a=n(59670),r=n(90041),o=n(52983),c=n(87948);let l=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});function d(e){switch(e){case l.ANGULAR:return"Angular";case l.REACT:return"React";case l.JAVASCRIPT:return"JavaScript";case l.VUE:return"Vue";case l.PREVIEW:return"Preview"}}const p=300,u="https://stackblitz.com",m=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],h=["project","search","ports","settings"],f=["light","dark"],g=["editor","preview"],v={clickToLoad:e=>x("ctl",e),devToolsHeight:e=>y("devtoolsheight",e),forceEmbedLayout:e=>x("embed",e),hideDevTools:e=>x("hidedevtools",e),hideExplorer:e=>x("hideExplorer",e),hideNavigation:e=>x("hideNavigation",e),openFile:e=>b("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>j("sidebarView",e,h),startScript:e=>b("startScript",e),terminalHeight:e=>y("terminalHeight",e),theme:e=>j("theme",e,f),view:e=>j("view",e,g),zenMode:e=>x("zenMode",e)};function w(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&v.hasOwnProperty(e)?v[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function x(e,t){return!0===t?`${e}=1`:""}function y(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function j(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function b(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function $(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function E(e,t){return`${A(t)}${e}${w(t)}`}function _(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${A(n)}${e}${w(n)}`}function A(e={}){return("string"==typeof e.origin?e.origin:u).replace(/\/$/,"")}function S(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${p}`,s=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),s?e.setAttribute("width",s):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function T(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function N(e){return e&&!1===e.newWindow?"_self":"_blank"}class P{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,s)=>{const i=$();this.pending[i]={resolve:n,reject:s},this.port.postMessage({type:e,payload:{...t,__reqid:i}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:s,__success:i,__error:a}=n;this.pending[s]&&(i?this.pending[s].resolve(this.cleanResult(n)):this.pending[s].reject(a?`${t}: ${a}`:t),delete this.pending[s])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class k{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new P(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const I=[];class R{constructor(e){this.id=$(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new k(n[0],t.payload),e(this.vm),i())},s=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(r),window.removeEventListener("message",n)}window.addEventListener("message",n),s();let a=0;const r=window.setInterval((()=>{if(this.vm)i();else{if(a>=20)return i(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void I.forEach(((e,t)=>{e.id===this.id&&I.splice(t,1)}));a++,s()}}),500)})),I.push(this)}}const C=e=>{const t=e instanceof Element?"element":"id";return I.find((n=>n[t]===e))??null};function D({template:e,title:t,description:n,dependencies:s,files:i,settings:a}){if(!m.includes(e)){const e=m.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const r=[],o=(e,t,n="")=>{r.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};o("project[title]",t),"string"==typeof n&&n.length>0&&o("project[description]",n),o("project[template]",e,"javascript"),s&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):o("project[dependencies]",JSON.stringify(s))),a&&o("project[settings]",JSON.stringify(a)),Object.entries(i).forEach((([e,t])=>{o(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const c=document.createElement("form");return c.method="POST",c.setAttribute("style","display:none!important;"),c.append(...r),c}function V(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(C(e)??new R(e)).pending}const U={connect:V,embedGithubProject:function(e,t,n){const s=T(e),i=document.createElement("iframe");return i.src=_(`/github/${t}`,n),S(s,i,n),V(i)},embedProject:function(e,t,n){const s=T(e),i=function(e,t){const n=D(e);return n.action=_("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),a=document.createElement("iframe");return S(s,a,n),a.contentDocument?.write(i),V(a)},embedProjectId:function(e,t,n){const s=T(e),i=document.createElement("iframe");return i.src=_(`/edit/${t}`,n),S(s,i,n),V(i)},openGithubProject:function(e,t){const n=E(`/github/${e}`,t),s=N(t);window.open(n,s)},openProject:function(e,t){!function(e,t){const n=D(e);n.action=E("/run",t),n.target=N(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=E(`/edit/${e}`,t),s=N(t);window.open(n,s)}};n(24987);async function O(e,t){void 0===t&&(t=!0);const n=await fetch(e);if(!n.ok)throw`Error fetching code from ${e}`;const s=await n.text();if(!s||s?.includes('<div id="__docusaurus"></div>')||s?.includes("Page Not Found"))throw`Error fetching code from ${e}`;return t?s.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim():s}async function F(e,t,n){try{const s=await O(t);return s&&(e[n]=s),s}catch(s){return""}}function L(e){const t=e.split("-").map(((e,t)=>0===t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join("");return t.charAt(0).toUpperCase()+t.slice(1)}function M(e,t,n,s){!function(e,t){const n=e["package.json"];e["package.json"]=n.replace(/\"<VERSION>\"/g,`"${t}"`)}(t,s),U.openProject({title:`iX ${L(e)} Example`,template:"node",description:`iX ${e} playground`,files:t},{openFile:n})}async function W(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["src/App.vue","src/env.d.ts","src/main.ts","index.html","package.json","tsconfig.json","vite.config.ts"].map((async n=>{const s=await O(`${e}code-runtime/vue/${n}`);t[n]=s}));await Promise.all(n);const s=await O(`${e}auto-generated/previews/vue/styles/global.css`);return t["src/styles/global.css"]=s,t}(e),i={...s};Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]}));const a=`import ${L(n)} from './${n}.vue';`;return i["src/App.vue"]=i["src/App.vue"].replace("import Example from './Example.vue';",a),i["src/App.vue"]=i["src/App.vue"].replace("<Example />",`<${L(n)} />`),i}(e,t,n);M("vue",i,`${n}.vue`,s)}async function q(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["src/main.js","package.json","vite.config.ts"].map((async n=>{const s=await O(`${e}code-runtime/html/${n}`);t[n]=s}));await Promise.all(n),t["src/init.js"]=t["src/main.js"],delete t["src/main.js"];const s=await O(`${e}auto-generated/previews/web-components/styles/global.css`);return t["src/styles/global.css"]=s,t}(e),i={...s},a=t[`${n}.html`];return i["src/index.html"]=a,Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]})),delete i[`src/${n}.html`],i}(e,t,n);M("html",i,"src/index.html",s)}async function Z(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["src/app/app.module.ts","src/app/app.component.ts","src/app/app.component.html","src/index.html","src/main.ts","tsconfig.json","tsconfig.app.json","angular.json","package.json"].map((async n=>{const s=await O(`${e}code-runtime/angular/${n}`);t[n]=s}));await Promise.all(n);const s=await O(`${e}auto-generated/previews/angular/styles/global.css`);return t["src/styles.css"]=s,t}(e),i={...s};return Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]})),i["src/app/app.module.ts"]=i["src/app/app.module.ts"].replace("import ExampleComponent from './example.component';",`import ${L(n)} from './../${n}';`),i["src/app/app.module.ts"]=i["src/app/app.module.ts"].replace("declarations: [AppComponent, ExampleComponent],",`declarations: [AppComponent, ${L(n)}],`),i}(e,t,n);M("angular",i,`src/${n}.ts`,s)}async function G(e,t,n,s){const i=await async function(e,t,n){const s=await async function(e){const t={},n=["vite.config.ts","tsconfig.node.json","tsconfig.json","package.json","index.html","src/App.tsx","src/main.tsx","src/vite-env.d.ts"].map((async n=>{const s=await O(`${e}code-runtime/react/${n}`);t[n]=s}));await Promise.all(n);const s=await O(`${e}auto-generated/previews/react/styles/global.css`);return t["src/styles/global.css"]=s,t}(e),i={...s};Object.keys(t).forEach((e=>{i[`src/${e.replace("./","")}`]=t[e]}));const a=`import ${L(n)} from './${n}';`;return i["src/App.tsx"]=i["src/App.tsx"].replace("import Example from './Example';",a),i["src/App.tsx"]=i["src/App.tsx"].replace("<Example />",`<${L(n)} />`),i}(e,t,n);M("react",i,`src/${n}.tsx`,s)}var K=n(97458);function z(){return(0,K.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"})}function H(e,t,n,i){const[a,r]=(0,o.useState)(!1),[c]=(0,o.useState)(!1),[d,p]=(0,o.useState)({}),u=function(e){const t=(0,s.Z)("auto-generated/previews");return e===l.ANGULAR?`${t}/angular`:e===l.REACT?`${t}/react`:e===l.VUE?`${t}/vue`:e===l.JAVASCRIPT?`${t}/web-components`:void 0}(e);return(0,o.useEffect)((()=>{let s=null,a=null;e!==l.PREVIEW&&(r(!0),!i&&u&&(e===l.ANGULAR&&(s=async function(e,t){const n={};await F(n,`${e}/${t}.html`,`${t}.html`);const s=(await F(n,`${e}/${t}.ts`,`${t}.ts`)).match(/styleUrls:\s*\[\s*['"]([^'"]+)['"]\s*\]/);return s&&await F(n,`${e}/${s[1]}`,`${s[1]}`),n}(u,t)),e===l.REACT&&(s=async function(e,t){const n={},s=await O(`${e}/${t}.tsx`);n[`${t}.tsx`]=s;const i=s.match(/import\s*\s*['"]\.\/styles\/([^'"]+)['"]\s*/);if(i){const t=await O(`${e}/styles/${i[1]}`);t&&(n[`./styles/${i[1]}`]=t)}return n}(u,t)),e===l.VUE&&(s=async function(e,t){const n={},s=await O(`${e}/${t}.vue`);n[`${t}.vue`]=s;const i=s.match(/<style\s*scoped\s*src=['"]\.\/styles\/([^'"]+)['"]\s*><\/style>/);if(i){const t=await O(`${e}/styles/${i[1]}`);t&&(n[`./styles/${i[1]}`]=t)}return n}(u,t)),e===l.JAVASCRIPT&&(s=async function(e,t){const n={},s=await O(`${e}/${t}.html`,!0);n[`${t}.html`]=s;const i=s.match(/<link\s*rel=\"stylesheet\"\s*href=['"]\.\/styles\/([^'"]+)['"]\s* \/>/);if(i){const t=await O(`${e}/styles/${i[1]}`);t&&(n[`./styles/${i[1]}`]=t)}return n}(u,t)),s||(s=Promise.resolve({}))),a=n&&n[e]?new Promise(((t,s)=>{const i={};Promise.all(n[e].map((async e=>{try{const t=await O(`${u}/${e}`);i[e]=t}catch(t){s(t)}}))).then((()=>{t(i)}))})):Promise.resolve({}),Promise.all([s,a]).then((e=>{let[t,n]=e;r(!1),p({...t,...n})})))}),[e,u,n,i]),{isFetching:a,snippets:d,hasError:c}}function J(e){(0,s.Z)("/");const[t,n]=(0,o.useState)(Object.keys(e.snippets)[0]),a=(0,o.useMemo)((()=>{if(!t)return"";const e=t.split(".").pop();return e?"vue"===e?"tsx":e:"ts"}),[t]),c=(0,o.useMemo)((()=>t&&e.snippets[t]||""),[t,e.snippets]);return(0,o.useEffect)((()=>{n(Object.keys(e.snippets)[0])}),[e.snippets,n]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(i.Vp,{children:Object.keys(e.snippets).map(((e,t)=>(0,K.jsx)(i.t3,{selected:0===t,onClick:()=>n(e),children:e},e)))}),(0,K.jsx)(r.Z,{language:a,children:c})]})}function B(e){const t=(0,a.F)(),n=(0,s.Z)("/"),r=(0,s.Z)("/img"),o=(0,s.Z)("/webcomponent-examples/dist/preview-examples");return(0,K.jsx)("div",{className:"Interaction",children:e.activeFramework===l.PREVIEW?(0,K.jsx)(i.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const n=e.noMargin?"&no-margin=true":"";window.open(`${o}/${e.name}.html?theme=${t}${n}`)}}):(0,K.jsx)(K.Fragment,{children:(0,K.jsx)(i._h,{onClick:()=>async function(e){let{baseUrl:t,name:n,framework:s,snippets:i,version:a}=e;const r=a||"latest";return s===l.REACT?G(t,i,n,r):s===l.ANGULAR?Z(t,i,n,r):s===l.JAVASCRIPT?q(t,i,n,r):s===l.VUE?W(t,i,n,r):void 0}({baseUrl:n,framework:e.activeFramework,snippets:e.snippets,name:e.name,version:"latest"}),className:"Stackblitz",icon:`${r}/stackblitz.svg`,outline:!0,iconSize:"16",children:"Open in Stackblitz"})})})}function Q(e){return e.hasError?(0,K.jsx)(z,{}):e.isFetching||0===Object.keys(e.snippets).length?(0,K.jsx)(i.lL,{}):(0,K.jsx)(J,{snippets:e.snippets})}function X(e){const[t,n]=o.useState(l.PREVIEW),{isFetching:s,hasError:a,snippets:r}=H(t,e.name,e.additionalFiles,e.preventDefaultExample);function p(e){n(e)}l.PREVIEW;return(0,K.jsxs)("div",{className:"Playground",children:[(0,K.jsxs)("div",{className:"Toolbar",children:[(0,K.jsxs)(i.Vp,{layout:"auto",class:"Tabs",children:[(0,K.jsx)(i.t3,{onClick:()=>p(l.PREVIEW),children:"Preview"}),[l.ANGULAR,l.REACT,l.VUE,l.JAVASCRIPT].filter((t=>!e.frameworks||(0===e.frameworks.length||e.frameworks.includes(t)))).map((e=>(0,K.jsx)(i.t3,{onClick:()=>p(e),children:d(e)},e)))]}),(0,K.jsx)(B,{name:e.name,activeFramework:t,noMargin:!1,snippets:r})]}),t===l.PREVIEW?(0,K.jsx)(c.Z,{...e}):(0,K.jsx)(Q,{isFetching:s,hasError:a,snippets:r})]})}}}]);