'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-f1e4d53b.js');
const mutations = require('./mutations-48c08136.js');
const pageAlign = require('./page-align-bf197eb4.js');
const getters = require('./getters-bc8b9726.js');
const index$1 = require('./index-ac2250b7.js');
require('./index-00f0fc21.js');
require('./utils-a086ed6e.js');
require('./get-query-arg-53bf21e2.js');
require('./add-query-args-17c551b6.js');
require('./index-fb76df07.js');
require('./google-62bdaeea.js');
require('./currency-ba038e2f.js');
require('./store-47c25b3d.js');
require('./price-f1f1114d.js');
require('./fetch-2dba325c.js');

const scOrderCouponFormCss = ":host{display:block}.coupon-form{position:relative}.form{opacity:0;visibility:hidden;height:0;transition:opacity var(--sc-transition-fast) ease-in-out}.coupon-form--is-open .form{opacity:1;visibility:visible;height:auto;margin-top:var(--sc-spacing-small);display:grid;gap:var(--sc-spacing-small)}.coupon-form--is-open .trigger{color:var(--sc-input-label-color)}.coupon-form--is-open .trigger:hover{text-decoration:none}.trigger{cursor:pointer;font-size:var(--sc-font-size-small);color:var(--sc-color-gray-500);user-select:none}.trigger:hover{text-decoration:underline}.order-coupon-form--is-rtl .trigger,.order-coupon-form--is-rtl .trigger:hover{text-align:right}";

const ScOrderCouponForm = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.label = undefined;
    this.loading = undefined;
    this.collapsed = undefined;
    this.placeholder = undefined;
    this.buttonText = undefined;
    this.open = undefined;
    this.value = undefined;
    this.error = undefined;
  }
  async handleCouponApply(e) {
    var _a, _b, _c;
    const promotion_code = (e === null || e === void 0 ? void 0 : e.detail) || null;
    try {
      this.error = null;
      mutations.updateFormState('FETCH');
      mutations.state.checkout = (await index$1.createOrUpdateCheckout({
        id: mutations.state.checkout.id,
        data: {
          discount: {
            ...(promotion_code ? { promotion_code } : {}),
          },
        },
      }));
      mutations.updateFormState('RESOLVE');
      await ((_a = this.couponForm) === null || _a === void 0 ? void 0 : _a.triggerFocus());
    }
    catch (error) {
      console.error(error);
      this.error = ((_c = (_b = error === null || error === void 0 ? void 0 : error.additional_errors) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c.message) || (error === null || error === void 0 ? void 0 : error.message) || wp.i18n.__('Something went wrong', 'surecart');
      mutations.updateFormState('REJECT');
    }
  }
  render() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    // Do any line items have a recurring price?
    const hasRecurring = (_c = (_b = (_a = mutations.state === null || mutations.state === void 0 ? void 0 : mutations.state.checkout) === null || _a === void 0 ? void 0 : _a.line_items) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.some(item => { var _a; return (_a = item === null || item === void 0 ? void 0 : item.price) === null || _a === void 0 ? void 0 : _a.recurring_interval; });
    return (index.h("sc-coupon-form", { ref: el => (this.couponForm = el), label: this.label || wp.i18n.__('Add Coupon Code', 'surecart'), collapsed: this.collapsed, placeholder: this.placeholder, loading: getters.formBusy() && !((_f = (_e = (_d = mutations.state.checkout) === null || _d === void 0 ? void 0 : _d.line_items) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.length), busy: getters.formBusy(), discount: (_g = mutations.state.checkout) === null || _g === void 0 ? void 0 : _g.discount, currency: (_h = mutations.state.checkout) === null || _h === void 0 ? void 0 : _h.currency, "discount-amount": (_j = mutations.state.checkout) === null || _j === void 0 ? void 0 : _j.discount_amount, class: {
        'order-coupon-form--is-rtl': pageAlign.isRtl(),
      }, "button-text": this.buttonText || wp.i18n.__('Apply', 'surecart'), "show-interval": hasRecurring, onScApplyCoupon: e => this.handleCouponApply(e), error: this.error }));
  }
};
ScOrderCouponForm.style = scOrderCouponFormCss;

exports.sc_order_coupon_form = ScOrderCouponForm;

//# sourceMappingURL=sc-order-coupon-form.cjs.entry.js.map