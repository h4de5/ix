"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29888],{30876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>s});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(r),s=o,w=m["".concat(d,".").concat(s)]||m[s]||u[s]||i;return r?n.createElement(w,a(a({ref:t},l),{},{components:r})):n.createElement(w,a({ref:t},l))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7896),o=(r(2784),r(30876));const i={},a=void 0,p={unversionedId:"auto-generated/previews/web-component/dropdown",id:"auto-generated/previews/web-component/dropdown",title:"dropdown",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/dropdown.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/dropdown",permalink:"/version-dev/docs/auto-generated/previews/web-component/dropdown",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/dropdown.md",tags:[],version:"current",frontMatter:{}},d={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<ix-button id="triggerId">Open</ix-button>\n<ix-dropdown trigger="triggerId">\n  <ix-dropdown-header label="Category"></ix-dropdown-header>\n  <ix-dropdown-item label="Item 2"></ix-dropdown-item>\n  <ix-dropdown-item label="Item 3"></ix-dropdown-item>\n  <ix-dropdown-item label="Item 4"></ix-dropdown-item>\n  <ix-divider></ix-divider>\n  <ix-dropdown-item label="Item 5"></ix-dropdown-item>\n</ix-dropdown>\n')))}u.isMDXComponent=!0}}]);