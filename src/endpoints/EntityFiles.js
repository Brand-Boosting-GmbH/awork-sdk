import { EntityFile } from "../model/EntityFile"
import { FileVersions } from "./FileVersions"
import '../globalTypedef'
import { fromBuffer } from 'file-type'
import FormData from "form-data"


/**
 * Class corresponding to Aworks EntityFiles Endpoints
 * @see [EntityFiles in Awork API Docs](https://openapi.awork.io/#/EntityFiles)
 */
export class EntityFiles {

     /**
     * Endpoint constructor
     * @param {import('../client/index').Client} client
     * @param {('projects'|'companies'|'tasks'|'comments')} entityName
     * @param {String} entityId
     */
    constructor (client, entityName, entityId) {
        /**
         * @private
         */
        this._client = client
        /**
         * @private
         */
        this._entityName = entityName
        /**
         * @private
         */
        this._entityId = entityId
    }

    /**
     * Returns the file with the specified id of the entity with the specified Id
     * @param {String} fileId 
     * @returns {Promise<EntityFile>}
     */
    async get (fileId) {
        const response = await this._client.get(`${this._entityName}/${this._entityId}/files/${fileId}`)
        const data = response.data()
        return new EntityFile(data)
    }

    /**
     * Returns all files of the entity with the specified id.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<EntityFile>>}
     */
    async list (options) {
        const response = await this._client.get(`${this._entityName}/${this._entityId}/files`, options)
        const data = response.data()
        return data.map(d => new EntityFile(d))
    }

    /**
     * @typedef {Object} FileMetaData
     * @property {String} [name] The user-specified name of the file.
     * @property {String} [filename] The name of the file.
     */

    /**
     * Uploads a File or Buffer Object
     * @param {File|Buffer} file 
     * @param {FileMetaData} metadata 
     * @returns {Promise<EntityFile>}
     */
    async create (file, metadata) {
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
        const response = await this._client.post(`${this._entityName}/${this._entityId}/files`, formData.getBuffer(), {}, { 'Content-Length': formData.getLengthSync(), ...formData.getHeaders()})
        const data = response.data()
        return new EntityFile(data)
    }

    /**
     * Updates the file with the specified id of the entity with the specified Id.
     * @param {String} fileId 
     * @param {EntityFile} entityFile 
     * @returns {Promise<EntityFile>} 
     */
    async update (fileId, entityFile) {
        const response = await this._client.put(`${this._entityName}/${this._entityId}/files/${fileId}`, entityFile)
        const data = response.data()
        return new EntityFile(data)
    }

    /**
     * Deletes the file with the specified id of the entity with the specified Id.
     * @param {String} fileId 
     * @returns {Promise<void>}
     */
    async delete (fileId) {
        await this._client.delete(`${this._entityName}/${this._entityId}/files/${fileId}`)
    }
    
    /**
     * Deletes all the files of the specified entity.
     * @returns {Promise<void>}
     */
    async deleteAll () {
        await this._client.delete(`${this._entityName}/${this._entityId}/files`)
    }

    /**
     * @typedef {Object} ExternalFileForm
     * @property {String} name The name of the file.
     * @property {String} [description] The description of the file.
     * @property {String} externalProvider The external provider for the file. Like 'google' or 'onedrive'.
     * @property {String} externalFileUrl The url of the external provider.
     * @property {String} [mimeType] The mime type of the external file.
     * 
     */

    /**
     * Endpoint to create file infos with batch operation. Created file infos don't have a version.
     * @param {Array<ExternalFileForm>} value
     * @returns {Promise<EntityFile>}
     */
    async externalFiles (value) {
        const response = await this._client.post(`${this._entityName}/${this._entityId}/externalfiles/`, value)
        const data = response.data()
        return new EntityFile(data)
    }

    /**
     * @typedef {Object} FileInformations
     * @property {String} url The public URL to the file.
     * @property {String} name The name of the file.
     * @property {String} description The description of the file.
     */

    /**
     * Uploads a new file by providing an url. The file needs to be a public available url. The file size must not exceed 100MB.
     * @param {FileInformations} value 
     * @returns {Promise<EntityFile>}
     */
    async byUrl (value) {
        const response = await this._client.post(`${this._entityName}/${this._entityId}/files/byurl`, value)
        const data = response.data()
        return new EntityFile(data)
    }

    /**
     * @typedef {Object} DownloadOptions
     * @property {Number} [width] Set width to resize.
     * @property {Number} [height] Set height to resize.
     * @property {Boolean} [crop] Whether to crop the image when resizing it.
     */

    /**
     * @param {String} fileId 
     * @param {DownloadOptions} options
     * @returns {String} binary
     */
    async download (fileId, options) {
        const response = await this._client.get(`${this._entityName}/${this._entityId}/files/${fileId}/download`, options)
        return response.data()
    }

    /**
     * Returns the content of the entity file with the specified id as pdf if possible and returns bad request, if not valid type or conversion not possible.
     * @param {String} fileId 
     * @param {Boolean} inline Default: false. If inline is false, content-disposition header is attachment.
     * @returns {String} binary
     */
    async pdf (fileId, inline) {
        const response = await this._client.get(`${this._entityName}/${this._entityId}/files/${fileId}/pdf`, {inline: inline})
        return response.data()
    }


    versions (fileId) {
        return new FileVersions(this._client, this._entityName, this._entityId, fileId)
    }
    

    


}