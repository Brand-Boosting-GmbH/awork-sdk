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
    constructor(data: ExtendedUser & {
        _plain?: true;
    });
    /**
     * The account id of the user. Only used internally.
     * @type {String} uuid
     */
    get accountId(): string;
    /**
     * @typedef {Object} TeamsObject
     * @property {String} id The Id of the team.
     * @property {String} name The name of the team.
     * @property {String} icon The icon which is assigned to the team.
     * @property {String} color The color of the team.
     */
    /**
     * The teams the user is associated to.
     * @type {Array<TeamsObject>}
     */
    get teams(): {
        /**
         * The Id of the team.
         */
        id: string;
        /**
         * The name of the team.
         */
        name: string;
        /**
         * The icon which is assigned to the team.
         */
        icon: string;
        /**
         * The color of the team.
         */
        color: string;
    }[];
}
import { User } from "./User";
