/**
 * Class corresponding to Aworks ProjectTemplates Endpoints
 * @category Endpoints
 * @see [ProjectTemplates in Awork API Docs](https://openapi.awork.io/#/ProjectTemplates)
 */
export class ProjectTemplates {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    */
    constructor(client: import('../client/index').Client);
    /**
    * @private
    */
    private _client;
    /**
     * Returns the project template with the specified id and the related statuses.
     * @param {String} projectTemplateId The id of the project template.
     * @returns {Promise<ProjectTemplate>}
     */
    get(projectTemplateId: string): Promise<ProjectTemplate>;
    /**
     * Returns all existing project types.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<ProjectTemplate>>}
     */
    list(options?: ListOptions): Promise<Array<ProjectTemplate>>;
    /**
     * @typedef {Object} ProjectTemplateCreateModel
     * @property {String} description Description of the project template.
     * @property {String} name Name of the project template.
     * @property {Boolean} isBillableByDefault
     * @property {String} defaultTaskListIdForEmails uuid
     */
    /**
     * Creates a new project template.
     * @param {ProjectTemplateCreateModel} projectTemplate The model to create a project template.
     * @returns {Promise<ProjectTemplate>}
     */
    create(projectTemplate: {
        /**
         * Description of the project template.
         */
        description: string;
        /**
         * Name of the project template.
         */
        name: string;
        isBillableByDefault: boolean;
        /**
         * uuid
         */
        defaultTaskListIdForEmails: string;
    }): Promise<ProjectTemplate>;
    /**
     * @typedef {ProjectTemplateCreateModel} ProjectTemplateUpdateModel
     */
    /**
     * Updates the project template with the specified id.
     * @param {String} projectTemplateId The id of the project template.
     * @param {ProjectTemplateUpdateModel} projectTemplate The model to update a project template with.
     * @returns {Promise<ProjectTemplate>}
     */
    update(projectTemplateId: string, projectTemplate: {
        /**
         * Description of the project template.
         */
        description: string;
        /**
         * Name of the project template.
         */
        name: string;
        isBillableByDefault: boolean;
        /**
         * uuid
         */
        defaultTaskListIdForEmails: string;
    }): Promise<ProjectTemplate>;
    /**
     * Deletes the project template with the specified id.
     * @param {String} projectTemplateId The id of the project template.
     * @returns {Promise<void>}
     */
    delete(projectTemplateId: string): Promise<void>;
    /**
     * @typedef {Object} ProjectStatusOrder
     * @property {String} projectStatusId The id of the project status.
     * @property {Integer} order The order value which determines the position of the project status in the flow of the project type. Only accepts 0 and positive values. For independent statuses without successor and predecessor this value is set to null.
     */
    /**
     * Updates the order of a project status.
     * @param {String} projectTemplateId The id of the project template.
     * @param {ProjectStatusOrder} projectStatusOrder The project status with updated order.
     * @returns {Promise<void>}
     */
    updateProjectStatusOrder(projectTemplateId: string, projectStatusOrder: {
        /**
         * The id of the project status.
         */
        projectStatusId: string;
        /**
         * The order value which determines the position of the project status in the flow of the project type. Only accepts 0 and positive values. For independent statuses without successor and predecessor this value is set to null.
         */
        order: any;
    }): Promise<void>;
    /**
     * Returns the task bundle id which is linked to the template.
     * @param {String} projectTemplateId The id of the project template.
     * @returns {Promise<String>}
     */
    taskBundle(projectTemplateId: string): Promise<string>;
    /**
     * Returns the {@link ProjectTemplateProjectStatuses} Endpoint with the specified project template Id.
     * @param {String} projectTemplateId The id of the project template
     * @returns {ProjectTemplateProjectStatuses}
     */
    projectStatus(projectTemplateId: string): ProjectTemplateProjectStatuses;
    /**
     * Returns the {@link ProjectTemplateAutomations} Endpoint with the specified project template Id.
     * @param {String} projectTemplateId The id of the project template
     * @returns {ProjectTemplateAutomations}
     */
    automations(projectTemplateId: string): ProjectTemplateAutomations;
    /**
     * Returns the {@link EntityImages} Endpoint with the specified project tempate Id.
     * @param {String} projectTemplateId The id of the project template.
     * @returns {EntityImages}
     */
    images(projectTemplateId: string): any;
}
import { ProjectTemplate } from "../model/ProjectTemplate";
import { ProjectTemplateProjectStatuses } from "./ProjectTemplateProjectStatuses";
import { ProjectTemplateAutomations } from "./ProjectTemplateAutomations";
