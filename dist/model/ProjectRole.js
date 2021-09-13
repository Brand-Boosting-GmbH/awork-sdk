"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectRole = void 0;

/**
 * ProjectRole Model
 * @category Models
 * @class
 */
class ProjectRole {
  /**
   * @typedef {ProjectRole & {_plain?: true}} ProjectRoleLike
   */

  /**
   * Model constructor
   * @param {ProjectRoleLike} data 
   */
  constructor(data) {
    /**
     * @private
     */
    this._data = data;
  }
  /**
   * The name of the project role. Required.
   * @type {String}
   */


  get name() {
    return this._data.name;
  }
  /**
   * Whether to use this role as default when adding new project members.
   * @type {Boolean}
   */


  get isDefault() {
    return this._data.isDefault;
  }
  /**
   * The id of the new default project role. Required if the updated project role is the current default role.
   * @type {String}
   */


  get defaultProjectRoleId() {
    return this._data.defaultProjectRoleId;
  }
  /**
   * The id of the project role. Required.
   * @type {String}
   */


  get id() {
    return this._data.id;
  }
  /**
   * The count of members which are linked to this role.
   * @type {Number}
   */


  get memberCount() {
    return this._data.memberCount;
  }
  /**
   * The members which are linked to this role.
   * @type {Array<import('./ProjectMember').ProjectMember>}
   */


  get members() {
    return this._data.members;
  }
  /**
   * The date this entity was created.
   * @type {String} date-time
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * The id of the user who created this entity.
   * @type {String} uuid
   */


  get createdBy() {
    return this._data.createdBy;
  }
  /**
   * The date this entity was last modified.
   * @type {String} date-time
   */


  get updatedOn() {
    return this._data.updatedOn;
  }
  /**
   * The id of the user who last modified this entity.
   * @type {String} uuid
   */


  get updatedBy() {
    return this._data.updatedBy;
  }

  toPlainObject() {
    return {
      name: this._data.name,
      isDefault: this._data.isDefault,
      defaultProjectRoleId: this._data.defaultProjectRoleId,
      id: this._data.id,
      memberCount: this._data.memberCount,
      members: this._data.members,
      createdOn: this._data.createdOn,
      createdBy: this._data.createdBy,
      updatedOn: this._data.updatedOn,
      updatedBy: this._data.updatedBy
    };
  }

}

exports.ProjectRole = ProjectRole;