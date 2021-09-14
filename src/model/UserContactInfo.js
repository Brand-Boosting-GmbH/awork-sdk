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
    constructor(data) {
        /**
         * @private
         */
        this._data = data || {}
    }

    /**
     * The id of the contact info.
     * @type {String}
     */
    get id() {
        return this._data.id
    }

    /**
     * The label of the contact info. Only necessary if type 'custom' is used.
     * @type {String} nullable
     */
    get label () {
        return this._data.label
    }

    /**
     * The value of the contact info
     * @type {String} nullable
     */
    get value () {
        return this._data.value
    }

    /**
     * The type of the contact info.
     * @type {('phone'|'email'|'adress'|'messenger'|'social'|'urls')}
     */
    get type() {
        return this._data.type
    }

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
    get subType () {
        return this._data.subType
    }

    /**
     * The first address line of the contact info.
     * @type {String} nullable
     */
    get addressLine1 () {
        return this._data.addressLine1
    }

    /**
     * The second address line of the contact info.
     * @type {String} nullable
     */
     get addressLine2 () {
        return this._data.addressLine2
    }

    /**
     * The Zipcode of the contact info.
     * @type {String} nullable
     */
    get zipCode () {
        return this._data.zipCode
    }

    /**
     * The city of the contact info.
     * @type {String} nullable
     */
    get city () {
        return this._data.city
    }

    /**
     * The state of the contact info.
     * @type {String} nullable
     */
    get state () {
        return this._data.state
    }

    /**
     * The 2-letter iso code of the country.
     * @type {String} nullable
     */
    get country () {
        return this._data.country
    }

    /**
     * Flags wheter this contact info is an address or not. If its an address, the address fields are required.
     * @type {Boolean}
     */
    get isAddress() {
        return this._data.isAddress
    }

    /**
     * The date this entity was created.
     * @type {String}
     */
    get createdOn () {
        return this._data.createdOn
    }

    /**
     * The id of the user who created this entity.
     * @type {String}
     */
     get createdBy () {
        return this._data.createdBy
    }

    /**
     * The date where the entity was updated.
     * @type {String}
     */
    get updatedOn () {
        return this._data.updatedOn
    }

    /**
     * The id of the user who updated the entity.
     * @type {String}
     */
    get updatedBy () {
        return this._data.updatedBy
    }

    /**
     * Whether the user has been deleted.
     * @type {String}
     */
    get isDeleted () {
        return this._data.isDeleted
    }

    toPlainObject() {
        return {
            id: this._data.id,
            label: this._data.label,
            value: this._data.value,
            type: this._data.type,
            subType: this._data.subType,
            addressLine1: this._data.addressLine1,
            addressLine2: this._data.addressLine2,
            zipCode: this._data.zipCode,
            city: this._data.city,
            state: this._data.state,
            country: this._data.country,
            isAddress: this._data.isAddress,
            createdOn: this._data.createdOn,
            createdBy: this._data.createdBy,
            updatedOn: this._data.updatedOn,
            updatedBy: this._data.updatedBy,
            isDeleted: this._data.isDeleted
        }
    }
}