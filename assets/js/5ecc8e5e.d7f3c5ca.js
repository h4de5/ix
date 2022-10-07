"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[24808],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,g=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7896),i=(n(2784),n(30876));const a={sidebar_position:1,sidebar_title:"Migration from Core UI 6.5.0",title:"Migration from Core UI 6.5.0 to Siemens iX"},o=void 0,l={unversionedId:"installation/migration/core-ui",id:"version-1.0.0/installation/migration/core-ui",title:"Migration from Core UI 6.5.0 to Siemens iX",description:"Changed dependencies",source:"@site/versioned_docs/version-1.0.0/installation/migration/core-ui.md",sourceDirName:"installation/migration",slug:"/installation/migration/core-ui",permalink:"/docs/installation/migration/core-ui",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/versioned_docs/version-1.0.0/installation/migration/core-ui.md",tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_title:"Migration from Core UI 6.5.0",title:"Migration from Core UI 6.5.0 to Siemens iX"},sidebar:"mySidebar",previous:{title:"Changelog",permalink:"/docs/installation/CHANGELOG"},next:{title:"AG Grid",permalink:"/docs/controls/grid/"}},d={},s=[{value:"Changed dependencies",id:"changed-dependencies",level:2},{value:"Removed dependencies",id:"removed-dependencies",level:2},{value:"ECharts",id:"echarts",level:2},{value:"Structure of <code>BasicNavigation</code> and <code>MapNavigation</code> need to be adapted",id:"structure-of-basicnavigation-and-mapnavigation-need-to-be-adapted",level:3},{value:"Component selectors changed",id:"component-selectors-changed",level:3},{value:"AG Grid",id:"ag-grid",level:3},{value:"Styling",id:"styling",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"changed-dependencies"},"Changed dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updated to ",(0,i.kt)("inlineCode",{parentName:"li"},"bootstrap@5.2.0")),(0,i.kt)("li",{parentName:"ul"},"Updated peerDependency of ",(0,i.kt)("inlineCode",{parentName:"li"},"@anuglar/core")," to latest version")),(0,i.kt)("h2",{id:"removed-dependencies"},"Removed dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ng-bootstrap")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"angular/cdk"))),(0,i.kt)("h2",{id:"echarts"},"ECharts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ECharts default theme system works out of the box with ",(0,i.kt)("inlineCode",{parentName:"li"},"@siemens/ix")," release")),(0,i.kt)("h3",{id:"structure-of-basicnavigation-and-mapnavigation-need-to-be-adapted"},"Structure of ",(0,i.kt)("inlineCode",{parentName:"h3"},"BasicNavigation")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"MapNavigation")," need to be adapted"),(0,i.kt)("p",null,"Check the following points:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rename ",(0,i.kt)("inlineCode",{parentName:"li"},"cui-vertical-tabs")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"ix-menu")),(0,i.kt)("li",{parentName:"ul"},"Settings and About overlays are now ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"optional"))," and have to be placed by developer."),(0,i.kt)("li",{parentName:"ul"},"Content of AboutAndLegal overlay is not part of the library anymore. The prevoius default content can be found inside the inner source brand theme.")),(0,i.kt)("h3",{id:"component-selectors-changed"},"Component selectors changed"),(0,i.kt)("p",null,"Change selectors. From ",(0,i.kt)("inlineCode",{parentName:"p"},"cui-")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ix-")),(0,i.kt)("h3",{id:"ag-grid"},"AG Grid"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Change the imports and dependencies from ",(0,i.kt)("inlineCode",{parentName:"li"},"@siemens/core-ui-aggrid")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"@siemens/ix-aggrid"),".")),(0,i.kt)("h3",{id:"styling"},"Styling"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SCSS variables are not exported anymore"),(0,i.kt)("li",{parentName:"ul"},"Chart colors are not part of the library"),(0,i.kt)("li",{parentName:"ul"},"theme.ts with hardcored hex color values are removed")))}p.isMDXComponent=!0}}]);