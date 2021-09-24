/**
 * Class corresponding to Aworks ProjectTemplateActions Endpoints
 * @category Endpoints
 * @see [ProjectTemplateActions in Awork API Docs](https://openapi.awork.io/#/ProjectTemplateActions)
 */
export class ProjectTemplateActions {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     * @param {String} projectTemplateId The id of the project.
     * @param {String} automationId The id of the automation.
     */
    constructor(client: import('../client/index').Client, projectTemplateId: string, automationId: string);
    /** @private*/
    private _client;
    /** @private*/
    private _projectTemplateId;
    /** @private*/
    private _automationId;
    /**
     * Returns a specific action for a specific automation of a projecttemplate including all its values. The user needs 'read' permissions of the feature 'project-manage-config' to view action data.
     * @param {String} actionId The id of the action.
     * @returns {Promise<Action>}
     */
    get(actionId: string): Promise<Action>;
    /**
     * Returns all actions for a specific automation of a project template including all its values. The user needs 'read' permissions of the feature 'project-manage-config' to view action data.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options.
     * @returns {Promise<Array<Action>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<Action>>;
    /**
     * @typedef {Object} ActionValue
     * @property {String} name The name of the action value.
     * @property {{description: String}} value The value of the action value.
     */
    /**
     * @typedef {Object} ActionCreateModel
     * @property {String} type The type of the action.
     * @property {Number} [order] The order of the action.
     * @property {Array<ActionValue>} values All action values.
     */
    /**
     * Creates an action for a specific automation of a projecttemplate including all its values. The user needs 'write' permissions of the feature 'project-manage-config' to create action data.
     * @param {ActionCreateModel} action The model to create an action.
     * @returns {Promise<Action>}
     */
    create(action: {
        /**
         * The type of the action.
         */
        type: string;
        /**
         * The order of the action.
         */
        order?: number;
        /**
         * All action values.
         */
        values: {
            /**
             * The name of the action value.
             */
            name: string;
            /**
             * The value of the action value.
             */
            value: {
                description: string;
            };
        }[];
    }): Promise<Action>;
    /**
     * @typedef {ActionCreateModel} ActionUpdateModel
     */
    /**
     * Updates a specifc action of an automation of a projecttemplate.
     * Returns an updated action for a specific automation of a projecttemplate including all its values. The user needs 'write' permissions of the feature 'project-manage-config' to update action data.
     * @param {String} actionId The id of the action.
     * @param {ActionUpdateModel} action The model to update an action.
     * @returns {Promise<Action>}
     */
    update(actionId: string, action: {
        /**
         * The type of the action.
         */
        type: string;
        /**
         * The order of the action.
         */
        order?: number;
        /**
         * All action values.
         */
        values: {
            /**
             * The name of the action value.
             */
            name: string;
            /**
             * The value of the action value.
             */
            value: {
                description: string;
            };
        }[];
    }): Promise<Action>;
    /**
     * Deletes an action for a specific automation of a projecttemplate including all its values. The user needs 'write' permissions of the feature 'project-manage-config' to delete action data.
     * @param {String} actionId The id of the action.
     * @returns {Promise<void>}
     */
    delete(actionId: string): Promise<void>;
    /**
     * Updates the order of a given action.
     * @param {String} actionId The id of the action.
     * @param {Number} order The order of the automation within a list.
     * @returns {Promise<Action>}
     */
    updateOrder(actionId: string, order: number): Promise<Action>;
}
import { Action } from "../model/Action";
