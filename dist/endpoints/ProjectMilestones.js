"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectMilestones = void 0;

var _ProjectMilestone = require("../model/ProjectMilestone");

require("../globalTypedef");

/**
 * Class corresponding to Aworks ProjectMilestones Endpoints.
 * @category Endpoints
 * @see [ProjectMilestones in Awork API Docs](https://openapi.awork.io/#/ProjectMilestones)
 */
class ProjectMilestones {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   */
  constructor(client) {
    /** @private*/
    this._client = client;
  }
  /**
   * Returns all project milestones the user is allowed to see.
   * The user only gets returned all milestones of projects he has 'read' permissions of feature 'project-planning-data' for.
   * @param {ListOptions} [options] Pagination and filtering options.
   * @returns {Promise<Array<ProjectMilestone>>}
   */


  async list(options) {
    const response = await this._client.get('/projectmilestones', options);
    const data = response.data();
    return data.map(d => new _ProjectMilestone.ProjectMilestone(d));
  }
  /**
   * @typedef {Object} ProjectMilestoneCreateModel
   * @property {String} name The name of the milestone.
   * @property {String} color The color of the milestone.
   * @property {String} dueDate The date the milestone is due.
   * @property {String} projectId The id of the project the milestone is related to.
   */

  /**
   * Creates a new project milestone.
   * The user needs 'write' permissions of feature 'project-planning-data' to get the data.
   * @param {ProjectMilestoneCreateModel} milestone The model to create a project milstone.
   * @returns {Promise<ProjectMilestone>}>
   */


  async create(milestone) {
    const response = await this._client.post('/projectmilestones', milestone);
    const data = response.data();
    return new _ProjectMilestone.ProjectMilestone(data);
  }
  /**
   * @typedef {Object} ProjectMilestoneUpdateModel
   * @property {String} name The name of the milestone.
   * @property {String} color The color of the milestone.
   * @property {String} dueDate The date the milestone is due.
   */

  /**
   * Updates the specified project milestone. The user needs 'write' permissions of feature 'project-planning-data' to get the data.
   * @param {String} milestoneId The id of the project milestone.
   * @param {ProjectMilestoneUpdateModel} milestone The model to update a project milestone.
   * @returns {Promise<ProjectMilestone>}
   */


  async update(milestoneId, milestone) {
    const response = await this._client.put(`/projectmilestones/${milestoneId}`, milestone);
    const data = response.data();
    return new _ProjectMilestone.ProjectMilestone(data);
  }
  /**
   * Deletes the project milestone with the specified id.
   * The user needs 'write' permissions of feature 'project-planning-data' to get the data.
   * @param {String} milestoneId The id of the project milestone.
   * @returns {Promise<void>}
   */


  async delete(milestoneId) {
    await this._client.delete(`/projectmilestones/${milestoneId}`);
  }

}

exports.ProjectMilestones = ProjectMilestones;