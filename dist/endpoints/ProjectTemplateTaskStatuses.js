"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectTemplateTaskStatuses = void 0;

var _TaskStatus = require("../model/TaskStatus");

require("../globalTypedef");

/**
 * Class corresponding to Aworks ProjectTasks Endpoints
 * @category Endpoints
 * @see [ProjectTasks in Awork API Docs](https://openapi.awork.io/#/ProjectTasks)
 */
class ProjectTemplateTaskStatuses {
  constructor(client, projectTemplateId) {
    this._client = client;
    this._projectTemplateId = projectTemplateId;
  }
  /**
   * Returns the task status of the project template with the specified id.
   * @param {String} taskStatusId The id of the task status.
   * @returns {Promise<TaskStatus>}
   */


  async get(taskStatusId) {
    const response = await this._client.get(`projecttemplates/${this._projectTemplateId}/taskstatuses/${taskStatusId}`);
    const data = response.data();
    return new _TaskStatus.TaskStatus(data);
  }
  /**
   * Returns all task statuses of the project template with the specified id.
   * @param {ListOptions} [options] Pagination and filtering options.
   * @returns {Promise<Array<TaskStatus>>}
   */


  async list(options) {
    const response = await this._client.get(`projecttemplates/${this._projectTemplateId}/taskstatuses`, options);
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
   * Creates a new task status for the specified project template.
   * @param {TaskStatusCreateModel} taskStatus The model to create a task status.
   * @returns {Promise<TaskStatus>}
   */


  async create(taskStatus) {
    const response = await this._client.post(`projecttemplates/${this._projectTemplateId}/taskstatuses`, taskStatus);
    const data = response.data();
    return new _TaskStatus.TaskStatus(data);
  }
  /**
   * @typedef {TaskStatusCreateModel} TaskStatusUpdateModel
   */

  /**
   * Updates a task status for the specified project template.
   * @param {String} taskStatusId The id of the task status.
   * @param {TaskStatusUpdateModel} taskStatus The model to update a task status.
   */


  async update(taskStatusId, taskStatus) {
    const response = await this._client.put(`/projecttemplates/${this._projectTemplateId}/createtaskstatuses/${taskStatusId}`, taskStatus);
    const data = response.data();
    return new _TaskStatus.TaskStatus(data);
  }
  /**
   * Deletes the project task status with the specified id.
   * @param {String} taskStatusId The id of the task status.
   * @returns {Promise<void>}
   */


  async delete(taskStatusId) {
    await this._client.delete(`/projecttemplates/${this._projectTemplateId}/createtaskstatuses/${taskStatusId}`, {
      taskStatusId: taskStatusId
    });
  }

}

exports.ProjectTemplateTaskStatuses = ProjectTemplateTaskStatuses;