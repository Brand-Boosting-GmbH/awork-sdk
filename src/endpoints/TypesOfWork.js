import '../globalTypedef'
import { TypeOfWork } from "../model/TypeOfWork"

/**
 * Class corresponding to Aworks TypeOfWork Endpoints
 * @category Endpoints
 * @see [TypeOfWork in Awork API Docs](https://openapi.awork.io/#/TypeOfWork)
 */
export class TypesOfWorks {
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
     * Gets a single type of work by its id.
     * @param {String} typeOfWorkId The id of the type of work.
     * @returns {Promise<TypeOfWork>}
     */
    async get(typeOfWorkId) {
        const response = await this._client.get(`/typeofwork/${id}`)
        const data = response.data()
        return new TypeOfWork(data)
    }

    /**
     * Returns all type of work.
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<TypeOfWork>>}
     */
    async list (options) {
        const response = await this._client.get(`/typeofwork`, options)
        const data = response.data()
        return data.map(d => new TypeOfWork(d))
    }

    /**
     * @typedef {Object} TypeOfWorkCreateModel
     * @property {String} name The name of the type of work.
     * @property {String} description A short description of the type of work.
     * @property {String} icon The icon ass with this type of work.
     */

    /**
     * Creates a new type of work.
     * @param {TypeOfWorkCreateModel} typeOfWork The model to create the type of work.
     * @returns {Promise<TypeOfWork>}
     */
    async create (typeOfWork) {
        const response = await this._client.post('/typeofwork', typeOfWork)
        const data = response.data()
        return new TypeOfWork(data)
    }

    /**
     * @typedef {TypeOfWorkCreateModel} TypeOfWorkUpdateModel
     */

    /**
     * Changes the properties of an existing type of work. A change will also effect all related tasks and time entries.
     * @param {String} typeOfWorkId The id of the type of work.
     * @param {TypeOfWorkUpdateModel} typeOfWork The model to update the type of work.
     * @returns {Promise<TypeOfWork>}
     */
    async update (typeOfWorkId, typeOfWork) {
        const response = await this._client.put(`/typeofwork/${typeOfWorkId}`, typeOfWork)
        const data = response.data()
        return new TypeOfWork(data)
    }

    /**
     * Deletes the type of work with the specified id. If any tasks, task templates or time entries still use this type, the id of a new type needs to be provided.
     * @param {String} typeOfWorkId The id of the type of work.
     * @returns {Promise<void>}
     */
    async delete (typeOfWorkId) {
        await this._client.post(`/typeofwork/${typeOfWorkId}/delete`, {'typeOfWorkId': typeOfWorkId})
    }

    /**
     * Returns all possible icons for type of work.
     * @returns {Promise<Array<String>>}
     */
    async icons () {
        const response = await this._client.get('/typeofwork/icons')
        return response.data()
    }

    /**
     * Archives or unarchives the type of work with the specified id. An archived type of work still exists for all tasks and time entries currently using it, but can no longer be created with this type of work.
     * @param {String} typeOfWorkId The id of the type of work.
     * @param {Boolean} [archived] Flags the entity as archived.
     * @returns {Promise<Object>}
     */
    async setArchived (typeOfWorkId, archived = true) {
        const response = await this._client.post(`/typeofwork/${typeOfWorkId}/setarchived`, {'isArchived': archived})
        return response.data()
    }


}