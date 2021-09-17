/**
 * Class corresponding to Aworks UsersPrivateTasks Endpoints
 * @category Endpoints
 * @see [UsersPrivateTasks in Awork API Docs](https://openapi.awork.io/#/UsersPrivateTasks)
 */
export class UsersPrivateTasks {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    * @param {String} userId The id of the user.
    */
    constructor(client: import('../client/index').Client, taskId: string, userId: string);
    /** @private */
    private _client;
    /** @private */
    private _userId;
    /** @private */
    private _taskId;
    /** @private */
    private _userPrefix;
    /**
     * Returns the private task with the specified id.
     * @returns {Promise<Task>}
     */
    get(): Promise<Task>;
    /**
     * Returns all private tasks of the user with the specified id.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<Task>>}
     */
    list(options?: ListOptions): Promise<Array<Task>>;
    /**
     * Returns the task statuses for private tasks.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<PrivateTasksTaskStatus>>}
     */
    taskStatuses(options?: ListOptions): Promise<Array<PrivateTasksTaskStatus>>;
}
import { Task } from "../model/Task";
import { PrivateTasksTaskStatus } from "../model/PrivateTasksTaskStatus";
