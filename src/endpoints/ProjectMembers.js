import { ProjectMember } from "../model/ProjectMember"

export class ProjectMembers {
    constructor(client, projectId) {
        this._client = client
        this._projectId = projectId
    }

    async list() {
        const response = await this._client.get(`projects/${this._projectId}/members`)
        const data = response.data()
        return data.map(d => new ProjectMember(d))
    }
}