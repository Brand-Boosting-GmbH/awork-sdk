/**
 * EntityFile Model
 * @category Models
 * @class
 */

export class EntityFile {
    /**
     * @typedef {EntityFile & {_plain?: true}} EntityFileLike
     */

    /**
     * Model constructor
     * @param {EntityFileLike} data 
     */
    constructor(data) {
        /**
         * @private
         */
        this._data = data || {}
    }

    /**
     * The user-specified name of the file.
     * @type {String}
     */
    get name () {
        return this._data.name
    }

    /**
     * The description of the file.
     * @type {String}
     */
    get description () {
        return this._data.description
    }

    /**
     * The id of the file info.
     * @type {String}
     */
    get id () {
        return this._data.id
    }

    /**
     * The id of the linked entity.
     * @type {String}
     */
    get entityId () {
        return this._data.entityId
    }

    /**
     * The name of the file.
     * @type {String}
     */
    get fileName () {
        return this._data.fileName
    }

    /**
     * The name of the linked entity type.
     * @type {('projects'|'companies'|'tasks'|'comments')}
     */
    get entityType () {
        return this._data.entityType
    }

    /**
     * The MIME type of the file.
     * @type {String}
     */
    get mimeType () {
        return this._data.mimeType
    }

    /**
     * The date this file was created.
     * @type {String}
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The id of the user who created this file.
     * @type {String}
     */
    get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date the file was last modified.
     * @type {String}
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The id of the user who last modified this file.
     * @type {String}
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    /**
     * List of all versions.
     * @type {Array<import('./FileVersion').FileVersion>}
     */
    get fileVersions () {
        return this._data.fileVersions
    }

    /**
     * Whether the file is related to a comment
     * @type {Boolean}
     */
    get isCommentFile () {
        return this._data.isCommentFile
    }

    /**
     * The external provider for the file. Like 'google' or 'onedrive'.
     * @type {String}
     */
    get externalProvider () {
        return this._data.externalProvider
    }

    /**
     * The file url of the external provider.
     * @type {String}
     */
    get externalFileUrl () {
        return this._data.externalFileUrl
    }

    toPlainObject() {
        return {
            name: this._data.name,
            description: this._data.description,
            id: this._data.id,
            entity: this._data.entity,
            fileName: this._data.fileName,
            entityType: this._data.entityType,
            mimeType: this._data.mimeType,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy,
            fileVersions: this._data.fileVersions,
            isCommentFile: this._data.isCommentFile,
            externalProvider: this._data.externalProvider,
            externalFileUrl: this._data.externalFileUrl
        }
    }
}