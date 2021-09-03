"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Discount = void 0;

var _uuid = require("../util/uuid");

class Discount {
  constructor(data) {
    this._data = data || {};
    this._data.specification = this._data.specification || {};
    this._data.timeFrame = this._data.timeFrame || {};

    if (!this._data.uuid) {
      this._data.uuid = (0, _uuid.v4)();
    }
  }
  /**
   * unique identifier of the Discount object
   * @type {String}
   */


  get uuid() {
    return this._data.uuid;
  }
  /**
   * defines the code to access this discount for customers
   * @type {String}
   */


  get code() {
    return this._data.code;
  }

  set code(val) {
    this._data.code = val;
  }
  /**
   * defines if the Discount is calculated as flat amount or with a percentage
   * @type {('AMOUNT' | 'PERCANTAGE')}
   */


  get type() {
    return this._data.type;
  }

  set type(val) {
    this._data.type = val;
  }
  /**
   * defines the value for the Discount depending on the type
   * @type {Number}
   */


  get value() {
    return parseInt(this._data.value);
  }

  set value(val) {
    this._data.value = val;
  }
  /**
   * defines the timeFrame for the eventperiod of the Discount
   * @type {Object}
   */


  get timeFrame() {
    return this._data.timeFrame;
  }

  set timeFrame(val) {
    this._data.timeFrame = val;
  }
  /**
   * defines the first value of the timeframe 
   * which determines the starting date of the Discount
   * @type {Date}
   */


  get timeFrameFrom() {
    return this._data.timeFrame.from;
  }

  set timeFrameFrom(val) {
    this._data.timeFrame.from = val;
  }
  /**
   * defines the second value of the timeframe 
   * which determines the ending date of the Discount
   * @type {Date}
   */


  get timeFrameTo() {
    return this._data.timeFrame.to;
  }

  set timeFrameTo(val) {
    this._data.timeFrame.to = val;
  }
  /**
   * defines an object with the keys for defining the effectivenes area
   * @type {Object}
   */


  get specification() {
    return this._data.specification;
  }

  set specification(val) {
    this._data.specification = val;
  }
  /**
   * defines the effectivenes area of the Discount for a specific Product/Category
   * @type {('GENERAL' | 'PRODUCT' | 'CATEGORY')}
   */


  get specificationType() {
    return this._data.specification.type;
  }

  set specificationType(val) {
    this._data.specification.type = val;
  }
  /**
   * defines the reference to the uuid for the SpecificationType 'PRODUCT' or 'CATEGORY'
   * @type {String}
   */


  get specificationId() {
    return this._data.specification.id;
  }

  set specificationId(val) {
    this._data.specification.id = val;
  }
  /**
   * defines the minimum price that is required to use this discount
   * 
   * @type {Number}
   */


  get minValue() {
    return this._data.minValue;
  }

  set minValue(val) {
    this._data.minValue = val;
  }
  /**
   * timestamp for the commit of the object
   * @type {Date}
   */


  get createdAt() {
    return this._data.createdAt;
  }

  set createdAt(val) {
    this._data.createdAt = val;
  }
  /**
   * Method used to convert the Object into a plain Object representation
   * of the data used for storing and transfering
   * @returns {Object} 
   */


  toPlainObject() {
    return {
      uuid: this._data.uuid,
      code: this._data.code,
      type: this._data.type,
      value: this._data.value,
      timeFrame: {
        from: this._data.timeFrame.from,
        to: this._data.timeFrame.to
      },
      specification: {
        type: this._data.specification.type,
        id: this._data.specification.id
      },
      minValue: this._data.minValue,
      createdAt: this._data.createdAt
    };
  }

}

exports.Discount = Discount;