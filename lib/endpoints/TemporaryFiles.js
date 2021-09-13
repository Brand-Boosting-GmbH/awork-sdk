"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemporaryFiles = void 0;

require("../globalTypedef");

var _EntityFile = require("../model/EntityFile");

var _fileType = require("file-type");

var _formData = _interopRequireDefault(require("form-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Class corresponding to Aworks TemporaryFiles Endpoints
 * @category Endpoints
 * @see [TemporaryFiles in Awork API Docs](https://openapi.awork.io/#/TemporaryFiles)
 */
class TemporaryFiles {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client 
  */
  constructor(client) {
    /**
    * @private
    */
    this._client = client;
  }
  /**
   * Returns the meta information of the temporary file of the current user.
   * @param {String} fileId The id of the file.
   * @returns {Promise<EntityFile>}
   */


  async get(fileId) {
    const response = await this._client.get(`/temporaryfiles/${fileId}`);
    const data = response.data();
    return new _EntityFile.EntityFile(data);
  }
  /**
   * Returns the meta information of all temporary files of the current user.
   * @param {ListOptions} [options] Pagination and filtering options
   * @returns {Promise<Array<EntityFile>>}
   */


  async list(options) {
    const response = await this._client.get(`/temporaryfiles`, options);
    const data = response.data();
    return data.map(d => new _EntityFile.EntityFile(d));
  }
  /**
   * @typedef {Object} FileMetaData
   * @property {String} [name] The user-specified name of the temporary file.
   * @property {String} [filename] The name of the temporary file.
   */

  /**
   * Uploads a new temporary file. Use this to upload a file as a form value along with the basic file meta data. The file size must not exceed 1GB.
   * @param {File|Buffer} file 
   * @param {FileMetaData} metadata 
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
    const response = await this._client.post('/temporaryfiles', formData.getBuffer(), {}, {
      'Content-Length': formData.getLengthSync(),
      ...formData.getHeaders()
    });
    const data = response.data();
    return new _EntityFile.EntityFile(data);
  }
  /**
   * @typedef {Object} TemporaryFilesUpdateModel
   * @property {String} [name] The user-specified name of the file.
   * @property {String} [description] The description of the file.
   *
   */

  /**
   * Updates the meta information of the temporary file with the specified id.
   * @param {String} fileId The id of the file.
   * @param {TemporaryFilesUpdateModel} temporaryFile The model to update the temporary file.
   * @returns {Promise<EntityFile>}
   */


  async update(fileId, temporaryFile) {
    const response = await this._client.put(`/temporaryfiles/${fileId}`, temporaryFile);
    const data = response.data();
    return new _EntityFile.EntityFile(data);
  }
  /**
   * Returns the content of the temporary file.
   * @param {String} fileId The id of the file.
   * @returns {Promise<String>}
   */


  async download(fileId) {
    const response = await this._client.get(`/temporaryfiles/${fileId}/download`, nameDescriptionPair);
    return response.data();
  }
  /**
   * @typedef {Object} LinkedEntity The model to change the entity information of the file.
   * @property {String} entityId The id of the entity the file should be linked to.
   * @property {String} entityType The type of the linked entity.
   */

  /**
   * Sets the temporary file to a global or entity file. Links the temporary file to the specified entity or switches to a global file if the 'EntityId' of the model is set to null. The file is no longer a temporary file afterwards and becomes visible.
   * @param {String} fileId The id of the file.
   * @param {LinkedEntity} entityObject
   * @returns {Promise<void>}
   */


  async setEntity(fileId, entityObject) {
    await this._client.post(`/temporaryfiles/${fileId}/setenity`, entityObject);
  }

}

exports.TemporaryFiles = TemporaryFiles;