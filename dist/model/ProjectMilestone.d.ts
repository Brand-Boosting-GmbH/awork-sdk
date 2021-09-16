/**
 * ProjectMilestone Model
 * @category Models
 * @class
 */
export class ProjectMilestone {
    /**
     * @typedef {ProjectMilestone & {_plain?: true}} ProjectMilestoneLike
     */
    /**
     * Model constructor
     * @param {ProjectMilestoneLike} data
     */
    constructor(data: ProjectMilestone & {
        _plain?: true;
    });
    /**
     * @private
     */
    private _data;
    /**
     * The name of the milestone.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * The color of the milestone.
     * @type {String} nullable
     */
    get color(): string;
    /**
     * The date the milestone is due.
     * @type {String} date-time
     */
    get dueDate(): string;
    /**
     * The id of the project the milestone is related to.
     * @type {String} uuid
     */
    get projectId(): string;
    /**
     * The id of the milestone.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * Contains all Information to handle projects.
     * @type {import('./Project').Project}
     */
    get project(): import("./Project").Project;
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
        name: string;
        color: string;
        dueDate: string;
        projectId: string;
        id: string;
        project: import("./Project").Project;
        createdOn: string;
        createdBy: string;
        updatedOn: string;
        updatedBy: string;
    };
}
