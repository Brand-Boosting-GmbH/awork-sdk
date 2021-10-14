import '../globalTypedef'
import { EntityFile } from "../model/EntityFile";
import { fromBuffer } from 'file-type'
import FormData from "form-data"


/**
 * Class corresponding to Aworks project related part of the Files Endpoints
 * @category Endpoints
 * @see [Files in Awork API Docs](https://openapi.awork.io/#/Files)
 */
 export class EntityImages {
    
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client 
    * @param {('projects'|'projecttemplates'|'users'|'workspaces'|'companies')} entityName
    * @param {String} entityId
    */
    constructor(client, entityName, entityId) {
       /** @private */
       this._client = client
        /** @private */
        this._entityName = entityName
        /** @private */
        this._entityId = entityId
   }

    /**
     * @typedef {Object} DownloadOptions
     * @property {Number} [width] Set width to resize.
     * @property {Number} [height] Set height to resize.
     * @property {Boolean} [crop] Whether to crop the image when resizing it.
     */

    /**
     * @param {String} fileId The id of the file.
     * @param {DownloadOptions} [options] The download options.
     * @returns {String} binary
     */
     async download (options = {}) {
        const response = await this._client.get(`/files/images/${this._entityName}/${this._entityId}`, options)
        return response.data()
    }

    /**
     * @typedef {Object} FileMetaData
     * @property {String} [name] The user-specified name of the file.
     * @property {String} [filename] The name of the file.
     */

    /**
     * Uploads a File or Buffer Object
     * @param {File|Buffer} file The file content eather as ES6 File object or Buffer.
     * @param {FileMetaData} metadata The file metadata.
     * @returns {Promise<EntityFile>}
     */
     async create (file, metadata) {
        let filename = metadata.filename || file.name
        if(file instanceof Buffer) {
            const { ext } = await fromBuffer(file)
            filename = filename || `upload.${ext}`
        }    
        let formData = new FormData()
        formData.append('file', file, filename || 'upload')
        formData.append('name', metadata.name || filename || 'upload')
        formData.append('filename', filename || 'upload')
        const response = await this._client.post(`/files/images/${this._entityName}/${this._entityId}`, formData.getBuffer(), {}, { 'Content-Length': formData.getLengthSync(), ...formData.getHeaders()})
        const data = response.data()
        return new EntityFile(data)
    }

    /**
     * Deletes the profile image of the entity with the specified id.
     * @returns {Promise<void>}
     */
    async delete () {
        await this._client.delete(`/files/images/${this._entityName}/${this._entityId}`)
    }
}