/**
 * UserContactInfo Model
 * @category Models
 * @class
 */
export class UserContactInfo {
    /**
     * @typedef {UserContactInfo & {_plain?: true}} UserContactInfoLike
     */
    /**
     * Model constructor
     * @param {UserContactInfoLike} data
     */
    constructor(data: UserContactInfo & {
        _plain?: true;
    });
    /**
     * @private
     */
    private _data;
    /**
     * The id of the contact info.
     * @type {String}
     */
    get id(): string;
    /**
     * The label of the contact info. Only necessary if type 'custom' is used.
     * @type {String} nullable
     */
    get label(): string;
    /**
     * The value of the contact info
     * @type {String} nullable
     */
    get value(): string;
    /**
     * The type of the contact info.
     * @type {('phone'|'email'|'adress'|'messenger'|'social'|'urls')}
     */
    get type(): "phone" | "email" | "adress" | "messenger" | "social" | "urls";
    /**
     * @typedef {('work'|'mobile'|'home'|'work Fax'|'fax'|'other')} PhoneSubType
     */
    /**
     * @typedef {('work'|'private'|'other')} EmailSubType
     */
    /**
     * @typedef {('work'|'home'|'other')} AddressSubType
     */
    /**
     * @typedef {('work'|'private'|'gitHub'|'other')} UrlSubType
     */
    /**
     * @typedef {('skype'|'whatsapp'|'other')} MessengerSubType
     */
    /**
     * @typedef {('facebook'|'twitter'|'xing'|'linkedIn'|'instagram'|'pinterest'|'other')} SocialSubType
     */
    /**
     * The subtype of the contact info.
     * @type {(PhoneSubType|EmailSubType|AddressSubType|MessengerSubType|SocialSubType|UrlSubType)}
     */
    get subType(): "private" | "other" | "work" | "mobile" | "home" | "work Fax" | "fax" | "skype" | "whatsapp" | "facebook" | "twitter" | "xing" | "linkedIn" | "instagram" | "pinterest" | "gitHub";
    /**
     * The first address line of the contact info.
     * @type {String} nullable
     */
    get addressLine1(): string;
    /**
     * The second address line of the contact info.
     * @type {String} nullable
     */
    get addressLine2(): string;
    /**
     * The Zipcode of the contact info.
     * @type {String} nullable
     */
    get zipCode(): string;
    /**
     * The city of the contact info.
     * @type {String} nullable
     */
    get city(): string;
    /**
     * The state of the contact info.
     * @type {String} nullable
     */
    get state(): string;
    /**
     * The 2-letter iso code of the country.
     * @type {String} nullable
     */
    get country(): string;
    /**
     * Flags wheter this contact info is an address or not. If its an address, the address fields are required.
     * @type {Boolean}
     */
    get isAddress(): boolean;
    /**
     * The date this entity was created.
     * @type {String}
     */
    get createdOn(): string;
    /**
     * The id of the user who created this entity.
     * @type {String}
     */
    get createdBy(): string;
    /**
     * The date where the entity was updated.
     * @type {String}
     */
    get updatedOn(): string;
    /**
     * The id of the user who updated the entity.
     * @type {String}
     */
    get updatedBy(): string;
    /**
     * Whether the user has been deleted.
     * @type {String}
     */
    get isDeleted(): string;
    toPlainObject(): {
        id: any;
        label: any;
        value: any;
        type: any;
        subType: any;
        addressLine1: any;
        addressLine2: any;
        zipCode: any;
        city: any;
        state: any;
        country: any;
        isAddress: any;
        createdOn: any;
        createdBy: any;
        updatedOn: any;
        updatedBy: any;
        isDeleted: any;
    };
}
