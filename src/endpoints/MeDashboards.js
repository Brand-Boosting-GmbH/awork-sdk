import '../globalTypedef'
import { Dashboard } from '../model/Dashboard'

/**
 * Class corresponding to Aworks MeDashboards Endpoints
 * @category Endpoints
 * @see [MeDashboards in Awork API Docs](https://openapi.awork.io/#/MeDashboards)
 */

export class MeDashboards {

     /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     * @param {String} taskId The id of the task.
     * @param {String} subtaskId The id of the subtask.
     */
    constructor (client) {
        /** @private */
        this._client = client
    }

    /**
     * Returns the dashboards of the current user.
     * @param {ListOptions} options Pagination and filtering options
     * @returns {Promise<Array<Dashboard>>}
     */
    async list (options) {
        const response = await this._client.get('/me/dashboards', options)
        const data = response.data()
        return data.map(d => new Dashboard(d))
    }
}