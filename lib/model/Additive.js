"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Additive = void 0;

var _uuid = require("../util/uuid");

/**
 * Class used for Additive objects stored inside a Catalog
 * and reference by uuid in the Product object
 * @class
 * @param {Object} data plain object representation of the data
 */
const Additive = class Additive {
  constructor(data) {
    this._data = data || {};
    this._data.uuid = this._data.uuid || (0, _uuid.v4)();
  }
  /**
   * unique identifier 
   * @type {String}
   */


  get uuid() {
    return this._data.uuid;
  }
  /**
   * human readable title of the Additive
   * @type {String}
   */


  get title() {
    return this._data.title;
  }

  set title(val) {
    this._data.title = val;
  }
  /**
   * human readable description of the Additive
   * @type {String}
   */


  get description() {
    return this._data.description;
  }

  set description(val) {
    this._data.description = val;
  }
  /**
   * Method used to convert the Object into a plain Object representation
   * of the data used for storing and transfering
   * @returns {Object} 
   */


  toPlainObject() {
    return {
      uuid: this.uuid,
      title: this.title,
      description: this.description
    };
  }

};
exports.Additive = Additive;