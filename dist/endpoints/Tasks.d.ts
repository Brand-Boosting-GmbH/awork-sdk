export class Tasks {
    constructor(client: any);
    _client: any;
    /**
     * The required permissions depend on the base type of the task. If the task is a project task, 'read' permissions on the 'project-planning-data' feature are required. For a user's private task, no special permissions are required.
     * @param {String} taskId The id of the task.
     * @returns {Promise<Task>}
     */
    get(taskId: string): Promise<Task>;
    /**
     * To create a task, the user needs to be the assignee of the task or 'ProjectPlanning' permissions in general or in the project the task is related to.
     * @param {Task} task
     * @return {Task}
     */
    create(task: Task): Task;
    /**
     * Update a task
     *
     * @param {string} taskId
     * @param {Task} task
     * @return {Task} task
     * @memberof Tasks
     */
    update(taskId: string, task: Task): Task;
    /**
     * Assigns users to tasks
     *
     * @param {[Object]} payload is an array of user and task id e.g
     * @return {number} status
     * @memberof Tasks
     */
    assignUsers(payload: [any]): number;
    /**
     * Unassigns users from tasks
     *
     * @param {[Object]} payload is an array of user and task id e.g
     * @return {number} status
     * @memberof Tasks
     */
    unassignUsers(payload: [any]): number;
    /**
     * Assigns a new user to a tasks by email invitation.
     *
     * @param {Object} payload sample payload is
     * @return {number} status
     * @memberof Tasks
     */
    assignUserByEmail(payload: any): number;
    /**
     * Deletes the specified tasks.
     *
     * @param {Object} payload sample payload is
     * @return {number} status
     * @memberof Tasks
     */
    delete(payload: any): number;
    /**
     * Changes statuses of tasks.
     *
     * @param {[Object]} payload sample payload is
     * @return {*}
     * @memberof Tasks
     */
    changeStatuses(payload: [any]): any;
    /**
     * Updates the order of the task with the specified id.
     *
     * @param {String} taskId id of the task
     * @param {Object} payload sample payload is
     * @return {Number} status
     * @memberof Tasks
     */
    updateOrder(taskId: string, payload: any): number;
    /**
     * Changes the type of work for a batch of tasks.
     *
     * @param {Object} payload sample payload is
     * @return {Number} status
     * @memberof Tasks
     */
    changeTypeOfWork(payload: any): number;
    /**
     * Changes the base type for a batch of tasks.
     *
     * @param {Object} payload sample payle is
     * @return {Number} status
     * @memberof Tasks
     */
    changeBaseTypes(payload: any): number;
    /**
     * Set the priority of the task with the specified id.
     *
     * @param {Object} payload sample payload is
     * @return {Number} status
     * @memberof Tasks
     */
    setTaskPriority(payload: any): number;
    /**
     * Creates a new task with the information of the specified task.
     *
     * @param {String} taskId
     * @return {Task}
     * @memberof Tasks
     */
    copy(taskId: string): Task;
    /**
     * Returns the existing recurrency rule for one task.
     *
     * @param {String} taskId
     * @return {_TaskRecurrency.TaskRecurrency}
     * @memberof Tasks
     */
    getRecurrency(taskId: string): any;
    /**
     * Returns all task dependencies for a specific task. To get all dependencies of a task, the user needs project planning permissions on that project or be assigned to that task.
     * @param {String} taskId The id of the task.
     * @returns {Promise<Array<TaskDependency>>}
     */
    taskDependencyList(taskId: string): Promise<Array<TaskDependency>>;
    /**
     * Returns the {@link EntityFiles} Endpoint with the specified task Id and entityType 'tasks'.
     * @param {String} taskId The id of the project.
     * @returns {EntityFiles}
     */
    files(taskId: string): EntityFiles;
}
import { Task } from "../model/Task";
import { TaskDependency } from "../model/TaskDependency";
import { EntityFiles } from "./EntityFiles";
