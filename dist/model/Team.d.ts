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
    constructor(data: Team & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * The team name.
     * @type {String}
     */
    get name(): string;
    /**
     * The team description. Optional.
     * @type {Icon} nullable
     */
    get icon(): Icon;
    /**
     * The team type. Optional.
     * @type {Color} nullable
     */
    get color(): Color;
    /**
     * The id of the team.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The date this team was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this team.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date this team was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who last updated this team.
     * @type {String} uuid
     */
    get updatedBy(): string;
    /**
     * The ids of the users in the team.
     * @type {Array<String>}
     */
    get userIds(): string[];
    /**
     * The ids of the projects in the team.
     * @type {Array<String>}
     */
    get projectIds(): string[];
    toPlainObject(): {
        name: any;
        icon: any;
        color: any;
        id: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
        userIds: any;
        projectIds: any;
    };
}
