/**
 * Class corresponding to Aworks UserOtherPrivateTasksSubtasks Endpoints
 * @category Endpoints
 * @see [UserOtherPrivateTasksSubtasks in Awork API Docs](https://openapi.awork.com/#/UserOtherPrivateTasksSubtasks)
 */
export class MeUserOtherPrivateSubtasks extends UserOtherPrivateTasksSubtasks {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    * @param {String} subtaskId The id of the subtask.
    */
    constructor(client: import('../client/index').Client, taskId: string);
}
import { UserOtherPrivateTasksSubtasks } from "./UserOtherPrivateTasksSubtasks";
