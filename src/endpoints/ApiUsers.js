import '../globalTypedef'
import { ApiUser } from "../model/ApiUser"

/**
 * Class corresponding to Aworks ApiUsers Endpoints
 * @category Endpoints
 * @see [ApiUsers in Awork API Docs](https://openapi.awork.io/#/ApiUsers)
 */
export class ApiUsers {
    /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client 
     */
     constructor(client) {
        /**
         * @private
         */
        this._client = client
    }

    /**
     * @typedef {Object} ApiUsersCreateModel
     * @property {String} name The name of the API user.
     * @property {String} roleId The role the user should be in. If no role is specified, the user will become an admin.
     * @property {String} clientId The client id this API user belongs to.
     */

    /**
     * Creates a new API user. Beware: API users will also be returned in the /users response when including archived users.
     * @param {ApiUsersCreateModel} apiUser The model to create an api user.
     * @returns {Promise<ApiUser>}
     */
    async create(apiUser) {
        const response = await this._client.post(`/apiusers`, apiUser)
        const data = response.data()
        return new ApiUser(data)
    }

    /**
     * @typedef {Object} ApiUsersUpdateModel
     * @property {String} name The name of the API user.
     * @property {String} roleId The role the user should be in. If no role is specified, the user will become an admin.
     */

    /**
     * Updates the API user with the specified id.
     * @param {String} apiUserId The id of the API user.
     * @param {ApiUsersUpdateModel} apiUser The model tp update an api user.
     * @returns {Promise<ApiUser>}
     */
    async updated(apiUserId, apiUser) {
        const response = await this._client.put(`/apiusers/${apiUserId}`, userUpdateModel)
        const data = response.data()
        return new ApiUser(data)
    }

    /**
     * Deletes the API user with the specified id.
     * @param {String} apiUserId The id of the API user.
     * @returns {Promise<void>}
     */
    async delete(apiUserId) {
        await this._client.delete(`/apiusers/${apiUserId}`)
    }
}