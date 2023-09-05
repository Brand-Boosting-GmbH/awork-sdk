/**
 * Class corresponding to Aworks UserPrivateTasksSubtasks Endpoints
 * @category Endpoints
 * @see [UserPrivateTasksSubtasks in Awork API Docs](https://openapi.awork.com/#/UserPrivateTasksSubtasks)
 */
export class MeUserPrivateSubtasks extends UserPrivateTasksSubtasks {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    * @param {String} subtaskId The id of the subtask.
    */
    constructor(client: import('../client/index').Client, taskId: string);
}
import { UserPrivateTasksSubtasks } from "./UserPrivateTasksSubtasks";
