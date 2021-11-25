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
    constructor(data: Project & {
        _plain?: true;
    });
    _data: any;
    /**
     * The name of the Project. Required.
     * @type {String} nullable
     */
    get name(): string;
    /**
     * The project description.
     * @type {String} nullable
     */
    get description(): string;
    /**
     * The start date of the project
     * @type {String} date-time
     */
    get startDate(): string;
    /**
     * The due date of the project
     * @type {String} date-time
     */
    get dueDate(): string;
    /**
     * The time budget the project has in seconds.
     * @type {Number} nullable
     */
    get timeBudget(): number;
    /**
     * Whether the project times should be billable by default.
     * @type {Boolean} nullable
     */
    get isBillableByDefault(): boolean;
    /**
     * The workspace id of the project
     * @type {String} uuid
     */
    get workspaceId(): string;
    /**
     * Id of the project. Required.
     * @type {String}
     */
    get id(): string;
    /**
     * Whether the project has an image.
     * @type {Boolean}
     */
    get hasImage(): boolean;
    /**
     * The unique key of the project. Required.
     * @type {String} nullable
     */
    get key(): string;
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
     * The date the project was set to closed.
     * @type {String} date-time, nullable
     */
    get closedOn(): string;
    /**
     * The user who closed the project.
     * @type {String} uuid
     */
    get closedBy(): string;
    /**
     * The id of the template the project was created from.
     * @type {String} nullable
     */
    get createdByProjectTemplateId(): string;
    get projectType(): any;
    /**
     * @type {Boolean}
     */
    get projectTypeIsArchived(): boolean;
    /**
     * @type {import('../index').Icon} nullable
     */
    get projectTypeIcon(): import("../index").Icon;
    /**
     * @type {String} nullable
     */
    get projectTypeName(): string;
    /**
     * @type {String} uuid
     */
    get projectTypeId(): string;
    /**
     * @type {Object} projectStatus
     */
    get projectStatus(): any;
    /**
     * The order of the status type.
     * @type {Number}
     */
    get projectStatusTypeOrder(): number;
    /**
     * @type {Boolean}
     */
    get projectStatusIsArchived(): boolean;
    /**
     * @type {String} nullable
     */
    get projectStatusDescription(): string;
    /**
     * @type {String} nullable
     */
    get projectStatusType(): string;
    /**
     * @type {String} nullable
     */
    get projectStatusName(): string;
    /**
     * @type {String} uuid
     */
    get projectStatusId(): string;
    /**
     * @type {Object} company properties
     */
    get company(): any;
    /**
     * Whether the company has a profile image.
     * @type {Boolean}
     */
    get companyHasImage(): boolean;
    /**
     * The description of the company.
     * @type {String} nullable
     */
    get companyDescription(): string;
    /**
     * @type {String} nullable
     */
    get companyName(): string;
    /**
     * @type {String} uuid
     */
    get companyId(): string;
    /**
     * The Tags of the company.
     * @type {Array<{id: String, name: String, entityId: String}>} nullable
     */
    get companyTags(): {
        id: string;
        name: string;
        entityId: string;
    }[];
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
    get tags(): {
        /**
         * uuid
         */
        id: string;
        /**
         * nullable
         */
        name: string;
        /**
         * nullable
         */
        color: import('../index').Color;
        /**
         * uuid
         */
        entityId: string;
        /**
         * date-time
         */
        createdOn: string;
        /**
         * uuid
         */
        createdBy: string;
        /**
         * date-time
         */
        updatedOn: string;
        /**
         * uuid
         */
        updatedBy: string;
    }[];
    /**
     * The total planned time of the project, in seconds. The time is calculated of the planned duration by all project tasks.
     * @type {Number} nullable
     */
    get plannedDuration(): number;
    /**
     * The number of all tasks related to the project.
     * @type {Number} nullable
     */
    get tasksCount(): number;
    /**
     * The number of all tasks in status 'done' related to the project.
     * @type {Number} nullable
     */
    get tasksDoneCount(): number;
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
    get members(): {
        /**
         * uuid
         */
        id: string;
        /**
         * uuid
         */
        userId: string;
        /**
         * nullable
         */
        firstName: string;
        /**
         * nullable
         */
        lastName: string;
        /**
         * nullable
         */
        hasImage: boolean;
        /**
         * uuid
         */
        projectRoleId: string;
        /**
         * nullable
         */
        projectRoleName: string;
        /**
         * uuid
         */
        isResponsible: boolean;
        /**
         * uuid
         */
        isDeactivated: boolean;
        /**
         * uuid
         */
        projectId: string;
    }[];
    /**
     * The summed up duration of all time trackings for this project.
     * @type {Number} nullable
     */
    get trackedDuration(): number;
    /**
     * The version of the entity continuously incremented.
     * @type {Number}
     */
    get resourceVersion(): number;
    /**
     * The teams the project is associated to.
     * @type {Array<{id: String, name: String, color: Color, icon:import('../index').Icon}>} nullable
     */
    get teams(): {
        id: string;
        name: string;
        color: Color;
        icon: import('../index').Icon;
    }[];
    toPlainObject(): {
        name: any;
        description: any;
        startDate: any;
        timeBudget: any;
        isBillableByDefault: any;
        workspaceId: any;
        dueDate: any;
        id: any;
        hasImage: any;
        key: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
        closedOn: any;
        closedBy: any;
        createdByProjectTemplateId: any;
        projectType: {
            isArchived: any;
            icon: any;
            name: any;
            id: any;
        };
        projectStatus: {
            typeOrder: any;
            isArchived: any;
            description: any;
            type: any;
            name: any;
            id: any;
        };
        company: {
            hasImage: any;
            description: any;
            tags: any;
            name: any;
            id: any;
        };
        tags: any;
        plannedDuration: any;
        tasksCount: any;
        tasksDoneCount: any;
        members: any;
        trackedDuration: any;
        resourceVersion: any;
        teams: any;
    };
}
