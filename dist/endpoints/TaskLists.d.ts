/**
 * Class corresponding to Aworks TaskLists Endpoints
 * @category Endpoints
 * @see [TaskLists in Awork API Docs](https://openapi.awork.io/#/TaskLists)
 */
export class TaskLists {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     * @param {('projects')} entityName Currently only 'projects' supported.
     * @param {String} entityId The id of the entity (project)
     */
    constructor(client: import('../client/index').Client, entityName: ('projects'), entityId: string);
    /**@private*/
    private _client;
    /**@private */
    private _entityName;
    /**@private */
    private _entityId;
    /**
     * Returns the task list with the specified id.
     * The permission check in this function is dynamically based on the entity name. In the cases where the user tries to get the project task lists, the user needs read permissions on the project-planning-data feature. In cases where the user tries to get a private task list, permissions are not necessary.
     * @param {String} taskListId The id of the task list.
     * @returns {Promise<TaskListTemplate>}
     */
    get(taskListId: string): Promise<TaskListTemplate>;
    /**
     * @typedef {ListOptions & {showArchived: Boolean}} AdvancedListOptions
     */
    /**
     * Returns all task lists of the entity with the specified id.
     * The permission check in this function is dynamically based on the entity name. In the cases where the user tries to get the project task lists, the user needs read permissions on the project-planning-data feature. In cases where the user tries to get the private task lists, permissions are not necessary.
     * @param {AdvancedListOptions} [options] Pagination, filtering and show archived option.
     * @returns {Promise<Array<TaskListTemplate>>}
     */
    list(options?: ListOptions & {
        showArchived: boolean;
    }): Promise<Array<TaskListTemplate>>;
    /**
     * @typedef {Object} TaskListCreateModel
     * @property {String} name The name of the task list.
     * @property {Number} order The order of the task list.
     */
    /**
     * Creates a new task list.
     * To create a new project task list, the user needs manage permissions on the project-planning-data feature. For a private task list no permissions are required.
     * @param {TaskListCreateModel} taskList The model to create a new task list.
     * @returns {Promise<TaskListTemplate>}
     */
    create(taskList: {
        /**
         * The name of the task list.
         */
        name: string;
        /**
         * The order of the task list.
         */
        order: number;
    }): Promise<TaskListTemplate>;
    /**
     * Updates a task list.
     * To update a project task list, the user needs manage permissions on the project-planning-data feature. For a private task list no permissions are required.
     * @param {String} taskListId The id of the task list.
     * @param {{name: String}} taskList The model used to update the task list with the specified id.
     * @returns {Promise<TaskListTemplate>}
     */
    update(taskListId: string, taskList: {
        name: string;
    }): Promise<TaskListTemplate>;
    /**
     * Deletes the task list with the specified id.
     * To delete project task list, the user needs manage permissions on the project-planning-data feature. For a private task list no permissions are required.
     * @param {String} taskListId The id of the task list.
     * @param {Boolean} deleteTasks Whether all tasks in this list should be deleted. If false or not set, the tasks will just be removed from the list.
     * @returns {Promise<void>}
     */
    delete(taskListId: string, deleteTasks?: boolean): Promise<void>;
    /**
     * Updates the order of a task list.
     * To update the order of project task lists, the user needs manage permissions on the project-planning-data feature. For a private task list no permissions are required.
     * @param {String} taskListId The id of the task list.
     * @param {Number} order The order of the list.
     * @returns {Promise<void>}
     */
    updateOrder(taskListId: string, order: number): Promise<void>;
    /**
     * @typedef {Object} TaskListArchiveModel
     * @property {Boolean} isArchived Flags the entity as archived.
     * @property {('task-to-done'|'task-remove'|'task-move'|'task-delete')} [taskOperation] The operation for tasks which are not yet done. The operation is required if you set a list to archived. Can be: task-to-done: Set tasks to 'Done' or the first status of type 'done'. task-remove: Remove tasks from this task list. task-move: Move tasks to another list. task-delete: Deletes the non done tasks.
     * @property {String} [taskListId] Only necessary if TaskOperation is set to 'task-move'. The id of the task list where all non done tasks should moved to.
     * @property {Boolean} [deleteTimeTrackings] Only necessary if TaskOperation is set to 'task-delete'. Set to true to delete also the related time trackings of all non done tasks.
     */
    /**
     * Archives or unarchives the task list with the specified id. An archived task list still exists but is not editable anymore.
     * @param {String} taskListId The id of the task list.
     * @param {TaskListArchiveModel} archiveOptions The model to archive the task list.
     * @return {Promise<TaskListTemplate>}
     */
    setArchived(taskListId: string, archiveOptions: {
        /**
         * Flags the entity as archived.
         */
        isArchived: boolean;
        /**
         * The operation for tasks which are not yet done. The operation is required if you set a list to archived. Can be: task-to-done: Set tasks to 'Done' or the first status of type 'done'. task-remove: Remove tasks from this task list. task-move: Move tasks to another list. task-delete: Deletes the non done tasks.
         */
        taskOperation?: ('task-to-done' | 'task-remove' | 'task-move' | 'task-delete');
        /**
         * Only necessary if TaskOperation is set to 'task-move'. The id of the task list where all non done tasks should moved to.
         */
        taskListId?: string;
        /**
         * Only necessary if TaskOperation is set to 'task-delete'. Set to true to delete also the related time trackings of all non done tasks.
         */
        deleteTimeTrackings?: boolean;
    }): Promise<TaskListTemplate>;
    /**
     * @typedef {Object} AddTaskModel
     * @property {String} taskId The task id added to the list.
     * @property {Number} order The order of the task in the list.
     */
    /**
     * Adds the tasks to the task list with the specified id.
     * To add a new task to a project task list, the user needs manage permissions on the project-planning-data feature. For a private task list no permissions are required.
     * @param {String} taskListId The id of the task list.
     * @param {Array<AddTaskModel>} tasksToAdd The ids of the tasks to add to the list.
     * @returns {Promise<Array<({taskId: String, order: Number})>>}
     */
    addTasks(taskListId: string, tasksToAdd: {
        /**
         * The task id added to the list.
         */
        taskId: string;
        /**
         * The order of the task in the list.
         */
        order: number;
    }[]): Promise<Array<({
        taskId: string;
        order: number;
    })>>;
    /**
     * Removes the tasks from the task list with the specified id.
     * To remove a task from a project task list, the user needs manage permissions on the project-planning-data feature. For a private task list no permissions are required.
     * @param {String} taskListId The id of the task list.
     * @param {Array<String>} tasksToRemove The ids of the tasks to remove from the list.
     * @returns {Promise<void>}
     */
    removeTasks(taskListId: string, tasksToRemove: Array<string>): Promise<void>;
    tasks(taskListId: any): any;
}
import { TaskListTemplate } from "../model/TaskListTemplate";
