"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Properties = void 0;

class Properties {
  constructor(data) {
    this._data = data;
  }

  get vegan() {
    return this._data.vegan;
  }

  set vegan(val) {
    this._data.vegan = val;
  }

  get vegetarian() {
    return this._data.vegetarian;
  }

  set vegetarian(val) {
    this._data.vegetarian = val;
  }

  toPlainObject() {
    return {
      vegan: this._data.vegan,
      vegetarian: this._data.vegetarian
    };
  }

}

exports.Properties = Properties;