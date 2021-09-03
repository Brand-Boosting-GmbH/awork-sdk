"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Category = void 0;

var _Availability = require("./Availability");

var _Media = require("./Media");

var _uuid = require("../util/uuid");

class Category {
  constructor(data) {
    this._data = data || {};
    this._data.availability = this._data.availability || {};
    this._data.media = this._data.media || [];
    this._data.products = this._data.products || [];

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

  get availability() {
    return new _Availability.Availability(this._data.availability);
  }

  set availability(val) {
    this._data.availability = val;
  }

  get media() {
    return this._data.media.map(b => new _Media.Media(b));
  }

  set media(val) {
    this._data.media = val;
  }

  addMedia(val) {
    this._data.media.push(new _Media.Media(val).toPlainObject());

    return this._data.media[this._data.media.length - 1];
  }

  removeMedia(uuid) {
    let removeIndex = this._data.media.findIndex(m => m.uuid === uuid);

    if (removeIndex != -1) {
      this._data.media.splice(removeIndex, 1);
    }
  }

  get products() {
    return this._data.products;
  }

  set products(val) {
    this._data.products = val;
  }

  addProduct(uuid) {
    this._data.products.push(uuid);

    return this._data.products[this._data.products.length - 1];
  }

  removeProduct(uuid) {
    var removeIndex = this._data.products.findIndex(element => element === uuid);

    if (removeIndex != -1) {
      this._data.products.splice(removeIndex, 1);
    }
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      title: this._data.title,
      availability: this._data.availability,
      media: this._data.media,
      products: this._data.products
    };
  }

}

exports.Category = Category;