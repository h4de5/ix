"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27918],{96190:(e,n,t)=>{t.r(n),t.d(n,{default:()=>gn});var s=t(52983),i=t(98444),a=t(60334),l=t(97458);const o=s.createContext(null);function r(e){let{children:n,content:t}=e;const i=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,l.jsx)(o.Provider,{value:i,children:n})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new a.i6("DocProvider");return e}function d(){const{metadata:e,frontMatter:n,assets:t}=c();return(0,l.jsx)(i.d,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var u=t(78364),m=t(80764),h=t(35802),x=t(57074);function p(e){const{permalink:n,title:t,subLabel:s,isNext:i}=e;return(0,l.jsxs)(x.Z,{className:(0,u.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[s&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:s}),(0,l.jsx)("div",{className:"pagination-nav__label",children:t})]})}function f(e){const{previous:n,next:t}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,l.jsx)(p,{...n,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,l.jsx)(p,{...t,subLabel:(0,l.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){const{metadata:e}=c();return(0,l.jsx)(f,{previous:e.previous,next:e.next})}var j=t(35389),g=t(45559),b=t(60298),N=t(52147),C=t(16775);const L={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,l.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,l.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function Z(e){const n=L[e.versionMetadata.banner];return(0,l.jsx)(n,{...e})}function _(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(x.Z,{to:t,onClick:s,children:(0,l.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:s}}=(0,j.Z)(),{pluginId:i}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:a}=(0,N.J)(i),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,g.Jo)(i),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.Z)(n,b.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(Z,{siteTitle:s,versionMetadata:t})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(_,{versionLabel:r.label,to:c.path,onClick:()=>a(r.name)})})]})}function y(e){let{className:n}=e;const t=(0,C.E)();return t.banner?(0,l.jsx)(k,{className:n,versionMetadata:t}):null}function T(e){let{className:n}=e;const t=(0,C.E)();return t.badge?(0,l.jsx)("span",{className:(0,u.Z)(n,b.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}const H={tag:"tag_sA9C",tagRegular:"tagRegular_BnQs",tagWithCount:"tagWithCount_tjDH"};function w(e){let{permalink:n,label:t,count:s}=e;return(0,l.jsxs)(x.Z,{href:n,className:(0,u.Z)(H.tag,s?H.tagWithCount:H.tagRegular),children:[t,s&&(0,l.jsx)("span",{children:s})]})}const M={tags:"tags_FD6L",tag:"tag_Z0r5"};function A(e){let{tags:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(h.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,u.Z)(M.tags,"padding--none","margin-left--sm"),children:n.map((e=>{let{label:n,permalink:t}=e;return(0,l.jsx)("li",{className:M.tag,children:(0,l.jsx)(w,{label:n,permalink:t})},t)}))})]})}const U={iconEdit:"iconEdit_ELFA"};function B(e){let{className:n,...t}=e;return(0,l.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,u.Z)(U.iconEdit,n),"aria-hidden":"true",...t,children:(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function I(e){let{editUrl:n}=e;return(0,l.jsxs)(x.Z,{to:n,className:b.k.common.editThisPage,children:[(0,l.jsx)(B,{}),(0,l.jsx)(h.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}function E(e){void 0===e&&(e={});const{i18n:{currentLocale:n}}=(0,j.Z)(),t=function(){const{i18n:{currentLocale:e,localeConfigs:n}}=(0,j.Z)();return n[e].calendar}();return new Intl.DateTimeFormat(n,{calendar:t,...e})}function z(e){let{lastUpdatedAt:n}=e;const t=new Date(n),s=E({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(t);return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,l.jsx)("b",{children:(0,l.jsx)("time",{dateTime:t.toISOString(),itemProp:"dateModified",children:s})})},children:" on {date}"})}function R(e){let{lastUpdatedBy:n}=e;return(0,l.jsx)(h.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,l.jsx)("b",{children:n})},children:" by {user}"})}function S(e){let{lastUpdatedAt:n,lastUpdatedBy:t}=e;return(0,l.jsxs)("span",{className:b.k.common.lastUpdated,children:[(0,l.jsx)(h.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:n?(0,l.jsx)(z,{lastUpdatedAt:n}):"",byUser:t?(0,l.jsx)(R,{lastUpdatedBy:t}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const D={lastUpdated:"lastUpdated_H8LR"};function V(e){let{className:n,editUrl:t,lastUpdatedAt:s,lastUpdatedBy:i}=e;return(0,l.jsxs)("div",{className:(0,u.Z)("row",n),children:[(0,l.jsx)("div",{className:"col",children:t&&(0,l.jsx)(I,{editUrl:t})}),(0,l.jsx)("div",{className:(0,u.Z)("col",D.lastUpdated),children:(s||i)&&(0,l.jsx)(S,{lastUpdatedAt:s,lastUpdatedBy:i})})]})}function F(){const{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:i}=e,a=i.length>0,o=!!(n||t||s);return a||o?(0,l.jsxs)("footer",{className:(0,u.Z)(b.k.docs.docFooter,"docusaurus-mt-lg"),children:[a&&(0,l.jsx)("div",{className:(0,u.Z)("row margin-top--sm",b.k.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(A,{tags:i})})}),o&&(0,l.jsx)(V,{className:(0,u.Z)("margin-top--sm",b.k.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var P=t(81846),O=t(55212);function q(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):s.push(i)})),s}function W(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=W({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function G(e){const n=e.getBoundingClientRect();return n.top===n.bottom?G(e.parentNode):n}function J(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>G(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(G(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function Y(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,O.L)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function $(e){const n=(0,s.useRef)(void 0),t=Y();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:i,minHeadingLevel:a,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let i=n;i<=t;i+=1)s.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:a,maxHeadingLevel:l}),r=J(o,{anchorTopOffset:t.current}),c=e.find((e=>r&&r.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===c)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}function K(e){let{toc:n,className:t,linkClassName:s,isChild:i}=e;return n.length?(0,l.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,l.jsxs)("li",{children:[(0,l.jsx)(x.Z,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,l.jsx)(K,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const Q=s.memo(K);function X(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:i="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r,...c}=e;const d=(0,O.L)(),u=o??d.tableOfContents.minHeadingLevel,m=r??d.tableOfContents.maxHeadingLevel,h=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,s.useMemo)((()=>W({toc:q(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:u,maxHeadingLevel:m});return $((0,s.useMemo)((()=>{if(i&&a)return{linkClassName:i,linkActiveClassName:a,minHeadingLevel:u,maxHeadingLevel:m}}),[i,a,u,m])),(0,l.jsx)(Q,{toc:h,className:t,linkClassName:i,...c})}const ee={tocCollapsibleButton:"tocCollapsibleButton_qizD",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_BMuW"};function ne(e){let{collapsed:n,...t}=e;return(0,l.jsx)("button",{type:"button",...t,className:(0,u.Z)("clean-btn",ee.tocCollapsibleButton,!n&&ee.tocCollapsibleButtonExpanded,t.className),children:(0,l.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const te={tocCollapsible:"tocCollapsible_PgeG",tocCollapsibleContent:"tocCollapsibleContent_Mvft",tocCollapsibleExpanded:"tocCollapsibleExpanded_VhNj"};function se(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:a,toggleCollapsed:o}=(0,P.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.Z)(te.tocCollapsible,!a&&te.tocCollapsibleExpanded,t),children:[(0,l.jsx)(ne,{collapsed:a,onClick:o}),(0,l.jsx)(P.z,{lazy:!0,className:te.tocCollapsibleContent,collapsed:a,children:(0,l.jsx)(X,{toc:n,minHeadingLevel:s,maxHeadingLevel:i})})]})}const ie={tocMobile:"tocMobile_fQAx"};function ae(){const{toc:e,frontMatter:n}=c();return(0,l.jsx)(se,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.Z)(b.k.docs.docTocMobile,ie.tocMobile)})}const le={tableOfContents:"tableOfContents_haCY",docItemContainer:"docItemContainer_Vjuq"},oe="table-of-contents__link toc-highlight",re="table-of-contents__link--active";function ce(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,u.Z)(le.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(X,{...t,linkClassName:oe,linkActiveClassName:re})})}function de(){const{toc:e,frontMatter:n}=c();return(0,l.jsx)(ce,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:b.k.docs.docTocDesktop})}var ue=t(56788),me=t(16436),he=t(503),xe=t(46820);function pe(e){return(0,l.jsx)("code",{...e})}var fe=t(72452),ve=t(14183);const je={details:"details_wy4P",isBrowser:"isBrowser_XUPv",collapsibleContent:"collapsibleContent_umFH"};function ge(e){return!!e&&("SUMMARY"===e.tagName||ge(e.parentElement))}function be(e,n){return!!e&&(e===n||be(e.parentElement,n))}function Ne(e){let{summary:n,children:t,...i}=e;(0,fe.Z)().collectAnchor(i.id);const a=(0,ve.Z)(),o=(0,s.useRef)(null),{collapsed:r,setCollapsed:c}=(0,P.u)({initialState:!i.open}),[d,m]=(0,s.useState)(i.open),h=s.isValidElement(n)?n:(0,l.jsx)("summary",{children:n??"Details"});return(0,l.jsxs)("details",{...i,ref:o,open:d,"data-collapsed":r,className:(0,u.Z)(je.details,a&&je.isBrowser,i.className),onMouseDown:e=>{ge(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const n=e.target;ge(n)&&be(n,o.current)&&(e.preventDefault(),r?(c(!1),m(!0)):c(!0))},children:[h,(0,l.jsx)(P.z,{lazy:!1,collapsed:r,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{c(e),m(!e)},children:(0,l.jsx)("div",{className:je.collapsibleContent,children:t})})]})}const Ce={details:"details_ajxZ"},Le="alert alert--info";function Ze(e){let{...n}=e;return(0,l.jsx)(Ne,{...n,className:(0,u.Z)(Le,Ce.details,n.className)})}function _e(e){const n=s.Children.toArray(e.children),t=n.find((e=>s.isValidElement(e)&&"summary"===e.type)),i=(0,l.jsx)(l.Fragment,{children:n.filter((e=>e!==t))});return(0,l.jsx)(Ze,{...e,summary:t,children:i})}function ke(e){return(0,l.jsx)(ue.Z,{...e})}const ye={containsTaskList:"containsTaskList_GYRx"};function Te(e){if(void 0!==e)return(0,u.Z)(e,e?.includes("contains-task-list")&&ye.containsTaskList)}const He={img:"img_RVKF"};function we(e){const{mdxAdmonitionTitle:n,rest:t}=function(e){const n=s.Children.toArray(e),t=n.find((e=>s.isValidElement(e)&&"mdxAdmonitionTitle"===e.type)),i=n.filter((e=>e!==t)),a=t?.props.children;return{mdxAdmonitionTitle:a,rest:i.length>0?(0,l.jsx)(l.Fragment,{children:i}):null}}(e.children),i=e.title??n;return{...e,...i&&{title:i},children:t}}const Me={admonition:"admonition_ZJ5q",admonitionHeading:"admonitionHeading_F6U2",admonitionIcon:"admonitionIcon_fB5P",admonitionContent:"admonitionContent_j4Iu"};function Ae(e){let{type:n,className:t,children:s}=e;return(0,l.jsx)("div",{className:(0,u.Z)(b.k.common.admonition,b.k.common.admonitionType(n),Me.admonition,t),children:s})}function Ue(e){let{icon:n,title:t}=e;return(0,l.jsxs)("div",{className:Me.admonitionHeading,children:[(0,l.jsx)("span",{className:Me.admonitionIcon,children:n}),t]})}function Be(e){let{children:n}=e;return n?(0,l.jsx)("div",{className:Me.admonitionContent,children:n}):null}function Ie(e){const{type:n,icon:t,title:s,children:i,className:a}=e;return(0,l.jsxs)(Ae,{type:n,className:a,children:[s||t?(0,l.jsx)(Ue,{title:s,icon:t}):null,(0,l.jsx)(Be,{children:i})]})}function Ee(e){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})})}const ze={icon:(0,l.jsx)(Ee,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function Re(e){return(0,l.jsx)(Ie,{...ze,...e,className:(0,u.Z)("alert alert--secondary",e.className),children:e.children})}function Se(e){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})})}const De={icon:(0,l.jsx)(Se,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function Ve(e){return(0,l.jsx)(Ie,{...De,...e,className:(0,u.Z)("alert alert--success",e.className),children:e.children})}function Fe(e){return(0,l.jsx)("svg",{viewBox:"0 0 14 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})})}const Pe={icon:(0,l.jsx)(Fe,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function Oe(e){return(0,l.jsx)(Ie,{...Pe,...e,className:(0,u.Z)("alert alert--info",e.className),children:e.children})}function qe(e){return(0,l.jsx)("svg",{viewBox:"0 0 16 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})})}const We={icon:(0,l.jsx)(qe,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.warning",description:"The default label used for the Warning admonition (:::warning)",children:"warning"})};function Ge(e){return(0,l.jsx)("svg",{viewBox:"0 0 12 16",...e,children:(0,l.jsx)("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})})}const Je={icon:(0,l.jsx)(Ge,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};const Ye={icon:(0,l.jsx)(qe,{}),title:(0,l.jsx)(h.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};const $e={...{note:Re,tip:Ve,info:Oe,warning:function(e){return(0,l.jsx)(Ie,{...We,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})},danger:function(e){return(0,l.jsx)(Ie,{...Je,...e,className:(0,u.Z)("alert alert--danger",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(Re,{title:"secondary",...e}),important:e=>(0,l.jsx)(Oe,{title:"important",...e}),success:e=>(0,l.jsx)(Ve,{title:"success",...e}),caution:function(e){return(0,l.jsx)(Ie,{...Ye,...e,className:(0,u.Z)("alert alert--warning",e.className),children:e.children})}}};function Ke(e){const n=we(e),t=(s=n.type,$e[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),$e.info));var s;return(0,l.jsx)(t,{...n})}const Qe={Head:he.Z,details:_e,Details:_e,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,l.jsx)(pe,{...e}):(0,l.jsx)(xe.Z,{...e})},a:function(e){return(0,l.jsx)(x.Z,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:Te(e.className)})},li:function(e){return(0,fe.Z)().collectAnchor(e.id),(0,l.jsx)("li",{...e})},img:function(e){return(0,l.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(n=e.className,(0,u.Z)(n,He.img))});var n},h1:e=>(0,l.jsx)(ke,{as:"h1",...e}),h2:e=>(0,l.jsx)(ke,{as:"h2",...e}),h3:e=>(0,l.jsx)(ke,{as:"h3",...e}),h4:e=>(0,l.jsx)(ke,{as:"h4",...e}),h5:e=>(0,l.jsx)(ke,{as:"h5",...e}),h6:e=>(0,l.jsx)(ke,{as:"h6",...e}),admonition:Ke,mermaid:()=>null};function Xe(e){let{children:n}=e;return(0,l.jsx)(me.Z,{components:Qe,children:n})}function en(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.Z)(b.k.docs.docMarkdown,"markdown"),children:[t&&(0,l.jsx)("header",{children:(0,l.jsx)(ue.Z,{as:"h1",children:t})}),(0,l.jsx)(Xe,{children:n})]})}var nn=t(81311),tn=t(92646),sn=t(57161);function an(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const ln={breadcrumbHomeIcon:"breadcrumbHomeIcon_hFEp"};function on(){const e=(0,sn.Z)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(x.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(an,{className:ln.breadcrumbHomeIcon})})})}const rn={breadcrumbsContainer:"breadcrumbsContainer_O6J9"};function cn(e){let{children:n,href:t,isLast:s}=e;const i="breadcrumbs__link";return s?(0,l.jsx)("span",{className:i,itemProp:"name",children:n}):t?(0,l.jsx)(x.Z,{className:i,href:t,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:n})}):(0,l.jsx)("span",{className:i,children:n})}function dn(e){let{children:n,active:t,index:s,addMicrodata:i}=e;return(0,l.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function un(){const e=(0,nn.s1)(),n=(0,tn.Ns)();return e?(0,l.jsx)("nav",{className:(0,u.Z)(b.k.docs.docBreadcrumbs,rn.breadcrumbsContainer),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,l.jsx)(on,{}),e.map(((n,t)=>{const s=t===e.length-1,i="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,l.jsx)(dn,{active:s,index:t,addMicrodata:!!i,children:(0,l.jsx)(cn,{href:i,isLast:s,children:n.label})},t)}))]})}):null}function mn(){return(0,l.jsx)(h.Z,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function hn(){return(0,l.jsx)(h.Z,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function xn(){return(0,l.jsx)(he.Z,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function pn(e){let{className:n}=e;return(0,l.jsx)(Ke,{type:"caution",title:(0,l.jsx)(mn,{}),className:(0,u.Z)(n,b.k.common.unlistedBanner),children:(0,l.jsx)(hn,{})})}function fn(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(xn,{}),(0,l.jsx)(pn,{...e})]})}const vn={docItemContainer:"docItemContainer_yKYS",docItemCol:"docItemCol_D9Gz"};function jn(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=c(),t=(0,m.i)(),s=e.hide_table_of_contents,i=!s&&n.length>0;return{hidden:s,mobile:i?(0,l.jsx)(ae,{}):void 0,desktop:!i||"desktop"!==t&&"ssr"!==t?void 0:(0,l.jsx)(de,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.Z)("col",!t.hidden&&vn.docItemCol),children:[s&&(0,l.jsx)(fn,{}),(0,l.jsx)(y,{}),(0,l.jsxs)("div",{className:vn.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(un,{}),(0,l.jsx)(T,{}),t.mobile,(0,l.jsx)(en,{children:n}),(0,l.jsx)(F,{})]}),(0,l.jsx)(v,{})]})]}),t.desktop&&(0,l.jsx)("div",{className:"col col--3",children:t.desktop})]})}function gn(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(i.FG,{className:n,children:[(0,l.jsx)(d,{}),(0,l.jsx)(jn,{children:(0,l.jsx)(t,{})})]})})}}}]);