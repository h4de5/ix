"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[69440],{46931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(97458),a=n(16436);const r={},c=void 0,s={id:"auto-generated/previews/angular/datepicker-locale.ts",title:"datepicker-locale.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/datepicker-locale.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/datepicker-locale.ts",permalink:"/docs/auto-generated/previews/angular/datepicker-locale.ts",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/datepicker-locale.ts.md",tags:[],version:"current",frontMatter:{}},i={},l=[];function d(e){const t={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"/*\n * SPDX-FileCopyrightText: 2024 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './datepicker-locale.html',\n})\nexport default class DatepickerLocale {\n  locale: 'de' \uff5c 'en' \uff5c (string & {}) = 'de';\n\n  setLocale(event: Event) {\n    const { detail } = event as CustomEvent<string>;\n\n    this.locale = detail;\n  }\n}\n\n"})})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},16436:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>c});var o=n(52983);const a={},r=o.createContext(a);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);