/**
 * Class corresponding to Aworks tasklisttemplates related part of the TaskBundles Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.com/#/TaskBundles)
 */
export class TaskBundleTaskListTemplates {
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
     * @param {String} taskListTemplateId The id of the task list template.
     * @returns {Promise<TaskListTemplate>}
     */
    get(taskListTemplateId: string): Promise<TaskListTemplate>;
    /**
     * Returns all task list templates of the task bundle with the specified id.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<TaskListTemplate>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<TaskListTemplate>>;
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
    create(taskListTemplate: {
        /**
         * The name of the list.
         */
        name: string;
        /**
         * The order of the list.
         */
        order: number;
    }): Promise<TaskListTemplate>;
    /**
     * @typedef {TaskListTemplateCreateModel} TaskListTemplateUpdateModel
     */
    /**
     * Updates the task list template for the task bundle with the specified id.
     * @param {String} taskListTemplateId The id of the task list template.
     * @param {TaskListTemplateUpdateModel} taskListTemplate The model to update a task list template.
     * @returns {Promise<TaskListTemplate>}
     */
    update(taskListTemplateId: string, taskListTemplate: {
        /**
         * The name of the list.
         */
        name: string;
        /**
         * The order of the list.
         */
        order: number;
    }): Promise<TaskListTemplate>;
    /**
     * Deletes the task list template for the task bundle with the specified id.
     * @param {String} taskListTemplateId The id of the task list template.
     * @returns {Promise<void>}
     */
    delete(taskListTemplateId: string): Promise<void>;
    /**
     * Updates the order of a task list template in a task bundle.
     * @param {String} taskListTemplateId The id of the task list template.
     * @param {Number} order The order of the list.
     */
    updateOrder(taskListTemplateId: string, order: number): Promise<void>;
    /**
     * Returns the {@link TaskBundleTaskListTemplatesTaskTemplates} Endpoint with the specified task bundle Id and task list template Id.
     * @param {String} projectId The id of the task list template.
     * @returns {ProjectProjectStatus}
     */
    taskTemplates(taskListTemplateId: any): ProjectProjectStatus;
}
import { TaskListTemplate } from "../model/TaskListTemplate";
