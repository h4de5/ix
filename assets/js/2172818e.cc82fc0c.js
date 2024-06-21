"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[74051],{30331:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=a(97458),n=a(16436),s=a(91604);const r={},o=void 0,l={id:"auto-generated/ix-category-filter/props",title:"props",description:"",source:"@site/docs/auto-generated/ix-category-filter/props.md",sourceDirName:"auto-generated/ix-category-filter",slug:"/auto-generated/ix-category-filter/props",permalink:"/docs/auto-generated/ix-category-filter/props",draft:!1,unlisted:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-category-filter/props.md",tags:[],version:"current",frontMatter:{}},c={},d=[];function u(e){return(0,i.jsx)(s.Z,{attributes:[{name:"categories",description:"Configuration object hash used to populate the dropwdown menu for typeahead and quick selection functionality.\nEach ID maps to an object with a label and an array of options to select from.",definition:[{name:"Attribute"},{name:"Type",value:"{ [id: string]: { label: string; options: string[]; }; }"},{name:"Default"}],tags:[]},{name:"disabled",description:"If true the filter will be in disabled state",definition:[{name:"Attribute",value:"disabled"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"filterState",description:"A set of search criteria to populate the component with.",definition:[{name:"Attribute"},{name:"Type",value:"FilterState"},{name:"Default"}],tags:[]},{name:"hideIcon",description:"Allows to hide the icon inside the text input.\nDefaults to false",definition:[{name:"Attribute",value:"hide-icon"},{name:"Type",value:"boolean"},{name:"Default"}],tags:[]},{name:"i18nPlainText",description:"i18n",definition:[{name:"Attribute",value:"i-1-8n-plain-text"},{name:"Type",value:"string"},{name:"Default",value:"'Filter by text'"}],tags:[]},{name:"icon",description:"The icon next to the actual text input\nDefaults to 'search'",definition:[{name:"Attribute",value:"icon"},{name:"Type",value:"string"},{name:"Default",value:"'search'"}],tags:[]},{name:"labelCategories",description:"i18n",definition:[{name:"Attribute",value:"label-categories"},{name:"Type",value:"string"},{name:"Default",value:"'Categories'"}],tags:[]},{name:"nonSelectableCategories",description:"In certain use cases some categories may not be available for selection anymore.\nTo allow proper display of set filters with these categories this ID to label mapping can be populated.\n\nConfiguration object hash used to supply labels to the filter chips in the input field.\nEach ID maps to a string representing the label to display.",definition:[{name:"Attribute"},{name:"Type",value:"{ [id: string]: string; }"},{name:"Default",value:"{}"}],tags:[]},{name:"placeholder",description:"Placeholder text to be displayed in an empty input field.",definition:[{name:"Attribute",value:"placeholder"},{name:"Type",value:"string"},{name:"Default"}],tags:[]},{name:"readonly",description:"If true the filter will be in readonly mode",definition:[{name:"Attribute",value:"readonly"},{name:"Type",value:"boolean"},{name:"Default",value:"false"}],tags:[]},{name:"repeatCategories",description:"If set to true allows that a single category can be set more than once.\nAn already set category will not appear in the category dropdown if set to false.\n\nDefaults to true",definition:[{name:"Attribute",value:"repeat-categories"},{name:"Type",value:"boolean"},{name:"Default",value:"true"}],tags:[]},{name:"staticOperator",description:"If set categories will always be filtered via the respective logical operator.\nToggling of the operator will not be available to the user.",definition:[{name:"Attribute",value:"static-operator"},{name:"Type",value:"LogicalFilterOperator.EQUAL \uff5c LogicalFilterOperator.NOT_EQUAL"},{name:"Default"}],tags:[{type:"since",message:"2.2.0"}]},{name:"suggestions",description:"A list of strings that will be supplied as typeahead suggestions not tied to any categories.",definition:[{name:"Attribute"},{name:"Type",value:"string[]"},{name:"Default"}],tags:[]}]})}function m(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},91604:(e,t,a)=>{a.d(t,{Z:()=>r});a(52983);var i=a(76840),n=a(97458);function s(e){return(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Name",children:[e?.attribute?.name,e?.attribute?.tags?.filter((e=>"since"===e.type)).map((t=>(0,n.jsx)(i.h,{message:t.message},`Tag_Since_${e?.attribute?.name}`))),e?.attribute?.tags?.filter((e=>"deprecated"===e.type)).map((t=>(0,n.jsx)(i.Q,{message:t.message},`Tag_Deprecated_${e?.attribute?.name}`)))]})}),(0,n.jsx)("div",{className:"col-sm-6",children:(0,n.jsxs)("div",{className:"ApiTable__Content",children:[(0,n.jsx)("span",{className:"Attribute__Description",children:e?.attribute?.description}),(0,n.jsx)("div",{className:"container-fluid",children:e?.attribute?.definition?.filter((e=>void 0!==e.value)).map((e=>(0,n.jsxs)("div",{className:"row Attribute",children:[(0,n.jsxs)("div",{className:"col-auto Attribute__Name",children:[e.name,":"]}),(0,n.jsx)("code",{className:"col-auto Attribute__Value",children:e.value})]},e.name)))})]})})]})}const r=function(e){return(0,n.jsxs)("div",{className:"container-fluid ApiTable",children:[(0,n.jsxs)("div",{className:"row with--border",children:[(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Name"}),(0,n.jsx)("div",{className:"col-sm-6 ApiTable__Headline",children:"Description and specifications"})]}),e?.attributes?.map((e=>(0,n.jsx)(s,{attribute:e},e.name)))]})}},76840:(e,t,a)=>{a.d(t,{Q:()=>n,h:()=>s});a(52983);var i=a(97458);function n(e){return(0,i.jsxs)("div",{className:"ApiTableTag",children:[(0,i.jsx)("div",{className:"Tag Tag--Deprecated",children:"Deprecated"}),(0,i.jsx)("div",{className:"Tag__Message--Deprecated",children:e.message})]})}function s(e){return(0,i.jsx)("div",{className:"ApiTableTag",children:(0,i.jsxs)("div",{className:"Tag",children:["Since ",e.message]})})}},16436:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>r});var i=a(52983);const n={},s=i.createContext(n);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);