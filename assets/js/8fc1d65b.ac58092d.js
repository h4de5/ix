"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23442],{30876:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(2784);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(i,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,u(u({ref:t},s),{},{components:n})):r.createElement(m,u({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,u=new Array(a);u[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var l=2;l<a;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},62314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7896),o=(n(2784),n(30876));const a={},u=void 0,c={unversionedId:"auto-generated/previews/react/about-and-legal",id:"auto-generated/previews/react/about-and-legal",title:"about-and-legal",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/about-and-legal.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/about-and-legal",permalink:"/docs/next/auto-generated/previews/react/about-and-legal",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/about-and-legal.md",tags:[],version:"current",frontMatter:{}},i={},l=[],s={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport {\n    IxBasicNavigation,\n    IxMenu,\n    IxMenuAbout,\n    IxMenuAboutItem\n} from '@siemens/ix-react';\nimport React, { useLayoutEffect, useRef } from 'react';\n\nexport const AboutAndLegal: React.FC = () => {\n  const ref = useRef<HTMLIxMenuElement>(null);\n\n  useLayoutEffect(() => {\n    const element = ref.current;\n    if (element) {\n      element.toggleAbout(true);\n    }\n  }, []);\n\n  return (\n    <IxBasicNavigation>\n      <IxMenu ref={ref}>\n        <IxMenuAbout>\n          <IxMenuAboutItem label=\"Tab 1\">Content 1</IxMenuAboutItem>\n          <IxMenuAboutItem label=\"Tab 2\">Content 2</IxMenuAboutItem>\n        </IxMenuAbout>\n      </IxMenu>\n    </IxBasicNavigation>\n  );\n};\n")))}p.isMDXComponent=!0}}]);