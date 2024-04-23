"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[63827],{22794:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=t(97458),a=t(16436);const i={},r=void 0,p={id:"auto-generated/previews/vue/application-breakpoints",title:"application-breakpoints",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/application-breakpoints.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/application-breakpoints",permalink:"/docs/auto-generated/previews/vue/application-breakpoints",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/application-breakpoints.md",tags:[],version:"current",frontMatter:{}},s={},c=[];function l(n){const e={code:"code",pre:"pre",...(0,a.a)(),...n.components};return(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-html",children:'\x3c!--\n * SPDX-FileCopyrightText: 2024 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport {\n  Breakpoint\n} from \'@siemens/ix\';\nimport {\n  IxApplication,\n  IxApplicationHeader,\n  IxAvatar,\n  IxContent,\n  IxContentHeader,\n  IxDropdownButton,\n  IxDropdownItem,\n  IxIconButton,\n  IxMenu,\n  IxMenuItem,\n} from \'@siemens/ix-vue\';\n<\/script>\n\n<script lang="ts">\nexport default {\n  data(): {\n    breakpoints: Breakpoint[]\n  } {\n    return {\n      breakpoints: [\'md\']\n    }\n  },\n  methods: {\n    setBreakpoint(breakpoint: Breakpoint) {\n      this.breakpoints = [breakpoint];\n    }\n  },\n}\n<\/script>\n\n<template>\n  <IxApplication :breakpoints="breakpoints">\n    <IxApplicationHeader name="My Application">\n      <div className="placeholder-logo" slot="logo"></div>\n\n      <IxIconButton ghost icon="checkboxes"></IxIconButton>\n      <IxIconButton ghost icon="checkboxes"></IxIconButton>\n      <IxIconButton ghost icon="checkboxes"></IxIconButton>\n\n      <IxDropdownButton variant="secondary" label="Select config" ghost>\n        <IxDropdownItem label="Config 1"></IxDropdownItem>\n        <IxDropdownItem label="Config 2"></IxDropdownItem>\n        <IxDropdownItem label="Config 3"></IxDropdownItem>\n      </IxDropdownButton>\n\n      <IxAvatar>\n        <IxDropdownItem label="Action 1"></IxDropdownItem>\n        <IxDropdownItem label="Action 2"></IxDropdownItem>\n        <IxDropdownItem label="Action 3"></IxDropdownItem>\n      </IxAvatar>\n    </IxApplicationHeader>\n    <IxMenu>\n      <IxMenuItem>Item 1</IxMenuItem>\n      <IxMenuItem>Item 2</IxMenuItem>\n    </IxMenu>\n\n    <IxContent>\n      <IxContentHeader\n        slot="header"\n        header-title="Choose breakpoint"\n      ></IxContentHeader>\n      <input\n        id="small"\n        type="radio"\n        name="layout"\n        value="sm"\n        :checked="breakpoints[0] === \'sm\'"\n        @change="() => setBreakpoint(\'sm\')"\n      />\n      <label for="small">Small</label>\n\n      <input\n        id="medium"\n        type="radio"\n        name="layout"\n        value="md"\n        :checked="breakpoints[0] === \'md\'"\n        @change="() => setBreakpoint(\'md\')"\n      />\n      <label for="medium">Medium</label>\n\n      <input\n        id="large"\n        type="radio"\n        name="layout"\n        value="lg"\n        :checked="breakpoints[0] === \'lg\'"\n        @change="() => setBreakpoint(\'lg\')"\n      />\n      <label for="large">Large</label>\n    </IxContent>\n  </IxApplication>\n</template>\n\n'})})}function d(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},16436:(n,e,t)=>{t.d(e,{Z:()=>p,a:()=>r});var o=t(52983);const a={},i=o.createContext(a);function r(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function p(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);