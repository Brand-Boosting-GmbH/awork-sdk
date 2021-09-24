/**
 * Class corresponding to Aworks ProjectTasks Endpoints
 * @category Endpoints
 * @see [ProjectTasks in Awork API Docs](https://openapi.awork.io/#/ProjectTasks)
 */
export class ProjectTemplateTaskStatuses {
    constructor(client: any, projectTemplateId: any);
    _client: any;
    _projectTemplateId: any;
    /**
     * Returns the task status of the project template with the specified id.
     * @param {String} taskStatusId The id of the task status.
     * @returns {Promise<TaskStatus>}
     */
    get(taskStatusId: string): Promise<TaskStatus>;
    /**
     * Returns all task statuses of the project template with the specified id.
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
     * Creates a new task status for the specified project template.
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
     * @typedef {TaskStatusCreateModel} TaskStatusUpdateModel
     */
    /**
     * Updates a task status for the specified project template.
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
     * Deletes the project task status with the specified id.
     * @param {String} taskStatusId The id of the task status.
     * @returns {Promise<void>}
     */
    delete(taskStatusId: string): Promise<void>;
}
import { TaskStatus } from "../model/TaskStatus";
