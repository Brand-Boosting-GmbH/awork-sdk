/**
 * Class corresponding to Aworks ProjectTemplateAutomations Endpoints
 * @category Endpoints
 * @see [ProjectTemplateAutomations in Awork API Docs](https://openapi.awork.io/#/ProjectTemplateAutomations)
 */
export class ProjectTemplateAutomations {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     * @param {String} projectTemplateId The id of the project.
     */
    constructor(client: import('../client/index').Client, projectTemplateId: string);
    /** @private*/
    private _client;
    /** @private*/
    private _projectTemplateId;
    /**
     * Returns a specific automation of the projecttemplate with the specified id. Returns NotFound if the automation doesnt exist. To get the the automation data the user needs to have 'read' permissions of the feature 'project-manage-config' globally.
     * @param {String} automationId The id of the automation.
     * @returns {Promise<Automation>}
     */
    get(automationId: string): Promise<Automation>;
    /**
     * Returns all automations of the projecttemplate with the specified id. To get the automation data the user needs the 'read' permissons of the feature 'project-manage-config' globally.
     * @param {ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<Automation>>}
     */
    list(options?: ListOptions): Promise<Array<Automation>>;
    /**
     * @typedef {Object} AutomationCreateModel
     * @property {String} type The type of the trigger.
     * @property {Array<{name: String, value: {description: String}}>} values
     */
    /**
     * Creates a new automation of the projecttemplate with the specified id. To create the the automation the user needs to have 'write' permissions of the feature 'project-manage-config' globally.
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
     * Updates the specified automation for a specific projecttemplate. To update the the automation the user needs to have 'write' permissions of the feature 'project-manage-config' globally.
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
     * Deletes the specified automation with its trigger and all its values. To delete the the automation the user needs to have 'write' permissions of the feature 'project-manage-config' globally. If the 'removeFromProject' boolean is set to true, all automations in projects of that project template created from that automation template are deleted aswell.
     * @param {String} automationId The id of the automation.
     * @param {Boolean} removefromProjects Whether to delete the automation also from all projects of the projecttemplate.
     * @returns {Promise<void>}
     */
    delete(automationId: string, removefromProjects: boolean): Promise<void>;
    /**
     * Reapplies the automation to all projects of this specifc project template.
     * Returns NotFound if the automation doesnt exist. To execute this you need to have 'write' permissions of the feature 'project-manage-config' globally.
     * @param {String} automationId The id of the automation.
     * @returns {Promise<void>}
     */
    reApply(automationId: string): Promise<void>;
    /**
     * Returns the {@link ProjectTemplateActions} Endpoint with the specified project template Id.
     * @param {String} projectTemplateId The id of the project template
     * @returns {ProjectTemplateActions}
     */
    actions(automationId: any): ProjectTemplateActions;
}
import { Automation } from "../model/Automation";
import { ProjectTemplateActions } from "./ProjectTemplateActions";
