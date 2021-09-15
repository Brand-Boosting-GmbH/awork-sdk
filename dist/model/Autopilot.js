"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Autopilot = void 0;

/**
 * Autopilot Model
 * @category Models
 * @class
 */
class Autopilot {
  /**
   * @typedef {Autopilot & {_plain?: true}} AutopilotLike
   */

  /**
   * Model constructor
   * @param {AutopilotLike} data 
   */
  constructor(data) {
    /** @private */
    this._data = data || {};
  }
  /**
   * The id of the autopilot.
   * @type {String} uuid
   */


  get id() {
    return this._data.id;
  }
  /**
   * The type of the autopilot.
   * @type {String}
   */


  get type() {
    return this._data.type;
  }
  /**
   * Whether the autopilot is enabled.
   * @type {Boolean}
   */


  get enabled() {
    return this._data.enabled;
  }
  /**
   * @typedef {Object} AlertObject
   * @property {String} id The id of the alert.
   * @property {String} alert The alert indicartor.
   * @property {Boolean} enabled Whether the alert is enabled.
   * @property {String} channel The channel of the alert.
   */

  /**
   * The alerts of the autopilot.
   * @type {Array<AlertObject>}
   */


  get alerts() {
    return this._data.alerts;
  }
  /**
   * The date this object was created.
   * @type {String} date-time
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * The id of the user who created this object.
   * @type {String} uuid
   */


  get createdBy() {
    return this._data.createdBy;
  }
  /**
   * The date this object was last modified.
   * @type {String} date-time
   */


  get updatedOn() {
    return this._data.updatedOn;
  }
  /**
   * The id of the user who last modified this object.
   * @type {String} uuid
   */


  get updatedBy() {
    return this._data.updatedBy;
  }

  toPlainObject() {
    return {
      id: this._data.id,
      type: this._data.type,
      enabled: this._data.enabled,
      alerts: this._data.alerts,
      createdOn: this._data.createdOn,
      createdBy: this._data.createdBy,
      updatedOn: this._data.updatedOn,
      updatedBy: this._data.updatedBy
    };
  }

}

exports.Autopilot = Autopilot;