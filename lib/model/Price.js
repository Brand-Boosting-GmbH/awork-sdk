"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Price = void 0;

class Price {
  constructor(data) {
    this._data = data || {};
  }

  get method() {
    return this._data.method;
  }

  set method(val) {
    this._data.method = val;
  }

  get amount() {
    return this._data.amount;
  }

  set amount(val) {
    this._data.amount = parseInt(val);
  }

  get currency() {
    return this._data.currency;
  }

  set currency(val) {
    this._data.currency = val;
  }

  toPlainObject() {
    return {
      method: this._data.method,
      amount: parseInt(this._data.amount),
      currency: this._data.currency
    };
  }

}

exports.Price = Price;