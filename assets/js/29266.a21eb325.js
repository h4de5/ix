"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29266],{29266:(e,t,s)=>{s.r(t),s.d(t,{ix_workflow_steps:()=>i});var l=s(98139);const i=class{constructor(e){(0,l.r)(this,e),this.stepSelected=(0,l.c)(this,"stepSelected",7),this.vertical=!1,this.linear=!1,this.clickable=!1,this.selectedIndex=0}getSteps(){return Array.from(this.hostElement.querySelectorAll("ix-workflow-step"))}deselectAll(){this.getSteps().forEach((e=>{e.setAttribute("selected","false")}))}componentDidRender(){const e=this.getSteps();e.forEach(((t,s)=>{t.setAttribute("vertical",!0===this.vertical?"true":"false"),t.setAttribute("clickable",!0===this.clickable?"true":"false"),t.setAttribute("selected",this.selectedIndex===s?"true":"false"),0===s&&t.setAttribute("position","first"),s===e.length-1&&t.setAttribute("position","last")}))}componentWillRender(){const e=this.getSteps();e.forEach(((t,s)=>{t.addEventListener("click",(()=>{if(!this.clickable)return;const l=e[s-1];if(this.linear&&l&&!["done","success"].includes(null==l?void 0:l.status))return t.setAttribute("selected","false");this.deselectAll(),t.setAttribute("selected","true"),this.stepSelected.emit(s)}))}))}render(){return(0,l.h)(l.H,null,(0,l.h)("div",{class:{steps:!0,vertical:this.vertical}},(0,l.h)("slot",null)))}get hostElement(){return(0,l.g)(this)}};i.style=".sc-ix-workflow-steps-h .steps.sc-ix-workflow-steps{display:flex}.sc-ix-workflow-steps-h .steps.vertical.sc-ix-workflow-steps{display:block}"}}]);