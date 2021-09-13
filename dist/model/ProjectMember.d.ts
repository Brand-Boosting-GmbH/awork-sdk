/**
 * ProjectMember Model
 * @category Models
 * @class
 */
export class ProjectMember {
    /**
     * @typedef {ProjectMember & {_plain?: true}} ProjectMemberLike
     */
    /**
     * Model constructor
     * @param {ProjectMemberLike} data
     */
    constructor(data: ProjectMember & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * @type {String}
     */
    get id(): string;
    /**
     * The id of the project member.
     * @type {String}
     */
    get userId(): string;
    /**
     * The first name of the project member.
     * @type {String}
     */
    get firstName(): string;
    /**
     * The last name of the project member.
     * @type {String}
     */
    get lastName(): string;
    /**
     * Wheter the project member has an image.
     * @type {Boolean}
     */
    get hasImage(): boolean;
    /**
     * @type {String}
     */
    get projectRoleId(): string;
    /**
     * @type {String}
     */
    get projectRoleName(): string;
    /**
     * @type {Boolean}
     */
    get isResponsible(): boolean;
    /**
     * @type {Boolean}
     */
    get isDeactivated(): boolean;
    /**
     * @type {String}
     */
    get projectId(): string;
    toPlainObject(): {
        id: any;
        userId: any;
        firstName: any;
        lastName: any;
        hasImage: any;
        projectRoleId: any;
        projectRoleName: any;
        isResponsible: any;
        isDeactivated: any;
        projectId: any;
    };
}
