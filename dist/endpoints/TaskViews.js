"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskViews = void 0;

require("../globalTypedef");

var _TaskView = require("../model/TaskView");

/**
 * Class corresponding to Aworks TaskViews Endpoints
 * @category Endpoints
 * @see [TaskViews in Awork API Docs](https://openapi.awork.io/#/TaskViews)
 */
class TaskViews {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   */
  constructor(client) {
    /** @private */
    this._client = client;
    /** @private */

    this._userPrefix = ``;
  }
  /**
   * Returns one task view that is specified by the id. Task views that are not shared are not considered.
   * @param {String} The id of the task view.
   * @returns {Promise<TaskView>}
   */


  async get(taskViewId) {
    const response = await this._client.get(`${this._userPrefix}/taskviews/${taskViewId}`);
    const data = response.data();
    return new _TaskView.TaskView(data);
  }
  /**
   * Returns all task views. Task views that are not shared are not considered.
   * @param {ListOptions} [options] Pagination and filtering options
   * @returns {Promise<Array<TaskView>>}
   */


  async list(options) {
    const response = await this._client.get(`${this._userPrefix}/taskviews`, options);
    const data = response.data();
    return data.map(d => new _TaskView.TaskView(d));
  }

}

exports.TaskViews = TaskViews;