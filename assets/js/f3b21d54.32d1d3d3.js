"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47867],{30876:(e,n,r)=>{r.d(n,{Zo:()=>l,kt:()=>m});var t=r(2784);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),d=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=d(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=d(r),m=o,f=s["".concat(p,".").concat(m)]||s[m]||u[m]||i;return r?t.createElement(f,a(a({ref:n},l),{},{components:r})):t.createElement(f,a({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=s;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=r[d];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},77874:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=r(7896),o=(r(2784),r(30876));const i={},a=void 0,c={unversionedId:"auto-generated/previews/angular/dropdown-icon",id:"version-1.0.0/auto-generated/previews/angular/dropdown-icon",title:"dropdown-icon",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/auto-generated/previews/angular/dropdown-icon.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/dropdown-icon",permalink:"/docs/auto-generated/previews/angular/dropdown-icon",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/auto-generated/previews/angular/dropdown-icon.md",tags:[],version:"1.0.0",frontMatter:{}},p={},d=[],l={toc:d};function u(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-dropdown-icon\',\n  template: `\n    <ix-button id="iconTriggerId">Open</ix-button>\n    <ix-dropdown trigger="iconTriggerId">\n      <ix-dropdown-item icon="star" label="Item 1"></ix-dropdown-item>\n      <ix-dropdown-item icon="document" label="Item 2"></ix-dropdown-item>\n      <ix-dropdown-item icon="bulb" label="Item 3"></ix-dropdown-item>\n    </ix-dropdown>\n  `,\n})\nexport class DropdownIcon {}\n')))}u.isMDXComponent=!0}}]);