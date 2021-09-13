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
     * @typedef {('work'|'mobile'|'home'|'work Fax'|'fax'|'other')} PhoneType
     */
    /**
     * @typedef {('work'|'private'|'other')} EmailType
     */
    /**
     * @typedef {('work'|'home'|'other')} AdressType
     */
    /**
     * @typedef {('skype'|'whatsapp'|'other')} MessengerType
     */
    /**
     * @typedef {('facebook'|'twitter'|'xing'|'linkedIn'|'instagram'|'pinterest'|'other')} SocialType
     */
    /**
     * @typedef {('work'|'private'|'gitHub'|'other')} UrlType
     */
    /**
     * @typedef {Object} userContactObject
     * @property {String} label The label of the contact info. Only necessary if type 'custom' is used.
     * @property {String} value The value of the contact info.
     * @property {('phone'|'email'|'adress'|'messenger'|'social'|'urls')} type The type of the contact info.
     * @property {(PhoneType|EmailType|AdressType|MessengerType|SocialType|UrlType)} subType The subtype of the contact info.
     * @property {String} adressLine1 The first Address line of the address.
     * @property {String} adressLine2 The second address line of the contact info.
     * @property {String} zipCode The Zipcode of the contact info.
     * @property {String} city The city of the contact info.
     * @property {String} state The state of the contact info.
     * @property {String} country The 2 letter iso code of the country.
     * @property {Boolean} isAdress Flags whether this contactinfo is an address or not. If its an address, the address fields are required.
     * @property {String} id The Id of the contact info.
     * @property {Boolean} isDeleted Whether the user has been deleted.
     * @property {String} createdOn The creation date.
     * @property {String} createdBy The id of the user who created the entity.
     * @property {String} updatedOn The date where the entity was updated.
     * @property {String} updatedBy The id of the user who updated the entity.
     */
    /**
     * The contact information assigned to this user.
     * @type {Array<userContactObject>}
     */
    get userContactInfos(): {
        /**
         * The label of the contact info. Only necessary if type 'custom' is used.
         */
        label: string;
        /**
         * The value of the contact info.
         */
        value: string;
        /**
         * The type of the contact info.
         */
        type: ('phone' | 'email' | 'adress' | 'messenger' | 'social' | 'urls');
        /**
         * The subtype of the contact info.
         */
        subType: "private" | "other" | "work" | "mobile" | "home" | "work Fax" | "fax" | "skype" | "whatsapp" | "facebook" | "twitter" | "xing" | "linkedIn" | "instagram" | "pinterest" | "gitHub";
        /**
         * The first Address line of the address.
         */
        adressLine1: string;
        /**
         * The second address line of the contact info.
         */
        adressLine2: string;
        /**
         * The Zipcode of the contact info.
         */
        zipCode: string;
        /**
         * The city of the contact info.
         */
        city: string;
        /**
         * The state of the contact info.
         */
        state: string;
        /**
         * The 2 letter iso code of the country.
         */
        country: string;
        /**
         * Flags whether this contactinfo is an address or not. If its an address, the address fields are required.
         */
        isAdress: boolean;
        /**
         * The Id of the contact info.
         */
        id: string;
        /**
         * Whether the user has been deleted.
         */
        isDeleted: boolean;
        /**
         * The creation date.
         */
        createdOn: string;
        /**
         * The id of the user who created the entity.
         */
        createdBy: string;
        /**
         * The date where the entity was updated.
         */
        updatedOn: string;
        /**
         * The id of the user who updated the entity.
         */
        updatedBy: string;
    }[];
    /**
     * The version of the entity continuously incremented by 1 on every update of the entity.
     * @type {Integer} int64
     */
    get resourceVersion(): any;
}
