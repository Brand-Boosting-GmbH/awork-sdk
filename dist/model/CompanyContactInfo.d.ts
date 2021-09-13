/**
 * CompanyContactInfo Model
 * @category Models
 * @class
 */
export class CompanyContactInfo {
    /**
     * @typedef {CompanyContactInfo & {_plain?: true}} CompanyContactInfoLike
     */
    /**
     * Model constructor
     * @param {CompanyContactInfoLike} data
     */
    constructor(data: CompanyContactInfo & {
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
     * @type {('phone'|'email'|'address'|'custom')}
     */
    get type(): "custom" | "address" | "phone" | "email";
    /**
     * @typedef {('central'|'other')} PhoneSubType
     */
    /**
     * @typedef {('central'|'invoice'|'other')} EmailSubType
     */
    /**
     * @typedef {('central'|'invoice'|'other')} AddressSubType
     */
    /**
     * @typedef {('primary'|'other')} UrlSubType
     */
    /**
     * The subtype of the contact info. Answers depening on type of the contact info.
     * @type {(PhoneSubType|EmailSubType|AddressSubType|UrlSubType)}
     */
    get subType(): "other" | "central" | "invoice" | "primary";
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
     * The id of the user who created this entity.
     * @type {String}
     */
    get updatedOn(): string;
    /**
     * The id of the user who last modified this entity.
     * @type {String}
     */
    get updatedBy(): string;
    /**
     * The company id of the contact info.
     * @type {String}
     */
    get companyId(): string;
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
    };
}
