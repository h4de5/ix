"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39268],{56584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=n(97458),s=n(16436);const r={},a=void 0,o={id:"auto-generated/ix-flip-tile/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-flip-tile/events.md",sourceDirName:"auto-generated/ix-flip-tile",slug:"/auto-generated/ix-flip-tile/events",permalink:"/docs/auto-generated/ix-flip-tile/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-flip-tile/events.md",tags:[],version:"current",frontMatter:{}},c={},l=[];function d(e){const t={p:"p",...(0,s.a)(),...e.components};return(0,i.jsx)(t.p,{children:"No events available for this component."})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},44193:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(97458),s=n(16436),r=n(91604);const a={},o=void 0,c={id:"auto-generated/ix-flip-tile/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-flip-tile/props.md",sourceDirName:"auto-generated/ix-flip-tile",slug:"/auto-generated/ix-flip-tile/props",permalink:"/docs/auto-generated/ix-flip-tile/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-flip-tile/props.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function p(e){return(0,i.jsx)(r.Z,{attributes:[{name:"height",description:"Height interpreted as REM",definition:[{name:"Attribute",value:"height"},{name:"Type",value:'"auto" \uff5c number'},{name:"Default",value:"15.125"}],tags:[{type:"since",message:"1.5.0"}]},{name:"state",description:"Variation of the Flip",definition:[{name:"Attribute",value:"state"},{name:"Type",value:"FlipTileState.Alarm \uff5c FlipTileState.Info \uff5c FlipTileState.None \uff5c FlipTileState.Primary \uff5c FlipTileState.Warning"},{name:"Default"}],tags:[]},{name:"width",description:"Width interpreted as REM",definition:[{name:"Attribute",value:"width"},{name:"Type",value:'"auto" \uff5c number'},{name:"Default",value:"16"}],tags:[{type:"since",message:"1.5.0"}]}]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p()}},42882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var i=n(97458),s=n(16436),r=n(26601),a=n(44193),o=n(56584);const c={},l="Flip",d={id:"controls/flip",title:"Flip",description:"Usage",source:"@site/docs/controls/flip.md",sourceDirName:"controls",slug:"/controls/flip",permalink:"/docs/controls/flip",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/flip.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Expanding search",permalink:"/docs/controls/expanding-search"},next:{title:"Grid (AG Grid)",permalink:"/docs/controls/grid"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},...a.toc,{value:"Events",id:"events",level:3},...o.toc];function m(e){const t={h1:"h1",h2:"h2",h3:"h3",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"flip",children:"Flip"}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(r.Z,{name:"flip-tile",height:"20rem",examplesByName:!0}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,i.jsx)(a.default,{}),"\n",(0,i.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,i.jsx)(o.default,{})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>S});const i=300,s="https://stackblitz.com",r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],a=["project","search","ports","settings"],o=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>p("ctl",e),devToolsHeight:e=>u("devtoolsheight",e),forceEmbedLayout:e=>p("embed",e),hideDevTools:e=>p("hidedevtools",e),hideExplorer:e=>p("hideExplorer",e),hideNavigation:e=>p("hideNavigation",e),openFile:e=>h("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>m("sidebarView",e,a),startScript:e=>h("startScript",e),terminalHeight:e=>u("terminalHeight",e),theme:e=>m("theme",e,o),view:e=>m("view",e,c),zenMode:e=>p("zenMode",e)};function d(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function p(e,t){return!0===t?`${e}=1`:""}function u(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function m(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function h(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${w(t)}${e}${d(t)}`}function v(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${w(n)}${e}${d(n)}`}function w(e={}){return("string"==typeof e.origin?e.origin:s).replace(/\/$/,"")}function x(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${i}`,s=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),s?e.setAttribute("width",s):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function y(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function j(e){return e&&!1===e.newWindow?"_self":"_blank"}class b{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,i)=>{const s=f();this.pending[s]={resolve:n,reject:i},this.port.postMessage({type:e,payload:{...t,__reqid:s}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:i,__success:s,__error:r}=n;this.pending[i]&&(s?this.pending[i].resolve(this.cleanResult(n)):this.pending[i].reject(r?`${t}: ${r}`:t),delete this.pending[i])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class ${constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new b(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const E=[];class _{constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new $(n[0],t.payload),e(this.vm),s())},i=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function s(){window.clearInterval(a),window.removeEventListener("message",n)}window.addEventListener("message",n),i();let r=0;const a=window.setInterval((()=>{if(this.vm)s();else{if(r>=20)return s(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void E.forEach(((e,t)=>{e.id===this.id&&E.splice(t,1)}));r++,i()}}),500)})),E.push(this)}}const N=e=>{const t=e instanceof Element?"element":"id";return E.find((n=>n[t]===e))??null};function A({template:e,title:t,description:n,dependencies:i,files:s,settings:a}){if(!r.includes(e)){const e=r.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const o=[],c=(e,t,n="")=>{o.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),i&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(i))),a&&c("project[settings]",JSON.stringify(a)),Object.entries(s).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...o),l}function T(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(N(e)??new _(e)).pending}const S={connect:T,embedGithubProject:function(e,t,n){const i=y(e),s=document.createElement("iframe");return s.src=v(`/github/${t}`,n),x(i,s,n),T(s)},embedProject:function(e,t,n){const i=y(e),s=function(e,t){const n=A(e);return n.action=v("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),r=document.createElement("iframe");return x(i,r,n),r.contentDocument?.write(s),T(r)},embedProjectId:function(e,t,n){const i=y(e),s=document.createElement("iframe");return s.src=v(`/edit/${t}`,n),x(i,s,n),T(s)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),i=j(t);window.open(n,i)},openProject:function(e,t){!function(e,t){const n=A(e);n.action=g("/run",t),n.target=j(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),i=j(t);window.open(n,i)}}},91604:(e,t,n)=>{n.d(t,{Z:()=>a});n(52983);var i=n(76840),s=n(97458);function r(e){return(0,s.jsxs)("div",{className:"row with--border",children:[(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,s.jsx)(i.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,s.jsx)(i.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("div",{className:"ApiTable__Content",children:[(0,s.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,s.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,s.jsxs)("div",{className:"row Attribute",children:[(0,s.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,s.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const a=function(e){return(0,s.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,s.jsxs)("div",{className:"row with--border",children:[(0,s.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,s.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,s.jsx)(r,{attribute:e},e.name)))]})}},76840:(e,t,n)=>{n.d(t,{Q:()=>s,h:()=>r});n(52983);var i=n(97458);function s(e){return(0,i.jsxs)("div",{className:"ApiTableTag",children:[(0,i.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,i.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function r(e){return(0,i.jsx)("div",{className:"ApiTableTag",children:(0,i.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},69718:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(52147),s=n(57161),r=n(35389),a=n(52983),o=n(17995),c=n(97458);function l(e){const t=(0,r.Z)(),[n]=(0,a.useState)(!1),l=(0,s.Z)("/"),[d,p]=(0,a.useState)(""),[u,m]=(0,a.useState)((0,o.V)(t)),{preferredVersion:h}=(0,i.J)();return(0,a.useEffect)((()=>{const t=h?.name;p(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,a.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},26601:(e,t,n)=>{n.d(t,{Z:()=>N});var i=n(57161),s=n(62278),r=n(63020),a=n(46820),o=n(52983);let c=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});var l=n(69718);const d={Files_Toolbar:"Files_Toolbar_Sh51"};var p=n(14455);function u(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function m(e){const t=s.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}function h(e,t){var n;void 0===t&&(t=!1);const i=e.match(/example-styles\/dist\/(.*\.(css|scss))/);return i&&i.length>1&&(n=i[1]),{source:e=e.replace("example-styles/dist",t?".":"./styles"),styleFileName:n}}async function f(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function g(e,t,n,i){const s={},r={},a=e.map((async e=>{let{filename:a,raw:o}=e;if(a.endsWith(".css"))return;let l=o;if(a===n){i===c.JAVASCRIPT&&(l=m(function(e){return e.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2")}(l)),a="index.html");const{source:e,styleFileName:n}=h(l,i===c.ANGULAR);l=e,n&&(r[`src/${i===c.ANGULAR?"app":"styles"}/${n}`]=(await f([`${t}${n}`]))[0])}s[`src${i===c.ANGULAR?"/app":""}/${a}`]=l}));return await Promise.all(a),{files:s,styleFiles:r}}async function v(e){let{name:t,framework:n,files:i,baseUrl:s,version:r}=e;const a=r||"latest";return n===c.REACT?async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,[s,r,a,o,l,d]=await f([`${i}global.css`,`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),h=t[0],{files:v,styleFiles:w}=await g(t,i,h.filename,c.REACT);p.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...v,...w,"src/styles/global.css":s,"public/index.html":m(a),"src/index.tsx":o,"src/App.tsx":r.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${h.filename.substring(0,h.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":u(l,n),"tsconfig.json":d,".stackblitzrc":'{\n          "startCommand": "npm run start"\n        }'}},{openFile:`src/${h.filename}`})}(s,i,a):n===c.ANGULAR?async function(e,t,n,i){const s=`${e}auto-generated/previews/styles/`,[r,a,o,l,d,h,v,w,x,y]=await f([`${s}global.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),j=n[0],b=[];n.forEach((e=>{let{filename:t,raw:n}=e;/@Component/gms.test(n)&&b.push(t)}));const $=`\n    ${b.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${b.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,{files:E,styleFiles:_}=await g(n,s,j.filename,c.ANGULAR);p.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{...E,..._,"src/app/declare-component.ts":$,"src/app/app.component.html":a,"src/app/app.component.ts":o,"src/app/app.module.ts":l,"src/index.html":m(d),"src/main.ts":h,"src/styles.css":r,"angular.json":v,"package.json":u(w,i),"tsconfig.app.json":x,"tsconfig.json":y}},{openFile:`src/app/${t}.ts`})}(s,t,i,a):n===c.JAVASCRIPT?async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,[s,r,a,o]=await f([`${i}global.css`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),l=t[0],{files:d,styleFiles:m}=await g(t,i,l.filename,c.JAVASCRIPT);p.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...d,...m,"src/styles/global.css":s,"src/main.js":r,"package.json":u(a,n),"vite.config.ts":o}},{openFile:["src/index.html"]})}(s,i,a):n===c.VUE?async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,[s,r,a,o,l,d,h,v]=await f([`${i}global.css`,`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),w=t[0],{files:x,styleFiles:y}=await g(t,i,w.filename,c.VUE);p.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...x,...y,"src/styles/global.css":s,"index.html":m(a),"src/main.ts":o,"src/App.vue":r.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${w.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":v,"package.json":u(l,n),"tsconfig.json":d,"vite.config.ts":h,".stackblitzrc":'{\n          "startCommand": "npm run dev"\n        }'}},{openFile:`src/${w.filename}`})}(s,i,a):void 0}var w=n(35389),x=n(97458);function y(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function j(e,t){const n=e.match(t);if(n&&2===n.length){const[n,i]=e.split(t);return y(i.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function b(e){return h(function(e){const t=j(e,/<!-- Preview code -->/g);if(t){const n=j(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return y(e)}(e),!0).source}async function $(e,t,n){let i="web-components";return t===c.ANGULAR&&(i="angular"),t===c.REACT&&(i="react"),t===c.VUE&&(i="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){console.log("FETCH SOURCE FROM",e);const t=await fetch(`${e}`),n=await t.text();return console.log(n),!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}("css"===E(t)?`${e}/previews/styles/${t}`:`${e}/previews/${i}/${t}`);return n?{filename:t,source:b(n),raw:n}:null}catch(n){console.warn(n)}})))}function E(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":e.endsWith(".css")?"css":void 0}function _(e){const[t,n]=(0,o.useState)(!0),s=(0,i.Z)("/auto-generated"),[l,d]=(0,o.useState)([]),[p,u]=(0,o.useState)(0);return(0,o.useEffect)((()=>{if(e.examplesByName){const t=[];return e.framework===c.ANGULAR&&t.push(`${e.name}.html`,`${e.name}.ts`),e.framework===c.JAVASCRIPT&&t.push(`${e.name}.html`),e.framework===c.REACT&&t.push(`${e.name}.tsx`),e.framework===c.VUE&&t.push(`${e.name}.vue`),e.includeCssFile&&t.push(`${e.name}.css`),n(!0),void $(s,e.framework,t).then((e=>{u(0),d(e.filter((e=>e))),n(!1)}))}if(e.files&&e.files[e.framework]){const t=e.files[e.framework];n(!0),$(s,e.framework,t).then((e=>{u(0),d(e.filter((e=>e))),n(!1)}))}}),[e.framework]),(0,o.useEffect)((()=>{e.onSourceCodeFetched(l)}),[l]),t?(0,x.jsx)(r.lL,{}):0===l.length?(0,x.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"}):1===l.length?(0,x.jsx)(a.Z,{language:E(l[0].filename),children:l[0].source}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(r.Vp,{children:l.map(((e,t)=>(0,x.jsx)(r.t3,{onClick:()=>u(t),children:e.filename},e.filename+"."+t)))}),(0,x.jsx)(a.Z,{language:E(l[p].filename),children:l[p].source})]})}function N(e){const[t,n]=(0,o.useState)(c.PREVIEW),a=(0,i.Z)("/"),p=(0,i.Z)("/img"),u=(0,i.Z)("/webcomponent-examples/dist/preview-examples"),[m,h]=(0,o.useState)([]),f=(0,w.Z)().siteConfig.customFields.playgroundVersion,g=t=>!!e.examplesByName||!!e.files[t];return(0,x.jsxs)("div",{children:[(0,x.jsxs)(r.Vp,{children:[(0,x.jsx)(r.t3,{onClick:()=>n(c.PREVIEW),children:"Preview"}),g(c.ANGULAR)&&(0,x.jsx)(r.t3,{onClick:()=>n(c.ANGULAR),children:"Angular"}),g(c.REACT)&&(0,x.jsx)(r.t3,{onClick:()=>n(c.REACT),children:"React"}),g(c.VUE)&&(0,x.jsx)(r.t3,{onClick:()=>n(c.VUE),children:"Vue"}),g(c.JAVASCRIPT)&&(0,x.jsx)(r.t3,{onClick:()=>n(c.JAVASCRIPT),children:"Javascript"}),(0,x.jsx)("div",{className:d.Files_Toolbar,children:t===c.PREVIEW?(0,x.jsx)(r.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const t=s.CT.getCurrentTheme(),n=e.noMargin?"&no-margin=true":"";window.open(`${u}/${e.name}.html?theme=${t}${n}`)}}):(0,x.jsxs)(x.Fragment,{children:[!e.disableStackBlitz&&(0,x.jsx)(r.AN,{ghost:!0,size:"16",icon:`${p}/stackblitz.svg`,onClick:()=>{v({baseUrl:a,files:m,framework:t,name:e.name,version:f})}}),(0,x.jsx)(r.AN,{ghost:!0,size:"16",icon:`${p}/github.svg`,onClick:()=>{window.open(`https://github.com/${function(e){let t="html";return e===c.ANGULAR&&(t="angular"),e===c.REACT&&(t="react"),e===c.VUE&&(t="vue"),`siemens/ix/tree/main/packages/${t}-test-app`}(t)}`)}})]})})]}),t===c.PREVIEW?(0,x.jsx)(l.Z,{...e}):null,t!==c.PREVIEW?(0,x.jsx)(_,{onSourceCodeFetched:e=>h(e),framework:t,name:e.name,files:e.files,includeCssFile:e.includeCssFile,examplesByName:e.examplesByName}):null]})}}}]);