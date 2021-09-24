"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectRoles = void 0;

require("../globalTypedef");

var _ProjectRole = require("../model/ProjectRole");

/**
 * Class corresponding to Aworks ProjectRoles Endpoints
 * @category Endpoints
 * @see [ProjectRoles in Awork API Docs](https://openapi.awork.io/#/ProjectRoles)
 */
class ProjectRoles {
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
   * Returns the project role with the specified id.
   * @param {String} projectRoleId The id of the project role.
   * @returns {Promise<ProjectRole>}
   */


  async get(projectRoleId) {
    const response = await this._client.get(`/projectroles/${projectRoleId}`);
    const data = response.data();
    return new _ProjectRole.ProjectRole(data);
  }
  /**
   * Returns all project roles.
   * @param {import('../global').ListOptions} [options] Pagination and filtering options
   * @returns {Promise<Array<ProjectRole>>}
   */


  async list(options) {
    const response = await this._client.get('/projectroles', options);
    const data = response.data();
    return data.map(d => new _ProjectRole.ProjectRole(d));
  }
  /**
   * @typedef {Object} ProjectRoleCreateModel The model used to create a project role.
   * @property {String} name The name of the project role. Required.
   * @property {Boolean} [isDefault] Whether to use this role as default when adding new project members.
   * @property {String} [defaultProjectRoleId] The id of the new default project role. Required if the updated project role is the current default role.
   */

  /**
   * Creates a new project role.
   * @param {ProjectRoleCreateModel} projectRole The model to create a project role.
   * @return {Promise<ProjectRole>}
   */


  async create(projectRole) {
    const response = await this._client.post('/projectroles', projectRole);
    const data = response.data();
    return new _ProjectRole.ProjectRole(data);
  }
  /**
   * @typedef {ProjectRoleCreateModel} ProjectRoleUpdateModel
   */

  /**
   * Updates the project role with the specified id.
   * @param {String} projectRoleId The id of the project role.
   * @param {ProjectRoleUpdateModel} projectRole The model to update a project.
   */


  async update(projectRoleId, projectRole) {
    const response = await this._client.put(`/projectroles/${projectRoleId}`, projectRole);
    const data = response.data();
    return new _ProjectRole.ProjectRole(data);
  }
  /**
   * Deletes the project role with the specified id. When you want to delete a project role which is still in use, you are required to specify which role the currently assigned members should be assigned to instead. If the default role gets deleted, the migration role becomes the new default project role.
   * @param {String} projectRoleId The id of the project role.
   * @param {String} newProjectRoleId The project role id to replace the old project role with.
   * @return {Promise<void>}
   */


  async delete(projectRoleId, newProjectRoleId) {
    await this._client.post(`/projectroles/${projectRoleId}/delete`, {
      newProjectRoleId: newProjectRoleId
    });
  }
  /**
   * Returns all project roles of a specific user.
   * @param {String} userId The id of the user.
   * @returns {Promise<Array<ProjectRole>>}
   */


  async byUserId(userId) {
    const response = await this._client.get(`/projectroles/byuserid/${userId}`);
    const data = response.data();
    return data.map(d => new _ProjectRole.ProjectRole(d));
  }

}

exports.ProjectRoles = ProjectRoles;