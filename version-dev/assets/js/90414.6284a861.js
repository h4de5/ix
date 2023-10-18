"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90414],{75459:(t,e,i)=>{i.d(e,{a:()=>o,b:()=>r});const o=t=>t?"true":"false",r=function(t,e){void 0===e&&(e=[]);const i={};return a.forEach((o=>{if(t.hasAttribute(o)){null===t.getAttribute(o)||e.includes(o)||(i[o]=t.getAttribute(o),t.removeAttribute(o))}})),i},a=["role","aria-activedescendant","aria-atomic","aria-autocomplete","aria-braillelabel","aria-brailleroledescription","aria-busy","aria-checked","aria-colcount","aria-colindex","aria-colindextext","aria-colspan","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-level","aria-live","aria-multiline","aria-multiselectable","aria-orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed","aria-readonly","aria-relevant","aria-required","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowindextext","aria-rowspan","aria-selected","aria-setsize","aria-sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext"]},90414:(t,e,i)=>{i.r(e),i.d(e,{ix_breadcrumb:()=>l});var o=i(8823),r=i(75459),a=i(16107);let s=0;const n=function(t){return void 0===t&&(t="breadcrumb-"),`${t}-${s++}`},l=class{constructor(t){(0,o.r)(this,t),this.itemClick=(0,o.c)(this,"itemClick",7),this.nextClick=(0,o.c)(this,"nextClick",7),this.previousButtonId=n(),this.previousDropdownId=n(),this.visibleItemCount=9,this.nextItems=[],this.ghost=!0,this.ariaLabelPreviousButton="previous",this.previousButtonRef=void 0,this.nextButtonRef=void 0,this.items=[],this.isPreviousDropdownExpanded=!1}onNextItemsChange(){this.onChildMutation()}onItemClick(t){this.itemClick.emit(t)}componentDidLoad(){this.mutationObserver=(0,a.c)((()=>this.onChildMutation())),this.mutationObserver.observe(this.hostElement,{subtree:!0,childList:!0})}componentWillLoad(){this.onChildMutation()}disconnectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect()}async onChildMutation(){const t=this.getItems();t.forEach(((e,i)=>{const o=0!==this.nextItems.length&&t.length-1===i;e.ghost=this.ghost,e.showChevron=t.length-1!==i||o,e.isDropdownTrigger=o,o&&(this.nextButtonRef=e),t.length<this.visibleItemCount||(e.visible=i>=t.length-this.visibleItemCount)})),this.items=t}getItems(){return Array.from(this.hostElement.querySelectorAll("ix-breadcrumb-item"))}render(){var t,e,i,a;const s=(0,r.b)(this.hostElement);return(0,o.h)(o.H,null,(0,o.h)("ix-dropdown",{id:this.previousDropdownId,"aria-label":this.ariaLabelPreviousButton,trigger:(null===(t=this.items)||void 0===t?void 0:t.length)>this.visibleItemCount?this.previousButtonRef:null,onShowChanged:t=>{let{detail:e}=t;this.isPreviousDropdownExpanded=e;this.hostElement.shadowRoot.getElementById(this.previousButtonId)&&(0,o.f)(this.hostElement.shadowRoot.getElementById(this.previousButtonId))}},this.items.slice(0,this.items.length-this.visibleItemCount).map((t=>{var e;const i=null!==(e=t.label)&&void 0!==e?e:t.innerText;return(0,o.h)("ix-dropdown-item",{label:i,onClick:()=>{this.onItemClick(i)},onItemClick:t=>t.stopPropagation()})}))),(null===(e=this.items)||void 0===e?void 0:e.length)>this.visibleItemCount?(0,o.h)("ix-breadcrumb-item",{id:this.previousButtonId,ref:t=>this.previousButtonRef=t,label:"...",tabIndex:1,onItemClick:t=>t.stopPropagation(),"aria-describedby":this.previousDropdownId,"aria-controls":this.previousDropdownId,"aria-expanded":(0,r.a)(this.isPreviousDropdownExpanded),class:"previous-button"}):null,(0,o.h)("nav",{class:"crumb-items","aria-label":null!==(i=s["aria-label"])&&void 0!==i?i:"breadcrumbs"},(0,o.h)("ol",null,(0,o.h)("slot",null))),(0,o.h)("ix-dropdown",{trigger:this.nextButtonRef},null===(a=this.nextItems)||void 0===a?void 0:a.map((t=>(0,o.h)("ix-dropdown-item",{label:t,onClick:e=>{this.nextClick.emit({event:e,item:t})},onItemClick:t=>t.stopPropagation()})))))}get hostElement(){return(0,o.g)(this)}static get watchers(){return{nextItems:["onNextItemsChange"]}}};l.style=":host{display:flex;justify-content:flex-start;height:2.5rem;align-items:center;background-color:transparent;overflow:hidden}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .previous-button{width:3rem;min-width:0px}:host .crumb-dropdown{overflow:visible}:host .remove-anchor::after{display:none}:host .more-text{display:flex}:host .more-text .more-text-ellipsis{width:1rem;display:inline-block;font-weight:700}:host .more-text ix-icon{padding-top:2px}:host nav,:host ol,:host .crumb-items{display:contents}"},16107:(t,e,i)=>{i.d(e,{c:()=>o});const o=t=>new MutationObserver(t)}}]);