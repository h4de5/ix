"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[45087],{99737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=n(97458),i=n(16436),a=n(91604);const r={},o=void 0,l={id:"auto-generated/ix-card-list/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-card-list/events.md",sourceDirName:"auto-generated/ix-card-list",slug:"/auto-generated/ix-card-list/events",permalink:"/docs/auto-generated/ix-card-list/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-card-list/events.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function u(e){return(0,s.jsx)(a.Z,{attributes:[{name:"collapseChanged",description:"Fire event when the collapse state is changed by the user",definition:[{name:"Detail",value:"boolean"}],tags:[]},{name:"showAllClick",description:"Fire event when the collapse state is changed by the user",definition:[{name:"Detail",value:"{ nativeEvent: MouseEvent; }"}],tags:[]},{name:"showMoreCardClick",description:"Fire event when the show more card is clicked.",definition:[{name:"Detail",value:"{ nativeEvent: MouseEvent; }"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u()}},73345:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=n(97458),i=n(16436),a=n(91604);const r={},o=void 0,l={id:"auto-generated/ix-card-list/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-card-list/props.md",sourceDirName:"auto-generated/ix-card-list",slug:"/auto-generated/ix-card-list/props",permalink:"/docs/auto-generated/ix-card-list/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-card-list/props.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function u(e){return(0,s.jsx)(a.Z,{attributes:[{name:"collapse",description:"Collapse the list",definition:[{name:"Attribute",value:"collapse"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"hideShowAll",description:"Hide the show all button",definition:[{name:"Attribute",value:"hide-show-all"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"2.2.0"}]},{name:"i18nMoreCards",description:"i18n More cards available",definition:[{name:"Attribute",value:"i-1-8n-more-cards"},{name:"Type",value:"string"},{name:"Default",value:"'There are more cards available'"}],tags:[]},{name:"i18nShowAll",description:"i18n Show all button",definition:[{name:"Attribute",value:"i-1-8n-show-all"},{name:"Type",value:"string"},{name:"Default",value:"'Show all'"}],tags:[]},{name:"label",description:"Name the card list",definition:[{name:"Attribute",value:"label"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"listStyle",description:"List style",definition:[{name:"Attribute",value:"list-style"},{name:"Type",value:'"scroll" \uff5c "stack"'},{name:"Default",value:"'stack'"}],tags:[]},{name:"showAllCount",description:"Overwrite the default show all count.",definition:[{name:"Attribute",value:"show-all-count"},{name:"Type",value:"number"},{name:"Default"}],tags:[]},{name:"suppressOverflowHandling",description:"Suppress the overflow handling of child elements",definition:[{name:"Attribute",value:"suppress-overflow-handling"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u()}},26050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(97458),i=n(16436);const a={},r=void 0,o={id:"auto-generated/ix-card-list/tags",title:"tags",description:"Since: 1.6.0",source:"@site/docs/auto-generated/ix-card-list/tags.md",sourceDirName:"auto-generated/ix-card-list",slug:"/auto-generated/ix-card-list/tags",permalink:"/docs/auto-generated/ix-card-list/tags",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-card-list/tags.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function d(e){return(0,s.jsx)("span",{className:"Api__Table Docs__Tag",children:"Since: 1.6.0"})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d()}},1147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>g,default:()=>j,frontMatter:()=>p,metadata:()=>f,toc:()=>v});var s=n(97458),i=n(16436),a=n(80235);function r(e){const t={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Card lists are UI controls that display a large number of cards or items of the same type in a lightweight, grouped manner. Users can hide and reveal the card list content by clicking on a control element. We typically use card lists on dashboards to show a huge amount of information in an organized and hierarchical way."}),"\n",(0,s.jsx)(t.p,{children:"Card lists consist of a header section at the top and a content section below. The header section includes an icon button with a chevron on the left, followed by the card list's label. In the content section, items of the same type can be arranged in two different layout styles: stack and scroll."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_897_31906.png",alt:"Card list overview"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Header section"}),"\n",(0,s.jsx)(t.li,{children:"Content section"}),"\n",(0,s.jsx)(t.li,{children:'"Show all" button'}),"\n",(0,s.jsx)(t.li,{children:'"Show more" card'}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"types",children:"Types"}),"\n",(0,s.jsx)(t.p,{children:"The stack card list style displays content items from left to right next to each other and wraps them into a new line when space runs out. This means the height of the section can dynamically change."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_910_8581.png",alt:"Card list - stack style"})}),"\n",(0,s.jsx)(t.p,{children:"The scroll card list style displays the content items from left to right next to each other in a single row. When the space runs out, horizontal scrolling is enabled, indicated by a semi-transparent area on the left or right end of the content section."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_915_8647.png",alt:"Card list - scroll style"})}),"\n",(0,s.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Label"}),": Card lists can include a label in the header section. The label is positioned right next to the chevron."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Collapse"}),": By default, the card list is expanded, but this can be customized to suit your specific needs."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Max visible cards"}),': By default, the card list displays a maximum of 12 items. If more items are available, a "Show more" card is displayed.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Show all button"}),": The header section can contain a button that triggers the action to show all card list items. Typically, these items are shown on a new page."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"String - Show all"}),': By default, the button to display all items is labeled "Show all".']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Show all count"}),': This represents the total number of card list items. This value is displayed on the "Show all" button.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"String - More cards"}),': By default, the card used to indicate when there are more items available is labeled "There are more cards available".']}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"behavior-in-context",children:"Behavior in context"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Interaction"}),": Users expand and collapse card list content by clicking on the icon button with the chevron in the header section. When the card list is expanded, content below the card list is pushed downwards."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:'"Show all" button'}),':  Sometimes card lists only need to show the most important or most recent items. Clicking on the "Show all" button in the header section shows all items. Typically, these items are displayed on a new page.']}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:'"Show more" card'}),': The number of visible items inside a list can be limited to reduce the user\'s cognitive load. The "Show more" card indicates  that more information is available. Selecting the card either displays the next chunk of items or shows all items on a new page, similar to the "Show all" button pattern.']}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"dos-and-donts",children:"Dos and don'ts"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Do keep cards and items within card lists the same size"}),"\n",(0,s.jsx)(t.li,{children:"Don't place different types of components within card lists"}),"\n",(0,s.jsx)(t.li,{children:"Don't nest card lists within each other"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"related-patterns",children:"Related patterns:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/controls/blind",children:"Blind"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/controls/card",children:"Card"})}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}var l=n(26601),c=n(26050),d=n(73345),u=n(99737);c.toc,d.toc,u.toc;function m(e){const t={h2:"h2",h3:"h3",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"card-list-ix-card-list",children:"Card List (ix-card-list)"}),"\n",(0,s.jsx)(c.default,{}),"\n",(0,s.jsx)(l.Z,{height:"40rem",name:"card-list",examplesByName:!0}),"\n",(0,s.jsx)(t.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(d.default,{}),"\n",(0,s.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,s.jsx)(u.default,{})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}const p={title:"Card list"},g="Card list",f={id:"controls/card-list",title:"Card list",description:"",source:"@site/docs/controls/card-list.md",sourceDirName:"controls",slug:"/controls/card-list",permalink:"/docs/controls/card-list",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/card-list.md",tags:[],version:"current",frontMatter:{title:"Card list"},sidebar:"mySidebar",previous:{title:"Toggle button",permalink:"/docs/controls/buttons/toggle-buttons"},next:{title:"Card",permalink:"/docs/controls/card"}},x={},v=[];function w(e){const t={h1:"h1",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"card-list",children:"Card list"}),"\n",(0,s.jsx)(a.Z,{styleguide:o,code:h})]})}function j(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(w,{...e})}):w(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>S});const s=300,i="https://stackblitz.com",a=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],r=["project","search","ports","settings"],o=["light","dark"],l=["editor","preview"],c={clickToLoad:e=>u("ctl",e),devToolsHeight:e=>m("devtoolsheight",e),forceEmbedLayout:e=>u("embed",e),hideDevTools:e=>u("hidedevtools",e),hideExplorer:e=>u("hideExplorer",e),hideNavigation:e=>u("hideNavigation",e),openFile:e=>p("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>h("sidebarView",e,r),startScript:e=>p("startScript",e),terminalHeight:e=>m("terminalHeight",e),theme:e=>h("theme",e,o),view:e=>h("view",e,l),zenMode:e=>u("zenMode",e)};function d(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&c.hasOwnProperty(e)?c[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function u(e,t){return!0===t?`${e}=1`:""}function m(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function h(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function p(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function g(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function f(e,t){return`${v(t)}${e}${d(t)}`}function x(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${v(n)}${e}${d(n)}`}function v(e={}){return("string"==typeof e.origin?e.origin:i).replace(/\/$/,"")}function w(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${s}`,i=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),i?e.setAttribute("width",i):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function j(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function b(e){return e&&!1===e.newWindow?"_self":"_blank"}class y{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,s)=>{const i=g();this.pending[i]={resolve:n,reject:s},this.port.postMessage({type:e,payload:{...t,__reqid:i}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:s,__success:i,__error:a}=n;this.pending[s]&&(i?this.pending[s].resolve(this.cleanResult(n)):this.pending[s].reject(a?`${t}: ${a}`:t),delete this.pending[s])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class _{constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new y(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const $=[];class E{constructor(e){this.id=g(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new _(n[0],t.payload),e(this.vm),i())},s=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function i(){window.clearInterval(r),window.removeEventListener("message",n)}window.addEventListener("message",n),s();let a=0;const r=window.setInterval((()=>{if(this.vm)i();else{if(a>=20)return i(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void $.forEach(((e,t)=>{e.id===this.id&&$.splice(t,1)}));a++,s()}}),500)})),$.push(this)}}const C=e=>{const t=e instanceof Element?"element":"id";return $.find((n=>n[t]===e))??null};function T({template:e,title:t,description:n,dependencies:s,files:i,settings:r}){if(!a.includes(e)){const e=a.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const o=[],l=(e,t,n="")=>{o.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};l("project[title]",t),"string"==typeof n&&n.length>0&&l("project[description]",n),l("project[template]",e,"javascript"),s&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):l("project[dependencies]",JSON.stringify(s))),r&&l("project[settings]",JSON.stringify(r)),Object.entries(i).forEach((([e,t])=>{l(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const c=document.createElement("form");return c.method="POST",c.setAttribute("style","display:none!important;"),c.append(...o),c}function A(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(C(e)??new E(e)).pending}const S={connect:A,embedGithubProject:function(e,t,n){const s=j(e),i=document.createElement("iframe");return i.src=x(`/github/${t}`,n),w(s,i,n),A(i)},embedProject:function(e,t,n){const s=j(e),i=function(e,t){const n=T(e);return n.action=x("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),a=document.createElement("iframe");return w(s,a,n),a.contentDocument?.write(i),A(a)},embedProjectId:function(e,t,n){const s=j(e),i=document.createElement("iframe");return i.src=x(`/edit/${t}`,n),w(s,i,n),A(i)},openGithubProject:function(e,t){const n=f(`/github/${e}`,t),s=b(t);window.open(n,s)},openProject:function(e,t){!function(e,t){const n=T(e);n.action=f("/run",t),n.target=b(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=f(`/edit/${e}`,t),s=b(t);window.open(n,s)}}},91604:(e,t,n)=>{n.d(t,{Z:()=>r});n(52983);var s=n(76840),i=n(97458);function a(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(s.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(s.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(a,{attribute:e},e.name)))]})}},76840:(e,t,n)=>{n.d(t,{Q:()=>i,h:()=>a});n(52983);var s=n(97458);function i(e){return(0,s.jsxs)("div",{className:"ApiTableTag",children:[(0,s.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,s.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function a(e){return(0,s.jsx)("div",{className:"ApiTableTag",children:(0,s.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},69718:(e,t,n)=>{n.d(t,{Z:()=>c});var s=n(52147),i=n(57161),a=n(35389),r=n(52983),o=n(17995),l=n(97458);function c(e){const t=(0,a.Z)(),[n]=(0,r.useState)(!1),c=(0,i.Z)("/"),[d,u]=(0,r.useState)(""),[m,h]=(0,r.useState)((0,o.V)(t)),{preferredVersion:p}=(0,s.J)();return(0,r.useEffect)((()=>{const t=p?.name;u(void 0===t||"current"===t?c+`webcomponent-examples/dist/preview-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[c,p?.name,e.name]),(0,r.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),h(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,l.jsx)(l.Fragment,{children:n?(0,l.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",p?.name]}):(0,l.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},80235:(e,t,n)=>{n.d(t,{Z:()=>c});var s=n(89716),i=n(14517),a=n(52983),r=n(97458);const o="docusaurus.ix.general.tab";const l=e=>{const[t,n]=(0,a.useState)(function(){const e=window.localStorage.getItem(o);return e&&("styleguide"===(t=e)||"code"===t)?e:"styleguide";var t}()),s=e=>{n(e),function(e){window.localStorage.setItem(o,e)}(e)},i=e[t];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"Docs__Tabs",children:[(0,r.jsx)(d,{name:"UX guidelines",active:"styleguide"===t,onClick:()=>s("styleguide"),children:(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 2C18.0228 2 22.5 6.47715 22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2ZM4.56189 11C5.01314 7.38128 7.88128 4.51314 11.5 4.06189V6H13.5V4.06189C17.1187 4.51314 19.9869 7.38128 20.4381 11H18.5V13H20.4381C19.9869 16.6187 17.1187 19.4869 13.5 19.9381V18H11.5V19.9381C7.88128 19.4869 5.01314 16.6187 4.56189 13H6.5V11H4.56189ZM11 10.5L17.5 7L14 13.5L7.5 17L11 10.5ZM13.5 12C13.5 12.5523 13.0523 13 12.5 13C11.9477 13 11.5 12.5523 11.5 12C11.5 11.4477 11.9477 11 12.5 11C13.0523 11 13.5 11.4477 13.5 12Z"})})}),(0,r.jsx)(d,{name:"Development",active:"code"===t,onClick:()=>s("code"),children:(0,r.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.0168 6.52423L13.0849 6.00659L9.97911 17.5977L11.911 18.1153L15.0168 6.52423ZM7.45711 6.79042L8.87132 8.20463L5.07921 11.9975L8.87132 15.7904L7.45711 17.2046L2.25 11.9975L7.45711 6.79042ZM17.5342 6.79216L16.12 8.20637L19.9121 11.9993L16.12 15.7922L17.5342 17.2064L22.7413 11.9993L17.5342 6.79216Z",fill:"inherit"})})})]}),(0,r.jsx)("div",{className:"Docs__Tabs__Content",children:(0,r.jsx)(i,{})})]})},c=e=>(0,r.jsx)(s.Z,{children:()=>(0,r.jsx)(l,{...e})});function d(e){return(0,r.jsxs)("div",{onClick:e.onClick,className:(0,i.Z)("Doc_Tab",{active:e.active}),children:[e.children,e.name]})}},26601:(e,t,n)=>{n.d(t,{Z:()=>C});var s=n(57161),i=n(62278),a=n(63020),r=n(46820),o=n(52983);let l=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});var c=n(69718);const d={Files_Toolbar:"Files_Toolbar_Sh51"};var u=n(14455);function m(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function h(e){const t=i.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}function p(e,t){var n;void 0===t&&(t=!1);const s=e.match(/example-styles\/dist\/(.*\.(css|scss))/);return s&&s.length>1&&(n=s[1]),{source:e=e.replace("example-styles/dist",t?".":"./styles"),styleFileName:n}}async function g(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function f(e,t,n,s){const i={},a={},r=e.map((async e=>{let{filename:r,raw:o}=e;if(r.endsWith(".css"))return;let c=o;if(r===n){s===l.JAVASCRIPT&&(c=h(function(e){return e.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2")}(c)),r="index.html");const{source:e,styleFileName:n}=p(c,s===l.ANGULAR);c=e,n&&(a[`src/${s===l.ANGULAR?"app":"styles"}/${n}`]=(await g([`${t}${n}`]))[0])}i[`src${s===l.ANGULAR?"/app":""}/${r}`]=c}));return await Promise.all(r),{files:i,styleFiles:a}}async function x(e){let{name:t,framework:n,files:s,baseUrl:i,version:a}=e;const r=a||"latest";return n===l.REACT?async function(e,t,n){const s=`${e}auto-generated/previews/styles/`,[i,a,r,o,c,d]=await g([`${s}global.css`,`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),p=t[0],{files:x,styleFiles:v}=await f(t,s,p.filename,l.REACT);u.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...x,...v,"src/styles/global.css":i,"public/index.html":h(r),"src/index.tsx":o,"src/App.tsx":a.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${p.filename.substring(0,p.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":m(c,n),"tsconfig.json":d,".stackblitzrc":'{\n          "startCommand": "npm run start"\n        }'}},{openFile:`src/${p.filename}`})}(i,s,r):n===l.ANGULAR?async function(e,t,n,s){const i=`${e}auto-generated/previews/styles/`,[a,r,o,c,d,p,x,v,w,j]=await g([`${i}global.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),b=n[0],y=[];n.forEach((e=>{let{filename:t,raw:n}=e;/@Component/gms.test(n)&&y.push(t)}));const _=`\n    ${y.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${y.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,{files:$,styleFiles:E}=await f(n,i,b.filename,l.ANGULAR);u.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{...$,...E,"src/app/declare-component.ts":_,"src/app/app.component.html":r,"src/app/app.component.ts":o,"src/app/app.module.ts":c,"src/index.html":h(d),"src/main.ts":p,"src/styles.css":a,"angular.json":x,"package.json":m(v,s),"tsconfig.app.json":w,"tsconfig.json":j}},{openFile:`src/app/${t}.ts`})}(i,t,s,r):n===l.JAVASCRIPT?async function(e,t,n){const s=`${e}auto-generated/previews/styles/`,[i,a,r,o]=await g([`${s}global.css`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),c=t[0],{files:d,styleFiles:h}=await f(t,s,c.filename,l.JAVASCRIPT);u.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...d,...h,"src/styles/global.css":i,"src/main.js":a,"package.json":m(r,n),"vite.config.ts":o}},{openFile:["src/index.html"]})}(i,s,r):n===l.VUE?async function(e,t,n){const s=`${e}auto-generated/previews/styles/`,[i,a,r,o,c,d,p,x]=await g([`${s}global.css`,`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),v=t[0],{files:w,styleFiles:j}=await f(t,s,v.filename,l.VUE);u.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...w,...j,"src/styles/global.css":i,"index.html":h(r),"src/main.ts":o,"src/App.vue":a.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${v.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":x,"package.json":m(c,n),"tsconfig.json":d,"vite.config.ts":p,".stackblitzrc":'{\n          "startCommand": "npm run dev"\n        }'}},{openFile:`src/${v.filename}`})}(i,s,r):void 0}var v=n(35389),w=n(97458);function j(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function b(e,t){const n=e.match(t);if(n&&2===n.length){const[n,s]=e.split(t);return j(s.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function y(e){return p(function(e){const t=b(e,/<!-- Preview code -->/g);if(t){const n=b(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return j(e)}(e),!0).source}async function _(e,t,n){let s="web-components";return t===l.ANGULAR&&(s="angular"),t===l.REACT&&(s="react"),t===l.VUE&&(s="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){console.log("FETCH SOURCE FROM",e);const t=await fetch(`${e}`),n=await t.text();return console.log(n),!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}("css"===$(t)?`${e}/previews/styles/${t}`:`${e}/previews/${s}/${t}`);return n?{filename:t,source:y(n),raw:n}:null}catch(n){console.warn(n)}})))}function $(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":e.endsWith(".css")?"css":void 0}function E(e){const[t,n]=(0,o.useState)(!0),i=(0,s.Z)("/auto-generated"),[c,d]=(0,o.useState)([]),[u,m]=(0,o.useState)(0);return(0,o.useEffect)((()=>{if(e.examplesByName){const t=[];return e.framework===l.ANGULAR&&t.push(`${e.name}.html`,`${e.name}.ts`),e.framework===l.JAVASCRIPT&&t.push(`${e.name}.html`),e.framework===l.REACT&&t.push(`${e.name}.tsx`),e.framework===l.VUE&&t.push(`${e.name}.vue`),e.includeCssFile&&t.push(`${e.name}.css`),n(!0),void _(i,e.framework,t).then((e=>{m(0),d(e.filter((e=>e))),n(!1)}))}if(e.files&&e.files[e.framework]){const t=e.files[e.framework];n(!0),_(i,e.framework,t).then((e=>{m(0),d(e.filter((e=>e))),n(!1)}))}}),[e.framework]),(0,o.useEffect)((()=>{e.onSourceCodeFetched(c)}),[c]),t?(0,w.jsx)(a.lL,{}):0===c.length?(0,w.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"}):1===c.length?(0,w.jsx)(r.Z,{language:$(c[0].filename),children:c[0].source}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(a.Vp,{children:c.map(((e,t)=>(0,w.jsx)(a.t3,{onClick:()=>m(t),children:e.filename},e.filename+"."+t)))}),(0,w.jsx)(r.Z,{language:$(c[u].filename),children:c[u].source})]})}function C(e){const[t,n]=(0,o.useState)(l.PREVIEW),r=(0,s.Z)("/"),u=(0,s.Z)("/img"),m=(0,s.Z)("/webcomponent-examples/dist/preview-examples"),[h,p]=(0,o.useState)([]),g=(0,v.Z)().siteConfig.customFields.playgroundVersion,f=t=>!!e.examplesByName||!!e.files[t];return(0,w.jsxs)("div",{children:[(0,w.jsxs)(a.Vp,{children:[(0,w.jsx)(a.t3,{onClick:()=>n(l.PREVIEW),children:"Preview"}),f(l.ANGULAR)&&(0,w.jsx)(a.t3,{onClick:()=>n(l.ANGULAR),children:"Angular"}),f(l.REACT)&&(0,w.jsx)(a.t3,{onClick:()=>n(l.REACT),children:"React"}),f(l.VUE)&&(0,w.jsx)(a.t3,{onClick:()=>n(l.VUE),children:"Vue"}),f(l.JAVASCRIPT)&&(0,w.jsx)(a.t3,{onClick:()=>n(l.JAVASCRIPT),children:"Javascript"}),(0,w.jsx)("div",{className:d.Files_Toolbar,children:t===l.PREVIEW?(0,w.jsx)(a.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const t=i.CT.getCurrentTheme(),n=e.noMargin?"&no-margin=true":"";window.open(`${m}/${e.name}.html?theme=${t}${n}`)}}):(0,w.jsxs)(w.Fragment,{children:[!e.disableStackBlitz&&(0,w.jsx)(a.AN,{ghost:!0,size:"16",icon:`${u}/stackblitz.svg`,onClick:()=>{x({baseUrl:r,files:h,framework:t,name:e.name,version:g})}}),(0,w.jsx)(a.AN,{ghost:!0,size:"16",icon:`${u}/github.svg`,onClick:()=>{window.open(`https://github.com/${function(e){let t="html";return e===l.ANGULAR&&(t="angular"),e===l.REACT&&(t="react"),e===l.VUE&&(t="vue"),`siemens/ix/tree/main/packages/${t}-test-app`}(t)}`)}})]})})]}),t===l.PREVIEW?(0,w.jsx)(c.Z,{...e}):null,t!==l.PREVIEW?(0,w.jsx)(E,{onSourceCodeFetched:e=>p(e),framework:t,name:e.name,files:e.files,includeCssFile:e.includeCssFile,examplesByName:e.examplesByName}):null]})}}}]);