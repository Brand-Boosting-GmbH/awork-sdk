"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppLambda = void 0;

/**
 * Class represents an 3rd party severless function
 * @class
 * @param {Object} data plain object representation of the data
 */
const AppLambda = class AppLambda {
  constructor(data) {
    this._data = data || {};
    this._data.iam = this._data.iam || [];
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
   * Type of the Lambda
   * @type {('call')} 
   */


  get type() {
    return this._data.type;
  }

  set type(val) {
    this._data.type = val;
  }

  get filename() {
    return this._data.filename;
  }

  set filename(val) {
    this._data.filename = val;
  }

  get iam() {
    return this._data.iam;
  }

  set iam(val) {
    this._data.iam = val;
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
      iam: this.iam,
      filename: this.filename
    };
  }

};
exports.AppLambda = AppLambda;