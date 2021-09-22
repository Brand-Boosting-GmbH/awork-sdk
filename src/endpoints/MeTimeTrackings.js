import '../globalTypedef'
import { TimeTrackings } from './TimeTrackings'

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
    constructor (client, taskId, subtaskId) {
        /** @private */
        this._client = client
        /** @private */
        this._taskId = taskId
        /** @private */
        this._subtaskId = subtaskId
        /** @private */
        this._userPrefix = `/me`
    }
}