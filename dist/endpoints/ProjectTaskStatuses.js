"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectTaskStatuses = void 0;

var _TaskStatus = require("../model/TaskStatus");

require("../globalTypedef");

/**
 * Class corresponding to Aworks ProjectTasks Endpoints
 * @category Endpoints
 * @see [ProjectTasks in Awork API Docs](https://openapi.awork.io/#/ProjectTasks)
 */
class ProjectTaskStatuses {
  constructor(client, projectId) {
    this._client = client;
    this._projectId = projectId;
  }
  /**
   * Returns the task status of the project with the specified id. To get the task status, the user need at least read permissions on feature Project-Master-Data.
   * @param {String} taskStatusId The id of the task status.
   * @returns {Promise<TaskStatus>}
   */


  async get(taskStatusId) {
    const response = await this._client.get(`projects/${this._projectId}/taskstatuses/${taskStatusId}`);
    const data = response.data();
    return new _TaskStatus.TaskStatus(data);
  }
  /**
   * Returns all task statuses of the project with the specified id. To get the task statuses, the user need at least read permissions on feature Project-Master-Data.
   * @param {import('../global').ListOptions} [options] Pagination and filtering options.
   * @returns {Promise<Array<TaskStatus>>}
   */


  async list(options) {
    const response = await this._client.get(`projects/${this._projectId}/taskstatuses`, options);
    const data = response.data();
    return data.map(d => new _TaskStatus.TaskStatus(d));
  }
  /**
   * @typedef {Object} TaskStatusCreateModel
   * @property {String} name The name of the task status.
   * @property {('todo'|'progress'|'review'|'stuck'|'done')} type Specifies the general type of this task status.
   * @property {Number} [order] The order of the task status. If it is null, the task status will be appended after the last task status.
   * @property {Icon} [icon] The icon of the task status.
   * 
   */

  /**
   * Creates a new task status for the specified project. To create the task status, the user need write permissions on feature Project-Planning.
   * @param {TaskStatusCreateModel} taskStatus The model to create a task status.
   * @returns {Promise<TaskStatus>}
   */


  async create(taskStatus) {
    const response = await this._client.post(`projects/${this._projectId}/taskstatuses`, taskStatus);
    const data = response.data();
    return new _TaskStatus.TaskStatus(data);
  }
  /**
   * Creates new task statuses from the project template for the the specified project.
   * @param {String} projectTemplateId The id of the project template.
   * @returns {Promise<void>}
   */


  async createFromTemplate(projectTemplateId) {
    const response = await this._client.post(`/projects/${this._projectId}/createtaskstatuses`, {
      projectTemplateId: projectTemplateId
    });
    return response.data();
  }
  /**
   * @typedef {TaskStatusCreateModel} TaskStatusUpdateModel
   */

  /**
   * Updates a task status for the specified project. To update the task status, the user need write permissions on feature Project-Master-Data.
   * @param {String} taskStatusId The id of the task status.
   * @param {TaskStatusUpdateModel} taskStatus The model to update a task status.
   */


  async update(taskStatusId, taskStatus) {
    const response = await this._client.put(`/projects/${this._projectId}/createtaskstatuses/${taskStatusId}`, taskStatus);
    const data = response.data();
    return new _TaskStatus.TaskStatus(data);
  }
  /**
   * Deletes the project's task status with the specified id. To delete the task status, the user need write permissions on feature Project-Master-Data. If the status still has related tasks, it's necessary to provide another task status to move the tasks to.
   * @param {String} taskStatusId The id of the task status.
   * @returns {Promise<void>}
   */


  async delete(taskStatusId) {
    await this._client.post(`/projects/${this._projectId}/createtaskstatuses/${taskStatusId}`, {
      taskStatusId: taskStatusId
    });
  }

}

exports.ProjectTaskStatuses = ProjectTaskStatuses;