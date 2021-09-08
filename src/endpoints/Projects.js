import { Project } from "../model/Project"
import { ProjectMembers } from "./ProjectMembers"
import { EntityFiles } from "./EntityFiles"
import { ProjectProjectStatus } from "./ProjectProjectStatus"


export class Projects {

    constructor(client) {
        this._client = client
    }

    async get(projectId) {
        const response = await this._client.get(`/projects/${projectId}`)
        const data = response.data()
        return new Project(data)
    }

    async list() {
        const response = await this._client.get(`/projects`)
        const data = response.data()
        return data.map(d => new Project(d))
    }

    /**
     * 
     * @param {Project} project 
     */
    async create(project) {
        const response = await this._client.post(`/projects`, project)
        const data = response.data()
        return new Project(data)
    }

    /**
     * 
     * @param {Project} project 
     */
    async update(project) {
        const response = await this._client.put(`/projects`, project)
        const data = response.data()
        return new Project(data)
    }

    

    /**
     * 
     * @param {String} projectId 
     * @returns 
     */
    async delete(projectId) {
        await this._client.post(`/projects/${projectId}/`, options)
    }

    members(projectId) {
        return new ProjectMembers(this._client, projectId)
    }

    files (projectId) { //projects = entityName, projectId = entityId
        return new EntityFiles(this._client, 'projects', projectId)
    }

    projectStatus (projectId) {
        return new ProjectProjectStatus(this._client, projectId)
    }



}