import '../globalTypedef'
import { SubTask } from '../model/SubTask'
import { ProjectSubtasks } from './ProjectSubtasks'
import { UserPrivateTasksSubtasks } from './UserPrivateTasksSubtasks'
import { UserOtherPrivateTasksSubtasks } from './UserOtherPrivateTasksSubtasks'

/**
 * Class corresponding to Aworks SubTasks Endpoints
 * @category Endpoints
 * @see [SubTasks in Awork API Docs](https://openapi.awork.com/#/SubTasks)
 */
export class SubTasks {

    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    */
    constructor(client, taskId) {
        /** @private */
        this._client = client
        /** @private */
        this._taskId = taskId
    }

    /**
     * Returns a subtask for a task with the specified id. The required permissions depend on the base type of the task. If the task is a project task, either 'read' permissions on the 'project-planning-data' feature are required or the user needs to be assigned. For a user's private task, no special permissions are required.
     * @param {String} subtaskId The id of the subtask.
     * @returns {Promise<SubTask>}
     */
    async get(subtaskId) {
        const response = await this._client.get(`/tasks/${this._taskId}/subtasks/${subtaskId}`)
        const data = response.data()
        return new SubTask(data)
    }

    /**
     * Returns the subtasks for a task with the specified id.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<SubTask>>}
     */
    async list(options) {
        const response = await this._client.get(`/tasks/${this._taskId}/subtasks`, options)
        const data = response.data()
        return data.map(d => new SubTask(d))
    }

    /**
     * @typedef {Object} SubTaskCreateModel
     * @property {Boolean} isDone Whether the check list item is done.
     * @property {String} name The name of the check list item.
     * @property {Number} order The order of the check list item.
     */

    /**
     * Creates a subtask for a task with the specified id. The required permissions depend on the base type of the task. If the task is a project task, either 'write' permissions on the 'project-master-data' feature are required or the user needs to be assigned. For a user's private task, no special permissions are required.
     * @param {SubTaskCreateModel} subTask The model to create the subtask.
     * @returns {Promise<SubTask>}
     */
    async create(subTask) {
        const response = await this._client.post(`/tasks/${this._taskId}/subtasks`, subTask)
        const data = response.data()
        return new SubTask(data)
    }

    /**
     * @typedef {SubTaskCreateModel} SubTaskUpdateModel
     */

    /**
     * Updates a subtask for a task with the specified id. The required permissions depend on the base type of the task. If the task is a project task, either 'write' permissions on the 'project-master-data' feature are required or the user needs to be assigned. For a user's private task, no special permissions are required.
     * @param {String} subtaskId The id of the subtask.
     * @param {SubTaskUpdateModel} subTask The model to update the subtask.
     * @returns {Promise<SubTask>} 
     */
    async update(subtaskId, subTask) {
        const response = await this._client.put(`/tasks/${this._taskId}/subtasks/${subtaskId}`, subTask)
        const data = response.data()
        return new SubTask(data)
    }

    /**
     * Deletes a subtask for a task with the specified id. The required permissions depend on the base type of the task. If the task is a project task, either 'write' permissions on the 'project-master-data' feature are required or the user needs to be assigned. For a user's private task, no special permissions are required.
     * @param {String} subtaskId The id of the subtask.
     * @returns {Promise<void>}
     */
    async delete(subtaskId) {
        await this._client.delete(`/tasks/${this._taskId}/subtasks/${subtaskId}`)
    }

    /**
     * Returns the {@link ProjectsSubtasks} Endpoint with the specified subtask id.
     * @param {String} subtaskId The id of the subtask.
     * @returns {ProjectSubtasks}
     */
    projectSubtasks(subtaskId) {
        return new ProjectSubtasks(this._client, subtaskId)
    }

    /**
     * Returns the {@link UserPrivateTasksSubtasks} Endpoint with the specified subtask id.
     * @param {String} subtaskId The id of the subtask.
     * @returns {UserPrivateTasksSubtasks}
     */
    userPrivateTasksSubtasks(subtaskId) {
        return new UserPrivateTasksSubtasks(this._client, subtaskId)
    }

    /**
     * Returns the {@link UserOtherPrivateTasksSubtasks} Endpoint with the specified subtask id.
     * @param {String} subtaskId The id of the subtask.
     * @returns {UserOtherPrivateTasksSubtasks}
     */
    userOtherPrivateTasksSubtasks(subtaskId) {
        return new UserOtherPrivateTasksSubtasks(this._client, subtaskId)
    }
}