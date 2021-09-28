import '../globalTypedef'

/**
 * Comment Model
 * @category Models
 * @class
 */
 export class Comment {
    /**
     * @typedef {Comment & {_plain?: true}} CommentLike
     */

    /**
     * Model constructor
     * @param {CommentLike} data 
     */
    constructor(data) {
        /** @private */
        this._data = data || {}
    }

    /**
     * The message of the comment. Required.
     * @type {String} maxLength: 65000
     */
    get message () {
        return this._data.message
    }

    /**
     * The id of the user who created the comment. If not set, defaults to the current user.
     * @type {String} uuid
     */
    get userId () {
        return this._data.userId
    }

    /**
     * The preview URLs to show a preview for.
     * @type {Array<String>}
     */
    get previews () {
        return this._data.previews
    }

    /**
     * The id of the comment.
     * @type {String} uuid
     */
    get id () {
        return this._data.id
    }

    /**
     * The id of the entity of the comment. Required.
     * @type {String} uuid
     */
    get entityId () {
        return this._data.entityId
    }

    /**
     * The type of the entity of the comment. Required.
     * @type {('companies'|'files'|'projects'|'tasks')} nullable
     */
    get entityType () {
        return this._data.entityType
    }

    /**
     * The date this object was created.
     * @type {String} date-time
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The id of the user who created this object.
     * @type {String} uuid
     */
    get createdBy () {
        return this._data.createdBy
    }

    get user () {
        return this._data.user
    }

    /**
     * @type {String} uuid
     */
    get userId () {
        return this._data.user.id
    }

    /**
     * @type {String} nullable
     */
    get userFirstName () {
        return this._data.user.firstName
    }

    /**
     * @type {String} nullable
     */
    get userLastName () {
        return this._data.user.lastName
    }

    /**
     * @type {Boolean}
     */
    get userHasImage () {
        return this._data.user.hasImage
    }

    /**
     * @type {String} nullable
     */
    get userKey () {
        return this._data.user.key
    }

    get project () {
        return this._data.project
    }

    /**
     * @type {String} uuid
     */
    get projectId () {
        return this._data.project.id
    }

    /**
     * @type {String} nullable
     */
    get projectName () {
        return this._data.project.name
    }

    /**
     * @type {Icon} nullable
     */
    get projectProjectTypeIcon () {
        return this._data.project.projectTypeIcon
    }

    /**
     * @type {String} nullable
     */
    get projectProjectCompanyProfileImageUrl () {
        return this._data.project.projectCompanyProfileImageUrl
    }

    get entity () {
        return this._data.entity
    }

    /**
     * @type {String} uuid
     */
    get entityId () {
        return this._data.entity.id
    }

    /**
     * @type {String} nullable
     */
    get entityName () {
        return this._data.entity.name
    }

    /**
     * @type {Icon} nullable
     */
    get entityProjectTypeIcon () {
        return this._data.entity.projectTypeIcon
    }

    /**
     * @type {String} nullable
     */
    get entityProjectCompanyProfileImageUrl () {
        return this._data.entity.projectCompanyProfileImageUrl
    }

    /**
     * The date this object was last modified.
     * @type {String} date-time
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The id of the user who last modified this object.
     * @type {String} uuid
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    /**
     * A mention is the tag of a user on a specific comment, so the user is notified.
     */
    get mentions () {
        return this._data.mentions
    }

    /**
     * @typedef {Object} MentionsUsersObject
     * @property {String} id uuid
     * @property {String} fistName nullable
     * @property {String} lastName nullable
     * @property {Boolean} hasImage
     * @property {String} key nullable
     */

    /**
     * All users, which has been mentioned on the comment.
     * @type {Array<MentionsUsersObject>}
     */
    get mentionsUsers () {
        return this._data.mentions.users
    }

    /**
     * If every user was able to receive the mention notification. If not, one of the users had no permissions to.
     * @type {Boolean}
     */
    get mentionsEveryUserHadPermissions () {
        return this._data.mentions.everyUserHadPermissions
    }

    /**
     * @typedef {Object} ReactionsObject
     * @property {Array<String>} userIds All users ids that reacted with the emoji.
     * @property {String} emoji The moji used as a reaction.
     */

    /**
     * The reactions on a comment.
     * @type {Array<ReactionsObject>}
     */
    get reactions () {
        return this._data.reactions
    }

    /**
     * The formatted and proccessed version of the comment message. E.g. mentions are in a human readable format. The formatted comment message is styled with html.
     * @type {String} nullable
     */
    get formattedMessage () {
        return this._data.formattedMessage
    }

    /**
     * The formatted and proccessed version of the comment message. E.g. mentions are in a human readable format. The formatted comment message is not styled.
     * @type {String} nullable
     */
    get plainFormattedMessage () {
        return this._data.plainFormattedMessage
    }

    /**
     * The version of the entity.
     * @type {Integer} int64
     */
    get resourceVersion () {
        return this._data.resourceVersion
    }

    toPlainObject() {
        return {
            message: this._data.message,
            userId: this._data.userId,
            previews: this._data.previews,
            id: this._data.id,
            entityId: this._data.entityId,
            entityType: this._data.entityType,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            user: {
                id: this._data.user.id,
                firstName: this._data.user.firstName,
                lastName: this._data.user.lastName,
                hasImage: this._data.user.hasImage,
                key: this._data.user.key
            },
            project: {
                id: this._data.project.id,
                name: this._data.project.name,
                projectTypeIcon: this._data.project.projectTypeIcon,
                projectCompanyProfileImageUrl: this._data.project.projectCompanyProfileImageUrl
            },
            entity: {
                id: this._data.entity.id,
                name: this._data.entity.name,
                projectTypeIcon: this._data.entity.projectTypeIcon,
                projectCompanyProfileImageUrl: this._data.entity.projectCompanyProfileImageUrl
            },
            mentions: {
                users: this._data.mentions.users,
                everyUserHadPermissions: this._data.mentions.everyUserHadPermissions
            },
            reactions: this._data.reactions,
            formattedMessage: this._data.formattedMessage,
            plainFormattedMessage: this._data.plainFormattedMessage,
            resoureVersion: this._data.resourceVersion
        }
    }
}