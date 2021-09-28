/**
 * TypeOfWork Model
 * @category Models
 * @class
 */
export class TypeOfWork {
    /**
     * @typedef {TypeOfWork & {_plain?: true}} TypeOfWorkLike
     */
    /**
     * Model constructor
     * @param {TypeOfWorkLike} data
     */
    constructor(data: TypeOfWork & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * The id of the task type.
     * @type {string}
     */
    get id(): string;
    /**
     * The name of the task type.
     * @type {String}
     */
    get name(): string;
    /**
     * A short (max. 140 characters) description of the task type.
     * @type {String}
     */
    get description(): string;
    /**
     * The icon associated with this task type.
     * @type {Icon}
     */
    get icon(): Icon;
    /**
     * Whether the type of work has been archived.
     * @type {Boolean}
     */
    get isArchived(): boolean;
    /**
     * The date this entity was created.
     * @type {String}
     */
    get createdOn(): string;
    /**
     * The id of the user who created this entity.
     * @type {String}
     */
    get createdBy(): string;
    /**
     * The date this entity was last modified.
     * @type {String}
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this entity.
     * @type {String}
     */
    get updatedBy(): string;
    toPlainObject(): {
        id: string;
        name: string;
        description: string;
        icon: Icon;
        isArchived: boolean;
        createdOn: string;
        createdBy: string;
        updatedOn: string;
        updatedBy: string;
    };
}
