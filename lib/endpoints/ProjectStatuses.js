"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectStatuses = void 0;

var _ProjectStatus = require("../model/ProjectStatus");

class ProjectStatuses {
  constructor(client) {
    this._client = client;
  }
  /**
   * Returns the project status with the specified id.
   * @param {String} projectId 
   * @returns {Array<Promise<ProjectStatus>>}
   */


  async get(projectStatusId) {
    const response = await this._client.get(`/projectstatuses/${projectStatusId}`);
    const data = response.data();
    return new _ProjectStatus.ProjectStatus(data);
  }
  /**
   * Returns all project statuses.
   * @returns {Array<Promise<ProjectStatus>>}
   */


  async list() {
    const response = await this._client.get('/projectstatuses');
    const data = response.data();
    return data.map(d => new _ProjectStatus.ProjectStatus(d));
  }
  /**
   * Creates a new project status. For this operation, a projectTemplateId is required.
   * @param {String} projectTemplateId 
   * @param {ProjectStatus} projectStatus 
   * @returns {Promise<ProjectStatus>}
   */


  async create(projectTemplateId, projectStatus) {
    const response = await this._client.post(`/projecttemplates/${projectTemplateId}/projectstatuses`, projectStatus);
    const data = response.data();
    return new _ProjectStatus.ProjectStatus(data);
  }
  /**
   * Updates the project status with the specified id.
   * @param {String} projectStatusId
   * @param {ProjectStatus} projectStatus 
   * @returns {Promise<ProjectStatus>}
   */


  async update(projectStatusId, projectStatus) {
    const response = await this._client.put(`/projectstatuses/${projectStatusId}`, projectStatus);
    const data = response.data();
    return new _ProjectStatus.ProjectStatus(data);
  }
  /**
   * Deletes the project status with the specified id.
   * @param {String} projectStatusId
   */


  async delete(projectStatusId) {
    await this._client.post(`/projectstatuses/${projectStatusId}/delete`);
  }
  /**
   * Archives or unarchives the project status with the specified id.
   * @param {String} projectStatusId 
   * @param {Boolean} archivedStatus 
   */


  async archive(projectStatusId, archivedStatus = true) {
    await this._client.post(`/projectstatuses/${projectStatusId}/setarchived`, {
      'isArchived': archivedStatus
    });
  }

}

exports.ProjectStatuses = ProjectStatuses;