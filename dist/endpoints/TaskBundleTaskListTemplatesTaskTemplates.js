"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskBundleTaskListTemplatesTaskTemplates = void 0;

var _TaskTemplate = require("../model/TaskTemplate");

require("../globalTypedef");

/**
 * Class corresponding to Aworks tasktemplates related part of the TaskBundles - TaskListTemplate Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.io/#/TaskBundles)
 */
class TaskBundleTaskListTemplatesTaskTemplates {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client 
  * @param {String} taskBundleId The id of the task bundle.
  * @param {String} taskListTemplateId The id of the task list template.
  */
  constructor(client, taskBundleId, taskListTemplateId) {
    /**@private */
    this._client = client;
    /**@private */

    this._taskBundleId = taskBundleId;
    /**@private */

    this._taskListTemplateId = taskListTemplateId;
  }
  /**
   * Returns the task template with the specified id in the specified task list template.
   * @param {String} taskTemplateId The id of the task.
   * @returns {Promise<TaskTemplate>}
   */


  async get(taskTemplateId) {
    const response = await this._client.get(`/taskbundles/${this._taskBundleId}/tasklisttemplates/${this._taskListTemplateId}/tasktemplates/${taskTemplateId}`);
    const data = response.data();
    return new _TaskTemplate.TaskTemplate(data);
  }
  /**
   * Returns the task templates in the specified task list template.
   * @param {ListOptions} options Pagination and filtering options.
   * @returns {Promise<Array<TaskTemplate>>}
   */


  async list(options) {
    const response = await this._client.get(`/taskbundles/${this._taskBundleId}/tasklisttemplates/${this._taskListTemplateId}/tasktemplates`, options);
    const data = response.data();
    return data.map(d => new _TaskTemplate.TaskTemplate(d));
  }
  /**
   * To update the order of tasks in a project task list, the user needs manage permissions on the project-planning-data feature.
   * @param {String} taskTemplateId The id of the task.
   * @param {Number} order The order of the task in the list.
   * @returns {Promise<void>}
   */


  async updateOrder(taskTemplateId, order) {
    await this._client.get(`/taskbundles/${this._taskBundleId}/tasklisttemplates/${this._taskListTemplateId}/tasktemplates/${taskTemplateId}/updateorder`, {
      order: order
    });
  }
  /**
   * @typedef {Object} TaskTemplatesToAdd
   * @property {String} taskTemplateId The id of the task template.
   * @property {Number} order The order of the task template, unique within the task list template.
   */

  /**
   * Adds the task templates to the task list template with the specified id.
   * @param {TaskTemplatesToAdd} taskTemplatesToAdd The ids of the task templates to add to the list.
   * @returns {Promise<Array<Object>>}
   */


  async addTaskTemplates(taskTemplatesToAdd) {
    const response = await this._client.post(`/taskbundles/${this._taskBundleId}/tasklisttemplates/${this._taskListTemplateId}/addtasktemplates`, taskTemplatesToAdd);
    return response.data();
  }
  /**
   * Removes the task templates from the task list template with the specified id.
   * @param {Array<String>} taskTemplatesToRemove The ids of the tasks to remove from the list.
   * @returns {Promise<void>}
   */


  async removeTaskTemplates(taskTemplatesToRemove) {
    await this._client.post(`/taskbundles/${this._taskBundleId}/tasklisttemplates/${this._taskListTemplateId}/addtasktemplates`, taskTemplatesToRemove);
  }

}

exports.TaskBundleTaskListTemplatesTaskTemplates = TaskBundleTaskListTemplatesTaskTemplates;