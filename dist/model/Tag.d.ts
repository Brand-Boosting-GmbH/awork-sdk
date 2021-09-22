/**
 * Tag Model
 * @category Models
 * @class
 */
export class Tag {
    /**
     * @typedef {Tag & {_plain?: true}} TagLike
     */
    /**
     * Model constructor
     * @param {TagLike} data
     */
    constructor(data: Tag & {
        _plain?: true;
    });
    _data: any;
    /**
     * The id of the tag.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The name of the tag.
     * @type {String}
     */
    get name(): string;
    /**
     * The entity id of the tag.
     * @type {String}
     */
    get entityId(): string;
    /**
     * The date the tag was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The user which created the tag.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date the tag was updated on.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The user which updated the tag.
     * @type {String} uuid
     */
    get updatedBy(): string;
    toPlainObject(): {
        id: any;
        name: any;
        entityId: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
    };
}
