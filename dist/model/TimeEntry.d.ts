/**
 * TimeEntry Model
 * @category Models
 * @class
 */
export class TimeEntry {
    /**
     * @typedef {TimeEntry & {_plain?: true}} TimeEntryLike
     */
    /**
     * Model constructor
     * @param {TimeEntryLike} data
     */
    constructor(data: TimeEntry & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * Whether the time tracking is billable or not.
     * @type {Boolean}
     */
    get isBillable(): boolean;
    /**
     * Whether the time tracking is billed or not.
     * @type {Boolean}
     */
    get isBilled(): boolean;
    /**
     * The id of the task.
     * @type {String} uuid
     */
    get taskId(): string;
    /**
     * The id of the project.
     * @type {String} uuid
     */
    get projectId(): string;
    /**
     * The note of the time tracking.
     * @type {String} nullable
     */
    get note(): string;
    get location(): any;
    /**
     * The logitude value of the geo-location.
     * @type {Number} double
     */
    get locationLongitude(): number;
    /**
     * The latitude value of the geo-location.
     * @type {Number} double
     */
    get locationLatitude(): number;
    /**
     * The date (in UTC) when the time tracking was started.
     * @type {String} date-time
     */
    get startDateUtc(): string;
    get startTimeUtc(): any;
    /**
     * @type {Integer} int64, readOnly
     */
    get startTimeUtcTicks(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get startTimeUtcDays(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get startTimeUtcHours(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get startTimeUtcMilliseconds(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get startTimeUtcMinutes(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get startTimeUtcSeconds(): any;
    /**
     * @type {Number} double,  readOnly
     */
    get startTimeUtcTotalDays(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get startTimeUtcTotalHours(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get startTimeUtcTotalMilliseconds(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get startTimeUtcTotalMinutes(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get startTimeUtcTotalSeconds(): number;
    get endTimeUtc(): any;
    /**
     * @type {Integer} int64, readOnly
     */
    get endTimeUtcTicks(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get endTimeUtcDays(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get endTimeUtcHours(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get endTimeUtcMilliseconds(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get endTimeUtcMinutes(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get endTimeUtcSeconds(): any;
    /**
     * @type {Number} double,  readOnly
     */
    get endTimeUtcTotalDays(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get endTimeUtcTotalHours(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get endTimeUtcTotalMilliseconds(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get endTimeUtcTotalMinutes(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get endTimeUtcTotalSeconds(): number;
    /**
     * The date (in Local) when the time tracking was started.
     * @type {String} date-time
     */
    get startDateLocal(): string;
    get startTimeLocal(): any;
    /**
     * @type {Integer} int64, readOnly
     */
    get startTimeLocalTicks(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get startTimeLocalDays(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get startTimeLocalHours(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get startTimeLocalMilliseconds(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get startTimeLocalMinutes(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get startTimeLocalSeconds(): any;
    /**
     * @type {Number} double,  readOnly
     */
    get startTimeLocalTotalDays(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get startTimeLocalTotalHours(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get startTimeLocalTotalMilliseconds(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get startTimeLocalTotalMinutes(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get startTimeLocalTotalSeconds(): number;
    get endTimeLocal(): any;
    /**
     * @type {Integer} int64, readOnly
     */
    get endTimeLocalTicks(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get endTimeLocalDays(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get endTimeLocalHours(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get endTimeLocalMilliseconds(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get endTimeLocalMinutes(): any;
    /**
     * @type {Integer} int32, readOnly
     */
    get endTimeLocalSeconds(): any;
    /**
     * @type {Number} double,  readOnly
     */
    get endTimeLocalTotalDays(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get endTimeLocalTotalHours(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get endTimeLocalTotalMilliseconds(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get endTimeLocalTotalMinutes(): number;
    /**
     * @type {Number} double,  readOnly
     */
    get endTimeLocalTotalSeconds(): number;
    /**
     * The original timezone of the time tracking. The format of the timezone is the IANA standard
     * @type {String}
     */
    get timezone(): string;
    /**
     * The duration of the time tracking in seconds. Required when the time tracking has already been completed and EndTime has not been set.
     * @type {Integer} int32
     */
    get duration(): any;
    /**
     * The id of the type of work.
     * @type {String} uuid
     */
    get typeOfWorkId(): string;
    /**
     * The id of the user.
     * @type {String} uuid
     */
    get userId(): string;
    /**
     * The id of the time tracking.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The id of the user who created this time tracking.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date this time tracking was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who last updated this time tracking.
     * @type {String} uuid
     */
    get updatedBy(): string;
    /**
     * The date this time tracking was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    get typeOfWork(): any;
    /**
     * @type {String} uuid
     */
    get typeOfWorkid(): string;
    /**
     * @type {String} nullable
     */
    get typeOfWorkName(): string;
    /**
     * @type {String} nullable
     */
    get typeOfWorkIcon(): string;
    /**
     * @type {Boolean}
     */
    get typeOfWorkIsArchived(): boolean;
    get user(): any;
    /**
     * @type {String} uuid
     */
    get userid(): string;
    /**
     * @type {String} nullable
     */
    get userFirstName(): string;
    /**
     * @type {String} nullable
     */
    get userLastName(): string;
    /**
     * @type {Boolean}
     */
    get userHasImage(): boolean;
    /**
     * @type {String} nullable
     */
    get userKey(): string;
    /**
     * @typedef {Object} UserTagsObject
     * @property {String} id uuid
     * @property {String} createdOn date-time
     * @property {String} createdBy uuid
     * @property {String} updatedOn date-time
     * @property {String} updatedBy uuid
     * @property {String} name nullable
     */
    /**
     * @type {Array<UserTagsObject>}
     */
    get userTags(): {
        /**
         * uuid
         */
        id: string;
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
        /**
         * nullable
         */
        name: string;
    }[];
    /**
     * @typedef {Object} TeamsObject
     * @property {String} id uuid
     */
    /**
     * @type {Array<TeamsObject>}
     */
    get userTeams(): {
        /**
         * uuid
         */
        id: string;
    }[];
    get task(): any;
    /**
     * @type {String} uuid
     */
    get taskid(): string;
    /**
     * @type {String} nullable
     */
    get taskName(): string;
    /**
     * @type {String} nullable
     */
    get taskKey(): string;
    /**
     * @type {String} nullable
     */
    get taskBaseType(): string;
    /**
     * @typedef {Object} TaskStatusObject
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {String} description nullable
     * @property {Boolean} isArchived
     */
    /**
     * @type {TaskStatusObject}
     */
    get taskTaskStatus(): {
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
        description: string;
        isArchived: boolean;
    };
    /**
     * @type {String} uuid
     */
    get taskTaskStatusId(): string;
    /**
     * @type {String} uuid
     */
    get taskTypeOfWorkId(): string;
    /**
     * @typedef {Object} TaskTypeObject
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {String} icon nullable
     * @property {Boolean} isArchived
     */
    /**
     * @type {TaskTypeObject}
     */
    get taskTaskType(): {
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
     * @type {String} uuid
     */
    get taskAssigneeId(): string;
    /**
     * @typedef {Object} AssigneeObject
     * @property {String} id uuid
     * @property {String} firstName nullable
     * @property {String} lastName nullable
     * @property {Boolean} hasImage
     * @property {String} key nullable
     */
    /**
     * @type {AssigneeObject}
     */
    get taskAssignee(): {
        /**
         * uuid
         */
        id: string;
        /**
         * nullable
         */
        firstName: string;
        /**
         * nullable
         */
        lastName: string;
        hasImage: boolean;
        /**
         * nullable
         */
        key: string;
    };
    /**
     * @typedef {Object} ProjectObject
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {String} key nullable
     * @property {{id: String, name: String, description: String, type: String, isArchived: Boolean}} projectStatus
     * @property {{id: String, name: String, hasImage: String, description: String}} company
     * @property {{id: String, name: String, icon: String, isArchived: Boolean}} projectType
     * @property {Array<{id: String, name: String, color: String, entityId: String}>} tags
     * @property {Array<{id: String}>} teams
     */
    /**
     * @type {ProjectObject}
     */
    get taskProject(): {
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
        key: string;
        projectStatus: {
            id: string;
            name: string;
            description: string;
            type: string;
            isArchived: boolean;
        };
        company: {
            id: string;
            name: string;
            hasImage: string;
            description: string;
        };
        projectType: {
            id: string;
            name: string;
            icon: string;
            isArchived: boolean;
        };
        tags: Array<{
            id: string;
            name: string;
            color: string;
            entityId: string;
        }>;
        teams: Array<{
            id: string;
        }>;
    };
    /**
     * @type {String} uuid
     */
    get taskProjectId(): string;
    /**
     * @type {Integer} int32
     */
    get taskPlannedDuration(): any;
    /**
     * @type {Integer} int32
     */
    get taskRemainingDuration(): any;
    /**
     * @type {String} date-time
     */
    get taskClosedOn(): string;
    /**
     * @typedef {Object} TaskTagsObject
     * @property {String} id uuid
     * @property {String} createdOn date-time
     * @property {String} createdBy uuid
     * @property {String} updatedOn date-time
     * @property {String} updatedBy uuid
     * @property {String} name nullable
     */
    /**
     * @type {Array<TaskTagsObject>}
     */
    get taskTags(): {
        /**
         * uuid
         */
        id: string;
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
        /**
         * nullable
         */
        name: string;
    }[];
    /**
     * @type {String} uuid
     */
    get taskCreatedBy(): string;
    get project(): any;
    get endDateUtc(): any;
    get endDateLocal(): any;
    get resourceVersion(): any;
}