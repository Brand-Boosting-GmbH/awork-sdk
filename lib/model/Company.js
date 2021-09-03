"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Company = void 0;

class Company {
  constructor(data) {
    this._data = data || {};
  }
  /**
   * @type {String}
   */


  get id() {
    return this._data.id;
  }
  /**
   * @type {Boolean}
   */


  get hasImage() {
    return this._data.title;
  }

  toPlainObject() {
    return {
      id: this._data.id,
      hasImage: this._data.hasImage
    };
  }

}

exports.Company = Company;