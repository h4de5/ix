"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[85927],{52143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var s=n(97458),i=n(16436),r=n(26601);const o={},a="Checkbox",c={id:"controls/checkbox",title:"Checkbox",description:"Usage",source:"@site/docs/controls/checkbox.md",sourceDirName:"controls",slug:"/controls/checkbox",permalink:"/docs/controls/checkbox",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/checkbox.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"ECharts",permalink:"/docs/controls/charts/"},next:{title:"Chip",permalink:"/docs/controls/chip"}},l={},d=[{value:"Usage",id:"usage",level:2},{value:"Indeterminate",id:"indeterminate",level:3}];function u(e){const t={h1:"h1",h2:"h2",h3:"h3",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"checkbox",children:"Checkbox"}),"\n",(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(r.Z,{name:"checkbox",height:"8rem",examplesByName:!0}),"\n",(0,s.jsx)(t.h3,{id:"indeterminate",children:"Indeterminate"}),"\n",(0,s.jsx)(r.Z,{name:"checkbox-indeterminate",height:"8rem",hideInitalCodePreview:!0,examplesByName:!0})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>k});const s=300,i="https://stackblitz.com",r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],o=["project","search","ports","settings"],a=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>u("ctl",e),devToolsHeight:e=>p("devtoolsheight",e),forceEmbedLayout:e=>u("embed",e),hideDevTools:e=>u("hidedevtools",e),hideExplorer:e=>u("hideExplorer",e),hideNavigation:e=>u("hideNavigation",e),openFile:e=>h("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>m("sidebarView",e,o),startScript:e=>h("startScript",e),terminalHeight:e=>p("terminalHeight",e),theme:e=>m("theme",e,a),view:e=>m("view",e,c),zenMode:e=>u("zenMode",e)};function d(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function u(e,t){return!0===t?`${e}=1`:""}function p(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function m(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function h(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${y(t)}${e}${d(t)}`}function w(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${y(n)}${e}${d(n)}`}function y(e={}){return("string"==typeof e.origin?e.origin:i).replace(/\/$/,"")}function $(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${s}`,i=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),i?e.setAttribute("width",i):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function v(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function E(e){return e&&!1===e.newWindow?"_self":"_blank"}class b{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,s)=>{const i=f();this.pending[i]={resolve:n,reject:s},this.port.postMessage({type:e,payload:{...t,__reqid:i}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:s,__success:i,__error:r}=n;this.pending[s]&&(i?this.pending[s].resolve(this.cleanResult(n)):this.pending[s].reject(r?`${t}: ${r}`:t),delete this.pending[s])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class x{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new b(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const j=[];class _{constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new x(n[0],t.payload),e(this.vm),i())},s=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(o),window.removeEventListener("message",n)}window.addEventListener("message",n),s();let r=0;const o=window.setInterval((()=>{if(this.vm)i();else{if(r>=20)return i(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void j.forEach(((e,t)=>{e.id===this.id&&j.splice(t,1)}));r++,s()}}),500)})),j.push(this)}}const A=e=>{const t=e instanceof Element?"element":"id";return j.find((n=>n[t]===e))??null};function C({template:e,title:t,description:n,dependencies:s,files:i,settings:o}){if(!r.includes(e)){const e=r.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const a=[],c=(e,t,n="")=>{a.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),s&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(s))),o&&c("project[settings]",JSON.stringify(o)),Object.entries(i).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...a),l}function S(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(A(e)??new _(e)).pending}const k={connect:S,embedGithubProject:function(e,t,n){const s=v(e),i=document.createElement("iframe");return i.src=w(`/github/${t}`,n),$(s,i,n),S(i)},embedProject:function(e,t,n){const s=v(e),i=function(e,t){const n=C(e);return n.action=w("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),r=document.createElement("iframe");return $(s,r,n),r.contentDocument?.write(i),S(r)},embedProjectId:function(e,t,n){const s=v(e),i=document.createElement("iframe");return i.src=w(`/edit/${t}`,n),$(s,i,n),S(i)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),s=E(t);window.open(n,s)},openProject:function(e,t){!function(e,t){const n=C(e);n.action=g("/run",t),n.target=E(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),s=E(t);window.open(n,s)}}},69718:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(52147),i=n(57161),r=n(35389),o=n(52983),a=n(17995),c=n(97458);function l(e){const t=(0,r.Z)(),[n]=(0,o.useState)(!1),l=(0,i.Z)("/"),[d,u]=(0,o.useState)(""),[p,m]=(0,o.useState)((0,a.V)(t)),{preferredVersion:h}=(0,s.J)();return(0,o.useEffect)((()=>{const t=h?.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,a.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:p}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},26601:(e,t,n)=>{n.d(t,{Z:()=>A});var s=n(57161),i=n(62278),r=n(63020),o=n(46820),a=n(52983);let c=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});var l=n(69718);const d={Files_Toolbar:"Files_Toolbar_Sh51"};var u=n(14455);function p(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function m(e){const t=i.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}function h(e,t){var n;void 0===t&&(t=!1);const s=e.match(/example-styles\/dist\/(.*\.(css|scss))/);return s&&s.length>1&&(n=s[1]),{source:e=e.replace("example-styles/dist",t?".":"./styles"),styleFileName:n}}async function f(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function g(e,t,n,s){const i={},r={},o=e.map((async e=>{let{filename:o,raw:a}=e;if(o.endsWith(".css"))return;let l=a;if(o===n){s===c.JAVASCRIPT&&(l=m(function(e){return e.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2")}(l)),o="index.html");const{source:e,styleFileName:n}=h(l,s===c.ANGULAR);l=e,n&&(r[`src/${s===c.ANGULAR?"app":"styles"}/${n}`]=(await f([`${t}${n}`]))[0])}i[`src${s===c.ANGULAR?"/app":""}/${o}`]=l}));return await Promise.all(o),{files:i,styleFiles:r}}async function w(e){let{name:t,framework:n,files:s,baseUrl:i,version:r}=e;const o=r||"latest";return n===c.REACT?async function(e,t,n){const s=`${e}auto-generated/previews/styles/`,[i,r,o,a,l,d]=await f([`${s}global.css`,`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),h=t[0],{files:w,styleFiles:y}=await g(t,s,h.filename,c.REACT);u.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...w,...y,"src/styles/global.css":i,"public/index.html":m(o),"src/index.tsx":a,"src/App.tsx":r.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${h.filename.substring(0,h.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":p(l,n),"tsconfig.json":d,".stackblitzrc":'{\n          "startCommand": "npm run start"\n        }'}},{openFile:`src/${h.filename}`})}(i,s,o):n===c.ANGULAR?async function(e,t,n,s){const i=`${e}auto-generated/previews/styles/`,[r,o,a,l,d,h,w,y,$,v]=await f([`${i}global.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),E=n[0],b=[];n.forEach((e=>{let{filename:t,raw:n}=e;/@Component/gms.test(n)&&b.push(t)}));const x=`\n    ${b.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${b.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,{files:j,styleFiles:_}=await g(n,i,E.filename,c.ANGULAR);u.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{...j,..._,"src/app/declare-component.ts":x,"src/app/app.component.html":o,"src/app/app.component.ts":a,"src/app/app.module.ts":l,"src/index.html":m(d),"src/main.ts":h,"src/styles.css":r,"angular.json":w,"package.json":p(y,s),"tsconfig.app.json":$,"tsconfig.json":v}},{openFile:`src/app/${t}.ts`})}(i,t,s,o):n===c.JAVASCRIPT?async function(e,t,n){const s=`${e}auto-generated/previews/styles/`,[i,r,o,a]=await f([`${s}global.css`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),l=t[0],{files:d,styleFiles:m}=await g(t,s,l.filename,c.JAVASCRIPT);u.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...d,...m,"src/styles/global.css":i,"src/main.js":r,"package.json":p(o,n),"vite.config.ts":a}},{openFile:["src/index.html"]})}(i,s,o):n===c.VUE?async function(e,t,n){const s=`${e}auto-generated/previews/styles/`,[i,r,o,a,l,d,h,w]=await f([`${s}global.css`,`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),y=t[0],{files:$,styleFiles:v}=await g(t,s,y.filename,c.VUE);u.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...$,...v,"src/styles/global.css":i,"index.html":m(o),"src/main.ts":a,"src/App.vue":r.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${y.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":w,"package.json":p(l,n),"tsconfig.json":d,"vite.config.ts":h,".stackblitzrc":'{\n          "startCommand": "npm run dev"\n        }'}},{openFile:`src/${y.filename}`})}(i,s,o):void 0}var y=n(35389),$=n(97458);function v(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function E(e,t){const n=e.match(t);if(n&&2===n.length){const[n,s]=e.split(t);return v(s.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function b(e){return h(function(e){const t=E(e,/<!-- Preview code -->/g);if(t){const n=E(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return v(e)}(e),!0).source}async function x(e,t,n){let s="web-components";return t===c.ANGULAR&&(s="angular"),t===c.REACT&&(s="react"),t===c.VUE&&(s="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){console.log("FETCH SOURCE FROM",e);const t=await fetch(`${e}`),n=await t.text();return console.log(n),!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}("css"===j(t)?`${e}/previews/styles/${t}`:`${e}/previews/${s}/${t}`);return n?{filename:t,source:b(n),raw:n}:null}catch(n){console.warn(n)}})))}function j(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":e.endsWith(".css")?"css":void 0}function _(e){const[t,n]=(0,a.useState)(!0),i=(0,s.Z)("/auto-generated"),[l,d]=(0,a.useState)([]),[u,p]=(0,a.useState)(0);return(0,a.useEffect)((()=>{if(e.examplesByName){const t=[];return e.framework===c.ANGULAR&&t.push(`${e.name}.html`,`${e.name}.ts`),e.framework===c.JAVASCRIPT&&t.push(`${e.name}.html`),e.framework===c.REACT&&t.push(`${e.name}.tsx`),e.framework===c.VUE&&t.push(`${e.name}.vue`),e.includeCssFile&&t.push(`${e.name}.css`),n(!0),void x(i,e.framework,t).then((e=>{p(0),d(e.filter((e=>e))),n(!1)}))}if(e.files&&e.files[e.framework]){const t=e.files[e.framework];n(!0),x(i,e.framework,t).then((e=>{p(0),d(e.filter((e=>e))),n(!1)}))}}),[e.framework]),(0,a.useEffect)((()=>{e.onSourceCodeFetched(l)}),[l]),t?(0,$.jsx)(r.lL,{}):0===l.length?(0,$.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"}):1===l.length?(0,$.jsx)(o.Z,{language:j(l[0].filename),children:l[0].source}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(r.Vp,{children:l.map(((e,t)=>(0,$.jsx)(r.t3,{onClick:()=>p(t),children:e.filename},e.filename+"."+t)))}),(0,$.jsx)(o.Z,{language:j(l[u].filename),children:l[u].source})]})}function A(e){const[t,n]=(0,a.useState)(c.PREVIEW),o=(0,s.Z)("/"),u=(0,s.Z)("/img"),p=(0,s.Z)("/webcomponent-examples/dist/preview-examples"),[m,h]=(0,a.useState)([]),f=(0,y.Z)().siteConfig.customFields.playgroundVersion,g=t=>!!e.examplesByName||!!e.files[t];return(0,$.jsxs)("div",{children:[(0,$.jsxs)(r.Vp,{children:[(0,$.jsx)(r.t3,{onClick:()=>n(c.PREVIEW),children:"Preview"}),g(c.ANGULAR)&&(0,$.jsx)(r.t3,{onClick:()=>n(c.ANGULAR),children:"Angular"}),g(c.REACT)&&(0,$.jsx)(r.t3,{onClick:()=>n(c.REACT),children:"React"}),g(c.VUE)&&(0,$.jsx)(r.t3,{onClick:()=>n(c.VUE),children:"Vue"}),g(c.JAVASCRIPT)&&(0,$.jsx)(r.t3,{onClick:()=>n(c.JAVASCRIPT),children:"Javascript"}),(0,$.jsx)("div",{className:d.Files_Toolbar,children:t===c.PREVIEW?(0,$.jsx)(r.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const t=i.CT.getCurrentTheme(),n=e.noMargin?"&no-margin=true":"";window.open(`${p}/${e.name}.html?theme=${t}${n}`)}}):(0,$.jsxs)($.Fragment,{children:[!e.disableStackBlitz&&(0,$.jsx)(r.AN,{ghost:!0,size:"16",icon:`${u}/stackblitz.svg`,onClick:()=>{w({baseUrl:o,files:m,framework:t,name:e.name,version:f})}}),(0,$.jsx)(r.AN,{ghost:!0,size:"16",icon:`${u}/github.svg`,onClick:()=>{window.open(`https://github.com/${function(e){let t="html";return e===c.ANGULAR&&(t="angular"),e===c.REACT&&(t="react"),e===c.VUE&&(t="vue"),`siemens/ix/tree/main/packages/${t}-test-app`}(t)}`)}})]})})]}),t===c.PREVIEW?(0,$.jsx)(l.Z,{...e}):null,t!==c.PREVIEW?(0,$.jsx)(_,{onSourceCodeFetched:e=>h(e),framework:t,name:e.name,files:e.files,includeCssFile:e.includeCssFile,examplesByName:e.examplesByName}):null]})}}}]);