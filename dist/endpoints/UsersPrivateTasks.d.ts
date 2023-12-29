/**
 * Class corresponding to Aworks UsersPrivateTasks Endpoints
 * @category Endpoints
 * @see [UsersPrivateTasks in Awork API Docs](https://openapi.awork.com/#/UsersPrivateTasks)
 */
export class UsersPrivateTasks {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    * @param {String} userId The id of the user.
    */
    constructor(client: import('../client/index').Client, userId: string);
    /** @private */
    private _client;
    /** @private */
    private _userId;
    /** @private */
    private _userPrefix;
    /**
     * Returns the private task with the specified id.
     * @returns {Promise<Task>}
     */
    get(taskId: any): Promise<Task>;
    /**
     * Returns all private tasks of the user with the specified id.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<Task>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<Task>>;
    /**
     * Returns the task statuses for private tasks.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<PrivateTasksTaskStatus>>}
     */
    taskStatuses(options?: import('../global').ListOptions): Promise<Array<PrivateTasksTaskStatus>>;
}
import { Task } from "../model/Task";
import { PrivateTasksTaskStatus } from "../model/PrivateTasksTaskStatus";
