"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

/**
 * User Model
 * @category Models
 * @class
 */
class User {
  /**
   * @typedef {User & {_plain?: true}} UserLike
   */

  /**
   * Model constructor
   * @param {UserLike} data 
   */
  constructor(data) {
    /** @private */
    this._data = data || {};
  }
  /**
   * The firstname of the user.
   * @type {String} nullable
   */


  get firstName() {
    return this._data.firstName;
  }
  /**
   * The lastname of the user.
   * @type {String} nullable
   */


  get lastName() {
    return this._data.lastName;
  }
  /**
   * The birthdate of the user.
   * @type {String} date-time
   */


  get birthDate() {
    return this._data.birthdate;
  }
  /**
   * The gender of the user.
   * @type {String} nullable
   */


  get gender() {
    return this._data.gender;
  }
  /**
   * The title of the user.
   * @type {String} nullable 
   */


  get title() {
    return this._data.title;
  }
  /**
   * The position of the user.
   * @type {String} nullable
   */


  get position() {
    return this._data.position;
  }
  /**
   * The language preference of the user in ISO 639-1 format.
   * @type {String} nullable
   */


  get language() {
    return this._data.language;
  }
  /**
   * The capacity of the user per week in seconds.
   * @type {Integer} int32
   */


  get capacityPerWeek() {
    return this._data.capacityPerWeek;
  }
  /**
   * The id of the user.
   * @type {String} uuid
   */


  get id() {
    return this._data.id;
  }
  /**
   * Unique identifier of the user.
   * @type {String} nullable
   */


  get key() {
    return this._data.key;
  }
  /**
   * The status of the user.
   * @type {Object} status
   */


  get status() {
    return this._data.status;
  }
  /**
   * Flag if the user in this workspace accepted the invitation.
   * @type {Boolean}
   */


  get statusInvitationAccepted() {
    return this._data.status.invitationAccepted;
  }
  /**
   * Whether the user is deactivated.
   * @type {Boolean}
   */


  get statusIsDeactivated() {
    return this._data.status.isDeactivated;
  }
  /**
   * The date this user was created.
   * @type {String} date-time
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * The id of the user who created this user.
   * @type {String} uuid
   */


  get createdBy() {
    return this._data.createdBy;
  }
  /**
   * The date where this user was last updated.
   * @type {String} uuid
   */


  get updatedOn() {
    return this._data.updatedOn;
  }
  /**
   * The id of the user who updated the entity.
   * @type {String} uuid
   */


  get updatedBy() {
    return this._data.updatedBy;
  }
  /**
   * Whether this user is archived. Archived users are automatically inactive and only exist for reference purposes.
   * @type {Boolean}
   */


  get isArchived() {
    return this._data.isArchived;
  }
  /**
   * Whether the user has been deactivated.
   * @type {Boolean}
   */


  get isDeactivated() {
    return this._data.isDeactivated;
  }
  /**
   * The date the user was deactivated.
   * @type {String} date-time
   */


  get deactivatedOn() {
    return this._data.deactivatedOn;
  }
  /**
   * Whether the user has uploaded a profile image.
   * @type {Boolean}
   */


  get hasImage() {
    return this._data.hasImage;
  }
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


  get userContactInfos() {
    return this._data.userContactInfos;
  }
  /**
   * The version of the entity continuously incremented by 1 on every update of the entity.
   * @type {Integer} int64
   */


  get resourceVersion() {
    return this._data.resourceVersion;
  }

}

exports.User = User;