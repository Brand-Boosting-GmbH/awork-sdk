
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
    constructor(data) {
        /** @private*/
        this._data = data
    }

    /**
     * The id of the automation.
     * @type {String} uuid
     */
    get id () {
        return this._data.id
    }

    /**
     * The id of the user who created the automation.
     * @type {String} uuid
     */
    get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date the automation was created
     * @type {String} date-time
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The is of the user who updated the automation.
     * @type {String} uuid
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    /**
     * The date the automation was updated.
     * @type {String} date-time
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The id of the trigger which is related to this automation.
     * @type {String} uuid
     */
    get triggerId () {
        return this._data.triggerId
    }

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
    get trigger () {
        return this._data.trigger
    }

    /**
     * Whether the automation is enabled.
     * @type {Boolean}
     */
    get enabled () {
        return this._data.enabled
    }

    /**
     * Whether the automation was created from an automation template of a project template.
     * @type {Boolean}
     */
    get createdByProjectTemplate () {
        return this._data.createdByProjectTemplate
    }

    /**
     * The id of the project which is related to the automation.
     * @type {String} uuid
     */
    get projectId () {
        return this._data.projectId
    }

    /**
     * The id of the project template which is related to the automation.
     * @type {String}
     */
    get projectTemplateId () {
        return this._data.projectTemplateId
    }

    /**
     * The actions related to this automation.
     * @type {Array<import(./Action).Action>} 
     */
    get actions () {
        return this._data.actions
    }

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
    get failed () {
        return this._data.failed
    }

    toPlainObject() {
        return {
            id: this._id,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy,
            trigger: this._data.trigger,
            triggerId: this._data.triggerId,
            enabled: this._data.enabled,
            createdByProjectTemplate: this._data.createdByProjectTemplate,
            projectId: this._data.projectId,
            projectTemplateId: this._data.projectTemplateId,
            actions: this._data.actions,
            failed: this._data.failed
        }
    }
}