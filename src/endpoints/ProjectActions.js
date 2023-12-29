import { Action } from "../model/Action"
import '../globalTypedef'

/**
 * Class corresponding to Aworks ProjectActions Endpoints
 * @category Endpoints
 * @see [ProjectActions in Awork API Docs](https://openapi.awork.com/#/ProjectActions)
 */
export class ProjectActions {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client 
     * @param {String} projectId The id of the project.
     * @param {String} automationId The id of the automation.
     */
    constructor(client, projectId, automationId) {
        /** @private*/
        this._client = client
        /** @private*/
        this._projectId = projectId
        /** @private*/
        this._automationId = automationId
    }

    /**
     * Get a specific action including its values of an automation. The user needs to be owner of the project or needs permission 'read' of the feature 'project-master-data' globally or in the project.
     * @param {String} actionId The id of the action.
     * @returns {Promise<Action>}
     */
    async get(actionId) {
        const response = await this._client.get(`/projects/${this._projectId}/automations/${this._automationId}/actions/${actionId}`)
        const data = response.data()
        return new Action(data)
    }

    /**
     * Gets all actions including their values of an automation. The user needs to be owner of the project or needs permission 'read' of the feature 'project-master-data' globally or in the project.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<Action>>}
     */
    async list(options) {
        const response = await this._client.get(`/projects/${this._projectId}/automations/${this._automationId}/actions`, options)
        const data = response.data()
        return data.map(d => new Action(d))
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
     * Creates a new action including its values for an automation. The user needs to be owner of the project or needs permission 'write' of the feature 'project-master-data' globally or in the project.
     * @param {ActionCreateModel} action The model to create an action.
     * @returns {Promise<Action>}
     */
    async create(action) {
        const response = await this._client.post(`/projects/${this._projectId}/automations/${this._automationId}/actions`, action)
        const data = response.data()
        return new Action(data)
    }

    /**
     * @typedef {ActionCreateModel} ActionUpdateModel
     */

    /**
     * Updates an exsting action including its values for an automation. The user needs to be owner of the project or needs permission 'write' of the feature 'project-master-data' globally or in the project.
     * @param {String} actionId The id of the action.
     * @param {ActionUpdateModel} action The model to update an action.
     * @returns {Promise<Action>}
     */
    async update(actionId, action) {
        const response = await this._client.put(`/projects/${this._projectId}/automations/${this._automationId}/actions/${actionId}`, action)
        const data = response.data()
        return new Action(data)
    }

    /**
     * Deletes an action for an automation including all its values. The user needs to be owner of the project or needs permission 'write' of the feature 'project-master-data' globally or in the project.
     * @param {String} actionId The id of the action.
     * @returns {Promise<void>}
     */
    async delete(actionId) {
        await this._client.delete(`/projects/${this._projectId}/automations/${this._automationId}/actions/${actionId}`)
    }

    /**
     * Updates the order of a given action in the list of actions of the specific automation. If the order isn't changed, the order will not be updated.
     * @param {String} actionId The id of the action.
     * @param {Number} order The order of the automation within a list.
     * @returns {Promise<Action>}
     */
    async updateOrder(actionId, order) {
        const response = await this._client.post(`/projects/${this._projectId}/automations/${this._automationId}/actions/${actionId}/updateorder`, { order: order })
        const data = response.data()
        return new Action(data)
    }


}