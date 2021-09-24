/**
 * TaskTemplate Model
 * @category Models
 * @class
 */
export class TaskTemplate {
    /**
     * @typedef {TaskTemplate & {_plain?: true}} TaskTemplateLike
     */
    /**
     * Model constructor
     * @param {TaskTemplateLike} data
     */
    constructor(data: TaskTemplate & {
        _plain?: true;
    });
    /**@private */
    private _data;
    /**
     * The name of the task created from this template.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * The description of the task created from this template.
     * @type {String} nullable
     */
    get description(): string;
    /**
     * Whether the task created from this template will be marked as priority.
     * @type {Boolean}
     */
    get isPrio(): boolean;
    /**
     * The expected planned workload of the task created from this template, in seconds.
     * @type {Number}
     */
    get plannedDuration(): number;
    /**
     * The relative start date and time of the task created from this template, in seconds, from th emoment of creating the task.
     * @type {Number}
     */
    get relativeStartOn(): number;
    /**
     * The relative due date and time of the task created from this template, in seconds, from the moment of creating the task.
     * @type {Number}
     */
    get relativeDueOn(): number;
    /**
     * The id of the type of work of this task.
     * @type {String} uuid
     */
    get typeOfWorkId(): string;
    /**
     * The id of the assigned user of this task.
     * @type {String} uuid
     */
    get assignedUserId(): string;
    /**
     * The id of the assigned role of this task.
     * @type {String} uuid
     */
    get assignedRoleId(): string;
    /**
     * The id of the task template.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The type of the the task.
     * @type {Object}
     */
    get taskType(): any;
    /**
     * The id of the task type.
     * @type {String} uuid
     */
    get taskTypeId(): string;
    /**
     * The name of the task type.
     * @type {String} nullable
     */
    get taskTypeName(): string;
    /**
     * A short (max. 140 characters) description of the task type.
     * @type {String} nullable
     */
    get taskTypeDescription(): string;
    /**
     * The icon associated with this task type.
     * @type {import('../global').Icon} Possible awork icons.
     */
    get taskTypeIcon(): import("../global").Icon;
    /**
     * Whether the task type has been archived.
     * @type {Boolean}
     */
    get taskTypeIsArchived(): boolean;
    /**
     * The date this etity was created.
     * @type {String} date-time
     */
    get taskTypeCreatedOn(): string;
    /**
     * The id of the us created this entity.
     * @type {String} uuid
     */
    get taskTypeCreatedBy(): string;
    /**
     * The date this entity was last modified.
     * @type {String} date-time
     */
    get taskTypeUpdatedOn(): string;
    /**
     * The id of the user who last modified this entity.
     * @type {String} uuid
     */
    get taskTypeUpdatedBy(): string;
    /**
     * @typedef {Object} TaskTemplateTaskListTemplateModel
     * @property {String} id The id of the task list template.
     * @property {String} name The name of the task list template.
     * @property {Number} orderOfTask The order of the task template in the task list template.
     * @property {Number} order The order of the task list template, unique within the task bundle.
     */
    /**
     * The task list templates of the task template.
     * @type {Array<TaskTemplateTaskListTemplateModel>}
     */
    get taskListTemplate(): {
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
     * @typedef {Object} TaskDependencyTemplateModel
     * @property {String} prodecessorTemplateId The id of the predecessor task template.
     * @property {String} successorTemplateId The id of the successor task template.
     */
    /**
     * @type {Array<TaskDependencyTemplateModel>}
     */
    get taskDependencyTemplates(): {
        /**
         * The id of the predecessor task template.
         */
        prodecessorTemplateId: string;
        /**
         * The id of the successor task template.
         */
        successorTemplateId: string;
    }[];
    /**
     * The date this task was created.
     * @type {String} uuid
     */
    get createdOn(): string;
    /**
     * The id of the user who created this task.
     * @type {String} date-time
     */
    get createdBy(): string;
    /**
     * The date this task was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this task.
     * @type {String} uuid
     */
    get updatedBy(): string;
    /**
     * For internal purposes.
     * @type {Number} nullable
     */
    get order(): number;
    /**
     * If the task template has attachments.
     * @type {Boolean}
     */
    get hasAttachment(): boolean;
    /**
     * If the task is a recurrency template, the flag is true.
     * @type {Boolean}
     */
    get isRecurring(): boolean;
    toPlainObject(): {
        name: string;
        description: string;
        isPrio: boolean;
        plannedDuration: number;
        relativeDueOn: number;
        relativeStartOn: number;
        typeOfWorkId: string;
        assignedRoleId: string;
        assignedUserId: string;
        id: string;
        taskType: any;
        taskListTemplate: {
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
        taskDependencyTemplates: {
            /**
             * The id of the predecessor task template.
             */
            prodecessorTemplateId: string;
            /**
             * The id of the successor task template.
             */
            successorTemplateId: string;
        }[];
        createdOn: string;
        createdBy: string;
        updatedOn: string;
        updatedBy: string;
        order: number;
        hasAttachment: boolean;
        isRecurring: boolean;
    };
}
