"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[83179],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,b=m["".concat(p,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(b,a(a({ref:t},u),{},{components:n})):r.createElement(b,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},92665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7896),i=(n(2784),n(30876));const l={},a=void 0,o={unversionedId:"auto-generated/previews/web-component/pill",id:"auto-generated/previews/web-component/pill",title:"pill",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/pill.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/pill",permalink:"/docs/next/auto-generated/previews/web-component/pill",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/pill.md",tags:[],version:"current",frontMatter:{}},p={},c=[],u={toc:c};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ix-pill variant="custom" color="white" background="purple">\n  Label\n</ix-pill>\n\n<ix-pill>Label</ix-pill>\n<ix-pill outline>Label</ix-pill>\n<ix-pill style="width: 8rem">Label</ix-pill>\n\n<ix-pill icon="star">Label</ix-pill>\n<ix-pill icon="star" style="width: 8rem"> Label </ix-pill>\n<ix-pill outline alignLeft icon="star" style="width: 8rem"> Label </ix-pill>\n\n<ix-pill variant="alarm">Label</ix-pill>\n<ix-pill variant="alarm" outline> Label </ix-pill>\n<ix-pill variant="alarm" style="width: 8rem"> Label </ix-pill>\n\n<ix-pill variant="alarm" icon="star"> Label </ix-pill>\n<ix-pill variant="alarm" icon="star" style="width: 8rem"> Label </ix-pill>\n<ix-pill variant="alarm" outline alignLeft icon="star" style="width: 8rem">\n  Label\n</ix-pill>\n')))}s.isMDXComponent=!0}}]);