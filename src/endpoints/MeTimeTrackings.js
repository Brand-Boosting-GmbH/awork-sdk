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
     */
    constructor (client) {
        super(client)
        /** @private */
        this._userPrefix = `/me`
    }
}