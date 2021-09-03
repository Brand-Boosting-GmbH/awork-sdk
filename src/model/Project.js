
export class Project {
    constructor(data) {
        this._data = data || {}
    }

    /**
     * @type {String}
     */

    get id () {
        return this._data.id
    }

    /**
     * @type {Boolean}
     */
    get hasImage () {
        return this._data.hasImage
    }

    /**
     * @type {String} nullable
     */
    get key () {
        return this._data.key
    }

    /**
     * @type {String} date-time
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * @type {String} uuid
     */
    get createdBy () {
        return this._data.createdBy
    }

    /**
     * @type {String} date-time
     */
     get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * @type {String} uuid
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    /**
     * @type {String} date-time, nullable
     */
    get closedOn () {
        return this._data.closedOn
    }

    /**
     * @type {String} uuid
     */
    get closedBy () {
        return this._data.closedBy
    }

    /**
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
     * @type {String} nullable
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
    
    



    toPlainObject() {
        return {
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
            projectType: this._data.projectType

        }
    }


}