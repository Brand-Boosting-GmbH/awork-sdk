"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskBundles = void 0;

require("../globalTypedef");

var _TaskBundle = require("../model/TaskBundle");

var _TaskBundleTaskListTemplates = require("./TaskBundleTaskListTemplates");

var _TaskBundleTaskTemplates = require("./TaskBundleTaskTemplates");

var _Task = require("../model/Task");

/**
 * Class corresponding to Aworks TaskBundles Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.com/#/TaskBundles)
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
   * @param {import('../global').ListOptions} [options] Pagination and filtering options.
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
   * @property {import('../index').Icon} [icon] The icon of the task bundle.
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
  /**
   * @typedef {Object} TaskBundleCreateModel
   * @property {String} name The name of the task bundle. Required if its not related to a task bundle.
   * @property {String} description The description of the task bundle.
   * @property {import('../index').Icon} icon The icon of the task bundle.
   * @property {String} projectTemplateId The project template id of the task bundle, only necessary for the creation of an empty bundle for a project template.
   */

  /**
   * Creates a new task bundle from the specified project.
   * @param {String} projectId The id of the project of which the new task bundle will be created.
   * @param {TaskBundleCreateModel} taskBundle The model to create the task bundle.
   * @returns {Promise<Task>}
   */


  async createFromProject(projectId, taskBundle) {
    const response = await this._client.post(`/taskbundles/fromproject/${projectId}`, taskBundle);
    const data = response.data();
    return new _Task.Task(data);
  }
  /**
   * Creates a new task bundle from the specified task list.
   * @param {String} taskListId The id of the task list of which the new task bundle will be created.
   * @param {TaskBundleCreateModel} taskBundle The model to create the task bundle.
   * @returns {Promise<Task>}
   */


  async createFromTaskList(taskListId, taskBundle) {
    const response = await this._client.post(`/taskbundles/fromtasklist/${taskListId}`, taskBundle);
    const data = response.data();
    return new _Task.Task(data);
  }
  /**
   * Returns the {@link TaskBundleTaskListTemplates} Endpoint with the specified task bundle Id.
   * @param {String} projectId The id of the task bundle.
   * @returns {ProjectProjectStatus}
   */


  taskListTemplates(taskBundleId) {
    return new _TaskBundleTaskListTemplates.TaskBundleTaskListTemplates(this._client, taskBundleId);
  }
  /**
   * Returns the {@link TaskBundleTaskTemplates} Endpoint with the specified task bundle Id.
   * @param {String} projectId The id of the task bundle.
   * @returns {ProjectProjectStatus}
   */


  taskTemplates(taskBundleId) {
    return new _TaskBundleTaskTemplates.TaskBundleTaskTemplates(this._client, taskBundleId);
  }

}

exports.TaskBundles = TaskBundles;