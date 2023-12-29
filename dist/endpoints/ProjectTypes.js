"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectTypes = void 0;

require("../globalTypedef");

var _ProjectType = require("../model/ProjectType");

/**
 * Class corresponding to Aworks ProjectTypes Endpoints
 * @category Endpoints
 * @see [ProjectTypes in Awork API Docs](https://openapi.awork.com/#/ProjectTypes)
 */
class ProjectTypes {
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
   * Returns the project type with the specified id.
   * @param {String} projectTypeId The id of the project type.
   * @returns {Promise<ProjectType>}
   */


  async get(projectTypeId) {
    const response = await this._client.get(`/projecttypes/${projectTypeId}`);
    const data = response.data();
    return new _ProjectType.ProjectType(data);
  }
  /**
   * @typedef {Object} ShowArchived
   * @property {Boolean} showArchived Include archived project types in the results. Optional. False by default.
   */

  /**
   * Returns all existing project types.
   * @param {ListOptions & ShowArchived} [options] Pagination, filtering and showArchived options.
   * @returns {Promise<Array<ProjectType>>}
   */


  async list(options) {
    const response = await this._client.get('/projecttypes', options);
    const data = response.data();
    return data.map(d => new _ProjectType.ProjectType(d));
  }
  /**
   * @typedef {Object} ProjectTypeCreateModel The model to change the project type.
   * @property {String} [name] The names of the project type.
   * @property {String} [description] A short description of the project type.
   * @property {import('../index').Icon} [icon] The identifier of the project type icon.
   */

  /**
   * Creates a new project type.
   * @param {ProjectTypeCreateModel} projectType The model to create a project type.
   * @returns {Promise<ProjectType>}
   */


  async create(projectType) {
    const response = await this._client.post('/projecttypes', projectType);
    const data = response.data();
    return new _ProjectType.ProjectType(data);
  }
  /**
   * @typedef {ProjectTypeCreateModel} ProjectTypeUpdateModel
   */

  /**
   * Updates the project type with the specified id.
   * @param {String} projectTypeId The id of the project type.
   * @param {ProjectTypeUpdateModel} projectType The model to update the project type.
   * @returns {Promise<ProjectType>}
   */


  async update(projectTypeId, projectType) {
    const response = await this._client.put(`/projecttypes/${projectTypeId}`, projectType);
    const data = response.data();
    return new _ProjectType.ProjectType(data);
  }
  /**
   * Deletes the project type with the specified id. If an id of a new type is provided, projects will be updated to reference the new type If no id of type is provided, the type if removed from the projects.
   * @param {String} projectTypeId The id of the project type.
   */


  async delete(projectTypeId) {
    await this._client.post(`/projecttypes/${projectTypeId}/delete`, {
      'projectTypeId': projectTypeId
    }); //??
  }
  /**
   * Archives or unarchives the project type with the specified id. Archived objects can not be used any longer but still exist for being referenced by other entities.
   * @param {String} projectTypeId The id of the project type.
   * @param {Boolean} [archived] Whether the project type should be archived.
   * @returns {Promise<ProjectType>}
   */


  async setArchived(projectTypeId, archived = true) {
    const response = await this._client.post(`/projecttypes/${projectTypeId}/setarchived`, {
      'isArchived': archived
    });
    const data = response.data();
    return new _ProjectType.ProjectType(data);
  }
  /**
   * Get all possible icons for project types.
   * @returns {Promise<Array<String>>}
   */


  async icons() {
    const response = await this._client.get('/projecttypes/icons');
    return response.data();
  }

}

exports.ProjectTypes = ProjectTypes;