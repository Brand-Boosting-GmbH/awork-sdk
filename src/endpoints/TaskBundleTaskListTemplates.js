import { TaskListTemplate } from '../model/TaskListTemplate'
import { TaskBundleTaskListTemplatesTaskTemplates } from './TaskBundleTaskListTemplatesTaskTemplates'
import '../globalTypedef'

/**
 * Class corresponding to Aworks tasklisttemplates related part of the TaskBundles Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.io/#/TaskBundles)
 */
export class TaskBundleTaskListTemplates {
    
     /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client 
     * @param {String} taskBundleId The id of the task bundle.
     */
    constructor (client, taskBundleId) {
        /**@private */
        this._client = client
        /**@private */
        this._taskBundleId = taskBundleId
    }

    /**
     * Returns the task list template of the task bundle with the specified id.
     * @param {String} taskListTemplateId The id of the task list template.
     * @returns {Promise<TaskListTemplate>}
     */
    async get (taskListTemplateId) {
        const response = await this._client.get(`/taskbundles/${this._taskBundleId}/tasklisttemplates/${taskListTemplateId}`)
        const data = response.data()
        return new TaskListTemplate(data)
    }

    /**
     * Returns all task list templates of the task bundle with the specified id.
     * @param {ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<TaskListTemplate>>}
     */
    async list (options) {
        const response = await this._client.get(`/taskbundles/${this._taskBundleId}/tasklisttemplates`, options)
        const data = response.data()
        return data.map(d => new TaskListTemplate(d))
    }

    /**
     * @typedef {Object} TaskListTemplateCreateModel
     * @property {String} name The name of the list.
     * @property {Number} order The order of the list.
     */

    /**
     * Creates a new task list template for the task bundle with the specified id.
     * @param {TaskListTemplateCreateModel} taskListTemplate The model to create a new task list template.
     * @returns {Promise<TaskListTemplate>}
     */
    async create (taskListTemplate) {
        const response = await this._client.post(`/taskbundles/${this._taskBundleId}/tasklisttemplates`, taskListTemplate)
        const data = response.data()
        return new TaskListTemplate(data)
    }

    /**
     * @typedef {TaskListTemplateCreateModel} TaskListTemplateUpdateModel
     */

    /**
     * Updates the task list template for the task bundle with the specified id.
     * @param {String} taskListTemplateId The id of the task list template.
     * @param {TaskListTemplateUpdateModel} taskListTemplate The model to update a task list template.
     * @returns {Promise<TaskListTemplate>}
     */
    async update (taskListTemplateId, taskListTemplate) {
        const response = await this._client.put(`/taskbundles/${this._taskBundleId}/tasklisttemplates/${taskListTemplateId}`, taskListTemplate)
        const data = response.data()
        return new TaskListTemplate(data)
    }

    /**
     * Deletes the task list template for the task bundle with the specified id.
     * @param {String} taskListTemplateId The id of the task list template.
     * @returns {Promise<void>}
     */
    async delete (taskListTemplateId) {
        await this._client.delete(`/taskbundles/${this._taskBundleId}/tasklisttemplates/${taskListTemplateId}`)
    }

    /**
     * Updates the order of a task list template in a task bundle.
     * @param {String} taskListTemplateId The id of the task list template.
     * @param {Number} order The order of the list.
     */
    async updateOrder (taskListTemplateId, order) {
        await this._client.post(`/taskbundles/${this._taskBundleId}/tasklisttemplates/${taskListTemplateId}/updateorder`, {order: order})
    }

    taskTemplates (taskListTemplateId) {
        return new TaskBundleTaskListTemplatesTaskTemplates(this._client, this._taskBundleId, taskListTemplateId)
    }

}