"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityFiles = void 0;

var _EntityFile = require("../model/EntityFile");

var _fileType = require("file-type");

var _formData = _interopRequireDefault(require("form-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class EntityFiles {
  constructor(client, entityName, entityId) {
    this._client = client;
    this._entityName = entityName;
    this._entityId = entityId;
  }
  /**
   * Returns the file with the specified id of the entity with the specified Id
   * @param {String} fileId 
   * @returns {Promise<EntityFile>}
   */


  async get(fileId) {
    const response = await this._client.get(`${this._entityName}/${this._entityId}/files/${fileId}`);
    const data = response.data();
    return new _EntityFile.EntityFile(data);
  }
  /**
   * Returns all files of the entity with the specified id.
   * @returns {Promise<Array<EntityFile>>}
   */


  async list() {
    const response = await this._client.get(`${this._entityName}/${this._entityId}/files`);
    const data = response.data();
    return data.map(d => new _EntityFile.EntityFile(d));
  }
  /**
   * @typedef {Object} FileMetaData
   * @property {String} [name] The user-specified name of the file.
   * @property {String} [filename] The name of the file.
   */

  /**
   * 
   * @param {File|Buffer} file 
   * @param {FileMetaData} metadata 
   * @returns {Promise<EntityFile>}
   */


  async create(file, metadata) {
    let filename = metadata.filename;
    let fileObj = file;
    filename = filename || fileObj.name;

    if (fileObj instanceof Buffer) {
      const {
        ext
      } = await (0, _fileType.fromBuffer)(fileObj);
      filename = filename || `upload.${ext}`;
    }

    let formData = new _formData.default();
    formData.append('file', fileObj, filename || 'upload');
    formData.append('name', metadata.name || filename || 'upload');
    formData.append('filename', filename || 'upload');
    const response = await this._client.post(`${this._entityName}/${this._entityId}/files`, formData.getBuffer(), {}, {
      'Content-Length': formData.getLengthSync(),
      ...formData.getHeaders()
    });
    const data = response.data();
    return new _EntityFile.EntityFile(data);
  }
  /**
   * Updates the file with the specified id of the entity with the specified Id.
   * @param {String} fileId 
   * @param {EntityFile} entityFile 
   * @returns {Promise<EntityFile>} 
   */


  async update(fileId, entityFile) {
    const response = await this._client.put(`${this._entityName}/${this._entityId}/files/${fileId}`, entityFile);
    const data = response.data();
    return new _EntityFile.EntityFile(data);
  }
  /**
   * Deletes the file with the specified id of the entity with the specified Id.
   * @param {String} fileId 
   */


  async delete(fileId) {
    await this._client.delete(`${this._entityName}/${this._entityId}/files/${fileId}`);
  }
  /**
   * Deletes all the files of the specified entity.
   */


  async deleteAll() {
    await this._client.delete(`${this._entityName}/${this._entityId}/files`);
  }
  /**
   * @typedef {Object} ExternalFileForm
   * @property {String} name The name of the file.
   * @property {String} [description] The description of the file.
   * @property {String} externalProvider The external provider for the file. Like 'google' or 'onedrive'.
   * @property {String} externalFileUrl The url of the external provider.
   * @property {String} [mimeType] The mime type of the external file.
   * 
   */

  /**
   * Endpoint to create file infos with batch operation. Created file infos don't have a version.
   * @param {Array<ExternalFileForm>} value
   */


  async externalFiles(value) {
    const response = await this._client.post(`${this._entityName}/${this._entityId}/externalfiles/`, value);
    const data = response.data();
    return new _EntityFile.EntityFile(data);
  }
  /**
   * @typedef {Object} FileInformations
   * @property {String} url The public URL to the file.
   * @property {String} name The name of the file.
   * @property {String} description The description of the file.
   * 
   */

  /**
   * Uploads a new file by providing an url. The file needs to be a public available url. The file size must not exceed 100MB.
   * @param {FileInformations} value 
   * @returns 
   */


  async byUrl(value) {
    const response = await this._client.post(`${this._entityName}/${this._entityId}/files/byurl`, value);
    const data = response.data();
    return new _EntityFile.EntityFile(data);
  }
  /**
   * @typedef {Object} DownloadOptions
   * @property {Number} [width] Set width to resize.
   * @property {Number} [height] Set height to resize.
   * @property {Boolean} [crop] Whether to crop the image when resizing it.
   */

  /**
   * 
   * @param {String} fileId 
   * @param {DownloadOptions} options
   */


  async download(fileId, options) {
    const response = await this._client.get(`${this._entityName}/${this._entityId}/files/${fileId}/download`, options);
    return response.data();
  }

}

exports.EntityFiles = EntityFiles;