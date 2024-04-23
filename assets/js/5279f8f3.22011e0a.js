"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51995],{71064:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(97458),i=a(16436),s=a(91604);const o={},r=void 0,d={id:"auto-generated/ix-dropdown/props",title:"props",description:'\uff5c string"},{"name"[]}]} />',source:"@site/docs/auto-generated/ix-dropdown/props.md",sourceDirName:"auto-generated/ix-dropdown",slug:"/auto-generated/ix-dropdown/props",permalink:"/docs/auto-generated/ix-dropdown/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-dropdown/props.md",tags:[],version:"current",frontMatter:{}},l={},c=[];function m(e){return(0,n.jsx)(s.Z,{attributes:[{name:"anchor",description:"Define an anchor element",definition:[{name:"Attribute",value:"anchor"},{name:"Type",value:"HTMLElement \uff5c string"},{name:"Default"}],tags:[]},{name:"closeBehavior",description:"Controls if the dropdown will be closed in response to a click event depending on the position of the event relative to the dropdown.\nIf the dropdown is a child of another one, it will be closed with the parent, regardless of its own close behavior.",definition:[{name:"Attribute",value:"close-behavior"},{name:"Type",value:'"both" \uff5c "inside" \uff5c "outside" \uff5c boolean'},{name:"Default",value:"'both'"}],tags:[]},{name:"header",description:"An optional header shown at the top of the dropdown",definition:[{name:"Attribute",value:"header"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"placement",description:"Placement of the dropdown",definition:[{name:"Attribute",value:"placement"},{name:"Type",value:'"bottom-end" \uff5c "bottom-start" \uff5c "left-end" \uff5c "left-start" \uff5c "right-end" \uff5c "right-start" \uff5c "top-end" \uff5c "top-start"'},{name:"Default",value:"'bottom-start'"}],tags:[]},{name:"positioningStrategy",description:"Position strategy",definition:[{name:"Attribute",value:"positioning-strategy"},{name:"Type",value:'"absolute" \uff5c "fixed"'},{name:"Default",value:"'fixed'"}],tags:[]},{name:"show",description:"Show dropdown",definition:[{name:"Attribute",value:"show"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"suppressAutomaticPlacement",description:"Suppress the automatic placement of the dropdown.",definition:[{name:"Attribute",value:"suppress-automatic-placement"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[{type:"since",message:"2.0.0"}]},{name:"trigger",description:"Define an element that triggers the dropdown.\nA trigger can either be a string that will be interpreted as id attribute or a DOM element.",definition:[{name:"Attribute",value:"trigger"},{name:"Type",value:"HTMLElement \uff5c Promise<HTMLElement> \uff5c string"},{name:"Default"}],tags:[]}]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},91604:(e,t,a)=>{a.d(t,{Z:()=>o});a(52983);var n=a(76840),i=a(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(n.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(n.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const o=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},76840:(e,t,a)=>{a.d(t,{Q:()=>i,h:()=>s});a(52983);var n=a(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var n=a(52983);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);