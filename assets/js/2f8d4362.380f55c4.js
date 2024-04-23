"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29927],{6061:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var o=n(97458),i=n(16436);const s={},r=void 0,c={id:"auto-generated/previews/vue/tooltip",title:"tooltip",description:"\x3c!--",source:"@site/docs/auto-generated/previews/vue/tooltip.md",sourceDirName:"auto-generated/previews/vue",slug:"/auto-generated/previews/vue/tooltip",permalink:"/docs/auto-generated/previews/vue/tooltip",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/vue/tooltip.md",tags:[],version:"current",frontMatter:{}},a={},u=[];function l(e){const t={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-html",children:'\x3c!--\n * SPDX-FileCopyrightText: 2024 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n--\x3e\n\n<script setup lang="ts">\nimport { IxButton, IxTooltip } from \'@siemens/ix-vue\';\n<\/script>\n\n<template>\n  <div :style="{ padding: \'4rem\' }">\n    <IxButton class="any-class" aria-describedby="tooltip-1">\n      Hover me\n    </IxButton>\n    <IxTooltip id="tooltip-1" for=".any-class">Simple selector</IxTooltip>\n\n    <IxButton my-custom-special-selector="any-value" aria-describedby="tooltip-2">Also hover me</IxButton>\n    <IxTooltip id="tooltip-2" for="[my-custom-special-selector=\'any-value\']">\n      Custom selector\n    </IxTooltip>\n  </div>\n</template>\n\n'})})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},16436:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var o=n(52983);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);