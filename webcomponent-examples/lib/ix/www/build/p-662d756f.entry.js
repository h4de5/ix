import{r as t,c as s,h as o,H as i,g as a}from"./p-47ea9884.js";import{T as e}from"./p-6f625f0e.js";const r=class{constructor(o){t(this,o),this.closeToast=s(this,"closeToast",7),this.autoCloseDelay=5e3,this.autoClose=!0,this.progress=0,this.isRunning=!0,this.touched=!1}getIcon(){if(this.icon)return o("ix-icon",{name:this.icon,color:this.iconColor,size:"24"});switch(this.type){case"info":return o("ix-icon",{name:"info",size:"24",color:"color-std-text"});case"error":return o("ix-icon",{name:"error",size:"24",color:"color-alarm"});case"success":return o("ix-icon",{name:"success",size:"24",color:"color-success"});case"warning":return o("ix-icon",{name:"warning",size:"24",color:"color-warning"});default:return""}}close(){this.host&&this.host.classList.add("animate__fadeOut"),setTimeout((()=>{this.closeToast.emit()}),250)}render(){let t,s={};const a=["toast-progress-bar"];this.touched?a.push("toast-progress-bar--touched"):(s={animationDuration:`${this.autoCloseDelay}ms`,animationPlayState:this.isRunning?"running":"paused"},a.push("toast-progress-bar--animated"));const e=()=>{t&&(t.style.transform=`scaleX(${this.progress})`)};return o(i,{class:"animate__animated animate__fadeIn"},o("div",{class:"toast-body",onPointerLeave:()=>{this.progress=0,e()},onPointerEnter:()=>{this.isRunning=!1,this.touched=!0,this.progress=1,e()}},this.type||this.icon?o("div",{class:"toast-icon"},this.getIcon()):null,o("div",{class:"toast-content"},this.toastTitle?o("div",{class:"toast-title text-default-title-single"},this.toastTitle):null,o("div",{class:"toast-message text-default"},o("slot",null))),o("div",{class:"toast-close"},o("ix-icon-button",{icon:"close",size:"24",ghost:!0,onClick:()=>this.closeToast.emit()}))),this.autoClose?o("div",{class:a.join(" "),style:s,ref:s=>t=s,onAnimationEnd:()=>this.close(),onTransitionEnd:()=>{0===this.progress&&this.close()}}):null)}get host(){return a(this)}};r.style=".sc-ix-toast-h{display:flex;flex-direction:column;position:relative;min-width:17.5rem;max-width:17.5rem;min-height:3.5rem;pointer-events:all;background-color:var(--theme-toast--background);border:var(--theme-toast--border-thickness) solid var(--theme-toast--border-color);border-radius:var(--theme-toast--border-radius);box-shadow:var(--theme-toast--box-shadow);--animate-duration:300ms}.sc-ix-toast-h .toast-body.sc-ix-toast{display:flex;position:relative;width:100%;flex-grow:1}.sc-ix-toast-h .toast-body.sc-ix-toast .toast-icon.sc-ix-toast{display:flex;align-items:flex-start;margin:1rem}.sc-ix-toast-h .toast-body.sc-ix-toast .toast-content.sc-ix-toast{overflow:hidden;text-overflow:ellipsis;min-width:0;width:100%;max-width:10.25rem;margin-top:calc(\n        1rem + var(--theme-toast--border-thickness)\n      );margin-bottom:0.75rem}.sc-ix-toast-h .toast-body.sc-ix-toast .toast-content.sc-ix-toast .toast-message.sc-ix-toast{min-width:0}.sc-ix-toast-h .toast-close.sc-ix-toast{display:flex;position:relative;margin:0.75rem;pointer-events:all}.sc-ix-toast-h .toast-progress-bar.sc-ix-toast{position:absolute;bottom:0;height:0.25rem;width:100%;background-color:var(--theme-toast-timer-value--background);transform-origin:left}.sc-ix-toast-h .toast-progress-bar--animated.sc-ix-toast{animation:trackProgress linear 1 forwards}.sc-ix-toast-h .toast-progress-bar--touched.sc-ix-toast{transition:transform 1s}.sc-ix-toast-h:not(.disabled):not(:disabled){cursor:pointer}.sc-ix-toast-h:not(.disabled):not(:disabled):hover .toast-progress-bar.sc-ix-toast{visibility:hidden;transition:none}@keyframes trackProgress{0%{transform:scaleX(1)}100%{transform:scaleX(0)}}";const n=class{constructor(s){t(this,s),this.containerId="toast-container",this.containerClass="toast-container",this.position="bottom-right"}get hostContainer(){return document.getElementById(this.containerId)}componentDidLoad(){if(!document.getElementById(this.containerId)){const t=document.createElement("div");t.id=this.containerId,t.classList.add(this.containerClass),t.classList.add(`toast-container--${this.position}`),document.body.appendChild(t)}}async showToast(t){const s=document.createElement("ix-toast"),o=new e;function i(t){s.remove(),o.emit(t)}return s.toastTitle=t.title,s.type=t.type,s.autoClose=t.autoClose,s.autoCloseDelay=t.autoCloseDelay,s.icon=t.icon,s.iconColor=t.iconColor,s.addEventListener("closeToast",(t=>{const{detail:s}=t;i(s)})),"string"==typeof t.message?s.innerText=t.message:s.appendChild(t.message),this.hostContainer.appendChild(s),{onClose:o,close:t=>{i(t)}}}render(){return o(i,null)}get host(){return a(this)}};export{r as ix_toast,n as ix_toast_container}