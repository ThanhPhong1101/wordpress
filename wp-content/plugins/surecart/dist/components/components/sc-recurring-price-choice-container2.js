import{proxyCustomElement,HTMLElement,createEvent,h,Host,Fragment}from"@stencil/core/internal/client";import{i as intervalString}from"./price.js";import{d as defineCustomElement$6}from"./sc-choice-container2.js";import{d as defineCustomElement$5}from"./dropdown.js";import{d as defineCustomElement$4}from"./sc-format-number2.js";import{d as defineCustomElement$3}from"./sc-icon2.js";import{d as defineCustomElement$2}from"./sc-menu2.js";import{d as defineCustomElement$1}from"./sc-menu-item2.js";const scRecurringPriceChoiceContainerCss=".recurring-price-choice{display:flex;justify-content:space-between;gap:var(--sc-spacing-x-small);flex-wrap:wrap}.recurring-price-choice__name{font-weight:var(--sc-font-weight-semibold);cursor:pointer}.recurring-price-choice__control{flex:1;display:flex;flex-direction:column;gap:var(--sc-spacing-x-small);align-self:center}.recurring-price-choice__details{align-self:center;display:flex;align-items:flex-end;flex-direction:column;gap:var(--sc-spacing-xx-small)}.recurring-price-choice__button{font-size:var(--sc-font-size-small);appearance:none;display:flex;align-items:center;gap:var(--sc-spacing-xx-small);text-decoration:none;user-select:none;white-space:var(--sc-recurring-price-choice-white-space, nowrap);text-align:var(--sc-recurring-price-choice-text-align, center);vertical-align:middle;padding:13px;margin:-13px;border:none;background:transparent;font-size:inherit;color:inherit;border-radius:var(--sc-input-border-radius-medium);opacity:0.8;cursor:pointer}.recurring-price-choice__button:focus-visible{outline:1px solid var(--sc-color-primary-500);outline-offset:4px}.recurring-price-choice__trial,.recurring-price-choice__setup-fee,.recurring-price-choice__price{font-size:var(--sc-font-size-small);opacity:0.8}sc-dropdown{width:100%}sc-choice-container:not([checked]) sc-dropdown{pointer-events:none}",ScRecurringPriceChoiceContainer=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.scChange=createEvent(this,"scChange",7),this.prices=void 0,this.selectedPrice=void 0,this.selectedOption=void 0,this.product=void 0,this.label=void 0,this.showControl=!1,this.showAmount=!0,this.showDetails=!0}renderPrice(e){return h("sc-format-number",{type:"currency",value:null==e?void 0:e.amount,currency:null==e?void 0:e.currency})}value(){return this.prices.find((e=>{var i;return e.id===(null===(i=this.selectedPriceState())||void 0===i?void 0:i.id)}))||this.prices[0]}selectedPriceState(){return this.prices.find((e=>{var i;return e.id===(null===(i=this.selectedPrice)||void 0===i?void 0:i.id)}))||this.selectedOption||this.prices[0]}render(){var e,i,r,t,c,n,s,o,a,l,u,d,m,p;return(null===(e=this.prices)||void 0===e?void 0:e.length)?h("sc-choice-container",{value:null===(i=this.selectedPrice)||void 0===i?void 0:i.id,type:"radio",showControl:this.showControl,checked:this.prices.some((e=>{var i;return e.id===(null===(i=this.selectedPrice)||void 0===i?void 0:i.id)})),onScChange:e=>{var i;e.stopPropagation(),this.scChange.emit(null===(i=this.value())||void 0===i?void 0:i.id)},role:"button"},h("div",{class:"recurring-price-choice"},h("div",{class:"recurring-price-choice__control"},h("div",{class:"recurring-price-choice__name"},h("slot",null,this.label)),(null===(r=this.prices)||void 0===r?void 0:r.length)>1&&h("div",{class:"recurring-price-choice__description"},h("sc-dropdown",{style:{"--panel-width":"max(100%, 11rem)","--sc-menu-item-white-space":"wrap"}},h("button",{class:"recurring-price-choice__button",slot:"trigger","aria-label":wp.i18n.__("Press Up/Down Arrow & select the recurring interval you want.","surecart")},(null===(t=this.value())||void 0===t?void 0:t.name)||((null===(c=this.value())||void 0===c?void 0:c.recurring_interval)?intervalString(this.value(),{showOnce:!0,abbreviate:!1,labels:{interval:wp.i18n.__("Every","surecart"),period:
/** translators: used as in time period: "for 3 months" */
wp.i18n.__("for","surecart")}}):this.product.name),h("sc-icon",{style:{minWidth:"var(--width)"},name:"chevron-down"})),h("sc-menu",{"aria-label":wp.i18n.__("Recurring Interval selection Dropdown opened, Press Up/Down Arrow & select the recurring interval you want.","surecart")},(this.prices||[]).map((e=>{var i;const r=(null==e?void 0:e.id)===(null===(i=this.selectedPriceState())||void 0===i?void 0:i.id),t=(null==e?void 0:e.name)||((null==e?void 0:e.recurring_interval)?intervalString(e,{showOnce:!0,abbreviate:!1,labels:{interval:wp.i18n.__("Every","surecart"),period:
/** translators: used as in time period: "for 3 months" */
wp.i18n.__("for","surecart")}}):this.product.name);return h("sc-menu-item",{onClick:()=>{this.selectedOption=e,this.scChange.emit(null==e?void 0:e.id)},checked:r,"aria-label":t},t,this.showAmount&&h("span",{slot:"suffix"},this.renderPrice(e)))})))))),this.showDetails&&h("div",{class:"recurring-price-choice__details"},h("div",{class:"recurring-price-choice__price"},(null===(n=this.selectedPriceState())||void 0===n?void 0:n.ad_hoc)?wp.i18n.__("Custom Amount","surecart"):h(Fragment,null,h("sc-format-number",{type:"currency",value:null===(s=this.selectedPriceState())||void 0===s?void 0:s.amount,currency:null===(o=this.selectedPriceState())||void 0===o?void 0:o.currency}),intervalString(this.selectedPriceState(),{showOnce:!0,abbreviate:!0,labels:{interval:"/",period:
/** translators: used as in time period: "for 3 months" */
wp.i18n.__("for","surecart")}}))),!!(null===(a=this.selectedPriceState())||void 0===a?void 0:a.trial_duration_days)&&h("div",{class:"recurring-price-choice__trial"},wp.i18n.sprintf(wp.i18n._n("Starting in %s day","Starting in %s days",this.selectedPriceState().trial_duration_days,"surecart"),this.selectedPriceState().trial_duration_days)),!!(null===(l=this.selectedPriceState())||void 0===l?void 0:l.setup_fee_enabled)&&(null===(u=this.selectedPriceState())||void 0===u?void 0:u.setup_fee_amount)&&h("div",{class:"recurring-price-choice__setup-fee"},h("sc-format-number",{type:"currency",value:Math.abs(this.selectedPriceState().setup_fee_amount),currency:null===(d=this.selectedPriceState())||void 0===d?void 0:d.currency})," ",(null===(m=this.selectedPriceState())||void 0===m?void 0:m.setup_fee_name)||((null===(p=this.selectedPriceState())||void 0===p?void 0:p.setup_fee_amount)<0?wp.i18n.__("Discount","surecart"):wp.i18n.__("Setup Fee","surecart")))))):h(Host,{style:{display:"none"}})}static get style(){return scRecurringPriceChoiceContainerCss}},[4,"sc-recurring-price-choice-container",{prices:[16],selectedPrice:[16],product:[16],label:[1],showControl:[4,"show-control"],showAmount:[4,"show-amount"],showDetails:[4,"show-details"],selectedOption:[32]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-recurring-price-choice-container","sc-choice-container","sc-dropdown","sc-format-number","sc-icon","sc-menu","sc-menu-item"].forEach((e=>{switch(e){case"sc-recurring-price-choice-container":customElements.get(e)||customElements.define(e,ScRecurringPriceChoiceContainer);break;case"sc-choice-container":customElements.get(e)||defineCustomElement$6();break;case"sc-dropdown":customElements.get(e)||defineCustomElement$5();break;case"sc-format-number":customElements.get(e)||defineCustomElement$4();break;case"sc-icon":customElements.get(e)||defineCustomElement$3();break;case"sc-menu":customElements.get(e)||defineCustomElement$2();break;case"sc-menu-item":customElements.get(e)||defineCustomElement$1()}}))}export{ScRecurringPriceChoiceContainer as S,defineCustomElement as d};