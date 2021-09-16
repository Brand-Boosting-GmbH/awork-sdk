/**
 * Class corresponding to Aworks EntityFiles Endpoints
 * @category Endpoints
 * @see [EntityFiles in Awork API Docs](https://openapi.awork.io/#/EntityFiles)
 */
export class EntityFiles {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {('projects'|'companies'|'tasks'|'comments')} entityName
    * @param {String} entityId
    */
    constructor(client: import('../client/index').Client, entityName: ('projects' | 'companies' | 'tasks' | 'comments'), entityId: string);
    /**
     * @private
     */
    private _client;
    /**
     * @private
     */
    private _entityName;
    /**
     * @private
     */
    private _entityId;
    /**
     * Returns the file with the specified id of the entity with the specified Id
     * @param {String} fileId The id of the file.
     * @returns {Promise<EntityFile>}
     */
    get(fileId: string): Promise<EntityFile>;
    /**
     * Returns all files of the entity with the specified id.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<EntityFile>>}
     */
    list(options?: ListOptions): Promise<Array<EntityFile>>;
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
    create(file: File | Buffer, metadata: {
        /**
         * The user-specified name of the file.
         */
        name?: string;
        /**
         * The name of the file.
         */
        filename?: string;
    }): Promise<EntityFile>;
    /**
     * @typedef {Object} EntityFileUpdateModel
     * @property {String} [name] The user-specified name of the file.
     * @property {String} [description] The description of the file.
     *
     */
    /**
     * Updates the file with the specified id of the entity with the specified Id.
     * @param {String} fileId The id of the file.
     * @param {EntityFileUpdateModel} entityFile The model to update the file with the specified id.
     * @returns {Promise<EntityFile>}
     */
    update(fileId: string, entityFile: {
        /**
         * The user-specified name of the file.
         */
        name?: string;
        /**
         * The description of the file.
         */
        description?: string;
    }): Promise<EntityFile>;
    /**
     * Deletes the file with the specified id of the entity with the specified Id.
     * @param {String} fileId The id of the file.
     * @returns {Promise<void>}
     */
    delete(fileId: string): Promise<void>;
    /**
     * Deletes all the files of the specified entity.
     * @returns {Promise<void>}
     */
    deleteAll(): Promise<void>;
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
     * @param {Array<ExternalFileForm>} externalFileForm List of file forms.
     * @returns {Promise<EntityFile>}
     */
    externalFiles(externalFileForm: {
        /**
         * The name of the file.
         */
        name: string;
        /**
         * The description of the file.
         */
        description?: string;
        /**
         * The external provider for the file. Like 'google' or 'onedrive'.
         */
        externalProvider: string;
        /**
         * The url of the external provider.
         */
        externalFileUrl: string;
        /**
         * The mime type of the external file.
         */
        mimeType?: string;
    }[]): Promise<EntityFile>;
    /**
     * @typedef {Object} FileByUrlModel
     * @property {String} url The public URL to the file.
     * @property {String} name The name of the file.
     * @property {String} [description] The description of the file.
     */
    /**
     * Uploads a new file by providing an url. The file needs to be a public available url. The file size must not exceed 100MB.
     * @param {FileByUrlModel} fileByUrlModel The url, name and description of the file.
     * @returns {Promise<EntityFile>}
     */
    byUrl(fileByUrlModel: {
        /**
         * The public URL to the file.
         */
        url: string;
        /**
         * The name of the file.
         */
        name: string;
        /**
         * The description of the file.
         */
        description?: string;
    }): Promise<EntityFile>;
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
    download(fileId: string, options?: {
        /**
         * Set width to resize.
         */
        width?: number;
        /**
         * Set height to resize.
         */
        height?: number;
        /**
         * Whether to crop the image when resizing it.
         */
        crop?: boolean;
    }): string;
    /**
     * Returns the content of the entity file with the specified id as pdf if possible and returns bad request, if not valid type or conversion not possible.
     * @param {String} fileId The id of the file.
     * @param {Boolean} [inline] Default: false. If inline is false, content-disposition header is attachment.
     * @returns {String} binary
     */
    pdf(fileId: string, inline?: boolean): string;
    /**
     * @typedef {Object} LinkedEntity The model to change the entity information of the file.
     * @property {String} entityId The id of the entity the file should be linked to.
     * @property {String} entityType The type of the linked entity.
     */
    /**
     * Copys the file to a new entity (meta and content).
     * @param {String} fileId The id of the file.
     * @param {LinkedEntity} entity The entity to copy the file to.
     * @returns {Promise<void>}
     */
    copy(fileId: string, entity: {
        /**
         * The id of the entity the file should be linked to.
         */
        entityId: string;
        /**
         * The type of the linked entity.
         */
        entityType: string;
    }): Promise<void>;
    /**
     * Currently only allowed in the projects entity. Returns all files of the entity with the specified id.
     * @returns {Promise<Array<EntityFile>>}
     */
    allFiles(): Promise<Array<EntityFile>>;
    /**
     * Returns a url to share the file.
     * @param {String} fileId The id of the file.
     * @returns {Promise<String>}
     */
    shareUrl(fileId: string): Promise<string>;
    /**
     * Changes the entity this file belongs to. Switch to the specified entity or to a global file if the 'EntityId' of the model is set to null.
     * @param {String} fileId The id of the file.
     * @param {LinkedEntity} entity The entity to move the file to.
     * @returns {Promise<void>}
     */
    changeEntity(fileId: string, entity: {
        /**
         * The id of the entity the file should be linked to.
         */
        entityId: string;
        /**
         * The type of the linked entity.
         */
        entityType: string;
    }): Promise<void>;
    /**
     * Returns the {@link FileVersions} Endpoint with the specified entity name, entity id and file Id.
     * @param {String} fileId The id of the file.
     * @returns {FileVersions}
     */
    versions(fileId: string): FileVersions;
}
import { EntityFile } from "../model/EntityFile";
import { FileVersions } from "./FileVersions";
