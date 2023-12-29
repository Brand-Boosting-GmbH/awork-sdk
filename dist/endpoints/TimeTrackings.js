"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeTrackings = void 0;

require("../globalTypedef");

var _TimeEntry = require("../model/TimeEntry");

/**
 * Class corresponding to Aworks TimeTrackings Endpoints
 * @category Endpoints
 * @see [TimeTrackings in Awork API Docs](https://openapi.awork.com/#/TimeTrackings)
 */
class TimeTrackings {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   * @param {String} userId The id of the user.
   */
  constructor(client, userId) {
    /** @private */
    this._client = client;
    /** @private */

    this._userId = userId;
    /** @private */

    this._userPrefix = `/users/${this.userId}`;
  }
  /**
   * @typedef {Object} LocationObject
   * @property {Number} longitude The logitude value of the geo-location.
   * @property {Number} latitude The latitude value of the geo-location.
   */

  /**
   * @typedef {Object} TimeTrackingStartModel
   * @property {Boolean} [isBillable] Whether the time tracking is billable or not.
   * @property {Boolean} [isBilled] Whether the time tracking is billed or not.
   * @property {String} [taskId] The id of the task.
   * @property {String} [projectId] The id of the project.
   * @property {String} [note] The note of the time tracking.
   * @property {LocationObject} [location] The latitude and longitude of the geo-location.
   * @property {String} typeOfWorkId The id of the type of work of the time tracking.
   * @property {String} timezone The original timezone of the time tracking. The format of the timezone is the IANA standard.
   */

  /**
   * If there is already a running time tracking it will be stopped automatically in order to start the new one.
   * @param {TimeTrackingStartModel} timeTrackingStartModel The model to start a time tracking.
   * @returns {Promise<TimeEntry>}
   */


  async start(timeTrackingStartModel) {
    const response = await this._client.post(`${this._userPrefix}/timetracking/stop`, timeTrackingStartModel);
    const data = response.data();
    return new _TimeEntry.TimeEntry(data);
  }
  /**
   * There is no request body necessary for this operation. For this operation to work there must be a running time tracking for the user.
   * @returns {Promise<TimeEntry>}
   */


  async stop() {
    const response = await this._client.post(`${this._userPrefix}/timetracking/stop`);
    const data = response.data();
    return new _TimeEntry.TimeEntry(data);
  }

}

exports.TimeTrackings = TimeTrackings;