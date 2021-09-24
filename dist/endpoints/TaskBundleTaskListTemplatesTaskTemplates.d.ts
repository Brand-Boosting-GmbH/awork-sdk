/**
 * Class corresponding to Aworks tasktemplates related part of the TaskBundles - TaskListTemplate Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.io/#/TaskBundles)
 */
export class TaskBundleTaskListTemplatesTaskTemplates {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskBundleId The id of the task bundle.
    * @param {String} taskListTemplateId The id of the task list template.
    */
    constructor(client: import('../client/index').Client, taskBundleId: string, taskListTemplateId: string);
    /**@private */
    private _client;
    /**@private */
    private _taskBundleId;
    /**@private */
    private _taskListTemplateId;
    /**
     * Returns the task template with the specified id in the specified task list template.
     * @param {String} taskTemplateId The id of the task.
     * @returns {Promise<TaskTemplate>}
     */
    get(taskTemplateId: string): Promise<TaskTemplate>;
    /**
     * Returns the task templates in the specified task list template.
     * @param {import('../global').ListOptions} options Pagination and filtering options.
     * @returns {Promise<Array<TaskTemplate>>}
     */
    list(options: import('../global').ListOptions): Promise<Array<TaskTemplate>>;
    /**
     * To update the order of tasks in a project task list, the user needs manage permissions on the project-planning-data feature.
     * @param {String} taskTemplateId The id of the task.
     * @param {Number} order The order of the task in the list.
     * @returns {Promise<void>}
     */
    updateOrder(taskTemplateId: string, order: number): Promise<void>;
    /**
     * @typedef {Object} TaskTemplatesToAdd
     * @property {String} taskTemplateId The id of the task template.
     * @property {Number} order The order of the task template, unique within the task list template.
     */
    /**
     * Adds the task templates to the task list template with the specified id.
     * @param {TaskTemplatesToAdd} taskTemplatesToAdd The ids of the task templates to add to the list.
     * @returns {Promise<Array<Object>>}
     */
    addTaskTemplates(taskTemplatesToAdd: {
        /**
         * The id of the task template.
         */
        taskTemplateId: string;
        /**
         * The order of the task template, unique within the task list template.
         */
        order: number;
    }): Promise<Array<any>>;
    /**
     * Removes the task templates from the task list template with the specified id.
     * @param {Array<String>} taskTemplatesToRemove The ids of the tasks to remove from the list.
     * @returns {Promise<void>}
     */
    removeTaskTemplates(taskTemplatesToRemove: Array<string>): Promise<void>;
}
import { TaskTemplate } from "../model/TaskTemplate";
