"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[76076],{30876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},20414:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7896),o=(r(2784),r(30876));const a={},i=void 0,s={unversionedId:"auto-generated/previews/react/blind",id:"version-1.0.0/auto-generated/previews/react/blind",title:"blind",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/react/blind.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/blind",permalink:"/docs/auto-generated/previews/react/blind",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/react/blind.md",tags:[],version:"1.0.0",frontMatter:{}},c={},u=[],l={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxBlind } from '@siemens/ix-react';\nimport React from 'react';\n\nexport const Blind: React.FC = () => {\n  return (\n    <IxBlind label=\"Example\">\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet\n      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit\n      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed\n      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n      sit amet.\n    </IxBlind>\n  );\n};\n")))}d.isMDXComponent=!0}}]);