"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[90631],{19932:(t,s,i)=>{i.d(s,{g:()=>o});const e=t=>t.toUpperCase()==="Primary".toUpperCase(),n=t=>t.toUpperCase()==="Secondary".toUpperCase(),o=function(t,s,i,o,r,a,c){return void 0===o&&(o=!1),void 0===r&&(r=!1),{btn:!0,"btn-primary":e(t)&&!s&&!i,"btn-outline-primary":e(t)&&s&&!i,"btn-invisible-primary":e(t)&&!s&&i,"btn-secondary":n(t)&&!s&&!i,"btn-outline-secondary":n(t)&&s&&!i,"btn-invisible-secondary":n(t)&&!s&&i,"btn-icon":o,"btn-oval":r,selected:n(t)&&(s||i)&&a,disabled:c}}},90631:(t,s,i)=>{i.r(s),i.d(s,{ix_icon_button:()=>o});var e=i(98139),n=i(19932);const o=class{constructor(t){(0,e.r)(this,t),this.variant="Secondary",this.size="24",this.selected=!1,this.disabled=!1,this.type="button"}getIconButtonClasses(){return Object.assign({"btn-icon-xs":"12"===this.size,"btn-icon-s":"16"===this.size},(0,n.g)(this.variant,this.outline,this.ghost||this.invisible,!0,this.oval,this.selected,this.disabled))}render(){return(0,e.h)("button",{class:this.getIconButtonClasses(),type:this.type},(0,e.h)("ix-icon",{size:this.size,name:this.icon,color:this.color}),(0,e.h)("div",{style:{display:"none"}},(0,e.h)("slot",null)))}}}}]);