/**
 * Class corresponding to Aworks UserPrivateTasksSubtasks Endpoints
 * @category Endpoints
 * @see [UserPrivateTasksSubtasks in Awork API Docs](https://openapi.awork.io/#/UserPrivateTasksSubtasks)
 */
export class UserPrivateTasksSubtasks {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    * @param {String} subtaskId The id of the subtask.
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
     * Returns a subtask for a private task with the specified id. The user needs to be assigned to the task.
     * @returns {Promise<SubTask>}
     */
    get(subtaskId: any): Promise<SubTask>;
    /**
     * Returns the subtasks for a private task with the specified id. The user needs to be assigned to the task.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<SubTask>}
     */
    list(options?: import('../global').ListOptions): Promise<SubTask>;
}
import { SubTask } from "../model/SubTask";
