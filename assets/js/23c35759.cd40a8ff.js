"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89229],{30876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},80027:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7896),o=(r(2784),r(30876));const a={},i=void 0,c={unversionedId:"auto-generated/previews/react/kpi",id:"auto-generated/previews/react/kpi",title:"kpi",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/kpi.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/kpi",permalink:"/docs/next/auto-generated/previews/react/kpi",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/kpi.md",tags:[],version:"current",frontMatter:{}},p={},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxKpi } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport const Kpi: React.FC = () => {\n  return (\n    <div className="example">\n      <IxKpi label="Motor speed" value="Nominal"></IxKpi>\n      <IxKpi label="Motor speed" value="{122.6}" unit="rpm"></IxKpi>\n      <IxKpi label="Motor speed" value="{122.6}" state="alarm"></IxKpi>\n      <IxKpi label="Motor speed" value="{122.6}" state="warning"></IxKpi>\n\n      <IxKpi label="Motor speed" value="Nominal" orientation="vertical"></IxKpi>\n      <IxKpi\n        label="Motor speed"\n        value="{122.6}"\n        unit="rpm"\n        state="alarm"\n        orientation="vertical"\n      ></IxKpi>\n    </div>\n  );\n};\n')))}u.isMDXComponent=!0}}]);