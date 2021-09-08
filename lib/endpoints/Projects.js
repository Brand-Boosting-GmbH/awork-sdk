"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Projects = void 0;

var _Project = require("../model/Project");

var _ProjectMembers = require("./ProjectMembers");

var _EntityFiles = require("./EntityFiles");

var _ProjectProjectStatus = require("./ProjectProjectStatus");

class Projects {
  constructor(client) {
    this._client = client;
  }

  async get(projectId) {
    const response = await this._client.get(`/projects/${projectId}`);
    const data = response.data();
    return new _Project.Project(data);
  }

  async list() {
    const response = await this._client.get(`/projects`);
    const data = response.data();
    return data.map(d => new _Project.Project(d));
  }
  /**
   * 
   * @param {Project} project 
   */


  async create(project) {
    const response = await this._client.post(`/projects`, project);
    const data = response.data();
    return new _Project.Project(data);
  }
  /**
   * 
   * @param {Project} project 
   */


  async update(project) {
    const response = await this._client.put(`/projects`, project);
    const data = response.data();
    return new _Project.Project(data);
  }
  /**
   * 
   * @param {String} projectId 
   * @returns 
   */


  async delete(projectId) {
    await this._client.post(`/projects/${projectId}/`, options);
  }

  members(projectId) {
    return new _ProjectMembers.ProjectMembers(this._client, projectId);
  }

  files(projectId) {
    //projects = entityName, projectId = entityId
    return new _EntityFiles.EntityFiles(this._client, 'projects', projectId);
  }

  projectStatus(projectId) {
    return new _ProjectProjectStatus.ProjectProjectStatus(this._client, projectId);
  }

}

exports.Projects = Projects;