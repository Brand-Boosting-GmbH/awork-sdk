/**
 * TaskListTemplate Model
 * @category Models
 * @class
 */
export class TaskListTemplate {
    /**
     * @typedef {TaskListTemplate & {_plain?: true}} TaskListTemplateLike
     */
    /**
     * Model constructor
     * @param {TaskListTemplateLike} data
     */
    constructor(data: TaskListTemplate & {
        _plain?: true;
    });
    /**@private */
    private _data;
    /**
     * The name of the list.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * The order of the list.
     * @type {String} nullable
     */
    get order(): string;
    /**
     * The id of the task list.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * Whether the task list has been archived.
     * @type {Boolean}
     */
    get isArchived(): boolean;
    /**
     * The date this task list was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this task list.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date this task list was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this task list.
     * @type {String} uuid
     */
    get updatedBy(): string;
    toPlainObject(): {
        name: string;
        order: string;
        id: string;
        isArchived: boolean;
        createdOn: string;
        createdBy: string;
        updatedOn: string;
        updatedBy: string;
    };
}
