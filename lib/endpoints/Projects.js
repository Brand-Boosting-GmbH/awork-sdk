"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Projects = void 0;

require("../globalTypedef");

var _Project = require("../model/Project");

var _ProjectMembers = require("./ProjectMembers");

var _EntityFiles = require("./EntityFiles");

var _ProjectProjectStatus = require("./ProjectProjectStatus");

/**
 * Class corresponding to Aworks Projects Endpoints
 * @see [Projects in Awork API Docs](https://openapi.awork.io/#/Projects)
 */
class Projects {
  /**
   * Endpoint constructor
   * @param {import('../client').Client} client 
   */
  constructor(client) {
    this._client = client;
  }
  /**
   * Returns the project with the specified id if the user has 'read' permissions of feature 'project-master-data'.
   * @param {String} projectId The id of the project.
   * @returns {Promise<Project>}
   */


  async get(projectId) {
    const response = await this._client.get(`/projects/${projectId}`);
    const data = response.data();
    return new _Project.Project(data);
  }
  /**
   * Returns all projects the user has 'read' permissions of feature 'project-master-data' for.
   * @param {ListOptions} [options] Pagination and filtering options
   * @returns {Promise<Array<Project>>}
   */


  async list(options) {
    const response = await this._client.get(`/projects`, options);
    const data = response.data();
    return data.map(d => new _Project.Project(d));
  }
  /**
   * @typedef {Object} ProjectCreateModel
   * @property {String} name The name of the Project
   * @property {String} [description] The project description.
   * @property {String} [startDate] The start date of the project.
   * @property {String} [dueDate] The due date of the project.
   * @property {String} [companyId] The id of the company.
   * @property {Number} [timeBudget] The time budget the project has in seconds.
   * @property {Boolean} [isBillableByDefault] Whether project times should be billable by default.
   * @property {String} [projectTypeId] The id of the project type of this project.
   * @property {String} [projectStatusId] The id of the project status.
   * @property {String} [projectTemplateId] The id of the template which is used to create the project.
   */

  /**
   * Creates a new project.
   * @param {ProjectCreateModel} project The project creation object
   * @returns {Promise<Project>}
   */


  async create(project) {
    const response = await this._client.post(`/projects`, project);
    const data = response.data();
    return new _Project.Project(data);
  }
  /**
   * @typedef {Object} ProjectUpdateModel
   * @property {String} [name] The name of the Project
   * @property {String} [description] The project description.
   * @property {String} [startDate] The start date of the project.
   * @property {String} [dueDate] The due date of the project.
   * @property {String} [companyId] The id of the company.
   * @property {Number} [timeBudget] The time budget the project has in seconds.
   * @property {Boolean} [isBillableByDefault] Whether project times should be billable by default.
   */

  /**
   * Updates the project with the specified id.
   * The user can update a project if he is the owner or he needs 'write' permissions of the feature 'project-master-data'.
   * @param {String} projectId The id of the project.
   * @param {ProjectUpdateModel} project The project update object
   * @returns {Promise<Project>}
   */


  async update(projectId, project) {
    const response = await this._client.put(`/projects/${projectId}`, project);
    const data = response.data();
    return new _Project.Project(data);
  }
  /**
   * @typedef {Object} DeleteProjectOptions
   * @property {Boolean} [boolean] Set to true to delete also the related time trackings. If it is set to false the related time trackings are still there, but the project and task reference will be cleared. That will also happen if no request body is present.
   */

  /**
   * Deletes the project with the specified id. In the default case the related tasks of this project will also be deleted and the related time trackings of this project and all tasks loose the relation to the deleted project and tasks. To delete the time trackings as well, it is necessary to set the 'DeleteTimeTrackings' property of the post model to true.
   * 
   * The user can delete a project if he is the owner or he needs 'write' permissions of the feature 'project-master-data
   * @param {String} projectId The id of the project.
   * @param {DeleteProjectOptions} [options]
   * @returns {Promise<void>}
   */


  async delete(projectId, options) {
    await this._client.post(`/projects/${projectId}/`, options);
  }
  /**
   * Returns the {@link ProjectMembers} Endpoint with the specified project Id.
   * @param {String} projectId The id of the project.
   * @returns {ProjectMembers}
   */


  members(projectId) {
    return new _ProjectMembers.ProjectMembers(this._client, projectId);
  }
  /**
   * Returns the {@link EntityFiles} Endpoint with the specified project Id and entityType 'projects'.
   * @param {String} projectId The id of the project.
   * @returns {EntityFiles}
   */


  files(projectId) {
    //projects = entityName, projectId = entityId
    return new _EntityFiles.EntityFiles(this._client, 'projects', projectId);
  }
  /**
   * Returns the {@link ProjectProjectStatus} Endpoint with the specified project Id.
   * @param {String} projectId The id of the project.
   * @returns {ProjectProjectStatus}
   */


  projectStatus(projectId) {
    return new _ProjectProjectStatus.ProjectProjectStatus(this._client, projectId);
  }

}

exports.Projects = Projects;