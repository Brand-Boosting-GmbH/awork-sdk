import '../globalTypedef'
import { SubTask } from '../model/SubTask'

/**
 * Class corresponding to Aworks UserOtherPrivateTasksSubtasks Endpoints
 * @category Endpoints
 * @see [UserOtherPrivateTasksSubtasks in Awork API Docs](https://openapi.awork.com/#/UserOtherPrivateTasksSubtasks)
 */
export class UserOtherPrivateTasksSubtasks {

    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    * @param {String} subtaskId The id of the subtask.
    * @param {String} userId The id of the user.
    */
    constructor(client, taskId, subtaskId, userId) {
        /** @private */
        this._client = client
        /** @private */
        this._userId = userId
        /** @private */
        this._taskId = taskId
        /** @private */
        this._userPrefix = `/users/${this._userId}`
    }
    /**
     * Returns a subtask for other private tasks with the specified id. The user needs to be the creator of the task.
     * @returns {Promise<SubTask>}
     */
    async get(subtaskId) {
        const response = await this._client.get(`${this._userPrefix}/otherprivatetasks/${this._taskId}/subtasks/${subtaskId}`)
        const data = response.data()
        return new SubTask(data)
    }

    /**
     * Returns the subtask for other private tasks with the specified id. The user needs to be the creator of the task.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<SubTask>>}
     */
    async list(options) {
        const response = await this._client.get(`${this._userPrefix}/otherprivatetasks/${this._taskId}/subtasks`, options)
        const data = response.data()
        return data.map(d => new SubTask(d))
    }
}