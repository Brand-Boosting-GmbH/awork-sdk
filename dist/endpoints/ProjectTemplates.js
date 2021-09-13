"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectTemplates = void 0;

require("../globalTypedef");

var _ProjectTemplate = require("../model/ProjectTemplate");

var _ProjectTemplateProjectStatuses = require("./ProjectTemplateProjectStatuses");

/**
 * Class corresponding to Aworks ProjectTemplates Endpoints
 * @category Endpoints
 * @see [ProjectTemplates in Awork API Docs](https://openapi.awork.io/#/ProjectTemplates)
 */
class ProjectTemplates {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client 
  */
  constructor(client) {
    /**
    * @private
    */
    this._client = client;
  }
  /**
   * Returns the project template with the specified id and the related statuses.
   * @param {String} projectTemplateId The id of the project template.
   * @returns {Promise<ProjectTemplate>}
   */


  async get(projectTemplateId) {
    const response = await this._client.get(`/projecttemplates/${projectTemplateId}`);
    const data = response.data();
    return new _ProjectTemplate.ProjectTemplate(data);
  }
  /**
   * Returns all existing project types.
   * @param {ListOptions} [options] Pagination and filtering options 
   * @returns {Promise<Array<ProjectTemplate>>}
   */


  async list(options) {
    const response = await this._client.get('/projecttemplates', options);
    const data = response.data();
    return data.map(d => new _ProjectTemplate.ProjectTemplate(d));
  }
  /**
   * @typedef {Object} ProjectTemplateCreateModel
   * @property {String} description Description of the project template.
   * @property {String} name Name of the project template.
   * @property {Boolean} isBillableByDefault
   * @property {String} defaultTaskListIdForEmails uuid
   */

  /**
   * Creates a new project template.
   * @param {ProjectTemplateCreateModel} projectTemplate The model to create a project template.
   * @returns {Promise<ProjectTemplate>}
   */


  async create(projectTemplate) {
    const response = await this._client.post('/projecttemplates', projectTemplate);
    const data = response.data();
    return new _ProjectTemplate.ProjectTemplate(data);
  }
  /**
   * @typedef {ProjectTemplateCreateModel} ProjectTemplateUpdateModel
   */

  /**
   * Updates the project template with the specified id.
   * @param {String} projectTemplateId The id of the project template.
   * @param {ProjectTemplateUpdateModel} projectTemplate The model to update a project template with.
   * @returns {Promise<ProjectTemplate>}
   */


  async update(projectTemplateId, projectTemplate) {
    const response = await this._client.put(`/projecttemplates/${projectTemplateId}`, projectTemplate);
    const data = response.data();
    return new _ProjectTemplate.ProjectTemplate(data);
  }
  /**
   * Deletes the project template with the specified id.
   * @param {String} projectTemplateId The id of the project template.
   * @returns {Promise<void>}
   */


  async delete(projectTemplateId) {
    await this._client.delete(`/projecttemplates/${projectTemplateId}`);
  }
  /**
   * @typedef {Object} ProjectStatusOrder
   * @property {String} projectStatusId The id of the project status.
   * @property {Integer} order The order value which determines the position of the project status in the flow of the project type. Only accepts 0 and positive values. For independent statuses without successor and predecessor this value is set to null.
   */

  /**
   * Updates the order of a project status.
   * @param {String} projectTemplateId The id of the project template.
   * @param {ProjectStatusOrder} projectStatusOrder The project status with updated order.
   * @returns {Promise<void>}
   */


  async updateProjectStatusOrder(projectTemplateId, projectStatusOrder) {
    const response = await this._client.post(`/projecttemplates/${projectTemplateId}/updateprojectstatusorder`, projectStatusOrder);
    return response.data();
  }
  /**
   * Returns the task bundle id which is linked to the template.
   * @param {String} projectTemplateId The id of the project template.
   * @returns {Promise<String>}
   */


  async taskBundle(projectTemplateId) {
    const response = await this._client.get(`/projecttemplates/${projectTemplateId}/taskbundle`);
    return response.data().taskBundleId;
  }
  /**
   * Returns the {@link ProjectTemplateProjectStatuses} Endpoint with the specified project template Id.
   * @param {String} projectTemplateId The id of the project template
   * @returns {ProjectTemplateProjectStatuses}
   */


  projectStatus(projectTemplateId) {
    return new _ProjectTemplateProjectStatuses.ProjectTemplateProjectStatuses(this._client, projectTemplateId);
  }

}

exports.ProjectTemplates = ProjectTemplates;