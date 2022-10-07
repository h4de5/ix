"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[65714,9075,82949,81963,42394,74875,20708,19060],{30876:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(2784);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=c;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82009:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(2784),r=n(6277);const o="tabItem_OMyP";function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},e)}},1112:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(7896),r=n(2784),o=n(6277),i=n(89741),u=n(42244),l=n(78963),s=n(24126);const d="tabList_M0Dn",p="tabItem_ysIP";function c(t){var e;const{lazy:n,block:i,defaultValue:c,values:m,groupId:g,className:b}=t,v=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??v.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),k=(0,u.l)(f,((t,e)=>t.value===e.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(e=v.find((t=>t.props.default)))?void 0:e.props.value)??v[0].props.value;if(null!==y&&!f.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:x}=(0,l.U)(),[h,N]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=g){const t=w[g];null!=t&&t!==h&&f.some((e=>e.value===t))&&N(t)}const I=t=>{const e=t.currentTarget,n=T.indexOf(e),a=f[n].value;a!==h&&(C(e),N(a),null!=g&&x(g,String(a)))},D=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{const e=T.indexOf(t.currentTarget)+1;n=T[e]??T[0];break}case"ArrowLeft":{const e=T.indexOf(t.currentTarget)-1;n=T[e]??T[T.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},b)},f.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,key:e,ref:t=>T.push(t),onKeyDown:D,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":h===e})}),n??e)}))),n?(0,r.cloneElement)(v.filter((t=>t.props.value===h))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==h})))))}function m(t){const e=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(e)},t))}},77942:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(37949),r=n(90077),o=n(37614),i=n(2784),u=n(90943);function l(t){const e=(0,o.Z)(),[n]=(0,i.useState)(!1),l=(0,r.Z)("/"),[s,d]=(0,i.useState)(""),[p,c]=(0,i.useState)((0,u.V)(e)),{preferredVersion:m}=(0,a.J)();return(0,i.useEffect)((()=>{const e=null==m?void 0:m.name;d(void 0===e||"current"===e?l+`webcomponent-examples/${t.name}.html`:l+`versioned_examples/version-${e}/webcomponent-examples/${t.name}.html`)}),[l,null==m?void 0:m.name,t.name]),(0,i.useLayoutEffect)((()=>{const t=()=>{let t=(0,u.V)(e);document.body.classList.forEach((e=>{e.includes("theme-")&&(t=e)})),c(t)},n=new MutationObserver((()=>t()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),t(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",t.name," in version"," ",null==m?void 0:m.name):i.createElement("iframe",{src:`${s}?theme=${t.theme?t.theme:p}${t.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${t.height}`}}))}},64176:(t,e,n)=>{n.d(e,{Z:()=>l});var a=n(82009),r=n(1112),o=n(2784),i=n(77942);const u={angular:1,react:2,javascript:3,preview:4};function l(t){const e=t.children??[],n=Array.isArray(e)?e:[e];return o.createElement(r.Z,{groupId:t.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((t=>n.map((t=>t.props.value)).includes(t.value)))],defaultValue:"preview"},[o.createElement(a.Z,{value:"preview",key:"preview"},o.createElement(i.Z,{name:t.name,height:t.height,noMargin:t.noMargin})),...n].sort(((t,e)=>u[t.props.value]-u[e.props.value])))}},44544:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/ix-button/props",id:"auto-generated/ix-button/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-button/props.md",sourceDirName:"auto-generated/ix-button",slug:"/auto-generated/ix-button/props",permalink:"/docs/next/auto-generated/ix-button/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-button/props.md",tags:[],version:"current",frontMatter:{}},l={},s=[],d={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Disable the button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"disabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ghost"),(0,r.kt)("td",{parentName:"tr",align:null},"Button with no background or outline"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ghost")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"invisible"),(0,r.kt)("td",{parentName:"tr",align:null},"Invisible button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invisible")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outline"),(0,r.kt)("td",{parentName:"tr",align:null},"Outline button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"outline")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selected"),(0,r.kt)("td",{parentName:"tr",align:null},"Show button as selected. Should be used with outline or invisible"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"selected")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the button"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"button" \uff5c "submit"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'button'"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"variant"),(0,r.kt)("td",{parentName:"tr",align:null},"Button varaint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"variant")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"Primary" \uff5c "Secondary"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"'Primary'"))))))}p.isMDXComponent=!0},88339:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/angular/button-group",id:"auto-generated/previews/angular/button-group",title:"button-group",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/button-group.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/button-group",permalink:"/docs/next/auto-generated/previews/angular/button-group",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/button-group.md",tags:[],version:"current",frontMatter:{}},l={},s=[],d={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-button-group\',\n  template: `\n    <div class="btn-group">\n      <ix-button variant="Primary" outline> Left </ix-button>\n      <ix-button variant="Primary">Middle</ix-button>\n      <ix-button variant="Primary" outline> Right </ix-button>\n    </div>\n  `,\n})\nexport class ButtonGroup {}\n')))}p.isMDXComponent=!0},49761:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/angular/buttons",id:"auto-generated/previews/angular/buttons",title:"buttons",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/buttons.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/buttons",permalink:"/docs/next/auto-generated/previews/angular/buttons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/buttons.md",tags:[],version:"current",frontMatter:{}},l={},s=[],d={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-buttons\',\n  template: `\n    <ix-button class="m-1" variant="primary">Button</ix-button>\n    <ix-button class="m-1" variant="secondary">Button</ix-button>\n    <ix-button class="m-1" outline>Button</ix-button>\n    <ix-button class="m-1" invisible>Button</ix-button>\n  `,\n})\nexport class Buttons {}\n')))}p.isMDXComponent=!0},55658:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/react/button-group",id:"auto-generated/previews/react/button-group",title:"button-group",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/button-group.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/button-group",permalink:"/docs/next/auto-generated/previews/react/button-group",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/button-group.md",tags:[],version:"current",frontMatter:{}},l={},s=[],d={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const ButtonGroup: React.FC = () => (\n  <>\n    <div className="btn-group">\n      <IxButton variant="Primary" outline>\n        Left\n      </IxButton>\n      <IxButton variant="Primary">Middle</IxButton>\n      <IxButton variant="Primary" outline>\n        Right\n      </IxButton>\n    </div>\n  </>\n);\n')))}p.isMDXComponent=!0},21963:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/react/buttons",id:"auto-generated/previews/react/buttons",title:"buttons",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/buttons.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/buttons",permalink:"/docs/next/auto-generated/previews/react/buttons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/buttons.md",tags:[],version:"current",frontMatter:{}},l={},s=[],d={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const Buttons: React.FC = () => {\n  return (\n    <>\n      <IxButton className="m-1" variant="Primary">\n        Button\n      </IxButton>\n      <IxButton className="m-1" variant="Secondary">\n        Button\n      </IxButton>\n      <IxButton className="m-1" outline>\n        Button\n      </IxButton>\n      <IxButton className="m-1" invisible>\n        Button\n      </IxButton>\n    </>\n  );\n};\n')))}p.isMDXComponent=!0},47305:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/web-component/button-group",id:"auto-generated/previews/web-component/button-group",title:"button-group",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/button-group.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/button-group",permalink:"/docs/next/auto-generated/previews/web-component/button-group",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/button-group.md",tags:[],version:"current",frontMatter:{}},l={},s=[],d={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div class="btn-group">\n  <ix-button outline>Left</ix-button>\n  <ix-button>Middle</ix-button>\n  <ix-button outline>Right</ix-button>\n</div>\n')))}p.isMDXComponent=!0},50486:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(7896),r=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/web-component/buttons",id:"auto-generated/previews/web-component/buttons",title:"buttons",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/buttons.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/buttons",permalink:"/docs/next/auto-generated/previews/web-component/buttons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/buttons.md",tags:[],version:"current",frontMatter:{}},l={},s=[],d={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ix-button class="m-1" variant="primary">Button</ix-button>\n<ix-button class="m-1" variant="secondary">Button</ix-button>\n<ix-button class="m-1" outline>Button</ix-button>\n<ix-button class="m-1" invisible>Button</ix-button>\n')))}p.isMDXComponent=!0},79498:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>f,contentTitle:()=>b,default:()=>w,frontMatter:()=>g,metadata:()=>v,toc:()=>k});var a=n(7896),r=(n(2784),n(30876)),o=n(82009),i=n(64176),u=n(44544),l=n(50486),s=n(47305),d=n(21963),p=n(55658),c=n(49761),m=n(88339);const g={title:"Button"},b=void 0,v={unversionedId:"controls/button",id:"controls/button",title:"Button",description:"Usage",source:"@site/docs/controls/button.md",sourceDirName:"controls",slug:"/controls/button",permalink:"/docs/next/controls/button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/button.md",tags:[],version:"current",frontMatter:{title:"Button"},sidebar:"mySidebar",previous:{title:"Breadcrumb",permalink:"/docs/next/controls/breadcrumb"},next:{title:"Category Filter",permalink:"/docs/next/controls/category-filter"}},f={},k=[{value:"Usage",id:"usage",level:2},{value:"Default buttons",id:"default-buttons",level:3},{value:"Button group",id:"button-group",level:3},{value:"Properties",id:"properties",level:2}],y={toc:k};function w(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},y,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"default-buttons"},"Default buttons"),(0,r.kt)(i.Z,{name:"buttons",mdxType:"Preview"},(0,r.kt)(o.Z,{value:"angular",key:"angular",mdxType:"TabItem"},(0,r.kt)(c.default,{mdxType:"AngularButtons"})),(0,r.kt)(o.Z,{value:"react",key:"react",mdxType:"TabItem"},(0,r.kt)(d.default,{mdxType:"ReactButtons"})),(0,r.kt)(o.Z,{value:"javascript",key:"javascript",mdxType:"TabItem"},(0,r.kt)(l.default,{mdxType:"WebComponentButtons"}))),(0,r.kt)("h3",{id:"button-group"},"Button group"),(0,r.kt)(i.Z,{name:"button-group",mdxType:"Preview"},(0,r.kt)(o.Z,{value:"angular",key:"angular",mdxType:"TabItem"},(0,r.kt)(m.default,{mdxType:"AngularButtonGroup"})),(0,r.kt)(o.Z,{value:"react",key:"react",mdxType:"TabItem"},(0,r.kt)(p.default,{mdxType:"ReactButtonGroup"})),(0,r.kt)(o.Z,{value:"javascript",key:"javascript",mdxType:"TabItem"},(0,r.kt)(s.default,{mdxType:"WebComponentButtonGroup"}))),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)(u.default,{mdxType:"Props"}))}w.isMDXComponent=!0}}]);