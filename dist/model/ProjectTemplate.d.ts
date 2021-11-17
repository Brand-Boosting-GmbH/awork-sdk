/**
 * Absence Model
 * @category Models
 * @class
 */
export class ProjectTemplate {
    /**
     * @typedef {ProjectTemplate & {_plain?: true}} ProjectTemplateLike
     */
    /**
     * Model constructor
     * @param {ProjectTemplateLike} data
     */
    constructor(data: ProjectTemplate & {
        _plain?: true;
    });
    /**
    * @private
    */
    private _data;
    /**
     * The id of the template.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * Description of the project template.
     * @type {String} nullable
     */
    get description(): string;
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
    /**
     * The name of the template.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * Whether project times should be billable by default, if the project as created by this template.
     * @type {Boolean} nullable
     */
    get isBillableByDefault(): boolean;
    /**
     * The id references the task list, which is used to assign tasks created by email to.
     * @type {String} uuid
     */
    get defaultTaskListIdForEmails(): string;
    /**
     * @typedef {Object} projectStatusObject
     * @property {String} id The project statuses of the template.
     * @property {String} name The name of the project status.
     * @property {String} type The general type of this project status.
     * @property {Integer} order int36
     * @property {String} createdOn The date this entity was created.
     * @property {String} createdBy The id of the user who created this entity.
     * @property {String} updatedOn The date this entity was last modified.
     * @property {String} projectTemplateId The project template of the status.
     * @property {String} projectId The id of the project the status belongs to.
     * @property {String} updatedBy The id of the user who last modified this entity.
     */
    /**
     * The project statuses of the template.
     * @type {Array<projectStatusObject>}
     */
    get projectStatuses(): {
        /**
         * The project statuses of the template.
         */
        id: string;
        /**
         * The name of the project status.
         */
        name: string;
        /**
         * The general type of this project status.
         */
        type: string;
        /**
         * int36
         */
        order: Integer;
        /**
         * The date this entity was created.
         */
        createdOn: string;
        /**
         * The id of the user who created this entity.
         */
        createdBy: string;
        /**
         * The date this entity was last modified.
         */
        updatedOn: string;
        /**
         * The project template of the status.
         */
        projectTemplateId: string;
        /**
         * The id of the project the status belongs to.
         */
        projectId: string;
        /**
         * The id of the user who last modified this entity.
         */
        updatedBy: string;
    }[];
    /**
     * Whether the project template has a profile image.
     * @type {Boolean}
     */
    get hasImage(): boolean;
    toPlainObject(): {
        id: any;
        description: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
        name: any;
        isBillableByDefault: any;
        defaultTaskListIdForEmails: any;
        projectStatuses: any;
        hasImage: any;
    };
}
