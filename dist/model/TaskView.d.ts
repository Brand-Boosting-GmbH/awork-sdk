/**
 * TaskView Model
 * @category Models
 * @class
 */
export class TaskView {
    /**
     * @typedef {TaskView & {_plain?: true}} TaskViewLike
     */
    /**
     * Model constructor
     * @param {TaskViewLike} data
     */
    constructor(data: TaskView & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * The id of the task view.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * Whether this task view is shared within the workspace.
     * @type {Boolean}
     */
    get isShared(): boolean;
    /**
     * The filter query that is applied to the tasks results. The syntax follows the normal filter coventions that can be used on GET routes.
     * @type {String} nullable
     */
    get filter(): string;
    /**
     * The filter settings to display.
     * @type {String} nullable
     */
    get filterSettings(): string;
    /**
     * The name of the task view.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * The date this task view was created
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this task view.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date this task view was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this task view.
     * @type {String} uuid
     */
    get updatedBy(): string;
    toPlainObject(): {
        id: any;
        isShared: any;
        filter: any;
        filterSettings: any;
        name: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
    };
}
