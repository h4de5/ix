"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[26354],{29845:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var o=t(97458),r=t(16436);const a={},i=void 0,c={id:"auto-generated/previews/vue/application-header",title:"application-header",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/application-header.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/application-header",permalink:"/docs/auto-generated/previews/vue/application-header",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/application-header.md",tags:[],version:"current",frontMatter:{}},s={},d=[];function p(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'\x3c!--\n * SPDX-FileCopyrightText: 2024 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport {\n  IxApplicationHeader,\n  IxAvatar,\n  IxDropdownButton,\n  IxDropdownItem,\n  IxIconButton,\n} from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <IxApplicationHeader name="My Application">\n    <div className="placeholder-logo" slot="logo"></div>\n\n    <IxIconButton ghost icon="checkboxes"></IxIconButton>\n    <IxIconButton ghost icon="checkboxes"></IxIconButton>\n    <IxIconButton ghost icon="checkboxes"></IxIconButton>\n\n    <IxDropdownButton variant="secondary" label="Select config" ghost>\n      <IxDropdownItem label="Config 1"></IxDropdownItem>\n      <IxDropdownItem label="Config 2"></IxDropdownItem>\n      <IxDropdownItem label="Config 3"></IxDropdownItem>\n    </IxDropdownButton>\n\n    <IxAvatar username="John Doe" extra="Administrator">\n      <IxDropdownItem label="Action 1"></IxDropdownItem>\n      <IxDropdownItem label="Action 2"></IxDropdownItem>\n    </IxAvatar>\n  </IxApplicationHeader>\n</template>\n\n'})})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},16436:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var o=t(52983);const r={},a=o.createContext(r);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);