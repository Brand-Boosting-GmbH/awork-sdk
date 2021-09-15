/**
 * Class corresponding to Aworks Autopilots Endpoints
 * @category Endpoints
 * @see [Autopilots in Awork API Docs](https://openapi.awork.io/#/Autopilots)
 */
export class Autopilots {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor(client: import('../client/index').Client, projectId: any);
    /** @private */
    private _client;
    /** @private */
    private _projectId;
    /**
     * Returns the autopilot including its alerts. To get the autopilot data the user needs to be the owner of the project or 'read' permissions of the feature 'project-master-data' globally or in his project role.
     * @param {String} autopilotId The id of the autopilot.
     * @returns {Promise<Autopilot>}
     */
    get(autopilotId: string): Promise<Autopilot>;
    /**
     * @typedef {Object} AlertObject
     * @property {String} id The id of the alert.
     * @property {String} alert The alert indicartor.
     * @property {Boolean} enabled Whether the alert is enabled.
     * @property {String} channel The channel of the alert.
     */
    /**
     * @typedef {Object} AutopilotCreateModel
     * @property {String} type The type of the autopilot.
     * @property {Array<AlertObject>} alerts The alerts of the autopilot.
     */
    /**
     * Creates a new autopilot for the project with the specified id. Also creates and enables all alerts for the new autopilot. For this action, the user needs to be the owner of the project or must have 'read' permissions of the feature 'project-master-data' globally or in his project role.
     * @param {AutopilotCreateModel} autopilot The model to create a autopilot for a specific project.
     * @returns {Promise<Autopilot>}
     */
    create(autopilot: {
        /**
         * The type of the autopilot.
         */
        type: string;
        /**
         * The alerts of the autopilot.
         */
        alerts: {
            /**
             * The id of the alert.
             */
            id: string;
            /**
             * The alert indicartor.
             */
            alert: string;
            /**
             * Whether the alert is enabled.
             */
            enabled: boolean;
            /**
             * The channel of the alert.
             */
            channel: string;
        }[];
    }): Promise<Autopilot>;
    /**
     * @typedef {Object} AutopilotUpdateModel
     * @property {String} type The type of the autopilot.
     * @property {Array<AlertObject>} alerts The alerts of the autopilot.
     * @property {Boolean} enabled Whether the autopilot is enabled.
     */
    /**
     * Updates the autopilot of the project with the specified id. To access and modify the autopilot data the user needs to be the owner of the project or must have 'read' permissions of the feature 'project-master-data' globally or in his project role.
     * @param {AutopilotUpdateModel} autopilot The model to update a autopilot for a specific project.
     * @returns {Promise<Autopilot>}
     */
    update(autopilot: {
        /**
         * The type of the autopilot.
         */
        type: string;
        /**
         * The alerts of the autopilot.
         */
        alerts: {
            /**
             * The id of the alert.
             */
            id: string;
            /**
             * The alert indicartor.
             */
            alert: string;
            /**
             * Whether the alert is enabled.
             */
            enabled: boolean;
            /**
             * The channel of the alert.
             */
            channel: string;
        }[];
        /**
         * Whether the autopilot is enabled.
         */
        enabled: boolean;
    }): Promise<Autopilot>;
    /**
     * Deletes the autopilot of the project with the specified id. To access and modify the autopilot data the user needs to be the owner of the project or must have 'read' permissions of the feature 'project-master-data' globally or in his project role.
     * @returns {Promise<void>}
     */
    delete(): Promise<void>;
    /**
     * Returns all available alerts for autopilots.
     * @returns {Promise<Array<String>>}
     */
    availablealerts(): Promise<Array<string>>;
}
import { Autopilot } from "../model/Autopilot";
