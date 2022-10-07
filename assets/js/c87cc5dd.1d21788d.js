"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[10437],{30876:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91870:(e,t,n)=>{n.d(t,{Z:()=>v,C:()=>h});var r=n(89817),i=n(37949),o=n(90077),a=n(6277),s=n(2784);const l="Card__List_PIGW",c="Card_EPsO",d="Auto__Width_RXP2",p="Card_big__rLc",u="With__Icon__M6w",m="Splitter_xIp1",f="Label_uVaA",g="Full__Height_Aspr",y="Icon_ZZVP",b="Card__Primary_p1H3";function v(e){const{preferredVersion:t}=(0,i.J)();return s.createElement(r.Z,{to:function(){var n;if(!t)return(0,o.Z)(`/docs/${e.link}`);if(null!=(n=e.link)&&n.startsWith("http"))return e.link;const r=t.path;return(0,o.Z)(`${r}/${e.link}`)}(),style:{textDecoration:"none"}},s.createElement("div",{className:(0,a.Z)(c,{[b]:e.isPrimary,[u]:e.icon,[d]:e.autoWidth},"big"===e.size?p:c),style:e.style},s.createElement("div",{className:(0,a.Z)(f,"text-h2",{[g]:!e.icon})},e.label),e.icon?s.createElement(s.Fragment,null,s.createElement("div",{className:m}),s.createElement("div",{className:(0,a.Z)(y)},s.createElement("ix-icon",{name:e.icon}))):null,e.children))}function h(e){return s.createElement("div",{className:(0,a.Z)(l)},e.children)}},61962:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(2784);const i="description_FWLT";function o(e){return r.createElement(r.Fragment,null,r.createElement("hr",null),r.createElement("div",{className:i},e.description),r.createElement("slot",null))}},69888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(7896),i=(n(2784),n(30876)),o=n(91870),a=n(61962);const s={sidebar_position:1,sidebar_title:"iX for Designer",title:"iX for Designers",hide_table_of_contents:!0},l=void 0,c={unversionedId:"getting-started-for-designers",id:"version-1.0.0/getting-started-for-designers",title:"iX for Designers",description:"<Layout",source:"@site/versioned_docs/version-1.0.0/getting-started-for-designers.md",sourceDirName:".",slug:"/getting-started-for-designers",permalink:"/docs/getting-started-for-designers",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/getting-started-for-designers.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_title:"iX for Designer",title:"iX for Designers",hide_table_of_contents:!0},sidebar:"mySidebar",next:{title:"iX for Developers",permalink:"/docs/getting-started"}},d={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.A,{description:"iX is a component based system which allows you to build highly complex apps based on your needs.",mdxType:"Layout"}," "),(0,i.kt)(o.C,{mdxType:"CardList"},(0,i.kt)(o.Z,{label:"iX Design Kits",isPrimary:!0,size:"big",link:"design-kit",icon:"disk",mdxType:"Card"}),(0,i.kt)(o.Z,{label:"iX for Developers",link:"getting-started",icon:"rocket",mdxType:"Card"}),(0,i.kt)(o.Z,{label:"Industrial Icon System",link:"icon-library/icons",icon:"language",mdxType:"Card"}),(0,i.kt)(o.Z,{label:"Theming and Styling",link:"theming/theming-and-styling",icon:"bulb",mdxType:"Card"}),(0,i.kt)(o.Z,{label:"Font System",link:"theming/fonts",icon:"book",mdxType:"Card"}),(0,i.kt)(o.Z,{label:"Controls",link:"controls/navigation/basic-navigation",icon:"configuration",mdxType:"Card"})))}m.isMDXComponent=!0}}]);