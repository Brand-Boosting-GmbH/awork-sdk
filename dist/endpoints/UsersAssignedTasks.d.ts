/**
 * Class corresponding to Aworks UsersAssignedTasks Endpoints
 * @category Endpoints
 * @see [UsersAssignedTasks in Awork API Docs](https://openapi.awork.io/#/UsersAssignedTasks)
 */
export class UsersAssignedTasks {
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
    * Returns the assigned task with the specified id.
    * @returns {Promise<Task>}
    */
    get(taskId: any): Promise<Task>;
    /**
    * Returns all tasks assigned to a user. If a user gets his own tasks, the private tasks are part of the result as well. If you need only tasks of projects in status 'progress', set the 'inProgress' parameter to 'true'.
    * @param {import('../global').ListOptions} [options] Pagination and filtering options
    * @returns {Promise<Array<Task>>}
    */
    list(options?: import('../global').ListOptions): Promise<Array<Task>>;
    /**
     * Returns all tags from the available tasks of the user ordered by name. The user making the request needs to be assigned to the task or needs read permissions on the feature "project-planning-data" for project tasks or read permissions on the "entity-master-data" of the entity of the task.
     * @returns {Promise<Array<String>>}
     */
    getTaskTags(): Promise<Array<string>>;
    /**
    * Returns all tasks the user is allowed to see. This contains project tasks if the user has "project-planning" permissions, all assigned tasks and also private tasks created by the user and assigned to other users.
    * @param {import('../global').ListOptions} [options] Pagination and filtering options
    * @returns {Promise<Array<Task>>}
    */
    getAllAvailableTasks(options?: import('../global').ListOptions): Promise<Array<Task>>;
}
import { Task } from "../model/Task";
