"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeEntry = void 0;

/**
 * TimeEntry Model
 * @category Models
 * @class
 */
class TimeEntry {
  /**
   * @typedef {TimeEntry & {_plain?: true}} TimeEntryLike
   */

  /**
   * Model constructor
   * @param {TimeEntryLike} data 
   */
  constructor(data) {
    /** @private */
    this._data = data || {};
  }
  /**
   * Whether the time tracking is billable or not.
   * @type {Boolean}
   */


  get isBillable() {
    return this._data.isBillable;
  }
  /**
   * Whether the time tracking is billed or not.
   * @type {Boolean}
   */


  get isBilled() {
    return this._data.isBilled;
  }
  /**
   * The id of the task.
   * @type {String} uuid
   */


  get taskId() {
    return this._data.taskId;
  }
  /**
   * The id of the project.
   * @type {String} uuid
   */


  get projectId() {
    return this._data.projectId;
  }
  /**
   * The note of the time tracking.
   * @type {String} nullable
   */


  get note() {
    return this._data.note;
  } //LOCATION

  /**
   * Holds longitude and latitude values of the geo-location.
   */


  get location() {
    return this._data.location;
  }
  /**
   * The logitude value of the geo-location.
   * @type {Number} double
   */


  get locationLongitude() {
    return this._data.location.longitude;
  }
  /**
   * The latitude value of the geo-location.
   * @type {Number} double
   */


  get locationLatitude() {
    return this._data.location.latitude;
  }
  /**
   * The date (in UTC) when the time tracking was started.
   * @type {String} date-time
   */


  get startDateUtc() {
    return this._data.startDateUtc;
  } //START-TIME-UTC

  /**
   * The start time in UTC when the time tracking was started.
   */


  get startTimeUtc() {
    return this._data.startTimeUtc;
  }
  /**
   * @type {Integer} int64, readOnly
   */


  get startTimeUtcTicks() {
    return this._data.startTimeUtc.ticks;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get startTimeUtcDays() {
    return this._data.startTimeUtc.days;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get startTimeUtcHours() {
    return this._data.startTimeUtc.hours;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get startTimeUtcMilliseconds() {
    return this._data.startTimeUtc.milliseconds;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get startTimeUtcMinutes() {
    return this._data.startTimeUtc.minutes;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get startTimeUtcSeconds() {
    return this._data.startTimeUtc.seconds;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get startTimeUtcTotalDays() {
    return this._data.startTimeUtc.totalDays;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get startTimeUtcTotalHours() {
    return this._data.startTimeUtc.totalHours;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get startTimeUtcTotalMilliseconds() {
    return this._data.startTimeUtc.totalMilliseconds;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get startTimeUtcTotalMinutes() {
    return this._data.startTimeUtc.totalMinutes;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get startTimeUtcTotalSeconds() {
    return this._data.startTimeUtc.totalSeconds;
  } //END-TIME-UTC

  /**
   * The end time in UTC when the time tracking ended.
   */


  get endTimeUtc() {
    return this._data.endTimeUtc;
  }
  /**
   * @type {Integer} int64, readOnly
   */


  get endTimeUtcTicks() {
    return this._data.endTimeUtc.ticks;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get endTimeUtcDays() {
    return this._data.endTimeUtc.days;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get endTimeUtcHours() {
    return this._data.endTimeUtc.hours;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get endTimeUtcMilliseconds() {
    return this._data.endTimeUtc.milliseconds;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get endTimeUtcMinutes() {
    return this._data.endTimeUtc.minutes;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get endTimeUtcSeconds() {
    return this._data.endTimeUtc.seconds;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get endTimeUtcTotalDays() {
    return this._data.endTimeUtc.totalDays;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get endTimeUtcTotalHours() {
    return this._data.endTimeUtc.totalHours;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get endTimeUtcTotalMilliseconds() {
    return this._data.endTimeUtc.totalMilliseconds;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get endTimeUtcTotalMinutes() {
    return this._data.endTimeUtc.totalMinutes;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get endTimeUtcTotalSeconds() {
    return this._data.endTimeUtc.totalSeconds;
  } //START-DATE-LOCAL    

  /**
   * The date (in Local) when the time tracking was started.
   * @type {String} date-time
   */


  get startDateLocal() {
    return this._data.startDateLocal;
  } //START-TIME-LOCAL

  /**
   * The start time local when the time tracking was started.
   */


  get startTimeLocal() {
    return this._data.startTimeLocal;
  }
  /**
   * @type {Integer} int64, readOnly
   */


  get startTimeLocalTicks() {
    return this._data.startTimeLocal.ticks;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get startTimeLocalDays() {
    return this._data.startTimeLocal.days;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get startTimeLocalHours() {
    return this._data.startTimeLocal.hours;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get startTimeLocalMilliseconds() {
    return this._data.startTimeLocal.milliseconds;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get startTimeLocalMinutes() {
    return this._data.startTimeLocal.minutes;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get startTimeLocalSeconds() {
    return this._data.startTimeLocal.seconds;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get startTimeLocalTotalDays() {
    return this._data.startTimeLocal.totalDays;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get startTimeLocalTotalHours() {
    return this._data.startTimeLocal.totalHours;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get startTimeLocalTotalMilliseconds() {
    return this._data.startTimeLocal.totalMilliseconds;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get startTimeLocalTotalMinutes() {
    return this._data.startTimeLocal.totalMinutes;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get startTimeLocalTotalSeconds() {
    return this._data.startTimeLocal.totalSeconds;
  } //END-TIME-LOCAL    

  /**
   * The end time in local when the time tracking ended.
   */


  get endTimeLocal() {
    return this._data.endTimeLocal;
  }
  /**
   * @type {Integer} int64, readOnly
   */


  get endTimeLocalTicks() {
    return this._data.endTimeLocal.ticks;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get endTimeLocalDays() {
    return this._data.endTimeLocal.days;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get endTimeLocalHours() {
    return this._data.endTimeLocal.hours;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get endTimeLocalMilliseconds() {
    return this._data.endTimeLocal.milliseconds;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get endTimeLocalMinutes() {
    return this._data.endTimeLocal.minutes;
  }
  /**
   * @type {Integer} int32, readOnly
   */


  get endTimeLocalSeconds() {
    return this._data.endTimeLocal.seconds;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get endTimeLocalTotalDays() {
    return this._data.endTimeLocal.totalDays;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get endTimeLocalTotalHours() {
    return this._data.endTimeLocal.totalHours;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get endTimeLocalTotalMilliseconds() {
    return this._data.endTimeLocal.totalMilliseconds;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get endTimeLocalTotalMinutes() {
    return this._data.endTimeLocal.totalMinutes;
  }
  /**
   * @type {Number} double,  readOnly
   */


  get endTimeLocalTotalSeconds() {
    return this._data.endTimeLocal.totalSeconds;
  } //TIMEZONE

  /**
   * The original timezone of the time tracking. The format of the timezone is the IANA standard
   * @type {String}
   */


  get timezone() {
    return this._data.timezone;
  }
  /**
   * The duration of the time tracking in seconds. Required when the time tracking has already been completed and EndTime has not been set.
   * @type {Integer} int32
   */


  get duration() {
    return this._data.duration;
  }
  /**
   * The id of the type of work.
   * @type {String} uuid
   */


  get typeOfWorkId() {
    return this._data.typeOfWorkId;
  }
  /**
   * The id of the user.
   * @type {String} uuid
   */


  get userId() {
    return this._data.userId;
  }
  /**
   * The id of the time tracking.
   * @type {String} uuid
   */


  get id() {
    return this._data.id;
  }
  /**
   * The id of the user who created this time tracking.
   * @type {String} uuid
   */


  get createdBy() {
    return this._data.createdBy;
  }
  /**
   * The date this time tracking was created.
   * @type {String} date-time
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * The id of the user who last updated this time tracking.
   * @type {String} uuid
   */


  get updatedBy() {
    return this._data.updatedBy;
  }
  /**
   * The date this time tracking was last modified.
   * @type {String} date-time
   */


  get updatedOn() {
    return this._data.updatedOn;
  } //TYPE-OF-WORK

  /**
   * The type of work of the time entry.
   */


  get typeOfWork() {
    return this._data.typeOfWork;
  }
  /**
   * @type {String} uuid
   */


  get typeOfWorkid() {
    return this._data.typeOfWork.id;
  }
  /**
   * @type {String} nullable
   */


  get typeOfWorkName() {
    return this._data.typeOfWork.name;
  }
  /**
   * @type {String} nullable
   */


  get typeOfWorkIcon() {
    return this._data.typeOfWork.icon;
  }
  /**
   * @type {Boolean}
   */


  get typeOfWorkIsArchived() {
    return this._data.typeOfWork.isArchived;
  } //USER

  /**
   * The user which is assigned to the time entry.
   */


  get user() {
    return this._data.user;
  }
  /**
   * @type {String} uuid
   */


  get userid() {
    return this._data.user.id;
  }
  /**
   * @type {String} nullable
   */


  get userFirstName() {
    return this._data.user.firstName;
  }
  /**
   * @type {String} nullable
   */


  get userLastName() {
    return this._data.user.lastName;
  }
  /**
   * @type {Boolean}
   */


  get userHasImage() {
    return this._data.user.hasImage;
  }
  /**
   * @type {String} nullable
   */


  get userKey() {
    return this._data.user.key;
  }
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


  get userTags() {
    return this._data.user.tags;
  }
  /**
   * @type {Array<{id: String}>}
   */


  get userTeams() {
    return this._data.user.teams;
  } //TASK   

  /**
   * The task of the time entry.
   */


  get task() {
    return this._data.task;
  }
  /**
   * @type {String} uuid
   */


  get taskid() {
    return this._data.task.id;
  }
  /**
   * @type {String} nullable
   */


  get taskName() {
    return this._data.task.name;
  }
  /**
   * @type {String} nullable
   */


  get taskKey() {
    return this._data.task.key;
  }
  /**
   * @type {String} nullable
   */


  get taskBaseType() {
    return this._data.task.baseType;
  }
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


  get taskTaskStatus() {
    return this._data.task.taskStatus;
  }
  /**
   * @type {String} uuid
   */


  get taskTaskStatusId() {
    return this._data.task.taskStatusId;
  }
  /**
   * @type {String} uuid
   */


  get taskTypeOfWorkId() {
    return this._data.task.typeOfWorkId;
  }
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


  get taskTaskType() {
    return this._data.task.taskType;
  }
  /**
   * @type {String} uuid
   */


  get taskAssigneeId() {
    return this._data.task.assigneeId;
  }
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


  get taskAssignee() {
    return this._data.task.assignee;
  }
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


  get taskProject() {
    return this._data.task.project;
  }
  /**
   * @type {String} uuid
   */


  get taskProjectId() {
    return this._data.task.projectId;
  }
  /**
   * @type {Integer} int32
   */


  get taskPlannedDuration() {
    return this._data.task.plannedDuration;
  }
  /**
   * @type {Integer} int32
   */


  get taskRemainingDuration() {
    return this._data.task.remainingDuration;
  }
  /**
   * @type {String} date-time
   */


  get taskClosedOn() {
    return this._data.task.closedOn;
  }
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


  get taskTags() {
    return this._data.task.tags;
  }
  /**
   * @type {String} uuid
   */


  get taskCreatedBy() {
    return this._data.task.createdBy;
  } //PROJECT

  /**
   * The project of the time entry.
   */


  get project() {
    return this._data.project;
  }
  /**
   * @type {String} uuid
   */


  get projectid() {
    return this._data.project.id;
  }
  /**
   * @type {String} nullable
   */


  get projectName() {
    return this._data.project.name;
  }
  /**
   * @type {String} nullable
   */


  get projectKey() {
    return this._data.project.key;
  }
  /**
   * @typedef {Object} ProjectStatusObject
   * @property {String} id uuid
   * @property {String} name nullable
   * @property {String} description nullable
   * @property {String} type nullable
   * @property {Boolean} isArchived
   */

  /**
   * @type {ProjectStatusObject}
   */


  get projectProjectStatus() {
    return this._data.project.projectStatus;
  }
  /**
   * @typedef {Object} CompanyObject
   * @property {String} id uuid
   * @property {String} name nullable
   * @property {Boolean} hasImage
   * @property {String} description nullable
   */

  /**
   * @type {CompanyObject}
   */


  get projectCompany() {
    return this._data.project.company;
  }
  /**
   * @typedef {TaskTypeObject} ProjectTypeObject
   */

  /**
   * @type {ProjectTypeObject}
   */


  get projectProjectType() {
    return this._data.project.projectType;
  }
  /**
   * @typedef {Object} ProjectTagsObject
   * @property {String} id uuid
   * @property {String} name nullable
   * @property {String} color nullable
   * @property {String} entityId uuid
   */

  /**
   * @type {Array<ProjectTagsObject>} nullable
   */


  get projectTags() {
    return this._data.project.tags;
  }
  /**
   * @type {Array<{id: String}>} nullable
   */


  get projectTeams() {
    return this._data.project.teams;
  }
  /**
   * The end date (in UTC) of the time tracking.
   * @type {String} date-time
   */


  get endDateUtc() {
    return this._data.endDateUtc;
  }
  /**
   * The end date (in Local) of the time tracking.
   * @type {String} date-time
   */


  get endDateLocal() {
    return this._data.endDateLocal;
  }
  /**
   * The version of the entity continuously incremented by 1 on every update of the entity.
   * @type {Integer} int64
   */


  get resourceVersion() {
    return this._data.resourceVersion;
  }

  toPlainObject() {
    return {
      isBillable: this._data.isBillable,
      isBilled: this._data.isBilled,
      taskId: this._data.taskId,
      projectId: this._data.projectId,
      note: this._data.note,
      location: {
        longitude: this._data.location.longitude,
        latitude: this._data.location.latitude
      },
      startDateUtc: this._data.startDateUtc,
      startTimeUtc: {
        ticks: this._data.startTimeUtc.ticks,
        days: this._data.startTimeUtc.days,
        hours: this._data.startTimeUtc.hours,
        milliseconds: this._data.startTimeUtc.milliseconds,
        minutes: this._data.startTimeUtc.minutes,
        seconds: this._data.startTimeUtc.seconds,
        totalDays: this._data.startTimeUtc.totalDays,
        totalHours: this._data.startTimeUtc.totalHours,
        totalMilliseconds: this._data.startTimeUtc.totalMilliseconds,
        totalMinutes: this._data.startTimeUtc.totalMinutes,
        totalSeconds: this._data.startTimeUtc.totalSeconds
      },
      endTimeUtc: {
        ticks: this._data.endTimeUtc.ticks,
        days: this._data.endTimeUtc.days,
        hours: this._data.endTimeUtc.hours,
        milliseconds: this._data.endTimeUtc.milliseconds,
        minutes: this._data.endTimeUtc.minutes,
        seconds: this._data.endTimeUtc.seconds,
        totalDays: this._data.endTimeUtc.totalDays,
        totalHours: this._data.endTimeUtc.totalHours,
        totalMilliseconds: this._data.endTimeUtc.totalMilliseconds,
        totalMinutes: this._data.endTimeUtc.totalMinutes,
        totalSeconds: this._data.endTimeUtc.totalSeconds
      },
      startDateLocal: this._data.startDateLocal,
      startTimeLocal: {
        ticks: this._data.startTimeLocal.ticks,
        days: this._data.startTimeLocal.days,
        hours: this._data.startTimeLocal.hours,
        milliseconds: this._data.startTimeLocal.milliseconds,
        minutes: this._data.startTimeLocal.minutes,
        seconds: this._data.startTimeLocal.seconds,
        totalDays: this._data.startTimeLocal.totalDays,
        totalHours: this._data.startTimeLocal.totalHours,
        totalMilliseconds: this._data.startTimeLocal.totalMilliseconds,
        totalMinutes: this._data.startTimeLocal.totalMinutes,
        totalSeconds: this._data.startTimeLocal.totalSeconds
      },
      endTimeLocal: {
        ticks: this._data.endTimeLocal.ticks,
        days: this._data.endTimeLocal.days,
        hours: this._data.endTimeLocal.hours,
        milliseconds: this._data.endTimeLocal.milliseconds,
        minutes: this._data.endTimeLocal.minutes,
        seconds: this._data.endTimeLocal.seconds,
        totalDays: this._data.endTimeLocal.totalDays,
        totalHours: this._data.endTimeLocal.totalHours,
        totalMilliseconds: this._data.endTimeLocal.totalMilliseconds,
        totalMinutes: this._data.endTimeLocal.totalMinutes,
        totalSeconds: this._data.endTimeLocal.totalSeconds
      },
      timezone: this._data.timezone,
      duration: this._data.duration,
      typeOfWorkId: this._data.typeOfWorkId,
      userId: this._data.userId,
      id: this._data.id,
      createdBy: this._data.createdBy,
      createdOn: this._data.createdOn,
      updatedBy: this._data.updatedBy,
      updatedOn: this._data.updatedOn,
      typeOfWork: {
        id: this._data.typeOfWorkId.id,
        name: this._data.typeOfWorkId.name,
        icon: this._data.typeOfWorkId.icon,
        isArchived: this._data.typeOfWorkId.isArchived
      },
      user: {
        id: this._data.user.id,
        firstName: this._data.user.firstName,
        lastName: this._data.user.lastName,
        hasImage: this._data.user.hasImage,
        key: this._data.user.key,
        tags: this._data.user.tags,
        team: this._data.user.team
      },
      task: {
        id: this._data.task.id,
        name: this._data.task.name,
        key: this._data.task.key,
        baseType: this._data.task.baseType,
        taskStatus: this._data.task.taskStatus,
        tastStatusId: this._data.task.taskStatusId,
        typeOfWorkId: this._data.task.typeOfWorkId,
        taskType: this._data.task.taskType,
        assigneeId: this._data.task.assigneeId,
        assignee: this._data.task.assignee,
        project: this._data.task.project,
        projectId: this._data.task.projectId,
        plannedDuration: this._data.task.plannedDuration,
        remainingDuration: this._data.task.remainingDuration,
        closedOn: this._data.task.closedOn,
        tags: this._data.task.tags,
        createdBy: this._data.task.createdBy
      },
      project: {
        id: this._data.project.id,
        name: this._data.project.name,
        key: this._data.project.key,
        projectStatus: this._data.project.projectStatus,
        company: this._data.project.company,
        projectType: this._data.project.projectType,
        tags: this._data.project.tags,
        teams: this._data.project.teams
      },
      endDateUtc: this._data.endDateUtc,
      endDateLocal: this._data.project.endDateLocal,
      resourceVersion: this._data.project.resourceVersion
    };
  }

}

exports.TimeEntry = TimeEntry;