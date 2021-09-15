/**
 * Task Model
 * @category Models
 * @class
 */
export class Task {
    /**
       * @typedef {Task & {_plain?: true}} TaskLike
       */
    /**
     * Model constructor
     * @param {TaskLike} data
     */
    constructor(data: Task & {
        _plain?: true;
    });
    _data: any;
    /**
     * The name of the Task. Required.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * The description of the Task.
     * @type {String} nullable
     */
    get description(): string;
    /**
     * Whether this task is marked as priority.
     * @type {Boolean} nullable
     */
    get isPrio(): boolean;
    /**
     * The expected start date and time of the task.
     * @type {String} nullable date-time
     */
    get startOn(): string;
    /**
     * The expected due date and time of the task.
     * @type {String} nullable date-time
     */
    get dueOn(): string;
    /**
     * The lane order defines the vertical position in the gant planner.
     * @type {Number} nullable
     */
    get laneOrder(): number;
    /**
     * The expected planned workload of the task, in seconds.
     * @type {Number} nullable
     */
    get plannedDuration(): number;
    /**
     * The expected remaining duration from the original planned effort of the task, in seconds.
     * @type {Number} nullable
     */
    get remainingDuration(): number;
    /**
    * The Id of the task.
    * @type {String} uuid
    */
    get id(): string;
    /**
     * The unique task key, which needs to be unique within the entire workspace.
     * @type {String} nullable
     */
    get key(): string;
    /**
     * The numerical part of the key.
     * @type {Number}
     */
    get numberCount(): number;
    /**
     * The base type of the task. Can be 'private' for a private task or 'projecttask' for a project task.
     * @type {String} nullable
     */
    get baseType(): string;
    /**
     * The id of the status for this task.
     * @type {String} uuid
     */
    get taskStatusId(): string;
    /**
     * @typedef {Object} TaskStatus
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {String} type uuid
     * @property {Number} order nullable
     * @property {Boolean} isPrivate
     * @property {String} icon nullable
     * @property {String} projectId uuid
     * @property {String} projectTypeId uuid
     * @property {String} createdOn date-time
     * @property {String} createdBy uuid
     * @property {String} updatedOn date-time
     * @property {String} updatedBy uuid
     */
    /**
     * The status of the task.
     * @type {TaskStatus} uuid
     */
    get taskStatus(): {
        /**
         * uuid
         */
        id: string;
        /**
         * nullable
         */
        name: string;
        /**
         * uuid
         */
        type: string;
        /**
         * nullable
         */
        order: number;
        isPrivate: boolean;
        /**
         * nullable
         */
        icon: string;
        /**
         * uuid
         */
        projectId: string;
        /**
         * uuid
         */
        projectTypeId: string;
        /**
         * date-time
         */
        createdOn: string;
        /**
         * uuid
         */
        createdBy: string;
        /**
         * date-time
         */
        updatedOn: string;
        /**
         * uuid
         */
        updatedBy: string;
    };
    /**
     * The id of the type of work of this task.
     * @type {String} uuid
     */
    get typeOfWorkId(): string;
    /**
     * @typedef {Object} TypeofWork
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {String} icon nullable
     * @property {Boolean} isArchived
     */
    /**
     * The type of work of the task.
     * @type {TypeofWork}
     */
    get typeOfWork(): {
        /**
         * uuid
         */
        id: string;
        /**
         * nullable
         */
        name: string;
        /**
         * nullable
         */
        icon: string;
        isArchived: boolean;
    };
    /**
     * The id of the user assigned to this task, or null if none is assigned.
     * @type {String} uuid
     */
    get assigneeId(): string;
    /**
     * @typedef {Object} Assignee
     * @property {String} id uuid
     * @property {String} firstName nullable
     * @property {String} lastName nullable
     * @property {Boolean} hasImage
     * @property {Array} tags
     * @property {Array} teams
     * /
     
    /**
     * The assignee of the task.
     * @type {Assignee}
     */
    get assignee(): any;
    /**
     * The id of the project this task is assigned to.
     * Only set if this is a project task.
     * In this case, it is equal to the EntityId.
     *
     * @type {String} uuid
     * @readonly
     * @memberof Task
     */
    readonly get projectId(): string;
    /**
     * @typedef {Project}
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {String} key nullable
     * @property {Object} projectStatus
     * @property {Object} company
     * @property {Object} projectType
     * @property {Array} tags
     * @property {Array} teams
     * @property {Boolean} hasImage
     *
     * The project of the task.
     * @type {Project}
     * @readonly
     * @memberof Task
     */
    readonly get project(): any;
    /**
     * Whether this task has an attachment.
     *
     * @type {Boolean}
     * @readonly
     * @memberof Task
     */
    readonly get hasAttachment(): boolean;
    /**
     * @typedef {List}
     * @property {String} name nullable
     * @property {Number} order double
     * @property {String} id uuid
     * @property {Boolean} isArchived
     * @property {String} createdOn date-time
     * @property {String} createdBy uuid
     * @property {String} updatedOn date-time
     * @property {String} updatedBy uuid
     * @property {Number} orderOfTask double
     *
     * The lists to which the task is assigned to.
     * @type {Array<List>}
     * @readonly
     * @memberof Task
     */
    readonly get lists(): any[];
    /**
     * The id of the entity this task is assigned to.
     * This is the id of the project if this is a project task,
     * or the id of a user if this is a private task.
     *
     * @type {String} uuid
     * @readonly
     * @memberof Task
     */
    readonly get entityId(): string;
    /**
     * @typedef {Tag}
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {String} color nullable
     * @property {String} entityId uuid
     * @property {String} createdOn date-time
     * @property {String} createdBy uuid
     * @property {String} updatedOn date-time
     * @property {String} updatedBy uuid
     *
     * The lists to which the task is assigned to.
     * @type {Array<Tag>}
     * @readonly
     * @memberof Task
     */
    readonly get tags(): any[];
    /**
     * The date this task was created.
     *
     * @type {String} date-time
     * @readonly
     * @memberof Task
     */
    readonly get createdOn(): string;
    /**
    * The id of the user who created this task.
    *
    * @type {String} uuid
    * @readonly
    * @memberof Task
    */
    readonly get createdBy(): string;
    /**
     * The date this task was last modified.
     *
     * @type {String} date-time
     * @readonly
     * @memberof Task
     */
    readonly get updatedOn(): string;
    /**
     * The id of the user who last modified this task.
     *
     * @type {String} uuid
     * @readonly
     * @memberof Task
     */
    readonly get updatedBy(): string;
    /**
     * The date the task was set to closed.
     *
     * @type {String} date-time
     * @readonly
     * @memberof Task
     */
    readonly get closedOn(): string;
    /**
     * The user who closed the task.
     *
     * @type {String} uuid
     * @readonly
     * @memberof Task
     */
    readonly get closedBy(): string;
    /**
     * The order of the task in a task status column.
     *
     * @type {Number} double
     * @readonly
     * @memberof Task
     */
    readonly get order(): number;
    /**
     * When the task was created by a recurrency rule,
     * the id is the link to the template of which the task was created.
     *
     * @type {String} uuid
     * @readonly
     * @memberof Task
     */
    readonly get createdFromTaskId(): string;
    /**
     * If the task is a recurrency template
     * (used to create new tasks by a recurrency rule), the flag is true.
     *
     * @type {Boolean}
     * @readonly
     * @memberof Task
     */
    readonly get isRecurring(): boolean;
    /**
     * The summed up duration of all time trackings for this task.
     *
     * @type {Number} int32
     * @readonly
     * @memberof Task
     */
    readonly get trackedDuration(): number;
    /**
     * @typedef {EntityInformation}
     * @property {String} description
     *
     * The entity to which the task is linked.
     *
     * @type {EntityInformation} nullable
     * @readonly
     * @memberof Task
     */
    readonly get entityInformation(): any;
    /**
     * The version of the entity continuously
     * incremented by 1 on every update of the entity.
     *
     * @type {Number} int64
     * @readonly
     * @memberof Task
     */
    readonly get resourceVersion(): number;
    /**
     * The number of subtasks which are already done.
     *
     * @type {Number} int32
     * @readonly
     * @memberof Task
     */
    readonly get subtasksDoneCount(): number;
    /**
     * The total number of subtasks.
     *
     * @type {Number} int32
     * @readonly
     * @memberof Task
     */
    readonly get subtasksCount(): number;
    toPlainObject(): {
        name: any;
        description: any;
        isPrio: any;
        startOn: any;
        dueOn: any;
        laneOrder: any;
        plannedDuration: any;
        remainingDuration: any;
        id: any;
        key: any;
        numberCount: any;
        baseType: any;
        taskStatusId: any;
        taskStatus: any;
        typeOfWorkId: any;
        typeOfWork: any;
        assigneeId: any;
        assignee: any;
        projectId: any;
        project: any;
        hasAttachment: any;
        lists: any;
        entityId: any;
        tags: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
        closedOn: any;
        closedBy: any;
        order: any;
        createdFromTaskId: any;
        isRecurring: any;
        trackedDuration: any;
        entityInformation: any;
        resourceVersion: any;
        subtasksDoneCount: any;
        subtasksCount: any;
    };
}
