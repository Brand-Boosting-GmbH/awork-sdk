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
    constructor(data: ApiUser & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * The name of the API user.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * The role the user should be in. If no role is specified, the user will become an admin.
     * @type {String} uuid
     */
    get roleId(): string;
    /**
     * The client id this API user belongs to.
     * @type {String} nullable
     */
    get clientId(): string;
    /**
     * The id of the API user.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The date this user was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this user.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date where this user was last updated.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who updated the entity.
     * @type {String} uuid
     */
    get updatedBy(): string;
    toPlainObject(): {
        id: any;
        name: any;
        roleId: any;
        clientId: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
    };
}
