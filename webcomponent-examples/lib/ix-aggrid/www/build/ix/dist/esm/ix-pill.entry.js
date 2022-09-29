import { r as registerInstance, h, H as Host, g as getElement } from './index-55cfd20d.js';

const pillCss = ".sc-ix-pill-h{display:inline-flex;position:relative;align-items:center;justify-content:center;border-radius:100px;padding:0px 6px;margin-left:0.25rem;min-width:1.5rem;height:1.25rem;min-height:1.25rem;max-height:1.25rem;cursor:auto}.sc-ix-pill-h .with-icon.sc-ix-pill{margin-right:0.25rem}.align-left.sc-ix-pill-h{justify-content:flex-start}[variant=primary].sc-ix-pill-h{background-color:var(--theme-color-primary);color:var(--theme-chip-primary--color)}[variant=primary].sc-ix-pill-h .close-button.sc-ix-pill{color:var(--theme-chip-primary--color);pointer-events:auto}[variant=primary].outline.sc-ix-pill-h{color:var(--theme-chip-primary-outline--color);background-color:transparent;border:solid 1px var(--theme-chip-primary-outline--border-color)}[variant=primary].outline.sc-ix-pill-h .close-button.sc-ix-pill{color:var(--theme-chip-primary-outline--color)}[variant=alarm].sc-ix-pill-h{color:var(--theme-color-alarm--contrast)}[variant=alarm].sc-ix-pill-h:not(.outline){background-color:var(--theme-color-alarm)}[variant=alarm].sc-ix-pill-h:not(.outline) .close-button.sc-ix-pill{color:var(--theme-color-alarm--contrast)}[variant=alarm].sc-ix-pill-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=alarm].sc-ix-pill-h:not(.outline).active::after,[variant=alarm].sc-ix-pill-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=alarm].outline.sc-ix-pill-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-alarm)}[variant=alarm].outline.sc-ix-pill-h:hover::after{display:none}[variant=alarm].outline.sc-ix-pill-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=alarm].outline.active.sc-ix-pill-h::after,[variant=alarm].outline.sc-ix-pill-h:active::after{display:none}[variant=alarm].outline.active.sc-ix-pill-h,[variant=alarm].outline.sc-ix-pill-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=critical].sc-ix-pill-h{color:var(--theme-color-critical--contrast)}[variant=critical].sc-ix-pill-h:not(.outline){background-color:var(--theme-color-critical)}[variant=critical].sc-ix-pill-h:not(.outline) .close-button.sc-ix-pill{color:var(--theme-color-critical--contrast)}[variant=critical].sc-ix-pill-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=critical].sc-ix-pill-h:not(.outline).active::after,[variant=critical].sc-ix-pill-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=critical].outline.sc-ix-pill-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-critical)}[variant=critical].outline.sc-ix-pill-h:hover::after{display:none}[variant=critical].outline.sc-ix-pill-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=critical].outline.active.sc-ix-pill-h::after,[variant=critical].outline.sc-ix-pill-h:active::after{display:none}[variant=critical].outline.active.sc-ix-pill-h,[variant=critical].outline.sc-ix-pill-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=warning].sc-ix-pill-h{color:var(--theme-color-warning--contrast)}[variant=warning].sc-ix-pill-h:not(.outline){background-color:var(--theme-color-warning)}[variant=warning].sc-ix-pill-h:not(.outline) .close-button.sc-ix-pill{color:var(--theme-color-warning--contrast)}[variant=warning].sc-ix-pill-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=warning].sc-ix-pill-h:not(.outline).active::after,[variant=warning].sc-ix-pill-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=warning].outline.sc-ix-pill-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-warning)}[variant=warning].outline.sc-ix-pill-h:hover::after{display:none}[variant=warning].outline.sc-ix-pill-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=warning].outline.active.sc-ix-pill-h::after,[variant=warning].outline.sc-ix-pill-h:active::after{display:none}[variant=warning].outline.active.sc-ix-pill-h,[variant=warning].outline.sc-ix-pill-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=info].sc-ix-pill-h{color:var(--theme-color-info--contrast)}[variant=info].sc-ix-pill-h:not(.outline){background-color:var(--theme-color-info)}[variant=info].sc-ix-pill-h:not(.outline) .close-button.sc-ix-pill{color:var(--theme-color-info--contrast)}[variant=info].sc-ix-pill-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=info].sc-ix-pill-h:not(.outline).active::after,[variant=info].sc-ix-pill-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=info].outline.sc-ix-pill-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-info)}[variant=info].outline.sc-ix-pill-h:hover::after{display:none}[variant=info].outline.sc-ix-pill-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=info].outline.active.sc-ix-pill-h::after,[variant=info].outline.sc-ix-pill-h:active::after{display:none}[variant=info].outline.active.sc-ix-pill-h,[variant=info].outline.sc-ix-pill-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=neutral].sc-ix-pill-h{color:var(--theme-color-neutral--contrast)}[variant=neutral].sc-ix-pill-h:not(.outline){background-color:var(--theme-color-neutral)}[variant=neutral].sc-ix-pill-h:not(.outline) .close-button.sc-ix-pill{color:var(--theme-color-neutral--contrast)}[variant=neutral].sc-ix-pill-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=neutral].sc-ix-pill-h:not(.outline).active::after,[variant=neutral].sc-ix-pill-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=neutral].outline.sc-ix-pill-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-neutral)}[variant=neutral].outline.sc-ix-pill-h:hover::after{display:none}[variant=neutral].outline.sc-ix-pill-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=neutral].outline.active.sc-ix-pill-h::after,[variant=neutral].outline.sc-ix-pill-h:active::after{display:none}[variant=neutral].outline.active.sc-ix-pill-h,[variant=neutral].outline.sc-ix-pill-h:active{background-color:var(--theme-chip-outline--background--active)}[variant=success].sc-ix-pill-h{color:var(--theme-color-success--contrast)}[variant=success].sc-ix-pill-h:not(.outline){background-color:var(--theme-color-success)}[variant=success].sc-ix-pill-h:not(.outline) .close-button.sc-ix-pill{color:var(--theme-color-success--contrast)}[variant=success].sc-ix-pill-h:not(.outline):hover::after{content:\"\";background-color:rgba(0, 0, 0, 0.05)}[variant=success].sc-ix-pill-h:not(.outline).active::after,[variant=success].sc-ix-pill-h:not(.outline):active::after{background-color:rgba(0, 0, 0, 0.1)}[variant=success].outline.sc-ix-pill-h{color:var(--theme-chip-outline--color);border:solid 1px var(--theme-color-success)}[variant=success].outline.sc-ix-pill-h:hover::after{display:none}[variant=success].outline.sc-ix-pill-h:hover{background-color:var(--theme-chip-outline--background--hover)}[variant=success].outline.active.sc-ix-pill-h::after,[variant=success].outline.sc-ix-pill-h:active::after{display:none}[variant=success].outline.active.sc-ix-pill-h,[variant=success].outline.sc-ix-pill-h:active{background-color:var(--theme-chip-outline--background--active)}.sc-ix-pill-h .slot.sc-ix-pill{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";

const Pill = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * Pill variant
     */
    this.variant = 'primary';
    /**
     * Show pill as outline
     */
    this.outline = false;
    /**
     * Align pill content left
     */
    this.alignLeft = false;
  }
  render() {
    return (h(Host, { class: {
        outline: this.outline,
        'align-left': this.alignLeft,
      }, style: this.variant === 'custom'
        ? {
          color: this.color,
          backgroundColor: this.background,
        }
        : {}, title: this.el.textContent }, this.icon ? (h("ix-icon", { class: 'with-icon', name: this.icon, size: '16' })) : null, h("div", { class: "slot" }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
Pill.style = pillCss;

export { Pill as ix_pill };
