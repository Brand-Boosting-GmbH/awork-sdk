/**
 * Class corresponding to Aworks UsersPrivateTasks Endpoints
 * @category Endpoints
 * @see [UsersPrivateTasks in Awork API Docs](https://openapi.awork.com/#/UsersPrivateTasks)
 */
export class MeUsersPrivateTasks extends UsersPrivateTasks {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    */
    constructor(client: import('../client/index').Client);
    /**
     * Returns all tags of the private tasks.
     * @returns {Promise<Array<String>>}
     */
    tags(): Promise<Array<string>>;
}
import { UsersPrivateTasks } from "./UsersPrivateTasks";
