"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[49857],{61780:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>r,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=t(97458),a=t(16436);const s={},i=void 0,d={id:"auto-generated/previews/web-component/modal-sizes",title:"modal-sizes",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/modal-sizes.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/modal-sizes",permalink:"/docs/auto-generated/previews/web-component/modal-sizes",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/modal-sizes.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function m(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-html",children:'<div class="modal-sizes-example">\n  <ix-button data-modal-size="360">Show modal size 360</ix-button>\n  <ix-button data-modal-size="480">Show modal size 480</ix-button>\n  <ix-button data-modal-size="600">Show modal size 600</ix-button>\n  <ix-button data-modal-size="720">Show modal size 720</ix-button>\n  <ix-button data-modal-size="840">Show modal size 840</ix-button>\n  <ix-button data-modal-size="full-width">Show full-width modal</ix-button>\n  <ix-button data-modal-size="full-screen"\n    >Show modal size full-screen</ix-button\n  >\n</div>\n\n<template id="modal-example-template">\n  <ix-button style="width: 100%"></ix-button>\n</template>\n<script type="module">\n  import { showModal, dismissModal } from \'@siemens/ix\';\n\n  function createExampleModal() {\n    const name = \'modal-example\';\n    window.customElements.define(\n      name,\n      class extends HTMLElement {\n        isInitalRender = false;\n\n        constructor() {\n          super();\n\n          this.size = \'360\';\n        }\n\n        connectedCallback() {\n          if (this.isInitalRender) {\n            return;\n          }\n\n          this.isInitalRender = true;\n          this.firstRender();\n        }\n\n        firstRender() {\n          const modalTemplate = document.getElementById(\n            \'modal-example-template\'\n          );\n          const template = modalTemplate.content.cloneNode(true);\n          const button = template.querySelector(\'ix-button\');\n          button.innerText = `Modal with size ${this.size}`;\n          button.addEventListener(\'click\', () => dismissModal(this));\n          this.append(template);\n        }\n      }\n    );\n\n    return name;\n  }\n\n  (async function () {\n    const exampleModalName = createExampleModal();\n\n    await window.customElements.whenDefined(\'ix-button\');\n    const buttons = document.querySelectorAll(\'ix-button\');\n\n    buttons.forEach((button) =>\n      button.addEventListener(\'click\', async () => {\n        const customModal = document.createElement(exampleModalName);\n        customModal.size = button.getAttribute(\'data-modal-size\');\n        const modal = await showModal({\n          content: customModal,\n          size: customModal.size,\n        });\n      })\n    );\n  })();\n<\/script>\n'})})}function r(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},16436:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>i});var o=t(52983);const a={},s=o.createContext(a);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);