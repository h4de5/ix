"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68515],{42017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(97458),i=n(16436),a=n(91604);const s={},o=void 0,c={id:"auto-generated/ix-drawer/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-drawer/events.md",sourceDirName:"auto-generated/ix-drawer",slug:"/auto-generated/ix-drawer/events",permalink:"/docs/auto-generated/ix-drawer/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-drawer/events.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function u(e){return(0,r.jsx)(a.Z,{attributes:[{name:"drawerClose",description:"Fire event after drawer is close",definition:[{name:"Detail",value:"any"}],tags:[]},{name:"open",description:"Fire event after drawer is open",definition:[{name:"Detail",value:"any"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},47110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(97458),i=n(16436),a=n(91604);const s={},o=void 0,c={id:"auto-generated/ix-drawer/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-drawer/props.md",sourceDirName:"auto-generated/ix-drawer",slug:"/auto-generated/ix-drawer/props",permalink:"/docs/auto-generated/ix-drawer/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-drawer/props.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function u(e){return(0,r.jsx)(a.Z,{attributes:[{name:"closeOnClickOutside",description:"Fired in case of an outside click during drawer showed state",definition:[{name:"Attribute",value:"close-on-click-outside"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"fullHeight",description:"Render the drawer with maximum height",definition:[{name:"Attribute",value:"full-height"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"maxWidth",description:"Max width interpreted as REM",definition:[{name:"Attribute",value:"max-width"},{name:"Type",value:"number"},{name:"Default",value:"28"}],tags:[]},{name:"minWidth",description:"Min width interpreted as REM",definition:[{name:"Attribute",value:"min-width"},{name:"Type",value:"number"},{name:"Default",value:"16"}],tags:[]},{name:"show",description:"Show or hide the drawer",definition:[{name:"Attribute",value:"show"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"width",description:"Width interpreted as REM if not set to 'auto'",definition:[{name:"Attribute",value:"width"},{name:"Type",value:'"auto" \uff5c number'},{name:"Default",value:"this.minWidth"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u()}},98666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=n(97458),i=n(16436),a=n(1541),s=n(47110),o=n(42017);const c={},l="Drawer",d={id:"controls/drawer",title:"Drawer",description:"Usage",source:"@site/docs/controls/drawer.md",sourceDirName:"controls",slug:"/controls/drawer",permalink:"/docs/controls/drawer",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/drawer.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Date time picker",permalink:"/docs/controls/date-time-picker"},next:{title:"Dropdown",permalink:"/docs/controls/dropdown"}},u={},m=[{value:"Usage",id:"usage",level:2},{value:"Auto height",id:"auto-height",level:3},{value:"Properties",id:"properties",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3}];function p(e){const t={h1:"h1",h2:"h2",h3:"h3",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"drawer",children:"Drawer"}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(a.Z,{name:"drawer-full-height",height:"24rem",examplesByName:!0}),"\n",(0,r.jsx)(t.h3,{id:"auto-height",children:"Auto height"}),"\n",(0,r.jsx)(a.Z,{name:"drawer",height:"24rem",hideInitalCodePreview:!0,examplesByName:!0}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,r.jsx)(s.default,{}),"\n",(0,r.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,r.jsx)(o.default,{})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>S});const r=300,i="https://stackblitz.com",a=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],s=["project","search","ports","settings"],o=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>u("ctl",e),devToolsHeight:e=>m("devtoolsheight",e),forceEmbedLayout:e=>u("embed",e),hideDevTools:e=>u("hidedevtools",e),hideExplorer:e=>u("hideExplorer",e),hideNavigation:e=>u("hideNavigation",e),openFile:e=>h("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>p("sidebarView",e,s),startScript:e=>h("startScript",e),terminalHeight:e=>m("terminalHeight",e),theme:e=>p("theme",e,o),view:e=>p("view",e,c),zenMode:e=>u("zenMode",e)};function d(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function u(e,t){return!0===t?`${e}=1`:""}function m(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function p(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function h(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${w(t)}${e}${d(t)}`}function v(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${w(n)}${e}${d(n)}`}function w(e={}){return("string"==typeof e.origin?e.origin:i).replace(/\/$/,"")}function x(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${r}`,i=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),i?e.setAttribute("width",i):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function j(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function b(e){return e&&!1===e.newWindow?"_self":"_blank"}class y{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,r)=>{const i=f();this.pending[i]={resolve:n,reject:r},this.port.postMessage({type:e,payload:{...t,__reqid:i}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:r,__success:i,__error:a}=n;this.pending[r]&&(i?this.pending[r].resolve(this.cleanResult(n)):this.pending[r].reject(a?`${t}: ${a}`:t),delete this.pending[r])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class E{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new y(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const $=[];class _{constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new E(n[0],t.payload),e(this.vm),i())},r=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(s),window.removeEventListener("message",n)}window.addEventListener("message",n),r();let a=0;const s=window.setInterval((()=>{if(this.vm)i();else{if(a>=20)return i(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void $.forEach(((e,t)=>{e.id===this.id&&$.splice(t,1)}));a++,r()}}),500)})),$.push(this)}}const N=e=>{const t=e instanceof Element?"element":"id";return $.find((n=>n[t]===e))??null};function T({template:e,title:t,description:n,dependencies:r,files:i,settings:s}){if(!a.includes(e)){const e=a.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const o=[],c=(e,t,n="")=>{o.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),r&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(r))),s&&c("project[settings]",JSON.stringify(s)),Object.entries(i).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...o),l}function A(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(N(e)??new _(e)).pending}const S={connect:A,embedGithubProject:function(e,t,n){const r=j(e),i=document.createElement("iframe");return i.src=v(`/github/${t}`,n),x(r,i,n),A(i)},embedProject:function(e,t,n){const r=j(e),i=function(e,t){const n=T(e);return n.action=v("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),a=document.createElement("iframe");return x(r,a,n),a.contentDocument?.write(i),A(a)},embedProjectId:function(e,t,n){const r=j(e),i=document.createElement("iframe");return i.src=v(`/edit/${t}`,n),x(r,i,n),A(i)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),r=b(t);window.open(n,r)},openProject:function(e,t){!function(e,t){const n=T(e);n.action=g("/run",t),n.target=b(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),r=b(t);window.open(n,r)}}},91604:(e,t,n)=>{n.d(t,{Z:()=>s});n(52983);var r=n(76840),i=n(97458);function a(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(r.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(r.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const s=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(a,{attribute:e},e.name)))]})}},76840:(e,t,n)=>{n.d(t,{Q:()=>i,h:()=>a});n(52983);var r=n(97458);function i(e){return(0,r.jsxs)("div",{className:"ApiTableTag",children:[(0,r.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,r.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function a(e){return(0,r.jsx)("div",{className:"ApiTableTag",children:(0,r.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},69718:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(59891),i=n(42603),a=n(77272),s=n(52983),o=n(17995),c=n(97458);function l(e){const t=(0,a.Z)(),[n]=(0,s.useState)(!1),l=(0,i.Z)("/"),[d,u]=(0,s.useState)(""),[m,p]=(0,s.useState)((0,o.V)(t)),{preferredVersion:h}=(0,r.J)();return(0,s.useEffect)((()=>{const t=h?.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,s.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),p(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},1541:(e,t,n)=>{n.d(t,{Z:()=>$});var r=n(42603),i=n(62278),a=n(67498),s=n(13510),o=n(52983);let c=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});var l=n(69718);const d={Files_Toolbar:"Files_Toolbar_Sh51"};var u=n(14455);function m(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function p(e){const t=i.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}async function h(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function f(e){let{name:t,framework:n,files:r,baseUrl:i,version:a}=e;const s=a||"latest";return n===c.REACT?async function(e,t,n){const[r,i,a,s,o]=await h([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[c]=t,l={};t.forEach((e=>{let{filename:t,source:n}=e;l[`src/${t}`]=n})),u.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...l,"public/index.html":p(i),"src/index.tsx":a,"src/App.tsx":r.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${c.filename.substring(0,c.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":m(s,n),"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${c.filename}`})}(i,r,s):n===c.ANGULAR?async function(e,t,n,r){const[i,a,s,o,c,l,d,f,g,v,w]=await h([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),x=[];n.forEach((e=>{let{filename:t,source:n}=e;/@Component/gms.test(n)&&x.push(t)}));const j=`\n    ${x.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${x.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,b={};n.forEach((e=>{let{filename:t,source:n}=e;b[`src/app/${t}`]=n})),u.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":j,"src/app/app.component.css":i,"src/app/app.component.html":a,"src/app/app.component.ts":s,"src/app/app.module.ts":o,"src/index.html":p(c),"src/main.ts":l,"src/styles.css":d,"angular.json":f,"package.json":m(g,r),"tsconfig.app.json":v,"tsconfig.json":w,...b}},{openFile:`src/app/${t}.ts`})}(i,t,r,s):n===c.JAVASCRIPT?async function(e,t,n){const[r,i,a]=await h([`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[s,...o]=t,c={};var l;o.forEach((e=>{c[`src/${e.filename}`]=e.source})),u.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":p((l=s.raw,l.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2"))),"src/main.js":r,"package.json":m(i,n),"vite.config.ts":a}},{openFile:["src/index.html"]})}(i,r,s):n===c.VUE?async function(e,t,n){const[r,i,a,s,o,c,l]=await h([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[d]=t,f={};t.forEach((e=>{let{filename:t,source:n}=e;f[`src/${t}`]=n})),u.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...f,"index.html":p(i),"src/main.ts":a,"src/App.vue":r.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${d.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":l,"package.json":m(s,n),"tsconfig.json":o,"vite.config.ts":c,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${d.filename}`})}(i,r,s):void 0}var g=n(77272),v=n(97458);function w(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function x(e,t){const n=e.match(t);if(n&&2===n.length){const[n,r]=e.split(t);return w(r.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function j(e){const t=x(e,/<!-- Preview code -->/g);if(t){const n=x(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return w(e)}async function b(e,t,n){let r="web-components";return t===c.ANGULAR&&(r="angular"),t===c.REACT&&(r="react"),t===c.VUE&&(r="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){console.log("FETCH SOURCE FROM",e);const t=await fetch(`${e}.txt`),n=await t.text();return console.log(n),!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}(`${e}/previews/${r}/${t}`);return n?{filename:t,source:j(n),raw:n}:null}catch(n){console.warn(n)}})))}function y(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":void 0}function E(e){const[t,n]=(0,o.useState)(!0),i=(0,r.Z)("/auto-generated"),[l,d]=(0,o.useState)([]),[u,m]=(0,o.useState)(0);return(0,o.useEffect)((()=>{if(e.examplesByName){let t=[];return e.framework===c.ANGULAR&&(t=[`${e.name}.ts`,`${e.name}.html`]),e.framework===c.JAVASCRIPT&&(t=[`${e.name}.html`]),e.framework===c.REACT&&(t=[`${e.name}.tsx`]),e.framework===c.VUE&&(t=[`${e.name}.vue`]),n(!0),void b(i,e.framework,t).then((e=>{d(e.filter((e=>e))),n(!1)}))}if(e.files&&e.files[e.framework]){const t=e.files[e.framework];n(!0),b(i,e.framework,t).then((e=>{d(e.filter((e=>e))),n(!1)}))}}),[e.framework]),(0,o.useEffect)((()=>{e.onSourceCodeFetched(l)}),[l]),t?(0,v.jsx)(a.lL,{}):0===l.length?(0,v.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"}):1===l.length?(0,v.jsx)(s.Z,{language:y(l[0].filename),children:l[0].source}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.Vp,{children:l.map(((e,t)=>(0,v.jsx)(a.t3,{onClick:()=>m(t),children:e.filename},e.filename+"."+t)))}),(0,v.jsx)(s.Z,{language:y(l[u].filename),children:l[u].source})]})}function $(e){const[t,n]=(0,o.useState)(c.PREVIEW),s=(0,r.Z)("/"),u=(0,r.Z)("/img"),m=(0,r.Z)("/webcomponent-examples/dist/preview-examples"),[p,h]=(0,o.useState)([]),w=(0,g.Z)().siteConfig.customFields.playgroundVersion,x=t=>!!e.examplesByName||!!e.files[t];return(0,v.jsxs)("div",{children:[(0,v.jsxs)(a.Vp,{children:[(0,v.jsx)(a.t3,{onClick:()=>n(c.PREVIEW),children:"Preview"}),x(c.ANGULAR)&&(0,v.jsx)(a.t3,{onClick:()=>n(c.ANGULAR),children:"Angular"}),x(c.REACT)&&(0,v.jsx)(a.t3,{onClick:()=>n(c.REACT),children:"React"}),x(c.VUE)&&(0,v.jsx)(a.t3,{onClick:()=>n(c.VUE),children:"Vue"}),x(c.JAVASCRIPT)&&(0,v.jsx)(a.t3,{onClick:()=>n(c.JAVASCRIPT),children:"Javascript"}),(0,v.jsx)("div",{className:d.Files_Toolbar,children:t===c.PREVIEW?(0,v.jsx)(a.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const t=i.CT.getCurrentTheme(),n=e.noMargin?"&no-margin=true":"";window.open(`${m}/${e.name}.html?theme=${t}${n}`)}}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(a.AN,{ghost:!0,size:"16",icon:`${u}/stackblitz.svg`,onClick:()=>{f({baseUrl:s,files:p,framework:t,name:e.name,version:w})}}),(0,v.jsx)(a.AN,{ghost:!0,size:"16",icon:`${u}/github.svg`,onClick:()=>{window.open(`https://github.com/${function(e){let t="html";return e===c.ANGULAR&&(t="angular"),e===c.REACT&&(t="react"),e===c.VUE&&(t="vue"),`siemens/ix/tree/main/packages/${t}-test-app`}(t)}`)}})]})})]}),t===c.PREVIEW?(0,v.jsx)(l.Z,{...e}):null,t!==c.PREVIEW?(0,v.jsx)(E,{onSourceCodeFetched:e=>h(e),framework:t,name:e.name,files:e.files,examplesByName:e.examplesByName}):null]})}}}]);