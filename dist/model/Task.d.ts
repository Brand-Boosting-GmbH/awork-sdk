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
    get projectId(): any;
    get project(): any;
    get hasAttachment(): any;
    get lists(): any;
    get entityId(): any;
    get tags(): any;
    get createdOn(): any;
    get createdBy(): any;
    get updatedOn(): any;
    get updatedBy(): any;
    get closedOn(): any;
    get closedBy(): any;
    get order(): any;
    get createdFromTaskId(): any;
    get isRecurring(): any;
    get trackedDuration(): any;
    get entityInformation(): any;
    get resourceVersion(): any;
    get subtasksDoneCount(): any;
    get subtasksCount(): any;
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
