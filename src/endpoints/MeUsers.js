import '../globalTypedef'
import { Users } from './Users'
import { User } from '../model/User'

/**
 * Class corresponding to Aworks Users Endpoints
 * @category Endpoints
 * @see [Users in Awork API Docs](https://openapi.awork.io/#/Users)
 */
export class MeUsers extends Users {

     /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     */
    constructor (client) {
        super(client)
        /** @private */
        this._userPrefix = `/me`
    }

    /**
     * Returns the currently logged-in user and workspace.
     * @returns {Promise<User>}
     */
    async get() {
        const response = await this._client.get(`${this._userPrefix}`)
        const data = response.data()
        return new User(data)
    }
}