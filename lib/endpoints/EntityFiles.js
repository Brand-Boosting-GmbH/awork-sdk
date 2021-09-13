"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EntityFiles = void 0;

var _EntityFile = require("../model/EntityFile");

var _FileVersions = require("./FileVersions");

require("../globalTypedef");

var _fileType = require("file-type");

var _formData = _interopRequireDefault(require("form-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Class corresponding to Aworks EntityFiles Endpoints
 * @category Endpoints
 * @see [EntityFiles in Awork API Docs](https://openapi.awork.io/#/EntityFiles)
 */
class EntityFiles {
  /**
  * Endpoint constructor
  * @param {import('../client/index').Client} client
  * @param {('projects'|'companies'|'tasks'|'comments')} entityName
  * @param {String} entityId
  */
  constructor(client, entityName, entityId) {
    /**
     * @private
     */
    this._client = client;
    /**
     * @private
     */

    this._entityName = entityName;
    /**
     * @private
     */

    this._entityId = entityId;
  }
  /**
   * Returns the file with the specified id of the entity with the specified Id
   * @param {String} fileId The id of the file.
   * @returns {Promise<EntityFile>}
   */


  async get(fileId) {
    const response = await this._client.get(`/${this._entityName}/${this._entityId}/files/${fileId}`);
    const data = response.data();
    return new _EntityFile.EntityFile(data);
  }
  /**
   * Returns all files of the entity with the specified id.
   * @param {ListOptions} [options] Pagination and filtering options
   * @returns {Promise<Array<EntityFile>>}
   */


  async list(options) {
    const response = await this._client.get(`/${this._entityName}/${this._entityId}/files`, options);
    const data = response.data();
    return data.map(d => new _EntityFile.EntityFile(d));
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
    const response = await this._client.post(`/${this._entityName}/${this._entityId}/files`, formData.getBuffer(), {}, {
      'Content-Length': formData.getLengthSync(),
      ...formData.getHeaders()
    });
    const data = response.data();
    return new _EntityFile.EntityFile(data);
  }
  /**
   * @typedef {Object} EntityFileUpdateModel
   * @property {String} [name] The user-specified name of the file.
   * @property {String} [description] The description of the file.
   *
   */

  /**
   * Updates the file with the specified id of the entity with the specified Id.
   * @param {String} fileId The id of the file.
   * @param {EntityFileUpdateModel} entityFile The model to update the file with the specified id.
   * @returns {Promise<EntityFile>} 
   */


  async update(fileId, entityFile) {
    const response = await this._client.put(`/${this._entityName}/${this._entityId}/files/${fileId}`, entityFile);
    const data = response.data();
    return new _EntityFile.EntityFile(data);
  }
  /**
   * Deletes the file with the specified id of the entity with the specified Id.
   * @param {String} fileId The id of the file.
   * @returns {Promise<void>}
   */


  async delete(fileId) {
    await this._client.delete(`/${this._entityName}/${this._entityId}/files/${fileId}`);
  }
  /**
   * Deletes all the files of the specified entity.
   * @returns {Promise<void>}
   */


  async deleteAll() {
    await this._client.delete(`/${this._entityName}/${this._entityId}/files`);
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
   * @param {Array<ExternalFileForm>} externalFileForm List of file forms.
   * @returns {Promise<EntityFile>}
   */


  async externalFiles(externalFileForm) {
    const response = await this._client.post(`/${this._entityName}/${this._entityId}/externalfiles/`, externalFileForm);
    const data = response.data();
    return new _EntityFile.EntityFile(data);
  }
  /**
   * @typedef {Object} FileByUrlModel
   * @property {String} url The public URL to the file.
   * @property {String} name The name of the file.
   * @property {String} [description] The description of the file.
   */

  /**
   * Uploads a new file by providing an url. The file needs to be a public available url. The file size must not exceed 100MB.
   * @param {FileByUrlModel} fileByUrlModel The url, name and description of the file.
   * @returns {Promise<EntityFile>}
   */


  async byUrl(fileByUrlModel) {
    const response = await this._client.post(`/${this._entityName}/${this._entityId}/files/byurl`, fileByUrlModel);
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
   * @param {String} fileId The id of the file.
   * @param {DownloadOptions} options The download options.
   * @returns {String} binary
   */


  async download(fileId, options) {
    const response = await this._client.get(`/${this._entityName}/${this._entityId}/files/${fileId}/download`, options);
    return response.data();
  }
  /**
   * Returns the content of the entity file with the specified id as pdf if possible and returns bad request, if not valid type or conversion not possible.
   * @param {String} fileId The id of the file.
   * @param {Boolean} [inline] Default: false. If inline is false, content-disposition header is attachment.
   * @returns {String} binary
   */


  async pdf(fileId, inline = false) {
    const response = await this._client.get(`/${this._entityName}/${this._entityId}/files/${fileId}/pdf`, {
      inline: inline
    });
    return response.data();
  }
  /**
   * @typedef {Object} LinkedEntity The model to change the entity information of the file.
   * @property {String} entityId The id of the entity the file should be linked to.
   * @property {String} entityType The type of the linked entity.
   */

  /**
   * Copys the file to a new entity (meta and content).
   * @param {String} fileId The id of the file.
   * @param {LinkedEntity} entity The entity to copy the file to.
   * @returns {Promise<void>}
   */


  async copy(fileId, entity) {
    const response = await this._client.post(`/${this._entityName}/${this._entityId}/files/${fileId}/copy`, entity);
    return response.data();
  }
  /**
   * Currently only allowed in the projects entity. Returns all files of the entity with the specified id.
   * @returns {Promise<Array<EntityFile>>}
   */


  async allFiles() {
    const response = await this._client.get(`/${this._entityName}/${this._entityId}/allfiles`);
    const data = response.data();
    return data.map(d => new _EntityFile.EntityFile(d));
  }
  /**
   * Returns a url to share the file.
   * @param {String} fileId The id of the file.
   * @returns {Promise<String>}
   */


  async shareUrl(fileId) {
    const response = await this._client.get(`/${this._entityName}/${this._entityId}/files/${fileId}/shareurl`);
    return response.data();
  }
  /**
   * Changes the entity this file belongs to. Switch to the specified entity or to a global file if the 'EntityId' of the model is set to null.
   * @param {String} fileId The id of the file.
   * @param {LinkedEntity} entity The entity to move the file to.
   * @returns {Promise<void>}
   */


  async changeEntity(fileId, entity) {
    const response = await this._client.post(`/${this._entityName}/${this._entityId}/files/${fileId}/changeentity`, entity);
    return response.data();
  }
  /**
   * Returns the {@link FileVersions} Endpoint with the specified entity name, entity id and file Id.
   * @param {String} fileId The id of the file.
   * @returns {FileVersions}
   */


  versions(fileId) {
    return new _FileVersions.FileVersions(this._client, this._entityName, this._entityId, fileId);
  }

}

exports.EntityFiles = EntityFiles;