"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubTaskTemplate = void 0;

/**
 * SubTaskTemplate Model
 * @category Models
 * @class
 */
class SubTaskTemplate {
  /**
   * @typedef {SubTaskTemplate & {_plain?: true}} SubTaskTemplateLike
   */

  /**
   * Model constructor
   * @param {SubTaskTemplateLike} data 
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
   * @type {Number} nullable
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
   * @type {String} uuid
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
   * @type {String} date-name
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
   * The id of the task template this subtask template item belongs to.
   * @type {String} uuid
   */


  get taskTemplateId() {
    return this._taskTemplateId;
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
      taskTemplateId: this._data.taskTemplateId
    };
  }

}

exports.SubTaskTemplate = SubTaskTemplate;