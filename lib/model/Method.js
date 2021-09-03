"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Method = void 0;

var _CatalogSelection = require("./CatalogSelection");

class Method {
  constructor(data) {
    this._data = data || {};
    this._data.price = this._data.price || {};
    this._data.selections = this._data.selections || [];
  }

  get uuid() {
    return this._data.uuid;
  }

  set uuid(val) {
    this._data.uuid = val;
  }

  get title() {
    return this._data.title;
  }

  set title(val) {
    this._data.title = val;
  }
  /**
   * defines the upcharge for the selected method 'pick-up' or 'delivery'
   * @type {Array}
   */


  get priceAmount() {
    return this._data.price.amount;
  }

  set priceAmount(val) {
    this._data.price.amount = val;
  }

  get priceCurrency() {
    return this._data.price.currency;
  }

  set priceCurrency(val) {
    this._data.price.currency = val;
  }
  /**
   * if this value is reached the upcharge is ignored
   * @type {Number}
   */


  get maxValue() {
    return this._data.maxValue;
  }

  set maxValue(val) {
    this._data.maxValue = val;
  }

  get selections() {
    return this._data.selections.map(p => new _CatalogSelection.CatalogSelection(p));
  }

  set selections(val) {
    this._data.selections = val;
  }

  get minOrderValue() {
    return this._data.minOrderValue;
  }

  set minOrderValue(val) {
    this._data.minOrderValue = val;
  }

  addSelection(val) {
    this._data.selections.push(new _CatalogSelection.CatalogSelection(val).toPlainObject());

    return this._data.selections[this._data.selections.length - 1];
  }

  removeSelection(uuid) {
    var removeIndex = this._data.selections.findIndex(ind => ind.uuid === uuid);

    if (removeIndex != -1) {
      this._data.selections.splice(removeIndex, 1);
    }
  }

  getSelectionByUuid(uuid) {
    return new _CatalogSelection.CatalogSelection(this._data.selections.find(ind => ind.uuid === uuid));
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      title: this._data.title,
      price: {
        amount: this._data.price.amount,
        currency: this._data.price.currency
      },
      selections: this._data.selections,
      minOrderValue: this._data.minOrderValue,
      maxValue: this._data.maxValue
    };
  }

}

exports.Method = Method;