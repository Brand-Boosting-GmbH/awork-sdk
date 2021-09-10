import '../globalTypedef'
import { EntityFile } from "../model/EntityFile"
import { fromBuffer } from 'file-type'
import FormData from "form-data"

/**
 * Class corresponding to Aworks TemporaryFiles Endpoints
 * @category Endpoints
 * @see [TemporaryFiles in Awork API Docs](https://openapi.awork.io/#/TemporaryFiles)
 */
export class TemporaryFiles {
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
     * Returns the meta information of the temporary file of the current user.
     * @param {String} fileId The id of the file.
     * @returns {Promise<EntityFile>}
     */
    async get(fileId) {
        const response = await this._client.get(`/temporaryfiles/${fileId}`)
        const data = response.data()
        return new EntityFile(data)
    }

    /**
     * Returns the meta information of all temporary files of the current user.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<EntityFile>>}
     */
    async list(options) {
        const response = await this._client.get(`/temporaryfiles`, options)
        const data = response.data()
        return data.map(d => new EntityFile(d))
    }

    /**
     * @typedef {Object} FileMetaData
     * @property {String} [name] The user-specified name of the temporary file.
     * @property {String} [filename] The name of the temporary file.
     */

    /**
     * Uploads a new temporary file. Use this to upload a file as a form value along with the basic file meta data. The file size must not exceed 1GB.
     * @param {File|Buffer} file 
     * @param {FileMetaData} metadata 
     * @returns {Promise<EntityFile>}
     */

    async create(file, metadata) {
        let filename = metadata.filename
        let fileObj = file
        filename = filename || fileObj.name
        if(fileObj instanceof Buffer) {
            const { ext } = await fromBuffer(fileObj)
            filename = filename || `upload.${ext}`
        }
        
        let formData = new FormData()
        formData.append('file', fileObj, filename || 'upload')
        formData.append('name', metadata.name || filename || 'upload')
        formData.append('filename', filename || 'upload')
        const response = await this._client.post('/temporaryfiles', formData.getBuffer(), {}, { 'Content-Length': formData.getLengthSync(), ...formData.getHeaders()})
        const data = response.data()
        return new EntityFile(data)
    }
    
    /**
     * @typedef {Object} NameDescriptionPair
     * @property {String} name The user-specified name of the file.
     * @property {String} description The description of the file.
     */

    /**
     * Updates the meta information of the temporary file with the specified id.
     * @param {String} fileId The id of the file.
     * @param {NameDescriptionPair} nameDescriptionPair
     * @returns {Promise<EntityFile>}
     */
    async update(fileId, nameDescriptionPair) {
        const response = await this._client.put(`/temporaryfiles/${fileId}`, nameDescriptionPair)
        const data = response.data()
        return new EntityFile(data)
    }

    /**
     * Returns the content of the temporary file.
     * @param {String} fileId The id of the file.
     * @returns {Promise<String>}
     */
    async download(fileId) {
        const response = await this._client.put(`/temporaryfiles/${fileId}/download`, nameDescriptionPair)
        return response.data()
    }

    /**
     * @typedef {Object} EntityObject
     * @property {String} entityId The id of the entity the file should be linked to. Set to null to change the file to a global file.
     * @property {String} entityType The type of the linked entity. Necessary if EntityId is set.
     */
    async setentity(fileId) {
        
    }

}