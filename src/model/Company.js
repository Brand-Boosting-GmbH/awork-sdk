

export class Company {
    constructor(data) {
        this._data = data || {}
    }

    /**
     * The id of the company.
     * @type {String}
     */
    get id() {
        return this._data.id
    }

    /**
     * The company name. Required.
     * @type {String} nullable
     */
    get name() {
        return this._data.name
    }

    /**
     * The company description. Optional.
     * @type {String} nullable
     */
     get description () {
        return this._data.description
    }

    /**
     * The company's industry. Optional.
     * @type {String} nullable
     */
    get industry () {
        return this._data.industry
    }

    /**
     * The workspace id of the company.
     * @type {String}
     */
    get workspaceId () {
        return this._data.workspaceId
    }

    /**
     * Whether the company has an image.
     * @type {Boolean}
     */
    get hasImage() {
        return this._data.title
    }

    /**
     * The company infos assigned to this company.
     * @type {Array<import('./CompanyContactInfo').CompanyContactInfo>}
     */
    get companyContactInfos () {
        return this._data.companyContactInfos
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
     * The version of the entity continuously incremented by 1 on every update of the entity.
     * @type {Number}
     */
    get resourceVersion () {
        return this._data.resourceVersion
    }


    /**
     * @typedef {Object} CompanyTags
     * @property {String} id uuid
     * @property {String} name nullable
     * @property {String} color nullable
     * @property {String} entityId uuid
     * @property {String} createdOn date-time
     * @property {String} createdBy uuid
     * @property {String} updatedOn date-time
     * @property {String} updatedBy uuid
     */

    /**
     * The tags for this company.
     * @type {Array<CompanyTags>} nullable
     */
    get tags () {
        return this._data.tags
    }

    /**
     * The number of all projects related to the company.
     * @type {Number}
     */
    get projectsCount () {
        return this._data.projectsCount
    }

    /**
     * The number of all projects in status 'progress' related to the company.
     * @type {Number}
     */
    get projectsInProgressCount () {
        return this._data.projectsInProgressCount
    }



    toPlainObject() {
        return {
            id: this._data.id,
            name: this._data.name,
            description: this._data.description,
            industry: this._data.industry,
            workspaceId: this._data.workspaceId,
            hasImage: this._data.hasImage,
            companyContactInfos: this._data.companyContactInfos,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy,
            resourceVersion: this._data.resourceVersion,
            tags: this._data.tags,
            projectsCount: this._data.projectsCount,
            projectsInProgressCount: this._data.projectsInProgressCount
        }
    }
}