import '../globalTypedef'

/**
 * Team Model
 * @category Models
 * @class
 */
export class Team {
    /**
     * @typedef {Team & {_plain?: true}} TeamLike
     */

    /**
     * Model constructor
     * @param {TeamLike} data 
     */
    constructor(data) {
        /** @private */
        this._data = data || {}
    }

    /**
     * The team name.
     * @type {String}
     */
    get name () {
        return this._data.name
    }

    /**
     * The team description. Optional.
     * @type {import('../index').Icon} nullable
     */
    get icon () {
        return this._data.icon
    }

    /**
     * The team type. Optional.
     * @type {import('../index').Color} nullable
     */
    get color () {
        return this._data.color
    }

    /**
     * The id of the team.
     * @type {String} uuid
     */
    get id () {
        return this._data.id
    }

    /**
     * The date this team was created.
     * @type {String} date-time
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The id of the user who created this team.
     * @type {String} uuid
     */
    get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date this team was last modified.
     * @type {String} date-time
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The id of the user who last updated this team.
     * @type {String} uuid
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    /**
     * The ids of the users in the team.
     * @type {Array<String>} 
     */
    get userIds () {
        return this._data.userIds
    }

    /**
     * The ids of the projects in the team.
     * @type {Array<String>}
     */
    get projectIds () {
        return this._data.projectIds
    }

    toPlainObject () {
        return {
            name: this._data.name,
            icon: this._data.icon,
            color: this._data.color,
            id: this._data.id,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy,
            userIds: this._data.userIds,
            projectIds: this._data.projectIds
        }
    }
}