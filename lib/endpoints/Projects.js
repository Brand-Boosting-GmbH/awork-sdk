"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Projects = void 0;

var _Project = require("../model/Project");

class Projects {
  constructor(client) {
    this.client = client;
  }

  async get(projectId) {
    const response = await this.client.get(`/projects/${projectId}`);
    const data = response.data();
    return new _Project.Project(data);
  }

  async list() {
    const response = await this.client.get(`/projects`);
    const data = response.data();
    return data.map(d => new _Project.Project(d));
  }
  /**
   * 
   * @param {Project} project 
   */


  async create(project) {
    const response = await this.client.post(`/projects`, project);
    const data = response.data();
    return new _Project.Project(data);
  }
  /**
   * 
   * @param {Project} project 
   */


  async update(project) {
    const response = await this.client.put(`/projects`, project);
    const data = response.data();
    return new _Project.Project(data);
  }
  /**
   * 
   * @param {String} projectId 
   * @returns 
   */


  async delete(projectId) {
    await this.client.post(`/projects/${projectId}/`, options);
  }

}

exports.Projects = Projects;