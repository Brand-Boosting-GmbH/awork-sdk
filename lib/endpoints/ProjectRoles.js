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
   * @param {String} projectRoleId 
   * @returns {Promise<ProjectRole>}
   */


  async get(projectRoleId) {
    const response = await this._client.get(`/projectroles/${projectRoleId}`);
    const data = response.data();
    return new _ProjectRole.ProjectRole(data);
  }
  /**
   * Returns all project roles.
   * @param {ListOptions} [options] Pagination and filtering options
   * @returns {Promise<Array<ProjectRole>>}
   */


  async list(options) {
    const response = await this._client.get('/projectroles', options);
    const data = response.data();
    return data.map(d => new _ProjectRole.ProjectRole(d));
  }
  /**
   * @typedef {Object} ProjectRoleCreateAndUpdateModel The model used to create a project role.
   * @property {String} name The name of the project role. Required.
   * @property {Boolean} [isDefault] Whether to use this role as default when adding new project members.
   * @property {String} [defaultProjectRoleId] The id of the new default project role. Required if the updated project role is the current default role.
   */

  /**
   * Creates a new project role.
   * @param {ProjectRoleCreateAndUpdateModel} projectRole 
   * @return {Promise<ProjectRole>}
   */


  async create(projectRole) {
    const response = await this._client.post('/projectroles', projectRole);
    const data = response.data();
    return new _ProjectRole.ProjectRole(data);
  }
  /**
   * Updates the project role with the specified id.
   * @param {String} projectRoleId 
   * @param {ProjectRoleCreateAndUpdateModel} projectRole
   */


  async update(projectRoleId, projectRole) {
    const response = await this._client.put(`/projectroles/${projectRoleId}`, projectRole);
    const data = response.data();
    return new _ProjectRole.ProjectRole(data);
  }
  /**
   * @typedef {Object} ProjectRoleDeleteModel The model to delete the project role.
   * @property {String} newProjectRoleId The id of the new project role. Needs to be set when there are still users in projects with the old project role.
   */

  /**
   * Deletes the project role with the specified id. When you want to delete a project role which is still in use, you are required to specify which role the currently assigned members should be assigned to instead. If the default role gets deleted, the migration role becomes the new default project role.
   * @param {String} projectRoleId 
   * @param {ProjectRoleDeleteModel} newProjectRole
   * @return {Promise<void>}
   */


  async delete(projectRoleId, newProjectRole) {
    await this._client.post(`/projectroles/${projectRoleId}/delete`, newProjectRole);
  }
  /**
   * Returns all project roles of a specific user.
   * @param {String} userId 
   * @returns {Promise<Array<ProjectRole>>}
   */


  async byUserId(userId) {
    const response = await this._client.get(`/projectroles/byuserid/${userId}`);
    const data = response.data();
    return data.map(d => new _ProjectRole.ProjectRole(d));
  }

}

exports.ProjectRoles = ProjectRoles;