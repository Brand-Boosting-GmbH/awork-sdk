/**
 * Class corresponding to Aworks TimeTrackings Endpoints
 * @category Endpoints
 * @see [TimeTrackings in Awork API Docs](https://openapi.awork.io/#/TimeTrackings)
 */
export class TimeTrackings {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     * @param {String} userId The id of the user.
     */
    constructor(client: import('../client/index').Client, userId: string);
    /** @private */
    private _client;
    /** @private */
    private _userId;
    /** @private */
    private _userPrefix;
    /**
     * @typedef {Object} LocationObject
     * @property {Number} longitude The logitude value of the geo-location.
     * @property {Number} latitude The latitude value of the geo-location.
     */
    /**
     * @typedef {Object} TimeTrackingStartModel
     * @property {Boolean} [isBillable] Whether the time tracking is billable or not.
     * @property {Boolean} [isBilled] Whether the time tracking is billed or not.
     * @property {String} [taskId] The id of the task.
     * @property {String} [projectId] The id of the project.
     * @property {String} [note] The note of the time tracking.
     * @property {LocationObject} [location] The latitude and longitude of the geo-location.
     * @property {String} typeOfWorkId The id of the type of work of the time tracking.
     * @property {String} timezone The original timezone of the time tracking. The format of the timezone is the IANA standard.
     */
    /**
     * If there is already a running time tracking it will be stopped automatically in order to start the new one.
     * @param {TimeTrackingStartModel} timeTrackingStartModel The model to start a time tracking.
     * @returns {Promise<TimeEntry>}
     */
    start(timeTrackingStartModel: {
        /**
         * Whether the time tracking is billable or not.
         */
        isBillable?: boolean;
        /**
         * Whether the time tracking is billed or not.
         */
        isBilled?: boolean;
        /**
         * The id of the task.
         */
        taskId?: string;
        /**
         * The id of the project.
         */
        projectId?: string;
        /**
         * The note of the time tracking.
         */
        note?: string;
        /**
         * The latitude and longitude of the geo-location.
         */
        location?: {
            /**
             * The logitude value of the geo-location.
             */
            longitude: number;
            /**
             * The latitude value of the geo-location.
             */
            latitude: number;
        };
        /**
         * The id of the type of work of the time tracking.
         */
        typeOfWorkId: string;
        /**
         * The original timezone of the time tracking. The format of the timezone is the IANA standard.
         */
        timezone: string;
    }): Promise<TimeEntry>;
    /**
     * There is no request body necessary for this operation. For this operation to work there must be a running time tracking for the user.
     * @returns {Promise<TimeEntry>}
     */
    stop(): Promise<TimeEntry>;
}
import { TimeEntry } from "../model/TimeEntry";
