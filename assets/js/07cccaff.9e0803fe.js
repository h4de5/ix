"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[43794],{50187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(97458),r=n(16436),s=n(91604);const o={},a=void 0,c={id:"auto-generated/ix-validation-tooltip/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-validation-tooltip/props.md",sourceDirName:"auto-generated/ix-validation-tooltip",slug:"/auto-generated/ix-validation-tooltip/props",permalink:"/docs/auto-generated/ix-validation-tooltip/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-validation-tooltip/props.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function p(e){return(0,i.jsx)(s.Z,{attributes:[{name:"message",description:"Message of the tooltip",definition:[{name:"Attribute",value:"message"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"placement",description:"Placement of the tooltip",definition:[{name:"Attribute",value:"placement"},{name:"Type",value:'"bottom" \uff5c "left" \uff5c "right" \uff5c "top"'},{name:"Default",value:"'top'"}],tags:[]},{name:"suppressAutomaticPlacement",description:"Suppress the automatic placement of the dropdown.",definition:[{name:"Attribute",value:"suppress-automatic-placement"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"2.0.0"}]}]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p()}},53718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(97458),r=n(16436),s=n(1541),o=n(50187);const a={},c="Form validation",l={id:"controls/validation",title:"Form validation",description:"For the validation @siemens/ix use the validation concept of bootstrap.",source:"@site/docs/controls/validation.md",sourceDirName:"controls",slug:"/controls/validation",permalink:"/docs/controls/validation",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/validation.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Upload",permalink:"/docs/controls/upload"},next:{title:"Workflow",permalink:"/docs/controls/workflow"}},d={},p=[{value:"Preview",id:"preview",level:2},{value:"Properties (Tooltip)",id:"properties-tooltip",level:2},{value:"Props",id:"props",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"form-validation",children:"Form validation"}),"\n",(0,i.jsxs)(t.p,{children:["For the validation ",(0,i.jsx)(t.code,{children:"@siemens/ix"})," use the validation concept of ",(0,i.jsx)(t.a,{href:"https://getbootstrap.com/docs/5.2/forms/validation/",children:"bootstrap"}),".\nThe differences is that the validation tooltip is implemented as ",(0,i.jsx)(t.code,{children:"@siemens/ix"})," ",(0,i.jsx)(t.a,{href:"#properties-tooltip",children:"tooltip"})]}),"\n",(0,i.jsx)(t.p,{children:"In the following preview section you will find different implementation of a forms validation."}),"\n",(0,i.jsx)(t.h2,{id:"preview",children:"Preview"}),"\n",(0,i.jsx)(s.Z,{name:"validation",height:"20rem",examplesByName:!0}),"\n",(0,i.jsx)(t.h2,{id:"properties-tooltip",children:"Properties (Tooltip)"}),"\n",(0,i.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,i.jsx)(o.default,{})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>S});const i=300,r="https://stackblitz.com",s=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],o=["project","search","ports","settings"],a=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>p("ctl",e),devToolsHeight:e=>m("devtoolsheight",e),forceEmbedLayout:e=>p("embed",e),hideDevTools:e=>p("hidedevtools",e),hideExplorer:e=>p("hideExplorer",e),hideNavigation:e=>p("hideNavigation",e),openFile:e=>h("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>u("sidebarView",e,o),startScript:e=>h("startScript",e),terminalHeight:e=>m("terminalHeight",e),theme:e=>u("theme",e,a),view:e=>u("view",e,c),zenMode:e=>p("zenMode",e)};function d(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function p(e,t){return!0===t?`${e}=1`:""}function m(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function u(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function h(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${w(t)}${e}${d(t)}`}function v(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${w(n)}${e}${d(n)}`}function w(e={}){return("string"==typeof e.origin?e.origin:r).replace(/\/$/,"")}function j(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${i}`,r=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),r?e.setAttribute("width",r):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function x(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function b(e){return e&&!1===e.newWindow?"_self":"_blank"}class y{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,i)=>{const r=f();this.pending[r]={resolve:n,reject:i},this.port.postMessage({type:e,payload:{...t,__reqid:r}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:i,__success:r,__error:s}=n;this.pending[i]&&(r?this.pending[i].resolve(this.cleanResult(n)):this.pending[i].reject(s?`${t}: ${s}`:t),delete this.pending[i])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class ${constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new y(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const E=[];class _{constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new $(n[0],t.payload),e(this.vm),r())},i=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function r(){window.clearInterval(o),window.removeEventListener("message",n)}window.addEventListener("message",n),i();let s=0;const o=window.setInterval((()=>{if(this.vm)r();else{if(s>=20)return r(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void E.forEach(((e,t)=>{e.id===this.id&&E.splice(t,1)}));s++,i()}}),500)})),E.push(this)}}const N=e=>{const t=e instanceof Element?"element":"id";return E.find((n=>n[t]===e))??null};function T({template:e,title:t,description:n,dependencies:i,files:r,settings:o}){if(!s.includes(e)){const e=s.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const a=[],c=(e,t,n="")=>{a.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),i&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(i))),o&&c("project[settings]",JSON.stringify(o)),Object.entries(r).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...a),l}function A(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(N(e)??new _(e)).pending}const S={connect:A,embedGithubProject:function(e,t,n){const i=x(e),r=document.createElement("iframe");return r.src=v(`/github/${t}`,n),j(i,r,n),A(r)},embedProject:function(e,t,n){const i=x(e),r=function(e,t){const n=T(e);return n.action=v("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),s=document.createElement("iframe");return j(i,s,n),s.contentDocument?.write(r),A(s)},embedProjectId:function(e,t,n){const i=x(e),r=document.createElement("iframe");return r.src=v(`/edit/${t}`,n),j(i,r,n),A(r)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),i=b(t);window.open(n,i)},openProject:function(e,t){!function(e,t){const n=T(e);n.action=g("/run",t),n.target=b(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),i=b(t);window.open(n,i)}}},91604:(e,t,n)=>{n.d(t,{Z:()=>o});n(52983);var i=n(76840),r=n(97458);function s(e){return(0,r.jsxs)("div",{className:"row with--border",children:[(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,r.jsx)(i.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,r.jsx)(i.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,r.jsx)("div",{className:"col-sm-6",children:(0,r.jsxs)("div",{className:"ApiTable__Content",children:[(0,r.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,r.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,r.jsxs)("div",{className:"row Attribute",children:[(0,r.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,r.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const o=function(e){return(0,r.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,r.jsxs)("div",{className:"row with--border",children:[(0,r.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,r.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,r.jsx)(s,{attribute:e},e.name)))]})}},76840:(e,t,n)=>{n.d(t,{Q:()=>r,h:()=>s});n(52983);var i=n(97458);function r(e){return(0,i.jsxs)("div",{className:"ApiTableTag",children:[(0,i.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,i.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,i.jsx)("div",{className:"ApiTableTag",children:(0,i.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},69718:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(59891),r=n(42603),s=n(77272),o=n(52983),a=n(17995),c=n(97458);function l(e){const t=(0,s.Z)(),[n]=(0,o.useState)(!1),l=(0,r.Z)("/"),[d,p]=(0,o.useState)(""),[m,u]=(0,o.useState)((0,a.V)(t)),{preferredVersion:h}=(0,i.J)();return(0,o.useEffect)((()=>{const t=h?.name;p(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,a.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),u(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},1541:(e,t,n)=>{n.d(t,{Z:()=>E});var i=n(42603),r=n(62278),s=n(67498),o=n(13510),a=n(52983);let c=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});var l=n(69718);const d={Files_Toolbar:"Files_Toolbar_Sh51"};var p=n(14455);function m(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function u(e){const t=r.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}async function h(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function f(e){let{name:t,framework:n,files:i,baseUrl:r,version:s}=e;const o=s||"latest";return n===c.REACT?async function(e,t,n){const[i,r,s,o,a]=await h([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[c]=t,l={};t.forEach((e=>{let{filename:t,source:n}=e;l[`src/${t}`]=n})),p.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...l,"public/index.html":u(r),"src/index.tsx":s,"src/App.tsx":i.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${c.filename.substring(0,c.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":m(o,n),"tsconfig.json":a,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${c.filename}`})}(r,i,o):n===c.ANGULAR?async function(e,t,n,i){const[r,s,o,a,c,l,d,f,g,v,w]=await h([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),j=[];n.forEach((e=>{let{filename:t,source:n}=e;/@Component/gms.test(n)&&j.push(t)}));const x=`\n    ${j.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${j.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,b={};n.forEach((e=>{let{filename:t,source:n}=e;b[`src/app/${t}`]=n})),p.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":x,"src/app/app.component.css":r,"src/app/app.component.html":s,"src/app/app.component.ts":o,"src/app/app.module.ts":a,"src/index.html":u(c),"src/main.ts":l,"src/styles.css":d,"angular.json":f,"package.json":m(g,i),"tsconfig.app.json":v,"tsconfig.json":w,...b}},{openFile:`src/app/${t}.ts`})}(r,t,i,o):n===c.JAVASCRIPT?async function(e,t,n){const[i,r,s]=await h([`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[o,...a]=t,c={};var l;a.forEach((e=>{c[`src/${e.filename}`]=e.source})),p.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":u((l=o.raw,l.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2"))),"src/main.js":i,"package.json":m(r,n),"vite.config.ts":s}},{openFile:["src/index.html"]})}(r,i,o):n===c.VUE?async function(e,t,n){const[i,r,s,o,a,c,l]=await h([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[d]=t,f={};t.forEach((e=>{let{filename:t,source:n}=e;f[`src/${t}`]=n})),p.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...f,"index.html":u(r),"src/main.ts":s,"src/App.vue":i.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${d.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":l,"package.json":m(o,n),"tsconfig.json":a,"vite.config.ts":c,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${d.filename}`})}(r,i,o):void 0}var g=n(77272),v=n(97458);function w(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function j(e,t){const n=e.match(t);if(n&&2===n.length){const[n,i]=e.split(t);return w(i.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function x(e){const t=j(e,/<!-- Preview code -->/g);if(t){const n=j(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return w(e)}async function b(e,t,n){let i="web-components";return t===c.ANGULAR&&(i="angular"),t===c.REACT&&(i="react"),t===c.VUE&&(i="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){console.log("FETCH SOURCE FROM",e);const t=await fetch(`${e}.txt`),n=await t.text();return console.log(n),!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}(`${e}/previews/${i}/${t}`);return n?{filename:t,source:x(n),raw:n}:null}catch(n){console.warn(n)}})))}function y(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":void 0}function $(e){const[t,n]=(0,a.useState)(!0),r=(0,i.Z)("/auto-generated"),[l,d]=(0,a.useState)([]),[p,m]=(0,a.useState)(0);return(0,a.useEffect)((()=>{if(e.examplesByName){let t=[];return e.framework===c.ANGULAR&&(t=[`${e.name}.ts`,`${e.name}.html`]),e.framework===c.JAVASCRIPT&&(t=[`${e.name}.html`]),e.framework===c.REACT&&(t=[`${e.name}.tsx`]),e.framework===c.VUE&&(t=[`${e.name}.vue`]),n(!0),void b(r,e.framework,t).then((e=>{d(e.filter((e=>e))),n(!1)}))}if(e.files&&e.files[e.framework]){const t=e.files[e.framework];n(!0),b(r,e.framework,t).then((e=>{d(e.filter((e=>e))),n(!1)}))}}),[e.framework]),(0,a.useEffect)((()=>{e.onSourceCodeFetched(l)}),[l]),t?(0,v.jsx)(s.lL,{}):0===l.length?(0,v.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"}):1===l.length?(0,v.jsx)(o.Z,{language:y(l[0].filename),children:l[0].source}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s.Vp,{children:l.map(((e,t)=>(0,v.jsx)(s.t3,{onClick:()=>m(t),children:e.filename},e.filename+"."+t)))}),(0,v.jsx)(o.Z,{language:y(l[p].filename),children:l[p].source})]})}function E(e){const[t,n]=(0,a.useState)(c.PREVIEW),o=(0,i.Z)("/"),p=(0,i.Z)("/img"),m=(0,i.Z)("/webcomponent-examples/dist/preview-examples"),[u,h]=(0,a.useState)([]),w=(0,g.Z)().siteConfig.customFields.playgroundVersion,j=t=>!!e.examplesByName||!!e.files[t];return(0,v.jsxs)("div",{children:[(0,v.jsxs)(s.Vp,{children:[(0,v.jsx)(s.t3,{onClick:()=>n(c.PREVIEW),children:"Preview"}),j(c.ANGULAR)&&(0,v.jsx)(s.t3,{onClick:()=>n(c.ANGULAR),children:"Angular"}),j(c.REACT)&&(0,v.jsx)(s.t3,{onClick:()=>n(c.REACT),children:"React"}),j(c.VUE)&&(0,v.jsx)(s.t3,{onClick:()=>n(c.VUE),children:"Vue"}),j(c.JAVASCRIPT)&&(0,v.jsx)(s.t3,{onClick:()=>n(c.JAVASCRIPT),children:"Javascript"}),(0,v.jsx)("div",{className:d.Files_Toolbar,children:t===c.PREVIEW?(0,v.jsx)(s.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const t=r.CT.getCurrentTheme(),n=e.noMargin?"&no-margin=true":"";window.open(`${m}/${e.name}.html?theme=${t}${n}`)}}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s.AN,{ghost:!0,size:"16",icon:`${p}/stackblitz.svg`,onClick:()=>{f({baseUrl:o,files:u,framework:t,name:e.name,version:w})}}),(0,v.jsx)(s.AN,{ghost:!0,size:"16",icon:`${p}/github.svg`,onClick:()=>{window.open(`https://github.com/${function(e){let t="html";return e===c.ANGULAR&&(t="angular"),e===c.REACT&&(t="react"),e===c.VUE&&(t="vue"),`siemens/ix/tree/main/packages/${t}-test-app`}(t)}`)}})]})})]}),t===c.PREVIEW?(0,v.jsx)(l.Z,{...e}):null,t!==c.PREVIEW?(0,v.jsx)($,{onSourceCodeFetched:e=>h(e),framework:t,name:e.name,files:e.files,examplesByName:e.examplesByName}):null]})}}}]);