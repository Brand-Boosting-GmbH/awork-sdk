"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimeReport = void 0;

require("../globalTypedef");

/**
 * TimeReport Model
 * @category Models
 * @class
 */
class TimeReport {
  /**
   * @typedef {TimeReport & {_plain?: true}} TimeReportLike
   */

  /**
   * Model constructor
   * @param {TimeReportLike} data 
   */
  constructor(data) {
    /** @private */
    this._data = data || {};
  }
  /**
   * The name of the time report.
   * @type {String} nullable
   */


  get name() {
    return this._data.name;
  }
  /**
   * Whether the time report is shared.
   * @type {Boolean}
   */


  get shared() {
    return this._data.shared;
  }
  /**
   * The date mode of the time report.
   * @type {('today'|'yesterday'|'selectDate'|'selectWeek'|'currentWeek'|'lastWeek'|'selectMonth'|'currentMonth'|'lastMonth'|'selectQuarter'|'currentQuarter'|'lastQuarter'|'selectYear'|'currentYear'|'lastYear'|'customRange'|'noFilter')}
   */


  get dateMode() {
    return this._data.dateMode;
  }
  /**
   * The start date time of the report when DateMode is "customRange".
   * @type {String} date-time
   */


  get startOn() {
    return this._data.startOn;
  }
  /**
   * The end date time of the time report. when DateMode is "customRange".
   * @type {String} date-time
   */


  get endOn() {
    return this._data.endOn;
  }
  /**
   * The generated filter query of the time report.
   * @type {String} nullable
   */


  get filter() {
    return this._data.filter;
  }
  /**
   * The actual chart type of the time report.
   * @type {('group'|'time')}
   */


  get chartType() {
    return this._data.chartType;
  }
  /**
   * The id of the project of the time report. Used for the pdf reports.
   * @type {String} uuid
   */


  get projectId() {
    return this._data.projectId;
  }
  /**
   * The id of the company of the time report. Used for the pdf reports.
   * @type {String} uuid
   */


  get companyId() {
    return this._data.companyId;
  }
  /**
   * Summaries the values by property.
   * @type {String} nullable
   */


  get sumBy() {
    return this._data.sumBy;
  }
  /**
   * Sort the values by property.
   * @type {String} nullable
   */


  get sortBy() {
    return this._data.sortBy;
  }
  /**
   * The way how to sort the data.
   * @type {('asc'|'desc')}
   */


  get sortByOrder() {
    return this._data.sortByOrder;
  }
  /**
   * Rounding method of the time report.
   * @type {('nearQuarter'|'nearHalf'|'nearHour'|'upQuarter'|'upHalf'|'upHour')}
   */


  get roundBy() {
    return this._data.roundBy;
  }
  /**
   * Group the values by property.
   * @type {String}
   */


  get groupBy() {
    return this._data.groupBy;
  }
  /**
   * Sort the values of the time report by a column.
   * @type {String}
   */


  get sortColumn() {
    return this._data.sortColumn;
  }
  /**
   * List of shown Columns in the time report.
   * @type {Array<('status'|'duration'|'task'|'timeTrackingNote'|'typeOfWork'|'project'|'date'|'time'|'user'|'client'|'projectType'|'projectRole')>}
   */


  get availableColumns() {
    return this._data.availableColumns;
  }
  /**
   * Filter of bill satuses of the time report.
   * @type {Array<('billed'|'notBilled'|'notBillable')}
   */


  get billingStatuses() {
    return this._data.billingStatuses;
  }
  /**
   * Filter time entries by note
   * @type {String} nullable
   */


  get note() {
    return this._data.note;
  }
  /**
   * Filter time entries by users.
   * @type {Array<String>} uuid
   */


  get usersFilter() {
    return this._data.usersFilter;
  }
  /**
   * Filter time entries by projects.
   * @type {Array<String>} uuid
   */


  get projectsFilter() {
    return this._data.projectsFilter;
  }
  /**
   * Filter to show also time entries without a project.
   * @type {Boolean}
   */


  get noProjectFilter() {
    return this._data.noProjectFilter;
  }
  /**
   * Filter time entries by projects of the companies.
   * @type {Array<String>} uuid
   */


  get projectCompaniesFilter() {
    return this._data.projectCompaniesFilter;
  }
  /**
   * Filter time entries by projects of the type.
   * @type {Array<String>} uuid
   */


  get projectTypesFilter() {
    return this._data.projectTypesFilter;
  }
  /**
   * Filter time entries by projects with status name.
   * @type {Array<String>}
   */


  get projectStatusesNameFilter() {
    return this._data.projectStatusesNameFilter;
  }
  /**
   * Filter time entries by projects with status of type.
   * @type {Array<String>}
   */


  get projectStatusTypesFilter() {
    return this._data.projectStatusTypesFilter;
  }
  /**
   * List of teams, to filter the projects for.
   * @type {Array<String>} uuid
   */


  get projectTeamsFilter() {
    return this._data.projectTeamsFilter;
  }
  /**
   * Filter for the teams to filter the users.
   * @type {Array<String>} uuid
   */


  get userTeamsFilter() {
    return this._data.userTeamsFilter;
  }
  /**
   * @typedef {Object} TagObject
   * @property {String} id uuid
   * @property {String} name nullable
   * @property {import('../index').Color} color nullable
   * @property {String} entityId uuid
   */

  /**
   * Filter time entries by the tags of the task.
   * @type {Array<TagObject>}
   */


  get taskTagsModelFilter() {
    return this._data.taskTagsModelFilter;
  }
  /**
   * Filter time entries by the tags of the project.
   * @type {Array<TagObject>}
   */


  get projectTagsModelFilter() {
    return this._data.projectTagsModelFilter;
  }
  /**
   * Filter time entries by the tags of the users.
   * @type {Array<TagObject>}
   */


  get userTagsModelFilter() {
    return this._data.userTagsModelFilter;
  }
  /**
   * Group the time report by the type of works.
   * @type {Array<String>} uuid
   */


  get typesOfWorkFilter() {
    return this._data.typesOfWorkFilter;
  }
  /**
   * The id of the time report.
   * @type {String} uuid
   */


  get id() {
    return this._data.id;
  }
  /**
   * The workspace id of the time report.
   * @type {String} uuid
   */


  get workspaceId() {
    return this._data.workspaceId;
  }
  /**
   * @type {Object} user
   */


  get user() {
    return this._data.user;
  }
  /**
   * @type {String} uuid
   */


  get userId() {
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
   * Whether the user has a profile image.
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
   * The date this time report was updated.
   * @type {String} date-time
   */


  get updatedOn() {
    return this._data.updatedOn;
  }
  /**
   * The version of the entity continuously incremented by 1 on every update of the entity.
   * @type {Integer} int64
   */


  get resourceVersion() {
    return this._data.resourceVersion;
  }
  /**
   * @type {String} date-time
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * @type {String} uuid
   */


  get createdBy() {
    return this._data.createdBy;
  }
  /**
   * @type {String} uuid
   */


  get updatedBy() {
    return this._data.updatedBy;
  }

  toPlainObject() {
    return {
      name: this._data.name,
      shared: this._data.shared,
      dateMode: this._data.dateMode,
      startOn: this._data.startOn,
      endOn: this._data.endOn,
      filter: this._data.filter,
      chartType: this._data.chartType,
      projectId: this._data.projectId,
      companyId: this._data.companyId,
      sumBy: this._data.sumBy,
      sortBy: this._data.sortBy,
      sortByOrder: this._data.sortByOrder,
      roundBy: this._data.roundBy,
      groupBy: this._data.groupBy,
      sortColumn: this._data.sortColumn,
      availableColumns: this._data.availableColumns,
      billingStatuses: this._data.billingStatuses,
      note: this._data.note,
      usersFilter: this._data.usersFilter,
      projectsFilter: this._data.projectsFilter,
      noProjectFilter: this._data.noProjectFilter,
      projectCompaniesFilter: this._data.projectCompaniesFilter,
      projectTypesFilter: this._data.projectTypesFilter,
      projectStatusesNameFilter: this._data.projectStatusesNameFilter,
      projectStatusTypesFilter: this._data.projectStatusTypesFilter,
      projectTeamsFilter: this._data.projectTeamsFilter,
      userTeamsFilter: this._data.userTeamsFilter,
      taskTagsModelFilter: this._data.taskTagsModelFilter,
      projectTagsModelFilter: this._data.projectTagsModelFilter,
      userTagsModelFilter: this._data.userTagsModelFilter,
      typesOfWorkFilter: this._data.typesOfWorkFilter,
      id: this._data.id,
      workspaceId: this._data.workspaceId,
      user: {
        id: this._data.user.id,
        firstName: this._data.user.firstName,
        lastName: this._data.user.lastName,
        hasImage: this._data.user.hasImage,
        key: this._data.user.key
      },
      updatedOn: this._data.updatedOn,
      resourceVersion: this._data.resourceVersion,
      createdOn: this._data.createdOn,
      createdBy: this._data.createdBy,
      updatedBy: this._data.updatedBy
    };
  }

}

exports.TimeReport = TimeReport;