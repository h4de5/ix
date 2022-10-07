"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39937,50357,31718,48713,69635,2699,72748,95198],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=l(n),m=a,v=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(v,i(i({ref:t},d),{},{components:n})):r.createElement(v,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(2784),a=n(6277);const o="tabItem_OMyP";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(7896),a=n(2784),o=n(6277),i=n(89741),u=n(42244),s=n(78963),l=n(24126);const d="tabList_M0Dn",p="tabItem_ysIP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:m,groupId:v,className:g}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),k=(0,u.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:h}=(0,s.U)(),[x,N]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,l.o5)();if(null!=v){const e=w[v];null!=e&&e!==x&&f.some((t=>t.value===e))&&N(e)}const I=e=>{const t=e.currentTarget,n=T.indexOf(t),r=f[n].value;r!==x&&(C(t),N(r),null!=v&&h(v,String(r)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},f.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>T.push(e),onKeyDown:D,onFocus:I,onClick:I},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(37949),a=n(90077),o=n(37614),i=n(2784),u=n(90943);function s(e){const t=(0,o.Z)(),[n]=(0,i.useState)(!1),s=(0,a.Z)("/"),[l,d]=(0,i.useState)(""),[p,c]=(0,i.useState)((0,u.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,i.useEffect)((()=>{const t=null==m?void 0:m.name;d(void 0===t||"current"===t?s+`webcomponent-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/${e.name}.html`)}),[s,null==m?void 0:m.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,u.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),c(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):i.createElement("iframe",{src:`${l}?theme=${e.theme?e.theme:p}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(82009),a=n(1112),o=n(2784),i=n(77942);const u={angular:1,react:2,javascript:3,preview:4};function s(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return o.createElement(a.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[o.createElement(r.Z,{value:"preview",key:"preview"},o.createElement(i.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>u[e.props.value]-u[t.props.value])))}},81849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/ix-button/props",id:"version-1.0.0/auto-generated/ix-button/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/versioned_docs/version-1.0.0/auto-generated/ix-button/props.md",sourceDirName:"auto-generated/ix-button",slug:"/auto-generated/ix-button/props",permalink:"/docs/auto-generated/ix-button/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/ix-button/props.md",tags:[],version:"1.0.0",frontMatter:{}},s={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"disabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Disable the button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"disabled")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ghost"),(0,a.kt)("td",{parentName:"tr",align:null},"Button with no background or outline"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"ghost")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"invisible"),(0,a.kt)("td",{parentName:"tr",align:null},"Invisible button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"invisible")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"outline"),(0,a.kt)("td",{parentName:"tr",align:null},"Outline button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"outline")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selected"),(0,a.kt)("td",{parentName:"tr",align:null},"Show button as selected. Should be used with outline or invisible"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"selected")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"type"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of the button"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"type")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"button" \uff5c "submit"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'button'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"variant"),(0,a.kt)("td",{parentName:"tr",align:null},"Button varaint"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"variant")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"Primary" \uff5c "Secondary"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'Primary'"))))))}p.isMDXComponent=!0},77954:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/angular/button-group",id:"version-1.0.0/auto-generated/previews/angular/button-group",title:"button-group",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/angular/button-group.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/button-group",permalink:"/docs/auto-generated/previews/angular/button-group",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/angular/button-group.md",tags:[],version:"1.0.0",frontMatter:{}},s={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-button-group\',\n  template: `\n    <div class="btn-group">\n      <ix-button variant="Primary" outline> Left </ix-button>\n      <ix-button variant="Primary">Middle</ix-button>\n      <ix-button variant="Primary" outline> Right </ix-button>\n    </div>\n  `,\n})\nexport class ButtonGroup {}\n')))}p.isMDXComponent=!0},89467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/angular/buttons",id:"version-1.0.0/auto-generated/previews/angular/buttons",title:"buttons",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/angular/buttons.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/buttons",permalink:"/docs/auto-generated/previews/angular/buttons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/angular/buttons.md",tags:[],version:"1.0.0",frontMatter:{}},s={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-buttons\',\n  template: `\n    <ix-button class="m-1" variant="primary">Button</ix-button>\n    <ix-button class="m-1" variant="secondary">Button</ix-button>\n    <ix-button class="m-1" outline>Button</ix-button>\n    <ix-button class="m-1" invisible>Button</ix-button>\n  `,\n})\nexport class Buttons {}\n')))}p.isMDXComponent=!0},42083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/react/button-group",id:"version-1.0.0/auto-generated/previews/react/button-group",title:"button-group",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/react/button-group.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/button-group",permalink:"/docs/auto-generated/previews/react/button-group",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/react/button-group.md",tags:[],version:"1.0.0",frontMatter:{}},s={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const ButtonGroup: React.FC = () => (\n  <>\n    <div className="btn-group">\n      <IxButton variant="Primary" outline>\n        Left\n      </IxButton>\n      <IxButton variant="Primary">Middle</IxButton>\n      <IxButton variant="Primary" outline>\n        Right\n      </IxButton>\n    </div>\n  </>\n);\n')))}p.isMDXComponent=!0},94706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/react/buttons",id:"version-1.0.0/auto-generated/previews/react/buttons",title:"buttons",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/react/buttons.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/buttons",permalink:"/docs/auto-generated/previews/react/buttons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/react/buttons.md",tags:[],version:"1.0.0",frontMatter:{}},s={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const Buttons: React.FC = () => {\n  return (\n    <>\n      <IxButton className="m-1" variant="Primary">\n        Button\n      </IxButton>\n      <IxButton className="m-1" variant="Secondary">\n        Button\n      </IxButton>\n      <IxButton className="m-1" outline>\n        Button\n      </IxButton>\n      <IxButton className="m-1" invisible>\n        Button\n      </IxButton>\n    </>\n  );\n};\n')))}p.isMDXComponent=!0},34173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/web-component/button-group",id:"version-1.0.0/auto-generated/previews/web-component/button-group",title:"button-group",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/web-component/button-group.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/button-group",permalink:"/docs/auto-generated/previews/web-component/button-group",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/web-component/button-group.md",tags:[],version:"1.0.0",frontMatter:{}},s={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="btn-group">\n  <ix-button outline>Left</ix-button>\n  <ix-button>Middle</ix-button>\n  <ix-button outline>Right</ix-button>\n</div>\n')))}p.isMDXComponent=!0},94473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,u={unversionedId:"auto-generated/previews/web-component/buttons",id:"version-1.0.0/auto-generated/previews/web-component/buttons",title:"buttons",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/web-component/buttons.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/buttons",permalink:"/docs/auto-generated/previews/web-component/buttons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/web-component/buttons.md",tags:[],version:"1.0.0",frontMatter:{}},s={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-button class="m-1" variant="primary">Button</ix-button>\n<ix-button class="m-1" variant="secondary">Button</ix-button>\n<ix-button class="m-1" outline>Button</ix-button>\n<ix-button class="m-1" invisible>Button</ix-button>\n')))}p.isMDXComponent=!0},18071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>w,frontMatter:()=>v,metadata:()=>b,toc:()=>k});var r=n(7896),a=(n(2784),n(30876)),o=n(82009),i=n(64176),u=n(81849),s=n(94473),l=n(34173),d=n(94706),p=n(42083),c=n(89467),m=n(77954);const v={title:"Button"},g=void 0,b={unversionedId:"controls/button",id:"version-1.0.0/controls/button",title:"Button",description:"Usage",source:"@site/versioned_docs/version-1.0.0/controls/button.md",sourceDirName:"controls",slug:"/controls/button",permalink:"/docs/controls/button",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/controls/button.md",tags:[],version:"1.0.0",frontMatter:{title:"Button"},sidebar:"mySidebar",previous:{title:"Breadcrumb",permalink:"/docs/controls/breadcrumb"},next:{title:"Category Filter",permalink:"/docs/controls/category-filter"}},f={},k=[{value:"Usage",id:"usage",level:2},{value:"Default buttons",id:"default-buttons",level:3},{value:"Button group",id:"button-group",level:3},{value:"Properties",id:"properties",level:2}],y={toc:k};function w(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"default-buttons"},"Default buttons"),(0,a.kt)(i.Z,{name:"buttons",mdxType:"Preview"},(0,a.kt)(o.Z,{value:"angular",key:"angular",mdxType:"TabItem"},(0,a.kt)(c.default,{mdxType:"AngularButtons"})),(0,a.kt)(o.Z,{value:"react",key:"react",mdxType:"TabItem"},(0,a.kt)(d.default,{mdxType:"ReactButtons"})),(0,a.kt)(o.Z,{value:"javascript",key:"javascript",mdxType:"TabItem"},(0,a.kt)(s.default,{mdxType:"WebComponentButtons"}))),(0,a.kt)("h3",{id:"button-group"},"Button group"),(0,a.kt)(i.Z,{name:"button-group",mdxType:"Preview"},(0,a.kt)(o.Z,{value:"angular",key:"angular",mdxType:"TabItem"},(0,a.kt)(m.default,{mdxType:"AngularButtonGroup"})),(0,a.kt)(o.Z,{value:"react",key:"react",mdxType:"TabItem"},(0,a.kt)(p.default,{mdxType:"ReactButtonGroup"})),(0,a.kt)(o.Z,{value:"javascript",key:"javascript",mdxType:"TabItem"},(0,a.kt)(l.default,{mdxType:"WebComponentButtonGroup"}))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)(u.default,{mdxType:"Props"}))}w.isMDXComponent=!0}}]);