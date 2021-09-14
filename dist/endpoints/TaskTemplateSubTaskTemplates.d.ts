/**
 * Class corresponding to Aworks subtasktemplates related part of the TaskBundles Endpoints
 * @category Endpoints
 * @see [TaskBundles in Awork API Docs](https://openapi.awork.io/#/TaskBundles)
 */
export class TaskTemplateSubTaskTemplates {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     * @param {String} taskTemplateId The id of the task template.
     */
    constructor(client: import('../client/index').Client, taskTemplateId: string);
    /**@private */
    private _client;
    /**@private */
    private _taskTemplateId;
    /**
     * To access the task template, 'read' permissions on the 'project-planning-data' feature or on the 'project-manage-config' feature are required.
     * @param {String} subTaskTemplateId The id of the subtask template id.
     * @returns {Promise<SubTaskTemplate>}
     */
    get(subTaskTemplateId: string): Promise<SubTaskTemplate>;
    /**
     * To access the task template, 'read' permissions on the 'project-planning-data' feature or on the 'project-manage-config' feature are required.
     * @param {ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<SubTaskTemplate>>}
     */
    list(options?: ListOptions): Promise<Array<SubTaskTemplate>>;
    /**
     * @typedef {Object} SubTaskTemplateCreateModel
     * @property {String} name The name of the subtask template.
     * @property {Number} order The order of the subtask template.
     */
    /**
     * Creates a new subtask template.
     * @param {SubTaskTemplateCreateModel} subTaskTemplate The model to create the subtask template.
     * @returns {Promise<SubTaskTemplate>}
     */
    create(subTaskTemplate: {
        /**
         * The name of the subtask template.
         */
        name: string;
        /**
         * The order of the subtask template.
         */
        order: number;
    }): Promise<SubTaskTemplate>;
    /**
     * @typedef {SubTaskTemplateCreateModel} SubTaskTemplateUpdateModel
     */
    /**
     * Updates a subtask template for a task template with the specified id.
     *
     * To access the task template, 'write' permissions on the 'project-planning-data' feature or on the 'project-manage-config' feature are required.
     * @param {String} subTaskTemplateId The id of the subtask template.
     * @param {SubTaskTemplateUpdateModel} subTaskTemplate The model to update the subtask template.
     * @return {Promise<SubTaskTemplate>}
     */
    update(subTaskTemplateId: string, subTaskTemplate: {
        /**
         * The name of the subtask template.
         */
        name: string;
        /**
         * The order of the subtask template.
         */
        order: number;
    }): Promise<SubTaskTemplate>;
    /**
     * Deletes a subtask template for a task template with the specified id. To access the task template, 'write' permissions on the 'project-planning-data' feature or on the 'project-manage-config' feature are required.
     * @param {String} subtaskTemplateId The id of the subtask template.
     * @returns {Promise<void>}
     */
    delete(subTaskTemplateId: any): Promise<void>;
}
import { SubTaskTemplate } from "../model/SubTaskTemplate";
