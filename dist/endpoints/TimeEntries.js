"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeEntries = void 0;

require("../globalTypedef");

var _TimeEntry = require("../model/TimeEntry");

/**
 * Class corresponding to Aworks TimeEntries Endpoints
 * @category Endpoints
 * @see [TimeEntries in Awork API Docs](https://openapi.awork.com/#/TimeEntries)
 */
class TimeEntries {
  /**
   * Endpoint constructor
   * @param {import('../client/index').Client} client 
   */
  constructor(client) {
    /** @private */
    this._client = client;
  }
  /**
   * Returns the time entry with the specified id. Depending on the time entry, the calling users has to have several permissions to get the time entry. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task. 
   * @param {String} timeEntryId The id of the time entry.
   * @returns {Promise<TimeEntry>}
   */


  async get(timeEntryId) {
    const response = await this._client.get(`/timeentries/${timeEntryId}`);
    const data = response.data();
    return new _TimeEntry.TimeEntry(data);
  }
  /**
   * Returns all time entries. Depending on the time entry, the calling users has to have several permissions to get the time entry. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task.
   * @param {*ListOptions} options Pagination and filtering options
   * @returns {Promise<Array<TimeEntry>>}
   */


  async list(options) {
    const response = await this._client.get('/timeentries', options);
    const data = response.data();
    return data.map(d => new _TimeEntry.TimeEntry(d));
  }
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


  async create(timeEntry) {
    const response = await this._client.post('/timeentries', timeEntry);
    const data = response.data();
    return new _TimeEntry.TimeEntry(data);
  }
  /**
   * @typedef {TimeEntryCreateModel} TimeEntryUpdateModel
   */

  /**
   * Updates the time entry with the specified id. Depending on the time entry, the calling users has to have several permissions to update the time entry. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task.
   * @param {String} timeEntryId The id of the time entry.
   * @param {TimeEntryUpdateModel} timeEntry The model to update the time entry with the specified id.
   * @returns {Promise<TimeEntry>}
   */


  async update(timeEntryId, timeEntry) {
    const response = await this._client.put(`/timeentries/${timeEntryId}`, timeEntry);
    const data = response.data();
    return new _TimeEntry.TimeEntry(data);
  }
  /**
   * Deletes the time entry with the specified id. Depending on the time entry, the calling users has to have several permissions to delete the time entry. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task. If the time entry is billed, Admin permissions are required.
   * @param {String} timeEntryId The id of the time entry.
   * @returns {Promise<void>}
   */


  async delete(timeEntryId) {
    await this._client.delete(`/timeentries/${timeEntryId}`);
  }
  /**
   * Deletes the time entries with the specified ids. Depending on the time entry, the calling users has to have several permissions to delete the time entries. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task. If the time entry is billed, Admin permissions are required.
   * @param {Array<String>} timeEntry The ids of the time entries, which should be deleted.
   * @returns {Promise<void>}
   */


  async deleteTimeEntries(timeEntry) {
    await this._client.post('/timeentries/delete', {
      ids: timeEntry
    });
  }
  /**
   * Sets the time entries with the specified ids to billed. Depending on the time entry, the calling users has to have several permissions to edit the time entries. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs permissions on: 'project-planning-data' if it is a project task. If the time entry is billed, the permissions can be ignored because there is no change.
   * @param {Array<String>} timeEntry The ids of the time entries, which should be set to billed.
   * @returns {Promise<void>}
   */


  async setBilled(timeEntry) {
    await this._client.post('/timeentries/setbilled', {
      ids: timeEntry
    });
  }
  /**
   * Sets the time entries with the specified ids to unbilled. For setting already billed time entries to unbilled, the user needs to have admin permissions.
   * @param {Array<String>} timeEntry The ids of the time entries, which should be set to unbilled.
   * @returns {Promise<void>}
   */


  async setUnbilled(timeEntry) {
    await this._client.post('/timeentries/setunbilled', {
      ids: timeEntry
    });
  }
  /**
   * Sets the time entries with the specified ids to unbillable. Already billed time entries cannot be set to unbillable -> Badrequest Depending on the time entry, the calling users has to have several permissions to edit the time entries. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs write permissions on: 'project-timetracking' if it is a project task.
   * @param {Array<String>} timeEntry The ids of the time entries, which should be set to unbillable.
   * @returns {Promise<void>}
   */


  async setUnbillable(timeEntry) {
    await this._client.post('/timeentries/setunbillable', {
      ids: timeEntry
    });
  }
  /**
   * Sets the time entries with the specified ids to billable. Depending on the time entry, the calling users has to have several permissions to edit the time entries. No permissions are required if the calling user is owner of this time entry. If the calling user is not the creator of the time entry and the time entry is connected to a project, 'write' permissions on the 'project-timetracking' feature are necessary. If the time entry is connected to a task, the user needs to be assignee of this task or the user needs 'write' permissions on: 'project-timetracking' if it is a project task.
   * @param {Array<String>} timeEntry The ids of the time entries, which should be set to billable.
   * @returns {Promise<void>} 
   */


  async setBillable(timeEntry) {
    await this._client.post('/timeentries/setbillable', {
      ids: timeEntry
    });
  }
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


  async setTypeOfWork(timeEntry) {
    await this._client.post('/timeentries/settypeofwork', {
      ids: timeEntry
    });
  }
  /**
   * Returns the last time entry of each user. The last time entry of each user is always the last one that was started. Time entires which are started in the future are ignored. If a time entry does not have a start time, 12.00 am is automatically assumed as the start time for comparison with other time entries from the same day.
   * @param {import('../global').ListOptions} [options] Pagination and filtering options
   * @returns {Promise<Array<TimeEntry>>}
   */


  async lastTimeEntries(options) {
    const response = await this._client.get('/timeentries/last', options);
    const data = response.data();
    return data.map(d => new _TimeEntry.TimeEntry(d));
  }

}

exports.TimeEntries = TimeEntries;