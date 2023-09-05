import '../globalTypedef'
import { PrivateTasksTaskStatus } from '../model/PrivateTasksTaskStatus'
import { Task } from '../model/Task'
import { UsersPrivateTasks } from './UsersPrivateTasks'

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
   constructor(client) {
      super(client)
      /** @private */
      this._userPrefix = `me`
   }

   /**
    * Returns all tags of the private tasks.
    * @returns {Promise<Array<String>>}
    */
   async tags() {
      const response = await this._client.get(`/me/privatetasks/tags`)
      return response.data()
   }
}