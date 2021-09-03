"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Size = void 0;

var _Price = require("./Price");

var _uuid = require("../util/uuid");

class Size {
  constructor(data) {
    this._data = data || {};
    this._data.price = this._data.price || [];

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

  get price() {
    return this._data.price.map(p => new _Price.Price(p));
  }

  set price(val) {
    this._data.price = val;
  }
  /**
   * Add a Price
   * @param {Object} val
   */


  addPrice(val) {
    this._data.price.push(new _Price.Price(val).toPlainObject());

    return this._data.price[this._data.price.length - 1];
  }
  /**
   * Remove a Price 
   * @param {String} uuid
   */


  removePrice(uuid) {
    var removeIndex = this._data.price.findIndex(x => x.method === uuid);

    if (removeIndex != -1) {
      this._data.price.splice(removeIndex, 1);
    }
  }
  /**
   * Get a specific Price
   * @param {String} method
   */


  getPriceByMethod(method) {
    return this._data.price.find(x => x.method === method);
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      title: this._data.title,
      price: this._data.price
    };
  }

}

exports.Size = Size;