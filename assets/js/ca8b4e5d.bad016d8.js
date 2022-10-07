"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32390],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(2784);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},99304:(e,t,n)=>{n.d(t,{X:()=>o});var a=n(6277),r=n(2784);const i="Guideline_pZob",l="Icon_TTjR";function o(e){return r.createElement("div",{className:(0,a.Z)(i)},r.createElement("div",{className:(0,a.Z)(l)},e.do?r.createElement("ix-icon",{name:"single-check",size:"16",color:"color-success"}):r.createElement("ix-icon",{name:"close",size:"16",color:"color-alarm"})),r.createElement("div",null,e.label))}},28481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7896),r=(n(2784),n(30876)),i=n(99304);const l={sidebar_position:9,sidebar_title:"Dialogs and buttons",title:"Dialogs and buttons"},o=void 0,s={unversionedId:"language/dialogs-and-buttons",id:"version-1.0.0/language/dialogs-and-buttons",title:"Dialogs and buttons",description:"Clear title and button options",source:"@site/versioned_docs/version-1.0.0/language/dialogs-and-buttons.md",sourceDirName:"language",slug:"/language/dialogs-and-buttons",permalink:"/docs/language/dialogs-and-buttons",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/language/dialogs-and-buttons.md",tags:[],version:"1.0.0",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_title:"Dialogs and buttons",title:"Dialogs and buttons"},sidebar:"mySidebar",previous:{title:"Error, warning & notification messages",permalink:"/docs/language/error-messages"},next:{title:"Theming and Styling",permalink:"/docs/theming/theming-and-styling"}},d={},c=[{value:"Clear title and button options",id:"clear-title-and-button-options",level:3},{value:"Primary and secondary actions",id:"primary-and-secondary-actions",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"clear-title-and-button-options"},"Clear title and button options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Concise and descriptive dialog title: Add user")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Option buttons should describe what will happen and relate to the dialog title: Cancel, Add")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Forms: When asking for user input using a dialog and there is no clear action verb in the title, provide Cancel and Save as buttons")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One button only reflects one action")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Users should be able to understand the choices based on the title and button text alone")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Only use \u2018OK\u2019 as an option if you cannot find an appropriate verb"))),(0,r.kt)("div",{class:"d-flex flex-wrap"},(0,r.kt)("span",{class:"m-2"},(0,r.kt)(i.X,{do:!0,label:"Title: Add user  / Buttons: Cancel, Add",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"Title: Add user  / Buttons: Cancel, OK",mdxType:"Guideline"})),(0,r.kt)("span",{class:"m-2"},(0,r.kt)(i.X,{do:!0,label:"Title: Delete file  / Buttons: Cancel, Delete",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"Title: Are you sure  / Buttons: Cancel, Delete",mdxType:"Guideline"})),(0,r.kt)("span",{class:"m-2"},(0,r.kt)(i.X,{do:!0,label:"Title: Edit details  / Buttons: Cancel, Save",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"Title: Edit details  / Buttons: Cancel, Edit",mdxType:"Guideline"}))),(0,r.kt)("h3",{id:"primary-and-secondary-actions"},"Primary and secondary actions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Primary on the right, secondary left (Cancel, OK) not (OK, Cancel)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Primary actions can either be positive (Send, Save) or negative (Delete)"))),(0,r.kt)("div",{class:"d-flex flex-wrap"},(0,r.kt)("span",{class:"m-2"},(0,r.kt)(i.X,{do:!0,label:"Cancel, Save",mdxType:"Guideline"}),(0,r.kt)(i.X,{do:!1,label:"Save, Cancel",mdxType:"Guideline"}))))}p.isMDXComponent=!0}}]);