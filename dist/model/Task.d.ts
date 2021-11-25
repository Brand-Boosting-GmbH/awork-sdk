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
     * The name of the task. Required.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * The description of the task.
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
     * @type {Integer} nullable
     */
    get laneOrder(): Integer;
    /**
     * The expected planned workload of the task, in seconds.
     * @type {Integer} nullable
     */
    get plannedDuration(): Integer;
    /**
     * The expected remaining duration from the original planned effort of the task, in seconds.
     * @type {Integer} nullable
     */
    get remainingDuration(): Integer;
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
     * @type {Integer}
     */
    get numberCount(): Integer;
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
     * @property {import('../index').Icon} icon nullable
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
        icon: import('../index').Icon;
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
     * @property {import('../index').Icon} icon nullable
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
        icon: import('../index').Icon;
        isArchived: boolean;
    };
    /**
     * @typedef {Object} AssigneeTagsObject
     * @property {String} id
     * @property {String} name nullable
     * @property {import('../index').Color} color nullable
     * @property {String} entityId
     */
    /**
     * @typedef {Object} Assignee
     * @property {String} id uuid
     * @property {String} firstName nullable
     * @property {String} lastName nullable
     * @property {Boolean} hasImage
     * @property {String} key nullable
     * @property {Array<AssigneeTagsObject>} tags The Tags of the user.
     * @property {Array<{id: String}>} teams The ids of the team the user is associated to.
     * /
     
    /**
     * The list assigned users of this task, or empty if not user was assigned.
     * @type {Array<Assignee>}
     */
    get assignees(): any;
    /**
     * The id of the project this task is assigned to. Only set if this is a project task. In this case, it is equal to the EntityId.
     * @type {String} uuid
     */
    get projectId(): string;
    /**
     * @typedef {Object} ProjectObject
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {String} key The unique key of the project
     * @property {{id: String, name: String, description: String, type: String, isArchived: Boolean}} projectStatus
     * @property {{id: String, name: String, hasImage: Boolean, description: String, tags: Array<Object>}} company The Tags of the company.
     * @property {{id: String, name: String, icon:import('../index').Icon, isArchived: Boolean}} hasImage Whether the project has an image.
     */
    /**
     * @type {ProjectObject}
     */
    get project(): {
        /**
         * uuid
         */
        id: string;
        /**
         * nullable
         */
        name: string;
        /**
         * The unique key of the project
         */
        key: string;
        projectStatus: {
            id: string;
            name: string;
            description: string;
            type: string;
            isArchived: boolean;
        };
        /**
         * The Tags of the company.
         */
        company: {
            id: string;
            name: string;
            hasImage: boolean;
            description: string;
            tags: Array<any>;
        };
        /**
         * Whether the project has an image.
         */
        hasImage: {
            id: string;
            name: string;
            icon: import('../index').Icon;
            isArchived: boolean;
        };
    };
    /**
     * Whether this task has an attachment.
     * @type {Boolean}
     */
    get hasAttachment(): boolean;
    /**
     * @typedef {Object} ListsObject
     * @property {String} name The name of the list.
     * @property {Number} order The order of the list.
     * @property {String} id The id of the task list.
     * @property {Boolean} isArchived Whether the task list has been archived.
     * @property {String} createdOn The date this task list was created.
     * @property {String} createdBy The id of the user who created this task list.
     * @property {String} updatedOn The date this task list was last modified.
     * @property {String} updatedBy The id of the user who last modified this task list.
     * @property {Number} orderOfTask The order of the task in the list.
     */
    /**
     * The lists to which the task is assigned to.
     * @type {Array<ListsObject>}
     */
    get lists(): {
        /**
         * The name of the list.
         */
        name: string;
        /**
         * The order of the list.
         */
        order: number;
        /**
         * The id of the task list.
         */
        id: string;
        /**
         * Whether the task list has been archived.
         */
        isArchived: boolean;
        /**
         * The date this task list was created.
         */
        createdOn: string;
        /**
         * The id of the user who created this task list.
         */
        createdBy: string;
        /**
         * The date this task list was last modified.
         */
        updatedOn: string;
        /**
         * The id of the user who last modified this task list.
         */
        updatedBy: string;
        /**
         * The order of the task in the list.
         */
        orderOfTask: number;
    }[];
    /**
     * The id of the entity this task is assigned to. This is the id of the project if this is a project task, or the id of a user if this is a private task.
     * @type {String}
     */
    get entityId(): string;
    /**
     * @typedef {Object} TagsListObject
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {import('../index').Color} color nullable
     * @property {String} entityId uuid
     * @property {String} createdOn date-time
     * @property {String} createdBy uuid
     * @property {String} updatedOn date-time
     * @property {String} updatedBy uuid
     */
    /**
     * The list of tags.
     * @type {Array<TagsListObject>}
     */
    get tags(): {
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
        color: import('../index').Color;
        /**
         * uuid
         */
        entityId: string;
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
    }[];
    /**
     * The date this was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this task.
     * @type {String} uuid
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
     * The date the task was set to closed.
     * @type {String} date-time
     */
    get closedOn(): string;
    /**
     * The user who closed the task.
     * @type {String}
     */
    get closedBy(): string;
    /**
     * The order of the task in a task status column.
     * @type {Number} double
     */
    get order(): number;
    /**
     * When the task was created by a recurrency rule, the id is the link to the template of which the task was created.
     * @type {String} uuid
     */
    get createdFromTaskId(): string;
    /**
     * If the task is a recurrency template (used to create new tasks by a recurrency rule), the flag is true.
     * @type {Boolean}
     */
    get isRecurring(): boolean;
    /**
     * The summed up duration of all time trackings for this task.
     * @type {Integer} nullable
     */
    get trackedDuration(): Integer;
    /**
     * The entity to which the task is linked.
     * @type {Object}
     */
    get entityInformation(): any;
    /**
     * The version of the entity continuously incremented by 1 on every update of the entity.
     * @type {Integer} int64
     */
    get resourceVersion(): Integer;
    /**
     * The number of subtasks which are already done.
     * @type {Integer} int32
     */
    get subtasksDoneCount(): Integer;
    /**
     * The total number of subtasks.
     * @type {Integer} int32
     */
    get subtasksCount(): Integer;
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
