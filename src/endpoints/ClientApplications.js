import '../globalTypedef'
import { ClientApplication } from "../model/ClientApplication"

/**
 * Class corresponding to Aworks ClientApplications Endpoints
 * @category Endpoints
 * @see [ClientApplications in Awork API Docs](https://openapi.awork.com/#/ClientApplications)
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
     * @param {String} clientId The id of the client application.
     * @returns {Promise<ClientApplication>}
     */
    async get(clientId) {
        const response = await this._client.get(`/clientapplications/${clientId}`)
        const data = response.data()
        return new ClientApplication(data)
    }

    /**
     * Returns all client applications.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<ClientApplication>>}
     */
    async list(options) {
        const response = await this._client.get('/clientapplications', options)
        const data = response.data()
        return data.map(d => new ClientApplication(d))
    }

    /**
     * @typedef {Object} ClientCreateModel The client application is required for the OAuth flow.
     * @property {String} clientId The client application's identifier.
     * @property {String} displayName The client application's display name.
     * @property {Array<String>} redirectUris The redirect URIs.
     */

    /**
     * Registers a new client application.
     * @param {ClientCreateModel} client The client application is required for the OAuth flow.
     * @returns {Promise<ClientApplication>}
     */
    async create(client) {
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
     * @param {String} clientId The id of the client application.
     * @param {ClientUpdateModel} client The client application is required for the OAuth flow.
     * @returns {Promise<ClientApplication>}
     */
    async update(clientId, client) {
        const response = await this._client.put(`/clientapplications/${clientId}`, client)
        const data = response.data()
        return new ClientApplication(data)
    }

    /**
     * Deletes the specified client application.
     * @param {String} clientId The id of the client application.
     * @returns {Promise<void>}
     */
    async delete(clientId) {
        await this._client.delete(`/clientapplications/${clientId}`)
    }

    /**
     * Generates a new secret for the specified client application.
     * @param {String} clientId The id of the client application.
     * @returns {Promise<String>}
     */
    async generateSecret(clientId) {
        const response = await this._client.post(`/clientapplications/${clientId}/generatesecret`)
        return response.data().clientSecret
    }

    /**
     * Generates an API key for the specified client application. Requires an API user.
     * @param {String} clientId The id of the client application.
     * @returns {Promise<String>}
     */
    async generateApiKey(clientId) {
        const response = await this._client.post(`/clientapplications/${clientId}/generateapikey`)
        return response.data().apiUserId
    }




}