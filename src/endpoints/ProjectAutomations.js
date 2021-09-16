import '../globalTypedef'
import { Automation } from "../model/Automation"
import { ProjectActions } from './ProjectActions'


/**
 * Class corresponding to Aworks ProjectAutomations Endpoints
 * @category Endpoints
 * @see [ProjectAutomations in Awork API Docs](https://openapi.awork.io/#/ProjectAutomations)
 */
 export class ProjectAutomations {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client 
     * @param {String} projectId The id of the project.
     */
    constructor(client, projectId) {
        /** @private*/
        this._client = client
        /** @private*/
        this._projectId = projectId
    }

    /**
     * Returns a specific automation of the project with the specified id. Returns NotFound if the automation doesnt exist. To get the the automation data the user needs to be the owner of the project or have 'read' permissions of the feature 'project-master-data' globally or in his project role.
     * @param {String} automationId The id of the automation.
     * @returns {Promise<Automation>}
     */
    async get(automationId) {
        const response = await this._client.get(`/projects/${this._projectId}/automations/${automationId}`)
        const data = response.data()
        return new Automation(data)
    }

    /**
     * Returns all automations of the project with the specified id. To get the the automation data the user needs to be the owner of the project or have 'read' permissions of the feature 'project-master-data' globally or in his project role.
     * @param {ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<Automation>>}
     */
    async list (options) {
        const response = await this._client.get(`/projects/${this._projectId}/automations`, options)
        const data = response.data()
        return data.map(d => new Automation(d))
    }

    /**
     * @typedef {Object} AutomationCreateModel 
     * @property {String} type The type of the trigger.
     * @property {Array<{name: String, value: {description: String}}>} values
     */

    /**
     * Creates a new automation for the project with the specified id. The user needs to be the owner of the project or have 'write' permissions of the feature 'project-master-data' globally or in the project.
     * @param {AutomationCreateModel} automation The model to create an automation.
     * @returns {Promise<Automation>}
     */
    async create (automation) {
        const response = await this._client.post(`/projects/${this._projectId}/automations`, automation)
        const data = response.data()
        return new Automation(data)
    }

    /**
     * @typedef {Object} AutomationUpdateModel
     * @property {Boolean} enabled Whether the automation is enabled.
     * @property {{type: String, values: Array<{name: String, value: {description: String}}>}} trigger
     */

    /**
     * Updates the automation with the specified id. The user needs to be the owner of the project or have 'write' permissions of the feature 'project-master-data' globally or in the project.
     * @param {String} automationId The id of the automation.
     * @param {AutomationUpdateModel} automation The model to update an automation.
     * @returns {Promise<Automation>}
     */
    async update (automationId, automation) {
        const response = await this._client.put(`/projects/${this._projectId}/automations/${automationId}`, automation)
        const data = response.data()
        return new Automation(data)
    }

    /**
     * Deletes the specified automation for a given project. Also deletes all actions connected to the automation. The user needs to be the owner of the project or have 'write' permissions of the feature 'project-master-data' globally or in the project.
     * @param {String} automationId The id of the automation.
     * @returns {Promise<Automation>}
     */
    async delete (automationId) {
        const response = await this._client.delete(`/projects/${this._projectId}/automations/${automationId}`)
        const data = response.data()
        return new Automation(data)
    }

    /**
     * Returns the {@link ProjectActions} Endpoint with the specified project id and automation id.
     * @param {String} projectTemplateId The id of the project template
     * @returns {ProjectActions}
     */
     actions (automationId) {
        return new ProjectActions(this._client, this._projectId, automationId)
    }
}