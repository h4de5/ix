"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[40309],{62730:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var o=t(97458),r=t(16436);const a={},s=void 0,d={id:"auto-generated/previews/angular/date-dropdown-user-range.ts",title:"date-dropdown-user-range.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/date-dropdown-user-range.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/date-dropdown-user-range.ts",permalink:"/docs/auto-generated/previews/angular/date-dropdown-user-range.ts",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/date-dropdown-user-range.ts.md",tags:[],version:"current",frontMatter:{}},i={},c=[];function u(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"/*\n * SPDX-FileCopyrightText: 2024 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from '@angular/core';\nimport { DateDropdownOption } from '@siemens/ix';\n\nconst today = new Date().toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\nconst lastSevenDays = new Date(\n  new Date().getTime() - 7 * 24 * 60 * 60 * 1000\n).toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\n@Component({\n  selector: 'app-example',\n  templateUrl: './date-dropdown-user-range.html',\n})\nexport default class DateDropdownUserRange {\n  dateDropdownOptions: DateDropdownOption[] = [\n    {\n      id: 'last-7',\n      label: 'Last 7 days',\n      from: lastSevenDays,\n      to: today,\n    },\n    {\n      id: 'today',\n      label: 'Today',\n      from: today,\n      to: today,\n    },\n  ];\n}\n\n"})})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},16436:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var o=t(52983);const r={},a=o.createContext(r);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);