/**
 * TaskStatus Model
 * @category Models
 * @class
 */
 export class TaskStatus {
    /**
     * @typedef {TaskStatus & {_plain?: true}} TaskStatusLike
     */

    /**
     * Model constructor
     * @param {TaskStatusLike} data 
     */
    constructor(data) {
        /** @private*/
        this._data = data
    }

    /**
     * The primary identifier of this task status.
     * @type {string} uuid
     */
    get id () {
        return this._data.id
    }

    /**
     * The name of the task status.
     * @type {String}
     */
    get name () {
        return this._data.name
    }

    /**
     * Of what general type is this task status?.
     * @type {Number} 
     */
    get type () {
        return this._data.type
    }

    /**
     * The order of the task status in a project.
     * @type {Number} nullable
     */
    get order () {
        return this._data.order
    }

    /**
     * Whether the task status is for private tasks.
     * @type {Boolean}
     */
    get isPrivate () {
        return this._data.isPrivate
    }

    /**
     * The icon of the task status.
     * @type {String} nullable
     */
    get icon () {
        return this._data.icon
    }

    /**
     * Is set if the task status is related to a project.
     * @type {String} uuid
     */
    get projectId () {
        return this._data.projectId
    }

    /**
     * Is set if the task status is related to a project type.
     * @type {String} uuid
     */
    get projectTypeId () {
        return this._data.projectTypeId
    }

    /**
     * The id of the user who created the action.
     * @type {String} uuid
     */
     get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date this entity was created.
     * @type {String} date-time
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The id of the user who last modified this entity.
     * @type {String} uuid
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    /**
     * The date this entity was last modified.
     * @type {String} date-time
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    toPlainObject() {
        return {
            id: this._id,
            name: this._data.name,
            type: this._data.type,
            order: this._data.order,
            isPrivate: this._data.isPrivate,
            icon: this._data.icon,
            projectId: this._data.projectId,
            projectTypeId: this._data.projectTypeId,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy
        }
    }
}