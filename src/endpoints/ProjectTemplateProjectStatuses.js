import { ProjectStatus } from "../model/ProjectStatus"

/**
 * Class corresponding to Aworks projecttemplates related part of the ProjectStatuses Endpoints
 * @category Endpoints
 * @see [ProjectStatuses in Awork API Docs](https://openapi.awork.io/#/ProjectStatuses)
 */
export class ProjectTemplateProjectStatuses {
    
     /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client 
     * @param {String} projectTemplateId The id of the project.
     */
    constructor(client, projectTemplateId) {
        /** @private */
        this._client = client
        /** @private */
        this._projectTemplateId = projectTemplateId
    }

    /**
     * @typedef {Object} ProjectStatusCreateModel
     * @property {String} name The name of the project status. Required.
     * @property {('progress'|'not-started'|'closed'|'stuck')} type Specifies the general type of this project status. Required.
     */

    /**
     * Creates a new project status for a project.
     * @param {ProjectStatusCreateModel} projectStatus The object to create a project status with.
     * @returns {Promise<ProjectStatus>}
     */
    async create(projectStatus) {
        const response = await this._client.post(`/projecttemplates/${this._projectTemplateId}/projectstatuses`, projectStatus)
        const data = response.data()
        return new ProjectStatus(data)
    }
}