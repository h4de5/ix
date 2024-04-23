"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[60106],{93219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=t(97458),r=t(16436);const o={},a=void 0,c={id:"auto-generated/previews/react/chip",title:"chip",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/chip.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/chip",permalink:"/docs/auto-generated/previews/react/chip",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/chip.md",tags:[],version:"current",frontMatter:{}},s={},p=[];function l(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'/*\n * SPDX-FileCopyrightText: 2024 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport { IxChip } from \'@siemens/ix-react\';\nimport React, { CSSProperties } from \'react\';\n\nexport default () => {\n  const styled: CSSProperties = {\n    width: \'10rem\',\n  };\n  return (\n    <div className="example">\n      <IxChip closable outline>\n        Primary\n      </IxChip>\n      <IxChip icon="print">Primary with icon</IxChip>\n      <IxChip icon="print" style={styled} closable>\n        Primary\n      </IxChip>\n\n      <IxChip variant="critical" closable outline>\n        Alarm\n      </IxChip>\n      <IxChip variant="alarm" icon="print">\n        Alarm with icon\n      </IxChip>\n      <IxChip variant="alarm" icon="print" style={styled} closable>\n        Alarm\n      </IxChip>\n      <IxChip variant="warning" icon="print" style={styled} closable>\n        Alarm\n      </IxChip>\n      <IxChip\n        background="purple"\n        color="green"\n        variant="custom"\n        icon="print"\n        style={styled}\n        closable\n      >\n        Custom\n      </IxChip>\n    </div>\n  );\n};\n\n'})})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},16436:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var i=t(52983);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);