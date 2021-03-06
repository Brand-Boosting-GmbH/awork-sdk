import '../globalTypedef'

/**
 * Project Model
 * @category Models
 * @class
 */

export class Project {
    /**
     * @typedef {Project & {_plain?: true}} ProjectLike
     */

    /**
     * Model constructor
     * @param {ProjectLike} data 
     */
    constructor(data) {
        this._data = data || {}
    }

    /**
     * The name of the Project. Required.
     * @type {String} nullable
     */
    get name () {
        return this._data.name
    }

    /**
     * The project description.
     * @type {String} nullable
     */
    get description () {
        return this._data.description
    }

    /**
     * The start date of the project
     * @type {String} date-time
     */
    get startDate () {
        return this._data.startDate
    }

    
    /**
     * The due date of the project
     * @type {String} date-time
     */
    get dueDate () {
        return this._data.dueDate
    }
    
    /**
     * The time budget the project has in seconds.
     * @type {Number} nullable
     */
    get timeBudget () {
        return this._data.timeBudget
    }

    /**
     * Whether the project times should be billable by default.
     * @type {Boolean} nullable
     */
    get isBillableByDefault () {
        return this._data.isBillableByDefault
    }

    /**
     * The workspace id of the project
     * @type {String} uuid
     */
    get workspaceId () {
        return this._data.workspaceId
    }

    /**
     * Id of the project. Required.
     * @type {String}
     */
    get id () {
        return this._data.id
    }

    /**
     * Whether the project has an image.
     * @type {Boolean}
     */
    get hasImage () {
        return this._data.hasImage
    }

    /**
     * The unique key of the project. Required.
     * @type {String} nullable
     */
    get key () {
        return this._data.key
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
     * The date the project was set to closed.
     * @type {String} date-time, nullable
     */
    get closedOn () {
        return this._data.closedOn
    }

    /**
     * The user who closed the project.
     * @type {String} uuid
     */
    get closedBy () {
        return this._data.closedBy
    }

    /**
     * The id of the template the project was created from.
     * @type {String} nullable
     */
    get createdByProjectTemplateId () {
        return this._data.createdByProjectTemplateId
    }

    get projectType () {
        return this._data.projectType
    }
    
    /**
     * @type {Boolean}
     */
    get projectTypeIsArchived () {
        return this._data.projectType.isArchived
    }

    /**
     * @type {import('../index').Icon} nullable
     */
    get projectTypeIcon () {
        return this._data.projectType.icon
    }

    /**
     * @type {String} nullable
     */
    get projectTypeName () {
        return this._data.projectType.name
    }

    /**
     * @type {String} uuid
     */
    get projectTypeId () {
        return this._data.projectType.id
    }

    /**
     * @type {Object} projectStatus
     */
    get projectStatus () {
        return this._data.projectStatus
    }

    /**
     * The order of the status type.
     * @type {Number}
     */
    get projectStatusTypeOrder () {
        return this._data.projectStatus.typeOrder
    }

    /**
     * @type {Boolean}
     */
    get projectStatusIsArchived () {
        return this._data.projectStatus.isArchived
    }

    /**
     * @type {String} nullable
     */
    get projectStatusDescription () {
        return this._data.projectStatus.description
    }

    /**
     * @type {String} nullable
     */
    get projectStatusType () {
        return this._data.projectStatus.type
    }

    /**
     * @type {String} nullable
     */
    get projectStatusName () {
        return this._data.projectStatus.name
    }

    /**
     * @type {String} uuid
     */
    get projectStatusId () {
        return this._data.projectStatus.id
    }

    /**
     * @type {Object} company properties
     */
    get company () {
        return this._data.company
    }

    /**
     * Whether the company has a profile image.
     * @type {Boolean}
     */
    get companyHasImage () {
        return this._data.company.hasImage
    }

    /**
     * The description of the company.
     * @type {String} nullable
     */
    get companyDescription () {
        return this._data.company.description
    }

    /**
     * @type {String} nullable
     */
    get companyName () {
        return this._data.company.name
    }

    /**
     * @type {String} uuid
     */
    get companyId () {
        return this._data.company.id
    }

    /**
     * The Tags of the company.
     * @type {Array<{id: String, name: String, entityId: String}>} nullable
     */
    get companyTags () {
        return this._data.company.tags
    }


    /**
     * @typedef {Object} TagObject
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {import('../index').Color} color nullable
     * @property {String} entityId uuid
     * @property {String} createdOn date-time
     * @property {String} createdBy uuid
     * @property {String} updatedOn date-time
     * @property {String} updatedBy uuid
     */
    /**
     * The tags for this project.
     * @type {Array<TagObject>}
     */
    get tags () {
        return this._data.tags
    }

    /**
     * The total planned time of the project, in seconds. The time is calculated of the planned duration by all project tasks.
     * @type {Number} nullable
     */
    get plannedDuration () {
        return this._data.plannedDuration
    }

    /**
     * The number of all tasks related to the project.
     * @type {Number} nullable
     */
    get tasksCount () {
        return this._data.tasksCount
    }

    /**
     * The number of all tasks in status 'done' related to the project.
     * @type {Number} nullable
     */
    get tasksDoneCount () {
        return this._data.taksDoneCount
    }

    /**
     * @typedef {Object} MemberProperties
     * @property {String} id uuid
     * @property {String} userId uuid
     * @property {String} firstName nullable
     * @property {String} lastName nullable
     * @property {Boolean} hasImage nullable
     * @property {String} projectRoleId uuid
     * @property {String} projectRoleName nullable
     * @property {Boolean} isResponsible uuid
     * @property {Boolean} isDeactivated uuid
     * @property {String} projectId uuid
     */

    /**
     * The members of this project.
     * @type {Array<MemberProperties>} nullable
     */
    get members () {
        return this._data.members
    }

    /**
     * The summed up duration of all time trackings for this project.
     * @type {Number} nullable
     */
    get trackedDuration () {
        return this._data.trackedDuration
    }

    /**
     * The version of the entity continuously incremented.
     * @type {Number}
     */
    get resourceVersion () {
        return this._data.resourceVersion
    }

    /**
     * The teams the project is associated to.
     * @type {Array<{id: String, name: String, color: Color, icon:import('../index').Icon}>} nullable
     */
    get teams () {
        return this._data.teams
    }

    toPlainObject() {
        return {
            name: this._data.name,
            description: this._data.description,
            startDate: this._data.startDate,
            timeBudget: this._data.timeBudget,
            isBillableByDefault: this._data.isBillableByDefault,
            workspaceId: this._data.workspaceId,
            dueDate: this._data.dueDate,
            id: this._data.id,
            hasImage: this._data.hasImage,
            key: this._data.key,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy,
            closedOn: this._data.closedOn,
            closedBy: this._data.closedBy,
            createdByProjectTemplateId: this._data.createdByProjectTemplateId,
            projectType: {
                isArchived: this._data.projectType.isArchived,
                icon: this._data.projectType.icon,
                name: this._data.projectType.name,
                id: this._data.projectType.id 
            },
            projectStatus: {
                typeOrder: this._data.projectStatus.typeOrder,
                isArchived: this._data.projectStatus.isArchived,
                description: this._data.projectStatus.description,
                type: this._data.projectStatus.type,
                name: this._data.projectStatus.name,
                id: this._data.projectStatus.id
            },
            company: {
                hasImage: this._data.company.hasImage,
                description: this._data.company.description,
                tags: this._data.company.tags, //Array of Objects
                name: this._data.company.name,
                id: this._data.company.id
            },
            tags: this._data.tags,
            plannedDuration: this._data.plannedDuration,
            tasksCount: this._data.tasksCount,
            tasksDoneCount: this._data.tasksDoneCount,
            members: this._data.members,
            trackedDuration: this._data.trackedDuration,
            resourceVersion: this._data.resourceVersion,
            teams: this._data.teams
        }
    }


}