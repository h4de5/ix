"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25038,23429,38590,40502,47005,8670,18796,45465,47867],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=p(n),c=o,w=m["".concat(l,".").concat(c)]||m[c]||u[c]||a;return n?r.createElement(w,i(i({ref:t},s),{},{components:n})):r.createElement(w,i({ref:t},s))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},82009:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(2784),o=n(6277);const a="tabItem_OMyP";function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(a,i),hidden:n},t)}},1112:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(7896),o=n(2784),a=n(6277),i=n(89741),d=n(42244),l=n(78963),p=n(24126);const s="tabList_M0Dn",u="tabItem_ysIP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:c,groupId:w,className:g}=e,v=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=c??v.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,d.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:x}=(0,l.U)(),[N,y]=(0,o.useState)(b),I=[],{blockElementScrollPositionUntilNextRender:D}=(0,p.o5)();if(null!=w){const e=h[w];null!=e&&e!==N&&k.some((t=>t.value===e))&&y(e)}const T=e=>{const t=e.currentTarget,n=I.indexOf(t),r=k[n].value;r!==N&&(D(t),y(r),null!=w&&x(w,String(r)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;n=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;n=I[t]??I[I.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,a.Z)("tabs-container",s)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":i},g)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>I.push(e),onKeyDown:C,onFocus:T,onClick:T},i,{className:(0,a.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,o.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function c(e){const t=(0,i.Z)();return o.createElement(m,(0,r.Z)({key:String(t)},e))}},77942:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(37949),o=n(90077),a=n(37614),i=n(2784),d=n(90943);function l(e){const t=(0,a.Z)(),[n]=(0,i.useState)(!1),l=(0,o.Z)("/"),[p,s]=(0,i.useState)(""),[u,m]=(0,i.useState)((0,d.V)(t)),{preferredVersion:c}=(0,r.J)();return(0,i.useEffect)((()=>{const t=null==c?void 0:c.name;s(void 0===t||"current"===t?l+`webcomponent-examples/${e.name}.html`:l+`versioned_examples/version-${t}/webcomponent-examples/${e.name}.html`)}),[l,null==c?void 0:c.name,e.name]),(0,i.useLayoutEffect)((()=>{const e=()=>{let e=(0,d.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),m(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),i.createElement(i.Fragment,null,n?i.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==c?void 0:c.name):i.createElement("iframe",{src:`${p}?theme=${e.theme?e.theme:u}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},64176:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(82009),o=n(1112),a=n(2784),i=n(77942);const d={angular:1,react:2,javascript:3,preview:4};function l(e){const t=e.children??[],n=Array.isArray(t)?t:[t];return a.createElement(o.Z,{groupId:e.name,values:[{value:"preview",label:"Preview"},...[{value:"angular",label:"Angular"},{value:"react",label:"React"},{value:"javascript",label:"Web Components"}].filter((e=>n.map((e=>e.props.value)).includes(e.value)))],defaultValue:"preview"},[a.createElement(r.Z,{value:"preview",key:"preview"},a.createElement(i.Z,{name:e.name,height:e.height,noMargin:e.noMargin})),...n].sort(((e,t)=>d[e.props.value]-d[t.props.value])))}},40959:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/ix-dropdown/events",id:"version-1.0.0/auto-generated/ix-dropdown/events",title:"events",description:"| Name       | Description                   | Attribute        | Detail |",source:"@site/versioned_docs/version-1.0.0/auto-generated/ix-dropdown/events.md",sourceDirName:"auto-generated/ix-dropdown",slug:"/auto-generated/ix-dropdown/events",permalink:"/docs/auto-generated/ix-dropdown/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/ix-dropdown/events.md",tags:[],version:"1.0.0",frontMatter:{}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,o.kt)("th",{parentName:"tr",align:null},"Detail"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"showChanged"),(0,o.kt)("td",{parentName:"tr",align:null},"Fire event after visibility of dropdown has changed"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0},83905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/ix-dropdown/props",id:"version-1.0.0/auto-generated/ix-dropdown/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/versioned_docs/version-1.0.0/auto-generated/ix-dropdown/props.md",sourceDirName:"auto-generated/ix-dropdown",slug:"/auto-generated/ix-dropdown/props",permalink:"/docs/auto-generated/ix-dropdown/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/ix-dropdown/props.md",tags:[],version:"1.0.0",frontMatter:{}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"adjustDropdownWidthToReferenceWidth"),(0,o.kt)("td",{parentName:"tr",align:null},"Adjust dropdown width to the parent width"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"adjust-dropdown-width-to-reference-width")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"adjustDropdownWidthToReferenceWith"),(0,o.kt)("td",{parentName:"tr",align:null},"Adjust dropdown width to the parent width"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"adjust-dropdown-width-to-reference-with")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"anchor"),(0,o.kt)("td",{parentName:"tr",align:null},"Define an anchor element"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"anchor")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HTMLElement \uff5c string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"closeBehavior"),(0,o.kt)("td",{parentName:"tr",align:null},"Close behavior"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"close-behavior")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"both" \uff5c "inside" \uff5c "outside" \uff5c boolean')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"'both'"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"header"),(0,o.kt)("td",{parentName:"tr",align:null},"An optional header shown at the top of the dropdown"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"header")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"placement"),(0,o.kt)("td",{parentName:"tr",align:null},"Placement of the dropdown"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"placement")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"auto" \uff5c "auto-end" \uff5c "auto-start" \uff5c "bottom" \uff5c "bottom-end" \uff5c "bottom-start" \uff5c "left" \uff5c "left-end" \uff5c "left-start" \uff5c "right" \uff5c "right-end" \uff5c "right-start" \uff5c "top" \uff5c "top-end" \uff5c "top-start"')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"'bottom-end'"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"positioningStrategy"),(0,o.kt)("td",{parentName:"tr",align:null},"Position strategy"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"positioning-strategy")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'"absolute" \uff5c "fixed"')),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"'fixed'"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"show"),(0,o.kt)("td",{parentName:"tr",align:null},"Show dropdown"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"show")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"boolean")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"false"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"trigger"),(0,o.kt)("td",{parentName:"tr",align:null},"Define an element that triggers the dropdown. A trigger can either be a string that will be interprated as id attribute or a DOM element."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"trigger")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"HTMLElement \uff5c string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undefined"))))))}u.isMDXComponent=!0},77874:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/angular/dropdown-icon",id:"version-1.0.0/auto-generated/previews/angular/dropdown-icon",title:"dropdown-icon",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/angular/dropdown-icon.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/dropdown-icon",permalink:"/docs/auto-generated/previews/angular/dropdown-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/angular/dropdown-icon.md",tags:[],version:"1.0.0",frontMatter:{}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-dropdown-icon\',\n  template: `\n    <ix-button id="iconTriggerId">Open</ix-button>\n    <ix-dropdown trigger="iconTriggerId">\n      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>\n      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>\n      <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>\n    </ix-dropdown>\n  `,\n})\nexport class DropdownIcon {}\n')))}u.isMDXComponent=!0},64836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/angular/dropdown",id:"version-1.0.0/auto-generated/previews/angular/dropdown",title:"dropdown",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/angular/dropdown.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/dropdown",permalink:"/docs/auto-generated/previews/angular/dropdown",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/angular/dropdown.md",tags:[],version:"1.0.0",frontMatter:{}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-dropdown\',\n  template: `\n    <ix-button id="triggerId">Open</ix-button>\n    <ix-dropdown trigger="triggerId">\n      <ix-dropdown-item label="Item 1"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 2"></ix-dropdown-item>\n      <ix-dropdown-item label="Item 3"></ix-dropdown-item>\n    </ix-dropdown>\n  `,\n})\nexport class Dropdown {}\n')))}u.isMDXComponent=!0},45151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/react/dropdown-icon",id:"version-1.0.0/auto-generated/previews/react/dropdown-icon",title:"dropdown-icon",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/react/dropdown-icon.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/dropdown-icon",permalink:"/docs/auto-generated/previews/react/dropdown-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/react/dropdown-icon.md",tags:[],version:"1.0.0",frontMatter:{}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton, IxDropdown, IxDropdownItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const DropdownIcon: React.FC = () => {\n  return (\n    <>\n      <IxButton id="triggerId">Open</IxButton>\n      <IxDropdown trigger="triggerId">\n        <IxDropdownItem label="Item 1" icon="star"></IxDropdownItem>\n        <IxDropdownItem label="Item 2" icon="document"></IxDropdownItem>\n        <IxDropdownItem label="Item 3" icon="bulb"></IxDropdownItem>\n      </IxDropdown>\n    </>\n  );\n};\n')))}u.isMDXComponent=!0},16910:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/react/dropdown",id:"version-1.0.0/auto-generated/previews/react/dropdown",title:"dropdown",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/react/dropdown.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/dropdown",permalink:"/docs/auto-generated/previews/react/dropdown",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/react/dropdown.md",tags:[],version:"1.0.0",frontMatter:{}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton, IxDropdown, IxDropdownItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const Dropdown: React.FC = () => {\n  return (\n    <>\n      <IxButton id="triggerId">Open</IxButton>\n      <IxDropdown trigger="triggerId">\n        <IxDropdownItem label="Item 1"></IxDropdownItem>\n        <IxDropdownItem label="Item 2"></IxDropdownItem>\n        <IxDropdownItem label="Item 3"></IxDropdownItem>\n      </IxDropdown>\n    </>\n  );\n};\n')))}u.isMDXComponent=!0},99765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/web-component/dropdown-icon",id:"version-1.0.0/auto-generated/previews/web-component/dropdown-icon",title:"dropdown-icon",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/web-component/dropdown-icon.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/dropdown-icon",permalink:"/docs/auto-generated/previews/web-component/dropdown-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/web-component/dropdown-icon.md",tags:[],version:"1.0.0",frontMatter:{}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ix-button id="iconTriggerId">Open</ix-button>\n<ix-dropdown trigger="iconTriggerId">\n  <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>\n  <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>\n  <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>\n</ix-dropdown>\n')))}u.isMDXComponent=!0},5943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var r=n(7896),o=(n(2784),n(30876));const a={},i=void 0,d={unversionedId:"auto-generated/previews/web-component/dropdown",id:"version-1.0.0/auto-generated/previews/web-component/dropdown",title:"dropdown",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/web-component/dropdown.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/dropdown",permalink:"/docs/auto-generated/previews/web-component/dropdown",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/web-component/dropdown.md",tags:[],version:"1.0.0",frontMatter:{}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ix-button id="triggerId">Open</ix-button>\n<ix-dropdown trigger="triggerId">\n  <ix-dropdown-item label="Item 1"></ix-dropdown-item>\n  <ix-dropdown-item label="Item 2"></ix-dropdown-item>\n  <ix-dropdown-item label="Item 3"></ix-dropdown-item>\n</ix-dropdown>\n')))}u.isMDXComponent=!0},17718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>v,default:()=>x,frontMatter:()=>g,metadata:()=>k,toc:()=>b});var r=n(7896),o=(n(2784),n(30876)),a=n(82009),i=n(64176),d=n(83905),l=n(40959),p=n(5943),s=n(99765),u=n(16910),m=n(45151),c=n(64836),w=n(77874);const g={},v="Dropdown",k={unversionedId:"controls/dropdown",id:"version-1.0.0/controls/dropdown",title:"Dropdown",description:"Usage",source:"@site/versioned_docs/version-1.0.0/controls/dropdown.md",sourceDirName:"controls",slug:"/controls/dropdown",permalink:"/docs/controls/dropdown",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/controls/dropdown.md",tags:[],version:"1.0.0",frontMatter:{},sidebar:"mySidebar",previous:{title:"Drawer",permalink:"/docs/controls/drawer"},next:{title:"Event List",permalink:"/docs/controls/event-list"}},f={},b=[{value:"Usage",id:"usage",level:2},{value:"Dropdown with icon",id:"dropdown-with-icon",level:3},{value:"Properties (ix-dropdown)",id:"properties-ix-dropdown",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3},{value:"Properties (ix-dropdown-item)",id:"properties-ix-dropdown-item",level:2},{value:"Props",id:"props-1",level:3},{value:"Events",id:"events-1",level:3}],h={toc:b};function x(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dropdown"},"Dropdown"),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(i.Z,{name:"dropdown",height:"16rem",mdxType:"Preview"},(0,o.kt)(a.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)(p.default,{mdxType:"SourceDropdown"})),(0,o.kt)(a.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)(u.default,{mdxType:"SourceReactDropdown"})),(0,o.kt)(a.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)(c.default,{mdxType:"SourceAngularDropdown"}))),(0,o.kt)("h3",{id:"dropdown-with-icon"},"Dropdown with icon"),(0,o.kt)(i.Z,{name:"dropdown-icon",height:"16rem",mdxType:"Preview"},(0,o.kt)(a.Z,{value:"javascript",mdxType:"TabItem"},(0,o.kt)(s.default,{mdxType:"SourceDropdownIcon"})),(0,o.kt)(a.Z,{value:"react",mdxType:"TabItem"},(0,o.kt)(m.default,{mdxType:"SourceReactDropdownIcon"})),(0,o.kt)(a.Z,{value:"angular",mdxType:"TabItem"},(0,o.kt)(w.default,{mdxType:"SourceAngularDropdownIcon"}))),(0,o.kt)("h2",{id:"properties-ix-dropdown"},"Properties (ix-dropdown)"),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)(d.default,{mdxType:"Props"}),(0,o.kt)("h3",{id:"events"},"Events"),(0,o.kt)(l.default,{mdxType:"Events"}),(0,o.kt)("h2",{id:"properties-ix-dropdown-item"},"Properties (ix-dropdown-item)"),(0,o.kt)("h3",{id:"props-1"},"Props"),(0,o.kt)(d.default,{mdxType:"ItemProps"}),(0,o.kt)("h3",{id:"events-1"},"Events"),(0,o.kt)(l.default,{mdxType:"ItemEvents"}))}x.isMDXComponent=!0}}]);