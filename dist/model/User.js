"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = void 0;

require("../globalTypedef");

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
    return this._data.birthDate;
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
   * The contact information assigned to this user.
   * @type {Array<import('./UserContactInfo').UserContactInfo>}
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
  /**
   * @typedef {Object} UserTagsObject
   * @property {String} id uuid
   * @property {String} name nullable
   * @property {import('../index').Color} color nullable
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


  get tags() {
    return this._data.tags;
  }

  toPlainObject() {
    return {
      id: this._data.id,
      firstName: this._data.firstName,
      lastName: this._data.lastName,
      birthDate: this._data.birthDate,
      gender: this._data.gender,
      title: this._data.title,
      position: this._data.position,
      language: this._data.language,
      capacityPerWeek: this._data.capacityPerWeek,
      key: this._data.key,
      status: {
        invitationAccepted: this._data.status.invitationAccepted,
        isDeactivated: this._data.status.isDeactivated
      },
      createdOn: this._data.createdOn,
      createdBy: this._data.createdBy,
      updatedOn: this._data.updatedOn,
      updatedBy: this._data.updatedBy,
      isArchived: this._data.isArchived,
      isDeactivated: this._data.isDeactivated,
      deactivatedOn: this._data.deactivatedOn,
      hasImage: this._data.hasImage,
      userContactInfos: this._data.userContactInfos,
      resourceVersion: this._data.resourceVersion,
      tags: this._data.tags
    };
  }

}

exports.User = User;