import { ProjectStatus } from "../model/ProjectStatus"

export class ProjectStatuses {

    constructor (client, projectTemplateId ="") {
        this._client = client
        this._projectTemplateId = projectTemplateId
    }


    async get (projectId) {
        const list = await this.list()
        return list.filter(l => l.projectId === projectId)
    }
    
    async list () {
        const response = await this._client.get('/projectstatuses')
        const data = response.data()
        return data.map(d => new ProjectStatus(d))
    }
}