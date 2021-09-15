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
    constructor(data) {
        /** @private*/
        this._data = data
    }

    /**
     * The id of the action.
     * @type {string} uuid
     */
    get id () {
        return this._data.id
    }

    /**
     * The id of the user who created the action.
     * @type {String} uuid
     */
     get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date the action was created.
     * @type {String} date-time
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The is of the user who updated the action.
     * @type {String} uuid
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    /**
     * The date the action was updated.
     * @type {String} date-time
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The type of the action.
     * @type {String}
     */
    get type () {
        return this._data.type
    }

    /**
     * The order of the action.
     * @type {Number}
     */
    get order () {
        return this._data.order
    }

    /**
     * @typedef {Object} ActionValue
     * @property {String} name The name of the action value. 
     * @property {String} value The value of the action value.
     */

    /**
     * The values of the action.
     * @type {Array<ActionValue>} THe values of the action.
     */
    get values () {
        return this._data.values
    }

    toPlainObject() {
        return {
            id: this._id,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy,
            type: this._data.type,
            order: this._data.order,
            values: this._data.values
        }
    }
}