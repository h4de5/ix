"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49290],{49290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=a(7896),n=(a(2784),a(30876));const r={},o=void 0,i={unversionedId:"auto-generated/previews/react/message-bar",id:"auto-generated/previews/react/message-bar",title:"message-bar",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/message-bar.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/message-bar",permalink:"/docs/auto-generated/previews/react/message-bar",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/message-bar.md",tags:[],version:"current",frontMatter:{}},c={},d=[],m={toc:d};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,s.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2023 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxButton, IxMessageBar } from '@siemens/ix-react';\nimport React from 'react';\n\nexport default () => {\n  return (\n    <>\n      <div style={{ padding: '0.5rem' }}>\n        <IxMessageBar style={{marginBottom: '0.5rem', display: 'block'}}>Message text</IxMessageBar>\n        <IxMessageBar style={{marginBottom: '0.5rem', display: 'block'}}>Message text</IxMessageBar>\n        <IxMessageBar style={{display: 'block'}}type=\"danger\">\n          <div className=\"d-flex align-items-center justify-content-between\">\n            Message text <IxButton>Action</IxButton>\n          </div>\n        </IxMessageBar>\n      </div>\n    </>\n  );\n};\n\n")))}g.isMDXComponent=!0}}]);