import{h}from"@stencil/core";export class ScPaymentSelected{constructor(){this.iconName=void 0,this.label=void 0}render(){return h("div",{class:"payment-selected",part:"base"},h("slot",{name:"icon"}),h("div",{class:"payment-selected__label"},this.label),h("sc-divider",{style:{"--spacing":"var(--sc-spacing-xx-small)"},exportparts:"base:divider, line:divider__line"}),h("div",{part:"instructions",class:"payment-selected__instructions"},h("svg",{part:"icon",viewBox:"0 0 48 40",fill:"var(--sc-color-gray-500)",xmlns:"http://www.w3.org/2000/svg",role:"presentation"},h("path",{opacity:".6","fill-rule":"evenodd","clip-rule":"evenodd",d:"M43 5a4 4 0 00-4-4H17a4 4 0 00-4 4v11a1 1 0 102 0V5a2 2 0 012-2h22a2 2 0 012 2v30a2 2 0 01-2 2H17a2 2 0 01-2-2v-9a1 1 0 10-2 0v9a4 4 0 004 4h22a4 4 0 004-4V5zM17.992 16.409L21.583 20H6a1 1 0 100 2h15.583l-3.591 3.591a1 1 0 101.415 1.416l5.3-5.3a1 1 0 000-1.414l-5.3-5.3a1 1 0 10-1.415 1.416zM17 6a1 1 0 011-1h15a1 1 0 011 1v2a1 1 0 01-1 1H18a1 1 0 01-1-1V6zm21-1a1 1 0 100 2 1 1 0 000-2z"})),h("div",{part:"text",class:"payment-selected__instructions-text"},h("slot",null))))}static get is(){return"sc-payment-selected"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-payment-selected.scss"]}}static get styleUrls(){return{$:["sc-payment-selected.css"]}}static get properties(){return{iconName:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"icon-name",reflect:!1},label:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"label",reflect:!1}}}}