"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectMember = void 0;

/**
 * ProjectMember Model
 * @category Models
 * @class
 */
class ProjectMember {
  /**
   * @typedef {ProjectMember & {_plain?: true}} ProjectMemberLike
   */

  /**
   * Model constructor
   * @param {ProjectMemberLike} data 
   */
  constructor(data) {
    /** @private */
    this._data = data || {};
  }
  /**
   * @type {String}
   */


  get id() {
    return this._data.id;
  }
  /**
   * The id of the project member.
   * @type {String}
   */


  get userId() {
    return this._data.userId;
  }
  /**
   * The first name of the project member.
   * @type {String}
   */


  get firstName() {
    return this._data.firstName;
  }
  /**
   * The last name of the project member.
   * @type {String}
   */


  get lastName() {
    return this._data.lastName;
  }
  /**
   * Wheter the project member has an image.
   * @type {Boolean}
   */


  get hasImage() {
    return this._data.hasImage;
  }
  /**
   * @type {String}
   */


  get projectRoleId() {
    return this._data.projectRoleId;
  }
  /**
   * @type {String}
   */


  get projectRoleName() {
    return this._data.projectRoleName;
  }
  /**
   * @type {Boolean}
   */


  get isResponsible() {
    return this._data.isResponsible;
  }
  /**
   * @type {Boolean}
   */


  get isDeactivated() {
    return this._data.isDeactivated;
  }
  /**
   * @type {String}
   */


  get projectId() {
    return this._data.projectId;
  }

  toPlainObject() {
    return {
      id: this._data.id,
      userId: this._data.userId,
      firstName: this._data.firstName,
      lastName: this._data.lastName,
      hasImage: this._data.hasImage,
      projectRoleId: this._data.projectRoleId,
      projectRoleName: this._data.projectRoleName,
      isResponsible: this._data.isResponsible,
      isDeactivated: this._data.isDeactivated,
      projectId: this._data.projectId
    };
  }

}

exports.ProjectMember = ProjectMember;