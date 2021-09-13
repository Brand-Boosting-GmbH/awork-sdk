import { TaskListTemplate } from '../model/TaskListTemplate'
import '../globalTypedef'

/**
 * Class corresponding to Aworks tasklisttemplates related part of the TaskBundles Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.io/#/TaskBundles)
 */
export class TaskListTemplates {
    
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
     * @param {String} taskListTemplateId 
     * @returns {Promise<TaskListTemplate>}
     */
    async get (taskListTemplateId) {
        const response = await this._client.get(`/taskbundles/${this._taskBundleId}/tasklisttemplates/${taskListTemplateId}`)
        const data = response.data()
        return new TaskListTemplate(data)
    }

    /**
     * Returns all task list templates of the task bundle with the specified id.
     * @param {ListOptions} options 
     * @returns {Promise<Array<TaskListTemplate>>}
     */
    async list (options) {
        const response = await this._client.get(`/taskbundles/${this._taskBundleId}/tasklisttemplates`, options)
        const data = response.data()
        return data.map(d => new TaskListTemplate(d))
    }


}