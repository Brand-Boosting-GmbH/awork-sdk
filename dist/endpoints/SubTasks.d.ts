/**
 * Class corresponding to Aworks SubTasks Endpoints
 * @category Endpoints
 * @see [SubTasks in Awork API Docs](https://openapi.awork.io/#/SubTasks)
 */
export class SubTasks {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    */
    constructor(client: import('../client/index').Client, taskId: string);
    /** @private */
    private _client;
    /** @private */
    private _taskId;
    /**
     * Returns a subtask for a task with the specified id. The required permissions depend on the base type of the task. If the task is a project task, either 'read' permissions on the 'project-planning-data' feature are required or the user needs to be assigned. For a user's private task, no special permissions are required.
     * @param {String} subtaskId The id of the subtask.
     * @returns {Promise<SubTask>}
     */
    get(subtaskId: string): Promise<SubTask>;
    /**
     * Returns the subtasks for a task with the specified id.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<SubTask>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<SubTask>>;
    /**
     * @typedef {Object} SubTaskCreateModel
     * @property {Boolean} isDone Whether the check list item is done.
     * @property {String} name The name of the check list item.
     * @property {Number} order The order of the check list item.
     */
    /**
     * Creates a subtask for a task with the specified id. The required permissions depend on the base type of the task. If the task is a project task, either 'write' permissions on the 'project-master-data' feature are required or the user needs to be assigned. For a user's private task, no special permissions are required.
     * @param {SubTaskCreateModel} subTask The model to create the subtask.
     * @returns {Promise<SubTask>}
     */
    create(subTask: {
        /**
         * Whether the check list item is done.
         */
        isDone: boolean;
        /**
         * The name of the check list item.
         */
        name: string;
        /**
         * The order of the check list item.
         */
        order: number;
    }): Promise<SubTask>;
    /**
     * @typedef {SubTaskCreateModel} SubTaskUpdateModel
     */
    /**
     * Updates a subtask for a task with the specified id. The required permissions depend on the base type of the task. If the task is a project task, either 'write' permissions on the 'project-master-data' feature are required or the user needs to be assigned. For a user's private task, no special permissions are required.
     * @param {String} subtaskId The id of the subtask.
     * @param {SubTaskUpdateModel} subTask The model to update the subtask.
     * @returns {Promise<SubTask>}
     */
    update(subtaskId: string, subTask: {
        /**
         * Whether the check list item is done.
         */
        isDone: boolean;
        /**
         * The name of the check list item.
         */
        name: string;
        /**
         * The order of the check list item.
         */
        order: number;
    }): Promise<SubTask>;
    /**
     * Deletes a subtask for a task with the specified id. The required permissions depend on the base type of the task. If the task is a project task, either 'write' permissions on the 'project-master-data' feature are required or the user needs to be assigned. For a user's private task, no special permissions are required.
     * @param {String} subtaskId The id of the subtask.
     * @returns {Promise<void>}
     */
    delete(subtaskId: string): Promise<void>;
    /**
     * Returns the {@link ProjectsSubtasks} Endpoint with the specified subtask id.
     * @param {String} subtaskId The id of the subtask.
     * @returns {ProjectSubtasks}
     */
    projectSubtasks(subtaskId: string): ProjectSubtasks;
    /**
     * Returns the {@link UserPrivateTasksSubtasks} Endpoint with the specified subtask id.
     * @param {String} subtaskId The id of the subtask.
     * @returns {UserPrivateTasksSubtasks}
     */
    userPrivateTasksSubtasks(subtaskId: string): UserPrivateTasksSubtasks;
    /**
     * Returns the {@link UserOtherPrivateTasksSubtasks} Endpoint with the specified subtask id.
     * @param {String} subtaskId The id of the subtask.
     * @returns {UserOtherPrivateTasksSubtasks}
     */
    userOtherPrivateTasksSubtasks(subtaskId: string): UserOtherPrivateTasksSubtasks;
}
import { SubTask } from "../model/SubTask";
import { ProjectSubtasks } from "./ProjectSubtasks";
import { UserPrivateTasksSubtasks } from "./UserPrivateTasksSubtasks";
import { UserOtherPrivateTasksSubtasks } from "./UserOtherPrivateTasksSubtasks";
