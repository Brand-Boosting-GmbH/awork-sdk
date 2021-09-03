"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetafieldDefinition = void 0;

var _uuid = require("../util/uuid");

class MetafieldDefinition {
  constructor(data) {
    this._data = data || {};
  }
  /**
   * unique identifier, copied from the key of the metafield
   */


  get uuid() {
    return this._data.key;
  }
  /**
   * human readable string
   * @type {String}
   */


  get name() {
    return this._data.name;
  }

  set name(val) {
    this._data.name = val;
  }
  /**
   * identifier of the metafield 
   * @type {String}
   */


  get key() {
    return this._data.key;
  }

  set key(val) {
    this._data.key = val;
  }
  /**
   * human readable string
   * @type {String}
   */


  get description() {
    return this._data.description;
  }

  set description(val) {
    this._data.description = val;
  }
  /**
   * the actual type of object the metafield is used for
   * only 'PRODUCT' yet
   * @type {'PRODUCT'}
   */


  get type() {
    return this._data.type;
  }

  set type(val) {
    this._data.type = val;
  }
  /**
   * the type value for defining a metafield type
   * @type {('TEXT') | ('URL') | ('MEDIA') | ('COLOR') | ('MEASUREMENT') | ('BOOLEAN') | ('NUMBER') | ('TIMESTAMP')}
   */


  get fieldType() {
    return this._data.fieldType;
  }

  set fieldType(val) {
    this._data.fieldType = val;
  }
  /**
   * defines if the value of the metafield is a single value or an array of values
   * @type {('SINGLE') | ('LIST')}
   */


  get quantity() {
    return this._data.quantity;
  }

  set quantity(val) {
    this._data.quantity = val;
  } // Metafield type - 'TEXT'

  /**
   * type of the 'TEXT' metafield
   * @type {('single-line' | 'multi-line')}
   */


  get textType() {
    return this._data.textType;
  }

  set textType(val) {
    this._data.textType = val;
  }
  /**
   * extra input field for additional rules to allow regular expressions
   * @type {String}
   */


  get regexp() {
    return this._data.regexp;
  }

  set regexp(val) {
    this._data.regexp = val;
  }
  /**
   * defines additional rules to the metafield 
   * minimum length of characters the TextValue input is allowed to have
   * @type {Number}
   */


  get minLength() {
    return this._data.minLength;
  }

  set minLength(val) {
    this._data.minLength = val;
  }
  /** 
   * defines additional rules to the metafield 
   * maximum length of characters the TextValue onput is allowed to have
   * @type {Number}
   */


  get maxLength() {
    return this._data.maxLength;
  }

  set maxLength(val) {
    this._data.maxLength = val;
  } // Metafield type - 'URL'

  /**
   * defines additional rules to the metafield 
   * for adding restricted URLs to limit domain-usage
   * @type {String}
   */


  get restrictedUrl() {
    return this._data.restrictedUrl;
  }

  set restrictedUrl(val) {
    this._data.restrictedUrl = val;
  } // Metafield type - 'MEDIA'
  // Metafield type - 'COLOR'
  // Metafield type - 'Measurement'

  /**
   * type of the 'MEASUREMENT' metafield
   * @type {('weight' | 'volume' | 'dimension')}
   */


  get measurementType() {
    return this._data.measurementType;
  }

  set measurementType(val) {
    this._data.measurementType = val;
  }
  /**
   * unit type of the selected MeasurementType
   * @type {String}
   */


  get measurementUnit() {
    return this._data.measurementUnit;
  }

  set measurementUnit(val) {
    this._data.measurementUnit = val;
  }
  /**
   * defines additional rules to the metafield 
   * minimum length of characters the MeasurementValue input is allowed to have
   * @type {Number}
   */


  get minMeasurement() {
    return this._data.minMeasurement;
  }

  set minMeasurement(val) {
    this._data.minMeasurement = val;
  }
  /**
   * defines additional rules to the metafield 
   * maximum length of characters the MeasurementValue input is allowed to have
   * @type {Number}
   */


  get maxMeasurement() {
    return this._data.maxMeasurement;
  }

  set maxMeasurement(val) {
    this._data.maxMeasurement = val;
  } // Metafield type - 'Boolean'
  // Metafield type - 'Number'

  /**
   * type of the 'NUMBER' metafield
   * @type {('INTEGER') | ('DECIMAL')}
   */


  get numberType() {
    return this._data.numberType;
  }

  set numberType(val) {
    this._data.numberType = val;
  }
  /**
   * defines additional rules to the metafield 
   * minimum length of characters the NumberValue input is allowed to have
   * @type {Number}
   */


  get minNumber() {
    return this._data.minNumber;
  }

  set minNumber(val) {
    this._data.minNumber = val;
  }
  /**
   * defines additional rules to the metafield 
   * maximum length of characters the NumberValue input is allowed to have
   * @type {Number}
   */


  get maxNumber() {
    return this._data.maxNumber;
  }

  set maxNumber(val) {
    this._data.maxNumber = val;
  } // Metafield type - 'TIMESTAMP'

  /**
   * type of the 'TIMESTAMP' metafield
   * @type {('DATE' | 'DATETIME')}
   */


  get timestampType() {
    return this._data.timestampType;
  }

  set timestampType(val) {
    this._data.timestampType = val;
  }
  /**
   * defines additional rules to the metafield 
   * minimum length of characters the TimestampValue input is allowed to have
   * @type {Date}
   */


  get minTimestamp() {
    return this._data.minTimestamp;
  }

  set minTimestamp(val) {
    this._data.minTimestamp = val;
  }
  /**
   * defines additional rules to the metafield 
   * maximum length of characters the TimestampValue input is allowed to have
   * @type {Date}
   */


  get maxTimestamp() {
    return this._data.maxTimestamp;
  }

  set maxTimestamp(val) {
    this._data.maxTimestamp = val;
  }
  /**
   * Method used to convert the Object into a plain Object representation
   * of the data used for storing and transfering
   * @returns {Object} 
   */


  toPlainObject() {
    return {
      uuid: this._data.uuid,
      name: this._data.name,
      key: this._data.key,
      description: this._data.description,
      type: this._data.type,
      fieldType: this._data.fieldType,
      quantity: this._data.quantity,
      textType: this._data.textType,
      regexp: this._data.regexp,
      minLength: this._data.minLength,
      maxLength: this._data.maxLength,
      restrictedUrl: this._data.restrictedUrl,
      measurementType: this._data.measurementType,
      measurementUnit: this._data.measurementUnit,
      minMeasurement: this._data.minMeasurement,
      maxMeasurement: this._data.maxMeasurement,
      numberType: this._data.numberType,
      minNumber: this._data.minNumber,
      maxNumber: this._data.maxNumber,
      timestampType: this._data.timestampType,
      minTimestamp: this._data.minTimestamp,
      maxTimestamp: this._data.maxTimestamp
    };
  }

}

exports.MetafieldDefinition = MetafieldDefinition;