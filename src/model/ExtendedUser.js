import { User } from './User'
import '../globalTypedef'

/**
 * User Model
 * @category Models
 * @extends User
 * @class
 */
 export class ExtendedUser extends User {
    /**
     * @typedef {ExtendedUser & {_plain?: true}} ExtendedUserLike
     */

    /**
     * Model constructor
     * @param {ExtendedUserLike} data 
     */
    constructor(data) {
        /** @private */
        this._data = data || {}
    }

    /**
     * The account id of the user. Only used internally.
     * @type {String} uuid
     */
     get accountId () {
        return this._data.accountId
    }

    /**
     * @typedef {Object} TeamsObject
     * @property {String} id The Id of the team.
     * @property {String} name The name of the team.
     * @property {import('../index').Icon} icon The icon which is assigned to the team.
     * @property {import('../index').Color} color The color of the team.
     */

    /**
     * The teams the user is associated to.
     * @type {Array<TeamsObject>}
     */
    get teams () {
        return this._data.teams
    }

    toPlainObject () {
        return {
            ...super.toPlainObject(),
            accountId: this._data.accountId,
            teams: this._data.teams
        }
    }
}