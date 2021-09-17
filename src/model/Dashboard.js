/**
 * Dashboard Model
 * @category Models
 * @class
 */
 export class Dashboard {

    /**
     * @typedef {Dashboard & {_plain?: true}} DashboardLike
     */

    /**
     * Model constructor
     * @param {DashboardLike} data 
     */
    constructor(data) {
         /** @private */
        this._data = data || {}
    }

    /**
     * The id of the dashboard.
     * @type {String} uuid
     */
    get id () {
        return this._data.id
    }

    /**
     * The id of the user that the dashboard belongs to.
     * @type {String} uuid
     */
    get userId () {
        return this._data.userId
    }

    /**
     * @typedef {Object} WidgetObject
     * @property {String} id The id of the widget.
     * @property {String} [type] The type of the widget.
     * @property {String} [name] The name of the widget.
     * @property {String} [entityId] The id of the entity that the widget is referencing.
     * @property {Integer} column The column of the widget within the dashboard.
     * @property {Integer} order The order of the widget within the column.
     * @property {String} [settings] The settings of the widget.
     * @property {String} [value] The value of a widget.
     */

    /**
     * A list of all widgets of the dashboard.
     * @type {Array<WidgetObject>}
     */
    get widgets () {
        return this._data.widgets
    }

    toPlainObject () {
        return {
            id: this._data.id,
            userId: this._data.userId,
            widgets: this._data.widgets
        }
    }
}