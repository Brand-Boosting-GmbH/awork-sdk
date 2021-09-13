/**
 * Taskbundle Model
 * @category Models
 * @class
 */
export class TaskBundle {
    /**
     * @typedef {Taskbundle & {_plain?: true}} TaskbundleLike
     */

    /**
     * Model constructor
     * @param {TaskbundleLike} data 
     */
    constructor(data) {
        /** @private */
        this._data = data
    }

    /**
     * The name of the task bundle. Required if its not related to a task bundle.
     * @type {String} nullable
     */
    get name () {
        return this._data.name
    }

    /**
     * The description of the task bundle.
     * @type {String} nullable
     */
    get description () {
        return this._data.description
    }

    /**
     * The icon of the task bundle.
     * @type {String} 
     */
    get icon () {
        return this._data.icon
    }

    /**
     * The project template id of the task bundle, only necessary for the creation of an empty bundle for a project template.
     * @type {String}
     */
    get projectTemplateId () {
        return this._data.projectTemplateId
    }

    /**
     * The id of the task bundle.
     * @type {String}
     */
    get id () {
        return this._data.id
    }

    /**
     * The date this task bundle was created.
     * @type {String} date-time
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The id of the user who created this task bundle.
     * @type {String} uuid
     */
    get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date this task bundle was last modified.
     * @type {String} date-time
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The id of the user who last modified this task bundle.
     * @type {String} uuid
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    /**
     * @typedef {Object} TaskLists
     * @property {String} id The id of the task list template.
     * @property {String} name The name of the task list template.
     * @property {Number} orderOfTask The order of the task template in the task list template.
     * @property {Number} order The order of the task list template, unique within the task bundle.
     */

    /**
     * The list templates within this task bundle.
     * @type {Array<TaskLists>}
     */
    get taskLists () {
        return this._data.taskLists
    }

    /**
     * @type {Array<import('./Task').Task>}
     */
    get tasks () {
        return this._data.tasks
    }

    toPlainObject() {
        return {
            name: this._data.name,
            description: this._data.description,
            icon: this._data.icon,
            projectTemplateId: this._data.projectTemplateId,
            id: this._data.id,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy,
            taskLists: this._data.taskLists,
            tasks: this._data.tasks
        }
    }
}