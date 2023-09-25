"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[13689],{13689:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var o=n(7896),a=(n(2784),n(30876));const s={},i=void 0,d={unversionedId:"auto-generated/previews/web-component/modal-sizes",id:"auto-generated/previews/web-component/modal-sizes",title:"modal-sizes",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/modal-sizes.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/modal-sizes",permalink:"/version-dev/docs/auto-generated/previews/web-component/modal-sizes",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/modal-sizes.md",tags:[],version:"current",frontMatter:{}},l={},m=[],u={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="modal-sizes-example">\n  <ix-button data-modal-size="360">Show modal size 360</ix-button>\n  <ix-button data-modal-size="480">Show modal size 480</ix-button>\n  <ix-button data-modal-size="600">Show modal size 600</ix-button>\n  <ix-button data-modal-size="720">Show modal size 720</ix-button>\n  <ix-button data-modal-size="840">Show modal size 840</ix-button>\n  <ix-button data-modal-size="full-width">Show full-width modal</ix-button>\n  <ix-button data-modal-size="full-screen"\n    >Show modal size full-screen</ix-button\n  >\n</div>\n\n<template id="modal-example-template">\n  <ix-button style="width: 100%"></ix-button>\n</template>\n<script type="module">\n  import { showModal, dismissModal } from \'@siemens/ix\';\n\n  function createExampleModal() {\n    const name = \'modal-example\';\n    window.customElements.define(\n      name,\n      class extends HTMLElement {\n        isInitalRender = false;\n\n        constructor() {\n          super();\n\n          this.size = \'360\';\n        }\n\n        connectedCallback() {\n          if (this.isInitalRender) {\n            return;\n          }\n\n          this.isInitalRender = true;\n          this.firstRender();\n        }\n\n        firstRender() {\n          const modalTemplate = document.getElementById(\n            \'modal-example-template\'\n          );\n          const template = modalTemplate.content.cloneNode(true);\n          const button = template.querySelector(\'ix-button\');\n          button.innerText = `Modal with size ${this.size}`;\n          button.addEventListener(\'click\', () => dismissModal(this));\n          this.append(template);\n        }\n      }\n    );\n\n    return name;\n  }\n\n  (async function () {\n    const exampleModalName = createExampleModal();\n\n    await window.customElements.whenDefined(\'ix-button\');\n    const buttons = document.querySelectorAll(\'ix-button\');\n\n    buttons.forEach((button) =>\n      button.addEventListener(\'click\', async () => {\n        const customModal = document.createElement(exampleModalName);\n        customModal.size = button.getAttribute(\'data-modal-size\');\n        const modal = await showModal({\n          content: customModal,\n          size: customModal.size,\n        });\n      })\n    );\n  })();\n<\/script>\n')))}c.isMDXComponent=!0}}]);