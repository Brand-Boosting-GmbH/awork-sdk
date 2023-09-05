import { Task } from "../model/Task"

/**
 * Class corresponding to Aworks tasks related part of the Tasklists Endpoints
 * @category Endpoints
 * @see [Tasklists in Awork API Docs](https://openapi.awork.com/#/Tasklists)
 */
export class TaskListTasks {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client 
     * @param {String} entityName Currently only 'projects' supported.
     * @param {String} entityId The id of the entity. (projectId)
     * @param {String} taskListId The id of the task list.
     */
    constructor(client, entityName, entityId, taskListId) {
        /**@private */
        this._client = client
        /**@private */
        this._entityName = entityName
        /**@private */
        this._entityId = entityId
        /**@private */
        this._taskListId = taskListId
    }

    /**
     * Returns the task with the specified id in the specified task list.
     * To get a project task from the project task list, the user needs read permissions on the project-planning-data feature or the current user must be assigned to the task with the specified id. For a private task list no permissions are required.
     * @param {String} taskId The id of the task.
     * @returns {Promise<Task>}
     */
    async get(taskId) {
        const response = await this._client.get(`/${this._entityName}/${this._entityId}/tasklists/${this._taskListId}/tasks/${taskId}`)
        const data = response.data()
        return new Task(data)
    }

    /**
     * Updates the order of a task in a task list.
     * To update the order of tasks in a project task list, the user needs manage permissions on the project-planning-data feature.
     * @param {String} taskId The id of the task.
     * @param {Number} order The order of the task in the list.
     * @returns {Promise<void>}
     */
    async updateOrder(taskId, order) {
        const response = await this._client.post(`/${this._entityName}/${this._entityId}/tasklists/${this._taskListId}/tasks/${taskId}`, { order: order })
        return response.data()
    }

}