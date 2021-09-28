/**
 * Taskbundle Model
 * @category Models
 * @class
 */
export class TaskBundle {
    /**
     * @typedef {Taskbundle & {_plain?: true}} TaskbundleLike
     */
    /**
     * Model constructor
     * @param {TaskbundleLike} data
     */
    constructor(data: any);
    /** @private */
    private _data;
    /**
     * The name of the task bundle. Required if its not related to a task bundle.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * The description of the task bundle.
     * @type {String} nullable
     */
    get description(): string;
    /**
     * The icon of the task bundle.
     * @type {Icon}
     */
    get icon(): Icon;
    /**
     * The project template id of the task bundle, only necessary for the creation of an empty bundle for a project template.
     * @type {String}
     */
    get projectTemplateId(): string;
    /**
     * The id of the task bundle.
     * @type {String}
     */
    get id(): string;
    /**
     * The date this task bundle was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this task bundle.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date this task bundle was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this task bundle.
     * @type {String} uuid
     */
    get updatedBy(): string;
    /**
     * @typedef {Object} TaskLists
     * @property {String} id The id of the task list template.
     * @property {String} name The name of the task list template.
     * @property {Number} orderOfTask The order of the task template in the task list template.
     * @property {Number} order The order of the task list template, unique within the task bundle.
     */
    /**
     * The list templates within this task bundle.
     * @type {Array<TaskLists>}
     */
    get taskLists(): {
        /**
         * The id of the task list template.
         */
        id: string;
        /**
         * The name of the task list template.
         */
        name: string;
        /**
         * The order of the task template in the task list template.
         */
        orderOfTask: number;
        /**
         * The order of the task list template, unique within the task bundle.
         */
        order: number;
    }[];
    /**
     * @type {Array<import('./Task').Task>}
     */
    get tasks(): import("./Task").Task[];
    toPlainObject(): {
        name: any;
        description: any;
        icon: any;
        projectTemplateId: any;
        id: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
        taskLists: any;
        tasks: any;
    };
}
