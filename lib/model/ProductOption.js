"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductOption = void 0;

var _Price = require("./Price");

var _uuid = require("../util/uuid");

class ProductOption {
  constructor(data) {
    this._data = data || {};
    this._data.price = this._data.price || [];
    this._data.properties = this._data.properties || {};

    if (!this._data.uuid) {
      this._data.uuid = (0, _uuid.v4)();
    }
  }

  get uuid() {
    return this._data.uuid;
  }

  get title() {
    return this._data.title;
  }

  set title(val) {
    this._data.title = val;
  }

  get properties() {
    return this._data.properties;
  }

  set properties(val) {
    this._data.properties = val;
  }

  get price() {
    return this._data.price.map(p => new _Price.Price(p));
  }

  set price(val) {
    this._data.price = val;
  }

  addPrice(val) {
    this._data.price.push(new _Price.Price(val).toPlainObject());

    return this._data.price[this._data.price.length - 1];
  }

  removePrice(method) {
    var removeIndex = this._data.price.findIndex(ind => ind.val === method);

    if (removeIndex != -1) {
      this._data.price.splice(removeIndex, 1);
    }
  }

  getPriceByMethod(method) {
    return new _Price.Price(this._data.price.find(x => x.method === method));
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      title: this._data.title,
      properties: this._data.properties,
      price: this._data.price
    };
  }

}

exports.ProductOption = ProductOption;