/**
 * Class corresponding to Aworks ProjectActions Endpoints
 * @category Endpoints
 * @see [ProjectActions in Awork API Docs](https://openapi.awork.com/#/ProjectActions)
 */
export class ProjectActions {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     * @param {String} projectId The id of the project.
     * @param {String} automationId The id of the automation.
     */
    constructor(client: import('../client/index').Client, projectId: string, automationId: string);
    /** @private*/
    private _client;
    /** @private*/
    private _projectId;
    /** @private*/
    private _automationId;
    /**
     * Get a specific action including its values of an automation. The user needs to be owner of the project or needs permission 'read' of the feature 'project-master-data' globally or in the project.
     * @param {String} actionId The id of the action.
     * @returns {Promise<Action>}
     */
    get(actionId: string): Promise<Action>;
    /**
     * Gets all actions including their values of an automation. The user needs to be owner of the project or needs permission 'read' of the feature 'project-master-data' globally or in the project.
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
     * Creates a new action including its values for an automation. The user needs to be owner of the project or needs permission 'write' of the feature 'project-master-data' globally or in the project.
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
     * Updates an exsting action including its values for an automation. The user needs to be owner of the project or needs permission 'write' of the feature 'project-master-data' globally or in the project.
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
     * Deletes an action for an automation including all its values. The user needs to be owner of the project or needs permission 'write' of the feature 'project-master-data' globally or in the project.
     * @param {String} actionId The id of the action.
     * @returns {Promise<void>}
     */
    delete(actionId: string): Promise<void>;
    /**
     * Updates the order of a given action in the list of actions of the specific automation. If the order isn't changed, the order will not be updated.
     * @param {String} actionId The id of the action.
     * @param {Number} order The order of the automation within a list.
     * @returns {Promise<Action>}
     */
    updateOrder(actionId: string, order: number): Promise<Action>;
}
import { Action } from "../model/Action";
