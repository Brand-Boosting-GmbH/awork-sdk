"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Upgrade = void 0;

var _Price = require("./Price");

var _uuid = require("../util/uuid");

var _Availability = require("./Availability");

class Upgrade {
  constructor(data) {
    this._data = data || {};
    this._data.price = this._data.price || [];
    this._data.properties = this._data.properties || {};
    this._data.availability = this._data.availability || {};

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

  get type() {
    return this._data.type;
  }

  set type(val) {
    this._data.type = val;
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

  removePrice(uuid) {
    var removeindex = this._data.price.findIndex(x => x.uuid === uuid);

    if (removeIndex != -1) {
      this._data.price.splice(removeindex, 1);
    }
  }

  getPriceByMethod(method) {
    return new _Price.Price(this._data.price.find(x => x.method === method));
  }

  get availability() {
    return new _Availability.Availability(this._data.availability);
  }

  set availability(val) {
    this._data.availability = val;
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      title: this._data.title,
      properties: this._data.properties,
      price: this._data.price,
      availability: this._data.availability
    };
  }

}

exports.Upgrade = Upgrade;