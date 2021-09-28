/**
 * TimeReport Model
 * @category Models
 * @class
 */
export class TimeReport {
    /**
     * @typedef {TimeReport & {_plain?: true}} TimeReportLike
     */
    /**
     * Model constructor
     * @param {TimeReportLike} data
     */
    constructor(data: TimeReport & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * The name of the time report.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * Whether the time report is shared.
     * @type {Boolean}
     */
    get shared(): boolean;
    /**
     * The date mode of the time report.
     * @type {('today'|'yesterday'|'selectDate'|'selectWeek'|'currentWeek'|'lastWeek'|'selectMonth'|'currentMonth'|'lastMonth'|'selectQuarter'|'currentQuarter'|'lastQuarter'|'selectYear'|'currentYear'|'lastYear'|'customRange'|'noFilter')}
     */
    get dateMode(): "today" | "yesterday" | "selectDate" | "selectWeek" | "currentWeek" | "lastWeek" | "selectMonth" | "currentMonth" | "lastMonth" | "selectQuarter" | "currentQuarter" | "lastQuarter" | "selectYear" | "currentYear" | "lastYear" | "customRange" | "noFilter";
    /**
     * The start date time of the report when DateMode is "customRange".
     * @type {String} date-time
     */
    get startOn(): string;
    /**
     * The end date time of the time report. when DateMode is "customRange".
     * @type {String} date-time
     */
    get endOn(): string;
    /**
     * The generated filter query of the time report.
     * @type {String} nullable
     */
    get filter(): string;
    /**
     * The actual chart type of the time report.
     * @type {('group'|'time')}
     */
    get chartType(): "time" | "group";
    /**
     * The id of the project of the time report. Used for the pdf reports.
     * @type {String} uuid
     */
    get projectId(): string;
    /**
     * The id of the company of the time report. Used for the pdf reports.
     * @type {String} uuid
     */
    get companyId(): string;
    /**
     * Summaries the values by property.
     * @type {String} nullable
     */
    get sumBy(): string;
    /**
     * Sort the values by property.
     * @type {String} nullable
     */
    get sortBy(): string;
    /**
     * The way how to sort the data.
     * @type {('asc'|'desc')}
     */
    get sortByOrder(): "desc" | "asc";
    /**
     * Rounding method of the time report.
     * @type {('nearQuarter'|'nearHalf'|'nearHour'|'upQuarter'|'upHalf'|'upHour')}
     */
    get roundBy(): "nearQuarter" | "nearHalf" | "nearHour" | "upQuarter" | "upHalf" | "upHour";
    /**
     * Group the values by property.
     * @type {String}
     */
    get groupBy(): string;
    /**
     * Sort the values of the time report by a column.
     * @type {String}
     */
    get sortColumn(): string;
    /**
     * List of shown Columns in the time report.
     * @type {Array<('status'|'duration'|'task'|'timeTrackingNote'|'typeOfWork'|'project'|'date'|'time'|'user'|'client'|'projectType'|'projectRole')>}
     */
    get availableColumns(): ("time" | "status" | "user" | "date" | "duration" | "task" | "timeTrackingNote" | "typeOfWork" | "project" | "client" | "projectType" | "projectRole")[];
    /**
     * Filter of bill satuses of the time report.
     * @type {Array<('billed'|'notBilled'|'notBillable')}
     */
    get billingStatuses(): ("billed" | "notBilled" | "notBillable")[];
    /**
     * Filter time entries by note
     * @type {String} nullable
     */
    get note(): string;
    /**
     * Filter time entries by users.
     * @type {Array<String>} uuid
     */
    get usersFilter(): string[];
    /**
     * Filter time entries by projects.
     * @type {Array<String>} uuid
     */
    get projectsFilter(): string[];
    /**
     * Filter to show also time entries without a project.
     * @type {Boolean}
     */
    get noProjectFilter(): boolean;
    /**
     * Filter time entries by projects of the companies.
     * @type {Array<String>} uuid
     */
    get projectCompaniesFilter(): string[];
    /**
     * Filter time entries by projects of the type.
     * @type {Array<String>} uuid
     */
    get projectTypesFilter(): string[];
    /**
     * Filter time entries by projects with status name.
     * @type {Array<String>}
     */
    get projectStatusesNameFilter(): string[];
    /**
     * Filter time entries by projects with status of type.
     * @type {Array<String>}
     */
    get projectStatusTypesFilter(): string[];
    /**
     * List of teams, to filter the projects for.
     * @type {Array<String>} uuid
     */
    get projectTeamsFilter(): string[];
    /**
     * Filter for the teams to filter the users.
     * @type {Array<String>} uuid
     */
    get userTeamsFilter(): string[];
    /**
     * @typedef {Object} TagObject
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {Color} color nullable
     * @property {String} entityId uuid
     */
    /**
     * Filter time entries by the tags of the task.
     * @type {Array<TagObject>}
     */
    get taskTagsModelFilter(): {
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
        color: Color;
        /**
         * uuid
         */
        entityId: string;
    }[];
    /**
     * Filter time entries by the tags of the project.
     * @type {Array<TagObject>}
     */
    get projectTagsModelFilter(): {
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
        color: Color;
        /**
         * uuid
         */
        entityId: string;
    }[];
    /**
     * Filter time entries by the tags of the users.
     * @type {Array<TagObject>}
     */
    get userTagsModelFilter(): {
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
        color: Color;
        /**
         * uuid
         */
        entityId: string;
    }[];
    /**
     * Group the time report by the type of works.
     * @type {Array<String>} uuid
     */
    get typesOfWorkFilter(): string[];
    /**
     * The id of the time report.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The workspace id of the time report.
     * @type {String} uuid
     */
    get workspaceId(): string;
    /**
     * @type {Object} user
     */
    get user(): any;
    /**
     * @type {String} uuid
     */
    get userId(): string;
    /**
     * @type {String} nullable
     */
    get userFirstName(): string;
    /**
     * @type {String} nullable
     */
    get userLastName(): string;
    /**
     * Whether the user has a profile image.
     * @type {Boolean}
     */
    get userHasImage(): boolean;
    /**
     * @type {String} nullable
     */
    get userKey(): string;
    /**
     * The date this time report was updated.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The version of the entity continuously incremented by 1 on every update of the entity.
     * @type {Integer} int64
     */
    get resourceVersion(): any;
    /**
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * @type {String} uuid
     */
    get updatedBy(): string;
    toPlainObject(): {
        name: any;
        shared: any;
        dateMode: any;
        startOn: any;
        endOn: any;
        filter: any;
        chartType: any;
        projectId: any;
        companyId: any;
        sumBy: any;
        sortBy: any;
        sortByOrder: any;
        roundBy: any;
        groupBy: any;
        sortColumn: any;
        availableColumns: any;
        billingStatuses: any;
        note: any;
        usersFilter: any;
        projectsFilter: any;
        noProjectFilter: any;
        projectCompaniesFilter: any;
        projectTypesFilter: any;
        projectStatusesNameFilter: any;
        projectStatusTypesFilter: any;
        projectTeamsFilter: any;
        userTeamsFilter: any;
        taskTagsModelFilter: any;
        projectTagsModelFilter: any;
        userTagsModelFilter: any;
        typesOfWorkFilter: any;
        id: any;
        workspaceId: any;
        user: {
            id: any;
            firstName: any;
            lastName: any;
            hasImage: any;
            key: any;
        };
        updatedOn: any;
        resourceVersion: any;
        createdOn: any;
        createdBy: any;
        updatedBy: any;
    };
}
