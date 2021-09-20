import '../globalTypedef'
import { ProjectTasks } from './ProjectTasks'

/**
 * Class corresponding to Aworks ProjectTasks Endpoints
 * @category Endpoints
 * @see [ProjectTasks in Awork API Docs](https://openapi.awork.io/#/ProjectTasks)
 */
 export class MeProjectTasks extends ProjectTasks {

    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} projectId The id of the project.
    */
   constructor (client, projectId) {
       /** @private */
       this._client = client
       /** @private */
       this._projectId = projectId
       /** @private */
       this._projectsPrefix = `/me`
   }
}