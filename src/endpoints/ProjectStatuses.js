import { ProjectStatus } from "../model/ProjectStatus"

export class ProjectStatuses {

    constructor (client, projectId, projectTemplateId ="") {
        this._client = client
        this._projectId = projectId
        this._projectTemplateId = projectTemplateId
    }


    /**
     * Returns all project statuses of a specified project.
     * @param {String} projectId 
     * @returns {Array<Promise<ProjectStatus>>}
     */
    async get (projectStatusId) {
        const list = await this.list()
        return list.filter(l => l.projectId === projectId)
    }

    /**
     * Returns all project statuses.
     * @returns {Array<Promise<ProjectStatus>>}
     */
    async list () {
        const response = await this._client.get('/projectstatuses')
        const data = response.data()
        return data.map(d => new ProjectStatus(d)).filter(p => p.projectId === this._projectId)
    }

    //async update
}