/**
 * TypeOfWork Model
 * @category Models
 * @class
 */
export class TypeOfWork {

    /**
     * @typedef {TypeOfWork & {_plain?: true}} TypeOfWorkLike
     */

    /**
     * Model constructor
     * @param {TypeOfWorkLike} data 
     */
    constructor(data) {
        /** @private */
        this._data = data
    }

    /**
     * The id of the task type.
     * @type {string}
     */
    get id () {
        return this._data.id
    }

    /**
     * The name of the task type.
     * @type {String}
     */
    get name () {
        return this._data.name
    }

    /**
     * A short (max. 140 characters) description of the task type.
     * @type {String}
     */
    get description () {
        return this._data.description
    }

    /**
     * The icon associated with this task type.
     * @type {String}
     */
    get icon () {
        return this._data.icon
    }

    /**
     * Whether the type of work has been archived.
     * @type {Boolean}
     */
    get isArchived () {
        return this._data.isArchived
    }

    /**
     * The date this entity was created.
     * @type {String}
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The id of the user who created this entity.
     * @type {String}
     */
    get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date this entity was last modified.
     * @type {String}
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The id of the user who last modified this entity.
     * @type {String}
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    toPlainObject() {
        return {
            id: this._data.id,
            name: this._data.name,
            description: this._data.description,
            icon: this._data.icon,
            isArchived: this._data.isArchived,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy
        }
    }
}