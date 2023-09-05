/**
 * Class corresponding to Aworks MeDashboards Endpoints
 * @category Endpoints
 * @see [MeDashboards in Awork API Docs](https://openapi.awork.com/#/MeDashboards)
 */
export class MeDashboards {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    * @param {String} subtaskId The id of the subtask.
    */
    constructor(client: import('../client/index').Client);
    /** @private */
    private _client;
    /**
     * Returns the dashboards of the current user.
     * @param {import('../global').ListOptions} options Pagination and filtering options
     * @returns {Promise<Array<Dashboard>>}
     */
    list(options: import('../global').ListOptions): Promise<Array<Dashboard>>;
}
import { Dashboard } from "../model/Dashboard";
