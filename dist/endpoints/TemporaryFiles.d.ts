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
    constructor(client: import('../client/index').Client);
    /**
    * @private
    */
    private _client;
    /**
     * Returns the meta information of the temporary file of the current user.
     * @param {String} fileId The id of the file.
     * @returns {Promise<EntityFile>}
     */
    get(fileId: string): Promise<EntityFile>;
    /**
     * Returns the meta information of all temporary files of the current user.
     * @param {ListOptions} [options] Pagination and filtering options
     * @returns {Promise<Array<EntityFile>>}
     */
    list(options?: ListOptions): Promise<Array<EntityFile>>;
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
    create(file: File | Buffer, metadata: {
        /**
         * The user-specified name of the temporary file.
         */
        name?: string;
        /**
         * The name of the temporary file.
         */
        filename?: string;
    }): Promise<EntityFile>;
    /**
     * @typedef {Object} TemporaryFilesUpdateModel
     * @property {String} [name] The user-specified name of the file.
     * @property {String} [description] The description of the file.
     *
     */
    /**
     * Updates the meta information of the temporary file with the specified id.
     * @param {String} fileId The id of the file.
     * @param {TemporaryFilesUpdateModel} temporaryFile The model to update the temporary file.
     * @returns {Promise<EntityFile>}
     */
    update(fileId: string, temporaryFile: {
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
     * Returns the content of the temporary file.
     * @param {String} fileId The id of the file.
     * @returns {Promise<String>}
     */
    download(fileId: string): Promise<string>;
    /**
     * @typedef {Object} LinkedEntity The model to change the entity information of the file.
     * @property {String} entityId The id of the entity the file should be linked to.
     * @property {String} entityType The type of the linked entity.
     */
    /**
     * Sets the temporary file to a global or entity file. Links the temporary file to the specified entity or switches to a global file if the 'EntityId' of the model is set to null. The file is no longer a temporary file afterwards and becomes visible.
     * @param {String} fileId The id of the file.
     * @param {LinkedEntity} entityObject
     * @returns {Promise<void>}
     */
    setEntity(fileId: string, entityObject: {
        /**
         * The id of the entity the file should be linked to.
         */
        entityId: string;
        /**
         * The type of the linked entity.
         */
        entityType: string;
    }): Promise<void>;
}
import { EntityFile } from "../model/EntityFile";
