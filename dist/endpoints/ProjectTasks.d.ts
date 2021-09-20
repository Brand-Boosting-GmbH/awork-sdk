export class ProjectTasks {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} projectId The id of the project.
    */
    constructor(client: import('../client/index').Client, projectId: string);
    /**@private */
    private _client;
    /**@private */
    private _projectId;
    /** @private */
    private _projectsPrefix;
    /**
     * Returns the project task with the specified id. To get the task with the specified id 'read' permissions on the feature project-planning-data are necessary. But the assignee has also the permissions to get the task.
     * @param {String} taskId The id of the task.
     * @returns {Promise<Task>}
     */
    get(taskId: string): Promise<Task>;
    /**
     * Returns all project tasks of the project with the specified id. To get the task with the specified id 'read' permissions on the feature project-planning-data are necessary. Otherwise returns only assigned tasks.
     * @param {ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<Task>>}
     */
    list(options?: ListOptions): Promise<Array<Task>>;
    /**
     * Returns all tags of the project tasks.
     * @returns {Promise<Array<String>>}
     */
    tagList(): Promise<Array<string>>;
    taskStatuses(): ProjectTaskStatuses;
    /**
     * @typedef {Object} ChangeProjectModel
     * @property {String} projectId The id of the project the task is assigned to.
     * @property {String} taskStatusId The id of the new status the task is assigned to.
     */
    /**
     * Changes the project of the task with the specified id. It change also the tracked time sum of the new project and the previous project. The related time trackings of this task will also be moved into the new project.
     * @param {String} taskId The id of the task.
     * @param {ChangeProjectModel} change The model to change the project.
     * @return {Promise<void>}
     */
    changeProject(taskId: string, change: {
        /**
         * The id of the project the task is assigned to.
         */
        projectId: string;
        /**
         * The id of the new status the task is assigned to.
         */
        taskStatusId: string;
    }): Promise<void>;
}
import { Task } from "../model/Task";
import { ProjectTaskStatuses } from "./ProjectTaskStatuses";
