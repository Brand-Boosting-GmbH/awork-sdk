"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MailTemplate = void 0;

/**
 * Represents a mail template, to be saved inside a Subcollection of
 * the restaurant.
 * @class
 */
class MailTemplate {
  /**
   * Mail Template constructor, wraps an existing Firestore DocumentSnapshot
   * @param {DocumentSnapshot} snap The DocumentSnapshot representing the Mail Template
   */
  constructor(snap) {
    this._snap = snap;
    this._ref = snap.ref;
    this._data = snap.data() || {};
  }

  get uuid() {
    return this._ref.id;
  }
  /**
   * Declares the MailTemplate (in-)active
   * Depending on this mails will be sent or not
   * @type {Boolean}
   */


  get active() {
    return this._data.active || false;
  }

  set active(val) {
    this._data.active = val;
  }
  /**
   * Defines by which events this MailTemplate should be triggered.
   * This may affect which kind of data is available in the rendering context.
   * @type {('MANUAL'|'ORDER_CONFIRMATION'|'ORDER_COMPLETION'|'RESTAURANT_MESSAGE'|'CUSTOMER_MESSAGE')}
   */


  get trigger() {
    return this._data.trigger || 'MANUAL';
  }

  set trigger(val) {
    this._data.trigger = val;
  }
  /**
   * The Title to be used for the Mail,
   * Supports Delivery Boostings Flavour of LiquidJS
   * @type {String}
   */


  get title() {
    return this._data.title || '';
  }

  set title(val) {
    this._data.title = val;
  }
  /**
   * The body markup of the Mail,
   * Supports Delivery Boostings Flavour of LiquidJS
   * @type {String}
   */


  get markup() {
    return this._data.markup || '';
  }

  set markup(val) {
    this._data.markup = val;
  }
  /**
   * Defines who's the desired reciver group of this MailTemplate
   * @type {('CUSTOMER'|'RESTAURANT'|'ADMIN'|'SUPPORT')}
   */


  get reciverType() {
    return this._data.reciverType || 'CUSTOMER';
  }

  set reciverType(val) {
    if (!['CUSTOMER', 'RESTAURANT', 'ADMIN', 'SUPPORT'].includes(val)) {
      new Error('ILLEGAL_ARGUMENT');
    }

    this._data.reciverType = val;
  }

  async commit() {
    await this._ref.set(this.toPlainObject());
  }

  toPlainObject() {
    return {
      active: this._data.active ? true : false,
      trigger: this._data.trigger,
      title: this._data.title,
      markup: this._data.markup,
      reciverType: this._data.reciverType
    };
  }

}

exports.MailTemplate = MailTemplate;