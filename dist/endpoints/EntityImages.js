"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityImages = void 0;

require("../globalTypedef");

var _EntityFile = require("../model/EntityFile");

var _fileType = require("file-type");

var _formData = _interopRequireDefault(require("form-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Class corresponding to Aworks project related part of the Files Endpoints
 * @category Endpoints
 * @see [Files in Awork API Docs](https://openapi.awork.com/#/Files)
 */
class EntityImages {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client 
  * @param {('projects'|'projecttemplates'|'users'|'workspaces'|'companies')} entityName
  * @param {String} entityId
  */
  constructor(client, entityName, entityId) {
    /** @private */
    this._client = client;
    /** @private */

    this._entityName = entityName;
    /** @private */

    this._entityId = entityId;
  }
  /**
   * @typedef {Object} DownloadOptions
   * @property {Number} [width] Set width to resize.
   * @property {Number} [height] Set height to resize.
   * @property {Boolean} [crop] Whether to crop the image when resizing it.
   */

  /**
   * @param {String} fileId The id of the file.
   * @param {DownloadOptions} [options] The download options.
   * @returns {String} binary
   */


  async download(options = {}) {
    const response = await this._client.getBinary(`/files/images/${this._entityName}/${this._entityId}`, options);
    return response.data();
  }
  /**
   * @typedef {Object} FileMetaData
   * @property {String} [name] The user-specified name of the file.
   * @property {String} [filename] The name of the file.
   */

  /**
   * Uploads a File or Buffer Object
   * @param {File|Buffer} file The file content eather as ES6 File object or Buffer.
   * @param {FileMetaData} metadata The file metadata.
   * @returns {Promise<EntityFile>}
   */


  async create(file, metadata) {
    let filename = metadata.filename || file.name;

    if (file instanceof Buffer) {
      const {
        ext
      } = await (0, _fileType.fromBuffer)(file);
      filename = filename || `upload.${ext}`;
    }

    let formData = new _formData.default();
    formData.append('file', file, filename || 'upload');
    formData.append('name', metadata.name || filename || 'upload');
    formData.append('filename', filename || 'upload');
    const response = await this._client.post(`/files/images/${this._entityName}/${this._entityId}`, formData.getBuffer(), {}, {
      'Content-Length': formData.getLengthSync(),
      ...formData.getHeaders()
    });
    const data = response.data();
    return new _EntityFile.EntityFile(data);
  }
  /**
   * Deletes the profile image of the entity with the specified id.
   * @returns {Promise<void>}
   */


  async delete() {
    await this._client.delete(`/files/images/${this._entityName}/${this._entityId}`);
  }

}

exports.EntityImages = EntityImages;