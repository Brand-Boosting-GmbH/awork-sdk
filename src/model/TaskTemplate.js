import '../globalTypedef'

/**
 * TaskTemplate Model
 * @category Models
 * @class
 */
export class TaskTemplate {
    /**
     * @typedef {TaskTemplate & {_plain?: true}} TaskTemplateLike
     */

    /**
     * Model constructor
     * @param {TaskTemplateLike} data 
     */
    constructor(data) {
        /**@private */
        this._data = data
    }

    /**
     * The name of the task created from this template.
     * @type {String} nullable
     */
    get name () {
        return this._data.name
    }

    /**
     * The description of the task created from this template.
     * @type {String} nullable
     */
    get description () {
        return this._data.description
    }

    /**
     * Whether the task created from this template will be marked as priority.
     * @type {Boolean}
     */
    get isPrio () {
        return this._data.isPrio
    }

    /**
     * The expected planned workload of the task created from this template, in seconds.
     * @type {Number}
     */
    get plannedDuration () {
        return this._data.plannedDuration
    }

    /**
     * The relative start date and time of the task created from this template, in seconds, from th emoment of creating the task.
     * @type {Number}
     */
    get relativeStartOn () {
        return this._data.relativeStartOn
    }

    /**
     * The relative due date and time of the task created from this template, in seconds, from the moment of creating the task.
     * @type {Number}
     */
    get relativeDueOn () {
        return this._data.relativeDueOn
    }

    /**
     * The id of the type of work of this task.
     * @type {String} uuid
     */
    get typeOfWorkId () {
        return this._data.typeOfWorkId
    }

    /**
     * The id of the assigned user of this task.
     * @type {String} uuid
     */
    get assignedUserId () {
        return this._data.assignedUserId
    }

    /**
     * The id of the assigned role of this task.
     * @type {String} uuid
     */
    get assignedRoleId () {
        return this._data.assignedRoleId
    }

    /**
     * The id of the task template.
     * @type {String} uuid
     */
    get id () {
        return this._data.id
    }

    /**
     * The type of the the task.
     * @type {Object}
     */
    get taskType () {
        return this._data.taskType
    }

    /**
     * The id of the task type.
     * @type {String} uuid
     */
    get taskTypeId () {
        return this._data.taskType.id
    }

    /**
     * The name of the task type.
     * @type {String} nullable
     */
    get taskTypeName () {
        return this._data.taskType.name
    }

    /**
     * A short (max. 140 characters) description of the task type.
     * @type {String} nullable
     */
    get taskTypeDescription () {
        return this._data.taskType.description
    }

    /**
     * The icon associated with this task type.
     * @type {Icon} Possible awork icons.
     */
    get taskTypeIcon () {
        return this._data.taskType.icon
    }

    /**
     * Whether the task type has been archived.
     * @type {Boolean}
     */
    get taskTypeIsArchived () {
        return this._data.taskType.isArchived
    }

    /**
     * The date this etity was created.
     * @type {String} date-time
     */
    get taskTypeCreatedOn () {
        return this._data.taskType.createdOn
    }

    /**
     * The id of the us created this entity.
     * @type {String} uuid
     */
    get taskTypeCreatedBy () {
        return this._data.taskType.createdBy
    }

    /**
     * The date this entity was last modified.
     * @type {String} date-time
     */
    get taskTypeUpdatedOn () {
        return this._data.taskType.updatedOn
    }

    /**
     * The id of the user who last modified this entity.
     * @type {String} uuid
     */
    get taskTypeUpdatedBy () {
        return this._data.taskType.updatedBy
    }

    /**
     * @typedef {Object} TaskTemplateTaskListTemplateModel
     * @property {String} id The id of the task list template.
     * @property {String} name The name of the task list template.
     * @property {Number} orderOfTask The order of the task template in the task list template.
     * @property {Number} order The order of the task list template, unique within the task bundle.
     */

    /**
     * The task list templates of the task template.
     * @type {Array<TaskTemplateTaskListTemplateModel>}
     */
    get taskListTemplate () {
        return this._data.taskListTemplate
    }

    /**
     * @typedef {Object} TaskDependencyTemplateModel
     * @property {String} prodecessorTemplateId The id of the predecessor task template.
     * @property {String} successorTemplateId The id of the successor task template.
     */

    /**
     * @type {Array<TaskDependencyTemplateModel>}
     */
    get taskDependencyTemplates () {
        return this._data.taskDependencyTemplates
    }

    /**
     * The date this task was created.
     * @type {String} uuid
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The id of the user who created this task.
     * @type {String} date-time
     */
    get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date this task was last modified.
     * @type {String} date-time
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The id of the user who last modified this task.
     * @type {String} uuid
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    /**
     * For internal purposes.
     * @type {Number} nullable
     */
    get order () {
        return this._data.order
    }

    /**
     * If the task template has attachments.
     * @type {Boolean}
     */
    get hasAttachment () {
        return this._data.hasAttachment
    }

    /**
     * If the task is a recurrency template, the flag is true.
     * @type {Boolean}
     */
    get isRecurring () {
        return this._data.isRecurring
    }

    toPlainObject() {
        return {
            name: this._data.name,
            description: this._data.description,
            isPrio: this._data.isPrio,
            plannedDuration: this._data.plannedDuration,
            relativeDueOn: this._data.relativeDueOn,
            relativeStartOn: this._data.relativeStartOn,
            typeOfWorkId: this._data.typeOfWorkId,
            assignedRoleId: this._data.assignedRoleId,
            assignedUserId: this._data.assignedUserId,
            id: this._data.id,
            taskType: this._data.taskType,
            taskListTemplate: this._data.taskListTemplate,
            taskDependencyTemplates: this._data.taskDependencyTemplates,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy,
            order: this._data.order,
            hasAttachment: this._data.hasAttachment,
            isRecurring: this._data.isRecurring
        }
    }
}