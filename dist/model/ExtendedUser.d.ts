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
     * @property {import('../index').Icon} icon The icon which is assigned to the team.
     * @property {import('../index').Color} color The color of the team.
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
        icon: import('../index').Icon;
        /**
         * The color of the team.
         */
        color: import('../index').Color;
    }[];
    toPlainObject(): {
        accountId: any;
        teams: any;
        id: any;
        firstName: any;
        lastName: any;
        birthDate: any;
        gender: any;
        title: any;
        position: any;
        language: any;
        capacityPerWeek: any;
        key: any;
        status: {
            invitationAccepted: any;
            isDeactivated: any;
        };
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
        isArchived: any;
        isDeactivated: any;
        deactivatedOn: any;
        hasImage: any;
        userContactInfos: any;
        resourceVersion: any;
        tags: any;
    };
}
import { User } from "./User";
