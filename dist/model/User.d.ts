/**
 * User Model
 * @category Models
 * @class
 */
export class User {
    /**
     * @typedef {User & {_plain?: true}} UserLike
     */
    /**
     * Model constructor
     * @param {UserLike} data
     */
    constructor(data: User & {
        _plain?: true;
    });
    /** @private */
    private _data;
    /**
     * The firstname of the user.
     * @type {String} nullable
     */
    get firstName(): string;
    /**
     * The lastname of the user.
     * @type {String} nullable
     */
    get lastName(): string;
    /**
     * The birthdate of the user.
     * @type {String} date-time
     */
    get birthDate(): string;
    /**
     * The gender of the user.
     * @type {String} nullable
     */
    get gender(): string;
    /**
     * The title of the user.
     * @type {String} nullable
     */
    get title(): string;
    /**
     * The position of the user.
     * @type {String} nullable
     */
    get position(): string;
    /**
     * The language preference of the user in ISO 639-1 format.
     * @type {String} nullable
     */
    get language(): string;
    /**
     * The capacity of the user per week in seconds.
     * @type {Integer} int32
     */
    get capacityPerWeek(): any;
    /**
     * The id of the user.
     * @type {String} uuid
     */
    get id(): string;
    /**
     * Unique identifier of the user.
     * @type {String} nullable
     */
    get key(): string;
    /**
     * The status of the user.
     * @type {Object} status
     */
    get status(): any;
    /**
     * Flag if the user in this workspace accepted the invitation.
     * @type {Boolean}
     */
    get statusInvitationAccepted(): boolean;
    /**
     * Whether the user is deactivated.
     * @type {Boolean}
     */
    get statusIsDeactivated(): boolean;
    /**
     * The date this user was created.
     * @type {String} date-time
     */
    get createdOn(): string;
    /**
     * The id of the user who created this user.
     * @type {String} uuid
     */
    get createdBy(): string;
    /**
     * The date where this user was last updated.
     * @type {String} uuid
     */
    get updatedOn(): string;
    /**
     * The id of the user who updated the entity.
     * @type {String} uuid
     */
    get updatedBy(): string;
    /**
     * Whether this user is archived. Archived users are automatically inactive and only exist for reference purposes.
     * @type {Boolean}
     */
    get isArchived(): boolean;
    /**
     * Whether the user has been deactivated.
     * @type {Boolean}
     */
    get isDeactivated(): boolean;
    /**
     * The date the user was deactivated.
     * @type {String} date-time
     */
    get deactivatedOn(): string;
    /**
     * Whether the user has uploaded a profile image.
     * @type {Boolean}
     */
    get hasImage(): boolean;
    /**
     * The contact information assigned to this user.
     * @type {Array<import('./UserContactInfo').UserContactInfo>}
     */
    get userContactInfos(): import("./UserContactInfo").UserContactInfo[];
    /**
     * The version of the entity continuously incremented by 1 on every update of the entity.
     * @type {Integer} int64
     */
    get resourceVersion(): any;
    /**
     * @typedef {Object} UserTagsObject
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
     * The tags of this user.
     * @type {Array<UserTagsObject>}
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
        color: string;
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
    toPlainObject(): {
        id: any;
        firstName: any;
        lastName: any;
        birthDate: any;
        gender: any;
        title: any;
        position: any;
        language: any;
        capacityPerWeek: any;
        key: any;
        status: {
            invitationAccepted: any;
            isDeactivated: any;
        };
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
        isArchived: any;
        isDeactivated: any;
        deactivatedOn: any;
        hasImage: any;
        userContactInfos: any;
        resourceVersion: any;
        tags: any;
    };
}
