"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersPrivateTasks = void 0;

require("../globalTypedef");

var _PrivateTasksTaskStatus = require("../model/PrivateTasksTaskStatus");

var _Task = require("../model/Task");

/**
 * Class corresponding to Aworks UsersPrivateTasks Endpoints
 * @category Endpoints
 * @see [UsersPrivateTasks in Awork API Docs](https://openapi.awork.io/#/UsersPrivateTasks)
 */
class UsersPrivateTasks {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client
  * @param {String} taskId The id of the task.
  * @param {String} userId The id of the user.
  */
  constructor(client, taskId, userId) {
    /** @private */
    this._client = client;
    /** @private */

    this._userId = userId;
    /** @private */

    this._taskId = taskId;
    /** @private */

    this._userPrefix = `/users/${this._userId}`;
  }
  /**
   * Returns the private task with the specified id.
   * @returns {Promise<Task>}
   */


  async get() {
    const response = await this._client.get(`${this._userPrefix}/privatetasks/${this._taskId}`);
    const data = response.data();
    return new _Task.Task(data);
  }
  /**
   * Returns all private tasks of the user with the specified id.
   * @param {ListOptions} [options] Pagination and filtering options
   * @returns {Promise<Array<Task>>}
   */


  async list(options) {
    const response = await this._client.get(`${this._userPrefix}/privatetasks`, options);
    const data = response.data();
    return data.map(d => new _Task.Task(d));
  }
  /**
   * Returns the task statuses for private tasks.
   * @param {ListOptions} [options] Pagination and filtering options
   * @returns {Promise<Array<PrivateTasksTaskStatus>>}
   */


  async taskStatuses(options) {
    const response = await this._client.get(`${this._userPrefix}/privatetasks/taskstatuses`, options);
    return response.map(d => new _PrivateTasksTaskStatus.PrivateTasksTaskStatus(d));
  }

}

exports.UsersPrivateTasks = UsersPrivateTasks;