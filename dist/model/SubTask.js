"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubTask = void 0;

/**
 * SubTask Model
 * @category Models
 * @class
 */
class SubTask {
  /**
   * @typedef {SubTask & {_plain?: true}} SubTaskLike
   */

  /**
   * Model constructor
   * @param {SubTaskLike} data 
   */
  constructor(data) {
    /**@private */
    this._data = data;
  }
  /**
   * Whether the check list Item is done.
   * @type {Boolean}
   */


  get isDone() {
    return this._data.isDone;
  }
  /**
   * The name of the check list Item.
   * @type {String} nullable
   */


  get name() {
    return this._data.name;
  }
  /**
   * The order of the check list item.
   * @type {Number} double, nullable
   */


  get order() {
    return this._data.order;
  }
  /**
   * The id of the check list.
   * @type {String} uuid
   */


  get id() {
    return this._data.id;
  }
  /**
   * The date this check list was created.
   * @type {String} date-time
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * The id of the user who created this check list.
   * @type {String} uuid
   */


  get createdBy() {
    return this._data.createdBy;
  }
  /**
   * The date this check list was last modified.
   * @type {String} date-time
   */


  get updatedOn() {
    return this._data.updatedOn;
  }
  /**
   * The id of the user who last modified this check list.
   * @type {String} uuid
   */


  get updatedBy() {
    return this._data.updatedBy;
  }
  /**
   * The id of the task this check list belongs to.
   * @type {String} uuid
   */


  get taskId() {
    return this._data.taskId;
  }

  toPlainObject() {
    return {
      isDone: this._data.isDone,
      name: this._data.name,
      order: this._data.order,
      id: this._data.id,
      createdOn: this._data.createdOn,
      createdBy: this._data.createdBy,
      updatedBy: this._data.updatedBy,
      updatedOn: this._data.updatedOn,
      taskId: this._data.taskId
    };
  }

}

exports.SubTask = SubTask;