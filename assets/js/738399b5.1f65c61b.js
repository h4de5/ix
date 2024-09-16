"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[38245],{78712:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=a(97458),n=a(16436),s=a(16107);const r={},c=void 0,d={id:"auto-generated/ix-datetime-picker/events",title:"events",description:"",source:"@site/docs/auto-generated/ix-datetime-picker/events.md",sourceDirName:"auto-generated/ix-datetime-picker",slug:"/auto-generated/ix-datetime-picker/events",permalink:"/docs/auto-generated/ix-datetime-picker/events",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-datetime-picker/events.md",tags:[],version:"current",frontMatter:{}},o={},l=[];function m(e){return(0,i.jsx)(s.Z,{attributes:[{name:"dateChange",description:"Date change",definition:[{name:"Detail",value:"string | { from: string; to: string; }"}],tags:[{type:"since",message:"1.1.0"}]},{name:"dateSelect",description:"Datetime selection event is fired after confirm button is pressed",definition:[{name:"Detail",value:"{ from: string; to: string; time: string; }"}],tags:[{type:"since",message:"1.1.0"}]},{name:"done",description:"Done event\n\nSet `doneEventDelimiter` to null or undefine to get the typed event",definition:[{name:"Detail",value:"string"}],tags:[{type:"deprecated",message:"Use `this.dateChange`"}]},{name:"timeChange",description:"Time change",definition:[{name:"Detail",value:"string"}],tags:[{type:"since",message:"1.1.0"}]}]})}function u(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},16107:(e,t,a)=>{a.d(t,{Z:()=>r});a(52983);var i=a(37745),n=a(97458);function s(e){return(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,n.jsx)(i.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,n.jsx)(i.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Content",children:[(0,n.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,n.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,n.jsxs)("div",{className:"row Attribute",children:[(0,n.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,n.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,n.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,n.jsx)(s,{attribute:e},e.name)))]})}},37745:(e,t,a)=>{a.d(t,{Q:()=>n,h:()=>s});a(52983);var i=a(97458);function n(e){return(0,i.jsxs)("div",{className:"ApiTableTag",children:[(0,i.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,i.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,i.jsx)("div",{className:"ApiTableTag",children:(0,i.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>r});var i=a(52983);const n={},s=i.createContext(n);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);