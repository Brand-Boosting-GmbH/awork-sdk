/**
 * Class corresponding to Aworks tasklisttemplates related part of the TaskBundles Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.com/#/TaskBundles)
 */
export class TaskListTemplates {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskBundleId The id of the task bundle.
    */
    constructor(client: import('../client/index').Client, taskBundleId: string);
    /**@private */
    private _client;
    /**@private */
    private _taskBundleId;
    /**
     * Returns the task list template of the task bundle with the specified id.
     * @param {String} taskListTemplateId
     * @returns {Promise<TaskListTemplate>}
     */
    get(taskListTemplateId: string): Promise<TaskListTemplate>;
    /**
     * Returns all task list templates of the task bundle with the specified id.
     * @param {ListOptions} options
     * @returns {Promise<Array<TaskListTemplate>>}
     */
    list(options: ListOptions): Promise<Array<TaskListTemplate>>;
}
import { TaskListTemplate } from "../model/TaskListTemplate";
