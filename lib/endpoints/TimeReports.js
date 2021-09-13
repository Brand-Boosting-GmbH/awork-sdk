"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeReports = void 0;

require("../globalTypedef");

var _TimeReport = require("../model/TimeReport");

/**
 * Class corresponding to Aworks TimeReports Endpoints
 * @category Endpoints
 * @see [TimeReports in Awork API Docs](https://openapi.awork.io/#/TimeReports)
 */
class TimeReports {
  /**
   * ENdpoint constructor
   * @param {import('../client/index').Client} client 
   */
  constructor(client) {
    /**
     * @private
     */
    this._client = client;
  }
  /**
   * Returns time reports of the specified id. Returns time reports of the specified id.
   * @param {String} timeReportId The id of the time report.
   * @returns {Promise<TimeReport>}
   */


  async get(timeReportId) {
    const response = await this._client.get(`/timereports/${timeReportId}`);
    const data = response.data();
    return new _TimeReport.TimeReport(data);
  }
  /**
   * Returns all time reports of a user. Returns time reports the user created as well as the shared time reports of other users.
   * @param {ListOptions} [options] Pagination and filtering options
   * @returns {Promise<Array<TimeReport>>}
   */


  async list(options) {
    const response = await this._client.get('/timereports', options);
    const data = response.data();
    return data.map(d => new _TimeReport.TimeReport(d));
  }
  /**
   * Creates a new time report.
   * @param {TimeReport} timeReport The timereport model.
   * @returns {Promise<TimeReport>}
   */


  async create(timeReport) {
    const response = await this._client.post('/timereports', timeReport);
    const data = response.data();
    return new _TimeReport.TimeReport(data);
  }
  /**
   * Updates the time report of the specified id.
   * @param {String} timeReportId The id of the time report.
   * @param {TimeReport} timeReport The timereport model.
   * @returns {Promise<TimeReport>}
   */


  async update(timeReportId, timeReport) {
    const response = await this._client.put(`/timereports/${timeReportId}`, timeReport);
    const data = response.data();
    return new _TimeReport.TimeReport(data);
  }
  /**
   * Deletes the time report of the specified id.
   * @param {String} timeReportId The id of the time report.
   * @returns {Promise<void>}
   */


  async delete(timeReportId) {
    await this._client.delete(`/timereports/${timeReportId}`);
  }

}

exports.TimeReports = TimeReports;