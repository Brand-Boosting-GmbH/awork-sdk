import '../globalTypedef'
import { UserOtherPrivateTasksSubtasks } from './UserOtherPrivateTasksSubtasks'

/**
 * Class corresponding to Aworks UserOtherPrivateTasksSubtasks Endpoints
 * @category Endpoints
 * @see [UserOtherPrivateTasksSubtasks in Awork API Docs](https://openapi.awork.io/#/UserOtherPrivateTasksSubtasks)
 */
export class MeUserPrivateSubtasks extends UserOtherPrivateTasksSubtasks {

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