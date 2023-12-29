/**
 * Class corresponding to Aworks project related part of the Files Endpoints
 * @category Endpoints
 * @see [Files in Awork API Docs](https://openapi.awork.com/#/Files)
 */
export class EntityImages {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {('projects'|'projecttemplates'|'users'|'workspaces'|'companies')} entityName
    * @param {String} entityId
    */
    constructor(client: import('../client/index').Client, entityName: ('projects' | 'projecttemplates' | 'users' | 'workspaces' | 'companies'), entityId: string);
    /** @private */
    private _client;
    /** @private */
    private _entityName;
    /** @private */
    private _entityId;
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
    download(options?: {
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
     * Deletes the profile image of the entity with the specified id.
     * @returns {Promise<void>}
     */
    delete(): Promise<void>;
}
import { EntityFile } from "../model/EntityFile";
