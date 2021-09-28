/**
 * Class corresponding to Aworks TaskBundles Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.io/#/TaskBundles)
 */
export class TaskBundles {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor(client: import('../client/index').Client);
    /** @private */
    private _client;
    /**
     * Returns the task bundle with the specified id.
     * @param {String} taskBundleId
     * @returns {Promise<TaskBundle>}
     */
    get(taskBundleId: string): Promise<TaskBundle>;
    /**
     * Returns all global task bundles.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<TaskBundle>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<TaskBundle>>;
    /**
     * @typedef {Object} TaskBundleModel
     * @property {String} name The name of the task bundle. Required if its not related to a task bundle.
     * @property {String} description The description of the task bundle.
     * @property {Icon} [icon] The icon of the task bundle.
     * @property {String} projectTemplateId The project template id of the task bundle, only necessary for the creation of an empty bundle for a project template.
     */
    /**
     * Returns the task bundle with the specified id.
     * @param {TaskBundleModel} taskbundle
     * @returns {Promise<TaskBundle>}
     */
    create(taskbundle: {
        /**
         * The name of the task bundle. Required if its not related to a task bundle.
         */
        name: string;
        /**
         * The description of the task bundle.
         */
        description: string;
        /**
         * The icon of the task bundle.
         */
        icon?: Icon;
        /**
         * The project template id of the task bundle, only necessary for the creation of an empty bundle for a project template.
         */
        projectTemplateId: string;
    }): Promise<TaskBundle>;
    /**
     * Updates the task bundle with the specified id.
     * @param {String} taskBundleId
     * @param {TaskBundleModel} taskBundle
     * @returns {Promise<TaskBundle>}
     */
    update(taskBundleId: string, taskBundle: {
        /**
         * The name of the task bundle. Required if its not related to a task bundle.
         */
        name: string;
        /**
         * The description of the task bundle.
         */
        description: string;
        /**
         * The icon of the task bundle.
         */
        icon?: Icon;
        /**
         * The project template id of the task bundle, only necessary for the creation of an empty bundle for a project template.
         */
        projectTemplateId: string;
    }): Promise<TaskBundle>;
    /**
     * Deletes the task bundle with the specified id.
     * @param {String} taskBundleId
     * @returns {Promise<void>}
     */
    delete(taskBundleId: string): Promise<void>;
    /**
     * Returns all possible icons for a task bundle.
     * @returns {Promise<Array<String>>}
     */
    icons(): Promise<Array<string>>;
    /**
     * Creates the taskbundle, task templates, task list templates, task template to task list templates and copies the attachments.
     * @param {String} taskBundleId The id of the task bundle to be copied.
     * @returns {Promise<TaskBundle>}
     */
    copy(taskBundleId: string): Promise<TaskBundle>;
    /**
     * @typedef {Object} TaskBundleCreateModel
     * @property {String} name The name of the task bundle. Required if its not related to a task bundle.
     * @property {String} description The description of the task bundle.
     * @property {Icon} icon The icon of the task bundle.
     * @property {String} projectTemplateId The project template id of the task bundle, only necessary for the creation of an empty bundle for a project template.
     */
    /**
     * Creates a new task bundle from the specified project.
     * @param {String} projectId The id of the project of which the new task bundle will be created.
     * @param {TaskBundleCreateModel} taskBundle The model to create the task bundle.
     * @returns {Promise<Task>}
     */
    createFromProject(projectId: string, taskBundle: {
        /**
         * The name of the task bundle. Required if its not related to a task bundle.
         */
        name: string;
        /**
         * The description of the task bundle.
         */
        description: string;
        /**
         * The icon of the task bundle.
         */
        icon: Icon;
        /**
         * The project template id of the task bundle, only necessary for the creation of an empty bundle for a project template.
         */
        projectTemplateId: string;
    }): Promise<Task>;
    /**
     * Creates a new task bundle from the specified task list.
     * @param {String} taskListId The id of the task list of which the new task bundle will be created.
     * @param {TaskBundleCreateModel} taskBundle The model to create the task bundle.
     * @returns {Promise<Task>}
     */
    createFromTaskList(taskListId: string, taskBundle: {
        /**
         * The name of the task bundle. Required if its not related to a task bundle.
         */
        name: string;
        /**
         * The description of the task bundle.
         */
        description: string;
        /**
         * The icon of the task bundle.
         */
        icon: Icon;
        /**
         * The project template id of the task bundle, only necessary for the creation of an empty bundle for a project template.
         */
        projectTemplateId: string;
    }): Promise<Task>;
    /**
     * Returns the {@link TaskBundleTaskListTemplates} Endpoint with the specified task bundle Id.
     * @param {String} projectId The id of the task bundle.
     * @returns {ProjectProjectStatus}
     */
    taskListTemplates(taskBundleId: any): any;
    /**
     * Returns the {@link TaskBundleTaskTemplates} Endpoint with the specified task bundle Id.
     * @param {String} projectId The id of the task bundle.
     * @returns {ProjectProjectStatus}
     */
    taskTemplates(taskBundleId: any): any;
}
import { TaskBundle } from "../model/TaskBundle";
import { Task } from "../model/Task";
