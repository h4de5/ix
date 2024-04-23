"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6588],{87398:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=a(97458),i=a(16436),s=a(91604);const o={},r=void 0,c={id:"auto-generated/ix-chip/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-chip/props.md",sourceDirName:"auto-generated/ix-chip",slug:"/auto-generated/ix-chip/props",permalink:"/docs/auto-generated/ix-chip/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-chip/props.md",tags:[],version:"current",frontMatter:{}},l={},u=[];function d(e){return(0,n.jsx)(s.Z,{attributes:[{name:"active",description:"Determines if the chip is interactive. If false no user input (e.g. mouse states, keyboard navigation)\nwill be possible and also the close button will not be present.",definition:[{name:"Attribute",value:"active"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"background",description:"Custom background color.\nOnly has an effect on chips with `variant='custom'`",definition:[{name:"Attribute",value:"background"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"chipColor",description:"Custom font and icon color.\nOnly has an effect on chips with `variant='custom'`",definition:[{name:"Attribute",value:"chip-color"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"closable",description:"Show close icon",definition:[{name:"Attribute",value:"closable"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"color",description:"Custom font and icon color.\nOnly has an effect on chips with `variant='custom'`",definition:[{name:"Attribute",value:"color"},{name:"Type",value:"string"},{name:"Default"}],tags:[{type:"deprecated",message:"since 2.1.0 use `chip-color`"}]},{name:"icon",description:"Show icon",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"outline",description:"Show chip with outline style",definition:[{name:"Attribute",value:"outline"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"variant",description:"Chip variant",definition:[{name:"Attribute",value:"variant"},{name:"Type",value:'"alarm" \uff5c "critical" \uff5c "custom" \uff5c "info" \uff5c "neutral" \uff5c "primary" \uff5c "success" \uff5c "warning"'},{name:"Default",value:"'primary'"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d()}},91604:(e,t,a)=>{a.d(t,{Z:()=>o});a(52983);var n=a(76840),i=a(97458);function s(e){return(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,i.jsx)(n.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,i.jsx)(n.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,i.jsx)("div",{className:"col-sm-6",children:(0,i.jsxs)("div",{className:"ApiTable__Content",children:[(0,i.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,i.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,i.jsxs)("div",{className:"row Attribute",children:[(0,i.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,i.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const o=function(e){return(0,i.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,i.jsxs)("div",{className:"row with--border",children:[(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,i.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,i.jsx)(s,{attribute:e},e.name)))]})}},76840:(e,t,a)=>{a.d(t,{Q:()=>i,h:()=>s});a(52983);var n=a(97458);function i(e){return(0,n.jsxs)("div",{className:"ApiTableTag",children:[(0,n.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,n.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,n.jsx)("div",{className:"ApiTableTag",children:(0,n.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var n=a(52983);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);