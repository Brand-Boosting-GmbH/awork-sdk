"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppPriceScript = void 0;

/**
 * Class represents an 3rd party severless function
 * @class
 * @param {Object} data plain object representation of the data
 */
const AppPriceScript = class AppPriceScript {
  constructor(data) {
    this._data = data || {};
  }
  /**
   * unique identifier 
   * @type {String}
   */


  get name() {
    return this._data.name;
  }

  set name(val) {
    this._data.name = val;
  }
  /**
   * Type of the Script
   * @type {('LINE_ITEM'|'ORDER')} 
   */


  get type() {
    return this._data.type;
  }

  set type(val) {
    this._data.type = val;
  }

  get script() {
    return this._data.script;
  }

  set script(val) {
    this._data.script = val;
  }
  /**
   * Method used to convert the Object into a plain Object representation
   * of the data used for storing and transfering
   * @returns {Object} 
   */


  toPlainObject() {
    return {
      name: this.name,
      type: this.type,
      script: this.script
    };
  }

};
exports.AppPriceScript = AppPriceScript;