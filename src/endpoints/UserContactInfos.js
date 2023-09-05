import '../globalTypedef'
import { User } from '../model/User'
import { UserContactInfo } from "../model/UserContactInfo"

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
  constructor(client, userId) {
    /** @private */
    this._client = client
    /** @private */
    this._userId = userId
  }

  /**
   * Returns the contact infos of the user with the specified id.
   * @param {String} contactInfoId The id of the contact info.
   * @returns {Promise<UserContactInfo>}
   */
  async get(contactInfoId) {
    const response = await this._client.get(`/users/${this._userId}/contactinfo/${contactInfoId}`)
    const data = response.data()
    return new UserContactInfo(data)
  }

  /**
   * Returns the contact infos of the user with the specified id.
   * @param {import('../global').ListOptions} options Pagination and filtering options
   * @returns {Promise<Array<UserContactInfo>>}
   */
  async list(options) {
    const response = await this._client.get(`/users/${this._userId}/contactinfo`, options)
    const data = response.data()
    return data.map(d => new UserContactInfo(d))
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
  async create(userContactInfoCreateModel) {
    const response = await this._client.post(`/users/${this._userId}/contactinfo`, userContactInfoCreateModel)
    const data = response.data()
    return new UserContactInfo(data)
  }

  /**
   * @typedef {UserContactInfoCreateModel} UserContactInfoUpdateModel
   */

  /**
   * Updates the contact info of the user with the specified id.
   * @param {String} contactInfoId The id of the contact info.
   * @param {UserContactInfoUpdateModel} userContactInfoUpdateModel The model to update a user contact information.
   * @returns 
   */
  async update(contactInfoId) {
    const response = await this._client.put(`/users/${this._userId}/contactinfo/${contactInfoId}`)
    const data = response.data()
    return new UserContactInfo(data)
  }

  /**
   * Deletes the contact info of the user with the specified id.
   * @param {String} contactInfoId The id of the contact info.
   * @returns {Promise<void>}
   */
  async delete(contactInfoId) {
    await this._client.delete(`/users/${this._userId}/contactinfo/${contactInfoId}`)
  }
}