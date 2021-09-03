"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppSetting = void 0;

/**
 * Class represents an 3rd party severless function
 * @class
 * @param {Object} data plain object representation of the data
 */
const AppSetting = class AppSetting {
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
   * Type of the Setting TODO: Add more
   * @type {('boolean'|'String')} 
   */


  get type() {
    return this._data.type;
  }

  set type(val) {
    this._data.type = val;
  }

  get label() {
    return this._data.label;
  }

  set label(val) {
    this._data.label = val;
  }

  get preset() {
    return this._data.preset;
  }

  set preset(val) {
    this._data.preset = val;
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
      preset: this.preset,
      label: this.label
    };
  }

};
exports.AppSetting = AppSetting;