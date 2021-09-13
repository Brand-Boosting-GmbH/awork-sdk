"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskListTemplate = void 0;

/**
 * TaskListTemplate Model
 * @category Models
 * @class
 */
class TaskListTemplate {
  /**
   * @typedef {TaskListTemplate & {_plain?: true}} TaskListTemplateLike
   */

  /**
   * Model constructor
   * @param {TaskListTemplateLike} data 
   */
  constructor(data) {
    /**@private */
    this._data = data;
  }
  /**
   * The name of the list.
   * @type {String} nullable
   */


  get name() {
    return this._data.name;
  }
  /**
   * The order of the list.
   * @type {String} nullable
   */


  get order() {
    return this._data.order;
  }
  /**
   * The id of the task list.
   * @type {String} uuid
   */


  get id() {
    return this._data.id;
  }
  /**
   * Whether the task list has been archived.
   * @type {Boolean}
   */


  get isArchived() {
    return this._data.isArchived;
  }
  /**
   * The date this task list was created.
   * @type {String} date-time
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * The id of the user who created this task list.
   * @type {String} uuid
   */


  get createdBy() {
    return this._data.createdBy;
  }
  /**
   * The date this task list was last modified.
   * @type {String} date-time
   */


  get updatedOn() {
    return this._data.updatedOn;
  }
  /**
   * The id of the user who last modified this task list.
   * @type {String} uuid
   */


  get updatedBy() {
    return this._data.updatedBy;
  }

  toPlainObject() {
    return {
      name: this._data.name,
      order: this._data.order,
      id: this._data.id,
      isArchived: this._data.isArchived,
      createdOn: this._data.createdOn,
      createdBy: this._data.createdBy,
      updatedOn: this._data.updatedOn,
      updatedBy: this._data.updatedBy
    };
  }

}

exports.TaskListTemplate = TaskListTemplate;