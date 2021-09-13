import { ProjectStatus } from "../model/ProjectStatus"
import '../globalTypedef'


/**
 * Class corresponding to Aworks ProjectStatuses Endpoints
 * @category Endpoints
 * @see [ProjectStatuses in Awork API Docs](https://openapi.awork.io/#/ProjectStatuses)
 */
export class ProjectStatuses {

     /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client 
     */
    constructor (client) {
        /** @private */
        this._client = client
    }


    /**
     * Returns the project status with the specified id.
     * @param {String} projectStatusId The id of the project status.
     * @returns {Array<Promise<ProjectStatus>>}
     */
    async get (projectStatusId) {
        const response = await this._client.get(`/projectstatuses/${projectStatusId}`)
        const data = response.data()
        return new ProjectStatus(data)
    }

    /**
     * Returns all project statuses.
     * @param {ListOptions} [options] Pagination and filtering options.
     * @returns {Array<Promise<ProjectStatus>>}
     */
    async list (options) {
        const response = await this._client.get('/projectstatuses', options)
        const data = response.data()
        return data.map(d => new ProjectStatus(d))
    }

    /**
     * Creates a new project status. For this operation, a projectTemplateId is required.
     * @param {String} projectTemplateId The id of the project template.
     * @param {ProjectStatus} projectStatus 
     * @returns {Promise<ProjectStatus>}
     */
    async create (projectTemplateId, projectStatus) {
        const response = await this._client.post(`/projecttemplates/${projectTemplateId}/projectstatuses`, projectStatus)
        const data = response.data()
        return new ProjectStatus(data)
    }

    /**
     * Updates the project status with the specified id.
     * @param {String} projectStatusId
     * @param {ProjectStatus} projectStatus 
     * @returns {Promise<ProjectStatus>}
     */
    async update (projectStatusId, projectStatus) {
        const response = await this._client.put(`/projectstatuses/${projectStatusId}`, projectStatus)
        const data = response.data()
        return new ProjectStatus(data)
    }

    /**
     * Deletes the project status with the specified id.
     * @param {String} projectStatusId
     */
    async delete (projectStatusId) {
        await this._client.post(`/projectstatuses/${projectStatusId}/delete`)
    }

    /**
     * Archives or unarchives the project status with the specified id.
     * @param {String} projectStatusId 
     * @param {Boolean} archivedStatus 
     */
    async archive (projectStatusId, archivedStatus = true) {
        await this._client.post(`/projectstatuses/${projectStatusId}/setarchived`, {'isArchived': archivedStatus})
    }
}