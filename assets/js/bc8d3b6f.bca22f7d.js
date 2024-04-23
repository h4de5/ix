"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27551],{90694:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(97458),i=t(16436),n=t(91604);const r={},c=void 0,o={id:"auto-generated/ix-card-accordion/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-card-accordion/props.md",sourceDirName:"auto-generated/ix-card-accordion",slug:"/auto-generated/ix-card-accordion/props",permalink:"/docs/auto-generated/ix-card-accordion/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-card-accordion/props.md",tags:[],version:"current",frontMatter:{}},d={},l=[];function u(e){return(0,s.jsx)(n.Z,{attributes:[{name:"collapse",description:"Collapse the card",definition:[{name:"Attribute",value:"collapse"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"2.1.0"}]}]})}function m(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u()}},91604:(e,a,t)=>{t.d(a,{Z:()=>r});t(52983);var s=t(76840),i=t(97458);function n(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((a=>(0,i.jsx)(s.h,{message:a.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((a=>(0,i.jsx)(s.Q,{message:a.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(n,{attribute:e},e.name)))]})}},76840:(e,a,t)=>{t.d(a,{Q:()=>i,h:()=>n});t(52983);var s=t(97458);function i(e){return(0,s.jsxs)("div",{className:"ApiTableTag",children:[(0,s.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,s.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function n(e){return(0,s.jsx)("div",{className:"ApiTableTag",children:(0,s.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,a,t)=>{t.d(a,{Z:()=>c,a:()=>r});var s=t(52983);const i={},n=s.createContext(i);function r(e){const a=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(n.Provider,{value:a},e.children)}}}]);