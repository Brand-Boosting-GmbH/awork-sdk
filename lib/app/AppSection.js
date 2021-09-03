"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppSection = void 0;

/**
 * Class represents an 3rd party app section
 * @class
 * @param {Object} data plain object representation of the data
 */
const AppSection = class AppSection {
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
   * Position of the Section
   * @type {String} TODO: Create List of all Positions
   */


  get position() {
    return this._data.position;
  }

  set position(val) {
    this._data.position = val;
  }

  get filename() {
    return this._data.filename;
  }

  set filename(val) {
    this._data.filename = val;
  }
  /**
   * Method used to convert the Object into a plain Object representation
   * of the data used for storing and transfering
   * @returns {Object} 
   */


  toPlainObject() {
    return {
      name: this.name,
      position: this.position,
      filename: this.filename
    };
  }

};
exports.AppSection = AppSection;