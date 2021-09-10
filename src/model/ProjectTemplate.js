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
    constructor(data) {
        /**
        * @private
        */
        this._data = data || {}
    }

    /**
     * The id of the template.
     * @type {String} uuid
     */
    get id () {
        return this._data.id
    }

    /**
     * Description of the project template.
     * @type {String} nullable
     */
    get description () {
        return this._data.description
    }

    /**
     * The date this entity was created.
     * @type {String} date-time
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The id of the user who created this entity.
     * @type {String} uuid
     */
    get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date this entity was last modified.
     * @type {String} date-time
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The id of the user who last modified this entity.
     * @type {String} uuid
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    /**
     * The name of the template.
     * @type {String} nullable
     */
    get name () {
        return this._data.name
    }

    /**
     * Whether project times should be billable by default, if the project as created by this template.
     * @type {Boolean} nullable
     */
    get isBillableByDefault () {
        return this._data.isBillableByDefault
    }

    /**
     * The id references the task list, which is used to assign tasks created by email to.
     * @type {String} uuid
     */
    get defaultTaskListIdForEmails () {
        return this._data.defaultTaskListIdForEmails
    }

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
    get projectStatuses () {
        return this._data.projectStatuses
    }

    /**
     * Whether the project template has a profile image.
     * @type {Boolean} 
     */
    get hasImage () {
        return this._data.hasImage
    }

    toPlainObject() {
        return {
            id: this._data.id,
            description: this._data.description,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy,
            name: this._data.name,
            isBillableByDefault: this._data.isBillableByDefault,
            defaultTaskListIdForEmails: this._data.defaultTaskListIdForEmails,
            projectStatuses: this._data.projectStatuses,
            hasImage: this._data.hasImage
        }
    }
}