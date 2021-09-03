"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductSelection = void 0;

var _ProductOption = require("./ProductOption");

var _uuid = require("../util/uuid");

class ProductSelection {
  constructor(data) {
    this._data = data || {};
    this._data.options = this._data.options || [];

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

  get options() {
    return (this._data.options || []).map(p => new _ProductOption.ProductOption(p));
  }

  set options(val) {
    this._data.options = val;
  }

  addProductOptions(val) {
    this._data.options.push(new _ProductOption.ProductOption(val).toPlainObject());

    return this._data.options[this._data.options.length - 1];
  }

  removeProductOptions(uuid) {
    var removeindex = this._data.options.findIndex(x => x.uuid === uuid);

    if (removeindex != -1) {
      this._data.options.splice(removeindex, 1);
    }
  }

  getOptionByUuid(uuid) {
    return this.options.find(o => o.uuid === uuid);
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      title: this._data.title,
      options: this._data.options
    };
  }

}

exports.ProductSelection = ProductSelection;