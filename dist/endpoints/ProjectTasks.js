"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectTasks = void 0;

var _Task = require("../model/Task");

require("../globalTypedef");

var _ProjectTaskStatuses = require("./ProjectTaskStatuses");

class ProjectTasks {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client
  * @param {String} projectId The id of the project.
  */
  constructor(client, projectId) {
    /**@private */
    this._client = client;
    /**@private */

    this._projectId = projectId;
    /** @private */

    this._projectsPrefix = `/projects/${this._projectId}`;
  }
  /**
   * Returns the project task with the specified id. To get the task with the specified id 'read' permissions on the feature project-planning-data are necessary. But the assignee has also the permissions to get the task.
   * @param {String} taskId The id of the task.
   * @returns {Promise<Task>}
   */


  async get(taskId) {
    const response = await this._client.get(`/projects/${this._projectId}/projecttasks/${taskId}`);
    const data = response.data();
    return new _Task.Task(data);
  }
  /**
   * Returns all project tasks of the project with the specified id. To get the task with the specified id 'read' permissions on the feature project-planning-data are necessary. Otherwise returns only assigned tasks.
   * @param {ListOptions} [options] Pagination and filtering options.
   * @returns {Promise<Array<Task>>}
   */


  async list(options) {
    const response = await this._client.get(`${this._projectsPrefix}/projecttasks`, options);
    const data = response.data();
    return data.map(d => new _Task.Task(d));
  }
  /**
   * Returns all tags of the project tasks.
   * @returns {Promise<Array<String>>}
   */


  async tagList() {
    const response = await this._client.get(`/projects/projecttasks/tags`);
    return response.data();
  }

  taskStatuses() {
    return new _ProjectTaskStatuses.ProjectTaskStatuses(this._client, this._projectId);
  }
  /**
   * @typedef {Object} ChangeProjectModel
   * @property {String} projectId The id of the project the task is assigned to.
   * @property {String} taskStatusId The id of the new status the task is assigned to.
   */

  /**
   * Changes the project of the task with the specified id. It change also the tracked time sum of the new project and the previous project. The related time trackings of this task will also be moved into the new project.
   * @param {String} taskId The id of the task. 
   * @param {ChangeProjectModel} change The model to change the project.
   * @return {Promise<void>}
   */


  async changeProject(taskId, change) {
    const response = await this._client.post(`projects/${this.projectId}/projecttasks/${taskId}/changeproject`, change);
    return response.data();
  }

}

exports.ProjectTasks = ProjectTasks;