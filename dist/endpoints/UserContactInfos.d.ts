/**
 * Class corresponding to Aworks project related part of the UserContactInfos Endpoints
 * @category Endpoints
 * @see [UserContactInfos in Awork API Docs](https://openapi.awork.com/#/UserContactInfos)
 */
export class UserContactInfos {
    /**
    * Endpoint constructor
    * @param {import('../client/index').Client} client
    * @param {String} userId The id of the user.
    */
    constructor(client: import('../client/index').Client, userId: string);
    /** @private */
    private _client;
    /** @private */
    private _userId;
    /**
     * Returns the contact infos of the user with the specified id.
     * @param {String} contactInfoId The id of the contact info.
     * @returns {Promise<UserContactInfo>}
     */
    get(contactInfoId: string): Promise<UserContactInfo>;
    /**
     * Returns the contact infos of the user with the specified id.
     * @param {import('../global').ListOptions} options Pagination and filtering options
     * @returns {Promise<Array<UserContactInfo>>}
     */
    list(options: import('../global').ListOptions): Promise<Array<UserContactInfo>>;
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
      * @typedef {Object} UserContactInfoCreateModel
      * @property {String} label The label of the contact info. Only necessary if type 'custom' is used.
      * @property {String} value The value of the contact info.
      * @property {('phone'|'email'|'adress'|'messenger'|'social'|'urls')} type The type of the contact info.
      * @property {(PhoneSubType|EmailSubType|AddressSubType|MessengerSubType|SocialSubType|UrlSubType)} subtype The subtype of the contact info.
      * @property {String} addressLine1 The first Address line of the address.
      * @property {String} addressLine2 The second address line of the contact info.
      * @property {String} zipCode The Zipcode of the contact info.
      * @property {String} city The city of the contact info.
      * @property {String} state The state of the contact info.
      * @property {String} country The 2 letter iso code of the country.
      * @property {Boolean} isAdress Flags whether this contactinfo is an address or not. If its an address, the address fields are required.
      */
    /**
     * Creates a new contact info for the user with the specified id.
     * @param {UserContactInfoCreateModel} userContactInfoCreateModel The model to create a user contact information.
     * @returns {Promise<UserContactInfo>}
     */
    create(userContactInfoCreateModel: {
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
        subtype: "private" | "other" | "work" | "mobile" | "home" | "work Fax" | "fax" | "skype" | "whatsapp" | "facebook" | "twitter" | "xing" | "linkedIn" | "instagram" | "pinterest" | "gitHub";
        /**
         * The first Address line of the address.
         */
        addressLine1: string;
        /**
         * The second address line of the contact info.
         */
        addressLine2: string;
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
    }): Promise<UserContactInfo>;
    /**
     * @typedef {UserContactInfoCreateModel} UserContactInfoUpdateModel
     */
    /**
     * Updates the contact info of the user with the specified id.
     * @param {String} contactInfoId The id of the contact info.
     * @param {UserContactInfoUpdateModel} userContactInfoUpdateModel The model to update a user contact information.
     * @returns
     */
    update(contactInfoId: string): Promise<UserContactInfo>;
    /**
     * Deletes the contact info of the user with the specified id.
     * @param {String} contactInfoId The id of the contact info.
     * @returns {Promise<void>}
     */
    delete(contactInfoId: string): Promise<void>;
}
import { UserContactInfo } from "../model/UserContactInfo";
