"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Absence = void 0;

/**
 * Absence Model
 * @category Models
 * @class
 */
class Absence {
  /**
   * @typedef {Absence & {_plain?: true}} AbsenceLike
   */

  /**
   * Model constructor
   * @param {AbsenceLike} data 
   */
  constructor(data) {
    /**
    * @private
    */
    this._data = data || {};
  }
  /**
   * The id of the user that created the absence.
   * @type {String} uuid
   */


  get userId() {
    return this._data.userId;
  }
  /**
   * The start time of the absence.
   * @type {String} date-time
   */


  get startOn() {
    return this._data.startOn;
  }
  /**
   * The end time of the absence.
   * @type {String} date-time
   */


  get endOn() {
    return this._data.endOn;
  }
  /**
   * The id of the absence.
   * @type {String} uuid
   */


  get id() {
    return this._data.id;
  }
  /**
   * The date the absence was created.
   * @type {String} date-time
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * The id of the user that created the absence.
   * @type {String} uuid
   */


  get createdBy() {
    return this._data.createdBy;
  }
  /**
   * The date the absence was updated.
   * @type {String} date-time
   */


  get updatedOn() {
    return this._data.updatedOn;
  }
  /**
   * The id of the user that updated the absence.
   * @type {String} uuid
   */


  get updatedBy() {
    return this._data.updatedBy;
  }
  /**
   * The date the absence was deleted.
   * @type {String} date-time
   */


  get deletedOn() {
    return this._data.deletedOn;
  }
  /**
   * The id of the user that deleted the absence.
   * @type {String} uuid
   */


  get deletedBy() {
    return this._data.deletedBy;
  }

  toPlainObject() {
    return {
      userId: this._data.userId,
      startOn: this._data.startOn,
      endOn: this._data.endOn,
      id: this._data.id,
      createdOn: this._data.createdOn,
      createdBy: this._data.createdBy,
      updatedOn: this._data.updatedOn,
      updatedBy: this._data.updatedBy,
      deletedOn: this._data.deletedOn,
      deletedBy: this._data.deletedBy
    };
  }

}

exports.Absence = Absence;