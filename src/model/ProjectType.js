/**
 * ProjectType Model
 * @category Models
 * @class
 */
 export class ProjectType {

    /**
     * @typedef {ProjectType & {_plain?: true}} ProjectTypeLike
     */

    /**
     * Model constructor
     * @param {ProjectTypeLike} data 
     */
    constructor(data) {
        /**
         * @private
         */
        this._data = data || {}
    }

    /**
     * The id of the type.
     * @type {String}
     */
    get id () {
        return this._data.id
    }

    /**
     * The name of the project type.
     * @type
     */
    get name () {
        return this._data.name
    }

    /**
     * A short (max. 140 characters) description of the project type.
     * @type {String}
     */
    get description () {
        return this._data.description
    }

    /**
     * The identifier of the project type icon.
     * @type {String}
     */
    get icon () {
        return this._data.icon
    }

    /**
     * Whether this type is archived. It can no longer be used to create projects, but existing ones will continue using it.
     * @type {Boolean}
     */
    get isArchived () {
        return this._data.isArchived
    }

    /**
     * Whether this type is one of the preset types. Preset types cannot be edited.
     * @type {Boolean}
     */
    get isPreset () {
        return this._data.isPreset
    }

    /**
     * The date this entity was created.
     * @type {String} date-time
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The id of the user who created this entity.
     * @type {String} uuid
     */
    get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date this entity was last modified.
     * @type {String} date-time
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The id of the user who last modified this entity.
     * @type {String} uuid
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
            isPreset: this._data.isPreset,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy
        }
    }
}