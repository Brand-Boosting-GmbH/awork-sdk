export class ProjectTasks {
    constructor(client: any, projectId: any);
    _client: any;
    _projectId: any;
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
}
import { Task } from "../model/Task";
