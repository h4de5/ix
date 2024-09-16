"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[41021],{88213:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=a(97458),i=a(16436),s=a(16107);const r={},o=void 0,c={id:"auto-generated/ix-tree/props",title:"props",description:'; }"},{"name""{}"}],"tags""renderItem","description"[{"name""Type","value" number, data T[], context (callback"Default"}],"tags""root","description"[{"name""root"},{"name""string"},{"name"[]}]} />',source:"@site/docs/auto-generated/ix-tree/props.md",sourceDirName:"auto-generated/ix-tree",slug:"/auto-generated/ix-tree/props",permalink:"/docs/auto-generated/ix-tree/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-tree/props.md",tags:[],version:"current",frontMatter:{}},d={},l=[];function m(e){return(0,n.jsx)(s.Z,{attributes:[{name:"context",description:"Selection and collapsed state management",definition:[{name:"Attribute"},{name:"Type",value:"{ [x: string]: TreeItemContext; }"},{name:"Default",value:"{}"}],tags:[]},{name:"model",description:"Tree model",definition:[{name:"Attribute"},{name:"Type",value:"{ [x: string]: TreeItem<any>; }"},{name:"Default",value:"{}"}],tags:[]},{name:"renderItem",description:"Render function of tree items",definition:[{name:"Attribute"},{name:"Type",value:"<T = any>(index: number, data: T, dataList: T[], context: TreeContext, update: (callback: UpdateCallback) => void) => HTMLElement"},{name:"Default"}],tags:[]},{name:"root",description:"Initial root element will not be rendered",definition:[{name:"Attribute",value:"root"},{name:"Type",value:"string"},{name:"Default"}],tags:[]}]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},16107:(e,t,a)=>{a.d(t,{Z:()=>r});a(52983);var n=a(37745),i=a(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(n.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(n.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},37745:(e,t,a)=>{a.d(t,{Q:()=>i,h:()=>s});a(52983);var n=a(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var n=a(52983);const i={},s=n.createContext(i);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);