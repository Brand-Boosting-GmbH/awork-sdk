/**
 * PrivateTasksTaskStatus Model
 * @category Models
 * @class
 */
export class PrivateTasksTaskStatus {
    /**
    * @typedef {PrivateTasksTaskStatus & {_plain?: true}} PrivateTasksTaskStatusLike
    */
    /**
    * Model constructor
    * @param {PrivateTasksTaskStatusLike} data
    */
    constructor(data: PrivateTasksTaskStatus & {
        _plain?: true;
    });
    _data: any;
    /**
     * The primary identifier of this task status.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The name of the task status.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * The type of this task status.
     * @type {String} nullable
     */
    get type(): string;
    /**
     * The order of the task status in a project.
     * @type {Number} double
     */
    get order(): number;
    /**
     * Whether the task status is for private tasks.
     * @type {Boolean}
     */
    get isPrivate(): boolean;
    /**
     * The icon of the task status.
     * @type {Icon} uuid
     */
    get icon(): Icon;
    /**
     * Is set if the task status is related to a project.
     * @type {String} uuid
     */
    get projectId(): string;
    /**
     * Is set if the task status is related to a project type.
     * @type {String} uuid
     */
    get projectTypeId(): string;
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
        id: any;
        name: any;
        type: any;
        order: any;
        isPrivate: any;
        icon: any;
        projectId: any;
        projectTypeId: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
    };
}
