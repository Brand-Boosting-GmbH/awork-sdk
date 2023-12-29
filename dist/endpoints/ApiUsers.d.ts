/**
 * Class corresponding to Aworks ApiUsers Endpoints
 * @category Endpoints
 * @see [ApiUsers in Awork API Docs](https://openapi.awork.com/#/ApiUsers)
 */
export class ApiUsers {
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
    create(apiUser: {
        /**
         * The name of the API user.
         */
        name: string;
        /**
         * The role the user should be in. If no role is specified, the user will become an admin.
         */
        roleId: string;
        /**
         * The client id this API user belongs to.
         */
        clientId: string;
    }): Promise<ApiUser>;
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
    updated(apiUserId: string, apiUser: {
        /**
         * The name of the API user.
         */
        name: string;
        /**
         * The role the user should be in. If no role is specified, the user will become an admin.
         */
        roleId: string;
    }): Promise<ApiUser>;
    /**
     * Deletes the API user with the specified id.
     * @param {String} apiUserId The id of the API user.
     * @returns {Promise<void>}
     */
    delete(apiUserId: string): Promise<void>;
}
import { ApiUser } from "../model/ApiUser";
