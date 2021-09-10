"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileVersions = void 0;

var _FileVersion = require("../model/FileVersion");

require("../globalTypedef");

var _fileType = require("file-type");

var _formData = _interopRequireDefault(require("form-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Class corresponding to Versions part of the Aworks EntityFiles Endpoints
 * @category Endpoints
 * @see [EntityFiles in Awork API Docs](https://openapi.awork.io/#/EntityFiles)
 */
class FileVersions {
  constructor(client, entityName, entityId, fileId) {
    /** @private */
    this._client = client;
    /** @private */

    this._entityName = entityName;
    /** @private */

    this._entityId = entityId;
    /** @private */

    this._fileId = fileId;
  }
  /**
   * Returns the entity file version with the specified id
   * @param {String} versionId 
   * @returns {Promise<FileVersion>}
   */


  async get(versionId) {
    const response = await this._client.get(`/${this._entityName}/${this._entityId}/files/${this._fileId}/versions/${versionId}`);
    const data = response.data();
    return new _FileVersion.FileVersion(data);
  }
  /**
   * Returns all file versions of the specified entity file.
   * @param {String} fileId
   * @param {ListOptions} [options] Pagination and filtering options
   * @returns {Array<FileVersion>}
   */


  async list(options) {
    const response = await this._client.get(`/${this._entityName}/${this._entityId}/files/${this._fileId}/versions`, options);
    const data = response.data();
    return data.map(d => new _FileVersion.FileVersion(d));
  }
  /**
   * @typedef {Object} FileMetaData
   * @property {String} [name] The user-specified name of the file.
   * @property {String} [filename] The name of the file.
   */

  /** 
   * Uploads a new version of an entity file. Use this to upload a file as a form value along with the basic file meta data. The file size must not exceed 1GB.
   * @param {File|Buffer} file
   * @param {FileMetaData} metadata 
   */


  async create(file, metadata) {
    let filename = metadata.filename || fileObj.name;

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
    const response = await this._client.post(`/${this._entityName}/${this._entityId}/files/${this._fileId}/versions`, formData.getBuffer(), {}, {
      'Content-Length': formData.getLengthSync(),
      ...formData.getHeaders()
    });
    const data = response.data();
    return new _FileVersion.FileVersion(data);
  }
  /**
   * Returns the content of the entity file version with the specified id.
   * @param {String} versionId 
   * @returns {Promise<Object>}
   */


  async download(versionId) {
    const response = await this._client.get(`/${this._entityName}/${this._entityId}/files/${this._fileId}/versions/${versionId}/download`);
    return response.data();
  }

}

exports.FileVersions = FileVersions;