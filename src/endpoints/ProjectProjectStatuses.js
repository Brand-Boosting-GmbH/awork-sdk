import { ProjectStatus } from "../model/ProjectStatus"

/**
 * Class corresponding to Aworks project related part of the ProjectStatuses Endpoints
 * @category Endpoints
 * @see [ProjectStatuses in Awork API Docs](https://openapi.awork.com/#/ProjectStatuses)
 */
export class ProjectProjectStatuses {

    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client 
    * @param {String} projectId The id of the project.
    */
    constructor(client, projectId) {
        /** @private */
        this._client = client
        /** @private */
        this._projectId = projectId
    }

    /**
     * @typedef {Object} ProjectStatusCreateModel
     * @property {String} name The name of the project status. Required.
     * @property {('progress'|'not-started'|'closed'|'stuck')} type Specifies the general type of this project status. Required.
     */

    /**
     * Creates a new project status for a project.
     * @param {ProjectStatusCreateModel} projectStatus
     * @returns {Promise<ProjectStatus>}
     */
    async create(projectStatus) {
        const response = await this._client.post(`/projects/${this._projectId}/projectstatuses`, projectStatus)
        const data = response.data()
        return new ProjectStatus(data)
    }
}