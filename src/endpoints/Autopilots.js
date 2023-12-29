import '../globalTypedef'
import { Autopilot } from "../model/Autopilot"

/**
 * Class corresponding to Aworks Autopilots Endpoints
 * @category Endpoints
 * @see [Autopilots in Awork API Docs](https://openapi.awork.com/#/Autopilots)
 */
export class Autopilots {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client 
     */
    constructor(client, projectId) {
        /** @private */
        this._client = client
        /** @private */
        this._projectId = projectId
    }

    /**
     * Returns the autopilot including its alerts. To get the autopilot data the user needs to be the owner of the project or 'read' permissions of the feature 'project-master-data' globally or in his project role.
     * @param {String} autopilotId The id of the autopilot.
     * @returns {Promise<Autopilot>}
     */
    async get(autopilotId) {
        const response = await this._client.get(`/autopilot/${autopilotId}`)
        const data = response.data()
        return new Autopilot(data)
    }

    /**
     * Returns the autopilot with the specified id of the project with the specified id. Returns NoContent if the project does not have an autopilot setup. To get the autopilot data the user needs to be the owner of the project or must have 'read' permissions of the feature 'project-master-data' globally or in his project role.
     * @returns {Promise<Autopilot>}
     */
    async get() {
        const response = await this._client.get(`/projects/${this._projectId}/autopilot`)
        const data = response.data()
        return new Autopilot(data)
    }

    /**
     * @typedef {Object} AlertObject
     * @property {String} id The id of the alert.
     * @property {String} alert The alert indicartor.
     * @property {Boolean} enabled Whether the alert is enabled.
     * @property {String} channel The channel of the alert.
     */

    /**
     * @typedef {Object} AutopilotCreateModel
     * @property {String} type The type of the autopilot.
     * @property {Array<AlertObject>} alerts The alerts of the autopilot.
     */

    /**
     * Creates a new autopilot for the project with the specified id. Also creates and enables all alerts for the new autopilot. For this action, the user needs to be the owner of the project or must have 'read' permissions of the feature 'project-master-data' globally or in his project role.
     * @param {AutopilotCreateModel} autopilot The model to create a autopilot for a specific project.
     * @returns {Promise<Autopilot>}
     */
    async create(autopilot) {
        const response = await this._client.post(`/projects/${this._projectId}/autopilot`, autopilot)
        const data = response.data()
        return new Autopilot(data)
    }

    /**
     * @typedef {Object} AutopilotUpdateModel
     * @property {String} type The type of the autopilot.
     * @property {Array<AlertObject>} alerts The alerts of the autopilot.
     * @property {Boolean} enabled Whether the autopilot is enabled.
     */

    /**
     * Updates the autopilot of the project with the specified id. To access and modify the autopilot data the user needs to be the owner of the project or must have 'read' permissions of the feature 'project-master-data' globally or in his project role.
     * @param {AutopilotUpdateModel} autopilot The model to update a autopilot for a specific project.
     * @returns {Promise<Autopilot>}
     */
    async update(autopilot) {
        const response = await this._client.put(`/projects/${this.projectId}/autopilot`, autopilot)
        const data = response.data()
        return new Autopilot(data)
    }

    /**
     * Deletes the autopilot of the project with the specified id. To access and modify the autopilot data the user needs to be the owner of the project or must have 'read' permissions of the feature 'project-master-data' globally or in his project role.
     * @returns {Promise<void>}
     */
    async delete() {
        await this._client.delete(`/projects/${this.projectId}/autopilot`)
    }

    /**
     * Returns all available alerts for autopilots.
     * @returns {Promise<Array<String>>}
     */
    async availablealerts() {
        const response = await this._client.post('autopilot/availablealerts')
        return response.data()
    }
}