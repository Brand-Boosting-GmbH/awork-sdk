/**
 * Action Model
 * @category Models
 * @class
 */
export class Action {
    /**
     * @typedef {Action & {_plain?: true}} ActionLike
     */
    /**
     * Model constructor
     * @param {ActionLike} data
     */
    constructor(data: Action & {
        _plain?: true;
    });
    /** @private*/
    private _data;
    /**
     * The id of the action.
     * @type {string} uuid
     */
    get id(): string;
    /**
     * The id of the user who created the action.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date the action was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The is of the user who updated the action.
     * @type {String} uuid
     */
    get updatedBy(): string;
    /**
     * The date the action was updated.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The type of the action.
     * @type {String}
     */
    get type(): string;
    /**
     * The order of the action.
     * @type {Number}
     */
    get order(): number;
    /**
     * @typedef {Object} ActionValue
     * @property {String} name The name of the action value.
     * @property {String} value The value of the action value.
     */
    /**
     * The values of the action.
     * @type {Array<ActionValue>} THe values of the action.
     */
    get values(): {
        /**
         * The name of the action value.
         */
        name: string;
        /**
         * The value of the action value.
         */
        value: string;
    }[];
    toPlainObject(): {
        id: any;
        createdOn: string;
        createdBy: string;
        updatedOn: string;
        updatedBy: string;
        type: string;
        order: number;
        values: {
            /**
             * The name of the action value.
             */
            name: string;
            /**
             * The value of the action value.
             */
            value: string;
        }[];
    };
}
