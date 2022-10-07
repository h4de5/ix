"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[21916],{30876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,v=m["".concat(s,".").concat(f)]||m[f]||u[f]||c;return r?n.createElement(v,a(a({ref:t},l),{},{components:r})):n.createElement(v,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=r(7896),o=(r(2784),r(30876));const c={},a=void 0,i={unversionedId:"auto-generated/previews/react/event-list-compact",id:"auto-generated/previews/react/event-list-compact",title:"event-list-compact",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/event-list-compact.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/event-list-compact",permalink:"/docs/next/auto-generated/previews/react/event-list-compact",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/event-list-compact.md",tags:[],version:"current",frontMatter:{}},s={},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxEventList, IxEventListItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const EventListCompact: React.FC = () => {\n  return (\n    <IxEventList compact>\n      <IxEventListItem color="color-primary">Text 1</IxEventListItem>\n      <IxEventListItem color="color-primary">Text 2</IxEventListItem>\n      <IxEventListItem color="color-primary">Text 3</IxEventListItem>\n      <IxEventListItem color="color-primary">Text 4</IxEventListItem>\n    </IxEventList>\n  );\n};\n')))}u.isMDXComponent=!0}}]);