/**
 * Class corresponding to Aworks TimeEntries Endpoints
 * @category Endpoints
 * @see [TimeEntries in Awork API Docs](https://openapi.awork.io/#/TimeEntries)
 */
export class TimeEntries {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor(client: import('../client/index').Client);
    /** @private */
    private _client;
    /**
     * Returns the time entry with the specified id. Depending on the time entry, the calling users has to have several permissions to get the time entry. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task.
     * @param {String} timeEntryId The id of the time entry.
     * @returns {Promise<TimeEntry>}
     */
    get(timeEntryId: string): Promise<TimeEntry>;
    /**
     * Returns all time entries. Depending on the time entry, the calling users has to have several permissions to get the time entry. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task.
     * @param {*ListOptions} options Pagination and filtering options
     * @returns {Promise<Array<TimeEntry>>}
     */
    list(options: any): Promise<Array<TimeEntry>>;
    /**
     * @typedef {Object} LocationObject
     * @property {Number} longitude The logitude value of the geo-location.
     * @property {Number} latitude The latitude value of the geo-location.
     */
    /**
     * @typedef {Object} TimeEntryCreateModel
     * @property {Boolean} [isBillable] Whether the time tracking is billable or not.
     * @property {Boolean} [isBilled] Whether the time tracking is billed or not.
     * @property {String} [taskId] The id of the task.
     * @property {String} [projectId] The id of the project.
     * @property {String} [note] The note of the time tracking.
     * @property {LocationObject} [location] The location.
     * @property {String} startDateUtc The date (in UTC) when the time tracking was started.
     * @property {Object} [startTimeUtc]
     * @property {Object} [endTimeUtc]
     * @property {String} startDateLocal The date (in Local) when the time tracking was started.
     * @property {Object} [startTimeLocal]
     * @property {Object} [endTimeLocal]
     * @property {String} timezone The original timezone of the time tracking. The format of the timezone is the IANA standard.
     * @property {Integer} [duration] The duration of the time tracking in seconds. Required when the time tracking has already been completed and EndTime has not been set.
     * @property {String} typeOfWorkId The id of the type of work.
     * @property {String} userId The id of the user.
     */
    /**
     * Creates a new time entry. Depending on the time entry, the calling users has to have several permissions to create the time entry. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task.
     * @param {TimeEntryCreateModel} timeEntry The model to create a time entry.
     * @returns {Promise<TimeEntry>}
     */
    create(timeEntry: {
        /**
         * Whether the time tracking is billable or not.
         */
        isBillable?: boolean;
        /**
         * Whether the time tracking is billed or not.
         */
        isBilled?: boolean;
        /**
         * The id of the task.
         */
        taskId?: string;
        /**
         * The id of the project.
         */
        projectId?: string;
        /**
         * The note of the time tracking.
         */
        note?: string;
        /**
         * The location.
         */
        location?: {
            /**
             * The logitude value of the geo-location.
             */
            longitude: number;
            /**
             * The latitude value of the geo-location.
             */
            latitude: number;
        };
        /**
         * The date (in UTC) when the time tracking was started.
         */
        startDateUtc: string;
        startTimeUtc?: any;
        endTimeUtc?: any;
        /**
         * The date (in Local) when the time tracking was started.
         */
        startDateLocal: string;
        startTimeLocal?: any;
        endTimeLocal?: any;
        /**
         * The original timezone of the time tracking. The format of the timezone is the IANA standard.
         */
        timezone: string;
        /**
         * The duration of the time tracking in seconds. Required when the time tracking has already been completed and EndTime has not been set.
         */
        duration?: any;
        /**
         * The id of the type of work.
         */
        typeOfWorkId: string;
        /**
         * The id of the user.
         */
        userId: string;
    }): Promise<TimeEntry>;
    /**
     * @typedef {TimeEntryCreateModel} TimeEntryUpdateModel
     */
    /**
     * Updates the time entry with the specified id. Depending on the time entry, the calling users has to have several permissions to update the time entry. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task.
     * @param {String} timeEntryId The id of the time entry.
     * @param {TimeEntryUpdateModel} timeEntry The model to update the time entry with the specified id.
     * @returns {Promise<TimeEntry>}
     */
    update(timeEntryId: string, timeEntry: {
        /**
         * Whether the time tracking is billable or not.
         */
        isBillable?: boolean;
        /**
         * Whether the time tracking is billed or not.
         */
        isBilled?: boolean;
        /**
         * The id of the task.
         */
        taskId?: string;
        /**
         * The id of the project.
         */
        projectId?: string;
        /**
         * The note of the time tracking.
         */
        note?: string;
        /**
         * The location.
         */
        location?: {
            /**
             * The logitude value of the geo-location.
             */
            longitude: number;
            /**
             * The latitude value of the geo-location.
             */
            latitude: number;
        };
        /**
         * The date (in UTC) when the time tracking was started.
         */
        startDateUtc: string;
        startTimeUtc?: any;
        endTimeUtc?: any;
        /**
         * The date (in Local) when the time tracking was started.
         */
        startDateLocal: string;
        startTimeLocal?: any;
        endTimeLocal?: any;
        /**
         * The original timezone of the time tracking. The format of the timezone is the IANA standard.
         */
        timezone: string;
        /**
         * The duration of the time tracking in seconds. Required when the time tracking has already been completed and EndTime has not been set.
         */
        duration?: any;
        /**
         * The id of the type of work.
         */
        typeOfWorkId: string;
        /**
         * The id of the user.
         */
        userId: string;
    }): Promise<TimeEntry>;
    /**
     * Deletes the time entry with the specified id. Depending on the time entry, the calling users has to have several permissions to delete the time entry. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task. If the time entry is billed, Admin permissions are required.
     * @param {String} timeEntryId The id of the time entry.
     * @returns {Promise<void>}
     */
    delete(timeEntryId: string): Promise<void>;
    /**
     * Deletes the time entries with the specified ids. Depending on the time entry, the calling users has to have several permissions to delete the time entries. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task. If the time entry is billed, Admin permissions are required.
     * @param {Array<String>} timeEntry The ids of the time entries, which should be deleted.
     * @returns {Promise<void>}
     */
    deleteTimeEntries(timeEntry: Array<string>): Promise<void>;
    /**
     * Sets the time entries with the specified ids to billed. Depending on the time entry, the calling users has to have several permissions to edit the time entries. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task. If the time entry is billed, the permissions can be ignored because there is no change.
     * @param {Array<String>} timeEntry The ids of the time entries, which should be set to billed.
     * @returns {Promise<void>}
     */
    setBilled(timeEntry: Array<string>): Promise<void>;
    /**
     * Sets the time entries with the specified ids to unbilled. For setting already billed time entries to unbilled, the user needs to have admin permissions.
     * @param {Array<String>} timeEntry The ids of the time entries, which should be set to unbilled.
     * @returns {Promise<void>}
     */
    setUnbilled(timeEntry: Array<string>): Promise<void>;
    /**
     * Sets the time entries with the specified ids to unbillable. Already billed time entries cannot be set to unbillable -> Badrequest Depending on the time entry, the calling users has to have several permissions to edit the time entries. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs write permissions on: 'project-timetracking' if it is a project task.
     * @param {Array<String>} timeEntry The ids of the time entries, which should be set to unbillable.
     * @returns {Promise<void>}
     */
    setUnbillable(timeEntry: Array<string>): Promise<void>;
    /**
     * Sets the time entries with the specified ids to billable. Depending on the time entry, the calling users has to have several permissions to edit the time entries. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs 'write' permissions on: 'project-timetracking' if it is a project task.
     * @param {Array<String>} timeEntry The ids of the time entries, which should be set to billable.
     * @returns {Promise<void>}
     */
    setBillable(timeEntry: Array<string>): Promise<void>;
    /**
     * @typedef {Object} SetTypeOfWorkModel
     * @property {Array<String>} [ids] The ids of the time entries, for which the type of work should be set.
     * @property {String} typeOfWorkId The type of work id, to which the time entries should be set to.
     */
    /**
     * Sets the type of work of the specified timeentries. Depending on the time entry, the calling users has to have several permissions to edit the time entries. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task.
     * @param {SetTypeOfWorkModel} timeEntry The model of ids of time entries.
     * @returns {Promise<void>}
     */
    setTypeOfWork(timeEntry: {
        /**
         * The ids of the time entries, for which the type of work should be set.
         */
        ids?: Array<string>;
        /**
         * The type of work id, to which the time entries should be set to.
         */
        typeOfWorkId: string;
    }): Promise<void>;
    /**
     * Returns the last time entry of each user. The last time entry of each user is always the last one that was started. Time entires which are started in the future are ignored. If a time entry does not have a start time, 12.00 am is automatically assumed as the start time for comparison with other time entries from the same day.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<TimeEntry>>}
     */
    lastTimeEntries(options?: ListOptions): Promise<Array<TimeEntry>>;
}
import { TimeEntry } from "../model/TimeEntry";
