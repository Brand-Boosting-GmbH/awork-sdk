import { FileVersion } from "../model/FileVersion"
import '../globalTypedef'

export class FileVersions {
    constructor (client, entityName, entityId, fileId) {
        this._client = client
        this._entityName = entityName
        this._entityId = entityId
        this._fileId = fileId
    }


    /**
     * Returns the entity file version with the specified id
     * @param {String} versionId 
     * @returns {Promise<FileVersion>}
     */
    async get (versionId) {
        const response = await this._client.get(`${this._entityName}/${this._entityId}/files/${this._fileId}/versions/${versionId}`)
        const data = response.data()
        return new FileVersion(data)
    }

    /**
     * Returns all file versions of the specified entity file.
     * @param {String} fileId
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Array<FileVersion>}
     */
     async list (options) {
        const response = await this._client.get(`${this._entityName}/${this._entityId}/files/${this._fileId}/versions`, options)
        const data = response.data()
        return data.map(d => new FileVersion(d))
    }

    // TODO Kevin
    /** 
     * Uploads a new version of an entity file. Use this to upload a file as a form value along with the basic file meta data. The file size must not exceed 1GB.
     * @param {String} fileId 
     * @param {*} version 
     */
     async uploadNew (version) {
        const response = await this._client.get(`${this._entityName}/${this._entityId}/files/${this._fileId}/versions`, version)
        const data = response.data()

    }
}