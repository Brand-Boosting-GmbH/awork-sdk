"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectProjectStatus = void 0;

var _ProjectStatus = require("../model/ProjectStatus");

class ProjectProjectStatus {
  constructor(client, projectId) {
    this._client = client;
    this._projectId = projectId;
  }
  /**
   * 
   * @param {ProjectStatus} projectStatus
   */


  async create(projectStatus) {
    const response = await this._client.post(`/projects/${this._projectId}/projectstatuses`, projectStatus);
    const data = response.data();
    return new _ProjectStatus.ProjectStatus(data);
  }

}

exports.ProjectProjectStatus = ProjectProjectStatus;