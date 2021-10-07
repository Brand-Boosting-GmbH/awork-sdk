"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPrivateTasksSubtasks = void 0;

require("../globalTypedef");

var _SubTask = require("../model/SubTask");

/**
 * Class corresponding to Aworks UserPrivateTasksSubtasks Endpoints
 * @category Endpoints
 * @see [UserPrivateTasksSubtasks in Awork API Docs](https://openapi.awork.io/#/UserPrivateTasksSubtasks)
 */
class UserPrivateTasksSubtasks {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client
  * @param {String} taskId The id of the task.
  * @param {String} subtaskId The id of the subtask.
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
   * Returns a subtask for a private task with the specified id. The user needs to be assigned to the task.
   * @returns {Promise<SubTask>}
   */


  async get(subtaskId) {
    const response = await this._client.get(`${this._userPrefix}/privatetasks/${this._taskId}/subtasks/${subtaskId}`);
    const data = response.data();
    return new _SubTask.SubTask(data);
  }
  /**
   * Returns the subtasks for a private task with the specified id. The user needs to be assigned to the task.
   * @param {import('../global').ListOptions} [options] Pagination and filtering options
   * @returns {Promise<SubTask>}
   */


  async list(options) {
    const response = await this._client.get(`${this._userPrefix}/privatetasks/${this._taskId}/subtasks`, options);
    const data = response.data();
    return data.map(d => new _SubTask.SubTask(d));
  }

}

exports.UserPrivateTasksSubtasks = UserPrivateTasksSubtasks;