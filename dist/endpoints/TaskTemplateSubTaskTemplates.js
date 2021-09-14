"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskTemplateSubTaskTemplates = void 0;

var _SubTaskTemplate = require("../model/SubTaskTemplate");

require("../globalTypedef");

/**
 * Class corresponding to Aworks subtasktemplates related part of the TaskBundles Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.io/#/TaskBundles)
 */
class TaskTemplateSubTaskTemplates {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   * @param {String} taskTemplateId The id of the task template.
   */
  constructor(client, taskTemplateId) {
    /**@private */
    this._client = client;
    /**@private */

    this._taskTemplateId = taskTemplateId;
  }
  /**
   * To access the task template, 'read' permissions on the 'project-planning-data' feature or on the 'project-manage-config' feature are required.
   * @param {String} subTaskTemplateId The id of the subtask template id.
   * @returns {Promise<SubTaskTemplate>}
   */


  async get(subTaskTemplateId) {
    const response = await this._client.get(`tasktemplates/${this._taskTemplateId}/subtasktemplates/${subTaskTemplateId}`);
    const data = response.data();
    return new _SubTaskTemplate.SubTaskTemplate(data);
  }
  /**
   * To access the task template, 'read' permissions on the 'project-planning-data' feature or on the 'project-manage-config' feature are required.
   * @param {ListOptions} [options] Pagination and filtering options.
   * @returns {Promise<Array<SubTaskTemplate>>}
   */


  async list(options) {
    const response = await this._client.get(`tasktemplates/${this._taskTemplateId}/subtasktemplates`, options);
    const data = response.data();
    return data.map(d => new _SubTaskTemplate.SubTaskTemplate(d));
  }
  /**
   * @typedef {Object} SubTaskTemplateCreateModel
   * @property {String} name The name of the subtask template.
   * @property {Number} order The order of the subtask template.
   */

  /**
   * Creates a new subtask template.
   * @param {SubTaskTemplateCreateModel} subTaskTemplate The model to create the subtask template.
   * @returns {Promise<SubTaskTemplate>}
   */


  async create(subTaskTemplate) {
    const response = await this._client.post(`tasktemplates/${this._taskTemplateId}/subtasktemplates`, subTaskTemplate);
    const data = response.data();
    return new _SubTaskTemplate.SubTaskTemplate(data);
  }
  /**
   * @typedef {SubTaskTemplateCreateModel} SubTaskTemplateUpdateModel
   */

  /**
   * Updates a subtask template for a task template with the specified id.
   * 
   * To access the task template, 'write' permissions on the 'project-planning-data' feature or on the 'project-manage-config' feature are required.
   * @param {String} subTaskTemplateId The id of the subtask template.
   * @param {SubTaskTemplateUpdateModel} subTaskTemplate The model to update the subtask template.
   * @return {Promise<SubTaskTemplate>}
   */


  async update(subTaskTemplateId, subTaskTemplate) {
    const response = await this._client.put(`tasktemplates/${this._taskTemplateId}/subtasktemplates/${subTaskTemplateId}`, subTaskTemplate);
    const data = response.data();
    return new _SubTaskTemplate.SubTaskTemplate(data);
  }
  /**
   * Deletes a subtask template for a task template with the specified id. To access the task template, 'write' permissions on the 'project-planning-data' feature or on the 'project-manage-config' feature are required.
   * @param {String} subtaskTemplateId The id of the subtask template.
   * @returns {Promise<void>}
   */


  async delete(subTaskTemplateId) {
    await this._client.delete(`tasktemplates/${this._taskTemplateId}/subtasktemplates/${subTaskTemplateId}`);
  }

}

exports.TaskTemplateSubTaskTemplates = TaskTemplateSubTaskTemplates;