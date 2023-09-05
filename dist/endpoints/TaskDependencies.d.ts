/**
 * Class corresponding to Aworks TaskDependencies Endpoints.
 * @category Endpoints
 * @see [TaskDependencies in Awork API Docs](https://openapi.awork.com/#/TaskDependencies)
 */
export class TaskDependencies {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor(client: import('../client/index').Client);
    /** @private*/
    private _client;
    /**
     * @typedef {Object} TaskDependencyCreateModel
     * @property {String} predecessorId The Id of the predecessor. One task can have multiple predecessor.
     * @property {String} successorId The Id of the successor. One task can have one successor.
     */
    /**
     * Creates a new task dependency. To create a task dependency, the user needs to be the assignee of both tasks or 'ProjectPlanning' permissions in general or in the project the tasks are related to.
     * @param {TaskDependencyCreateModel} taskDependency Describes the dependency between two tasks. One Task is the predecessor and one task is the successor.
     * @returns {Promise<TaskDependency>}
     */
    create(taskDependency: {
        /**
         * The Id of the predecessor. One task can have multiple predecessor.
         */
        predecessorId: string;
        /**
         * The Id of the successor. One task can have one successor.
         */
        successorId: string;
    }): Promise<TaskDependency>;
    /**
     * Deletes a task dependency. To delete a task dependency, the user needs to be the assignee of both tasks or 'ProjectPlanning' permissions in general or in the project the task are related to.
     * @param {String} taskDependencyId The id of the task dependency.
     * @returns {Promise<void>}
     */
    delete(taskDependencyId: string): Promise<void>;
}
import { TaskDependency } from "../model/TaskDependency";
