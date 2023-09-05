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
    constructor(client: import('../client/index').Client);
    /**
     * @private
     */
    private _client;
    /**
     * Returns the client application with the specified id.
     * @param {String} clientId The id of the client application.
     * @returns {Promise<ClientApplication>}
     */
    get(clientId: string): Promise<ClientApplication>;
    /**
     * Returns all client applications.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<ClientApplication>>}
     */
    list(options?: import('../global').ListOptions): Promise<Array<ClientApplication>>;
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
    create(client: {
        /**
         * The client application's identifier.
         */
        clientId: string;
        /**
         * The client application's display name.
         */
        displayName: string;
        /**
         * The redirect URIs.
         */
        redirectUris: Array<string>;
    }): Promise<ClientApplication>;
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
    update(clientId: string, client: {
        /**
         * The client application's display name.
         */
        displayName: string;
        /**
         * The redirect URIs.
         */
        redirectUris: Array<string>;
    }): Promise<ClientApplication>;
    /**
     * Deletes the specified client application.
     * @param {String} clientId The id of the client application.
     * @returns {Promise<void>}
     */
    delete(clientId: string): Promise<void>;
    /**
     * Generates a new secret for the specified client application.
     * @param {String} clientId The id of the client application.
     * @returns {Promise<String>}
     */
    generateSecret(clientId: string): Promise<string>;
    /**
     * Generates an API key for the specified client application. Requires an API user.
     * @param {String} clientId The id of the client application.
     * @returns {Promise<String>}
     */
    generateApiKey(clientId: string): Promise<string>;
}
import { ClientApplication } from "../model/ClientApplication";
