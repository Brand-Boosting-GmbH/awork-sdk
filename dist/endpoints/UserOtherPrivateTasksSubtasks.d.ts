/**
 * Class corresponding to Aworks UserOtherPrivateTasksSubtasks Endpoints
 * @category Endpoints
 * @see [UserOtherPrivateTasksSubtasks in Awork API Docs](https://openapi.awork.io/#/UserOtherPrivateTasksSubtasks)
 */
export class UserOtherPrivateTasksSubtasks {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    * @param {String} subtaskId The id of the subtask.
    * @param {String} userId The id of the user.
    */
    constructor(client: import('../client/index').Client, taskId: string, subtaskId: string, userId: string);
    /** @private */
    private _client;
    /** @private */
    private _userId;
    /** @private */
    private _taskId;
    /** @private */
    private _userPrefix;
    /**
     * Returns a subtask for other private tasks with the specified id. The user needs to be the creator of the task.
     * @returns {Promise<SubTask>}
     */
    get(subtaskId: any): Promise<SubTask>;
    /**
     * Returns the subtask for other private tasks with the specified id. The user needs to be the creator of the task.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<SubTask>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<SubTask>>;
}
import { SubTask } from "../model/SubTask";
