"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskBundleTaskTemplates = void 0;

require("../globalTypedef");

var _TaskTemplate = require("../model/TaskTemplate");

/**
 * Class corresponding to Aworks tasktemplates related part of the TaskBundles Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.com/#/TaskBundles)
 */
class TaskBundleTaskTemplates {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   * @param {String} taskBundleId The id of the task bundle.
   */
  constructor(client, taskBundleId) {
    /**@private */
    this._client = client;
    /**@private */

    this._taskBundleId = taskBundleId;
  }
  /**
   * Returns the task template of the task bundle with the specified id.
   * @param {String} taskTemplateId The id of the task template.
   * @returns {Promise<TaskTemplate>}
   */


  async get(taskTemplateId) {
    const response = await this._client.get(`/taskbundles/${this._taskBundleId}/tasktemplates/${taskTemplateId}`);
    const data = response.data();
    return new _TaskTemplate.TaskTemplate(data);
  }
  /**
   * Returns all task templates of the task bundle with the specified id.
   * @param {import('../global').ListOptions} [options] Pagination and filtering options.
   * @returns {Promise<Array<TaskListTemplate>>}
   */


  async list(options) {
    const response = await this._client.get(`/taskbundles/${this._taskBundleId}/tasktemplates`, options);
    const data = response.data();
    return data.map(d => new _TaskTemplate.TaskTemplate(d));
  }
  /**
   * @typedef {Object} TaskTemplateCreateModel
   * @property {String} name The name of the task created from this template.
   * @property {String} description The description of the task created from this template.#
   * @property {Boolean} isPrio Whether the task created from this template will be marked as priority.
   * @property {Number} plannedDuration The expected planned workload of the task created from this template, in seconds.
   * @property {Number} relativeStartOn The relative start date and time of the task created from this template, in seconds, from the moment of creating the task.
   * @property {Number} relaticeDueOn The relative due date and time of the task created from this template, in seconds, from the moment of creating the task.
   * @property {String} typeOfWorkId The id of the type of work of this task.
   * @property {String} assignedUserId The id of the assigned user of this task.
   * @property {String} assignedRoleId The id of the assigned role of this task.
   */

  /**
   * Creates a new task template for the task bundle with the specified id.
   * @param {TaskTemplateCreateModel} taskTemplate The model used to create a new task template.
   * @returns {Promise<TaskTemplate>}
   */


  async create(taskTemplate) {
    const response = await this._client.post(`/taskbundles/${this._taskBundleId}/tasktemplates`, taskTemplate);
    const data = response.data();
    return new _TaskTemplate.TaskTemplate(data);
  }
  /**
   * @typedef {TaskTemplateCreateModel} TaskTemplateUpdateModel
   */

  /**
   * Updates the task template for the task bundle with the specified id.
   * @param {String} taskTemplateId The if of the task template.
   * @param {TaskTemplateUpdateModel} taskTemplate The model to update a task template.
   * @returns {Promise<TaskTemplate>}
   */


  async update(taskTemplateId, taskTemplate) {
    const response = await this._client.put(`/taskbundles/${this._taskBundleId}/tasktemplates/${taskTemplateId}`, taskTemplate);
    const data = response.data();
    return new _TaskTemplate.TaskTemplate(data);
  }
  /**
   * Deletes the task template for the task bundle with the specified id.
   * @param {String} taskTemplateId The id of the task template.
   * @returns {Promise<void>}
   */


  async delete(taskTemplateId) {
    await this._client.delete(`/taskbundles/${this._taskBundleId}/tasktemplates/${taskTemplateId}`);
  }

}

exports.TaskBundleTaskTemplates = TaskBundleTaskTemplates;