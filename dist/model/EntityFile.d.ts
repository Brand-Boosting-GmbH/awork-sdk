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
    constructor(data: EntityFile & {
        _plain?: true;
    });
    /**
     * @private
     */
    private _data;
    /**
     * The user-specified name of the file.
     * @type {String}
     */
    get name(): string;
    /**
     * The description of the file.
     * @type {String}
     */
    get description(): string;
    /**
     * The id of the file info.
     * @type {String}
     */
    get id(): string;
    /**
     * The id of the linked entity.
     * @type {String}
     */
    get entityId(): string;
    /**
     * The name of the file.
     * @type {String}
     */
    get fileName(): string;
    /**
     * The name of the linked entity type.
     * @type {('projects'|'companies'|'tasks'|'comments')}
     */
    get entityType(): "comments" | "companies" | "projects" | "tasks";
    /**
     * The MIME type of the file.
     * @type {String}
     */
    get mimeType(): string;
    /**
     * The date this file was created.
     * @type {String}
     */
    get createdOn(): string;
    /**
     * The id of the user who created this file.
     * @type {String}
     */
    get createdBy(): string;
    /**
     * The date the file was last modified.
     * @type {String}
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this file.
     * @type {String}
     */
    get updatedBy(): string;
    /**
     * List of all versions.
     * @type {Array<import('./FileVersion').FileVersion>}
     */
    get fileVersions(): import("./FileVersion").FileVersion[];
    /**
     * Whether the file is related to a comment
     * @type {Boolean}
     */
    get isCommentFile(): boolean;
    /**
     * The external provider for the file. Like 'google' or 'onedrive'.
     * @type {String}
     */
    get externalProvider(): string;
    /**
     * The file url of the external provider.
     * @type {String}
     */
    get externalFileUrl(): string;
    toPlainObject(): {
        name: any;
        description: any;
        id: any;
        entity: any;
        fileName: any;
        entityType: any;
        mimeType: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
        fileVersions: any;
        isCommentFile: any;
        externalProvider: any;
        externalFileUrl: any;
    };
}
