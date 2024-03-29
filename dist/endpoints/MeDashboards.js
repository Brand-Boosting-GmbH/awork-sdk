"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeDashboards = void 0;

require("../globalTypedef");

var _Dashboard = require("../model/Dashboard");

/**
 * Class corresponding to Aworks MeDashboards Endpoints
 * @category Endpoints
 * @see [MeDashboards in Awork API Docs](https://openapi.awork.com/#/MeDashboards)
 */
class MeDashboards {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client
  * @param {String} taskId The id of the task.
  * @param {String} subtaskId The id of the subtask.
  */
  constructor(client) {
    /** @private */
    this._client = client;
  }
  /**
   * Returns the dashboards of the current user.
   * @param {import('../global').ListOptions} options Pagination and filtering options
   * @returns {Promise<Array<Dashboard>>}
   */


  async list(options) {
    const response = await this._client.get('/me/dashboards', options);
    const data = response.data();
    return data.map(d => new _Dashboard.Dashboard(d));
  }

}

exports.MeDashboards = MeDashboards;