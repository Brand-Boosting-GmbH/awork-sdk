/**
 * Class corresponding to Aworks TimeReports Endpoints
 * @category Endpoints
 * @see [TimeReports in Awork API Docs](https://openapi.awork.io/#/TimeReports)
 */
export class TimeReports {
    /**
     * ENdpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor(client: import('../client/index').Client);
    /**
     * @private
     */
    private _client;
    /**
     * Returns time reports of the specified id. Returns time reports of the specified id.
     * @param {String} timeReportId The id of the time report.
     * @returns {Promise<TimeReport>}
     */
    get(timeReportId: string): Promise<TimeReport>;
    /**
     * Returns all time reports of a user. Returns time reports the user created as well as the shared time reports of other users.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<TimeReport>>}
     */
    list(options?: ListOptions): Promise<Array<TimeReport>>;
    /**
     * Creates a new time report.
     * @param {TimeReport} timeReport The timereport model.
     * @returns {Promise<TimeReport>}
     */
    create(timeReport: TimeReport): Promise<TimeReport>;
    /**
     * Updates the time report of the specified id.
     * @param {String} timeReportId The id of the time report.
     * @param {TimeReport} timeReport The timereport model.
     * @returns {Promise<TimeReport>}
     */
    update(timeReportId: string, timeReport: TimeReport): Promise<TimeReport>;
    /**
     * Deletes the time report of the specified id.
     * @param {String} timeReportId The id of the time report.
     * @returns {Promise<void>}
     */
    delete(timeReportId: string): Promise<void>;
}
import { TimeReport } from "../model/TimeReport";
