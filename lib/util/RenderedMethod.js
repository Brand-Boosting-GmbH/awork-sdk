"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderedMethod = void 0;

// import { CatalogSelection } from '../model/CatalogSelection'
class RenderedMethod {
  constructor(method, selections) {
    this._method = method || {};
    this._selections = selections || {};
  }

  get uuid() {
    return this._method.uuid;
  }
  /**
   * Outputs Method UUID for compatibility reasons
   * @deprecated try to use the new {@link RenderedMethod.uuid} instead or use 
   * the pass-trough properties of the RenderedMethod Class directly
   */


  get method() {
    return this._method.uuid;
  }

  get title() {
    return this._method.title;
  }
  /**
   * defines the upcharge for the selected method 'pick-up' or 'delivery'
   * @type {Array} // KS: Why should this be an array???
   */


  get priceAmount() {
    return this._method.priceAmount;
  }

  get priceCurrency() {
    return this._method.priceCurrency;
  }
  /**
   * if this value is reached the upcharge is ignored
   * @type {Number}
   */


  get maxValue() {
    return this._method.maxValue;
  }

  get selections() {
    return this._selections;
  }

  get minOrderValue() {
    return this._method.minOrderValue;
  }

}

exports.RenderedMethod = RenderedMethod;