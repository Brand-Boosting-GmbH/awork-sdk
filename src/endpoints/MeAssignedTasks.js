import '../globalTypedef'
import { UsersAssignedTasks } from './UsersAssignedTasks'

/**
 * Class corresponding to Aworks UsersAssignedTasks Endpoints
 * @category Endpoints
 * @see [UsersAssignedTasks in Awork API Docs](https://openapi.awork.io/#/UsersAssignedTasks)
 */
 export class MeAssignedTasks extends UsersAssignedTasks {

    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} taskId The id of the task.
    */
   constructor (client) {
       super(client)
       /** @private */
       this._userPrefix = `/me`
   }
}