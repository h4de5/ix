"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[91710],{63:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=t(97458),a=t(16436);const s={},i=void 0,l={id:"auto-generated/previews/angular/modal-by-template.ts",title:"modal-by-template.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/modal-by-template.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/modal-by-template.ts",permalink:"/docs/auto-generated/previews/angular/modal-by-template.ts",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/modal-by-template.ts.md",tags:[],version:"current",frontMatter:{}},r={},d=[];function c(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"/*\n * SPDX-FileCopyrightText: 2024 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component, TemplateRef, ViewChild } from '@angular/core';\nimport { ModalService } from '@siemens/ix-angular';\n\n@Component({\n  selector: 'app-example',\n  template: `\n    <ix-button (click)=\"openModal()\">Show modal</ix-button>\n\n    <ng-template #customModal let-modal>\n      <div>\n        <ix-modal-header> Message headline </ix-modal-header>\n        <ix-modal-content\n          >Message text lorem ipsum: {{ modal.data }}</ix-modal-content\n        >\n        <ix-modal-footer>\n          <ix-button\n            outline\n            class=\"dismiss-modal\"\n            (click)=\"modal.dismiss('dismiss')\"\n          >\n            Cancel\n          </ix-button>\n          <ix-button class=\"close-modal\" (click)=\"modal.close('okay')\">\n            OK\n          </ix-button>\n        </ix-modal-footer>\n      </div>\n    </ng-template>\n  `,\n})\nexport default class Modal {\n  @ViewChild('customModal', { read: TemplateRef })\n  customModalRef!: TemplateRef<any>;\n\n  constructor(private readonly modalService: ModalService) {}\n\n  async openModal() {\n    const instance = await this.modalService.open({\n      content: this.customModalRef,\n      data: 'Some data',\n    });\n\n    instance.onClose.on((a) => {\n      console.log(a);\n    });\n\n    instance.htmlElement.addEventListener(\n      'keydown',\n      (keyboardEvent: KeyboardEvent) => {\n        console.log(keyboardEvent.key);\n      }\n    );\n  }\n}\n\n"})})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},16436:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var o=t(52983);const a={},s=o.createContext(a);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);