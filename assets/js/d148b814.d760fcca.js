"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68445],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7896),o=(n(2784),n(30876));const i={},a=void 0,p={unversionedId:"auto-generated/previews/angular/kpi",id:"version-1.0.0/auto-generated/previews/angular/kpi",title:"kpi",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/angular/kpi.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/kpi",permalink:"/docs/auto-generated/previews/angular/kpi",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/angular/kpi.md",tags:[],version:"1.0.0",frontMatter:{}},l={},c=[],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-kpi\',\n  template: `\n    <ix-kpi label="Motor speed" value="Nominal"></ix-kpi>\n    <ix-kpi label="Motor speed" value="{122.6}" unit="rpm"></ix-kpi>\n    <ix-kpi label="Motor speed" value="{122.6}" state="alarm"></ix-kpi>\n    <ix-kpi label="Motor speed" value="{122.6}" state="warning"></ix-kpi>\n\n    <ix-kpi label="Motor speed" value="Nominal" orientation="vertical"></ix-kpi>\n    <ix-kpi\n      label="Motor speed"\n      value="{122.6}"\n      unit="rpm"\n      state="alarm"\n      orientation="vertical"\n    ></ix-kpi>\n  `,\n})\nexport class Kpi {}\n')))}u.isMDXComponent=!0}}]);