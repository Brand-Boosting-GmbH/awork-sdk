/**
 * TaskDependency Model
 *
 * Describes the dependency between two tasks. One Task is the predecessor and one task is the successor.
 * @category Models
 * @class
 */
export class TaskDependency {
    /**
     * @typedef {TaskDependency & {_plain?: true}} TaskDependencyLike
     */
    /**
     * Model constructor
     * @param {TaskDependencyLike} data
     */
    constructor(data: TaskDependency & {
        _plain?: true;
    });
    data: any;
    /**
     * The Id of the predecessor. One task can have multiple predecessor.
     * @type {String} uuid
     */
    get predecessorId(): string;
    /**
     * The Id of the successor. One task can have one successor.
     * @type {String} uuid
     */
    get successorId(): string;
    /**
     * The id of the task dependency.
     * @type {String}
     */
    get id(): string;
    /**
     * The date this task dependency was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this task dependency.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date this task dependency was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this task dependency.
     * @type {String} uuid
     */
    get updatedBy(): string;
    toPlainObject(): {
        predecessor: any;
        successor: any;
        id: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
    };
}
