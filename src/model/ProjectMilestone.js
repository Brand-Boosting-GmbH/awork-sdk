import '../globalTypedef'

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
    constructor(data) {
        /**
         * @private
         */
        this._data = data
    }

    /**
     * The name of the milestone.
     * @type {String} nullable
     */
    get name () {
        return this._data.name
    }

    /**
     * The color of the milestone.
     * @type {Color} nullable
     */
    get color () {
        return this._data.color
    }

    /**
     * The date the milestone is due.
     * @type {String} date-time
     */
    get dueDate () {
        return this._data.dueDate
    }

    /**
     * The id of the project the milestone is related to.
     * @type {String} uuid
     */
    get projectId () {
        return this._data.projectId
    }

    /**
     * The id of the milestone.
     * @type {String} uuid
     */
    get id () {
        return this._data.id
    }

    /**
     * Contains all Information to handle projects.
     * @type {import('./Project').Project}
     */
    get project () {
        return this._data.project
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

    toPlainObject() {
        return {
            name: this._data.name,
            color: this._data.color,
            dueDate: this._data.dueDate,
            projectId: this._data.projectId,
            id: this._data.id,
            project: this._data.project,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy
        }
    }

}