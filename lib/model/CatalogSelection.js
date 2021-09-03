"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogSelection = void 0;

var _CatalogOption = require("./CatalogOption");

class CatalogSelection {
  constructor(data) {
    this._data = data || {};
    this._data.options = this._data.options || [];
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

  get options() {
    return this._data.options.map(p => new _CatalogOption.CatalogOption(p));
  }

  set options(val) {
    this._data.options = val;
  }

  addCatalogOption(val) {
    this._data.options.push(new _CatalogOption.CatalogOption(val).toPlainObject());

    return this._data.options[this._data.options.length - 1];
  }

  removeCatalogOption(uuid) {
    var removeindex = this._data.options.findIndex(x => x.uuid === uuid);

    if (removeIndex != -1) {
      this._data.options.splice(removeindex, 1);
    }
  }

  getCatalogOptionByUuid(uuid) {
    return this._data.options.find(x => x.uuid === uuid);
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      title: this._data.title,
      options: this._data.options
    };
  }

}

exports.CatalogSelection = CatalogSelection;