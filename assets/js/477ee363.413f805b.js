"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64746],{75703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(97458),a=n(16436),i=n(16107);const r={},o=void 0,c={id:"auto-generated/ix-date-dropdown/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-date-dropdown/events.md",sourceDirName:"auto-generated/ix-date-dropdown",slug:"/auto-generated/ix-date-dropdown/events",permalink:"/docs/auto-generated/ix-date-dropdown/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-date-dropdown/events.md",tags:[],version:"current",frontMatter:{}},d={},l=[];function p(e){return(0,s.jsx)(i.Z,{attributes:[{name:"dateRangeChange",description:"EventEmitter for date range change events.\n\nThis event is emitted when the date range changes within the component.\nThe event payload contains information about the selected date range.",definition:[{name:"Detail",value:"{ id: string; from: string; to: string; }"}],tags:[]}]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},91922:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var s=n(97458),a=n(16436),i=n(16107);const r={},o=void 0,c={id:"auto-generated/ix-date-dropdown/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-date-dropdown/props.md",sourceDirName:"auto-generated/ix-date-dropdown",slug:"/auto-generated/ix-date-dropdown/props",permalink:"/docs/auto-generated/ix-date-dropdown/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-date-dropdown/props.md",tags:[],version:"current",frontMatter:{}},d={},l=[];function p(e){return(0,s.jsx)(i.Z,{attributes:[{name:"customRangeAllowed",description:"Controls whether the user is allowed to pick custom date ranges in the component.\nWhen set to 'true', the user can select a custom date range using the date picker.\nWhen set to 'false', only predefined time date ranges are available for selection.",definition:[{name:"Attribute",value:"custom-range-allowed"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"dateRangeId",description:"Used to set the initial select date range as well as the button name,\nif not set or no according date range label is found, nothing will be selected",definition:[{name:"Attribute",value:"date-range-id"},{name:"Type",value:"string"},{name:"Default",value:"'custom'"}],tags:[]},{name:"dateRangeOptions",description:"An array of predefined date range options for the date picker.\nEach option is an object with a label describing the range and a function\nthat returns the start and end dates of the range as a DateRangeOption object.\n\nExample format:\n  {\n    id: 'some unique id',\n    label: 'Name of the range',\n    from: undefined, to: '2023/03/29'\n  },\n  // ... other predefined date range options ...",definition:[{name:"Attribute"},{name:"Type",value:"DateDropdownOption[]"},{name:"Default",value:"[]"}],tags:[]},{name:"disabled",description:"Disable the button that opens the dropdown containing the date picker.",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"2.3.0"}]},{name:"format",description:"Date format string.\nSee",definition:[{name:"Attribute",value:"format"},{name:"Type",value:"string"},{name:"Default",value:"'yyyy/LL/dd'"}],tags:[]},{name:"from",description:"Picker date. If the picker is in range mode this property is the start date.\nIf set to `null` no default start date will be pre-selected.\n\nFormat is based on `format`",definition:[{name:"Attribute",value:"from"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"i18nCustomItem",description:"Text for custom dropdown item. Will be used for translation.",definition:[{name:"Attribute",value:"i18n-custom-item"},{name:"Type",value:"string"},{name:"Default",value:"'Custom...'"}],tags:[]},{name:"i18nDone",description:"Text for the done button. Will be used for translation.",definition:[{name:"Attribute",value:"i18n-done"},{name:"Type",value:"string"},{name:"Default",value:"'Done'"}],tags:[]},{name:"i18nNoRange",description:"Text for the done button. Will be used for translation.",definition:[{name:"Attribute",value:"i18n-no-range"},{name:"Type",value:"string"},{name:"Default",value:"'No range set'"}],tags:[]},{name:"maxDate",description:"The latest date that can be selected by the date picker.\nIf not set there will be no restriction.",definition:[{name:"Attribute",value:"max-date"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"minDate",description:"The earliest date that can be selected by the date picker.\nIf not set there will be no restriction.",definition:[{name:"Attribute",value:"min-date"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"range",description:"If true a range of dates can be selected.",definition:[{name:"Attribute",value:"range"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"to",description:"Picker date. If the picker is in range mode this property is the end date.\nIf the picker is not in range mode leave this value `null`\n\nFormat is based on `format`",definition:[{name:"Attribute",value:"to"},{name:"Type",value:"string"},{name:"Default"}],tags:[]}]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p()}},63643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var s=n(97458),a=n(16436),i=n(91922),r=n(75703),o=n(51964);const c={},d="Date dropdown",l={id:"controls/date-dropdown",title:"Date dropdown",description:"Examples",source:"@site/docs/controls/date-dropdown.md",sourceDirName:"controls",slug:"/controls/date-dropdown",permalink:"/docs/controls/date-dropdown",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/date-dropdown.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Content header",permalink:"/docs/controls/content-header"},next:{title:"Date picker",permalink:"/docs/controls/date-picker"}},p={},u=[{value:"Examples",id:"examples",level:2},{value:"Basic",id:"basic",level:3},{value:"With user defined range options",id:"with-user-defined-range-options",level:3},{value:"API",id:"api",level:2},{value:"Properties",id:"properties",level:3},...i.toc,{value:"Events",id:"events",level:3},...r.toc];function m(e){const t={h1:"h1",h2:"h2",h3:"h3",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"date-dropdown",children:"Date dropdown"}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"basic",children:"Basic"}),"\n",(0,s.jsx)(o.Z,{name:"date-dropdown",height:"35rem"}),"\n",(0,s.jsx)(t.h3,{id:"with-user-defined-range-options",children:"With user defined range options"}),"\n",(0,s.jsx)(o.Z,{name:"date-dropdown-user-range",height:"35rem"}),"\n",(0,s.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,s.jsx)(r.default,{})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},16107:(e,t,n)=>{n.d(t,{Z:()=>r});n(52983);var s=n(37745),a=n(97458);function i(e){return(0,a.jsxs)("div",{className:"row with--border",children:[(0,a.jsx)("div",{className:"col-sm-6",children:(0,a.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,a.jsx)(s.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,a.jsx)(s.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,a.jsx)("div",{className:"col-sm-6",children:(0,a.jsxs)("div",{className:"ApiTable__Content",children:[(0,a.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,a.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,a.jsxs)("div",{className:"row Attribute",children:[(0,a.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,a.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,a.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,a.jsxs)("div",{className:"row with--border",children:[(0,a.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,a.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,a.jsx)(i,{attribute:e},e.name)))]})}},37745:(e,t,n)=>{n.d(t,{Q:()=>a,h:()=>i});n(52983);var s=n(97458);function a(e){return(0,s.jsxs)("div",{className:"ApiTableTag",children:[(0,s.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,s.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function i(e){return(0,s.jsx)("div",{className:"ApiTableTag",children:(0,s.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},87948:(e,t,n)=>{n.d(t,{Z:()=>d});var s=n(37882),a=n(40073),i=n(12790),r=n(52983),o=n(76687),c=n(97458);function d(e){const t=(0,i.Z)(),[n]=(0,r.useState)(!1),d=(0,a.Z)("/"),[l,p]=(0,r.useState)(""),[u,m]=(0,r.useState)((0,o.V)(t)),{preferredVersion:h}=(0,s.J)();return(0,r.useEffect)((()=>{const t=h?.name;p(void 0===t||"current"===t?d+`webcomponent-examples/dist/preview-examples/${e.name}.html`:d+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[d,h?.name,e.name]),(0,r.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${l}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},51964:(e,t,n)=>{n.d(t,{Z:()=>X});var s=n(40073),a=n(85615),i=n(59670),r=n(90041),o=n(52983),c=n(87948);let d=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});function l(e){switch(e){case d.ANGULAR:return"Angular";case d.REACT:return"React";case d.JAVASCRIPT:return"JavaScript";case d.VUE:return"Vue";case d.PREVIEW:return"Preview"}}const p=300,u="https://stackblitz.com",m=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],h=["project","search","ports","settings"],f=["light","dark"],g=["editor","preview"],v={clickToLoad:e=>b("ctl",e),devToolsHeight:e=>y("devtoolsheight",e),forceEmbedLayout:e=>b("embed",e),hideDevTools:e=>b("hidedevtools",e),hideExplorer:e=>b("hideExplorer",e),hideNavigation:e=>b("hideNavigation",e),openFile:e=>j("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>x("sidebarView",e,h),startScript:e=>j("startScript",e),terminalHeight:e=>y("terminalHeight",e),theme:e=>x("theme",e,f),view:e=>x("view",e,g),zenMode:e=>b("zenMode",e)};function w(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&v.hasOwnProperty(e)?v[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function b(e,t){return!0===t?`${e}=1`:""}function y(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function x(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function j(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function $(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function E(e,t){return`${_(t)}${e}${w(t)}`}function A(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${_(n)}${e}${w(n)}`}function _(e={}){return("string"==typeof e.origin?e.origin:u).replace(/\/$/,"")}function T(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${p}`,s=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),s?e.setAttribute("width",s):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function k(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function S(e){return e&&!1===e.newWindow?"_self":"_blank"}class N{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,s)=>{const a=$();this.pending[a]={resolve:n,reject:s},this.port.postMessage({type:e,payload:{...t,__reqid:a}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:s,__success:a,__error:i}=n;this.pending[s]&&(a?this.pending[s].resolve(this.cleanResult(n)):this.pending[s].reject(i?`${t}: ${i}`:t),delete this.pending[s])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class D{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new N(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const P=[];class I{constructor(e){this.id=$(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new D(n[0],t.payload),e(this.vm),a())},s=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function a(){window.clearInterval(r),window.removeEventListener("message",n)}window.addEventListener("message",n),s();let i=0;const r=window.setInterval((()=>{if(this.vm)a();else{if(i>=20)return a(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void P.forEach(((e,t)=>{e.id===this.id&&P.splice(t,1)}));i++,s()}}),500)})),P.push(this)}}const R=e=>{const t=e instanceof Element?"element":"id";return P.find((n=>n[t]===e))??null};function C({template:e,title:t,description:n,dependencies:s,files:a,settings:i}){if(!m.includes(e)){const e=m.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const r=[],o=(e,t,n="")=>{r.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};o("project[title]",t),"string"==typeof n&&n.length>0&&o("project[description]",n),o("project[template]",e,"javascript"),s&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):o("project[dependencies]",JSON.stringify(s))),i&&o("project[settings]",JSON.stringify(i)),Object.entries(a).forEach((([e,t])=>{o(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const c=document.createElement("form");return c.method="POST",c.setAttribute("style","display:none!important;"),c.append(...r),c}function V(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(R(e)??new I(e)).pending}const U={connect:V,embedGithubProject:function(e,t,n){const s=k(e),a=document.createElement("iframe");return a.src=A(`/github/${t}`,n),T(s,a,n),V(a)},embedProject:function(e,t,n){const s=k(e),a=function(e,t){const n=C(e);return n.action=A("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),i=document.createElement("iframe");return T(s,i,n),i.contentDocument?.write(a),V(i)},embedProjectId:function(e,t,n){const s=k(e),a=document.createElement("iframe");return a.src=A(`/edit/${t}`,n),T(s,a,n),V(a)},openGithubProject:function(e,t){const n=E(`/github/${e}`,t),s=S(t);window.open(n,s)},openProject:function(e,t){!function(e,t){const n=C(e);n.action=E("/run",t),n.target=S(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=E(`/edit/${e}`,t),s=S(t);window.open(n,s)}};n(24987);async function O(e,t){void 0===t&&(t=!0);const n=await fetch(e);if(!n.ok)throw`Error fetching code from ${e}`;const s=await n.text();if(!s||s?.includes('<div id="__docusaurus"></div>')||s?.includes("Page Not Found"))throw`Error fetching code from ${e}`;return t?s.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim():s}async function F(e,t,n){try{const s=await O(t);return s&&(e[n]=s),s}catch(s){return""}}function L(e){const t=e.split("-").map(((e,t)=>0===t?e.toLowerCase():e.charAt(0).toUpperCase()+e.slice(1).toLowerCase())).join("");return t.charAt(0).toUpperCase()+t.slice(1)}function M(e,t,n,s){!function(e,t){const n=e["package.json"];e["package.json"]=n.replace(/\"<VERSION>\"/g,`"${t}"`)}(t,s),U.openProject({title:`iX ${L(e)} Example`,template:"node",description:`iX ${e} playground`,files:t},{openFile:n})}async function W(e,t,n,s){const a=await async function(e,t,n){const s=await async function(e){const t={},n=["src/App.vue","src/env.d.ts","src/main.ts","index.html","package.json","tsconfig.json","vite.config.ts"].map((async n=>{const s=await O(`${e}code-runtime/vue/${n}`);t[n]=s}));await Promise.all(n);const s=await O(`${e}auto-generated/previews/vue/styles/global.css`);return t["src/styles/global.css"]=s,t}(e),a={...s};Object.keys(t).forEach((e=>{a[`src/${e.replace("./","")}`]=t[e]}));const i=`import ${L(n)} from './${n}.vue';`;return a["src/App.vue"]=a["src/App.vue"].replace("import Example from './Example.vue';",i),a["src/App.vue"]=a["src/App.vue"].replace("<Example />",`<${L(n)} />`),a}(e,t,n);M("vue",a,`${n}.vue`,s)}async function q(e,t,n,s){const a=await async function(e,t,n){const s=await async function(e){const t={},n=["src/main.js","package.json","vite.config.ts"].map((async n=>{const s=await O(`${e}code-runtime/html/${n}`);t[n]=s}));await Promise.all(n),t["src/init.js"]=t["src/main.js"],delete t["src/main.js"];const s=await O(`${e}auto-generated/previews/web-components/styles/global.css`);return t["src/styles/global.css"]=s,t}(e),a={...s},i=t[`${n}.html`];return a["src/index.html"]=i,Object.keys(t).forEach((e=>{a[`src/${e.replace("./","")}`]=t[e]})),delete a[`src/${n}.html`],a}(e,t,n);M("html",a,"src/index.html",s)}async function Z(e,t,n,s){const a=await async function(e,t,n){const s=await async function(e){const t={},n=["src/app/app.module.ts","src/app/app.component.ts","src/app/app.component.html","src/index.html","src/main.ts","tsconfig.json","tsconfig.app.json","angular.json","package.json"].map((async n=>{const s=await O(`${e}code-runtime/angular/${n}`);t[n]=s}));await Promise.all(n);const s=await O(`${e}auto-generated/previews/angular/styles/global.css`);return t["src/styles.css"]=s,t}(e),a={...s};return Object.keys(t).forEach((e=>{a[`src/${e.replace("./","")}`]=t[e]})),a["src/app/app.module.ts"]=a["src/app/app.module.ts"].replace("import ExampleComponent from './example.component';",`import ${L(n)} from './../${n}';`),a["src/app/app.module.ts"]=a["src/app/app.module.ts"].replace("declarations: [AppComponent, ExampleComponent],",`declarations: [AppComponent, ${L(n)}],`),a}(e,t,n);M("angular",a,`src/${n}.ts`,s)}async function G(e,t,n,s){const a=await async function(e,t,n){const s=await async function(e){const t={},n=["vite.config.ts","tsconfig.node.json","tsconfig.json","package.json","index.html","src/App.tsx","src/main.tsx","src/vite-env.d.ts"].map((async n=>{const s=await O(`${e}code-runtime/react/${n}`);t[n]=s}));await Promise.all(n);const s=await O(`${e}auto-generated/previews/react/styles/global.css`);return t["src/styles/global.css"]=s,t}(e),a={...s};Object.keys(t).forEach((e=>{a[`src/${e.replace("./","")}`]=t[e]}));const i=`import ${L(n)} from './${n}';`;return a["src/App.tsx"]=a["src/App.tsx"].replace("import Example from './Example';",i),a["src/App.tsx"]=a["src/App.tsx"].replace("<Example />",`<${L(n)} />`),a}(e,t,n);M("react",a,`src/${n}.tsx`,s)}var K=n(97458);function H(){return(0,K.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"})}function J(e,t,n,a){const[i,r]=(0,o.useState)(!1),[c]=(0,o.useState)(!1),[l,p]=(0,o.useState)({}),u=function(e){const t=(0,s.Z)("auto-generated/previews");return e===d.ANGULAR?`${t}/angular`:e===d.REACT?`${t}/react`:e===d.VUE?`${t}/vue`:e===d.JAVASCRIPT?`${t}/web-components`:void 0}(e);return(0,o.useEffect)((()=>{let s=null,i=null;e!==d.PREVIEW&&(r(!0),!a&&u&&(e===d.ANGULAR&&(s=async function(e,t){const n={};await F(n,`${e}/${t}.html`,`${t}.html`);const s=(await F(n,`${e}/${t}.ts`,`${t}.ts`)).match(/styleUrls:\s*\[\s*['"]([^'"]+)['"]\s*\]/);return s&&await F(n,`${e}/${s[1]}`,`${s[1]}`),n}(u,t)),e===d.REACT&&(s=async function(e,t){const n={},s=await O(`${e}/${t}.tsx`);n[`${t}.tsx`]=s;const a=s.match(/import\s*\s*['"]\.\/styles\/([^'"]+)['"]\s*/);if(a){const t=await O(`${e}/styles/${a[1]}`);t&&(n[`./styles/${a[1]}`]=t)}return n}(u,t)),e===d.VUE&&(s=async function(e,t){const n={},s=await O(`${e}/${t}.vue`);n[`${t}.vue`]=s;const a=s.match(/<style\s*scoped\s*src=['"]\.\/styles\/([^'"]+)['"]\s*><\/style>/);if(a){const t=await O(`${e}/styles/${a[1]}`);t&&(n[`./styles/${a[1]}`]=t)}return n}(u,t)),e===d.JAVASCRIPT&&(s=async function(e,t){const n={},s=await O(`${e}/${t}.html`,!0);n[`${t}.html`]=s;const a=s.match(/<link\s*rel=\"stylesheet\"\s*href=['"]\.\/styles\/([^'"]+)['"]\s* \/>/);if(a){const t=await O(`${e}/styles/${a[1]}`);t&&(n[`./styles/${a[1]}`]=t)}return n}(u,t)),s||(s=Promise.resolve({}))),i=n&&n[e]?new Promise(((t,s)=>{const a={};Promise.all(n[e].map((async e=>{try{const t=await O(`${u}/${e}`);a[e]=t}catch(t){s(t)}}))).then((()=>{t(a)}))})):Promise.resolve({}),Promise.all([s,i]).then((e=>{let[t,n]=e;r(!1),p({...t,...n})})))}),[e,u,n,a]),{isFetching:i,snippets:l,hasError:c}}function z(e){(0,s.Z)("/");const[t,n]=(0,o.useState)(Object.keys(e.snippets)[0]),i=(0,o.useMemo)((()=>{if(!t)return"";const e=t.split(".").pop();return e?"vue"===e?"tsx":e:"ts"}),[t]),c=(0,o.useMemo)((()=>t&&e.snippets[t]||""),[t,e.snippets]);return(0,o.useEffect)((()=>{n(Object.keys(e.snippets)[0])}),[e.snippets,n]),(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(a.Vp,{children:Object.keys(e.snippets).map(((e,t)=>(0,K.jsx)(a.t3,{selected:0===t,onClick:()=>n(e),children:e},e)))}),(0,K.jsx)(r.Z,{language:i,children:c})]})}function B(e){const t=(0,i.F)(),n=(0,s.Z)("/"),r=(0,s.Z)("/img"),o=(0,s.Z)("/webcomponent-examples/dist/preview-examples");return(0,K.jsx)("div",{className:"Interaction",children:e.activeFramework===d.PREVIEW?(0,K.jsx)(a.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const n=e.noMargin?"&no-margin=true":"";window.open(`${o}/${e.name}.html?theme=${t}${n}`)}}):(0,K.jsx)(K.Fragment,{children:(0,K.jsx)(a._h,{onClick:()=>async function(e){let{baseUrl:t,name:n,framework:s,snippets:a,version:i}=e;const r=i||"latest";return s===d.REACT?G(t,a,n,r):s===d.ANGULAR?Z(t,a,n,r):s===d.JAVASCRIPT?q(t,a,n,r):s===d.VUE?W(t,a,n,r):void 0}({baseUrl:n,framework:e.activeFramework,snippets:e.snippets,name:e.name,version:"latest"}),className:"Stackblitz",icon:`${r}/stackblitz.svg`,outline:!0,iconSize:"16",children:"Open in Stackblitz"})})})}function Q(e){return e.hasError?(0,K.jsx)(H,{}):e.isFetching||0===Object.keys(e.snippets).length?(0,K.jsx)(a.lL,{}):(0,K.jsx)(z,{snippets:e.snippets})}function X(e){const[t,n]=o.useState(d.PREVIEW),{isFetching:s,hasError:i,snippets:r}=J(t,e.name,e.additionalFiles,e.preventDefaultExample);function p(e){n(e)}d.PREVIEW;return(0,K.jsxs)("div",{className:"Playground",children:[(0,K.jsxs)("div",{className:"Toolbar",children:[(0,K.jsxs)(a.Vp,{layout:"auto",class:"Tabs",children:[(0,K.jsx)(a.t3,{onClick:()=>p(d.PREVIEW),children:"Preview"}),[d.ANGULAR,d.REACT,d.VUE,d.JAVASCRIPT].filter((t=>!e.frameworks||(0===e.frameworks.length||e.frameworks.includes(t)))).map((e=>(0,K.jsx)(a.t3,{onClick:()=>p(e),children:l(e)},e)))]}),(0,K.jsx)(B,{name:e.name,activeFramework:t,noMargin:!1,snippets:r})]}),t===d.PREVIEW?(0,K.jsx)(c.Z,{...e}):(0,K.jsx)(Q,{isFetching:s,hasError:i,snippets:r})]})}}}]);