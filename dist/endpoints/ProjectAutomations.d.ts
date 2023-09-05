/**
 * Class corresponding to Aworks ProjectAutomations Endpoints
 * @category Endpoints
 * @see [ProjectAutomations in Awork API Docs](https://openapi.awork.com/#/ProjectAutomations)
 */
export class ProjectAutomations {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     * @param {String} projectId The id of the project.
     */
    constructor(client: import('../client/index').Client, projectId: string);
    /** @private*/
    private _client;
    /** @private*/
    private _projectId;
    /**
     * Returns a specific automation of the project with the specified id. Returns NotFound if the automation doesnt exist. To get the the automation data the user needs to be the owner of the project or have 'read' permissions of the feature 'project-master-data' globally or in his project role.
     * @param {String} automationId The id of the automation.
     * @returns {Promise<Automation>}
     */
    get(automationId: string): Promise<Automation>;
    /**
     * Returns all automations of the project with the specified id. To get the the automation data the user needs to be the owner of the project or have 'read' permissions of the feature 'project-master-data' globally or in his project role.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<Automation>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<Automation>>;
    /**
     * @typedef {Object} AutomationCreateModel
     * @property {String} type The type of the trigger.
     * @property {Array<{name: String, value: {description: String}}>} values
     */
    /**
     * Creates a new automation for the project with the specified id. The user needs to be the owner of the project or have 'write' permissions of the feature 'project-master-data' globally or in the project.
     * @param {AutomationCreateModel} automation The model to create an automation.
     * @returns {Promise<Automation>}
     */
    create(automation: {
        /**
         * The type of the trigger.
         */
        type: string;
        values: Array<{
            name: string;
            value: {
                description: string;
            };
        }>;
    }): Promise<Automation>;
    /**
     * @typedef {Object} AutomationUpdateModel
     * @property {Boolean} enabled Whether the automation is enabled.
     * @property {{type: String, values: Array<{name: String, value: {description: String}}>}} trigger
     */
    /**
     * Updates the automation with the specified id. The user needs to be the owner of the project or have 'write' permissions of the feature 'project-master-data' globally or in the project.
     * @param {String} automationId The id of the automation.
     * @param {AutomationUpdateModel} automation The model to update an automation.
     * @returns {Promise<Automation>}
     */
    update(automationId: string, automation: {
        /**
         * Whether the automation is enabled.
         */
        enabled: boolean;
        trigger: {
            type: string;
            values: Array<{
                name: string;
                value: {
                    description: string;
                };
            }>;
        };
    }): Promise<Automation>;
    /**
     * Deletes the specified automation for a given project. Also deletes all actions connected to the automation. The user needs to be the owner of the project or have 'write' permissions of the feature 'project-master-data' globally or in the project.
     * @param {String} automationId The id of the automation.
     * @returns {Promise<Automation>}
     */
    delete(automationId: string): Promise<Automation>;
    /**
     * Returns the {@link ProjectActions} Endpoint with the specified project id and automation id.
     * @param {String} projectTemplateId The id of the project template
     * @returns {ProjectActions}
     */
    actions(automationId: any): ProjectActions;
}
import { Automation } from "../model/Automation";
import { ProjectActions } from "./ProjectActions";
