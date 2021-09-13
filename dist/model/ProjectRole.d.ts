/**
 * ProjectRole Model
 * @category Models
 * @class
 */
export class ProjectRole {
    /**
     * @typedef {ProjectRole & {_plain?: true}} ProjectRoleLike
     */
    /**
     * Model constructor
     * @param {ProjectRoleLike} data
     */
    constructor(data: ProjectRole & {
        _plain?: true;
    });
    /**
     * @private
     */
    private _data;
    /**
     * The name of the project role. Required.
     * @type {String}
     */
    get name(): string;
    /**
     * Whether to use this role as default when adding new project members.
     * @type {Boolean}
     */
    get isDefault(): boolean;
    /**
     * The id of the new default project role. Required if the updated project role is the current default role.
     * @type {String}
     */
    get defaultProjectRoleId(): string;
    /**
     * The id of the project role. Required.
     * @type {String}
     */
    get id(): string;
    /**
     * The count of members which are linked to this role.
     * @type {Number}
     */
    get memberCount(): number;
    /**
     * The members which are linked to this role.
     * @type {Array<import('./ProjectMember').ProjectMember>}
     */
    get members(): import("./ProjectMember").ProjectMember[];
    /**
     * The date this entity was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this entity.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date this entity was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this entity.
     * @type {String} uuid
     */
    get updatedBy(): string;
    toPlainObject(): {
        name: string;
        isDefault: boolean;
        defaultProjectRoleId: string;
        id: string;
        memberCount: number;
        members: import("./ProjectMember").ProjectMember[];
        createdOn: string;
        createdBy: string;
        updatedOn: string;
        updatedBy: string;
    };
}
