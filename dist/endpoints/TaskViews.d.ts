/**
 * Class corresponding to Aworks TaskViews Endpoints
 * @category Endpoints
 * @see [TaskViews in Awork API Docs](https://openapi.awork.io/#/TaskViews)
 */
export class TaskViews {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor(client: import('../client/index').Client);
    /** @private */
    private _client;
    /** @private */
    private _userPrefix;
    /**
     * Returns one task view that is specified by the id. Task views that are not shared are not considered.
     * @param {String} The id of the task view.
     * @returns {Promise<TaskView>}
     */
    get(taskViewId: any): Promise<TaskView>;
    /**
     * Returns all task views. Task views that are not shared are not considered.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<TaskView>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<TaskView>>;
}
import { TaskView } from "../model/TaskView";
