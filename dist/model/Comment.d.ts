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
    constructor(data: Comment & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * The message of the comment. Required.
     * @type {String} maxLength: 65000
     */
    get message(): string;
    /**
     * The id of the user who created the comment. If not set, defaults to the current user.
     * @type {String} uuid
     */
    get userId(): string;
    /**
     * The preview URLs to show a preview for.
     * @type {Array<String>}
     */
    get previews(): string[];
    /**
     * The id of the comment.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * The id of the entity of the comment. Required.
     * @type {String} uuid
     */
    get entityId(): string;
    /**
     * The type of the entity of the comment. Required.
     * @type {('companies'|'files'|'projects'|'tasks')} nullable
     */
    get entityType(): "files" | "companies" | "projects" | "tasks";
    /**
     * The date this object was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this object.
     * @type {String} uuid
     */
    get createdBy(): string;
    get user(): any;
    /**
     * @type {String} nullable
     */
    get userFirstName(): string;
    /**
     * @type {String} nullable
     */
    get userLastName(): string;
    /**
     * @type {Boolean}
     */
    get userHasImage(): boolean;
    /**
     * @type {String} nullable
     */
    get userKey(): string;
    get project(): any;
    /**
     * @type {String} uuid
     */
    get projectId(): string;
    /**
     * @type {String} nullable
     */
    get projectName(): string;
    /**
     * @type {String} nullable
     */
    get projectProjectTypeIcon(): string;
    /**
     * @type {String} nullable
     */
    get projectProjectCompanyProfileImageUrl(): string;
    get entity(): any;
    /**
     * @type {String} nullable
     */
    get entityName(): string;
    /**
     * @type {String} nullable
     */
    get entityProjectTypeIcon(): string;
    /**
     * @type {String} nullable
     */
    get entityProjectCompanyProfileImageUrl(): string;
    /**
     * The date this object was last modified.
     * @type {String} date-time
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this object.
     * @type {String} uuid
     */
    get updatedBy(): string;
    /**
     * A mention is the tag of a user on a specific comment, so the user is notified.
     */
    get mentions(): any;
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
    get mentionsUsers(): {
        /**
         * uuid
         */
        id: string;
        /**
         * nullable
         */
        fistName: string;
        /**
         * nullable
         */
        lastName: string;
        hasImage: boolean;
        /**
         * nullable
         */
        key: string;
    }[];
    /**
     * If every user was able to receive the mention notification. If not, one of the users had no permissions to.
     * @type {Boolean}
     */
    get mentionsEveryUserHadPermissions(): boolean;
    /**
     * @typedef {Object} ReactionsObject
     * @property {Array<String>} userIds All users ids that reacted with the emoji.
     * @property {String} emoji The moji used as a reaction.
     */
    /**
     * The reactions on a comment.
     * @type {Array<ReactionsObject>}
     */
    get reactions(): {
        /**
         * All users ids that reacted with the emoji.
         */
        userIds: Array<string>;
        /**
         * The moji used as a reaction.
         */
        emoji: string;
    }[];
    /**
     * The formatted and proccessed version of the comment message. E.g. mentions are in a human readable format. The formatted comment message is styled with html.
     * @type {String} nullable
     */
    get formattedMessage(): string;
    /**
     * The formatted and proccessed version of the comment message. E.g. mentions are in a human readable format. The formatted comment message is not styled.
     * @type {String} nullable
     */
    get plainFormattedMessage(): string;
    /**
     * The version of the entity.
     * @type {Integer} int64
     */
    get resourceVersion(): any;
    toPlainObject(): {
        message: any;
        userId: any;
        previews: any;
        id: any;
        entityId: any;
        entityType: any;
        createdOn: any;
        createdBy: any;
        user: {
            id: any;
            firstName: any;
            lastName: any;
            hasImage: any;
            key: any;
        };
        project: {
            id: any;
            name: any;
            projectTypeIcon: any;
            projectCompanyProfileImageUrl: any;
        };
        entity: {
            id: any;
            name: any;
            projectTypeIcon: any;
            projectCompanyProfileImageUrl: any;
        };
        mentions: {
            users: any;
            everyUserHadPermissions: any;
        };
        reactions: any;
        formattedMessage: any;
        plainFormattedMessage: any;
        resoureVersion: any;
    };
}
