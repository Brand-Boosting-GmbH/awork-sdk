import { ProjectStatus } from "../model/ProjectStatus"

export class ProjectProjectStatus {
    
    constructor(client, projectId) {
        this._client = client
        this._projectId = projectId
    }

    /**
     * 
     * @param {ProjectStatus} projectStatus
     */
    async create(projectStatus) {
        const response = await this._client.post(`/projects/${this._projectId}/projectstatuses`, projectStatus)
        const data = response.data()
        return new ProjectStatus(data)
    }
}