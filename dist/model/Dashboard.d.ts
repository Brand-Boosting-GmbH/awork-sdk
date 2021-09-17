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
    constructor(data: Dashboard & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * The id of the dashboard.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The id of the user that the dashboard belongs to.
     * @type {String} uuid
     */
    get userId(): string;
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
    get widgets(): {
        /**
         * The id of the widget.
         */
        id: string;
        /**
         * The type of the widget.
         */
        type?: string;
        /**
         * The name of the widget.
         */
        name?: string;
        /**
         * The id of the entity that the widget is referencing.
         */
        entityId?: string;
        /**
         * The column of the widget within the dashboard.
         */
        column: any;
        /**
         * The order of the widget within the column.
         */
        order: any;
        /**
         * The settings of the widget.
         */
        settings?: string;
        /**
         * The value of a widget.
         */
        value?: string;
    }[];
    toPlainObject(): {
        id: any;
        userId: any;
        widgets: any;
    };
}
