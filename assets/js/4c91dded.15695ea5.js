"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16629],{65428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(97458),s=t(16436);const i={},o=void 0,r={id:"auto-generated/previews/angular/tabs.ts",title:"tabs.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/tabs.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/tabs.ts",permalink:"/docs/auto-generated/previews/angular/tabs.ts",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/tabs.ts.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function l(e){const n={code:"code",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'/*\n * SPDX-FileCopyrightText: 2024 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  styles: [\n    `\n      :host {\n        .example {\n          display: block;\n          position: relative;\n          width: 100%;\n        }\n      }\n    `,\n  ],\n  template: `\n    <div class="example">\n      <ix-tabs [selected]="selectedTab">\n        <ix-tab-item (click)="changeTab(0)">Tab 1</ix-tab-item>\n        <ix-tab-item (click)="changeTab(1)">Tab 2</ix-tab-item>\n        <ix-tab-item (click)="changeTab(2)">Tab 3</ix-tab-item>\n      </ix-tabs>\n      <div *ngIf="selectedTab === 0">Content Tab 1</div>\n      <div *ngIf="selectedTab === 1">Content Tab 2</div>\n      <div *ngIf="selectedTab === 2">Content Tab 3</div>\n    </div>\n  `,\n})\nexport default class Tabs {\n  selectedTab = 1;\n\n  changeTab(tabIndex: number) {\n    this.selectedTab = tabIndex;\n  }\n}\n\n'})})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},16436:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var a=t(52983);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);