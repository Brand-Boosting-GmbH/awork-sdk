/**
 * Class corresponding to Aworks ProjectSubtasks Endpoints
 * @category Endpoints
 * @see [ProjectSubtasks in Awork API Docs](https://openapi.awork.io/#/ProjectSubtasks)
 */
export class ProjectSubtasks {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    * @param {String} subtaskId The id of the subtask.
    * @param {String} projectId The id of the project.
    */
    constructor(client: import('../client/index').Client, taskId: string, subtaskId: string, projectId: string);
    /** @private */
    private _client;
    /** @private */
    private _taskId;
    /** @private */
    private _subtaskId;
    /** @private */
    private _projectId;
    /**
     * Returns a subtask for a project task with the specified id. To retrieve the subtasks of a project task either 'read' permissions on the 'project-planning-data' feature are required or the user needs to be assigned.
     * @returns {Promise<SubTask>}
     */
    get(): Promise<SubTask>;
    /**
     * Returns the subtasks for a project task with the specified id. To retrieve the subtasks of a project task either 'read' permissions on the 'project-planning-data' feature are required or the user needs to be assigned.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {SubTask}
     */
    list(options?: import('../global').ListOptions): SubTask;
}
import { SubTask } from "../model/SubTask";
