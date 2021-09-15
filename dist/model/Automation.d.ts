/**
 * Automation Model
 * @category Models
 * @class
 */
export class Automation {
    /**
     * @typedef {Automation & {_plain?: true}} AutomationLike
     */
    /**
     * Model constructor
     * @param {AutomationLike} data
     */
    constructor(data: Automation & {
        _plain?: true;
    });
    /** @private*/
    private _data;
    /**
     * The id of the automation.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The id of the user who created the automation.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date the automation was created
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The is of the user who updated the automation.
     * @type {String} uuid
     */
    get updatedBy(): string;
    /**
     * The date the automation was updated.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the trigger which is related to this automation.
     * @type {String} uuid
     */
    get triggerId(): string;
    /**
     * @typedef {Object} TriggerValue
     * @property {String} name The name of the trigger value.
     * @property {String} value The value of the trigger value.
     */
    /**
     * @typedef {Object} Trigger
     * @property {String} type The type of the trigger.
     * @property {Array<TriggerValue>} values The values of the trigger.
     */
    /**
     * List of all triggers.
     * @type {Trigger}
     */
    get trigger(): {
        /**
         * The type of the trigger.
         */
        type: string;
        /**
         * The values of the trigger.
         */
        values: {
            /**
             * The name of the trigger value.
             */
            name: string;
            /**
             * The value of the trigger value.
             */
            value: string;
        }[];
    };
    /**
     * Whether the automation is enabled.
     * @type {Boolean}
     */
    get enabled(): boolean;
    /**
     * Whether the automation was created from an automation template of a project template.
     * @type {Boolean}
     */
    get createdByProjectTemplate(): boolean;
    /**
     * The id of the project which is related to the automation.
     * @type {String} uuid
     */
    get projectId(): string;
    /**
     * The id of the project template which is related to the automation.
     * @type {String}
     */
    get projectTemplateId(): string;
    /**
     * The actions related to this automation.
     * @type {Array<import(./Action).Action>}
     */
    get actions(): any[];
    /**
     * @typedef {Object} Failed
     * @property {String} code nullable
     * @property {String} description nullable
     * @property {String} link nullable
     * @property {String} stackTrace nullable
     * @property {String} space nullable
     * @property {Array<String>} details nullable
     * @property {Array<{property: String, message: String}>} validationErrors nullable
     *
     */
    /**
     * Failure information.
     * @type {Failed}
     */
    get failed(): {
        /**
         * nullable
         */
        code: string;
        /**
         * nullable
         */
        description: string;
        /**
         * nullable
         */
        link: string;
        /**
         * nullable
         */
        stackTrace: string;
        /**
         * nullable
         */
        space: string;
        /**
         * nullable
         */
        details: Array<string>;
        /**
         * nullable
         */
        validationErrors: Array<{
            property: string;
            message: string;
        }>;
    };
    toPlainObject(): {
        id: any;
        createdOn: string;
        createdBy: string;
        updatedOn: string;
        updatedBy: string;
        trigger: {
            /**
             * The type of the trigger.
             */
            type: string;
            /**
             * The values of the trigger.
             */
            values: {
                /**
                 * The name of the trigger value.
                 */
                name: string;
                /**
                 * The value of the trigger value.
                 */
                value: string;
            }[];
        };
        triggerId: string;
        enabled: boolean;
        createdByProjectTemplate: boolean;
        projectId: string;
        projectTemplateId: string;
        actions: any[];
        failed: {
            /**
             * nullable
             */
            code: string;
            /**
             * nullable
             */
            description: string;
            /**
             * nullable
             */
            link: string;
            /**
             * nullable
             */
            stackTrace: string;
            /**
             * nullable
             */
            space: string;
            /**
             * nullable
             */
            details: Array<string>;
            /**
             * nullable
             */
            validationErrors: Array<{
                property: string;
                message: string;
            }>;
        };
    };
}
