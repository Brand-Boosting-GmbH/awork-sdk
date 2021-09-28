/**
 * ProjectType Model
 * @category Models
 * @class
 */
export class ProjectType {
    /**
     * @typedef {ProjectType & {_plain?: true}} ProjectTypeLike
     */
    /**
     * Model constructor
     * @param {ProjectTypeLike} data
     */
    constructor(data: ProjectType & {
        _plain?: true;
    });
    /**
     * @private
     */
    private _data;
    /**
     * The id of the type.
     * @type {String}
     */
    get id(): string;
    /**
     * The name of the project type.
     * @type
     */
    get name(): any;
    /**
     * A short (max. 140 characters) description of the project type.
     * @type {String}
     */
    get description(): string;
    /**
     * The identifier of the project type icon.
     * @type {Icon}
     */
    get icon(): Icon;
    /**
     * Whether this type is archived. It can no longer be used to create projects, but existing ones will continue using it.
     * @type {Boolean}
     */
    get isArchived(): boolean;
    /**
     * Whether this type is one of the preset types. Preset types cannot be edited.
     * @type {Boolean}
     */
    get isPreset(): boolean;
    /**
     * The date this entity was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this entity.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date this entity was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this entity.
     * @type {String} uuid
     */
    get updatedBy(): string;
    toPlainObject(): {
        id: any;
        name: any;
        description: any;
        icon: any;
        isArchived: any;
        isPreset: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
    };
}
