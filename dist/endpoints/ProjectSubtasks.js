"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectSubtasks = void 0;

require("../globalTypedef");

var _SubTask = require("../model/SubTask");

/**
 * Class corresponding to Aworks ProjectSubtasks Endpoints
 * @category Endpoints
 * @see [ProjectSubtasks in Awork API Docs](https://openapi.awork.com/#/ProjectSubtasks)
 */
class ProjectSubtasks {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client
  * @param {String} taskId The id of the task.
  * @param {String} subtaskId The id of the subtask.
  * @param {String} projectId The id of the project.
  */
  constructor(client, taskId, subtaskId, projectId) {
    /** @private */
    this._client = client;
    /** @private */

    this._taskId = taskId;
    /** @private */

    this._subtaskId = subtaskId;
    /** @private */

    this._projectId = projectId;
  }
  /**
   * Returns a subtask for a project task with the specified id. To retrieve the subtasks of a project task either 'read' permissions on the 'project-planning-data' feature are required or the user needs to be assigned.
   * @returns {Promise<SubTask>}
   */


  async get() {
    const response = await this._client.get(`/projects/${this._projectId}/projecttasks/${this._taskId}/subtasks/${this._subtaskId}`);
    const data = response.data();
    return new _SubTask.SubTask(data);
  }
  /**
   * Returns the subtasks for a project task with the specified id. To retrieve the subtasks of a project task either 'read' permissions on the 'project-planning-data' feature are required or the user needs to be assigned.
   * @param {import('../global').ListOptions} [options] Pagination and filtering options
   * @returns {SubTask}
   */


  async list(options) {
    const response = await this._client.get(`/projects/${this._projectId}/projecttasks/${this._taskId}/subtasks`, options);
    const data = response.data();
    return data.map(d => new _SubTask.SubTask(d));
  }

}

exports.ProjectSubtasks = ProjectSubtasks;