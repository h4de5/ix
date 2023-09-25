"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[12408,39235],{30876:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,v=m["".concat(s,".").concat(p)]||m[p]||c[p]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39235:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7896),a=(n(2784),n(30876));const o={},i=void 0,l={unversionedId:"auto-generated/previews/angular/validation.ts",id:"auto-generated/previews/angular/validation.ts",title:"validation.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/validation.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/validation.ts",permalink:"/version-dev/docs/auto-generated/previews/angular/validation.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/validation.ts.md",tags:[],version:"current",frontMatter:{}},s={},d=[],u={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <form\n      class="row g-3 needs-validation"\n      [ngClass]="{ \'was-validated\': wasValidated }"\n      no-validate\n      (submit)="onSubmit($event)"\n    >\n      <div class="col-md-4">\n        <label htmlFor="validationCustom01" class="form-label">\n          First name\n        </label>\n        <input\n          name="firstName"\n          type="text"\n          id="validationCustom01"\n          [(ngModel)]="data.firstName"\n          #firstName="ngModel"\n          required\n        />\n        <div class="valid-feedback">Looks good!</div>\n      </div>\n      <div class="col-md-4">\n        <ix-validation-tooltip\n          message="Error hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint textError hint text"\n        >\n          <label htmlFor="validationCustom02" class="form-label">\n            Last name\n          </label>\n          <input\n            name="lastName"\n            type="text"\n            id="validationCustom02"\n            [(ngModel)]="data.lastName"\n            #lastName="ngModel"\n            required\n          />\n        </ix-validation-tooltip>\n      </div>\n      <div class="col-md-4">\n        <label htmlFor="validationCustomUsername" class="form-label">\n          Username\n        </label>\n        <input\n          name="userName"\n          type="text"\n          id="validationCustomUsername"\n          aria-describedby="inputGroupPrepend"\n          [(ngModel)]="data.userName"\n          #userName="ngModel"\n          required\n        />\n        <div class="invalid-feedback">Please choose a username.</div>\n      </div>\n      <div class="col-12">\n        <button class="btn btn-primary" type="submit">Submit form</button>\n      </div>\n    </form>\n  `,\n})\nexport default class Validation {\n  data = {\n    firstName: \'\',\n    lastName: \'\',\n    userName: \'\',\n  };\n\n  wasValidated = false;\n\n  onSubmit(event: SubmitEvent) {\n    event.preventDefault();\n\n    this.wasValidated = true;\n  }\n}\n')))}c.isMDXComponent=!0}}]);