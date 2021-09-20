"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskView = void 0;

/**
 * TaskView Model
 * @category Models
 * @class
 */
class TaskView {
  /**
   * @typedef {TaskView & {_plain?: true}} TaskViewLike
   */

  /**
   * Model constructor
   * @param {TaskViewLike} data 
   */
  constructor(data) {
    /** @private */
    this._data = data || {};
  }
  /**
   * The id of the task view.
   * @type {String} uuid
   */


  get id() {
    return this._data.id;
  }
  /**
   * Whether this task view is shared within the workspace.
   * @type {Boolean}
   */


  get isShared() {
    return this._data.isShared;
  }
  /**
   * The filter query that is applied to the tasks results. The syntax follows the normal filter coventions that can be used on GET routes.
   * @type {String} nullable
   */


  get filter() {
    return this._data.filter;
  }
  /**
   * The filter settings to display. 
   * @type {String} nullable
   */


  get filterSettings() {
    return this._data.filterSettings;
  }
  /**
   * The name of the task view.
   * @type {String} nullable
   */


  get name() {
    return this._data.name;
  }
  /**
   * The date this task view was created
   * @type {String} date-time
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * The id of the user who created this task view.
   * @type {String} uuid
   */


  get createdBy() {
    return this._data.createdBy;
  }
  /**
   * The date this task view was last modified.
   * @type {String} date-time
   */


  get updatedOn() {
    return this._data.updatedOn;
  }
  /**
   * The id of the user who last modified this task view.
   * @type {String} uuid
   */


  get updatedBy() {
    return this._data.updatedBy;
  }

  toPlainObject() {
    return {
      id: this._data.id,
      isShared: this._data.isShared,
      filter: this._data.filter,
      filterSettings: this._data.filterSettings,
      name: this._data.name,
      createdOn: this._data.createdOn,
      createdBy: this._data.createdBy,
      updatedOn: this._data.updatedOn,
      updatedBy: this._data.updatedBy
    };
  }

}

exports.TaskView = TaskView;