import { Task } from '../model/Task'
import '../globalTypedef'


export class ProjectTasks {
    constructor (client, projectId) {
        this._client = client
        this._projectId = projectId
    }

    /**
     * Returns the project task with the specified id. To get the task with the specified id 'read' permissions on the feature project-planning-data are necessary. But the assignee has also the permissions to get the task.
     * @param {String} taskId The id of the task.
     * @returns {Promise<Task>}
     */
    async get (taskId) {
        const response = await this._client.get(`/projects/${this._projectId}/projecttasks/${taskId}`)
        const data = response.data()
        return new Task(data)
    }

    /**
     * Returns all project tasks of the project with the specified id. To get the task with the specified id 'read' permissions on the feature project-planning-data are necessary. Otherwise returns only assigned tasks.
     * @param {ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<Task>>}
     */
     async list (options) {
        const response = await this._client.get(`/projects/${this._projectId}/projecttasks`, options)
        const data = response.data()
        return data.map(d => new Task(d))
    }
}