/**
 * TaskStatus Model
 * @category Models
 * @class
 */
export class TaskStatus {
    /**
     * @typedef {TaskStatus & {_plain?: true}} TaskStatusLike
     */
    /**
     * Model constructor
     * @param {TaskStatusLike} data
     */
    constructor(data: TaskStatus & {
        _plain?: true;
    });
    /** @private*/
    private _data;
    /**
     * The primary identifier of this task status.
     * @type {string} uuid
     */
    get id(): string;
    /**
     * The name of the task status.
     * @type {String}
     */
    get name(): string;
    /**
     * Of what general type is this task status?.
     * @type {Number}
     */
    get type(): number;
    /**
     * The order of the task status in a project.
     * @type {Number} nullable
     */
    get order(): number;
    /**
     * Whether the task status is for private tasks.
     * @type {Boolean}
     */
    get isPrivate(): boolean;
    /**
     * The icon of the task status.
     * @type {import('../index').Icon} nullable
     */
    get icon(): import("../index").Icon;
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
     * The id of the user who created the action.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date this entity was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who last modified this entity.
     * @type {String} uuid
     */
    get updatedBy(): string;
    /**
     * The date this entity was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    toPlainObject(): {
        id: any;
        name: string;
        type: number;
        order: number;
        isPrivate: boolean;
        icon: import("../index").Icon;
        projectId: string;
        projectTypeId: string;
        createdOn: string;
        createdBy: string;
        updatedOn: string;
        updatedBy: string;
    };
}
