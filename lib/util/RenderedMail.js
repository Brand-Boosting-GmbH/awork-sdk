"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderedMail = void 0;

var _MailTemplate = require("../model/MailTemplate");

var _Restaurant = require("../model/Restaurant");

var _Liquid = require("./Liquid");

var _RenderedOrder = require("./RenderedOrder");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Renders a Mail by combining a MailTemplate with the
 * required context.
 * @class
 */
class RenderedMail {
  /**
   * 
   * @param {MailTemplate} mailTemplate The Mail Template as base
   * @param {Restaurant} restaurant The Restaurant related with this Mail
   * @param {RenderedOrder} renderedOrder The Restaurant related with this Mail
   */
  constructor(mailTemplate, restaurant, renderedOrder = undefined) {
    this._mailTemplate = mailTemplate;
    this._restaurant = restaurant;
    this._renderedOrder = renderedOrder;
  }
  /**
   * The Title to be used for the Mail,
   * Rendered by using Delivery Boostings Flavour of LiquidJS
   * @type {String}
   */


  get title() {
    return _Liquid.LiquidEngine.parseAndRenderSync(this._mailTemplate.title, {
      order: this._renderedOrder,
      restaurant: this._restaurant,
      now: new Date().getTime()
    });
  }
  /**
   * The body markup of the Mail,
   * Rendered by using Delivery Boostings Flavour of LiquidJS
   * @type {String}
   */


  get markup() {
    return _Liquid.LiquidEngine.parseAndRenderSync(this._mailTemplate.markup, {
      order: this._renderedOrder,
      restaurant: this._restaurant,
      now: new Date().getTime()
    });
  }
  /**
   * Returns the reciver by depending on reciverType and the context
   * @type {String}
   */


  get reciver() {
    switch (this._mailTemplate.reciverType) {
      case 'CUSTOMER':
        return (this._renderedOrder.shipping.mail || '').trim();

      case 'RESTAURANT':
        return (this._restaurant.footerMail || '').trim();

      case 'ADMIN':
      case 'SUPPORT':
        return 'info@brand-boosting.de';

      default:
        break;
    }
  }

  async send() {
    await _axios.default.post('https://delivery-boosting-2021-model.web.app/sendMail', {
      mailTemplate: this._mailTemplate.uuid,
      restaurant: this._restaurant.uuid,
      order: this._renderedOrder.uuid
    });
  }

}

exports.RenderedMail = RenderedMail;