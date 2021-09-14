"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskBundles = void 0;

require("../globalTypedef");

var _TaskBundle = require("../model/TaskBundle");

var _TaskBundleTaskListTemplates = require("./TaskBundleTaskListTemplates");

var _TaskBundleTaskTemplates = require("./TaskBundleTaskTemplates");

/**
 * Class corresponding to Aworks TaskBundles Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.io/#/TaskBundles)
 */
class TaskBundles {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   */
  constructor(client) {
    /** @private */
    this._client = client;
  }
  /**
   * Returns the task bundle with the specified id.
   * @param {String} taskBundleId 
   * @returns {Promise<TaskBundle>}
   */


  async get(taskBundleId) {
    const response = await this._client.get(`/taskbundles/${taskBundleId}`);
    const data = response.data();
    return new _TaskBundle.TaskBundle(data);
  }
  /**
   * Returns all global task bundles.
   * @param {ListOptions} [options] Pagination and filtering options.
   * @returns {Promise<Array<TaskBundle>>}
   */


  async list(options) {
    const response = await this._client.get('/taskbundles', options);
    const data = response.data();
    return data.map(d => new _TaskBundle.TaskBundle(d));
  }
  /**
   * @typedef {Object} TaskBundleModel
   * @property {String} name The name of the task bundle. Required if its not related to a task bundle.
   * @property {String} description The description of the task bundle.
   * @property {String} icon The icon of the task bundle.
   * @property {String} projectTemplateId The project template id of the task bundle, only necessary for the creation of an empty bundle for a project template.
   */

  /**
   * Returns the task bundle with the specified id.
   * @param {TaskBundleModel} taskbundle 
   * @returns {Promise<TaskBundle>}
   */


  async create(taskbundle) {
    const response = await this._client.post('/taskbundles', taskbundle);
    const data = response.data();
    return new _TaskBundle.TaskBundle(data);
  }
  /**
   * Updates the task bundle with the specified id.
   * @param {String} taskBundleId 
   * @param {TaskBundleModel} taskBundle 
   * @returns {Promise<TaskBundle>}
   */


  async update(taskBundleId, taskBundle) {
    const response = await this._client.put(`/taskbundles/${taskBundleId}`, taskBundle);
    const data = response.data();
    return new _TaskBundle.TaskBundle(data);
  }
  /**
   * Deletes the task bundle with the specified id.
   * @param {String} taskBundleId 
   * @returns {Promise<void>}
   */


  async delete(taskBundleId) {
    await this._client.delete(`/taskbundles/${taskBundleId}`);
  }
  /**
   * Returns all possible icons for a task bundle.
   * @returns {Promise<Array<String>>}
   */


  async icons() {
    const response = await this._client.get('/taskbundles/icons');
    return response.data();
  }
  /**
   * Creates the taskbundle, task templates, task list templates, task template to task list templates and copies the attachments.
   * @param {String} taskBundleId The id of the task bundle to be copied.
   * @returns {Promise<TaskBundle>}
   */


  async copy(taskBundleId) {
    const response = await this._client.post(`/taskbundles/${taskBundleId}/copy`);
    const data = response.data();
    return new _TaskBundle.TaskBundle(data);
  }

  taskListTemplates(taskBundleId) {
    return new _TaskBundleTaskListTemplates.TaskBundleTaskListTemplates(this._client, taskBundleId);
  }

  taskTemplates(taskBundleId) {
    return new _TaskBundleTaskTemplates.TaskBundleTaskTemplates(this._client, taskBundleId);
  }

}

exports.TaskBundles = TaskBundles;