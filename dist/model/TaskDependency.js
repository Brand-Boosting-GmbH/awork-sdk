"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaskDependency = void 0;

/**
 * TaskDependency Model
 * 
 * Describes the dependency between two tasks. One Task is the predecessor and one task is the successor.
 * @category Models
 * @class
 */
class TaskDependency {
  /**
   * @typedef {TaskDependency & {_plain?: true}} TaskDependencyLike
   */

  /**
   * Model constructor
   * @param {TaskDependencyLike} data 
   */
  constructor(data) {
    this.data = data || {};
  }
  /**
   * The Id of the predecessor. One task can have multiple predecessor.
   * @type {String} uuid
   */


  get predecessorId() {
    return this.data.predecessorId;
  }
  /**
   * The Id of the successor. One task can have one successor.
   * @type {String} uuid
   */


  get successorId() {
    return this._data.successorId;
  }
  /**
   * The id of the task dependency.
   * @type {String}
   */


  get id() {
    return this._data.id;
  }
  /**
   * The date this task dependency was created.
   * @type {String} date-time
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * The id of the user who created this task dependency.
   * @type {String} uuid
   */


  get createdBy() {
    return this._data.createdBy;
  }
  /**
   * The date this task dependency was last modified.
   * @type {String} date-time
   */


  get updatedOn() {
    return this._data.updatedOn;
  }
  /**
   * The id of the user who last modified this task dependency.
   * @type {String} uuid
   */


  get updatedBy() {
    return this._data.updatedBy;
  }

  toPlainObject() {
    return {
      predecessor: this._data.predecessor,
      successor: this._data.successor,
      id: this._data.id,
      createdOn: this._data.createdOn,
      createdBy: this._data.createdBy,
      updatedOn: this._data.updatedOn,
      updatedBy: this._data.updatedBy
    };
  }

}

exports.TaskDependency = TaskDependency;