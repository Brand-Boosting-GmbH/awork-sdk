"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectStatus = void 0;

class ProjectStatus {
  constructor(data) {
    this._data = data;
  }
  /**
   * The primary identifier of this project status.
   * @type {String}
   */


  get id() {
    return this._data.id;
  }
  /**
   * The name of the project status.
   * @type {String}
   */


  get name() {
    return this._data.name;
  }
  /**
   * @type {Number}
   */


  get order() {
    return this._data.order;
  }
  /**
   * The date this entity was created.
   * @type {String}
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * The id of the user who created this entity.
   * @type {String}
   */


  get createdBy() {
    return this._data.createdBy;
  }
  /**
   * The date this entity was last modified.
   * @type {String}
   */


  get updatedOn() {
    return this._data.updatedOn;
  }
  /**
   * The project template of the status.
   * @type {String}
   */


  get projectTemplateId() {
    return this._data.projectTemplateId;
  }
  /**
   * The id of the project the status belongs to.
   * @type {String}
   */


  get projectId() {
    return this._data.projectId;
  }
  /**
   * The id of the user who last modified this entity.
   * @type {String}
   */


  get updatedBy() {
    return this._data.updatedBy;
  }

  toPlainObject() {
    return {
      id: this._data.id,
      name: this._data.name,
      type: this._data.type,
      order: this._data.order,
      createdOn: this._data.createdOn,
      createdBy: this._data.createdBy,
      updatedOn: this._data.updatedOn,
      projectTemplateId: this._data.projectTemplateId,
      projectId: this._data.projectId,
      updatedBy: this._data.updatedBy
    };
  }

}

exports.ProjectStatus = ProjectStatus;