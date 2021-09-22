/**
 * Class corresponding to Aworks UserPrivateTasksSubtasks Endpoints
 * @category Endpoints
 * @see [UserPrivateTasksSubtasks in Awork API Docs](https://openapi.awork.io/#/UserPrivateTasksSubtasks)
 */
export class MeTimeTrackings extends TimeTrackings {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    * @param {String} subtaskId The id of the subtask.
    */
    constructor(client: import('../client/index').Client, taskId: string, subtaskId: string);
    /** @private */
    private _taskId;
    /** @private */
    private _subtaskId;
}
import { TimeTrackings } from "./TimeTrackings";
