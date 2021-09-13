/**
 * ProjectStatus Model
 * @category Models
 * @class
 */
export class ProjectStatus {
    /**
     * @typedef {ProjectStatus & {_plain?: true}} ProjectStatusLike
     */
    /**
     * Model constructor
     * @param {ProjectStatusLike} data
     */
    constructor(data: ProjectStatus & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * The primary identifier of this project status.
     * @type {String}
     */
    get id(): string;
    /**
     * The name of the project status.
     * @type {String}
     */
    get name(): string;
    /**
     * @type {Number}
     */
    get order(): number;
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
     * The project template of the status.
     * @type {String}
     */
    get projectTemplateId(): string;
    /**
     * The id of the project the status belongs to.
     * @type {String}
     */
    get projectId(): string;
    /**
     * The id of the user who last modified this entity.
     * @type {String}
     */
    get updatedBy(): string;
    toPlainObject(): {
        id: string;
        name: string;
        type: any;
        order: number;
        createdOn: string;
        createdBy: string;
        updatedOn: string;
        projectTemplateId: string;
        projectId: string;
        updatedBy: string;
    };
}
