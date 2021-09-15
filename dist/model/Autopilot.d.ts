/**
 * Autopilot Model
 * @category Models
 * @class
 */
export class Autopilot {
    /**
     * @typedef {Autopilot & {_plain?: true}} AutopilotLike
     */
    /**
     * Model constructor
     * @param {AutopilotLike} data
     */
    constructor(data: Autopilot & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * The id of the autopilot.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The type of the autopilot.
     * @type {String}
     */
    get type(): string;
    /**
     * Whether the autopilot is enabled.
     * @type {Boolean}
     */
    get enabled(): boolean;
    /**
     * @typedef {Object} AlertObject
     * @property {String} id The id of the alert.
     * @property {String} alert The alert indicartor.
     * @property {Boolean} enabled Whether the alert is enabled.
     * @property {String} channel The channel of the alert.
     */
    /**
     * The alerts of the autopilot.
     * @type {Array<AlertObject>}
     */
    get alerts(): {
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
     * The date this object was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this object.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date this object was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this object.
     * @type {String} uuid
     */
    get updatedBy(): string;
    toPlainObject(): {
        id: any;
        type: any;
        enabled: any;
        alerts: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
    };
}
