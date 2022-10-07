"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[82073,36808,23337,30701,30128,22253,46978],{30876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var o=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,v=d["".concat(c,".").concat(p)]||d[p]||m[p]||r;return n?o.createElement(v,s(s({ref:t},l),{},{components:n})):o.createElement(v,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(2784),a=n(6277);const r="tabItem_OMyP";function s(e){let{children:t,hidden:n,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,s),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>p});var o=n(7896),a=n(2784),r=n(6277),s=n(89741),i=n(42244),c=n(78963),u=n(24126);const l="tabList_M0Dn",m="tabItem_ysIP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:p,groupId:v,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=p??f.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),h=(0,i.l)(w,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==b&&!w.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:T}=(0,c.U)(),[x,k]=(0,a.useState)(b),C=[],{blockElementScrollPositionUntilNextRender:M}=(0,u.o5)();if(null!=v){const e=y[v];null!=e&&e!==x&&w.some((t=>t.value===e))&&k(e)}const E=e=>{const t=e.currentTarget,n=C.indexOf(t),o=w[n].value;o!==x&&(M(t),k(o),null!=v&&T(v,String(o)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",l)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},g)},w.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>C.push(e),onKeyDown:I,onFocus:E,onClick:E},s,{className:(0,r.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,s.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(37949),a=n(90077),r=n(37614),s=n(2784),i=n(90943);function c(e){const t=(0,r.Z)(),[n]=(0,s.useState)(!1),c=(0,a.Z)("/"),[u,l]=(0,s.useState)(""),[m,d]=(0,s.useState)((0,i.V)(t)),{preferredVersion:p}=(0,o.J)();return(0,s.useEffect)((()=>{const t=null==p?void 0:p.name;l(void 0===t||"current"===t?c+`webcomponent-examples/${e.name}.html`:c+`versioned_examples/version-${t}/webcomponent-examples/${e.name}.html`)}),[c,null==p?void 0:p.name,e.name]),(0,s.useLayoutEffect)((()=>{const e=()=>{let e=(0,i.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),d(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),s.createElement(s.Fragment,null,n?s.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==p?void 0:p.name):s.createElement("iframe",{src:`${u}?theme=${e.theme?e.theme:m}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(82009),a=n(1112),r=n(2784),s=n(77942);const i={angular:1,react:2,javascript:3,preview:4};function c(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return r.createElement(a.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[r.createElement(o.Z,{value:"preview",key:"preview"},r.createElement(s.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>i[e.props.value]-i[t.props.value])))}},56805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7896),a=(n(2784),n(30876));const r={},s=void 0,i={unversionedId:"auto-generated/previews/angular/toast-custom",id:"auto-generated/previews/angular/toast-custom",title:"toast-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/toast-custom.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/toast-custom",permalink:"/docs/next/auto-generated/previews/angular/toast-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/toast-custom.md",tags:[],version:"current",frontMatter:{}},c={},u=[],l={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component, TemplateRef, ViewChild } from '@angular/core';\nimport { ToastService } from '@siemens/ix-angular';\n\n@Component({\n  selector: 'app-toast',\n  template: `\n    <div>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n      amet.\n    </div>\n    <ix-button (click)=\"showToastMessage()\">Show Toast</ix-button>\n    <ng-template #customToast let-toast>\n      <div>\n        <div>Custom toast message</div>\n        <ix-button (click)=\"toast.close('Action')\">Action</ix-button>\n      </div>\n    </ng-template>\n  `,\n})\nexport class ToastCustom {\n  @ViewChild('customToast', { read: TemplateRef })\n  customToastRef!: TemplateRef<any>;\n\n  constructor(private readonly toastService: ToastService) {}\n\n  async showToastMessage() {\n    this.toastService.show({\n      message: this.customToastRef,\n    });\n  }\n}\n")))}m.isMDXComponent=!0},64718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7896),a=(n(2784),n(30876));const r={},s=void 0,i={unversionedId:"auto-generated/previews/angular/toast",id:"auto-generated/previews/angular/toast",title:"toast",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/toast.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/toast",permalink:"/docs/next/auto-generated/previews/angular/toast",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/toast.md",tags:[],version:"current",frontMatter:{}},c={},u=[],l={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component, TemplateRef, ViewChild } from '@angular/core';\nimport { ToastService } from '@siemens/ix-angular';\n\n@Component({\n  selector: 'app-toast',\n  template: `\n    <div>\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n      amet.\n    </div>\n    <ix-button (click)=\"showToastMessage()\">Show Toast</ix-button>\n  `,\n})\nexport class Toast {\n  @ViewChild('customToast', { read: TemplateRef })\n  customModalRef!: TemplateRef<any>;\n\n  constructor(private readonly toastService: ToastService) {}\n\n  async showToastMessage() {\n    this.toastService.show({\n      message: 'Hello World!',\n    });\n  }\n}\n")))}m.isMDXComponent=!0},15361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7896),a=(n(2784),n(30876));const r={},s=void 0,i={unversionedId:"auto-generated/previews/react/toast-custom",id:"auto-generated/previews/react/toast-custom",title:"toast-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/toast-custom.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/toast-custom",permalink:"/docs/next/auto-generated/previews/react/toast-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/toast-custom.md",tags:[],version:"current",frontMatter:{}},c={},u=[],l={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton, showToast } from '@siemens/ix-react';\nimport React from 'react';\n\nfunction CustomToast() {\n  return (\n    <div>\n      <div>Custom toast message</div>\n      <IxButton>Action</IxButton>\n    </div>\n  );\n}\n\nexport const ToastCustom: React.FC = () => {\n  return (\n    <>\n      <IxButton\n        onClick={() => {\n          showToast({\n            message: <CustomToast></CustomToast>,\n          });\n        }}\n      >\n        Trigger toast\n      </IxButton>\n    </>\n  );\n};\n")))}m.isMDXComponent=!0},97512:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7896),a=(n(2784),n(30876));const r={},s=void 0,i={unversionedId:"auto-generated/previews/react/toast",id:"auto-generated/previews/react/toast",title:"toast",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/toast.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/toast",permalink:"/docs/next/auto-generated/previews/react/toast",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/toast.md",tags:[],version:"current",frontMatter:{}},c={},u=[],l={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton, showToast } from '@siemens/ix-react';\nimport React from 'react';\n\nexport const Toast: React.FC = () => {\n  return (\n    <>\n      <IxButton\n        onClick={() => {\n          showToast({\n            message: 'My toast message!',\n          });\n        }}\n      >\n        Trigger toast\n      </IxButton>\n    </>\n  );\n};\n")))}m.isMDXComponent=!0},35760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7896),a=(n(2784),n(30876));const r={},s=void 0,i={unversionedId:"auto-generated/previews/web-component/toast-custom",id:"auto-generated/previews/web-component/toast-custom",title:"toast-custom",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/toast-custom.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/toast-custom",permalink:"/docs/next/auto-generated/previews/web-component/toast-custom",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/toast-custom.md",tags:[],version:"current",frontMatter:{}},c={},u=[],l={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<ix-toast-container></ix-toast-container>\n\n<ix-button id=\"toastButton\">Trigger toast</ix-button>\n\n<template id=\"custom-toast\">\n  <div>\n    <div>Custom toast message</div>\n    <ix-button>Action</ix-button>\n  </div>\n</template>\n\n<script type=\"module\">\n  import { toast } from './lib/@siemens/ix/dist/index.js';\n\n  (async function () {\n    await window.customElements.whenDefined('ix-toast-container');\n    document\n      .getElementById('toastButton')\n      .addEventListener('click', async () => {\n        const customModal = document.createElement('div');\n        const template = document.getElementById('custom-toast');\n        const templateContent = template.content;\n        customModal.appendChild(templateContent);\n\n        const instance = await toast({\n          message: customModal,\n        });\n\n        customModal\n          .querySelector('ix-button')\n          .addEventListener('click', () => {\n            instance.close();\n          });\n      });\n  })();\n<\/script>\n")))}m.isMDXComponent=!0},74962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var o=n(7896),a=(n(2784),n(30876));const r={},s=void 0,i={unversionedId:"auto-generated/previews/web-component/toast",id:"auto-generated/previews/web-component/toast",title:"toast",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/toast.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/toast",permalink:"/docs/next/auto-generated/previews/web-component/toast",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/toast.md",tags:[],version:"current",frontMatter:{}},c={},u=[],l={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<ix-toast-container></ix-toast-container>\n\n<ix-button id=\"toastButton\">Trigger toast</ix-button>\n<script type=\"module\">\n  import { toast } from './lib/@siemens/ix/dist/index.js';\n\n  (async function () {\n    await window.customElements.whenDefined('ix-toast-container');\n    document.getElementById('toastButton').addEventListener('click', () => {\n      toast({\n        message: 'My toast message!',\n      });\n    });\n  })();\n<\/script>\n")))}m.isMDXComponent=!0},55971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>v,default:()=>b,frontMatter:()=>p,metadata:()=>g,toc:()=>w});var o=n(7896),a=(n(2784),n(30876)),r=n(64176),s=n(82009),i=n(74962),c=n(97512),u=n(64718),l=n(35760),m=n(56805),d=n(15361);const p={},v="Toast",g={unversionedId:"controls/toast",id:"controls/toast",title:"Toast",description:"Custom toast message",source:"@site/docs/controls/toast.md",sourceDirName:"controls",slug:"/controls/toast",permalink:"/docs/next/controls/toast",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/toast.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Timepicker",permalink:"/docs/next/controls/time-picker"},next:{title:"Toggle",permalink:"/docs/next/controls/toggle"}},f={},w=[{value:"Custom toast message",id:"custom-toast-message",level:2}],h={toc:w};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"toast"},"Toast"),(0,a.kt)(r.Z,{name:"toast",height:"18rem",mdxType:"Preview"},(0,a.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)(i.default,{mdxType:"SourceToast"})),(0,a.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)(c.default,{mdxType:"SourceReactToast"})),(0,a.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)(u.default,{mdxType:"SourceAngularToast"}))),(0,a.kt)("h2",{id:"custom-toast-message"},"Custom toast message"),(0,a.kt)(r.Z,{name:"toast-custom",height:"18rem",mdxType:"Preview"},(0,a.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)(l.default,{mdxType:"SourceToastCustom"})),(0,a.kt)(s.Z,{value:"angular",mdxType:"TabItem"},(0,a.kt)(m.default,{mdxType:"SourceAngularToastCustom"})),(0,a.kt)(s.Z,{value:"react",mdxType:"TabItem"},(0,a.kt)(d.default,{mdxType:"SourceReactToastCustom"}))))}b.isMDXComponent=!0}}]);