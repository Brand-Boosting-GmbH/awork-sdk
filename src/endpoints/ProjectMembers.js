import { ProjectMember } from "../model/ProjectMember"

export class ProjectMembers {
    constructor(client, projectId) {
        this._client = client
        this._projectId = projectId
    }


    async get(userId) {
        const list = await this.list()
        const member = list.find(l => l.userId === userId)
        return new ProjectMember(member)
    }

    /**
     * 
     * @returns {Promise<Array<ProjectMember>>}
     */
    async list() {
        const response = await this._client.get(`projects/${this._projectId}/members`)
        const data = response.data()
        return data.map(d => new ProjectMember(d))
    }

    /**
     * 
     * @param {ProjectMember} projectMember 
     * @returns {Promise<ProjectMember>}
     */
    async create(projectMember) {
        const response = await this._client.post(`projects/${this._projectId}/addprojectmember`, projectMember)
        const data = response.data()
        return new ProjectMember(data)
    }

    /**
     * 
     * @param {ProjectMember} projectMember 
     * @returns {Promise<ProjectMember>}
     */
    async update(projectMember) {
        const response = await this._client.post(`projects/${this.projectId}/updateprojectmember`, projectMember)
        const data = response.data()
        return new ProjectMember(data)
    }

    /**
     * 
     * @param {String} projectMemberId  
     */
    async delete(projectMemberId) {
        await this._client.post(`projects/${this.projectId}/removeprojectmember`, {userId: projectMemberId})
    }
}