"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[92534],{88474:(e,t,n)=>{n.d(t,{m:()=>o});const i={sm:"(max-width: 48em)",md:"(min-width: 48.0625em) and (max-width: 80em)",lg:"(min-width: 80.0625em)"},o=e=>{if("undefined"!=typeof window&&window.matchMedia){const t=i[e];return window.matchMedia(t).matches}return!1}},85619:(e,t,n)=>{n.d(t,{A:()=>h,a:()=>s,c:()=>r,u:()=>a});var i=n(42951);class o extends Event{constructor(e,t,n){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=n}}function s(e,t,n,i){let s;return e.dispatchEvent(new o(t,((e,t)=>{n(e,t),s=t}),i)),{unsubscribe:()=>{s()}}}function a(e,t,n){const o=new i.T,s=new i.T,a=new Set;return e.addEventListener("context-request",(e=>{(null==e?void 0:e.context.name)===t.name&&(e.stopPropagation(),e.subscribe&&a.add(e),o.emit(e),n&&e.callback(n,(()=>{a.delete(e)})))})),s.on((e=>{a.forEach((t=>t.callback(e,(()=>{a.delete(t)}))))})),{emit:e=>{s.emit(e)}}}const r=e=>e.closest("ix-menu"),h={name:"application-layout-context",initialValue:{hideHeader:!1,host:null,sidebar:!1}}},92534:(e,t,n)=>{n.r(t),n.d(t,{ix_application_header:()=>a});var i=n(8823),o=n(24278),s=n(85619);n(88474);const a=class{constructor(e){(0,i.r)(this,e),this.name=void 0,this.breakpoint="lg",this.menuExpanded=!1,this.suppressResponsive=!1}componentWillLoad(){(0,s.a)(this.hostElement,s.A,(e=>{if("map-navigation"===(null==e?void 0:e.host))return this.suppressResponsive=!0,void(this.breakpoint="md");this.breakpoint=o.a.breakpoint})),this.menuDisposable=o.m.expandChange.on((e=>{this.menuExpanded=e})),this.modeDisposable=o.a.onChange.on((e=>{this.suppressResponsive?this.breakpoint="md":this.breakpoint=e}))}componentDidLoad(){this.attachSiemensLogoIfLoaded()}disconnectedCallback(){var e,t;null===(e=this.menuDisposable)||void 0===e||e.dispose(),null===(t=this.modeDisposable)||void 0===t||t.dispose()}isLogoSlotted(){return 0!==this.hostElement.shadowRoot.querySelector('slot[name="logo"]').assignedNodes({flatten:!0}).length}async attachSiemensLogoIfLoaded(){await window.customElements.whenDefined("ix-siemens-logo");const e=document.createElement("ix-siemens-logo");this.isLogoSlotted()||this.hostElement.shadowRoot.querySelector(".logo").appendChild(e)}async onMenuClick(){o.m.toggle()}render(){return(0,i.h)(i.H,{class:{[`breakpoint-${this.breakpoint}`]:!0},slot:"application-header"},"sm"===this.breakpoint&&!1===this.suppressResponsive?(0,i.h)("ix-burger-menu",{onClick:()=>this.onMenuClick(),expanded:this.menuExpanded}):null,(0,i.h)("div",{class:"logo"},(0,i.h)("slot",{name:"logo"})),(0,i.h)("div",{class:"name"},this.name),(0,i.h)("slot",null))}get hostElement(){return(0,i.g)(this)}};a.style=":host{display:flex;align-items:center;position:relative;width:100%;height:2.75rem;min-height:2.75rem;padding-left:1rem;color:var(--theme-app-header--color);background-color:var(--theme-app-header--background);border-bottom:var(--theme-app-header--border-width) solid var(--theme-app-header--border-color);z-index:var(--theme-z-index-fixed)}:host .name{margin-left:2.5rem;margin-right:2.5rem;color:var(--theme-app-header--color)}:host .logo{display:inline-flex;align-items:center;position:relative;height:32px;overflow:hidden;line-height:0rem;color:var(--theme-app-header-logo--color)}:host(.breakpoint-sm){padding-left:0.5rem}:host(.breakpoint-sm) .logo{margin-left:0.5rem}"},24278:(e,t,n)=>{n.d(t,{a:()=>m,m:()=>f});var i,o,s,a,r=n(88474),h=n(42951),l=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)},d=function(e,t,n,i,o){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?o.call(e,n):o?o.value=n:t.set(e,n),n};i=new WeakMap,o=new WeakMap,s=new WeakMap,a=new WeakMap;const m=new class{constructor(){i.set(this,["sm","md","lg"]),o.set(this,new h.T),s.set(this,"lg"),a.set(this,!0),"undefined"!=typeof window&&(window.addEventListener("resize",this.onResize.bind(this)),this.onResize())}get breakpoint(){return l(this,s,"f")}get onChange(){return l(this,o,"f")}get isDetectionEnabled(){return l(this,a,"f")}onResize(){if(!l(this,a,"f"))return;if(!l(this,i,"f"))return;const e=[],t=l(this,i,"f");if(t.forEach((t=>{const n=(0,r.m)(t);e.push([t,n])})),e.every((e=>{let[t,n]=e;return!1===n})))return l(this,o,"f").emit(t[0]),void d(this,s,t[0],"f");for(const[n,i]of e.reverse())if(i){l(this,o,"f").emit(n),d(this,s,n,"f");break}}disableBreakpointDetection(){d(this,a,!1,"f")}enableBreakpointDetection(){d(this,a,!0,"f")}setBreakpoint(e){d(this,s,e,"f"),l(this,o,"f").emit(e)}setBreakpoints(e){d(this,i,e,"f"),this.onResize()}};var c,u=function(e,t,n,i,o){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?o.call(e,n):o?o.value=n:t.set(e,n),n},p=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)};c=new WeakMap;const f=new class{constructor(){this.menuElement=null,this.menuExpandChange=new h.T,c.set(this,!1)}register(e){this.menuElement?console.warn("Menu already defined"):(this.menuElement=e,this.menuElement.addEventListener("expandChange",(e=>{this.menuExpandChange.emit(e.detail)})))}setIsPinned(e){u(this,c,e,"f")}async open(){return!!this.menuElement&&(this.menuElement.toggleMenu(!0),!0)}async close(){return!!this.menuElement&&(this.menuElement.toggleMenu(!1),!0)}async toggle(){return!!this.menuElement&&(this.menuElement.toggleMenu(),!0)}get nativeElement(){return this.menuElement}get expandChange(){return this.menuExpandChange}get isPinned(){return p(this,c,"f")}}}}]);