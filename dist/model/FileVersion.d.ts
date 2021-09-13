/**
 * FileVersion Model
 * @category Models
 * @class
 */
export class FileVersion {
    /**
     * @typedef {FileVersion & {_plain?: true}} FileVersionLike
     */
    /**
     * Model constructor
     * @param {FileVersionLike} data
     */
    constructor(data: FileVersion & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * The id of the file version.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The id of the file this version belongs to.
     * @type {String} uuid
     */
    get fileInfoId(): string;
    /**
     * The version of the file.
     * @type {Number} double
     */
    get version(): number;
    /**
     * The size of the file, in bytes.
     * @type {Number} int64
     */
    get size(): number;
    /**
     * The width if this is an image file.
     * @type {Number} double, nullable
     */
    get width(): number;
    /**
     * The height if this is an image file.
     * @type {Number} double, nullable
     */
    get height(): number;
    /**
     * The date this file version was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this file version.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date the file version was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this file version.
     * @type {String} uuid
     */
    get updatedBy(): string;
    toPlainObject(): {
        id: string;
        fileInfoId: string;
        version: number;
        size: number;
        width: number;
        height: number;
        createdOn: string;
        createdBy: string;
        updatedOn: string;
        updatedBy: string;
    };
}
