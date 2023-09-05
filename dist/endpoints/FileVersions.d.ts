/**
 * Class corresponding to Versions part of the Aworks EntityFiles Endpoints
 * @category Endpoints
 * @see [EntityFiles in Awork API Docs](https://openapi.awork.com/#/EntityFiles)
 */
export class FileVersions {
    constructor(client: any, entityName: any, entityId: any, fileId: any);
    /** @private */
    private _client;
    /** @private */
    private _entityName;
    /** @private */
    private _entityId;
    /** @private */
    private _fileId;
    /**
     * Returns the entity file version with the specified id
     * @param {String} versionId
     * @returns {Promise<FileVersion>}
     */
    get(versionId: string): Promise<FileVersion>;
    /**
     * Returns all file versions of the specified entity file.
     * @param {String} fileId
     * @param {import('../global').ListOptions} [options] Pagination and filtering options
     * @returns {Array<FileVersion>}
     */
    list(options?: import('../global').ListOptions): Array<FileVersion>;
    /**
     * @typedef {Object} FileMetaData
     * @property {String} [name] The user-specified name of the file.
     * @property {String} [filename] The name of the file.
     */
    /**
     * Uploads a new version of an entity file. Use this to upload a file as a form value along with the basic file meta data. The file size must not exceed 1GB.
     * @param {File|Buffer} file
     * @param {FileMetaData} metadata
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
    }): Promise<FileVersion>;
    /**
     * Returns the content of the entity file version with the specified id.
     * @param {String} versionId
     * @returns {Promise<Object>}
     */
    download(versionId: string): Promise<any>;
}
import { FileVersion } from "../model/FileVersion";
