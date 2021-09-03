"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatalogOption = void 0;

var _uuid = require("../util/uuid");

class CatalogOption {
  constructor(data) {
    this._data = data || {};

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

  get minOrderValue() {
    return this._data.minOrderValue;
  }

  set minOrderValue(val) {
    this._data.minOrderValue = val;
  }

  get properties() {
    return this._data.properties;
  }

  set properties(val) {
    this._data.properties = val;
  }

  toPlainObject() {
    return {
      uuid: this._data.uuid,
      title: this._data.title,
      minOrderValue: this._data.minOrderValue,
      properties: this._data.properties
    };
  }

}

exports.CatalogOption = CatalogOption;