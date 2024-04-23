"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[39543],{64540:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=t(97458),r=t(16436);const a={},d=void 0,i={id:"auto-generated/previews/react/date-dropdown-user-range",title:"date-dropdown-user-range",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/date-dropdown-user-range.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/date-dropdown-user-range",permalink:"/docs/auto-generated/previews/react/date-dropdown-user-range",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/date-dropdown-user-range.md",tags:[],version:"current",frontMatter:{}},s={},c=[];function u(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"/*\n * SPDX-FileCopyrightText: 2024 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { DateDropdownOption } from '@siemens/ix';\nimport { IxDateDropdown } from '@siemens/ix-react';\nimport React from 'react';\n\nconst today = new Date().toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\nconst lastSevenDays = new Date(\n  new Date().getTime() - 7 * 24 * 60 * 60 * 1000\n).toLocaleDateString('en-US', {\n  year: 'numeric',\n  month: '2-digit',\n  day: '2-digit',\n});\n\nconst dateRangeOptions: DateDropdownOption[] = [\n  {\n    id: 'last-7',\n    label: 'Last 7 days',\n    from: lastSevenDays,\n    to: today,\n  },\n  {\n    id: 'today',\n    label: 'Today',\n    from: today,\n    to: today,\n  },\n];\n\nexport default () => {\n  return (\n    <IxDateDropdown\n      dateRangeOptions={dateRangeOptions}\n      date-range-id=\"last-7\"\n      format=\"LL/dd/yyyy\"\n    />\n  );\n};\n\n"})})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},16436:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>d});var o=t(52983);const r={},a=o.createContext(r);function d(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);