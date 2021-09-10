"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileVersion = void 0;

/**
 * FileVersion Model
 * @category Models
 * @class
 */
class FileVersion {
  /**
   * @typedef {FileVersion & {_plain?: true}} FileVersionLike
   */

  /**
   * Model constructor
   * @param {FileVersionLike} data 
   */
  constructor(data) {
    /** @private */
    this._data = data;
  }
  /**
   * The id of the file version.
   * @type {String} uuid
   */


  get id() {
    return this._data.id;
  }
  /**
   * The id of the file this version belongs to.
   * @type {String} uuid
   */


  get fileInfoId() {
    return this._data.fileInfoId;
  }
  /**
   * The version of the file.
   * @type {Number} double
   */


  get version() {
    return this._data.version;
  }
  /**
   * The size of the file, in bytes.
   * @type {Number} int64
   */


  get size() {
    return this._data.size;
  }
  /**
   * The width if this is an image file.
   * @type {Number} double, nullable
   */


  get width() {
    return this._data.width;
  }
  /**
   * The height if this is an image file.
   * @type {Number} double, nullable
   */


  get height() {
    return this._data.height;
  }
  /**
   * The date this file version was created.
   * @type {String} date-time
   */


  get createdOn() {
    return this._data.createdOn;
  }
  /**
   * The id of the user who created this file version.
   * @type {String} uuid
   */


  get createdBy() {
    return this._data.createdBy;
  }
  /**
   * The date the file version was last modified.
   * @type {String} date-time
   */


  get updatedOn() {
    return this._data.updatedOn;
  }
  /**
   * The id of the user who last modified this file version.
   * @type {String} uuid
   */


  get updatedBy() {
    return this._data.updatedBy;
  }

  toPlainObject() {
    return {
      id: this._data.id,
      fileInfoId: this._data.fileInfoId,
      version: this._data.version,
      size: this._data.size,
      width: this._data.width,
      height: this._data.height,
      createdOn: this._data.createdOn,
      createdBy: this._data.createdBy,
      updatedOn: this._data.updatedOn,
      updatedBy: this._data.updatedBy
    };
  }

}

exports.FileVersion = FileVersion;