"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12465],{55783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(97458),s=n(16436),r=n(91604);const a={},o=void 0,c={id:"auto-generated/ix-chip/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-chip/events.md",sourceDirName:"auto-generated/ix-chip",slug:"/auto-generated/ix-chip/events",permalink:"/docs/auto-generated/ix-chip/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-chip/events.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function u(e){return(0,i.jsx)(r.Z,{attributes:[{name:"closeChip",description:"Fire event if close button is clicked",definition:[{name:"Detail",value:"any"}],tags:[{type:"since",message:"1.5.0"}]}]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},89059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var i=n(97458),s=n(16436),r=n(91604);const a={},o=void 0,c={id:"auto-generated/ix-chip/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-chip/props.md",sourceDirName:"auto-generated/ix-chip",slug:"/auto-generated/ix-chip/props",permalink:"/docs/auto-generated/ix-chip/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-chip/props.md",tags:[],version:"current",frontMatter:{}},l={},d=[];function u(e){return(0,i.jsx)(r.Z,{attributes:[{name:"active",description:"Determines if the chip is interactive. If false no user input (e.g. mouse states, keyboard navigation)\nwill be possible and also the close button will not be present.",definition:[{name:"Attribute",value:"active"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"background",description:"Custom background color.\nOnly has an effect on chips with `variant='custom'`",definition:[{name:"Attribute",value:"background"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"chipColor",description:"Custom font and icon color.\nOnly has an effect on chips with `variant='custom'`",definition:[{name:"Attribute",value:"chip-color"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"closable",description:"Show close icon",definition:[{name:"Attribute",value:"closable"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"color",description:"Custom font and icon color.\nOnly has an effect on chips with `variant='custom'`",definition:[{name:"Attribute",value:"color"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"deprecated",message:"since 2.1.0 use `chip-color`"}]},{name:"icon",description:"Show icon",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"outline",description:"Show chip with outline style",definition:[{name:"Attribute",value:"outline"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"variant",description:"Chip variant",definition:[{name:"Attribute",value:"variant"},{name:"Type",value:'"alarm" \uff5c "critical" \uff5c "custom" \uff5c "info" \uff5c "neutral" \uff5c "primary" \uff5c "success" \uff5c "warning"'},{name:"Default",value:"'primary'"}],tags:[]}]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},20700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>m,default:()=>j,frontMatter:()=>h,metadata:()=>f,toc:()=>v});var i=n(97458),s=n(16436),r=n(80235);function a(e){const t={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Chips are components used to display small pieces of information in a compact and visually appealing way. Typically chips contain a concise label and sometimes an icon, and they are clickable and closable."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_1149_41643.png",alt:"Chip overview"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Container"}),"\n",(0,i.jsx)(t.li,{children:"Label text"}),"\n",(0,i.jsx)(t.li,{children:"Icon"}),"\n",(0,i.jsx)(t.li,{children:"Close button"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"variants",children:"Variants"}),"\n",(0,i.jsx)(t.p,{children:"With our chip variants, you can apply different colors based on their purpose, importance or context. We use chip variants to show class, status and levels of importance. The custom variant is often used for chips that visualize a high number of different categories, but does not permit color specification for hover and active states."}),"\n",(0,i.jsx)(t.p,{children:"Chip variants:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Primary"}),": For high visual emphasis"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"State-related variants"}),": Alarm, critical, warning, success, info and neutral"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Custom"}),": For a customized background and label color"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_1201_9512.png",alt:"Chip variants"})}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Active"}),": Specifies chip interactivity. When set to false, user input such as mouse-over and keyboard navigation are disabled and the close button is not visible."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Background"}),": Use to set a custom background color when you require more flexibility in styling the chip. Only available for the custom chip variant."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Outline"}),": Use for lower visual emphasis."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Closable"}),": When set, the chip contains a close button that removes the entire chip when selected. This feature is only applicable to active chips so users can easily remove specific chips when necessary."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Icon"}),": Chips can include an icon within the element which is positioned before the chip's label."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Color"}),": Customize font and icon color for chip. This allows users to specify a unique font color in combination with a custom background color (only applicable when the variant is set to 'custom')."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Width"}),": Typically content length determines chip width with a minimum width of '2rem'. Chip width can be set to a specific value."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"behavior",children:"Behavior"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Reactive"}),": Chips react or change their appearance or behavior based on user actions. For example, updates occur as a response to system actions, providing real-time information about system changes or events."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Multi-selection"}),": Chips can visualize multi-selection and filter actions. This helps users to easily identify and understand their choices."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Placement"}),": We typically place chips inline with other objects to inform users about their state, within tables or grouped together to show selected options and filters. We do not place chips within input and filter components as these components have similar components already built-in."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Dismiss"}),": When users select close, chips are dismissed from the list or interface and are removed visually."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Text truncation"}),": When a width is set for chips, long labels are truncated to fit the available space."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,i.jsx)(t.p,{children:"Chips take a default, hover, focused or active state with a varying background color. For the custom chip variant, the specified colors for font and background are applied to all states."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/figma/wEptRgAezDU1z80Cn3eZ0o_1246_6190.png",alt:"Chip states"})}),"\n",(0,i.jsx)(t.h2,{id:"dos-and-donts",children:"Dos and Don'ts"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Do use chips to tag and categorize so users can easily organize and filter content"}),"\n",(0,i.jsx)(t.li,{children:"Do ensure proper color contrast between chip background and text/icon with the custom variant to support readability"}),"\n",(0,i.jsx)(t.li,{children:"Do consider chip spacing for easy tapping or selecting with mobiles and desktops"}),"\n",(0,i.jsx)(t.li,{children:"Don't overuse chips as this leads to cluttered and overwhelming interfaces"}),"\n",(0,i.jsx)(t.li,{children:"Don't use different styles for chips with the same or similar use"}),"\n",(0,i.jsx)(t.li,{children:"Don't use chips without any interaction (we recommend pills instead)"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"related-patterns",children:"Related patterns"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"/docs/controls/pill",children:"Pill"})}),"\n"]})]})}function o(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}var c=n(26601),l=n(89059),d=n(55783);l.toc,d.toc;function u(e){const t={h2:"h2",h3:"h3",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(c.Z,{name:"chip",height:"25rem",examplesByName:!0}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(t.h3,{id:"props",children:"Props"}),"\n",(0,i.jsx)(l.default,{}),"\n",(0,i.jsx)(t.h3,{id:"events",children:"Events"}),"\n",(0,i.jsx)(d.default,{})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}const h={},m="Chip",f={id:"controls/chip",title:"Chip",description:"",source:"@site/docs/controls/chip.md",sourceDirName:"controls",slug:"/controls/chip",permalink:"/docs/controls/chip",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/chip.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Checkbox",permalink:"/docs/controls/checkbox"},next:{title:"Content header",permalink:"/docs/controls/content-header"}},g={},v=[];function x(e){const t={h1:"h1",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"chip",children:"Chip"}),"\n",(0,i.jsx)(r.Z,{styleguide:o,code:p})]})}function j(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}},14455:(e,t,n)=>{n.d(t,{Z:()=>N});const i=300,s="https://stackblitz.com",r=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],a=["project","search","ports","settings"],o=["light","dark"],c=["editor","preview"],l={clickToLoad:e=>u("ctl",e),devToolsHeight:e=>p("devtoolsheight",e),forceEmbedLayout:e=>u("embed",e),hideDevTools:e=>u("hidedevtools",e),hideExplorer:e=>u("hideExplorer",e),hideNavigation:e=>u("hideNavigation",e),openFile:e=>m("file",e),showSidebar:e=>function(e,t){if("boolean"==typeof t)return`${e}=${t?"1":"0"}`;return""}("showSidebar",e),sidebarView:e=>h("sidebarView",e,a),startScript:e=>m("startScript",e),terminalHeight:e=>p("terminalHeight",e),theme:e=>h("theme",e,o),view:e=>h("view",e,c),zenMode:e=>u("zenMode",e)};function d(e={}){const t=Object.entries(e).map((([e,t])=>null!=t&&l.hasOwnProperty(e)?l[e](t):"")).filter(Boolean);return t.length?`?${t.join("&")}`:""}function u(e,t){return!0===t?`${e}=1`:""}function p(e,t){if("number"==typeof t&&!Number.isNaN(t)){const n=Math.min(100,Math.max(0,t));return`${e}=${encodeURIComponent(Math.round(n))}`}return""}function h(e,t="",n=[]){return n.includes(t)?`${e}=${encodeURIComponent(t)}`:""}function m(e,t){return(Array.isArray(t)?t:[t]).filter((e=>"string"==typeof e&&""!==e.trim())).map((t=>`${e}=${encodeURIComponent(t)}`)).join("&")}function f(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function g(e,t){return`${x(t)}${e}${d(t)}`}function v(e,t){const n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),`${x(n)}${e}${d(n)}`}function x(e={}){return("string"==typeof e.origin?e.origin:s).replace(/\/$/,"")}function j(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t={}){const n=Object.hasOwnProperty.call(t,"height")?`${t.height}`:`${i}`,s=Object.hasOwnProperty.call(t,"width")?`${t.width}`:void 0;e.setAttribute("height",n),s?e.setAttribute("width",s):e.setAttribute("style","width:100%;")}(t,n),e.replaceWith(t)}function w(e){if("string"==typeof e){const t=document.getElementById(e);if(!t)throw new Error(`Could not find element with id '${e}'`);return t}if(e instanceof HTMLElement)return e;throw new Error(`Invalid element: ${e}`)}function b(e){return e&&!1===e.newWindow?"_self":"_blank"}class y{constructor(e){this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}request({type:e,payload:t}){return new Promise(((n,i)=>{const s=f();this.pending[s]={resolve:n,reject:i},this.port.postMessage({type:e,payload:{...t,__reqid:s}})}))}messageListener(e){if("string"!=typeof e.data.payload?.__reqid)return;const{type:t,payload:n}=e.data,{__reqid:i,__success:s,__error:r}=n;this.pending[i]&&(s?this.pending[i].resolve(this.cleanResult(n)):this.pending[i].reject(r?`${t}: ${r}`:t),delete this.pending[i])}cleanResult(e){const t={...e};return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}}class ${constructor(e,t){this.editor={openFile:e=>this._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}}),setCurrentFile:e=>this._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}}),setTheme:e=>this._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}}),setView:e=>this._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}}),showSidebar:(e=!0)=>this._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})},this.preview={origin:"",getUrl:()=>this._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((e=>e?.url??null)),setUrl:(e="/")=>{if("string"!=typeof e||!e.startsWith("/"))throw new Error(`Invalid argument: expected a path starting with '/', got '${e}'`);return this._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new y(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}applyFsDiff(e){const t=e=>null!==e&&"object"==typeof e;if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.destroy to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})}getDependencies(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})}getFsSnapshot(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})}}const _=[];class C{constructor(e){this.id=f(),this.element=e,this.pending=new Promise(((e,t)=>{const n=({data:t,ports:n})=>{"SDK_INIT_SUCCESS"===t?.action&&t.id===this.id&&(this.vm=new $(n[0],t.payload),e(this.vm),s())},i=()=>{this.element.contentWindow?.postMessage({action:"SDK_INIT",id:this.id},"*")};function s(){window.clearInterval(a),window.removeEventListener("message",n)}window.addEventListener("message",n),i();let r=0;const a=window.setInterval((()=>{if(this.vm)s();else{if(r>=20)return s(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void _.forEach(((e,t)=>{e.id===this.id&&_.splice(t,1)}));r++,i()}}),500)})),_.push(this)}}const E=e=>{const t=e instanceof Element?"element":"id";return _.find((n=>n[t]===e))??null};function A({template:e,title:t,description:n,dependencies:i,files:s,settings:a}){if(!r.includes(e)){const e=r.map((e=>`'${e}'`)).join(", ");console.warn(`Unsupported project.template: must be one of ${e}`)}const o=[],c=(e,t,n="")=>{o.push(function(e,t){const n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}(e,"string"==typeof t?t:n))};c("project[title]",t),"string"==typeof n&&n.length>0&&c("project[description]",n),c("project[template]",e,"javascript"),i&&("node"===e?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):c("project[dependencies]",JSON.stringify(i))),a&&c("project[settings]",JSON.stringify(a)),Object.entries(s).forEach((([e,t])=>{c(`project[files][${function(e){return e.replace(/\[/g,"%5B").replace(/\]/g,"%5D")}(e)}]`,t)}));const l=document.createElement("form");return l.method="POST",l.setAttribute("style","display:none!important;"),l.append(...o),l}function T(e){if(!e?.contentWindow)return Promise.reject("Provided element is not an iframe.");return(E(e)??new C(e)).pending}const N={connect:T,embedGithubProject:function(e,t,n){const i=w(e),s=document.createElement("iframe");return s.src=v(`/github/${t}`,n),j(i,s,n),T(s)},embedProject:function(e,t,n){const i=w(e),s=function(e,t){const n=A(e);return n.action=v("/run",t),n.id="sb_run",`<!doctype html>\n<html>\n<head><title></title></head>\n<body>\n  ${n.outerHTML}\n  <script>document.getElementById('${n.id}').submit();<\/script>\n</body>\n</html>`}(t,n),r=document.createElement("iframe");return j(i,r,n),r.contentDocument?.write(s),T(r)},embedProjectId:function(e,t,n){const i=w(e),s=document.createElement("iframe");return s.src=v(`/edit/${t}`,n),j(i,s,n),T(s)},openGithubProject:function(e,t){const n=g(`/github/${e}`,t),i=b(t);window.open(n,i)},openProject:function(e,t){!function(e,t){const n=A(e);n.action=g("/run",t),n.target=b(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)},openProjectId:function(e,t){const n=g(`/edit/${e}`,t),i=b(t);window.open(n,i)}}},91604:(e,t,n)=>{n.d(t,{Z:()=>a});n(52983);var i=n(76840),s=n(97458);function r(e){return(0,s.jsxs)("div",{className:"row with--border",children:[(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,s.jsx)(i.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,s.jsx)(i.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("div",{className:"ApiTable__Content",children:[(0,s.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,s.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,s.jsxs)("div",{className:"row Attribute",children:[(0,s.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,s.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const a=function(e){return(0,s.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,s.jsxs)("div",{className:"row with--border",children:[(0,s.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,s.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,s.jsx)(r,{attribute:e},e.name)))]})}},76840:(e,t,n)=>{n.d(t,{Q:()=>s,h:()=>r});n(52983);var i=n(97458);function s(e){return(0,i.jsxs)("div",{className:"ApiTableTag",children:[(0,i.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,i.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function r(e){return(0,i.jsx)("div",{className:"ApiTableTag",children:(0,i.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},69718:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(52147),s=n(57161),r=n(35389),a=n(52983),o=n(17995),c=n(97458);function l(e){const t=(0,r.Z)(),[n]=(0,a.useState)(!1),l=(0,s.Z)("/"),[d,u]=(0,a.useState)(""),[p,h]=(0,a.useState)((0,o.V)(t)),{preferredVersion:m}=(0,i.J)();return(0,a.useEffect)((()=>{const t=m?.name;u(void 0===t||"current"===t?l+`webcomponent-examples/dist/preview-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[l,m?.name,e.name]),(0,a.useLayoutEffect)((()=>{const e=()=>{let e=(0,o.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),h(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),(0,c.jsx)(c.Fragment,{children:n?(0,c.jsxs)("span",{children:["No component preview found for ",e.name," in version"," ",m?.name]}):(0,c.jsx)("iframe",{src:`${d}?theme=${e.theme?e.theme:p}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}})})}},80235:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(89716),s=n(14517),r=n(52983),a=n(97458);const o="docusaurus.ix.general.tab";const c=e=>{const[t,n]=(0,r.useState)(function(){const e=window.localStorage.getItem(o);return e&&("styleguide"===(t=e)||"code"===t)?e:"styleguide";var t}()),i=e=>{n(e),function(e){window.localStorage.setItem(o,e)}(e)},s=e[t];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"Docs__Tabs",children:[(0,a.jsx)(d,{name:"UX guidelines",active:"styleguide"===t,onClick:()=>i("styleguide"),children:(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 2C18.0228 2 22.5 6.47715 22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2ZM4.56189 11C5.01314 7.38128 7.88128 4.51314 11.5 4.06189V6H13.5V4.06189C17.1187 4.51314 19.9869 7.38128 20.4381 11H18.5V13H20.4381C19.9869 16.6187 17.1187 19.4869 13.5 19.9381V18H11.5V19.9381C7.88128 19.4869 5.01314 16.6187 4.56189 13H6.5V11H4.56189ZM11 10.5L17.5 7L14 13.5L7.5 17L11 10.5ZM13.5 12C13.5 12.5523 13.0523 13 12.5 13C11.9477 13 11.5 12.5523 11.5 12C11.5 11.4477 11.9477 11 12.5 11C13.0523 11 13.5 11.4477 13.5 12Z"})})}),(0,a.jsx)(d,{name:"Development",active:"code"===t,onClick:()=>i("code"),children:(0,a.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.0168 6.52423L13.0849 6.00659L9.97911 17.5977L11.911 18.1153L15.0168 6.52423ZM7.45711 6.79042L8.87132 8.20463L5.07921 11.9975L8.87132 15.7904L7.45711 17.2046L2.25 11.9975L7.45711 6.79042ZM17.5342 6.79216L16.12 8.20637L19.9121 11.9993L16.12 15.7922L17.5342 17.2064L22.7413 11.9993L17.5342 6.79216Z",fill:"inherit"})})})]}),(0,a.jsx)("div",{className:"Docs__Tabs__Content",children:(0,a.jsx)(s,{})})]})},l=e=>(0,a.jsx)(i.Z,{children:()=>(0,a.jsx)(c,{...e})});function d(e){return(0,a.jsxs)("div",{onClick:e.onClick,className:(0,s.Z)("Doc_Tab",{active:e.active}),children:[e.children,e.name]})}},26601:(e,t,n)=>{n.d(t,{Z:()=>E});var i=n(57161),s=n(62278),r=n(63020),a=n(46820),o=n(52983);let c=function(e){return e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.VUE="vue",e.PREVIEW="preview",e}({});var l=n(69718);const d={Files_Toolbar:"Files_Toolbar_Sh51"};var u=n(14455);function p(e,t){return e.replace(/\"<VERSION>\"/g,`"${t}"`)}function h(e){const t=s.CT.getCurrentTheme().replace("brand","classic");return e.replace(/(<body class=")[^"]*(")/,`$1${t}$2`)}function m(e,t){var n;void 0===t&&(t=!1);const i=e.match(/example-styles\/dist\/(.*\.(css|scss))/);return i&&i.length>1&&(n=i[1]),{source:e=e.replace("example-styles/dist",t?".":"./styles"),styleFileName:n}}async function f(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function g(e,t,n,i){const s={},r={},a=e.map((async e=>{let{filename:a,raw:o}=e;if(a.endsWith(".css"))return;let l=o;if(a===n){i===c.JAVASCRIPT&&(l=h(function(e){return e.replace(/(<script type="module" src=")[^"]*(">)/,"$1./main.js$2")}(l)),a="index.html");const{source:e,styleFileName:n}=m(l,i===c.ANGULAR);l=e,n&&(r[`src/${i===c.ANGULAR?"app":"styles"}/${n}`]=(await f([`${t}${n}`]))[0])}s[`src${i===c.ANGULAR?"/app":""}/${a}`]=l}));return await Promise.all(a),{files:s,styleFiles:r}}async function v(e){let{name:t,framework:n,files:i,baseUrl:s,version:r}=e;const a=r||"latest";return n===c.REACT?async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,[s,r,a,o,l,d]=await f([`${i}global.css`,`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),m=t[0],{files:v,styleFiles:x}=await g(t,i,m.filename,c.REACT);u.Z.openProject({template:"node",title:"iX React App",description:"iX react playground",files:{...v,...x,"src/styles/global.css":s,"public/index.html":h(a),"src/index.tsx":o,"src/App.tsx":r.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${m.filename.substring(0,m.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":p(l,n),"tsconfig.json":d,".stackblitzrc":'{\n          "startCommand": "npm run start"\n        }'}},{openFile:`src/${m.filename}`})}(s,i,a):n===c.ANGULAR?async function(e,t,n,i){const s=`${e}auto-generated/previews/styles/`,[r,a,o,l,d,m,v,x,j,w]=await f([`${s}global.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),b=n[0],y=[];n.forEach((e=>{let{filename:t,raw:n}=e;/@Component/gms.test(n)&&y.push(t)}));const $=`\n    ${y.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`)).join(";")}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${y.map(((e,t)=>`COMPONENT_${t}`))}\n    ];\n  `,{files:_,styleFiles:C}=await g(n,s,b.filename,c.ANGULAR);u.Z.openProject({template:"node",title:"iX angular app",description:"iX angular playground",files:{..._,...C,"src/app/declare-component.ts":$,"src/app/app.component.html":a,"src/app/app.component.ts":o,"src/app/app.module.ts":l,"src/index.html":h(d),"src/main.ts":m,"src/styles.css":r,"angular.json":v,"package.json":p(x,i),"tsconfig.app.json":j,"tsconfig.json":w}},{openFile:`src/app/${t}.ts`})}(s,t,i,a):n===c.JAVASCRIPT?async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,[s,r,a,o]=await f([`${i}global.css`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),l=t[0],{files:d,styleFiles:h}=await g(t,i,l.filename,c.JAVASCRIPT);u.Z.openProject({template:"node",title:"iX html app",description:"iX html playground",files:{...d,...h,"src/styles/global.css":s,"src/main.js":r,"package.json":p(a,n),"vite.config.ts":o}},{openFile:["src/index.html"]})}(s,i,a):n===c.VUE?async function(e,t,n){const i=`${e}auto-generated/previews/styles/`,[s,r,a,o,l,d,m,v]=await f([`${i}global.css`,`${e}code-runtime/vue/App.vue`,`${e}code-runtime/vue/index.html`,`${e}code-runtime/vue/main.ts`,`${e}code-runtime/vue/package.json`,`${e}code-runtime/vue/tsconfig.json`,`${e}code-runtime/vue/vite.config.ts`,`${e}code-runtime/vue/env.d.ts`]),x=t[0],{files:j,styleFiles:w}=await g(t,i,x.filename,c.VUE);u.Z.openProject({template:"node",title:"iX Vue App",description:"iX vue playground",files:{...j,...w,"src/styles/global.css":s,"index.html":h(a),"src/main.ts":o,"src/App.vue":r.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${x.filename}'`).replace(/<!-- @_RENDER_COMPONENT -->/gms," <Example />"),"src/env.d.ts":v,"package.json":p(l,n),"tsconfig.json":d,"vite.config.ts":m,".stackblitzrc":'{\n          "startCommand": "npm run dev"\n        }'}},{openFile:`src/${x.filename}`})}(s,i,a):void 0}var x=n(35389),j=n(97458);function w(e){return e.replace(/\/\*[^]*?\*\//gs,"").replace(/<!--[^]*?-->/gs,"").trim()}function b(e,t){const n=e.match(t);if(n&&2===n.length){const[n,i]=e.split(t);return w(i.split("\n").map((e=>e.replace(/[ ]{4}/,""))).join("\n").trim())}return""}function y(e){return m(function(e){const t=b(e,/<!-- Preview code -->/g);if(t){const n=b(e,/<!-- Sources -->/g);return n?"\x3c!-- Include in header --\x3e\n"+n+"\n\x3c!-- Include in header --\x3e\n\n"+t:t}return w(e)}(e),!0).source}async function $(e,t,n){let i="web-components";return t===c.ANGULAR&&(i="angular"),t===c.REACT&&(i="react"),t===c.VUE&&(i="vue"),Promise.all(n.map((async t=>{try{const n=await async function(e){console.log("FETCH SOURCE FROM",e);const t=await fetch(`${e}`),n=await t.text();return console.log(n),!n||n?.includes('<div id="__docusaurus"></div>')||n?.includes("Page Not Found")?null:n}("css"===_(t)?`${e}/previews/styles/${t}`:`${e}/previews/${i}/${t}`);return n?{filename:t,source:y(n),raw:n}:null}catch(n){console.warn(n)}})))}function _(e){return e.endsWith(".html")?"html":e.endsWith(".ts")?"ts":e.endsWith(".tsx")||e.endsWith(".vue")?"tsx":e.endsWith(".css")?"css":void 0}function C(e){const[t,n]=(0,o.useState)(!0),s=(0,i.Z)("/auto-generated"),[l,d]=(0,o.useState)([]),[u,p]=(0,o.useState)(0);return(0,o.useEffect)((()=>{if(e.examplesByName){const t=[];return e.framework===c.ANGULAR&&t.push(`${e.name}.html`,`${e.name}.ts`),e.framework===c.JAVASCRIPT&&t.push(`${e.name}.html`),e.framework===c.REACT&&t.push(`${e.name}.tsx`),e.framework===c.VUE&&t.push(`${e.name}.vue`),e.includeCssFile&&t.push(`${e.name}.css`),n(!0),void $(s,e.framework,t).then((e=>{p(0),d(e.filter((e=>e))),n(!1)}))}if(e.files&&e.files[e.framework]){const t=e.files[e.framework];n(!0),$(s,e.framework,t).then((e=>{p(0),d(e.filter((e=>e))),n(!1)}))}}),[e.framework]),(0,o.useEffect)((()=>{e.onSourceCodeFetched(l)}),[l]),t?(0,j.jsx)(r.lL,{}):0===l.length?(0,j.jsx)("div",{style:{padding:"1rem"},children:"There is no example code yet \ud83d\ude31"}):1===l.length?(0,j.jsx)(a.Z,{language:_(l[0].filename),children:l[0].source}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Vp,{children:l.map(((e,t)=>(0,j.jsx)(r.t3,{onClick:()=>p(t),children:e.filename},e.filename+"."+t)))}),(0,j.jsx)(a.Z,{language:_(l[u].filename),children:l[u].source})]})}function E(e){const[t,n]=(0,o.useState)(c.PREVIEW),a=(0,i.Z)("/"),u=(0,i.Z)("/img"),p=(0,i.Z)("/webcomponent-examples/dist/preview-examples"),[h,m]=(0,o.useState)([]),f=(0,x.Z)().siteConfig.customFields.playgroundVersion,g=t=>!!e.examplesByName||!!e.files[t];return(0,j.jsxs)("div",{children:[(0,j.jsxs)(r.Vp,{children:[(0,j.jsx)(r.t3,{onClick:()=>n(c.PREVIEW),children:"Preview"}),g(c.ANGULAR)&&(0,j.jsx)(r.t3,{onClick:()=>n(c.ANGULAR),children:"Angular"}),g(c.REACT)&&(0,j.jsx)(r.t3,{onClick:()=>n(c.REACT),children:"React"}),g(c.VUE)&&(0,j.jsx)(r.t3,{onClick:()=>n(c.VUE),children:"Vue"}),g(c.JAVASCRIPT)&&(0,j.jsx)(r.t3,{onClick:()=>n(c.JAVASCRIPT),children:"Javascript"}),(0,j.jsx)("div",{className:d.Files_Toolbar,children:t===c.PREVIEW?(0,j.jsx)(r.AN,{ghost:!0,size:"16",icon:"open-external",onClick:()=>{const t=s.CT.getCurrentTheme(),n=e.noMargin?"&no-margin=true":"";window.open(`${p}/${e.name}.html?theme=${t}${n}`)}}):(0,j.jsxs)(j.Fragment,{children:[!e.disableStackBlitz&&(0,j.jsx)(r.AN,{ghost:!0,size:"16",icon:`${u}/stackblitz.svg`,onClick:()=>{v({baseUrl:a,files:h,framework:t,name:e.name,version:f})}}),(0,j.jsx)(r.AN,{ghost:!0,size:"16",icon:`${u}/github.svg`,onClick:()=>{window.open(`https://github.com/${function(e){let t="html";return e===c.ANGULAR&&(t="angular"),e===c.REACT&&(t="react"),e===c.VUE&&(t="vue"),`siemens/ix/tree/main/packages/${t}-test-app`}(t)}`)}})]})})]}),t===c.PREVIEW?(0,j.jsx)(l.Z,{...e}):null,t!==c.PREVIEW?(0,j.jsx)(C,{onSourceCodeFetched:e=>m(e),framework:t,name:e.name,files:e.files,includeCssFile:e.includeCssFile,examplesByName:e.examplesByName}):null]})}}}]);