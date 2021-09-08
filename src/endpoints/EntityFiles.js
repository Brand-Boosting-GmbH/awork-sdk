import { EntityFile } from "../model/EntityFile"

export class EntityFiles {
    constructor (client, entityName, entityId) {
        this._client = client
        this._entityName = entityName
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
     * @returns {Promise<Array<EntityFile>>}
     */
    async list () {
        const response = await this._client.get(`${this._entityName}/${this._entityId}/files`)
        const data = response.data()
        return data.map(d => new EntityFile(d))
    }

    /**
     * Creates a new entity file for the entity with the specified id.
     * @param {EntityFile} entityFile 
     * @returns {Promise<EntityFile>}
     */
    async create (entityFile) {
        const response = await this._client.post(`${this._entityName}/${this._entityId}/files`, entityFile)
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
     */
    async delete (fileId) {
        await this._client.delete(`${this._entityName}/${this._entityId}/files/${fileId}`)
    }

    /**
     * Deletes all the files of the specified entity.
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
     * 
     */

    /**
     * Uploads a new file by providing an url. The file needs to be a public available url. The file size must not exceed 100MB.
     * @param {FileInformations} value 
     * @returns 
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
     * 
     * @param {String} fileId 
     * @param {DownloadOptions} options
     */
    async download (fileId, options) {
        const response = await this._client.get(`${this._entityName}/${this._entityId}/files/${fileId}/download`, options)
        return response.data()
    }
}