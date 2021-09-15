/**
 * ApiUser Model
 * @category Models
 * @class
 */
 export class ApiUser {
    /**
     * @typedef {ApiUser & {_plain?: true}} ApiUserLike
     */

    /**
     * Model constructor
     * @param {ApiUserLike} data 
     */
    constructor(data) {
        /** @private */
        this._data = data || {}
    }

    /**
     * The name of the API user.
     * @type {String} nullable
     */
    get name () {
        return this._data.name
    }

    /**
     * The role the user should be in. If no role is specified, the user will become an admin.
     * @type {String} uuid
     */
    get roleId () {
        return this._data.roleId
    }

    /**
     * The client id this API user belongs to.
     * @type {String} nullable
     */
    get clientId () {
        return this._data.clientId
    }

    /**
     * The id of the API user.
     * @type {String} uuid
     */
    get id () {
        return this._data.id
    }

    /**
     * The date this user was created.
     * @type {String} date-time
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The id of the user who created this user.
     * @type {String} uuid
     */
    get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date where this user was last updated.
     * @type {String} date-time
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The id of the user who updated the entity.
     * @type {String} uuid
     */
    get updatedBy () {
        return this._data.updated
    }

    toPlainObject () {
        return {
            id: this._data.id,
            name: this._data.name,
            roleId: this._data.roleId,
            clientId: this._data.clientId,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy
        }
    }
 }