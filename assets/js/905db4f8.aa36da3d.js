"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80758],{73205:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(97458),i=n(16436),o=n(91604);const r={},a=void 0,c={id:"auto-generated/ix-menu-about-news/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-menu-about-news/events.md",sourceDirName:"auto-generated/ix-menu-about-news",slug:"/auto-generated/ix-menu-about-news/events",permalink:"/docs/auto-generated/ix-menu-about-news/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-about-news/events.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function u(e){return(0,s.jsx)(o.Z,{attributes:[{name:"closePopover",description:"Popover closed",definition:[{name:"Detail",value:"void"}],tags:[]},{name:"showMore",description:"Show More button is pressed",definition:[{name:"Detail",value:"MouseEvent"}],tags:[]}]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u()}},55:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(97458),i=n(16436),o=n(91604);const r={},a=void 0,c={id:"auto-generated/ix-menu-about-news/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-menu-about-news/props.md",sourceDirName:"auto-generated/ix-menu-about-news",slug:"/auto-generated/ix-menu-about-news/props",permalink:"/docs/auto-generated/ix-menu-about-news/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-menu-about-news/props.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function u(e){return(0,s.jsx)(o.Z,{attributes:[{name:"aboutItemLabel",description:"Subtitle of the about news",definition:[{name:"Attribute",value:"about-item-label"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"expanded",description:"Internal",definition:[{name:"Attribute",value:"expanded"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"i18nShowMore",description:"",definition:[{name:"Attribute",value:"i-1-8n-show-more"},{name:"Type",value:"string"},{name:"Default",value:"'Show more'"}],tags:[]},{name:"label",description:"Title of the about news",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"offsetBottom",description:"Bottom offset",definition:[{name:"Attribute",value:"offset-bottom"},{name:"Type",value:"number"},{name:"Default",value:"0"}],tags:[]},{name:"show",description:"Show about news",definition:[{name:"Attribute",value:"show"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]}]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u()}},21117:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>h,default:()=>w,frontMatter:()=>m,metadata:()=>f,toc:()=>v});var s=n(97458),i=n(16436),o=n(80235);function r(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Use the popover news component to present news and information when the application starts like release notes, new app features or marketing-related information. For Siemens applications, provide the information within the ",(0,s.jsx)(t.a,{href:"/docs/controls/application-frame/about-and-legal",children:"About and legal overlay"})," as well."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://www.figma.com/file/wEptRgAezDU1z80Cn3eZ0o/iX-Pattern-Illustrations?type=design&node-id=1013-70517&mode=design&t=Ntzn8IlSOlPey8s5-11",alt:"Popover news"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"(1) Header text"}),"\n",(0,s.jsx)(t.li,{children:"(2) Close button"}),"\n",(0,s.jsx)(t.li,{children:"(3) Content"}),"\n",(0,s.jsx)(t.li,{children:'(4) "Show more" button takes users to another place in the app to learn more about the information given'}),"\n",(0,s.jsx)(t.li,{children:"(5) Spike shows popover origin"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"label:"})," Defines the header text of the popover news (1)|"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"i18nShowMore:"}),' Adjusts the text of the "Show more" button (4) |']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"offsetBottom:"})," Adjusts the popover position. The spike (5) should point to the info icon."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"behavior",children:"Behavior"}),"\n",(0,s.jsxs)(t.p,{children:["Unlike a modal, popover news does not prevent users from navigating and interacting with the content. It only overlays the content partially and appears  once triggered by the app. As soon as the user closes the popover, it does not appear again until it is re-triggered. Therefore we recommend that the information should be additionally available in the ",(0,s.jsx)(t.a,{href:"/docs/controls/application-frame/about-and-legal",children:"About and legal overlay"}),". The popover spike should always point to the information icon so users can find the information again. The ",(0,s.jsx)(t.code,{children:"offsetBottom"})," option can be used to control its exact position."]}),"\n",(0,s.jsx)(t.h2,{id:"dos-and-donts",children:"Dos and Don\u2019ts"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'Do use popover news for "nice to know" information'}),"\n",(0,s.jsxs)(t.li,{children:["Don\u2018t use popover news for essential information a user must read, instead use a ",(0,s.jsx)(t.a,{href:"/docs/controls/modal",children:"modal"})," or a ",(0,s.jsx)(t.a,{href:"/docs/controls/messagebar",children:"message bar"})]}),"\n",(0,s.jsxs)(t.li,{children:["Don\u2018t use popover news for system feedback or messages, instead use a ",(0,s.jsx)(t.a,{href:"/docs/controls/modal",children:"modal"})," or a ",(0,s.jsx)(t.a,{href:"/docs/controls/toast",children:"toast message"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-patterns",children:"Related patterns"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/controls/toast",children:"Toast message"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/controls/modal",children:"Modal"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/controls/messagebar",children:"Message bar"})}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var c=n(1541),l=n(55),d=n(73205);function u(e){const t={h2:"h2",h3:"h3",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(c.Z,{name:"popover-news",height:"30rem",noMargin:!0,examplesByName:!0}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,s.jsx)(l.default,{}),"\n",(0,s.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,s.jsx)(d.default,{})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}const m={sidebar_position:9},h="Popover news",f={id:"controls/application-frame/popover-news",title:"Popover news",description:"",source:"@site/docs/controls/application-frame/popover-news.md",sourceDirName:"controls/application-frame",slug:"/controls/application-frame/popover-news",permalink:"/docs/controls/application-frame/popover-news",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/application-frame/popover-news.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"mySidebar",previous:{title:"Settings overlay",permalink:"/docs/controls/application-frame/settings"},next:{title:"Basic Navigation",permalink:"/docs/controls/application-frame/basic-navigation"}},g={},v=[];function x(e){const t={h1:"h1",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"popover-news",children:"Popover news"}),"\n",(0,s.jsx)(o.Z,{styleguide:a,code:p})]})}function w(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>S});const s=300,i="https://stackblitz.com",o=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],r=["project","search","ports","settings"],a=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>u("ctl",e),devToolsHeight:e=>p("devtoolsheight",e),forceEmbedLayout:e=>u("embed",e),hideDevTools:e=>u("hidedevtools",e),hideExplorer:e=>u("hideExplorer",e),hideNavigation:e=>u("hideNavigation",e),openFile:e=>h("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>m("sidebarView",e,r),startScript:e=>h("startScript",e),terminalHeight:e=>p("terminalHeight",e),theme:e=>m("theme",e,a),view:e=>m("view",e,c),zenMode:e=>u("zenMode",e)};function d(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function u(e,t){return!0===t?`${e}=1`:""}function p(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function m(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function h(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${x(t)}${e}${d(t)}`}function v(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${x(n)}${e}${d(n)}`}function x(e={}){return("string"==typeof e.origin?e.origin:i).replace(/\/$/,"")}function w(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${s}`,i=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),i?e.setAttribute("width",i):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function j(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function b(e){return e&&!1===e.newWindow?"_self":"_blank"}class y{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,s)=>{const i=f();this.pending[i]={resolve:n,reject:s},this.port.postMessage({type:e,payload:{...t,__reqid:i}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:s,__success:i,__error:o}=n;this.pending[s]&&(i?this.pending[s].resolve(this.cleanResult(n)):this.pending[s].reject(o?`${t}: ${o}`:t),delete this.pending[s])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class _{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new y(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const E=[];class ${constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new _(n[0],t.payload),e(this.vm),i())},s=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(r),window.removeEventListener("message",n)}window.addEventListener("message",n),s();let o=0;const r=window.setInterval((()=>{if(this.vm)i();else{if(o>=20)return i(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void E.forEach(((e,t)=>{e.id===this.id&&E.splice(t,1)}));o++,s()}}),500)})),E.push(this)}}const T=e=>{const t=e instanceof Element?"element":"id";return E.find((n=>n[t]===e))??null};function N({template:e,title:t,description:n,dependencies:s,files:i,settings:r}){if(!o.includes(e)){const e=o.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const a=[],c=(e,t,n="")=>{a.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),s&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(s))),r&&c("project[settings]",JSON.stringify(r)),Object.entries(i).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...a),l}function A(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(T(e)??new $(e)).pending}const S={connect:A,embedGithubProject:function(e,t,n){const s=j(e),i=document.createElement("iframe");return i.src=v(`/github/${t}`,n),w(s,i,n),A(i)},embedProject:function(e,t,n){const s=j(e),i=function(e,t){const n=N(e);return n.action=v("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),o=document.createElement("iframe");return w(s,o,n),o.contentDocument?.write(i),A(o)},embedProjectId:function(e,t,n){const s=j(e),i=document.createElement("iframe");return i.src=v(`/edit/${t}`,n),w(s,i,n),A(i)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),s=b(t);window.open(n,s)},openProject:function(e,t){!function(e,t){const n=N(e);n.action=g("/run",t),n.target=b(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),s=b(t);window.open(n,s)}}},91604:(e,t,n)=>{n.d(t,{Z:()=>r});n(52983);var s=n(76840),i=n(97458);function o(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(s.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(s.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(o,{attribute:e},e.name)))]})}},76840:(e,t,n)=>{n.d(t,{Q:()=>i,h:()=>o});n(52983);var s=n(97458);function i(e){return(0,s.jsxs)("div",{className:"ApiTableTag",children:[(0,s.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,s.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function o(e){return(0,s.jsx)("div",{className:"ApiTableTag",children:(0,s.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},69718:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(59891),i=n(42603),o=n(77272),r=n(52983),a=n(17995),c=n(97458);function l(e){const t=(0,o.Z)(),[n]=(0,r.useState)(!1),l=(0,i.Z)("/"),[d,u]=(0,r.useState)(""),[p,m]=(0,r.useState)((0,a.V)(t)),{preferredVersion:h}=(0,s.J)();return(0,r.useEffect)((()=>{const t=h?.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,h?.name,e.name]),(0,r.useLayoutEffect)((()=>{const e=()=>{let e=(0,a.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",h?.name]}):(0,c.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:p}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},80235:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(50756),i=n(14517),o=n(52983),r=n(97458);const a="docusaurus.ix.general.tab";const c=e=>{const[t,n]=(0,o.useState)(function(){const e=window.localStorage.getItem(a);return e&&("styleguide"===(t=e)||"code"===t)?e:"styleguide";var t}()),s=e=>{n(e),function(e){window.localStorage.setItem(a,e)}(e)},i=e[t];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"Docs__Tabs",children:[(0,r.jsx)(d,{name:"UX guidelines",active:"styleguide"===t,onClick:()=>s("styleguide"),children:(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 2C18.0228 2 22.5 6.47715 22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2ZM4.56189 11C5.01314 7.38128 7.88128 4.51314 11.5 4.06189V6H13.5V4.06189C17.1187 4.51314 19.9869 7.38128 20.4381 11H18.5V13H20.4381C19.9869 16.6187 17.1187 19.4869 13.5 19.9381V18H11.5V19.9381C7.88128 19.4869 5.01314 16.6187 4.56189 13H6.5V11H4.56189ZM11 10.5L17.5 7L14 13.5L7.5 17L11 10.5ZM13.5 12C13.5 12.5523 13.0523 13 12.5 13C11.9477 13 11.5 12.5523 11.5 12C11.5 11.4477 11.9477 11 12.5 11C13.0523 11 13.5 11.4477 13.5 12Z"})})}),(0,r.jsx)(d,{name:"Development",active:"code"===t,onClick:()=>s("code"),children:(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.0168 6.52423L13.0849 6.00659L9.97911 17.5977L11.911 18.1153L15.0168 6.52423ZM7.45711 6.79042L8.87132 8.20463L5.07921 11.9975L8.87132 15.7904L7.45711 17.2046L2.25 11.9975L7.45711 6.79042ZM17.5342 6.79216L16.12 8.20637L19.9121 11.9993L16.12 15.7922L17.5342 17.2064L22.7413 11.9993L17.5342 6.79216Z",fill:"inherit"})})})]}),(0,r.jsx)("div",{className:"Docs__Tabs__Content",children:(0,r.jsx)(i,{})})]})},l=e=>(0,r.jsx)(s.Z,{children:()=>(0,r.jsx)(c,{...e})});function d(e){return(0,r.jsxs)("div",{onClick:e.onClick,className:(0,i.Z)("Doc_Tab",{active:e.active}),children:[e.children,e.name]})}},1541:(e,t,n)=>{n.d(t,{Z:()=>E});var s=n(42603),i=n(62278),o=n(67498),r=n(13510),a=n(52983);let c=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});var l=n(69718);const d={Files_Toolbar:"Files_Toolbar_Sh51"};var u=n(14455);function p(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function m(e){const t=i.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}async function h(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function f(e){let{name:t,framework:n,files:s,baseUrl:i,version:o}=e;const r=o||"latest";return n===c.REACT?async function(e,t,n){const[s,i,o,r,a]=await h([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[c]=t,l={};t.forEach((e=>{let{filename:t,source:n}=e;l[`src/${t}`]=n})),u.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...l,"public/index.html":m(i),"src/index.tsx":o,"src/App.tsx":s.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${c.filename.substring(0,c.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":p(r,n),"tsconfig.json":a,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${c.filename}`})}(i,s,r):n===c.ANGULAR?async function(e,t,n,s){const[i,o,r,a,c,l,d,f,g,v,x]=await h([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),w=[];n.forEach((e=>{let{filename:t,source:n}=e;/@Component/gms.test(n)&&w.push(t)}));const j=`\n    ${w.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${w.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,b={};n.forEach((e=>{let{filename:t,source:n}=e;b[`src/app/${t}`]=n})),u.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":j,"src/app/app.component.css":i,"src/app/app.component.html":o,"src/app/app.component.ts":r,"src/app/app.module.ts":a,"src/index.html":m(c),"src/main.ts":l,"src/styles.css":d,"angular.json":f,"package.json":p(g,s),"tsconfig.app.json":v,"tsconfig.json":x,...b}},{openFile:`src/app/${t}.ts`})}(i,t,s,r):n===c.JAVASCRIPT?async function(e,t,n){const[s,i,o]=await h([`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[r,...a]=t,c={};var l;a.forEach((e=>{c[`src/${e.filename}`]=e.source})),u.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...c,"src/index.html":m((l=r.raw,l.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2"))),"src/main.js":s,"package.json":p(i,n),"vite.config.ts":o}},{openFile:["src/index.html"]})}(i,s,r):n===c.VUE?async function(e,t,n){const[s,i,o,r,a,c,l]=await h([`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),[d]=t,f={};t.forEach((e=>{let{filename:t,source:n}=e;f[`src/${t}`]=n})),u.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...f,"index.html":m(i),"src/main.ts":o,"src/App.vue":s.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${d.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":l,"package.json":p(r,n),"tsconfig.json":a,"vite.config.ts":c,".stackblitzrc":'{\n          "startCommand": "yarn run dev"\n        }'}},{openFile:`src/${d.filename}`})}(i,s,r):void 0}var g=n(77272),v=n(97458);function x(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function w(e,t){const n=e.match(t);if(n&&2===n.length){const[n,s]=e.split(t);return x(s.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function j(e){const t=w(e,/<!-- Preview code -->/g);if(t){const n=w(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return x(e)}async function b(e,t,n){let s="web-components";return t===c.ANGULAR&&(s="angular"),t===c.REACT&&(s="react"),t===c.VUE&&(s="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){console.log("FETCH SOURCE FROM",e);const t=await fetch(`${e}.txt`),n=await t.text();return console.log(n),!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}(`${e}/previews/${s}/${t}`);return n?{filename:t,source:j(n),raw:n}:null}catch(n){console.warn(n)}})))}function y(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":void 0}function _(e){const[t,n]=(0,a.useState)(!0),i=(0,s.Z)("/auto-generated"),[l,d]=(0,a.useState)([]),[u,p]=(0,a.useState)(0);return(0,a.useEffect)((()=>{if(e.examplesByName){let t=[];return e.framework===c.ANGULAR&&(t=[`${e.name}.ts`,`${e.name}.html`]),e.framework===c.JAVASCRIPT&&(t=[`${e.name}.html`]),e.framework===c.REACT&&(t=[`${e.name}.tsx`]),e.framework===c.VUE&&(t=[`${e.name}.vue`]),n(!0),void b(i,e.framework,t).then((e=>{d(e.filter((e=>e))),n(!1)}))}if(e.files&&e.files[e.framework]){const t=e.files[e.framework];n(!0),b(i,e.framework,t).then((e=>{d(e.filter((e=>e))),n(!1)}))}}),[e.framework]),(0,a.useEffect)((()=>{e.onSourceCodeFetched(l)}),[l]),t?(0,v.jsx)(o.lL,{}):0===l.length?(0,v.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"}):1===l.length?(0,v.jsx)(r.Z,{language:y(l[0].filename),children:l[0].source}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.Vp,{children:l.map(((e,t)=>(0,v.jsx)(o.t3,{onClick:()=>p(t),children:e.filename},e.filename+"."+t)))}),(0,v.jsx)(r.Z,{language:y(l[u].filename),children:l[u].source})]})}function E(e){const[t,n]=(0,a.useState)(c.PREVIEW),r=(0,s.Z)("/"),u=(0,s.Z)("/img"),p=(0,s.Z)("/webcomponent-examples/dist/preview-examples"),[m,h]=(0,a.useState)([]),x=(0,g.Z)().siteConfig.customFields.playgroundVersion,w=t=>!!e.examplesByName||!!e.files[t];return(0,v.jsxs)("div",{children:[(0,v.jsxs)(o.Vp,{children:[(0,v.jsx)(o.t3,{onClick:()=>n(c.PREVIEW),children:"Preview"}),w(c.ANGULAR)&&(0,v.jsx)(o.t3,{onClick:()=>n(c.ANGULAR),children:"Angular"}),w(c.REACT)&&(0,v.jsx)(o.t3,{onClick:()=>n(c.REACT),children:"React"}),w(c.VUE)&&(0,v.jsx)(o.t3,{onClick:()=>n(c.VUE),children:"Vue"}),w(c.JAVASCRIPT)&&(0,v.jsx)(o.t3,{onClick:()=>n(c.JAVASCRIPT),children:"Javascript"}),(0,v.jsx)("div",{className:d.Files_Toolbar,children:t===c.PREVIEW?(0,v.jsx)(o.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const t=i.CT.getCurrentTheme(),n=e.noMargin?"&no-margin=true":"";window.open(`${p}/${e.name}.html?theme=${t}${n}`)}}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.AN,{ghost:!0,size:"16",icon:`${u}/stackblitz.svg`,onClick:()=>{f({baseUrl:r,files:m,framework:t,name:e.name,version:x})}}),(0,v.jsx)(o.AN,{ghost:!0,size:"16",icon:`${u}/github.svg`,onClick:()=>{window.open(`https://github.com/${function(e){let t="html";return e===c.ANGULAR&&(t="angular"),e===c.REACT&&(t="react"),e===c.VUE&&(t="vue"),`siemens/ix/tree/main/packages/${t}-test-app`}(t)}`)}})]})})]}),t===c.PREVIEW?(0,v.jsx)(l.Z,{...e}):null,t!==c.PREVIEW?(0,v.jsx)(_,{onSourceCodeFetched:e=>h(e),framework:t,name:e.name,files:e.files,examplesByName:e.examplesByName}):null]})}}}]);