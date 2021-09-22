/**
 * Tag Model
 * @category Models
 * @class
 */

 export class Tag {
    /**
     * @typedef {Tag & {_plain?: true}} TagLike
     */

    /**
     * Model constructor
     * @param {TagLike} data 
     */
    constructor(data) {
        this._data = data || {}
    }

    /**
     * The id of the tag.
     * @type {String} uuid
     */
    get id () {
        return this._data.id
    }

    /**
     * The name of the tag.
     * @type {String}
     */
    get name () {
        return this._data.name
    }

    /**
     * The entity id of the tag.
     * @type {String}
     */
    get entityId () {
        return this._data.entityId
    }

    /**
     * The date the tag was created.
     * @type {String} date-time
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The user which created the tag.
     * @type {String} uuid
     */
    get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date the tag was updated on.
     * @type {String} date-time
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The user which updated the tag.
     * @type {String} uuid
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    toPlainObject () {
        return {
            id: this._data.id,
            name: this._data.name,
            entityId: this._data.entityId,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy
        }
    }
}