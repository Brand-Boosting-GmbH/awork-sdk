"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectTemplateAutomations = void 0;

var _Automation = require("../model/Automation");

require("../globalTypedef");

var _ProjectTemplateActions = require("./ProjectTemplateActions");

/**
 * Class corresponding to Aworks ProjectTemplateAutomations Endpoints
 * @category Endpoints
 * @see [ProjectTemplateAutomations in Awork API Docs](https://openapi.awork.io/#/ProjectTemplateAutomations)
 */
class ProjectTemplateAutomations {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   * @param {String} projectTemplateId The id of the project.
   */
  constructor(client, projectTemplateId) {
    /** @private*/
    this._client = client;
    /** @private*/

    this._projectTemplateId = projectTemplateId;
  }
  /**
   * Returns a specific automation of the projecttemplate with the specified id. Returns NotFound if the automation doesnt exist. To get the the automation data the user needs to have 'read' permissions of the feature 'project-manage-config' globally.
   * @param {String} automationId The id of the automation.
   * @returns {Promise<Automation>}
   */


  async get(automationId) {
    const response = await this._client.get(`/projecttemplates/${this._projectTemplateId}/automations/${automationId}`);
    const data = response.data();
    return new _Automation.Automation(data);
  }
  /**
   * Returns all automations of the projecttemplate with the specified id. To get the automation data the user needs the 'read' permissons of the feature 'project-manage-config' globally.
   * @param {import('../global').ListOptions} [options] Pagination and filtering options.
   * @returns {Promise<Array<Automation>>}
   */


  async list(options) {
    const response = await this._client.get(`/projecttemplates/${this._projectTemplateId}/automations`, options);
    const data = response.data();
    return data.map(d => new _Automation.Automation(d));
  }
  /**
   * @typedef {Object} AutomationCreateModel 
   * @property {String} type The type of the trigger.
   * @property {Array<{name: String, value: {description: String}}>} values
   */

  /**
   * Creates a new automation of the projecttemplate with the specified id. To create the the automation the user needs to have 'write' permissions of the feature 'project-manage-config' globally.
   * @param {AutomationCreateModel} automation The model to create an automation.
   * @returns {Promise<Automation>}
   */


  async create(automation) {
    const response = await this._client.post(`/projecttemplates/${this._projectTemplateId}/automations`, automation);
    const data = response.data();
    return new _Automation.Automation(data);
  }
  /**
   * @typedef {Object} AutomationUpdateModel
   * @property {Boolean} enabled Whether the automation is enabled.
   * @property {{type: String, values: Array<{name: String, value: {description: String}}>}} trigger
   */

  /**
   * Updates the specified automation for a specific projecttemplate. To update the the automation the user needs to have 'write' permissions of the feature 'project-manage-config' globally.
   * @param {String} automationId The id of the automation.
   * @param {AutomationUpdateModel} automation The model to update an automation.
   * @returns {Promise<Automation>}
   */


  async update(automationId, automation) {
    const response = await this._client.put(`/projecttemplates/${this._projectTemplateId}/automations/${automationId}`, automation);
    const data = response.data();
    return new _Automation.Automation(data);
  }
  /**
   * Deletes the specified automation with its trigger and all its values. To delete the the automation the user needs to have 'write' permissions of the feature 'project-manage-config' globally. If the 'removeFromProject' boolean is set to true, all automations in projects of that project template created from that automation template are deleted aswell.
   * @param {String} automationId The id of the automation.
   * @param {Boolean} removefromProjects Whether to delete the automation also from all projects of the projecttemplate.
   * @returns {Promise<void>}
   */


  async delete(automationId, removefromProjects) {
    await this._client.delete(`/projecttemplates/${this._projectTemplateId}/automations/${automationId}`, {
      removeFromProjects: removefromProjects
    });
  }
  /**
   * Reapplies the automation to all projects of this specifc project template.
   * Returns NotFound if the automation doesnt exist. To execute this you need to have 'write' permissions of the feature 'project-manage-config' globally.
   * @param {String} automationId The id of the automation.
   * @returns {Promise<void>}
   */


  async reApply(automationId) {
    await this._client.post(`/projecttemplates/${this._projectTemplateId}/automations/${automationId}/reapply`);
  }
  /**
   * Returns the {@link ProjectTemplateActions} Endpoint with the specified project template Id.
   * @param {String} projectTemplateId The id of the project template
   * @returns {ProjectTemplateActions}
   */


  actions(automationId) {
    return new _ProjectTemplateActions.ProjectTemplateActions(this._client, this._projectTemplateId, automationId);
  }

}

exports.ProjectTemplateAutomations = ProjectTemplateAutomations;