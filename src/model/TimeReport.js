export class TimeReport {
    constructor(data) {
        this._data = data || {}
    }

    /**
     * The name of the time report.
     * @type {String} nullable
     */
    get name () {
        return this._data.name
    }

    /**
     * Whether the time report is shared.
     * @type {Boolean}
     */
    get shared () {
        return this._data.shared
    }

    /**
     * The date mode of the time report.
     * @type {('today'|'yesterday'|'selectDate'|'selectWeek'|'currentWeek'|'lastWeek'|'selectMonth'|'currentMonth'|'lastMonth'|'selectQuarter'|'currentQuarter'|'lastQuarter'|'selectYear'|'currentYear'|'lastYear'|'customRange'|'noFilter')}
     */
    get dateMode() {
        return this._data.dateMode
    }

    /**
     * The start date time of the report when DateMode is "customRange".
     * @type {String} date-time
     */
    get startOn () {
        return this._data.startOn
    }

    /**
     * The end date time of the time report. when DateMode is "customRange".
     * @type {String} date-time
     */
    get endOn () {
        return this._data.endOn
    }

    /**
     * The generated filter query of the time report.
     * @type {String} nullable
     */
    get filter () {
        return this._data.filter
    }

    /**
     * The actual chart type of the time report.
     * @type {('group'|'time')}
     */
    get chartType () {
        return this._data.chartType
    }

    /**
     * The id of the project of the time report. Used for the pdf reports.
     * @type {String} uuid
     */
    get projectId () {
        return this._data.projectId
    }

    /**
     * The id of the company of the time report. Used for the pdf reports.
     * @type {String} uuid
     */
    get companyId () {
        return this._data.companyId
    }

    /**
     * Summaries the values by property.
     * @type {String} nullable
     */
    get sumBy () {
        return this._data.sumBy
    }

    /**
     * Sort the values by property.
     * @type {String} nullable
     */
    get sortBy () {
        return this._data.sortBy
    }

    /**
     * The way how to sort the data.
     * @type {('asc'|'desc')}
     */
    get sortByOrder () {
        return this._data.sortByOrder
    }

    /**
     * Rounding method of the time report.
     * @type {('nearQuarter'|'nearHalf'|'nearHour'|'upQuarter'|'upHalf'|'upHour')}
     */
    get roundBy () {
        return this._data.roundBy
    }

    /**
     * Group the values by property.
     * @type {String}
     */
    get groupBy () {
        return this._data.groupBy
    }

    /**
     * Sort the values of the time report by a column.
     * @type {String}
     */
    get sortColumn () {
        return this._data.sortColumn
    }

    /**
     * List of shown Columns in the time report.
     * @type {Array<('status'|'duration'|'task'|'timeTrackingNote'|'typeOfWork'|'project'|'date'|'time'|'user'|'client'|'projectType'|'projectRole')>}
     */
    get availableColumns () {
        return this._data.availableColumns
    }

    /**
     * 
     */
    get billingStatuses () {
        return this._data.billingStatuses
    }
}