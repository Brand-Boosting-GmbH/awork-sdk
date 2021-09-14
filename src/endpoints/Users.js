import '../globalTypedef'
import { User } from "../model/User"
import { ExtendedUser } from "../model/ExtendedUser"

/**
 * Class corresponding to Aworks Users Endpoints
 * @category Endpoints
 * @see [Users in Awork API Docs](https://openapi.awork.io/#/Users)
 */
export class Users {
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

    //  TODO/me !!!

    /**
     * Returns the user with the specified id.
     * @param {String} userId The id of the user.
     * @returns {Promise<User>}
     */
    async get(userId) {
        const response = await this._client.get(`/users/${userId}`)
        const data = response.data()
        return new User(data)
    }

    /**
     * Returns all users with their details like status, contact info and more. Returns all users if the user has read permissions on the feature user-master-data, otherwise returns only his own user. Archived users are excluded by default. You can include them by setting the 'showArchived' query parameter. If the permissions have UserTeamsData Feature, the filter for teams is applied. Beware that this will also include API users in the response.
     * @param {ListOptions} [options] Pagination and filtering options
     * @param {Boolean} [showArchived] Include archived users in the results. Not required. False by default.
     * @returns {Promise<Array<User>>}
     */
    async list(options, showArchived = false) {
        const response = await this._client.get('/users', options, showArchived)
        const data = response.data()
        return data.map(d => new User(d))
    }

    /**
     * @typedef {Object} UserCreateModel
     * @property {String} [firstName] The firstname of the user.
     * @property {String} [lastName] The lastname of the user.
     * @property {String} [birthDate] The birthdate of the user.
     * @property {String} [gender] The gender of the user.
     * @property {String} [title] The title of the user.
     * @property {String} [position] The position of the user.
     * @property {String} [language] The language preference of the user in ISO 639-1 format.
     * @property {Integer} [capacityPerWeek] The capacity of the user per week in seconds.
     * @property {String} [accountId] The account id of the user.
     */

    /**
     * Creates a new user. The user's key is assigned automatically and can be changed later.
     * @param {UserCreateModel} userCreateModel The model to create a user.
     * @returns {Promise<User>}
     */
    async create(userCreateModel) {
        const response = await this._client.post('/users', userCreateModel)
        const data = response.data()
        return new User(data)
    }

    /**
     * @typedef {Object} UserUpdateModel
     * @property {String} [firstName] The firstname of the user.
     * @property {String} [lastName] The lastname of the user.
     * @property {String} [birthDate] The birthdate of the user.
     * @property {String} [gender] The gender of the user.
     * @property {String} [title] The title of the user.
     * @property {String} [position] The position of the user.
     * @property {String} [language] The language preference of the user in ISO 639-1 format.
     * @property {Integer} [capacityPerWeek] The capacity of the user per week in seconds.
     */

    /**
     * Updates the user with the specified id.
     * @param {String} userId The id of the user.
     * @param {UserUpdateModel} userUpdateModel The model to update a user.
     * @returns {Promise<User>}
     */
    async update(userId, userUpdateModel) {
        const response = await this._client.put(`/users/${userId}`, userUpdateModel)
        const data = response.data()
        return new User(data)
    }

    /**
     * Deletes the user with the specified id.
     * @param {String} userId The id of the user.
     * @returns {Promise<void>}
     */
    async delete(userId) {
        await this._client.delete(`/users/${userId}`)
    }

    //  TODO/me !!!

    /**
     * Deactivates the user with the specified id. A deactivated user can no longer sign in. It is only possible if the user is not the last admin user.
     * @param {String} userId The id of the user.
     * @returns {Promise<void>}
     */
    async deactivate(userId) {
        await this._client.post(`/users/${userId}/deactivate`)
    }

    /**
     * Activates the user with the specified id. The user is then allowed to sign in again and will be notified via email.
     * @param {String} userId The id of the user.
     * @returns {Promise<void>}
     */
    async activate(userId) {
        await this._client.post(`/users/${userId}/activate`)
    }

    /**
     * Archives or unarchives the user with the specified id. Archived objects can not be used any longer but still exist for being referenced by other entities.
     * @param {String} userId The id of the user which will be changed.
     * @param {Boolean} isArchived Flags the entity as archived.
     * @returns 
     */
    async setArchived(userId, isArchived) {
        const response = await this._client.post(`/users/${userId}/setarchived`, {isArchived: isArchived})
        const data = response.data()
        return new ExtendedUser(data)
    }

    /**
     * Checks whether the specified user key is valid and unique.
     * @returns {Promise<String>}
     */
    async isKeyValid() {
        const response = await this._client.post('/users/iskeyvalid')
        return response.data().key
    }

    /**
     * Sets the user key of the user with the specified id.
     * @param {String} userId The id of the user.
     * @returns {Promise<>} 
     */
    async setkey(userId) {
        const response = await this._client.post(`/users/${userId}/setkey`)
        return response.data().key
    }

    /**
     * Returns the contact infos of the user with the specified id.
     * @param {String} userId The id of the user.
     * @returns 
     */
    contactInfo(userId) {
        return new UserContactInfos(this._client, userId)
    }
}