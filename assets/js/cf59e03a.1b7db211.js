"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17753],{60842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(97458),s=n(16436),r=n(26601);const o={},a="Input",c={id:"controls/input",title:"Input",description:"Usage",source:"@site/docs/controls/input.md",sourceDirName:"controls",slug:"/controls/input",permalink:"/docs/controls/input",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/input.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"HTML table",permalink:"/docs/controls/html-grid"},next:{title:"Key value list",permalink:"/docs/controls/key-value-list"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Disabled",id:"disabled",level:3},{value:"Readonly",id:"readonly",level:3},{value:"With icon",id:"with-icon",level:3},{value:"Label placement",id:"label-placement",level:3},{value:"Input types",id:"input-types",level:3},{value:"Search",id:"search",level:3}];function u(e){const t={h1:"h1",h2:"h2",h3:"h3",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"input",children:"Input"}),"\n",(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(r.Z,{name:"input",examplesByName:!0}),"\n",(0,i.jsx)(t.h3,{id:"disabled",children:"Disabled"}),"\n",(0,i.jsx)(r.Z,{name:"input-disabled",hideInitalCodePreview:!0,examplesByName:!0}),"\n",(0,i.jsx)(t.h3,{id:"readonly",children:"Readonly"}),"\n",(0,i.jsx)(r.Z,{name:"input-readonly",hideInitalCodePreview:!0,examplesByName:!0}),"\n",(0,i.jsx)(t.h3,{id:"with-icon",children:"With icon"}),"\n",(0,i.jsx)(r.Z,{name:"input-with-icon",hideInitalCodePreview:!0,examplesByName:!0}),"\n",(0,i.jsx)(t.h3,{id:"label-placement",children:"Label placement"}),"\n",(0,i.jsx)(r.Z,{name:"input-labels",hideInitalCodePreview:!0,examplesByName:!0}),"\n",(0,i.jsx)(t.h3,{id:"input-types",children:"Input types"}),"\n",(0,i.jsx)(r.Z,{name:"input-types",height:"15rem",hideInitalCodePreview:!0,examplesByName:!0}),"\n",(0,i.jsx)(t.h3,{id:"search",children:"Search"}),"\n",(0,i.jsx)(r.Z,{name:"input-search",hideInitalCodePreview:!0,examplesByName:!0})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>S});const i=300,s="https://stackblitz.com",r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],o=["project","search","ports","settings"],a=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>u("ctl",e),devToolsHeight:e=>p("devtoolsheight",e),forceEmbedLayout:e=>u("embed",e),hideDevTools:e=>u("hidedevtools",e),hideExplorer:e=>u("hideExplorer",e),hideNavigation:e=>u("hideNavigation",e),openFile:e=>h("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>m("sidebarView",e,o),startScript:e=>h("startScript",e),terminalHeight:e=>p("terminalHeight",e),theme:e=>m("theme",e,a),view:e=>m("view",e,c),zenMode:e=>u("zenMode",e)};function d(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function u(e,t){return!0===t?`${e}=1`:""}function p(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function m(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function h(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${w(t)}${e}${d(t)}`}function y(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${w(n)}${e}${d(n)}`}function w(e={}){return("string"==typeof e.origin?e.origin:s).replace(/\/$/,"")}function v(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${i}`,s=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),s?e.setAttribute("width",s):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function $(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function j(e){return e&&!1===e.newWindow?"_self":"_blank"}class x{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,i)=>{const s=f();this.pending[s]={resolve:n,reject:i},this.port.postMessage({type:e,payload:{...t,__reqid:s}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:i,__success:s,__error:r}=n;this.pending[i]&&(s?this.pending[i].resolve(this.cleanResult(n)):this.pending[i].reject(r?`${t}: ${r}`:t),delete this.pending[i])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class E{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new x(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const b=[];class _{constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new E(n[0],t.payload),e(this.vm),s())},i=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function s(){window.clearInterval(o),window.removeEventListener("message",n)}window.addEventListener("message",n),i();let r=0;const o=window.setInterval((()=>{if(this.vm)s();else{if(r>=20)return s(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void b.forEach(((e,t)=>{e.id===this.id&&b.splice(t,1)}));r++,i()}}),500)})),b.push(this)}}const A=e=>{const t=e instanceof Element?"element":"id";return b.find((n=>n[t]===e))??null};function C({template:e,title:t,description:n,dependencies:i,files:s,settings:o}){if(!r.includes(e)){const e=r.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const a=[],c=(e,t,n="")=>{a.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),i&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(i))),o&&c("project[settings]",JSON.stringify(o)),Object.entries(s).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...a),l}function N(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(A(e)??new _(e)).pending}const S={connect:N,embedGithubProject:function(e,t,n){const i=$(e),s=document.createElement("iframe");return s.src=y(`/github/${t}`,n),v(i,s,n),N(s)},embedProject:function(e,t,n){const i=$(e),s=function(e,t){const n=C(e);return n.action=y("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),r=document.createElement("iframe");return v(i,r,n),r.contentDocument?.write(s),N(r)},embedProjectId:function(e,t,n){const i=$(e),s=document.createElement("iframe");return s.src=y(`/edit/${t}`,n),v(i,s,n),N(s)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),i=j(t);window.open(n,i)},openProject:function(e,t){!function(e,t){const n=C(e);n.action=g("/run",t),n.target=j(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),i=j(t);window.open(n,i)}}},69718:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(52147),s=n(57161),r=n(35389),o=n(52983),a=n(17995),c=n(97458);function l(e){const t=(0,r.Z)(),[n]=(0,o.useState)(!1),l=(0,s.Z)("/"),[d,u]=(0,o.useState)(""),[p,m]=(0,o.useState)((0,a.V)(t)),{preferredVersion:h}=(0,i.J)();return(0,o.useEffect)((()=>{const t=h?.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,a.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:p}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},26601:(e,t,n)=>{n.d(t,{Z:()=>A});var i=n(57161),s=n(62278),r=n(63020),o=n(46820),a=n(52983);let c=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});var l=n(69718);const d={Files_Toolbar:"Files_Toolbar_Sh51"};var u=n(14455);function p(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function m(e){const t=s.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}function h(e,t){var n;void 0===t&&(t=!1);const i=e.match(/example-styles\/dist\/(.*\.(css|scss))/);return i&&i.length>1&&(n=i[1]),{source:e=e.replace("example-styles/dist",t?".":"./styles"),styleFileName:n}}async function f(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function g(e,t,n,i){const s={},r={},o=e.map((async e=>{let{filename:o,raw:a}=e;if(o.endsWith(".css"))return;let l=a;if(o===n){i===c.JAVASCRIPT&&(l=m(function(e){return e.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2")}(l)),o="index.html");const{source:e,styleFileName:n}=h(l,i===c.ANGULAR);l=e,n&&(r[`src/${i===c.ANGULAR?"app":"styles"}/${n}`]=(await f([`${t}${n}`]))[0])}s[`src${i===c.ANGULAR?"/app":""}/${o}`]=l}));return await Promise.all(o),{files:s,styleFiles:r}}async function y(e){let{name:t,framework:n,files:i,baseUrl:s,version:r}=e;const o=r||"latest";return n===c.REACT?async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,[s,r,o,a,l,d]=await f([`${i}global.css`,`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),h=t[0],{files:y,styleFiles:w}=await g(t,i,h.filename,c.REACT);u.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...y,...w,"src/styles/global.css":s,"public/index.html":m(o),"src/index.tsx":a,"src/App.tsx":r.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${h.filename.substring(0,h.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":p(l,n),"tsconfig.json":d,".stackblitzrc":'{\n          "startCommand": "npm run start"\n        }'}},{openFile:`src/${h.filename}`})}(s,i,o):n===c.ANGULAR?async function(e,t,n,i){const s=`${e}auto-generated/previews/styles/`,[r,o,a,l,d,h,y,w,v,$]=await f([`${s}global.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),j=n[0],x=[];n.forEach((e=>{let{filename:t,raw:n}=e;/@Component/gms.test(n)&&x.push(t)}));const E=`\n    ${x.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${x.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,{files:b,styleFiles:_}=await g(n,s,j.filename,c.ANGULAR);u.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{...b,..._,"src/app/declare-component.ts":E,"src/app/app.component.html":o,"src/app/app.component.ts":a,"src/app/app.module.ts":l,"src/index.html":m(d),"src/main.ts":h,"src/styles.css":r,"angular.json":y,"package.json":p(w,i),"tsconfig.app.json":v,"tsconfig.json":$}},{openFile:`src/app/${t}.ts`})}(s,t,i,o):n===c.JAVASCRIPT?async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,[s,r,o,a]=await f([`${i}global.css`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),l=t[0],{files:d,styleFiles:m}=await g(t,i,l.filename,c.JAVASCRIPT);u.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...d,...m,"src/styles/global.css":s,"src/main.js":r,"package.json":p(o,n),"vite.config.ts":a}},{openFile:["src/index.html"]})}(s,i,o):n===c.VUE?async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,[s,r,o,a,l,d,h,y]=await f([`${i}global.css`,`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),w=t[0],{files:v,styleFiles:$}=await g(t,i,w.filename,c.VUE);u.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...v,...$,"src/styles/global.css":s,"index.html":m(o),"src/main.ts":a,"src/App.vue":r.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${w.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":y,"package.json":p(l,n),"tsconfig.json":d,"vite.config.ts":h,".stackblitzrc":'{\n          "startCommand": "npm run dev"\n        }'}},{openFile:`src/${w.filename}`})}(s,i,o):void 0}var w=n(35389),v=n(97458);function $(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function j(e,t){const n=e.match(t);if(n&&2===n.length){const[n,i]=e.split(t);return $(i.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function x(e){return h(function(e){const t=j(e,/<!-- Preview code -->/g);if(t){const n=j(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return $(e)}(e),!0).source}async function E(e,t,n){let i="web-components";return t===c.ANGULAR&&(i="angular"),t===c.REACT&&(i="react"),t===c.VUE&&(i="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){console.log("FETCH SOURCE FROM",e);const t=await fetch(`${e}`),n=await t.text();return console.log(n),!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}("css"===b(t)?`${e}/previews/styles/${t}`:`${e}/previews/${i}/${t}`);return n?{filename:t,source:x(n),raw:n}:null}catch(n){console.warn(n)}})))}function b(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":e.endsWith(".css")?"css":void 0}function _(e){const[t,n]=(0,a.useState)(!0),s=(0,i.Z)("/auto-generated"),[l,d]=(0,a.useState)([]),[u,p]=(0,a.useState)(0);return(0,a.useEffect)((()=>{if(e.examplesByName){const t=[];return e.framework===c.ANGULAR&&t.push(`${e.name}.html`,`${e.name}.ts`),e.framework===c.JAVASCRIPT&&t.push(`${e.name}.html`),e.framework===c.REACT&&t.push(`${e.name}.tsx`),e.framework===c.VUE&&t.push(`${e.name}.vue`),e.includeCssFile&&t.push(`${e.name}.css`),n(!0),void E(s,e.framework,t).then((e=>{p(0),d(e.filter((e=>e))),n(!1)}))}if(e.files&&e.files[e.framework]){const t=e.files[e.framework];n(!0),E(s,e.framework,t).then((e=>{p(0),d(e.filter((e=>e))),n(!1)}))}}),[e.framework]),(0,a.useEffect)((()=>{e.onSourceCodeFetched(l)}),[l]),t?(0,v.jsx)(r.lL,{}):0===l.length?(0,v.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"}):1===l.length?(0,v.jsx)(o.Z,{language:b(l[0].filename),children:l[0].source}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r.Vp,{children:l.map(((e,t)=>(0,v.jsx)(r.t3,{onClick:()=>p(t),children:e.filename},e.filename+"."+t)))}),(0,v.jsx)(o.Z,{language:b(l[u].filename),children:l[u].source})]})}function A(e){const[t,n]=(0,a.useState)(c.PREVIEW),o=(0,i.Z)("/"),u=(0,i.Z)("/img"),p=(0,i.Z)("/webcomponent-examples/dist/preview-examples"),[m,h]=(0,a.useState)([]),f=(0,w.Z)().siteConfig.customFields.playgroundVersion,g=t=>!!e.examplesByName||!!e.files[t];return(0,v.jsxs)("div",{children:[(0,v.jsxs)(r.Vp,{children:[(0,v.jsx)(r.t3,{onClick:()=>n(c.PREVIEW),children:"Preview"}),g(c.ANGULAR)&&(0,v.jsx)(r.t3,{onClick:()=>n(c.ANGULAR),children:"Angular"}),g(c.REACT)&&(0,v.jsx)(r.t3,{onClick:()=>n(c.REACT),children:"React"}),g(c.VUE)&&(0,v.jsx)(r.t3,{onClick:()=>n(c.VUE),children:"Vue"}),g(c.JAVASCRIPT)&&(0,v.jsx)(r.t3,{onClick:()=>n(c.JAVASCRIPT),children:"Javascript"}),(0,v.jsx)("div",{className:d.Files_Toolbar,children:t===c.PREVIEW?(0,v.jsx)(r.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const t=s.CT.getCurrentTheme(),n=e.noMargin?"&no-margin=true":"";window.open(`${p}/${e.name}.html?theme=${t}${n}`)}}):(0,v.jsxs)(v.Fragment,{children:[!e.disableStackBlitz&&(0,v.jsx)(r.AN,{ghost:!0,size:"16",icon:`${u}/stackblitz.svg`,onClick:()=>{y({baseUrl:o,files:m,framework:t,name:e.name,version:f})}}),(0,v.jsx)(r.AN,{ghost:!0,size:"16",icon:`${u}/github.svg`,onClick:()=>{window.open(`https://github.com/${function(e){let t="html";return e===c.ANGULAR&&(t="angular"),e===c.REACT&&(t="react"),e===c.VUE&&(t="vue"),`siemens/ix/tree/main/packages/${t}-test-app`}(t)}`)}})]})})]}),t===c.PREVIEW?(0,v.jsx)(l.Z,{...e}):null,t!==c.PREVIEW?(0,v.jsx)(_,{onSourceCodeFetched:e=>h(e),framework:t,name:e.name,files:e.files,includeCssFile:e.includeCssFile,examplesByName:e.examplesByName}):null]})}}}]);