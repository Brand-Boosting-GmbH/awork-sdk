import '../globalTypedef'
import { SubTask } from '../model/SubTask'

/**
 * Class corresponding to Aworks UserSubtasks Endpoints
 * @category Endpoints
 * @see [UserSubtasks in Awork API Docs](https://openapi.awork.io/#/UserSubtasks)
 */
export class UserSubtasks {

     /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     * @param {String} taskId The id of the task.
     * @param {String} subtaskId The id of the subtask.
     * @param {String} userId The id of the user.
     */
    constructor (client, taskId, subtaskId, userId) {
        /** @private */
        this._client = client
        /** @private */
        this._userId = userId
        /** @private */
        this._taskId = taskId
        /** @private */
        this._subtaskId = subtaskId
    }

    /**
     * Returns a subtask for a private task with the specified id. The user needs to be assigned to the task.
     * @returns {Promise<SubTask>}
     */
    async get () {
        const response = await this._client.get(`/users/${this._userId}/privatetasks/${this._taskId}/subtasks/${this._subtaskId}`)
        const data = response.data()
        return new SubTask(data)
    }

    /**
     * Returns the subtasks for a private task with the specified id. The user needs to be assigned to the task.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<SubTask>}
     */
    async list (options) {
        const response = await this._client.get(`/users/${this._userId}/privatetasks/${this._taskId}/subtasks`, options)
        const data = response.data()
        return data.map(d => new SubTask(d))
    }

    /**
     * Returns a subtask for other private tasks with the specified id. The user needs to be the creator of the task.
     * @returns {Promise<SubTask>}
     */
     async get () {
        const response = await this._client.get(`/users/${this._userId}/otherprivatetasks/${this._taskId}/subtasks/${this._subtaskId}`)
        const data = response.data()
        return new SubTask(data)
    }

    /**
     * Returns the subtask for other private tasks with the specified id. The user needs to be the creator of the task.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<SubTask>>}
     */
    async list (options) {
        const response = await this._client.get(`/users/${this._userId}/otherprivatetasks/${this._taskId}/subtasks`, options)
        const data = response.data()
        return data.map(d => new SubTask(d))
    }
}