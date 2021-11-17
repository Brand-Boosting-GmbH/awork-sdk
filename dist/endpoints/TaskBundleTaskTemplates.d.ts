/**
 * Class corresponding to Aworks tasktemplates related part of the TaskBundles Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.io/#/TaskBundles)
 */
export class TaskBundleTaskTemplates {
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
     * Returns the task template of the task bundle with the specified id.
     * @param {String} taskTemplateId The id of the task template.
     * @returns {Promise<TaskTemplate>}
     */
    get(taskTemplateId: string): Promise<TaskTemplate>;
    /**
     * Returns all task templates of the task bundle with the specified id.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<TaskListTemplate>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<TaskListTemplate>>;
    /**
     * @typedef {Object} TaskTemplateCreateModel
     * @property {String} name The name of the task created from this template.
     * @property {String} description The description of the task created from this template.#
     * @property {Boolean} isPrio Whether the task created from this template will be marked as priority.
     * @property {Number} plannedDuration The expected planned workload of the task created from this template, in seconds.
     * @property {Number} relativeStartOn The relative start date and time of the task created from this template, in seconds, from the moment of creating the task.
     * @property {Number} relaticeDueOn The relative due date and time of the task created from this template, in seconds, from the moment of creating the task.
     * @property {String} typeOfWorkId The id of the type of work of this task.
     * @property {String} assignedUserId The id of the assigned user of this task.
     * @property {String} assignedRoleId The id of the assigned role of this task.
     */
    /**
     * Creates a new task template for the task bundle with the specified id.
     * @param {TaskTemplateCreateModel} taskTemplate The model used to create a new task template.
     * @returns {Promise<TaskTemplate>}
     */
    create(taskTemplate: {
        /**
         * The name of the task created from this template.
         */
        name: string;
        /**
         * The description of the task created from this template.#
         */
        description: string;
        /**
         * Whether the task created from this template will be marked as priority.
         */
        isPrio: boolean;
        /**
         * The expected planned workload of the task created from this template, in seconds.
         */
        plannedDuration: number;
        /**
         * The relative start date and time of the task created from this template, in seconds, from the moment of creating the task.
         */
        relativeStartOn: number;
        /**
         * The relative due date and time of the task created from this template, in seconds, from the moment of creating the task.
         */
        relaticeDueOn: number;
        /**
         * The id of the type of work of this task.
         */
        typeOfWorkId: string;
        /**
         * The id of the assigned user of this task.
         */
        assignedUserId: string;
        /**
         * The id of the assigned role of this task.
         */
        assignedRoleId: string;
    }): Promise<TaskTemplate>;
    /**
     * @typedef {TaskTemplateCreateModel} TaskTemplateUpdateModel
     */
    /**
     * Updates the task template for the task bundle with the specified id.
     * @param {String} taskTemplateId The if of the task template.
     * @param {TaskTemplateUpdateModel} taskTemplate The model to update a task template.
     * @returns {Promise<TaskTemplate>}
     */
    update(taskTemplateId: string, taskTemplate: {
        /**
         * The name of the task created from this template.
         */
        name: string;
        /**
         * The description of the task created from this template.#
         */
        description: string;
        /**
         * Whether the task created from this template will be marked as priority.
         */
        isPrio: boolean;
        /**
         * The expected planned workload of the task created from this template, in seconds.
         */
        plannedDuration: number;
        /**
         * The relative start date and time of the task created from this template, in seconds, from the moment of creating the task.
         */
        relativeStartOn: number;
        /**
         * The relative due date and time of the task created from this template, in seconds, from the moment of creating the task.
         */
        relaticeDueOn: number;
        /**
         * The id of the type of work of this task.
         */
        typeOfWorkId: string;
        /**
         * The id of the assigned user of this task.
         */
        assignedUserId: string;
        /**
         * The id of the assigned role of this task.
         */
        assignedRoleId: string;
    }): Promise<TaskTemplate>;
    /**
     * Deletes the task template for the task bundle with the specified id.
     * @param {String} taskTemplateId The id of the task template.
     * @returns {Promise<void>}
     */
    delete(taskTemplateId: string): Promise<void>;
}
import { TaskTemplate } from "../model/TaskTemplate";
