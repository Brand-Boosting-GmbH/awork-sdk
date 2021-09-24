"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectTemplateActions = void 0;

var _Action = require("../model/Action");

require("../globalTypedef");

/**
 * Class corresponding to Aworks ProjectTemplateActions Endpoints
 * @category Endpoints
 * @see [ProjectTemplateActions in Awork API Docs](https://openapi.awork.io/#/ProjectTemplateActions)
 */
class ProjectTemplateActions {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   * @param {String} projectTemplateId The id of the project.
   * @param {String} automationId The id of the automation.
   */
  constructor(client, projectTemplateId, automationId) {
    /** @private*/
    this._client = client;
    /** @private*/

    this._projectTemplateId = projectTemplateId;
    /** @private*/

    this._automationId = automationId;
  }
  /**
   * Returns a specific action for a specific automation of a projecttemplate including all its values. The user needs 'read' permissions of the feature 'project-manage-config' to view action data.
   * @param {String} actionId The id of the action.
   * @returns {Promise<Action>}
   */


  async get(actionId) {
    const response = await this._client.get(`/projecttemplates/${this._projectTemplateId}/automations/${this._automationId}/actions/${actionId}`);
    const data = response.data();
    return new _Action.Action(data);
  }
  /**
   * Returns all actions for a specific automation of a project template including all its values. The user needs 'read' permissions of the feature 'project-manage-config' to view action data.
   * @param {import('../global').ListOptions} [options] Pagination and filtering options.
   * @returns {Promise<Array<Action>>}
   */


  async list(options) {
    const response = await this._client.get(`/projecttemplates/${this._projectTemplateId}/automations/${this._automationId}/actions`, options);
    const data = response.data();
    return data.map(d => new _Action.Action(d));
  }
  /**
   * @typedef {Object} ActionValue
   * @property {String} name The name of the action value.
   * @property {{description: String}} value The value of the action value.
   */

  /**
   * @typedef {Object} ActionCreateModel
   * @property {String} type The type of the action.
   * @property {Number} [order] The order of the action.
   * @property {Array<ActionValue>} values All action values.
   */

  /**
   * Creates an action for a specific automation of a projecttemplate including all its values. The user needs 'write' permissions of the feature 'project-manage-config' to create action data.
   * @param {ActionCreateModel} action The model to create an action.
   * @returns {Promise<Action>}
   */


  async create(action) {
    const response = await this._client.post(`/projecttemplates/${this._projectTemplateId}/automations/${this._automationId}/actions`, action);
    const data = response.data();
    return new _Action.Action(data);
  }
  /**
   * @typedef {ActionCreateModel} ActionUpdateModel
   */

  /**
   * Updates a specifc action of an automation of a projecttemplate.
   * Returns an updated action for a specific automation of a projecttemplate including all its values. The user needs 'write' permissions of the feature 'project-manage-config' to update action data.
   * @param {String} actionId The id of the action.
   * @param {ActionUpdateModel} action The model to update an action.
   * @returns {Promise<Action>}
   */


  async update(actionId, action) {
    const response = await this._client.put(`/projecttemplates/${this._projectTemplateId}/automations/${this._automationId}/actions/${actionId}`, action);
    const data = response.data();
    return new _Action.Action(data);
  }
  /**
   * Deletes an action for a specific automation of a projecttemplate including all its values. The user needs 'write' permissions of the feature 'project-manage-config' to delete action data.
   * @param {String} actionId The id of the action.
   * @returns {Promise<void>}
   */


  async delete(actionId) {
    await this._client.delete(`/projecttemplates/${this._projectTemplateId}/automations/${this._automationId}/actions/${actionId}`);
  }
  /**
   * Updates the order of a given action.
   * @param {String} actionId The id of the action.
   * @param {Number} order The order of the automation within a list.
   * @returns {Promise<Action>}
   */


  async updateOrder(actionId, order) {
    const response = await this._client.post(`/projecttemplates/${this._projectTemplateId}/automations/${this._automationId}/actions/${actionId}/updateorder`, {
      order: order
    });
    const data = response.data();
    return new _Action.Action(data);
  }

}

exports.ProjectTemplateActions = ProjectTemplateActions;