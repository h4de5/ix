"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64384],{33237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(97458),o=n(16436);const s={},a=void 0,c={id:"auto-generated/previews/react/drawer",title:"drawer",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/drawer.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/drawer",permalink:"/docs/auto-generated/previews/react/drawer",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/drawer.md",tags:[],version:"current",frontMatter:{}},i={},d=[];function u(e){const t={code:"code",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"/*\n * SPDX-FileCopyrightText: 2024 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton, IxDrawer } from '@siemens/ix-react';\nimport React, { useState } from 'react';\n\nexport default () => {\n  const [show, setShow] = useState(false);\n\n  return (\n    <>\n      <IxDrawer\n        closeOnClickOutside={true}\n        show={show}\n        onDrawerClose={() => setShow(false)}\n      >\n        <span>Some content of drawer</span>\n      </IxDrawer>\n      <IxButton onClick={() => setShow(!show)}>Toggle drawer</IxButton>\n    </>\n  );\n};\n\n"})})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},16436:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var r=n(52983);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);