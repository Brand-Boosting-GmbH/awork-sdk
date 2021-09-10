import '../globalTypedef'
import { ClientApplication } from "../model/ClientApplication"

/**
 * Class corresponding to Aworks ClientApplications Endpoints
 * @category Endpoints
 * @see [ClientApplications in Awork API Docs](https://openapi.awork.io/#/ClientApplications)
 */
export class ClientApplications {

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
     * Returns the client application with the specified id.
     * @param {String} clientId 
     * @returns {Promise<ClientApplication>}
     */
    async get (clientId) {
        const response = await this._client.get(`/clientapplications/${clientId}`)
        const data = response.data()
        return new ClientApplication(data)
    }

    /**
     * Returns all client applications.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<ClientApplication>>}
     */
    async list (options) {
        const response = await this._client.get('/clientapplications', options)
        const data = response.data()
        return data.map(d => new ClientApplication(d))
    }

    /**
     * @typedef {Object} ClientRegisterModel The client application is required for the OAuth flow.
     * @property {String} clientId The client application's identifier.
     * @property {String} displayName The client application's display name.
     * @property {Array<String>} redirectUris The redirect URIs.
     */

    /**
     * Registers a new client application.
     * @param {ClientRegisterModel} client 
     * @returns {Promise<ClientApplication>}
     */
    async create (client) {
        const response = await this._client.post('/clientapplications', client)
        const data = response.data()
        return new ClientApplication(data)
    }

    /**
     * @typedef {Object} ClientUpdateModel The model to update a client application.
     * @property {String} displayName The client application's display name.
     * @property {Array<String>} redirectUris The redirect URIs.
     */

    /**
     * @param {String} clientId 
     * @param {ClientUpdateModel} client 
     * @returns {Promise<ClientApplication>}
     */
    async update (clientId, client) {
        const response = await this._client.put(`/clientapplications/${clientId}`, client)
        const data = response.data()
        return new ClientApplication(data)
    }

    /**
     * Deletes the specified client application.
     * @param {String} clientId 
     * @returns {Promise<void>}
     */
    async delete (clientId) {
        await this._client.delete(`/clientapplications/${clientId}`)
    }

    /**
     * Generates a new secret for the specified client application.
     * @param {String} clientId 
     * @returns {Promise<({ clientSecret: String })>}
     */
    async generateSecret (clientId) {
        const response = await this._client.post(`/clientapplications/${clientId}/generatesecret`)
        return response.data()
    }

    /**
     * 
     * @param {String} clientId 
     * @returns {Promise<({ apiUserId: String })>}
     */
    async generateApiKey (clientId) {
        const response = await this._client.post(`/clientapplications/${clientId}/generateapikey`)
        return response.data()
    }




}