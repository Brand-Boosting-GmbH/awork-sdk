/**
 * Class corresponding to Aworks ProjectTasks Endpoints
 * @category Endpoints
 * @see [ProjectTasks in Awork API Docs](https://openapi.awork.io/#/ProjectTasks)
 */
export class ProjectTaskStatuses {
    constructor(client: any, projectId: any);
    _client: any;
    _projectId: any;
    /**
     * Returns the task status of the project with the specified id. To get the task status, the user need at least read permissions on feature Project-Master-Data.
     * @param {String} taskStatusId The id of the task status.
     * @returns {Promise<TaskStatus>}
     */
    get(taskStatusId: string): Promise<TaskStatus>;
    /**
     * Returns all task statuses of the project with the specified id. To get the task statuses, the user need at least read permissions on feature Project-Master-Data.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<TaskStatus>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<TaskStatus>>;
    /**
     * @typedef {Object} TaskStatusCreateModel
     * @property {String} name The name of the task status.
     * @property {('todo'|'progress'|'review'|'stuck'|'done')} type Specifies the general type of this task status.
     * @property {Number} [order] The order of the task status. If it is null, the task status will be appended after the last task status.
     * @property {import('../global').Icon} [icon] The icon of the task status.
     *
     */
    /**
     * Creates a new task status for the specified project. To create the task status, the user need write permissions on feature Project-Planning.
     * @param {TaskStatusCreateModel} taskStatus The model to create a task status.
     * @returns {Promise<TaskStatus>}
     */
    create(taskStatus: {
        /**
         * The name of the task status.
         */
        name: string;
        /**
         * Specifies the general type of this task status.
         */
        type: ('todo' | 'progress' | 'review' | 'stuck' | 'done');
        /**
         * The order of the task status. If it is null, the task status will be appended after the last task status.
         */
        order?: number;
        /**
         * The icon of the task status.
         */
        icon?: import('../global').Icon;
    }): Promise<TaskStatus>;
    /**
     * Creates new task statuses from the project template for the the specified project.
     * @param {String} projectTemplateId The id of the project template.
     * @returns {Promise<void>}
     */
    createFromTemplate(projectTemplateId: string): Promise<void>;
    /**
     * @typedef {TaskStatusCreateModel} TaskStatusUpdateModel
     */
    /**
     * Updates a task status for the specified project. To update the task status, the user need write permissions on feature Project-Master-Data.
     * @param {String} taskStatusId The id of the task status.
     * @param {TaskStatusUpdateModel} taskStatus The model to update a task status.
     */
    update(taskStatusId: string, taskStatus: {
        /**
         * The name of the task status.
         */
        name: string;
        /**
         * Specifies the general type of this task status.
         */
        type: ('todo' | 'progress' | 'review' | 'stuck' | 'done');
        /**
         * The order of the task status. If it is null, the task status will be appended after the last task status.
         */
        order?: number;
        /**
         * The icon of the task status.
         */
        icon?: import('../global').Icon;
    }): Promise<TaskStatus>;
    /**
     * Deletes the project's task status with the specified id. To delete the task status, the user need write permissions on feature Project-Master-Data. If the status still has related tasks, it's necessary to provide another task status to move the tasks to.
     * @param {String} taskStatusId The id of the task status.
     * @returns {Promise<void>}
     */
    delete(taskStatusId: string): Promise<void>;
}
import { TaskStatus } from "../model/TaskStatus";
